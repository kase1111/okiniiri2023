!(function (e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  var n = {};
  (t.m = e),
    (t.c = n),
    (t.d = function (e, n, r) {
      t.o(e, n) ||
        Object.defineProperty(e, n, {
          configurable: !1,
          enumerable: !0,
          get: r,
        });
    }),
    (t.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = ""),
    t((t.s = 5));
})([
  ,
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(6),
      o = n(10),
      i = n(11);
    n.n(i);
    r.a.component("competition-modal", {
      props: { item: { required: !0 }, index: { required: !0 } },
      template: "#competition-modal",
    }),
      new r.a({
        el: "#individual_award",
        data: function () {
          return {
            elementary1Items: o.a,
            elementary2Items: o.b,
            juniorItems: o.c,
            showModal: !1,
            selectedId: "",
            selectedIndex: void 0,
          };
        },
        computed: {
          selectedItem: function () {
            var e = this;
            return "" === this.selectedId
              ? {}
              : this.elementary1Items
                  .concat(this.elementary2Items, this.juniorItems)
                  .find(function (t) {
                    return t.id === e.selectedId;
                  });
          },
        },
        methods: {
          onClickItem: function (e, t) {
            (this.selectedId = e),
              (this.selectedIndex = t),
              (this.showModal = !0);
          },
          closeModal: function () {
            this.showModal = !1;
          },
        },
      });
  },
  function (e, t, n) {
    "use strict";
    (function (e, n) {
      function r(e) {
        return void 0 === e || null === e;
      }
      function o(e) {
        return void 0 !== e && null !== e;
      }
      function i(e) {
        return !0 === e;
      }
      function a(e) {
        return !1 === e;
      }
      function s(e) {
        return (
          "string" == typeof e ||
          "number" == typeof e ||
          "symbol" == typeof e ||
          "boolean" == typeof e
        );
      }
      function c(e) {
        return null !== e && "object" == typeof e;
      }
      function l(e) {
        return "[object Object]" === Ci.call(e);
      }
      function u(e) {
        return "[object RegExp]" === Ci.call(e);
      }
      function f(e) {
        var t = parseFloat(String(e));
        return t >= 0 && Math.floor(t) === t && isFinite(e);
      }
      function p(e) {
        return (
          o(e) && "function" == typeof e.then && "function" == typeof e.catch
        );
      }
      function d(e) {
        return null == e
          ? ""
          : Array.isArray(e) || (l(e) && e.toString === Ci)
          ? JSON.stringify(e, null, 2)
          : String(e);
      }
      function v(e) {
        var t = parseFloat(e);
        return isNaN(t) ? e : t;
      }
      function m(e, t) {
        for (
          var n = Object.create(null), r = e.split(","), o = 0;
          o < r.length;
          o++
        )
          n[r[o]] = !0;
        return t
          ? function (e) {
              return n[e.toLowerCase()];
            }
          : function (e) {
              return n[e];
            };
      }
      function h(e, t) {
        if (e.length) {
          var n = e.indexOf(t);
          if (n > -1) return e.splice(n, 1);
        }
      }
      function y(e, t) {
        return Ti.call(e, t);
      }
      function b(e) {
        var t = Object.create(null);
        return function (n) {
          return t[n] || (t[n] = e(n));
        };
      }
      function g(e, t) {
        function n(n) {
          var r = arguments.length;
          return r ? (r > 1 ? e.apply(t, arguments) : e.call(t, n)) : e.call(t);
        }
        return (n._length = e.length), n;
      }
      function _(e, t) {
        return e.bind(t);
      }
      function x(e, t) {
        t = t || 0;
        for (var n = e.length - t, r = new Array(n); n--; ) r[n] = e[n + t];
        return r;
      }
      function k(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }
      function $(e) {
        for (var t = {}, n = 0; n < e.length; n++) e[n] && k(t, e[n]);
        return t;
      }
      function w(e, t, n) {}
      function C(e, t) {
        if (e === t) return !0;
        var n = c(e),
          r = c(t);
        if (!n || !r) return !n && !r && String(e) === String(t);
        try {
          var o = Array.isArray(e),
            i = Array.isArray(t);
          if (o && i)
            return (
              e.length === t.length &&
              e.every(function (e, n) {
                return C(e, t[n]);
              })
            );
          if (e instanceof Date && t instanceof Date)
            return e.getTime() === t.getTime();
          if (o || i) return !1;
          var a = Object.keys(e),
            s = Object.keys(t);
          return (
            a.length === s.length &&
            a.every(function (n) {
              return C(e[n], t[n]);
            })
          );
        } catch (e) {
          return !1;
        }
      }
      function A(e, t) {
        for (var n = 0; n < e.length; n++) if (C(e[n], t)) return n;
        return -1;
      }
      function O(e) {
        var t = !1;
        return function () {
          t || ((t = !0), e.apply(this, arguments));
        };
      }
      function T(e) {
        var t = (e + "").charCodeAt(0);
        return 36 === t || 95 === t;
      }
      function S(e, t, n, r) {
        Object.defineProperty(e, t, {
          value: n,
          enumerable: !!r,
          writable: !0,
          configurable: !0,
        });
      }
      function j(e) {
        if (!Ui.test(e)) {
          var t = e.split(".");
          return function (e) {
            for (var n = 0; n < t.length; n++) {
              if (!e) return;
              e = e[t[n]];
            }
            return e;
          };
        }
      }
      function I(e) {
        return "function" == typeof e && /native code/.test(e.toString());
      }
      function E(e) {
        ua.push(e), (la.target = e);
      }
      function N() {
        ua.pop(), (la.target = ua[ua.length - 1]);
      }
      function M(e) {
        return new fa(void 0, void 0, void 0, String(e));
      }
      function L(e) {
        var t = new fa(
          e.tag,
          e.data,
          e.children && e.children.slice(),
          e.text,
          e.elm,
          e.context,
          e.componentOptions,
          e.asyncFactory
        );
        return (
          (t.ns = e.ns),
          (t.isStatic = e.isStatic),
          (t.key = e.key),
          (t.isComment = e.isComment),
          (t.fnContext = e.fnContext),
          (t.fnOptions = e.fnOptions),
          (t.fnScopeId = e.fnScopeId),
          (t.asyncMeta = e.asyncMeta),
          (t.isCloned = !0),
          t
        );
      }
      function D(e) {
        ya = e;
      }
      function P(e, t) {
        e.__proto__ = t;
      }
      function F(e, t, n) {
        for (var r = 0, o = n.length; r < o; r++) {
          var i = n[r];
          S(e, i, t[i]);
        }
      }
      function R(e, t) {
        if (c(e) && !(e instanceof fa)) {
          var n;
          return (
            y(e, "__ob__") && e.__ob__ instanceof ba
              ? (n = e.__ob__)
              : ya &&
                !oa() &&
                (Array.isArray(e) || l(e)) &&
                Object.isExtensible(e) &&
                !e._isVue &&
                (n = new ba(e)),
            t && n && n.vmCount++,
            n
          );
        }
      }
      function H(e, t, n, r, o) {
        var i = new la(),
          a = Object.getOwnPropertyDescriptor(e, t);
        if (!a || !1 !== a.configurable) {
          var s = a && a.get,
            c = a && a.set;
          (s && !c) || 2 !== arguments.length || (n = e[t]);
          var l = !o && R(n);
          Object.defineProperty(e, t, {
            enumerable: !0,
            configurable: !0,
            get: function () {
              var t = s ? s.call(e) : n;
              return (
                la.target &&
                  (i.depend(), l && (l.dep.depend(), Array.isArray(t) && z(t))),
                t
              );
            },
            set: function (t) {
              var r = s ? s.call(e) : n;
              t === r ||
                (t !== t && r !== r) ||
                (s && !c) ||
                (c ? c.call(e, t) : (n = t), (l = !o && R(t)), i.notify());
            },
          });
        }
      }
      function B(e, t, n) {
        if (Array.isArray(e) && f(t))
          return (e.length = Math.max(e.length, t)), e.splice(t, 1, n), n;
        if (t in e && !(t in Object.prototype)) return (e[t] = n), n;
        var r = e.__ob__;
        return e._isVue || (r && r.vmCount)
          ? n
          : r
          ? (H(r.value, t, n), r.dep.notify(), n)
          : ((e[t] = n), n);
      }
      function U(e, t) {
        if (Array.isArray(e) && f(t)) return void e.splice(t, 1);
        var n = e.__ob__;
        e._isVue ||
          (n && n.vmCount) ||
          (y(e, t) && (delete e[t], n && n.dep.notify()));
      }
      function z(e) {
        for (var t = void 0, n = 0, r = e.length; n < r; n++)
          (t = e[n]),
            t && t.__ob__ && t.__ob__.dep.depend(),
            Array.isArray(t) && z(t);
      }
      function V(e, t) {
        if (!t) return e;
        for (
          var n, r, o, i = aa ? Reflect.ownKeys(t) : Object.keys(t), a = 0;
          a < i.length;
          a++
        )
          "__ob__" !== (n = i[a]) &&
            ((r = e[n]),
            (o = t[n]),
            y(e, n) ? r !== o && l(r) && l(o) && V(r, o) : B(e, n, o));
        return e;
      }
      function K(e, t, n) {
        return n
          ? function () {
              var r = "function" == typeof t ? t.call(n, n) : t,
                o = "function" == typeof e ? e.call(n, n) : e;
              return r ? V(r, o) : o;
            }
          : t
          ? e
            ? function () {
                return V(
                  "function" == typeof t ? t.call(this, this) : t,
                  "function" == typeof e ? e.call(this, this) : e
                );
              }
            : t
          : e;
      }
      function J(e, t) {
        var n = t ? (e ? e.concat(t) : Array.isArray(t) ? t : [t]) : e;
        return n ? q(n) : n;
      }
      function q(e) {
        for (var t = [], n = 0; n < e.length; n++)
          -1 === t.indexOf(e[n]) && t.push(e[n]);
        return t;
      }
      function W(e, t, n, r) {
        var o = Object.create(e || null);
        return t ? k(o, t) : o;
      }
      function Z(e, t) {
        var n = e.props;
        if (n) {
          var r,
            o,
            i,
            a = {};
          if (Array.isArray(n))
            for (r = n.length; r--; )
              "string" == typeof (o = n[r]) &&
                ((i = ji(o)), (a[i] = { type: null }));
          else if (l(n))
            for (var s in n)
              (o = n[s]), (i = ji(s)), (a[i] = l(o) ? o : { type: o });
          e.props = a;
        }
      }
      function G(e, t) {
        var n = e.inject;
        if (n) {
          var r = (e.inject = {});
          if (Array.isArray(n))
            for (var o = 0; o < n.length; o++) r[n[o]] = { from: n[o] };
          else if (l(n))
            for (var i in n) {
              var a = n[i];
              r[i] = l(a) ? k({ from: i }, a) : { from: a };
            }
        }
      }
      function X(e) {
        var t = e.directives;
        if (t)
          for (var n in t) {
            var r = t[n];
            "function" == typeof r && (t[n] = { bind: r, update: r });
          }
      }
      function Y(e, t, n) {
        function r(r) {
          var o = ga[r] || xa;
          s[r] = o(e[r], t[r], n, r);
        }
        if (
          ("function" == typeof t && (t = t.options),
          Z(t, n),
          G(t, n),
          X(t),
          !t._base && (t.extends && (e = Y(e, t.extends, n)), t.mixins))
        )
          for (var o = 0, i = t.mixins.length; o < i; o++)
            e = Y(e, t.mixins[o], n);
        var a,
          s = {};
        for (a in e) r(a);
        for (a in t) y(e, a) || r(a);
        return s;
      }
      function Q(e, t, n, r) {
        if ("string" == typeof n) {
          var o = e[t];
          if (y(o, n)) return o[n];
          var i = ji(n);
          if (y(o, i)) return o[i];
          var a = Ii(i);
          if (y(o, a)) return o[a];
          return o[n] || o[i] || o[a];
        }
      }
      function ee(e, t, n, r) {
        var o = t[e],
          i = !y(n, e),
          a = n[e],
          s = oe(Boolean, o.type);
        if (s > -1)
          if (i && !y(o, "default")) a = !1;
          else if ("" === a || a === Ni(e)) {
            var c = oe(String, o.type);
            (c < 0 || s < c) && (a = !0);
          }
        if (void 0 === a) {
          a = te(r, o, e);
          var l = ya;
          D(!0), R(a), D(l);
        }
        return a;
      }
      function te(e, t, n) {
        if (y(t, "default")) {
          var r = t.default;
          return e &&
            e.$options.propsData &&
            void 0 === e.$options.propsData[n] &&
            void 0 !== e._props[n]
            ? e._props[n]
            : "function" == typeof r && "Function" !== ne(t.type)
            ? r.call(e)
            : r;
        }
      }
      function ne(e) {
        var t = e && e.toString().match(/^\s*function (\w+)/);
        return t ? t[1] : "";
      }
      function re(e, t) {
        return ne(e) === ne(t);
      }
      function oe(e, t) {
        if (!Array.isArray(t)) return re(t, e) ? 0 : -1;
        for (var n = 0, r = t.length; n < r; n++) if (re(t[n], e)) return n;
        return -1;
      }
      function ie(e, t, n) {
        E();
        try {
          if (t)
            for (var r = t; (r = r.$parent); ) {
              var o = r.$options.errorCaptured;
              if (o)
                for (var i = 0; i < o.length; i++)
                  try {
                    var a = !1 === o[i].call(r, e, t, n);
                    if (a) return;
                  } catch (e) {
                    se(e, r, "errorCaptured hook");
                  }
            }
          se(e, t, n);
        } finally {
          N();
        }
      }
      function ae(e, t, n, r, o) {
        var i;
        try {
          (i = n ? e.apply(t, n) : e.call(t)),
            i &&
              !i._isVue &&
              p(i) &&
              !i._handled &&
              (i.catch(function (e) {
                return ie(e, r, o + " (Promise/async)");
              }),
              (i._handled = !0));
        } catch (e) {
          ie(e, r, o);
        }
        return i;
      }
      function se(e, t, n) {
        if (Hi.errorHandler)
          try {
            return Hi.errorHandler.call(null, e, t, n);
          } catch (t) {
            t !== e && ce(t, null, "config.errorHandler");
          }
        ce(e, t, n);
      }
      function ce(e, t, n) {
        if ((!Vi && !Ki) || "undefined" == typeof console) throw e;
      }
      function le() {
        wa = !1;
        var e = $a.slice(0);
        $a.length = 0;
        for (var t = 0; t < e.length; t++) e[t]();
      }
      function ue(e, t) {
        var n;
        if (
          ($a.push(function () {
            if (e)
              try {
                e.call(t);
              } catch (e) {
                ie(e, t, "nextTick");
              }
            else n && n(t);
          }),
          wa || ((wa = !0), _a()),
          !e && "undefined" != typeof Promise)
        )
          return new Promise(function (e) {
            n = e;
          });
      }
      function fe(e) {
        pe(e, Sa), Sa.clear();
      }
      function pe(e, t) {
        var n,
          r,
          o = Array.isArray(e);
        if (!((!o && !c(e)) || Object.isFrozen(e) || e instanceof fa)) {
          if (e.__ob__) {
            var i = e.__ob__.dep.id;
            if (t.has(i)) return;
            t.add(i);
          }
          if (o) for (n = e.length; n--; ) pe(e[n], t);
          else for (r = Object.keys(e), n = r.length; n--; ) pe(e[r[n]], t);
        }
      }
      function de(e, t) {
        function n() {
          var e = arguments,
            r = n.fns;
          if (!Array.isArray(r))
            return ae(r, null, arguments, t, "v-on handler");
          for (var o = r.slice(), i = 0; i < o.length; i++)
            ae(o[i], null, e, t, "v-on handler");
        }
        return (n.fns = e), n;
      }
      function ve(e, t, n, o, a, s) {
        var c, l, u, f;
        for (c in e)
          (l = e[c]),
            (u = t[c]),
            (f = ja(c)),
            r(l) ||
              (r(u)
                ? (r(l.fns) && (l = e[c] = de(l, s)),
                  i(f.once) && (l = e[c] = a(f.name, l, f.capture)),
                  n(f.name, l, f.capture, f.passive, f.params))
                : l !== u && ((u.fns = l), (e[c] = u)));
        for (c in t) r(e[c]) && ((f = ja(c)), o(f.name, t[c], f.capture));
      }
      function me(e, t, n) {
        function a() {
          n.apply(this, arguments), h(s.fns, a);
        }
        e instanceof fa && (e = e.data.hook || (e.data.hook = {}));
        var s,
          c = e[t];
        r(c)
          ? (s = de([a]))
          : o(c.fns) && i(c.merged)
          ? ((s = c), s.fns.push(a))
          : (s = de([c, a])),
          (s.merged = !0),
          (e[t] = s);
      }
      function he(e, t, n) {
        var i = t.options.props;
        if (!r(i)) {
          var a = {},
            s = e.attrs,
            c = e.props;
          if (o(s) || o(c))
            for (var l in i) {
              var u = Ni(l);
              ye(a, c, l, u, !0) || ye(a, s, l, u, !1);
            }
          return a;
        }
      }
      function ye(e, t, n, r, i) {
        if (o(t)) {
          if (y(t, n)) return (e[n] = t[n]), i || delete t[n], !0;
          if (y(t, r)) return (e[n] = t[r]), i || delete t[r], !0;
        }
        return !1;
      }
      function be(e) {
        for (var t = 0; t < e.length; t++)
          if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
        return e;
      }
      function ge(e) {
        return s(e) ? [M(e)] : Array.isArray(e) ? xe(e) : void 0;
      }
      function _e(e) {
        return o(e) && o(e.text) && a(e.isComment);
      }
      function xe(e, t) {
        var n,
          a,
          c,
          l,
          u = [];
        for (n = 0; n < e.length; n++)
          (a = e[n]),
            r(a) ||
              "boolean" == typeof a ||
              ((c = u.length - 1),
              (l = u[c]),
              Array.isArray(a)
                ? a.length > 0 &&
                  ((a = xe(a, (t || "") + "_" + n)),
                  _e(a[0]) &&
                    _e(l) &&
                    ((u[c] = M(l.text + a[0].text)), a.shift()),
                  u.push.apply(u, a))
                : s(a)
                ? _e(l)
                  ? (u[c] = M(l.text + a))
                  : "" !== a && u.push(M(a))
                : _e(a) && _e(l)
                ? (u[c] = M(l.text + a.text))
                : (i(e._isVList) &&
                    o(a.tag) &&
                    r(a.key) &&
                    o(t) &&
                    (a.key = "__vlist" + t + "_" + n + "__"),
                  u.push(a)));
        return u;
      }
      function ke(e) {
        var t = e.$options.provide;
        t && (e._provided = "function" == typeof t ? t.call(e) : t);
      }
      function $e(e) {
        var t = we(e.$options.inject, e);
        t &&
          (D(!1),
          Object.keys(t).forEach(function (n) {
            H(e, n, t[n]);
          }),
          D(!0));
      }
      function we(e, t) {
        if (e) {
          for (
            var n = Object.create(null),
              r = aa ? Reflect.ownKeys(e) : Object.keys(e),
              o = 0;
            o < r.length;
            o++
          ) {
            var i = r[o];
            if ("__ob__" !== i) {
              for (var a = e[i].from, s = t; s; ) {
                if (s._provided && y(s._provided, a)) {
                  n[i] = s._provided[a];
                  break;
                }
                s = s.$parent;
              }
              if (!s && "default" in e[i]) {
                var c = e[i].default;
                n[i] = "function" == typeof c ? c.call(t) : c;
              }
            }
          }
          return n;
        }
      }
      function Ce(e, t) {
        if (!e || !e.length) return {};
        for (var n = {}, r = 0, o = e.length; r < o; r++) {
          var i = e[r],
            a = i.data;
          if (
            (a && a.attrs && a.attrs.slot && delete a.attrs.slot,
            (i.context !== t && i.fnContext !== t) || !a || null == a.slot)
          )
            (n.default || (n.default = [])).push(i);
          else {
            var s = a.slot,
              c = n[s] || (n[s] = []);
            "template" === i.tag
              ? c.push.apply(c, i.children || [])
              : c.push(i);
          }
        }
        for (var l in n) n[l].every(Ae) && delete n[l];
        return n;
      }
      function Ae(e) {
        return (e.isComment && !e.asyncFactory) || " " === e.text;
      }
      function Oe(e, t, n) {
        var r,
          o = Object.keys(t).length > 0,
          i = e ? !!e.$stable : !o,
          a = e && e.$key;
        if (e) {
          if (e._normalized) return e._normalized;
          if (i && n && n !== wi && a === n.$key && !o && !n.$hasNormal)
            return n;
          r = {};
          for (var s in e) e[s] && "$" !== s[0] && (r[s] = Te(t, s, e[s]));
        } else r = {};
        for (var c in t) c in r || (r[c] = Se(t, c));
        return (
          e && Object.isExtensible(e) && (e._normalized = r),
          S(r, "$stable", i),
          S(r, "$key", a),
          S(r, "$hasNormal", o),
          r
        );
      }
      function Te(e, t, n) {
        var r = function () {
          var e = arguments.length ? n.apply(null, arguments) : n({});
          return (
            (e = e && "object" == typeof e && !Array.isArray(e) ? [e] : ge(e)),
            e && (0 === e.length || (1 === e.length && e[0].isComment))
              ? void 0
              : e
          );
        };
        return (
          n.proxy &&
            Object.defineProperty(e, t, {
              get: r,
              enumerable: !0,
              configurable: !0,
            }),
          r
        );
      }
      function Se(e, t) {
        return function () {
          return e[t];
        };
      }
      function je(e, t) {
        var n, r, i, a, s;
        if (Array.isArray(e) || "string" == typeof e)
          for (n = new Array(e.length), r = 0, i = e.length; r < i; r++)
            n[r] = t(e[r], r);
        else if ("number" == typeof e)
          for (n = new Array(e), r = 0; r < e; r++) n[r] = t(r + 1, r);
        else if (c(e))
          if (aa && e[Symbol.iterator]) {
            n = [];
            for (var l = e[Symbol.iterator](), u = l.next(); !u.done; )
              n.push(t(u.value, n.length)), (u = l.next());
          } else
            for (
              a = Object.keys(e), n = new Array(a.length), r = 0, i = a.length;
              r < i;
              r++
            )
              (s = a[r]), (n[r] = t(e[s], s, r));
        return o(n) || (n = []), (n._isVList = !0), n;
      }
      function Ie(e, t, n, r) {
        var o,
          i = this.$scopedSlots[e];
        i
          ? ((n = n || {}), r && (n = k(k({}, r), n)), (o = i(n) || t))
          : (o = this.$slots[e] || t);
        var a = n && n.slot;
        return a ? this.$createElement("template", { slot: a }, o) : o;
      }
      function Ee(e) {
        return Q(this.$options, "filters", e, !0) || Di;
      }
      function Ne(e, t) {
        return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t;
      }
      function Me(e, t, n, r, o) {
        var i = Hi.keyCodes[t] || n;
        return o && r && !Hi.keyCodes[t]
          ? Ne(o, r)
          : i
          ? Ne(i, e)
          : r
          ? Ni(r) !== t
          : void 0;
      }
      function Le(e, t, n, r, o) {
        if (n)
          if (c(n)) {
            Array.isArray(n) && (n = $(n));
            var i;
            for (var a in n)
              !(function (a) {
                if ("class" === a || "style" === a || Oi(a)) i = e;
                else {
                  var s = e.attrs && e.attrs.type;
                  i =
                    r || Hi.mustUseProp(t, s, a)
                      ? e.domProps || (e.domProps = {})
                      : e.attrs || (e.attrs = {});
                }
                var c = ji(a),
                  l = Ni(a);
                if (!(c in i || l in i) && ((i[a] = n[a]), o)) {
                  (e.on || (e.on = {}))["update:" + a] = function (e) {
                    n[a] = e;
                  };
                }
              })(a);
          }
        return e;
      }
      function De(e, t) {
        var n = this._staticTrees || (this._staticTrees = []),
          r = n[e];
        return r && !t
          ? r
          : ((r = n[e] =
              this.$options.staticRenderFns[e].call(
                this._renderProxy,
                null,
                this
              )),
            Fe(r, "__static__" + e, !1),
            r);
      }
      function Pe(e, t, n) {
        return Fe(e, "__once__" + t + (n ? "_" + n : ""), !0), e;
      }
      function Fe(e, t, n) {
        if (Array.isArray(e))
          for (var r = 0; r < e.length; r++)
            e[r] && "string" != typeof e[r] && Re(e[r], t + "_" + r, n);
        else Re(e, t, n);
      }
      function Re(e, t, n) {
        (e.isStatic = !0), (e.key = t), (e.isOnce = n);
      }
      function He(e, t) {
        if (t)
          if (l(t)) {
            var n = (e.on = e.on ? k({}, e.on) : {});
            for (var r in t) {
              var o = n[r],
                i = t[r];
              n[r] = o ? [].concat(o, i) : i;
            }
          }
        return e;
      }
      function Be(e, t, n, r) {
        t = t || { $stable: !n };
        for (var o = 0; o < e.length; o++) {
          var i = e[o];
          Array.isArray(i)
            ? Be(i, t, n)
            : i && (i.proxy && (i.fn.proxy = !0), (t[i.key] = i.fn));
        }
        return r && (t.$key = r), t;
      }
      function Ue(e, t) {
        for (var n = 0; n < t.length; n += 2) {
          var r = t[n];
          "string" == typeof r && r && (e[t[n]] = t[n + 1]);
        }
        return e;
      }
      function ze(e, t) {
        return "string" == typeof e ? t + e : e;
      }
      function Ve(e) {
        (e._o = Pe),
          (e._n = v),
          (e._s = d),
          (e._l = je),
          (e._t = Ie),
          (e._q = C),
          (e._i = A),
          (e._m = De),
          (e._f = Ee),
          (e._k = Me),
          (e._b = Le),
          (e._v = M),
          (e._e = da),
          (e._u = Be),
          (e._g = He),
          (e._d = Ue),
          (e._p = ze);
      }
      function Ke(e, t, n, r, o) {
        var a,
          s = this,
          c = o.options;
        y(r, "_uid")
          ? ((a = Object.create(r)), (a._original = r))
          : ((a = r), (r = r._original));
        var l = i(c._compiled),
          u = !l;
        (this.data = e),
          (this.props = t),
          (this.children = n),
          (this.parent = r),
          (this.listeners = e.on || wi),
          (this.injections = we(c.inject, r)),
          (this.slots = function () {
            return (
              s.$slots || Oe(e.scopedSlots, (s.$slots = Ce(n, r))), s.$slots
            );
          }),
          Object.defineProperty(this, "scopedSlots", {
            enumerable: !0,
            get: function () {
              return Oe(e.scopedSlots, this.slots());
            },
          }),
          l &&
            ((this.$options = c),
            (this.$slots = this.slots()),
            (this.$scopedSlots = Oe(e.scopedSlots, this.$slots))),
          c._scopeId
            ? (this._c = function (e, t, n, o) {
                var i = et(a, e, t, n, o, u);
                return (
                  i &&
                    !Array.isArray(i) &&
                    ((i.fnScopeId = c._scopeId), (i.fnContext = r)),
                  i
                );
              })
            : (this._c = function (e, t, n, r) {
                return et(a, e, t, n, r, u);
              });
      }
      function Je(e, t, n, r, i) {
        var a = e.options,
          s = {},
          c = a.props;
        if (o(c)) for (var l in c) s[l] = ee(l, c, t || wi);
        else o(n.attrs) && We(s, n.attrs), o(n.props) && We(s, n.props);
        var u = new Ke(n, s, i, r, e),
          f = a.render.call(null, u._c, u);
        if (f instanceof fa) return qe(f, n, u.parent, a, u);
        if (Array.isArray(f)) {
          for (
            var p = ge(f) || [], d = new Array(p.length), v = 0;
            v < p.length;
            v++
          )
            d[v] = qe(p[v], n, u.parent, a, u);
          return d;
        }
      }
      function qe(e, t, n, r, o) {
        var i = L(e);
        return (
          (i.fnContext = n),
          (i.fnOptions = r),
          t.slot && ((i.data || (i.data = {})).slot = t.slot),
          i
        );
      }
      function We(e, t) {
        for (var n in t) e[ji(n)] = t[n];
      }
      function Ze(e, t, n, a, s) {
        if (!r(e)) {
          var l = n.$options._base;
          if ((c(e) && (e = l.extend(e)), "function" == typeof e)) {
            var u;
            if (r(e.cid) && ((u = e), void 0 === (e = st(u, l))))
              return at(u, t, n, a, s);
            (t = t || {}), Ut(e), o(t.model) && Qe(e.options, t);
            var f = he(t, e, s);
            if (i(e.options.functional)) return Je(e, f, t, n, a);
            var p = t.on;
            if (((t.on = t.nativeOn), i(e.options.abstract))) {
              var d = t.slot;
              (t = {}), d && (t.slot = d);
            }
            Xe(t);
            var v = e.options.name || s;
            return new fa(
              "vue-component-" + e.cid + (v ? "-" + v : ""),
              t,
              void 0,
              void 0,
              void 0,
              n,
              { Ctor: e, propsData: f, listeners: p, tag: s, children: a },
              u
            );
          }
        }
      }
      function Ge(e, t) {
        var n = { _isComponent: !0, _parentVnode: e, parent: t },
          r = e.data.inlineTemplate;
        return (
          o(r) &&
            ((n.render = r.render), (n.staticRenderFns = r.staticRenderFns)),
          new e.componentOptions.Ctor(n)
        );
      }
      function Xe(e) {
        for (var t = e.hook || (e.hook = {}), n = 0; n < Na.length; n++) {
          var r = Na[n],
            o = t[r],
            i = Ea[r];
          o === i || (o && o._merged) || (t[r] = o ? Ye(i, o) : i);
        }
      }
      function Ye(e, t) {
        var n = function (n, r) {
          e(n, r), t(n, r);
        };
        return (n._merged = !0), n;
      }
      function Qe(e, t) {
        var n = (e.model && e.model.prop) || "value",
          r = (e.model && e.model.event) || "input";
        (t.attrs || (t.attrs = {}))[n] = t.model.value;
        var i = t.on || (t.on = {}),
          a = i[r],
          s = t.model.callback;
        o(a)
          ? (Array.isArray(a) ? -1 === a.indexOf(s) : a !== s) &&
            (i[r] = [s].concat(a))
          : (i[r] = s);
      }
      function et(e, t, n, r, o, a) {
        return (
          (Array.isArray(n) || s(n)) && ((o = r), (r = n), (n = void 0)),
          i(a) && (o = La),
          tt(e, t, n, r, o)
        );
      }
      function tt(e, t, n, r, i) {
        if (o(n) && o(n.__ob__)) return da();
        if ((o(n) && o(n.is) && (t = n.is), !t)) return da();
        Array.isArray(r) &&
          "function" == typeof r[0] &&
          ((n = n || {}), (n.scopedSlots = { default: r[0] }), (r.length = 0)),
          i === La ? (r = ge(r)) : i === Ma && (r = be(r));
        var a, s;
        if ("string" == typeof t) {
          var c;
          (s = (e.$vnode && e.$vnode.ns) || Hi.getTagNamespace(t)),
            (a = Hi.isReservedTag(t)
              ? new fa(Hi.parsePlatformTagName(t), n, r, void 0, void 0, e)
              : (n && n.pre) || !o((c = Q(e.$options, "components", t)))
              ? new fa(t, n, r, void 0, void 0, e)
              : Ze(c, n, e, r, t));
        } else a = Ze(t, n, e, r);
        return Array.isArray(a)
          ? a
          : o(a)
          ? (o(s) && nt(a, s), o(n) && rt(n), a)
          : da();
      }
      function nt(e, t, n) {
        if (
          ((e.ns = t),
          "foreignObject" === e.tag && ((t = void 0), (n = !0)),
          o(e.children))
        )
          for (var a = 0, s = e.children.length; a < s; a++) {
            var c = e.children[a];
            o(c.tag) && (r(c.ns) || (i(n) && "svg" !== c.tag)) && nt(c, t, n);
          }
      }
      function rt(e) {
        c(e.style) && fe(e.style), c(e.class) && fe(e.class);
      }
      function ot(e) {
        (e._vnode = null), (e._staticTrees = null);
        var t = e.$options,
          n = (e.$vnode = t._parentVnode),
          r = n && n.context;
        (e.$slots = Ce(t._renderChildren, r)),
          (e.$scopedSlots = wi),
          (e._c = function (t, n, r, o) {
            return et(e, t, n, r, o, !1);
          }),
          (e.$createElement = function (t, n, r, o) {
            return et(e, t, n, r, o, !0);
          });
        var o = n && n.data;
        H(e, "$attrs", (o && o.attrs) || wi, null, !0),
          H(e, "$listeners", t._parentListeners || wi, null, !0);
      }
      function it(e, t) {
        return (
          (e.__esModule || (aa && "Module" === e[Symbol.toStringTag])) &&
            (e = e.default),
          c(e) ? t.extend(e) : e
        );
      }
      function at(e, t, n, r, o) {
        var i = da();
        return (
          (i.asyncFactory = e),
          (i.asyncMeta = { data: t, context: n, children: r, tag: o }),
          i
        );
      }
      function st(e, t) {
        if (i(e.error) && o(e.errorComp)) return e.errorComp;
        if (o(e.resolved)) return e.resolved;
        var n = Da;
        if (
          (n && o(e.owners) && -1 === e.owners.indexOf(n) && e.owners.push(n),
          i(e.loading) && o(e.loadingComp))
        )
          return e.loadingComp;
        if (n && !o(e.owners)) {
          var a = (e.owners = [n]),
            s = !0,
            l = null,
            u = null;
          n.$on("hook:destroyed", function () {
            return h(a, n);
          });
          var f = function (e) {
              for (var t = 0, n = a.length; t < n; t++) a[t].$forceUpdate();
              e &&
                ((a.length = 0),
                null !== l && (clearTimeout(l), (l = null)),
                null !== u && (clearTimeout(u), (u = null)));
            },
            d = O(function (n) {
              (e.resolved = it(n, t)), s ? (a.length = 0) : f(!0);
            }),
            v = O(function (t) {
              o(e.errorComp) && ((e.error = !0), f(!0));
            }),
            m = e(d, v);
          return (
            c(m) &&
              (p(m)
                ? r(e.resolved) && m.then(d, v)
                : p(m.component) &&
                  (m.component.then(d, v),
                  o(m.error) && (e.errorComp = it(m.error, t)),
                  o(m.loading) &&
                    ((e.loadingComp = it(m.loading, t)),
                    0 === m.delay
                      ? (e.loading = !0)
                      : (l = setTimeout(function () {
                          (l = null),
                            r(e.resolved) &&
                              r(e.error) &&
                              ((e.loading = !0), f(!1));
                        }, m.delay || 200))),
                  o(m.timeout) &&
                    (u = setTimeout(function () {
                      (u = null), r(e.resolved) && v(null);
                    }, m.timeout)))),
            (s = !1),
            e.loading ? e.loadingComp : e.resolved
          );
        }
      }
      function ct(e) {
        return e.isComment && e.asyncFactory;
      }
      function lt(e) {
        if (Array.isArray(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            if (o(n) && (o(n.componentOptions) || ct(n))) return n;
          }
      }
      function ut(e) {
        (e._events = Object.create(null)), (e._hasHookEvent = !1);
        var t = e.$options._parentListeners;
        t && vt(e, t);
      }
      function ft(e, t) {
        Ia.$on(e, t);
      }
      function pt(e, t) {
        Ia.$off(e, t);
      }
      function dt(e, t) {
        var n = Ia;
        return function r() {
          null !== t.apply(null, arguments) && n.$off(e, r);
        };
      }
      function vt(e, t, n) {
        (Ia = e), ve(t, n || {}, ft, pt, dt, e), (Ia = void 0);
      }
      function mt(e) {
        var t = Pa;
        return (
          (Pa = e),
          function () {
            Pa = t;
          }
        );
      }
      function ht(e) {
        var t = e.$options,
          n = t.parent;
        if (n && !t.abstract) {
          for (; n.$options.abstract && n.$parent; ) n = n.$parent;
          n.$children.push(e);
        }
        (e.$parent = n),
          (e.$root = n ? n.$root : e),
          (e.$children = []),
          (e.$refs = {}),
          (e._watcher = null),
          (e._inactive = null),
          (e._directInactive = !1),
          (e._isMounted = !1),
          (e._isDestroyed = !1),
          (e._isBeingDestroyed = !1);
      }
      function yt(e, t, n) {
        (e.$el = t),
          e.$options.render || (e.$options.render = da),
          kt(e, "beforeMount");
        var r;
        return (
          (r = function () {
            e._update(e._render(), n);
          }),
          new Wa(
            e,
            r,
            w,
            {
              before: function () {
                e._isMounted && !e._isDestroyed && kt(e, "beforeUpdate");
              },
            },
            !0
          ),
          (n = !1),
          null == e.$vnode && ((e._isMounted = !0), kt(e, "mounted")),
          e
        );
      }
      function bt(e, t, n, r, o) {
        var i = r.data.scopedSlots,
          a = e.$scopedSlots,
          s = !!(
            (i && !i.$stable) ||
            (a !== wi && !a.$stable) ||
            (i && e.$scopedSlots.$key !== i.$key)
          ),
          c = !!(o || e.$options._renderChildren || s);
        if (
          ((e.$options._parentVnode = r),
          (e.$vnode = r),
          e._vnode && (e._vnode.parent = r),
          (e.$options._renderChildren = o),
          (e.$attrs = r.data.attrs || wi),
          (e.$listeners = n || wi),
          t && e.$options.props)
        ) {
          D(!1);
          for (
            var l = e._props, u = e.$options._propKeys || [], f = 0;
            f < u.length;
            f++
          ) {
            var p = u[f],
              d = e.$options.props;
            l[p] = ee(p, d, t, e);
          }
          D(!0), (e.$options.propsData = t);
        }
        n = n || wi;
        var v = e.$options._parentListeners;
        (e.$options._parentListeners = n),
          vt(e, n, v),
          c && ((e.$slots = Ce(o, r.context)), e.$forceUpdate());
      }
      function gt(e) {
        for (; e && (e = e.$parent); ) if (e._inactive) return !0;
        return !1;
      }
      function _t(e, t) {
        if (t) {
          if (((e._directInactive = !1), gt(e))) return;
        } else if (e._directInactive) return;
        if (e._inactive || null === e._inactive) {
          e._inactive = !1;
          for (var n = 0; n < e.$children.length; n++) _t(e.$children[n]);
          kt(e, "activated");
        }
      }
      function xt(e, t) {
        if (!((t && ((e._directInactive = !0), gt(e))) || e._inactive)) {
          e._inactive = !0;
          for (var n = 0; n < e.$children.length; n++) xt(e.$children[n]);
          kt(e, "deactivated");
        }
      }
      function kt(e, t) {
        E();
        var n = e.$options[t],
          r = t + " hook";
        if (n)
          for (var o = 0, i = n.length; o < i; o++) ae(n[o], e, null, e, r);
        e._hasHookEvent && e.$emit("hook:" + t), N();
      }
      function $t() {
        (za = Fa.length = Ra.length = 0), (Ha = {}), (Ba = Ua = !1);
      }
      function wt() {
        (Va = Ka()), (Ua = !0);
        var e, t;
        for (
          Fa.sort(function (e, t) {
            return e.id - t.id;
          }),
            za = 0;
          za < Fa.length;
          za++
        )
          (e = Fa[za]),
            e.before && e.before(),
            (t = e.id),
            (Ha[t] = null),
            e.run();
        var n = Ra.slice(),
          r = Fa.slice();
        $t(), Ot(n), Ct(r), ia && Hi.devtools && ia.emit("flush");
      }
      function Ct(e) {
        for (var t = e.length; t--; ) {
          var n = e[t],
            r = n.vm;
          r._watcher === n &&
            r._isMounted &&
            !r._isDestroyed &&
            kt(r, "updated");
        }
      }
      function At(e) {
        (e._inactive = !1), Ra.push(e);
      }
      function Ot(e) {
        for (var t = 0; t < e.length; t++) (e[t]._inactive = !0), _t(e[t], !0);
      }
      function Tt(e) {
        var t = e.id;
        if (null == Ha[t]) {
          if (((Ha[t] = !0), Ua)) {
            for (var n = Fa.length - 1; n > za && Fa[n].id > e.id; ) n--;
            Fa.splice(n + 1, 0, e);
          } else Fa.push(e);
          Ba || ((Ba = !0), ue(wt));
        }
      }
      function St(e, t, n) {
        (Za.get = function () {
          return this[t][n];
        }),
          (Za.set = function (e) {
            this[t][n] = e;
          }),
          Object.defineProperty(e, n, Za);
      }
      function jt(e) {
        e._watchers = [];
        var t = e.$options;
        t.props && It(e, t.props),
          t.methods && Ft(e, t.methods),
          t.data ? Et(e) : R((e._data = {}), !0),
          t.computed && Mt(e, t.computed),
          t.watch && t.watch !== Qi && Rt(e, t.watch);
      }
      function It(e, t) {
        var n = e.$options.propsData || {},
          r = (e._props = {}),
          o = (e.$options._propKeys = []),
          i = !e.$parent;
        i || D(!1);
        for (var a in t)
          !(function (i) {
            o.push(i);
            var a = ee(i, t, n, e);
            H(r, i, a), i in e || St(e, "_props", i);
          })(a);
        D(!0);
      }
      function Et(e) {
        var t = e.$options.data;
        (t = e._data = "function" == typeof t ? Nt(t, e) : t || {}),
          l(t) || (t = {});
        for (
          var n = Object.keys(t),
            r = e.$options.props,
            o = (e.$options.methods, n.length);
          o--;

        ) {
          var i = n[o];
          (r && y(r, i)) || T(i) || St(e, "_data", i);
        }
        R(t, !0);
      }
      function Nt(e, t) {
        E();
        try {
          return e.call(t, t);
        } catch (e) {
          return ie(e, t, "data()"), {};
        } finally {
          N();
        }
      }
      function Mt(e, t) {
        var n = (e._computedWatchers = Object.create(null)),
          r = oa();
        for (var o in t) {
          var i = t[o],
            a = "function" == typeof i ? i : i.get;
          r || (n[o] = new Wa(e, a || w, w, Ga)), o in e || Lt(e, o, i);
        }
      }
      function Lt(e, t, n) {
        var r = !oa();
        "function" == typeof n
          ? ((Za.get = r ? Dt(t) : Pt(n)), (Za.set = w))
          : ((Za.get = n.get ? (r && !1 !== n.cache ? Dt(t) : Pt(n.get)) : w),
            (Za.set = n.set || w)),
          Object.defineProperty(e, t, Za);
      }
      function Dt(e) {
        return function () {
          var t = this._computedWatchers && this._computedWatchers[e];
          if (t)
            return t.dirty && t.evaluate(), la.target && t.depend(), t.value;
        };
      }
      function Pt(e) {
        return function () {
          return e.call(this, this);
        };
      }
      function Ft(e, t) {
        e.$options.props;
        for (var n in t) e[n] = "function" != typeof t[n] ? w : Mi(t[n], e);
      }
      function Rt(e, t) {
        for (var n in t) {
          var r = t[n];
          if (Array.isArray(r))
            for (var o = 0; o < r.length; o++) Ht(e, n, r[o]);
          else Ht(e, n, r);
        }
      }
      function Ht(e, t, n, r) {
        return (
          l(n) && ((r = n), (n = n.handler)),
          "string" == typeof n && (n = e[n]),
          e.$watch(t, n, r)
        );
      }
      function Bt(e, t) {
        var n = (e.$options = Object.create(e.constructor.options)),
          r = t._parentVnode;
        (n.parent = t.parent), (n._parentVnode = r);
        var o = r.componentOptions;
        (n.propsData = o.propsData),
          (n._parentListeners = o.listeners),
          (n._renderChildren = o.children),
          (n._componentTag = o.tag),
          t.render &&
            ((n.render = t.render), (n.staticRenderFns = t.staticRenderFns));
      }
      function Ut(e) {
        var t = e.options;
        if (e.super) {
          var n = Ut(e.super);
          if (n !== e.superOptions) {
            e.superOptions = n;
            var r = zt(e);
            r && k(e.extendOptions, r),
              (t = e.options = Y(n, e.extendOptions)),
              t.name && (t.components[t.name] = e);
          }
        }
        return t;
      }
      function zt(e) {
        var t,
          n = e.options,
          r = e.sealedOptions;
        for (var o in n) n[o] !== r[o] && (t || (t = {}), (t[o] = n[o]));
        return t;
      }
      function Vt(e) {
        this._init(e);
      }
      function Kt(e) {
        e.use = function (e) {
          var t = this._installedPlugins || (this._installedPlugins = []);
          if (t.indexOf(e) > -1) return this;
          var n = x(arguments, 1);
          return (
            n.unshift(this),
            "function" == typeof e.install
              ? e.install.apply(e, n)
              : "function" == typeof e && e.apply(null, n),
            t.push(e),
            this
          );
        };
      }
      function Jt(e) {
        e.mixin = function (e) {
          return (this.options = Y(this.options, e)), this;
        };
      }
      function qt(e) {
        e.cid = 0;
        var t = 1;
        e.extend = function (e) {
          e = e || {};
          var n = this,
            r = n.cid,
            o = e._Ctor || (e._Ctor = {});
          if (o[r]) return o[r];
          var i = e.name || n.options.name,
            a = function (e) {
              this._init(e);
            };
          return (
            (a.prototype = Object.create(n.prototype)),
            (a.prototype.constructor = a),
            (a.cid = t++),
            (a.options = Y(n.options, e)),
            (a.super = n),
            a.options.props && Wt(a),
            a.options.computed && Zt(a),
            (a.extend = n.extend),
            (a.mixin = n.mixin),
            (a.use = n.use),
            Fi.forEach(function (e) {
              a[e] = n[e];
            }),
            i && (a.options.components[i] = a),
            (a.superOptions = n.options),
            (a.extendOptions = e),
            (a.sealedOptions = k({}, a.options)),
            (o[r] = a),
            a
          );
        };
      }
      function Wt(e) {
        var t = e.options.props;
        for (var n in t) St(e.prototype, "_props", n);
      }
      function Zt(e) {
        var t = e.options.computed;
        for (var n in t) Lt(e.prototype, n, t[n]);
      }
      function Gt(e) {
        Fi.forEach(function (t) {
          e[t] = function (e, n) {
            return n
              ? ("component" === t &&
                  l(n) &&
                  ((n.name = n.name || e), (n = this.options._base.extend(n))),
                "directive" === t &&
                  "function" == typeof n &&
                  (n = { bind: n, update: n }),
                (this.options[t + "s"][e] = n),
                n)
              : this.options[t + "s"][e];
          };
        });
      }
      function Xt(e) {
        return e && (e.Ctor.options.name || e.tag);
      }
      function Yt(e, t) {
        return Array.isArray(e)
          ? e.indexOf(t) > -1
          : "string" == typeof e
          ? e.split(",").indexOf(t) > -1
          : !!u(e) && e.test(t);
      }
      function Qt(e, t) {
        var n = e.cache,
          r = e.keys,
          o = e._vnode;
        for (var i in n) {
          var a = n[i];
          if (a) {
            var s = Xt(a.componentOptions);
            s && !t(s) && en(n, i, r, o);
          }
        }
      }
      function en(e, t, n, r) {
        var o = e[t];
        !o || (r && o.tag === r.tag) || o.componentInstance.$destroy(),
          (e[t] = null),
          h(n, t);
      }
      function tn(e) {
        for (var t = e.data, n = e, r = e; o(r.componentInstance); )
          (r = r.componentInstance._vnode) && r.data && (t = nn(r.data, t));
        for (; o((n = n.parent)); ) n && n.data && (t = nn(t, n.data));
        return rn(t.staticClass, t.class);
      }
      function nn(e, t) {
        return {
          staticClass: on(e.staticClass, t.staticClass),
          class: o(e.class) ? [e.class, t.class] : t.class,
        };
      }
      function rn(e, t) {
        return o(e) || o(t) ? on(e, an(t)) : "";
      }
      function on(e, t) {
        return e ? (t ? e + " " + t : e) : t || "";
      }
      function an(e) {
        return Array.isArray(e)
          ? sn(e)
          : c(e)
          ? cn(e)
          : "string" == typeof e
          ? e
          : "";
      }
      function sn(e) {
        for (var t, n = "", r = 0, i = e.length; r < i; r++)
          o((t = an(e[r]))) && "" !== t && (n && (n += " "), (n += t));
        return n;
      }
      function cn(e) {
        var t = "";
        for (var n in e) e[n] && (t && (t += " "), (t += n));
        return t;
      }
      function ln(e) {
        return ws(e) ? "svg" : "math" === e ? "math" : void 0;
      }
      function un(e) {
        if (!Vi) return !0;
        if (As(e)) return !1;
        if (((e = e.toLowerCase()), null != Os[e])) return Os[e];
        var t = document.createElement(e);
        return e.indexOf("-") > -1
          ? (Os[e] =
              t.constructor === window.HTMLUnknownElement ||
              t.constructor === window.HTMLElement)
          : (Os[e] = /HTMLUnknownElement/.test(t.toString()));
      }
      function fn(e) {
        if ("string" == typeof e) {
          var t = document.querySelector(e);
          return t || document.createElement("div");
        }
        return e;
      }
      function pn(e, t) {
        var n = document.createElement(e);
        return "select" !== e
          ? n
          : (t.data &&
              t.data.attrs &&
              void 0 !== t.data.attrs.multiple &&
              n.setAttribute("multiple", "multiple"),
            n);
      }
      function dn(e, t) {
        return document.createElementNS(ks[e], t);
      }
      function vn(e) {
        return document.createTextNode(e);
      }
      function mn(e) {
        return document.createComment(e);
      }
      function hn(e, t, n) {
        e.insertBefore(t, n);
      }
      function yn(e, t) {
        e.removeChild(t);
      }
      function bn(e, t) {
        e.appendChild(t);
      }
      function gn(e) {
        return e.parentNode;
      }
      function _n(e) {
        return e.nextSibling;
      }
      function xn(e) {
        return e.tagName;
      }
      function kn(e, t) {
        e.textContent = t;
      }
      function $n(e, t) {
        e.setAttribute(t, "");
      }
      function wn(e, t) {
        var n = e.data.ref;
        if (o(n)) {
          var r = e.context,
            i = e.componentInstance || e.elm,
            a = r.$refs;
          t
            ? Array.isArray(a[n])
              ? h(a[n], i)
              : a[n] === i && (a[n] = void 0)
            : e.data.refInFor
            ? Array.isArray(a[n])
              ? a[n].indexOf(i) < 0 && a[n].push(i)
              : (a[n] = [i])
            : (a[n] = i);
        }
      }
      function Cn(e, t) {
        return (
          e.key === t.key &&
          ((e.tag === t.tag &&
            e.isComment === t.isComment &&
            o(e.data) === o(t.data) &&
            An(e, t)) ||
            (i(e.isAsyncPlaceholder) &&
              e.asyncFactory === t.asyncFactory &&
              r(t.asyncFactory.error)))
        );
      }
      function An(e, t) {
        if ("input" !== e.tag) return !0;
        var n,
          r = o((n = e.data)) && o((n = n.attrs)) && n.type,
          i = o((n = t.data)) && o((n = n.attrs)) && n.type;
        return r === i || (Ts(r) && Ts(i));
      }
      function On(e, t, n) {
        var r,
          i,
          a = {};
        for (r = t; r <= n; ++r) (i = e[r].key), o(i) && (a[i] = r);
        return a;
      }
      function Tn(e, t) {
        (e.data.directives || t.data.directives) && Sn(e, t);
      }
      function Sn(e, t) {
        var n,
          r,
          o,
          i = e === Is,
          a = t === Is,
          s = jn(e.data.directives, e.context),
          c = jn(t.data.directives, t.context),
          l = [],
          u = [];
        for (n in c)
          (r = s[n]),
            (o = c[n]),
            r
              ? ((o.oldValue = r.value),
                (o.oldArg = r.arg),
                En(o, "update", t, e),
                o.def && o.def.componentUpdated && u.push(o))
              : (En(o, "bind", t, e), o.def && o.def.inserted && l.push(o));
        if (l.length) {
          var f = function () {
            for (var n = 0; n < l.length; n++) En(l[n], "inserted", t, e);
          };
          i ? me(t, "insert", f) : f();
        }
        if (
          (u.length &&
            me(t, "postpatch", function () {
              for (var n = 0; n < u.length; n++)
                En(u[n], "componentUpdated", t, e);
            }),
          !i)
        )
          for (n in s) c[n] || En(s[n], "unbind", e, e, a);
      }
      function jn(e, t) {
        var n = Object.create(null);
        if (!e) return n;
        var r, o;
        for (r = 0; r < e.length; r++)
          (o = e[r]),
            o.modifiers || (o.modifiers = Ms),
            (n[In(o)] = o),
            (o.def = Q(t.$options, "directives", o.name, !0));
        return n;
      }
      function In(e) {
        return (
          e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".")
        );
      }
      function En(e, t, n, r, o) {
        var i = e.def && e.def[t];
        if (i)
          try {
            i(n.elm, e, n, r, o);
          } catch (r) {
            ie(r, n.context, "directive " + e.name + " " + t + " hook");
          }
      }
      function Nn(e, t) {
        var n = t.componentOptions;
        if (
          !(
            (o(n) && !1 === n.Ctor.options.inheritAttrs) ||
            (r(e.data.attrs) && r(t.data.attrs))
          )
        ) {
          var i,
            a,
            s = t.elm,
            c = e.data.attrs || {},
            l = t.data.attrs || {};
          o(l.__ob__) && (l = t.data.attrs = k({}, l));
          for (i in l) (a = l[i]), c[i] !== a && Mn(s, i, a);
          (Wi || Gi) && l.value !== c.value && Mn(s, "value", l.value);
          for (i in c)
            r(l[i]) &&
              (gs(i)
                ? s.removeAttributeNS(bs, _s(i))
                : vs(i) || s.removeAttribute(i));
        }
      }
      function Mn(e, t, n) {
        e.tagName.indexOf("-") > -1
          ? Ln(e, t, n)
          : ys(t)
          ? xs(n)
            ? e.removeAttribute(t)
            : ((n =
                "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t),
              e.setAttribute(t, n))
          : vs(t)
          ? e.setAttribute(t, hs(t, n))
          : gs(t)
          ? xs(n)
            ? e.removeAttributeNS(bs, _s(t))
            : e.setAttributeNS(bs, t, n)
          : Ln(e, t, n);
      }
      function Ln(e, t, n) {
        if (xs(n)) e.removeAttribute(t);
        else {
          if (
            Wi &&
            !Zi &&
            "TEXTAREA" === e.tagName &&
            "placeholder" === t &&
            "" !== n &&
            !e.__ieph
          ) {
            var r = function (t) {
              t.stopImmediatePropagation(), e.removeEventListener("input", r);
            };
            e.addEventListener("input", r), (e.__ieph = !0);
          }
          e.setAttribute(t, n);
        }
      }
      function Dn(e, t) {
        var n = t.elm,
          i = t.data,
          a = e.data;
        if (
          !(
            r(i.staticClass) &&
            r(i.class) &&
            (r(a) || (r(a.staticClass) && r(a.class)))
          )
        ) {
          var s = tn(t),
            c = n._transitionClasses;
          o(c) && (s = on(s, an(c))),
            s !== n._prevClass &&
              (n.setAttribute("class", s), (n._prevClass = s));
        }
      }
      function Pn(e) {
        function t() {
          (a || (a = [])).push(e.slice(v, o).trim()), (v = o + 1);
        }
        var n,
          r,
          o,
          i,
          a,
          s = !1,
          c = !1,
          l = !1,
          u = !1,
          f = 0,
          p = 0,
          d = 0,
          v = 0;
        for (o = 0; o < e.length; o++)
          if (((r = n), (n = e.charCodeAt(o)), s))
            39 === n && 92 !== r && (s = !1);
          else if (c) 34 === n && 92 !== r && (c = !1);
          else if (l) 96 === n && 92 !== r && (l = !1);
          else if (u) 47 === n && 92 !== r && (u = !1);
          else if (
            124 !== n ||
            124 === e.charCodeAt(o + 1) ||
            124 === e.charCodeAt(o - 1) ||
            f ||
            p ||
            d
          ) {
            switch (n) {
              case 34:
                c = !0;
                break;
              case 39:
                s = !0;
                break;
              case 96:
                l = !0;
                break;
              case 40:
                d++;
                break;
              case 41:
                d--;
                break;
              case 91:
                p++;
                break;
              case 93:
                p--;
                break;
              case 123:
                f++;
                break;
              case 125:
                f--;
            }
            if (47 === n) {
              for (
                var m = o - 1, h = void 0;
                m >= 0 && " " === (h = e.charAt(m));
                m--
              );
              (h && Fs.test(h)) || (u = !0);
            }
          } else void 0 === i ? ((v = o + 1), (i = e.slice(0, o).trim())) : t();
        if ((void 0 === i ? (i = e.slice(0, o).trim()) : 0 !== v && t(), a))
          for (o = 0; o < a.length; o++) i = Fn(i, a[o]);
        return i;
      }
      function Fn(e, t) {
        var n = t.indexOf("(");
        if (n < 0) return '_f("' + t + '")(' + e + ")";
        var r = t.slice(0, n),
          o = t.slice(n + 1);
        return '_f("' + r + '")(' + e + (")" !== o ?"," + o : o);
      }
      function Rn(e, t) {}
      function Hn(e, t) {
        return e
          ? e
              .map(function (e) {
                return e[t];
              })
              .filter(function (e) {
                return e;
              })
          : [];
      }
      function Bn(e, t, n, r, o) {
        (e.props || (e.props = [])).push(
          Xn({ name: t, value: n, dynamic: o }, r)
        ),
          (e.plain = !1);
      }
      function Un(e, t, n, r, o) {
        (o
          ? e.dynamicAttrs || (e.dynamicAttrs = [])
          : e.attrs || (e.attrs = [])
        ).push(Xn({ name: t, value: n, dynamic: o }, r)),
          (e.plain = !1);
      }
      function zn(e, t, n, r) {
        (e.attrsMap[t] = n), e.attrsList.push(Xn({ name: t, value: n }, r));
      }
      function Vn(e, t, n, r, o, i, a, s) {
        (e.directives || (e.directives = [])).push(
          Xn(
            {
              name: t,
              rawName: n,
              value: r,
              arg: o,
              isDynamicArg: i,
              modifiers: a,
            },
            s
          )
        ),
          (e.plain = !1);
      }
      function Kn(e, t, n) {
        return n ? "_p(" + t + ',"' + e + '")' : e + t;
      }
      function Jn(e, t, n, r, o, i, a, s) {
        (r = r || wi),
          r.right
            ? s
              ? (t = "(" + t + ")==='click'?'contextmenu':(" + t + ")")
              : "click" === t && ((t = "contextmenu"), delete r.right)
            : r.middle &&
              (s
                ? (t = "(" + t + ")==='click'?'mouseup':(" + t + ")")
                : "click" === t && (t = "mouseup")),
          r.capture && (delete r.capture, (t = Kn("!", t, s))),
          r.once && (delete r.once, (t = Kn("~", t, s))),
          r.passive && (delete r.passive, (t = Kn("&", t, s)));
        var c;
        r.native
          ? (delete r.native, (c = e.nativeEvents || (e.nativeEvents = {})))
          : (c = e.events || (e.events = {}));
        var l = Xn({ value: n.trim(), dynamic: s }, a);
        r !== wi && (l.modifiers = r);
        var u = c[t];
        Array.isArray(u)
          ? o
            ? u.unshift(l)
            : u.push(l)
          : (c[t] = u ? (o ? [l, u] : [u, l]) : l),
          (e.plain = !1);
      }
      function qn(e, t) {
        return (
          e.rawAttrsMap[":" + t] ||
          e.rawAttrsMap["v-bind:" + t] ||
          e.rawAttrsMap[t]
        );
      }
      function Wn(e, t, n) {
        var r = Zn(e, ":" + t) || Zn(e, "v-bind:" + t);
        if (null != r) return Pn(r);
        if (!1 !== n) {
          var o = Zn(e, t);
          if (null != o) return JSON.stringify(o);
        }
      }
      function Zn(e, t, n) {
        var r;
        if (null != (r = e.attrsMap[t]))
          for (var o = e.attrsList, i = 0, a = o.length; i < a; i++)
            if (o[i].name === t) {
              o.splice(i, 1);
              break;
            }
        return n && delete e.attrsMap[t], r;
      }
      function Gn(e, t) {
        for (var n = e.attrsList, r = 0, o = n.length; r < o; r++) {
          var i = n[r];
          if (t.test(i.name)) return n.splice(r, 1), i;
        }
      }
      function Xn(e, t) {
        return (
          t &&
            (null != t.start && (e.start = t.start),
            null != t.end && (e.end = t.end)),
          e
        );
      }
      function Yn(e, t, n) {
        var r = n || {},
          o = r.number,
          i = r.trim,
          a = "$$v";
        i && (a = "(typeof $$v === 'string'? $$v.trim(): $$v)"),
          o && (a = "_n(" + a + ")");
        var s = Qn(t, a);
        e.model = {
          value: "(" + t + ")",
          expression: JSON.stringify(t),
          callback: "function ($$v) {" + s + "}",
        };
      }
      function Qn(e, t) {
        var n = er(e);
        return null === n.key
          ? e + "=" + t
          : "$set(" + n.exp +", " + n.key +", " + t + ")";
      }
      function er(e) {
        if (
          ((e = e.trim()),
          (ts = e.length),
          e.indexOf("[") < 0 || e.lastIndexOf("]") < ts - 1)
        )
          return (
            (os = e.lastIndexOf(".")),
            os > -1
              ? { exp: e.slice(0, os), key: '"' + e.slice(os + 1) + '"' }
              : { exp: e, key: null }
          );
        for (ns = e, os = is = as = 0; !nr(); )
          (rs = tr()), rr(rs) ? ir(rs) : 91 === rs && or(rs);
        return { exp: e.slice(0, is), key: e.slice(is + 1, as) };
      }
      function tr() {
        return ns.charCodeAt(++os);
      }
      function nr() {
        return os >= ts;
      }
      function rr(e) {
        return 34 === e || 39 === e;
      }
      function or(e) {
        var t = 1;
        for (is = os; !nr(); )
          if (((e = tr()), rr(e))) ir(e);
          else if ((91 === e && t++, 93 === e && t--, 0 === t)) {
            as = os;
            break;
          }
      }
      function ir(e) {
        for (var t = e; !nr() && (e = tr()) !== t; );
      }
      function ar(e, t, n) {
        ss = n;
        var r = t.value,
          o = t.modifiers,
          i = e.tag,
          a = e.attrsMap.type;
        if (e.component) return Yn(e, r, o), !1;
        if ("select" === i) lr(e, r, o);
        else if ("input" === i && "checkbox" === a) sr(e, r, o);
        else if ("input" === i && "radio" === a) cr(e, r, o);
        else if ("input" === i || "textarea" === i) ur(e, r, o);
        else if (!Hi.isReservedTag(i)) return Yn(e, r, o), !1;
        return !0;
      }
      function sr(e, t, n) {
        var r = n && n.number,
          o = Wn(e, "value") || "null",
          i = Wn(e, "true-value") || "true",
          a = Wn(e, "false-value") || "false";
        Bn(
          e,
          "checked",
          "Array.isArray(" +
            t +
            ")?_i(" +
            t +
          "," +
            o +
            ")>-1" +
            ("true" === i ? ":(" + t + ")" : ":_q(" + t +"," + i + ")")
        ),
          Jn(
            e,
            "change",
            "var $$a=" +
              t +
            ",$$el=$event.target,$$c=$$el.checked?(" +
              i +
              "):(" +
              a +
              ");if(Array.isArray($$a)){var $$v=" +
              (r ? "_n(" + o + ")" : o) +
            ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" +
              Qn(t, "$$a.concat([$$v])") +
              ")}else{$$i>-1&&(" +
              Qn(t, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") +
              ")}}else{" +
              Qn(t, "$$c") +
              "}",
            null,
            !0
          );
      }
      function cr(e, t, n) {
        var r = n && n.number,
          o = Wn(e, "value") || "null";
        (o = r ? "_n(" + o + ")" : o),
          Bn(e, "checked", "_q(" + t +"," + o + ")"),
          Jn(e, "change", Qn(t, o), null, !0);
      }
      function lr(e, t, n) {
        var r = n && n.number,
          o =
            'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' +
            (r ? "_n(val)" : "val") +
            "})",
          i = "var $$selectedVal = " + o + ";";
        (i =
          i +
          " " +
          Qn(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]")),
          Jn(e, "change", i, null, !0);
      }
      function ur(e, t, n) {
        var r = e.attrsMap.type,
          o = n || {},
          i = o.lazy,
          a = o.number,
          s = o.trim,
          c = !i && "range" !== r,
          l = i ? "change" : "range" === r ? Rs : "input",
          u = "$event.target.value";
        s && (u = "$event.target.value.trim()"), a && (u = "_n(" + u + ")");
        var f = Qn(t, u);
        c && (f = "if($event.target.composing)return;" + f),
          Bn(e, "value", "(" + t + ")"),
          Jn(e, l, f, null, !0),
          (s || a) && Jn(e, "blur", "$forceUpdate()");
      }
      function fr(e) {
        if (o(e[Rs])) {
          var t = Wi ? "change" : "input";
          (e[t] = [].concat(e[Rs], e[t] || [])), delete e[Rs];
        }
        o(e[Hs]) &&
          ((e.change = [].concat(e[Hs], e.change || [])), delete e[Hs]);
      }
      function pr(e, t, n) {
        var r = cs;
        return function o() {
          null !== t.apply(null, arguments) && vr(e, o, n, r);
        };
      }
      function dr(e, t, n, r) {
        if (Bs) {
          var o = Va,
            i = t;
          t = i._wrapper = function (e) {
            if (
              e.target === e.currentTarget ||
              e.timeStamp >= o ||
              e.timeStamp <= 0 ||
              e.target.ownerDocument !== document
            )
              return i.apply(this, arguments);
          };
        }
        cs.addEventListener(e, t, ea ? { capture: n, passive: r } : n);
      }
      function vr(e, t, n, r) {
        (r || cs).removeEventListener(e, t._wrapper || t, n);
      }
      function mr(e, t) {
        if (!r(e.data.on) || !r(t.data.on)) {
          var n = t.data.on || {},
            o = e.data.on || {};
          (cs = t.elm), fr(n), ve(n, o, dr, vr, pr, t.context), (cs = void 0);
        }
      }
      function hr(e, t) {
        if (!r(e.data.domProps) || !r(t.data.domProps)) {
          var n,
            i,
            a = t.elm,
            s = e.data.domProps || {},
            c = t.data.domProps || {};
          o(c.__ob__) && (c = t.data.domProps = k({}, c));
          for (n in s) n in c || (a[n] = "");
          for (n in c) {
            if (((i = c[n]), "textContent" === n || "innerHTML" === n)) {
              if ((t.children && (t.children.length = 0), i === s[n])) continue;
              1 === a.childNodes.length && a.removeChild(a.childNodes[0]);
            }
            if ("value" === n && "PROGRESS" !== a.tagName) {
              a._value = i;
              var l = r(i) ? "" : String(i);
              yr(a, l) && (a.value = l);
            } else if ("innerHTML" === n && ws(a.tagName) && r(a.innerHTML)) {
              (ls = ls || document.createElement("div")),
                (ls.innerHTML = "<svg>" + i + "</svg>");
              for (var u = ls.firstChild; a.firstChild; )
                a.removeChild(a.firstChild);
              for (; u.firstChild; ) a.appendChild(u.firstChild);
            } else if (i !== s[n])
              try {
                a[n] = i;
              } catch (e) {}
          }
        }
      }
      function yr(e, t) {
        return !e.composing && ("OPTION" === e.tagName || br(e, t) || gr(e, t));
      }
      function br(e, t) {
        var n = !0;
        try {
          n = document.activeElement !== e;
        } catch (e) {}
        return n && e.value !== t;
      }
      function gr(e, t) {
        var n = e.value,
          r = e._vModifiers;
        if (o(r)) {
          if (r.number) return v(n) !== v(t);
          if (r.trim) return n.trim() !== t.trim();
        }
        return n !== t;
      }
      function _r(e) {
        var t = xr(e.style);
        return e.staticStyle ? k(e.staticStyle, t) : t;
      }
      function xr(e) {
        return Array.isArray(e) ? $(e) : "string" == typeof e ? Vs(e) : e;
      }
      function kr(e, t) {
        var n,
          r = {};
        if (t)
          for (var o = e; o.componentInstance; )
            (o = o.componentInstance._vnode) &&
              o.data &&
              (n = _r(o.data)) &&
              k(r, n);
        (n = _r(e.data)) && k(r, n);
        for (var i = e; (i = i.parent); ) i.data && (n = _r(i.data)) && k(r, n);
        return r;
      }
      function $r(e, t) {
        var n = t.data,
          i = e.data;
        if (
          !(r(n.staticStyle) && r(n.style) && r(i.staticStyle) && r(i.style))
        ) {
          var a,
            s,
            c = t.elm,
            l = i.staticStyle,
            u = i.normalizedStyle || i.style || {},
            f = l || u,
            p = xr(t.data.style) || {};
          t.data.normalizedStyle = o(p.__ob__) ? k({}, p) : p;
          var d = kr(t, !0);
          for (s in f) r(d[s]) && qs(c, s, "");
          for (s in d) (a = d[s]) !== f[s] && qs(c, s, null == a ? "" : a);
        }
      }
      function wr(e, t) {
        if (t && (t = t.trim()))
          if (e.classList)
            t.indexOf(" ") > -1
              ? t.split(Xs).forEach(function (t) {
                  return e.classList.add(t);
                })
              : e.classList.add(t);
          else {
            var n = " " + (e.getAttribute("class") || "") + " ";
            n.indexOf(" " + t + " ") < 0 &&
              e.setAttribute("class", (n + t).trim());
          }
      }
      function Cr(e, t) {
        if (t && (t = t.trim()))
          if (e.classList)
            t.indexOf(" ") > -1
              ? t.split(Xs).forEach(function (t) {
                  return e.classList.remove(t);
                })
              : e.classList.remove(t),
              e.classList.length || e.removeAttribute("class");
          else {
            for (
              var n = " " + (e.getAttribute("class") || "") + "",
                r = " " + t + " ";
              n.indexOf(r) >= 0;

            )
              n = n.replace(r, " ");
            (n = n.trim()),
              n ? e.setAttribute("class", n) : e.removeAttribute("class");
          }
      }
      function Ar(e) {
        if (e) {
          if ("object" == typeof e) {
            var t = {};
            return !1 !== e.css && k(t, Ys(e.name || "v")), k(t, e), t;
          }
          return "string" == typeof e ? Ys(e) : void 0;
        }
      }
      function Or(e) {
        ac(function () {
          ac(e);
        });
      }
      function Tr(e, t) {
        var n = e._transitionClasses || (e._transitionClasses = []);
        n.indexOf(t) < 0 && (n.push(t), wr(e, t));
      }
      function Sr(e, t) {
        e._transitionClasses && h(e._transitionClasses, t), Cr(e, t);
      }
      function jr(e, t, n) {
        var r = Ir(e, t),
          o = r.type,
          i = r.timeout,
          a = r.propCount;
        if (!o) return n();
        var s = o === ec ? rc : ic,
          c = 0,
          l = function () {
            e.removeEventListener(s, u), n();
          },
          u = function (t) {
            t.target === e && ++c >= a && l();
          };
        setTimeout(function () {
          c < a && l();
        }, i + 1),
          e.addEventListener(s, u);
      }
      function Ir(e, t) {
        var n,
          r = window.getComputedStyle(e),
          o = (r[nc + "Delay"] || "").split(", "),
          i = (r[nc + "Duration"] || "").split(", "),
          a = Er(o, i),
          s = (r[oc + "Delay"] || "").split(", "),
          c = (r[oc + "Duration"] || "").split(", "),
          l = Er(s, c),
          u = 0,
          f = 0;
        return (
          t === ec
            ? a > 0 && ((n = ec), (u = a), (f = i.length))
            : t === tc
            ? l > 0 && ((n = tc), (u = l), (f = c.length))
            : ((u = Math.max(a, l)),
              (n = u > 0 ? (a > l ? ec : tc) : null),
              (f = n ? (n === ec ? i.length : c.length) : 0)),
          {
            type: n,
            timeout: u,
            propCount: f,
            hasTransform: n === ec && sc.test(r[nc + "Property"]),
          }
        );
      }
      function Er(e, t) {
        for (; e.length < t.length; ) e = e.concat(e);
        return Math.max.apply(
          null,
          t.map(function (t, n) {
            return Nr(t) + Nr(e[n]);
          })
        );
      }
      function Nr(e) {
        return 1e3 * Number(e.slice(0, -1).replace(",", "."));
      }
      function Mr(e, t) {
        var n = e.elm;
        o(n._leaveCb) && ((n._leaveCb.cancelled = !0), n._leaveCb());
        var i = Ar(e.data.transition);
        if (!r(i) && !o(n._enterCb) && 1 === n.nodeType) {
          for (
            var a = i.css,
              s = i.type,
              l = i.enterClass,
              u = i.enterToClass,
              f = i.enterActiveClass,
              p = i.appearClass,
              d = i.appearToClass,
              m = i.appearActiveClass,
              h = i.beforeEnter,
              y = i.enter,
              b = i.afterEnter,
              g = i.enterCancelled,
              _ = i.beforeAppear,
              x = i.appear,
              k = i.afterAppear,
              $ = i.appearCancelled,
              w = i.duration,
              C = Pa,
              A = Pa.$vnode;
            A && A.parent;

          )
            (C = A.context), (A = A.parent);
          var T = !C._isMounted || !e.isRootInsert;
          if (!T || x || "" === x) {
            var S = T && p ? p : l,
              j = T && m ? m : f,
              I = T && d ? d : u,
              E = T ? _ || h : h,
              N = T && "function" == typeof x ? x : y,
              M = T ? k || b : b,
              L = T ? $ || g : g,
              D = v(c(w) ? w.enter : w),
              P = !1 !== a && !Zi,
              F = Pr(N),
              R = (n._enterCb = O(function () {
                P && (Sr(n, I), Sr(n, j)),
                  R.cancelled ? (P && Sr(n, S), L && L(n)) : M && M(n),
                  (n._enterCb = null);
              }));
            e.data.show ||
              me(e, "insert", function () {
                var t = n.parentNode,
                  r = t && t._pending && t._pending[e.key];
                r && r.tag === e.tag && r.elm._leaveCb && r.elm._leaveCb(),
                  N && N(n, R);
              }),
              E && E(n),
              P &&
                (Tr(n, S),
                Tr(n, j),
                Or(function () {
                  Sr(n, S),
                    R.cancelled ||
                      (Tr(n, I), F || (Dr(D) ? setTimeout(R, D) : jr(n, s, R)));
                })),
              e.data.show && (t && t(), N && N(n, R)),
              P || F || R();
          }
        }
      }
      function Lr(e, t) {
        function n() {
          $.cancelled ||
            (!e.data.show &&
              i.parentNode &&
              ((i.parentNode._pending || (i.parentNode._pending = {}))[e.key] =
                e),
            d && d(i),
            _ &&
              (Tr(i, u),
              Tr(i, p),
              Or(function () {
                Sr(i, u),
                  $.cancelled ||
                    (Tr(i, f), x || (Dr(k) ? setTimeout($, k) : jr(i, l, $)));
              })),
            m && m(i, $),
            _ || x || $());
        }
        var i = e.elm;
        o(i._enterCb) && ((i._enterCb.cancelled = !0), i._enterCb());
        var a = Ar(e.data.transition);
        if (r(a) || 1 !== i.nodeType) return t();
        if (!o(i._leaveCb)) {
          var s = a.css,
            l = a.type,
            u = a.leaveClass,
            f = a.leaveToClass,
            p = a.leaveActiveClass,
            d = a.beforeLeave,
            m = a.leave,
            h = a.afterLeave,
            y = a.leaveCancelled,
            b = a.delayLeave,
            g = a.duration,
            _ = !1 !== s && !Zi,
            x = Pr(m),
            k = v(c(g) ? g.leave : g),
            $ = (i._leaveCb = O(function () {
              i.parentNode &&
                i.parentNode._pending &&
                (i.parentNode._pending[e.key] = null),
                _ && (Sr(i, f), Sr(i, p)),
                $.cancelled ? (_ && Sr(i, u), y && y(i)) : (t(), h && h(i)),
                (i._leaveCb = null);
            }));
          b ? b(n) : n();
        }
      }
      function Dr(e) {
        return "number" == typeof e && !isNaN(e);
      }
      function Pr(e) {
        if (r(e)) return !1;
        var t = e.fns;
        return o(t)
          ? Pr(Array.isArray(t) ? t[0] : t)
          : (e._length || e.length) > 1;
      }
      function Fr(e, t) {
        !0 !== t.data.show && Mr(t);
      }
      function Rr(e, t, n) {
        Hr(e, t, n),
          (Wi || Gi) &&
            setTimeout(function () {
              Hr(e, t, n);
            }, 0);
      }
      function Hr(e, t, n) {
        var r = t.value,
          o = e.multiple;
        if (!o || Array.isArray(r)) {
          for (var i, a, s = 0, c = e.options.length; s < c; s++)
            if (((a = e.options[s]), o))
              (i = A(r, Ur(a)) > -1), a.selected !== i && (a.selected = i);
            else if (C(Ur(a), r))
              return void (e.selectedIndex !== s && (e.selectedIndex = s));
          o || (e.selectedIndex = -1);
        }
      }
      function Br(e, t) {
        return t.every(function (t) {
          return !C(t, e);
        });
      }
      function Ur(e) {
        return "_value" in e ? e._value : e.value;
      }
      function zr(e) {
        e.target.composing = !0;
      }
      function Vr(e) {
        e.target.composing &&
          ((e.target.composing = !1), Kr(e.target, "input"));
      }
      function Kr(e, t) {
        var n = document.createEvent("HTMLEvents");
        n.initEvent(t, !0, !0), e.dispatchEvent(n);
      }
      function Jr(e) {
        return !e.componentInstance || (e.data && e.data.transition)
          ? e
          : Jr(e.componentInstance._vnode);
      }
      function qr(e) {
        var t = e && e.componentOptions;
        return t && t.Ctor.options.abstract ? qr(lt(t.children)) : e;
      }
      function Wr(e) {
        var t = {},
          n = e.$options;
        for (var r in n.propsData) t[r] = e[r];
        var o = n._parentListeners;
        for (var i in o) t[ji(i)] = o[i];
        return t;
      }
      function Zr(e, t) {
        if (/\d-keep-alive$/.test(t.tag))
          return e("keep-alive", { props: t.componentOptions.propsData });
      }
      function Gr(e) {
        for (; (e = e.parent); ) if (e.data.transition) return !0;
      }
      function Xr(e, t) {
        return t.key === e.key && t.tag === e.tag;
      }
      function Yr(e) {
        e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb();
      }
      function Qr(e) {
        e.data.newPos = e.elm.getBoundingClientRect();
      }
      function eo(e) {
        var t = e.data.pos,
          n = e.data.newPos,
          r = t.left - n.left,
          o = t.top - n.top;
        if (r || o) {
          e.data.moved = !0;
          var i = e.elm.style;
          (i.transform = i.WebkitTransform =
            "translate(" + r + "px," + o + "px)"),
            (i.transitionDuration = "0s");
        }
      }
      function to(e, t) {
        var n = t ? Pc(t) : Lc;
        if (n.test(e)) {
          for (
            var r, o, i, a = [], s = [], c = (n.lastIndex = 0);
            (r = n.exec(e));

          ) {
            (o = r.index),
              o > c && (s.push((i = e.slice(c, o))), a.push(JSON.stringify(i)));
            var l = Pn(r[1].trim());
            a.push("_s(" + l + ")"),
              s.push({ "@binding": l }),
              (c = o + r[0].length);
          }
          return (
            c < e.length &&
              (s.push((i = e.slice(c))), a.push(JSON.stringify(i))),
            { expression: a.join("+"), tokens: s }
          );
        }
      }
      function no(e, t) {
        var n = (t.warn, Zn(e, "class"));
        n && (e.staticClass = JSON.stringify(n));
        var r = Wn(e, "class", !1);
        r && (e.classBinding = r);
      }
      function ro(e) {
        var t = "";
        return (
          e.staticClass && (t += "staticClass:" + e.staticClass +","),
          e.classBinding && (t += "class:" + e.classBinding +","),
          t
        );
      }
      function oo(e, t) {
        var n = (t.warn, Zn(e, "style"));
        if (n) {
          e.staticStyle = JSON.stringify(Vs(n));
        }
        var r = Wn(e, "style", !1);
        r && (e.styleBinding = r);
      }
      function io(e) {
        var t = "";
        return (
          e.staticStyle && (t += "staticStyle:" + e.staticStyle +","),
          e.styleBinding && (t += "style:(" + e.styleBinding + "),"),
          t
        );
      }
      function ao(e, t) {
        var n = t ? ol : rl;
        return e.replace(n, function (e) {
          return nl[e];
        });
      }
      function so(e, t) {
        function n(t) {
          (u += t), (e = e.substring(t));
        }
        function r(e, n, r) {
          var o, s;
          if ((null == n && (n = u), null == r && (r = u), e))
            for (
              s = e.toLowerCase(), o = a.length - 1;
              o >= 0 && a[o].lowerCasedTag !== s;
              o--
            );
          else o = 0;
          if (o >= 0) {
            for (var c = a.length - 1; c >= o; c--)
              t.end && t.end(a[c].tag, n, r);
            (a.length = o), (i = o && a[o - 1].tag);
          } else
            "br" === s
              ? t.start && t.start(e, [], !0, n, r)
              : "p" === s &&
                (t.start && t.start(e, [], !1, n, r), t.end && t.end(e, n, r));
        }
        for (
          var o,
            i,
            a = [],
            s = t.expectHTML,
            c = t.isUnaryTag || Li,
            l = t.canBeLeftOpenTag || Li,
            u = 0;
          e;

        ) {
          if (((o = e), i && el(i))) {
            var f = 0,
              p = i.toLowerCase(),
              d =
                tl[p] ||
                (tl[p] = new RegExp("([\\s\\S]*?)(</" + p + "[^>]*>)", "i")),
              v = e.replace(d, function (e, n, r) {
                return (
                  (f = r.length),
                  el(p) ||
                    "noscript" === p ||
                    (n = n
                      .replace(/<!\--([\s\S]*?)-->/g, "$1")
                      .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")),
                  al(p, n) && (n = n.slice(1)),
                  t.chars && t.chars(n),
                  ""
                );
              });
            (u += e.length - v.length), (e = v), r(p, u - f, u);
          } else {
            var m = e.indexOf("<");
            if (0 === m) {
              if (Yc.test(e)) {
                var h = e.indexOf("--\x3e");
                if (h >= 0) {
                  t.shouldKeepComment &&
                    t.comment(e.substring(4, h), u, u + h + 3),
                    n(h + 3);
                  continue;
                }
              }
              if (Qc.test(e)) {
                var y = e.indexOf("]>");
                if (y >= 0) {
                  n(y + 2);
                  continue;
                }
              }
              var b = e.match(Xc);
              if (b) {
                n(b[0].length);
                continue;
              }
              var g = e.match(Gc);
              if (g) {
                var _ = u;
                n(g[0].length), r(g[1], _, u);
                continue;
              }
              var x = (function () {
                var t = e.match(Wc);
                if (t) {
                  var r = { tagName: t[1], attrs: [], start: u };
                  n(t[0].length);
                  for (
                    var o, i;
                    !(o = e.match(Zc)) && (i = e.match(Kc) || e.match(Vc));

                  )
                    (i.start = u), n(i[0].length), (i.end = u), r.attrs.push(i);
                  if (o)
                    return (
                      (r.unarySlash = o[1]), n(o[0].length), (r.end = u), r
                    );
                }
              })();
              if (x) {
                !(function (e) {
                  var n = e.tagName,
                    o = e.unarySlash;
                  s && ("p" === i && zc(n) && r(i), l(n) && i === n && r(n));
                  for (
                    var u = c(n) || !!o,
                      f = e.attrs.length,
                      p = new Array(f),
                      d = 0;
                    d < f;
                    d++
                  ) {
                    var v = e.attrs[d],
                      m = v[3] || v[4] || v[5] || "",
                      h =
                        "a" === n && "href" === v[1]
                          ? t.shouldDecodeNewlinesForHref
                          : t.shouldDecodeNewlines;
                    p[d] = { name: v[1], value: ao(m, h) };
                  }
                  u ||
                    (a.push({
                      tag: n,
                      lowerCasedTag: n.toLowerCase(),
                      attrs: p,
                      start: e.start,
                      end: e.end,
                    }),
                    (i = n)),
                    t.start && t.start(n, p, u, e.start, e.end);
                })(x),
                  al(x.tagName, e) && n(1);
                continue;
              }
            }
            var k = void 0,
              $ = void 0,
              w = void 0;
            if (m >= 0) {
              for (
                $ = e.slice(m);
                !(
                  Gc.test($) ||
                  Wc.test($) ||
                  Yc.test($) ||
                  Qc.test($) ||
                  (w = $.indexOf("<", 1)) < 0
                );

              )
                (m += w), ($ = e.slice(m));
              k = e.substring(0, m);
            }
            m < 0 && (k = e),
              k && n(k.length),
              t.chars && k && t.chars(k, u - k.length, u);
          }
          if (e === o) {
            t.chars && t.chars(e);
            break;
          }
        }
        r();
      }
      function co(e, t, n) {
        return {
          type: 1,
          tag: e,
          attrsList: t,
          attrsMap: jo(t),
          rawAttrsMap: {},
          parent: n,
          children: [],
        };
      }
      function lo(e, t) {
        function n(e) {
          if (
            (r(e),
            u || e.processed || (e = po(e, t)),
            s.length ||
              e === i ||
              (i.if &&
                (e.elseif || e.else) &&
                xo(i, { exp: e.elseif, block: e })),
            a && !e.forbidden)
          )
            if (e.elseif || e.else) go(e, a);
            else {
              if (e.slotScope) {
                var n = e.slotTarget || '"default"';
                (a.scopedSlots || (a.scopedSlots = {}))[n] = e;
              }
              a.children.push(e), (e.parent = a);
            }
          (e.children = e.children.filter(function (e) {
            return !e.slotScope;
          })),
            r(e),
            e.pre && (u = !1),
            Tc(e.tag) && (f = !1);
          for (var o = 0; o < Oc.length; o++) Oc[o](e, t);
        }
        function r(e) {
          if (!f)
            for (
              var t;
              (t = e.children[e.children.length - 1]) &&
              3 === t.type &&
              " " === t.text;

            )
              e.children.pop();
        }
        ($c = t.warn || Rn),
          (Tc = t.isPreTag || Li),
          (Sc = t.mustUseProp || Li),
          (jc = t.getTagNamespace || Li);
        var o = t.isReservedTag || Li;
        (Ic = function (e) {
          return !!e.component || !o(e.tag);
        }),
          (Cc = Hn(t.modules, "transformNode")),
          (Ac = Hn(t.modules, "preTransformNode")),
          (Oc = Hn(t.modules, "postTransformNode")),
          (wc = t.delimiters);
        var i,
          a,
          s = [],
          c = !1 !== t.preserveWhitespace,
          l = t.whitespace,
          u = !1,
          f = !1;
        return (
          so(e, {
            warn: $c,
            expectHTML: t.expectHTML,
            isUnaryTag: t.isUnaryTag,
            canBeLeftOpenTag: t.canBeLeftOpenTag,
            shouldDecodeNewlines: t.shouldDecodeNewlines,
            shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
            shouldKeepComment: t.comments,
            outputSourceRange: t.outputSourceRange,
            start: function (e, r, o, c, l) {
              var p = (a && a.ns) || jc(e);
              Wi && "svg" === p && (r = No(r));
              var d = co(e, r, a);
              p && (d.ns = p), Eo(d) && !oa() && (d.forbidden = !0);
              for (var v = 0; v < Ac.length; v++) d = Ac[v](d, t) || d;
              u || (uo(d), d.pre && (u = !0)),
                Tc(d.tag) && (f = !0),
                u ? fo(d) : d.processed || (ho(d), bo(d), ko(d)),
                i || (i = d),
                o ? n(d) : ((a = d), s.push(d));
            },
            end: function (e, t, r) {
              var o = s[s.length - 1];
              (s.length -= 1), (a = s[s.length - 1]), n(o);
            },
            chars: function (e, t, n) {
              if (
                a &&
                (!Wi || "textarea" !== a.tag || a.attrsMap.placeholder !== e)
              ) {
                var r = a.children;
                if (
                  (e =
                    f || e.trim()
                      ? Io(a)
                        ? e
                        : gl(e)
                      : r.length
                      ? l
                        ? "condense" === l && yl.test(e)
                          ? ""
                          : " "
                        : c
                        ? " "
                        : ""
                      : "")
                ) {
                  f || "condense" !== l || (e = e.replace(bl, " "));
                  var o, i;
                  !u && " " !== e && (o = to(e, wc))
                    ? (i = {
                        type: 2,
                        expression: o.expression,
                        tokens: o.tokens,
                        text: e,
                      })
                    : (" " === e && r.length && " " === r[r.length - 1].text) ||
                      (i = { type: 3, text: e }),
                    i && r.push(i);
                }
              }
            },
            comment: function (e, t, n) {
              if (a) {
                var r = { type: 3, text: e, isComment: !0 };
                a.children.push(r);
              }
            },
          }),
          i
        );
      }
      function uo(e) {
        null != Zn(e, "v-pre") && (e.pre = !0);
      }
      function fo(e) {
        var t = e.attrsList,
          n = t.length;
        if (n)
          for (var r = (e.attrs = new Array(n)), o = 0; o < n; o++)
            (r[o] = { name: t[o].name, value: JSON.stringify(t[o].value) }),
              null != t[o].start &&
                ((r[o].start = t[o].start), (r[o].end = t[o].end));
        else e.pre || (e.plain = !0);
      }
      function po(e, t) {
        vo(e),
          (e.plain = !e.key && !e.scopedSlots && !e.attrsList.length),
          mo(e),
          $o(e),
          Co(e),
          Ao(e);
        for (var n = 0; n < Cc.length; n++) e = Cc[n](e, t) || e;
        return Oo(e), e;
      }
      function vo(e) {
        var t = Wn(e, "key");
        if (t) {
          e.key = t;
        }
      }
      function mo(e) {
        var t = Wn(e, "ref");
        t && ((e.ref = t), (e.refInFor = To(e)));
      }
      function ho(e) {
        var t;
        if ((t = Zn(e, "v-for"))) {
          var n = yo(t);
          n && k(e, n);
        }
      }
      function yo(e) {
        var t = e.match(ll);
        if (t) {
          var n = {};
          n.for = t[2].trim();
          var r = t[1].trim().replace(fl, ""),
            o = r.match(ul);
          return (
            o
              ? ((n.alias = r.replace(ul, "").trim()),
                (n.iterator1 = o[1].trim()),
                o[2] && (n.iterator2 = o[2].trim()))
              : (n.alias = r),
            n
          );
        }
      }
      function bo(e) {
        var t = Zn(e, "v-if");
        if (t) (e.if = t), xo(e, { exp: t, block: e });
        else {
          null != Zn(e, "v-else") && (e.else = !0);
          var n = Zn(e, "v-else-if");
          n && (e.elseif = n);
        }
      }
      function go(e, t) {
        var n = _o(t.children);
        n && n.if && xo(n, { exp: e.elseif, block: e });
      }
      function _o(e) {
        for (var t = e.length; t--; ) {
          if (1 === e[t].type) return e[t];
          e.pop();
        }
      }
      function xo(e, t) {
        e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t);
      }
      function ko(e) {
        null != Zn(e, "v-once") && (e.once = !0);
      }
      function $o(e) {
        var t;
        "template" === e.tag
          ? ((t = Zn(e, "scope")), (e.slotScope = t || Zn(e, "slot-scope")))
          : (t = Zn(e, "slot-scope")) && (e.slotScope = t);
        var n = Wn(e, "slot");
        if (
          (n &&
            ((e.slotTarget = '""' === n ? '"default"' : n),
            (e.slotTargetDynamic = !(
              !e.attrsMap[":slot"] && !e.attrsMap["v-bind:slot"]
            )),
            "template" === e.tag ||
              e.slotScope ||
              Un(e, "slot", n, qn(e, "slot"))),
          "template" === e.tag)
        ) {
          var r = Gn(e, hl);
          if (r) {
            var o = wo(r),
              i = o.name,
              a = o.dynamic;
            (e.slotTarget = i),
              (e.slotTargetDynamic = a),
              (e.slotScope = r.value || _l);
          }
        } else {
          var s = Gn(e, hl);
          if (s) {
            var c = e.scopedSlots || (e.scopedSlots = {}),
              l = wo(s),
              u = l.name,
              f = l.dynamic,
              p = (c[u] = co("template", [], e));
            (p.slotTarget = u),
              (p.slotTargetDynamic = f),
              (p.children = e.children.filter(function (e) {
                if (!e.slotScope) return (e.parent = p), !0;
              })),
              (p.slotScope = s.value || _l),
              (e.children = []),
              (e.plain = !1);
          }
        }
      }
      function wo(e) {
        var t = e.name.replace(hl, "");
        return (
          t || ("#" !== e.name[0] && (t = "default")),
          pl.test(t)
            ? { name: t.slice(1, -1), dynamic: !0 }
            : { name: '"' + t + '"', dynamic: !1 }
        );
      }
      function Co(e) {
        "slot" === e.tag && (e.slotName = Wn(e, "name"));
      }
      function Ao(e) {
        var t;
        (t = Wn(e, "is")) && (e.component = t),
          null != Zn(e, "inline-template") && (e.inlineTemplate = !0);
      }
      function Oo(e) {
        var t,
          n,
          r,
          o,
          i,
          a,
          s,
          c,
          l = e.attrsList;
        for (t = 0, n = l.length; t < n; t++)
          if (((r = o = l[t].name), (i = l[t].value), cl.test(r)))
            if (
              ((e.hasBindings = !0),
              (a = So(r.replace(cl, ""))),
              a && (r = r.replace(ml, "")),
              vl.test(r))
            )
              (r = r.replace(vl, "")),
                (i = Pn(i)),
                (c = pl.test(r)),
                c && (r = r.slice(1, -1)),
                a &&
                  (a.prop &&
                    !c &&
                    "innerHtml" === (r = ji(r)) &&
                    (r = "innerHTML"),
                  a.camel && !c && (r = ji(r)),
                  a.sync &&
                    ((s = Qn(i, "$event")),
                    c
                      ? Jn(
                          e,
                          '"update:"+(' + r + ")",
                          s,
                          null,
                          !1,
                          $c,
                          l[t],
                          !0
                        )
                      : (Jn(e, "update:" + ji(r), s, null, !1, $c, l[t]),
                        Ni(r) !== ji(r) &&
                          Jn(e, "update:" + Ni(r), s, null, !1, $c, l[t])))),
                (a && a.prop) || (!e.component && Sc(e.tag, e.attrsMap.type, r))
                  ? Bn(e, r, i, l[t], c)
                  : Un(e, r, i, l[t], c);
            else if (sl.test(r))
              (r = r.replace(sl, "")),
                (c = pl.test(r)),
                c && (r = r.slice(1, -1)),
                Jn(e, r, i, a, !1, $c, l[t], c);
            else {
              r = r.replace(cl, "");
              var u = r.match(dl),
                f = u && u[1];
              (c = !1),
                f &&
                  ((r = r.slice(0, -(f.length + 1))),
                  pl.test(f) && ((f = f.slice(1, -1)), (c = !0))),
                Vn(e, r, o, i, f, c, a, l[t]);
            }
          else {
            Un(e, r, JSON.stringify(i), l[t]),
              !e.component &&
                "muted" === r &&
                Sc(e.tag, e.attrsMap.type, r) &&
                Bn(e, r, "true", l[t]);
          }
      }
      function To(e) {
        for (var t = e; t; ) {
          if (void 0 !== t.for) return !0;
          t = t.parent;
        }
        return !1;
      }
      function So(e) {
        var t = e.match(ml);
        if (t) {
          var n = {};
          return (
            t.forEach(function (e) {
              n[e.slice(1)] = !0;
            }),
            n
          );
        }
      }
      function jo(e) {
        for (var t = {}, n = 0, r = e.length; n < r; n++)
          t[e[n].name] = e[n].value;
        return t;
      }
      function Io(e) {
        return "script" === e.tag || "style" === e.tag;
      }
      function Eo(e) {
        return (
          "style" === e.tag ||
          ("script" === e.tag &&
            (!e.attrsMap.type || "text/javascript" === e.attrsMap.type))
        );
      }
      function No(e) {
        for (var t = [], n = 0; n < e.length; n++) {
          var r = e[n];
          xl.test(r.name) || ((r.name = r.name.replace(kl, "")), t.push(r));
        }
        return t;
      }
      function Mo(e, t) {
        if ("input" === e.tag) {
          var n = e.attrsMap;
          if (!n["v-model"]) return;
          var r;
          if (
            ((n[":type"] || n["v-bind:type"]) && (r = Wn(e, "type")),
            n.type || r || !n["v-bind"] || (r = "(" + n["v-bind"] + ").type"),
            r)
          ) {
            var o = Zn(e, "v-if", !0),
              i = o ? "&&(" + o + ")" : "",
              a = null != Zn(e, "v-else", !0),
              s = Zn(e, "v-else-if", !0),
              c = Lo(e);
            ho(c),
              zn(c, "type", "checkbox"),
              po(c, t),
              (c.processed = !0),
              (c.if = "(" + r + ")==='checkbox'" + i),
              xo(c, { exp: c.if, block: c });
            var l = Lo(e);
            Zn(l, "v-for", !0),
              zn(l, "type", "radio"),
              po(l, t),
              xo(c, { exp: "(" + r + ")==='radio'" + i, block: l });
            var u = Lo(e);
            return (
              Zn(u, "v-for", !0),
              zn(u, ":type", r),
              po(u, t),
              xo(c, { exp: o, block: u }),
              a ? (c.else = !0) : s && (c.elseif = s),
              c
            );
          }
        }
      }
      function Lo(e) {
        return co(e.tag, e.attrsList.slice(), e.parent);
      }
      function Do(e, t) {
        t.value && Bn(e, "textContent", "_s(" + t.value + ")", t);
      }
      function Po(e, t) {
        t.value && Bn(e, "innerHTML", "_s(" + t.value + ")", t);
      }
      function Fo(e, t) {
        e &&
          ((Ec = Ol(t.staticKeys || "")),
          (Nc = t.isReservedTag || Li),
          Ho(e),
          Bo(e, !1));
      }
      function Ro(e) {
        return m(
          "type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" +
            (e ?"," + e : "")
        );
      }
      function Ho(e) {
        if (((e.static = Uo(e)), 1 === e.type)) {
          if (
            !Nc(e.tag) &&
            "slot" !== e.tag &&
            null == e.attrsMap["inline-template"]
          )
            return;
          for (var t = 0, n = e.children.length; t < n; t++) {
            var r = e.children[t];
            Ho(r), r.static || (e.static = !1);
          }
          if (e.ifConditions)
            for (var o = 1, i = e.ifConditions.length; o < i; o++) {
              var a = e.ifConditions[o].block;
              Ho(a), a.static || (e.static = !1);
            }
        }
      }
      function Bo(e, t) {
        if (1 === e.type) {
          if (
            ((e.static || e.once) && (e.staticInFor = t),
            e.static &&
              e.children.length &&
              (1 !== e.children.length || 3 !== e.children[0].type))
          )
            return void (e.staticRoot = !0);
          if (((e.staticRoot = !1), e.children))
            for (var n = 0, r = e.children.length; n < r; n++)
              Bo(e.children[n], t || !!e.for);
          if (e.ifConditions)
            for (var o = 1, i = e.ifConditions.length; o < i; o++)
              Bo(e.ifConditions[o].block, t);
        }
      }
      function Uo(e) {
        return (
          2 !== e.type &&
          (3 === e.type ||
            !(
              !e.pre &&
              (e.hasBindings ||
                e.if ||
                e.for ||
                Ai(e.tag) ||
                !Nc(e.tag) ||
                zo(e) ||
                !Object.keys(e).every(Ec))
            ))
        );
      }
      function zo(e) {
        for (; e.parent; ) {
          if (((e = e.parent), "template" !== e.tag)) return !1;
          if (e.for) return !0;
        }
        return !1;
      }
      function Vo(e, t) {
        var n = t ? "nativeOn:" : "on:",
          r = "",
          o = "";
        for (var i in e) {
          var a = Ko(e[i]);
          e[i] && e[i].dynamic
            ? (o += i +"," + a +",")
            : (r += '"' + i + '":' + a +",");
        }
        return (
          (r = "{" + r.slice(0, -1) + "}"),
          o ? n + "_d(" + r +",[" + o.slice(0, -1) + "])" : n + r
        );
      }
      function Ko(e) {
        if (!e) return "function(){}";
        if (Array.isArray(e))
          return (
            "[" +
            e
              .map(function (e) {
                return Ko(e);
              })
              .join(",") +
            "]"
          );
        var t = jl.test(e.value),
          n = Tl.test(e.value),
          r = jl.test(e.value.replace(Sl, ""));
        if (e.modifiers) {
          var o = "",
            i = "",
            a = [];
          for (var s in e.modifiers)
            if (Ml[s]) (i += Ml[s]), Il[s] && a.push(s);
            else if ("exact" === s) {
              var c = e.modifiers;
              i += Nl(
                ["ctrl", "shift", "alt", "meta"]
                  .filter(function (e) {
                    return !c[e];
                  })
                  .map(function (e) {
                    return "$event." + e + "Key";
                  })
                  .join("||")
              );
            } else a.push(s);
          a.length && (o += Jo(a)), i && (o += i);
          return (
            "function($event){" +
            o +
            (t
              ? "return " + e.value + "($event)"
              : n
              ? "return (" + e.value + ")($event)"
              : r
              ? "return " + e.value
              : e.value) +
            "}"
          );
        }
        return t || n
          ? e.value
          : "function($event){" + (r ? "return " + e.value : e.value) + "}";
      }
      function Jo(e) {
        return (
          "if(!$event.type.indexOf('key')&&" +
          e.map(qo).join("&&") +
          ")return null;"
        );
      }
      function qo(e) {
        var t = parseInt(e, 10);
        if (t) return "$event.keyCode!==" + t;
        var n = Il[e],
          r = El[e];
        return (
          "_k($event.keyCode," +
          JSON.stringify(e) +
        "," +
          JSON.stringify(n) +
        ",$event.key," +
          JSON.stringify(r) +
          ")"
        );
      }
      function Wo(e, t) {
        e.wrapListeners = function (e) {
          return "_g(" + e +"," + t.value + ")";
        };
      }
      function Zo(e, t) {
        e.wrapData = function (n) {
          return (
            "_b(" +
            n +
          ",'" +
            e.tag +
            "'," +
            t.value +
          "," +
            (t.modifiers && t.modifiers.prop ? "true" : "false") +
            (t.modifiers && t.modifiers.sync ?",true" : "") +
            ")"
          );
        };
      }
      function Go(e, t) {
        var n = new Dl(t);
        return {
          render: "with(this){return " + (e ? Xo(e, n) : '_c("div")') + "}",
          staticRenderFns: n.staticRenderFns,
        };
      }
      function Xo(e, t) {
        if (
          (e.parent && (e.pre = e.pre || e.parent.pre),
          e.staticRoot && !e.staticProcessed)
        )
          return Yo(e, t);
        if (e.once && !e.onceProcessed) return Qo(e, t);
        if (e.for && !e.forProcessed) return ni(e, t);
        if (e.if && !e.ifProcessed) return ei(e, t);
        if ("template" !== e.tag || e.slotTarget || t.pre) {
          if ("slot" === e.tag) return hi(e, t);
          var n;
          if (e.component) n = yi(e.component, e, t);
          else {
            var r;
            (!e.plain || (e.pre && t.maybeComponent(e))) && (r = ri(e, t));
            var o = e.inlineTemplate ? null : ui(e, t, !0);
            n =
              "_c('" +
              e.tag +
              "'" +
              (r ?"," + r : "") +
              (o ?"," + o : "") +
              ")";
          }
          for (var i = 0; i < t.transforms.length; i++)
            n = t.transforms[i](e, n);
          return n;
        }
        return ui(e, t) || "void 0";
      }
      function Yo(e, t) {
        e.staticProcessed = !0;
        var n = t.pre;
        return (
          e.pre && (t.pre = e.pre),
          t.staticRenderFns.push("with(this){return " + Xo(e, t) + "}"),
          (t.pre = n),
          "_m(" +
            (t.staticRenderFns.length - 1) +
            (e.staticInFor ?",true" : "") +
            ")"
        );
      }
      function Qo(e, t) {
        if (((e.onceProcessed = !0), e.if && !e.ifProcessed)) return ei(e, t);
        if (e.staticInFor) {
          for (var n = "", r = e.parent; r; ) {
            if (r.for) {
              n = r.key;
              break;
            }
            r = r.parent;
          }
          return n
            ? "_o(" + Xo(e, t) +"," + t.onceId++ +"," + n + ")"
            : Xo(e, t);
        }
        return Yo(e, t);
      }
      function ei(e, t, n, r) {
        return (e.ifProcessed = !0), ti(e.ifConditions.slice(), t, n, r);
      }
      function ti(e, t, n, r) {
        function o(e) {
          return n ? n(e, t) : e.once ? Qo(e, t) : Xo(e, t);
        }
        if (!e.length) return r || "_e()";
        var i = e.shift();
        return i.exp
          ? "(" + i.exp + ")?" + o(i.block) + ":" + ti(e, t, n, r)
          : "" + o(i.block);
      }
      function ni(e, t, n, r) {
        var o = e.for,
          i = e.alias,
          a = e.iterator1 ?"," + e.iterator1 : "",
          s = e.iterator2 ?"," + e.iterator2 : "";
        return (
          (e.forProcessed = !0),
          (r || "_l") +
            "((" +
            o +
            "),function(" +
            i +
            a +
            s +
            "){return " +
            (n || Xo)(e, t) +
            "})"
        );
      }
      function ri(e, t) {
        var n = "{",
          r = oi(e, t);
        r && (n += r +","),
          e.key && (n += "key:" + e.key +","),
          e.ref && (n += "ref:" + e.ref +","),
          e.refInFor && (n += "refInFor:true,"),
          e.pre && (n += "pre:true,"),
          e.component && (n += 'tag:"' + e.tag + '",');
        for (var o = 0; o < t.dataGenFns.length; o++) n += t.dataGenFns[o](e);
        if (
          (e.attrs && (n += "attrs:" + bi(e.attrs) +","),
          e.props && (n += "domProps:" + bi(e.props) +","),
          e.events && (n += Vo(e.events, !1) +","),
          e.nativeEvents && (n += Vo(e.nativeEvents, !0) +","),
          e.slotTarget && !e.slotScope && (n += "slot:" + e.slotTarget +","),
          e.scopedSlots && (n += ai(e, e.scopedSlots, t) +","),
          e.model &&
            (n +=
              "model:{value:" +
              e.model.value +
            ",callback:" +
              e.model.callback +
            ",expression:" +
              e.model.expression +
              "},"),
          e.inlineTemplate)
        ) {
          var i = ii(e, t);
          i && (n += i +",");
        }
        return (
          (n = n.replace(/,$/, "") + "}"),
          e.dynamicAttrs &&
            (n = "_b(" + n + ',"' + e.tag + '",' + bi(e.dynamicAttrs) + ")"),
          e.wrapData && (n = e.wrapData(n)),
          e.wrapListeners && (n = e.wrapListeners(n)),
          n
        );
      }
      function oi(e, t) {
        var n = e.directives;
        if (n) {
          var r,
            o,
            i,
            a,
            s = "directives:[",
            c = !1;
          for (r = 0, o = n.length; r < o; r++) {
            (i = n[r]), (a = !0);
            var l = t.directives[i.name];
            l && (a = !!l(e, i, t.warn)),
              a &&
                ((c = !0),
                (s +=
                  '{name:"' +
                  i.name +
                  '",rawName:"' +
                  i.rawName +
                  '"' +
                  (i.value
                    ?",value:(" +
                      i.value +
                      "),expression:" +
                      JSON.stringify(i.value)
                    : "") +
                  (i.arg
                    ?",arg:" + (i.isDynamicArg ? i.arg : '"' + i.arg + '"')
                    : "") +
                  (i.modifiers
                    ?",modifiers:" + JSON.stringify(i.modifiers)
                    : "") +
                  "},"));
          }
          return c ? s.slice(0, -1) + "]" : void 0;
        }
      }
      function ii(e, t) {
        var n = e.children[0];
        if (n && 1 === n.type) {
          var r = Go(n, t.options);
          return (
            "inlineTemplate:{render:function(){" +
            r.render +
            "},staticRenderFns:[" +
            r.staticRenderFns
              .map(function (e) {
                return "function(){" + e + "}";
              })
              .join(",") +
            "]}"
          );
        }
      }
      function ai(e, t, n) {
        var r =
            e.for ||
            Object.keys(t).some(function (e) {
              var n = t[e];
              return n.slotTargetDynamic || n.if || n.for || ci(n);
            }),
          o = !!e.if;
        if (!r)
          for (var i = e.parent; i; ) {
            if ((i.slotScope && i.slotScope !== _l) || i.for) {
              r = !0;
              break;
            }
            i.if && (o = !0), (i = i.parent);
          }
        var a = Object.keys(t)
          .map(function (e) {
            return li(t[e], n);
          })
          .join(",");
        return (
          "scopedSlots:_u([" +
          a +
          "]" +
          (r ?",null,true" : "") +
          (!r && o ?",null,false," + si(a) : "") +
          ")"
        );
      }
      function si(e) {
        for (var t = 5381, n = e.length; n; ) t = (33 * t) ^ e.charCodeAt(--n);
        return t >>> 0;
      }
      function ci(e) {
        return 1 === e.type && ("slot" === e.tag || e.children.some(ci));
      }
      function li(e, t) {
        var n = e.attrsMap["slot-scope"];
        if (e.if && !e.ifProcessed && !n) return ei(e, t, li, "null");
        if (e.for && !e.forProcessed) return ni(e, t, li);
        var r = e.slotScope === _l ? "" : String(e.slotScope),
          o =
            "function(" +
            r +
            "){return " +
            ("template" === e.tag
              ? e.if && n
                ? "(" + e.if + ")?" + (ui(e, t) || "undefined") + ":undefined"
                : ui(e, t) || "undefined"
              : Xo(e, t)) +
            "}",
          i = r ? "" :",proxy:true";
        return "{key:" + (e.slotTarget || '"default"') +",fn:" + o + i + "}";
      }
      function ui(e, t, n, r, o) {
        var i = e.children;
        if (i.length) {
          var a = i[0];
          if (
            1 === i.length &&
            a.for &&
            "template" !== a.tag &&
            "slot" !== a.tag
          ) {
            var s = n ? (t.maybeComponent(a) ?",1" :",0") : "";
            return "" + (r || Xo)(a, t) + s;
          }
          var c = n ? fi(i, t.maybeComponent) : 0,
            l = o || di;
          return (
            "[" +
            i
              .map(function (e) {
                return l(e, t);
              })
              .join(",") +
            "]" +
            (c ?"," + c : "")
          );
        }
      }
      function fi(e, t) {
        for (var n = 0, r = 0; r < e.length; r++) {
          var o = e[r];
          if (1 === o.type) {
            if (
              pi(o) ||
              (o.ifConditions &&
                o.ifConditions.some(function (e) {
                  return pi(e.block);
                }))
            ) {
              n = 2;
              break;
            }
            (t(o) ||
              (o.ifConditions &&
                o.ifConditions.some(function (e) {
                  return t(e.block);
                }))) &&
              (n = 1);
          }
        }
        return n;
      }
      function pi(e) {
        return void 0 !== e.for || "template" === e.tag || "slot" === e.tag;
      }
      function di(e, t) {
        return 1 === e.type
          ? Xo(e, t)
          : 3 === e.type && e.isComment
          ? mi(e)
          : vi(e);
      }
      function vi(e) {
        return (
          "_v(" +
          (2 === e.type ? e.expression : gi(JSON.stringify(e.text))) +
          ")"
        );
      }
      function mi(e) {
        return "_e(" + JSON.stringify(e.text) + ")";
      }
      function hi(e, t) {
        var n = e.slotName || '"default"',
          r = ui(e, t),
          o = "_t(" + n + (r ?"," + r : ""),
          i =
            e.attrs || e.dynamicAttrs
              ? bi(
                  (e.attrs || [])
                    .concat(e.dynamicAttrs || [])
                    .map(function (e) {
                      return {
                        name: ji(e.name),
                        value: e.value,
                        dynamic: e.dynamic,
                      };
                    })
                )
              : null,
          a = e.attrsMap["v-bind"];
        return (
          (!i && !a) || r || (o +=",null"),
          i && (o +="," + i),
          a && (o += (i ? "" :",null") +"," + a),
          o + ")"
        );
      }
      function yi(e, t, n) {
        var r = t.inlineTemplate ? null : ui(t, n, !0);
        return "_c(" + e +"," + ri(t, n) + (r ?"," + r : "") + ")";
      }
      function bi(e) {
        for (var t = "", n = "", r = 0; r < e.length; r++) {
          var o = e[r],
            i = gi(o.value);
          o.dynamic
            ? (n += o.name +"," + i +",")
            : (t += '"' + o.name + '":' + i +",");
        }
        return (
          (t = "{" + t.slice(0, -1) + "}"),
          n ? "_d(" + t +",[" + n.slice(0, -1) + "])" : t
        );
      }
      function gi(e) {
        return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
      }
      function _i(e, t) {
        try {
          return new Function(e);
        } catch (n) {
          return t.push({ err: n, code: e }), w;
        }
      }
      function xi(e) {
        var t = Object.create(null);
        return function (n, r, o) {
          r = k({}, r);
          r.warn;
          delete r.warn;
          var i = r.delimiters ? String(r.delimiters) + n : n;
          if (t[i]) return t[i];
          var a = e(n, r),
            s = {},
            c = [];
          return (
            (s.render = _i(a.render, c)),
            (s.staticRenderFns = a.staticRenderFns.map(function (e) {
              return _i(e, c);
            })),
            (t[i] = s)
          );
        };
      }
      function ki(e) {
        return (
          (Mc = Mc || document.createElement("div")),
          (Mc.innerHTML = e ? '<a href="<br>"/>' : '<div a="<br>"/>'),
          Mc.innerHTML.indexOf("&#10;") > 0
        );
      }
      function $i(e) {
        if (e.outerHTML) return e.outerHTML;
        var t = document.createElement("div");
        return t.appendChild(e.cloneNode(!0)), t.innerHTML;
      }
      /*!
       * Vue.js v2.6.12
       * (c) 2014-2020 Evan You
       * Released under the MIT License.
       */
      var wi = Object.freeze({}),
        Ci = Object.prototype.toString,
        Ai = m("slot,component", !0),
        Oi = m("key,ref,slot,slot-scope,is"),
        Ti = Object.prototype.hasOwnProperty,
        Si = /-(\w)/g,
        ji = b(function (e) {
          return e.replace(Si, function (e, t) {
            return t ? t.toUpperCase() : "";
          });
        }),
        Ii = b(function (e) {
          return e.charAt(0).toUpperCase() + e.slice(1);
        }),
        Ei = /\B([A-Z])/g,
        Ni = b(function (e) {
          return e.replace(Ei, "-$1").toLowerCase();
        }),
        Mi = Function.prototype.bind ? _ : g,
        Li = function (e, t, n) {
          return !1;
        },
        Di = function (e) {
          return e;
        },
        Pi = "data-server-rendered",
        Fi = ["component", "directive", "filter"],
        Ri = [
          "beforeCreate",
          "created",
          "beforeMount",
          "mounted",
          "beforeUpdate",
          "updated",
          "beforeDestroy",
          "destroyed",
          "activated",
          "deactivated",
          "errorCaptured",
          "serverPrefetch",
        ],
        Hi = {
          optionMergeStrategies: Object.create(null),
          silent: !1,
          productionTip: !1,
          devtools: !1,
          performance: !1,
          errorHandler: null,
          warnHandler: null,
          ignoredElements: [],
          keyCodes: Object.create(null),
          isReservedTag: Li,
          isReservedAttr: Li,
          isUnknownElement: Li,
          getTagNamespace: w,
          parsePlatformTagName: Di,
          mustUseProp: Li,
          async: !0,
          _lifecycleHooks: Ri,
        },
        Bi =
          /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/,
        Ui = new RegExp("[^" + Bi.source + ".$_\\d]"),
        zi = "__proto__" in {},
        Vi = "undefined" != typeof window,
        Ki = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
        Ji = Ki && WXEnvironment.platform.toLowerCase(),
        qi = Vi && window.navigator.userAgent.toLowerCase(),
        Wi = qi && /msie|trident/.test(qi),
        Zi = qi && qi.indexOf("msie 9.0") > 0,
        Gi = qi && qi.indexOf("edge/") > 0,
        Xi =
          (qi && qi.indexOf("android"),
          (qi && /iphone|ipad|ipod|ios/.test(qi)) || "ios" === Ji),
        Yi =
          (qi && /chrome\/\d+/.test(qi),
          qi && /phantomjs/.test(qi),
          qi && qi.match(/firefox\/(\d+)/)),
        Qi = {}.watch,
        ea = !1;
      if (Vi)
        try {
          var ta = {};
          Object.defineProperty(ta, "passive", {
            get: function () {
              ea = !0;
            },
          }),
            window.addEventListener("test-passive", null, ta);
        } catch (e) {}
      var na,
        ra,
        oa = function () {
          return (
            void 0 === na &&
              (na =
                !Vi &&
                !Ki &&
                void 0 !== e &&
                e.process &&
                "server" === e.process.env.VUE_ENV),
            na
          );
        },
        ia = Vi && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
        aa =
          "undefined" != typeof Symbol &&
          I(Symbol) &&
          "undefined" != typeof Reflect &&
          I(Reflect.ownKeys);
      ra =
        "undefined" != typeof Set && I(Set)
          ? Set
          : (function () {
              function e() {
                this.set = Object.create(null);
              }
              return (
                (e.prototype.has = function (e) {
                  return !0 === this.set[e];
                }),
                (e.prototype.add = function (e) {
                  this.set[e] = !0;
                }),
                (e.prototype.clear = function () {
                  this.set = Object.create(null);
                }),
                e
              );
            })();
      var sa = w,
        ca = 0,
        la = function () {
          (this.id = ca++), (this.subs = []);
        };
      (la.prototype.addSub = function (e) {
        this.subs.push(e);
      }),
        (la.prototype.removeSub = function (e) {
          h(this.subs, e);
        }),
        (la.prototype.depend = function () {
          la.target && la.target.addDep(this);
        }),
        (la.prototype.notify = function () {
          for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++)
            e[t].update();
        }),
        (la.target = null);
      var ua = [],
        fa = function (e, t, n, r, o, i, a, s) {
          (this.tag = e),
            (this.data = t),
            (this.children = n),
            (this.text = r),
            (this.elm = o),
            (this.ns = void 0),
            (this.context = i),
            (this.fnContext = void 0),
            (this.fnOptions = void 0),
            (this.fnScopeId = void 0),
            (this.key = t && t.key),
            (this.componentOptions = a),
            (this.componentInstance = void 0),
            (this.parent = void 0),
            (this.raw = !1),
            (this.isStatic = !1),
            (this.isRootInsert = !0),
            (this.isComment = !1),
            (this.isCloned = !1),
            (this.isOnce = !1),
            (this.asyncFactory = s),
            (this.asyncMeta = void 0),
            (this.isAsyncPlaceholder = !1);
        },
        pa = { child: { configurable: !0 } };
      (pa.child.get = function () {
        return this.componentInstance;
      }),
        Object.defineProperties(fa.prototype, pa);
      var da = function (e) {
          void 0 === e && (e = "");
          var t = new fa();
          return (t.text = e), (t.isComment = !0), t;
        },
        va = Array.prototype,
        ma = Object.create(va);
      ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(
        function (e) {
          var t = va[e];
          S(ma, e, function () {
            for (var n = [], r = arguments.length; r--; ) n[r] = arguments[r];
            var o,
              i = t.apply(this, n),
              a = this.__ob__;
            switch (e) {
              case "push":
              case "unshift":
                o = n;
                break;
              case "splice":
                o = n.slice(2);
            }
            return o && a.observeArray(o), a.dep.notify(), i;
          });
        }
      );
      var ha = Object.getOwnPropertyNames(ma),
        ya = !0,
        ba = function (e) {
          (this.value = e),
            (this.dep = new la()),
            (this.vmCount = 0),
            S(e, "__ob__", this),
            Array.isArray(e)
              ? (zi ? P(e, ma) : F(e, ma, ha), this.observeArray(e))
              : this.walk(e);
        };
      (ba.prototype.walk = function (e) {
        for (var t = Object.keys(e), n = 0; n < t.length; n++) H(e, t[n]);
      }),
        (ba.prototype.observeArray = function (e) {
          for (var t = 0, n = e.length; t < n; t++) R(e[t]);
        });
      var ga = Hi.optionMergeStrategies;
      (ga.data = function (e, t, n) {
        return n ? K(e, t, n) : t && "function" != typeof t ? e : K(e, t);
      }),
        Ri.forEach(function (e) {
          ga[e] = J;
        }),
        Fi.forEach(function (e) {
          ga[e + "s"] = W;
        }),
        (ga.watch = function (e, t, n, r) {
          if ((e === Qi && (e = void 0), t === Qi && (t = void 0), !t))
            return Object.create(e || null);
          if (!e) return t;
          var o = {};
          k(o, e);
          for (var i in t) {
            var a = o[i],
              s = t[i];
            a && !Array.isArray(a) && (a = [a]),
              (o[i] = a ? a.concat(s) : Array.isArray(s) ? s : [s]);
          }
          return o;
        }),
        (ga.props =
          ga.methods =
          ga.inject =
          ga.computed =
            function (e, t, n, r) {
              if (!e) return t;
              var o = Object.create(null);
              return k(o, e), t && k(o, t), o;
            }),
        (ga.provide = K);
      var _a,
        xa = function (e, t) {
          return void 0 === t ? e : t;
        },
        ka = !1,
        $a = [],
        wa = !1;
      if ("undefined" != typeof Promise && I(Promise)) {
        var Ca = Promise.resolve();
        (_a = function () {
          Ca.then(le), Xi && setTimeout(w);
        }),
          (ka = !0);
      } else if (
        Wi ||
        "undefined" == typeof MutationObserver ||
        (!I(MutationObserver) &&
          "[object MutationObserverConstructor]" !==
            MutationObserver.toString())
      )
        _a =
          void 0 !== n && I(n)
            ? function () {
                n(le);
              }
            : function () {
                setTimeout(le, 0);
              };
      else {
        var Aa = 1,
          Oa = new MutationObserver(le),
          Ta = document.createTextNode(String(Aa));
        Oa.observe(Ta, { characterData: !0 }),
          (_a = function () {
            (Aa = (Aa + 1) % 2), (Ta.data = String(Aa));
          }),
          (ka = !0);
      }
      var Sa = new ra(),
        ja = b(function (e) {
          var t = "&" === e.charAt(0);
          e = t ? e.slice(1) : e;
          var n = "~" === e.charAt(0);
          e = n ? e.slice(1) : e;
          var r = "!" === e.charAt(0);
          return (
            (e = r ? e.slice(1) : e),
            { name: e, once: n, capture: r, passive: t }
          );
        });
      Ve(Ke.prototype);
      var Ia,
        Ea = {
          init: function (e, t) {
            if (
              e.componentInstance &&
              !e.componentInstance._isDestroyed &&
              e.data.keepAlive
            ) {
              var n = e;
              Ea.prepatch(n, n);
            } else {
              (e.componentInstance = Ge(e, Pa)).$mount(t ? e.elm : void 0, t);
            }
          },
          prepatch: function (e, t) {
            var n = t.componentOptions;
            bt(
              (t.componentInstance = e.componentInstance),
              n.propsData,
              n.listeners,
              t,
              n.children
            );
          },
          insert: function (e) {
            var t = e.context,
              n = e.componentInstance;
            n._isMounted || ((n._isMounted = !0), kt(n, "mounted")),
              e.data.keepAlive && (t._isMounted ? At(n) : _t(n, !0));
          },
          destroy: function (e) {
            var t = e.componentInstance;
            t._isDestroyed || (e.data.keepAlive ? xt(t, !0) : t.$destroy());
          },
        },
        Na = Object.keys(Ea),
        Ma = 1,
        La = 2,
        Da = null,
        Pa = null,
        Fa = [],
        Ra = [],
        Ha = {},
        Ba = !1,
        Ua = !1,
        za = 0,
        Va = 0,
        Ka = Date.now;
      if (Vi && !Wi) {
        var Ja = window.performance;
        Ja &&
          "function" == typeof Ja.now &&
          Ka() > document.createEvent("Event").timeStamp &&
          (Ka = function () {
            return Ja.now();
          });
      }
      var qa = 0,
        Wa = function (e, t, n, r, o) {
          (this.vm = e),
            o && (e._watcher = this),
            e._watchers.push(this),
            r
              ? ((this.deep = !!r.deep),
                (this.user = !!r.user),
                (this.lazy = !!r.lazy),
                (this.sync = !!r.sync),
                (this.before = r.before))
              : (this.deep = this.user = this.lazy = this.sync = !1),
            (this.cb = n),
            (this.id = ++qa),
            (this.active = !0),
            (this.dirty = this.lazy),
            (this.deps = []),
            (this.newDeps = []),
            (this.depIds = new ra()),
            (this.newDepIds = new ra()),
            (this.expression = ""),
            "function" == typeof t
              ? (this.getter = t)
              : ((this.getter = j(t)), this.getter || (this.getter = w)),
            (this.value = this.lazy ? void 0 : this.get());
        };
      (Wa.prototype.get = function () {
        E(this);
        var e,
          t = this.vm;
        try {
          e = this.getter.call(t, t);
        } catch (e) {
          if (!this.user) throw e;
          ie(e, t, 'getter for watcher "' + this.expression + '"');
        } finally {
          this.deep && fe(e), N(), this.cleanupDeps();
        }
        return e;
      }),
        (Wa.prototype.addDep = function (e) {
          var t = e.id;
          this.newDepIds.has(t) ||
            (this.newDepIds.add(t),
            this.newDeps.push(e),
            this.depIds.has(t) || e.addSub(this));
        }),
        (Wa.prototype.cleanupDeps = function () {
          for (var e = this.deps.length; e--; ) {
            var t = this.deps[e];
            this.newDepIds.has(t.id) || t.removeSub(this);
          }
          var n = this.depIds;
          (this.depIds = this.newDepIds),
            (this.newDepIds = n),
            this.newDepIds.clear(),
            (n = this.deps),
            (this.deps = this.newDeps),
            (this.newDeps = n),
            (this.newDeps.length = 0);
        }),
        (Wa.prototype.update = function () {
          this.lazy ? (this.dirty = !0) : this.sync ? this.run() : Tt(this);
        }),
        (Wa.prototype.run = function () {
          if (this.active) {
            var e = this.get();
            if (e !== this.value || c(e) || this.deep) {
              var t = this.value;
              if (((this.value = e), this.user))
                try {
                  this.cb.call(this.vm, e, t);
                } catch (e) {
                  ie(
                    e,
                    this.vm,
                    'callback for watcher "' + this.expression + '"'
                  );
                }
              else this.cb.call(this.vm, e, t);
            }
          }
        }),
        (Wa.prototype.evaluate = function () {
          (this.value = this.get()), (this.dirty = !1);
        }),
        (Wa.prototype.depend = function () {
          for (var e = this.deps.length; e--; ) this.deps[e].depend();
        }),
        (Wa.prototype.teardown = function () {
          if (this.active) {
            this.vm._isBeingDestroyed || h(this.vm._watchers, this);
            for (var e = this.deps.length; e--; ) this.deps[e].removeSub(this);
            this.active = !1;
          }
        });
      var Za = { enumerable: !0, configurable: !0, get: w, set: w },
        Ga = { lazy: !0 },
        Xa = 0;
      !(function (e) {
        e.prototype._init = function (e) {
          var t = this;
          (t._uid = Xa++),
            (t._isVue = !0),
            e && e._isComponent
              ? Bt(t, e)
              : (t.$options = Y(Ut(t.constructor), e || {}, t)),
            (t._renderProxy = t),
            (t._self = t),
            ht(t),
            ut(t),
            ot(t),
            kt(t, "beforeCreate"),
            $e(t),
            jt(t),
            ke(t),
            kt(t, "created"),
            t.$options.el && t.$mount(t.$options.el);
        };
      })(Vt),
        (function (e) {
          var t = {};
          t.get = function () {
            return this._data;
          };
          var n = {};
          (n.get = function () {
            return this._props;
          }),
            Object.defineProperty(e.prototype, "$data", t),
            Object.defineProperty(e.prototype, "$props", n),
            (e.prototype.$set = B),
            (e.prototype.$delete = U),
            (e.prototype.$watch = function (e, t, n) {
              var r = this;
              if (l(t)) return Ht(r, e, t, n);
              (n = n || {}), (n.user = !0);
              var o = new Wa(r, e, t, n);
              if (n.immediate)
                try {
                  t.call(r, o.value);
                } catch (e) {
                  ie(
                    e,
                    r,
                    'callback for immediate watcher "' + o.expression + '"'
                  );
                }
              return function () {
                o.teardown();
              };
            });
        })(Vt),
        (function (e) {
          var t = /^hook:/;
          (e.prototype.$on = function (e, n) {
            var r = this;
            if (Array.isArray(e))
              for (var o = 0, i = e.length; o < i; o++) r.$on(e[o], n);
            else
              (r._events[e] || (r._events[e] = [])).push(n),
                t.test(e) && (r._hasHookEvent = !0);
            return r;
          }),
            (e.prototype.$once = function (e, t) {
              function n() {
                r.$off(e, n), t.apply(r, arguments);
              }
              var r = this;
              return (n.fn = t), r.$on(e, n), r;
            }),
            (e.prototype.$off = function (e, t) {
              var n = this;
              if (!arguments.length)
                return (n._events = Object.create(null)), n;
              if (Array.isArray(e)) {
                for (var r = 0, o = e.length; r < o; r++) n.$off(e[r], t);
                return n;
              }
              var i = n._events[e];
              if (!i) return n;
              if (!t) return (n._events[e] = null), n;
              for (var a, s = i.length; s--; )
                if ((a = i[s]) === t || a.fn === t) {
                  i.splice(s, 1);
                  break;
                }
              return n;
            }),
            (e.prototype.$emit = function (e) {
              var t = this,
                n = t._events[e];
              if (n) {
                n = n.length > 1 ? x(n) : n;
                for (
                  var r = x(arguments, 1),
                    o = 'event handler for "' + e + '"',
                    i = 0,
                    a = n.length;
                  i < a;
                  i++
                )
                  ae(n[i], t, r, t, o);
              }
              return t;
            });
        })(Vt),
        (function (e) {
          (e.prototype._update = function (e, t) {
            var n = this,
              r = n.$el,
              o = n._vnode,
              i = mt(n);
            (n._vnode = e),
              (n.$el = o ? n.__patch__(o, e) : n.__patch__(n.$el, e, t, !1)),
              i(),
              r && (r.__vue__ = null),
              n.$el && (n.$el.__vue__ = n),
              n.$vnode &&
                n.$parent &&
                n.$vnode === n.$parent._vnode &&
                (n.$parent.$el = n.$el);
          }),
            (e.prototype.$forceUpdate = function () {
              var e = this;
              e._watcher && e._watcher.update();
            }),
            (e.prototype.$destroy = function () {
              var e = this;
              if (!e._isBeingDestroyed) {
                kt(e, "beforeDestroy"), (e._isBeingDestroyed = !0);
                var t = e.$parent;
                !t ||
                  t._isBeingDestroyed ||
                  e.$options.abstract ||
                  h(t.$children, e),
                  e._watcher && e._watcher.teardown();
                for (var n = e._watchers.length; n--; )
                  e._watchers[n].teardown();
                e._data.__ob__ && e._data.__ob__.vmCount--,
                  (e._isDestroyed = !0),
                  e.__patch__(e._vnode, null),
                  kt(e, "destroyed"),
                  e.$off(),
                  e.$el && (e.$el.__vue__ = null),
                  e.$vnode && (e.$vnode.parent = null);
              }
            });
        })(Vt),
        (function (e) {
          Ve(e.prototype),
            (e.prototype.$nextTick = function (e) {
              return ue(e, this);
            }),
            (e.prototype._render = function () {
              var e = this,
                t = e.$options,
                n = t.render,
                r = t._parentVnode;
              r &&
                (e.$scopedSlots = Oe(
                  r.data.scopedSlots,
                  e.$slots,
                  e.$scopedSlots
                )),
                (e.$vnode = r);
              var o;
              try {
                (Da = e), (o = n.call(e._renderProxy, e.$createElement));
              } catch (t) {
                ie(t, e, "render"), (o = e._vnode);
              } finally {
                Da = null;
              }
              return (
                Array.isArray(o) && 1 === o.length && (o = o[0]),
                o instanceof fa || (o = da()),
                (o.parent = r),
                o
              );
            });
        })(Vt);
      var Ya = [String, RegExp, Array],
        Qa = {
          name: "keep-alive",
          abstract: !0,
          props: { include: Ya, exclude: Ya, max: [String, Number] },
          created: function () {
            (this.cache = Object.create(null)), (this.keys = []);
          },
          destroyed: function () {
            for (var e in this.cache) en(this.cache, e, this.keys);
          },
          mounted: function () {
            var e = this;
            this.$watch("include", function (t) {
              Qt(e, function (e) {
                return Yt(t, e);
              });
            }),
              this.$watch("exclude", function (t) {
                Qt(e, function (e) {
                  return !Yt(t, e);
                });
              });
          },
          render: function () {
            var e = this.$slots.default,
              t = lt(e),
              n = t && t.componentOptions;
            if (n) {
              var r = Xt(n),
                o = this,
                i = o.include,
                a = o.exclude;
              if ((i && (!r || !Yt(i, r))) || (a && r && Yt(a, r))) return t;
              var s = this,
                c = s.cache,
                l = s.keys,
                u =
                  null == t.key
                    ? n.Ctor.cid + (n.tag ? "::" + n.tag : "")
                    : t.key;
              c[u]
                ? ((t.componentInstance = c[u].componentInstance),
                  h(l, u),
                  l.push(u))
                : ((c[u] = t),
                  l.push(u),
                  this.max &&
                    l.length > parseInt(this.max) &&
                    en(c, l[0], l, this._vnode)),
                (t.data.keepAlive = !0);
            }
            return t || (e && e[0]);
          },
        },
        es = { KeepAlive: Qa };
      !(function (e) {
        var t = {};
        (t.get = function () {
          return Hi;
        }),
          Object.defineProperty(e, "config", t),
          (e.util = {
            warn: sa,
            extend: k,
            mergeOptions: Y,
            defineReactive: H,
          }),
          (e.set = B),
          (e.delete = U),
          (e.nextTick = ue),
          (e.observable = function (e) {
            return R(e), e;
          }),
          (e.options = Object.create(null)),
          Fi.forEach(function (t) {
            e.options[t + "s"] = Object.create(null);
          }),
          (e.options._base = e),
          k(e.options.components, es),
          Kt(e),
          Jt(e),
          qt(e),
          Gt(e);
      })(Vt),
        Object.defineProperty(Vt.prototype, "$isServer", { get: oa }),
        Object.defineProperty(Vt.prototype, "$ssrContext", {
          get: function () {
            return this.$vnode && this.$vnode.ssrContext;
          },
        }),
        Object.defineProperty(Vt, "FunctionalRenderContext", { value: Ke }),
        (Vt.version = "2.6.12");
      var ts,
        ns,
        rs,
        os,
        is,
        as,
        ss,
        cs,
        ls,
        us,
        fs = m("style,class"),
        ps = m("input,textarea,option,select,progress"),
        ds = function (e, t, n) {
          return (
            ("value" === n && ps(e) && "button" !== t) ||
            ("selected" === n && "option" === e) ||
            ("checked" === n && "input" === e) ||
            ("muted" === n && "video" === e)
          );
        },
        vs = m("contenteditable,draggable,spellcheck"),
        ms = m("events,caret,typing,plaintext-only"),
        hs = function (e, t) {
          return xs(t) || "false" === t
            ? "false"
            : "contenteditable" === e && ms(t)
            ? t
            : "true";
        },
        ys = m(
          "allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"
        ),
        bs = "http://www.w3.org/1999/xlink",
        gs = function (e) {
          return ":" === e.charAt(5) && "xlink" === e.slice(0, 5);
        },
        _s = function (e) {
          return gs(e) ? e.slice(6, e.length) : "";
        },
        xs = function (e) {
          return null == e || !1 === e;
        },
        ks = {
          svg: "http://www.w3.org/2000/svg",
          math: "http://www.w3.org/1998/Math/MathML",
        },
        $s = m(
          "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"
        ),
        ws = m(
          "svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",
          !0
        ),
        Cs = function (e) {
          return "pre" === e;
        },
        As = function (e) {
          return $s(e) || ws(e);
        },
        Os = Object.create(null),
        Ts = m("text,number,password,search,email,tel,url"),
        Ss = Object.freeze({
          createElement: pn,
          createElementNS: dn,
          createTextNode: vn,
          createComment: mn,
          insertBefore: hn,
          removeChild: yn,
          appendChild: bn,
          parentNode: gn,
          nextSibling: _n,
          tagName: xn,
          setTextContent: kn,
          setStyleScope: $n,
        }),
        js = {
          create: function (e, t) {
            wn(t);
          },
          update: function (e, t) {
            e.data.ref !== t.data.ref && (wn(e, !0), wn(t));
          },
          destroy: function (e) {
            wn(e, !0);
          },
        },
        Is = new fa("", {}, []),
        Es = ["create", "activate", "update", "remove", "destroy"],
        Ns = {
          create: Tn,
          update: Tn,
          destroy: function (e) {
            Tn(e, Is);
          },
        },
        Ms = Object.create(null),
        Ls = [js, Ns],
        Ds = { create: Nn, update: Nn },
        Ps = { create: Dn, update: Dn },
        Fs = /[\w).+\-_$\]]/,
        Rs = "__r",
        Hs = "__c",
        Bs = ka && !(Yi && Number(Yi[1]) <= 53),
        Us = { create: mr, update: mr },
        zs = { create: hr, update: hr },
        Vs = b(function (e) {
          var t = {},
            n = /;(?![^(]*\))/g,
            r = /:(.+)/;
          return (
            e.split(n).forEach(function (e) {
              if (e) {
                var n = e.split(r);
                n.length > 1 && (t[n[0].trim()] = n[1].trim());
              }
            }),
            t
          );
        }),
        Ks = /^--/,
        Js = /\s*!important$/,
        qs = function (e, t, n) {
          if (Ks.test(t)) e.style.setProperty(t, n);
          else if (Js.test(n))
            e.style.setProperty(Ni(t), n.replace(Js, ""), "important");
          else {
            var r = Zs(t);
            if (Array.isArray(n))
              for (var o = 0, i = n.length; o < i; o++) e.style[r] = n[o];
            else e.style[r] = n;
          }
        },
        Ws = ["Webkit", "Moz", "ms"],
        Zs = b(function (e) {
          if (
            ((us = us || document.createElement("div").style),
            "filter" !== (e = ji(e)) && e in us)
          )
            return e;
          for (
            var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0;
            n < Ws.length;
            n++
          ) {
            var r = Ws[n] + t;
            if (r in us) return r;
          }
        }),
        Gs = { create: $r, update: $r },
        Xs = /\s+/,
        Ys = b(function (e) {
          return {
            enterClass: e + "-enter",
            enterToClass: e + "-enter-to",
            enterActiveClass: e + "-enter-active",
            leaveClass: e + "-leave",
            leaveToClass: e + "-leave-to",
            leaveActiveClass: e + "-leave-active",
          };
        }),
        Qs = Vi && !Zi,
        ec = "transition",
        tc = "animation",
        nc = "transition",
        rc = "transitionend",
        oc = "animation",
        ic = "animationend";
      Qs &&
        (void 0 === window.ontransitionend &&
          void 0 !== window.onwebkittransitionend &&
          ((nc = "WebkitTransition"), (rc = "webkitTransitionEnd")),
        void 0 === window.onanimationend &&
          void 0 !== window.onwebkitanimationend &&
          ((oc = "WebkitAnimation"), (ic = "webkitAnimationEnd")));
      var ac = Vi
          ? window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : setTimeout
          : function (e) {
              return e();
            },
        sc = /\b(transform|all)(,|$)/,
        cc = Vi
          ? {
              create: Fr,
              activate: Fr,
              remove: function (e, t) {
                !0 !== e.data.show ? Lr(e, t) : t();
              },
            }
          : {},
        lc = [Ds, Ps, Us, zs, Gs, cc],
        uc = lc.concat(Ls),
        fc = (function (e) {
          function t(e) {
            return new fa(I.tagName(e).toLowerCase(), {}, [], void 0, e);
          }
          function n(e, t) {
            function n() {
              0 == --n.listeners && a(e);
            }
            return (n.listeners = t), n;
          }
          function a(e) {
            var t = I.parentNode(e);
            o(t) && I.removeChild(t, e);
          }
          function c(e, t, n, r, a, s, c) {
            if (
              (o(e.elm) && o(s) && (e = s[c] = L(e)),
              (e.isRootInsert = !a),
              !l(e, t, n, r))
            ) {
              var u = e.data,
                f = e.children,
                v = e.tag;
              o(v)
                ? ((e.elm = e.ns
                    ? I.createElementNS(e.ns, v)
                    : I.createElement(v, e)),
                  y(e),
                  d(e, f, t),
                  o(u) && h(e, t),
                  p(n, e.elm, r))
                : i(e.isComment)
                ? ((e.elm = I.createComment(e.text)), p(n, e.elm, r))
                : ((e.elm = I.createTextNode(e.text)), p(n, e.elm, r));
            }
          }
          function l(e, t, n, r) {
            var a = e.data;
            if (o(a)) {
              var s = o(e.componentInstance) && a.keepAlive;
              if (
                (o((a = a.hook)) && o((a = a.init)) && a(e, !1),
                o(e.componentInstance))
              )
                return u(e, t), p(n, e.elm, r), i(s) && f(e, t, n, r), !0;
            }
          }
          function u(e, t) {
            o(e.data.pendingInsert) &&
              (t.push.apply(t, e.data.pendingInsert),
              (e.data.pendingInsert = null)),
              (e.elm = e.componentInstance.$el),
              v(e) ? (h(e, t), y(e)) : (wn(e), t.push(e));
          }
          function f(e, t, n, r) {
            for (var i, a = e; a.componentInstance; )
              if (
                ((a = a.componentInstance._vnode),
                o((i = a.data)) && o((i = i.transition)))
              ) {
                for (i = 0; i < S.activate.length; ++i) S.activate[i](Is, a);
                t.push(a);
                break;
              }
            p(n, e.elm, r);
          }
          function p(e, t, n) {
            o(e) &&
              (o(n)
                ? I.parentNode(n) === e && I.insertBefore(e, t, n)
                : I.appendChild(e, t));
          }
          function d(e, t, n) {
            if (Array.isArray(t))
              for (var r = 0; r < t.length; ++r)
                c(t[r], n, e.elm, null, !0, t, r);
            else
              s(e.text) &&
                I.appendChild(e.elm, I.createTextNode(String(e.text)));
          }
          function v(e) {
            for (; e.componentInstance; ) e = e.componentInstance._vnode;
            return o(e.tag);
          }
          function h(e, t) {
            for (var n = 0; n < S.create.length; ++n) S.create[n](Is, e);
            (O = e.data.hook),
              o(O) &&
                (o(O.create) && O.create(Is, e), o(O.insert) && t.push(e));
          }
          function y(e) {
            var t;
            if (o((t = e.fnScopeId))) I.setStyleScope(e.elm, t);
            else
              for (var n = e; n; )
                o((t = n.context)) &&
                  o((t = t.$options._scopeId)) &&
                  I.setStyleScope(e.elm, t),
                  (n = n.parent);
            o((t = Pa)) &&
              t !== e.context &&
              t !== e.fnContext &&
              o((t = t.$options._scopeId)) &&
              I.setStyleScope(e.elm, t);
          }
          function b(e, t, n, r, o, i) {
            for (; r <= o; ++r) c(n[r], i, e, t, !1, n, r);
          }
          function g(e) {
            var t,
              n,
              r = e.data;
            if (o(r))
              for (
                o((t = r.hook)) && o((t = t.destroy)) && t(e), t = 0;
                t < S.destroy.length;
                ++t
              )
                S.destroy[t](e);
            if (o((t = e.children)))
              for (n = 0; n < e.children.length; ++n) g(e.children[n]);
          }
          function _(e, t, n) {
            for (; t <= n; ++t) {
              var r = e[t];
              o(r) && (o(r.tag) ? (x(r), g(r)) : a(r.elm));
            }
          }
          function x(e, t) {
            if (o(t) || o(e.data)) {
              var r,
                i = S.remove.length + 1;
              for (
                o(t) ? (t.listeners += i) : (t = n(e.elm, i)),
                  o((r = e.componentInstance)) &&
                    o((r = r._vnode)) &&
                    o(r.data) &&
                    x(r, t),
                  r = 0;
                r < S.remove.length;
                ++r
              )
                S.remove[r](e, t);
              o((r = e.data.hook)) && o((r = r.remove)) ? r(e, t) : t();
            } else a(e.elm);
          }
          function k(e, t, n, i, a) {
            for (
              var s,
                l,
                u,
                f,
                p = 0,
                d = 0,
                v = t.length - 1,
                m = t[0],
                h = t[v],
                y = n.length - 1,
                g = n[0],
                x = n[y],
                k = !a;
              p <= v && d <= y;

            )
              r(m)
                ? (m = t[++p])
                : r(h)
                ? (h = t[--v])
                : Cn(m, g)
                ? (w(m, g, i, n, d), (m = t[++p]), (g = n[++d]))
                : Cn(h, x)
                ? (w(h, x, i, n, y), (h = t[--v]), (x = n[--y]))
                : Cn(m, x)
                ? (w(m, x, i, n, y),
                  k && I.insertBefore(e, m.elm, I.nextSibling(h.elm)),
                  (m = t[++p]),
                  (x = n[--y]))
                : Cn(h, g)
                ? (w(h, g, i, n, d),
                  k && I.insertBefore(e, h.elm, m.elm),
                  (h = t[--v]),
                  (g = n[++d]))
                : (r(s) && (s = On(t, p, v)),
                  (l = o(g.key) ? s[g.key] : $(g, t, p, v)),
                  r(l)
                    ? c(g, i, e, m.elm, !1, n, d)
                    : ((u = t[l]),
                      Cn(u, g)
                        ? (w(u, g, i, n, d),
                          (t[l] = void 0),
                          k && I.insertBefore(e, u.elm, m.elm))
                        : c(g, i, e, m.elm, !1, n, d)),
                  (g = n[++d]));
            p > v
              ? ((f = r(n[y + 1]) ? null : n[y + 1].elm), b(e, f, n, d, y, i))
              : d > y && _(t, p, v);
          }
          function $(e, t, n, r) {
            for (var i = n; i < r; i++) {
              var a = t[i];
              if (o(a) && Cn(e, a)) return i;
            }
          }
          function w(e, t, n, a, s, c) {
            if (e !== t) {
              o(t.elm) && o(a) && (t = a[s] = L(t));
              var l = (t.elm = e.elm);
              if (i(e.isAsyncPlaceholder))
                return void (o(t.asyncFactory.resolved)
                  ? A(e.elm, t, n)
                  : (t.isAsyncPlaceholder = !0));
              if (
                i(t.isStatic) &&
                i(e.isStatic) &&
                t.key === e.key &&
                (i(t.isCloned) || i(t.isOnce))
              )
                return void (t.componentInstance = e.componentInstance);
              var u,
                f = t.data;
              o(f) && o((u = f.hook)) && o((u = u.prepatch)) && u(e, t);
              var p = e.children,
                d = t.children;
              if (o(f) && v(t)) {
                for (u = 0; u < S.update.length; ++u) S.update[u](e, t);
                o((u = f.hook)) && o((u = u.update)) && u(e, t);
              }
              r(t.text)
                ? o(p) && o(d)
                  ? p !== d && k(l, p, d, n, c)
                  : o(d)
                  ? (o(e.text) && I.setTextContent(l, ""),
                    b(l, null, d, 0, d.length - 1, n))
                  : o(p)
                  ? _(p, 0, p.length - 1)
                  : o(e.text) && I.setTextContent(l, "")
                : e.text !== t.text && I.setTextContent(l, t.text),
                o(f) && o((u = f.hook)) && o((u = u.postpatch)) && u(e, t);
            }
          }
          function C(e, t, n) {
            if (i(n) && o(e.parent)) e.parent.data.pendingInsert = t;
            else for (var r = 0; r < t.length; ++r) t[r].data.hook.insert(t[r]);
          }
          function A(e, t, n, r) {
            var a,
              s = t.tag,
              c = t.data,
              l = t.children;
            if (
              ((r = r || (c && c.pre)),
              (t.elm = e),
              i(t.isComment) && o(t.asyncFactory))
            )
              return (t.isAsyncPlaceholder = !0), !0;
            if (
              o(c) &&
              (o((a = c.hook)) && o((a = a.init)) && a(t, !0),
              o((a = t.componentInstance)))
            )
              return u(t, n), !0;
            if (o(s)) {
              if (o(l))
                if (e.hasChildNodes())
                  if (
                    o((a = c)) &&
                    o((a = a.domProps)) &&
                    o((a = a.innerHTML))
                  ) {
                    if (a !== e.innerHTML) return !1;
                  } else {
                    for (
                      var f = !0, p = e.firstChild, v = 0;
                      v < l.length;
                      v++
                    ) {
                      if (!p || !A(p, l[v], n, r)) {
                        f = !1;
                        break;
                      }
                      p = p.nextSibling;
                    }
                    if (!f || p) return !1;
                  }
                else d(t, l, n);
              if (o(c)) {
                var m = !1;
                for (var y in c)
                  if (!E(y)) {
                    (m = !0), h(t, n);
                    break;
                  }
                !m && c.class && fe(c.class);
              }
            } else e.data !== t.text && (e.data = t.text);
            return !0;
          }
          var O,
            T,
            S = {},
            j = e.modules,
            I = e.nodeOps;
          for (O = 0; O < Es.length; ++O)
            for (S[Es[O]] = [], T = 0; T < j.length; ++T)
              o(j[T][Es[O]]) && S[Es[O]].push(j[T][Es[O]]);
          var E = m("attrs,class,staticClass,staticStyle,key");
          return function (e, n, a, s) {
            if (r(n)) return void (o(e) && g(e));
            var l = !1,
              u = [];
            if (r(e)) (l = !0), c(n, u);
            else {
              var f = o(e.nodeType);
              if (!f && Cn(e, n)) w(e, n, u, null, null, s);
              else {
                if (f) {
                  if (
                    (1 === e.nodeType &&
                      e.hasAttribute(Pi) &&
                      (e.removeAttribute(Pi), (a = !0)),
                    i(a) && A(e, n, u))
                  )
                    return C(n, u, !0), e;
                  e = t(e);
                }
                var p = e.elm,
                  d = I.parentNode(p);
                if (
                  (c(n, u, p._leaveCb ? null : d, I.nextSibling(p)),
                  o(n.parent))
                )
                  for (var m = n.parent, h = v(n); m; ) {
                    for (var y = 0; y < S.destroy.length; ++y) S.destroy[y](m);
                    if (((m.elm = n.elm), h)) {
                      for (var b = 0; b < S.create.length; ++b)
                        S.create[b](Is, m);
                      var x = m.data.hook.insert;
                      if (x.merged)
                        for (var k = 1; k < x.fns.length; k++) x.fns[k]();
                    } else wn(m);
                    m = m.parent;
                  }
                o(d) ? _([e], 0, 0) : o(e.tag) && g(e);
              }
            }
            return C(n, u, l), n.elm;
          };
        })({ nodeOps: Ss, modules: uc });
      Zi &&
        document.addEventListener("selectionchange", function () {
          var e = document.activeElement;
          e && e.vmodel && Kr(e, "input");
        });
      var pc = {
          inserted: function (e, t, n, r) {
            "select" === n.tag
              ? (r.elm && !r.elm._vOptions
                  ? me(n, "postpatch", function () {
                      pc.componentUpdated(e, t, n);
                    })
                  : Rr(e, t, n.context),
                (e._vOptions = [].map.call(e.options, Ur)))
              : ("textarea" === n.tag || Ts(e.type)) &&
                ((e._vModifiers = t.modifiers),
                t.modifiers.lazy ||
                  (e.addEventListener("compositionstart", zr),
                  e.addEventListener("compositionend", Vr),
                  e.addEventListener("change", Vr),
                  Zi && (e.vmodel = !0)));
          },
          componentUpdated: function (e, t, n) {
            if ("select" === n.tag) {
              Rr(e, t, n.context);
              var r = e._vOptions,
                o = (e._vOptions = [].map.call(e.options, Ur));
              if (
                o.some(function (e, t) {
                  return !C(e, r[t]);
                })
              ) {
                (e.multiple
                  ? t.value.some(function (e) {
                      return Br(e, o);
                    })
                  : t.value !== t.oldValue && Br(t.value, o)) &&
                  Kr(e, "change");
              }
            }
          },
        },
        dc = {
          bind: function (e, t, n) {
            var r = t.value;
            n = Jr(n);
            var o = n.data && n.data.transition,
              i = (e.__vOriginalDisplay =
                "none" === e.style.display ? "" : e.style.display);
            r && o
              ? ((n.data.show = !0),
                Mr(n, function () {
                  e.style.display = i;
                }))
              : (e.style.display = r ? i : "none");
          },
          update: function (e, t, n) {
            var r = t.value;
            !r != !t.oldValue &&
              ((n = Jr(n)),
              n.data && n.data.transition
                ? ((n.data.show = !0),
                  r
                    ? Mr(n, function () {
                        e.style.display = e.__vOriginalDisplay;
                      })
                    : Lr(n, function () {
                        e.style.display = "none";
                      }))
                : (e.style.display = r ? e.__vOriginalDisplay : "none"));
          },
          unbind: function (e, t, n, r, o) {
            o || (e.style.display = e.__vOriginalDisplay);
          },
        },
        vc = { model: pc, show: dc },
        mc = {
          name: String,
          appear: Boolean,
          css: Boolean,
          mode: String,
          type: String,
          enterClass: String,
          leaveClass: String,
          enterToClass: String,
          leaveToClass: String,
          enterActiveClass: String,
          leaveActiveClass: String,
          appearClass: String,
          appearActiveClass: String,
          appearToClass: String,
          duration: [Number, String, Object],
        },
        hc = function (e) {
          return e.tag || ct(e);
        },
        yc = function (e) {
          return "show" === e.name;
        },
        bc = {
          name: "transition",
          props: mc,
          abstract: !0,
          render: function (e) {
            var t = this,
              n = this.$slots.default;
            if (n && ((n = n.filter(hc)), n.length)) {
              var r = this.mode,
                o = n[0];
              if (Gr(this.$vnode)) return o;
              var i = qr(o);
              if (!i) return o;
              if (this._leaving) return Zr(e, o);
              var a = "__transition-" + this._uid + "-";
              i.key =
                null == i.key
                  ? i.isComment
                    ? a + "comment"
                    : a + i.tag
                  : s(i.key)
                  ? 0 === String(i.key).indexOf(a)
                    ? i.key
                    : a + i.key
                  : i.key;
              var c = ((i.data || (i.data = {})).transition = Wr(this)),
                l = this._vnode,
                u = qr(l);
              if (
                (i.data.directives &&
                  i.data.directives.some(yc) &&
                  (i.data.show = !0),
                u &&
                  u.data &&
                  !Xr(i, u) &&
                  !ct(u) &&
                  (!u.componentInstance ||
                    !u.componentInstance._vnode.isComment))
              ) {
                var f = (u.data.transition = k({}, c));
                if ("out-in" === r)
                  return (
                    (this._leaving = !0),
                    me(f, "afterLeave", function () {
                      (t._leaving = !1), t.$forceUpdate();
                    }),
                    Zr(e, o)
                  );
                if ("in-out" === r) {
                  if (ct(i)) return l;
                  var p,
                    d = function () {
                      p();
                    };
                  me(c, "afterEnter", d),
                    me(c, "enterCancelled", d),
                    me(f, "delayLeave", function (e) {
                      p = e;
                    });
                }
              }
              return o;
            }
          },
        },
        gc = k({ tag: String, moveClass: String }, mc);
      delete gc.mode;
      var _c = {
          props: gc,
          beforeMount: function () {
            var e = this,
              t = this._update;
            this._update = function (n, r) {
              var o = mt(e);
              e.__patch__(e._vnode, e.kept, !1, !0),
                (e._vnode = e.kept),
                o(),
                t.call(e, n, r);
            };
          },
          render: function (e) {
            for (
              var t = this.tag || this.$vnode.data.tag || "span",
                n = Object.create(null),
                r = (this.prevChildren = this.children),
                o = this.$slots.default || [],
                i = (this.children = []),
                a = Wr(this),
                s = 0;
              s < o.length;
              s++
            ) {
              var c = o[s];
              if (c.tag)
                if (null != c.key && 0 !== String(c.key).indexOf("__vlist"))
                  i.push(c),
                    (n[c.key] = c),
                    ((c.data || (c.data = {})).transition = a);
            }
            if (r) {
              for (var l = [], u = [], f = 0; f < r.length; f++) {
                var p = r[f];
                (p.data.transition = a),
                  (p.data.pos = p.elm.getBoundingClientRect()),
                  n[p.key] ? l.push(p) : u.push(p);
              }
              (this.kept = e(t, null, l)), (this.removed = u);
            }
            return e(t, null, i);
          },
          updated: function () {
            var e = this.prevChildren,
              t = this.moveClass || (this.name || "v") + "-move";
            e.length &&
              this.hasMove(e[0].elm, t) &&
              (e.forEach(Yr),
              e.forEach(Qr),
              e.forEach(eo),
              (this._reflow = document.body.offsetHeight),
              e.forEach(function (e) {
                if (e.data.moved) {
                  var n = e.elm,
                    r = n.style;
                  Tr(n, t),
                    (r.transform =
                      r.WebkitTransform =
                      r.transitionDuration =
                        ""),
                    n.addEventListener(
                      rc,
                      (n._moveCb = function e(r) {
                        (r && r.target !== n) ||
                          (r && !/transform$/.test(r.propertyName)) ||
                          (n.removeEventListener(rc, e),
                          (n._moveCb = null),
                          Sr(n, t));
                      })
                    );
                }
              }));
          },
          methods: {
            hasMove: function (e, t) {
              if (!Qs) return !1;
              if (this._hasMove) return this._hasMove;
              var n = e.cloneNode();
              e._transitionClasses &&
                e._transitionClasses.forEach(function (e) {
                  Cr(n, e);
                }),
                wr(n, t),
                (n.style.display = "none"),
                this.$el.appendChild(n);
              var r = Ir(n);
              return this.$el.removeChild(n), (this._hasMove = r.hasTransform);
            },
          },
        },
        xc = { Transition: bc, TransitionGroup: _c };
      (Vt.config.mustUseProp = ds),
        (Vt.config.isReservedTag = As),
        (Vt.config.isReservedAttr = fs),
        (Vt.config.getTagNamespace = ln),
        (Vt.config.isUnknownElement = un),
        k(Vt.options.directives, vc),
        k(Vt.options.components, xc),
        (Vt.prototype.__patch__ = Vi ? fc : w),
        (Vt.prototype.$mount = function (e, t) {
          return (e = e && Vi ? fn(e) : void 0), yt(this, e, t);
        }),
        Vi &&
          setTimeout(function () {
            Hi.devtools && ia && ia.emit("init", Vt);
          }, 0);
      var kc,
        $c,
        wc,
        Cc,
        Ac,
        Oc,
        Tc,
        Sc,
        jc,
        Ic,
        Ec,
        Nc,
        Mc,
        Lc = /\{\{((?:.|\r?<br>)+?)\}\}/g,
        Dc = /[-.*+?^${}()|[\]\/\\]/g,
        Pc = b(function (e) {
          var t = e[0].replace(Dc, "\\$&"),
            n = e[1].replace(Dc, "\\$&");
          return new RegExp(t + "((?:.|\<br>)+?)" + n, "g");
        }),
        Fc = { staticKeys: ["staticClass"], transformNode: no, genData: ro },
        Rc = { staticKeys: ["staticStyle"], transformNode: oo, genData: io },
        Hc = {
          decode: function (e) {
            return (
              (kc = kc || document.createElement("div")),
              (kc.innerHTML = e),
              kc.textContent
            );
          },
        },
        Bc = m(
          "area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"
        ),
        Uc = m("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
        zc = m(
          "address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"
        ),
        Vc =
          /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        Kc =
          /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
        Jc = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + Bi.source + "]*",
        qc = "((?:" + Jc + "\\:)?" + Jc + ")",
        Wc = new RegExp("^<" + qc),
        Zc = /^\s*(\/?)>/,
        Gc = new RegExp("^<\\/" + qc + "[^>]*>"),
        Xc = /^<!DOCTYPE [^>]+>/i,
        Yc = /^<!\--/,
        Qc = /^<!\[/,
        el = m("script,style,textarea", !0),
        tl = {},
        nl = {
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&amp;": "&",
          "&#10;": "<br>",
          "&#9;": "\t",
          "&#39;": "'",
        },
        rl = /&(?:lt|gt|quot|amp|#39);/g,
        ol = /&(?:lt|gt|quot|amp|#39|#10|#9);/g,
        il = m("pre,textarea", !0),
        al = function (e, t) {
          return e && il(e) && "<br>" === t[0];
        },
        sl = /^@|^v-on:/,
        cl = /^v-|^@|^:|^#/,
        ll = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
        ul = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
        fl = /^\(|\)$/g,
        pl = /^\[.*\]$/,
        dl = /:(.*)$/,
        vl = /^:|^\.|^v-bind:/,
        ml = /\.[^.\]]+(?=[^\]]*$)/g,
        hl = /^v-slot(:|$)|^#/,
        yl = /[\r<br>]/,
        bl = /\s+/g,
        gl = b(Hc.decode),
        _l = "_empty_",
        xl = /^xmlns:NS\d+/,
        kl = /^NS\d+:/,
        $l = { preTransformNode: Mo },
        wl = [Fc, Rc, $l],
        Cl = { model: ar, text: Do, html: Po },
        Al = {
          expectHTML: !0,
          modules: wl,
          directives: Cl,
          isPreTag: Cs,
          isUnaryTag: Bc,
          mustUseProp: ds,
          canBeLeftOpenTag: Uc,
          isReservedTag: As,
          getTagNamespace: ln,
          staticKeys: (function (e) {
            return e
              .reduce(function (e, t) {
                return e.concat(t.staticKeys || []);
              }, [])
              .join(",");
          })(wl),
        },
        Ol = b(Ro),
        Tl = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,
        Sl = /\([^)]*?\);*$/,
        jl =
          /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
        Il = {
          esc: 27,
          tab: 9,
          enter: 13,
          space: 32,
          up: 38,
          left: 37,
          right: 39,
          down: 40,
          delete: [8, 46],
        },
        El = {
          esc: ["Esc", "Escape"],
          tab: "Tab",
          enter: "Enter",
          space: ["", "Spacebar"],
          up: ["Up", "ArrowUp"],
          left: ["Left", "ArrowLeft"],
          right: ["Right", "ArrowRight"],
          down: ["Down", "ArrowDown"],
          delete: ["Backspace", "Delete", "Del"],
        },
        Nl = function (e) {
          return "if(" + e + ")return null;";
        },
        Ml = {
          stop: "$event.stopPropagation();",
          prevent: "$event.preventDefault();",
          self: Nl("$event.target !== $event.currentTarget"),
          ctrl: Nl("!$event.ctrlKey"),
          shift: Nl("!$event.shiftKey"),
          alt: Nl("!$event.altKey"),
          meta: Nl("!$event.metaKey"),
          left: Nl("'button' in $event && $event.button !== 0"),
          middle: Nl("'button' in $event && $event.button !== 1"),
          right: Nl("'button' in $event && $event.button !== 2"),
        },
        Ll = { on: Wo, bind: Zo, cloak: w },
        Dl = function (e) {
          (this.options = e),
            (this.warn = e.warn || Rn),
            (this.transforms = Hn(e.modules, "transformCode")),
            (this.dataGenFns = Hn(e.modules, "genData")),
            (this.directives = k(k({}, Ll), e.directives));
          var t = e.isReservedTag || Li;
          (this.maybeComponent = function (e) {
            return !!e.component || !t(e.tag);
          }),
            (this.onceId = 0),
            (this.staticRenderFns = []),
            (this.pre = !1);
        },
        Pl =
          (new RegExp(
            "\\b" +
              "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments"
                .split(",")
                .join("\\b|\\b") +
              "\\b"
          ),
          new RegExp(
            "\\b" +
              "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") +
              "\\s*\\([^\\)]*\\)"
          ),
          (function (e) {
            return function (t) {
              function n(n, r) {
                var o = Object.create(t),
                  i = [],
                  a = [],
                  s = function (e, t, n) {
                    (n ? a : i).push(e);
                  };
                if (r) {
                  r.modules &&
                    (o.modules = (t.modules || []).concat(r.modules)),
                    r.directives &&
                      (o.directives = k(
                        Object.create(t.directives || null),
                        r.directives
                      ));
                  for (var c in r)
                    "modules" !== c && "directives" !== c && (o[c] = r[c]);
                }
                o.warn = s;
                var l = e(n.trim(), o);
                return (l.errors = i), (l.tips = a), l;
              }
              return { compile: n, compileToFunctions: xi(n) };
            };
          })(function (e, t) {
            var n = lo(e.trim(), t);
            !1 !== t.optimize && Fo(n, t);
            var r = Go(n, t);
            return {
              ast: n,
              render: r.render,
              staticRenderFns: r.staticRenderFns,
            };
          })),
        Fl = Pl(Al),
        Rl = (Fl.compile, Fl.compileToFunctions),
        Hl = !!Vi && ki(!1),
        Bl = !!Vi && ki(!0),
        Ul = b(function (e) {
          var t = fn(e);
          return t && t.innerHTML;
        }),
        zl = Vt.prototype.$mount;
      (Vt.prototype.$mount = function (e, t) {
        if (
          (e = e && fn(e)) === document.body ||
          e === document.documentElement
        )
          return this;
        var n = this.$options;
        if (!n.render) {
          var r = n.template;
          if (r)
            if ("string" == typeof r) "#" === r.charAt(0) && (r = Ul(r));
            else {
              if (!r.nodeType) return this;
              r = r.innerHTML;
            }
          else e && (r = $i(e));
          if (r) {
            var o = Rl(
                r,
                {
                  outputSourceRange: !1,
                  shouldDecodeNewlines: Hl,
                  shouldDecodeNewlinesForHref: Bl,
                  delimiters: n.delimiters,
                  comments: n.comments,
                },
                this
              ),
              i = o.render,
              a = o.staticRenderFns;
            (n.render = i), (n.staticRenderFns = a);
          }
        }
        return zl.call(this, e, t);
      }),
        (Vt.compile = Rl),
        (t.a = Vt);
    }.call(t, n(1), n(7).setImmediate));
  },
  function (e, t, n) {
    (function (e) {
      function r(e, t) {
        (this._id = e), (this._clearFn = t);
      }
      var o =
          (void 0 !== e && e) || ("undefined" != typeof self && self) || window,
        i = Function.prototype.apply;
      (t.setTimeout = function () {
        return new r(i.call(setTimeout, o, arguments), clearTimeout);
      }),
        (t.setInterval = function () {
          return new r(i.call(setInterval, o, arguments), clearInterval);
        }),
        (t.clearTimeout = t.clearInterval =
          function (e) {
            e && e.close();
          }),
        (r.prototype.unref = r.prototype.ref = function () {}),
        (r.prototype.close = function () {
          this._clearFn.call(o, this._id);
        }),
        (t.enroll = function (e, t) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
        }),
        (t.unenroll = function (e) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
        }),
        (t._unrefActive = t.active =
          function (e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 &&
              (e._idleTimeoutId = setTimeout(function () {
                e._onTimeout && e._onTimeout();
              }, t));
          }),
        n(8),
        (t.setImmediate =
          ("undefined" != typeof self && self.setImmediate) ||
          (void 0 !== e && e.setImmediate) ||
          (this && this.setImmediate)),
        (t.clearImmediate =
          ("undefined" != typeof self && self.clearImmediate) ||
          (void 0 !== e && e.clearImmediate) ||
          (this && this.clearImmediate));
    }.call(t, n(1)));
  },
  function (e, t, n) {
    (function (e, t) {
      !(function (e, n) {
        "use strict";
        function r(e) {
          "function" != typeof e && (e = new Function("" + e));
          for (
            var t = new Array(arguments.length - 1), n = 0;
            n < t.length;
            n++
          )
            t[n] = arguments[n + 1];
          var r = { callback: e, args: t };
          return (l[c] = r), s(c), c++;
        }
        function o(e) {
          delete l[e];
        }
        function i(e) {
          var t = e.callback,
            r = e.args;
          switch (r.length) {
            case 0:
              t();
              break;
            case 1:
              t(r[0]);
              break;
            case 2:
              t(r[0], r[1]);
              break;
            case 3:
              t(r[0], r[1], r[2]);
              break;
            default:
              t.apply(n, r);
          }
        }
        function a(e) {
          if (u) setTimeout(a, 0, e);
          else {
            var t = l[e];
            if (t) {
              u = !0;
              try {
                i(t);
              } finally {
                o(e), (u = !1);
              }
            }
          }
        }
        if (!e.setImmediate) {
          var s,
            c = 1,
            l = {},
            u = !1,
            f = e.document,
            p = Object.getPrototypeOf && Object.getPrototypeOf(e);
          (p = p && p.setTimeout ? p : e),
            "[object process]" === {}.toString.call(e.process)
              ? (function () {
                  s = function (e) {
                    t.nextTick(function () {
                      a(e);
                    });
                  };
                })()
              : (function () {
                  if (e.postMessage && !e.importScripts) {
                    var t = !0,
                      n = e.onmessage;
                    return (
                      (e.onmessage = function () {
                        t = !1;
                      }),
                      e.postMessage("", "*"),
                      (e.onmessage = n),
                      t
                    );
                  }
                })()
              ? (function () {
                  var t = "setImmediate$" + Math.random() + "$",
                    n = function (n) {
                      n.source === e &&
                        "string" == typeof n.data &&
                        0 === n.data.indexOf(t) &&
                        a(+n.data.slice(t.length));
                    };
                  e.addEventListener
                    ? e.addEventListener("message", n, !1)
                    : e.attachEvent("onmessage", n),
                    (s = function (n) {
                      e.postMessage(t + n, "*");
                    });
                })()
              : e.MessageChannel
              ? (function () {
                  var e = new MessageChannel();
                  (e.port1.onmessage = function (e) {
                    a(e.data);
                  }),
                    (s = function (t) {
                      e.port2.postMessage(t);
                    });
                })()
              : f && "onreadystatechange" in f.createElement("script")
              ? (function () {
                  var e = f.documentElement;
                  s = function (t) {
                    var n = f.createElement("script");
                    (n.onreadystatechange = function () {
                      a(t),
                        (n.onreadystatechange = null),
                        e.removeChild(n),
                        (n = null);
                    }),
                      e.appendChild(n);
                  };
                })()
              : (function () {
                  s = function (e) {
                    setTimeout(a, 0, e);
                  };
                })(),
            (p.setImmediate = r),
            (p.clearImmediate = o);
        }
      })("undefined" == typeof self ? (void 0 === e ? this : e) : self);
    }.call(t, n(1), n(9)));
  },
  function (e, t) {
    function n() {
      throw new Error("setTimeout has not been defined");
    }
    function r() {
      throw new Error("clearTimeout has not been defined");
    }
    function o(e) {
      if (u === setTimeout) return setTimeout(e, 0);
      if ((u === n || !u) && setTimeout)
        return (u = setTimeout), setTimeout(e, 0);
      try {
        return u(e, 0);
      } catch (t) {
        try {
          return u.call(null, e, 0);
        } catch (t) {
          return u.call(this, e, 0);
        }
      }
    }
    function i(e) {
      if (f === clearTimeout) return clearTimeout(e);
      if ((f === r || !f) && clearTimeout)
        return (f = clearTimeout), clearTimeout(e);
      try {
        return f(e);
      } catch (t) {
        try {
          return f.call(null, e);
        } catch (t) {
          return f.call(this, e);
        }
      }
    }
    function a() {
      m &&
        d &&
        ((m = !1), d.length ? (v = d.concat(v)) : (h = -1), v.length && s());
    }
    function s() {
      if (!m) {
        var e = o(a);
        m = !0;
        for (var t = v.length; t; ) {
          for (d = v, v = []; ++h < t; ) d && d[h].run();
          (h = -1), (t = v.length);
        }
        (d = null), (m = !1), i(e);
      }
    }
    function c(e, t) {
      (this.fun = e), (this.array = t);
    }
    function l() {}
    var u,
      f,
      p = (e.exports = {});
    !(function () {
      try {
        u = "function" == typeof setTimeout ? setTimeout : n;
      } catch (e) {
        u = n;
      }
      try {
        f = "function" == typeof clearTimeout ? clearTimeout : r;
      } catch (e) {
        f = r;
      }
    })();
    var d,
      v = [],
      m = !1,
      h = -1;
    (p.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      v.push(new c(e, t)), 1 !== v.length || m || o(s);
    }),
      (c.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (p.title = "browser"),
      (p.browser = !0),
      (p.env = {}),
      (p.argv = []),
      (p.version = ""),
      (p.versions = {}),
      (p.on = l),
      (p.addListener = l),
      (p.once = l),
      (p.off = l),
      (p.removeListener = l),
      (p.removeAllListeners = l),
      (p.emit = l),
      (p.prependListener = l),
      (p.prependOnceListener = l),
      (p.listeners = function (e) {
        return [];
      }),
      (p.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (p.cwd = function () {
        return "/";
      }),
      (p.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (p.umask = function () {
        return 0;
      });
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return o;
      }),
      n.d(t, "c", function () {
        return i;
      });
    var r = [
  {
    "id": "elementary-1-1",
    "name": "八幡光一郎",
    "year": "聖ドミニコ学院<span class='inline-bl'>小学校２年生</span>",
    "prefecture": "宮城県",
    "booktitle": "小学館の図鑑<br>ＮＥＯ 岩石・鉱物・化石",
    "booktitle_modal": "小学館の図鑑 ＮＥＯ 岩石・鉱物・化石",
    "note01": "指導・監修・執筆／萩谷宏、堀秀道、平野弘道ほか",
    "note02": "小学館",
    "opponent": "お母さん",
    "opponent_modal": "お母さん",
    "txt": "　ぼくは、石が大すきです。石の中でもこう物がすきです。同じ石なのに、色がちがっていて、とてもきれいなところが不思ぎだからです。この図かんを読むと、石について物知りになります。河原の石や化石についても書いてあって地球の歴史も分かります。まず、お母さんに読んでほしいです。ぼくが学校や道で石をひろってくると、お母さんは、「きたない石をひろってきちゃだめ」といいます。だから、ぼくは石を石けんであらってから自分のへやにならべています。黒い石でも金色のつぶがまざっていたり、ダイヤモンドみたいに光るものもあります。ぼくの宝物です。この図かんを読めばお母さんも石をすきになると思うので、ぜひ読んでみてください。"
  },
  {
    "id": "elementary-1-2",
    "name": "栗島彩央",
    "year": "古河市立上辺見<span class='inline-bl'>小学校２年生</span>",
    "prefecture": "茨城県",
    "booktitle": "そうだったのか！　しゅんかん図鑑",
    "booktitle_modal": "そうだったのか！ しゅんかん図鑑",
    "note01": "伊知地国夫／写真",
    "note02": "小学館",
    "opponent": "おかあさん",
    "opponent_modal": "おかあさん",
    "txt": "　わたしは、この本をおかあさんにしょうかいしたいです。<br>　なぜかというと、シャボンダマをわるしゅんかんやしらなかったしゅんかんをおかあさんに、しってほしいからです。<br>　わたしのこの本でいいなと思うばしょは、しゅんかんを一つ一つしゃしんでみれるところがいいなと、思います。<br>　おかあさんにもこの本を読んで同じ気もちになって、しゅんかんをしってほしいです。<br>　おかあさんがしゅんかんをしったらいっしょにもういっかいこの本を読みたいです。<br>　この本を読んでこの気もちがおかあさんにとどくといいなと思いました。"
  },
  {
    "id": "elementary-1-3",
    "name": "金菜々子",
    "year": "桐生市立西<span class='inline-bl'>小学校３年生</span>",
    "prefecture": "群馬県",
    "booktitle": "かがやけいのち！みらいちゃん",
    "booktitle_modal": "かがやけいのち！みらいちゃん",
    "note01": "今西乃子／文<br>ひろみちいと／絵",
    "note02": "岩崎書店",
    "opponent": "これから犬をかう人、犬をかっている人",
    "opponent_modal": "これから犬をかう人、<br>犬をかっている人",
    "txt": "　わたしは、この本を、犬をかっている人、犬をかいたいと思っている人にすすめたいです。<br>　この本はけがをしてすてられたみらいちゃんという子犬のお話です。<br>　わたしは、この本を読むまですてられた犬がころされてしまうことを知りませんでした。くらいへやに入ったじゅん番でころされてしまうこと、犬たちがぶるぶるとふるえていたところはとてもこわかったです。みらいちゃんは、まり子さんというやさしい女の人に出会い、新しいかいぬしさんがみつかりました。犬も人間と同じで、一つの大切ないのちがあること、さいごまで家族としてかってあげられるのかを考えてほしいとおもいます。そうすれば、ころされてしまう犬はいなくなるはずです。"
  },
  {
    "id": "elementary-1-4",
    "name": "赤木華奈",
    "year": "昭和女子大学附属昭和<span class='inline-bl'>小学校２年生</span>",
    "prefecture": "東京都",
    "booktitle": "花いっぱい<br>まどさんの詩の本",
    "booktitle_modal": "花いっぱい まどさんの詩の本",
    "note01": "まど・みちお／著<br>長新太／絵",
    "note02": "理論社",
    "opponent": "昭和小学校の二年生のみんな",
    "opponent_modal": "昭和小学校の二年生のみんな",
    "txt": "　わたしは国語のじゅぎょうでまど・みちおさんの詩が大すきになりました。なので学校の図書かんでまど・みちおさんの詩を見つけたので、夏休みに読んでみることにしました。心があたたかくなる詩がたくさんのっているので、わたしは昭和小学校の二年生のみんなにこの本をおすすめします。この本には40の花の詩がのっています。さくら、たんぽぽ、バラ、すみれなどお花の気もちがつたわってきます。読んでいるとお花ばたけにいるような気もちになります。うれしいな、楽しいな、さみしいな、などお花たちとおしゃべりしているようなかんじがします。そしてわたしの名前は「はな」なので、みんなが「はなちゃんお友だちになろうよ。」と言ってくれた気がしました。"
  },
  {
    "id": "elementary-1-5",
    "name": "中條凜子",
    "year": "昭和女子大学附属昭和<span class='inline-bl'>小学校２年生</span>",
    "prefecture": "東京都",
    "booktitle": "アッチとドッチのフルーツポンチ",
    "booktitle_modal": "アッチとドッチのフルーツポンチ",
    "note01": "角野栄子／作<br>佐々木洋子／絵",
    "note02": "ポプラ社",
    "opponent": "天国にいるおばけさんたち",
    "opponent_modal": "天国にいるおばけさんたち",
    "txt": "　もうすぐおぼんが来ます。おぼんは天国にいるれいが家に帰って来る日です。わたしは、なくなったひいおばあさんに会えるのはうれしいけれど、もしおばけも家に来るとしたら、とてもこわくてぞくぞくします。<br>　でも、わたしはおばけのアッチならこわくありません。この本は夏の暑さで夏バテしたみんなをフルーツポンチでシャキッと元気にする話です。わたしは、フルーツポンチを食べたみんなの目が丸くなったり、とびはねて大よろこびするところが大すきです。わたしはこれが本当だったらいいなと思います。だから、おぼんに帰って来るおばけさんたちへ。どうかアッチのようにかわいいすがたで来てください。まっています。"
  },
  {
    "id": "elementary-1-6",
    "name": "宮本環",
    "year": "東京農業大学稲花<span class='inline-bl'>小学校３年生</span>",
    "prefecture": "東京都",
    "booktitle": "10歳までに読みたい日本名作<br>銀河鉄道の夜",
    "booktitle_modal": "銀河鉄道の夜",
    "note01": "宮沢賢治／原作<br>芝田勝茂／文<br>戸部淑／絵<br>加藤康子／監修",
    "note02": "Gakken",
    "opponent": "「銀河鉄道の夜」を一回読んだ人",
    "opponent_modal": "「銀河鉄道の夜」を一回読んだ人",
    "txt": "　この本は、主人公のジョバンニが、友だちのカムパネルラと銀河鉄道にのって、ふ思ぎな旅をする物語です。<br>　ぼくは、動物や植物がすきなので、面白いと思った所は、りんごのたねをまくと、ひとりでにどんどん成長したり、鳥がおかしの味だった所です。<br>　でも、はじめ読んだ時はふ思ぎがいっぱいで、意味が分かりませんでした。二回読んだら、少し分かりました。三回目読んだら、鉄道は天国に行く人たちをのせていたことや、ジョバンニが終わりにないた気持ちがよく分かりました。<br>　この本は、くり返し読んで意味が分かるとびっくりする話なので、一回しか読んでない人もまた読んでみてください。"
  },
  {
    "id": "elementary-1-7",
    "name": "山崎怜美",
    "year": "渋谷区立鳩森<span class='inline-bl'>小学校３年生</span>",
    "prefecture": "東京都",
    "booktitle": "ものぐさトミー",
    "booktitle_modal": "ものぐさトミー",
    "note01": "ペーン・デュボア／文・絵<br>松岡享子／訳",
    "note02": "岩波書店",
    "opponent": "わたしのお父さん",
    "opponent_modal": "わたしのお父さん",
    "txt": "　いつの間にか、お父さんは、家にいてばかりで、まるでトミーのようだね。でも、わたしの家にはトミーの家のように、おふろに入れてくれたり、ごはんを食べさせてくれるような、きかいがないけれど、お父さんはパソコンにたよっているね。お父さんは、コロナが始まって家ではたらくようになってから、気がついたらずっとパソコンの前にすわっているね。しかも、昼も夜もずっとすわっていて、わたしと遊んでくれないね。トミーはきかいがこわれてひどい目にあったけれど、お父さんもパソコンにたよって楽ばかりしていたら、トミーのようになっちゃうよ。だから、お父さんはこの本を読んで、トミーのようなものぐさにならないで、わたしと遊んでね。"
  },
  {
    "id": "elementary-1-8",
    "name": "北見悠太",
    "year": "横浜市立洋光台第一<span class='inline-bl'>小学校２年生</span>",
    "prefecture": "神奈川県",
    "booktitle": "全国版コンパス時刻表 2020年5月号",
    "booktitle_modal": "コンパス時刻表 2020年5月号",
    "note01": "",
    "note02": "交通新聞社",
    "opponent": "お父さん",
    "opponent_modal": "お父さん",
    "txt": "　お父さんへ。三年前の事覚えてる？　ぼくたち福岡に住んでいて時刻表見ながら色々な電車にのったよね。楽しかったね。<br>　例えば、ＪＲ春日駅から普通電車で南福岡駅まで行き、快速にのりかえ、鹿児島本線で博多駅へ行き、ソニックで小倉駅まで行きまたのりかえて普通電車で門司港駅でおり、鉄道博物館に行ったのがとっても楽しく素敵な思い出になっているんだよ。その時、何分にのる？　何の電車にのる？　とかお父さんに質問したら時刻表を買って見方を教えてくれたよね。それから、ぼくは、時刻表のとりこで、どの電車にしようかな、何分で行けるかな、とわくわくが止まらないんだよ。コロナがなくなったら新しいのを買いお出かけしようね。"
  },
  {
    "id": "elementary-1-9",
    "name": "杉本彩樹",
    "year": "金沢市立小坂<span class='inline-bl'>小学校１年生</span>",
    "prefecture": "石川県",
    "booktitle": "ごめんねともだち",
    "booktitle_modal": "ごめんねともだち",
    "note01": "内田麟太郎／作<br>降矢なな／絵",
    "note02": "偕成社",
    "opponent": "けんかしたひと",
    "opponent_modal": "けんかしたひと",
    "txt": "　このほんは「ごめんね」というゆうきがもらえます。ともだちやおにいちゃんとけんかをしたとき、「ごめんね」といわないといけないとわかっていても、なみだがぽろぽろでてきます。じぶんから「ごめんね」というのは、とてもゆうきがいります。<br>　そんなとき、このほんをよむと、けんかをしたあいても、なかなおりができないと、ずっとかなしいきもちになっていることがわかります。それから、「ごめんね」がいえたら、もっとなかよくなれることもおしえてくれます。すると、だんだんあやまるゆうきがでてきます。<br>　だれかとけんかをして、あやまるゆうきがほしくなったらよんでみてください。"
  },
  {
    "id": "elementary-1-10",
    "name": "中野陽翔",
    "year": "学童保育施設<span class='inline-bl'>びっぐふぁみりー２年生</span>",
    "prefecture": "大阪府",
    "booktitle": "超ビジュアル！<br>戦国武将大事典",
    "booktitle_modal": "超ビジュアル！戦国武将大事典",
    "note01": "矢部健太郎／監修",
    "note02": "西東社",
    "opponent": "れきしが大すきな友だち",
    "opponent_modal": "れきしが大すきな友だち",
    "txt": "　ぼくはれきし上の人ぶつですごいなとおもう人は「黒田かんべえ」です。この人は、自分ではなくて、とよとみひでよしに天下をとらせました。あい手を上へ上へとのぼらせていくことは、むずかしいとおもいます。自分のことは自分ががんばればどうにかなるけれど、人をみちびくということは、まわりをよく見ていないとできません。そして、せん国時だいを生きぬくためには、「さく」もひつようです。この本は、ぼくのすきな人ぶつだけではなく、たくさんのれきし上の人ぶつが国語じてんのように出てきます。社会がすきで、れきしの話をするともり上がる友だちに、ぜひこの本を読んで、わくわくした気もちになってもらいたいので、おすすめします。"
  },
  {
    "id": "elementary-1-11",
    "name": "美馬理伯",
    "year": "大阪教育大学附属天王寺<span class='inline-bl'>小学校３年生</span>",
    "prefecture": "大阪府",
    "booktitle": "かこさとし からだの本３<br>むしばミュータンスのぼうけん",
    "booktitle_modal": "むしばミュータンスのぼうけん",
    "note01": "かこさとし／作",
    "note02": "童心社",
    "opponent": "一歳のはとこ睦人君",
    "opponent_modal": "一歳のはとこ睦人君",
    "txt": "　僕が睦人君へおすすめしたい本は、『むしばミュータンスのぼうけん』です。これは、虫歯ミュータンス自身が虫歯の恐ろしさを面白おかしく説明する本です。<br>　このお話の主人公は虫歯ミュータンスなので、甘いものを食べても歯をみがかない子がいい子で、逆に歯みがきをする子が悪い子だと言います。それに、ミュータンスは大きいむし歯を作れば作るほど自慢します。本当のことと反対のことばかり言うので、子供は笑います。でも、虫歯の恐ろしさはしっかりと印象に残ります。<br>　僕も、僕のお母さんも小さい時にこの本を読んでもらって、虫歯の怖さを知ったので、睦人君にも、この本で、虫歯の怖さと歯の大切さを知ってもらいたいです。"
  },
  {
    "id": "elementary-1-12",
    "name": "岩畔星七",
    "year": "姫路市立豊富<span class='inline-bl'>小中学校２年生</span>",
    "prefecture": "兵庫県",
    "booktitle": "ま、いっか！",
    "booktitle_modal": "ま、いっか！",
    "note01": "サトシン／作<br>ドーリー／絵",
    "note02": "えほんの杜",
    "opponent": "つかれたおとなへ",
    "opponent_modal": "つかれたおとなへ",
    "txt": "　わたしのおにいちゃんはダラダラしています。わたしのおねえちゃんはゴロゴロしています。わたしもダラダラゴロゴロとしているかも。そんな子どもたちを見て大人はおこります。わたしたちのことを思って言ってくれてることはすごくわかるし、いつもいつもてきぱきとうごくすがたを見てたいへんでしんどそうだなと思いました。たまには、この本のテキトーさんのように、なんでも「ま、いっか」という日をつくると、こころがゆっくりできてこころがやすめると思うよ。だからつかれてたいへんなおとなにもよんでほしい１さつです。たまにはテキトーさんみたいにテキトーになって「ま、いっか」をしてみて下さい。"
  },
  {
    "id": "elementary-1-13",
    "name": "川上心愛稀",
    "year": "姫路市立豊富<span class='inline-bl'>小中学校１年生</span>",
    "prefecture": "兵庫県",
    "booktitle": "だいじょうぶ<br>だいじょうぶ",
    "booktitle_modal": "だいじょうぶ だいじょうぶ",
    "note01": "いとうひろし／文・絵",
    "note02": "講談社",
    "opponent": "こわがりないもうと",
    "opponent_modal": "こわがりないもうと",
    "txt": "　わたしのいもうとは、とってもこわがりです。２さいだけど、むしもおにもちょうないほうそうもこわくてないてしまいます。だからいもうとに「だいじょうぶ」という、まほうのことばをかけてあげたいからえらびました。<br>　このえほんは、おまじないのことばでこわさとふあんをけして、ゆうきをくれるすてきなほんです。おはなしのさいごは、おじいちゃんがしんでしまってかなしくなるけど、こわいことやこまったことにであっても、このえほんをよむだけではげまされます。もう、ちょうないほうそうがなってもおにがきてもきっとだいじょうぶ。<br>　いもうとはもじがよめないから、わたしがいもうとにたくさんよんであげたいです。"
  },
  {
    "id": "elementary-1-14",
    "name": "山口葉月",
    "year": "姫路市立荒川<span class='inline-bl'>小学校１年生</span>",
    "prefecture": "兵庫県",
    "booktitle": "いちねんせいになったあなたへ",
    "booktitle_modal": "いちねんせいになったあなたへ",
    "note01": "江國香織／詩<br>井口真吾／絵<br>",
    "note02": "小学館",
    "opponent": "１ねんせいになるこ",
    "opponent_modal": "１ねんせいになるこ",
    "txt": "　このほんは、えがカラフルでみるだけでもたのしいです。しがいっぱいかいてあります。はじめてよんだときはよくわかりませんでした。なんどかよんでいるうちに、うたをうたっているようなたのしいきもちになりました。わたしは、なんどもなんどもよみました。<br>　このなかのしは、やさしいことばでかいてあります。がっこうにいくのがふあんなときや、いやなときも、たのしいしでわらったりして、はげましてもらいました。おとなでもたのしくなるとおもいます。おとうさん、おかあさんとよんで、いちねんせいになるのを、たのしみにしてほしいです。"
  },
  {
    "id": "elementary-1-15",
    "name": "佐藤優",
    "year": "智辯学園奈良カレッジ<span class='inline-bl'>小学部２年生</span>",
    "prefecture": "奈良県",
    "booktitle": "絵本　いのちをいただく　みいちゃんがお肉になる日",
    "booktitle_modal": "いのちをいただく みいちゃんがお肉になる日",
    "note01": "坂本義喜／原案<br>内田美智子／作<br>魚戸おさむとゆかいななかまたち／絵",
    "note02": "講談社",
    "opponent": "牛肉を食べる人みんな",
    "opponent_modal": "牛肉を食べる人みんな",
    "txt": "　牛肉を食べますか？　牛肉はすきですか？<br>　この本は、牛肉を食べる人みんなにぜったい読んでほしい本です。<br>　わたしのおばあちゃんは、牛のはんしょくのうかをしています。毎日、朝から夜まで牛のせ話をしないといけないので、りょ行にも行けません。何か月かそだてたら、本の中のおじいさんのように、牛を売ります。牛を売る時は、毎回さびしい気もちになると、おばあちゃんも言っていました。<br>　でも、わたしのおばあちゃんのしごとも、本の中の坂本さんのしごとも、みんなが牛のお肉を食べるために、とても大切なしごとです。「いのちをいただく」とはどういうことかを、この本を読んでみんなに知ってもらいたいです。"
  },
  {
    "id": "elementary-1-16",
    "name": "呑田アイヴィー",
    "year": "英数学館<span class='inline-bl'>小学校１年生</span>",
    "prefecture": "岡山県",
    "booktitle": "勇気",
    "booktitle_modal": "勇気",
    "note01": "バーナード・ウェーバー／作<br>日野原重明／訳",
    "note02": "ユーリーグ",
    "opponent": "パパとママ",
    "opponent_modal": "パパとママ",
    "txt": "　私はこの本をよんだあと、とてもいいきもちになってパパにおしえてあげたくなりました。<br>　コマなしでじてん車にのる勇気、しょうじきにいわないといけない勇気、わかれなければいけないときにさよならといえる勇気、人をたすける勇気、いろんな勇気がきれいなえとかかれていました。<br>　私の勇気のイメージは、チャレンジする勇気、人をいじめたり、わるいものをみたらとめる勇気、ひみつをしゃべらない勇気です。<br>　この間お友だちのえんぴつをかくしたときごめんねとあやまるおてがみをかきました。じぶんからあやまるのはむずかしかったけど勇気をだしていったあとはきもちよかったです。人にやさしくすることが勇気だとおもいました。"
  },
  {
    "id": "elementary-1-17",
    "name": "吉良陽菜乃",
    "year": "府中町立府中<span class='inline-bl'>小学校３年生</span>",
    "prefecture": "広島県",
    "booktitle": "りんごかもしれない",
    "booktitle_modal": "りんごかもしれない",
    "note01": "ヨシタケシンスケ／作",
    "note02": "ブロンズ新社",
    "opponent": "りんごがどれも同じに見える人",
    "opponent_modal": "りんごがどれも同じに見える人",
    "txt": "　あなたは、りんごがどれも同じに見えますか。同じに見える人、ちがうように見える人がいると思いますが、実はりんごは自分にとって、気持ちがちがうのです。<br>　りんごには、どんな気持ちがあると思いますか。りんごは、ほかの物になりたかったかもしれないし、ほめられるとツヤツヤになるかもしれないし、りんごには、兄弟姉妹がいるのかもしれない…といろいろなそうぞうをする所が、おもしろいです。りんごが同じに見える人は、りんごには、どんな気持ちがあるのかなとそうぞうするとちがってくるかもしれません。<br>　りんごにはいろいろな気持ちがあることが分かりましたか。いろいろそうぞうする所がおもしろいです。ぜひ読んでみてください。"
  },
  {
    "id": "elementary-1-18",
    "name": "緒方美咲",
    "year": "佐賀市立久保泉<span class='inline-bl'>小学校３年生</span>",
    "prefecture": "佐賀県",
    "booktitle": "おさがり",
    "booktitle_modal": "おさがり",
    "note01": "くすのきしげのり／作<br>北村裕花／絵",
    "note02": "東洋館出版社",
    "opponent": "おさがりを、持っている子",
    "opponent_modal": "おさがりを、持っている子",
    "txt": "　わたしは、三人きょうだいの長女なので、新しいものをかってもらうことが多いです。だから「おさがり」のことを考えたことがありませんでした。きっと、わたしみたいにきょうだいで一番上の人は同じだろうな。でも、この本を読むと、じつはいつも「おさがり」といっしょにすごしているんだということが分かって、おさがりっていいものなんだなぁ〜っていう気がしてきました。うんどう場のゆうぐや教室のつくえやいすなど学校にもたくさんの「おさがり」があります。おさがりは、それを前に使った人やこれから使う人とつながっていることを感じられるとくべつなもの。この本を読むと、今までとはちがった気もちで物を大切に使うことができますよ。"
  },
  {
    "id": "elementary-1-19",
    "name": "清水慈紀",
    "year": "宮崎市立倉岡<span class='inline-bl'>小学校２年生</span>",
    "prefecture": "宮崎県",
    "booktitle": "みえるとか<br>みえないとか",
    "booktitle_modal": "みえるとか みえないとか",
    "note01": "ヨシタケシンスケ／さく<br>伊藤亜紗／そうだん",
    "note02": "アリス館",
    "opponent": "お母さんのはたらくしせつでくらす○○へ",
    "opponent_modal": "お母さんのはたらくしせつでくらす○○へ",
    "txt": "　○○には、いろいろな理由があってしせつで生かつしているんでしょ？　そのことで、まわりの人からへんな目で見られることもあるんでしょ？<br>　ぼくがしってる○○は元気で明るくていっしょに楽しんであそんでくれるお姉ちゃんだよ。しせつにいるとか、いないとか考えたことないよ。<br>　みんなちがうところがあるのに、それをへんだと思うんじゃなくて、おもしろいと思える社会になれば、○○はなやむことがへるのかな？<br>　ちがうこともべつのところから見ればすてきなことだって教えてくれるこの本を○○にすすめるから読んでね。なやみがかるくなるといいな。<br>　またいっしょにあそぼうね。"
  },
  {
    "id": "elementary-1-20",
    "name": "八田大愛",
    "year": "神村学園<span class='inline-bl'>初等部２年生</span>",
    "prefecture": "鹿児島県",
    "booktitle": "あなたがとってもかわいい",
    "booktitle_modal": "あなたがとってもかわいい",
    "note01": "みやにしたつや／作・絵",
    "note02": "金の星社",
    "opponent": "かぞく",
    "opponent_modal": "かぞく",
    "txt": "　ぼくは、こんなに大きくなったんだよ。三年生になったら、ママのしん長をこすかな。ぼくが大きくなってもいつまでもぼくのことが、大すきかな。赤ちゃんのぼくは、かわいかったかな。おとうとの赤ちゃんのときは、小さかったかな。ママは、ぼくたちが赤ちゃんだったころをいつまでもちゃんとおぼえていてね。この本を読むときに、ぼくがいつもママに聞くことです。ママは、やさしく「もちろんだよ」と言ってくれます。ぼくもママもえがおでやさしい気もちになれる本です。だから、いっぱいの家ぞくに読んでほしい本です。<br>　パパもママもおじいちゃんもおばあちゃんもみんな、読んでみてください。"
  },
  {
    "id": "elementary-1-21",
    "name": "船附晃暉",
    "year": "神村学園<span class='inline-bl'>初等部２年生</span>",
    "prefecture": "鹿児島県",
    "booktitle": "目で見るSDGs時代の環境問題",
    "booktitle_modal": "目で見るＳＤＧｓ時代の環境問題",
    "note01": "ジェス・フレンチ／著<br>大塚道子／訳",
    "note02": "さ・え・ら書房",
    "opponent": "・レジぶくろを買ったことがある人<br>・ごはんをのこしたことがある人",
    "opponent_modal": "・レジぶくろを買ったことがある人<br>・ごはんをのこしたことがある人",
    "txt": "　ぼくの家の夏のエアコンせっていおんどは二十八どです。三人ぐらしで、一へやしかつけていないので、ほかのへやはとてもあついです。みんなは地球にやさしくしていますか？　ぼくとママは、やさしくしていなかった事がありました。それは、レジぶくろを買っていた事と、ごはんをのこす時があった事です。この本にはレジぶくろが十二分間位しか使われていない事や、八おく人の人が食べものがなくてこまっているのに食りょうの三分の一はすてられているなどの事が書いてあります。エアコンでへやがキンキン、レジぶくろを買う、ユーチューブを見ているのにテレビがつきっぱなし、ごはんをのこしてしまう…ドキリ！とした人は、ぜひ読んでみて下さい。"
  },
  {
    "id": "elementary-1-22",
    "name": "松尾啓志",
    "year": "神村学園<span class='inline-bl'>初等部１年生</span>",
    "prefecture": "鹿児島県",
    "booktitle": "大ピンチずかん",
    "booktitle_modal": "大ピンチずかん",
    "note01": "鈴木のりたけ／作<br>",
    "note02": "小学館",
    "opponent": "ピンチにあってたいへんなひとへ",
    "opponent_modal": "ピンチにあってたいへんなひとへ",
    "txt": "　ぼくの毎日は大ピンチのれんぞくだ。かえりのバスでねていたら、もうバスてい！　これがぼくの一ばんの大ピンチ。この『大ピンチずかん』には、いろんなピンチがかいてある。大ピンチレベル百の「どしゃぶりなのにかさがない」は、ぼくもある。がっこうについたら、どしゃぶり。かさがないから、バッグをあたまにのせてはしった。雨が川みたいになっていた。川をよけて、そおっとすすむ。もうおちると思ったとき、お兄さんが「いっしょにいこう」とかさに入れてくれた。たくさんぬれたけど、大ピンチにかった。ぼくにはいつも大ピンチがくる。でも、どうしようって考えたり、たすけてもらったりして、のりこえる。さあ、きょうもピンチをたのしもう。"
  },
      ],
      o = [
  {
    "id": "elementary-2-1",
    "name": "栗田紗凪",
    "year": "石巻市立石巻<span class='inline-bl'>小学校５年生</span>",
    "prefecture": "宮城県",
    "booktitle": "こころのふしぎ　なぜ？どうして？",
    "booktitle_modal": "こころのふしぎ なぜ？どうして？",
    "note01": "大野正人／原案・執筆<br>村山哲哉／監修",
    "note02": "高橋書店",
    "opponent": "友達にこまっているＡさん！",
    "opponent_modal": "友達にこまっているＡさん！",
    "txt": "　私がおすすめしたい本は『こころのふしぎ　なぜ？どうして？』という本です。この本は○○のふしぎとして命の事や友達の事が書いてある話です。<br>　私は三年生の時、いじめや悪口など言われ、心を閉ざしてしまった事があります。そのとき、お父さんが、本屋からこの本を買ってきました。読んでみると、学校にも楽しく行けるようになりました。<br>　友達の関係、心の関係がほどけて心が明るくなっていきました。私はＡさんに毎日楽しく学校に行けるようになってほしいです。なのでＡさんにおすすめします。この本は文だけではなく、絵もあるので楽しく読めます。<br>　ぜひ読んでみてください。"
  },
  {
    "id": "elementary-2-2",
    "name": "山村吏良",
    "year": "聖ドミニコ学院<span class='inline-bl'>小学校６年生</span>",
    "prefecture": "宮城県",
    "booktitle": "きみの友だち",
    "booktitle_modal": "きみの友だち",
    "note01": "重松清／著",
    "note02": "新潮文庫",
    "opponent": "本当の友達を探しているあなたへ",
    "opponent_modal": "本当の友達を探しているあなたへ",
    "txt": "　本当の友達とはどのような関係だと思いますか？　私は、今回紹介する重松清作『きみの友だち』という本の中で、今まで自分が知らなかった友達とのつながりを見つけ大きな衝撃を受けました。この本には、もこもこ雲という雲がでてきます。この雲は、優しすぎて要領が悪いため皆と仲良くできない子供を見守ります。空にポツンと浮かびながら、ちゃんと見てるよ！と応援し、時には、その子のために涙を流し雨を降らせます。物語にでてくる恵美と由香は、お互いのもこもこ雲となり強く結びついていきます。とても辛い出来事さえも、もこもこ雲と共に前へ進んでいきます。本当の友達を探しているあなたに、この本を手にとってみてほしいと思います。"
  },
  {
    "id": "elementary-2-3",
    "name": "清水璃乃",
    "year": "安中市立磯部<span class='inline-bl'>小学校６年生</span>",
    "prefecture": "群馬県",
    "booktitle": "失敗図鑑　すごい人ほどダメだった！",
    "booktitle_modal": "失敗図鑑 すごい人ほどダメだった！",
    "note01": "大野正人／著",
    "note02": "文響社",
    "opponent": "失敗続きで落ち込んでいる人",
    "opponent_modal": "失敗続きで落ち込んでいる人",
    "txt": "　失敗続きで落ち込んでいる人はいませんか？　そんな人はぜひこの本を読んでください。世界で有名な偉人がたくさんの失敗をしながら生きてきたことが書かれています。エジソンは数々の発明をした偉人として知られていますが、実はおよそ２万回近くの失敗をしたとも言われています。それだけ失敗したら、大抵の人は諦めてしまうと思います。ですが、彼は「諦めることが失敗なのだ。」と言ったのです。私はこの言葉から失敗をくやむよりも、成長につながるチャンスととらえて努力することが大事なのだと思いました。あなたも物事を諦めずに色々な事にチャレンジしてみてください！"
  },
  {
    "id": "elementary-2-4",
    "name": "須田希乃香",
    "year": "甘楽町立福島<span class='inline-bl'>小学校４年生</span>",
    "prefecture": "群馬県",
    "booktitle": "ころべばいいのに",
    "booktitle_modal": "ころべばいいのに",
    "note01": "ヨシタケシンスケ／作",
    "note02": "ブロンズ新社",
    "opponent": "だれかがきらいなあなたへ",
    "opponent_modal": "だれかがきらいなあなたへ",
    "txt": "　だれかがきらいなあなたへ。<br>　きらいな人のせいで、ぜんぜん楽しくなくなって自分のことがますますきらいになることが、私はあります。みなさんも、ありますか。<br>　大人も「あの人なんなの」と言っていることがあります。<br>　そんな時、私は『ころべばいいのに』の本にあった「いろいろダメだった日は、ぎゃくにぜんぜんかんけいないことをする」をやってみました。<br>　やってみたら、とってもすっきりしました。<br>　これは、ぜったいにおすすめなのでぜひみなさんもやってみてください。<br>　ちょっとだけきらいな人が、いなくなるかもしれませんね。"
  },
  {
    "id": "elementary-2-5",
    "name": "中角藍子",
    "year": "昭和学院<span class='inline-bl'>小学校６年生</span>",
    "prefecture": "千葉県",
    "booktitle": "10代の真ん中で",
    "booktitle_modal": "10代の真ん中で",
    "note01": "村瀬学／著",
    "note02": "岩波ジュニア新書",
    "opponent": "10代のみなさんへ",
    "opponent_modal": "10代のみなさんへ",
    "txt": "　この春から成人年齢が18歳になりました。成人？　18歳？　と、はてなが頭に浮かんだけれど、今、私は12歳。成人とやらになるのに、あと６年、なのかまだ６年か、目の前の事に必死な自分がいます。<br>　本の中で、中学生のケイ君とモンテ先生が会話をします。そのやり取りは、ケイ君が最近“わからない”と感じる事だったり、世の中の出来事だったり、大人になる目安ってなんだって話だったりします。そう、私も近頃、自分がわからない、友達がわからない、大人がわからないの三拍子が揃っていて、読みながら心でうなずいていました。６年後か、いつかどこかで出会う誰かと、あの頃はねと話をする日が楽しみになる一冊です。“わからない”を楽しむぞ。"
  },
  {
    "id": "elementary-2-6",
    "name": "平澤智規",
    "year": "昭和学院<span class='inline-bl'>小学校５年生</span>",
    "prefecture": "千葉県",
    "booktitle": "そらいろ男爵",
    "booktitle_modal": "そらいろ男爵",
    "note01": "ジル・ボム／文<br>ティエリー・デデュー／絵<br>中島さおり／訳",
    "note02": "主婦の友社",
    "opponent": "戦争をしている人達へ",
    "opponent_modal": "戦争をしている人達へ",
    "txt": "　あなたには今、どんな景色が見えていますか。国民の誰もが喜びにみちた幸せな国ですか。銃を向けている相手は本当に敵ですか。怖くないですか。ぼくは戦争がとても怖い。<br>　どうかこの本を手に取って読んでほしい。この本は爆弾の代わりに手紙や本をつかって戦争をとめた男爵のお話。<br>　分かり合える理想の形の着地点はどこなのか。今一度、国民の声に耳を傾け、考え直してほしい。ぼくたちは争い合うことに人生をかけている場合ではないことを分かってほしい。あなたもあなたを支持する人たちも誰一人として争い合いたくないはず。<br>　手に持つのは武器ではなく、相手の手ではないだろうか。"
  },
  {
    "id": "elementary-2-7",
    "name": "石井沙希",
    "year": "品川区立八潮学園<span class='inline-bl'>５年生</span>",
    "prefecture": "東京都",
    "booktitle": "世界の不思議な図書館",
    "booktitle_modal": "世界の不思議な図書館",
    "note01": "アレックス・ジョンソン／著<br>北川玲／訳",
    "note02": "創元社",
    "opponent": "本ぎらいのあなたへ",
    "opponent_modal": "本ぎらいのあなたへ",
    "txt": "　とつぜんですが、ここでクイズです。この中で実際に存在する図書館はどれでしょうか？<br><span class='indent indent_first'>一　ラクダの図書館<br>二　ボートの上の図書館<br>三　電話ボックスの図書館</span><br>　正解は…全部です！　おどろきました？　世界にはたくさんの変わり種の図書館があるのです！　もっと世界の図書館を知りたい方はこの本を手にとってみて下さい。読んだらワクワクする事まちがいなし！　自分のお気に入りの図書館で本を読んでみたら…本ぎらいのあなたでも本に夢中になるかもしれません。ぜひ、この本をとおして本の事を好きになってください。まずは、この本を探しに図書館へかけ込んで！"
  },
  {
    "id": "elementary-2-8",
    "name": "大田瑞葵",
    "year": "学習院<span class='inline-bl'>初等科５年生</span>",
    "prefecture": "東京都",
    "booktitle": "ふたごチャレンジ！ 「フツウ」なんかブッとばせ!!",
    "booktitle_modal": "ふたごチャレンジ！ 「フツウ」なんかブッとばせ!!",
    "note01": "七都にい／作<br>しめ子／絵",
    "note02": "角川つばさ文庫",
    "opponent": "差別をしてしまう大人へ",
    "opponent_modal": "差別をしてしまう大人へ",
    "txt": "「おねがいだから２人ともちゃんとして？　ちゃんと男の子らしく、女の子らしくなって……！」<br>　あかねはサッカーが好きな女の子。かえではお絵かきが好きな男の子。二卵性の双子です。「ちゃんと」するためにとりかえチャレンジをします。<br>　でも、「ちゃんと」するってなに？　今のありのままの姿ではだめなの？　もし自分が言われたらどんな気持ち？　２人のお父さんとお母さん、校長先生が思っている「ちゃんと」するは、私達の思う「ちゃんと」とはちがいます。私は「ちゃんと」してとは、呪いの言葉だと思います。フツウに合わせていくのがつらい子もいます。気づかずに差別をしています。それをわからせてくれるのがこの本ですよ。"
  },
  {
    "id": "elementary-2-9",
    "name": "小原芽生",
    "year": "世田谷区立駒沢<span class='inline-bl'>小学校５年生</span>",
    "prefecture": "東京都",
    "booktitle": "きょうだい　障害のある家族との道のり",
    "booktitle_modal": "きょうだい 障害のある家族との道のり",
    "note01": "白鳥めぐみ、諏方智広、本間尚史／著",
    "note02": "中央法規出版",
    "opponent": "きょうだい児さん",
    "opponent_modal": "きょうだい児さん",
    "txt": "　私には、乳児の時に重い病気を背負ってしまった弟がいる。そのため、小さな頃から我慢することもあった。周りに共感してくれる人もいなかったため、私の心は孤独だった。家族や仲の良い友達にもわからない、この気持ちをわかってくれる人とは出会えないのでは、と思っていた。そんな時この本と出会った。この本は、きょうだい児が抱くぎ問や悩みを解決してくれる。また、自分と同じ気持ちをもつ人もいるとわかると少し軽くなれた。困っているのは障害をもつ本人だけではない。そんな兄弟をもつ私たち、きょうだい児も困っているのだ。きょうだい児は、悩みを抱え込みがちだ。だから悩んだ時には、この本を読んで仲間がいることを知ってほしい。"
  },
  {
    "id": "elementary-2-10",
    "name": "鈴木勇人",
    "year": "成蹊<span class='inline-bl'>小学校４年生</span>",
    "prefecture": "東京都",
    "booktitle": "小学館版学習まんが世界の歴史",
    "booktitle_modal": "学習まんが 世界の歴史",
    "note01": "新井淳也ほか／まんが<br>山川出版社／編集協力",
    "note02": "小学館",
    "opponent": "プーチン大とうりょう",
    "opponent_modal": "プーチン大とうりょう",
    "txt": "　プーチン大とうりょう、あなたには、『世界の歴史』の全かんを読むことをおすすめします。この本は世界しがくわしくわかる本です。世界しをふりかえると、いつの世の中もせんそうをしています。とくに第二次世界大戦では、空しゅうや原子ばく弾で多くの市民がぎせいになりました。このような戦争を二度とおこさないようにすることがせい治家の仕事だと思います。<br>『世界の歴史』をよめば、どくさい者は最後にはひどい目にあうことが分かると思います。とくにどくさい者のたくさん出てくる16、17かんをよんでください。早く本をよんで、早く戦争を止めて、平和な世の中にしてください。"
  },
  {
    "id": "elementary-2-11",
    "name": "古市明日香",
    "year": "八王子市立緑が丘<span class='inline-bl'>小学校６年生</span>",
    "prefecture": "東京都",
    "booktitle": "ひみつのかんかん",
    "booktitle_modal": "ひみつのかんかん",
    "note01": "花山かずみ／作",
    "note02": "偕成社",
    "opponent": "今はもういない、ひいおばあちゃん",
    "opponent_modal": "今はもういない、ひいおばあちゃん",
    "txt": "　私が小さな頃にしか会えなかったひいばあちゃん、天国で元気にしていますか？　ひいばあちゃんが今いたら、見てほしかった絵本があるんだよ。それは主人公の女の子が、自分のひいばあちゃんの、カンに入れた宝物を見せてもらいながら、子供の頃の思い出や秘密を聞く、というお話です。<br>　私も、ひいばあちゃんの昔の話は家族に聞いて少しは知ってるよ。でも、実際にこの本を一緒に読んで、「ひいばあちゃんも着物を着てた？」「こんな風にゴザの上で遊んだ？」と昔の話を聞いて、昔の歌を歌ってもらって、こっそり秘密も教えてほしかったなぁ。<br>　この絵本を読んで、私も、ひいばあちゃんの小さい頃を描いた絵本をつくってみたくなりました！"
  },
  {
    "id": "elementary-2-12",
    "name": "松田明日花",
    "year": "東村山市立東萩山<span class='inline-bl'>小学校６年生</span>",
    "prefecture": "東京都",
    "booktitle": "超訳<br>ニーチェの言葉",
    "booktitle_modal": "超訳 ニーチェの言葉",
    "note01": "フリードリヒ・ニーチェ／著<br>白取春彦／編訳",
    "note02": "ディスカヴァー・トゥエンティワン",
    "opponent": "頑張って生きている人へ",
    "opponent_modal": "頑張って生きている人へ",
    "txt": "　私がこの本をおすすめするのは頑張っている人が何かに迷った時に自分の固定観念を切り離し、自分をみつめさせてくれるからです。<br>　私は五年生の時に学校でいい子を演じ続けていました。私はいい子でなければならないと思い込んでいました。苦しかった時、母に貸してもらったのがこの本です。本には、「自分の評判など気にするな」と書かれています。「間違った評価をされるのがふつうのことだ」という文で、間違った評価に振り回されるのはやめて、好きなことをやろう、と考えることができました。<br>　頑張っている人は何かしら悩みがあると思います。この本を少し開いて気になった所を読んでみると自分を見つめさせてくれます。"
  },
  {
    "id": "elementary-2-13",
    "name": "米原碧希",
    "year": "稲城市立長峰<span class='inline-bl'>小学校５年生</span>",
    "prefecture": "東京都",
    "booktitle": "世界を変えた100人の女の子の物語",
    "booktitle_modal": "世界を変えた１００人の女の子の物語",
    "note01": "エレナ・ファヴィッリ、フランチェスカ・カヴァッロ／著<br>芹澤恵、高里ひろ／訳",
    "note02": "河出書房新社",
    "opponent": "悩みがある女の子",
    "opponent_modal": "悩みがある女の子",
    "txt": "「おやすみ前に読むこの本にはプリンセスは出てこない。出てくるのは世界を変えた女性たち」とこの本の裏表紙に書いてあります。<br>　私のお気に入りのこの本は勇気と元気がでる本です。私はピアノをたくさん練習しても上手くひけるようにならないときがありました。そんなときにこの本を読んで、世界を変えた才能にあふれた女性たちでも悩んでいたときがあったし、それにたちむかっていったんだ。私もあきらめずにがんばろうと思いました。<br>　自信がもてなかったり、なにかが上手くいかなかったりして、悩んでいる女の子に、ぜひこの本を読んで、勇気や自信をもってもらいたいです。"
  },
  {
    "id": "elementary-2-14",
    "name": "内野々あおい",
    "year": "横浜市立義務教育学校<span class='inline-bl'> 緑園学園５年生</span>",
    "prefecture": "神奈川県",
    "booktitle": "ゆりの木荘の子どもたち",
    "booktitle_modal": "ゆりの木荘の子どもたち",
    "note01": "富安陽子／作<br>佐竹美保／絵",
    "note02": "講談社",
    "opponent": "果たせていない約束がある人",
    "opponent_modal": "果たせていない約束がある人",
    "txt": "　あなたはだれかと大切な「約束」をしたことがありますか？　私は、この本を読んで「約束」の深い意味を知りました。この本では、主人公のおばあさんが昔ざしきわらしとした「約束」を果たします。「約束」は何年経っても、どんな形でも果たせることを教えてくれました。だから私も、今果たせていない「約束」を果たせるようにしたいです。もしもあなたに、果たせていない「約束」があったらぜひこの本を読んで、「約束」の深い意味を知ってほしいです。そして、大切な「約束」は、すぐに果たせないこともあるけれど、何年、何十年経ったって果たせることを覚えていてほしいです。あなたの果たせていない「約束」が、果たせますように。"
  },
  {
    "id": "elementary-2-15",
    "name": "田野凌菜",
    "year": "越前市立吉野<span class='inline-bl'>小学校６年生</span>",
    "prefecture": "福井県",
    "booktitle": "徳間アニメ絵本５<br>火垂るの墓",
    "booktitle_modal": "火垂るの墓",
    "note01": "野坂昭如／原作<br>高畑勲／監督",
    "note02": "徳間書店",
    "opponent": "妹がいるお兄ちゃん",
    "opponent_modal": "妹がいるお兄ちゃん",
    "txt": "　妹がいるお兄ちゃん、あなたは妹とけんかをしたとき、「死ね」など言っていませんか？この本はお兄ちゃんと妹の兄弟愛について書いてあります。<br>　私も妹ではないけどお姉ちゃんと弟が１人ずついます。けんかをしたときに、「死ね」や「うざい」と言ってしまうことがよくあります。友達と口げんかをしたときもついかっとなって言ってしまうことがあります。<br>　でも、この本を読むと、兄弟がいることのうれしさや、助け合うことの大切さがとても伝わります。「生きる」ということがあたり前でないことや、平和ということについても考えさせられます。<br>　本をかりに行ったら、『火垂るの墓』を読んでみませんか。"
  },
  {
    "id": "elementary-2-16",
    "name": "伊藤果恋",
    "year": "飯田市立鼎<span class='inline-bl'>小学校５年生</span>",
    "prefecture": "長野県",
    "booktitle": "おやすみ、ロジャー　魔法のぐっすり絵本",
    "booktitle_modal": "おやすみ、ロジャー",
    "note01": "カール＝ヨハン・エリーン／著<br>三橋美穂／監",
    "note02": "飛鳥新社",
    "opponent": "ねむれない人",
    "opponent_modal": "ねむれない人",
    "txt": "　わたしがおすすめしたい本は、『おやすみ、ロジャー』です。『おやすみ、ロジャー』は、たった10分でねれてしまう、まほうの本のようです。文章のと中、名前を入れるところがあります。そこに自分の名前を入れながら読むことができます。読んでもらっているほうもねむくなりますが読んでいるほうもねむくなっていきます。すぐにねたいときに読んでもいいと思います。この本は、年れい関係なく、大人の方でもねむくなります。わたしも小さいころぜんぜんねむれないときに読んでもらったらすぐねてしまいました。なので、わたしはこの本をさいごまで読んだことがありません。なのでこの本は、すぐにねたい人、ねむれない人にすごくおすすめな本です。"
  },
  {
    "id": "elementary-2-17",
    "name": "村上紗央",
    "year": "武豊町立武豊<span class='inline-bl'>小学校４年生</span>",
    "prefecture": "愛知県",
    "booktitle": "かあちゃん取扱説明書",
    "booktitle_modal": "かあちゃん取扱説明書",
    "note01": "いとうみく／作<br>佐藤真紀子／絵",
    "note02": "童心社",
    "opponent": "お母さんとケンカ中の人",
    "opponent_modal": "お母さんとケンカ中の人",
    "txt": "　この本は、主人公のてつやがお母さんの取扱説明書を作る話です。読みながら私も、自分のお母さんの取扱説明書を作ってみたくなりました。作るために、お母さんのことをいっぱい見て、いっぱい知っていっぱい考えます。お母さんとケンカ中の人におすすめしたい本です。<br>　てつやの作った取扱説明書の最後のページに、ある一行が追加されます。私は読んだときに、とてもびっくりしました。さて何と書かれていたでしょう。<br>　読むと、お母さんの気持ちが分かり、なか直りしたくなると思います。そして読んだ人みんな、今よりもお母さんのことが好きになると思います。"
  },
  {
    "id": "elementary-2-18",
    "name": "川田光太朗",
    "year": "四日市市立羽津北<span class='inline-bl'>小学校４年生</span>",
    "prefecture": "三重県",
    "booktitle": "十五少年漂流記",
    "booktitle_modal": "十五少年漂流記",
    "note01": "ジュール・ベルヌ／著<br>那須辰造／訳<br>金斗鉉／絵",
    "note02": "講談社青い鳥文庫",
    "opponent": "ぼうけんが好きで読書が苦手な子へ",
    "opponent_modal": "ぼうけんが好きで読書が苦手な子へ",
    "txt": "　ぼうけんが好きで、読書が苦手な子は『十五少年漂流記』を読んでみて。十五人の少年達が力を合わせて無人島で生きぬいていく話だよ。そこで、ぼく達の好きな基地を作って悪いやつと戦ったりするし、仲間どうしでけんかしたりもするから、とてもハラハラするんだ。まるで自分が十六人目の少年になった感じで、いっしょに大ぼうけんできるよ。<br>　ゲームやテレビのぼうけんも楽しいけど、やりすぎるとおこられるよね。でも、読書はやりすぎてもおこられないよ。時間無せいげんで大ぼうけんができるなんて、サイコーだと思わない？　ぼくはこの本を読んでから読書が楽しいものにかわったよ。"
  },
  {
    "id": "elementary-2-19",
    "name": "寺田海空",
    "year": "大阪教育大学附属天王寺<span class='inline-bl'>小学校４年生</span>",
    "prefecture": "大阪府",
    "booktitle": "カサうしろに振るやつ絶滅しろ！　絶滅してほしい！？迷惑生物図鑑",
    "booktitle_modal": "カサうしろに振るやつ絶滅しろ！ 絶滅してほしい!?迷惑生物図鑑",
    "note01": "氏田雄介／原案<br>武田侑大／絵<br>ＣＨＯＣＯＬＡＴＥ<br>Ｉｎｃ．／制作<br>",
    "note02": "小学館",
    "opponent": "世界中の人",
    "opponent_modal": "世界中の人",
    "txt": "　こんな人になったらダメだよととっても面白いイラストで教えてくれるステキな本。私はこの本は世界中の人に読んでもらいたいです。みんなに迷惑かけてるのに、全く気付かない人が、ほんとうにたくさんいるから。<br>　コロナウイルスがはやっているのに、くしゃみをしても手でかくさなかったり、食事の前に手を洗わない人とか、ありえないよ。きたないじゃんって思わないのかなあ。子供らしくないとか、女の子らしくないとか、決め付けてくる人がいるけど、とっても迷惑だ。女の子が男の子らしくしたって、だれにも迷惑はかからない。<br>　自分の考え方を押しつけてくる人にはなりたくない。面白いだけじゃない、ためになる本です。"
  },
  {
    "id": "elementary-2-20",
    "name": "長尾奈波",
    "year": "神戸市立つつじが丘<span class='inline-bl'>小学校６年生</span>",
    "prefecture": "兵庫県",
    "booktitle": "コミック版 世界の伝記<br>ココ・シャネル",
    "booktitle_modal": "ココ・シャネル",
    "note01": "久松ゆのみ／漫画<br>塚田朋子／監修",
    "note02": "ポプラ社",
    "opponent": "デザイナーになりたい小学生へ",
    "opponent_modal": "デザイナーになりたい小学生へ",
    "txt": "　あなたはどの様なデザイナーになりたいですか。私は服やかばんや帽子のデザイナーになりたいです。そのためにしている事は、自分が着てみたい服や持ちたいかばんのデザインを描く事、デザイナーの作品を見て自分なりにアレンジしてみる事、時々美術館に行く事などです。あなたはどんな事をしていますか。シャネルは、古い考えにとらわれず新しい形の帽子やコルセットなしで着るドレスなどを作りました。もしコルセットなしの服がなかったら、会社の社長や政治家になった女性は数少なかったかもしれません。自分の個性や考えを大切にして、大勢の人が使いたくなる物を作りたいね。<br>　大人になったらデザイナーとして一緒に仕事をしよう！"
  },
  {
    "id": "elementary-2-21",
    "name": "乾紘輔",
    "year": "生駒市立生駒台<span class='inline-bl'>小学校４年生</span>",
    "prefecture": "奈良県",
    "booktitle": "かあちゃん取扱説明書",
    "booktitle_modal": "かあちゃん取扱説明書",
    "note01": "いとうみく／作<br>佐藤真紀子／絵",
    "note02": "童心社",
    "opponent": "お母さん",
    "opponent_modal": "お母さん",
    "txt": "　主人公がお母さんに少しふまんを持っているところに、とても共感しました。<br><span class='indent'>「さいごに、かあちゃんはすぐ『早く』っていうけれど、でかけるとき一番したくがのろいのはかあちゃんです。ぼくが『早く』っていうとおこるのも、やめてほしいと思います。」</span><br>　てつやくんがかいたこの作文が、特に気に入っています。ぼくは、お母さんが大好きだけど、この作文の「早く」みたいなことをガミガミ言わないでほしいです。なぜならぼくのお母さんも当たり前のように「これやって。あれもやって」といいます。イライラしたりうんざりしたりするぼくの気持ちを知ってもらうために、しっかり読んでもらいたいです。"
  },
  {
    "id": "elementary-2-22",
    "name": "橋﨑真琳",
    "year": "和歌山市立安原<span class='inline-bl'>小学校６年生</span>",
    "prefecture": "和歌山県",
    "booktitle": "二番目の悪者",
    "booktitle_modal": "二番目の悪者",
    "note01": "林木林／作<br>庄野ナホコ／絵",
    "note02": "小さい書房",
    "opponent": "拡散しようとしている人へ",
    "opponent_modal": "拡散しようとしている人へ",
    "txt": "　今、拡散しようとしている人、少し止まって『二番目の悪者』を読んでみて下さい。うそのうわさがだんだんと広がって、本当のことのようになってしまう過程が、とてもおそろしく書かれています。<br><span class='indent'>「嘘は、向こうから巧妙にやってくるが、真実は、自らさがし求めなければ見つけられない」</span><br>　全てを見ていた雲がつぶやいた言葉です。<br>　私は、この言葉にハッとさせられました。だれでも簡単に発信できるからこそ、自分の考えをしっかりと持つこと。無責任に信じて悪意に加担しないようにすることが大切なんだと。<br>　だから、あなたも少し考えてみて下さい。<br>「二番目の悪者」になる前に。"
  },
  {
    "id": "elementary-2-23",
    "name": "森本竜生",
    "year": "かつらぎ町立大谷<span class='inline-bl'>小学校６年生</span>",
    "prefecture": "和歌山県",
    "booktitle": "しあわせをさがしている きみに",
    "booktitle_modal": "しあわせをさがしている きみに",
    "note01": "エヴァ・イーランド／作<br>いとうひろみ／訳",
    "note02": "ほるぷ出版",
    "opponent": "二年前のぼく",
    "opponent_modal": "二年前のぼく",
    "txt": "「しあわせになりたい」誰もが思うこと。だから少しイヤなことがあったら、どうしてぼくだけ？　私だけ？　と思い、落ちこんだりする。少し前のぼくもそうだった。自分じゃないすべての人がうらやましくて、そしてどんどん落ちこんでしまった。そんな時この本に出会って「しあわせ」ってさがさなくても、いつもそこにいる。ただ自分がきづいていないだけと分かった時、人がうらやましいという気持ちが消えた。そして、前向きな気持ちになりたくさんの「しあわせ」がぼくの中からうまれはじめた。だから二年前のぼくにこの本をプレゼントしたい。「しあわせ」はそこにいるよ。はやく気づいて。うらやましく思う必要はない。今のままで充分ステキだ。"
  },
  {
    "id": "elementary-2-24",
    "name": "平岡希唯",
    "year": "笠岡市立城見<span class='inline-bl'>小学校５年生</span>",
    "prefecture": "岡山県",
    "booktitle": "教科書にでてくる古典　マンガでさきどり平家物語",
    "booktitle_modal": "平家物語",
    "note01": "岸田恋／マンガ<br>平田喜信／監修<br>けーしん／イラスト",
    "note02": "くもん出版",
    "opponent": "平家の方々",
    "opponent_modal": "平家の方々",
    "txt": "　平家のみなさん、もしあなた達が現代に生まれ変わっているのなら、この本を手に取って読んでみてください。この本は、平清盛を中心としたあなた達一族の一生を描いたものです。この本が正しいかどうかは分かりませんが、二〇二二年、令和の世では清盛はとんでもない悪人といわれています。ですが、私は清盛をただ悪人というのではなく、その時どういう事情があって、その行動にでたのかと考えます。人は、どうしても被害者側からの目線で見てしまい、加害者のことも考えずにただその人を「悪人」と決めつけてしまいがちです。でも、清盛が行ったことで、傷ついた人がいたのもたしかです。私はこの本を読んだあなたたちとぜひ語り合いたい。"
  },
  {
    "id": "elementary-2-25",
    "name": "藤川果穂",
    "year": "笠岡市立城見<span class='inline-bl'>小学校５年生</span>",
    "prefecture": "岡山県",
    "booktitle": "グレッグのダメ日記　さすがに、へとへとだよ",
    "booktitle_modal": "グレッグのダメ日記 さすがに、へとへとだよ",
    "note01": "ジェフ・キニー／作<br>中井はるの／訳",
    "note02": "ポプラ社",
    "opponent": "いつもおこっているお母さんへ",
    "opponent_modal": "いつもおこっているお母さんへ",
    "txt": "　お母さん、私はそんなにできる人間じゃない。そうおこるな。この『グレッグのダメ日記　さすがに、へとへとだよ』を読んでほしい。ほらグレッグが言ってるじゃないか。家が建っている場所がちがうと仲が悪いって。それといっしょだよ。しゅうちゃんと大ちゃんは坂の上の家。私と凌平君は下の家なんだよ。だから私がしゅうちゃんと大ちゃんにさからうとけんかがおきるんだ。だって坂の上の家に行くってことでしょ？　だからおこられても困るんだ。しかたがないじゃないか。でも分かるよ、お母さんの気もちも。私はできた人間じゃないけどグレッグほどダメダメでもないかなぁ。ちょっと努力してみるよ。仲よくできるように。お兄ちゃんたちも役に立つしさ。"
  },
  {
    "id": "elementary-2-26",
    "name": "渡成蒼",
    "year": "英数学館<span class='inline-bl'>小学校５年生</span>",
    "prefecture": "広島県",
    "booktitle": "少年探偵・江戸川乱歩(1)<br>怪人二十面相",
    "booktitle_modal": "怪人二十面相",
    "note01": "江戸川乱歩／作<br>藤田新策／装丁・画家",
    "note02": "ポプラ社",
    "opponent": "友達",
    "opponent_modal": "友達",
    "txt": "　ハラハラ、ドキドキは時代を超える。昭和11年に連載が始まった「少年探偵」シリーズ、今からなんと86年前の話だ。僕たちと同年代の少年たちが、探偵の明智小五郎と協力し、怪人二十面相を知恵と工夫で追い詰めていく。思いもよらない展開の連続で、自分で推理する楽しさと、最後に必ず種明かしがあるので、どんどん先が読みたくなる。現代では当たり前の携帯もインターネットも無い時代の話だけど、昭和、平成、令和、どの時代の子ども達も夢中にしてきた。もしかしたら、お父さん、お母さんだけでなく、おじいさん、おばあさんも読んでいるかもしれない。世代を超えて感想が言い合える話なんて、他にはないと思いませんか。"
  },
  {
    "id": "elementary-2-27",
    "name": "兵頭佑飛",
    "year": "府中町立府中<span class='inline-bl'>小学校５年生</span>",
    "prefecture": "広島県",
    "booktitle": "トットちゃんとソウくんの戦争",
    "booktitle_modal": "トットちゃんとソウくんの戦争",
    "note01": "黒柳徹子、田原総一朗／著",
    "note02": "講談社",
    "opponent": "プーチン大統領",
    "opponent_modal": "プーチン大統領",
    "txt": "「戦争だにげろー。」今この場で戦争になったらあなたはどうしますか。戦争がおきるということは身近ではない。プーチン大統領は今ウクライナの人々の命をうばっている。ぼくはプーチン大統領に『トットちゃんとソウくんの戦争』という本をすすめたい。この本の内容はトットちゃんとソウくんの戦争についてかかれたノンフィクションの物語だ。ぼくはさいしょ小説を読む事が苦手だったけどこの本に出会ってぼくは涙をながした。なんでこんなことがおこったんだろうと思った。ぼくの願いは世から「戦争」というものはなくなってほしいということだ。プーチン大統領、どうか今からでもこの本を読んでみてください。"
  },
  {
    "id": "elementary-2-28",
    "name": "八谷悠真",
    "year": "府中町立府中<span class='inline-bl'>小学校４年生</span>",
    "prefecture": "広島県",
    "booktitle": "しっぱいに かんぱい！",
    "booktitle_modal": "しっぱいに かんぱい！",
    "note01": "宮川ひろ／作<br>小泉るみ子／絵",
    "note02": "童心社",
    "opponent": "しっぱいをしてしまった人",
    "opponent_modal": "しっぱいをしてしまった人",
    "txt": "　この本をしょうかいする理由は二つあります。<br>　一つ目は、しっぱいは次の第一歩と教えてくれるということを知ったからです。しっぱいをしてもだいじょうぶというような安心した気持ちになります。<br>　二つ目は、もししっぱいしてしまったとしても、ちょうせんしたことがすごいとはげましてくれるからです。しっぱいはくやしいけどしっぱいするからこそ成長できます。また、時がたつとしっぱいがいい思い出になるというおじいさんの言葉が心にのこりました。しっぱいを一人でかかえこまずにそうだんすることも大事と知りました。ぜひしっぱいをしてなやんでいる人に読んでみてほしいです。"
  },
  {
    "id": "elementary-2-29",
    "name": "竹之内凜",
    "year": "大野城市立大野東<span class='inline-bl'>小学校６年生</span>",
    "prefecture": "福岡県",
    "booktitle": "かがみの孤城<br>(上下巻)",
    "booktitle_modal": "かがみの孤城",
    "note01": "辻村深月／著",
    "note02": "ポプラ文庫",
    "opponent": "みんなと同じになれないと感じている人",
    "opponent_modal": "みんなと同じになれないと<span class='inline-bl'>感じている人</span>",
    "txt": "「もう闘わなくてもいいよ」。この文を読み、あなたはどんなことを思い出しましたか。人それぞれ思い出す場面は違うと思います。でも、この文を読んで、少しはその思い出が温かい色に変わったのではないでしょうか。<br>　私は、嫌なことがあるたび、この本を読み返しています。怒りや悲しみが全て報われるわけではないけれど、それでも、それまでカチコチだった心が、ふわっと軽くなるのです。<br>　もし、生きるのが辛くて、死にたいと思っている人がいるなら、この本を読んでください。きっと、この本はあなたの悩みに寄りそってくれます。きっと、この本はあなたの心をほぐしてくれます。"
  },
  {
    "id": "elementary-2-30",
    "name": "野入桃子",
    "year": "明治学園<span class='inline-bl'>小学校４年生</span>",
    "prefecture": "福岡県",
    "booktitle": "ころべばいいのに",
    "booktitle_modal": "ころべばいいのに",
    "note01": "ヨシタケシンスケ／作",
    "note02": "ブロンズ新社",
    "opponent": "今、つらいと思っている人へ",
    "opponent_modal": "今、つらいと思っている人へ",
    "txt": "　小学２年生の頃、私は嫌がらせを受けていた。何が理由かは分からない。ひょっとしたら、いじめている側には理由なんてないのかもしれない。それが「いじめ」という自覚もないのかもしれない。<br>　落ちこむ私に、母がくれた本がこれだった。<br>『ころべばいいのに』<br>　タイトルを見た時、笑ってしまった。ころべばいいのに。そう言えたら、私はどれだけ楽になれるのだろう。いじめている側は私を転ばそうと思っているのに、私はいじめている側に「ころべばいいのに」とさえ言えない。だって私は、心の痛みを知っているから。<br>　今、つらいと思っている人にこの本を読んでほしい。私も、あなたの笑顔が見たいから。"
  },
  {
    "id": "elementary-2-31",
    "name": "新納萌菜",
    "year": "宮崎市立本郷<span class='inline-bl'>小学校５年生</span>",
    "prefecture": "宮崎県",
    "booktitle": "きょうはなんのひ？",
    "booktitle_modal": "きょうはなんのひ？",
    "note01": "瀬田貞二／作<br>林明子／絵",
    "note02": "福音館書店",
    "opponent": "家族をお祝いしたいあなたへ",
    "opponent_modal": "家族をお祝いしたいあなたへ",
    "txt": "　人には大切な日があるものです。母は、兄と姉と私のたん生日には、あるイベントを開きます。そのイベントとは…。『きょうはなんのひ？』という本に答えがのっています。主人公は両親の結婚記念日に家に十枚の手紙をかくします。それをお母さんが見つけながらお祝いメッセージにたどり着く話です。<br>　母はこの絵本が大好きで、それを真似して、たん生日には家中にたくさんの手紙をしのばせます。探し回る間、ワクワクが止まりません。いろんなミッションをクリアしながら、最後はたん生日プレゼントが待っているのです。これがわが家のバースデーイベントです。この本は、だれかの大切な日を祝う気持ちと、思い出に残る素敵なイベントを教えてくれます。"
  },
  {
    "id": "elementary-2-32",
    "name": "内陽希",
    "year": "薩摩川内市立高来<span class='inline-bl'>小学校６年生</span>",
    "prefecture": "鹿児島県",
    "booktitle": "僕は上手にしゃべれない",
    "booktitle_modal": "僕は上手にしゃべれない",
    "note01": "椎野直弥／著",
    "note02": "ポプラ社",
    "opponent": "しゃべるのがにがてなあなたへ",
    "opponent_modal": "しゃべるのがにがてなあなたへ",
    "txt": "　あなたは、人前でうまく話せますか。私は人前でうまく話すことがにがてです。だから私は『僕は上手にしゃべれない』という題名を見た時、自分と一緒と思いドキドキしました。<br>　この主人公はきつ音という、言葉がスムーズに出てこないハンデになやんでいました。でも、周りの人の優しさがあってすこしずつしゃべれるようになりました。仲間と協力することや、相手を思いやることを考えるきっかけになる本だと思いました。<br>　私はこの本を読んでみて人と積極的に話そうと思いました。私の周りにも家族や友達がいます。なやんでいる人にあたたかい言葉をかけてあげたいな。そんな気持ちにさせてくれる本です。"
  },
      ],
      i = [
  {
    "id": "junior-1",
    "name": "清水英世",
    "year": "札幌市立栄南<span class='inline-bl'>中学校３年生</span>",
    "prefecture": "北海道",
    "booktitle": "みえるとか<br>みえないとか",
    "booktitle_modal": "みえるとか みえないとか",
    "note01": "ヨシタケシンスケ／さく<br>伊藤亜紗／そうだん",
    "note02": "アリス館",
    "opponent": "ふつうって何だろう？と思っている人へ",
    "opponent_modal": "ふつうって何だろう？と思っている人へ",
    "txt": "　そこの皆さんに質問です。「ふつうって何？」と思ったことはありますか。考えたことがあっても結局モヤモヤしたままの人、多いのではないでしょうか。<br>　この絵本では、「目の見えるひと」と「目の見えないひと」から見えている世界の違いを比較することで「ふつう」についてもっと深く考えさせられる内容になっています。もっとモヤモヤしてしまうかもしれませんが、きっと皆さんの「ふつう」の概念が少し変わるきっかけになると思います。<br>　他人の「ふつう」を理解することはその人と認め合うことにつながっていく、そんなことをこの本は教えてくれます。ぜひ見て、読んで、じっくり考えてみてください。新しい世界はすぐ側です。"
  },
  {
    "id": "junior-2",
    "name": "堀山直浩",
    "year": "札幌市立向陵<span class='inline-bl'>中学校３年生</span>",
    "prefecture": "北海道",
    "booktitle": "すべての人生について",
    "booktitle_modal": "すべての人生について",
    "note01": "浅田次郎／著<br>",
    "note02": "幻冬舎文庫",
    "opponent": "漠然とした不安に吸い込まれそうな息苦しさを感じている全ての受験生へ",
    "opponent_modal": "漠然とした不安に吸い込まれそうな息苦しさを感じている全ての受験生へ",
    "txt": "　僕は受験生だ。いきなり何だと思われるだろうが、必要な情報だ。優雅に読書する余裕などない僕が、時間をやりくりしてでも読む本を、僕と同様、不透明な未来に立ち向かっている皆にお勧めしたい。本書は著者が各界の著名人達と対話した内容をまとめた物だ。元々、大好きな作家という色眼鏡を除いても一読の価値がある。一流の人達の普段見えない、見せない部分が大作家の巧みな話術で存分に引き出されている。「何の為の受験か？　進路か？　勉強か？」僕の中に巣くうモヤモヤをばっさばっさと一刀両断していく痛快さだ。読後感は強炭酸飲料にも負けない爽快感だ。受験生は時間が無い。解っている。解っているが心が迷子の時には参考書より本書がお勧めだ。"
  },
  {
    "id": "junior-3",
    "name": "石川沙妃",
    "year": "奥州市立水沢<span class='inline-bl'>中学校２年生</span>",
    "prefecture": "岩手県",
    "booktitle": "君がひとりで泣いた夜を、僕は全部抱きしめる。",
    "booktitle_modal": "君がひとりで泣いた夜を、僕は全部抱きしめる。",
    "note01": "ユニモン／著<br>雨森ほわ／イラストレーター",
    "note02": "スターツ出版",
    "opponent": "いじめを受けている子たちへ",
    "opponent_modal": "いじめを受けている子たちへ",
    "txt": "「ねぇねぇこれ読んでみて！」「ごめん。うち小説嫌いなの。」これが私の一番仲の良い友達とのよくある会話だ。私は小説も漫画も大好きだ。だから会話でも本の話題が一番好き。でも本の話題はなかなか出てこない。みんなアイドルの話ばかりでつまらないのだ。そして、私は一部の女子からいじめを受けるようになった。その時この本と出会った。本の内容もいじめの話だ。その本の主人公が私にそっくり。自分を偽って友達といること。そして私は知らぬ間に勇気をもらっていた。主人公にアドバイスをする男の子の言葉が胸に刺さったからだ。おかげでいじめっ子とも話し、いじめは消えた。<br>　私は本から勇気をもらった。君も本から勇気をもらってみない。"
  },
  {
    "id": "junior-4",
    "name": "川井美悠",
    "year": "奥州市立水沢<span class='inline-bl'>中学校３年生</span>",
    "prefecture": "岩手県",
    "booktitle": "発達障害の僕が 輝ける場所を みつけられた理由",
    "booktitle_modal": "発達障害の僕が 輝ける場所を みつけられた理由",
    "note01": "栗原類／著",
    "note02": "ＫＡＤＯＫＡＷＡ",
    "opponent": "障害を持っている人、障害を持ってない人",
    "opponent_modal": "障害を持っている人、<span class='inline-bl'>障害を持ってない人</span>",
    "txt": "　私は、この本を読んで障害を抱えている人はとてもつらい、大変ということを改めて知りました。何なら、私自身も発達障害を抱えているからです。私は、発達障害と診断されてからは、自分がとても嫌になり、当時の友達とも距離をとっていました。しかし、診断されてから約二年後、この本と出会いました。この本に登場する俳優の栗原類さんも私と同じ発達障害を抱えていることを知り、私は、「障害を抱えているのに、何で。」という気持ちになり、私は気づきました。「障害を抱えていても、必ず、受け止めてくれる人がいるんだ。」と。その日から私は、当時の友達との間にあった壁をなくし、話をしたら、今になっては大親友です。必ず受け止める人はいる。"
  },
  {
    "id": "junior-5",
    "name": "田代悠太",
    "year": "古川学園<span class='inline-bl'>中学校３年生</span>",
    "prefecture": "宮城県",
    "booktitle": "半分の月がのぼる空４　grabbing at the half-moon",
    "booktitle_modal": "半分の月がのぼる空４",
    "note01": "橋本紡／著<br>山本ケイジ／イラスト",
    "note02": "ＫＡＤＯＫＡＷＡ 電撃文庫",
    "opponent": "大切な人を亡くしてしまった方",
    "opponent_modal": "大切な人を亡くしてしまった方",
    "txt": "　私は小学四年の九月十六日、胆管癌により母を亡くした。当時はただただ泣いて悲しむことしかできなかった。だが、今は母という存在すらも薄れつつあり、それは良いことなのか、悪いことなのか悩んでいる。この本は、肝炎のために入院している戎崎裕一が重い病を抱える秋庭里香に恋をする物語。裕一の知らぬ間に里香の容態は深刻化していく中での、彼らの何気ない会話や面白おかしい出来事の数々は、まるで過去の私と母との日常を描写しているようで、懐かしく、そして悲しく感じられた。そんな気持ちになっていくうちに、母の死に悩まず、自分なりに前へ進んでいこうと思えた。大切な人を亡くしてしまった方に是非読んでもらいたい一冊である。"
  },
  {
    "id": "junior-6",
    "name": "渡辺真悠",
    "year": "会津若松市立一箕<span class='inline-bl'>中学校１年生</span>",
    "prefecture": "福島県",
    "booktitle": "たいのおかしら",
    "booktitle_modal": "たいのおかしら",
    "note01": "さくらももこ／著",
    "note02": "集英社文庫",
    "opponent": "親友へ",
    "opponent_modal": "親友へ",
    "txt": "　ねぇ、さくらももこさんって知ってる？　ちびまるこちゃんをつくった人だよ。私は今、さくらももこさんのエッセイにはまっているんだ。<br>　この本は学校で、朝の読書の時間によく読んでいるよ。クスッと笑えるお話がつまっていて、<br>「今日も一日、がんばろう。」<br>って思えるんだ。<br>　私はこの本を読んでから、何気ない日常が少しあざやかになった気がしたよ。今は忘れてしまいたい黒歴史だって、大人になったら笑い話になるんだなぁって思ったよ。<br>　最近は好きなアイドルの話ばかりしているけど、たまにはさ、小学生のときみたいに、好きな本の話で盛り上がりたいなぁ。"
  },
  {
    "id": "junior-7",
    "name": "石原煌大",
    "year": "江戸川学園取手<span class='inline-bl'>中学校１年生</span>",
    "prefecture": "茨城県",
    "booktitle": "夏の庭―The Friends―",
    "booktitle_modal": "夏の庭—The Friends—",
    "note01": "湯本香樹実／著",
    "note02": "新潮文庫",
    "opponent": "昨年亡くなったおじいちゃん",
    "opponent_modal": "昨年亡くなったおじいちゃん",
    "txt": "　おじいちゃん、元気ですか。おじいちゃんに伝えたい本があります。『夏の庭』という本です。この本は、少年達とある老人の交流を描いた内容です。死んだらどうなるのか、「死」とはどういうことなのかを考えながら少年達は成長していきます。<br>　私は昨年末、おじいちゃんの死に直面しました。おじいちゃんが死んでも全く実感がわきませんでした。でも、家に遊びに行き、おじいちゃんがいない部屋を見ると「チクン」と胸が少し痛くなります。生きてる間にもっと優しくしていれば良かったなと後悔します。この少年達みたいに僕ともっとたくさん話したかったのかな。そんな気持ちでこの本をおじいちゃんと共有したくなりました。"
  },
  {
    "id": "junior-8",
    "name": "大村葵",
    "year": "つくばみらい市立小絹<span class='inline-bl'>中学校２年生</span>",
    "prefecture": "茨城県",
    "booktitle": "きょうから飛べるよ",
    "booktitle_modal": "きょうから飛べるよ",
    "note01": "小手鞠るい／作<br>たかすかずみ／絵",
    "note02": "岩崎書店",
    "opponent": "妹のはるちゃん",
    "opponent_modal": "妹のはるちゃん",
    "txt": "　はるちゃん、はるちゃんにはぜひ『きょうから飛べるよ』を読んでほしい。はるちゃんには、文句ばかりいう人ではなく、心の広い人になってほしい。この本の「さくらちゃん」みたいにね。日々成長していくさくらちゃんを見ると、小学四年生のときの私はこう思った。「さくらちゃんと同じ年なのに私はあんなに勇気のある行動ができるのかな。」と。今のはるちゃんも四年生だから自分と比べながら読んでみてほしいの。きっと何か気づくはず。それとね、私はこの文が好きだった。「きょうから飛べる。あしたも飛べる。あさっても飛べる。」この文を読んだとききっとあなたは涙を流す。そしてはるちゃんは新しいはるちゃんになっているよ。"
  },
  {
    "id": "junior-9",
    "name": "倉田澪乃",
    "year": "日本大学豊山女子<span class='inline-bl'>中学校１年生</span>",
    "prefecture": "埼玉県",
    "booktitle": "子犬工場",
    "booktitle_modal": "子犬工場 いのちが商品にされる場所",
    "note01": "大岳美帆／著",
    "note02": "WAVE出版",
    "opponent": "動物をこれから飼う人",
    "opponent_modal": "動物をこれから飼う人",
    "txt": "　私の家で飼っている犬や、ペットショップの犬はどこで生まれ、お母さん犬はどんな暮らしをしているのか知りたくなり、この本を読みました。<br>　工場で商品をたくさん作るように、子犬をたくさん作っている場所を「パピーミル＝子犬工場」といいます。子犬工場で生まれた子犬は売り物です。子犬を産んで、お乳をあげたら、お母さん犬の役目は終わりです。子犬は連れさられ、お母さん犬は子犬を探しつづけるというところで涙があふれました。命が商品になっていいのかな、命に値段なんてつけられるのかな、とても疑問に思いました。そして、連れさられた子犬たちはどこに行ったのか、ぜひこの本を読んでみてください。"
  },
  {
    "id": "junior-10",
    "name": "安齋さくら",
    "year": "柏市立西原<span class='inline-bl'>中学校３年生</span>",
    "prefecture": "千葉県",
    "booktitle": "家族シアター",
    "booktitle_modal": "家族シアター",
    "note01": "辻村深月／著",
    "note02": "講談社文庫",
    "opponent": "家族のことで悩む中学生",
    "opponent_modal": "家族のことで悩む中学生",
    "txt": "　父、母、姉、祖父、孫。誰にでも「家族」と呼べる人がいるだろう。そして、誰にでも家族と上手くいかなかった経験もあるだろう。この本は、そんな家族の形がかかれている。自分が家族との関係で悩んでいるからこそ、登場人物に感情移入できると思う。かくいう私も何度も読み、その度に涙をこぼしている。ところで、なぜ中学生に勧めたいのかというと、子どもの気持ちと大人の気持ちの両方を理解することができると思ったからだ。話ごとに異なる関係性の二人の対比も、この本の面白さの一つだ。この本には七つの話が収録されているが、それら全てがハッピーエンドというわけではない。だからこそ、家族のことで悩むあなたにぜひ読んでほしい。"
  },
  {
    "id": "junior-11",
    "name": "内田碧",
    "year": "市川<span class='inline-bl'>中学校３年生</span>",
    "prefecture": "千葉県",
    "booktitle": "きみの町で",
    "booktitle_modal": "きみの町で",
    "note01": "重松清／著<br>ミロコマチコ／絵",
    "note02": "朝日出版社",
    "opponent": "悩みがあるときの自分",
    "opponent_modal": "悩みがあるときの自分",
    "txt": "　小学五年生の時、初めてこの本を読んだ時は、不思議な後味だなと思いました。この本は短編集で、ほとんどの話でラストが書かれていません。知るってなに？　自由ってなに？　などの疑問に沿って物語がつくられており、考えるきっかけをくれます。私はこの本を読むと、いつも安心します。この本の中の誰かは、その時の私が共感できる悩みをもって考え、成長しようとしているからです。それを見て、人間関係で悩んでいた私も、将来が不安だった私も勇気をもらい、がんばろうと思えました。また、この本は読んだ年齢によって感じることが変わっていきます。自分の考え方が変化しているのを実感できて面白いです。これからもたくさん読んで下さい。"
  },
  {
    "id": "junior-12",
    "name": "真田幸空",
    "year": "江戸川学園取手<span class='inline-bl'>中学校２年生</span>",
    "prefecture": "千葉県",
    "booktitle": "西の魔女が死んだ",
    "booktitle_modal": "西の魔女が死んだ",
    "note01": "梨木香歩／著",
    "note02": "新潮文庫",
    "opponent": "自分を変えたいあなたに",
    "opponent_modal": "自分を変えたいあなたに",
    "txt": "「諦めそうになったときこそ変化の一歩手前」<br>　だれでも諦めかけた時などはたくさんあると思う。それは何かと向き合っている証拠であり、その壁を乗り越えた時に自分の中で「何か」が変わる。この本は祖母と娘の中で起こる魔女修行の日々について語ったものだ。少し難しい場面もあるかもしれないが、人生において本当に大切なこと、人の死について深く深く考えさせられる。一つ一つの言葉から自分がどう考えてどう行動し、どう自分を変えていくかを考えることができる。何回も何回も考えていくと、「本当の自分」にであえるはずだ。ぜひ、自分を変えたいあなたに、今はそうじゃなくてもいつか役に立つから読んでみてほしい。"
  },
  {
    "id": "junior-13",
    "name": "新居花",
    "year": "市川<span class='inline-bl'>中学校３年生</span>",
    "prefecture": "千葉県",
    "booktitle": "ドキュメント　宇宙飛行士選抜試験",
    "booktitle_modal": "ドキュメント 宇宙飛行士選抜試験",
    "note01": "大鐘良一、小原健右／著",
    "note02": "光文社新書",
    "opponent": "大きな夢を持っているあなたへ",
    "opponent_modal": "大きな夢を持っているあなたへ",
    "txt": "　宇宙飛行士選抜試験、タイトルの通りこの本ではパイロットや産婦人科医など様々な経歴をもつ10人が宇宙飛行士になるための最終試験を受ける。過酷な試験の裏で同じ夢を追いかける候補者同士の絆や夢を応援する家族への想いなどが綴られている。<br>「最初は大作だけのものだった、宇宙飛行士の夢。それがいつしか、家族の夢になっていた。」この文が忘れられない。私はよく親から自分の人生は好きなように生きなさいと言われる。だが、この本を読んでから私の夢は自分１人で叶えることができるものではなく、周りの支えがあるから挑戦し続けられるということに気が付いた。是非この本を読んであなたの夢について考えて欲しい。"
  },
  {
    "id": "junior-14",
    "name": "野表すみれ",
    "year": "白井市立南山<span class='inline-bl'>中学校１年生</span>",
    "prefecture": "千葉県",
    "booktitle": "おやさい妖精とまなぶ野菜の知識図鑑",
    "booktitle_modal": "おやさい妖精とまなぶ野菜の知識図鑑",
    "note01": "ぽん吉／絵・作",
    "note02": "二見書房",
    "opponent": "野菜が嫌い・苦手な人",
    "opponent_modal": "野菜が嫌い・苦手な人",
    "txt": "　やっぱり、野菜ってまずいよね。にがかったり、すっぱかったり。その気持ち、ものすごく分かる。でも、この本に出会って、野菜を食べてみようってなれた。だから、野菜が嫌い・苦手なあなたにこの本を推せんする。私も野菜すっごく嫌いだった。ゆいいつ食べられるのがトマトくらい。でも、この本を読んで、野菜の良いところや効果を知れた。なんと言っても、おやさい妖精がとってもキュートで、私を野菜嫌いから遠ざけてくれた。私の特に好きなおやさい妖精は、ハクサイヌで、私を特に変えてくれたのは、ニンジンベエ。ニンジン嫌いな私でも、食べてみようってなれた。だから、あなたも読んでみて。そして野菜嫌いを直して、私みたいになってみて。"
  },
  {
    "id": "junior-15",
    "name": "服部正樹",
    "year": "江戸川学園取手<span class='inline-bl'>中学校２年生</span>",
    "prefecture": "千葉県",
    "booktitle": "LIFE<ライフ>　人間が知らない生き方",
    "booktitle_modal": "ＬＩＦＥ<ライフ> 人間が知らない生き方",
    "note01": "麻生羽呂、篠原かをり／著",
    "note02": "文響社",
    "opponent": "どんな生き方をしたいか悩んでいる人",
    "opponent_modal": "どんな生き方をしたいか悩んでいる人",
    "txt": "　この本では、身近な動物や野生の動物の生き方から参考にできる人生観を学ぶ事ができます。イヌから学ぶ「続ける姿勢」、カピバラから学ぶ「温厚」の大切さ、ダンゴムシから学ぶ「別の道を選択する」大切さなど社会で生活をする時に周りの人間との関わり方や自分をより良くするための立ち回り方を知ることができます。知っていた様で知らない、そんな生き方をこの本では二十種類の動物から二十通り知ることができます。どのような生き方をしたいか、どんな人間になりたいかに悩んでいるならこの本からヒントをもらえるかもしれません。また、動物で例えられていることから、受け止めやすさもあるので、是非おすすめします。"
  },
  {
    "id": "junior-16",
    "name": "阿部珠美怜",
    "year": "日本女子大学附属<span class='inline-bl'>中学校３年生</span>",
    "prefecture": "東京都",
    "booktitle": "女子的生活",
    "booktitle_modal": "女子的生活",
    "note01": "坂木司／著",
    "note02": "新潮文庫",
    "opponent": "少数派のあなたへ",
    "opponent_modal": "少数派のあなたへ",
    "txt": "　世の中は大体多数決で物事が進んでいる。人数が多いだけで自分の意見が正しいと勘違いをする者が現れる。すると少数派は悲しい顔をして部屋の隅で俯く他ないのだ。しかし忘れてはならないのは、多数決では数しか意味を持たないことである。これはＬＧＢＴを題材とした自信に満ちた本だ。誰に何を言われようと自分を受け入れてくれる人は案外いる、そんな楽に生きるヒントを与えてくれる。<br>　作者はあとがきで「弱くても戦う人が好き」と綴った。本を開けば俯いたあなたの肩をバシバシとはたきながら、女装した主人公は堂々と語ってくれるだろう。エールと共に空気が淀んだ部屋の窓を開け放ってくれる、そんな一冊を是非あなたにも楽しんで欲しい。"
  },
  {
    "id": "junior-17",
    "name": "楠本美凪",
    "year": "目黒星美学園<span class='inline-bl'>中学校２年生</span>",
    "prefecture": "東京都",
    "booktitle": "Ａｎｏｔｈｅｒ<br>(上下巻)",
    "booktitle_modal": "Ａｎｏｔｈｅｒ",
    "note01": "綾辻行人／著",
    "note02": "角川文庫",
    "opponent": "明智小五郎",
    "opponent_modal": "明智小五郎",
    "txt": "　今から君のことをとにかく褒める。まず、君は頭が良すぎる。怪人二十面相と対等に渡り合ったり、易々と犯人を見破ったりと、本当に君はすごい。私はいつもその頭脳と推理に驚かされている。しかし、今まで君が何かに驚いたことがあっただろうか？　そこで、ある計画を立てた。題して「明智小五郎びっくり大作戦」だ。ということで、早速君に一つ、本を紹介しよう。この本の舞台の夜見山北中学三年三組には一人、「死者」が紛れているのだ。しかも「死者」がいることで起こるのは残酷な死の連鎖。止めるにはどうすればよいか。そして「死者」は誰なのか。<br>　この本の魅力は恐怖と驚愕だ。ああ、はやく君が腰を抜かすほど驚いている姿が見たいなあ！"
  },
  {
    "id": "junior-18",
    "name": "河野優翔",
    "year": "世田谷区立深沢<span class='inline-bl'>中学校１年生</span>",
    "prefecture": "東京都",
    "booktitle": "美しすぎる星たち 見る、知る、撮るの星座の教科書",
    "booktitle_modal": "美しすぎる星たち 見る、知る、撮るの星座の教科書",
    "note01": "渡部潤一／監修",
    "note02": "宝島社",
    "opponent": "会いたい人、見たい景色がある人へ",
    "opponent_modal": "会いたい人、見たい景色がある人へ",
    "txt": "　みなさんは今、会いたい人がいますか。そして、もう一度見たい景色はありますか。<br>　ぼくは、小学校四年生の時に親友と沖縄で見た星空が忘れられません。真っ暗な夜空にたくさんの星。その一つ一つの大小の星がそれぞれきれいに輝いて吸い込まれそうに美しい星空でした。そして、それを見る親友のキラキラした横顔がとても印象的で忘れられません。<br>　今は、なかなか会う事のできない親友。この本の星空を見ると、あの日の親友に、そしてあの日のぼくに出会えた気持ちになれるのです。ぼく達の心はいつだって自由で、どこにだって行かれる、そんな気持ちにさせてくれる本です。"
  },
  {
    "id": "junior-19",
    "name": "三條凛子",
    "year": "雙葉<span class='inline-bl'>中学校１年生</span>",
    "prefecture": "東京都",
    "booktitle": "かがやき子ども病院トレジャーハンター",
    "booktitle_modal": "かがやき子ども病院トレジャーハンター",
    "note01": "まはら三桃／著<br>しまざきジョゼ／絵",
    "note02": "講談社",
    "opponent": "入院する人はかわいそうだと思っている人",
    "opponent_modal": "入院する人はかわいそうだと<span class='inline-bl'>思っている人</span>",
    "txt": "　あなたは「入院している人はかわいそう。」こんな風に思っていないだろうか。私自身もこの本の主人公と同じように入院を経験している。しかし、友達に「入院したことがある。」と言うと「かわいそう。」と返ってくることがある。なぜだろう。それは入院に対してただつらい・苦しいというイメージがあるからではないだろうか。友達とおしゃべりをしたり、検査の結果が良くなったり、嬉しいこと、楽しいことが多くある。つらいことより多いかも。この本には「たとえ病室はせまくても、空は広いし、宇宙も果てしない。頭の中はもっと。」という文がある。だからあなたには宇宙より広い頭の中で「入院している人は楽しみも見つけているんだ。」と考えてほしい。"
  },
  {
    "id": "junior-20",
    "name": "須藤葵理",
    "year": "品川区立伊藤学園３年生</span>",
    "prefecture": "東京都",
    "booktitle": "光待つ場所へ",
    "booktitle_modal": "光待つ場所へ",
    "note01": "辻村深月／著",
    "note02": "講談社文庫",
    "opponent": "もう頑張れないと思った未来の自分",
    "opponent_modal": "もう頑張れないと思った未来の自分",
    "txt": "　私は頑張り続けることがとても苦手だ。自分に自信がないせいで、努力が実を結ぶ未来を上手くえがけないから。今のあなたもきっとそう。表現する喜びを知っているのに、自分を解き放つための鍵をどこかに落としてしまった。音楽が大好きで、音楽とともに生きたいのに、そうしている自分が想像できない。そんなときはもう一度この本をひらいてほしい。作中でスポットライトがあたる人たちはみな、何かを変えたくて、自分が変わりたくて、正解のない場所であがいている。他人事ではないはずだ。その苦しみも尊さも、今の私より知っているのだから。この一冊をあなたの原点と結びつけ、また前に進んでほしい。心のどこかで信じる夢を叶えるために。"
  },
  {
    "id": "junior-21",
    "name": "武田菜々花",
    "year": "女子美術大学付属<span class='inline-bl'>中学校３年生</span>",
    "prefecture": "東京都",
    "booktitle": "たくさんのドア",
    "booktitle_modal": "たくさんのドア",
    "note01": "アリスン・マギー／著<br>ユ・テウン／絵<br>なかがわちひろ／訳",
    "note02": "主婦の友社",
    "opponent": "新しい世界への扉を開けようとしている人へ",
    "opponent_modal": "新しい世界への扉を開けようとしている人へ",
    "txt": "　この本はこれから新しい事にチャレンジする時や、新しい世界に飛び込んでいく時など、人生の節目に読んでほしい本です。<br>　実際に私も小学校を卒業する時期にこの本を読んで、とても心に響き、勇気を貰えました。<br>　これから未来に向かって進んで行く中で、ドアの向こうは決して楽しい事ばかりではなく、悲しみや苦しみがあるかもしれません。しかし、「いつも見守って応援しているよ」という気持ちが描かれていて、優しく背中を押してくれるような素敵な本です。<br>　開いたドアの向こうに何があっても、様々な経験や困難を乗り越えていくことで成長していく自分、まだ知らない自分を知ることが楽しみになってきます。"
  },
  {
    "id": "junior-22",
    "name": "中野楓",
    "year": "青山学院<span class='inline-bl'>中等部３年生</span>",
    "prefecture": "東京都",
    "booktitle": "WIND BREAKER (8)",
    "booktitle_modal": "ＷＩＮＤ ＢＲＥＡＫＥＲ（８）",
    "note01": "にいさとる／著",
    "note02": "講談社",
    "opponent": "「ハイヒール」＝「女性」のものだと思う人へ",
    "opponent_modal": "「ハイヒール」＝「女性」のものだと思う人へ",
    "txt": "「ハイヒールってどんなもの？」この問いの答えに、女性のものという要素が入っている人には是非読んでみて欲しい。<br>　私は女性の靴だと即答した。この答えが普通だとも思った。しかし、問いを投げかけた人は私と同じ回答をした少年に「確かに男女の違いは大切。でも、それはその人の一部でしかない。」と言った。私の普通によって自分の本音を話せず苦しんでいる人がいるかもしれない。私たちの普通とは多くの人が思っているだけで、必ず全員が当てはまるわけではない。<br>　最初の問いに女性の靴と答えた人は、普通を目指す少年と問いを投げかけた人の会話を読んでからもう一度考えて欲しい。「ハイヒールってどんなもの？」"
  },
  {
    "id": "junior-23",
    "name": "根岸よりの",
    "year": "恵泉女学園<span class='inline-bl'>中学校２年生</span>",
    "prefecture": "東京都",
    "booktitle": "わたしは千年生きた : 13歳のアウシュヴィッツ",
    "booktitle_modal": "わたしは千年生きた",
    "note01": "リヴィア・ビトン＝ジャクソン／著<br>吉澤康子／訳",
    "note02": "NHK出版",
    "opponent": "13歳の人",
    "opponent_modal": "13歳の人",
    "txt": "　この本は実際に筆者がアウシュヴィッツにつれていかれたお話であり、写真や絵は一切ありません。しかし、文字だけで目の前で起こっているように思わせる書き方は魅力の一つです。<br>　また、強制収容所につれていかれた当時の筆者の年齢は13歳で私が13歳に読んだ時は「同い歳の子がこんな目に。」と一番本に入り込めたと思います。そのため、13歳の人におすすめです。<br>　凄まじい状況下でも生きることを諦めなかった少女には本当に感動させられます。また、本を読んでいくうちにだんだんタイトルの『わたしは千年生きた』の意味の深さが分かっていくものでもありぜひ、最後まで読んでほしい本です。"
  },
  {
    "id": "junior-24",
    "name": "長谷川功雅",
    "year": "青山学院<span class='inline-bl'>中等部３年生</span>",
    "prefecture": "東京都",
    "booktitle": "泣きたい夜の甘味処",
    "booktitle_modal": "泣きたい夜の甘味処",
    "note01": "中山有香里／著",
    "note02": "ＫＡＤＯＫＡＷＡ",
    "opponent": "疲れている人",
    "opponent_modal": "疲れている人",
    "txt": "　僕は食べることが好きだ。特に甘い物には目が無い。そう、僕はスイーツ男子なのである。僕にとって食べることは生きること。やはり人間、落ち込んだ時や辛いことがあった日はおいしい物を食べるのが一番だと思う。色々上手くいかなくて少し疲れた。自分の将来が不安。食べ物のことなんか考えている場合じゃないと思う人こそこの本を読んでほしい。きっとあなたの心を、この熊と鮭が作る甘味が温めてくれるはずだから。「完璧ってなんでしょうね。自分が納得できたらそれでＯＫなんじゃないですか。」飾らない真っ直ぐな言葉が胸に沁みる。そしてこの本なんとレシピ付き。読んだ後は甘い物を食べちゃおう。ダイエットなんて明日からだ。"
  },
  {
    "id": "junior-25",
    "name": "星野煌之介",
    "year": "駒込<span class='inline-bl'>中学校３年生</span>",
    "prefecture": "東京都",
    "booktitle": "世界でいちばん素敵な元素の教室",
    "booktitle_modal": "世界でいちばん素敵な元素の教室",
    "note01": "栗山恭直、東京エレクトロン／監修<br>森山晋平／文",
    "note02": "三才ブックス",
    "opponent": "全ての人",
    "opponent_modal": "全ての人",
    "txt": "　全てのものは元素で出来ているのですが、この本は、出版時点での全元素について説明しています。生活との繋がりや、面白くためになるコラム、充実したＱ＆Ａもあります。そしてなんといっても、一つの元素について、一つ以上関連する美しい写真を載せているので、元素について楽しく知ることが出来ます。「恐竜絶滅のヒントが、この元素にある。」これはイリジウムのキャッチコピーなのですが、気になりますよね。このような秀逸なキャッチコピーが沢山あるので、元素について興味を持つことが出来ます。<br>　この素晴らしい本を通じて、私は元素を知ることの楽しさを全ての人に知ってもらいたい。そう心から思います。"
  },
  {
    "id": "junior-26",
    "name": "巻田結菜",
    "year": "東京女学館<span class='inline-bl'>中学校１年生</span>",
    "prefecture": "東京都",
    "booktitle": "５分後に呪われるラスト",
    "booktitle_modal": "５分後に呪われるラスト",
    "note01": "エブリスタ／編",
    "note02": "河出書房新社",
    "opponent": "幽霊",
    "opponent_modal": "幽霊",
    "txt": "　幽霊さん、あなたはいつも人間を怖がらせていますよね？　そんな幽霊さんは、怖い思いをしたことはありますか？　私は「怖がらせる側」の幽霊がこの本を読み、怖がることの面白さを知ってもらいたいのです。この本は短編集になっていて、どのお話も背筋がゾクゾク、そして、ワクワクするものばかりです。挿し絵は一つもありません。だからこそ、想像を楽しませてくれる、素晴らしい本なのです。読めば読むほど恐ろしい想像が広がります。それでも、ページをめくる手が止まらないのは「怖いもの見たさ」という好奇心が湧くからです。さあ、幽霊さん、この本を読んで怖がることの面白さを存分に味わってください。"
  },
  {
    "id": "junior-27",
    "name": "南理紗",
    "year": "恵泉女学園<span class='inline-bl'>中学校２年生</span>",
    "prefecture": "東京都",
    "booktitle": "世界でいちばんかなしい花 : それは青森の女子高生たちがペット殺処分ゼロを目指して咲かせた花",
    "booktitle_modal": "世界でいちばんかなしい花",
    "note01": "瀧晴巳／著",
    "note02": "ギャンビット パブリッシング",
    "opponent": "ペットを飼おうとしている人",
    "opponent_modal": "ペットを飼おうとしている人",
    "txt": "　この本は、青森の女子高生たちがペットの殺処分を無くすために行動する話です。<br>　今も日本では人間の勝手で捨てられて、殺処分される動物がたくさんいるのは知っていると思います。殺処分はボタンを押すと行われます。そのボタンを押すのは飼っていたペットを捨てた人ではありません。その仕事をやらなければいけない人がいるのです。この本のタイトルが『世界でいちばんかなしい花』なのは読んでいくと分かると思います。<br>　私の家にはもと保護猫のゆずがいます。ゆずが幸せな一生を過ごせるようにしたいです。そして、今からペットを迎える人はこの本を読むことで生命の重さを考えるきっかけにしてほしいです。"
  },
  {
    "id": "junior-28",
    "name": "山中汐音",
    "year": "恵泉女学園<span class='inline-bl'>中学校２年生</span>",
    "prefecture": "東京都",
    "booktitle": "臨床の砦",
    "booktitle_modal": "臨床の砦",
    "note01": "夏川草介／著",
    "note02": "小学館文庫",
    "opponent": "未来の自分",
    "opponent_modal": "未来の自分",
    "txt": "　最前線で診療にあたっていた医師の「正解であったとは言えませんが最善であったのは確かです」この文章を読んだ時、常に最善である事は何かを考えながら行動したいと思いました。これまで私は何に対しても深く考えないで周りに合わせたり、分からない問題は解答をみる、自分の最善の答えを出す事をしていなかったと情けなく思いました。<br>　コロナ対応をする医療従事者は私の問題とは桁違いの難しい問題に対して最善の考えを導き行動しています。感謝と尊敬をすると共に、私はこれから正解ではないとしても自分の中での最善の答えを導き、行動したいと考えます。今あなたは最善の答えを導いて行動することはできていますか？"
  },
  {
    "id": "junior-29",
    "name": "金子恭弥",
    "year": "平塚市立春日野<span class='inline-bl'>中学校２年生</span>",
    "prefecture": "神奈川県",
    "booktitle": "学校では教えてくれない大切なこと(1) 整理整頓",
    "booktitle_modal": "学校では教えてくれない大切なこと（１） 整理整頓",
    "note01": "旺文社／編<br>入江久絵／マンガ・イラスト",
    "note02": "旺文社",
    "opponent": "整理整頓が苦手な人へ",
    "opponent_modal": "整理整頓が苦手な人へ",
    "txt": "「もーう!!」何があったのでしょう。そう、学校のロッカーから教科書を取り出すと、ドバドバー。なんとなだれの様に教科書やノートが落ちました。にたような経験をした人はいるのではないでしょうか。こんなようなズバリ、整理整頓が苦手な人に超オススメなのが、この本です。この本は文がずらずら並ぶことはなく、イラストを使い、まるで今そこで整理整頓をしているかのようにスラスラ読めてしまうのです。この本を見て母と協力して同じようにやった結果、あら不思議。あんな汚かった机が、今までにない綺麗さ!!　このように自分もできるか半信半疑でやりましたが、しっかりと整理整頓ができました。ぜひ読んでみて下さい。"
  },
  {
    "id": "junior-30",
    "name": "佐々木心音",
    "year": "清泉女学院<span class='inline-bl'>中学校３年生</span>",
    "prefecture": "神奈川県",
    "booktitle": "明暗",
    "booktitle_modal": "明暗",
    "note01": "夏目漱石／著",
    "note02": "新潮文庫",
    "opponent": "作家の卵の友人",
    "opponent_modal": "作家の卵の友人",
    "txt": "　私からあなたにお願いがあります。『明暗』を完成させてほしいのです。この本は夏目漱石の晩年のそして未完の小説です。「六百ページもあるこの本を読んで続きを書くの!?」と思ったでしょう。しかし読み始めるときっとあなたも続きが気になり出します。漱石の時代の古い言葉遣いが多用されているにもかかわらず、ページをめくる手が止まらなくなるのです。読み終わってしまうこと、そして完結していないことを残念に思う気持ちが募ってくるはずです。人間のエゴイズムという痛いテーマを扱っているにもかかわらず、読んでいてそこはかとなく流れる空気が心地よいのです。ですから未来の作家の、あなたの『明暗』の続きを書いて下さい。"
  },
  {
    "id": "junior-31",
    "name": "指田悠征",
    "year": "多摩大学目黒<span class='inline-bl'>中学校２年生</span>",
    "prefecture": "神奈川県",
    "booktitle": "夢をかなえるゾウ１",
    "booktitle_modal": "夢をかなえるゾウ１",
    "note01": "水野敬也／著",
    "note02": "文響社",
    "opponent": "祖父",
    "opponent_modal": "祖父",
    "txt": "　この夏休みに僕が読んで面白かった『夢をかなえるゾウ』という本があります。自分を変えたいと願う主人公の前にゾウが現れ、色々な教えを受け成長していく内容。一番大事な教えは「小さな事でも考えるだけでなく、行動することで人は変わる」というもの。分かりやすくて腑に落ちました。<br>　実は僕の祖父は年令と病気のせいで殆ど動かない生活をしています。身体が弱ってしまうので、家族みんなで少しでも歩くよう話していますが、面倒くさいと言ってうまくいきません。<br>　祖父にこの本を紹介し「将来、海外旅行に連れて行く」という約束を実現するために散歩を続けてもらえるようになったら嬉しいなと思っています。"
  },
  {
    "id": "junior-32",
    "name": "窪田葵",
    "year": "射水市立新湊南部<span class='inline-bl'>中学校２年生</span>",
    "prefecture": "富山県",
    "booktitle": "星を掬う",
    "booktitle_modal": "星を掬う",
    "note01": "町田そのこ／著",
    "note02": "中央公論新社",
    "opponent": "お母さんがうるさいと感じるあなたへ",
    "opponent_modal": "お母さんがうるさいと感じるあなたへ",
    "txt": "　私は、お母さんが大好きです。だけど大嫌いです。皆、そんな思いはありませんか。テストの点数が悪いと怒り、日々勉強していないからだと私に言います。その様な事がある度に「私の気持ちの何が分かるの。もう親なんて子供の頃の記憶なんて忘れてしまっている。」そう思います。だけど、お母さんは、いつも私を優先的に考えてくれたり、朝は長い髪を縛ってくれたりします。<br>　主人公の千鶴さんの母の口ぐせである「大丈夫。あんたは、できる子だから。」私の母もよく言います。<br>　お母さんにだって言いたい事がたくさんある。親子だからこそ我慢している。お母さんがうるさいと感じるあなたへ、この本をおすすめします。"
  },
  {
    "id": "junior-33",
    "name": "上坂粋生",
    "year": "高岡市立高岡西部<span class='inline-bl'>中学校２年生</span>",
    "prefecture": "富山県",
    "booktitle": "あんなに あんなに",
    "booktitle_modal": "あんなに あんなに",
    "note01": "ヨシタケシンスケ／著",
    "note02": "ポプラ社",
    "opponent": "反抗期真っただ中のあなたとそのお母さんたちへ",
    "opponent_modal": "反抗期真っただ中のあなたとそのお母さんたちへ",
    "txt": "　ガミガミうるさい母さんなんて大嫌い。でも、この本を読んだら僕の「あんなにあんなに」を思い出してしまった。僕がウルトラマンの人形を一列に並べたいのにバタバタ倒れてぎゃん泣きしたら、ママが必死に人形の足にセロテープをベタベタ貼って床に並べてくれたな。その後パパに「歩く所がない！」ってママ叱られてたっけ。あんなにワガママいっぱい言ったけど、ママはいつも笑ってた。こんなにこんなに自分は愛情たっぷり育ててもらってたんだなって思い出したよ。反抗期真っただ中のあなた。なんでこんな子になっちゃったのよって嘆いているお母さん方。この本で、泣いて笑って過ごした親子のあったかい時間にタイムスリップして下さい！"
  },
  {
    "id": "junior-34",
    "name": "向山陽菜",
    "year": "松本秀峰<span class='inline-bl'>中等教育学校３年生</span>",
    "prefecture": "長野県",
    "booktitle": "百まいのドレス",
    "booktitle_modal": "百まいのドレス",
    "note01": "エレナー・エスティス／作<br>ルイス・スロボドキン／絵<br>石井桃子／訳",
    "note02": "岩波書店",
    "opponent": "二人の小さないとこ",
    "opponent_modal": "二人の小さないとこ",
    "txt": "　色鮮やかなドレスと少女が描かれた空色の表紙がまず、本を手にとる人の目に飛び込んでくる。私は小学生の頃から、この本のきれいな色使いの挿絵が大好きだ。そして、この本の魅力は絵だけではなく、物語の美しさにもある。<br>　この本では、人種差別、貧富の差、いじめという社会問題が優しく描かれている。自分がからかっていた少女が転校したことで、自分の行動を考え直していく少女の姿の美しさに、心を動かされる。心情描写も繊細で豊かだ。<br>　まだ小さないとこ達が小学校中学年頃になったら、読んでもらいたい。この本から、多くの人の個性を認め合い、誰もが自分の良さを発揮できる、優しく明るい世界を作る方法を知ることができる。"
  },
  {
    "id": "junior-35",
    "name": "山本天音",
    "year": "長野市立篠ノ井東<span class='inline-bl'>中学校１年生</span>",
    "prefecture": "長野県",
    "booktitle": "ぼくのまつり縫い　手芸男子は好きっていえない",
    "booktitle_modal": "ぼくのまつり縫い 手芸男子は好きっていえない",
    "note01": "神戸遥真／作<br>井田千秋／絵",
    "note02": "偕成社",
    "opponent": "妹",
    "opponent_modal": "妹",
    "txt": "　この本は、針宮優人という主人公が手芸好きであることを正直に言って成長していくお話だよ。<br>　私があなたにこの本をすすめた理由は、あなたが優しすぎるからだよ。何かを選んだりするときは「先、いいよ。」とか言ってゆずってくれているよね。優しいのは良いことだと思う。だけど一度きりの人生なんだし思っていることは素直に言ってほしい。言葉にするのは大切なことだよ。思っていることを相手に伝えなければあなたの気持ちは誰にも分からない。あなたの気持ち、教えてほしい。<br>　だからこの本を読んでみてほしいなって思ったんだ。私はあなたの気持ちを聞きたい。"
  },
  {
    "id": "junior-36",
    "name": "小田垣理子",
    "year": "川辺町立川辺<span class='inline-bl'>中学校２年生</span>",
    "prefecture": "岐阜県",
    "booktitle": "7.5グラムの奇跡",
    "booktitle_modal": "７・５グラムの奇跡",
    "note01": "砥上裕將／著",
    "note02": "講談社",
    "opponent": "祖母",
    "opponent_modal": "祖母",
    "txt": "「目とは今この瞬間を捉え、未来を探すための器官だ。」この文章が印象的だった。<br>　私の祖母はあまり目が良くない。何度も手術を受け、今でも目薬が手放せない。新人視能訓練士の野宮が勤める眼科医院にも目の悩みを抱える人がやってくる。視覚障害をもつ女の子、カラコンを使い続ける女性、緑内障を患う喫茶店のオーナー…。野宮は遠回りしながら一人一人の患者と向き合い、悩みを解決していく。<br>　祖母もこの本を読めば目の本質に気付き、未来に希望を持ってくれるだろうか。私に見えることの奇跡を教えてくれたこの本を、見えることの尊さを誰よりも知っている祖母にすすめたい。"
  },
  {
    "id": "junior-37",
    "name": "岡田美結",
    "year": "浜松市立江南<span class='inline-bl'>中学校１年生</span>",
    "prefecture": "静岡県",
    "booktitle": "温室デイズ",
    "booktitle_modal": "温室デイズ",
    "note01": "瀬尾まいこ／著",
    "note02": "角川文庫",
    "opponent": "人の心をふんでる人へ",
    "opponent_modal": "人の心をふんでる人へ",
    "txt": "　誰かを傷つけたときあなたはどうしますか。もし人を傷つけているのなら今いじめられている人の立場を想像してみてください。もし想像が難しいのならこの本を読んでみてください。この本はもしかしたらいじめをしたあなたの行ったことが入った日記みたいですよ。変わるなら今ここです。もう傷つけるのは嫌だ、その思いが届いたのなら人の心をふんでないで今すぐその人の痛みをとってあげてください。人が嫌がることはしないでみんながあなたを認めてくれる人になりましょう。この本を読んだら心が涼しくなります。なぜかと言うともやもやがとれるからです。この本を読んで今目の前にある不幸を上から塗ってみましょう。幸せの第一章です。"
  },
  {
    "id": "junior-38",
    "name": "河合一馬",
    "year": "京都市立洛北<span class='inline-bl'>中学校１年生</span>",
    "prefecture": "京都府",
    "booktitle": "よだかの片想い",
    "booktitle_modal": "よだかの片想い",
    "note01": "島本理生／著",
    "note02": "集英社文庫",
    "opponent": "コンプレックスをかかえている人へ",
    "opponent_modal": "コンプレックスをかかえている人へ",
    "txt": "　僕は生まれつき小耳症という病気のため右耳がなく聞こえません。この本は僕に自信をくれました。<br>　主人公のアイコも、生まれつき顔にアザがあり、まわりからの「かわいそう」という無自覚に同情する他人の優越感を呪い、アザを隠して生きていました。でも、恋をきっかけにアザを治そうと思った時、今までこのアザがあったからこそ、自分を受け入れてくれる信頼できる人を見分けることが出来たのだと気付いたのです。<br>　どんなコンプレックスも自分を形成しているもので、それを受け入れてくれる人を信じること。そして、そのままの自分を愛することが出来るようになるための一歩としてこの本を読んでみて下さい。"
  },
  {
    "id": "junior-39",
    "name": "川勝小春",
    "year": "京都市立洛北<span class='inline-bl'>中学校１年生</span>",
    "prefecture": "京都府",
    "booktitle": "世界でいちばん貧しい大統領からきみへ",
    "booktitle_modal": "世界でいちばん貧しい大統領からきみへ",
    "note01": "くさばよしみ／編",
    "note02": "汐文社",
    "opponent": "世界中の人へ",
    "opponent_modal": "世界中の人へ",
    "txt": "　毛玉だらけの服を着て、サンダルをはき、三部屋しかない家に住んでいる。そんな大統領を知っていますか。元ウルグアイ大統領、ホセ・ムヒカさんです。<br>　私はよく物を欲しがります。あれが欲しい、これが欲しい…しかし、この本の言葉を読んで、心に変化がありました。ムヒカさんは「いまあるもので満足している」のです。今私の周りにあるものは、物であったり人のやさしさであったりします。今までの、その繋がりがあるから、今の自分がある。何かを欲しがるのではなく、今あるものに感謝する事が大切。その思いが私の心の変化です。<br>　ぜひ、この本を読んで、自分の心の変化を感じてみてください。"
  },
  {
    "id": "junior-40",
    "name": "清水陽",
    "year": "京都市立深草<span class='inline-bl'>中学校２年生</span>",
    "prefecture": "京都府",
    "booktitle": "夢の病院をつくろう　チャイルド・ケモ・ハウスができるまで",
    "booktitle_modal": "夢の病院をつくろう",
    "note01": "ＮＰＯ法人チャイルド・ケモ・ハウス／著",
    "note02": "ポプラ社",
    "opponent": "医療関係者の方々",
    "opponent_modal": "医療関係者の方々",
    "txt": "　私が読んだこの本は小児がんの子どもやその家族が安心してみんなですごせる「家のような病院」を作った人の話です。この本を読んで私は作者の「家のような病院」を作るということにとても共感しました。私の妹は心臓に病気を持っていて生まれてから一年ほど入院していました。その時五歳だった私は一年ずっと家族離ればなれで過ごし、妹の顔をみたのは生まれて手術室に運ばれる一瞬でした。それから妹が退院し、一緒にすごせる時間が増えたけど入退院をくりかえす度に泣いていました。その時強く思ったのは病室に入って一緒にすごしたい。それがこの本の夢の病院です。どうか患者も家族も一緒にすごせる病院が増え笑顔が多くなりますように。"
  },
  {
    "id": "junior-41",
    "name": "中野潤之介",
    "year": "京都市立洛北<span class='inline-bl'>中学校２年生</span>",
    "prefecture": "京都府",
    "booktitle": "おばけのケーキ屋さん",
    "booktitle_modal": "おばけのケーキ屋さん",
    "note01": "SAKAE／絵・文",
    "note02": "マイクロマガジン社",
    "opponent": "大切な人がいる人へ",
    "opponent_modal": "大切な人がいる人へ",
    "txt": "　私はこの本を図書館で読むべきではなかった。本を閉じた瞬間、思わず泣いてしまいそうになったからだ。この物語はある町のケーキ屋さんに女の子が訪れる場面からはじまる。これだけだと私が泣きそうになることはなかったし、この本をすすめようとしなかっただろう。しかし、読み進めていくうちにみるみる視界がぼやけていくのだ。おばけの店主は何者なのか。「パパのつくるケーキと同じくらい」。この言葉の意味が分かったとき、きっと誰もが涙ぐむだろう。そしてぜひ、あなたと大切な人と一緒にこの本を読んでほしい。読み終えたとき、お互いのことをもっと大切に思えるはずだから。"
  },
  {
    "id": "junior-42",
    "name": "西村柚菜",
    "year": "京都市立下京<span class='inline-bl'>中学校２年生</span>",
    "prefecture": "京都府",
    "booktitle": "僕は君たちに武器を配りたい<br>エッセンシャル版",
    "booktitle_modal": "僕は君たちに武器を配りたい",
    "note01": "瀧本哲史／著",
    "note02": "講談社文庫",
    "opponent": "自分だけの武器がほしい人",
    "opponent_modal": "自分だけの武器がほしい人",
    "txt": "「勉強できてもコモディティ」この言葉は私にとって衝撃的だった。コモディティとは個性のないもののことである。コモディティ化した人材に求められるのは「どれだけ安い給料で働けるか」だ。つまり、給料は下がる。それを避けるには「スペシャリティ」にならなければいけない。替えのきかない、唯一の人材になる必要があるのだ。たとえ勉強ができても将来が安定するわけではない。「勉強できてもコモディティ」になってはいけないのだ。この本は私に「スペシャリティ」になることがいかに大切か、どんな武器が必要なのかを教えてくれた。自分だけの「武器」を身につけたい人にこの本をすすめたい。"
  },
  {
    "id": "junior-43",
    "name": "藤井千紘",
    "year": "京都市立洛北<span class='inline-bl'>中学校２年生</span>",
    "prefecture": "京都府",
    "booktitle": "わたしのげぼく",
    "booktitle_modal": "わたしのげぼく",
    "note01": "上野そら／著<br>くまくら珠美／作画",
    "note02": "アルファポリス",
    "opponent": "人類が一番えらいと思っている人",
    "opponent_modal": "人類が一番えらいと思っている人",
    "txt": "　人類が世界で一番えらいと思っているそこのアナタ、それは大きな間違いです。高度な技術力で栄えてきた我々人類の上をゆくその存在とは、神でも、地球外生命体でもない…そう、猫なのです。<br><br><span class='indent'>「ほんとうに、しかたのないやつだな。わたしの下僕は。」</span><br><br>　これは、私が推す本、上野そらさん作『わたしのげぼく』の主人公である猫「わたし」の言葉。この本は、そんなナルシスト猫と「わたし」の召使い的な存在のどんくさい飼い主「げぼく」の心温まる物語です。あ、今アナタ「たかが猫が…」とか思いました？　残念です。しかし、この本を読み終わるころには、きっとアナタも神も地球外生命体も、涙を流して猫の前に平伏していることでしょう。"
  },
  {
    "id": "junior-44",
    "name": "森園心結",
    "year": "京都市立洛北<span class='inline-bl'>中学校１年生</span>",
    "prefecture": "京都府",
    "booktitle": "兎の眼",
    "booktitle_modal": "兎の眼",
    "note01": "灰谷健次郎／著<br>てぬぐい柄（株式会社かまわぬ）／装画",
    "note02": "角川文庫",
    "opponent": "将来の自分へ",
    "opponent_modal": "将来の自分へ",
    "txt": "　今、私には夢があります。それは、小学校の教師になることです。将来の自分はこの夢を叶えられていますか。この本は、新人の女性教師が、子供達との交流の中で本当の教育とは何かを学んでいく物語です。<br>　私は、新人の教師小谷先生の奮闘する姿が印象に残りました。さまざまな心を持った子供達に対し、自分なりに思いを伝えて寄り添い、関係を築いていく小谷先生に私は憧れました。この本は、教育の力で子供達の心を動かすこともできるということを教えてくれます。<br>　将来、夢が叶っているのならばぜひ、この本を思い出し、小谷先生の教師像を再確認することで何か発見があるかもしれません。改めてこの本を読んでみてください。"
  },
  {
    "id": "junior-45",
    "name": "寺田佳史",
    "year": "大阪星光学院<span class='inline-bl'>中学校２年生</span>",
    "prefecture": "大阪府",
    "booktitle": "今森光彦 昆虫記",
    "booktitle_modal": "今森光彦 昆虫記",
    "note01": "今森光彦／写真・文",
    "note02": "福音館書店",
    "opponent": "昆虫を愛する人",
    "opponent_modal": "昆虫を愛する人",
    "txt": "　この本は僕が２歳の頃から読んでいる本です。一番の魅力は、写真一枚一枚から著者の今森さんの昆虫愛が伝わってきているという点です。普段、図鑑に出てくるような昆虫とは一味違う、まるで昆虫達の世界に入ったように感じさせる写真は唯一無二だと思います。<br>　特に、この本の中で好きな写真は、生まれたてのキリギリスと小さな芽が写ったものです。新たな生命の息吹を感じさせられます。僕も何度かセミの羽化の瞬間に立ち会ったことがありますが、その度に感動させられます。昆虫達の生きようとする姿は人の心を打つのだと思います。<br>　今では、日本の昆虫の１割が絶滅に瀕しています。この本を通じ昆虫への理解を深めてほしいです。"
  },
  {
    "id": "junior-46",
    "name": "藤原芽衣",
    "year": "清風南海<span class='inline-bl'>中学校１年生</span>",
    "prefecture": "大阪府",
    "booktitle": "一〇五度",
    "booktitle_modal": "一〇五度",
    "note01": "佐藤まどか／著",
    "note02": "あすなろ書房",
    "opponent": "人間関係で悩んでいる人",
    "opponent_modal": "人間関係で悩んでいる人",
    "txt": "「一〇五度。」何の角度か分かりますか。これがこの本のタイトルです。題名にひかれて手に取ったその本は、意外にも人間関係について考えさせられる物語でした。<br>「思いきりだれかに寄りかかると、相手が支えきれなくなっちまう。ちょいと寄りかかる程度がいいんだ。」そんなセリフがあります。一〇五度とはイスの背もたれの角度です。主人公の祖父に言わせると「軽く寄りかかるのにいいあんばいだ。人間関係だってそうだぞ。」だそうです。寄りかかるのは、少しだけ。その、「少しだけ」が心地いいのです。<br>　あなたの角度は何度ですか。"
  },
  {
    "id": "junior-47",
    "name": "宮尾世理",
    "year": "吹田市立第三<span class='inline-bl'>中学校２年生</span>",
    "prefecture": "大阪府",
    "booktitle": "新 13歳のハローワーク",
    "booktitle_modal": "新 13歳のハローワーク",
    "note01": "村上龍／著<br>はまのゆか／絵<br>",
    "note02": "幻冬舎",
    "opponent": "好きなことが無くて悩んでいる人",
    "opponent_modal": "好きなことが無くて悩んでいる人",
    "txt": "　私は、この本をすすめます。この本は職業についての本ですが、私はそうは思いません。私は、この本を出会いの本だと思っています。自分に合った職業、自分の好きな職業につけるのもたくさんの出会いがあってこそだと思います。<br>　だから、職業や好きなことは探すのではなく出会うということなんです。無理に見つけようと思うのではなく、「どこかに自分が好きなことがきっとあるはずだ。」と強く思うことが大切です。いつもそう思っていたら普通に過ごしていても「これ好きかも。」とふと思えるようになれると思います。<br>　この本は、私にこの世にはたくさんの職業があるということはもちろん好きなこととの出会い方まで教えてくれました。<br>"
  },
  {
    "id": "junior-48",
    "name": "鈴木湊",
    "year": "神戸女学院<span class='inline-bl'>中学部１年生</span>",
    "prefecture": "兵庫県",
    "booktitle": "夜と霧　新版",
    "booktitle_modal": "夜と霧",
    "note01": "ヴィクトール・E・フランクル／著<br>池田香代子／訳",
    "note02": "みすず書房",
    "opponent": "苦しんでいる人へ",
    "opponent_modal": "苦しんでいる人へ",
    "txt": "　この『夜と霧』という本は、第二次世界大戦の際、ナチスの強制収容所に収容された精神科医ヴィクトール・Ｅ・フランクルが、収容所での自身の過酷な体験を綴ったものだ。<br>　残酷な場面の多いこの本は、人々にどのように受け止められているのだろうか。悲劇的なだけの物語？　いいや、むしろ感動的な作品として、世界中で読み継がれている。それは何故か。その理由は、本を読めばすぐに分かる。この本には、著者を含め、人間としての尊厳を踏みにじられながらも生き続けようとする人が大勢出てくる。そのような人々の生き様が、今も読者の心を?んで離さないのだろう。あなたにも、この本を読んで勇気づけられてもらいたい。"
  },
  {
    "id": "junior-49",
    "name": "谷本花連",
    "year": "和歌山大学教育学部附属<span class='inline-bl'>中学校３年生</span>",
    "prefecture": "和歌山県",
    "booktitle": "アルジャーノンに花束を〔新版〕",
    "booktitle_modal": "アルジャーノンに花束を",
    "note01": "ダニエル・キイス／著<br>小尾芙佐／訳",
    "note02": "ハヤカワ文庫NV",
    "opponent": "幸せとは何か考えている人",
    "opponent_modal": "幸せとは何か考えている人",
    "txt": "　私は今年、受験生です。進路や将来について考えることが多くなりました。世間的には将来のことを考えると、偏差値の高い学校に進学することが良いことだとされています。でもこの本を読んで自分にとって大切なことは何なのか、立ち止まって考えることができました。主人公チャーリイのＩＱが子どもなみから天才の値にまで高くなりましたが、それだけで幸せになれたのでしょうか。チャーリイの心情の変化とともに、幸せとは何かを考えさせられました。幸せの価値観は人によって違いますが、私は人との関わりを大事にすることの大切さに気づかされました。特に最後の一文は心に染みるのでぜひ読んでみてください。"
  },
  {
    "id": "junior-50",
    "name": "石井碧",
    "year": "福山市立済美<span class='inline-bl'>中学校３年生</span>",
    "prefecture": "広島県",
    "booktitle": "かがみの孤城<br>(上下巻)",
    "booktitle_modal": "かがみの孤城",
    "note01": "辻村深月／著",
    "note02": "ポプラ文庫",
    "opponent": "学校に行けてない人、またそんな友達がいる人へ",
    "opponent_modal": "学校に行けてない人、またそんな友達がいる人へ",
    "txt": "　読んでほしい。学校に行けてない人、来てほしい友達がいる人へ。<br>　私には、小学生の頃に不登校になりかけていた親友がいる。急に教室にいる回数が少なくなり、保健室で過ごす日が多くなっていたから、私は休み時間になると毎回授業を受けようと誘った。中学校でその子は普通に授業を受けている。小学生の自分の行動が正しかったか、なぜ親友が教室に行けなかったかは今でも分からない。でも、この本を読んであの自分の行動は親友の支えに少しはなっていたのでないかと思える。そして、学校に行くのにどれだけ勇気がいるのかという事も理解できた。この本を読む事で、改めて自分たちにとっての学校という存在の大きさを知れた。"
  },
  {
    "id": "junior-51",
    "name": "井原悠太",
    "year": "修道<span class='inline-bl'>中学校２年生</span>",
    "prefecture": "広島県",
    "booktitle": "青い鳥",
    "booktitle_modal": "青い鳥",
    "note01": "重松清／著",
    "note02": "新潮文庫",
    "opponent": "悩みに苦しむ中学生",
    "opponent_modal": "悩みに苦しむ中学生",
    "txt": "　いじめ、親の自殺、友人関係に悩む思春期の中学生八人それぞれの寂しさに寄り添ってくれる吃音の村内先生が「本当に大切な事」を教えてくれる物語。この本を読んで、どうして作者の重松清さんは中学生の気持ちがこんなにわかるんだろうと思った。自分も中学生で思春期特有のイライラやもやもやを抱えているので、同じ様な登場人物が、吃音で普段は言葉がつっかえてしまう村内先生に導かれ自分の答えを見つけて前に進んでいく様子は一話ずつ読む度に心がすっきりする感覚になる。思春期特有の色々な悩みや苦しみを抱えている自分と同じような中学生に是非、読んで欲しいと思う。"
  },
  {
    "id": "junior-52",
    "name": "四辻佳穂",
    "year": "盈進<span class='inline-bl'>中学校１年生</span>",
    "prefecture": "広島県",
    "booktitle": "はてしない物語<br>(上下巻)",
    "booktitle_modal": "はてしない物語",
    "note01": "ミヒャエル・エンデ／作<br>上田真而子、佐藤真理子／訳<br>ロスヴィタ・クヴァートフリーク／装画",
    "note02": "岩波少年文庫",
    "opponent": "本心をうまく伝えることができない人へ",
    "opponent_modal": "本心をうまく伝えることが<span class='inline-bl'>できない人へ</span>",
    "txt": "　あなたは本心をうまく伝えることができますか。もし伝えることができないのなら、この本がおすすめです。<br>　この本はバスチアンという、ひっこみじあんの少年が自分は何をしたいのかを本を読みながら考え見つけていくという物語です。<br>　私は、今年地元の小学校の友人達と別れ、私立中学校に入学しました。他の人と仲良くなりたい一心で本心を隠し、他人の意見を尊重してばかりでした。しかし、この本を読んで本当の自分と付き合うことの大切さを学ぶことができたと思います。<br>　自分の本心は何なのか、まだよく分からない。そんな人は、ぜひバスチアンと一緒に探してみてはどうですか。"
  },
  {
    "id": "junior-53",
    "name": "黒田芽衣咲",
    "year": "高松市立桜町<span class='inline-bl'>中学校１年生</span>",
    "prefecture": "香川県",
    "booktitle": "いい人ランキング",
    "booktitle_modal": "いい人ランキング",
    "note01": "吉野万理子／著",
    "note02": "あすなろ書房",
    "opponent": "断ることが苦手なあなたへ",
    "opponent_modal": "断ることが苦手なあなたへ",
    "txt": "　この本は、中学生の桃が「いい人ランキング」の投票でクラス一位に選ばれて、期待に応えるために、頑張って「いい人」でいようとした結果「都合のいい人」という扱いをされて、いじめられてしまう話です。<br>　私はこの本を読むまでは「いい人」とは、人の悪口を言わず、頼まれても何でも快く引き受けてくれる人だと思っていたけれど、この本を読んで「いい人」に対しての価値観が変わりました。何でも言う事を聞くのではなく、自分の中で正しいと思うことを信念を持ってやり通すことが大切です。<br>　この本を読んだら、あなたの中の何かが変わるかもしれません。読みやすい本なので、ぜひ読んでみてください。"
  },
  {
    "id": "junior-54",
    "name": "澤野広翔",
    "year": "高松市立桜町<span class='inline-bl'>中学校３年生</span>",
    "prefecture": "香川県",
    "booktitle": "112日間のママ",
    "booktitle_modal": "１１２日間のママ",
    "note01": "清水健／著",
    "note02": "小学館",
    "opponent": "大きな決断を目前にして悩んでいるすべての人達へ",
    "opponent_modal": "大きな決断を目前にして悩んでいるすべての人達へ",
    "txt": "　人は人生において大きな決断をしないといけないときがある。それがいかに重いことか、この本、『１１２日間のママ』を読んで実感した。著者である清水さんの妻、奈緒さんは妊娠直後に乳がんが発覚した。２人はどんな決断をするのか胸を痛めていると、「たったひとつの正解なんてない。」という一文が目に飛び込んできた。ハッとした。心に深く染み渡った。見つからない「正解」を求め、もがき苦しむ。それでも必死に考え、話し合い、相手を想い合う。それこそが大切であり、そうして絞り出した答えこそ、その人達にとっての「正解」なんだと気づいた。だから、きっと大丈夫。あなたが出した答えは未来につながるはずだから。"
  },
  {
    "id": "junior-55",
    "name": "長町そよか",
    "year": "高松市立桜町<span class='inline-bl'>中学校３年生</span>",
    "prefecture": "香川県",
    "booktitle": "朔と新",
    "booktitle_modal": "朔と新",
    "note01": "いとうみく／著",
    "note02": "講談社",
    "opponent": "また家族とケンカしてしまったあなたへ",
    "opponent_modal": "また家族とケンカしてしまった<span class='inline-bl'>あなたへ</span>",
    "txt": "　家族って嫌だなとか面倒くさいと思うこと、ありませんか。私はしょっちゅうあります。家族だからとか親だからと、何でも分かっているような態度をとられると、本当に腹が立ちます。この本の中でも「そうそう、その気持ち分かる」という場面がたくさんありました。だから、「家族は案外一番遠いのかもしれませんね」という、ブラインドマラソン（視覚障がいの方のマラソン）の伴走者の言葉が胸にストンと落ちました。私は、家族は一番分かり合える存在だという、一般的な考え方にしばられなくてもいいと思えるようになりました。この本を読んだら、あなたも心が軽くなると思います。今日も家族とケンカしてしまったあなたにおすすめしたい一冊です。"
  },
  {
    "id": "junior-56",
    "name": "マドン・ティリー",
    "year": "高知市立旭<span class='inline-bl'>中学校３年生</span>",
    "prefecture": "高知県",
    "booktitle": "沖縄のことを聞かせてください",
    "booktitle_modal": "沖縄のことを聞かせてください",
    "note01": "宮沢和史／著<br>",
    "note02": "双葉社",
    "opponent": "これから日本の未来を担う、若い方々",
    "opponent_modal": "これから日本の未来を担う、若い方々",
    "txt": "　沖縄戦の無惨さや理不尽さ、深き悲しみ、そして平和の願いが込められた宮沢和史さんの「島唄」。発表から三十年を機に宮沢さんが、交流してきた沖縄への思いを綴られ、また、沖縄にルーツを持つ方々との対談を通じ、さまざまな沖縄の顔を発見できる本を、出された。戦争を多様な視点で見つめたり、沖縄の在り方を考え直したり、平和の尊さを?み締める機会をくれた、この本。私に多くの「扉」を開かせ、ずっと守りたい、本当に大切な何かに気づかせてくれる、「鍵」になってくれた。新たな戦争が生まれ、世が揺らいでいる今こそ、平和について真剣に考えてみないか？　これから未来を担う仲間と共に、この「鍵」を手に未知の「扉」を開いてみたい。"
  },
  {
    "id": "junior-57",
    "name": "清武琳",
    "year": "東福岡自彊館<span class='inline-bl'>中学校２年生</span>",
    "prefecture": "福岡県",
    "booktitle": "もしも病院に犬がいたら　こども病院ではたらく犬、ベイリー",
    "booktitle_modal": "もしも病院に犬がいたら",
    "note01": "岩貞るみこ／作",
    "note02": "講談社青い鳥文庫",
    "opponent": "犬が好きなすべての人へ",
    "opponent_modal": "犬が好きなすべての人へ",
    "txt": "　ベイリーは日本初のファシリティドッグ。病院に勤務し、入院中の子どもたちに寄りそう。ベイリーのおかげで、たくさんの子どもがつらい闘病に耐え、笑顔を取り戻した。ぼくは９年間で17回の手術を受けた。だから、心の安らぎは、どんなに強い薬よりも効果があることを知っている。ぼくは一人でも多くの人に、この本を読んでベイリーのことを知ってほしい。ベイリーの存在が、病気の子どもたちにとって、どれほど貴重で、どれほど必要なのかを知ってほしい。もっと多くのこども病院で、ファシリティドッグが活動できるように応援してほしい。ぼくが大人になる頃には、日本中のこども病院で、ベイリーの後輩犬たちが活躍していてほしいと願っている。"
  },
  {
    "id": "junior-58",
    "name": "田島寧々",
    "year": "熊本市立出水<span class='inline-bl'>中学校３年生</span>",
    "prefecture": "熊本県",
    "booktitle": "残像に口紅を",
    "booktitle_modal": "残像に口紅を",
    "note01": "筒井康隆／著",
    "note02": "中公文庫",
    "opponent": "退屈な人",
    "opponent_modal": "退屈な人",
    "txt": "　もし世界から「あ」が失われたら、あなたも愛も消えてしまう。そんな世界を、どう過ごしますか。言語が消滅していくなかを生きる小説家を描いた一冊『残像に口紅を』は言葉について考えさせられます。<br>　この本は、物語が進むにつれて音が消え、それと共に、その音を使って表す対象物も世界から消えていく、という読者のメタな視点から楽しめる本です。音が減るにつれ言葉は遠回しに、読みづらくなっていきますが、消えたものはなんなのか推測しながら読めるのも魅力です。また、作者の語彙力にも感心させられます。普通の小説では味わえない、独特の感覚を、ぜひ読んで体感してみてください。"
  },
  {
    "id": "junior-59",
    "name": "中武源貴",
    "year": "宮崎県立宮崎西高等学校附属<span class='inline-bl'>中学校３年生</span>",
    "prefecture": "宮崎県",
    "booktitle": "山椒大夫・高瀬舟",
    "booktitle_modal": "山椒大夫・高瀬舟",
    "note01": "森鴎外／著",
    "note02": "新潮文庫",
    "opponent": "祖母",
    "opponent_modal": "祖母",
    "txt": "　僕は二年以上、祖母と会えていない。祖母は重い病気に罹り、専門の施設に入ったのだ。<br>　祖母とこの前電話をした。「どんなに大きくなったでしょう。」「会いたいな。」「将来が楽しみだ。」と、優しい声を滲ませながら、祖母は話した。僕はとても悲しくなった。「会えない」ということが、どれだけ寂しいことか、はっきりと分かったからだ。<br>　この本に収められている、『山椒大夫』は「会えない」ことを強いられた、ひとつの家族の物語だ。祖母は最初の方を読んで、心を痛めるかもしれない。でも、最後には、必ず、「希望を持ち続ける力」をもらえると思う。おばあちゃん、いつか、必ず、病気を治して、また元気に会おうね。"
  },
  {
    "id": "junior-60",
    "name": "阿部恵",
    "year": "鹿児島大学教育学部附属<span class='inline-bl'>中学校３年生</span>",
    "prefecture": "鹿児島県",
    "booktitle": "火車",
    "booktitle_modal": "火車",
    "note01": "宮部みゆき／著",
    "note02": "新潮文庫",
    "opponent": "未来の私",
    "opponent_modal": "未来の私",
    "txt": "　こんにちは、私。ひとり暮らしはどうですか？　好みのインテリアで揃えた部屋は快適ですか？　仕事はどう？　友達は？　恋人はいる？　きっと充実した毎日を過ごしていると思うけど、中学生の時読んだ本を覚えている？　そう、『火車』のこと。クレジットカードの使い過ぎで身を持ち崩した登場人物のエピソードを、心底「怖い」と思ったよね。『火車』が書かれた時より更に今はキャッシュレス決済が多様化している。未来の私の生活様式はどんな風になっているんだろう。でも、人とのつながりは今と変わらずあるよね。『火車』の主人公に優しい幼馴染みがいたように。未来の私にも、そんな人達の支えがあることを願って、あなたにエールを送るよ。"
  },
  {
    "id": "junior-61",
    "name": "髙木莉子",
    "year": "神村学園<span class='inline-bl'>中等部２年生</span>",
    "prefecture": "鹿児島県",
    "booktitle": "アインシュタイン　ひらめきの言葉",
    "booktitle_modal": "アインシュタイン ひらめきの言葉",
    "note01": "ディスカヴァー／編",
    "note02": "ディスカヴァー・トゥエンティワン",
    "opponent": "悩んでいる人へ",
    "opponent_modal": "悩んでいる人へ",
    "txt": "「生き方には２通りしかありません。奇跡はどこにもないという生き方と、すべてが奇跡だという生き方です。」この言葉は、物理学者アインシュタインが残した言葉です。<br>　私はどちらかというと、奇跡なんてないという考え方をしていました。どうしてかというとマイナスな思考をしていた為、毎日つまらないと考えることが多かったのです。しかし、すべてが奇跡だという考え方を知ってから、あたりまえにある日常にも奇跡はひそんでいるのではないかと考えるようになりました。<br>　そうすると、つまらなかった日々の中にも、何か思いがけないことがあるかもとワクワクします。<br>　何気ない日常に気づきをくれるこの本を、ぜひ読んでみて下さい。"
  },
  {
    "id": "junior-62",
    "name": "宮平友里香",
    "year": "西原町立西原東<span class='inline-bl'>中学校３年生</span>",
    "prefecture": "沖縄県",
    "booktitle": "長くつ下のピッピ",
    "booktitle_modal": "長くつ下のピッピ",
    "note01": "アストリッド・リンドグレーン／作<br>須藤出穂／訳",
    "note02": "集英社　※現在は流通していません。",
    "opponent": "大人になった私",
    "opponent_modal": "大人になった私",
    "txt": "　大人になった私へ、世界一強い女の子といえば、誰を思いつくだろう。私はおそらくピッピを思い出すだろう。初めてこの物語を読んだ時私はピッピと親友になりたくなった。天真爛漫なピッピはまさに私の憧れだ。大人になるにつれ、物事はこうあるべきだ、とか和を乱さずに生きることが大切だなどそんな面白味もないことばかりだと私は思っている。そんな時にピッピを思い出してほしい。興味を持った人や物にどんどん声をかけていき合わないと思ったら、「じゃ、さよなら」と明るく叫んでお別れ。からかわれた時だって他の人と違うところは全部自分の個性だと知っている。そんな枠組みにとらわれないピッピの最強っぷりが私は大好きだ。"
  }
      ];
  },
  function (e, t, n) {
    "use strict";
    Array.prototype.find ||
      Object.defineProperty(Array.prototype, "find", {
        value: function (e) {
          if (null == this) throw TypeError('"this" is null or not defined');
          var t = Object(this),
            n = t.length >>> 0;
          if ("function" != typeof e)
            throw TypeError("predicate must be a function");
          for (var r = arguments[1], o = 0; o < n; ) {
            var i = t[o];
            if (e.call(r, i, o, t)) return i;
            o++;
          }
        },
        configurable: !0,
        writable: !0,
      });
  },
]);
