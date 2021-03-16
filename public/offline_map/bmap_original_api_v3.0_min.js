window.TILE_VERSION = {
  "ditu": {
    "normal": {
      "version": "088",
      "updateDate": "20200417"
    },
    "satellite": {
      "version": "009",
      "updateDate": "20200417"
    },
    "normalTraffic": {
      "version": "081",
      "updateDate": "20200417"
    },
    "satelliteTraffic": {
      "version": "083",
      "updateDate": "20200417"
    },
    "mapJS": {
      "version": "104",
      "updateDate": "20200417"
    },
    "satelliteStreet": {
      "version": "083",
      "updateDate": "20200417"
    },
    "earthVector": {
      "version": "001",
      "updateDate": "20200417"
    }
  },
  "webapp": {
    "high_normal": {
      "version": "001",
      "updateDate": "20200417"
    },
    "lower_normal": {
      "version": "002",
      "updateDate": "20200417"
    }
  },
  "api_for_mobile": {
    "vector": {
      "version": "002",
      "updateDate": "20200417"
    },
    "vectorIcon": {
      "version": "002",
      "updateDate": "20200417"
    }
  }
};
window.BMAP_AUTHENTIC_KEY = "nSxiPohfziUaCuONe4ViUP2N";
(function() {
    function ca(a) {
      throw a;
    }
    var j = void 0
      , o = !0
      , p = null
      , q = !1;
    function t() {
      return function() {}
    }
    function da(a) {
      return function(b) {
        this[a] = b
      }
    }
    function v(a) {
      return function() {
        return this[a]
      }
    }
    function ea(a) {
      return function() {
        return a
      }
    }
    var fa, ga = [];
    function ha(a) {
      return function() {
        return ga[a].apply(this, arguments)
      }
    }
    function ia(a, b) {
      return ga[a] = b
    }
    var ja, x = ja = x || {
      version: "1.3.4"
    };
    x.ba = "$BAIDU$";
    window[x.ba] = window[x.ba] || {};
    x.object = x.object || {};
    x.extend = x.object.extend = function(a, b) {
      for (var c in b)
        b.hasOwnProperty(c) && (a[c] = b[c]);
      return a
    }
    ;
    x.K = x.K || {};
    x.K.$ = function(a) {
      return "string" == typeof a || a instanceof String ? document.getElementById(a) : a && a.nodeName && (1 == a.nodeType || 9 == a.nodeType) ? a : p
    }
    ;
    x.$ = x.Ec = x.K.$;
    x.K.U = function(a) {
      a = x.K.$(a);
      if (a === p)
        return a;
      a.style.display = "none";
      return a
    }
    ;
    x.U = x.K.U;
    x.lang = x.lang || {};
    x.lang.tg = function(a) {
      return "[object String]" == Object.prototype.toString.call(a)
    }
    ;
    x.tg = x.lang.tg;
    x.K.Uj = function(a) {
      return x.lang.tg(a) ? document.getElementById(a) : a
    }
    ;
    x.Uj = x.K.Uj;
    x.K.getElementsByClassName = function(a, b) {
      var c;
      if (a.getElementsByClassName)
        c = a.getElementsByClassName(b);
      else {
        var d = a;
        d == p && (d = document);
        c = [];
        var d = d.getElementsByTagName("*"), e = d.length, f = RegExp("(^|\\s)" + b + "(\\s|$)"), g, i;
        for (i = g = 0; g < e; g++)
          f.test(d[g].className) && (c[i] = d[g],
            i++)
      }
      return c
    }
    ;
    x.getElementsByClassName = x.K.getElementsByClassName;
    x.K.contains = function(a, b) {
      var c = x.K.Uj
        , a = c(a)
        , b = c(b);
      return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
    }
    ;
    x.da = x.da || {};
    /msie (\d+\.\d)/i.test(navigator.userAgent) && (x.da.la = x.la = document.documentMode || +RegExp.$1);
    var ka = {
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      colspan: "colSpan",
      rowspan: "rowSpan",
      valign: "vAlign",
      usemap: "useMap",
      frameborder: "frameBorder"
    };
    8 > x.da.la ? (ka["for"] = "htmlFor",
      ka["class"] = "className") : (ka.htmlFor = "for",
      ka.className = "class");
    x.K.QG = ka;
    x.K.CF = function(a, b, c) {
      a = x.K.$(a);
      if (a === p)
        return a;
      if ("style" == b)
        a.style.cssText = c;
      else {
        b = x.K.QG[b] || b;
        a.setAttribute(b, c)
      }
      return a
    }
    ;
    x.CF = x.K.CF;
    x.K.DF = function(a, b) {
      a = x.K.$(a);
      if (a === p)
        return a;
      for (var c in b)
        x.K.CF(a, c, b[c]);
      return a
    }
    ;
    x.DF = x.K.DF;
    x.Yk = x.Yk || {};
    (function() {
        var a = RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
        x.Yk.trim = function(b) {
          return ("" + b).replace(a, "")
        }
      }
    )();
    x.trim = x.Yk.trim;
    x.Yk.$o = function(a, b) {
      var a = "" + a
        , c = Array.prototype.slice.call(arguments, 1)
        , d = Object.prototype.toString;
      if (c.length) {
        c = c.length == 1 ? b !== p && /\[object Array\]|\[object Object\]/.test(d.call(b)) ? b : c : c;
        return a.replace(/#\{(.+?)\}/g, function(a, b) {
          var g = c[b];
          "[object Function]" == d.call(g) && (g = g(b));
          return "undefined" == typeof g ? "" : g
        })
      }
      return a
    }
    ;
    x.$o = x.Yk.$o;
    x.K.Tb = function(a, b) {
      a = x.K.$(a);
      if (a === p)
        return a;
      for (var c = a.className.split(/\s+/), d = b.split(/\s+/), e, f = d.length, g, i = 0; i < f; ++i) {
        g = 0;
        for (e = c.length; g < e; ++g)
          if (c[g] == d[i]) {
            c.splice(g, 1);
            break
          }
      }
      a.className = c.join(" ");
      return a
    }
    ;
    x.Tb = x.K.Tb;
    x.K.Yx = function(a, b, c) {
      a = x.K.$(a);
      if (a === p)
        return a;
      var d;
      if (a.insertAdjacentHTML)
        a.insertAdjacentHTML(b, c);
      else {
        d = a.ownerDocument.createRange();
        b = b.toUpperCase();
        if (b == "AFTERBEGIN" || b == "BEFOREEND") {
          d.selectNodeContents(a);
          d.collapse(b == "AFTERBEGIN")
        } else {
          b = b == "BEFOREBEGIN";
          d[b ? "setStartBefore" : "setEndAfter"](a);
          d.collapse(b)
        }
        d.insertNode(d.createContextualFragment(c))
      }
      return a
    }
    ;
    x.Yx = x.K.Yx;
    x.K.show = function(a) {
      a = x.K.$(a);
      if (a === p)
        return a;
      a.style.display = "";
      return a
    }
    ;
    x.show = x.K.show;
    x.K.UD = function(a) {
      a = x.K.$(a);
      return a === p ? a : a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
    ;
    x.K.Ta = function(a, b) {
      a = x.K.$(a);
      if (a === p)
        return a;
      for (var c = b.split(/\s+/), d = a.className, e = " " + d + " ", f = 0, g = c.length; f < g; f++)
        e.indexOf(" " + c[f] + " ") < 0 && (d = d + (" " + c[f]));
      a.className = d;
      return a
    }
    ;
    x.Ta = x.K.Ta;
    x.K.RB = x.K.RB || {};
    x.K.Tl = x.K.Tl || [];
    x.K.Tl.filter = function(a, b, c) {
      for (var d = 0, e = x.K.Tl, f; f = e[d]; d++)
        if (f = f[c])
          b = f(a, b);
      return b
    }
    ;
    x.Yk.IO = function(a) {
      return a.indexOf("-") < 0 && a.indexOf("_") < 0 ? a : a.replace(/[-_][^-_]/g, function(a) {
        return a.charAt(1).toUpperCase()
      })
    }
    ;
    x.K.V_ = function(a) {
      x.K.mt(a, "expand") ? x.K.Tb(a, "expand") : x.K.Ta(a, "expand")
    }
    ;
    x.K.mt = function(a) {
      if (arguments.length <= 0 || typeof a === "function")
        return this;
      if (this.size() <= 0)
        return q;
      var a = a.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " "), b = a.split(" "), c;
      x.forEach(this, function(a) {
        for (var a = a.className, e = 0; e < b.length; e++)
          if (!~(" " + a + " ").indexOf(" " + b[e] + " ")) {
            c = q;
            return
          }
        c !== q && (c = o)
      });
      return c
    }
    ;
    x.K.xj = function(a, b) {
      var c = x.K
        , a = c.$(a);
      if (a === p)
        return a;
      var b = x.Yk.IO(b)
        , d = a.style[b];
      if (!d)
        var e = c.RB[b]
          , d = a.currentStyle || (x.da.la ? a.style : getComputedStyle(a, p))
          , d = e && e.get ? e.get(a, d) : d[e || b];
      if (e = c.Tl)
        d = e.filter(b, d, "get");
      return d
    }
    ;
    x.xj = x.K.xj;
    /opera\/(\d+\.\d)/i.test(navigator.userAgent) && (x.da.opera = +RegExp.$1);
    x.da.AM = /webkit/i.test(navigator.userAgent);
    x.da.DY = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
    x.da.GE = "CSS1Compat" == document.compatMode;
    x.K.ha = function(a) {
      a = x.K.$(a);
      if (a === p)
        return a;
      var b = x.K.UD(a)
        , c = x.da
        , d = x.K.xj;
      c.DY > 0 && b.getBoxObjectFor && d(a, "position");
      var e = {
        left: 0,
        top: 0
      }, f;
      if (a == (c.la && !c.GE ? b.body : b.documentElement))
        return e;
      if (a.getBoundingClientRect) {
        a = a.getBoundingClientRect();
        e.left = Math.floor(a.left) + Math.max(b.documentElement.scrollLeft, b.body.scrollLeft);
        e.top = Math.floor(a.top) + Math.max(b.documentElement.scrollTop, b.body.scrollTop);
        e.left = e.left - b.documentElement.clientLeft;
        e.top = e.top - b.documentElement.clientTop;
        a = b.body;
        b = parseInt(d(a, "borderLeftWidth"));
        d = parseInt(d(a, "borderTopWidth"));
        if (c.la && !c.GE) {
          e.left = e.left - (isNaN(b) ? 2 : b);
          e.top = e.top - (isNaN(d) ? 2 : d)
        }
      } else {
        f = a;
        do {
          e.left = e.left + f.offsetLeft;
          e.top = e.top + f.offsetTop;
          if (c.AM > 0 && d(f, "position") == "fixed") {
            e.left = e.left + b.body.scrollLeft;
            e.top = e.top + b.body.scrollTop;
            break
          }
          f = f.offsetParent
        } while (f && f != a);if (c.opera > 0 || c.AM > 0 && d(a, "position") == "absolute")
          e.top = e.top - b.body.offsetTop;
        for (f = a.offsetParent; f && f != b.body; ) {
          e.left = e.left - f.scrollLeft;
          if (!c.opera || f.tagName != "TR")
            e.top = e.top - f.scrollTop;
          f = f.offsetParent
        }
      }
      return e
    }
    ;
    /firefox\/(\d+\.\d)/i.test(navigator.userAgent) && (x.da.Te = +RegExp.$1);
    /BIDUBrowser/i.test(navigator.userAgent) && (x.da.M1 = o);
    var la = navigator.userAgent;
    /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(la) && !/chrome/i.test(la) && (x.da.wF = +(RegExp.$1 || RegExp.$2));
    /chrome\/(\d+\.\d)/i.test(navigator.userAgent) && (x.da.Rw = +RegExp.$1);
    x.jc = x.jc || {};
    x.jc.Eb = function(a, b) {
      var c, d, e = a.length;
      if ("function" == typeof b)
        for (d = 0; d < e; d++) {
          c = a[d];
          c = b.call(a, c, d);
          if (c === q)
            break
        }
      return a
    }
    ;
    x.Eb = x.jc.Eb;
    x.lang.ba = function() {
      return "TANGRAM__" + (window[x.ba]._counter++).toString(36)
    }
    ;
    window[x.ba]._counter = window[x.ba]._counter || 1;
    window[x.ba]._instances = window[x.ba]._instances || {};
    x.lang.Bt = function(a) {
      return "[object Function]" == Object.prototype.toString.call(a)
    }
    ;
    x.lang.Da = function(a) {
      this.ba = a || x.lang.ba();
      window[x.ba]._instances[this.ba] = this
    }
    ;
    window[x.ba]._instances = window[x.ba]._instances || {};
    x.lang.Da.prototype.li = ha(0);
    x.lang.Da.prototype.toString = function() {
      return "[object " + (this.NQ || "Object") + "]"
    }
    ;
    x.lang.oz = function(a, b) {
      this.type = a;
      this.returnValue = o;
      this.target = b || p;
      this.currentTarget = p
    }
    ;
    x.lang.Da.prototype.addEventListener = function(a, b, c) {
      if (x.lang.Bt(b)) {
        !b.jl && (b.jl = {});
        !this.Li && (this.Li = {});
        var d = this.Li, e;
        if (typeof c == "string" && c) {
          /[^\w\-]/.test(c) && ca("nonstandard key:" + c);
          e = b.Qx = c
        }
        a.indexOf("on") != 0 && (a = "on" + a);
        typeof d[a] != "object" && (d[a] = {});
        typeof b.jl[a] != "object" && (b.jl[a] = {});
        e = e || x.lang.ba();
        b.jl[a].Qx = e;
        d[a][e] = b
      }
    }
    ;
    x.lang.Da.prototype.removeEventListener = function(a, b) {
      a.indexOf("on") != 0 && (a = "on" + a);
      if (x.lang.Bt(b)) {
        if (!b.jl || !b.jl[a])
          return;
        b = b.jl[a].Qx
      } else if (!x.lang.tg(b))
        return;
      !this.Li && (this.Li = {});
      var c = this.Li;
      c[a] && c[a][b] && delete c[a][b]
    }
    ;
    x.lang.Da.prototype.dispatchEvent = function(a, b) {
      x.lang.tg(a) && (a = new x.lang.oz(a));
      !this.Li && (this.Li = {});
      var b = b || {}, c;
      for (c in b)
        a[c] = b[c];
      var d = this.Li
        , e = a.type;
      a.target = a.target || this;
      a.currentTarget = this;
      e.indexOf("on") != 0 && (e = "on" + e);
      x.lang.Bt(this[e]) && this[e].apply(this, arguments);
      if (typeof d[e] == "object")
        for (c in d[e])
          d[e][c].apply(this, arguments);
      return a.returnValue
    }
    ;
    x.lang.ua = function(a, b, c) {
      var d, e, f = a.prototype;
      e = new Function;
      e.prototype = b.prototype;
      e = a.prototype = new e;
      for (d in f)
        e[d] = f[d];
      a.prototype.constructor = a;
      a.M_ = b.prototype;
      if ("string" == typeof c)
        e.NQ = c
    }
    ;
    x.ua = x.lang.ua;
    x.lang.Lc = function(a) {
      return window[x.ba]._instances[a] || p
    }
    ;
    x.platform = x.platform || {};
    x.platform.tM = /macintosh/i.test(navigator.userAgent);
    x.platform.z3 = /MicroMessenger/i.test(navigator.userAgent);
    x.platform.BM = /windows/i.test(navigator.userAgent);
    x.platform.LY = /x11/i.test(navigator.userAgent);
    x.platform.Pm = /android/i.test(navigator.userAgent);
    /android (\d+(\.\d)?)/i.test(navigator.userAgent) && (x.platform.dK = x.dK = RegExp.$1);
    x.platform.FY = /ipad/i.test(navigator.userAgent);
    x.platform.CE = /iphone/i.test(navigator.userAgent);
    function ma(a, b) {
      a.domEvent = b = window.event || b;
      a.clientX = b.clientX || b.pageX;
      a.clientY = b.clientY || b.pageY;
      a.offsetX = b.offsetX || b.layerX;
      a.offsetY = b.offsetY || b.layerY;
      a.screenX = b.screenX;
      a.screenY = b.screenY;
      a.ctrlKey = b.ctrlKey || b.metaKey;
      a.shiftKey = b.shiftKey;
      a.altKey = b.altKey;
      if (b.touches) {
        a.touches = [];
        for (var c = 0; c < b.touches.length; c++)
          a.touches.push({
            clientX: b.touches[c].clientX,
            clientY: b.touches[c].clientY,
            screenX: b.touches[c].screenX,
            screenY: b.touches[c].screenY,
            pageX: b.touches[c].pageX,
            pageY: b.touches[c].pageY,
            target: b.touches[c].target,
            identifier: b.touches[c].identifier
          })
      }
      if (b.changedTouches) {
        a.changedTouches = [];
        for (c = 0; c < b.changedTouches.length; c++)
          a.changedTouches.push({
            clientX: b.changedTouches[c].clientX,
            clientY: b.changedTouches[c].clientY,
            screenX: b.changedTouches[c].screenX,
            screenY: b.changedTouches[c].screenY,
            pageX: b.changedTouches[c].pageX,
            pageY: b.changedTouches[c].pageY,
            target: b.changedTouches[c].target,
            identifier: b.changedTouches[c].identifier
          })
      }
      if (b.targetTouches) {
        a.targetTouches = [];
        for (c = 0; c < b.targetTouches.length; c++)
          a.targetTouches.push({
            clientX: b.targetTouches[c].clientX,
            clientY: b.targetTouches[c].clientY,
            screenX: b.targetTouches[c].screenX,
            screenY: b.targetTouches[c].screenY,
            pageX: b.targetTouches[c].pageX,
            pageY: b.targetTouches[c].pageY,
            target: b.targetTouches[c].target,
            identifier: b.targetTouches[c].identifier
          })
      }
      a.rotation = b.rotation;
      a.scale = b.scale;
      return a
    }
    x.lang.ix = function(a) {
      var b = window[x.ba];
      b.YS && delete b.YS[a]
    }
    ;
    x.event = {};
    x.M = x.event.M = function(a, b, c) {
      if (!(a = x.$(a)))
        return a;
      b = b.replace(/^on/, "");
      // a.addEventListener ? a.addEventListener(b, c, q) : a.attachEvent && a.attachEvent("on" + b, c);
      //  浏览器事件兼容
      a.addEventListener ? a.addEventListener(b, c, { passive: q }) : a.attachEvent && a.attachEvent("on" + b, c);
      return a
    }
    ;
    x.cd = x.event.cd = function(a, b, c) {
      if (!(a = x.$(a)))
        return a;
      b = b.replace(/^on/, "");
      a.removeEventListener ? a.removeEventListener(b, c, { passive: q }) : a.detachEvent && a.detachEvent("on" + b, c);
      return a
    }
    ;
    x.K.mt = function(a, b) {
      if (!a || !a.className || typeof a.className != "string")
        return q;
      var c = -1;
      try {
        c = a.className == b || a.className.search(RegExp("(\\s|^)" + b + "(\\s|$)"))
      } catch (d) {
        return q
      }
      return c > -1
    }
    ;
    x.iL = function() {
      function a(a) {
        document.addEventListener && (this.element = a,
          this.lL = this.Ek ? "touchstart" : "mousedown",
          this.BD = this.Ek ? "touchmove" : "mousemove",
          this.AD = this.Ek ? "touchend" : "mouseup",
          this.uh = q,
          this.ru = this.qu = 0,
          this.element.addEventListener(this.lL, this, q),
          ja.M(this.element, "mousedown", t()),
          this.handleEvent(p))
      }
      a.prototype = {
        Ek: "ontouchstart"in window || "createTouch"in document,
        start: function(a) {
          na(a);
          this.uh = q;
          this.qu = this.Ek ? a.touches[0].clientX : a.clientX;
          this.ru = this.Ek ? a.touches[0].clientY : a.clientY;
          this.element.addEventListener(this.BD, this, q);
          this.element.addEventListener(this.AD, this, q)
        },
        move: function(a) {
          oa(a);
          var c = this.Ek ? a.touches[0].clientY : a.clientY;
          if (10 < Math.abs((this.Ek ? a.touches[0].clientX : a.clientX) - this.qu) || 10 < Math.abs(c - this.ru))
            this.uh = o
        },
        end: function(a) {
          oa(a);
          this.uh || (a = document.createEvent("Event"),
            a.initEvent("tap", q, o),
            this.element.dispatchEvent(a));
          this.element.removeEventListener(this.BD, this, q);
          this.element.removeEventListener(this.AD, this, q)
        },
        handleEvent: function(a) {
          if (a)
            switch (a.type) {
              case this.lL:
                this.start(a);
                break;
              case this.BD:
                this.move(a);
                break;
              case this.AD:
                this.end(a)
            }
        }
      };
      return function(b) {
        return new a(b)
      }
    }();
    var z = window.BMap || {};
    z.version = "2.0";
    z.YU = 0.34 > Math.random();
    0 <= z.version.indexOf("#") && (z.version = "2.0");
    z.Nr = [];
    z.Xe = function(a) {
      this.Nr.push(a)
    }
    ;
    z.Dr = [];
    z.$m = function(a) {
      this.Dr.push(a)
    }
    ;
    z.lV = z.apiLoad || function() {
      z.version && z.version >= 1.5 && pa(z.oc + "?qt=verify&ak=" + qa, function(a) {
        if (a && a.error !== 0) {
          if (typeof map !== "undefined") {
            map.Ka().innerHTML = "";
            map.Li = {}
          }
          z = p;
          var b = "\u767e\u5ea6\u672a\u6388\u6743\u4f7f\u7528\u5730\u56feAPI\uff0c\u53ef\u80fd\u662f\u56e0\u4e3a\u60a8\u63d0\u4f9b\u7684\u5bc6\u94a5\u4e0d\u662f\u6709\u6548\u7684\u767e\u5ea6LBS\u5f00\u653e\u5e73\u53f0\u5bc6\u94a5\uff0c\u6216\u6b64\u5bc6\u94a5\u672a\u5bf9\u672c\u5e94\u7528\u7684\u767e\u5ea6\u5730\u56feJavaScriptAPI\u6388\u6743\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
          switch (a.error) {
            case 101:
              b = "\u5f00\u53d1\u8005\u7981\u7528\u4e86\u8be5ak\u7684jsapi\u670d\u52a1\u6743\u9650\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
              break;
            case 102:
              b = "\u5f00\u53d1\u8005Referer\u4e0d\u6b63\u786e\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002"
          }
          alert(b)
        }
      })
    }
    ;
    var qa = window.BMAP_AUTHENTIC_KEY;
    window.BMAP_AUTHENTIC_KEY = p;
    var ra = window.BMap_loadScriptTime
      , sa = (new Date).getTime()
      , ta = p
      , ua = o
      , va = 5042
      , wa = 5002
      , xa = 5003
      , ya = "load_mapclick"
      , za = 5038
      , Aa = 5041
      , Ba = 5047
      , Da = 5036
      , Ea = 5039
      , Fa = 5037
      , Ga = 5040
      , Ha = 5011
      , Ia = 7E3;
    var Ja = 0;
    window.BMAP_COORD_BD09 = 5;
    window.BMAP_COORD_GCJ02 = 3;
    function Ka(a, b) {
      if (a = x.$(a)) {
        var c = this;
        x.lang.Da.call(c);
        b = b || {};
        c.B = {
          wk: b.fixedZoomCenter || q,
          wC: 200,
          Fb: o,
          px: q,
          tD: o,
          Xo: o,
          Yo: b.enableWheelZoom || q,
          gL: o,
          vD: o,
          um: o,
          Rs: o,
          vm: o,
          Vo: b.enable3DBuilding || q,
          Hc: 25,
          E0: 240,
          $U: 450,
          Xb: F.Xb,
          Gd: F.Gd,
          ay: !!b.ay,
          fc: Math.round(b.minZoom) || 1,
          Zb: Math.round(b.maxZoom) || 19,
          Hb: b.mapType || Ma,
          q4: q,
          bL: b.drawer || Ja,
          ox: o,
          mx: 500,
          NW: b.enableHighResolution !== q,
          qj: b.enableMapClick !== q,
          devicePixelRatio: b.devicePixelRatio || window.devicePixelRatio || 1,
          gG: 99,
          ze: b.mapStyle || p,
          TY: b.logoControl === q ? q : o,
          sV: [],
          Kw: b.beforeClickIcon || p,
          pD: b.enableBizAuthLogo === q ? q : o,
          Yw: b.coordsType || 5
        };
        window.GCJMAP = this;
        c.B.ze && (this.uY(c.B.ze.controls),
          this.oM(c.B.ze.geotableId));
        c.B.ze && c.B.ze.styleId && c.j3(c.B.ze.styleId);
        c.B.mm = {
          dark: {
            backColor: "#2D2D2D",
            textColor: "#bfbfbf",
            iconUrl: "dicons"
          },
          normal: {
            backColor: "#F3F1EC",
            textColor: "#c61b1b",
            iconUrl: "icons"
          },
          light: {
            backColor: "#EBF8FC",
            textColor: "#017fb4",
            iconUrl: "licons"
          }
        };
        b.enableAutoResize && (c.B.Rs = b.enableAutoResize);
        b.enableStreetEntrance === q && (c.B.vm = b.enableStreetEntrance);
        b.enableDeepZoom === q && (c.B.gL = b.enableDeepZoom);
        var d = c.B.sV;
        if (G())
          for (var e = 0, f = d.length; e < f; e++)
            if (x.da[d[e]]) {
              c.B.devicePixelRatio = 1;
              break
            }
        d = -1 < navigator.userAgent.toLowerCase().indexOf("android");
        e = -1 < navigator.userAgent.toLowerCase().indexOf("mqqbrowser");
        if (-1 < navigator.userAgent.toLowerCase().indexOf("UCBrowser") || d && e)
          c.B.gG = 99;
        c.Ua = a;
        c.KB(a);
        a.unselectable = "on";
        a.innerHTML = "";
        a.appendChild(c.va());
        b.size && this.Ce(b.size);
        d = c.tb();
        c.width = d.width;
        c.height = d.height;
        c.offsetX = 0;
        c.offsetY = 0;
        c.platform = a.firstChild;
        c.Ae = c.platform.firstChild;
        c.Ae.style.width = c.width + "px";
        c.Ae.style.height = c.height + "px";
        c.Yd = {};
        c.re = new H(0,0);
        c.dc = new H(0,0);
        c.Na = 3;
        c.Mc = 0;
        c.OC = p;
        c.NC = p;
        c.Sb = "";
        c.Sw = "";
        c.Th = {};
        c.Th.custom = {};
        c.Sa = 0;
        b.useWebGL === q && Na(q);
        c.P = new Oa(a,{
          of: "api",
          cT: o
        });
        c.P.U();
        c.P.HF(c);
        b = b || {};
        d = c.Hb = c.B.Hb;
        c.Ld = d.kp();
        d === Pa && Qa(wa);
        d === Sa && Qa(xa);
        d = c.B;
        d.$O = Math.round(b.minZoom);
        d.ZO = Math.round(b.maxZoom);
        c.fv();
        c.R = {
          Ic: q,
          kc: 0,
          Ap: 0,
          FM: 0,
          D3: 0,
          oC: q,
          oF: -1,
          Re: []
        };
        c.platform.style.cursor = c.B.Xb;
        for (e = 0; e < z.Nr.length; e++)
          z.Nr[e](c);
        c.R.oF = e;
        c.ca();
        I.load("map", function() {
          c.xb()
        });
        c.B.qj && (setTimeout(function() {
          Qa(ya)
        }, 1E3),
          I.load("mapclick", function() {
            window.MPC_Mgr = window.MPC_Mgr || {};
            window.MPC_Mgr[c.ba] = new Ta(c)
          }, o));
        Va() && I.load("oppc", function() {
          c.Hz()
        });
        G() && I.load("opmb", function() {
          c.Hz()
        });
        a = p;
        c.YB = []
      }
    }
    x.lang.ua(Ka, x.lang.Da, "Map");
    x.extend(Ka.prototype, {
      va: function() {
        var a = K("div")
          , b = a.style;
        b.overflow = "visible";
        b.position = "absolute";
        b.zIndex = "0";
        b.top = b.left = "0px";
        var b = K("div", {
          "class": "BMap_mask"
        })
          , c = b.style;
        c.position = "absolute";
        c.top = c.left = "0px";
        c.zIndex = "9";
        c.overflow = "hidden";
        c.WebkitUserSelect = "none";
        a.appendChild(b);
        return a
      },
      KB: function(a) {
        var b = a.style;
        b.overflow = "hidden";
        "absolute" !== Wa(a).position && (b.position = "relative",
          b.zIndex = 0);
        b.backgroundColor = "#F3F1EC";
        b.color = "#000";
        b.textAlign = "left"
      },
      ca: function() {
        var a = this;
        a.Ao = function() {
          var b = a.tb();
          if (a.width !== b.width || a.height !== b.height) {
            var c = new L(a.width,a.height)
              , d = new M("onbeforeresize");
            d.size = c;
            a.dispatchEvent(d);
            a.mk((b.width - a.width) / 2, (b.height - a.height) / 2);
            a.Ae.style.width = (a.width = b.width) + "px";
            a.Ae.style.height = (a.height = b.height) + "px";
            c = new M("onresize");
            c.size = b;
            a.dispatchEvent(c)
          }
        }
        ;
        a.B.Rs && (a.R.em = setInterval(a.Ao, 80))
      },
      mk: function(a, b, c, d) {
        var e = this.oa().yc(this.ga())
          , f = this.Ld
          , g = o;
        c && N.BE(c) && (this.re = new H(c.lng,c.lat),
          g = q);
        if (c = c && d ? f.Hk(c, this.Sb) : this.dc)
          if (this.dc = new H(c.lng + a * e,c.lat - b * e),
          (a = f.th(this.dc, this.Sb)) && g)
            this.re = a
      },
      Hg: function(a, b) {
        if (Xa(a) && (this.fv(),
          this.dispatchEvent(new M("onzoomstart")),
          a = this.co(a).zoom,
        a !== this.Na)) {
          this.Mc = this.Na;
          this.Na = a;
          var c;
          b ? c = new H(Ya(cp, me).lng,Ya(b, me).lat) : this.lh() && (c = this.lh().ha());
          c && (c = this.Cc(c, this.Mc),
            this.mk(this.width / 2 - c.x, this.height / 2 - c.y, this.Rb(c, this.Mc), o));
          this.dispatchEvent(new M("onzoomstartcode"))
        }
      },
      Oc: function(a) {
        this.Hg(a)
      },
      kG: function(a) {
        this.Hg(this.Na + 1, a)
      },
      lG: function(a) {
        this.Hg(this.Na - 1, a)
      },
      zi: function(a) {
        if (a instanceof N || a instanceof H)
          a = Ya(a, this),
            this.dc = this.Ld.Hk(a, this.Sb),
            this.re = H.BE(a) ? new H(a.lng,a.lat) : this.Ld.th(this.dc, this.Sb)
      },
      yg: function(a, b) {
        a = Math.round(a) || 0;
        b = Math.round(b) || 0;
        this.mk(-a, -b)
      },
      hs: function(a) {
        a && Za(a.Ie) && (a.Ie(this),
          this.dispatchEvent(new M("onaddcontrol",a)))
      },
      QN: function(a) {
        a && Za(a.remove) && (a.remove(),
          this.dispatchEvent(new M("onremovecontrol",a)))
      },
      Do: function(a) {
        a && Za(a.ra) && (a.ra(this),
          this.dispatchEvent(new M("onaddcontextmenu",a)))
      },
      Mp: function(a) {
        a && Za(a.remove) && (this.dispatchEvent(new M("onremovecontextmenu",a)),
          a.remove())
      },
      Ja: function(a) {
        a && Za(a.Ie) && (a.Ie(this),
          this.dispatchEvent(new M("onaddoverlay",a)))
      },
      Ub: function(a) {
        a && Za(a.remove) && (a.remove(),
          this.dispatchEvent(new M("onremoveoverlay",a)))
      },
      xK: function() {
        this.dispatchEvent(new M("onclearoverlays"))
      },
      $g: function(a) {
        a && this.dispatchEvent(new M("onaddtilelayer",a))
      },
      Bh: function(a) {
        a && this.dispatchEvent(new M("onremovetilelayer",a))
      },
      Eg: function(a) {
        if (this.Hb !== a) {
          var b = new M("onsetmaptype");
          b.h4 = this.Hb;
          this.Hb = this.B.Hb = a;
          this.Ld = this.Hb.kp();
          this.mk(0, 0, this.wc(), o);
          this.fv();
          var c = this.co(this.ga()).zoom;
          this.Hg(c);
          this.dispatchEvent(b);
          b = new M("onmaptypechange");
          b.Na = c;
          b.Hb = a;
          this.dispatchEvent(b);
          (a === $a || a === Sa) && Qa(xa)
        }
      },
      Wf: function(a) {
        var b = this;
        if (a instanceof N || a instanceof H)
          a = new H(Ya(a, b).lng,Ya(a, b).lat),
            b.zi(a, {
              noAnimation: o
            });
        else if (ab(a))
          if (b.Hb === Pa) {
            var c = F.sC[a];
            c && (pt = c.m,
              b.Wf(pt))
          } else {
            var d = this.XH();
            d.KF(function(c) {
              0 === d.Fm() && 2 === d.Ga.result.type && (b.Wf(c.Ck(0).point),
              Pa.yk(a) && b.EF(a))
            });
            d.search(a, {
              log: "center"
            })
          }
      },
      Ed: function(a, b) {
        "[object Undefined]" !== Object.prototype.toString.call(b) && (b = parseInt(b));
        z.Jn("cus.fire", "time", {
          z_loadscripttime: sa - ra
        });
        var c = this;
        if (ab(a))
          if (c.Hb === Pa) {
            var d = F.sC[a];
            d && (pt = d.m,
              c.Ed(pt, b))
          } else {
            var e = c.XH();
            e.KF(function(d) {
              if (0 === e.Fm() && (2 === e.Ga.result.type || 11 === e.Ga.result.type)) {
                var d = d.Ck(0).point
                  , f = b || Q.ux(e.Ga.content.level, c);
                c.Ed(d, f);
                Pa.yk(a) && c.EF(a)
              }
            });
            e.search(a, {
              log: "center"
            })
          }
        else if ((a instanceof H || a instanceof N) && b) {
          var b = c.co(b).zoom
            , f = Ya(a, c);
          c.Mc = c.Na || b;
          c.Na = b;
          d = c.re;
          c.re = new H(f.lng,f.lat);
          c.dc = c.Ld.Hk(c.re, c.Sb);
          c.OC = c.OC || c.Na;
          c.NC = c.NC || c.re;
          var g = new M("onload")
            , i = new M("onloadcode");
          g.point = new H(f.lng,f.lat);
          g.pixel = c.Cc(c.re, c.Na);
          g.zoom = b;
          c.loaded || (c.loaded = o,
            c.dispatchEvent(g),
          ta || (ta = bb()));
          c.dispatchEvent(i);
          f = new M("onmoveend");
          f.zH = "centerAndZoom";
          d.ab(c.re) || c.dispatchEvent(f);
          c.dispatchEvent(new M("onmoveend"));
          c.Mc !== c.Na && (d = new M("onzoomend"),
            d.zH = "centerAndZoom",
            c.dispatchEvent(d));
          c.B.Vo && c.Vo()
        }
      },
      XH: function() {
        this.R.PM || (this.R.PM = new cb(1));
        return this.R.PM
      },
      reset: function() {
        this.Ed(this.NC, this.OC, o)
      },
      enableDragging: function() {
        this.B.Fb = o
      },
      disableDragging: function() {
        this.B.Fb = q
      },
      enableInertialDragging: function() {
        this.B.ox = o
      },
      disableInertialDragging: function() {
        this.B.ox = q
      },
      enableScrollWheelZoom: function() {
        this.B.Yo = o
      },
      disableScrollWheelZoom: function() {
        this.B.Yo = q
      },
      enableContinuousZoom: function() {
        this.B.Xo = o
      },
      disableContinuousZoom: function() {
        this.B.Xo = q
      },
      enableDoubleClickZoom: function() {
        this.B.tD = o
      },
      disableDoubleClickZoom: function() {
        this.B.tD = q
      },
      enableKeyboard: function() {
        this.B.px = o
      },
      disableKeyboard: function() {
        this.B.px = q
      },
      enablePinchToZoom: function() {
        this.B.um = o
      },
      disablePinchToZoom: function() {
        this.B.um = q
      },
      enableAutoResize: function() {
        this.B.Rs = o;
        this.Ao();
        this.R.em || (this.R.em = setInterval(this.Ao, 80))
      },
      disableAutoResize: function() {
        this.B.Rs = q;
        this.R.em && (clearInterval(this.R.em),
          this.R.em = p)
      },
      enableBizAuthLogo: function() {
        this.B.pD = o;
        this.Lw && this.Lw.show()
      },
      disableBizAuthLogo: function() {
        this.B.pD = q;
        this.Lw && this.Lw.U()
      },
      Vo: function() {
        this.B.Vo = o;
        this.Rn || (this.Rn = new db({
          pL: o
        }),
          this.$g(this.Rn))
      },
      wW: function() {
        this.B.Vo = q;
        this.Rn && (this.Bh(this.Rn),
          this.Rn = p,
          delete this.Rn)
      },
      tb: function() {
        return this.Cs && this.Cs instanceof L ? new L(this.Cs.width,this.Cs.height) : new L(this.Ua.clientWidth,this.Ua.clientHeight)
      },
      Ce: function(a) {
        a && a instanceof L ? (this.Cs = a,
          this.Ua.style.width = a.width + "px",
          this.Ua.style.height = a.height + "px") : this.Cs = p
      },
      wc: v("re"),
      pc: function() {
        return eb(this.re, this)
      },
      ga: v("Na"),
      NV: function() {
        this.Ao()
      },
      co: function(a) {
        var b = this.B.fc
          , c = this.B.Zb
          , d = q
          , a = Math.round(a);
        a < b && (d = o,
          a = b);
        a > c && (d = o,
          a = c);
        return {
          zoom: a,
          CD: d
        }
      },
      Ka: v("Ua"),
      Cc: function(a, b) {
        b = b || this.ga();
        return this.Ld.Kp(a, b, this.dc, this.tb(), this.Sb)
      },
      Kp: function(a, b) {
        b = b || this.ga();
        if (a && (a instanceof N || a instanceof H))
          return a = Ya(a, this),
            this.Ld.Kp(a, b, this.dc, this.tb(), this.Sb)
      },
      Rb: function(a, b) {
        b = b || this.ga();
        return this.Ld.zg(a, b, this.dc, this.tb(), this.Sb)
      },
      zg: function(a, b) {
        b = b || this.ga();
        return eb(this.Rb(a, b), this)
      },
      We: function(a, b) {
        if (a) {
          var a = Ya(a, this)
            , c = this.Cc(new H(a.lng,a.lat), b);
          c.x -= this.offsetX;
          c.y -= this.offsetY;
          return c
        }
      },
      ET: function(a, b) {
        if (a) {
          var c = new S(a.x,a.y);
          c.x += this.offsetX;
          c.y += this.offsetY;
          return this.Rb(c, b)
        }
      },
      DN: function(a, b) {
        if (a) {
          var c = new S(a.x,a.y);
          c.x += this.offsetX;
          c.y += this.offsetY;
          return this.zg(c, b)
        }
      },
      pointToPixelFor3D: function(a, b) {
        var c = map.Sb;
        this.Hb === Pa && c && fb.DK(a, this, b)
      },
      b4: function(a, b) {
        var c = map.Sb;
        this.Hb === Pa && c && fb.CK(a, this, b)
      },
      c4: function(a, b) {
        var c = this
          , d = map.Sb;
        c.Hb === Pa && d && fb.DK(a, c, function(a) {
          a.x -= c.offsetX;
          a.y -= c.offsetY;
          b && b(a)
        })
      },
      Z3: function(a, b) {
        var c = map.Sb;
        this.Hb === Pa && c && (a.x += this.offsetX,
          a.y += this.offsetY,
          fb.CK(a, this, b))
      },
      Id: function(a) {
        if (!this.$x())
          return new gb;
        var b = a || {}
          , a = b.margins || [0, 0, 0, 0]
          , c = b.zoom || p
          , b = this.zg({
          x: a[3],
          y: this.height - a[2]
        }, c)
          , a = this.zg({
          x: this.width - a[1],
          y: a[0]
        }, c);
        return new gb(b,a)
      },
      $x: function() {
        return !!this.loaded
      },
      eS: function(a, b) {
        for (var c = this.oa(), d = b.margins || [10, 10, 10, 10], e = b.zoomFactor || 0, f = d[1] + d[3], d = d[0] + d[2], g = c.fp(), i = c = c.Bm(); i >= g; i--) {
          var k = this.oa().yc(i);
          if (a.ZF().lng / k < this.width - f && a.ZF().lat / k < this.height - d)
            break
        }
        i += e;
        i < g && (i = g);
        i > c && (i = c);
        return i
      },
      lt: function(a, b) {
        var c = {
          center: this.wc(),
          zoom: this.ga()
        };
        if (!a || !a instanceof gb && 0 === a.length || a instanceof gb && a.Cj())
          return c;
        var d = [];
        a instanceof gb ? (d.push(Ya(a.pf(), this)),
          d.push(Ya(a.xe(), this))) : d = a.slice(0);
        for (var b = b || {}, e = [], f = 0, g = d.length; f < g; f++)
          e.push(this.Ld.Hk(Ya(d[f], this), this.Sb));
        d = new gb;
        for (f = e.length - 1; 0 <= f; f--)
          d.extend(e[f]);
        if (d.Cj())
          return c;
        c = d.pc();
        e = this.eS(d, b);
        b.margins && (d = b.margins,
          f = (d[1] - d[3]) / 2,
          d = (d[0] - d[2]) / 2,
          g = this.oa().yc(e),
        b.offset && (f = b.offset.width,
          d = b.offset.height),
          c.lng += g * f,
          c.lat += g * d);
        c = this.Ld.th(c, this.Sb);
        return {
          center: eb(c, this),
          zoom: e
        }
      },
      Eh: function(a, b) {
        var c;
        c = a && a.center ? a : this.lt(a, b);
        var b = b || {}
          , d = b.delay || 200;
        if (c.zoom === this.Na && b.enableAnimation !== q) {
          var e = this;
          setTimeout(function() {
            e.zi(c.center, {
              duration: 210
            })
          }, d)
        } else
          this.Ed(c.center, c.zoom)
      },
      Rf: v("Yd"),
      lh: function() {
        return this.R.ob && this.R.ob.Va() ? this.R.ob : p
      },
      getDistance: function(a, b) {
        if (a && b) {
          if (a.ab(b))
            return 0;
          var a = Ya(a, this)
            , b = Ya(b, this)
            , c = 0
            , c = T.dp(a, b);
          if (c === p || c === j)
            c = 0;
          return c
        }
      },
      Jx: function() {
        var a = []
          , b = this.wa
          , c = this.Fe;
        if (b)
          for (var d in b)
            b[d]instanceof hb && a.push(b[d]);
        if (c) {
          d = 0;
          for (b = c.length; d < b; d++)
            a.push(c[d])
        }
        return a
      },
      oa: v("Hb"),
      Hz: function() {
        for (var a = this.R.oF; a < z.Nr.length; a++)
          z.Nr[a](this);
        this.R.oF = a
      },
      EF: function(a) {
        this.Sb = Pa.yk(a);
        this.Sw = Pa.BL(this.Sb);
        this.Hb === Pa && this.Ld instanceof ib && (this.Ld.jj = this.Sb)
      },
      setDefaultCursor: function(a) {
        this.B.Xb = a;
        this.platform && (this.platform.style.cursor = this.B.Xb)
      },
      getDefaultCursor: function() {
        return this.B.Xb
      },
      setDraggingCursor: function(a) {
        this.B.Gd = a
      },
      getDraggingCursor: function() {
        return this.B.Gd
      },
      Vx: function() {
        return this.B.NW && 1.5 <= this.B.devicePixelRatio
      },
      Cw: function(a, b) {
        b ? this.Th[b] || (this.Th[b] = {}) : b = "custom";
        a.tag = b;
        a instanceof jb && (this.Th[b][a.ba] = a,
          a.ra(this));
        var c = this;
        I.load("hotspot", function() {
          c.Hz()
        }, o)
      },
      EZ: function(a, b) {
        b || (b = "custom");
        this.Th[b][a.ba] && delete this.Th[b][a.ba]
      },
      km: function(a) {
        a || (a = "custom");
        this.Th[a] = {}
      },
      fv: function() {
        var a = this.Hb.fp()
          , b = this.Hb.Bm()
          , c = this.B;
        c.fc = c.$O || a;
        c.Zb = c.ZO || b;
        c.fc < a && (c.fc = a);
        c.Zb > b && (c.Zb = b)
      },
      setMinZoom: function(a) {
        a = Math.round(a);
        a > this.B.Zb && (a = this.B.Zb);
        this.B.$O = a;
        this.GJ()
      },
      setMaxZoom: function(a) {
        a = Math.round(a);
        a < this.B.fc && (a = this.B.fc);
        this.B.ZO = a;
        this.GJ()
      },
      GJ: function() {
        this.fv();
        var a = this.B;
        this.Na < a.fc ? this.Oc(a.fc) : this.Na > a.Zb && this.Oc(a.Zb);
        var b = new M("onzoomspanchange");
        b.fc = a.fc;
        b.Zb = a.Zb;
        this.dispatchEvent(b)
      },
      l3: v("YB"),
      getKey: function() {
        return qa
      },
      bu: function(a) {
        var b = this;
        window.MPC_Mgr && window.MPC_Mgr[b.ba] && window.MPC_Mgr[b.ba].close();
        b.B.qj = q;
        z.Jn("cus.fire", "count", "z_setmapstylecount");
        if (a) {
          b = this;
          a.styleJson && (a.styleStr = b.J_(a.styleJson));
          G() && x.da.wF ? setTimeout(function() {
            b.B.ze = a;
            b.dispatchEvent(new M("onsetcustomstyles",a))
          }, 50) : (this.B.ze = a,
            this.dispatchEvent(new M("onsetcustomstyles",a)),
            this.oM(b.B.ze.geotableId));
          var c = {
            style: a.style
          };
          a.features && 0 < a.features.length && (c.features = o);
          a.styleJson && 0 < a.styleJson.length && (c.styleJson = o);
          Qa(5050, c);
          a.style && (c = b.B.mm[a.style] ? b.B.mm[a.style].backColor : b.B.mm.normal.backColor) && (this.Ka().style.backgroundColor = c)
        }
      },
      uY: function(a) {
        this.controls || (this.controls = {
          navigationControl: new kb,
          scaleControl: new lb,
          overviewMapControl: new mb,
          mapTypeControl: new nb
        });
        var b = this, c;
        for (c in this.controls)
          b.QN(b.controls[c]);
        a = a || [];
        x.jc.Eb(a, function(a) {
          b.hs(b.controls[a])
        })
      },
      oM: function(a) {
        a ? this.As && this.As.Bf === a || (this.Bh(this.As),
          this.As = new ob({
            geotableId: a
          }),
          this.$g(this.As)) : this.Bh(this.As)
      },
      Wb: function() {
        var a = this.ga() >= this.B.gG && this.oa() === Ma && 18 >= this.ga()
          , b = q;
        try {
          document.createElement("canvas").getContext("2d"),
            b = o
        } catch (c) {
          b = q
        }
        return a && b
      },
      getCurrentCity: function() {
        return {
          name: this.bh,
          code: this.ks
        }
      },
      Cm: function() {
        this.P.jo();
        return this.P
      },
      setPanorama: function(a) {
        this.P = a;
        this.P.HF(this)
      },
      J_: function(a) {
        for (var b = {
          featureType: "t",
          elementType: "e",
          visibility: "v",
          color: "c",
          lightness: "l",
          saturation: "s",
          weight: "w",
          zoom: "z",
          hue: "h"
        }, c = {
          all: "all",
          geometry: "g",
          "geometry.fill": "g.f",
          "geometry.stroke": "g.s",
          labels: "l",
          "labels.text.fill": "l.t.f",
          "labels.text.stroke": "l.t.s",
          "lables.text": "l.t",
          "labels.icon": "l.i"
        }, d = [], e = 0, f; f = a[e]; e++) {
          var g = f.stylers;
          delete f.stylers;
          x.extend(f, g);
          var g = [], i;
          for (i in b)
            if (f[i])
              if ("elementType" === i)
                g.push(b[i] + ":" + c[f[i]]);
              else {
                switch (f[i]) {
                  case "poilabel":
                    f[i] = "poi";
                    break;
                  case "districtlabel":
                    f[i] = "label"
                }
                g.push(b[i] + ":" + f[i])
              }
          2 < g.length && d.push(g.join("|"))
        }
        return d.join(",")
      },
      d_: function(a) {
        this.B.fL = a
      }
    });
    function Qa(a, b) {
      if (a) {
        var b = b || {}, c = "", d;
        for (d in b)
          c = c + "&" + d + "=" + encodeURIComponent(b[d]);
        var e = function(a) {
          a && (pb = o,
            setTimeout(function() {
              qb.src = z.oc + "images/blank.gif?" + a.src
            }, 50))
        }
          , f = function() {
          var a = rb.shift();
          a && e(a)
        };
        d = (1E8 * Math.random()).toFixed(0);
        pb ? rb.push({
          src: "product=jsapi&sub_product=jsapi&v=" + z.version + "&sub_product_v=" + z.version + "&t=" + d + "&code=" + a + "&da_src=" + a + c
        }) : e({
          src: "product=jsapi&sub_product=jsapi&v=" + z.version + "&sub_product_v=" + z.version + "&t=" + d + "&code=" + a + "&da_src=" + a + c
        });
        sb || (x.M(qb, "load", function() {
          pb = q;
          f()
        }),
          x.M(qb, "error", function() {
            pb = q;
            f()
          }),
          sb = o)
      }
    }
    var pb, sb, rb = [], qb = new Image;
    Qa(5E3, {
      device_pixel_ratio: window.devicePixelRatio,
      platform: navigator.platform
    });
    z.iM = {
      TILE_BASE_URLS: ["gss0.bdstatic.com/5bwHcj7lABFU8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFV8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFS8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFT8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFY8t_jkk_Z1zRvfdw6buu"],
      TILE_ONLINE_URLS: ["maponline0.bdimg.com", "maponline1.bdimg.com", "maponline2.bdimg.com", "maponline3.bdimg.com"],
      TIlE_PERSPECT_URLS: ["gss0.bdstatic.com/-OR1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-ON1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OZ1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OV1cTe9KgQFm2e88IuM_a"],
      geolocControl: "gsp0.baidu.com/8LkJsjOpB1gCo2Kml5_Y_D3",
      TILES_YUN_HOST: ["gsp0.baidu.com/-eR1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eN1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eZ1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eV1bSahKgkFkRGko9WTAnF6hhy"],
      traffic: "gsp0.baidu.com/7_AZsjOpB1gCo2Kml5_Y_DAcsMJiwa",
      iw_pano: "gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_",
      message: "gsp0.baidu.com/7vo0bSba2gU2pMbgoY3K",
      baidumap: "gsp0.baidu.com/80MWsjip0QIZ8tyhnq",
      wuxian: "gsp0.baidu.com/6a1OdTeaKgQFm2e88IuM_a",
      pano: ["gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_", "gss0.bdstatic.com/5LUZemfa_QUU8t7mm9GUKT-xh_", "gss0.bdstatic.com/5LUZemja_QUU8t7mm9GUKT-xh_"],
      main_domain_nocdn: {
        baidu: "gsp0.baidu.com/9_Q4sjOpB1gCo2Kml5_Y_D3",
        other: "api.map.baidu.com"
      },
      main_domain_cdn: {
        baidu: ["gss0.bdstatic.com/9_Q4vHSd2RZ3otebn9fN2DJv", "gss0.baidu.com/9_Q4vXSd2RZ3otebn9fN2DJv", "gss0.bdstatic.com/9_Q4vnSd2RZ3otebn9fN2DJv"],
        other: ["api.map.baidu.com"],
        webmap: ["gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv"]
      },
      map_click: "gsp0.baidu.com/80MWbzKh2wt3n2qy8IqW0jdnxx1xbK",
      vector_traffic: "gss0.bdstatic.com/8aZ1cTe9KgQIm2_p8IuM_a"
    };
    z.oY = {
      TILE_BASE_URLS: ["shangetu0.map.bdimg.com", "shangetu1.map.bdimg.com", "shangetu2.map.bdimg.com", "shangetu3.map.bdimg.com", "shangetu4.map.bdimg.com"],
      TILE_ONLINE_URLS: ["maponline0.bdimg.com", "maponline1.bdimg.com", "maponline2.bdimg.com", "maponline3.bdimg.com"],
      TIlE_PERSPECT_URLS: ["d0.map.baidu.com", "d1.map.baidu.com", "d2.map.baidu.com", "d3.map.baidu.com"],
      geolocControl: "loc.map.baidu.com",
      TILES_YUN_HOST: ["g0.api.map.baidu.com", "g1.api.map.baidu.com", "g2.api.map.baidu.com", "g3.api.map.baidu.com"],
      traffic: "its.map.baidu.com:8002",
      iw_pano: "pcsv0.map.bdimg.com",
      message: "j.map.baidu.com",
      baidumap: "map.baidu.com",
      wuxian: "wuxian.baidu.com",
      pano: ["pcsv0.map.bdimg.com", "pcsv1.map.bdimg.com", "pcsv2.map.bdimg.com"],
      main_domain_nocdn: {
        baidu: "api.map.baidu.com"
      },
      main_domain_cdn: {
        baidu: ["api0.map.bdimg.com", "api1.map.bdimg.com", "api2.map.bdimg.com"],
        webmap: ["webmap0.map.bdimg.com"]
      },
      map_click: "mapclick.map.baidu.com",
      vector_traffic: "or.map.bdimg.com"
    };
    z.l0 = {
      "0": {
        proto: "http://",
        domain: z.oY
      },
      1: {
        proto: "https://",
        domain: z.iM
      },
      2: {
        proto: "https://",
        domain: z.iM
      }
    };
    z.dz = window.HOST_TYPE || "0";
    z.url = z.l0[z.dz];
    z.Dp = z.url.proto + z.url.domain.baidumap + "/";
    z.oc = bmapcfg.home;
    // z.oc = z.url.proto + ("2" == z.dz ? z.url.domain.main_domain_nocdn.other : z.url.domain.main_domain_nocdn.baidu) + "/";
    z.ma = bmapcfg.home  //修改，本地工具资源引用(离线路径)
    // z.ma = z.url.proto + ("2" == z.dz ? z.url.domain.main_domain_cdn.other[0] : z.url.domain.main_domain_cdn.baidu[0]) + "/";
    z.hj = z.url.proto + z.url.domain.main_domain_cdn.webmap[0] + "/";
    z.sg = function(a, b) {
      var c, d, b = b || "";
      switch (a) {
        case "main_domain_nocdn":
          c = z.oc + b;
          break;
        case "main_domain_cdn":
          c = z.ma + b;
          break;
        default:
          d = z.url.domain[a],
            "[object Array]" == Object.prototype.toString.call(d) ? (c = [],
              x.jc.Eb(d, function(a, d) {
                c[d] = z.url.proto + a + "/" + b
              })) : c = z.url.proto + z.url.domain[a] + "/" + b
      }
      return c
    }
    ;
    function tb(a) {
      var b = {
        duration: 1E3,
        Hc: 30,
        Ro: 0,
        hc: ub.NM,
        Nt: t()
      };
      this.Zf = [];
      if (a)
        for (var c in a)
          b[c] = a[c];
      this.k = b;
      if (Xa(b.Ro)) {
        var d = this;
        setTimeout(function() {
          d.start()
        }, b.Ro)
      } else
        b.Ro != vb && this.start()
    }
    var vb = "INFINITE";
    tb.prototype.start = function() {
      this.Wu = bb();
      this.kA = this.Wu + this.k.duration;
      wb(this)
    }
    ;
    tb.prototype.add = function(a) {
      this.Zf.push(a)
    }
    ;
    function wb(a) {
      var b = bb();
      b >= a.kA ? (Za(a.k.va) && a.k.va(a.k.hc(1)),
      Za(a.k.finish) && a.k.finish(),
      0 < a.Zf.length && (b = a.Zf[0],
        b.Zf = [].concat(a.Zf.slice(1)),
        b.start())) : (a.Ly = a.k.hc((b - a.Wu) / a.k.duration),
      Za(a.k.va) && a.k.va(a.Ly),
      a.TF || (a.ds = setTimeout(function() {
        wb(a)
      }, 1E3 / a.k.Hc)))
    }
    tb.prototype.stop = function(a) {
      this.TF = o;
      for (var b = 0; b < this.Zf.length; b++)
        this.Zf[b].stop(),
          this.Zf[b] = p;
      this.Zf.length = 0;
      this.ds && (clearTimeout(this.ds),
        this.ds = p);
      this.k.Nt(this.Ly);
      a && (this.kA = this.Wu,
        wb(this))
    }
    ;
    tb.prototype.cancel = ha(1);
    var ub = {
      NM: function(a) {
        return a
      },
      reverse: function(a) {
        return 1 - a
      },
      nD: function(a) {
        return a * a
      },
      mD: function(a) {
        return Math.pow(a, 3)
      },
      Ps: function(a) {
        return -(a * (a - 2))
      },
      dL: function(a) {
        return Math.pow(a - 1, 3) + 1
      },
      cL: function(a) {
        return 0.5 > a ? 2 * a * a : -2 * (a - 2) * a - 1
      },
      n2: function(a) {
        return 0.5 > a ? 4 * Math.pow(a, 3) : 4 * Math.pow(a - 1, 3) + 1
      },
      o2: function(a) {
        return (1 - Math.cos(Math.PI * a)) / 2
      }
    };
    ub["ease-in"] = ub.nD;
    ub["ease-out"] = ub.Ps;
    var F = {
      oG: 34,
      pG: 21,
      qG: new L(21,32),
      qP: new L(10,32),
      pP: new L(24,36),
      oP: new L(12,36),
      mG: new L(13,1),
      qa: z.ma + "images/",
      u3: "http://api0.map.bdimg.com/images/",
      nG: z.ma + "images/markers_new.png",
      mP: 24,
      nP: 73,
      sC: {
        "\u5317\u4eac": {
          Cy: "bj",
          m: new H(116.403874,39.914889)
        },
        "\u4e0a\u6d77": {
          Cy: "sh",
          m: new H(121.487899,31.249162)
        },
        "\u6df1\u5733": {
          Cy: "sz",
          m: new H(114.025974,22.546054)
        },
        "\u5e7f\u5dde": {
          Cy: "gz",
          m: new H(113.30765,23.120049)
        }
      },
      fontFamily: "arial,sans-serif"
    };
    x.da.Te ? (x.extend(F, {
      SK: "url(" + F.qa + "ruler.cur),crosshair",
      Xb: "-moz-grab",
      Gd: "-moz-grabbing"
    }),
    x.platform.BM && (F.fontFamily = "arial,simsun,sans-serif")) : x.da.Rw || x.da.wF ? x.extend(F, {
      SK: "url(" + F.qa + "ruler.cur) 2 6,crosshair",
      Xb: "url(" + F.qa + "openhand.cur) 8 8,default",
      Gd: "url(" + F.qa + "closedhand.cur) 8 8,move"
    }) : x.extend(F, {
      SK: "url(" + F.qa + "ruler.cur),crosshair",
      Xb: "url(" + F.qa + "openhand.cur),default",
      Gd: "url(" + F.qa + "closedhand.cur),move"
    });
    function xb(a, b) {
      var c = a.style;
      c.left = b[0] + "px";
      c.top = b[1] + "px"
    }
    function yb(a) {
      0 < x.da.la ? a.unselectable = "on" : a.style.MozUserSelect = "none"
    }
    function zb(a) {
      return a && a.parentNode && 11 !== a.parentNode.nodeType
    }
    function Ab(a, b) {
      x.K.Yx(a, "beforeEnd", b);
      return a.lastChild
    }
    function Bb(a) {
      for (var b = {
        left: 0,
        top: 0
      }; a && a.offsetParent; )
        b.left += a.offsetLeft,
          b.top += a.offsetTop,
          a = a.offsetParent;
      return b
    }
    function na(a) {
      a = window.event || a;
      a.stopPropagation ? a.stopPropagation() : a.cancelBubble = o
    }
    function Cb(a) {
      a = window.event || a;
      a.preventDefault ? a.preventDefault() : a.returnValue = q;
      return q
    }
    function oa(a) {
      na(a);
      return Cb(a)
    }
    function Eb() {
      var a = document.documentElement
        , b = document.body;
      return a && (a.scrollTop || a.scrollLeft) ? [a.scrollTop, a.scrollLeft] : b ? [b.scrollTop, b.scrollLeft] : [0, 0]
    }
    function Fb(a, b) {
      if (a && b)
        return Math.round(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)))
    }
    function Gb(a, b) {
      var c = [], b = b || function(a) {
        return a
      }
        , d;
      for (d in a)
        c.push(d + "=" + b(a[d]));
      return c.join("&")
    }
    function K(a, b, c) {
      var d = document.createElement(a);
      c && (d = document.createElementNS(c, a));
      return x.K.DF(d, b || {})
    }
    function Wa(a) {
      if (a.currentStyle)
        return a.currentStyle;
      if (a.ownerDocument && a.ownerDocument.defaultView)
        return a.ownerDocument.defaultView.getComputedStyle(a, p)
    }
    function Za(a) {
      return "function" === typeof a
    }
    function Xa(a) {
      return "number" === typeof a
    }
    function ab(a) {
      return "string" == typeof a
    }
    function Hb(a) {
      return "undefined" != typeof a
    }
    function Ib(a) {
      return "object" == typeof a
    }
    var Jb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function Kb(a) {
      var b = "", c, d, e = "", f, g = "", i = 0;
      f = /[^A-Za-z0-9\+\/\=]/g;
      if (!a || f.exec(a))
        return a;
      a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      do
        c = Jb.indexOf(a.charAt(i++)),
          d = Jb.indexOf(a.charAt(i++)),
          f = Jb.indexOf(a.charAt(i++)),
          g = Jb.indexOf(a.charAt(i++)),
          c = c << 2 | d >> 4,
          d = (d & 15) << 4 | f >> 2,
          e = (f & 3) << 6 | g,
          b += String.fromCharCode(c),
        64 != f && (b += String.fromCharCode(d)),
        64 != g && (b += String.fromCharCode(e));
      while (i < a.length);return b
    }
    var M = x.lang.oz;
    function G() {
      return !(!x.platform.CE && !x.platform.FY && !x.platform.Pm)
    }
    function Va() {
      return !(!x.platform.BM && !x.platform.tM && !x.platform.LY)
    }
    function bb() {
      return (new Date).getTime()
    }
    function Lb() {
      var a = document.body.appendChild(K("div"));
      a.innerHTML = '<v:shape id="vml_tester1" adj="1" />';
      var b = a.firstChild;
      if (!b.style)
        return q;
      b.style.behavior = "url(#default#VML)";
      b = b ? "object" === typeof b.adj : o;
      a.parentNode.removeChild(a);
      return b
    }
    function Mb() {
      return !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.1")
    }
    function Nb() {
      return !!K("canvas").getContext
    }
    function Ob(a) {
      return a * Math.PI / 180
    }
    z.SY = function() {
      var a = o
        , b = o
        , c = o
        , d = o
        , e = 0
        , f = 0
        , g = 0
        , i = 0;
      return {
        YQ: function() {
          e += 1;
          a && (a = q,
            setTimeout(function() {
              Qa(5054, {
                pic: e
              });
              a = o;
              e = 0
            }, 1E4))
        },
        Y0: function() {
          f += 1;
          b && (b = q,
            setTimeout(function() {
              Qa(5055, {
                move: f
              });
              b = o;
              f = 0
            }, 1E4))
        },
        $0: function() {
          g += 1;
          c && (c = q,
            setTimeout(function() {
              Qa(5056, {
                zoom: g
              });
              c = o;
              g = 0
            }, 1E4))
        },
        Z0: function(a) {
          i += a;
          d && (d = q,
            setTimeout(function() {
              Qa(5057, {
                tile: i
              });
              d = o;
              i = 0
            }, 5E3))
        }
      }
    }();
    z.qq = {
      CG: "#83a1ff",
      tq: "#808080"
    };
    function Pb(a, b, c) {
      b.Um || (b.Um = [],
        b.handle = {});
      b.Um.push({
        filter: c,
        wm: a
      });
      b.addEventListener || (b.addEventListener = function(a, c) {
          b.attachEvent("on" + a, c)
        }
      );
      b.handle.click || (b.addEventListener("click", function(a) {
        for (var c = a.target || a.srcElement; c != b; ) {
          Sb(b.Um, function(b, g) {
            RegExp(g.filter).test(c.getAttribute("filter")) && g.wm.call(c, a, c.getAttribute("filter"))
          });
          c = c.parentNode
        }
      }, q),
        b.handle.click = o)
    }
    function Sb(a, b) {
      for (var c = 0, d = a.length; c < d; c++)
        b(c, a[c])
    }
    void function(a, b, c) {
      void function(a, b, c) {
        function g(a) {
          if (!a.Qo) {
            for (var c = o, d = [], f = a.IZ, i = 0; f && i < f.length; i++) {
              var k = f[i]
                , l = aa[k] = aa[k] || {};
              if (l.Qo || l == a)
                d.push(l.Lc);
              else {
                c = q;
                if (!l.pW && (k = (La.get("alias") || {})[k] || k + ".js",
                  !J[k])) {
                  J[k] = o;
                  var m = b.createElement("script")
                    , n = b.getElementsByTagName("script")[0];
                  m.async = o;
                  m.src = k;
                  n.parentNode.insertBefore(m, n)
                }
                l.ez = l.ez || {};
                l.ez[a.name] = a
              }
            }
            if (c) {
              a.Qo = o;
              a.KK && (a.Lc = a.KK.apply(a, d));
              for (var s in a.ez)
                g(a.ez[s])
            }
          }
        }
        function i(a) {
          return (a || new Date) - E
        }
        function k(a, b, c) {
          if (a) {
            "string" == typeof a && (c = b,
              b = a,
              a = O);
            try {
              a == O ? (P[b] = P[b] || [],
                P[b].unshift(c)) : a.addEventListener ? a.addEventListener(b, c, q) : a.attachEvent && a.attachEvent("on" + b, c)
            } catch (d) {}
          }
        }
        function l(a, b, c) {
          if (a) {
            "string" == typeof a && (c = b,
              b = a,
              a = O);
            try {
              if (a == O) {
                var d = P[b];
                if (d)
                  for (var e = d.length; e--; )
                    d[e] === c && d.splice(e, 1)
              } else
                a.removeEventListener ? a.removeEventListener(b, c, q) : a.detachEvent && a.detachEvent("on" + b, c)
            } catch (f) {}
          }
        }
        function m(a) {
          var b = P[a]
            , c = 0;
          if (b) {
            for (var d = [], e = arguments, f = 1; f < e.length; f++)
              d.push(e[f]);
            for (f = b.length; f--; )
              b[f].apply(this, d) && c++;
            return c
          }
        }
        function n(a, b) {
          if (a && b) {
            var c = new Image(1,1), d = [], e = "img_" + +new Date, f;
            for (f in b)
              b[f] && d.push(f + "=" + encodeURIComponent(b[f]));
            O[e] = c;
            c.onload = c.onerror = function() {
              O[e] = c = c.onload = c.onerror = p;
              delete O[e]
            }
            ;
            c.src = a + "?" + d.join("&")
          }
        }
        function s() {
          var a = arguments
            , b = a[0];
          if (this.JK || /^(on|un|set|get|create)$/.test(b)) {
            for (var b = w.prototype[b], c = [], d = 1, e = a.length; d < e; d++)
              c.push(a[d]);
            "function" == typeof b && b.apply(this, c)
          } else
            this.iK.push(a)
        }
        function u(a, b) {
          var c = {}, d;
          for (d in a)
            a.hasOwnProperty(d) && (c[d] = a[d]);
          for (d in b)
            b.hasOwnProperty(d) && (c[d] = b[d]);
          return c
        }
        function w(a) {
          this.name = a;
          this.Us = {
            protocolParameter: {
              postUrl: p,
              protocolParameter: p
            }
          };
          this.iK = [];
          this.alog = O
        }
        function y(a) {
          a = a || "default";
          if ("*" == a) {
            var a = [], b;
            for (b in R)
              a.push(R[b]);
            return a
          }
          (b = R[a]) || (b = R[a] = new w(a));
          return b
        }
        var B = c.alog;
        if (!B || !B.Qo) {
          var A = b.all && a.attachEvent
            , E = B && B.LE || +new Date
            , C = a.G3 || (+new Date).toString(36) + Math.random().toString(36).substr(2, 3)
            , D = 0
            , J = {}
            , O = function(a) {
            var b = arguments, c, d, e, f;
            if ("define" == a || "require" == a) {
              for (d = 1; d < b.length; d++)
                switch (typeof b[d]) {
                  case "string":
                    c = b[d];
                    break;
                  case "object":
                    e = b[d];
                    break;
                  case "function":
                    f = b[d]
                }
              "require" == a && (c && !e && (e = [c]),
                c = p);
              c = !c ? "#" + D++ : c;
              d = aa[c] = aa[c] || {};
              d.Qo || (d.name = c,
                d.IZ = e,
                d.KK = f,
              "define" == a && (d.pW = o),
                g(d))
            } else
              "function" == typeof a ? a(O) : ("" + a).replace(/^(?:([\w$_]+)\.)?(\w+)$/, function(a, c, d) {
                b[0] = d;
                s.apply(O.bG(c), b)
              })
          }
            , P = {}
            , R = {}
            , aa = {
            H1: {
              name: "alog",
              Qo: o,
              Lc: O
            }
          };
          w.prototype.start = w.prototype.create = function(a) {
            if (!this.JK) {
              "object" == typeof a && this.set(a);
              this.JK = new Date;
              for (this.Vs("create", this); a = this.iK.shift(); )
                s.apply(this, a)
            }
          }
          ;
          w.prototype.send = function(a, b) {
            var c = u({
              ts: i().toString(36),
              t: a,
              sid: C
            }, this.Us);
            if ("object" == typeof b)
              c = u(c, b);
            else {
              var d = arguments;
              switch (a) {
                case "pageview":
                  d[1] && (c.page = d[1]);
                  d[2] && (c.title = d[2]);
                  break;
                case "event":
                  d[1] && (c.eventCategory = d[1]);
                  d[2] && (c.eventAction = d[2]);
                  d[3] && (c.eventLabel = d[3]);
                  d[4] && (c.eventValue = d[4]);
                  break;
                case "timing":
                  d[1] && (c.timingCategory = d[1]);
                  d[2] && (c.timingVar = d[2]);
                  d[3] && (c.timingValue = d[3]);
                  d[4] && (c.timingLabel = d[4]);
                  break;
                case "exception":
                  d[1] && (c.exDescription = d[1]);
                  d[2] && (c.exFatal = d[2]);
                  break;
                default:
                  return
              }
            }
            this.Vs("send", c);
            var e;
            if (d = this.Us.protocolParameter) {
              var f = {};
              for (e in c)
                d[e] !== p && (f[d[e] || e] = c[e]);
              e = f
            } else
              e = c;
            n(this.Us.postUrl, e)
          }
          ;
          w.prototype.set = function(a, b) {
            if ("string" == typeof a)
              "protocolParameter" == a && (b = u({
                postUrl: p,
                protocolParameter: p
              }, b)),
                this.Us[a] = b;
            else if ("object" == typeof a)
              for (var c in a)
                this.set(c, a[c])
          }
          ;
          w.prototype.get = function(a, b) {
            var c = this.Us[a];
            "function" == typeof b && b(c);
            return c
          }
          ;
          w.prototype.Vs = function(a, b) {
            return O.Vs(this.name + "." + a, b)
          }
          ;
          w.prototype.M = function(a, b) {
            O.M(this.name + "." + a, b)
          }
          ;
          w.prototype.cd = function(a, b) {
            O.cd(this.name + "." + a, b)
          }
          ;
          O.name = "alog";
          O.sO = C;
          O.Qo = o;
          O.timestamp = i;
          O.cd = l;
          O.M = k;
          O.Vs = m;
          O.bG = y;
          O("init");
          var ba = w.prototype;
          U(ba, {
            start: ba.start,
            create: ba.create,
            send: ba.send,
            set: ba.set,
            get: ba.get,
            on: ba.M,
            un: ba.cd,
            fire: ba.Vs
          });
          var La = y();
          La.set("protocolParameter", {
            G1: p
          });
          if (B) {
            ba = [].concat(B.vb || [], B.fn || []);
            B.vb = B.fn = p;
            for (var Ra in O)
              O.hasOwnProperty(Ra) && (B[Ra] = O[Ra]);
            O.vb = O.fn = {
              push: function(a) {
                O.apply(O, a)
              }
            };
            for (B = 0; B < ba.length; B++)
              O.apply(O, ba[B])
          }
          c.alog = O;
          A && k(b, "mouseup", function(a) {
            a = a.target || a.srcElement;
            1 == a.nodeType && /^ajavascript:/i.test(a.tagName + a.href)
          });
          var Ua = q;
          a.onerror = function(a, b, d, e) {
            var g = o;
            !b && /^script error/i.test(a) && (Ua ? g = q : Ua = o);
            g && c.alog("exception.send", "exception", {
              Kt: a,
              KE: b,
              Gt: d,
              ns: e
            });
            return q
          }
          ;
          c.alog("exception.on", "catch", function(a) {
            c.alog("exception.send", "exception", {
              Kt: a.Kt,
              KE: a.path,
              Gt: a.Gt,
              method: a.method,
              rL: "catch"
            })
          })
        }
      }(a, b, c);
      void function(a, b, c) {
        var g = "18_1";
        G() && (g = "18_2");
        var i = "http://static.tieba.baidu.com";
        "https:" === a.location.protocol && (i = "https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK");
        var k = Math.random
          , i = i + "/tb/pms/img/st.gif"
          , l = {
          Ch: "0.1"
        }
          , m = {
          Ch: "0.1"
        }
          , n = {
          Ch: "0.1"
        }
          , s = {
          Ch: "0"
        };
        if (l && l.Ch && k() < l.Ch) {
          var u = c.alog.bG("monkey"), w, l = a.screen, y = b.referrer;
          u.set("ver", 5);
          u.set("pid", 241);
          l && u.set("px", l.width + "*" + l.height);
          u.set("ref", y);
          c.alog("monkey.on", "create", function() {
            w = c.alog.timestamp;
            u.set("protocolParameter", {
              reports: p
            })
          });
          c.alog("monkey.on", "send", function(a) {
            "pageview" == a.t && (a.cmd = "open");
            a.now && (a.ts = w(a.now).toString(36),
              a.now = "")
          });
          c.alog("monkey.create", {
            page: g,
            pid: "241",
            p: "18",
            dv: 6,
            postUrl: i,
            reports: {
              refer: 1
            }
          });
          c.alog("monkey.send", "pageview", {
            now: +new Date
          })
        }
        if (m && m.Ch && k() < m.Ch) {
          var B = q;
          a.onerror = function(a, b, d, e) {
            var g = o;
            !b && /^script error/i.test(a) && (B ? g = q : B = o);
            g && c.alog("exception.send", "exception", {
              Kt: a,
              KE: b,
              Gt: d,
              ns: e
            });
            return q
          }
          ;
          c.alog("exception.on", "catch", function(a) {
            c.alog("exception.send", "exception", {
              Kt: a.Kt,
              KE: a.path,
              Gt: a.Gt,
              method: a.method,
              rL: "catch"
            })
          });
          c.alog("exception.create", {
            postUrl: i,
            dv: 7,
            page: g,
            pid: "170",
            p: "18"
          })
        }
        n && (n.Ch && k() < n.Ch) && (c.alog("cus.on", "time", function(a) {
          var b = {}, d = q, e;
          if ("[object Object]" === a.toString()) {
            for (var g in a)
              "page" == g ? b.page = a[g] : (e = parseInt(a[g]),
              0 < e && /^z_/.test(g) && (d = o,
                b[g] = e));
            d && c.alog("cus.send", "time", b)
          }
        }),
          c.alog("cus.on", "count", function(a) {
            var b = {}
              , d = q;
            "string" === typeof a && (a = [a]);
            if (a instanceof Array)
              for (var e = 0; e < a.length; e++)
                /^z_/.test(a[e]) ? (d = o,
                  b[a[e]] = 1) : /^page:/.test(a[e]) && (b.page = a[e].substring(5));
            d && c.alog("cus.send", "count", b)
          }),
          c.alog("cus.create", {
            dv: 3,
            postUrl: i,
            page: g,
            p: "18"
          }));
        if (s && s.Ch && k() < s.Ch) {
          var A = ["Moz", "O", "ms", "Webkit"]
            , E = ["-webkit-", "-moz-", "-o-", "-ms-"]
            , C = function() {
            return typeof b.createElement !== "function" ? b.createElement(arguments[0]) : b.createElement.apply(b, arguments)
          }
            , D = C("dpFeatureTest").style
            , J = function(a) {
            return O(a, j, j)
          }
            , O = function(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1)
              , e = (a + " " + A.join(d + " ") + d).split(" ");
            if (typeof b === "string" || typeof b === "undefined")
              return P(e, b);
            e = (a + " " + A.join(d + " ") + d).split(" ");
            a: {
              var a = e, f;
              for (f in a)
                if (a[f]in b) {
                  if (c === q) {
                    b = a[f];
                    break a
                  }
                  f = b[a[f]];
                  b = typeof f === "function" ? fnBind(f, c || b) : f;
                  break a
                }
              b = q
            }
            return b
          }
            , P = function(a, b) {
            var c, d, e;
            d = a.length;
            for (c = 0; c < d; c++) {
              e = a[c];
              ~("" + e).indexOf("-") && (e = R(e));
              if (D[e] !== j)
                return b == "pfx" ? e : o
            }
            return q
          }
            , R = function(a) {
            return a.replace(/([a-z])-([a-z])/g, function(a, b, c) {
              return b + c.toUpperCase()
            }).replace(/^-/, "")
          }
            , aa = function(a, b, c) {
            if (a.indexOf("@") === 0)
              return atRule(a);
            a.indexOf("-") != -1 && (a = R(a));
            return !b ? O(a, "pfx") : O(a, b, c)
          }
            , ba = function() {
            var a = C("canvas");
            return !(!a.getContext || !a.getContext("2d"))
          }
            , La = function() {
            var a = C("div");
            return "draggable"in a || "ondragstart"in a && "ondrop"in a
          }
            , Ra = function() {
            try {
              localStorage.setItem("localStorage", "localStorage");
              localStorage.removeItem("localStorage");
              return o
            } catch (a) {
              return q
            }
          }
            , Ua = function() {
            return "content"in b.createElement("template")
          }
            , Ca = function() {
            return "createShadowRoot"in b.createElement("a")
          }
            , uc = function() {
            return "registerElement"in b
          }
            , Ce = function() {
            return "import"in b.createElement("link")
          }
            , Ef = function() {
            return "getItems"in b
          }
            , md = function() {
            return "EventSource"in window
          }
            , Qb = function(a, b) {
            var c = new Image;
            c.onload = function() {
              b(a, c.width > 0 && c.height > 0)
            }
            ;
            c.onerror = function() {
              b(a, q)
            }
            ;
            c.src = "data:image/webp;base64," + {
              J3: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
              I3: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
              alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
              ok: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
            }[a]
          }
            , vc = function(a, b) {
            return Rb.ni["WebP-" + a] = b
          }
            , De = function() {
            return "openDatabase"in a
          }
            , Ee = function() {
            return "performance"in a && "timing"in a.performance
          }
            , Uc = function() {
            return "performance"in a && "mark"in a.performance
          }
            , nd = function() {
            return !(!Array.prototype || !Array.prototype.every || !Array.prototype.filter || !Array.prototype.forEach || !Array.prototype.indexOf || !Array.prototype.lastIndexOf || !Array.prototype.map || !Array.prototype.some || !Array.prototype.reduce || !Array.prototype.reduceRight || !Array.isArray)
          }
            , Fe = function() {
            return "Promise"in a && "cast"in a.uq && "resolve"in a.uq && "reject"in a.uq && "all"in a.uq && "race"in a.uq && function() {
              var b;
              new a.uq(function(a) {
                  b = a
                }
              );
              return typeof b === "function"
            }()
          }
            , od = function() {
            var b = !!a.L0
              , c = a.XMLHttpRequest && "withCredentials"in new XMLHttpRequest;
            return !!a.O0 && b && c
          }
            , Ff = function() {
            return "geolocation"in navigator
          }
            , Ge = function() {
            var b = C("canvas")
              , c = "probablySupportsContext"in b ? "probablySupportsContext" : "supportsContext";
            return c in b ? b[c]("webgl") || b[c]("experimental-webgl") : "WebGLRenderingContext"in a
          }
            , Ki = function() {
            return !!b.createElementNS && !!b.createElementNS("http://www.w3.org/2000/svg", "svg").Z1
          }
            , Li = function() {
            return !!a.V0
          }
            , Mi = function() {
            return "WebSocket"in a && a.S0.I0 === 2
          }
            , Ni = function() {
            return !!b.createElement("video").canPlayType
          }
            , Oi = function() {
            return !!b.createElement("audio").canPlayType
          }
            , Pi = function() {
            return !!(a.history && "pushState"in a.history)
          }
            , Qi = function() {
            return !(!a.J0 || !a.K0)
          }
            , Ri = function() {
            return "postMessage"in window
          }
            , Si = function() {
            return !!a.webkitNotifications || "Notification"in a && "permission"in a.JP && "requestPermission"in a.JP
          }
            , Ti = function() {
            for (var b = ["webkit", "moz", "o", "ms"], c = a.requestAnimationFrame, e = 0; e < b.length && !c; ++e)
              c = a[b[e] + "RequestAnimationFrame"];
            return !!c
          }
            , Ui = function() {
            return "JSON"in a && "parse"in JSON && "stringify"in JSON
          }
            , Vi = function() {
            return !(!aa("exitFullscreen", b, q) && !aa("cancelFullScreen", b, q))
          }
            , Wi = function() {
            return !!aa("Intl", a)
          }
            , Xi = function() {
            return J("flexBasis")
          }
            , Yi = function() {
            return !!J("perspective")
          }
            , Zi = function() {
            return J("shapeOutside")
          }
            , $i = function() {
            var a = C("div");
            a.style.cssText = E.join("filter:blur(2px); ");
            return !!a.style.length && (b.documentMode === j || b.documentMode > 9)
          }
            , aj = function() {
            return "XMLHttpRequest"in a && "withCredentials"in new XMLHttpRequest
          }
            , bj = function() {
            return C("progress").max !== j
          }
            , cj = function() {
            return C("meter").max !== j
          }
            , dj = function() {
            return "sendBeacon"in navigator
          }
            , ej = function() {
            return J("borderRadius")
          }
            , fj = function() {
            return J("boxShadow")
          }
            , gj = function() {
            var a = C("div").style;
            a.cssText = E.join("opacity:.55;");
            return /^0.55$/.test(a.opacity)
          }
            , hj = function() {
            return P(["textShadow"], j)
          }
            , ij = function() {
            return J("animationName")
          }
            , jj = function() {
            return J("transition")
          }
            , kj = function() {
            return navigator.userAgent.indexOf("Android 2.") === -1 && J("transform")
          }
            , Rb = {
            ni: {},
            pa: function(a, b, c) {
              this.ni[a] = b.apply(this, [].slice.call(arguments, 2))
            },
            Dd: function(a, b) {
              a.apply(this, [].slice.call(arguments, 1))
            },
            PZ: function() {
              this.pa("bdrs", ej);
              this.pa("bxsd", fj);
              this.pa("opat", gj);
              this.pa("txsd", hj);
              this.pa("anim", ij);
              this.pa("trsi", jj);
              this.pa("trfm", kj);
              this.pa("flex", Xi);
              this.pa("3dtr", Yi);
              this.pa("shpe", Zi);
              this.pa("fltr", $i);
              this.pa("cavs", ba);
              this.pa("dgdp", La);
              this.pa("locs", Ra);
              this.pa("wctem", Ua);
              this.pa("wcsdd", Ca);
              this.pa("wccse", uc);
              this.pa("wchti", Ce);
              this.Dd(Qb, "lossy", vc);
              this.Dd(Qb, "lossless", vc);
              this.Dd(Qb, "alpha", vc);
              this.Dd(Qb, "animation", vc);
              this.pa("wsql", De);
              this.pa("natm", Ee);
              this.pa("ustm", Uc);
              this.pa("arra", nd);
              this.pa("prms", Fe);
              this.pa("xhr2", od);
              this.pa("wbgl", Ge);
              this.pa("geol", Ff);
              this.pa("svg", Ki);
              this.pa("work", Li);
              this.pa("wbsk", Mi);
              this.pa("vido", Ni);
              this.pa("audo", Oi);
              this.pa("hsty", Pi);
              this.pa("file", Qi);
              this.pa("psmg", Ri);
              this.pa("wknf", Si);
              this.pa("rqaf", Ti);
              this.pa("json", Ui);
              this.pa("flsc", Vi);
              this.pa("i18n", Wi);
              this.pa("cors", aj);
              this.pa("prog", bj);
              this.pa("metr", cj);
              this.pa("becn", dj);
              this.pa("mcrd", Ef);
              this.pa("esrc", md)
            }
          }
            , u = c.alog.bG("feature");
          u.M("commit", function() {
            Rb.PZ();
            var a = setInterval(function() {
              if ("WebP-lossy"in Rb.ni && "WebP-lossless"in Rb.ni && "WebP-alpha"in Rb.ni && "WebP-animation"in Rb.ni) {
                for (var b in Rb.ni)
                  Rb.ni[b] = Rb.ni[b] ? "y" : "n";
                u.send("feature", Rb.ni);
                clearInterval(a)
              }
            }, 500)
          });
          c.alog("feature.create", {
            k2: 4,
            d4: i,
            page: g,
            vb: "18"
          });
          c.alog("feature.fire", "commit")
        }
      }(a, b, c)
    }(window, document, z);
    z.Jn = z.alog || t();
    z.alog("cus.fire", "count", "z_loadscriptcount");
    "https:" === location.protocol && z.alog("cus.fire", "count", "z_httpscount");
    function Tb(a) {
      var b = window.TILE_VERSION
        , c = "20170927";
      b && b.ditu && (b = b.ditu,
      b[a] && b[a].updateDate && (c = b[a].updateDate));
      return c
    }
    var Ub = [72.6892532, 0.1939743381, 136.1168614, 54.392257]
      , Vb = [72.69566833, 0.1999420909, 136.1232863, 54.39791217]
      , Wb = 158
      , Xb = [98.795985, 122.960792, 107.867379, 118.093451, 119.139658, 128.035888, 79.948212, 99.029524, 119.923388, 122.094977, 127.918527, 130.94789, 106.50606, 108.076783, 119.8329, 126.382207, 111.803567, 119.324928, 100.749858, 102.227985, 99.860885, 100.788921, 97.529435, 98.841564, 99.100017, 99.90035, 122.917416, 123.774367, 123.728314, 125.507211, 123.736065, 124.767299, 125.488463, 126.410675, 125.484326, 126.07764, 130.830784, 133.620042, 127.912178, 128.668957, 128.658937, 129.638599, 132.894179, 134.119086, 117.379378, 119.244569, 116.086736, 117.431212, 114.420233, 116.137458, 116.492775, 119.605527, 110.579401, 111.86488, 74.468228, 80.001908, 82.867432, 91.353788, 85.721075, 98.976964, 127.664757, 129.546833, 129.476893, 130.22449, 133.730358, 134.745235, 134.381034, 135.1178, 130.868117, 131.34409, 115.513245, 117.544751, 115.779271, 116.748045, 108.536254, 110.614326, 121.365534, 124.626434, 126.165992, 127.347013, 91.281869, 95.611754, 79.879648, 82.945041, 76.413314, 78.345207, 78.275229, 80.002329, 83.956612, 85.734098, 85.510186, 89.356499, 97.997001, 98.948845, 106.653208, 108.610811, 111.400183, 111.824179, 111.592224, 111.817136, 116.00682, 117.024631, 116.258574, 116.689291, 119.436876, 119.922961, 120.659806, 121.395479, 120.349116, 120.676014, 124.59389, 125.787788, 126.221756, 126.788962, 95.572955, 102.046581, 95.583772, 96.165551, 95.564318, 97.806095, 91.30446, 93.356438, 93.330319, 94.698145, 89.349129, 90.548677, 82.268802, 82.892025, 78.335615, 80.032266, 76.625755, 78.361413, 73.498248, 74.490992, 74.846872, 76.488771, 91.563521, 94.878444, 88.768214, 89.244787, 83.247076, 83.974127, 82.29595, 83.256003, 81.885315, 83.26249, 80.760619, 81.472404, 86.470983, 88.276988, 102.207537, 104.234614, 112.164795, 116.833667, 108.965663, 113.032246, 111.166575, 117.983363]
      , Yb = [22.551183, 42.284787, 17.227969, 22.738314, 41.300981, 50.749638, 30.368087, 42.332701, 21.705055, 22.696452, 42.426047, 48.944674, 21.432184, 22.651387, 50.657409, 52.92296, 42.212192, 45.206905, 21.137031, 22.57186, 21.444502, 22.586566, 23.741571, 25.301472, 22.006806, 22.56637, 38.985114, 41.346531, 40.295617, 41.338581, 39.740021, 40.351012, 40.974644, 41.331562, 40.726852, 41.067192, 44.877158, 48.018285, 41.344597, 42.451798, 42.016305, 42.443235, 45.880906, 48.214001, 45.140027, 46.792775, 45.141083, 46.400433, 45.156418, 45.748281, 47.485889, 50.071879, 42.223667, 43.469487, 37.019867, 40.668675, 42.226823, 47.321605, 27.72944, 30.469853, 48.919002, 49.650614, 48.840188, 49.443166, 46.949801, 48.382798, 47.660603, 48.472692, 42.859946, 44.913298, 47.605896, 48.445914, 48.41698, 48.909667, 42.23507, 42.914193, 52.8281, 53.585952, 50.709311, 51.662219, 42.29968, 44.399225, 42.302746, 45.391958, 34.680866, 37.03377, 30.743515, 37.07228, 28.245649, 30.408935, 47.277693, 48.504255, 25.241528, 27.780726, 42.223363, 42.548418, 43.435888, 44.696952, 44.693193, 45.00187, 48.886267, 49.326755, 49.288642, 49.632304, 50.717486, 51.314369, 52.914204, 53.33964, 52.910094, 53.115926, 52.908382, 53.258095, 51.64533, 52.408305, 42.236825, 42.699126, 43.068466, 43.898632, 42.670403, 43.082219, 44.379045, 45.187742, 44.382336, 44.981379, 47.310362, 48.06019, 45.359099, 46.814439, 40.569751, 42.047741, 40.587956, 41.41263, 38.519192, 40.185033, 35.790476, 37.029005, 26.825605, 27.763896, 27.199658, 27.751649, 29.150192, 30.381073, 29.573886, 30.065162, 30.047775, 30.384089, 30.001277, 30.388525, 48.494118, 49.173841, 22.398528, 22.601198, 7.441114, 11.505968, 3.767491, 9.005209, 12.642067, 17.410886]
      , Zb = 95
      , $b = [110.3961374, 105.0743788, 96.8991824, 95.61810411, 93.82412598, 91.3892353, 91.38931858, 89.08325955, 87.22469808, 86.26278402, 85.17353, 85.23741211, 82.86627441, 81.90481038, 79.59687147, 80.39829237, 79.93319363, 77.80279948, 75.2557704, 73.49357829, 73.1892532, 73.87758816, 74.4064738, 74.10215224, 75.46409695, 76.77739692, 78.28299615, 78.15499485, 78.37920654, 78.89145345, 79.69282199, 81.19938178, 81.80830295, 83.89093424, 85.94149523, 87.86447266, 89.03414958, 90.05918132, 91.10026937, 92.15733832, 93.74361735, 95.82597331, 97.95655545, 97.12363037, 98.2129739, 99.2068571, 101.6587874, 102.5239084, 102.2356106, 105.0249238, 106.0992342, 107.8617093, 111.6439372, 109.591869, 112.284586, 117.7961157, 118.9495128, 114.2076584, 118.693565, 123.1475225, 122.730705, 120.9361393, 123.4207441, 122.3787782, 122.1385425, 121.5904281, 121.1773763, 120.6805404, 120.2483355, 122.795807, 122.8759077, 121.3060262, 122.1392177, 123.7418799, 126.4177599, 128.5647409, 129.7194884, 131.2259136, 131.9950494, 133.6289931, 135.6168614, 131.3875545, 130.8743365, 128.6303223, 126.0997773, 124.4015375, 122.22161, 119.6586483, 119.7866827, 118.5685878, 116.5177976, 114.819101, 119.0812964, 116.453265, 111.7431171]
      , ac = [43.2190351, 42.38053385, 43.17417589, 44.42226915, 45.09863634, 45.56708116, 47.33599718, 48.68832709, 49.62448486, 48.9482175, 48.4800472, 47.33564399, 47.43948676, 46.03452067, 45.20221788, 43.34563043, 42.32965739, 41.39690972, 40.82972331, 39.95567654, 39.25892877, 38.36098768, 38.05441569, 37.16878445, 36.38899414, 35.36126817, 34.30953451, 32.58503879, 31.56975694, 30.77800266, 30.43559814, 29.7744892, 30.0931977, 28.71103299, 27.70739665, 27.5775472, 27.01096137, 27.77857883, 27.50707954, 26.50328315, 26.70387804, 27.95548557, 27.29428901, 23.64685493, 23.62310601, 21.67493381, 20.77751465, 21.32070991, 22.1824113, 22.31232964, 22.51316054, 16.80037679, 13.19749864, 0.6939743381, 1.541660428, 10.50208252, 15.58926975, 17.89090007, 19.94928467, 22.18490153, 25.37285292, 25.61456434, 30.62532552, 31.08099284, 31.89238173, 32.50092692, 32.80325765, 34.25546956, 35.15486138, 36.90170139, 37.8348272, 37.941604, 38.6480797, 38.96797201, 40.98146918, 41.25573296, 42.07218153, 42.49132813, 44.65259766, 44.69330702, 48.62286865, 48.09383952, 49.19628499, 50.03402317, 53.27678901, 53.62976345, 53.89420546, 52.98933322, 52.01872884, 50.23210259, 50.18807048, 47.49769857, 47.34362712, 46.50502143, 45.24770128]
      , bc = [98.7895, 122.954182, 107.860913, 118.087007, 119.133165, 128.029533, 79.941749, 99.023087, 119.916883, 122.08841, 127.912143, 130.941471, 106.499502, 108.070244, 119.826245, 126.375818, 111.797006, 119.318387, 100.743285, 102.221517, 99.854448, 100.782445, 97.522928, 98.835028, 99.093518, 99.893783, 122.910927, 123.767769, 123.721954, 125.50077, 123.729657, 124.760724, 125.481902, 126.404079, 125.477737, 126.071019, 130.824331, 133.613395, 127.905767, 128.662524, 128.652527, 129.6321, 132.887552, 134.11249, 117.37297, 119.237999, 116.080154, 117.424589, 114.413586, 116.130948, 116.486264, 119.598927, 110.5728, 111.858437, 74.465162, 79.995337, 82.860821, 91.347291, 85.716024, 98.970481, 127.658331, 129.540202, 129.470528, 130.21808, 133.723748, 134.738785, 134.374555, 135.111443, 130.861475, 131.337438, 115.506627, 117.538123, 115.772783, 116.741632, 108.529656, 110.60782, 121.358945, 124.619773, 126.159424, 127.340582, 91.275275, 95.605228, 79.874427, 82.938601, 76.413314, 78.338763, 78.275229, 79.995765, 83.956612, 85.727511, 85.503554, 89.349858, 97.990418, 98.942257, 106.646704, 108.604437, 111.393667, 111.817723, 111.585811, 111.810645, 116.000232, 117.018216, 116.252108, 116.682705, 119.430384, 119.916417, 120.653168, 121.38883, 120.342727, 120.669383, 124.587426, 125.781376, 126.215282, 126.782323, 95.566367, 102.040026, 95.577158, 96.159009, 95.557772, 97.799728, 91.298032, 93.350057, 93.323794, 94.691771, 89.342471, 90.542019, 82.264229, 82.885485, 78.335615, 80.025844, 76.623947, 78.355027, 73.495149, 74.484473, 74.846872, 76.482208, 91.560117, 94.871859, 88.761692, 89.23822, 83.240549, 83.967602, 82.292367, 83.2495, 81.878825, 83.256003, 80.75421, 81.465955, 86.465421, 88.270356, 102.201019, 104.228033, 112.158282, 116.827153, 108.965663, 113.025767, 111.166575, 117.97687]
      , cc = [22.545421, 42.279053, 17.226272, 22.731982, 41.294917, 50.743316, 30.361986, 42.326603, 21.699185, 22.690751, 42.419757, 48.938435, 21.426505, 22.64567, 50.651745, 52.916705, 42.20641, 45.201064, 21.131326, 22.565685, 21.438288, 22.580379, 23.735785, 25.295582, 22.001087, 22.560315, 38.979333, 41.340757, 40.28938, 41.332289, 39.734164, 40.344718, 40.968803, 41.325813, 40.721073, 41.061503, 44.871533, 48.012179, 41.338366, 42.445601, 42.010343, 42.436934, 45.875217, 48.208327, 45.134237, 46.786509, 45.135376, 46.394665, 45.150734, 45.742257, 47.480099, 50.065931, 42.217982, 43.46329, 37.014057, 40.662848, 42.221079, 47.315558, 27.723432, 30.46385, 48.913298, 49.644555, 48.83396, 49.436824, 46.944059, 48.376613, 47.654503, 48.466331, 42.854333, 44.907682, 47.600253, 48.440245, 48.410926, 48.903468, 42.229292, 42.908294, 52.822466, 53.58012, 50.703491, 51.656037, 42.29378, 44.393379, 42.296912, 45.385809, 34.679282, 37.027699, 30.740622, 37.066377, 28.241967, 30.403134, 47.271949, 48.49848, 25.235818, 27.774976, 42.217425, 42.542102, 43.429763, 44.691016, 44.687044, 44.995758, 48.880431, 49.320551, 49.282865, 49.626267, 50.711607, 51.308382, 52.908547, 53.333963, 52.904419, 53.109706, 52.902338, 53.251938, 51.639701, 52.402205, 42.231045, 42.693581, 43.062756, 43.892771, 42.664519, 43.075927, 44.372942, 45.1815, 44.376327, 44.975476, 47.304623, 48.054453, 45.353174, 46.808493, 40.563653, 42.041556, 40.582164, 41.4064, 38.51618, 40.179105, 35.789745, 37.023144, 26.825402, 27.757641, 27.193806, 27.745766, 29.144229, 30.375186, 29.567889, 30.059102, 30.041938, 30.378006, 29.995047, 30.382338, 48.48834, 49.169021, 22.392816, 22.595333, 7.439914, 11.500161, 3.766676, 9.000793, 12.640512, 17.406563]
      , dc = 3E3
      , ec = 2.0E-5
      , fc = 3.0E-6
      , gc = 0.0174532925194
      , hc = 0.0065
      , ic = 0.0060
      , jc = 4E4
      , kc = 0
      , lc = 3
      , mc = 1.0E-10
      , nc = 6370996.81
      , oc = 1E8;
    function pc(a, b, c) {
      for (var d = Wb, e = 0; e < d; e += 2)
        if (a.lng >= b[e] && a.lng <= b[e + 1] && a.lat >= c[e] && a.lat <= c[e + 1])
          return o;
      return q
    }
    function qc(a) {
      var b = a.lng
        , c = a.lat
        , a = Math.sqrt(b * b + c * c) + Math.sin(c * dc * gc) * ec
        , b = Math.atan2(c, b) + Math.cos(b * dc * gc) * fc;
      return {
        lng: a * Math.cos(b) + hc,
        lat: a * Math.sin(b) + ic
      }
    }
    function rc(a) {
      var b = sc
        , c = {}
        , d = a.lng
        , e = a.lat
        , f = 1
        , g = a.lng
        , i = a.lat
        , k = d - f
        , l = 0
        , m = e + f
        , n = 0
        , s = d - f
        , u = 0
        , w = e - f
        , y = 0
        , B = d + f
        , A = 0
        , E = e - f
        , C = 0
        , D = d + f
        , J = 0
        , O = e + f
        , P = 0
        , m = k = 0
        , m = tc(b, d, e)
        , k = m.lng
        , m = m.lat;
      if (1.0E-6 >= wc(k, m, g, i))
        return c.lng = d,
          c.lat = e,
          c;
      for (; ; ) {
        k = d - f;
        m = e + f;
        s = d - f;
        w = e - f;
        B = d + f;
        E = e - f;
        D = d + f;
        O = e + f;
        d = tc(b, k, m);
        l = d.lng;
        n = d.lat;
        d = tc(b, s, w);
        u = d.lng;
        y = d.lat;
        d = tc(b, B, E);
        A = d.lng;
        C = d.lat;
        d = tc(b, D, O);
        J = d.lng;
        P = d.lat;
        d = wc(l, n, g, i);
        l = wc(u, y, g, i);
        u = wc(A, C, g, i);
        J = wc(J, P, g, i);
        if (1.0E-6 > d)
          return c.lng = k,
            c.lat = m,
            c;
        if (1.0E-6 > l)
          return c.lng = s,
            c.lat = w,
            c;
        if (1.0E-6 > u)
          return c.lng = B,
            c.lat = E,
            c;
        if (1.0E-6 > J)
          return c.lng = D,
            c.lat = O,
            c;
        A = 1 / d;
        l = 1 / l;
        u = 1 / u;
        J = 1 / J;
        d = (k * A + s * l + B * u + D * J) / (A + l + u + J);
        e = (m * A + w * l + E * u + O * J) / (A + l + u + J);
        m = tc(b, d, e);
        k = m.lng;
        m = m.lat;
        if (1.0E-6 >= wc(k, m, g, i))
          return c.lng = d,
            c.lat = e,
            c;
        f *= 0.6;
        if (1.0E-6 > f) {
          a: {
            c = (a.lng + 0.03 - (a.lng - 0.03)) / 1.0E-4 + 0.5;
            f = (a.lat + 0.03 - (a.lat - 0.03)) / 1.0E-4 + 0.5;
            g = a.lng * oc;
            i = a.lat * oc;
            w = 1.0E-4 * oc;
            k = g - w;
            m = g + w;
            s = i - w;
            B = i + w;
            A = l = u = J = j;
            D = l = w = E = u = J = 0;
            b(a);
            A = j;
            for (O = 0; O <= c; O++) {
              for (d = 0; d <= f; d++)
                if (A = b(j),
                  J = j.lng * oc,
                  u = j.lat * oc,
                  l = A.lng * oc,
                  A = A.lat * oc,
                  !(l < k || A < s || l > m || A > B)) {
                  J -= l;
                  u -= A;
                  l = Math.sqrt((g - l) * (g - l) + (i - A) * (i - A));
                  if (1 > l) {
                    c = {};
                    c.lng = j.lng;
                    c.lat = j.lat;
                    break a
                  }
                  E += 1 * J / l;
                  w += 1 * u / l;
                  D += 1 / l
                }
              E /= D * oc;
              w /= D * oc
            }
            b = E * oc / oc;
            f = w * oc / oc;
            c = {};
            c.lng = a.lng + b;
            c.lat = a.lat + f
          }
          return c
        }
      }
    }
    function tc(a, b, c) {
      a = a({
        lng: b,
        lat: c
      });
      b = {};
      b.lng = a.lng;
      b.lat = a.lat;
      return b
    }
    function xc(a, b, c, d) {
      var e = arguments.length;
      this.vg = {};
      this.Dg = {};
      0 !== e && 4 === e && this.normalize(a, b, c, d)
    }
    xc.prototype.contains = function(a) {
      return a.lng > this.vg.lng && a.lng < this.Dg.lng && a.lat > this.vg.lat && a.lat < this.Dg.lat ? lc : Math.abs(a.lng - this.vg.lng) < mc || Math.abs(a.lng - this.Dg.lng) < mc || Math.abs(a.lat - this.vg.lat) < mc || Math.abs(a.y - this.Dg.lat) > mc ? 2 : kc
    }
    ;
    xc.prototype.normalize = function(a, b, c, d) {
      a > c ? (this.vg.lng = c,
        this.Dg.lng = a) : (this.vg.lng = a,
        this.Dg.lng = c);
      b > d ? (this.vg.lat = d,
        this.Dg.lat = b) : (this.vg.lat = b,
        this.Dg.lat = d)
    }
    ;
    function yc(a, b, c, d) {
      this.nu = {
        lng: a,
        lat: b
      };
      this.sx = {
        lng: c,
        lat: d
      };
      this.ly = new xc(a,b,c,d)
    }
    function zc(a, b) {
      var c = a.lat * gc
        , d = b.lat * gc
        , e = c - d
        , f = a.lng * gc - b.lng * gc;
      return 2 * Math.asin(Math.sqrt(Math.sin(e / 2) * Math.sin(e / 2) + Math.cos(c) * Math.cos(d) * Math.sin(f / 2) * Math.sin(f / 2))) * nc
    }
    function wc(a, b, c, d) {
      return Math.sqrt((a - c) * (a - c) + (b - d) * (b - d))
    }
    function Ac(a, b, c) {
      return (b.lng - a.lng) * (c.lat - a.lat) - (c.lng - a.lng) * (b.lat - a.lat)
    }
    function sc(a) {
      var b = {};
      if (a.lng < Ub[0] - 0.4 || a.lat < Ub[1] - 0.4 || a.lng > Ub[2] + 0.4 || a.lat > Ub[3] + 0.4)
        return b.lng = a.lng,
          b.lat = a.lat,
          b;
      if (pc(a, bc, cc))
        return b = qc(a);
      for (var b = 0, c = jc, d = 0, e = new xc, f = 0, d = 0; d < Zb; ++d)
        ac[d] <= a.lat ? ac[(d + 1) % Zb] > a.lat && 0 < Ac({
          lng: $b[d],
          lat: ac[d]
        }, {
          lng: $b[(d + 1) % Zb],
          lat: ac[(d + 1) % Zb]
        }, a) && ++f : ac[(d + 1) % Zb] <= a.lat && 0 > Ac({
          lng: $b[d],
          lat: ac[d]
        }, {
          lng: $b[(d + 1) % Zb],
          lat: ac[(d + 1) % Zb]
        }, a) && --f;
      if ((0 === f ? kc : lc) === kc) {
        for (f = 0; f < Zb; ++f)
          if (d = new yc($b[f],ac[f],$b[(f + 1) % Zb],ac[(f + 1) % Zb]),
            e.vg.lng = d.ly.vg.lng - 0.5,
            e.vg.lat = d.ly.vg.lat - 0.5,
            e.Dg.lng = d.ly.Dg.lng + 0.5,
            e.Dg.lat = d.ly.Dg.lat + 0.5,
          e.contains(a) !== kc) {
            var g;
            var i = d.nu.lng
              , k = d.nu.lat
              , l = d.sx.lng
              , m = d.sx.lat;
            g = m - k;
            var n = i - l;
            !(Math.abs(g - 0) > mc) && !(Math.abs(n - 0) > mc) ? g = d.nu : (i = l * k - i * m,
              k = n * a.lng - g * a.lat,
              l = g * g - n * n,
              g = {
                lng: (n * k - g * i) / l,
                lat: -(g * k + n * i) / l
              });
            n = 180;
            i = 90;
            k = -180;
            l = -90;
            l = d.nu;
            m = d.sx;
            n = l.lng < m.lng ? l.lng : m.lng;
            i = l.lat < m.lat ? l.lat : m.lat;
            k = l.lng < m.lng ? l.lng : m.lng;
            l = l.lat < m.lat ? l.lat : m.lat;
            g.lng <= k && g.lng >= n && g.lng <= l && g.lat >= i ? (d = a.lat * gc,
              n = a.lng * gc,
              i = g.lat * gc,
              g = g.lng * gc,
              k = Math.cos(d) * Math.cos(i),
              d = k * Math.cos(n) * Math.cos(g) + k * Math.sin(n) * Math.sin(g) + Math.sin(d) * Math.sin(i),
              -1 > d ? d = -1 : 1 < d && (d = 1),
              d = Math.acos(d) * nc) : (g = zc(a, d.nu),
              d = zc(a, d.sx),
              d = g < d ? g : d);
            d < c && (c = d)
          }
        c < jc && (b = (jc - c) / jc)
      } else
        b = 1;
      c = qc(a);
      return b = {
        lng: a.lng + (c.lng - a.lng) * b,
        lat: a.lat + (c.lat - a.lat) * b
      }
    }
    function Bc(a) {
      var b = {};
      if (a.lng < Vb[0] - 0.4 || a.lat < Vb[1] - 0.4 || a.lng > Vb[2] + 0.4 || a.lat > Vb[3] + 0.4)
        return b.lng = a.lng,
          b.lat = a.lat,
          b;
      if (pc(a, Xb, Yb)) {
        var b = a.lng - hc
          , c = a.lat - ic
          , a = Math.sqrt(b * b + c * c) - Math.sin(c * dc * gc) * ec
          , b = Math.atan2(c, b) - Math.cos(b * dc * gc) * fc;
        return b = {
          lng: a * Math.cos(b),
          lat: a * Math.sin(b)
        }
      }
      c = sc(a);
      return a.lng === c.lng && a.lat === c.lng ? (b.lng = a.lng,
        b.lat = a.lat,
        b) : rc(a)
    }
    function Ya(a, b) {
      if (b && b.B && b.B.Yw && 3 === b.B.Yw && a instanceof N) {
        var c = sc(a);
        return new H(c.lng,c.lat)
      }
      return a
    }
    function eb(a, b) {
      if (b && b.B && 3 === b.B.Yw && a instanceof H) {
        var c = Bc(a);
        return new N(c.lng,c.lat)
      }
      return b && b.B && 5 === b.B.Yw && a instanceof H ? new N(a.lng,a.lat) : a
    }
    ;function pa(a, b) {
      if (/qt/.test(a)) return//修改  屏蔽ak验证，若调用外部资源直接返回
      if (b) {
        var c = (1E5 * Math.random()).toFixed(0);
        z._rd["_cbk" + c] = function(a) {
          b && b(a);
          delete z._rd["_cbk" + c]
        }
        ;
        a += "&callback=BMap._rd._cbk" + c
      }
      var d = K("script", {
        type: "text/javascript"
      });
      d.charset = "utf-8";
      d.src = a;
      d.addEventListener ? d.addEventListener("load", function(a) {
        a = a.target;
        a.parentNode.removeChild(a)
      }, q) : d.attachEvent && d.attachEvent("onreadystatechange", function() {
        var a = window.event.srcElement;
        a && ("loaded" == a.readyState || "complete" == a.readyState) && a.parentNode.removeChild(a)
      });
      setTimeout(function() {
        document.getElementsByTagName("head")[0].appendChild(d);
        d = p
      }, 1)
    }
    ;var Cc = {
      map: "1ctnlt",
      common: "xe02z5",
      style: "2ok3jc",
      tile: "prz4rr",
      vectordrawlib: "u2solp",
      newvectordrawlib: "mw5duh",
      groundoverlay: "dh3kwb",
      pointcollection: "bjlyf2",
      marker: "w34tq5",
      symbol: "bpgmjb",
      canvablepath: "ek5ur1",
      vmlcontext: "wl0tgi",
      markeranimation: "e05zns",
      poly: "r0mwq2",
      draw: "5ddngj",
      drawbysvg: "u3ql1t",
      drawbyvml: "3yutaa",
      drawbycanvas: "p304hn",
      infowindow: "ejaxoj",
      oppc: "ohwi5e",
      opmb: "3egdwt",
      menu: "njgpce",
      control: "k3vulj",
      navictrl: "xrl3oa",
      geoctrl: "rzwqaa",
      copyrightctrl: "54uhvb",
      citylistcontrol: "garhrc",
      scommon: "0mhtzu",
      local: "xjnu5v",
      route: "an2rh3",
      othersearch: "kubtj3",
      mapclick: "idvstn",
      buslinesearch: "zakt50",
      hotspot: "cbrx2x",
      autocomplete: "ysiia0",
      coordtrans: "fvpdv2",
      coordtransutils: "4kwlvy",
      convertor: "rupbfw",
      clayer: "xoofcd",
      pservice: "zikufx",
      pcommon: "xzj0td",
      panorama: "umsifd",
      panoramaflash: "c5n31c",
      vector: "xwx0kz"
    };
    x.Zy = function() {
      function a(a) {
        return d && !!c[b + a + "_" + Cc[a]]
      }
      var b = "BMap_"
        , c = window.localStorage
        , d = "localStorage"in window && c !== p && c !== j;
      return {
        HY: d,
        set: function(a, f) {
          if (d) {
            for (var g = b + a + "_", i = c.length, k; i--; )
              k = c.key(i),
              -1 < k.indexOf(g) && c.removeItem(k);
            try {
              c.setItem(b + a + "_" + Cc[a], f)
            } catch (l) {
              c.clear()
            }
          }
        },
        get: function(e) {
          return d && a(e) ? c.getItem(b + e + "_" + Cc[e]) : q
        },
        tK: a
      }
    }();
    function I() {}
    x.object.extend(I, {
      Kj: {
        DG: -1,
        XP: 0,
        lq: 1
      },
      FL: function() {
        var a = "canvablepath"
          , b = z.YU ? "newvectordrawlib" : "vectordrawlib";
        if (!G() || !Nb())
          Mb() || (Lb() ? a = "vmlcontext" : Nb());
        return {
          tile: [b, "style"],
          control: [],
          marker: ["symbol"],
          symbol: ["canvablepath", "common"],
          canvablepath: "canvablepath" === a ? [] : [a],
          vmlcontext: [],
          style: [],
          poly: ["marker", "drawbycanvas", "drawbysvg", "drawbyvml"],
          drawbysvg: ["draw"],
          drawbyvml: ["draw"],
          drawbycanvas: ["draw"],
          infowindow: ["common", "marker"],
          menu: [],
          oppc: [],
          opmb: [],
          scommon: [],
          local: ["scommon"],
          route: ["scommon"],
          othersearch: ["scommon"],
          autocomplete: ["scommon"],
          citylistcontrol: ["autocomplete"],
          mapclick: ["scommon"],
          buslinesearch: ["route"],
          hotspot: [],
          coordtransutils: ["coordtrans"],
          convertor: [],
          clayer: ["tile"],
          pservice: [],
          pcommon: ["style", "pservice"],
          panorama: ["pcommon"],
          panoramaflash: ["pcommon"]
        }
      },
      g4: {},
      wG: {
        nQ: z.ma + "getmodules?v=2.0&t=20140707",
        PU: 5E3
      },
      PC: q,
      Rd: {
        Al: {},
        Ln: [],
        ew: []
      },
      load: function(a, b, c) {
        var d = this.kb(a);
        if (d.Cd == this.Kj.lq)
          c && b();
        else {
          if (d.Cd == this.Kj.DG) {
            this.zK(a);
            this.NN(a);
            var e = this;
            // 修改
            e.PC == q && (e.PC = o,
              setTimeout(function() {
                for (var a = [], b = 0, c = e.Rd.Ln.length; b < c; b++) {
                  var d = e.Rd.Ln[b]
                    , l = "";
                  ja.Zy.tK(d) ? l = ja.Zy.get(d) : (l = "",
                    a.push(d + "_" + Cc[d]));
                  e.Rd.ew.push({
                    fN: d,
                    YE: l
                  })
                }
                e.PC = q;
                e.Rd.Ln.length = 0;
                if (a.length > 0) {
                  for (var i = 0; i < a.length; i++) {
                    Nf = bmapcfg.home + 'modules/' + a[i] + '.js'
                    pa(Nf)
                  }
                } else {
                    e.kL();
                }
              }, 1));
            d.Cd = this.Kj.XP
          }
          d.av.push(b)
        }
      },
      zK: function(a) {
        if (a && this.FL()[a])
          for (var a = this.FL()[a], b = 0; b < a.length; b++)
            this.zK(a[b]),
            this.Rd.Al[a[b]] || this.NN(a[b])
      },
      NN: function(a) {
        for (var b = 0; b < this.Rd.Ln.length; b++)
          if (this.Rd.Ln[b] == a)
            return;
        this.Rd.Ln.push(a)
      },
      OZ: function(a, b) {
        var c = this.kb(a);
        try {
          eval(b)
        } catch (d) {
          return
        }
        c.Cd = this.Kj.lq;
        for (var e = 0, f = c.av.length; e < f; e++)
          c.av[e]();
        c.av.length = 0
      },
      tK: function(a, b) {
        var c = this;
        c.timeout = setTimeout(function() {
          c.Rd.Al[a].Cd != c.Kj.lq ? (c.remove(a),
            c.load(a, b)) : clearTimeout(c.timeout)
        }, c.wG.PU)
      },
      kb: function(a) {
        this.Rd.Al[a] || (this.Rd.Al[a] = {},
          this.Rd.Al[a].Cd = this.Kj.DG,
          this.Rd.Al[a].av = []);
        return this.Rd.Al[a]
      },
      remove: function(a) {
        delete this.kb(a)
      },
      KV: function(a, b) {
        for (var c = this.Rd.ew, d = o, e = 0, f = c.length; e < f; e++)
          "" == c[e].YE && (c[e].fN == a ? c[e].YE = b : d = q);
        d && this.kL()
      },
      kL: function() {
        for (var a = this.Rd.ew, b = 0, c = a.length; b < c; b++)
          this.OZ(a[b].fN, a[b].YE);
        this.Rd.ew.length = 0
      }
    });
    function S(a, b) {
      this.x = a || 0;
      this.y = b || 0;
      this.x = this.x;
      this.y = this.y
    }
    S.prototype.ab = function(a) {
      return a && a.x == this.x && a.y == this.y
    }
    ;
    function L(a, b) {
      this.width = a || 0;
      this.height = b || 0
    }
    L.prototype.ab = function(a) {
      return a && this.width == a.width && this.height == a.height
    }
    ;
    function jb(a, b) {
      a && (this.Kb = a,
        this.ba = "spot" + jb.ba++,
        b = b || {},
        this.Xg = b.text || "",
        this.Kv = b.offsets ? b.offsets.slice(0) : [5, 5, 5, 5],
        this.IJ = b.userData || p,
        this.Vh = b.minZoom || p,
        this.Gf = b.maxZoom || p)
    }
    jb.ba = 0;
    x.extend(jb.prototype, {
      ra: function(a) {
        this.Vh == p && (this.Vh = a.B.fc);
        this.Gf == p && (this.Gf = a.B.Zb)
      },
      ta: function(a) {
        if (a instanceof N || a instanceof H)
          this.Kb = a
      },
      ha: v("Kb"),
      fu: da("Xg"),
      iE: v("Xg"),
      setUserData: da("IJ"),
      getUserData: v("IJ")
    });
    function Dc() {
      this.D = p;
      this.Lb = "control";
      this.Pa = this.mK = o
    }
    x.lang.ua(Dc, x.lang.Da, "Control");
    x.extend(Dc.prototype, {
      initialize: function(a) {
        this.D = a;
        if (this.C)
          return a.Ua.appendChild(this.C),
            this.C
      },
      Ie: function(a) {
        !this.C && (this.initialize && Za(this.initialize)) && (this.C = this.initialize(a));
        this.k = this.k || {
          Cg: q
        };
        this.KB();
        this.Vr();
        this.C && (this.C.ur = this)
      },
      KB: function() {
        var a = this.C;
        if (a) {
          var b = a.style;
          b.position = "absolute";
          b.zIndex = this.Yu || "10";
          b.MozUserSelect = "none";
          b.WebkitTextSizeAdjust = "none";
          this.k.Cg || x.K.Ta(a, "BMap_noprint");
          G() || x.M(a, "contextmenu", oa)
        }
      },
      remove: function() {
        this.D = p;
        this.C && (this.C.parentNode && this.C.parentNode.removeChild(this.C),
          this.C = this.C.ur = p)
      },
      Ba: function() {
        this.C = Ab(this.D.Ua, "<div unselectable='on'></div>");
        this.Pa == q && x.K.U(this.C);
        return this.C
      },
      Vr: function() {
        this.qc(this.k.anchor)
      },
      qc: function(a) {
        if (this.I1 || !Xa(a) || isNaN(a) || a < Ec || 3 < a)
          a = this.defaultAnchor;
        this.k = this.k || {
          Cg: q
        };
        this.k.Aa = this.k.Aa || this.defaultOffset;
        var b = this.k.anchor;
        this.k.anchor = a;
        if (this.C) {
          var c = this.C
            , d = this.k.Aa.width
            , e = this.k.Aa.height;
          c.style.left = c.style.top = c.style.right = c.style.bottom = "auto";
          switch (a) {
            case Ec:
              c.style.top = e + "px";
              c.style.left = d + "px";
              break;
            case Fc:
              c.style.top = e + "px";
              c.style.right = d + "px";
              break;
            case Gc:
              c.style.bottom = e + "px";
              c.style.left = d + "px";
              break;
            case 3:
              c.style.bottom = e + "px",
                c.style.right = d + "px"
          }
          c = ["TL", "TR", "BL", "BR"];
          x.K.Tb(this.C, "anchor" + c[b]);
          x.K.Ta(this.C, "anchor" + c[a])
        }
      },
      MD: function() {
        return this.k.anchor
      },
      getContainer: v("C"),
      Ye: function(a) {
        a instanceof L && (this.k = this.k || {
          Cg: q
        },
          this.k.Aa = new L(a.width,a.height),
        this.C && this.qc(this.k.anchor))
      },
      Qf: function() {
        return this.k.Aa
      },
      Jd: v("C"),
      show: function() {
        this.Pa != o && (this.Pa = o,
        this.C && x.K.show(this.C))
      },
      U: function() {
        this.Pa != q && (this.Pa = q,
        this.C && x.K.U(this.C))
      },
      isPrintable: function() {
        return !!this.k.Cg
      },
      oh: function() {
        return !this.C && !this.D ? q : !!this.Pa
      }
    });
    var Ec = 0
      , Fc = 1
      , Gc = 2;
    function kb(a) {
      Dc.call(this);
      a = a || {};
      this.k = {
        Cg: q,
        PF: a.showZoomInfo || o,
        anchor: a.anchor,
        Aa: a.offset,
        type: a.type,
        MW: a.enableGeolocation || q
      };
      this.defaultAnchor = G() ? 3 : Ec;
      this.defaultOffset = new L(10,10);
      this.qc(a.anchor);
      this.tn(a.type);
      this.Ee()
    }
    x.lang.ua(kb, Dc, "NavigationControl");
    x.extend(kb.prototype, {
      initialize: function(a) {
        this.D = a;
        return this.C
      },
      tn: function(a) {
        this.k.type = Xa(a) && 0 <= a && 3 >= a ? a : 0
      },
      op: function() {
        return this.k.type
      },
      Ee: function() {
        var a = this;
        I.load("navictrl", function() {
          a.yf()
        })
      }
    });
    function Hc(a) {
      Dc.call(this);
      a = a || {};
      this.k = {
        anchor: a.anchor || Gc,
        Aa: a.offset || new L(10,30),
        z_: a.showAddressBar !== q,
        q2: a.enableAutoLocation || q,
        UM: a.locationIcon || p
      };
      var b = this;
      this.Yu = 1200;
      b.n0 = [];
      this.pe = [];
      I.load("geoctrl", function() {
        (function d() {
            if (0 !== b.pe.length) {
              var a = b.pe.shift();
              b[a.method].apply(b, a.arguments);
              d()
            }
          }
        )();
        b.mQ()
      });
      Qa(Ia)
    }
    x.lang.ua(Hc, Dc, "GeolocationControl");
    x.extend(Hc.prototype, {
      location: function() {
        this.pe.push({
          method: "location",
          arguments: arguments
        })
      },
      getAddressComponent: ea(p)
    });
    function Ic(a) {
      Dc.call(this);
      a = a || {};
      this.k = {
        Cg: q,
        anchor: a.anchor,
        Aa: a.offset
      };
      this.bc = [];
      this.defaultAnchor = Gc;
      this.defaultOffset = new L(5,2);
      this.qc(a.anchor);
      this.mK = q;
      this.Ee()
    }
    x.lang.ua(Ic, Dc, "CopyrightControl");
    x.object.extend(Ic.prototype, {
      initialize: function(a) {
        this.D = a;
        return this.C
      },
      Bw: function(a) {
        if (a && Xa(a.id) && !isNaN(a.id)) {
          var b = {
            bounds: p,
            content: ""
          }, c;
          for (c in a)
            b[c] = a[c];
          if (a = this.ym(a.id))
            for (var d in b)
              a[d] = b[d];
          else
            this.bc.push(b)
        }
      },
      ym: function(a) {
        for (var b = 0, c = this.bc.length; b < c; b++)
          if (this.bc[b].id == a)
            return this.bc[b]
      },
      TD: v("bc"),
      pF: function(a) {
        for (var b = 0, c = this.bc.length; b < c; b++)
          this.bc[b].id == a && (r = this.bc.splice(b, 1),
            b--,
            c = this.bc.length)
      },
      Ee: function() {
        var a = this;
        I.load("copyrightctrl", function() {
          a.yf()
        })
      }
    });
    function mb(a) {
      Dc.call(this);
      a = a || {};
      this.k = {
        Cg: q,
        size: a.size || new L(150,150),
        padding: 5,
        Va: a.isOpen === o ? o : q,
        C0: 4,
        Aa: a.offset,
        anchor: a.anchor
      };
      this.defaultAnchor = 3;
      this.defaultOffset = new L(0,0);
      this.Jq = this.Kq = 13;
      this.qc(a.anchor);
      this.Ce(this.k.size);
      this.Ee()
    }
    x.lang.ua(mb, Dc, "OverviewMapControl");
    x.extend(mb.prototype, {
      initialize: function(a) {
        this.D = a;
        return this.C
      },
      qc: function(a) {
        Dc.prototype.qc.call(this, a)
      },
      se: function() {
        this.se.ro = o;
        this.k.Va = !this.k.Va;
        this.C || (this.se.ro = q)
      },
      Ce: function(a) {
        a instanceof L || (a = new L(150,150));
        a.width = 0 < a.width ? a.width : 150;
        a.height = 0 < a.height ? a.height : 150;
        this.k.size = a
      },
      tb: function() {
        return this.k.size
      },
      Va: function() {
        return this.k.Va
      },
      Ee: function() {
        var a = this;
        I.load("control", function() {
          a.yf()
        })
      }
    });
    function Jc(a) {
      Dc.call(this);
      a = a || {};
      this.defaultAnchor = Ec;
      this.HV = a.canCheckSize === q ? q : o;
      this.jj = "";
      this.defaultOffset = new L(10,10);
      this.onChangeBefore = [];
      this.onChangeAfter = [];
      this.onChangeSuccess = [];
      this.k = {
        Cg: q,
        Aa: a.offset || this.defaultOffset,
        anchor: a.anchor || this.defaultAnchor,
        expand: !!a.expand
      };
      a.onChangeBefore && Za(a.onChangeBefore) && this.onChangeBefore.push(a.onChangeBefore);
      a.onChangeAfter && Za(a.onChangeAfter) && this.onChangeAfter.push(a.onChangeAfter);
      a.onChangeSuccess && Za(a.onChangeSuccess) && this.onChangeSuccess.push(a.onChangeSuccess);
      this.qc(a.anchor);
      this.Ee()
    }
    x.lang.ua(Jc, Dc, "CityListControl");
    x.object.extend(Jc.prototype, {
      initialize: function(a) {
        this.D = a;
        return this.C
      },
      Ee: function() {
        var a = this;
        I.load("citylistcontrol", function() {
          a.yf()
        }, o)
      }
    });
    function lb(a) {
      Dc.call(this);
      a = a || {};
      this.k = {
        Cg: q,
        color: "black",
        dd: "metric",
        Aa: a.offset
      };
      this.defaultAnchor = Gc;
      this.defaultOffset = new L(81,18);
      this.qc(a.anchor);
      this.di = {
        metric: {
          name: "metric",
          BK: 1,
          nM: 1E3,
          TO: "\u7c73",
          UO: "\u516c\u91cc"
        },
        us: {
          name: "us",
          BK: 3.2808,
          nM: 5280,
          TO: "\u82f1\u5c3a",
          UO: "\u82f1\u91cc"
        }
      };
      this.di[this.k.dd] || (this.k.dd = "metric");
      this.gJ = p;
      this.GI = {};
      this.Ee()
    }
    x.lang.ua(lb, Dc, "ScaleControl");
    x.object.extend(lb.prototype, {
      initialize: function(a) {
        this.D = a;
        return this.C
      },
      Qk: function(a) {
        this.k.color = a + ""
      },
      H2: function() {
        return this.k.color
      },
      MF: function(a) {
        this.k.dd = this.di[a] && this.di[a].name || this.k.dd
      },
      dY: function() {
        return this.k.dd
      },
      Ee: function() {
        var a = this;
        I.load("control", function() {
          a.yf()
        })
      }
    });
    var Kc = 0;
    function nb(a) {
      Dc.call(this);
      a = a || {};
      this.defaultAnchor = Fc;
      this.defaultOffset = new L(10,10);
      this.k = {
        Cg: q,
        rh: [Ma, $a, Sa, Pa],
        oW: ["B_DIMENSIONAL_MAP", "B_SATELLITE_MAP", "B_NORMAL_MAP"],
        type: a.type || Kc,
        Aa: a.offset || this.defaultOffset,
        QW: o
      };
      this.qc(a.anchor);
      "[object Array]" == Object.prototype.toString.call(a.mapTypes) && (this.k.rh = a.mapTypes.slice(0));
      this.Ee()
    }
    x.lang.ua(nb, Dc, "MapTypeControl");
    x.object.extend(nb.prototype, {
      initialize: function(a) {
        this.D = a;
        return this.C
      },
      $y: function(a) {
        this.D.ho = a
      },
      Ee: function() {
        var a = this;
        I.load("control", function() {
          a.yf()
        }, o)
      }
    });
    function Lc(a) {
      Dc.call(this);
      a = a || {};
      this.k = {
        Cg: q,
        Aa: a.offset,
        anchor: a.anchor
      };
      this.Vi = q;
      this.jw = p;
      this.QI = new Mc({
        of: "api"
      });
      this.RI = new Nc(p,{
        of: "api"
      });
      this.defaultAnchor = Fc;
      this.defaultOffset = new L(10,10);
      this.qc(a.anchor);
      this.Ee();
      Qa(va)
    }
    x.lang.ua(Lc, Dc, "PanoramaControl");
    x.extend(Lc.prototype, {
      initialize: function(a) {
        this.D = a;
        return this.C
      },
      Ee: function() {
        var a = this;
        I.load("control", function() {
          a.yf()
        })
      }
    });
    function Oc(a) {
      x.lang.Da.call(this);
      this.k = {
        Ua: p,
        cursor: "default"
      };
      this.k = x.extend(this.k, a);
      this.Lb = "contextmenu";
      this.D = p;
      this.ya = [];
      this.Jf = [];
      this.Ge = [];
      this.gx = this.xs = p;
      this.Uh = q;
      var b = this;
      I.load("menu", function() {
        b.xb()
      })
    }
    x.lang.ua(Oc, x.lang.Da, "ContextMenu");
    x.object.extend(Oc.prototype, {
      ra: function(a, b) {
        this.D = a;
        this.Fl = b || p
      },
      remove: function() {
        this.D = this.Fl = p
      },
      Dw: function(a) {
        if (a && !("menuitem" != a.Lb || "" == a.Xg || 0 >= a.ej)) {
          for (var b = 0, c = this.ya.length; b < c; b++)
            if (this.ya[b] === a)
              return;
          this.ya.push(a);
          this.Jf.push(a)
        }
      },
      removeItem: function(a) {
        if (a && "menuitem" == a.Lb) {
          for (var b = 0, c = this.ya.length; b < c; b++)
            this.ya[b] === a && (this.ya[b].remove(),
              this.ya.splice(b, 1),
              c--);
          b = 0;
          for (c = this.Jf.length; b < c; b++)
            this.Jf[b] === a && (this.Jf[b].remove(),
              this.Jf.splice(b, 1),
              c--)
        }
      },
      dC: function() {
        this.ya.push({
          Lb: "divider",
          Sj: this.Ge.length
        });
        this.Ge.push({
          K: p
        })
      },
      rF: function(a) {
        if (this.Ge[a]) {
          for (var b = 0, c = this.ya.length; b < c; b++)
            this.ya[b] && ("divider" == this.ya[b].Lb && this.ya[b].Sj == a) && (this.ya.splice(b, 1),
              c--),
            this.ya[b] && ("divider" == this.ya[b].Lb && this.ya[b].Sj > a) && this.ya[b].Sj--;
          this.Ge.splice(a, 1)
        }
      },
      Jd: v("C"),
      show: function() {
        this.Uh != o && (this.Uh = o)
      },
      U: function() {
        this.Uh != q && (this.Uh = q)
      },
      e_: function(a) {
        a && (this.k.cursor = a)
      },
      getItem: function(a) {
        return this.Jf[a]
      }
    });
    var Pc = F.qa + "menu_zoom_in.png"
      , Qc = F.qa + "menu_zoom_out.png";
    function Rc(a, b, c) {
      if (a && Za(b)) {
        x.lang.Da.call(this);
        this.k = {
          width: 100,
          id: "",
          Mm: ""
        };
        c = c || {};
        this.k.width = 1 * c.width ? c.width : 100;
        this.k.id = c.id ? c.id : "";
        this.k.Mm = c.iconUrl ? c.iconUrl : "";
        this.Xg = a + "";
        this.Nz = b;
        this.D = p;
        this.Lb = "menuitem";
        this.bs = this.yv = this.C = this.Mh = p;
        this.Qh = o;
        var d = this;
        I.load("menu", function() {
          d.xb()
        })
      }
    }
    x.lang.ua(Rc, x.lang.Da, "MenuItem");
    x.object.extend(Rc.prototype, {
      ra: function(a, b) {
        this.D = a;
        this.Mh = b
      },
      remove: function() {
        this.D = this.Mh = p
      },
      fu: function(a) {
        a && (this.Xg = a + "")
      },
      Vb: function(a) {
        a && (this.k.Mm = a)
      },
      Jd: v("C"),
      enable: function() {
        this.Qh = o
      },
      disable: function() {
        this.Qh = q
      }
    });
    function gb(a, b) {
      a && !b && (b = a);
      this.Je = this.Xd = this.Ne = this.Zd = this.Ul = this.Dl = p;
      a && (this.Ul = new N(a.lng,a.lat),
        this.Dl = new N(b.lng,b.lat),
        this.Ne = a.lng,
        this.Zd = a.lat,
        this.Je = b.lng,
        this.Xd = b.lat)
    }
    x.object.extend(gb.prototype, {
      Cj: function() {
        return !this.Ul || !this.Dl
      },
      ab: function(a) {
        return !(a instanceof gb) || this.Cj() ? q : this.xe().ab(a.xe()) && this.pf().ab(a.pf())
      },
      xe: v("Ul"),
      pf: v("Dl"),
      YV: function(a) {
        return !(a instanceof gb) || this.Cj() || a.Cj() ? q : a.Ne > this.Ne && a.Je < this.Je && a.Zd > this.Zd && a.Xd < this.Xd
      },
      pc: function() {
        return this.Cj() ? p : new N((this.Ne + this.Je) / 2,(this.Zd + this.Xd) / 2)
      },
      yt: function(a) {
        if (!(a instanceof gb) || Math.max(a.Ne, a.Je) < Math.min(this.Ne, this.Je) || Math.min(a.Ne, a.Je) > Math.max(this.Ne, this.Je) || Math.max(a.Zd, a.Xd) < Math.min(this.Zd, this.Xd) || Math.min(a.Zd, a.Xd) > Math.max(this.Zd, this.Xd))
          return p;
        var b = Math.max(this.Ne, a.Ne)
          , c = Math.min(this.Je, a.Je)
          , d = Math.max(this.Zd, a.Zd)
          , a = Math.min(this.Xd, a.Xd);
        return new gb(new N(b,d),new N(c,a))
      },
      qs: function(a) {
        return !(a instanceof N || a instanceof H) || this.Cj() ? q : a.lng >= this.Ne && a.lng <= this.Je && a.lat >= this.Zd && a.lat <= this.Xd
      },
      extend: function(a) {
        if (a instanceof N || a instanceof H) {
          var b = a.lng
            , a = a.lat;
          this.Ul || (this.Ul = new N(0,0));
          this.Dl || (this.Dl = new N(0,0));
          if (!this.Ne || this.Ne > b)
            this.Ul.lng = this.Ne = b;
          if (!this.Je || this.Je < b)
            this.Dl.lng = this.Je = b;
          if (!this.Zd || this.Zd > a)
            this.Ul.lat = this.Zd = a;
          if (!this.Xd || this.Xd < a)
            this.Dl.lat = this.Xd = a
        }
      },
      ZF: function() {
        return this.Cj() ? new N(0,0) : new N(Math.abs(this.Je - this.Ne),Math.abs(this.Xd - this.Zd))
      }
    });
    function N(a, b) {
      isNaN(a) && (a = Kb(a),
        a = isNaN(a) ? 0 : a);
      ab(a) && (a = parseFloat(a));
      isNaN(b) && (b = Kb(b),
        b = isNaN(b) ? 0 : b);
      ab(b) && (b = parseFloat(b));
      this.lng = a;
      this.lat = b
    }
    N.BE = function(a) {
      return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
    }
    ;
    N.prototype.ab = function(a) {
      return a && this.lat == a.lat && this.lng == a.lng
    }
    ;
    function H(a, b) {
      isNaN(a) && (a = Kb(a),
        a = isNaN(a) ? 0 : a);
      ab(a) && (a = parseFloat(a));
      isNaN(b) && (b = Kb(b),
        b = isNaN(b) ? 0 : b);
      ab(b) && (b = parseFloat(b));
      this.lng = a;
      this.lat = b;
      this.of = "inner"
    }
    H.BE = function(a) {
      return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
    }
    ;
    H.prototype.ab = function(a) {
      return a && this.lat == a.lat && this.lng == a.lng
    }
    ;
    function Sc() {}
    Sc.prototype.ph = function() {
      ca("lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0")
    }
    ;
    Sc.prototype.Ej = function() {
      ca("pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0")
    }
    ;
    function Tc() {}
    ;var fb = {
      DK: function(a, b, c) {
        I.load("coordtransutils", function() {
          fb.qV(a, b, c)
        }, o)
      },
      CK: function(a, b, c) {
        I.load("coordtransutils", function() {
          fb.pV(a, b, c)
        }, o)
      }
    };
    function Vc() {
      this.Oa = [];
      var a = this;
      I.load("convertor", function() {
        a.kQ()
      })
    }
    x.ua(Vc, x.lang.Da, "Convertor");
    x.extend(Vc.prototype, {
      translate: function(a, b, c, d) {
        this.Oa.push({
          method: "translate",
          arguments: [a, b, c, d]
        })
      }
    });
    U(Vc.prototype, {
      translate: Vc.prototype.translate
    });
    function T() {}
    T.prototype = new Sc;
    x.extend(T, {
      AP: 6370996.81,
      HG: [1.289059486E7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
      Nu: [75, 60, 45, 30, 15, 0],
      GP: [[1.410526172116255E-8, 8.98305509648872E-6, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 1.73379812E7], [-7.435856389565537E-9, 8.983055097726239E-6, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1.026014486E7], [-3.030883460898826E-8, 8.98305509983578E-6, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37], [-1.981981304930552E-8, 8.983055099779535E-6, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06], [3.09191371068437E-9, 8.983055096812155E-6, 6.995724062E-5, 23.10934304144901, -2.3663490511E-4, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4], [2.890871144776878E-9, 8.983055095805407E-6, -3.068298E-8, 7.47137025468032, -3.53937994E-6, -0.02145144861037, -1.234426596E-5, 1.0322952773E-4, -3.23890364E-6, 826088.5]],
      EG: [[-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5], [8.277824516172526E-4, 111320.7020463578, 6.477955746671607E8, -4.082003173641316E9, 1.077490566351142E10, -1.517187553151559E10, 1.205306533862167E10, -5.124939663577472E9, 9.133119359512032E8, 67.5], [0.00337398766765, 111320.7020202162, 4481351.045890365, -2.339375119931662E7, 7.968221547186455E7, -1.159649932797253E8, 9.723671115602145E7, -4.366194633752821E7, 8477230.501135234, 52.5], [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5], [-3.441963504368392E-4, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5], [-3.218135878613132E-4, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]],
      M2: function(a, b) {
        if (!a || !b)
          return 0;
        var c, d, a = this.zb(a);
        if (!a)
          return 0;
        c = this.Zk(a.lng);
        d = this.Zk(a.lat);
        b = this.zb(b);
        return !b ? 0 : this.Ue(c, this.Zk(b.lng), d, this.Zk(b.lat))
      },
      dp: function(a, b) {
        if (!a || !b)
          return 0;
        a.lng = this.aE(a.lng, -180, 180);
        a.lat = this.eE(a.lat, -74, 74);
        b.lng = this.aE(b.lng, -180, 180);
        b.lat = this.eE(b.lat, -74, 74);
        return this.Ue(this.Zk(a.lng), this.Zk(b.lng), this.Zk(a.lat), this.Zk(b.lat))
      },
      zb: function(a) {
        if (a === p || a === j)
          return new H(0,0);
        var b, c;
        b = new H(Math.abs(a.lng),Math.abs(a.lat));
        for (var d = 0; d < this.HG.length; d++)
          if (b.lat >= this.HG[d]) {
            c = this.GP[d];
            break
          }
        a = this.EK(a, c);
        return a = new H(a.lng.toFixed(6),a.lat.toFixed(6))
      },
      yb: function(a) {
        if (a === p || a === j || 180 < a.lng || -180 > a.lng || 90 < a.lat || -90 > a.lat)
          return new H(0,0);
        var b, c;
        a.lng = this.aE(a.lng, -180, 180);
        a.lat = this.eE(a.lat, -74, 74);
        b = new H(a.lng,a.lat);
        for (var d = 0; d < this.Nu.length; d++)
          if (b.lat >= this.Nu[d]) {
            c = this.EG[d];
            break
          }
        if (!c)
          for (d = 0; d < this.Nu.length; d++)
            if (b.lat <= -this.Nu[d]) {
              c = this.EG[d];
              break
            }
        a = this.EK(a, c);
        return a = new H(a.lng.toFixed(2),a.lat.toFixed(2))
      },
      EK: function(a, b) {
        if (a && b) {
          var c = b[0] + b[1] * Math.abs(a.lng)
            , d = Math.abs(a.lat) / b[9]
            , d = b[2] + b[3] * d + b[4] * d * d + b[5] * d * d * d + b[6] * d * d * d * d + b[7] * d * d * d * d * d + b[8] * d * d * d * d * d * d
            , c = c * (0 > a.lng ? -1 : 1)
            , d = d * (0 > a.lat ? -1 : 1);
          return new H(c,d)
        }
      },
      Ue: function(a, b, c, d) {
        return this.AP * Math.acos(Math.sin(c) * Math.sin(d) + Math.cos(c) * Math.cos(d) * Math.cos(b - a))
      },
      Zk: function(a) {
        return Math.PI * a / 180
      },
      L4: function(a) {
        return 180 * a / Math.PI
      },
      eE: function(a, b, c) {
        b != p && (a = Math.max(a, b));
        c != p && (a = Math.min(a, c));
        return a
      },
      aE: function(a, b, c) {
        for (; a > c; )
          a -= c - b;
        for (; a < b; )
          a += c - b;
        return a
      }
    });
    x.extend(T.prototype, {
      Hk: function(a) {
        return T.yb(a)
      },
      ph: function(a) {
        a = T.yb(a);
        return new S(a.lng,a.lat)
      },
      th: function(a) {
        return T.zb(a)
      },
      Ej: function(a) {
        a = new H(a.x,a.y);
        return T.zb(a)
      },
      Kp: function(a, b, c, d, e) {
        if (a)
          return a = this.Hk(a, e),
            b = this.yc(b),
            new S(Math.round((a.lng - c.lng) / b + d.width / 2),Math.round((c.lat - a.lat) / b + d.height / 2))
      },
      zg: function(a, b, c, d, e) {
        if (a)
          return b = this.yc(b),
            this.th(new H(c.lng + b * (a.x - d.width / 2),c.lat - b * (a.y - d.height / 2)), e)
      },
      yc: function(a) {
        return Math.pow(2, 18 - a)
      }
    });
    function ib() {
      this.jj = "bj"
    }
    ib.prototype = new T;
    x.extend(ib.prototype, {
      Hk: function(a, b) {
        return this.VQ(b, T.yb(a))
      },
      th: function(a, b) {
        return T.zb(this.WQ(b, a))
      },
      lngLatToPointFor3D: function(a, b) {
        var c = this
          , d = T.yb(a);
        I.load("coordtrans", function() {
          var a = Tc.cE(c.jj || "bj", d)
            , a = new S(a.x,a.y);
          b && b(a)
        }, o)
      },
      pointToLngLatFor3D: function(a, b) {
        var c = this
          , d = new H(a.x,a.y);
        I.load("coordtrans", function() {
          var a = Tc.bE(c.jj || "bj", d)
            , a = new H(a.lng,a.lat)
            , a = T.zb(a);
          b && b(a)
        }, o)
      },
      VQ: function(a, b) {
        if (I.kb("coordtrans").Cd == I.Kj.lq) {
          var c = Tc.cE(a || "bj", b);
          return new H(c.x,c.y)
        }
        I.load("coordtrans", t());
        return new H(0,0)
      },
      WQ: function(a, b) {
        if (I.kb("coordtrans").Cd == I.Kj.lq) {
          var c = Tc.bE(a || "bj", b);
          return new H(c.lng,c.lat)
        }
        I.load("coordtrans", t());
        return new H(0,0)
      },
      yc: function(a) {
        return Math.pow(2, 20 - a)
      }
    });
    function Wc() {
      this.Lb = "overlay"
    }
    x.lang.ua(Wc, x.lang.Da, "Overlay");
    Wc.Jm = function(a) {
      a *= 1;
      return !a ? 0 : -1E5 * a << 1
    }
    ;
    x.extend(Wc.prototype, {
      Ie: function(a) {
        if (!this.V && Za(this.initialize) && (this.V = this.initialize(a)))
          this.V.style.WebkitUserSelect = "none";
        this.draw()
      },
      initialize: function() {
        ca("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
      },
      draw: function() {
        ca("draw\u65b9\u6cd5\u672a\u5b9e\u73b0")
      },
      remove: function() {
        this.V && this.V.parentNode && this.V.parentNode.removeChild(this.V);
        this.V = p;
        this.dispatchEvent(new M("onremove"))
      },
      U: function() {
        this.V && x.K.U(this.V)
      },
      show: function() {
        this.V && x.K.show(this.V)
      },
      oh: function() {
        return !this.V || "none" == this.V.style.display || "hidden" == this.V.style.visibility ? q : o
      }
    });
    z.Xe(function(a) {
      function b(a, b) {
        var c = K("div")
          , g = c.style;
        g.position = "absolute";
        g.top = g.left = g.width = g.height = "0";
        g.zIndex = b;
        a.appendChild(c);
        return c
      }
      var c = a.R;
      c.qd = a.qd = b(a.platform, 200);
      a.Yd.FD = b(c.qd, 800);
      a.Yd.UE = b(c.qd, 700);
      a.Yd.sL = b(c.qd, 600);
      a.Yd.ME = b(c.qd, 500);
      a.Yd.YM = b(c.qd, 400);
      a.Yd.ZM = b(c.qd, 300);
      a.Yd.fP = b(c.qd, 201);
      a.Yd.Ht = b(c.qd, 200)
    });
    function hb() {
      x.lang.Da.call(this);
      Wc.call(this);
      this.map = p;
      this.Pa = o;
      this.Ab = p;
      this.uH = 0
    }
    x.lang.ua(hb, Wc, "OverlayInternal");
    x.extend(hb.prototype, {
      initialize: function(a) {
        this.map = a;
        x.lang.Da.call(this, this.ba);
        return p
      },
      Ex: v("map"),
      draw: t(),
      Mj: t(),
      remove: function() {
        this.map = p;
        x.lang.ix(this.ba);
        Wc.prototype.remove.call(this)
      },
      U: function() {
        this.Pa !== q && (this.Pa = q)
      },
      show: function() {
        this.Pa !== o && (this.Pa = o)
      },
      oh: function() {
        return !this.V ? q : !!this.Pa
      },
      Ka: v("V"),
      eO: function(a) {
        var a = a || {}, b;
        for (b in a)
          this.z[b] = a[b]
      },
      gu: da("zIndex"),
      rj: function() {
        this.z.rj = o
      },
      yW: function() {
        this.z.rj = q
      },
      Do: da("hg"),
      Mp: function() {
        this.hg = p
      }
    });
    function Xc() {
      this.map = p;
      this.wa = {};
      this.Fe = []
    }
    z.Xe(function(a) {
      var b = new Xc;
      b.map = a;
      a.wa = b.wa;
      a.Fe = b.Fe;
      a.addEventListener("load", function(a) {
        b.draw(a)
      });
      a.addEventListener("moveend", function(a) {
        b.draw(a)
      });
      x.da.la && 8 > x.da.la || "BackCompat" === document.compatMode ? a.addEventListener("zoomend", function(a) {
        setTimeout(function() {
          b.draw(a)
        }, 20)
      }) : a.addEventListener("zoomend", function(a) {
        b.draw(a)
      });
      a.addEventListener("maptypechange", function(a) {
        b.draw(a)
      });
      a.addEventListener("addoverlay", function(a) {
        a = a.target;
        if (a instanceof hb)
          b.wa[a.ba] || (b.wa[a.ba] = a);
        else {
          for (var d = q, e = 0, f = b.Fe.length; e < f; e++)
            if (b.Fe[e] === a) {
              d = o;
              break
            }
          d || b.Fe.push(a)
        }
      });
      a.addEventListener("removeoverlay", function(a) {
        a = a.target;
        if (a instanceof hb)
          delete b.wa[a.ba];
        else
          for (var d = 0, e = b.Fe.length; d < e; d++)
            if (b.Fe[d] === a) {
              b.Fe.splice(d, 1);
              break
            }
      });
      a.addEventListener("clearoverlays", function() {
        this.Xc();
        for (var a in b.wa)
          b.wa[a].z.rj && (b.wa[a].remove(),
            delete b.wa[a]);
        a = 0;
        for (var d = b.Fe.length; a < d; a++)
          b.Fe[a].enableMassClear !== q && (b.Fe[a].remove(),
            b.Fe[a] = p,
            b.Fe.splice(a, 1),
            a--,
            d--)
      });
      a.addEventListener("infowindowopen", function() {
        var a = this.Ab;
        a && (x.K.U(a.zc),
          x.K.U(a.ac))
      });
      a.addEventListener("movestart", function() {
        this.lh() && this.lh().mJ()
      });
      a.addEventListener("moveend", function() {
        this.lh() && this.lh().cJ()
      })
    });
    Xc.prototype.draw = function(a) {
      if (z.pq) {
        var b = z.pq.at(this.map);
        "canvas" === b.Lb && b.canvas && b.QQ(b.canvas.getContext("2d"))
      }
      for (var c in this.wa)
        this.wa[c].draw(a);
      x.jc.Eb(this.Fe, function(a) {
        a.draw()
      });
      this.map.R.ob && this.map.R.ob.ta();
      z.pq && b.JF()
    }
    ;
    function Yc(a) {
      hb.call(this);
      a = a || {};
      this.z = {
        strokeColor: a.strokeColor || "#3a6bdb",
        lc: a.strokeWeight || 5,
        sd: a.strokeOpacity || 0.65,
        strokeStyle: a.strokeStyle || "solid",
        rj: a.enableMassClear === q ? q : o,
        Bk: p,
        Dm: p,
        mf: a.enableEditing === o ? o : q,
        gN: 5,
        m0: q,
        jf: a.enableClicking === q ? q : o,
        si: a.icons && 0 < a.icons.length ? a.icons : p
      };
      0 >= this.z.lc && (this.z.lc = 5);
      if (0 > this.z.sd || 1 < this.z.sd)
        this.z.sd = 0.65;
      if (0 > this.z.qg || 1 < this.z.qg)
        this.z.qg = 0.65;
      "solid" != this.z.strokeStyle && "dashed" != this.z.strokeStyle && (this.z.strokeStyle = "solid");
      this.V = p;
      this.Xu = new gb(0,0);
      this.gf = [];
      this.mc = [];
      this.Qa = {}
    }
    x.lang.ua(Yc, hb, "Graph");
    Yc.zx = function(a) {
      var b = [];
      if (!a)
        return b;
      ab(a) && x.jc.Eb(a.split(";"), function(a) {
        a = a.split(",");
        b.push(new N(a[0],a[1]))
      });
      "[object Array]" == Object.prototype.toString.apply(a) && 0 < a.length && (b = a);
      return b
    }
    ;
    Yc.dF = [0.09, 0.0050, 1.0E-4, 1.0E-5];
    x.extend(Yc.prototype, {
      initialize: function(a) {
        this.map = a;
        return p
      },
      draw: t(),
      Ur: function(a) {
        this.gf.length = 0;
        this.ia = Yc.zx(a).slice(0);
        this.Jh()
      },
      le: function(a) {
        this.Ur(a)
      },
      Jh: function() {
        if (this.ia) {
          var a = this;
          a.Xu = new gb;
          x.jc.Eb(this.ia, function(b) {
            a.Xu.extend(b)
          })
        }
      },
      ve: v("ia"),
      qn: function(a, b) {
        b && this.ia[a] && (this.gf.length = 0,
          this.ia[a] = new H(b.lng,b.lat),
          this.Jh())
      },
      setStrokeColor: function(a) {
        this.z.strokeColor = a
      },
      VX: function() {
        return this.z.strokeColor
      },
      aq: function(a) {
        0 < a && (this.z.lc = a)
      },
      TL: function() {
        return this.z.lc
      },
      Zp: function(a) {
        a == j || (1 < a || 0 > a) || (this.z.sd = a)
      },
      WX: function() {
        return this.z.sd
      },
      $t: function(a) {
        1 < a || 0 > a || (this.z.qg = a)
      },
      sX: function() {
        return this.z.qg
      },
      $p: function(a) {
        "solid" != a && "dashed" != a || (this.z.strokeStyle = a)
      },
      SL: function() {
        return this.z.strokeStyle
      },
      setFillColor: function(a) {
        this.z.fillColor = a || ""
      },
      rX: function() {
        return this.z.fillColor
      },
      Id: v("Xu"),
      remove: function() {
        this.map && this.map.removeEventListener("onmousemove", this.vv);
        hb.prototype.remove.call(this);
        this.gf.length = 0
      },
      mf: function() {
        if (!(2 > this.ia.length)) {
          this.z.mf = o;
          var a = this;
          I.load("poly", function() {
            a.$l()
          }, o)
        }
      },
      xW: function() {
        this.z.mf = q;
        var a = this;
        I.load("poly", function() {
          a.rk()
        }, o)
      },
      oX: function() {
        return this.z.mf
      }
    });
    function Zc(a) {
      hb.call(this);
      this.V = this.map = p;
      this.z = {
        width: 0,
        height: 0,
        Aa: new L(0,0),
        opacity: 1,
        background: "transparent",
        gy: 1,
        LM: "#000",
        QY: "solid",
        point: p
      };
      this.eO(a);
      this.point = this.z.point
    }
    x.lang.ua(Zc, hb, "Division");
    x.extend(Zc.prototype, {
      Mj: function() {
        var a = this.z
          , b = this.content
          , c = ['<div class="BMap_Division" style="position:absolute;'];
        c.push("width:" + a.width + "px;display:block;");
        c.push("overflow:hidden;");
        "none" != a.borderColor && c.push("border:" + a.gy + "px " + a.QY + " " + a.LM + ";");
        c.push("opacity:" + a.opacity + "; filter:(opacity=" + 100 * a.opacity + ")");
        c.push("background:" + a.background + ";");
        c.push('z-index:60;">');
        c.push(b);
        c.push("</div>");
        this.V = Ab(this.map.Rf().UE, c.join(""))
      },
      initialize: function(a) {
        this.map = a;
        this.Mj();
        this.V && x.M(this.V, G() ? "touchstart" : "mousedown", function(a) {
          na(a)
        });
        return this.V
      },
      draw: function() {
        var a = this.map.We(this.z.point);
        this.z.Aa = new L(-Math.round(this.z.width / 2) - Math.round(this.z.gy),-Math.round(this.z.height / 2) - Math.round(this.z.gy));
        this.V.style.left = a.x + this.z.Aa.width + "px";
        this.V.style.top = a.y + this.z.Aa.height + "px"
      },
      ha: function() {
        return this.z.point
      },
      l1: function() {
        return this.map.Cc(this.ha())
      },
      ta: function(a) {
        this.z.point = a;
        this.draw()
      },
      f_: function(a, b) {
        this.z.width = Math.round(a);
        this.z.height = Math.round(b);
        this.V && (this.V.style.width = this.z.width + "px",
          this.V.style.height = this.z.height + "px",
          this.draw())
      }
    });
    function $c(a, b, c) {
      a && b && (this.imageUrl = a,
        this.size = b,
        a = new L(Math.floor(b.width / 2),Math.floor(b.height / 2)),
        c = c || {},
        a = c.anchor || a,
        b = c.imageOffset || new L(0,0),
        this.imageSize = c.imageSize,
        this.anchor = a,
        this.imageOffset = b,
        this.infoWindowAnchor = c.infoWindowAnchor || this.anchor,
        this.printImageUrl = c.printImageUrl || "")
    }
    x.extend($c.prototype, {
      fO: function(a) {
        a && (this.imageUrl = a)
      },
      v_: function(a) {
        a && (this.printImageUrl = a)
      },
      Ce: function(a) {
        a && (this.size = new L(a.width,a.height))
      },
      qc: function(a) {
        a && (this.anchor = new L(a.width,a.height))
      },
      au: function(a) {
        a && (this.imageOffset = new L(a.width,a.height))
      },
      l_: function(a) {
        a && (this.infoWindowAnchor = new L(a.width,a.height))
      },
      i_: function(a) {
        a && (this.imageSize = new L(a.width,a.height))
      },
      toString: ea("Icon")
    });
    function ad(a, b) {
      if (a) {
        b = b || {};
        this.style = {
          anchor: b.anchor || new L(0,0),
          fillColor: b.fillColor || "#000",
          qg: b.fillOpacity || 0,
          scale: b.scale || 1,
          rotation: b.rotation || 0,
          strokeColor: b.strokeColor || "#000",
          sd: b.strokeOpacity || 1,
          lc: b.strokeWeight
        };
        this.Lb = "number" === typeof a ? a : "UserDefined";
        this.Mi = this.style.anchor;
        this.Ar = new L(0,0);
        this.anchor = p;
        this.xB = a;
        var c = this;
        I.load("symbol", function() {
          c.Qn()
        }, o)
      }
    }
    x.extend(ad.prototype, {
      setPath: da("xB"),
      setAnchor: function(a) {
        this.Mi = this.style.anchor = a
      },
      setRotation: function(a) {
        this.style.rotation = a
      },
      setScale: function(a) {
        this.style.scale = a
      },
      setStrokeWeight: function(a) {
        this.style.lc = a
      },
      setStrokeColor: function(a) {
        a = x.os.DC(a, this.style.sd);
        this.style.strokeColor = a
      },
      setStrokeOpacity: function(a) {
        this.style.sd = a
      },
      setFillOpacity: function(a) {
        this.style.qg = a
      },
      setFillColor: function(a) {
        this.style.fillColor = a
      }
    });
    function bd(a, b, c, d) {
      a && (this.Pv = {},
        this.qL = d ? !!d : q,
        this.Vc = [],
        this.N_ = a instanceof ad ? a : p,
        this.WI = b === j ? o : !!(b.indexOf("%") + 1),
        this.ek = isNaN(parseFloat(b)) ? 1 : this.WI ? parseFloat(b) / 100 : parseFloat(b),
        this.XI = !!(c.indexOf("%") + 1),
        this.repeat = c != j ? this.XI ? parseFloat(c) / 100 : parseFloat(c) : 0)
    }
    ;function cd(a, b) {
      x.lang.Da.call(this);
      this.content = a;
      this.map = p;
      b = b || {};
      this.z = {
        width: b.width || 0,
        height: b.height || 0,
        maxWidth: b.maxWidth || 730,
        Aa: b.offset || new L(0,0),
        title: b.title || "",
        VE: b.maxContent || "",
        fh: b.enableMaximize || q,
        Qs: b.enableAutoPan === q ? q : o,
        rD: b.enableCloseOnClick === q ? q : o,
        margin: b.margin || [10, 10, 40, 10],
        yC: b.collisions || [[10, 10], [10, 10], [10, 10], [10, 10]],
        pY: q,
        kZ: b.onClosing || ea(o),
        hL: q,
        wD: b.enableParano === o ? o : q,
        message: b.message,
        yD: b.enableSearchTool === o ? o : q,
        Rx: b.headerContent || "",
        sD: b.enableContentScroll || q
      };
      if (0 != this.z.width && (220 > this.z.width && (this.z.width = 220),
      730 < this.z.width))
        this.z.width = 730;
      if (0 != this.z.height && (60 > this.z.height && (this.z.height = 60),
      650 < this.z.height))
        this.z.height = 650;
      if (0 != this.z.maxWidth && (220 > this.z.maxWidth && (this.z.maxWidth = 220),
      730 < this.z.maxWidth))
        this.z.maxWidth = 730;
      this.fe = q;
      this.Ii = F.qa;
      this.cb = p;
      var c = this;
      I.load("infowindow", function() {
        c.xb()
      })
    }
    x.lang.ua(cd, x.lang.Da, "InfoWindow");
    x.extend(cd.prototype, {
      setWidth: function(a) {
        !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220),
        730 < a && (a = 730)),
          this.z.width = a)
      },
      setHeight: function(a) {
        !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (60 > a && (a = 60),
        650 < a && (a = 650)),
          this.z.height = a)
      },
      iO: function(a) {
        !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220),
        730 < a && (a = 730)),
          this.z.maxWidth = a)
      },
      Dc: function(a) {
        this.z.title = a
      },
      getTitle: function() {
        return this.z.title
      },
      bd: da("content"),
      zk: v("content"),
      cu: function(a) {
        this.z.VE = a + ""
      },
      ke: t(),
      Qs: function() {
        this.z.Qs = o
      },
      disableAutoPan: function() {
        this.z.Qs = q
      },
      enableCloseOnClick: function() {
        this.z.rD = o
      },
      disableCloseOnClick: function() {
        this.z.rD = q
      },
      fh: function() {
        this.z.fh = o
      },
      lx: function() {
        this.z.fh = q
      },
      show: function() {
        this.Pa = o
      },
      U: function() {
        this.Pa = q
      },
      close: function() {
        this.U()
      },
      ky: function() {
        this.fe = o
      },
      restore: function() {
        this.fe = q
      },
      oh: function() {
        return this.Va()
      },
      Va: ea(q),
      ha: function() {
        if (this.cb && this.cb.ha)
          return this.cb.ha()
      },
      Qf: function() {
        return this.z.Aa
      }
    });
    Ka.prototype.Mb = function(a, b) {
      if (a instanceof cd && (b instanceof N || b instanceof H)) {
        var c = this.R;
        c.Tm ? c.Tm.ta(b) : (c.Tm = new V(b,{
          icon: new $c(F.qa + "blank.gif",{
            width: 1,
            height: 1
          }),
          offset: new L(0,0),
          clickable: q
        }),
          c.Tm.TR = 1);
        this.Ja(c.Tm);
        c.Tm.Mb(a)
      }
    }
    ;
    Ka.prototype.Xc = function() {
      var a = this.R.ob || this.R.ul;
      a && a.cb && a.cb.Xc()
    }
    ;
    hb.prototype.Mb = function(a) {
      this.map && (this.map.Xc(),
        a.Pa = o,
        this.map.R.ul = a,
        a.cb = this,
        x.lang.Da.call(a, a.ba))
    }
    ;
    hb.prototype.Xc = function() {
      this.map && this.map.R.ul && (this.map.R.ul.Pa = q,
        x.lang.ix(this.map.R.ul.ba),
        this.map.R.ul = p)
    }
    ;
    function dd(a, b) {
      hb.call(this);
      this.content = a;
      this.V = this.map = p;
      b = b || {};
      this.z = {
        width: 0,
        Aa: b.offset || new L(0,0),
        dq: {
          backgroundColor: "#fff",
          border: "1px solid #f00",
          padding: "1px",
          whiteSpace: "nowrap",
          font: "12px " + F.fontFamily,
          zIndex: "80",
          MozUserSelect: "none"
        },
        position: b.position || p,
        rj: b.enableMassClear === q ? q : o,
        jf: o
      };
      0 > this.z.width && (this.z.width = 0);
      Hb(b.enableClicking) && (this.z.jf = b.enableClicking);
      this.point = this.z.position;
      var c = this;
      I.load("marker", function() {
        c.xb()
      })
    }
    x.lang.ua(dd, hb, "Label");
    x.extend(dd.prototype, {
      ha: function() {
        return this.Ev ? this.Ev.ha() : this.point
      },
      ta: function(a) {
        if ((a instanceof N || a instanceof H) && !this.Fx())
          this.point = this.z.position = new H(a.lng,a.lat)
      },
      bd: da("content"),
      IF: function(a) {
        0 <= a && 1 >= a && (this.z.opacity = a)
      },
      Ye: function(a) {
        a instanceof L && (this.z.Aa = new L(a.width,a.height))
      },
      Qf: function() {
        return this.z.Aa
      },
      Nd: function(a) {
        a = a || {};
        this.z.dq = x.extend(this.z.dq, a)
      },
      Ci: function(a) {
        return this.Nd(a)
      },
      Dc: function(a) {
        this.z.title = a || ""
      },
      getTitle: function() {
        return this.z.title
      },
      hO: function(a) {
        this.point = (this.Ev = a) ? this.z.position = a.ha() : this.z.position = p
      },
      Fx: function() {
        return this.Ev || p
      },
      zk: v("content")
    });
    function ed(a, b) {
      if (0 !== arguments.length) {
        hb.apply(this, arguments);
        b = b || {};
        this.z = {
          $a: a,
          opacity: b.opacity || 1,
          up: b.imageURL || "",
          Gs: b.displayOnMinLevel || 1,
          rj: b.enableMassClear === q ? q : o,
          Fs: b.displayOnMaxLevel || 19,
          H_: b.stretch || q
        };
        0 === b.opacity && (this.z.opacity = 0);
        var c = this;
        I.load("groundoverlay", function() {
          c.xb()
        })
      }
    }
    x.lang.ua(ed, hb, "GroundOverlay");
    x.extend(ed.prototype, {
      setBounds: function(a) {
        this.z.$a = a
      },
      getBounds: function() {
        return this.z.$a
      },
      setOpacity: function(a) {
        this.z.opacity = a
      },
      getOpacity: function() {
        return this.z.opacity
      },
      setImageURL: function(a) {
        this.z.up = a
      },
      getImageURL: function() {
        return this.z.up
      },
      setDisplayOnMinLevel: function(a) {
        this.z.Gs = a
      },
      getDisplayOnMinLevel: function() {
        return this.z.Gs
      },
      setDisplayOnMaxLevel: function(a) {
        this.z.Fs = a
      },
      getDisplayOnMaxLevel: function() {
        return this.z.Fs
      }
    });
    var fd = 3
      , gd = 4;
    function hd() {
      var a = document.createElement("canvas");
      return !(!a.getContext || !a.getContext("2d"))
    }
    function id(a, b) {
      var c = this;
      hd() && (a === j && ca(Error("\u6ca1\u6709\u4f20\u5165points\u6570\u636e")),
      "[object Array]" !== Object.prototype.toString.call(a) && ca(Error("points\u6570\u636e\u4e0d\u662f\u6570\u7ec4")),
        b = b || {},
        hb.apply(c, arguments),
        c.ea = {
          ia: a
        },
        c.z = {
          shape: b.shape || fd,
          size: b.size || gd,
          color: b.color || "#fa937e",
          rj: o
        },
        this.uB = [],
        this.pe = [],
        I.load("pointcollection", function() {
          for (var a = 0, b; b = c.uB[a]; a++)
            c[b.method].apply(c, b.arguments);
          for (a = 0; b = c.pe[a]; a++)
            c[b.method].apply(c, b.arguments)
        }))
    }
    x.lang.ua(id, hb, "PointCollection");
    x.extend(id.prototype, {
      initialize: function(a) {
        this.uB && this.uB.push({
          method: "initialize",
          arguments: arguments
        })
      },
      setPoints: function(a) {
        this.pe && this.pe.push({
          method: "setPoints",
          arguments: arguments
        })
      },
      setStyles: function(a) {
        this.pe && this.pe.push({
          method: "setStyles",
          arguments: arguments
        })
      },
      clear: function() {
        this.pe && this.pe.push({
          method: "clear",
          arguments: arguments
        })
      },
      remove: function() {
        this.pe && this.pe.push({
          method: "remove",
          arguments: arguments
        })
      }
    });
    var jd = new $c(F.qa + "marker_red_sprite.png",new L(19,25),{
      anchor: new L(10,25),
      infoWindowAnchor: new L(10,0)
    })
      , kd = new $c(F.qa + "marker_red_sprite.png",new L(20,11),{
      anchor: new L(6,11),
      imageOffset: new L(-19,-13)
    });
    function V(a, b) {
      hb.call(this);
      b = b || {};
      this.point = a;
      this.Fq = this.map = p;
      this.z = {
        Aa: b.offset || new L(0,0),
        zj: b.icon || jd,
        Tk: kd,
        title: b.title || "",
        label: p,
        lK: b.baseZIndex || 0,
        jf: o,
        f5: q,
        HE: q,
        rj: b.enableMassClear === q ? q : o,
        Fb: q,
        PN: b.raiseOnDrag === o ? o : q,
        WN: q,
        Gd: b.draggingCursor || F.Gd,
        rotation: b.rotation || 0
      };
      b.icon && !b.shadow && (this.z.Tk = p);
      b.enableDragging && (this.z.Fb = b.enableDragging);
      Hb(b.enableClicking) && (this.z.jf = b.enableClicking);
      var c = this;
      I.load("marker", function() {
        c.xb()
      })
    }
    V.Su = Wc.Jm(-90) + 1E6;
    V.AG = V.Su + 1E6;
    x.lang.ua(V, hb, "Marker");
    x.extend(V.prototype, {
      Vb: function(a) {
        if (a instanceof $c || a instanceof ad)
          this.z.zj = a
      },
      ep: function() {
        return this.z.zj
      },
      Qy: function(a) {
        a instanceof $c && (this.z.Tk = a)
      },
      getShadow: function() {
        return this.z.Tk
      },
      mn: function(a) {
        this.z.label = a || p
      },
      ZD: function() {
        return this.z.label
      },
      Fb: function() {
        this.z.Fb = o
      },
      WC: function() {
        this.z.Fb = q
      },
      bo: v("point"),
      ha: function() {
        return this.point instanceof N || this.point instanceof H ? this.map ? eb(this.point, this.map) : new N(this.point.lng,this.point.lat) : this.point
      },
      ta: function(a) {
        this.point = this.map ? Ya(a, this.map) : a
      },
      Di: function(a, b) {
        this.z.HE = !!a;
        a && (this.WG = b || 0)
      },
      Dc: function(a) {
        this.z.title = a + ""
      },
      getTitle: function() {
        return this.z.title
      },
      Ye: function(a) {
        a instanceof L && (this.z.Aa = a)
      },
      Qf: function() {
        return this.z.Aa
      },
      ln: da("Fq"),
      Yp: function(a) {
        this.z.rotation = a
      },
      QL: function() {
        return this.z.rotation
      }
    });
    function ld(a, b) {
      Yc.call(this, b);
      b = b || {};
      this.z.qg = b.fillOpacity ? b.fillOpacity : 0.65;
      this.z.fillColor = "" == b.fillColor ? "" : b.fillColor ? b.fillColor : "#fff";
      this.le(a);
      var c = this;
      I.load("poly", function() {
        c.xb()
      })
    }
    x.lang.ua(ld, Yc, "Polygon");
    x.extend(ld.prototype, {
      le: function(a, b) {
        this.zo = Yc.zx(a).slice(0);
        var c = Yc.zx(a).slice(0);
        1 < c.length && c.push(new N(c[0].lng,c[0].lat));
        Yc.prototype.le.call(this, c, b)
      },
      qn: function(a, b) {
        this.zo[a] && (this.zo[a] = new N(b.lng,b.lat),
          this.ia[a] = new N(b.lng,b.lat),
        0 == a && !this.ia[0].ab(this.ia[this.ia.length - 1]) && (this.ia[this.ia.length - 1] = new N(b.lng,b.lat)),
          this.Jh())
      },
      ve: function() {
        var a = this.zo;
        0 == a.length && (a = this.ia);
        return a
      }
    });
    function pd(a, b) {
      Yc.call(this, b);
      this.Ur(a);
      var c = this;
      I.load("poly", function() {
        c.xb()
      })
    }
    x.lang.ua(pd, Yc, "Polyline");
    function qd(a, b, c) {
      this.point = a;
      this.xa = Math.abs(b);
      ld.call(this, [], c)
    }
    qd.dF = [0.01, 1.0E-4, 1.0E-5, 4.0E-6];
    x.lang.ua(qd, ld, "Circle");
    x.extend(qd.prototype, {
      initialize: function(a) {
        this.map = a;
        this.ia = this.rv(this.point, this.xa);
        this.Jh();
        return p
      },
      pc: function() {
        return eb(this.point, this.map)
      },
      wc: v("point"),
      Wf: function(a) {
        a && (this.point = a)
      },
      OL: v("xa"),
      wf: function(a) {
        this.xa = Math.abs(a)
      },
      rv: function(a, b) {
        if (!a || !b || !this.map)
          return [];
        for (var c = [], d = b / 6378800, e = Math.PI / 180 * a.lat, f = Math.PI / 180 * a.lng, g = 0; 360 > g; g += 9) {
          var i = Math.PI / 180 * g
            , k = Math.asin(Math.sin(e) * Math.cos(d) + Math.cos(e) * Math.sin(d) * Math.cos(i))
            , i = new N(((f - Math.atan2(Math.sin(i) * Math.sin(d) * Math.cos(e), Math.cos(d) - Math.sin(e) * Math.sin(k)) + Math.PI) % (2 * Math.PI) - Math.PI) * (180 / Math.PI),k * (180 / Math.PI));
          c.push(i)
        }
        d = c[0];
        c.push(new N(d.lng,d.lat));
        return c
      }
    });
    var rd = {};
    function sd(a) {
      this.map = a;
      this.Sm = [];
      this.Xf = [];
      this.Gg = [];
      this.DV = 300;
      this.nF = 0;
      this.wg = {};
      this.ij = {};
      this.vh = 0;
      this.AE = o;
      this.MK = {};
      this.ko = this.Tn(1);
      this.md = this.Tn(2);
      this.El = this.Tn(3);
      a.platform.appendChild(this.ko);
      a.platform.appendChild(this.md);
      a.platform.appendChild(this.El);
      var b = 256 * Math.pow(2, 15)
        , c = 3 * b
        , a = T.yb(new H(180,0)).lng
        , c = c - a
        , b = -3 * b
        , d = T.yb(new H(-180,0)).lng;
      this.yI = a;
      this.zI = d;
      this.aB = c + (d - b);
      this.AI = a - d
    }
    z.Xe(function(a) {
      var b = new sd(a);
      b.ra();
      a.gb = b
    });
    x.extend(sd.prototype, {
      ra: function() {
        var a = this
          , b = a.map;
        b.addEventListener("loadcode", function() {
          a.hy()
        });
        b.addEventListener("addtilelayer", function(b) {
          a.$g(b)
        });
        b.addEventListener("removetilelayer", function(b) {
          a.Bh(b)
        });
        b.addEventListener("setmaptype", function(b) {
          a.Eg(b)
        });
        b.addEventListener("zoomstartcode", function(b) {
          a.Kc(b)
        });
        b.addEventListener("setcustomstyles", function(b) {
          a.bu(b.target);
          a.Uf(o)
        })
      },
      hy: function() {
        var a = this;
        if (x.da.la)
          try {
            document.execCommand("BackgroundImageCache", q, o)
          } catch (b) {}
        this.loaded || a.Xx();
        a.Uf();
        this.loaded || (this.loaded = o,
          I.load("tile", function() {
            a.lQ()
          }))
      },
      Xx: function() {
        for (var a = this.map.oa().vr, b = 0; b < a.length; b++) {
          var c = new td;
          x.extend(c, a[b]);
          this.Sm.push(c);
          c.ra(this.map, this.ko)
        }
        this.bu()
      },
      Tn: function(a) {
        var b = K("div");
        b.style.position = "absolute";
        b.style.overflow = "visible";
        b.style.left = b.style.top = "0";
        b.style.zIndex = a;
        return b
      },
      zf: function() {
        this.vh--;
        var a = this;
        this.AE && (this.map.dispatchEvent(new M("onfirsttileloaded")),
          this.AE = q);
        0 == this.vh && (this.Qi && (clearTimeout(this.Qi),
          this.Qi = p),
          this.Qi = setTimeout(function() {
            if (a.vh == 0) {
              a.map.dispatchEvent(new M("ontilesloaded"));
              a.AE = o
            }
            a.Qi = p
          }, 80))
      },
      jE: function(a, b) {
        return "TILE-" + b.ba + "-" + a[0] + "-" + a[1] + "-" + a[2]
      },
      Ux: function(a) {
        var b = a.Gb;
        b && zb(b) && b.parentNode.removeChild(b);
        delete this.wg[a.name];
        a.loaded || (ud(a),
          a.Gb = p,
          a.Vm = p)
      },
      Im: function(a, b, c) {
        var d = this.map
          , e = d.oa()
          , f = d.Na
          , g = d.dc
          , i = e.yc(f)
          , k = this.DL()
          , l = k[0]
          , m = k[1]
          , n = k[2]
          , s = k[3]
          , u = k[4]
          , c = "undefined" != typeof c ? c : 0
          , e = e.k.Ob
          , k = d.ba.replace(/^TANGRAM_/, "");
        for (this.Rc ? this.Rc.length = 0 : this.Rc = []; l < n; l++)
          for (var w = m; w < s; w++) {
            var y = l
              , B = w;
            this.Rc.push([y, B]);
            y = k + "_" + b + "_" + y + "_" + B + "_" + f;
            this.MK[y] = y
          }
        this.Rc.sort(function(a) {
          return function(b, c) {
            return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
          }
        }([u[0] - 1, u[1] - 1]));
        g = [Math.round(-g.lng / i), Math.round(g.lat / i)];
        l = -d.offsetY + d.height / 2;
        a.style.left = -d.offsetX + d.width / 2 + "px";
        a.style.top = l + "px";
        this.Oe ? this.Oe.length = 0 : this.Oe = [];
        l = 0;
        for (d = a.childNodes.length; l < d; l++)
          w = a.childNodes[l],
            w.rr = q,
            this.Oe.push(w);
        if (l = this.Ym)
          for (var A in l)
            delete l[A];
        else
          this.Ym = {};
        this.Pe ? this.Pe.length = 0 : this.Pe = [];
        l = 0;
        for (d = this.Rc.length; l < d; l++) {
          A = this.Rc[l][0];
          i = this.Rc[l][1];
          w = 0;
          for (m = this.Oe.length; w < m; w++)
            if (n = this.Oe[w],
            n.id == k + "_" + b + "_" + A + "_" + i + "_" + f) {
              n.rr = o;
              this.Ym[n.id] = n;
              break
            }
        }
        l = 0;
        for (d = this.Oe.length; l < d; l++)
          n = this.Oe[l],
          n.rr || this.Pe.push(n);
        this.yn = [];
        w = (e + c) * this.map.B.devicePixelRatio;
        l = 0;
        for (d = this.Rc.length; l < d; l++)
          A = this.Rc[l][0],
            i = this.Rc[l][1],
            s = A * e + g[0] - c / 2,
            u = (-1 - i) * e + g[1] - c / 2,
            y = k + "_" + b + "_" + A + "_" + i + "_" + f,
            m = this.Ym[y],
            n = p,
            m ? (n = m.style,
              n.left = s + "px",
              n.top = u + "px",
            m.af || this.yn.push([A, i, m])) : (0 < this.Pe.length ? (m = this.Pe.shift(),
              m.getContext("2d").clearRect(-c / 2, -c / 2, w, w),
              n = m.style) : (m = document.createElement("canvas"),
              n = m.style,
              n.position = "absolute",
              n.width = e + c + "px",
              n.height = e + c + "px",
            this.by() && (n.WebkitTransform = "scale(1.001)"),
              m.setAttribute("width", w),
              m.setAttribute("height", w),
              a.appendChild(m)),
              m.id = y,
              n.left = s + "px",
              n.top = u + "px",
            -1 < y.indexOf("bg") && (s = "#F3F1EC",
            this.map.B.Io && (s = this.map.B.Io),
              n.background = s ? s : ""),
              this.yn.push([A, i, m])),
            m.style.visibility = "";
        l = 0;
        for (d = this.Pe.length; l < d; l++)
          this.Pe[l].style.visibility = "hidden";
        return this.yn
      },
      by: function() {
        return /M040/i.test(navigator.userAgent)
      },
      DL: function() {
        var a = this.map
          , b = a.oa()
          , c = b.oE(a.Na)
          , d = a.dc
          , e = Math.ceil(d.lng / c)
          , f = Math.ceil(d.lat / c)
          , b = b.k.Ob
          , c = [e, f, (d.lng - e * c) / c * b, (d.lat - f * c) / c * b];
        return [c[0] - Math.ceil((a.width / 2 - c[2]) / b), c[1] - Math.ceil((a.height / 2 - c[3]) / b), c[0] + Math.ceil((a.width / 2 + c[2]) / b), c[1] + Math.ceil((a.height / 2 + c[3]) / b), c]
      },
      C_: function(a, b, c, d) {
        var e = this;
        e.T1 = b;
        var f = this.map.oa()
          , g = e.jE(a, c)
          , i = f.k.Ob
          , b = [a[0] * i + b[0], (-1 - a[1]) * i + b[1]]
          , k = this.wg[g];
        if (this.map.oa() !== $a && this.map.oa() !== Sa) {
          var l = this.Mw(a[0], a[2]).offsetX;
          b[0] += l;
          b.p1 = l
        }
        k && k.Gb ? (xb(k.Gb, b),
        d && (d = new S(a[0],a[1]),
          f = this.map.B.ze ? this.map.B.ze.style : "normal",
          d = c.getTilesUrl(d, a[2], f),
          k.loaded = q,
          vd(k, d)),
          k.loaded ? this.zf() : wd(k, function() {
            e.zf()
          })) : (k = this.ij[g]) && k.Gb ? (c.Pb.insertBefore(k.Gb, c.Pb.lastChild),
          this.wg[g] = k,
          xb(k.Gb, b),
        d && (d = new S(a[0],a[1]),
          f = this.map.B.ze ? this.map.B.ze.style : "normal",
          d = c.getTilesUrl(d, a[2], f),
          k.loaded = q,
          vd(k, d)),
          k.loaded ? this.zf() : wd(k, function() {
            e.zf()
          })) : (k = i * Math.pow(2, f.Bm() - a[2]),
          new H(a[0] * k,a[1] * k),
          d = new S(a[0],a[1]),
          f = this.map.B.ze ? this.map.B.ze.style : "normal",
          d = c.getTilesUrl(d, a[2], f),
          k = new xd(this,d,b,a,c),
          wd(k, function() {
            e.zf()
          }),
          k.jo(),
          this.wg[g] = k)
      },
      zf: function() {
        this.vh--;
        var a = this;
        0 == this.vh && (this.Qi && (clearTimeout(this.Qi),
          this.Qi = p),
          this.Qi = setTimeout(function() {
            if (a.vh == 0) {
              a.map.dispatchEvent(new M("ontilesloaded"));
              if (ua) {
                if (ra && sa && ta) {
                  var b = bb()
                    , c = a.map.tb();
                  setTimeout(function() {
                    Qa(5030, {
                      load_script_time: sa - ra,
                      load_tiles_time: b - ta,
                      map_width: c.width,
                      map_height: c.height,
                      map_size: c.width * c.height
                    })
                  }, 1E4);
                  z.Jn("cus.fire", "time", {
                    z_imgfirstloaded: b - ta
                  })
                }
                ua = q
              }
            }
            a.Qi = p
          }, 80))
      },
      jE: function(a, b) {
        return this.map.oa() === Pa ? "TILE-" + b.ba + "-" + this.map.Sw + "-" + a[0] + "-" + a[1] + "-" + a[2] : "TILE-" + b.ba + "-" + a[0] + "-" + a[1] + "-" + a[2]
      },
      Ux: function(a) {
        var b = a.Gb;
        b && (yd(b),
        zb(b) && b.parentNode.removeChild(b));
        delete this.wg[a.name];
        a.loaded || (yd(b),
          ud(a),
          a.Gb = p,
          a.Vm = p)
      },
      Mw: function(a, b) {
        for (var c = 0, d = 6 * Math.pow(2, b - 3), e = d / 2 - 1, f = -d / 2; a > e; )
          a -= d,
            c -= this.aB;
        for (; a < f; )
          a += d,
            c += this.aB;
        c = Math.round(c / Math.pow(2, 18 - b));
        return {
          offsetX: c,
          ns: a
        }
      },
      FV: function(a) {
        for (var b = a.lng; b > this.yI; )
          b -= this.AI;
        for (; b < this.zI; )
          b += this.AI;
        a.lng = b;
        return a
      },
      GV: function(a, b) {
        for (var c = 256 * Math.pow(2, 18 - b), d = Math.floor(this.yI / c), e = Math.floor(this.zI / c), c = Math.floor(this.aB / c), f = [], g = 0; g < a.length; g++) {
          var i = a[g]
            , k = i[0]
            , i = i[1];
          if (k >= d) {
            var k = k + c
              , l = "id_" + k + "_" + i + "_" + b;
            a[l] || (a[l] = o,
              f.push([k, i]))
          } else
            k <= e && (k -= c,
              l = "id_" + k + "_" + i + "_" + b,
            a[l] || (a[l] = o,
              f.push([k, i])))
        }
        for (g = 0; g < f.length; g++)
          a.push(f[g]);
        return a
      },
      Uf: function(a) {
        var b = this;
        if (b.map.oa() == Pa)
          I.load("coordtrans", function() {
            b.map.Sb || (b.map.Sb = Pa.yk(b.map.bh),
              b.map.Sw = Pa.BL(b.map.Sb));
            b.CI()
          }, o);
        else {
          if (a && a)
            for (var c in this.ij)
              delete this.ij[c];
          b.CI(a)
        }
      },
      CI: function(a) {
        var b = this.Sm.concat(this.Xf)
          , c = b.length
          , d = this.map
          , e = d.oa()
          , f = d.dc;
        this.map.oa() !== $a && this.map.oa() !== Sa && (f = this.FV(f));
        for (var g = 0; g < c; g++) {
          var i = b[g];
          if (i.fc && d.Na < i.fc)
            break;
          if (i.Jw) {
            var k = this.Pb = i.Pb;
            if (a) {
              var l = k;
              if (l && l.childNodes)
                for (var m = l.childNodes.length, n = m - 1; 0 <= n; n--)
                  m = l.childNodes[n],
                    l.removeChild(m),
                    m = p
            }
            if (this.map.Wb()) {
              this.md.style.display = "block";
              k.style.display = "none";
              this.map.dispatchEvent(new M("vectorchanged"), {
                isvector: o
              });
              continue
            } else
              k.style.display = "block",
                this.md.style.display = "none",
                this.map.dispatchEvent(new M("vectorchanged"), {
                  isvector: q
                })
          }
          if (!i.pI && !(i.yp && !this.map.Wb() || i.zM && this.map.Wb())) {
            d = this.map;
            e = d.oa();
            k = e.kp();
            m = d.Na;
            f = d.dc;
            e == Pa && f.ab(new H(0,0)) && (f = d.dc = k.Hk(d.re, d.Sb));
            var s = e.yc(m)
              , k = e.oE(m)
              , l = Math.ceil(f.lng / k)
              , u = Math.ceil(f.lat / k)
              , w = e.k.Ob
              , k = [l, u, (f.lng - l * k) / k * w, (f.lat - u * k) / k * w]
              , n = k[0] - Math.ceil((d.width / 2 - k[2]) / w)
              , l = k[1] - Math.ceil((d.height / 2 - k[3]) / w)
              , u = k[0] + Math.ceil((d.width / 2 + k[2]) / w)
              , y = 0;
            e === Pa && 15 == d.ga() && (y = 1);
            e = k[1] + Math.ceil((d.height / 2 + k[3]) / w) + y;
            this.gK = new H(f.lng,f.lat);
            var B = this.wg, w = -this.gK.lng / s, y = this.gK.lat / s, s = [Math.ceil(w), Math.ceil(y)], f = d.ga(), A;
            for (A in B) {
              var E = B[A]
                , C = E.info;
              (C[2] != f || C[2] == f && (n > C[0] || u <= C[0] || l > C[1] || e <= C[1])) && this.Ux(E)
            }
            B = -d.offsetX + d.width / 2;
            E = -d.offsetY + d.height / 2;
            i.Pb && (i.Pb.style.left = Math.ceil(w + B) - s[0] + "px",
              i.Pb.style.top = Math.ceil(y + E) - s[1] + "px",
              i.Pb.style.WebkitTransform = "translate3d(0,0,0)");
            w = [];
            for (d.YB = []; n < u; n++)
              for (y = l; y < e; y++)
                w.push([n, y]),
                  d.YB.push({
                    x: n,
                    y: y
                  });
            this.map.oa() !== $a && this.map.oa() !== Sa && (w = this.GV(w, m));
            w.sort(function(a) {
              return function(b, c) {
                return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
              }
            }([k[0] - 1, k[1] - 1]));
            m = w.length;
            this.vh += m;
            for (n = 0; n < m; n++)
              this.C_([w[n][0], w[n][1], f], s, i, a)
          }
        }
      },
      $g: function(a) {
        var b = this
          , c = a.target
          , a = b.map.Wb();
        if (c instanceof db)
          a && !c.Om && (c.ra(this.map, this.md),
            c.Om = o);
        else if (c.Hh && this.map.$g(c.Hh),
          c.yp) {
          for (a = 0; a < b.Gg.length; a++)
            if (b.Gg[a] == c)
              return;
          I.load("vector", function() {
            c.ra(b.map, b.md);
            b.Gg.push(c)
          }, o)
        } else {
          for (a = 0; a < b.Xf.length; a++)
            if (b.Xf[a] == c)
              return;
          c.ra(this.map, this.El);
          b.Xf.push(c)
        }
      },
      Bh: function(a) {
        var a = a.target
          , b = this.map.Wb();
        if (a instanceof db)
          b && a.Om && (a.remove(),
            a.Om = q);
        else {
          a.Hh && this.map.Bh(a.Hh);
          if (a.yp)
            for (var b = 0, c = this.Gg.length; b < c; b++)
              a == this.Gg[b] && this.Gg.splice(b, 1);
          else {
            b = 0;
            for (c = this.Xf.length; b < c; b++)
              a == this.Xf[b] && this.Xf.splice(b, 1)
          }
          a.remove()
        }
      },
      Eg: function() {
        for (var a = this.Sm, b = 0, c = a.length; b < c; b++)
          a[b].remove();
        delete this.Pb;
        this.Sm = [];
        this.ij = this.wg = {};
        this.Xx();
        this.Uf()
      },
      Kc: function() {
        var a = this;
        a.ud && x.K.U(a.ud);
        setTimeout(function() {
          a.Uf();
          a.map.dispatchEvent(new M("onzoomend"))
        }, 10)
      },
      V4: t(),
      bu: function(a) {
        var b = this.map.oa();
        if (!this.map.Wb() && (a ? this.map.B.K_ = a : a = this.map.B.K_,
          a))
          for (var c = p, c = "2" == z.dz ? [z.url.proto + z.url.domain.main_domain_cdn.other[0] + "/"] : [z.url.proto + z.url.domain.main_domain_cdn.baidu[0] + "/", z.url.proto + z.url.domain.main_domain_cdn.baidu[1] + "/", z.url.proto + z.url.domain.main_domain_cdn.baidu[2] + "/"], d = 0, e; e = this.Sm[d]; d++)
            if (e.x_ == o) {
              b.k.Zb = 18;
              e.getTilesUrl = function(b, d) {
                var e = b.x
                  , e = this.map.gb.Mw(e, d).ns
                  , k = b.y
                  , l = Tb("normal")
                  , m = 1;
                this.map.Vx() && (m = 2);
                l = "customimage/tile?&x=" + e + "&y=" + k + "&z=" + d + "&udt=" + l + "&scale=" + m + "&ak=" + qa;
                l = a.styleStr ? l + ("&styles=" + encodeURIComponent(a.styleStr)) : l + ("&customid=" + a.style);
                return c[Math.abs(e + k) % c.length] + l
              }
              ;
              break
            }
      }
    });
    function xd(a, b, c, d, e) {
      this.Vm = a;
      this.position = c;
      this.cv = [];
      this.name = a.jE(d, e);
      this.info = d;
      this.FJ = e.Et();
      d = K("img");
      yb(d);
      d.uL = q;
      var f = d.style
        , a = a.map.oa();
      f.position = "absolute";
      f.border = "none";
      f.width = a.k.Ob + "px";
      f.height = a.k.Ob + "px";
      f.left = c[0] + "px";
      f.top = c[1] + "px";
      f.maxWidth = "none";
      this.Gb = d;
      this.src = b;
      zd && (this.Gb.style.opacity = 0);
      var g = this;
      this.Gb.onload = function() {
        z.SY.YQ();
        g.loaded = o;
        if (g.Vm) {
          var a = g.Vm
            , b = a.ij;
          if (!b[g.name]) {
            a.nF++;
            b[g.name] = g
          }
          if (g.Gb && !zb(g.Gb) && e.Pb) {
            e.Pb.appendChild(g.Gb);
            if (x.da.la <= 6 && x.da.la > 0 && g.FJ)
              g.Gb.style.cssText = g.Gb.style.cssText + (';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + g.src + '",sizingMethod=scale);')
          }
          var c = a.nF - a.DV, d;
          for (d in b) {
            if (c <= 0)
              break;
            if (!a.wg[d]) {
              b[d].Vm = p;
              var f = b[d].Gb;
              if (f && f.parentNode) {
                f.parentNode.removeChild(f);
                yd(f)
              }
              f = p;
              b[d].Gb = p;
              delete b[d];
              a.nF--;
              c--
            }
          }
          zd && new tb({
            Hc: 20,
            duration: 200,
            va: function(a) {
              if (g.Gb && g.Gb.style)
                g.Gb.style.opacity = a * 1
            },
            finish: function() {
              g.Gb && g.Gb.style && delete g.Gb.style.opacity
            }
          });
          ud(g)
        }
      }
      ;
      this.Gb.onerror = function() {
        ud(g);
        if (g.Vm) {
          var a = g.Vm.map.oa();
          if (a.k.zD) {
            g.error = o;
            g.Gb.src = a.k.zD;
            g.Gb && !zb(g.Gb) && e.Pb.appendChild(g.Gb)
          }
        }
      }
      ;
      d = p
    }
    function wd(a, b) {
      a.cv.push(b)
    }
    xd.prototype.jo = function() {
      this.Gb.src = 0 < x.da.la && 6 >= x.da.la && this.FJ ? F.qa + "blank.gif" : "" !== this.src && this.Gb.src == this.src ? this.src + "&t = " + Date.now() : this.src
    }
    ;
    function ud(a) {
      for (var b = 0; b < a.cv.length; b++)
        a.cv[b]();
      a.cv.length = 0
    }
    function yd(a) {
      if (a) {
        a.onload = a.onerror = p;
        var b = a.attributes, c, d, e;
        if (b) {
          d = b.length;
          for (c = 0; c < d; c += 1)
            e = b[c].name,
            "unknown" !== typeof a[e] && Za(a[e]) && (a[e] = p)
        }
        if (b = a.children) {
          d = b.length;
          for (c = 0; c < d; c += 1)
            yd(a.children[c])
        }
      }
    }
    function vd(a, b) {
      a.src = b;
      a.jo()
    }
    var zd = !x.da.la || 8 < x.da.la;
    function td(a) {
      this.wh = a || {};
      this.$V = this.wh.copyright || p;
      this.i0 = this.wh.transparentPng || q;
      this.Jw = this.wh.baseLayer || q;
      this.zIndex = this.wh.zIndex || 0;
      this.ba = td.MS++
    }
    td.MS = 0;
    x.lang.ua(td, x.lang.Da, "TileLayer");
    x.extend(td.prototype, {
      ra: function(a, b) {
        this.Jw && (this.zIndex = -100);
        this.map = a;
        if (!this.Pb) {
          var c = K("div")
            , d = c.style;
          d.position = "absolute";
          d.overflow = "visible";
          d.zIndex = this.zIndex;
          d.left = Math.ceil(-a.offsetX + a.width / 2) + "px";
          d.top = Math.ceil(-a.offsetY + a.height / 2) + "px";
          b.appendChild(c);
          this.Pb = c
        }
      },
      remove: function() {
        this.Pb && this.Pb.parentNode && (this.Pb.innerHTML = "",
          this.Pb.parentNode.removeChild(this.Pb));
        delete this.Pb
      },
      Et: v("i0"),
      getTilesUrl: function(a, b) {
        if (this.map.oa() !== $a && this.map.oa() !== Sa)
          var c = this.map.gb.Mw(a.x, b).ns;
        var d = "";
        this.wh.tileUrlTemplate && (d = this.wh.tileUrlTemplate.replace(/\{X\}/, c),
          d = d.replace(/\{Y\}/, a.y),
          d = d.replace(/\{Z\}/, b));
        return d
      },
      ym: v("$V"),
      oa: function() {
        return this.Hb || Ma
      }
    });
    function Ad(a, b) {
      Ib(a) ? b = a || {} : (b = b || {},
        b.databoxId = a);
      this.k = {
        NK: b.databoxId,
        hh: b.geotableId,
        fn: b.q || "",
        tu: b.tags || "",
        filter: b.filter || "",
        Xy: b.sortby || "",
        I_: b.styleId || "",
        am: b.ak || qa,
        Gw: b.age || 36E5,
        zIndex: 11,
        OY: "VectorCloudLayer",
        Gk: b.hotspotName || "vector_md_" + (1E5 * Math.random()).toFixed(0),
        kV: "LBS\u4e91\u9ebb\u70b9\u5c42"
      };
      this.yp = o;
      td.call(this, this.k);
      this.sW = z.oc + "geosearch/detail/";
      this.tW = z.oc + "geosearch/v2/detail/";
      this.rp = {}
    }
    x.ua(Ad, td, "VectorCloudLayer");
    function Bd(a) {
      a = a || {};
      this.k = x.extend(a, {
        zIndex: 1,
        OY: "VectorTrafficLayer",
        kV: "\u77e2\u91cf\u8def\u51b5\u5c42"
      });
      this.yp = o;
      td.call(this, this.k);
      this.e0 = z.url.proto + z.url.domain.vector_traffic + "/gvd/?qt=lgvd&styles=pl&layers=tf";
      this.Db = {
        "0": [2, 1354709503, 2, 2, 0, [], 0, 0],
        1: [2, 1354709503, 3, 2, 0, [], 0, 0],
        10: [2, -231722753, 2, 2, 0, [], 0, 0],
        11: [2, -231722753, 3, 2, 0, [], 0, 0],
        12: [2, -231722753, 4, 2, 0, [], 0, 0],
        13: [2, -231722753, 5, 2, 0, [], 0, 0],
        14: [2, -231722753, 6, 2, 0, [], 0, 0],
        15: [2, -1, 4, 0, 0, [], 0, 0],
        16: [2, -1, 5.5, 0, 0, [], 0, 0],
        17: [2, -1, 7, 0, 0, [], 0, 0],
        18: [2, -1, 8.5, 0, 0, [], 0, 0],
        19: [2, -1, 10, 0, 0, [], 0, 0],
        2: [2, 1354709503, 4, 2, 0, [], 0, 0],
        3: [2, 1354709503, 5, 2, 0, [], 0, 0],
        4: [2, 1354709503, 6, 2, 0, [], 0, 0],
        5: [2, -6350337, 2, 2, 0, [], 0, 0],
        6: [2, -6350337, 3, 2, 0, [], 0, 0],
        7: [2, -6350337, 4, 2, 0, [], 0, 0],
        8: [2, -6350337, 5, 2, 0, [], 0, 0],
        9: [2, -6350337, 6, 2, 0, [], 0, 0]
      }
    }
    x.ua(Bd, td, "VectorTrafficLayer");
    function db(a) {
      this.EV = [z.url.proto + z.url.domain.TILE_ONLINE_URLS[1] + "/gvd/?", z.url.proto + z.url.domain.TILE_ONLINE_URLS[2] + "/gvd/?", z.url.proto + z.url.domain.TILE_ONLINE_URLS[3] + "/gvd/?"];
      this.k = {
        pL: q
      };
      for (var b in a)
        this.k[b] = a[b];
      this.ci = this.Nh = this.Xa = this.C = this.D = p;
      this.EM = 0;
      var c = this;
      I.load("vector", function() {
        c.Ee()
      })
    }
    x.extend(db.prototype, {
      ra: function(a, b) {
        this.D = a;
        this.C = b
      },
      remove: function() {
        this.C = this.D = p
      }
    });
    function Cd(a) {
      td.call(this, a);
      this.k = a || {};
      this.zM = o;
      if (this.k.predictDate) {
        if (1 > this.k.predictDate.weekday || 7 < this.k.predictDate.weekday)
          this.k.predictDate = 1;
        if (0 > this.k.predictDate.hour || 23 < this.k.predictDate.hour)
          this.k.predictDate.hour = 0
      }
      this.OU = z.url.proto + z.url.domain.traffic + "/traffic/"
    }
    Cd.prototype = new td;
    Cd.prototype.ra = function(a, b) {
      td.prototype.ra.call(this, a, b);
      this.D = a
    }
    ;
    Cd.prototype.Et = ea(o);
    Cd.prototype.getTilesUrl = function(a, b) {
      var c = "";
      this.k.predictDate ? c = "HistoryService?day=" + (this.k.predictDate.weekday - 1) + "&hour=" + this.k.predictDate.hour + "&t=" + (new Date).getTime() + "&" : (c = "TrafficTileService?time=" + (new Date).getTime() + "&",
        c += "label=web2D&v=016&");
      var c = this.OU + c + "level=" + b + "&x=" + a.x + "&y=" + a.y
        , d = 1;
      this.D.Vx() && (d = 2);
      return (c + "&scaler=" + d).replace(/-(\d+)/gi, "M$1")
    }
    ;
    var Dd = [z.url.proto + z.url.domain.TILES_YUN_HOST[0] + "/georender/gss", z.url.proto + z.url.domain.TILES_YUN_HOST[1] + "/georender/gss", z.url.proto + z.url.domain.TILES_YUN_HOST[2] + "/georender/gss", z.url.proto + z.url.domain.TILES_YUN_HOST[3] + "/georender/gss"]
      , Ed = z.url.proto + z.url.domain.main_domain_nocdn.baidu + "/style/poi/rangestyle"
      , Fd = 100;
    function ob(a, b) {
      td.call(this);
      var c = this;
      this.zM = o;
      var d = q;
      try {
        document.createElement("canvas").getContext("2d"),
          d = o
      } catch (e) {
        d = q
      }
      d && (this.Hh = new Ad(a,b),
        this.Hh.WF = this);
      Ib(a) ? b = a || {} : (c.Wn = a,
        b = b || {});
      b.geotableId && (c.Bf = b.geotableId);
      b.databoxId && (c.Wn = b.databoxId);
      d = z.oc + "geosearch";
      c.nc = {
        KN: b.pointDensity || Fd,
        mY: d + "/detail/",
        nY: d + "/v2/detail/",
        Gw: b.age || 36E5,
        fn: b.q || "",
        S_: "png",
        s3: [5, 5, 5, 5],
        NY: {
          backgroundColor: "#FFFFD5",
          borderColor: "#808080"
        },
        am: b.ak || qa,
        tu: b.tags || "",
        filter: b.filter || "",
        Xy: b.sortby || "",
        Gk: b.hotspotName || "tile_md_" + (1E5 * Math.random()).toFixed(0),
        eG: o
      };
      I.load("clayer", function() {
        c.Sd()
      })
    }
    ob.prototype = new td;
    ob.prototype.ra = function(a, b) {
      td.prototype.ra.call(this, a, b);
      this.D = a
    }
    ;
    ob.prototype.getTilesUrl = function(a, b) {
      var c = a.x
        , d = a.y
        , e = this.nc
        , c = Dd[Math.abs(c + d) % Dd.length] + "/image?grids=" + c + "_" + d + "_" + b + "&q=" + e.fn + "&tags=" + e.tu + "&filter=" + e.filter + "&sortby=" + e.Xy + "&ak=" + this.nc.am + "&age=" + e.Gw + "&page_size=" + e.KN + "&format=" + e.S_;
      e.eG || (e = (1E5 * Math.random()).toFixed(0),
        c += "&timeStamp=" + e);
      this.Bf ? c += "&geotable_id=" + this.Bf : this.Wn && (c += "&databox_id=" + this.Wn);
      return c
    }
    ;
    ob.prototype.enableUseCache = function() {
      this.nc.eG = o
    }
    ;
    ob.prototype.disableUseCache = function() {
      this.nc.eG = q
    }
    ;
    ob.lU = /^point\(|\)$/ig;
    ob.mU = /\s+/;
    ob.oU = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function Gd(a, b, c) {
      this.ff = a;
      this.vr = b instanceof td ? [b] : b.slice(0);
      c = c || {};
      this.k = {
        T_: c.tips || "",
        NE: "",
        fc: c.minZoom || 4,
        Zb: c.maxZoom || 18,
        r3: c.minZoom || 4,
        q3: c.maxZoom || 18,
        Ob: 256,
        UF: c.textColor || "black",
        zD: c.errorImageUrl || "",
        $a: new gb(new H(-21364736,-16023552),new H(23855104,19431424)),
        Ld: c.projection || new T
      };
      1 <= this.vr.length && (this.vr[0].Jw = o);
      x.extend(this.k, c)
    }
    x.extend(Gd.prototype, {
      getName: v("ff"),
      kt: function() {
        return this.k.T_
      },
      W2: function() {
        return this.k.NE
      },
      $X: function() {
        return this.vr[0]
      },
      k3: v("vr"),
      aY: function() {
        return this.k.Ob
      },
      fp: function() {
        return this.k.fc
      },
      Bm: function() {
        return this.k.Zb
      },
      setMaxZoom: function(a) {
        this.k.Zb = a
      },
      Hm: function() {
        return this.k.UF
      },
      kp: function() {
        return this.k.Ld
      },
      N2: function() {
        return this.k.zD
      },
      aY: function() {
        return this.k.Ob
      },
      yc: function(a) {
        return Math.pow(2, 18 - a)
      },
      oE: function(a) {
        return this.yc(a) * this.k.Ob
      }
    });
    var Hd = [z.url.proto + z.url.domain.TILE_BASE_URLS[0] + "/it/", z.url.proto + z.url.domain.TILE_BASE_URLS[1] + "/it/", z.url.proto + z.url.domain.TILE_BASE_URLS[2] + "/it/", z.url.proto + z.url.domain.TILE_BASE_URLS[3] + "/it/", z.url.proto + z.url.domain.TILE_BASE_URLS[4] + "/it/"]
      , Id = [z.url.proto + z.url.domain.TILE_ONLINE_URLS[0] + "/tile/", z.url.proto + z.url.domain.TILE_ONLINE_URLS[1] + "/tile/", z.url.proto + z.url.domain.TILE_ONLINE_URLS[2] + "/tile/", z.url.proto + z.url.domain.TILE_ONLINE_URLS[3] + "/tile/"]
      , Jd = {
      dark: "dl",
      light: "ll",
      normal: "pl"
    }
      , Kd = new td;
    Kd.x_ = o;
    // 修改
    Kd.getTilesUrl = function(a, b, c) {
      var d = a.x
        , a = a.y
        , e = Tb("normal")
        , f = 1
        , c = Jd[c];
      // this.map.Vx() && (f = 2);
      // d = this.map.gb.Mw(d, b).ns;
      // return (Id[Math.abs(d + a) % Id.length] + "?qt=vtile&x=" + (d + "").replace(/-/gi, "M") + "&y=" + (a + "").replace(/-/gi, "M") + "&z=" + b + "&styles=" + c + "&scaler=" + f + (6 == x.da.la ? "&color_dep=32&colors=50" : "") + "&udt=" + e + "&from=jsapi2_0").replace(/-(\d+)/gi, "M$1")
      var tdir = bmapcfg.tiles_dir.length > 0 ? bmapcfg.tiles_dir : bmapcfg.home + 'tiles'
      return tdir + '/' + b + '/' + d + '/' + a + bmapcfg.imgext // 使用本地的瓦片
    }
    ;
    var Ma = new Gd("\u5730\u56fe",Kd,{
      tips: "\u663e\u793a\u666e\u901a\u5730\u56fe",
      maxZoom: 19
    })
      , Ld = new td;
    Ld.FO = [z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[0] + "/resource/mappic/", z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[1] + "/resource/mappic/", z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[2] + "/resource/mappic/", z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[3] + "/resource/mappic/"];
    Ld.getTilesUrl = function(a, b) {
      var c = a.x
        , d = a.y
        , e = 256 * Math.pow(2, 20 - b)
        , d = Math.round((9998336 - e * d) / e) - 1;
      return url = this.FO[Math.abs(c + d) % this.FO.length] + this.map.Sb + "/" + this.map.Sw + "/3/lv" + (21 - b) + "/" + c + "," + d + ".jpg"
    }
    ;
    var Pa = new Gd("\u4e09\u7ef4",Ld,{
      tips: "\u663e\u793a\u4e09\u7ef4\u5730\u56fe",
      minZoom: 15,
      maxZoom: 20,
      textColor: "white",
      projection: new ib
    });
    Pa.yc = function(a) {
      return Math.pow(2, 20 - a)
    }
    ;
    Pa.yk = function(a) {
      if (!a)
        return "";
      var b = F.sC, c;
      for (c in b)
        if (-1 < a.search(c))
          return b[c].Cy;
      return ""
    }
    ;
    Pa.BL = function(a) {
      return {
        bj: 2,
        gz: 1,
        sz: 14,
        sh: 4
      }[a]
    }
    ;
    var Md = new td({
      Jw: o
    });
    Md.getTilesUrl = function(a, b) {
      var c = a.x
        , d = a.y;
      return (Hd[Math.abs(c + d) % Hd.length] + "u=x=" + c + ";y=" + d + ";z=" + b + ";v=009;type=sate&fm=46&udt=" + Tb("satellite")).replace(/-(\d+)/gi, "M$1")
    }
    ;
    var $a = new Gd("\u536b\u661f",Md,{
      tips: "\u663e\u793a\u536b\u661f\u5f71\u50cf",
      minZoom: 4,
      maxZoom: 19,
      textColor: "white"
    })
      , Nd = new td({
      transparentPng: o
    });
    Nd.getTilesUrl = function(a, b) {
      var c = a.x
        , d = a.y
        , e = Tb("satelliteStreet");
      return (Id[Math.abs(c + d) % Id.length] + "?qt=vtile&x=" + (c + "").replace(/-/gi, "M") + "&y=" + (d + "").replace(/-/gi, "M") + "&z=" + b + "&styles=sl" + (6 == x.da.la ? "&color_dep=32&colors=50" : "") + "&udt=" + e).replace(/-(\d+)/gi, "M$1")
    }
    ;
    var Sa = new Gd("\u6df7\u5408",[Md, Nd],{
      tips: "\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf",
      labelText: "\u8def\u7f51",
      minZoom: 4,
      maxZoom: 19,
      textColor: "white"
    });
    var Od = 1
      , W = {};
    window.F0 = W;
    function X(a, b) {
      x.lang.Da.call(this);
      this.zd = {};
      this.nn(a);
      b = b || {};
      b.ja = b.renderOptions || {};
      this.k = {
        ja: {
          Ha: b.ja.panel || p,
          map: b.ja.map || p,
          ah: b.ja.autoViewport || o,
          Xt: b.ja.selectFirstResult,
          ot: b.ja.highlightMode,
          Fb: b.ja.enableDragging || q
        },
        vy: b.onSearchComplete || t(),
        vN: b.onMarkersSet || t(),
        uN: b.onInfoHtmlSet || t(),
        xN: b.onResultsHtmlSet || t(),
        tN: b.onGetBusListComplete || t(),
        sN: b.onGetBusLineComplete || t(),
        qN: b.onBusListHtmlSet || t(),
        pN: b.onBusLineHtmlSet || t(),
        aF: b.onPolylinesSet || t(),
        Np: b.reqFrom || ""
      };
      this.map = b.ja.map || window.GCJMAP;
      this.k.ja.ah = "undefined" != typeof b && "undefined" != typeof b.renderOptions && "undefined" != typeof b.renderOptions.autoViewport ? b.renderOptions.autoViewport : o;
      this.k.ja.Ha = x.Ec(this.k.ja.Ha)
    }
    x.ua(X, x.lang.Da);
    x.extend(X.prototype, {
      getResults: function() {
        return this.Gc ? this.Ni : this.ka
      },
      enableAutoViewport: function() {
        this.k.ja.ah = o
      },
      disableAutoViewport: function() {
        this.k.ja.ah = q
      },
      nn: function(a) {
        a && (this.zd.src = a)
      },
      KF: function(a) {
        this.k.vy = a || t()
      },
      setMarkersSetCallback: function(a) {
        this.k.vN = a || t()
      },
      setPolylinesSetCallback: function(a) {
        this.k.aF = a || t()
      },
      setInfoHtmlSetCallback: function(a) {
        this.k.uN = a || t()
      },
      setResultsHtmlSetCallback: function(a) {
        this.k.xN = a || t()
      },
      Fm: v("Cd")
    });
    var Pd = {
      JG: z.oc,
      fb: function(a, b, c, d, e) {
        this.BZ(b);
        var f = (1E5 * Math.random()).toFixed(0);
        z._rd["_cbk" + f] = function(b) {
          b.result && b.result.error && 202 === b.result.error ? alert("\u8be5AK\u56e0\u4e3a\u6076\u610f\u884c\u4e3a\u5df2\u7ecf\u88ab\u7ba1\u7406\u5458\u5c01\u7981\uff01") : (c = c || {},
          a && a(b, c),
            delete z._rd["_cbk" + f])
        }
        ;
        d = d || "";
        b = c && c.XO ? Gb(b, encodeURI) : Gb(b, encodeURIComponent);
        this.JG = c && c.Ss ? c.VN ? c.VN : z.Dp : z.oc;
        d = this.JG + d + "?" + b + "&ie=utf-8&oue=1&fromproduct=jsapi";
        e || (d += "&res=api");
        d = d + ("&callback=BMap._rd._cbk" + f) + ("&ak=" + qa);
        pa(d)
      },
      BZ: function(a) {
        if (a.qt) {
          var b = "";
          switch (a.qt) {
            case "bt":
              b = "z_qt|bt";
              break;
            case "nav":
              b = "z_qt|nav";
              break;
            case "walk":
              b = "z_qt|walk";
              break;
            case "bse":
              b = "z_qt|bse";
              break;
            case "nse":
              b = "z_qt|nse";
              break;
            case "drag":
              b = "z_qt|drag";
              break;
            case "s":
              b = "z_qt|s";
              break;
            case "ext":
              b = "z_qt|ext";
              break;
            case "gc":
              b = "z_qt|gc";
              break;
            case "rgc":
              b = "z_qt|rgc";
              break;
            case "bl":
              b = "z_qt|bl";
              break;
            case "bsl":
              b = "z_qt|bsl";
              break;
            case "con":
              b = "z_qt|con";
              break;
            case "bd":
              b = "z_qt|bd";
              break;
            case "nb":
              b = "z_qt|nb";
              break;
            case "bda":
              b = "z_qt|bda";
              break;
            case "sa":
              b = "z_qt|sa";
              break;
            case "nba":
              b = "z_qt|nba";
              break;
            case "dec":
              b = "z_qt|dec"
          }
          "" !== b && z.alog("cus.fire", "count", b)
        }
      }
    };
    window.R0 = Pd;
    z._rd = {};
    var Q = {};
    window.Q0 = Q;
    Q.RN = function(a) {
      a = a.replace(/<\/?[^>]*>/g, "");
      return a = a.replace(/[ | ]* /g, " ")
    }
    ;
    Q.sZ = function(a) {
      return a.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;")
    }
    ;
    Q.tZ = function(a, b) {
      return a.replace(RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + b + "}", "ig"), "$1")
    }
    ;
    var Qd = 2
      , Rd = 3
      , Sd = 0
      , Td = "bt"
      , Ud = "nav"
      , Vd = "walk"
      , Wd = "bl"
      , Xd = "bsl"
      , Yd = 14
      , Zd = 15
      , $d = 18
      , ae = 20
      , be = 31;
    z.I = window.Instance = x.lang.Lc;
    function ce(a, b, c) {
      x.lang.Da.call(this);
      if (a) {
        this.Ua = "object" == typeof a ? a : x.Ec(a);
        this.page = 1;
        this.Kd = 100;
        this.hK = "pg";
        this.Vf = 4;
        this.pK = b;
        this.update = o;
        a = {
          page: 1,
          Ze: 100,
          Kd: 100,
          Vf: 4,
          hK: "pg",
          update: o
        };
        c || (c = a);
        for (var d in c)
          "undefined" != typeof c[d] && (this[d] = c[d]);
        this.va()
      }
    }
    x.extend(ce.prototype, {
      va: function() {
        this.ra()
      },
      ra: function() {
        this.MV();
        this.Ua.innerHTML = this.hW()
      },
      MV: function() {
        isNaN(parseInt(this.page)) && (this.page = 1);
        isNaN(parseInt(this.Kd)) && (this.Kd = 1);
        1 > this.page && (this.page = 1);
        1 > this.Kd && (this.Kd = 1);
        this.page > this.Kd && (this.page = this.Kd);
        this.page = parseInt(this.page);
        this.Kd = parseInt(this.Kd)
      },
      b3: function() {
        location.search.match(RegExp("[?&]?" + this.hK + "=([^&]*)[&$]?", "gi"));
        this.page = RegExp.$1
      },
      hW: function() {
        var a = []
          , b = this.page - 1
          , c = this.page + 1;
        a.push('<p style="margin:0;padding:0;white-space:nowrap">');
        if (!(1 > b)) {
          if (this.page >= this.Vf) {
            var d;
            a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp1}">\u9996\u9875</a></span>'.replace("{temp1}", "BMap.I('" + this.ba + "').toPage(1);"))
          }
          a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp2}">\u4e0a\u4e00\u9875</a></span>'.replace("{temp2}", "BMap.I('" + this.ba + "').toPage(" + b + ");"))
        }
        if (this.page < this.Vf)
          d = 0 == this.page % this.Vf ? this.page - this.Vf - 1 : this.page - this.page % this.Vf + 1,
            b = d + this.Vf - 1;
        else {
          d = Math.floor(this.Vf / 2);
          var e = this.Vf % 2 - 1
            , b = this.Kd > this.page + d ? this.page + d : this.Kd;
          d = this.page - d - e
        }
        this.page > this.Kd - this.Vf && this.page >= this.Vf && (d = this.Kd - this.Vf + 1,
          b = this.Kd);
        for (e = d; e <= b; e++)
          0 < e && (e == this.page ? a.push('<span style="margin-right:3px">' + e + "</span>") : 1 <= e && e <= this.Kd && (d = '<span><a style="color:#7777cc;margin-right:3px" href="javascript:void(0)" onclick="{temp3}">[' + e + "]</a></span>",
            a.push(d.replace("{temp3}", "BMap.I('" + this.ba + "').toPage(" + e + ");"))));
        c > this.Kd || a.push('<span><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp4}">\u4e0b\u4e00\u9875</a></span>'.replace("{temp4}", "BMap.I('" + this.ba + "').toPage(" + c + ");"));
        a.push("</p>");
        return a.join("")
      },
      toPage: function(a) {
        a = a ? a : 1;
        "function" == typeof this.pK && (this.pK(a),
          this.page = a);
        this.update && this.va()
      }
    });
    function cb(a, b) {
      X.call(this, a, b);
      b = b || {};
      b.renderOptions = b.renderOptions || {};
      this.Xp(b.pageCapacity);
      "undefined" != typeof b.renderOptions.selectFirstResult && !b.renderOptions.selectFirstResult ? this.XC() : this.uD();
      this.wa = [];
      this.xf = [];
      this.lb = -1;
      this.Oa = [];
      var c = this;
      I.load("local", function() {
        c.Qz()
      }, o)
    }
    x.ua(cb, X, "LocalSearch");
    cb.nq = 10;
    cb.N0 = 1;
    cb.In = 100;
    cb.zG = 2E3;
    cb.GG = 1E5;
    x.extend(cb.prototype, {
      search: function(a, b) {
        this.Oa.push({
          method: "search",
          arguments: [a, b]
        })
      },
      kn: function(a, b, c) {
        this.Oa.push({
          method: "searchInBounds",
          arguments: [a, b, c]
        })
      },
      Tp: function(a, b, c, d) {
        this.Oa.push({
          method: "searchNearby",
          arguments: [a, b, c, d]
        })
      },
      Qe: function() {
        delete this.Ga;
        delete this.Cd;
        delete this.ka;
        delete this.fa;
        this.lb = -1;
        this.sb();
        this.k.ja.Ha && (this.k.ja.Ha.innerHTML = "")
      },
      Km: t(),
      uD: function() {
        this.k.ja.Xt = o
      },
      XC: function() {
        this.k.ja.Xt = q
      },
      Xp: function(a) {
        this.k.Lk = "number" == typeof a && !isNaN(a) ? 1 > a ? cb.nq : a > cb.In ? cb.nq : a : cb.nq
      },
      qf: function() {
        return this.k.Lk
      },
      toString: ea("LocalSearch")
    });
    var de = cb.prototype;
    U(de, {
      clearResults: de.Qe,
      setPageCapacity: de.Xp,
      getPageCapacity: de.qf,
      gotoPage: de.Km,
      searchNearby: de.Tp,
      searchInBounds: de.kn,
      search: de.search,
      enableFirstResultSelection: de.uD,
      disableFirstResultSelection: de.XC
    });
    function ee(a, b) {
      X.call(this, a, b)
    }
    x.ua(ee, X, "BaseRoute");
    x.extend(ee.prototype, {
      Qe: t()
    });
    function fe(a, b) {
      X.call(this, a, b);
      b = b || {};
      this.eu(b.policy);
      this.Xp(b.pageCapacity);
      this.vd = Td;
      this.Ou = Yd;
      this.Pu = Od;
      this.wa = [];
      this.lb = -1;
      this.k.fd = b.enableTraffic || q;
      this.Oa = [];
      var c = this;
      I.load("route", function() {
        c.Sd()
      })
    }
    fe.In = 100;
    fe.CP = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
    x.ua(fe, ee, "TransitRoute");
    x.extend(fe.prototype, {
      eu: function(a) {
        this.k.ad = 0 <= a && 4 >= a ? a : 0
      },
      QA: function(a, b) {
        this.Oa.push({
          method: "_internalSearch",
          arguments: [a, b]
        })
      },
      search: function(a, b) {
        this.Oa.push({
          method: "search",
          arguments: [a, b]
        })
      },
      Xp: function(a) {
        if ("string" === typeof a && (a = parseInt(a, 10),
          isNaN(a))) {
          this.k.Lk = fe.In;
          return
        }
        this.k.Lk = "number" !== typeof a ? fe.In : 1 <= a && a <= fe.In ? Math.round(a) : fe.In
      },
      toString: ea("TransitRoute"),
      AU: function(a) {
        return a.replace(/\(.*\)/, "")
      }
    });
    var ge = fe.prototype;
    U(ge, {
      _internalSearch: ge.QA
    });
    function he(a, b) {
      X.call(this, a, b);
      this.wa = [];
      this.lb = -1;
      this.Oa = [];
      var c = this
        , d = this.k.ja;
      1 !== d.ot && 2 !== d.ot && (d.ot = 1);
      this.jA = this.k.ja.Fb ? o : q;
      I.load("route", function() {
        c.Sd()
      });
      this.xE && this.xE()
    }
    he.QP = " \u73af\u5c9b \u65e0\u5c5e\u6027\u9053\u8def \u4e3b\u8def \u9ad8\u901f\u8fde\u63a5\u8def \u4ea4\u53c9\u70b9\u5185\u8def\u6bb5 \u8fde\u63a5\u9053\u8def \u505c\u8f66\u573a\u5185\u90e8\u9053\u8def \u670d\u52a1\u533a\u5185\u90e8\u9053\u8def \u6865 \u6b65\u884c\u8857 \u8f85\u8def \u531d\u9053 \u5168\u5c01\u95ed\u9053\u8def \u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df POI\u8fde\u63a5\u8def \u96a7\u9053 \u6b65\u884c\u9053 \u516c\u4ea4\u4e13\u7528\u9053 \u63d0\u524d\u53f3\u8f6c\u9053".split(" ");
    x.ua(he, ee, "DWRoute");
    x.extend(he.prototype, {
      search: function(a, b, c) {
        this.Oa.push({
          method: "search",
          arguments: [a, b, c]
        })
      }
    });
    function ie(a, b) {
      he.call(this, a, b);
      b = b || {};
      this.k.fd = b.enableTraffic || q;
      this.eu(b.policy);
      this.vd = Ud;
      this.Ou = ae;
      this.Pu = Rd
    }
    x.ua(ie, he, "DrivingRoute");
    ie.prototype.eu = function(a) {
      this.k.ad = 0 <= a && 2 >= a ? a : 0
    }
    ;
    function je(a, b) {
      he.call(this, a, b);
      this.vd = Vd;
      this.Ou = be;
      this.Pu = Qd;
      this.jA = q
    }
    x.ua(je, he, "WalkingRoute");
    function ke(a, b) {
      x.lang.Da.call(this);
      this.Tf = [];
      this.an = [];
      this.k = b;
      this.cc = a;
      this.map = this.k.ja.map || p;
      this.Ky = this.k.Ky;
      this.Ab = p;
      this.kj = 0;
      this.Yy = "";
      this.ee = 1;
      this.qx = "";
      this.Op = [0, 0, 0, 0, 0, 0, 0];
      this.QE = [];
      this.ws = [1, 1, 1, 1, 1, 1, 1];
      this.NO = [1, 1, 1, 1, 1, 1, 1];
      this.Vt = [0, 0, 0, 0, 0, 0, 0];
      this.Pp = [0, 0, 0, 0, 0, 0, 0];
      this.Ma = [{
        o: "",
        Dd: 0,
        An: 0,
        x: 0,
        y: 0,
        pa: -1
      }, {
        o: "",
        Dd: 0,
        An: 0,
        x: 0,
        y: 0,
        pa: -1
      }, {
        o: "",
        Dd: 0,
        An: 0,
        x: 0,
        y: 0,
        pa: -1
      }, {
        o: "",
        Dd: 0,
        An: 0,
        x: 0,
        y: 0,
        pa: -1
      }, {
        o: "",
        Dd: 0,
        An: 0,
        x: 0,
        y: 0,
        pa: -1
      }, {
        o: "",
        Dd: 0,
        An: 0,
        x: 0,
        y: 0,
        pa: -1
      }, {
        o: "",
        Dd: 0,
        An: 0,
        x: 0,
        y: 0,
        pa: -1
      }];
      this.ki = -1;
      this.vu = [];
      this.wu = [];
      I.load("route", t())
    }
    x.lang.ua(ke, x.lang.Da, "RouteAddr");
    var le = navigator.userAgent;
    /ipad|iphone|ipod|iph/i.test(le);
    var ne = /android/i.test(le);
    function oe(a) {
      this.wh = a || {}
    }
    x.extend(oe.prototype, {
      aO: function(a, b, c) {
        var d = this;
        I.load("route", function() {
          d.Sd(a, b, c)
        })
      }
    });
    function pe(a) {
      this.k = {};
      x.extend(this.k, a);
      this.Oa = [];
      var b = this;
      I.load("othersearch", function() {
        b.Sd()
      })
    }
    x.ua(pe, x.lang.Da, "Geocoder");
    x.extend(pe.prototype, {
      Em: function(a, b, c) {
        this.Oa.push({
          method: "getPoint",
          arguments: [a, b, c]
        })
      },
      Am: function(a, b, c) {
        this.Oa.push({
          method: "getLocation",
          arguments: [a, b, c]
        })
      },
      toString: ea("Geocoder")
    });
    var qe = pe.prototype;
    U(qe, {
      getPoint: qe.Em,
      getLocation: qe.Am
    });
    function Geolocation(a) {
      a = a || {};
      this.B = {
        timeout: a.timeout || 1E4,
        maximumAge: a.maximumAge || 6E5,
        hl: q
      };
      this.pe = [];
      var b = this;
      I.load("othersearch", function() {
        for (var a = 0, d; d = b.pe[a]; a++)
          b[d.method].apply(b, d.arguments)
      })
    }
    x.extend(Geolocation.prototype, {
      getCurrentPosition: function(a, b) {
        this.pe.push({
          method: "getCurrentPosition",
          arguments: arguments
        })
      },
      getStatus: ea(2),
      enableSDKLocation: function() {
        G() && (this.B.hl = o)
      },
      disableSDKLocation: function() {
        this.B.hl = q
      }
    });
    function re(a) {
      a = a || {};
      a.ja = a.renderOptions || {};
      this.k = {
        ja: {
          map: a.ja.map || p
        }
      };
      this.Oa = [];
      var b = this;
      I.load("othersearch", function() {
        b.Sd()
      })
    }
    x.ua(re, x.lang.Da, "LocalCity");
    x.extend(re.prototype, {
      get: function(a) {
        this.Oa.push({
          method: "get",
          arguments: [a]
        })
      },
      toString: ea("LocalCity")
    });
    function se() {
      this.Oa = [];
      var a = this;
      I.load("othersearch", function() {
        a.Sd()
      })
    }
    x.ua(se, x.lang.Da, "Boundary");
    x.extend(se.prototype, {
      get: function(a, b) {
        this.Oa.push({
          method: "get",
          arguments: [a, b]
        })
      },
      toString: ea("Boundary")
    });
    function te(a, b) {
      X.call(this, a, b);
      this.NP = Wd;
      this.PP = Zd;
      this.MP = Xd;
      this.OP = $d;
      this.Oa = [];
      var c = this;
      I.load("buslinesearch", function() {
        c.Sd()
      })
    }
    te.zv = F.qa + "iw_plus.gif";
    te.SS = F.qa + "iw_minus.gif";
    te.KU = F.qa + "stop_icon.png";
    x.ua(te, X);
    x.extend(te.prototype, {
      getBusList: function(a) {
        this.Oa.push({
          method: "getBusList",
          arguments: [a]
        })
      },
      getBusLine: function(a) {
        this.Oa.push({
          method: "getBusLine",
          arguments: [a]
        })
      },
      setGetBusListCompleteCallback: function(a) {
        this.k.tN = a || t()
      },
      setGetBusLineCompleteCallback: function(a) {
        this.k.sN = a || t()
      },
      setBusListHtmlSetCallback: function(a) {
        this.k.qN = a || t()
      },
      setBusLineHtmlSetCallback: function(a) {
        this.k.pN = a || t()
      },
      setPolylinesSetCallback: function(a) {
        this.k.aF = a || t()
      }
    });
    function ue(a) {
      X.call(this, a);
      a = a || {};
      this.nc = {
        input: a.input || p,
        iC: a.baseDom || p,
        types: a.types || [],
        vy: a.onSearchComplete || t()
      };
      this.zd.src = a.location || "\u5168\u56fd";
      this.fj = "";
      this.mg = p;
      this.lI = "";
      this.Ui();
      Qa(Ha);
      var b = this;
      I.load("autocomplete", function() {
        b.Sd()
      })
    }
    x.ua(ue, X, "Autocomplete");
    x.extend(ue.prototype, {
      Ui: t(),
      show: t(),
      U: t(),
      LF: function(a) {
        this.nc.types = a
      },
      nn: function(a) {
        this.zd.src = a
      },
      search: da("fj"),
      Ny: da("lI")
    });
    var Ta;
    function Oa(a, b) {
      function c() {
        e.k.visible ? ("inter" === e.Le && e.k.haveBreakId && e.k.indoorExitControl === o ? x.K.show(e.JA) : x.K.U(e.JA),
          this.k.closeControl && this.Af && this.D && this.D.Ka() === this.C ? x.K.show(e.Af) : x.K.U(e.Af),
        this.k.forceCloseControl && x.K.show(e.Af)) : (x.K.U(e.Af),
          x.K.U(e.JA))
      }
      this.C = "string" == typeof a ? x.$(a) : a;
      this.ba = ve++;
      this.k = {
        enableScrollWheelZoom: o,
        panoramaRenderer: "flash",
        swfSrc: z.sg("main_domain_nocdn", "res/swf/") + "APILoader.swf",
        visible: o,
        indoorExitControl: o,
        indoorFloorControl: q,
        linksControl: o,
        clickOnRoad: o,
        navigationControl: o,
        closeControl: o,
        indoorSceneSwitchControl: o,
        albumsControl: q,
        albumsControlOptions: {},
        copyrightControlOptions: {},
        forceCloseControl: q,
        haveBreakId: q
      };
      var b = b || {}, d;
      for (d in b)
        this.k[d] = b[d];
      b.closeControl === o && (this.k.forceCloseControl = o);
      b.useWebGL === q && Na(q);
      this.Ea = {
        heading: 0,
        pitch: 0
      };
      this.io = [];
      this.Kb = this.Ya = p;
      this.hk = this.lr();
      this.wa = [];
      this.Kc = 1;
      this.Le = this.pT = this.ml = "";
      this.Ke = {};
      this.Nf = p;
      this.Tg = [];
      this.Gr = [];
      "cvsRender" == this.hk || Na() ? (this.$j = 90,
        this.ck = -90) : "cssRender" == this.hk && (this.$j = 45,
        this.ck = -45);
      this.Kr = q;
      var e = this;
      this.jo = function() {
        this.hk === "flashRender" ? I.load("panoramaflash", function() {
          e.Ui()
        }, o) : I.load("panorama", function() {
          e.xb()
        }, o);
        b.of == "api" ? Qa(Da) : Qa(Ea);
        this.jo = t()
      }
      ;
      this.k.cT !== o && (this.jo(),
        z.Jn("cus.fire", "count", "z_loadpanoramacount"));
      this.UT(this.C);
      this.addEventListener("id_changed", function() {
        Qa(Ba, {
          from: b.of
        })
      });
      this.gQ();
      this.addEventListener("indoorexit_options_changed", c);
      this.addEventListener("scene_type_changed", c);
      this.addEventListener("onclose_options_changed", c);
      this.addEventListener("onvisible_changed", c)
    }
    var we = 4
      , xe = 1
      , ve = 0;
    x.lang.ua(Oa, x.lang.Da, "Panorama");
    x.extend(Oa.prototype, {
      gQ: function() {
        var a = this
          , b = this.Af = K("div");
        b.className = "pano_close";
        b.style.cssText = "z-index: 1201;display: none";
        b.title = "\u9000\u51fa\u5168\u666f";
        b.onclick = function() {
          a.U()
        }
        ;
        this.C.appendChild(b);
        var c = this.JA = K("a");
        c.className = "pano_pc_indoor_exit";
        c.style.cssText = "z-index: 1201;display: none";
        c.innerHTML = '<span style="float:right;margin-right:12px;">\u51fa\u53e3</span>';
        c.title = "\u9000\u51fa\u5ba4\u5185\u666f";
        c.onclick = function() {
          a.Zo()
        }
        ;
        this.C.appendChild(c);
        window.ActiveXObject && !document.addEventListener && (b.style.backgroundColor = "rgb(37,37,37)",
          c.style.backgroundColor = "rgb(37,37,37)")
      },
      Zo: t(),
      UT: function(a) {
        var b, c;
        b = a.style;
        c = Wa(a).position;
        "absolute" != c && "relative" != c && (b.position = "relative",
          b.zIndex = 0);
        if ("absolute" === c || "relative" === c)
          if (a = Wa(a).zIndex,
          !a || "auto" === a)
            b.zIndex = 0
      },
      AX: v("io"),
      Yb: v("Ya"),
      bY: v("kw"),
      pO: v("kw"),
      ha: v("Kb"),
      Fa: v("Ea"),
      ga: v("Kc"),
      jh: v("ml"),
      d3: function() {
        return this.u1 || []
      },
      Y2: v("pT"),
      jt: v("Le"),
      Py: function(a) {
        a !== this.Le && (this.Le = a,
          this.dispatchEvent(new M("onscene_type_changed")))
      },
      rc: function(a, b, c) {
        "object" === typeof b && (c = b,
          b = j);
        a != this.Ya && (this.xl = this.Ya,
          this.yl = this.Kb,
          this.Ya = a,
          this.Le = b || "street",
          this.Kb = p,
        c && c.pov && this.Nc(c.pov))
      },
      ta: function(a) {
        a.ab(this.Kb) || (this.xl = this.Ya,
          this.yl = this.Kb,
          this.Kb = a,
          this.Ya = p)
      },
      Nc: function(a) {
        a && (this.Ea = a,
          a = this.Ea.pitch,
          a > this.$j ? a = this.$j : a < this.ck && (a = this.ck),
          this.Kr = o,
          this.Ea.pitch = a)
      },
      s_: function(a, b) {
        this.ck = 0 <= a ? 0 : a;
        this.$j = 0 >= b ? 0 : b
      },
      Oc: function(a) {
        a != this.Kc && (a > we && (a = we),
        a < xe && (a = xe),
        a != this.Kc && (this.Kc = a),
        "cssRender" === this.hk && this.Nc(this.Ea))
      },
      IB: function() {
        if (this.D)
          for (var a = this.D.Jx(), b = 0; b < a.length; b++)
            (a[b]instanceof V || a[b]instanceof dd) && a[b].point && this.wa.push(a[b])
      },
      HF: da("D"),
      du: function(a) {
        this.Nf = a || "none"
      },
      Rk: function(a) {
        for (var b in a) {
          if ("object" == typeof a[b])
            for (var c in a[b])
              this.k[b][c] = a[b][c];
          else
            this.k[b] = a[b];
          a.closeControl === o && (this.k.forceCloseControl = o);
          a.closeControl === q && (this.k.forceCloseControl = q);
          switch (b) {
            case "linksControl":
              this.dispatchEvent(new M("onlinks_visible_changed"));
              break;
            case "clickOnRoad":
              this.dispatchEvent(new M("onclickonroad_changed"));
              break;
            case "navigationControl":
              this.dispatchEvent(new M("onnavigation_visible_changed"));
              break;
            case "indoorSceneSwitchControl":
              this.dispatchEvent(new M("onindoor_default_switch_mode_changed"));
              break;
            case "albumsControl":
              this.dispatchEvent(new M("onalbums_visible_changed"));
              break;
            case "albumsControlOptions":
              this.dispatchEvent(new M("onalbums_options_changed"));
              break;
            case "copyrightControlOptions":
              this.dispatchEvent(new M("oncopyright_options_changed"));
              break;
            case "closeControl":
              this.dispatchEvent(new M("onclose_options_changed"));
              break;
            case "indoorExitControl":
              this.dispatchEvent(new M("onindoorexit_options_changed"));
              break;
            case "indoorFloorControl":
              this.dispatchEvent(new M("onindoorfloor_options_changed"))
          }
        }
      },
      Fk: function() {
        this.Gl.style.visibility = "hidden"
      },
      Ty: function() {
        this.Gl.style.visibility = "visible"
      },
      PW: function() {
        this.k.enableScrollWheelZoom = o
      },
      zW: function() {
        this.k.enableScrollWheelZoom = q
      },
      show: function() {
        this.k.visible = o
      },
      U: function() {
        this.k.visible = q
      },
      lr: function() {
        return Va() && !G() && "javascript" !== this.k.panoramaRenderer ? "flashRender" : !G() && Nb() ? "cvsRender" : "cssRender"
      },
      Ja: function(a) {
        this.Ke[a.jd] = a
      },
      Ub: function(a) {
        delete this.Ke[a]
      },
      mE: function() {
        return this.k.visible
      },
      ih: function() {
        return new L(this.C.clientWidth,this.C.clientHeight)
      },
      Ka: v("C"),
      xL: function() {
        var a = z.sg("baidumap", "?")
          , b = this.Yb();
        if (b) {
          var b = {
            panotype: this.jt(),
            heading: this.Fa().heading,
            pitch: this.Fa().pitch,
            pid: b,
            panoid: b,
            from: "api"
          }, c;
          for (c in b)
            a += c + "=" + b[c] + "&"
        }
        return a.slice(0, -1)
      },
      Sx: function() {
        this.Rk({
          copyrightControlOptions: {
            logoVisible: q
          }
        })
      },
      OF: function() {
        this.Rk({
          copyrightControlOptions: {
            logoVisible: o
          }
        })
      },
      cC: function(a) {
        function b(a, b) {
          return function() {
            a.Gr.push({
              cN: b,
              bN: arguments
            })
          }
        }
        for (var c = a.getPanoMethodList(), d = "", e = 0, f = c.length; e < f; e++)
          d = c[e],
            this[d] = b(this, d);
        this.Tg.push(a)
      },
      qF: function(a) {
        for (var b = this.Tg.length; b--; )
          this.Tg[b] === a && this.Tg.splice(b, 1)
      },
      GF: t()
    });
    var ye = Oa.prototype;
    U(ye, {
      setId: ye.rc,
      setPosition: ye.ta,
      setPov: ye.Nc,
      setZoom: ye.Oc,
      setOptions: ye.Rk,
      getId: ye.Yb,
      getPosition: ye.ha,
      getPov: ye.Fa,
      getZoom: ye.ga,
      getLinks: ye.AX,
      getBaiduMapUrl: ye.xL,
      hideMapLogo: ye.Sx,
      showMapLogo: ye.OF,
      enableDoubleClickZoom: ye.s2,
      disableDoubleClickZoom: ye.g2,
      enableScrollWheelZoom: ye.PW,
      disableScrollWheelZoom: ye.zW,
      show: ye.show,
      hide: ye.U,
      addPlugin: ye.cC,
      removePlugin: ye.qF,
      getVisible: ye.mE,
      addOverlay: ye.Ja,
      removeOverlay: ye.Ub,
      getSceneType: ye.jt,
      setPanoramaPOIType: ye.du,
      exitInter: ye.Zo,
      setInteractiveState: ye.GF
    });
    U(window, {
      BMAP_PANORAMA_POI_HOTEL: "hotel",
      BMAP_PANORAMA_POI_CATERING: "catering",
      BMAP_PANORAMA_POI_MOVIE: "movie",
      BMAP_PANORAMA_POI_TRANSIT: "transit",
      BMAP_PANORAMA_POI_INDOOR_SCENE: "indoor_scene",
      BMAP_PANORAMA_POI_NONE: "none",
      BMAP_PANORAMA_INDOOR_SCENE: "inter",
      BMAP_PANORAMA_STREET_SCENE: "street"
    });
    function ze() {
      x.lang.Da.call(this);
      this.jd = "PanoramaOverlay_" + this.ba;
      this.P = p;
      this.Pa = o
    }
    x.lang.ua(ze, x.lang.Da, "PanoramaOverlayBase");
    x.extend(ze.prototype, {
      Z2: v("jd"),
      ra: function() {
        ca("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
      },
      remove: function() {
        ca("remove\u65b9\u6cd5\u672a\u5b9e\u73b0")
      },
      Mf: function() {
        ca("_setOverlayProperty\u65b9\u6cd5\u672a\u5b9e\u73b0")
      }
    });
    function Ae(a, b) {
      ze.call(this);
      var c = {
        position: p,
        altitude: 2,
        displayDistance: o
      }, b = b || {}, d;
      for (d in b)
        c[d] = b[d];
      this.Kb = c.position;
      this.Qj = a;
      this.Eq = c.altitude;
      this.sR = c.displayDistance;
      this.UF = c.color;
      this.gM = c.hoverColor;
      this.backgroundColor = c.backgroundColor;
      this.jK = c.backgroundHoverColor;
      this.borderColor = c.borderColor;
      this.nK = c.borderHoverColor;
      this.fontSize = c.fontSize;
      this.padding = c.padding;
      this.sE = c.imageUrl;
      this.size = c.size;
      this.ye = c.image;
      this.width = c.width;
      this.height = c.height;
      this.qY = c.imageData;
      this.borderWidth = c.borderWidth
    }
    x.lang.ua(Ae, ze, "PanoramaLabel");
    x.extend(Ae.prototype, {
      E2: v("borderWidth"),
      getImageData: v("qY"),
      Hm: v("UF"),
      S2: v("gM"),
      A2: v("backgroundColor"),
      B2: v("jK"),
      C2: v("borderColor"),
      D2: v("nK"),
      P2: v("fontSize"),
      a3: v("padding"),
      T2: v("sE"),
      tb: v("size"),
      Ax: v("ye"),
      ta: function(a) {
        this.Kb = a;
        this.Mf("position", a)
      },
      ha: v("Kb"),
      bd: function(a) {
        this.Qj = a;
        this.Mf("content", a)
      },
      zk: v("Qj"),
      BF: function(a) {
        this.Eq = a;
        this.Mf("altitude", a)
      },
      bp: v("Eq"),
      Fa: function() {
        var a = this.ha()
          , b = p
          , c = p;
        this.P && (c = this.P.ha());
        if (a && c)
          if (a.ab(c))
            b = this.P.Fa();
          else {
            b = {};
            b.heading = Be(a.lng - c.lng, a.lat - c.lat) || 0;
            var a = b
              , c = this.bp()
              , d = this.ao();
            a.pitch = Math.round(180 * (Math.atan(c / d) / Math.PI)) || 0
          }
        return b
      },
      ao: function() {
        var a = 0, b, c;
        this.P && (b = this.P.ha(),
        (c = this.ha()) && !c.ab(b) && (a = T.dp(b, c)));
        return a
      },
      U: function() {
        ca("hide\u65b9\u6cd5\u672a\u5b9e\u73b0")
      },
      show: function() {
        ca("show\u65b9\u6cd5\u672a\u5b9e\u73b0")
      },
      Mf: t()
    });
    var He = Ae.prototype;
    U(He, {
      setPosition: He.ta,
      getPosition: He.ha,
      setContent: He.bd,
      getContent: He.zk,
      setAltitude: He.BF,
      getAltitude: He.bp,
      getPov: He.Fa,
      show: He.show,
      hide: He.U
    });
    function Ie(a, b) {
      ze.call(this);
      var c = {
        icon: "",
        title: "",
        panoInfo: p,
        altitude: 2
      }, b = b || {}, d;
      for (d in b)
        c[d] = b[d];
      this.Kb = a;
      this.gI = c.icon;
      this.DJ = c.title;
      this.Eq = c.altitude;
      this.HT = c.panoInfo;
      this.Ea = {
        heading: 0,
        pitch: 0
      }
    }
    x.lang.ua(Ie, ze, "PanoramaMarker");
    x.extend(Ie.prototype, {
      ta: function(a) {
        this.Kb = a;
        this.Mf("position", a)
      },
      ha: v("Kb"),
      Dc: function(a) {
        this.DJ = a;
        this.Mf("title", a)
      },
      mp: v("DJ"),
      Vb: function(a) {
        this.gI = icon;
        this.Mf("icon", a)
      },
      ep: v("gI"),
      BF: function(a) {
        this.Eq = a;
        this.Mf("altitude", a)
      },
      bp: v("Eq"),
      dE: v("HT"),
      Fa: function() {
        var a = p;
        if (this.P) {
          var a = this.P.ha()
            , b = this.ha()
            , a = Be(b.lng - a.lng, b.lat - a.lat);
          isNaN(a) && (a = 0);
          a = {
            heading: a,
            pitch: 0
          }
        } else
          a = this.Ea;
        return a
      },
      Mf: t()
    });
    var Je = Ie.prototype;
    U(Je, {
      setPosition: Je.ta,
      getPosition: Je.ha,
      setTitle: Je.Dc,
      getTitle: Je.mp,
      setAltitude: Je.BF,
      getAltitude: Je.bp,
      getPanoInfo: Je.dE,
      getIcon: Je.ep,
      setIcon: Je.Vb,
      getPov: Je.Fa
    });
    function Be(a, b) {
      var c = 0;
      if (0 !== a && 0 !== b) {
        var c = 180 * (Math.atan(a / b) / Math.PI)
          , d = 0;
        0 < a && 0 > b && (d = 90);
        0 > a && 0 > b && (d = 180);
        0 > a && 0 < b && (d = 270);
        c = (c + 90) % 90 + d
      } else
        0 === a ? c = 0 > b ? 180 : 0 : 0 === b && (c = 0 < a ? 90 : 270);
      return Math.round(c)
    }
    function Na(a) {
      if ("boolean" === typeof Ke)
        return Ke;
      if (a === q || !window.WebGLRenderingContext)
        return Ke = q;
      if (x.platform.Pm) {
        a = 0;
        try {
          a = navigator.userAgent.split("Android ")[1].charAt(0)
        } catch (b) {}
        if (5 > a)
          return Ke = q
      }
      var a = document.createElement("canvas")
        , c = p;
      try {
        c = a.getContext("webgl")
      } catch (d) {
        Ke = q
      }
      return Ke = c === p ? q : o
    }
    var Ke;
    function Le() {
      if ("boolean" === typeof Me)
        return Me;
      Me = o;
      if (x.platform.CE)
        return o;
      var a = navigator.userAgent;
      return -1 < a.indexOf("Chrome") || -1 < a.indexOf("SAMSUNG-GT-I9508") ? o : Me = q
    }
    var Me;
    function Nc(a, b) {
      this.P = a || p;
      var c = this;
      c.P && c.ca();
      I.load("pservice", function() {
        c.LQ()
      });
      "api" == (b || {}).of ? Qa(Fa) : Qa(Ga);
      this.xd = {
        getPanoramaById: [],
        getPanoramaByLocation: [],
        getVisiblePOIs: [],
        getRecommendPanosById: [],
        getPanoramaVersions: [],
        checkPanoSupportByCityCode: [],
        getPanoramaByPOIId: [],
        getCopyrightProviders: []
      }
    }
    z.$m(function(a) {
      "flashRender" !== a.lr() && new Nc(a,{
        of: "api"
      })
    });
    x.extend(Nc.prototype, {
      ca: function() {
        function a(a) {
          if (a) {
            if (a.id != b.kw) {
              b.pO(a.id);
              b.ea = a;
              Le() || b.dispatchEvent(new M("onthumbnail_complete"));
              b.Ya != p && (b.yl = b._position);
              for (var c in a)
                if (a.hasOwnProperty(c))
                  switch (b["_" + c] = a[c],
                    c) {
                    case "position":
                      b.Kb = a[c];
                      break;
                    case "id":
                      b.Ya = a[c];
                      break;
                    case "links":
                      b.io = a[c];
                      break;
                    case "zoom":
                      b.Kc = a[c]
                  }
              if (b.yl) {
                var f = b.yl
                  , g = b._position;
                c = f.lat;
                var i = g.lat
                  , k = Ob(i - c)
                  , f = Ob(g.lng - f.lng);
                c = Math.sin(k / 2) * Math.sin(k / 2) + Math.cos(Ob(c)) * Math.cos(Ob(i)) * Math.sin(f / 2) * Math.sin(f / 2);
                b.vH = 6371E3 * 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c))
              }
              c = new M("ondataload");
              c.data = a;
              b.dispatchEvent(c);
              b.dispatchEvent(new M("onposition_changed"));
              b.dispatchEvent(new M("onlinks_changed"));
              b.dispatchEvent(new M("oncopyright_changed"), {
                copyright: a.copyright
              });
              a.im && b.k.closeControl ? x.K.show(b.OR) : x.K.U(b.OR)
            }
          } else
            b.Ya = b.xl,
              b.Kb = b.yl,
              b.dispatchEvent(new M("onnoresult"))
        }
        var b = this.P
          , c = this;
        b.addEventListener("id_changed", function() {
          c.ip(b.Yb(), a)
        });
        b.addEventListener("iid_changed", function() {
          c.Ug(Nc.il + "qt=idata&iid=" + b.FA + "&fn=", function(b) {
            if (b && b.result && 0 == b.result.error) {
              var b = b.content[0].interinfo
                , e = {};
              e.im = b.BreakID;
              for (var f = b.Defaultfloor, g = p, i = 0; i < b.Floors.length; i++)
                if (b.Floors[i].Floor == f) {
                  g = b.Floors[i];
                  break
                }
              e.id = g.StartID || g.Points[0].PID;
              c.ip(e.id, a, e)
            }
          })
        });
        b.addEventListener("position_changed_inner", function() {
          c.uj(b.ha(), a)
        })
      },
      ip: function(a, b) {
        this.xd.getPanoramaById.push(arguments)
      },
      uj: function(a, b, c) {
        this.xd.getPanoramaByLocation.push(arguments)
      },
      nE: function(a, b, c, d) {
        this.xd.getVisiblePOIs.push(arguments)
      },
      Mx: function(a, b) {
        this.xd.getRecommendPanosById.push(arguments)
      },
      Lx: function(a) {
        this.xd.getPanoramaVersions.push(arguments)
      },
      qC: function(a, b) {
        this.xd.checkPanoSupportByCityCode.push(arguments)
      },
      Kx: function(a, b) {
        this.xd.getPanoramaByPOIId.push(arguments)
      },
      CL: function(a) {
        this.xd.getCopyrightProviders.push(arguments)
      }
    });
    var Ne = Nc.prototype;
    U(Ne, {
      getPanoramaById: Ne.ip,
      getPanoramaByLocation: Ne.uj,
      getPanoramaByPOIId: Ne.Kx
    });
    function Mc(a) {
      td.call(this);
      "api" == (a || {}).of ? Qa(za) : Qa(Aa)
    }
    Mc.NG = z.sg("pano", "tile/");
    Mc.prototype = new td;
    Mc.prototype.getTilesUrl = function(a, b) {
      var c = Mc.NG[(a.x + a.y) % Mc.NG.length] + "?udt=20150114&qt=tile&styles=pl&x=" + a.x + "&y=" + a.y + "&z=" + b;
      x.da.la && 6 >= x.da.la && (c += "&color_dep=32");
      return c
    }
    ;
    Mc.prototype.Et = ea(o);
    Oe.Wd = new T;
    function Oe() {}
    x.extend(Oe, {
      AW: function(a, b, c) {
        c = x.lang.Lc(c);
        b = {
          data: b
        };
        "position_changed" == a && (b.data = Oe.Wd.Ej(new S(b.data.mercatorX,b.data.mercatorY)));
        c.dispatchEvent(new M("on" + a), b)
      }
    });
    var Pe = Oe;
    U(Pe, {
      dispatchFlashEvent: Pe.AW
    });
    var Qe = {
      EP: 50
    };
    Qe.Qu = z.sg("pano")[0];
    Qe.Mu = {
      width: 220,
      height: 60
    };
    x.extend(Qe, {
      vp: function(a, b, c, d) {
        if (!b || !c || !c.lngLat || !c.panoInstance)
          d();
        else {
          this.oo === j && (this.oo = new Nc(p,{
            of: "api"
          }));
          var e = this;
          this.oo.qC(b, function(b) {
            b ? e.oo.uj(c.lngLat, Qe.EP, function(b) {
              if (b && b.id) {
                var f = b.id
                  , k = b.xh
                  , b = b.yh
                  , l = Nc.Wd.ph(c.lngLat)
                  , m = e.tS(l, {
                  x: k,
                  y: b
                })
                  , k = e.ML(f, m, 0, Qe.Mu.width, Qe.Mu.height);
                a.content = e.uS(a.content, k, c.titleTip, c.beforeDomId);
                a.addEventListener("open", function() {
                  ja.M(x.Ec("infoWndPano"), "click", function() {
                    c.panoInstance.rc(f);
                    c.panoInstance.show();
                    c.panoInstance.Nc({
                      heading: m,
                      pitch: 0
                    })
                  })
                })
              }
              d()
            }) : d()
          })
        }
      },
      uS: function(a, b, c, d) {
        var c = c || "", e;
        !d || !a.split(d)[0] ? (d = a,
          a = "") : (d = a.split(d)[0],
          e = d.lastIndexOf("<"),
          d = a.substring(0, e),
          a = a.substring(e));
        e = [];
        var f = Qe.Mu.width
          , g = Qe.Mu.height;
        e.push(d);
        e.push("<div id='infoWndPano' class='panoInfoBox' style='height:" + g + "px;width:" + f + "px; margin-top: -19px;'>");
        e.push("<img class='pano_thumnail_img' width='" + f + "' height='" + g + "' border='0' alt='" + c + "\u5916\u666f' title='" + c + "\u5916\u666f' src='" + b + "' onerror='Pano.PanoEntranceUtil.thumbnailNotFound(this, " + f + ", " + g + ");' />");
        e.push("<div class='panoInfoBoxTitleBg' style='width:" + f + "px;'></div><a href='javascript:void(0)' class='panoInfoBoxTitleContent' >\u8fdb\u5165\u5168\u666f&gt;&gt;</a>");
        e.push("</div>");
        e.push(a);
        return e.join("")
      },
      tS: function(a, b) {
        var c = 90 - 180 * Math.atan2(a.y - b.y, a.x - b.x) / Math.PI;
        0 > c && (c += 360);
        return c
      },
      ML: function(a, b, c, d, e) {
        var f = {
          panoId: a,
          panoHeading: b || 0,
          panoPitch: c || 0,
          width: d,
          height: e
        };
        return (Qe.Qu + "?qt=pr3d&fovy=75&quality=80&panoid={panoId}&heading={panoHeading}&pitch={panoPitch}&width={width}&height={height}").replace(/\{(.*?)\}/g, function(a, b) {
          return f[b]
        })
      }
    });
    var Re = document, Se = Math, Te = Re.createElement("div").style, Ue;
    a: {
      for (var Ve = ["t", "webkitT", "MozT", "msT", "OT"], We, Xe = 0, Ye = Ve.length; Xe < Ye; Xe++)
        if (We = Ve[Xe] + "ransform",
        We in Te) {
          Ue = Ve[Xe].substr(0, Ve[Xe].length - 1);
          break a
        }
      Ue = q
    }
    var Ze = Ue ? "-" + Ue.toLowerCase() + "-" : ""
      , af = $e("transform")
      , bf = $e("transitionProperty")
      , cf = $e("transitionDuration")
      , df = $e("transformOrigin")
      , ef = $e("transitionTimingFunction")
      , ff = $e("transitionDelay")
      , ne = /android/gi.test(navigator.appVersion)
      , gf = /iphone|ipad/gi.test(navigator.appVersion)
      , hf = /hp-tablet/gi.test(navigator.appVersion)
      , jf = $e("perspective")in Te
      , kf = "ontouchstart"in window && !hf
      , lf = Ue !== q
      , mf = $e("transition")in Te
      , nf = "onorientationchange"in window ? "orientationchange" : "resize"
      , of = kf ? "touchstart" : "mousedown"
      , pf = kf ? "touchmove" : "mousemove"
      , qf = kf ? "touchend" : "mouseup"
      , rf = kf ? "touchcancel" : "mouseup"
      , sf = Ue === q ? q : {
      "": "transitionend",
      webkit: "webkitTransitionEnd",
      Moz: "transitionend",
      O: "otransitionend",
      ms: "MSTransitionEnd"
    }[Ue]
      , tf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
      return setTimeout(a, 1)
    }
      , uf = window.cancelRequestAnimationFrame || window.c5 || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
      , vf = jf ? " translateZ(0)" : "";
    function wf(a, b) {
      var c = this, d;
      c.Dn = "object" == typeof a ? a : Re.getElementById(a);
      c.Dn.style.overflow = "hidden";
      c.Nb = c.Dn.children[0];
      c.options = {
        qp: o,
        Bn: o,
        x: 0,
        y: 0,
        Ko: o,
        AV: q,
        my: o,
        RE: o,
        $k: o,
        Fi: q,
        W_: 0,
        Qw: q,
        Px: o,
        ri: o,
        Gi: o,
        ED: ne,
        Tx: gf,
        VW: gf && jf,
        yF: "",
        zoom: q,
        bl: 1,
        jq: 4,
        DW: 2,
        jP: "scroll",
        mu: q,
        Wy: 1,
        wN: p,
        oN: function(a) {
          a.preventDefault()
        },
        zN: p,
        nN: p,
        yN: p,
        mN: p,
        uy: p,
        AN: p,
        rN: p,
        Hp: p,
        BN: p,
        Gp: p
      };
      for (d in b)
        c.options[d] = b[d];
      c.x = c.options.x;
      c.y = c.options.y;
      c.options.$k = lf && c.options.$k;
      c.options.ri = c.options.qp && c.options.ri;
      c.options.Gi = c.options.Bn && c.options.Gi;
      c.options.zoom = c.options.$k && c.options.zoom;
      c.options.Fi = mf && c.options.Fi;
      c.options.zoom && ne && (vf = "");
      c.Nb.style[bf] = c.options.$k ? Ze + "transform" : "top left";
      c.Nb.style[cf] = "0";
      c.Nb.style[df] = "0 0";
      c.options.Fi && (c.Nb.style[ef] = "cubic-bezier(0.33,0.66,0.66,1)");
      c.options.$k ? c.Nb.style[af] = "translate(" + c.x + "px," + c.y + "px)" + vf : c.Nb.style.cssText += ";position:absolute;top:" + c.y + "px;left:" + c.x + "px";
      c.options.Fi && (c.options.ED = o);
      c.refresh();
      c.ca(nf, window);
      c.ca(of);
      !kf && "none" != c.options.jP && (c.ca("DOMMouseScroll"),
        c.ca("mousewheel"));
      c.options.Qw && (c.LV = setInterval(function() {
        c.IQ()
      }, 500));
      this.options.Px && (Event.prototype.stopImmediatePropagation || (document.body.removeEventListener = function(a, b, c) {
          var d = Node.prototype.removeEventListener;
          a === "click" ? d.call(document.body, a, b.eM || b, c) : d.call(document.body, a, b, c)
        }
          ,
          document.body.addEventListener = function(a, b, c) {
            var d = Node.prototype.addEventListener;
            a === "click" ? d.call(document.body, a, b.eM || (b.eM = function(a) {
                a.AZ || b(a)
              }
            ), c) : d.call(document.body, a, b, c)
          }
      ),
        c.ca("click", document.body, o))
    }
    wf.prototype = {
      enabled: o,
      x: 0,
      y: 0,
      Fj: [],
      scale: 1,
      KC: 0,
      LC: 0,
      Ve: [],
      vf: [],
      hC: p,
      fz: 0,
      handleEvent: function(a) {
        switch (a.type) {
          case of:
            if (!kf && 0 !== a.button)
              break;
            this.bw(a);
            break;
          case pf:
            this.rT(a);
            break;
          case qf:
          case rf:
            this.nv(a);
            break;
          case nf:
            this.BB();
            break;
          case "DOMMouseScroll":
          case "mousewheel":
            this.WU(a);
            break;
          case sf:
            this.SU(a);
            break;
          case "click":
            this.TQ(a)
        }
      },
      IQ: function() {
        !this.uh && (!this.cl && !(this.dm || this.My == this.Nb.offsetWidth * this.scale && this.Sp == this.Nb.offsetHeight * this.scale)) && this.refresh()
      },
      Tv: function(a) {
        var b;
        this[a + "Scrollbar"] ? (this[a + "ScrollbarWrapper"] || (b = Re.createElement("div"),
          this.options.yF ? b.className = this.options.yF + a.toUpperCase() : b.style.cssText = "position:absolute;z-index:100;" + ("h" == a ? "height:7px;bottom:1px;left:2px;right:" + (this.Gi ? "7" : "2") + "px" : "width:7px;bottom:" + (this.ri ? "7" : "2") + "px;top:2px;right:1px"),
          b.style.cssText += ";pointer-events:none;" + Ze + "transition-property:opacity;" + Ze + "transition-duration:" + (this.options.VW ? "350ms" : "0") + ";overflow:hidden;opacity:" + (this.options.Tx ? "0" : "1"),
          this.Dn.appendChild(b),
          this[a + "ScrollbarWrapper"] = b,
          b = Re.createElement("div"),
        this.options.yF || (b.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" + Ze + "background-clip:padding-box;" + Ze + "box-sizing:border-box;" + ("h" == a ? "height:100%" : "width:100%") + ";" + Ze + "border-radius:3px;border-radius:3px"),
          b.style.cssText += ";pointer-events:none;" + Ze + "transition-property:" + Ze + "transform;" + Ze + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" + Ze + "transition-duration:0;" + Ze + "transform: translate(0,0)" + vf,
        this.options.Fi && (b.style.cssText += ";" + Ze + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),
          this[a + "ScrollbarWrapper"].appendChild(b),
          this[a + "ScrollbarIndicator"] = b),
          "h" == a ? (this.bM = this.cM.clientWidth,
            this.jY = Se.max(Se.round(this.bM * this.bM / this.My), 8),
            this.iY.style.width = this.jY + "px") : (this.aP = this.bP.clientHeight,
            this.q0 = Se.max(Se.round(this.aP * this.aP / this.Sp), 8),
            this.p0.style.height = this.q0 + "px"),
          this.CB(a, o)) : this[a + "ScrollbarWrapper"] && (lf && (this[a + "ScrollbarIndicator"].style[af] = ""),
          this[a + "ScrollbarWrapper"].parentNode.removeChild(this[a + "ScrollbarWrapper"]),
          this[a + "ScrollbarWrapper"] = p,
          this[a + "ScrollbarIndicator"] = p)
      },
      BB: function() {
        var a = this;
        setTimeout(function() {
          a.refresh()
        }, ne ? 200 : 0)
      },
      Jr: function(a, b) {
        this.cl || (a = this.qp ? a : 0,
          b = this.Bn ? b : 0,
          this.options.$k ? this.Nb.style[af] = "translate(" + a + "px," + b + "px) scale(" + this.scale + ")" + vf : (a = Se.round(a),
            b = Se.round(b),
            this.Nb.style.left = a + "px",
            this.Nb.style.top = b + "px"),
          this.x = a,
          this.y = b,
          this.CB("h"),
          this.CB("v"))
      },
      CB: function(a, b) {
        var c = "h" == a ? this.x : this.y;
        this[a + "Scrollbar"] && (c *= this[a + "ScrollbarProp"],
          0 > c ? (this.options.ED || (c = this[a + "ScrollbarIndicatorSize"] + Se.round(3 * c),
          8 > c && (c = 8),
            this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px"),
            c = 0) : c > this[a + "ScrollbarMaxScroll"] && (this.options.ED ? c = this[a + "ScrollbarMaxScroll"] : (c = this[a + "ScrollbarIndicatorSize"] - Se.round(3 * (c - this[a + "ScrollbarMaxScroll"])),
          8 > c && (c = 8),
            this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px",
            c = this[a + "ScrollbarMaxScroll"] + (this[a + "ScrollbarIndicatorSize"] - c))),
          this[a + "ScrollbarWrapper"].style[ff] = "0",
          this[a + "ScrollbarWrapper"].style.opacity = b && this.options.Tx ? "0" : "1",
          this[a + "ScrollbarIndicator"].style[af] = "translate(" + ("h" == a ? c + "px,0)" : "0," + c + "px)") + vf)
      },
      TQ: function(a) {
        if (a.PR === o)
          return this.$B = a.target,
            this.tx = Date.now(),
            o;
        if (this.$B && this.tx) {
          if (600 < Date.now() - this.tx)
            return this.tx = this.$B = p,
              o
        } else {
          for (var b = a.target; b != this.Nb && b != document.body; )
            b = b.parentNode;
          if (b == document.body)
            return o
        }
        for (b = a.target; 1 != b.nodeType; )
          b = b.parentNode;
        b = b.tagName.toLowerCase();
        if ("select" != b && "input" != b && "textarea" != b)
          return a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.AZ = o,
            a.stopPropagation(),
            a.preventDefault(),
            this.tx = this.$B = p,
            q
      },
      bw: function(a) {
        var b = kf ? a.touches[0] : a, c, d;
        if (this.enabled) {
          this.options.oN && this.options.oN.call(this, a);
          (this.options.Fi || this.options.zoom) && this.EJ(0);
          this.cl = this.dm = this.uh = q;
          this.UC = this.TC = this.ww = this.vw = this.$C = this.ZC = 0;
          this.options.zoom && (kf && 1 < a.touches.length) && (d = Se.abs(a.touches[0].pageX - a.touches[1].pageX),
            c = Se.abs(a.touches[0].pageY - a.touches[1].pageY),
            this.Y_ = Se.sqrt(d * d + c * c),
            this.wy = Se.abs(a.touches[0].pageX + a.touches[1].pageX - 2 * this.iG) / 2 - this.x,
            this.xy = Se.abs(a.touches[0].pageY + a.touches[1].pageY - 2 * this.jG) / 2 - this.y,
          this.options.Hp && this.options.Hp.call(this, a));
          if (this.options.my && (this.options.$k ? (c = getComputedStyle(this.Nb, p)[af].replace(/[^0-9\-.,]/g, "").split(","),
            d = +(c[12] || c[4]),
            c = +(c[13] || c[5])) : (d = +getComputedStyle(this.Nb, p).left.replace(/[^0-9-]/g, ""),
            c = +getComputedStyle(this.Nb, p).top.replace(/[^0-9-]/g, "")),
          d != this.x || c != this.y))
            this.options.Fi ? this.$d(sf) : uf(this.hC),
              this.Fj = [],
              this.Jr(d, c),
            this.options.uy && this.options.uy.call(this);
          this.xw = this.x;
          this.yw = this.y;
          this.qu = this.x;
          this.ru = this.y;
          this.xh = b.pageX;
          this.yh = b.pageY;
          this.startTime = a.timeStamp || Date.now();
          this.options.zN && this.options.zN.call(this, a);
          this.ca(pf, window);
          this.ca(qf, window);
          this.ca(rf, window)
        }
      },
      rT: function(a) {
        var b = kf ? a.touches[0] : a
          , c = b.pageX - this.xh
          , d = b.pageY - this.yh
          , e = this.x + c
          , f = this.y + d
          , g = a.timeStamp || Date.now();
        this.options.nN && this.options.nN.call(this, a);
        if (this.options.zoom && kf && 1 < a.touches.length)
          e = Se.abs(a.touches[0].pageX - a.touches[1].pageX),
            f = Se.abs(a.touches[0].pageY - a.touches[1].pageY),
            this.X_ = Se.sqrt(e * e + f * f),
            this.cl = o,
            b = 1 / this.Y_ * this.X_ * this.scale,
            b < this.options.bl ? b = 0.5 * this.options.bl * Math.pow(2, b / this.options.bl) : b > this.options.jq && (b = 2 * this.options.jq * Math.pow(0.5, this.options.jq / b)),
            this.Bp = b / this.scale,
            e = this.wy - this.wy * this.Bp + this.x,
            f = this.xy - this.xy * this.Bp + this.y,
            this.Nb.style[af] = "translate(" + e + "px," + f + "px) scale(" + b + ")" + vf,
          this.options.BN && this.options.BN.call(this, a);
        else {
          this.xh = b.pageX;
          this.yh = b.pageY;
          if (0 < e || e < this.je)
            e = this.options.Ko ? this.x + c / 2 : 0 <= e || 0 <= this.je ? 0 : this.je;
          if (f > this.sf || f < this.od)
            f = this.options.Ko ? this.y + d / 2 : f >= this.sf || 0 <= this.od ? this.sf : this.od;
          this.ZC += c;
          this.$C += d;
          this.vw = Se.abs(this.ZC);
          this.ww = Se.abs(this.$C);
          6 > this.vw && 6 > this.ww || (this.options.RE && (this.vw > this.ww + 5 ? (f = this.y,
            d = 0) : this.ww > this.vw + 5 && (e = this.x,
            c = 0)),
            this.uh = o,
            this.Jr(e, f),
            this.TC = 0 < c ? -1 : 0 > c ? 1 : 0,
            this.UC = 0 < d ? -1 : 0 > d ? 1 : 0,
          300 < g - this.startTime && (this.startTime = g,
            this.qu = this.x,
            this.ru = this.y),
          this.options.yN && this.options.yN.call(this, a))
        }
      },
      nv: function(a) {
        if (!(kf && 0 !== a.touches.length)) {
          var b = this, c = kf ? a.changedTouches[0] : a, d, e, f = {
            Ca: 0,
            time: 0
          }, g = {
            Ca: 0,
            time: 0
          }, i = (a.timeStamp || Date.now()) - b.startTime;
          d = b.x;
          e = b.y;
          b.$d(pf, window);
          b.$d(qf, window);
          b.$d(rf, window);
          b.options.mN && b.options.mN.call(b, a);
          if (b.cl)
            d = b.scale * b.Bp,
              d = Math.max(b.options.bl, d),
              d = Math.min(b.options.jq, d),
              b.Bp = d / b.scale,
              b.scale = d,
              b.x = b.wy - b.wy * b.Bp + b.x,
              b.y = b.xy - b.xy * b.Bp + b.y,
              b.Nb.style[cf] = "200ms",
              b.Nb.style[af] = "translate(" + b.x + "px," + b.y + "px) scale(" + b.scale + ")" + vf,
              b.cl = q,
              b.refresh(),
            b.options.Gp && b.options.Gp.call(b, a);
          else {
            if (b.uh) {
              if (300 > i && b.options.my) {
                f = d ? b.BI(d - b.qu, i, -b.x, b.My - b.Fu + b.x, b.options.Ko ? b.Fu : 0) : f;
                g = e ? b.BI(e - b.ru, i, -b.y, 0 > b.od ? b.Sp - b.En + b.y - b.sf : 0, b.options.Ko ? b.En : 0) : g;
                d = b.x + f.Ca;
                e = b.y + g.Ca;
                if (0 < b.x && 0 < d || b.x < b.je && d < b.je)
                  f = {
                    Ca: 0,
                    time: 0
                  };
                if (b.y > b.sf && e > b.sf || b.y < b.od && e < b.od)
                  g = {
                    Ca: 0,
                    time: 0
                  }
              }
              f.Ca || g.Ca ? (c = Se.max(Se.max(f.time, g.time), 10),
              b.options.mu && (f = d - b.xw,
                g = e - b.yw,
                Se.abs(f) < b.options.Wy && Se.abs(g) < b.options.Wy ? b.scrollTo(b.xw, b.yw, 200) : (f = b.vJ(d, e),
                  d = f.x,
                  e = f.y,
                  c = Se.max(f.time, c))),
                b.scrollTo(Se.round(d), Se.round(e), c)) : b.options.mu ? (f = d - b.xw,
                g = e - b.yw,
                Se.abs(f) < b.options.Wy && Se.abs(g) < b.options.Wy ? b.scrollTo(b.xw, b.yw, 200) : (f = b.vJ(b.x, b.y),
                (f.x != b.x || f.y != b.y) && b.scrollTo(f.x, f.y, f.time))) : b.qo(200)
            } else {
              if (kf)
                if (b.UK && b.options.zoom)
                  clearTimeout(b.UK),
                    b.UK = p,
                  b.options.Hp && b.options.Hp.call(b, a),
                    b.zoom(b.xh, b.yh, 1 == b.scale ? b.options.DW : 1),
                  b.options.Gp && setTimeout(function() {
                    b.options.Gp.call(b, a)
                  }, 200);
                else if (this.options.Px) {
                  for (d = c.target; 1 != d.nodeType; )
                    d = d.parentNode;
                  e = d.tagName.toLowerCase();
                  "select" != e && "input" != e && "textarea" != e ? (e = Re.createEvent("MouseEvents"),
                    e.initMouseEvent("click", o, o, a.view, 1, c.screenX, c.screenY, c.clientX, c.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, p),
                    e.PR = o,
                    d.dispatchEvent(e)) : d.focus()
                }
              b.qo(400)
            }
            b.options.AN && b.options.AN.call(b, a)
          }
        }
      },
      qo: function(a) {
        var b = 0 <= this.x ? 0 : this.x < this.je ? this.je : this.x
          , c = this.y >= this.sf || 0 < this.od ? this.sf : this.y < this.od ? this.od : this.y;
        if (b == this.x && c == this.y) {
          if (this.uh && (this.uh = q,
          this.options.uy && this.options.uy.call(this)),
          this.ri && this.options.Tx && ("webkit" == Ue && (this.cM.style[ff] = "300ms"),
            this.cM.style.opacity = "0"),
          this.Gi && this.options.Tx)
            "webkit" == Ue && (this.bP.style[ff] = "300ms"),
              this.bP.style.opacity = "0"
        } else
          this.scrollTo(b, c, a || 0)
      },
      WU: function(a) {
        var b = this, c, d;
        if ("wheelDeltaX"in a)
          c = a.wheelDeltaX / 12,
            d = a.wheelDeltaY / 12;
        else if ("wheelDelta"in a)
          c = d = a.wheelDelta / 12;
        else if ("detail"in a)
          c = d = 3 * -a.detail;
        else
          return;
        if ("zoom" == b.options.jP) {
          if (d = b.scale * Math.pow(2, 1 / 3 * (d ? d / Math.abs(d) : 0)),
          d < b.options.bl && (d = b.options.bl),
          d > b.options.jq && (d = b.options.jq),
          d != b.scale)
            !b.fz && b.options.Hp && b.options.Hp.call(b, a),
              b.fz++,
              b.zoom(a.pageX, a.pageY, d, 400),
              setTimeout(function() {
                b.fz--;
                !b.fz && b.options.Gp && b.options.Gp.call(b, a)
              }, 400)
        } else
          c = b.x + c,
            d = b.y + d,
            0 < c ? c = 0 : c < b.je && (c = b.je),
            d > b.sf ? d = b.sf : d < b.od && (d = b.od),
          0 > b.od && b.scrollTo(c, d, 0)
      },
      SU: function(a) {
        a.target == this.Nb && (this.$d(sf),
          this.OB())
      },
      OB: function() {
        var a = this, b = a.x, c = a.y, d = Date.now(), e, f, g;
        a.dm || (a.Fj.length ? (e = a.Fj.shift(),
        e.x == b && e.y == c && (e.time = 0),
          a.dm = o,
          a.uh = o,
          a.options.Fi) ? (a.EJ(e.time),
          a.Jr(e.x, e.y),
          a.dm = q,
          e.time ? a.ca(sf) : a.qo(0)) : (g = function() {
          var i = Date.now(), k;
          if (i >= d + e.time) {
            a.Jr(e.x, e.y);
            a.dm = q;
            a.options.jZ && a.options.jZ.call(a);
            a.OB()
          } else {
            i = (i - d) / e.time - 1;
            f = Se.sqrt(1 - i * i);
            i = (e.x - b) * f + b;
            k = (e.y - c) * f + c;
            a.Jr(i, k);
            if (a.dm)
              a.hC = tf(g)
          }
        }
          ,
          g()) : a.qo(400))
      },
      EJ: function(a) {
        a += "ms";
        this.Nb.style[cf] = a;
        this.ri && (this.iY.style[cf] = a);
        this.Gi && (this.p0.style[cf] = a)
      },
      BI: function(a, b, c, d, e) {
        var b = Se.abs(a) / b
          , f = b * b / 0.0012;
        0 < a && f > c ? (c += e / (6 / (6.0E-4 * (f / b))),
          b = b * c / f,
          f = c) : 0 > a && f > d && (d += e / (6 / (6.0E-4 * (f / b))),
          b = b * d / f,
          f = d);
        return {
          Ca: f * (0 > a ? -1 : 1),
          time: Se.round(b / 6.0E-4)
        }
      },
      ek: function(a) {
        for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent; )
          b -= a.offsetLeft,
            c -= a.offsetTop;
        a != this.Dn && (b *= this.scale,
          c *= this.scale);
        return {
          left: b,
          top: c
        }
      },
      vJ: function(a, b) {
        var c, d, e;
        e = this.Ve.length - 1;
        c = 0;
        for (d = this.Ve.length; c < d; c++)
          if (a >= this.Ve[c]) {
            e = c;
            break
          }
        e == this.KC && (0 < e && 0 > this.TC) && e--;
        a = this.Ve[e];
        d = (d = Se.abs(a - this.Ve[this.KC])) ? 500 * (Se.abs(this.x - a) / d) : 0;
        this.KC = e;
        e = this.vf.length - 1;
        for (c = 0; c < e; c++)
          if (b >= this.vf[c]) {
            e = c;
            break
          }
        e == this.LC && (0 < e && 0 > this.UC) && e--;
        b = this.vf[e];
        c = (c = Se.abs(b - this.vf[this.LC])) ? 500 * (Se.abs(this.y - b) / c) : 0;
        this.LC = e;
        e = Se.round(Se.max(d, c)) || 200;
        return {
          x: a,
          y: b,
          time: e
        }
      },
      ca: function(a, b, c) {
        (b || this.Nb).addEventListener(a, this, !!c)
      },
      $d: function(a, b, c) {
        (b || this.Nb).removeEventListener(a, this, !!c)
      },
      QC: ha(2),
      refresh: function() {
        var a, b, c, d = 0;
        b = 0;
        this.scale < this.options.bl && (this.scale = this.options.bl);
        this.Fu = this.Dn.clientWidth || 1;
        this.En = this.Dn.clientHeight || 1;
        this.sf = -this.options.W_ || 0;
        this.My = Se.round(this.Nb.offsetWidth * this.scale);
        this.Sp = Se.round((this.Nb.offsetHeight + this.sf) * this.scale);
        this.je = this.Fu - this.My;
        this.od = this.En - this.Sp + this.sf;
        this.UC = this.TC = 0;
        this.options.wN && this.options.wN.call(this);
        this.qp = this.options.qp && 0 > this.je;
        this.Bn = this.options.Bn && (!this.options.AV && !this.qp || this.Sp > this.En);
        this.ri = this.qp && this.options.ri;
        this.Gi = this.Bn && this.options.Gi && this.Sp > this.En;
        a = this.ek(this.Dn);
        this.iG = -a.left;
        this.jG = -a.top;
        if ("string" == typeof this.options.mu) {
          this.Ve = [];
          this.vf = [];
          c = this.Nb.querySelectorAll(this.options.mu);
          a = 0;
          for (b = c.length; a < b; a++)
            d = this.ek(c[a]),
              d.left += this.iG,
              d.top += this.jG,
              this.Ve[a] = d.left < this.je ? this.je : d.left * this.scale,
              this.vf[a] = d.top < this.od ? this.od : d.top * this.scale
        } else if (this.options.mu) {
          for (this.Ve = []; d >= this.je; )
            this.Ve[b] = d,
              d -= this.Fu,
              b++;
          this.je % this.Fu && (this.Ve[this.Ve.length] = this.je - this.Ve[this.Ve.length - 1] + this.Ve[this.Ve.length - 1]);
          b = d = 0;
          for (this.vf = []; d >= this.od; )
            this.vf[b] = d,
              d -= this.En,
              b++;
          this.od % this.En && (this.vf[this.vf.length] = this.od - this.vf[this.vf.length - 1] + this.vf[this.vf.length - 1])
        }
        this.Tv("h");
        this.Tv("v");
        this.cl || (this.Nb.style[cf] = "0",
          this.qo(400))
      },
      scrollTo: function(a, b, c, d) {
        var e = a;
        this.stop();
        e.length || (e = [{
          x: a,
          y: b,
          time: c,
          CZ: d
        }]);
        a = 0;
        for (b = e.length; a < b; a++)
          e[a].CZ && (e[a].x = this.x - e[a].x,
            e[a].y = this.y - e[a].y),
            this.Fj.push({
              x: e[a].x,
              y: e[a].y,
              time: e[a].time || 0
            });
        this.OB()
      },
      disable: function() {
        this.stop();
        this.qo(0);
        this.enabled = q;
        this.$d(pf, window);
        this.$d(qf, window);
        this.$d(rf, window)
      },
      enable: function() {
        this.enabled = o
      },
      stop: function() {
        this.options.Fi ? this.$d(sf) : uf(this.hC);
        this.Fj = [];
        this.dm = this.uh = q
      },
      zoom: function(a, b, c, d) {
        var e = c / this.scale;
        this.options.$k && (this.cl = o,
          d = d === j ? 200 : d,
          a = a - this.iG - this.x,
          b = b - this.jG - this.y,
          this.x = a - a * e + this.x,
          this.y = b - b * e + this.y,
          this.scale = c,
          this.refresh(),
          this.x = 0 < this.x ? 0 : this.x < this.je ? this.je : this.x,
          this.y = this.y > this.sf ? this.sf : this.y < this.od ? this.od : this.y,
          this.Nb.style[cf] = d + "ms",
          this.Nb.style[af] = "translate(" + this.x + "px," + this.y + "px) scale(" + c + ")" + vf,
          this.cl = q)
      }
    };
    function $e(a) {
      if ("" === Ue)
        return a;
      a = a.charAt(0).toUpperCase() + a.substr(1);
      return Ue + a
    }
    Te = p;
    function xf(a) {
      this.k = {
        anchor: Gc,
        offset: new L(0,0),
        maxWidth: "100%",
        imageHeight: 80
      };
      var a = a || {}, b;
      for (b in a)
        this.k[b] = a[b];
      this.Ql = new Nc(p,{
        of: "api"
      });
      this.fk = [];
      this.P = p;
      this.eg = {
        height: this.k.imageHeight,
        width: this.k.imageHeight * yf
      };
      this.Pc = this.DB = this.im = this.Yc = p
    }
    var zf = [0, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 8, 9, 10]
      , Af = "\u5176\u4ed6 \u6b63\u95e8 \u623f\u578b \u8bbe\u65bd \u6b63\u95e8 \u9910\u996e\u8bbe\u65bd \u5176\u4ed6\u8bbe\u65bd \u6b63\u95e8 \u8bbe\u65bd \u89c2\u5f71\u5385 \u5176\u4ed6\u8bbe\u65bd".split(" ");
    z.$m(function(a) {
      var b = p;
      a.addEventListener("position_changed", function() {
        a.k.visible && a.k.albumsControl === o && (b ? b.Gy(a.Yb()) : (b = new xf(a.k.albumsControlOptions),
          b.ra(a)))
      });
      a.addEventListener("albums_visible_changed", function() {
        a.k.albumsControl === o ? (b ? b.Gy(a.Yb()) : (b = new xf(a.k.albumsControlOptions),
          b.ra(a)),
          b.show()) : b.U()
      });
      a.addEventListener("albums_options_changed", function() {
        b && b.Rk(a.k.albumsControlOptions)
      });
      a.addEventListener("visible_changed", function() {
        b && (a.mE() ? a.k.albumsControl === o && (b.C.style.visibility = "visible") : b.C.style.visibility = "hidden")
      })
    });
    var yf = 1.8;
    G() && (yf = 1);
    x.extend(xf.prototype, {
      Rk: function(a) {
        for (var b in a)
          this.k[b] = a[b];
        a = this.k.imageHeight + "px";
        this.qc(this.k.anchor);
        this.C.style.width = isNaN(Number(this.k.maxWidth)) === o ? this.k.maxWidth : this.k.maxWidth + "px";
        this.C.style.height = a;
        this.kk.style.height = a;
        this.ai.style.height = a;
        this.eg = {
          height: this.k.imageHeight,
          width: this.k.imageHeight * yf
        };
        this.jk.style.height = this.eg.height - 6 + "px";
        this.jk.style.width = this.eg.width - 6 + "px";
        this.Gy(this.P.Yb(), o)
      },
      ra: function(a) {
        this.P = a;
        this.ss();
        this.rQ();
        this.xY();
        this.Gy(a.Yb())
      },
      ss: function() {
        var a = this.k.imageHeight + "px";
        this.C = K("div");
        var b = this.C.style;
        b.cssText = "background:rgb(37,37,37);background:rgba(37,37,37,0.9);";
        b.position = "absolute";
        b.zIndex = "2000";
        b.width = isNaN(Number(this.k.maxWidth)) === o ? this.k.maxWidth : this.k.maxWidth + "px";
        b.padding = "8px 0";
        b.visibility = "hidden";
        b.height = a;
        this.kk = K("div");
        b = this.kk.style;
        b.position = "absolute";
        b.overflow = "hidden";
        b.width = "100%";
        b.height = a;
        this.ai = K("div");
        b = this.ai.style;
        b.height = a;
        this.kk.appendChild(this.ai);
        this.C.appendChild(this.kk);
        this.P.C.appendChild(this.C);
        this.jk = K("div", {
          "class": "pano_photo_item_seleted"
        });
        this.jk.style.height = this.eg.height - 6 + "px";
        this.jk.style.width = this.eg.width - 6 + "px";
        this.qc(this.k.anchor)
      },
      SH: function(a) {
        for (var b = this.fk, c = b.length - 1; 0 <= c; c--)
          if (b[c].panoId == a)
            return c;
        return -1
      },
      Gy: function(a, b) {
        if (b || !this.fk[this.Yc] || !(this.fk[this.Yc].panoId == a && 3 !== this.fk[this.Yc].recoType)) {
          var c = this
            , d = this.SH(a);
          !b && -1 !== d && this.fk[d] && 3 !== this.fk[d].recoType ? this.Wp(d) : this.PX(function(a) {
            for (var b = {}, d, i, k = q, l = [], m = 0, n = a.length; m < n; m++)
              d = a[m].catlog,
                i = a[m].floor,
              j !== d && ("" === d && j !== i ? (k = o,
              b[i] || (b[i] = []),
                b[i].push(a[m])) : (b[zf[d]] || (b[zf[d]] = []),
                b[zf[d]].push(a[m])));
            for (var s in b)
              k ? l.push({
                data: s + "F",
                index: s
              }) : l.push({
                data: Af[s],
                index: s
              });
            c.iH = b;
            c.Si = l;
            c.Ml(a);
            0 == a.length ? c.U() : c.show()
          })
        }
      },
      iW: function() {
        if (!this.Pi) {
          var a = this.DX(this.Si)
            , b = K("div");
          b.style.cssText = ["width:" + 134 * this.Si.length + "px;", "overflow:hidden;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;"].join("");
          b.innerHTML = a;
          a = K("div");
          a.appendChild(b);
          a.style.cssText = "position:absolute;top:-25px;background:rgb(37,37,37);background:rgba(37,37,37,0.9);border-bottom:1px solid #4e596a;width:100%;line-height:25px;height:25px;overflow:scroll;outline:0";
          new wf(a,{
            Ko: q,
            my: o,
            ri: q,
            Gi: q,
            Bn: q,
            RE: o,
            Qw: o,
            Px: o
          });
          this.C.appendChild(a);
          for (var c = this, d = b.getElementsByTagName("span"), e = 0, f = d.length; e < f; e++)
            b = d[e],
              x.M(b, "click", function() {
                if (this.getAttribute("dataindex")) {
                  c.Ml(c.iH[this.getAttribute("dataindex")]);
                  for (var a = 0, b = d.length; a < b; a++)
                    d[a].style.color = "#FFFFFF";
                  this.style.color = "#3383FF"
                }
              });
          this.Pi = a
        }
      },
      fW: function() {
        if (this.Pi)
          a = this.AL(this.Si),
            this.HQ.innerHTML = a;
        else {
          var a = this.AL(this.Si)
            , b = K("ul")
            , c = this;
          b.style.cssText = "list-style: none;padding:0px;margin:0px;display:block;width:60px;position:absolute;top:7px";
          b.innerHTML = a;
          x.M(b, "click", function(a) {
            if (a = (a.srcElement || a.target).getAttribute("dataindex")) {
              c.Ml(c.iH[a]);
              for (var d = b.getElementsByTagName("li"), e = 0, f = d.length; e < f; e++)
                d[e].childNodes[0].getAttribute("dataindex") === a ? x.K.Ta(d[e], "pano_catlogLiActive") : x.K.Tb(d[e], "pano_catlogLiActive")
            }
          });
          var a = K("div")
            , d = K("a")
            , e = K("span")
            , f = K("a")
            , g = K("span")
            , i = ["background:url(" + F.qa + "panorama/catlog_icon.png) no-repeat;", "display:block;width:10px;height:7px;margin:0 auto;"].join("");
          e.style.cssText = i + "background-position:-18px 0;";
          d.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
          g.style.cssText = i + "background-position:0 0;";
          f.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
          f.style.top = this.k.imageHeight - 7 + "px";
          a.style.cssText = "position:absolute;top:0px;left:0px;width:60px;";
          d.appendChild(e);
          f.appendChild(g);
          x.M(d, "mouseover", function() {
            var a = parseInt(b.style.top, 10);
            7 !== a && (e.style.backgroundPosition = "-27px 0");
            new tb({
              Hc: 60,
              hc: ub.Ps,
              duration: 300,
              va: function(c) {
                b.style.top = a + (7 - a) * c + "px"
              }
            })
          });
          x.M(d, "mouseout", function() {
            e.style.backgroundPosition = "-18px 0"
          });
          x.M(f, "mouseover", function() {
            var a = parseInt(b.style.top, 10)
              , d = c.k.imageHeight - 14;
            if (!(parseInt(b.offsetHeight, 10) < d)) {
              var e = d - parseInt(b.offsetHeight, 10) + 7;
              e !== a && (g.style.backgroundPosition = "-9px 0");
              new tb({
                Hc: 60,
                hc: ub.Ps,
                duration: 300,
                va: function(c) {
                  b.style.top = a + (e - a) * c + "px"
                }
              })
            }
          });
          x.M(f, "mouseout", function() {
            g.style.backgroundPosition = "0 0"
          });
          a.appendChild(d);
          a.appendChild(f);
          d = K("div");
          d.style.cssText = ["position:absolute;z-index:2001;left:20px;", "height:" + this.k.imageHeight + "px;", "width:62px;overflow:hidden;background:rgb(37,37,37);background:rgba(37,37,37,0.9);"].join("");
          d.appendChild(b);
          d.appendChild(a);
          this.Pi = d;
          this.HQ = b;
          this.C.appendChild(d)
        }
      },
      gW: function() {
        if (this.Si && !(0 >= this.Si.length)) {
          var a = K("div");
          a.innerHTML = this.lA;
          a.style.cssText = "position:absolute;background:#252525";
          this.C.appendChild(a);
          this.Ts = a;
          this.Pc.fg.style.left = this.eg.width + 8 + "px";
          this.Pi && (this.Pi.style.left = parseInt(this.Pi.style.left, 10) + this.eg.width + 8 + "px");
          var b = this;
          x.M(a, "click", function() {
            b.P.rc(b.SW)
          })
        }
      },
      Ml: function(a) {
        this.fk = a;
        this.k.showCatalog && (0 < this.Si.length ? (Va() ? this.fW() : this.iW(),
          this.Pc.offsetLeft = 60) : (this.Ts && (this.C.removeChild(this.Ts),
          this.Ts = p,
          this.Pc.fg.style.left = "0px"),
        this.Pi && (this.C.removeChild(this.Pi),
          this.Pi = p),
          this.Pc.offsetLeft = 0));
        var b = this.xX(a);
        Va() && (this.Si && 0 < this.Si.length && this.k.showExit && this.lA) && (this.Pc.offsetLeft += this.eg.width + 8,
          this.Ts ? this.Ts.innerHTML = this.lA : this.gW());
        this.ai.innerHTML = b;
        this.ai.style.width = (this.eg.width + 8) * a.length + 8 + "px";
        a = this.C.offsetWidth;
        b = this.ai.offsetWidth;
        this.Pc.$s && (b += this.Pc.$s());
        b < a - 2 * this.Pc.Ji - this.Pc.offsetLeft ? this.C.style.width = b + this.Pc.offsetLeft + "px" : (this.C.style.width = isNaN(Number(this.k.maxWidth)) === o ? this.k.maxWidth : this.k.maxWidth + "px",
        b < this.C.offsetWidth - 2 * this.Pc.Ji - this.Pc.offsetLeft && (this.C.style.width = b + this.Pc.offsetLeft + "px"));
        this.Pc.refresh();
        this.DB = this.ai.children;
        this.ai.appendChild(this.jk);
        this.jk.style.left = "-100000px";
        a = this.SH(this.P.Yb(), this.y1);
        -1 !== a && this.Wp(a)
      },
      DX: function(a) {
        for (var b = "", c, d = 0, e = a.length; d < e; d++)
          c = '<div style="color:white;opacity:0.5;margin:0 35px;float:left;text-align: center"><span  dataIndex="' + a[d].index + '">' + a[d].data + "</span></div>",
            b += c;
        return b
      },
      AL: function(a) {
        for (var b = "", c, d = 0, e = a.length; d < e; d++)
          c = '<li class="pano_catlogLi"><span style="display:block;width:100%;" dataIndex="' + a[d].index + '">' + a[d].data + "</span></li>",
            b += c;
        return b
      },
      xX: function(a) {
        for (var b, c, d, e, f = [], g = this.eg.height, i = this.eg.width, k = 0; k < a.length; k++)
          b = a[k],
            recoType = b.recoType,
            d = b.panoId,
            e = b.name,
            c = b.heading,
            b = b.pitch,
            c = Qe.ML(d, c, b, 198, 108),
            b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + k + '"><img style="width:' + (i - 2) + "px;height:" + (g - 2) + 'px;" data-index="' + k + '" name="' + e + '" src="' + c + '" alt="' + e + '"/><span class="pano_photo_decs" data-index="' + k + '" style="width:' + i + "px;font-size:" + Math.floor(g / 6) + "px; line-height:" + Math.floor(g / 6) + 'px;"><em class="pano_poi_' + recoType + '"></em>' + e + "</span></a>",
            3 === recoType ? Va() ? (this.lA = b,
              this.SW = d,
              a.splice(k, 1),
              k--) : (b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + k + '"><img style="width:' + (i - 2) + "px;height:" + (g - 2) + 'px;" data-index="' + k + '" name="' + e + '" src="' + c + '" alt="' + e + '"/><div style="background:rgba(37,37,37,0.5);position:absolute;top:0px;left:0px;width:100%;height:100%;text-align: center;line-height:' + this.k.imageHeight + 'px;" data-index="' + k + '"><img src="' + F.qa + 'panorama/photoexit.png" style="border:none;vertical-align:middle;" data-index="' + k + '" alt=""/></div></a>',
              f.push(b)) : f.push(b);
        return f.join("")
      },
      PX: function(a) {
        var b = this
          , c = this.P.Yb();
        c && this.Ql.Mx(c, function(d) {
          b.P.Yb() === c && a(d)
        })
      },
      qc: function(a) {
        if (!Xa(a) || isNaN(a) || a < Ec || 3 < a)
          a = this.defaultAnchor;
        var b = this.C
          , c = this.k.offset.width
          , d = this.k.offset.height;
        b.style.left = b.style.top = b.style.right = b.style.bottom = "auto";
        switch (a) {
          case Ec:
            b.style.top = d + "px";
            b.style.left = c + "px";
            break;
          case Fc:
            b.style.top = d + "px";
            b.style.right = c + "px";
            break;
          case Gc:
            b.style.bottom = d + "px";
            b.style.left = c + "px";
            break;
          case 3:
            b.style.bottom = d + "px",
              b.style.right = c + "px"
        }
      },
      rQ: function() {
        this.pQ()
      },
      pQ: function() {
        var a = this;
        x.M(this.C, "touchstart", function(a) {
          a.stopPropagation()
        });
        x.M(this.kk, "click", function(b) {
          if ((b = (b.srcElement || b.target).getAttribute("data-index")) && b != a.Yc)
            a.Wp(b),
              a.P.rc(a.fk[b].panoId)
        });
        x.M(this.ai, "mouseover", function(b) {
          b = (b.srcElement || b.target).getAttribute("data-index");
          b !== p && a.AK(b, o)
        });
        this.P.addEventListener("size_changed", function() {
          isNaN(Number(a.k.maxWidth)) && a.Rk({
            maxWidth: a.k.maxWidth
          })
        })
      },
      Wp: function(a) {
        this.jk.style.left = this.DB[a].offsetLeft + 8 + "px";
        this.jk.setAttribute("data-index", this.DB[a].getAttribute("data-index"));
        this.Yc = a;
        this.AK(a)
      },
      AK: function(a, b) {
        var c = this.eg.width + 8
          , d = 0;
        this.Pc.$s && (d = this.Pc.$s() / 2);
        var e = this.kk.offsetWidth - 2 * d
          , f = this.ai.offsetLeft || this.Pc.x
          , f = f - d
          , g = -a * c;
        g > f && this.Pc.scrollTo(g + d);
        c = g - c;
        f -= e;
        c < f && (!b || b && 8 < g - f) && this.Pc.scrollTo(c + e + d)
      },
      xY: function() {
        this.Pc = G() ? new wf(this.kk,{
          Ko: q,
          my: o,
          ri: q,
          Gi: q,
          Bn: q,
          RE: o,
          Qw: o,
          Px: o
        }) : new Bf(this.kk)
      },
      U: function() {
        this.C.style.visibility = "hidden"
      },
      show: function() {
        this.C.style.visibility = "visible"
      }
    });
    function Bf(a) {
      this.C = a;
      this.Wg = a.children[0];
      this.Xr = p;
      this.Ji = 20;
      this.offsetLeft = 0;
      this.ra()
    }
    Bf.prototype = {
      ra: function() {
        this.Wg.style.position = "relative";
        this.refresh();
        this.ss();
        this.gm()
      },
      refresh: function() {
        this.mo = this.C.offsetWidth - this.$s();
        this.cB = -(this.Wg.offsetWidth - this.mo - this.Ji);
        this.Fv = this.Ji + this.offsetLeft;
        this.Wg.style.left = this.Fv + "px";
        this.Wg.children[0] && (this.Xr = this.Wg.children[0].offsetWidth);
        this.fg && (this.fg.children[0].style.marginTop = this.Pr.children[0].style.marginTop = this.fg.offsetHeight / 2 - this.fg.children[0].offsetHeight / 2 + "px")
      },
      $s: function() {
        return 2 * this.Ji
      },
      ss: function() {
        this.Uv = K("div");
        this.Uv.innerHTML = '<a class="pano_photo_arrow_l" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0a\u4e00\u9875"><span class="pano_arrow_l"></span></a><a class="pano_photo_arrow_r" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0b\u4e00\u9875"><span class="pano_arrow_r"></span></a>';
        this.fg = this.Uv.children[0];
        this.Pr = this.Uv.children[1];
        this.C.appendChild(this.Uv);
        this.fg.children[0].style.marginTop = this.Pr.children[0].style.marginTop = this.fg.offsetHeight / 2 - this.fg.children[0].offsetHeight / 2 + "px"
      },
      gm: function() {
        var a = this;
        x.M(this.fg, "click", function() {
          a.scrollTo(a.Wg.offsetLeft + a.mo)
        });
        x.M(this.Pr, "click", function() {
          a.scrollTo(a.Wg.offsetLeft - a.mo)
        })
      },
      TU: function() {
        x.K.Tb(this.fg, "pano_arrow_disable");
        x.K.Tb(this.Pr, "pano_arrow_disable");
        var a = this.Wg.offsetLeft;
        a >= this.Fv && x.K.Ta(this.fg, "pano_arrow_disable");
        a - this.mo <= this.cB && x.K.Ta(this.Pr, "pano_arrow_disable")
      },
      scrollTo: function(a) {
        a = a < this.Wg.offsetLeft ? Math.ceil((a - this.Ji - this.mo) / this.Xr) * this.Xr + this.mo + this.Ji - 8 : Math.ceil((a - this.Ji) / this.Xr) * this.Xr + this.Ji;
        a < this.cB ? a = this.cB : a > this.Fv && (a = this.Fv);
        var b = this.Wg.offsetLeft
          , c = this;
        new tb({
          Hc: 60,
          hc: ub.Ps,
          duration: 300,
          va: function(d) {
            c.Wg.style.left = b + (a - b) * d + "px"
          },
          finish: function() {
            c.TU()
          }
        })
      }
    };
    z.Map = Ka;
    z.Hotspot = jb;
    z.MapType = Gd;
    z.Point = N;
    z.Pixel = S;
    z.Size = L;
    z.Bounds = gb;
    z.TileLayer = td;
    z.Projection = Sc;
    z.MercatorProjection = T;
    z.PerspectiveProjection = ib;
    z.Copyright = function(a, b, c) {
      this.id = a;
      this.$a = b;
      this.content = c
    }
    ;
    z.Overlay = Wc;
    z.Label = dd;
    z.GroundOverlay = ed;
    z.PointCollection = id;
    z.Marker = V;
    z.Icon = $c;
    z.IconSequence = bd;
    z.Symbol = ad;
    z.Polyline = pd;
    z.Polygon = ld;
    z.InfoWindow = cd;
    z.Circle = qd;
    z.Control = Dc;
    z.NavigationControl = kb;
    z.GeolocationControl = Hc;
    z.OverviewMapControl = mb;
    z.CopyrightControl = Ic;
    z.ScaleControl = lb;
    z.MapTypeControl = nb;
    z.CityListControl = Jc;
    z.PanoramaControl = Lc;
    z.TrafficLayer = Cd;
    z.CustomLayer = ob;
    z.ContextMenu = Oc;
    z.MenuItem = Rc;
    z.LocalSearch = cb;
    z.TransitRoute = fe;
    z.DrivingRoute = ie;
    z.WalkingRoute = je;
    z.Autocomplete = ue;
    z.RouteSearch = oe;
    z.Geocoder = pe;
    z.LocalCity = re;
    z.Geolocation = Geolocation;
    z.Convertor = Vc;
    z.BusLineSearch = te;
    z.Boundary = se;
    z.VectorCloudLayer = Ad;
    z.VectorTrafficLayer = Bd;
    z.Panorama = Oa;
    z.PanoramaLabel = Ae;
    z.PanoramaService = Nc;
    z.PanoramaCoverageLayer = Mc;
    z.PanoramaFlashInterface = Oe;
    function U(a, b) {
      for (var c in b)
        a[c] = b[c]
    }
    U(window, {
      BMap: z,
      _jsload2: function(a, b) {
        ja.Zy.HY && ja.Zy.set(a, b);
        I.KV(a, b)
      },
      BMAP_API_VERSION: "2.0"
    });
    var Cf = Ka.prototype;
    U(Cf, {
      getBounds: Cf.Id,
      getCenter: Cf.pc,
      getMapType: Cf.oa,
      getSize: Cf.tb,
      setSize: Cf.Ce,
      getViewport: Cf.lt,
      getZoom: Cf.ga,
      centerAndZoom: Cf.Ed,
      panTo: Cf.zi,
      panBy: Cf.yg,
      setCenter: Cf.Wf,
      setCurrentCity: Cf.EF,
      setMapType: Cf.Eg,
      setViewport: Cf.Eh,
      setZoom: Cf.Oc,
      highResolutionEnabled: Cf.Vx,
      zoomTo: Cf.Hg,
      zoomIn: Cf.kG,
      zoomOut: Cf.lG,
      addHotspot: Cf.Cw,
      removeHotspot: Cf.EZ,
      clearHotspots: Cf.km,
      checkResize: Cf.NV,
      addControl: Cf.hs,
      removeControl: Cf.QN,
      getContainer: Cf.Ka,
      addContextMenu: Cf.Do,
      removeContextMenu: Cf.Mp,
      addOverlay: Cf.Ja,
      removeOverlay: Cf.Ub,
      clearOverlays: Cf.xK,
      openInfoWindow: Cf.Mb,
      closeInfoWindow: Cf.Xc,
      pointToOverlayPixel: Cf.We,
      overlayPixelToPoint: Cf.DN,
      getInfoWindow: Cf.lh,
      getOverlays: Cf.Jx,
      getPanes: function() {
        return {
          floatPane: this.Yd.FD,
          markerMouseTarget: this.Yd.UE,
          floatShadow: this.Yd.sL,
          labelPane: this.Yd.ME,
          markerPane: this.Yd.YM,
          markerShadow: this.Yd.ZM,
          mapPane: this.Yd.Ht,
          vertexPane: this.Yd.fP
        }
      },
      addTileLayer: Cf.$g,
      removeTileLayer: Cf.Bh,
      pixelToPoint: Cf.zg,
      pointToPixel: Cf.Kp,
      setFeatureStyle: Cf.Vp,
      selectBaseElement: Cf.u4,
      setMapStyle: Cf.bu,
      enable3DBuilding: Cf.Vo,
      disable3DBuilding: Cf.wW,
      getPanorama: Cf.Cm,
      setBrowserContextmenu: Cf.d_
    });
    var Df = Gd.prototype;
    U(Df, {
      getTileLayer: Df.$X,
      getMinZoom: Df.fp,
      getMaxZoom: Df.Bm,
      getProjection: Df.kp,
      getTextColor: Df.Hm,
      getTips: Df.kt
    });
    U(window, {
      BMAP_NORMAL_MAP: Ma,
      BMAP_PERSPECTIVE_MAP: Pa,
      BMAP_SATELLITE_MAP: $a,
      BMAP_HYBRID_MAP: Sa
    });
    var Gf = T.prototype;
    U(Gf, {
      lngLatToPoint: Gf.ph,
      pointToLngLat: Gf.Ej
    });
    var Hf = ib.prototype;
    U(Hf, {
      lngLatToPoint: Hf.ph,
      pointToLngLat: Hf.Ej
    });
    var If = gb.prototype;
    U(If, {
      equals: If.ab,
      containsPoint: If.qs,
      containsBounds: If.YV,
      intersects: If.yt,
      extend: If.extend,
      getCenter: If.pc,
      isEmpty: If.Cj,
      getSouthWest: If.xe,
      getNorthEast: If.pf,
      toSpan: If.ZF
    });
    var Jf = Wc.prototype;
    U(Jf, {
      isVisible: Jf.oh,
      show: Jf.show,
      hide: Jf.U
    });
    Wc.getZIndex = Wc.Jm;
    var Kf = hb.prototype;
    U(Kf, {
      openInfoWindow: Kf.Mb,
      closeInfoWindow: Kf.Xc,
      enableMassClear: Kf.rj,
      disableMassClear: Kf.yW,
      show: Kf.show,
      hide: Kf.U,
      getMap: Kf.Ex,
      addContextMenu: Kf.Do,
      removeContextMenu: Kf.Mp
    });
    var Lf = V.prototype;
    U(Lf, {
      setIcon: Lf.Vb,
      getIcon: Lf.ep,
      setPosition: Lf.ta,
      getPosition: Lf.ha,
      setOffset: Lf.Ye,
      getOffset: Lf.Qf,
      getLabel: Lf.ZD,
      setLabel: Lf.mn,
      setTitle: Lf.Dc,
      setTop: Lf.Di,
      enableDragging: Lf.Fb,
      disableDragging: Lf.WC,
      setZIndex: Lf.gu,
      getMap: Lf.Ex,
      setAnimation: Lf.ln,
      setShadow: Lf.Qy,
      hide: Lf.U,
      setRotation: Lf.Yp,
      getRotation: Lf.QL
    });
    U(window, {
      BMAP_ANIMATION_DROP: 1,
      BMAP_ANIMATION_BOUNCE: 2
    });
    var Mf = dd.prototype;
    U(Mf, {
      setStyle: Mf.Nd,
      setStyles: Mf.Ci,
      setContent: Mf.bd,
      setPosition: Mf.ta,
      getPosition: Mf.ha,
      setOffset: Mf.Ye,
      getOffset: Mf.Qf,
      setTitle: Mf.Dc,
      setZIndex: Mf.gu,
      getMap: Mf.Ex,
      getContent: Mf.zk
    });
    var Nf = $c.prototype;
    U(Nf, {
      setImageUrl: Nf.fO,
      setSize: Nf.Ce,
      setAnchor: Nf.qc,
      setImageOffset: Nf.au,
      setImageSize: Nf.i_,
      setInfoWindowAnchor: Nf.l_,
      setPrintImageUrl: Nf.v_
    });
    var Of = cd.prototype;
    U(Of, {
      redraw: Of.ke,
      setTitle: Of.Dc,
      setContent: Of.bd,
      getContent: Of.zk,
      getPosition: Of.ha,
      enableMaximize: Of.fh,
      disableMaximize: Of.lx,
      isOpen: Of.Va,
      setMaxContent: Of.cu,
      maximize: Of.ky,
      enableAutoPan: Of.Qs
    });
    var Pf = Yc.prototype;
    U(Pf, {
      getPath: Pf.ve,
      setPath: Pf.le,
      setPositionAt: Pf.qn,
      getStrokeColor: Pf.VX,
      setStrokeWeight: Pf.aq,
      getStrokeWeight: Pf.TL,
      setStrokeOpacity: Pf.Zp,
      getStrokeOpacity: Pf.WX,
      setFillOpacity: Pf.$t,
      getFillOpacity: Pf.sX,
      setStrokeStyle: Pf.$p,
      getStrokeStyle: Pf.SL,
      getFillColor: Pf.rX,
      getBounds: Pf.Id,
      enableEditing: Pf.mf,
      disableEditing: Pf.xW,
      getEditing: Pf.oX
    });
    var Qf = qd.prototype;
    U(Qf, {
      setCenter: Qf.Wf,
      getCenter: Qf.pc,
      getRadius: Qf.OL,
      setRadius: Qf.wf
    });
    var Rf = ld.prototype;
    U(Rf, {
      getPath: Rf.ve,
      setPath: Rf.le,
      setPositionAt: Rf.qn
    });
    var Sf = jb.prototype;
    U(Sf, {
      getPosition: Sf.ha,
      setPosition: Sf.ta,
      getText: Sf.iE,
      setText: Sf.fu
    });
    N.prototype.equals = N.prototype.ab;
    S.prototype.equals = S.prototype.ab;
    L.prototype.equals = L.prototype.ab;
    U(window, {
      BMAP_ANCHOR_TOP_LEFT: Ec,
      BMAP_ANCHOR_TOP_RIGHT: Fc,
      BMAP_ANCHOR_BOTTOM_LEFT: Gc,
      BMAP_ANCHOR_BOTTOM_RIGHT: 3
    });
    var Tf = Dc.prototype;
    U(Tf, {
      setAnchor: Tf.qc,
      getAnchor: Tf.MD,
      setOffset: Tf.Ye,
      getOffset: Tf.Qf,
      show: Tf.show,
      hide: Tf.U,
      isVisible: Tf.oh,
      toString: Tf.toString
    });
    var Uf = kb.prototype;
    U(Uf, {
      getType: Uf.op,
      setType: Uf.tn
    });
    U(window, {
      BMAP_NAVIGATION_CONTROL_LARGE: 0,
      BMAP_NAVIGATION_CONTROL_SMALL: 1,
      BMAP_NAVIGATION_CONTROL_PAN: 2,
      BMAP_NAVIGATION_CONTROL_ZOOM: 3
    });
    var Vf = mb.prototype;
    U(Vf, {
      changeView: Vf.se,
      setSize: Vf.Ce,
      getSize: Vf.tb
    });
    var Wf = lb.prototype;
    U(Wf, {
      getUnit: Wf.dY,
      setUnit: Wf.MF
    });
    U(window, {
      BMAP_UNIT_METRIC: "metric",
      BMAP_UNIT_IMPERIAL: "us"
    });
    var Xf = Ic.prototype;
    U(Xf, {
      addCopyright: Xf.Bw,
      removeCopyright: Xf.pF,
      getCopyright: Xf.ym,
      getCopyrightCollection: Xf.TD
    });
    U(window, {
      BMAP_MAPTYPE_CONTROL_HORIZONTAL: Kc,
      BMAP_MAPTYPE_CONTROL_DROPDOWN: 1,
      BMAP_MAPTYPE_CONTROL_MAP: 2
    });
    var Yf = td.prototype;
    U(Yf, {
      getMapType: Yf.oa,
      getCopyright: Yf.ym,
      isTransparentPng: Yf.Et
    });
    var Zf = Oc.prototype;
    U(Zf, {
      addItem: Zf.Dw,
      addSeparator: Zf.dC,
      removeSeparator: Zf.rF
    });
    var $f = Rc.prototype;
    U($f, {
      setText: $f.fu
    });
    var ag = X.prototype;
    U(ag, {
      getStatus: ag.Fm,
      setSearchCompleteCallback: ag.KF,
      getPageCapacity: ag.qf,
      setPageCapacity: ag.Xp,
      setLocation: ag.nn,
      disableFirstResultSelection: ag.XC,
      enableFirstResultSelection: ag.uD,
      gotoPage: ag.Km,
      searchNearby: ag.Tp,
      searchInBounds: ag.kn,
      search: ag.search
    });
    U(window, {
      BMAP_STATUS_SUCCESS: 0,
      BMAP_STATUS_CITY_LIST: 1,
      BMAP_STATUS_UNKNOWN_LOCATION: 2,
      BMAP_STATUS_UNKNOWN_ROUTE: 3,
      BMAP_STATUS_INVALID_KEY: 4,
      BMAP_STATUS_INVALID_REQUEST: 5,
      BMAP_STATUS_PERMISSION_DENIED: 6,
      BMAP_STATUS_SERVICE_UNAVAILABLE: 7,
      BMAP_STATUS_TIMEOUT: 8
    });
    U(window, {
      BMAP_POI_TYPE_NORMAL: 0,
      BMAP_POI_TYPE_BUSSTOP: 1,
      BMAP_POI_TYPE_BUSLINE: 2,
      BMAP_POI_TYPE_SUBSTOP: 3,
      BMAP_POI_TYPE_SUBLINE: 4
    });
    U(window, {
      BMAP_TRANSIT_POLICY_LEAST_TIME: 0,
      BMAP_TRANSIT_POLICY_LEAST_TRANSFER: 2,
      BMAP_TRANSIT_POLICY_LEAST_WALKING: 3,
      BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: 4,
      BMAP_LINE_TYPE_BUS: 0,
      BMAP_LINE_TYPE_SUBWAY: 1,
      BMAP_LINE_TYPE_FERRY: 2
    });
    var cg = ee.prototype;
    U(cg, {
      clearResults: cg.Qe
    });
    ge = fe.prototype;
    U(ge, {
      setPolicy: ge.eu,
      toString: ge.toString,
      setPageCapacity: ge.Xp
    });
    U(window, {
      BMAP_DRIVING_POLICY_LEAST_TIME: 0,
      BMAP_DRIVING_POLICY_LEAST_DISTANCE: 1,
      BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: 2
    });
    U(window, {
      BMAP_MODE_DRIVING: "driving",
      BMAP_MODE_TRANSIT: "transit",
      BMAP_MODE_WALKING: "walking",
      BMAP_MODE_NAVIGATION: "navigation"
    });
    var dg = oe.prototype;
    U(dg, {
      routeCall: dg.aO
    });
    U(window, {
      BMAP_HIGHLIGHT_STEP: 1,
      BMAP_HIGHLIGHT_ROUTE: 2
    });
    U(window, {
      BMAP_ROUTE_TYPE_DRIVING: Rd,
      BMAP_ROUTE_TYPE_WALKING: Qd
    });
    U(window, {
      BMAP_ROUTE_STATUS_NORMAL: Sd,
      BMAP_ROUTE_STATUS_EMPTY: 1,
      BMAP_ROUTE_STATUS_ADDRESS: 2
    });
    var eg = ie.prototype;
    U(eg, {
      setPolicy: eg.eu
    });
    var fg = ue.prototype;
    U(fg, {
      show: fg.show,
      hide: fg.U,
      setTypes: fg.LF,
      setLocation: fg.nn,
      search: fg.search,
      setInputValue: fg.Ny
    });
    U(ob.prototype, {});
    var gg = se.prototype;
    U(gg, {
      get: gg.get
    });
    U(Mc.prototype, {});
    U(db.prototype, {});
    U(window, {
      BMAP_POINT_DENSITY_HIGH: 200,
      BMAP_POINT_DENSITY_MEDIUM: Fd,
      BMAP_POINT_DENSITY_LOW: 50
    });
    U(window, {
      BMAP_POINT_SHAPE_STAR: 1,
      BMAP_POINT_SHAPE_WATERDROP: 2,
      BMAP_POINT_SHAPE_CIRCLE: fd,
      BMAP_POINT_SHAPE_SQUARE: 4,
      BMAP_POINT_SHAPE_RHOMBUS: 5
    });
    U(window, {
      BMAP_POINT_SIZE_TINY: 1,
      BMAP_POINT_SIZE_SMALLER: 2,
      BMAP_POINT_SIZE_SMALL: 3,
      BMAP_POINT_SIZE_NORMAL: gd,
      BMAP_POINT_SIZE_BIG: 5,
      BMAP_POINT_SIZE_BIGGER: 6,
      BMAP_POINT_SIZE_HUGE: 7
    });
    U(window, {
      BMap_Symbol_SHAPE_CAMERA: 11,
      BMap_Symbol_SHAPE_WARNING: 12,
      BMap_Symbol_SHAPE_SMILE: 13,
      BMap_Symbol_SHAPE_CLOCK: 14,
      BMap_Symbol_SHAPE_POINT: 9,
      BMap_Symbol_SHAPE_PLANE: 10,
      BMap_Symbol_SHAPE_CIRCLE: 1,
      BMap_Symbol_SHAPE_RECTANGLE: 2,
      BMap_Symbol_SHAPE_RHOMBUS: 3,
      BMap_Symbol_SHAPE_STAR: 4,
      BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: 5,
      BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: 6,
      BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: 7,
      BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: 8
    });
    U(window, {
      BMAP_CONTEXT_MENU_ICON_ZOOMIN: Pc,
      BMAP_CONTEXT_MENU_ICON_ZOOMOUT: Qc
    });
    U(window, {
      BMAP_SYS_DRAWER: Ja,
      BMAP_SVG_DRAWER: 1,
      BMAP_VML_DRAWER: 2,
      BMAP_CANVAS_DRAWER: 3,
      BMAP_SVG_DRAWER_FIRST: 4
    });
    z.lV();
  }
)()
