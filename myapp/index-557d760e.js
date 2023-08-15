function B1(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function U1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Nm = { exports: {} },
  ga = {},
  _m = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ci = Symbol.for("react.element"),
  W1 = Symbol.for("react.portal"),
  H1 = Symbol.for("react.fragment"),
  G1 = Symbol.for("react.strict_mode"),
  K1 = Symbol.for("react.profiler"),
  Q1 = Symbol.for("react.provider"),
  Y1 = Symbol.for("react.context"),
  X1 = Symbol.for("react.forward_ref"),
  q1 = Symbol.for("react.suspense"),
  J1 = Symbol.for("react.memo"),
  Z1 = Symbol.for("react.lazy"),
  bd = Symbol.iterator;
function ex(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (bd && e[bd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var jm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Dm = Object.assign,
  Im = {};
function ro(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Im),
    (this.updater = n || jm);
}
ro.prototype.isReactComponent = {};
ro.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ro.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function $m() {}
$m.prototype = ro.prototype;
function Ic(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Im),
    (this.updater = n || jm);
}
var $c = (Ic.prototype = new $m());
$c.constructor = Ic;
Dm($c, ro.prototype);
$c.isPureReactComponent = !0;
var Td = Array.isArray,
  Vm = Object.prototype.hasOwnProperty,
  Vc = { current: null },
  Fm = { key: !0, ref: !0, __self: !0, __source: !0 };
function zm(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Vm.call(t, r) && !Fm.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: Ci,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Vc.current,
  };
}
function tx(e, t) {
  return {
    $$typeof: Ci,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Fc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ci;
}
function nx(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Rd = /\/+/g;
function Pl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? nx("" + e.key)
    : t.toString(36);
}
function us(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ci:
          case W1:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Pl(s, 0) : r),
      Td(o)
        ? ((n = ""),
          e != null && (n = e.replace(Rd, "$&/") + "/"),
          us(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Fc(o) &&
            (o = tx(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Rd, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Td(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + Pl(i, a);
      s += us(i, t, n, l, o);
    }
  else if (((l = ex(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + Pl(i, a++)), (s += us(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return s;
}
function Fi(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    us(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function rx(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Be = { current: null },
  cs = { transition: null },
  ox = {
    ReactCurrentDispatcher: Be,
    ReactCurrentBatchConfig: cs,
    ReactCurrentOwner: Vc,
  };
F.Children = {
  map: Fi,
  forEach: function (e, t, n) {
    Fi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Fi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Fi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Fc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
F.Component = ro;
F.Fragment = H1;
F.Profiler = K1;
F.PureComponent = Ic;
F.StrictMode = G1;
F.Suspense = q1;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ox;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Dm({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Vc.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Vm.call(t, l) &&
        !Fm.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Ci, type: e.type, key: o, ref: i, props: r, _owner: s };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: Y1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Q1, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = zm;
F.createFactory = function (e) {
  var t = zm.bind(null, e);
  return (t.type = e), t;
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: X1, render: e };
};
F.isValidElement = Fc;
F.lazy = function (e) {
  return { $$typeof: Z1, _payload: { _status: -1, _result: e }, _init: rx };
};
F.memo = function (e, t) {
  return { $$typeof: J1, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = cs.transition;
  cs.transition = {};
  try {
    e();
  } finally {
    cs.transition = t;
  }
};
F.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
F.useCallback = function (e, t) {
  return Be.current.useCallback(e, t);
};
F.useContext = function (e) {
  return Be.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return Be.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return Be.current.useEffect(e, t);
};
F.useId = function () {
  return Be.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return Be.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return Be.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return Be.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return Be.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return Be.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return Be.current.useRef(e);
};
F.useState = function (e) {
  return Be.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return Be.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return Be.current.useTransition();
};
F.version = "18.2.0";
_m.exports = F;
var S = _m.exports;
const Ei = U1(S),
  yu = B1({ __proto__: null, default: Ei }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ix = S,
  sx = Symbol.for("react.element"),
  ax = Symbol.for("react.fragment"),
  lx = Object.prototype.hasOwnProperty,
  ux = ix.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  cx = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bm(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) lx.call(t, r) && !cx.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: sx,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: ux.current,
  };
}
ga.Fragment = ax;
ga.jsx = Bm;
ga.jsxs = Bm;
Nm.exports = ga;
var T = Nm.exports,
  vu = {},
  Um = { exports: {} },
  st = {},
  Wm = { exports: {} },
  Hm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, _) {
    var D = O.length;
    O.push(_);
    e: for (; 0 < D; ) {
      var N = (D - 1) >>> 1,
        K = O[N];
      if (0 < o(K, _)) (O[N] = _), (O[D] = K), (D = N);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var _ = O[0],
      D = O.pop();
    if (D !== _) {
      O[0] = D;
      e: for (var N = 0, K = O.length, pe = K >>> 1; N < pe; ) {
        var bt = 2 * (N + 1) - 1,
          cr = O[bt],
          Je = bt + 1,
          Fn = O[Je];
        if (0 > o(cr, D))
          Je < K && 0 > o(Fn, cr)
            ? ((O[N] = Fn), (O[Je] = D), (N = Je))
            : ((O[N] = cr), (O[bt] = D), (N = bt));
        else if (Je < K && 0 > o(Fn, D)) (O[N] = Fn), (O[Je] = D), (N = Je);
        else break e;
      }
    }
    return _;
  }
  function o(O, _) {
    var D = O.sortIndex - _.sortIndex;
    return D !== 0 ? D : O.id - _.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    m = !1,
    h = !1,
    g = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    y = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(O) {
    for (var _ = n(u); _ !== null; ) {
      if (_.callback === null) r(u);
      else if (_.startTime <= O)
        r(u), (_.sortIndex = _.expirationTime), t(l, _);
      else break;
      _ = n(u);
    }
  }
  function x(O) {
    if (((g = !1), v(O), !h))
      if (n(l) !== null) (h = !0), Te(C);
      else {
        var _ = n(u);
        _ !== null && qe(x, _.startTime - O);
      }
  }
  function C(O, _) {
    (h = !1), g && ((g = !1), y(k), (k = -1)), (m = !0);
    var D = d;
    try {
      for (
        v(_), f = n(l);
        f !== null && (!(f.expirationTime > _) || (O && !z()));

      ) {
        var N = f.callback;
        if (typeof N == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var K = N(f.expirationTime <= _);
          (_ = e.unstable_now()),
            typeof K == "function" ? (f.callback = K) : f === n(l) && r(l),
            v(_);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var pe = !0;
      else {
        var bt = n(u);
        bt !== null && qe(x, bt.startTime - _), (pe = !1);
      }
      return pe;
    } finally {
      (f = null), (d = D), (m = !1);
    }
  }
  var b = !1,
    E = null,
    k = -1,
    M = 5,
    A = -1;
  function z() {
    return !(e.unstable_now() - A < M);
  }
  function I() {
    if (E !== null) {
      var O = e.unstable_now();
      A = O;
      var _ = !0;
      try {
        _ = E(!0, O);
      } finally {
        _ ? ge() : ((b = !1), (E = null));
      }
    } else b = !1;
  }
  var ge;
  if (typeof p == "function")
    ge = function () {
      p(I);
    };
  else if (typeof MessageChannel < "u") {
    var X = new MessageChannel(),
      q = X.port2;
    (X.port1.onmessage = I),
      (ge = function () {
        q.postMessage(null);
      });
  } else
    ge = function () {
      w(I, 0);
    };
  function Te(O) {
    (E = O), b || ((b = !0), ge());
  }
  function qe(O, _) {
    k = w(function () {
      O(e.unstable_now());
    }, _);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      h || m || ((h = !0), Te(C));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (M = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (O) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = d;
      }
      var D = d;
      d = _;
      try {
        return O();
      } finally {
        d = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, _) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var D = d;
      d = O;
      try {
        return _();
      } finally {
        d = D;
      }
    }),
    (e.unstable_scheduleCallback = function (O, _, D) {
      var N = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? N + D : N))
          : (D = N),
        O)
      ) {
        case 1:
          var K = -1;
          break;
        case 2:
          K = 250;
          break;
        case 5:
          K = 1073741823;
          break;
        case 4:
          K = 1e4;
          break;
        default:
          K = 5e3;
      }
      return (
        (K = D + K),
        (O = {
          id: c++,
          callback: _,
          priorityLevel: O,
          startTime: D,
          expirationTime: K,
          sortIndex: -1,
        }),
        D > N
          ? ((O.sortIndex = D),
            t(u, O),
            n(l) === null &&
              O === n(u) &&
              (g ? (y(k), (k = -1)) : (g = !0), qe(x, D - N)))
          : ((O.sortIndex = K), t(l, O), h || m || ((h = !0), Te(C))),
        O
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (O) {
      var _ = d;
      return function () {
        var D = d;
        d = _;
        try {
          return O.apply(this, arguments);
        } finally {
          d = D;
        }
      };
    });
})(Hm);
Wm.exports = Hm;
var fx = Wm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gm = S,
  ot = fx;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Km = new Set(),
  Qo = {};
function ir(e, t) {
  Ur(e, t), Ur(e + "Capture", t);
}
function Ur(e, t) {
  for (Qo[e] = t, e = 0; e < t.length; e++) Km.add(t[e]);
}
var qt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  xu = Object.prototype.hasOwnProperty,
  dx =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ad = {},
  Od = {};
function px(e) {
  return xu.call(Od, e)
    ? !0
    : xu.call(Ad, e)
    ? !1
    : dx.test(e)
    ? (Od[e] = !0)
    : ((Ad[e] = !0), !1);
}
function hx(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function mx(e, t, n, r) {
  if (t === null || typeof t > "u" || hx(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ue(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var Le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Le[e] = new Ue(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Le[t] = new Ue(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Le[e] = new Ue(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Le[e] = new Ue(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Le[e] = new Ue(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Le[e] = new Ue(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Le[e] = new Ue(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Le[e] = new Ue(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Le[e] = new Ue(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var zc = /[\-:]([a-z])/g;
function Bc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(zc, Bc);
    Le[t] = new Ue(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(zc, Bc);
    Le[t] = new Ue(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(zc, Bc);
  Le[t] = new Ue(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Le[e] = new Ue(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Le.xlinkHref = new Ue(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Le[e] = new Ue(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Uc(e, t, n, r) {
  var o = Le.hasOwnProperty(t) ? Le[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (mx(t, n, o, r) && (n = null),
    r || o === null
      ? px(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var rn = Gm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  zi = Symbol.for("react.element"),
  xr = Symbol.for("react.portal"),
  wr = Symbol.for("react.fragment"),
  Wc = Symbol.for("react.strict_mode"),
  wu = Symbol.for("react.profiler"),
  Qm = Symbol.for("react.provider"),
  Ym = Symbol.for("react.context"),
  Hc = Symbol.for("react.forward_ref"),
  Su = Symbol.for("react.suspense"),
  Cu = Symbol.for("react.suspense_list"),
  Gc = Symbol.for("react.memo"),
  cn = Symbol.for("react.lazy"),
  Xm = Symbol.for("react.offscreen"),
  Ld = Symbol.iterator;
function co(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ld && e[Ld]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ue = Object.assign,
  kl;
function To(e) {
  if (kl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      kl = (t && t[1]) || "";
    }
  return (
    `
` +
    kl +
    e
  );
}
var bl = !1;
function Tl(e, t) {
  if (!e || bl) return "";
  bl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (bl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? To(e) : "";
}
function gx(e) {
  switch (e.tag) {
    case 5:
      return To(e.type);
    case 16:
      return To("Lazy");
    case 13:
      return To("Suspense");
    case 19:
      return To("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Tl(e.type, !1)), e;
    case 11:
      return (e = Tl(e.type.render, !1)), e;
    case 1:
      return (e = Tl(e.type, !0)), e;
    default:
      return "";
  }
}
function Eu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case wr:
      return "Fragment";
    case xr:
      return "Portal";
    case wu:
      return "Profiler";
    case Wc:
      return "StrictMode";
    case Su:
      return "Suspense";
    case Cu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ym:
        return (e.displayName || "Context") + ".Consumer";
      case Qm:
        return (e._context.displayName || "Context") + ".Provider";
      case Hc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Gc:
        return (
          (t = e.displayName || null), t !== null ? t : Eu(e.type) || "Memo"
        );
      case cn:
        (t = e._payload), (e = e._init);
        try {
          return Eu(e(t));
        } catch {}
    }
  return null;
}
function yx(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Eu(t);
    case 8:
      return t === Wc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function On(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function qm(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function vx(e) {
  var t = qm(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Bi(e) {
  e._valueTracker || (e._valueTracker = vx(e));
}
function Jm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = qm(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ls(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Pu(e, t) {
  var n = t.checked;
  return ue({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Md(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = On(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Zm(e, t) {
  (t = t.checked), t != null && Uc(e, "checked", t, !1);
}
function ku(e, t) {
  Zm(e, t);
  var n = On(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? bu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && bu(e, t.type, On(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Nd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function bu(e, t, n) {
  (t !== "number" || Ls(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ro = Array.isArray;
function jr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + On(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Tu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return ue({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function _d(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (Ro(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: On(n) };
}
function eg(e, t) {
  var n = On(t.value),
    r = On(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function jd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function tg(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ru(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? tg(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ui,
  ng = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ui = Ui || document.createElement("div"),
          Ui.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ui.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Yo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Mo = {
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
    strokeWidth: !0,
  },
  xx = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mo).forEach(function (e) {
  xx.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Mo[t] = Mo[e]);
  });
});
function rg(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Mo.hasOwnProperty(e) && Mo[e])
    ? ("" + t).trim()
    : t + "px";
}
function og(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = rg(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var wx = ue(
  { menuitem: !0 },
  {
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
    wbr: !0,
  },
);
function Au(e, t) {
  if (t) {
    if (wx[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function Ou(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Lu = null;
function Kc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Mu = null,
  Dr = null,
  Ir = null;
function Dd(e) {
  if ((e = bi(e))) {
    if (typeof Mu != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = Sa(t)), Mu(e.stateNode, e.type, t));
  }
}
function ig(e) {
  Dr ? (Ir ? Ir.push(e) : (Ir = [e])) : (Dr = e);
}
function sg() {
  if (Dr) {
    var e = Dr,
      t = Ir;
    if (((Ir = Dr = null), Dd(e), t)) for (e = 0; e < t.length; e++) Dd(t[e]);
  }
}
function ag(e, t) {
  return e(t);
}
function lg() {}
var Rl = !1;
function ug(e, t, n) {
  if (Rl) return e(t, n);
  Rl = !0;
  try {
    return ag(e, t, n);
  } finally {
    (Rl = !1), (Dr !== null || Ir !== null) && (lg(), sg());
  }
}
function Xo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Sa(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var Nu = !1;
if (qt)
  try {
    var fo = {};
    Object.defineProperty(fo, "passive", {
      get: function () {
        Nu = !0;
      },
    }),
      window.addEventListener("test", fo, fo),
      window.removeEventListener("test", fo, fo);
  } catch {
    Nu = !1;
  }
function Sx(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var No = !1,
  Ms = null,
  Ns = !1,
  _u = null,
  Cx = {
    onError: function (e) {
      (No = !0), (Ms = e);
    },
  };
function Ex(e, t, n, r, o, i, s, a, l) {
  (No = !1), (Ms = null), Sx.apply(Cx, arguments);
}
function Px(e, t, n, r, o, i, s, a, l) {
  if ((Ex.apply(this, arguments), No)) {
    if (No) {
      var u = Ms;
      (No = !1), (Ms = null);
    } else throw Error(R(198));
    Ns || ((Ns = !0), (_u = u));
  }
}
function sr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function cg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Id(e) {
  if (sr(e) !== e) throw Error(R(188));
}
function kx(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = sr(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Id(o), e;
        if (i === r) return Id(o), t;
        i = i.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function fg(e) {
  return (e = kx(e)), e !== null ? dg(e) : null;
}
function dg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = dg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var pg = ot.unstable_scheduleCallback,
  $d = ot.unstable_cancelCallback,
  bx = ot.unstable_shouldYield,
  Tx = ot.unstable_requestPaint,
  he = ot.unstable_now,
  Rx = ot.unstable_getCurrentPriorityLevel,
  Qc = ot.unstable_ImmediatePriority,
  hg = ot.unstable_UserBlockingPriority,
  _s = ot.unstable_NormalPriority,
  Ax = ot.unstable_LowPriority,
  mg = ot.unstable_IdlePriority,
  ya = null,
  jt = null;
function Ox(e) {
  if (jt && typeof jt.onCommitFiberRoot == "function")
    try {
      jt.onCommitFiberRoot(ya, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Et = Math.clz32 ? Math.clz32 : Nx,
  Lx = Math.log,
  Mx = Math.LN2;
function Nx(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Lx(e) / Mx) | 0)) | 0;
}
var Wi = 64,
  Hi = 4194304;
function Ao(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function js(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = Ao(a)) : ((i &= s), i !== 0 && (r = Ao(i)));
  } else (s = n & ~o), s !== 0 ? (r = Ao(s)) : i !== 0 && (r = Ao(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Et(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function _x(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function jx(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - Et(i),
      a = 1 << s,
      l = o[s];
    l === -1
      ? (!(a & n) || a & r) && (o[s] = _x(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function ju(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function gg() {
  var e = Wi;
  return (Wi <<= 1), !(Wi & 4194240) && (Wi = 64), e;
}
function Al(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Pi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Et(t)),
    (e[t] = n);
}
function Dx(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Et(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Yc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Et(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var Q = 0;
function yg(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var vg,
  Xc,
  xg,
  wg,
  Sg,
  Du = !1,
  Gi = [],
  xn = null,
  wn = null,
  Sn = null,
  qo = new Map(),
  Jo = new Map(),
  pn = [],
  Ix =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Vd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      xn = null;
      break;
    case "dragenter":
    case "dragleave":
      wn = null;
      break;
    case "mouseover":
    case "mouseout":
      Sn = null;
      break;
    case "pointerover":
    case "pointerout":
      qo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Jo.delete(t.pointerId);
  }
}
function po(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = bi(t)), t !== null && Xc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function $x(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (xn = po(xn, e, t, n, r, o)), !0;
    case "dragenter":
      return (wn = po(wn, e, t, n, r, o)), !0;
    case "mouseover":
      return (Sn = po(Sn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return qo.set(i, po(qo.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Jo.set(i, po(Jo.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Cg(e) {
  var t = Kn(e.target);
  if (t !== null) {
    var n = sr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = cg(n)), t !== null)) {
          (e.blockedOn = t),
            Sg(e.priority, function () {
              xg(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function fs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Iu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Lu = r), n.target.dispatchEvent(r), (Lu = null);
    } else return (t = bi(n)), t !== null && Xc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Fd(e, t, n) {
  fs(e) && n.delete(t);
}
function Vx() {
  (Du = !1),
    xn !== null && fs(xn) && (xn = null),
    wn !== null && fs(wn) && (wn = null),
    Sn !== null && fs(Sn) && (Sn = null),
    qo.forEach(Fd),
    Jo.forEach(Fd);
}
function ho(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Du ||
      ((Du = !0),
      ot.unstable_scheduleCallback(ot.unstable_NormalPriority, Vx)));
}
function Zo(e) {
  function t(o) {
    return ho(o, e);
  }
  if (0 < Gi.length) {
    ho(Gi[0], e);
    for (var n = 1; n < Gi.length; n++) {
      var r = Gi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    xn !== null && ho(xn, e),
      wn !== null && ho(wn, e),
      Sn !== null && ho(Sn, e),
      qo.forEach(t),
      Jo.forEach(t),
      n = 0;
    n < pn.length;
    n++
  )
    (r = pn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < pn.length && ((n = pn[0]), n.blockedOn === null); )
    Cg(n), n.blockedOn === null && pn.shift();
}
var $r = rn.ReactCurrentBatchConfig,
  Ds = !0;
function Fx(e, t, n, r) {
  var o = Q,
    i = $r.transition;
  $r.transition = null;
  try {
    (Q = 1), qc(e, t, n, r);
  } finally {
    (Q = o), ($r.transition = i);
  }
}
function zx(e, t, n, r) {
  var o = Q,
    i = $r.transition;
  $r.transition = null;
  try {
    (Q = 4), qc(e, t, n, r);
  } finally {
    (Q = o), ($r.transition = i);
  }
}
function qc(e, t, n, r) {
  if (Ds) {
    var o = Iu(e, t, n, r);
    if (o === null) Vl(e, t, r, Is, n), Vd(e, r);
    else if ($x(o, e, t, n, r)) r.stopPropagation();
    else if ((Vd(e, r), t & 4 && -1 < Ix.indexOf(e))) {
      for (; o !== null; ) {
        var i = bi(o);
        if (
          (i !== null && vg(i),
          (i = Iu(e, t, n, r)),
          i === null && Vl(e, t, r, Is, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Vl(e, t, r, null, n);
  }
}
var Is = null;
function Iu(e, t, n, r) {
  if (((Is = null), (e = Kc(r)), (e = Kn(e)), e !== null))
    if (((t = sr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = cg(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Is = e), null;
}
function Eg(e) {
  switch (e) {
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
    case "selectstart":
      return 1;
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
    case "pointerleave":
      return 4;
    case "message":
      switch (Rx()) {
        case Qc:
          return 1;
        case hg:
          return 4;
        case _s:
        case Ax:
          return 16;
        case mg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var gn = null,
  Jc = null,
  ds = null;
function Pg() {
  if (ds) return ds;
  var e,
    t = Jc,
    n = t.length,
    r,
    o = "value" in gn ? gn.value : gn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (ds = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ps(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ki() {
  return !0;
}
function zd() {
  return !1;
}
function at(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ki
        : zd),
      (this.isPropagationStopped = zd),
      this
    );
  }
  return (
    ue(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ki));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ki));
      },
      persist: function () {},
      isPersistent: Ki,
    }),
    t
  );
}
var oo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Zc = at(oo),
  ki = ue({}, oo, { view: 0, detail: 0 }),
  Bx = at(ki),
  Ol,
  Ll,
  mo,
  va = ue({}, ki, {
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
    getModifierState: ef,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== mo &&
            (mo && e.type === "mousemove"
              ? ((Ol = e.screenX - mo.screenX), (Ll = e.screenY - mo.screenY))
              : (Ll = Ol = 0),
            (mo = e)),
          Ol);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ll;
    },
  }),
  Bd = at(va),
  Ux = ue({}, va, { dataTransfer: 0 }),
  Wx = at(Ux),
  Hx = ue({}, ki, { relatedTarget: 0 }),
  Ml = at(Hx),
  Gx = ue({}, oo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Kx = at(Gx),
  Qx = ue({}, oo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Yx = at(Qx),
  Xx = ue({}, oo, { data: 0 }),
  Ud = at(Xx),
  qx = {
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
    MozPrintableKey: "Unidentified",
  },
  Jx = {
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
    224: "Meta",
  },
  Zx = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function ew(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Zx[e]) ? !!t[e] : !1;
}
function ef() {
  return ew;
}
var tw = ue({}, ki, {
    key: function (e) {
      if (e.key) {
        var t = qx[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ps(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Jx[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ef,
    charCode: function (e) {
      return e.type === "keypress" ? ps(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ps(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  nw = at(tw),
  rw = ue({}, va, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Wd = at(rw),
  ow = ue({}, ki, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ef,
  }),
  iw = at(ow),
  sw = ue({}, oo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  aw = at(sw),
  lw = ue({}, va, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  uw = at(lw),
  cw = [9, 13, 27, 32],
  tf = qt && "CompositionEvent" in window,
  _o = null;
qt && "documentMode" in document && (_o = document.documentMode);
var fw = qt && "TextEvent" in window && !_o,
  kg = qt && (!tf || (_o && 8 < _o && 11 >= _o)),
  Hd = String.fromCharCode(32),
  Gd = !1;
function bg(e, t) {
  switch (e) {
    case "keyup":
      return cw.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Tg(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Sr = !1;
function dw(e, t) {
  switch (e) {
    case "compositionend":
      return Tg(t);
    case "keypress":
      return t.which !== 32 ? null : ((Gd = !0), Hd);
    case "textInput":
      return (e = t.data), e === Hd && Gd ? null : e;
    default:
      return null;
  }
}
function pw(e, t) {
  if (Sr)
    return e === "compositionend" || (!tf && bg(e, t))
      ? ((e = Pg()), (ds = Jc = gn = null), (Sr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return kg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var hw = {
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
  week: !0,
};
function Kd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!hw[e.type] : t === "textarea";
}
function Rg(e, t, n, r) {
  ig(r),
    (t = $s(t, "onChange")),
    0 < t.length &&
      ((n = new Zc("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var jo = null,
  ei = null;
function mw(e) {
  Vg(e, 0);
}
function xa(e) {
  var t = Pr(e);
  if (Jm(t)) return e;
}
function gw(e, t) {
  if (e === "change") return t;
}
var Ag = !1;
if (qt) {
  var Nl;
  if (qt) {
    var _l = "oninput" in document;
    if (!_l) {
      var Qd = document.createElement("div");
      Qd.setAttribute("oninput", "return;"),
        (_l = typeof Qd.oninput == "function");
    }
    Nl = _l;
  } else Nl = !1;
  Ag = Nl && (!document.documentMode || 9 < document.documentMode);
}
function Yd() {
  jo && (jo.detachEvent("onpropertychange", Og), (ei = jo = null));
}
function Og(e) {
  if (e.propertyName === "value" && xa(ei)) {
    var t = [];
    Rg(t, ei, e, Kc(e)), ug(mw, t);
  }
}
function yw(e, t, n) {
  e === "focusin"
    ? (Yd(), (jo = t), (ei = n), jo.attachEvent("onpropertychange", Og))
    : e === "focusout" && Yd();
}
function vw(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return xa(ei);
}
function xw(e, t) {
  if (e === "click") return xa(t);
}
function ww(e, t) {
  if (e === "input" || e === "change") return xa(t);
}
function Sw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var kt = typeof Object.is == "function" ? Object.is : Sw;
function ti(e, t) {
  if (kt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!xu.call(t, o) || !kt(e[o], t[o])) return !1;
  }
  return !0;
}
function Xd(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function qd(e, t) {
  var n = Xd(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Xd(n);
  }
}
function Lg(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Lg(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Mg() {
  for (var e = window, t = Ls(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ls(e.document);
  }
  return t;
}
function nf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Cw(e) {
  var t = Mg(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Lg(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && nf(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = qd(n, i));
        var s = qd(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Ew = qt && "documentMode" in document && 11 >= document.documentMode,
  Cr = null,
  $u = null,
  Do = null,
  Vu = !1;
function Jd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Vu ||
    Cr == null ||
    Cr !== Ls(r) ||
    ((r = Cr),
    "selectionStart" in r && nf(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Do && ti(Do, r)) ||
      ((Do = r),
      (r = $s($u, "onSelect")),
      0 < r.length &&
        ((t = new Zc("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Cr))));
}
function Qi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Er = {
    animationend: Qi("Animation", "AnimationEnd"),
    animationiteration: Qi("Animation", "AnimationIteration"),
    animationstart: Qi("Animation", "AnimationStart"),
    transitionend: Qi("Transition", "TransitionEnd"),
  },
  jl = {},
  Ng = {};
qt &&
  ((Ng = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Er.animationend.animation,
    delete Er.animationiteration.animation,
    delete Er.animationstart.animation),
  "TransitionEvent" in window || delete Er.transitionend.transition);
function wa(e) {
  if (jl[e]) return jl[e];
  if (!Er[e]) return e;
  var t = Er[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ng) return (jl[e] = t[n]);
  return e;
}
var _g = wa("animationend"),
  jg = wa("animationiteration"),
  Dg = wa("animationstart"),
  Ig = wa("transitionend"),
  $g = new Map(),
  Zd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function jn(e, t) {
  $g.set(e, t), ir(t, [e]);
}
for (var Dl = 0; Dl < Zd.length; Dl++) {
  var Il = Zd[Dl],
    Pw = Il.toLowerCase(),
    kw = Il[0].toUpperCase() + Il.slice(1);
  jn(Pw, "on" + kw);
}
jn(_g, "onAnimationEnd");
jn(jg, "onAnimationIteration");
jn(Dg, "onAnimationStart");
jn("dblclick", "onDoubleClick");
jn("focusin", "onFocus");
jn("focusout", "onBlur");
jn(Ig, "onTransitionEnd");
Ur("onMouseEnter", ["mouseout", "mouseover"]);
Ur("onMouseLeave", ["mouseout", "mouseover"]);
Ur("onPointerEnter", ["pointerout", "pointerover"]);
Ur("onPointerLeave", ["pointerout", "pointerover"]);
ir(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
ir(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
ir("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ir(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
ir(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
ir(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Oo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  bw = new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));
function ep(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Px(r, t, void 0, e), (e.currentTarget = null);
}
function Vg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          ep(o, a, u), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          ep(o, a, u), (i = l);
        }
    }
  }
  if (Ns) throw ((e = _u), (Ns = !1), (_u = null), e);
}
function te(e, t) {
  var n = t[Wu];
  n === void 0 && (n = t[Wu] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Fg(t, e, 2, !1), n.add(r));
}
function $l(e, t, n) {
  var r = 0;
  t && (r |= 4), Fg(n, e, r, t);
}
var Yi = "_reactListening" + Math.random().toString(36).slice(2);
function ni(e) {
  if (!e[Yi]) {
    (e[Yi] = !0),
      Km.forEach(function (n) {
        n !== "selectionchange" && (bw.has(n) || $l(n, !1, e), $l(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Yi] || ((t[Yi] = !0), $l("selectionchange", !1, t));
  }
}
function Fg(e, t, n, r) {
  switch (Eg(t)) {
    case 1:
      var o = Fx;
      break;
    case 4:
      o = zx;
      break;
    default:
      o = qc;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Nu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Vl(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Kn(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  ug(function () {
    var u = i,
      c = Kc(n),
      f = [];
    e: {
      var d = $g.get(e);
      if (d !== void 0) {
        var m = Zc,
          h = e;
        switch (e) {
          case "keypress":
            if (ps(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = nw;
            break;
          case "focusin":
            (h = "focus"), (m = Ml);
            break;
          case "focusout":
            (h = "blur"), (m = Ml);
            break;
          case "beforeblur":
          case "afterblur":
            m = Ml;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = Wx;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = iw;
            break;
          case _g:
          case jg:
          case Dg:
            m = Kx;
            break;
          case Ig:
            m = aw;
            break;
          case "scroll":
            m = Bx;
            break;
          case "wheel":
            m = uw;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = Yx;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Wd;
        }
        var g = (t & 4) !== 0,
          w = !g && e === "scroll",
          y = g ? (d !== null ? d + "Capture" : null) : d;
        g = [];
        for (var p = u, v; p !== null; ) {
          v = p;
          var x = v.stateNode;
          if (
            (v.tag === 5 &&
              x !== null &&
              ((v = x),
              y !== null && ((x = Xo(p, y)), x != null && g.push(ri(p, x, v)))),
            w)
          )
            break;
          p = p.return;
        }
        0 < g.length &&
          ((d = new m(d, h, null, n, c)), f.push({ event: d, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          d &&
            n !== Lu &&
            (h = n.relatedTarget || n.fromElement) &&
            (Kn(h) || h[Jt]))
        )
          break e;
        if (
          (m || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          m
            ? ((h = n.relatedTarget || n.toElement),
              (m = u),
              (h = h ? Kn(h) : null),
              h !== null &&
                ((w = sr(h)), h !== w || (h.tag !== 5 && h.tag !== 6)) &&
                (h = null))
            : ((m = null), (h = u)),
          m !== h)
        ) {
          if (
            ((g = Bd),
            (x = "onMouseLeave"),
            (y = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Wd),
              (x = "onPointerLeave"),
              (y = "onPointerEnter"),
              (p = "pointer")),
            (w = m == null ? d : Pr(m)),
            (v = h == null ? d : Pr(h)),
            (d = new g(x, p + "leave", m, n, c)),
            (d.target = w),
            (d.relatedTarget = v),
            (x = null),
            Kn(c) === u &&
              ((g = new g(y, p + "enter", h, n, c)),
              (g.target = v),
              (g.relatedTarget = w),
              (x = g)),
            (w = x),
            m && h)
          )
            t: {
              for (g = m, y = h, p = 0, v = g; v; v = fr(v)) p++;
              for (v = 0, x = y; x; x = fr(x)) v++;
              for (; 0 < p - v; ) (g = fr(g)), p--;
              for (; 0 < v - p; ) (y = fr(y)), v--;
              for (; p--; ) {
                if (g === y || (y !== null && g === y.alternate)) break t;
                (g = fr(g)), (y = fr(y));
              }
              g = null;
            }
          else g = null;
          m !== null && tp(f, d, m, g, !1),
            h !== null && w !== null && tp(f, w, h, g, !0);
        }
      }
      e: {
        if (
          ((d = u ? Pr(u) : window),
          (m = d.nodeName && d.nodeName.toLowerCase()),
          m === "select" || (m === "input" && d.type === "file"))
        )
          var C = gw;
        else if (Kd(d))
          if (Ag) C = ww;
          else {
            C = vw;
            var b = yw;
          }
        else
          (m = d.nodeName) &&
            m.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (C = xw);
        if (C && (C = C(e, u))) {
          Rg(f, C, n, c);
          break e;
        }
        b && b(e, d, u),
          e === "focusout" &&
            (b = d._wrapperState) &&
            b.controlled &&
            d.type === "number" &&
            bu(d, "number", d.value);
      }
      switch (((b = u ? Pr(u) : window), e)) {
        case "focusin":
          (Kd(b) || b.contentEditable === "true") &&
            ((Cr = b), ($u = u), (Do = null));
          break;
        case "focusout":
          Do = $u = Cr = null;
          break;
        case "mousedown":
          Vu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Vu = !1), Jd(f, n, c);
          break;
        case "selectionchange":
          if (Ew) break;
        case "keydown":
        case "keyup":
          Jd(f, n, c);
      }
      var E;
      if (tf)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        Sr
          ? bg(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (kg &&
          n.locale !== "ko" &&
          (Sr || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && Sr && (E = Pg())
            : ((gn = c),
              (Jc = "value" in gn ? gn.value : gn.textContent),
              (Sr = !0))),
        (b = $s(u, k)),
        0 < b.length &&
          ((k = new Ud(k, e, null, n, c)),
          f.push({ event: k, listeners: b }),
          E ? (k.data = E) : ((E = Tg(n)), E !== null && (k.data = E)))),
        (E = fw ? dw(e, n) : pw(e, n)) &&
          ((u = $s(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Ud("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = E)));
    }
    Vg(f, t);
  });
}
function ri(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function $s(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Xo(e, n)),
      i != null && r.unshift(ri(e, i, o)),
      (i = Xo(e, t)),
      i != null && r.push(ri(e, i, o))),
      (e = e.return);
  }
  return r;
}
function fr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function tp(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = Xo(n, i)), l != null && s.unshift(ri(n, l, a)))
        : o || ((l = Xo(n, i)), l != null && s.push(ri(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Tw = /\r\n?/g,
  Rw = /\u0000|\uFFFD/g;
function np(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Tw,
      `
`,
    )
    .replace(Rw, "");
}
function Xi(e, t, n) {
  if (((t = np(t)), np(e) !== t && n)) throw Error(R(425));
}
function Vs() {}
var Fu = null,
  zu = null;
function Bu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Uu = typeof setTimeout == "function" ? setTimeout : void 0,
  Aw = typeof clearTimeout == "function" ? clearTimeout : void 0,
  rp = typeof Promise == "function" ? Promise : void 0,
  Ow =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof rp < "u"
      ? function (e) {
          return rp.resolve(null).then(e).catch(Lw);
        }
      : Uu;
function Lw(e) {
  setTimeout(function () {
    throw e;
  });
}
function Fl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Zo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Zo(t);
}
function Cn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function op(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var io = Math.random().toString(36).slice(2),
  Mt = "__reactFiber$" + io,
  oi = "__reactProps$" + io,
  Jt = "__reactContainer$" + io,
  Wu = "__reactEvents$" + io,
  Mw = "__reactListeners$" + io,
  Nw = "__reactHandles$" + io;
function Kn(e) {
  var t = e[Mt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Jt] || n[Mt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = op(e); e !== null; ) {
          if ((n = e[Mt])) return n;
          e = op(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function bi(e) {
  return (
    (e = e[Mt] || e[Jt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Pr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function Sa(e) {
  return e[oi] || null;
}
var Hu = [],
  kr = -1;
function Dn(e) {
  return { current: e };
}
function ne(e) {
  0 > kr || ((e.current = Hu[kr]), (Hu[kr] = null), kr--);
}
function Z(e, t) {
  kr++, (Hu[kr] = e.current), (e.current = t);
}
var Ln = {},
  $e = Dn(Ln),
  Ge = Dn(!1),
  er = Ln;
function Wr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ln;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ke(e) {
  return (e = e.childContextTypes), e != null;
}
function Fs() {
  ne(Ge), ne($e);
}
function ip(e, t, n) {
  if ($e.current !== Ln) throw Error(R(168));
  Z($e, t), Z(Ge, n);
}
function zg(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(R(108, yx(e) || "Unknown", o));
  return ue({}, n, r);
}
function zs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ln),
    (er = $e.current),
    Z($e, e),
    Z(Ge, Ge.current),
    !0
  );
}
function sp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = zg(e, t, er)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ne(Ge),
      ne($e),
      Z($e, e))
    : ne(Ge),
    Z(Ge, n);
}
var zt = null,
  Ca = !1,
  zl = !1;
function Bg(e) {
  zt === null ? (zt = [e]) : zt.push(e);
}
function _w(e) {
  (Ca = !0), Bg(e);
}
function In() {
  if (!zl && zt !== null) {
    zl = !0;
    var e = 0,
      t = Q;
    try {
      var n = zt;
      for (Q = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (zt = null), (Ca = !1);
    } catch (o) {
      throw (zt !== null && (zt = zt.slice(e + 1)), pg(Qc, In), o);
    } finally {
      (Q = t), (zl = !1);
    }
  }
  return null;
}
var br = [],
  Tr = 0,
  Bs = null,
  Us = 0,
  ct = [],
  ft = 0,
  tr = null,
  Bt = 1,
  Ut = "";
function Un(e, t) {
  (br[Tr++] = Us), (br[Tr++] = Bs), (Bs = e), (Us = t);
}
function Ug(e, t, n) {
  (ct[ft++] = Bt), (ct[ft++] = Ut), (ct[ft++] = tr), (tr = e);
  var r = Bt;
  e = Ut;
  var o = 32 - Et(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Et(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Bt = (1 << (32 - Et(t) + o)) | (n << o) | r),
      (Ut = i + e);
  } else (Bt = (1 << i) | (n << o) | r), (Ut = e);
}
function rf(e) {
  e.return !== null && (Un(e, 1), Ug(e, 1, 0));
}
function of(e) {
  for (; e === Bs; )
    (Bs = br[--Tr]), (br[Tr] = null), (Us = br[--Tr]), (br[Tr] = null);
  for (; e === tr; )
    (tr = ct[--ft]),
      (ct[ft] = null),
      (Ut = ct[--ft]),
      (ct[ft] = null),
      (Bt = ct[--ft]),
      (ct[ft] = null);
}
var nt = null,
  tt = null,
  oe = !1,
  Ct = null;
function Wg(e, t) {
  var n = dt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ap(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (nt = e), (tt = Cn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (nt = e), (tt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = tr !== null ? { id: Bt, overflow: Ut } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = dt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (nt = e),
            (tt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Gu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ku(e) {
  if (oe) {
    var t = tt;
    if (t) {
      var n = t;
      if (!ap(e, t)) {
        if (Gu(e)) throw Error(R(418));
        t = Cn(n.nextSibling);
        var r = nt;
        t && ap(e, t)
          ? Wg(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (oe = !1), (nt = e));
      }
    } else {
      if (Gu(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (oe = !1), (nt = e);
    }
  }
}
function lp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  nt = e;
}
function qi(e) {
  if (e !== nt) return !1;
  if (!oe) return lp(e), (oe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Bu(e.type, e.memoizedProps))),
    t && (t = tt))
  ) {
    if (Gu(e)) throw (Hg(), Error(R(418)));
    for (; t; ) Wg(e, t), (t = Cn(t.nextSibling));
  }
  if ((lp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              tt = Cn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      tt = null;
    }
  } else tt = nt ? Cn(e.stateNode.nextSibling) : null;
  return !0;
}
function Hg() {
  for (var e = tt; e; ) e = Cn(e.nextSibling);
}
function Hr() {
  (tt = nt = null), (oe = !1);
}
function sf(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
var jw = rn.ReactCurrentBatchConfig;
function wt(e, t) {
  if (e && e.defaultProps) {
    (t = ue({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ws = Dn(null),
  Hs = null,
  Rr = null,
  af = null;
function lf() {
  af = Rr = Hs = null;
}
function uf(e) {
  var t = Ws.current;
  ne(Ws), (e._currentValue = t);
}
function Qu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Vr(e, t) {
  (Hs = e),
    (af = Rr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (He = !0), (e.firstContext = null));
}
function mt(e) {
  var t = e._currentValue;
  if (af !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Rr === null)) {
      if (Hs === null) throw Error(R(308));
      (Rr = e), (Hs.dependencies = { lanes: 0, firstContext: e });
    } else Rr = Rr.next = e;
  return t;
}
var Qn = null;
function cf(e) {
  Qn === null ? (Qn = [e]) : Qn.push(e);
}
function Gg(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), cf(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Zt(e, r)
  );
}
function Zt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var fn = !1;
function ff(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Kg(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ht(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function En(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), U & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Zt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), cf(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Zt(e, n)
  );
}
function hs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Yc(e, n);
  }
}
function up(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Gs(e, t, n, r) {
  var o = e.updateQueue;
  fn = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var f = o.baseState;
    (s = 0), (c = u = l = null), (a = i);
    do {
      var d = a.lane,
        m = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var h = e,
            g = a;
          switch (((d = t), (m = n), g.tag)) {
            case 1:
              if (((h = g.payload), typeof h == "function")) {
                f = h.call(m, f, d);
                break e;
              }
              f = h;
              break e;
            case 3:
              h.flags = (h.flags & -65537) | 128;
            case 0:
              if (
                ((h = g.payload),
                (d = typeof h == "function" ? h.call(m, f, d) : h),
                d == null)
              )
                break e;
              f = ue({}, f, d);
              break e;
            case 2:
              fn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [a]) : d.push(a));
      } else
        (m = {
          eventTime: m,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = m), (l = f)) : (c = c.next = m),
          (s |= d);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = f),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (rr |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function cp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(R(191, o));
        o.call(r);
      }
    }
}
var Qg = new Gm.Component().refs;
function Yu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ue({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ea = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? sr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ze(),
      o = kn(e),
      i = Ht(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = En(e, i, o)),
      t !== null && (Pt(t, e, o, r), hs(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ze(),
      o = kn(e),
      i = Ht(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = En(e, i, o)),
      t !== null && (Pt(t, e, o, r), hs(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ze(),
      r = kn(e),
      o = Ht(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = En(e, o, r)),
      t !== null && (Pt(t, e, r, n), hs(t, e, r));
  },
};
function fp(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ti(n, r) || !ti(o, i)
      : !0
  );
}
function Yg(e, t, n) {
  var r = !1,
    o = Ln,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = mt(i))
      : ((o = Ke(t) ? er : $e.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Wr(e, o) : Ln)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ea),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function dp(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ea.enqueueReplaceState(t, t.state, null);
}
function Xu(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Qg), ff(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = mt(i))
    : ((i = Ke(t) ? er : $e.current), (o.context = Wr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Yu(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Ea.enqueueReplaceState(o, o.state, null),
      Gs(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function go(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            a === Qg && (a = o.refs = {}),
              s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function Ji(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function pp(e) {
  var t = e._init;
  return t(e._payload);
}
function Xg(e) {
  function t(y, p) {
    if (e) {
      var v = y.deletions;
      v === null ? ((y.deletions = [p]), (y.flags |= 16)) : v.push(p);
    }
  }
  function n(y, p) {
    if (!e) return null;
    for (; p !== null; ) t(y, p), (p = p.sibling);
    return null;
  }
  function r(y, p) {
    for (y = new Map(); p !== null; )
      p.key !== null ? y.set(p.key, p) : y.set(p.index, p), (p = p.sibling);
    return y;
  }
  function o(y, p) {
    return (y = bn(y, p)), (y.index = 0), (y.sibling = null), y;
  }
  function i(y, p, v) {
    return (
      (y.index = v),
      e
        ? ((v = y.alternate),
          v !== null
            ? ((v = v.index), v < p ? ((y.flags |= 2), p) : v)
            : ((y.flags |= 2), p))
        : ((y.flags |= 1048576), p)
    );
  }
  function s(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function a(y, p, v, x) {
    return p === null || p.tag !== 6
      ? ((p = Ql(v, y.mode, x)), (p.return = y), p)
      : ((p = o(p, v)), (p.return = y), p);
  }
  function l(y, p, v, x) {
    var C = v.type;
    return C === wr
      ? c(y, p, v.props.children, x, v.key)
      : p !== null &&
        (p.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === cn &&
            pp(C) === p.type))
      ? ((x = o(p, v.props)), (x.ref = go(y, p, v)), (x.return = y), x)
      : ((x = ws(v.type, v.key, v.props, null, y.mode, x)),
        (x.ref = go(y, p, v)),
        (x.return = y),
        x);
  }
  function u(y, p, v, x) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== v.containerInfo ||
      p.stateNode.implementation !== v.implementation
      ? ((p = Yl(v, y.mode, x)), (p.return = y), p)
      : ((p = o(p, v.children || [])), (p.return = y), p);
  }
  function c(y, p, v, x, C) {
    return p === null || p.tag !== 7
      ? ((p = Zn(v, y.mode, x, C)), (p.return = y), p)
      : ((p = o(p, v)), (p.return = y), p);
  }
  function f(y, p, v) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Ql("" + p, y.mode, v)), (p.return = y), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case zi:
          return (
            (v = ws(p.type, p.key, p.props, null, y.mode, v)),
            (v.ref = go(y, null, p)),
            (v.return = y),
            v
          );
        case xr:
          return (p = Yl(p, y.mode, v)), (p.return = y), p;
        case cn:
          var x = p._init;
          return f(y, x(p._payload), v);
      }
      if (Ro(p) || co(p))
        return (p = Zn(p, y.mode, v, null)), (p.return = y), p;
      Ji(y, p);
    }
    return null;
  }
  function d(y, p, v, x) {
    var C = p !== null ? p.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return C !== null ? null : a(y, p, "" + v, x);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case zi:
          return v.key === C ? l(y, p, v, x) : null;
        case xr:
          return v.key === C ? u(y, p, v, x) : null;
        case cn:
          return (C = v._init), d(y, p, C(v._payload), x);
      }
      if (Ro(v) || co(v)) return C !== null ? null : c(y, p, v, x, null);
      Ji(y, v);
    }
    return null;
  }
  function m(y, p, v, x, C) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (y = y.get(v) || null), a(p, y, "" + x, C);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case zi:
          return (y = y.get(x.key === null ? v : x.key) || null), l(p, y, x, C);
        case xr:
          return (y = y.get(x.key === null ? v : x.key) || null), u(p, y, x, C);
        case cn:
          var b = x._init;
          return m(y, p, v, b(x._payload), C);
      }
      if (Ro(x) || co(x)) return (y = y.get(v) || null), c(p, y, x, C, null);
      Ji(p, x);
    }
    return null;
  }
  function h(y, p, v, x) {
    for (
      var C = null, b = null, E = p, k = (p = 0), M = null;
      E !== null && k < v.length;
      k++
    ) {
      E.index > k ? ((M = E), (E = null)) : (M = E.sibling);
      var A = d(y, E, v[k], x);
      if (A === null) {
        E === null && (E = M);
        break;
      }
      e && E && A.alternate === null && t(y, E),
        (p = i(A, p, k)),
        b === null ? (C = A) : (b.sibling = A),
        (b = A),
        (E = M);
    }
    if (k === v.length) return n(y, E), oe && Un(y, k), C;
    if (E === null) {
      for (; k < v.length; k++)
        (E = f(y, v[k], x)),
          E !== null &&
            ((p = i(E, p, k)), b === null ? (C = E) : (b.sibling = E), (b = E));
      return oe && Un(y, k), C;
    }
    for (E = r(y, E); k < v.length; k++)
      (M = m(E, y, k, v[k], x)),
        M !== null &&
          (e && M.alternate !== null && E.delete(M.key === null ? k : M.key),
          (p = i(M, p, k)),
          b === null ? (C = M) : (b.sibling = M),
          (b = M));
    return (
      e &&
        E.forEach(function (z) {
          return t(y, z);
        }),
      oe && Un(y, k),
      C
    );
  }
  function g(y, p, v, x) {
    var C = co(v);
    if (typeof C != "function") throw Error(R(150));
    if (((v = C.call(v)), v == null)) throw Error(R(151));
    for (
      var b = (C = null), E = p, k = (p = 0), M = null, A = v.next();
      E !== null && !A.done;
      k++, A = v.next()
    ) {
      E.index > k ? ((M = E), (E = null)) : (M = E.sibling);
      var z = d(y, E, A.value, x);
      if (z === null) {
        E === null && (E = M);
        break;
      }
      e && E && z.alternate === null && t(y, E),
        (p = i(z, p, k)),
        b === null ? (C = z) : (b.sibling = z),
        (b = z),
        (E = M);
    }
    if (A.done) return n(y, E), oe && Un(y, k), C;
    if (E === null) {
      for (; !A.done; k++, A = v.next())
        (A = f(y, A.value, x)),
          A !== null &&
            ((p = i(A, p, k)), b === null ? (C = A) : (b.sibling = A), (b = A));
      return oe && Un(y, k), C;
    }
    for (E = r(y, E); !A.done; k++, A = v.next())
      (A = m(E, y, k, A.value, x)),
        A !== null &&
          (e && A.alternate !== null && E.delete(A.key === null ? k : A.key),
          (p = i(A, p, k)),
          b === null ? (C = A) : (b.sibling = A),
          (b = A));
    return (
      e &&
        E.forEach(function (I) {
          return t(y, I);
        }),
      oe && Un(y, k),
      C
    );
  }
  function w(y, p, v, x) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === wr &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case zi:
          e: {
            for (var C = v.key, b = p; b !== null; ) {
              if (b.key === C) {
                if (((C = v.type), C === wr)) {
                  if (b.tag === 7) {
                    n(y, b.sibling),
                      (p = o(b, v.props.children)),
                      (p.return = y),
                      (y = p);
                    break e;
                  }
                } else if (
                  b.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === cn &&
                    pp(C) === b.type)
                ) {
                  n(y, b.sibling),
                    (p = o(b, v.props)),
                    (p.ref = go(y, b, v)),
                    (p.return = y),
                    (y = p);
                  break e;
                }
                n(y, b);
                break;
              } else t(y, b);
              b = b.sibling;
            }
            v.type === wr
              ? ((p = Zn(v.props.children, y.mode, x, v.key)),
                (p.return = y),
                (y = p))
              : ((x = ws(v.type, v.key, v.props, null, y.mode, x)),
                (x.ref = go(y, p, v)),
                (x.return = y),
                (y = x));
          }
          return s(y);
        case xr:
          e: {
            for (b = v.key; p !== null; ) {
              if (p.key === b)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === v.containerInfo &&
                  p.stateNode.implementation === v.implementation
                ) {
                  n(y, p.sibling),
                    (p = o(p, v.children || [])),
                    (p.return = y),
                    (y = p);
                  break e;
                } else {
                  n(y, p);
                  break;
                }
              else t(y, p);
              p = p.sibling;
            }
            (p = Yl(v, y.mode, x)), (p.return = y), (y = p);
          }
          return s(y);
        case cn:
          return (b = v._init), w(y, p, b(v._payload), x);
      }
      if (Ro(v)) return h(y, p, v, x);
      if (co(v)) return g(y, p, v, x);
      Ji(y, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        p !== null && p.tag === 6
          ? (n(y, p.sibling), (p = o(p, v)), (p.return = y), (y = p))
          : (n(y, p), (p = Ql(v, y.mode, x)), (p.return = y), (y = p)),
        s(y))
      : n(y, p);
  }
  return w;
}
var Gr = Xg(!0),
  qg = Xg(!1),
  Ti = {},
  Dt = Dn(Ti),
  ii = Dn(Ti),
  si = Dn(Ti);
function Yn(e) {
  if (e === Ti) throw Error(R(174));
  return e;
}
function df(e, t) {
  switch ((Z(si, t), Z(ii, e), Z(Dt, Ti), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ru(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ru(t, e));
  }
  ne(Dt), Z(Dt, t);
}
function Kr() {
  ne(Dt), ne(ii), ne(si);
}
function Jg(e) {
  Yn(si.current);
  var t = Yn(Dt.current),
    n = Ru(t, e.type);
  t !== n && (Z(ii, e), Z(Dt, n));
}
function pf(e) {
  ii.current === e && (ne(Dt), ne(ii));
}
var ie = Dn(0);
function Ks(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Bl = [];
function hf() {
  for (var e = 0; e < Bl.length; e++)
    Bl[e]._workInProgressVersionPrimary = null;
  Bl.length = 0;
}
var ms = rn.ReactCurrentDispatcher,
  Ul = rn.ReactCurrentBatchConfig,
  nr = 0,
  le = null,
  Se = null,
  Pe = null,
  Qs = !1,
  Io = !1,
  ai = 0,
  Dw = 0;
function Me() {
  throw Error(R(321));
}
function mf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!kt(e[n], t[n])) return !1;
  return !0;
}
function gf(e, t, n, r, o, i) {
  if (
    ((nr = i),
    (le = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ms.current = e === null || e.memoizedState === null ? Fw : zw),
    (e = n(r, o)),
    Io)
  ) {
    i = 0;
    do {
      if (((Io = !1), (ai = 0), 25 <= i)) throw Error(R(301));
      (i += 1),
        (Pe = Se = null),
        (t.updateQueue = null),
        (ms.current = Bw),
        (e = n(r, o));
    } while (Io);
  }
  if (
    ((ms.current = Ys),
    (t = Se !== null && Se.next !== null),
    (nr = 0),
    (Pe = Se = le = null),
    (Qs = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function yf() {
  var e = ai !== 0;
  return (ai = 0), e;
}
function Rt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Pe === null ? (le.memoizedState = Pe = e) : (Pe = Pe.next = e), Pe;
}
function gt() {
  if (Se === null) {
    var e = le.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Se.next;
  var t = Pe === null ? le.memoizedState : Pe.next;
  if (t !== null) (Pe = t), (Se = e);
  else {
    if (e === null) throw Error(R(310));
    (Se = e),
      (e = {
        memoizedState: Se.memoizedState,
        baseState: Se.baseState,
        baseQueue: Se.baseQueue,
        queue: Se.queue,
        next: null,
      }),
      Pe === null ? (le.memoizedState = Pe = e) : (Pe = Pe.next = e);
  }
  return Pe;
}
function li(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Wl(e) {
  var t = gt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = Se,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((nr & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (le.lanes |= c),
          (rr |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (s = r) : (l.next = a),
      kt(r, t.memoizedState) || (He = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (le.lanes |= i), (rr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Hl(e) {
  var t = gt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    kt(i, t.memoizedState) || (He = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Zg() {}
function ey(e, t) {
  var n = le,
    r = gt(),
    o = t(),
    i = !kt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (He = !0)),
    (r = r.queue),
    vf(ry.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Pe !== null && Pe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ui(9, ny.bind(null, n, r, o, t), void 0, null),
      ke === null)
    )
      throw Error(R(349));
    nr & 30 || ty(n, t, o);
  }
  return o;
}
function ty(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (le.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ny(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), oy(t) && iy(e);
}
function ry(e, t, n) {
  return n(function () {
    oy(t) && iy(e);
  });
}
function oy(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !kt(e, n);
  } catch {
    return !0;
  }
}
function iy(e) {
  var t = Zt(e, 1);
  t !== null && Pt(t, e, 1, -1);
}
function hp(e) {
  var t = Rt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: li,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Vw.bind(null, le, e)),
    [t.memoizedState, e]
  );
}
function ui(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (le.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function sy() {
  return gt().memoizedState;
}
function gs(e, t, n, r) {
  var o = Rt();
  (le.flags |= e),
    (o.memoizedState = ui(1 | t, n, void 0, r === void 0 ? null : r));
}
function Pa(e, t, n, r) {
  var o = gt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Se !== null) {
    var s = Se.memoizedState;
    if (((i = s.destroy), r !== null && mf(r, s.deps))) {
      o.memoizedState = ui(t, n, i, r);
      return;
    }
  }
  (le.flags |= e), (o.memoizedState = ui(1 | t, n, i, r));
}
function mp(e, t) {
  return gs(8390656, 8, e, t);
}
function vf(e, t) {
  return Pa(2048, 8, e, t);
}
function ay(e, t) {
  return Pa(4, 2, e, t);
}
function ly(e, t) {
  return Pa(4, 4, e, t);
}
function uy(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function cy(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Pa(4, 4, uy.bind(null, t, e), n)
  );
}
function xf() {}
function fy(e, t) {
  var n = gt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && mf(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function dy(e, t) {
  var n = gt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && mf(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function py(e, t, n) {
  return nr & 21
    ? (kt(n, t) || ((n = gg()), (le.lanes |= n), (rr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (He = !0)), (e.memoizedState = n));
}
function Iw(e, t) {
  var n = Q;
  (Q = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ul.transition;
  Ul.transition = {};
  try {
    e(!1), t();
  } finally {
    (Q = n), (Ul.transition = r);
  }
}
function hy() {
  return gt().memoizedState;
}
function $w(e, t, n) {
  var r = kn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    my(e))
  )
    gy(t, n);
  else if (((n = Gg(e, t, n, r)), n !== null)) {
    var o = ze();
    Pt(n, e, r, o), yy(n, t, r);
  }
}
function Vw(e, t, n) {
  var r = kn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (my(e)) gy(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), kt(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), cf(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Gg(e, t, o, r)),
      n !== null && ((o = ze()), Pt(n, e, r, o), yy(n, t, r));
  }
}
function my(e) {
  var t = e.alternate;
  return e === le || (t !== null && t === le);
}
function gy(e, t) {
  Io = Qs = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function yy(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Yc(e, n);
  }
}
var Ys = {
    readContext: mt,
    useCallback: Me,
    useContext: Me,
    useEffect: Me,
    useImperativeHandle: Me,
    useInsertionEffect: Me,
    useLayoutEffect: Me,
    useMemo: Me,
    useReducer: Me,
    useRef: Me,
    useState: Me,
    useDebugValue: Me,
    useDeferredValue: Me,
    useTransition: Me,
    useMutableSource: Me,
    useSyncExternalStore: Me,
    useId: Me,
    unstable_isNewReconciler: !1,
  },
  Fw = {
    readContext: mt,
    useCallback: function (e, t) {
      return (Rt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: mt,
    useEffect: mp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        gs(4194308, 4, uy.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return gs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return gs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Rt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Rt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = $w.bind(null, le, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Rt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: hp,
    useDebugValue: xf,
    useDeferredValue: function (e) {
      return (Rt().memoizedState = e);
    },
    useTransition: function () {
      var e = hp(!1),
        t = e[0];
      return (e = Iw.bind(null, e[1])), (Rt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = le,
        o = Rt();
      if (oe) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), ke === null)) throw Error(R(349));
        nr & 30 || ty(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        mp(ry.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ui(9, ny.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Rt(),
        t = ke.identifierPrefix;
      if (oe) {
        var n = Ut,
          r = Bt;
        (n = (r & ~(1 << (32 - Et(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ai++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Dw++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  zw = {
    readContext: mt,
    useCallback: fy,
    useContext: mt,
    useEffect: vf,
    useImperativeHandle: cy,
    useInsertionEffect: ay,
    useLayoutEffect: ly,
    useMemo: dy,
    useReducer: Wl,
    useRef: sy,
    useState: function () {
      return Wl(li);
    },
    useDebugValue: xf,
    useDeferredValue: function (e) {
      var t = gt();
      return py(t, Se.memoizedState, e);
    },
    useTransition: function () {
      var e = Wl(li)[0],
        t = gt().memoizedState;
      return [e, t];
    },
    useMutableSource: Zg,
    useSyncExternalStore: ey,
    useId: hy,
    unstable_isNewReconciler: !1,
  },
  Bw = {
    readContext: mt,
    useCallback: fy,
    useContext: mt,
    useEffect: vf,
    useImperativeHandle: cy,
    useInsertionEffect: ay,
    useLayoutEffect: ly,
    useMemo: dy,
    useReducer: Hl,
    useRef: sy,
    useState: function () {
      return Hl(li);
    },
    useDebugValue: xf,
    useDeferredValue: function (e) {
      var t = gt();
      return Se === null ? (t.memoizedState = e) : py(t, Se.memoizedState, e);
    },
    useTransition: function () {
      var e = Hl(li)[0],
        t = gt().memoizedState;
      return [e, t];
    },
    useMutableSource: Zg,
    useSyncExternalStore: ey,
    useId: hy,
    unstable_isNewReconciler: !1,
  };
function Qr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += gx(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Gl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function qu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Uw = typeof WeakMap == "function" ? WeakMap : Map;
function vy(e, t, n) {
  (n = Ht(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      qs || ((qs = !0), (ac = r)), qu(e, t);
    }),
    n
  );
}
function xy(e, t, n) {
  (n = Ht(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        qu(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        qu(e, t),
          typeof r != "function" &&
            (Pn === null ? (Pn = new Set([this])) : Pn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function gp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Uw();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = rS.bind(null, e, t, n)), t.then(e, e));
}
function yp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function vp(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ht(-1, 1)), (t.tag = 2), En(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ww = rn.ReactCurrentOwner,
  He = !1;
function Fe(e, t, n, r) {
  t.child = e === null ? qg(t, null, n, r) : Gr(t, e.child, n, r);
}
function xp(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Vr(t, o),
    (r = gf(e, t, n, r, i, o)),
    (n = yf()),
    e !== null && !He
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        en(e, t, o))
      : (oe && n && rf(t), (t.flags |= 1), Fe(e, t, r, o), t.child)
  );
}
function wp(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Tf(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), wy(e, t, i, r, o))
      : ((e = ws(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ti), n(s, r) && e.ref === t.ref)
    )
      return en(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = bn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function wy(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ti(i, r) && e.ref === t.ref)
      if (((He = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (He = !0);
      else return (t.lanes = e.lanes), en(e, t, o);
  }
  return Ju(e, t, n, r, o);
}
function Sy(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Z(Or, Ze),
        (Ze |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Z(Or, Ze),
          (Ze |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Z(Or, Ze),
        (Ze |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Z(Or, Ze),
      (Ze |= r);
  return Fe(e, t, o, n), t.child;
}
function Cy(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ju(e, t, n, r, o) {
  var i = Ke(n) ? er : $e.current;
  return (
    (i = Wr(t, i)),
    Vr(t, o),
    (n = gf(e, t, n, r, i, o)),
    (r = yf()),
    e !== null && !He
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        en(e, t, o))
      : (oe && r && rf(t), (t.flags |= 1), Fe(e, t, n, o), t.child)
  );
}
function Sp(e, t, n, r, o) {
  if (Ke(n)) {
    var i = !0;
    zs(t);
  } else i = !1;
  if ((Vr(t, o), t.stateNode === null))
    ys(e, t), Yg(t, n, r), Xu(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = mt(u))
      : ((u = Ke(n) ? er : $e.current), (u = Wr(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && dp(t, s, r, u)),
      (fn = !1);
    var d = t.memoizedState;
    (s.state = d),
      Gs(t, r, s, o),
      (l = t.memoizedState),
      a !== r || d !== l || Ge.current || fn
        ? (typeof c == "function" && (Yu(t, n, c, r), (l = t.memoizedState)),
          (a = fn || fp(t, n, a, r, d, l, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Kg(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : wt(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = mt(l))
        : ((l = Ke(n) ? er : $e.current), (l = Wr(t, l)));
    var m = n.getDerivedStateFromProps;
    (c =
      typeof m == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && dp(t, s, r, l)),
      (fn = !1),
      (d = t.memoizedState),
      (s.state = d),
      Gs(t, r, s, o);
    var h = t.memoizedState;
    a !== f || d !== h || Ge.current || fn
      ? (typeof m == "function" && (Yu(t, n, m, r), (h = t.memoizedState)),
        (u = fn || fp(t, n, u, r, d, h, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, h, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, h, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = h)),
        (s.props = r),
        (s.state = h),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Zu(e, t, n, r, i, o);
}
function Zu(e, t, n, r, o, i) {
  Cy(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && sp(t, n, !1), en(e, t, i);
  (r = t.stateNode), (Ww.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Gr(t, e.child, null, i)), (t.child = Gr(t, null, a, i)))
      : Fe(e, t, a, i),
    (t.memoizedState = r.state),
    o && sp(t, n, !0),
    t.child
  );
}
function Ey(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ip(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ip(e, t.context, !1),
    df(e, t.containerInfo);
}
function Cp(e, t, n, r, o) {
  return Hr(), sf(o), (t.flags |= 256), Fe(e, t, n, r), t.child;
}
var ec = { dehydrated: null, treeContext: null, retryLane: 0 };
function tc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Py(e, t, n) {
  var r = t.pendingProps,
    o = ie.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Z(ie, o & 1),
    e === null)
  )
    return (
      Ku(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = Ta(s, r, 0, null)),
              (e = Zn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = tc(n)),
              (t.memoizedState = ec),
              e)
            : wf(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return Hw(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = bn(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = bn(a, i)) : ((i = Zn(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? tc(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ec),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = bn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function wf(e, t) {
  return (
    (t = Ta({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Zi(e, t, n, r) {
  return (
    r !== null && sf(r),
    Gr(t, e.child, null, n),
    (e = wf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Hw(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Gl(Error(R(422)))), Zi(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Ta({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Zn(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Gr(t, e.child, null, s),
        (t.child.memoizedState = tc(s)),
        (t.memoizedState = ec),
        i);
  if (!(t.mode & 1)) return Zi(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(R(419))), (r = Gl(i, r, void 0)), Zi(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), He || a)) {
    if (((r = ke), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Zt(e, o), Pt(r, e, o, -1));
    }
    return bf(), (r = Gl(Error(R(421)))), Zi(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = oS.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (tt = Cn(o.nextSibling)),
      (nt = t),
      (oe = !0),
      (Ct = null),
      e !== null &&
        ((ct[ft++] = Bt),
        (ct[ft++] = Ut),
        (ct[ft++] = tr),
        (Bt = e.id),
        (Ut = e.overflow),
        (tr = t)),
      (t = wf(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ep(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Qu(e.return, t, n);
}
function Kl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function ky(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Fe(e, t, r.children, n), (r = ie.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ep(e, n, t);
        else if (e.tag === 19) Ep(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Z(ie, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Ks(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Kl(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ks(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Kl(t, !0, n, null, i);
        break;
      case "together":
        Kl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ys(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function en(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (rr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = bn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = bn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Gw(e, t, n) {
  switch (t.tag) {
    case 3:
      Ey(t), Hr();
      break;
    case 5:
      Jg(t);
      break;
    case 1:
      Ke(t.type) && zs(t);
      break;
    case 4:
      df(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Z(Ws, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Z(ie, ie.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Py(e, t, n)
          : (Z(ie, ie.current & 1),
            (e = en(e, t, n)),
            e !== null ? e.sibling : null);
      Z(ie, ie.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return ky(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Z(ie, ie.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Sy(e, t, n);
  }
  return en(e, t, n);
}
var by, nc, Ty, Ry;
by = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
nc = function () {};
Ty = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Yn(Dt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Pu(e, o)), (r = Pu(e, r)), (i = []);
        break;
      case "select":
        (o = ue({}, o, { value: void 0 })),
          (r = ue({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Tu(e, o)), (r = Tu(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Vs);
    }
    Au(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Qo.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Qo.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && te("scroll", e),
                  i || a === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Ry = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yo(e, t) {
  if (!oe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Kw(e, t, n) {
  var r = t.pendingProps;
  switch ((of(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ne(t), null;
    case 1:
      return Ke(t.type) && Fs(), Ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Kr(),
        ne(Ge),
        ne($e),
        hf(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (qi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ct !== null && (cc(Ct), (Ct = null)))),
        nc(e, t),
        Ne(t),
        null
      );
    case 5:
      pf(t);
      var o = Yn(si.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ty(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return Ne(t), null;
        }
        if (((e = Yn(Dt.current)), qi(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Mt] = t), (r[oi] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              te("cancel", r), te("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              te("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Oo.length; o++) te(Oo[o], r);
              break;
            case "source":
              te("error", r);
              break;
            case "img":
            case "image":
            case "link":
              te("error", r), te("load", r);
              break;
            case "details":
              te("toggle", r);
              break;
            case "input":
              Md(r, i), te("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                te("invalid", r);
              break;
            case "textarea":
              _d(r, i), te("invalid", r);
          }
          Au(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Xi(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Xi(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : Qo.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  te("scroll", r);
            }
          switch (n) {
            case "input":
              Bi(r), Nd(r, i, !0);
              break;
            case "textarea":
              Bi(r), jd(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Vs);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = tg(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Mt] = t),
            (e[oi] = r),
            by(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Ou(n, r)), n)) {
              case "dialog":
                te("cancel", e), te("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                te("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Oo.length; o++) te(Oo[o], e);
                o = r;
                break;
              case "source":
                te("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                te("error", e), te("load", e), (o = r);
                break;
              case "details":
                te("toggle", e), (o = r);
                break;
              case "input":
                Md(e, r), (o = Pu(e, r)), te("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ue({}, r, { value: void 0 })),
                  te("invalid", e);
                break;
              case "textarea":
                _d(e, r), (o = Tu(e, r)), te("invalid", e);
                break;
              default:
                o = r;
            }
            Au(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? og(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && ng(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Yo(e, l)
                    : typeof l == "number" && Yo(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Qo.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && te("scroll", e)
                      : l != null && Uc(e, i, l, s));
              }
            switch (n) {
              case "input":
                Bi(e), Nd(e, r, !1);
                break;
              case "textarea":
                Bi(e), jd(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + On(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? jr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      jr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Vs);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ne(t), null;
    case 6:
      if (e && t.stateNode != null) Ry(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = Yn(si.current)), Yn(Dt.current), qi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Mt] = t),
            (i = r.nodeValue !== n) && ((e = nt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Xi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Xi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Mt] = t),
            (t.stateNode = r);
      }
      return Ne(t), null;
    case 13:
      if (
        (ne(ie),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (oe && tt !== null && t.mode & 1 && !(t.flags & 128))
          Hg(), Hr(), (t.flags |= 98560), (i = !1);
        else if (((i = qi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(R(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(R(317));
            i[Mt] = t;
          } else
            Hr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ne(t), (i = !1);
        } else Ct !== null && (cc(Ct), (Ct = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ie.current & 1 ? Ce === 0 && (Ce = 3) : bf())),
          t.updateQueue !== null && (t.flags |= 4),
          Ne(t),
          null);
    case 4:
      return (
        Kr(), nc(e, t), e === null && ni(t.stateNode.containerInfo), Ne(t), null
      );
    case 10:
      return uf(t.type._context), Ne(t), null;
    case 17:
      return Ke(t.type) && Fs(), Ne(t), null;
    case 19:
      if ((ne(ie), (i = t.memoizedState), i === null)) return Ne(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) yo(i, !1);
        else {
          if (Ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Ks(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    yo(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Z(ie, (ie.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            he() > Yr &&
            ((t.flags |= 128), (r = !0), yo(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ks(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              yo(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !oe)
            )
              return Ne(t), null;
          } else
            2 * he() - i.renderingStartTime > Yr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), yo(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = he()),
          (t.sibling = null),
          (n = ie.current),
          Z(ie, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ne(t), null);
    case 22:
    case 23:
      return (
        kf(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ze & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function Qw(e, t) {
  switch ((of(t), t.tag)) {
    case 1:
      return (
        Ke(t.type) && Fs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Kr(),
        ne(Ge),
        ne($e),
        hf(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return pf(t), null;
    case 13:
      if (
        (ne(ie), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(R(340));
        Hr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ne(ie), null;
    case 4:
      return Kr(), null;
    case 10:
      return uf(t.type._context), null;
    case 22:
    case 23:
      return kf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var es = !1,
  Ie = !1,
  Yw = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function Ar(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        de(e, t, r);
      }
    else n.current = null;
}
function rc(e, t, n) {
  try {
    n();
  } catch (r) {
    de(e, t, r);
  }
}
var Pp = !1;
function Xw(e, t) {
  if (((Fu = Ds), (e = Mg()), nf(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var m;
              f !== n || (o !== 0 && f.nodeType !== 3) || (a = s + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (m = f.firstChild) !== null;

            )
              (d = f), (f = m);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === o && (a = s),
                d === i && ++c === r && (l = s),
                (m = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = m;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (zu = { focusedElem: e, selectionRange: n }, Ds = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var h = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (h !== null) {
                  var g = h.memoizedProps,
                    w = h.memoizedState,
                    y = t.stateNode,
                    p = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : wt(t.type, g),
                      w,
                    );
                  y.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (x) {
          de(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (h = Pp), (Pp = !1), h;
}
function $o(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && rc(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ka(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function oc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ay(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ay(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Mt], delete t[oi], delete t[Wu], delete t[Mw], delete t[Nw])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Oy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function kp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Oy(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ic(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Vs));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ic(e, t, n), e = e.sibling; e !== null; ) ic(e, t, n), (e = e.sibling);
}
function sc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (sc(e, t, n), e = e.sibling; e !== null; ) sc(e, t, n), (e = e.sibling);
}
var Re = null,
  St = !1;
function sn(e, t, n) {
  for (n = n.child; n !== null; ) Ly(e, t, n), (n = n.sibling);
}
function Ly(e, t, n) {
  if (jt && typeof jt.onCommitFiberUnmount == "function")
    try {
      jt.onCommitFiberUnmount(ya, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ie || Ar(n, t);
    case 6:
      var r = Re,
        o = St;
      (Re = null),
        sn(e, t, n),
        (Re = r),
        (St = o),
        Re !== null &&
          (St
            ? ((e = Re),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Re.removeChild(n.stateNode));
      break;
    case 18:
      Re !== null &&
        (St
          ? ((e = Re),
            (n = n.stateNode),
            e.nodeType === 8
              ? Fl(e.parentNode, n)
              : e.nodeType === 1 && Fl(e, n),
            Zo(e))
          : Fl(Re, n.stateNode));
      break;
    case 4:
      (r = Re),
        (o = St),
        (Re = n.stateNode.containerInfo),
        (St = !0),
        sn(e, t, n),
        (Re = r),
        (St = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && rc(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      sn(e, t, n);
      break;
    case 1:
      if (
        !Ie &&
        (Ar(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          de(n, t, a);
        }
      sn(e, t, n);
      break;
    case 21:
      sn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ie = (r = Ie) || n.memoizedState !== null), sn(e, t, n), (Ie = r))
        : sn(e, t, n);
      break;
    default:
      sn(e, t, n);
  }
}
function bp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Yw()),
      t.forEach(function (r) {
        var o = iS.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function vt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Re = a.stateNode), (St = !1);
              break e;
            case 3:
              (Re = a.stateNode.containerInfo), (St = !0);
              break e;
            case 4:
              (Re = a.stateNode.containerInfo), (St = !0);
              break e;
          }
          a = a.return;
        }
        if (Re === null) throw Error(R(160));
        Ly(i, s, o), (Re = null), (St = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        de(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) My(t, e), (t = t.sibling);
}
function My(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((vt(t, e), Tt(e), r & 4)) {
        try {
          $o(3, e, e.return), ka(3, e);
        } catch (g) {
          de(e, e.return, g);
        }
        try {
          $o(5, e, e.return);
        } catch (g) {
          de(e, e.return, g);
        }
      }
      break;
    case 1:
      vt(t, e), Tt(e), r & 512 && n !== null && Ar(n, n.return);
      break;
    case 5:
      if (
        (vt(t, e),
        Tt(e),
        r & 512 && n !== null && Ar(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Yo(o, "");
        } catch (g) {
          de(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Zm(o, i),
              Ou(a, s);
            var u = Ou(a, i);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                f = l[s + 1];
              c === "style"
                ? og(o, f)
                : c === "dangerouslySetInnerHTML"
                ? ng(o, f)
                : c === "children"
                ? Yo(o, f)
                : Uc(o, c, f, u);
            }
            switch (a) {
              case "input":
                ku(o, i);
                break;
              case "textarea":
                eg(o, i);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var m = i.value;
                m != null
                  ? jr(o, !!i.multiple, m, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? jr(o, !!i.multiple, i.defaultValue, !0)
                      : jr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[oi] = i;
          } catch (g) {
            de(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((vt(t, e), Tt(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (g) {
          de(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (vt(t, e), Tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Zo(t.containerInfo);
        } catch (g) {
          de(e, e.return, g);
        }
      break;
    case 4:
      vt(t, e), Tt(e);
      break;
    case 13:
      vt(t, e),
        Tt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Ef = he())),
        r & 4 && bp(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ie = (u = Ie) || c), vt(t, e), (Ie = u)) : vt(t, e),
        Tt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (L = e, c = e.child; c !== null; ) {
            for (f = L = c; L !== null; ) {
              switch (((d = L), (m = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  $o(4, d, d.return);
                  break;
                case 1:
                  Ar(d, d.return);
                  var h = d.stateNode;
                  if (typeof h.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (h.props = t.memoizedProps),
                        (h.state = t.memoizedState),
                        h.componentWillUnmount();
                    } catch (g) {
                      de(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Ar(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Rp(f);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), (L = m)) : Rp(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (o = f.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = rg("display", s)));
              } catch (g) {
                de(e, e.return, g);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (g) {
                de(e, e.return, g);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      vt(t, e), Tt(e), r & 4 && bp(e);
      break;
    case 21:
      break;
    default:
      vt(t, e), Tt(e);
  }
}
function Tt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Oy(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Yo(o, ""), (r.flags &= -33));
          var i = kp(e);
          sc(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = kp(e);
          ic(e, a, s);
          break;
        default:
          throw Error(R(161));
      }
    } catch (l) {
      de(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function qw(e, t, n) {
  (L = e), Ny(e);
}
function Ny(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var o = L,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || es;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || Ie;
        a = es;
        var u = Ie;
        if (((es = s), (Ie = l) && !u))
          for (L = o; L !== null; )
            (s = L),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Ap(o)
                : l !== null
                ? ((l.return = s), (L = l))
                : Ap(o);
        for (; i !== null; ) (L = i), Ny(i), (i = i.sibling);
        (L = o), (es = a), (Ie = u);
      }
      Tp(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (L = i)) : Tp(e);
  }
}
function Tp(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ie || ka(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ie)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : wt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && cp(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                cp(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Zo(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        Ie || (t.flags & 512 && oc(t));
      } catch (d) {
        de(t, t.return, d);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function Rp(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function Ap(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ka(4, t);
          } catch (l) {
            de(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              de(t, o, l);
            }
          }
          var i = t.return;
          try {
            oc(t);
          } catch (l) {
            de(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            oc(t);
          } catch (l) {
            de(t, s, l);
          }
      }
    } catch (l) {
      de(t, t.return, l);
    }
    if (t === e) {
      L = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (L = a);
      break;
    }
    L = t.return;
  }
}
var Jw = Math.ceil,
  Xs = rn.ReactCurrentDispatcher,
  Sf = rn.ReactCurrentOwner,
  pt = rn.ReactCurrentBatchConfig,
  U = 0,
  ke = null,
  xe = null,
  Oe = 0,
  Ze = 0,
  Or = Dn(0),
  Ce = 0,
  ci = null,
  rr = 0,
  ba = 0,
  Cf = 0,
  Vo = null,
  We = null,
  Ef = 0,
  Yr = 1 / 0,
  Ft = null,
  qs = !1,
  ac = null,
  Pn = null,
  ts = !1,
  yn = null,
  Js = 0,
  Fo = 0,
  lc = null,
  vs = -1,
  xs = 0;
function ze() {
  return U & 6 ? he() : vs !== -1 ? vs : (vs = he());
}
function kn(e) {
  return e.mode & 1
    ? U & 2 && Oe !== 0
      ? Oe & -Oe
      : jw.transition !== null
      ? (xs === 0 && (xs = gg()), xs)
      : ((e = Q),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Eg(e.type))),
        e)
    : 1;
}
function Pt(e, t, n, r) {
  if (50 < Fo) throw ((Fo = 0), (lc = null), Error(R(185)));
  Pi(e, n, r),
    (!(U & 2) || e !== ke) &&
      (e === ke && (!(U & 2) && (ba |= n), Ce === 4 && hn(e, Oe)),
      Qe(e, r),
      n === 1 && U === 0 && !(t.mode & 1) && ((Yr = he() + 500), Ca && In()));
}
function Qe(e, t) {
  var n = e.callbackNode;
  jx(e, t);
  var r = js(e, e === ke ? Oe : 0);
  if (r === 0)
    n !== null && $d(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && $d(n), t === 1))
      e.tag === 0 ? _w(Op.bind(null, e)) : Bg(Op.bind(null, e)),
        Ow(function () {
          !(U & 6) && In();
        }),
        (n = null);
    else {
      switch (yg(r)) {
        case 1:
          n = Qc;
          break;
        case 4:
          n = hg;
          break;
        case 16:
          n = _s;
          break;
        case 536870912:
          n = mg;
          break;
        default:
          n = _s;
      }
      n = zy(n, _y.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function _y(e, t) {
  if (((vs = -1), (xs = 0), U & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (Fr() && e.callbackNode !== n) return null;
  var r = js(e, e === ke ? Oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Zs(e, r);
  else {
    t = r;
    var o = U;
    U |= 2;
    var i = Dy();
    (ke !== e || Oe !== t) && ((Ft = null), (Yr = he() + 500), Jn(e, t));
    do
      try {
        tS();
        break;
      } catch (a) {
        jy(e, a);
      }
    while (1);
    lf(),
      (Xs.current = i),
      (U = o),
      xe !== null ? (t = 0) : ((ke = null), (Oe = 0), (t = Ce));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = ju(e)), o !== 0 && ((r = o), (t = uc(e, o)))), t === 1)
    )
      throw ((n = ci), Jn(e, 0), hn(e, r), Qe(e, he()), n);
    if (t === 6) hn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Zw(o) &&
          ((t = Zs(e, r)),
          t === 2 && ((i = ju(e)), i !== 0 && ((r = i), (t = uc(e, i)))),
          t === 1))
      )
        throw ((n = ci), Jn(e, 0), hn(e, r), Qe(e, he()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          Wn(e, We, Ft);
          break;
        case 3:
          if (
            (hn(e, r), (r & 130023424) === r && ((t = Ef + 500 - he()), 10 < t))
          ) {
            if (js(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              ze(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Uu(Wn.bind(null, e, We, Ft), t);
            break;
          }
          Wn(e, We, Ft);
          break;
        case 4:
          if ((hn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Et(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = he() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Jw(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Uu(Wn.bind(null, e, We, Ft), r);
            break;
          }
          Wn(e, We, Ft);
          break;
        case 5:
          Wn(e, We, Ft);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Qe(e, he()), e.callbackNode === n ? _y.bind(null, e) : null;
}
function uc(e, t) {
  var n = Vo;
  return (
    e.current.memoizedState.isDehydrated && (Jn(e, t).flags |= 256),
    (e = Zs(e, t)),
    e !== 2 && ((t = We), (We = n), t !== null && cc(t)),
    e
  );
}
function cc(e) {
  We === null ? (We = e) : We.push.apply(We, e);
}
function Zw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!kt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function hn(e, t) {
  for (
    t &= ~Cf,
      t &= ~ba,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Et(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Op(e) {
  if (U & 6) throw Error(R(327));
  Fr();
  var t = js(e, 0);
  if (!(t & 1)) return Qe(e, he()), null;
  var n = Zs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ju(e);
    r !== 0 && ((t = r), (n = uc(e, r)));
  }
  if (n === 1) throw ((n = ci), Jn(e, 0), hn(e, t), Qe(e, he()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Wn(e, We, Ft),
    Qe(e, he()),
    null
  );
}
function Pf(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    (U = n), U === 0 && ((Yr = he() + 500), Ca && In());
  }
}
function or(e) {
  yn !== null && yn.tag === 0 && !(U & 6) && Fr();
  var t = U;
  U |= 1;
  var n = pt.transition,
    r = Q;
  try {
    if (((pt.transition = null), (Q = 1), e)) return e();
  } finally {
    (Q = r), (pt.transition = n), (U = t), !(U & 6) && In();
  }
}
function kf() {
  (Ze = Or.current), ne(Or);
}
function Jn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Aw(n)), xe !== null))
    for (n = xe.return; n !== null; ) {
      var r = n;
      switch ((of(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Fs();
          break;
        case 3:
          Kr(), ne(Ge), ne($e), hf();
          break;
        case 5:
          pf(r);
          break;
        case 4:
          Kr();
          break;
        case 13:
          ne(ie);
          break;
        case 19:
          ne(ie);
          break;
        case 10:
          uf(r.type._context);
          break;
        case 22:
        case 23:
          kf();
      }
      n = n.return;
    }
  if (
    ((ke = e),
    (xe = e = bn(e.current, null)),
    (Oe = Ze = t),
    (Ce = 0),
    (ci = null),
    (Cf = ba = rr = 0),
    (We = Vo = null),
    Qn !== null)
  ) {
    for (t = 0; t < Qn.length; t++)
      if (((n = Qn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Qn = null;
  }
  return e;
}
function jy(e, t) {
  do {
    var n = xe;
    try {
      if ((lf(), (ms.current = Ys), Qs)) {
        for (var r = le.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Qs = !1;
      }
      if (
        ((nr = 0),
        (Pe = Se = le = null),
        (Io = !1),
        (ai = 0),
        (Sf.current = null),
        n === null || n.return === null)
      ) {
        (Ce = 1), (ci = t), (xe = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = Oe),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var m = yp(s);
          if (m !== null) {
            (m.flags &= -257),
              vp(m, s, a, i, t),
              m.mode & 1 && gp(i, u, t),
              (t = m),
              (l = u);
            var h = t.updateQueue;
            if (h === null) {
              var g = new Set();
              g.add(l), (t.updateQueue = g);
            } else h.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              gp(i, u, t), bf();
              break e;
            }
            l = Error(R(426));
          }
        } else if (oe && a.mode & 1) {
          var w = yp(s);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              vp(w, s, a, i, t),
              sf(Qr(l, a));
            break e;
          }
        }
        (i = l = Qr(l, a)),
          Ce !== 4 && (Ce = 2),
          Vo === null ? (Vo = [i]) : Vo.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var y = vy(i, l, t);
              up(i, y);
              break e;
            case 1:
              a = l;
              var p = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Pn === null || !Pn.has(v))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var x = xy(i, a, t);
                up(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      $y(n);
    } catch (C) {
      (t = C), xe === n && n !== null && (xe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Dy() {
  var e = Xs.current;
  return (Xs.current = Ys), e === null ? Ys : e;
}
function bf() {
  (Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4),
    ke === null || (!(rr & 268435455) && !(ba & 268435455)) || hn(ke, Oe);
}
function Zs(e, t) {
  var n = U;
  U |= 2;
  var r = Dy();
  (ke !== e || Oe !== t) && ((Ft = null), Jn(e, t));
  do
    try {
      eS();
      break;
    } catch (o) {
      jy(e, o);
    }
  while (1);
  if ((lf(), (U = n), (Xs.current = r), xe !== null)) throw Error(R(261));
  return (ke = null), (Oe = 0), Ce;
}
function eS() {
  for (; xe !== null; ) Iy(xe);
}
function tS() {
  for (; xe !== null && !bx(); ) Iy(xe);
}
function Iy(e) {
  var t = Fy(e.alternate, e, Ze);
  (e.memoizedProps = e.pendingProps),
    t === null ? $y(e) : (xe = t),
    (Sf.current = null);
}
function $y(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Qw(n, t)), n !== null)) {
        (n.flags &= 32767), (xe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ce = 6), (xe = null);
        return;
      }
    } else if (((n = Kw(n, t, Ze)), n !== null)) {
      xe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      xe = t;
      return;
    }
    xe = t = e;
  } while (t !== null);
  Ce === 0 && (Ce = 5);
}
function Wn(e, t, n) {
  var r = Q,
    o = pt.transition;
  try {
    (pt.transition = null), (Q = 1), nS(e, t, n, r);
  } finally {
    (pt.transition = o), (Q = r);
  }
  return null;
}
function nS(e, t, n, r) {
  do Fr();
  while (yn !== null);
  if (U & 6) throw Error(R(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Dx(e, i),
    e === ke && ((xe = ke = null), (Oe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ts ||
      ((ts = !0),
      zy(_s, function () {
        return Fr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = pt.transition), (pt.transition = null);
    var s = Q;
    Q = 1;
    var a = U;
    (U |= 4),
      (Sf.current = null),
      Xw(e, n),
      My(n, e),
      Cw(zu),
      (Ds = !!Fu),
      (zu = Fu = null),
      (e.current = n),
      qw(n),
      Tx(),
      (U = a),
      (Q = s),
      (pt.transition = i);
  } else e.current = n;
  if (
    (ts && ((ts = !1), (yn = e), (Js = o)),
    (i = e.pendingLanes),
    i === 0 && (Pn = null),
    Ox(n.stateNode),
    Qe(e, he()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (qs) throw ((qs = !1), (e = ac), (ac = null), e);
  return (
    Js & 1 && e.tag !== 0 && Fr(),
    (i = e.pendingLanes),
    i & 1 ? (e === lc ? Fo++ : ((Fo = 0), (lc = e))) : (Fo = 0),
    In(),
    null
  );
}
function Fr() {
  if (yn !== null) {
    var e = yg(Js),
      t = pt.transition,
      n = Q;
    try {
      if (((pt.transition = null), (Q = 16 > e ? 16 : e), yn === null))
        var r = !1;
      else {
        if (((e = yn), (yn = null), (Js = 0), U & 6)) throw Error(R(331));
        var o = U;
        for (U |= 4, L = e.current; L !== null; ) {
          var i = L,
            s = i.child;
          if (L.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (L = u; L !== null; ) {
                  var c = L;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $o(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (L = f);
                  else
                    for (; L !== null; ) {
                      c = L;
                      var d = c.sibling,
                        m = c.return;
                      if ((Ay(c), c === u)) {
                        L = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = m), (L = d);
                        break;
                      }
                      L = m;
                    }
                }
              }
              var h = i.alternate;
              if (h !== null) {
                var g = h.child;
                if (g !== null) {
                  h.child = null;
                  do {
                    var w = g.sibling;
                    (g.sibling = null), (g = w);
                  } while (g !== null);
                }
              }
              L = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (L = s);
          else
            e: for (; L !== null; ) {
              if (((i = L), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    $o(9, i, i.return);
                }
              var y = i.sibling;
              if (y !== null) {
                (y.return = i.return), (L = y);
                break e;
              }
              L = i.return;
            }
        }
        var p = e.current;
        for (L = p; L !== null; ) {
          s = L;
          var v = s.child;
          if (s.subtreeFlags & 2064 && v !== null) (v.return = s), (L = v);
          else
            e: for (s = p; L !== null; ) {
              if (((a = L), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ka(9, a);
                  }
                } catch (C) {
                  de(a, a.return, C);
                }
              if (a === s) {
                L = null;
                break e;
              }
              var x = a.sibling;
              if (x !== null) {
                (x.return = a.return), (L = x);
                break e;
              }
              L = a.return;
            }
        }
        if (
          ((U = o), In(), jt && typeof jt.onPostCommitFiberRoot == "function")
        )
          try {
            jt.onPostCommitFiberRoot(ya, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Q = n), (pt.transition = t);
    }
  }
  return !1;
}
function Lp(e, t, n) {
  (t = Qr(n, t)),
    (t = vy(e, t, 1)),
    (e = En(e, t, 1)),
    (t = ze()),
    e !== null && (Pi(e, 1, t), Qe(e, t));
}
function de(e, t, n) {
  if (e.tag === 3) Lp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Lp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Pn === null || !Pn.has(r)))
        ) {
          (e = Qr(n, e)),
            (e = xy(t, e, 1)),
            (t = En(t, e, 1)),
            (e = ze()),
            t !== null && (Pi(t, 1, e), Qe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function rS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ze()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ke === e &&
      (Oe & n) === n &&
      (Ce === 4 || (Ce === 3 && (Oe & 130023424) === Oe && 500 > he() - Ef)
        ? Jn(e, 0)
        : (Cf |= n)),
    Qe(e, t);
}
function Vy(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Hi), (Hi <<= 1), !(Hi & 130023424) && (Hi = 4194304))
      : (t = 1));
  var n = ze();
  (e = Zt(e, t)), e !== null && (Pi(e, t, n), Qe(e, n));
}
function oS(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Vy(e, n);
}
function iS(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), Vy(e, n);
}
var Fy;
Fy = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ge.current) He = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (He = !1), Gw(e, t, n);
      He = !!(e.flags & 131072);
    }
  else (He = !1), oe && t.flags & 1048576 && Ug(t, Us, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ys(e, t), (e = t.pendingProps);
      var o = Wr(t, $e.current);
      Vr(t, n), (o = gf(null, t, r, e, o, n));
      var i = yf();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ke(r) ? ((i = !0), zs(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            ff(t),
            (o.updater = Ea),
            (t.stateNode = o),
            (o._reactInternals = t),
            Xu(t, r, e, n),
            (t = Zu(null, t, r, !0, i, n)))
          : ((t.tag = 0), oe && i && rf(t), Fe(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ys(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = aS(r)),
          (e = wt(r, e)),
          o)
        ) {
          case 0:
            t = Ju(null, t, r, e, n);
            break e;
          case 1:
            t = Sp(null, t, r, e, n);
            break e;
          case 11:
            t = xp(null, t, r, e, n);
            break e;
          case 14:
            t = wp(null, t, r, wt(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : wt(r, o)),
        Ju(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : wt(r, o)),
        Sp(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Ey(t), e === null)) throw Error(R(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Kg(e, t),
          Gs(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Qr(Error(R(423)), t)), (t = Cp(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Qr(Error(R(424)), t)), (t = Cp(e, t, r, n, o));
            break e;
          } else
            for (
              tt = Cn(t.stateNode.containerInfo.firstChild),
                nt = t,
                oe = !0,
                Ct = null,
                n = qg(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Hr(), r === o)) {
            t = en(e, t, n);
            break e;
          }
          Fe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Jg(t),
        e === null && Ku(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Bu(r, o) ? (s = null) : i !== null && Bu(r, i) && (t.flags |= 32),
        Cy(e, t),
        Fe(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Ku(t), null;
    case 13:
      return Py(e, t, n);
    case 4:
      return (
        df(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Gr(t, null, r, n)) : Fe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : wt(r, o)),
        xp(e, t, r, o, n)
      );
    case 7:
      return Fe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Fe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Fe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          Z(Ws, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (kt(i.value, s)) {
            if (i.children === o.children && !Ge.current) {
              t = en(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = Ht(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      Qu(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(R(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Qu(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        Fe(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Vr(t, n),
        (o = mt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Fe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = wt(r, t.pendingProps)),
        (o = wt(r.type, o)),
        wp(e, t, r, o, n)
      );
    case 15:
      return wy(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : wt(r, o)),
        ys(e, t),
        (t.tag = 1),
        Ke(r) ? ((e = !0), zs(t)) : (e = !1),
        Vr(t, n),
        Yg(t, r, o),
        Xu(t, r, o, n),
        Zu(null, t, r, !0, e, n)
      );
    case 19:
      return ky(e, t, n);
    case 22:
      return Sy(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function zy(e, t) {
  return pg(e, t);
}
function sS(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function dt(e, t, n, r) {
  return new sS(e, t, n, r);
}
function Tf(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function aS(e) {
  if (typeof e == "function") return Tf(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Hc)) return 11;
    if (e === Gc) return 14;
  }
  return 2;
}
function bn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = dt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ws(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) Tf(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case wr:
        return Zn(n.children, o, i, t);
      case Wc:
        (s = 8), (o |= 8);
        break;
      case wu:
        return (
          (e = dt(12, n, t, o | 2)), (e.elementType = wu), (e.lanes = i), e
        );
      case Su:
        return (e = dt(13, n, t, o)), (e.elementType = Su), (e.lanes = i), e;
      case Cu:
        return (e = dt(19, n, t, o)), (e.elementType = Cu), (e.lanes = i), e;
      case Xm:
        return Ta(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Qm:
              s = 10;
              break e;
            case Ym:
              s = 9;
              break e;
            case Hc:
              s = 11;
              break e;
            case Gc:
              s = 14;
              break e;
            case cn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = dt(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Zn(e, t, n, r) {
  return (e = dt(7, e, r, t)), (e.lanes = n), e;
}
function Ta(e, t, n, r) {
  return (
    (e = dt(22, e, r, t)),
    (e.elementType = Xm),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ql(e, t, n) {
  return (e = dt(6, e, null, t)), (e.lanes = n), e;
}
function Yl(e, t, n) {
  return (
    (t = dt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function lS(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Al(0)),
    (this.expirationTimes = Al(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Al(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Rf(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new lS(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = dt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ff(i),
    e
  );
}
function uS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: xr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function By(e) {
  if (!e) return Ln;
  e = e._reactInternals;
  e: {
    if (sr(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ke(n)) return zg(e, n, t);
  }
  return t;
}
function Uy(e, t, n, r, o, i, s, a, l) {
  return (
    (e = Rf(n, r, !0, e, o, i, s, a, l)),
    (e.context = By(null)),
    (n = e.current),
    (r = ze()),
    (o = kn(n)),
    (i = Ht(r, o)),
    (i.callback = t ?? null),
    En(n, i, o),
    (e.current.lanes = o),
    Pi(e, o, r),
    Qe(e, r),
    e
  );
}
function Ra(e, t, n, r) {
  var o = t.current,
    i = ze(),
    s = kn(o);
  return (
    (n = By(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ht(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = En(o, t, s)),
    e !== null && (Pt(e, o, s, i), hs(e, o, s)),
    s
  );
}
function ea(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Mp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Af(e, t) {
  Mp(e, t), (e = e.alternate) && Mp(e, t);
}
function cS() {
  return null;
}
var Wy =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Of(e) {
  this._internalRoot = e;
}
Aa.prototype.render = Of.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  Ra(e, t, null, null);
};
Aa.prototype.unmount = Of.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    or(function () {
      Ra(null, e, null, null);
    }),
      (t[Jt] = null);
  }
};
function Aa(e) {
  this._internalRoot = e;
}
Aa.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = wg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < pn.length && t !== 0 && t < pn[n].priority; n++);
    pn.splice(n, 0, e), n === 0 && Cg(e);
  }
};
function Lf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Oa(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Np() {}
function fS(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = ea(s);
        i.call(u);
      };
    }
    var s = Uy(t, r, e, 0, null, !1, !1, "", Np);
    return (
      (e._reactRootContainer = s),
      (e[Jt] = s.current),
      ni(e.nodeType === 8 ? e.parentNode : e),
      or(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = ea(l);
      a.call(u);
    };
  }
  var l = Rf(e, 0, !1, null, null, !1, !1, "", Np);
  return (
    (e._reactRootContainer = l),
    (e[Jt] = l.current),
    ni(e.nodeType === 8 ? e.parentNode : e),
    or(function () {
      Ra(t, l, n, r);
    }),
    l
  );
}
function La(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = ea(s);
        a.call(l);
      };
    }
    Ra(t, s, e, o);
  } else s = fS(n, t, e, o, r);
  return ea(s);
}
vg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ao(t.pendingLanes);
        n !== 0 &&
          (Yc(t, n | 1), Qe(t, he()), !(U & 6) && ((Yr = he() + 500), In()));
      }
      break;
    case 13:
      or(function () {
        var r = Zt(e, 1);
        if (r !== null) {
          var o = ze();
          Pt(r, e, 1, o);
        }
      }),
        Af(e, 1);
  }
};
Xc = function (e) {
  if (e.tag === 13) {
    var t = Zt(e, 134217728);
    if (t !== null) {
      var n = ze();
      Pt(t, e, 134217728, n);
    }
    Af(e, 134217728);
  }
};
xg = function (e) {
  if (e.tag === 13) {
    var t = kn(e),
      n = Zt(e, t);
    if (n !== null) {
      var r = ze();
      Pt(n, e, t, r);
    }
    Af(e, t);
  }
};
wg = function () {
  return Q;
};
Sg = function (e, t) {
  var n = Q;
  try {
    return (Q = e), t();
  } finally {
    Q = n;
  }
};
Mu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ku(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Sa(r);
            if (!o) throw Error(R(90));
            Jm(r), ku(r, o);
          }
        }
      }
      break;
    case "textarea":
      eg(e, n);
      break;
    case "select":
      (t = n.value), t != null && jr(e, !!n.multiple, t, !1);
  }
};
ag = Pf;
lg = or;
var dS = { usingClientEntryPoint: !1, Events: [bi, Pr, Sa, ig, sg, Pf] },
  vo = {
    findFiberByHostInstance: Kn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  pS = {
    bundleType: vo.bundleType,
    version: vo.version,
    rendererPackageName: vo.rendererPackageName,
    rendererConfig: vo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: rn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = fg(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: vo.findFiberByHostInstance || cS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ns = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ns.isDisabled && ns.supportsFiber)
    try {
      (ya = ns.inject(pS)), (jt = ns);
    } catch {}
}
st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dS;
st.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Lf(t)) throw Error(R(200));
  return uS(e, t, null, n);
};
st.createRoot = function (e, t) {
  if (!Lf(e)) throw Error(R(299));
  var n = !1,
    r = "",
    o = Wy;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Rf(e, 1, !1, null, null, n, !1, r, o)),
    (e[Jt] = t.current),
    ni(e.nodeType === 8 ? e.parentNode : e),
    new Of(t)
  );
};
st.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = fg(t)), (e = e === null ? null : e.stateNode), e;
};
st.flushSync = function (e) {
  return or(e);
};
st.hydrate = function (e, t, n) {
  if (!Oa(t)) throw Error(R(200));
  return La(null, e, t, !0, n);
};
st.hydrateRoot = function (e, t, n) {
  if (!Lf(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = Wy;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Uy(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[Jt] = t.current),
    ni(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Aa(t);
};
st.render = function (e, t, n) {
  if (!Oa(t)) throw Error(R(200));
  return La(null, e, t, !1, n);
};
st.unmountComponentAtNode = function (e) {
  if (!Oa(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (or(function () {
        La(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Jt] = null);
        });
      }),
      !0)
    : !1;
};
st.unstable_batchedUpdates = Pf;
st.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Oa(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return La(e, t, n, !1, r);
};
st.version = "18.2.0-next-9e3b772b8-20220608";
function Hy() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hy);
    } catch (e) {
      console.error(e);
    }
}
Hy(), (Um.exports = st);
var Gy = Um.exports,
  _p = Gy;
(vu.createRoot = _p.createRoot), (vu.hydrateRoot = _p.hydrateRoot);
/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fi() {
  return (
    (fi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fi.apply(this, arguments)
  );
}
var vn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(vn || (vn = {}));
const jp = "popstate";
function hS(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: a } = r.location;
    return fc(
      "",
      { pathname: i, search: s, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default",
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : ta(o);
  }
  return gS(t, n, null, e);
}
function we(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Mf(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function mS() {
  return Math.random().toString(36).substr(2, 8);
}
function Dp(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function fc(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    fi(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? so(t) : t,
      { state: n, key: (t && t.key) || r || mS() },
    )
  );
}
function ta(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function so(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function gS(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    a = vn.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState(fi({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    a = vn.Pop;
    let w = c(),
      y = w == null ? null : w - u;
    (u = w), l && l({ action: a, location: g.location, delta: y });
  }
  function d(w, y) {
    a = vn.Push;
    let p = fc(g.location, w, y);
    n && n(p, w), (u = c() + 1);
    let v = Dp(p, u),
      x = g.createHref(p);
    try {
      s.pushState(v, "", x);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      o.location.assign(x);
    }
    i && l && l({ action: a, location: g.location, delta: 1 });
  }
  function m(w, y) {
    a = vn.Replace;
    let p = fc(g.location, w, y);
    n && n(p, w), (u = c());
    let v = Dp(p, u),
      x = g.createHref(p);
    s.replaceState(v, "", x),
      i && l && l({ action: a, location: g.location, delta: 0 });
  }
  function h(w) {
    let y = o.location.origin !== "null" ? o.location.origin : o.location.href,
      p = typeof w == "string" ? w : ta(w);
    return (
      we(
        y,
        "No window.location.(origin|href) available to create URL for href: " +
          p,
      ),
      new URL(p, y)
    );
  }
  let g = {
    get action() {
      return a;
    },
    get location() {
      return e(o, s);
    },
    listen(w) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(jp, f),
        (l = w),
        () => {
          o.removeEventListener(jp, f), (l = null);
        }
      );
    },
    createHref(w) {
      return t(o, w);
    },
    createURL: h,
    encodeLocation(w) {
      let y = h(w);
      return { pathname: y.pathname, search: y.search, hash: y.hash };
    },
    push: d,
    replace: m,
    go(w) {
      return s.go(w);
    },
  };
  return g;
}
var Ip;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Ip || (Ip = {}));
function yS(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? so(t) : t,
    o = Nf(r.pathname || "/", n);
  if (o == null) return null;
  let i = Ky(e);
  vS(i);
  let s = null;
  for (let a = 0; s == null && a < i.length; ++a) s = TS(i[a], OS(o));
  return s;
}
function Ky(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, s, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (we(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = Tn([r, l.relativePath]),
      c = n.concat(l);
    i.children &&
      i.children.length > 0 &&
      (we(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      Ky(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: kS(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, s) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, s);
      else for (let l of Qy(i.path)) o(i, s, l);
    }),
    t
  );
}
function Qy(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let s = Qy(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? i : [i, l].join("/")))),
    o && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function vS(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : bS(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const xS = /^:\w+$/,
  wS = 3,
  SS = 2,
  CS = 1,
  ES = 10,
  PS = -2,
  $p = (e) => e === "*";
function kS(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some($p) && (r += PS),
    t && (r += SS),
    n
      .filter((o) => !$p(o))
      .reduce((o, i) => o + (xS.test(i) ? wS : i === "" ? CS : ES), r)
  );
}
function bS(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function TS(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let s = 0; s < n.length; ++s) {
    let a = n[s],
      l = s === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      c = RS(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: l },
        u,
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let f = a.route;
    i.push({
      params: r,
      pathname: Tn([o, c.pathname]),
      pathnameBase: _S(Tn([o, c.pathnameBase])),
      route: f,
    }),
      c.pathnameBase !== "/" && (o = Tn([o, c.pathnameBase]));
  }
  return i;
}
function RS(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = AS(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      if (c === "*") {
        let d = a[f] || "";
        s = i.slice(0, i.length - d.length).replace(/(.)\/+$/, "$1");
      }
      return (u[c] = LS(a[f] || "", c)), u;
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function AS(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Mf(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (s, a) => (r.push(a), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function OS(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Mf(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function LS(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Mf(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ")."),
      ),
      e
    );
  }
}
function Nf(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function MS(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? so(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : NS(n, t)) : t,
    search: jS(r),
    hash: DS(o),
  };
}
function NS(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Xl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Yy(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Xy(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = so(e))
    : ((o = fi({}, e)),
      we(
        !o.pathname || !o.pathname.includes("?"),
        Xl("?", "pathname", "search", o),
      ),
      we(
        !o.pathname || !o.pathname.includes("#"),
        Xl("#", "pathname", "hash", o),
      ),
      we(!o.search || !o.search.includes("#"), Xl("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    s = i ? "/" : o.pathname,
    a;
  if (r || s == null) a = n;
  else {
    let f = t.length - 1;
    if (s.startsWith("..")) {
      let d = s.split("/");
      for (; d[0] === ".."; ) d.shift(), (f -= 1);
      o.pathname = d.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let l = MS(o, a),
    u = s && s !== "/" && s.endsWith("/"),
    c = (i || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const Tn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  _S = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  jS = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  DS = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function IS(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const qy = ["post", "put", "patch", "delete"];
new Set(qy);
const $S = ["get", ...qy];
new Set($S);
/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function na() {
  return (
    (na = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    na.apply(this, arguments)
  );
}
const _f = S.createContext(null),
  VS = S.createContext(null),
  ao = S.createContext(null),
  Ma = S.createContext(null),
  $n = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Jy = S.createContext(null);
function FS(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Ri() || we(!1);
  let { basename: r, navigator: o } = S.useContext(ao),
    { hash: i, pathname: s, search: a } = e0(e, { relative: n }),
    l = s;
  return (
    r !== "/" && (l = s === "/" ? r : Tn([r, s])),
    o.createHref({ pathname: l, search: a, hash: i })
  );
}
function Ri() {
  return S.useContext(Ma) != null;
}
function Na() {
  return Ri() || we(!1), S.useContext(Ma).location;
}
function Zy(e) {
  S.useContext(ao).static || S.useLayoutEffect(e);
}
function zS() {
  let { isDataRoute: e } = S.useContext($n);
  return e ? tC() : BS();
}
function BS() {
  Ri() || we(!1);
  let e = S.useContext(_f),
    { basename: t, navigator: n } = S.useContext(ao),
    { matches: r } = S.useContext($n),
    { pathname: o } = Na(),
    i = JSON.stringify(Yy(r).map((l) => l.pathnameBase)),
    s = S.useRef(!1);
  return (
    Zy(() => {
      s.current = !0;
    }),
    S.useCallback(
      function (l, u) {
        if ((u === void 0 && (u = {}), !s.current)) return;
        if (typeof l == "number") {
          n.go(l);
          return;
        }
        let c = Xy(l, JSON.parse(i), o, u.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : Tn([t, c.pathname])),
          (u.replace ? n.replace : n.push)(c, u.state, u);
      },
      [t, n, i, o, e],
    )
  );
}
function US() {
  let { matches: e } = S.useContext($n),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function e0(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = S.useContext($n),
    { pathname: o } = Na(),
    i = JSON.stringify(Yy(r).map((s) => s.pathnameBase));
  return S.useMemo(() => Xy(e, JSON.parse(i), o, n === "path"), [e, i, o, n]);
}
function WS(e, t) {
  return HS(e, t);
}
function HS(e, t, n) {
  Ri() || we(!1);
  let { navigator: r } = S.useContext(ao),
    { matches: o } = S.useContext($n),
    i = o[o.length - 1],
    s = i ? i.params : {};
  i && i.pathname;
  let a = i ? i.pathnameBase : "/";
  i && i.route;
  let l = Na(),
    u;
  if (t) {
    var c;
    let g = typeof t == "string" ? so(t) : t;
    a === "/" || ((c = g.pathname) != null && c.startsWith(a)) || we(!1),
      (u = g);
  } else u = l;
  let f = u.pathname || "/",
    d = a === "/" ? f : f.slice(a.length) || "/",
    m = yS(e, { pathname: d }),
    h = XS(
      m &&
        m.map((g) =>
          Object.assign({}, g, {
            params: Object.assign({}, s, g.params),
            pathname: Tn([
              a,
              r.encodeLocation
                ? r.encodeLocation(g.pathname).pathname
                : g.pathname,
            ]),
            pathnameBase:
              g.pathnameBase === "/"
                ? a
                : Tn([
                    a,
                    r.encodeLocation
                      ? r.encodeLocation(g.pathnameBase).pathname
                      : g.pathnameBase,
                  ]),
          }),
        ),
      o,
      n,
    );
  return t && h
    ? S.createElement(
        Ma.Provider,
        {
          value: {
            location: na(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u,
            ),
            navigationType: vn.Pop,
          },
        },
        h,
      )
    : h;
}
function GS() {
  let e = eC(),
    t = IS(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    i = null;
  return S.createElement(
    S.Fragment,
    null,
    S.createElement("h2", null, "Unexpected Application Error!"),
    S.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? S.createElement("pre", { style: o }, n) : null,
    i,
  );
}
const KS = S.createElement(GS, null);
class QS extends S.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error
      ? S.createElement(
          $n.Provider,
          { value: this.props.routeContext },
          S.createElement(Jy.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function YS(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = S.useContext(_f);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement($n.Provider, { value: t }, r)
  );
}
function XS(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let i = e,
    s = (r = n) == null ? void 0 : r.errors;
  if (s != null) {
    let a = i.findIndex(
      (l) => l.route.id && (s == null ? void 0 : s[l.route.id]),
    );
    a >= 0 || we(!1), (i = i.slice(0, Math.min(i.length, a + 1)));
  }
  return i.reduceRight((a, l, u) => {
    let c = l.route.id ? (s == null ? void 0 : s[l.route.id]) : null,
      f = null;
    n && (f = l.route.errorElement || KS);
    let d = t.concat(i.slice(0, u + 1)),
      m = () => {
        let h;
        return (
          c
            ? (h = f)
            : l.route.Component
            ? (h = S.createElement(l.route.Component, null))
            : l.route.element
            ? (h = l.route.element)
            : (h = a),
          S.createElement(YS, {
            match: l,
            routeContext: { outlet: a, matches: d, isDataRoute: n != null },
            children: h,
          })
        );
      };
    return n && (l.route.ErrorBoundary || l.route.errorElement || u === 0)
      ? S.createElement(QS, {
          location: n.location,
          revalidation: n.revalidation,
          component: f,
          error: c,
          children: m(),
          routeContext: { outlet: null, matches: d, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var dc;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate");
})(dc || (dc = {}));
var di;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId");
})(di || (di = {}));
function qS(e) {
  let t = S.useContext(_f);
  return t || we(!1), t;
}
function JS(e) {
  let t = S.useContext(VS);
  return t || we(!1), t;
}
function ZS(e) {
  let t = S.useContext($n);
  return t || we(!1), t;
}
function t0(e) {
  let t = ZS(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || we(!1), n.route.id;
}
function eC() {
  var e;
  let t = S.useContext(Jy),
    n = JS(di.UseRouteError),
    r = t0(di.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function tC() {
  let { router: e } = qS(dc.UseNavigateStable),
    t = t0(di.UseNavigateStable),
    n = S.useRef(!1);
  return (
    Zy(() => {
      n.current = !0;
    }),
    S.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, na({ fromRouteId: t }, i)));
      },
      [e, t],
    )
  );
}
function yr(e) {
  we(!1);
}
function nC(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = vn.Pop,
    navigator: i,
    static: s = !1,
  } = e;
  Ri() && we(!1);
  let a = t.replace(/^\/*/, "/"),
    l = S.useMemo(() => ({ basename: a, navigator: i, static: s }), [a, i, s]);
  typeof r == "string" && (r = so(r));
  let {
      pathname: u = "/",
      search: c = "",
      hash: f = "",
      state: d = null,
      key: m = "default",
    } = r,
    h = S.useMemo(() => {
      let g = Nf(u, a);
      return g == null
        ? null
        : {
            location: { pathname: g, search: c, hash: f, state: d, key: m },
            navigationType: o,
          };
    }, [a, u, c, f, d, m, o]);
  return h == null
    ? null
    : S.createElement(
        ao.Provider,
        { value: l },
        S.createElement(Ma.Provider, { children: n, value: h }),
      );
}
function rC(e) {
  let { children: t, location: n } = e;
  return WS(pc(t), n);
}
var Vp;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Vp || (Vp = {}));
new Promise(() => {});
function pc(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    S.Children.forEach(e, (r, o) => {
      if (!S.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === S.Fragment) {
        n.push.apply(n, pc(r.props.children, i));
        return;
      }
      r.type !== yr && we(!1), !r.props.index || !r.props.children || we(!1);
      let s = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = pc(r.props.children, i)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function hc() {
  return (
    (hc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    hc.apply(this, arguments)
  );
}
function oC(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function iC(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function sC(e, t) {
  return e.button === 0 && (!t || t === "_self") && !iC(e);
}
const aC = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  lC = "startTransition",
  Fp = yu[lC];
function uC(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = S.useRef();
  i.current == null && (i.current = hS({ window: o, v5Compat: !0 }));
  let s = i.current,
    [a, l] = S.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    c = S.useCallback(
      (f) => {
        u && Fp ? Fp(() => l(f)) : l(f);
      },
      [l, u],
    );
  return (
    S.useLayoutEffect(() => s.listen(c), [s, c]),
    S.createElement(nC, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
    })
  );
}
const cC =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  fC = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ra = S.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: s,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
      } = t,
      f = oC(t, aC),
      { basename: d } = S.useContext(ao),
      m,
      h = !1;
    if (typeof u == "string" && fC.test(u) && ((m = u), cC))
      try {
        let p = new URL(window.location.href),
          v = u.startsWith("//") ? new URL(p.protocol + u) : new URL(u),
          x = Nf(v.pathname, d);
        v.origin === p.origin && x != null
          ? (u = x + v.search + v.hash)
          : (h = !0);
      } catch {}
    let g = FS(u, { relative: o }),
      w = dC(u, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: o,
      });
    function y(p) {
      r && r(p), p.defaultPrevented || w(p);
    }
    return S.createElement(
      "a",
      hc({}, f, { href: m || g, onClick: h || i ? r : y, ref: n, target: l }),
    );
  });
var zp;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})(zp || (zp = {}));
var Bp;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Bp || (Bp = {}));
function dC(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: s,
    } = t === void 0 ? {} : t,
    a = zS(),
    l = Na(),
    u = e0(e, { relative: s });
  return S.useCallback(
    (c) => {
      if (sC(c, n)) {
        c.preventDefault();
        let f = r !== void 0 ? r : ta(l) === ta(u);
        a(e, { replace: f, state: o, preventScrollReset: i, relative: s });
      }
    },
    [l, a, u, r, o, n, e, i, s],
  );
}
function Up() {
  const e = ["Counters", "TodoApp"];
  return T.jsx("div", {
    className:
      "w-full basic-theme min-h-screen flex flex-wrap justify-center items-center relative",
    children: e.map((t, n) =>
      T.jsx(
        ra,
        {
          className:
            "w-[150px] theme-border basic-theme h-[150px] flex justify-center items-center relative m-2 rounded shadow-md",
          to: `/${t}`,
          children: t,
        },
        n,
      ),
    ),
  });
}
var n0 = { exports: {} },
  r0 = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xr = S;
function pC(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var hC = typeof Object.is == "function" ? Object.is : pC,
  mC = Xr.useState,
  gC = Xr.useEffect,
  yC = Xr.useLayoutEffect,
  vC = Xr.useDebugValue;
function xC(e, t) {
  var n = t(),
    r = mC({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1];
  return (
    yC(
      function () {
        (o.value = n), (o.getSnapshot = t), ql(o) && i({ inst: o });
      },
      [e, n, t],
    ),
    gC(
      function () {
        return (
          ql(o) && i({ inst: o }),
          e(function () {
            ql(o) && i({ inst: o });
          })
        );
      },
      [e],
    ),
    vC(n),
    n
  );
}
function ql(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !hC(e, n);
  } catch {
    return !0;
  }
}
function wC(e, t) {
  return t();
}
var SC =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? wC
    : xC;
r0.useSyncExternalStore =
  Xr.useSyncExternalStore !== void 0 ? Xr.useSyncExternalStore : SC;
n0.exports = r0;
var CC = n0.exports,
  o0 = { exports: {} },
  i0 = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _a = S,
  EC = CC;
function PC(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var kC = typeof Object.is == "function" ? Object.is : PC,
  bC = EC.useSyncExternalStore,
  TC = _a.useRef,
  RC = _a.useEffect,
  AC = _a.useMemo,
  OC = _a.useDebugValue;
i0.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = TC(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else s = i.current;
  i = AC(
    function () {
      function l(m) {
        if (!u) {
          if (((u = !0), (c = m), (m = r(m)), o !== void 0 && s.hasValue)) {
            var h = s.value;
            if (o(h, m)) return (f = h);
          }
          return (f = m);
        }
        if (((h = f), kC(c, m))) return h;
        var g = r(m);
        return o !== void 0 && o(h, g) ? h : ((c = m), (f = g));
      }
      var u = !1,
        c,
        f,
        d = n === void 0 ? null : n;
      return [
        function () {
          return l(t());
        },
        d === null
          ? void 0
          : function () {
              return l(d());
            },
      ];
    },
    [t, n, r, o],
  );
  var a = bC(e, i[0], i[1]);
  return (
    RC(
      function () {
        (s.hasValue = !0), (s.value = a);
      },
      [a],
    ),
    OC(a),
    a
  );
};
o0.exports = i0;
var LC = o0.exports;
function MC(e) {
  e();
}
let s0 = MC;
const NC = (e) => (s0 = e),
  _C = () => s0,
  Wp = Symbol.for(`react-redux-context-${S.version}`),
  Hp = globalThis;
function jC() {
  let e = Hp[Wp];
  return e || ((e = S.createContext(null)), (Hp[Wp] = e)), e;
}
const Mn = new Proxy(
  {},
  new Proxy(
    {},
    {
      get(e, t) {
        const n = jC();
        return (r, ...o) => Reflect[t](n, ...o);
      },
    },
  ),
);
function jf(e = Mn) {
  return function () {
    return S.useContext(e);
  };
}
const a0 = jf(),
  DC = () => {
    throw new Error("uSES not initialized!");
  };
let l0 = DC;
const IC = (e) => {
    l0 = e;
  },
  $C = (e, t) => e === t;
function VC(e = Mn) {
  const t = e === Mn ? a0 : jf(e);
  return function (r, o = {}) {
    const {
        equalityFn: i = $C,
        stabilityCheck: s = void 0,
        noopCheck: a = void 0,
      } = typeof o == "function" ? { equalityFn: o } : o,
      {
        store: l,
        subscription: u,
        getServerState: c,
        stabilityCheck: f,
        noopCheck: d,
      } = t();
    S.useRef(!0);
    const m = S.useCallback(
        {
          [r.name](g) {
            return r(g);
          },
        }[r.name],
        [r, f, s],
      ),
      h = l0(u.addNestedSub, l.getState, c || l.getState, m, i);
    return S.useDebugValue(h), h;
  };
}
const u0 = VC();
function V() {
  return (
    (V = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    V.apply(this, arguments)
  );
}
function on(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var c0 = { exports: {} },
  Y = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var be = typeof Symbol == "function" && Symbol.for,
  Df = be ? Symbol.for("react.element") : 60103,
  If = be ? Symbol.for("react.portal") : 60106,
  ja = be ? Symbol.for("react.fragment") : 60107,
  Da = be ? Symbol.for("react.strict_mode") : 60108,
  Ia = be ? Symbol.for("react.profiler") : 60114,
  $a = be ? Symbol.for("react.provider") : 60109,
  Va = be ? Symbol.for("react.context") : 60110,
  $f = be ? Symbol.for("react.async_mode") : 60111,
  Fa = be ? Symbol.for("react.concurrent_mode") : 60111,
  za = be ? Symbol.for("react.forward_ref") : 60112,
  Ba = be ? Symbol.for("react.suspense") : 60113,
  FC = be ? Symbol.for("react.suspense_list") : 60120,
  Ua = be ? Symbol.for("react.memo") : 60115,
  Wa = be ? Symbol.for("react.lazy") : 60116,
  zC = be ? Symbol.for("react.block") : 60121,
  BC = be ? Symbol.for("react.fundamental") : 60117,
  UC = be ? Symbol.for("react.responder") : 60118,
  WC = be ? Symbol.for("react.scope") : 60119;
function lt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Df:
        switch (((e = e.type), e)) {
          case $f:
          case Fa:
          case ja:
          case Ia:
          case Da:
          case Ba:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Va:
              case za:
              case Wa:
              case Ua:
              case $a:
                return e;
              default:
                return t;
            }
        }
      case If:
        return t;
    }
  }
}
function f0(e) {
  return lt(e) === Fa;
}
Y.AsyncMode = $f;
Y.ConcurrentMode = Fa;
Y.ContextConsumer = Va;
Y.ContextProvider = $a;
Y.Element = Df;
Y.ForwardRef = za;
Y.Fragment = ja;
Y.Lazy = Wa;
Y.Memo = Ua;
Y.Portal = If;
Y.Profiler = Ia;
Y.StrictMode = Da;
Y.Suspense = Ba;
Y.isAsyncMode = function (e) {
  return f0(e) || lt(e) === $f;
};
Y.isConcurrentMode = f0;
Y.isContextConsumer = function (e) {
  return lt(e) === Va;
};
Y.isContextProvider = function (e) {
  return lt(e) === $a;
};
Y.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Df;
};
Y.isForwardRef = function (e) {
  return lt(e) === za;
};
Y.isFragment = function (e) {
  return lt(e) === ja;
};
Y.isLazy = function (e) {
  return lt(e) === Wa;
};
Y.isMemo = function (e) {
  return lt(e) === Ua;
};
Y.isPortal = function (e) {
  return lt(e) === If;
};
Y.isProfiler = function (e) {
  return lt(e) === Ia;
};
Y.isStrictMode = function (e) {
  return lt(e) === Da;
};
Y.isSuspense = function (e) {
  return lt(e) === Ba;
};
Y.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === ja ||
    e === Fa ||
    e === Ia ||
    e === Da ||
    e === Ba ||
    e === FC ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Wa ||
        e.$$typeof === Ua ||
        e.$$typeof === $a ||
        e.$$typeof === Va ||
        e.$$typeof === za ||
        e.$$typeof === BC ||
        e.$$typeof === UC ||
        e.$$typeof === WC ||
        e.$$typeof === zC))
  );
};
Y.typeOf = lt;
c0.exports = Y;
var HC = c0.exports,
  d0 = HC,
  GC = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  KC = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  p0 = {};
p0[d0.ForwardRef] = GC;
p0[d0.Memo] = KC;
var J = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vf = Symbol.for("react.element"),
  Ff = Symbol.for("react.portal"),
  Ha = Symbol.for("react.fragment"),
  Ga = Symbol.for("react.strict_mode"),
  Ka = Symbol.for("react.profiler"),
  Qa = Symbol.for("react.provider"),
  Ya = Symbol.for("react.context"),
  QC = Symbol.for("react.server_context"),
  Xa = Symbol.for("react.forward_ref"),
  qa = Symbol.for("react.suspense"),
  Ja = Symbol.for("react.suspense_list"),
  Za = Symbol.for("react.memo"),
  el = Symbol.for("react.lazy"),
  YC = Symbol.for("react.offscreen"),
  h0;
h0 = Symbol.for("react.module.reference");
function yt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Vf:
        switch (((e = e.type), e)) {
          case Ha:
          case Ka:
          case Ga:
          case qa:
          case Ja:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case QC:
              case Ya:
              case Xa:
              case el:
              case Za:
              case Qa:
                return e;
              default:
                return t;
            }
        }
      case Ff:
        return t;
    }
  }
}
J.ContextConsumer = Ya;
J.ContextProvider = Qa;
J.Element = Vf;
J.ForwardRef = Xa;
J.Fragment = Ha;
J.Lazy = el;
J.Memo = Za;
J.Portal = Ff;
J.Profiler = Ka;
J.StrictMode = Ga;
J.Suspense = qa;
J.SuspenseList = Ja;
J.isAsyncMode = function () {
  return !1;
};
J.isConcurrentMode = function () {
  return !1;
};
J.isContextConsumer = function (e) {
  return yt(e) === Ya;
};
J.isContextProvider = function (e) {
  return yt(e) === Qa;
};
J.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Vf;
};
J.isForwardRef = function (e) {
  return yt(e) === Xa;
};
J.isFragment = function (e) {
  return yt(e) === Ha;
};
J.isLazy = function (e) {
  return yt(e) === el;
};
J.isMemo = function (e) {
  return yt(e) === Za;
};
J.isPortal = function (e) {
  return yt(e) === Ff;
};
J.isProfiler = function (e) {
  return yt(e) === Ka;
};
J.isStrictMode = function (e) {
  return yt(e) === Ga;
};
J.isSuspense = function (e) {
  return yt(e) === qa;
};
J.isSuspenseList = function (e) {
  return yt(e) === Ja;
};
J.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Ha ||
    e === Ka ||
    e === Ga ||
    e === qa ||
    e === Ja ||
    e === YC ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === el ||
        e.$$typeof === Za ||
        e.$$typeof === Qa ||
        e.$$typeof === Ya ||
        e.$$typeof === Xa ||
        e.$$typeof === h0 ||
        e.getModuleId !== void 0))
  );
};
J.typeOf = yt;
function XC() {
  const e = _C();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        o = t;
      for (; o; ) r.push(o), (o = o.next);
      return r;
    },
    subscribe(r) {
      let o = !0,
        i = (n = { callback: r, next: null, prev: n });
      return (
        i.prev ? (i.prev.next = i) : (t = i),
        function () {
          !o ||
            t === null ||
            ((o = !1),
            i.next ? (i.next.prev = i.prev) : (n = i.prev),
            i.prev ? (i.prev.next = i.next) : (t = i.next));
        }
      );
    },
  };
}
const Gp = { notify() {}, get: () => [] };
function qC(e, t) {
  let n,
    r = Gp;
  function o(f) {
    return l(), r.subscribe(f);
  }
  function i() {
    r.notify();
  }
  function s() {
    c.onStateChange && c.onStateChange();
  }
  function a() {
    return !!n;
  }
  function l() {
    n || ((n = t ? t.addNestedSub(s) : e.subscribe(s)), (r = XC()));
  }
  function u() {
    n && (n(), (n = void 0), r.clear(), (r = Gp));
  }
  const c = {
    addNestedSub: o,
    notifyNestedSubs: i,
    handleChangeWrapper: s,
    isSubscribed: a,
    trySubscribe: l,
    tryUnsubscribe: u,
    getListeners: () => r,
  };
  return c;
}
const JC =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  ZC = JC ? S.useLayoutEffect : S.useEffect;
function eE({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  noopCheck: i = "once",
}) {
  const s = S.useMemo(() => {
      const u = qC(e);
      return {
        store: e,
        subscription: u,
        getServerState: r ? () => r : void 0,
        stabilityCheck: o,
        noopCheck: i,
      };
    }, [e, r, o, i]),
    a = S.useMemo(() => e.getState(), [e]);
  ZC(() => {
    const { subscription: u } = s;
    return (
      (u.onStateChange = u.notifyNestedSubs),
      u.trySubscribe(),
      a !== e.getState() && u.notifyNestedSubs(),
      () => {
        u.tryUnsubscribe(), (u.onStateChange = void 0);
      }
    );
  }, [s, a]);
  const l = t || Mn;
  return Ei.createElement(l.Provider, { value: s }, n);
}
function m0(e = Mn) {
  const t = e === Mn ? a0 : jf(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const tE = m0();
function nE(e = Mn) {
  const t = e === Mn ? tE : m0(e);
  return function () {
    return t().dispatch;
  };
}
const g0 = nE();
IC(LC.useSyncExternalStoreWithSelector);
NC(Gy.unstable_batchedUpdates);
const rE = "http://localhost:5174/api/v1/todos/get",
  y0 = "GET_TODOS_REQUEST",
  v0 = "GET_TODOS_SUCCESS",
  x0 = "GET_TODOS_FAILD";
function w0(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: oE } = Object.prototype,
  { getPrototypeOf: zf } = Object,
  tl = ((e) => (t) => {
    const n = oE.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Vt = (e) => ((e = e.toLowerCase()), (t) => tl(t) === e),
  nl = (e) => (t) => typeof t === e,
  { isArray: lo } = Array,
  pi = nl("undefined");
function iE(e) {
  return (
    e !== null &&
    !pi(e) &&
    e.constructor !== null &&
    !pi(e.constructor) &&
    ht(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const S0 = Vt("ArrayBuffer");
function sE(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && S0(e.buffer)),
    t
  );
}
const aE = nl("string"),
  ht = nl("function"),
  C0 = nl("number"),
  rl = (e) => e !== null && typeof e == "object",
  lE = (e) => e === !0 || e === !1,
  Ss = (e) => {
    if (tl(e) !== "object") return !1;
    const t = zf(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  uE = Vt("Date"),
  cE = Vt("File"),
  fE = Vt("Blob"),
  dE = Vt("FileList"),
  pE = (e) => rl(e) && ht(e.pipe),
  hE = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (ht(e.append) &&
          ((t = tl(e)) === "formdata" ||
            (t === "object" &&
              ht(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  mE = Vt("URLSearchParams"),
  gE = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ai(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), lo(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = i.length;
    let a;
    for (r = 0; r < s; r++) (a = i[r]), t.call(null, e[a], a, e);
  }
}
function E0(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const P0 = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  k0 = (e) => !pi(e) && e !== P0;
function mc() {
  const { caseless: e } = (k0(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && E0(t, o)) || o;
      Ss(t[i]) && Ss(r)
        ? (t[i] = mc(t[i], r))
        : Ss(r)
        ? (t[i] = mc({}, r))
        : lo(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Ai(arguments[r], n);
  return t;
}
const yE = (e, t, n, { allOwnKeys: r } = {}) => (
    Ai(
      t,
      (o, i) => {
        n && ht(o) ? (e[i] = w0(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r },
    ),
    e
  ),
  vE = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  xE = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  wE = (e, t, n, r) => {
    let o, i, s;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (s = o[i]), (!r || r(s, e, t)) && !a[s] && ((t[s] = e[s]), (a[s] = !0));
      e = n !== !1 && zf(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  SE = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  CE = (e) => {
    if (!e) return null;
    if (lo(e)) return e;
    let t = e.length;
    if (!C0(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  EE = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && zf(Uint8Array)),
  PE = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  kE = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  bE = Vt("HTMLFormElement"),
  TE = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  Kp = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  RE = Vt("RegExp"),
  b0 = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Ai(n, (o, i) => {
      t(o, i, e) !== !1 && (r[i] = o);
    }),
      Object.defineProperties(e, r);
  },
  AE = (e) => {
    b0(e, (t, n) => {
      if (ht(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (ht(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  OE = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return lo(e) ? r(e) : r(String(e).split(t)), n;
  },
  LE = () => {},
  ME = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Jl = "abcdefghijklmnopqrstuvwxyz",
  Qp = "0123456789",
  T0 = { DIGIT: Qp, ALPHA: Jl, ALPHA_DIGIT: Jl + Jl.toUpperCase() + Qp },
  NE = (e = 16, t = T0.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function _E(e) {
  return !!(
    e &&
    ht(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const jE = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (rl(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const i = lo(r) ? [] : {};
            return (
              Ai(r, (s, a) => {
                const l = n(s, o + 1);
                !pi(l) && (i[a] = l);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  DE = Vt("AsyncFunction"),
  IE = (e) => e && (rl(e) || ht(e)) && ht(e.then) && ht(e.catch),
  P = {
    isArray: lo,
    isArrayBuffer: S0,
    isBuffer: iE,
    isFormData: hE,
    isArrayBufferView: sE,
    isString: aE,
    isNumber: C0,
    isBoolean: lE,
    isObject: rl,
    isPlainObject: Ss,
    isUndefined: pi,
    isDate: uE,
    isFile: cE,
    isBlob: fE,
    isRegExp: RE,
    isFunction: ht,
    isStream: pE,
    isURLSearchParams: mE,
    isTypedArray: EE,
    isFileList: dE,
    forEach: Ai,
    merge: mc,
    extend: yE,
    trim: gE,
    stripBOM: vE,
    inherits: xE,
    toFlatObject: wE,
    kindOf: tl,
    kindOfTest: Vt,
    endsWith: SE,
    toArray: CE,
    forEachEntry: PE,
    matchAll: kE,
    isHTMLForm: bE,
    hasOwnProperty: Kp,
    hasOwnProp: Kp,
    reduceDescriptors: b0,
    freezeMethods: AE,
    toObjectSet: OE,
    toCamelCase: TE,
    noop: LE,
    toFiniteNumber: ME,
    findKey: E0,
    global: P0,
    isContextDefined: k0,
    ALPHABET: T0,
    generateString: NE,
    isSpecCompliantForm: _E,
    toJSONObject: jE,
    isAsyncFn: DE,
    isThenable: IE,
  };
function B(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
P.inherits(B, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: P.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const R0 = B.prototype,
  A0 = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  A0[e] = { value: e };
});
Object.defineProperties(B, A0);
Object.defineProperty(R0, "isAxiosError", { value: !0 });
B.from = (e, t, n, r, o, i) => {
  const s = Object.create(R0);
  return (
    P.toFlatObject(
      e,
      s,
      function (l) {
        return l !== Error.prototype;
      },
      (a) => a !== "isAxiosError",
    ),
    B.call(s, e.message, t, n, r, o),
    (s.cause = e),
    (s.name = e.name),
    i && Object.assign(s, i),
    s
  );
};
const $E = null;
function gc(e) {
  return P.isPlainObject(e) || P.isArray(e);
}
function O0(e) {
  return P.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Yp(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = O0(o)), !n && i ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function VE(e) {
  return P.isArray(e) && !e.some(gc);
}
const FE = P.toFlatObject(P, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function ol(e, t, n) {
  if (!P.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = P.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, w) {
        return !P.isUndefined(w[g]);
      },
    ));
  const r = n.metaTokens,
    o = n.visitor || c,
    i = n.dots,
    s = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && P.isSpecCompliantForm(t);
  if (!P.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(h) {
    if (h === null) return "";
    if (P.isDate(h)) return h.toISOString();
    if (!l && P.isBlob(h))
      throw new B("Blob is not supported. Use a Buffer instead.");
    return P.isArrayBuffer(h) || P.isTypedArray(h)
      ? l && typeof Blob == "function"
        ? new Blob([h])
        : Buffer.from(h)
      : h;
  }
  function c(h, g, w) {
    let y = h;
    if (h && !w && typeof h == "object") {
      if (P.endsWith(g, "{}"))
        (g = r ? g : g.slice(0, -2)), (h = JSON.stringify(h));
      else if (
        (P.isArray(h) && VE(h)) ||
        ((P.isFileList(h) || P.endsWith(g, "[]")) && (y = P.toArray(h)))
      )
        return (
          (g = O0(g)),
          y.forEach(function (v, x) {
            !(P.isUndefined(v) || v === null) &&
              t.append(
                s === !0 ? Yp([g], x, i) : s === null ? g : g + "[]",
                u(v),
              );
          }),
          !1
        );
    }
    return gc(h) ? !0 : (t.append(Yp(w, g, i), u(h)), !1);
  }
  const f = [],
    d = Object.assign(FE, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: gc,
    });
  function m(h, g) {
    if (!P.isUndefined(h)) {
      if (f.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      f.push(h),
        P.forEach(h, function (y, p) {
          (!(P.isUndefined(y) || y === null) &&
            o.call(t, y, P.isString(p) ? p.trim() : p, g, d)) === !0 &&
            m(y, g ? g.concat(p) : [p]);
        }),
        f.pop();
    }
  }
  if (!P.isObject(e)) throw new TypeError("data must be an object");
  return m(e), t;
}
function Xp(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Bf(e, t) {
  (this._pairs = []), e && ol(e, this, t);
}
const L0 = Bf.prototype;
L0.append = function (t, n) {
  this._pairs.push([t, n]);
};
L0.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Xp);
      }
    : Xp;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function zE(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function M0(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || zE,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = P.isURLSearchParams(t) ? t.toString() : new Bf(t, n).toString(r)),
    i)
  ) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class BE {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    P.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const qp = BE,
  N0 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  UE = typeof URLSearchParams < "u" ? URLSearchParams : Bf,
  WE = typeof FormData < "u" ? FormData : null,
  HE = typeof Blob < "u" ? Blob : null,
  GE = (() => {
    let e;
    return typeof navigator < "u" &&
      ((e = navigator.product) === "ReactNative" ||
        e === "NativeScript" ||
        e === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  })(),
  KE = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  _t = {
    isBrowser: !0,
    classes: { URLSearchParams: UE, FormData: WE, Blob: HE },
    isStandardBrowserEnv: GE,
    isStandardBrowserWebWorkerEnv: KE,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function QE(e, t) {
  return ol(
    e,
    new _t.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return _t.isNode && P.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function YE(e) {
  return P.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0],
  );
}
function XE(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function _0(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    const a = Number.isFinite(+s),
      l = i >= n.length;
    return (
      (s = !s && P.isArray(o) ? o.length : s),
      l
        ? (P.hasOwnProp(o, s) ? (o[s] = [o[s], r]) : (o[s] = r), !a)
        : ((!o[s] || !P.isObject(o[s])) && (o[s] = []),
          t(n, r, o[s], i) && P.isArray(o[s]) && (o[s] = XE(o[s])),
          !a)
    );
  }
  if (P.isFormData(e) && P.isFunction(e.entries)) {
    const n = {};
    return (
      P.forEachEntry(e, (r, o) => {
        t(YE(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
const qE = { "Content-Type": void 0 };
function JE(e, t, n) {
  if (P.isString(e))
    try {
      return (t || JSON.parse)(e), P.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const il = {
  transitional: N0,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        i = P.isObject(t);
      if ((i && P.isHTMLForm(t) && (t = new FormData(t)), P.isFormData(t)))
        return o && o ? JSON.stringify(_0(t)) : t;
      if (
        P.isArrayBuffer(t) ||
        P.isBuffer(t) ||
        P.isStream(t) ||
        P.isFile(t) ||
        P.isBlob(t)
      )
        return t;
      if (P.isArrayBufferView(t)) return t.buffer;
      if (P.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          t.toString()
        );
      let a;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return QE(t, this.formSerializer).toString();
        if ((a = P.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return ol(
            a ? { "files[]": t } : t,
            l && new l(),
            this.formSerializer,
          );
        }
      }
      return i || o ? (n.setContentType("application/json", !1), JE(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || il.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (t && P.isString(t) && ((r && !this.responseType) || o)) {
        const s = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (s)
            throw a.name === "SyntaxError"
              ? B.from(a, B.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: _t.classes.FormData, Blob: _t.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
P.forEach(["delete", "get", "head"], function (t) {
  il.headers[t] = {};
});
P.forEach(["post", "put", "patch"], function (t) {
  il.headers[t] = P.merge(qE);
});
const Uf = il,
  ZE = P.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  eP = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (s) {
            (o = s.indexOf(":")),
              (n = s.substring(0, o).trim().toLowerCase()),
              (r = s.substring(o + 1).trim()),
              !(!n || (t[n] && ZE[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Jp = Symbol("internals");
function xo(e) {
  return e && String(e).trim().toLowerCase();
}
function Cs(e) {
  return e === !1 || e == null ? e : P.isArray(e) ? e.map(Cs) : String(e);
}
function tP(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const nP = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Zl(e, t, n, r, o) {
  if (P.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!P.isString(t))) {
    if (P.isString(r)) return t.indexOf(r) !== -1;
    if (P.isRegExp(r)) return r.test(t);
  }
}
function rP(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function oP(e, t) {
  const n = P.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0,
    });
  });
}
class sl {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(a, l, u) {
      const c = xo(l);
      if (!c) throw new Error("header name must be a non-empty string");
      const f = P.findKey(o, c);
      (!f || o[f] === void 0 || u === !0 || (u === void 0 && o[f] !== !1)) &&
        (o[f || l] = Cs(a));
    }
    const s = (a, l) => P.forEach(a, (u, c) => i(u, c, l));
    return (
      P.isPlainObject(t) || t instanceof this.constructor
        ? s(t, n)
        : P.isString(t) && (t = t.trim()) && !nP(t)
        ? s(eP(t), n)
        : t != null && i(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = xo(t)), t)) {
      const r = P.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return tP(o);
        if (P.isFunction(n)) return n.call(this, o, r);
        if (P.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = xo(t)), t)) {
      const r = P.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Zl(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (((s = xo(s)), s)) {
        const a = P.findKey(r, s);
        a && (!n || Zl(r, r[a], a, n)) && (delete r[a], (o = !0));
      }
    }
    return P.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Zl(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      P.forEach(this, (o, i) => {
        const s = P.findKey(r, i);
        if (s) {
          (n[s] = Cs(o)), delete n[i];
          return;
        }
        const a = t ? rP(i) : String(i).trim();
        a !== i && delete n[i], (n[a] = Cs(o)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      P.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && P.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[Jp] = this[Jp] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(s) {
      const a = xo(s);
      r[a] || (oP(o, s), (r[a] = !0));
    }
    return P.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
sl.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
P.freezeMethods(sl.prototype);
P.freezeMethods(sl);
const Gt = sl;
function eu(e, t) {
  const n = this || Uf,
    r = t || n,
    o = Gt.from(r.headers);
  let i = r.data;
  return (
    P.forEach(e, function (a) {
      i = a.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function j0(e) {
  return !!(e && e.__CANCEL__);
}
function Oi(e, t, n) {
  B.call(this, e ?? "canceled", B.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
P.inherits(Oi, B, { __CANCEL__: !0 });
function iP(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new B(
          "Request failed with status code " + n.status,
          [B.ERR_BAD_REQUEST, B.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n,
        ),
      );
}
const sP = _t.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, o, i, s, a) {
          const l = [];
          l.push(n + "=" + encodeURIComponent(r)),
            P.isNumber(o) && l.push("expires=" + new Date(o).toGMTString()),
            P.isString(i) && l.push("path=" + i),
            P.isString(s) && l.push("domain=" + s),
            a === !0 && l.push("secure"),
            (document.cookie = l.join("; "));
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"),
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove: function (n) {
          this.write(n, "", Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function aP(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function lP(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function D0(e, t) {
  return e && !aP(t) ? lP(e, t) : t;
}
const uP = _t.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function o(i) {
        let s = i;
        return (
          t && (n.setAttribute("href", s), (s = n.href)),
          n.setAttribute("href", s),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = o(window.location.href)),
        function (s) {
          const a = P.isString(s) ? o(s) : s;
          return a.protocol === r.protocol && a.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function cP(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function fP(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const u = Date.now(),
        c = r[i];
      s || (s = u), (n[o] = l), (r[o] = u);
      let f = i,
        d = 0;
      for (; f !== o; ) (d += n[f++]), (f = f % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - s < t)) return;
      const m = c && u - c;
      return m ? Math.round((d * 1e3) / m) : void 0;
    }
  );
}
function Zp(e, t) {
  let n = 0;
  const r = fP(50, 250);
  return (o) => {
    const i = o.loaded,
      s = o.lengthComputable ? o.total : void 0,
      a = i - n,
      l = r(a),
      u = i <= s;
    n = i;
    const c = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: a,
      rate: l || void 0,
      estimated: l && s && u ? (s - i) / l : void 0,
      event: o,
    };
    (c[t ? "download" : "upload"] = !0), e(c);
  };
}
const dP = typeof XMLHttpRequest < "u",
  pP =
    dP &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data;
        const i = Gt.from(e.headers).normalize(),
          s = e.responseType;
        let a;
        function l() {
          e.cancelToken && e.cancelToken.unsubscribe(a),
            e.signal && e.signal.removeEventListener("abort", a);
        }
        P.isFormData(o) &&
          (_t.isStandardBrowserEnv || _t.isStandardBrowserWebWorkerEnv
            ? i.setContentType(!1)
            : i.setContentType("multipart/form-data;", !1));
        let u = new XMLHttpRequest();
        if (e.auth) {
          const m = e.auth.username || "",
            h = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          i.set("Authorization", "Basic " + btoa(m + ":" + h));
        }
        const c = D0(e.baseURL, e.url);
        u.open(e.method.toUpperCase(), M0(c, e.params, e.paramsSerializer), !0),
          (u.timeout = e.timeout);
        function f() {
          if (!u) return;
          const m = Gt.from(
              "getAllResponseHeaders" in u && u.getAllResponseHeaders(),
            ),
            g = {
              data:
                !s || s === "text" || s === "json"
                  ? u.responseText
                  : u.response,
              status: u.status,
              statusText: u.statusText,
              headers: m,
              config: e,
              request: u,
            };
          iP(
            function (y) {
              n(y), l();
            },
            function (y) {
              r(y), l();
            },
            g,
          ),
            (u = null);
        }
        if (
          ("onloadend" in u
            ? (u.onloadend = f)
            : (u.onreadystatechange = function () {
                !u ||
                  u.readyState !== 4 ||
                  (u.status === 0 &&
                    !(u.responseURL && u.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(f);
              }),
          (u.onabort = function () {
            u &&
              (r(new B("Request aborted", B.ECONNABORTED, e, u)), (u = null));
          }),
          (u.onerror = function () {
            r(new B("Network Error", B.ERR_NETWORK, e, u)), (u = null);
          }),
          (u.ontimeout = function () {
            let h = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const g = e.transitional || N0;
            e.timeoutErrorMessage && (h = e.timeoutErrorMessage),
              r(
                new B(
                  h,
                  g.clarifyTimeoutError ? B.ETIMEDOUT : B.ECONNABORTED,
                  e,
                  u,
                ),
              ),
              (u = null);
          }),
          _t.isStandardBrowserEnv)
        ) {
          const m =
            (e.withCredentials || uP(c)) &&
            e.xsrfCookieName &&
            sP.read(e.xsrfCookieName);
          m && i.set(e.xsrfHeaderName, m);
        }
        o === void 0 && i.setContentType(null),
          "setRequestHeader" in u &&
            P.forEach(i.toJSON(), function (h, g) {
              u.setRequestHeader(g, h);
            }),
          P.isUndefined(e.withCredentials) ||
            (u.withCredentials = !!e.withCredentials),
          s && s !== "json" && (u.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            u.addEventListener("progress", Zp(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            u.upload &&
            u.upload.addEventListener("progress", Zp(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((a = (m) => {
              u &&
                (r(!m || m.type ? new Oi(null, e, u) : m),
                u.abort(),
                (u = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(a),
            e.signal &&
              (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
        const d = cP(c);
        if (d && _t.protocols.indexOf(d) === -1) {
          r(new B("Unsupported protocol " + d + ":", B.ERR_BAD_REQUEST, e));
          return;
        }
        u.send(o || null);
      });
    },
  Es = { http: $E, xhr: pP };
P.forEach(Es, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const hP = {
  getAdapter: (e) => {
    e = P.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (
      let o = 0;
      o < t && ((n = e[o]), !(r = P.isString(n) ? Es[n.toLowerCase()] : n));
      o++
    );
    if (!r)
      throw r === !1
        ? new B(
            `Adapter ${n} is not supported by the environment`,
            "ERR_NOT_SUPPORT",
          )
        : new Error(
            P.hasOwnProp(Es, n)
              ? `Adapter '${n}' is not available in the build`
              : `Unknown adapter '${n}'`,
          );
    if (!P.isFunction(r)) throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: Es,
};
function tu(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Oi(null, e);
}
function eh(e) {
  return (
    tu(e),
    (e.headers = Gt.from(e.headers)),
    (e.data = eu.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    hP
      .getAdapter(e.adapter || Uf.adapter)(e)
      .then(
        function (r) {
          return (
            tu(e),
            (r.data = eu.call(e, e.transformResponse, r)),
            (r.headers = Gt.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            j0(r) ||
              (tu(e),
              r &&
                r.response &&
                ((r.response.data = eu.call(
                  e,
                  e.transformResponse,
                  r.response,
                )),
                (r.response.headers = Gt.from(r.response.headers)))),
            Promise.reject(r)
          );
        },
      )
  );
}
const th = (e) => (e instanceof Gt ? e.toJSON() : e);
function qr(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, f) {
    return P.isPlainObject(u) && P.isPlainObject(c)
      ? P.merge.call({ caseless: f }, u, c)
      : P.isPlainObject(c)
      ? P.merge({}, c)
      : P.isArray(c)
      ? c.slice()
      : c;
  }
  function o(u, c, f) {
    if (P.isUndefined(c)) {
      if (!P.isUndefined(u)) return r(void 0, u, f);
    } else return r(u, c, f);
  }
  function i(u, c) {
    if (!P.isUndefined(c)) return r(void 0, c);
  }
  function s(u, c) {
    if (P.isUndefined(c)) {
      if (!P.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function a(u, c, f) {
    if (f in t) return r(u, c);
    if (f in e) return r(void 0, u);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (u, c) => o(th(u), th(c), !0),
  };
  return (
    P.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const f = l[c] || o,
        d = f(e[c], t[c], c);
      (P.isUndefined(d) && f !== a) || (n[c] = d);
    }),
    n
  );
}
const I0 = "1.4.0",
  Wf = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Wf[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
const nh = {};
Wf.transitional = function (t, n, r) {
  function o(i, s) {
    return (
      "[Axios v" +
      I0 +
      "] Transitional option '" +
      i +
      "'" +
      s +
      (r ? ". " + r : "")
    );
  }
  return (i, s, a) => {
    if (t === !1)
      throw new B(
        o(s, " has been removed" + (n ? " in " + n : "")),
        B.ERR_DEPRECATED,
      );
    return (
      n &&
        !nh[s] &&
        ((nh[s] = !0),
        console.warn(
          o(
            s,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future",
          ),
        )),
      t ? t(i, s, a) : !0
    );
  };
};
function mP(e, t, n) {
  if (typeof e != "object")
    throw new B("options must be an object", B.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      s = t[i];
    if (s) {
      const a = e[i],
        l = a === void 0 || s(a, i, e);
      if (l !== !0)
        throw new B("option " + i + " must be " + l, B.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new B("Unknown option " + i, B.ERR_BAD_OPTION);
  }
}
const yc = { assertOptions: mP, validators: Wf },
  an = yc.validators;
class oa {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new qp(), response: new qp() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = qr(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      yc.assertOptions(
        r,
        {
          silentJSONParsing: an.transitional(an.boolean),
          forcedJSONParsing: an.transitional(an.boolean),
          clarifyTimeoutError: an.transitional(an.boolean),
        },
        !1,
      ),
      o != null &&
        (P.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : yc.assertOptions(
              o,
              { encode: an.function, serialize: an.function },
              !0,
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let s;
    (s = i && P.merge(i.common, i[n.method])),
      s &&
        P.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (h) => {
            delete i[h];
          },
        ),
      (n.headers = Gt.concat(s, i));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == "function" && g.runWhen(n) === !1) ||
        ((l = l && g.synchronous), a.unshift(g.fulfilled, g.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (g) {
      u.push(g.fulfilled, g.rejected);
    });
    let c,
      f = 0,
      d;
    if (!l) {
      const h = [eh.bind(this), void 0];
      for (
        h.unshift.apply(h, a),
          h.push.apply(h, u),
          d = h.length,
          c = Promise.resolve(n);
        f < d;

      )
        c = c.then(h[f++], h[f++]);
      return c;
    }
    d = a.length;
    let m = n;
    for (f = 0; f < d; ) {
      const h = a[f++],
        g = a[f++];
      try {
        m = h(m);
      } catch (w) {
        g.call(this, w);
        break;
      }
    }
    try {
      c = eh.call(this, m);
    } catch (h) {
      return Promise.reject(h);
    }
    for (f = 0, d = u.length; f < d; ) c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = qr(this.defaults, t);
    const n = D0(t.baseURL, t.url);
    return M0(n, t.params, t.paramsSerializer);
  }
}
P.forEach(["delete", "get", "head", "options"], function (t) {
  oa.prototype[t] = function (n, r) {
    return this.request(
      qr(r || {}, { method: t, url: n, data: (r || {}).data }),
    );
  };
});
P.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, s, a) {
      return this.request(
        qr(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: s,
        }),
      );
    };
  }
  (oa.prototype[t] = n()), (oa.prototype[t + "Form"] = n(!0));
});
const Ps = oa;
class Hf {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const s = new Promise((a) => {
          r.subscribe(a), (i = a);
        }).then(o);
        return (
          (s.cancel = function () {
            r.unsubscribe(i);
          }),
          s
        );
      }),
      t(function (i, s, a) {
        r.reason || ((r.reason = new Oi(i, s, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Hf(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
const gP = Hf;
function yP(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function vP(e) {
  return P.isObject(e) && e.isAxiosError === !0;
}
const vc = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(vc).forEach(([e, t]) => {
  vc[t] = e;
});
const xP = vc;
function $0(e) {
  const t = new Ps(e),
    n = w0(Ps.prototype.request, t);
  return (
    P.extend(n, Ps.prototype, t, { allOwnKeys: !0 }),
    P.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return $0(qr(e, o));
    }),
    n
  );
}
const Ee = $0(Uf);
Ee.Axios = Ps;
Ee.CanceledError = Oi;
Ee.CancelToken = gP;
Ee.isCancel = j0;
Ee.VERSION = I0;
Ee.toFormData = ol;
Ee.AxiosError = B;
Ee.Cancel = Ee.CanceledError;
Ee.all = function (t) {
  return Promise.all(t);
};
Ee.spread = yP;
Ee.isAxiosError = vP;
Ee.mergeConfig = qr;
Ee.AxiosHeaders = Gt;
Ee.formToJSON = (e) => _0(P.isHTMLForm(e) ? new FormData(e) : e);
Ee.HttpStatusCode = xP;
Ee.default = Ee;
const zo = Ee,
  wP = () => async (e) => {
    e({ type: y0 });
    try {
      const n = await (await zo.get(rE)).data.database.todos;
      e({ type: v0, payload: { todos: n } });
    } catch (t) {
      e({ type: x0, payload: { error: t.message } });
    }
  },
  SP = () => {
    const e = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
    ];
    return T.jsx("div", {
      className:
        "w-full flex justify-center items-center flex-wrap relative gap-2",
      children:
        e == null
          ? void 0
          : e.map((t, n) =>
              T.jsxs(
                "div",
                {
                  className:
                    "w-[45%] animateing-container p-2 text-[#E2E3E7] border-2 border-[#40474D] shadow-md rounded overflow-hidden flex justify-center flex-col relative",
                  children: [
                    T.jsx("p", {
                      className: "text-[#181C1F] text-2xl my-1 mb-2",
                      children: "Basic redux",
                    }),
                    T.jsx("p", {
                      className: "text-[#181C1F] text-xs font-medium",
                      children: "I have to complete Ba....",
                    }),
                    T.jsx("p", {
                      className: "text-[#181C1F] text-xs mt-2 font-medium",
                      children: "8/12/2023, 12:30:32 AM",
                    }),
                    T.jsx("div", { className: "animateing-box" }),
                  ],
                },
                t + n,
              ),
            ),
    });
  },
  V0 = S.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  al = S.createContext({}),
  Gf = S.createContext(null),
  ll = typeof document < "u",
  rh = ll ? S.useLayoutEffect : S.useEffect,
  F0 = S.createContext({ strict: !1 });
function CP(e, t, n, r) {
  const { visualElement: o } = S.useContext(al),
    i = S.useContext(F0),
    s = S.useContext(Gf),
    a = S.useContext(V0).reducedMotion,
    l = S.useRef();
  (r = r || i.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: a,
      }));
  const u = l.current;
  return (
    S.useInsertionEffect(() => {
      u && u.update(n, s);
    }),
    rh(() => {
      u && u.render();
    }),
    S.useEffect(() => {
      u && u.updateFeatures();
    }),
    (window.HandoffAppearAnimations ? rh : S.useEffect)(() => {
      u && u.animationState && u.animationState.animateChanges();
    }),
    u
  );
}
function Lr(e) {
  return (
    typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function EP(e, t, n) {
  return S.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Lr(n) && (n.current = r));
    },
    [t],
  );
}
function hi(e) {
  return typeof e == "string" || Array.isArray(e);
}
function ul(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Kf = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Qf = ["initial", ...Kf];
function cl(e) {
  return ul(e.animate) || Qf.some((t) => hi(e[t]));
}
function z0(e) {
  return !!(cl(e) || e.variants);
}
function PP(e, t) {
  if (cl(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || hi(n) ? n : void 0,
      animate: hi(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function kP(e) {
  const { initial: t, animate: n } = PP(e, S.useContext(al));
  return S.useMemo(() => ({ initial: t, animate: n }), [oh(t), oh(n)]);
}
function oh(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const ih = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  mi = {};
for (const e in ih) mi[e] = { isEnabled: (t) => ih[e].some((n) => !!t[n]) };
function bP(e) {
  for (const t in e) mi[t] = { ...mi[t], ...e[t] };
}
const B0 = S.createContext({}),
  U0 = S.createContext({}),
  TP = Symbol.for("motionComponentSymbol");
function RP({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: o,
}) {
  e && bP(e);
  function i(a, l) {
    let u;
    const c = { ...S.useContext(V0), ...a, layoutId: AP(a) },
      { isStatic: f } = c,
      d = kP(a),
      m = r(a, f);
    if (!f && ll) {
      d.visualElement = CP(o, m, c, t);
      const h = S.useContext(U0),
        g = S.useContext(F0).strict;
      d.visualElement && (u = d.visualElement.loadFeatures(c, g, e, h));
    }
    return S.createElement(
      al.Provider,
      { value: d },
      u && d.visualElement
        ? S.createElement(u, { visualElement: d.visualElement, ...c })
        : null,
      n(o, a, EP(m, d.visualElement, l), m, f, d.visualElement),
    );
  }
  const s = S.forwardRef(i);
  return (s[TP] = o), s;
}
function AP({ layoutId: e }) {
  const t = S.useContext(B0).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function OP(e) {
  function t(r, o = {}) {
    return RP(e(r, o));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, o) => (n.has(o) || n.set(o, t(o)), n.get(o)),
  });
}
const LP = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Yf(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(LP.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const ia = {};
function MP(e) {
  Object.assign(ia, e);
}
const Li = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  ar = new Set(Li);
function W0(e, { layout: t, layoutId: n }) {
  return (
    ar.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!ia[e] || e === "opacity"))
  );
}
const Ye = (e) => !!(e && e.getVelocity),
  NP = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  _P = Li.length;
function jP(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  o,
) {
  let i = "";
  for (let s = 0; s < _P; s++) {
    const a = Li[s];
    if (e[a] !== void 0) {
      const l = NP[a] || a;
      i += `${l}(${e[a]}) `;
    }
  }
  return (
    t && !e.z && (i += "translateZ(0)"),
    (i = i.trim()),
    o ? (i = o(e, r ? "" : i)) : n && r && (i = "none"),
    i
  );
}
const H0 = (e) => (t) => typeof t == "string" && t.startsWith(e),
  G0 = H0("--"),
  xc = H0("var(--"),
  DP =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  IP = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Nn = (e, t, n) => Math.min(Math.max(n, e), t),
  lr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Bo = { ...lr, transform: (e) => Nn(0, 1, e) },
  rs = { ...lr, default: 1 },
  Uo = (e) => Math.round(e * 1e5) / 1e5,
  fl = /(-)?([\d]*\.?[\d])+/g,
  K0 =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  $P =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Mi(e) {
  return typeof e == "string";
}
const Ni = (e) => ({
    test: (t) => Mi(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  un = Ni("deg"),
  It = Ni("%"),
  j = Ni("px"),
  VP = Ni("vh"),
  FP = Ni("vw"),
  sh = {
    ...It,
    parse: (e) => It.parse(e) / 100,
    transform: (e) => It.transform(e * 100),
  },
  ah = { ...lr, transform: Math.round },
  Q0 = {
    borderWidth: j,
    borderTopWidth: j,
    borderRightWidth: j,
    borderBottomWidth: j,
    borderLeftWidth: j,
    borderRadius: j,
    radius: j,
    borderTopLeftRadius: j,
    borderTopRightRadius: j,
    borderBottomRightRadius: j,
    borderBottomLeftRadius: j,
    width: j,
    maxWidth: j,
    height: j,
    maxHeight: j,
    size: j,
    top: j,
    right: j,
    bottom: j,
    left: j,
    padding: j,
    paddingTop: j,
    paddingRight: j,
    paddingBottom: j,
    paddingLeft: j,
    margin: j,
    marginTop: j,
    marginRight: j,
    marginBottom: j,
    marginLeft: j,
    rotate: un,
    rotateX: un,
    rotateY: un,
    rotateZ: un,
    scale: rs,
    scaleX: rs,
    scaleY: rs,
    scaleZ: rs,
    skew: un,
    skewX: un,
    skewY: un,
    distance: j,
    translateX: j,
    translateY: j,
    translateZ: j,
    x: j,
    y: j,
    z: j,
    perspective: j,
    transformPerspective: j,
    opacity: Bo,
    originX: sh,
    originY: sh,
    originZ: j,
    zIndex: ah,
    fillOpacity: Bo,
    strokeOpacity: Bo,
    numOctaves: ah,
  };
function Xf(e, t, n, r) {
  const { style: o, vars: i, transform: s, transformOrigin: a } = e;
  let l = !1,
    u = !1,
    c = !0;
  for (const f in t) {
    const d = t[f];
    if (G0(f)) {
      i[f] = d;
      continue;
    }
    const m = Q0[f],
      h = IP(d, m);
    if (ar.has(f)) {
      if (((l = !0), (s[f] = h), !c)) continue;
      d !== (m.default || 0) && (c = !1);
    } else f.startsWith("origin") ? ((u = !0), (a[f] = h)) : (o[f] = h);
  }
  if (
    (t.transform ||
      (l || r
        ? (o.transform = jP(e.transform, n, c, r))
        : o.transform && (o.transform = "none")),
    u)
  ) {
    const { originX: f = "50%", originY: d = "50%", originZ: m = 0 } = a;
    o.transformOrigin = `${f} ${d} ${m}`;
  }
}
const qf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Y0(e, t, n) {
  for (const r in t) !Ye(t[r]) && !W0(r, n) && (e[r] = t[r]);
}
function zP({ transformTemplate: e }, t, n) {
  return S.useMemo(() => {
    const r = qf();
    return (
      Xf(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function BP(e, t, n) {
  const r = e.style || {},
    o = {};
  return (
    Y0(o, r, e),
    Object.assign(o, zP(e, t, n)),
    e.transformValues ? e.transformValues(o) : o
  );
}
function UP(e, t, n) {
  const r = {},
    o = BP(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
      (o.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = o),
    r
  );
}
const WP = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport",
]);
function sa(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    WP.has(e)
  );
}
let X0 = (e) => !sa(e);
function HP(e) {
  e && (X0 = (t) => (t.startsWith("on") ? !sa(t) : e(t)));
}
try {
  HP(require("@emotion/is-prop-valid").default);
} catch {}
function GP(e, t, n) {
  const r = {};
  for (const o in e)
    (o === "values" && typeof e.values == "object") ||
      ((X0(o) ||
        (n === !0 && sa(o)) ||
        (!t && !sa(o)) ||
        (e.draggable && o.startsWith("onDrag"))) &&
        (r[o] = e[o]));
  return r;
}
function lh(e, t, n) {
  return typeof e == "string" ? e : j.transform(t + n * e);
}
function KP(e, t, n) {
  const r = lh(t, e.x, e.width),
    o = lh(n, e.y, e.height);
  return `${r} ${o}`;
}
const QP = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  YP = { offset: "strokeDashoffset", array: "strokeDasharray" };
function XP(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? QP : YP;
  e[i.offset] = j.transform(-r);
  const s = j.transform(t),
    a = j.transform(n);
  e[i.array] = `${s} ${a}`;
}
function Jf(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: o,
    originY: i,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  f,
  d,
) {
  if ((Xf(e, u, c, d), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: m, style: h, dimensions: g } = e;
  m.transform && (g && (h.transform = m.transform), delete m.transform),
    g &&
      (o !== void 0 || i !== void 0 || h.transform) &&
      (h.transformOrigin = KP(
        g,
        o !== void 0 ? o : 0.5,
        i !== void 0 ? i : 0.5,
      )),
    t !== void 0 && (m.x = t),
    n !== void 0 && (m.y = n),
    r !== void 0 && (m.scale = r),
    s !== void 0 && XP(m, s, a, l, !1);
}
const q0 = () => ({ ...qf(), attrs: {} }),
  Zf = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function qP(e, t, n, r) {
  const o = S.useMemo(() => {
    const i = q0();
    return (
      Jf(i, t, { enableHardwareAcceleration: !1 }, Zf(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    Y0(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function JP(e = !1) {
  return (n, r, o, { latestValues: i }, s) => {
    const l = (Yf(n) ? qP : UP)(r, i, s, n),
      c = { ...GP(r, typeof n == "string", e), ...l, ref: o },
      { children: f } = r,
      d = S.useMemo(() => (Ye(f) ? f.get() : f), [f]);
    return S.createElement(n, { ...c, children: d });
  };
}
const ed = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function J0(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const Z0 = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function ev(e, t, n, r) {
  J0(e, t, void 0, r);
  for (const o in t.attrs) e.setAttribute(Z0.has(o) ? o : ed(o), t.attrs[o]);
}
function td(e, t) {
  const { style: n } = e,
    r = {};
  for (const o in n)
    (Ye(n[o]) || (t.style && Ye(t.style[o])) || W0(o, e)) && (r[o] = n[o]);
  return r;
}
function tv(e, t) {
  const n = td(e, t);
  for (const r in e)
    if (Ye(e[r]) || Ye(t[r])) {
      const o =
        Li.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[o] = e[r];
    }
  return n;
}
function nd(e, t, n, r = {}, o = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
    t
  );
}
function ZP(e) {
  const t = S.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const aa = (e) => Array.isArray(e),
  e2 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  t2 = (e) => (aa(e) ? e[e.length - 1] || 0 : e);
function ks(e) {
  const t = Ye(e) ? e.get() : e;
  return e2(t) ? t.toValue() : t;
}
function n2(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  o,
  i,
) {
  const s = { latestValues: r2(r, o, i, e), renderState: t() };
  return n && (s.mount = (a) => n(r, a, s)), s;
}
const nv = (e) => (t, n) => {
  const r = S.useContext(al),
    o = S.useContext(Gf),
    i = () => n2(e, t, r, o);
  return n ? i() : ZP(i);
};
function r2(e, t, n, r) {
  const o = {},
    i = r(e, {});
  for (const d in i) o[d] = ks(i[d]);
  let { initial: s, animate: a } = e;
  const l = cl(e),
    u = z0(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? a : s;
  return (
    f &&
      typeof f != "boolean" &&
      !ul(f) &&
      (Array.isArray(f) ? f : [f]).forEach((m) => {
        const h = nd(e, m);
        if (!h) return;
        const { transitionEnd: g, transition: w, ...y } = h;
        for (const p in y) {
          let v = y[p];
          if (Array.isArray(v)) {
            const x = c ? v.length - 1 : 0;
            v = v[x];
          }
          v !== null && (o[p] = v);
        }
        for (const p in g) o[p] = g[p];
      }),
    o
  );
}
const o2 = {
    useVisualState: nv({
      scrapeMotionValuesFromProps: tv,
      createRenderState: q0,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        try {
          n.dimensions =
            typeof t.getBBox == "function"
              ? t.getBBox()
              : t.getBoundingClientRect();
        } catch {
          n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
        Jf(
          n,
          r,
          { enableHardwareAcceleration: !1 },
          Zf(t.tagName),
          e.transformTemplate,
        ),
          ev(t, n);
      },
    }),
  },
  i2 = {
    useVisualState: nv({
      scrapeMotionValuesFromProps: td,
      createRenderState: qf,
    }),
  };
function s2(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(Yf(e) ? o2 : i2),
    preloadedFeatures: n,
    useRender: JP(t),
    createVisualElement: r,
    Component: e,
  };
}
function Wt(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const rv = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function dl(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const a2 = (e) => (t) => rv(t) && e(t, dl(t));
function Kt(e, t, n, r) {
  return Wt(e, t, a2(n), r);
}
const l2 = (e, t) => (n) => t(e(n)),
  Rn = (...e) => e.reduce(l2);
function ov(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const uh = ov("dragHorizontal"),
  ch = ov("dragVertical");
function iv(e) {
  let t = !1;
  if (e === "y") t = ch();
  else if (e === "x") t = uh();
  else {
    const n = uh(),
      r = ch();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function sv() {
  const e = iv(!0);
  return e ? (e(), !1) : !0;
}
class Vn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
const me = (e) => e;
function u2(e) {
  let t = [],
    n = [],
    r = 0,
    o = !1,
    i = !1;
  const s = new WeakSet(),
    a = {
      schedule: (l, u = !1, c = !1) => {
        const f = c && o,
          d = f ? t : n;
        return (
          u && s.add(l),
          d.indexOf(l) === -1 && (d.push(l), f && o && (r = t.length)),
          l
        );
      },
      cancel: (l) => {
        const u = n.indexOf(l);
        u !== -1 && n.splice(u, 1), s.delete(l);
      },
      process: (l) => {
        if (o) {
          i = !0;
          return;
        }
        if (((o = !0), ([t, n] = [n, t]), (n.length = 0), (r = t.length), r))
          for (let u = 0; u < r; u++) {
            const c = t[u];
            c(l), s.has(c) && (a.schedule(c), e());
          }
        (o = !1), i && ((i = !1), a.process(l));
      },
    };
  return a;
}
const os = ["prepare", "read", "update", "preRender", "render", "postRender"],
  c2 = 40;
function f2(e, t) {
  let n = !1,
    r = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = os.reduce((f, d) => ((f[d] = u2(() => (n = !0))), f), {}),
    s = (f) => i[f].process(o),
    a = (f) => {
      (n = !1),
        (o.delta = r ? 1e3 / 60 : Math.max(Math.min(f - o.timestamp, c2), 1)),
        (o.timestamp = f),
        (o.isProcessing = !0),
        os.forEach(s),
        (o.isProcessing = !1),
        n && t && ((r = !1), e(a));
    },
    l = () => {
      (n = !0), (r = !0), o.isProcessing || e(a);
    };
  return {
    schedule: os.reduce((f, d) => {
      const m = i[d];
      return (f[d] = (h, g = !1, w = !1) => (n || l(), m.schedule(h, g, w))), f;
    }, {}),
    cancel: (f) => os.forEach((d) => i[d].cancel(f)),
    state: o,
    steps: i,
  };
}
const {
  schedule: ae,
  cancel: tn,
  state: De,
  steps: nu,
} = f2(typeof requestAnimationFrame < "u" ? requestAnimationFrame : me, !0);
function fh(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    o = (i, s) => {
      if (i.type === "touch" || sv()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t),
        a[r] && ae.update(() => a[r](i, s));
    };
  return Kt(e.current, n, o, { passive: !e.getProps()[r] });
}
class d2 extends Vn {
  mount() {
    this.unmount = Rn(fh(this.node, !0), fh(this.node, !1));
  }
  unmount() {}
}
class p2 extends Vn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Rn(
      Wt(this.node.current, "focus", () => this.onFocus()),
      Wt(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
const av = (e, t) => (t ? (e === t ? !0 : av(e, t.parentElement)) : !1);
function ru(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, dl(n));
}
class h2 extends Vn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = me),
      (this.removeEndListeners = me),
      (this.removeAccessibleListeners = me),
      (this.startPointerPress = (t, n) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const r = this.node.getProps(),
          i = Kt(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              ae.update(() => {
                av(this.node.current, a.target) ? u && u(a, l) : c && c(a, l);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) },
          ),
          s = Kt(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = Rn(i, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== "Enter" || this.isPressing) return;
            const s = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                ru("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && ae.update(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Wt(this.node.current, "keyup", s)),
              ru("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = Wt(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && ru("cancel", (i, s) => this.cancelPress(i, s));
          },
          o = Wt(this.node.current, "blur", r);
        this.removeAccessibleListeners = Rn(n, o);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && ae.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !sv()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && ae.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = Kt(this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      r = Wt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Rn(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const wc = new WeakMap(),
  ou = new WeakMap(),
  m2 = (e) => {
    const t = wc.get(e.target);
    t && t(e);
  },
  g2 = (e) => {
    e.forEach(m2);
  };
function y2({ root: e, ...t }) {
  const n = e || document;
  ou.has(n) || ou.set(n, {});
  const r = ou.get(n),
    o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(g2, { root: e, ...t })), r[o];
}
function v2(e, t, n) {
  const r = y2(t);
  return (
    wc.set(e, n),
    r.observe(e),
    () => {
      wc.delete(e), r.unobserve(e);
    }
  );
}
const x2 = { some: 0, all: 1 };
class w2 extends Vn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: o = "some", once: i } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof o == "number" ? o : x2[o],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(l);
      };
    return v2(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(S2(t, n)) && this.startObserver();
  }
  unmount() {}
}
function S2({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const C2 = {
  inView: { Feature: w2 },
  tap: { Feature: h2 },
  focus: { Feature: p2 },
  hover: { Feature: d2 },
};
function lv(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function E2(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function P2(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function pl(e, t, n) {
  const r = e.getProps();
  return nd(r, t, n !== void 0 ? n : r.custom, E2(e), P2(e));
}
const k2 = "framerAppearId",
  b2 = "data-" + ed(k2);
let T2 = me,
  rd = me;
const An = (e) => e * 1e3,
  Qt = (e) => e / 1e3,
  R2 = { current: !1 },
  uv = (e) => Array.isArray(e) && typeof e[0] == "number";
function cv(e) {
  return !!(
    !e ||
    (typeof e == "string" && fv[e]) ||
    uv(e) ||
    (Array.isArray(e) && e.every(cv))
  );
}
const Lo = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  fv = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Lo([0, 0.65, 0.55, 1]),
    circOut: Lo([0.55, 0, 1, 0.45]),
    backIn: Lo([0.31, 0.01, 0.66, -0.59]),
    backOut: Lo([0.33, 1.53, 0.69, 0.99]),
  };
function dv(e) {
  if (e) return uv(e) ? Lo(e) : Array.isArray(e) ? e.map(dv) : fv[e];
}
function A2(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: o,
    repeat: i = 0,
    repeatType: s = "loop",
    ease: a,
    times: l,
  } = {},
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = dv(a);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: o,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: i + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
function O2(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const pv = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  L2 = 1e-7,
  M2 = 12;
function N2(e, t, n, r, o) {
  let i,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (i = pv(s, r, o) - e), i > 0 ? (n = s) : (t = s);
  while (Math.abs(i) > L2 && ++a < M2);
  return s;
}
function _i(e, t, n, r) {
  if (e === t && n === r) return me;
  const o = (i) => N2(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : pv(o(i), t, r));
}
const _2 = _i(0.42, 0, 1, 1),
  j2 = _i(0, 0, 0.58, 1),
  hv = _i(0.42, 0, 0.58, 1),
  D2 = (e) => Array.isArray(e) && typeof e[0] != "number",
  mv = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  gv = (e) => (t) => 1 - e(1 - t),
  yv = (e) => 1 - Math.sin(Math.acos(e)),
  od = gv(yv),
  I2 = mv(od),
  vv = _i(0.33, 1.53, 0.69, 0.99),
  id = gv(vv),
  $2 = mv(id),
  V2 = (e) =>
    (e *= 2) < 1 ? 0.5 * id(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  F2 = {
    linear: me,
    easeIn: _2,
    easeInOut: hv,
    easeOut: j2,
    circIn: yv,
    circInOut: I2,
    circOut: od,
    backIn: id,
    backInOut: $2,
    backOut: vv,
    anticipate: V2,
  },
  dh = (e) => {
    if (Array.isArray(e)) {
      rd(e.length === 4);
      const [t, n, r, o] = e;
      return _i(t, n, r, o);
    } else if (typeof e == "string") return F2[e];
    return e;
  },
  sd = (e, t) => (n) =>
    !!(
      (Mi(n) && $P.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  xv = (e, t, n) => (r) => {
    if (!Mi(r)) return r;
    const [o, i, s, a] = r.match(fl);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  z2 = (e) => Nn(0, 255, e),
  iu = { ...lr, transform: (e) => Math.round(z2(e)) },
  Xn = {
    test: sd("rgb", "red"),
    parse: xv("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      iu.transform(e) +
      ", " +
      iu.transform(t) +
      ", " +
      iu.transform(n) +
      ", " +
      Uo(Bo.transform(r)) +
      ")",
  };
function B2(e) {
  let t = "",
    n = "",
    r = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const Sc = { test: sd("#"), parse: B2, transform: Xn.transform },
  Mr = {
    test: sd("hsl", "hue"),
    parse: xv("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      It.transform(Uo(t)) +
      ", " +
      It.transform(Uo(n)) +
      ", " +
      Uo(Bo.transform(r)) +
      ")",
  },
  Ve = {
    test: (e) => Xn.test(e) || Sc.test(e) || Mr.test(e),
    parse: (e) =>
      Xn.test(e) ? Xn.parse(e) : Mr.test(e) ? Mr.parse(e) : Sc.parse(e),
    transform: (e) =>
      Mi(e) ? e : e.hasOwnProperty("red") ? Xn.transform(e) : Mr.transform(e),
  },
  se = (e, t, n) => -n * e + n * t + e;
function su(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function U2({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let o = 0,
    i = 0,
    s = 0;
  if (!t) o = i = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (o = su(l, a, e + 1 / 3)), (i = su(l, a, e)), (s = su(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
const au = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  W2 = [Sc, Xn, Mr],
  H2 = (e) => W2.find((t) => t.test(e));
function ph(e) {
  const t = H2(e);
  let n = t.parse(e);
  return t === Mr && (n = U2(n)), n;
}
const wv = (e, t) => {
  const n = ph(e),
    r = ph(t),
    o = { ...n };
  return (i) => (
    (o.red = au(n.red, r.red, i)),
    (o.green = au(n.green, r.green, i)),
    (o.blue = au(n.blue, r.blue, i)),
    (o.alpha = se(n.alpha, r.alpha, i)),
    Xn.transform(o)
  );
};
function G2(e) {
  var t, n;
  return (
    isNaN(e) &&
    Mi(e) &&
    (((t = e.match(fl)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(K0)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Sv = { regex: DP, countKey: "Vars", token: "${v}", parse: me },
  Cv = { regex: K0, countKey: "Colors", token: "${c}", parse: Ve.parse },
  Ev = { regex: fl, countKey: "Numbers", token: "${n}", parse: lr.parse };
function lu(e, { regex: t, countKey: n, token: r, parse: o }) {
  const i = e.tokenised.match(t);
  i &&
    ((e["num" + n] = i.length),
    (e.tokenised = e.tokenised.replace(t, r)),
    e.values.push(...i.map(o)));
}
function la(e) {
  const t = e.toString(),
    n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return n.value.includes("var(--") && lu(n, Sv), lu(n, Cv), lu(n, Ev), n;
}
function Pv(e) {
  return la(e).values;
}
function kv(e) {
  const { values: t, numColors: n, numVars: r, tokenised: o } = la(e),
    i = t.length;
  return (s) => {
    let a = o;
    for (let l = 0; l < i; l++)
      l < r
        ? (a = a.replace(Sv.token, s[l]))
        : l < r + n
        ? (a = a.replace(Cv.token, Ve.transform(s[l])))
        : (a = a.replace(Ev.token, Uo(s[l])));
    return a;
  };
}
const K2 = (e) => (typeof e == "number" ? 0 : e);
function Q2(e) {
  const t = Pv(e);
  return kv(e)(t.map(K2));
}
const _n = {
    test: G2,
    parse: Pv,
    createTransformer: kv,
    getAnimatableNone: Q2,
  },
  bv = (e, t) => (n) => `${n > 0 ? t : e}`;
function Tv(e, t) {
  return typeof e == "number"
    ? (n) => se(e, t, n)
    : Ve.test(e)
    ? wv(e, t)
    : e.startsWith("var(")
    ? bv(e, t)
    : Av(e, t);
}
const Rv = (e, t) => {
    const n = [...e],
      r = n.length,
      o = e.map((i, s) => Tv(i, t[s]));
    return (i) => {
      for (let s = 0; s < r; s++) n[s] = o[s](i);
      return n;
    };
  },
  Y2 = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const o in n)
      e[o] !== void 0 && t[o] !== void 0 && (r[o] = Tv(e[o], t[o]));
    return (o) => {
      for (const i in r) n[i] = r[i](o);
      return n;
    };
  },
  Av = (e, t) => {
    const n = _n.createTransformer(t),
      r = la(e),
      o = la(t);
    return r.numVars === o.numVars &&
      r.numColors === o.numColors &&
      r.numNumbers >= o.numNumbers
      ? Rn(Rv(r.values, o.values), n)
      : bv(e, t);
  },
  gi = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  hh = (e, t) => (n) => se(e, t, n);
function X2(e) {
  return typeof e == "number"
    ? hh
    : typeof e == "string"
    ? Ve.test(e)
      ? wv
      : Av
    : Array.isArray(e)
    ? Rv
    : typeof e == "object"
    ? Y2
    : hh;
}
function q2(e, t, n) {
  const r = [],
    o = n || X2(e[0]),
    i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || me : t;
      a = Rn(l, a);
    }
    r.push(a);
  }
  return r;
}
function Ov(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if ((rd(i === t.length), i === 1)) return () => t[0];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = q2(t, r, o),
    a = s.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = gi(e[c], e[c + 1], u);
      return s[c](f);
    };
  return n ? (u) => l(Nn(e[0], e[i - 1], u)) : l;
}
function J2(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = gi(0, t, r);
    e.push(se(n, 1, o));
  }
}
function Z2(e) {
  const t = [0];
  return J2(t, e.length - 1), t;
}
function ek(e, t) {
  return e.map((n) => n * t);
}
function tk(e, t) {
  return e.map(() => t || hv).splice(0, e.length - 1);
}
function ua({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const o = D2(r) ? r.map(dh) : dh(r),
    i = { done: !1, value: t[0] },
    s = ek(n && n.length === t.length ? n : Z2(t), e),
    a = Ov(s, t, { ease: Array.isArray(o) ? o : tk(t, o) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = a(l)), (i.done = l >= e), i),
  };
}
function Lv(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const nk = 5;
function Mv(e, t, n) {
  const r = Math.max(t - nk, 0);
  return Lv(n - e(r), t - r);
}
const uu = 0.001,
  rk = 0.01,
  mh = 10,
  ok = 0.05,
  ik = 1;
function sk({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let o, i;
  T2(e <= An(mh));
  let s = 1 - t;
  (s = Nn(ok, ik, s)),
    (e = Nn(rk, mh, Qt(e))),
    s < 1
      ? ((o = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            m = Cc(u, s),
            h = Math.exp(-f);
          return uu - (d / m) * h;
        }),
        (i = (u) => {
          const f = u * s * e,
            d = f * n + n,
            m = Math.pow(s, 2) * Math.pow(u, 2) * e,
            h = Math.exp(-f),
            g = Cc(Math.pow(u, 2), s);
          return ((-o(u) + uu > 0 ? -1 : 1) * ((d - m) * h)) / g;
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -uu + c * f;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const a = 5 / e,
    l = lk(o, i, a);
  if (((e = An(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const ak = 12;
function lk(e, t, n) {
  let r = n;
  for (let o = 1; o < ak; o++) r = r - e(r) / t(r);
  return r;
}
function Cc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const uk = ["duration", "bounce"],
  ck = ["stiffness", "damping", "mass"];
function gh(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function fk(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!gh(e, ck) && gh(e, uk)) {
    const n = sk(e);
    (t = { ...t, ...n, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Nv({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0],
    i = e[e.length - 1],
    s = { done: !1, value: o },
    {
      stiffness: a,
      damping: l,
      mass: u,
      velocity: c,
      duration: f,
      isResolvedFromDuration: d,
    } = fk(r),
    m = c ? -Qt(c) : 0,
    h = l / (2 * Math.sqrt(a * u)),
    g = i - o,
    w = Qt(Math.sqrt(a / u)),
    y = Math.abs(g) < 5;
  n || (n = y ? 0.01 : 2), t || (t = y ? 0.005 : 0.5);
  let p;
  if (h < 1) {
    const v = Cc(w, h);
    p = (x) => {
      const C = Math.exp(-h * w * x);
      return (
        i - C * (((m + h * w * g) / v) * Math.sin(v * x) + g * Math.cos(v * x))
      );
    };
  } else if (h === 1) p = (v) => i - Math.exp(-w * v) * (g + (m + w * g) * v);
  else {
    const v = w * Math.sqrt(h * h - 1);
    p = (x) => {
      const C = Math.exp(-h * w * x),
        b = Math.min(v * x, 300);
      return (
        i - (C * ((m + h * w * g) * Math.sinh(b) + v * g * Math.cosh(b))) / v
      );
    };
  }
  return {
    calculatedDuration: (d && f) || null,
    next: (v) => {
      const x = p(v);
      if (d) s.done = v >= f;
      else {
        let C = m;
        v !== 0 && (h < 1 ? (C = Mv(p, v, x)) : (C = 0));
        const b = Math.abs(C) <= n,
          E = Math.abs(i - x) <= t;
        s.done = b && E;
      }
      return (s.value = s.done ? i : x), s;
    },
  };
}
function yh({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    m = (k) => (a !== void 0 && k < a) || (l !== void 0 && k > l),
    h = (k) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - k) < Math.abs(l - k)
        ? a
        : l;
  let g = n * t;
  const w = f + g,
    y = s === void 0 ? w : s(w);
  y !== w && (g = y - f);
  const p = (k) => -g * Math.exp(-k / r),
    v = (k) => y + p(k),
    x = (k) => {
      const M = p(k),
        A = v(k);
      (d.done = Math.abs(M) <= u), (d.value = d.done ? y : A);
    };
  let C, b;
  const E = (k) => {
    m(d.value) &&
      ((C = k),
      (b = Nv({
        keyframes: [d.value, h(d.value)],
        velocity: Mv(v, k, d.value),
        damping: o,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    E(0),
    {
      calculatedDuration: null,
      next: (k) => {
        let M = !1;
        return (
          !b && C === void 0 && ((M = !0), x(k), E(k)),
          C !== void 0 && k > C ? b.next(k - C) : (!M && x(k), d)
        );
      },
    }
  );
}
const dk = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => ae.update(t, !0),
      stop: () => tn(t),
      now: () => (De.isProcessing ? De.timestamp : performance.now()),
    };
  },
  vh = 2e4;
function xh(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < vh; ) (t += n), (r = e.next(t));
  return t >= vh ? 1 / 0 : t;
}
const pk = { decay: yh, inertia: yh, tween: ua, keyframes: ua, spring: Nv };
function ca({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = dk,
  keyframes: r,
  type: o = "keyframes",
  repeat: i = 0,
  repeatDelay: s = 0,
  repeatType: a = "loop",
  onPlay: l,
  onStop: u,
  onComplete: c,
  onUpdate: f,
  ...d
}) {
  let m = 1,
    h = !1,
    g,
    w;
  const y = () => {
    w = new Promise((N) => {
      g = N;
    });
  };
  y();
  let p;
  const v = pk[o] || ua;
  let x;
  v !== ua &&
    typeof r[0] != "number" &&
    ((x = Ov([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const C = v({ ...d, keyframes: r });
  let b;
  a === "mirror" &&
    (b = v({
      ...d,
      keyframes: [...r].reverse(),
      velocity: -(d.velocity || 0),
    }));
  let E = "idle",
    k = null,
    M = null,
    A = null;
  C.calculatedDuration === null && i && (C.calculatedDuration = xh(C));
  const { calculatedDuration: z } = C;
  let I = 1 / 0,
    ge = 1 / 0;
  z !== null && ((I = z + s), (ge = I * (i + 1) - s));
  let X = 0;
  const q = (N) => {
      if (M === null) return;
      m > 0 && (M = Math.min(M, N)),
        m < 0 && (M = Math.min(N - ge / m, M)),
        k !== null ? (X = k) : (X = Math.round(N - M) * m);
      const K = X - t * (m >= 0 ? 1 : -1),
        pe = m >= 0 ? K < 0 : K > ge;
      (X = Math.max(K, 0)), E === "finished" && k === null && (X = ge);
      let bt = X,
        cr = C;
      if (i) {
        const El = X / I;
        let Vi = Math.floor(El),
          zn = El % 1;
        !zn && El >= 1 && (zn = 1),
          zn === 1 && Vi--,
          (Vi = Math.min(Vi, i + 1));
        const Pd = !!(Vi % 2);
        Pd &&
          (a === "reverse"
            ? ((zn = 1 - zn), s && (zn -= s / I))
            : a === "mirror" && (cr = b));
        let kd = Nn(0, 1, zn);
        X > ge && (kd = a === "reverse" && Pd ? 1 : 0), (bt = kd * I);
      }
      const Je = pe ? { done: !1, value: r[0] } : cr.next(bt);
      x && (Je.value = x(Je.value));
      let { done: Fn } = Je;
      !pe && z !== null && (Fn = m >= 0 ? X >= ge : X <= 0);
      const z1 = k === null && (E === "finished" || (E === "running" && Fn));
      return f && f(Je.value), z1 && O(), Je;
    },
    Te = () => {
      p && p.stop(), (p = void 0);
    },
    qe = () => {
      (E = "idle"), Te(), g(), y(), (M = A = null);
    },
    O = () => {
      (E = "finished"), c && c(), Te(), g();
    },
    _ = () => {
      if (h) return;
      p || (p = n(q));
      const N = p.now();
      l && l(),
        k !== null ? (M = N - k) : (!M || E === "finished") && (M = N),
        E === "finished" && y(),
        (A = M),
        (k = null),
        (E = "running"),
        p.start();
    };
  e && _();
  const D = {
    then(N, K) {
      return w.then(N, K);
    },
    get time() {
      return Qt(X);
    },
    set time(N) {
      (N = An(N)),
        (X = N),
        k !== null || !p || m === 0 ? (k = N) : (M = p.now() - N / m);
    },
    get duration() {
      const N = C.calculatedDuration === null ? xh(C) : C.calculatedDuration;
      return Qt(N);
    },
    get speed() {
      return m;
    },
    set speed(N) {
      N === m || !p || ((m = N), (D.time = Qt(X)));
    },
    get state() {
      return E;
    },
    play: _,
    pause: () => {
      (E = "paused"), (k = X);
    },
    stop: () => {
      (h = !0), E !== "idle" && ((E = "idle"), u && u(), qe());
    },
    cancel: () => {
      A !== null && q(A), qe();
    },
    complete: () => {
      E = "finished";
    },
    sample: (N) => ((M = 0), q(N)),
  };
  return D;
}
function hk(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const mk = hk(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  gk = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  is = 10,
  yk = 2e4,
  vk = (e, t) => t.type === "spring" || e === "backgroundColor" || !cv(t.ease);
function xk(e, t, { onUpdate: n, onComplete: r, ...o }) {
  if (
    !(
      mk() &&
      gk.has(t) &&
      !o.repeatDelay &&
      o.repeatType !== "mirror" &&
      o.damping !== 0 &&
      o.type !== "inertia"
    )
  )
    return !1;
  let s = !1,
    a,
    l;
  const u = () => {
    l = new Promise((y) => {
      a = y;
    });
  };
  u();
  let { keyframes: c, duration: f = 300, ease: d, times: m } = o;
  if (vk(t, o)) {
    const y = ca({ ...o, repeat: 0, delay: 0 });
    let p = { done: !1, value: c[0] };
    const v = [];
    let x = 0;
    for (; !p.done && x < yk; ) (p = y.sample(x)), v.push(p.value), (x += is);
    (m = void 0), (c = v), (f = x - is), (d = "linear");
  }
  const h = A2(e.owner.current, t, c, { ...o, duration: f, ease: d, times: m }),
    g = () => h.cancel(),
    w = () => {
      ae.update(g), a(), u();
    };
  return (
    (h.onfinish = () => {
      e.set(O2(c, o)), r && r(), w();
    }),
    {
      then(y, p) {
        return l.then(y, p);
      },
      get timeline() {
        return h.timeline;
      },
      set timeline(y) {
        (h.timeline = y), (h.onfinish = null);
      },
      get time() {
        return Qt(h.currentTime || 0);
      },
      set time(y) {
        h.currentTime = An(y);
      },
      get speed() {
        return h.playbackRate;
      },
      set speed(y) {
        h.playbackRate = y;
      },
      get duration() {
        return Qt(f);
      },
      play: () => {
        s || (h.play(), tn(g));
      },
      pause: () => h.pause(),
      stop: () => {
        if (((s = !0), h.playState === "idle")) return;
        const { currentTime: y } = h;
        if (y) {
          const p = ca({ ...o, autoplay: !1 });
          e.setWithVelocity(p.sample(y - is).value, p.sample(y).value, is);
        }
        w();
      },
      complete: () => h.finish(),
      cancel: w,
    }
  );
}
function wk({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const o = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: me,
      pause: me,
      stop: me,
      then: (i) => (i(), Promise.resolve()),
      cancel: me,
      complete: me,
    }
  );
  return t
    ? ca({ keyframes: [0, 1], duration: 0, delay: t, onComplete: o })
    : o();
}
const Sk = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Ck = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Ek = { type: "keyframes", duration: 0.8 },
  Pk = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  kk = (e, { keyframes: t }) =>
    t.length > 2
      ? Ek
      : ar.has(e)
      ? e.startsWith("scale")
        ? Ck(t[1])
        : Sk
      : Pk,
  Ec = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (_n.test(t) || t === "0") &&
            !t.startsWith("url("))
        ),
  bk = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Tk(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(fl) || [];
  if (!r) return e;
  const o = n.replace(r, "");
  let i = bk.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const Rk = /([a-z-]*)\(.*?\)/g,
  Pc = {
    ..._n,
    getAnimatableNone: (e) => {
      const t = e.match(Rk);
      return t ? t.map(Tk).join(" ") : e;
    },
  },
  Ak = {
    ...Q0,
    color: Ve,
    backgroundColor: Ve,
    outlineColor: Ve,
    fill: Ve,
    stroke: Ve,
    borderColor: Ve,
    borderTopColor: Ve,
    borderRightColor: Ve,
    borderBottomColor: Ve,
    borderLeftColor: Ve,
    filter: Pc,
    WebkitFilter: Pc,
  },
  ad = (e) => Ak[e];
function _v(e, t) {
  let n = ad(e);
  return (
    n !== Pc && (n = _n), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const jv = (e) => /^0[^.\s]+$/.test(e);
function Ok(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || jv(e);
}
function Lk(e, t, n, r) {
  const o = Ec(t, n);
  let i;
  Array.isArray(n) ? (i = [...n]) : (i = [null, n]);
  const s = r.from !== void 0 ? r.from : e.get();
  let a;
  const l = [];
  for (let u = 0; u < i.length; u++)
    i[u] === null && (i[u] = u === 0 ? s : i[u - 1]),
      Ok(i[u]) && l.push(u),
      typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (a = i[u]);
  if (o && l.length && a)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      i[c] = _v(t, a);
    }
  return i;
}
function Mk({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: o,
  repeat: i,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function Dv(e, t) {
  return e[t] || e.default || e;
}
const ld =
  (e, t, n, r = {}) =>
  (o) => {
    const i = Dv(r, e) || {},
      s = i.delay || r.delay || 0;
    let { elapsed: a = 0 } = r;
    a = a - An(s);
    const l = Lk(t, e, n, i),
      u = l[0],
      c = l[l.length - 1],
      f = Ec(e, u),
      d = Ec(e, c);
    let m = {
      keyframes: l,
      velocity: t.getVelocity(),
      ease: "easeOut",
      ...i,
      delay: -a,
      onUpdate: (h) => {
        t.set(h), i.onUpdate && i.onUpdate(h);
      },
      onComplete: () => {
        o(), i.onComplete && i.onComplete();
      },
    };
    if (
      (Mk(i) || (m = { ...m, ...kk(e, m) }),
      m.duration && (m.duration = An(m.duration)),
      m.repeatDelay && (m.repeatDelay = An(m.repeatDelay)),
      !f || !d || R2.current || i.type === !1)
    )
      return wk(m);
    if (
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate
    ) {
      const h = xk(t, e, m);
      if (h) return h;
    }
    return ca(m);
  };
function fa(e) {
  return !!(Ye(e) && e.add);
}
const Nk = (e) => /^\-?\d*\.?\d+$/.test(e);
function ud(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function cd(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class fd {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return ud(this.subscriptions, t), () => cd(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const s = this.subscriptions[i];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const _k = (e) => !isNaN(parseFloat(e));
class jk {
  constructor(t, n = {}) {
    (this.version = "10.13.1"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, o = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: i, timestamp: s } = De;
        this.lastUpdated !== s &&
          ((this.timeDelta = i),
          (this.lastUpdated = s),
          ae.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => ae.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = _k(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new fd());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            ae.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = t), (this.timeDelta = r);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? Lv(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Jr(e, t) {
  return new jk(e, t);
}
const Iv = (e) => (t) => t.test(e),
  Dk = { test: (e) => e === "auto", parse: (e) => e },
  $v = [lr, j, It, un, FP, VP, Dk],
  wo = (e) => $v.find(Iv(e)),
  Ik = [...$v, Ve, _n],
  $k = (e) => Ik.find(Iv(e));
function Vk(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Jr(n));
}
function Fk(e, t) {
  const n = pl(e, t);
  let {
    transitionEnd: r = {},
    transition: o = {},
    ...i
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  i = { ...i, ...r };
  for (const s in i) {
    const a = t2(i[s]);
    Vk(e, s, a);
  }
}
function zk(e, t, n) {
  var r, o;
  const i = Object.keys(t).filter((a) => !e.hasValue(a)),
    s = i.length;
  if (s)
    for (let a = 0; a < s; a++) {
      const l = i[a],
        u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !==
              null && o !== void 0
              ? o
              : t[l]),
        c != null &&
          (typeof c == "string" && (Nk(c) || jv(c))
            ? (c = parseFloat(c))
            : !$k(c) && _n.test(u) && (c = _v(l, u)),
          e.addValue(l, Jr(c, { owner: e })),
          n[l] === void 0 && (n[l] = c),
          c !== null && e.setBaseTarget(l, c));
    }
}
function Bk(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function Uk(e, t, n) {
  const r = {};
  for (const o in e) {
    const i = Bk(o, t);
    if (i !== void 0) r[o] = i;
    else {
      const s = n.getValue(o);
      s && (r[o] = s.get());
    }
  }
  return r;
}
function Wk({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Vv(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let {
    transition: i = e.getDefaultTransition(),
    transitionEnd: s,
    ...a
  } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (i = r);
  const u = [],
    c = o && e.animationState && e.animationState.getState()[o];
  for (const f in a) {
    const d = e.getValue(f),
      m = a[f];
    if (!d || m === void 0 || (c && Wk(c, f))) continue;
    const h = { delay: n, elapsed: 0, ...i };
    if (window.HandoffAppearAnimations && !d.hasAnimated) {
      const w = e.getProps()[b2];
      w && (h.elapsed = window.HandoffAppearAnimations(w, f, d, ae));
    }
    d.start(ld(f, d, m, e.shouldReduceMotion && ar.has(f) ? { type: !1 } : h));
    const g = d.animation;
    fa(l) && (l.add(f), g.then(() => l.remove(f))), u.push(g);
  }
  return (
    s &&
      Promise.all(u).then(() => {
        s && Fk(e, s);
      }),
    u
  );
}
function kc(e, t, n = {}) {
  const r = pl(e, t, n.custom);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(Vv(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: f,
            } = o;
            return Hk(e, t, u + l, c, f, n);
          }
        : () => Promise.resolve(),
    { when: a } = o;
  if (a) {
    const [l, u] = a === "beforeChildren" ? [i, s] : [s, i];
    return l().then(() => u());
  } else return Promise.all([i(), s(n.delay)]);
}
function Hk(e, t, n = 0, r = 0, o = 1, i) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = o === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(Gk)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            kc(u, t, { ...i, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t),
            ),
          );
      }),
    Promise.all(s)
  );
}
function Gk(e, t) {
  return e.sortNodePosition(t);
}
function Kk(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => kc(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string") r = kc(e, t, n);
  else {
    const o = typeof t == "function" ? pl(e, t, n.custom) : t;
    r = Promise.all(Vv(e, o, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const Qk = [...Kf].reverse(),
  Yk = Kf.length;
function Xk(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => Kk(e, n, r)));
}
function qk(e) {
  let t = Xk(e);
  const n = Zk();
  let r = !0;
  const o = (l, u) => {
    const c = pl(e, u);
    if (c) {
      const { transition: f, transitionEnd: d, ...m } = c;
      l = { ...l, ...m, ...d };
    }
    return l;
  };
  function i(l) {
    t = l(e);
  }
  function s(l, u) {
    const c = e.getProps(),
      f = e.getVariantContext(!0) || {},
      d = [],
      m = new Set();
    let h = {},
      g = 1 / 0;
    for (let y = 0; y < Yk; y++) {
      const p = Qk[y],
        v = n[p],
        x = c[p] !== void 0 ? c[p] : f[p],
        C = hi(x),
        b = p === u ? v.isActive : null;
      b === !1 && (g = y);
      let E = x === f[p] && x !== c[p] && C;
      if (
        (E && r && e.manuallyAnimateOnMount && (E = !1),
        (v.protectedKeys = { ...h }),
        (!v.isActive && b === null) ||
          (!x && !v.prevProp) ||
          ul(x) ||
          typeof x == "boolean")
      )
        continue;
      const k = Jk(v.prevProp, x);
      let M = k || (p === u && v.isActive && !E && C) || (y > g && C);
      const A = Array.isArray(x) ? x : [x];
      let z = A.reduce(o, {});
      b === !1 && (z = {});
      const { prevResolvedValues: I = {} } = v,
        ge = { ...I, ...z },
        X = (q) => {
          (M = !0), m.delete(q), (v.needsAnimating[q] = !0);
        };
      for (const q in ge) {
        const Te = z[q],
          qe = I[q];
        h.hasOwnProperty(q) ||
          (Te !== qe
            ? aa(Te) && aa(qe)
              ? !lv(Te, qe) || k
                ? X(q)
                : (v.protectedKeys[q] = !0)
              : Te !== void 0
              ? X(q)
              : m.add(q)
            : Te !== void 0 && m.has(q)
            ? X(q)
            : (v.protectedKeys[q] = !0));
      }
      (v.prevProp = x),
        (v.prevResolvedValues = z),
        v.isActive && (h = { ...h, ...z }),
        r && e.blockInitialAnimation && (M = !1),
        M &&
          !E &&
          d.push(
            ...A.map((q) => ({ animation: q, options: { type: p, ...l } })),
          );
    }
    if (m.size) {
      const y = {};
      m.forEach((p) => {
        const v = e.getBaseTarget(p);
        v !== void 0 && (y[p] = v);
      }),
        d.push({ animation: y });
    }
    let w = !!d.length;
    return (
      r && c.initial === !1 && !e.manuallyAnimateOnMount && (w = !1),
      (r = !1),
      w ? t(d) : Promise.resolve()
    );
  }
  function a(l, u, c) {
    var f;
    if (n[l].isActive === u) return Promise.resolve();
    (f = e.variantChildren) === null ||
      f === void 0 ||
      f.forEach((m) => {
        var h;
        return (h = m.animationState) === null || h === void 0
          ? void 0
          : h.setActive(l, u);
      }),
      (n[l].isActive = u);
    const d = s(c, l);
    for (const m in n) n[m].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
  };
}
function Jk(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !lv(t, e) : !1;
}
function Bn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Zk() {
  return {
    animate: Bn(!0),
    whileInView: Bn(),
    whileHover: Bn(),
    whileTap: Bn(),
    whileDrag: Bn(),
    whileFocus: Bn(),
    exit: Bn(),
  };
}
class eb extends Vn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = qk(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), ul(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let tb = 0;
class nb extends Vn {
  constructor() {
    super(...arguments), (this.id = tb++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o) return;
    const i = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const rb = { animation: { Feature: eb }, exit: { Feature: nb } },
  wh = (e, t) => Math.abs(e - t);
function ob(e, t) {
  const n = wh(e.x, t.x),
    r = wh(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Fv {
  constructor(t, n, { transformPagePoint: r } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = fu(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          f = ob(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !f) return;
        const { point: d } = u,
          { timestamp: m } = De;
        this.history.push({ ...d, timestamp: m });
        const { onStart: h, onMove: g } = this.handlers;
        c ||
          (h && h(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          g && g(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, c) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = cu(c, this.transformPagePoint)),
          ae.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const { onEnd: f, onSessionEnd: d } = this.handlers,
          m = fu(
            u.type === "pointercancel"
              ? this.lastMoveEventInfo
              : cu(c, this.transformPagePoint),
            this.history,
          );
        this.startEvent && f && f(u, m), d && d(u, m);
      }),
      !rv(t))
    )
      return;
    (this.handlers = n), (this.transformPagePoint = r);
    const o = dl(t),
      i = cu(o, this.transformPagePoint),
      { point: s } = i,
      { timestamp: a } = De;
    this.history = [{ ...s, timestamp: a }];
    const { onSessionStart: l } = n;
    l && l(t, fu(i, this.history)),
      (this.removeListeners = Rn(
        Kt(window, "pointermove", this.handlePointerMove),
        Kt(window, "pointerup", this.handlePointerUp),
        Kt(window, "pointercancel", this.handlePointerUp),
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), tn(this.updatePoint);
  }
}
function cu(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Sh(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function fu({ point: e }, t) {
  return {
    point: e,
    delta: Sh(e, zv(t)),
    offset: Sh(e, ib(t)),
    velocity: sb(t, 0.1),
  };
}
function ib(e) {
  return e[0];
}
function zv(e) {
  return e[e.length - 1];
}
function sb(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const o = zv(e);
  for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > An(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = Qt(o.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const s = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function it(e) {
  return e.max - e.min;
}
function bc(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Ch(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = se(t.min, t.max, e.origin)),
    (e.scale = it(n) / it(t)),
    (bc(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = se(n.min, n.max, e.origin) - e.originPoint),
    (bc(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Wo(e, t, n, r) {
  Ch(e.x, t.x, n.x, r ? r.originX : void 0),
    Ch(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Eh(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + it(t));
}
function ab(e, t, n) {
  Eh(e.x, t.x, n.x), Eh(e.y, t.y, n.y);
}
function Ph(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + it(t));
}
function Ho(e, t, n) {
  Ph(e.x, t.x, n.x), Ph(e.y, t.y, n.y);
}
function lb(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? se(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? se(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function kh(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function ub(e, { top: t, left: n, bottom: r, right: o }) {
  return { x: kh(e.x, n, o), y: kh(e.y, t, r) };
}
function bh(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function cb(e, t) {
  return { x: bh(e.x, t.x), y: bh(e.y, t.y) };
}
function fb(e, t) {
  let n = 0.5;
  const r = it(e),
    o = it(t);
  return (
    o > r
      ? (n = gi(t.min, t.max - r, e.min))
      : r > o && (n = gi(e.min, e.max - o, t.min)),
    Nn(0, 1, n)
  );
}
function db(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Tc = 0.35;
function pb(e = Tc) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Tc),
    { x: Th(e, "left", "right"), y: Th(e, "top", "bottom") }
  );
}
function Th(e, t, n) {
  return { min: Rh(e, t), max: Rh(e, n) };
}
function Rh(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Ah = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Nr = () => ({ x: Ah(), y: Ah() }),
  Oh = () => ({ min: 0, max: 0 }),
  ye = () => ({ x: Oh(), y: Oh() });
function At(e) {
  return [e("x"), e("y")];
}
function Bv({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function hb({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function mb(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function du(e) {
  return e === void 0 || e === 1;
}
function Rc({ scale: e, scaleX: t, scaleY: n }) {
  return !du(e) || !du(t) || !du(n);
}
function Hn(e) {
  return Rc(e) || Uv(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Uv(e) {
  return Lh(e.x) || Lh(e.y);
}
function Lh(e) {
  return e && e !== "0%";
}
function da(e, t, n) {
  const r = e - n,
    o = t * r;
  return n + o;
}
function Mh(e, t, n, r, o) {
  return o !== void 0 && (e = da(e, o, r)), da(e, n, r) + t;
}
function Ac(e, t = 0, n = 1, r, o) {
  (e.min = Mh(e.min, t, n, r, o)), (e.max = Mh(e.max, t, n, r, o));
}
function Wv(e, { x: t, y: n }) {
  Ac(e.x, t.translate, t.scale, t.originPoint),
    Ac(e.y, n.translate, n.scale, n.originPoint);
}
function gb(e, t, n, r = !1) {
  const o = n.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, s;
  for (let a = 0; a < o; a++) {
    (i = n[a]), (s = i.projectionDelta);
    const l = i.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        _r(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), Wv(e, s)),
      r && Hn(i.latestValues) && _r(e, i.latestValues));
  }
  (t.x = Nh(t.x)), (t.y = Nh(t.y));
}
function Nh(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function dn(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function _h(e, t, [n, r, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5,
    s = se(e.min, e.max, i);
  Ac(e, t[n], t[r], s, t.scale);
}
const yb = ["x", "scaleX", "originX"],
  vb = ["y", "scaleY", "originY"];
function _r(e, t) {
  _h(e.x, t, yb), _h(e.y, t, vb);
}
function Hv(e, t) {
  return Bv(mb(e.getBoundingClientRect(), t));
}
function xb(e, t, n) {
  const r = Hv(e, n),
    { scroll: o } = t;
  return o && (dn(r.x, o.offset.x), dn(r.y, o.offset.y)), r;
}
const wb = new WeakMap();
class Sb {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ye()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const o = (l) => {
        this.stopAnimation(), n && this.snapToCursor(dl(l, "page").point);
      },
      i = (l, u) => {
        const { drag: c, dragPropagation: f, onDragStart: d } = this.getProps();
        if (
          c &&
          !f &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = iv(c)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          At((h) => {
            let g = this.getAxisMotionValue(h).get() || 0;
            if (It.test(g)) {
              const { projection: w } = this.visualElement;
              if (w && w.layout) {
                const y = w.layout.layoutBox[h];
                y && (g = it(y) * (parseFloat(g) / 100));
              }
            }
            this.originPoint[h] = g;
          }),
          d && ae.update(() => d(l, u), !1, !0);
        const { animationState: m } = this.visualElement;
        m && m.setActive("whileDrag", !0);
      },
      s = (l, u) => {
        const {
          dragPropagation: c,
          dragDirectionLock: f,
          onDirectionLock: d,
          onDrag: m,
        } = this.getProps();
        if (!c && !this.openGlobalLock) return;
        const { offset: h } = u;
        if (f && this.currentDirection === null) {
          (this.currentDirection = Cb(h)),
            this.currentDirection !== null && d && d(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, h),
          this.updateAxis("y", u.point, h),
          this.visualElement.render(),
          m && m(l, u);
      },
      a = (l, u) => this.stop(l, u);
    this.panSession = new Fv(
      t,
      { onSessionStart: o, onStart: i, onMove: s, onSessionEnd: a },
      { transformPagePoint: this.visualElement.getTransformPagePoint() },
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && ae.update(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !ss(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = lb(s, this.constraints[t], this.elastic[t])),
      i.set(s);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      { layout: r } = this.visualElement.projection || {},
      o = this.constraints;
    t && Lr(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
      ? (this.constraints = ub(r.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = pb(n)),
      o !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        At((i) => {
          this.getAxisMotionValue(i) &&
            (this.constraints[i] = db(r.layoutBox[i], this.constraints[i]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Lr(t)) return !1;
    const r = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = xb(r, o.root, this.visualElement.getTransformPagePoint());
    let s = cb(o.layout.layoutBox, i);
    if (n) {
      const a = n(hb(s));
      (this.hasMutatedConstraints = !!a), a && (s = Bv(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = At((c) => {
        if (!ss(c, n, this.currentDirection)) return;
        let f = (l && l[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = o ? 200 : 1e6,
          m = o ? 40 : 1e7,
          h = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: m,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...f,
          };
        return this.startAxisValueAnimation(c, h);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(ld(t, r, 0, n));
  }
  stopAnimation() {
    At((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      o = r[n];
    return (
      o ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    At((n) => {
      const { drag: r } = this.getProps();
      if (!ss(n, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: s, max: a } = o.layout.layoutBox[n];
        i.set(t[n] - se(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Lr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    At((s) => {
      const a = this.getAxisMotionValue(s);
      if (a) {
        const l = a.get();
        o[s] = fb({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      At((s) => {
        if (!ss(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(se(l, u, o[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    wb.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Kt(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Lr(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), r();
    const s = Wt(window, "resize", () => this.scalePositionWithinConstraints()),
      a = o.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (At((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += l[c].translate),
                f.set(f.get() + l[c].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      s(), n(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: s = Tc,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function ss(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Cb(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class Eb extends Vn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = me),
      (this.removeListeners = me),
      (this.controls = new Sb(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || me);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const jh = (e) => (t, n) => {
  e && ae.update(() => e(t, n));
};
class Pb extends Vn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = me);
  }
  onPointerDown(t) {
    this.session = new Fv(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: jh(t),
      onStart: jh(n),
      onMove: r,
      onEnd: (i, s) => {
        delete this.session, o && ae.update(() => o(i, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Kt(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function kb() {
  const e = S.useContext(Gf);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    o = S.useId();
  return S.useEffect(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
}
const bs = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Dh(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const So = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (j.test(e)) e = parseFloat(e);
        else return e;
      const n = Dh(e, t.target.x),
        r = Dh(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  bb = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        o = _n.parse(e);
      if (o.length > 5) return r;
      const i = _n.createTransformer(e),
        s = typeof o[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (o[0 + s] /= a), (o[1 + s] /= l);
      const u = se(a, l, 0.5);
      return (
        typeof o[2 + s] == "number" && (o[2 + s] /= u),
        typeof o[3 + s] == "number" && (o[3 + s] /= u),
        i(o)
      );
    },
  };
class Tb extends Ei.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: o,
      } = this.props,
      { projection: i } = t;
    MP(Rb),
      i &&
        (n.group && n.group.add(i),
        r && r.register && o && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (bs.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: o,
        isPresent: i,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = i),
        o || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? s.promote()
            : s.relegate() ||
              ae.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      queueMicrotask(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(o),
      r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Gv(e) {
  const [t, n] = kb(),
    r = S.useContext(B0);
  return Ei.createElement(Tb, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: S.useContext(U0),
    isPresent: t,
    safeToRemove: n,
  });
}
const Rb = {
    borderRadius: {
      ...So,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: So,
    borderTopRightRadius: So,
    borderBottomLeftRadius: So,
    borderBottomRightRadius: So,
    boxShadow: bb,
  },
  Kv = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Ab = Kv.length,
  Ih = (e) => (typeof e == "string" ? parseFloat(e) : e),
  $h = (e) => typeof e == "number" || j.test(e);
function Ob(e, t, n, r, o, i) {
  o
    ? ((e.opacity = se(0, n.opacity !== void 0 ? n.opacity : 1, Lb(r))),
      (e.opacityExit = se(t.opacity !== void 0 ? t.opacity : 1, 0, Mb(r))))
    : i &&
      (e.opacity = se(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r,
      ));
  for (let s = 0; s < Ab; s++) {
    const a = `border${Kv[s]}Radius`;
    let l = Vh(t, a),
      u = Vh(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || $h(l) === $h(u)
        ? ((e[a] = Math.max(se(Ih(l), Ih(u), r), 0)),
          (It.test(u) || It.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = se(t.rotate || 0, n.rotate || 0, r));
}
function Vh(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Lb = Qv(0, 0.5, od),
  Mb = Qv(0.5, 0.95, me);
function Qv(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(gi(e, t, r)));
}
function Fh(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function ut(e, t) {
  Fh(e.x, t.x), Fh(e.y, t.y);
}
function zh(e, t, n, r, o) {
  return (
    (e -= t), (e = da(e, 1 / n, r)), o !== void 0 && (e = da(e, 1 / o, r)), e
  );
}
function Nb(e, t = 0, n = 1, r = 0.5, o, i = e, s = e) {
  if (
    (It.test(t) &&
      ((t = parseFloat(t)), (t = se(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = se(i.min, i.max, r);
  e === i && (a -= t),
    (e.min = zh(e.min, t, n, a, o)),
    (e.max = zh(e.max, t, n, a, o));
}
function Bh(e, t, [n, r, o], i, s) {
  Nb(e, t[n], t[r], t[o], t.scale, i, s);
}
const _b = ["x", "scaleX", "originX"],
  jb = ["y", "scaleY", "originY"];
function Uh(e, t, n, r) {
  Bh(e.x, t, _b, n ? n.x : void 0, r ? r.x : void 0),
    Bh(e.y, t, jb, n ? n.y : void 0, r ? r.y : void 0);
}
function Wh(e) {
  return e.translate === 0 && e.scale === 1;
}
function Yv(e) {
  return Wh(e.x) && Wh(e.y);
}
function Db(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function Xv(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function Hh(e) {
  return it(e.x) / it(e.y);
}
class Ib {
  constructor() {
    this.members = [];
  }
  add(t) {
    ud(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (cd(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0) return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Gh(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y;
  if (
    ((o || i) && (r = `translate3d(${o}px, ${i}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `);
  }
  const s = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return (s !== 1 || a !== 1) && (r += `scale(${s}, ${a})`), r || "none";
}
const $b = (e, t) => e.depth - t.depth;
class Vb {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    ud(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    cd(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort($b),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function Fb(e, t) {
  const n = performance.now(),
    r = ({ timestamp: o }) => {
      const i = o - n;
      i >= t && (tn(r), e(i - t));
    };
  return ae.read(r, !0), () => tn(r);
}
function zb(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function Bb(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function Ub(e, t, n) {
  const r = Ye(e) ? e : Jr(e);
  return r.start(ld("", r, t, n)), r.animation;
}
const Kh = ["", "X", "Y", "Z"],
  Qh = 1e3;
let Wb = 0;
const Gn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function qv({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: o,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = Wb++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (Gn.totalNodes =
            Gn.resolvedTargetDeltas =
            Gn.recalculatedProjection =
              0),
            this.nodes.forEach(Kb),
            this.nodes.forEach(Jb),
            this.nodes.forEach(Zb),
            this.nodes.forEach(Qb),
            zb(Gn);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Vb());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new fd()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = Bb(s)), (this.instance = s);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = Fb(d, 250)),
            bs.hasAnimatedSinceResize &&
              ((bs.hasAnimatedSinceResize = !1), this.nodes.forEach(Xh));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: m,
              layout: h,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const g =
                  this.options.transition || c.getDefaultTransition() || oT,
                { onLayoutAnimationStart: w, onLayoutAnimationComplete: y } =
                  c.getProps(),
                p = !this.targetLayout || !Xv(this.targetLayout, h) || m,
                v = !d && m;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                v ||
                (d && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, v);
                const x = { ...Dv(g, "layout"), onPlay: w, onComplete: y };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((x.delay = 0), (x.type = !1)),
                  this.startAnimation(x);
              } else
                d || Xh(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = h;
            },
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        tn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(eT),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Yh);
        return;
      }
      this.isUpdating || this.nodes.forEach(Xb),
        (this.isUpdating = !1),
        this.nodes.forEach(qb),
        this.nodes.forEach(Hb),
        this.nodes.forEach(Gb),
        this.clearAllSnapshots();
      const a = performance.now();
      (De.delta = Nn(0, 1e3 / 60, a - De.timestamp)),
        (De.timestamp = a),
        (De.isProcessing = !0),
        nu.update.process(De),
        nu.preRender.process(De),
        nu.render.process(De),
        (De.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Yb), this.sharedNodes.forEach(tT);
    }
    scheduleUpdateProjection() {
      ae.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      ae.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = ye()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0,
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!o) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !Yv(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (a || Hn(this.latestValues) || c) &&
        (o(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        iT(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return ye();
      const a = s.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (dn(a.x, l.offset.x), dn(a.y, l.offset.y)), a;
    }
    removeElementScroll(s) {
      const a = ye();
      ut(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: f } = u;
        if (u !== this.root && c && f.layoutScroll) {
          if (c.isRoot) {
            ut(a, s);
            const { scroll: d } = this.root;
            d && (dn(a.x, -d.offset.x), dn(a.y, -d.offset.y));
          }
          dn(a.x, c.offset.x), dn(a.y, c.offset.y);
        }
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const l = ye();
      ut(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          _r(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Hn(c.latestValues) && _r(l, c.latestValues);
      }
      return Hn(this.latestValues) && _r(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = ye();
      ut(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Hn(u.latestValues)) continue;
        Rc(u.latestValues) && u.updateSnapshot();
        const c = ye(),
          f = u.measurePageBox();
        ut(c, f),
          Uh(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Hn(this.latestValues) && Uh(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== De.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = De.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1
            ? ((this.relativeParent = m),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ye()),
              (this.relativeTargetOrigin = ye()),
              Ho(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                m.layout.layoutBox,
              ),
              ut(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = ye()), (this.targetWithTransforms = ye())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                ab(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : ut(this.target, this.layout.layoutBox),
                Wv(this.target, this.targetDelta))
              : ut(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const m = this.getClosestProjectingParent();
            m &&
            !!m.resumingFrom == !!this.resumingFrom &&
            !m.options.layoutScroll &&
            m.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = m),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = ye()),
                (this.relativeTargetOrigin = ye()),
                Ho(this.relativeTargetOrigin, this.target, m.target),
                ut(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Gn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Rc(this.parent.latestValues) ||
          Uv(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === De.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      ut(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        m = this.treeScale.y;
      gb(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (a.target = a.layout.layoutBox);
      const { target: h } = a;
      if (!h) {
        this.projectionTransform &&
          ((this.projectionDelta = Nr()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = Nr()),
        (this.projectionDeltaWithTransform = Nr()));
      const g = this.projectionTransform;
      Wo(this.projectionDelta, this.layoutCorrected, h, this.latestValues),
        (this.projectionTransform = Gh(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== g ||
          this.treeScale.x !== d ||
          this.treeScale.y !== m) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", h)),
        Gn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        f = Nr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const d = ye(),
        m = l ? l.source : void 0,
        h = this.layout ? this.layout.source : void 0,
        g = m !== h,
        w = this.getStack(),
        y = !w || w.members.length <= 1,
        p = !!(g && !y && this.options.crossfade === !0 && !this.path.some(rT));
      this.animationProgress = 0;
      let v;
      (this.mixTargetDelta = (x) => {
        const C = x / 1e3;
        qh(f.x, s.x, C),
          qh(f.y, s.y, C),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ho(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            nT(this.relativeTarget, this.relativeTargetOrigin, d, C),
            v && Db(this.relativeTarget, v) && (this.isProjectionDirty = !1),
            v || (v = ye()),
            ut(v, this.relativeTarget)),
          g &&
            ((this.animationValues = c), Ob(c, u, this.latestValues, C, p, y)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (tn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ae.update(() => {
          (bs.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Ub(0, Qh, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Qh),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          Jv(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || ye();
          const f = it(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + f);
          const d = it(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + d);
        }
        ut(a, l),
          _r(a, c),
          Wo(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new Ib()),
        this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a))
        return;
      const u = {};
      for (let c = 0; c < Kh.length; c++) {
        const f = "rotate" + Kh[c];
        l[f] && ((u[f] = l[f]), s.setStaticValue(f, 0));
      }
      s.render();
      for (const c in u) s.setStaticValue(c, u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s = {}) {
      var a, l;
      const u = {};
      if (!this.instance || this.isSVG) return u;
      if (this.isVisible) u.visibility = "";
      else return { visibility: "hidden" };
      const c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = ks(s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const g = {};
        return (
          this.options.layoutId &&
            ((g.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (g.pointerEvents = ks(s.pointerEvents) || "")),
          this.hasProjected &&
            !Hn(this.latestValues) &&
            ((g.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          g
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Gh(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d,
        )),
        c && (u.transform = c(d, u.transform));
      const { x: m, y: h } = this.projectionDelta;
      (u.transformOrigin = `${m.origin * 100}% ${h.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (l =
                    (a = d.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (const g in ia) {
        if (d[g] === void 0) continue;
        const { correct: w, applyTo: y } = ia[g],
          p = u.transform === "none" ? d[g] : w(d[g], f);
        if (y) {
          const v = y.length;
          for (let x = 0; x < v; x++) u[y[x]] = p;
        } else u[g] = p;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = f === this ? ks(s.pointerEvents) || "" : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Yh),
        this.root.sharedNodes.clear();
    }
  };
}
function Hb(e) {
  e.updateLayout();
}
function Gb(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      s = n.source !== e.layout.source;
    i === "size"
      ? At((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            m = it(d);
          (d.min = r[f].min), (d.max = d.min + m);
        })
      : Jv(i, n.layoutBox, r) &&
        At((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            m = it(r[f]);
          (d.max = d.min + m),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + m));
        });
    const a = Nr();
    Wo(a, r, n.layoutBox);
    const l = Nr();
    s ? Wo(l, e.applyTransform(o, !0), n.measuredBox) : Wo(l, r, n.layoutBox);
    const u = !Yv(a);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: m } = f;
        if (d && m) {
          const h = ye();
          Ho(h, n.layoutBox, d.layoutBox);
          const g = ye();
          Ho(g, r, m.layoutBox),
            Xv(h, g) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = g),
              (e.relativeTargetOrigin = h),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Kb(e) {
  Gn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Qb(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Yb(e) {
  e.clearSnapshot();
}
function Yh(e) {
  e.clearMeasurements();
}
function Xb(e) {
  e.isLayoutDirty = !1;
}
function qb(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Xh(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function Jb(e) {
  e.resolveTargetDelta();
}
function Zb(e) {
  e.calcProjection();
}
function eT(e) {
  e.resetRotation();
}
function tT(e) {
  e.removeLeadSnapshot();
}
function qh(e, t, n) {
  (e.translate = se(t.translate, 0, n)),
    (e.scale = se(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Jh(e, t, n, r) {
  (e.min = se(t.min, n.min, r)), (e.max = se(t.max, n.max, r));
}
function nT(e, t, n, r) {
  Jh(e.x, t.x, n.x, r), Jh(e.y, t.y, n.y, r);
}
function rT(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const oT = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Zh = (e) =>
    typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
  em = Zh("applewebkit/") && !Zh("chrome/") ? Math.round : me;
function tm(e) {
  (e.min = em(e.min)), (e.max = em(e.max));
}
function iT(e) {
  tm(e.x), tm(e.y);
}
function Jv(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !bc(Hh(t), Hh(n), 0.2))
  );
}
const sT = qv({
    attachResizeListener: (e, t) => Wt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  pu = { current: void 0 },
  Zv = qv({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!pu.current) {
        const e = new sT({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (pu.current = e);
      }
      return pu.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  aT = {
    pan: { Feature: Pb },
    drag: { Feature: Eb, ProjectionNode: Zv, MeasureLayout: Gv },
  },
  lT = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function uT(e) {
  const t = lT.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function Oc(e, t, n = 1) {
  const [r, o] = uT(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  return i ? i.trim() : xc(o) ? Oc(o, t, n + 1) : o;
}
function cT(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((o) => {
      const i = o.get();
      if (!xc(i)) return;
      const s = Oc(i, r);
      s && o.set(s);
    });
  for (const o in t) {
    const i = t[o];
    if (!xc(i)) continue;
    const s = Oc(i, r);
    s && ((t[o] = s), n || (n = {}), n[o] === void 0 && (n[o] = i));
  }
  return { target: t, transitionEnd: n };
}
const fT = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  e1 = (e) => fT.has(e),
  dT = (e) => Object.keys(e).some(e1),
  nm = (e) => e === lr || e === j,
  rm = (e, t) => parseFloat(e.split(", ")[t]),
  om =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const o = r.match(/^matrix3d\((.+)\)$/);
      if (o) return rm(o[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/);
        return i ? rm(i[1], e) : 0;
      }
    },
  pT = new Set(["x", "y", "z"]),
  hT = Li.filter((e) => !pT.has(e));
function mT(e) {
  const t = [];
  return (
    hT.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const Zr = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: om(4, 13),
  y: om(5, 14),
};
Zr.translateX = Zr.x;
Zr.translateY = Zr.y;
const gT = (e, t, n) => {
    const r = t.measureViewportBox(),
      o = t.current,
      i = getComputedStyle(o),
      { display: s } = i,
      a = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        a[u] = Zr[u](r, i);
      }),
      t.render();
    const l = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(a[u]), (e[u] = Zr[u](l, i));
      }),
      e
    );
  },
  yT = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const o = Object.keys(t).filter(e1);
    let i = [],
      s = !1;
    const a = [];
    if (
      (o.forEach((l) => {
        const u = e.getValue(l);
        if (!e.hasValue(l)) return;
        let c = n[l],
          f = wo(c);
        const d = t[l];
        let m;
        if (aa(d)) {
          const h = d.length,
            g = d[0] === null ? 1 : 0;
          (c = d[g]), (f = wo(c));
          for (let w = g; w < h && d[w] !== null; w++)
            m ? rd(wo(d[w]) === m) : (m = wo(d[w]));
        } else m = wo(d);
        if (f !== m)
          if (nm(f) && nm(m)) {
            const h = u.get();
            typeof h == "string" && u.set(parseFloat(h)),
              typeof d == "string"
                ? (t[l] = parseFloat(d))
                : Array.isArray(d) && m === j && (t[l] = d.map(parseFloat));
          } else
            f != null &&
            f.transform &&
            m != null &&
            m.transform &&
            (c === 0 || d === 0)
              ? c === 0
                ? u.set(m.transform(c))
                : (t[l] = f.transform(d))
              : (s || ((i = mT(e)), (s = !0)),
                a.push(l),
                (r[l] = r[l] !== void 0 ? r[l] : t[l]),
                u.jump(d));
      }),
      a.length)
    ) {
      const l = a.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = gT(t, e, a);
      return (
        i.length &&
          i.forEach(([c, f]) => {
            e.getValue(c).set(f);
          }),
        e.render(),
        ll && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function vT(e, t, n, r) {
  return dT(t) ? yT(e, t, n, r) : { target: t, transitionEnd: r };
}
const xT = (e, t, n, r) => {
    const o = cT(e, t, r);
    return (t = o.target), (r = o.transitionEnd), vT(e, t, n, r);
  },
  Lc = { current: null },
  t1 = { current: !1 };
function wT() {
  if (((t1.current = !0), !!ll))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Lc.current = e.matches);
      e.addListener(t), t();
    } else Lc.current = !1;
}
function ST(e, t, n) {
  const { willChange: r } = t;
  for (const o in t) {
    const i = t[o],
      s = n[o];
    if (Ye(i)) e.addValue(o, i), fa(r) && r.add(o);
    else if (Ye(s)) e.addValue(o, Jr(i, { owner: e })), fa(r) && r.remove(o);
    else if (s !== i)
      if (e.hasValue(o)) {
        const a = e.getValue(o);
        !a.hasAnimated && a.set(i);
      } else {
        const a = e.getStaticValue(o);
        e.addValue(o, Jr(a !== void 0 ? a : i, { owner: e }));
      }
  }
  for (const o in n) t[o] === void 0 && e.removeValue(o);
  return t;
}
const im = new WeakMap(),
  n1 = Object.keys(mi),
  CT = n1.length,
  sm = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  ET = Qf.length;
class PT {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: o,
      visualState: i,
    },
    s = {},
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.scheduleRender = () => ae.render(this.render, !1, !0));
    const { latestValues: a, renderState: l } = i;
    (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = s),
      (this.isControllingVariants = cl(n)),
      (this.isVariantNode = z0(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const f in c) {
      const d = c[f];
      a[f] !== void 0 && Ye(d) && (d.set(a[f], !1), fa(u) && u.add(f));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      im.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      t1.current || wT(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Lc.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    im.delete(this.current),
      this.projection && this.projection.unmount(),
      tn(this.notifyUpdate),
      tn(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = ar.has(t),
      o = n.on("change", (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && ae.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, o, i) {
    let s, a;
    for (let l = 0; l < CT; l++) {
      const u = n1[l],
        {
          isEnabled: c,
          Feature: f,
          ProjectionNode: d,
          MeasureLayout: m,
        } = mi[u];
      d && (s = d),
        c(n) &&
          (!this.features[u] && f && (this.features[u] = new f(this)),
          m && (a = m));
    }
    if (!this.projection && s) {
      this.projection = new s(
        this.latestValues,
        this.parent && this.parent.projection,
      );
      const {
        layoutId: l,
        layout: u,
        drag: c,
        dragConstraints: f,
        layoutScroll: d,
        layoutRoot: m,
      } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || (f && Lr(f)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: i,
        layoutScroll: d,
        layoutRoot: m,
      });
    }
    return a;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ye();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < sm.length; r++) {
      const o = sm[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    (this.prevMotionValues = ST(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < ET; r++) {
      const o = Qf[r],
        i = this.props[o];
      (hi(i) || i === !1) && (n[o] = i);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Jr(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
        n !== void 0
      ? n
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      o =
        typeof r == "string" || typeof r == "object"
          ? (n = nd(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Ye(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new fd()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class r1 extends PT {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: o },
    i,
  ) {
    let s = Uk(r, t || {}, this);
    if ((o && (n && (n = o(n)), r && (r = o(r)), s && (s = o(s))), i)) {
      zk(this, r, s);
      const a = xT(this, r, s, n);
      (n = a.transitionEnd), (r = a.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function kT(e) {
  return window.getComputedStyle(e);
}
class bT extends r1 {
  readValueFromInstance(t, n) {
    if (ar.has(n)) {
      const r = ad(n);
      return (r && r.default) || 0;
    } else {
      const r = kT(t),
        o = (G0(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Hv(t, n);
  }
  build(t, n, r, o) {
    Xf(t, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return td(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ye(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, o) {
    J0(t, n, r, o);
  }
}
class TT extends r1 {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (ar.has(n)) {
      const r = ad(n);
      return (r && r.default) || 0;
    }
    return (n = Z0.has(n) ? n : ed(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return ye();
  }
  scrapeMotionValuesFromProps(t, n) {
    return tv(t, n);
  }
  build(t, n, r, o) {
    Jf(t, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    ev(t, n, r, o);
  }
  mount(t) {
    (this.isSVGTag = Zf(t.tagName)), super.mount(t);
  }
}
const RT = (e, t) =>
    Yf(e)
      ? new TT(t, { enableHardwareAcceleration: !1 })
      : new bT(t, { enableHardwareAcceleration: !0 }),
  AT = { layout: { ProjectionNode: Zv, MeasureLayout: Gv } },
  OT = { ...rb, ...C2, ...aT, ...AT },
  Go = OP((e, t) => s2(e, t, OT, RT));
function LT({ title: e, description: t, id: n, lastUpdated: r }) {
  return T.jsx(ra, {
    className: "w-[45%] ",
    to: `/todoapp/${n}`,
    children: T.jsxs(Go.div, {
      initial: { scale: 0.85, opacity: 0 },
      whileInView: { scale: 1, opacity: 1 },
      className:
        "w-full p-2 text-[#E2E3E7] border-2 border-[#40474D] shadow-md rounded flex justify-center flex-col relative",
      children: [
        T.jsx("p", { className: "text-2xl my-1 mb-2", children: e }),
        T.jsx("p", {
          className: "text-xs font-medium",
          children: t.length > 40 ? t.slice(0, 41) + "...." : t,
        }),
        T.jsx("p", { className: "text-xs mt-2 font-medium", children: r }),
        T.jsx("p", { className: "text-[8px] mt-2 font-medium", children: n }),
      ],
    }),
  });
}
const MT = () => {
  const { isLoading: e, todos: t, error: n } = u0((o) => o.todosReducer),
    r = g0();
  return (
    S.useEffect(() => {
      r(wP());
    }, []),
    T.jsxs("div", {
      className:
        "w-full bg-[#181C1F] min-h-screen flex items-center flex-col relative p-2",
      children: [
        T.jsx("div", { children: e && T.jsx(SP, {}) }),
        T.jsx("div", { children: n && n }),
        T.jsx("div", {
          className:
            "w-full flex justify-center items-center flex-wrap relative gap-2",
          children:
            t == null
              ? void 0
              : t.map((o) =>
                  T.jsx(LT, {
                    title: o.title,
                    description: o.description,
                    id: o.id,
                    lastUpdated: o.lastUpdated,
                  }),
                ),
        }),
      ],
    })
  );
};
function vr(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function o1(e) {
  if (!vr(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = o1(e[n]);
    }),
    t
  );
}
function Yt(e, t, n = { clone: !0 }) {
  const r = n.clone ? V({}, e) : e;
  return (
    vr(e) &&
      vr(t) &&
      Object.keys(t).forEach((o) => {
        o !== "__proto__" &&
          (vr(t[o]) && o in e && vr(e[o])
            ? (r[o] = Yt(e[o], t[o], n))
            : n.clone
            ? (r[o] = vr(t[o]) ? o1(t[o]) : t[o])
            : (r[o] = t[o]));
      }),
    r
  );
}
function eo(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function Xt(e) {
  if (typeof e != "string") throw new Error(eo(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function i1(e, t) {
  const n = V({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = V({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          i = t[r];
        (n[r] = {}),
          !i || !Object.keys(i)
            ? (n[r] = o)
            : !o || !Object.keys(o)
            ? (n[r] = i)
            : ((n[r] = V({}, i)),
              Object.keys(o).forEach((s) => {
                n[r][s] = i1(o[s], i[s]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function NT(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce((i, s) => {
          if (s) {
            const a = t(s);
            a !== "" && i.push(a), n && n[s] && i.push(n[s]);
          }
          return i;
        }, [])
        .join(" ");
    }),
    r
  );
}
const am = (e) => e,
  _T = () => {
    let e = am;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = am;
      },
    };
  },
  jT = _T(),
  DT = jT,
  IT = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    readOnly: "readOnly",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    required: "required",
    selected: "selected",
  };
function s1(e, t, n = "Mui") {
  const r = IT[t];
  return r ? `${n}-${r}` : `${DT.generate(e)}-${t}`;
}
function $T(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = s1(e, o, n);
    }),
    r
  );
}
function a1(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = a1(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function VT() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = a1(e)) && (r && (r += " "), (r += t));
  return r;
}
function l1(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var FT =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  zT = l1(function (e) {
    return (
      FT.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function BT(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function UT(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var WT = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(UT(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = BT(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  _e = "-ms-",
  pa = "-moz-",
  W = "-webkit-",
  u1 = "comm",
  dd = "rule",
  pd = "decl",
  HT = "@import",
  c1 = "@keyframes",
  GT = "@layer",
  KT = Math.abs,
  hl = String.fromCharCode,
  QT = Object.assign;
function YT(e, t) {
  return Ae(e, 0) ^ 45
    ? (((((((t << 2) ^ Ae(e, 0)) << 2) ^ Ae(e, 1)) << 2) ^ Ae(e, 2)) << 2) ^
        Ae(e, 3)
    : 0;
}
function f1(e) {
  return e.trim();
}
function XT(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function H(e, t, n) {
  return e.replace(t, n);
}
function Mc(e, t) {
  return e.indexOf(t);
}
function Ae(e, t) {
  return e.charCodeAt(t) | 0;
}
function yi(e, t, n) {
  return e.slice(t, n);
}
function Ot(e) {
  return e.length;
}
function hd(e) {
  return e.length;
}
function as(e, t) {
  return t.push(e), e;
}
function qT(e, t) {
  return e.map(t).join("");
}
var ml = 1,
  to = 1,
  d1 = 0,
  Xe = 0,
  ve = 0,
  uo = "";
function gl(e, t, n, r, o, i, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: ml,
    column: to,
    length: s,
    return: "",
  };
}
function Co(e, t) {
  return QT(gl("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function JT() {
  return ve;
}
function ZT() {
  return (
    (ve = Xe > 0 ? Ae(uo, --Xe) : 0), to--, ve === 10 && ((to = 1), ml--), ve
  );
}
function rt() {
  return (
    (ve = Xe < d1 ? Ae(uo, Xe++) : 0), to++, ve === 10 && ((to = 1), ml++), ve
  );
}
function $t() {
  return Ae(uo, Xe);
}
function Ts() {
  return Xe;
}
function ji(e, t) {
  return yi(uo, e, t);
}
function vi(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function p1(e) {
  return (ml = to = 1), (d1 = Ot((uo = e))), (Xe = 0), [];
}
function h1(e) {
  return (uo = ""), e;
}
function Rs(e) {
  return f1(ji(Xe - 1, Nc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function eR(e) {
  for (; (ve = $t()) && ve < 33; ) rt();
  return vi(e) > 2 || vi(ve) > 3 ? "" : " ";
}
function tR(e, t) {
  for (
    ;
    --t &&
    rt() &&
    !(ve < 48 || ve > 102 || (ve > 57 && ve < 65) || (ve > 70 && ve < 97));

  );
  return ji(e, Ts() + (t < 6 && $t() == 32 && rt() == 32));
}
function Nc(e) {
  for (; rt(); )
    switch (ve) {
      case e:
        return Xe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Nc(ve);
        break;
      case 40:
        e === 41 && Nc(e);
        break;
      case 92:
        rt();
        break;
    }
  return Xe;
}
function nR(e, t) {
  for (; rt() && e + ve !== 47 + 10; )
    if (e + ve === 42 + 42 && $t() === 47) break;
  return "/*" + ji(t, Xe - 1) + "*" + hl(e === 47 ? e : rt());
}
function rR(e) {
  for (; !vi($t()); ) rt();
  return ji(e, Xe);
}
function oR(e) {
  return h1(As("", null, null, null, [""], (e = p1(e)), 0, [0], e));
}
function As(e, t, n, r, o, i, s, a, l) {
  for (
    var u = 0,
      c = 0,
      f = s,
      d = 0,
      m = 0,
      h = 0,
      g = 1,
      w = 1,
      y = 1,
      p = 0,
      v = "",
      x = o,
      C = i,
      b = r,
      E = v;
    w;

  )
    switch (((h = p), (p = rt()))) {
      case 40:
        if (h != 108 && Ae(E, f - 1) == 58) {
          Mc((E += H(Rs(p), "&", "&\f")), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += Rs(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += eR(h);
        break;
      case 92:
        E += tR(Ts() - 1, 7);
        continue;
      case 47:
        switch ($t()) {
          case 42:
          case 47:
            as(iR(nR(rt(), Ts()), t, n), l);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * g:
        a[u++] = Ot(E) * y;
      case 125 * g:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            w = 0;
          case 59 + c:
            y == -1 && (E = H(E, /\f/g, "")),
              m > 0 &&
                Ot(E) - f &&
                as(
                  m > 32
                    ? um(E + ";", r, n, f - 1)
                    : um(H(E, " ", "") + ";", r, n, f - 2),
                  l,
                );
            break;
          case 59:
            E += ";";
          default:
            if (
              (as((b = lm(E, t, n, u, c, o, a, v, (x = []), (C = []), f)), i),
              p === 123)
            )
              if (c === 0) As(E, t, b, b, x, i, f, a, C);
              else
                switch (d === 99 && Ae(E, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    As(
                      e,
                      b,
                      b,
                      r && as(lm(e, b, b, 0, 0, o, a, v, o, (x = []), f), C),
                      o,
                      C,
                      f,
                      a,
                      r ? x : C,
                    );
                    break;
                  default:
                    As(E, b, b, b, [""], C, 0, a, C);
                }
        }
        (u = c = m = 0), (g = y = 1), (v = E = ""), (f = s);
        break;
      case 58:
        (f = 1 + Ot(E)), (m = h);
      default:
        if (g < 1) {
          if (p == 123) --g;
          else if (p == 125 && g++ == 0 && ZT() == 125) continue;
        }
        switch (((E += hl(p)), p * g)) {
          case 38:
            y = c > 0 ? 1 : ((E += "\f"), -1);
            break;
          case 44:
            (a[u++] = (Ot(E) - 1) * y), (y = 1);
            break;
          case 64:
            $t() === 45 && (E += Rs(rt())),
              (d = $t()),
              (c = f = Ot((v = E += rR(Ts())))),
              p++;
            break;
          case 45:
            h === 45 && Ot(E) == 2 && (g = 0);
        }
    }
  return i;
}
function lm(e, t, n, r, o, i, s, a, l, u, c) {
  for (
    var f = o - 1, d = o === 0 ? i : [""], m = hd(d), h = 0, g = 0, w = 0;
    h < r;
    ++h
  )
    for (var y = 0, p = yi(e, f + 1, (f = KT((g = s[h])))), v = e; y < m; ++y)
      (v = f1(g > 0 ? d[y] + " " + p : H(p, /&\f/g, d[y]))) && (l[w++] = v);
  return gl(e, t, n, o === 0 ? dd : a, l, u, c);
}
function iR(e, t, n) {
  return gl(e, t, n, u1, hl(JT()), yi(e, 2, -2), 0);
}
function um(e, t, n, r) {
  return gl(e, t, n, pd, yi(e, 0, r), yi(e, r + 1, -1), r);
}
function zr(e, t) {
  for (var n = "", r = hd(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function sR(e, t, n, r) {
  switch (e.type) {
    case GT:
      if (e.children.length) break;
    case HT:
    case pd:
      return (e.return = e.return || e.value);
    case u1:
      return "";
    case c1:
      return (e.return = e.value + "{" + zr(e.children, r) + "}");
    case dd:
      e.value = e.props.join(",");
  }
  return Ot((n = zr(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function aR(e) {
  var t = hd(e);
  return function (n, r, o, i) {
    for (var s = "", a = 0; a < t; a++) s += e[a](n, r, o, i) || "";
    return s;
  };
}
function lR(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var uR = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = $t()), o === 38 && i === 12 && (n[r] = 1), !vi(i);

    )
      rt();
    return ji(t, Xe);
  },
  cR = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (vi(o)) {
        case 0:
          o === 38 && $t() === 12 && (n[r] = 1), (t[r] += uR(Xe - 1, n, r));
          break;
        case 2:
          t[r] += Rs(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = $t() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += hl(o);
      }
    while ((o = rt()));
    return t;
  },
  fR = function (t, n) {
    return h1(cR(p1(t), n));
  },
  cm = new WeakMap(),
  dR = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !cm.get(r)) &&
        !o
      ) {
        cm.set(t, !0);
        for (
          var i = [], s = fR(n, i), a = r.props, l = 0, u = 0;
          l < s.length;
          l++
        )
          for (var c = 0; c < a.length; c++, u++)
            t.props[u] = i[l] ? s[l].replace(/&\f/g, a[c]) : a[c] + " " + s[l];
      }
    }
  },
  pR = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function m1(e, t) {
  switch (YT(e, t)) {
    case 5103:
      return W + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return W + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return W + e + pa + e + _e + e + e;
    case 6828:
    case 4268:
      return W + e + _e + e + e;
    case 6165:
      return W + e + _e + "flex-" + e + e;
    case 5187:
      return (
        W + e + H(e, /(\w+).+(:[^]+)/, W + "box-$1$2" + _e + "flex-$1$2") + e
      );
    case 5443:
      return W + e + _e + "flex-item-" + H(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        W +
        e +
        _e +
        "flex-line-pack" +
        H(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return W + e + _e + H(e, "shrink", "negative") + e;
    case 5292:
      return W + e + _e + H(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        W +
        "box-" +
        H(e, "-grow", "") +
        W +
        e +
        _e +
        H(e, "grow", "positive") +
        e
      );
    case 4554:
      return W + H(e, /([^-])(transform)/g, "$1" + W + "$2") + e;
    case 6187:
      return (
        H(H(H(e, /(zoom-|grab)/, W + "$1"), /(image-set)/, W + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return H(e, /(image-set\([^]*)/, W + "$1$`$1");
    case 4968:
      return (
        H(
          H(e, /(.+:)(flex-)?(.*)/, W + "box-pack:$3" + _e + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        W +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return H(e, /(.+)-inline(.+)/, W + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ot(e) - 1 - t > 6)
        switch (Ae(e, t + 1)) {
          case 109:
            if (Ae(e, t + 4) !== 45) break;
          case 102:
            return (
              H(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  W +
                  "$2-$3$1" +
                  pa +
                  (Ae(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Mc(e, "stretch")
              ? m1(H(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (Ae(e, t + 1) !== 115) break;
    case 6444:
      switch (Ae(e, Ot(e) - 3 - (~Mc(e, "!important") && 10))) {
        case 107:
          return H(e, ":", ":" + W) + e;
        case 101:
          return (
            H(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                W +
                (Ae(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                W +
                "$2$3$1" +
                _e +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (Ae(e, t + 11)) {
        case 114:
          return W + e + _e + H(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return W + e + _e + H(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return W + e + _e + H(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return W + e + _e + e + e;
  }
  return e;
}
var hR = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case pd:
          t.return = m1(t.value, t.length);
          break;
        case c1:
          return zr([Co(t, { value: H(t.value, "@", "@" + W) })], o);
        case dd:
          if (t.length)
            return qT(t.props, function (i) {
              switch (XT(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return zr(
                    [Co(t, { props: [H(i, /:(read-\w+)/, ":" + pa + "$1")] })],
                    o,
                  );
                case "::placeholder":
                  return zr(
                    [
                      Co(t, {
                        props: [H(i, /:(plac\w+)/, ":" + W + "input-$1")],
                      }),
                      Co(t, { props: [H(i, /:(plac\w+)/, ":" + pa + "$1")] }),
                      Co(t, { props: [H(i, /:(plac\w+)/, _e + "input-$1")] }),
                    ],
                    o,
                  );
              }
              return "";
            });
      }
  },
  mR = [hR],
  gR = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (g) {
        var w = g.getAttribute("data-emotion");
        w.indexOf(" ") !== -1 &&
          (document.head.appendChild(g), g.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || mR,
      i = {},
      s,
      a = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (g) {
          for (
            var w = g.getAttribute("data-emotion").split(" "), y = 1;
            y < w.length;
            y++
          )
            i[w[y]] = !0;
          a.push(g);
        },
      );
    var l,
      u = [dR, pR];
    {
      var c,
        f = [
          sR,
          lR(function (g) {
            c.insert(g);
          }),
        ],
        d = aR(u.concat(o, f)),
        m = function (w) {
          return zr(oR(w), d);
        };
      l = function (w, y, p, v) {
        (c = p),
          m(w ? w + "{" + y.styles + "}" : y.styles),
          v && (h.inserted[y.name] = !0);
      };
    }
    var h = {
      key: n,
      sheet: new WT({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return h.sheet.hydrate(a), h;
  },
  yR = !0;
function vR(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var g1 = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || yR === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  xR = function (t, n, r) {
    g1(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function wR(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var SR = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  CR = /[A-Z]|^ms/g,
  ER = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  y1 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  fm = function (t) {
    return t != null && typeof t != "boolean";
  },
  hu = l1(function (e) {
    return y1(e) ? e : e.replace(CR, "-$&").toLowerCase();
  }),
  dm = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(ER, function (r, o, i) {
            return (Lt = { name: o, styles: i, next: Lt }), o;
          });
    }
    return SR[t] !== 1 && !y1(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function xi(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (Lt = { name: n.name, styles: n.styles, next: Lt }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (Lt = { name: r.name, styles: r.styles, next: Lt }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return PR(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = Lt,
          s = n(e);
        return (Lt = i), xi(e, t, s);
      }
      break;
    }
  }
  if (t == null) return n;
  var a = t[n];
  return a !== void 0 ? a : n;
}
function PR(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += xi(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object")
        t != null && t[s] !== void 0
          ? (r += i + "{" + t[s] + "}")
          : fm(s) && (r += hu(i) + ":" + dm(i, s) + ";");
      else if (
        Array.isArray(s) &&
        typeof s[0] == "string" &&
        (t == null || t[s[0]] === void 0)
      )
        for (var a = 0; a < s.length; a++)
          fm(s[a]) && (r += hu(i) + ":" + dm(i, s[a]) + ";");
      else {
        var l = xi(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += hu(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var pm = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Lt,
  kR = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    Lt = void 0;
    var s = t[0];
    s == null || s.raw === void 0
      ? ((o = !1), (i += xi(r, n, s)))
      : (i += s[0]);
    for (var a = 1; a < t.length; a++) (i += xi(r, n, t[a])), o && (i += s[a]);
    pm.lastIndex = 0;
    for (var l = "", u; (u = pm.exec(i)) !== null; ) l += "-" + u[1];
    var c = wR(i) + l;
    return { name: c, styles: i, next: Lt };
  },
  bR = function (t) {
    return t();
  },
  TR = yu["useInsertionEffect"] ? yu["useInsertionEffect"] : !1,
  RR = TR || bR,
  v1 = S.createContext(typeof HTMLElement < "u" ? gR({ key: "css" }) : null);
v1.Provider;
var AR = function (t) {
    return S.forwardRef(function (n, r) {
      var o = S.useContext(v1);
      return t(n, o, r);
    });
  },
  x1 = S.createContext({}),
  OR = zT,
  LR = function (t) {
    return t !== "theme";
  },
  hm = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? OR : LR;
  },
  mm = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (s) {
              return t.__emotion_forwardProp(s) && i(s);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  MR = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      g1(n, r, o),
      RR(function () {
        return xR(n, r, o);
      }),
      null
    );
  },
  NR = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      s;
    n !== void 0 && ((i = n.label), (s = n.target));
    var a = mm(t, n, r),
      l = a || hm(o),
      u = !l("as");
    return function () {
      var c = arguments,
        f =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && f.push("label:" + i + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        f.push.apply(f, c);
      else {
        f.push(c[0][0]);
        for (var d = c.length, m = 1; m < d; m++) f.push(c[m], c[0][m]);
      }
      var h = AR(function (g, w, y) {
        var p = (u && g.as) || o,
          v = "",
          x = [],
          C = g;
        if (g.theme == null) {
          C = {};
          for (var b in g) C[b] = g[b];
          C.theme = S.useContext(x1);
        }
        typeof g.className == "string"
          ? (v = vR(w.registered, x, g.className))
          : g.className != null && (v = g.className + " ");
        var E = kR(f.concat(x), w.registered, C);
        (v += w.key + "-" + E.name), s !== void 0 && (v += " " + s);
        var k = u && a === void 0 ? hm(p) : l,
          M = {};
        for (var A in g) (u && A === "as") || (k(A) && (M[A] = g[A]));
        return (
          (M.className = v),
          (M.ref = y),
          S.createElement(
            S.Fragment,
            null,
            S.createElement(MR, {
              cache: w,
              serialized: E,
              isStringTag: typeof p == "string",
            }),
            S.createElement(p, M),
          )
        );
      });
      return (
        (h.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (h.defaultProps = t.defaultProps),
        (h.__emotion_real = h),
        (h.__emotion_base = o),
        (h.__emotion_styles = f),
        (h.__emotion_forwardProp = a),
        Object.defineProperty(h, "toString", {
          value: function () {
            return "." + s;
          },
        }),
        (h.withComponent = function (g, w) {
          return e(g, V({}, n, w, { shouldForwardProp: mm(h, w, !0) })).apply(
            void 0,
            f,
          );
        }),
        h
      );
    };
  },
  _R = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  _c = NR.bind();
_R.forEach(function (e) {
  _c[e] = _c(e);
});
/**
 * @mui/styled-engine v5.13.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function jR(e, t) {
  return _c(e, t);
}
const DR = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  IR = ["values", "unit", "step"],
  $R = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => V({}, n, { [r.key]: r.val }), {})
    );
  };
function VR(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
    } = e,
    o = on(e, IR),
    i = $R(t),
    s = Object.keys(i);
  function a(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n})`;
  }
  function l(d) {
    return `@media (max-width:${
      (typeof t[d] == "number" ? t[d] : d) - r / 100
    }${n})`;
  }
  function u(d, m) {
    const h = s.indexOf(m);
    return `@media (min-width:${
      typeof t[d] == "number" ? t[d] : d
    }${n}) and (max-width:${
      (h !== -1 && typeof t[s[h]] == "number" ? t[s[h]] : m) - r / 100
    }${n})`;
  }
  function c(d) {
    return s.indexOf(d) + 1 < s.length ? u(d, s[s.indexOf(d) + 1]) : a(d);
  }
  function f(d) {
    const m = s.indexOf(d);
    return m === 0
      ? a(s[1])
      : m === s.length - 1
      ? l(s[m])
      : u(d, s[s.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return V(
    {
      keys: s,
      values: i,
      up: a,
      down: l,
      between: u,
      only: c,
      not: f,
      unit: n,
    },
    o,
  );
}
const FR = { borderRadius: 4 },
  zR = FR;
function Ko(e, t) {
  return t ? Yt(e, t, { clone: !1 }) : e;
}
const md = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  gm = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${md[e]}px)`,
  };
function nn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || gm;
    return t.reduce((s, a, l) => ((s[i.up(i.keys[l])] = n(t[l])), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || gm;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || md).indexOf(a) !== -1) {
        const l = i.up(a);
        s[l] = n(t[a], a);
      } else {
        const l = a;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return n(t);
}
function BR(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, o) => {
          const i = e.up(o);
          return (r[i] = {}), r;
        }, {})) || {}
  );
}
function UR(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function yl(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function ha(e, t, n, r = n) {
  let o;
  return (
    typeof e == "function"
      ? (o = e(n))
      : Array.isArray(e)
      ? (o = e[n] || r)
      : (o = yl(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function G(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (s) => {
      if (s[t] == null) return null;
      const a = s[t],
        l = s.theme,
        u = yl(l, r) || {};
      return nn(s, a, (f) => {
        let d = ha(u, o, f);
        return (
          f === d &&
            typeof f == "string" &&
            (d = ha(u, o, `${t}${f === "default" ? "" : Xt(f)}`, f)),
          n === !1 ? d : { [n]: d }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function WR(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const HR = { m: "margin", p: "padding" },
  GR = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  ym = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  KR = WR((e) => {
    if (e.length > 2)
      if (ym[e]) e = ym[e];
      else return [e];
    const [t, n] = e.split(""),
      r = HR[t],
      o = GR[n] || "";
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  gd = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  yd = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...gd, ...yd];
function Di(e, t, n, r) {
  var o;
  const i = (o = yl(e, t, !1)) != null ? o : n;
  return typeof i == "number"
    ? (s) => (typeof s == "string" ? s : i * s)
    : Array.isArray(i)
    ? (s) => (typeof s == "string" ? s : i[s])
    : typeof i == "function"
    ? i
    : () => {};
}
function w1(e) {
  return Di(e, "spacing", 8);
}
function Ii(e, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function QR(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = Ii(t, n)), r), {});
}
function YR(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = KR(n),
    i = QR(o, r),
    s = e[n];
  return nn(e, s, i);
}
function S1(e, t) {
  const n = w1(e.theme);
  return Object.keys(e)
    .map((r) => YR(e, t, r, n))
    .reduce(Ko, {});
}
function ce(e) {
  return S1(e, gd);
}
ce.propTypes = {};
ce.filterProps = gd;
function fe(e) {
  return S1(e, yd);
}
fe.propTypes = {};
fe.filterProps = yd;
function XR(e = 8) {
  if (e.mui) return e;
  const t = w1({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const s = t(i);
          return typeof s == "number" ? `${s}px` : s;
        })
        .join(" ");
  return (n.mui = !0), n;
}
function vl(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {},
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? Ko(o, t[i](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function Nt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const qR = G({ prop: "border", themeKey: "borders", transform: Nt }),
  JR = G({ prop: "borderTop", themeKey: "borders", transform: Nt }),
  ZR = G({ prop: "borderRight", themeKey: "borders", transform: Nt }),
  eA = G({ prop: "borderBottom", themeKey: "borders", transform: Nt }),
  tA = G({ prop: "borderLeft", themeKey: "borders", transform: Nt }),
  nA = G({ prop: "borderColor", themeKey: "palette" }),
  rA = G({ prop: "borderTopColor", themeKey: "palette" }),
  oA = G({ prop: "borderRightColor", themeKey: "palette" }),
  iA = G({ prop: "borderBottomColor", themeKey: "palette" }),
  sA = G({ prop: "borderLeftColor", themeKey: "palette" }),
  xl = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = Di(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: Ii(t, r) });
      return nn(e, e.borderRadius, n);
    }
    return null;
  };
xl.propTypes = {};
xl.filterProps = ["borderRadius"];
vl(qR, JR, ZR, eA, tA, nA, rA, oA, iA, sA, xl);
const wl = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Di(e.theme, "spacing", 8),
      n = (r) => ({ gap: Ii(t, r) });
    return nn(e, e.gap, n);
  }
  return null;
};
wl.propTypes = {};
wl.filterProps = ["gap"];
const Sl = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Di(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: Ii(t, r) });
    return nn(e, e.columnGap, n);
  }
  return null;
};
Sl.propTypes = {};
Sl.filterProps = ["columnGap"];
const Cl = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Di(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: Ii(t, r) });
    return nn(e, e.rowGap, n);
  }
  return null;
};
Cl.propTypes = {};
Cl.filterProps = ["rowGap"];
const aA = G({ prop: "gridColumn" }),
  lA = G({ prop: "gridRow" }),
  uA = G({ prop: "gridAutoFlow" }),
  cA = G({ prop: "gridAutoColumns" }),
  fA = G({ prop: "gridAutoRows" }),
  dA = G({ prop: "gridTemplateColumns" }),
  pA = G({ prop: "gridTemplateRows" }),
  hA = G({ prop: "gridTemplateAreas" }),
  mA = G({ prop: "gridArea" });
vl(wl, Sl, Cl, aA, lA, uA, cA, fA, dA, pA, hA, mA);
function Br(e, t) {
  return t === "grey" ? t : e;
}
const gA = G({ prop: "color", themeKey: "palette", transform: Br }),
  yA = G({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: Br,
  }),
  vA = G({ prop: "backgroundColor", themeKey: "palette", transform: Br });
vl(gA, yA, vA);
function et(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const xA = G({ prop: "width", transform: et }),
  vd = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r;
        return {
          maxWidth:
            ((r = e.theme) == null ||
            (r = r.breakpoints) == null ||
            (r = r.values) == null
              ? void 0
              : r[n]) ||
            md[n] ||
            et(n),
        };
      };
      return nn(e, e.maxWidth, t);
    }
    return null;
  };
vd.filterProps = ["maxWidth"];
const wA = G({ prop: "minWidth", transform: et }),
  SA = G({ prop: "height", transform: et }),
  CA = G({ prop: "maxHeight", transform: et }),
  EA = G({ prop: "minHeight", transform: et });
G({ prop: "size", cssProperty: "width", transform: et });
G({ prop: "size", cssProperty: "height", transform: et });
const PA = G({ prop: "boxSizing" });
vl(xA, vd, wA, SA, CA, EA, PA);
const kA = {
    border: { themeKey: "borders", transform: Nt },
    borderTop: { themeKey: "borders", transform: Nt },
    borderRight: { themeKey: "borders", transform: Nt },
    borderBottom: { themeKey: "borders", transform: Nt },
    borderLeft: { themeKey: "borders", transform: Nt },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: xl },
    color: { themeKey: "palette", transform: Br },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: Br,
    },
    backgroundColor: { themeKey: "palette", transform: Br },
    p: { style: fe },
    pt: { style: fe },
    pr: { style: fe },
    pb: { style: fe },
    pl: { style: fe },
    px: { style: fe },
    py: { style: fe },
    padding: { style: fe },
    paddingTop: { style: fe },
    paddingRight: { style: fe },
    paddingBottom: { style: fe },
    paddingLeft: { style: fe },
    paddingX: { style: fe },
    paddingY: { style: fe },
    paddingInline: { style: fe },
    paddingInlineStart: { style: fe },
    paddingInlineEnd: { style: fe },
    paddingBlock: { style: fe },
    paddingBlockStart: { style: fe },
    paddingBlockEnd: { style: fe },
    m: { style: ce },
    mt: { style: ce },
    mr: { style: ce },
    mb: { style: ce },
    ml: { style: ce },
    mx: { style: ce },
    my: { style: ce },
    margin: { style: ce },
    marginTop: { style: ce },
    marginRight: { style: ce },
    marginBottom: { style: ce },
    marginLeft: { style: ce },
    marginX: { style: ce },
    marginY: { style: ce },
    marginInline: { style: ce },
    marginInlineStart: { style: ce },
    marginInlineEnd: { style: ce },
    marginBlock: { style: ce },
    marginBlockStart: { style: ce },
    marginBlockEnd: { style: ce },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ "@media print": { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: wl },
    rowGap: { style: Cl },
    columnGap: { style: Sl },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: et },
    maxWidth: { style: vd },
    minWidth: { transform: et },
    height: { transform: et },
    maxHeight: { transform: et },
    minHeight: { transform: et },
    boxSizing: {},
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  },
  xd = kA;
function bA(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function TA(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function RA() {
  function e(n, r, o, i) {
    const s = { [n]: r, theme: o },
      a = i[n];
    if (!a) return { [n]: r };
    const { cssProperty: l = n, themeKey: u, transform: c, style: f } = a;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const d = yl(o, u) || {};
    return f
      ? f(s)
      : nn(s, r, (h) => {
          let g = ha(d, c, h);
          return (
            h === g &&
              typeof h == "string" &&
              (g = ha(d, c, `${n}${h === "default" ? "" : Xt(h)}`, h)),
            l === !1 ? g : { [l]: g }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {} } = n || {};
    if (!o) return null;
    const s = (r = i.unstable_sxConfig) != null ? r : xd;
    function a(l) {
      let u = l;
      if (typeof l == "function") u = l(i);
      else if (typeof l != "object") return l;
      if (!u) return null;
      const c = BR(i.breakpoints),
        f = Object.keys(c);
      let d = c;
      return (
        Object.keys(u).forEach((m) => {
          const h = TA(u[m], i);
          if (h != null)
            if (typeof h == "object")
              if (s[m]) d = Ko(d, e(m, h, i, s));
              else {
                const g = nn({ theme: i }, h, (w) => ({ [m]: w }));
                bA(g, h) ? (d[m] = t({ sx: h, theme: i })) : (d = Ko(d, g));
              }
            else d = Ko(d, e(m, h, i, s));
        }),
        UR(f, d)
      );
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const C1 = RA();
C1.filterProps = ["sx"];
const wd = C1,
  AA = ["breakpoints", "palette", "spacing", "shape"];
function Sd(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    s = on(e, AA),
    a = VR(n),
    l = XR(o);
  let u = Yt(
    {
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: V({ mode: "light" }, r),
      spacing: l,
      shape: V({}, zR, i),
    },
    s,
  );
  return (
    (u = t.reduce((c, f) => Yt(c, f), u)),
    (u.unstable_sxConfig = V({}, xd, s == null ? void 0 : s.unstable_sxConfig)),
    (u.unstable_sx = function (f) {
      return wd({ sx: f, theme: this });
    }),
    u
  );
}
function OA(e) {
  return Object.keys(e).length === 0;
}
function LA(e = null) {
  const t = S.useContext(x1);
  return !t || OA(t) ? e : t;
}
const MA = Sd();
function NA(e = MA) {
  return LA(e);
}
const _A = ["variant"];
function vm(e) {
  return e.length === 0;
}
function E1(e) {
  const { variant: t } = e,
    n = on(e, _A);
  let r = t || "";
  return (
    Object.keys(n)
      .sort()
      .forEach((o) => {
        o === "color"
          ? (r += vm(r) ? e[o] : Xt(e[o]))
          : (r += `${vm(r) ? o : Xt(o)}${Xt(e[o].toString())}`);
      }),
    r
  );
}
const jA = [
  "name",
  "slot",
  "skipVariantsResolver",
  "skipSx",
  "overridesResolver",
];
function DA(e) {
  return Object.keys(e).length === 0;
}
function IA(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
const $A = (e, t) =>
    t.components && t.components[e] && t.components[e].styleOverrides
      ? t.components[e].styleOverrides
      : null,
  VA = (e, t) => {
    let n = [];
    t &&
      t.components &&
      t.components[e] &&
      t.components[e].variants &&
      (n = t.components[e].variants);
    const r = {};
    return (
      n.forEach((o) => {
        const i = E1(o.props);
        r[i] = o.style;
      }),
      r
    );
  },
  FA = (e, t, n, r) => {
    var o;
    const { ownerState: i = {} } = e,
      s = [],
      a =
        n == null || (o = n.components) == null || (o = o[r]) == null
          ? void 0
          : o.variants;
    return (
      a &&
        a.forEach((l) => {
          let u = !0;
          Object.keys(l.props).forEach((c) => {
            i[c] !== l.props[c] && e[c] !== l.props[c] && (u = !1);
          }),
            u && s.push(t[E1(l.props)]);
        }),
      s
    );
  };
function Os(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const zA = Sd();
function Eo({ defaultTheme: e, theme: t, themeId: n }) {
  return DA(t) ? e : t[n] || t;
}
function BA(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = zA,
      rootShouldForwardProp: r = Os,
      slotShouldForwardProp: o = Os,
    } = e,
    i = (s) =>
      wd(V({}, s, { theme: Eo(V({}, s, { defaultTheme: n, themeId: t })) }));
  return (
    (i.__mui_systemSx = !0),
    (s, a = {}) => {
      DR(s, (x) => x.filter((C) => !(C != null && C.__mui_systemSx)));
      const {
          name: l,
          slot: u,
          skipVariantsResolver: c,
          skipSx: f,
          overridesResolver: d,
        } = a,
        m = on(a, jA),
        h = c !== void 0 ? c : (u && u !== "Root") || !1,
        g = f || !1;
      let w,
        y = Os;
      u === "Root" ? (y = r) : u ? (y = o) : IA(s) && (y = void 0);
      const p = jR(s, V({ shouldForwardProp: y, label: w }, m)),
        v = (x, ...C) => {
          const b = C
            ? C.map((A) =>
                typeof A == "function" && A.__emotion_real !== A
                  ? (z) =>
                      A(
                        V({}, z, {
                          theme: Eo(V({}, z, { defaultTheme: n, themeId: t })),
                        }),
                      )
                  : A,
              )
            : [];
          let E = x;
          l &&
            d &&
            b.push((A) => {
              const z = Eo(V({}, A, { defaultTheme: n, themeId: t })),
                I = $A(l, z);
              if (I) {
                const ge = {};
                return (
                  Object.entries(I).forEach(([X, q]) => {
                    ge[X] =
                      typeof q == "function" ? q(V({}, A, { theme: z })) : q;
                  }),
                  d(A, ge)
                );
              }
              return null;
            }),
            l &&
              !h &&
              b.push((A) => {
                const z = Eo(V({}, A, { defaultTheme: n, themeId: t }));
                return FA(A, VA(l, z), z, l);
              }),
            g || b.push(i);
          const k = b.length - C.length;
          if (Array.isArray(x) && k > 0) {
            const A = new Array(k).fill("");
            (E = [...x, ...A]), (E.raw = [...x.raw, ...A]);
          } else
            typeof x == "function" &&
              x.__emotion_real !== x &&
              (E = (A) =>
                x(
                  V({}, A, {
                    theme: Eo(V({}, A, { defaultTheme: n, themeId: t })),
                  }),
                ));
          const M = p(E, ...b);
          return s.muiName && (M.muiName = s.muiName), M;
        };
      return p.withConfig && (v.withConfig = p.withConfig), v;
    }
  );
}
function UA(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : i1(t.components[n].defaultProps, r);
}
function WA({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let o = NA(n);
  return r && (o = o[r] || o), UA({ theme: o, name: t, props: e });
}
function P1(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n);
}
function HA(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, o) =>
            o < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3,
          )
          .join(", ")})`
      : ""
  );
}
function no(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return no(HA(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(eo(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        o,
      ) === -1)
    )
      throw new Error(eo(10, o));
  } else r = r.split(",");
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
function Cd(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf("color") !== -1
      ? (r = `${n} ${r.join(" ")}`)
      : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function GA(e) {
  e = no(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    s = (u, c = (u + n / 30) % 12) =>
      o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let a = "rgb";
  const l = [
    Math.round(s(0) * 255),
    Math.round(s(8) * 255),
    Math.round(s(4) * 255),
  ];
  return (
    e.type === "hsla" && ((a += "a"), l.push(t[3])), Cd({ type: a, values: l })
  );
}
function xm(e) {
  e = no(e);
  let t = e.type === "hsl" || e.type === "hsla" ? no(GA(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      ),
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function KA(e, t) {
  const n = xm(e),
    r = xm(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function QA(e, t) {
  if (((e = no(e)), (t = P1(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return Cd(e);
}
function YA(e, t) {
  if (((e = no(e)), (t = P1(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return Cd(e);
}
function XA(e, t) {
  return V(
    {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
    },
    t,
  );
}
const qA = { black: "#000", white: "#fff" },
  wi = qA,
  JA = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  ZA = JA,
  eO = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  dr = eO,
  tO = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  pr = tO,
  nO = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  Po = nO,
  rO = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  hr = rO,
  oO = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  mr = oO,
  iO = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  gr = iO,
  sO = ["mode", "contrastThreshold", "tonalOffset"],
  wm = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: wi.white, default: wi.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  mu = {
    text: {
      primary: wi.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: wi.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function Sm(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = YA(e.main, o))
      : t === "dark" && (e.dark = QA(e.main, i)));
}
function aO(e = "light") {
  return e === "dark"
    ? { main: hr[200], light: hr[50], dark: hr[400] }
    : { main: hr[700], light: hr[400], dark: hr[800] };
}
function lO(e = "light") {
  return e === "dark"
    ? { main: dr[200], light: dr[50], dark: dr[400] }
    : { main: dr[500], light: dr[300], dark: dr[700] };
}
function uO(e = "light") {
  return e === "dark"
    ? { main: pr[500], light: pr[300], dark: pr[700] }
    : { main: pr[700], light: pr[400], dark: pr[800] };
}
function cO(e = "light") {
  return e === "dark"
    ? { main: mr[400], light: mr[300], dark: mr[700] }
    : { main: mr[700], light: mr[500], dark: mr[900] };
}
function fO(e = "light") {
  return e === "dark"
    ? { main: gr[400], light: gr[300], dark: gr[700] }
    : { main: gr[800], light: gr[500], dark: gr[900] };
}
function dO(e = "light") {
  return e === "dark"
    ? { main: Po[400], light: Po[300], dark: Po[700] }
    : { main: "#ed6c02", light: Po[500], dark: Po[900] };
}
function pO(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = on(e, sO),
    i = e.primary || aO(t),
    s = e.secondary || lO(t),
    a = e.error || uO(t),
    l = e.info || cO(t),
    u = e.success || fO(t),
    c = e.warning || dO(t);
  function f(g) {
    return KA(g, mu.text.primary) >= n ? mu.text.primary : wm.text.primary;
  }
  const d = ({
      color: g,
      name: w,
      mainShade: y = 500,
      lightShade: p = 300,
      darkShade: v = 700,
    }) => {
      if (
        ((g = V({}, g)),
        !g.main && g[y] && (g.main = g[y]),
        !g.hasOwnProperty("main"))
      )
        throw new Error(eo(11, w ? ` (${w})` : "", y));
      if (typeof g.main != "string")
        throw new Error(eo(12, w ? ` (${w})` : "", JSON.stringify(g.main)));
      return (
        Sm(g, "light", p, r),
        Sm(g, "dark", v, r),
        g.contrastText || (g.contrastText = f(g.main)),
        g
      );
    },
    m = { dark: mu, light: wm };
  return Yt(
    V(
      {
        common: V({}, wi),
        mode: t,
        primary: d({ color: i, name: "primary" }),
        secondary: d({
          color: s,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: d({ color: a, name: "error" }),
        warning: d({ color: c, name: "warning" }),
        info: d({ color: l, name: "info" }),
        success: d({ color: u, name: "success" }),
        grey: ZA,
        contrastThreshold: n,
        getContrastText: f,
        augmentColor: d,
        tonalOffset: r,
      },
      m[t],
    ),
    o,
  );
}
const hO = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function mO(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Cm = { textTransform: "uppercase" },
  Em = '"Roboto", "Helvetica", "Arial", sans-serif';
function gO(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = Em,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: s = 400,
      fontWeightMedium: a = 500,
      fontWeightBold: l = 700,
      htmlFontSize: u = 16,
      allVariants: c,
      pxToRem: f,
    } = n,
    d = on(n, hO),
    m = o / 14,
    h = f || ((y) => `${(y / u) * m}rem`),
    g = (y, p, v, x, C) =>
      V(
        { fontFamily: r, fontWeight: y, fontSize: h(p), lineHeight: v },
        r === Em ? { letterSpacing: `${mO(x / p)}em` } : {},
        C,
        c,
      ),
    w = {
      h1: g(i, 96, 1.167, -1.5),
      h2: g(i, 60, 1.2, -0.5),
      h3: g(s, 48, 1.167, 0),
      h4: g(s, 34, 1.235, 0.25),
      h5: g(s, 24, 1.334, 0),
      h6: g(a, 20, 1.6, 0.15),
      subtitle1: g(s, 16, 1.75, 0.15),
      subtitle2: g(a, 14, 1.57, 0.1),
      body1: g(s, 16, 1.5, 0.15),
      body2: g(s, 14, 1.43, 0.15),
      button: g(a, 14, 1.75, 0.4, Cm),
      caption: g(s, 12, 1.66, 0.4),
      overline: g(s, 12, 2.66, 1, Cm),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return Yt(
    V(
      {
        htmlFontSize: u,
        pxToRem: h,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: s,
        fontWeightMedium: a,
        fontWeightBold: l,
      },
      w,
    ),
    d,
    { clone: !1 },
  );
}
const yO = 0.2,
  vO = 0.14,
  xO = 0.12;
function re(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${yO})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${vO})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${xO})`,
  ].join(",");
}
const wO = [
    "none",
    re(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    re(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    re(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    re(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    re(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    re(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    re(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    re(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    re(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    re(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    re(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    re(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    re(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    re(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    re(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    re(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    re(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    re(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    re(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    re(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    re(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    re(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    re(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    re(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  SO = wO,
  CO = ["duration", "easing", "delay"],
  EO = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  PO = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Pm(e) {
  return `${Math.round(e)}ms`;
}
function kO(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function bO(e) {
  const t = V({}, EO, e.easing),
    n = V({}, PO, e.duration);
  return V(
    {
      getAutoHeightDuration: kO,
      create: (o = ["all"], i = {}) => {
        const {
          duration: s = n.standard,
          easing: a = t.easeInOut,
          delay: l = 0,
        } = i;
        return (
          on(i, CO),
          (Array.isArray(o) ? o : [o])
            .map(
              (u) =>
                `${u} ${typeof s == "string" ? s : Pm(s)} ${a} ${
                  typeof l == "string" ? l : Pm(l)
                }`,
            )
            .join(",")
        );
      },
    },
    e,
    { easing: t, duration: n },
  );
}
const TO = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  RO = TO,
  AO = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function OO(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: i = {},
    } = e,
    s = on(e, AO);
  if (e.vars) throw new Error(eo(18));
  const a = pO(r),
    l = Sd(e);
  let u = Yt(l, {
    mixins: XA(l.breakpoints, n),
    palette: a,
    shadows: SO.slice(),
    typography: gO(a, i),
    transitions: bO(o),
    zIndex: V({}, RO),
  });
  return (
    (u = Yt(u, s)),
    (u = t.reduce((c, f) => Yt(c, f), u)),
    (u.unstable_sxConfig = V({}, xd, s == null ? void 0 : s.unstable_sxConfig)),
    (u.unstable_sx = function (f) {
      return wd({ sx: f, theme: this });
    }),
    u
  );
}
const LO = OO(),
  k1 = LO,
  b1 = "$$material";
function MO({ props: e, name: t }) {
  return WA({ props: e, name: t, defaultTheme: k1, themeId: b1 });
}
const NO = (e) => Os(e) && e !== "classes",
  _O = BA({ themeId: b1, defaultTheme: k1, rootShouldForwardProp: NO }),
  jO = _O;
function DO(e) {
  return s1("MuiSvgIcon", e);
}
$T("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const IO = [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "titleAccess",
    "viewBox",
  ],
  $O = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      o = {
        root: ["root", t !== "inherit" && `color${Xt(t)}`, `fontSize${Xt(n)}`],
      };
    return NT(o, DO, r);
  },
  VO = jO("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "inherit" && t[`color${Xt(n.color)}`],
        t[`fontSize${Xt(n.fontSize)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, i, s, a, l, u, c, f, d, m, h;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: t.hasSvgAsChild ? void 0 : "currentColor",
      flexShrink: 0,
      transition:
        (n = e.transitions) == null || (r = n.create) == null
          ? void 0
          : r.call(n, "fill", {
              duration:
                (o = e.transitions) == null || (o = o.duration) == null
                  ? void 0
                  : o.shorter,
            }),
      fontSize: {
        inherit: "inherit",
        small:
          ((i = e.typography) == null || (s = i.pxToRem) == null
            ? void 0
            : s.call(i, 20)) || "1.25rem",
        medium:
          ((a = e.typography) == null || (l = a.pxToRem) == null
            ? void 0
            : l.call(a, 24)) || "1.5rem",
        large:
          ((u = e.typography) == null || (c = u.pxToRem) == null
            ? void 0
            : c.call(u, 35)) || "2.1875rem",
      }[t.fontSize],
      color:
        (f =
          (d = (e.vars || e).palette) == null || (d = d[t.color]) == null
            ? void 0
            : d.main) != null
          ? f
          : {
              action:
                (m = (e.vars || e).palette) == null || (m = m.action) == null
                  ? void 0
                  : m.active,
              disabled:
                (h = (e.vars || e).palette) == null || (h = h.action) == null
                  ? void 0
                  : h.disabled,
              inherit: void 0,
            }[t.color],
    };
  }),
  T1 = S.forwardRef(function (t, n) {
    const r = MO({ props: t, name: "MuiSvgIcon" }),
      {
        children: o,
        className: i,
        color: s = "inherit",
        component: a = "svg",
        fontSize: l = "medium",
        htmlColor: u,
        inheritViewBox: c = !1,
        titleAccess: f,
        viewBox: d = "0 0 24 24",
      } = r,
      m = on(r, IO),
      h = S.isValidElement(o) && o.type === "svg",
      g = V({}, r, {
        color: s,
        component: a,
        fontSize: l,
        instanceFontSize: t.fontSize,
        inheritViewBox: c,
        viewBox: d,
        hasSvgAsChild: h,
      }),
      w = {};
    c || (w.viewBox = d);
    const y = $O(g);
    return T.jsxs(
      VO,
      V(
        {
          as: a,
          className: VT(y.root, i),
          focusable: "false",
          color: u,
          "aria-hidden": f ? void 0 : !0,
          role: f ? "img" : void 0,
          ref: n,
        },
        w,
        m,
        h && o.props,
        {
          ownerState: g,
          children: [
            h ? o.props.children : o,
            f ? T.jsx("title", { children: f }) : null,
          ],
        },
      ),
    );
  });
T1.muiName = "SvgIcon";
const km = T1;
function $i(e, t) {
  function n(r, o) {
    return T.jsx(
      km,
      V({ "data-testid": `${t}Icon`, ref: o }, r, { children: e }),
    );
  }
  return (n.muiName = km.muiName), S.memo(S.forwardRef(n));
}
const FO = $i(
    T.jsx("path", {
      d: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h10v-2H4v-6h18V6c0-1.11-.89-2-2-2zm0 4H4V6h16v2zm4 9v2h-3v3h-2v-3h-3v-2h3v-3h2v3h3z",
    }),
    "AddCard",
  ),
  zO = $i(
    T.jsx("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z",
    }),
    "AddCircle",
  ),
  BO = $i(
    T.jsx("path", {
      d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    }),
    "Close",
  ),
  UO = $i(
    T.jsx("path", {
      d: "M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z",
    }),
    "DataUsage",
  ),
  WO = $i(
    T.jsx("path", {
      d: "M19.5 9.5c-1.03 0-1.9.62-2.29 1.5h-2.92c-.39-.88-1.26-1.5-2.29-1.5s-1.9.62-2.29 1.5H6.79c-.39-.88-1.26-1.5-2.29-1.5C3.12 9.5 2 10.62 2 12s1.12 2.5 2.5 2.5c1.03 0 1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5s1.9-.62 2.29-1.5h2.92c.39.88 1.26 1.5 2.29 1.5 1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5z",
    }),
    "LinearScale",
  );
function HO() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = R1(t)) && (r && (r += " "), (r += n));
  return r;
}
function R1(e) {
  if (typeof e == "string") return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = R1(e[r])) && (n && (n += " "), (n += t));
  return n;
}
var Ed = "-";
function GO(e) {
  var t = QO(e),
    n = e.conflictingClassGroups,
    r = e.conflictingClassGroupModifiers,
    o = r === void 0 ? {} : r;
  function i(a) {
    var l = a.split(Ed);
    return l[0] === "" && l.length !== 1 && l.shift(), A1(l, t) || KO(a);
  }
  function s(a, l) {
    var u = n[a] || [];
    return l && o[a] ? [].concat(u, o[a]) : u;
  }
  return { getClassGroupId: i, getConflictingClassGroupIds: s };
}
function A1(e, t) {
  var s;
  if (e.length === 0) return t.classGroupId;
  var n = e[0],
    r = t.nextPart.get(n),
    o = r ? A1(e.slice(1), r) : void 0;
  if (o) return o;
  if (t.validators.length !== 0) {
    var i = e.join(Ed);
    return (s = t.validators.find(function (a) {
      var l = a.validator;
      return l(i);
    })) == null
      ? void 0
      : s.classGroupId;
  }
}
var bm = /^\[(.+)\]$/;
function KO(e) {
  if (bm.test(e)) {
    var t = bm.exec(e)[1],
      n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function QO(e) {
  var t = e.theme,
    n = e.prefix,
    r = { nextPart: new Map(), validators: [] },
    o = XO(Object.entries(e.classGroups), n);
  return (
    o.forEach(function (i) {
      var s = i[0],
        a = i[1];
      jc(a, r, s, t);
    }),
    r
  );
}
function jc(e, t, n, r) {
  e.forEach(function (o) {
    if (typeof o == "string") {
      var i = o === "" ? t : Tm(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (YO(o)) {
        jc(o(r), t, n, r);
        return;
      }
      t.validators.push({ validator: o, classGroupId: n });
      return;
    }
    Object.entries(o).forEach(function (s) {
      var a = s[0],
        l = s[1];
      jc(l, Tm(t, a), n, r);
    });
  });
}
function Tm(e, t) {
  var n = e;
  return (
    t.split(Ed).forEach(function (r) {
      n.nextPart.has(r) ||
        n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function YO(e) {
  return e.isThemeGetter;
}
function XO(e, t) {
  return t
    ? e.map(function (n) {
        var r = n[0],
          o = n[1],
          i = o.map(function (s) {
            return typeof s == "string"
              ? t + s
              : typeof s == "object"
              ? Object.fromEntries(
                  Object.entries(s).map(function (a) {
                    var l = a[0],
                      u = a[1];
                    return [t + l, u];
                  }),
                )
              : s;
          });
        return [r, i];
      })
    : e;
}
function qO(e) {
  if (e < 1) return { get: function () {}, set: function () {} };
  var t = 0,
    n = new Map(),
    r = new Map();
  function o(i, s) {
    n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
  }
  return {
    get: function (s) {
      var a = n.get(s);
      if (a !== void 0) return a;
      if ((a = r.get(s)) !== void 0) return o(s, a), a;
    },
    set: function (s, a) {
      n.has(s) ? n.set(s, a) : o(s, a);
    },
  };
}
var O1 = "!";
function JO(e) {
  var t = e.separator || ":",
    n = t.length === 1,
    r = t[0],
    o = t.length;
  return function (s) {
    for (var a = [], l = 0, u = 0, c, f = 0; f < s.length; f++) {
      var d = s[f];
      if (l === 0) {
        if (d === r && (n || s.slice(f, f + o) === t)) {
          a.push(s.slice(u, f)), (u = f + o);
          continue;
        }
        if (d === "/") {
          c = f;
          continue;
        }
      }
      d === "[" ? l++ : d === "]" && l--;
    }
    var m = a.length === 0 ? s : s.substring(u),
      h = m.startsWith(O1),
      g = h ? m.substring(1) : m,
      w = c && c > u ? c - u : void 0;
    return {
      modifiers: a,
      hasImportantModifier: h,
      baseClassName: g,
      maybePostfixModifierPosition: w,
    };
  };
}
function ZO(e) {
  if (e.length <= 1) return e;
  var t = [],
    n = [];
  return (
    e.forEach(function (r) {
      var o = r[0] === "[";
      o ? (t.push.apply(t, n.sort().concat([r])), (n = [])) : n.push(r);
    }),
    t.push.apply(t, n.sort()),
    t
  );
}
function e5(e) {
  return { cache: qO(e.cacheSize), splitModifiers: JO(e), ...GO(e) };
}
var t5 = /\s+/;
function n5(e, t) {
  var n = t.splitModifiers,
    r = t.getClassGroupId,
    o = t.getConflictingClassGroupIds,
    i = new Set();
  return e
    .trim()
    .split(t5)
    .map(function (s) {
      var a = n(s),
        l = a.modifiers,
        u = a.hasImportantModifier,
        c = a.baseClassName,
        f = a.maybePostfixModifierPosition,
        d = r(f ? c.substring(0, f) : c),
        m = !!f;
      if (!d) {
        if (!f) return { isTailwindClass: !1, originalClassName: s };
        if (((d = r(c)), !d))
          return { isTailwindClass: !1, originalClassName: s };
        m = !1;
      }
      var h = ZO(l).join(":"),
        g = u ? h + O1 : h;
      return {
        isTailwindClass: !0,
        modifierId: g,
        classGroupId: d,
        originalClassName: s,
        hasPostfixModifier: m,
      };
    })
    .reverse()
    .filter(function (s) {
      if (!s.isTailwindClass) return !0;
      var a = s.modifierId,
        l = s.classGroupId,
        u = s.hasPostfixModifier,
        c = a + l;
      return i.has(c)
        ? !1
        : (i.add(c),
          o(l, u).forEach(function (f) {
            return i.add(a + f);
          }),
          !0);
    })
    .reverse()
    .map(function (s) {
      return s.originalClassName;
    })
    .join(" ");
}
function r5() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r,
    o,
    i,
    s = a;
  function a(u) {
    var c = t[0],
      f = t.slice(1),
      d = f.reduce(function (m, h) {
        return h(m);
      }, c());
    return (r = e5(d)), (o = r.cache.get), (i = r.cache.set), (s = l), l(u);
  }
  function l(u) {
    var c = o(u);
    if (c) return c;
    var f = n5(u, r);
    return i(u, f), f;
  }
  return function () {
    return s(HO.apply(null, arguments));
  };
}
function ee(e) {
  var t = function (r) {
    return r[e] || [];
  };
  return (t.isThemeGetter = !0), t;
}
var L1 = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  o5 = /^\d+\/\d+$/,
  i5 = new Set(["px", "full", "screen"]),
  s5 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  a5 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  l5 = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function xt(e) {
  return qn(e) || i5.has(e) || o5.test(e) || Dc(e);
}
function Dc(e) {
  return ur(e, "length", h5);
}
function u5(e) {
  return ur(e, "size", M1);
}
function c5(e) {
  return ur(e, "position", M1);
}
function f5(e) {
  return ur(e, "url", m5);
}
function ls(e) {
  return ur(e, "number", qn);
}
function qn(e) {
  return !Number.isNaN(Number(e));
}
function d5(e) {
  return e.endsWith("%") && qn(e.slice(0, -1));
}
function ko(e) {
  return Rm(e) || ur(e, "number", Rm);
}
function $(e) {
  return L1.test(e);
}
function bo() {
  return !0;
}
function ln(e) {
  return s5.test(e);
}
function p5(e) {
  return ur(e, "", g5);
}
function ur(e, t, n) {
  var r = L1.exec(e);
  return r ? (r[1] ? r[1] === t : n(r[2])) : !1;
}
function h5(e) {
  return a5.test(e);
}
function M1() {
  return !1;
}
function m5(e) {
  return e.startsWith("url(");
}
function Rm(e) {
  return Number.isInteger(Number(e));
}
function g5(e) {
  return l5.test(e);
}
function y5() {
  var e = ee("colors"),
    t = ee("spacing"),
    n = ee("blur"),
    r = ee("brightness"),
    o = ee("borderColor"),
    i = ee("borderRadius"),
    s = ee("borderSpacing"),
    a = ee("borderWidth"),
    l = ee("contrast"),
    u = ee("grayscale"),
    c = ee("hueRotate"),
    f = ee("invert"),
    d = ee("gap"),
    m = ee("gradientColorStops"),
    h = ee("gradientColorStopPositions"),
    g = ee("inset"),
    w = ee("margin"),
    y = ee("opacity"),
    p = ee("padding"),
    v = ee("saturate"),
    x = ee("scale"),
    C = ee("sepia"),
    b = ee("skew"),
    E = ee("space"),
    k = ee("translate"),
    M = function () {
      return ["auto", "contain", "none"];
    },
    A = function () {
      return ["auto", "hidden", "clip", "visible", "scroll"];
    },
    z = function () {
      return ["auto", $, t];
    },
    I = function () {
      return [$, t];
    },
    ge = function () {
      return ["", xt];
    },
    X = function () {
      return ["auto", qn, $];
    },
    q = function () {
      return [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ];
    },
    Te = function () {
      return ["solid", "dashed", "dotted", "double", "none"];
    },
    qe = function () {
      return [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
        "plus-lighter",
      ];
    },
    O = function () {
      return [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ];
    },
    _ = function () {
      return ["", "0", $];
    },
    D = function () {
      return [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ];
    },
    N = function () {
      return [qn, ls];
    },
    K = function () {
      return [qn, $];
    };
  return {
    cacheSize: 500,
    theme: {
      colors: [bo],
      spacing: [xt],
      blur: ["none", "", ln, $],
      brightness: N(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ln, $],
      borderSpacing: I(),
      borderWidth: ge(),
      contrast: N(),
      grayscale: _(),
      hueRotate: K(),
      invert: _(),
      gap: I(),
      gradientColorStops: [e],
      gradientColorStopPositions: [d5, Dc],
      inset: z(),
      margin: z(),
      opacity: N(),
      padding: I(),
      saturate: N(),
      scale: N(),
      sepia: _(),
      skew: K(),
      space: I(),
      translate: I(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", $] }],
      container: ["container"],
      columns: [{ columns: [ln] }],
      "break-after": [{ "break-after": D() }],
      "break-before": [{ "break-before": D() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none"] }],
      clear: [{ clear: ["left", "right", "both", "none"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [].concat(q(), [$]) }],
      overflow: [{ overflow: A() }],
      "overflow-x": [{ "overflow-x": A() }],
      "overflow-y": [{ "overflow-y": A() }],
      overscroll: [{ overscroll: M() }],
      "overscroll-x": [{ "overscroll-x": M() }],
      "overscroll-y": [{ "overscroll-y": M() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [g] }],
      "inset-x": [{ "inset-x": [g] }],
      "inset-y": [{ "inset-y": [g] }],
      start: [{ start: [g] }],
      end: [{ end: [g] }],
      top: [{ top: [g] }],
      right: [{ right: [g] }],
      bottom: [{ bottom: [g] }],
      left: [{ left: [g] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", ko] }],
      basis: [{ basis: z() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", $] }],
      grow: [{ grow: _() }],
      shrink: [{ shrink: _() }],
      order: [{ order: ["first", "last", "none", ko] }],
      "grid-cols": [{ "grid-cols": [bo] }],
      "col-start-end": [{ col: ["auto", { span: ["full", ko] }, $] }],
      "col-start": [{ "col-start": X() }],
      "col-end": [{ "col-end": X() }],
      "grid-rows": [{ "grid-rows": [bo] }],
      "row-start-end": [{ row: ["auto", { span: [ko] }, $] }],
      "row-start": [{ "row-start": X() }],
      "row-end": [{ "row-end": X() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", $] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", $] }],
      gap: [{ gap: [d] }],
      "gap-x": [{ "gap-x": [d] }],
      "gap-y": [{ "gap-y": [d] }],
      "justify-content": [{ justify: ["normal"].concat(O()) }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal"].concat(O(), ["baseline"]) }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [].concat(O(), ["baseline"]) }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [p] }],
      px: [{ px: [p] }],
      py: [{ py: [p] }],
      ps: [{ ps: [p] }],
      pe: [{ pe: [p] }],
      pt: [{ pt: [p] }],
      pr: [{ pr: [p] }],
      pb: [{ pb: [p] }],
      pl: [{ pl: [p] }],
      m: [{ m: [w] }],
      mx: [{ mx: [w] }],
      my: [{ my: [w] }],
      ms: [{ ms: [w] }],
      me: [{ me: [w] }],
      mt: [{ mt: [w] }],
      mr: [{ mr: [w] }],
      mb: [{ mb: [w] }],
      ml: [{ ml: [w] }],
      "space-x": [{ "space-x": [E] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [E] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", $, t] }],
      "min-w": [{ "min-w": ["min", "max", "fit", $, xt] }],
      "max-w": [
        {
          "max-w": [
            "0",
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [ln] },
            ln,
            $,
          ],
        },
      ],
      h: [{ h: [$, t, "auto", "min", "max", "fit"] }],
      "min-h": [{ "min-h": ["min", "max", "fit", $, xt] }],
      "max-h": [{ "max-h": [$, t, "min", "max", "fit"] }],
      "font-size": [{ text: ["base", ln, Dc] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            ls,
          ],
        },
      ],
      "font-family": [{ font: [bo] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            $,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", qn, ls] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            $,
            xt,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", $] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", $] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [y] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [y] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [].concat(Te(), ["wavy"]) }],
      "text-decoration-thickness": [{ decoration: ["auto", "from-font", xt] }],
      "underline-offset": [{ "underline-offset": ["auto", $, xt] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      indent: [{ indent: I() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            $,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", $] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [y] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [].concat(q(), [c5]) }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", u5] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            f5,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [h] }],
      "gradient-via-pos": [{ via: [h] }],
      "gradient-to-pos": [{ to: [h] }],
      "gradient-from": [{ from: [m] }],
      "gradient-via": [{ via: [m] }],
      "gradient-to": [{ to: [m] }],
      rounded: [{ rounded: [i] }],
      "rounded-s": [{ "rounded-s": [i] }],
      "rounded-e": [{ "rounded-e": [i] }],
      "rounded-t": [{ "rounded-t": [i] }],
      "rounded-r": [{ "rounded-r": [i] }],
      "rounded-b": [{ "rounded-b": [i] }],
      "rounded-l": [{ "rounded-l": [i] }],
      "rounded-ss": [{ "rounded-ss": [i] }],
      "rounded-se": [{ "rounded-se": [i] }],
      "rounded-ee": [{ "rounded-ee": [i] }],
      "rounded-es": [{ "rounded-es": [i] }],
      "rounded-tl": [{ "rounded-tl": [i] }],
      "rounded-tr": [{ "rounded-tr": [i] }],
      "rounded-br": [{ "rounded-br": [i] }],
      "rounded-bl": [{ "rounded-bl": [i] }],
      "border-w": [{ border: [a] }],
      "border-w-x": [{ "border-x": [a] }],
      "border-w-y": [{ "border-y": [a] }],
      "border-w-s": [{ "border-s": [a] }],
      "border-w-e": [{ "border-e": [a] }],
      "border-w-t": [{ "border-t": [a] }],
      "border-w-r": [{ "border-r": [a] }],
      "border-w-b": [{ "border-b": [a] }],
      "border-w-l": [{ "border-l": [a] }],
      "border-opacity": [{ "border-opacity": [y] }],
      "border-style": [{ border: [].concat(Te(), ["hidden"]) }],
      "divide-x": [{ "divide-x": [a] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [a] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [y] }],
      "divide-style": [{ divide: Te() }],
      "border-color": [{ border: [o] }],
      "border-color-x": [{ "border-x": [o] }],
      "border-color-y": [{ "border-y": [o] }],
      "border-color-t": [{ "border-t": [o] }],
      "border-color-r": [{ "border-r": [o] }],
      "border-color-b": [{ "border-b": [o] }],
      "border-color-l": [{ "border-l": [o] }],
      "divide-color": [{ divide: [o] }],
      "outline-style": [{ outline: [""].concat(Te()) }],
      "outline-offset": [{ "outline-offset": [$, xt] }],
      "outline-w": [{ outline: [xt] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: ge() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [y] }],
      "ring-offset-w": [{ "ring-offset": [xt] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", ln, p5] }],
      "shadow-color": [{ shadow: [bo] }],
      opacity: [{ opacity: [y] }],
      "mix-blend": [{ "mix-blend": qe() }],
      "bg-blend": [{ "bg-blend": qe() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [l] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", ln, $] }],
      grayscale: [{ grayscale: [u] }],
      "hue-rotate": [{ "hue-rotate": [c] }],
      invert: [{ invert: [f] }],
      saturate: [{ saturate: [v] }],
      sepia: [{ sepia: [C] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [n] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [l] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
      "backdrop-invert": [{ "backdrop-invert": [f] }],
      "backdrop-opacity": [{ "backdrop-opacity": [y] }],
      "backdrop-saturate": [{ "backdrop-saturate": [v] }],
      "backdrop-sepia": [{ "backdrop-sepia": [C] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [s] }],
      "border-spacing-x": [{ "border-spacing-x": [s] }],
      "border-spacing-y": [{ "border-spacing-y": [s] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            $,
          ],
        },
      ],
      duration: [{ duration: K() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", $] }],
      delay: [{ delay: K() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", $] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [x] }],
      "scale-x": [{ "scale-x": [x] }],
      "scale-y": [{ "scale-y": [x] }],
      rotate: [{ rotate: [ko, $] }],
      "translate-x": [{ "translate-x": [k] }],
      "translate-y": [{ "translate-y": [k] }],
      "skew-x": [{ "skew-x": [b] }],
      "skew-y": [{ "skew-y": [b] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            $,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: ["appearance-none"],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            $,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": I() }],
      "scroll-mx": [{ "scroll-mx": I() }],
      "scroll-my": [{ "scroll-my": I() }],
      "scroll-ms": [{ "scroll-ms": I() }],
      "scroll-me": [{ "scroll-me": I() }],
      "scroll-mt": [{ "scroll-mt": I() }],
      "scroll-mr": [{ "scroll-mr": I() }],
      "scroll-mb": [{ "scroll-mb": I() }],
      "scroll-ml": [{ "scroll-ml": I() }],
      "scroll-p": [{ "scroll-p": I() }],
      "scroll-px": [{ "scroll-px": I() }],
      "scroll-py": [{ "scroll-py": I() }],
      "scroll-ps": [{ "scroll-ps": I() }],
      "scroll-pe": [{ "scroll-pe": I() }],
      "scroll-pt": [{ "scroll-pt": I() }],
      "scroll-pr": [{ "scroll-pr": I() }],
      "scroll-pb": [{ "scroll-pb": I() }],
      "scroll-pl": [{ "scroll-pl": I() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [
        {
          touch: [
            "auto",
            "none",
            "pinch-zoom",
            "manipulation",
            { pan: ["x", "left", "right", "y", "up", "down"] },
          ],
        },
      ],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", $] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [xt, ls] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
var v5 = r5(y5);
function mn({ children: e, className: t, handleClick: n, type: r }) {
  return T.jsx(Go.button, {
    type: r || "button",
    onClick: n,
    className: v5(
      "px-2 p-1 shadow-md text-slate-900 active:shadow-none rounded",
      t,
    ),
    children: e,
  });
}
const x5 = () => {
    const [e, t] = S.useState(!1),
      [n, r] = S.useState({ title: "", description: "" }),
      o = "http://localhost:5174/api/v1/todos/post",
      i = () => {
        const s = {
          ...n,
          id: crypto.randomUUID(),
          lastUpdated: new Date().toLocaleString(),
          checked: !1,
        };
        zo.post(o, s)
          .then((a) => {
            console.log(a.data), t(!1);
          })
          .catch((a) => {
            console.log(a.message);
          });
      };
    return T.jsxs("div", {
      className:
        "w-full min-h-screen flex justify-center basic-theme items-center flex-col relative ",
      children: [
        T.jsx(MT, {}),
        T.jsxs(Go.div, {
          initial: {
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            y: "250px",
            x: "110px",
            top: "110px",
          },
          animate: {
            width: e === !0 ? "100%" : "60px",
            height: e === !0 ? "440px" : "60px",
            borderRadius: e === !0 ? "10px" : "50%",
            y: e === !0 ? 0 : "550px",
            x: e === !0 ? 0 : "110px",
            top: e === !0 ? 0 : "110px",
          },
          className:
            "flex justify-center z-30 items-center basic-theme theme-border flex-col overflow-hidden fixed",
          children: [
            T.jsxs(Go.div, {
              initial: { display: "flex" },
              animate: { display: e === !0 ? "flex" : "none" },
              className:
                "flex w-full gap-2 justify-center items-center flex-col relative",
              children: [
                T.jsx("p", { className: "w-4/5 text-left", children: "Title" }),
                T.jsx("input", {
                  onChange: (s) => r({ ...n, title: s.target.value }),
                  className:
                    "w-4/5 basic-theme theme-border p-2 rounded shadow-md",
                  type: "text",
                  id: "text",
                  name: "text",
                  value: n.title,
                }),
                T.jsx("p", {
                  className: "w-4/5 text-left",
                  children: "Description",
                }),
                T.jsx("textarea", {
                  onChange: (s) => r({ ...n, description: s.target.value }),
                  className:
                    "w-4/5 min-h-[120px] basic-theme theme-border rounded shadow-md ",
                  id: "description",
                  name: "description",
                  value: n.description,
                }),
                T.jsx(mn, {
                  className: "theme-border basic-theme my-2",
                  handleClick: () => {
                    i();
                  },
                  children: "Add Todo",
                }),
              ],
            }),
            T.jsx(Go.div, {
              initial: { x: 0, y: 0 },
              animate: { x: 0, y: e === !0 ? "20px" : 0 },
              onClick: () => t(!e),
              children: e === !0 ? T.jsx(BO, {}) : T.jsx(FO, {}),
            }),
          ],
        }),
      ],
    });
  },
  N1 = "INCREMENT",
  _1 = "DECREMENT",
  j1 = "RESET",
  D1 = "INCREMENT_BY_COUNT",
  I1 = "DECREMENT_BY_COUNT",
  w5 = () => ({ type: N1 }),
  S5 = () => ({ type: _1 }),
  C5 = () => ({ type: j1 }),
  E5 = (e) => ({ type: D1, payload: { count: e } }),
  P5 = (e) => ({ type: I1, payload: { count: e } });
function Am() {
  const e = u0((n) => n.counterReducer.count),
    t = g0();
  return T.jsxs("div", {
    className:
      "w-4/5 p-2 rounded basic-theme  theme-border shadow-md flex flex-col relative",
    children: [
      T.jsx("strong", { children: "Counter" }),
      T.jsxs("div", {
        className:
          "w-full basic-theme theme-border py-1 flex rounded justify-between px-2 items-center",
        children: [
          T.jsx("strong", { className: "text-2xl", children: e }),
          T.jsxs("div", {
            className: "flex justify-center items-center gap-2",
            children: [
              T.jsx(mn, {
                handleClick: () => {
                  t(w5());
                },
                className: "bg-green-400 text-2xl",
                type: "button",
                children: T.jsx(zO, {}),
              }),
              T.jsx(mn, {
                handleClick: () => {
                  t(E5(5));
                },
                className: "bg-green-400 text-2xl",
                type: "button",
                children: "+5",
              }),
              T.jsx(mn, {
                handleClick: () => {
                  t(S5());
                },
                className: "bg-red-400 text-2xl",
                type: "button",
                children: T.jsx(WO, {}),
              }),
              T.jsx(mn, {
                handleClick: () => {
                  t(P5(5));
                },
                className: "bg-red-400 text-2xl",
                type: "button",
                children: "-5",
              }),
              T.jsx(mn, {
                handleClick: () => {
                  t(C5());
                },
                className: "bg-blue-400 text-2xl",
                type: "button",
                children: T.jsx(UO, {}),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function k5() {
  return T.jsxs("div", {
    className:
      "basic-theme w-full min-h-screen flex justify-center items-center flex-col relative gap-2",
    children: [T.jsx(Am, {}), T.jsx(Am, {})],
  });
}
const b5 = () => {
  const [e, t] = S.useState({
      title: "",
      description: "",
      checked: !1,
      id: "",
      lastUpdated: "",
    }),
    [n, r] = S.useState(!1),
    { id: o } = US(),
    { title: i, description: s, checked: a, lastUpdated: l } = e,
    u = "http://localhost:5174/api/v1/todos",
    c = () => {
      zo.get(`${u}/get/${o}`)
        .then((y) => {
          const p = y.data;
          t({
            title: p.todo.title,
            description: p.todo.description,
            checked: p.todo.checked,
            lastUpdated: p.todo.lastUpdated,
            id: p.todo.id,
          }),
            console.log(p);
        })
        .catch((y) => {
          r(!0), console.log(y.message);
        });
    },
    f = () => {
      const y = { ...e, id: o, lastUpdated: new Date().toLocaleString() };
      zo.patch(`${u}/update`, y)
        .then((p) => {
          console.log(p.data), c();
        })
        .catch((p) => {
          console.log(p.message);
        });
    },
    d = () => {
      zo.delete(`${u}/delete/${o}`)
        .then((y) => {
          console.log(y.data), c();
        })
        .catch((y) => {
          console.log(y.message);
        });
    },
    m = (y) => {
      t({ ...e, title: y.target.value });
    },
    h = (y) => {
      t({ ...e, description: y.target.value });
    },
    g = () => {
      t({ ...e, checked: !e.checked });
    },
    w = (y) => {
      console.log(y.target.value);
    };
  return (
    S.useEffect(() => {
      c();
    }, []),
    T.jsxs(T.Fragment, {
      children: [
        T.jsx("div", {
          style: { display: n === !0 ? "flex" : "none" },
          className:
            "w-full basic-theme min-h-screen flex justify-center items-center flex-col  relative",
          children: T.jsxs(ra, {
            to: "/",
            children: [
              T.jsxs("div", {
                className: "text-slate-100",
                children: [
                  T.jsx("p", { className: "text-red-400", children: o }),
                  " ",
                  T.jsx("br", {}),
                  " Doesn't exist",
                  " ",
                ],
              }),
              T.jsx("br", {}),
              T.jsx("div", { children: "Go Back to home " }),
            ],
          }),
        }),
        T.jsx("div", {
          style: { display: n === !1 ? "flex" : "none" },
          className:
            "w-full basic-theme min-h-screen flex justify-center items-center flex-col  relative",
          children: T.jsxs("div", {
            className:
              "w-4/5 rounded p-2 theme-border flex justify-center items-center relative flex-col",
            children: [
              T.jsx("input", {
                id: "title",
                name: "title",
                onChange: m,
                className:
                  "w-full rounded p-2 m-2 my-1 theme-border basic-theme",
                value: i,
              }),
              T.jsx("textarea", {
                id: "description",
                name: "description",
                onChange: h,
                className:
                  "w-full min-h-[100px] rounded p-2 m-2 my-1 theme-border basic-theme",
                value: s,
              }),
              T.jsxs("div", {
                onClick: g,
                className:
                  "w-full rounded p-2 m-2 my-1 theme-border flex justify-between  items-centerbasic-theme",
                children: [
                  T.jsx("div", {
                    children: a === !0 ? "Checked" : "Unchecked",
                  }),
                  T.jsx("input", {
                    id: "checked",
                    name: "checked",
                    onChange: w,
                    type: "checkbox",
                    checked: a === !0,
                  }),
                ],
              }),
              T.jsx("div", {
                className: "w-full text-xs rounded p-2 m-2 my-1 theme-border",
                children: l,
              }),
              T.jsxs("div", {
                className: "w-full theme-border text-xs p-2 rounded my-1",
                children: ["ID : ", o],
              }),
              T.jsxs("div", {
                className:
                  "w-full text-xs p-1 rounded my-1 flex justify-around items-center",
                children: [
                  T.jsx(ra, {
                    to: "/todoapp",
                    children: T.jsx(mn, {
                      handleClick: () => {
                        d();
                      },
                      className: "basic-theme theme-border p-2 px-4",
                      children: "Delete",
                    }),
                  }),
                  T.jsx(mn, {
                    handleClick: () => {
                      f();
                    },
                    className: "basic-theme theme-border p-2 px-4",
                    children: "Save",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    })
  );
};
function T5() {
  return T.jsx("div", {
    className:
      "w-full min-h-screen flex justify-center items-center flex-col relative bg-slate-200",
    children: T.jsxs(rC, {
      children: [
        T.jsx(yr, { path: "/", element: T.jsx(Up, {}) }),
        T.jsx(yr, { path: "/TodoApp", element: T.jsx(x5, {}) }),
        T.jsx(yr, { path: "/TodoApp/:id", element: T.jsx(b5, {}) }),
        T.jsx(yr, { path: "/Counters", element: T.jsx(k5, {}) }),
        T.jsx(yr, { path: "/*", element: T.jsx(Up, {}) }),
      ],
    }),
  });
}
function Si(e) {
  "@babel/helpers - typeof";
  return (
    (Si =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Si(e)
  );
}
function R5(e, t) {
  if (Si(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Si(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function A5(e) {
  var t = R5(e, "string");
  return Si(t) === "symbol" ? t : String(t);
}
function O5(e, t, n) {
  return (
    (t = A5(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Om(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Lm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Om(Object(n), !0).forEach(function (r) {
          O5(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Om(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function je(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var Mm = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  gu = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  ma = {
    INIT: "@@redux/INIT" + gu(),
    REPLACE: "@@redux/REPLACE" + gu(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + gu();
    },
  };
function L5(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function $1(e, t, n) {
  var r;
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(je(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(je(1));
    return n($1)(e, t);
  }
  if (typeof e != "function") throw new Error(je(2));
  var o = e,
    i = t,
    s = [],
    a = s,
    l = !1;
  function u() {
    a === s && (a = s.slice());
  }
  function c() {
    if (l) throw new Error(je(3));
    return i;
  }
  function f(g) {
    if (typeof g != "function") throw new Error(je(4));
    if (l) throw new Error(je(5));
    var w = !0;
    return (
      u(),
      a.push(g),
      function () {
        if (w) {
          if (l) throw new Error(je(6));
          (w = !1), u();
          var p = a.indexOf(g);
          a.splice(p, 1), (s = null);
        }
      }
    );
  }
  function d(g) {
    if (!L5(g)) throw new Error(je(7));
    if (typeof g.type > "u") throw new Error(je(8));
    if (l) throw new Error(je(9));
    try {
      (l = !0), (i = o(i, g));
    } finally {
      l = !1;
    }
    for (var w = (s = a), y = 0; y < w.length; y++) {
      var p = w[y];
      p();
    }
    return g;
  }
  function m(g) {
    if (typeof g != "function") throw new Error(je(10));
    (o = g), d({ type: ma.REPLACE });
  }
  function h() {
    var g,
      w = f;
    return (
      (g = {
        subscribe: function (p) {
          if (typeof p != "object" || p === null) throw new Error(je(11));
          function v() {
            p.next && p.next(c());
          }
          v();
          var x = w(v);
          return { unsubscribe: x };
        },
      }),
      (g[Mm] = function () {
        return this;
      }),
      g
    );
  }
  return (
    d({ type: ma.INIT }),
    (r = { dispatch: d, subscribe: f, getState: c, replaceReducer: m }),
    (r[Mm] = h),
    r
  );
}
function M5(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: ma.INIT });
    if (typeof r > "u") throw new Error(je(12));
    if (typeof n(void 0, { type: ma.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(je(13));
  });
}
function N5(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var o = t[r];
    typeof e[o] == "function" && (n[o] = e[o]);
  }
  var i = Object.keys(n),
    s;
  try {
    M5(n);
  } catch (a) {
    s = a;
  }
  return function (l, u) {
    if ((l === void 0 && (l = {}), s)) throw s;
    for (var c = !1, f = {}, d = 0; d < i.length; d++) {
      var m = i[d],
        h = n[m],
        g = l[m],
        w = h(g, u);
      if (typeof w > "u") throw (u && u.type, new Error(je(14)));
      (f[m] = w), (c = c || w !== g);
    }
    return (c = c || i.length !== Object.keys(l).length), c ? f : l;
  };
}
function _5() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, o) {
        return function () {
          return r(o.apply(void 0, arguments));
        };
      });
}
function j5() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var o = r.apply(void 0, arguments),
        i = function () {
          throw new Error(je(15));
        },
        s = {
          getState: o.getState,
          dispatch: function () {
            return i.apply(void 0, arguments);
          },
        },
        a = t.map(function (l) {
          return l(s);
        });
      return (
        (i = _5.apply(void 0, a)(o.dispatch)),
        Lm(Lm({}, o), {}, { dispatch: i })
      );
    };
  };
}
const D5 = { count: 0 },
  I5 = (e = D5, t) => {
    var n, r;
    switch (t.type) {
      case N1:
        return { count: e.count + 1 };
      case _1:
        return { count: e.count - 1 };
      case j1:
        return { count: 0 };
      case D1:
        return {
          count: e.count + (((n = t.payload) == null ? void 0 : n.count) || 0),
        };
      case I1:
        return {
          count: e.count - (((r = t.payload) == null ? void 0 : r.count) || 0),
        };
      default:
        return e;
    }
  },
  $5 = { todos: [], deletedTodos: [], isLoading: !1, error: !1 },
  V5 = (e = $5, t) => {
    switch (t.type) {
      case y0:
        return { ...e, isLoading: !0, todos: [], error: !1 };
      case v0:
        return { ...e, todos: t.payload && t.payload.todos, isLoading: !1 };
      case x0:
        return {
          ...e,
          isLoading: !1,
          todos: [],
          error: t.payload && t.payload.error,
        };
      default:
        return e;
    }
  };
function V1(e) {
  var t = function (r) {
    var o = r.dispatch,
      i = r.getState;
    return function (s) {
      return function (a) {
        return typeof a == "function" ? a(o, i, e) : s(a);
      };
    };
  };
  return t;
}
var F1 = V1();
F1.withExtraArgument = V1;
const F5 = F1,
  z5 = N5({ counterReducer: I5, todosReducer: V5 }),
  B5 = $1(z5, j5(F5));
vu.createRoot(document.getElementById("root")).render(
  T.jsx(Ei.StrictMode, {
    children: T.jsx(uC, {
      children: T.jsx(eE, { store: B5, children: T.jsx(T5, {}) }),
    }),
  }),
);
