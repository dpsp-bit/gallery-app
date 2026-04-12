const CACHE_NAME = 'pwa-gallery-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json'
];

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
        // Cache successful responses for valid URLs
        if (networkResponse && networkResponse.status === 200) {
          const cacheCopy = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            // Suppress errors for unsupported schemes (like chrome-extension://)
            cache.put(event.request, cacheCopy).catch(() => {});
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

      return cachedResponse || fetchPromise;
    })
  );
});
