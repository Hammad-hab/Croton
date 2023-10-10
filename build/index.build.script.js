#!/Users/hammad/.bun/bin/bun
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toCommonJS = (from) => {
  const moduleCache = __toCommonJS.moduleCache ??= new WeakMap;
  var cached = moduleCache.get(from);
  if (cached)
    return cached;
  var to = __defProp({}, "__esModule", { value: true });
  var desc = { enumerable: false };
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key))
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
  }
  moduleCache.set(from, to);
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __require = (id) => {
  return import.meta.require(id);
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);

// node:process
var exports_process = {};
__export(exports_process, {
  default: () => {
    {
      return j;
    }
  }
});
var C, T, q, A, I, Q, S, N, d, h, y, v, f, j;
var init_process = __esm(() => {
  C = Object.create;
  T = Object.defineProperty;
  q = Object.getOwnPropertyDescriptor;
  A = Object.getOwnPropertyNames;
  I = Object.getPrototypeOf;
  Q = Object.prototype.hasOwnProperty;
  S = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  N = (e, t) => {
    for (var n in t)
      T(e, n, { get: t[n], enumerable: true });
  };
  d = (e, t, n, w) => {
    if (t && typeof t == "object" || typeof t == "function")
      for (let l of A(t))
        !Q.call(e, l) && l !== n && T(e, l, { get: () => t[l], enumerable: !(w = q(t, l)) || w.enumerable });
    return e;
  };
  h = (e, t, n) => (d(e, t, "default"), n && d(n, t, "default"));
  y = (e, t, n) => (n = e != null ? C(I(e)) : {}, d(t || !e || !e.__esModule ? T(n, "default", { value: e, enumerable: true }) : n, e));
  v = S((B, E) => {
    var r = E.exports = {}, i, u;
    function p() {
      throw new Error("setTimeout has not been defined");
    }
    function g() {
      throw new Error("clearTimeout has not been defined");
    }
    (function() {
      try {
        typeof setTimeout == "function" ? i = setTimeout : i = p;
      } catch {
        i = p;
      }
      try {
        typeof clearTimeout == "function" ? u = clearTimeout : u = g;
      } catch {
        u = g;
      }
    })();
    function b(e) {
      if (i === setTimeout)
        return setTimeout(e, 0);
      if ((i === p || !i) && setTimeout)
        return i = setTimeout, setTimeout(e, 0);
      try {
        return i(e, 0);
      } catch {
        try {
          return i.call(null, e, 0);
        } catch {
          return i.call(this, e, 0);
        }
      }
    }
    function O(e) {
      if (u === clearTimeout)
        return clearTimeout(e);
      if ((u === g || !u) && clearTimeout)
        return u = clearTimeout, clearTimeout(e);
      try {
        return u(e);
      } catch {
        try {
          return u.call(null, e);
        } catch {
          return u.call(this, e);
        }
      }
    }
    var o = [], s = false, a, m = -1;
    function U() {
      !s || !a || (s = false, a.length ? o = a.concat(o) : m = -1, o.length && x());
    }
    function x() {
      if (!s) {
        var e = b(U);
        s = true;
        for (var t = o.length;t; ) {
          for (a = o, o = [];++m < t; )
            a && a[m].run();
          m = -1, t = o.length;
        }
        a = null, s = false, O(e);
      }
    }
    r.nextTick = function(e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1;n < arguments.length; n++)
          t[n - 1] = arguments[n];
      o.push(new L(e, t)), o.length === 1 && !s && b(x);
    };
    function L(e, t) {
      this.fun = e, this.array = t;
    }
    L.prototype.run = function() {
      this.fun.apply(null, this.array);
    };
    r.title = "browser";
    r.browser = true;
    r.env = {};
    r.argv = [];
    r.version = "";
    r.versions = {};
    function c() {
    }
    r.on = c;
    r.addListener = c;
    r.once = c;
    r.off = c;
    r.removeListener = c;
    r.removeAllListeners = c;
    r.emit = c;
    r.prependListener = c;
    r.prependOnceListener = c;
    r.listeners = function(e) {
      return [];
    };
    r.binding = function(e) {
      throw new Error("process.binding is not supported");
    };
    r.cwd = function() {
      return "/";
    };
    r.chdir = function(e) {
      throw new Error("process.chdir is not supported");
    };
    r.umask = function() {
      return 0;
    };
  });
  f = {};
  N(f, { default: () => j });
  h(f, y(v()));
  j = y(v());
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/src/exceptionUtility.js
var require_exceptionUtility = __commonJS((exports, module) => {
  var { exit } = (init_process(), __toCommonJS(exports_process));

  class Exception2 {
    static PREV_M = false;
    constructor(at, message) {
      this.message = `Error at ${at}:\n${message}`;
    }
    throw() {
      console.log(`\x1B[31m${this.message}\x1B[0m`);
      if (!Exception2.PREV_M) {
        exit(1);
      }
    }
  }
  module.exports = {
    Exception: Exception2
  };
});

// node:os
var exports_os = {};
__export(exports_os, {
  uptime: () => {
    {
      return A2;
    }
  },
  type: () => {
    {
      return V;
    }
  },
  totalmem: () => {
    {
      return N2;
    }
  },
  tmpdir: () => {
    {
      return U;
    }
  },
  release: () => {
    {
      return x;
    }
  },
  platform: () => {
    {
      return O;
    }
  },
  networkInterfaces: () => {
    {
      return j2;
    }
  },
  loadavg: () => {
    {
      return y2;
    }
  },
  hostname: () => {
    {
      return k;
    }
  },
  homedir: () => {
    {
      return _;
    }
  },
  getNetworkInterfaces: () => {
    {
      return B;
    }
  },
  freemem: () => {
    {
      return I2;
    }
  },
  endianness: () => {
    {
      return L;
    }
  },
  default: () => {
    {
      return E;
    }
  },
  cpus: () => {
    {
      return b;
    }
  },
  arch: () => {
    {
      return M;
    }
  },
  EOL: () => {
    {
      return X;
    }
  }
});
var c, a, m, s, p, d2, l, h2, g, f2, u, E, L, k, y2, A2, I2, N2, b, V, x, M, O, U, X, _, j2, B;
var init_os = __esm(() => {
  c = Object.create;
  a = Object.defineProperty;
  m = Object.getOwnPropertyDescriptor;
  s = Object.getOwnPropertyNames;
  p = Object.getPrototypeOf;
  d2 = Object.prototype.hasOwnProperty;
  l = (r, n) => () => (n || r((n = { exports: {} }).exports, n), n.exports);
  h2 = (r, n, t, i) => {
    if (n && typeof n == "object" || typeof n == "function")
      for (let o of s(n))
        !d2.call(r, o) && o !== t && a(r, o, { get: () => n[o], enumerable: !(i = m(n, o)) || i.enumerable });
    return r;
  };
  g = (r, n, t) => (t = r != null ? c(p(r)) : {}, h2(n || !r || !r.__esModule ? a(t, "default", { value: r, enumerable: true }) : t, r));
  f2 = l((e) => {
    e.endianness = function() {
      return "LE";
    };
    e.hostname = function() {
      return typeof location < "u" ? location.hostname : "";
    };
    e.loadavg = function() {
      return [];
    };
    e.uptime = function() {
      return 0;
    };
    e.freemem = function() {
      return Number.MAX_VALUE;
    };
    e.totalmem = function() {
      return Number.MAX_VALUE;
    };
    e.cpus = function() {
      return [];
    };
    e.type = function() {
      return "Browser";
    };
    e.release = function() {
      return typeof navigator < "u" ? navigator.appVersion : "";
    };
    e.networkInterfaces = e.getNetworkInterfaces = function() {
      return {};
    };
    e.arch = function() {
      return "javascript";
    };
    e.platform = function() {
      return "browser";
    };
    e.tmpdir = e.tmpDir = function() {
      return "/tmp";
    };
    e.EOL = `
`;
    e.homedir = function() {
      return "/";
    };
  });
  u = g(f2());
  E = u.default;
  ({ endianness: L, hostname: k, loadavg: y2, uptime: A2, freemem: I2, totalmem: N2, cpus: b, type: V, release: x, arch: M, platform: O, tmpdir: U, EOL: X, homedir: _, networkInterfaces: j2, getNetworkInterfaces: B } = u.default);
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/src/utils.js
var require_utils = __commonJS((exports, module) => {
  var escapeSpecialCharacters = function(inputString) {
    const escapeMap = {
      "\x1B": "\\x1b",
      "\t": "\\t",
      "\b": "\\b",
      "\n": "\\n",
      "\r": "\\r",
      "\\": "\\\\"
    };
    const specialCharacterPattern = /(?<!\\)([\\\x1b\t\b\n\r])/g;
    return inputString.replace(specialCharacterPattern, (match) => {
      if (match === "\\") {
        return "\\\\";
      } else {
        return escapeMap[match];
      }
    });
  };
  var replaceASCIIEscapeSequences = function(inputString) {
    const escapeMap = {
      "\\n": "\n",
      "\\t": "\t",
      "\\r": "\r",
      "\\b": "\b",
      "\\f": "\f",
      "\\\\": "\\",
      "\\\'": "\'",
      "\\\"": "\"",
      "\\x1b[0m": "\x1B[0m",
      "\\x1b[31m": "\x1B[31m",
      "\\x1b[32m": "\x1B[32m",
      "\\x1b[33m": "\x1B[33m",
      "\\x1b[34m": "\x1B[34m",
      "\\x1b[35m": "\x1B[35m",
      "\\x1b[36m": "\x1B[36m",
      "\\x1b[37m": "\x1B[37m",
      "\\x1b[41m": "\x1B[41m",
      "\\x1b[42m": "\x1B[42m",
      "\\x1b[43m": "\x1B[43m",
      "\\x1b[44m": "\x1B[44m",
      "\\x1b[45m": "\x1B[45m",
      "\\x1b[46m": "\x1B[46m",
      "\\x1b[47m": "\x1B[47m"
    };
    const escapePattern = /\\[ntrbf\\'"\x1b[0-9;]*m/g;
    return inputString.replace(escapePattern, (match) => escapeMap[match] || match);
  };
  module.exports = {
    escapeSpecialCharacters,
    replaceASCIIEscapeSequences
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/src/lexer.js
var require_lexer = __commonJS((exports, module) => {
  var tokenize = function(string = "") {
    const tk = [];
    string = string += "\n";
    let cursor = 0;
    while (cursor < string.length) {
      const character = string[cursor];
      if (!character.trim()) {
        cursor += 1;
        continue;
      }
      if (character === "#") {
        let index = cursor;
        let character2 = string[cursor += 1];
        let content = "";
        while (character2 != "#" && character2 != "\n") {
          if (cursor >= 1e4) {
            return new Exception2(index, `Comment is either too long or unterminated`).throw();
          }
          character2 = string[cursor];
          content += character2;
          cursor += 1;
        }
        continue;
      }
      if (character === "<") {
        let character2 = string[cursor += 1];
        let content = "";
        while (character2 != ">") {
          character2 = string[cursor];
          if (character2 === ">") {
            cursor += 1;
            break;
          }
          content += character2;
          cursor += 1;
        }
        const preprocessor = content.split(" ");
        const obj = {
          type: "Preprocesser",
          name: preprocessor[0],
          target: preprocessor[1],
          operation: preprocessor[2]
        };
        tk.push(obj);
        continue;
      }
      if (character.match(/[0-9]|[0-9.0-9]|[\-0-9.0-9]/)) {
        let character2 = string[cursor];
        let content = "";
        while (character2 && character2.trim() && character2.match(/[0-9]|[0-9.0-9]|[\-0-9.0-9]/)) {
          character2 = string[cursor];
          if (character2.match(/[0-9]|[0-9.0-9]|[\-0-9.0-9]/)) {
            content += character2;
          } else {
            break;
          }
          cursor += 1;
        }
        if (content.match(/[0-9.0-9]/)) {
          content = parseFloat(content);
        } else if (content.match(/[0-9]/)) {
          content = parseInt(content);
        }
        tk.push({
          type: "Numeric",
          value: content,
          position: cursor
        });
        continue;
      }
      if (character === ":" || character === "," || character === "|" || character === "=" || character === "{" || character === "}" || character === ">" || character === "<" || character === "~" || (character in ["*", "+", "/", "-"])) {
        tk.push({
          type: "Symbol",
          value: character.trim(),
          position: cursor
        });
        cursor += 1;
        continue;
      }
      if (character === "(" || character === ")") {
        tk.push({
          type: "Parenthesis",
          value: character.trim(),
          position: cursor,
          isOpening: character === "("
        });
        cursor += 1;
        continue;
      }
      if (character === "'" || character === '"') {
        let character2 = string[cursor += 1];
        let content = ``;
        while (character2 != '"') {
          character2 = string[cursor];
          content += character2;
          cursor += 1;
        }
        let value;
        value = content.slice(0, content.length - 1);
        tk.push({
          type: "String",
          value,
          position: cursor
        });
        continue;
      }
      if (character.match(/[A-Za-z]|[A-Z\-a-z0-9]|[A-z_a-z0-9]/)) {
        let character2 = string[cursor];
        let content = "";
        while (character2 && character2.match(/[A-Za-z]|[A-Z\-a-z0-9]|[A-z_a-z0-9]/) && character2.trim()) {
          character2 = string[cursor];
          if (character2.match(/[A-Za-z]|[A-Z\-a-z0-9]|[A-z_a-z0-9]/)) {
            content += character2;
          } else {
            break;
          }
          cursor += 1;
        }
        tk.push({
          type: "Name",
          value: content,
          position: cursor
        });
        continue;
      }
      return new Exception2(cursor, `Undefined token ${character} at ${cursor}:${character.length}`).throw();
    }
    return tk;
  };
  var { Exception: Exception2 } = require_exceptionUtility();
  var { replaceASCIIEscapeSequences, escapeSpecialCharacters } = require_utils();
  module.exports = {
    tokenize
  };
});

// node:assert
var require_assert = __commonJS(() => {
  var _i = Object.create;
  var xe = Object.defineProperty;
  var Ui = Object.getOwnPropertyDescriptor;
  var Mi = Object.getOwnPropertyNames;
  var $i = Object.getPrototypeOf;
  var Gi = Object.prototype.hasOwnProperty;
  var ki = (e, r) => () => (e && (r = e(e = 0)), r);
  var p2 = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
  var Li = (e, r) => {
    for (var t in r)
      xe(e, t, { get: r[t], enumerable: true });
  };
  var Ne = (e, r, t, n) => {
    if (r && typeof r == "object" || typeof r == "function")
      for (let o of Mi(r))
        !Gi.call(e, o) && o !== t && xe(e, o, { get: () => r[o], enumerable: !(n = Ui(r, o)) || n.enumerable });
    return e;
  };
  var B2 = (e, r, t) => (Ne(e, r, "default"), t && Ne(t, r, "default"));
  var wt = (e, r, t) => (t = e != null ? _i($i(e)) : {}, Ne(r || !e || !e.__esModule ? xe(t, "default", { value: e, enumerable: true }) : t, e));
  var ce = (e) => Ne(xe({}, "__esModule", { value: true }), e);
  var Fe = p2((mc, At) => {
    At.exports = function() {
      if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
        return false;
      if (typeof Symbol.iterator == "symbol")
        return true;
      var r = {}, t = Symbol("test"), n = Object(t);
      if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
        return false;
      var o = 42;
      r[t] = o;
      for (t in r)
        return false;
      if (typeof Object.keys == "function" && Object.keys(r).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(r).length !== 0)
        return false;
      var i = Object.getOwnPropertySymbols(r);
      if (i.length !== 1 || i[0] !== t || !Object.prototype.propertyIsEnumerable.call(r, t))
        return false;
      if (typeof Object.getOwnPropertyDescriptor == "function") {
        var a2 = Object.getOwnPropertyDescriptor(r, t);
        if (a2.value !== o || a2.enumerable !== true)
          return false;
      }
      return true;
    };
  });
  var De = p2((vc, Et) => {
    var Vi = Fe();
    Et.exports = function() {
      return Vi() && !!Symbol.toStringTag;
    };
  });
  var qt = p2((Sc, Pt) => {
    var jt = typeof Symbol < "u" && Symbol, Wi = Fe();
    Pt.exports = function() {
      return typeof jt != "function" || typeof Symbol != "function" || typeof jt("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? false : Wi();
    };
  });
  var Tt = p2((Oc, Rt) => {
    var It = { foo: {} }, zi = Object;
    Rt.exports = function() {
      return { __proto__: It }.foo === It.foo && !({ __proto__: null } instanceof zi);
    };
  });
  var xt = p2((wc, Nt) => {
    var Ci = "Function.prototype.bind called on incompatible ", jr = Array.prototype.slice, Hi = Object.prototype.toString, Ji = "[object Function]";
    Nt.exports = function(r) {
      var t = this;
      if (typeof t != "function" || Hi.call(t) !== Ji)
        throw new TypeError(Ci + t);
      for (var n = jr.call(arguments, 1), o, i = function() {
        if (this instanceof o) {
          var s2 = t.apply(this, n.concat(jr.call(arguments)));
          return Object(s2) === s2 ? s2 : this;
        } else
          return t.apply(r, n.concat(jr.call(arguments)));
      }, a2 = Math.max(0, t.length - n.length), u2 = [], f3 = 0;f3 < a2; f3++)
        u2.push("$" + f3);
      if (o = Function("binder", "return function (" + u2.join(",") + "){ return binder.apply(this,arguments); }")(i), t.prototype) {
        var c2 = function() {
        };
        c2.prototype = t.prototype, o.prototype = new c2, c2.prototype = null;
      }
      return o;
    };
  });
  var Be = p2((Ac, Ft) => {
    var Yi = xt();
    Ft.exports = Function.prototype.bind || Yi;
  });
  var Bt = p2((Ec, Dt) => {
    var Xi = Be();
    Dt.exports = Xi.call(Function.call, Object.prototype.hasOwnProperty);
  });
  var Q2 = p2((jc, Gt) => {
    var d3, Z = SyntaxError, $t = Function, X2 = TypeError, Pr = function(e) {
      try {
        return $t('"use strict"; return (' + e + ").constructor;")();
      } catch {
      }
    }, L2 = Object.getOwnPropertyDescriptor;
    if (L2)
      try {
        L2({}, "");
      } catch {
        L2 = null;
      }
    var qr = function() {
      throw new X2;
    }, Zi = L2 ? function() {
      try {
        return arguments.callee, qr;
      } catch {
        try {
          return L2(arguments, "callee").get;
        } catch {
          return qr;
        }
      }
    }() : qr, J = qt()(), Qi = Tt()(), O2 = Object.getPrototypeOf || (Qi ? function(e) {
      return e.__proto__;
    } : null), Y = {}, Ki = typeof Uint8Array > "u" || !O2 ? d3 : O2(Uint8Array), V2 = { "%AggregateError%": typeof AggregateError > "u" ? d3 : AggregateError, "%Array%": Array, "%ArrayBuffer%": typeof ArrayBuffer > "u" ? d3 : ArrayBuffer, "%ArrayIteratorPrototype%": J && O2 ? O2([][Symbol.iterator]()) : d3, "%AsyncFromSyncIteratorPrototype%": d3, "%AsyncFunction%": Y, "%AsyncGenerator%": Y, "%AsyncGeneratorFunction%": Y, "%AsyncIteratorPrototype%": Y, "%Atomics%": typeof Atomics > "u" ? d3 : Atomics, "%BigInt%": typeof BigInt > "u" ? d3 : BigInt, "%BigInt64Array%": typeof BigInt64Array > "u" ? d3 : BigInt64Array, "%BigUint64Array%": typeof BigUint64Array > "u" ? d3 : BigUint64Array, "%Boolean%": Boolean, "%DataView%": typeof DataView > "u" ? d3 : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": Error, "%eval%": eval, "%EvalError%": EvalError, "%Float32Array%": typeof Float32Array > "u" ? d3 : Float32Array, "%Float64Array%": typeof Float64Array > "u" ? d3 : Float64Array, "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? d3 : FinalizationRegistry, "%Function%": $t, "%GeneratorFunction%": Y, "%Int8Array%": typeof Int8Array > "u" ? d3 : Int8Array, "%Int16Array%": typeof Int16Array > "u" ? d3 : Int16Array, "%Int32Array%": typeof Int32Array > "u" ? d3 : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": J && O2 ? O2(O2([][Symbol.iterator]())) : d3, "%JSON%": typeof JSON == "object" ? JSON : d3, "%Map%": typeof Map > "u" ? d3 : Map, "%MapIteratorPrototype%": typeof Map > "u" || !J || !O2 ? d3 : O2(new Map()[Symbol.iterator]()), "%Math%": Math, "%Number%": Number, "%Object%": Object, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": typeof Promise > "u" ? d3 : Promise, "%Proxy%": typeof Proxy > "u" ? d3 : Proxy, "%RangeError%": RangeError, "%ReferenceError%": ReferenceError, "%Reflect%": typeof Reflect > "u" ? d3 : Reflect, "%RegExp%": RegExp, "%Set%": typeof Set > "u" ? d3 : Set, "%SetIteratorPrototype%": typeof Set > "u" || !J || !O2 ? d3 : O2(new Set()[Symbol.iterator]()), "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? d3 : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": J && O2 ? O2(""[Symbol.iterator]()) : d3, "%Symbol%": J ? Symbol : d3, "%SyntaxError%": Z, "%ThrowTypeError%": Zi, "%TypedArray%": Ki, "%TypeError%": X2, "%Uint8Array%": typeof Uint8Array > "u" ? d3 : Uint8Array, "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? d3 : Uint8ClampedArray, "%Uint16Array%": typeof Uint16Array > "u" ? d3 : Uint16Array, "%Uint32Array%": typeof Uint32Array > "u" ? d3 : Uint32Array, "%URIError%": URIError, "%WeakMap%": typeof WeakMap > "u" ? d3 : WeakMap, "%WeakRef%": typeof WeakRef > "u" ? d3 : WeakRef, "%WeakSet%": typeof WeakSet > "u" ? d3 : WeakSet };
    if (O2)
      try {
        null.error;
      } catch (e) {
        _t = O2(O2(e)), V2["%Error.prototype%"] = _t;
      }
    var _t, ea = function e(r) {
      var t;
      if (r === "%AsyncFunction%")
        t = Pr("async function () {}");
      else if (r === "%GeneratorFunction%")
        t = Pr("function* () {}");
      else if (r === "%AsyncGeneratorFunction%")
        t = Pr("async function* () {}");
      else if (r === "%AsyncGenerator%") {
        var n = e("%AsyncGeneratorFunction%");
        n && (t = n.prototype);
      } else if (r === "%AsyncIteratorPrototype%") {
        var o = e("%AsyncGenerator%");
        o && O2 && (t = O2(o.prototype));
      }
      return V2[r] = t, t;
    }, Ut = { "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] }, se = Be(), _e = Bt(), ra = se.call(Function.call, Array.prototype.concat), ta = se.call(Function.apply, Array.prototype.splice), Mt = se.call(Function.call, String.prototype.replace), Ue = se.call(Function.call, String.prototype.slice), na = se.call(Function.call, RegExp.prototype.exec), oa = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ia = /\\(\\)?/g, aa = function(r) {
      var t = Ue(r, 0, 1), n = Ue(r, -1);
      if (t === "%" && n !== "%")
        throw new Z("invalid intrinsic syntax, expected closing `%`");
      if (n === "%" && t !== "%")
        throw new Z("invalid intrinsic syntax, expected opening `%`");
      var o = [];
      return Mt(r, oa, function(i, a2, u2, f3) {
        o[o.length] = u2 ? Mt(f3, ia, "$1") : a2 || i;
      }), o;
    }, ua = function(r, t) {
      var n = r, o;
      if (_e(Ut, n) && (o = Ut[n], n = "%" + o[0] + "%"), _e(V2, n)) {
        var i = V2[n];
        if (i === Y && (i = ea(n)), typeof i > "u" && !t)
          throw new X2("intrinsic " + r + " exists, but is not available. Please file an issue!");
        return { alias: o, name: n, value: i };
      }
      throw new Z("intrinsic " + r + " does not exist!");
    };
    Gt.exports = function(r, t) {
      if (typeof r != "string" || r.length === 0)
        throw new X2("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && typeof t != "boolean")
        throw new X2('"allowMissing" argument must be a boolean');
      if (na(/^%?[^%]*%?$/, r) === null)
        throw new Z("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      var n = aa(r), o = n.length > 0 ? n[0] : "", i = ua("%" + o + "%", t), a2 = i.name, u2 = i.value, f3 = false, c2 = i.alias;
      c2 && (o = c2[0], ta(n, ra([0, 1], c2)));
      for (var s2 = 1, l2 = true;s2 < n.length; s2 += 1) {
        var y3 = n[s2], v2 = Ue(y3, 0, 1), h3 = Ue(y3, -1);
        if ((v2 === '"' || v2 === "'" || v2 === "`" || h3 === '"' || h3 === "'" || h3 === "`") && v2 !== h3)
          throw new Z("property names with quotes must have matching quotes");
        if ((y3 === "constructor" || !l2) && (f3 = true), o += "." + y3, a2 = "%" + o + "%", _e(V2, a2))
          u2 = V2[a2];
        else if (u2 != null) {
          if (!(y3 in u2)) {
            if (!t)
              throw new X2("base intrinsic for " + r + " exists, but the property is not available.");
            return;
          }
          if (L2 && s2 + 1 >= n.length) {
            var S2 = L2(u2, y3);
            l2 = !!S2, l2 && ("get" in S2) && !("originalValue" in S2.get) ? u2 = S2.get : u2 = u2[y3];
          } else
            l2 = _e(u2, y3), u2 = u2[y3];
          l2 && !f3 && (V2[a2] = u2);
        }
      }
      return u2;
    };
  });
  var le = p2((Pc, Me) => {
    var Ir = Be(), K = Q2(), Vt = K("%Function.prototype.apply%"), Wt = K("%Function.prototype.call%"), zt = K("%Reflect.apply%", true) || Ir.call(Wt, Vt), kt = K("%Object.getOwnPropertyDescriptor%", true), W = K("%Object.defineProperty%", true), fa = K("%Math.max%");
    if (W)
      try {
        W({}, "a", { value: 1 });
      } catch {
        W = null;
      }
    Me.exports = function(r) {
      var t = zt(Ir, Wt, arguments);
      if (kt && W) {
        var n = kt(t, "length");
        n.configurable && W(t, "length", { value: 1 + fa(0, r.length - (arguments.length - 1)) });
      }
      return t;
    };
    var Lt = function() {
      return zt(Ir, Vt, arguments);
    };
    W ? W(Me.exports, "apply", { value: Lt }) : Me.exports.apply = Lt;
  });
  var pe = p2((qc, Jt) => {
    var Ct = Q2(), Ht = le(), ca = Ht(Ct("String.prototype.indexOf"));
    Jt.exports = function(r, t) {
      var n = Ct(r, !!t);
      return typeof n == "function" && ca(r, ".prototype.") > -1 ? Ht(n) : n;
    };
  });
  var Zt = p2((Ic, Xt) => {
    var sa = De()(), la = pe(), Rr = la("Object.prototype.toString"), $e = function(r) {
      return sa && r && typeof r == "object" && (Symbol.toStringTag in r) ? false : Rr(r) === "[object Arguments]";
    }, Yt = function(r) {
      return $e(r) ? true : r !== null && typeof r == "object" && typeof r.length == "number" && r.length >= 0 && Rr(r) !== "[object Array]" && Rr(r.callee) === "[object Function]";
    }, pa = function() {
      return $e(arguments);
    }();
    $e.isLegacyArguments = Yt;
    Xt.exports = pa ? $e : Yt;
  });
  var en = p2((Rc, Kt) => {
    var ya = Object.prototype.toString, ga = Function.prototype.toString, ba = /^\s*(?:function)?\*/, Qt = De()(), Tr = Object.getPrototypeOf, da = function() {
      if (!Qt)
        return false;
      try {
        return Function("return function*() {}")();
      } catch {
      }
    }, Nr;
    Kt.exports = function(r) {
      if (typeof r != "function")
        return false;
      if (ba.test(ga.call(r)))
        return true;
      if (!Qt) {
        var t = ya.call(r);
        return t === "[object GeneratorFunction]";
      }
      if (!Tr)
        return false;
      if (typeof Nr > "u") {
        var n = da();
        Nr = n ? Tr(n) : false;
      }
      return Tr(r) === Nr;
    };
  });
  var on = p2((Tc, nn) => {
    var tn = Function.prototype.toString, ee = typeof Reflect == "object" && Reflect !== null && Reflect.apply, Fr, Ge;
    if (typeof ee == "function" && typeof Object.defineProperty == "function")
      try {
        Fr = Object.defineProperty({}, "length", { get: function() {
          throw Ge;
        } }), Ge = {}, ee(function() {
          throw 42;
        }, null, Fr);
      } catch (e) {
        e !== Ge && (ee = null);
      }
    else
      ee = null;
    var ha = /^\s*class\b/, Dr = function(r) {
      try {
        var t = tn.call(r);
        return ha.test(t);
      } catch {
        return false;
      }
    }, xr = function(r) {
      try {
        return Dr(r) ? false : (tn.call(r), true);
      } catch {
        return false;
      }
    }, ke = Object.prototype.toString, ma = "[object Object]", va = "[object Function]", Sa = "[object GeneratorFunction]", Oa = "[object HTMLAllCollection]", wa = "[object HTML document.all class]", Aa = "[object HTMLCollection]", Ea = typeof Symbol == "function" && !!Symbol.toStringTag, ja = !(0 in [,]), Br = function() {
      return false;
    };
    typeof document == "object" && (rn = document.all, ke.call(rn) === ke.call(document.all) && (Br = function(r) {
      if ((ja || !r) && (typeof r > "u" || typeof r == "object"))
        try {
          var t = ke.call(r);
          return (t === Oa || t === wa || t === Aa || t === ma) && r("") == null;
        } catch {
        }
      return false;
    }));
    var rn;
    nn.exports = ee ? function(r) {
      if (Br(r))
        return true;
      if (!r || typeof r != "function" && typeof r != "object")
        return false;
      try {
        ee(r, null, Fr);
      } catch (t) {
        if (t !== Ge)
          return false;
      }
      return !Dr(r) && xr(r);
    } : function(r) {
      if (Br(r))
        return true;
      if (!r || typeof r != "function" && typeof r != "object")
        return false;
      if (Ea)
        return xr(r);
      if (Dr(r))
        return false;
      var t = ke.call(r);
      return t !== va && t !== Sa && !/^\[object HTML/.test(t) ? false : xr(r);
    };
  });
  var fn = p2((Nc, un) => {
    var Pa = on(), qa = Object.prototype.toString, an = Object.prototype.hasOwnProperty, Ia = function(r, t, n) {
      for (var o = 0, i = r.length;o < i; o++)
        an.call(r, o) && (n == null ? t(r[o], o, r) : t.call(n, r[o], o, r));
    }, Ra = function(r, t, n) {
      for (var o = 0, i = r.length;o < i; o++)
        n == null ? t(r.charAt(o), o, r) : t.call(n, r.charAt(o), o, r);
    }, Ta = function(r, t, n) {
      for (var o in r)
        an.call(r, o) && (n == null ? t(r[o], o, r) : t.call(n, r[o], o, r));
    }, Na = function(r, t, n) {
      if (!Pa(t))
        throw new TypeError("iterator must be a function");
      var o;
      arguments.length >= 3 && (o = n), qa.call(r) === "[object Array]" ? Ia(r, t, o) : typeof r == "string" ? Ra(r, t, o) : Ta(r, t, o);
    };
    un.exports = Na;
  });
  var sn = p2((xc, cn) => {
    var _r = ["BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray"], xa = typeof globalThis > "u" ? global : globalThis;
    cn.exports = function() {
      for (var r = [], t = 0;t < _r.length; t++)
        typeof xa[_r[t]] == "function" && (r[r.length] = _r[t]);
      return r;
    };
  });
  var Ur = p2((Fc, ln) => {
    var Fa = Q2(), Le = Fa("%Object.getOwnPropertyDescriptor%", true);
    if (Le)
      try {
        Le([], "length");
      } catch {
        Le = null;
      }
    ln.exports = Le;
  });
  var Lr = p2((Dc, bn) => {
    var We = fn(), Da = sn(), pn = le(), Gr = pe(), Ve = Ur(), Ba = Gr("Object.prototype.toString"), gn = De()(), yn = typeof globalThis > "u" ? global : globalThis, $r = Da(), kr = Gr("String.prototype.slice"), Mr = Object.getPrototypeOf, _a = Gr("Array.prototype.indexOf", true) || function(r, t) {
      for (var n = 0;n < r.length; n += 1)
        if (r[n] === t)
          return n;
      return -1;
    }, ze = { __proto__: null };
    gn && Ve && Mr ? We($r, function(e) {
      var r = new yn[e];
      if (Symbol.toStringTag in r) {
        var t = Mr(r), n = Ve(t, Symbol.toStringTag);
        if (!n) {
          var o = Mr(t);
          n = Ve(o, Symbol.toStringTag);
        }
        ze["$" + e] = pn(n.get);
      }
    }) : We($r, function(e) {
      var r = new yn[e];
      ze["$" + e] = pn(r.slice);
    });
    var Ua = function(r) {
      var t = false;
      return We(ze, function(n, o) {
        if (!t)
          try {
            "$" + n(r) === o && (t = kr(o, 1));
          } catch {
          }
      }), t;
    }, Ma = function(r) {
      var t = false;
      return We(ze, function(n, o) {
        if (!t)
          try {
            n(r), t = kr(o, 1);
          } catch {
          }
      }), t;
    };
    bn.exports = function(r) {
      if (!r || typeof r != "object")
        return false;
      if (!gn) {
        var t = kr(Ba(r), 8, -1);
        return _a($r, t) > -1 ? t : t !== "Object" ? false : Ma(r);
      }
      return Ve ? Ua(r) : null;
    };
  });
  var hn = p2((Bc, dn) => {
    var $a = Lr();
    dn.exports = function(r) {
      return !!$a(r);
    };
  });
  var Nn = p2((g2) => {
    var Ga = Zt(), ka = en(), T2 = Lr(), mn = hn();
    function re(e) {
      return e.call.bind(e);
    }
    var vn = typeof BigInt < "u", Sn = typeof Symbol < "u", j3 = re(Object.prototype.toString), La = re(Number.prototype.valueOf), Va = re(String.prototype.valueOf), Wa = re(Boolean.prototype.valueOf);
    vn && (On = re(BigInt.prototype.valueOf));
    var On;
    Sn && (wn = re(Symbol.prototype.valueOf));
    var wn;
    function ge(e, r) {
      if (typeof e != "object")
        return false;
      try {
        return r(e), true;
      } catch {
        return false;
      }
    }
    g2.isArgumentsObject = Ga;
    g2.isGeneratorFunction = ka;
    g2.isTypedArray = mn;
    function za(e) {
      return typeof Promise < "u" && e instanceof Promise || e !== null && typeof e == "object" && typeof e.then == "function" && typeof e.catch == "function";
    }
    g2.isPromise = za;
    function Ca(e) {
      return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : mn(e) || En(e);
    }
    g2.isArrayBufferView = Ca;
    function Ha(e) {
      return T2(e) === "Uint8Array";
    }
    g2.isUint8Array = Ha;
    function Ja(e) {
      return T2(e) === "Uint8ClampedArray";
    }
    g2.isUint8ClampedArray = Ja;
    function Ya(e) {
      return T2(e) === "Uint16Array";
    }
    g2.isUint16Array = Ya;
    function Xa(e) {
      return T2(e) === "Uint32Array";
    }
    g2.isUint32Array = Xa;
    function Za(e) {
      return T2(e) === "Int8Array";
    }
    g2.isInt8Array = Za;
    function Qa(e) {
      return T2(e) === "Int16Array";
    }
    g2.isInt16Array = Qa;
    function Ka(e) {
      return T2(e) === "Int32Array";
    }
    g2.isInt32Array = Ka;
    function eu(e) {
      return T2(e) === "Float32Array";
    }
    g2.isFloat32Array = eu;
    function ru(e) {
      return T2(e) === "Float64Array";
    }
    g2.isFloat64Array = ru;
    function tu(e) {
      return T2(e) === "BigInt64Array";
    }
    g2.isBigInt64Array = tu;
    function nu(e) {
      return T2(e) === "BigUint64Array";
    }
    g2.isBigUint64Array = nu;
    function Ce(e) {
      return j3(e) === "[object Map]";
    }
    Ce.working = typeof Map < "u" && Ce(new Map);
    function ou(e) {
      return typeof Map > "u" ? false : Ce.working ? Ce(e) : e instanceof Map;
    }
    g2.isMap = ou;
    function He(e) {
      return j3(e) === "[object Set]";
    }
    He.working = typeof Set < "u" && He(new Set);
    function iu(e) {
      return typeof Set > "u" ? false : He.working ? He(e) : e instanceof Set;
    }
    g2.isSet = iu;
    function Je(e) {
      return j3(e) === "[object WeakMap]";
    }
    Je.working = typeof WeakMap < "u" && Je(new WeakMap);
    function au(e) {
      return typeof WeakMap > "u" ? false : Je.working ? Je(e) : e instanceof WeakMap;
    }
    g2.isWeakMap = au;
    function Wr(e) {
      return j3(e) === "[object WeakSet]";
    }
    Wr.working = typeof WeakSet < "u" && Wr(new WeakSet);
    function uu(e) {
      return Wr(e);
    }
    g2.isWeakSet = uu;
    function Ye(e) {
      return j3(e) === "[object ArrayBuffer]";
    }
    Ye.working = typeof ArrayBuffer < "u" && Ye(new ArrayBuffer);
    function An(e) {
      return typeof ArrayBuffer > "u" ? false : Ye.working ? Ye(e) : e instanceof ArrayBuffer;
    }
    g2.isArrayBuffer = An;
    function Xe(e) {
      return j3(e) === "[object DataView]";
    }
    Xe.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && Xe(new DataView(new ArrayBuffer(1), 0, 1));
    function En(e) {
      return typeof DataView > "u" ? false : Xe.working ? Xe(e) : e instanceof DataView;
    }
    g2.isDataView = En;
    var Vr = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : undefined;
    function ye(e) {
      return j3(e) === "[object SharedArrayBuffer]";
    }
    function jn(e) {
      return typeof Vr > "u" ? false : (typeof ye.working > "u" && (ye.working = ye(new Vr)), ye.working ? ye(e) : e instanceof Vr);
    }
    g2.isSharedArrayBuffer = jn;
    function fu(e) {
      return j3(e) === "[object AsyncFunction]";
    }
    g2.isAsyncFunction = fu;
    function cu(e) {
      return j3(e) === "[object Map Iterator]";
    }
    g2.isMapIterator = cu;
    function su(e) {
      return j3(e) === "[object Set Iterator]";
    }
    g2.isSetIterator = su;
    function lu(e) {
      return j3(e) === "[object Generator]";
    }
    g2.isGeneratorObject = lu;
    function pu(e) {
      return j3(e) === "[object WebAssembly.Module]";
    }
    g2.isWebAssemblyCompiledModule = pu;
    function Pn(e) {
      return ge(e, La);
    }
    g2.isNumberObject = Pn;
    function qn(e) {
      return ge(e, Va);
    }
    g2.isStringObject = qn;
    function In(e) {
      return ge(e, Wa);
    }
    g2.isBooleanObject = In;
    function Rn(e) {
      return vn && ge(e, On);
    }
    g2.isBigIntObject = Rn;
    function Tn(e) {
      return Sn && ge(e, wn);
    }
    g2.isSymbolObject = Tn;
    function yu(e) {
      return Pn(e) || qn(e) || In(e) || Rn(e) || Tn(e);
    }
    g2.isBoxedPrimitive = yu;
    function gu(e) {
      return typeof Uint8Array < "u" && (An(e) || jn(e));
    }
    g2.isAnyArrayBuffer = gu;
    ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(e) {
      Object.defineProperty(g2, e, { enumerable: false, value: function() {
        throw new Error(e + " is not supported in userland");
      } });
    });
  });
  var Fn = p2((Uc, xn) => {
    xn.exports = function(r) {
      return r && typeof r == "object" && typeof r.copy == "function" && typeof r.fill == "function" && typeof r.readUInt8 == "function";
    };
  });
  var Dn = p2((Mc, zr) => {
    typeof Object.create == "function" ? zr.exports = function(r, t) {
      t && (r.super_ = t, r.prototype = Object.create(t.prototype, { constructor: { value: r, enumerable: false, writable: true, configurable: true } }));
    } : zr.exports = function(r, t) {
      if (t) {
        r.super_ = t;
        var n = function() {
        };
        n.prototype = t.prototype, r.prototype = new n, r.prototype.constructor = r;
      }
    };
  });
  var Gn = p2((b2) => {
    var Bn = Object.getOwnPropertyDescriptors || function(r) {
      for (var t = Object.keys(r), n = {}, o = 0;o < t.length; o++)
        n[t[o]] = Object.getOwnPropertyDescriptor(r, t[o]);
      return n;
    }, bu = /%[sdj%]/g;
    b2.format = function(e) {
      if (!nr(e)) {
        for (var r = [], t = 0;t < arguments.length; t++)
          r.push(_2(arguments[t]));
        return r.join(" ");
      }
      for (var t = 1, n = arguments, o = n.length, i = String(e).replace(bu, function(u2) {
        if (u2 === "%%")
          return "%";
        if (t >= o)
          return u2;
        switch (u2) {
          case "%s":
            return String(n[t++]);
          case "%d":
            return Number(n[t++]);
          case "%j":
            try {
              return JSON.stringify(n[t++]);
            } catch {
              return "[Circular]";
            }
          default:
            return u2;
        }
      }), a2 = n[t];t < o; a2 = n[++t])
        tr(a2) || !te(a2) ? i += " " + a2 : i += " " + _2(a2);
      return i;
    };
    b2.deprecate = function(e, r) {
      if (typeof process < "u" && process.noDeprecation === true)
        return e;
      if (typeof process > "u")
        return function() {
          return b2.deprecate(e, r).apply(this, arguments);
        };
      var t = false;
      function n() {
        if (!t) {
          if (process.throwDeprecation)
            throw new Error(r);
          process.traceDeprecation ? console.trace(r) : console.error(r), t = true;
        }
        return e.apply(this, arguments);
      }
      return n;
    };
    var Ze = {}, _n = /^$/;
    process.env.NODE_DEBUG && (Qe = process.env.NODE_DEBUG, Qe = Qe.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), _n = new RegExp("^" + Qe + "$", "i"));
    var Qe;
    b2.debuglog = function(e) {
      if (e = e.toUpperCase(), !Ze[e])
        if (_n.test(e)) {
          var r = process.pid;
          Ze[e] = function() {
            var t = b2.format.apply(b2, arguments);
            console.error("%s %d: %s", e, r, t);
          };
        } else
          Ze[e] = function() {
          };
      return Ze[e];
    };
    function _2(e, r) {
      var t = { seen: [], stylize: hu };
      return arguments.length >= 3 && (t.depth = arguments[2]), arguments.length >= 4 && (t.colors = arguments[3]), Yr(r) ? t.showHidden = r : r && b2._extend(t, r), C2(t.showHidden) && (t.showHidden = false), C2(t.depth) && (t.depth = 2), C2(t.colors) && (t.colors = false), C2(t.customInspect) && (t.customInspect = true), t.colors && (t.stylize = du), er(t, e, t.depth);
    }
    b2.inspect = _2;
    _2.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] };
    _2.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" };
    function du(e, r) {
      var t = _2.styles[r];
      return t ? "\x1B[" + _2.colors[t][0] + "m" + e + "\x1B[" + _2.colors[t][1] + "m" : e;
    }
    function hu(e, r) {
      return e;
    }
    function mu(e) {
      var r = {};
      return e.forEach(function(t, n) {
        r[t] = true;
      }), r;
    }
    function er(e, r, t) {
      if (e.customInspect && r && Ke(r.inspect) && r.inspect !== b2.inspect && !(r.constructor && r.constructor.prototype === r)) {
        var n = r.inspect(t, e);
        return nr(n) || (n = er(e, n, t)), n;
      }
      var o = vu(e, r);
      if (o)
        return o;
      var i = Object.keys(r), a2 = mu(i);
      if (e.showHidden && (i = Object.getOwnPropertyNames(r)), de(r) && (i.indexOf("message") >= 0 || i.indexOf("description") >= 0))
        return Cr(r);
      if (i.length === 0) {
        if (Ke(r)) {
          var u2 = r.name ? ": " + r.name : "";
          return e.stylize("[Function" + u2 + "]", "special");
        }
        if (be(r))
          return e.stylize(RegExp.prototype.toString.call(r), "regexp");
        if (rr(r))
          return e.stylize(Date.prototype.toString.call(r), "date");
        if (de(r))
          return Cr(r);
      }
      var f3 = "", c2 = false, s2 = ["{", "}"];
      if (Un(r) && (c2 = true, s2 = ["[", "]"]), Ke(r)) {
        var l2 = r.name ? ": " + r.name : "";
        f3 = " [Function" + l2 + "]";
      }
      if (be(r) && (f3 = " " + RegExp.prototype.toString.call(r)), rr(r) && (f3 = " " + Date.prototype.toUTCString.call(r)), de(r) && (f3 = " " + Cr(r)), i.length === 0 && (!c2 || r.length == 0))
        return s2[0] + f3 + s2[1];
      if (t < 0)
        return be(r) ? e.stylize(RegExp.prototype.toString.call(r), "regexp") : e.stylize("[Object]", "special");
      e.seen.push(r);
      var y3;
      return c2 ? y3 = Su(e, r, t, a2, i) : y3 = i.map(function(v2) {
        return Jr(e, r, t, a2, v2, c2);
      }), e.seen.pop(), Ou(y3, f3, s2);
    }
    function vu(e, r) {
      if (C2(r))
        return e.stylize("undefined", "undefined");
      if (nr(r)) {
        var t = "'" + JSON.stringify(r).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return e.stylize(t, "string");
      }
      if (Mn(r))
        return e.stylize("" + r, "number");
      if (Yr(r))
        return e.stylize("" + r, "boolean");
      if (tr(r))
        return e.stylize("null", "null");
    }
    function Cr(e) {
      return "[" + Error.prototype.toString.call(e) + "]";
    }
    function Su(e, r, t, n, o) {
      for (var i = [], a2 = 0, u2 = r.length;a2 < u2; ++a2)
        $n(r, String(a2)) ? i.push(Jr(e, r, t, n, String(a2), true)) : i.push("");
      return o.forEach(function(f3) {
        f3.match(/^\d+$/) || i.push(Jr(e, r, t, n, f3, true));
      }), i;
    }
    function Jr(e, r, t, n, o, i) {
      var a2, u2, f3;
      if (f3 = Object.getOwnPropertyDescriptor(r, o) || { value: r[o] }, f3.get ? f3.set ? u2 = e.stylize("[Getter/Setter]", "special") : u2 = e.stylize("[Getter]", "special") : f3.set && (u2 = e.stylize("[Setter]", "special")), $n(n, o) || (a2 = "[" + o + "]"), u2 || (e.seen.indexOf(f3.value) < 0 ? (tr(t) ? u2 = er(e, f3.value, null) : u2 = er(e, f3.value, t - 1), u2.indexOf(`
`) > -1 && (i ? u2 = u2.split(`
`).map(function(c2) {
        return "  " + c2;
      }).join(`
`).slice(2) : u2 = `
` + u2.split(`
`).map(function(c2) {
        return "   " + c2;
      }).join(`
`))) : u2 = e.stylize("[Circular]", "special")), C2(a2)) {
        if (i && o.match(/^\d+$/))
          return u2;
        a2 = JSON.stringify("" + o), a2.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a2 = a2.slice(1, -1), a2 = e.stylize(a2, "name")) : (a2 = a2.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a2 = e.stylize(a2, "string"));
      }
      return a2 + ": " + u2;
    }
    function Ou(e, r, t) {
      var n = 0, o = e.reduce(function(i, a2) {
        return n++, a2.indexOf(`
`) >= 0 && n++, i + a2.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
      return o > 60 ? t[0] + (r === "" ? "" : r + `
 `) + " " + e.join(`,
  `) + " " + t[1] : t[0] + r + " " + e.join(", ") + " " + t[1];
    }
    b2.types = Nn();
    function Un(e) {
      return Array.isArray(e);
    }
    b2.isArray = Un;
    function Yr(e) {
      return typeof e == "boolean";
    }
    b2.isBoolean = Yr;
    function tr(e) {
      return e === null;
    }
    b2.isNull = tr;
    function wu(e) {
      return e == null;
    }
    b2.isNullOrUndefined = wu;
    function Mn(e) {
      return typeof e == "number";
    }
    b2.isNumber = Mn;
    function nr(e) {
      return typeof e == "string";
    }
    b2.isString = nr;
    function Au(e) {
      return typeof e == "symbol";
    }
    b2.isSymbol = Au;
    function C2(e) {
      return e === undefined;
    }
    b2.isUndefined = C2;
    function be(e) {
      return te(e) && Xr(e) === "[object RegExp]";
    }
    b2.isRegExp = be;
    b2.types.isRegExp = be;
    function te(e) {
      return typeof e == "object" && e !== null;
    }
    b2.isObject = te;
    function rr(e) {
      return te(e) && Xr(e) === "[object Date]";
    }
    b2.isDate = rr;
    b2.types.isDate = rr;
    function de(e) {
      return te(e) && (Xr(e) === "[object Error]" || e instanceof Error);
    }
    b2.isError = de;
    b2.types.isNativeError = de;
    function Ke(e) {
      return typeof e == "function";
    }
    b2.isFunction = Ke;
    function Eu(e) {
      return e === null || typeof e == "boolean" || typeof e == "number" || typeof e == "string" || typeof e == "symbol" || typeof e > "u";
    }
    b2.isPrimitive = Eu;
    b2.isBuffer = Fn();
    function Xr(e) {
      return Object.prototype.toString.call(e);
    }
    function Hr(e) {
      return e < 10 ? "0" + e.toString(10) : e.toString(10);
    }
    var ju = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    function Pu() {
      var e = new Date, r = [Hr(e.getHours()), Hr(e.getMinutes()), Hr(e.getSeconds())].join(":");
      return [e.getDate(), ju[e.getMonth()], r].join(" ");
    }
    b2.log = function() {
      console.log("%s - %s", Pu(), b2.format.apply(b2, arguments));
    };
    b2.inherits = Dn();
    b2._extend = function(e, r) {
      if (!r || !te(r))
        return e;
      for (var t = Object.keys(r), n = t.length;n--; )
        e[t[n]] = r[t[n]];
      return e;
    };
    function $n(e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }
    var z = typeof Symbol < "u" ? Symbol("util.promisify.custom") : undefined;
    b2.promisify = function(r) {
      if (typeof r != "function")
        throw new TypeError('The "original" argument must be of type Function');
      if (z && r[z]) {
        var t = r[z];
        if (typeof t != "function")
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(t, z, { value: t, enumerable: false, writable: false, configurable: true }), t;
      }
      function t() {
        for (var n, o, i = new Promise(function(f3, c2) {
          n = f3, o = c2;
        }), a2 = [], u2 = 0;u2 < arguments.length; u2++)
          a2.push(arguments[u2]);
        a2.push(function(f3, c2) {
          f3 ? o(f3) : n(c2);
        });
        try {
          r.apply(this, a2);
        } catch (f3) {
          o(f3);
        }
        return i;
      }
      return Object.setPrototypeOf(t, Object.getPrototypeOf(r)), z && Object.defineProperty(t, z, { value: t, enumerable: false, writable: false, configurable: true }), Object.defineProperties(t, Bn(r));
    };
    b2.promisify.custom = z;
    function qu(e, r) {
      if (!e) {
        var t = new Error("Promise was rejected with a falsy value");
        t.reason = e, e = t;
      }
      return r(e);
    }
    function Iu(e) {
      if (typeof e != "function")
        throw new TypeError('The "original" argument must be of type Function');
      function r() {
        for (var t = [], n = 0;n < arguments.length; n++)
          t.push(arguments[n]);
        var o = t.pop();
        if (typeof o != "function")
          throw new TypeError("The last argument must be of type Function");
        var i = this, a2 = function() {
          return o.apply(i, arguments);
        };
        e.apply(this, t).then(function(u2) {
          process.nextTick(a2.bind(null, null, u2));
        }, function(u2) {
          process.nextTick(qu.bind(null, u2, a2));
        });
      }
      return Object.setPrototypeOf(r, Object.getPrototypeOf(e)), Object.defineProperties(r, Bn(e)), r;
    }
    b2.callbackify = Iu;
  });
  var P = {};
  Li(P, { TextDecoder: () => Ln, TextEncoder: () => kn, default: () => Ru });
  var kn;
  var Ln;
  var Ru;
  var ne = ki(() => {
    B2(P, wt(Gn()));
    kn = globalThis.TextEncoder, Ln = globalThis.TextDecoder, Ru = { TextEncoder: kn, TextDecoder: Ln };
  });
  var Kr = p2((kc, Cn) => {
    function U2(e) {
      return U2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
        return typeof r;
      } : function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, U2(e);
    }
    function Vn(e, r) {
      for (var t = 0;t < r.length; t++) {
        var n = r[t];
        n.enumerable = n.enumerable || false, n.configurable = true, ("value" in n) && (n.writable = true), Object.defineProperty(e, Nu(n.key), n);
      }
    }
    function Tu(e, r, t) {
      return r && Vn(e.prototype, r), t && Vn(e, t), Object.defineProperty(e, "prototype", { writable: false }), e;
    }
    function Nu(e) {
      var r = xu(e, "string");
      return U2(r) === "symbol" ? r : String(r);
    }
    function xu(e, r) {
      if (U2(e) !== "object" || e === null)
        return e;
      var t = e[Symbol.toPrimitive];
      if (t !== undefined) {
        var n = t.call(e, r || "default");
        if (U2(n) !== "object")
          return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(e);
    }
    function Fu(e, r) {
      if (!(e instanceof r))
        throw new TypeError("Cannot call a class as a function");
    }
    function Du(e, r) {
      if (typeof r != "function" && r !== null)
        throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(r && r.prototype, { constructor: { value: e, writable: true, configurable: true } }), Object.defineProperty(e, "prototype", { writable: false }), r && Qr(e, r);
    }
    function Qr(e, r) {
      return Qr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
        return n.__proto__ = o, n;
      }, Qr(e, r);
    }
    function Bu(e) {
      var r = Mu();
      return function() {
        var n = or(e), o;
        if (r) {
          var i = or(this).constructor;
          o = Reflect.construct(n, arguments, i);
        } else
          o = n.apply(this, arguments);
        return _u(this, o);
      };
    }
    function _u(e, r) {
      if (r && (U2(r) === "object" || typeof r == "function"))
        return r;
      if (r !== undefined)
        throw new TypeError("Derived constructors may only return object or undefined");
      return Uu(e);
    }
    function Uu(e) {
      if (e === undefined)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function Mu() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return false;
      if (typeof Proxy == "function")
        return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), true;
      } catch {
        return false;
      }
    }
    function or(e) {
      return or = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      }, or(e);
    }
    var zn = {}, oe, Zr;
    function he(e, r, t) {
      t || (t = Error);
      function n(i, a2, u2) {
        return typeof r == "string" ? r : r(i, a2, u2);
      }
      var o = function(i) {
        Du(u2, i);
        var a2 = Bu(u2);
        function u2(f3, c2, s2) {
          var l2;
          return Fu(this, u2), l2 = a2.call(this, n(f3, c2, s2)), l2.code = e, l2;
        }
        return Tu(u2);
      }(t);
      zn[e] = o;
    }
    function Wn(e, r) {
      if (Array.isArray(e)) {
        var t = e.length;
        return e = e.map(function(n) {
          return String(n);
        }), t > 2 ? "one of ".concat(r, " ").concat(e.slice(0, t - 1).join(", "), ", or ") + e[t - 1] : t === 2 ? "one of ".concat(r, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(r, " ").concat(e[0]);
      } else
        return "of ".concat(r, " ").concat(String(e));
    }
    function $u(e, r, t) {
      return e.substr(!t || t < 0 ? 0 : +t, r.length) === r;
    }
    function Gu(e, r, t) {
      return (t === undefined || t > e.length) && (t = e.length), e.substring(t - r.length, t) === r;
    }
    function ku(e, r, t) {
      return typeof t != "number" && (t = 0), t + r.length > e.length ? false : e.indexOf(r, t) !== -1;
    }
    he("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError);
    he("ERR_INVALID_ARG_TYPE", function(e, r, t) {
      oe === undefined && (oe = ir()), oe(typeof e == "string", "'name' must be a string");
      var n;
      typeof r == "string" && $u(r, "not ") ? (n = "must not be", r = r.replace(/^not /, "")) : n = "must be";
      var o;
      if (Gu(e, " argument"))
        o = "The ".concat(e, " ").concat(n, " ").concat(Wn(r, "type"));
      else {
        var i = ku(e, ".") ? "property" : "argument";
        o = 'The "'.concat(e, '" ').concat(i, " ").concat(n, " ").concat(Wn(r, "type"));
      }
      return o += ". Received type ".concat(U2(t)), o;
    }, TypeError);
    he("ERR_INVALID_ARG_VALUE", function(e, r) {
      var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "is invalid";
      Zr === undefined && (Zr = (ne(), ce(P)));
      var n = Zr.inspect(r);
      return n.length > 128 && (n = "".concat(n.slice(0, 128), "...")), "The argument '".concat(e, "' ").concat(t, ". Received ").concat(n);
    }, TypeError, RangeError);
    he("ERR_INVALID_RETURN_VALUE", function(e, r, t) {
      var n;
      return t && t.constructor && t.constructor.name ? n = "instance of ".concat(t.constructor.name) : n = "type ".concat(U2(t)), "Expected ".concat(e, ' to be returned from the "').concat(r, '"') + " function but got ".concat(n, ".");
    }, TypeError);
    he("ERR_MISSING_ARGS", function() {
      for (var e = arguments.length, r = new Array(e), t = 0;t < e; t++)
        r[t] = arguments[t];
      oe === undefined && (oe = ir()), oe(r.length > 0, "At least one arg needs to be specified");
      var n = "The ", o = r.length;
      switch (r = r.map(function(i) {
        return '"'.concat(i, '"');
      }), o) {
        case 1:
          n += "".concat(r[0], " argument");
          break;
        case 2:
          n += "".concat(r[0], " and ").concat(r[1], " arguments");
          break;
        default:
          n += r.slice(0, o - 1).join(", "), n += ", and ".concat(r[o - 1], " arguments");
          break;
      }
      return "".concat(n, " must be specified");
    }, TypeError);
    Cn.exports.codes = zn;
  });
  var to = p2((Lc, ro) => {
    function Hn(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r && (n = n.filter(function(o) {
          return Object.getOwnPropertyDescriptor(e, o).enumerable;
        })), t.push.apply(t, n);
      }
      return t;
    }
    function Jn(e) {
      for (var r = 1;r < arguments.length; r++) {
        var t = arguments[r] != null ? arguments[r] : {};
        r % 2 ? Hn(Object(t), true).forEach(function(n) {
          Lu(e, n, t[n]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Hn(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
      }
      return e;
    }
    function Lu(e, r, t) {
      return r = Qn(r), (r in e) ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
    }
    function Vu(e, r) {
      if (!(e instanceof r))
        throw new TypeError("Cannot call a class as a function");
    }
    function Yn(e, r) {
      for (var t = 0;t < r.length; t++) {
        var n = r[t];
        n.enumerable = n.enumerable || false, n.configurable = true, ("value" in n) && (n.writable = true), Object.defineProperty(e, Qn(n.key), n);
      }
    }
    function Wu(e, r, t) {
      return r && Yn(e.prototype, r), t && Yn(e, t), Object.defineProperty(e, "prototype", { writable: false }), e;
    }
    function Qn(e) {
      var r = zu(e, "string");
      return E2(r) === "symbol" ? r : String(r);
    }
    function zu(e, r) {
      if (E2(e) !== "object" || e === null)
        return e;
      var t = e[Symbol.toPrimitive];
      if (t !== undefined) {
        var n = t.call(e, r || "default");
        if (E2(n) !== "object")
          return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(e);
    }
    function Cu(e, r) {
      if (typeof r != "function" && r !== null)
        throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(r && r.prototype, { constructor: { value: e, writable: true, configurable: true } }), Object.defineProperty(e, "prototype", { writable: false }), r && Oe(e, r);
    }
    function Hu(e) {
      var r = eo();
      return function() {
        var n = we(e), o;
        if (r) {
          var i = we(this).constructor;
          o = Reflect.construct(n, arguments, i);
        } else
          o = n.apply(this, arguments);
        return Kn(this, o);
      };
    }
    function Kn(e, r) {
      if (r && (E2(r) === "object" || typeof r == "function"))
        return r;
      if (r !== undefined)
        throw new TypeError("Derived constructors may only return object or undefined");
      return et(e);
    }
    function et(e) {
      if (e === undefined)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function rt(e) {
      var r = typeof Map == "function" ? new Map : undefined;
      return rt = function(n) {
        if (n === null || !Ju(n))
          return n;
        if (typeof n != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (typeof r < "u") {
          if (r.has(n))
            return r.get(n);
          r.set(n, o);
        }
        function o() {
          return ar(n, arguments, we(this).constructor);
        }
        return o.prototype = Object.create(n.prototype, { constructor: { value: o, enumerable: false, writable: true, configurable: true } }), Oe(o, n);
      }, rt(e);
    }
    function ar(e, r, t) {
      return eo() ? ar = Reflect.construct.bind() : ar = function(o, i, a2) {
        var u2 = [null];
        u2.push.apply(u2, i);
        var f3 = Function.bind.apply(o, u2), c2 = new f3;
        return a2 && Oe(c2, a2.prototype), c2;
      }, ar.apply(null, arguments);
    }
    function eo() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return false;
      if (typeof Proxy == "function")
        return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), true;
      } catch {
        return false;
      }
    }
    function Ju(e) {
      return Function.toString.call(e).indexOf("[native code]") !== -1;
    }
    function Oe(e, r) {
      return Oe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
        return n.__proto__ = o, n;
      }, Oe(e, r);
    }
    function we(e) {
      return we = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      }, we(e);
    }
    function E2(e) {
      return E2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
        return typeof r;
      } : function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, E2(e);
    }
    var Yu = (ne(), ce(P)), tt = Yu.inspect, Xu = Kr(), Zu = Xu.codes.ERR_INVALID_ARG_TYPE;
    function Xn(e, r, t) {
      return (t === undefined || t > e.length) && (t = e.length), e.substring(t - r.length, t) === r;
    }
    function Qu(e, r) {
      if (r = Math.floor(r), e.length == 0 || r == 0)
        return "";
      var t = e.length * r;
      for (r = Math.floor(Math.log(r) / Math.log(2));r; )
        e += e, r--;
      return e += e.substring(0, t - e.length), e;
    }
    var N3 = "", me = "", ve = "", w = "", H = { deepStrictEqual: "Expected values to be strictly deep-equal:", strictEqual: "Expected values to be strictly equal:", strictEqualObject: 'Expected "actual" to be reference-equal to "expected":', deepEqual: "Expected values to be loosely deep-equal:", equal: "Expected values to be loosely equal:", notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:', notStrictEqual: 'Expected "actual" to be strictly unequal to:', notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":', notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:', notEqual: 'Expected "actual" to be loosely unequal to:', notIdentical: "Values identical but not reference-equal:" }, Ku = 10;
    function Zn(e) {
      var r = Object.keys(e), t = Object.create(Object.getPrototypeOf(e));
      return r.forEach(function(n) {
        t[n] = e[n];
      }), Object.defineProperty(t, "message", { value: e.message }), t;
    }
    function Se(e) {
      return tt(e, { compact: false, customInspect: false, depth: 1000, maxArrayLength: 1 / 0, showHidden: false, breakLength: 1 / 0, showProxy: false, sorted: true, getters: true });
    }
    function ef(e, r, t) {
      var n = "", o = "", i = 0, a2 = "", u2 = false, f3 = Se(e), c2 = f3.split(`
`), s2 = Se(r).split(`
`), l2 = 0, y3 = "";
      if (t === "strictEqual" && E2(e) === "object" && E2(r) === "object" && e !== null && r !== null && (t = "strictEqualObject"), c2.length === 1 && s2.length === 1 && c2[0] !== s2[0]) {
        var v2 = c2[0].length + s2[0].length;
        if (v2 <= Ku) {
          if ((E2(e) !== "object" || e === null) && (E2(r) !== "object" || r === null) && (e !== 0 || r !== 0))
            return "".concat(H[t], `

`) + "".concat(c2[0], " !== ").concat(s2[0], `
`);
        } else if (t !== "strictEqualObject") {
          var h3 = process.stderr && process.stderr.isTTY ? process.stderr.columns : 80;
          if (v2 < h3) {
            for (;c2[0][l2] === s2[0][l2]; )
              l2++;
            l2 > 2 && (y3 = `
  `.concat(Qu(" ", l2), "^"), l2 = 0);
          }
        }
      }
      for (var S2 = c2[c2.length - 1], Te = s2[s2.length - 1];S2 === Te && (l2++ < 2 ? a2 = `
  `.concat(S2).concat(a2) : n = S2, c2.pop(), s2.pop(), !(c2.length === 0 || s2.length === 0)); )
        S2 = c2[c2.length - 1], Te = s2[s2.length - 1];
      var Ar = Math.max(c2.length, s2.length);
      if (Ar === 0) {
        var ue = f3.split(`
`);
        if (ue.length > 30)
          for (ue[26] = "".concat(N3, "...").concat(w);ue.length > 27; )
            ue.pop();
        return "".concat(H.notIdentical, `

`).concat(ue.join(`
`), `
`);
      }
      l2 > 3 && (a2 = `
`.concat(N3, "...").concat(w).concat(a2), u2 = true), n !== "" && (a2 = `
  `.concat(n).concat(a2), n = "");
      var R = 0, St = H[t] + `
`.concat(me, "+ actual").concat(w, " ").concat(ve, "- expected").concat(w), Ot = " ".concat(N3, "...").concat(w, " Lines skipped");
      for (l2 = 0;l2 < Ar; l2++) {
        var D = l2 - i;
        if (c2.length < l2 + 1)
          D > 1 && l2 > 2 && (D > 4 ? (o += `
`.concat(N3, "...").concat(w), u2 = true) : D > 3 && (o += `
  `.concat(s2[l2 - 2]), R++), o += `
  `.concat(s2[l2 - 1]), R++), i = l2, n += `
`.concat(ve, "-").concat(w, " ").concat(s2[l2]), R++;
        else if (s2.length < l2 + 1)
          D > 1 && l2 > 2 && (D > 4 ? (o += `
`.concat(N3, "...").concat(w), u2 = true) : D > 3 && (o += `
  `.concat(c2[l2 - 2]), R++), o += `
  `.concat(c2[l2 - 1]), R++), i = l2, o += `
`.concat(me, "+").concat(w, " ").concat(c2[l2]), R++;
        else {
          var fe = s2[l2], k2 = c2[l2], Er = k2 !== fe && (!Xn(k2, ",") || k2.slice(0, -1) !== fe);
          Er && Xn(fe, ",") && fe.slice(0, -1) === k2 && (Er = false, k2 += ","), Er ? (D > 1 && l2 > 2 && (D > 4 ? (o += `
`.concat(N3, "...").concat(w), u2 = true) : D > 3 && (o += `
  `.concat(c2[l2 - 2]), R++), o += `
  `.concat(c2[l2 - 1]), R++), i = l2, o += `
`.concat(me, "+").concat(w, " ").concat(k2), n += `
`.concat(ve, "-").concat(w, " ").concat(fe), R += 2) : (o += n, n = "", (D === 1 || l2 === 0) && (o += `
  `.concat(k2), R++));
        }
        if (R > 20 && l2 < Ar - 2)
          return "".concat(St).concat(Ot, `
`).concat(o, `
`).concat(N3, "...").concat(w).concat(n, `
`) + "".concat(N3, "...").concat(w);
      }
      return "".concat(St).concat(u2 ? Ot : "", `
`).concat(o).concat(n).concat(a2).concat(y3);
    }
    var rf = function(e, r) {
      Cu(n, e);
      var t = Hu(n);
      function n(o) {
        var i;
        if (Vu(this, n), E2(o) !== "object" || o === null)
          throw new Zu("options", "Object", o);
        var { message: a2, operator: u2, stackStartFn: f3, actual: c2, expected: s2 } = o, l2 = Error.stackTraceLimit;
        if (Error.stackTraceLimit = 0, a2 != null)
          i = t.call(this, String(a2));
        else if (process.stderr && process.stderr.isTTY && (process.stderr && process.stderr.getColorDepth && process.stderr.getColorDepth() !== 1 ? (N3 = "\x1B[34m", me = "\x1B[32m", w = "\x1B[39m", ve = "\x1B[31m") : (N3 = "", me = "", w = "", ve = "")), E2(c2) === "object" && c2 !== null && E2(s2) === "object" && s2 !== null && ("stack" in c2) && c2 instanceof Error && ("stack" in s2) && s2 instanceof Error && (c2 = Zn(c2), s2 = Zn(s2)), u2 === "deepStrictEqual" || u2 === "strictEqual")
          i = t.call(this, ef(c2, s2, u2));
        else if (u2 === "notDeepStrictEqual" || u2 === "notStrictEqual") {
          var y3 = H[u2], v2 = Se(c2).split(`
`);
          if (u2 === "notStrictEqual" && E2(c2) === "object" && c2 !== null && (y3 = H.notStrictEqualObject), v2.length > 30)
            for (v2[26] = "".concat(N3, "...").concat(w);v2.length > 27; )
              v2.pop();
          v2.length === 1 ? i = t.call(this, "".concat(y3, " ").concat(v2[0])) : i = t.call(this, "".concat(y3, `

`).concat(v2.join(`
`), `
`));
        } else {
          var h3 = Se(c2), S2 = "", Te = H[u2];
          u2 === "notDeepEqual" || u2 === "notEqual" ? (h3 = "".concat(H[u2], `

`).concat(h3), h3.length > 1024 && (h3 = "".concat(h3.slice(0, 1021), "..."))) : (S2 = "".concat(Se(s2)), h3.length > 512 && (h3 = "".concat(h3.slice(0, 509), "...")), S2.length > 512 && (S2 = "".concat(S2.slice(0, 509), "...")), u2 === "deepEqual" || u2 === "equal" ? h3 = "".concat(Te, `

`).concat(h3, `

should equal

`) : S2 = " ".concat(u2, " ").concat(S2)), i = t.call(this, "".concat(h3).concat(S2));
        }
        return Error.stackTraceLimit = l2, i.generatedMessage = !a2, Object.defineProperty(et(i), "name", { value: "AssertionError [ERR_ASSERTION]", enumerable: false, writable: true, configurable: true }), i.code = "ERR_ASSERTION", i.actual = c2, i.expected = s2, i.operator = u2, Error.captureStackTrace && Error.captureStackTrace(et(i), f3), i.stack, i.name = "AssertionError", Kn(i);
      }
      return Wu(n, [{ key: "toString", value: function() {
        return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
      } }, { key: r, value: function(i, a2) {
        return tt(this, Jn(Jn({}, a2), {}, { customInspect: false, depth: 0 }));
      } }]), n;
    }(rt(Error), tt.custom);
    ro.exports = rf;
  });
  var nt = p2((Vc, oo) => {
    var no = Object.prototype.toString;
    oo.exports = function(r) {
      var t = no.call(r), n = t === "[object Arguments]";
      return n || (n = t !== "[object Array]" && r !== null && typeof r == "object" && typeof r.length == "number" && r.length >= 0 && no.call(r.callee) === "[object Function]"), n;
    };
  });
  var yo = p2((Wc, po) => {
    var lo;
    Object.keys || (Ae = Object.prototype.hasOwnProperty, ot = Object.prototype.toString, io = nt(), it = Object.prototype.propertyIsEnumerable, ao = !it.call({ toString: null }, "toString"), uo = it.call(function() {
    }, "prototype"), Ee = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], ur = function(e) {
      var r = e.constructor;
      return r && r.prototype === e;
    }, fo = { $applicationCache: true, $console: true, $external: true, $frame: true, $frameElement: true, $frames: true, $innerHeight: true, $innerWidth: true, $onmozfullscreenchange: true, $onmozfullscreenerror: true, $outerHeight: true, $outerWidth: true, $pageXOffset: true, $pageYOffset: true, $parent: true, $scrollLeft: true, $scrollTop: true, $scrollX: true, $scrollY: true, $self: true, $webkitIndexedDB: true, $webkitStorageInfo: true, $window: true }, co = function() {
      if (typeof window > "u")
        return false;
      for (var e in window)
        try {
          if (!fo["$" + e] && Ae.call(window, e) && window[e] !== null && typeof window[e] == "object")
            try {
              ur(window[e]);
            } catch {
              return true;
            }
        } catch {
          return true;
        }
      return false;
    }(), so = function(e) {
      if (typeof window > "u" || !co)
        return ur(e);
      try {
        return ur(e);
      } catch {
        return false;
      }
    }, lo = function(r) {
      var t = r !== null && typeof r == "object", n = ot.call(r) === "[object Function]", o = io(r), i = t && ot.call(r) === "[object String]", a2 = [];
      if (!t && !n && !o)
        throw new TypeError("Object.keys called on a non-object");
      var u2 = uo && n;
      if (i && r.length > 0 && !Ae.call(r, 0))
        for (var f3 = 0;f3 < r.length; ++f3)
          a2.push(String(f3));
      if (o && r.length > 0)
        for (var c2 = 0;c2 < r.length; ++c2)
          a2.push(String(c2));
      else
        for (var s2 in r)
          !(u2 && s2 === "prototype") && Ae.call(r, s2) && a2.push(String(s2));
      if (ao)
        for (var l2 = so(r), y3 = 0;y3 < Ee.length; ++y3)
          !(l2 && Ee[y3] === "constructor") && Ae.call(r, Ee[y3]) && a2.push(Ee[y3]);
      return a2;
    });
    var Ae, ot, io, it, ao, uo, Ee, ur, fo, co, so;
    po.exports = lo;
  });
  var at = p2((zc, ho) => {
    var tf = Array.prototype.slice, nf = nt(), go = Object.keys, fr = go ? function(r) {
      return go(r);
    } : yo(), bo = Object.keys;
    fr.shim = function() {
      if (Object.keys) {
        var r = function() {
          var t = Object.keys(arguments);
          return t && t.length === arguments.length;
        }(1, 2);
        r || (Object.keys = function(n) {
          return nf(n) ? bo(tf.call(n)) : bo(n);
        });
      } else
        Object.keys = fr;
      return Object.keys || fr;
    };
    ho.exports = fr;
  });
  var Ao = p2((Cc, wo) => {
    var of = at(), So = Fe()(), Oo = pe(), mo = Object, af = Oo("Array.prototype.push"), vo = Oo("Object.prototype.propertyIsEnumerable"), uf = So ? Object.getOwnPropertySymbols : null;
    wo.exports = function(r, t) {
      if (r == null)
        throw new TypeError("target must be an object");
      var n = mo(r);
      if (arguments.length === 1)
        return n;
      for (var o = 1;o < arguments.length; ++o) {
        var i = mo(arguments[o]), a2 = of(i), u2 = So && (Object.getOwnPropertySymbols || uf);
        if (u2)
          for (var f3 = u2(i), c2 = 0;c2 < f3.length; ++c2) {
            var s2 = f3[c2];
            vo(i, s2) && af(a2, s2);
          }
        for (var l2 = 0;l2 < a2.length; ++l2) {
          var y3 = a2[l2];
          if (vo(i, y3)) {
            var v2 = i[y3];
            n[y3] = v2;
          }
        }
      }
      return n;
    };
  });
  var jo = p2((Hc, Eo) => {
    var ut = Ao(), ff = function() {
      if (!Object.assign)
        return false;
      for (var e = "abcdefghijklmnopqrst", r = e.split(""), t = {}, n = 0;n < r.length; ++n)
        t[r[n]] = r[n];
      var o = Object.assign({}, t), i = "";
      for (var a2 in o)
        i += a2;
      return e !== i;
    }, cf = function() {
      if (!Object.assign || !Object.preventExtensions)
        return false;
      var e = Object.preventExtensions({ 1: 2 });
      try {
        Object.assign(e, "xy");
      } catch {
        return e[1] === "y";
      }
      return false;
    };
    Eo.exports = function() {
      return !Object.assign || ff() || cf() ? ut : Object.assign;
    };
  });
  var ft = p2((Jc, qo) => {
    var Po = function(e) {
      return e !== e;
    };
    qo.exports = function(r, t) {
      return r === 0 && t === 0 ? 1 / r === 1 / t : !!(r === t || Po(r) && Po(t));
    };
  });
  var cr = p2((Yc, Io) => {
    var sf = ft();
    Io.exports = function() {
      return typeof Object.is == "function" ? Object.is : sf;
    };
  });
  var lt = p2((Xc, Ro) => {
    var lf = Q2(), ct = lf("%Object.defineProperty%", true), st = function() {
      if (ct)
        try {
          return ct({}, "a", { value: 1 }), true;
        } catch {
          return false;
        }
      return false;
    };
    st.hasArrayLengthDefineBug = function() {
      if (!st())
        return null;
      try {
        return ct([], "length", { value: 1 }).length !== 1;
      } catch {
        return true;
      }
    };
    Ro.exports = st;
  });
  var Fo = p2((Zc, xo) => {
    var pf = lt()(), pt = Q2(), To = pf && pt("%Object.defineProperty%", true), yf = pt("%SyntaxError%"), ie = pt("%TypeError%"), No = Ur();
    xo.exports = function(r, t, n) {
      if (!r || typeof r != "object" && typeof r != "function")
        throw new ie("`obj` must be an object or a function`");
      if (typeof t != "string" && typeof t != "symbol")
        throw new ie("`property` must be a string or a symbol`");
      if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
        throw new ie("`nonEnumerable`, if provided, must be a boolean or null");
      if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
        throw new ie("`nonWritable`, if provided, must be a boolean or null");
      if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
        throw new ie("`nonConfigurable`, if provided, must be a boolean or null");
      if (arguments.length > 6 && typeof arguments[6] != "boolean")
        throw new ie("`loose`, if provided, must be a boolean");
      var o = arguments.length > 3 ? arguments[3] : null, i = arguments.length > 4 ? arguments[4] : null, a2 = arguments.length > 5 ? arguments[5] : null, u2 = arguments.length > 6 ? arguments[6] : false, f3 = !!No && No(r, t);
      if (To)
        To(r, t, { configurable: a2 === null && f3 ? f3.configurable : !a2, enumerable: o === null && f3 ? f3.enumerable : !o, value: n, writable: i === null && f3 ? f3.writable : !i });
      else if (u2 || !o && !i && !a2)
        r[t] = n;
      else
        throw new yf("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
    };
  });
  var je = p2((Qc, Uo) => {
    var gf = at(), bf = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", df = Object.prototype.toString, hf = Array.prototype.concat, Do = Fo(), mf = function(e) {
      return typeof e == "function" && df.call(e) === "[object Function]";
    }, Bo = lt()(), vf = function(e, r, t, n) {
      if (r in e) {
        if (n === true) {
          if (e[r] === t)
            return;
        } else if (!mf(n) || !n())
          return;
      }
      Bo ? Do(e, r, t, true) : Do(e, r, t);
    }, _o = function(e, r) {
      var t = arguments.length > 2 ? arguments[2] : {}, n = gf(r);
      bf && (n = hf.call(n, Object.getOwnPropertySymbols(r)));
      for (var o = 0;o < n.length; o += 1)
        vf(e, n[o], r[n[o]], t[n[o]]);
    };
    _o.supportsDescriptors = !!Bo;
    Uo.exports = _o;
  });
  var $o = p2((Kc, Mo) => {
    var Sf = cr(), Of = je();
    Mo.exports = function() {
      var r = Sf();
      return Of(Object, { is: r }, { is: function() {
        return Object.is !== r;
      } }), r;
    };
  });
  var Vo = p2((es, Lo) => {
    var wf = je(), Af = le(), Ef = ft(), Go = cr(), jf = $o(), ko = Af(Go(), Object);
    wf(ko, { getPolyfill: Go, implementation: Ef, shim: jf });
    Lo.exports = ko;
  });
  var yt = p2((rs, Wo) => {
    Wo.exports = function(r) {
      return r !== r;
    };
  });
  var gt = p2((ts, zo) => {
    var Pf = yt();
    zo.exports = function() {
      return Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a") ? Number.isNaN : Pf;
    };
  });
  var Ho = p2((ns, Co) => {
    var qf = je(), If = gt();
    Co.exports = function() {
      var r = If();
      return qf(Number, { isNaN: r }, { isNaN: function() {
        return Number.isNaN !== r;
      } }), r;
    };
  });
  var Zo = p2((os, Xo) => {
    var Rf = le(), Tf = je(), Nf = yt(), Jo = gt(), xf = Ho(), Yo = Rf(Jo(), Number);
    Tf(Yo, { getPolyfill: Jo, implementation: Nf, shim: xf });
    Xo.exports = Yo;
  });
  var hi = p2((is, di) => {
    function Qo(e, r) {
      return _f(e) || Bf(e, r) || Df(e, r) || Ff();
    }
    function Ff() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function Df(e, r) {
      if (!!e) {
        if (typeof e == "string")
          return Ko(e, r);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
          return Array.from(e);
        if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
          return Ko(e, r);
      }
    }
    function Ko(e, r) {
      (r == null || r > e.length) && (r = e.length);
      for (var t = 0, n = new Array(r);t < r; t++)
        n[t] = e[t];
      return n;
    }
    function Bf(e, r) {
      var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
      if (t != null) {
        var n, o, i, a2, u2 = [], f3 = true, c2 = false;
        try {
          if (i = (t = t.call(e)).next, r === 0) {
            if (Object(t) !== t)
              return;
            f3 = false;
          } else
            for (;!(f3 = (n = i.call(t)).done) && (u2.push(n.value), u2.length !== r); f3 = true)
              ;
        } catch (s2) {
          c2 = true, o = s2;
        } finally {
          try {
            if (!f3 && t.return != null && (a2 = t.return(), Object(a2) !== a2))
              return;
          } finally {
            if (c2)
              throw o;
          }
        }
        return u2;
      }
    }
    function _f(e) {
      if (Array.isArray(e))
        return e;
    }
    function q2(e) {
      return q2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
        return typeof r;
      } : function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, q2(e);
    }
    var Uf = /a/g.flags !== undefined, dr = function(r) {
      var t = [];
      return r.forEach(function(n) {
        return t.push(n);
      }), t;
    }, ei = function(r) {
      var t = [];
      return r.forEach(function(n, o) {
        return t.push([o, n]);
      }), t;
    }, li = Object.is ? Object.is : Vo(), gr = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
      return [];
    }, bt = Number.isNaN ? Number.isNaN : Zo();
    function ht(e) {
      return e.call.bind(e);
    }
    var qe = ht(Object.prototype.hasOwnProperty), br = ht(Object.prototype.propertyIsEnumerable), ri = ht(Object.prototype.toString), A3 = (ne(), ce(P)).types, Mf = A3.isAnyArrayBuffer, $f = A3.isArrayBufferView, ti = A3.isDate, sr = A3.isMap, ni = A3.isRegExp, lr = A3.isSet, Gf = A3.isNativeError, kf = A3.isBoxedPrimitive, oi = A3.isNumberObject, ii = A3.isStringObject, ai = A3.isBooleanObject, ui = A3.isBigIntObject, Lf = A3.isSymbolObject, Vf = A3.isFloat32Array, Wf = A3.isFloat64Array;
    function zf(e) {
      if (e.length === 0 || e.length > 10)
        return true;
      for (var r = 0;r < e.length; r++) {
        var t = e.charCodeAt(r);
        if (t < 48 || t > 57)
          return true;
      }
      return e.length === 10 && e >= Math.pow(2, 32);
    }
    function pr(e) {
      return Object.keys(e).filter(zf).concat(gr(e).filter(Object.prototype.propertyIsEnumerable.bind(e)));
    }
    function pi(e, r) {
      if (e === r)
        return 0;
      for (var t = e.length, n = r.length, o = 0, i = Math.min(t, n);o < i; ++o)
        if (e[o] !== r[o]) {
          t = e[o], n = r[o];
          break;
        }
      return t < n ? -1 : n < t ? 1 : 0;
    }
    var yr = undefined, Cf = true, Hf = false, dt = 0, mt = 1, yi = 2, gi = 3;
    function Jf(e, r) {
      return Uf ? e.source === r.source && e.flags === r.flags : RegExp.prototype.toString.call(e) === RegExp.prototype.toString.call(r);
    }
    function Yf(e, r) {
      if (e.byteLength !== r.byteLength)
        return false;
      for (var t = 0;t < e.byteLength; t++)
        if (e[t] !== r[t])
          return false;
      return true;
    }
    function Xf(e, r) {
      return e.byteLength !== r.byteLength ? false : pi(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), new Uint8Array(r.buffer, r.byteOffset, r.byteLength)) === 0;
    }
    function Zf(e, r) {
      return e.byteLength === r.byteLength && pi(new Uint8Array(e), new Uint8Array(r)) === 0;
    }
    function Qf(e, r) {
      return oi(e) ? oi(r) && li(Number.prototype.valueOf.call(e), Number.prototype.valueOf.call(r)) : ii(e) ? ii(r) && String.prototype.valueOf.call(e) === String.prototype.valueOf.call(r) : ai(e) ? ai(r) && Boolean.prototype.valueOf.call(e) === Boolean.prototype.valueOf.call(r) : ui(e) ? ui(r) && BigInt.prototype.valueOf.call(e) === BigInt.prototype.valueOf.call(r) : Lf(r) && Symbol.prototype.valueOf.call(e) === Symbol.prototype.valueOf.call(r);
    }
    function I3(e, r, t, n) {
      if (e === r)
        return e !== 0 ? true : t ? li(e, r) : true;
      if (t) {
        if (q2(e) !== "object")
          return typeof e == "number" && bt(e) && bt(r);
        if (q2(r) !== "object" || e === null || r === null || Object.getPrototypeOf(e) !== Object.getPrototypeOf(r))
          return false;
      } else {
        if (e === null || q2(e) !== "object")
          return r === null || q2(r) !== "object" ? e == r : false;
        if (r === null || q2(r) !== "object")
          return false;
      }
      var o = ri(e), i = ri(r);
      if (o !== i)
        return false;
      if (Array.isArray(e)) {
        if (e.length !== r.length)
          return false;
        var a2 = pr(e, yr), u2 = pr(r, yr);
        return a2.length !== u2.length ? false : Pe(e, r, t, n, mt, a2);
      }
      if (o === "[object Object]" && (!sr(e) && sr(r) || !lr(e) && lr(r)))
        return false;
      if (ti(e)) {
        if (!ti(r) || Date.prototype.getTime.call(e) !== Date.prototype.getTime.call(r))
          return false;
      } else if (ni(e)) {
        if (!ni(r) || !Jf(e, r))
          return false;
      } else if (Gf(e) || e instanceof Error) {
        if (e.message !== r.message || e.name !== r.name)
          return false;
      } else if ($f(e)) {
        if (!t && (Vf(e) || Wf(e))) {
          if (!Yf(e, r))
            return false;
        } else if (!Xf(e, r))
          return false;
        var f3 = pr(e, yr), c2 = pr(r, yr);
        return f3.length !== c2.length ? false : Pe(e, r, t, n, dt, f3);
      } else {
        if (lr(e))
          return !lr(r) || e.size !== r.size ? false : Pe(e, r, t, n, yi);
        if (sr(e))
          return !sr(r) || e.size !== r.size ? false : Pe(e, r, t, n, gi);
        if (Mf(e)) {
          if (!Zf(e, r))
            return false;
        } else if (kf(e) && !Qf(e, r))
          return false;
      }
      return Pe(e, r, t, n, dt);
    }
    function fi(e, r) {
      return r.filter(function(t) {
        return br(e, t);
      });
    }
    function Pe(e, r, t, n, o, i) {
      if (arguments.length === 5) {
        i = Object.keys(e);
        var a2 = Object.keys(r);
        if (i.length !== a2.length)
          return false;
      }
      for (var u2 = 0;u2 < i.length; u2++)
        if (!qe(r, i[u2]))
          return false;
      if (t && arguments.length === 5) {
        var f3 = gr(e);
        if (f3.length !== 0) {
          var c2 = 0;
          for (u2 = 0;u2 < f3.length; u2++) {
            var s2 = f3[u2];
            if (br(e, s2)) {
              if (!br(r, s2))
                return false;
              i.push(s2), c2++;
            } else if (br(r, s2))
              return false;
          }
          var l2 = gr(r);
          if (f3.length !== l2.length && fi(r, l2).length !== c2)
            return false;
        } else {
          var y3 = gr(r);
          if (y3.length !== 0 && fi(r, y3).length !== 0)
            return false;
        }
      }
      if (i.length === 0 && (o === dt || o === mt && e.length === 0 || e.size === 0))
        return true;
      if (n === undefined)
        n = { val1: new Map, val2: new Map, position: 0 };
      else {
        var v2 = n.val1.get(e);
        if (v2 !== undefined) {
          var h3 = n.val2.get(r);
          if (h3 !== undefined)
            return v2 === h3;
        }
        n.position++;
      }
      n.val1.set(e, n.position), n.val2.set(r, n.position);
      var S2 = nc(e, r, t, i, n, o);
      return n.val1.delete(e), n.val2.delete(r), S2;
    }
    function ci(e, r, t, n) {
      for (var o = dr(e), i = 0;i < o.length; i++) {
        var a2 = o[i];
        if (I3(r, a2, t, n))
          return e.delete(a2), true;
      }
      return false;
    }
    function bi(e) {
      switch (q2(e)) {
        case "undefined":
          return null;
        case "object":
          return;
        case "symbol":
          return false;
        case "string":
          e = +e;
        case "number":
          if (bt(e))
            return false;
      }
      return true;
    }
    function Kf(e, r, t) {
      var n = bi(t);
      return n ?? (r.has(n) && !e.has(n));
    }
    function ec(e, r, t, n, o) {
      var i = bi(t);
      if (i != null)
        return i;
      var a2 = r.get(i);
      return a2 === undefined && !r.has(i) || !I3(n, a2, false, o) ? false : !e.has(i) && I3(n, a2, false, o);
    }
    function rc(e, r, t, n) {
      for (var o = null, i = dr(e), a2 = 0;a2 < i.length; a2++) {
        var u2 = i[a2];
        if (q2(u2) === "object" && u2 !== null)
          o === null && (o = new Set), o.add(u2);
        else if (!r.has(u2)) {
          if (t || !Kf(e, r, u2))
            return false;
          o === null && (o = new Set), o.add(u2);
        }
      }
      if (o !== null) {
        for (var f3 = dr(r), c2 = 0;c2 < f3.length; c2++) {
          var s2 = f3[c2];
          if (q2(s2) === "object" && s2 !== null) {
            if (!ci(o, s2, t, n))
              return false;
          } else if (!t && !e.has(s2) && !ci(o, s2, t, n))
            return false;
        }
        return o.size === 0;
      }
      return true;
    }
    function si(e, r, t, n, o, i) {
      for (var a2 = dr(e), u2 = 0;u2 < a2.length; u2++) {
        var f3 = a2[u2];
        if (I3(t, f3, o, i) && I3(n, r.get(f3), o, i))
          return e.delete(f3), true;
      }
      return false;
    }
    function tc(e, r, t, n) {
      for (var o = null, i = ei(e), a2 = 0;a2 < i.length; a2++) {
        var u2 = Qo(i[a2], 2), f3 = u2[0], c2 = u2[1];
        if (q2(f3) === "object" && f3 !== null)
          o === null && (o = new Set), o.add(f3);
        else {
          var s2 = r.get(f3);
          if (s2 === undefined && !r.has(f3) || !I3(c2, s2, t, n)) {
            if (t || !ec(e, r, f3, c2, n))
              return false;
            o === null && (o = new Set), o.add(f3);
          }
        }
      }
      if (o !== null) {
        for (var l2 = ei(r), y3 = 0;y3 < l2.length; y3++) {
          var v2 = Qo(l2[y3], 2), h3 = v2[0], S2 = v2[1];
          if (q2(h3) === "object" && h3 !== null) {
            if (!si(o, e, h3, S2, t, n))
              return false;
          } else if (!t && (!e.has(h3) || !I3(e.get(h3), S2, false, n)) && !si(o, e, h3, S2, false, n))
            return false;
        }
        return o.size === 0;
      }
      return true;
    }
    function nc(e, r, t, n, o, i) {
      var a2 = 0;
      if (i === yi) {
        if (!rc(e, r, t, o))
          return false;
      } else if (i === gi) {
        if (!tc(e, r, t, o))
          return false;
      } else if (i === mt)
        for (;a2 < e.length; a2++)
          if (qe(e, a2)) {
            if (!qe(r, a2) || !I3(e[a2], r[a2], t, o))
              return false;
          } else {
            if (qe(r, a2))
              return false;
            for (var u2 = Object.keys(e);a2 < u2.length; a2++) {
              var f3 = u2[a2];
              if (!qe(r, f3) || !I3(e[f3], r[f3], t, o))
                return false;
            }
            return u2.length === Object.keys(r).length;
          }
      for (a2 = 0;a2 < n.length; a2++) {
        var c2 = n[a2];
        if (!I3(e[c2], r[c2], t, o))
          return false;
      }
      return true;
    }
    function oc(e, r) {
      return I3(e, r, Hf);
    }
    function ic(e, r) {
      return I3(e, r, Cf);
    }
    di.exports = { isDeepEqual: oc, isDeepStrictEqual: ic };
  });
  var ir = p2((as, Bi) => {
    function x2(e) {
      return x2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
        return typeof r;
      } : function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, x2(e);
    }
    function mi(e, r) {
      for (var t = 0;t < r.length; t++) {
        var n = r[t];
        n.enumerable = n.enumerable || false, n.configurable = true, ("value" in n) && (n.writable = true), Object.defineProperty(e, uc(n.key), n);
      }
    }
    function ac(e, r, t) {
      return r && mi(e.prototype, r), t && mi(e, t), Object.defineProperty(e, "prototype", { writable: false }), e;
    }
    function uc(e) {
      var r = fc(e, "string");
      return x2(r) === "symbol" ? r : String(r);
    }
    function fc(e, r) {
      if (x2(e) !== "object" || e === null)
        return e;
      var t = e[Symbol.toPrimitive];
      if (t !== undefined) {
        var n = t.call(e, r || "default");
        if (x2(n) !== "object")
          return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(e);
    }
    function cc(e, r) {
      if (!(e instanceof r))
        throw new TypeError("Cannot call a class as a function");
    }
    var sc = Kr(), Ie = sc.codes, vi = Ie.ERR_AMBIGUOUS_ARGUMENT, ae = Ie.ERR_INVALID_ARG_TYPE, lc = Ie.ERR_INVALID_ARG_VALUE, pc = Ie.ERR_INVALID_RETURN_VALUE, $ = Ie.ERR_MISSING_ARGS, G = to(), yc = (ne(), ce(P)), hr = yc.inspect, Ai = (ne(), ce(P)).types, gc = Ai.isPromise, mr = Ai.isRegExp, bc = jo()(), Ei = cr()(), vr = pe()("RegExp.prototype.test"), M2, Sr;
    function Re() {
      var e = hi();
      M2 = e.isDeepEqual, Sr = e.isDeepStrictEqual;
    }
    var Si = false, m2 = Bi.exports = vt, Or = {};
    function F(e) {
      throw e.message instanceof Error ? e.message : new G(e);
    }
    function ji(e, r, t, n, o) {
      var i = arguments.length, a2;
      if (i === 0)
        a2 = "Failed";
      else if (i === 1)
        t = e, e = undefined;
      else {
        if (Si === false) {
          Si = true;
          var u2 = process.emitWarning ? process.emitWarning : console.warn.bind(console);
          u2("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094");
        }
        i === 2 && (n = "!=");
      }
      if (t instanceof Error)
        throw t;
      var f3 = { actual: e, expected: r, operator: n === undefined ? "fail" : n, stackStartFn: o || ji };
      t !== undefined && (f3.message = t);
      var c2 = new G(f3);
      throw a2 && (c2.message = a2, c2.generatedMessage = true), c2;
    }
    m2.fail = ji;
    m2.AssertionError = G;
    function Pi(e, r, t, n) {
      if (!t) {
        var o = false;
        if (r === 0)
          o = true, n = "No value argument passed to `assert.ok()`";
        else if (n instanceof Error)
          throw n;
        var i = new G({ actual: t, expected: true, message: n, operator: "==", stackStartFn: e });
        throw i.generatedMessage = o, i;
      }
    }
    function vt() {
      for (var e = arguments.length, r = new Array(e), t = 0;t < e; t++)
        r[t] = arguments[t];
      Pi.apply(undefined, [vt, r.length].concat(r));
    }
    m2.ok = vt;
    m2.equal = function e(r, t, n) {
      if (arguments.length < 2)
        throw new $("actual", "expected");
      r != t && F({ actual: r, expected: t, message: n, operator: "==", stackStartFn: e });
    };
    m2.notEqual = function e(r, t, n) {
      if (arguments.length < 2)
        throw new $("actual", "expected");
      r == t && F({ actual: r, expected: t, message: n, operator: "!=", stackStartFn: e });
    };
    m2.deepEqual = function e(r, t, n) {
      if (arguments.length < 2)
        throw new $("actual", "expected");
      M2 === undefined && Re(), M2(r, t) || F({ actual: r, expected: t, message: n, operator: "deepEqual", stackStartFn: e });
    };
    m2.notDeepEqual = function e(r, t, n) {
      if (arguments.length < 2)
        throw new $("actual", "expected");
      M2 === undefined && Re(), M2(r, t) && F({ actual: r, expected: t, message: n, operator: "notDeepEqual", stackStartFn: e });
    };
    m2.deepStrictEqual = function e(r, t, n) {
      if (arguments.length < 2)
        throw new $("actual", "expected");
      M2 === undefined && Re(), Sr(r, t) || F({ actual: r, expected: t, message: n, operator: "deepStrictEqual", stackStartFn: e });
    };
    m2.notDeepStrictEqual = qi;
    function qi(e, r, t) {
      if (arguments.length < 2)
        throw new $("actual", "expected");
      M2 === undefined && Re(), Sr(e, r) && F({ actual: e, expected: r, message: t, operator: "notDeepStrictEqual", stackStartFn: qi });
    }
    m2.strictEqual = function e(r, t, n) {
      if (arguments.length < 2)
        throw new $("actual", "expected");
      Ei(r, t) || F({ actual: r, expected: t, message: n, operator: "strictEqual", stackStartFn: e });
    };
    m2.notStrictEqual = function e(r, t, n) {
      if (arguments.length < 2)
        throw new $("actual", "expected");
      Ei(r, t) && F({ actual: r, expected: t, message: n, operator: "notStrictEqual", stackStartFn: e });
    };
    var Oi = ac(function e(r, t, n) {
      var o = this;
      cc(this, e), t.forEach(function(i) {
        (i in r) && (n !== undefined && typeof n[i] == "string" && mr(r[i]) && vr(r[i], n[i]) ? o[i] = n[i] : o[i] = r[i]);
      });
    });
    function dc(e, r, t, n, o, i) {
      if (!(t in e) || !Sr(e[t], r[t])) {
        if (!n) {
          var a2 = new Oi(e, o), u2 = new Oi(r, o, e), f3 = new G({ actual: a2, expected: u2, operator: "deepStrictEqual", stackStartFn: i });
          throw f3.actual = e, f3.expected = r, f3.operator = i.name, f3;
        }
        F({ actual: e, expected: r, message: n, operator: i.name, stackStartFn: i });
      }
    }
    function Ii(e, r, t, n) {
      if (typeof r != "function") {
        if (mr(r))
          return vr(r, e);
        if (arguments.length === 2)
          throw new ae("expected", ["Function", "RegExp"], r);
        if (x2(e) !== "object" || e === null) {
          var o = new G({ actual: e, expected: r, message: t, operator: "deepStrictEqual", stackStartFn: n });
          throw o.operator = n.name, o;
        }
        var i = Object.keys(r);
        if (r instanceof Error)
          i.push("name", "message");
        else if (i.length === 0)
          throw new lc("error", r, "may not be an empty object");
        return M2 === undefined && Re(), i.forEach(function(a2) {
          typeof e[a2] == "string" && mr(r[a2]) && vr(r[a2], e[a2]) || dc(e, r, a2, t, i, n);
        }), true;
      }
      return r.prototype !== undefined && e instanceof r ? true : Error.isPrototypeOf(r) ? false : r.call({}, e) === true;
    }
    function Ri(e) {
      if (typeof e != "function")
        throw new ae("fn", "Function", e);
      try {
        e();
      } catch (r) {
        return r;
      }
      return Or;
    }
    function wi(e) {
      return gc(e) || e !== null && x2(e) === "object" && typeof e.then == "function" && typeof e.catch == "function";
    }
    function Ti(e) {
      return Promise.resolve().then(function() {
        var r;
        if (typeof e == "function") {
          if (r = e(), !wi(r))
            throw new pc("instance of Promise", "promiseFn", r);
        } else if (wi(e))
          r = e;
        else
          throw new ae("promiseFn", ["Function", "Promise"], e);
        return Promise.resolve().then(function() {
          return r;
        }).then(function() {
          return Or;
        }).catch(function(t) {
          return t;
        });
      });
    }
    function Ni(e, r, t, n) {
      if (typeof t == "string") {
        if (arguments.length === 4)
          throw new ae("error", ["Object", "Error", "Function", "RegExp"], t);
        if (x2(r) === "object" && r !== null) {
          if (r.message === t)
            throw new vi("error/message", 'The error message "'.concat(r.message, '" is identical to the message.'));
        } else if (r === t)
          throw new vi("error/message", 'The error "'.concat(r, '" is identical to the message.'));
        n = t, t = undefined;
      } else if (t != null && x2(t) !== "object" && typeof t != "function")
        throw new ae("error", ["Object", "Error", "Function", "RegExp"], t);
      if (r === Or) {
        var o = "";
        t && t.name && (o += " (".concat(t.name, ")")), o += n ? ": ".concat(n) : ".";
        var i = e.name === "rejects" ? "rejection" : "exception";
        F({ actual: undefined, expected: t, operator: e.name, message: "Missing expected ".concat(i).concat(o), stackStartFn: e });
      }
      if (t && !Ii(r, t, n, e))
        throw r;
    }
    function xi(e, r, t, n) {
      if (r !== Or) {
        if (typeof t == "string" && (n = t, t = undefined), !t || Ii(r, t)) {
          var o = n ? ": ".concat(n) : ".", i = e.name === "doesNotReject" ? "rejection" : "exception";
          F({ actual: r, expected: t, operator: e.name, message: "Got unwanted ".concat(i).concat(o, `
`) + 'Actual message: "'.concat(r && r.message, '"'), stackStartFn: e });
        }
        throw r;
      }
    }
    m2.throws = function e(r) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;o < t; o++)
        n[o - 1] = arguments[o];
      Ni.apply(undefined, [e, Ri(r)].concat(n));
    };
    m2.rejects = function e(r) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;o < t; o++)
        n[o - 1] = arguments[o];
      return Ti(r).then(function(i) {
        return Ni.apply(undefined, [e, i].concat(n));
      });
    };
    m2.doesNotThrow = function e(r) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;o < t; o++)
        n[o - 1] = arguments[o];
      xi.apply(undefined, [e, Ri(r)].concat(n));
    };
    m2.doesNotReject = function e(r) {
      for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;o < t; o++)
        n[o - 1] = arguments[o];
      return Ti(r).then(function(i) {
        return xi.apply(undefined, [e, i].concat(n));
      });
    };
    m2.ifError = function e(r) {
      if (r != null) {
        var t = "ifError got unwanted exception: ";
        x2(r) === "object" && typeof r.message == "string" ? r.message.length === 0 && r.constructor ? t += r.constructor.name : t += r.message : t += hr(r);
        var n = new G({ actual: r, expected: null, operator: "ifError", message: t, stackStartFn: e }), o = r.stack;
        if (typeof o == "string") {
          var i = o.split(`
`);
          i.shift();
          for (var a2 = n.stack.split(`
`), u2 = 0;u2 < i.length; u2++) {
            var f3 = a2.indexOf(i[u2]);
            if (f3 !== -1) {
              a2 = a2.slice(0, f3);
              break;
            }
          }
          n.stack = "".concat(a2.join(`
`), `
`).concat(i.join(`
`));
        }
        throw n;
      }
    };
    function Fi(e, r, t, n, o) {
      if (!mr(r))
        throw new ae("regexp", "RegExp", r);
      var i = o === "match";
      if (typeof e != "string" || vr(r, e) !== i) {
        if (t instanceof Error)
          throw t;
        var a2 = !t;
        t = t || (typeof e != "string" ? 'The "string" argument must be of type string. Received type ' + "".concat(x2(e), " (").concat(hr(e), ")") : (i ? "The input did not match the regular expression " : "The input was expected to not match the regular expression ") + "".concat(hr(r), `. Input:

`).concat(hr(e), `
`));
        var u2 = new G({ actual: e, expected: r, message: t, operator: o, stackStartFn: n });
        throw u2.generatedMessage = a2, u2;
      }
    }
    m2.match = function e(r, t, n) {
      Fi(r, t, n, e, "match");
    };
    m2.doesNotMatch = function e(r, t, n) {
      Fi(r, t, n, e, "doesNotMatch");
    };
    function Di() {
      for (var e = arguments.length, r = new Array(e), t = 0;t < e; t++)
        r[t] = arguments[t];
      Pi.apply(undefined, [Di, r.length].concat(r));
    }
    m2.strict = bc(Di, m2, { equal: m2.strictEqual, deepEqual: m2.deepStrictEqual, notEqual: m2.notStrictEqual, notDeepEqual: m2.notDeepStrictEqual });
    m2.strict.strict = m2.strict;
  });
  var wr = {};
  B2(wr, wt(ir()));
  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
   * @license  MIT
   */
});

// node:util
var exports_util = {};
__export(exports_util, {
  default: () => {
    {
      return io;
    }
  },
  TextEncoder: () => {
    {
      return st;
    }
  },
  TextDecoder: () => {
    {
      return ct;
    }
  }
});
var yt, br, pt, lt, gt, dt, p2, bt, dr, I3, At, Ar, z, Zr, Qr, re, V2, ne, H, Or, jr, he, Oe, Ee, Be, Ue, Re, Mr, $e, Xe, et, tt, ut, E2, st, ct, io;
var init_util = __esm(() => {
  yt = Object.create;
  br = Object.defineProperty;
  pt = Object.getOwnPropertyDescriptor;
  lt = Object.getOwnPropertyNames;
  gt = Object.getPrototypeOf;
  dt = Object.prototype.hasOwnProperty;
  p2 = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
  bt = (r, e) => {
    for (var t in e)
      br(r, t, { get: e[t], enumerable: true });
  };
  dr = (r, e, t, n) => {
    if (e && typeof e == "object" || typeof e == "function")
      for (let o of lt(e))
        !dt.call(r, o) && o !== t && br(r, o, { get: () => e[o], enumerable: !(n = pt(e, o)) || n.enumerable });
    return r;
  };
  I3 = (r, e, t) => (dr(r, e, "default"), t && dr(t, e, "default"));
  At = (r, e, t) => (t = r != null ? yt(gt(r)) : {}, dr(e || !r || !r.__esModule ? br(t, "default", { value: r, enumerable: true }) : t, r));
  Ar = p2((fo, Vr) => {
    Vr.exports = function() {
      if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
        return false;
      if (typeof Symbol.iterator == "symbol")
        return true;
      var e = {}, t = Symbol("test"), n = Object(t);
      if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
        return false;
      var o = 42;
      e[t] = o;
      for (t in e)
        return false;
      if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
        return false;
      var f3 = Object.getOwnPropertySymbols(e);
      if (f3.length !== 1 || f3[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t))
        return false;
      if (typeof Object.getOwnPropertyDescriptor == "function") {
        var i = Object.getOwnPropertyDescriptor(e, t);
        if (i.value !== o || i.enumerable !== true)
          return false;
      }
      return true;
    };
  });
  z = p2((uo, Jr) => {
    var mt = Ar();
    Jr.exports = function() {
      return mt() && !!Symbol.toStringTag;
    };
  });
  Zr = p2((so, Hr) => {
    var Lr = typeof Symbol < "u" && Symbol, ht = Ar();
    Hr.exports = function() {
      return typeof Lr != "function" || typeof Symbol != "function" || typeof Lr("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? false : ht();
    };
  });
  Qr = p2((co, Kr) => {
    var Yr = { foo: {} }, St = Object;
    Kr.exports = function() {
      return { __proto__: Yr }.foo === Yr.foo && !({ __proto__: null } instanceof St);
    };
  });
  re = p2((yo, Xr) => {
    var vt = "Function.prototype.bind called on incompatible ", mr = Array.prototype.slice, Ot = Object.prototype.toString, jt = "[object Function]";
    Xr.exports = function(e) {
      var t = this;
      if (typeof t != "function" || Ot.call(t) !== jt)
        throw new TypeError(vt + t);
      for (var n = mr.call(arguments, 1), o, f3 = function() {
        if (this instanceof o) {
          var d3 = t.apply(this, n.concat(mr.call(arguments)));
          return Object(d3) === d3 ? d3 : this;
        } else
          return t.apply(e, n.concat(mr.call(arguments)));
      }, i = Math.max(0, t.length - n.length), a2 = [], y3 = 0;y3 < i; y3++)
        a2.push("$" + y3);
      if (o = Function("binder", "return function (" + a2.join(",") + "){ return binder.apply(this,arguments); }")(f3), t.prototype) {
        var l2 = function() {
        };
        l2.prototype = t.prototype, o.prototype = new l2, l2.prototype = null;
      }
      return o;
    };
  });
  V2 = p2((po, ee) => {
    var Pt = re();
    ee.exports = Function.prototype.bind || Pt;
  });
  ne = p2((lo, te) => {
    var wt = V2();
    te.exports = wt.call(Function.call, Object.prototype.hasOwnProperty);
  });
  H = p2((go, ue) => {
    var c2, x2 = SyntaxError, fe = Function, U2 = TypeError, hr = function(r) {
      try {
        return fe('"use strict"; return (' + r + ").constructor;")();
      } catch {
      }
    }, v2 = Object.getOwnPropertyDescriptor;
    if (v2)
      try {
        v2({}, "");
      } catch {
        v2 = null;
      }
    var Sr = function() {
      throw new U2;
    }, Et = v2 ? function() {
      try {
        return arguments.callee, Sr;
      } catch {
        try {
          return v2(arguments, "callee").get;
        } catch {
          return Sr;
        }
      }
    }() : Sr, B2 = Zr()(), Ft = Qr()(), g2 = Object.getPrototypeOf || (Ft ? function(r) {
      return r.__proto__;
    } : null), T2 = {}, It = typeof Uint8Array > "u" || !g2 ? c2 : g2(Uint8Array), O2 = { "%AggregateError%": typeof AggregateError > "u" ? c2 : AggregateError, "%Array%": Array, "%ArrayBuffer%": typeof ArrayBuffer > "u" ? c2 : ArrayBuffer, "%ArrayIteratorPrototype%": B2 && g2 ? g2([][Symbol.iterator]()) : c2, "%AsyncFromSyncIteratorPrototype%": c2, "%AsyncFunction%": T2, "%AsyncGenerator%": T2, "%AsyncGeneratorFunction%": T2, "%AsyncIteratorPrototype%": T2, "%Atomics%": typeof Atomics > "u" ? c2 : Atomics, "%BigInt%": typeof BigInt > "u" ? c2 : BigInt, "%BigInt64Array%": typeof BigInt64Array > "u" ? c2 : BigInt64Array, "%BigUint64Array%": typeof BigUint64Array > "u" ? c2 : BigUint64Array, "%Boolean%": Boolean, "%DataView%": typeof DataView > "u" ? c2 : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": Error, "%eval%": eval, "%EvalError%": EvalError, "%Float32Array%": typeof Float32Array > "u" ? c2 : Float32Array, "%Float64Array%": typeof Float64Array > "u" ? c2 : Float64Array, "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? c2 : FinalizationRegistry, "%Function%": fe, "%GeneratorFunction%": T2, "%Int8Array%": typeof Int8Array > "u" ? c2 : Int8Array, "%Int16Array%": typeof Int16Array > "u" ? c2 : Int16Array, "%Int32Array%": typeof Int32Array > "u" ? c2 : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": B2 && g2 ? g2(g2([][Symbol.iterator]())) : c2, "%JSON%": typeof JSON == "object" ? JSON : c2, "%Map%": typeof Map > "u" ? c2 : Map, "%MapIteratorPrototype%": typeof Map > "u" || !B2 || !g2 ? c2 : g2(new Map()[Symbol.iterator]()), "%Math%": Math, "%Number%": Number, "%Object%": Object, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": typeof Promise > "u" ? c2 : Promise, "%Proxy%": typeof Proxy > "u" ? c2 : Proxy, "%RangeError%": RangeError, "%ReferenceError%": ReferenceError, "%Reflect%": typeof Reflect > "u" ? c2 : Reflect, "%RegExp%": RegExp, "%Set%": typeof Set > "u" ? c2 : Set, "%SetIteratorPrototype%": typeof Set > "u" || !B2 || !g2 ? c2 : g2(new Set()[Symbol.iterator]()), "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? c2 : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": B2 && g2 ? g2(""[Symbol.iterator]()) : c2, "%Symbol%": B2 ? Symbol : c2, "%SyntaxError%": x2, "%ThrowTypeError%": Et, "%TypedArray%": It, "%TypeError%": U2, "%Uint8Array%": typeof Uint8Array > "u" ? c2 : Uint8Array, "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? c2 : Uint8ClampedArray, "%Uint16Array%": typeof Uint16Array > "u" ? c2 : Uint16Array, "%Uint32Array%": typeof Uint32Array > "u" ? c2 : Uint32Array, "%URIError%": URIError, "%WeakMap%": typeof WeakMap > "u" ? c2 : WeakMap, "%WeakRef%": typeof WeakRef > "u" ? c2 : WeakRef, "%WeakSet%": typeof WeakSet > "u" ? c2 : WeakSet };
    if (g2)
      try {
        null.error;
      } catch (r) {
        oe = g2(g2(r)), O2["%Error.prototype%"] = oe;
      }
    var oe, Bt = function r(e) {
      var t;
      if (e === "%AsyncFunction%")
        t = hr("async function () {}");
      else if (e === "%GeneratorFunction%")
        t = hr("function* () {}");
      else if (e === "%AsyncGeneratorFunction%")
        t = hr("async function* () {}");
      else if (e === "%AsyncGenerator%") {
        var n = r("%AsyncGeneratorFunction%");
        n && (t = n.prototype);
      } else if (e === "%AsyncIteratorPrototype%") {
        var o = r("%AsyncGenerator%");
        o && g2 && (t = g2(o.prototype));
      }
      return O2[e] = t, t;
    }, ie = { "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] }, N3 = V2(), J = ne(), Tt = N3.call(Function.call, Array.prototype.concat), Ut = N3.call(Function.apply, Array.prototype.splice), ae = N3.call(Function.call, String.prototype.replace), L2 = N3.call(Function.call, String.prototype.slice), xt = N3.call(Function.call, RegExp.prototype.exec), Rt = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Dt = /\\(\\)?/g, kt = function(e) {
      var t = L2(e, 0, 1), n = L2(e, -1);
      if (t === "%" && n !== "%")
        throw new x2("invalid intrinsic syntax, expected closing `%`");
      if (n === "%" && t !== "%")
        throw new x2("invalid intrinsic syntax, expected opening `%`");
      var o = [];
      return ae(e, Rt, function(f3, i, a2, y3) {
        o[o.length] = a2 ? ae(y3, Dt, "$1") : i || f3;
      }), o;
    }, Mt = function(e, t) {
      var n = e, o;
      if (J(ie, n) && (o = ie[n], n = "%" + o[0] + "%"), J(O2, n)) {
        var f3 = O2[n];
        if (f3 === T2 && (f3 = Bt(n)), typeof f3 > "u" && !t)
          throw new U2("intrinsic " + e + " exists, but is not available. Please file an issue!");
        return { alias: o, name: n, value: f3 };
      }
      throw new x2("intrinsic " + e + " does not exist!");
    };
    ue.exports = function(e, t) {
      if (typeof e != "string" || e.length === 0)
        throw new U2("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && typeof t != "boolean")
        throw new U2('"allowMissing" argument must be a boolean');
      if (xt(/^%?[^%]*%?$/, e) === null)
        throw new x2("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      var n = kt(e), o = n.length > 0 ? n[0] : "", f3 = Mt("%" + o + "%", t), i = f3.name, a2 = f3.value, y3 = false, l2 = f3.alias;
      l2 && (o = l2[0], Ut(n, Tt([0, 1], l2)));
      for (var d3 = 1, S2 = true;d3 < n.length; d3 += 1) {
        var b2 = n[d3], F = L2(b2, 0, 1), q2 = L2(b2, -1);
        if ((F === '"' || F === "'" || F === "`" || q2 === '"' || q2 === "'" || q2 === "`") && F !== q2)
          throw new x2("property names with quotes must have matching quotes");
        if ((b2 === "constructor" || !S2) && (y3 = true), o += "." + b2, i = "%" + o + "%", J(O2, i))
          a2 = O2[i];
        else if (a2 != null) {
          if (!(b2 in a2)) {
            if (!t)
              throw new U2("base intrinsic for " + e + " exists, but the property is not available.");
            return;
          }
          if (v2 && d3 + 1 >= n.length) {
            var W = v2(a2, b2);
            S2 = !!W, S2 && ("get" in W) && !("originalValue" in W.get) ? a2 = W.get : a2 = a2[b2];
          } else
            S2 = J(a2, b2), a2 = a2[b2];
          S2 && !y3 && (O2[i] = a2);
        }
      }
      return a2;
    };
  });
  Or = p2((bo, Z) => {
    var vr = V2(), R = H(), ye = R("%Function.prototype.apply%"), pe = R("%Function.prototype.call%"), le = R("%Reflect.apply%", true) || vr.call(pe, ye), se = R("%Object.getOwnPropertyDescriptor%", true), j3 = R("%Object.defineProperty%", true), Nt = R("%Math.max%");
    if (j3)
      try {
        j3({}, "a", { value: 1 });
      } catch {
        j3 = null;
      }
    Z.exports = function(e) {
      var t = le(vr, pe, arguments);
      if (se && j3) {
        var n = se(t, "length");
        n.configurable && j3(t, "length", { value: 1 + Nt(0, e.length - (arguments.length - 1)) });
      }
      return t;
    };
    var ce = function() {
      return le(vr, ye, arguments);
    };
    j3 ? j3(Z.exports, "apply", { value: ce }) : Z.exports.apply = ce;
  });
  jr = p2((Ao, be) => {
    var ge = H(), de = Or(), Ct = de(ge("String.prototype.indexOf"));
    be.exports = function(e, t) {
      var n = ge(e, !!t);
      return typeof n == "function" && Ct(e, ".prototype.") > -1 ? de(n) : n;
    };
  });
  he = p2((mo, me) => {
    var $t = z()(), _t = jr(), Pr = _t("Object.prototype.toString"), Y = function(e) {
      return $t && e && typeof e == "object" && (Symbol.toStringTag in e) ? false : Pr(e) === "[object Arguments]";
    }, Ae = function(e) {
      return Y(e) ? true : e !== null && typeof e == "object" && typeof e.length == "number" && e.length >= 0 && Pr(e) !== "[object Array]" && Pr(e.callee) === "[object Function]";
    }, Gt = function() {
      return Y(arguments);
    }();
    Y.isLegacyArguments = Ae;
    me.exports = Gt ? Y : Ae;
  });
  Oe = p2((ho, ve) => {
    var qt = Object.prototype.toString, Wt = Function.prototype.toString, zt = /^\s*(?:function)?\*/, Se = z()(), wr = Object.getPrototypeOf, Vt = function() {
      if (!Se)
        return false;
      try {
        return Function("return function*() {}")();
      } catch {
      }
    }, Er;
    ve.exports = function(e) {
      if (typeof e != "function")
        return false;
      if (zt.test(Wt.call(e)))
        return true;
      if (!Se) {
        var t = qt.call(e);
        return t === "[object GeneratorFunction]";
      }
      if (!wr)
        return false;
      if (typeof Er > "u") {
        var n = Vt();
        Er = n ? wr(n) : false;
      }
      return wr(e) === Er;
    };
  });
  Ee = p2((So, we) => {
    var Pe = Function.prototype.toString, D = typeof Reflect == "object" && Reflect !== null && Reflect.apply, Ir, K;
    if (typeof D == "function" && typeof Object.defineProperty == "function")
      try {
        Ir = Object.defineProperty({}, "length", { get: function() {
          throw K;
        } }), K = {}, D(function() {
          throw 42;
        }, null, Ir);
      } catch (r) {
        r !== K && (D = null);
      }
    else
      D = null;
    var Jt = /^\s*class\b/, Br = function(e) {
      try {
        var t = Pe.call(e);
        return Jt.test(t);
      } catch {
        return false;
      }
    }, Fr = function(e) {
      try {
        return Br(e) ? false : (Pe.call(e), true);
      } catch {
        return false;
      }
    }, Q2 = Object.prototype.toString, Lt = "[object Object]", Ht = "[object Function]", Zt = "[object GeneratorFunction]", Yt = "[object HTMLAllCollection]", Kt = "[object HTML document.all class]", Qt = "[object HTMLCollection]", Xt = typeof Symbol == "function" && !!Symbol.toStringTag, rn = !(0 in [,]), Tr = function() {
      return false;
    };
    typeof document == "object" && (je = document.all, Q2.call(je) === Q2.call(document.all) && (Tr = function(e) {
      if ((rn || !e) && (typeof e > "u" || typeof e == "object"))
        try {
          var t = Q2.call(e);
          return (t === Yt || t === Kt || t === Qt || t === Lt) && e("") == null;
        } catch {
        }
      return false;
    }));
    var je;
    we.exports = D ? function(e) {
      if (Tr(e))
        return true;
      if (!e || typeof e != "function" && typeof e != "object")
        return false;
      try {
        D(e, null, Ir);
      } catch (t) {
        if (t !== K)
          return false;
      }
      return !Br(e) && Fr(e);
    } : function(e) {
      if (Tr(e))
        return true;
      if (!e || typeof e != "function" && typeof e != "object")
        return false;
      if (Xt)
        return Fr(e);
      if (Br(e))
        return false;
      var t = Q2.call(e);
      return t !== Ht && t !== Zt && !/^\[object HTML/.test(t) ? false : Fr(e);
    };
  });
  Be = p2((vo, Ie) => {
    var en = Ee(), tn = Object.prototype.toString, Fe = Object.prototype.hasOwnProperty, nn = function(e, t, n) {
      for (var o = 0, f3 = e.length;o < f3; o++)
        Fe.call(e, o) && (n == null ? t(e[o], o, e) : t.call(n, e[o], o, e));
    }, on = function(e, t, n) {
      for (var o = 0, f3 = e.length;o < f3; o++)
        n == null ? t(e.charAt(o), o, e) : t.call(n, e.charAt(o), o, e);
    }, an = function(e, t, n) {
      for (var o in e)
        Fe.call(e, o) && (n == null ? t(e[o], o, e) : t.call(n, e[o], o, e));
    }, fn = function(e, t, n) {
      if (!en(t))
        throw new TypeError("iterator must be a function");
      var o;
      arguments.length >= 3 && (o = n), tn.call(e) === "[object Array]" ? nn(e, t, o) : typeof e == "string" ? on(e, t, o) : an(e, t, o);
    };
    Ie.exports = fn;
  });
  Ue = p2((Oo, Te) => {
    var Ur = ["BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray"], un = typeof globalThis > "u" ? global : globalThis;
    Te.exports = function() {
      for (var e = [], t = 0;t < Ur.length; t++)
        typeof un[Ur[t]] == "function" && (e[e.length] = Ur[t]);
      return e;
    };
  });
  Re = p2((jo, xe) => {
    var sn = H(), X2 = sn("%Object.getOwnPropertyDescriptor%", true);
    if (X2)
      try {
        X2([], "length");
      } catch {
        X2 = null;
      }
    xe.exports = X2;
  });
  Mr = p2((Po, Ne) => {
    var er = Be(), cn = Ue(), De = Or(), Dr = jr(), rr = Re(), yn = Dr("Object.prototype.toString"), Me = z()(), ke = typeof globalThis > "u" ? global : globalThis, Rr = cn(), kr = Dr("String.prototype.slice"), xr = Object.getPrototypeOf, pn = Dr("Array.prototype.indexOf", true) || function(e, t) {
      for (var n = 0;n < e.length; n += 1)
        if (e[n] === t)
          return n;
      return -1;
    }, tr = { __proto__: null };
    Me && rr && xr ? er(Rr, function(r) {
      var e = new ke[r];
      if (Symbol.toStringTag in e) {
        var t = xr(e), n = rr(t, Symbol.toStringTag);
        if (!n) {
          var o = xr(t);
          n = rr(o, Symbol.toStringTag);
        }
        tr["$" + r] = De(n.get);
      }
    }) : er(Rr, function(r) {
      var e = new ke[r];
      tr["$" + r] = De(e.slice);
    });
    var ln = function(e) {
      var t = false;
      return er(tr, function(n, o) {
        if (!t)
          try {
            "$" + n(e) === o && (t = kr(o, 1));
          } catch {
          }
      }), t;
    }, gn = function(e) {
      var t = false;
      return er(tr, function(n, o) {
        if (!t)
          try {
            n(e), t = kr(o, 1);
          } catch {
          }
      }), t;
    };
    Ne.exports = function(e) {
      if (!e || typeof e != "object")
        return false;
      if (!Me) {
        var t = kr(yn(e), 8, -1);
        return pn(Rr, t) > -1 ? t : t !== "Object" ? false : gn(e);
      }
      return rr ? ln(e) : null;
    };
  });
  $e = p2((wo, Ce) => {
    var dn = Mr();
    Ce.exports = function(e) {
      return !!dn(e);
    };
  });
  Xe = p2((u2) => {
    var bn = he(), An = Oe(), m2 = Mr(), _e = $e();
    function k2(r) {
      return r.call.bind(r);
    }
    var Ge = typeof BigInt < "u", qe = typeof Symbol < "u", A3 = k2(Object.prototype.toString), mn = k2(Number.prototype.valueOf), hn = k2(String.prototype.valueOf), Sn = k2(Boolean.prototype.valueOf);
    Ge && (We = k2(BigInt.prototype.valueOf));
    var We;
    qe && (ze = k2(Symbol.prototype.valueOf));
    var ze;
    function $(r, e) {
      if (typeof r != "object")
        return false;
      try {
        return e(r), true;
      } catch {
        return false;
      }
    }
    u2.isArgumentsObject = bn;
    u2.isGeneratorFunction = An;
    u2.isTypedArray = _e;
    function vn(r) {
      return typeof Promise < "u" && r instanceof Promise || r !== null && typeof r == "object" && typeof r.then == "function" && typeof r.catch == "function";
    }
    u2.isPromise = vn;
    function On(r) {
      return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(r) : _e(r) || Je(r);
    }
    u2.isArrayBufferView = On;
    function jn(r) {
      return m2(r) === "Uint8Array";
    }
    u2.isUint8Array = jn;
    function Pn(r) {
      return m2(r) === "Uint8ClampedArray";
    }
    u2.isUint8ClampedArray = Pn;
    function wn(r) {
      return m2(r) === "Uint16Array";
    }
    u2.isUint16Array = wn;
    function En(r) {
      return m2(r) === "Uint32Array";
    }
    u2.isUint32Array = En;
    function Fn(r) {
      return m2(r) === "Int8Array";
    }
    u2.isInt8Array = Fn;
    function In(r) {
      return m2(r) === "Int16Array";
    }
    u2.isInt16Array = In;
    function Bn(r) {
      return m2(r) === "Int32Array";
    }
    u2.isInt32Array = Bn;
    function Tn(r) {
      return m2(r) === "Float32Array";
    }
    u2.isFloat32Array = Tn;
    function Un(r) {
      return m2(r) === "Float64Array";
    }
    u2.isFloat64Array = Un;
    function xn(r) {
      return m2(r) === "BigInt64Array";
    }
    u2.isBigInt64Array = xn;
    function Rn(r) {
      return m2(r) === "BigUint64Array";
    }
    u2.isBigUint64Array = Rn;
    function nr(r) {
      return A3(r) === "[object Map]";
    }
    nr.working = typeof Map < "u" && nr(new Map);
    function Dn(r) {
      return typeof Map > "u" ? false : nr.working ? nr(r) : r instanceof Map;
    }
    u2.isMap = Dn;
    function or(r) {
      return A3(r) === "[object Set]";
    }
    or.working = typeof Set < "u" && or(new Set);
    function kn(r) {
      return typeof Set > "u" ? false : or.working ? or(r) : r instanceof Set;
    }
    u2.isSet = kn;
    function ir(r) {
      return A3(r) === "[object WeakMap]";
    }
    ir.working = typeof WeakMap < "u" && ir(new WeakMap);
    function Mn(r) {
      return typeof WeakMap > "u" ? false : ir.working ? ir(r) : r instanceof WeakMap;
    }
    u2.isWeakMap = Mn;
    function Cr(r) {
      return A3(r) === "[object WeakSet]";
    }
    Cr.working = typeof WeakSet < "u" && Cr(new WeakSet);
    function Nn(r) {
      return Cr(r);
    }
    u2.isWeakSet = Nn;
    function ar(r) {
      return A3(r) === "[object ArrayBuffer]";
    }
    ar.working = typeof ArrayBuffer < "u" && ar(new ArrayBuffer);
    function Ve(r) {
      return typeof ArrayBuffer > "u" ? false : ar.working ? ar(r) : r instanceof ArrayBuffer;
    }
    u2.isArrayBuffer = Ve;
    function fr(r) {
      return A3(r) === "[object DataView]";
    }
    fr.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && fr(new DataView(new ArrayBuffer(1), 0, 1));
    function Je(r) {
      return typeof DataView > "u" ? false : fr.working ? fr(r) : r instanceof DataView;
    }
    u2.isDataView = Je;
    var Nr = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : undefined;
    function C2(r) {
      return A3(r) === "[object SharedArrayBuffer]";
    }
    function Le(r) {
      return typeof Nr > "u" ? false : (typeof C2.working > "u" && (C2.working = C2(new Nr)), C2.working ? C2(r) : r instanceof Nr);
    }
    u2.isSharedArrayBuffer = Le;
    function Cn(r) {
      return A3(r) === "[object AsyncFunction]";
    }
    u2.isAsyncFunction = Cn;
    function $n(r) {
      return A3(r) === "[object Map Iterator]";
    }
    u2.isMapIterator = $n;
    function _n(r) {
      return A3(r) === "[object Set Iterator]";
    }
    u2.isSetIterator = _n;
    function Gn(r) {
      return A3(r) === "[object Generator]";
    }
    u2.isGeneratorObject = Gn;
    function qn(r) {
      return A3(r) === "[object WebAssembly.Module]";
    }
    u2.isWebAssemblyCompiledModule = qn;
    function He(r) {
      return $(r, mn);
    }
    u2.isNumberObject = He;
    function Ze(r) {
      return $(r, hn);
    }
    u2.isStringObject = Ze;
    function Ye(r) {
      return $(r, Sn);
    }
    u2.isBooleanObject = Ye;
    function Ke(r) {
      return Ge && $(r, We);
    }
    u2.isBigIntObject = Ke;
    function Qe(r) {
      return qe && $(r, ze);
    }
    u2.isSymbolObject = Qe;
    function Wn(r) {
      return He(r) || Ze(r) || Ye(r) || Ke(r) || Qe(r);
    }
    u2.isBoxedPrimitive = Wn;
    function zn(r) {
      return typeof Uint8Array < "u" && (Ve(r) || Le(r));
    }
    u2.isAnyArrayBuffer = zn;
    ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(r) {
      Object.defineProperty(u2, r, { enumerable: false, value: function() {
        throw new Error(r + " is not supported in userland");
      } });
    });
  });
  et = p2((Fo, rt) => {
    rt.exports = function(e) {
      return e && typeof e == "object" && typeof e.copy == "function" && typeof e.fill == "function" && typeof e.readUInt8 == "function";
    };
  });
  tt = p2((Io, $r) => {
    typeof Object.create == "function" ? $r.exports = function(e, t) {
      t && (e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } }));
    } : $r.exports = function(e, t) {
      if (t) {
        e.super_ = t;
        var n = function() {
        };
        n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e;
      }
    };
  });
  ut = p2((s2) => {
    var nt = Object.getOwnPropertyDescriptors || function(e) {
      for (var t = Object.keys(e), n = {}, o = 0;o < t.length; o++)
        n[t[o]] = Object.getOwnPropertyDescriptor(e, t[o]);
      return n;
    }, Vn = /%[sdj%]/g;
    s2.format = function(r) {
      if (!gr(r)) {
        for (var e = [], t = 0;t < arguments.length; t++)
          e.push(h3(arguments[t]));
        return e.join(" ");
      }
      for (var t = 1, n = arguments, o = n.length, f3 = String(r).replace(Vn, function(a2) {
        if (a2 === "%%")
          return "%";
        if (t >= o)
          return a2;
        switch (a2) {
          case "%s":
            return String(n[t++]);
          case "%d":
            return Number(n[t++]);
          case "%j":
            try {
              return JSON.stringify(n[t++]);
            } catch {
              return "[Circular]";
            }
          default:
            return a2;
        }
      }), i = n[t];t < o; i = n[++t])
        lr(i) || !M2(i) ? f3 += " " + i : f3 += " " + h3(i);
      return f3;
    };
    s2.deprecate = function(r, e) {
      if (typeof process < "u" && process.noDeprecation === true)
        return r;
      if (typeof process > "u")
        return function() {
          return s2.deprecate(r, e).apply(this, arguments);
        };
      var t = false;
      function n() {
        if (!t) {
          if (process.throwDeprecation)
            throw new Error(e);
          process.traceDeprecation ? console.trace(e) : console.error(e), t = true;
        }
        return r.apply(this, arguments);
      }
      return n;
    };
    var ur = {}, ot = /^$/;
    process.env.NODE_DEBUG && (sr = process.env.NODE_DEBUG, sr = sr.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), ot = new RegExp("^" + sr + "$", "i"));
    var sr;
    s2.debuglog = function(r) {
      if (r = r.toUpperCase(), !ur[r])
        if (ot.test(r)) {
          var e = process.pid;
          ur[r] = function() {
            var t = s2.format.apply(s2, arguments);
            console.error("%s %d: %s", r, e, t);
          };
        } else
          ur[r] = function() {
          };
      return ur[r];
    };
    function h3(r, e) {
      var t = { seen: [], stylize: Ln };
      return arguments.length >= 3 && (t.depth = arguments[2]), arguments.length >= 4 && (t.colors = arguments[3]), Wr(e) ? t.showHidden = e : e && s2._extend(t, e), w(t.showHidden) && (t.showHidden = false), w(t.depth) && (t.depth = 2), w(t.colors) && (t.colors = false), w(t.customInspect) && (t.customInspect = true), t.colors && (t.stylize = Jn), yr(t, r, t.depth);
    }
    s2.inspect = h3;
    h3.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] };
    h3.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" };
    function Jn(r, e) {
      var t = h3.styles[e];
      return t ? "\x1B[" + h3.colors[t][0] + "m" + r + "\x1B[" + h3.colors[t][1] + "m" : r;
    }
    function Ln(r, e) {
      return r;
    }
    function Hn(r) {
      var e = {};
      return r.forEach(function(t, n) {
        e[t] = true;
      }), e;
    }
    function yr(r, e, t) {
      if (r.customInspect && e && cr(e.inspect) && e.inspect !== s2.inspect && !(e.constructor && e.constructor.prototype === e)) {
        var n = e.inspect(t, r);
        return gr(n) || (n = yr(r, n, t)), n;
      }
      var o = Zn(r, e);
      if (o)
        return o;
      var f3 = Object.keys(e), i = Hn(f3);
      if (r.showHidden && (f3 = Object.getOwnPropertyNames(e)), G(e) && (f3.indexOf("message") >= 0 || f3.indexOf("description") >= 0))
        return _r(e);
      if (f3.length === 0) {
        if (cr(e)) {
          var a2 = e.name ? ": " + e.name : "";
          return r.stylize("[Function" + a2 + "]", "special");
        }
        if (_2(e))
          return r.stylize(RegExp.prototype.toString.call(e), "regexp");
        if (pr(e))
          return r.stylize(Date.prototype.toString.call(e), "date");
        if (G(e))
          return _r(e);
      }
      var y3 = "", l2 = false, d3 = ["{", "}"];
      if (it(e) && (l2 = true, d3 = ["[", "]"]), cr(e)) {
        var S2 = e.name ? ": " + e.name : "";
        y3 = " [Function" + S2 + "]";
      }
      if (_2(e) && (y3 = " " + RegExp.prototype.toString.call(e)), pr(e) && (y3 = " " + Date.prototype.toUTCString.call(e)), G(e) && (y3 = " " + _r(e)), f3.length === 0 && (!l2 || e.length == 0))
        return d3[0] + y3 + d3[1];
      if (t < 0)
        return _2(e) ? r.stylize(RegExp.prototype.toString.call(e), "regexp") : r.stylize("[Object]", "special");
      r.seen.push(e);
      var b2;
      return l2 ? b2 = Yn(r, e, t, i, f3) : b2 = f3.map(function(F) {
        return qr(r, e, t, i, F, l2);
      }), r.seen.pop(), Kn(b2, y3, d3);
    }
    function Zn(r, e) {
      if (w(e))
        return r.stylize("undefined", "undefined");
      if (gr(e)) {
        var t = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return r.stylize(t, "string");
      }
      if (at(e))
        return r.stylize("" + e, "number");
      if (Wr(e))
        return r.stylize("" + e, "boolean");
      if (lr(e))
        return r.stylize("null", "null");
    }
    function _r(r) {
      return "[" + Error.prototype.toString.call(r) + "]";
    }
    function Yn(r, e, t, n, o) {
      for (var f3 = [], i = 0, a2 = e.length;i < a2; ++i)
        ft(e, String(i)) ? f3.push(qr(r, e, t, n, String(i), true)) : f3.push("");
      return o.forEach(function(y3) {
        y3.match(/^\d+$/) || f3.push(qr(r, e, t, n, y3, true));
      }), f3;
    }
    function qr(r, e, t, n, o, f3) {
      var i, a2, y3;
      if (y3 = Object.getOwnPropertyDescriptor(e, o) || { value: e[o] }, y3.get ? y3.set ? a2 = r.stylize("[Getter/Setter]", "special") : a2 = r.stylize("[Getter]", "special") : y3.set && (a2 = r.stylize("[Setter]", "special")), ft(n, o) || (i = "[" + o + "]"), a2 || (r.seen.indexOf(y3.value) < 0 ? (lr(t) ? a2 = yr(r, y3.value, null) : a2 = yr(r, y3.value, t - 1), a2.indexOf(`
`) > -1 && (f3 ? a2 = a2.split(`
`).map(function(l2) {
        return "  " + l2;
      }).join(`
`).slice(2) : a2 = `
` + a2.split(`
`).map(function(l2) {
        return "   " + l2;
      }).join(`
`))) : a2 = r.stylize("[Circular]", "special")), w(i)) {
        if (f3 && o.match(/^\d+$/))
          return a2;
        i = JSON.stringify("" + o), i.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (i = i.slice(1, -1), i = r.stylize(i, "name")) : (i = i.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), i = r.stylize(i, "string"));
      }
      return i + ": " + a2;
    }
    function Kn(r, e, t) {
      var n = 0, o = r.reduce(function(f3, i) {
        return n++, i.indexOf(`
`) >= 0 && n++, f3 + i.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
      return o > 60 ? t[0] + (e === "" ? "" : e + `
 `) + " " + r.join(`,
  `) + " " + t[1] : t[0] + e + " " + r.join(", ") + " " + t[1];
    }
    s2.types = Xe();
    function it(r) {
      return Array.isArray(r);
    }
    s2.isArray = it;
    function Wr(r) {
      return typeof r == "boolean";
    }
    s2.isBoolean = Wr;
    function lr(r) {
      return r === null;
    }
    s2.isNull = lr;
    function Qn(r) {
      return r == null;
    }
    s2.isNullOrUndefined = Qn;
    function at(r) {
      return typeof r == "number";
    }
    s2.isNumber = at;
    function gr(r) {
      return typeof r == "string";
    }
    s2.isString = gr;
    function Xn(r) {
      return typeof r == "symbol";
    }
    s2.isSymbol = Xn;
    function w(r) {
      return r === undefined;
    }
    s2.isUndefined = w;
    function _2(r) {
      return M2(r) && zr(r) === "[object RegExp]";
    }
    s2.isRegExp = _2;
    s2.types.isRegExp = _2;
    function M2(r) {
      return typeof r == "object" && r !== null;
    }
    s2.isObject = M2;
    function pr(r) {
      return M2(r) && zr(r) === "[object Date]";
    }
    s2.isDate = pr;
    s2.types.isDate = pr;
    function G(r) {
      return M2(r) && (zr(r) === "[object Error]" || r instanceof Error);
    }
    s2.isError = G;
    s2.types.isNativeError = G;
    function cr(r) {
      return typeof r == "function";
    }
    s2.isFunction = cr;
    function ro(r) {
      return r === null || typeof r == "boolean" || typeof r == "number" || typeof r == "string" || typeof r == "symbol" || typeof r > "u";
    }
    s2.isPrimitive = ro;
    s2.isBuffer = et();
    function zr(r) {
      return Object.prototype.toString.call(r);
    }
    function Gr(r) {
      return r < 10 ? "0" + r.toString(10) : r.toString(10);
    }
    var eo = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    function to() {
      var r = new Date, e = [Gr(r.getHours()), Gr(r.getMinutes()), Gr(r.getSeconds())].join(":");
      return [r.getDate(), eo[r.getMonth()], e].join(" ");
    }
    s2.log = function() {
      console.log("%s - %s", to(), s2.format.apply(s2, arguments));
    };
    s2.inherits = tt();
    s2._extend = function(r, e) {
      if (!e || !M2(e))
        return r;
      for (var t = Object.keys(e), n = t.length;n--; )
        r[t[n]] = e[t[n]];
      return r;
    };
    function ft(r, e) {
      return Object.prototype.hasOwnProperty.call(r, e);
    }
    var P = typeof Symbol < "u" ? Symbol("util.promisify.custom") : undefined;
    s2.promisify = function(e) {
      if (typeof e != "function")
        throw new TypeError('The "original" argument must be of type Function');
      if (P && e[P]) {
        var t = e[P];
        if (typeof t != "function")
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(t, P, { value: t, enumerable: false, writable: false, configurable: true }), t;
      }
      function t() {
        for (var n, o, f3 = new Promise(function(y3, l2) {
          n = y3, o = l2;
        }), i = [], a2 = 0;a2 < arguments.length; a2++)
          i.push(arguments[a2]);
        i.push(function(y3, l2) {
          y3 ? o(y3) : n(l2);
        });
        try {
          e.apply(this, i);
        } catch (y3) {
          o(y3);
        }
        return f3;
      }
      return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), P && Object.defineProperty(t, P, { value: t, enumerable: false, writable: false, configurable: true }), Object.defineProperties(t, nt(e));
    };
    s2.promisify.custom = P;
    function no(r, e) {
      if (!r) {
        var t = new Error("Promise was rejected with a falsy value");
        t.reason = r, r = t;
      }
      return e(r);
    }
    function oo(r) {
      if (typeof r != "function")
        throw new TypeError('The "original" argument must be of type Function');
      function e() {
        for (var t = [], n = 0;n < arguments.length; n++)
          t.push(arguments[n]);
        var o = t.pop();
        if (typeof o != "function")
          throw new TypeError("The last argument must be of type Function");
        var f3 = this, i = function() {
          return o.apply(f3, arguments);
        };
        r.apply(this, t).then(function(a2) {
          process.nextTick(i.bind(null, null, a2));
        }, function(a2) {
          process.nextTick(no.bind(null, a2, i));
        });
      }
      return Object.setPrototypeOf(e, Object.getPrototypeOf(r)), Object.defineProperties(e, nt(r)), e;
    }
    s2.callbackify = oo;
  });
  E2 = {};
  bt(E2, { TextDecoder: () => ct, TextEncoder: () => st, default: () => io });
  I3(E2, At(ut()));
  st = globalThis.TextEncoder;
  ct = globalThis.TextDecoder;
  io = { TextEncoder: st, TextDecoder: ct };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/ref/node_modules/debug/node_modules/ms/index.js
var require_ms = __commonJS((exports, module) => {
  var parse = function(str) {
    str = String(str);
    if (str.length > 100) {
      return;
    }
    var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
      return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || "ms").toLowerCase();
    switch (type) {
      case "years":
      case "year":
      case "yrs":
      case "yr":
      case "y":
        return n * y3;
      case "days":
      case "day":
      case "d":
        return n * d3;
      case "hours":
      case "hour":
      case "hrs":
      case "hr":
      case "h":
        return n * h3;
      case "minutes":
      case "minute":
      case "mins":
      case "min":
      case "m":
        return n * m2;
      case "seconds":
      case "second":
      case "secs":
      case "sec":
      case "s":
        return n * s2;
      case "milliseconds":
      case "millisecond":
      case "msecs":
      case "msec":
      case "ms":
        return n;
      default:
        return;
    }
  };
  var fmtShort = function(ms) {
    if (ms >= d3) {
      return Math.round(ms / d3) + "d";
    }
    if (ms >= h3) {
      return Math.round(ms / h3) + "h";
    }
    if (ms >= m2) {
      return Math.round(ms / m2) + "m";
    }
    if (ms >= s2) {
      return Math.round(ms / s2) + "s";
    }
    return ms + "ms";
  };
  var fmtLong = function(ms) {
    return plural(ms, d3, "day") || plural(ms, h3, "hour") || plural(ms, m2, "minute") || plural(ms, s2, "second") || ms + " ms";
  };
  var plural = function(ms, n, name) {
    if (ms < n) {
      return;
    }
    if (ms < n * 1.5) {
      return Math.floor(ms / n) + " " + name;
    }
    return Math.ceil(ms / n) + " " + name + "s";
  };
  var s2 = 1000;
  var m2 = s2 * 60;
  var h3 = m2 * 60;
  var d3 = h3 * 24;
  var y3 = d3 * 365.25;
  module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === "string" && val.length > 0) {
      return parse(val);
    } else if (type === "number" && isNaN(val) === false) {
      return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/ref/node_modules/debug/src/debug.js
var require_debug = __commonJS((exports, module) => {
  var selectColor = function(namespace) {
    var hash = 0, i;
    for (i in namespace) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0;
    }
    return exports.colors[Math.abs(hash) % exports.colors.length];
  };
  var createDebug = function(namespace) {
    function debug() {
      if (!debug.enabled)
        return;
      var self2 = debug;
      var curr = +new Date;
      var ms = curr - (prevTime || curr);
      self2.diff = ms;
      self2.prev = prevTime;
      self2.curr = curr;
      prevTime = curr;
      var args = new Array(arguments.length);
      for (var i = 0;i < args.length; i++) {
        args[i] = arguments[i];
      }
      args[0] = exports.coerce(args[0]);
      if (typeof args[0] !== "string") {
        args.unshift("%O");
      }
      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
        if (match === "%%")
          return match;
        index++;
        var formatter = exports.formatters[format];
        if (typeof formatter === "function") {
          var val = args[index];
          match = formatter.call(self2, val);
          args.splice(index, 1);
          index--;
        }
        return match;
      });
      exports.formatArgs.call(self2, args);
      var logFn = debug.log || exports.log || console.log.bind(console);
      logFn.apply(self2, args);
    }
    debug.namespace = namespace;
    debug.enabled = exports.enabled(namespace);
    debug.useColors = exports.useColors();
    debug.color = selectColor(namespace);
    if (typeof exports.init === "function") {
      exports.init(debug);
    }
    return debug;
  };
  var enable = function(namespaces) {
    exports.save(namespaces);
    exports.names = [];
    exports.skips = [];
    var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
    var len = split.length;
    for (var i = 0;i < len; i++) {
      if (!split[i])
        continue;
      namespaces = split[i].replace(/\*/g, ".*?");
      if (namespaces[0] === "-") {
        exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
      } else {
        exports.names.push(new RegExp("^" + namespaces + "$"));
      }
    }
  };
  var disable = function() {
    exports.enable("");
  };
  var enabled = function(name) {
    var i, len;
    for (i = 0, len = exports.skips.length;i < len; i++) {
      if (exports.skips[i].test(name)) {
        return false;
      }
    }
    for (i = 0, len = exports.names.length;i < len; i++) {
      if (exports.names[i].test(name)) {
        return true;
      }
    }
    return false;
  };
  var coerce = function(val) {
    if (val instanceof Error)
      return val.stack || val.message;
    return val;
  };
  exports = module.exports = createDebug.debug = createDebug["default"] = createDebug;
  exports.coerce = coerce;
  exports.disable = disable;
  exports.enable = enable;
  exports.enabled = enabled;
  exports.humanize = require_ms();
  exports.names = [];
  exports.skips = [];
  exports.formatters = {};
  var prevTime;
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/ref/node_modules/debug/src/browser.js
var require_browser = __commonJS((exports, module) => {
  var useColors = function() {
    if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
      return true;
    }
    return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  };
  var formatArgs = function(args) {
    var useColors2 = this.useColors;
    args[0] = (useColors2 ? "%c" : "") + this.namespace + (useColors2 ? " %c" : " ") + args[0] + (useColors2 ? "%c " : " ") + "+" + exports.humanize(this.diff);
    if (!useColors2)
      return;
    var c2 = "color: " + this.color;
    args.splice(1, 0, c2, "color: inherit");
    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, function(match) {
      if (match === "%%")
        return;
      index++;
      if (match === "%c") {
        lastC = index;
      }
    });
    args.splice(lastC, 0, c2);
  };
  var log = function() {
    return typeof console === "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
  };
  var save = function(namespaces) {
    try {
      if (namespaces == null) {
        exports.storage.removeItem("debug");
      } else {
        exports.storage.debug = namespaces;
      }
    } catch (e) {
    }
  };
  var load = function() {
    var r;
    try {
      r = exports.storage.debug;
    } catch (e) {
    }
    if (!r && typeof process !== "undefined" && ("env" in process)) {
      r = process.env.DEBUG;
    }
    return r;
  };
  var localstorage = function() {
    try {
      return window.localStorage;
    } catch (e) {
    }
  };
  exports = module.exports = require_debug();
  exports.log = log;
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = typeof chrome != "undefined" && typeof chrome.storage != "undefined" ? chrome.storage.local : localstorage();
  exports.colors = [
    "lightseagreen",
    "forestgreen",
    "goldenrod",
    "dodgerblue",
    "darkorchid",
    "crimson"
  ];
  exports.formatters.j = function(v2) {
    try {
      return JSON.stringify(v2);
    } catch (err) {
      return "[UnexpectedJSONParseError]: " + err.message;
    }
  };
  exports.enable(load());
});

// node:path
var exports_path = {};
__export(exports_path, {
  default: () => {
    {
      return q2;
    }
  }
});
var L2, b2, z2, D, T2, R, _2, E3, C2, A3, y3, h3, m2, q2;
var init_path = __esm(() => {
  L2 = Object.create;
  b2 = Object.defineProperty;
  z2 = Object.getOwnPropertyDescriptor;
  D = Object.getOwnPropertyNames;
  T2 = Object.getPrototypeOf;
  R = Object.prototype.hasOwnProperty;
  _2 = (f3, e) => () => (e || f3((e = { exports: {} }).exports, e), e.exports);
  E3 = (f3, e) => {
    for (var r in e)
      b2(f3, r, { get: e[r], enumerable: true });
  };
  C2 = (f3, e, r, l2) => {
    if (e && typeof e == "object" || typeof e == "function")
      for (let i of D(e))
        !R.call(f3, i) && i !== r && b2(f3, i, { get: () => e[i], enumerable: !(l2 = z2(e, i)) || l2.enumerable });
    return f3;
  };
  A3 = (f3, e, r) => (C2(f3, e, "default"), r && C2(r, e, "default"));
  y3 = (f3, e, r) => (r = f3 != null ? L2(T2(f3)) : {}, C2(e || !f3 || !f3.__esModule ? b2(r, "default", { value: f3, enumerable: true }) : r, f3));
  h3 = _2((F, S2) => {
    function c2(f3) {
      if (typeof f3 != "string")
        throw new TypeError("Path must be a string. Received " + JSON.stringify(f3));
    }
    function w(f3, e) {
      for (var r = "", l2 = 0, i = -1, s2 = 0, n, t = 0;t <= f3.length; ++t) {
        if (t < f3.length)
          n = f3.charCodeAt(t);
        else {
          if (n === 47)
            break;
          n = 47;
        }
        if (n === 47) {
          if (!(i === t - 1 || s2 === 1))
            if (i !== t - 1 && s2 === 2) {
              if (r.length < 2 || l2 !== 2 || r.charCodeAt(r.length - 1) !== 46 || r.charCodeAt(r.length - 2) !== 46) {
                if (r.length > 2) {
                  var a2 = r.lastIndexOf("/");
                  if (a2 !== r.length - 1) {
                    a2 === -1 ? (r = "", l2 = 0) : (r = r.slice(0, a2), l2 = r.length - 1 - r.lastIndexOf("/")), i = t, s2 = 0;
                    continue;
                  }
                } else if (r.length === 2 || r.length === 1) {
                  r = "", l2 = 0, i = t, s2 = 0;
                  continue;
                }
              }
              e && (r.length > 0 ? r += "/.." : r = "..", l2 = 2);
            } else
              r.length > 0 ? r += "/" + f3.slice(i + 1, t) : r = f3.slice(i + 1, t), l2 = t - i - 1;
          i = t, s2 = 0;
        } else
          n === 46 && s2 !== -1 ? ++s2 : s2 = -1;
      }
      return r;
    }
    function J(f3, e) {
      var r = e.dir || e.root, l2 = e.base || (e.name || "") + (e.ext || "");
      return r ? r === e.root ? r + l2 : r + f3 + l2 : l2;
    }
    var g2 = { resolve: function() {
      for (var e = "", r = false, l2, i = arguments.length - 1;i >= -1 && !r; i--) {
        var s2;
        i >= 0 ? s2 = arguments[i] : (l2 === undefined && (l2 = process.cwd()), s2 = l2), c2(s2), s2.length !== 0 && (e = s2 + "/" + e, r = s2.charCodeAt(0) === 47);
      }
      return e = w(e, !r), r ? e.length > 0 ? "/" + e : "/" : e.length > 0 ? e : ".";
    }, normalize: function(e) {
      if (c2(e), e.length === 0)
        return ".";
      var r = e.charCodeAt(0) === 47, l2 = e.charCodeAt(e.length - 1) === 47;
      return e = w(e, !r), e.length === 0 && !r && (e = "."), e.length > 0 && l2 && (e += "/"), r ? "/" + e : e;
    }, isAbsolute: function(e) {
      return c2(e), e.length > 0 && e.charCodeAt(0) === 47;
    }, join: function() {
      if (arguments.length === 0)
        return ".";
      for (var e, r = 0;r < arguments.length; ++r) {
        var l2 = arguments[r];
        c2(l2), l2.length > 0 && (e === undefined ? e = l2 : e += "/" + l2);
      }
      return e === undefined ? "." : g2.normalize(e);
    }, relative: function(e, r) {
      if (c2(e), c2(r), e === r || (e = g2.resolve(e), r = g2.resolve(r), e === r))
        return "";
      for (var l2 = 1;l2 < e.length && e.charCodeAt(l2) === 47; ++l2)
        ;
      for (var i = e.length, s2 = i - l2, n = 1;n < r.length && r.charCodeAt(n) === 47; ++n)
        ;
      for (var t = r.length, a2 = t - n, v2 = s2 < a2 ? s2 : a2, u2 = -1, o = 0;o <= v2; ++o) {
        if (o === v2) {
          if (a2 > v2) {
            if (r.charCodeAt(n + o) === 47)
              return r.slice(n + o + 1);
            if (o === 0)
              return r.slice(n + o);
          } else
            s2 > v2 && (e.charCodeAt(l2 + o) === 47 ? u2 = o : o === 0 && (u2 = 0));
          break;
        }
        var k2 = e.charCodeAt(l2 + o), P = r.charCodeAt(n + o);
        if (k2 !== P)
          break;
        k2 === 47 && (u2 = o);
      }
      var d3 = "";
      for (o = l2 + u2 + 1;o <= i; ++o)
        (o === i || e.charCodeAt(o) === 47) && (d3.length === 0 ? d3 += ".." : d3 += "/..");
      return d3.length > 0 ? d3 + r.slice(n + u2) : (n += u2, r.charCodeAt(n) === 47 && ++n, r.slice(n));
    }, _makeLong: function(e) {
      return e;
    }, dirname: function(e) {
      if (c2(e), e.length === 0)
        return ".";
      for (var r = e.charCodeAt(0), l2 = r === 47, i = -1, s2 = true, n = e.length - 1;n >= 1; --n)
        if (r = e.charCodeAt(n), r === 47) {
          if (!s2) {
            i = n;
            break;
          }
        } else
          s2 = false;
      return i === -1 ? l2 ? "/" : "." : l2 && i === 1 ? "//" : e.slice(0, i);
    }, basename: function(e, r) {
      if (r !== undefined && typeof r != "string")
        throw new TypeError('"ext" argument must be a string');
      c2(e);
      var l2 = 0, i = -1, s2 = true, n;
      if (r !== undefined && r.length > 0 && r.length <= e.length) {
        if (r.length === e.length && r === e)
          return "";
        var t = r.length - 1, a2 = -1;
        for (n = e.length - 1;n >= 0; --n) {
          var v2 = e.charCodeAt(n);
          if (v2 === 47) {
            if (!s2) {
              l2 = n + 1;
              break;
            }
          } else
            a2 === -1 && (s2 = false, a2 = n + 1), t >= 0 && (v2 === r.charCodeAt(t) ? --t === -1 && (i = n) : (t = -1, i = a2));
        }
        return l2 === i ? i = a2 : i === -1 && (i = e.length), e.slice(l2, i);
      } else {
        for (n = e.length - 1;n >= 0; --n)
          if (e.charCodeAt(n) === 47) {
            if (!s2) {
              l2 = n + 1;
              break;
            }
          } else
            i === -1 && (s2 = false, i = n + 1);
        return i === -1 ? "" : e.slice(l2, i);
      }
    }, extname: function(e) {
      c2(e);
      for (var r = -1, l2 = 0, i = -1, s2 = true, n = 0, t = e.length - 1;t >= 0; --t) {
        var a2 = e.charCodeAt(t);
        if (a2 === 47) {
          if (!s2) {
            l2 = t + 1;
            break;
          }
          continue;
        }
        i === -1 && (s2 = false, i = t + 1), a2 === 46 ? r === -1 ? r = t : n !== 1 && (n = 1) : r !== -1 && (n = -1);
      }
      return r === -1 || i === -1 || n === 0 || n === 1 && r === i - 1 && r === l2 + 1 ? "" : e.slice(r, i);
    }, format: function(e) {
      if (e === null || typeof e != "object")
        throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
      return J("/", e);
    }, parse: function(e) {
      c2(e);
      var r = { root: "", dir: "", base: "", ext: "", name: "" };
      if (e.length === 0)
        return r;
      var l2 = e.charCodeAt(0), i = l2 === 47, s2;
      i ? (r.root = "/", s2 = 1) : s2 = 0;
      for (var n = -1, t = 0, a2 = -1, v2 = true, u2 = e.length - 1, o = 0;u2 >= s2; --u2) {
        if (l2 = e.charCodeAt(u2), l2 === 47) {
          if (!v2) {
            t = u2 + 1;
            break;
          }
          continue;
        }
        a2 === -1 && (v2 = false, a2 = u2 + 1), l2 === 46 ? n === -1 ? n = u2 : o !== 1 && (o = 1) : n !== -1 && (o = -1);
      }
      return n === -1 || a2 === -1 || o === 0 || o === 1 && n === a2 - 1 && n === t + 1 ? a2 !== -1 && (t === 0 && i ? r.base = r.name = e.slice(1, a2) : r.base = r.name = e.slice(t, a2)) : (t === 0 && i ? (r.name = e.slice(1, n), r.base = e.slice(1, a2)) : (r.name = e.slice(t, n), r.base = e.slice(t, a2)), r.ext = e.slice(n, a2)), t > 0 ? r.dir = e.slice(0, t - 1) : i && (r.dir = "/"), r;
    }, sep: "/", delimiter: ":", win32: null, posix: null };
    g2.posix = g2;
    S2.exports = g2;
  });
  m2 = {};
  E3(m2, { default: () => q2 });
  A3(m2, y3(h3()));
  q2 = y3(h3());
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/file-uri-to-path/index.js
var require_file_uri_to_path = __commonJS((exports, module) => {
  var fileUriToPath = function(uri) {
    if (typeof uri != "string" || uri.length <= 7 || uri.substring(0, 7) != "file://") {
      throw new TypeError("must pass in a file:// URI to convert to a file path");
    }
    var rest = decodeURI(uri.substring(7));
    var firstSlash = rest.indexOf("/");
    var host = rest.substring(0, firstSlash);
    var path = rest.substring(firstSlash + 1);
    if (host == "localhost")
      host = "";
    if (host) {
      host = sep + sep + host;
    }
    path = path.replace(/^(.+)\|/, "$1:");
    if (sep == "\\") {
      path = path.replace(/\//g, "\\");
    }
    if (/^.+\:/.test(path)) {
    } else {
      path = sep + path;
    }
    return host + path;
  };
  var sep = (init_path(), __toCommonJS(exports_path)).sep || "/";
  module.exports = fileUriToPath;
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/ref/node_modules/bindings/bindings.js
var require_bindings = __commonJS((exports, module) => {
  var bindings = function(opts) {
    if (typeof opts == "string") {
      opts = { bindings: opts };
    } else if (!opts) {
      opts = {};
    }
    Object.keys(defaults).map(function(i2) {
      if (!(i2 in opts))
        opts[i2] = defaults[i2];
    });
    if (!opts.module_root) {
      opts.module_root = exports.getRoot(exports.getFileName());
    }
    if (path.extname(opts.bindings) != ".node") {
      opts.bindings += ".node";
    }
    var requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require;
    var tries = [], i = 0, l2 = opts.try.length, n, b3, err;
    for (;i < l2; i++) {
      n = join.apply(null, opts.try[i].map(function(p3) {
        return opts[p3] || p3;
      }));
      tries.push(n);
      try {
        b3 = opts.path ? requireFunc.resolve(n) : requireFunc(n);
        if (!opts.path) {
          b3.path = n;
        }
        return b3;
      } catch (e) {
        if (e.code !== "MODULE_NOT_FOUND" && e.code !== "QUALIFIED_PATH_RESOLUTION_FAILED" && !/not find/i.test(e.message)) {
          throw e;
        }
      }
    }
    err = new Error("Could not locate the bindings file. Tried:\n" + tries.map(function(a2) {
      return opts.arrow + a2;
    }).join("\n"));
    err.tries = tries;
    throw err;
  };
  var __filename = "/Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/ref/node_modules/bindings/bindings.js";
  var fs = (()=>({}));
  var path = (init_path(), __toCommonJS(exports_path));
  var fileURLToPath = require_file_uri_to_path();
  var join = path.join;
  var dirname = path.dirname;
  var exists = fs.accessSync && function(path2) {
    try {
      fs.accessSync(path2);
    } catch (e) {
      return false;
    }
    return true;
  } || fs.existsSync || path.existsSync;
  var defaults = {
    arrow: process.env.NODE_BINDINGS_ARROW || " \u2192 ",
    compiled: process.env.NODE_BINDINGS_COMPILED_DIR || "compiled",
    platform: process.platform,
    arch: process.arch,
    nodePreGyp: "node-v" + process.versions.modules + "-" + process.platform + "-" + process.arch,
    version: process.versions.node,
    bindings: "bindings.node",
    try: [
      ["module_root", "build", "bindings"],
      ["module_root", "build", "Debug", "bindings"],
      ["module_root", "build", "Release", "bindings"],
      ["module_root", "out", "Debug", "bindings"],
      ["module_root", "Debug", "bindings"],
      ["module_root", "out", "Release", "bindings"],
      ["module_root", "Release", "bindings"],
      ["module_root", "build", "default", "bindings"],
      ["module_root", "compiled", "version", "platform", "arch", "bindings"],
      ["module_root", "addon-build", "release", "install-root", "bindings"],
      ["module_root", "addon-build", "debug", "install-root", "bindings"],
      ["module_root", "addon-build", "default", "install-root", "bindings"],
      ["module_root", "lib", "binding", "nodePreGyp", "bindings"]
    ]
  };
  module.exports = exports = bindings;
  exports.getFileName = function getFileName(calling_file) {
    var { prepareStackTrace: origPST, stackTraceLimit: origSTL } = Error, dummy = {}, fileName;
    Error.stackTraceLimit = 10;
    Error.prepareStackTrace = function(e, st2) {
      for (var i = 0, l2 = st2.length;i < l2; i++) {
        fileName = st2[i].getFileName();
        if (fileName !== __filename) {
          if (calling_file) {
            if (fileName !== calling_file) {
              return;
            }
          } else {
            return;
          }
        }
      }
    };
    Error.captureStackTrace(dummy);
    dummy.stack;
    Error.prepareStackTrace = origPST;
    Error.stackTraceLimit = origSTL;
    var fileSchema = "file://";
    if (fileName.indexOf(fileSchema) === 0) {
      fileName = fileURLToPath(fileName);
    }
    return fileName;
  };
  exports.getRoot = function getRoot(file) {
    var dir = dirname(file), prev;
    while (true) {
      if (dir === ".") {
        dir = process.cwd();
      }
      if (exists(join(dir, "package.json")) || exists(join(dir, "node_modules"))) {
        return dir;
      }
      if (prev === dir) {
        throw new Error('Could not find module root given file: "' + file + '". Do you have a `package.json` file? ');
      }
      prev = dir;
      dir = join(dir, "..");
    }
  };
});

// node:buffer
var exports_buffer = {};
__export(exports_buffer, {
  default: () => {
    {
      return export_default;
    }
  }
});
var Er, $, dr2, gr, mr, Ir, b3, Fr, D2, _3, J, Q2, v2, z3, S2, xr, export_default;
var init_buffer = __esm(() => {
  Er = Object.create;
  $ = Object.defineProperty;
  dr2 = Object.getOwnPropertyDescriptor;
  gr = Object.getOwnPropertyNames;
  mr = Object.getPrototypeOf;
  Ir = Object.prototype.hasOwnProperty;
  b3 = (i, r) => () => (r || i((r = { exports: {} }).exports, r), r.exports);
  Fr = (i, r) => {
    for (var t in r)
      $(i, t, { get: r[t], enumerable: true });
  };
  D2 = (i, r, t, n) => {
    if (r && typeof r == "object" || typeof r == "function")
      for (let e of gr(r))
        !Ir.call(i, e) && e !== t && $(i, e, { get: () => r[e], enumerable: !(n = dr2(r, e)) || n.enumerable });
    return i;
  };
  _3 = (i, r, t) => (D2(i, r, "default"), t && D2(t, r, "default"));
  J = (i, r, t) => (t = i != null ? Er(mr(i)) : {}, D2(r || !i || !i.__esModule ? $(t, "default", { value: i, enumerable: true }) : t, i));
  Q2 = b3((L3) => {
    L3.byteLength = Ur;
    L3.toByteArray = Tr;
    L3.fromByteArray = _r;
    var B2 = [], w = [], Ar2 = typeof Uint8Array < "u" ? Uint8Array : Array, P = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (m3 = 0, K = P.length;m3 < K; ++m3)
      B2[m3] = P[m3], w[P.charCodeAt(m3)] = m3;
    var m3, K;
    w["-".charCodeAt(0)] = 62;
    w["_".charCodeAt(0)] = 63;
    function Z(i) {
      var r = i.length;
      if (r % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var t = i.indexOf("=");
      t === -1 && (t = r);
      var n = t === r ? 0 : 4 - t % 4;
      return [t, n];
    }
    function Ur(i) {
      var r = Z(i), t = r[0], n = r[1];
      return (t + n) * 3 / 4 - n;
    }
    function Rr(i, r, t) {
      return (r + t) * 3 / 4 - t;
    }
    function Tr(i) {
      var r, t = Z(i), n = t[0], e = t[1], o = new Ar2(Rr(i, n, e)), u2 = 0, f3 = e > 0 ? n - 4 : n, c2;
      for (c2 = 0;c2 < f3; c2 += 4)
        r = w[i.charCodeAt(c2)] << 18 | w[i.charCodeAt(c2 + 1)] << 12 | w[i.charCodeAt(c2 + 2)] << 6 | w[i.charCodeAt(c2 + 3)], o[u2++] = r >> 16 & 255, o[u2++] = r >> 8 & 255, o[u2++] = r & 255;
      return e === 2 && (r = w[i.charCodeAt(c2)] << 2 | w[i.charCodeAt(c2 + 1)] >> 4, o[u2++] = r & 255), e === 1 && (r = w[i.charCodeAt(c2)] << 10 | w[i.charCodeAt(c2 + 1)] << 4 | w[i.charCodeAt(c2 + 2)] >> 2, o[u2++] = r >> 8 & 255, o[u2++] = r & 255), o;
    }
    function Cr(i) {
      return B2[i >> 18 & 63] + B2[i >> 12 & 63] + B2[i >> 6 & 63] + B2[i & 63];
    }
    function Sr(i, r, t) {
      for (var n, e = [], o = r;o < t; o += 3)
        n = (i[o] << 16 & 16711680) + (i[o + 1] << 8 & 65280) + (i[o + 2] & 255), e.push(Cr(n));
      return e.join("");
    }
    function _r(i) {
      for (var r, t = i.length, n = t % 3, e = [], o = 16383, u2 = 0, f3 = t - n;u2 < f3; u2 += o)
        e.push(Sr(i, u2, u2 + o > f3 ? f3 : u2 + o));
      return n === 1 ? (r = i[t - 1], e.push(B2[r >> 2] + B2[r << 4 & 63] + "==")) : n === 2 && (r = (i[t - 2] << 8) + i[t - 1], e.push(B2[r >> 10] + B2[r >> 4 & 63] + B2[r << 2 & 63] + "=")), e.join("");
    }
  });
  v2 = b3((O2) => {
    O2.read = function(i, r, t, n, e) {
      var o, u2, f3 = e * 8 - n - 1, c2 = (1 << f3) - 1, l2 = c2 >> 1, s2 = -7, p3 = t ? e - 1 : 0, F = t ? -1 : 1, x2 = i[r + p3];
      for (p3 += F, o = x2 & (1 << -s2) - 1, x2 >>= -s2, s2 += f3;s2 > 0; o = o * 256 + i[r + p3], p3 += F, s2 -= 8)
        ;
      for (u2 = o & (1 << -s2) - 1, o >>= -s2, s2 += n;s2 > 0; u2 = u2 * 256 + i[r + p3], p3 += F, s2 -= 8)
        ;
      if (o === 0)
        o = 1 - l2;
      else {
        if (o === c2)
          return u2 ? NaN : (x2 ? -1 : 1) * (1 / 0);
        u2 = u2 + Math.pow(2, n), o = o - l2;
      }
      return (x2 ? -1 : 1) * u2 * Math.pow(2, o - n);
    };
    O2.write = function(i, r, t, n, e, o) {
      var u2, f3, c2, l2 = o * 8 - e - 1, s2 = (1 << l2) - 1, p3 = s2 >> 1, F = e === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, x2 = n ? 0 : o - 1, k2 = n ? 1 : -1, Br = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
      for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (f3 = isNaN(r) ? 1 : 0, u2 = s2) : (u2 = Math.floor(Math.log(r) / Math.LN2), r * (c2 = Math.pow(2, -u2)) < 1 && (u2--, c2 *= 2), u2 + p3 >= 1 ? r += F / c2 : r += F * Math.pow(2, 1 - p3), r * c2 >= 2 && (u2++, c2 /= 2), u2 + p3 >= s2 ? (f3 = 0, u2 = s2) : u2 + p3 >= 1 ? (f3 = (r * c2 - 1) * Math.pow(2, e), u2 = u2 + p3) : (f3 = r * Math.pow(2, p3 - 1) * Math.pow(2, e), u2 = 0));e >= 8; i[t + x2] = f3 & 255, x2 += k2, f3 /= 256, e -= 8)
        ;
      for (u2 = u2 << e | f3, l2 += e;l2 > 0; i[t + x2] = u2 & 255, x2 += k2, u2 /= 256, l2 -= 8)
        ;
      i[t + x2 - k2] |= Br * 128;
    };
  });
  z3 = b3((T3) => {
    var G = Q2(), U2 = v2(), rr = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    T3.Buffer = h4;
    T3.SlowBuffer = $r;
    T3.INSPECT_MAX_BYTES = 50;
    var N3 = 2147483647;
    T3.kMaxLength = N3;
    h4.TYPED_ARRAY_SUPPORT = Lr();
    !h4.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function Lr() {
      try {
        let i = new Uint8Array(1), r = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(r, Uint8Array.prototype), Object.setPrototypeOf(i, r), i.foo() === 42;
      } catch {
        return false;
      }
    }
    Object.defineProperty(h4.prototype, "parent", { enumerable: true, get: function() {
      if (!!h4.isBuffer(this))
        return this.buffer;
    } });
    Object.defineProperty(h4.prototype, "offset", { enumerable: true, get: function() {
      if (!!h4.isBuffer(this))
        return this.byteOffset;
    } });
    function d3(i) {
      if (i > N3)
        throw new RangeError('The value "' + i + '" is invalid for option "size"');
      let r = new Uint8Array(i);
      return Object.setPrototypeOf(r, h4.prototype), r;
    }
    function h4(i, r, t) {
      if (typeof i == "number") {
        if (typeof r == "string")
          throw new TypeError('The "string" argument must be of type string. Received type number');
        return j3(i);
      }
      return er(i, r, t);
    }
    h4.poolSize = 8192;
    function er(i, r, t) {
      if (typeof i == "string")
        return Mr2(i, r);
      if (ArrayBuffer.isView(i))
        return kr(i);
      if (i == null)
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof i);
      if (E4(i, ArrayBuffer) || i && E4(i.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (E4(i, SharedArrayBuffer) || i && E4(i.buffer, SharedArrayBuffer)))
        return q3(i, r, t);
      if (typeof i == "number")
        throw new TypeError('The "value" argument must not be of type number. Received type number');
      let n = i.valueOf && i.valueOf();
      if (n != null && n !== i)
        return h4.from(n, r, t);
      let e = Dr(i);
      if (e)
        return e;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof i[Symbol.toPrimitive] == "function")
        return h4.from(i[Symbol.toPrimitive]("string"), r, t);
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof i);
    }
    h4.from = function(i, r, t) {
      return er(i, r, t);
    };
    Object.setPrototypeOf(h4.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(h4, Uint8Array);
    function or(i) {
      if (typeof i != "number")
        throw new TypeError('"size" argument must be of type number');
      if (i < 0)
        throw new RangeError('The value "' + i + '" is invalid for option "size"');
    }
    function Nr(i, r, t) {
      return or(i), i <= 0 ? d3(i) : r !== undefined ? typeof t == "string" ? d3(i).fill(r, t) : d3(i).fill(r) : d3(i);
    }
    h4.alloc = function(i, r, t) {
      return Nr(i, r, t);
    };
    function j3(i) {
      return or(i), d3(i < 0 ? 0 : H2(i) | 0);
    }
    h4.allocUnsafe = function(i) {
      return j3(i);
    };
    h4.allocUnsafeSlow = function(i) {
      return j3(i);
    };
    function Mr2(i, r) {
      if ((typeof r != "string" || r === "") && (r = "utf8"), !h4.isEncoding(r))
        throw new TypeError("Unknown encoding: " + r);
      let t = ur(i, r) | 0, n = d3(t), e = n.write(i, r);
      return e !== t && (n = n.slice(0, e)), n;
    }
    function Y(i) {
      let r = i.length < 0 ? 0 : H2(i.length) | 0, t = d3(r);
      for (let n = 0;n < r; n += 1)
        t[n] = i[n] & 255;
      return t;
    }
    function kr(i) {
      if (E4(i, Uint8Array)) {
        let r = new Uint8Array(i);
        return q3(r.buffer, r.byteOffset, r.byteLength);
      }
      return Y(i);
    }
    function q3(i, r, t) {
      if (r < 0 || i.byteLength < r)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (i.byteLength < r + (t || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let n;
      return r === undefined && t === undefined ? n = new Uint8Array(i) : t === undefined ? n = new Uint8Array(i, r) : n = new Uint8Array(i, r, t), Object.setPrototypeOf(n, h4.prototype), n;
    }
    function Dr(i) {
      if (h4.isBuffer(i)) {
        let r = H2(i.length) | 0, t = d3(r);
        return t.length === 0 || i.copy(t, 0, 0, r), t;
      }
      if (i.length !== undefined)
        return typeof i.length != "number" || X2(i.length) ? d3(0) : Y(i);
      if (i.type === "Buffer" && Array.isArray(i.data))
        return Y(i.data);
    }
    function H2(i) {
      if (i >= N3)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + N3.toString(16) + " bytes");
      return i | 0;
    }
    function $r(i) {
      return +i != i && (i = 0), h4.alloc(+i);
    }
    h4.isBuffer = function(r) {
      return r != null && r._isBuffer === true && r !== h4.prototype;
    };
    h4.compare = function(r, t) {
      if (E4(r, Uint8Array) && (r = h4.from(r, r.offset, r.byteLength)), E4(t, Uint8Array) && (t = h4.from(t, t.offset, t.byteLength)), !h4.isBuffer(r) || !h4.isBuffer(t))
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (r === t)
        return 0;
      let n = r.length, e = t.length;
      for (let o = 0, u2 = Math.min(n, e);o < u2; ++o)
        if (r[o] !== t[o]) {
          n = r[o], e = t[o];
          break;
        }
      return n < e ? -1 : e < n ? 1 : 0;
    };
    h4.isEncoding = function(r) {
      switch (String(r).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    h4.concat = function(r, t) {
      if (!Array.isArray(r))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (r.length === 0)
        return h4.alloc(0);
      let n;
      if (t === undefined)
        for (t = 0, n = 0;n < r.length; ++n)
          t += r[n].length;
      let e = h4.allocUnsafe(t), o = 0;
      for (n = 0;n < r.length; ++n) {
        let u2 = r[n];
        if (E4(u2, Uint8Array))
          o + u2.length > e.length ? (h4.isBuffer(u2) || (u2 = h4.from(u2)), u2.copy(e, o)) : Uint8Array.prototype.set.call(e, u2, o);
        else if (h4.isBuffer(u2))
          u2.copy(e, o);
        else
          throw new TypeError('"list" argument must be an Array of Buffers');
        o += u2.length;
      }
      return e;
    };
    function ur(i, r) {
      if (h4.isBuffer(i))
        return i.length;
      if (ArrayBuffer.isView(i) || E4(i, ArrayBuffer))
        return i.byteLength;
      if (typeof i != "string")
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof i);
      let t = i.length, n = arguments.length > 2 && arguments[2] === true;
      if (!n && t === 0)
        return 0;
      let e = false;
      for (;; )
        switch (r) {
          case "ascii":
          case "latin1":
          case "binary":
            return t;
          case "utf8":
          case "utf-8":
            return W(i).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return t * 2;
          case "hex":
            return t >>> 1;
          case "base64":
            return wr(i).length;
          default:
            if (e)
              return n ? -1 : W(i).length;
            r = ("" + r).toLowerCase(), e = true;
        }
    }
    h4.byteLength = ur;
    function br2(i, r, t) {
      let n = false;
      if ((r === undefined || r < 0) && (r = 0), r > this.length || ((t === undefined || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, r >>>= 0, t <= r))
        return "";
      for (i || (i = "utf8");; )
        switch (i) {
          case "hex":
            return Xr(this, r, t);
          case "utf8":
          case "utf-8":
            return fr(this, r, t);
          case "ascii":
            return Hr(this, r, t);
          case "latin1":
          case "binary":
            return Vr(this, r, t);
          case "base64":
            return Wr(this, r, t);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return zr(this, r, t);
          default:
            if (n)
              throw new TypeError("Unknown encoding: " + i);
            i = (i + "").toLowerCase(), n = true;
        }
    }
    h4.prototype._isBuffer = true;
    function I4(i, r, t) {
      let n = i[r];
      i[r] = i[t], i[t] = n;
    }
    h4.prototype.swap16 = function() {
      let r = this.length;
      if (r % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let t = 0;t < r; t += 2)
        I4(this, t, t + 1);
      return this;
    };
    h4.prototype.swap32 = function() {
      let r = this.length;
      if (r % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let t = 0;t < r; t += 4)
        I4(this, t, t + 3), I4(this, t + 1, t + 2);
      return this;
    };
    h4.prototype.swap64 = function() {
      let r = this.length;
      if (r % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let t = 0;t < r; t += 8)
        I4(this, t, t + 7), I4(this, t + 1, t + 6), I4(this, t + 2, t + 5), I4(this, t + 3, t + 4);
      return this;
    };
    h4.prototype.toString = function() {
      let r = this.length;
      return r === 0 ? "" : arguments.length === 0 ? fr(this, 0, r) : br2.apply(this, arguments);
    };
    h4.prototype.toLocaleString = h4.prototype.toString;
    h4.prototype.equals = function(r) {
      if (!h4.isBuffer(r))
        throw new TypeError("Argument must be a Buffer");
      return this === r ? true : h4.compare(this, r) === 0;
    };
    h4.prototype.inspect = function() {
      let r = "", t = T3.INSPECT_MAX_BYTES;
      return r = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (r += " ... "), "<Buffer " + r + ">";
    };
    rr && (h4.prototype[rr] = h4.prototype.inspect);
    h4.prototype.compare = function(r, t, n, e, o) {
      if (E4(r, Uint8Array) && (r = h4.from(r, r.offset, r.byteLength)), !h4.isBuffer(r))
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof r);
      if (t === undefined && (t = 0), n === undefined && (n = r ? r.length : 0), e === undefined && (e = 0), o === undefined && (o = this.length), t < 0 || n > r.length || e < 0 || o > this.length)
        throw new RangeError("out of range index");
      if (e >= o && t >= n)
        return 0;
      if (e >= o)
        return -1;
      if (t >= n)
        return 1;
      if (t >>>= 0, n >>>= 0, e >>>= 0, o >>>= 0, this === r)
        return 0;
      let u2 = o - e, f3 = n - t, c2 = Math.min(u2, f3), l2 = this.slice(e, o), s2 = r.slice(t, n);
      for (let p3 = 0;p3 < c2; ++p3)
        if (l2[p3] !== s2[p3]) {
          u2 = l2[p3], f3 = s2[p3];
          break;
        }
      return u2 < f3 ? -1 : f3 < u2 ? 1 : 0;
    };
    function hr(i, r, t, n, e) {
      if (i.length === 0)
        return -1;
      if (typeof t == "string" ? (n = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, X2(t) && (t = e ? 0 : i.length - 1), t < 0 && (t = i.length + t), t >= i.length) {
        if (e)
          return -1;
        t = i.length - 1;
      } else if (t < 0)
        if (e)
          t = 0;
        else
          return -1;
      if (typeof r == "string" && (r = h4.from(r, n)), h4.isBuffer(r))
        return r.length === 0 ? -1 : tr(i, r, t, n, e);
      if (typeof r == "number")
        return r = r & 255, typeof Uint8Array.prototype.indexOf == "function" ? e ? Uint8Array.prototype.indexOf.call(i, r, t) : Uint8Array.prototype.lastIndexOf.call(i, r, t) : tr(i, [r], t, n, e);
      throw new TypeError("val must be string, number or Buffer");
    }
    function tr(i, r, t, n, e) {
      let o = 1, u2 = i.length, f3 = r.length;
      if (n !== undefined && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
        if (i.length < 2 || r.length < 2)
          return -1;
        o = 2, u2 /= 2, f3 /= 2, t /= 2;
      }
      function c2(s2, p3) {
        return o === 1 ? s2[p3] : s2.readUInt16BE(p3 * o);
      }
      let l2;
      if (e) {
        let s2 = -1;
        for (l2 = t;l2 < u2; l2++)
          if (c2(i, l2) === c2(r, s2 === -1 ? 0 : l2 - s2)) {
            if (s2 === -1 && (s2 = l2), l2 - s2 + 1 === f3)
              return s2 * o;
          } else
            s2 !== -1 && (l2 -= l2 - s2), s2 = -1;
      } else
        for (t + f3 > u2 && (t = u2 - f3), l2 = t;l2 >= 0; l2--) {
          let s2 = true;
          for (let p3 = 0;p3 < f3; p3++)
            if (c2(i, l2 + p3) !== c2(r, p3)) {
              s2 = false;
              break;
            }
          if (s2)
            return l2;
        }
      return -1;
    }
    h4.prototype.includes = function(r, t, n) {
      return this.indexOf(r, t, n) !== -1;
    };
    h4.prototype.indexOf = function(r, t, n) {
      return hr(this, r, t, n, true);
    };
    h4.prototype.lastIndexOf = function(r, t, n) {
      return hr(this, r, t, n, false);
    };
    function Pr(i, r, t, n) {
      t = Number(t) || 0;
      let e = i.length - t;
      n ? (n = Number(n), n > e && (n = e)) : n = e;
      let o = r.length;
      n > o / 2 && (n = o / 2);
      let u2;
      for (u2 = 0;u2 < n; ++u2) {
        let f3 = parseInt(r.substr(u2 * 2, 2), 16);
        if (X2(f3))
          return u2;
        i[t + u2] = f3;
      }
      return u2;
    }
    function Or2(i, r, t, n) {
      return M2(W(r, i.length - t), i, t, n);
    }
    function Gr(i, r, t, n) {
      return M2(Qr2(r), i, t, n);
    }
    function Yr(i, r, t, n) {
      return M2(wr(r), i, t, n);
    }
    function qr(i, r, t, n) {
      return M2(vr(r, i.length - t), i, t, n);
    }
    h4.prototype.write = function(r, t, n, e) {
      if (t === undefined)
        e = "utf8", n = this.length, t = 0;
      else if (n === undefined && typeof t == "string")
        e = t, n = this.length, t = 0;
      else if (isFinite(t))
        t = t >>> 0, isFinite(n) ? (n = n >>> 0, e === undefined && (e = "utf8")) : (e = n, n = undefined);
      else
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      let o = this.length - t;
      if ((n === undefined || n > o) && (n = o), r.length > 0 && (n < 0 || t < 0) || t > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      e || (e = "utf8");
      let u2 = false;
      for (;; )
        switch (e) {
          case "hex":
            return Pr(this, r, t, n);
          case "utf8":
          case "utf-8":
            return Or2(this, r, t, n);
          case "ascii":
          case "latin1":
          case "binary":
            return Gr(this, r, t, n);
          case "base64":
            return Yr(this, r, t, n);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return qr(this, r, t, n);
          default:
            if (u2)
              throw new TypeError("Unknown encoding: " + e);
            e = ("" + e).toLowerCase(), u2 = true;
        }
    };
    h4.prototype.toJSON = function() {
      return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
    };
    function Wr(i, r, t) {
      return r === 0 && t === i.length ? G.fromByteArray(i) : G.fromByteArray(i.slice(r, t));
    }
    function fr(i, r, t) {
      t = Math.min(i.length, t);
      let n = [], e = r;
      for (;e < t; ) {
        let o = i[e], u2 = null, f3 = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
        if (e + f3 <= t) {
          let c2, l2, s2, p3;
          switch (f3) {
            case 1:
              o < 128 && (u2 = o);
              break;
            case 2:
              c2 = i[e + 1], (c2 & 192) === 128 && (p3 = (o & 31) << 6 | c2 & 63, p3 > 127 && (u2 = p3));
              break;
            case 3:
              c2 = i[e + 1], l2 = i[e + 2], (c2 & 192) === 128 && (l2 & 192) === 128 && (p3 = (o & 15) << 12 | (c2 & 63) << 6 | l2 & 63, p3 > 2047 && (p3 < 55296 || p3 > 57343) && (u2 = p3));
              break;
            case 4:
              c2 = i[e + 1], l2 = i[e + 2], s2 = i[e + 3], (c2 & 192) === 128 && (l2 & 192) === 128 && (s2 & 192) === 128 && (p3 = (o & 15) << 18 | (c2 & 63) << 12 | (l2 & 63) << 6 | s2 & 63, p3 > 65535 && p3 < 1114112 && (u2 = p3));
          }
        }
        u2 === null ? (u2 = 65533, f3 = 1) : u2 > 65535 && (u2 -= 65536, n.push(u2 >>> 10 & 1023 | 55296), u2 = 56320 | u2 & 1023), n.push(u2), e += f3;
      }
      return jr2(n);
    }
    var ir = 4096;
    function jr2(i) {
      let r = i.length;
      if (r <= ir)
        return String.fromCharCode.apply(String, i);
      let t = "", n = 0;
      for (;n < r; )
        t += String.fromCharCode.apply(String, i.slice(n, n += ir));
      return t;
    }
    function Hr(i, r, t) {
      let n = "";
      t = Math.min(i.length, t);
      for (let e = r;e < t; ++e)
        n += String.fromCharCode(i[e] & 127);
      return n;
    }
    function Vr(i, r, t) {
      let n = "";
      t = Math.min(i.length, t);
      for (let e = r;e < t; ++e)
        n += String.fromCharCode(i[e]);
      return n;
    }
    function Xr(i, r, t) {
      let n = i.length;
      (!r || r < 0) && (r = 0), (!t || t < 0 || t > n) && (t = n);
      let e = "";
      for (let o = r;o < t; ++o)
        e += rt[i[o]];
      return e;
    }
    function zr(i, r, t) {
      let n = i.slice(r, t), e = "";
      for (let o = 0;o < n.length - 1; o += 2)
        e += String.fromCharCode(n[o] + n[o + 1] * 256);
      return e;
    }
    h4.prototype.slice = function(r, t) {
      let n = this.length;
      r = ~~r, t = t === undefined ? n : ~~t, r < 0 ? (r += n, r < 0 && (r = 0)) : r > n && (r = n), t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), t < r && (t = r);
      let e = this.subarray(r, t);
      return Object.setPrototypeOf(e, h4.prototype), e;
    };
    function a2(i, r, t) {
      if (i % 1 !== 0 || i < 0)
        throw new RangeError("offset is not uint");
      if (i + r > t)
        throw new RangeError("Trying to access beyond buffer length");
    }
    h4.prototype.readUintLE = h4.prototype.readUIntLE = function(r, t, n) {
      r = r >>> 0, t = t >>> 0, n || a2(r, t, this.length);
      let e = this[r], o = 1, u2 = 0;
      for (;++u2 < t && (o *= 256); )
        e += this[r + u2] * o;
      return e;
    };
    h4.prototype.readUintBE = h4.prototype.readUIntBE = function(r, t, n) {
      r = r >>> 0, t = t >>> 0, n || a2(r, t, this.length);
      let e = this[r + --t], o = 1;
      for (;t > 0 && (o *= 256); )
        e += this[r + --t] * o;
      return e;
    };
    h4.prototype.readUint8 = h4.prototype.readUInt8 = function(r, t) {
      return r = r >>> 0, t || a2(r, 1, this.length), this[r];
    };
    h4.prototype.readUint16LE = h4.prototype.readUInt16LE = function(r, t) {
      return r = r >>> 0, t || a2(r, 2, this.length), this[r] | this[r + 1] << 8;
    };
    h4.prototype.readUint16BE = h4.prototype.readUInt16BE = function(r, t) {
      return r = r >>> 0, t || a2(r, 2, this.length), this[r] << 8 | this[r + 1];
    };
    h4.prototype.readUint32LE = h4.prototype.readUInt32LE = function(r, t) {
      return r = r >>> 0, t || a2(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216;
    };
    h4.prototype.readUint32BE = h4.prototype.readUInt32BE = function(r, t) {
      return r = r >>> 0, t || a2(r, 4, this.length), this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]);
    };
    h4.prototype.readBigUInt64LE = g2(function(r) {
      r = r >>> 0, R2(r, "offset");
      let t = this[r], n = this[r + 7];
      (t === undefined || n === undefined) && C3(r, this.length - 8);
      let e = t + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24, o = this[++r] + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + n * 2 ** 24;
      return BigInt(e) + (BigInt(o) << BigInt(32));
    });
    h4.prototype.readBigUInt64BE = g2(function(r) {
      r = r >>> 0, R2(r, "offset");
      let t = this[r], n = this[r + 7];
      (t === undefined || n === undefined) && C3(r, this.length - 8);
      let e = t * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r], o = this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + n;
      return (BigInt(e) << BigInt(32)) + BigInt(o);
    });
    h4.prototype.readIntLE = function(r, t, n) {
      r = r >>> 0, t = t >>> 0, n || a2(r, t, this.length);
      let e = this[r], o = 1, u2 = 0;
      for (;++u2 < t && (o *= 256); )
        e += this[r + u2] * o;
      return o *= 128, e >= o && (e -= Math.pow(2, 8 * t)), e;
    };
    h4.prototype.readIntBE = function(r, t, n) {
      r = r >>> 0, t = t >>> 0, n || a2(r, t, this.length);
      let e = t, o = 1, u2 = this[r + --e];
      for (;e > 0 && (o *= 256); )
        u2 += this[r + --e] * o;
      return o *= 128, u2 >= o && (u2 -= Math.pow(2, 8 * t)), u2;
    };
    h4.prototype.readInt8 = function(r, t) {
      return r = r >>> 0, t || a2(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
    };
    h4.prototype.readInt16LE = function(r, t) {
      r = r >>> 0, t || a2(r, 2, this.length);
      let n = this[r] | this[r + 1] << 8;
      return n & 32768 ? n | 4294901760 : n;
    };
    h4.prototype.readInt16BE = function(r, t) {
      r = r >>> 0, t || a2(r, 2, this.length);
      let n = this[r + 1] | this[r] << 8;
      return n & 32768 ? n | 4294901760 : n;
    };
    h4.prototype.readInt32LE = function(r, t) {
      return r = r >>> 0, t || a2(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24;
    };
    h4.prototype.readInt32BE = function(r, t) {
      return r = r >>> 0, t || a2(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3];
    };
    h4.prototype.readBigInt64LE = g2(function(r) {
      r = r >>> 0, R2(r, "offset");
      let t = this[r], n = this[r + 7];
      (t === undefined || n === undefined) && C3(r, this.length - 8);
      let e = this[r + 4] + this[r + 5] * 2 ** 8 + this[r + 6] * 2 ** 16 + (n << 24);
      return (BigInt(e) << BigInt(32)) + BigInt(t + this[++r] * 2 ** 8 + this[++r] * 2 ** 16 + this[++r] * 2 ** 24);
    });
    h4.prototype.readBigInt64BE = g2(function(r) {
      r = r >>> 0, R2(r, "offset");
      let t = this[r], n = this[r + 7];
      (t === undefined || n === undefined) && C3(r, this.length - 8);
      let e = (t << 24) + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + this[++r];
      return (BigInt(e) << BigInt(32)) + BigInt(this[++r] * 2 ** 24 + this[++r] * 2 ** 16 + this[++r] * 2 ** 8 + n);
    });
    h4.prototype.readFloatLE = function(r, t) {
      return r = r >>> 0, t || a2(r, 4, this.length), U2.read(this, r, true, 23, 4);
    };
    h4.prototype.readFloatBE = function(r, t) {
      return r = r >>> 0, t || a2(r, 4, this.length), U2.read(this, r, false, 23, 4);
    };
    h4.prototype.readDoubleLE = function(r, t) {
      return r = r >>> 0, t || a2(r, 8, this.length), U2.read(this, r, true, 52, 8);
    };
    h4.prototype.readDoubleBE = function(r, t) {
      return r = r >>> 0, t || a2(r, 8, this.length), U2.read(this, r, false, 52, 8);
    };
    function y4(i, r, t, n, e, o) {
      if (!h4.isBuffer(i))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (r > e || r < o)
        throw new RangeError('"value" argument is out of bounds');
      if (t + n > i.length)
        throw new RangeError("Index out of range");
    }
    h4.prototype.writeUintLE = h4.prototype.writeUIntLE = function(r, t, n, e) {
      if (r = +r, t = t >>> 0, n = n >>> 0, !e) {
        let f3 = Math.pow(2, 8 * n) - 1;
        y4(this, r, t, n, f3, 0);
      }
      let o = 1, u2 = 0;
      for (this[t] = r & 255;++u2 < n && (o *= 256); )
        this[t + u2] = r / o & 255;
      return t + n;
    };
    h4.prototype.writeUintBE = h4.prototype.writeUIntBE = function(r, t, n, e) {
      if (r = +r, t = t >>> 0, n = n >>> 0, !e) {
        let f3 = Math.pow(2, 8 * n) - 1;
        y4(this, r, t, n, f3, 0);
      }
      let o = n - 1, u2 = 1;
      for (this[t + o] = r & 255;--o >= 0 && (u2 *= 256); )
        this[t + o] = r / u2 & 255;
      return t + n;
    };
    h4.prototype.writeUint8 = h4.prototype.writeUInt8 = function(r, t, n) {
      return r = +r, t = t >>> 0, n || y4(this, r, t, 1, 255, 0), this[t] = r & 255, t + 1;
    };
    h4.prototype.writeUint16LE = h4.prototype.writeUInt16LE = function(r, t, n) {
      return r = +r, t = t >>> 0, n || y4(this, r, t, 2, 65535, 0), this[t] = r & 255, this[t + 1] = r >>> 8, t + 2;
    };
    h4.prototype.writeUint16BE = h4.prototype.writeUInt16BE = function(r, t, n) {
      return r = +r, t = t >>> 0, n || y4(this, r, t, 2, 65535, 0), this[t] = r >>> 8, this[t + 1] = r & 255, t + 2;
    };
    h4.prototype.writeUint32LE = h4.prototype.writeUInt32LE = function(r, t, n) {
      return r = +r, t = t >>> 0, n || y4(this, r, t, 4, 4294967295, 0), this[t + 3] = r >>> 24, this[t + 2] = r >>> 16, this[t + 1] = r >>> 8, this[t] = r & 255, t + 4;
    };
    h4.prototype.writeUint32BE = h4.prototype.writeUInt32BE = function(r, t, n) {
      return r = +r, t = t >>> 0, n || y4(this, r, t, 4, 4294967295, 0), this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255, t + 4;
    };
    function cr(i, r, t, n, e) {
      yr(r, n, e, i, t, 7);
      let o = Number(r & BigInt(4294967295));
      i[t++] = o, o = o >> 8, i[t++] = o, o = o >> 8, i[t++] = o, o = o >> 8, i[t++] = o;
      let u2 = Number(r >> BigInt(32) & BigInt(4294967295));
      return i[t++] = u2, u2 = u2 >> 8, i[t++] = u2, u2 = u2 >> 8, i[t++] = u2, u2 = u2 >> 8, i[t++] = u2, t;
    }
    function pr(i, r, t, n, e) {
      yr(r, n, e, i, t, 7);
      let o = Number(r & BigInt(4294967295));
      i[t + 7] = o, o = o >> 8, i[t + 6] = o, o = o >> 8, i[t + 5] = o, o = o >> 8, i[t + 4] = o;
      let u2 = Number(r >> BigInt(32) & BigInt(4294967295));
      return i[t + 3] = u2, u2 = u2 >> 8, i[t + 2] = u2, u2 = u2 >> 8, i[t + 1] = u2, u2 = u2 >> 8, i[t] = u2, t + 8;
    }
    h4.prototype.writeBigUInt64LE = g2(function(r, t = 0) {
      return cr(this, r, t, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    h4.prototype.writeBigUInt64BE = g2(function(r, t = 0) {
      return pr(this, r, t, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    h4.prototype.writeIntLE = function(r, t, n, e) {
      if (r = +r, t = t >>> 0, !e) {
        let c2 = Math.pow(2, 8 * n - 1);
        y4(this, r, t, n, c2 - 1, -c2);
      }
      let o = 0, u2 = 1, f3 = 0;
      for (this[t] = r & 255;++o < n && (u2 *= 256); )
        r < 0 && f3 === 0 && this[t + o - 1] !== 0 && (f3 = 1), this[t + o] = (r / u2 >> 0) - f3 & 255;
      return t + n;
    };
    h4.prototype.writeIntBE = function(r, t, n, e) {
      if (r = +r, t = t >>> 0, !e) {
        let c2 = Math.pow(2, 8 * n - 1);
        y4(this, r, t, n, c2 - 1, -c2);
      }
      let o = n - 1, u2 = 1, f3 = 0;
      for (this[t + o] = r & 255;--o >= 0 && (u2 *= 256); )
        r < 0 && f3 === 0 && this[t + o + 1] !== 0 && (f3 = 1), this[t + o] = (r / u2 >> 0) - f3 & 255;
      return t + n;
    };
    h4.prototype.writeInt8 = function(r, t, n) {
      return r = +r, t = t >>> 0, n || y4(this, r, t, 1, 127, -128), r < 0 && (r = 255 + r + 1), this[t] = r & 255, t + 1;
    };
    h4.prototype.writeInt16LE = function(r, t, n) {
      return r = +r, t = t >>> 0, n || y4(this, r, t, 2, 32767, -32768), this[t] = r & 255, this[t + 1] = r >>> 8, t + 2;
    };
    h4.prototype.writeInt16BE = function(r, t, n) {
      return r = +r, t = t >>> 0, n || y4(this, r, t, 2, 32767, -32768), this[t] = r >>> 8, this[t + 1] = r & 255, t + 2;
    };
    h4.prototype.writeInt32LE = function(r, t, n) {
      return r = +r, t = t >>> 0, n || y4(this, r, t, 4, 2147483647, -2147483648), this[t] = r & 255, this[t + 1] = r >>> 8, this[t + 2] = r >>> 16, this[t + 3] = r >>> 24, t + 4;
    };
    h4.prototype.writeInt32BE = function(r, t, n) {
      return r = +r, t = t >>> 0, n || y4(this, r, t, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255, t + 4;
    };
    h4.prototype.writeBigInt64LE = g2(function(r, t = 0) {
      return cr(this, r, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    h4.prototype.writeBigInt64BE = g2(function(r, t = 0) {
      return pr(this, r, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function sr(i, r, t, n, e, o) {
      if (t + n > i.length)
        throw new RangeError("Index out of range");
      if (t < 0)
        throw new RangeError("Index out of range");
    }
    function lr(i, r, t, n, e) {
      return r = +r, t = t >>> 0, e || sr(i, r, t, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000), U2.write(i, r, t, n, 23, 4), t + 4;
    }
    h4.prototype.writeFloatLE = function(r, t, n) {
      return lr(this, r, t, true, n);
    };
    h4.prototype.writeFloatBE = function(r, t, n) {
      return lr(this, r, t, false, n);
    };
    function ar(i, r, t, n, e) {
      return r = +r, t = t >>> 0, e || sr(i, r, t, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000), U2.write(i, r, t, n, 52, 8), t + 8;
    }
    h4.prototype.writeDoubleLE = function(r, t, n) {
      return ar(this, r, t, true, n);
    };
    h4.prototype.writeDoubleBE = function(r, t, n) {
      return ar(this, r, t, false, n);
    };
    h4.prototype.copy = function(r, t, n, e) {
      if (!h4.isBuffer(r))
        throw new TypeError("argument should be a Buffer");
      if (n || (n = 0), !e && e !== 0 && (e = this.length), t >= r.length && (t = r.length), t || (t = 0), e > 0 && e < n && (e = n), e === n || r.length === 0 || this.length === 0)
        return 0;
      if (t < 0)
        throw new RangeError("targetStart out of bounds");
      if (n < 0 || n >= this.length)
        throw new RangeError("Index out of range");
      if (e < 0)
        throw new RangeError("sourceEnd out of bounds");
      e > this.length && (e = this.length), r.length - t < e - n && (e = r.length - t + n);
      let o = e - n;
      return this === r && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, n, e) : Uint8Array.prototype.set.call(r, this.subarray(n, e), t), o;
    };
    h4.prototype.fill = function(r, t, n, e) {
      if (typeof r == "string") {
        if (typeof t == "string" ? (e = t, t = 0, n = this.length) : typeof n == "string" && (e = n, n = this.length), e !== undefined && typeof e != "string")
          throw new TypeError("encoding must be a string");
        if (typeof e == "string" && !h4.isEncoding(e))
          throw new TypeError("Unknown encoding: " + e);
        if (r.length === 1) {
          let u2 = r.charCodeAt(0);
          (e === "utf8" && u2 < 128 || e === "latin1") && (r = u2);
        }
      } else
        typeof r == "number" ? r = r & 255 : typeof r == "boolean" && (r = Number(r));
      if (t < 0 || this.length < t || this.length < n)
        throw new RangeError("Out of range index");
      if (n <= t)
        return this;
      t = t >>> 0, n = n === undefined ? this.length : n >>> 0, r || (r = 0);
      let o;
      if (typeof r == "number")
        for (o = t;o < n; ++o)
          this[o] = r;
      else {
        let u2 = h4.isBuffer(r) ? r : h4.from(r, e), f3 = u2.length;
        if (f3 === 0)
          throw new TypeError('The value "' + r + '" is invalid for argument "value"');
        for (o = 0;o < n - t; ++o)
          this[o + t] = u2[o % f3];
      }
      return this;
    };
    var A4 = {};
    function V3(i, r, t) {
      A4[i] = class extends t {
        constructor() {
          super(), Object.defineProperty(this, "message", { value: r.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${i}]`, this.stack, delete this.name;
        }
        get code() {
          return i;
        }
        set code(e) {
          Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: e, writable: true });
        }
        toString() {
          return `${this.name} [${i}]: ${this.message}`;
        }
      };
    }
    V3("ERR_BUFFER_OUT_OF_BOUNDS", function(i) {
      return i ? `${i} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    }, RangeError);
    V3("ERR_INVALID_ARG_TYPE", function(i, r) {
      return `The "${i}" argument must be of type number. Received type ${typeof r}`;
    }, TypeError);
    V3("ERR_OUT_OF_RANGE", function(i, r, t) {
      let n = `The value of "${i}" is out of range.`, e = t;
      return Number.isInteger(t) && Math.abs(t) > 2 ** 32 ? e = nr(String(t)) : typeof t == "bigint" && (e = String(t), (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) && (e = nr(e)), e += "n"), n += ` It must be ${r}. Received ${e}`, n;
    }, RangeError);
    function nr(i) {
      let r = "", t = i.length, n = i[0] === "-" ? 1 : 0;
      for (;t >= n + 4; t -= 3)
        r = `_${i.slice(t - 3, t)}${r}`;
      return `${i.slice(0, t)}${r}`;
    }
    function Jr(i, r, t) {
      R2(r, "offset"), (i[r] === undefined || i[r + t] === undefined) && C3(r, i.length - (t + 1));
    }
    function yr(i, r, t, n, e, o) {
      if (i > t || i < r) {
        let u2 = typeof r == "bigint" ? "n" : "", f3;
        throw o > 3 ? r === 0 || r === BigInt(0) ? f3 = `>= 0${u2} and < 2${u2} ** ${(o + 1) * 8}${u2}` : f3 = `>= -(2${u2} ** ${(o + 1) * 8 - 1}${u2}) and < 2 ** ${(o + 1) * 8 - 1}${u2}` : f3 = `>= ${r}${u2} and <= ${t}${u2}`, new A4.ERR_OUT_OF_RANGE("value", f3, i);
      }
      Jr(n, e, o);
    }
    function R2(i, r) {
      if (typeof i != "number")
        throw new A4.ERR_INVALID_ARG_TYPE(r, "number", i);
    }
    function C3(i, r, t) {
      throw Math.floor(i) !== i ? (R2(i, t), new A4.ERR_OUT_OF_RANGE(t || "offset", "an integer", i)) : r < 0 ? new A4.ERR_BUFFER_OUT_OF_BOUNDS : new A4.ERR_OUT_OF_RANGE(t || "offset", `>= ${t ? 1 : 0} and <= ${r}`, i);
    }
    var Kr = /[^+/0-9A-Za-z-_]/g;
    function Zr2(i) {
      if (i = i.split("=")[0], i = i.trim().replace(Kr, ""), i.length < 2)
        return "";
      for (;i.length % 4 !== 0; )
        i = i + "=";
      return i;
    }
    function W(i, r) {
      r = r || 1 / 0;
      let t, n = i.length, e = null, o = [];
      for (let u2 = 0;u2 < n; ++u2) {
        if (t = i.charCodeAt(u2), t > 55295 && t < 57344) {
          if (!e) {
            if (t > 56319) {
              (r -= 3) > -1 && o.push(239, 191, 189);
              continue;
            } else if (u2 + 1 === n) {
              (r -= 3) > -1 && o.push(239, 191, 189);
              continue;
            }
            e = t;
            continue;
          }
          if (t < 56320) {
            (r -= 3) > -1 && o.push(239, 191, 189), e = t;
            continue;
          }
          t = (e - 55296 << 10 | t - 56320) + 65536;
        } else
          e && (r -= 3) > -1 && o.push(239, 191, 189);
        if (e = null, t < 128) {
          if ((r -= 1) < 0)
            break;
          o.push(t);
        } else if (t < 2048) {
          if ((r -= 2) < 0)
            break;
          o.push(t >> 6 | 192, t & 63 | 128);
        } else if (t < 65536) {
          if ((r -= 3) < 0)
            break;
          o.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
        } else if (t < 1114112) {
          if ((r -= 4) < 0)
            break;
          o.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
        } else
          throw new Error("Invalid code point");
      }
      return o;
    }
    function Qr2(i) {
      let r = [];
      for (let t = 0;t < i.length; ++t)
        r.push(i.charCodeAt(t) & 255);
      return r;
    }
    function vr(i, r) {
      let t, n, e, o = [];
      for (let u2 = 0;u2 < i.length && !((r -= 2) < 0); ++u2)
        t = i.charCodeAt(u2), n = t >> 8, e = t % 256, o.push(e), o.push(n);
      return o;
    }
    function wr(i) {
      return G.toByteArray(Zr2(i));
    }
    function M2(i, r, t, n) {
      let e;
      for (e = 0;e < n && !(e + t >= r.length || e >= i.length); ++e)
        r[e + t] = i[e];
      return e;
    }
    function E4(i, r) {
      return i instanceof r || i != null && i.constructor != null && i.constructor.name != null && i.constructor.name === r.name;
    }
    function X2(i) {
      return i !== i;
    }
    var rt = function() {
      let i = "0123456789abcdef", r = new Array(256);
      for (let t = 0;t < 16; ++t) {
        let n = t * 16;
        for (let e = 0;e < 16; ++e)
          r[n + e] = i[t] + i[e];
      }
      return r;
    }();
    function g2(i) {
      return typeof BigInt > "u" ? tt2 : i;
    }
    function tt2() {
      throw new Error("BigInt not supported");
    }
  });
  S2 = {};
  Fr(S2, { default: () => xr.Buffer });
  _3(S2, J(z3()));
  xr = J(z3());
  export_default = xr.Buffer;
  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */
  /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/ref/lib/ref.js
var require_ref = __commonJS((exports, module) => {
  var overwriteInspect = function(inspect2) {
    if (inspect2.name === "refinspect") {
      return inspect2;
    } else {
      return function refinspect() {
        var v3 = inspect2.apply(this, arguments);
        return v3.replace("Buffer", "Buffer@0x" + this.hexAddress());
      };
    }
  };
  var assert = require_assert();
  var inspect = (init_util(), __toCommonJS(exports_util)).inspect;
  var debug = require_browser()("ref");
  exports = module.exports = require_bindings()("binding");
  exports.refType = function refType(type) {
    var _type = exports.coerceType(type);
    var rtn = Object.create(_type);
    rtn.indirection++;
    if (_type.name) {
      Object.defineProperty(rtn, "name", {
        value: _type.name + "*",
        configurable: true,
        enumerable: true,
        writable: true
      });
    }
    return rtn;
  };
  exports.derefType = function derefType(type) {
    var _type = exports.coerceType(type);
    if (_type.indirection === 1) {
      throw new Error("Cannot create deref\'d type for type with indirection 1");
    }
    var rtn = Object.getPrototypeOf(_type);
    if (rtn.indirection !== _type.indirection - 1) {
      rtn = Object.create(_type);
      rtn.indirection--;
    }
    return rtn;
  };
  exports.coerceType = function coerceType(type) {
    var rtn = type;
    if (typeof rtn === "string") {
      rtn = exports.types[type];
      if (rtn)
        return rtn;
      rtn = type.replace(/\s+/g, "").toLowerCase();
      if (rtn === "pointer") {
        rtn = exports.refType(exports.types.void);
      } else if (rtn === "string") {
        rtn = exports.types.CString;
      } else {
        var refCount = 0;
        rtn = rtn.replace(/\*/g, function() {
          refCount++;
          return "";
        });
        rtn = exports.types[rtn];
        if (refCount > 0) {
          if (!(rtn && ("size" in rtn) && ("indirection" in rtn))) {
            throw new TypeError('could not determine a proper "type" from: ' + JSON.stringify(type));
          }
          for (var i = 0;i < refCount; i++) {
            rtn = exports.refType(rtn);
          }
        }
      }
    }
    if (!(rtn && ("size" in rtn) && ("indirection" in rtn))) {
      throw new TypeError('could not determine a proper "type" from: ' + JSON.stringify(type));
    }
    return rtn;
  };
  exports.getType = function getType(buffer) {
    if (!buffer.type) {
      debug('WARN: no "type" found on buffer, setting default "type"', buffer);
      buffer.type = {};
      buffer.type.size = buffer.length;
      buffer.type.indirection = 1;
      buffer.type.get = function get() {
        throw new Error('unknown "type"; cannot get()');
      };
      buffer.type.set = function set() {
        throw new Error('unknown "type"; cannot set()');
      };
    }
    return exports.coerceType(buffer.type);
  };
  exports.get = function get(buffer, offset, type) {
    if (!offset) {
      offset = 0;
    }
    if (type) {
      type = exports.coerceType(type);
    } else {
      type = exports.getType(buffer);
    }
    debug("get(): (offset: %d)", offset, buffer);
    assert(type.indirection > 0, '"indirection" level must be at least 1');
    if (type.indirection === 1) {
      return type.get(buffer, offset);
    } else {
      var size = type.indirection === 2 ? type.size : exports.sizeof.pointer;
      var reference = exports.readPointer(buffer, offset, size);
      reference.type = exports.derefType(type);
      return reference;
    }
  };
  exports.set = function set(buffer, offset, value, type) {
    if (!offset) {
      offset = 0;
    }
    if (type) {
      type = exports.coerceType(type);
    } else {
      type = exports.getType(buffer);
    }
    debug("set(): (offset: %d)", offset, buffer, value);
    assert(type.indirection >= 1, '"indirection" level must be at least 1');
    if (type.indirection === 1) {
      type.set(buffer, offset, value);
    } else {
      exports.writePointer(buffer, offset, value);
    }
  };
  exports.alloc = function alloc(_type, value) {
    var type = exports.coerceType(_type);
    debug('allocating Buffer for type with "size"', type.size);
    var size;
    if (type.indirection === 1) {
      size = type.size;
    } else {
      size = exports.sizeof.pointer;
    }
    var buffer = new Buffer(size);
    buffer.type = type;
    if (arguments.length >= 2) {
      debug("setting value on allocated buffer", value);
      exports.set(buffer, 0, value, type);
    }
    return buffer;
  };
  exports.allocCString = function allocCString(string, encoding) {
    if (string == null || Buffer.isBuffer(string) && exports.isNull(string)) {
      return exports.NULL;
    }
    var size = Buffer.byteLength(string, encoding) + 1;
    var buffer = new Buffer(size);
    exports.writeCString(buffer, 0, string, encoding);
    buffer.type = charPtrType;
    return buffer;
  };
  exports.writeCString = function writeCString(buffer, offset, string, encoding) {
    assert(Buffer.isBuffer(buffer), "expected a Buffer as the first argument");
    assert.equal("string", typeof string, 'expected a "string" as the third argument');
    if (!offset) {
      offset = 0;
    }
    if (!encoding) {
      encoding = "utf8";
    }
    var size = buffer.length - offset;
    var len = buffer.write(string, offset, size, encoding);
    buffer.writeUInt8(0, offset + len);
  };
  exports["readInt64" + exports.endianness] = exports.readInt64;
  exports["readUInt64" + exports.endianness] = exports.readUInt64;
  exports["writeInt64" + exports.endianness] = exports.writeInt64;
  exports["writeUInt64" + exports.endianness] = exports.writeUInt64;
  var opposite = exports.endianness == "LE" ? "BE" : "LE";
  var int64temp = new Buffer(exports.sizeof.int64);
  var uint64temp = new Buffer(exports.sizeof.uint64);
  exports["readInt64" + opposite] = function(buffer, offset) {
    for (var i = 0;i < exports.sizeof.int64; i++) {
      int64temp[i] = buffer[offset + exports.sizeof.int64 - i - 1];
    }
    return exports.readInt64(int64temp, 0);
  };
  exports["readUInt64" + opposite] = function(buffer, offset) {
    for (var i = 0;i < exports.sizeof.uint64; i++) {
      uint64temp[i] = buffer[offset + exports.sizeof.uint64 - i - 1];
    }
    return exports.readUInt64(uint64temp, 0);
  };
  exports["writeInt64" + opposite] = function(buffer, offset, value) {
    exports.writeInt64(int64temp, 0, value);
    for (var i = 0;i < exports.sizeof.int64; i++) {
      buffer[offset + i] = int64temp[exports.sizeof.int64 - i - 1];
    }
  };
  exports["writeUInt64" + opposite] = function(buffer, offset, value) {
    exports.writeUInt64(uint64temp, 0, value);
    for (var i = 0;i < exports.sizeof.uint64; i++) {
      buffer[offset + i] = uint64temp[exports.sizeof.uint64 - i - 1];
    }
  };
  exports.ref = function ref(buffer) {
    debug("creating a reference to buffer", buffer);
    var type = exports.refType(exports.getType(buffer));
    return exports.alloc(type, buffer);
  };
  exports.deref = function deref(buffer) {
    debug("dereferencing buffer", buffer);
    return exports.get(buffer);
  };
  exports._attach = function _attach(buf, obj) {
    if (!buf._refs) {
      buf._refs = [];
    }
    buf._refs.push(obj);
  };
  exports._writeObject = exports.writeObject;
  exports.writeObject = function writeObject(buf, offset, obj, persistent) {
    debug("writing Object to buffer", buf, offset, obj, persistent);
    exports._writeObject(buf, offset, obj, persistent);
    exports._attach(buf, obj);
  };
  exports._writePointer = exports.writePointer;
  exports.writePointer = function writePointer(buf, offset, ptr) {
    debug("writing pointer to buffer", buf, offset, ptr);
    exports._writePointer(buf, offset, ptr);
    exports._attach(buf, ptr);
  };
  exports._reinterpret = exports.reinterpret;
  exports.reinterpret = function reinterpret(buffer, size, offset) {
    debug('reinterpreting buffer to "%d" bytes', size);
    var rtn = exports._reinterpret(buffer, size, offset || 0);
    exports._attach(rtn, buffer);
    return rtn;
  };
  exports._reinterpretUntilZeros = exports.reinterpretUntilZeros;
  exports.reinterpretUntilZeros = function reinterpretUntilZeros(buffer, size, offset) {
    debug('reinterpreting buffer to until "%d" NULL (0) bytes are found', size);
    var rtn = exports._reinterpretUntilZeros(buffer, size, offset || 0);
    exports._attach(rtn, buffer);
    return rtn;
  };
  var types = exports.types = {};
  types.void = {
    size: 0,
    indirection: 1,
    get: function get(buf, offset) {
      debug("getting `void` type (returns `null`)");
      return null;
    },
    set: function set(buf, offset, val) {
      debug("setting `void` type (no-op)");
    }
  };
  types.int8 = {
    size: exports.sizeof.int8,
    indirection: 1,
    get: function get(buf, offset) {
      return buf.readInt8(offset || 0);
    },
    set: function set(buf, offset, val) {
      if (typeof val === "string") {
        val = val.charCodeAt(0);
      }
      return buf.writeInt8(val, offset || 0);
    }
  };
  types.uint8 = {
    size: exports.sizeof.uint8,
    indirection: 1,
    get: function get(buf, offset) {
      return buf.readUInt8(offset || 0);
    },
    set: function set(buf, offset, val) {
      if (typeof val === "string") {
        val = val.charCodeAt(0);
      }
      return buf.writeUInt8(val, offset || 0);
    }
  };
  types.int16 = {
    size: exports.sizeof.int16,
    indirection: 1,
    get: function get(buf, offset) {
      return buf["readInt16" + exports.endianness](offset || 0);
    },
    set: function set(buf, offset, val) {
      return buf["writeInt16" + exports.endianness](val, offset || 0);
    }
  };
  types.uint16 = {
    size: exports.sizeof.uint16,
    indirection: 1,
    get: function get(buf, offset) {
      return buf["readUInt16" + exports.endianness](offset || 0);
    },
    set: function set(buf, offset, val) {
      return buf["writeUInt16" + exports.endianness](val, offset || 0);
    }
  };
  types.int32 = {
    size: exports.sizeof.int32,
    indirection: 1,
    get: function get(buf, offset) {
      return buf["readInt32" + exports.endianness](offset || 0);
    },
    set: function set(buf, offset, val) {
      return buf["writeInt32" + exports.endianness](val, offset || 0);
    }
  };
  types.uint32 = {
    size: exports.sizeof.uint32,
    indirection: 1,
    get: function get(buf, offset) {
      return buf["readUInt32" + exports.endianness](offset || 0);
    },
    set: function set(buf, offset, val) {
      return buf["writeUInt32" + exports.endianness](val, offset || 0);
    }
  };
  types.int64 = {
    size: exports.sizeof.int64,
    indirection: 1,
    get: function get(buf, offset) {
      return buf["readInt64" + exports.endianness](offset || 0);
    },
    set: function set(buf, offset, val) {
      return buf["writeInt64" + exports.endianness](val, offset || 0);
    }
  };
  types.uint64 = {
    size: exports.sizeof.uint64,
    indirection: 1,
    get: function get(buf, offset) {
      return buf["readUInt64" + exports.endianness](offset || 0);
    },
    set: function set(buf, offset, val) {
      return buf["writeUInt64" + exports.endianness](val, offset || 0);
    }
  };
  types.float = {
    size: exports.sizeof.float,
    indirection: 1,
    get: function get(buf, offset) {
      return buf["readFloat" + exports.endianness](offset || 0);
    },
    set: function set(buf, offset, val) {
      return buf["writeFloat" + exports.endianness](val, offset || 0);
    }
  };
  types.double = {
    size: exports.sizeof.double,
    indirection: 1,
    get: function get(buf, offset) {
      return buf["readDouble" + exports.endianness](offset || 0);
    },
    set: function set(buf, offset, val) {
      return buf["writeDouble" + exports.endianness](val, offset || 0);
    }
  };
  types.Object = {
    size: exports.sizeof.Object,
    indirection: 1,
    get: function get(buf, offset) {
      return buf.readObject(offset || 0);
    },
    set: function set(buf, offset, val) {
      return buf.writeObject(val, offset || 0);
    }
  };
  types.CString = {
    size: exports.sizeof.pointer,
    alignment: exports.alignof.pointer,
    indirection: 1,
    get: function get(buf, offset) {
      var _buf = exports.readPointer(buf, offset);
      if (exports.isNull(_buf)) {
        return null;
      }
      return exports.readCString(_buf, 0);
    },
    set: function set(buf, offset, val) {
      var _buf;
      if (Buffer.isBuffer(val)) {
        _buf = val;
      } else {
        _buf = exports.allocCString(val);
      }
      return exports.writePointer(buf, offset, _buf);
    }
  };
  var utfstringwarned = false;
  Object.defineProperty(types, "Utf8String", {
    enumerable: false,
    configurable: true,
    get: function() {
      if (!utfstringwarned) {
        utfstringwarned = true;
        console.error('"Utf8String" type is deprecated, use "CString" instead');
      }
      return types.CString;
    }
  });
  [
    "bool",
    "byte",
    "char",
    "uchar",
    "short",
    "ushort",
    "int",
    "uint",
    "long",
    "ulong",
    "longlong",
    "ulonglong",
    "size_t"
  ].forEach(function(name) {
    var unsigned = name === "bool" || name === "byte" || name === "size_t" || name[0] === "u";
    var size = exports.sizeof[name];
    assert(size >= 1 && size <= 8);
    var typeName = "int" + size * 8;
    if (unsigned) {
      typeName = "u" + typeName;
    }
    var type = exports.types[typeName];
    assert(type);
    exports.types[name] = Object.create(type);
  });
  Object.keys(exports.alignof).forEach(function(name) {
    if (name === "pointer")
      return;
    exports.types[name].alignment = exports.alignof[name];
    assert(exports.types[name].alignment > 0);
  });
  exports.types.bool.get = function(_get) {
    return function get(buf, offset) {
      return _get(buf, offset) ? true : false;
    };
  }(exports.types.bool.get);
  exports.types.bool.set = function(_set) {
    return function set(buf, offset, val) {
      if (typeof val !== "number") {
        val = val ? 1 : 0;
      }
      return _set(buf, offset, val);
    };
  }(exports.types.bool.set);
  /*!
   * Set the `name` property of the types. Used for debugging...
   */
  Object.keys(exports.types).forEach(function(name) {
    exports.types[name].name = name;
  });
  /*!
   * This `char *` type is used by "allocCString()" above.
   */
  var charPtrType = exports.refType(exports.types.char);
  /*!
   * Set the `type` property of the `NULL` pointer Buffer object.
   */
  exports.NULL.type = exports.types.void;
  exports.NULL_POINTER = exports.ref(exports.NULL);
  Buffer.prototype.address = function address() {
    return exports.address(this, 0);
  };
  Buffer.prototype.hexAddress = function hexAddress() {
    return exports.hexAddress(this, 0);
  };
  Buffer.prototype.isNull = function isNull() {
    return exports.isNull(this, 0);
  };
  Buffer.prototype.ref = function ref() {
    return exports.ref(this);
  };
  Buffer.prototype.deref = function deref() {
    return exports.deref(this);
  };
  Buffer.prototype.readObject = function readObject(offset) {
    return exports.readObject(this, offset);
  };
  Buffer.prototype.writeObject = function writeObject(obj, offset) {
    return exports.writeObject(this, offset, obj);
  };
  Buffer.prototype.readPointer = function readPointer(offset, size) {
    return exports.readPointer(this, offset, size);
  };
  Buffer.prototype.writePointer = function writePointer(ptr, offset) {
    return exports.writePointer(this, offset, ptr);
  };
  Buffer.prototype.readCString = function readCString(offset) {
    return exports.readCString(this, offset);
  };
  Buffer.prototype.writeCString = function writeCString(string, offset, encoding) {
    return exports.writeCString(this, offset, string, encoding);
  };
  Buffer.prototype.readInt64BE = function readInt64BE(offset) {
    return exports.readInt64BE(this, offset);
  };
  Buffer.prototype.writeInt64BE = function writeInt64BE(val, offset) {
    return exports.writeInt64BE(this, offset, val);
  };
  Buffer.prototype.readUInt64BE = function readUInt64BE(offset) {
    return exports.readUInt64BE(this, offset);
  };
  Buffer.prototype.writeUInt64BE = function writeUInt64BE(val, offset) {
    return exports.writeUInt64BE(this, offset, val);
  };
  Buffer.prototype.readInt64LE = function readInt64LE(offset) {
    return exports.readInt64LE(this, offset);
  };
  Buffer.prototype.writeInt64LE = function writeInt64LE(val, offset) {
    return exports.writeInt64LE(this, offset, val);
  };
  Buffer.prototype.readUInt64LE = function readUInt64LE(offset) {
    return exports.readUInt64LE(this, offset);
  };
  Buffer.prototype.writeUInt64LE = function writeUInt64LE(val, offset) {
    return exports.writeUInt64LE(this, offset, val);
  };
  Buffer.prototype.reinterpret = function reinterpret(size, offset) {
    return exports.reinterpret(this, size, offset);
  };
  Buffer.prototype.reinterpretUntilZeros = function reinterpretUntilZeros(size, offset) {
    return exports.reinterpretUntilZeros(this, size, offset);
  };
  var inspectSym = inspect.custom || "inspect";
  Buffer.prototype[inspectSym] = overwriteInspect(Buffer.prototype[inspectSym]);
  if (!(exports.NULL instanceof Buffer)) {
    debug("extending SlowBuffer\'s prototype since it doesn\'t inherit from Buffer.prototype");
    /*!
       * SlowBuffer convenience methods.
       */
    SlowBuffer = (init_buffer(), __toCommonJS(exports_buffer)).SlowBuffer;
    SlowBuffer.prototype.address = Buffer.prototype.address;
    SlowBuffer.prototype.hexAddress = Buffer.prototype.hexAddress;
    SlowBuffer.prototype.isNull = Buffer.prototype.isNull;
    SlowBuffer.prototype.ref = Buffer.prototype.ref;
    SlowBuffer.prototype.deref = Buffer.prototype.deref;
    SlowBuffer.prototype.readObject = Buffer.prototype.readObject;
    SlowBuffer.prototype.writeObject = Buffer.prototype.writeObject;
    SlowBuffer.prototype.readPointer = Buffer.prototype.readPointer;
    SlowBuffer.prototype.writePointer = Buffer.prototype.writePointer;
    SlowBuffer.prototype.readCString = Buffer.prototype.readCString;
    SlowBuffer.prototype.writeCString = Buffer.prototype.writeCString;
    SlowBuffer.prototype.reinterpret = Buffer.prototype.reinterpret;
    SlowBuffer.prototype.reinterpretUntilZeros = Buffer.prototype.reinterpretUntilZeros;
    SlowBuffer.prototype.readInt64BE = Buffer.prototype.readInt64BE;
    SlowBuffer.prototype.writeInt64BE = Buffer.prototype.writeInt64BE;
    SlowBuffer.prototype.readUInt64BE = Buffer.prototype.readUInt64BE;
    SlowBuffer.prototype.writeUInt64BE = Buffer.prototype.writeUInt64BE;
    SlowBuffer.prototype.readInt64LE = Buffer.prototype.readInt64LE;
    SlowBuffer.prototype.writeInt64LE = Buffer.prototype.writeInt64LE;
    SlowBuffer.prototype.readUInt64LE = Buffer.prototype.readUInt64LE;
    SlowBuffer.prototype.writeUInt64LE = Buffer.prototype.writeUInt64LE;
    SlowBuffer.prototype[inspectSym] = overwriteInspect(SlowBuffer.prototype[inspectSym]);
  }
  var SlowBuffer;
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/ffi/node_modules/debug/node_modules/ms/index.js
var require_ms2 = __commonJS((exports, module) => {
  var parse = function(str) {
    str = String(str);
    if (str.length > 100) {
      return;
    }
    var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
      return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || "ms").toLowerCase();
    switch (type) {
      case "years":
      case "year":
      case "yrs":
      case "yr":
      case "y":
        return n * y4;
      case "days":
      case "day":
      case "d":
        return n * d3;
      case "hours":
      case "hour":
      case "hrs":
      case "hr":
      case "h":
        return n * h4;
      case "minutes":
      case "minute":
      case "mins":
      case "min":
      case "m":
        return n * m3;
      case "seconds":
      case "second":
      case "secs":
      case "sec":
      case "s":
        return n * s2;
      case "milliseconds":
      case "millisecond":
      case "msecs":
      case "msec":
      case "ms":
        return n;
      default:
        return;
    }
  };
  var fmtShort = function(ms) {
    if (ms >= d3) {
      return Math.round(ms / d3) + "d";
    }
    if (ms >= h4) {
      return Math.round(ms / h4) + "h";
    }
    if (ms >= m3) {
      return Math.round(ms / m3) + "m";
    }
    if (ms >= s2) {
      return Math.round(ms / s2) + "s";
    }
    return ms + "ms";
  };
  var fmtLong = function(ms) {
    return plural(ms, d3, "day") || plural(ms, h4, "hour") || plural(ms, m3, "minute") || plural(ms, s2, "second") || ms + " ms";
  };
  var plural = function(ms, n, name) {
    if (ms < n) {
      return;
    }
    if (ms < n * 1.5) {
      return Math.floor(ms / n) + " " + name;
    }
    return Math.ceil(ms / n) + " " + name + "s";
  };
  var s2 = 1000;
  var m3 = s2 * 60;
  var h4 = m3 * 60;
  var d3 = h4 * 24;
  var y4 = d3 * 365.25;
  module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === "string" && val.length > 0) {
      return parse(val);
    } else if (type === "number" && isNaN(val) === false) {
      return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/ffi/node_modules/debug/src/debug.js
var require_debug2 = __commonJS((exports, module) => {
  var selectColor = function(namespace) {
    var hash = 0, i;
    for (i in namespace) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0;
    }
    return exports.colors[Math.abs(hash) % exports.colors.length];
  };
  var createDebug = function(namespace) {
    function debug() {
      if (!debug.enabled)
        return;
      var self2 = debug;
      var curr = +new Date;
      var ms = curr - (prevTime || curr);
      self2.diff = ms;
      self2.prev = prevTime;
      self2.curr = curr;
      prevTime = curr;
      var args = new Array(arguments.length);
      for (var i = 0;i < args.length; i++) {
        args[i] = arguments[i];
      }
      args[0] = exports.coerce(args[0]);
      if (typeof args[0] !== "string") {
        args.unshift("%O");
      }
      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
        if (match === "%%")
          return match;
        index++;
        var formatter = exports.formatters[format];
        if (typeof formatter === "function") {
          var val = args[index];
          match = formatter.call(self2, val);
          args.splice(index, 1);
          index--;
        }
        return match;
      });
      exports.formatArgs.call(self2, args);
      var logFn = debug.log || exports.log || console.log.bind(console);
      logFn.apply(self2, args);
    }
    debug.namespace = namespace;
    debug.enabled = exports.enabled(namespace);
    debug.useColors = exports.useColors();
    debug.color = selectColor(namespace);
    if (typeof exports.init === "function") {
      exports.init(debug);
    }
    return debug;
  };
  var enable = function(namespaces) {
    exports.save(namespaces);
    exports.names = [];
    exports.skips = [];
    var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
    var len = split.length;
    for (var i = 0;i < len; i++) {
      if (!split[i])
        continue;
      namespaces = split[i].replace(/\*/g, ".*?");
      if (namespaces[0] === "-") {
        exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
      } else {
        exports.names.push(new RegExp("^" + namespaces + "$"));
      }
    }
  };
  var disable = function() {
    exports.enable("");
  };
  var enabled = function(name) {
    var i, len;
    for (i = 0, len = exports.skips.length;i < len; i++) {
      if (exports.skips[i].test(name)) {
        return false;
      }
    }
    for (i = 0, len = exports.names.length;i < len; i++) {
      if (exports.names[i].test(name)) {
        return true;
      }
    }
    return false;
  };
  var coerce = function(val) {
    if (val instanceof Error)
      return val.stack || val.message;
    return val;
  };
  exports = module.exports = createDebug.debug = createDebug["default"] = createDebug;
  exports.coerce = coerce;
  exports.disable = disable;
  exports.enable = enable;
  exports.enabled = enabled;
  exports.humanize = require_ms2();
  exports.names = [];
  exports.skips = [];
  exports.formatters = {};
  var prevTime;
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/ffi/node_modules/debug/src/browser.js
var require_browser2 = __commonJS((exports, module) => {
  var useColors = function() {
    if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
      return true;
    }
    return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  };
  var formatArgs = function(args) {
    var useColors2 = this.useColors;
    args[0] = (useColors2 ? "%c" : "") + this.namespace + (useColors2 ? " %c" : " ") + args[0] + (useColors2 ? "%c " : " ") + "+" + exports.humanize(this.diff);
    if (!useColors2)
      return;
    var c2 = "color: " + this.color;
    args.splice(1, 0, c2, "color: inherit");
    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, function(match) {
      if (match === "%%")
        return;
      index++;
      if (match === "%c") {
        lastC = index;
      }
    });
    args.splice(lastC, 0, c2);
  };
  var log = function() {
    return typeof console === "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
  };
  var save = function(namespaces) {
    try {
      if (namespaces == null) {
        exports.storage.removeItem("debug");
      } else {
        exports.storage.debug = namespaces;
      }
    } catch (e) {
    }
  };
  var load = function() {
    var r;
    try {
      r = exports.storage.debug;
    } catch (e) {
    }
    if (!r && typeof process !== "undefined" && ("env" in process)) {
      r = process.env.DEBUG;
    }
    return r;
  };
  var localstorage = function() {
    try {
      return window.localStorage;
    } catch (e) {
    }
  };
  exports = module.exports = require_debug2();
  exports.log = log;
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = typeof chrome != "undefined" && typeof chrome.storage != "undefined" ? chrome.storage.local : localstorage();
  exports.colors = [
    "lightseagreen",
    "forestgreen",
    "goldenrod",
    "dodgerblue",
    "darkorchid",
    "crimson"
  ];
  exports.formatters.j = function(v3) {
    try {
      return JSON.stringify(v3);
    } catch (err) {
      return "[UnexpectedJSONParseError]: " + err.message;
    }
  };
  exports.enable(load());
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/ref-struct/node_modules/debug/node_modules/ms/index.js
var require_ms3 = __commonJS((exports, module) => {
  var parse = function(str) {
    str = String(str);
    if (str.length > 100) {
      return;
    }
    var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
      return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || "ms").toLowerCase();
    switch (type) {
      case "years":
      case "year":
      case "yrs":
      case "yr":
      case "y":
        return n * y4;
      case "days":
      case "day":
      case "d":
        return n * d3;
      case "hours":
      case "hour":
      case "hrs":
      case "hr":
      case "h":
        return n * h4;
      case "minutes":
      case "minute":
      case "mins":
      case "min":
      case "m":
        return n * m3;
      case "seconds":
      case "second":
      case "secs":
      case "sec":
      case "s":
        return n * s2;
      case "milliseconds":
      case "millisecond":
      case "msecs":
      case "msec":
      case "ms":
        return n;
      default:
        return;
    }
  };
  var fmtShort = function(ms) {
    if (ms >= d3) {
      return Math.round(ms / d3) + "d";
    }
    if (ms >= h4) {
      return Math.round(ms / h4) + "h";
    }
    if (ms >= m3) {
      return Math.round(ms / m3) + "m";
    }
    if (ms >= s2) {
      return Math.round(ms / s2) + "s";
    }
    return ms + "ms";
  };
  var fmtLong = function(ms) {
    return plural(ms, d3, "day") || plural(ms, h4, "hour") || plural(ms, m3, "minute") || plural(ms, s2, "second") || ms + " ms";
  };
  var plural = function(ms, n, name) {
    if (ms < n) {
      return;
    }
    if (ms < n * 1.5) {
      return Math.floor(ms / n) + " " + name;
    }
    return Math.ceil(ms / n) + " " + name + "s";
  };
  var s2 = 1000;
  var m3 = s2 * 60;
  var h4 = m3 * 60;
  var d3 = h4 * 24;
  var y4 = d3 * 365.25;
  module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === "string" && val.length > 0) {
      return parse(val);
    } else if (type === "number" && isNaN(val) === false) {
      return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/ref-struct/node_modules/debug/src/debug.js
var require_debug3 = __commonJS((exports, module) => {
  var selectColor = function(namespace) {
    var hash = 0, i;
    for (i in namespace) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0;
    }
    return exports.colors[Math.abs(hash) % exports.colors.length];
  };
  var createDebug = function(namespace) {
    function debug() {
      if (!debug.enabled)
        return;
      var self2 = debug;
      var curr = +new Date;
      var ms = curr - (prevTime || curr);
      self2.diff = ms;
      self2.prev = prevTime;
      self2.curr = curr;
      prevTime = curr;
      var args = new Array(arguments.length);
      for (var i = 0;i < args.length; i++) {
        args[i] = arguments[i];
      }
      args[0] = exports.coerce(args[0]);
      if (typeof args[0] !== "string") {
        args.unshift("%O");
      }
      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
        if (match === "%%")
          return match;
        index++;
        var formatter = exports.formatters[format];
        if (typeof formatter === "function") {
          var val = args[index];
          match = formatter.call(self2, val);
          args.splice(index, 1);
          index--;
        }
        return match;
      });
      exports.formatArgs.call(self2, args);
      var logFn = debug.log || exports.log || console.log.bind(console);
      logFn.apply(self2, args);
    }
    debug.namespace = namespace;
    debug.enabled = exports.enabled(namespace);
    debug.useColors = exports.useColors();
    debug.color = selectColor(namespace);
    if (typeof exports.init === "function") {
      exports.init(debug);
    }
    return debug;
  };
  var enable = function(namespaces) {
    exports.save(namespaces);
    exports.names = [];
    exports.skips = [];
    var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
    var len = split.length;
    for (var i = 0;i < len; i++) {
      if (!split[i])
        continue;
      namespaces = split[i].replace(/\*/g, ".*?");
      if (namespaces[0] === "-") {
        exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
      } else {
        exports.names.push(new RegExp("^" + namespaces + "$"));
      }
    }
  };
  var disable = function() {
    exports.enable("");
  };
  var enabled = function(name) {
    var i, len;
    for (i = 0, len = exports.skips.length;i < len; i++) {
      if (exports.skips[i].test(name)) {
        return false;
      }
    }
    for (i = 0, len = exports.names.length;i < len; i++) {
      if (exports.names[i].test(name)) {
        return true;
      }
    }
    return false;
  };
  var coerce = function(val) {
    if (val instanceof Error)
      return val.stack || val.message;
    return val;
  };
  exports = module.exports = createDebug.debug = createDebug["default"] = createDebug;
  exports.coerce = coerce;
  exports.disable = disable;
  exports.enable = enable;
  exports.enabled = enabled;
  exports.humanize = require_ms3();
  exports.names = [];
  exports.skips = [];
  exports.formatters = {};
  var prevTime;
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/ref-struct/node_modules/debug/src/browser.js
var require_browser3 = __commonJS((exports, module) => {
  var useColors = function() {
    if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
      return true;
    }
    return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  };
  var formatArgs = function(args) {
    var useColors2 = this.useColors;
    args[0] = (useColors2 ? "%c" : "") + this.namespace + (useColors2 ? " %c" : " ") + args[0] + (useColors2 ? "%c " : " ") + "+" + exports.humanize(this.diff);
    if (!useColors2)
      return;
    var c2 = "color: " + this.color;
    args.splice(1, 0, c2, "color: inherit");
    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, function(match) {
      if (match === "%%")
        return;
      index++;
      if (match === "%c") {
        lastC = index;
      }
    });
    args.splice(lastC, 0, c2);
  };
  var log = function() {
    return typeof console === "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
  };
  var save = function(namespaces) {
    try {
      if (namespaces == null) {
        exports.storage.removeItem("debug");
      } else {
        exports.storage.debug = namespaces;
      }
    } catch (e) {
    }
  };
  var load = function() {
    var r;
    try {
      r = exports.storage.debug;
    } catch (e) {
    }
    if (!r && typeof process !== "undefined" && ("env" in process)) {
      r = process.env.DEBUG;
    }
    return r;
  };
  var localstorage = function() {
    try {
      return window.localStorage;
    } catch (e) {
    }
  };
  exports = module.exports = require_debug3();
  exports.log = log;
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = typeof chrome != "undefined" && typeof chrome.storage != "undefined" ? chrome.storage.local : localstorage();
  exports.colors = [
    "lightseagreen",
    "forestgreen",
    "goldenrod",
    "dodgerblue",
    "darkorchid",
    "crimson"
  ];
  exports.formatters.j = function(v3) {
    try {
      return JSON.stringify(v3);
    } catch (err) {
      return "[UnexpectedJSONParseError]: " + err.message;
    }
  };
  exports.enable(load());
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/ref-struct/lib/struct.js
var require_struct = __commonJS((exports, module) => {
  var Struct = function() {
    debug('defining new struct "type"');
    function StructType(arg2, data) {
      if (!(this instanceof StructType)) {
        return new StructType(arg2, data);
      }
      debug("creating new struct instance");
      var store;
      if (Buffer.isBuffer(arg2)) {
        debug("using passed-in Buffer instance to back the struct", arg2);
        assert(arg2.length >= StructType.size, "Buffer instance must be at least " + StructType.size + " bytes to back this struct type");
        store = arg2;
        arg2 = data;
      } else {
        debug("creating new Buffer instance to back the struct (size: %d)", StructType.size);
        store = new Buffer(StructType.size);
      }
      store.type = StructType;
      this["ref.buffer"] = store;
      if (arg2) {
        for (var key in arg2) {
          this[key] = arg2[key];
        }
      }
      StructType._instanceCreated = true;
    }
    StructType.prototype = Object.create(proto, {
      constructor: {
        value: StructType,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    StructType.defineProperty = defineProperty;
    StructType.toString = toString;
    StructType.fields = {};
    var opt = arguments.length > 0 && arguments[1] ? arguments[1] : {};
    StructType.size = 0;
    StructType.alignment = 0;
    StructType.indirection = 1;
    StructType.isPacked = opt.packed ? Boolean(opt.packed) : false;
    StructType.get = get;
    StructType.set = set;
    var arg = arguments[0];
    if (Array.isArray(arg)) {
      arg.forEach(function(a2) {
        var type = a2[0];
        var name = a2[1];
        StructType.defineProperty(name, type);
      });
    } else if (typeof arg === "object") {
      Object.keys(arg).forEach(function(name) {
        var type = arg[name];
        StructType.defineProperty(name, type);
      });
    }
    return StructType;
  };
  var get = function(buffer, offset) {
    debug('Struct "type" getter for buffer at offset', buffer, offset);
    if (offset > 0) {
      buffer = buffer.slice(offset);
    }
    return new this(buffer);
  };
  var set = function(buffer, offset, value) {
    debug('Struct "type" setter for buffer at offset', buffer, offset, value);
    var isStruct = value instanceof this;
    if (isStruct) {
      value["ref.buffer"].copy(buffer, offset, 0, this.size);
    } else {
      if (offset > 0) {
        buffer = buffer.slice(offset);
      }
      new this(buffer, value);
    }
  };
  var toString = function() {
    return "[StructType]";
  };
  var defineProperty = function(name, type) {
    debug("defining new struct type field", name);
    type = ref.coerceType(type);
    assert(!this._instanceCreated, 'an instance of this Struct type has already been created, cannot add new "fields" anymore');
    assert.equal("string", typeof name, 'expected a "string" field name');
    assert(type && /object|function/i.test(typeof type) && ("size" in type) && ("indirection" in type), 'expected a "type" object describing the field type: "' + type + '"');
    assert(type.indirection > 1 || type.size > 0, '"type" object must have a size greater than 0');
    assert(!(name in this.prototype), 'the field "' + name + '" already exists in this Struct type');
    var field = {
      type
    };
    this.fields[name] = field;
    var desc = { enumerable: true, configurable: true };
    desc.get = function() {
      debug('getting "%s" struct field (offset: %d)', name, field.offset);
      return ref.get(this["ref.buffer"], field.offset, type);
    };
    desc.set = function(value) {
      debug('setting "%s" struct field (offset: %d)', name, field.offset, value);
      return ref.set(this["ref.buffer"], field.offset, value, type);
    };
    recalc(this);
    Object.defineProperty(this.prototype, name, desc);
  };
  var recalc = function(struct) {
    struct.size = 0;
    struct.alignment = 0;
    var fieldNames = Object.keys(struct.fields);
    fieldNames.forEach(function(name) {
      var field = struct.fields[name];
      var type = field.type;
      var alignment = type.alignment || ref.alignof.pointer;
      if (type.indirection > 1) {
        alignment = ref.alignof.pointer;
      }
      if (struct.isPacked) {
        struct.alignment = Math.min(struct.alignment || alignment, alignment);
      } else {
        struct.alignment = Math.max(struct.alignment, alignment);
      }
    });
    fieldNames.forEach(function(name) {
      var field = struct.fields[name];
      var type = field.type;
      if (type.fixedLength != null) {
        field.offset = addType(type.type);
        for (var i = 1;i < type.fixedLength; i++) {
          addType(type.type);
        }
      } else {
        field.offset = addType(type);
      }
    });
    function addType(type) {
      var offset = struct.size;
      var align = type.indirection === 1 ? type.alignment : ref.alignof.pointer;
      var padding = struct.isPacked ? 0 : (align - offset % align) % align;
      var size = type.indirection === 1 ? type.size : ref.sizeof.pointer;
      offset += padding;
      if (!struct.isPacked) {
        assert.equal(offset % align, 0, "offset should align");
      }
      struct.size = offset + size;
      return offset;
    }
    var left = struct.size % struct.alignment;
    if (left > 0) {
      debug("additional padding to the end of struct:", struct.alignment - left);
      struct.size += struct.alignment - left;
    }
  };
  var ref = require_ref();
  var util = (init_util(), __toCommonJS(exports_util));
  var assert = require_assert();
  var debug = require_browser3()("ref:struct");
  module.exports = Struct;
  var proto = {};
  proto["ref.buffer"] = ref.NULL;
  proto.toObject = function toObject() {
    var obj = {};
    Object.keys(this.constructor.fields).forEach(function(k2) {
      obj[k2] = this[k2];
    }, this);
    return obj;
  };
  proto.toJSON = function toJSON() {
    return this.toObject();
  };
  proto.inspect = function inspect() {
    var obj = this.toObject();
    Object.keys(this).forEach(function(k2) {
      obj[k2] = this[k2];
    }, this);
    return util.inspect(obj);
  };
  proto.ref = function ref() {
    return this["ref.buffer"];
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/bindings/bindings.js
var require_bindings2 = __commonJS((exports, module) => {
  var bindings = function(opts) {
    if (typeof opts == "string") {
      opts = { bindings: opts };
    } else if (!opts) {
      opts = {};
    }
    opts.__proto__ = defaults;
    if (!opts.module_root) {
      opts.module_root = exports.getRoot(exports.getFileName());
    }
    if (path.extname(opts.bindings) != ".node") {
      opts.bindings += ".node";
    }
    var tries = [], i = 0, l2 = opts.try.length, n, b4, err;
    for (;i < l2; i++) {
      n = join.apply(null, opts.try[i].map(function(p3) {
        return opts[p3] || p3;
      }));
      tries.push(n);
      try {
        b4 = opts.path ? require.resolve(n) : require(n);
        if (!opts.path) {
          b4.path = n;
        }
        return b4;
      } catch (e) {
        if (!/not find/i.test(e.message)) {
          throw e;
        }
      }
    }
    err = new Error("Could not locate the bindings file. Tried:\n" + tries.map(function(a2) {
      return opts.arrow + a2;
    }).join("\n"));
    err.tries = tries;
    throw err;
  };
  var __filename = "/Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/bindings/bindings.js";
  var fs = (()=>({}));
  var path = (init_path(), __toCommonJS(exports_path));
  var join = path.join;
  var dirname = path.dirname;
  var exists = fs.existsSync || path.existsSync;
  var defaults = {
    arrow: process.env.NODE_BINDINGS_ARROW || " \u2192 ",
    compiled: process.env.NODE_BINDINGS_COMPILED_DIR || "compiled",
    platform: process.platform,
    arch: process.arch,
    version: process.versions.node,
    bindings: "bindings.node",
    try: [
      ["module_root", "build", "bindings"],
      ["module_root", "build", "Debug", "bindings"],
      ["module_root", "build", "Release", "bindings"],
      ["module_root", "out", "Debug", "bindings"],
      ["module_root", "Debug", "bindings"],
      ["module_root", "out", "Release", "bindings"],
      ["module_root", "Release", "bindings"],
      ["module_root", "build", "default", "bindings"],
      ["module_root", "compiled", "version", "platform", "arch", "bindings"]
    ]
  };
  module.exports = exports = bindings;
  exports.getFileName = function getFileName(calling_file) {
    var { prepareStackTrace: origPST, stackTraceLimit: origSTL } = Error, dummy = {}, fileName;
    Error.stackTraceLimit = 10;
    Error.prepareStackTrace = function(e, st2) {
      for (var i = 0, l2 = st2.length;i < l2; i++) {
        fileName = st2[i].getFileName();
        if (fileName !== __filename) {
          if (calling_file) {
            if (fileName !== calling_file) {
              return;
            }
          } else {
            return;
          }
        }
      }
    };
    Error.captureStackTrace(dummy);
    dummy.stack;
    Error.prepareStackTrace = origPST;
    Error.stackTraceLimit = origSTL;
    return fileName;
  };
  console.log(dirname)
  exports.getRoot = function getRoot(file) {
    var dir = dirname(file), prev;
    while (true) {
      if (dir === ".") {
        dir = process.cwd();
      }
      if (exists(join(dir, "package.json")) || exists(join(dir, "node_modules"))) {
        return dir;
      }
      if (prev === dir) {
        throw new Error('Could not find module root given file: "' + file + '". Do you have a `package.json` file? ');
      }
      prev = dir;
      dir = join(dir, "..");
    }
  }.bind(this);
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/ffi/lib/bindings.js
var require_bindings3 = __commonJS((exports, module) => {
  module.exports = require_bindings2()("ffi_bindings.node");
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/ffi/lib/type.js
var require_type = __commonJS((exports, module) => {
  var Type = function(type) {
    type = ref.coerceType(type);
    debug("Type()", type.name || type);
    assert(type.indirection >= 1, 'invalid "type" given: ' + (type.name || type));
    var rtn;
    if (type.indirection === 1) {
      rtn = type.ffi_type;
    } else {
      rtn = bindings.FFI_TYPES.pointer;
    }
    if (!rtn && type.type) {
      rtn = bindings.FFI_TYPES.pointer;
    }
    if (!rtn && type.fields) {
      debug('creating an `ffi_type` for given "ref-struct" type');
      var fields = type.fields, fieldNames = Object.keys(fields), numFields = fieldNames.length, numElements = 0, ffi_type = new FFI_TYPE, i = 0, field, ffi_type_ptr;
      ffi_type.size = 0;
      ffi_type.alignment = 0;
      ffi_type.type = 13;
      for (i = 0;i < numFields; i++) {
        field = fields[fieldNames[i]];
        if (field.type.fixedLength > 0) {
          numElements += field.type.fixedLength;
        } else {
          numElements += 1;
        }
      }
      var size = ref.sizeof.pointer * (numElements + 1);
      var elements = ffi_type.elements = new Buffer(size);
      var index = 0;
      for (i = 0;i < numFields; i++) {
        field = fields[fieldNames[i]];
        if (field.type.fixedLength > 0) {
          ffi_type_ptr = Type(field.type.type);
          for (var j3 = 0;j3 < field.type.fixedLength; j3++) {
            elements.writePointer(ffi_type_ptr, index++ * ref.sizeof.pointer);
          }
        } else {
          ffi_type_ptr = Type(field.type);
          elements.writePointer(ffi_type_ptr, index++ * ref.sizeof.pointer);
        }
      }
      elements.writePointer(ref.NULL, index * ref.sizeof.pointer);
      rtn = type.ffi_type = ffi_type.ref();
    }
    if (!rtn && type.name) {
      if (type.name == "CString") {
        rtn = type.ffi_type = bindings.FFI_TYPES.pointer;
      } else {
        var cur = type;
        while (!rtn && cur) {
          rtn = cur.ffi_type = bindings.FFI_TYPES[cur.name];
          cur = Object.getPrototypeOf(cur);
        }
      }
    }
    assert(rtn, "Could not determine the `ffi_type` instance for type: " + (type.name || type));
    debug("returning `ffi_type`", rtn.name);
    return rtn;
  };
  var ref = require_ref();
  var assert = require_assert();
  var debug = require_browser2()("ffi:types");
  var Struct = require_struct();
  var bindings = require_bindings3();
  var FFI_TYPE = Type.FFI_TYPE = Struct();
  FFI_TYPE.defineProperty("size", ref.types.size_t);
  FFI_TYPE.defineProperty("alignment", ref.types.ushort);
  FFI_TYPE.defineProperty("type", ref.types.ushort);
  var ffi_type_ptr_array = ref.refType(ref.refType(FFI_TYPE));
  FFI_TYPE.defineProperty("elements", ffi_type_ptr_array);
  assert.equal(bindings.FFI_TYPE_SIZE, FFI_TYPE.size);
  module.exports = Type;
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/ffi/lib/cif.js
var require_cif = __commonJS((exports, module) => {
  var CIF = function(rtype, types, abi) {
    debug("creating `ffi_cif *` instance");
    assert(!!rtype, 'expected a return "type" object as the first argument');
    assert(Array.isArray(types), 'expected an Array of arg "type" objects as the second argument');
    var cif = new Buffer(FFI_CIF_SIZE);
    var numArgs = types.length;
    var _argtypesptr = new Buffer(numArgs * POINTER_SIZE);
    var _rtypeptr = Type(rtype);
    for (var i = 0;i < numArgs; i++) {
      var type = types[i];
      var ffiType = Type(type);
      _argtypesptr.writePointer(ffiType, i * POINTER_SIZE);
    }
    cif.rtnTypePtr = _rtypeptr;
    cif.argTypesPtr = _argtypesptr;
    if (typeof abi === "undefined") {
      debug("no ABI specified (this is OK), using FFI_DEFAULT_ABI");
      abi = FFI_DEFAULT_ABI;
    }
    var status = ffi_prep_cif(cif, numArgs, _rtypeptr, _argtypesptr, abi);
    if (status !== FFI_OK) {
      switch (status) {
        case FFI_BAD_TYPEDEF:
          var err = new Error("ffi_prep_cif() returned an FFI_BAD_TYPEDEF error");
          err.code = "FFI_BAD_TYPEDEF";
          err.errno = status;
          throw err;
          break;
        case FFI_BAD_ABI:
          var err = new Error("ffi_prep_cif() returned an FFI_BAD_ABI error");
          err.code = "FFI_BAD_ABI";
          err.errno = status;
          throw err;
          break;
        default:
          throw new Error("ffi_prep_cif() returned an error: " + status);
          break;
      }
    }
    return cif;
  };
  var Type = require_type();
  var assert = require_assert();
  var debug = require_browser2()("ffi:cif");
  var ref = require_ref();
  var bindings = require_bindings3();
  var POINTER_SIZE = ref.sizeof.pointer;
  var ffi_prep_cif = bindings.ffi_prep_cif;
  var FFI_CIF_SIZE = bindings.FFI_CIF_SIZE;
  var FFI_DEFAULT_ABI = bindings.FFI_DEFAULT_ABI;
  var FFI_OK = bindings.FFI_OK;
  var FFI_BAD_TYPEDEF = bindings.FFI_BAD_TYPEDEF;
  var FFI_BAD_ABI = bindings.FFI_BAD_ABI;
  module.exports = CIF;
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/ffi/lib/cif_var.js
var require_cif_var = __commonJS((exports, module) => {
  var CIF_var = function(rtype, types, numFixedArgs, abi) {
    debug("creating `ffi_cif *` instance with `ffi_prep_cif_var()`");
    assert(!!rtype, 'expected a return "type" object as the first argument');
    assert(Array.isArray(types), 'expected an Array of arg "type" objects as the second argument');
    assert(numFixedArgs >= 1, "expected the number of fixed arguments to be at least 1");
    var cif = new Buffer(FFI_CIF_SIZE);
    var numTotalArgs = types.length;
    var _argtypesptr = new Buffer(numTotalArgs * POINTER_SIZE);
    var _rtypeptr = Type(rtype);
    for (var i = 0;i < numTotalArgs; i++) {
      var ffiType = Type(types[i]);
      _argtypesptr.writePointer(ffiType, i * POINTER_SIZE);
    }
    cif.rtnTypePtr = _rtypeptr;
    cif.argTypesPtr = _argtypesptr;
    if (typeof abi === "undefined") {
      debug("no ABI specified (this is OK), using FFI_DEFAULT_ABI");
      abi = FFI_DEFAULT_ABI;
    }
    var status = ffi_prep_cif_var(cif, numFixedArgs, numTotalArgs, _rtypeptr, _argtypesptr, abi);
    if (status !== FFI_OK) {
      switch (status) {
        case FFI_BAD_TYPEDEF:
          var err = new Error("ffi_prep_cif_var() returned an FFI_BAD_TYPEDEF error");
          err.code = "FFI_BAD_TYPEDEF";
          err.errno = status;
          throw err;
          break;
        case FFI_BAD_ABI:
          var err = new Error("ffi_prep_cif_var() returned an FFI_BAD_ABI error");
          err.code = "FFI_BAD_ABI";
          err.errno = status;
          throw err;
          break;
        default:
          var err = new Error("ffi_prep_cif_var() returned an error: " + status);
          err.errno = status;
          throw err;
          break;
      }
    }
    return cif;
  };
  var Type = require_type();
  var assert = require_assert();
  var debug = require_browser2()("ffi:cif_var");
  var ref = require_ref();
  var bindings = require_bindings3();
  var POINTER_SIZE = ref.sizeof.pointer;
  var ffi_prep_cif_var = bindings.ffi_prep_cif_var;
  var FFI_CIF_SIZE = bindings.FFI_CIF_SIZE;
  var FFI_DEFAULT_ABI = bindings.FFI_DEFAULT_ABI;
  var FFI_OK = bindings.FFI_OK;
  var FFI_BAD_TYPEDEF = bindings.FFI_BAD_TYPEDEF;
  var FFI_BAD_ABI = bindings.FFI_BAD_ABI;
  module.exports = CIF_var;
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/ffi/lib/callback.js
var require_callback = __commonJS((exports, module) => {
  var errorReportCallback = function(err) {
    if (err) {
      process.nextTick(function() {
        if (typeof err === "string") {
          throw new Error(err);
        } else {
          throw err;
        }
      });
    }
  };
  var Callback = function(retType, argTypes, abi, func) {
    debug("creating new Callback");
    if (typeof abi === "function") {
      func = abi;
      abi = undefined;
    }
    assert(!!retType, 'expected a return "type" object as the first argument');
    assert(Array.isArray(argTypes), 'expected Array of arg "type" objects as the second argument');
    assert.equal(typeof func, "function", "expected a function as the third argument");
    retType = ref.coerceType(retType);
    argTypes = argTypes.map(ref.coerceType);
    var cif = CIF(retType, argTypes, abi);
    var argc = argTypes.length;
    var callback = _Callback(cif, retType.size, argc, errorReportCallback, function(retval, params) {
      debug("Callback function being invoked");
      try {
        var args = [];
        for (var i = 0;i < argc; i++) {
          var type = argTypes[i];
          var argPtr = params.readPointer(i * ref.sizeof.pointer, type.size);
          argPtr.type = type;
          args.push(argPtr.deref());
        }
        var result = func.apply(null, args);
        try {
          ref.set(retval, 0, result, retType);
        } catch (e) {
          e.message = "error setting return value - " + e.message;
          throw e;
        }
      } catch (e) {
        return e;
      }
    });
    callback._cif = cif;
    return callback;
  };
  var ref = require_ref();
  var CIF = require_cif();
  var assert = require_assert();
  var debug = require_browser2()("ffi:Callback");
  var _Callback = require_bindings3().Callback;
  module.exports = Callback;
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/ffi/lib/_foreign_function.js
var require__foreign_function = __commonJS((exports, module) => {
  var ForeignFunction = function(cif, funcPtr, returnType, argTypes) {
    debug("creating new ForeignFunction", funcPtr);
    var numArgs = argTypes.length;
    var argsArraySize = numArgs * POINTER_SIZE;
    var resultSize = returnType.size >= ref.sizeof.long ? returnType.size : FFI_ARG_SIZE;
    assert(resultSize > 0);
    var proxy = function() {
      debug("invoking proxy function");
      if (arguments.length !== numArgs) {
        throw new TypeError("Expected " + numArgs + " arguments, got " + arguments.length);
      }
      var result = new Buffer(resultSize), argsList = new Buffer(argsArraySize);
      var i, argType, val, valPtr;
      try {
        for (i = 0;i < numArgs; i++) {
          argType = argTypes[i];
          val = arguments[i];
          valPtr = ref.alloc(argType, val);
          argsList.writePointer(valPtr, i * POINTER_SIZE);
        }
      } catch (e) {
        e.message = "error setting argument " + i + " - " + e.message;
        throw e;
      }
      bindings.ffi_call(cif, funcPtr, result, argsList);
      result.type = returnType;
      return result.deref();
    };
    proxy.async = function() {
      debug("invoking async proxy function");
      var argc = arguments.length;
      if (argc !== numArgs + 1) {
        throw new TypeError("Expected " + (numArgs + 1) + " arguments, got " + argc);
      }
      var callback = arguments[argc - 1];
      if (typeof callback !== "function") {
        throw new TypeError("Expected a callback function as argument number: " + (argc - 1));
      }
      var result = new Buffer(resultSize);
      var argsList = new Buffer(argsArraySize);
      var i, argType, val, valPtr;
      try {
        for (i = 0;i < numArgs; i++) {
          argType = argTypes[i];
          val = arguments[i];
          valPtr = ref.alloc(argType, val);
          argsList.writePointer(valPtr, i * POINTER_SIZE);
        }
      } catch (e) {
        e.message = "error setting argument " + i + " - " + e.message;
        return process.nextTick(callback.bind(null, e));
      }
      bindings.ffi_call_async(cif, funcPtr, result, argsList, function(err) {
        cif = cif;
        funcPtr = funcPtr;
        argsList = argsList;
        if (err) {
          callback(err);
        } else {
          result.type = returnType;
          callback(null, result.deref());
        }
      });
    };
    return proxy;
  };
  var assert = require_assert();
  var debug = require_browser2()("ffi:_ForeignFunction");
  var ref = require_ref();
  var bindings = require_bindings3();
  var POINTER_SIZE = ref.sizeof.pointer;
  var FFI_ARG_SIZE = bindings.FFI_ARG_SIZE;
  module.exports = ForeignFunction;
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/ffi/lib/foreign_function.js
var require_foreign_function = __commonJS((exports, module) => {
  var ForeignFunction = function(funcPtr, returnType, argTypes, abi) {
    debug("creating new ForeignFunction", funcPtr);
    assert(Buffer.isBuffer(funcPtr), "expected Buffer as first argument");
    assert(!!returnType, 'expected a return "type" object as the second argument');
    assert(Array.isArray(argTypes), 'expected Array of arg "type" objects as the third argument');
    returnType = ref.coerceType(returnType);
    argTypes = argTypes.map(ref.coerceType);
    var cif = CIF(returnType, argTypes, abi);
    return _ForeignFunction(cif, funcPtr, returnType, argTypes);
  };
  var CIF = require_cif();
  var _ForeignFunction = require__foreign_function();
  var debug = require_browser2()("ffi:ForeignFunction");
  var assert = require_assert();
  var ref = require_ref();
  module.exports = ForeignFunction;
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/ffi/lib/function.js
var require_function = __commonJS((exports, module) => {
  var Function2 = function(retType, argTypes, abi) {
    if (!(this instanceof Function2)) {
      return new Function2(retType, argTypes, abi);
    }
    debug("creating new FunctionType");
    assert(!!retType, 'expected a return "type" object as the first argument');
    assert(Array.isArray(argTypes), 'expected Array of arg "type" objects as the second argument');
    this.retType = ref.coerceType(retType);
    this.argTypes = argTypes.map(ref.coerceType);
    this.abi = abi == null ? bindings.FFI_DEFAULT_ABI : abi;
  };
  var ref = require_ref();
  var assert = require_assert();
  var bindings = require_bindings3();
  var Callback = require_callback();
  var ForeignFunction = require_foreign_function();
  var debug = require_browser2()("ffi:FunctionType");
  module.exports = Function2;
  Function2.prototype.ffi_type = bindings.FFI_TYPES.pointer;
  Function2.prototype.size = ref.sizeof.pointer;
  Function2.prototype.alignment = ref.alignof.pointer;
  Function2.prototype.indirection = 1;
  Function2.prototype.toPointer = function toPointer(fn) {
    return Callback(this.retType, this.argTypes, this.abi, fn);
  };
  Function2.prototype.toFunction = function toFunction(buf) {
    return ForeignFunction(buf, this.retType, this.argTypes, this.abi);
  };
  Function2.prototype.get = function get(buffer, offset) {
    debug('ffi FunctionType "get" function');
    var ptr = buffer.readPointer(offset);
    return this.toFunction(ptr);
  };
  Function2.prototype.set = function set(buffer, offset, value) {
    debug('ffi FunctionType "set" function');
    var ptr;
    if (typeof value == "function") {
      ptr = this.toPointer(value);
    } else if (Buffer.isBuffer(value)) {
      ptr = value;
    } else {
      throw new Error("don\'t know how to set callback function for: " + value);
    }
    buffer.writePointer(ptr, offset);
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/ffi/lib/foreign_function_var.js
var require_foreign_function_var = __commonJS((exports, module) => {
  var VariadicForeignFunction = function(funcPtr, returnType, fixedArgTypes, abi) {
    debug("creating new VariadicForeignFunction", funcPtr);
    var cache = {};
    assert(Buffer.isBuffer(funcPtr), "expected Buffer as first argument");
    assert(!!returnType, 'expected a return "type" object as the second argument');
    assert(Array.isArray(fixedArgTypes), 'expected Array of arg "type" objects as the third argument');
    var numFixedArgs = fixedArgTypes.length;
    fixedArgTypes = fixedArgTypes.map(ref.coerceType);
    var fixedKey = fixedArgTypes.map(function(type) {
      return getId(type);
    });
    function variadic_function_generator() {
      debug("variadic_function_generator invoked");
      var argTypes = fixedArgTypes.slice();
      var key = fixedKey.slice();
      for (var i = 0;i < arguments.length; i++) {
        var type = ref.coerceType(arguments[i]);
        argTypes.push(type);
        var ffi_type = Type(type);
        assert(ffi_type.name);
        key.push(getId(type));
      }
      var rtnType = ref.coerceType(variadic_function_generator.returnType);
      var rtnName = getId(rtnType);
      assert(rtnName);
      key = rtnName + key.join("");
      var func = cache[key];
      if (func) {
        debug("cache hit for key:", key);
      } else {
        debug("creating the variadic ffi_cif instance for key:", key);
        var cif = CIF_var(returnType, argTypes, numFixedArgs, abi);
        func = cache[key] = _ForeignFunction(cif, funcPtr, rtnType, argTypes);
      }
      return func;
    }
    variadic_function_generator.returnType = returnType;
    return variadic_function_generator;
  };
  var getId = function(type) {
    if (!type.hasOwnProperty(idKey)) {
      type[idKey] = ((1 + Math.random()) * 65536 | 0).toString(16);
    }
    return type[idKey];
  };
  var CIF_var = require_cif_var();
  var Type = require_type();
  var _ForeignFunction = require__foreign_function();
  var assert = require_assert();
  var debug = require_browser2()("ffi:VariadicForeignFunction");
  var ref = require_ref();
  var bindings = require_bindings3();
  var POINTER_SIZE = ref.sizeof.pointer;
  var FFI_ARG_SIZE = bindings.FFI_ARG_SIZE;
  module.exports = VariadicForeignFunction;
  var idKey = "_ffiId";
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/ffi/lib/dynamic_library.js
var require_dynamic_library = __commonJS((exports, module) => {
  var DynamicLibrary = function(path, mode) {
    if (!(this instanceof DynamicLibrary)) {
      return new DynamicLibrary(path, mode);
    }
    debug("new DynamicLibrary()", path, mode);
    if (mode == null) {
      mode = DynamicLibrary.FLAGS.RTLD_LAZY;
    }
    this._handle = dlopen(path, mode);
    assert(Buffer.isBuffer(this._handle), "expected a Buffer instance to be returned from `dlopen()`");
    if (this._handle.isNull()) {
      var err = this.error();
      var match;
      if (match = err.match(/^(([^ \t()])+\.so([^ \t:()])*):([ \t])*/)) {
        var content = read(match[1], "ascii");
        if (match = content.match(/GROUP *\( *(([^ )])+)/)) {
          return DynamicLibrary.call(this, match[1], mode);
        }
      }
      throw new Error("Dynamic Linking Error: " + err);
    }
  };
  var ForeignFunction = require_foreign_function();
  var assert = require_assert();
  var debug = require_browser2()("ffi:DynamicLibrary");
  var bindings = require_bindings3();
  var funcs = bindings.StaticFunctions;
  var ref = require_ref();
  var read = (()=>({})).readFileSync;
  var int = ref.types.int;
  var voidPtr = ref.refType(ref.types.void);
  var dlopen = ForeignFunction(funcs.dlopen, voidPtr, ["string", int]);
  var dlclose = ForeignFunction(funcs.dlclose, int, [voidPtr]);
  var dlsym = ForeignFunction(funcs.dlsym, voidPtr, [voidPtr, "string"]);
  var dlerror = ForeignFunction(funcs.dlerror, "string", []);
  module.exports = DynamicLibrary;
  DynamicLibrary.FLAGS = {};
  Object.keys(bindings).forEach(function(k2) {
    if (!/^RTLD_/.test(k2))
      return;
    var desc = Object.getOwnPropertyDescriptor(bindings, k2);
    Object.defineProperty(DynamicLibrary.FLAGS, k2, desc);
  });
  DynamicLibrary.prototype.close = function() {
    debug("dlclose()");
    return dlclose(this._handle);
  };
  DynamicLibrary.prototype.get = function(symbol) {
    debug("dlsym()", symbol);
    assert.equal("string", typeof symbol);
    var ptr = dlsym(this._handle, symbol);
    assert(Buffer.isBuffer(ptr));
    if (ptr.isNull()) {
      throw new Error("Dynamic Symbol Retrieval Error: " + this.error());
    }
    ptr.name = symbol;
    return ptr;
  };
  DynamicLibrary.prototype.error = function error() {
    debug("dlerror()");
    return dlerror();
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/ffi/lib/library.js
var require_library = __commonJS((exports, module) => {
  var Library = function(libfile, funcs, lib) {
    debug("creating Library object for", libfile);
    if (libfile && libfile.indexOf(EXT) === -1) {
      debug("appending library extension to library name", EXT);
      libfile += EXT;
    }
    if (!lib) {
      lib = {};
    }
    var dl = new DynamicLibrary(libfile || null, RTLD_NOW);
    Object.keys(funcs || {}).forEach(function(func) {
      debug("defining function", func);
      var fptr = dl.get(func), info = funcs[func];
      if (fptr.isNull()) {
        throw new Error('Library: "' + libfile + '" returned NULL function pointer for "' + func + '"');
      }
      var resultType = info[0], paramTypes = info[1], fopts = info[2], abi = fopts && fopts.abi, async = fopts && fopts.async, varargs = fopts && fopts.varargs;
      if (varargs) {
        lib[func] = VariadicForeignFunction(fptr, resultType, paramTypes, abi);
      } else {
        var ff = ForeignFunction(fptr, resultType, paramTypes, abi);
        lib[func] = async ? ff.async : ff;
      }
    });
    return lib;
  };
  var DynamicLibrary = require_dynamic_library();
  var ForeignFunction = require_foreign_function();
  var VariadicForeignFunction = require_foreign_function_var();
  var debug = require_browser2()("ffi:Library");
  var RTLD_NOW = DynamicLibrary.FLAGS.RTLD_NOW;
  var EXT = Library.EXT = {
    linux: ".so",
    linux2: ".so",
    sunos: ".so",
    solaris: ".so",
    freebsd: ".so",
    openbsd: ".so",
    darwin: ".dylib",
    mac: ".dylib",
    win32: ".dll"
  }[process.platform];
  module.exports = Library;
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/ffi/lib/errno.js
var require_errno = __commonJS((exports, module) => {
  var DynamicLibrary = require_dynamic_library();
  var ForeignFunction = require_foreign_function();
  var bindings = require_bindings3();
  var funcs = bindings.StaticFunctions;
  var ref = require_ref();
  var int = ref.types.int;
  var intPtr = ref.refType(int);
  var errno = null;
  if (process.platform == "win32") {
    _errno = DynamicLibrary("msvcrt.dll").get("_errno");
    errnoPtr = ForeignFunction(_errno, intPtr, []);
    errno = function() {
      return errnoPtr().deref();
    };
  } else {
    errno = ForeignFunction(funcs._errno, "int", []);
  }
  var _errno;
  var errnoPtr;
  module.exports = errno;
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/ffi/lib/ffi.js
var require_ffi = __commonJS((exports) => {
  var ref = require_ref();
  var assert = require_assert();
  var debug = require_browser2()("ffi:ffi");
  var Struct = require_struct();
  var bindings = require_bindings3();
  [
    "HAS_OBJC",
    "FFI_TYPES",
    ,
    "FFI_OK",
    "FFI_BAD_TYPEDEF",
    "FFI_BAD_ABI",
    "FFI_DEFAULT_ABI",
    "FFI_FIRST_ABI",
    "FFI_LAST_ABI",
    "FFI_SYSV",
    "FFI_UNIX64",
    "FFI_WIN64",
    "FFI_VFP",
    "FFI_STDCALL",
    "FFI_THISCALL",
    "FFI_FASTCALL",
    "RTLD_LAZY",
    "RTLD_NOW",
    "RTLD_LOCAL",
    "RTLD_GLOBAL",
    "RTLD_NOLOAD",
    "RTLD_NODELETE",
    "RTLD_FIRST",
    "RTLD_NEXT",
    "RTLD_DEFAULT",
    "RTLD_SELF",
    "RTLD_MAIN_ONLY",
    "FFI_MS_CDECL"
  ].forEach(function(prop) {
    if (!bindings.hasOwnProperty(prop)) {
      return debug("skipping exporting of non-existant property", prop);
    }
    var desc = Object.getOwnPropertyDescriptor(bindings, prop);
    Object.defineProperty(exports, prop, desc);
  });
  Object.keys(bindings.FFI_TYPES).forEach(function(name) {
    var type = bindings.FFI_TYPES[name];
    type.name = name;
    if (name === "pointer")
      return;
    ref.types[name].ffi_type = type;
  });
  ref.types.size_t.ffi_type = bindings.FFI_TYPES.pointer;
  var CString = ref.types.CString || ref.types.Utf8String;
  CString.ffi_type = bindings.FFI_TYPES.pointer;
  ref.types.Object.ffi_type = bindings.FFI_TYPES.pointer;
  switch (ref.sizeof.long) {
    case 4:
      ref.types.ulong.ffi_type = bindings.FFI_TYPES.uint32;
      ref.types.long.ffi_type = bindings.FFI_TYPES.int32;
      break;
    case 8:
      ref.types.ulong.ffi_type = bindings.FFI_TYPES.uint64;
      ref.types.long.ffi_type = bindings.FFI_TYPES.int64;
      break;
    default:
      throw new Error('unsupported "long" size: ' + ref.sizeof.long);
  }
  exports.types = ref.types;
  exports.version = bindings.version;
  exports.CIF = require_cif();
  exports.CIF_var = require_cif_var();
  exports.Function = require_function();
  exports.ForeignFunction = require_foreign_function();
  exports.VariadicForeignFunction = require_foreign_function_var();
  exports.DynamicLibrary = require_dynamic_library();
  exports.Library = require_library();
  exports.Callback = require_callback();
  exports.errno = require_errno();
  exports.ffiType = require_type();
  exports.LIB_EXT = exports.Library.EXT;
  exports.FFI_TYPE = exports.ffiType.FFI_TYPE;
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/node_modules/lodash/lodash.js
var require_lodash = __commonJS((exports, module) => {
  (function() {
    var undefined2;
    var VERSION = "4.17.21";
    var LARGE_ARRAY_SIZE = 200;
    var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var MAX_MEMOIZE_SIZE = 500;
    var PLACEHOLDER = "__lodash_placeholder__";
    var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
    var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
    var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
    var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
    var HOT_COUNT = 800, HOT_SPAN = 16;
    var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
    var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, NAN = 0 / 0;
    var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
    var wrapFlags = [
      ["ary", WRAP_ARY_FLAG],
      ["bind", WRAP_BIND_FLAG],
      ["bindKey", WRAP_BIND_KEY_FLAG],
      ["curry", WRAP_CURRY_FLAG],
      ["curryRight", WRAP_CURRY_RIGHT_FLAG],
      ["flip", WRAP_FLIP_FLAG],
      ["partial", WRAP_PARTIAL_FLAG],
      ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
      ["rearg", WRAP_REARG_FLAG]
    ];
    var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
    var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
    var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
    var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
    var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
    var reTrimStart = /^\s+/;
    var reWhitespace = /\s/;
    var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
    var reEscapeChar = /\\(\\)?/g;
    var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
    var reFlags = /\w*$/;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsOctal = /^0o[0-7]+$/i;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    var reNoMatch = /($^)/;
    var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
    var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
    var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reApos = RegExp(rsApos, "g");
    var reComboMark = RegExp(rsCombo, "g");
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    var reUnicodeWord = RegExp([
      rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
      rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
      rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
      rsUpper + "+" + rsOptContrUpper,
      rsOrdUpper,
      rsOrdLower,
      rsDigits,
      rsEmoji
    ].join("|"), "g");
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    var contextProps = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ];
    var templateCounter = -1;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    var deburredLetters = {
      "\xC0": "A",
      "\xC1": "A",
      "\xC2": "A",
      "\xC3": "A",
      "\xC4": "A",
      "\xC5": "A",
      "\xE0": "a",
      "\xE1": "a",
      "\xE2": "a",
      "\xE3": "a",
      "\xE4": "a",
      "\xE5": "a",
      "\xC7": "C",
      "\xE7": "c",
      "\xD0": "D",
      "\xF0": "d",
      "\xC8": "E",
      "\xC9": "E",
      "\xCA": "E",
      "\xCB": "E",
      "\xE8": "e",
      "\xE9": "e",
      "\xEA": "e",
      "\xEB": "e",
      "\xCC": "I",
      "\xCD": "I",
      "\xCE": "I",
      "\xCF": "I",
      "\xEC": "i",
      "\xED": "i",
      "\xEE": "i",
      "\xEF": "i",
      "\xD1": "N",
      "\xF1": "n",
      "\xD2": "O",
      "\xD3": "O",
      "\xD4": "O",
      "\xD5": "O",
      "\xD6": "O",
      "\xD8": "O",
      "\xF2": "o",
      "\xF3": "o",
      "\xF4": "o",
      "\xF5": "o",
      "\xF6": "o",
      "\xF8": "o",
      "\xD9": "U",
      "\xDA": "U",
      "\xDB": "U",
      "\xDC": "U",
      "\xF9": "u",
      "\xFA": "u",
      "\xFB": "u",
      "\xFC": "u",
      "\xDD": "Y",
      "\xFD": "y",
      "\xFF": "y",
      "\xC6": "Ae",
      "\xE6": "ae",
      "\xDE": "Th",
      "\xFE": "th",
      "\xDF": "ss",
      "\u0100": "A",
      "\u0102": "A",
      "\u0104": "A",
      "\u0101": "a",
      "\u0103": "a",
      "\u0105": "a",
      "\u0106": "C",
      "\u0108": "C",
      "\u010A": "C",
      "\u010C": "C",
      "\u0107": "c",
      "\u0109": "c",
      "\u010B": "c",
      "\u010D": "c",
      "\u010E": "D",
      "\u0110": "D",
      "\u010F": "d",
      "\u0111": "d",
      "\u0112": "E",
      "\u0114": "E",
      "\u0116": "E",
      "\u0118": "E",
      "\u011A": "E",
      "\u0113": "e",
      "\u0115": "e",
      "\u0117": "e",
      "\u0119": "e",
      "\u011B": "e",
      "\u011C": "G",
      "\u011E": "G",
      "\u0120": "G",
      "\u0122": "G",
      "\u011D": "g",
      "\u011F": "g",
      "\u0121": "g",
      "\u0123": "g",
      "\u0124": "H",
      "\u0126": "H",
      "\u0125": "h",
      "\u0127": "h",
      "\u0128": "I",
      "\u012A": "I",
      "\u012C": "I",
      "\u012E": "I",
      "\u0130": "I",
      "\u0129": "i",
      "\u012B": "i",
      "\u012D": "i",
      "\u012F": "i",
      "\u0131": "i",
      "\u0134": "J",
      "\u0135": "j",
      "\u0136": "K",
      "\u0137": "k",
      "\u0138": "k",
      "\u0139": "L",
      "\u013B": "L",
      "\u013D": "L",
      "\u013F": "L",
      "\u0141": "L",
      "\u013A": "l",
      "\u013C": "l",
      "\u013E": "l",
      "\u0140": "l",
      "\u0142": "l",
      "\u0143": "N",
      "\u0145": "N",
      "\u0147": "N",
      "\u014A": "N",
      "\u0144": "n",
      "\u0146": "n",
      "\u0148": "n",
      "\u014B": "n",
      "\u014C": "O",
      "\u014E": "O",
      "\u0150": "O",
      "\u014D": "o",
      "\u014F": "o",
      "\u0151": "o",
      "\u0154": "R",
      "\u0156": "R",
      "\u0158": "R",
      "\u0155": "r",
      "\u0157": "r",
      "\u0159": "r",
      "\u015A": "S",
      "\u015C": "S",
      "\u015E": "S",
      "\u0160": "S",
      "\u015B": "s",
      "\u015D": "s",
      "\u015F": "s",
      "\u0161": "s",
      "\u0162": "T",
      "\u0164": "T",
      "\u0166": "T",
      "\u0163": "t",
      "\u0165": "t",
      "\u0167": "t",
      "\u0168": "U",
      "\u016A": "U",
      "\u016C": "U",
      "\u016E": "U",
      "\u0170": "U",
      "\u0172": "U",
      "\u0169": "u",
      "\u016B": "u",
      "\u016D": "u",
      "\u016F": "u",
      "\u0171": "u",
      "\u0173": "u",
      "\u0174": "W",
      "\u0175": "w",
      "\u0176": "Y",
      "\u0177": "y",
      "\u0178": "Y",
      "\u0179": "Z",
      "\u017B": "Z",
      "\u017D": "Z",
      "\u017A": "z",
      "\u017C": "z",
      "\u017E": "z",
      "\u0132": "IJ",
      "\u0133": "ij",
      "\u0152": "Oe",
      "\u0153": "oe",
      "\u0149": "'n",
      "\u017F": "s"
    };
    var htmlEscapes = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    var htmlUnescapes = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    };
    var stringEscapes = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    };
    var freeParseFloat = parseFloat, freeParseInt = parseInt;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    function arrayAggregator(array, setter, iteratee, accumulator) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        var value = array[index];
        setter(accumulator, value, iteratee(value), array);
      }
      return accumulator;
    }
    function arrayEach(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayEachRight(array, iteratee) {
      var length = array == null ? 0 : array.length;
      while (length--) {
        if (iteratee(array[length], length, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayEvery(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (!predicate(array[index], index, array)) {
          return false;
        }
      }
      return true;
    }
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    function arrayIncludes(array, value) {
      var length = array == null ? 0 : array.length;
      return !!length && baseIndexOf(array, value, 0) > -1;
    }
    function arrayIncludesWith(array, value, comparator) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (comparator(value, array[index])) {
          return true;
        }
      }
      return false;
    }
    function arrayMap(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1, length = array == null ? 0 : array.length;
      if (initAccum && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }
    function arrayReduceRight(array, iteratee, accumulator, initAccum) {
      var length = array == null ? 0 : array.length;
      if (initAccum && length) {
        accumulator = array[--length];
      }
      while (length--) {
        accumulator = iteratee(accumulator, array[length], length, array);
      }
      return accumulator;
    }
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    var asciiSize = baseProperty("length");
    function asciiToArray(string) {
      return string.split("");
    }
    function asciiWords(string) {
      return string.match(reAsciiWord) || [];
    }
    function baseFindKey(collection, predicate, eachFunc) {
      var result;
      eachFunc(collection, function(value, key, collection2) {
        if (predicate(value, key, collection2)) {
          result = key;
          return false;
        }
      });
      return result;
    }
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    function baseIndexOf(array, value, fromIndex) {
      return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    function baseIndexOfWith(array, value, fromIndex, comparator) {
      var index = fromIndex - 1, length = array.length;
      while (++index < length) {
        if (comparator(array[index], value)) {
          return index;
        }
      }
      return -1;
    }
    function baseIsNaN(value) {
      return value !== value;
    }
    function baseMean(array, iteratee) {
      var length = array == null ? 0 : array.length;
      return length ? baseSum(array, iteratee) / length : NAN;
    }
    function baseProperty(key) {
      return function(object) {
        return object == null ? undefined2 : object[key];
      };
    }
    function basePropertyOf(object) {
      return function(key) {
        return object == null ? undefined2 : object[key];
      };
    }
    function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
      eachFunc(collection, function(value, index, collection2) {
        accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
      });
      return accumulator;
    }
    function baseSortBy(array, comparer) {
      var length = array.length;
      array.sort(comparer);
      while (length--) {
        array[length] = array[length].value;
      }
      return array;
    }
    function baseSum(array, iteratee) {
      var result, index = -1, length = array.length;
      while (++index < length) {
        var current = iteratee(array[index]);
        if (current !== undefined2) {
          result = result === undefined2 ? current : result + current;
        }
      }
      return result;
    }
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseToPairs(object, props) {
      return arrayMap(props, function(key) {
        return [key, object[key]];
      });
    }
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function baseValues(object, props) {
      return arrayMap(props, function(key) {
        return object[key];
      });
    }
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    function charsStartIndex(strSymbols, chrSymbols) {
      var index = -1, length = strSymbols.length;
      while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
      }
      return index;
    }
    function charsEndIndex(strSymbols, chrSymbols) {
      var index = strSymbols.length;
      while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
      }
      return index;
    }
    function countHolders(array, placeholder) {
      var length = array.length, result = 0;
      while (length--) {
        if (array[length] === placeholder) {
          ++result;
        }
      }
      return result;
    }
    var deburrLetter = basePropertyOf(deburredLetters);
    var escapeHtmlChar = basePropertyOf(htmlEscapes);
    function escapeStringChar(chr) {
      return "\\" + stringEscapes[chr];
    }
    function getValue(object, key) {
      return object == null ? undefined2 : object[key];
    }
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    function hasUnicodeWord(string) {
      return reHasUnicodeWord.test(string);
    }
    function iteratorToArray(iterator) {
      var data, result = [];
      while (!(data = iterator.next()).done) {
        result.push(data.value);
      }
      return result;
    }
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function replaceHolders(array, placeholder) {
      var index = -1, length = array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (value === placeholder || value === PLACEHOLDER) {
          array[index] = PLACEHOLDER;
          result[resIndex++] = index;
        }
      }
      return result;
    }
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    function setToPairs(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = [value, value];
      });
      return result;
    }
    function strictIndexOf(array, value, fromIndex) {
      var index = fromIndex - 1, length = array.length;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    function strictLastIndexOf(array, value, fromIndex) {
      var index = fromIndex + 1;
      while (index--) {
        if (array[index] === value) {
          return index;
        }
      }
      return index;
    }
    function stringSize(string) {
      return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
    }
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    function trimmedEndIndex(string) {
      var index = string.length;
      while (index-- && reWhitespace.test(string.charAt(index))) {
      }
      return index;
    }
    var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
    function unicodeSize(string) {
      var result = reUnicode.lastIndex = 0;
      while (reUnicode.test(string)) {
        ++result;
      }
      return result;
    }
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    function unicodeWords(string) {
      return string.match(reUnicodeWord) || [];
    }
    var runInContext = function runInContext(context) {
      context = context == null ? root : _4.defaults(root.Object(), context, _4.pick(root, contextProps));
      var { Array: Array2, Date: Date2, Error: Error2, Function: Function2, Math: Math2, Object: Object2, RegExp: RegExp2, String: String2, TypeError: TypeError2 } = context;
      var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
      var coreJsData = context["__core-js_shared__"];
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var idCounter = 0;
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      var nativeObjectToString = objectProto.toString;
      var objectCtorString = funcToString.call(Object2);
      var oldDash = root._;
      var reIsNative = RegExp2("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      var Buffer2 = moduleExports ? context.Buffer : undefined2, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined2, symIterator = Symbol2 ? Symbol2.iterator : undefined2, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined2;
      var defineProperty = function() {
        try {
          var func = getNative(Object2, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      }();
      var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
      var { ceil: nativeCeil, floor: nativeFloor } = Math2, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
      var DataView2 = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap2 = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
      var metaMap = WeakMap2 && new WeakMap2;
      var realNames = {};
      var dataViewCtorString = toSource(DataView2), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap2);
      var symbolProto = Symbol2 ? Symbol2.prototype : undefined2, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined2, symbolToString = symbolProto ? symbolProto.toString : undefined2;
      function lodash(value) {
        if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
          if (value instanceof LodashWrapper) {
            return value;
          }
          if (hasOwnProperty.call(value, "__wrapped__")) {
            return wrapperClone(value);
          }
        }
        return new LodashWrapper(value);
      }
      var baseCreate = function() {
        function object() {
        }
        return function(proto) {
          if (!isObject(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object.prototype = proto;
          var result2 = new object;
          object.prototype = undefined2;
          return result2;
        };
      }();
      function baseLodash() {
      }
      function LodashWrapper(value, chainAll) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__chain__ = !!chainAll;
        this.__index__ = 0;
        this.__values__ = undefined2;
      }
      lodash.templateSettings = {
        escape: reEscape,
        evaluate: reEvaluate,
        interpolate: reInterpolate,
        variable: "",
        imports: {
          _: lodash
        }
      };
      lodash.prototype = baseLodash.prototype;
      lodash.prototype.constructor = lodash;
      LodashWrapper.prototype = baseCreate(baseLodash.prototype);
      LodashWrapper.prototype.constructor = LodashWrapper;
      function LazyWrapper(value) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__dir__ = 1;
        this.__filtered__ = false;
        this.__iteratees__ = [];
        this.__takeCount__ = MAX_ARRAY_LENGTH;
        this.__views__ = [];
      }
      function lazyClone() {
        var result2 = new LazyWrapper(this.__wrapped__);
        result2.__actions__ = copyArray(this.__actions__);
        result2.__dir__ = this.__dir__;
        result2.__filtered__ = this.__filtered__;
        result2.__iteratees__ = copyArray(this.__iteratees__);
        result2.__takeCount__ = this.__takeCount__;
        result2.__views__ = copyArray(this.__views__);
        return result2;
      }
      function lazyReverse() {
        if (this.__filtered__) {
          var result2 = new LazyWrapper(this);
          result2.__dir__ = -1;
          result2.__filtered__ = true;
        } else {
          result2 = this.clone();
          result2.__dir__ *= -1;
        }
        return result2;
      }
      function lazyValue() {
        var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
        if (!isArr || !isRight && arrLength == length && takeCount == length) {
          return baseWrapperValue(array, this.__actions__);
        }
        var result2 = [];
        outer:
          while (length-- && resIndex < takeCount) {
            index += dir;
            var iterIndex = -1, value = array[index];
            while (++iterIndex < iterLength) {
              var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
              if (type == LAZY_MAP_FLAG) {
                value = computed;
              } else if (!computed) {
                if (type == LAZY_FILTER_FLAG) {
                  continue outer;
                } else {
                  break outer;
                }
              }
            }
            result2[resIndex++] = value;
          }
        return result2;
      }
      LazyWrapper.prototype = baseCreate(baseLodash.prototype);
      LazyWrapper.prototype.constructor = LazyWrapper;
      function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      function hashDelete(key) {
        var result2 = this.has(key) && delete this.__data__[key];
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result2 = data[key];
          return result2 === HASH_UNDEFINED ? undefined2 : result2;
        }
        return hasOwnProperty.call(data, key) ? data[key] : undefined2;
      }
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== undefined2 : hasOwnProperty.call(data, key);
      }
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === undefined2 ? HASH_UNDEFINED : value;
        return this;
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? undefined2 : data[index][1];
      }
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          hash: new Hash,
          map: new (Map2 || ListCache),
          string: new Hash
        };
      }
      function mapCacheDelete(key) {
        var result2 = getMapData(this, key)["delete"](key);
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size2 = data.size;
        data.set(key, value);
        this.size += data.size == size2 ? 0 : 1;
        return this;
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      function SetCache(values2) {
        var index = -1, length = values2 == null ? 0 : values2.length;
        this.__data__ = new MapCache;
        while (++index < length) {
          this.add(values2[index]);
        }
      }
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      function stackClear() {
        this.__data__ = new ListCache;
        this.size = 0;
      }
      function stackDelete(key) {
        var data = this.__data__, result2 = data["delete"](key);
        this.size = data.size;
        return result2;
      }
      function stackGet(key) {
        return this.__data__.get(key);
      }
      function stackHas(key) {
        return this.__data__.has(key);
      }
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      function arraySample(array) {
        var length = array.length;
        return length ? array[baseRandom(0, length - 1)] : undefined2;
      }
      function arraySampleSize(array, n) {
        return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
      }
      function arrayShuffle(array) {
        return shuffleSelf(copyArray(array));
      }
      function assignMergeValue(object, key, value) {
        if (value !== undefined2 && !eq(object[key], value) || value === undefined2 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined2 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      function baseAggregator(collection, setter, iteratee2, accumulator) {
        baseEach(collection, function(value, key, collection2) {
          setter(accumulator, value, iteratee2(value), collection2);
        });
        return accumulator;
      }
      function baseAssign(object, source) {
        return object && copyObject(source, keys(source), object);
      }
      function baseAssignIn(object, source) {
        return object && copyObject(source, keysIn(source), object);
      }
      function baseAssignValue(object, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object, key, {
            configurable: true,
            enumerable: true,
            value,
            writable: true
          });
        } else {
          object[key] = value;
        }
      }
      function baseAt(object, paths) {
        var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
        while (++index < length) {
          result2[index] = skip ? undefined2 : get(object, paths[index]);
        }
        return result2;
      }
      function baseClamp(number, lower, upper) {
        if (number === number) {
          if (upper !== undefined2) {
            number = number <= upper ? number : upper;
          }
          if (lower !== undefined2) {
            number = number >= lower ? number : lower;
          }
        }
        return number;
      }
      function baseClone(value, bitmask, customizer, key, object, stack) {
        var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
        if (customizer) {
          result2 = object ? customizer(value, key, object, stack) : customizer(value);
        }
        if (result2 !== undefined2) {
          return result2;
        }
        if (!isObject(value)) {
          return value;
        }
        var isArr = isArray(value);
        if (isArr) {
          result2 = initCloneArray(value);
          if (!isDeep) {
            return copyArray(value, result2);
          }
        } else {
          var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
          if (isBuffer(value)) {
            return cloneBuffer(value, isDeep);
          }
          if (tag == objectTag || tag == argsTag || isFunc && !object) {
            result2 = isFlat || isFunc ? {} : initCloneObject(value);
            if (!isDeep) {
              return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
            }
          } else {
            if (!cloneableTags[tag]) {
              return object ? value : {};
            }
            result2 = initCloneByTag(value, tag, isDeep);
          }
        }
        stack || (stack = new Stack);
        var stacked = stack.get(value);
        if (stacked) {
          return stacked;
        }
        stack.set(value, result2);
        if (isSet(value)) {
          value.forEach(function(subValue) {
            result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
          });
        } else if (isMap(value)) {
          value.forEach(function(subValue, key2) {
            result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
        }
        var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
        var props = isArr ? undefined2 : keysFunc(value);
        arrayEach(props || value, function(subValue, key2) {
          if (props) {
            key2 = subValue;
            subValue = value[key2];
          }
          assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
        return result2;
      }
      function baseConforms(source) {
        var props = keys(source);
        return function(object) {
          return baseConformsTo(object, source, props);
        };
      }
      function baseConformsTo(object, source, props) {
        var length = props.length;
        if (object == null) {
          return !length;
        }
        object = Object2(object);
        while (length--) {
          var key = props[length], predicate = source[key], value = object[key];
          if (value === undefined2 && !(key in object) || !predicate(value)) {
            return false;
          }
        }
        return true;
      }
      function baseDelay(func, wait, args) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        return setTimeout2(function() {
          func.apply(undefined2, args);
        }, wait);
      }
      function baseDifference(array, values2, iteratee2, comparator) {
        var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
        if (!length) {
          return result2;
        }
        if (iteratee2) {
          values2 = arrayMap(values2, baseUnary(iteratee2));
        }
        if (comparator) {
          includes2 = arrayIncludesWith;
          isCommon = false;
        } else if (values2.length >= LARGE_ARRAY_SIZE) {
          includes2 = cacheHas;
          isCommon = false;
          values2 = new SetCache(values2);
        }
        outer:
          while (++index < length) {
            var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed === computed) {
              var valuesIndex = valuesLength;
              while (valuesIndex--) {
                if (values2[valuesIndex] === computed) {
                  continue outer;
                }
              }
              result2.push(value);
            } else if (!includes2(values2, computed, comparator)) {
              result2.push(value);
            }
          }
        return result2;
      }
      var baseEach = createBaseEach(baseForOwn);
      var baseEachRight = createBaseEach(baseForOwnRight, true);
      function baseEvery(collection, predicate) {
        var result2 = true;
        baseEach(collection, function(value, index, collection2) {
          result2 = !!predicate(value, index, collection2);
          return result2;
        });
        return result2;
      }
      function baseExtremum(array, iteratee2, comparator) {
        var index = -1, length = array.length;
        while (++index < length) {
          var value = array[index], current = iteratee2(value);
          if (current != null && (computed === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed))) {
            var computed = current, result2 = value;
          }
        }
        return result2;
      }
      function baseFill(array, value, start, end) {
        var length = array.length;
        start = toInteger(start);
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end === undefined2 || end > length ? length : toInteger(end);
        if (end < 0) {
          end += length;
        }
        end = start > end ? 0 : toLength(end);
        while (start < end) {
          array[start++] = value;
        }
        return array;
      }
      function baseFilter(collection, predicate) {
        var result2 = [];
        baseEach(collection, function(value, index, collection2) {
          if (predicate(value, index, collection2)) {
            result2.push(value);
          }
        });
        return result2;
      }
      function baseFlatten(array, depth, predicate, isStrict, result2) {
        var index = -1, length = array.length;
        predicate || (predicate = isFlattenable);
        result2 || (result2 = []);
        while (++index < length) {
          var value = array[index];
          if (depth > 0 && predicate(value)) {
            if (depth > 1) {
              baseFlatten(value, depth - 1, predicate, isStrict, result2);
            } else {
              arrayPush(result2, value);
            }
          } else if (!isStrict) {
            result2[result2.length] = value;
          }
        }
        return result2;
      }
      var baseFor = createBaseFor();
      var baseForRight = createBaseFor(true);
      function baseForOwn(object, iteratee2) {
        return object && baseFor(object, iteratee2, keys);
      }
      function baseForOwnRight(object, iteratee2) {
        return object && baseForRight(object, iteratee2, keys);
      }
      function baseFunctions(object, props) {
        return arrayFilter(props, function(key) {
          return isFunction(object[key]);
        });
      }
      function baseGet(object, path) {
        path = castPath(path, object);
        var index = 0, length = path.length;
        while (object != null && index < length) {
          object = object[toKey(path[index++])];
        }
        return index && index == length ? object : undefined2;
      }
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result2 = keysFunc(object);
        return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
      }
      function baseGetTag(value) {
        if (value == null) {
          return value === undefined2 ? undefinedTag : nullTag;
        }
        return symToStringTag && (symToStringTag in Object2(value)) ? getRawTag(value) : objectToString(value);
      }
      function baseGt(value, other) {
        return value > other;
      }
      function baseHas(object, key) {
        return object != null && hasOwnProperty.call(object, key);
      }
      function baseHasIn(object, key) {
        return object != null && (key in Object2(object));
      }
      function baseInRange(number, start, end) {
        return number >= nativeMin(start, end) && number < nativeMax(start, end);
      }
      function baseIntersection(arrays, iteratee2, comparator) {
        var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
        while (othIndex--) {
          var array = arrays[othIndex];
          if (othIndex && iteratee2) {
            array = arrayMap(array, baseUnary(iteratee2));
          }
          maxLength = nativeMin(array.length, maxLength);
          caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined2;
        }
        array = arrays[0];
        var index = -1, seen = caches[0];
        outer:
          while (++index < length && result2.length < maxLength) {
            var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
              othIndex = othLength;
              while (--othIndex) {
                var cache = caches[othIndex];
                if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                  continue outer;
                }
              }
              if (seen) {
                seen.push(computed);
              }
              result2.push(value);
            }
          }
        return result2;
      }
      function baseInverter(object, setter, iteratee2, accumulator) {
        baseForOwn(object, function(value, key, object2) {
          setter(accumulator, iteratee2(value), key, object2);
        });
        return accumulator;
      }
      function baseInvoke(object, path, args) {
        path = castPath(path, object);
        object = parent(object, path);
        var func = object == null ? object : object[toKey(last(path))];
        return func == null ? undefined2 : apply(func, object, args);
      }
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      function baseIsArrayBuffer(value) {
        return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
      }
      function baseIsDate(value) {
        return isObjectLike(value) && baseGetTag(value) == dateTag;
      }
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer(object)) {
          if (!isBuffer(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack);
          return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack);
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack);
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      function baseIsMap(value) {
        return isObjectLike(value) && getTag(value) == mapTag;
      }
      function baseIsMatch(object, source, matchData, customizer) {
        var index = matchData.length, length = index, noCustomizer = !customizer;
        if (object == null) {
          return !length;
        }
        object = Object2(object);
        while (index--) {
          var data = matchData[index];
          if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
            return false;
          }
        }
        while (++index < length) {
          data = matchData[index];
          var key = data[0], objValue = object[key], srcValue = data[1];
          if (noCustomizer && data[2]) {
            if (objValue === undefined2 && !(key in object)) {
              return false;
            }
          } else {
            var stack = new Stack;
            if (customizer) {
              var result2 = customizer(objValue, srcValue, key, object, source, stack);
            }
            if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
              return false;
            }
          }
        }
        return true;
      }
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      function baseIsRegExp(value) {
        return isObjectLike(value) && baseGetTag(value) == regexpTag;
      }
      function baseIsSet(value) {
        return isObjectLike(value) && getTag(value) == setTag;
      }
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      function baseIteratee(value) {
        if (typeof value == "function") {
          return value;
        }
        if (value == null) {
          return identity;
        }
        if (typeof value == "object") {
          return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
        }
        return property(value);
      }
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result2 = [];
        for (var key in Object2(object)) {
          if (hasOwnProperty.call(object, key) && key != "constructor") {
            result2.push(key);
          }
        }
        return result2;
      }
      function baseKeysIn(object) {
        if (!isObject(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object), result2 = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      function baseLt(value, other) {
        return value < other;
      }
      function baseMap(collection, iteratee2) {
        var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
        baseEach(collection, function(value, key, collection2) {
          result2[++index] = iteratee2(value, key, collection2);
        });
        return result2;
      }
      function baseMatches(source) {
        var matchData = getMatchData(source);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }
        return function(object) {
          return object === source || baseIsMatch(object, source, matchData);
        };
      }
      function baseMatchesProperty(path, srcValue) {
        if (isKey(path) && isStrictComparable(srcValue)) {
          return matchesStrictComparable(toKey(path), srcValue);
        }
        return function(object) {
          var objValue = get(object, path);
          return objValue === undefined2 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
        };
      }
      function baseMerge(object, source, srcIndex, customizer, stack) {
        if (object === source) {
          return;
        }
        baseFor(source, function(srcValue, key) {
          stack || (stack = new Stack);
          if (isObject(srcValue)) {
            baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
          } else {
            var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined2;
            if (newValue === undefined2) {
              newValue = srcValue;
            }
            assignMergeValue(object, key, newValue);
          }
        }, keysIn);
      }
      function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
        var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
        if (stacked) {
          assignMergeValue(object, key, stacked);
          return;
        }
        var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined2;
        var isCommon = newValue === undefined2;
        if (isCommon) {
          var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
          newValue = srcValue;
          if (isArr || isBuff || isTyped) {
            if (isArray(objValue)) {
              newValue = objValue;
            } else if (isArrayLikeObject(objValue)) {
              newValue = copyArray(objValue);
            } else if (isBuff) {
              isCommon = false;
              newValue = cloneBuffer(srcValue, true);
            } else if (isTyped) {
              isCommon = false;
              newValue = cloneTypedArray(srcValue, true);
            } else {
              newValue = [];
            }
          } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
            newValue = objValue;
            if (isArguments(objValue)) {
              newValue = toPlainObject(objValue);
            } else if (!isObject(objValue) || isFunction(objValue)) {
              newValue = initCloneObject(srcValue);
            }
          } else {
            isCommon = false;
          }
        }
        if (isCommon) {
          stack.set(srcValue, newValue);
          mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
          stack["delete"](srcValue);
        }
        assignMergeValue(object, key, newValue);
      }
      function baseNth(array, n) {
        var length = array.length;
        if (!length) {
          return;
        }
        n += n < 0 ? length : 0;
        return isIndex(n, length) ? array[n] : undefined2;
      }
      function baseOrderBy(collection, iteratees, orders) {
        if (iteratees.length) {
          iteratees = arrayMap(iteratees, function(iteratee2) {
            if (isArray(iteratee2)) {
              return function(value) {
                return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
              };
            }
            return iteratee2;
          });
        } else {
          iteratees = [identity];
        }
        var index = -1;
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        var result2 = baseMap(collection, function(value, key, collection2) {
          var criteria = arrayMap(iteratees, function(iteratee2) {
            return iteratee2(value);
          });
          return { criteria, index: ++index, value };
        });
        return baseSortBy(result2, function(object, other) {
          return compareMultiple(object, other, orders);
        });
      }
      function basePick(object, paths) {
        return basePickBy(object, paths, function(value, path) {
          return hasIn(object, path);
        });
      }
      function basePickBy(object, paths, predicate) {
        var index = -1, length = paths.length, result2 = {};
        while (++index < length) {
          var path = paths[index], value = baseGet(object, path);
          if (predicate(value, path)) {
            baseSet(result2, castPath(path, object), value);
          }
        }
        return result2;
      }
      function basePropertyDeep(path) {
        return function(object) {
          return baseGet(object, path);
        };
      }
      function basePullAll(array, values2, iteratee2, comparator) {
        var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
        if (array === values2) {
          values2 = copyArray(values2);
        }
        if (iteratee2) {
          seen = arrayMap(array, baseUnary(iteratee2));
        }
        while (++index < length) {
          var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
          while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
            if (seen !== array) {
              splice.call(seen, fromIndex, 1);
            }
            splice.call(array, fromIndex, 1);
          }
        }
        return array;
      }
      function basePullAt(array, indexes) {
        var length = array ? indexes.length : 0, lastIndex = length - 1;
        while (length--) {
          var index = indexes[length];
          if (length == lastIndex || index !== previous) {
            var previous = index;
            if (isIndex(index)) {
              splice.call(array, index, 1);
            } else {
              baseUnset(array, index);
            }
          }
        }
        return array;
      }
      function baseRandom(lower, upper) {
        return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
      }
      function baseRange(start, end, step, fromRight) {
        var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
        while (length--) {
          result2[fromRight ? length : ++index] = start;
          start += step;
        }
        return result2;
      }
      function baseRepeat(string, n) {
        var result2 = "";
        if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
          return result2;
        }
        do {
          if (n % 2) {
            result2 += string;
          }
          n = nativeFloor(n / 2);
          if (n) {
            string += string;
          }
        } while (n);
        return result2;
      }
      function baseRest(func, start) {
        return setToString(overRest(func, start, identity), func + "");
      }
      function baseSample(collection) {
        return arraySample(values(collection));
      }
      function baseSampleSize(collection, n) {
        var array = values(collection);
        return shuffleSelf(array, baseClamp(n, 0, array.length));
      }
      function baseSet(object, path, value, customizer) {
        if (!isObject(object)) {
          return object;
        }
        path = castPath(path, object);
        var index = -1, length = path.length, lastIndex = length - 1, nested = object;
        while (nested != null && ++index < length) {
          var key = toKey(path[index]), newValue = value;
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return object;
          }
          if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : undefined2;
            if (newValue === undefined2) {
              newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
            }
          }
          assignValue(nested, key, newValue);
          nested = nested[key];
        }
        return object;
      }
      var baseSetData = !metaMap ? identity : function(func, data) {
        metaMap.set(func, data);
        return func;
      };
      var baseSetToString = !defineProperty ? identity : function(func, string) {
        return defineProperty(func, "toString", {
          configurable: true,
          enumerable: false,
          value: constant(string),
          writable: true
        });
      };
      function baseShuffle(collection) {
        return shuffleSelf(values(collection));
      }
      function baseSlice(array, start, end) {
        var index = -1, length = array.length;
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end > length ? length : end;
        if (end < 0) {
          end += length;
        }
        length = start > end ? 0 : end - start >>> 0;
        start >>>= 0;
        var result2 = Array2(length);
        while (++index < length) {
          result2[index] = array[index + start];
        }
        return result2;
      }
      function baseSome(collection, predicate) {
        var result2;
        baseEach(collection, function(value, index, collection2) {
          result2 = predicate(value, index, collection2);
          return !result2;
        });
        return !!result2;
      }
      function baseSortedIndex(array, value, retHighest) {
        var low = 0, high = array == null ? low : array.length;
        if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
          while (low < high) {
            var mid = low + high >>> 1, computed = array[mid];
            if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return high;
        }
        return baseSortedIndexBy(array, value, identity, retHighest);
      }
      function baseSortedIndexBy(array, value, iteratee2, retHighest) {
        var low = 0, high = array == null ? 0 : array.length;
        if (high === 0) {
          return 0;
        }
        value = iteratee2(value);
        var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
        while (low < high) {
          var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined2, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
          if (valIsNaN) {
            var setLow = retHighest || othIsReflexive;
          } else if (valIsUndefined) {
            setLow = othIsReflexive && (retHighest || othIsDefined);
          } else if (valIsNull) {
            setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
          } else if (valIsSymbol) {
            setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
          } else if (othIsNull || othIsSymbol) {
            setLow = false;
          } else {
            setLow = retHighest ? computed <= value : computed < value;
          }
          if (setLow) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return nativeMin(high, MAX_ARRAY_INDEX);
      }
      function baseSortedUniq(array, iteratee2) {
        var index = -1, length = array.length, resIndex = 0, result2 = [];
        while (++index < length) {
          var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
          if (!index || !eq(computed, seen)) {
            var seen = computed;
            result2[resIndex++] = value === 0 ? 0 : value;
          }
        }
        return result2;
      }
      function baseToNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        return +value;
      }
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result2 = value + "";
        return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
      }
      function baseUniq(array, iteratee2, comparator) {
        var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
        if (comparator) {
          isCommon = false;
          includes2 = arrayIncludesWith;
        } else if (length >= LARGE_ARRAY_SIZE) {
          var set2 = iteratee2 ? null : createSet(array);
          if (set2) {
            return setToArray(set2);
          }
          isCommon = false;
          includes2 = cacheHas;
          seen = new SetCache;
        } else {
          seen = iteratee2 ? [] : result2;
        }
        outer:
          while (++index < length) {
            var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed === computed) {
              var seenIndex = seen.length;
              while (seenIndex--) {
                if (seen[seenIndex] === computed) {
                  continue outer;
                }
              }
              if (iteratee2) {
                seen.push(computed);
              }
              result2.push(value);
            } else if (!includes2(seen, computed, comparator)) {
              if (seen !== result2) {
                seen.push(computed);
              }
              result2.push(value);
            }
          }
        return result2;
      }
      function baseUnset(object, path) {
        path = castPath(path, object);
        object = parent(object, path);
        return object == null || delete object[toKey(last(path))];
      }
      function baseUpdate(object, path, updater, customizer) {
        return baseSet(object, path, updater(baseGet(object, path)), customizer);
      }
      function baseWhile(array, predicate, isDrop, fromRight) {
        var length = array.length, index = fromRight ? length : -1;
        while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
        }
        return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
      }
      function baseWrapperValue(value, actions) {
        var result2 = value;
        if (result2 instanceof LazyWrapper) {
          result2 = result2.value();
        }
        return arrayReduce(actions, function(result3, action) {
          return action.func.apply(action.thisArg, arrayPush([result3], action.args));
        }, result2);
      }
      function baseXor(arrays, iteratee2, comparator) {
        var length = arrays.length;
        if (length < 2) {
          return length ? baseUniq(arrays[0]) : [];
        }
        var index = -1, result2 = Array2(length);
        while (++index < length) {
          var array = arrays[index], othIndex = -1;
          while (++othIndex < length) {
            if (othIndex != index) {
              result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
            }
          }
        }
        return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
      }
      function baseZipObject(props, values2, assignFunc) {
        var index = -1, length = props.length, valsLength = values2.length, result2 = {};
        while (++index < length) {
          var value = index < valsLength ? values2[index] : undefined2;
          assignFunc(result2, props[index], value);
        }
        return result2;
      }
      function castArrayLikeObject(value) {
        return isArrayLikeObject(value) ? value : [];
      }
      function castFunction(value) {
        return typeof value == "function" ? value : identity;
      }
      function castPath(value, object) {
        if (isArray(value)) {
          return value;
        }
        return isKey(value, object) ? [value] : stringToPath(toString(value));
      }
      var castRest = baseRest;
      function castSlice(array, start, end) {
        var length = array.length;
        end = end === undefined2 ? length : end;
        return !start && end >= length ? array : baseSlice(array, start, end);
      }
      var clearTimeout2 = ctxClearTimeout || function(id) {
        return root.clearTimeout(id);
      };
      function cloneBuffer(buffer, isDeep) {
        if (isDeep) {
          return buffer.slice();
        }
        var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
        buffer.copy(result2);
        return result2;
      }
      function cloneArrayBuffer(arrayBuffer) {
        var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
        return result2;
      }
      function cloneDataView(dataView, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
        return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
      }
      function cloneRegExp(regexp) {
        var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
        result2.lastIndex = regexp.lastIndex;
        return result2;
      }
      function cloneSymbol(symbol) {
        return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
      }
      function cloneTypedArray(typedArray, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
      }
      function compareAscending(value, other) {
        if (value !== other) {
          var valIsDefined = value !== undefined2, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
          var othIsDefined = other !== undefined2, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
          if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
            return 1;
          }
          if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
            return -1;
          }
        }
        return 0;
      }
      function compareMultiple(object, other, orders) {
        var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
        while (++index < length) {
          var result2 = compareAscending(objCriteria[index], othCriteria[index]);
          if (result2) {
            if (index >= ordersLength) {
              return result2;
            }
            var order = orders[index];
            return result2 * (order == "desc" ? -1 : 1);
          }
        }
        return object.index - other.index;
      }
      function composeArgs(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
        while (++leftIndex < leftLength) {
          result2[leftIndex] = partials[leftIndex];
        }
        while (++argsIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result2[holders[argsIndex]] = args[argsIndex];
          }
        }
        while (rangeLength--) {
          result2[leftIndex++] = args[argsIndex++];
        }
        return result2;
      }
      function composeArgsRight(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
        while (++argsIndex < rangeLength) {
          result2[argsIndex] = args[argsIndex];
        }
        var offset = argsIndex;
        while (++rightIndex < rightLength) {
          result2[offset + rightIndex] = partials[rightIndex];
        }
        while (++holdersIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result2[offset + holders[holdersIndex]] = args[argsIndex++];
          }
        }
        return result2;
      }
      function copyArray(source, array) {
        var index = -1, length = source.length;
        array || (array = Array2(length));
        while (++index < length) {
          array[index] = source[index];
        }
        return array;
      }
      function copyObject(source, props, object, customizer) {
        var isNew = !object;
        object || (object = {});
        var index = -1, length = props.length;
        while (++index < length) {
          var key = props[index];
          var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined2;
          if (newValue === undefined2) {
            newValue = source[key];
          }
          if (isNew) {
            baseAssignValue(object, key, newValue);
          } else {
            assignValue(object, key, newValue);
          }
        }
        return object;
      }
      function copySymbols(source, object) {
        return copyObject(source, getSymbols(source), object);
      }
      function copySymbolsIn(source, object) {
        return copyObject(source, getSymbolsIn(source), object);
      }
      function createAggregator(setter, initializer) {
        return function(collection, iteratee2) {
          var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
          return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
        };
      }
      function createAssigner(assigner) {
        return baseRest(function(object, sources) {
          var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard = length > 2 ? sources[2] : undefined2;
          customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length < 3 ? undefined2 : customizer;
            length = 1;
          }
          object = Object2(object);
          while (++index < length) {
            var source = sources[index];
            if (source) {
              assigner(object, source, index, customizer);
            }
          }
          return object;
        });
      }
      function createBaseEach(eachFunc, fromRight) {
        return function(collection, iteratee2) {
          if (collection == null) {
            return collection;
          }
          if (!isArrayLike(collection)) {
            return eachFunc(collection, iteratee2);
          }
          var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
          while (fromRight ? index-- : ++index < length) {
            if (iteratee2(iterable[index], index, iterable) === false) {
              break;
            }
          }
          return collection;
        };
      }
      function createBaseFor(fromRight) {
        return function(object, iteratee2, keysFunc) {
          var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index];
            if (iteratee2(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
      function createBind(func, bitmask, thisArg) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
          var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
          return fn.apply(isBind ? thisArg : this, arguments);
        }
        return wrapper;
      }
      function createCaseFirst(methodName) {
        return function(string) {
          string = toString(string);
          var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined2;
          var chr = strSymbols ? strSymbols[0] : string.charAt(0);
          var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
          return chr[methodName]() + trailing;
        };
      }
      function createCompounder(callback) {
        return function(string) {
          return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
        };
      }
      function createCtor(Ctor) {
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return new Ctor;
            case 1:
              return new Ctor(args[0]);
            case 2:
              return new Ctor(args[0], args[1]);
            case 3:
              return new Ctor(args[0], args[1], args[2]);
            case 4:
              return new Ctor(args[0], args[1], args[2], args[3]);
            case 5:
              return new Ctor(args[0], args[1], args[2], args[3], args[4]);
            case 6:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
            case 7:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
          }
          var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
          return isObject(result2) ? result2 : thisBinding;
        };
      }
      function createCurry(func, bitmask, arity) {
        var Ctor = createCtor(func);
        function wrapper() {
          var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
          while (index--) {
            args[index] = arguments[index];
          }
          var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
          length -= holders.length;
          if (length < arity) {
            return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined2, args, holders, undefined2, undefined2, arity - length);
          }
          var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
          return apply(fn, this, args);
        }
        return wrapper;
      }
      function createFind(findIndexFunc) {
        return function(collection, predicate, fromIndex) {
          var iterable = Object2(collection);
          if (!isArrayLike(collection)) {
            var iteratee2 = getIteratee(predicate, 3);
            collection = keys(collection);
            predicate = function(key) {
              return iteratee2(iterable[key], key, iterable);
            };
          }
          var index = findIndexFunc(collection, predicate, fromIndex);
          return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined2;
        };
      }
      function createFlow(fromRight) {
        return flatRest(function(funcs) {
          var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
          if (fromRight) {
            funcs.reverse();
          }
          while (index--) {
            var func = funcs[index];
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            if (prereq && !wrapper && getFuncName(func) == "wrapper") {
              var wrapper = new LodashWrapper([], true);
            }
          }
          index = wrapper ? index : length;
          while (++index < length) {
            func = funcs[index];
            var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
            if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
              wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
            } else {
              wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
            }
          }
          return function() {
            var args = arguments, value = args[0];
            if (wrapper && args.length == 1 && isArray(value)) {
              return wrapper.plant(value).value();
            }
            var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
            while (++index2 < length) {
              result2 = funcs[index2].call(this, result2);
            }
            return result2;
          };
        });
      }
      function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
        var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
        function wrapper() {
          var length = arguments.length, args = Array2(length), index = length;
          while (index--) {
            args[index] = arguments[index];
          }
          if (isCurried) {
            var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
          }
          if (partials) {
            args = composeArgs(args, partials, holders, isCurried);
          }
          if (partialsRight) {
            args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
          }
          length -= holdersCount;
          if (isCurried && length < arity) {
            var newHolders = replaceHolders(args, placeholder);
            return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary2, arity - length);
          }
          var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
          length = args.length;
          if (argPos) {
            args = reorder(args, argPos);
          } else if (isFlip && length > 1) {
            args.reverse();
          }
          if (isAry && ary2 < length) {
            args.length = ary2;
          }
          if (this && this !== root && this instanceof wrapper) {
            fn = Ctor || createCtor(fn);
          }
          return fn.apply(thisBinding, args);
        }
        return wrapper;
      }
      function createInverter(setter, toIteratee) {
        return function(object, iteratee2) {
          return baseInverter(object, setter, toIteratee(iteratee2), {});
        };
      }
      function createMathOperation(operator, defaultValue) {
        return function(value, other) {
          var result2;
          if (value === undefined2 && other === undefined2) {
            return defaultValue;
          }
          if (value !== undefined2) {
            result2 = value;
          }
          if (other !== undefined2) {
            if (result2 === undefined2) {
              return other;
            }
            if (typeof value == "string" || typeof other == "string") {
              value = baseToString(value);
              other = baseToString(other);
            } else {
              value = baseToNumber(value);
              other = baseToNumber(other);
            }
            result2 = operator(value, other);
          }
          return result2;
        };
      }
      function createOver(arrayFunc) {
        return flatRest(function(iteratees) {
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          return baseRest(function(args) {
            var thisArg = this;
            return arrayFunc(iteratees, function(iteratee2) {
              return apply(iteratee2, thisArg, args);
            });
          });
        });
      }
      function createPadding(length, chars) {
        chars = chars === undefined2 ? " " : baseToString(chars);
        var charsLength = chars.length;
        if (charsLength < 2) {
          return charsLength ? baseRepeat(chars, length) : chars;
        }
        var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
        return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
      }
      function createPartial(func, bitmask, thisArg, partials) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
          var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
          while (++leftIndex < leftLength) {
            args[leftIndex] = partials[leftIndex];
          }
          while (argsLength--) {
            args[leftIndex++] = arguments[++argsIndex];
          }
          return apply(fn, isBind ? thisArg : this, args);
        }
        return wrapper;
      }
      function createRange(fromRight) {
        return function(start, end, step) {
          if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
            end = step = undefined2;
          }
          start = toFinite(start);
          if (end === undefined2) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          step = step === undefined2 ? start < end ? 1 : -1 : toFinite(step);
          return baseRange(start, end, step, fromRight);
        };
      }
      function createRelationalOperation(operator) {
        return function(value, other) {
          if (!(typeof value == "string" && typeof other == "string")) {
            value = toNumber(value);
            other = toNumber(other);
          }
          return operator(value, other);
        };
      }
      function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
        var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
        bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
        bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
        if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
          bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
        }
        var newData = [
          func,
          bitmask,
          thisArg,
          newPartials,
          newHolders,
          newPartialsRight,
          newHoldersRight,
          argPos,
          ary2,
          arity
        ];
        var result2 = wrapFunc.apply(undefined2, newData);
        if (isLaziable(func)) {
          setData(result2, newData);
        }
        result2.placeholder = placeholder;
        return setWrapToString(result2, func, bitmask);
      }
      function createRound(methodName) {
        var func = Math2[methodName];
        return function(number, precision) {
          number = toNumber(number);
          precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
          if (precision && nativeIsFinite(number)) {
            var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
            pair = (toString(value) + "e").split("e");
            return +(pair[0] + "e" + (+pair[1] - precision));
          }
          return func(number);
        };
      }
      var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
        return new Set2(values2);
      };
      function createToPairs(keysFunc) {
        return function(object) {
          var tag = getTag(object);
          if (tag == mapTag) {
            return mapToArray(object);
          }
          if (tag == setTag) {
            return setToPairs(object);
          }
          return baseToPairs(object, keysFunc(object));
        };
      }
      function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
        var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
        if (!isBindKey && typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        var length = partials ? partials.length : 0;
        if (!length) {
          bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
          partials = holders = undefined2;
        }
        ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger(ary2), 0);
        arity = arity === undefined2 ? arity : toInteger(arity);
        length -= holders ? holders.length : 0;
        if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
          var partialsRight = partials, holdersRight = holders;
          partials = holders = undefined2;
        }
        var data = isBindKey ? undefined2 : getData(func);
        var newData = [
          func,
          bitmask,
          thisArg,
          partials,
          holders,
          partialsRight,
          holdersRight,
          argPos,
          ary2,
          arity
        ];
        if (data) {
          mergeData(newData, data);
        }
        func = newData[0];
        bitmask = newData[1];
        thisArg = newData[2];
        partials = newData[3];
        holders = newData[4];
        arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
        if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
          bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
        }
        if (!bitmask || bitmask == WRAP_BIND_FLAG) {
          var result2 = createBind(func, bitmask, thisArg);
        } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
          result2 = createCurry(func, bitmask, arity);
        } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
          result2 = createPartial(func, bitmask, thisArg, partials);
        } else {
          result2 = createHybrid.apply(undefined2, newData);
        }
        var setter = data ? baseSetData : setData;
        return setWrapToString(setter(result2, newData), func, bitmask);
      }
      function customDefaultsAssignIn(objValue, srcValue, key, object) {
        if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
          return srcValue;
        }
        return objValue;
      }
      function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
        if (isObject(objValue) && isObject(srcValue)) {
          stack.set(srcValue, objValue);
          baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
          stack["delete"](srcValue);
        }
        return objValue;
      }
      function customOmitClone(value) {
        return isPlainObject(value) ? undefined2 : value;
      }
      function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array;
        }
        var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache : undefined2;
        stack.set(array, other);
        stack.set(other, array);
        while (++index < arrLength) {
          var arrValue = array[index], othValue = other[index];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
          }
          if (compared !== undefined2) {
            if (compared) {
              continue;
            }
            result2 = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result2 = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result2 = false;
            break;
          }
        }
        stack["delete"](array);
        stack["delete"](other);
        return result2;
      }
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object, +other);
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case regexpTag:
          case stringTag:
            return object == other + "";
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object, other);
            var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result2;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object;
        }
        var result2 = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result2 = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result2 && !skipCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && (("constructor" in object) && ("constructor" in other)) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result2 = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result2;
      }
      function flatRest(func) {
        return setToString(overRest(func, undefined2, flatten), func + "");
      }
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
      }
      function getAllKeysIn(object) {
        return baseGetAllKeys(object, keysIn, getSymbolsIn);
      }
      var getData = !metaMap ? noop : function(func) {
        return metaMap.get(func);
      };
      function getFuncName(func) {
        var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
        while (length--) {
          var data = array[length], otherFunc = data.func;
          if (otherFunc == null || otherFunc == func) {
            return data.name;
          }
        }
        return result2;
      }
      function getHolder(func) {
        var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
        return object.placeholder;
      }
      function getIteratee() {
        var result2 = lodash.iteratee || iteratee;
        result2 = result2 === iteratee ? baseIteratee : result2;
        return arguments.length ? result2(arguments[0], arguments[1]) : result2;
      }
      function getMapData(map2, key) {
        var data = map2.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      function getMatchData(object) {
        var result2 = keys(object), length = result2.length;
        while (length--) {
          var key = result2[length], value = object[key];
          result2[length] = [key, value, isStrictComparable(value)];
        }
        return result2;
      }
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : undefined2;
      }
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = undefined2;
          var unmasked = true;
        } catch (e) {
        }
        var result2 = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result2;
      }
      var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
        if (object == null) {
          return [];
        }
        object = Object2(object);
        return arrayFilter(nativeGetSymbols(object), function(symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };
      var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
        var result2 = [];
        while (object) {
          arrayPush(result2, getSymbols(object));
          object = getPrototype(object);
        }
        return result2;
      };
      var getTag = baseGetTag;
      if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2) != setTag || WeakMap2 && getTag(new WeakMap2) != weakMapTag) {
        getTag = function(value) {
          var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined2, ctorString = Ctor ? toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result2;
        };
      }
      function getView(start, end, transforms) {
        var index = -1, length = transforms.length;
        while (++index < length) {
          var data = transforms[index], size2 = data.size;
          switch (data.type) {
            case "drop":
              start += size2;
              break;
            case "dropRight":
              end -= size2;
              break;
            case "take":
              end = nativeMin(end, start + size2);
              break;
            case "takeRight":
              start = nativeMax(start, end - size2);
              break;
          }
        }
        return { start, end };
      }
      function getWrapDetails(source) {
        var match = source.match(reWrapDetails);
        return match ? match[1].split(reSplitDetails) : [];
      }
      function hasPath(object, path, hasFunc) {
        path = castPath(path, object);
        var index = -1, length = path.length, result2 = false;
        while (++index < length) {
          var key = toKey(path[index]);
          if (!(result2 = object != null && hasFunc(object, key))) {
            break;
          }
          object = object[key];
        }
        if (result2 || ++index != length) {
          return result2;
        }
        length = object == null ? 0 : object.length;
        return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
      }
      function initCloneArray(array) {
        var length = array.length, result2 = new array.constructor(length);
        if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
          result2.index = array.index;
          result2.input = array.input;
        }
        return result2;
      }
      function initCloneObject(object) {
        return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
      }
      function initCloneByTag(object, tag, isDeep) {
        var Ctor = object.constructor;
        switch (tag) {
          case arrayBufferTag:
            return cloneArrayBuffer(object);
          case boolTag:
          case dateTag:
            return new Ctor(+object);
          case dataViewTag:
            return cloneDataView(object, isDeep);
          case float32Tag:
          case float64Tag:
          case int8Tag:
          case int16Tag:
          case int32Tag:
          case uint8Tag:
          case uint8ClampedTag:
          case uint16Tag:
          case uint32Tag:
            return cloneTypedArray(object, isDeep);
          case mapTag:
            return new Ctor;
          case numberTag:
          case stringTag:
            return new Ctor(object);
          case regexpTag:
            return cloneRegExp(object);
          case setTag:
            return new Ctor;
          case symbolTag:
            return cloneSymbol(object);
        }
      }
      function insertWrapDetails(source, details) {
        var length = details.length;
        if (!length) {
          return source;
        }
        var lastIndex = length - 1;
        details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
        details = details.join(length > 2 ? ", " : " ");
        return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
      }
      function isFlattenable(value) {
        return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
      }
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      function isIterateeCall(value, index, object) {
        if (!isObject(object)) {
          return false;
        }
        var type = typeof index;
        if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && (index in object)) {
          return eq(object[index], value);
        }
        return false;
      }
      function isKey(value, object) {
        if (isArray(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && (value in Object2(object));
      }
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      function isLaziable(func) {
        var funcName = getFuncName(func), other = lodash[funcName];
        if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
          return false;
        }
        if (func === other) {
          return true;
        }
        var data = getData(other);
        return !!data && func === data[0];
      }
      function isMasked(func) {
        return !!maskSrcKey && (maskSrcKey in func);
      }
      var isMaskable = coreJsData ? isFunction : stubFalse;
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      function isStrictComparable(value) {
        return value === value && !isObject(value);
      }
      function matchesStrictComparable(key, srcValue) {
        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key] === srcValue && (srcValue !== undefined2 || (key in Object2(object)));
        };
      }
      function memoizeCapped(func) {
        var result2 = memoize(func, function(key) {
          if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
          }
          return key;
        });
        var cache = result2.cache;
        return result2;
      }
      function mergeData(data, source) {
        var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
        var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
        if (!(isCommon || isCombo)) {
          return data;
        }
        if (srcBitmask & WRAP_BIND_FLAG) {
          data[2] = source[2];
          newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
        }
        var value = source[3];
        if (value) {
          var partials = data[3];
          data[3] = partials ? composeArgs(partials, value, source[4]) : value;
          data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
        }
        value = source[5];
        if (value) {
          partials = data[5];
          data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
          data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
        }
        value = source[7];
        if (value) {
          data[7] = value;
        }
        if (srcBitmask & WRAP_ARY_FLAG) {
          data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
        }
        if (data[9] == null) {
          data[9] = source[9];
        }
        data[0] = source[0];
        data[1] = newBitmask;
        return data;
      }
      function nativeKeysIn(object) {
        var result2 = [];
        if (object != null) {
          for (var key in Object2(object)) {
            result2.push(key);
          }
        }
        return result2;
      }
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      function overRest(func, start, transform2) {
        start = nativeMax(start === undefined2 ? func.length - 1 : start, 0);
        return function() {
          var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
          while (++index < length) {
            array[index] = args[start + index];
          }
          index = -1;
          var otherArgs = Array2(start + 1);
          while (++index < start) {
            otherArgs[index] = args[index];
          }
          otherArgs[start] = transform2(array);
          return apply(func, this, otherArgs);
        };
      }
      function parent(object, path) {
        return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
      }
      function reorder(array, indexes) {
        var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
        while (length--) {
          var index = indexes[length];
          array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined2;
        }
        return array;
      }
      function safeGet(object, key) {
        if (key === "constructor" && typeof object[key] === "function") {
          return;
        }
        if (key == "__proto__") {
          return;
        }
        return object[key];
      }
      var setData = shortOut(baseSetData);
      var setTimeout2 = ctxSetTimeout || function(func, wait) {
        return root.setTimeout(func, wait);
      };
      var setToString = shortOut(baseSetToString);
      function setWrapToString(wrapper, reference, bitmask) {
        var source = reference + "";
        return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
      }
      function shortOut(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(undefined2, arguments);
        };
      }
      function shuffleSelf(array, size2) {
        var index = -1, length = array.length, lastIndex = length - 1;
        size2 = size2 === undefined2 ? length : size2;
        while (++index < size2) {
          var rand = baseRandom(index, lastIndex), value = array[rand];
          array[rand] = array[index];
          array[index] = value;
        }
        array.length = size2;
        return array;
      }
      var stringToPath = memoizeCapped(function(string) {
        var result2 = [];
        if (string.charCodeAt(0) === 46) {
          result2.push("");
        }
        string.replace(rePropName, function(match, number, quote, subString) {
          result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
        });
        return result2;
      });
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result2 = value + "";
        return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
      }
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      function updateWrapDetails(details, bitmask) {
        arrayEach(wrapFlags, function(pair) {
          var value = "_." + pair[0];
          if (bitmask & pair[1] && !arrayIncludes(details, value)) {
            details.push(value);
          }
        });
        return details.sort();
      }
      function wrapperClone(wrapper) {
        if (wrapper instanceof LazyWrapper) {
          return wrapper.clone();
        }
        var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
        result2.__actions__ = copyArray(wrapper.__actions__);
        result2.__index__ = wrapper.__index__;
        result2.__values__ = wrapper.__values__;
        return result2;
      }
      function chunk(array, size2, guard) {
        if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined2) {
          size2 = 1;
        } else {
          size2 = nativeMax(toInteger(size2), 0);
        }
        var length = array == null ? 0 : array.length;
        if (!length || size2 < 1) {
          return [];
        }
        var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
        while (index < length) {
          result2[resIndex++] = baseSlice(array, index, index += size2);
        }
        return result2;
      }
      function compact(array) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
        while (++index < length) {
          var value = array[index];
          if (value) {
            result2[resIndex++] = value;
          }
        }
        return result2;
      }
      function concat() {
        var length = arguments.length;
        if (!length) {
          return [];
        }
        var args = Array2(length - 1), array = arguments[0], index = length;
        while (index--) {
          args[index - 1] = arguments[index];
        }
        return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
      }
      var difference = baseRest(function(array, values2) {
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
      });
      var differenceBy = baseRest(function(array, values2) {
        var iteratee2 = last(values2);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined2;
        }
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
      });
      var differenceWith = baseRest(function(array, values2) {
        var comparator = last(values2);
        if (isArrayLikeObject(comparator)) {
          comparator = undefined2;
        }
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
      });
      function drop(array, n, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n = guard || n === undefined2 ? 1 : toInteger(n);
        return baseSlice(array, n < 0 ? 0 : n, length);
      }
      function dropRight(array, n, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n = guard || n === undefined2 ? 1 : toInteger(n);
        n = length - n;
        return baseSlice(array, 0, n < 0 ? 0 : n);
      }
      function dropRightWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
      }
      function dropWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
      }
      function fill(array, value, start, end) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
          start = 0;
          end = length;
        }
        return baseFill(array, value, start, end);
      }
      function findIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index < 0) {
          index = nativeMax(length + index, 0);
        }
        return baseFindIndex(array, getIteratee(predicate, 3), index);
      }
      function findLastIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = length - 1;
        if (fromIndex !== undefined2) {
          index = toInteger(fromIndex);
          index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
        }
        return baseFindIndex(array, getIteratee(predicate, 3), index, true);
      }
      function flatten(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, 1) : [];
      }
      function flattenDeep(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, INFINITY) : [];
      }
      function flattenDepth(array, depth) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        depth = depth === undefined2 ? 1 : toInteger(depth);
        return baseFlatten(array, depth);
      }
      function fromPairs(pairs) {
        var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
        while (++index < length) {
          var pair = pairs[index];
          result2[pair[0]] = pair[1];
        }
        return result2;
      }
      function head(array) {
        return array && array.length ? array[0] : undefined2;
      }
      function indexOf(array, value, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index < 0) {
          index = nativeMax(length + index, 0);
        }
        return baseIndexOf(array, value, index);
      }
      function initial(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseSlice(array, 0, -1) : [];
      }
      var intersection = baseRest(function(arrays) {
        var mapped = arrayMap(arrays, castArrayLikeObject);
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
      });
      var intersectionBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
        if (iteratee2 === last(mapped)) {
          iteratee2 = undefined2;
        } else {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
      });
      var intersectionWith = baseRest(function(arrays) {
        var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
        comparator = typeof comparator == "function" ? comparator : undefined2;
        if (comparator) {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
      });
      function join(array, separator) {
        return array == null ? "" : nativeJoin.call(array, separator);
      }
      function last(array) {
        var length = array == null ? 0 : array.length;
        return length ? array[length - 1] : undefined2;
      }
      function lastIndexOf(array, value, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = length;
        if (fromIndex !== undefined2) {
          index = toInteger(fromIndex);
          index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
        }
        return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
      }
      function nth(array, n) {
        return array && array.length ? baseNth(array, toInteger(n)) : undefined2;
      }
      var pull = baseRest(pullAll);
      function pullAll(array, values2) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
      }
      function pullAllBy(array, values2, iteratee2) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
      }
      function pullAllWith(array, values2, comparator) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined2, comparator) : array;
      }
      var pullAt = flatRest(function(array, indexes) {
        var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
        basePullAt(array, arrayMap(indexes, function(index) {
          return isIndex(index, length) ? +index : index;
        }).sort(compareAscending));
        return result2;
      });
      function remove(array, predicate) {
        var result2 = [];
        if (!(array && array.length)) {
          return result2;
        }
        var index = -1, indexes = [], length = array.length;
        predicate = getIteratee(predicate, 3);
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result2.push(value);
            indexes.push(index);
          }
        }
        basePullAt(array, indexes);
        return result2;
      }
      function reverse(array) {
        return array == null ? array : nativeReverse.call(array);
      }
      function slice(array, start, end) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
          start = 0;
          end = length;
        } else {
          start = start == null ? 0 : toInteger(start);
          end = end === undefined2 ? length : toInteger(end);
        }
        return baseSlice(array, start, end);
      }
      function sortedIndex(array, value) {
        return baseSortedIndex(array, value);
      }
      function sortedIndexBy(array, value, iteratee2) {
        return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
      }
      function sortedIndexOf(array, value) {
        var length = array == null ? 0 : array.length;
        if (length) {
          var index = baseSortedIndex(array, value);
          if (index < length && eq(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function sortedLastIndex(array, value) {
        return baseSortedIndex(array, value, true);
      }
      function sortedLastIndexBy(array, value, iteratee2) {
        return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
      }
      function sortedLastIndexOf(array, value) {
        var length = array == null ? 0 : array.length;
        if (length) {
          var index = baseSortedIndex(array, value, true) - 1;
          if (eq(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function sortedUniq(array) {
        return array && array.length ? baseSortedUniq(array) : [];
      }
      function sortedUniqBy(array, iteratee2) {
        return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
      }
      function tail(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseSlice(array, 1, length) : [];
      }
      function take(array, n, guard) {
        if (!(array && array.length)) {
          return [];
        }
        n = guard || n === undefined2 ? 1 : toInteger(n);
        return baseSlice(array, 0, n < 0 ? 0 : n);
      }
      function takeRight(array, n, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n = guard || n === undefined2 ? 1 : toInteger(n);
        n = length - n;
        return baseSlice(array, n < 0 ? 0 : n, length);
      }
      function takeRightWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
      }
      function takeWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
      }
      var union = baseRest(function(arrays) {
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
      });
      var unionBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined2;
        }
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
      });
      var unionWith = baseRest(function(arrays) {
        var comparator = last(arrays);
        comparator = typeof comparator == "function" ? comparator : undefined2;
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
      });
      function uniq(array) {
        return array && array.length ? baseUniq(array) : [];
      }
      function uniqBy(array, iteratee2) {
        return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
      }
      function uniqWith(array, comparator) {
        comparator = typeof comparator == "function" ? comparator : undefined2;
        return array && array.length ? baseUniq(array, undefined2, comparator) : [];
      }
      function unzip(array) {
        if (!(array && array.length)) {
          return [];
        }
        var length = 0;
        array = arrayFilter(array, function(group) {
          if (isArrayLikeObject(group)) {
            length = nativeMax(group.length, length);
            return true;
          }
        });
        return baseTimes(length, function(index) {
          return arrayMap(array, baseProperty(index));
        });
      }
      function unzipWith(array, iteratee2) {
        if (!(array && array.length)) {
          return [];
        }
        var result2 = unzip(array);
        if (iteratee2 == null) {
          return result2;
        }
        return arrayMap(result2, function(group) {
          return apply(iteratee2, undefined2, group);
        });
      }
      var without = baseRest(function(array, values2) {
        return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
      });
      var xor = baseRest(function(arrays) {
        return baseXor(arrayFilter(arrays, isArrayLikeObject));
      });
      var xorBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined2;
        }
        return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
      });
      var xorWith = baseRest(function(arrays) {
        var comparator = last(arrays);
        comparator = typeof comparator == "function" ? comparator : undefined2;
        return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined2, comparator);
      });
      var zip = baseRest(unzip);
      function zipObject(props, values2) {
        return baseZipObject(props || [], values2 || [], assignValue);
      }
      function zipObjectDeep(props, values2) {
        return baseZipObject(props || [], values2 || [], baseSet);
      }
      var zipWith = baseRest(function(arrays) {
        var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined2;
        iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
        return unzipWith(arrays, iteratee2);
      });
      function chain(value) {
        var result2 = lodash(value);
        result2.__chain__ = true;
        return result2;
      }
      function tap(value, interceptor) {
        interceptor(value);
        return value;
      }
      function thru(value, interceptor) {
        return interceptor(value);
      }
      var wrapperAt = flatRest(function(paths) {
        var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
          return baseAt(object, paths);
        };
        if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
          return this.thru(interceptor);
        }
        value = value.slice(start, +start + (length ? 1 : 0));
        value.__actions__.push({
          func: thru,
          args: [interceptor],
          thisArg: undefined2
        });
        return new LodashWrapper(value, this.__chain__).thru(function(array) {
          if (length && !array.length) {
            array.push(undefined2);
          }
          return array;
        });
      });
      function wrapperChain() {
        return chain(this);
      }
      function wrapperCommit() {
        return new LodashWrapper(this.value(), this.__chain__);
      }
      function wrapperNext() {
        if (this.__values__ === undefined2) {
          this.__values__ = toArray(this.value());
        }
        var done = this.__index__ >= this.__values__.length, value = done ? undefined2 : this.__values__[this.__index__++];
        return { done, value };
      }
      function wrapperToIterator() {
        return this;
      }
      function wrapperPlant(value) {
        var result2, parent2 = this;
        while (parent2 instanceof baseLodash) {
          var clone2 = wrapperClone(parent2);
          clone2.__index__ = 0;
          clone2.__values__ = undefined2;
          if (result2) {
            previous.__wrapped__ = clone2;
          } else {
            result2 = clone2;
          }
          var previous = clone2;
          parent2 = parent2.__wrapped__;
        }
        previous.__wrapped__ = value;
        return result2;
      }
      function wrapperReverse() {
        var value = this.__wrapped__;
        if (value instanceof LazyWrapper) {
          var wrapped = value;
          if (this.__actions__.length) {
            wrapped = new LazyWrapper(this);
          }
          wrapped = wrapped.reverse();
          wrapped.__actions__.push({
            func: thru,
            args: [reverse],
            thisArg: undefined2
          });
          return new LodashWrapper(wrapped, this.__chain__);
        }
        return this.thru(reverse);
      }
      function wrapperValue() {
        return baseWrapperValue(this.__wrapped__, this.__actions__);
      }
      var countBy = createAggregator(function(result2, value, key) {
        if (hasOwnProperty.call(result2, key)) {
          ++result2[key];
        } else {
          baseAssignValue(result2, key, 1);
        }
      });
      function every(collection, predicate, guard) {
        var func = isArray(collection) ? arrayEvery : baseEvery;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined2;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      function filter(collection, predicate) {
        var func = isArray(collection) ? arrayFilter : baseFilter;
        return func(collection, getIteratee(predicate, 3));
      }
      var find = createFind(findIndex);
      var findLast = createFind(findLastIndex);
      function flatMap(collection, iteratee2) {
        return baseFlatten(map(collection, iteratee2), 1);
      }
      function flatMapDeep(collection, iteratee2) {
        return baseFlatten(map(collection, iteratee2), INFINITY);
      }
      function flatMapDepth(collection, iteratee2, depth) {
        depth = depth === undefined2 ? 1 : toInteger(depth);
        return baseFlatten(map(collection, iteratee2), depth);
      }
      function forEach(collection, iteratee2) {
        var func = isArray(collection) ? arrayEach : baseEach;
        return func(collection, getIteratee(iteratee2, 3));
      }
      function forEachRight(collection, iteratee2) {
        var func = isArray(collection) ? arrayEachRight : baseEachRight;
        return func(collection, getIteratee(iteratee2, 3));
      }
      var groupBy = createAggregator(function(result2, value, key) {
        if (hasOwnProperty.call(result2, key)) {
          result2[key].push(value);
        } else {
          baseAssignValue(result2, key, [value]);
        }
      });
      function includes(collection, value, fromIndex, guard) {
        collection = isArrayLike(collection) ? collection : values(collection);
        fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
        var length = collection.length;
        if (fromIndex < 0) {
          fromIndex = nativeMax(length + fromIndex, 0);
        }
        return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
      }
      var invokeMap = baseRest(function(collection, path, args) {
        var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
        baseEach(collection, function(value) {
          result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
        });
        return result2;
      });
      var keyBy = createAggregator(function(result2, value, key) {
        baseAssignValue(result2, key, value);
      });
      function map(collection, iteratee2) {
        var func = isArray(collection) ? arrayMap : baseMap;
        return func(collection, getIteratee(iteratee2, 3));
      }
      function orderBy(collection, iteratees, orders, guard) {
        if (collection == null) {
          return [];
        }
        if (!isArray(iteratees)) {
          iteratees = iteratees == null ? [] : [iteratees];
        }
        orders = guard ? undefined2 : orders;
        if (!isArray(orders)) {
          orders = orders == null ? [] : [orders];
        }
        return baseOrderBy(collection, iteratees, orders);
      }
      var partition = createAggregator(function(result2, value, key) {
        result2[key ? 0 : 1].push(value);
      }, function() {
        return [[], []];
      });
      function reduce(collection, iteratee2, accumulator) {
        var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
      }
      function reduceRight(collection, iteratee2, accumulator) {
        var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
      }
      function reject(collection, predicate) {
        var func = isArray(collection) ? arrayFilter : baseFilter;
        return func(collection, negate(getIteratee(predicate, 3)));
      }
      function sample(collection) {
        var func = isArray(collection) ? arraySample : baseSample;
        return func(collection);
      }
      function sampleSize(collection, n, guard) {
        if (guard ? isIterateeCall(collection, n, guard) : n === undefined2) {
          n = 1;
        } else {
          n = toInteger(n);
        }
        var func = isArray(collection) ? arraySampleSize : baseSampleSize;
        return func(collection, n);
      }
      function shuffle(collection) {
        var func = isArray(collection) ? arrayShuffle : baseShuffle;
        return func(collection);
      }
      function size(collection) {
        if (collection == null) {
          return 0;
        }
        if (isArrayLike(collection)) {
          return isString(collection) ? stringSize(collection) : collection.length;
        }
        var tag = getTag(collection);
        if (tag == mapTag || tag == setTag) {
          return collection.size;
        }
        return baseKeys(collection).length;
      }
      function some(collection, predicate, guard) {
        var func = isArray(collection) ? arraySome : baseSome;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined2;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      var sortBy = baseRest(function(collection, iteratees) {
        if (collection == null) {
          return [];
        }
        var length = iteratees.length;
        if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
          iteratees = [];
        } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
          iteratees = [iteratees[0]];
        }
        return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
      });
      var now = ctxNow || function() {
        return root.Date.now();
      };
      function after(n, func) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        n = toInteger(n);
        return function() {
          if (--n < 1) {
            return func.apply(this, arguments);
          }
        };
      }
      function ary(func, n, guard) {
        n = guard ? undefined2 : n;
        n = func && n == null ? func.length : n;
        return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n);
      }
      function before(n, func) {
        var result2;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        n = toInteger(n);
        return function() {
          if (--n > 0) {
            result2 = func.apply(this, arguments);
          }
          if (n <= 1) {
            func = undefined2;
          }
          return result2;
        };
      }
      var bind = baseRest(function(func, thisArg, partials) {
        var bitmask = WRAP_BIND_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bind));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(func, bitmask, thisArg, partials, holders);
      });
      var bindKey = baseRest(function(object, key, partials) {
        var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bindKey));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(key, bitmask, object, partials, holders);
      });
      function curry(func, arity, guard) {
        arity = guard ? undefined2 : arity;
        var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
        result2.placeholder = curry.placeholder;
        return result2;
      }
      function curryRight(func, arity, guard) {
        arity = guard ? undefined2 : arity;
        var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
        result2.placeholder = curryRight.placeholder;
        return result2;
      }
      function debounce(func, wait, options) {
        var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = ("maxWait" in options);
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = ("trailing" in options) ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = undefined2;
          lastInvokeTime = time;
          result2 = func.apply(thisArg, args);
          return result2;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout2(timerExpired, wait);
          return leading ? invokeFunc(time) : result2;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
          return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === undefined2 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout2(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = undefined2;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = undefined2;
          return result2;
        }
        function cancel() {
          if (timerId !== undefined2) {
            clearTimeout2(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = undefined2;
        }
        function flush() {
          return timerId === undefined2 ? result2 : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === undefined2) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              clearTimeout2(timerId);
              timerId = setTimeout2(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === undefined2) {
            timerId = setTimeout2(timerExpired, wait);
          }
          return result2;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      var defer = baseRest(function(func, args) {
        return baseDelay(func, 1, args);
      });
      var delay = baseRest(function(func, wait, args) {
        return baseDelay(func, toNumber(wait) || 0, args);
      });
      function flip(func) {
        return createWrap(func, WRAP_FLIP_FLAG);
      }
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result2 = func.apply(this, args);
          memoized.cache = cache.set(key, result2) || cache;
          return result2;
        };
        memoized.cache = new (memoize.Cache || MapCache);
        return memoized;
      }
      memoize.Cache = MapCache;
      function negate(predicate) {
        if (typeof predicate != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return !predicate.call(this);
            case 1:
              return !predicate.call(this, args[0]);
            case 2:
              return !predicate.call(this, args[0], args[1]);
            case 3:
              return !predicate.call(this, args[0], args[1], args[2]);
          }
          return !predicate.apply(this, args);
        };
      }
      function once(func) {
        return before(2, func);
      }
      var overArgs = castRest(function(func, transforms) {
        transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
        var funcsLength = transforms.length;
        return baseRest(function(args) {
          var index = -1, length = nativeMin(args.length, funcsLength);
          while (++index < length) {
            args[index] = transforms[index].call(this, args[index]);
          }
          return apply(func, this, args);
        });
      });
      var partial = baseRest(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partial));
        return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
      });
      var partialRight = baseRest(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partialRight));
        return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
      });
      var rearg = flatRest(function(func, indexes) {
        return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
      });
      function rest(func, start) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        start = start === undefined2 ? start : toInteger(start);
        return baseRest(func, start);
      }
      function spread(func, start) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        start = start == null ? 0 : nativeMax(toInteger(start), 0);
        return baseRest(function(args) {
          var array = args[start], otherArgs = castSlice(args, 0, start);
          if (array) {
            arrayPush(otherArgs, array);
          }
          return apply(func, this, otherArgs);
        });
      }
      function throttle(func, wait, options) {
        var leading = true, trailing = true;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        if (isObject(options)) {
          leading = ("leading" in options) ? !!options.leading : leading;
          trailing = ("trailing" in options) ? !!options.trailing : trailing;
        }
        return debounce(func, wait, {
          leading,
          maxWait: wait,
          trailing
        });
      }
      function unary(func) {
        return ary(func, 1);
      }
      function wrap(value, wrapper) {
        return partial(castFunction(wrapper), value);
      }
      function castArray() {
        if (!arguments.length) {
          return [];
        }
        var value = arguments[0];
        return isArray(value) ? value : [value];
      }
      function clone(value) {
        return baseClone(value, CLONE_SYMBOLS_FLAG);
      }
      function cloneWith(value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined2;
        return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
      }
      function cloneDeep(value) {
        return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
      }
      function cloneDeepWith(value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined2;
        return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
      }
      function conformsTo(object, source) {
        return source == null || baseConformsTo(object, source, keys(source));
      }
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      var gt2 = createRelationalOperation(baseGt);
      var gte = createRelationalOperation(function(value, other) {
        return value >= other;
      });
      var isArguments = baseIsArguments(function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      var isArray = Array2.isArray;
      var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      function isArrayLikeObject(value) {
        return isObjectLike(value) && isArrayLike(value);
      }
      function isBoolean(value) {
        return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
      }
      var isBuffer = nativeIsBuffer || stubFalse;
      var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
      function isElement(value) {
        return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
      }
      function isEmpty(value) {
        if (value == null) {
          return true;
        }
        if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
          return !value.length;
        }
        var tag = getTag(value);
        if (tag == mapTag || tag == setTag) {
          return !value.size;
        }
        if (isPrototype(value)) {
          return !baseKeys(value).length;
        }
        for (var key in value) {
          if (hasOwnProperty.call(value, key)) {
            return false;
          }
        }
        return true;
      }
      function isEqual(value, other) {
        return baseIsEqual(value, other);
      }
      function isEqualWith(value, other, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined2;
        var result2 = customizer ? customizer(value, other) : undefined2;
        return result2 === undefined2 ? baseIsEqual(value, other, undefined2, customizer) : !!result2;
      }
      function isError(value) {
        if (!isObjectLike(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
      }
      function isFinite2(value) {
        return typeof value == "number" && nativeIsFinite(value);
      }
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      function isInteger(value) {
        return typeof value == "number" && value == toInteger(value);
      }
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
      function isMatch(object, source) {
        return object === source || baseIsMatch(object, source, getMatchData(source));
      }
      function isMatchWith(object, source, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined2;
        return baseIsMatch(object, source, getMatchData(source), customizer);
      }
      function isNaN2(value) {
        return isNumber(value) && value != +value;
      }
      function isNative(value) {
        if (isMaskable(value)) {
          throw new Error2(CORE_ERROR_TEXT);
        }
        return baseIsNative(value);
      }
      function isNull(value) {
        return value === null;
      }
      function isNil(value) {
        return value == null;
      }
      function isNumber(value) {
        return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
      }
      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
      function isSafeInteger(value) {
        return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
      }
      var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
      function isString(value) {
        return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
      }
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      function isUndefined(value) {
        return value === undefined2;
      }
      function isWeakMap(value) {
        return isObjectLike(value) && getTag(value) == weakMapTag;
      }
      function isWeakSet(value) {
        return isObjectLike(value) && baseGetTag(value) == weakSetTag;
      }
      var lt2 = createRelationalOperation(baseLt);
      var lte = createRelationalOperation(function(value, other) {
        return value <= other;
      });
      function toArray(value) {
        if (!value) {
          return [];
        }
        if (isArrayLike(value)) {
          return isString(value) ? stringToArray(value) : copyArray(value);
        }
        if (symIterator && value[symIterator]) {
          return iteratorToArray(value[symIterator]());
        }
        var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
        return func(value);
      }
      function toFinite(value) {
        if (!value) {
          return value === 0 ? value : 0;
        }
        value = toNumber(value);
        if (value === INFINITY || value === -INFINITY) {
          var sign = value < 0 ? -1 : 1;
          return sign * MAX_INTEGER;
        }
        return value === value ? value : 0;
      }
      function toInteger(value) {
        var result2 = toFinite(value), remainder = result2 % 1;
        return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
      }
      function toLength(value) {
        return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
      }
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim(value);
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      function toPlainObject(value) {
        return copyObject(value, keysIn(value));
      }
      function toSafeInteger(value) {
        return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
      }
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      var assign = createAssigner(function(object, source) {
        if (isPrototype(source) || isArrayLike(source)) {
          copyObject(source, keys(source), object);
          return;
        }
        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            assignValue(object, key, source[key]);
          }
        }
      });
      var assignIn = createAssigner(function(object, source) {
        copyObject(source, keysIn(source), object);
      });
      var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
        copyObject(source, keysIn(source), object, customizer);
      });
      var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
        copyObject(source, keys(source), object, customizer);
      });
      var at = flatRest(baseAt);
      function create(prototype, properties) {
        var result2 = baseCreate(prototype);
        return properties == null ? result2 : baseAssign(result2, properties);
      }
      var defaults = baseRest(function(object, sources) {
        object = Object2(object);
        var index = -1;
        var length = sources.length;
        var guard = length > 2 ? sources[2] : undefined2;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          length = 1;
        }
        while (++index < length) {
          var source = sources[index];
          var props = keysIn(source);
          var propsIndex = -1;
          var propsLength = props.length;
          while (++propsIndex < propsLength) {
            var key = props[propsIndex];
            var value = object[key];
            if (value === undefined2 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
              object[key] = source[key];
            }
          }
        }
        return object;
      });
      var defaultsDeep = baseRest(function(args) {
        args.push(undefined2, customDefaultsMerge);
        return apply(mergeWith, undefined2, args);
      });
      function findKey(object, predicate) {
        return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
      }
      function findLastKey(object, predicate) {
        return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
      }
      function forIn(object, iteratee2) {
        return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
      }
      function forInRight(object, iteratee2) {
        return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
      }
      function forOwn(object, iteratee2) {
        return object && baseForOwn(object, getIteratee(iteratee2, 3));
      }
      function forOwnRight(object, iteratee2) {
        return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
      }
      function functions(object) {
        return object == null ? [] : baseFunctions(object, keys(object));
      }
      function functionsIn(object) {
        return object == null ? [] : baseFunctions(object, keysIn(object));
      }
      function get(object, path, defaultValue) {
        var result2 = object == null ? undefined2 : baseGet(object, path);
        return result2 === undefined2 ? defaultValue : result2;
      }
      function has(object, path) {
        return object != null && hasPath(object, path, baseHas);
      }
      function hasIn(object, path) {
        return object != null && hasPath(object, path, baseHasIn);
      }
      var invert = createInverter(function(result2, value, key) {
        if (value != null && typeof value.toString != "function") {
          value = nativeObjectToString.call(value);
        }
        result2[value] = key;
      }, constant(identity));
      var invertBy = createInverter(function(result2, value, key) {
        if (value != null && typeof value.toString != "function") {
          value = nativeObjectToString.call(value);
        }
        if (hasOwnProperty.call(result2, value)) {
          result2[value].push(key);
        } else {
          result2[value] = [key];
        }
      }, getIteratee);
      var invoke = baseRest(baseInvoke);
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }
      function mapKeys(object, iteratee2) {
        var result2 = {};
        iteratee2 = getIteratee(iteratee2, 3);
        baseForOwn(object, function(value, key, object2) {
          baseAssignValue(result2, iteratee2(value, key, object2), value);
        });
        return result2;
      }
      function mapValues(object, iteratee2) {
        var result2 = {};
        iteratee2 = getIteratee(iteratee2, 3);
        baseForOwn(object, function(value, key, object2) {
          baseAssignValue(result2, key, iteratee2(value, key, object2));
        });
        return result2;
      }
      var merge = createAssigner(function(object, source, srcIndex) {
        baseMerge(object, source, srcIndex);
      });
      var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
        baseMerge(object, source, srcIndex, customizer);
      });
      var omit = flatRest(function(object, paths) {
        var result2 = {};
        if (object == null) {
          return result2;
        }
        var isDeep = false;
        paths = arrayMap(paths, function(path) {
          path = castPath(path, object);
          isDeep || (isDeep = path.length > 1);
          return path;
        });
        copyObject(object, getAllKeysIn(object), result2);
        if (isDeep) {
          result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
        }
        var length = paths.length;
        while (length--) {
          baseUnset(result2, paths[length]);
        }
        return result2;
      });
      function omitBy(object, predicate) {
        return pickBy(object, negate(getIteratee(predicate)));
      }
      var pick = flatRest(function(object, paths) {
        return object == null ? {} : basePick(object, paths);
      });
      function pickBy(object, predicate) {
        if (object == null) {
          return {};
        }
        var props = arrayMap(getAllKeysIn(object), function(prop) {
          return [prop];
        });
        predicate = getIteratee(predicate);
        return basePickBy(object, props, function(value, path) {
          return predicate(value, path[0]);
        });
      }
      function result(object, path, defaultValue) {
        path = castPath(path, object);
        var index = -1, length = path.length;
        if (!length) {
          length = 1;
          object = undefined2;
        }
        while (++index < length) {
          var value = object == null ? undefined2 : object[toKey(path[index])];
          if (value === undefined2) {
            index = length;
            value = defaultValue;
          }
          object = isFunction(value) ? value.call(object) : value;
        }
        return object;
      }
      function set(object, path, value) {
        return object == null ? object : baseSet(object, path, value);
      }
      function setWith(object, path, value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined2;
        return object == null ? object : baseSet(object, path, value, customizer);
      }
      var toPairs = createToPairs(keys);
      var toPairsIn = createToPairs(keysIn);
      function transform(object, iteratee2, accumulator) {
        var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
        iteratee2 = getIteratee(iteratee2, 4);
        if (accumulator == null) {
          var Ctor = object && object.constructor;
          if (isArrLike) {
            accumulator = isArr ? new Ctor : [];
          } else if (isObject(object)) {
            accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
          } else {
            accumulator = {};
          }
        }
        (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
          return iteratee2(accumulator, value, index, object2);
        });
        return accumulator;
      }
      function unset(object, path) {
        return object == null ? true : baseUnset(object, path);
      }
      function update(object, path, updater) {
        return object == null ? object : baseUpdate(object, path, castFunction(updater));
      }
      function updateWith(object, path, updater, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined2;
        return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
      }
      function values(object) {
        return object == null ? [] : baseValues(object, keys(object));
      }
      function valuesIn(object) {
        return object == null ? [] : baseValues(object, keysIn(object));
      }
      function clamp(number, lower, upper) {
        if (upper === undefined2) {
          upper = lower;
          lower = undefined2;
        }
        if (upper !== undefined2) {
          upper = toNumber(upper);
          upper = upper === upper ? upper : 0;
        }
        if (lower !== undefined2) {
          lower = toNumber(lower);
          lower = lower === lower ? lower : 0;
        }
        return baseClamp(toNumber(number), lower, upper);
      }
      function inRange(number, start, end) {
        start = toFinite(start);
        if (end === undefined2) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        number = toNumber(number);
        return baseInRange(number, start, end);
      }
      function random(lower, upper, floating) {
        if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
          upper = floating = undefined2;
        }
        if (floating === undefined2) {
          if (typeof upper == "boolean") {
            floating = upper;
            upper = undefined2;
          } else if (typeof lower == "boolean") {
            floating = lower;
            lower = undefined2;
          }
        }
        if (lower === undefined2 && upper === undefined2) {
          lower = 0;
          upper = 1;
        } else {
          lower = toFinite(lower);
          if (upper === undefined2) {
            upper = lower;
            lower = 0;
          } else {
            upper = toFinite(upper);
          }
        }
        if (lower > upper) {
          var temp = lower;
          lower = upper;
          upper = temp;
        }
        if (floating || lower % 1 || upper % 1) {
          var rand = nativeRandom();
          return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
        }
        return baseRandom(lower, upper);
      }
      var camelCase = createCompounder(function(result2, word, index) {
        word = word.toLowerCase();
        return result2 + (index ? capitalize(word) : word);
      });
      function capitalize(string) {
        return upperFirst(toString(string).toLowerCase());
      }
      function deburr(string) {
        string = toString(string);
        return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
      }
      function endsWith(string, target, position) {
        string = toString(string);
        target = baseToString(target);
        var length = string.length;
        position = position === undefined2 ? length : baseClamp(toInteger(position), 0, length);
        var end = position;
        position -= target.length;
        return position >= 0 && string.slice(position, end) == target;
      }
      function escape(string) {
        string = toString(string);
        return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
      }
      function escapeRegExp(string) {
        string = toString(string);
        return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
      }
      var kebabCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? "-" : "") + word.toLowerCase();
      });
      var lowerCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? " " : "") + word.toLowerCase();
      });
      var lowerFirst = createCaseFirst("toLowerCase");
      function pad(string, length, chars) {
        string = toString(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        if (!length || strLength >= length) {
          return string;
        }
        var mid = (length - strLength) / 2;
        return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
      }
      function padEnd(string, length, chars) {
        string = toString(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
      }
      function padStart(string, length, chars) {
        string = toString(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
      }
      function parseInt2(string, radix, guard) {
        if (guard || radix == null) {
          radix = 0;
        } else if (radix) {
          radix = +radix;
        }
        return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
      }
      function repeat(string, n, guard) {
        if (guard ? isIterateeCall(string, n, guard) : n === undefined2) {
          n = 1;
        } else {
          n = toInteger(n);
        }
        return baseRepeat(toString(string), n);
      }
      function replace() {
        var args = arguments, string = toString(args[0]);
        return args.length < 3 ? string : string.replace(args[1], args[2]);
      }
      var snakeCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? "_" : "") + word.toLowerCase();
      });
      function split(string, separator, limit) {
        if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
          separator = limit = undefined2;
        }
        limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
        if (!limit) {
          return [];
        }
        string = toString(string);
        if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
          separator = baseToString(separator);
          if (!separator && hasUnicode(string)) {
            return castSlice(stringToArray(string), 0, limit);
          }
        }
        return string.split(separator, limit);
      }
      var startCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? " " : "") + upperFirst(word);
      });
      function startsWith(string, target, position) {
        string = toString(string);
        position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
        target = baseToString(target);
        return string.slice(position, position + target.length) == target;
      }
      function template(string, options, guard) {
        var settings = lodash.templateSettings;
        if (guard && isIterateeCall(string, options, guard)) {
          options = undefined2;
        }
        string = toString(string);
        options = assignInWith({}, options, settings, customDefaultsAssignIn);
        var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
        var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
        var reDelimiters = RegExp2((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g");
        var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
        string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
          interpolateValue || (interpolateValue = esTemplateValue);
          source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
          if (escapeValue) {
            isEscaping = true;
            source += "' +\n__e(" + escapeValue + ") +\n'";
          }
          if (evaluateValue) {
            isEvaluating = true;
            source += "';\n" + evaluateValue + ";\n__p += '";
          }
          if (interpolateValue) {
            source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
          }
          index = offset + match.length;
          return match;
        });
        source += "';\n";
        var variable = hasOwnProperty.call(options, "variable") && options.variable;
        if (!variable) {
          source = "with (obj) {\n" + source + "\n}\n";
        } else if (reForbiddenIdentifierChars.test(variable)) {
          throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
        }
        source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
        source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
        var result2 = attempt(function() {
          return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
        });
        result2.source = source;
        if (isError(result2)) {
          throw result2;
        }
        return result2;
      }
      function toLower(value) {
        return toString(value).toLowerCase();
      }
      function toUpper(value) {
        return toString(value).toUpperCase();
      }
      function trim(string, chars, guard) {
        string = toString(string);
        if (string && (guard || chars === undefined2)) {
          return baseTrim(string);
        }
        if (!string || !(chars = baseToString(chars))) {
          return string;
        }
        var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
        return castSlice(strSymbols, start, end).join("");
      }
      function trimEnd(string, chars, guard) {
        string = toString(string);
        if (string && (guard || chars === undefined2)) {
          return string.slice(0, trimmedEndIndex(string) + 1);
        }
        if (!string || !(chars = baseToString(chars))) {
          return string;
        }
        var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
        return castSlice(strSymbols, 0, end).join("");
      }
      function trimStart(string, chars, guard) {
        string = toString(string);
        if (string && (guard || chars === undefined2)) {
          return string.replace(reTrimStart, "");
        }
        if (!string || !(chars = baseToString(chars))) {
          return string;
        }
        var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
        return castSlice(strSymbols, start).join("");
      }
      function truncate(string, options) {
        var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
        if (isObject(options)) {
          var separator = "separator" in options ? options.separator : separator;
          length = ("length" in options) ? toInteger(options.length) : length;
          omission = ("omission" in options) ? baseToString(options.omission) : omission;
        }
        string = toString(string);
        var strLength = string.length;
        if (hasUnicode(string)) {
          var strSymbols = stringToArray(string);
          strLength = strSymbols.length;
        }
        if (length >= strLength) {
          return string;
        }
        var end = length - stringSize(omission);
        if (end < 1) {
          return omission;
        }
        var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
        if (separator === undefined2) {
          return result2 + omission;
        }
        if (strSymbols) {
          end += result2.length - end;
        }
        if (isRegExp(separator)) {
          if (string.slice(end).search(separator)) {
            var match, substring = result2;
            if (!separator.global) {
              separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
            }
            separator.lastIndex = 0;
            while (match = separator.exec(substring)) {
              var newEnd = match.index;
            }
            result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
          }
        } else if (string.indexOf(baseToString(separator), end) != end) {
          var index = result2.lastIndexOf(separator);
          if (index > -1) {
            result2 = result2.slice(0, index);
          }
        }
        return result2 + omission;
      }
      function unescape(string) {
        string = toString(string);
        return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
      }
      var upperCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? " " : "") + word.toUpperCase();
      });
      var upperFirst = createCaseFirst("toUpperCase");
      function words(string, pattern, guard) {
        string = toString(string);
        pattern = guard ? undefined2 : pattern;
        if (pattern === undefined2) {
          return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
        }
        return string.match(pattern) || [];
      }
      var attempt = baseRest(function(func, args) {
        try {
          return apply(func, undefined2, args);
        } catch (e) {
          return isError(e) ? e : new Error2(e);
        }
      });
      var bindAll = flatRest(function(object, methodNames) {
        arrayEach(methodNames, function(key) {
          key = toKey(key);
          baseAssignValue(object, key, bind(object[key], object));
        });
        return object;
      });
      function cond(pairs) {
        var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
        pairs = !length ? [] : arrayMap(pairs, function(pair) {
          if (typeof pair[1] != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return [toIteratee(pair[0]), pair[1]];
        });
        return baseRest(function(args) {
          var index = -1;
          while (++index < length) {
            var pair = pairs[index];
            if (apply(pair[0], this, args)) {
              return apply(pair[1], this, args);
            }
          }
        });
      }
      function conforms(source) {
        return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
      }
      function constant(value) {
        return function() {
          return value;
        };
      }
      function defaultTo(value, defaultValue) {
        return value == null || value !== value ? defaultValue : value;
      }
      var flow = createFlow();
      var flowRight = createFlow(true);
      function identity(value) {
        return value;
      }
      function iteratee(func) {
        return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
      }
      function matches(source) {
        return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
      }
      function matchesProperty(path, srcValue) {
        return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
      }
      var method = baseRest(function(path, args) {
        return function(object) {
          return baseInvoke(object, path, args);
        };
      });
      var methodOf = baseRest(function(object, args) {
        return function(path) {
          return baseInvoke(object, path, args);
        };
      });
      function mixin(object, source, options) {
        var props = keys(source), methodNames = baseFunctions(source, props);
        if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
          options = source;
          source = object;
          object = this;
          methodNames = baseFunctions(source, keys(source));
        }
        var chain2 = !(isObject(options) && ("chain" in options)) || !!options.chain, isFunc = isFunction(object);
        arrayEach(methodNames, function(methodName) {
          var func = source[methodName];
          object[methodName] = func;
          if (isFunc) {
            object.prototype[methodName] = function() {
              var chainAll = this.__chain__;
              if (chain2 || chainAll) {
                var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                actions.push({ func, args: arguments, thisArg: object });
                result2.__chain__ = chainAll;
                return result2;
              }
              return func.apply(object, arrayPush([this.value()], arguments));
            };
          }
        });
        return object;
      }
      function noConflict() {
        if (root._ === this) {
          root._ = oldDash;
        }
        return this;
      }
      function noop() {
      }
      function nthArg(n) {
        n = toInteger(n);
        return baseRest(function(args) {
          return baseNth(args, n);
        });
      }
      var over = createOver(arrayMap);
      var overEvery = createOver(arrayEvery);
      var overSome = createOver(arraySome);
      function property(path) {
        return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
      }
      function propertyOf(object) {
        return function(path) {
          return object == null ? undefined2 : baseGet(object, path);
        };
      }
      var range = createRange();
      var rangeRight = createRange(true);
      function stubArray() {
        return [];
      }
      function stubFalse() {
        return false;
      }
      function stubObject() {
        return {};
      }
      function stubString() {
        return "";
      }
      function stubTrue() {
        return true;
      }
      function times(n, iteratee2) {
        n = toInteger(n);
        if (n < 1 || n > MAX_SAFE_INTEGER) {
          return [];
        }
        var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
        iteratee2 = getIteratee(iteratee2);
        n -= MAX_ARRAY_LENGTH;
        var result2 = baseTimes(length, iteratee2);
        while (++index < n) {
          iteratee2(index);
        }
        return result2;
      }
      function toPath(value) {
        if (isArray(value)) {
          return arrayMap(value, toKey);
        }
        return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
      }
      function uniqueId(prefix) {
        var id = ++idCounter;
        return toString(prefix) + id;
      }
      var add = createMathOperation(function(augend, addend) {
        return augend + addend;
      }, 0);
      var ceil = createRound("ceil");
      var divide = createMathOperation(function(dividend, divisor) {
        return dividend / divisor;
      }, 1);
      var floor = createRound("floor");
      function max(array) {
        return array && array.length ? baseExtremum(array, identity, baseGt) : undefined2;
      }
      function maxBy(array, iteratee2) {
        return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined2;
      }
      function mean(array) {
        return baseMean(array, identity);
      }
      function meanBy(array, iteratee2) {
        return baseMean(array, getIteratee(iteratee2, 2));
      }
      function min(array) {
        return array && array.length ? baseExtremum(array, identity, baseLt) : undefined2;
      }
      function minBy(array, iteratee2) {
        return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined2;
      }
      var multiply = createMathOperation(function(multiplier, multiplicand) {
        return multiplier * multiplicand;
      }, 1);
      var round = createRound("round");
      var subtract = createMathOperation(function(minuend, subtrahend) {
        return minuend - subtrahend;
      }, 0);
      function sum(array) {
        return array && array.length ? baseSum(array, identity) : 0;
      }
      function sumBy(array, iteratee2) {
        return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
      }
      lodash.after = after;
      lodash.ary = ary;
      lodash.assign = assign;
      lodash.assignIn = assignIn;
      lodash.assignInWith = assignInWith;
      lodash.assignWith = assignWith;
      lodash.at = at;
      lodash.before = before;
      lodash.bind = bind;
      lodash.bindAll = bindAll;
      lodash.bindKey = bindKey;
      lodash.castArray = castArray;
      lodash.chain = chain;
      lodash.chunk = chunk;
      lodash.compact = compact;
      lodash.concat = concat;
      lodash.cond = cond;
      lodash.conforms = conforms;
      lodash.constant = constant;
      lodash.countBy = countBy;
      lodash.create = create;
      lodash.curry = curry;
      lodash.curryRight = curryRight;
      lodash.debounce = debounce;
      lodash.defaults = defaults;
      lodash.defaultsDeep = defaultsDeep;
      lodash.defer = defer;
      lodash.delay = delay;
      lodash.difference = difference;
      lodash.differenceBy = differenceBy;
      lodash.differenceWith = differenceWith;
      lodash.drop = drop;
      lodash.dropRight = dropRight;
      lodash.dropRightWhile = dropRightWhile;
      lodash.dropWhile = dropWhile;
      lodash.fill = fill;
      lodash.filter = filter;
      lodash.flatMap = flatMap;
      lodash.flatMapDeep = flatMapDeep;
      lodash.flatMapDepth = flatMapDepth;
      lodash.flatten = flatten;
      lodash.flattenDeep = flattenDeep;
      lodash.flattenDepth = flattenDepth;
      lodash.flip = flip;
      lodash.flow = flow;
      lodash.flowRight = flowRight;
      lodash.fromPairs = fromPairs;
      lodash.functions = functions;
      lodash.functionsIn = functionsIn;
      lodash.groupBy = groupBy;
      lodash.initial = initial;
      lodash.intersection = intersection;
      lodash.intersectionBy = intersectionBy;
      lodash.intersectionWith = intersectionWith;
      lodash.invert = invert;
      lodash.invertBy = invertBy;
      lodash.invokeMap = invokeMap;
      lodash.iteratee = iteratee;
      lodash.keyBy = keyBy;
      lodash.keys = keys;
      lodash.keysIn = keysIn;
      lodash.map = map;
      lodash.mapKeys = mapKeys;
      lodash.mapValues = mapValues;
      lodash.matches = matches;
      lodash.matchesProperty = matchesProperty;
      lodash.memoize = memoize;
      lodash.merge = merge;
      lodash.mergeWith = mergeWith;
      lodash.method = method;
      lodash.methodOf = methodOf;
      lodash.mixin = mixin;
      lodash.negate = negate;
      lodash.nthArg = nthArg;
      lodash.omit = omit;
      lodash.omitBy = omitBy;
      lodash.once = once;
      lodash.orderBy = orderBy;
      lodash.over = over;
      lodash.overArgs = overArgs;
      lodash.overEvery = overEvery;
      lodash.overSome = overSome;
      lodash.partial = partial;
      lodash.partialRight = partialRight;
      lodash.partition = partition;
      lodash.pick = pick;
      lodash.pickBy = pickBy;
      lodash.property = property;
      lodash.propertyOf = propertyOf;
      lodash.pull = pull;
      lodash.pullAll = pullAll;
      lodash.pullAllBy = pullAllBy;
      lodash.pullAllWith = pullAllWith;
      lodash.pullAt = pullAt;
      lodash.range = range;
      lodash.rangeRight = rangeRight;
      lodash.rearg = rearg;
      lodash.reject = reject;
      lodash.remove = remove;
      lodash.rest = rest;
      lodash.reverse = reverse;
      lodash.sampleSize = sampleSize;
      lodash.set = set;
      lodash.setWith = setWith;
      lodash.shuffle = shuffle;
      lodash.slice = slice;
      lodash.sortBy = sortBy;
      lodash.sortedUniq = sortedUniq;
      lodash.sortedUniqBy = sortedUniqBy;
      lodash.split = split;
      lodash.spread = spread;
      lodash.tail = tail;
      lodash.take = take;
      lodash.takeRight = takeRight;
      lodash.takeRightWhile = takeRightWhile;
      lodash.takeWhile = takeWhile;
      lodash.tap = tap;
      lodash.throttle = throttle;
      lodash.thru = thru;
      lodash.toArray = toArray;
      lodash.toPairs = toPairs;
      lodash.toPairsIn = toPairsIn;
      lodash.toPath = toPath;
      lodash.toPlainObject = toPlainObject;
      lodash.transform = transform;
      lodash.unary = unary;
      lodash.union = union;
      lodash.unionBy = unionBy;
      lodash.unionWith = unionWith;
      lodash.uniq = uniq;
      lodash.uniqBy = uniqBy;
      lodash.uniqWith = uniqWith;
      lodash.unset = unset;
      lodash.unzip = unzip;
      lodash.unzipWith = unzipWith;
      lodash.update = update;
      lodash.updateWith = updateWith;
      lodash.values = values;
      lodash.valuesIn = valuesIn;
      lodash.without = without;
      lodash.words = words;
      lodash.wrap = wrap;
      lodash.xor = xor;
      lodash.xorBy = xorBy;
      lodash.xorWith = xorWith;
      lodash.zip = zip;
      lodash.zipObject = zipObject;
      lodash.zipObjectDeep = zipObjectDeep;
      lodash.zipWith = zipWith;
      lodash.entries = toPairs;
      lodash.entriesIn = toPairsIn;
      lodash.extend = assignIn;
      lodash.extendWith = assignInWith;
      mixin(lodash, lodash);
      lodash.add = add;
      lodash.attempt = attempt;
      lodash.camelCase = camelCase;
      lodash.capitalize = capitalize;
      lodash.ceil = ceil;
      lodash.clamp = clamp;
      lodash.clone = clone;
      lodash.cloneDeep = cloneDeep;
      lodash.cloneDeepWith = cloneDeepWith;
      lodash.cloneWith = cloneWith;
      lodash.conformsTo = conformsTo;
      lodash.deburr = deburr;
      lodash.defaultTo = defaultTo;
      lodash.divide = divide;
      lodash.endsWith = endsWith;
      lodash.eq = eq;
      lodash.escape = escape;
      lodash.escapeRegExp = escapeRegExp;
      lodash.every = every;
      lodash.find = find;
      lodash.findIndex = findIndex;
      lodash.findKey = findKey;
      lodash.findLast = findLast;
      lodash.findLastIndex = findLastIndex;
      lodash.findLastKey = findLastKey;
      lodash.floor = floor;
      lodash.forEach = forEach;
      lodash.forEachRight = forEachRight;
      lodash.forIn = forIn;
      lodash.forInRight = forInRight;
      lodash.forOwn = forOwn;
      lodash.forOwnRight = forOwnRight;
      lodash.get = get;
      lodash.gt = gt2;
      lodash.gte = gte;
      lodash.has = has;
      lodash.hasIn = hasIn;
      lodash.head = head;
      lodash.identity = identity;
      lodash.includes = includes;
      lodash.indexOf = indexOf;
      lodash.inRange = inRange;
      lodash.invoke = invoke;
      lodash.isArguments = isArguments;
      lodash.isArray = isArray;
      lodash.isArrayBuffer = isArrayBuffer;
      lodash.isArrayLike = isArrayLike;
      lodash.isArrayLikeObject = isArrayLikeObject;
      lodash.isBoolean = isBoolean;
      lodash.isBuffer = isBuffer;
      lodash.isDate = isDate;
      lodash.isElement = isElement;
      lodash.isEmpty = isEmpty;
      lodash.isEqual = isEqual;
      lodash.isEqualWith = isEqualWith;
      lodash.isError = isError;
      lodash.isFinite = isFinite2;
      lodash.isFunction = isFunction;
      lodash.isInteger = isInteger;
      lodash.isLength = isLength;
      lodash.isMap = isMap;
      lodash.isMatch = isMatch;
      lodash.isMatchWith = isMatchWith;
      lodash.isNaN = isNaN2;
      lodash.isNative = isNative;
      lodash.isNil = isNil;
      lodash.isNull = isNull;
      lodash.isNumber = isNumber;
      lodash.isObject = isObject;
      lodash.isObjectLike = isObjectLike;
      lodash.isPlainObject = isPlainObject;
      lodash.isRegExp = isRegExp;
      lodash.isSafeInteger = isSafeInteger;
      lodash.isSet = isSet;
      lodash.isString = isString;
      lodash.isSymbol = isSymbol;
      lodash.isTypedArray = isTypedArray;
      lodash.isUndefined = isUndefined;
      lodash.isWeakMap = isWeakMap;
      lodash.isWeakSet = isWeakSet;
      lodash.join = join;
      lodash.kebabCase = kebabCase;
      lodash.last = last;
      lodash.lastIndexOf = lastIndexOf;
      lodash.lowerCase = lowerCase;
      lodash.lowerFirst = lowerFirst;
      lodash.lt = lt2;
      lodash.lte = lte;
      lodash.max = max;
      lodash.maxBy = maxBy;
      lodash.mean = mean;
      lodash.meanBy = meanBy;
      lodash.min = min;
      lodash.minBy = minBy;
      lodash.stubArray = stubArray;
      lodash.stubFalse = stubFalse;
      lodash.stubObject = stubObject;
      lodash.stubString = stubString;
      lodash.stubTrue = stubTrue;
      lodash.multiply = multiply;
      lodash.nth = nth;
      lodash.noConflict = noConflict;
      lodash.noop = noop;
      lodash.now = now;
      lodash.pad = pad;
      lodash.padEnd = padEnd;
      lodash.padStart = padStart;
      lodash.parseInt = parseInt2;
      lodash.random = random;
      lodash.reduce = reduce;
      lodash.reduceRight = reduceRight;
      lodash.repeat = repeat;
      lodash.replace = replace;
      lodash.result = result;
      lodash.round = round;
      lodash.runInContext = runInContext;
      lodash.sample = sample;
      lodash.size = size;
      lodash.snakeCase = snakeCase;
      lodash.some = some;
      lodash.sortedIndex = sortedIndex;
      lodash.sortedIndexBy = sortedIndexBy;
      lodash.sortedIndexOf = sortedIndexOf;
      lodash.sortedLastIndex = sortedLastIndex;
      lodash.sortedLastIndexBy = sortedLastIndexBy;
      lodash.sortedLastIndexOf = sortedLastIndexOf;
      lodash.startCase = startCase;
      lodash.startsWith = startsWith;
      lodash.subtract = subtract;
      lodash.sum = sum;
      lodash.sumBy = sumBy;
      lodash.template = template;
      lodash.times = times;
      lodash.toFinite = toFinite;
      lodash.toInteger = toInteger;
      lodash.toLength = toLength;
      lodash.toLower = toLower;
      lodash.toNumber = toNumber;
      lodash.toSafeInteger = toSafeInteger;
      lodash.toString = toString;
      lodash.toUpper = toUpper;
      lodash.trim = trim;
      lodash.trimEnd = trimEnd;
      lodash.trimStart = trimStart;
      lodash.truncate = truncate;
      lodash.unescape = unescape;
      lodash.uniqueId = uniqueId;
      lodash.upperCase = upperCase;
      lodash.upperFirst = upperFirst;
      lodash.each = forEach;
      lodash.eachRight = forEachRight;
      lodash.first = head;
      mixin(lodash, function() {
        var source = {};
        baseForOwn(lodash, function(func, methodName) {
          if (!hasOwnProperty.call(lodash.prototype, methodName)) {
            source[methodName] = func;
          }
        });
        return source;
      }(), { chain: false });
      lodash.VERSION = VERSION;
      arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
        lodash[methodName].placeholder = lodash;
      });
      arrayEach(["drop", "take"], function(methodName, index) {
        LazyWrapper.prototype[methodName] = function(n) {
          n = n === undefined2 ? 1 : nativeMax(toInteger(n), 0);
          var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
          if (result2.__filtered__) {
            result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
          } else {
            result2.__views__.push({
              size: nativeMin(n, MAX_ARRAY_LENGTH),
              type: methodName + (result2.__dir__ < 0 ? "Right" : "")
            });
          }
          return result2;
        };
        LazyWrapper.prototype[methodName + "Right"] = function(n) {
          return this.reverse()[methodName](n).reverse();
        };
      });
      arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
        var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
        LazyWrapper.prototype[methodName] = function(iteratee2) {
          var result2 = this.clone();
          result2.__iteratees__.push({
            iteratee: getIteratee(iteratee2, 3),
            type
          });
          result2.__filtered__ = result2.__filtered__ || isFilter;
          return result2;
        };
      });
      arrayEach(["head", "last"], function(methodName, index) {
        var takeName = "take" + (index ? "Right" : "");
        LazyWrapper.prototype[methodName] = function() {
          return this[takeName](1).value()[0];
        };
      });
      arrayEach(["initial", "tail"], function(methodName, index) {
        var dropName = "drop" + (index ? "" : "Right");
        LazyWrapper.prototype[methodName] = function() {
          return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
        };
      });
      LazyWrapper.prototype.compact = function() {
        return this.filter(identity);
      };
      LazyWrapper.prototype.find = function(predicate) {
        return this.filter(predicate).head();
      };
      LazyWrapper.prototype.findLast = function(predicate) {
        return this.reverse().find(predicate);
      };
      LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
        if (typeof path == "function") {
          return new LazyWrapper(this);
        }
        return this.map(function(value) {
          return baseInvoke(value, path, args);
        });
      });
      LazyWrapper.prototype.reject = function(predicate) {
        return this.filter(negate(getIteratee(predicate)));
      };
      LazyWrapper.prototype.slice = function(start, end) {
        start = toInteger(start);
        var result2 = this;
        if (result2.__filtered__ && (start > 0 || end < 0)) {
          return new LazyWrapper(result2);
        }
        if (start < 0) {
          result2 = result2.takeRight(-start);
        } else if (start) {
          result2 = result2.drop(start);
        }
        if (end !== undefined2) {
          end = toInteger(end);
          result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
        }
        return result2;
      };
      LazyWrapper.prototype.takeRightWhile = function(predicate) {
        return this.reverse().takeWhile(predicate).reverse();
      };
      LazyWrapper.prototype.toArray = function() {
        return this.take(MAX_ARRAY_LENGTH);
      };
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
        if (!lodashFunc) {
          return;
        }
        lodash.prototype[methodName] = function() {
          var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
          var interceptor = function(value2) {
            var result3 = lodashFunc.apply(lodash, arrayPush([value2], args));
            return isTaker && chainAll ? result3[0] : result3;
          };
          if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
            isLazy = useLazy = false;
          }
          var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
          if (!retUnwrapped && useLazy) {
            value = onlyLazy ? value : new LazyWrapper(this);
            var result2 = func.apply(value, args);
            result2.__actions__.push({ func: thru, args: [interceptor], thisArg: undefined2 });
            return new LodashWrapper(result2, chainAll);
          }
          if (isUnwrapped && onlyLazy) {
            return func.apply(this, args);
          }
          result2 = this.thru(interceptor);
          return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
        };
      });
      arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
        var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
        lodash.prototype[methodName] = function() {
          var args = arguments;
          if (retUnwrapped && !this.__chain__) {
            var value = this.value();
            return func.apply(isArray(value) ? value : [], args);
          }
          return this[chainName](function(value2) {
            return func.apply(isArray(value2) ? value2 : [], args);
          });
        };
      });
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var lodashFunc = lodash[methodName];
        if (lodashFunc) {
          var key = lodashFunc.name + "";
          if (!hasOwnProperty.call(realNames, key)) {
            realNames[key] = [];
          }
          realNames[key].push({ name: methodName, func: lodashFunc });
        }
      });
      realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
        name: "wrapper",
        func: undefined2
      }];
      LazyWrapper.prototype.clone = lazyClone;
      LazyWrapper.prototype.reverse = lazyReverse;
      LazyWrapper.prototype.value = lazyValue;
      lodash.prototype.at = wrapperAt;
      lodash.prototype.chain = wrapperChain;
      lodash.prototype.commit = wrapperCommit;
      lodash.prototype.next = wrapperNext;
      lodash.prototype.plant = wrapperPlant;
      lodash.prototype.reverse = wrapperReverse;
      lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
      lodash.prototype.first = lodash.prototype.head;
      if (symIterator) {
        lodash.prototype[symIterator] = wrapperToIterator;
      }
      return lodash;
    };
    var _4 = runInContext();
    if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
      root._ = _4;
      define(function() {
        return _4;
      });
    } else if (freeModule) {
      (freeModule.exports = _4)._ = _4;
      freeExports._ = _4;
    } else {
      root._ = _4;
    }
  }).call(exports);
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/src/Evaluator/Evaluator-JS/scope.js
var require_scope = __commonJS((exports, module) => {
  var { uniqueId } = require_lodash();

  class Scope {
    constructor(name) {
      this.name = name;
      this.self = {};
      this.innerScopes = [];
      this.has = (v3) => this.self.hasOwnProperty(v3);
      this.parentScope = null;
      this.id = uniqueId("ScopeID");
      this.define("name", this.name);
    }
    define(proprety, value) {
      this.self[proprety] = value;
      return this.self[proprety];
    }
    assignParent(parentScope) {
      if (parentScope)
        this.parentScope = parentScope;
    }
    undefine(property) {
      delete this.self[property];
    }
    get(proprety) {
      return this.self[proprety];
    }
    appendScope(scope) {
      if (scope) {
        this.innerScopes.push(scope);
        scope.assignParent(this);
      }
    }
    strictSearch(proprety) {
      if (this.has(proprety)) {
        return this.self[proprety];
      }
      if (this.parentScope) {
        const d3 = this.parentScope.strictSearch(proprety);
        if (d3)
          return d3;
        else
          return null;
      }
      return null;
    }
  }
  var globalScope = new Scope("GlobalScope");
  module.exports = {
    Scope,
    globalScope
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/src/Evaluator/Evaluator-JS/datatypes/Object.js
var require_Object = __commonJS((exports, module) => {
  class Object2 {
    static UNDEF = "UNDEF%@!!%!@D@%tjn414##UNDEF";
    static TRUE = true;
    static FALSE = false;
    static isFalsy = (value) => {
      if (value === Object2.UNDEF) {
        return true;
      } else if (value === Object2.TRUE) {
        return false;
      } else if (value === Object2.FALSE) {
        return true;
      }
    };
    constructor(value, name, type, ...args) {
      this.value = value;
      this.name = name;
      this._type = type;
      this.strong = false;
      this.masterSCOPEID = null;
    }
    repersent() {
      if (typeof this.value !== "function")
        return this.value;
      else
        return "[\u0192unction-expression]";
    }
    equals(value) {
      if (this.value === value) {
        return Object2.TRUE;
      }
    }
    unsafeRepersentation() {
      if (this._type === "String") {
        return `"${this.value}"`;
      } else
        return this.repersent();
    }
    type() {
      return this._type;
    }
    greaterThan() {
    }
    lessThan() {
    }
    notEquals() {
    }
    execute() {
    }
  }
  module.exports = {
    Object: Object2
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/src/Evaluator/Evaluator-JS/stdlib.js
var require_stdlib = __commonJS((exports, module) => {
  var defineSrc = function(name, value, scope) {
    name = Abstract(name.type === "Identifier" ? "name" : "value", name);
    if (scope.self[name] && scope.self["name"] instanceof Object2 && scope.self["name"].strong === true) {
      new Exception2(0, `Use Aliasing Operator 'as' to modify Strong variables: <value> as ${name}. Please note that Strong variables can only be modified whence they were created.`).throw();
    }
    if (name in reservedWords) {
      new Exception2("_", `Cannot name a variable "${name}", it is a reserved Word. Please check the documentation for the reserved words.`);
    }
    value = Abstract("value", value);
    scope.define(name, value);
  };
  var { globalScope } = require_scope();
  var { Object: Object2 } = require_Object();
  var _4 = require_lodash();
  var fs = (()=>({}));
  var { Exception: Exception2 } = require_exceptionUtility();
  var Abstract = (property, object) => object instanceof Object2 ? object[property] : object;
  var refine = (...args) => {
    for (let argument of args) {
      args[args.indexOf(argument)] = Abstract("value", argument);
    }
    return args;
  };
  var reservedWords = [
    "define",
    "_createScope",
    "_switchScope",
    "_deleteScope",
    "_readScope",
    "_getScope",
    "_appendScope",
    "return",
    "Argument",
    "as",
    "if",
    "then",
    "else",
    "elseif",
    "declare"
  ];
  var USE = (globalScope2) => {
    globalScope2.used = true;
    globalScope2.define("if", (condition) => {
      return {
        public: {
          baseCondition: condition,
          then: (fn) => {
            let isElseCallable = true;
            if (condition) {
              fn();
              isElseCallable = false;
            }
            const base = {
              public: {
                else: (fn2) => {
                  if (isElseCallable)
                    fn2();
                },
                elseif: (condition2) => {
                  return globalScope2.get("if")(condition2);
                }
              }
            };
            return base;
          }
        }
      };
    });
    globalScope2.define("foreach", (array, callback) => {
      array = Abstract("value", array);
      if (Array.isArray(array)) {
        array = refine(...array);
      }
      let i = 0;
      for (let element of array) {
        callback(element);
        i += 1;
      }
    });
    globalScope2.define("True", true);
    globalScope2.define("is_equal", (v1, v22) => {
      return Abstract("value", v1) === Abstract("value", v22);
    });
    globalScope2.define("is_greater", (v1, v22) => {
      return Abstract("value", v1) > Abstract("value", v22);
    });
    globalScope2.define("is_less", (v1, v22) => {
      return Abstract("value", v1) < Abstract("value", v22);
    });
    globalScope2.define("is_less_eq", (v1, v22) => {
      return Abstract("value", v1) <= Abstract("value", v22);
    });
    globalScope2.define("is_greater_eq", (v1, v22) => {
      return Abstract("value", v1) >= Abstract("value", v22);
    });
    globalScope2.define("NOT", (v1) => {
      return !Abstract("value", v1);
    });
    globalScope2.define("println", (...objects) => {
      let value = ``;
      for (const arg of objects) {
        if (!arg)
          continue;
        if (arg instanceof Object2) {
          const repr = Abstract("value", Abstract("value", arg));
          value += repr;
        } else {
          value += arg.value ? String(arg.value) : String(arg);
        }
      }
      console.log(value);
    });
    globalScope2.define("sum", (...args) => {
      return _4.sum(refine(...args));
    });
    globalScope2.define("subtract", (...args) => {
      return _4.subtract(refine(...args));
    });
    globalScope2.define("product", (...args) => {
      return _4.multiply(refine(...args));
    });
    globalScope2.define("divide", (arg0, arg1) => {
      return _4.divide(refine(arg0, arg1));
    });
    globalScope2.define("increment", (name, arg0 = 1) => {
      globalScope2.define(Abstract("name", name), Abstract("value", arg0));
      return;
    });
    globalScope2.define("concat", (v1, v22, joinUsing = "") => {
      const v_1 = Abstract("value", v1);
      const v_2 = Abstract("value", v22);
      return v_1 + Abstract("value", joinUsing) + v_2;
    });
    globalScope2.define("Math", {
      public: {
        Trig: {
          sin: (value) => {
            value = Abstract("value", value);
            return Math.sin(value);
          },
          cos: (value) => {
            value = Abstract("value", value);
            return Math.cos(value);
          },
          tan: (value) => {
            value = Abstract("value", value);
            return Math.tan(value);
          }
        },
        JSMath: Math,
        Consts: {
          PI: Math.PI,
          pi: 3.142,
          e: 2.71,
          E: Math.E
        }
      }
    });
    globalScope2.define("Array", (...args) => {
      return args;
    });
  };
  module.exports = {
    USE,
    defineSrc,
    Abstract,
    refine
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/src/Evaluator/Evaluator-JS/datatypes/Function.js
var require_Function = __commonJS((exports, module) => {
  var { uniqueId } = require_lodash();
  var { Scope } = require_scope();
  var STD = require_stdlib();
  var lexLib = require_lexer();
  var parseLib = require_parser();

  class Function2 {
    static CALLED = 0;
    constructor(name, argLength, SCOPE) {
      this.argLength = argLength;
      this.name = name;
      this.SCOPE = SCOPE;
    }
    setToken(parsedToken) {
      this.contents = parsedToken.contents;
      this.fnName = parsedToken.name;
    }
    setEvaluator(evaluate) {
      this.evaluate = evaluate;
    }
    initalizeParameters(...args) {
      for (const content of this.contents) {
        if (!content)
          continue;
        if (content.type === "Identifier" && content.name === "Argument") {
          const generic = this.contents.indexOf(content);
          const name = this.contents[generic + 1].name;
          const argumentIndex = parseInt(this.contents[generic + 3].name.replace("arg", ""));
          if (typeof args[argumentIndex] === "undefined") {
            new Exception(line, `Function ${this.fnName} expected ${argumentIndex + 1} argument${argumentIndex + 1 > 1 ? "s" : ""}, got ${args.length} instead`).throw();
          }
          this.SCOPE.define(name, args[argumentIndex]);
          delete this.contents[generic];
          delete this.contents[generic + 1];
          delete this.contents[generic + 2];
          delete this.contents[generic + 3];
          continue;
        }
      }
    }
    def() {
      this.SCOPE.define(this.fnName, this.call.bind(this));
    }
    call(...Arguments) {
      const contents = [...this.contents];
      Arguments.forEach((v3, i) => {
        this.SCOPE.define("Arg" + i, Arguments[i]);
      });
      return this.evaluate(contents, this.SCOPE, "FN", Arguments);
    }
  }
  module.exports = {
    Function: Function2
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/src/Evaluator/Evaluator-JS/index.js
var require_Evaluator_JS = __commonJS((exports, module) => {
  var { globalScope, Scope } = require_scope();
  var { Exception: Exception2 } = require_exceptionUtility();
  var { Object: Object2 } = require_Object();
  var { Function: Function2 } = require_Function();
  var STD = require_stdlib();
  STD.USE(globalScope);
  var SCOPE = globalScope;
  var scopes = {
    globalScope
  };

  class Evaluator {
    SCOPE = globalScope;
    scopes = { globalScope };
    specialVariables = ["define", "return"];
    specialVariablesAllowedExecution = ["return"];
    specialVariablesExecuter = {
      define: function def(name, value, scope = null) {
        let s_cope;
        if (scope && scope instanceof Scope)
          s_cope = scope;
        else if (scope)
          s_cope = this.scopes[scope];
        else
          s_cope = SCOPE;
        if (value instanceof Object2)
          value.owner = s_cope;
        STD.defineSrc(name, value, s_cope);
        return value;
      }
    };
    evaluateFunction(parsedToken, line2 = 0) {
      if (this.specialVariables.indexOf(parsedToken.name) !== -1) {
        const fn2 = this.specialVariablesExecuter[parsedToken.name];
        switch (parsedToken.name) {
          case "define":
            const args = parsedToken.arguments;
            args[0].type = "String";
            args[0].value = parsedToken.arguments[0].name;
            return fn2(this.__call__(args[0], Evaluator.SCOPE), this.__call__(args[1], Evaluator.SCOPE), args[2] ? args[2].value : null);
          default:
            break;
        }
      }
      let fn;
      if (this.SCOPE.name === "GlobalScope" && (parsedToken.name in this.SCOPE.self)) {
        fn = this.SCOPE.self[parsedToken.name];
      } else {
        fn = this.SCOPE.strictSearch(parsedToken.name);
      }
      const _arguments = [];
      parsedToken.arguments.forEach((v3, i) => {
        _arguments.push(this.__call__(v3, this.SCOPE, line2));
      });
      if (fn) {
        let data;
        if (fn instanceof Object2)
          data = fn.value(..._arguments);
        else
          data = fn(..._arguments);
        return data;
      } else {
        new Exception2(line2, `Unknown reference to Funtion ${parsedToken.name} which is non-existant`).throw();
      }
    }
    evaluateIdentifier(parsedToken, line2) {
      const obj = SCOPE.strictSearch(parsedToken.name);
      if (obj instanceof Function2) {
        return obj();
      }
      if (!obj && typeof obj !== "number" && obj !== 0) {
        new Exception2("line " + line2, `Unknown Reference to Identifier ${parsedToken.name} which is non-existent`).throw();
      }
      if (obj instanceof Object2 === false) {
        return new Object2(obj, parsedToken.name, parsedToken.type);
      } else {
        return obj;
      }
    }
    evalulateSpecialVariables(parsedToken, line2) {
    }
    evaluateObjectDeclaration(parsedToken, line2) {
      const obj = {};
      for (const property of parsedToken.properties) {
        obj[property[0]] = this.__call__(property[1], SCOPE, line2);
      }
      SCOPE.define(parsedToken.name, {
        public: obj,
        Mut: parsedToken.isMutable
      });
    }
    evaluateObjectAccessors(parsedToken, line2) {
      if (parsedToken.type === "ObjectAccessPoint") {
        const baseAccessor = parsedToken.accessors[0];
        const fsElement = parsedToken.accessors.shift();
        let object;
        if (baseAccessor.type !== "Function") {
          object = this.SCOPE.strictSearch(baseAccessor.name);
        } else {
          object = this.__call__(baseAccessor, SCOPE, line2);
          if (!("public" in object) && ("value" in object)) {
            object = object["value"];
          }
          for (const key in object["public"]) {
            object["public"][key] = STD.Abstract("value", object["public"][key]);
          }
        }
        let target = 0;
        if (Array.isArray(object)) {
          target = object;
        } else {
          target = object["public"];
        }
        if (!target)
          new Exception2("line " + line2, `NULL Reference to Identifier ${baseAccessor.name} When trying to access ${parsedToken?.accessors[parsedToken.accessors.length - 1]?.name}`).throw();
        for (let acc of parsedToken.accessors) {
          if (!target)
            new Exception2("line " + line2, `NULL Reference to Identifier ${baseAccessor.name} When trying to access ${parsedToken.accessors[parsedToken.accessors.length - 1].name}`).throw();
          if (acc.type === "Identifier") {
            target = target[acc.name];
          } else {
            if (!target)
              new Exception2("line " + line2, `NULL Reference to Identifier ${baseAccessor.name} When trying to access ${parsedToken.accessors[parsedToken.accessors.length - 1].name}`).throw();
            if (acc.type === "Function") {
              target = target[acc.name]();
              if (!target) {
                target = {};
                continue;
              }
              if (target["value"] && target["value"]["public"]) {
                target = target["value"]["public"];
                continue;
              }
              continue;
            }
            target = target[acc.value];
          }
        }
        if (!target)
          new Exception2("line " + line2, `NULL Reference to Identifier ${baseAccessor.name} When trying to access ${parsedToken.accessors[parsedToken.accessors.length - 1].name}`).throw();
        parsedToken.accessors = [fsElement, ...parsedToken.accessors];
        return new Object2(target, Object2.UNDEF, "Identifier");
      }
    }
    __call__(parsedToken, line2) {
      if (!parsedToken)
        return;
      if (parsedToken && parsedToken.type === "Identifier" && (parsedToken.name in this.specialVariables)) {
        return this.evalulateSpecialVariables(parsedToken, line2);
      }
      if (parsedToken.type === "Function") {
        return this.evaluateFunction(parsedToken, line2);
      }
      if (parsedToken.type === "Identifier") {
        return this.evaluateIdentifier(parsedToken, line2);
      }
      if (parsedToken.type === "ObjectDeclaration") {
        return this.evaluateObjectDeclaration(parsedToken, line2);
      }
      if (parsedToken.type === "ObjectAccessPoint") {
        return this.evaluateObjectAccessors(parsedToken, line2);
      }
      if (parsedToken.type === "FunctionDeclaration") {
        const tmfn = new Function2(parsedToken.name, 0, this.SCOPE);
        tmfn.setToken(parsedToken);
        tmfn.setEvaluator(this.__execute__.bind(this));
        tmfn.def();
        return tmfn.call.bind(tmfn);
      }
      if (parsedToken) {
        let value = parsedToken.value;
        const object = new Object2(value, Object2.UNDEF, parsedToken.type);
        return object;
      }
    }
    __execute__(parsedTokens, SCOPE__, CALLER = "STD") {
      if (SCOPE__)
        SCOPE = SCOPE__;
      let lFunctionRetn;
      for (let i = 0;i < parsedTokens.length; i++) {
        const parsedToken = parsedTokens[i];
        if (!parsedToken)
          continue;
        if (parsedToken && parsedToken.type === "Identifier" && parsedToken.name === "return" || parsedToken.name === "returnend") {
          const nextToken = parsedTokens[parsedTokens.indexOf(parsedToken) + 1];
          if (!nextToken)
            return Object2.UNDEF;
          const output = this.__call__(nextToken, SCOPE);
          if (parsedToken.name === "returnend") {
            delete scopes[SCOPE.name];
            SCOPE = scopes["globalScope"];
          }
          return output;
        }
        if (parsedToken && parsedToken.type === "Identifier" && parsedToken.name === "as") {
          let name = parsedTokens[parsedTokens.indexOf(parsedToken) + 1];
          if (name.type === "Identifier") {
            name.name;
            SCOPE.define(name, STD.Abstract("value", STD.Abstract("value", lFunctionRetn)));
          } else if (name.type === "ObjectAccessPoint" && SCOPE.get(name.accessors[0]?.name)) {
            if (!SCOPE.get(name.accessors[0]?.name).Mut) {
              return new Exception2(0, "Cannot change the value of an immutable Object. To declare a mutable object, use 'Mutable' instead of 'Object'").throw();
            }
            const initalObject = SCOPE.get(name.accessors[0].name);
            let target = initalObject.public;
            name.accessors.forEach((v3, i2) => {
              if (i2 === 0)
                return;
              if (i2 === name.accessors.length - 1)
                target[v3.name] = lFunctionRetn;
              else
                target = target[v3.name];
            });
            SCOPE.define(name.accessors[0].name, initalObject);
          }
          parsedTokens[parsedTokens.indexOf(parsedToken) + 1] = null;
          continue;
        }
        if (parsedToken && parsedToken.type === "Identifier" && parsedToken.name === "block") {
          const name = parsedTokens[parsedTokens.indexOf(parsedToken) + 1].value;
          let scope;
          if (name in scopes) {
            SCOPE = scopes[name];
            if (SCOPE && !SCOPE.used)
              STD.USE(SCOPE);
          } else {
            scope = new Scope(name);
            scopes[name] = scope;
            SCOPE = scope;
            STD.USE(SCOPE);
          }
          parsedTokens[parsedTokens.indexOf(parsedToken) + 1] = null;
          continue;
        }
        if (parsedToken && parsedToken.type === "Identifier" && parsedToken.name === "end") {
          const name = parsedTokens[parsedTokens.indexOf(parsedToken) + 1].value;
          if (name === "globalScope") {
            require_Preprocessers().PREPROCESSORZ.abort("GlobalScope was deleted, the interpreter could not retreat to another base scope");
          }
          if (name in scopes) {
            scopes[name] = null;
          }
          parsedTokens[parsedTokens.indexOf(parsedToken) + 1] = null;
          continue;
        }
        if (parsedToken && parsedToken.type === "Identifier" && parsedToken.name === "parent") {
          const name = parsedTokens[parsedTokens.indexOf(parsedToken) + 1].value;
          if (name in scopes) {
            scopes[name].appendScope(SCOPE);
          }
          parsedTokens[parsedTokens.indexOf(parsedToken) + 1] = null;
          continue;
        }
        lFunctionRetn = this.__call__(parsedToken, SCOPE, i);
      }
      SCOPE = globalScope;
    }
  }
  var _evaluator = new Evaluator;
  var SpawnEvaluator = _evaluator.__execute__.bind(_evaluator);
  module.exports = {
    SpawnEvaluator,
    SCOPE
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/src/Parser/IdentifierParse.js
var require_IdentifierParse = __commonJS((exports, module) => {
  module.exports = function identifierParse(token) {
    return {
      type: "Identifier",
      name: token.value,
      length: 1
    };
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/src/Parser/FunctionParse.js
var require_FunctionParse = __commonJS((exports, module) => {
  module.exports = function functionParse(token, tokens_array, index, parse) {
    const tokenIndex = tokens_array.indexOf(token);
    if (tokenIndex === -1) {
      return false;
    }
    const nextTokenIndex = tokenIndex + 1;
    if (nextTokenIndex < tokens_array.length && tokens_array[nextTokenIndex].type === "Parenthesis" && tokens_array[nextTokenIndex].isOpening) {
      const parameters = [];
      let parameterController = 1;
      let parametersLength = 0;
      for (let i = nextTokenIndex + 1;i < tokens_array.length; i++) {
        const currentToken = tokens_array[i];
        if (currentToken.value === "(") {
          parameterController++;
        } else if (currentToken.value === ")") {
          parameterController--;
        }
        parameters.push(currentToken);
        if (parameterController === 0) {
          break;
        }
        parametersLength++;
      }
      if (parameters[0].value === "(")
        parameters.shift();
      if (parameters[parameters.length - 1].value === ")")
        parameters.pop();
      const parsedParameters = parse(parameters);
      parsedParameters.forEach((element) => {
        element.isArgument = true;
      });
      return {
        type: "Function",
        name: token.value,
        arguments: parsedParameters,
        parametersLength,
        length: parametersLength + 3
      };
    }
    return false;
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/src/Parser/ObjectAccessor.js
var require_ObjectAccessor = __commonJS((exports, module) => {
  var { Exception: Exception2 } = require_exceptionUtility();
  module.exports = function ObjectAccessPoint(token, tokens_array, index, parse) {
    const generic = tokens_array.indexOf(token);
    let length = 0;
    if (token.value === "|" && token.type === "Symbol") {
      let character = {
        type: "",
        value: ""
      };
      let accessors = [];
      const remainingArray = tokens_array.slice(generic + 1, tokens_array.length);
      while (character.type !== "Symbol" && character.value !== "|") {
        if (character.value === "|")
          break;
        character = remainingArray[length];
        accessors.push(character);
        length += 1;
      }
      accessors.pop();
      return {
        type: "ObjectAccessPoint",
        length: length + 1,
        accessors: parse(accessors)
      };
    }
    return false;
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/src/Parser/VariableDeclarationParse.js
var require_VariableDeclarationParse = __commonJS((exports, module) => {
  module.exports = function VariableDeclarationParse(token, tokens_array, index, parse) {
    const generic = tokens_array.indexOf(token);
    const NTOKEN = tokens_array[generic + 1];
    let length = 0;
    if (NTOKEN && NTOKEN.type === "Symbol" && NTOKEN.value === "=") {
      const name = token.value;
      let targets = tokens_array.slice(generic + 2, tokens_array.length);
      const assignee = parse(targets);
      length = generic + 2;
      if (assignee[0].type === "Function") {
        length += assignee[0].length;
      }
      return {
        type: "VariableDeclaration",
        name,
        assignee: assignee[0],
        length
      };
    }
    return false;
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/src/Parser/FunctionDeclarationParse.js
var require_FunctionDeclarationParse = __commonJS((exports, module) => {
  module.exports = function FunctionDeclarationParse(token, tokens_array, index, parse) {
    if (token.value === "declare") {
      const generic = tokens_array.indexOf(token);
      let copiedGenerics = generic + 1;
      let fnName = tokens_array[copiedGenerics];
      var NTOKEN;
      if (!fnName.type === "Symbol" && !fnName.value === "{" || fnName.type === "Name") {
        copiedGenerics += 1;
        NTOKEN = tokens_array[copiedGenerics];
        copiedGenerics += 1;
      } else if (fnName.type === "Symbol" && fnName.value === "{") {
        NTOKEN = fnName;
        copiedGenerics += 1;
        fnName = "__lambda!";
      }
      let length = 0;
      if (NTOKEN && NTOKEN.type === "Symbol" && NTOKEN.value === "{" || NTOKEN.type) {
        let contents = [];
        let character = {
          type: "",
          value: ""
        };
        let bracketController = 1;
        const remainingArray = tokens_array.slice(copiedGenerics, tokens_array.length);
        while (length < remainingArray.length) {
          character = remainingArray[length];
          if (bracketController === 0)
            break;
          if (character.value === "{")
            bracketController += 1;
          if (character.value === "}")
            bracketController -= 1;
          contents.push(character);
          length += 1;
        }
        contents = contents.slice(0, contents.length - 1);
        contents = parse(contents);
        return {
          type: "FunctionDeclaration",
          contents,
          length: fnName !== "__lambda!" ? length + 3 : length + 2,
          name: fnName === "__lambda!" ? fnName : fnName.value,
          lambda: fnName.value === "_lambda"
        };
      }
    }
    return false;
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/src/Parser/ObjectParse.js
var require_ObjectParse = __commonJS((exports, module) => {
  module.exports = function ObjectParse(token, tokens_array, index, parse) {
    if (token.value === "Object" || token.value === "Mutable") {
      const generic = tokens_array.indexOf(token);
      let copiedGenerics = generic + 1;
      const fnName = tokens_array[copiedGenerics];
      copiedGenerics += 1;
      const NTOKEN = tokens_array[copiedGenerics];
      copiedGenerics += 1;
      let length = 0;
      if (NTOKEN.type === "Symbol" && NTOKEN.value === "{") {
        let contents = [];
        let character = {
          type: "",
          value: ""
        };
        const remainingArray = tokens_array.slice(copiedGenerics, tokens_array.length);
        while (character.type !== "Symbol" && character.value !== "}") {
          character = remainingArray[length];
          contents.push(character);
          length += 1;
        }
        contents = parse(contents.slice(0, contents.length - 1));
        let properties = [];
        for (let i = 0;i < contents.length; i += 2) {
          const Property = contents[i].name;
          const PropertyValue = contents[i + 1];
          properties.push([Property, PropertyValue]);
        }
        return {
          type: "ObjectDeclaration",
          properties,
          length: length + 3,
          name: fnName.value,
          isMutable: token.value === "Mutable" ? true : false
        };
      }
    }
    return false;
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/src/Parser/StatementParse.js
var require_StatementParse = __commonJS((exports, module) => {
  module.exports = function StatementParse(token, tokens_array, index, parse) {
    if (token.value === "if") {
      const generic = tokens_array.indexOf(token);
      let copiedGenerics = generic + 1;
      const fnName = tokens_array[copiedGenerics];
      const NTOKEN = tokens_array[copiedGenerics];
      copiedGenerics += 1;
      let length = 0;
      if (NTOKEN.type === "Symbol" && NTOKEN.value === "{") {
        let contents = [];
        let character = {
          type: "",
          value: ""
        };
        let bracketController = 1;
        const remainingArray = tokens_array.slice(copiedGenerics, tokens_array.length);
        while (length < remainingArray.length) {
          character = remainingArray[length];
          if (bracketController === 0)
            break;
          if (character.value === "{")
            bracketController += 1;
          if (character.value === "}")
            bracketController -= 1;
          contents.push(character);
          length += 1;
        }
        contents = contents.slice(0, contents.length - 1);
        contents = parse(contents);
        return {
          type: "IfCondition",
          contents,
          length: length + 3,
          name: fnName.value
        };
      }
    }
    return false;
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/src/Parser/index.js
var require_Parser = __commonJS((exports, module) => {
  var identiferParse = require_IdentifierParse();
  var functionParse = require_FunctionParse();
  var ObjectAccessor = require_ObjectAccessor();
  var VariableDeclarationParse = require_VariableDeclarationParse();
  var FunctionDeclarationParse = require_FunctionDeclarationParse();
  var ObjectParse = require_ObjectParse();
  var StatementParse = require_StatementParse();
  module.exports = {
    IdentifierParse: identiferParse,
    FunctionParse: functionParse,
    VariableDeclarationParse,
    FunctionDeclarationParse,
    ObjectAccessor,
    ObjectParse,
    StatementParse
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/src/Preprocessers/enable.js
var require_enable = __commonJS((exports, module) => {
  var enable = function(target) {
    if ((!target in PR_AV_EXTENSIONS) || !PR_AV_EXTENSIONS[target] && target != "*")
      return new Exception2(`Preprocessor @enable`, `Cannot enable a target extension that does not exist! No such parsing function named ${target}`).throw();
    if (target === "*") {
      PR_EN_EXTENSIONS = PR_AV_EXTENSIONS;
      return 0;
    }
    const targetExtension = PR_AV_EXTENSIONS[target];
    PR_EN_EXTENSIONS[target] = targetExtension;
    return 0;
  };
  var disable = function(target) {
    if ((!target in PR_AV_EXTENSIONS) || !PR_AV_EXTENSIONS[target] && target != "*")
      return new Exception2(`Preprocessor @disable`, `Cannot disable a target extension that does not exist! No such parsing function named ${target}`).throw();
    if (target === "*") {
      PR_EN_EXTENSIONS = {};
      return 0;
    }
    PR_EN_EXTENSIONS[target] = null;
    return 0;
  };
  var { Exception: Exception2 } = require_exceptionUtility();
  var { IdentifierParse, FunctionParse, VariableDeclarationParse, FunctionDeclarationParse, ObjectParse, StatementParse } = require_Parser();
  var PR_AV_EXTENSIONS = {
    FunctionDeclarationParse,
    VariableDeclarationParse,
    FunctionParse,
    IdentifierParse,
    StatementParse,
    ObjectParse
  };
  var PR_EN_EXTENSIONS = {
    ObjectParse,
    FunctionDeclarationParse,
    FunctionParse,
    IdentifierParse
  };
  module.exports = {
    enable,
    disable,
    PR_EN_EXTENSIONS
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/src/Preprocessers/index.js
var require_Preprocessers = __commonJS((exports, module) => {
  var { Exception: Exception2 } = require_exceptionUtility();
  var os = (init_os(), __toCommonJS(exports_os));
  var { tokenize } = require_lexer();
  var fs = (()=>({}));
  var ffi = require_ffi();
  var SCOPE = require_Evaluator_JS().SCOPE;
  var { enable, disable, PR_EN_EXTENSIONS } = require_enable();
  var { refine } = require_stdlib();
  var PREPROCESSORZ = {
    enable,
    disable,
    parserlog: (value = "") => {
      if (!value)
        new Exception2(0, `Error at @parserlog preprocessor. Cannot log NULL`).throw();
      value = value.replaceAll("-", " ");
      console.log(value);
    },
    include: (File = "", function_ds = null) => {
      if (File.includes('"'))
        File = File.replaceAll('"', "");
      if (File.includes('"'))
        File = File.replaceAll("'", "");
      if (File.endsWith(ffi.suffix) || function_ds) {
        const function_info = function_ds.split("-");
        const [function_name, function_ret_type, ...parameters] = function_info;
        if (!File)
          return new Exception2(-1, `Broken <include>. Cannot import ${File} beacause it is EITHER non-existant or broken.`).throw();
        const ds = {};
        ds[function_name] = {};
        ds[function_name]["returns"] = ffi.FFIType[function_ret_type];
        ds[function_name]["args"] = [...parameters];
        const lib = ffi.dlopen(File, ds).symbols;
        for (const key in lib) {
          if (lib[key])
            SCOPE.define(key, (...args) => {
              const c2 = refine(...args);
              lib[key](...c2);
            });
        }
        return 0;
      }
      try {
        var file = tokenize(fs.readFileSync(File, "utf-8"));
      } catch (e) {
        return new Exception2(-1, `Broken <include>. Cannot import ${file} beacause it is EITHER non-existant or broken.`).throw();
      }
      return file;
    },
    abort: (value) => {
      if (!value)
        value = "Aborting...";
      new Exception2(-1, `Program Forcefully exited with the following message:\n      ${value}`).throw();
    }
  };
  module.exports = {
    PREPROCESSORZ,
    PR_EN_EXTENSIONS
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/src/parser.js
var require_parser = __commonJS((exports, module) => {
  var parse = function(tokens_array) {
    const AST = [];
    const MAX_DEPTH_EXCEED = 100000000000000;
    const cachedLength = tokens_array.length;
    let Depth = 0;
    for (let index = 0;index < cachedLength; ) {
      const token = tokens_array[index];
      if (!token) {
        index += 1;
        continue;
      }
      if (token.type === "Preprocesser") {
        let data = PREPROCESSORZ[token.name](token.target, token.operation);
        if (data) {
          AST.push(...parse(data));
        }
        index += 1;
        continue;
      }
      if (token.type === "Numeric") {
        let type;
        if (Number.isInteger(token.value))
          type = "IntegerLiteral";
        else
          type = "FloatLiteral";
        AST.push({
          type,
          baseType: token.type,
          value: token.value,
          positionedAt: token.position
        });
        index += 1;
        continue;
      }
      if (token.type === "String") {
        AST.push({
          type: token.type,
          value: token.value,
          positionedAt: token.position
        });
        index += 1;
        continue;
      }
      if (token.type === "Name") {
        for (const key in PR_EN_EXTENSIONS) {
          if (PR_EN_EXTENSIONS[key]) {
            const data = PR_EN_EXTENSIONS[key](token, tokens_array, index, parse);
            if (data) {
              index += data.length;
              AST.push(data);
              break;
            } else {
              continue;
            }
          }
        }
        continue;
      }
      if (token.type === "Symbol") {
        let data = ObjectAccessor(token, tokens_array, index, parse);
        if (data) {
          AST.push(data);
          index += data.length;
        }
        continue;
      }
    }
    return AST;
  };
  var { PREPROCESSORZ, PR_EN_EXTENSIONS } = require_Preprocessers();
  var { tokenize } = require_lexer();
  var ObjectAccessor = require_ObjectAccessor();
  module.exports = {
    parse
  };
});

// /Users/hammad/Documents/htdocs/Hammad-Subhtdocs/Languages/Croton/src/index.js
var require_src = __commonJS((exports, module) => {
  var { parse } = require_parser();
  var { SpawnEvaluator } = require_Evaluator_JS();
  var { tokenize } = require_lexer();
  var fs = (()=>({}));
  var SpawnExecuter = function(contents) {
    const Contents = parse(tokenize(contents));
    return SpawnEvaluator(Contents);
  };
  var SpawnFileBasedExecuter = function(file_name) {
    const contents = fs.readFileSync(file_name);
    if (contents)
      return SpawnExecuter(contents);
  };
  module.exports = {
    SpawnFileBasedExecuter,
    parse,
    tokenize
  };
});

// index.js
var require_clis = __commonJS(() => {
  var { argv } = (init_process(), __toCommonJS(exports_process));
  var { SpawnFileBasedExecuter } = require_src();
  argv = argv.slice(2, argv.length);
  var t0 = performance.now();
  var file = argv[0];
  if (file) {
    SpawnFileBasedExecuter(file);
    const t1 = performance.now();
    console.log("Execution Time: ", (t1 - t0).toFixed(3), "ms");
  } else {
    console.log("Error, source file not specified.\nSyntax:\n\tcrotonc [file_name]");
  }
});
export default require_clis();
