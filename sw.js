const CACHE_NAME = 'pwa-gallery-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json'
];

const METADATA_STORE = 'cache_metadata';
const PHOTO_STORE = 'photos';
const DB_VERSION = 4;
const DB_NAME = 'pwa-gallery';
const MAX_CACHE_ENTRIES = 500;

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(PHOTO_STORE)) {
        const store = db.createObjectStore(PHOTO_STORE, { keyPath: 'id' });
        store.createIndex('idx_created_at', 'created_at');
        store.createIndex('idx_is_favorite', 'is_favorite');
        store.createIndex('idx_is_hidden', 'is_hidden');
        store.createIndex('idx_tags', 'tags', { multiEntry: true });
      }
      if (!db.objectStoreNames.contains('settings')) {
        db.createObjectStore('settings');
      }
      if (!db.objectStoreNames.contains(METADATA_STORE)) {
        db.createObjectStore(METADATA_STORE, { keyPath: 'url' });
      }
    };
  });
}

function isGalleryImage(url, destination) {
  if (url.includes('favicon.ico') || url.includes('placeholder.svg')) {
    return false;
  }
  return destination === 'image' || /\.(jpg|jpeg|png|webp|gif|svg|avif)($|\?)/i.test(url);
}

function recordAccess(url) {
  return openDB().then((db) => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(METADATA_STORE, 'readwrite');
      const store = tx.objectStore(METADATA_STORE);
      store.put({ url, last_accessed: Date.now() });
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }).catch(err => console.error('[SW] Failed to record access:', err));
}

function evictCache() {
  return openDB().then((db) => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction([METADATA_STORE, PHOTO_STORE], 'readonly');
      const metaStore = tx.objectStore(METADATA_STORE);
      const photoStore = tx.objectStore(PHOTO_STORE);

      let allMeta = [];
      let allPhotos = [];

      metaStore.getAll().onsuccess = (e) => {
        allMeta = e.target.result;
      };

      photoStore.getAll().onsuccess = (e) => {
        allPhotos = e.target.result;
      };

      tx.oncomplete = () => {
        if (allMeta.length <= MAX_CACHE_ENTRIES) {
          resolve();
          return;
        }

        // Map favorited photos
        const favUrls = new Set(
          allPhotos
            .filter(p => p.is_favorite)
            .map(p => p.url)
        );

        const normalEntries = [];
        const favEntries = [];

        for (const meta of allMeta) {
          if (favUrls.has(meta.url)) {
            favEntries.push(meta);
          } else {
            normalEntries.push(meta);
          }
        }

        // Sort ascending (oldest access time first)
        normalEntries.sort((a, b) => a.last_accessed - b.last_accessed);
        favEntries.sort((a, b) => a.last_accessed - b.last_accessed);

        let overage = allMeta.length - MAX_CACHE_ENTRIES;
        const urlsToEvict = [];

        // Evict normal images first
        while (overage > 0 && normalEntries.length > 0) {
          const entry = normalEntries.shift();
          urlsToEvict.push(entry.url);
          overage--;
        }

        // If limit still exceeded, evict favorite images
        while (overage > 0 && favEntries.length > 0) {
          const entry = favEntries.shift();
          urlsToEvict.push(entry.url);
          overage--;
        }

        if (urlsToEvict.length > 0) {
          caches.open(CACHE_NAME).then((cache) => {
            Promise.all(urlsToEvict.map(url => cache.delete(url)))
              .then(() => {
                const writeTx = db.transaction(METADATA_STORE, 'readwrite');
                const writeStore = writeTx.objectStore(METADATA_STORE);
                urlsToEvict.forEach(url => writeStore.delete(url));
                writeTx.oncomplete = () => resolve();
                writeTx.onerror = () => reject(writeTx.error);
              });
          });
        } else {
          resolve();
        }
      };

      tx.onerror = () => reject(tx.error);
    });
  }).catch(err => console.error('[SW] Failed to evict cache:', err));
}

// Install Event: Cache core assets with individual resilience
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      for (const asset of ASSETS_TO_CACHE) {
        try {
          await cache.add(asset);
        } catch (e) {
          console.warn(`[SW] Failed to cache ${asset} during install:`, e);
        }
      }
    })
  );
  self.skipWaiting();
});

// Activate Event: Cleanup old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event: Network-First for HTML, Stale-While-Revalidate for Assets
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // Network-First strategy for navigation (HTML) to always get the latest Vite bundle hashes
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).then((networkResponse) => {
        const cacheCopy = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, cacheCopy));
        return networkResponse;
      }).catch(async () => {
        const cached = await caches.match(event.request);
        if (cached) return cached;
        return new Response('Network error occurred', { 
          status: 503, 
          statusText: 'Service Unavailable',
          headers: { 'Content-Type': 'text/plain' }
        });
      })
    );
    return;
  }

  // Stale-While-Revalidate for other assets and images
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        // Cache successful responses for valid URLs (including status 0/opaque)
        if (networkResponse && (networkResponse.status === 200 || networkResponse.status === 0)) {
          const cacheCopy = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            // Suppress errors for unsupported schemes (like chrome-extension://)
            cache.put(event.request, cacheCopy).then(() => {
              if (isGalleryImage(event.request.url, event.request.destination)) {
                recordAccess(event.request.url).then(() => {
                  evictCache();
                });
              }
            }).catch(() => {});
          });
        }
        return networkResponse;
      }).catch(() => {
        // Return a valid mock Response object so respondWith doesn't throw a TypeError
        return new Response('Network error occurred', { 
          status: 503, 
          statusText: 'Service Unavailable',
          headers: { 'Content-Type': 'text/plain' }
        });
      });

      if (cachedResponse) {
        // Cache hit: update access time in background
        if (isGalleryImage(event.request.url, event.request.destination)) {
          recordAccess(event.request.url);
        }
        return cachedResponse;
      }
      return fetchPromise;
    })
  );
});
