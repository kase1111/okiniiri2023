!(function (e) {
  function n(o) {
    if (t[o]) return t[o].exports;
    var i = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  var t = {};
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, o) {
      n.o(e, t) ||
        Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: o,
        });
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (n.p = ""),
    n((n.s = 15));
})({
  15: function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var o = t(16);
    t.n(o);
  },
  16: function (e, n) {
    const t = { id: 688860150 },
      o = new Vimeo.Player("vimeo01_1", t),
      i = document.getElementById("vimeo01_1_btn");
    i.addEventListener(
      "click",
      function () {
        o.loadVideo(688860150).then(function () {
          (i.style.display = "none"), o.play();
        });
      },
      !1
    );
    const d = { id: 688863129 },
      l = new Vimeo.Player("vimeo01_2", d),
      c = document.getElementById("vimeo01_2_btn");
    c.addEventListener(
      "click",
      function () {
        l.loadVideo(688863129).then(function () {
          (c.style.display = "none"), l.play();
        });
      },
      !1
    );
    const y = { id: 688864285 },
      m = new Vimeo.Player("vimeo02_1", y),
      s = document.getElementById("vimeo02_1_btn");
    s.addEventListener(
      "click",
      function () {
        m.loadVideo(688864285).then(function () {
          (s.style.display = "none"), m.play();
        });
      },
      !1
    );
    const f = { id: 688865256 },
      v = new Vimeo.Player("vimeo02_2", f),
      _ = document.getElementById("vimeo02_2_btn");
    _.addEventListener(
      "click",
      function () {
        v.loadVideo(688865256).then(function () {
          (_.style.display = "none"), v.play();
        });
      },
      !1
    );
    const b = { id: 688866049 },
      P = new Vimeo.Player("vimeo03_1", b),
      g = document.getElementById("vimeo03_1_btn");
    g.addEventListener(
      "click",
      function () {
        P.loadVideo(688866049).then(function () {
          (g.style.display = "none"), P.play();
        });
      },
      !1
    );
    const h = { id: 688867291 },
      w = new Vimeo.Player("vimeo03_2", h),
      k = document.getElementById("vimeo03_2_btn");
    k.addEventListener(
      "click",
      function () {
        w.loadVideo(688867291).then(function () {
          (k.style.display = "none"), w.play();
        });
      },
      !1
    );
  },
});
