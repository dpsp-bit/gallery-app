//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
//#region node_modules/react/cjs/react.production.min.js
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
	var l = Symbol.for("react.element"), n = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z = Symbol.iterator;
	function A(a) {
		if (null === a || "object" !== typeof a) return null;
		a = z && a[z] || a["@@iterator"];
		return "function" === typeof a ? a : null;
	}
	var B = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, C = Object.assign, D = {};
	function E(a, b, e) {
		this.props = a;
		this.context = b;
		this.refs = D;
		this.updater = e || B;
	}
	E.prototype.isReactComponent = {};
	E.prototype.setState = function(a, b) {
		if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, a, b, "setState");
	};
	E.prototype.forceUpdate = function(a) {
		this.updater.enqueueForceUpdate(this, a, "forceUpdate");
	};
	function F() {}
	F.prototype = E.prototype;
	function G(a, b, e) {
		this.props = a;
		this.context = b;
		this.refs = D;
		this.updater = e || B;
	}
	var H = G.prototype = new F();
	H.constructor = G;
	C(H, E.prototype);
	H.isPureReactComponent = !0;
	var I = Array.isArray, J = Object.prototype.hasOwnProperty, K = { current: null }, L = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function M(a, b, e) {
		var d, c = {}, k = null, h = null;
		if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
		var g = arguments.length - 2;
		if (1 === g) c.children = e;
		else if (1 < g) {
			for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
			c.children = f;
		}
		if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
		return {
			$$typeof: l,
			type: a,
			key: k,
			ref: h,
			props: c,
			_owner: K.current
		};
	}
	function N(a, b) {
		return {
			$$typeof: l,
			type: a.type,
			key: b,
			ref: a.ref,
			props: a.props,
			_owner: a._owner
		};
	}
	function O(a) {
		return "object" === typeof a && null !== a && a.$$typeof === l;
	}
	function escape(a) {
		var b = {
			"=": "=0",
			":": "=2"
		};
		return "$" + a.replace(/[=:]/g, function(a) {
			return b[a];
		});
	}
	var P = /\/+/g;
	function Q(a, b) {
		return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
	}
	function R(a, b, e, d, c) {
		var k = typeof a;
		if ("undefined" === k || "boolean" === k) a = null;
		var h = !1;
		if (null === a) h = !0;
		else switch (k) {
			case "string":
			case "number":
				h = !0;
				break;
			case "object": switch (a.$$typeof) {
				case l:
				case n: h = !0;
			}
		}
		if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a) {
			return a;
		})) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
		h = 0;
		d = "" === d ? "." : d + ":";
		if (I(a)) for (var g = 0; g < a.length; g++) {
			k = a[g];
			var f = d + Q(k, g);
			h += R(k, b, e, f, c);
		}
		else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
		else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
		return h;
	}
	function S(a, b, e) {
		if (null == a) return a;
		var d = [], c = 0;
		R(a, d, "", "", function(a) {
			return b.call(e, a, c++);
		});
		return d;
	}
	function T(a) {
		if (-1 === a._status) {
			var b = a._result;
			b = b();
			b.then(function(b) {
				if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
			}, function(b) {
				if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
			});
			-1 === a._status && (a._status = 0, a._result = b);
		}
		if (1 === a._status) return a._result.default;
		throw a._result;
	}
	var U = { current: null }, V = { transition: null }, W = {
		ReactCurrentDispatcher: U,
		ReactCurrentBatchConfig: V,
		ReactCurrentOwner: K
	};
	function X() {
		throw Error("act(...) is not supported in production builds of React.");
	}
	exports.Children = {
		map: S,
		forEach: function(a, b, e) {
			S(a, function() {
				b.apply(this, arguments);
			}, e);
		},
		count: function(a) {
			var b = 0;
			S(a, function() {
				b++;
			});
			return b;
		},
		toArray: function(a) {
			return S(a, function(a) {
				return a;
			}) || [];
		},
		only: function(a) {
			if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
			return a;
		}
	};
	exports.Component = E;
	exports.Fragment = p;
	exports.Profiler = r;
	exports.PureComponent = G;
	exports.StrictMode = q;
	exports.Suspense = w;
	exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
	exports.act = X;
	exports.cloneElement = function(a, b, e) {
		if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
		var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
		if (null != b) {
			void 0 !== b.ref && (k = b.ref, h = K.current);
			void 0 !== b.key && (c = "" + b.key);
			if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
			for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
		}
		var f = arguments.length - 2;
		if (1 === f) d.children = e;
		else if (1 < f) {
			g = Array(f);
			for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
			d.children = g;
		}
		return {
			$$typeof: l,
			type: a.type,
			key: c,
			ref: k,
			props: d,
			_owner: h
		};
	};
	exports.createContext = function(a) {
		a = {
			$$typeof: u,
			_currentValue: a,
			_currentValue2: a,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null
		};
		a.Provider = {
			$$typeof: t,
			_context: a
		};
		return a.Consumer = a;
	};
	exports.createElement = M;
	exports.createFactory = function(a) {
		var b = M.bind(null, a);
		b.type = a;
		return b;
	};
	exports.createRef = function() {
		return { current: null };
	};
	exports.forwardRef = function(a) {
		return {
			$$typeof: v,
			render: a
		};
	};
	exports.isValidElement = O;
	exports.lazy = function(a) {
		return {
			$$typeof: y,
			_payload: {
				_status: -1,
				_result: a
			},
			_init: T
		};
	};
	exports.memo = function(a, b) {
		return {
			$$typeof: x,
			type: a,
			compare: void 0 === b ? null : b
		};
	};
	exports.startTransition = function(a) {
		var b = V.transition;
		V.transition = {};
		try {
			a();
		} finally {
			V.transition = b;
		}
	};
	exports.unstable_act = X;
	exports.useCallback = function(a, b) {
		return U.current.useCallback(a, b);
	};
	exports.useContext = function(a) {
		return U.current.useContext(a);
	};
	exports.useDebugValue = function() {};
	exports.useDeferredValue = function(a) {
		return U.current.useDeferredValue(a);
	};
	exports.useEffect = function(a, b) {
		return U.current.useEffect(a, b);
	};
	exports.useId = function() {
		return U.current.useId();
	};
	exports.useImperativeHandle = function(a, b, e) {
		return U.current.useImperativeHandle(a, b, e);
	};
	exports.useInsertionEffect = function(a, b) {
		return U.current.useInsertionEffect(a, b);
	};
	exports.useLayoutEffect = function(a, b) {
		return U.current.useLayoutEffect(a, b);
	};
	exports.useMemo = function(a, b) {
		return U.current.useMemo(a, b);
	};
	exports.useReducer = function(a, b, e) {
		return U.current.useReducer(a, b, e);
	};
	exports.useRef = function(a) {
		return U.current.useRef(a);
	};
	exports.useState = function(a) {
		return U.current.useState(a);
	};
	exports.useSyncExternalStore = function(a, b, e) {
		return U.current.useSyncExternalStore(a, b, e);
	};
	exports.useTransition = function() {
		return U.current.useTransition();
	};
	exports.version = "18.3.1";
}));
//#endregion
//#region node_modules/react/index.js
var require_react = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_production_min();
}));
//#endregion
//#region node_modules/scheduler/cjs/scheduler.production.min.js
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_scheduler_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
	function f(a, b) {
		var c = a.length;
		a.push(b);
		a: for (; 0 < c;) {
			var d = c - 1 >>> 1, e = a[d];
			if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
			else break a;
		}
	}
	function h(a) {
		return 0 === a.length ? null : a[0];
	}
	function k(a) {
		if (0 === a.length) return null;
		var b = a[0], c = a.pop();
		if (c !== b) {
			a[0] = c;
			a: for (var d = 0, e = a.length, w = e >>> 1; d < w;) {
				var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
				if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
				else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;
				else break a;
			}
		}
		return b;
	}
	function g(a, b) {
		var c = a.sortIndex - b.sortIndex;
		return 0 !== c ? c : a.id - b.id;
	}
	if ("object" === typeof performance && "function" === typeof performance.now) {
		var l = performance;
		exports.unstable_now = function() {
			return l.now();
		};
	} else {
		var p = Date, q = p.now();
		exports.unstable_now = function() {
			return p.now() - q;
		};
	}
	var r = [], t = [], u = 1, v = null, y = 3, z = !1, A = !1, B = !1, D = "function" === typeof setTimeout ? setTimeout : null, E = "function" === typeof clearTimeout ? clearTimeout : null, F = "undefined" !== typeof setImmediate ? setImmediate : null;
	"undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function G(a) {
		for (var b = h(t); null !== b;) {
			if (null === b.callback) k(t);
			else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);
			else break;
			b = h(t);
		}
	}
	function H(a) {
		B = !1;
		G(a);
		if (!A) if (null !== h(r)) A = !0, I(J);
		else {
			var b = h(t);
			null !== b && K(H, b.startTime - a);
		}
	}
	function J(a, b) {
		A = !1;
		B && (B = !1, E(L), L = -1);
		z = !0;
		var c = y;
		try {
			G(b);
			for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M());) {
				var d = v.callback;
				if ("function" === typeof d) {
					v.callback = null;
					y = v.priorityLevel;
					var e = d(v.expirationTime <= b);
					b = exports.unstable_now();
					"function" === typeof e ? v.callback = e : v === h(r) && k(r);
					G(b);
				} else k(r);
				v = h(r);
			}
			if (null !== v) var w = !0;
			else {
				var m = h(t);
				null !== m && K(H, m.startTime - b);
				w = !1;
			}
			return w;
		} finally {
			v = null, y = c, z = !1;
		}
	}
	var N = !1, O = null, L = -1, P = 5, Q = -1;
	function M() {
		return exports.unstable_now() - Q < P ? !1 : !0;
	}
	function R() {
		if (null !== O) {
			var a = exports.unstable_now();
			Q = a;
			var b = !0;
			try {
				b = O(!0, a);
			} finally {
				b ? S() : (N = !1, O = null);
			}
		} else N = !1;
	}
	var S;
	if ("function" === typeof F) S = function() {
		F(R);
	};
	else if ("undefined" !== typeof MessageChannel) {
		var T = new MessageChannel(), U = T.port2;
		T.port1.onmessage = R;
		S = function() {
			U.postMessage(null);
		};
	} else S = function() {
		D(R, 0);
	};
	function I(a) {
		O = a;
		N || (N = !0, S());
	}
	function K(a, b) {
		L = D(function() {
			a(exports.unstable_now());
		}, b);
	}
	exports.unstable_IdlePriority = 5;
	exports.unstable_ImmediatePriority = 1;
	exports.unstable_LowPriority = 4;
	exports.unstable_NormalPriority = 3;
	exports.unstable_Profiling = null;
	exports.unstable_UserBlockingPriority = 2;
	exports.unstable_cancelCallback = function(a) {
		a.callback = null;
	};
	exports.unstable_continueExecution = function() {
		A || z || (A = !0, I(J));
	};
	exports.unstable_forceFrameRate = function(a) {
		0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
	};
	exports.unstable_getCurrentPriorityLevel = function() {
		return y;
	};
	exports.unstable_getFirstCallbackNode = function() {
		return h(r);
	};
	exports.unstable_next = function(a) {
		switch (y) {
			case 1:
			case 2:
			case 3:
				var b = 3;
				break;
			default: b = y;
		}
		var c = y;
		y = b;
		try {
			return a();
		} finally {
			y = c;
		}
	};
	exports.unstable_pauseExecution = function() {};
	exports.unstable_requestPaint = function() {};
	exports.unstable_runWithPriority = function(a, b) {
		switch (a) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: a = 3;
		}
		var c = y;
		y = a;
		try {
			return b();
		} finally {
			y = c;
		}
	};
	exports.unstable_scheduleCallback = function(a, b, c) {
		var d = exports.unstable_now();
		"object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
		switch (a) {
			case 1:
				var e = -1;
				break;
			case 2:
				e = 250;
				break;
			case 5:
				e = 1073741823;
				break;
			case 4:
				e = 1e4;
				break;
			default: e = 5e3;
		}
		e = c + e;
		a = {
			id: u++,
			callback: b,
			priorityLevel: a,
			startTime: c,
			expirationTime: e,
			sortIndex: -1
		};
		c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = !0, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = !0, I(J)));
		return a;
	};
	exports.unstable_shouldYield = M;
	exports.unstable_wrapCallback = function(a) {
		var b = y;
		return function() {
			var c = y;
			y = b;
			try {
				return a.apply(this, arguments);
			} finally {
				y = c;
			}
		};
	};
}));
//#endregion
//#region node_modules/scheduler/index.js
var require_scheduler = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_scheduler_production_min();
}));
//#endregion
//#region node_modules/react-dom/cjs/react-dom.production.min.js
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_dom_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
	var aa = require_react(), ca = require_scheduler();
	function p(a) {
		for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
		return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	var da = /* @__PURE__ */ new Set(), ea = {};
	function fa(a, b) {
		ha(a, b);
		ha(a + "Capture", b);
	}
	function ha(a, b) {
		ea[a] = b;
		for (a = 0; a < b.length; a++) da.add(b[a]);
	}
	var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
	function oa(a) {
		if (ja.call(ma, a)) return !0;
		if (ja.call(la, a)) return !1;
		if (ka.test(a)) return ma[a] = !0;
		la[a] = !0;
		return !1;
	}
	function pa(a, b, c, d) {
		if (null !== c && 0 === c.type) return !1;
		switch (typeof b) {
			case "function":
			case "symbol": return !0;
			case "boolean":
				if (d) return !1;
				if (null !== c) return !c.acceptsBooleans;
				a = a.toLowerCase().slice(0, 5);
				return "data-" !== a && "aria-" !== a;
			default: return !1;
		}
	}
	function qa(a, b, c, d) {
		if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return !0;
		if (d) return !1;
		if (null !== c) switch (c.type) {
			case 3: return !b;
			case 4: return !1 === b;
			case 5: return isNaN(b);
			case 6: return isNaN(b) || 1 > b;
		}
		return !1;
	}
	function v(a, b, c, d, e, f, g) {
		this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
		this.attributeName = d;
		this.attributeNamespace = e;
		this.mustUseProperty = c;
		this.propertyName = a;
		this.type = b;
		this.sanitizeURL = f;
		this.removeEmptyString = g;
	}
	var z = {};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
		z[a] = new v(a, 0, !1, a, null, !1, !1);
	});
	[
		["acceptCharset", "accept-charset"],
		["className", "class"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"]
	].forEach(function(a) {
		var b = a[0];
		z[b] = new v(b, 1, !1, a[1], null, !1, !1);
	});
	[
		"contentEditable",
		"draggable",
		"spellCheck",
		"value"
	].forEach(function(a) {
		z[a] = new v(a, 2, !1, a.toLowerCase(), null, !1, !1);
	});
	[
		"autoReverse",
		"externalResourcesRequired",
		"focusable",
		"preserveAlpha"
	].forEach(function(a) {
		z[a] = new v(a, 2, !1, a, null, !1, !1);
	});
	"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
		z[a] = new v(a, 3, !1, a.toLowerCase(), null, !1, !1);
	});
	[
		"checked",
		"multiple",
		"muted",
		"selected"
	].forEach(function(a) {
		z[a] = new v(a, 3, !0, a, null, !1, !1);
	});
	["capture", "download"].forEach(function(a) {
		z[a] = new v(a, 4, !1, a, null, !1, !1);
	});
	[
		"cols",
		"rows",
		"size",
		"span"
	].forEach(function(a) {
		z[a] = new v(a, 6, !1, a, null, !1, !1);
	});
	["rowSpan", "start"].forEach(function(a) {
		z[a] = new v(a, 5, !1, a.toLowerCase(), null, !1, !1);
	});
	var ra = /[\-:]([a-z])/g;
	function sa(a) {
		return a[1].toUpperCase();
	}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
		var b = a.replace(ra, sa);
		z[b] = new v(b, 1, !1, a, null, !1, !1);
	});
	"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
		var b = a.replace(ra, sa);
		z[b] = new v(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
	});
	[
		"xml:base",
		"xml:lang",
		"xml:space"
	].forEach(function(a) {
		var b = a.replace(ra, sa);
		z[b] = new v(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
	});
	["tabIndex", "crossOrigin"].forEach(function(a) {
		z[a] = new v(a, 1, !1, a.toLowerCase(), null, !1, !1);
	});
	z.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
	[
		"src",
		"href",
		"action",
		"formAction"
	].forEach(function(a) {
		z[a] = new v(a, 1, !1, a.toLowerCase(), null, !0, !0);
	});
	function ta(a, b, c, d) {
		var e = z.hasOwnProperty(b) ? z[b] : null;
		if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
	}
	var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
	var Ia = Symbol.for("react.offscreen");
	var Ja = Symbol.iterator;
	function Ka(a) {
		if (null === a || "object" !== typeof a) return null;
		a = Ja && a[Ja] || a["@@iterator"];
		return "function" === typeof a ? a : null;
	}
	var A = Object.assign, La;
	function Ma(a) {
		if (void 0 === La) try {
			throw Error();
		} catch (c) {
			var b = c.stack.trim().match(/\n( *(at )?)/);
			La = b && b[1] || "";
		}
		return "\n" + La + a;
	}
	var Na = !1;
	function Oa(a, b) {
		if (!a || Na) return "";
		Na = !0;
		var c = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			if (b) if (b = function() {
				throw Error();
			}, Object.defineProperty(b.prototype, "props", { set: function() {
				throw Error();
			} }), "object" === typeof Reflect && Reflect.construct) {
				try {
					Reflect.construct(b, []);
				} catch (l) {
					var d = l;
				}
				Reflect.construct(a, [], b);
			} else {
				try {
					b.call();
				} catch (l) {
					d = l;
				}
				a.call(b.prototype);
			}
			else {
				try {
					throw Error();
				} catch (l) {
					d = l;
				}
				a();
			}
		} catch (l) {
			if (l && d && "string" === typeof l.stack) {
				for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) h--;
				for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
					if (1 !== g || 1 !== h) do
						if (g--, h--, 0 > h || e[g] !== f[h]) {
							var k = "\n" + e[g].replace(" at new ", " at ");
							a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
							return k;
						}
					while (1 <= g && 0 <= h);
					break;
				}
			}
		} finally {
			Na = !1, Error.prepareStackTrace = c;
		}
		return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
	}
	function Pa(a) {
		switch (a.tag) {
			case 5: return Ma(a.type);
			case 16: return Ma("Lazy");
			case 13: return Ma("Suspense");
			case 19: return Ma("SuspenseList");
			case 0:
			case 2:
			case 15: return a = Oa(a.type, !1), a;
			case 11: return a = Oa(a.type.render, !1), a;
			case 1: return a = Oa(a.type, !0), a;
			default: return "";
		}
	}
	function Qa(a) {
		if (null == a) return null;
		if ("function" === typeof a) return a.displayName || a.name || null;
		if ("string" === typeof a) return a;
		switch (a) {
			case ya: return "Fragment";
			case wa: return "Portal";
			case Aa: return "Profiler";
			case za: return "StrictMode";
			case Ea: return "Suspense";
			case Fa: return "SuspenseList";
		}
		if ("object" === typeof a) switch (a.$$typeof) {
			case Ca: return (a.displayName || "Context") + ".Consumer";
			case Ba: return (a._context.displayName || "Context") + ".Provider";
			case Da:
				var b = a.render;
				a = a.displayName;
				a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
				return a;
			case Ga: return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
			case Ha:
				b = a._payload;
				a = a._init;
				try {
					return Qa(a(b));
				} catch (c) {}
		}
		return null;
	}
	function Ra(a) {
		var b = a.type;
		switch (a.tag) {
			case 24: return "Cache";
			case 9: return (b.displayName || "Context") + ".Consumer";
			case 10: return (b._context.displayName || "Context") + ".Provider";
			case 18: return "DehydratedFragment";
			case 11: return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
			case 7: return "Fragment";
			case 5: return b;
			case 4: return "Portal";
			case 3: return "Root";
			case 6: return "Text";
			case 16: return Qa(b);
			case 8: return b === za ? "StrictMode" : "Mode";
			case 22: return "Offscreen";
			case 12: return "Profiler";
			case 21: return "Scope";
			case 13: return "Suspense";
			case 19: return "SuspenseList";
			case 25: return "TracingMarker";
			case 1:
			case 0:
			case 17:
			case 2:
			case 14:
			case 15:
				if ("function" === typeof b) return b.displayName || b.name || null;
				if ("string" === typeof b) return b;
		}
		return null;
	}
	function Sa(a) {
		switch (typeof a) {
			case "boolean":
			case "number":
			case "string":
			case "undefined": return a;
			case "object": return a;
			default: return "";
		}
	}
	function Ta(a) {
		var b = a.type;
		return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
	}
	function Ua(a) {
		var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
		if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
			var e = c.get, f = c.set;
			Object.defineProperty(a, b, {
				configurable: !0,
				get: function() {
					return e.call(this);
				},
				set: function(a) {
					d = "" + a;
					f.call(this, a);
				}
			});
			Object.defineProperty(a, b, { enumerable: c.enumerable });
			return {
				getValue: function() {
					return d;
				},
				setValue: function(a) {
					d = "" + a;
				},
				stopTracking: function() {
					a._valueTracker = null;
					delete a[b];
				}
			};
		}
	}
	function Va(a) {
		a._valueTracker || (a._valueTracker = Ua(a));
	}
	function Wa(a) {
		if (!a) return !1;
		var b = a._valueTracker;
		if (!b) return !0;
		var c = b.getValue();
		var d = "";
		a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
		a = d;
		return a !== c ? (b.setValue(a), !0) : !1;
	}
	function Xa(a) {
		a = a || ("undefined" !== typeof document ? document : void 0);
		if ("undefined" === typeof a) return null;
		try {
			return a.activeElement || a.body;
		} catch (b) {
			return a.body;
		}
	}
	function Ya(a, b) {
		var c = b.checked;
		return A({}, b, {
			defaultChecked: void 0,
			defaultValue: void 0,
			value: void 0,
			checked: null != c ? c : a._wrapperState.initialChecked
		});
	}
	function Za(a, b) {
		var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
		c = Sa(null != b.value ? b.value : c);
		a._wrapperState = {
			initialChecked: d,
			initialValue: c,
			controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
		};
	}
	function ab(a, b) {
		b = b.checked;
		null != b && ta(a, "checked", b, !1);
	}
	function bb(a, b) {
		ab(a, b);
		var c = Sa(b.value), d = b.type;
		if (null != c) if ("number" === d) {
			if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
		} else a.value !== "" + c && (a.value = "" + c);
		else if ("submit" === d || "reset" === d) {
			a.removeAttribute("value");
			return;
		}
		b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
		null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
	}
	function db(a, b, c) {
		if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
			var d = b.type;
			if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
			b = "" + a._wrapperState.initialValue;
			c || b === a.value || (a.value = b);
			a.defaultValue = b;
		}
		c = a.name;
		"" !== c && (a.name = "");
		a.defaultChecked = !!a._wrapperState.initialChecked;
		"" !== c && (a.name = c);
	}
	function cb(a, b, c) {
		if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
	}
	var eb = Array.isArray;
	function fb(a, b, c, d) {
		a = a.options;
		if (b) {
			b = {};
			for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;
			for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
		} else {
			c = "" + Sa(c);
			b = null;
			for (e = 0; e < a.length; e++) {
				if (a[e].value === c) {
					a[e].selected = !0;
					d && (a[e].defaultSelected = !0);
					return;
				}
				null !== b || a[e].disabled || (b = a[e]);
			}
			null !== b && (b.selected = !0);
		}
	}
	function gb(a, b) {
		if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
		return A({}, b, {
			value: void 0,
			defaultValue: void 0,
			children: "" + a._wrapperState.initialValue
		});
	}
	function hb(a, b) {
		var c = b.value;
		if (null == c) {
			c = b.children;
			b = b.defaultValue;
			if (null != c) {
				if (null != b) throw Error(p(92));
				if (eb(c)) {
					if (1 < c.length) throw Error(p(93));
					c = c[0];
				}
				b = c;
			}
			b ??= "";
			c = b;
		}
		a._wrapperState = { initialValue: Sa(c) };
	}
	function ib(a, b) {
		var c = Sa(b.value), d = Sa(b.defaultValue);
		null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
		null != d && (a.defaultValue = "" + d);
	}
	function jb(a) {
		var b = a.textContent;
		b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
	}
	function kb(a) {
		switch (a) {
			case "svg": return "http://www.w3.org/2000/svg";
			case "math": return "http://www.w3.org/1998/Math/MathML";
			default: return "http://www.w3.org/1999/xhtml";
		}
	}
	function lb(a, b) {
		return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
	}
	var mb, nb = function(a) {
		return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
			MSApp.execUnsafeLocalFunction(function() {
				return a(b, c, d, e);
			});
		} : a;
	}(function(a, b) {
		if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
		else {
			mb = mb || document.createElement("div");
			mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
			for (b = mb.firstChild; a.firstChild;) a.removeChild(a.firstChild);
			for (; b.firstChild;) a.appendChild(b.firstChild);
		}
	});
	function ob(a, b) {
		if (b) {
			var c = a.firstChild;
			if (c && c === a.lastChild && 3 === c.nodeType) {
				c.nodeValue = b;
				return;
			}
		}
		a.textContent = b;
	}
	var pb = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0
	}, qb = [
		"Webkit",
		"ms",
		"Moz",
		"O"
	];
	Object.keys(pb).forEach(function(a) {
		qb.forEach(function(b) {
			b = b + a.charAt(0).toUpperCase() + a.substring(1);
			pb[b] = pb[a];
		});
	});
	function rb(a, b, c) {
		return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
	}
	function sb(a, b) {
		a = a.style;
		for (var c in b) if (b.hasOwnProperty(c)) {
			var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
			"float" === c && (c = "cssFloat");
			d ? a.setProperty(c, e) : a[c] = e;
		}
	}
	var tb = A({ menuitem: !0 }, {
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0
	});
	function ub(a, b) {
		if (b) {
			if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
			if (null != b.dangerouslySetInnerHTML) {
				if (null != b.children) throw Error(p(60));
				if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
			}
			if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
		}
	}
	function vb(a, b) {
		if (-1 === a.indexOf("-")) return "string" === typeof b.is;
		switch (a) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var wb = null;
	function xb(a) {
		a = a.target || a.srcElement || window;
		a.correspondingUseElement && (a = a.correspondingUseElement);
		return 3 === a.nodeType ? a.parentNode : a;
	}
	var yb = null, zb = null, Ab = null;
	function Bb(a) {
		if (a = Cb(a)) {
			if ("function" !== typeof yb) throw Error(p(280));
			var b = a.stateNode;
			b && (b = Db(b), yb(a.stateNode, a.type, b));
		}
	}
	function Eb(a) {
		zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
	}
	function Fb() {
		if (zb) {
			var a = zb, b = Ab;
			Ab = zb = null;
			Bb(a);
			if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
		}
	}
	function Gb(a, b) {
		return a(b);
	}
	function Hb() {}
	var Ib = !1;
	function Jb(a, b, c) {
		if (Ib) return a(b, c);
		Ib = !0;
		try {
			return Gb(a, b, c);
		} finally {
			if (Ib = !1, null !== zb || null !== Ab) Hb(), Fb();
		}
	}
	function Kb(a, b) {
		var c = a.stateNode;
		if (null === c) return null;
		var d = Db(c);
		if (null === d) return null;
		c = d[b];
		a: switch (b) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
				a = !d;
				break a;
			default: a = !1;
		}
		if (a) return null;
		if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
		return c;
	}
	var Lb = !1;
	if (ia) try {
		var Mb = {};
		Object.defineProperty(Mb, "passive", { get: function() {
			Lb = !0;
		} });
		window.addEventListener("test", Mb, Mb);
		window.removeEventListener("test", Mb, Mb);
	} catch (a) {
		Lb = !1;
	}
	function Nb(a, b, c, d, e, f, g, h, k) {
		var l = Array.prototype.slice.call(arguments, 3);
		try {
			b.apply(c, l);
		} catch (m) {
			this.onError(m);
		}
	}
	var Ob = !1, Pb = null, Qb = !1, Rb = null, Sb = { onError: function(a) {
		Ob = !0;
		Pb = a;
	} };
	function Tb(a, b, c, d, e, f, g, h, k) {
		Ob = !1;
		Pb = null;
		Nb.apply(Sb, arguments);
	}
	function Ub(a, b, c, d, e, f, g, h, k) {
		Tb.apply(this, arguments);
		if (Ob) {
			if (Ob) {
				var l = Pb;
				Ob = !1;
				Pb = null;
			} else throw Error(p(198));
			Qb || (Qb = !0, Rb = l);
		}
	}
	function Vb(a) {
		var b = a, c = a;
		if (a.alternate) for (; b.return;) b = b.return;
		else {
			a = b;
			do
				b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
			while (a);
		}
		return 3 === b.tag ? c : null;
	}
	function Wb(a) {
		if (13 === a.tag) {
			var b = a.memoizedState;
			null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
			if (null !== b) return b.dehydrated;
		}
		return null;
	}
	function Xb(a) {
		if (Vb(a) !== a) throw Error(p(188));
	}
	function Yb(a) {
		var b = a.alternate;
		if (!b) {
			b = Vb(a);
			if (null === b) throw Error(p(188));
			return b !== a ? null : a;
		}
		for (var c = a, d = b;;) {
			var e = c.return;
			if (null === e) break;
			var f = e.alternate;
			if (null === f) {
				d = e.return;
				if (null !== d) {
					c = d;
					continue;
				}
				break;
			}
			if (e.child === f.child) {
				for (f = e.child; f;) {
					if (f === c) return Xb(e), a;
					if (f === d) return Xb(e), b;
					f = f.sibling;
				}
				throw Error(p(188));
			}
			if (c.return !== d.return) c = e, d = f;
			else {
				for (var g = !1, h = e.child; h;) {
					if (h === c) {
						g = !0;
						c = e;
						d = f;
						break;
					}
					if (h === d) {
						g = !0;
						d = e;
						c = f;
						break;
					}
					h = h.sibling;
				}
				if (!g) {
					for (h = f.child; h;) {
						if (h === c) {
							g = !0;
							c = f;
							d = e;
							break;
						}
						if (h === d) {
							g = !0;
							d = f;
							c = e;
							break;
						}
						h = h.sibling;
					}
					if (!g) throw Error(p(189));
				}
			}
			if (c.alternate !== d) throw Error(p(190));
		}
		if (3 !== c.tag) throw Error(p(188));
		return c.stateNode.current === c ? a : b;
	}
	function Zb(a) {
		a = Yb(a);
		return null !== a ? $b(a) : null;
	}
	function $b(a) {
		if (5 === a.tag || 6 === a.tag) return a;
		for (a = a.child; null !== a;) {
			var b = $b(a);
			if (null !== b) return b;
			a = a.sibling;
		}
		return null;
	}
	var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
	function mc(a) {
		if (lc && "function" === typeof lc.onCommitFiberRoot) try {
			lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
		} catch (b) {}
	}
	var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
	function nc(a) {
		a >>>= 0;
		return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
	}
	var rc = 64, sc = 4194304;
	function tc(a) {
		switch (a & -a) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return a & 4194240;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864: return a & 130023424;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 1073741824;
			default: return a;
		}
	}
	function uc(a, b) {
		var c = a.pendingLanes;
		if (0 === c) return 0;
		var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
		if (0 !== g) {
			var h = g & ~e;
			0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
		} else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
		if (0 === d) return 0;
		if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
		0 !== (d & 4) && (d |= c & 16);
		b = a.entangledLanes;
		if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
		return d;
	}
	function vc(a, b) {
		switch (a) {
			case 1:
			case 2:
			case 4: return b + 250;
			case 8:
			case 16:
			case 32:
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return b + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864: return -1;
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function wc(a, b) {
		for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f;) {
			var g = 31 - oc(f), h = 1 << g, k = e[g];
			if (-1 === k) {
				if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
			} else k <= b && (a.expiredLanes |= h);
			f &= ~h;
		}
	}
	function xc(a) {
		a = a.pendingLanes & -1073741825;
		return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
	}
	function yc() {
		var a = rc;
		rc <<= 1;
		0 === (rc & 4194240) && (rc = 64);
		return a;
	}
	function zc(a) {
		for (var b = [], c = 0; 31 > c; c++) b.push(a);
		return b;
	}
	function Ac(a, b, c) {
		a.pendingLanes |= b;
		536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
		a = a.eventTimes;
		b = 31 - oc(b);
		a[b] = c;
	}
	function Bc(a, b) {
		var c = a.pendingLanes & ~b;
		a.pendingLanes = b;
		a.suspendedLanes = 0;
		a.pingedLanes = 0;
		a.expiredLanes &= b;
		a.mutableReadLanes &= b;
		a.entangledLanes &= b;
		b = a.entanglements;
		var d = a.eventTimes;
		for (a = a.expirationTimes; 0 < c;) {
			var e = 31 - oc(c), f = 1 << e;
			b[e] = 0;
			d[e] = -1;
			a[e] = -1;
			c &= ~f;
		}
	}
	function Cc(a, b) {
		var c = a.entangledLanes |= b;
		for (a = a.entanglements; c;) {
			var d = 31 - oc(c), e = 1 << d;
			e & b | a[d] & b && (a[d] |= b);
			c &= ~e;
		}
	}
	var C = 0;
	function Dc(a) {
		a &= -a;
		return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
	}
	var Ec, Fc, Gc, Hc, Ic, Jc = !1, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	function Sc(a, b) {
		switch (a) {
			case "focusin":
			case "focusout":
				Lc = null;
				break;
			case "dragenter":
			case "dragleave":
				Mc = null;
				break;
			case "mouseover":
			case "mouseout":
				Nc = null;
				break;
			case "pointerover":
			case "pointerout":
				Oc.delete(b.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": Pc.delete(b.pointerId);
		}
	}
	function Tc(a, b, c, d, e, f) {
		if (null === a || a.nativeEvent !== f) return a = {
			blockedOn: b,
			domEventName: c,
			eventSystemFlags: d,
			nativeEvent: f,
			targetContainers: [e]
		}, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
		a.eventSystemFlags |= d;
		b = a.targetContainers;
		null !== e && -1 === b.indexOf(e) && b.push(e);
		return a;
	}
	function Uc(a, b, c, d, e) {
		switch (b) {
			case "focusin": return Lc = Tc(Lc, a, b, c, d, e), !0;
			case "dragenter": return Mc = Tc(Mc, a, b, c, d, e), !0;
			case "mouseover": return Nc = Tc(Nc, a, b, c, d, e), !0;
			case "pointerover":
				var f = e.pointerId;
				Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
				return !0;
			case "gotpointercapture": return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), !0;
		}
		return !1;
	}
	function Vc(a) {
		var b = Wc(a.target);
		if (null !== b) {
			var c = Vb(b);
			if (null !== c) {
				if (b = c.tag, 13 === b) {
					if (b = Wb(c), null !== b) {
						a.blockedOn = b;
						Ic(a.priority, function() {
							Gc(c);
						});
						return;
					}
				} else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
					a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
					return;
				}
			}
		}
		a.blockedOn = null;
	}
	function Xc(a) {
		if (null !== a.blockedOn) return !1;
		for (var b = a.targetContainers; 0 < b.length;) {
			var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
			if (null === c) {
				c = a.nativeEvent;
				var d = new c.constructor(c.type, c);
				wb = d;
				c.target.dispatchEvent(d);
				wb = null;
			} else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, !1;
			b.shift();
		}
		return !0;
	}
	function Zc(a, b, c) {
		Xc(a) && c.delete(b);
	}
	function $c() {
		Jc = !1;
		null !== Lc && Xc(Lc) && (Lc = null);
		null !== Mc && Xc(Mc) && (Mc = null);
		null !== Nc && Xc(Nc) && (Nc = null);
		Oc.forEach(Zc);
		Pc.forEach(Zc);
	}
	function ad(a, b) {
		a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = !0, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
	}
	function bd(a) {
		function b(b) {
			return ad(b, a);
		}
		if (0 < Kc.length) {
			ad(Kc[0], a);
			for (var c = 1; c < Kc.length; c++) {
				var d = Kc[c];
				d.blockedOn === a && (d.blockedOn = null);
			}
		}
		null !== Lc && ad(Lc, a);
		null !== Mc && ad(Mc, a);
		null !== Nc && ad(Nc, a);
		Oc.forEach(b);
		Pc.forEach(b);
		for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
		for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn);) Vc(c), null === c.blockedOn && Qc.shift();
	}
	var cd = ua.ReactCurrentBatchConfig, dd = !0;
	function ed(a, b, c, d) {
		var e = C, f = cd.transition;
		cd.transition = null;
		try {
			C = 1, fd(a, b, c, d);
		} finally {
			C = e, cd.transition = f;
		}
	}
	function gd(a, b, c, d) {
		var e = C, f = cd.transition;
		cd.transition = null;
		try {
			C = 4, fd(a, b, c, d);
		} finally {
			C = e, cd.transition = f;
		}
	}
	function fd(a, b, c, d) {
		if (dd) {
			var e = Yc(a, b, c, d);
			if (null === e) hd(a, b, d, id, c), Sc(a, d);
			else if (Uc(e, a, b, c, d)) d.stopPropagation();
			else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
				for (; null !== e;) {
					var f = Cb(e);
					null !== f && Ec(f);
					f = Yc(a, b, c, d);
					null === f && hd(a, b, d, id, c);
					if (f === e) break;
					e = f;
				}
				null !== e && d.stopPropagation();
			} else hd(a, b, d, null, c);
		}
	}
	var id = null;
	function Yc(a, b, c, d) {
		id = null;
		a = xb(d);
		a = Wc(a);
		if (null !== a) if (b = Vb(a), null === b) a = null;
		else if (c = b.tag, 13 === c) {
			a = Wb(b);
			if (null !== a) return a;
			a = null;
		} else if (3 === c) {
			if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
			a = null;
		} else b !== a && (a = null);
		id = a;
		return null;
	}
	function jd(a) {
		switch (a) {
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 1;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "toggle":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 4;
			case "message": switch (ec()) {
				case fc: return 1;
				case gc: return 4;
				case hc:
				case ic: return 16;
				case jc: return 536870912;
				default: return 16;
			}
			default: return 16;
		}
	}
	var kd = null, ld = null, md = null;
	function nd() {
		if (md) return md;
		var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
		for (a = 0; a < c && b[a] === e[a]; a++);
		var g = c - a;
		for (d = 1; d <= g && b[c - d] === e[f - d]; d++);
		return md = e.slice(a, 1 < d ? 1 - d : void 0);
	}
	function od(a) {
		var b = a.keyCode;
		"charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
		10 === a && (a = 13);
		return 32 <= a || 13 === a ? a : 0;
	}
	function pd() {
		return !0;
	}
	function qd() {
		return !1;
	}
	function rd(a) {
		function b(b, d, e, f, g) {
			this._reactName = b;
			this._targetInst = e;
			this.type = d;
			this.nativeEvent = f;
			this.target = g;
			this.currentTarget = null;
			for (var c in a) a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
			this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? pd : qd;
			this.isPropagationStopped = qd;
			return this;
		}
		A(b.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var a = this.nativeEvent;
				a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = pd);
			},
			stopPropagation: function() {
				var a = this.nativeEvent;
				a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = pd);
			},
			persist: function() {},
			isPersistent: pd
		});
		return b;
	}
	var sd = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(a) {
			return a.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, td = rd(sd), ud = A({}, sd, {
		view: 0,
		detail: 0
	}), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: zd,
		button: 0,
		buttons: 0,
		relatedTarget: function(a) {
			return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
		},
		movementX: function(a) {
			if ("movementX" in a) return a.movementX;
			a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
			return wd;
		},
		movementY: function(a) {
			return "movementY" in a ? a.movementY : xd;
		}
	}), Bd = rd(Ad), Dd = rd(A({}, Ad, { dataTransfer: 0 })), Fd = rd(A({}, ud, { relatedTarget: 0 })), Hd = rd(A({}, sd, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Jd = rd(A({}, sd, { clipboardData: function(a) {
		return "clipboardData" in a ? a.clipboardData : window.clipboardData;
	} })), Ld = rd(A({}, sd, { data: 0 })), Md = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	}, Nd = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	}, Od = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function Pd(a) {
		var b = this.nativeEvent;
		return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : !1;
	}
	function zd() {
		return Pd;
	}
	var Rd = rd(A({}, ud, {
		key: function(a) {
			if (a.key) {
				var b = Md[a.key] || a.key;
				if ("Unidentified" !== b) return b;
			}
			return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: zd,
		charCode: function(a) {
			return "keypress" === a.type ? od(a) : 0;
		},
		keyCode: function(a) {
			return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
		},
		which: function(a) {
			return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
		}
	})), Td = rd(A({}, Ad, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	})), Vd = rd(A({}, ud, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: zd
	})), Xd = rd(A({}, sd, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Zd = rd(A({}, Ad, {
		deltaX: function(a) {
			return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
		},
		deltaY: function(a) {
			return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), $d = [
		9,
		13,
		27,
		32
	], ae = ia && "CompositionEvent" in window, be = null;
	ia && "documentMode" in document && (be = document.documentMode);
	var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = !1;
	function ge(a, b) {
		switch (a) {
			case "keyup": return -1 !== $d.indexOf(b.keyCode);
			case "keydown": return 229 !== b.keyCode;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function he(a) {
		a = a.detail;
		return "object" === typeof a && "data" in a ? a.data : null;
	}
	var ie = !1;
	function je(a, b) {
		switch (a) {
			case "compositionend": return he(b);
			case "keypress":
				if (32 !== b.which) return null;
				fe = !0;
				return ee;
			case "textInput": return a = b.data, a === ee && fe ? null : a;
			default: return null;
		}
	}
	function ke(a, b) {
		if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = !1, a) : null;
		switch (a) {
			case "paste": return null;
			case "keypress":
				if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
					if (b.char && 1 < b.char.length) return b.char;
					if (b.which) return String.fromCharCode(b.which);
				}
				return null;
			case "compositionend": return de && "ko" !== b.locale ? null : b.data;
			default: return null;
		}
	}
	var le = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function me(a) {
		var b = a && a.nodeName && a.nodeName.toLowerCase();
		return "input" === b ? !!le[a.type] : "textarea" === b ? !0 : !1;
	}
	function ne(a, b, c, d) {
		Eb(d);
		b = oe(b, "onChange");
		0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({
			event: c,
			listeners: b
		}));
	}
	var pe = null, qe = null;
	function re(a) {
		se(a, 0);
	}
	function te(a) {
		if (Wa(ue(a))) return a;
	}
	function ve(a, b) {
		if ("change" === a) return b;
	}
	var we = !1;
	if (ia) {
		var xe;
		if (ia) {
			var ye = "oninput" in document;
			if (!ye) {
				var ze = document.createElement("div");
				ze.setAttribute("oninput", "return;");
				ye = "function" === typeof ze.oninput;
			}
			xe = ye;
		} else xe = !1;
		we = xe && (!document.documentMode || 9 < document.documentMode);
	}
	function Ae() {
		pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
	}
	function Be(a) {
		if ("value" === a.propertyName && te(qe)) {
			var b = [];
			ne(b, qe, a, xb(a));
			Jb(re, b);
		}
	}
	function Ce(a, b, c) {
		"focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
	}
	function De(a) {
		if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
	}
	function Ee(a, b) {
		if ("click" === a) return te(b);
	}
	function Fe(a, b) {
		if ("input" === a || "change" === a) return te(b);
	}
	function Ge(a, b) {
		return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
	}
	var He = "function" === typeof Object.is ? Object.is : Ge;
	function Ie(a, b) {
		if (He(a, b)) return !0;
		if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
		var c = Object.keys(a), d = Object.keys(b);
		if (c.length !== d.length) return !1;
		for (d = 0; d < c.length; d++) {
			var e = c[d];
			if (!ja.call(b, e) || !He(a[e], b[e])) return !1;
		}
		return !0;
	}
	function Je(a) {
		for (; a && a.firstChild;) a = a.firstChild;
		return a;
	}
	function Ke(a, b) {
		var c = Je(a);
		a = 0;
		for (var d; c;) {
			if (3 === c.nodeType) {
				d = a + c.textContent.length;
				if (a <= b && d >= b) return {
					node: c,
					offset: b - a
				};
				a = d;
			}
			a: {
				for (; c;) {
					if (c.nextSibling) {
						c = c.nextSibling;
						break a;
					}
					c = c.parentNode;
				}
				c = void 0;
			}
			c = Je(c);
		}
	}
	function Le(a, b) {
		return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
	}
	function Me() {
		for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement;) {
			try {
				var c = "string" === typeof b.contentWindow.location.href;
			} catch (d) {
				c = !1;
			}
			if (c) a = b.contentWindow;
			else break;
			b = Xa(a.document);
		}
		return b;
	}
	function Ne(a) {
		var b = a && a.nodeName && a.nodeName.toLowerCase();
		return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
	}
	function Oe(a) {
		var b = Me(), c = a.focusedElem, d = a.selectionRange;
		if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
			if (null !== d && Ne(c)) {
				if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
				else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
					a = a.getSelection();
					var e = c.textContent.length, f = Math.min(d.start, e);
					d = void 0 === d.end ? f : Math.min(d.end, e);
					!a.extend && f > d && (e = d, d = f, f = e);
					e = Ke(c, f);
					var g = Ke(c, d);
					e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
				}
			}
			b = [];
			for (a = c; a = a.parentNode;) 1 === a.nodeType && b.push({
				element: a,
				left: a.scrollLeft,
				top: a.scrollTop
			});
			"function" === typeof c.focus && c.focus();
			for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
		}
	}
	var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = !1;
	function Ue(a, b, c) {
		var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
		Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = {
			start: d.selectionStart,
			end: d.selectionEnd
		} : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
			anchorNode: d.anchorNode,
			anchorOffset: d.anchorOffset,
			focusNode: d.focusNode,
			focusOffset: d.focusOffset
		}), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({
			event: b,
			listeners: d
		}), b.target = Qe)));
	}
	function Ve(a, b) {
		var c = {};
		c[a.toLowerCase()] = b.toLowerCase();
		c["Webkit" + a] = "webkit" + b;
		c["Moz" + a] = "moz" + b;
		return c;
	}
	var We = {
		animationend: Ve("Animation", "AnimationEnd"),
		animationiteration: Ve("Animation", "AnimationIteration"),
		animationstart: Ve("Animation", "AnimationStart"),
		transitionend: Ve("Transition", "TransitionEnd")
	}, Xe = {}, Ye = {};
	ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
	function Ze(a) {
		if (Xe[a]) return Xe[a];
		if (!We[a]) return a;
		var b = We[a], c;
		for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
		return a;
	}
	var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	function ff(a, b) {
		df.set(a, b);
		fa(b, [a]);
	}
	for (var gf = 0; gf < ef.length; gf++) {
		var hf = ef[gf];
		ff(hf.toLowerCase(), "on" + (hf[0].toUpperCase() + hf.slice(1)));
	}
	ff($e, "onAnimationEnd");
	ff(af, "onAnimationIteration");
	ff(bf, "onAnimationStart");
	ff("dblclick", "onDoubleClick");
	ff("focusin", "onFocus");
	ff("focusout", "onBlur");
	ff(cf, "onTransitionEnd");
	ha("onMouseEnter", ["mouseout", "mouseover"]);
	ha("onMouseLeave", ["mouseout", "mouseover"]);
	ha("onPointerEnter", ["pointerout", "pointerover"]);
	ha("onPointerLeave", ["pointerout", "pointerover"]);
	fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
	fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
	fa("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]);
	fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
	fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
	fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
	function nf(a, b, c) {
		var d = a.type || "unknown-event";
		a.currentTarget = c;
		Ub(d, b, void 0, a);
		a.currentTarget = null;
	}
	function se(a, b) {
		b = 0 !== (b & 4);
		for (var c = 0; c < a.length; c++) {
			var d = a[c], e = d.event;
			d = d.listeners;
			a: {
				var f = void 0;
				if (b) for (var g = d.length - 1; 0 <= g; g--) {
					var h = d[g], k = h.instance, l = h.currentTarget;
					h = h.listener;
					if (k !== f && e.isPropagationStopped()) break a;
					nf(e, h, l);
					f = k;
				}
				else for (g = 0; g < d.length; g++) {
					h = d[g];
					k = h.instance;
					l = h.currentTarget;
					h = h.listener;
					if (k !== f && e.isPropagationStopped()) break a;
					nf(e, h, l);
					f = k;
				}
			}
		}
		if (Qb) throw a = Rb, Qb = !1, Rb = null, a;
	}
	function D(a, b) {
		var c = b[of];
		void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
		var d = a + "__bubble";
		c.has(d) || (pf(b, a, 2, !1), c.add(d));
	}
	function qf(a, b, c) {
		var d = 0;
		b && (d |= 4);
		pf(c, a, d, b);
	}
	var rf = "_reactListening" + Math.random().toString(36).slice(2);
	function sf(a) {
		if (!a[rf]) {
			a[rf] = !0;
			da.forEach(function(b) {
				"selectionchange" !== b && (mf.has(b) || qf(b, !1, a), qf(b, !0, a));
			});
			var b = 9 === a.nodeType ? a : a.ownerDocument;
			null === b || b[rf] || (b[rf] = !0, qf("selectionchange", !1, b));
		}
	}
	function pf(a, b, c, d) {
		switch (jd(b)) {
			case 1:
				var e = ed;
				break;
			case 4:
				e = gd;
				break;
			default: e = fd;
		}
		c = e.bind(null, b, c, a);
		e = void 0;
		!Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
		d ? void 0 !== e ? a.addEventListener(b, c, {
			capture: !0,
			passive: e
		}) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, !1);
	}
	function hd(a, b, c, d, e) {
		var f = d;
		if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (;;) {
			if (null === d) return;
			var g = d.tag;
			if (3 === g || 4 === g) {
				var h = d.stateNode.containerInfo;
				if (h === e || 8 === h.nodeType && h.parentNode === e) break;
				if (4 === g) for (g = d.return; null !== g;) {
					var k = g.tag;
					if (3 === k || 4 === k) {
						if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
					}
					g = g.return;
				}
				for (; null !== h;) {
					g = Wc(h);
					if (null === g) return;
					k = g.tag;
					if (5 === k || 6 === k) {
						d = f = g;
						continue a;
					}
					h = h.parentNode;
				}
			}
			d = d.return;
		}
		Jb(function() {
			var d = f, e = xb(c), g = [];
			a: {
				var h = df.get(a);
				if (void 0 !== h) {
					var k = td, n = a;
					switch (a) {
						case "keypress": if (0 === od(c)) break a;
						case "keydown":
						case "keyup":
							k = Rd;
							break;
						case "focusin":
							n = "focus";
							k = Fd;
							break;
						case "focusout":
							n = "blur";
							k = Fd;
							break;
						case "beforeblur":
						case "afterblur":
							k = Fd;
							break;
						case "click": if (2 === c.button) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							k = Bd;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							k = Dd;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							k = Vd;
							break;
						case $e:
						case af:
						case bf:
							k = Hd;
							break;
						case cf:
							k = Xd;
							break;
						case "scroll":
							k = vd;
							break;
						case "wheel":
							k = Zd;
							break;
						case "copy":
						case "cut":
						case "paste":
							k = Jd;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup": k = Td;
					}
					var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h ? h + "Capture" : null : h;
					t = [];
					for (var w = d, u; null !== w;) {
						u = w;
						var F = u.stateNode;
						5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
						if (J) break;
						w = w.return;
					}
					0 < t.length && (h = new k(h, n, null, c, e), g.push({
						event: h,
						listeners: t
					}));
				}
			}
			if (0 === (b & 7)) {
				a: {
					h = "mouseover" === a || "pointerover" === a;
					k = "mouseout" === a || "pointerout" === a;
					if (h && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
					if (k || h) {
						h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;
						if (k) {
							if (n = c.relatedTarget || c.toElement, k = d, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
						} else k = null, n = d;
						if (k !== n) {
							t = Bd;
							F = "onMouseLeave";
							x = "onMouseEnter";
							w = "mouse";
							if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
							J = null == k ? h : ue(k);
							u = null == n ? h : ue(n);
							h = new t(F, w + "leave", k, c, e);
							h.target = J;
							h.relatedTarget = u;
							F = null;
							Wc(e) === d && (t = new t(x, w + "enter", n, c, e), t.target = u, t.relatedTarget = J, F = t);
							J = F;
							if (k && n) b: {
								t = k;
								x = n;
								w = 0;
								for (u = t; u; u = vf(u)) w++;
								u = 0;
								for (F = x; F; F = vf(F)) u++;
								for (; 0 < w - u;) t = vf(t), w--;
								for (; 0 < u - w;) x = vf(x), u--;
								for (; w--;) {
									if (t === x || null !== x && t === x.alternate) break b;
									t = vf(t);
									x = vf(x);
								}
								t = null;
							}
							else t = null;
							null !== k && wf(g, h, k, t, !1);
							null !== n && null !== J && wf(g, J, n, t, !0);
						}
					}
				}
				a: {
					h = d ? ue(d) : window;
					k = h.nodeName && h.nodeName.toLowerCase();
					if ("select" === k || "input" === k && "file" === h.type) var na = ve;
					else if (me(h)) if (we) na = Fe;
					else {
						na = De;
						var xa = Ce;
					}
					else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (na = Ee);
					if (na && (na = na(a, d))) {
						ne(g, na, c, e);
						break a;
					}
					xa && xa(a, h, d);
					"focusout" === a && (xa = h._wrapperState) && xa.controlled && "number" === h.type && cb(h, "number", h.value);
				}
				xa = d ? ue(d) : window;
				switch (a) {
					case "focusin":
						if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d, Se = null;
						break;
					case "focusout":
						Se = Re = Qe = null;
						break;
					case "mousedown":
						Te = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Te = !1;
						Ue(g, c, e);
						break;
					case "selectionchange": if (Pe) break;
					case "keydown":
					case "keyup": Ue(g, c, e);
				}
				var $a;
				if (ae) b: {
					switch (a) {
						case "compositionstart":
							var ba = "onCompositionStart";
							break b;
						case "compositionend":
							ba = "onCompositionEnd";
							break b;
						case "compositionupdate":
							ba = "onCompositionUpdate";
							break b;
					}
					ba = void 0;
				}
				else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
				ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e, ld = "value" in kd ? kd.value : kd.textContent, ie = !0)), xa = oe(d, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e), g.push({
					event: ba,
					listeners: xa
				}), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
				if ($a = ce ? je(a, c) : ke(a, c)) d = oe(d, "onBeforeInput"), 0 < d.length && (e = new Ld("onBeforeInput", "beforeinput", null, c, e), g.push({
					event: e,
					listeners: d
				}), e.data = $a);
			}
			se(g, b);
		});
	}
	function tf(a, b, c) {
		return {
			instance: a,
			listener: b,
			currentTarget: c
		};
	}
	function oe(a, b) {
		for (var c = b + "Capture", d = []; null !== a;) {
			var e = a, f = e.stateNode;
			5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
			a = a.return;
		}
		return d;
	}
	function vf(a) {
		if (null === a) return null;
		do
			a = a.return;
		while (a && 5 !== a.tag);
		return a ? a : null;
	}
	function wf(a, b, c, d, e) {
		for (var f = b._reactName, g = []; null !== c && c !== d;) {
			var h = c, k = h.alternate, l = h.stateNode;
			if (null !== k && k === d) break;
			5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
			c = c.return;
		}
		0 !== g.length && a.push({
			event: b,
			listeners: g
		});
	}
	var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
	function zf(a) {
		return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
	}
	function Af(a, b, c) {
		b = zf(b);
		if (zf(a) !== b && c) throw Error(p(425));
	}
	function Bf() {}
	var Cf = null, Df = null;
	function Ef(a, b) {
		return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
	}
	var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
		return Hf.resolve(null).then(a).catch(If);
	} : Ff;
	function If(a) {
		setTimeout(function() {
			throw a;
		});
	}
	function Kf(a, b) {
		var c = b, d = 0;
		do {
			var e = c.nextSibling;
			a.removeChild(c);
			if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
				if (0 === d) {
					a.removeChild(e);
					bd(b);
					return;
				}
				d--;
			} else "$" !== c && "$?" !== c && "$!" !== c || d++;
			c = e;
		} while (c);
		bd(b);
	}
	function Lf(a) {
		for (; null != a; a = a.nextSibling) {
			var b = a.nodeType;
			if (1 === b || 3 === b) break;
			if (8 === b) {
				b = a.data;
				if ("$" === b || "$!" === b || "$?" === b) break;
				if ("/$" === b) return null;
			}
		}
		return a;
	}
	function Mf(a) {
		a = a.previousSibling;
		for (var b = 0; a;) {
			if (8 === a.nodeType) {
				var c = a.data;
				if ("$" === c || "$!" === c || "$?" === c) {
					if (0 === b) return a;
					b--;
				} else "/$" === c && b++;
			}
			a = a.previousSibling;
		}
		return null;
	}
	var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
	function Wc(a) {
		var b = a[Of];
		if (b) return b;
		for (var c = a.parentNode; c;) {
			if (b = c[uf] || c[Of]) {
				c = b.alternate;
				if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a;) {
					if (c = a[Of]) return c;
					a = Mf(a);
				}
				return b;
			}
			a = c;
			c = a.parentNode;
		}
		return null;
	}
	function Cb(a) {
		a = a[Of] || a[uf];
		return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
	}
	function ue(a) {
		if (5 === a.tag || 6 === a.tag) return a.stateNode;
		throw Error(p(33));
	}
	function Db(a) {
		return a[Pf] || null;
	}
	var Sf = [], Tf = -1;
	function Uf(a) {
		return { current: a };
	}
	function E(a) {
		0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
	}
	function G(a, b) {
		Tf++;
		Sf[Tf] = a.current;
		a.current = b;
	}
	var Vf = {}, H = Uf(Vf), Wf = Uf(!1), Xf = Vf;
	function Yf(a, b) {
		var c = a.type.contextTypes;
		if (!c) return Vf;
		var d = a.stateNode;
		if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
		var e = {}, f;
		for (f in c) e[f] = b[f];
		d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
		return e;
	}
	function Zf(a) {
		a = a.childContextTypes;
		return null !== a && void 0 !== a;
	}
	function $f() {
		E(Wf);
		E(H);
	}
	function ag(a, b, c) {
		if (H.current !== Vf) throw Error(p(168));
		G(H, b);
		G(Wf, c);
	}
	function bg(a, b, c) {
		var d = a.stateNode;
		b = b.childContextTypes;
		if ("function" !== typeof d.getChildContext) return c;
		d = d.getChildContext();
		for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
		return A({}, c, d);
	}
	function cg(a) {
		a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
		Xf = H.current;
		G(H, a);
		G(Wf, Wf.current);
		return !0;
	}
	function dg(a, b, c) {
		var d = a.stateNode;
		if (!d) throw Error(p(169));
		c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
		G(Wf, c);
	}
	var eg = null, fg = !1, gg = !1;
	function hg(a) {
		null === eg ? eg = [a] : eg.push(a);
	}
	function ig(a) {
		fg = !0;
		hg(a);
	}
	function jg() {
		if (!gg && null !== eg) {
			gg = !0;
			var a = 0, b = C;
			try {
				var c = eg;
				for (C = 1; a < c.length; a++) {
					var d = c[a];
					do
						d = d(!0);
					while (null !== d);
				}
				eg = null;
				fg = !1;
			} catch (e) {
				throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
			} finally {
				C = b, gg = !1;
			}
		}
		return null;
	}
	var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
	function tg(a, b) {
		kg[lg++] = ng;
		kg[lg++] = mg;
		mg = a;
		ng = b;
	}
	function ug(a, b, c) {
		og[pg++] = rg;
		og[pg++] = sg;
		og[pg++] = qg;
		qg = a;
		var d = rg;
		a = sg;
		var e = 32 - oc(d) - 1;
		d &= ~(1 << e);
		c += 1;
		var f = 32 - oc(b) + e;
		if (30 < f) {
			var g = e - e % 5;
			f = (d & (1 << g) - 1).toString(32);
			d >>= g;
			e -= g;
			rg = 1 << 32 - oc(b) + e | c << e | d;
			sg = f + a;
		} else rg = 1 << f | c << e | d, sg = a;
	}
	function vg(a) {
		null !== a.return && (tg(a, 1), ug(a, 1, 0));
	}
	function wg(a) {
		for (; a === mg;) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
		for (; a === qg;) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
	}
	var xg = null, yg = null, I = !1, zg = null;
	function Ag(a, b) {
		var c = Bg(5, null, null, 0);
		c.elementType = "DELETED";
		c.stateNode = b;
		c.return = a;
		b = a.deletions;
		null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
	}
	function Cg(a, b) {
		switch (a.tag) {
			case 5:
				var c = a.type;
				b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
				return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), !0) : !1;
			case 6: return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, !0) : !1;
			case 13: return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? {
				id: rg,
				overflow: sg
			} : null, a.memoizedState = {
				dehydrated: b,
				treeContext: c,
				retryLane: 1073741824
			}, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, !0) : !1;
			default: return !1;
		}
	}
	function Dg(a) {
		return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
	}
	function Eg(a) {
		if (I) {
			var b = yg;
			if (b) {
				var c = b;
				if (!Cg(a, b)) {
					if (Dg(a)) throw Error(p(418));
					b = Lf(c.nextSibling);
					var d = xg;
					b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = !1, xg = a);
				}
			} else {
				if (Dg(a)) throw Error(p(418));
				a.flags = a.flags & -4097 | 2;
				I = !1;
				xg = a;
			}
		}
	}
	function Fg(a) {
		for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;
		xg = a;
	}
	function Gg(a) {
		if (a !== xg) return !1;
		if (!I) return Fg(a), I = !0, !1;
		var b;
		(b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
		if (b && (b = yg)) {
			if (Dg(a)) throw Hg(), Error(p(418));
			for (; b;) Ag(a, b), b = Lf(b.nextSibling);
		}
		Fg(a);
		if (13 === a.tag) {
			a = a.memoizedState;
			a = null !== a ? a.dehydrated : null;
			if (!a) throw Error(p(317));
			a: {
				a = a.nextSibling;
				for (b = 0; a;) {
					if (8 === a.nodeType) {
						var c = a.data;
						if ("/$" === c) {
							if (0 === b) {
								yg = Lf(a.nextSibling);
								break a;
							}
							b--;
						} else "$" !== c && "$!" !== c && "$?" !== c || b++;
					}
					a = a.nextSibling;
				}
				yg = null;
			}
		} else yg = xg ? Lf(a.stateNode.nextSibling) : null;
		return !0;
	}
	function Hg() {
		for (var a = yg; a;) a = Lf(a.nextSibling);
	}
	function Ig() {
		yg = xg = null;
		I = !1;
	}
	function Jg(a) {
		null === zg ? zg = [a] : zg.push(a);
	}
	var Kg = ua.ReactCurrentBatchConfig;
	function Lg(a, b, c) {
		a = c.ref;
		if (null !== a && "function" !== typeof a && "object" !== typeof a) {
			if (c._owner) {
				c = c._owner;
				if (c) {
					if (1 !== c.tag) throw Error(p(309));
					var d = c.stateNode;
				}
				if (!d) throw Error(p(147, a));
				var e = d, f = "" + a;
				if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
				b = function(a) {
					var b = e.refs;
					null === a ? delete b[f] : b[f] = a;
				};
				b._stringRef = f;
				return b;
			}
			if ("string" !== typeof a) throw Error(p(284));
			if (!c._owner) throw Error(p(290, a));
		}
		return a;
	}
	function Mg(a, b) {
		a = Object.prototype.toString.call(b);
		throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
	}
	function Ng(a) {
		var b = a._init;
		return b(a._payload);
	}
	function Og(a) {
		function b(b, c) {
			if (a) {
				var d = b.deletions;
				null === d ? (b.deletions = [c], b.flags |= 16) : d.push(c);
			}
		}
		function c(c, d) {
			if (!a) return null;
			for (; null !== d;) b(c, d), d = d.sibling;
			return null;
		}
		function d(a, b) {
			for (a = /* @__PURE__ */ new Map(); null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
			return a;
		}
		function e(a, b) {
			a = Pg(a, b);
			a.index = 0;
			a.sibling = null;
			return a;
		}
		function f(b, c, d) {
			b.index = d;
			if (!a) return b.flags |= 1048576, c;
			d = b.alternate;
			if (null !== d) return d = d.index, d < c ? (b.flags |= 2, c) : d;
			b.flags |= 2;
			return c;
		}
		function g(b) {
			a && null === b.alternate && (b.flags |= 2);
			return b;
		}
		function h(a, b, c, d) {
			if (null === b || 6 !== b.tag) return b = Qg(c, a.mode, d), b.return = a, b;
			b = e(b, c);
			b.return = a;
			return b;
		}
		function k(a, b, c, d) {
			var f = c.type;
			if (f === ya) return m(a, b, c.props.children, d, c.key);
			if (null !== b && (b.elementType === f || "object" === typeof f && null !== f && f.$$typeof === Ha && Ng(f) === b.type)) return d = e(b, c.props), d.ref = Lg(a, b, c), d.return = a, d;
			d = Rg(c.type, c.key, c.props, null, a.mode, d);
			d.ref = Lg(a, b, c);
			d.return = a;
			return d;
		}
		function l(a, b, c, d) {
			if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Sg(c, a.mode, d), b.return = a, b;
			b = e(b, c.children || []);
			b.return = a;
			return b;
		}
		function m(a, b, c, d, f) {
			if (null === b || 7 !== b.tag) return b = Tg(c, a.mode, d, f), b.return = a, b;
			b = e(b, c);
			b.return = a;
			return b;
		}
		function q(a, b, c) {
			if ("string" === typeof b && "" !== b || "number" === typeof b) return b = Qg("" + b, a.mode, c), b.return = a, b;
			if ("object" === typeof b && null !== b) {
				switch (b.$$typeof) {
					case va: return c = Rg(b.type, b.key, b.props, null, a.mode, c), c.ref = Lg(a, null, b), c.return = a, c;
					case wa: return b = Sg(b, a.mode, c), b.return = a, b;
					case Ha:
						var d = b._init;
						return q(a, d(b._payload), c);
				}
				if (eb(b) || Ka(b)) return b = Tg(b, a.mode, c, null), b.return = a, b;
				Mg(a, b);
			}
			return null;
		}
		function r(a, b, c, d) {
			var e = null !== b ? b.key : null;
			if ("string" === typeof c && "" !== c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
			if ("object" === typeof c && null !== c) {
				switch (c.$$typeof) {
					case va: return c.key === e ? k(a, b, c, d) : null;
					case wa: return c.key === e ? l(a, b, c, d) : null;
					case Ha: return e = c._init, r(a, b, e(c._payload), d);
				}
				if (eb(c) || Ka(c)) return null !== e ? null : m(a, b, c, d, null);
				Mg(a, c);
			}
			return null;
		}
		function y(a, b, c, d, e) {
			if ("string" === typeof d && "" !== d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
			if ("object" === typeof d && null !== d) {
				switch (d.$$typeof) {
					case va: return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);
					case wa: return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
					case Ha:
						var f = d._init;
						return y(a, b, c, f(d._payload), e);
				}
				if (eb(d) || Ka(d)) return a = a.get(c) || null, m(b, a, d, e, null);
				Mg(b, d);
			}
			return null;
		}
		function n(e, g, h, k) {
			for (var l = null, m = null, u = g, w = g = 0, x = null; null !== u && w < h.length; w++) {
				u.index > w ? (x = u, u = null) : x = u.sibling;
				var n = r(e, u, h[w], k);
				if (null === n) {
					null === u && (u = x);
					break;
				}
				a && u && null === n.alternate && b(e, u);
				g = f(n, g, w);
				null === m ? l = n : m.sibling = n;
				m = n;
				u = x;
			}
			if (w === h.length) return c(e, u), I && tg(e, w), l;
			if (null === u) {
				for (; w < h.length; w++) u = q(e, h[w], k), null !== u && (g = f(u, g, w), null === m ? l = u : m.sibling = u, m = u);
				I && tg(e, w);
				return l;
			}
			for (u = d(e, u); w < h.length; w++) x = y(u, e, w, h[w], k), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g = f(x, g, w), null === m ? l = x : m.sibling = x, m = x);
			a && u.forEach(function(a) {
				return b(e, a);
			});
			I && tg(e, w);
			return l;
		}
		function t(e, g, h, k) {
			var l = Ka(h);
			if ("function" !== typeof l) throw Error(p(150));
			h = l.call(h);
			if (null == h) throw Error(p(151));
			for (var u = l = null, m = g, w = g = 0, x = null, n = h.next(); null !== m && !n.done; w++, n = h.next()) {
				m.index > w ? (x = m, m = null) : x = m.sibling;
				var t = r(e, m, n.value, k);
				if (null === t) {
					null === m && (m = x);
					break;
				}
				a && m && null === t.alternate && b(e, m);
				g = f(t, g, w);
				null === u ? l = t : u.sibling = t;
				u = t;
				m = x;
			}
			if (n.done) return c(e, m), I && tg(e, w), l;
			if (null === m) {
				for (; !n.done; w++, n = h.next()) n = q(e, n.value, k), null !== n && (g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
				I && tg(e, w);
				return l;
			}
			for (m = d(e, m); !n.done; w++, n = h.next()) n = y(m, e, w, n.value, k), null !== n && (a && null !== n.alternate && m.delete(null === n.key ? w : n.key), g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
			a && m.forEach(function(a) {
				return b(e, a);
			});
			I && tg(e, w);
			return l;
		}
		function J(a, d, f, h) {
			"object" === typeof f && null !== f && f.type === ya && null === f.key && (f = f.props.children);
			if ("object" === typeof f && null !== f) {
				switch (f.$$typeof) {
					case va:
						a: {
							for (var k = f.key, l = d; null !== l;) {
								if (l.key === k) {
									k = f.type;
									if (k === ya) {
										if (7 === l.tag) {
											c(a, l.sibling);
											d = e(l, f.props.children);
											d.return = a;
											a = d;
											break a;
										}
									} else if (l.elementType === k || "object" === typeof k && null !== k && k.$$typeof === Ha && Ng(k) === l.type) {
										c(a, l.sibling);
										d = e(l, f.props);
										d.ref = Lg(a, l, f);
										d.return = a;
										a = d;
										break a;
									}
									c(a, l);
									break;
								} else b(a, l);
								l = l.sibling;
							}
							f.type === ya ? (d = Tg(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Rg(f.type, f.key, f.props, null, a.mode, h), h.ref = Lg(a, d, f), h.return = a, a = h);
						}
						return g(a);
					case wa:
						a: {
							for (l = f.key; null !== d;) {
								if (d.key === l) if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
									c(a, d.sibling);
									d = e(d, f.children || []);
									d.return = a;
									a = d;
									break a;
								} else {
									c(a, d);
									break;
								}
								else b(a, d);
								d = d.sibling;
							}
							d = Sg(f, a.mode, h);
							d.return = a;
							a = d;
						}
						return g(a);
					case Ha: return l = f._init, J(a, d, l(f._payload), h);
				}
				if (eb(f)) return n(a, d, f, h);
				if (Ka(f)) return t(a, d, f, h);
				Mg(a, f);
			}
			return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = Qg(f, a.mode, h), d.return = a, a = d), g(a)) : c(a, d);
		}
		return J;
	}
	var Ug = Og(!0), Vg = Og(!1), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
	function $g() {
		Zg = Yg = Xg = null;
	}
	function ah(a) {
		var b = Wg.current;
		E(Wg);
		a._currentValue = b;
	}
	function bh(a, b, c) {
		for (; null !== a;) {
			var d = a.alternate;
			(a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
			if (a === c) break;
			a = a.return;
		}
	}
	function ch(a, b) {
		Xg = a;
		Zg = Yg = null;
		a = a.dependencies;
		null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = !0), a.firstContext = null);
	}
	function eh(a) {
		var b = a._currentValue;
		if (Zg !== a) if (a = {
			context: a,
			memoizedValue: b,
			next: null
		}, null === Yg) {
			if (null === Xg) throw Error(p(308));
			Yg = a;
			Xg.dependencies = {
				lanes: 0,
				firstContext: a
			};
		} else Yg = Yg.next = a;
		return b;
	}
	var fh = null;
	function gh(a) {
		null === fh ? fh = [a] : fh.push(a);
	}
	function hh(a, b, c, d) {
		var e = b.interleaved;
		null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
		b.interleaved = c;
		return ih(a, d);
	}
	function ih(a, b) {
		a.lanes |= b;
		var c = a.alternate;
		null !== c && (c.lanes |= b);
		c = a;
		for (a = a.return; null !== a;) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
		return 3 === c.tag ? c.stateNode : null;
	}
	var jh = !1;
	function kh(a) {
		a.updateQueue = {
			baseState: a.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				interleaved: null,
				lanes: 0
			},
			effects: null
		};
	}
	function lh(a, b) {
		a = a.updateQueue;
		b.updateQueue === a && (b.updateQueue = {
			baseState: a.baseState,
			firstBaseUpdate: a.firstBaseUpdate,
			lastBaseUpdate: a.lastBaseUpdate,
			shared: a.shared,
			effects: a.effects
		});
	}
	function mh(a, b) {
		return {
			eventTime: a,
			lane: b,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function nh(a, b, c) {
		var d = a.updateQueue;
		if (null === d) return null;
		d = d.shared;
		if (0 !== (K & 2)) {
			var e = d.pending;
			null === e ? b.next = b : (b.next = e.next, e.next = b);
			d.pending = b;
			return ih(a, c);
		}
		e = d.interleaved;
		null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
		d.interleaved = b;
		return ih(a, c);
	}
	function oh(a, b, c) {
		b = b.updateQueue;
		if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
			var d = b.lanes;
			d &= a.pendingLanes;
			c |= d;
			b.lanes = c;
			Cc(a, c);
		}
	}
	function ph(a, b) {
		var c = a.updateQueue, d = a.alternate;
		if (null !== d && (d = d.updateQueue, c === d)) {
			var e = null, f = null;
			c = c.firstBaseUpdate;
			if (null !== c) {
				do {
					var g = {
						eventTime: c.eventTime,
						lane: c.lane,
						tag: c.tag,
						payload: c.payload,
						callback: c.callback,
						next: null
					};
					null === f ? e = f = g : f = f.next = g;
					c = c.next;
				} while (null !== c);
				null === f ? e = f = b : f = f.next = b;
			} else e = f = b;
			c = {
				baseState: d.baseState,
				firstBaseUpdate: e,
				lastBaseUpdate: f,
				shared: d.shared,
				effects: d.effects
			};
			a.updateQueue = c;
			return;
		}
		a = c.lastBaseUpdate;
		null === a ? c.firstBaseUpdate = b : a.next = b;
		c.lastBaseUpdate = b;
	}
	function qh(a, b, c, d) {
		var e = a.updateQueue;
		jh = !1;
		var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
		if (null !== h) {
			e.shared.pending = null;
			var k = h, l = k.next;
			k.next = null;
			null === g ? f = l : g.next = l;
			g = k;
			var m = a.alternate;
			null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
		}
		if (null !== f) {
			var q = e.baseState;
			g = 0;
			m = l = k = null;
			h = f;
			do {
				var r = h.lane, y = h.eventTime;
				if ((d & r) === r) {
					null !== m && (m = m.next = {
						eventTime: y,
						lane: 0,
						tag: h.tag,
						payload: h.payload,
						callback: h.callback,
						next: null
					});
					a: {
						var n = a, t = h;
						r = b;
						y = c;
						switch (t.tag) {
							case 1:
								n = t.payload;
								if ("function" === typeof n) {
									q = n.call(y, q, r);
									break a;
								}
								q = n;
								break a;
							case 3: n.flags = n.flags & -65537 | 128;
							case 0:
								n = t.payload;
								r = "function" === typeof n ? n.call(y, q, r) : n;
								if (null === r || void 0 === r) break a;
								q = A({}, q, r);
								break a;
							case 2: jh = !0;
						}
					}
					null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
				} else y = {
					eventTime: y,
					lane: r,
					tag: h.tag,
					payload: h.payload,
					callback: h.callback,
					next: null
				}, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
				h = h.next;
				if (null === h) if (h = e.shared.pending, null === h) break;
				else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
			} while (1);
			null === m && (k = q);
			e.baseState = k;
			e.firstBaseUpdate = l;
			e.lastBaseUpdate = m;
			b = e.shared.interleaved;
			if (null !== b) {
				e = b;
				do
					g |= e.lane, e = e.next;
				while (e !== b);
			} else null === f && (e.shared.lanes = 0);
			rh |= g;
			a.lanes = g;
			a.memoizedState = q;
		}
	}
	function sh(a, b, c) {
		a = b.effects;
		b.effects = null;
		if (null !== a) for (b = 0; b < a.length; b++) {
			var d = a[b], e = d.callback;
			if (null !== e) {
				d.callback = null;
				d = c;
				if ("function" !== typeof e) throw Error(p(191, e));
				e.call(d);
			}
		}
	}
	var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
	function xh(a) {
		if (a === th) throw Error(p(174));
		return a;
	}
	function yh(a, b) {
		G(wh, b);
		G(vh, a);
		G(uh, th);
		a = b.nodeType;
		switch (a) {
			case 9:
			case 11:
				b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
				break;
			default: a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
		}
		E(uh);
		G(uh, b);
	}
	function zh() {
		E(uh);
		E(vh);
		E(wh);
	}
	function Ah(a) {
		xh(wh.current);
		var b = xh(uh.current);
		var c = lb(b, a.type);
		b !== c && (G(vh, a), G(uh, c));
	}
	function Bh(a) {
		vh.current === a && (E(uh), E(vh));
	}
	var L = Uf(0);
	function Ch(a) {
		for (var b = a; null !== b;) {
			if (13 === b.tag) {
				var c = b.memoizedState;
				if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
			} else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
				if (0 !== (b.flags & 128)) return b;
			} else if (null !== b.child) {
				b.child.return = b;
				b = b.child;
				continue;
			}
			if (b === a) break;
			for (; null === b.sibling;) {
				if (null === b.return || b.return === a) return null;
				b = b.return;
			}
			b.sibling.return = b.return;
			b = b.sibling;
		}
		return null;
	}
	var Dh = [];
	function Eh() {
		for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
		Dh.length = 0;
	}
	var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O = null, Ih = !1, Jh = !1, Kh = 0, Lh = 0;
	function P() {
		throw Error(p(321));
	}
	function Mh(a, b) {
		if (null === b) return !1;
		for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return !1;
		return !0;
	}
	function Nh(a, b, c, d, e, f) {
		Hh = f;
		M = b;
		b.memoizedState = null;
		b.updateQueue = null;
		b.lanes = 0;
		Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
		a = c(d, e);
		if (Jh) {
			f = 0;
			do {
				Jh = !1;
				Kh = 0;
				if (25 <= f) throw Error(p(301));
				f += 1;
				O = N = null;
				b.updateQueue = null;
				Fh.current = Qh;
				a = c(d, e);
			} while (Jh);
		}
		Fh.current = Rh;
		b = null !== N && null !== N.next;
		Hh = 0;
		O = N = M = null;
		Ih = !1;
		if (b) throw Error(p(300));
		return a;
	}
	function Sh() {
		var a = 0 !== Kh;
		Kh = 0;
		return a;
	}
	function Th() {
		var a = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		null === O ? M.memoizedState = O = a : O = O.next = a;
		return O;
	}
	function Uh() {
		if (null === N) {
			var a = M.alternate;
			a = null !== a ? a.memoizedState : null;
		} else a = N.next;
		var b = null === O ? M.memoizedState : O.next;
		if (null !== b) O = b, N = a;
		else {
			if (null === a) throw Error(p(310));
			N = a;
			a = {
				memoizedState: N.memoizedState,
				baseState: N.baseState,
				baseQueue: N.baseQueue,
				queue: N.queue,
				next: null
			};
			null === O ? M.memoizedState = O = a : O = O.next = a;
		}
		return O;
	}
	function Vh(a, b) {
		return "function" === typeof b ? b(a) : b;
	}
	function Wh(a) {
		var b = Uh(), c = b.queue;
		if (null === c) throw Error(p(311));
		c.lastRenderedReducer = a;
		var d = N, e = d.baseQueue, f = c.pending;
		if (null !== f) {
			if (null !== e) {
				var g = e.next;
				e.next = f.next;
				f.next = g;
			}
			d.baseQueue = e = f;
			c.pending = null;
		}
		if (null !== e) {
			f = e.next;
			d = d.baseState;
			var h = g = null, k = null, l = f;
			do {
				var m = l.lane;
				if ((Hh & m) === m) null !== k && (k = k.next = {
					lane: 0,
					action: l.action,
					hasEagerState: l.hasEagerState,
					eagerState: l.eagerState,
					next: null
				}), d = l.hasEagerState ? l.eagerState : a(d, l.action);
				else {
					var q = {
						lane: m,
						action: l.action,
						hasEagerState: l.hasEagerState,
						eagerState: l.eagerState,
						next: null
					};
					null === k ? (h = k = q, g = d) : k = k.next = q;
					M.lanes |= m;
					rh |= m;
				}
				l = l.next;
			} while (null !== l && l !== f);
			null === k ? g = d : k.next = h;
			He(d, b.memoizedState) || (dh = !0);
			b.memoizedState = d;
			b.baseState = g;
			b.baseQueue = k;
			c.lastRenderedState = d;
		}
		a = c.interleaved;
		if (null !== a) {
			e = a;
			do
				f = e.lane, M.lanes |= f, rh |= f, e = e.next;
			while (e !== a);
		} else null === e && (c.lanes = 0);
		return [b.memoizedState, c.dispatch];
	}
	function Xh(a) {
		var b = Uh(), c = b.queue;
		if (null === c) throw Error(p(311));
		c.lastRenderedReducer = a;
		var d = c.dispatch, e = c.pending, f = b.memoizedState;
		if (null !== e) {
			c.pending = null;
			var g = e = e.next;
			do
				f = a(f, g.action), g = g.next;
			while (g !== e);
			He(f, b.memoizedState) || (dh = !0);
			b.memoizedState = f;
			null === b.baseQueue && (b.baseState = f);
			c.lastRenderedState = f;
		}
		return [f, d];
	}
	function Yh() {}
	function Zh(a, b) {
		var c = M, d = Uh(), e = b(), f = !He(d.memoizedState, e);
		f && (d.memoizedState = e, dh = !0);
		d = d.queue;
		$h(ai.bind(null, c, d, a), [a]);
		if (d.getSnapshot !== b || f || null !== O && O.memoizedState.tag & 1) {
			c.flags |= 2048;
			bi(9, ci.bind(null, c, d, e, b), void 0, null);
			if (null === Q) throw Error(p(349));
			0 !== (Hh & 30) || di(c, b, e);
		}
		return e;
	}
	function di(a, b, c) {
		a.flags |= 16384;
		a = {
			getSnapshot: b,
			value: c
		};
		b = M.updateQueue;
		null === b ? (b = {
			lastEffect: null,
			stores: null
		}, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
	}
	function ci(a, b, c, d) {
		b.value = c;
		b.getSnapshot = d;
		ei(b) && fi(a);
	}
	function ai(a, b, c) {
		return c(function() {
			ei(b) && fi(a);
		});
	}
	function ei(a) {
		var b = a.getSnapshot;
		a = a.value;
		try {
			var c = b();
			return !He(a, c);
		} catch (d) {
			return !0;
		}
	}
	function fi(a) {
		var b = ih(a, 1);
		null !== b && gi(b, a, 1, -1);
	}
	function hi(a) {
		var b = Th();
		"function" === typeof a && (a = a());
		b.memoizedState = b.baseState = a;
		a = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Vh,
			lastRenderedState: a
		};
		b.queue = a;
		a = a.dispatch = ii.bind(null, M, a);
		return [b.memoizedState, a];
	}
	function bi(a, b, c, d) {
		a = {
			tag: a,
			create: b,
			destroy: c,
			deps: d,
			next: null
		};
		b = M.updateQueue;
		null === b ? (b = {
			lastEffect: null,
			stores: null
		}, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
		return a;
	}
	function ji() {
		return Uh().memoizedState;
	}
	function ki(a, b, c, d) {
		var e = Th();
		M.flags |= a;
		e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
	}
	function li(a, b, c, d) {
		var e = Uh();
		d = void 0 === d ? null : d;
		var f = void 0;
		if (null !== N) {
			var g = N.memoizedState;
			f = g.destroy;
			if (null !== d && Mh(d, g.deps)) {
				e.memoizedState = bi(b, c, f, d);
				return;
			}
		}
		M.flags |= a;
		e.memoizedState = bi(1 | b, c, f, d);
	}
	function mi(a, b) {
		return ki(8390656, 8, a, b);
	}
	function $h(a, b) {
		return li(2048, 8, a, b);
	}
	function ni(a, b) {
		return li(4, 2, a, b);
	}
	function oi(a, b) {
		return li(4, 4, a, b);
	}
	function pi(a, b) {
		if ("function" === typeof b) return a = a(), b(a), function() {
			b(null);
		};
		if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
			b.current = null;
		};
	}
	function qi(a, b, c) {
		c = null !== c && void 0 !== c ? c.concat([a]) : null;
		return li(4, 4, pi.bind(null, b, a), c);
	}
	function ri() {}
	function si(a, b) {
		var c = Uh();
		b = void 0 === b ? null : b;
		var d = c.memoizedState;
		if (null !== d && null !== b && Mh(b, d[1])) return d[0];
		c.memoizedState = [a, b];
		return a;
	}
	function ti(a, b) {
		var c = Uh();
		b = void 0 === b ? null : b;
		var d = c.memoizedState;
		if (null !== d && null !== b && Mh(b, d[1])) return d[0];
		a = a();
		c.memoizedState = [a, b];
		return a;
	}
	function ui(a, b, c) {
		if (0 === (Hh & 21)) return a.baseState && (a.baseState = !1, dh = !0), a.memoizedState = c;
		He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = !0);
		return b;
	}
	function vi(a, b) {
		var c = C;
		C = 0 !== c && 4 > c ? c : 4;
		a(!0);
		var d = Gh.transition;
		Gh.transition = {};
		try {
			a(!1), b();
		} finally {
			C = c, Gh.transition = d;
		}
	}
	function wi() {
		return Uh().memoizedState;
	}
	function xi(a, b, c) {
		var d = yi(a);
		c = {
			lane: d,
			action: c,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (zi(a)) Ai(b, c);
		else if (c = hh(a, b, c, d), null !== c) {
			var e = R();
			gi(c, a, d, e);
			Bi(c, b, d);
		}
	}
	function ii(a, b, c) {
		var d = yi(a), e = {
			lane: d,
			action: c,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (zi(a)) Ai(b, e);
		else {
			var f = a.alternate;
			if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
				var g = b.lastRenderedState, h = f(g, c);
				e.hasEagerState = !0;
				e.eagerState = h;
				if (He(h, g)) {
					var k = b.interleaved;
					null === k ? (e.next = e, gh(b)) : (e.next = k.next, k.next = e);
					b.interleaved = e;
					return;
				}
			} catch (l) {}
			c = hh(a, b, e, d);
			null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
		}
	}
	function zi(a) {
		var b = a.alternate;
		return a === M || null !== b && b === M;
	}
	function Ai(a, b) {
		Jh = Ih = !0;
		var c = a.pending;
		null === c ? b.next = b : (b.next = c.next, c.next = b);
		a.pending = b;
	}
	function Bi(a, b, c) {
		if (0 !== (c & 4194240)) {
			var d = b.lanes;
			d &= a.pendingLanes;
			c |= d;
			b.lanes = c;
			Cc(a, c);
		}
	}
	var Rh = {
		readContext: eh,
		useCallback: P,
		useContext: P,
		useEffect: P,
		useImperativeHandle: P,
		useInsertionEffect: P,
		useLayoutEffect: P,
		useMemo: P,
		useReducer: P,
		useRef: P,
		useState: P,
		useDebugValue: P,
		useDeferredValue: P,
		useTransition: P,
		useMutableSource: P,
		useSyncExternalStore: P,
		useId: P,
		unstable_isNewReconciler: !1
	}, Oh = {
		readContext: eh,
		useCallback: function(a, b) {
			Th().memoizedState = [a, void 0 === b ? null : b];
			return a;
		},
		useContext: eh,
		useEffect: mi,
		useImperativeHandle: function(a, b, c) {
			c = null !== c && void 0 !== c ? c.concat([a]) : null;
			return ki(4194308, 4, pi.bind(null, b, a), c);
		},
		useLayoutEffect: function(a, b) {
			return ki(4194308, 4, a, b);
		},
		useInsertionEffect: function(a, b) {
			return ki(4, 2, a, b);
		},
		useMemo: function(a, b) {
			var c = Th();
			b = void 0 === b ? null : b;
			a = a();
			c.memoizedState = [a, b];
			return a;
		},
		useReducer: function(a, b, c) {
			var d = Th();
			b = void 0 !== c ? c(b) : b;
			d.memoizedState = d.baseState = b;
			a = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: a,
				lastRenderedState: b
			};
			d.queue = a;
			a = a.dispatch = xi.bind(null, M, a);
			return [d.memoizedState, a];
		},
		useRef: function(a) {
			var b = Th();
			a = { current: a };
			return b.memoizedState = a;
		},
		useState: hi,
		useDebugValue: ri,
		useDeferredValue: function(a) {
			return Th().memoizedState = a;
		},
		useTransition: function() {
			var a = hi(!1), b = a[0];
			a = vi.bind(null, a[1]);
			Th().memoizedState = a;
			return [b, a];
		},
		useMutableSource: function() {},
		useSyncExternalStore: function(a, b, c) {
			var d = M, e = Th();
			if (I) {
				if (void 0 === c) throw Error(p(407));
				c = c();
			} else {
				c = b();
				if (null === Q) throw Error(p(349));
				0 !== (Hh & 30) || di(d, b, c);
			}
			e.memoizedState = c;
			var f = {
				value: c,
				getSnapshot: b
			};
			e.queue = f;
			mi(ai.bind(null, d, f, a), [a]);
			d.flags |= 2048;
			bi(9, ci.bind(null, d, f, c, b), void 0, null);
			return c;
		},
		useId: function() {
			var a = Th(), b = Q.identifierPrefix;
			if (I) {
				var c = sg;
				var d = rg;
				c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
				b = ":" + b + "R" + c;
				c = Kh++;
				0 < c && (b += "H" + c.toString(32));
				b += ":";
			} else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
			return a.memoizedState = b;
		},
		unstable_isNewReconciler: !1
	}, Ph = {
		readContext: eh,
		useCallback: si,
		useContext: eh,
		useEffect: $h,
		useImperativeHandle: qi,
		useInsertionEffect: ni,
		useLayoutEffect: oi,
		useMemo: ti,
		useReducer: Wh,
		useRef: ji,
		useState: function() {
			return Wh(Vh);
		},
		useDebugValue: ri,
		useDeferredValue: function(a) {
			return ui(Uh(), N.memoizedState, a);
		},
		useTransition: function() {
			return [Wh(Vh)[0], Uh().memoizedState];
		},
		useMutableSource: Yh,
		useSyncExternalStore: Zh,
		useId: wi,
		unstable_isNewReconciler: !1
	}, Qh = {
		readContext: eh,
		useCallback: si,
		useContext: eh,
		useEffect: $h,
		useImperativeHandle: qi,
		useInsertionEffect: ni,
		useLayoutEffect: oi,
		useMemo: ti,
		useReducer: Xh,
		useRef: ji,
		useState: function() {
			return Xh(Vh);
		},
		useDebugValue: ri,
		useDeferredValue: function(a) {
			var b = Uh();
			return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
		},
		useTransition: function() {
			return [Xh(Vh)[0], Uh().memoizedState];
		},
		useMutableSource: Yh,
		useSyncExternalStore: Zh,
		useId: wi,
		unstable_isNewReconciler: !1
	};
	function Ci(a, b) {
		if (a && a.defaultProps) {
			b = A({}, b);
			a = a.defaultProps;
			for (var c in a) void 0 === b[c] && (b[c] = a[c]);
			return b;
		}
		return b;
	}
	function Di(a, b, c, d) {
		b = a.memoizedState;
		c = c(d, b);
		c = null === c || void 0 === c ? b : A({}, b, c);
		a.memoizedState = c;
		0 === a.lanes && (a.updateQueue.baseState = c);
	}
	var Ei = {
		isMounted: function(a) {
			return (a = a._reactInternals) ? Vb(a) === a : !1;
		},
		enqueueSetState: function(a, b, c) {
			a = a._reactInternals;
			var d = R(), e = yi(a), f = mh(d, e);
			f.payload = b;
			void 0 !== c && null !== c && (f.callback = c);
			b = nh(a, f, e);
			null !== b && (gi(b, a, e, d), oh(b, a, e));
		},
		enqueueReplaceState: function(a, b, c) {
			a = a._reactInternals;
			var d = R(), e = yi(a), f = mh(d, e);
			f.tag = 1;
			f.payload = b;
			void 0 !== c && null !== c && (f.callback = c);
			b = nh(a, f, e);
			null !== b && (gi(b, a, e, d), oh(b, a, e));
		},
		enqueueForceUpdate: function(a, b) {
			a = a._reactInternals;
			var c = R(), d = yi(a), e = mh(c, d);
			e.tag = 2;
			void 0 !== b && null !== b && (e.callback = b);
			b = nh(a, e, d);
			null !== b && (gi(b, a, d, c), oh(b, a, d));
		}
	};
	function Fi(a, b, c, d, e, f, g) {
		a = a.stateNode;
		return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : !0;
	}
	function Gi(a, b, c) {
		var d = !1, e = Vf;
		var f = b.contextType;
		"object" === typeof f && null !== f ? f = eh(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
		b = new b(c, f);
		a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
		b.updater = Ei;
		a.stateNode = b;
		b._reactInternals = a;
		d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
		return b;
	}
	function Hi(a, b, c, d) {
		a = b.state;
		"function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
		"function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
		b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
	}
	function Ii(a, b, c, d) {
		var e = a.stateNode;
		e.props = c;
		e.state = a.memoizedState;
		e.refs = {};
		kh(a);
		var f = b.contextType;
		"object" === typeof f && null !== f ? e.context = eh(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
		e.state = a.memoizedState;
		f = b.getDerivedStateFromProps;
		"function" === typeof f && (Di(a, b, f, c), e.state = a.memoizedState);
		"function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
		"function" === typeof e.componentDidMount && (a.flags |= 4194308);
	}
	function Ji(a, b) {
		try {
			var c = "", d = b;
			do
				c += Pa(d), d = d.return;
			while (d);
			var e = c;
		} catch (f) {
			e = "\nError generating stack: " + f.message + "\n" + f.stack;
		}
		return {
			value: a,
			source: b,
			stack: e,
			digest: null
		};
	}
	function Ki(a, b, c) {
		return {
			value: a,
			source: null,
			stack: null != c ? c : null,
			digest: null != b ? b : null
		};
	}
	function Li(a, b) {
		try {
			console.error(b.value);
		} catch (c) {
			setTimeout(function() {
				throw c;
			});
		}
	}
	var Mi = "function" === typeof WeakMap ? WeakMap : Map;
	function Ni(a, b, c) {
		c = mh(-1, c);
		c.tag = 3;
		c.payload = { element: null };
		var d = b.value;
		c.callback = function() {
			Oi || (Oi = !0, Pi = d);
			Li(a, b);
		};
		return c;
	}
	function Qi(a, b, c) {
		c = mh(-1, c);
		c.tag = 3;
		var d = a.type.getDerivedStateFromError;
		if ("function" === typeof d) {
			var e = b.value;
			c.payload = function() {
				return d(e);
			};
			c.callback = function() {
				Li(a, b);
			};
		}
		var f = a.stateNode;
		null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
			Li(a, b);
			"function" !== typeof d && (null === Ri ? Ri = new Set([this]) : Ri.add(this));
			var c = b.stack;
			this.componentDidCatch(b.value, { componentStack: null !== c ? c : "" });
		});
		return c;
	}
	function Si(a, b, c) {
		var d = a.pingCache;
		if (null === d) {
			d = a.pingCache = new Mi();
			var e = /* @__PURE__ */ new Set();
			d.set(b, e);
		} else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
		e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
	}
	function Ui(a) {
		do {
			var b;
			if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? !0 : !1 : !0;
			if (b) return a;
			a = a.return;
		} while (null !== a);
		return null;
	}
	function Vi(a, b, c, d, e) {
		if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
		a.flags |= 65536;
		a.lanes = e;
		return a;
	}
	var Wi = ua.ReactCurrentOwner, dh = !1;
	function Xi(a, b, c, d) {
		b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
	}
	function Yi(a, b, c, d, e) {
		c = c.render;
		var f = b.ref;
		ch(b, e);
		d = Nh(a, b, c, d, f, e);
		c = Sh();
		if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
		I && c && vg(b);
		b.flags |= 1;
		Xi(a, b, d, e);
		return b.child;
	}
	function $i(a, b, c, d, e) {
		if (null === a) {
			var f = c.type;
			if ("function" === typeof f && !aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, bj(a, b, f, d, e);
			a = Rg(c.type, null, d, b, b.mode, e);
			a.ref = b.ref;
			a.return = b;
			return b.child = a;
		}
		f = a.child;
		if (0 === (a.lanes & e)) {
			var g = f.memoizedProps;
			c = c.compare;
			c = null !== c ? c : Ie;
			if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
		}
		b.flags |= 1;
		a = Pg(f, d);
		a.ref = b.ref;
		a.return = b;
		return b.child = a;
	}
	function bj(a, b, c, d, e) {
		if (null !== a) {
			var f = a.memoizedProps;
			if (Ie(f, d) && a.ref === b.ref) if (dh = !1, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = !0);
			else return b.lanes = a.lanes, Zi(a, b, e);
		}
		return cj(a, b, c, d, e);
	}
	function dj(a, b, c) {
		var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
		if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = {
			baseLanes: 0,
			cachePool: null,
			transitions: null
		}, G(ej, fj), fj |= c;
		else {
			if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
				baseLanes: a,
				cachePool: null,
				transitions: null
			}, b.updateQueue = null, G(ej, fj), fj |= a, null;
			b.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			};
			d = null !== f ? f.baseLanes : c;
			G(ej, fj);
			fj |= d;
		}
		else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
		Xi(a, b, e, c);
		return b.child;
	}
	function gj(a, b) {
		var c = b.ref;
		if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
	}
	function cj(a, b, c, d, e) {
		var f = Zf(c) ? Xf : H.current;
		f = Yf(b, f);
		ch(b, e);
		c = Nh(a, b, c, d, f, e);
		d = Sh();
		if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
		I && d && vg(b);
		b.flags |= 1;
		Xi(a, b, c, e);
		return b.child;
	}
	function hj(a, b, c, d, e) {
		if (Zf(c)) {
			var f = !0;
			cg(b);
		} else f = !1;
		ch(b, e);
		if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = !0;
		else if (null === a) {
			var g = b.stateNode, h = b.memoizedProps;
			g.props = h;
			var k = g.context, l = c.contextType;
			"object" === typeof l && null !== l ? l = eh(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
			var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
			q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Hi(b, g, d, l);
			jh = !1;
			var r = b.memoizedState;
			g.state = r;
			qh(b, d, g, e);
			k = b.memoizedState;
			h !== d || r !== k || Wf.current || jh ? ("function" === typeof m && (Di(b, c, m, d), k = b.memoizedState), (h = jh || Fi(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = !1);
		} else {
			g = b.stateNode;
			lh(a, b);
			h = b.memoizedProps;
			l = b.type === b.elementType ? h : Ci(b.type, h);
			g.props = l;
			q = b.pendingProps;
			r = g.context;
			k = c.contextType;
			"object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
			var y = c.getDerivedStateFromProps;
			(m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && Hi(b, g, d, k);
			jh = !1;
			r = b.memoizedState;
			g.state = r;
			qh(b, d, g, e);
			var n = b.memoizedState;
			h !== q || r !== n || Wf.current || jh ? ("function" === typeof y && (Di(b, c, y, d), n = b.memoizedState), (l = jh || Fi(b, c, l, d, r, n, k) || !1) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = !1);
		}
		return jj(a, b, c, d, f, e);
	}
	function jj(a, b, c, d, e, f) {
		gj(a, b);
		var g = 0 !== (b.flags & 128);
		if (!d && !g) return e && dg(b, c, !1), Zi(a, b, f);
		d = b.stateNode;
		Wi.current = b;
		var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
		b.flags |= 1;
		null !== a && g ? (b.child = Ug(b, a.child, null, f), b.child = Ug(b, null, h, f)) : Xi(a, b, h, f);
		b.memoizedState = d.state;
		e && dg(b, c, !0);
		return b.child;
	}
	function kj(a) {
		var b = a.stateNode;
		b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, !1);
		yh(a, b.containerInfo);
	}
	function lj(a, b, c, d, e) {
		Ig();
		Jg(e);
		b.flags |= 256;
		Xi(a, b, c, d);
		return b.child;
	}
	var mj = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0
	};
	function nj(a) {
		return {
			baseLanes: a,
			cachePool: null,
			transitions: null
		};
	}
	function oj(a, b, c) {
		var d = b.pendingProps, e = L.current, f = !1, g = 0 !== (b.flags & 128), h;
		(h = g) || (h = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
		if (h) f = !0, b.flags &= -129;
		else if (null === a || null !== a.memoizedState) e |= 1;
		G(L, e & 1);
		if (null === a) {
			Eg(b);
			a = b.memoizedState;
			if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
			g = d.children;
			a = d.fallback;
			return f ? (d = b.mode, f = b.child, g = {
				mode: "hidden",
				children: g
			}, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = pj(g, d, 0, null), a = Tg(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
		}
		e = a.memoizedState;
		if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
		if (f) {
			f = d.fallback;
			g = b.mode;
			e = a.child;
			h = e.sibling;
			var k = {
				mode: "hidden",
				children: d.children
			};
			0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
			null !== h ? f = Pg(h, f) : (f = Tg(f, g, c, null), f.flags |= 2);
			f.return = b;
			d.return = b;
			d.sibling = f;
			b.child = d;
			d = f;
			f = b.child;
			g = a.child.memoizedState;
			g = null === g ? nj(c) : {
				baseLanes: g.baseLanes | c,
				cachePool: null,
				transitions: g.transitions
			};
			f.memoizedState = g;
			f.childLanes = a.childLanes & ~c;
			b.memoizedState = mj;
			return d;
		}
		f = a.child;
		a = f.sibling;
		d = Pg(f, {
			mode: "visible",
			children: d.children
		});
		0 === (b.mode & 1) && (d.lanes = c);
		d.return = b;
		d.sibling = null;
		null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
		b.child = d;
		b.memoizedState = null;
		return d;
	}
	function qj(a, b) {
		b = pj({
			mode: "visible",
			children: b
		}, a.mode, 0, null);
		b.return = a;
		return a.child = b;
	}
	function sj(a, b, c, d) {
		null !== d && Jg(d);
		Ug(b, a.child, null, c);
		a = qj(b, b.pendingProps.children);
		a.flags |= 2;
		b.memoizedState = null;
		return a;
	}
	function rj(a, b, c, d, e, f, g) {
		if (c) {
			if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
			if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
			f = d.fallback;
			e = b.mode;
			d = pj({
				mode: "visible",
				children: d.children
			}, e, 0, null);
			f = Tg(f, e, g, null);
			f.flags |= 2;
			d.return = b;
			f.return = b;
			d.sibling = f;
			b.child = d;
			0 !== (b.mode & 1) && Ug(b, a.child, null, g);
			b.child.memoizedState = nj(g);
			b.memoizedState = mj;
			return f;
		}
		if (0 === (b.mode & 1)) return sj(a, b, g, null);
		if ("$!" === e.data) {
			d = e.nextSibling && e.nextSibling.dataset;
			if (d) var h = d.dgst;
			d = h;
			f = Error(p(419));
			d = Ki(f, d, void 0);
			return sj(a, b, g, d);
		}
		h = 0 !== (g & a.childLanes);
		if (dh || h) {
			d = Q;
			if (null !== d) {
				switch (g & -g) {
					case 4:
						e = 2;
						break;
					case 16:
						e = 8;
						break;
					case 64:
					case 128:
					case 256:
					case 512:
					case 1024:
					case 2048:
					case 4096:
					case 8192:
					case 16384:
					case 32768:
					case 65536:
					case 131072:
					case 262144:
					case 524288:
					case 1048576:
					case 2097152:
					case 4194304:
					case 8388608:
					case 16777216:
					case 33554432:
					case 67108864:
						e = 32;
						break;
					case 536870912:
						e = 268435456;
						break;
					default: e = 0;
				}
				e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
				0 !== e && e !== f.retryLane && (f.retryLane = e, ih(a, e), gi(d, a, e, -1));
			}
			tj();
			d = Ki(Error(p(421)));
			return sj(a, b, g, d);
		}
		if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
		a = f.treeContext;
		yg = Lf(e.nextSibling);
		xg = b;
		I = !0;
		zg = null;
		null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
		b = qj(b, d.children);
		b.flags |= 4096;
		return b;
	}
	function vj(a, b, c) {
		a.lanes |= b;
		var d = a.alternate;
		null !== d && (d.lanes |= b);
		bh(a.return, b, c);
	}
	function wj(a, b, c, d, e) {
		var f = a.memoizedState;
		null === f ? a.memoizedState = {
			isBackwards: b,
			rendering: null,
			renderingStartTime: 0,
			last: d,
			tail: c,
			tailMode: e
		} : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
	}
	function xj(a, b, c) {
		var d = b.pendingProps, e = d.revealOrder, f = d.tail;
		Xi(a, b, d.children, c);
		d = L.current;
		if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
		else {
			if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a;) {
				if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
				else if (19 === a.tag) vj(a, c, b);
				else if (null !== a.child) {
					a.child.return = a;
					a = a.child;
					continue;
				}
				if (a === b) break a;
				for (; null === a.sibling;) {
					if (null === a.return || a.return === b) break a;
					a = a.return;
				}
				a.sibling.return = a.return;
				a = a.sibling;
			}
			d &= 1;
		}
		G(L, d);
		if (0 === (b.mode & 1)) b.memoizedState = null;
		else switch (e) {
			case "forwards":
				c = b.child;
				for (e = null; null !== c;) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
				c = e;
				null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
				wj(b, !1, e, c, f);
				break;
			case "backwards":
				c = null;
				e = b.child;
				for (b.child = null; null !== e;) {
					a = e.alternate;
					if (null !== a && null === Ch(a)) {
						b.child = e;
						break;
					}
					a = e.sibling;
					e.sibling = c;
					c = e;
					e = a;
				}
				wj(b, !0, c, null, f);
				break;
			case "together":
				wj(b, !1, null, null, void 0);
				break;
			default: b.memoizedState = null;
		}
		return b.child;
	}
	function ij(a, b) {
		0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
	}
	function Zi(a, b, c) {
		null !== a && (b.dependencies = a.dependencies);
		rh |= b.lanes;
		if (0 === (c & b.childLanes)) return null;
		if (null !== a && b.child !== a.child) throw Error(p(153));
		if (null !== b.child) {
			a = b.child;
			c = Pg(a, a.pendingProps);
			b.child = c;
			for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
			c.sibling = null;
		}
		return b.child;
	}
	function yj(a, b, c) {
		switch (b.tag) {
			case 3:
				kj(b);
				Ig();
				break;
			case 5:
				Ah(b);
				break;
			case 1:
				Zf(b.type) && cg(b);
				break;
			case 4:
				yh(b, b.stateNode.containerInfo);
				break;
			case 10:
				var d = b.type._context, e = b.memoizedProps.value;
				G(Wg, d._currentValue);
				d._currentValue = e;
				break;
			case 13:
				d = b.memoizedState;
				if (null !== d) {
					if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
					if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
					G(L, L.current & 1);
					a = Zi(a, b, c);
					return null !== a ? a.sibling : null;
				}
				G(L, L.current & 1);
				break;
			case 19:
				d = 0 !== (c & b.childLanes);
				if (0 !== (a.flags & 128)) {
					if (d) return xj(a, b, c);
					b.flags |= 128;
				}
				e = b.memoizedState;
				null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
				G(L, L.current);
				if (d) break;
				else return null;
			case 22:
			case 23: return b.lanes = 0, dj(a, b, c);
		}
		return Zi(a, b, c);
	}
	var zj = function(a, b) {
		for (var c = b.child; null !== c;) {
			if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
			else if (4 !== c.tag && null !== c.child) {
				c.child.return = c;
				c = c.child;
				continue;
			}
			if (c === b) break;
			for (; null === c.sibling;) {
				if (null === c.return || c.return === b) return;
				c = c.return;
			}
			c.sibling.return = c.return;
			c = c.sibling;
		}
	}, Aj = function() {}, Bj = function(a, b, c, d) {
		var e = a.memoizedProps;
		if (e !== d) {
			a = b.stateNode;
			xh(uh.current);
			var f = null;
			switch (c) {
				case "input":
					e = Ya(a, e);
					d = Ya(a, d);
					f = [];
					break;
				case "select":
					e = A({}, e, { value: void 0 });
					d = A({}, d, { value: void 0 });
					f = [];
					break;
				case "textarea":
					e = gb(a, e);
					d = gb(a, d);
					f = [];
					break;
				default: "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
			}
			ub(c, d);
			var g;
			c = null;
			for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
				var h = e[l];
				for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
			} else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
			for (l in d) {
				var k = d[l];
				h = null != e ? e[l] : void 0;
				if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
					for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
					for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
				} else c || (f || (f = []), f.push(l, c)), c = k;
				else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
			}
			c && (f = f || []).push("style", c);
			var l = f;
			if (b.updateQueue = l) b.flags |= 4;
		}
	}, Cj = function(a, b, c, d) {
		c !== d && (b.flags |= 4);
	};
	function Dj(a, b) {
		if (!I) switch (a.tailMode) {
			case "hidden":
				b = a.tail;
				for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;
				null === c ? a.tail = null : c.sibling = null;
				break;
			case "collapsed":
				c = a.tail;
				for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;
				null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
		}
	}
	function S(a) {
		var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
		if (b) for (var e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
		else for (e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
		a.subtreeFlags |= d;
		a.childLanes = c;
		return b;
	}
	function Ej(a, b, c) {
		var d = b.pendingProps;
		wg(b);
		switch (b.tag) {
			case 2:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return S(b), null;
			case 1: return Zf(b.type) && $f(), S(b), null;
			case 3:
				d = b.stateNode;
				zh();
				E(Wf);
				E(H);
				Eh();
				d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
				if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
				Aj(a, b);
				S(b);
				return null;
			case 5:
				Bh(b);
				var e = xh(wh.current);
				c = b.type;
				if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
				else {
					if (!d) {
						if (null === b.stateNode) throw Error(p(166));
						S(b);
						return null;
					}
					a = xh(uh.current);
					if (Gg(b)) {
						d = b.stateNode;
						c = b.type;
						var f = b.memoizedProps;
						d[Of] = b;
						d[Pf] = f;
						a = 0 !== (b.mode & 1);
						switch (c) {
							case "dialog":
								D("cancel", d);
								D("close", d);
								break;
							case "iframe":
							case "object":
							case "embed":
								D("load", d);
								break;
							case "video":
							case "audio":
								for (e = 0; e < lf.length; e++) D(lf[e], d);
								break;
							case "source":
								D("error", d);
								break;
							case "img":
							case "image":
							case "link":
								D("error", d);
								D("load", d);
								break;
							case "details":
								D("toggle", d);
								break;
							case "input":
								Za(d, f);
								D("invalid", d);
								break;
							case "select":
								d._wrapperState = { wasMultiple: !!f.multiple };
								D("invalid", d);
								break;
							case "textarea": hb(d, f), D("invalid", d);
						}
						ub(c, f);
						e = null;
						for (var g in f) if (f.hasOwnProperty(g)) {
							var h = f[g];
							"children" === g ? "string" === typeof h ? d.textContent !== h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
						}
						switch (c) {
							case "input":
								Va(d);
								db(d, f, !0);
								break;
							case "textarea":
								Va(d);
								jb(d);
								break;
							case "select":
							case "option": break;
							default: "function" === typeof f.onClick && (d.onclick = Bf);
						}
						d = e;
						b.updateQueue = d;
						null !== d && (b.flags |= 4);
					} else {
						g = 9 === e.nodeType ? e : e.ownerDocument;
						"http://www.w3.org/1999/xhtml" === a && (a = kb(c));
						"http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
						a[Of] = b;
						a[Pf] = d;
						zj(a, b, !1, !1);
						b.stateNode = a;
						a: {
							g = vb(c, d);
							switch (c) {
								case "dialog":
									D("cancel", a);
									D("close", a);
									e = d;
									break;
								case "iframe":
								case "object":
								case "embed":
									D("load", a);
									e = d;
									break;
								case "video":
								case "audio":
									for (e = 0; e < lf.length; e++) D(lf[e], a);
									e = d;
									break;
								case "source":
									D("error", a);
									e = d;
									break;
								case "img":
								case "image":
								case "link":
									D("error", a);
									D("load", a);
									e = d;
									break;
								case "details":
									D("toggle", a);
									e = d;
									break;
								case "input":
									Za(a, d);
									e = Ya(a, d);
									D("invalid", a);
									break;
								case "option":
									e = d;
									break;
								case "select":
									a._wrapperState = { wasMultiple: !!d.multiple };
									e = A({}, d, { value: void 0 });
									D("invalid", a);
									break;
								case "textarea":
									hb(a, d);
									e = gb(a, d);
									D("invalid", a);
									break;
								default: e = d;
							}
							ub(c, e);
							h = e;
							for (f in h) if (h.hasOwnProperty(f)) {
								var k = h[f];
								"style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
							}
							switch (c) {
								case "input":
									Va(a);
									db(a, d, !1);
									break;
								case "textarea":
									Va(a);
									jb(a);
									break;
								case "option":
									null != d.value && a.setAttribute("value", "" + Sa(d.value));
									break;
								case "select":
									a.multiple = !!d.multiple;
									f = d.value;
									null != f ? fb(a, !!d.multiple, f, !1) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, !0);
									break;
								default: "function" === typeof e.onClick && (a.onclick = Bf);
							}
							switch (c) {
								case "button":
								case "input":
								case "select":
								case "textarea":
									d = !!d.autoFocus;
									break a;
								case "img":
									d = !0;
									break a;
								default: d = !1;
							}
						}
						d && (b.flags |= 4);
					}
					null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
				}
				S(b);
				return null;
			case 6:
				if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
				else {
					if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
					c = xh(wh.current);
					xh(uh.current);
					if (Gg(b)) {
						d = b.stateNode;
						c = b.memoizedProps;
						d[Of] = b;
						if (f = d.nodeValue !== c) {
							if (a = xg, null !== a) switch (a.tag) {
								case 3:
									Af(d.nodeValue, c, 0 !== (a.mode & 1));
									break;
								case 5: !0 !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
							}
						}
						f && (b.flags |= 4);
					} else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
				}
				S(b);
				return null;
			case 13:
				E(L);
				d = b.memoizedState;
				if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
					if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = !1;
					else if (f = Gg(b), null !== d && null !== d.dehydrated) {
						if (null === a) {
							if (!f) throw Error(p(318));
							f = b.memoizedState;
							f = null !== f ? f.dehydrated : null;
							if (!f) throw Error(p(317));
							f[Of] = b;
						} else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
						S(b);
						f = !1;
					} else null !== zg && (Fj(zg), zg = null), f = !0;
					if (!f) return b.flags & 65536 ? b : null;
				}
				if (0 !== (b.flags & 128)) return b.lanes = c, b;
				d = null !== d;
				d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
				null !== b.updateQueue && (b.flags |= 4);
				S(b);
				return null;
			case 4: return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
			case 10: return ah(b.type._context), S(b), null;
			case 17: return Zf(b.type) && $f(), S(b), null;
			case 19:
				E(L);
				f = b.memoizedState;
				if (null === f) return S(b), null;
				d = 0 !== (b.flags & 128);
				g = f.rendering;
				if (null === g) if (d) Dj(f, !1);
				else {
					if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a;) {
						g = Ch(a);
						if (null !== g) {
							b.flags |= 128;
							Dj(f, !1);
							d = g.updateQueue;
							null !== d && (b.updateQueue = d, b.flags |= 4);
							b.subtreeFlags = 0;
							d = c;
							for (c = b.child; null !== c;) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
								lanes: a.lanes,
								firstContext: a.firstContext
							}), c = c.sibling;
							G(L, L.current & 1 | 2);
							return b.child;
						}
						a = a.sibling;
					}
					null !== f.tail && B() > Gj && (b.flags |= 128, d = !0, Dj(f, !1), b.lanes = 4194304);
				}
				else {
					if (!d) if (a = Ch(g), null !== a) {
						if (b.flags |= 128, d = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f, !0), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), null;
					} else 2 * B() - f.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = !0, Dj(f, !1), b.lanes = 4194304);
					f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
				}
				if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
				S(b);
				return null;
			case 22:
			case 23: return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
			case 24: return null;
			case 25: return null;
		}
		throw Error(p(156, b.tag));
	}
	function Ij(a, b) {
		wg(b);
		switch (b.tag) {
			case 1: return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
			case 3: return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
			case 5: return Bh(b), null;
			case 13:
				E(L);
				a = b.memoizedState;
				if (null !== a && null !== a.dehydrated) {
					if (null === b.alternate) throw Error(p(340));
					Ig();
				}
				a = b.flags;
				return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
			case 19: return E(L), null;
			case 4: return zh(), null;
			case 10: return ah(b.type._context), null;
			case 22:
			case 23: return Hj(), null;
			case 24: return null;
			default: return null;
		}
	}
	var Jj = !1, U = !1, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
	function Lj(a, b) {
		var c = a.ref;
		if (null !== c) if ("function" === typeof c) try {
			c(null);
		} catch (d) {
			W(a, b, d);
		}
		else c.current = null;
	}
	function Mj(a, b, c) {
		try {
			c();
		} catch (d) {
			W(a, b, d);
		}
	}
	var Nj = !1;
	function Oj(a, b) {
		Cf = dd;
		a = Me();
		if (Ne(a)) {
			if ("selectionStart" in a) var c = {
				start: a.selectionStart,
				end: a.selectionEnd
			};
			else a: {
				c = (c = a.ownerDocument) && c.defaultView || window;
				var d = c.getSelection && c.getSelection();
				if (d && 0 !== d.rangeCount) {
					c = d.anchorNode;
					var e = d.anchorOffset, f = d.focusNode;
					d = d.focusOffset;
					try {
						c.nodeType, f.nodeType;
					} catch (F) {
						c = null;
						break a;
					}
					var g = 0, h = -1, k = -1, l = 0, m = 0, q = a, r = null;
					b: for (;;) {
						for (var y;;) {
							q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
							q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
							3 === q.nodeType && (g += q.nodeValue.length);
							if (null === (y = q.firstChild)) break;
							r = q;
							q = y;
						}
						for (;;) {
							if (q === a) break b;
							r === c && ++l === e && (h = g);
							r === f && ++m === d && (k = g);
							if (null !== (y = q.nextSibling)) break;
							q = r;
							r = q.parentNode;
						}
						q = y;
					}
					c = -1 === h || -1 === k ? null : {
						start: h,
						end: k
					};
				} else c = null;
			}
			c = c || {
				start: 0,
				end: 0
			};
		} else c = null;
		Df = {
			focusedElem: a,
			selectionRange: c
		};
		dd = !1;
		for (V = b; null !== V;) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
		else for (; null !== V;) {
			b = V;
			try {
				var n = b.alternate;
				if (0 !== (b.flags & 1024)) switch (b.tag) {
					case 0:
					case 11:
					case 15: break;
					case 1:
						if (null !== n) {
							var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode;
							x.__reactInternalSnapshotBeforeUpdate = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci(b.type, t), J);
						}
						break;
					case 3:
						var u = b.stateNode.containerInfo;
						1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
						break;
					case 5:
					case 6:
					case 4:
					case 17: break;
					default: throw Error(p(163));
				}
			} catch (F) {
				W(b, b.return, F);
			}
			a = b.sibling;
			if (null !== a) {
				a.return = b.return;
				V = a;
				break;
			}
			V = b.return;
		}
		n = Nj;
		Nj = !1;
		return n;
	}
	function Pj(a, b, c) {
		var d = b.updateQueue;
		d = null !== d ? d.lastEffect : null;
		if (null !== d) {
			var e = d = d.next;
			do {
				if ((e.tag & a) === a) {
					var f = e.destroy;
					e.destroy = void 0;
					void 0 !== f && Mj(b, c, f);
				}
				e = e.next;
			} while (e !== d);
		}
	}
	function Qj(a, b) {
		b = b.updateQueue;
		b = null !== b ? b.lastEffect : null;
		if (null !== b) {
			var c = b = b.next;
			do {
				if ((c.tag & a) === a) {
					var d = c.create;
					c.destroy = d();
				}
				c = c.next;
			} while (c !== b);
		}
	}
	function Rj(a) {
		var b = a.ref;
		if (null !== b) {
			var c = a.stateNode;
			switch (a.tag) {
				case 5:
					a = c;
					break;
				default: a = c;
			}
			"function" === typeof b ? b(a) : b.current = a;
		}
	}
	function Sj(a) {
		var b = a.alternate;
		null !== b && (a.alternate = null, Sj(b));
		a.child = null;
		a.deletions = null;
		a.sibling = null;
		5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
		a.stateNode = null;
		a.return = null;
		a.dependencies = null;
		a.memoizedProps = null;
		a.memoizedState = null;
		a.pendingProps = null;
		a.stateNode = null;
		a.updateQueue = null;
	}
	function Tj(a) {
		return 5 === a.tag || 3 === a.tag || 4 === a.tag;
	}
	function Uj(a) {
		a: for (;;) {
			for (; null === a.sibling;) {
				if (null === a.return || Tj(a.return)) return null;
				a = a.return;
			}
			a.sibling.return = a.return;
			for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag;) {
				if (a.flags & 2) continue a;
				if (null === a.child || 4 === a.tag) continue a;
				else a.child.return = a, a = a.child;
			}
			if (!(a.flags & 2)) return a.stateNode;
		}
	}
	function Vj(a, b, c) {
		var d = a.tag;
		if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
		else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a;) Vj(a, b, c), a = a.sibling;
	}
	function Wj(a, b, c) {
		var d = a.tag;
		if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
		else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a;) Wj(a, b, c), a = a.sibling;
	}
	var X = null, Xj = !1;
	function Yj(a, b, c) {
		for (c = c.child; null !== c;) Zj(a, b, c), c = c.sibling;
	}
	function Zj(a, b, c) {
		if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
			lc.onCommitFiberUnmount(kc, c);
		} catch (h) {}
		switch (c.tag) {
			case 5: U || Lj(c, b);
			case 6:
				var d = X, e = Xj;
				X = null;
				Yj(a, b, c);
				X = d;
				Xj = e;
				null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
				break;
			case 18:
				null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
				break;
			case 4:
				d = X;
				e = Xj;
				X = c.stateNode.containerInfo;
				Xj = !0;
				Yj(a, b, c);
				X = d;
				Xj = e;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
					e = d = d.next;
					do {
						var f = e, g = f.destroy;
						f = f.tag;
						void 0 !== g && (0 !== (f & 2) ? Mj(c, b, g) : 0 !== (f & 4) && Mj(c, b, g));
						e = e.next;
					} while (e !== d);
				}
				Yj(a, b, c);
				break;
			case 1:
				if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
					d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
				} catch (h) {
					W(c, b, h);
				}
				Yj(a, b, c);
				break;
			case 21:
				Yj(a, b, c);
				break;
			case 22:
				c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
				break;
			default: Yj(a, b, c);
		}
	}
	function ak(a) {
		var b = a.updateQueue;
		if (null !== b) {
			a.updateQueue = null;
			var c = a.stateNode;
			null === c && (c = a.stateNode = new Kj());
			b.forEach(function(b) {
				var d = bk.bind(null, a, b);
				c.has(b) || (c.add(b), b.then(d, d));
			});
		}
	}
	function ck(a, b) {
		var c = b.deletions;
		if (null !== c) for (var d = 0; d < c.length; d++) {
			var e = c[d];
			try {
				var f = a, g = b, h = g;
				a: for (; null !== h;) {
					switch (h.tag) {
						case 5:
							X = h.stateNode;
							Xj = !1;
							break a;
						case 3:
							X = h.stateNode.containerInfo;
							Xj = !0;
							break a;
						case 4:
							X = h.stateNode.containerInfo;
							Xj = !0;
							break a;
					}
					h = h.return;
				}
				if (null === X) throw Error(p(160));
				Zj(f, g, e);
				X = null;
				Xj = !1;
				var k = e.alternate;
				null !== k && (k.return = null);
				e.return = null;
			} catch (l) {
				W(e, b, l);
			}
		}
		if (b.subtreeFlags & 12854) for (b = b.child; null !== b;) dk(b, a), b = b.sibling;
	}
	function dk(a, b) {
		var c = a.alternate, d = a.flags;
		switch (a.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				ck(b, a);
				ek(a);
				if (d & 4) {
					try {
						Pj(3, a, a.return), Qj(3, a);
					} catch (t) {
						W(a, a.return, t);
					}
					try {
						Pj(5, a, a.return);
					} catch (t) {
						W(a, a.return, t);
					}
				}
				break;
			case 1:
				ck(b, a);
				ek(a);
				d & 512 && null !== c && Lj(c, c.return);
				break;
			case 5:
				ck(b, a);
				ek(a);
				d & 512 && null !== c && Lj(c, c.return);
				if (a.flags & 32) {
					var e = a.stateNode;
					try {
						ob(e, "");
					} catch (t) {
						W(a, a.return, t);
					}
				}
				if (d & 4 && (e = a.stateNode, null != e)) {
					var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
					a.updateQueue = null;
					if (null !== k) try {
						"input" === h && "radio" === f.type && null != f.name && ab(e, f);
						vb(h, g);
						var l = vb(h, f);
						for (g = 0; g < k.length; g += 2) {
							var m = k[g], q = k[g + 1];
							"style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
						}
						switch (h) {
							case "input":
								bb(e, f);
								break;
							case "textarea":
								ib(e, f);
								break;
							case "select":
								var r = e._wrapperState.wasMultiple;
								e._wrapperState.wasMultiple = !!f.multiple;
								var y = f.value;
								null != y ? fb(e, !!f.multiple, y, !1) : r !== !!f.multiple && (null != f.defaultValue ? fb(e, !!f.multiple, f.defaultValue, !0) : fb(e, !!f.multiple, f.multiple ? [] : "", !1));
						}
						e[Pf] = f;
					} catch (t) {
						W(a, a.return, t);
					}
				}
				break;
			case 6:
				ck(b, a);
				ek(a);
				if (d & 4) {
					if (null === a.stateNode) throw Error(p(162));
					e = a.stateNode;
					f = a.memoizedProps;
					try {
						e.nodeValue = f;
					} catch (t) {
						W(a, a.return, t);
					}
				}
				break;
			case 3:
				ck(b, a);
				ek(a);
				if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
					bd(b.containerInfo);
				} catch (t) {
					W(a, a.return, t);
				}
				break;
			case 4:
				ck(b, a);
				ek(a);
				break;
			case 13:
				ck(b, a);
				ek(a);
				e = a.child;
				e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
				d & 4 && ak(a);
				break;
			case 22:
				m = null !== c && null !== c.memoizedState;
				a.mode & 1 ? (U = (l = U) || m, ck(b, a), U = l) : ck(b, a);
				ek(a);
				if (d & 8192) {
					l = null !== a.memoizedState;
					if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m;) {
						for (q = V = m; null !== V;) {
							r = V;
							y = r.child;
							switch (r.tag) {
								case 0:
								case 11:
								case 14:
								case 15:
									Pj(4, r, r.return);
									break;
								case 1:
									Lj(r, r.return);
									var n = r.stateNode;
									if ("function" === typeof n.componentWillUnmount) {
										d = r;
										c = r.return;
										try {
											b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
										} catch (t) {
											W(d, c, t);
										}
									}
									break;
								case 5:
									Lj(r, r.return);
									break;
								case 22: if (null !== r.memoizedState) {
									gk(q);
									continue;
								}
							}
							null !== y ? (y.return = r, V = y) : gk(q);
						}
						m = m.sibling;
					}
					a: for (m = null, q = a;;) {
						if (5 === q.tag) {
							if (null === m) {
								m = q;
								try {
									e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
								} catch (t) {
									W(a, a.return, t);
								}
							}
						} else if (6 === q.tag) {
							if (null === m) try {
								q.stateNode.nodeValue = l ? "" : q.memoizedProps;
							} catch (t) {
								W(a, a.return, t);
							}
						} else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
							q.child.return = q;
							q = q.child;
							continue;
						}
						if (q === a) break a;
						for (; null === q.sibling;) {
							if (null === q.return || q.return === a) break a;
							m === q && (m = null);
							q = q.return;
						}
						m === q && (m = null);
						q.sibling.return = q.return;
						q = q.sibling;
					}
				}
				break;
			case 19:
				ck(b, a);
				ek(a);
				d & 4 && ak(a);
				break;
			case 21: break;
			default: ck(b, a), ek(a);
		}
	}
	function ek(a) {
		var b = a.flags;
		if (b & 2) {
			try {
				a: {
					for (var c = a.return; null !== c;) {
						if (Tj(c)) {
							var d = c;
							break a;
						}
						c = c.return;
					}
					throw Error(p(160));
				}
				switch (d.tag) {
					case 5:
						var e = d.stateNode;
						d.flags & 32 && (ob(e, ""), d.flags &= -33);
						Wj(a, Uj(a), e);
						break;
					case 3:
					case 4:
						var g = d.stateNode.containerInfo;
						Vj(a, Uj(a), g);
						break;
					default: throw Error(p(161));
				}
			} catch (k) {
				W(a, a.return, k);
			}
			a.flags &= -3;
		}
		b & 4096 && (a.flags &= -4097);
	}
	function hk(a, b, c) {
		V = a;
		ik(a, b, c);
	}
	function ik(a, b, c) {
		for (var d = 0 !== (a.mode & 1); null !== V;) {
			var e = V, f = e.child;
			if (22 === e.tag && d) {
				var g = null !== e.memoizedState || Jj;
				if (!g) {
					var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
					h = Jj;
					var l = U;
					Jj = g;
					if ((U = k) && !l) for (V = e; null !== V;) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k ? (k.return = g, V = k) : jk(e);
					for (; null !== f;) V = f, ik(f, b, c), f = f.sibling;
					V = e;
					Jj = h;
					U = l;
				}
				kk(a, b, c);
			} else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : kk(a, b, c);
		}
	}
	function kk(a) {
		for (; null !== V;) {
			var b = V;
			if (0 !== (b.flags & 8772)) {
				var c = b.alternate;
				try {
					if (0 !== (b.flags & 8772)) switch (b.tag) {
						case 0:
						case 11:
						case 15:
							U || Qj(5, b);
							break;
						case 1:
							var d = b.stateNode;
							if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
							else {
								var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
								d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
							}
							var f = b.updateQueue;
							null !== f && sh(b, f, d);
							break;
						case 3:
							var g = b.updateQueue;
							if (null !== g) {
								c = null;
								if (null !== b.child) switch (b.child.tag) {
									case 5:
										c = b.child.stateNode;
										break;
									case 1: c = b.child.stateNode;
								}
								sh(b, g, c);
							}
							break;
						case 5:
							var h = b.stateNode;
							if (null === c && b.flags & 4) {
								c = h;
								var k = b.memoizedProps;
								switch (b.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										k.autoFocus && c.focus();
										break;
									case "img": k.src && (c.src = k.src);
								}
							}
							break;
						case 6: break;
						case 4: break;
						case 12: break;
						case 13:
							if (null === b.memoizedState) {
								var l = b.alternate;
								if (null !== l) {
									var m = l.memoizedState;
									if (null !== m) {
										var q = m.dehydrated;
										null !== q && bd(q);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25: break;
						default: throw Error(p(163));
					}
					U || b.flags & 512 && Rj(b);
				} catch (r) {
					W(b, b.return, r);
				}
			}
			if (b === a) {
				V = null;
				break;
			}
			c = b.sibling;
			if (null !== c) {
				c.return = b.return;
				V = c;
				break;
			}
			V = b.return;
		}
	}
	function gk(a) {
		for (; null !== V;) {
			var b = V;
			if (b === a) {
				V = null;
				break;
			}
			var c = b.sibling;
			if (null !== c) {
				c.return = b.return;
				V = c;
				break;
			}
			V = b.return;
		}
	}
	function jk(a) {
		for (; null !== V;) {
			var b = V;
			try {
				switch (b.tag) {
					case 0:
					case 11:
					case 15:
						var c = b.return;
						try {
							Qj(4, b);
						} catch (k) {
							W(b, c, k);
						}
						break;
					case 1:
						var d = b.stateNode;
						if ("function" === typeof d.componentDidMount) {
							var e = b.return;
							try {
								d.componentDidMount();
							} catch (k) {
								W(b, e, k);
							}
						}
						var f = b.return;
						try {
							Rj(b);
						} catch (k) {
							W(b, f, k);
						}
						break;
					case 5:
						var g = b.return;
						try {
							Rj(b);
						} catch (k) {
							W(b, g, k);
						}
				}
			} catch (k) {
				W(b, b.return, k);
			}
			if (b === a) {
				V = null;
				break;
			}
			var h = b.sibling;
			if (null !== h) {
				h.return = b.return;
				V = h;
				break;
			}
			V = b.return;
		}
	}
	var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K = 0, Q = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = !1, Pi = null, Ri = null, vk = !1, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
	function R() {
		return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
	}
	function yi(a) {
		if (0 === (a.mode & 1)) return 1;
		if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
		if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
		a = C;
		if (0 !== a) return a;
		a = window.event;
		a = void 0 === a ? 16 : jd(a.type);
		return a;
	}
	function gi(a, b, c, d) {
		if (50 < yk) throw yk = 0, zk = null, Error(p(185));
		Ac(a, c, d);
		if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
	}
	function Dk(a, b) {
		var c = a.callbackNode;
		wc(a, b);
		var d = uc(a, a === Q ? Z : 0);
		if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
		else if (b = d & -d, a.callbackPriority !== b) {
			null != c && bc(c);
			if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
				0 === (K & 6) && jg();
			}), c = null;
			else {
				switch (Dc(d)) {
					case 1:
						c = fc;
						break;
					case 4:
						c = gc;
						break;
					case 16:
						c = hc;
						break;
					case 536870912:
						c = jc;
						break;
					default: c = hc;
				}
				c = Fk(c, Gk.bind(null, a));
			}
			a.callbackPriority = b;
			a.callbackNode = c;
		}
	}
	function Gk(a, b) {
		Ak = -1;
		Bk = 0;
		if (0 !== (K & 6)) throw Error(p(327));
		var c = a.callbackNode;
		if (Hk() && a.callbackNode !== c) return null;
		var d = uc(a, a === Q ? Z : 0);
		if (0 === d) return null;
		if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
		else {
			b = d;
			var e = K;
			K |= 2;
			var f = Jk();
			if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
			do
				try {
					Lk();
					break;
				} catch (h) {
					Mk(a, h);
				}
			while (1);
			$g();
			mk.current = f;
			K = e;
			null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
		}
		if (0 !== b) {
			2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
			if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
			if (6 === b) Ck(a, d);
			else {
				e = a.current.alternate;
				if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Nk(a, f))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
				a.finishedWork = e;
				a.finishedLanes = d;
				switch (b) {
					case 0:
					case 1: throw Error(p(345));
					case 2:
						Pk(a, tk, uk);
						break;
					case 3:
						Ck(a, d);
						if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
							if (0 !== uc(a, 0)) break;
							e = a.suspendedLanes;
							if ((e & d) !== d) {
								R();
								a.pingedLanes |= a.suspendedLanes & e;
								break;
							}
							a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
							break;
						}
						Pk(a, tk, uk);
						break;
					case 4:
						Ck(a, d);
						if ((d & 4194240) === d) break;
						b = a.eventTimes;
						for (e = -1; 0 < d;) {
							var g = 31 - oc(d);
							f = 1 << g;
							g = b[g];
							g > e && (e = g);
							d &= ~f;
						}
						d = e;
						d = B() - d;
						d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
						if (10 < d) {
							a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
							break;
						}
						Pk(a, tk, uk);
						break;
					case 5:
						Pk(a, tk, uk);
						break;
					default: throw Error(p(329));
				}
			}
		}
		Dk(a, B());
		return a.callbackNode === c ? Gk.bind(null, a) : null;
	}
	function Nk(a, b) {
		var c = sk;
		a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
		a = Ik(a, b);
		2 !== a && (b = tk, tk = c, null !== b && Fj(b));
		return a;
	}
	function Fj(a) {
		null === tk ? tk = a : tk.push.apply(tk, a);
	}
	function Ok(a) {
		for (var b = a;;) {
			if (b.flags & 16384) {
				var c = b.updateQueue;
				if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
					var e = c[d], f = e.getSnapshot;
					e = e.value;
					try {
						if (!He(f(), e)) return !1;
					} catch (g) {
						return !1;
					}
				}
			}
			c = b.child;
			if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
			else {
				if (b === a) break;
				for (; null === b.sibling;) {
					if (null === b.return || b.return === a) return !0;
					b = b.return;
				}
				b.sibling.return = b.return;
				b = b.sibling;
			}
		}
		return !0;
	}
	function Ck(a, b) {
		b &= ~rk;
		b &= ~qk;
		a.suspendedLanes |= b;
		a.pingedLanes &= ~b;
		for (a = a.expirationTimes; 0 < b;) {
			var c = 31 - oc(b), d = 1 << c;
			a[c] = -1;
			b &= ~d;
		}
	}
	function Ek(a) {
		if (0 !== (K & 6)) throw Error(p(327));
		Hk();
		var b = uc(a, 0);
		if (0 === (b & 1)) return Dk(a, B()), null;
		var c = Ik(a, b);
		if (0 !== a.tag && 2 === c) {
			var d = xc(a);
			0 !== d && (b = d, c = Nk(a, d));
		}
		if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
		if (6 === c) throw Error(p(345));
		a.finishedWork = a.current.alternate;
		a.finishedLanes = b;
		Pk(a, tk, uk);
		Dk(a, B());
		return null;
	}
	function Qk(a, b) {
		var c = K;
		K |= 1;
		try {
			return a(b);
		} finally {
			K = c, 0 === K && (Gj = B() + 500, fg && jg());
		}
	}
	function Rk(a) {
		null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
		var b = K;
		K |= 1;
		var c = ok.transition, d = C;
		try {
			if (ok.transition = null, C = 1, a) return a();
		} finally {
			C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
		}
	}
	function Hj() {
		fj = ej.current;
		E(ej);
	}
	function Kk(a, b) {
		a.finishedWork = null;
		a.finishedLanes = 0;
		var c = a.timeoutHandle;
		-1 !== c && (a.timeoutHandle = -1, Gf(c));
		if (null !== Y) for (c = Y.return; null !== c;) {
			var d = c;
			wg(d);
			switch (d.tag) {
				case 1:
					d = d.type.childContextTypes;
					null !== d && void 0 !== d && $f();
					break;
				case 3:
					zh();
					E(Wf);
					E(H);
					Eh();
					break;
				case 5:
					Bh(d);
					break;
				case 4:
					zh();
					break;
				case 13:
					E(L);
					break;
				case 19:
					E(L);
					break;
				case 10:
					ah(d.type._context);
					break;
				case 22:
				case 23: Hj();
			}
			c = c.return;
		}
		Q = a;
		Y = a = Pg(a.current, null);
		Z = fj = b;
		T = 0;
		pk = null;
		rk = qk = rh = 0;
		tk = sk = null;
		if (null !== fh) {
			for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
				c.interleaved = null;
				var e = d.next, f = c.pending;
				if (null !== f) {
					var g = f.next;
					f.next = e;
					d.next = g;
				}
				c.pending = d;
			}
			fh = null;
		}
		return a;
	}
	function Mk(a, b) {
		do {
			var c = Y;
			try {
				$g();
				Fh.current = Rh;
				if (Ih) {
					for (var d = M.memoizedState; null !== d;) {
						var e = d.queue;
						null !== e && (e.pending = null);
						d = d.next;
					}
					Ih = !1;
				}
				Hh = 0;
				O = N = M = null;
				Jh = !1;
				Kh = 0;
				nk.current = null;
				if (null === c || null === c.return) {
					T = 1;
					pk = b;
					Y = null;
					break;
				}
				a: {
					var f = a, g = c.return, h = c, k = b;
					b = Z;
					h.flags |= 32768;
					if (null !== k && "object" === typeof k && "function" === typeof k.then) {
						var l = k, m = h, q = m.tag;
						if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
							var r = m.alternate;
							r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
						}
						var y = Ui(g);
						if (null !== y) {
							y.flags &= -257;
							Vi(y, g, h, f, b);
							y.mode & 1 && Si(f, l, b);
							b = y;
							k = l;
							var n = b.updateQueue;
							if (null === n) {
								var t = /* @__PURE__ */ new Set();
								t.add(k);
								b.updateQueue = t;
							} else n.add(k);
							break a;
						} else {
							if (0 === (b & 1)) {
								Si(f, l, b);
								tj();
								break a;
							}
							k = Error(p(426));
						}
					} else if (I && h.mode & 1) {
						var J = Ui(g);
						if (null !== J) {
							0 === (J.flags & 65536) && (J.flags |= 256);
							Vi(J, g, h, f, b);
							Jg(Ji(k, h));
							break a;
						}
					}
					f = k = Ji(k, h);
					4 !== T && (T = 2);
					null === sk ? sk = [f] : sk.push(f);
					f = g;
					do {
						switch (f.tag) {
							case 3:
								f.flags |= 65536;
								b &= -b;
								f.lanes |= b;
								var x = Ni(f, k, b);
								ph(f, x);
								break a;
							case 1:
								h = k;
								var w = f.type, u = f.stateNode;
								if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
									f.flags |= 65536;
									b &= -b;
									f.lanes |= b;
									var F = Qi(f, h, b);
									ph(f, F);
									break a;
								}
						}
						f = f.return;
					} while (null !== f);
				}
				Sk(c);
			} catch (na) {
				b = na;
				Y === c && null !== c && (Y = c = c.return);
				continue;
			}
			break;
		} while (1);
	}
	function Jk() {
		var a = mk.current;
		mk.current = Rh;
		return null === a ? Rh : a;
	}
	function tj() {
		if (0 === T || 3 === T || 2 === T) T = 4;
		null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
	}
	function Ik(a, b) {
		var c = K;
		K |= 2;
		var d = Jk();
		if (Q !== a || Z !== b) uk = null, Kk(a, b);
		do
			try {
				Tk();
				break;
			} catch (e) {
				Mk(a, e);
			}
		while (1);
		$g();
		K = c;
		mk.current = d;
		if (null !== Y) throw Error(p(261));
		Q = null;
		Z = 0;
		return T;
	}
	function Tk() {
		for (; null !== Y;) Uk(Y);
	}
	function Lk() {
		for (; null !== Y && !cc();) Uk(Y);
	}
	function Uk(a) {
		var b = Vk(a.alternate, a, fj);
		a.memoizedProps = a.pendingProps;
		null === b ? Sk(a) : Y = b;
		nk.current = null;
	}
	function Sk(a) {
		var b = a;
		do {
			var c = b.alternate;
			a = b.return;
			if (0 === (b.flags & 32768)) {
				if (c = Ej(c, b, fj), null !== c) {
					Y = c;
					return;
				}
			} else {
				c = Ij(c, b);
				if (null !== c) {
					c.flags &= 32767;
					Y = c;
					return;
				}
				if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
				else {
					T = 6;
					Y = null;
					return;
				}
			}
			b = b.sibling;
			if (null !== b) {
				Y = b;
				return;
			}
			Y = b = a;
		} while (null !== b);
		0 === T && (T = 5);
	}
	function Pk(a, b, c) {
		var d = C, e = ok.transition;
		try {
			ok.transition = null, C = 1, Wk(a, b, c, d);
		} finally {
			ok.transition = e, C = d;
		}
		return null;
	}
	function Wk(a, b, c, d) {
		do
			Hk();
		while (null !== wk);
		if (0 !== (K & 6)) throw Error(p(327));
		c = a.finishedWork;
		var e = a.finishedLanes;
		if (null === c) return null;
		a.finishedWork = null;
		a.finishedLanes = 0;
		if (c === a.current) throw Error(p(177));
		a.callbackNode = null;
		a.callbackPriority = 0;
		var f = c.lanes | c.childLanes;
		Bc(a, f);
		a === Q && (Y = Q = null, Z = 0);
		0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = !0, Fk(hc, function() {
			Hk();
			return null;
		}));
		f = 0 !== (c.flags & 15990);
		if (0 !== (c.subtreeFlags & 15990) || f) {
			f = ok.transition;
			ok.transition = null;
			var g = C;
			C = 1;
			var h = K;
			K |= 4;
			nk.current = null;
			Oj(a, c);
			dk(c, a);
			Oe(Df);
			dd = !!Cf;
			Df = Cf = null;
			a.current = c;
			hk(c, a, e);
			dc();
			K = h;
			C = g;
			ok.transition = f;
		} else a.current = c;
		vk && (vk = !1, wk = a, xk = e);
		f = a.pendingLanes;
		0 === f && (Ri = null);
		mc(c.stateNode, d);
		Dk(a, B());
		if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, {
			componentStack: e.stack,
			digest: e.digest
		});
		if (Oi) throw Oi = !1, a = Pi, Pi = null, a;
		0 !== (xk & 1) && 0 !== a.tag && Hk();
		f = a.pendingLanes;
		0 !== (f & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
		jg();
		return null;
	}
	function Hk() {
		if (null !== wk) {
			var a = Dc(xk), b = ok.transition, c = C;
			try {
				ok.transition = null;
				C = 16 > a ? 16 : a;
				if (null === wk) var d = !1;
				else {
					a = wk;
					wk = null;
					xk = 0;
					if (0 !== (K & 6)) throw Error(p(331));
					var e = K;
					K |= 4;
					for (V = a.current; null !== V;) {
						var f = V, g = f.child;
						if (0 !== (V.flags & 16)) {
							var h = f.deletions;
							if (null !== h) {
								for (var k = 0; k < h.length; k++) {
									var l = h[k];
									for (V = l; null !== V;) {
										var m = V;
										switch (m.tag) {
											case 0:
											case 11:
											case 15: Pj(8, m, f);
										}
										var q = m.child;
										if (null !== q) q.return = m, V = q;
										else for (; null !== V;) {
											m = V;
											var r = m.sibling, y = m.return;
											Sj(m);
											if (m === l) {
												V = null;
												break;
											}
											if (null !== r) {
												r.return = y;
												V = r;
												break;
											}
											V = y;
										}
									}
								}
								var n = f.alternate;
								if (null !== n) {
									var t = n.child;
									if (null !== t) {
										n.child = null;
										do {
											var J = t.sibling;
											t.sibling = null;
											t = J;
										} while (null !== t);
									}
								}
								V = f;
							}
						}
						if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;
						else b: for (; null !== V;) {
							f = V;
							if (0 !== (f.flags & 2048)) switch (f.tag) {
								case 0:
								case 11:
								case 15: Pj(9, f, f.return);
							}
							var x = f.sibling;
							if (null !== x) {
								x.return = f.return;
								V = x;
								break b;
							}
							V = f.return;
						}
					}
					var w = a.current;
					for (V = w; null !== V;) {
						g = V;
						var u = g.child;
						if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;
						else b: for (g = w; null !== V;) {
							h = V;
							if (0 !== (h.flags & 2048)) try {
								switch (h.tag) {
									case 0:
									case 11:
									case 15: Qj(9, h);
								}
							} catch (na) {
								W(h, h.return, na);
							}
							if (h === g) {
								V = null;
								break b;
							}
							var F = h.sibling;
							if (null !== F) {
								F.return = h.return;
								V = F;
								break b;
							}
							V = h.return;
						}
					}
					K = e;
					jg();
					if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
						lc.onPostCommitFiberRoot(kc, a);
					} catch (na) {}
					d = !0;
				}
				return d;
			} finally {
				C = c, ok.transition = b;
			}
		}
		return !1;
	}
	function Xk(a, b, c) {
		b = Ji(c, b);
		b = Ni(a, b, 1);
		a = nh(a, b, 1);
		b = R();
		null !== a && (Ac(a, 1, b), Dk(a, b));
	}
	function W(a, b, c) {
		if (3 === a.tag) Xk(a, a, c);
		else for (; null !== b;) {
			if (3 === b.tag) {
				Xk(b, a, c);
				break;
			} else if (1 === b.tag) {
				var d = b.stateNode;
				if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
					a = Ji(c, a);
					a = Qi(b, a, 1);
					b = nh(b, a, 1);
					a = R();
					null !== b && (Ac(b, 1, a), Dk(b, a));
					break;
				}
			}
			b = b.return;
		}
	}
	function Ti(a, b, c) {
		var d = a.pingCache;
		null !== d && d.delete(b);
		b = R();
		a.pingedLanes |= a.suspendedLanes & c;
		Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
		Dk(a, b);
	}
	function Yk(a, b) {
		0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
		var c = R();
		a = ih(a, b);
		null !== a && (Ac(a, b, c), Dk(a, c));
	}
	function uj(a) {
		var b = a.memoizedState, c = 0;
		null !== b && (c = b.retryLane);
		Yk(a, c);
	}
	function bk(a, b) {
		var c = 0;
		switch (a.tag) {
			case 13:
				var d = a.stateNode;
				var e = a.memoizedState;
				null !== e && (c = e.retryLane);
				break;
			case 19:
				d = a.stateNode;
				break;
			default: throw Error(p(314));
		}
		null !== d && d.delete(b);
		Yk(a, c);
	}
	var Vk = function(a, b, c) {
		if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = !0;
		else {
			if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = !1, yj(a, b, c);
			dh = 0 !== (a.flags & 131072) ? !0 : !1;
		}
		else dh = !1, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
		b.lanes = 0;
		switch (b.tag) {
			case 2:
				var d = b.type;
				ij(a, b);
				a = b.pendingProps;
				var e = Yf(b, H.current);
				ch(b, c);
				e = Nh(null, b, d, a, e, c);
				var f = Sh();
				b.flags |= 1;
				"object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = !0, cg(b)) : f = !1, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, !0, f, c)) : (b.tag = 0, I && f && vg(b), Xi(null, b, e, c), b = b.child);
				return b;
			case 16:
				d = b.elementType;
				a: {
					ij(a, b);
					a = b.pendingProps;
					e = d._init;
					d = e(d._payload);
					b.type = d;
					e = b.tag = Zk(d);
					a = Ci(d, a);
					switch (e) {
						case 0:
							b = cj(null, b, d, a, c);
							break a;
						case 1:
							b = hj(null, b, d, a, c);
							break a;
						case 11:
							b = Yi(null, b, d, a, c);
							break a;
						case 14:
							b = $i(null, b, d, Ci(d.type, a), c);
							break a;
					}
					throw Error(p(306, d, ""));
				}
				return b;
			case 0: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
			case 1: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
			case 3:
				a: {
					kj(b);
					if (null === a) throw Error(p(387));
					d = b.pendingProps;
					f = b.memoizedState;
					e = f.element;
					lh(a, b);
					qh(b, d, null, c);
					var g = b.memoizedState;
					d = g.element;
					if (f.isDehydrated) if (f = {
						element: d,
						isDehydrated: !1,
						cache: g.cache,
						pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
						transitions: g.transitions
					}, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
						e = Ji(Error(p(423)), b);
						b = lj(a, b, d, c, e);
						break a;
					} else if (d !== e) {
						e = Ji(Error(p(424)), b);
						b = lj(a, b, d, c, e);
						break a;
					} else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = !0, zg = null, c = Vg(b, null, d, c), b.child = c; c;) c.flags = c.flags & -3 | 4096, c = c.sibling;
					else {
						Ig();
						if (d === e) {
							b = Zi(a, b, c);
							break a;
						}
						Xi(a, b, d, c);
					}
					b = b.child;
				}
				return b;
			case 5: return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
			case 6: return null === a && Eg(b), null;
			case 13: return oj(a, b, c);
			case 4: return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
			case 11: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
			case 7: return Xi(a, b, b.pendingProps, c), b.child;
			case 8: return Xi(a, b, b.pendingProps.children, c), b.child;
			case 12: return Xi(a, b, b.pendingProps.children, c), b.child;
			case 10:
				a: {
					d = b.type._context;
					e = b.pendingProps;
					f = b.memoizedProps;
					g = e.value;
					G(Wg, d._currentValue);
					d._currentValue = g;
					if (null !== f) if (He(f.value, g)) {
						if (f.children === e.children && !Wf.current) {
							b = Zi(a, b, c);
							break a;
						}
					} else for (f = b.child, null !== f && (f.return = b); null !== f;) {
						var h = f.dependencies;
						if (null !== h) {
							g = f.child;
							for (var k = h.firstContext; null !== k;) {
								if (k.context === d) {
									if (1 === f.tag) {
										k = mh(-1, c & -c);
										k.tag = 2;
										var l = f.updateQueue;
										if (null !== l) {
											l = l.shared;
											var m = l.pending;
											null === m ? k.next = k : (k.next = m.next, m.next = k);
											l.pending = k;
										}
									}
									f.lanes |= c;
									k = f.alternate;
									null !== k && (k.lanes |= c);
									bh(f.return, c, b);
									h.lanes |= c;
									break;
								}
								k = k.next;
							}
						} else if (10 === f.tag) g = f.type === b.type ? null : f.child;
						else if (18 === f.tag) {
							g = f.return;
							if (null === g) throw Error(p(341));
							g.lanes |= c;
							h = g.alternate;
							null !== h && (h.lanes |= c);
							bh(g, c, b);
							g = f.sibling;
						} else g = f.child;
						if (null !== g) g.return = f;
						else for (g = f; null !== g;) {
							if (g === b) {
								g = null;
								break;
							}
							f = g.sibling;
							if (null !== f) {
								f.return = g.return;
								g = f;
								break;
							}
							g = g.return;
						}
						f = g;
					}
					Xi(a, b, e.children, c);
					b = b.child;
				}
				return b;
			case 9: return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
			case 14: return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
			case 15: return bj(a, b, b.type, b.pendingProps, c);
			case 17: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = !0, cg(b)) : a = !1, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, !0, a, c);
			case 19: return xj(a, b, c);
			case 22: return dj(a, b, c);
		}
		throw Error(p(156, b.tag));
	};
	function Fk(a, b) {
		return ac(a, b);
	}
	function $k(a, b, c, d) {
		this.tag = a;
		this.key = c;
		this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
		this.index = 0;
		this.ref = null;
		this.pendingProps = b;
		this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
		this.mode = d;
		this.subtreeFlags = this.flags = 0;
		this.deletions = null;
		this.childLanes = this.lanes = 0;
		this.alternate = null;
	}
	function Bg(a, b, c, d) {
		return new $k(a, b, c, d);
	}
	function aj(a) {
		a = a.prototype;
		return !(!a || !a.isReactComponent);
	}
	function Zk(a) {
		if ("function" === typeof a) return aj(a) ? 1 : 0;
		if (void 0 !== a && null !== a) {
			a = a.$$typeof;
			if (a === Da) return 11;
			if (a === Ga) return 14;
		}
		return 2;
	}
	function Pg(a, b) {
		var c = a.alternate;
		null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
		c.flags = a.flags & 14680064;
		c.childLanes = a.childLanes;
		c.lanes = a.lanes;
		c.child = a.child;
		c.memoizedProps = a.memoizedProps;
		c.memoizedState = a.memoizedState;
		c.updateQueue = a.updateQueue;
		b = a.dependencies;
		c.dependencies = null === b ? null : {
			lanes: b.lanes,
			firstContext: b.firstContext
		};
		c.sibling = a.sibling;
		c.index = a.index;
		c.ref = a.ref;
		return c;
	}
	function Rg(a, b, c, d, e, f) {
		var g = 2;
		d = a;
		if ("function" === typeof a) aj(a) && (g = 1);
		else if ("string" === typeof a) g = 5;
		else a: switch (a) {
			case ya: return Tg(c.children, e, f, b);
			case za:
				g = 8;
				e |= 8;
				break;
			case Aa: return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
			case Ea: return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
			case Fa: return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
			case Ia: return pj(c, e, f, b);
			default:
				if ("object" === typeof a && null !== a) switch (a.$$typeof) {
					case Ba:
						g = 10;
						break a;
					case Ca:
						g = 9;
						break a;
					case Da:
						g = 11;
						break a;
					case Ga:
						g = 14;
						break a;
					case Ha:
						g = 16;
						d = null;
						break a;
				}
				throw Error(p(130, null == a ? a : typeof a, ""));
		}
		b = Bg(g, c, b, e);
		b.elementType = a;
		b.type = d;
		b.lanes = f;
		return b;
	}
	function Tg(a, b, c, d) {
		a = Bg(7, a, d, b);
		a.lanes = c;
		return a;
	}
	function pj(a, b, c, d) {
		a = Bg(22, a, d, b);
		a.elementType = Ia;
		a.lanes = c;
		a.stateNode = { isHidden: !1 };
		return a;
	}
	function Qg(a, b, c) {
		a = Bg(6, a, null, b);
		a.lanes = c;
		return a;
	}
	function Sg(a, b, c) {
		b = Bg(4, null !== a.children ? a.children : [], a.key, b);
		b.lanes = c;
		b.stateNode = {
			containerInfo: a.containerInfo,
			pendingChildren: null,
			implementation: a.implementation
		};
		return b;
	}
	function al(a, b, c, d, e) {
		this.tag = b;
		this.containerInfo = a;
		this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
		this.timeoutHandle = -1;
		this.callbackNode = this.pendingContext = this.context = null;
		this.callbackPriority = 0;
		this.eventTimes = zc(0);
		this.expirationTimes = zc(-1);
		this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
		this.entanglements = zc(0);
		this.identifierPrefix = d;
		this.onRecoverableError = e;
		this.mutableSourceEagerHydrationData = null;
	}
	function bl(a, b, c, d, e, f, g, h, k) {
		a = new al(a, b, c, h, k);
		1 === b ? (b = 1, !0 === f && (b |= 8)) : b = 0;
		f = Bg(3, null, null, b);
		a.current = f;
		f.stateNode = a;
		f.memoizedState = {
			element: d,
			isDehydrated: c,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null
		};
		kh(f);
		return a;
	}
	function cl(a, b, c) {
		var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
		return {
			$$typeof: wa,
			key: null == d ? null : "" + d,
			children: a,
			containerInfo: b,
			implementation: c
		};
	}
	function dl(a) {
		if (!a) return Vf;
		a = a._reactInternals;
		a: {
			if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
			var b = a;
			do {
				switch (b.tag) {
					case 3:
						b = b.stateNode.context;
						break a;
					case 1: if (Zf(b.type)) {
						b = b.stateNode.__reactInternalMemoizedMergedChildContext;
						break a;
					}
				}
				b = b.return;
			} while (null !== b);
			throw Error(p(171));
		}
		if (1 === a.tag) {
			var c = a.type;
			if (Zf(c)) return bg(a, c, b);
		}
		return b;
	}
	function el(a, b, c, d, e, f, g, h, k) {
		a = bl(c, d, !0, a, e, f, g, h, k);
		a.context = dl(null);
		c = a.current;
		d = R();
		e = yi(c);
		f = mh(d, e);
		f.callback = void 0 !== b && null !== b ? b : null;
		nh(c, f, e);
		a.current.lanes = e;
		Ac(a, e, d);
		Dk(a, d);
		return a;
	}
	function fl(a, b, c, d) {
		var e = b.current, f = R(), g = yi(e);
		c = dl(c);
		null === b.context ? b.context = c : b.pendingContext = c;
		b = mh(f, g);
		b.payload = { element: a };
		d = void 0 === d ? null : d;
		null !== d && (b.callback = d);
		a = nh(e, b, g);
		null !== a && (gi(a, e, g, f), oh(a, e, g));
		return g;
	}
	function gl(a) {
		a = a.current;
		if (!a.child) return null;
		switch (a.child.tag) {
			case 5: return a.child.stateNode;
			default: return a.child.stateNode;
		}
	}
	function hl(a, b) {
		a = a.memoizedState;
		if (null !== a && null !== a.dehydrated) {
			var c = a.retryLane;
			a.retryLane = 0 !== c && c < b ? c : b;
		}
	}
	function il(a, b) {
		hl(a, b);
		(a = a.alternate) && hl(a, b);
	}
	function jl() {
		return null;
	}
	var kl = "function" === typeof reportError ? reportError : function(a) {
		console.error(a);
	};
	function ll(a) {
		this._internalRoot = a;
	}
	ml.prototype.render = ll.prototype.render = function(a) {
		var b = this._internalRoot;
		if (null === b) throw Error(p(409));
		fl(a, b, null, null);
	};
	ml.prototype.unmount = ll.prototype.unmount = function() {
		var a = this._internalRoot;
		if (null !== a) {
			this._internalRoot = null;
			var b = a.containerInfo;
			Rk(function() {
				fl(null, a, null, null);
			});
			b[uf] = null;
		}
	};
	function ml(a) {
		this._internalRoot = a;
	}
	ml.prototype.unstable_scheduleHydration = function(a) {
		if (a) {
			var b = Hc();
			a = {
				blockedOn: null,
				target: a,
				priority: b
			};
			for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++);
			Qc.splice(c, 0, a);
			0 === c && Vc(a);
		}
	};
	function nl(a) {
		return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
	}
	function ol(a) {
		return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
	}
	function pl() {}
	function ql(a, b, c, d, e) {
		if (e) {
			if ("function" === typeof d) {
				var f = d;
				d = function() {
					var a = gl(g);
					f.call(a);
				};
			}
			var g = el(b, d, a, 0, null, !1, !1, "", pl);
			a._reactRootContainer = g;
			a[uf] = g.current;
			sf(8 === a.nodeType ? a.parentNode : a);
			Rk();
			return g;
		}
		for (; e = a.lastChild;) a.removeChild(e);
		if ("function" === typeof d) {
			var h = d;
			d = function() {
				var a = gl(k);
				h.call(a);
			};
		}
		var k = bl(a, 0, !1, null, null, !1, !1, "", pl);
		a._reactRootContainer = k;
		a[uf] = k.current;
		sf(8 === a.nodeType ? a.parentNode : a);
		Rk(function() {
			fl(b, k, c, d);
		});
		return k;
	}
	function rl(a, b, c, d, e) {
		var f = c._reactRootContainer;
		if (f) {
			var g = f;
			if ("function" === typeof e) {
				var h = e;
				e = function() {
					var a = gl(g);
					h.call(a);
				};
			}
			fl(b, g, a, e);
		} else g = ql(c, b, a, e, d);
		return gl(g);
	}
	Ec = function(a) {
		switch (a.tag) {
			case 3:
				var b = a.stateNode;
				if (b.current.memoizedState.isDehydrated) {
					var c = tc(b.pendingLanes);
					0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
				}
				break;
			case 13: Rk(function() {
				var b = ih(a, 1);
				if (null !== b) gi(b, a, 1, R());
			}), il(a, 1);
		}
	};
	Fc = function(a) {
		if (13 === a.tag) {
			var b = ih(a, 134217728);
			if (null !== b) gi(b, a, 134217728, R());
			il(a, 134217728);
		}
	};
	Gc = function(a) {
		if (13 === a.tag) {
			var b = yi(a), c = ih(a, b);
			if (null !== c) gi(c, a, b, R());
			il(a, b);
		}
	};
	Hc = function() {
		return C;
	};
	Ic = function(a, b) {
		var c = C;
		try {
			return C = a, b();
		} finally {
			C = c;
		}
	};
	yb = function(a, b, c) {
		switch (b) {
			case "input":
				bb(a, c);
				b = c.name;
				if ("radio" === c.type && null != b) {
					for (c = a; c.parentNode;) c = c.parentNode;
					c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + "][type=\"radio\"]");
					for (b = 0; b < c.length; b++) {
						var d = c[b];
						if (d !== a && d.form === a.form) {
							var e = Db(d);
							if (!e) throw Error(p(90));
							Wa(d);
							bb(d, e);
						}
					}
				}
				break;
			case "textarea":
				ib(a, c);
				break;
			case "select": b = c.value, null != b && fb(a, !!c.multiple, b, !1);
		}
	};
	Gb = Qk;
	Hb = Rk;
	var sl = {
		usingClientEntryPoint: !1,
		Events: [
			Cb,
			ue,
			Db,
			Eb,
			Fb,
			Qk
		]
	}, tl = {
		findFiberByHostInstance: Wc,
		bundleType: 0,
		version: "18.3.1",
		rendererPackageName: "react-dom"
	};
	var ul = {
		bundleType: tl.bundleType,
		version: tl.version,
		rendererPackageName: tl.rendererPackageName,
		rendererConfig: tl.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: ua.ReactCurrentDispatcher,
		findHostInstanceByFiber: function(a) {
			a = Zb(a);
			return null === a ? null : a.stateNode;
		},
		findFiberByHostInstance: tl.findFiberByHostInstance || jl,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
	};
	if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
		var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!vl.isDisabled && vl.supportsFiber) try {
			kc = vl.inject(ul), lc = vl;
		} catch (a) {}
	}
	exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
	exports.createPortal = function(a, b) {
		var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
		if (!nl(b)) throw Error(p(200));
		return cl(a, b, null, c);
	};
	exports.createRoot = function(a, b) {
		if (!nl(a)) throw Error(p(299));
		var c = !1, d = "", e = kl;
		null !== b && void 0 !== b && (!0 === b.unstable_strictMode && (c = !0), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
		b = bl(a, 1, !1, null, null, c, !1, d, e);
		a[uf] = b.current;
		sf(8 === a.nodeType ? a.parentNode : a);
		return new ll(b);
	};
	exports.findDOMNode = function(a) {
		if (null == a) return null;
		if (1 === a.nodeType) return a;
		var b = a._reactInternals;
		if (void 0 === b) {
			if ("function" === typeof a.render) throw Error(p(188));
			a = Object.keys(a).join(",");
			throw Error(p(268, a));
		}
		a = Zb(b);
		a = null === a ? null : a.stateNode;
		return a;
	};
	exports.flushSync = function(a) {
		return Rk(a);
	};
	exports.hydrate = function(a, b, c) {
		if (!ol(b)) throw Error(p(200));
		return rl(null, a, b, !0, c);
	};
	exports.hydrateRoot = function(a, b, c) {
		if (!nl(a)) throw Error(p(405));
		var d = null != c && c.hydratedSources || null, e = !1, f = "", g = kl;
		null !== c && void 0 !== c && (!0 === c.unstable_strictMode && (e = !0), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
		b = el(b, null, a, 1, null != c ? c : null, e, !1, f, g);
		a[uf] = b.current;
		sf(a);
		if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(c, e);
		return new ml(b);
	};
	exports.render = function(a, b, c) {
		if (!ol(b)) throw Error(p(200));
		return rl(null, a, b, !1, c);
	};
	exports.unmountComponentAtNode = function(a) {
		if (!ol(a)) throw Error(p(40));
		return a._reactRootContainer ? (Rk(function() {
			rl(null, null, a, !1, function() {
				a._reactRootContainer = null;
				a[uf] = null;
			});
		}), !0) : !1;
	};
	exports.unstable_batchedUpdates = Qk;
	exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
		if (!ol(c)) throw Error(p(200));
		if (null == a || void 0 === a._reactInternals) throw Error(p(38));
		return rl(a, b, c, !1, d);
	};
	exports.version = "18.3.1-next-f1338f8080-20240426";
}));
//#endregion
//#region node_modules/react-dom/index.js
var require_react_dom = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function checkDCE() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
		} catch (err) {
			console.error(err);
		}
	}
	checkDCE();
	module.exports = require_react_dom_production_min();
}));
//#endregion
//#region node_modules/react-dom/client.js
var require_client = /* @__PURE__ */ __commonJSMin(((exports) => {
	var m = require_react_dom();
	exports.createRoot = m.createRoot;
	exports.hydrateRoot = m.hydrateRoot;
}));
//#endregion
//#region node_modules/idb/build/index.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_client = /* @__PURE__ */ __toESM(require_client(), 1);
var instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
var idbProxyableTypes;
var cursorAdvanceMethods;
function getIdbProxyableTypes() {
	return idbProxyableTypes || (idbProxyableTypes = [
		IDBDatabase,
		IDBObjectStore,
		IDBIndex,
		IDBCursor,
		IDBTransaction
	]);
}
function getCursorAdvanceMethods() {
	return cursorAdvanceMethods || (cursorAdvanceMethods = [
		IDBCursor.prototype.advance,
		IDBCursor.prototype.continue,
		IDBCursor.prototype.continuePrimaryKey
	]);
}
var transactionDoneMap = /* @__PURE__ */ new WeakMap();
var transformCache = /* @__PURE__ */ new WeakMap();
var reverseTransformCache = /* @__PURE__ */ new WeakMap();
function promisifyRequest(request) {
	const promise = new Promise((resolve, reject) => {
		const unlisten = () => {
			request.removeEventListener("success", success);
			request.removeEventListener("error", error);
		};
		const success = () => {
			resolve(wrap(request.result));
			unlisten();
		};
		const error = () => {
			reject(request.error);
			unlisten();
		};
		request.addEventListener("success", success);
		request.addEventListener("error", error);
	});
	reverseTransformCache.set(promise, request);
	return promise;
}
function cacheDonePromiseForTransaction(tx) {
	if (transactionDoneMap.has(tx)) return;
	const done = new Promise((resolve, reject) => {
		const unlisten = () => {
			tx.removeEventListener("complete", complete);
			tx.removeEventListener("error", error);
			tx.removeEventListener("abort", error);
		};
		const complete = () => {
			resolve();
			unlisten();
		};
		const error = () => {
			reject(tx.error || new DOMException("AbortError", "AbortError"));
			unlisten();
		};
		tx.addEventListener("complete", complete);
		tx.addEventListener("error", error);
		tx.addEventListener("abort", error);
	});
	transactionDoneMap.set(tx, done);
}
var idbProxyTraps = {
	get(target, prop, receiver) {
		if (target instanceof IDBTransaction) {
			if (prop === "done") return transactionDoneMap.get(target);
			if (prop === "store") return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
		}
		return wrap(target[prop]);
	},
	set(target, prop, value) {
		target[prop] = value;
		return true;
	},
	has(target, prop) {
		if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) return true;
		return prop in target;
	}
};
function replaceTraps(callback) {
	idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
	if (getCursorAdvanceMethods().includes(func)) return function(...args) {
		func.apply(unwrap(this), args);
		return wrap(this.request);
	};
	return function(...args) {
		return wrap(func.apply(unwrap(this), args));
	};
}
function transformCachableValue(value) {
	if (typeof value === "function") return wrapFunction(value);
	if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);
	if (instanceOfAny(value, getIdbProxyableTypes())) return new Proxy(value, idbProxyTraps);
	return value;
}
function wrap(value) {
	if (value instanceof IDBRequest) return promisifyRequest(value);
	if (transformCache.has(value)) return transformCache.get(value);
	const newValue = transformCachableValue(value);
	if (newValue !== value) {
		transformCache.set(value, newValue);
		reverseTransformCache.set(newValue, value);
	}
	return newValue;
}
var unwrap = (value) => reverseTransformCache.get(value);
/**
* Open a database.
*
* @param name Name of the database.
* @param version Schema version.
* @param callbacks Additional callbacks.
*/
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
	const request = indexedDB.open(name, version);
	const openPromise = wrap(request);
	if (upgrade) request.addEventListener("upgradeneeded", (event) => {
		upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
	});
	if (blocked) request.addEventListener("blocked", (event) => blocked(event.oldVersion, event.newVersion, event));
	openPromise.then((db) => {
		if (terminated) db.addEventListener("close", () => terminated());
		if (blocking) db.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
	}).catch(() => {});
	return openPromise;
}
var readMethods = [
	"get",
	"getKey",
	"getAll",
	"getAllKeys",
	"count"
];
var writeMethods = [
	"put",
	"add",
	"delete",
	"clear"
];
var cachedMethods = /* @__PURE__ */ new Map();
function getMethod(target, prop) {
	if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) return;
	if (cachedMethods.get(prop)) return cachedMethods.get(prop);
	const targetFuncName = prop.replace(/FromIndex$/, "");
	const useIndex = prop !== targetFuncName;
	const isWrite = writeMethods.includes(targetFuncName);
	if (!(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) return;
	const method = async function(storeName, ...args) {
		const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
		let target = tx.store;
		if (useIndex) target = target.index(args.shift());
		return (await Promise.all([target[targetFuncName](...args), isWrite && tx.done]))[0];
	};
	cachedMethods.set(prop, method);
	return method;
}
replaceTraps((oldTraps) => ({
	...oldTraps,
	get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
	has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
}));
var advanceMethodProps = [
	"continue",
	"continuePrimaryKey",
	"advance"
];
var methodMap = {};
var advanceResults = /* @__PURE__ */ new WeakMap();
var ittrProxiedCursorToOriginalProxy = /* @__PURE__ */ new WeakMap();
var cursorIteratorTraps = { get(target, prop) {
	if (!advanceMethodProps.includes(prop)) return target[prop];
	let cachedFunc = methodMap[prop];
	if (!cachedFunc) cachedFunc = methodMap[prop] = function(...args) {
		advanceResults.set(this, ittrProxiedCursorToOriginalProxy.get(this)[prop](...args));
	};
	return cachedFunc;
} };
async function* iterate(...args) {
	let cursor = this;
	if (!(cursor instanceof IDBCursor)) cursor = await cursor.openCursor(...args);
	if (!cursor) return;
	cursor = cursor;
	const proxiedCursor = new Proxy(cursor, cursorIteratorTraps);
	ittrProxiedCursorToOriginalProxy.set(proxiedCursor, cursor);
	reverseTransformCache.set(proxiedCursor, unwrap(cursor));
	while (cursor) {
		yield proxiedCursor;
		cursor = await (advanceResults.get(proxiedCursor) || cursor.continue());
		advanceResults.delete(proxiedCursor);
	}
}
function isIteratorProp(target, prop) {
	return prop === Symbol.asyncIterator && instanceOfAny(target, [
		IDBIndex,
		IDBObjectStore,
		IDBCursor
	]) || prop === "iterate" && instanceOfAny(target, [IDBIndex, IDBObjectStore]);
}
replaceTraps((oldTraps) => ({
	...oldTraps,
	get(target, prop, receiver) {
		if (isIteratorProp(target, prop)) return iterate;
		return oldTraps.get(target, prop, receiver);
	},
	has(target, prop) {
		return isIteratorProp(target, prop) || oldTraps.has(target, prop);
	}
}));
//#endregion
//#region src/services/idbStorage.js
var DB_NAME = "pwa-gallery";
var STORE_NAME = "photos";
var DB_VERSION = 2;
/** Singleton DB connection promise */
var dbPromise = null;
/** 
* Enforces tag consistency: trimmed, lowercase, unique.
* @param {string[]} tags 
* @returns {string[]}
*/
var _sanitizeTags = (tags) => Array.isArray(tags) ? [...new Set(tags.map((t) => t.trim().toLowerCase()).filter(Boolean))] : [];
/**
* Basic URL validation.
* @param {string} str 
* @returns {boolean}
*/
var _isValidUrl = (str) => {
	try {
		const url = new URL(str);
		return [
			"http:",
			"https:",
			"data:"
		].includes(url.protocol);
	} catch {
		return false;
	}
};
/**
* Opens (or returns cached) the IndexedDB database.
*/
function getDb() {
	if (!dbPromise) dbPromise = openDB(DB_NAME, DB_VERSION, { upgrade(db) {
		if (!db.objectStoreNames.contains(STORE_NAME)) {
			const store = db.createObjectStore(STORE_NAME, { keyPath: "id" });
			store.createIndex("idx_created_at", "created_at");
			store.createIndex("idx_is_favorite", "is_favorite");
			store.createIndex("idx_is_hidden", "is_hidden");
			store.createIndex("idx_tags", "tags", { multiEntry: true });
		}
	} });
	return dbPromise;
}
/**
* Helper to determine if a record matches current filters.
*/
function _matchesFilter(p, filter) {
	if (!filter) return true;
	if (filter.showHidden) return p.is_hidden;
	if (p.is_hidden) return false;
	if (filter.onlyFavorites && !p.is_favorite) return false;
	if (filter.tags?.length > 0 && !filter.tags.every((t) => p.tags.includes(t))) return false;
	if (filter.searchQuery && !p.url.toLowerCase().includes(filter.searchQuery.toLowerCase())) return false;
	return true;
}
/**
* Retrieves all photos, with an optional in-memory filter applied.
* DEPRECATED: Use getPhotosPage for large datasets.
*/
async function getAllPhotos(filter) {
	const db = await getDb();
	let all;
	try {
		all = await db.getAll(STORE_NAME);
	} catch (err) {
		throw new Error("Failed to load photos from IndexedDB.");
	}
	const sorted = all.sort((a, b) => b.created_at - a.created_at);
	if (!filter) return sorted;
	return sorted.filter((p) => _matchesFilter(p, filter));
}
/**
* Returns total count of photos matching a filter.
* Optimized via index if possible, otherwise cursor-based count.
*/
async function getPhotosCount(filter) {
	const db = await getDb();
	if (!filter || !filter.onlyFavorites && !filter.showHidden && !filter.tags?.length && !filter.searchQuery) {
		if (!filter?.showHidden) {}
		return await db.count(STORE_NAME);
	}
	let count = 0;
	let cursor = await db.transaction(STORE_NAME).store.openCursor();
	while (cursor) {
		if (_matchesFilter(cursor.value, filter)) count++;
		cursor = await cursor.continue();
	}
	return count;
}
/**
* Fetches a specific page of photos based on sort (reverse createdAt).
*/
async function getPhotosPage(offset, limit, filter) {
	const db = await getDb();
	const results = [];
	let skipped = 0;
	let cursor = await db.transaction(STORE_NAME).store.index("idx_created_at").openCursor(null, "prev");
	while (cursor && results.length < limit) {
		if (_matchesFilter(cursor.value, filter)) if (skipped >= offset) results.push(cursor.value);
		else skipped++;
		cursor = await cursor.continue();
	}
	return results;
}
/**
* Batch-inserts new photos from an array of raw URLs.
* Skips invalid URLs and duplicates already in the store.
*/
async function addPhotos(urls) {
	const db = await getDb();
	let inserted = 0;
	try {
		const existing = await db.getAll(STORE_NAME);
		const existingUrls = new Set(existing.map((p) => p.url));
		const tx = db.transaction(STORE_NAME, "readwrite");
		await Promise.all(urls.filter((url) => typeof url === "string" && _isValidUrl(url.trim()) && !existingUrls.has(url.trim())).map((url) => {
			const trimmedUrl = url.trim();
			const record = {
				id: crypto.randomUUID(),
				url: trimmedUrl,
				is_favorite: false,
				is_hidden: false,
				tags: [],
				created_at: Date.now()
			};
			inserted++;
			return tx.store.put(record);
		}));
		await tx.done;
		return inserted;
	} catch (err) {
		throw new Error("Failed to add photos to IndexedDB.");
	}
}
/**
* Applies a partial update to a single photo record using an atomic transaction.
*/
async function updatePhoto(id, updates) {
	const tx = (await getDb()).transaction(STORE_NAME, "readwrite");
	try {
		const existing = await tx.store.get(id);
		if (!existing) throw new Error(`Photo with id "${id}" not found.`);
		const finalUpdates = { ...updates };
		if (updates.tags) finalUpdates.tags = _sanitizeTags(updates.tags);
		const updated = {
			...existing,
			...finalUpdates,
			id
		};
		await tx.store.put(updated);
		await tx.done;
		return updated;
	} catch (err) {
		throw new Error(err.message || `Failed to update photo "${id}" in IndexedDB.`);
	}
}
/**
* Permanently removes a photo record by its ID.
*/
async function deletePhoto(id) {
	const db = await getDb();
	try {
		const tx = db.transaction(STORE_NAME, "readwrite");
		await tx.store.delete(id);
		await tx.done;
	} catch (err) {
		throw new Error(`Failed to delete photo "${id}" from IndexedDB.`);
	}
}
/**
* Imports a full JSON backup, replacing all existing data.
*/
async function importFromJson(records) {
	const db = await getDb();
	try {
		const tx = db.transaction(STORE_NAME, "readwrite");
		await tx.store.clear();
		await Promise.all(records.map((r) => {
			const sanitized = {
				...r,
				tags: _sanitizeTags(r.tags)
			};
			return tx.store.put(sanitized);
		}));
		await tx.done;
	} catch (err) {
		throw new Error("Failed to import JSON data into IndexedDB.");
	}
}
/**
* Retrieves all unique tags across all photos efficiently using the tags index.
*/
async function getUniqueTags() {
	const index = (await getDb()).transaction(STORE_NAME, "readonly").store.index("idx_tags");
	const tags = /* @__PURE__ */ new Set();
	let cursor = await index.openKeyCursor();
	while (cursor) {
		tags.add(cursor.key);
		cursor = await cursor.continue();
	}
	return Array.from(tags).sort();
}
//#endregion
//#region src/context/galleryReducer.js
var MAX_CACHE_SIZE = 2e3;
function galleryReducer(state, action) {
	switch (action.type) {
		case "LOAD_START": return {
			...state,
			loading: true,
			error: null
		};
		case "SET_TAGS": return {
			...state,
			availableTags: action.payload
		};
		case "SET_TOTAL_COUNT": return {
			...state,
			photos: {
				...state.photos,
				totalCount: action.payload
			}
		};
		case "APPEND_PAGE": {
			const newItems = { ...state.photos.items };
			let newCacheOrder = [...state.photos.cacheOrder || []];
			const startIndex = action.payload.offset;
			action.payload.items.forEach((item, i) => {
				const targetIndex = startIndex + i;
				if (!newItems[targetIndex]) newCacheOrder.push(targetIndex);
				newItems[targetIndex] = item;
			});
			while (newCacheOrder.length > MAX_CACHE_SIZE) {
				const indexToEvict = newCacheOrder.shift();
				delete newItems[indexToEvict];
			}
			return {
				...state,
				photos: {
					...state.photos,
					items: newItems,
					cacheOrder: newCacheOrder,
					totalCount: action.payload.totalCount ?? state.photos.totalCount
				},
				loading: false
			};
		}
		case "CLEAR_PHOTOS": return {
			...state,
			photos: {
				items: {},
				cacheOrder: [],
				totalCount: 0
			}
		};
		case "SET_PHOTOS": {
			const itemsMap = {};
			const newCacheOrder = [];
			action.payload.forEach((p, i) => {
				itemsMap[i] = p;
				newCacheOrder.push(i);
			});
			return {
				...state,
				photos: {
					items: itemsMap,
					cacheOrder: newCacheOrder,
					totalCount: action.payload.length
				},
				loading: false
			};
		}
		case "LOAD_ERROR": return {
			...state,
			loading: false,
			error: action.payload
		};
		case "DELETE_PHOTO": return {
			...state,
			photos: {
				items: {},
				totalCount: 0
			}
		};
		case "TOGGLE_FAVORITE":
			const updatedItemsFav = { ...state.photos.items };
			Object.keys(updatedItemsFav).forEach((idx) => {
				if (updatedItemsFav[idx].id === action.payload) updatedItemsFav[idx] = {
					...updatedItemsFav[idx],
					is_favorite: !updatedItemsFav[idx].is_favorite
				};
			});
			return {
				...state,
				photos: {
					...state.photos,
					items: updatedItemsFav
				}
			};
		case "TOGGLE_HIDDEN":
			const updatedItemsHidden = { ...state.photos.items };
			Object.keys(updatedItemsHidden).forEach((idx) => {
				if (updatedItemsHidden[idx].id === action.payload) updatedItemsHidden[idx] = {
					...updatedItemsHidden[idx],
					is_hidden: !updatedItemsHidden[idx].is_hidden
				};
			});
			return {
				...state,
				photos: {
					...state.photos,
					items: updatedItemsHidden
				}
			};
		case "UPDATE_PHOTO":
			const updatedItemsProp = { ...state.photos.items };
			Object.keys(updatedItemsProp).forEach((idx) => {
				if (updatedItemsProp[idx].id === action.payload.id) updatedItemsProp[idx] = {
					...updatedItemsProp[idx],
					...action.payload
				};
			});
			return {
				...state,
				photos: {
					...state.photos,
					items: updatedItemsProp
				}
			};
		case "SET_VIEW_MODE": return {
			...state,
			viewMode: action.payload
		};
		case "SET_FILTER": return {
			...state,
			filterOptions: {
				...state.filterOptions,
				...action.payload
			}
		};
		case "RESET_FILTERS": return {
			...state,
			filterOptions: {
				tags: [],
				onlyFavorites: false,
				searchQuery: "",
				showHidden: false
			}
		};
		default: return state;
	}
}
var Toast_module_default = {
	toastContainer: "_toastContainer_12c0y_1",
	toast: "_toast_12c0y_1",
	slideUp: "_slideUp_12c0y_1",
	error: "_error_12c0y_27",
	info: "_info_12c0y_32"
};
//#endregion
//#region node_modules/react/cjs/react-jsx-runtime.production.min.js
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_runtime_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
	var f = require_react(), k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function q(c, a, g) {
		var b, d = {}, e = null, h = null;
		void 0 !== g && (e = "" + g);
		void 0 !== a.key && (e = "" + a.key);
		void 0 !== a.ref && (h = a.ref);
		for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
		if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
		return {
			$$typeof: k,
			type: c,
			key: e,
			ref: h,
			props: d,
			_owner: n.current
		};
	}
	exports.Fragment = l;
	exports.jsx = q;
	exports.jsxs = q;
}));
//#endregion
//#region src/context/ToastContext.jsx
var import_jsx_runtime = (/* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_jsx_runtime_production_min();
})))();
var ToastContext = (0, import_react.createContext)(null);
function ToastProvider({ children }) {
	const [toasts, setToasts] = (0, import_react.useState)([]);
	const addToast = (0, import_react.useCallback)((message, type = "info", duration = 3e3) => {
		const id = crypto.randomUUID();
		setToasts((prev) => [...prev, {
			id,
			message,
			type
		}]);
		setTimeout(() => {
			setToasts((prev) => prev.filter((t) => t.id !== id));
		}, duration);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ToastContext.Provider, {
		value: { addToast },
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: Toast_module_default.toastContainer,
			children: toasts.map((toast) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `${Toast_module_default.toast} ${Toast_module_default[toast.type]}`,
				children: toast.message
			}, toast.id))
		})]
	});
}
function useToast() {
	const ctx = (0, import_react.useContext)(ToastContext);
	if (!ctx) throw new Error("useToast must be used within ToastProvider");
	return ctx;
}
//#endregion
//#region src/context/GalleryContext.jsx
var GalleryContext = (0, import_react.createContext)(null);
var initialState = {
	photos: {
		items: {},
		cacheOrder: [],
		totalCount: 0
	},
	availableTags: [],
	loading: false,
	error: null,
	viewMode: "GRID",
	filterOptions: {
		tags: [],
		onlyFavorites: false,
		searchQuery: "",
		showHidden: false
	}
};
/**
* GalleryProvider wraps the app, loads data on mount, and exposes helpers.
* Refactored for 1M+ photo support via chunked pagination.
*/
function GalleryProvider({ children }) {
	const [state, dispatch] = (0, import_react.useReducer)(galleryReducer, initialState);
	const { addToast } = useToast();
	const loadPage = (0, import_react.useCallback)(async (index, limit = 50) => {
		if (state.photos.items[index]) return;
		try {
			const offset = Math.floor(index / limit) * limit;
			dispatch({
				type: "APPEND_PAGE",
				payload: {
					offset,
					items: await getPhotosPage(offset, limit, state.filterOptions)
				}
			});
		} catch (err) {
			console.error("Failed to load page:", err);
		}
	}, [state.photos.items, state.filterOptions]);
	(0, import_react.useEffect)(() => {
		let isMounted = true;
		dispatch({ type: "LOAD_START" });
		dispatch({ type: "CLEAR_PHOTOS" });
		const init = async () => {
			try {
				const [count, tags] = await Promise.all([getPhotosCount(state.filterOptions), getUniqueTags()]);
				if (!isMounted) return;
				dispatch({
					type: "SET_TOTAL_COUNT",
					payload: count
				});
				dispatch({
					type: "SET_TAGS",
					payload: tags
				});
				const firstPage = await getPhotosPage(0, 100, state.filterOptions);
				if (!isMounted) return;
				dispatch({
					type: "APPEND_PAGE",
					payload: {
						offset: 0,
						items: firstPage,
						totalCount: count
					}
				});
			} catch (e) {
				if (!isMounted) return;
				dispatch({
					type: "LOAD_ERROR",
					payload: e.message
				});
				addToast(`Failed to load gallery: ${e.message}`, "error");
			}
		};
		init();
		return () => {
			isMounted = false;
		};
	}, [state.filterOptions, addToast]);
	const findPhoto = (0, import_react.useCallback)((id) => {
		return Object.values(state.photos?.items || {}).find((p) => p.id === id);
	}, [state.photos?.items]);
	const photosArray = (0, import_react.useMemo)(() => {
		const arr = new Array(state.photos?.totalCount || 0).fill(null);
		Object.entries(state.photos?.items || {}).forEach(([idx, item]) => {
			arr[idx] = item;
		});
		return arr;
	}, [state.photos?.items, state.photos?.totalCount]);
	const toggleFavorite = (0, import_react.useCallback)(async (id) => {
		const photo = findPhoto(id);
		if (!photo) return;
		dispatch({
			type: "TOGGLE_FAVORITE",
			payload: id
		});
		try {
			await updatePhoto(id, { is_favorite: !photo.is_favorite });
		} catch (err) {
			dispatch({
				type: "TOGGLE_FAVORITE",
				payload: id
			});
			addToast("Failed to update favorite status.", "error");
		}
	}, [findPhoto, addToast]);
	const toggleHidden = (0, import_react.useCallback)(async (id) => {
		const photo = findPhoto(id);
		if (!photo) return;
		dispatch({
			type: "TOGGLE_HIDDEN",
			payload: id
		});
		try {
			await updatePhoto(id, { is_hidden: !photo.is_hidden });
		} catch (err) {
			dispatch({
				type: "TOGGLE_HIDDEN",
				payload: id
			});
			addToast("Failed to update hidden status.", "error");
		}
	}, [findPhoto, addToast]);
	const addPhotos$1 = (0, import_react.useCallback)(async (urls) => {
		try {
			const inserted = await addPhotos(urls);
			const count = await getPhotosCount(state.filterOptions);
			dispatch({ type: "CLEAR_PHOTOS" });
			dispatch({
				type: "SET_TOTAL_COUNT",
				payload: count
			});
			addToast(`Added ${inserted} photos.`, "info");
		} catch (err) {
			addToast("Failed to add photos to storage.", "error");
		}
	}, [state.filterOptions, addToast]);
	const deletePhoto$1 = (0, import_react.useCallback)(async (id) => {
		if (!findPhoto(id)) return;
		dispatch({
			type: "DELETE_PHOTO",
			payload: id
		});
		try {
			await deletePhoto(id);
			addToast("Photo deleted successfully.", "info");
			dispatch({
				type: "SET_TOTAL_COUNT",
				payload: await getPhotosCount(state.filterOptions)
			});
		} catch (err) {
			addToast("Failed to delete photo.", "error");
		}
	}, [
		findPhoto,
		state.filterOptions,
		addToast
	]);
	const updatePhotoContext = (0, import_react.useCallback)(async (id, updates) => {
		const photo = findPhoto(id);
		if (!photo) return;
		dispatch({
			type: "UPDATE_PHOTO",
			payload: {
				id,
				...updates
			}
		});
		try {
			await updatePhoto(id, updates);
		} catch (err) {
			dispatch({
				type: "UPDATE_PHOTO",
				payload: photo
			});
			addToast("Failed to update photo properties.", "error");
		}
	}, [findPhoto, addToast]);
	const setViewMode = (0, import_react.useCallback)((mode) => {
		dispatch({
			type: "SET_VIEW_MODE",
			payload: mode
		});
	}, []);
	const setFilter = (0, import_react.useCallback)((filter) => {
		dispatch({
			type: "SET_FILTER",
			payload: filter
		});
	}, []);
	const resetFilters = (0, import_react.useCallback)(() => {
		dispatch({ type: "RESET_FILTERS" });
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		...state,
		totalCount: state.photos.totalCount,
		photosArray,
		loadPage,
		findPhoto,
		dispatch,
		toggleFavorite,
		toggleHidden,
		addPhotos: addPhotos$1,
		deletePhoto: deletePhoto$1,
		updatePhoto: updatePhotoContext,
		setViewMode,
		setFilter,
		resetFilters
	}), [
		state,
		photosArray,
		loadPage,
		findPhoto,
		toggleFavorite,
		toggleHidden,
		addPhotos$1,
		deletePhoto$1,
		updatePhotoContext,
		setViewMode,
		setFilter,
		resetFilters
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryContext.Provider, {
		value,
		children
	});
}
/** Hook for consuming context. Throws if used outside provider. */
function useGallery() {
	const ctx = (0, import_react.useContext)(GalleryContext);
	if (!ctx) throw new Error("useGallery must be used within GalleryProvider");
	return ctx;
}
//#endregion
//#region src/utils/tags.js
/**
* Normalizes a tag string: lowercased, trimmed, spaces replaced with hyphens.
* Fulfills REQ-TAG-NORMALIZE: Consistent tag representation.
* @param {string} raw
* @returns {string}
*/
function normalizeTag(raw) {
	return raw.toLowerCase().trim().replace(/\s+/g, "-");
}
var TagFilter_module_default = {
	tagFilter: "_tagFilter_1hj45_1",
	filterTag: "_filterTag_1hj45_8",
	active: "_active_1hj45_23"
};
//#endregion
//#region src/features/tags/TagFilter.jsx
/**
* Multi-select tag filter control shown in the Navbar.
* Derives available tags from the full photo list in context.
* Fulfills REQ-TAG-FILTER-UI: Interactive tag-based gallery filtering.
*/
function TagFilter() {
	const { availableTags = [], filterOptions, dispatch } = useGallery();
	const toggleTag = (tag) => {
		if (!filterOptions) {
			console.warn("TagFilter: filterOptions is undefined");
			return;
		}
		const current = filterOptions.tags || [];
		dispatch({
			type: "SET_FILTER",
			payload: { tags: current.includes(tag) ? current.filter((t) => t !== tag) : [...current, tag] }
		});
	};
	if (availableTags.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: TagFilter_module_default.tagFilter,
		children: availableTags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: `${TagFilter_module_default.filterTag} ${(filterOptions?.tags || []).includes(tag) ? TagFilter_module_default.active : ""}`,
			onClick: () => toggleTag(tag),
			"aria-pressed": (filterOptions?.tags || []).includes(tag),
			"aria-label": `Filter by tag: ${tag}`,
			children: tag
		}, tag))
	});
}
//#endregion
//#region src/utils/importExport.js
/**
* Validates a string as a recognizable http/https URL.
* Fulfills REQ-IMPORT-VALIDATE: Security check on inbound URLs.
* @param {string} raw
* @returns {boolean}
*/
function isValidImageUrl(raw) {
	try {
		const url = new URL(raw);
		return (url.protocol === "http:" || url.protocol === "https:") && url.pathname.length > 1;
	} catch {
		return false;
	}
}
/**
* Parses a raw text string into a list of validated, unique image URLs.
* Skips blank lines and malformed values silently.
* Fulfills REQ-IMPORT-PARSE: Raw text URL ingestion.
* @param {string} rawText
* @returns {{ valid: string[], skipped: number }}
*/
function parseUrlList(rawText) {
	const lines = rawText.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
	const valid = [];
	let skipped = 0;
	for (const line of lines) if (isValidImageUrl(line)) valid.push(line);
	else skipped++;
	return {
		valid,
		skipped
	};
}
/**
* Validates and parses a JSON string as an array of photo record objects.
* Performs structural validation on each record (id, url, tags, etc.).
* Applies normalizeTag() to all imported tags for consistency.
* Fulfills REQ-IMPORT-JSON: JSON backup file validation.
* @param {string} rawJson
* @returns {import('../services/idbStorage').PhotoRecord[]}
* @throws {Error} If JSON is invalid or missing required fields
*/
function parseJsonBackup(rawJson) {
	const parsed = JSON.parse(rawJson);
	if (!Array.isArray(parsed)) throw new Error("Backup file must be a JSON array.");
	return parsed.map((item, i) => {
		if (typeof item.id !== "string" || typeof item.url !== "string") throw new Error(`Record at index ${i} is missing required fields (id, url).`);
		return {
			id: item.id,
			url: item.url,
			is_favorite: Boolean(item.is_favorite ?? false),
			is_hidden: Boolean(item.is_hidden ?? false),
			tags: Array.isArray(item.tags) ? item.tags.map(normalizeTag) : [],
			created_at: typeof item.created_at === "number" ? item.created_at : Date.now()
		};
	});
}
/**
* Triggers a browser download of the full gallery state as a JSON file.
* CRITICAL: Revokes the object URL after click to prevent memory leaks.
* Fulfills REQ-EXPORT-JSON: Full data backup download.
* @param {import('../services/idbStorage').PhotoRecord[]} photos
*/
function downloadJsonExport(photos) {
	const json = JSON.stringify(photos, null, 2);
	const blob = new Blob([json], { type: "application/json" });
	const url = URL.createObjectURL(blob);
	const anchor = document.createElement("a");
	anchor.href = url;
	anchor.download = `pwa-gallery-backup-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`;
	document.body.appendChild(anchor);
	anchor.click();
	document.body.removeChild(anchor);
	URL.revokeObjectURL(url);
}
var ImportModal_module_default = {
	dialog: "_dialog_1ra9x_1",
	exportSection: "_exportSection_1ra9x_29",
	importSection: "_importSection_1ra9x_30",
	divider: "_divider_1ra9x_34",
	modeToggle: "_modeToggle_1ra9x_40",
	active: "_active_1ra9x_58",
	fileInput: "_fileInput_1ra9x_63",
	statusMsg: "_statusMsg_1ra9x_69",
	loadingMsg: "_loadingMsg_1ra9x_77",
	exportBtn: "_exportBtn_1ra9x_83",
	closeBtn: "_closeBtn_1ra9x_104",
	pasteContainer: "_pasteContainer_1ra9x_120",
	textArea: "_textArea_1ra9x_127",
	submitPasteBtn: "_submitPasteBtn_1ra9x_152"
};
//#endregion
//#region src/features/imports/ImportModal.jsx
/**
* Modal for importing photo URLs from a text file or restoring a JSON backup.
* Dispatches to context and delegates DB writes to StorageService.
* Fulfills REQ-UI-IMPORT: User-facing import interface.
* @param {{ onClose: () => void }} props
*/
function ImportModal({ onClose }) {
	const { dispatch, photos } = useGallery();
	const { addToast } = useToast();
	const [status, setStatus] = (0, import_react.useState)(null);
	const [mode, setMode] = (0, import_react.useState)("text");
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const [pastedText, setPastedText] = (0, import_react.useState)("");
	const processUrlText = async (rawText) => {
		setIsLoading(true);
		setStatus(null);
		try {
			const { valid, skipped } = parseUrlList(rawText);
			if (valid.length === 0 && skipped === 0) {
				setStatus("No URLs found to import.");
				setIsLoading(false);
				return;
			}
			if (valid.length >= 1e3) {
				let totalInserted = 0;
				const CHUNK_SIZE = 250;
				const processChunk = async (index) => {
					if (index >= valid.length) {
						try {
							dispatch({
								type: "SET_PHOTOS",
								payload: await getAllPhotos()
							});
							const msg = `Imported ${totalInserted} photos. Skipped ${skipped} invalid lines.`;
							setStatus(msg);
							addToast(msg, "info");
						} catch (err) {
							const msg = `Import failed: ${err instanceof Error ? err.message : "Unknown error"}`;
							setStatus(msg);
							addToast(msg, "error");
						}
						setIsLoading(false);
						return;
					}
					const chunk = valid.slice(index, index + CHUNK_SIZE);
					try {
						const inserted = await addPhotos(chunk);
						totalInserted += inserted;
						setStatus(`Importing... ${Math.min(index + chunk.length, valid.length)} / ${valid.length}`);
						requestAnimationFrame(() => processChunk(index + CHUNK_SIZE));
					} catch (err) {
						const msg = `Import failed: ${err instanceof Error ? err.message : "Unknown error"}`;
						setStatus(msg);
						addToast(msg, "error");
						setIsLoading(false);
					}
				};
				processChunk(0);
			} else {
				const inserted = await addPhotos(valid);
				dispatch({
					type: "SET_PHOTOS",
					payload: await getAllPhotos()
				});
				const msg = `Imported ${inserted} photos. Skipped ${skipped} invalid lines.`;
				setStatus(msg);
				addToast(msg, "info");
				setIsLoading(false);
			}
		} catch (err) {
			const msg = `Import failed: ${err instanceof Error ? err.message : "Unknown error"}`;
			setStatus(msg);
			addToast(msg, "error");
			setIsLoading(false);
		}
	};
	const handleFileImport = async (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		const rawText = await file.text();
		if (mode === "text") {
			await processUrlText(rawText);
			e.target.value = "";
		} else if (mode === "json") {
			setIsLoading(true);
			try {
				if (!window.confirm("This will replace ALL existing gallery data. Continue?")) {
					setIsLoading(false);
					e.target.value = "";
					return;
				}
				const records = parseJsonBackup(rawText);
				await importFromJson(records);
				dispatch({
					type: "SET_PHOTOS",
					payload: records
				});
				const msg = `Restored ${records.length} photos from backup.`;
				setStatus(msg);
				addToast(msg, "info");
			} catch (err) {
				const msg = `Import failed: ${err instanceof Error ? err.message : "Unknown error"}`;
				setStatus(msg);
				addToast(msg, "error");
			}
			setIsLoading(false);
			e.target.value = "";
		}
	};
	const handlePasteSubmit = async () => {
		if (!pastedText.trim()) {
			addToast("Please paste some URLs first.", "warning");
			return;
		}
		await processUrlText(pastedText);
		setPastedText("");
	};
	const handleExport = () => {
		try {
			downloadJsonExport(photos);
			addToast("Export downloaded successfully.", "info");
		} catch (err) {
			addToast("Export failed. Please try again.", "error");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dialog", {
		open: true,
		className: ImportModal_module_default.dialog,
		"aria-modal": "true",
		"aria-labelledby": "import-modal-title",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "import-modal-title",
				children: "Import / Export Photos"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: ImportModal_module_default.exportSection,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Export" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Download all gallery data as a JSON backup file." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleExport,
						className: ImportModal_module_default.exportBtn,
						disabled: photos.length === 0,
						children: "Export JSON Backup"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: ImportModal_module_default.divider }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: ImportModal_module_default.importSection,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Import" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: ImportModal_module_default.modeToggle,
						role: "group",
						"aria-label": "Import mode",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								id: "mode-text",
								onClick: () => setMode("text"),
								className: mode === "text" ? ImportModal_module_default.active : "",
								"aria-pressed": mode === "text",
								children: "Text File"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								id: "mode-paste",
								onClick: () => setMode("paste"),
								className: mode === "paste" ? ImportModal_module_default.active : "",
								"aria-pressed": mode === "paste",
								children: "Paste URLs"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								id: "mode-json",
								onClick: () => setMode("json"),
								className: mode === "json" ? ImportModal_module_default.active : "",
								"aria-pressed": mode === "json",
								children: "JSON Backup"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						mode === "text" && "Upload a .txt file with one image URL per line.",
						mode === "paste" && "Paste a list of image URLs (one per line) directly into the box below.",
						mode === "json" && "Upload a previously exported .json backup file. This will REPLACE all current data."
					] }),
					mode === "paste" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: ImportModal_module_default.pasteContainer,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: ImportModal_module_default.textArea,
							placeholder: "https://example.com/image1.jpg\nhttps://example.com/image2.jpg",
							value: pastedText,
							onChange: (e) => setPastedText(e.target.value),
							disabled: isLoading
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handlePasteSubmit,
							className: ImportModal_module_default.submitPasteBtn,
							disabled: isLoading || !pastedText.trim(),
							children: "Import Pasted URLs"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "file-import-input",
						type: "file",
						accept: mode === "text" ? ".txt" : ".json",
						onChange: handleFileImport,
						disabled: isLoading,
						className: ImportModal_module_default.fileInput
					}),
					isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: ImportModal_module_default.loadingMsg,
						children: "Importing, please wait…"
					}),
					status && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: ImportModal_module_default.statusMsg,
						children: status
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onClose,
				className: ImportModal_module_default.closeBtn,
				"aria-label": "Close import modal",
				children: "Close"
			})
		]
	});
}
var Navbar_module_default = {
	navbar: "_navbar_1n3cp_1",
	logo: "_logo_1n3cp_14",
	searchInput: "_searchInput_1n3cp_21",
	visibilityToggle: "_visibilityToggle_1n3cp_29",
	visibilityLabel: "_visibilityLabel_1n3cp_35",
	visibilitySelect: "_visibilitySelect_1n3cp_41",
	viewToggle: "_viewToggle_1n3cp_57",
	addBtn: "_addBtn_1n3cp_73"
};
//#endregion
//#region src/features/gallery/AddPhotoButton.jsx
function AddPhotoButton() {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: () => setIsOpen(true),
		className: Navbar_module_default.addBtn,
		"aria-label": "Add photos",
		children: "+ Add Photos"
	}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImportModal, { onClose: () => setIsOpen(false) })] });
}
//#endregion
//#region src/features/gallery/Navbar.jsx
/**
* Top navigation bar with search, filter, view toggle, and add photo actions.
* Fulfills REQ-UI-TOOLBAR: Primary user controls.
*/
function Navbar() {
	const { filterOptions = {}, viewMode, dispatch } = useGallery();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: Navbar_module_default.navbar,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: Navbar_module_default.logo,
				children: "PWA Gallery"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "search",
				placeholder: "Search by URL...",
				value: filterOptions.searchQuery || "",
				onChange: (e) => dispatch({
					type: "SET_FILTER",
					payload: { searchQuery: e.target.value }
				}),
				className: Navbar_module_default.searchInput,
				"aria-label": "Search photos by URL"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagFilter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: Navbar_module_default.visibilityToggle,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: Navbar_module_default.visibilityLabel,
					children: "Show:"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: filterOptions.showHidden ? "HIDDEN" : filterOptions.onlyFavorites ? "FAVORITES" : "ALL",
					onChange: (e) => {
						const val = e.target.value;
						dispatch({
							type: "SET_FILTER",
							payload: {
								showHidden: val === "HIDDEN",
								onlyFavorites: val === "FAVORITES"
							}
						});
					},
					className: Navbar_module_default.visibilitySelect,
					"aria-label": "Filter photos visibility",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "ALL",
							children: "All Photos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "FAVORITES",
							children: "Favorites Only"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "HIDDEN",
							children: "Hidden Only"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: Navbar_module_default.viewToggle,
				onClick: () => {
					const modes = [
						"GRID",
						"COVER_FLOW",
						"VERTICAL_FLOW"
					];
					dispatch({
						type: "SET_VIEW_MODE",
						payload: modes[(modes.indexOf(viewMode) + 1) % modes.length]
					});
				},
				"aria-label": "Switch gallery view mode",
				children: [
					viewMode === "GRID" && "⊞ Grid",
					viewMode === "COVER_FLOW" && "⟳ Cover Flow",
					viewMode === "VERTICAL_FLOW" && "⇳ Vertical Flow"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddPhotoButton, {})
		]
	});
}
//#endregion
//#region node_modules/react-window/dist/react-window.js
function xe(e) {
	let t = e;
	for (; t;) {
		if (t.dir) return t.dir === "rtl";
		t = t.parentElement;
	}
	return !1;
}
function ve(e, t) {
	const [s, r] = (0, import_react.useState)(t === "rtl");
	return (0, import_react.useLayoutEffect)(() => {
		e && (t || r(xe(e)));
	}, [t, e]), s;
}
var q = typeof window < "u" ? import_react.useLayoutEffect : import_react.useEffect;
function ie(e) {
	if (e !== void 0) switch (typeof e) {
		case "number": return e;
		case "string":
			if (e.endsWith("px")) return parseFloat(e);
			break;
	}
}
function be({ box: e, defaultHeight: t, defaultWidth: s, disabled: r, element: n, mode: o, style: i }) {
	const { styleHeight: f, styleWidth: l } = (0, import_react.useMemo)(() => ({
		styleHeight: ie(i?.height),
		styleWidth: ie(i?.width)
	}), [i?.height, i?.width]), [c, d] = (0, import_react.useState)({
		height: t,
		width: s
	}), a = r || o === "only-height" && f !== void 0 || o === "only-width" && l !== void 0 || f !== void 0 && l !== void 0;
	return q(() => {
		if (n === null || a) return;
		const h = new ResizeObserver((p) => {
			for (const I of p) {
				const { contentRect: u, target: w } = I;
				n === w && d((m) => m.height === u.height && m.width === u.width ? m : {
					height: u.height,
					width: u.width
				});
			}
		});
		return h.observe(n, { box: e }), () => {
			h?.unobserve(n);
		};
	}, [
		e,
		a,
		n,
		f,
		l
	]), (0, import_react.useMemo)(() => ({
		height: f ?? c.height,
		width: l ?? c.width
	}), [
		c,
		f,
		l
	]);
}
function ae(e) {
	const t = (0, import_react.useRef)(() => {
		throw new Error("Cannot call during render.");
	});
	return q(() => {
		t.current = e;
	}, [e]), (0, import_react.useCallback)((s) => t.current?.(s), [t]);
}
var U = null;
function Ie(e = !1) {
	if (U === null || e) {
		const t = document.createElement("div"), s = t.style;
		s.width = "50px", s.height = "50px", s.overflow = "scroll", s.direction = "rtl";
		const r = document.createElement("div"), n = r.style;
		return n.width = "100px", n.height = "100px", t.appendChild(r), document.body.appendChild(t), t.scrollLeft > 0 ? U = "positive-descending" : (t.scrollLeft = 1, t.scrollLeft === 0 ? U = "negative" : U = "positive-ascending"), document.body.removeChild(t), U;
	}
	return U;
}
function Z({ containerElement: e, direction: t, isRtl: s, scrollOffset: r }) {
	if (t === "horizontal" && s) switch (Ie()) {
		case "negative": return -r;
		case "positive-descending":
			if (e) {
				const { clientWidth: n, scrollLeft: o, scrollWidth: i } = e;
				return i - n - o;
			}
			break;
	}
	return r;
}
function L(e, t = "Assertion error") {
	if (!e) throw console.error(t), Error(t);
}
function Y(e, t) {
	if (e === t) return !0;
	if (!!e != !!t || (L(e !== void 0), L(t !== void 0), Object.keys(e).length !== Object.keys(t).length)) return !1;
	for (const s in e) if (!Object.is(t[s], e[s])) return !1;
	return !0;
}
function fe({ cachedBounds: e, itemCount: t, itemSize: s }) {
	if (t === 0) return 0;
	if (typeof s == "number") return t * s;
	{
		const r = e.get(e.size === 0 ? 0 : e.size - 1);
		L(r !== void 0, "Unexpected bounds cache miss");
		return t * ((r.scrollOffset + r.size) / e.size);
	}
}
function we({ align: e, cachedBounds: t, index: s, itemCount: r, itemSize: n, containerScrollOffset: o, containerSize: i }) {
	if (s < 0 || s >= r) throw RangeError(`Invalid index specified: ${s}`, { cause: `Index ${s} is not within the range of 0 - ${r - 1}` });
	const f = fe({
		cachedBounds: t,
		itemCount: r,
		itemSize: n
	}), l = t.get(s), c = Math.max(0, Math.min(f - i, l.scrollOffset)), d = Math.max(0, l.scrollOffset - i + l.size);
	switch (e === "smart" && (o >= d && o <= c ? e = "auto" : e = "center"), e) {
		case "start": return c;
		case "end": return d;
		case "center": return l.scrollOffset <= i / 2 ? 0 : l.scrollOffset + l.size / 2 >= f - i / 2 ? f - i : l.scrollOffset + l.size / 2 - i / 2;
		default: return o >= d && o <= c ? o : o < d ? d : c;
	}
}
function P({ cachedBounds: e, containerScrollOffset: t, containerSize: s, itemCount: r, overscanCount: n }) {
	const o = r - 1;
	let i = 0, f = -1, l = 0, c = -1, d = 0;
	for (; d < o;) {
		const a = e.get(d);
		if (a.scrollOffset + a.size > t) break;
		d++;
	}
	for (i = d, l = Math.max(0, i - n); d < o;) {
		const a = e.get(d);
		if (a.scrollOffset + a.size >= t + s) break;
		d++;
	}
	return f = Math.min(o, d), c = Math.min(r - 1, f + n), i < 0 && (i = 0, f = -1, l = 0, c = -1), {
		startIndexVisible: i,
		stopIndexVisible: f,
		startIndexOverscan: l,
		stopIndexOverscan: c
	};
}
function me({ itemCount: e, itemProps: t, itemSize: s }) {
	const r = /* @__PURE__ */ new Map();
	return {
		get(n) {
			for (L(n < e, `Invalid index ${n}`); r.size - 1 < n;) {
				const i = r.size;
				let f;
				switch (typeof s) {
					case "function":
						f = s(i, t);
						break;
					case "number":
						f = s;
						break;
				}
				if (i === 0) r.set(i, {
					size: f,
					scrollOffset: 0
				});
				else {
					const l = r.get(i - 1);
					L(l !== void 0, `Unexpected bounds cache miss for index ${n}`), r.set(i, {
						scrollOffset: l.scrollOffset + l.size,
						size: f
					});
				}
			}
			const o = r.get(n);
			return L(o !== void 0, `Unexpected bounds cache miss for index ${n}`), o;
		},
		set(n, o) {
			r.set(n, o);
		},
		get size() {
			return r.size;
		}
	};
}
function Oe({ itemCount: e, itemProps: t, itemSize: s }) {
	return (0, import_react.useMemo)(() => me({
		itemCount: e,
		itemProps: t,
		itemSize: s
	}), [
		e,
		t,
		s
	]);
}
function ye({ containerSize: e, itemSize: t }) {
	let s;
	switch (typeof t) {
		case "string":
			L(t.endsWith("%"), `Invalid item size: "${t}"; string values must be percentages (e.g. "100%")`), L(e !== void 0, "Container size must be defined if a percentage item size is specified"), s = e * parseInt(t) / 100;
			break;
		default:
			s = t;
			break;
	}
	return s;
}
function te({ containerElement: e, containerStyle: t, defaultContainerSize: s = 0, direction: r, isRtl: n = !1, itemCount: o, itemProps: i, itemSize: f, onResize: l, overscanCount: c }) {
	const { height: d = s, width: a = s } = be({
		defaultHeight: r === "vertical" ? s : void 0,
		defaultWidth: r === "horizontal" ? s : void 0,
		element: e,
		mode: r === "vertical" ? "only-height" : "only-width",
		style: t
	}), h = (0, import_react.useRef)({
		height: 0,
		width: 0
	}), p = r === "vertical" ? d : a, I = ye({
		containerSize: p,
		itemSize: f
	});
	(0, import_react.useLayoutEffect)(() => {
		if (typeof l == "function") {
			const g = h.current;
			(g.height !== d || g.width !== a) && (l({
				height: d,
				width: a
			}, { ...g }), g.height = d, g.width = a);
		}
	}, [
		d,
		l,
		a
	]);
	const u = Oe({
		itemCount: o,
		itemProps: i,
		itemSize: I
	}), w = (0, import_react.useCallback)((g) => u.get(g), [u]), [m, O] = (0, import_react.useState)(() => P({
		cachedBounds: u,
		containerScrollOffset: 0,
		containerSize: p,
		itemCount: o,
		overscanCount: c
	})), { startIndexVisible: G, startIndexOverscan: x, stopIndexVisible: F, stopIndexOverscan: V } = {
		startIndexVisible: Math.min(o - 1, m.startIndexVisible),
		startIndexOverscan: Math.min(o - 1, m.startIndexOverscan),
		stopIndexVisible: Math.min(o - 1, m.stopIndexVisible),
		stopIndexOverscan: Math.min(o - 1, m.stopIndexOverscan)
	}, z = (0, import_react.useCallback)(() => fe({
		cachedBounds: u,
		itemCount: o,
		itemSize: I
	}), [
		u,
		o,
		I
	]), $ = (0, import_react.useCallback)((g) => {
		return P({
			cachedBounds: u,
			containerScrollOffset: Z({
				containerElement: e,
				direction: r,
				isRtl: n,
				scrollOffset: g
			}),
			containerSize: p,
			itemCount: o,
			overscanCount: c
		});
	}, [
		u,
		e,
		p,
		r,
		n,
		o,
		c
	]);
	q(() => {
		O($((r === "vertical" ? e?.scrollTop : e?.scrollLeft) ?? 0));
	}, [
		e,
		r,
		$
	]), q(() => {
		if (!e) return;
		const g = () => {
			O((S) => {
				const { scrollLeft: E, scrollTop: b } = e, R = P({
					cachedBounds: u,
					containerScrollOffset: Z({
						containerElement: e,
						direction: r,
						isRtl: n,
						scrollOffset: r === "vertical" ? b : E
					}),
					containerSize: p,
					itemCount: o,
					overscanCount: c
				});
				return Y(R, S) ? S : R;
			});
		};
		return e.addEventListener("scroll", g), () => {
			e.removeEventListener("scroll", g);
		};
	}, [
		u,
		e,
		p,
		r,
		o,
		c
	]);
	return {
		getCellBounds: w,
		getEstimatedSize: z,
		scrollToIndex: ae(({ align: g = "auto", containerScrollOffset: S, index: E }) => {
			let b = we({
				align: g,
				cachedBounds: u,
				containerScrollOffset: S,
				containerSize: p,
				index: E,
				itemCount: o,
				itemSize: I
			});
			if (e) {
				if (b = Z({
					containerElement: e,
					direction: r,
					isRtl: n,
					scrollOffset: b
				}), typeof e.scrollTo != "function") {
					const v = $(b);
					Y(m, v) || O(v);
				}
				return b;
			}
		}),
		startIndexOverscan: x,
		startIndexVisible: G,
		stopIndexOverscan: V,
		stopIndexVisible: F
	};
}
function de(e) {
	return (0, import_react.useMemo)(() => e, Object.values(e));
}
function ue(e, t) {
	const { ariaAttributes: s, style: r, ...n } = e, { ariaAttributes: o, style: i, ...f } = t;
	return Y(s, o) && Y(r, i) && Y(n, f);
}
function Ee({ cellComponent: e, cellProps: t, children: s, className: r, columnCount: n, columnWidth: o, defaultHeight: i = 0, defaultWidth: f = 0, dir: l, gridRef: c, onCellsRendered: d, onResize: a, overscanCount: h = 3, rowCount: p, rowHeight: I, style: u, tagName: w = "div", ...m }) {
	const O = de(t), G = (0, import_react.useMemo)(() => (0, import_react.memo)(e, ue), [e]), [x, F] = (0, import_react.useState)(null), V = ve(x, l), { getCellBounds: z, getEstimatedSize: $, startIndexOverscan: y, startIndexVisible: g, scrollToIndex: S, stopIndexOverscan: E, stopIndexVisible: b } = te({
		containerElement: x,
		containerStyle: u,
		defaultContainerSize: f,
		direction: "horizontal",
		isRtl: V,
		itemCount: n,
		itemProps: O,
		itemSize: o,
		onResize: a,
		overscanCount: h
	}), { getCellBounds: v, getEstimatedSize: R, startIndexOverscan: k, startIndexVisible: ne, scrollToIndex: Q, stopIndexOverscan: _, stopIndexVisible: oe } = te({
		containerElement: x,
		containerStyle: u,
		defaultContainerSize: i,
		direction: "vertical",
		itemCount: p,
		itemProps: O,
		itemSize: I,
		onResize: a,
		overscanCount: h
	});
	(0, import_react.useImperativeHandle)(c, () => ({
		get element() {
			return x;
		},
		scrollToCell({ behavior: H = "auto", columnAlign: T = "auto", columnIndex: W, rowAlign: B = "auto", rowIndex: j }) {
			const N = S({
				align: T,
				containerScrollOffset: x?.scrollLeft ?? 0,
				index: W
			}), ge = Q({
				align: B,
				containerScrollOffset: x?.scrollTop ?? 0,
				index: j
			});
			typeof x?.scrollTo == "function" && x.scrollTo({
				behavior: H,
				left: N,
				top: ge
			});
		},
		scrollToColumn({ align: H = "auto", behavior: T = "auto", index: W }) {
			const B = S({
				align: H,
				containerScrollOffset: x?.scrollLeft ?? 0,
				index: W
			});
			typeof x?.scrollTo == "function" && x.scrollTo({
				behavior: T,
				left: B
			});
		},
		scrollToRow({ align: H = "auto", behavior: T = "auto", index: W }) {
			const B = Q({
				align: H,
				containerScrollOffset: x?.scrollTop ?? 0,
				index: W
			});
			typeof x?.scrollTo == "function" && x.scrollTo({
				behavior: T,
				top: B
			});
		}
	}), [
		x,
		S,
		Q
	]), (0, import_react.useEffect)(() => {
		y >= 0 && E >= 0 && k >= 0 && _ >= 0 && d && d({
			columnStartIndex: g,
			columnStopIndex: b,
			rowStartIndex: ne,
			rowStopIndex: oe
		}, {
			columnStartIndex: y,
			columnStopIndex: E,
			rowStartIndex: k,
			rowStopIndex: _
		});
	}, [
		d,
		y,
		g,
		E,
		b,
		k,
		ne,
		_,
		oe
	]);
	const he = (0, import_react.useMemo)(() => {
		const H = [];
		if (n > 0 && p > 0) for (let T = k; T <= _; T++) {
			const W = v(T), B = [];
			for (let j = y; j <= E; j++) {
				const N = z(j);
				B.push(/* @__PURE__ */ (0, import_react.createElement)(G, {
					...O,
					ariaAttributes: {
						"aria-colindex": j + 1,
						role: "gridcell"
					},
					columnIndex: j,
					key: j,
					rowIndex: T,
					style: {
						position: "absolute",
						left: V ? void 0 : 0,
						right: V ? 0 : void 0,
						transform: `translate(${V ? -N.scrollOffset : N.scrollOffset}px, ${W.scrollOffset}px)`,
						height: W.size,
						width: N.size
					}
				}));
			}
			H.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				role: "row",
				"aria-rowindex": T + 1,
				children: B
			}, T));
		}
		return H;
	}, [
		G,
		O,
		n,
		y,
		E,
		z,
		v,
		V,
		p,
		k,
		_
	]), pe = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": !0,
		style: {
			height: R(),
			width: $(),
			zIndex: -1
		}
	});
	return (0, import_react.createElement)(w, {
		"aria-colcount": n,
		"aria-rowcount": p,
		role: "grid",
		...m,
		className: r,
		dir: l,
		ref: F,
		style: {
			position: "relative",
			maxHeight: "100%",
			maxWidth: "100%",
			flexGrow: 1,
			overflow: "auto",
			...u
		}
	}, he, s, pe);
}
//#endregion
//#region node_modules/react-window-infinite-loader/dist/react-window-infinite-loader.js
function g$1({ isRowLoaded: d, minimumBatchSize: o, rowCount: a, startIndex: x, stopIndex: i }) {
	const n = [];
	let r = -1, t = -1;
	for (let e = x; e <= i; e++) d(e) ? t >= 0 && (n.push({
		startIndex: r,
		stopIndex: t
	}), r = t = -1) : (t = e, r < 0 && (r = e));
	if (t >= 0) {
		const e = Math.min(Math.max(t, r + o - 1), a - 1);
		for (let s = t + 1; s <= e && !d(s); s++) t = s;
		n.push({
			startIndex: r,
			stopIndex: t
		});
	}
	if (n.length) {
		const e = n[0];
		for (; e.stopIndex - e.startIndex + 1 < o && e.startIndex > 0;) {
			const s = e.startIndex - 1;
			if (!d(s)) e.startIndex = s;
			else break;
		}
	}
	return n;
}
function S({ isRowLoaded: d, loadMoreRows: o, minimumBatchSize: a = 10, rowCount: x, threshold: i = 15 }) {
	const n = (0, import_react.useMemo)(() => /* @__PURE__ */ new Set(), [d, o]), r = (0, import_react.useCallback)((e) => d(e) ? !0 : n.has(e), [d, n]);
	return (0, import_react.useCallback)(({ startIndex: e, stopIndex: s }) => {
		const f = g$1({
			isRowLoaded: r,
			minimumBatchSize: a,
			rowCount: x,
			startIndex: Math.max(0, e - i),
			stopIndex: Math.min(x - 1, s + i)
		});
		for (let I = 0; I < f.length; I += 2) {
			const { startIndex: u, stopIndex: l } = f[I];
			for (let c = u; c <= l; c++) n.add(c);
			o(u, l);
		}
	}, [
		r,
		o,
		a,
		n,
		x,
		i
	]);
}
//#endregion
//#region node_modules/react-use-measure/dist/index.js
function g(n, t) {
	let o;
	return (...i) => {
		window.clearTimeout(o), o = window.setTimeout(() => n(...i), t);
	};
}
function j({ debounce: n, scroll: t, polyfill: o, offsetSize: i } = {
	debounce: 0,
	scroll: !1,
	offsetSize: !1
}) {
	const a = o || (typeof window == "undefined" ? class {} : window.ResizeObserver);
	if (!a) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
	const [c, h] = (0, import_react.useState)({
		left: 0,
		top: 0,
		width: 0,
		height: 0,
		bottom: 0,
		right: 0,
		x: 0,
		y: 0
	}), e = (0, import_react.useRef)({
		element: null,
		scrollContainers: null,
		resizeObserver: null,
		lastBounds: c,
		orientationHandler: null
	}), d = n ? typeof n == "number" ? n : n.scroll : null, f = n ? typeof n == "number" ? n : n.resize : null, w = (0, import_react.useRef)(!1);
	(0, import_react.useEffect)(() => (w.current = !0, () => void (w.current = !1)));
	const [z, m, s] = (0, import_react.useMemo)(() => {
		const r = () => {
			if (!e.current.element) return;
			const { left: y, top: C, width: H, height: O, bottom: S, right: x, x: B, y: R } = e.current.element.getBoundingClientRect(), l = {
				left: y,
				top: C,
				width: H,
				height: O,
				bottom: S,
				right: x,
				x: B,
				y: R
			};
			e.current.element instanceof HTMLElement && i && (l.height = e.current.element.offsetHeight, l.width = e.current.element.offsetWidth), Object.freeze(l), w.current && !D(e.current.lastBounds, l) && h(e.current.lastBounds = l);
		};
		return [
			r,
			f ? g(r, f) : r,
			d ? g(r, d) : r
		];
	}, [
		h,
		i,
		d,
		f
	]);
	function v() {
		e.current.scrollContainers && (e.current.scrollContainers.forEach((r) => r.removeEventListener("scroll", s, !0)), e.current.scrollContainers = null), e.current.resizeObserver && (e.current.resizeObserver.disconnect(), e.current.resizeObserver = null), e.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", e.current.orientationHandler));
	}
	function b() {
		e.current.element && (e.current.resizeObserver = new a(s), e.current.resizeObserver.observe(e.current.element), t && e.current.scrollContainers && e.current.scrollContainers.forEach((r) => r.addEventListener("scroll", s, {
			capture: !0,
			passive: !0
		})), e.current.orientationHandler = () => {
			s();
		}, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", e.current.orientationHandler));
	}
	const L = (r) => {
		!r || r === e.current.element || (v(), e.current.element = r, e.current.scrollContainers = E(r), b());
	};
	return X(s, !!t), W(m), (0, import_react.useEffect)(() => {
		v(), b();
	}, [
		t,
		s,
		m
	]), (0, import_react.useEffect)(() => v, []), [
		L,
		c,
		z
	];
}
function W(n) {
	(0, import_react.useEffect)(() => {
		const t = n;
		return window.addEventListener("resize", t), () => void window.removeEventListener("resize", t);
	}, [n]);
}
function X(n, t) {
	(0, import_react.useEffect)(() => {
		if (t) {
			const o = n;
			return window.addEventListener("scroll", o, {
				capture: !0,
				passive: !0
			}), () => void window.removeEventListener("scroll", o, !0);
		}
	}, [n, t]);
}
function E(n) {
	const t = [];
	if (!n || n === document.body) return t;
	const { overflow: o, overflowX: i, overflowY: a } = window.getComputedStyle(n);
	return [
		o,
		i,
		a
	].some((c) => c === "auto" || c === "scroll") && t.push(n), [...t, ...E(n.parentElement)];
}
var k = [
	"x",
	"y",
	"top",
	"bottom",
	"left",
	"right",
	"width",
	"height"
], D = (n, t) => k.every((o) => n[o] === t[o]);
//#endregion
//#region src/features/tags/TagManager.module.css
var import_react_dom = require_react_dom();
var TagManager_module_default = {
	tagManager: "_tagManager_dclvq_1",
	tagList: "_tagList_dclvq_7",
	tagBadge: "_tagBadge_dclvq_13",
	removeBtn: "_removeBtn_dclvq_24",
	tagInput: "_tagInput_dclvq_42"
};
//#endregion
//#region src/features/tags/TagManager.jsx
/**
* Inline tag editor shown inside PhotoModal.
* Reads and writes via context — does NOT accept an onUpdate callback prop.
* Fulfills REQ-TAG-CRUD: Add, remove, display tags for a specific photo.
* @param {{ photo: any }} props
*/
function TagManager({ photo }) {
	const { dispatch } = useGallery();
	const [inputValue, setInputValue] = (0, import_react.useState)("");
	const handleAddTag = (e) => {
		if (e.key !== "Enter") return;
		const tag = normalizeTag(inputValue);
		const tags = photo.tags || [];
		if (!tag || tags.includes(tag)) return;
		const updatedTags = [...tags, tag];
		dispatch({
			type: "UPDATE_PHOTO",
			payload: {
				...photo,
				tags: updatedTags
			}
		});
		updatePhoto(photo.id, { tags: updatedTags });
		setInputValue("");
	};
	const handleRemoveTag = (tagToRemove) => {
		const updatedTags = (photo.tags || []).filter((t) => t !== tagToRemove);
		dispatch({
			type: "UPDATE_PHOTO",
			payload: {
				...photo,
				tags: updatedTags
			}
		});
		updatePhoto(photo.id, { tags: updatedTags });
	};
	const tags = photo.tags || [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: TagManager_module_default.tagManager,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: TagManager_module_default.tagList,
			children: tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: TagManager_module_default.tagBadge,
				children: [tag, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => handleRemoveTag(tag),
					"aria-label": `Remove tag ${tag}`,
					className: TagManager_module_default.removeBtn,
					children: "×"
				})]
			}, tag))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "text",
			value: inputValue,
			onChange: (e) => setInputValue(e.target.value),
			onKeyDown: handleAddTag,
			placeholder: "Add tag, press Enter...",
			className: TagManager_module_default.tagInput,
			maxLength: 50
		})]
	});
}
var PhotoModal_module_default = {
	dialog: "_dialog_1ftzu_1",
	closeBtn: "_closeBtn_1ftzu_22",
	largeImage: "_largeImage_1ftzu_42",
	meta: "_meta_1ftzu_50",
	url: "_url_1ftzu_56",
	actions: "_actions_1ftzu_62",
	deleteBtn: "_deleteBtn_1ftzu_81"
};
//#endregion
//#region src/features/gallery/PhotoModal.jsx
/**
* Full detail photo editor rendered as a native <dialog> via React Portal.
* Fulfills REQ-UI-MODAL: Metadata editing and state controls.
* Uses native <dialog> for built-in focus trapping and ESC-to-close behaviour.
* @param {{ photo: import('../../services/idbStorage').PhotoRecord, onClose: () => void }} props
*/
function PhotoModal({ photo, onClose }) {
	const { toggleFavorite, toggleHidden, deletePhoto } = useGallery();
	const dialogRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const dialog = dialogRef.current;
		dialog?.showModal();
		document.body.style.overflow = "hidden";
		return () => {
			dialog?.close();
			document.body.style.overflow = "";
		};
	}, []);
	const handleToggleHidden = () => {
		toggleHidden(photo.id);
	};
	const handleDelete = () => {
		if (window.confirm("Permanently remove this photo from your gallery?")) {
			deletePhoto(photo.id);
			onClose();
		}
	};
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dialog", {
		ref: dialogRef,
		className: PhotoModal_module_default.dialog,
		onClose,
		"aria-labelledby": `modal-title-${photo.id}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: `modal-title-${photo.id}`,
				className: "sr-only",
				children: "Photo Details"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onClose,
				className: PhotoModal_module_default.closeBtn,
				"aria-label": "Close",
				children: "✕"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: photo.url,
				className: PhotoModal_module_default.largeImage,
				alt: "Full size gallery view",
				onError: (e) => {
					e.currentTarget.src = "/placeholder.svg";
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: PhotoModal_module_default.meta,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: PhotoModal_module_default.url,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: photo.url })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagManager, { photo })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: PhotoModal_module_default.actions,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => toggleFavorite(photo.id),
						children: photo.is_favorite ? "★ Unfavorite" : "☆ Favorite"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleToggleHidden,
						children: photo.is_hidden ? "👁 Unhide" : "🙈 Hide"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleDelete,
						className: PhotoModal_module_default.deleteBtn,
						children: "🗑 Delete"
					})
				]
			})
		]
	}), document.body);
}
var PhotoCard_module_default = {
	card: "_card_mrvwf_1",
	coverFlowCard: "_coverFlowCard_mrvwf_17",
	hidden: "_hidden_mrvwf_30",
	hiding: "_hiding_mrvwf_34",
	image: "_image_mrvwf_41",
	contain: "_contain_mrvwf_48",
	overlay: "_overlay_mrvwf_55",
	iconBtn: "_iconBtn_mrvwf_63",
	tagRow: "_tagRow_mrvwf_82",
	tag: "_tag_mrvwf_82"
};
//#endregion
//#region src/features/gallery/PhotoCard.jsx
/**
* Compact photo tile for the gallery grid and cover flow slide.
* Fulfills REQ-UI-CARD: Interactive photo preview with quick actions.
* @param {{ photo: import('../../services/idbStorage').PhotoRecord, isCoverFlowMode?: boolean }} props
*/
function PhotoCard({ photo, isCoverFlowMode = false, panOrigin = "50% 50%" }) {
	const { toggleFavorite, toggleHidden } = useGallery();
	const [isModalOpen, setIsModalOpen] = (0, import_react.useState)(false);
	const [isHiding, setIsHiding] = (0, import_react.useState)(false);
	const handleCardClick = () => setIsModalOpen(true);
	const handleToggleHide = (e) => {
		e.stopPropagation();
		setIsHiding(true);
		setTimeout(() => toggleHidden(photo.id), 300);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `${PhotoCard_module_default.card} ${photo.is_hidden ? PhotoCard_module_default.hidden : ""} ${isHiding ? PhotoCard_module_default.hiding : ""} ${isCoverFlowMode ? PhotoCard_module_default.coverFlowCard : ""}`,
		onClick: handleCardClick,
		role: "button",
		"aria-label": "Open photo details",
		tabIndex: 0,
		onKeyDown: (e) => e.key === "Enter" && handleCardClick(),
		"data-testid": `photo-card-${photo.id}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: photo.url,
				alt: "Gallery thumbnail",
				loading: "lazy",
				decoding: "async",
				className: `${PhotoCard_module_default.image} ${isCoverFlowMode ? PhotoCard_module_default.contain : ""}`,
				style: { objectPosition: isCoverFlowMode ? panOrigin : void 0 },
				onError: (e) => {
					e.currentTarget.src = "/placeholder.svg";
				}
			}),
			!isCoverFlowMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: PhotoCard_module_default.overlay,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: (e) => {
						e.stopPropagation();
						toggleFavorite(photo.id);
					},
					"aria-label": photo.is_favorite ? "Remove from favorites" : "Add to favorites",
					className: PhotoCard_module_default.iconBtn,
					children: photo.is_favorite ? "★" : "☆"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handleToggleHide,
					"aria-label": photo.is_hidden ? "Unhide photo" : "Hide photo",
					className: PhotoCard_module_default.iconBtn,
					children: photo.is_hidden ? "👁️" : "🚫"
				})]
			}),
			photo.tags && photo.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: PhotoCard_module_default.tagRow,
				children: photo.tags.slice(0, 3).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: PhotoCard_module_default.tag,
					children: t
				}, t))
			})
		]
	}), isModalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoModal, {
		photo,
		onClose: () => setIsModalOpen(false)
	})] });
}
var GridView_module_default = {
	gridContainer: "_gridContainer_16ohp_1",
	placeholderCard: "_placeholderCard_16ohp_9",
	shimmer: "_shimmer_16ohp_18"
};
//#endregion
//#region src/features/gallery/GridView.jsx
var COLUMN_MIN_WIDTH = 220;
var GAP = 24;
/**
* react-window v2 cellComponent.
* Receives {rowIndex, columnIndex, style, ariaAttributes} from Grid,
* plus all keys from cellProps: {photosArray, totalCount, columnCount}.
*/
function Cell({ rowIndex, columnIndex, style, photosArray, totalCount, columnCount }) {
	const index = rowIndex * columnCount + columnIndex;
	if (index >= totalCount) return null;
	const adjustedStyle = {
		...style,
		left: style.left + GAP / 2,
		top: style.top + GAP / 2,
		width: style.width - GAP,
		height: style.height - GAP
	};
	const photo = photosArray[index];
	if (!photo) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: adjustedStyle,
		className: GridView_module_default.placeholderCard,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: GridView_module_default.shimmer })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: adjustedStyle,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoCard, { photo })
	});
}
/**
* Optimized Grid supporting 1M+ photos via virtualization and infinite loading.
* Uses react-window v2 API: cellComponent + cellProps + onCellsRendered.
* Uses react-window-infinite-loader v2 hook: useInfiniteLoader.
*/
function GridView() {
	const { photosArray, totalCount, loadPage } = useGallery();
	const [ref, bounds] = j();
	const columnCount = (0, import_react.useMemo)(() => {
		if (!bounds.width) return 1;
		return Math.max(1, Math.floor(bounds.width / (COLUMN_MIN_WIDTH + GAP)));
	}, [bounds.width]);
	const rowCount = totalCount > 0 ? Math.ceil(totalCount / columnCount) : 0;
	const loadMoreRows = (0, import_react.useCallback)(async (startIndex, stopIndex) => {
		for (let i = startIndex; i <= stopIndex; i++) loadPage(i);
	}, [loadPage]);
	const onRowsRendered = S({
		isRowLoaded: (0, import_react.useCallback)((index) => photosArray[index] != null, [photosArray]),
		loadMoreRows,
		rowCount: totalCount,
		minimumBatchSize: 50
	});
	const cellProps = (0, import_react.useMemo)(() => ({
		photosArray,
		totalCount,
		columnCount
	}), [
		photosArray,
		totalCount,
		columnCount
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: GridView_module_default.gridContainer,
		children: bounds.width > 0 && rowCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ee, {
			cellComponent: Cell,
			cellProps,
			columnCount,
			columnWidth: bounds.width / columnCount,
			height: window.innerHeight - 100,
			rowCount,
			rowHeight: 300,
			width: bounds.width,
			onCellsRendered: (visibleCells) => {
				onRowsRendered({
					startIndex: visibleCells.rowStartIndex * columnCount,
					stopIndex: (visibleCells.rowStopIndex + 1) * columnCount
				});
			},
			style: { overflowX: "hidden" }
		})
	});
}
//#endregion
//#region node_modules/swiper/shared/ssr-window.esm.mjs
/**
* SSR Window 5.0.1
* Better handling for window object in SSR environment
* https://github.com/nolimits4web/ssr-window
*
* Copyright 2025, Vladimir Kharlampidi
*
* Licensed under MIT
*
* Released on: June 27, 2025
*/
function isObject$2(obj) {
	return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
}
function extend$2(target = {}, src = {}) {
	const noExtend = [
		"__proto__",
		"constructor",
		"prototype"
	];
	Object.keys(src).filter((key) => noExtend.indexOf(key) < 0).forEach((key) => {
		if (typeof target[key] === "undefined") target[key] = src[key];
		else if (isObject$2(src[key]) && isObject$2(target[key]) && Object.keys(src[key]).length > 0) extend$2(target[key], src[key]);
	});
}
var ssrDocument = {
	body: {},
	addEventListener() {},
	removeEventListener() {},
	activeElement: {
		blur() {},
		nodeName: ""
	},
	querySelector() {
		return null;
	},
	querySelectorAll() {
		return [];
	},
	getElementById() {
		return null;
	},
	createEvent() {
		return { initEvent() {} };
	},
	createElement() {
		return {
			children: [],
			childNodes: [],
			style: {},
			setAttribute() {},
			getElementsByTagName() {
				return [];
			}
		};
	},
	createElementNS() {
		return {};
	},
	importNode() {
		return null;
	},
	location: {
		hash: "",
		host: "",
		hostname: "",
		href: "",
		origin: "",
		pathname: "",
		protocol: "",
		search: ""
	}
};
function getDocument() {
	const doc = typeof document !== "undefined" ? document : {};
	extend$2(doc, ssrDocument);
	return doc;
}
var ssrWindow = {
	document: ssrDocument,
	navigator: { userAgent: "" },
	location: {
		hash: "",
		host: "",
		hostname: "",
		href: "",
		origin: "",
		pathname: "",
		protocol: "",
		search: ""
	},
	history: {
		replaceState() {},
		pushState() {},
		go() {},
		back() {}
	},
	CustomEvent: function CustomEvent() {
		return this;
	},
	addEventListener() {},
	removeEventListener() {},
	getComputedStyle() {
		return { getPropertyValue() {
			return "";
		} };
	},
	Image() {},
	Date() {},
	screen: {},
	setTimeout() {},
	clearTimeout() {},
	matchMedia() {
		return {};
	},
	requestAnimationFrame(callback) {
		if (typeof setTimeout === "undefined") {
			callback();
			return null;
		}
		return setTimeout(callback, 0);
	},
	cancelAnimationFrame(id) {
		if (typeof setTimeout === "undefined") return;
		clearTimeout(id);
	}
};
function getWindow() {
	const win = typeof window !== "undefined" ? window : {};
	extend$2(win, ssrWindow);
	return win;
}
//#endregion
//#region node_modules/swiper/shared/utils.mjs
function classesToTokens(classes = "") {
	return classes.trim().split(" ").filter((c) => !!c.trim());
}
function deleteProps(obj) {
	const object = obj;
	Object.keys(object).forEach((key) => {
		try {
			object[key] = null;
		} catch (e) {}
		try {
			delete object[key];
		} catch (e) {}
	});
}
function nextTick(callback, delay = 0) {
	return setTimeout(callback, delay);
}
function now() {
	return Date.now();
}
function getComputedStyle$1(el) {
	const window = getWindow();
	let style;
	if (window.getComputedStyle) style = window.getComputedStyle(el, null);
	if (!style && el.currentStyle) style = el.currentStyle;
	if (!style) style = el.style;
	return style;
}
function getTranslate(el, axis = "x") {
	const window = getWindow();
	let matrix;
	let curTransform;
	let transformMatrix;
	const curStyle = getComputedStyle$1(el);
	if (window.WebKitCSSMatrix) {
		curTransform = curStyle.transform || curStyle.webkitTransform;
		if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a) => a.replace(",", ".")).join(", ");
		transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
	} else {
		transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
		matrix = transformMatrix.toString().split(",");
	}
	if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
	else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
	else curTransform = parseFloat(matrix[4]);
	if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
	else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
	else curTransform = parseFloat(matrix[5]);
	return curTransform || 0;
}
function isObject$1(o) {
	return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function isNode(node) {
	if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
	return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend$1(...args) {
	const to = Object(args[0]);
	for (let i = 1; i < args.length; i += 1) {
		const nextSource = args[i];
		if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
			const keysArray = Object.keys(Object(nextSource)).filter((key) => key !== "__proto__" && key !== "constructor" && key !== "prototype");
			for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
				const nextKey = keysArray[nextIndex];
				const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
				if (desc !== void 0 && desc.enumerable) if (isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
				else extend$1(to[nextKey], nextSource[nextKey]);
				else if (!isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
					to[nextKey] = {};
					if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
					else extend$1(to[nextKey], nextSource[nextKey]);
				} else to[nextKey] = nextSource[nextKey];
			}
		}
	}
	return to;
}
function setCSSProperty(el, varName, varValue) {
	el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll({ swiper, targetPosition, side }) {
	const window = getWindow();
	const startPosition = -swiper.translate;
	let startTime = null;
	let time;
	const duration = swiper.params.speed;
	swiper.wrapperEl.style.scrollSnapType = "none";
	window.cancelAnimationFrame(swiper.cssModeFrameID);
	const dir = targetPosition > startPosition ? "next" : "prev";
	const isOutOfBound = (current, target) => {
		return dir === "next" && current >= target || dir === "prev" && current <= target;
	};
	const animate = () => {
		time = (/* @__PURE__ */ new Date()).getTime();
		if (startTime === null) startTime = time;
		const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
		let currentPosition = startPosition + (.5 - Math.cos(progress * Math.PI) / 2) * (targetPosition - startPosition);
		if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
		swiper.wrapperEl.scrollTo({ [side]: currentPosition });
		if (isOutOfBound(currentPosition, targetPosition)) {
			swiper.wrapperEl.style.overflow = "hidden";
			swiper.wrapperEl.style.scrollSnapType = "";
			setTimeout(() => {
				swiper.wrapperEl.style.overflow = "";
				swiper.wrapperEl.scrollTo({ [side]: currentPosition });
			});
			window.cancelAnimationFrame(swiper.cssModeFrameID);
			return;
		}
		swiper.cssModeFrameID = window.requestAnimationFrame(animate);
	};
	animate();
}
function getSlideTransformEl(slideEl) {
	return slideEl.querySelector(".swiper-slide-transform") || slideEl.shadowRoot && slideEl.shadowRoot.querySelector(".swiper-slide-transform") || slideEl;
}
function elementChildren(element, selector = "") {
	const window = getWindow();
	const children = [...element.children];
	if (window.HTMLSlotElement && element instanceof HTMLSlotElement) children.push(...element.assignedElements());
	if (!selector) return children;
	return children.filter((el) => el.matches(selector));
}
function elementIsChildOfSlot(el, slot) {
	const elementsQueue = [slot];
	while (elementsQueue.length > 0) {
		const elementToCheck = elementsQueue.shift();
		if (el === elementToCheck) return true;
		elementsQueue.push(...elementToCheck.children, ...elementToCheck.shadowRoot ? elementToCheck.shadowRoot.children : [], ...elementToCheck.assignedElements ? elementToCheck.assignedElements() : []);
	}
}
function elementIsChildOf(el, parent) {
	const window = getWindow();
	let isChild = parent.contains(el);
	if (!isChild && window.HTMLSlotElement && parent instanceof HTMLSlotElement) {
		isChild = [...parent.assignedElements()].includes(el);
		if (!isChild) isChild = elementIsChildOfSlot(el, parent);
	}
	return isChild;
}
function showWarning(text) {
	try {
		console.warn(text);
		return;
	} catch (err) {}
}
function createElement(tag, classes = []) {
	const el = document.createElement(tag);
	el.classList.add(...Array.isArray(classes) ? classes : classesToTokens(classes));
	return el;
}
function elementOffset(el) {
	const window = getWindow();
	const document = getDocument();
	const box = el.getBoundingClientRect();
	const body = document.body;
	const clientTop = el.clientTop || body.clientTop || 0;
	const clientLeft = el.clientLeft || body.clientLeft || 0;
	const scrollTop = el === window ? window.scrollY : el.scrollTop;
	const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
	return {
		top: box.top + scrollTop - clientTop,
		left: box.left + scrollLeft - clientLeft
	};
}
function elementPrevAll(el, selector) {
	const prevEls = [];
	while (el.previousElementSibling) {
		const prev = el.previousElementSibling;
		if (selector) {
			if (prev.matches(selector)) prevEls.push(prev);
		} else prevEls.push(prev);
		el = prev;
	}
	return prevEls;
}
function elementNextAll(el, selector) {
	const nextEls = [];
	while (el.nextElementSibling) {
		const next = el.nextElementSibling;
		if (selector) {
			if (next.matches(selector)) nextEls.push(next);
		} else nextEls.push(next);
		el = next;
	}
	return nextEls;
}
function elementStyle(el, prop) {
	return getWindow().getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
	let child = el;
	let i;
	if (child) {
		i = 0;
		while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
		return i;
	}
}
function elementParents(el, selector) {
	const parents = [];
	let parent = el.parentElement;
	while (parent) {
		if (selector) {
			if (parent.matches(selector)) parents.push(parent);
		} else parents.push(parent);
		parent = parent.parentElement;
	}
	return parents;
}
function elementTransitionEnd(el, callback) {
	function fireCallBack(e) {
		if (e.target !== el) return;
		callback.call(el, e);
		el.removeEventListener("transitionend", fireCallBack);
	}
	if (callback) el.addEventListener("transitionend", fireCallBack);
}
function elementOuterSize(el, size, includeMargins) {
	const window = getWindow();
	if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
	return el.offsetWidth;
}
function makeElementsArray(el) {
	return (Array.isArray(el) ? el : [el]).filter((e) => !!e);
}
function getRotateFix(swiper) {
	return (v) => {
		if (Math.abs(v) > 0 && swiper.browser && swiper.browser.need3dFix && Math.abs(v) % 90 === 0) return v + .001;
		return v;
	};
}
function setInnerHTML(el, html = "") {
	if (typeof trustedTypes !== "undefined") el.innerHTML = trustedTypes.createPolicy("html", { createHTML: (s) => s }).createHTML(html);
	else el.innerHTML = html;
}
//#endregion
//#region node_modules/swiper/shared/swiper-core.mjs
var support;
function calcSupport() {
	const window = getWindow();
	const document = getDocument();
	return {
		smoothScroll: document.documentElement && document.documentElement.style && "scrollBehavior" in document.documentElement.style,
		touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
	};
}
function getSupport() {
	if (!support) support = calcSupport();
	return support;
}
var deviceCached;
function calcDevice({ userAgent } = {}) {
	const support = getSupport();
	const window = getWindow();
	const platform = window.navigator.platform;
	const ua = userAgent || window.navigator.userAgent;
	const device = {
		ios: false,
		android: false
	};
	const screenWidth = window.screen.width;
	const screenHeight = window.screen.height;
	const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
	let ipad = ua.match(/(iPad)(?!\1).*OS\s([\d_]+)/);
	const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
	const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
	const windows = platform === "Win32";
	let macos = platform === "MacIntel";
	if (!ipad && macos && support.touch && [
		"1024x1366",
		"1366x1024",
		"834x1194",
		"1194x834",
		"834x1112",
		"1112x834",
		"768x1024",
		"1024x768",
		"820x1180",
		"1180x820",
		"810x1080",
		"1080x810"
	].indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
		ipad = ua.match(/(Version)\/([\d.]+)/);
		if (!ipad) ipad = [
			0,
			1,
			"13_0_0"
		];
		macos = false;
	}
	if (android && !windows) {
		device.os = "android";
		device.android = true;
	}
	if (ipad || iphone || ipod) {
		device.os = "ios";
		device.ios = true;
	}
	return device;
}
function getDevice(overrides = {}) {
	if (!deviceCached) deviceCached = calcDevice(overrides);
	return deviceCached;
}
var browser;
function calcBrowser() {
	const window = getWindow();
	const device = getDevice();
	let needPerspectiveFix = false;
	function isSafari() {
		const ua = window.navigator.userAgent.toLowerCase();
		return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
	}
	if (isSafari()) {
		const ua = String(window.navigator.userAgent);
		if (ua.includes("Version/")) {
			const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num) => Number(num));
			needPerspectiveFix = major < 16 || major === 16 && minor < 2;
		}
	}
	const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
	const isSafariBrowser = isSafari();
	const need3dFix = isSafariBrowser || isWebView && device.ios;
	return {
		isSafari: needPerspectiveFix || isSafariBrowser,
		needPerspectiveFix,
		need3dFix,
		isWebView
	};
}
function getBrowser() {
	if (!browser) browser = calcBrowser();
	return browser;
}
function Resize({ swiper, on, emit }) {
	const window = getWindow();
	let observer = null;
	let animationFrame = null;
	const resizeHandler = () => {
		if (!swiper || swiper.destroyed || !swiper.initialized) return;
		emit("beforeResize");
		emit("resize");
	};
	const createObserver = () => {
		if (!swiper || swiper.destroyed || !swiper.initialized) return;
		observer = new ResizeObserver((entries) => {
			animationFrame = window.requestAnimationFrame(() => {
				const { width, height } = swiper;
				let newWidth = width;
				let newHeight = height;
				entries.forEach(({ contentBoxSize, contentRect, target }) => {
					if (target && target !== swiper.el) return;
					newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
					newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
				});
				if (newWidth !== width || newHeight !== height) resizeHandler();
			});
		});
		observer.observe(swiper.el);
	};
	const removeObserver = () => {
		if (animationFrame) window.cancelAnimationFrame(animationFrame);
		if (observer && observer.unobserve && swiper.el) {
			observer.unobserve(swiper.el);
			observer = null;
		}
	};
	const orientationChangeHandler = () => {
		if (!swiper || swiper.destroyed || !swiper.initialized) return;
		emit("orientationchange");
	};
	on("init", () => {
		if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
			createObserver();
			return;
		}
		window.addEventListener("resize", resizeHandler);
		window.addEventListener("orientationchange", orientationChangeHandler);
	});
	on("destroy", () => {
		removeObserver();
		window.removeEventListener("resize", resizeHandler);
		window.removeEventListener("orientationchange", orientationChangeHandler);
	});
}
function Observer({ swiper, extendParams, on, emit }) {
	const observers = [];
	const window = getWindow();
	const attach = (target, options = {}) => {
		const observer = new (window.MutationObserver || window.WebkitMutationObserver)((mutations) => {
			if (swiper.__preventObserver__) return;
			if (mutations.length === 1) {
				emit("observerUpdate", mutations[0]);
				return;
			}
			const observerUpdate = function observerUpdate() {
				emit("observerUpdate", mutations[0]);
			};
			if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate);
			else window.setTimeout(observerUpdate, 0);
		});
		observer.observe(target, {
			attributes: typeof options.attributes === "undefined" ? true : options.attributes,
			childList: swiper.isElement || (typeof options.childList === "undefined" ? true : options).childList,
			characterData: typeof options.characterData === "undefined" ? true : options.characterData
		});
		observers.push(observer);
	};
	const init = () => {
		if (!swiper.params.observer) return;
		if (swiper.params.observeParents) {
			const containerParents = elementParents(swiper.hostEl);
			for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
		}
		attach(swiper.hostEl, { childList: swiper.params.observeSlideChildren });
		attach(swiper.wrapperEl, { attributes: false });
	};
	const destroy = () => {
		observers.forEach((observer) => {
			observer.disconnect();
		});
		observers.splice(0, observers.length);
	};
	extendParams({
		observer: false,
		observeParents: false,
		observeSlideChildren: false
	});
	on("init", init);
	on("destroy", destroy);
}
var eventsEmitter = {
	on(events, handler, priority) {
		const self = this;
		if (!self.eventsListeners || self.destroyed) return self;
		if (typeof handler !== "function") return self;
		const method = priority ? "unshift" : "push";
		events.split(" ").forEach((event) => {
			if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
			self.eventsListeners[event][method](handler);
		});
		return self;
	},
	once(events, handler, priority) {
		const self = this;
		if (!self.eventsListeners || self.destroyed) return self;
		if (typeof handler !== "function") return self;
		function onceHandler(...args) {
			self.off(events, onceHandler);
			if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
			handler.apply(self, args);
		}
		onceHandler.__emitterProxy = handler;
		return self.on(events, onceHandler, priority);
	},
	onAny(handler, priority) {
		const self = this;
		if (!self.eventsListeners || self.destroyed) return self;
		if (typeof handler !== "function") return self;
		const method = priority ? "unshift" : "push";
		if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
		return self;
	},
	offAny(handler) {
		const self = this;
		if (!self.eventsListeners || self.destroyed) return self;
		if (!self.eventsAnyListeners) return self;
		const index = self.eventsAnyListeners.indexOf(handler);
		if (index >= 0) self.eventsAnyListeners.splice(index, 1);
		return self;
	},
	off(events, handler) {
		const self = this;
		if (!self.eventsListeners || self.destroyed) return self;
		if (!self.eventsListeners) return self;
		events.split(" ").forEach((event) => {
			if (typeof handler === "undefined") self.eventsListeners[event] = [];
			else if (self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler, index) => {
				if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
			});
		});
		return self;
	},
	emit(...args) {
		const self = this;
		if (!self.eventsListeners || self.destroyed) return self;
		if (!self.eventsListeners) return self;
		let events;
		let data;
		let context;
		if (typeof args[0] === "string" || Array.isArray(args[0])) {
			events = args[0];
			data = args.slice(1, args.length);
			context = self;
		} else {
			events = args[0].events;
			data = args[0].data;
			context = args[0].context || self;
		}
		data.unshift(context);
		(Array.isArray(events) ? events : events.split(" ")).forEach((event) => {
			if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler) => {
				eventHandler.apply(context, [event, ...data]);
			});
			if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler) => {
				eventHandler.apply(context, data);
			});
		});
		return self;
	}
};
function updateSize() {
	const swiper = this;
	let width;
	let height;
	const el = swiper.el;
	if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width;
	else width = el.clientWidth;
	if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height;
	else height = el.clientHeight;
	if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
	width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
	height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
	if (Number.isNaN(width)) width = 0;
	if (Number.isNaN(height)) height = 0;
	Object.assign(swiper, {
		width,
		height,
		size: swiper.isHorizontal() ? width : height
	});
}
function updateSlides() {
	const swiper = this;
	function getDirectionPropertyValue(node, label) {
		return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
	}
	const params = swiper.params;
	const { wrapperEl, slidesEl, rtlTranslate: rtl, wrongRTL } = swiper;
	const isVirtual = swiper.virtual && params.virtual.enabled;
	const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
	const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
	const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
	let snapGrid = [];
	const slidesGrid = [];
	const slidesSizesGrid = [];
	let offsetBefore = params.slidesOffsetBefore;
	if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
	let offsetAfter = params.slidesOffsetAfter;
	if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
	const previousSnapGridLength = swiper.snapGrid.length;
	const previousSlidesGridLength = swiper.slidesGrid.length;
	const swiperSize = swiper.size - offsetBefore - offsetAfter;
	let spaceBetween = params.spaceBetween;
	let slidePosition = -offsetBefore;
	let prevSlideSize = 0;
	let index = 0;
	if (typeof swiperSize === "undefined") return;
	if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
	else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
	swiper.virtualSize = -spaceBetween - offsetBefore - offsetAfter;
	slides.forEach((slideEl) => {
		if (rtl) slideEl.style.marginLeft = "";
		else slideEl.style.marginRight = "";
		slideEl.style.marginBottom = "";
		slideEl.style.marginTop = "";
	});
	if (params.centeredSlides && params.cssMode) {
		setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
		setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
	}
	if (params.cssMode) {
		setCSSProperty(wrapperEl, "--swiper-slides-offset-before", `${offsetBefore}px`);
		setCSSProperty(wrapperEl, "--swiper-slides-offset-after", `${offsetAfter}px`);
	}
	const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
	if (gridEnabled) swiper.grid.initSlides(slides);
	else if (swiper.grid) swiper.grid.unsetSlides();
	let slideSize;
	const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => {
		return typeof params.breakpoints[key].slidesPerView !== "undefined";
	}).length > 0;
	for (let i = 0; i < slidesLength; i += 1) {
		slideSize = 0;
		const slide = slides[i];
		if (slide) {
			if (gridEnabled) swiper.grid.updateSlide(i, slide, slides);
			if (elementStyle(slide, "display") === "none") continue;
		}
		if (isVirtual && params.slidesPerView === "auto") {
			if (params.virtual.slidesPerViewAutoSlideSize) slideSize = params.virtual.slidesPerViewAutoSlideSize;
			if (slideSize && slide) {
				if (params.roundLengths) slideSize = Math.floor(slideSize);
				slide.style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
			}
		} else if (params.slidesPerView === "auto") {
			if (shouldResetSlideSize) slide.style[swiper.getDirectionLabel("width")] = ``;
			const slideStyles = getComputedStyle(slide);
			const currentTransform = slide.style.transform;
			const currentWebKitTransform = slide.style.webkitTransform;
			if (currentTransform) slide.style.transform = "none";
			if (currentWebKitTransform) slide.style.webkitTransform = "none";
			if (params.roundLengths) slideSize = swiper.isHorizontal() ? elementOuterSize(slide, "width", true) : elementOuterSize(slide, "height", true);
			else {
				const width = getDirectionPropertyValue(slideStyles, "width");
				const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
				const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
				const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
				const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
				const boxSizing = slideStyles.getPropertyValue("box-sizing");
				if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight;
				else {
					const { clientWidth, offsetWidth } = slide;
					slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
				}
			}
			if (currentTransform) slide.style.transform = currentTransform;
			if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
			if (params.roundLengths) slideSize = Math.floor(slideSize);
		} else {
			slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
			if (params.roundLengths) slideSize = Math.floor(slideSize);
			if (slide) slide.style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
		}
		if (slide) slide.swiperSlideSize = slideSize;
		slidesSizesGrid.push(slideSize);
		if (params.centeredSlides) {
			slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
			if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
			if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
			if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
			if (params.roundLengths) slidePosition = Math.floor(slidePosition);
			if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
			slidesGrid.push(slidePosition);
		} else {
			if (params.roundLengths) slidePosition = Math.floor(slidePosition);
			if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
			slidesGrid.push(slidePosition);
			slidePosition = slidePosition + slideSize + spaceBetween;
		}
		swiper.virtualSize += slideSize + spaceBetween;
		prevSlideSize = slideSize;
		index += 1;
	}
	swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
	if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
	if (params.setWrapperSize) wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
	if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid);
	if (!params.centeredSlides) {
		const isFractionalSlidesPerView = params.slidesPerView !== "auto" && params.slidesPerView % 1 !== 0;
		const shouldSnapToSlideEdge = params.snapToSlideEdge && !params.loop && (params.slidesPerView === "auto" || isFractionalSlidesPerView);
		let lastAllowedSnapIndex = snapGrid.length;
		if (shouldSnapToSlideEdge) {
			let minVisibleSlides;
			if (params.slidesPerView === "auto") {
				minVisibleSlides = 1;
				let accumulatedSize = 0;
				for (let i = slidesSizesGrid.length - 1; i >= 0; i -= 1) {
					accumulatedSize += slidesSizesGrid[i] + (i < slidesSizesGrid.length - 1 ? spaceBetween : 0);
					if (accumulatedSize <= swiperSize) minVisibleSlides = slidesSizesGrid.length - i;
					else break;
				}
			} else minVisibleSlides = Math.floor(params.slidesPerView);
			lastAllowedSnapIndex = Math.max(slidesLength - minVisibleSlides, 0);
		}
		const newSlidesGrid = [];
		for (let i = 0; i < snapGrid.length; i += 1) {
			let slidesGridItem = snapGrid[i];
			if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
			if (shouldSnapToSlideEdge) {
				if (i <= lastAllowedSnapIndex) newSlidesGrid.push(slidesGridItem);
			} else if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
		}
		snapGrid = newSlidesGrid;
		if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
			if (!shouldSnapToSlideEdge) snapGrid.push(swiper.virtualSize - swiperSize);
		}
	}
	if (isVirtual && params.loop) {
		const size = slidesSizesGrid[0] + spaceBetween;
		if (params.slidesPerGroup > 1) {
			const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
			const groupSize = size * params.slidesPerGroup;
			for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
		}
		for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
			if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
			slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
			swiper.virtualSize += size;
		}
	}
	if (snapGrid.length === 0) snapGrid = [0];
	if (spaceBetween !== 0) {
		const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
		slides.filter((_, slideIndex) => {
			if (!params.cssMode || params.loop) return true;
			if (slideIndex === slides.length - 1) return false;
			return true;
		}).forEach((slideEl) => {
			slideEl.style[key] = `${spaceBetween}px`;
		});
	}
	if (params.centeredSlides && params.centeredSlidesBounds) {
		let allSlidesSize = 0;
		slidesSizesGrid.forEach((slideSizeValue) => {
			allSlidesSize += slideSizeValue + (spaceBetween || 0);
		});
		allSlidesSize -= spaceBetween;
		const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
		snapGrid = snapGrid.map((snap) => {
			if (snap <= 0) return -offsetBefore;
			if (snap > maxSnap) return maxSnap + offsetAfter;
			return snap;
		});
	}
	if (params.centerInsufficientSlides) {
		let allSlidesSize = 0;
		slidesSizesGrid.forEach((slideSizeValue) => {
			allSlidesSize += slideSizeValue + (spaceBetween || 0);
		});
		allSlidesSize -= spaceBetween;
		if (allSlidesSize < swiperSize) {
			const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
			snapGrid.forEach((snap, snapIndex) => {
				snapGrid[snapIndex] = snap - allSlidesOffset;
			});
			slidesGrid.forEach((snap, snapIndex) => {
				slidesGrid[snapIndex] = snap + allSlidesOffset;
			});
		}
	}
	Object.assign(swiper, {
		slides,
		snapGrid,
		slidesGrid,
		slidesSizesGrid
	});
	if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
		setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
		setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
		const addToSnapGrid = -swiper.snapGrid[0];
		const addToSlidesGrid = -swiper.slidesGrid[0];
		swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid);
		swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid);
	}
	if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
	if (snapGrid.length !== previousSnapGridLength) {
		if (swiper.params.watchOverflow) swiper.checkOverflow();
		swiper.emit("snapGridLengthChange");
	}
	if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
	if (params.watchSlidesProgress) swiper.updateSlidesOffset();
	swiper.emit("slidesUpdated");
	if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
		const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
		const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
		if (slidesLength <= params.maxBackfaceHiddenSlides) {
			if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
		} else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
	}
}
function updateAutoHeight(speed) {
	const swiper = this;
	const activeSlides = [];
	const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
	let newHeight = 0;
	let i;
	if (typeof speed === "number") swiper.setTransition(speed);
	else if (speed === true) swiper.setTransition(swiper.params.speed);
	const getSlideByIndex = (index) => {
		if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
		return swiper.slides[index];
	};
	if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide) => {
		activeSlides.push(slide);
	});
	else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
		const index = swiper.activeIndex + i;
		if (index > swiper.slides.length && !isVirtual) break;
		activeSlides.push(getSlideByIndex(index));
	}
	else activeSlides.push(getSlideByIndex(swiper.activeIndex));
	for (i = 0; i < activeSlides.length; i += 1) if (typeof activeSlides[i] !== "undefined") {
		const height = activeSlides[i].offsetHeight;
		newHeight = height > newHeight ? height : newHeight;
	}
	if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}
function updateSlidesOffset() {
	const swiper = this;
	const slides = swiper.slides;
	const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
	for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
}
var toggleSlideClasses$1 = (slideEl, condition, className) => {
	if (condition && !slideEl.classList.contains(className)) slideEl.classList.add(className);
	else if (!condition && slideEl.classList.contains(className)) slideEl.classList.remove(className);
};
function updateSlidesProgress(translate = this && this.translate || 0) {
	const swiper = this;
	const params = swiper.params;
	const { slides, rtlTranslate: rtl, snapGrid } = swiper;
	if (slides.length === 0) return;
	if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
	let offsetCenter = -translate;
	if (rtl) offsetCenter = translate;
	swiper.visibleSlidesIndexes = [];
	swiper.visibleSlides = [];
	let spaceBetween = params.spaceBetween;
	if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
	else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
	for (let i = 0; i < slides.length; i += 1) {
		const slide = slides[i];
		let slideOffset = slide.swiperSlideOffset;
		if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
		const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
		const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
		const slideBefore = -(offsetCenter - slideOffset);
		const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
		const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
		const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
		if (isVisible) {
			swiper.visibleSlides.push(slide);
			swiper.visibleSlidesIndexes.push(i);
		}
		toggleSlideClasses$1(slide, isVisible, params.slideVisibleClass);
		toggleSlideClasses$1(slide, isFullyVisible, params.slideFullyVisibleClass);
		slide.progress = rtl ? -slideProgress : slideProgress;
		slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
	}
}
function updateProgress(translate) {
	const swiper = this;
	if (typeof translate === "undefined") {
		const multiplier = swiper.rtlTranslate ? -1 : 1;
		translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
	}
	const params = swiper.params;
	const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
	let { progress, isBeginning, isEnd, progressLoop } = swiper;
	const wasBeginning = isBeginning;
	const wasEnd = isEnd;
	if (translatesDiff === 0) {
		progress = 0;
		isBeginning = true;
		isEnd = true;
	} else {
		progress = (translate - swiper.minTranslate()) / translatesDiff;
		const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
		const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
		isBeginning = isBeginningRounded || progress <= 0;
		isEnd = isEndRounded || progress >= 1;
		if (isBeginningRounded) progress = 0;
		if (isEndRounded) progress = 1;
	}
	if (params.loop) {
		const firstSlideIndex = swiper.getSlideIndexByData(0);
		const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
		const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
		const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
		const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
		const translateAbs = Math.abs(translate);
		if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
		else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
		if (progressLoop > 1) progressLoop -= 1;
	}
	Object.assign(swiper, {
		progress,
		progressLoop,
		isBeginning,
		isEnd
	});
	if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
	if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
	if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
	if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
	swiper.emit("progress", progress);
}
var toggleSlideClasses = (slideEl, condition, className) => {
	if (condition && !slideEl.classList.contains(className)) slideEl.classList.add(className);
	else if (!condition && slideEl.classList.contains(className)) slideEl.classList.remove(className);
};
function updateSlidesClasses() {
	const swiper = this;
	const { slides, params, slidesEl, activeIndex } = swiper;
	const isVirtual = swiper.virtual && params.virtual.enabled;
	const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
	const getFilteredSlide = (selector) => {
		return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
	};
	let activeSlide;
	let prevSlide;
	let nextSlide;
	if (isVirtual) if (params.loop) {
		let slideIndex = activeIndex - swiper.virtual.slidesBefore;
		if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
		if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
		activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
	} else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
	else if (gridEnabled) {
		activeSlide = slides.find((slideEl) => slideEl.column === activeIndex);
		nextSlide = slides.find((slideEl) => slideEl.column === activeIndex + 1);
		prevSlide = slides.find((slideEl) => slideEl.column === activeIndex - 1);
	} else activeSlide = slides[activeIndex];
	if (activeSlide) {
		if (!gridEnabled) {
			nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
			if (params.loop && !nextSlide) nextSlide = slides[0];
			prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
			if (params.loop && false);
		}
	}
	slides.forEach((slideEl) => {
		toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
		toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
		toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
	});
	swiper.emitSlidesClasses();
}
var processLazyPreloader = (swiper, imageEl) => {
	if (!swiper || swiper.destroyed || !swiper.params) return;
	const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
	const slideEl = imageEl.closest(slideSelector());
	if (slideEl) {
		let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
		if (!lazyEl && swiper.isElement) if (slideEl.shadowRoot) lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
		else requestAnimationFrame(() => {
			if (slideEl.shadowRoot) {
				lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
				if (lazyEl && !lazyEl.lazyPreloaderManaged) lazyEl.remove();
			}
		});
		if (lazyEl && !lazyEl.lazyPreloaderManaged) lazyEl.remove();
	}
};
var unlazy = (swiper, index) => {
	if (!swiper.slides[index]) return;
	const imageEl = swiper.slides[index].querySelector("[loading=\"lazy\"]");
	if (imageEl) imageEl.removeAttribute("loading");
};
var preload = (swiper) => {
	if (!swiper || swiper.destroyed || !swiper.params) return;
	let amount = swiper.params.lazyPreloadPrevNext;
	const len = swiper.slides.length;
	if (!len || !amount || amount < 0) return;
	amount = Math.min(amount, len);
	const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
	const activeIndex = swiper.activeIndex;
	if (swiper.params.grid && swiper.params.grid.rows > 1) {
		const activeColumn = activeIndex;
		const preloadColumns = [activeColumn - amount];
		preloadColumns.push(...Array.from({ length: amount }).map((_, i) => {
			return activeColumn + slidesPerView + i;
		}));
		swiper.slides.forEach((slideEl, i) => {
			if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
		});
		return;
	}
	const slideIndexLastInView = activeIndex + slidesPerView - 1;
	if (swiper.params.rewind || swiper.params.loop) for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
		const realIndex = (i % len + len) % len;
		if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
	}
	else for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) unlazy(swiper, i);
};
function getActiveIndexByTranslate(swiper) {
	const { slidesGrid, params } = swiper;
	const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
	let activeIndex;
	for (let i = 0; i < slidesGrid.length; i += 1) if (typeof slidesGrid[i + 1] !== "undefined") {
		if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i;
		else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
	} else if (translate >= slidesGrid[i]) activeIndex = i;
	if (params.normalizeSlideIndex) {
		if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
	}
	return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
	const swiper = this;
	const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
	const { snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex } = swiper;
	let activeIndex = newActiveIndex;
	let snapIndex;
	const getVirtualRealIndex = (aIndex) => {
		let realIndex = aIndex - swiper.virtual.slidesBefore;
		if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
		if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
		return realIndex;
	};
	if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
	if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate);
	else {
		const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
		snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
	}
	if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
	if (activeIndex === previousIndex && !swiper.params.loop) {
		if (snapIndex !== previousSnapIndex) {
			swiper.snapIndex = snapIndex;
			swiper.emit("snapIndexChange");
		}
		return;
	}
	if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
		swiper.realIndex = getVirtualRealIndex(activeIndex);
		return;
	}
	const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
	let realIndex;
	if (swiper.virtual && params.virtual.enabled) if (params.loop) realIndex = getVirtualRealIndex(activeIndex);
	else realIndex = activeIndex;
	else if (gridEnabled) {
		const firstSlideInColumn = swiper.slides.find((slideEl) => slideEl.column === activeIndex);
		let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
		if (Number.isNaN(activeSlideIndex)) activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
		realIndex = Math.floor(activeSlideIndex / params.grid.rows);
	} else if (swiper.slides[activeIndex]) {
		const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
		if (slideIndex) realIndex = parseInt(slideIndex, 10);
		else realIndex = activeIndex;
	} else realIndex = activeIndex;
	Object.assign(swiper, {
		previousSnapIndex,
		snapIndex,
		previousRealIndex,
		realIndex,
		previousIndex,
		activeIndex
	});
	if (swiper.initialized) preload(swiper);
	swiper.emit("activeIndexChange");
	swiper.emit("snapIndexChange");
	if (swiper.initialized || swiper.params.runCallbacksOnInit) {
		if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
		swiper.emit("slideChange");
	}
}
function updateClickedSlide(el, path) {
	const swiper = this;
	const params = swiper.params;
	let slide = el.closest(`.${params.slideClass}, swiper-slide`);
	if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) [...path.slice(path.indexOf(el) + 1, path.length)].forEach((pathEl) => {
		if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) slide = pathEl;
	});
	let slideFound = false;
	let slideIndex;
	if (slide) {
		for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
			slideFound = true;
			slideIndex = i;
			break;
		}
	}
	if (slide && slideFound) {
		swiper.clickedSlide = slide;
		if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10);
		else swiper.clickedIndex = slideIndex;
	} else {
		swiper.clickedSlide = void 0;
		swiper.clickedIndex = void 0;
		return;
	}
	if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
}
var update = {
	updateSize,
	updateSlides,
	updateAutoHeight,
	updateSlidesOffset,
	updateSlidesProgress,
	updateProgress,
	updateSlidesClasses,
	updateActiveIndex,
	updateClickedSlide
};
function getSwiperTranslate(axis = this.isHorizontal() ? "x" : "y") {
	const swiper = this;
	const { params, rtlTranslate: rtl, translate, wrapperEl } = swiper;
	if (params.virtualTranslate) return rtl ? -translate : translate;
	if (params.cssMode) return translate;
	let currentTranslate = getTranslate(wrapperEl, axis);
	currentTranslate += swiper.cssOverflowAdjustment();
	if (rtl) currentTranslate = -currentTranslate;
	return currentTranslate || 0;
}
function setTranslate(translate, byController) {
	const swiper = this;
	const { rtlTranslate: rtl, params, wrapperEl, progress } = swiper;
	let x = 0;
	let y = 0;
	const z = 0;
	if (swiper.isHorizontal()) x = rtl ? -translate : translate;
	else y = translate;
	if (params.roundLengths) {
		x = Math.floor(x);
		y = Math.floor(y);
	}
	swiper.previousTranslate = swiper.translate;
	swiper.translate = swiper.isHorizontal() ? x : y;
	if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
	else if (!params.virtualTranslate) {
		if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment();
		else y -= swiper.cssOverflowAdjustment();
		wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
	}
	let newProgress;
	const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
	if (translatesDiff === 0) newProgress = 0;
	else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
	if (newProgress !== progress) swiper.updateProgress(translate);
	swiper.emit("setTranslate", swiper.translate, byController);
}
function minTranslate() {
	return -this.snapGrid[0];
}
function maxTranslate() {
	return -this.snapGrid[this.snapGrid.length - 1];
}
function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
	const swiper = this;
	const { params, wrapperEl } = swiper;
	if (swiper.animating && params.preventInteractionOnTransition) return false;
	const minTranslate = swiper.minTranslate();
	const maxTranslate = swiper.maxTranslate();
	let newTranslate;
	if (translateBounds && translate > minTranslate) newTranslate = minTranslate;
	else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;
	else newTranslate = translate;
	swiper.updateProgress(newTranslate);
	if (params.cssMode) {
		const isH = swiper.isHorizontal();
		if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
		else {
			if (!swiper.support.smoothScroll) {
				animateCSSModeScroll({
					swiper,
					targetPosition: -newTranslate,
					side: isH ? "left" : "top"
				});
				return true;
			}
			wrapperEl.scrollTo({
				[isH ? "left" : "top"]: -newTranslate,
				behavior: "smooth"
			});
		}
		return true;
	}
	if (speed === 0) {
		swiper.setTransition(0);
		swiper.setTranslate(newTranslate);
		if (runCallbacks) {
			swiper.emit("beforeTransitionStart", speed, internal);
			swiper.emit("transitionEnd");
		}
	} else {
		swiper.setTransition(speed);
		swiper.setTranslate(newTranslate);
		if (runCallbacks) {
			swiper.emit("beforeTransitionStart", speed, internal);
			swiper.emit("transitionStart");
		}
		if (!swiper.animating) {
			swiper.animating = true;
			if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
				if (!swiper || swiper.destroyed) return;
				if (e.target !== this) return;
				swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
				swiper.onTranslateToWrapperTransitionEnd = null;
				delete swiper.onTranslateToWrapperTransitionEnd;
				swiper.animating = false;
				if (runCallbacks) swiper.emit("transitionEnd");
			};
			swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
		}
	}
	return true;
}
var translate = {
	getTranslate: getSwiperTranslate,
	setTranslate,
	minTranslate,
	maxTranslate,
	translateTo
};
function setTransition(duration, byController) {
	const swiper = this;
	if (!swiper.params.cssMode) {
		swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
		swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
	}
	swiper.emit("setTransition", duration, byController);
}
function transitionEmit({ swiper, runCallbacks, direction, step }) {
	const { activeIndex, previousIndex } = swiper;
	let dir = direction;
	if (!dir) if (activeIndex > previousIndex) dir = "next";
	else if (activeIndex < previousIndex) dir = "prev";
	else dir = "reset";
	swiper.emit(`transition${step}`);
	if (runCallbacks && dir === "reset") swiper.emit(`slideResetTransition${step}`);
	else if (runCallbacks && activeIndex !== previousIndex) {
		swiper.emit(`slideChangeTransition${step}`);
		if (dir === "next") swiper.emit(`slideNextTransition${step}`);
		else swiper.emit(`slidePrevTransition${step}`);
	}
}
function transitionStart(runCallbacks = true, direction) {
	const swiper = this;
	const { params } = swiper;
	if (params.cssMode) return;
	if (params.autoHeight) swiper.updateAutoHeight();
	transitionEmit({
		swiper,
		runCallbacks,
		direction,
		step: "Start"
	});
}
function transitionEnd(runCallbacks = true, direction) {
	const swiper = this;
	const { params } = swiper;
	swiper.animating = false;
	if (params.cssMode) return;
	swiper.setTransition(0);
	transitionEmit({
		swiper,
		runCallbacks,
		direction,
		step: "End"
	});
}
var transition = {
	setTransition,
	transitionStart,
	transitionEnd
};
function slideTo(index = 0, speed, runCallbacks = true, internal, initial) {
	if (typeof index === "string") index = parseInt(index, 10);
	const swiper = this;
	let slideIndex = index;
	if (slideIndex < 0) slideIndex = 0;
	const { params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled } = swiper;
	if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) return false;
	if (typeof speed === "undefined") speed = swiper.params.speed;
	const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
	let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
	if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
	const translate = -snapGrid[snapIndex];
	if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
		const normalizedTranslate = -Math.floor(translate * 100);
		const normalizedGrid = Math.floor(slidesGrid[i] * 100);
		const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
		if (typeof slidesGrid[i + 1] !== "undefined") {
			if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i;
			else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
		} else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
	}
	if (swiper.initialized && slideIndex !== activeIndex) {
		if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) return false;
		if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
			if ((activeIndex || 0) !== slideIndex) return false;
		}
	}
	if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
	swiper.updateProgress(translate);
	let direction;
	if (slideIndex > activeIndex) direction = "next";
	else if (slideIndex < activeIndex) direction = "prev";
	else direction = "reset";
	const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
	if (!(isVirtual && initial) && (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate)) {
		swiper.updateActiveIndex(slideIndex);
		if (params.autoHeight) swiper.updateAutoHeight();
		swiper.updateSlidesClasses();
		if (params.effect !== "slide") swiper.setTranslate(translate);
		if (direction !== "reset") {
			swiper.transitionStart(runCallbacks, direction);
			swiper.transitionEnd(runCallbacks, direction);
		}
		return false;
	}
	if (params.cssMode) {
		const isH = swiper.isHorizontal();
		const t = rtl ? translate : -translate;
		if (speed === 0) {
			if (isVirtual) {
				swiper.wrapperEl.style.scrollSnapType = "none";
				swiper._immediateVirtual = true;
			}
			if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
				swiper._cssModeVirtualInitialSet = true;
				requestAnimationFrame(() => {
					wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
				});
			} else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
			if (isVirtual) requestAnimationFrame(() => {
				swiper.wrapperEl.style.scrollSnapType = "";
				swiper._immediateVirtual = false;
			});
		} else {
			if (!swiper.support.smoothScroll) {
				animateCSSModeScroll({
					swiper,
					targetPosition: t,
					side: isH ? "left" : "top"
				});
				return true;
			}
			wrapperEl.scrollTo({
				[isH ? "left" : "top"]: t,
				behavior: "smooth"
			});
		}
		return true;
	}
	const isSafari = getBrowser().isSafari;
	if (isVirtual && !initial && isSafari && swiper.isElement) swiper.virtual.update(false, false, slideIndex);
	swiper.setTransition(speed);
	swiper.setTranslate(translate);
	swiper.updateActiveIndex(slideIndex);
	swiper.updateSlidesClasses();
	swiper.emit("beforeTransitionStart", speed, internal);
	swiper.transitionStart(runCallbacks, direction);
	if (speed === 0) swiper.transitionEnd(runCallbacks, direction);
	else if (!swiper.animating) {
		swiper.animating = true;
		if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
			if (!swiper || swiper.destroyed) return;
			if (e.target !== this) return;
			swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
			swiper.onSlideToWrapperTransitionEnd = null;
			delete swiper.onSlideToWrapperTransitionEnd;
			swiper.transitionEnd(runCallbacks, direction);
		};
		swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
	}
	return true;
}
function slideToLoop(index = 0, speed, runCallbacks = true, internal) {
	if (typeof index === "string") index = parseInt(index, 10);
	const swiper = this;
	if (swiper.destroyed) return;
	if (typeof speed === "undefined") speed = swiper.params.speed;
	const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
	let newIndex = index;
	if (swiper.params.loop) if (swiper.virtual && swiper.params.virtual.enabled) newIndex = newIndex + swiper.virtual.slidesBefore;
	else {
		let targetSlideIndex;
		if (gridEnabled) {
			const slideIndex = newIndex * swiper.params.grid.rows;
			targetSlideIndex = swiper.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex).column;
		} else targetSlideIndex = swiper.getSlideIndexByData(newIndex);
		const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
		const { centeredSlides, slidesOffsetBefore, slidesOffsetAfter } = swiper.params;
		const bothDirections = centeredSlides || !!slidesOffsetBefore || !!slidesOffsetAfter;
		let slidesPerView = swiper.params.slidesPerView;
		if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic();
		else {
			slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
			if (bothDirections && slidesPerView % 2 === 0) slidesPerView = slidesPerView + 1;
		}
		let needLoopFix = cols - targetSlideIndex < slidesPerView;
		if (bothDirections) needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
		if (internal && bothDirections && swiper.params.slidesPerView !== "auto" && !gridEnabled) needLoopFix = false;
		if (needLoopFix) {
			const direction = bothDirections ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
			swiper.loopFix({
				direction,
				slideTo: true,
				activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
				slideRealIndex: direction === "next" ? swiper.realIndex : void 0
			});
		}
		if (gridEnabled) {
			const slideIndex = newIndex * swiper.params.grid.rows;
			newIndex = swiper.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex).column;
		} else newIndex = swiper.getSlideIndexByData(newIndex);
	}
	requestAnimationFrame(() => {
		swiper.slideTo(newIndex, speed, runCallbacks, internal);
	});
	return swiper;
}
function slideNext(speed, runCallbacks = true, internal) {
	const swiper = this;
	const { enabled, params, animating } = swiper;
	if (!enabled || swiper.destroyed) return swiper;
	if (typeof speed === "undefined") speed = swiper.params.speed;
	let perGroup = params.slidesPerGroup;
	if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
	const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
	const isVirtual = swiper.virtual && params.virtual.enabled;
	if (params.loop) {
		if (animating && !isVirtual && params.loopPreventsSliding) return false;
		swiper.loopFix({ direction: "next" });
		swiper._clientLeft = swiper.wrapperEl.clientLeft;
		if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
			requestAnimationFrame(() => {
				swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
			});
			return true;
		}
	}
	if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
	return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}
function slidePrev(speed, runCallbacks = true, internal) {
	const swiper = this;
	const { params, snapGrid, slidesGrid, rtlTranslate, enabled, animating } = swiper;
	if (!enabled || swiper.destroyed) return swiper;
	if (typeof speed === "undefined") speed = swiper.params.speed;
	const isVirtual = swiper.virtual && params.virtual.enabled;
	if (params.loop) {
		if (animating && !isVirtual && params.loopPreventsSliding) return false;
		swiper.loopFix({ direction: "prev" });
		swiper._clientLeft = swiper.wrapperEl.clientLeft;
	}
	const translate = rtlTranslate ? swiper.translate : -swiper.translate;
	function normalize(val) {
		if (val < 0) return -Math.floor(Math.abs(val));
		return Math.floor(val);
	}
	const normalizedTranslate = normalize(translate);
	const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
	const isFreeMode = params.freeMode && params.freeMode.enabled;
	let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
	if (typeof prevSnap === "undefined" && (params.cssMode || isFreeMode)) {
		let prevSnapIndex;
		snapGrid.forEach((snap, snapIndex) => {
			if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
		});
		if (typeof prevSnapIndex !== "undefined") prevSnap = isFreeMode ? snapGrid[prevSnapIndex] : snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
	}
	let prevIndex = 0;
	if (typeof prevSnap !== "undefined") {
		prevIndex = slidesGrid.indexOf(prevSnap);
		if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
		if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
			prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
			prevIndex = Math.max(prevIndex, 0);
		}
	}
	if (params.rewind && swiper.isBeginning) {
		const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
		return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
	} else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
		requestAnimationFrame(() => {
			swiper.slideTo(prevIndex, speed, runCallbacks, internal);
		});
		return true;
	}
	return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
function slideReset(speed, runCallbacks = true, internal) {
	const swiper = this;
	if (swiper.destroyed) return;
	if (typeof speed === "undefined") speed = swiper.params.speed;
	return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
function slideToClosest(speed, runCallbacks = true, internal, threshold = .5) {
	const swiper = this;
	if (swiper.destroyed) return;
	if (typeof speed === "undefined") speed = swiper.params.speed;
	let index = swiper.activeIndex;
	const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
	const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
	const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
	if (translate >= swiper.snapGrid[snapIndex]) {
		const currentSnap = swiper.snapGrid[snapIndex];
		const nextSnap = swiper.snapGrid[snapIndex + 1];
		if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
	} else {
		const prevSnap = swiper.snapGrid[snapIndex - 1];
		const currentSnap = swiper.snapGrid[snapIndex];
		if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
	}
	index = Math.max(index, 0);
	index = Math.min(index, swiper.slidesGrid.length - 1);
	return swiper.slideTo(index, speed, runCallbacks, internal);
}
function slideToClickedSlide() {
	const swiper = this;
	if (swiper.destroyed) return;
	const { params, slidesEl } = swiper;
	const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
	let slideToIndex = swiper.getSlideIndexWhenGrid(swiper.clickedIndex);
	let realIndex;
	const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
	const isGrid = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
	if (params.loop) {
		if (swiper.animating) return;
		realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
		if (params.centeredSlides) swiper.slideToLoop(realIndex);
		else if (slideToIndex > (isGrid ? (swiper.slides.length - slidesPerView) / 2 - (swiper.params.grid.rows - 1) : swiper.slides.length - slidesPerView)) {
			swiper.loopFix();
			slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
			nextTick(() => {
				swiper.slideTo(slideToIndex);
			});
		} else swiper.slideTo(slideToIndex);
	} else swiper.slideTo(slideToIndex);
}
var slide$1 = {
	slideTo,
	slideToLoop,
	slideNext,
	slidePrev,
	slideReset,
	slideToClosest,
	slideToClickedSlide
};
function loopCreate(slideRealIndex, initial) {
	const swiper = this;
	const { params, slidesEl } = swiper;
	if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
	const initSlides = () => {
		elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`).forEach((el, index) => {
			el.setAttribute("data-swiper-slide-index", index);
		});
	};
	const clearBlankSlides = () => {
		const slides = elementChildren(slidesEl, `.${params.slideBlankClass}`);
		slides.forEach((el) => {
			el.remove();
		});
		if (slides.length > 0) {
			swiper.recalcSlides();
			swiper.updateSlides();
		}
	};
	const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
	if (params.loopAddBlankSlides && (params.slidesPerGroup > 1 || gridEnabled)) clearBlankSlides();
	const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
	const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
	const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
	const addBlankSlides = (amountOfSlides) => {
		for (let i = 0; i < amountOfSlides; i += 1) {
			const slideEl = swiper.isElement ? createElement("swiper-slide", [params.slideBlankClass]) : createElement("div", [params.slideClass, params.slideBlankClass]);
			swiper.slidesEl.append(slideEl);
		}
	};
	if (shouldFillGroup) {
		if (params.loopAddBlankSlides) {
			addBlankSlides(slidesPerGroup - swiper.slides.length % slidesPerGroup);
			swiper.recalcSlides();
			swiper.updateSlides();
		} else showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
		initSlides();
	} else if (shouldFillGrid) {
		if (params.loopAddBlankSlides) {
			addBlankSlides(params.grid.rows - swiper.slides.length % params.grid.rows);
			swiper.recalcSlides();
			swiper.updateSlides();
		} else showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
		initSlides();
	} else initSlides();
	const bothDirections = params.centeredSlides || !!params.slidesOffsetBefore || !!params.slidesOffsetAfter;
	swiper.loopFix({
		slideRealIndex,
		direction: bothDirections ? void 0 : "next",
		initial
	});
}
function loopFix({ slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, initial, byController, byMousewheel } = {}) {
	const swiper = this;
	if (!swiper.params.loop) return;
	swiper.emit("beforeLoopFix");
	const { slides, allowSlidePrev, allowSlideNext, slidesEl, params } = swiper;
	const { centeredSlides, slidesOffsetBefore, slidesOffsetAfter, initialSlide } = params;
	const bothDirections = centeredSlides || !!slidesOffsetBefore || !!slidesOffsetAfter;
	swiper.allowSlidePrev = true;
	swiper.allowSlideNext = true;
	if (swiper.virtual && params.virtual.enabled) {
		if (slideTo) {
			if (!bothDirections && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
			else if (bothDirections && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
			else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
		}
		swiper.allowSlidePrev = allowSlidePrev;
		swiper.allowSlideNext = allowSlideNext;
		swiper.emit("loopFix");
		return;
	}
	let slidesPerView = params.slidesPerView;
	if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic();
	else {
		slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
		if (bothDirections && slidesPerView % 2 === 0) slidesPerView = slidesPerView + 1;
	}
	const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
	let loopedSlides = bothDirections ? Math.max(slidesPerGroup, Math.ceil(slidesPerView / 2)) : slidesPerGroup;
	if (loopedSlides % slidesPerGroup !== 0) loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
	loopedSlides += params.loopAdditionalSlides;
	swiper.loopedSlides = loopedSlides;
	const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
	if (slides.length < slidesPerView + loopedSlides || swiper.params.effect === "cards" && slides.length < slidesPerView + loopedSlides * 2) showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters");
	else if (gridEnabled && params.grid.fill === "row") showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
	const prependSlidesIndexes = [];
	const appendSlidesIndexes = [];
	const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
	const isInitialOverflow = initial && cols - initialSlide < slidesPerView && !bothDirections;
	let activeIndex = isInitialOverflow ? initialSlide : swiper.activeIndex;
	if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(slides.find((el) => el.classList.contains(params.slideActiveClass)));
	else activeIndex = activeSlideIndex;
	const isNext = direction === "next" || !direction;
	const isPrev = direction === "prev" || !direction;
	let slidesPrepended = 0;
	let slidesAppended = 0;
	const activeColIndexWithShift = (gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex) + (bothDirections && typeof setTranslate === "undefined" ? -slidesPerView / 2 + .5 : 0);
	if (activeColIndexWithShift < loopedSlides) {
		slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
		for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
			const index = i - Math.floor(i / cols) * cols;
			if (gridEnabled) {
				const colIndexToPrepend = cols - index - 1;
				for (let i = slides.length - 1; i >= 0; i -= 1) if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
			} else prependSlidesIndexes.push(cols - index - 1);
		}
	} else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
		slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
		if (isInitialOverflow) slidesAppended = Math.max(slidesAppended, slidesPerView - cols + initialSlide + 1);
		for (let i = 0; i < slidesAppended; i += 1) {
			const index = i - Math.floor(i / cols) * cols;
			if (gridEnabled) slides.forEach((slide, slideIndex) => {
				if (slide.column === index) appendSlidesIndexes.push(slideIndex);
			});
			else appendSlidesIndexes.push(index);
		}
	}
	swiper.__preventObserver__ = true;
	requestAnimationFrame(() => {
		swiper.__preventObserver__ = false;
	});
	if (swiper.params.effect === "cards" && slides.length < slidesPerView + loopedSlides * 2) {
		if (appendSlidesIndexes.includes(activeSlideIndex)) appendSlidesIndexes.splice(appendSlidesIndexes.indexOf(activeSlideIndex), 1);
		if (prependSlidesIndexes.includes(activeSlideIndex)) prependSlidesIndexes.splice(prependSlidesIndexes.indexOf(activeSlideIndex), 1);
	}
	if (isPrev) prependSlidesIndexes.forEach((index) => {
		slides[index].swiperLoopMoveDOM = true;
		slidesEl.prepend(slides[index]);
		slides[index].swiperLoopMoveDOM = false;
	});
	if (isNext) appendSlidesIndexes.forEach((index) => {
		slides[index].swiperLoopMoveDOM = true;
		slidesEl.append(slides[index]);
		slides[index].swiperLoopMoveDOM = false;
	});
	swiper.recalcSlides();
	if (params.slidesPerView === "auto") swiper.updateSlides();
	else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) swiper.slides.forEach((slide, slideIndex) => {
		swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
	});
	if (params.watchSlidesProgress) swiper.updateSlidesOffset();
	if (slideTo) {
		if (prependSlidesIndexes.length > 0 && isPrev) {
			if (typeof slideRealIndex === "undefined") {
				const currentSlideTranslate = swiper.slidesGrid[activeIndex];
				const diff = swiper.slidesGrid[activeIndex + slidesPrepended] - currentSlideTranslate;
				if (byMousewheel) swiper.setTranslate(swiper.translate - diff);
				else {
					swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
					if (setTranslate) {
						swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
						swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
					}
				}
			} else if (setTranslate) {
				const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
				swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
				swiper.touchEventsData.currentTranslate = swiper.translate;
			}
		} else if (appendSlidesIndexes.length > 0 && isNext) if (typeof slideRealIndex === "undefined") {
			const currentSlideTranslate = swiper.slidesGrid[activeIndex];
			const diff = swiper.slidesGrid[activeIndex - slidesAppended] - currentSlideTranslate;
			if (byMousewheel) swiper.setTranslate(swiper.translate - diff);
			else {
				swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
				if (setTranslate) {
					swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
					swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
				}
			}
		} else {
			const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
			swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
		}
	}
	swiper.allowSlidePrev = allowSlidePrev;
	swiper.allowSlideNext = allowSlideNext;
	if (swiper.controller && swiper.controller.control && !byController) {
		const loopParams = {
			slideRealIndex,
			direction,
			setTranslate,
			activeSlideIndex,
			byController: true
		};
		if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c) => {
			if (!c.destroyed && c.params.loop) c.loopFix({
				...loopParams,
				slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
			});
		});
		else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix({
			...loopParams,
			slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
		});
	}
	swiper.emit("loopFix");
}
function loopDestroy() {
	const swiper = this;
	const { params, slidesEl } = swiper;
	if (!params.loop || !slidesEl || swiper.virtual && swiper.params.virtual.enabled) return;
	swiper.recalcSlides();
	const newSlidesOrder = [];
	swiper.slides.forEach((slideEl) => {
		const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
		newSlidesOrder[index] = slideEl;
	});
	swiper.slides.forEach((slideEl) => {
		slideEl.removeAttribute("data-swiper-slide-index");
	});
	newSlidesOrder.forEach((slideEl) => {
		slidesEl.append(slideEl);
	});
	swiper.recalcSlides();
	swiper.slideTo(swiper.realIndex, 0);
}
var loop = {
	loopCreate,
	loopFix,
	loopDestroy
};
function setGrabCursor(moving) {
	const swiper = this;
	if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
	const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
	if (swiper.isElement) swiper.__preventObserver__ = true;
	el.style.cursor = "move";
	el.style.cursor = moving ? "grabbing" : "grab";
	if (swiper.isElement) requestAnimationFrame(() => {
		swiper.__preventObserver__ = false;
	});
}
function unsetGrabCursor() {
	const swiper = this;
	if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
	if (swiper.isElement) swiper.__preventObserver__ = true;
	swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
	if (swiper.isElement) requestAnimationFrame(() => {
		swiper.__preventObserver__ = false;
	});
}
var grabCursor = {
	setGrabCursor,
	unsetGrabCursor
};
function closestElement(selector, base = this) {
	function __closestFrom(el) {
		if (!el || el === getDocument() || el === getWindow()) return null;
		if (el.assignedSlot) el = el.assignedSlot;
		const found = el.closest(selector);
		if (!found && !el.getRootNode) return null;
		return found || __closestFrom(el.getRootNode().host);
	}
	return __closestFrom(base);
}
function preventEdgeSwipe(swiper, event, startX) {
	const window = getWindow();
	const { params } = swiper;
	const edgeSwipeDetection = params.edgeSwipeDetection;
	const edgeSwipeThreshold = params.edgeSwipeThreshold;
	if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
		if (edgeSwipeDetection === "prevent") {
			event.preventDefault();
			return true;
		}
		return false;
	}
	return true;
}
function onTouchStart(event) {
	const swiper = this;
	const document = getDocument();
	let e = event;
	if (e.originalEvent) e = e.originalEvent;
	const data = swiper.touchEventsData;
	if (e.type === "pointerdown") {
		if (data.pointerId !== null && data.pointerId !== e.pointerId) return;
		data.pointerId = e.pointerId;
	} else if (e.type === "touchstart" && e.targetTouches.length === 1) data.touchId = e.targetTouches[0].identifier;
	if (e.type === "touchstart") {
		preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
		return;
	}
	const { params, touches, enabled } = swiper;
	if (!enabled) return;
	if (!params.simulateTouch && e.pointerType === "mouse") return;
	if (swiper.animating && params.preventInteractionOnTransition) return;
	if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
	let targetEl = e.target;
	if (params.touchEventsTarget === "wrapper") {
		if (!elementIsChildOf(targetEl, swiper.wrapperEl)) return;
	}
	if ("which" in e && e.which === 3) return;
	if ("button" in e && e.button > 0) return;
	if (data.isTouched && data.isMoved) return;
	const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
	const eventPath = e.composedPath ? e.composedPath() : e.path;
	if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
	const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
	const isTargetShadow = !!(e.target && e.target.shadowRoot);
	if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
		swiper.allowClick = true;
		return;
	}
	if (params.swipeHandler) {
		if (!targetEl.closest(params.swipeHandler)) return;
	}
	touches.currentX = e.pageX;
	touches.currentY = e.pageY;
	const startX = touches.currentX;
	const startY = touches.currentY;
	if (!preventEdgeSwipe(swiper, e, startX)) return;
	Object.assign(data, {
		isTouched: true,
		isMoved: false,
		allowTouchCallbacks: true,
		isScrolling: void 0,
		startMoving: void 0
	});
	touches.startX = startX;
	touches.startY = startY;
	data.touchStartTime = now();
	swiper.allowClick = true;
	swiper.updateSize();
	swiper.swipeDirection = void 0;
	if (params.threshold > 0) data.allowThresholdMove = false;
	let preventDefault = true;
	if (targetEl.matches(data.focusableElements)) {
		preventDefault = false;
		if (targetEl.nodeName === "SELECT") data.isTouched = false;
	}
	if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl && (e.pointerType === "mouse" || e.pointerType !== "mouse" && !targetEl.matches(data.focusableElements))) document.activeElement.blur();
	const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
	if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
	if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
	swiper.emit("touchStart", e);
}
function onTouchMove(event) {
	const document = getDocument();
	const swiper = this;
	const data = swiper.touchEventsData;
	const { params, touches, rtlTranslate: rtl, enabled } = swiper;
	if (!enabled) return;
	if (!params.simulateTouch && event.pointerType === "mouse") return;
	let e = event;
	if (e.originalEvent) e = e.originalEvent;
	if (e.type === "pointermove") {
		if (data.touchId !== null) return;
		if (e.pointerId !== data.pointerId) return;
	}
	let targetTouch;
	if (e.type === "touchmove") {
		targetTouch = [...e.changedTouches].find((t) => t.identifier === data.touchId);
		if (!targetTouch || targetTouch.identifier !== data.touchId) return;
	} else targetTouch = e;
	if (!data.isTouched) {
		if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
		return;
	}
	const pageX = targetTouch.pageX;
	const pageY = targetTouch.pageY;
	if (e.preventedByNestedSwiper) {
		touches.startX = pageX;
		touches.startY = pageY;
		return;
	}
	if (!swiper.allowTouchMove) {
		if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
		if (data.isTouched) {
			Object.assign(touches, {
				startX: pageX,
				startY: pageY,
				currentX: pageX,
				currentY: pageY
			});
			data.touchStartTime = now();
		}
		return;
	}
	if (params.touchReleaseOnEdges && !params.loop) {
		if (swiper.isVertical()) {
			if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
				data.isTouched = false;
				data.isMoved = false;
				return;
			}
		} else if (rtl && (pageX > touches.startX && -swiper.translate <= swiper.maxTranslate() || pageX < touches.startX && -swiper.translate >= swiper.minTranslate())) return;
		else if (!rtl && (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate())) return;
	}
	if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== e.target && e.pointerType !== "mouse") document.activeElement.blur();
	if (document.activeElement) {
		if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
			data.isMoved = true;
			swiper.allowClick = false;
			return;
		}
	}
	if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
	touches.previousX = touches.currentX;
	touches.previousY = touches.currentY;
	touches.currentX = pageX;
	touches.currentY = pageY;
	const diffX = touches.currentX - touches.startX;
	const diffY = touches.currentY - touches.startY;
	if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
	if (typeof data.isScrolling === "undefined") {
		let touchAngle;
		if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false;
		else if (diffX * diffX + diffY * diffY >= 25) {
			touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
			data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
		}
	}
	if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
	if (typeof data.startMoving === "undefined") {
		if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
	}
	if (data.isScrolling || e.type === "touchmove" && data.preventTouchMoveFromPointerMove) {
		data.isTouched = false;
		return;
	}
	if (!data.startMoving) return;
	swiper.allowClick = false;
	if (!params.cssMode && e.cancelable) e.preventDefault();
	if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
	let diff = swiper.isHorizontal() ? diffX : diffY;
	let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
	if (params.oneWayMovement) {
		diff = Math.abs(diff) * (rtl ? 1 : -1);
		touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
	}
	touches.diff = diff;
	diff *= params.touchRatio;
	if (rtl) {
		diff = -diff;
		touchesDiff = -touchesDiff;
	}
	const prevTouchesDirection = swiper.touchesDirection;
	swiper.swipeDirection = diff > 0 ? "prev" : "next";
	swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
	const isLoop = swiper.params.loop && !params.cssMode;
	const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
	if (!data.isMoved) {
		if (isLoop && allowLoopFix) swiper.loopFix({ direction: swiper.swipeDirection });
		data.startTranslate = swiper.getTranslate();
		swiper.setTransition(0);
		if (swiper.animating) {
			const evt = new window.CustomEvent("transitionend", {
				bubbles: true,
				cancelable: true,
				detail: { bySwiperTouchMove: true }
			});
			swiper.wrapperEl.dispatchEvent(evt);
		}
		data.allowMomentumBounce = false;
		if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
		swiper.emit("sliderFirstMove", e);
	}
	(/* @__PURE__ */ new Date()).getTime();
	if (params._loopSwapReset !== false && data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
		Object.assign(touches, {
			startX: pageX,
			startY: pageY,
			currentX: pageX,
			currentY: pageY,
			startTranslate: data.currentTranslate
		});
		data.loopSwapReset = true;
		data.startTranslate = data.currentTranslate;
		return;
	}
	swiper.emit("sliderMove", e);
	data.isMoved = true;
	data.currentTranslate = diff + data.startTranslate;
	let disableParentSwiper = true;
	let resistanceRatio = params.resistanceRatio;
	if (params.touchReleaseOnEdges) resistanceRatio = 0;
	if (diff > 0) {
		if (isLoop && allowLoopFix && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) swiper.loopFix({
			direction: "prev",
			setTranslate: true,
			activeSlideIndex: 0
		});
		if (data.currentTranslate > swiper.minTranslate()) {
			disableParentSwiper = false;
			if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
		}
	} else if (diff < 0) {
		if (isLoop && allowLoopFix && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) swiper.loopFix({
			direction: "next",
			setTranslate: true,
			activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
		});
		if (data.currentTranslate < swiper.maxTranslate()) {
			disableParentSwiper = false;
			if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
		}
	}
	if (disableParentSwiper) e.preventedByNestedSwiper = true;
	if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
	if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
	if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
	if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
		if (!data.allowThresholdMove) {
			data.allowThresholdMove = true;
			touches.startX = touches.currentX;
			touches.startY = touches.currentY;
			data.currentTranslate = data.startTranslate;
			touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
			return;
		}
	} else {
		data.currentTranslate = data.startTranslate;
		return;
	}
	if (!params.followFinger || params.cssMode) return;
	if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
		swiper.updateActiveIndex();
		swiper.updateSlidesClasses();
	}
	if (params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
	swiper.updateProgress(data.currentTranslate);
	swiper.setTranslate(data.currentTranslate);
}
function onTouchEnd(event) {
	const swiper = this;
	const data = swiper.touchEventsData;
	let e = event;
	if (e.originalEvent) e = e.originalEvent;
	let targetTouch;
	if (!(e.type === "touchend" || e.type === "touchcancel")) {
		if (data.touchId !== null) return;
		if (e.pointerId !== data.pointerId) return;
		targetTouch = e;
	} else {
		targetTouch = [...e.changedTouches].find((t) => t.identifier === data.touchId);
		if (!targetTouch || targetTouch.identifier !== data.touchId) return;
	}
	if ([
		"pointercancel",
		"pointerout",
		"pointerleave",
		"contextmenu"
	].includes(e.type)) {
		if (!(["pointercancel", "contextmenu"].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView))) return;
	}
	data.pointerId = null;
	data.touchId = null;
	const { params, touches, rtlTranslate: rtl, slidesGrid, enabled } = swiper;
	if (!enabled) return;
	if (!params.simulateTouch && e.pointerType === "mouse") return;
	if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
	data.allowTouchCallbacks = false;
	if (!data.isTouched) {
		if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
		data.isMoved = false;
		data.startMoving = false;
		return;
	}
	if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
	const touchEndTime = now();
	const timeDiff = touchEndTime - data.touchStartTime;
	if (swiper.allowClick) {
		const pathTree = e.path || e.composedPath && e.composedPath();
		swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
		swiper.emit("tap click", e);
		if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
	}
	data.lastClickTime = now();
	nextTick(() => {
		if (!swiper.destroyed) swiper.allowClick = true;
	});
	if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
		data.isTouched = false;
		data.isMoved = false;
		data.startMoving = false;
		return;
	}
	data.isTouched = false;
	data.isMoved = false;
	data.startMoving = false;
	let currentPos;
	if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate;
	else currentPos = -data.currentTranslate;
	if (params.cssMode) return;
	if (params.freeMode && params.freeMode.enabled) {
		swiper.freeMode.onTouchEnd({ currentPos });
		return;
	}
	const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
	let stopIndex = 0;
	let groupSize = swiper.slidesSizesGrid[0];
	for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
		const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
		if (typeof slidesGrid[i + increment] !== "undefined") {
			if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
				stopIndex = i;
				groupSize = slidesGrid[i + increment] - slidesGrid[i];
			}
		} else if (swipeToLast || currentPos >= slidesGrid[i]) {
			stopIndex = i;
			groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
		}
	}
	let rewindFirstIndex = null;
	let rewindLastIndex = null;
	if (params.rewind) {
		if (swiper.isBeginning) rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
		else if (swiper.isEnd) rewindFirstIndex = 0;
	}
	const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
	const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
	if (timeDiff > params.longSwipesMs) {
		if (!params.longSwipes) {
			swiper.slideTo(swiper.activeIndex);
			return;
		}
		if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
		else swiper.slideTo(stopIndex);
		if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);
		else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex);
		else swiper.slideTo(stopIndex);
	} else {
		if (!params.shortSwipes) {
			swiper.slideTo(swiper.activeIndex);
			return;
		}
		if (!(swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl))) {
			if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
			if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
		} else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment);
		else swiper.slideTo(stopIndex);
	}
}
function onResize() {
	const swiper = this;
	const { params, el } = swiper;
	if (el && el.offsetWidth === 0) return;
	if (params.breakpoints) swiper.setBreakpoint();
	const { allowSlideNext, allowSlidePrev, snapGrid } = swiper;
	const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
	swiper.allowSlideNext = true;
	swiper.allowSlidePrev = true;
	swiper.updateSize();
	swiper.updateSlides();
	swiper.updateSlidesClasses();
	const isVirtualLoop = isVirtual && params.loop;
	if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
		const slides = isVirtual ? swiper.virtual.slides : swiper.slides;
		swiper.slideTo(slides.length - 1, 0, false, true);
	} else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true);
	else swiper.slideTo(swiper.activeIndex, 0, false, true);
	if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
		clearTimeout(swiper.autoplay.resizeTimeout);
		swiper.autoplay.resizeTimeout = setTimeout(() => {
			if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
		}, 500);
	}
	swiper.allowSlidePrev = allowSlidePrev;
	swiper.allowSlideNext = allowSlideNext;
	if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
}
function onClick(e) {
	const swiper = this;
	if (!swiper.enabled) return;
	if (!swiper.allowClick) {
		if (swiper.params.preventClicks) e.preventDefault();
		if (swiper.params.preventClicksPropagation && swiper.animating) {
			e.stopPropagation();
			e.stopImmediatePropagation();
		}
	}
}
function onScroll() {
	const swiper = this;
	const { wrapperEl, rtlTranslate, enabled } = swiper;
	if (!enabled) return;
	swiper.previousTranslate = swiper.translate;
	if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft;
	else swiper.translate = -wrapperEl.scrollTop;
	if (swiper.translate === 0) swiper.translate = 0;
	swiper.updateActiveIndex();
	swiper.updateSlidesClasses();
	let newProgress;
	const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
	if (translatesDiff === 0) newProgress = 0;
	else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
	if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
	swiper.emit("setTranslate", swiper.translate, false);
}
function onLoad(e) {
	const swiper = this;
	processLazyPreloader(swiper, e.target);
	if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;
	swiper.update();
}
function onDocumentTouchStart() {
	const swiper = this;
	if (swiper.documentTouchHandlerProceeded) return;
	swiper.documentTouchHandlerProceeded = true;
	if (swiper.params.touchReleaseOnEdges) swiper.el.style.touchAction = "auto";
}
var events = (swiper, method) => {
	const document = getDocument();
	const { params, el, wrapperEl, device } = swiper;
	const capture = !!params.nested;
	const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
	const swiperMethod = method;
	if (!el || typeof el === "string") return;
	document[domMethod]("touchstart", swiper.onDocumentTouchStart, {
		passive: false,
		capture
	});
	el[domMethod]("touchstart", swiper.onTouchStart, { passive: false });
	el[domMethod]("pointerdown", swiper.onTouchStart, { passive: false });
	document[domMethod]("touchmove", swiper.onTouchMove, {
		passive: false,
		capture
	});
	document[domMethod]("pointermove", swiper.onTouchMove, {
		passive: false,
		capture
	});
	document[domMethod]("touchend", swiper.onTouchEnd, { passive: true });
	document[domMethod]("pointerup", swiper.onTouchEnd, { passive: true });
	document[domMethod]("pointercancel", swiper.onTouchEnd, { passive: true });
	document[domMethod]("touchcancel", swiper.onTouchEnd, { passive: true });
	document[domMethod]("pointerout", swiper.onTouchEnd, { passive: true });
	document[domMethod]("pointerleave", swiper.onTouchEnd, { passive: true });
	document[domMethod]("contextmenu", swiper.onTouchEnd, { passive: true });
	if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
	if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
	if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
	else swiper[swiperMethod]("observerUpdate", onResize, true);
	el[domMethod]("load", swiper.onLoad, { capture: true });
};
function attachEvents() {
	const swiper = this;
	const { params } = swiper;
	swiper.onTouchStart = onTouchStart.bind(swiper);
	swiper.onTouchMove = onTouchMove.bind(swiper);
	swiper.onTouchEnd = onTouchEnd.bind(swiper);
	swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
	if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
	swiper.onClick = onClick.bind(swiper);
	swiper.onLoad = onLoad.bind(swiper);
	events(swiper, "on");
}
function detachEvents() {
	events(this, "off");
}
var events$1 = {
	attachEvents,
	detachEvents
};
var isGridEnabled = (swiper, params) => {
	return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
	const swiper = this;
	const { realIndex, initialized, params, el } = swiper;
	const breakpoints = params.breakpoints;
	if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
	const document = getDocument();
	const breakpointsBase = params.breakpointsBase === "window" || !params.breakpointsBase ? params.breakpointsBase : "container";
	const breakpointContainer = ["window", "container"].includes(params.breakpointsBase) || !params.breakpointsBase ? swiper.el : document.querySelector(params.breakpointsBase);
	const breakpoint = swiper.getBreakpoint(breakpoints, breakpointsBase, breakpointContainer);
	if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
	const breakpointParams = (breakpoint in breakpoints ? breakpoints[breakpoint] : void 0) || swiper.originalParams;
	const wasMultiRow = isGridEnabled(swiper, params);
	const isMultiRow = isGridEnabled(swiper, breakpointParams);
	const wasGrabCursor = swiper.params.grabCursor;
	const isGrabCursor = breakpointParams.grabCursor;
	const wasEnabled = params.enabled;
	if (wasMultiRow && !isMultiRow) {
		el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
		swiper.emitContainerClasses();
	} else if (!wasMultiRow && isMultiRow) {
		el.classList.add(`${params.containerModifierClass}grid`);
		if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
		swiper.emitContainerClasses();
	}
	if (wasGrabCursor && !isGrabCursor) swiper.unsetGrabCursor();
	else if (!wasGrabCursor && isGrabCursor) swiper.setGrabCursor();
	[
		"navigation",
		"pagination",
		"scrollbar"
	].forEach((prop) => {
		if (typeof breakpointParams[prop] === "undefined") return;
		const wasModuleEnabled = params[prop] && params[prop].enabled;
		const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
		if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
		if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
	});
	const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
	const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
	const wasLoop = params.loop;
	if (directionChanged && initialized) swiper.changeDirection();
	extend$1(swiper.params, breakpointParams);
	const isEnabled = swiper.params.enabled;
	const hasLoop = swiper.params.loop;
	Object.assign(swiper, {
		allowTouchMove: swiper.params.allowTouchMove,
		allowSlideNext: swiper.params.allowSlideNext,
		allowSlidePrev: swiper.params.allowSlidePrev
	});
	if (wasEnabled && !isEnabled) swiper.disable();
	else if (!wasEnabled && isEnabled) swiper.enable();
	swiper.currentBreakpoint = breakpoint;
	swiper.emit("_beforeBreakpoint", breakpointParams);
	if (initialized) {
		if (needsReLoop) {
			swiper.loopDestroy();
			swiper.loopCreate(realIndex);
			swiper.updateSlides();
		} else if (!wasLoop && hasLoop) {
			swiper.loopCreate(realIndex);
			swiper.updateSlides();
		} else if (wasLoop && !hasLoop) swiper.loopDestroy();
	}
	swiper.emit("breakpoint", breakpointParams);
}
function getBreakpoint(breakpoints, base = "window", containerEl) {
	if (!breakpoints || base === "container" && !containerEl) return void 0;
	let breakpoint = false;
	const window = getWindow();
	const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
	const points = Object.keys(breakpoints).map((point) => {
		if (typeof point === "string" && point.indexOf("@") === 0) return {
			value: currentHeight * parseFloat(point.substr(1)),
			point
		};
		return {
			value: point,
			point
		};
	});
	points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
	for (let i = 0; i < points.length; i += 1) {
		const { point, value } = points[i];
		if (base === "window") {
			if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
		} else if (value <= containerEl.clientWidth) breakpoint = point;
	}
	return breakpoint || "max";
}
var breakpoints = {
	setBreakpoint,
	getBreakpoint
};
function prepareClasses(entries, prefix) {
	const resultClasses = [];
	entries.forEach((item) => {
		if (typeof item === "object") Object.keys(item).forEach((classNames) => {
			if (item[classNames]) resultClasses.push(prefix + classNames);
		});
		else if (typeof item === "string") resultClasses.push(prefix + item);
	});
	return resultClasses;
}
function addClasses() {
	const swiper = this;
	const { classNames, params, rtl, el, device } = swiper;
	const suffixes = prepareClasses([
		"initialized",
		params.direction,
		{ "free-mode": swiper.params.freeMode && params.freeMode.enabled },
		{ "autoheight": params.autoHeight },
		{ "rtl": rtl },
		{ "grid": params.grid && params.grid.rows > 1 },
		{ "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column" },
		{ "android": device.android },
		{ "ios": device.ios },
		{ "css-mode": params.cssMode },
		{ "centered": params.cssMode && params.centeredSlides },
		{ "watch-progress": params.watchSlidesProgress }
	], params.containerModifierClass);
	classNames.push(...suffixes);
	el.classList.add(...classNames);
	swiper.emitContainerClasses();
}
function removeClasses() {
	const swiper = this;
	const { el, classNames } = swiper;
	if (!el || typeof el === "string") return;
	el.classList.remove(...classNames);
	swiper.emitContainerClasses();
}
var classes = {
	addClasses,
	removeClasses
};
function checkOverflow() {
	const swiper = this;
	const { isLocked: wasLocked, params } = swiper;
	const { slidesOffsetBefore } = params;
	if (slidesOffsetBefore) {
		const lastSlideIndex = swiper.slides.length - 1;
		const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
		swiper.isLocked = swiper.size > lastSlideRightEdge;
	} else swiper.isLocked = swiper.snapGrid.length === 1;
	if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
	if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
	if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
	if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
}
var checkOverflow$1 = { checkOverflow };
var defaults = {
	init: true,
	direction: "horizontal",
	oneWayMovement: false,
	swiperElementNodeName: "SWIPER-CONTAINER",
	touchEventsTarget: "wrapper",
	initialSlide: 0,
	speed: 300,
	cssMode: false,
	updateOnWindowResize: true,
	resizeObserver: true,
	nested: false,
	createElements: false,
	eventsPrefix: "swiper",
	enabled: true,
	focusableElements: "input, select, option, textarea, button, video, label",
	width: null,
	height: null,
	preventInteractionOnTransition: false,
	userAgent: null,
	url: null,
	edgeSwipeDetection: false,
	edgeSwipeThreshold: 20,
	autoHeight: false,
	setWrapperSize: false,
	virtualTranslate: false,
	effect: "slide",
	breakpoints: void 0,
	breakpointsBase: "window",
	spaceBetween: 0,
	slidesPerView: 1,
	slidesPerGroup: 1,
	slidesPerGroupSkip: 0,
	slidesPerGroupAuto: false,
	centeredSlides: false,
	centeredSlidesBounds: false,
	slidesOffsetBefore: 0,
	slidesOffsetAfter: 0,
	normalizeSlideIndex: true,
	centerInsufficientSlides: false,
	snapToSlideEdge: false,
	watchOverflow: true,
	roundLengths: false,
	touchRatio: 1,
	touchAngle: 45,
	simulateTouch: true,
	shortSwipes: true,
	longSwipes: true,
	longSwipesRatio: .5,
	longSwipesMs: 300,
	followFinger: true,
	allowTouchMove: true,
	threshold: 5,
	touchMoveStopPropagation: false,
	touchStartPreventDefault: true,
	touchStartForcePreventDefault: false,
	touchReleaseOnEdges: false,
	uniqueNavElements: true,
	resistance: true,
	resistanceRatio: .85,
	watchSlidesProgress: false,
	grabCursor: false,
	preventClicks: true,
	preventClicksPropagation: true,
	slideToClickedSlide: false,
	loop: false,
	loopAddBlankSlides: true,
	loopAdditionalSlides: 0,
	loopPreventsSliding: true,
	rewind: false,
	allowSlidePrev: true,
	allowSlideNext: true,
	swipeHandler: null,
	noSwiping: true,
	noSwipingClass: "swiper-no-swiping",
	noSwipingSelector: null,
	passiveListeners: true,
	maxBackfaceHiddenSlides: 10,
	containerModifierClass: "swiper-",
	slideClass: "swiper-slide",
	slideBlankClass: "swiper-slide-blank",
	slideActiveClass: "swiper-slide-active",
	slideVisibleClass: "swiper-slide-visible",
	slideFullyVisibleClass: "swiper-slide-fully-visible",
	slideNextClass: "swiper-slide-next",
	slidePrevClass: "swiper-slide-prev",
	wrapperClass: "swiper-wrapper",
	lazyPreloaderClass: "swiper-lazy-preloader",
	lazyPreloadPrevNext: 0,
	runCallbacksOnInit: true,
	_emitClasses: false
};
function moduleExtendParams(params, allModulesParams) {
	return function extendParams(obj = {}) {
		const moduleParamName = Object.keys(obj)[0];
		const moduleParams = obj[moduleParamName];
		if (typeof moduleParams !== "object" || moduleParams === null) {
			extend$1(allModulesParams, obj);
			return;
		}
		if (params[moduleParamName] === true) params[moduleParamName] = { enabled: true };
		if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) params[moduleParamName].auto = true;
		if (["pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) params[moduleParamName].auto = true;
		if (!(moduleParamName in params && "enabled" in moduleParams)) {
			extend$1(allModulesParams, obj);
			return;
		}
		if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
		if (!params[moduleParamName]) params[moduleParamName] = { enabled: false };
		extend$1(allModulesParams, obj);
	};
}
var prototypes = {
	eventsEmitter,
	update,
	translate,
	transition,
	slide: slide$1,
	loop,
	grabCursor,
	events: events$1,
	breakpoints,
	checkOverflow: checkOverflow$1,
	classes
};
var extendedDefaults = {};
var Swiper$1 = class Swiper$1 {
	constructor(...args) {
		let el;
		let params;
		if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0];
		else [el, params] = args;
		if (!params) params = {};
		params = extend$1({}, params);
		if (el && !params.el) params.el = el;
		const document = getDocument();
		if (params.el && typeof params.el === "string" && document.querySelectorAll(params.el).length > 1) {
			const swipers = [];
			document.querySelectorAll(params.el).forEach((containerEl) => {
				const newParams = extend$1({}, params, { el: containerEl });
				swipers.push(new Swiper$1(newParams));
			});
			return swipers;
		}
		const swiper = this;
		swiper.__swiper__ = true;
		swiper.support = getSupport();
		swiper.device = getDevice({ userAgent: params.userAgent });
		swiper.browser = getBrowser();
		swiper.eventsListeners = {};
		swiper.eventsAnyListeners = [];
		swiper.modules = [...swiper.__modules__];
		if (params.modules && Array.isArray(params.modules)) params.modules.forEach((mod) => {
			if (typeof mod === "function" && swiper.modules.indexOf(mod) < 0) swiper.modules.push(mod);
		});
		const allModulesParams = {};
		swiper.modules.forEach((mod) => {
			mod({
				params,
				swiper,
				extendParams: moduleExtendParams(params, allModulesParams),
				on: swiper.on.bind(swiper),
				once: swiper.once.bind(swiper),
				off: swiper.off.bind(swiper),
				emit: swiper.emit.bind(swiper)
			});
		});
		swiper.params = extend$1({}, extend$1({}, defaults, allModulesParams), extendedDefaults, params);
		swiper.originalParams = extend$1({}, swiper.params);
		swiper.passedParams = extend$1({}, params);
		if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName) => {
			swiper.on(eventName, swiper.params.on[eventName]);
		});
		if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
		Object.assign(swiper, {
			enabled: swiper.params.enabled,
			el,
			classNames: [],
			slides: [],
			slidesGrid: [],
			snapGrid: [],
			slidesSizesGrid: [],
			isHorizontal() {
				return swiper.params.direction === "horizontal";
			},
			isVertical() {
				return swiper.params.direction === "vertical";
			},
			activeIndex: 0,
			realIndex: 0,
			isBeginning: true,
			isEnd: false,
			translate: 0,
			previousTranslate: 0,
			progress: 0,
			velocity: 0,
			animating: false,
			cssOverflowAdjustment() {
				return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
			},
			allowSlideNext: swiper.params.allowSlideNext,
			allowSlidePrev: swiper.params.allowSlidePrev,
			touchEventsData: {
				isTouched: void 0,
				isMoved: void 0,
				allowTouchCallbacks: void 0,
				touchStartTime: void 0,
				isScrolling: void 0,
				currentTranslate: void 0,
				startTranslate: void 0,
				allowThresholdMove: void 0,
				focusableElements: swiper.params.focusableElements,
				lastClickTime: 0,
				clickTimeout: void 0,
				velocities: [],
				allowMomentumBounce: void 0,
				startMoving: void 0,
				pointerId: null,
				touchId: null
			},
			allowClick: true,
			allowTouchMove: swiper.params.allowTouchMove,
			touches: {
				startX: 0,
				startY: 0,
				currentX: 0,
				currentY: 0,
				diff: 0
			},
			imagesToLoad: [],
			imagesLoaded: 0
		});
		swiper.emit("_swiper");
		if (swiper.params.init) swiper.init();
		return swiper;
	}
	getDirectionLabel(property) {
		if (this.isHorizontal()) return property;
		return {
			"width": "height",
			"margin-top": "margin-left",
			"margin-bottom ": "margin-right",
			"margin-left": "margin-top",
			"margin-right": "margin-bottom",
			"padding-left": "padding-top",
			"padding-right": "padding-bottom",
			"marginRight": "marginBottom"
		}[property];
	}
	getSlideIndex(slideEl) {
		const { slidesEl, params } = this;
		const firstSlideIndex = elementIndex(elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`)[0]);
		return elementIndex(slideEl) - firstSlideIndex;
	}
	getSlideIndexByData(index) {
		return this.getSlideIndex(this.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === index));
	}
	getSlideIndexWhenGrid(index) {
		if (this.grid && this.params.grid && this.params.grid.rows > 1) {
			if (this.params.grid.fill === "column") index = Math.floor(index / this.params.grid.rows);
			else if (this.params.grid.fill === "row") index = index % Math.ceil(this.slides.length / this.params.grid.rows);
		}
		return index;
	}
	recalcSlides() {
		const swiper = this;
		const { slidesEl, params } = swiper;
		swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
	}
	enable() {
		const swiper = this;
		if (swiper.enabled) return;
		swiper.enabled = true;
		if (swiper.params.grabCursor) swiper.setGrabCursor();
		swiper.emit("enable");
	}
	disable() {
		const swiper = this;
		if (!swiper.enabled) return;
		swiper.enabled = false;
		if (swiper.params.grabCursor) swiper.unsetGrabCursor();
		swiper.emit("disable");
	}
	setProgress(progress, speed) {
		const swiper = this;
		progress = Math.min(Math.max(progress, 0), 1);
		const min = swiper.minTranslate();
		const current = (swiper.maxTranslate() - min) * progress + min;
		swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
		swiper.updateActiveIndex();
		swiper.updateSlidesClasses();
	}
	emitContainerClasses() {
		const swiper = this;
		if (!swiper.params._emitClasses || !swiper.el) return;
		const cls = swiper.el.className.split(" ").filter((className) => {
			return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
		});
		swiper.emit("_containerClasses", cls.join(" "));
	}
	getSlideClasses(slideEl) {
		const swiper = this;
		if (swiper.destroyed) return "";
		return slideEl.className.split(" ").filter((className) => {
			return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
		}).join(" ");
	}
	emitSlidesClasses() {
		const swiper = this;
		if (!swiper.params._emitClasses || !swiper.el) return;
		const updates = [];
		swiper.slides.forEach((slideEl) => {
			const classNames = swiper.getSlideClasses(slideEl);
			updates.push({
				slideEl,
				classNames
			});
			swiper.emit("_slideClass", slideEl, classNames);
		});
		swiper.emit("_slideClasses", updates);
	}
	slidesPerViewDynamic(view = "current", exact = false) {
		const { params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex } = this;
		let spv = 1;
		if (typeof params.slidesPerView === "number") return params.slidesPerView;
		if (params.centeredSlides) {
			let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
			let breakLoop;
			for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
				slideSize += Math.ceil(slides[i].swiperSlideSize);
				spv += 1;
				if (slideSize > swiperSize) breakLoop = true;
			}
			for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
				slideSize += slides[i].swiperSlideSize;
				spv += 1;
				if (slideSize > swiperSize) breakLoop = true;
			}
		} else if (view === "current") {
			for (let i = activeIndex + 1; i < slides.length; i += 1) if (exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize) spv += 1;
		} else for (let i = activeIndex - 1; i >= 0; i -= 1) if (slidesGrid[activeIndex] - slidesGrid[i] < swiperSize) spv += 1;
		return spv;
	}
	update() {
		const swiper = this;
		if (!swiper || swiper.destroyed) return;
		const { snapGrid, params } = swiper;
		if (params.breakpoints) swiper.setBreakpoint();
		[...swiper.el.querySelectorAll("[loading=\"lazy\"]")].forEach((imageEl) => {
			if (imageEl.complete) processLazyPreloader(swiper, imageEl);
		});
		swiper.updateSize();
		swiper.updateSlides();
		swiper.updateProgress();
		swiper.updateSlidesClasses();
		function setTranslate() {
			const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
			const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
			swiper.setTranslate(newTranslate);
			swiper.updateActiveIndex();
			swiper.updateSlidesClasses();
		}
		let translated;
		if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
			setTranslate();
			if (params.autoHeight) swiper.updateAutoHeight();
		} else {
			if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
				const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
				translated = swiper.slideTo(slides.length - 1, 0, false, true);
			} else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
			if (!translated) setTranslate();
		}
		if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
		swiper.emit("update");
	}
	changeDirection(newDirection, needUpdate = true) {
		const swiper = this;
		const currentDirection = swiper.params.direction;
		if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
		if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
		swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
		swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
		swiper.emitContainerClasses();
		swiper.params.direction = newDirection;
		swiper.slides.forEach((slideEl) => {
			if (newDirection === "vertical") slideEl.style.width = "";
			else slideEl.style.height = "";
		});
		swiper.emit("changeDirection");
		if (needUpdate) swiper.update();
		return swiper;
	}
	changeLanguageDirection(direction) {
		const swiper = this;
		if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
		swiper.rtl = direction === "rtl";
		swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
		if (swiper.rtl) {
			swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
			swiper.el.dir = "rtl";
		} else {
			swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
			swiper.el.dir = "ltr";
		}
		swiper.update();
	}
	mount(element) {
		const swiper = this;
		if (swiper.mounted) return true;
		let el = element || swiper.params.el;
		if (typeof el === "string") el = document.querySelector(el);
		if (!el) return false;
		el.swiper = swiper;
		if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) swiper.isElement = true;
		const getWrapperSelector = () => {
			return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
		};
		const getWrapper = () => {
			if (el && el.shadowRoot && el.shadowRoot.querySelector) return el.shadowRoot.querySelector(getWrapperSelector());
			return elementChildren(el, getWrapperSelector())[0];
		};
		let wrapperEl = getWrapper();
		if (!wrapperEl && swiper.params.createElements) {
			wrapperEl = createElement("div", swiper.params.wrapperClass);
			el.append(wrapperEl);
			elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl) => {
				wrapperEl.append(slideEl);
			});
		}
		Object.assign(swiper, {
			el,
			wrapperEl,
			slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
			hostEl: swiper.isElement ? el.parentNode.host : el,
			mounted: true,
			rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
			rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
			wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
		});
		return true;
	}
	init(el) {
		const swiper = this;
		if (swiper.initialized) return swiper;
		if (swiper.mount(el) === false) return swiper;
		swiper.emit("beforeInit");
		if (swiper.params.breakpoints) swiper.setBreakpoint();
		swiper.addClasses();
		swiper.updateSize();
		swiper.updateSlides();
		if (swiper.params.watchOverflow) swiper.checkOverflow();
		if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
		if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
		else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
		if (swiper.params.loop) swiper.loopCreate(void 0, true);
		swiper.attachEvents();
		const lazyElements = [...swiper.el.querySelectorAll("[loading=\"lazy\"]")];
		if (swiper.isElement) lazyElements.push(...swiper.hostEl.querySelectorAll("[loading=\"lazy\"]"));
		lazyElements.forEach((imageEl) => {
			if (imageEl.complete) processLazyPreloader(swiper, imageEl);
			else imageEl.addEventListener("load", (e) => {
				processLazyPreloader(swiper, e.target);
			});
		});
		preload(swiper);
		swiper.initialized = true;
		preload(swiper);
		swiper.emit("init");
		swiper.emit("afterInit");
		return swiper;
	}
	destroy(deleteInstance = true, cleanStyles = true) {
		const swiper = this;
		const { params, el, wrapperEl, slides } = swiper;
		if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
		swiper.emit("beforeDestroy");
		swiper.initialized = false;
		swiper.detachEvents();
		if (params.loop) swiper.loopDestroy();
		if (cleanStyles) {
			swiper.removeClasses();
			if (el && typeof el !== "string") el.removeAttribute("style");
			if (wrapperEl) wrapperEl.removeAttribute("style");
			if (slides && slides.length) slides.forEach((slideEl) => {
				slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
				slideEl.removeAttribute("style");
				slideEl.removeAttribute("data-swiper-slide-index");
			});
		}
		swiper.emit("destroy");
		Object.keys(swiper.eventsListeners).forEach((eventName) => {
			swiper.off(eventName);
		});
		if (deleteInstance !== false) {
			if (swiper.el && typeof swiper.el !== "string") swiper.el.swiper = null;
			deleteProps(swiper);
		}
		swiper.destroyed = true;
		return null;
	}
	static extendDefaults(newDefaults) {
		extend$1(extendedDefaults, newDefaults);
	}
	static get extendedDefaults() {
		return extendedDefaults;
	}
	static get defaults() {
		return defaults;
	}
	static installModule(mod) {
		if (!Swiper$1.prototype.__modules__) Swiper$1.prototype.__modules__ = [];
		const modules = Swiper$1.prototype.__modules__;
		if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
	}
	static use(module) {
		if (Array.isArray(module)) {
			module.forEach((m) => Swiper$1.installModule(m));
			return Swiper$1;
		}
		Swiper$1.installModule(module);
		return Swiper$1;
	}
};
Object.keys(prototypes).forEach((prototypeGroup) => {
	Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
		Swiper$1.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
	});
});
Swiper$1.use([Resize, Observer]);
//#endregion
//#region node_modules/swiper/shared/update-swiper.mjs
var paramsList = [
	"eventsPrefix",
	"injectStyles",
	"injectStylesUrls",
	"modules",
	"init",
	"_direction",
	"oneWayMovement",
	"swiperElementNodeName",
	"touchEventsTarget",
	"initialSlide",
	"_speed",
	"cssMode",
	"updateOnWindowResize",
	"resizeObserver",
	"nested",
	"focusableElements",
	"_enabled",
	"_width",
	"_height",
	"preventInteractionOnTransition",
	"userAgent",
	"url",
	"_edgeSwipeDetection",
	"_edgeSwipeThreshold",
	"_freeMode",
	"_autoHeight",
	"setWrapperSize",
	"virtualTranslate",
	"_effect",
	"breakpoints",
	"breakpointsBase",
	"_spaceBetween",
	"_slidesPerView",
	"maxBackfaceHiddenSlides",
	"_grid",
	"_slidesPerGroup",
	"_slidesPerGroupSkip",
	"_slidesPerGroupAuto",
	"_centeredSlides",
	"_centeredSlidesBounds",
	"_slidesOffsetBefore",
	"_slidesOffsetAfter",
	"normalizeSlideIndex",
	"_centerInsufficientSlides",
	"_snapToSlideEdge",
	"_watchOverflow",
	"roundLengths",
	"touchRatio",
	"touchAngle",
	"simulateTouch",
	"_shortSwipes",
	"_longSwipes",
	"longSwipesRatio",
	"longSwipesMs",
	"_followFinger",
	"allowTouchMove",
	"_threshold",
	"touchMoveStopPropagation",
	"touchStartPreventDefault",
	"touchStartForcePreventDefault",
	"touchReleaseOnEdges",
	"uniqueNavElements",
	"_resistance",
	"_resistanceRatio",
	"_watchSlidesProgress",
	"_grabCursor",
	"preventClicks",
	"preventClicksPropagation",
	"_slideToClickedSlide",
	"_loop",
	"loopAdditionalSlides",
	"loopAddBlankSlides",
	"loopPreventsSliding",
	"_rewind",
	"_allowSlidePrev",
	"_allowSlideNext",
	"_swipeHandler",
	"_noSwiping",
	"noSwipingClass",
	"noSwipingSelector",
	"passiveListeners",
	"containerModifierClass",
	"slideClass",
	"slideActiveClass",
	"slideVisibleClass",
	"slideFullyVisibleClass",
	"slideNextClass",
	"slidePrevClass",
	"slideBlankClass",
	"wrapperClass",
	"lazyPreloaderClass",
	"lazyPreloadPrevNext",
	"runCallbacksOnInit",
	"observer",
	"observeParents",
	"observeSlideChildren",
	"a11y",
	"_autoplay",
	"_controller",
	"coverflowEffect",
	"cubeEffect",
	"fadeEffect",
	"flipEffect",
	"creativeEffect",
	"cardsEffect",
	"hashNavigation",
	"history",
	"keyboard",
	"mousewheel",
	"_navigation",
	"_pagination",
	"parallax",
	"_scrollbar",
	"_thumbs",
	"virtual",
	"zoom",
	"control"
];
function isObject(o) {
	return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object" && !o.__swiper__;
}
function extend(target, src) {
	const noExtend = [
		"__proto__",
		"constructor",
		"prototype"
	];
	Object.keys(src).filter((key) => noExtend.indexOf(key) < 0).forEach((key) => {
		if (typeof target[key] === "undefined") target[key] = src[key];
		else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) if (src[key].__swiper__) target[key] = src[key];
		else extend(target[key], src[key]);
		else target[key] = src[key];
	});
}
function needsNavigation(params = {}) {
	return params.navigation && typeof params.navigation.nextEl === "undefined" && typeof params.navigation.prevEl === "undefined";
}
function needsPagination(params = {}) {
	return params.pagination && typeof params.pagination.el === "undefined";
}
function needsScrollbar(params = {}) {
	return params.scrollbar && typeof params.scrollbar.el === "undefined";
}
function uniqueClasses(classNames = "") {
	const classes = classNames.split(" ").map((c) => c.trim()).filter((c) => !!c);
	const unique = [];
	classes.forEach((c) => {
		if (unique.indexOf(c) < 0) unique.push(c);
	});
	return unique.join(" ");
}
function wrapperClass(className = "") {
	if (!className) return "swiper-wrapper";
	if (!className.includes("swiper-wrapper")) return `swiper-wrapper ${className}`;
	return className;
}
function updateSwiper({ swiper, slides, passedParams, changedParams, nextEl, prevEl, scrollbarEl, paginationEl }) {
	const updateParams = changedParams.filter((key) => key !== "children" && key !== "direction" && key !== "wrapperClass");
	const { params: currentParams, pagination, navigation, scrollbar, virtual, thumbs } = swiper;
	let needThumbsInit;
	let needControllerInit;
	let needPaginationInit;
	let needScrollbarInit;
	let needNavigationInit;
	let loopNeedDestroy;
	let loopNeedEnable;
	let loopNeedReloop;
	if (changedParams.includes("thumbs") && passedParams.thumbs && passedParams.thumbs.swiper && !passedParams.thumbs.swiper.destroyed && currentParams.thumbs && (!currentParams.thumbs.swiper || currentParams.thumbs.swiper.destroyed)) needThumbsInit = true;
	if (changedParams.includes("controller") && passedParams.controller && passedParams.controller.control && currentParams.controller && !currentParams.controller.control) needControllerInit = true;
	if (changedParams.includes("pagination") && passedParams.pagination && (passedParams.pagination.el || paginationEl) && (currentParams.pagination || currentParams.pagination === false) && pagination && !pagination.el) needPaginationInit = true;
	if (changedParams.includes("scrollbar") && passedParams.scrollbar && (passedParams.scrollbar.el || scrollbarEl) && (currentParams.scrollbar || currentParams.scrollbar === false) && scrollbar && !scrollbar.el) needScrollbarInit = true;
	if (changedParams.includes("navigation") && passedParams.navigation && (passedParams.navigation.prevEl || prevEl) && (passedParams.navigation.nextEl || nextEl) && (currentParams.navigation || currentParams.navigation === false) && navigation && !navigation.prevEl && !navigation.nextEl) needNavigationInit = true;
	const destroyModule = (mod) => {
		if (!swiper[mod]) return;
		swiper[mod].destroy();
		if (mod === "navigation") {
			if (swiper.isElement) {
				swiper[mod].prevEl.remove();
				swiper[mod].nextEl.remove();
			}
			currentParams[mod].prevEl = void 0;
			currentParams[mod].nextEl = void 0;
			swiper[mod].prevEl = void 0;
			swiper[mod].nextEl = void 0;
		} else {
			if (swiper.isElement) swiper[mod].el.remove();
			currentParams[mod].el = void 0;
			swiper[mod].el = void 0;
		}
	};
	if (changedParams.includes("loop") && swiper.isElement) if (currentParams.loop && !passedParams.loop) loopNeedDestroy = true;
	else if (!currentParams.loop && passedParams.loop) loopNeedEnable = true;
	else loopNeedReloop = true;
	updateParams.forEach((key) => {
		if (isObject(currentParams[key]) && isObject(passedParams[key])) {
			Object.assign(currentParams[key], passedParams[key]);
			if ((key === "navigation" || key === "pagination" || key === "scrollbar") && "enabled" in passedParams[key] && !passedParams[key].enabled) destroyModule(key);
		} else {
			const newValue = passedParams[key];
			if ((newValue === true || newValue === false) && (key === "navigation" || key === "pagination" || key === "scrollbar")) {
				if (newValue === false) destroyModule(key);
			} else currentParams[key] = passedParams[key];
		}
	});
	if (updateParams.includes("controller") && !needControllerInit && swiper.controller && swiper.controller.control && currentParams.controller && currentParams.controller.control) swiper.controller.control = currentParams.controller.control;
	if (changedParams.includes("children") && slides && virtual && currentParams.virtual.enabled) {
		virtual.slides = slides;
		virtual.update(true);
	} else if (changedParams.includes("virtual") && virtual && currentParams.virtual.enabled) {
		if (slides) virtual.slides = slides;
		virtual.update(true);
	}
	if (changedParams.includes("children") && slides && currentParams.loop) loopNeedReloop = true;
	if (needThumbsInit) {
		if (thumbs.init()) thumbs.update(true);
	}
	if (needControllerInit) swiper.controller.control = currentParams.controller.control;
	if (needPaginationInit) {
		if (swiper.isElement && (!paginationEl || typeof paginationEl === "string")) {
			paginationEl = document.createElement("div");
			paginationEl.classList.add("swiper-pagination");
			paginationEl.part.add("pagination");
			swiper.el.appendChild(paginationEl);
		}
		if (paginationEl) currentParams.pagination.el = paginationEl;
		pagination.init();
		pagination.render();
		pagination.update();
	}
	if (needScrollbarInit) {
		if (swiper.isElement && (!scrollbarEl || typeof scrollbarEl === "string")) {
			scrollbarEl = document.createElement("div");
			scrollbarEl.classList.add("swiper-scrollbar");
			scrollbarEl.part.add("scrollbar");
			swiper.el.appendChild(scrollbarEl);
		}
		if (scrollbarEl) currentParams.scrollbar.el = scrollbarEl;
		scrollbar.init();
		scrollbar.updateSize();
		scrollbar.setTranslate();
	}
	if (needNavigationInit) {
		if (swiper.isElement) {
			if (!nextEl || typeof nextEl === "string") {
				nextEl = document.createElement("div");
				nextEl.classList.add("swiper-button-next");
				setInnerHTML(nextEl, swiper.navigation.arrowSvg);
				nextEl.part.add("button-next");
				swiper.el.appendChild(nextEl);
			}
			if (!prevEl || typeof prevEl === "string") {
				prevEl = document.createElement("div");
				prevEl.classList.add("swiper-button-prev");
				setInnerHTML(prevEl, swiper.navigation.arrowSvg);
				prevEl.part.add("button-prev");
				swiper.el.appendChild(prevEl);
			}
		}
		if (nextEl) currentParams.navigation.nextEl = nextEl;
		if (prevEl) currentParams.navigation.prevEl = prevEl;
		navigation.init();
		navigation.update();
	}
	if (changedParams.includes("allowSlideNext")) swiper.allowSlideNext = passedParams.allowSlideNext;
	if (changedParams.includes("allowSlidePrev")) swiper.allowSlidePrev = passedParams.allowSlidePrev;
	if (changedParams.includes("direction")) swiper.changeDirection(passedParams.direction, false);
	if (loopNeedDestroy || loopNeedReloop) swiper.loopDestroy();
	if (loopNeedEnable || loopNeedReloop) swiper.loopCreate();
	swiper.update();
}
//#endregion
//#region node_modules/swiper/shared/update-on-virtual-data.mjs
function getParams(obj = {}, splitEvents = true) {
	const params = { on: {} };
	const events = {};
	const passedParams = {};
	extend(params, defaults);
	params._emitClasses = true;
	params.init = false;
	const rest = {};
	const allowedParams = paramsList.map((key) => key.replace(/_/, ""));
	const plainObj = Object.assign({}, obj);
	Object.keys(plainObj).forEach((key) => {
		if (typeof obj[key] === "undefined") return;
		if (allowedParams.indexOf(key) >= 0) if (isObject(obj[key])) {
			params[key] = {};
			passedParams[key] = {};
			extend(params[key], obj[key]);
			extend(passedParams[key], obj[key]);
		} else {
			params[key] = obj[key];
			passedParams[key] = obj[key];
		}
		else if (key.search(/on[A-Z]/) === 0 && typeof obj[key] === "function") if (splitEvents) events[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
		else params.on[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
		else rest[key] = obj[key];
	});
	[
		"navigation",
		"pagination",
		"scrollbar"
	].forEach((key) => {
		if (params[key] === true) params[key] = {};
		if (params[key] === false) delete params[key];
	});
	return {
		params,
		passedParams,
		rest,
		events
	};
}
function mountSwiper({ el, nextEl, prevEl, paginationEl, scrollbarEl, swiper }, swiperParams) {
	if (needsNavigation(swiperParams) && nextEl && prevEl) {
		swiper.params.navigation.nextEl = nextEl;
		swiper.originalParams.navigation.nextEl = nextEl;
		swiper.params.navigation.prevEl = prevEl;
		swiper.originalParams.navigation.prevEl = prevEl;
	}
	if (needsPagination(swiperParams) && paginationEl) {
		swiper.params.pagination.el = paginationEl;
		swiper.originalParams.pagination.el = paginationEl;
	}
	if (needsScrollbar(swiperParams) && scrollbarEl) {
		swiper.params.scrollbar.el = scrollbarEl;
		swiper.originalParams.scrollbar.el = scrollbarEl;
	}
	swiper.init(el);
}
function getChangedParams(swiperParams, oldParams, children, oldChildren, getKey) {
	const keys = [];
	if (!oldParams) return keys;
	const addKey = (key) => {
		if (keys.indexOf(key) < 0) keys.push(key);
	};
	if (children && oldChildren) {
		const oldChildrenKeys = oldChildren.map(getKey);
		const childrenKeys = children.map(getKey);
		if (oldChildrenKeys.join("") !== childrenKeys.join("")) addKey("children");
		if (oldChildren.length !== children.length) addKey("children");
	}
	paramsList.filter((key) => key[0] === "_").map((key) => key.replace(/_/, "")).forEach((key) => {
		if (key in swiperParams && key in oldParams) {
			if (isObject(swiperParams[key]) && isObject(oldParams[key])) {
				const newKeys = Object.keys(swiperParams[key]);
				const oldKeys = Object.keys(oldParams[key]);
				if (newKeys.length !== oldKeys.length) addKey(key);
				else {
					newKeys.forEach((newKey) => {
						if (swiperParams[key][newKey] !== oldParams[key][newKey]) addKey(key);
					});
					oldKeys.forEach((oldKey) => {
						if (swiperParams[key][oldKey] !== oldParams[key][oldKey]) addKey(key);
					});
				}
			} else if (swiperParams[key] !== oldParams[key]) addKey(key);
		}
	});
	return keys;
}
var updateOnVirtualData = (swiper) => {
	if (!swiper || swiper.destroyed || !swiper.params.virtual || swiper.params.virtual && !swiper.params.virtual.enabled) return;
	swiper.updateSlides();
	swiper.updateProgress();
	swiper.updateSlidesClasses();
	swiper.emit("_virtualUpdated");
	if (swiper.parallax && swiper.params.parallax && swiper.params.parallax.enabled) swiper.parallax.setTranslate();
};
//#endregion
//#region node_modules/swiper/swiper-react.mjs
/**
* Swiper React 12.1.3
* Most modern mobile touch slider and framework with hardware accelerated transitions
* https://swiperjs.com
*
* Copyright 2014-2026 Vladimir Kharlampidi
*
* Released under the MIT License
*
* Released on: March 24, 2026
*/
function _extends() {
	_extends = Object.assign ? Object.assign.bind() : function(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
		}
		return target;
	};
	return _extends.apply(this, arguments);
}
function isChildSwiperSlide(child) {
	return child.type && child.type.displayName && child.type.displayName.includes("SwiperSlide");
}
function processChildren(c) {
	const slides = [];
	import_react.Children.toArray(c).forEach((child) => {
		if (isChildSwiperSlide(child)) slides.push(child);
		else if (child.props && child.props.children) processChildren(child.props.children).forEach((slide) => slides.push(slide));
	});
	return slides;
}
function getChildren(c) {
	const slides = [];
	const slots = {
		"container-start": [],
		"container-end": [],
		"wrapper-start": [],
		"wrapper-end": []
	};
	import_react.Children.toArray(c).forEach((child) => {
		if (isChildSwiperSlide(child)) slides.push(child);
		else if (child.props && child.props.slot && slots[child.props.slot]) slots[child.props.slot].push(child);
		else if (child.props && child.props.children) {
			const foundSlides = processChildren(child.props.children);
			if (foundSlides.length > 0) foundSlides.forEach((slide) => slides.push(slide));
			else slots["container-end"].push(child);
		} else slots["container-end"].push(child);
	});
	return {
		slides,
		slots
	};
}
function renderVirtual(swiper, slides, virtualData) {
	if (!virtualData) return null;
	const getSlideIndex = (index) => {
		let slideIndex = index;
		if (index < 0) slideIndex = slides.length + index;
		else if (slideIndex >= slides.length) slideIndex = slideIndex - slides.length;
		return slideIndex;
	};
	const style = swiper.isHorizontal() ? { [swiper.rtlTranslate ? "right" : "left"]: `${virtualData.offset}px` } : { top: `${virtualData.offset}px` };
	const { from, to } = virtualData;
	const loopFrom = swiper.params.loop ? -slides.length : 0;
	const loopTo = swiper.params.loop ? slides.length * 2 : slides.length;
	const slidesToRender = [];
	for (let i = loopFrom; i < loopTo; i += 1) if (i >= from && i <= to) slidesToRender.push(slides[getSlideIndex(i)]);
	return slidesToRender.map((child, index) => {
		return /* @__PURE__ */ import_react.cloneElement(child, {
			swiper,
			style,
			key: child.props.virtualIndex || child.key || `slide-${index}`
		});
	});
}
function useIsomorphicLayoutEffect(callback, deps) {
	if (typeof window === "undefined") return (0, import_react.useEffect)(callback, deps);
	return (0, import_react.useLayoutEffect)(callback, deps);
}
var SwiperSlideContext = /* @__PURE__ */ (0, import_react.createContext)(null);
var SwiperContext = /* @__PURE__ */ (0, import_react.createContext)(null);
var Swiper = /* @__PURE__ */ (0, import_react.forwardRef)(({ className, tag: Tag = "div", wrapperTag: WrapperTag = "div", children, onSwiper, ...rest } = {}, externalElRef) => {
	let eventsAssigned = false;
	const [containerClasses, setContainerClasses] = (0, import_react.useState)("swiper");
	const [virtualData, setVirtualData] = (0, import_react.useState)(null);
	const [breakpointChanged, setBreakpointChanged] = (0, import_react.useState)(false);
	const initializedRef = (0, import_react.useRef)(false);
	const swiperElRef = (0, import_react.useRef)(null);
	const swiperRef = (0, import_react.useRef)(null);
	const oldPassedParamsRef = (0, import_react.useRef)(null);
	const oldSlides = (0, import_react.useRef)(null);
	const nextElRef = (0, import_react.useRef)(null);
	const prevElRef = (0, import_react.useRef)(null);
	const paginationElRef = (0, import_react.useRef)(null);
	const scrollbarElRef = (0, import_react.useRef)(null);
	const { params: swiperParams, passedParams, rest: restProps, events } = getParams(rest);
	const { slides, slots } = getChildren(children);
	const onBeforeBreakpoint = () => {
		setBreakpointChanged(!breakpointChanged);
	};
	Object.assign(swiperParams.on, { _containerClasses(swiper, classes) {
		setContainerClasses(classes);
	} });
	const initSwiper = () => {
		Object.assign(swiperParams.on, events);
		eventsAssigned = true;
		const passParams = { ...swiperParams };
		delete passParams.wrapperClass;
		swiperRef.current = new Swiper$1(passParams);
		if (swiperRef.current.virtual && swiperRef.current.params.virtual.enabled) {
			swiperRef.current.virtual.slides = slides;
			const extendWith = {
				cache: false,
				slides,
				renderExternal: setVirtualData,
				renderExternalUpdate: false
			};
			extend(swiperRef.current.params.virtual, extendWith);
			extend(swiperRef.current.originalParams.virtual, extendWith);
		}
	};
	if (!swiperElRef.current) initSwiper();
	if (swiperRef.current) swiperRef.current.on("_beforeBreakpoint", onBeforeBreakpoint);
	const attachEvents = () => {
		if (eventsAssigned || !events || !swiperRef.current) return;
		Object.keys(events).forEach((eventName) => {
			swiperRef.current.on(eventName, events[eventName]);
		});
	};
	const detachEvents = () => {
		if (!events || !swiperRef.current) return;
		Object.keys(events).forEach((eventName) => {
			swiperRef.current.off(eventName, events[eventName]);
		});
	};
	(0, import_react.useEffect)(() => {
		return () => {
			if (swiperRef.current) swiperRef.current.off("_beforeBreakpoint", onBeforeBreakpoint);
		};
	});
	(0, import_react.useEffect)(() => {
		if (!initializedRef.current && swiperRef.current) {
			swiperRef.current.emitSlidesClasses();
			initializedRef.current = true;
		}
	});
	useIsomorphicLayoutEffect(() => {
		if (externalElRef) externalElRef.current = swiperElRef.current;
		if (!swiperElRef.current) return;
		if (swiperRef.current.destroyed) initSwiper();
		mountSwiper({
			el: swiperElRef.current,
			nextEl: nextElRef.current,
			prevEl: prevElRef.current,
			paginationEl: paginationElRef.current,
			scrollbarEl: scrollbarElRef.current,
			swiper: swiperRef.current
		}, swiperParams);
		if (onSwiper && !swiperRef.current.destroyed) onSwiper(swiperRef.current);
		return () => {
			if (swiperRef.current && !swiperRef.current.destroyed) swiperRef.current.destroy(true, false);
		};
	}, []);
	useIsomorphicLayoutEffect(() => {
		attachEvents();
		const changedParams = getChangedParams(passedParams, oldPassedParamsRef.current, slides, oldSlides.current, (c) => c.key);
		oldPassedParamsRef.current = passedParams;
		oldSlides.current = slides;
		if (changedParams.length && swiperRef.current && !swiperRef.current.destroyed) updateSwiper({
			swiper: swiperRef.current,
			slides,
			passedParams,
			changedParams,
			nextEl: nextElRef.current,
			prevEl: prevElRef.current,
			scrollbarEl: scrollbarElRef.current,
			paginationEl: paginationElRef.current
		});
		return () => {
			detachEvents();
		};
	});
	useIsomorphicLayoutEffect(() => {
		updateOnVirtualData(swiperRef.current);
	}, [virtualData]);
	function renderSlides() {
		if (swiperParams.virtual) return renderVirtual(swiperRef.current, slides, virtualData);
		return slides.map((child, index) => {
			return /* @__PURE__ */ import_react.cloneElement(child, {
				swiper: swiperRef.current,
				swiperSlideIndex: index
			});
		});
	}
	return /* @__PURE__ */ import_react.createElement(Tag, _extends({
		ref: swiperElRef,
		className: uniqueClasses(`${containerClasses}${className ? ` ${className}` : ""}`)
	}, restProps), /* @__PURE__ */ import_react.createElement(SwiperContext.Provider, { value: swiperRef.current }, slots["container-start"], /* @__PURE__ */ import_react.createElement(WrapperTag, { className: wrapperClass(swiperParams.wrapperClass) }, slots["wrapper-start"], renderSlides(), slots["wrapper-end"]), needsNavigation(swiperParams) && /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement("div", {
		ref: prevElRef,
		className: "swiper-button-prev"
	}), /* @__PURE__ */ import_react.createElement("div", {
		ref: nextElRef,
		className: "swiper-button-next"
	})), needsScrollbar(swiperParams) && /* @__PURE__ */ import_react.createElement("div", {
		ref: scrollbarElRef,
		className: "swiper-scrollbar"
	}), needsPagination(swiperParams) && /* @__PURE__ */ import_react.createElement("div", {
		ref: paginationElRef,
		className: "swiper-pagination"
	}), slots["container-end"]));
});
Swiper.displayName = "Swiper";
var SwiperSlide = /* @__PURE__ */ (0, import_react.forwardRef)(({ tag: Tag = "div", children, className = "", swiper, zoom, lazy, virtualIndex, swiperSlideIndex, ...rest } = {}, externalRef) => {
	const slideElRef = (0, import_react.useRef)(null);
	const [slideClasses, setSlideClasses] = (0, import_react.useState)("swiper-slide");
	const [lazyLoaded, setLazyLoaded] = (0, import_react.useState)(false);
	function updateClasses(_s, el, classNames) {
		if (el === slideElRef.current) setSlideClasses(classNames);
	}
	useIsomorphicLayoutEffect(() => {
		if (typeof swiperSlideIndex !== "undefined") slideElRef.current.swiperSlideIndex = swiperSlideIndex;
		if (externalRef) externalRef.current = slideElRef.current;
		if (!slideElRef.current || !swiper) return;
		if (swiper.destroyed) {
			if (slideClasses !== "swiper-slide") setSlideClasses("swiper-slide");
			return;
		}
		swiper.on("_slideClass", updateClasses);
		return () => {
			if (!swiper) return;
			swiper.off("_slideClass", updateClasses);
		};
	});
	useIsomorphicLayoutEffect(() => {
		if (swiper && slideElRef.current && !swiper.destroyed) setSlideClasses(swiper.getSlideClasses(slideElRef.current));
	}, [swiper]);
	const slideData = {
		isActive: slideClasses.indexOf("swiper-slide-active") >= 0,
		isVisible: slideClasses.indexOf("swiper-slide-visible") >= 0,
		isPrev: slideClasses.indexOf("swiper-slide-prev") >= 0,
		isNext: slideClasses.indexOf("swiper-slide-next") >= 0
	};
	const renderChildren = () => {
		return typeof children === "function" ? children(slideData) : children;
	};
	const onLoad = () => {
		setLazyLoaded(true);
	};
	return /* @__PURE__ */ import_react.createElement(Tag, _extends({
		ref: slideElRef,
		className: uniqueClasses(`${slideClasses}${className ? ` ${className}` : ""}`),
		"data-swiper-slide-index": virtualIndex,
		onLoad
	}, rest), zoom && /* @__PURE__ */ import_react.createElement(SwiperSlideContext.Provider, { value: slideData }, /* @__PURE__ */ import_react.createElement("div", {
		className: "swiper-zoom-container",
		"data-swiper-zoom": typeof zoom === "number" ? zoom : void 0
	}, renderChildren(), lazy && !lazyLoaded && /* @__PURE__ */ import_react.createElement("div", {
		className: "swiper-lazy-preloader",
		ref: (node) => {
			if (node) node.lazyPreloaderManaged = true;
		}
	}))), !zoom && /* @__PURE__ */ import_react.createElement(SwiperSlideContext.Provider, { value: slideData }, renderChildren(), lazy && !lazyLoaded && /* @__PURE__ */ import_react.createElement("div", {
		className: "swiper-lazy-preloader",
		ref: (node) => {
			if (node) node.lazyPreloaderManaged = true;
		}
	})));
});
SwiperSlide.displayName = "SwiperSlide";
//#endregion
//#region node_modules/swiper/modules/virtual.mjs
function Virtual({ swiper, extendParams, on, emit }) {
	extendParams({ virtual: {
		enabled: false,
		slides: [],
		cache: true,
		slidesPerViewAutoSlideSize: 320,
		renderSlide: null,
		renderExternal: null,
		renderExternalUpdate: true,
		addSlidesBefore: 0,
		addSlidesAfter: 0
	} });
	let cssModeTimeout;
	const document = getDocument();
	swiper.virtual = {
		cache: {},
		from: void 0,
		to: void 0,
		slides: [],
		offset: 0,
		slidesGrid: []
	};
	const tempDOM = document.createElement("div");
	function renderSlide(slide, index) {
		const params = swiper.params.virtual;
		if (params.cache && swiper.virtual.cache[index]) return swiper.virtual.cache[index];
		let slideEl;
		if (params.renderSlide) {
			slideEl = params.renderSlide.call(swiper, slide, index);
			if (typeof slideEl === "string") {
				setInnerHTML(tempDOM, slideEl);
				slideEl = tempDOM.children[0];
			}
		} else if (swiper.isElement) slideEl = createElement("swiper-slide");
		else slideEl = createElement("div", swiper.params.slideClass);
		slideEl.setAttribute("data-swiper-slide-index", index);
		if (!params.renderSlide) setInnerHTML(slideEl, slide);
		if (params.cache) swiper.virtual.cache[index] = slideEl;
		return slideEl;
	}
	function update(force, beforeInit, forceActiveIndex) {
		const { slidesPerGroup, centeredSlides, slidesPerView, loop: isLoop, initialSlide } = swiper.params;
		if (beforeInit && !isLoop && initialSlide > 0) return;
		const { addSlidesBefore, addSlidesAfter, slidesPerViewAutoSlideSize } = swiper.params.virtual;
		const { from: previousFrom, to: previousTo, slides, slidesGrid: previousSlidesGrid, offset: previousOffset } = swiper.virtual;
		if (!swiper.params.cssMode) swiper.updateActiveIndex();
		const activeIndex = typeof forceActiveIndex === "undefined" ? swiper.activeIndex || 0 : forceActiveIndex;
		let offsetProp;
		if (swiper.rtlTranslate) offsetProp = "right";
		else offsetProp = swiper.isHorizontal() ? "left" : "top";
		let slidesPerViewNumeric;
		if (slidesPerView === "auto") if (slidesPerViewAutoSlideSize) {
			let swiperSize = swiper.size;
			if (!swiperSize) swiperSize = swiper.isHorizontal() ? swiper.el.getBoundingClientRect().width : swiper.el.getBoundingClientRect().height;
			slidesPerViewNumeric = Math.max(1, Math.ceil(swiperSize / slidesPerViewAutoSlideSize));
		} else slidesPerViewNumeric = 1;
		else slidesPerViewNumeric = slidesPerView;
		let slidesAfter;
		let slidesBefore;
		if (centeredSlides) {
			slidesAfter = Math.floor(slidesPerViewNumeric / 2) + slidesPerGroup + addSlidesAfter;
			slidesBefore = Math.floor(slidesPerViewNumeric / 2) + slidesPerGroup + addSlidesBefore;
		} else {
			slidesAfter = slidesPerViewNumeric + (slidesPerGroup - 1) + addSlidesAfter;
			slidesBefore = (isLoop ? slidesPerViewNumeric : slidesPerGroup) + addSlidesBefore;
		}
		let from = activeIndex - slidesBefore;
		let to = activeIndex + slidesAfter;
		if (!isLoop) {
			from = Math.max(from, 0);
			to = Math.min(to, slides.length - 1);
		}
		let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
		if (isLoop && activeIndex >= slidesBefore) {
			from -= slidesBefore;
			if (!centeredSlides) offset += swiper.slidesGrid[0];
		} else if (isLoop && activeIndex < slidesBefore) {
			from = -slidesBefore;
			if (centeredSlides) offset += swiper.slidesGrid[0];
		}
		Object.assign(swiper.virtual, {
			from,
			to,
			offset,
			slidesGrid: swiper.slidesGrid,
			slidesBefore,
			slidesAfter
		});
		function onRendered() {
			swiper.updateSlides();
			swiper.updateProgress();
			swiper.updateSlidesClasses();
			emit("virtualUpdate");
		}
		if (previousFrom === from && previousTo === to && !force) {
			if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) swiper.slides.forEach((slideEl) => {
				slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
			});
			swiper.updateProgress();
			emit("virtualUpdate");
			return;
		}
		if (swiper.params.virtual.renderExternal) {
			swiper.params.virtual.renderExternal.call(swiper, {
				offset,
				from,
				to,
				slides: function getSlides() {
					const slidesToRender = [];
					for (let i = from; i <= to; i += 1) slidesToRender.push(slides[i]);
					return slidesToRender;
				}()
			});
			if (swiper.params.virtual.renderExternalUpdate) onRendered();
			else emit("virtualUpdate");
			return;
		}
		const prependIndexes = [];
		const appendIndexes = [];
		const getSlideIndex = (index) => {
			let slideIndex = index;
			if (index < 0) slideIndex = slides.length + index;
			else if (slideIndex >= slides.length) slideIndex = slideIndex - slides.length;
			return slideIndex;
		};
		if (force) swiper.slides.filter((el) => el.matches(`.${swiper.params.slideClass}, swiper-slide`)).forEach((slideEl) => {
			slideEl.remove();
		});
		else for (let i = previousFrom; i <= previousTo; i += 1) if (i < from || i > to) {
			const slideIndex = getSlideIndex(i);
			swiper.slides.filter((el) => el.matches(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`)).forEach((slideEl) => {
				slideEl.remove();
			});
		}
		const loopFrom = isLoop ? -slides.length : 0;
		const loopTo = isLoop ? slides.length * 2 : slides.length;
		for (let i = loopFrom; i < loopTo; i += 1) if (i >= from && i <= to) {
			const slideIndex = getSlideIndex(i);
			if (typeof previousTo === "undefined" || force) appendIndexes.push(slideIndex);
			else {
				if (i > previousTo) appendIndexes.push(slideIndex);
				if (i < previousFrom) prependIndexes.push(slideIndex);
			}
		}
		appendIndexes.forEach((index) => {
			swiper.slidesEl.append(renderSlide(slides[index], index));
		});
		if (isLoop) for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
			const index = prependIndexes[i];
			swiper.slidesEl.prepend(renderSlide(slides[index], index));
		}
		else {
			prependIndexes.sort((a, b) => b - a);
			prependIndexes.forEach((index) => {
				swiper.slidesEl.prepend(renderSlide(slides[index], index));
			});
		}
		elementChildren(swiper.slidesEl, ".swiper-slide, swiper-slide").forEach((slideEl) => {
			slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
		});
		onRendered();
	}
	function appendSlide(slides) {
		if (typeof slides === "object" && "length" in slides) {
			for (let i = 0; i < slides.length; i += 1) if (slides[i]) swiper.virtual.slides.push(slides[i]);
		} else swiper.virtual.slides.push(slides);
		update(true);
	}
	function prependSlide(slides) {
		const activeIndex = swiper.activeIndex;
		let newActiveIndex = activeIndex + 1;
		let numberOfNewSlides = 1;
		if (Array.isArray(slides)) {
			for (let i = 0; i < slides.length; i += 1) if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
			newActiveIndex = activeIndex + slides.length;
			numberOfNewSlides = slides.length;
		} else swiper.virtual.slides.unshift(slides);
		if (swiper.params.virtual.cache) {
			const cache = swiper.virtual.cache;
			const newCache = {};
			Object.keys(cache).forEach((cachedIndex) => {
				const cachedEl = cache[cachedIndex];
				const cachedElIndex = cachedEl.getAttribute("data-swiper-slide-index");
				if (cachedElIndex) cachedEl.setAttribute("data-swiper-slide-index", parseInt(cachedElIndex, 10) + numberOfNewSlides);
				newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
			});
			swiper.virtual.cache = newCache;
		}
		update(true);
		swiper.slideTo(newActiveIndex, 0);
	}
	function removeSlide(slidesIndexes) {
		if (typeof slidesIndexes === "undefined" || slidesIndexes === null) return;
		let activeIndex = swiper.activeIndex;
		if (Array.isArray(slidesIndexes)) for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
			if (swiper.params.virtual.cache) {
				delete swiper.virtual.cache[slidesIndexes[i]];
				Object.keys(swiper.virtual.cache).forEach((key) => {
					if (key > slidesIndexes) {
						swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
						swiper.virtual.cache[key - 1].setAttribute("data-swiper-slide-index", key - 1);
						delete swiper.virtual.cache[key];
					}
				});
			}
			swiper.virtual.slides.splice(slidesIndexes[i], 1);
			if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
			activeIndex = Math.max(activeIndex, 0);
		}
		else {
			if (swiper.params.virtual.cache) {
				delete swiper.virtual.cache[slidesIndexes];
				Object.keys(swiper.virtual.cache).forEach((key) => {
					if (key > slidesIndexes) {
						swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
						swiper.virtual.cache[key - 1].setAttribute("data-swiper-slide-index", key - 1);
						delete swiper.virtual.cache[key];
					}
				});
			}
			swiper.virtual.slides.splice(slidesIndexes, 1);
			if (slidesIndexes < activeIndex) activeIndex -= 1;
			activeIndex = Math.max(activeIndex, 0);
		}
		update(true);
		swiper.slideTo(activeIndex, 0);
	}
	function removeAllSlides() {
		swiper.virtual.slides = [];
		if (swiper.params.virtual.cache) swiper.virtual.cache = {};
		update(true);
		swiper.slideTo(0, 0);
	}
	on("beforeInit", () => {
		if (!swiper.params.virtual.enabled) return;
		let domSlidesAssigned;
		if (typeof swiper.passedParams.virtual.slides === "undefined") {
			const slides = [...swiper.slidesEl.children].filter((el) => el.matches(`.${swiper.params.slideClass}, swiper-slide`));
			if (slides && slides.length) {
				swiper.virtual.slides = [...slides];
				domSlidesAssigned = true;
				slides.forEach((slideEl, slideIndex) => {
					slideEl.setAttribute("data-swiper-slide-index", slideIndex);
					swiper.virtual.cache[slideIndex] = slideEl;
					slideEl.remove();
				});
			}
		}
		if (!domSlidesAssigned) swiper.virtual.slides = swiper.params.virtual.slides;
		swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
		swiper.params.watchSlidesProgress = true;
		swiper.originalParams.watchSlidesProgress = true;
		update(false, true);
	});
	on("setTranslate", () => {
		if (!swiper.params.virtual.enabled) return;
		if (swiper.params.cssMode && !swiper._immediateVirtual) {
			clearTimeout(cssModeTimeout);
			cssModeTimeout = setTimeout(() => {
				update();
			}, 100);
		} else update();
	});
	on("init update resize", () => {
		if (!swiper.params.virtual.enabled) return;
		if (swiper.params.cssMode) setCSSProperty(swiper.wrapperEl, "--swiper-virtual-size", `${swiper.virtualSize}px`);
	});
	Object.assign(swiper.virtual, {
		appendSlide,
		prependSlide,
		removeSlide,
		removeAllSlides,
		update
	});
}
//#endregion
//#region node_modules/swiper/modules/keyboard.mjs
function Keyboard({ swiper, extendParams, on, emit }) {
	const document = getDocument();
	const window = getWindow();
	swiper.keyboard = { enabled: false };
	extendParams({ keyboard: {
		enabled: false,
		onlyInViewport: true,
		pageUpDown: true,
		speed: void 0
	} });
	function handle(event) {
		if (!swiper.enabled) return;
		const { rtlTranslate: rtl } = swiper;
		let e = event;
		if (e.originalEvent) e = e.originalEvent;
		const kc = e.keyCode || e.charCode;
		const pageUpDown = swiper.params.keyboard.pageUpDown;
		const isPageUp = pageUpDown && kc === 33;
		const isPageDown = pageUpDown && kc === 34;
		const isArrowLeft = kc === 37;
		const isArrowRight = kc === 39;
		const isArrowUp = kc === 38;
		const isArrowDown = kc === 40;
		if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) return false;
		if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) return false;
		if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
		if (document.activeElement && (document.activeElement.isContentEditable || document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === "input" || document.activeElement.nodeName.toLowerCase() === "textarea"))) return;
		if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
			let inView = false;
			if (elementParents(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && elementParents(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) return;
			const el = swiper.el;
			const swiperWidth = el.clientWidth;
			const swiperHeight = el.clientHeight;
			const windowWidth = window.innerWidth;
			const windowHeight = window.innerHeight;
			const swiperOffset = elementOffset(el);
			if (rtl) swiperOffset.left -= el.scrollLeft;
			const swiperCoord = [
				[swiperOffset.left, swiperOffset.top],
				[swiperOffset.left + swiperWidth, swiperOffset.top],
				[swiperOffset.left, swiperOffset.top + swiperHeight],
				[swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]
			];
			for (let i = 0; i < swiperCoord.length; i += 1) {
				const point = swiperCoord[i];
				if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
					if (point[0] === 0 && point[1] === 0) continue;
					inView = true;
				}
			}
			if (!inView) return void 0;
		}
		const speed = swiper.params.keyboard.speed;
		if (swiper.isHorizontal()) {
			if (isPageUp || isPageDown || isArrowLeft || isArrowRight) if (e.preventDefault) e.preventDefault();
			else e.returnValue = false;
			if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext(speed);
			if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev(speed);
		} else {
			if (isPageUp || isPageDown || isArrowUp || isArrowDown) if (e.preventDefault) e.preventDefault();
			else e.returnValue = false;
			if (isPageDown || isArrowDown) swiper.slideNext(speed);
			if (isPageUp || isArrowUp) swiper.slidePrev(speed);
		}
		emit("keyPress", kc);
	}
	function enable() {
		if (swiper.keyboard.enabled) return;
		document.addEventListener("keydown", handle);
		swiper.keyboard.enabled = true;
	}
	function disable() {
		if (!swiper.keyboard.enabled) return;
		document.removeEventListener("keydown", handle);
		swiper.keyboard.enabled = false;
	}
	on("init", () => {
		if (swiper.params.keyboard.enabled) enable();
	});
	on("destroy", () => {
		if (swiper.keyboard.enabled) disable();
	});
	Object.assign(swiper.keyboard, {
		enable,
		disable
	});
}
//#endregion
//#region node_modules/swiper/modules/mousewheel.mjs
function Mousewheel({ swiper, extendParams, on, emit }) {
	const window = getWindow();
	extendParams({ mousewheel: {
		enabled: false,
		releaseOnEdges: false,
		invert: false,
		forceToAxis: false,
		sensitivity: 1,
		eventsTarget: "container",
		thresholdDelta: null,
		thresholdTime: null,
		noMousewheelClass: "swiper-no-mousewheel"
	} });
	swiper.mousewheel = { enabled: false };
	let timeout;
	let lastScrollTime = now();
	let lastEventBeforeSnap;
	const recentWheelEvents = [];
	function normalize(e) {
		const PIXEL_STEP = 10;
		const LINE_HEIGHT = 40;
		const PAGE_HEIGHT = 800;
		let sX = 0;
		let sY = 0;
		let pX = 0;
		let pY = 0;
		if ("detail" in e) sY = e.detail;
		if ("wheelDelta" in e) sY = -e.wheelDelta / 120;
		if ("wheelDeltaY" in e) sY = -e.wheelDeltaY / 120;
		if ("wheelDeltaX" in e) sX = -e.wheelDeltaX / 120;
		if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
			sX = sY;
			sY = 0;
		}
		pX = sX * PIXEL_STEP;
		pY = sY * PIXEL_STEP;
		if ("deltaY" in e) pY = e.deltaY;
		if ("deltaX" in e) pX = e.deltaX;
		if (e.shiftKey && !pX) {
			pX = pY;
			pY = 0;
		}
		if ((pX || pY) && e.deltaMode) if (e.deltaMode === 1) {
			pX *= LINE_HEIGHT;
			pY *= LINE_HEIGHT;
		} else {
			pX *= PAGE_HEIGHT;
			pY *= PAGE_HEIGHT;
		}
		if (pX && !sX) sX = pX < 1 ? -1 : 1;
		if (pY && !sY) sY = pY < 1 ? -1 : 1;
		return {
			spinX: sX,
			spinY: sY,
			pixelX: pX,
			pixelY: pY
		};
	}
	function handleMouseEnter() {
		if (!swiper.enabled) return;
		swiper.mouseEntered = true;
	}
	function handleMouseLeave() {
		if (!swiper.enabled) return;
		swiper.mouseEntered = false;
	}
	function animateSlider(newEvent) {
		if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) return false;
		if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) return false;
		if (newEvent.delta >= 6 && now() - lastScrollTime < 60) return true;
		if (newEvent.direction < 0) {
			if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
				swiper.slideNext();
				emit("scroll", newEvent.raw);
			}
		} else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
			swiper.slidePrev();
			emit("scroll", newEvent.raw);
		}
		lastScrollTime = new window.Date().getTime();
		return false;
	}
	function releaseScroll(newEvent) {
		const params = swiper.params.mousewheel;
		if (newEvent.direction < 0) {
			if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) return true;
		} else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) return true;
		return false;
	}
	function handle(event) {
		let e = event;
		let disableParentSwiper = true;
		if (!swiper.enabled) return;
		if (event.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
		const params = swiper.params.mousewheel;
		if (swiper.params.cssMode) e.preventDefault();
		let targetEl = swiper.el;
		if (swiper.params.mousewheel.eventsTarget !== "container") targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
		const targetElContainsTarget = targetEl && targetEl.contains(e.target);
		if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
		if (e.originalEvent) e = e.originalEvent;
		let delta = 0;
		const rtlFactor = swiper.rtlTranslate ? -1 : 1;
		const data = normalize(e);
		if (params.forceToAxis) if (swiper.isHorizontal()) if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
		else return true;
		else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
		else return true;
		else delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
		if (delta === 0) return true;
		if (params.invert) delta = -delta;
		let positions = swiper.getTranslate() + delta * params.sensitivity;
		if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
		if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();
		disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
		if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
		if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
			const newEvent = {
				time: now(),
				delta: Math.abs(delta),
				direction: Math.sign(delta),
				raw: event
			};
			if (recentWheelEvents.length >= 2) recentWheelEvents.shift();
			const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
			recentWheelEvents.push(newEvent);
			if (prevEvent) {
				if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) animateSlider(newEvent);
			} else animateSlider(newEvent);
			if (releaseScroll(newEvent)) return true;
		} else {
			const newEvent = {
				time: now(),
				delta: Math.abs(delta),
				direction: Math.sign(delta)
			};
			const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
			if (!ignoreWheelEvents) {
				lastEventBeforeSnap = void 0;
				let position = swiper.getTranslate() + delta * params.sensitivity;
				const wasBeginning = swiper.isBeginning;
				const wasEnd = swiper.isEnd;
				if (position >= swiper.minTranslate()) position = swiper.minTranslate();
				if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
				swiper.setTransition(0);
				swiper.setTranslate(position);
				swiper.updateProgress();
				swiper.updateActiveIndex();
				swiper.updateSlidesClasses();
				if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) swiper.updateSlidesClasses();
				if (swiper.params.loop) swiper.loopFix({
					direction: newEvent.direction < 0 ? "next" : "prev",
					byMousewheel: true
				});
				if (swiper.params.freeMode.sticky) {
					clearTimeout(timeout);
					timeout = void 0;
					if (recentWheelEvents.length >= 15) recentWheelEvents.shift();
					const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
					const firstEvent = recentWheelEvents[0];
					recentWheelEvents.push(newEvent);
					if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) recentWheelEvents.splice(0);
					else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
						const snapToThreshold = delta > 0 ? .8 : .2;
						lastEventBeforeSnap = newEvent;
						recentWheelEvents.splice(0);
						timeout = nextTick(() => {
							if (swiper.destroyed || !swiper.params) return;
							swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
						}, 0);
					}
					if (!timeout) timeout = nextTick(() => {
						if (swiper.destroyed || !swiper.params) return;
						const snapToThreshold = .5;
						lastEventBeforeSnap = newEvent;
						recentWheelEvents.splice(0);
						swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
					}, 500);
				}
				if (!ignoreWheelEvents) emit("scroll", e);
				if (swiper.params.autoplay && swiper.params.autoplay.disableOnInteraction) swiper.autoplay.stop();
				if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) return true;
			}
		}
		if (e.preventDefault) e.preventDefault();
		else e.returnValue = false;
		return false;
	}
	function events(method) {
		let targetEl = swiper.el;
		if (swiper.params.mousewheel.eventsTarget !== "container") targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
		targetEl[method]("mouseenter", handleMouseEnter);
		targetEl[method]("mouseleave", handleMouseLeave);
		targetEl[method]("wheel", handle);
	}
	function enable() {
		if (swiper.params.cssMode) {
			swiper.wrapperEl.removeEventListener("wheel", handle);
			return true;
		}
		if (swiper.mousewheel.enabled) return false;
		events("addEventListener");
		swiper.mousewheel.enabled = true;
		return true;
	}
	function disable() {
		if (swiper.params.cssMode) {
			swiper.wrapperEl.addEventListener(event, handle);
			return true;
		}
		if (!swiper.mousewheel.enabled) return false;
		events("removeEventListener");
		swiper.mousewheel.enabled = false;
		return true;
	}
	on("init", () => {
		if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) disable();
		if (swiper.params.mousewheel.enabled) enable();
	});
	on("destroy", () => {
		if (swiper.params.cssMode) enable();
		if (swiper.mousewheel.enabled) disable();
	});
	Object.assign(swiper.mousewheel, {
		enable,
		disable
	});
}
//#endregion
//#region node_modules/swiper/shared/create-element-if-not-defined.mjs
function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
	if (swiper.params.createElements) Object.keys(checkProps).forEach((key) => {
		if (!params[key] && params.auto === true) {
			let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];
			if (!element) {
				element = createElement("div", checkProps[key]);
				element.className = checkProps[key];
				swiper.el.append(element);
			}
			params[key] = element;
			originalParams[key] = element;
		}
	});
	return params;
}
//#endregion
//#region node_modules/swiper/modules/navigation.mjs
var arrowSvg = `<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>`;
function Navigation({ swiper, extendParams, on, emit }) {
	extendParams({ navigation: {
		nextEl: null,
		prevEl: null,
		addIcons: true,
		hideOnClick: false,
		disabledClass: "swiper-button-disabled",
		hiddenClass: "swiper-button-hidden",
		lockClass: "swiper-button-lock",
		navigationDisabledClass: "swiper-navigation-disabled"
	} });
	swiper.navigation = {
		nextEl: null,
		prevEl: null,
		arrowSvg
	};
	function getEl(el) {
		let res;
		if (el && typeof el === "string" && swiper.isElement) {
			res = swiper.el.querySelector(el) || swiper.hostEl.querySelector(el);
			if (res) return res;
		}
		if (el) {
			if (typeof el === "string") res = [...document.querySelectorAll(el)];
			if (swiper.params.uniqueNavElements && typeof el === "string" && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) res = swiper.el.querySelector(el);
			else if (res && res.length === 1) res = res[0];
		}
		if (el && !res) return el;
		return res;
	}
	function toggleEl(el, disabled) {
		const params = swiper.params.navigation;
		el = makeElementsArray(el);
		el.forEach((subEl) => {
			if (subEl) {
				subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
				if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
				if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
			}
		});
	}
	function update() {
		const { nextEl, prevEl } = swiper.navigation;
		if (swiper.params.loop) {
			toggleEl(prevEl, false);
			toggleEl(nextEl, false);
			return;
		}
		toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
		toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
	}
	function onPrevClick(e) {
		e.preventDefault();
		if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
		swiper.slidePrev();
		emit("navigationPrev");
	}
	function onNextClick(e) {
		e.preventDefault();
		if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
		swiper.slideNext();
		emit("navigationNext");
	}
	function init() {
		const params = swiper.params.navigation;
		swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
			nextEl: "swiper-button-next",
			prevEl: "swiper-button-prev"
		});
		if (!(params.nextEl || params.prevEl)) return;
		let nextEl = getEl(params.nextEl);
		let prevEl = getEl(params.prevEl);
		Object.assign(swiper.navigation, {
			nextEl,
			prevEl
		});
		nextEl = makeElementsArray(nextEl);
		prevEl = makeElementsArray(prevEl);
		const initButton = (el, dir) => {
			if (el) {
				if (params.addIcons && el.matches(".swiper-button-next,.swiper-button-prev") && !el.querySelector("svg")) {
					const tempEl = document.createElement("div");
					setInnerHTML(tempEl, arrowSvg);
					el.appendChild(tempEl.querySelector("svg"));
					tempEl.remove();
				}
				el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
			}
			if (!swiper.enabled && el) el.classList.add(...params.lockClass.split(" "));
		};
		nextEl.forEach((el) => initButton(el, "next"));
		prevEl.forEach((el) => initButton(el, "prev"));
	}
	function destroy() {
		let { nextEl, prevEl } = swiper.navigation;
		nextEl = makeElementsArray(nextEl);
		prevEl = makeElementsArray(prevEl);
		const destroyButton = (el, dir) => {
			el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
			el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
		};
		nextEl.forEach((el) => destroyButton(el, "next"));
		prevEl.forEach((el) => destroyButton(el, "prev"));
	}
	on("init", () => {
		if (swiper.params.navigation.enabled === false) disable();
		else {
			init();
			update();
		}
	});
	on("toEdge fromEdge lock unlock", () => {
		update();
	});
	on("destroy", () => {
		destroy();
	});
	on("enable disable", () => {
		let { nextEl, prevEl } = swiper.navigation;
		nextEl = makeElementsArray(nextEl);
		prevEl = makeElementsArray(prevEl);
		if (swiper.enabled) {
			update();
			return;
		}
		[...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.add(swiper.params.navigation.lockClass));
	});
	on("click", (_s, e) => {
		let { nextEl, prevEl } = swiper.navigation;
		nextEl = makeElementsArray(nextEl);
		prevEl = makeElementsArray(prevEl);
		const targetEl = e.target;
		let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
		if (swiper.isElement && !targetIsButton) {
			const path = e.path || e.composedPath && e.composedPath();
			if (path) targetIsButton = path.find((pathEl) => nextEl.includes(pathEl) || prevEl.includes(pathEl));
		}
		if (swiper.params.navigation.hideOnClick && !targetIsButton) {
			if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
			let isHidden;
			if (nextEl.length) isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
			else if (prevEl.length) isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
			if (isHidden === true) emit("navigationShow");
			else emit("navigationHide");
			[...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.toggle(swiper.params.navigation.hiddenClass));
		}
	});
	const enable = () => {
		swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
		init();
		update();
	};
	const disable = () => {
		swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
		destroy();
	};
	Object.assign(swiper.navigation, {
		enable,
		disable,
		update,
		init,
		destroy
	});
}
//#endregion
//#region node_modules/swiper/shared/classes-to-selector.mjs
function classesToSelector(classes = "") {
	return `.${classes.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g, "\\$1").replace(/ /g, ".")}`;
}
//#endregion
//#region node_modules/swiper/modules/a11y.mjs
function A11y({ swiper, extendParams, on }) {
	extendParams({ a11y: {
		enabled: true,
		notificationClass: "swiper-notification",
		prevSlideMessage: "Previous slide",
		nextSlideMessage: "Next slide",
		firstSlideMessage: "This is the first slide",
		lastSlideMessage: "This is the last slide",
		paginationBulletMessage: "Go to slide {{index}}",
		slideLabelMessage: "{{index}} / {{slidesLength}}",
		containerMessage: null,
		containerRoleDescriptionMessage: null,
		containerRole: null,
		itemRoleDescriptionMessage: null,
		slideRole: "group",
		id: null,
		scrollOnFocus: true,
		wrapperLiveRegion: true
	} });
	swiper.a11y = { clicked: false };
	let liveRegion = null;
	let preventFocusHandler;
	let focusTargetSlideEl;
	let visibilityChangedTimestamp = (/* @__PURE__ */ new Date()).getTime();
	function notify(message) {
		const notification = liveRegion;
		if (notification.length === 0) return;
		setInnerHTML(notification, message);
	}
	function getRandomNumber(size = 16) {
		const randomChar = () => Math.round(16 * Math.random()).toString(16);
		return "x".repeat(size).replace(/x/g, randomChar);
	}
	function makeElFocusable(el) {
		el = makeElementsArray(el);
		el.forEach((subEl) => {
			subEl.setAttribute("tabIndex", "0");
		});
	}
	function makeElNotFocusable(el) {
		el = makeElementsArray(el);
		el.forEach((subEl) => {
			subEl.setAttribute("tabIndex", "-1");
		});
	}
	function addElRole(el, role) {
		el = makeElementsArray(el);
		el.forEach((subEl) => {
			subEl.setAttribute("role", role);
		});
	}
	function addElRoleDescription(el, description) {
		el = makeElementsArray(el);
		el.forEach((subEl) => {
			subEl.setAttribute("aria-roledescription", description);
		});
	}
	function addElControls(el, controls) {
		el = makeElementsArray(el);
		el.forEach((subEl) => {
			subEl.setAttribute("aria-controls", controls);
		});
	}
	function addElLabel(el, label) {
		el = makeElementsArray(el);
		el.forEach((subEl) => {
			subEl.setAttribute("aria-label", label);
		});
	}
	function addElId(el, id) {
		el = makeElementsArray(el);
		el.forEach((subEl) => {
			subEl.setAttribute("id", id);
		});
	}
	function addElLive(el, live) {
		el = makeElementsArray(el);
		el.forEach((subEl) => {
			subEl.setAttribute("aria-live", live);
		});
	}
	function disableEl(el) {
		el = makeElementsArray(el);
		el.forEach((subEl) => {
			subEl.setAttribute("aria-disabled", true);
		});
	}
	function enableEl(el) {
		el = makeElementsArray(el);
		el.forEach((subEl) => {
			subEl.setAttribute("aria-disabled", false);
		});
	}
	function onEnterOrSpaceKey(e) {
		if (e.keyCode !== 13 && e.keyCode !== 32) return;
		const params = swiper.params.a11y;
		const targetEl = e.target;
		if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
			if (!e.target.matches(classesToSelector(swiper.params.pagination.bulletClass))) return;
		}
		if (swiper.navigation && swiper.navigation.prevEl && swiper.navigation.nextEl) {
			const prevEls = makeElementsArray(swiper.navigation.prevEl);
			if (makeElementsArray(swiper.navigation.nextEl).includes(targetEl)) {
				if (!(swiper.isEnd && !swiper.params.loop)) swiper.slideNext();
				if (swiper.isEnd) notify(params.lastSlideMessage);
				else notify(params.nextSlideMessage);
			}
			if (prevEls.includes(targetEl)) {
				if (!(swiper.isBeginning && !swiper.params.loop)) swiper.slidePrev();
				if (swiper.isBeginning) notify(params.firstSlideMessage);
				else notify(params.prevSlideMessage);
			}
		}
		if (swiper.pagination && targetEl.matches(classesToSelector(swiper.params.pagination.bulletClass))) targetEl.click();
	}
	function updateNavigation() {
		if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
		const { nextEl, prevEl } = swiper.navigation;
		if (prevEl) if (swiper.isBeginning) {
			disableEl(prevEl);
			makeElNotFocusable(prevEl);
		} else {
			enableEl(prevEl);
			makeElFocusable(prevEl);
		}
		if (nextEl) if (swiper.isEnd) {
			disableEl(nextEl);
			makeElNotFocusable(nextEl);
		} else {
			enableEl(nextEl);
			makeElFocusable(nextEl);
		}
	}
	function hasPagination() {
		return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
	}
	function hasClickablePagination() {
		return hasPagination() && swiper.params.pagination.clickable;
	}
	function updatePagination() {
		const params = swiper.params.a11y;
		if (!hasPagination()) return;
		swiper.pagination.bullets.forEach((bulletEl) => {
			if (swiper.params.pagination.clickable) {
				makeElFocusable(bulletEl);
				if (!swiper.params.pagination.renderBullet) {
					addElRole(bulletEl, "button");
					addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, elementIndex(bulletEl) + 1));
				}
			}
			if (bulletEl.matches(classesToSelector(swiper.params.pagination.bulletActiveClass))) bulletEl.setAttribute("aria-current", "true");
			else bulletEl.removeAttribute("aria-current");
		});
	}
	const initNavEl = (el, wrapperId, message) => {
		makeElFocusable(el);
		if (el.tagName !== "BUTTON") {
			addElRole(el, "button");
			el.addEventListener("keydown", onEnterOrSpaceKey);
		}
		addElLabel(el, message);
		addElControls(el, wrapperId);
	};
	const handlePointerDown = (e) => {
		if (focusTargetSlideEl && focusTargetSlideEl !== e.target && !focusTargetSlideEl.contains(e.target)) preventFocusHandler = true;
		swiper.a11y.clicked = true;
	};
	const handlePointerUp = () => {
		preventFocusHandler = false;
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				if (!swiper.destroyed) swiper.a11y.clicked = false;
			});
		});
	};
	const onVisibilityChange = (e) => {
		visibilityChangedTimestamp = (/* @__PURE__ */ new Date()).getTime();
	};
	const handleFocus = (e) => {
		if (swiper.a11y.clicked || !swiper.params.a11y.scrollOnFocus) return;
		if ((/* @__PURE__ */ new Date()).getTime() - visibilityChangedTimestamp < 100) return;
		const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
		if (!slideEl || !swiper.slides.includes(slideEl)) return;
		focusTargetSlideEl = slideEl;
		const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
		const isActive = (isVirtual ? parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10) : swiper.slides.indexOf(slideEl)) === swiper.activeIndex;
		const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
		if (isActive || isVisible) return;
		if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
		if (swiper.isHorizontal()) swiper.el.scrollLeft = 0;
		else swiper.el.scrollTop = 0;
		requestAnimationFrame(() => {
			if (preventFocusHandler) return;
			if (swiper.params.loop) swiper.slideToLoop(swiper.getSlideIndexWhenGrid(parseInt(slideEl.getAttribute("data-swiper-slide-index"))), 0);
			else if (isVirtual) swiper.slideTo(swiper.getSlideIndexWhenGrid(parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10)), 0);
			else swiper.slideTo(swiper.getSlideIndexWhenGrid(swiper.slides.indexOf(slideEl)), 0);
			preventFocusHandler = false;
		});
	};
	const initSlides = () => {
		const params = swiper.params.a11y;
		if (params.itemRoleDescriptionMessage) addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
		if (params.slideRole) addElRole(swiper.slides, params.slideRole);
		const slidesLength = swiper.slides.length;
		if (params.slideLabelMessage) swiper.slides.forEach((slideEl, index) => {
			const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10) : index;
			addElLabel(slideEl, params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength));
		});
	};
	const init = () => {
		const params = swiper.params.a11y;
		swiper.el.append(liveRegion);
		const containerEl = swiper.el;
		if (params.containerRoleDescriptionMessage) addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
		if (params.containerMessage) addElLabel(containerEl, params.containerMessage);
		if (params.containerRole) addElRole(containerEl, params.containerRole);
		const wrapperEl = swiper.wrapperEl;
		const wrapperId = params.id || wrapperEl.getAttribute("id") || `swiper-wrapper-${getRandomNumber(16)}`;
		addElId(wrapperEl, wrapperId);
		if (params.wrapperLiveRegion) addElLive(wrapperEl, swiper.params.autoplay && swiper.params.autoplay.enabled ? "off" : "polite");
		initSlides();
		let { nextEl, prevEl } = swiper.navigation ? swiper.navigation : {};
		nextEl = makeElementsArray(nextEl);
		prevEl = makeElementsArray(prevEl);
		if (nextEl) nextEl.forEach((el) => initNavEl(el, wrapperId, params.nextSlideMessage));
		if (prevEl) prevEl.forEach((el) => initNavEl(el, wrapperId, params.prevSlideMessage));
		if (hasClickablePagination()) makeElementsArray(swiper.pagination.el).forEach((el) => {
			el.addEventListener("keydown", onEnterOrSpaceKey);
		});
		getDocument().addEventListener("visibilitychange", onVisibilityChange);
		swiper.el.addEventListener("focus", handleFocus, true);
		swiper.el.addEventListener("pointerdown", handlePointerDown, true);
		swiper.el.addEventListener("pointerup", handlePointerUp, true);
	};
	function destroy() {
		if (liveRegion) liveRegion.remove();
		let { nextEl, prevEl } = swiper.navigation ? swiper.navigation : {};
		nextEl = makeElementsArray(nextEl);
		prevEl = makeElementsArray(prevEl);
		if (nextEl) nextEl.forEach((el) => el.removeEventListener("keydown", onEnterOrSpaceKey));
		if (prevEl) prevEl.forEach((el) => el.removeEventListener("keydown", onEnterOrSpaceKey));
		if (hasClickablePagination()) makeElementsArray(swiper.pagination.el).forEach((el) => {
			el.removeEventListener("keydown", onEnterOrSpaceKey);
		});
		getDocument().removeEventListener("visibilitychange", onVisibilityChange);
		if (swiper.el && typeof swiper.el !== "string") {
			swiper.el.removeEventListener("focus", handleFocus, true);
			swiper.el.removeEventListener("pointerdown", handlePointerDown, true);
			swiper.el.removeEventListener("pointerup", handlePointerUp, true);
		}
	}
	on("beforeInit", () => {
		liveRegion = createElement("span", swiper.params.a11y.notificationClass);
		liveRegion.setAttribute("aria-live", "assertive");
		liveRegion.setAttribute("aria-atomic", "true");
	});
	on("afterInit", () => {
		if (!swiper.params.a11y.enabled) return;
		init();
	});
	on("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
		if (!swiper.params.a11y.enabled) return;
		initSlides();
	});
	on("fromEdge toEdge afterInit lock unlock", () => {
		if (!swiper.params.a11y.enabled) return;
		updateNavigation();
	});
	on("paginationUpdate", () => {
		if (!swiper.params.a11y.enabled) return;
		updatePagination();
	});
	on("destroy", () => {
		if (!swiper.params.a11y.enabled) return;
		destroy();
	});
}
//#endregion
//#region node_modules/swiper/modules/thumbs.mjs
function Thumb({ swiper, extendParams, on }) {
	extendParams({ thumbs: {
		swiper: null,
		multipleActiveThumbs: true,
		autoScrollOffset: 0,
		slideThumbActiveClass: "swiper-slide-thumb-active",
		thumbsContainerClass: "swiper-thumbs"
	} });
	let initialized = false;
	let swiperCreated = false;
	swiper.thumbs = { swiper: null };
	function isVirtualEnabled() {
		const thumbsSwiper = swiper.thumbs.swiper;
		if (!thumbsSwiper || thumbsSwiper.destroyed) return false;
		return thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled;
	}
	function onThumbClick() {
		const thumbsSwiper = swiper.thumbs.swiper;
		if (!thumbsSwiper || thumbsSwiper.destroyed) return;
		const clickedIndex = thumbsSwiper.clickedIndex;
		const clickedSlide = thumbsSwiper.clickedSlide;
		if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
		if (typeof clickedIndex === "undefined" || clickedIndex === null) return;
		let slideToIndex;
		if (thumbsSwiper.params.loop) slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
		else slideToIndex = clickedIndex;
		if (swiper.params.loop) swiper.slideToLoop(slideToIndex);
		else swiper.slideTo(slideToIndex);
	}
	function init() {
		const { thumbs: thumbsParams } = swiper.params;
		if (initialized) return false;
		initialized = true;
		const SwiperClass = swiper.constructor;
		if (thumbsParams.swiper instanceof SwiperClass) {
			if (thumbsParams.swiper.destroyed) {
				initialized = false;
				return false;
			}
			swiper.thumbs.swiper = thumbsParams.swiper;
			Object.assign(swiper.thumbs.swiper.originalParams, {
				watchSlidesProgress: true,
				slideToClickedSlide: false
			});
			Object.assign(swiper.thumbs.swiper.params, {
				watchSlidesProgress: true,
				slideToClickedSlide: false
			});
			swiper.thumbs.swiper.update();
		} else if (isObject$1(thumbsParams.swiper)) {
			const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
			Object.assign(thumbsSwiperParams, {
				watchSlidesProgress: true,
				slideToClickedSlide: false
			});
			swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
			swiperCreated = true;
		}
		swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
		swiper.thumbs.swiper.on("tap", onThumbClick);
		if (isVirtualEnabled()) swiper.thumbs.swiper.on("virtualUpdate", () => {
			update(false, { autoScroll: false });
		});
		return true;
	}
	function update(initial, p) {
		const thumbsSwiper = swiper.thumbs.swiper;
		if (!thumbsSwiper || thumbsSwiper.destroyed) return;
		let thumbsToActivate = 1;
		const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
		if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) thumbsToActivate = swiper.params.slidesPerView;
		if (!swiper.params.thumbs.multipleActiveThumbs) thumbsToActivate = 1;
		thumbsToActivate = Math.floor(thumbsToActivate);
		thumbsSwiper.slides.forEach((slideEl) => slideEl.classList.remove(thumbActiveClass));
		if (thumbsSwiper.params.loop || isVirtualEnabled()) for (let i = 0; i < thumbsToActivate; i += 1) elementChildren(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach((slideEl) => {
			slideEl.classList.add(thumbActiveClass);
		});
		else for (let i = 0; i < thumbsToActivate; i += 1) if (thumbsSwiper.slides[swiper.realIndex + i]) thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
		if (p?.autoScroll ?? true) autoScroll(initial ? 0 : void 0);
	}
	function autoScroll(slideSpeed) {
		const thumbsSwiper = swiper.thumbs.swiper;
		if (!thumbsSwiper || thumbsSwiper.destroyed) return;
		const slidesPerView = thumbsSwiper.params.slidesPerView === "auto" ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
		const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
		const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
		if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
			const currentThumbsIndex = thumbsSwiper.activeIndex;
			let newThumbsIndex;
			let direction;
			if (thumbsSwiper.params.loop) {
				const newThumbsSlide = thumbsSwiper.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") === `${swiper.realIndex}`);
				newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
				direction = swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
			} else {
				newThumbsIndex = swiper.realIndex;
				direction = newThumbsIndex > swiper.previousIndex ? "next" : "prev";
			}
			if (useOffset) newThumbsIndex += direction === "next" ? autoScrollOffset : -1 * autoScrollOffset;
			if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
				if (thumbsSwiper.params.centeredSlides) if (newThumbsIndex > currentThumbsIndex) newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
				else newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
				else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1);
				thumbsSwiper.slideTo(newThumbsIndex, slideSpeed);
			}
		}
	}
	on("beforeInit", () => {
		const { thumbs } = swiper.params;
		if (!thumbs || !thumbs.swiper) return;
		if (typeof thumbs.swiper === "string" || thumbs.swiper instanceof HTMLElement) {
			const document = getDocument();
			const getThumbsElementAndInit = () => {
				const thumbsElement = typeof thumbs.swiper === "string" ? document.querySelector(thumbs.swiper) : thumbs.swiper;
				if (thumbsElement && thumbsElement.swiper) {
					thumbs.swiper = thumbsElement.swiper;
					init();
					update(true);
				} else if (thumbsElement) {
					const eventName = `${swiper.params.eventsPrefix}init`;
					const onThumbsSwiper = (e) => {
						thumbs.swiper = e.detail[0];
						thumbsElement.removeEventListener(eventName, onThumbsSwiper);
						init();
						update(true);
						thumbs.swiper.update();
						swiper.update();
					};
					thumbsElement.addEventListener(eventName, onThumbsSwiper);
				}
				return thumbsElement;
			};
			const watchForThumbsToAppear = () => {
				if (swiper.destroyed) return;
				if (!getThumbsElementAndInit()) requestAnimationFrame(watchForThumbsToAppear);
			};
			requestAnimationFrame(watchForThumbsToAppear);
		} else {
			init();
			update(true);
		}
	});
	on("slideChange update resize observerUpdate", () => {
		update();
	});
	on("setTransition", (_s, duration) => {
		const thumbsSwiper = swiper.thumbs.swiper;
		if (!thumbsSwiper || thumbsSwiper.destroyed) return;
		thumbsSwiper.setTransition(duration);
	});
	on("beforeDestroy", () => {
		const thumbsSwiper = swiper.thumbs.swiper;
		if (!thumbsSwiper || thumbsSwiper.destroyed) return;
		if (swiperCreated) thumbsSwiper.destroy();
	});
	Object.assign(swiper.thumbs, {
		init,
		update
	});
}
//#endregion
//#region node_modules/swiper/modules/free-mode.mjs
function freeMode({ swiper, extendParams, emit, once }) {
	extendParams({ freeMode: {
		enabled: false,
		momentum: true,
		momentumRatio: 1,
		momentumBounce: true,
		momentumBounceRatio: 1,
		momentumVelocityRatio: 1,
		sticky: false,
		minimumVelocity: .02
	} });
	function onTouchStart() {
		if (swiper.params.cssMode) return;
		const translate = swiper.getTranslate();
		swiper.setTranslate(translate);
		swiper.setTransition(0);
		swiper.touchEventsData.velocities.length = 0;
		swiper.freeMode.onTouchEnd({ currentPos: swiper.rtl ? swiper.translate : -swiper.translate });
	}
	function onTouchMove() {
		if (swiper.params.cssMode) return;
		const { touchEventsData: data, touches } = swiper;
		if (data.velocities.length === 0) data.velocities.push({
			position: touches[swiper.isHorizontal() ? "startX" : "startY"],
			time: data.touchStartTime
		});
		data.velocities.push({
			position: touches[swiper.isHorizontal() ? "currentX" : "currentY"],
			time: now()
		});
	}
	function onTouchEnd({ currentPos }) {
		if (swiper.params.cssMode) return;
		const { params, wrapperEl, rtlTranslate: rtl, snapGrid, touchEventsData: data } = swiper;
		const timeDiff = now() - data.touchStartTime;
		if (currentPos < -swiper.minTranslate()) {
			swiper.slideTo(swiper.activeIndex);
			return;
		}
		if (currentPos > -swiper.maxTranslate()) {
			if (swiper.slides.length < snapGrid.length) swiper.slideTo(snapGrid.length - 1);
			else swiper.slideTo(swiper.slides.length - 1);
			return;
		}
		if (params.freeMode.momentum) {
			if (data.velocities.length > 1) {
				const lastMoveEvent = data.velocities.pop();
				const velocityEvent = data.velocities.pop();
				const distance = lastMoveEvent.position - velocityEvent.position;
				const time = lastMoveEvent.time - velocityEvent.time;
				swiper.velocity = distance / time;
				swiper.velocity /= 2;
				if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) swiper.velocity = 0;
				if (time > 150 || now() - lastMoveEvent.time > 300) swiper.velocity = 0;
			} else swiper.velocity = 0;
			swiper.velocity *= params.freeMode.momentumVelocityRatio;
			data.velocities.length = 0;
			let momentumDuration = 1e3 * params.freeMode.momentumRatio;
			const momentumDistance = swiper.velocity * momentumDuration;
			let newPosition = swiper.translate + momentumDistance;
			if (rtl) newPosition = -newPosition;
			let doBounce = false;
			let afterBouncePosition;
			const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
			let needsLoopFix;
			if (newPosition < swiper.maxTranslate()) {
				if (params.freeMode.momentumBounce) {
					if (newPosition + swiper.maxTranslate() < -bounceAmount) newPosition = swiper.maxTranslate() - bounceAmount;
					afterBouncePosition = swiper.maxTranslate();
					doBounce = true;
					data.allowMomentumBounce = true;
				} else newPosition = swiper.maxTranslate();
				if (params.loop && params.centeredSlides) needsLoopFix = true;
			} else if (newPosition > swiper.minTranslate()) {
				if (params.freeMode.momentumBounce) {
					if (newPosition - swiper.minTranslate() > bounceAmount) newPosition = swiper.minTranslate() + bounceAmount;
					afterBouncePosition = swiper.minTranslate();
					doBounce = true;
					data.allowMomentumBounce = true;
				} else newPosition = swiper.minTranslate();
				if (params.loop && params.centeredSlides) needsLoopFix = true;
			} else if (params.freeMode.sticky) {
				let nextSlide;
				for (let j = 0; j < snapGrid.length; j += 1) if (snapGrid[j] > -newPosition) {
					nextSlide = j;
					break;
				}
				if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === "next") newPosition = snapGrid[nextSlide];
				else newPosition = snapGrid[nextSlide - 1];
				newPosition = -newPosition;
			}
			if (needsLoopFix) once("transitionEnd", () => {
				swiper.loopFix();
			});
			if (swiper.velocity !== 0) {
				if (rtl) momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
				else momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
				if (params.freeMode.sticky) {
					const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
					const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
					if (moveDistance < currentSlideSize) momentumDuration = params.speed;
					else if (moveDistance < 2 * currentSlideSize) momentumDuration = params.speed * 1.5;
					else momentumDuration = params.speed * 2.5;
				}
			} else if (params.freeMode.sticky) {
				swiper.slideToClosest();
				return;
			}
			if (params.freeMode.momentumBounce && doBounce) {
				swiper.updateProgress(afterBouncePosition);
				swiper.setTransition(momentumDuration);
				swiper.setTranslate(newPosition);
				swiper.transitionStart(true, swiper.swipeDirection);
				swiper.animating = true;
				elementTransitionEnd(wrapperEl, () => {
					if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
					emit("momentumBounce");
					swiper.setTransition(params.speed);
					setTimeout(() => {
						swiper.setTranslate(afterBouncePosition);
						elementTransitionEnd(wrapperEl, () => {
							if (!swiper || swiper.destroyed) return;
							swiper.transitionEnd();
						});
					}, 0);
				});
			} else if (swiper.velocity) {
				emit("_freeModeNoMomentumRelease");
				swiper.updateProgress(newPosition);
				swiper.setTransition(momentumDuration);
				swiper.setTranslate(newPosition);
				swiper.transitionStart(true, swiper.swipeDirection);
				if (!swiper.animating) {
					swiper.animating = true;
					elementTransitionEnd(wrapperEl, () => {
						if (!swiper || swiper.destroyed) return;
						swiper.transitionEnd();
					});
				}
			} else swiper.updateProgress(newPosition);
			swiper.updateActiveIndex();
			swiper.updateSlidesClasses();
		} else if (params.freeMode.sticky) {
			swiper.slideToClosest();
			return;
		} else if (params.freeMode) emit("_freeModeNoMomentumRelease");
		if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
			emit("_freeModeStaticRelease");
			swiper.updateProgress();
			swiper.updateActiveIndex();
			swiper.updateSlidesClasses();
		}
	}
	Object.assign(swiper, { freeMode: {
		onTouchStart,
		onTouchMove,
		onTouchEnd
	} });
}
//#endregion
//#region node_modules/swiper/shared/effect-init.mjs
function effectInit(params) {
	const { effect, swiper, on, setTranslate, setTransition, overwriteParams, perspective, recreateShadows, getEffectParams } = params;
	on("beforeInit", () => {
		if (swiper.params.effect !== effect) return;
		swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
		if (perspective && perspective()) swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
		const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
		Object.assign(swiper.params, overwriteParamsResult);
		Object.assign(swiper.originalParams, overwriteParamsResult);
	});
	on("setTranslate _virtualUpdated", () => {
		if (swiper.params.effect !== effect) return;
		setTranslate();
	});
	on("setTransition", (_s, duration) => {
		if (swiper.params.effect !== effect) return;
		setTransition(duration);
	});
	on("transitionEnd", () => {
		if (swiper.params.effect !== effect) return;
		if (recreateShadows) {
			if (!getEffectParams || !getEffectParams().slideShadows) return;
			swiper.slides.forEach((slideEl) => {
				slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => shadowEl.remove());
			});
			recreateShadows();
		}
	});
	let requireUpdateOnVirtual;
	on("virtualUpdate", () => {
		if (swiper.params.effect !== effect) return;
		if (!swiper.slides.length) requireUpdateOnVirtual = true;
		requestAnimationFrame(() => {
			if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
				setTranslate();
				requireUpdateOnVirtual = false;
			}
		});
	});
}
//#endregion
//#region node_modules/swiper/shared/effect-target.mjs
function effectTarget(effectParams, slideEl) {
	const transformEl = getSlideTransformEl(slideEl);
	if (transformEl !== slideEl) {
		transformEl.style.backfaceVisibility = "hidden";
		transformEl.style["-webkit-backface-visibility"] = "hidden";
	}
	return transformEl;
}
//#endregion
//#region node_modules/swiper/shared/create-shadow.mjs
function createShadow(suffix, slideEl, side) {
	const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ""}${suffix ? ` swiper-slide-shadow-${suffix}` : ""}`;
	const shadowContainer = getSlideTransformEl(slideEl);
	let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(" ").join(".")}`);
	if (!shadowEl) {
		shadowEl = createElement("div", shadowClass.split(" "));
		shadowContainer.append(shadowEl);
	}
	return shadowEl;
}
//#endregion
//#region node_modules/swiper/modules/effect-coverflow.mjs
function EffectCoverflow({ swiper, extendParams, on }) {
	extendParams({ coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		scale: 1,
		modifier: 1,
		slideShadows: true
	} });
	const setTranslate = () => {
		const { width: swiperWidth, height: swiperHeight, slides, slidesSizesGrid } = swiper;
		const params = swiper.params.coverflowEffect;
		const isHorizontal = swiper.isHorizontal();
		const transform = swiper.translate;
		const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
		const rotate = isHorizontal ? params.rotate : -params.rotate;
		const translate = params.depth;
		const r = getRotateFix(swiper);
		for (let i = 0, length = slides.length; i < length; i += 1) {
			const slideEl = slides[i];
			const slideSize = slidesSizesGrid[i];
			const centerOffset = (center - slideEl.swiperSlideOffset - slideSize / 2) / slideSize;
			const offsetMultiplier = typeof params.modifier === "function" ? params.modifier(centerOffset) : centerOffset * params.modifier;
			let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
			let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
			let translateZ = -translate * Math.abs(offsetMultiplier);
			let stretch = params.stretch;
			if (typeof stretch === "string" && stretch.indexOf("%") !== -1) stretch = parseFloat(params.stretch) / 100 * slideSize;
			let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
			let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
			let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);
			if (Math.abs(translateX) < .001) translateX = 0;
			if (Math.abs(translateY) < .001) translateY = 0;
			if (Math.abs(translateZ) < .001) translateZ = 0;
			if (Math.abs(rotateY) < .001) rotateY = 0;
			if (Math.abs(rotateX) < .001) rotateX = 0;
			if (Math.abs(scale) < .001) scale = 0;
			const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${r(rotateX)}deg) rotateY(${r(rotateY)}deg) scale(${scale})`;
			const targetEl = effectTarget(params, slideEl);
			targetEl.style.transform = slideTransform;
			slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
			if (params.slideShadows) {
				let shadowBeforeEl = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
				let shadowAfterEl = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
				if (!shadowBeforeEl) shadowBeforeEl = createShadow("coverflow", slideEl, isHorizontal ? "left" : "top");
				if (!shadowAfterEl) shadowAfterEl = createShadow("coverflow", slideEl, isHorizontal ? "right" : "bottom");
				if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
				if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
			}
		}
	};
	const setTransition = (duration) => {
		swiper.slides.map((slideEl) => getSlideTransformEl(slideEl)).forEach((el) => {
			el.style.transitionDuration = `${duration}ms`;
			el.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => {
				shadowEl.style.transitionDuration = `${duration}ms`;
			});
		});
	};
	effectInit({
		effect: "coverflow",
		swiper,
		on,
		setTranslate,
		setTransition,
		perspective: () => true,
		overwriteParams: () => ({ watchSlidesProgress: true })
	});
}
var CoverFlowView_module_default = {
	container: "_container_19eaz_1",
	swiper: "_swiper_19eaz_6",
	slide: "_slide_19eaz_14",
	slideContent: "_slideContent_19eaz_37",
	imageContainer: "_imageContainer_19eaz_45",
	actualSizeContainer: "_actualSizeContainer_19eaz_57",
	panningActive: "_panningActive_19eaz_62",
	zoomWrapper: "_zoomWrapper_19eaz_67",
	activeSlide: "_activeSlide_19eaz_82",
	fullWidthFavoriteBtn: "_fullWidthFavoriteBtn_19eaz_86",
	fadeIn: "_fadeIn_19eaz_1",
	hiding: "_hiding_19eaz_124",
	actionButtons: "_actionButtons_19eaz_131",
	zoomControls: "_zoomControls_19eaz_138"
};
//#endregion
//#region src/features/gallery/CoverFlowView.jsx
/**
* 3D Carousel view using Swiper.js Coverflow effect and Virtualization.
* Fulfills REQ-UI-COVERFLOW with 1M record support.
*/
function CoverFlowView({ photos }) {
	const { toggleFavorite, toggleHidden, photosArray, totalCount, loadPage } = useGallery();
	const [hidingIds, setHidingIds] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
	const [zoomLevel, setZoomLevel] = (0, import_react.useState)(1);
	const [isActualSize, setIsActualSize] = (0, import_react.useState)(false);
	const [panOrigin, setPanOrigin] = (0, import_react.useState)("50% 50%");
	const containerRef = (0, import_react.useRef)(null);
	const handleToggleHide = (0, import_react.useCallback)((id) => {
		setHidingIds((prev) => new Set([...prev, id]));
		setTimeout(() => toggleHidden(id), 300);
	}, [toggleHidden]);
	const handleToggleFavorite = (0, import_react.useCallback)((id) => {
		toggleFavorite(id);
	}, [toggleFavorite]);
	const zoomIn = () => setZoomLevel((prev) => Math.min(prev + .2, 5));
	const zoomOut = () => setZoomLevel((prev) => Math.max(prev - .2, .1));
	const resetZoom = () => {
		setZoomLevel(1);
		setIsActualSize(false);
		setPanOrigin("50% 50%");
	};
	const setActualSize = () => {
		setIsActualSize(true);
		setZoomLevel(1);
		setPanOrigin("50% 50%");
	};
	const handleMouseMove = (e) => {
		if (zoomLevel <= 1 && !isActualSize) return;
		const container = containerRef.current;
		if (!container) return;
		const rect = container.getBoundingClientRect();
		setPanOrigin(`${(e.clientX - rect.left) / rect.width * 100}% ${(e.clientY - rect.top) / rect.height * 100}%`);
	};
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			const activePhoto = photosArray[activeIndex];
			if (!activePhoto) return;
			switch (e.key.toLowerCase()) {
				case "n":
					handleToggleHide(activePhoto.id);
					break;
				case "t":
					handleToggleFavorite(activePhoto.id);
					break;
				case "r":
					resetZoom();
					break;
				case "a":
					setActualSize();
					break;
				case "+":
				case "=":
					zoomIn();
					break;
				case "-":
				case "_":
					zoomOut();
					break;
				default: break;
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [
		activeIndex,
		photosArray,
		handleToggleHide,
		handleToggleFavorite
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: CoverFlowView_module_default.container,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swiper, {
			onSlideChange: (swiper) => {
				setActiveIndex(swiper.activeIndex);
				resetZoom();
				loadPage(swiper.activeIndex);
				loadPage(swiper.activeIndex + 1);
				loadPage(swiper.activeIndex - 1);
			},
			effect: "coverflow",
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: "auto",
			navigation: true,
			coverflowEffect: {
				rotate: 50,
				stretch: 50,
				depth: 150,
				modifier: 1.5,
				slideShadows: true,
				scale: .9
			},
			watchSlidesProgress: true,
			keyboard: {
				enabled: true,
				onlyInViewport: false
			},
			virtual: true,
			modules: [
				EffectCoverflow,
				Keyboard,
				Navigation,
				A11y,
				Virtual
			],
			className: CoverFlowView_module_default.swiper,
			children: photosArray.map((photo, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwiperSlide, {
				virtualIndex: index,
				className: CoverFlowView_module_default.slide,
				children: ({ isActive }) => {
					if (!photo) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: CoverFlowView_module_default.placeholder,
						children: "Loading..."
					});
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `${CoverFlowView_module_default.slideContent} ${isActive ? CoverFlowView_module_default.activeSlide : ""} ${hidingIds.has(photo.id) ? CoverFlowView_module_default.hiding : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `${CoverFlowView_module_default.imageContainer} ${isActualSize ? CoverFlowView_module_default.actualSizeContainer : ""} ${zoomLevel > 1 || isActualSize ? CoverFlowView_module_default.panningActive : ""}`,
							ref: isActive ? containerRef : null,
							onMouseMove: isActive ? handleMouseMove : void 0,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: CoverFlowView_module_default.zoomWrapper,
								style: {
									transform: !isActualSize ? `scale(${zoomLevel})` : void 0,
									transformOrigin: panOrigin,
									transition: isActualSize ? "none" : "transform 0.2s ease-out, transform-origin 0.1s ease-out"
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoCard, {
									photo,
									isCoverFlowMode: true,
									panOrigin: isActualSize ? panOrigin : "50% 50%"
								})
							})
						}), isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: CoverFlowView_module_default.actionButtons,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: (e) => {
										e.stopPropagation();
										handleToggleFavorite(photo.id);
									},
									className: CoverFlowView_module_default.fullWidthFavoriteBtn,
									"aria-label": photo.is_favorite ? "Remove from favorites" : "Add to favorites",
									title: "Favorite (t)",
									children: photo.is_favorite ? "★ Unfav" : "☆ Fav"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: (e) => {
										e.stopPropagation();
										handleToggleHide(photo.id);
									},
									className: CoverFlowView_module_default.fullWidthFavoriteBtn,
									"aria-label": photo.is_hidden ? "Unhide photo" : "Hide photo",
									title: "Hide (n)",
									children: photo.is_hidden ? "👁️ Unhide" : "🚫 Hide"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: CoverFlowView_module_default.zoomControls,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: zoomIn,
											title: "Zoom In (+)",
											children: "+"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: zoomOut,
											title: "Zoom Out (-)",
											children: "-"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: resetZoom,
											title: "Fit (r)",
											children: "⟄"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: setActualSize,
											title: "1:1 (a)",
											children: "1:1"
										})
									]
								})
							]
						})]
					});
				}
			}, photo?.id || index))
		})
	});
}
var VerticalFlowView_module_default = {
	verticalViewContainer: "_verticalViewContainer_pz8qr_1",
	backToGridBtn: "_backToGridBtn_pz8qr_14",
	mainArea: "_mainArea_pz8qr_42",
	mainSwiper: "_mainSwiper_pz8qr_49",
	mainSlide: "_mainSlide_pz8qr_54",
	mainContent: "_mainContent_pz8qr_60",
	activeMain: "_activeMain_pz8qr_71",
	hiding: "_hiding_pz8qr_76",
	imageFocusContainer: "_imageFocusContainer_pz8qr_83",
	panningActive: "_panningActive_pz8qr_102",
	actualSize: "_actualSize_pz8qr_107",
	focusImage: "_focusImage_pz8qr_117",
	imageOverlay: "_imageOverlay_pz8qr_128",
	floatingFavBtn: "_floatingFavBtn_pz8qr_139",
	zoomControls: "_zoomControls_pz8qr_166",
	floatingHideBtn: "_floatingHideBtn_pz8qr_199",
	sidebarArea: "_sidebarArea_pz8qr_240",
	thumbsSwiper: "_thumbsSwiper_pz8qr_247",
	thumbSlide: "_thumbSlide_pz8qr_252",
	thumbWrapper: "_thumbWrapper_pz8qr_258",
	thumbImage: "_thumbImage_pz8qr_276",
	thumbFavBadge: "_thumbFavBadge_pz8qr_282",
	mainPlaceholder: "_mainPlaceholder_pz8qr_329",
	thumbPlaceholder: "_thumbPlaceholder_pz8qr_340"
};
//#endregion
//#region src/features/gallery/VerticalFlowView.jsx
/**
* Vertical View with virtualization for both main image and thumbnail sidebar.
*/
function VerticalFlowView({ photos }) {
	const { toggleFavorite, toggleHidden, dispatch, photosArray, totalCount, loadPage } = useGallery();
	const [thumbsSwiper, setThumbsSwiper] = (0, import_react.useState)(null);
	const [hidingIds, setHidingIds] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
	const [zoomLevel, setZoomLevel] = (0, import_react.useState)(1);
	const [isActualSize, setIsActualSize] = (0, import_react.useState)(false);
	const [panOrigin, setPanOrigin] = (0, import_react.useState)("50% 50%");
	const containerRef = (0, import_react.useRef)(null);
	const handleToggleHide = (0, import_react.useCallback)((id) => {
		setHidingIds((prev) => new Set([...prev, id]));
		setTimeout(() => toggleHidden(id), 300);
	}, [toggleHidden]);
	const handleToggleFavorite = (0, import_react.useCallback)((id) => {
		toggleFavorite(id);
	}, [toggleFavorite]);
	const zoomIn = () => setZoomLevel((prev) => Math.min(prev + .2, 5));
	const zoomOut = () => setZoomLevel((prev) => Math.max(prev - .2, .1));
	const resetZoom = () => {
		setZoomLevel(1);
		setIsActualSize(false);
		setPanOrigin("50% 50%");
	};
	const setActualSize = () => {
		setIsActualSize(true);
		setZoomLevel(1);
		setPanOrigin("50% 50%");
	};
	const handleMouseMove = (e) => {
		if (zoomLevel <= 1 && !isActualSize) return;
		const container = containerRef.current;
		if (!container) return;
		const rect = container.getBoundingClientRect();
		setPanOrigin(`${(e.clientX - rect.left) / rect.width * 100}% ${(e.clientY - rect.top) / rect.height * 100}%`);
	};
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			const activePhoto = photosArray[activeIndex];
			if (!activePhoto) return;
			switch (e.key.toLowerCase()) {
				case "n":
					handleToggleHide(activePhoto.id);
					break;
				case "t":
					handleToggleFavorite(activePhoto.id);
					break;
				case "r":
					resetZoom();
					break;
				case "a":
					setActualSize();
					break;
				case "+":
				case "=":
					zoomIn();
					break;
				case "-":
				case "_":
					zoomOut();
					break;
				default: break;
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [
		activeIndex,
		photosArray,
		handleToggleHide,
		handleToggleFavorite
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: VerticalFlowView_module_default.verticalViewContainer,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: VerticalFlowView_module_default.backToGridBtn,
				onClick: () => dispatch({
					type: "SET_VIEW_MODE",
					payload: "GRID"
				}),
				"aria-label": "Back to Grid view",
				title: "Exit Vertical View",
				children: "⊞"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: VerticalFlowView_module_default.mainArea,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swiper, {
					onSlideChange: (swiper) => {
						setActiveIndex(swiper.activeIndex);
						resetZoom();
						loadPage(swiper.activeIndex);
						loadPage(swiper.activeIndex + 1);
					},
					direction: "vertical",
					spaceBetween: 0,
					navigation: true,
					thumbs: { swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null },
					virtual: true,
					modules: [
						freeMode,
						Navigation,
						Thumb,
						Keyboard,
						Mousewheel,
						A11y,
						Virtual
					],
					className: VerticalFlowView_module_default.mainSwiper,
					keyboard: {
						enabled: true,
						onlyInViewport: false
					},
					mousewheel: true,
					centeredSlides: true,
					children: photosArray.map((photo, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwiperSlide, {
						virtualIndex: index,
						className: VerticalFlowView_module_default.mainSlide,
						children: ({ isActive }) => {
							if (!photo) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: VerticalFlowView_module_default.mainPlaceholder,
								children: "Loading..."
							});
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `${VerticalFlowView_module_default.mainContent} ${isActive ? VerticalFlowView_module_default.activeMain : ""} ${hidingIds.has(photo.id) ? VerticalFlowView_module_default.hiding : ""}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `${VerticalFlowView_module_default.imageFocusContainer} ${zoomLevel > 1 || isActualSize ? VerticalFlowView_module_default.panningActive : ""}`,
										ref: isActive ? containerRef : null,
										onMouseMove: isActive ? handleMouseMove : void 0,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: photo.url,
											alt: "Gallery focus view",
											className: `${VerticalFlowView_module_default.focusImage} ${isActualSize ? VerticalFlowView_module_default.actualSize : ""}`,
											style: {
												transform: !isActualSize ? `scale(${zoomLevel})` : void 0,
												transformOrigin: panOrigin,
												objectPosition: isActualSize ? panOrigin : "50% 50%",
												transition: isActualSize ? "none" : "transform 0.2s ease-out, transform-origin 0.1s ease-out"
											},
											loading: "lazy"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: VerticalFlowView_module_default.imageOverlay }),
									isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: (e) => {
												e.stopPropagation();
												handleToggleFavorite(photo.id);
											},
											className: VerticalFlowView_module_default.floatingFavBtn,
											"aria-label": photo.is_favorite ? "Remove from favorites" : "Add to favorites",
											title: photo.is_favorite ? "Remove from favorites" : "Add to favorites (t)",
											children: photo.is_favorite ? "♥" : "♡"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: (e) => {
												e.stopPropagation();
												handleToggleHide(photo.id);
											},
											className: VerticalFlowView_module_default.floatingHideBtn,
											"aria-label": photo.is_hidden ? "Unhide photo" : "Hide photo",
											title: photo.is_hidden ? "Unhide photo" : "Hide photo (n)",
											children: photo.is_hidden ? "👁️" : "🚫"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: VerticalFlowView_module_default.zoomControls,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: zoomIn,
													title: "Zoom In (+)",
													children: "+"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: zoomOut,
													title: "Zoom Out (-)",
													children: "-"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: resetZoom,
													title: "Fit to View (r)",
													children: "⟄"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: setActualSize,
													title: "Actual Size (a)",
													children: "1:1"
												})
											]
										})
									] })
								]
							});
						}
					}, photo?.id || index))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: VerticalFlowView_module_default.sidebarArea,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swiper, {
					onSwiper: setThumbsSwiper,
					direction: "vertical",
					spaceBetween: 15,
					slidesPerView: "auto",
					freeMode: true,
					watchSlidesProgress: true,
					virtual: true,
					modules: [
						freeMode,
						Navigation,
						Thumb,
						Mousewheel,
						Virtual
					],
					className: VerticalFlowView_module_default.thumbsSwiper,
					mousewheel: true,
					children: photosArray.map((photo, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwiperSlide, {
						virtualIndex: index,
						className: VerticalFlowView_module_default.thumbSlide,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: VerticalFlowView_module_default.thumbWrapper,
							children: photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: photo.url,
								alt: "Thumbnail",
								className: VerticalFlowView_module_default.thumbImage
							}), photo.is_favorite && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: VerticalFlowView_module_default.thumbFavBadge,
								children: "★"
							})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: VerticalFlowView_module_default.thumbPlaceholder,
								children: "..."
							})
						})
					}, photo?.id || index))
				})
			})
		]
	});
}
var GalleryLayout_module_default = {
	layoutContainer: "_layoutContainer_1jea8_1",
	loader: "_loader_1jea8_8",
	error: "_error_1jea8_8",
	emptyState: "_emptyState_1jea8_8"
};
//#endregion
//#region src/features/gallery/GalleryLayout.jsx
/**
* Selects and renders the appropriate layout based on viewMode.
* Fulfills REQ-UI-LAYOUT-TOGGLE: Dual-mode rendering, now with Vertical View.
*/
function GalleryLayout() {
	const { photos, photosArray, viewMode, loading, error } = useGallery();
	if (loading && photos.totalCount === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: GalleryLayout_module_default.loader,
		children: "Loading gallery..."
	});
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: GalleryLayout_module_default.error,
		children: ["Error: ", error]
	});
	if (photos.totalCount === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: GalleryLayout_module_default.emptyState,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No photos found. Add some URLs or clear your filters." })
	});
	const renderContent = () => {
		switch (viewMode) {
			case "GRID": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridView, { photos: photosArray });
			case "COVER_FLOW": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverFlowView, { photos: photosArray });
			case "VERTICAL_FLOW": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerticalFlowView, { photos: photosArray });
			default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridView, { photos: photosArray });
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: GalleryLayout_module_default.layoutContainer,
		children: renderContent()
	});
}
var App_module_default = {
	appShell: "_appShell_fz3pk_1",
	mainContent: "_mainContent_fz3pk_9"
};
//#endregion
//#region src/App.jsx
/**
* Root application shell.
* Fulfills REQ-APP-SHELL: Top-level layout with context provider.
*/
function AppContent() {
	const { viewMode } = useGallery();
	const showNavbar = viewMode !== "VERTICAL_FLOW";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: App_module_default.appShell,
		children: [showNavbar && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: App_module_default.mainContent,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryLayout, {})
		})]
	});
}
function App() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppContent, {}) }) });
}
//#endregion
//#region src/main.jsx
import_client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {}) }));
if ("serviceWorker" in navigator) window.addEventListener("load", () => {
	navigator.serviceWorker.register("/sw.js").then((registration) => {
		console.log("SW registered: ", registration);
	}).catch((registrationError) => {
		console.log("SW registration failed: ", registrationError);
	});
});
//#endregion

//# sourceMappingURL=index-C7Mmdp6u.js.map