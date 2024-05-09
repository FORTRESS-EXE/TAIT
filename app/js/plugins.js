;
window.Modernizr = function(a, b, c) {
        function x(a) {
            j.cssText = a
        }

        function y(a, b) {
            return x(prefixes.join(a + ";") + (b || ""))
        }

        function z(a, b) {
            return typeof a === b
        }

        function A(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function B(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!A(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
            }
            return !1
        }

        function C(a, b, d) {
            for (var e in a) {
                var f = b[a[e]];
                if (f !== c) return d === !1 ? a[e] : z(f, "function") ? f.bind(d || b) : f
            }
            return !1
        }

        function D(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + n.join(d + " ") + d).split(" ");
            return z(b, "string") || z(b, "undefined") ? B(e, b) : (e = (a + " " + o.join(d + " ") + d).split(" "), C(e, b, c))
        }
        var d = "2.6.2",
            e = {},
            f = !0,
            g = b.documentElement,
            h = "modernizr",
            i = b.createElement(h),
            j = i.style,
            k, l = {}.toString,
            m = "Webkit Moz O ms",
            n = m.split(" "),
            o = m.toLowerCase().split(" "),
            p = {},
            q = {},
            r = {},
            s = [],
            t = s.slice,
            u, v = {}.hasOwnProperty,
            w;
        !z(v, "undefined") && !z(v.call, "undefined") ? w = function(a, b) {
            return v.call(a, b)
        } : w = function(a, b) {
            return b in a && z(a.constructor.prototype[b], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(b) {
            var c = this;
            if (typeof c != "function") throw new TypeError;
            var d = t.call(arguments, 1),
                e = function() {
                    if (this instanceof e) {
                        var a = function() {};
                        a.prototype = c.prototype;
                        var f = new a,
                            g = c.apply(f, d.concat(t.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return c.apply(b, d.concat(t.call(arguments)))
                };
            return e
        }), p.csstransitions = function() {
            return D("transition")
        };
        for (var E in p) w(p, E) && (u = E.toLowerCase(), e[u] = p[E](), s.push((e[u] ? "" : "no-") + u));
        return e.addTest = function(a, b) {
                if (typeof a == "object")
                    for (var d in a) w(a, d) && e.addTest(d, a[d]);
                else {
                    a = a.toLowerCase();
                    if (e[a] !== c) return e;
                    b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
                }
                return e
            }, x(""), i = k = null,
            function(a, b) {
                function k(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function l() {
                    var a = r.elements;
                    return typeof a == "string" ? a.split(" ") : a
                }

                function m(a) {
                    var b = i[a[g]];
                    return b || (b = {}, h++, a[g] = h, i[h] = b), b
                }

                function n(a, c, f) {
                    c || (c = b);
                    if (j) return c.createElement(a);
                    f || (f = m(c));
                    var g;
                    return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
                }

                function o(a, c) {
                    a || (a = b);
                    if (j) return a.createDocumentFragment();
                    c = c || m(a);
                    var d = c.frag.cloneNode(),
                        e = 0,
                        f = l(),
                        g = f.length;
                    for (; e < g; e++) d.createElement(f[e]);
                    return d
                }

                function p(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                        return r.shivMethods ? n(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(r, b.frag)
                }

                function q(a) {
                    a || (a = b);
                    var c = m(a);
                    return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
                }
                var c = a.html5 || {},
                    d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    f, g = "_html5shiv",
                    h = 0,
                    i = {},
                    j;
                (function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                        }()
                    } catch (c) {
                        f = !0, j = !0
                    }
                })();
                var r = {
                    elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: c.shivCSS !== !1,
                    supportsUnknownElements: j,
                    shivMethods: c.shivMethods !== !1,
                    type: "default",
                    shivDocument: q,
                    createElement: n,
                    createDocumentFragment: o
                };
                a.html5 = r, q(b)
            }(this, b), e._version = d, e._domPrefixes = o, e._cssomPrefixes = n, e.testProp = function(a) {
                return B([a])
            }, e.testAllProps = D, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + s.join(" ") : ""), e
    }(this, this.document),
    function(a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function() {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : q = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && m(function() {
                        t.removeChild(l)
                    }, 50);
                    for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
                }
            }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                k.call(this, r)
            }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
        }

        function j(a, b, c, d, f) {
            return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
        }

        function k() {
            var a = B;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w = Array.isArray || function(a) {
                return "[object Array]" == o.call(a)
            },
            x = [],
            y = {},
            z = {
                timeout: function(a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            },
            A, B;
        B = function(a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = {
                        url: c,
                        origUrl: c,
                        prefixes: a
                    },
                    e, f, g;
                for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function() {
                                    var b = 0,
                                        c;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                    } else !c && l()
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m, n;
                c(h ? a.yep : a.nope, !!i), i && c(i)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, B.addPrefix = function(a, b) {
            z[a] = b
        }, B.addFilter = function(a) {
            x.push(a)
        }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
            b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k = b.createElement("script"),
                l, o, e = e || B.errorTimeout;
            k.src = a;
            for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
                !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
            }, m(function() {
                l || (l = 1, c(1))
            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var e = b.createElement("link"),
                j, c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad: function(e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad: function(e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function(e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart: function(e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function(e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function(e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function(e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function(e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function(e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    },
    easeInOutExpo: function(e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    },
    easeInCirc: function(e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc: function(e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    },
    easeOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    },
    easeInOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k / 2) == 2) {
            return e + l
        }
        if (!j) {
            j = k * (0.3 * 1.5)
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    },
    easeInBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function(e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function(e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function(e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});

/*! lightgallery - v1.2.22 - 2016-07-20
 * http://sachinchoolur.github.io/lightGallery/
 * Copyright (c) 2016 Sachin N; Licensed Apache 2.0 */
! function(a, b, c, d) {
    "use strict";

    function e(b, d) {
        if (this.el = b, this.$el = a(b), this.s = a.extend({}, f, d), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
        return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in c.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = a(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(a(this.s.selector)) : this.$items = this.$el.children(), this.$slide = "", this.$outer = "", this.init(), this
    }
    var f = {
        mode: "lg-slide",
        cssEasing: "ease",
        easing: "linear",
        speed: 600,
        height: "100%",
        width: "100%",
        addClass: "",
        startClass: "lg-start-zoom",
        backdropDuration: 150,
        hideBarsDelay: 6e3,
        useLeft: !1,
        closable: !0,
        loop: !0,
        escKey: !0,
        keyPress: !0,
        controls: !0,
        slideEndAnimatoin: !0,
        hideControlOnEnd: !1,
        mousewheel: !0,
        getCaptionFromTitleOrAlt: !0,
        appendSubHtmlTo: ".lg-sub-html",
        subHtmlSelectorRelative: !1,
        preload: 1,
        showAfterLoad: !0,
        selector: "",
        selectWithin: "",
        nextHtml: "",
        prevHtml: "",
        index: !1,
        iframeMaxWidth: "100%",
        download: !0,
        counter: !0,
        appendCounterTo: ".lg-toolbar",
        swipeThreshold: 50,
        enableSwipe: !0,
        enableDrag: !0,
        dynamic: !1,
        dynamicEl: [],
        galleryId: 1
    };
    e.prototype.init = function() {
        var c = this;
        c.s.preload > c.$items.length && (c.s.preload = c.$items.length);
        var d = b.location.hash;
        d.indexOf("lg=" + this.s.galleryId) > 0 && (c.index = parseInt(d.split("&slide=")[1], 10), a("body").addClass("lg-from-hash"), a("body").hasClass("lg-on") || (setTimeout(function() {
            c.build(c.index)
        }), a("body").addClass("lg-on"))), c.s.dynamic ? (c.$el.trigger("onBeforeOpen.lg"), c.index = c.s.index || 0, a("body").hasClass("lg-on") || setTimeout(function() {
            c.build(c.index), a("body").addClass("lg-on")
        })) : c.$items.on("click.lgcustom", function(b) {
            try {
                b.preventDefault(), b.preventDefault()
            } catch (a) {
                b.returnValue = !1
            }
            c.$el.trigger("onBeforeOpen.lg"), c.index = c.s.index || c.$items.index(this), a("body").hasClass("lg-on") || (c.build(c.index), a("body").addClass("lg-on"))
        })
    }, e.prototype.build = function(b) {
        var c = this;
        c.structure(), a.each(a.fn.lightGallery.modules, function(b) {
            c.modules[b] = new a.fn.lightGallery.modules[b](c.el)
        }), c.slide(b, !1, !1), c.s.keyPress && c.keyPress(), c.$items.length > 1 && (c.arrow(), setTimeout(function() {
            c.enableDrag(), c.enableSwipe()
        }, 50), c.s.mousewheel && c.mousewheel()), c.counter(), c.closeGallery(), c.$el.trigger("onAfterOpen.lg"), c.$outer.on("mousemove.lg click.lg touchstart.lg", function() {
            c.$outer.removeClass("lg-hide-items"), clearTimeout(c.hideBartimeout), c.hideBartimeout = setTimeout(function() {
                c.$outer.addClass("lg-hide-items")
            }, c.s.hideBarsDelay)
        })
    }, e.prototype.structure = function() {
        var c, d = "",
            e = "",
            f = 0,
            g = "",
            h = this;
        for (a("body").append('<div class="lg-backdrop"></div>'), a(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"), f = 0; f < this.$items.length; f++) d += '<div class="lg-item"></div>';
        if (this.s.controls && this.$items.length > 1 && (e = '<div class="lg-actions"><div class="lg-prev lg-icon">' + this.s.prevHtml + '</div><div class="lg-next lg-icon">' + this.s.nextHtml + "</div></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (g = '<div class="lg-sub-html"></div>'), c = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + d + '</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>' + e + g + "</div></div>", a("body").append(c), this.$outer = a(".lg-outer"), this.$slide = this.$outer.find(".lg-item"), this.s.useLeft ? (this.$outer.addClass("lg-use-left"), this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"), h.setTop(), a(b).on("resize.lg orientationchange.lg", function() {
                setTimeout(function() {
                    h.setTop()
                }, 100)
            }), this.$slide.eq(this.index).addClass("lg-current"), this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"), this.s.speed = 0), this.$outer.addClass(this.s.mode), this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"), this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"), this.doCss()) {
            var i = this.$outer.find(".lg-inner");
            i.css("transition-timing-function", this.s.cssEasing), i.css("transition-duration", this.s.speed + "ms")
        }
        a(".lg-backdrop").addClass("in"), setTimeout(function() {
            h.$outer.addClass("lg-visible")
        }, this.s.backdropDuration), this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = a(b).scrollTop()
    }, e.prototype.setTop = function() {
        if ("100%" !== this.s.height) {
            var c = a(b).height(),
                d = (c - parseInt(this.s.height, 10)) / 2,
                e = this.$outer.find(".lg");
            c >= parseInt(this.s.height, 10) ? e.css("top", d + "px") : e.css("top", "0px")
        }
    }, e.prototype.doCss = function() {
        var a = function() {
            var a = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
                b = c.documentElement,
                d = 0;
            for (d = 0; d < a.length; d++)
                if (a[d] in b.style) return !0
        };
        return !!a()
    }, e.prototype.isVideo = function(a, b) {
        var c;
        if (c = this.s.dynamic ? this.s.dynamicEl[b].html : this.$items.eq(b).attr("data-html"), !a && c) return {
            html5: !0
        };
        var d = a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
            e = a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
            f = a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
            g = a.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
        return d ? {
            youtube: d
        } : e ? {
            vimeo: e
        } : f ? {
            dailymotion: f
        } : g ? {
            vk: g
        } : void 0
    }, e.prototype.counter = function() {
        this.s.counter && a(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>")
    }, e.prototype.addHtml = function(b) {
        var c, d, e = null;
        if (this.s.dynamic ? this.s.dynamicEl[b].subHtmlUrl ? c = this.s.dynamicEl[b].subHtmlUrl : e = this.s.dynamicEl[b].subHtml : (d = this.$items.eq(b), d.attr("data-sub-html-url") ? c = d.attr("data-sub-html-url") : (e = d.attr("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !e && (e = d.attr("title") || d.find("img").first().attr("alt")))), !c)
            if ("undefined" != typeof e && null !== e) {
                var f = e.substring(0, 1);
                "." !== f && "#" !== f || (e = this.s.subHtmlSelectorRelative && !this.s.dynamic ? d.find(e).html() : a(e).html())
            } else e = "";
        ".lg-sub-html" === this.s.appendSubHtmlTo ? c ? this.$outer.find(this.s.appendSubHtmlTo).load(c) : this.$outer.find(this.s.appendSubHtmlTo).html(e) : c ? this.$slide.eq(b).load(c) : this.$slide.eq(b).append(e), "undefined" != typeof e && null !== e && ("" === e ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")), this.$el.trigger("onAfterAppendSubHtml.lg", [b])
    }, e.prototype.preload = function(a) {
        var b = 1,
            c = 1;
        for (b = 1; b <= this.s.preload && !(b >= this.$items.length - a); b++) this.loadContent(a + b, !1, 0);
        for (c = 1; c <= this.s.preload && !(a - c < 0); c++) this.loadContent(a - c, !1, 0)
    }, e.prototype.loadContent = function(c, d, e) {
        var f, g, h, i, j, k, l = this,
            m = !1,
            n = function(c) {
                for (var d = [], e = [], f = 0; f < c.length; f++) {
                    var h = c[f].split(" ");
                    "" === h[0] && h.splice(0, 1), e.push(h[0]), d.push(h[1])
                }
                for (var i = a(b).width(), j = 0; j < d.length; j++)
                    if (parseInt(d[j], 10) > i) {
                        g = e[j];
                        break
                    }
            };
        if (l.s.dynamic) {
            if (l.s.dynamicEl[c].poster && (m = !0, h = l.s.dynamicEl[c].poster), k = l.s.dynamicEl[c].html, g = l.s.dynamicEl[c].src, l.s.dynamicEl[c].responsive) {
                var o = l.s.dynamicEl[c].responsive.split(",");
                n(o)
            }
            i = l.s.dynamicEl[c].srcset, j = l.s.dynamicEl[c].sizes
        } else {
            if (l.$items.eq(c).attr("data-poster") && (m = !0, h = l.$items.eq(c).attr("data-poster")), k = l.$items.eq(c).attr("data-html"), g = l.$items.eq(c).attr("href") || l.$items.eq(c).attr("data-src"), l.$items.eq(c).attr("data-responsive")) {
                var p = l.$items.eq(c).attr("data-responsive").split(",");
                n(p)
            }
            i = l.$items.eq(c).attr("data-srcset"), j = l.$items.eq(c).attr("data-sizes")
        }
        var q = !1;
        l.s.dynamic ? l.s.dynamicEl[c].iframe && (q = !0) : "true" === l.$items.eq(c).attr("data-iframe") && (q = !0);
        var r = l.isVideo(g, c);
        if (!l.$slide.eq(c).hasClass("lg-loaded")) {
            if (q) l.$slide.eq(c).prepend('<div class="lg-video-cont" style="max-width:' + l.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + g + '"  allowfullscreen="true"></iframe></div></div>');
            else if (m) {
                var s = "";
                s = r && r.youtube ? "lg-has-youtube" : r && r.vimeo ? "lg-has-vimeo" : "lg-has-html5", l.$slide.eq(c).prepend('<div class="lg-video-cont ' + s + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + h + '" /></div></div>')
            } else r ? (l.$slide.eq(c).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), l.$el.trigger("hasVideo.lg", [c, g, k])) : l.$slide.eq(c).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + g + '" /></div>');
            if (l.$el.trigger("onAferAppendSlide.lg", [c]), f = l.$slide.eq(c).find(".lg-object"), j && f.attr("sizes", j), i) {
                f.attr("srcset", i);
                try {
                    picturefill({
                        elements: [f[0]]
                    })
                } catch (a) {
                    console.error("Make sure you have included Picturefill version 2")
                }
            }
            ".lg-sub-html" !== this.s.appendSubHtmlTo && l.addHtml(c), l.$slide.eq(c).addClass("lg-loaded")
        }
        l.$slide.eq(c).find(".lg-object").on("load.lg error.lg", function() {
            var b = 0;
            e && !a("body").hasClass("lg-from-hash") && (b = e), setTimeout(function() {
                l.$slide.eq(c).addClass("lg-complete"), l.$el.trigger("onSlideItemLoad.lg", [c, e || 0])
            }, b)
        }), r && r.html5 && !m && l.$slide.eq(c).addClass("lg-complete"), d === !0 && (l.$slide.eq(c).hasClass("lg-complete") ? l.preload(c) : l.$slide.eq(c).find(".lg-object").on("load.lg error.lg", function() {
            l.preload(c)
        }))
    }, e.prototype.slide = function(b, c, d) {
        var e = this.$outer.find(".lg-current").index(),
            f = this;
        if (!f.lGalleryOn || e !== b) {
            var g = this.$slide.length,
                h = f.lGalleryOn ? this.s.speed : 0,
                i = !1,
                j = !1;
            if (!f.lgBusy) {
                if (this.s.download) {
                    var k;
                    k = f.s.dynamic ? f.s.dynamicEl[b].downloadUrl !== !1 && (f.s.dynamicEl[b].downloadUrl || f.s.dynamicEl[b].src) : "false" !== f.$items.eq(b).attr("data-download-url") && (f.$items.eq(b).attr("data-download-url") || f.$items.eq(b).attr("href") || f.$items.eq(b).attr("data-src")), k ? (a("#lg-download").attr("href", k), f.$outer.removeClass("lg-hide-download")) : f.$outer.addClass("lg-hide-download")
                }
                if (this.$el.trigger("onBeforeSlide.lg", [e, b, c, d]), f.lgBusy = !0, clearTimeout(f.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function() {
                        f.addHtml(b)
                    }, h), this.arrowDisable(b), c) {
                    var l = b - 1,
                        m = b + 1;
                    0 === b && e === g - 1 ? (m = 0, l = g - 1) : b === g - 1 && 0 === e && (m = 0, l = g - 1), this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"), f.$slide.eq(l).addClass("lg-prev-slide"), f.$slide.eq(m).addClass("lg-next-slide"), f.$slide.eq(b).addClass("lg-current")
                } else f.$outer.addClass("lg-no-trans"), this.$slide.removeClass("lg-prev-slide lg-next-slide"), b < e ? (j = !0, 0 !== b || e !== g - 1 || d || (j = !1, i = !0)) : b > e && (i = !0, b !== g - 1 || 0 !== e || d || (j = !0, i = !1)), j ? (this.$slide.eq(b).addClass("lg-prev-slide"), this.$slide.eq(e).addClass("lg-next-slide")) : i && (this.$slide.eq(b).addClass("lg-next-slide"), this.$slide.eq(e).addClass("lg-prev-slide")), setTimeout(function() {
                    f.$slide.removeClass("lg-current"), f.$slide.eq(b).addClass("lg-current"), f.$outer.removeClass("lg-no-trans")
                }, 50);
                f.lGalleryOn ? (setTimeout(function() {
                    f.loadContent(b, !0, 0)
                }, this.s.speed + 50), setTimeout(function() {
                    f.lgBusy = !1, f.$el.trigger("onAfterSlide.lg", [e, b, c, d])
                }, this.s.speed)) : (f.loadContent(b, !0, f.s.backdropDuration), f.lgBusy = !1, f.$el.trigger("onAfterSlide.lg", [e, b, c, d])), f.lGalleryOn = !0, this.s.counter && a("#lg-counter-current").text(b + 1)
            }
        }
    }, e.prototype.goToNextSlide = function(a) {
        var b = this;
        b.lgBusy || (b.index + 1 < b.$slide.length ? (b.index++, b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1)) : b.s.loop ? (b.index = 0, b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1)) : b.s.slideEndAnimatoin && (b.$outer.addClass("lg-right-end"), setTimeout(function() {
            b.$outer.removeClass("lg-right-end")
        }, 400)))
    }, e.prototype.goToPrevSlide = function(a) {
        var b = this;
        b.lgBusy || (b.index > 0 ? (b.index--, b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1)) : b.s.loop ? (b.index = b.$items.length - 1, b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1)) : b.s.slideEndAnimatoin && (b.$outer.addClass("lg-left-end"), setTimeout(function() {
            b.$outer.removeClass("lg-left-end")
        }, 400)))
    }, e.prototype.keyPress = function() {
        var c = this;
        this.$items.length > 1 && a(b).on("keyup.lg", function(a) {
            c.$items.length > 1 && (37 === a.keyCode && (a.preventDefault(), c.goToPrevSlide()), 39 === a.keyCode && (a.preventDefault(), c.goToNextSlide()))
        }), a(b).on("keydown.lg", function(a) {
            c.s.escKey === !0 && 27 === a.keyCode && (a.preventDefault(), c.$outer.hasClass("lg-thumb-open") ? c.$outer.removeClass("lg-thumb-open") : c.destroy())
        })
    }, e.prototype.arrow = function() {
        var a = this;
        this.$outer.find(".lg-prev").on("click.lg", function() {
            a.goToPrevSlide()
        }), this.$outer.find(".lg-next").on("click.lg", function() {
            a.goToNextSlide()
        })
    }, e.prototype.arrowDisable = function(a) {
        !this.s.loop && this.s.hideControlOnEnd && (a + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"), a > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"))
    }, e.prototype.setTranslate = function(a, b, c) {
        this.s.useLeft ? a.css("left", b) : a.css({
            transform: "translate3d(" + b + "px, " + c + "px, 0px)"
        })
    }, e.prototype.touchMove = function(b, c) {
        var d = c - b;
        Math.abs(d) > 15 && (this.$outer.addClass("lg-dragging"), this.setTranslate(this.$slide.eq(this.index), d, 0), this.setTranslate(a(".lg-prev-slide"), -this.$slide.eq(this.index).width() + d, 0), this.setTranslate(a(".lg-next-slide"), this.$slide.eq(this.index).width() + d, 0))
    }, e.prototype.touchEnd = function(a) {
        var b = this;
        "lg-slide" !== b.s.mode && b.$outer.addClass("lg-slide"), this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"), setTimeout(function() {
            b.$outer.removeClass("lg-dragging"), a < 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToNextSlide(!0) : a > 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToPrevSlide(!0) : Math.abs(a) < 5 && b.$el.trigger("onSlideClick.lg"), b.$slide.removeAttr("style")
        }), setTimeout(function() {
            b.$outer.hasClass("lg-dragging") || "lg-slide" === b.s.mode || b.$outer.removeClass("lg-slide")
        }, b.s.speed + 100)
    }, e.prototype.enableSwipe = function() {
        var a = this,
            b = 0,
            c = 0,
            d = !1;
        a.s.enableSwipe && a.isTouch && a.doCss() && (a.$slide.on("touchstart.lg", function(c) {
            a.$outer.hasClass("lg-zoomed") || a.lgBusy || (c.preventDefault(), a.manageSwipeClass(), b = c.originalEvent.targetTouches[0].pageX)
        }), a.$slide.on("touchmove.lg", function(e) {
            a.$outer.hasClass("lg-zoomed") || (e.preventDefault(), c = e.originalEvent.targetTouches[0].pageX, a.touchMove(b, c), d = !0)
        }), a.$slide.on("touchend.lg", function() {
            a.$outer.hasClass("lg-zoomed") || (d ? (d = !1, a.touchEnd(c - b)) : a.$el.trigger("onSlideClick.lg"))
        }))
    }, e.prototype.enableDrag = function() {
        var c = this,
            d = 0,
            e = 0,
            f = !1,
            g = !1;
        c.s.enableDrag && !c.isTouch && c.doCss() && (c.$slide.on("mousedown.lg", function(b) {
            c.$outer.hasClass("lg-zoomed") || (a(b.target).hasClass("lg-object") || a(b.target).hasClass("lg-video-play")) && (b.preventDefault(), c.lgBusy || (c.manageSwipeClass(), d = b.pageX, f = !0, c.$outer.scrollLeft += 1, c.$outer.scrollLeft -= 1, c.$outer.removeClass("lg-grab").addClass("lg-grabbing"), c.$el.trigger("onDragstart.lg")))
        }), a(b).on("mousemove.lg", function(a) {
            f && (g = !0, e = a.pageX, c.touchMove(d, e), c.$el.trigger("onDragmove.lg"))
        }), a(b).on("mouseup.lg", function(b) {
            g ? (g = !1, c.touchEnd(e - d), c.$el.trigger("onDragend.lg")) : (a(b.target).hasClass("lg-object") || a(b.target).hasClass("lg-video-play")) && c.$el.trigger("onSlideClick.lg"), f && (f = !1, c.$outer.removeClass("lg-grabbing").addClass("lg-grab"))
        }))
    }, e.prototype.manageSwipeClass = function() {
        var a = this.index + 1,
            b = this.index - 1,
            c = this.$slide.length;
        this.s.loop && (0 === this.index ? b = c - 1 : this.index === c - 1 && (a = 0)), this.$slide.removeClass("lg-next-slide lg-prev-slide"), b > -1 && this.$slide.eq(b).addClass("lg-prev-slide"), this.$slide.eq(a).addClass("lg-next-slide")
    }, e.prototype.mousewheel = function() {
        var a = this;
        a.$outer.on("mousewheel.lg", function(b) {
            b.deltaY && (b.deltaY > 0 ? a.goToPrevSlide() : a.goToNextSlide(), b.preventDefault())
        })
    }, e.prototype.closeGallery = function() {
        var b = this,
            c = !1;
        this.$outer.find(".lg-close").on("click.lg", function() {
            b.destroy()
        }), b.s.closable && (b.$outer.on("mousedown.lg", function(b) {
            c = !!(a(b.target).is(".lg-outer") || a(b.target).is(".lg-item ") || a(b.target).is(".lg-img-wrap"))
        }), b.$outer.on("mouseup.lg", function(d) {
            (a(d.target).is(".lg-outer") || a(d.target).is(".lg-item ") || a(d.target).is(".lg-img-wrap") && c) && (b.$outer.hasClass("lg-dragging") || b.destroy())
        }))
    }, e.prototype.destroy = function(c) {
        var d = this;
        c || d.$el.trigger("onBeforeClose.lg"), a(b).scrollTop(d.prevScrollTop), c && (d.s.dynamic || this.$items.off("click.lg click.lgcustom"), a.removeData(d.el, "lightGallery")), this.$el.off(".lg.tm"), a.each(a.fn.lightGallery.modules, function(a) {
            d.modules[a] && d.modules[a].destroy()
        }), this.lGalleryOn = !1, clearTimeout(d.hideBartimeout), this.hideBartimeout = !1, a(b).off(".lg"), a("body").removeClass("lg-on lg-from-hash"), d.$outer && d.$outer.removeClass("lg-visible"), a(".lg-backdrop").removeClass("in"), setTimeout(function() {
            d.$outer && d.$outer.remove(), a(".lg-backdrop").remove(), c || d.$el.trigger("onCloseAfter.lg")
        }, d.s.backdropDuration + 50)
    }, a.fn.lightGallery = function(b) {
        return this.each(function() {
            if (a.data(this, "lightGallery")) try {
                a(this).data("lightGallery").init()
            } catch (a) {
                console.error("lightGallery has not initiated properly")
            } else a.data(this, "lightGallery", new e(this, b))
        })
    }, a.fn.lightGallery.modules = {}
}(jQuery, window, document);
/*! lightgallery - v1.2.22 - 2016-07-20
 * http://sachinchoolur.github.io/lightGallery/
 * Copyright (c) 2016 Sachin N; Licensed Apache 2.0 */
! function(a, b, c, d) {
    "use strict";
    var e = {
            scale: 1,
            zoom: !0,
            actualSize: !0,
            enableZoomAfter: 300
        },
        f = function(c) {
            return this.core = a(c).data("lightGallery"), this.core.s = a.extend({}, e, this.core.s), this.core.s.zoom && this.core.doCss() && (this.init(), this.zoomabletimeout = !1, this.pageX = a(b).width() / 2, this.pageY = a(b).height() / 2 + a(b).scrollTop()), this
        };
    f.prototype.init = function() {
        var c = this,
            d = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
        c.core.s.actualSize && (d += '<span id="lg-actual-size" class="lg-icon"></span>'), this.core.$outer.find(".lg-toolbar").append(d), c.core.$el.on("onSlideItemLoad.lg.tm.zoom", function(b, d, e) {
            var f = c.core.s.enableZoomAfter + e;
            a("body").hasClass("lg-from-hash") && e ? f = 0 : a("body").removeClass("lg-from-hash"), c.zoomabletimeout = setTimeout(function() {
                c.core.$slide.eq(d).addClass("lg-zoomable")
            }, f + 30)
        });
        var e = 1,
            f = function(d) {
                var e, f, g = c.core.$outer.find(".lg-current .lg-image"),
                    h = (a(b).width() - g.width()) / 2,
                    i = (a(b).height() - g.height()) / 2 + a(b).scrollTop();
                e = c.pageX - h, f = c.pageY - i;
                var j = (d - 1) * e,
                    k = (d - 1) * f;
                g.css("transform", "scale3d(" + d + ", " + d + ", 1)").attr("data-scale", d), g.parent().css({
                    left: -j + "px",
                    top: -k + "px"
                }).attr("data-x", j).attr("data-y", k)
            },
            g = function() {
                e > 1 ? c.core.$outer.addClass("lg-zoomed") : c.resetZoom(), e < 1 && (e = 1), f(e)
            },
            h = function(d, f, h, i) {
                var j, k = f.width();
                j = c.core.s.dynamic ? c.core.s.dynamicEl[h].width || f[0].naturalWidth || k : c.core.$items.eq(h).attr("data-width") || f[0].naturalWidth || k;
                var l;
                c.core.$outer.hasClass("lg-zoomed") ? e = 1 : j > k && (l = j / k, e = l || 2), i ? (c.pageX = a(b).width() / 2, c.pageY = a(b).height() / 2 + a(b).scrollTop()) : (c.pageX = d.pageX || d.originalEvent.targetTouches[0].pageX, c.pageY = d.pageY || d.originalEvent.targetTouches[0].pageY), g(), setTimeout(function() {
                    c.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
                }, 10)
            },
            i = !1;
        c.core.$el.on("onAferAppendSlide.lg.tm.zoom", function(a, b) {
            var d = c.core.$slide.eq(b).find(".lg-image");
            d.on("dblclick", function(a) {
                h(a, d, b)
            }), d.on("touchstart", function(a) {
                i ? (clearTimeout(i), i = null, h(a, d, b)) : i = setTimeout(function() {
                    i = null
                }, 300), a.preventDefault()
            })
        }), a(b).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom", function() {
            c.pageX = a(b).width() / 2, c.pageY = a(b).height() / 2 + a(b).scrollTop(), f(e)
        }), a("#lg-zoom-out").on("click.lg", function() {
            c.core.$outer.find(".lg-current .lg-image").length && (e -= c.core.s.scale, g())
        }), a("#lg-zoom-in").on("click.lg", function() {
            c.core.$outer.find(".lg-current .lg-image").length && (e += c.core.s.scale, g())
        }), a("#lg-actual-size").on("click.lg", function(a) {
            h(a, c.core.$slide.eq(c.core.index).find(".lg-image"), c.core.index, !0)
        }), c.core.$el.on("onBeforeSlide.lg.tm", function() {
            e = 1, c.resetZoom()
        }), c.core.isTouch || c.zoomDrag(), c.core.isTouch && c.zoomSwipe()
    }, f.prototype.resetZoom = function() {
        this.core.$outer.removeClass("lg-zoomed"), this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"), this.core.$slide.find(".lg-image").removeAttr("style data-scale"), this.pageX = a(b).width() / 2, this.pageY = a(b).height() / 2 + a(b).scrollTop()
    }, f.prototype.zoomSwipe = function() {
        var a = this,
            b = {},
            c = {},
            d = !1,
            e = !1,
            f = !1;
        a.core.$slide.on("touchstart.lg", function(c) {
            if (a.core.$outer.hasClass("lg-zoomed")) {
                var d = a.core.$slide.eq(a.core.index).find(".lg-object");
                f = d.outerHeight() * d.attr("data-scale") > a.core.$outer.find(".lg").height(), e = d.outerWidth() * d.attr("data-scale") > a.core.$outer.find(".lg").width(), (e || f) && (c.preventDefault(), b = {
                    x: c.originalEvent.targetTouches[0].pageX,
                    y: c.originalEvent.targetTouches[0].pageY
                })
            }
        }), a.core.$slide.on("touchmove.lg", function(g) {
            if (a.core.$outer.hasClass("lg-zoomed")) {
                var h, i, j = a.core.$slide.eq(a.core.index).find(".lg-img-wrap");
                g.preventDefault(), d = !0, c = {
                    x: g.originalEvent.targetTouches[0].pageX,
                    y: g.originalEvent.targetTouches[0].pageY
                }, a.core.$outer.addClass("lg-zoom-dragging"), i = f ? -Math.abs(j.attr("data-y")) + (c.y - b.y) : -Math.abs(j.attr("data-y")), h = e ? -Math.abs(j.attr("data-x")) + (c.x - b.x) : -Math.abs(j.attr("data-x")), (Math.abs(c.x - b.x) > 15 || Math.abs(c.y - b.y) > 15) && j.css({
                    left: h + "px",
                    top: i + "px"
                })
            }
        }), a.core.$slide.on("touchend.lg", function() {
            a.core.$outer.hasClass("lg-zoomed") && d && (d = !1, a.core.$outer.removeClass("lg-zoom-dragging"), a.touchendZoom(b, c, e, f))
        })
    }, f.prototype.zoomDrag = function() {
        var c = this,
            d = {},
            e = {},
            f = !1,
            g = !1,
            h = !1,
            i = !1;
        c.core.$slide.on("mousedown.lg.zoom", function(b) {
            var e = c.core.$slide.eq(c.core.index).find(".lg-object");
            i = e.outerHeight() * e.attr("data-scale") > c.core.$outer.find(".lg").height(), h = e.outerWidth() * e.attr("data-scale") > c.core.$outer.find(".lg").width(), c.core.$outer.hasClass("lg-zoomed") && a(b.target).hasClass("lg-object") && (h || i) && (b.preventDefault(), d = {
                x: b.pageX,
                y: b.pageY
            }, f = !0, c.core.$outer.scrollLeft += 1, c.core.$outer.scrollLeft -= 1, c.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))
        }), a(b).on("mousemove.lg.zoom", function(a) {
            if (f) {
                var b, j, k = c.core.$slide.eq(c.core.index).find(".lg-img-wrap");
                g = !0, e = {
                    x: a.pageX,
                    y: a.pageY
                }, c.core.$outer.addClass("lg-zoom-dragging"), j = i ? -Math.abs(k.attr("data-y")) + (e.y - d.y) : -Math.abs(k.attr("data-y")), b = h ? -Math.abs(k.attr("data-x")) + (e.x - d.x) : -Math.abs(k.attr("data-x")), k.css({
                    left: b + "px",
                    top: j + "px"
                })
            }
        }), a(b).on("mouseup.lg.zoom", function(a) {
            f && (f = !1, c.core.$outer.removeClass("lg-zoom-dragging"), !g || d.x === e.x && d.y === e.y || (e = {
                x: a.pageX,
                y: a.pageY
            }, c.touchendZoom(d, e, h, i)), g = !1), c.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
        })
    }, f.prototype.touchendZoom = function(a, b, c, d) {
        var e = this,
            f = e.core.$slide.eq(e.core.index).find(".lg-img-wrap"),
            g = e.core.$slide.eq(e.core.index).find(".lg-object"),
            h = -Math.abs(f.attr("data-x")) + (b.x - a.x),
            i = -Math.abs(f.attr("data-y")) + (b.y - a.y),
            j = (e.core.$outer.find(".lg").height() - g.outerHeight()) / 2,
            k = Math.abs(g.outerHeight() * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").height() + j),
            l = (e.core.$outer.find(".lg").width() - g.outerWidth()) / 2,
            m = Math.abs(g.outerWidth() * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").width() + l);
        (Math.abs(b.x - a.x) > 15 || Math.abs(b.y - a.y) > 15) && (d && (i <= -k ? i = -k : i >= -j && (i = -j)), c && (h <= -m ? h = -m : h >= -l && (h = -l)), d ? f.attr("data-y", Math.abs(i)) : i = -Math.abs(f.attr("data-y")), c ? f.attr("data-x", Math.abs(h)) : h = -Math.abs(f.attr("data-x")), f.css({
            left: h + "px",
            top: i + "px"
        }))
    }, f.prototype.destroy = function() {
        var c = this;
        c.core.$el.off(".lg.zoom"), a(b).off(".lg.zoom"), c.core.$slide.off(".lg.zoom"), c.core.$el.off(".lg.tm.zoom"), c.resetZoom(), clearTimeout(c.zoomabletimeout), c.zoomabletimeout = !1
    }, a.fn.lightGallery.modules.zoom = f
}(jQuery, window, document);

/*!  lightGallery */
! function(e, o, i, l) {
    "use strict";
    var a = {
            videoMaxWidth: "855px",
            youtubePlayerParams: !1,
            vimeoPlayerParams: !1,
            dailymotionPlayerParams: !1,
            videojs: !1
        },
        s = function(o) {
            return this.core = e(o).data("lightGallery"), this.$el = e(o), this.core.s = e.extend({}, a, this.core.s), this.videoLoaded = !1, this.init(), this
        };
    s.prototype.init = function() {
        var o = this;
        o.core.$el.on("hasVideo.lg.tm", function(e, i, l, a) {
            if (o.core.$slide.eq(i).find(".lg-video").append(o.loadVideo(l, "lg-object", !0, i, a)), a)
                if (o.core.s.videojs) try {
                    videojs(o.core.$slide.eq(i).find(".lg-html5").get(0), {}, function() {
                        o.videoLoaded || this.play()
                    })
                } catch (s) {
                    console.error("Make sure you have included videojs")
                } else o.core.$slide.eq(i).find(".lg-html5").get(0).play()
        }), o.core.$el.on("onAferAppendSlide.lg.tm", function(e, i) {
            o.core.$slide.eq(i).find(".lg-video-cont").css("max-width", o.core.s.videoMaxWidth), o.videoLoaded = !0
        });
        var i = function(e) {
            if (e.find(".lg-object").hasClass("lg-has-poster") && e.find(".lg-object").is(":visible"))
                if (e.hasClass("lg-has-video")) {
                    var i = e.find(".lg-youtube").get(0),
                        l = e.find(".lg-vimeo").get(0),
                        a = e.find(".lg-dailymotion").get(0),
                        s = e.find(".lg-html5").get(0);
                    if (i) i.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
                    else if (l) try {
                            $f(l).api("play")
                        } catch (r) {
                            console.error("Make sure you have included froogaloop2 js")
                        } else if (a) a.contentWindow.postMessage("play", "*");
                        else if (s)
                        if (o.core.s.videojs) try {
                            videojs(s).play()
                        } catch (r) {
                            console.error("Make sure you have included videojs")
                        } else s.play();
                    e.addClass("lg-video-palying")
                } else {
                    e.addClass("lg-video-palying lg-has-video");
                    var t, d, c = function(i, l) {
                        if (e.find(".lg-video").append(o.loadVideo(i, "", !1, o.core.index, l)), l)
                            if (o.core.s.videojs) try {
                                videojs(o.core.$slide.eq(o.core.index).find(".lg-html5").get(0), {}, function() {
                                    this.play()
                                })
                            } catch (a) {
                                console.error("Make sure you have included videojs")
                            } else o.core.$slide.eq(o.core.index).find(".lg-html5").get(0).play()
                    };
                    o.core.s.dynamic ? (t = o.core.s.dynamicEl[o.core.index].src, d = o.core.s.dynamicEl[o.core.index].html, c(t, d)) : (t = o.core.$items.eq(o.core.index).attr("href") || o.core.$items.eq(o.core.index).attr("data-src"), d = o.core.$items.eq(o.core.index).attr("data-html"), c(t, d));
                    var n = e.find(".lg-object");
                    e.find(".lg-video").append(n), e.find(".lg-video-object").hasClass("lg-html5") || (e.removeClass("lg-complete"), e.find(".lg-video-object").on("load.lg error.lg", function() {
                        e.addClass("lg-complete")
                    }))
                }
        };
        o.core.doCss() && o.core.$items.length > 1 && (o.core.s.enableSwipe && o.core.isTouch || o.core.s.enableDrag && !o.core.isTouch) ? o.core.$el.on("onSlideClick.lg.tm", function() {
            var e = o.core.$slide.eq(o.core.index);
            i(e)
        }) : o.core.$slide.on("click.lg", function() {
            i(e(this))
        }), o.core.$el.on("onBeforeSlide.lg.tm", function(e, i, l) {
            var a = o.core.$slide.eq(i),
                s = a.find(".lg-youtube").get(0),
                r = a.find(".lg-vimeo").get(0),
                t = a.find(".lg-dailymotion").get(0),
                d = a.find(".lg-html5").get(0);
            if (s) s.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
            else if (r) try {
                    $f(r).api("pause")
                } catch (c) {
                    console.error("Make sure you have included froogaloop2 js")
                } else if (t) t.contentWindow.postMessage("pause", "*");
                else if (d)
                if (o.core.s.videojs) try {
                    videojs(d).pause()
                } catch (c) {
                    console.error("Make sure you have included videojs")
                } else d.pause();
            var n;
            n = o.core.s.dynamic ? o.core.s.dynamicEl[l].src : o.core.$items.eq(l).attr("href") || o.core.$items.eq(l).attr("data-src");
            var m = o.core.isVideo(n, l) || {};
            (m.youtube || m.vimeo || m.dailymotion) && o.core.$outer.addClass("lg-hide-download")
        }), o.core.$el.on("onAfterSlide.lg.tm", function(e, i) {
            o.core.$slide.eq(i).removeClass("lg-video-palying")
        })
    }, s.prototype.loadVideo = function(o, i, l, a, s) {
        var r = "",
            t = 1,
            d = "",
            c = this.core.isVideo(o, a) || {};
        if (l && (t = this.videoLoaded ? 0 : 1), c.youtube) d = "?wmode=opaque&autoplay=" + t + "&enablejsapi=1", this.core.s.youtubePlayerParams && (d = d + "&" + e.param(this.core.s.youtubePlayerParams)), r = '<iframe class="lg-video-object lg-youtube ' + i + '" width="560" height="315" src="//www.youtube.com/embed/' + c.youtube[1] + d + '" frameborder="0" allowfullscreen></iframe>';
        else if (c.vimeo) d = "?autoplay=" + t + "&api=1", this.core.s.vimeoPlayerParams && (d = d + "&" + e.param(this.core.s.vimeoPlayerParams)), r = '<iframe class="lg-video-object lg-vimeo ' + i + '" width="560" height="315"  src="http://player.vimeo.com/video/' + c.vimeo[1] + d + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
        else if (c.dailymotion) d = "?wmode=opaque&autoplay=" + t + "&api=postMessage", this.core.s.dailymotionPlayerParams && (d = d + "&" + e.param(this.core.s.dailymotionPlayerParams)), r = '<iframe class="lg-video-object lg-dailymotion ' + i + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + c.dailymotion[1] + d + '" frameborder="0" allowfullscreen></iframe>';
        else if (c.html5) {
            var n = s.substring(0, 1);
            ("." === n || "#" === n) && (s = e(s).html()), r = s
        }
        return r
    }, s.prototype.destroy = function() {
        this.videoLoaded = !1
    }, e.fn.lightGallery.modules.video = s
}(jQuery, window, document);


/*!
 * Isotope PACKAGED v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */
! function(a) {
    function b() {}

    function c(a) {
        function c(b) {
            b.prototype.option || (b.prototype.option = function(b) {
                a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
            })
        }

        function e(b, c) {
            a.fn[b] = function(e) {
                if ("string" == typeof e) {
                    for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                        var j = this[h],
                            k = a.data(j, b);
                        if (k)
                            if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                var l = k[e].apply(k, g);
                                if (void 0 !== l) return l
                            } else f("no such method '" + e + "' for " + b + " instance");
                        else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var d = a.data(this, b);
                    d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
                })
            }
        }
        if (a) {
            var f = "undefined" == typeof console ? b : function(a) {
                console.error(a)
            };
            return a.bridget = function(a, b) {
                c(b), e(a, b)
            }, a.bridget
        }
    }
    var d = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
}(window),
function(a) {
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b, c
    }
    var c = document.documentElement,
        d = function() {};
    c.addEventListener ? d = function(a, b, c) {
        a.addEventListener(b, c, !1)
    } : c.attachEvent && (d = function(a, c, d) {
        a[c + d] = d.handleEvent ? function() {
            var c = b(a);
            d.handleEvent.call(d, c)
        } : function() {
            var c = b(a);
            d.call(a, c)
        }, a.attachEvent("on" + c, a[c + d])
    });
    var e = function() {};
    c.removeEventListener ? e = function(a, b, c) {
        a.removeEventListener(b, c, !1)
    } : c.detachEvent && (e = function(a, b, c) {
        a.detachEvent("on" + b, a[b + c]);
        try {
            delete a[b + c]
        } catch (d) {
            a[b + c] = void 0
        }
    });
    var f = {
        bind: d,
        unbind: e
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
}(window),
function() {
    "use strict";

    function a() {}

    function b(a, b) {
        for (var c = a.length; c--;)
            if (a[c].listener === b) return c;
        return -1
    }

    function c(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }
    var d = a.prototype,
        e = this,
        f = e.EventEmitter;
    d.getListeners = function(a) {
        var b, c, d = this._getEvents();
        if (a instanceof RegExp) {
            b = {};
            for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else b = d[a] || (d[a] = []);
        return b
    }, d.flattenListeners = function(a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
        return c
    }, d.getListenersAsObject = function(a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {}, b[a] = c), b || c
    }, d.addListener = function(a, c) {
        var d, e = this.getListenersAsObject(a),
            f = "object" == typeof c;
        for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
            listener: c,
            once: !1
        });
        return this
    }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
        return this.addListener(a, {
            listener: b,
            once: !0
        })
    }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
        return this.getListeners(a), this
    }, d.defineEvents = function(a) {
        for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
        return this
    }, d.removeListener = function(a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
        return this
    }, d.off = c("removeListener"), d.addListeners = function(a, b) {
        return this.manipulateListeners(!1, a, b)
    }, d.removeListeners = function(a, b) {
        return this.manipulateListeners(!0, a, b)
    }, d.manipulateListeners = function(a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener,
            g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
            for (d = c.length; d--;) f.call(this, b, c[d]);
        else
            for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }, d.removeEvent = function(a) {
        var b, c = typeof a,
            d = this._getEvents();
        if ("string" === c) delete d[a];
        else if (a instanceof RegExp)
            for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else delete this._events;
        return this
    }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g)
            if (g.hasOwnProperty(e))
                for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }, d.trigger = c("emitEvent"), d.emit = function(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }, d.setOnceReturnValue = function(a) {
        return this._onceReturnValue = a, this
    }, d._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, d._getEvents = function() {
        return this._events || (this._events = {})
    }, a.noConflict = function() {
        return e.EventEmitter = f, a
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
}.call(this),
    function(a) {
        function b(a) {
            if (a) {
                if ("string" == typeof d[a]) return a;
                a = a.charAt(0).toUpperCase() + a.slice(1);
                for (var b, e = 0, f = c.length; f > e; e++)
                    if (b = c[e] + a, "string" == typeof d[b]) return b
            }
        }
        var c = "Webkit Moz ms Ms O".split(" "),
            d = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return b
        }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
    }(window),
    function(a, b) {
        function c(a) {
            var b = parseFloat(a),
                c = -1 === a.indexOf("%") && !isNaN(b);
            return c && b
        }

        function d() {}

        function e() {
            for (var a = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, b = 0, c = h.length; c > b; b++) {
                var d = h[b];
                a[d] = 0
            }
            return a
        }

        function f(b) {
            function d() {
                if (!m) {
                    m = !0;
                    var d = a.getComputedStyle;
                    if (j = function() {
                            var a = d ? function(a) {
                                return d(a, null)
                            } : function(a) {
                                return a.currentStyle
                            };
                            return function(b) {
                                var c = a(b);
                                return c || g("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), c
                            }
                        }(), k = b("boxSizing")) {
                        var e = document.createElement("div");
                        e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[k] = "border-box";
                        var f = document.body || document.documentElement;
                        f.appendChild(e);
                        var h = j(e);
                        l = 200 === c(h.width), f.removeChild(e)
                    }
                }
            }

            function f(a) {
                if (d(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                    var b = j(a);
                    if ("none" === b.display) return e();
                    var f = {};
                    f.width = a.offsetWidth, f.height = a.offsetHeight;
                    for (var g = f.isBorderBox = !(!k || !b[k] || "border-box" !== b[k]), m = 0, n = h.length; n > m; m++) {
                        var o = h[m],
                            p = b[o];
                        p = i(a, p);
                        var q = parseFloat(p);
                        f[o] = isNaN(q) ? 0 : q
                    }
                    var r = f.paddingLeft + f.paddingRight,
                        s = f.paddingTop + f.paddingBottom,
                        t = f.marginLeft + f.marginRight,
                        u = f.marginTop + f.marginBottom,
                        v = f.borderLeftWidth + f.borderRightWidth,
                        w = f.borderTopWidth + f.borderBottomWidth,
                        x = g && l,
                        y = c(b.width);
                    y !== !1 && (f.width = y + (x ? 0 : r + v));
                    var z = c(b.height);
                    return z !== !1 && (f.height = z + (x ? 0 : s + w)), f.innerWidth = f.width - (r + v), f.innerHeight = f.height - (s + w), f.outerWidth = f.width + t, f.outerHeight = f.height + u, f
                }
            }

            function i(b, c) {
                if (a.getComputedStyle || -1 === c.indexOf("%")) return c;
                var d = b.style,
                    e = d.left,
                    f = b.runtimeStyle,
                    g = f && f.left;
                return g && (f.left = b.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, g && (f.left = g), c
            }
            var j, k, l, m = !1;
            return f
        }
        var g = "undefined" == typeof console ? d : function(a) {
                console.error(a)
            },
            h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], f) : "object" == typeof exports ? module.exports = f(require("desandro-get-style-property")) : a.getSize = f(a.getStyleProperty)
    }(window),
    function(a) {
        function b(a) {
            "function" == typeof a && (b.isReady ? a() : g.push(a))
        }

        function c(a) {
            var c = "readystatechange" === a.type && "complete" !== f.readyState;
            b.isReady || c || d()
        }

        function d() {
            b.isReady = !0;
            for (var a = 0, c = g.length; c > a; a++) {
                var d = g[a];
                d()
            }
        }

        function e(e) {
            return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b
        }
        var f = a.document,
            g = [];
        b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
    }(window),
    function(a) {
        "use strict";

        function b(a, b) {
            return a[g](b)
        }

        function c(a) {
            if (!a.parentNode) {
                var b = document.createDocumentFragment();
                b.appendChild(a)
            }
        }

        function d(a, b) {
            c(a);
            for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)
                if (d[e] === a) return !0;
            return !1
        }

        function e(a, d) {
            return c(a), b(a, d)
        }
        var f, g = function() {
            if (a.matches) return "matches";
            if (a.matchesSelector) return "matchesSelector";
            for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
                var e = b[c],
                    f = e + "MatchesSelector";
                if (a[f]) return f
            }
        }();
        if (g) {
            var h = document.createElement("div"),
                i = b(h, "div");
            f = i ? b : e
        } else f = d;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return f
        }) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f
    }(Element.prototype),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(c, d) {
            return b(a, c, d)
        }) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector)
    }(window, function(a, b, c) {
        var d = {};
        d.extend = function(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }, d.modulo = function(a, b) {
            return (a % b + b) % b
        };
        var e = Object.prototype.toString;
        d.isArray = function(a) {
            return "[object Array]" == e.call(a)
        }, d.makeArray = function(a) {
            var b = [];
            if (d.isArray(a)) b = a;
            else if (a && "number" == typeof a.length)
                for (var c = 0, e = a.length; e > c; c++) b.push(a[c]);
            else b.push(a);
            return b
        }, d.indexOf = Array.prototype.indexOf ? function(a, b) {
            return a.indexOf(b)
        } : function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b) return c;
            return -1
        }, d.removeFrom = function(a, b) {
            var c = d.indexOf(a, b); - 1 != c && a.splice(c, 1)
        }, d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(a) {
            return a instanceof HTMLElement
        } : function(a) {
            return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName
        }, d.setText = function() {
            function a(a, c) {
                b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), a[b] = c
            }
            var b;
            return a
        }(), d.getParent = function(a, b) {
            for (; a != document.body;)
                if (a = a.parentNode, c(a, b)) return a
        }, d.getQueryElement = function(a) {
            return "string" == typeof a ? document.querySelector(a) : a
        }, d.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, d.filterFindElements = function(a, b) {
            a = d.makeArray(a);
            for (var e = [], f = 0, g = a.length; g > f; f++) {
                var h = a[f];
                if (d.isElement(h))
                    if (b) {
                        c(h, b) && e.push(h);
                        for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++) e.push(i[j])
                    } else e.push(h)
            }
            return e
        }, d.debounceMethod = function(a, b, c) {
            var d = a.prototype[b],
                e = b + "Timeout";
            a.prototype[b] = function() {
                var a = this[e];
                a && clearTimeout(a);
                var b = arguments,
                    f = this;
                this[e] = setTimeout(function() {
                    d.apply(f, b), delete f[e]
                }, c || 100)
            }
        }, d.toDashed = function(a) {
            return a.replace(/(.)([A-Z])/g, function(a, b, c) {
                return b + "-" + c
            }).toLowerCase()
        };
        var f = a.console;
        return d.htmlInit = function(c, e) {
            b(function() {
                for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
                    var k, l = g[i],
                        m = l.getAttribute(h);
                    try {
                        k = m && JSON.parse(m)
                    } catch (n) {
                        f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + n);
                        continue
                    }
                    var o = new c(l, k),
                        p = a.jQuery;
                    p && p.data(l, e, o)
                }
            })
        }, d
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(c, d, e, f) {
            return b(a, c, d, e, f)
        }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {}, a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils))
    }(window, function(a, b, c, d, e) {
        "use strict";

        function f(a) {
            for (var b in a) return !1;
            return b = null, !0
        }

        function g(a, b) {
            a && (this.element = a, this.layout = b, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function h(a) {
            return a.replace(/([A-Z])/g, function(a) {
                return "-" + a.toLowerCase()
            })
        }
        var i = a.getComputedStyle,
            j = i ? function(a) {
                return i(a, null)
            } : function(a) {
                return a.currentStyle
            },
            k = d("transition"),
            l = d("transform"),
            m = k && l,
            n = !!d("perspective"),
            o = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }[k],
            p = ["transform", "transition", "transitionDuration", "transitionProperty"],
            q = function() {
                for (var a = {}, b = 0, c = p.length; c > b; b++) {
                    var e = p[b],
                        f = d(e);
                    f && f !== e && (a[e] = f)
                }
                return a
            }();
        e.extend(g.prototype, b.prototype), g.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, g.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, g.prototype.getSize = function() {
            this.size = c(this.element)
        }, g.prototype.css = function(a) {
            var b = this.element.style;
            for (var c in a) {
                var d = q[c] || c;
                b[d] = a[c]
            }
        }, g.prototype.getPosition = function() {
            var a = j(this.element),
                b = this.layout.options,
                c = b.isOriginLeft,
                d = b.isOriginTop,
                e = a[c ? "left" : "right"],
                f = a[d ? "top" : "bottom"],
                g = this.layout.size,
                h = -1 != e.indexOf("%") ? parseFloat(e) / 100 * g.width : parseInt(e, 10),
                i = -1 != f.indexOf("%") ? parseFloat(f) / 100 * g.height : parseInt(f, 10);
            h = isNaN(h) ? 0 : h, i = isNaN(i) ? 0 : i, h -= c ? g.paddingLeft : g.paddingRight, i -= d ? g.paddingTop : g.paddingBottom, this.position.x = h, this.position.y = i
        }, g.prototype.layoutPosition = function() {
            var a = this.layout.size,
                b = this.layout.options,
                c = {},
                d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
                e = b.isOriginLeft ? "left" : "right",
                f = b.isOriginLeft ? "right" : "left",
                g = this.position.x + a[d];
            c[e] = this.getXValue(g), c[f] = "";
            var h = b.isOriginTop ? "paddingTop" : "paddingBottom",
                i = b.isOriginTop ? "top" : "bottom",
                j = b.isOriginTop ? "bottom" : "top",
                k = this.position.y + a[h];
            c[i] = this.getYValue(k), c[j] = "", this.css(c), this.emitEvent("layout", [this])
        }, g.prototype.getXValue = function(a) {
            var b = this.layout.options;
            return b.percentPosition && !b.isHorizontal ? a / this.layout.size.width * 100 + "%" : a + "px"
        }, g.prototype.getYValue = function(a) {
            var b = this.layout.options;
            return b.percentPosition && b.isHorizontal ? a / this.layout.size.height * 100 + "%" : a + "px"
        }, g.prototype._transitionTo = function(a, b) {
            this.getPosition();
            var c = this.position.x,
                d = this.position.y,
                e = parseInt(a, 10),
                f = parseInt(b, 10),
                g = e === this.position.x && f === this.position.y;
            if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
            var h = a - c,
                i = b - d,
                j = {};
            j.transform = this.getTranslate(h, i), this.transition({
                to: j,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, g.prototype.getTranslate = function(a, b) {
            var c = this.layout.options;
            return a = c.isOriginLeft ? a : -a, b = c.isOriginTop ? b : -b, n ? "translate3d(" + a + "px, " + b + "px, 0)" : "translate(" + a + "px, " + b + "px)"
        }, g.prototype.goTo = function(a, b) {
            this.setPosition(a, b), this.layoutPosition()
        }, g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo, g.prototype.setPosition = function(a, b) {
            this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
        }, g.prototype._nonTransition = function(a) {
            this.css(a.to), a.isCleaning && this._removeStyles(a.to);
            for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
        }, g.prototype._transition = function(a) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
            var b = this._transn;
            for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
            for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
            if (a.from) {
                this.css(a.from);
                var d = this.element.offsetHeight;
                d = null
            }
            this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
        };
        var r = "opacity," + h(q.transform || "transform");
        g.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: r,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(o, this, !1))
        }, g.prototype.transition = g.prototype[k ? "_transition" : "_nonTransition"], g.prototype.onwebkitTransitionEnd = function(a) {
            this.ontransitionend(a)
        }, g.prototype.onotransitionend = function(a) {
            this.ontransitionend(a)
        };
        var s = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        g.prototype.ontransitionend = function(a) {
            if (a.target === this.element) {
                var b = this._transn,
                    c = s[a.propertyName] || a.propertyName;
                if (delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[c]), c in b.onEnd) {
                    var d = b.onEnd[c];
                    d.call(this), delete b.onEnd[c]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, g.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
        }, g.prototype._removeStyles = function(a) {
            var b = {};
            for (var c in a) b[c] = "";
            this.css(b)
        };
        var t = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return g.prototype.removeTransitionStyles = function() {
            this.css(t)
        }, g.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, g.prototype.remove = function() {
            if (!k || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
            var a = this;
            this.once("transitionEnd", function() {
                a.removeElem()
            }), this.hide()
        }, g.prototype.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var a = this.layout.options,
                b = {},
                c = this.getHideRevealTransitionEndProperty("visibleStyle");
            b[c] = this.onRevealTransitionEnd, this.transition({
                from: a.hiddenStyle,
                to: a.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: b
            })
        }, g.prototype.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, g.prototype.getHideRevealTransitionEndProperty = function(a) {
            var b = this.layout.options[a];
            if (b.opacity) return "opacity";
            for (var c in b) return c
        }, g.prototype.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var a = this.layout.options,
                b = {},
                c = this.getHideRevealTransitionEndProperty("hiddenStyle");
            b[c] = this.onHideTransitionEnd, this.transition({
                from: a.visibleStyle,
                to: a.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: b
            })
        }, g.prototype.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, g.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, g
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(c, d, e, f, g) {
            return b(a, c, d, e, f, g)
        }) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
    }(window, function(a, b, c, d, e, f) {
        "use strict";

        function g(a, b) {
            var c = e.getQueryElement(a);
            if (!c) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
            this.element = c, i && (this.$element = i(this.element)), this.options = e.extend({}, this.constructor.defaults), this.option(b);
            var d = ++k;
            this.element.outlayerGUID = d, l[d] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var h = a.console,
            i = a.jQuery,
            j = function() {},
            k = 0,
            l = {};
        return g.namespace = "outlayer", g.Item = f, g.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, e.extend(g.prototype, c.prototype), g.prototype.option = function(a) {
            e.extend(this.options, a)
        }, g.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, g.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, g.prototype._itemize = function(a) {
            for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
                var g = b[e],
                    h = new c(g, this);
                d.push(h)
            }
            return d
        }, g.prototype._filterFindItemElements = function(a) {
            return e.filterFindElements(a, this.options.itemSelector)
        }, g.prototype.getItemElements = function() {
            for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
            return a
        }, g.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, a), this._isLayoutInited = !0
        }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function() {
            this.getSize()
        }, g.prototype.getSize = function() {
            this.size = d(this.element)
        }, g.prototype._getMeasurement = function(a, b) {
            var c, f = this.options[a];
            f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f), this[a] = c ? d(c)[b] : f) : this[a] = 0
        }, g.prototype.layoutItems = function(a, b) {
            a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
        }, g.prototype._getItemsForLayout = function(a) {
            for (var b = [], c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                e.isIgnored || b.push(e)
            }
            return b
        }, g.prototype._layoutItems = function(a, b) {
            if (this._emitCompleteOnItems("layout", a), a && a.length) {
                for (var c = [], d = 0, e = a.length; e > d; d++) {
                    var f = a[d],
                        g = this._getItemLayoutPosition(f);
                    g.item = f, g.isInstant = b || f.isLayoutInstant, c.push(g)
                }
                this._processLayoutQueue(c)
            }
        }, g.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, g.prototype._processLayoutQueue = function(a) {
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                this._positionItem(d.item, d.x, d.y, d.isInstant)
            }
        }, g.prototype._positionItem = function(a, b, c, d) {
            d ? a.goTo(b, c) : a.moveTo(b, c)
        }, g.prototype._postLayout = function() {
            this.resizeContainer()
        }, g.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var a = this._getContainerSize();
                a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
            }
        }, g.prototype._getContainerSize = j, g.prototype._setContainerMeasure = function(a, b) {
            if (void 0 !== a) {
                var c = this.size;
                c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
            }
        }, g.prototype._emitCompleteOnItems = function(a, b) {
            function c() {
                e.dispatchEvent(a + "Complete", null, [b])
            }

            function d() {
                g++, g === f && c()
            }
            var e = this,
                f = b.length;
            if (!b || !f) return void c();
            for (var g = 0, h = 0, i = b.length; i > h; h++) {
                var j = b[h];
                j.once(a, d)
            }
        }, g.prototype.dispatchEvent = function(a, b, c) {
            var d = b ? [b].concat(c) : c;
            if (this.emitEvent(a, d), i)
                if (this.$element = this.$element || i(this.element), b) {
                    var e = i.Event(b);
                    e.type = a, this.$element.trigger(e, c)
                } else this.$element.trigger(a, c)
        }, g.prototype.ignore = function(a) {
            var b = this.getItem(a);
            b && (b.isIgnored = !0)
        }, g.prototype.unignore = function(a) {
            var b = this.getItem(a);
            b && delete b.isIgnored
        }, g.prototype.stamp = function(a) {
            if (a = this._find(a)) {
                this.stamps = this.stamps.concat(a);
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    this.ignore(d)
                }
            }
        }, g.prototype.unstamp = function(a) {
            if (a = this._find(a))
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    e.removeFrom(this.stamps, d), this.unignore(d)
                }
        }, g.prototype._find = function(a) {
            return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = e.makeArray(a)) : void 0
        }, g.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var a = 0, b = this.stamps.length; b > a; a++) {
                    var c = this.stamps[a];
                    this._manageStamp(c)
                }
            }
        }, g.prototype._getBoundingRect = function() {
            var a = this.element.getBoundingClientRect(),
                b = this.size;
            this._boundingRect = {
                left: a.left + b.paddingLeft + b.borderLeftWidth,
                top: a.top + b.paddingTop + b.borderTopWidth,
                right: a.right - (b.paddingRight + b.borderRightWidth),
                bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
            }
        }, g.prototype._manageStamp = j, g.prototype._getElementOffset = function(a) {
            var b = a.getBoundingClientRect(),
                c = this._boundingRect,
                e = d(a),
                f = {
                    left: b.left - c.left - e.marginLeft,
                    top: b.top - c.top - e.marginTop,
                    right: c.right - b.right - e.marginRight,
                    bottom: c.bottom - b.bottom - e.marginBottom
                };
            return f
        }, g.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, g.prototype.bindResize = function() {
            this.isResizeBound || (b.bind(a, "resize", this), this.isResizeBound = !0)
        }, g.prototype.unbindResize = function() {
            this.isResizeBound && b.unbind(a, "resize", this), this.isResizeBound = !1
        }, g.prototype.onresize = function() {
            function a() {
                b.resize(), delete b.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var b = this;
            this.resizeTimeout = setTimeout(a, 100)
        }, g.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, g.prototype.needsResizeLayout = function() {
            var a = d(this.element),
                b = this.size && a;
            return b && a.innerWidth !== this.size.innerWidth
        }, g.prototype.addItems = function(a) {
            var b = this._itemize(a);
            return b.length && (this.items = this.items.concat(b)), b
        }, g.prototype.appended = function(a) {
            var b = this.addItems(a);
            b.length && (this.layoutItems(b, !0), this.reveal(b))
        }, g.prototype.prepended = function(a) {
            var b = this._itemize(a);
            if (b.length) {
                var c = this.items.slice(0);
                this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
            }
        }, g.prototype.reveal = function(a) {
            this._emitCompleteOnItems("reveal", a);
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.reveal()
            }
        }, g.prototype.hide = function(a) {
            this._emitCompleteOnItems("hide", a);
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.hide()
            }
        }, g.prototype.revealItemElements = function(a) {
            var b = this.getItems(a);
            this.reveal(b)
        }, g.prototype.hideItemElements = function(a) {
            var b = this.getItems(a);
            this.hide(b)
        }, g.prototype.getItem = function(a) {
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                if (d.element === a) return d
            }
        }, g.prototype.getItems = function(a) {
            a = e.makeArray(a);
            for (var b = [], c = 0, d = a.length; d > c; c++) {
                var f = a[c],
                    g = this.getItem(f);
                g && b.push(g)
            }
            return b
        }, g.prototype.remove = function(a) {
            var b = this.getItems(a);
            if (this._emitCompleteOnItems("remove", b), b && b.length)
                for (var c = 0, d = b.length; d > c; c++) {
                    var f = b[c];
                    f.remove(), e.removeFrom(this.items, f)
                }
        }, g.prototype.destroy = function() {
            var a = this.element.style;
            a.height = "", a.position = "", a.width = "";
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                d.destroy()
            }
            this.unbindResize();
            var e = this.element.outlayerGUID;
            delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace)
        }, g.data = function(a) {
            a = e.getQueryElement(a);
            var b = a && a.outlayerGUID;
            return b && l[b]
        }, g.create = function(a, b) {
            function c() {
                g.apply(this, arguments)
            }
            return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype), c.prototype.constructor = c, c.defaults = e.extend({}, g.defaults), e.extend(c.defaults, b), c.prototype.settings = {}, c.namespace = a, c.data = g.data, c.Item = function() {
                f.apply(this, arguments)
            }, c.Item.prototype = new f, e.htmlInit(c, a), i && i.bridget && i.bridget(a, c), c
        }, g.Item = f, g
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.Item = b(a.Outlayer))
    }(window, function(a) {
        "use strict";

        function b() {
            a.Item.apply(this, arguments)
        }
        b.prototype = new a.Item, b.prototype._create = function() {
            this.id = this.layout.itemGUID++, a.Item.prototype._create.call(this), this.sortData = {}
        }, b.prototype.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var a = this.layout.options.getSortData,
                    b = this.layout._sorters;
                for (var c in a) {
                    var d = b[c];
                    this.sortData[c] = d(this.element, this)
                }
            }
        };
        var c = b.prototype.destroy;
        return b.prototype.destroy = function() {
            c.apply(this, arguments), this.css({
                display: ""
            })
        }, b
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("get-size"), require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.LayoutMode = b(a.getSize, a.Outlayer))
    }(window, function(a, b) {
        "use strict";

        function c(a) {
            this.isotope = a, a && (this.options = a.options[this.namespace], this.element = a.element, this.items = a.filteredItems, this.size = a.size)
        }
        return function() {
            function a(a) {
                return function() {
                    return b.prototype[a].apply(this.isotope, arguments)
                }
            }
            for (var d = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], e = 0, f = d.length; f > e; e++) {
                var g = d[e];
                c.prototype[g] = a(g)
            }
        }(), c.prototype.needsVerticalResizeLayout = function() {
            var b = a(this.isotope.element),
                c = this.isotope.size && b;
            return c && b.innerHeight != this.isotope.size.innerHeight
        }, c.prototype._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, c.prototype.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, c.prototype.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, c.prototype.getSegmentSize = function(a, b) {
            var c = a + b,
                d = "outer" + b;
            if (this._getMeasurement(c, d), !this[c]) {
                var e = this.getFirstItemSize();
                this[c] = e && e[d] || this.isotope.size["inner" + b]
            }
        }, c.prototype.getFirstItemSize = function() {
            var b = this.isotope.filteredItems[0];
            return b && b.element && a(b.element)
        }, c.prototype.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, c.prototype.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, c.modes = {}, c.create = function(a, b) {
            function d() {
                c.apply(this, arguments)
            }
            return d.prototype = new c, b && (d.options = b), d.prototype.namespace = a, c.modes[a] = d, d
        }, c
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils)
    }(window, function(a, b, c) {
        var d = a.create("masonry");
        return d.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var a = this.cols;
            for (this.colYs = []; a--;) this.colYs.push(0);
            this.maxY = 0
        }, d.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var a = this.items[0],
                    c = a && a.element;
                this.columnWidth = c && b(c).outerWidth || this.containerWidth
            }
            var d = this.columnWidth += this.gutter,
                e = this.containerWidth + this.gutter,
                f = e / d,
                g = d - e % d,
                h = g && 1 > g ? "round" : "floor";
            f = Math[h](f), this.cols = Math.max(f, 1)
        }, d.prototype.getContainerWidth = function() {
            var a = this.options.isFitWidth ? this.element.parentNode : this.element,
                c = b(a);
            this.containerWidth = c && c.innerWidth
        }, d.prototype._getItemLayoutPosition = function(a) {
            a.getSize();
            var b = a.size.outerWidth % this.columnWidth,
                d = b && 1 > b ? "round" : "ceil",
                e = Math[d](a.size.outerWidth / this.columnWidth);
            e = Math.min(e, this.cols);
            for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = {
                    x: this.columnWidth * h,
                    y: g
                }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
            return i
        }, d.prototype._getColGroup = function(a) {
            if (2 > a) return this.colYs;
            for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
                var e = this.colYs.slice(d, d + a);
                b[d] = Math.max.apply(Math, e)
            }
            return b
        }, d.prototype._manageStamp = function(a) {
            var c = b(a),
                d = this._getElementOffset(a),
                e = this.options.isOriginLeft ? d.left : d.right,
                f = e + c.outerWidth,
                g = Math.floor(e / this.columnWidth);
            g = Math.max(0, g);
            var h = Math.floor(f / this.columnWidth);
            h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
            for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
        }, d.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var a = {
                height: this.maxY
            };
            return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
        }, d.prototype._getContainerFitWidth = function() {
            for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
            return (this.cols - a) * this.columnWidth - this.gutter
        }, d.prototype.needsResizeLayout = function() {
            var a = this.containerWidth;
            return this.getContainerWidth(), a !== this.containerWidth
        }, d
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode"), require("masonry-layout")) : b(a.Isotope.LayoutMode, a.Masonry)
    }(window, function(a, b) {
        "use strict";

        function c(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }
        var d = a.create("masonry"),
            e = d.prototype._getElementOffset,
            f = d.prototype.layout,
            g = d.prototype._getMeasurement;
        c(d.prototype, b.prototype), d.prototype._getElementOffset = e, d.prototype.layout = f, d.prototype._getMeasurement = g;
        var h = d.prototype.measureColumns;
        d.prototype.measureColumns = function() {
            this.items = this.isotope.filteredItems, h.call(this)
        };
        var i = d.prototype._manageStamp;
        return d.prototype._manageStamp = function() {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, i.apply(this, arguments)
        }, d
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
    }(window, function(a) {
        "use strict";
        var b = a.create("fitRows");
        return b.prototype._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, b.prototype._getItemLayoutPosition = function(a) {
            a.getSize();
            var b = a.size.outerWidth + this.gutter,
                c = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && b + this.x > c && (this.x = 0, this.y = this.maxY);
            var d = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight), this.x += b, d
        }, b.prototype._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, b
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
    }(window, function(a) {
        "use strict";
        var b = a.create("vertical", {
            horizontalAlignment: 0
        });
        return b.prototype._resetLayout = function() {
            this.y = 0
        }, b.prototype._getItemLayoutPosition = function(a) {
            a.getSize();
            var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment,
                c = this.y;
            return this.y += a.size.outerHeight, {
                x: b,
                y: c
            }
        }, b.prototype._getContainerSize = function() {
            return {
                height: this.y
            }
        }, b
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(c, d, e, f, g, h) {
            return b(a, c, d, e, f, g, h)
        }) : "object" == typeof exports ? module.exports = b(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode)
    }(window, function(a, b, c, d, e, f, g) {
        function h(a, b) {
            return function(c, d) {
                for (var e = 0, f = a.length; f > e; e++) {
                    var g = a[e],
                        h = c.sortData[g],
                        i = d.sortData[g];
                    if (h > i || i > h) {
                        var j = void 0 !== b[g] ? b[g] : b,
                            k = j ? 1 : -1;
                        return (h > i ? 1 : -1) * k
                    }
                }
                return 0
            }
        }
        var i = a.jQuery,
            j = String.prototype.trim ? function(a) {
                return a.trim()
            } : function(a) {
                return a.replace(/^\s+|\s+$/g, "")
            },
            k = document.documentElement,
            l = k.textContent ? function(a) {
                return a.textContent
            } : function(a) {
                return a.innerText
            },
            m = b.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        m.Item = f, m.LayoutMode = g, m.prototype._create = function() {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), b.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var a in g.modes) this._initLayoutMode(a)
        }, m.prototype.reloadItems = function() {
            this.itemGUID = 0, b.prototype.reloadItems.call(this)
        }, m.prototype._itemize = function() {
            for (var a = b.prototype._itemize.apply(this, arguments), c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                e.id = this.itemGUID++
            }
            return this._updateItemsSortData(a), a
        }, m.prototype._initLayoutMode = function(a) {
            var b = g.modes[a],
                c = this.options[a] || {};
            this.options[a] = b.options ? e.extend(b.options, c) : c, this.modes[a] = new b(this)
        }, m.prototype.layout = function() {
            return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
        }, m.prototype._layout = function() {
            var a = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), this._isLayoutInited = !0
        }, m.prototype.arrange = function(a) {
            function b() {
                d.reveal(c.needReveal), d.hide(c.needHide)
            }
            this.option(a), this._getIsInstant();
            var c = this._filter(this.items);
            this.filteredItems = c.matches;
            var d = this;
            this._bindArrangeComplete(), this._isInstant ? this._noTransition(b) : b(), this._sort(), this._layout()
        }, m.prototype._init = m.prototype.arrange, m.prototype._getIsInstant = function() {
            var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = a, a
        }, m.prototype._bindArrangeComplete = function() {
            function a() {
                b && c && d && e.dispatchEvent("arrangeComplete", null, [e.filteredItems])
            }
            var b, c, d, e = this;
            this.once("layoutComplete", function() {
                b = !0, a()
            }), this.once("hideComplete", function() {
                c = !0, a()
            }), this.once("revealComplete", function() {
                d = !0, a()
            })
        }, m.prototype._filter = function(a) {
            var b = this.options.filter;
            b = b || "*";
            for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0, h = a.length; h > g; g++) {
                var i = a[g];
                if (!i.isIgnored) {
                    var j = f(i);
                    j && c.push(i), j && i.isHidden ? d.push(i) : j || i.isHidden || e.push(i)
                }
            }
            return {
                matches: c,
                needReveal: d,
                needHide: e
            }
        }, m.prototype._getFilterTest = function(a) {
            return i && this.options.isJQueryFiltering ? function(b) {
                return i(b.element).is(a)
            } : "function" == typeof a ? function(b) {
                return a(b.element)
            } : function(b) {
                return d(b.element, a)
            }
        }, m.prototype.updateSortData = function(a) {
            var b;
            a ? (a = e.makeArray(a), b = this.getItems(a)) : b = this.items, this._getSorters(), this._updateItemsSortData(b)
        }, m.prototype._getSorters = function() {
            var a = this.options.getSortData;
            for (var b in a) {
                var c = a[b];
                this._sorters[b] = n(c)
            }
        }, m.prototype._updateItemsSortData = function(a) {
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.updateSortData()
            }
        };
        var n = function() {
            function a(a) {
                if ("string" != typeof a) return a;
                var c = j(a).split(" "),
                    d = c[0],
                    e = d.match(/^\[(.+)\]$/),
                    f = e && e[1],
                    g = b(f, d),
                    h = m.sortDataParsers[c[1]];
                return a = h ? function(a) {
                    return a && h(g(a))
                } : function(a) {
                    return a && g(a)
                }
            }

            function b(a, b) {
                var c;
                return c = a ? function(b) {
                    return b.getAttribute(a)
                } : function(a) {
                    var c = a.querySelector(b);
                    return c && l(c)
                }
            }
            return a
        }();
        m.sortDataParsers = {
            parseInt: function(a) {
                return parseInt(a, 10)
            },
            parseFloat: function(a) {
                return parseFloat(a)
            }
        }, m.prototype._sort = function() {
            var a = this.options.sortBy;
            if (a) {
                var b = [].concat.apply(a, this.sortHistory),
                    c = h(b, this.options.sortAscending);
                this.filteredItems.sort(c), a != this.sortHistory[0] && this.sortHistory.unshift(a)
            }
        }, m.prototype._mode = function() {
            var a = this.options.layoutMode,
                b = this.modes[a];
            if (!b) throw new Error("No layout mode: " + a);
            return b.options = this.options[a], b
        }, m.prototype._resetLayout = function() {
            b.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, m.prototype._getItemLayoutPosition = function(a) {
            return this._mode()._getItemLayoutPosition(a)
        }, m.prototype._manageStamp = function(a) {
            this._mode()._manageStamp(a)
        }, m.prototype._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, m.prototype.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, m.prototype.appended = function(a) {
            var b = this.addItems(a);
            if (b.length) {
                var c = this._filterRevealAdded(b);
                this.filteredItems = this.filteredItems.concat(c)
            }
        }, m.prototype.prepended = function(a) {
            var b = this._itemize(a);
            if (b.length) {
                this._resetLayout(), this._manageStamps();
                var c = this._filterRevealAdded(b);
                this.layoutItems(this.filteredItems), this.filteredItems = c.concat(this.filteredItems), this.items = b.concat(this.items)
            }
        }, m.prototype._filterRevealAdded = function(a) {
            var b = this._filter(a);
            return this.hide(b.needHide), this.reveal(b.matches), this.layoutItems(b.matches, !0), b.matches
        }, m.prototype.insert = function(a) {
            var b = this.addItems(a);
            if (b.length) {
                var c, d, e = b.length;
                for (c = 0; e > c; c++) d = b[c], this.element.appendChild(d.element);
                var f = this._filter(b).matches;
                for (c = 0; e > c; c++) b[c].isLayoutInstant = !0;
                for (this.arrange(), c = 0; e > c; c++) delete b[c].isLayoutInstant;
                this.reveal(f)
            }
        };
        var o = m.prototype.remove;
        return m.prototype.remove = function(a) {
            a = e.makeArray(a);
            var b = this.getItems(a);
            o.call(this, a);
            var c = b && b.length;
            if (c)
                for (var d = 0; c > d; d++) {
                    var f = b[d];
                    e.removeFrom(this.filteredItems, f)
                }
        }, m.prototype.shuffle = function() {
            for (var a = 0, b = this.items.length; b > a; a++) {
                var c = this.items[a];
                c.sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, m.prototype._noTransition = function(a) {
            var b = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var c = a.call(this);
            return this.options.transitionDuration = b, c
        }, m.prototype.getFilteredItemElements = function() {
            for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++) a.push(this.filteredItems[b].element);
            return a
        }, m
    });

(function() {
    function e() {}

    function t(e, t) {
        for (var n = e.length; n--;)
            if (e[n].listener === t) return n;
        return -1
    }

    function n(e) {
        return function() {
            return this[e].apply(this, arguments)
        }
    }
    var i = e.prototype,
        r = this,
        o = r.EventEmitter;
    i.getListeners = function(e) {
        var t, n, i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
        } else t = i[e] || (i[e] = []);
        return t
    }, i.flattenListeners = function(e) {
        var t, n = [];
        for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
        return n
    }, i.getListenersAsObject = function(e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, i.addListener = function(e, n) {
        var i, r = this.getListenersAsObject(e),
            o = "object" == typeof n;
        for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
            listener: n,
            once: !1
        });
        return this
    }, i.on = n("addListener"), i.addOnceListener = function(e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    }, i.once = n("addOnceListener"), i.defineEvent = function(e) {
        return this.getListeners(e), this
    }, i.defineEvents = function(e) {
        for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
        return this
    }, i.removeListener = function(e, n) {
        var i, r, o = this.getListenersAsObject(e);
        for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t)
    }, i.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t)
    }, i.manipulateListeners = function(e, t, n) {
        var i, r, o = e ? this.removeListener : this.addListener,
            s = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (i = n.length; i--;) o.call(this, t, n[i]);
        else
            for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
        return this
    }, i.removeEvent = function(e) {
        var t, n = typeof e,
            i = this._getEvents();
        if ("string" === n) delete i[e];
        else if ("object" === n)
            for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
        var n, i, r, o, s = this.getListenersAsObject(e);
        for (r in s)
            if (s.hasOwnProperty(r))
                for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, i.setOnceReturnValue = function(e) {
        return this._onceReturnValue = e, this
    }, i._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function() {
        return this._events || (this._events = {})
    }, e.noConflict = function() {
        return r.EventEmitter = o, e
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
    function(e) {
        function t(t) {
            var n = e.event;
            return n.target = n.target || n.srcElement || t, n
        }
        var n = document.documentElement,
            i = function() {};
        n.addEventListener ? i = function(e, t, n) {
            e.addEventListener(t, n, !1)
        } : n.attachEvent && (i = function(e, n, i) {
            e[n + i] = i.handleEvent ? function() {
                var n = t(e);
                i.handleEvent.call(i, n)
            } : function() {
                var n = t(e);
                i.call(e, n)
            }, e.attachEvent("on" + n, e[n + i])
        });
        var r = function() {};
        n.removeEventListener ? r = function(e, t, n) {
            e.removeEventListener(t, n, !1)
        } : n.detachEvent && (r = function(e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
                delete e[t + n]
            } catch (i) {
                e[t + n] = void 0
            }
        });
        var o = {
            bind: i,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
    }(this),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) {
            return t(e, n, i)
        }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
    }(window, function(e, t, n) {
        function i(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function r(e) {
            return "[object Array]" === d.call(e)
        }

        function o(e) {
            var t = [];
            if (r(e)) t = e;
            else if ("number" == typeof e.length)
                for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
            else t.push(e);
            return t
        }

        function s(e, t, n) {
            if (!(this instanceof s)) return new s(e, t);
            "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred);
            var r = this;
            setTimeout(function() {
                r.check()
            })
        }

        function f(e) {
            this.img = e
        }

        function c(e) {
            this.src = e, v[e] = this
        }
        var a = e.jQuery,
            u = e.console,
            h = u !== void 0,
            d = Object.prototype.toString;
        s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function() {
            this.images = [];
            for (var e = 0, t = this.elements.length; t > e; e++) {
                var n = this.elements[e];
                "IMG" === n.nodeName && this.addImage(n);
                var i = n.nodeType;
                if (i && (1 === i || 9 === i || 11 === i))
                    for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
                        var f = r[o];
                        this.addImage(f)
                    }
            }
        }, s.prototype.addImage = function(e) {
            var t = new f(e);
            this.images.push(t)
        }, s.prototype.check = function() {
            function e(e, r) {
                return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
            }
            var t = this,
                n = 0,
                i = this.images.length;
            if (this.hasAnyBroken = !1, !i) return this.complete(), void 0;
            for (var r = 0; i > r; r++) {
                var o = this.images[r];
                o.on("confirm", e), o.check()
            }
        }, s.prototype.progress = function(e) {
            this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
            var t = this;
            setTimeout(function() {
                t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
            })
        }, s.prototype.complete = function() {
            var e = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var t = this;
            setTimeout(function() {
                if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                    var n = t.hasAnyBroken ? "reject" : "resolve";
                    t.jqDeferred[n](t)
                }
            })
        }, a && (a.fn.imagesLoaded = function(e, t) {
            var n = new s(this, e, t);
            return n.jqDeferred.promise(a(this))
        }), f.prototype = new t, f.prototype.check = function() {
            var e = v[this.img.src] || new c(this.img.src);
            if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
            if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
            var t = this;
            e.on("confirm", function(e, n) {
                return t.confirm(e.isLoaded, n), !0
            }), e.check()
        }, f.prototype.confirm = function(e, t) {
            this.isLoaded = e, this.emit("confirm", this, t)
        };
        var v = {};
        return c.prototype = new t, c.prototype.check = function() {
            if (!this.isChecked) {
                var e = new Image;
                n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
            }
        }, c.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, c.prototype.onload = function(e) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(e)
        }, c.prototype.onerror = function(e) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
        }, c.prototype.confirm = function(e, t) {
            this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
        }, c.prototype.unbindProxyEvents = function(e) {
            n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
        }, s
    });
/*! lightgallery - v1.2.22 - 2016-07-20
 * http://sachinchoolur.github.io/lightGallery/
 * Copyright (c) 2016 Sachin N; Licensed Apache 2.0 */
! function(a, b, c, d) {
    "use strict";

    function e(b, d) {
        if (this.el = b, this.$el = a(b), this.s = a.extend({}, f, d), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
        return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in c.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = a(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(a(this.s.selector)) : this.$items = this.$el.children(), this.$slide = "", this.$outer = "", this.init(), this
    }
    var f = {
        mode: "lg-slide",
        cssEasing: "ease",
        easing: "linear",
        speed: 600,
        height: "100%",
        width: "100%",
        addClass: "",
        startClass: "lg-start-zoom",
        backdropDuration: 150,
        hideBarsDelay: 6e3,
        useLeft: !1,
        closable: !0,
        loop: !0,
        escKey: !0,
        keyPress: !0,
        controls: !0,
        slideEndAnimatoin: !0,
        hideControlOnEnd: !1,
        mousewheel: !0,
        getCaptionFromTitleOrAlt: !0,
        appendSubHtmlTo: ".lg-sub-html",
        subHtmlSelectorRelative: !1,
        preload: 1,
        showAfterLoad: !0,
        selector: "",
        selectWithin: "",
        nextHtml: "",
        prevHtml: "",
        index: !1,
        iframeMaxWidth: "100%",
        download: !0,
        counter: !0,
        appendCounterTo: ".lg-toolbar",
        swipeThreshold: 50,
        enableSwipe: !0,
        enableDrag: !0,
        dynamic: !1,
        dynamicEl: [],
        galleryId: 1
    };
    e.prototype.init = function() {
        var c = this;
        c.s.preload > c.$items.length && (c.s.preload = c.$items.length);
        var d = b.location.hash;
        d.indexOf("lg=" + this.s.galleryId) > 0 && (c.index = parseInt(d.split("&slide=")[1], 10), a("body").addClass("lg-from-hash"), a("body").hasClass("lg-on") || (setTimeout(function() {
            c.build(c.index)
        }), a("body").addClass("lg-on"))), c.s.dynamic ? (c.$el.trigger("onBeforeOpen.lg"), c.index = c.s.index || 0, a("body").hasClass("lg-on") || setTimeout(function() {
            c.build(c.index), a("body").addClass("lg-on")
        })) : c.$items.on("click.lgcustom", function(b) {
            try {
                b.preventDefault(), b.preventDefault()
            } catch (a) {
                b.returnValue = !1
            }
            c.$el.trigger("onBeforeOpen.lg"), c.index = c.s.index || c.$items.index(this), a("body").hasClass("lg-on") || (c.build(c.index), a("body").addClass("lg-on"))
        })
    }, e.prototype.build = function(b) {
        var c = this;
        c.structure(), a.each(a.fn.lightGallery.modules, function(b) {
            c.modules[b] = new a.fn.lightGallery.modules[b](c.el)
        }), c.slide(b, !1, !1), c.s.keyPress && c.keyPress(), c.$items.length > 1 && (c.arrow(), setTimeout(function() {
            c.enableDrag(), c.enableSwipe()
        }, 50), c.s.mousewheel && c.mousewheel()), c.counter(), c.closeGallery(), c.$el.trigger("onAfterOpen.lg"), c.$outer.on("mousemove.lg click.lg touchstart.lg", function() {
            c.$outer.removeClass("lg-hide-items"), clearTimeout(c.hideBartimeout), c.hideBartimeout = setTimeout(function() {
                c.$outer.addClass("lg-hide-items")
            }, c.s.hideBarsDelay)
        })
    }, e.prototype.structure = function() {
        var c, d = "",
            e = "",
            f = 0,
            g = "",
            h = this;
        for (a("body").append('<div class="lg-backdrop"></div>'), a(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"), f = 0; f < this.$items.length; f++) d += '<div class="lg-item"></div>';
        if (this.s.controls && this.$items.length > 1 && (e = '<div class="lg-actions"><div class="lg-prev lg-icon">' + this.s.prevHtml + '</div><div class="lg-next lg-icon">' + this.s.nextHtml + "</div></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (g = '<div class="lg-sub-html"></div>'), c = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + d + '</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>' + e + g + "</div></div>", a("body").append(c), this.$outer = a(".lg-outer"), this.$slide = this.$outer.find(".lg-item"), this.s.useLeft ? (this.$outer.addClass("lg-use-left"), this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"), h.setTop(), a(b).on("resize.lg orientationchange.lg", function() {
                setTimeout(function() {
                    h.setTop()
                }, 100)
            }), this.$slide.eq(this.index).addClass("lg-current"), this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"), this.s.speed = 0), this.$outer.addClass(this.s.mode), this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"), this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"), this.doCss()) {
            var i = this.$outer.find(".lg-inner");
            i.css("transition-timing-function", this.s.cssEasing), i.css("transition-duration", this.s.speed + "ms")
        }
        a(".lg-backdrop").addClass("in"), setTimeout(function() {
            h.$outer.addClass("lg-visible")
        }, this.s.backdropDuration), this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = a(b).scrollTop()
    }, e.prototype.setTop = function() {
        if ("100%" !== this.s.height) {
            var c = a(b).height(),
                d = (c - parseInt(this.s.height, 10)) / 2,
                e = this.$outer.find(".lg");
            c >= parseInt(this.s.height, 10) ? e.css("top", d + "px") : e.css("top", "0px")
        }
    }, e.prototype.doCss = function() {
        var a = function() {
            var a = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
                b = c.documentElement,
                d = 0;
            for (d = 0; d < a.length; d++)
                if (a[d] in b.style) return !0
        };
        return !!a()
    }, e.prototype.isVideo = function(a, b) {
        var c;
        if (c = this.s.dynamic ? this.s.dynamicEl[b].html : this.$items.eq(b).attr("data-html"), !a && c) return {
            html5: !0
        };
        var d = a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
            e = a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
            f = a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
            g = a.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
        return d ? {
            youtube: d
        } : e ? {
            vimeo: e
        } : f ? {
            dailymotion: f
        } : g ? {
            vk: g
        } : void 0
    }, e.prototype.counter = function() {
        this.s.counter && a(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>")
    }, e.prototype.addHtml = function(b) {
        var c, d, e = null;
        if (this.s.dynamic ? this.s.dynamicEl[b].subHtmlUrl ? c = this.s.dynamicEl[b].subHtmlUrl : e = this.s.dynamicEl[b].subHtml : (d = this.$items.eq(b), d.attr("data-sub-html-url") ? c = d.attr("data-sub-html-url") : (e = d.attr("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !e && (e = d.attr("title") || d.find("img").first().attr("alt")))), !c)
            if ("undefined" != typeof e && null !== e) {
                var f = e.substring(0, 1);
                "." !== f && "#" !== f || (e = this.s.subHtmlSelectorRelative && !this.s.dynamic ? d.find(e).html() : a(e).html())
            } else e = "";
        ".lg-sub-html" === this.s.appendSubHtmlTo ? c ? this.$outer.find(this.s.appendSubHtmlTo).load(c) : this.$outer.find(this.s.appendSubHtmlTo).html(e) : c ? this.$slide.eq(b).load(c) : this.$slide.eq(b).append(e), "undefined" != typeof e && null !== e && ("" === e ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")), this.$el.trigger("onAfterAppendSubHtml.lg", [b])
    }, e.prototype.preload = function(a) {
        var b = 1,
            c = 1;
        for (b = 1; b <= this.s.preload && !(b >= this.$items.length - a); b++) this.loadContent(a + b, !1, 0);
        for (c = 1; c <= this.s.preload && !(a - c < 0); c++) this.loadContent(a - c, !1, 0)
    }, e.prototype.loadContent = function(c, d, e) {
        var f, g, h, i, j, k, l = this,
            m = !1,
            n = function(c) {
                for (var d = [], e = [], f = 0; f < c.length; f++) {
                    var h = c[f].split(" ");
                    "" === h[0] && h.splice(0, 1), e.push(h[0]), d.push(h[1])
                }
                for (var i = a(b).width(), j = 0; j < d.length; j++)
                    if (parseInt(d[j], 10) > i) {
                        g = e[j];
                        break
                    }
            };
        if (l.s.dynamic) {
            if (l.s.dynamicEl[c].poster && (m = !0, h = l.s.dynamicEl[c].poster), k = l.s.dynamicEl[c].html, g = l.s.dynamicEl[c].src, l.s.dynamicEl[c].responsive) {
                var o = l.s.dynamicEl[c].responsive.split(",");
                n(o)
            }
            i = l.s.dynamicEl[c].srcset, j = l.s.dynamicEl[c].sizes
        } else {
            if (l.$items.eq(c).attr("data-poster") && (m = !0, h = l.$items.eq(c).attr("data-poster")), k = l.$items.eq(c).attr("data-html"), g = l.$items.eq(c).attr("href") || l.$items.eq(c).attr("data-src"), l.$items.eq(c).attr("data-responsive")) {
                var p = l.$items.eq(c).attr("data-responsive").split(",");
                n(p)
            }
            i = l.$items.eq(c).attr("data-srcset"), j = l.$items.eq(c).attr("data-sizes")
        }
        var q = !1;
        l.s.dynamic ? l.s.dynamicEl[c].iframe && (q = !0) : "true" === l.$items.eq(c).attr("data-iframe") && (q = !0);
        var r = l.isVideo(g, c);
        if (!l.$slide.eq(c).hasClass("lg-loaded")) {
            if (q) l.$slide.eq(c).prepend('<div class="lg-video-cont" style="max-width:' + l.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + g + '"  allowfullscreen="true"></iframe></div></div>');
            else if (m) {
                var s = "";
                s = r && r.youtube ? "lg-has-youtube" : r && r.vimeo ? "lg-has-vimeo" : "lg-has-html5", l.$slide.eq(c).prepend('<div class="lg-video-cont ' + s + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + h + '" /></div></div>')
            } else r ? (l.$slide.eq(c).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), l.$el.trigger("hasVideo.lg", [c, g, k])) : l.$slide.eq(c).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + g + '" /></div>');
            if (l.$el.trigger("onAferAppendSlide.lg", [c]), f = l.$slide.eq(c).find(".lg-object"), j && f.attr("sizes", j), i) {
                f.attr("srcset", i);
                try {
                    picturefill({
                        elements: [f[0]]
                    })
                } catch (a) {
                    console.error("Make sure you have included Picturefill version 2")
                }
            }
            ".lg-sub-html" !== this.s.appendSubHtmlTo && l.addHtml(c), l.$slide.eq(c).addClass("lg-loaded")
        }
        l.$slide.eq(c).find(".lg-object").on("load.lg error.lg", function() {
            var b = 0;
            e && !a("body").hasClass("lg-from-hash") && (b = e), setTimeout(function() {
                l.$slide.eq(c).addClass("lg-complete"), l.$el.trigger("onSlideItemLoad.lg", [c, e || 0])
            }, b)
        }), r && r.html5 && !m && l.$slide.eq(c).addClass("lg-complete"), d === !0 && (l.$slide.eq(c).hasClass("lg-complete") ? l.preload(c) : l.$slide.eq(c).find(".lg-object").on("load.lg error.lg", function() {
            l.preload(c)
        }))
    }, e.prototype.slide = function(b, c, d) {
        var e = this.$outer.find(".lg-current").index(),
            f = this;
        if (!f.lGalleryOn || e !== b) {
            var g = this.$slide.length,
                h = f.lGalleryOn ? this.s.speed : 0,
                i = !1,
                j = !1;
            if (!f.lgBusy) {
                if (this.s.download) {
                    var k;
                    k = f.s.dynamic ? f.s.dynamicEl[b].downloadUrl !== !1 && (f.s.dynamicEl[b].downloadUrl || f.s.dynamicEl[b].src) : "false" !== f.$items.eq(b).attr("data-download-url") && (f.$items.eq(b).attr("data-download-url") || f.$items.eq(b).attr("href") || f.$items.eq(b).attr("data-src")), k ? (a("#lg-download").attr("href", k), f.$outer.removeClass("lg-hide-download")) : f.$outer.addClass("lg-hide-download")
                }
                if (this.$el.trigger("onBeforeSlide.lg", [e, b, c, d]), f.lgBusy = !0, clearTimeout(f.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function() {
                        f.addHtml(b)
                    }, h), this.arrowDisable(b), c) {
                    var l = b - 1,
                        m = b + 1;
                    0 === b && e === g - 1 ? (m = 0, l = g - 1) : b === g - 1 && 0 === e && (m = 0, l = g - 1), this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"), f.$slide.eq(l).addClass("lg-prev-slide"), f.$slide.eq(m).addClass("lg-next-slide"), f.$slide.eq(b).addClass("lg-current")
                } else f.$outer.addClass("lg-no-trans"), this.$slide.removeClass("lg-prev-slide lg-next-slide"), b < e ? (j = !0, 0 !== b || e !== g - 1 || d || (j = !1, i = !0)) : b > e && (i = !0, b !== g - 1 || 0 !== e || d || (j = !0, i = !1)), j ? (this.$slide.eq(b).addClass("lg-prev-slide"), this.$slide.eq(e).addClass("lg-next-slide")) : i && (this.$slide.eq(b).addClass("lg-next-slide"), this.$slide.eq(e).addClass("lg-prev-slide")), setTimeout(function() {
                    f.$slide.removeClass("lg-current"), f.$slide.eq(b).addClass("lg-current"), f.$outer.removeClass("lg-no-trans")
                }, 50);
                f.lGalleryOn ? (setTimeout(function() {
                    f.loadContent(b, !0, 0)
                }, this.s.speed + 50), setTimeout(function() {
                    f.lgBusy = !1, f.$el.trigger("onAfterSlide.lg", [e, b, c, d])
                }, this.s.speed)) : (f.loadContent(b, !0, f.s.backdropDuration), f.lgBusy = !1, f.$el.trigger("onAfterSlide.lg", [e, b, c, d])), f.lGalleryOn = !0, this.s.counter && a("#lg-counter-current").text(b + 1)
            }
        }
    }, e.prototype.goToNextSlide = function(a) {
        var b = this;
        b.lgBusy || (b.index + 1 < b.$slide.length ? (b.index++, b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1)) : b.s.loop ? (b.index = 0, b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1)) : b.s.slideEndAnimatoin && (b.$outer.addClass("lg-right-end"), setTimeout(function() {
            b.$outer.removeClass("lg-right-end")
        }, 400)))
    }, e.prototype.goToPrevSlide = function(a) {
        var b = this;
        b.lgBusy || (b.index > 0 ? (b.index--, b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1)) : b.s.loop ? (b.index = b.$items.length - 1, b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1)) : b.s.slideEndAnimatoin && (b.$outer.addClass("lg-left-end"), setTimeout(function() {
            b.$outer.removeClass("lg-left-end")
        }, 400)))
    }, e.prototype.keyPress = function() {
        var c = this;
        this.$items.length > 1 && a(b).on("keyup.lg", function(a) {
            c.$items.length > 1 && (37 === a.keyCode && (a.preventDefault(), c.goToPrevSlide()), 39 === a.keyCode && (a.preventDefault(), c.goToNextSlide()))
        }), a(b).on("keydown.lg", function(a) {
            c.s.escKey === !0 && 27 === a.keyCode && (a.preventDefault(), c.$outer.hasClass("lg-thumb-open") ? c.$outer.removeClass("lg-thumb-open") : c.destroy())
        })
    }, e.prototype.arrow = function() {
        var a = this;
        this.$outer.find(".lg-prev").on("click.lg", function() {
            a.goToPrevSlide()
        }), this.$outer.find(".lg-next").on("click.lg", function() {
            a.goToNextSlide()
        })
    }, e.prototype.arrowDisable = function(a) {
        !this.s.loop && this.s.hideControlOnEnd && (a + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"), a > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"))
    }, e.prototype.setTranslate = function(a, b, c) {
        this.s.useLeft ? a.css("left", b) : a.css({
            transform: "translate3d(" + b + "px, " + c + "px, 0px)"
        })
    }, e.prototype.touchMove = function(b, c) {
        var d = c - b;
        Math.abs(d) > 15 && (this.$outer.addClass("lg-dragging"), this.setTranslate(this.$slide.eq(this.index), d, 0), this.setTranslate(a(".lg-prev-slide"), -this.$slide.eq(this.index).width() + d, 0), this.setTranslate(a(".lg-next-slide"), this.$slide.eq(this.index).width() + d, 0))
    }, e.prototype.touchEnd = function(a) {
        var b = this;
        "lg-slide" !== b.s.mode && b.$outer.addClass("lg-slide"), this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"), setTimeout(function() {
            b.$outer.removeClass("lg-dragging"), a < 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToNextSlide(!0) : a > 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToPrevSlide(!0) : Math.abs(a) < 5 && b.$el.trigger("onSlideClick.lg"), b.$slide.removeAttr("style")
        }), setTimeout(function() {
            b.$outer.hasClass("lg-dragging") || "lg-slide" === b.s.mode || b.$outer.removeClass("lg-slide")
        }, b.s.speed + 100)
    }, e.prototype.enableSwipe = function() {
        var a = this,
            b = 0,
            c = 0,
            d = !1;
        a.s.enableSwipe && a.isTouch && a.doCss() && (a.$slide.on("touchstart.lg", function(c) {
            a.$outer.hasClass("lg-zoomed") || a.lgBusy || (c.preventDefault(), a.manageSwipeClass(), b = c.originalEvent.targetTouches[0].pageX)
        }), a.$slide.on("touchmove.lg", function(e) {
            a.$outer.hasClass("lg-zoomed") || (e.preventDefault(), c = e.originalEvent.targetTouches[0].pageX, a.touchMove(b, c), d = !0)
        }), a.$slide.on("touchend.lg", function() {
            a.$outer.hasClass("lg-zoomed") || (d ? (d = !1, a.touchEnd(c - b)) : a.$el.trigger("onSlideClick.lg"))
        }))
    }, e.prototype.enableDrag = function() {
        var c = this,
            d = 0,
            e = 0,
            f = !1,
            g = !1;
        c.s.enableDrag && !c.isTouch && c.doCss() && (c.$slide.on("mousedown.lg", function(b) {
            c.$outer.hasClass("lg-zoomed") || (a(b.target).hasClass("lg-object") || a(b.target).hasClass("lg-video-play")) && (b.preventDefault(), c.lgBusy || (c.manageSwipeClass(), d = b.pageX, f = !0, c.$outer.scrollLeft += 1, c.$outer.scrollLeft -= 1, c.$outer.removeClass("lg-grab").addClass("lg-grabbing"), c.$el.trigger("onDragstart.lg")))
        }), a(b).on("mousemove.lg", function(a) {
            f && (g = !0, e = a.pageX, c.touchMove(d, e), c.$el.trigger("onDragmove.lg"))
        }), a(b).on("mouseup.lg", function(b) {
            g ? (g = !1, c.touchEnd(e - d), c.$el.trigger("onDragend.lg")) : (a(b.target).hasClass("lg-object") || a(b.target).hasClass("lg-video-play")) && c.$el.trigger("onSlideClick.lg"), f && (f = !1, c.$outer.removeClass("lg-grabbing").addClass("lg-grab"))
        }))
    }, e.prototype.manageSwipeClass = function() {
        var a = this.index + 1,
            b = this.index - 1,
            c = this.$slide.length;
        this.s.loop && (0 === this.index ? b = c - 1 : this.index === c - 1 && (a = 0)), this.$slide.removeClass("lg-next-slide lg-prev-slide"), b > -1 && this.$slide.eq(b).addClass("lg-prev-slide"), this.$slide.eq(a).addClass("lg-next-slide")
    }, e.prototype.mousewheel = function() {
        var a = this;
        a.$outer.on("mousewheel.lg", function(b) {
            b.deltaY && (b.deltaY > 0 ? a.goToPrevSlide() : a.goToNextSlide(), b.preventDefault())
        })
    }, e.prototype.closeGallery = function() {
        var b = this,
            c = !1;
        this.$outer.find(".lg-close").on("click.lg", function() {
            b.destroy()
        }), b.s.closable && (b.$outer.on("mousedown.lg", function(b) {
            c = !!(a(b.target).is(".lg-outer") || a(b.target).is(".lg-item ") || a(b.target).is(".lg-img-wrap"))
        }), b.$outer.on("mouseup.lg", function(d) {
            (a(d.target).is(".lg-outer") || a(d.target).is(".lg-item ") || a(d.target).is(".lg-img-wrap") && c) && (b.$outer.hasClass("lg-dragging") || b.destroy())
        }))
    }, e.prototype.destroy = function(c) {
        var d = this;
        c || d.$el.trigger("onBeforeClose.lg"), a(b).scrollTop(d.prevScrollTop), c && (d.s.dynamic || this.$items.off("click.lg click.lgcustom"), a.removeData(d.el, "lightGallery")), this.$el.off(".lg.tm"), a.each(a.fn.lightGallery.modules, function(a) {
            d.modules[a] && d.modules[a].destroy()
        }), this.lGalleryOn = !1, clearTimeout(d.hideBartimeout), this.hideBartimeout = !1, a(b).off(".lg"), a("body").removeClass("lg-on lg-from-hash"), d.$outer && d.$outer.removeClass("lg-visible"), a(".lg-backdrop").removeClass("in"), setTimeout(function() {
            d.$outer && d.$outer.remove(), a(".lg-backdrop").remove(), c || d.$el.trigger("onCloseAfter.lg")
        }, d.s.backdropDuration + 50)
    }, a.fn.lightGallery = function(b) {
        return this.each(function() {
            if (a.data(this, "lightGallery")) try {
                a(this).data("lightGallery").init()
            } catch (a) {
                console.error("lightGallery has not initiated properly")
            } else a.data(this, "lightGallery", new e(this, b))
        })
    }, a.fn.lightGallery.modules = {}
}(jQuery, window, document);
/*! lightgallery - v1.2.22 - 2016-07-20
 * http://sachinchoolur.github.io/lightGallery/
 * Copyright (c) 2016 Sachin N; Licensed Apache 2.0 */
! function(a, b, c, d) {
    "use strict";
    var e = {
            scale: 1,
            zoom: !0,
            actualSize: !0,
            enableZoomAfter: 300
        },
        f = function(c) {
            return this.core = a(c).data("lightGallery"), this.core.s = a.extend({}, e, this.core.s), this.core.s.zoom && this.core.doCss() && (this.init(), this.zoomabletimeout = !1, this.pageX = a(b).width() / 2, this.pageY = a(b).height() / 2 + a(b).scrollTop()), this
        };
    f.prototype.init = function() {
        var c = this,
            d = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
        c.core.s.actualSize && (d += '<span id="lg-actual-size" class="lg-icon"></span>'), this.core.$outer.find(".lg-toolbar").append(d), c.core.$el.on("onSlideItemLoad.lg.tm.zoom", function(b, d, e) {
            var f = c.core.s.enableZoomAfter + e;
            a("body").hasClass("lg-from-hash") && e ? f = 0 : a("body").removeClass("lg-from-hash"), c.zoomabletimeout = setTimeout(function() {
                c.core.$slide.eq(d).addClass("lg-zoomable")
            }, f + 30)
        });
        var e = 1,
            f = function(d) {
                var e, f, g = c.core.$outer.find(".lg-current .lg-image"),
                    h = (a(b).width() - g.width()) / 2,
                    i = (a(b).height() - g.height()) / 2 + a(b).scrollTop();
                e = c.pageX - h, f = c.pageY - i;
                var j = (d - 1) * e,
                    k = (d - 1) * f;
                g.css("transform", "scale3d(" + d + ", " + d + ", 1)").attr("data-scale", d), g.parent().css({
                    left: -j + "px",
                    top: -k + "px"
                }).attr("data-x", j).attr("data-y", k)
            },
            g = function() {
                e > 1 ? c.core.$outer.addClass("lg-zoomed") : c.resetZoom(), e < 1 && (e = 1), f(e)
            },
            h = function(d, f, h, i) {
                var j, k = f.width();
                j = c.core.s.dynamic ? c.core.s.dynamicEl[h].width || f[0].naturalWidth || k : c.core.$items.eq(h).attr("data-width") || f[0].naturalWidth || k;
                var l;
                c.core.$outer.hasClass("lg-zoomed") ? e = 1 : j > k && (l = j / k, e = l || 2), i ? (c.pageX = a(b).width() / 2, c.pageY = a(b).height() / 2 + a(b).scrollTop()) : (c.pageX = d.pageX || d.originalEvent.targetTouches[0].pageX, c.pageY = d.pageY || d.originalEvent.targetTouches[0].pageY), g(), setTimeout(function() {
                    c.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
                }, 10)
            },
            i = !1;
        c.core.$el.on("onAferAppendSlide.lg.tm.zoom", function(a, b) {
            var d = c.core.$slide.eq(b).find(".lg-image");
            d.on("dblclick", function(a) {
                h(a, d, b)
            }), d.on("touchstart", function(a) {
                i ? (clearTimeout(i), i = null, h(a, d, b)) : i = setTimeout(function() {
                    i = null
                }, 300), a.preventDefault()
            })
        }), a(b).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom", function() {
            c.pageX = a(b).width() / 2, c.pageY = a(b).height() / 2 + a(b).scrollTop(), f(e)
        }), a("#lg-zoom-out").on("click.lg", function() {
            c.core.$outer.find(".lg-current .lg-image").length && (e -= c.core.s.scale, g())
        }), a("#lg-zoom-in").on("click.lg", function() {
            c.core.$outer.find(".lg-current .lg-image").length && (e += c.core.s.scale, g())
        }), a("#lg-actual-size").on("click.lg", function(a) {
            h(a, c.core.$slide.eq(c.core.index).find(".lg-image"), c.core.index, !0)
        }), c.core.$el.on("onBeforeSlide.lg.tm", function() {
            e = 1, c.resetZoom()
        }), c.core.isTouch || c.zoomDrag(), c.core.isTouch && c.zoomSwipe()
    }, f.prototype.resetZoom = function() {
        this.core.$outer.removeClass("lg-zoomed"), this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"), this.core.$slide.find(".lg-image").removeAttr("style data-scale"), this.pageX = a(b).width() / 2, this.pageY = a(b).height() / 2 + a(b).scrollTop()
    }, f.prototype.zoomSwipe = function() {
        var a = this,
            b = {},
            c = {},
            d = !1,
            e = !1,
            f = !1;
        a.core.$slide.on("touchstart.lg", function(c) {
            if (a.core.$outer.hasClass("lg-zoomed")) {
                var d = a.core.$slide.eq(a.core.index).find(".lg-object");
                f = d.outerHeight() * d.attr("data-scale") > a.core.$outer.find(".lg").height(), e = d.outerWidth() * d.attr("data-scale") > a.core.$outer.find(".lg").width(), (e || f) && (c.preventDefault(), b = {
                    x: c.originalEvent.targetTouches[0].pageX,
                    y: c.originalEvent.targetTouches[0].pageY
                })
            }
        }), a.core.$slide.on("touchmove.lg", function(g) {
            if (a.core.$outer.hasClass("lg-zoomed")) {
                var h, i, j = a.core.$slide.eq(a.core.index).find(".lg-img-wrap");
                g.preventDefault(), d = !0, c = {
                    x: g.originalEvent.targetTouches[0].pageX,
                    y: g.originalEvent.targetTouches[0].pageY
                }, a.core.$outer.addClass("lg-zoom-dragging"), i = f ? -Math.abs(j.attr("data-y")) + (c.y - b.y) : -Math.abs(j.attr("data-y")), h = e ? -Math.abs(j.attr("data-x")) + (c.x - b.x) : -Math.abs(j.attr("data-x")), (Math.abs(c.x - b.x) > 15 || Math.abs(c.y - b.y) > 15) && j.css({
                    left: h + "px",
                    top: i + "px"
                })
            }
        }), a.core.$slide.on("touchend.lg", function() {
            a.core.$outer.hasClass("lg-zoomed") && d && (d = !1, a.core.$outer.removeClass("lg-zoom-dragging"), a.touchendZoom(b, c, e, f))
        })
    }, f.prototype.zoomDrag = function() {
        var c = this,
            d = {},
            e = {},
            f = !1,
            g = !1,
            h = !1,
            i = !1;
        c.core.$slide.on("mousedown.lg.zoom", function(b) {
            var e = c.core.$slide.eq(c.core.index).find(".lg-object");
            i = e.outerHeight() * e.attr("data-scale") > c.core.$outer.find(".lg").height(), h = e.outerWidth() * e.attr("data-scale") > c.core.$outer.find(".lg").width(), c.core.$outer.hasClass("lg-zoomed") && a(b.target).hasClass("lg-object") && (h || i) && (b.preventDefault(), d = {
                x: b.pageX,
                y: b.pageY
            }, f = !0, c.core.$outer.scrollLeft += 1, c.core.$outer.scrollLeft -= 1, c.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))
        }), a(b).on("mousemove.lg.zoom", function(a) {
            if (f) {
                var b, j, k = c.core.$slide.eq(c.core.index).find(".lg-img-wrap");
                g = !0, e = {
                    x: a.pageX,
                    y: a.pageY
                }, c.core.$outer.addClass("lg-zoom-dragging"), j = i ? -Math.abs(k.attr("data-y")) + (e.y - d.y) : -Math.abs(k.attr("data-y")), b = h ? -Math.abs(k.attr("data-x")) + (e.x - d.x) : -Math.abs(k.attr("data-x")), k.css({
                    left: b + "px",
                    top: j + "px"
                })
            }
        }), a(b).on("mouseup.lg.zoom", function(a) {
            f && (f = !1, c.core.$outer.removeClass("lg-zoom-dragging"), !g || d.x === e.x && d.y === e.y || (e = {
                x: a.pageX,
                y: a.pageY
            }, c.touchendZoom(d, e, h, i)), g = !1), c.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
        })
    }, f.prototype.touchendZoom = function(a, b, c, d) {
        var e = this,
            f = e.core.$slide.eq(e.core.index).find(".lg-img-wrap"),
            g = e.core.$slide.eq(e.core.index).find(".lg-object"),
            h = -Math.abs(f.attr("data-x")) + (b.x - a.x),
            i = -Math.abs(f.attr("data-y")) + (b.y - a.y),
            j = (e.core.$outer.find(".lg").height() - g.outerHeight()) / 2,
            k = Math.abs(g.outerHeight() * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").height() + j),
            l = (e.core.$outer.find(".lg").width() - g.outerWidth()) / 2,
            m = Math.abs(g.outerWidth() * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").width() + l);
        (Math.abs(b.x - a.x) > 15 || Math.abs(b.y - a.y) > 15) && (d && (i <= -k ? i = -k : i >= -j && (i = -j)), c && (h <= -m ? h = -m : h >= -l && (h = -l)), d ? f.attr("data-y", Math.abs(i)) : i = -Math.abs(f.attr("data-y")), c ? f.attr("data-x", Math.abs(h)) : h = -Math.abs(f.attr("data-x")), f.css({
            left: h + "px",
            top: i + "px"
        }))
    }, f.prototype.destroy = function() {
        var c = this;
        c.core.$el.off(".lg.zoom"), a(b).off(".lg.zoom"), c.core.$slide.off(".lg.zoom"), c.core.$el.off(".lg.tm.zoom"), c.resetZoom(), clearTimeout(c.zoomabletimeout), c.zoomabletimeout = !1
    }, a.fn.lightGallery.modules.zoom = f
}(jQuery, window, document);
/**
 * Owl carousel
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
! function(t, e, i, s) {
    function n(e, i) {
        this.settings = null, this.options = t.extend({}, n.Defaults, i), this.$element = t(e), this.drag = t.extend({}, p), this.state = t.extend({}, u), this.e = t.extend({}, g), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], t.each(n.Plugins, t.proxy(function(t, e) {
            this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(n.Pipe, t.proxy(function(e, i) {
            this._pipe.push({
                filter: i.filter,
                run: t.proxy(i.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }

    function o(t) {
        if (t.touches !== s) return {
            x: t.touches[0].pageX,
            y: t.touches[0].pageY
        };
        if (t.touches === s) {
            if (t.pageX !== s) return {
                x: t.pageX,
                y: t.pageY
            };
            if (t.pageX === s) return {
                x: t.clientX,
                y: t.clientY
            }
        }
    }

    function r(t) {
        var e, s, n = i.createElement("div"),
            o = t;
        for (e in o)
            if (s = o[e], "undefined" != typeof n.style[s]) return n = null, [s, e];
        return [!1]
    }

    function a() {
        return r(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
    }

    function h() {
        return r(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
    }

    function l() {
        return r(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
    }

    function c() {
        return "ontouchstart" in e || !!navigator.msMaxTouchPoints
    }

    function d() {
        return e.navigator.msPointerEnabled
    }
    var p, u, g;
    p = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    }, u = {
        isTouch: !1,
        isScrolling: !1,
        isSwiping: !1,
        direction: !1,
        inMotion: !1
    }, g = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    }, n.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    }, n.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, n.Plugins = {}, n.Pipe = [{
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var t = this._clones,
                e = this.$stage.children(".cloned");
            (e.length !== t.length || !this.settings.loop && t.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var t, e, i = this._clones,
                s = this._items,
                n = this.settings.loop ? i.length - Math.max(2 * this.settings.items, 4) : 0;
            for (t = 0, e = Math.abs(n / 2); e > t; t++) n > 0 ? (this.$stage.children().eq(s.length + i.length - 1).remove(), i.pop(), this.$stage.children().eq(0).remove(), i.pop()) : (i.push(i.length / 2), this.$stage.append(s[i[i.length - 1]].clone().addClass("cloned")), i.push(s.length - 1 - (i.length - 1) / 2), this.$stage.prepend(s[i[i.length - 1]].clone().addClass("cloned")))
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var t, e, i, s = this.settings.rtl ? 1 : -1,
                n = (this.width() / this.settings.items).toFixed(3),
                o = 0;
            for (this._coordinates = [], e = 0, i = this._clones.length + this._items.length; i > e; e++) t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, o += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : n * t) * s, this._coordinates.push(o)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var e, i, s = (this.width() / this.settings.items).toFixed(3),
                n = {
                    width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                    "padding-left": this.settings.stagePadding || "",
                    "padding-right": this.settings.stagePadding || ""
                };
            if (this.$stage.css(n), n = {
                    width: this.settings.autoWidth ? "auto" : s - this.settings.margin
                }, n[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && t.grep(this._mergers, function(t) {
                    return t > 1
                }).length > 0)
                for (e = 0, i = this._coordinates.length; i > e; e++) n.width = Math.abs(this._coordinates[e]) - Math.abs(this._coordinates[e - 1] || 0) - this.settings.margin, this.$stage.children().eq(e).css(n);
            else this.$stage.children().css(n)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current && this.reset(this.$stage.children().index(t.current))
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var t, e, i, s, n = this.settings.rtl ? 1 : -1,
                o = 2 * this.settings.stagePadding,
                r = this.coordinates(this.current()) + o,
                a = r + this.width() * n,
                h = [];
            for (i = 0, s = this._coordinates.length; s > i; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * n, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && h.push(i);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + h.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
    }], n.prototype.initialize = function() {
        if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
            var e, i, n;
            if (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : s, n = this.$element.children(i).width(), e.length && 0 >= n) return this.preloadAutoWidthImages(e), !1
        }
        this.$element.addClass("owl-loading"), this.$stage = t("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
    }, n.prototype.setup = function() {
        var e = this.viewport(),
            i = this.options.responsive,
            s = -1,
            n = null;
        i ? (t.each(i, function(t) {
            e >= t && t > s && (s = Number(t))
        }), n = t.extend({}, this.options, i[s]), delete n.responsive, n.responsiveClass && this.$element.attr("class", function(t, e) {
            return e.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + s)) : n = t.extend({}, this.options), (null === this.settings || this._breakpoint !== s) && (this.trigger("change", {
            property: {
                name: "settings",
                value: n
            }
        }), this._breakpoint = s, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }, n.prototype.optionsLogic = function() {
        this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, n.prototype.prepare = function(e) {
        var i = this.trigger("prepare", {
            content: e
        });
        return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(e)), this.trigger("prepared", {
            content: i.data
        }), i.data
    }, n.prototype.update = function() {
        for (var e = 0, i = this._pipe.length, s = t.proxy(function(t) {
                return this[t]
            }, this._invalidated), n = {}; i > e;)(this._invalidated.all || t.grep(this._pipe[e].filter, s).length > 0) && this._pipe[e].run(n), e++;
        this._invalidated = {}
    }, n.prototype.width = function(t) {
        switch (t = t || n.Width.Default) {
            case n.Width.Inner:
            case n.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, n.prototype.refresh = function() {
        if (0 === this._items.length) return !1;
        (new Date).getTime();
        this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = e.orientation, this.watchVisibility(), this.trigger("refreshed")
    }, n.prototype.eventsCall = function() {
        this.e._onDragStart = t.proxy(function(t) {
            this.onDragStart(t)
        }, this), this.e._onDragMove = t.proxy(function(t) {
            this.onDragMove(t)
        }, this), this.e._onDragEnd = t.proxy(function(t) {
            this.onDragEnd(t)
        }, this), this.e._onResize = t.proxy(function(t) {
            this.onResize(t)
        }, this), this.e._transitionEnd = t.proxy(function(t) {
            this.transitionEnd(t)
        }, this), this.e._preventClick = t.proxy(function(t) {
            this.preventClick(t)
        }, this)
    }, n.prototype.onThrottledResize = function() {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    }, n.prototype.onResize = function() {
        return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
    }, n.prototype.eventsRouter = function(t) {
        var e = t.type;
        "mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t)
    }, n.prototype.internalEvents = function() {
        var i = (c(), d());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", t.proxy(function(t) {
            this.eventsRouter(t)
        }, this)), this.$stage.on("dragstart", function() {
            return !1
        }), this.$stage.get(0).onselectstart = function() {
            return !1
        }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !i && this.$stage.on("touchstart touchcancel", t.proxy(function(t) {
            this.eventsRouter(t)
        }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(e, "resize", t.proxy(this.onThrottledResize, this))
    }, n.prototype.onDragStart = function(s) {
        var n, r, a, h;
        if (n = s.originalEvent || s || e.event, 3 === n.which || this.state.isTouch) return !1;
        if ("mousedown" === n.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, r = o(n).x, a = o(n).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) h = this.getTransformProperty(), this.drag.offsetX = h, this.animate(h), this.state.inMotion = !0;
        else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
        this.drag.startX = r - this.drag.offsetX, this.drag.startY = a - this.drag.offsetY, this.drag.start = r - this.drag.startX, this.drag.targetEl = n.target || n.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), t(i).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", t.proxy(function(t) {
            this.eventsRouter(t)
        }, this))
    }, n.prototype.onDragMove = function(t) {
        var i, n, r, a, h, l;
        this.state.isTouch && (this.state.isScrolling || (i = t.originalEvent || t || e.event, n = o(i).x, r = o(i).y, this.drag.currentX = n - this.drag.startX, this.drag.currentY = r - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (a = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), h = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), l = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, a + l), h + l)), (this.drag.distance > 8 || this.drag.distance < -8) && (i.preventDefault !== s ? i.preventDefault() : i.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
    }, n.prototype.onDragEnd = function(e) {
        var s, n, o;
        if (this.state.isTouch) {
            if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime(), s = this.drag.endTime - this.drag.startTime, n = Math.abs(this.drag.distance), (n > 3 || s > 300) && this.removeClick(this.drag.targetEl), o = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(o), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(o) || this.transitionEnd(), this.drag.distance = 0, t(i).off(".owl.dragEvents")
        }
    }, n.prototype.removeClick = function(i) {
        this.drag.targetEl = i, t(i).on("click.preventClick", this.e._preventClick), e.setTimeout(function() {
            t(i).off("click.preventClick")
        }, 300)
    }, n.prototype.preventClick = function(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick")
    }, n.prototype.getTransformProperty = function() {
        var t, i;
        return t = e.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), t = t.replace(/matrix(3d)?\(|\)/g, "").split(","), i = 16 === t.length, i !== !0 ? t[4] : t[12]
    }, n.prototype.closest = function(e) {
        var i = -1,
            s = 30,
            n = this.width(),
            o = this.coordinates();
        return this.settings.freeDrag || t.each(o, t.proxy(function(t, r) {
            return e > r - s && r + s > e ? i = t : this.op(e, "<", r) && this.op(e, ">", o[t + 1] || r - n) && (i = "left" === this.state.direction ? t + 1 : t), -1 === i
        }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (i = e = this.maximum())), i
    }, n.prototype.animate = function(e) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px, 0px)",
            transition: this.speed() / 1e3 + "s"
        }) : this.state.isTouch ? this.$stage.css({
            left: e + "px"
        }) : this.$stage.animate({
            left: e
        }, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function() {
            this.state.inMotion && this.transitionEnd()
        }, this))
    }, n.prototype.current = function(t) {
        if (t === s) return this._current;
        if (0 === this._items.length) return s;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {
                property: {
                    name: "position",
                    value: t
                }
            });
            e.data !== s && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, n.prototype.invalidate = function(t) {
        this._invalidated[t] = !0
    }, n.prototype.reset = function(t) {
        t = this.normalize(t), t !== s && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, n.prototype.normalize = function(e, i) {
        var n = i ? this._items.length : this._items.length + this._clones.length;
        return !t.isNumeric(e) || 1 > n ? s : e = this._clones.length ? (e % n + n) % n : Math.max(this.minimum(i), Math.min(this.maximum(i), e))
    }, n.prototype.relative = function(t) {
        return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0)
    }, n.prototype.maximum = function(t) {
        var e, i, s, n = 0,
            o = this.settings;
        if (t) return this._items.length - 1;
        if (!o.loop && o.center) e = this._items.length - 1;
        else if (o.loop || o.center)
            if (o.loop || o.center) e = this._items.length + o.items;
            else {
                if (!o.autoWidth && !o.merge) throw "Can not detect maximum absolute position.";
                for (revert = o.rtl ? 1 : -1, i = this.$stage.width() - this.$element.width();
                    (s = this.coordinates(n)) && !(s * revert >= i);) e = ++n
            }
        else e = this._items.length - o.items;
        return e
    }, n.prototype.minimum = function(t) {
        return t ? 0 : this._clones.length / 2
    }, n.prototype.items = function(t) {
        return t === s ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, n.prototype.mergers = function(t) {
        return t === s ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, n.prototype.clones = function(e) {
        var i = this._clones.length / 2,
            n = i + this._items.length,
            o = function(t) {
                return t % 2 === 0 ? n + t / 2 : i - (t + 1) / 2
            };
        return e === s ? t.map(this._clones, function(t, e) {
            return o(e)
        }) : t.map(this._clones, function(t, i) {
            return t === e ? o(i) : null
        })
    }, n.prototype.speed = function(t) {
        return t !== s && (this._speed = t), this._speed
    }, n.prototype.coordinates = function(e) {
        var i = null;
        return e === s ? t.map(this._coordinates, t.proxy(function(t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (i = this._coordinates[e], i += (this.width() - i + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : i = this._coordinates[e - 1] || 0, i)
    }, n.prototype.duration = function(t, e, i) {
        return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, n.prototype.to = function(i, s) {
        if (this.settings.loop) {
            var n = i - this.relative(this.current()),
                o = this.current(),
                r = this.current(),
                a = this.current() + n,
                h = 0 > r - a ? !0 : !1,
                l = this._clones.length + this._items.length;
            a < this.settings.items && h === !1 ? (o = r + this._items.length, this.reset(o)) : a >= l - this.settings.items && h === !0 && (o = r - this._items.length, this.reset(o)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function() {
                this.speed(this.duration(this.current(), o + n, s)), this.current(o + n), this.update()
            }, this), 30)
        } else this.speed(this.duration(this.current(), i, s)), this.current(i), this.update()
    }, n.prototype.next = function(t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, n.prototype.prev = function(t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, n.prototype.transitionEnd = function(t) {
        return t !== s && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
    }, n.prototype.viewport = function() {
        var s;
        if (this.options.responsiveBaseElement !== e) s = t(this.options.responsiveBaseElement).width();
        else if (e.innerWidth) s = e.innerWidth;
        else {
            if (!i.documentElement || !i.documentElement.clientWidth) throw "Can not detect viewport width.";
            s = i.documentElement.clientWidth
        }
        return s
    }, n.prototype.replace = function(e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
            return 1 === this.nodeType
        }).each(t.proxy(function(t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, n.prototype.add = function(t, e) {
        e = e === s ? this._items.length : this.normalize(e, !0), this.trigger("add", {
            content: t,
            position: e
        }), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
            content: t,
            position: e
        })
    }, n.prototype.remove = function(t) {
        t = this.normalize(t, !0), t !== s && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, n.prototype.addTriggerableEvents = function() {
        var e = t.proxy(function(e, i) {
            return t.proxy(function(t) {
                t.relatedTarget !== this && (this.suppress([i]), e.apply(this, [].slice.call(arguments, 1)), this.release([i]))
            }, this)
        }, this);
        t.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, t.proxy(function(t, i) {
            this.$element.on(t + ".owl.carousel", e(i, t + ".owl.carousel"))
        }, this))
    }, n.prototype.watchVisibility = function() {
        function i(t) {
            return t.offsetWidth > 0 && t.offsetHeight > 0
        }

        function s() {
            i(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile))
        }
        i(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(s, this), 500))
    }, n.prototype.preloadAutoWidthImages = function(e) {
        var i, s, n, o;
        i = 0, s = this, e.each(function(r, a) {
            n = t(a), o = new Image, o.onload = function() {
                i++, n.attr("src", o.src), n.css("opacity", 1), i >= e.length && (s.state.imagesLoaded = !0, s.initialize())
            }, o.src = n.attr("src") || n.attr("data-src") || n.attr("data-src-retina")
        })
    }, n.prototype.destroy = function() {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && t(e).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        for (var s in this._plugins) this._plugins[s].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), t(i).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() {
            return !1
        })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
    }, n.prototype.op = function(t, e, i) {
        var s = this.settings.rtl;
        switch (e) {
            case "<":
                return s ? t > i : i > t;
            case ">":
                return s ? i > t : t > i;
            case ">=":
                return s ? i >= t : t >= i;
            case "<=":
                return s ? t >= i : i >= t
        }
    }, n.prototype.on = function(t, e, i, s) {
        t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i)
    }, n.prototype.off = function(t, e, i, s) {
        t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i)
    }, n.prototype.trigger = function(e, i, s) {
        var n = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            o = t.camelCase(t.grep(["on", e, s], function(t) {
                return t
            }).join("-").toLowerCase()),
            r = t.Event([e, "owl", s || "carousel"].join(".").toLowerCase(), t.extend({
                relatedTarget: this
            }, n, i));
        return this._supress[e] || (t.each(this._plugins, function(t, e) {
            e.onTrigger && e.onTrigger(r)
        }), this.$element.trigger(r), this.settings && "function" == typeof this.settings[o] && this.settings[o].apply(this, r)), r
    }, n.prototype.suppress = function(e) {
        t.each(e, t.proxy(function(t, e) {
            this._supress[e] = !0
        }, this))
    }, n.prototype.release = function(e) {
        t.each(e, t.proxy(function(t, e) {
            delete this._supress[e]
        }, this))
    }, n.prototype.browserSupport = function() {
        if (this.support3d = l(), this.support3d) {
            this.transformVendor = h();
            var t = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = t[a()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = e.orientation
    }, t.fn.owlCarousel = function(e) {
        return this.each(function() {
            t(this).data("owlCarousel") || t(this).data("owlCarousel", new n(this, e))
        })
    }, t.fn.owlCarousel.Constructor = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel": t.proxy(function(e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                    for (var i = this._core.settings, s = i.center && Math.ceil(i.items / 2) || i.items, n = i.center && -1 * s || 0, o = (e.property && e.property.value || this._core.current()) + n, r = this._core.clones().length, a = t.proxy(function(t, e) {
                            this.load(e)
                        }, this); n++ < s;) this.load(r / 2 + this._core.relative(o)), r && t.each(this._core.clones(this._core.relative(o++)), a)
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    n.Defaults = {
        lazyLoad: !1
    }, n.prototype.load = function(i) {
        var s = this._core.$stage.children().eq(i),
            n = s && s.find(".owl-lazy");
        !n || t.inArray(s.get(0), this._loaded) > -1 || (n.each(t.proxy(function(i, s) {
            var n, o = t(s),
                r = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");
            this._core.trigger("load", {
                element: o,
                url: r
            }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function() {
                o.css("opacity", 1), this._core.trigger("loaded", {
                    element: o,
                    url: r
                }, "lazy")
            }, this)).attr("src", r) : (n = new Image, n.onload = t.proxy(function() {
                o.css({
                    "background-image": "url(" + r + ")",
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: o,
                    url: r
                }, "lazy")
            }, this), n.src = r)
        }, this)), this._loaded.push(s.get(0)))
    }, n.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this._core = e, this._handlers = {
            "initialized.owl.carousel": t.proxy(function() {
                this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                this._core.settings.autoHeight && "position" == t.property.name && this.update()
            }, this),
            "loaded.owl.lazy": t.proxy(function(t) {
                this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    n.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, n.prototype.update = function() {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    }, n.prototype.destroy = function() {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.swapping = !0, this.previous = s, this.next = s, this.handlers = {
            "change.owl.carousel": t.proxy(function(t) {
                "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                this.swapping = "translated" == t.type
            }, this),
            "translate.owl.carousel": t.proxy(function(t) {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    n.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, n.prototype.swap = function() {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var e, i = t.proxy(this.clear, this),
                s = this.core.$stage.children().eq(this.previous),
                n = this.core.$stage.children().eq(this.next),
                o = this.core.settings.animateIn,
                r = this.core.settings.animateOut;
            this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), s.css({
                left: e + "px"
            }).addClass("animated owl-animated-out").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)), o && n.addClass("animated owl-animated-in").addClass(o).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i))
        }
    }, n.prototype.clear = function(e) {
        t(e.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
    }, n.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": t.proxy(function() {
                this.autoplay()
            }, this),
            "play.owl.autoplay": t.proxy(function(t, e, i) {
                this.play(e, i)
            }, this),
            "stop.owl.autoplay": t.proxy(function() {
                this.stop()
            }, this),
            "mouseover.owl.autoplay": t.proxy(function() {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this),
            "mouseleave.owl.autoplay": t.proxy(function() {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    n.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, n.prototype.autoplay = function() {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function() {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval)
    }, n.prototype.play = function(t, s) {
        return i.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }, n.prototype.stop = function() {
        e.clearInterval(this.interval)
    }, n.prototype.pause = function() {
        e.clearInterval(this.interval)
    }, n.prototype.destroy = function() {
        var t, i;
        e.clearInterval(this.interval);
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    "use strict";
    var n = function(e) {
        this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy(function(e) {
                this._core.settings.dotsData && this._templates.push(t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot"))
            }, this),
            "add.owl.carousel": t.proxy(function(e) {
                this._core.settings.dotsData && this._templates.splice(e.position, 0, t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot"))
            }, this),
            "remove.owl.carousel prepared.owl.carousel": t.proxy(function(t) {
                this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this),
            "change.owl.carousel": t.proxy(function(t) {
                if ("position" == t.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var e = this._core.current(),
                        i = this._core.maximum(),
                        s = this._core.minimum();
                    t.data = t.property.value > i ? e >= i ? s : i : t.property.value < s ? i : t.property.value
                }
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                "position" == t.property.name && this.draw()
            }, this),
            "refreshed.owl.carousel": t.proxy(function() {
                this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    n.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
    }, n.prototype.initialize = function() {
        var e, i, s = this._core.settings;
        s.dotsData || (this._templates = [t("<div>").addClass(s.dotClass).append(t("<span>")).prop("outerHTML")]), s.navContainer && s.dotsContainer || (this._controls.$container = t("<div>").addClass(s.controlsClass).appendTo(this.$element)), this._controls.$indicators = s.dotsContainer ? t(s.dotsContainer) : t("<div>").hide().addClass(s.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", t.proxy(function(e) {
            var i = t(e.target).parent().is(this._controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();
            e.preventDefault(),
                this.to(i, s.dotsSpeed)
        }, this)), e = s.navContainer ? t(s.navContainer) : t("<div>").addClass(s.navContainerClass).prependTo(this._controls.$container), this._controls.$next = t("<" + s.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(s.navClass[0]).html(s.navText[0]).hide().prependTo(e).on("click", t.proxy(function(t) {
            this.prev(s.navSpeed)
        }, this)), this._controls.$next.addClass(s.navClass[1]).html(s.navText[1]).hide().appendTo(e).on("click", t.proxy(function(t) {
            this.next(s.navSpeed)
        }, this));
        for (i in this._overrides) this._core[i] = t.proxy(this[i], this)
    }, n.prototype.destroy = function() {
        var t, e, i, s;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (s in this.overides) this._core[s] = this._overrides[s];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, n.prototype.update = function() {
        var t, e, i, s = this._core.settings,
            n = this._core.clones().length / 2,
            o = n + this._core.items().length,
            r = s.center || s.autoWidth || s.dotData ? 1 : s.dotsEach || s.items;
        if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy)
            for (this._pages = [], t = n, e = 0, i = 0; o > t; t++)(e >= r || 0 === e) && (this._pages.push({
                start: t - n,
                end: t - n + r - 1
            }), e = 0, ++i), e += this._core.mergers(this._core.relative(t))
    }, n.prototype.draw = function() {
        var e, i, s = "",
            n = this._core.settings,
            o = (this._core.$stage.children(), this._core.relative(this._core.current()));
        if (!n.nav || n.loop || n.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= o), this._controls.$next.toggleClass("disabled", o >= this._core.maximum())), this._controls.$previous.toggle(n.nav), this._controls.$next.toggle(n.nav), n.dots) {
            if (e = this._pages.length - this._controls.$indicators.children().length, n.dotData && 0 !== e) {
                for (i = 0; i < this._controls.$indicators.children().length; i++) s += this._templates[this._core.relative(i)];
                this._controls.$indicators.html(s)
            } else e > 0 ? (s = new Array(e + 1).join(this._templates[0]), this._controls.$indicators.append(s)) : 0 > e && this._controls.$indicators.children().slice(e).remove();
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(t.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(n.dots)
    }, n.prototype.onTrigger = function(e) {
        var i = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items)
        }
    }, n.prototype.current = function() {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, function(t) {
            return t.start <= e && t.end >= e
        }).pop()
    }, n.prototype.getPosition = function(e) {
        var i, s, n = this._core.settings;
        return "page" == n.slideBy ? (i = t.inArray(this.current(), this._pages), s = this._pages.length, e ? ++i : --i, i = this._pages[(i % s + s) % s].start) : (i = this._core.relative(this._core.current()), s = this._core.items().length, e ? i += n.slideBy : i -= n.slideBy), i
    }, n.prototype.next = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, n.prototype.prev = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, n.prototype.to = function(e, i, s) {
        var n;
        s ? t.proxy(this._overrides.to, this._core)(e, i) : (n = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % n + n) % n].start, i))
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    "use strict";
    var n = function(i) {
        this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy(function() {
                "URLHash" == this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                this._hashes[i] = e.content
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function() {
            var t = e.location.hash.substring(1),
                i = this._core.$stage.children(),
                s = this._hashes[t] && i.index(this._hashes[t]) || 0;
            return t ? void this._core.to(s, !1, !0) : !1
        }, this))
    };
    n.Defaults = {
        URLhashListener: !1
    }, n.prototype.destroy = function() {
        var i, s;
        t(e).off("hashchange.owl.navigation");
        for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (s in Object.getOwnPropertyNames(this)) "function" != typeof this[s] && (this[s] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = n
}(window.Zepto || window.jQuery, window, document);


/*!
 * Packery layout mode PACKAGED v1.1.3
 * sub-classes Packery
 * http://packery.metafizzy.co
 */

! function(a) {
    function b(a) {
        return new RegExp("(^|\\s+)" + a + "(\\s+|$)")
    }

    function c(a, b) {
        var c = d(a, b) ? f : e;
        c(a, b)
    }
    var d, e, f;
    "classList" in document.documentElement ? (d = function(a, b) {
        return a.classList.contains(b)
    }, e = function(a, b) {
        a.classList.add(b)
    }, f = function(a, b) {
        a.classList.remove(b)
    }) : (d = function(a, c) {
        return b(c).test(a.className)
    }, e = function(a, b) {
        d(a, b) || (a.className = a.className + " " + b)
    }, f = function(a, c) {
        a.className = a.className.replace(b(c), " ")
    });
    var g = {
        hasClass: d,
        addClass: e,
        removeClass: f,
        toggleClass: c,
        has: d,
        add: e,
        remove: f,
        toggle: c
    };
    "function" == typeof define && define.amd ? define("classie/classie", g) : "object" == typeof exports ? module.exports = g : a.classie = g
}(window),
function(a, b) {
    "function" == typeof define && define.amd ? define("packery/js/rect", b) : "object" == typeof exports ? module.exports = b() : (a.Packery = a.Packery || {}, a.Packery.Rect = b())
}(window, function() {
    function a(b) {
        for (var c in a.defaults) this[c] = a.defaults[c];
        for (c in b) this[c] = b[c]
    }
    var b = window.Packery = function() {};
    return b.Rect = a, a.defaults = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }, a.prototype.contains = function(a) {
        var b = a.width || 0,
            c = a.height || 0;
        return this.x <= a.x && this.y <= a.y && this.x + this.width >= a.x + b && this.y + this.height >= a.y + c
    }, a.prototype.overlaps = function(a) {
        var b = this.x + this.width,
            c = this.y + this.height,
            d = a.x + a.width,
            e = a.y + a.height;
        return this.x < d && b > a.x && this.y < e && c > a.y
    }, a.prototype.getMaximalFreeRects = function(b) {
        if (!this.overlaps(b)) return !1;
        var c, d = [],
            e = this.x + this.width,
            f = this.y + this.height,
            g = b.x + b.width,
            h = b.y + b.height;
        return this.y < b.y && (c = new a({
            x: this.x,
            y: this.y,
            width: this.width,
            height: b.y - this.y
        }), d.push(c)), e > g && (c = new a({
            x: g,
            y: this.y,
            width: e - g,
            height: this.height
        }), d.push(c)), f > h && (c = new a({
            x: this.x,
            y: h,
            width: this.width,
            height: f - h
        }), d.push(c)), this.x < b.x && (c = new a({
            x: this.x,
            y: this.y,
            width: b.x - this.x,
            height: this.height
        }), d.push(c)), d
    }, a.prototype.canFit = function(a) {
        return this.width >= a.width && this.height >= a.height
    }, a
}),
function(a, b) {
    if ("function" == typeof define && define.amd) define("packery/js/packer", ["./rect"], b);
    else if ("object" == typeof exports) module.exports = b(require("./rect"));
    else {
        var c = a.Packery = a.Packery || {};
        c.Packer = b(c.Rect)
    }
}(window, function(a) {
    function b(a, b, c) {
        this.width = a || 0, this.height = b || 0, this.sortDirection = c || "downwardLeftToRight", this.reset()
    }
    b.prototype.reset = function() {
        this.spaces = [], this.newSpaces = [];
        var b = new a({
            x: 0,
            y: 0,
            width: this.width,
            height: this.height
        });
        this.spaces.push(b), this.sorter = c[this.sortDirection] || c.downwardLeftToRight
    }, b.prototype.pack = function(a) {
        for (var b = 0, c = this.spaces.length; c > b; b++) {
            var d = this.spaces[b];
            if (d.canFit(a)) {
                this.placeInSpace(a, d);
                break
            }
        }
    }, b.prototype.placeInSpace = function(a, b) {
        a.x = b.x, a.y = b.y, this.placed(a)
    }, b.prototype.placed = function(a) {
        for (var b = [], c = 0, d = this.spaces.length; d > c; c++) {
            var e = this.spaces[c],
                f = e.getMaximalFreeRects(a);
            f ? b.push.apply(b, f) : b.push(e)
        }
        this.spaces = b, this.mergeSortSpaces()
    }, b.prototype.mergeSortSpaces = function() {
        b.mergeRects(this.spaces), this.spaces.sort(this.sorter)
    }, b.prototype.addSpace = function(a) {
        this.spaces.push(a), this.mergeSortSpaces()
    }, b.mergeRects = function(a) {
        for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b];
            if (d) {
                var e = a.slice(0);
                e.splice(b, 1);
                for (var f = 0, g = 0, h = e.length; h > g; g++) {
                    var i = e[g],
                        j = b > g ? 0 : 1;
                    d.contains(i) && (a.splice(g + j - f, 1), f++)
                }
            }
        }
        return a
    };
    var c = {
        downwardLeftToRight: function(a, b) {
            return a.y - b.y || a.x - b.x
        },
        rightwardTopToBottom: function(a, b) {
            return a.x - b.x || a.y - b.y
        }
    };
    return b
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("packery/js/item", ["get-style-property/get-style-property", "outlayer/outlayer", "./rect"], b) : "object" == typeof exports ? module.exports = b(require("desandro-get-style-property"), require("outlayer"), require("./rect")) : a.Packery.Item = b(a.getStyleProperty, a.Outlayer, a.Packery.Rect)
}(window, function(a, b, c) {
    var d = a("transform"),
        e = function() {
            b.Item.apply(this, arguments)
        };
    e.prototype = new b.Item;
    var f = e.prototype._create;
    return e.prototype._create = function() {
        f.call(this), this.rect = new c, this.placeRect = new c
    }, e.prototype.dragStart = function() {
        this.getPosition(), this.removeTransitionStyles(), this.isTransitioning && d && (this.element.style[d] = "none"), this.getSize(), this.isPlacing = !0, this.needsPositioning = !1, this.positionPlaceRect(this.position.x, this.position.y), this.isTransitioning = !1, this.didDrag = !1
    }, e.prototype.dragMove = function(a, b) {
        this.didDrag = !0;
        var c = this.layout.size;
        a -= c.paddingLeft, b -= c.paddingTop, this.positionPlaceRect(a, b)
    }, e.prototype.dragStop = function() {
        this.getPosition();
        var a = this.position.x != this.placeRect.x,
            b = this.position.y != this.placeRect.y;
        this.needsPositioning = a || b, this.didDrag = !1
    }, e.prototype.positionPlaceRect = function(a, b, c) {
        this.placeRect.x = this.getPlaceRectCoord(a, !0), this.placeRect.y = this.getPlaceRectCoord(b, !1, c)
    }, e.prototype.getPlaceRectCoord = function(a, b, c) {
        var d = b ? "Width" : "Height",
            e = this.size["outer" + d],
            f = this.layout[b ? "columnWidth" : "rowHeight"],
            g = this.layout.size["inner" + d];
        b || (g = Math.max(g, this.layout.maxY), this.layout.rowHeight || (g -= this.layout.gutter));
        var h;
        if (f) {
            f += this.layout.gutter, g += b ? this.layout.gutter : 0, a = Math.round(a / f);
            var i;
            i = this.layout.options.isHorizontal ? b ? "ceil" : "floor" : b ? "floor" : "ceil";
            var j = Math[i](g / f);
            j -= Math.ceil(e / f), h = j
        } else h = g - e;
        return a = c ? a : Math.min(a, h), a *= f || 1, Math.max(0, a)
    }, e.prototype.copyPlaceRectPosition = function() {
        this.rect.x = this.placeRect.x, this.rect.y = this.placeRect.y
    }, e.prototype.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this])
    }, e
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("packery/js/packery", ["classie/classie", "get-size/get-size", "outlayer/outlayer", "./rect", "./packer", "./item"], b) : "object" == typeof exports ? module.exports = b(require("desandro-classie"), require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : a.Packery = b(a.classie, a.getSize, a.Outlayer, a.Packery.Rect, a.Packery.Packer, a.Packery.Item)
}(window, function(a, b, c, d, e, f) {
    function g(a, b) {
        return a.position.y - b.position.y || a.position.x - b.position.x
    }

    function h(a, b) {
        return a.position.x - b.position.x || a.position.y - b.position.y
    }
    d.prototype.canFit = function(a) {
        return this.width >= a.width - 1 && this.height >= a.height - 1
    };
    var i = c.create("packery");
    return i.Item = f, i.prototype._create = function() {
        c.prototype._create.call(this), this.packer = new e, this.stamp(this.options.stamped);
        var a = this;
        this.handleDraggabilly = {
            dragStart: function() {
                a.itemDragStart(this.element)
            },
            dragMove: function() {
                a.itemDragMove(this.element, this.position.x, this.position.y)
            },
            dragEnd: function() {
                a.itemDragEnd(this.element)
            }
        }, this.handleUIDraggable = {
            start: function(b) {
                a.itemDragStart(b.currentTarget)
            },
            drag: function(b, c) {
                a.itemDragMove(b.currentTarget, c.position.left, c.position.top)
            },
            stop: function(b) {
                a.itemDragEnd(b.currentTarget)
            }
        }
    }, i.prototype._resetLayout = function() {
        this.getSize(), this._getMeasurements();
        var a = this.packer;
        this.options.isHorizontal ? (a.width = Number.POSITIVE_INFINITY, a.height = this.size.innerHeight + this.gutter, a.sortDirection = "rightwardTopToBottom") : (a.width = this.size.innerWidth + this.gutter, a.height = Number.POSITIVE_INFINITY, a.sortDirection = "downwardLeftToRight"), a.reset(), this.maxY = 0, this.maxX = 0
    }, i.prototype._getMeasurements = function() {
        this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
    }, i.prototype._getItemLayoutPosition = function(a) {
        return this._packItem(a), a.rect
    }, i.prototype._packItem = function(a) {
        this._setRectSize(a.element, a.rect), this.packer.pack(a.rect), this._setMaxXY(a.rect)
    }, i.prototype._setMaxXY = function(a) {
        this.maxX = Math.max(a.x + a.width, this.maxX), this.maxY = Math.max(a.y + a.height, this.maxY)
    }, i.prototype._setRectSize = function(a, c) {
        var d = b(a),
            e = d.outerWidth,
            f = d.outerHeight;
        (e || f) && (e = this._applyGridGutter(e, this.columnWidth), f = this._applyGridGutter(f, this.rowHeight)), c.width = Math.min(e, this.packer.width), c.height = Math.min(f, this.packer.height)
    }, i.prototype._applyGridGutter = function(a, b) {
        if (!b) return a + this.gutter;
        b += this.gutter;
        var c = a % b,
            d = c && 1 > c ? "round" : "ceil";
        return a = Math[d](a / b) * b
    }, i.prototype._getContainerSize = function() {
        return this.options.isHorizontal ? {
            width: this.maxX - this.gutter
        } : {
            height: this.maxY - this.gutter
        }
    }, i.prototype._manageStamp = function(a) {
        var b, c = this.getItem(a);
        if (c && c.isPlacing) b = c.placeRect;
        else {
            var e = this._getElementOffset(a);
            b = new d({
                x: this.options.isOriginLeft ? e.left : e.right,
                y: this.options.isOriginTop ? e.top : e.bottom
            })
        }
        this._setRectSize(a, b), this.packer.placed(b), this._setMaxXY(b)
    }, i.prototype.sortItemsByPosition = function() {
        var a = this.options.isHorizontal ? h : g;
        this.items.sort(a)
    }, i.prototype.fit = function(a, b, c) {
        var d = this.getItem(a);
        d && (this._getMeasurements(), this.stamp(d.element), d.getSize(), d.isPlacing = !0, b = void 0 === b ? d.rect.x : b, c = void 0 === c ? d.rect.y : c, d.positionPlaceRect(b, c, !0), this._bindFitEvents(d), d.moveTo(d.placeRect.x, d.placeRect.y), this.layout(), this.unstamp(d.element), this.sortItemsByPosition(), d.isPlacing = !1, d.copyPlaceRectPosition())
    }, i.prototype._bindFitEvents = function(a) {
        function b() {
            d++, 2 == d && c.emitEvent("fitComplete", [a])
        }
        var c = this,
            d = 0;
        a.on("layout", function() {
            return b(), !0
        }), this.on("layoutComplete", function() {
            return b(), !0
        })
    }, i.prototype.resize = function() {
        var a = b(this.element),
            c = this.size && a,
            d = this.options.isHorizontal ? "innerHeight" : "innerWidth";
        c && a[d] == this.size[d] || this.layout()
    }, i.prototype.itemDragStart = function(a) {
        this.stamp(a);
        var b = this.getItem(a);
        b && b.dragStart()
    }, i.prototype.itemDragMove = function(a, b, c) {
        function d() {
            f.layout(), delete f.dragTimeout
        }
        var e = this.getItem(a);
        e && e.dragMove(b, c);
        var f = this;
        this.clearDragTimeout(), this.dragTimeout = setTimeout(d, 40)
    }, i.prototype.clearDragTimeout = function() {
        this.dragTimeout && clearTimeout(this.dragTimeout)
    }, i.prototype.itemDragEnd = function(b) {
        var c, d = this.getItem(b);
        if (d && (c = d.didDrag, d.dragStop()), !d || !c && !d.needsPositioning) return void this.unstamp(b);
        a.add(d.element, "is-positioning-post-drag");
        var e = this._getDragEndLayoutComplete(b, d);
        d.needsPositioning ? (d.on("layout", e), d.moveTo(d.placeRect.x, d.placeRect.y)) : d && d.copyPlaceRectPosition(), this.clearDragTimeout(), this.on("layoutComplete", e), this.layout()
    }, i.prototype._getDragEndLayoutComplete = function(b, c) {
        var d = c && c.needsPositioning,
            e = 0,
            f = d ? 2 : 1,
            g = this;
        return function() {
            return e++, e != f ? !0 : (c && (a.remove(c.element, "is-positioning-post-drag"), c.isPlacing = !1, c.copyPlaceRectPosition()), g.unstamp(b), g.sortItemsByPosition(), d && g.emitEvent("dragItemPositioned", [c]), !0)
        }
    }, i.prototype.bindDraggabillyEvents = function(a) {
        a.on("dragStart", this.handleDraggabilly.dragStart), a.on("dragMove", this.handleDraggabilly.dragMove), a.on("dragEnd", this.handleDraggabilly.dragEnd)
    }, i.prototype.bindUIDraggableEvents = function(a) {
        a.on("dragstart", this.handleUIDraggable.start).on("drag", this.handleUIDraggable.drag).on("dragstop", this.handleUIDraggable.stop)
    }, i.Rect = d, i.Packer = e, i
}),
function(a, b) {
    "function" == typeof define && define.amd ? define(["isotope/js/layout-mode", "packery/js/packery", "get-size/get-size"], b) : "object" == typeof exports ? module.exports = b(require("isotope-layout/js/layout-mode"), require("packery"), require("get-size")) : b(a.Isotope.LayoutMode, a.Packery, a.getSize)
}(window, function(a, b, c) {
    function d(a, b) {
        for (var c in b) a[c] = b[c];
        return a
    }
    var e = a.create("packery"),
        f = e.prototype._getElementOffset,
        g = e.prototype._getMeasurement;
    d(e.prototype, b.prototype), e.prototype._getElementOffset = f, e.prototype._getMeasurement = g;
    var h = e.prototype._resetLayout;
    e.prototype._resetLayout = function() {
        this.packer = this.packer || new b.Packer, h.apply(this, arguments)
    };
    var i = e.prototype._getItemLayoutPosition;
    e.prototype._getItemLayoutPosition = function(a) {
        return a.rect = a.rect || new b.Rect, i.call(this, a)
    };
    var j = e.prototype._manageStamp;
    return e.prototype._manageStamp = function() {
        this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, j.apply(this, arguments)
    }, e.prototype.needsResizeLayout = function() {
        var a = c(this.element),
            b = this.size && a,
            d = this.options.isHorizontal ? "innerHeight" : "innerWidth";
        return b && a[d] != this.size[d]
    }, e
});

/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.11
 *
 * Requires: jQuery 1.2.2+
 */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
    function b(b) {
        var g = b || window.event,
            h = i.call(arguments, 1),
            j = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;
        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top
            }
            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }

    function c() {
        f = null
    }

    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }
    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.11",
        setup: function() {
            if (this.addEventListener)
                for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
            else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
            else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(b) {
            var c = a(b)["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            return c.length || (c = a("body")), parseInt(c.css("fontSize"), 10)
        },
        getPageHeight: function(b) {
            return a(b).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
});



/**
 * jQuery.share - social media sharing plugin
 * ---
 * @author Carol Skelly (http://in1.com)
 * @version 1.0
 * @license MIT license (http://opensource.org/licenses/mit-license.php)
 * ---
 */

! function(t, e) {
    var s = e.document;
    t.fn.share = function(i) {
        var r = {
                init: function(i) {
                    this.share.settings = t.extend({}, this.share.defaults, i);
                    var r = (this.share.settings, this.share.settings.networks),
                        o = this.share.settings.theme,
                        a = this.share.settings.orientation,
                        u = this.share.settings.affix,
                        h = this.share.settings.margin,
                        l = this.share.settings.title || t(s).attr("title"),
                        c = this.share.settings.urlToShare || t(location).attr("href"),
                        p = "";
                    return t.each(t(s).find('meta[name="description"]'), function(e, s) {
                        p = t(s).attr("content")
                    }), this.each(function() {
                        var s, i = t(this),
                            m = i.attr("id"),
                            d = encodeURIComponent(c),
                            f = l.replace("|", ""),
                            g = p.substring(0, 250);
                        r.forEach(function(e) {
                            s = n.networkDefs[e].url, s = s.replace("|u|", d).replace("|t|", f).replace("|d|", g).replace("|140|", f.substring(0, 130)), t("<a href='" + s + "' title='Share this page on " + e + "' class='pop share-" + o + " share-" + o + "-" + e + "'></a>").appendTo(i)
                        }), t("#" + m + ".share-" + o).css("margin", h), "horizontal" != a ? t("#" + m + " a.share-" + o).css("display", "block") : t("#" + m + " a.share-" + o).css("display", "inline-block"), "undefined" != typeof u && (i.addClass("share-affix"), -1 != u.indexOf("right") ? (i.css("left", "auto"), i.css("right", "0px"), -1 != u.indexOf("center") && i.css("top", "40%")) : -1 != u.indexOf("left center") && i.css("top", "40%"), -1 != u.indexOf("bottom") && (i.css("bottom", "0px"), i.css("top", "auto"), -1 != u.indexOf("center") && i.css("left", "40%"))), t(".pop").click(function() {
                            return e.open(t(this).attr("href"), "t", "toolbar=0,resizable=1,status=0,width=640,height=528"), !1
                        })
                    })
                }
            },
            n = {
                networkDefs: {
                    facebook: {
                        url: "http://www.facebook.com/share.php?u=|u|"
                    },
                    twitter: {
                        url: "https://twitter.com/share?via=in1.com&text=|140|"
                    },
                    linkedin: {
                        url: "http://www.linkedin.com/shareArticle?mini=true&url=|u|&title=|t|&summary=|d|&source=in1.com"
                    },
                    in1: {
                        url: "http://www.in1.com/cast?u=|u|",
                        w: "490",
                        h: "529"
                    },
                    tumblr: {
                        url: "http://www.tumblr.com/share?v=3&u=|u|"
                    },
                    digg: {
                        url: "http://digg.com/submit?url=|u|&title=|t|"
                    },
                    googleplus: {
                        url: "https://plusone.google.com/_/+1/confirm?hl=en&url=|u|"
                    },
                    reddit: {
                        url: "http://reddit.com/submit?url=|u|"
                    },
                    pinterest: {
                        url: "http://pinterest.com/pin/create/button/?url=|u|&media=&description=|d|"
                    },
                    posterous: {
                        url: "http://posterous.com/share?linkto=|u|&title=|t|"
                    },
                    stumbleupon: {
                        url: "http://www.stumbleupon.com/submit?url=|u|&title=|t|"
                    },
                    email: {
                        url: "mailto:?subject=|t|"
                    }
                }
            };
        return r[i] ? r[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error('Method "' + i + '" does not exist in social plugin') : r.init.apply(this, arguments)
    }, t.fn.share.defaults = {
        networks: ["in1", "facebook", "twitter", "linkedin"],
        theme: "icon",
        autoShow: !0,
        margin: "3px",
        orientation: "horizontal",
        useIn1: !0
    }, t.fn.share.settings = {}
}(jQuery, window);

/** video**/
"function" != typeof Object.create && (Object.create = function(e) {
        function t() {}
        return t.prototype = e, new t
    }),
    function(e, t, o) {
        var a = function(e) {
                var t = o.createElement("script"),
                    a = o.getElementsByTagName("head")[0];
                t.src = location.protocol + "//www.youtube.com/iframe_api", a.appendChild(t), a = null, t = null, n(e)
            },
            n = function(o) {
                "undefined" == typeof YT && "undefined" == typeof t.loadingPlayer ? (t.loadingPlayer = !0, t.dfd = e.Deferred(), t.onYouTubeIframeAPIReady = function() {
                    t.onYouTubeIframeAPIReady = null, t.dfd.resolve("John"), o()
                }) : t.dfd.done(function(e) {
                    o()
                })
            };
        YTPlayer = {
            player: null,
            defaults: {
                ratio: 16 / 9,
                videoId: "LSmgKRx5pBo",
                mute: !0,
                repeat: !0,
                width: e(t).width(),
                playButtonClass: "YTPlayer-play",
                pauseButtonClass: "YTPlayer-pause",
                muteButtonClass: "YTPlayer-mute",
                volumeUpClass: "YTPlayer-volume-up",
                volumeDownClass: "YTPlayer-volume-down",
                start: 0,
                pauseOnScroll: !1,
                fitToBackground: !0,
                playerVars: {
                    modestbranding: 1,
                    autoplay: 1,
                    controls: 0,
                    showinfo: 0,
                    wmode: "transparent",
                    branding: 0,
                    rel: 0,
                    autohide: 0,
                    origin: t.location.origin
                },
                events: null
            },
            init: function(o, n) {
                var i = this;
                return i.userOptions = n, i.$body = e("body"), i.$node = e(o), i.$window = e(t), i.defaults.events = {
                    onReady: function(e) {
                        i.onPlayerReady(e), i.options.pauseOnScroll && i.pauseOnScroll(), "function" == typeof i.options.callback && i.options.callback.call(this)
                    },
                    onStateChange: function(e) {
                        1 === e.data ? i.$node.addClass("loaded") : 0 === e.data && i.options.repeat && i.player.seekTo(i.options.start)
                    }
                }, i.options = e.extend(!0, {}, i.defaults, i.userOptions), i.ID = (new Date).getTime(), i.holderID = "YTPlayer-ID-" + i.ID, i.options.fitToBackground ? i.createBackgroundVideo() : i.createContainerVideo(), i.$window.on("resize.YTplayer" + i.ID, function() {
                    i.resize(i)
                }), a(i.onYouTubeIframeAPIReady.bind(i)), i.resize(i), i
            },
            pauseOnScroll: function() {
                var e = this;
                e.$window.on("scroll.YTplayer" + e.ID, function() {
                    var t = e.player.getPlayerState();
                    1 === t && e.player.pauseVideo()
                }), e.$window.scrollStopped(function() {
                    var t = e.player.getPlayerState();
                    2 === t && e.player.playVideo()
                })
            },
            createContainerVideo: function() {
                var t = this,
                    o = e('<div id="ytplayer-container' + t.ID + '" >                                    <div id="' + t.holderID + '" class="ytplayer-player"></div>                                     </div>                                     <div id="ytplayer-shield"></div>');
                t.$node.append(o), t.$YTPlayerString = o, o = null
            },
            createBackgroundVideo: function() {
                var t = this,
                    o = e('<div id="ytplayer-container' + t.ID + '" class="ytplayer-container background">                                    <div id="' + t.holderID + '" class="ytplayer-player"></div>                                    </div>                                    <div id="ytplayer-shield"></div>');
                t.$node.append(o), t.$YTPlayerString = o, o = null
            },
            resize: function(t) {
                var o = e(".media-container");
                t.options.fitToBackground || (o = t.$node);
                var a, n, i = o.width(),
                    r = o.height(),
                    l = e("#" + t.holderID);
                i / t.options.ratio < r ? (a = Math.ceil(r * t.options.ratio), l.width(a).height(r).css({
                    left: (i - a) / 2,
                    top: 0
                })) : (n = Math.ceil(i / t.options.ratio), l.width(i).height(n).css({
                    left: 0,
                    top: 0
                })), l = null, o = null
            },
            onYouTubeIframeAPIReady: function() {
                var e = this;
                e.player = new t.YT.Player(e.holderID, {
                    width: e.options.width,
                    height: Math.ceil(e.options.width / e.options.ratio),
                    videoId: e.options.videoId,
                    playerVars: e.options.playerVars,
                    events: e.options.events
                })
            },
            onPlayerReady: function(e) {
                this.options.mute && e.target.mute(), e.target.playVideo()
            },
            getPlayer: function() {
                return this.player
            },
            destroy: function() {
                var o = this;
                o.$node.removeData("yt-init").removeData("ytPlayer").removeClass("loaded"), o.$YTPlayerString.remove(), e(t).off("resize.YTplayer" + o.ID), e(t).off("scroll.YTplayer" + o.ID), o.$body = null, o.$node = null, o.$YTPlayerString = null, o.player.destroy(), o.player = null
            }
        }, e.fn.scrollStopped = function(t) {
            var o = e(this),
                a = this;
            o.scroll(function() {
                o.data("scrollTimeout") && clearTimeout(o.data("scrollTimeout")), o.data("scrollTimeout", setTimeout(t, 250, a))
            })
        }, e.fn.YTPlayer = function(t) {
            return this.each(function() {
                var o = this;
                e(o).data("yt-init", !0);
                var a = Object.create(YTPlayer);
                a.init(o, t), e.data(o, "ytPlayer", a)
            })
        }
    }(jQuery, window, document);

/*! OwlCarousel2Thumbs - v0.1.3 | (c) 2015 @gijsroge | MIT license | https://github.com/gijsroge/OwlCarousel2-Thumbs */
! function(a) {
    "use strict";
    var b = function(c) {
        this.owl = c, this._thumbcontent = [], this.owl_currentitem = this.owl.options.startPosition, this.$element = this.owl.$element, this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this.owl._options.thumbs && !this.owl._options.thumbImage) this._thumbcontent.push(a(b.content).find("[data-thumb]").attr("data-thumb"));
                else if (b.namespace && this.owl._options.thumbs && this.owl._options.thumbImage) {
                    var c = a(b.content).find("img");
                    this._thumbcontent.push(c)
                }
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this.owl._options.thumbs && (this.initialize(), this.currentslide(), this.draw())
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" === a.property.name && this.owl._options.thumbs && (this.currentslide(), this.draw())
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._initialized && this.draw()
            }, this)
        }, this.owl._options = a.extend(b.Defaults, this.owl.options), this.owl.$element.on(this._handlers)
    };
    b.Defaults = {
        thumbs: !0,
        thumbImage: !1,
        thumbContainerClass: "owl-thumbs",
        thumbItemClass: "owl-thumb-item"
    }, b.prototype.currentslide = function() {
        this.owl_currentitem = this.owl._current - this.owl._clones.length / 2, this.owl_currentitem === this.owl._items.length && (this.owl_currentitem = 0)
    }, b.prototype.draw = function() {
        a(this._thumbcontent._thumbcontainer).children().filter(".active").removeClass("active"), a(this._thumbcontent._thumbcontainer).children().eq(this.owl_currentitem).addClass("active")
    }, b.prototype.initialize = function() {
        var b = this.owl._options;
        this._thumbcontent._thumbcontainer = a("<div>").addClass(b.thumbContainerClass).appendTo(this.$element);
        var c;
        if (this.owl._options.thumbImage)
            for (c = 0; c < this._thumbcontent.length; ++c) this._thumbcontent._thumbcontainer.append("<button class=" + b.thumbItemClass + '><img src="' + this._thumbcontent[c].attr("src") + '" alt="' + this._thumbcontent[c].attr("alt") + '" /></button>');
        else
            for (c = 0; c < this._thumbcontent.length; ++c) this._thumbcontent._thumbcontainer.append("<div class=" + b.thumbItemClass + ">" + this._thumbcontent[c] + "</div>");
        a(this._thumbcontent._thumbcontainer).on("click", "button", a.proxy(function(c) {
            var d = a(c.target).parent().is(this._thumbcontent._thumbcontainer) ? a(c.target).index() : a(c.target).parent().index();
            c.preventDefault(), this.owl.to(d, 300)
        }, this))
    }, b.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers) this.owl.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Thumbs = b
}(window.Zepto || window.jQuery, window, document);

/*!  lightGallery */
! function(e, o, i, l) {
    "use strict";
    var a = {
            videoMaxWidth: "855px",
            youtubePlayerParams: !1,
            vimeoPlayerParams: !1,
            dailymotionPlayerParams: !1,
            videojs: !1
        },
        s = function(o) {
            return this.core = e(o).data("lightGallery"), this.$el = e(o), this.core.s = e.extend({}, a, this.core.s), this.videoLoaded = !1, this.init(), this
        };
    s.prototype.init = function() {
        var o = this;
        o.core.$el.on("hasVideo.lg.tm", function(e, i, l, a) {
            if (o.core.$slide.eq(i).find(".lg-video").append(o.loadVideo(l, "lg-object", !0, i, a)), a)
                if (o.core.s.videojs) try {
                    videojs(o.core.$slide.eq(i).find(".lg-html5").get(0), {}, function() {
                        o.videoLoaded || this.play()
                    })
                } catch (s) {
                    console.error("Make sure you have included videojs")
                } else o.core.$slide.eq(i).find(".lg-html5").get(0).play()
        }), o.core.$el.on("onAferAppendSlide.lg.tm", function(e, i) {
            o.core.$slide.eq(i).find(".lg-video-cont").css("max-width", o.core.s.videoMaxWidth), o.videoLoaded = !0
        });
        var i = function(e) {
            if (e.find(".lg-object").hasClass("lg-has-poster") && e.find(".lg-object").is(":visible"))
                if (e.hasClass("lg-has-video")) {
                    var i = e.find(".lg-youtube").get(0),
                        l = e.find(".lg-vimeo").get(0),
                        a = e.find(".lg-dailymotion").get(0),
                        s = e.find(".lg-html5").get(0);
                    if (i) i.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
                    else if (l) try {
                            $f(l).api("play")
                        } catch (r) {
                            console.error("Make sure you have included froogaloop2 js")
                        } else if (a) a.contentWindow.postMessage("play", "*");
                        else if (s)
                        if (o.core.s.videojs) try {
                            videojs(s).play()
                        } catch (r) {
                            console.error("Make sure you have included videojs")
                        } else s.play();
                    e.addClass("lg-video-palying")
                } else {
                    e.addClass("lg-video-palying lg-has-video");
                    var t, d, c = function(i, l) {
                        if (e.find(".lg-video").append(o.loadVideo(i, "", !1, o.core.index, l)), l)
                            if (o.core.s.videojs) try {
                                videojs(o.core.$slide.eq(o.core.index).find(".lg-html5").get(0), {}, function() {
                                    this.play()
                                })
                            } catch (a) {
                                console.error("Make sure you have included videojs")
                            } else o.core.$slide.eq(o.core.index).find(".lg-html5").get(0).play()
                    };
                    o.core.s.dynamic ? (t = o.core.s.dynamicEl[o.core.index].src, d = o.core.s.dynamicEl[o.core.index].html, c(t, d)) : (t = o.core.$items.eq(o.core.index).attr("href") || o.core.$items.eq(o.core.index).attr("data-src"), d = o.core.$items.eq(o.core.index).attr("data-html"), c(t, d));
                    var n = e.find(".lg-object");
                    e.find(".lg-video").append(n), e.find(".lg-video-object").hasClass("lg-html5") || (e.removeClass("lg-complete"), e.find(".lg-video-object").on("load.lg error.lg", function() {
                        e.addClass("lg-complete")
                    }))
                }
        };
        o.core.doCss() && o.core.$items.length > 1 && (o.core.s.enableSwipe && o.core.isTouch || o.core.s.enableDrag && !o.core.isTouch) ? o.core.$el.on("onSlideClick.lg.tm", function() {
            var e = o.core.$slide.eq(o.core.index);
            i(e)
        }) : o.core.$slide.on("click.lg", function() {
            i(e(this))
        }), o.core.$el.on("onBeforeSlide.lg.tm", function(e, i, l) {
            var a = o.core.$slide.eq(i),
                s = a.find(".lg-youtube").get(0),
                r = a.find(".lg-vimeo").get(0),
                t = a.find(".lg-dailymotion").get(0),
                d = a.find(".lg-html5").get(0);
            if (s) s.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
            else if (r) try {
                    $f(r).api("pause")
                } catch (c) {
                    console.error("Make sure you have included froogaloop2 js")
                } else if (t) t.contentWindow.postMessage("pause", "*");
                else if (d)
                if (o.core.s.videojs) try {
                    videojs(d).pause()
                } catch (c) {
                    console.error("Make sure you have included videojs")
                } else d.pause();
            var n;
            n = o.core.s.dynamic ? o.core.s.dynamicEl[l].src : o.core.$items.eq(l).attr("href") || o.core.$items.eq(l).attr("data-src");
            var m = o.core.isVideo(n, l) || {};
            (m.youtube || m.vimeo || m.dailymotion) && o.core.$outer.addClass("lg-hide-download")
        }), o.core.$el.on("onAfterSlide.lg.tm", function(e, i) {
            o.core.$slide.eq(i).removeClass("lg-video-palying")
        })
    }, s.prototype.loadVideo = function(o, i, l, a, s) {
        var r = "",
            t = 1,
            d = "",
            c = this.core.isVideo(o, a) || {};
        if (l && (t = this.videoLoaded ? 0 : 1), c.youtube) d = "?wmode=opaque&autoplay=" + t + "&enablejsapi=1", this.core.s.youtubePlayerParams && (d = d + "&" + e.param(this.core.s.youtubePlayerParams)), r = '<iframe class="lg-video-object lg-youtube ' + i + '" width="560" height="315" src="//www.youtube.com/embed/' + c.youtube[1] + d + '" frameborder="0" allowfullscreen></iframe>';
        else if (c.vimeo) d = "?autoplay=" + t + "&api=1", this.core.s.vimeoPlayerParams && (d = d + "&" + e.param(this.core.s.vimeoPlayerParams)), r = '<iframe class="lg-video-object lg-vimeo ' + i + '" width="560" height="315"  src="http://player.vimeo.com/video/' + c.vimeo[1] + d + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
        else if (c.dailymotion) d = "?wmode=opaque&autoplay=" + t + "&api=postMessage", this.core.s.dailymotionPlayerParams && (d = d + "&" + e.param(this.core.s.dailymotionPlayerParams)), r = '<iframe class="lg-video-object lg-dailymotion ' + i + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + c.dailymotion[1] + d + '" frameborder="0" allowfullscreen></iframe>';
        else if (c.html5) {
            var n = s.substring(0, 1);
            ("." === n || "#" === n) && (s = e(s).html()), r = s
        }
        return r
    }, s.prototype.destroy = function() {
        this.videoLoaded = !1
    }, e.fn.lightGallery.modules.video = s
}(jQuery, window, document);
/**
 *  Parallax Scrolling Library

 *
 */
(function(e) {
    "function" === typeof define && define.amd ? define(["jquery"], e) : "undefined" !== typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
})(function(e) {
    function W(a) {
        if (console && console.warn) console.warn("Scrollax: " + a);
        else throw "Scrollax: " + a;
    }

    function ka(a) {
        var g = !!("pageYOffset" in a);
        return {
            width: g ? window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth : a.offsetWidth,
            height: g ? window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight : a.offsetHeight,
            left: a[g ? "pageXOffset" : "scrollLeft"],
            top: a[g ? "pageYOffset" : "scrollTop"]
        }
    }

    function X(a) {
        return (a = a.data("scrollax")) && eval("({" + a + "})") || {}
    }

    function Y(a) {
        var g, c;
        return !!(a && "object" === typeof a && "object" === typeof a.window && a.window == a && a.setTimeout && a.alert && (g = a.document) && "object" === typeof g && (c = g.defaultView || g.parentWindow) && "object" === typeof c && c == a)
    }
    var v = Array.prototype,
        C = v.push,
        Z = v.splice,
        aa = Object.prototype.hasOwnProperty,
        la = /[-+]?\d+(\.\d+)?/g,
        ma = "translateX translateY rotate rotateX rotateY rotateZ skewX skewY scaleX scaleY".split(" "),
        ba = e(window),
        ca = e(document.body),
        da, ea, L, M, N, q = function(a, g, c) {
            function k() {
                O = fa ? ca.find(ga) : P.find(ga);
                x.length = 0;
                r = !!t.horizontal;
                O.each(na);
                d();
                t.performanceTrick && (F = fa ? ca : P);
                u("load");
                return f
            }

            function l() {
                G && (G = clearTimeout(G));
                G = setTimeout(function() {
                    f.reload()
                })
            }

            function d() {
                var ha = x.length;
                t.performanceTrick && F && (clearTimeout(ia), Q || (F.addClass("scrollax-performance"), Q = !0), ia = setTimeout(function() {
                    F.removeClass("scrollax-performance");
                    Q = !1
                }, 100));
                if (ha) {
                    H = ka(a);
                    for (var c = 0; c < ha; c++) I = x[c],
                        y = L(I.element, a), 0 > y[r ? "right" : "bottom"] || y[r ? "left" : "top"] > H[r ? "width" : "height"] || (ja = I.options, R = ja.offset || t.offset || 0, J = y[r ? "right" : "bottom"], z = y[r ? "width" : "height"], A = (z - J + R) / z, 0 > A && (J = y[r ? "left" : "top"], z = H[r ? "width" : "height"], A = -1 + (z - J + R) / z), 1 < A || -1 > A || b(I, A, r));
                    u("scroll", H)
                }
            }

            function b(a, b) {
                S = a.parallaxElements;
                var c = S.length;
                if (c)
                    for (var f = 0; f < c; f++) {
                        T = S[f];
                        var g = oa = T.element,
                            d = b;
                        U = T.properties || (r ? {
                            translateX: "100%"
                        } : {
                            translateY: "100%"
                        });
                        D = "";
                        for (B in U) {
                            n = U[B];
                            if ("number" === typeof n) n *=
                                d;
                            else if ("string" === typeof n)
                                for (K = n.match(la), m = 0, E = K.length; m < E; m++) n = n.replace(K[m], parseFloat(K[m] * d));
                            if (-1 !== e.inArray(B, ma)) D += B + "(" + n + ")";
                            else {
                                var k = g.style,
                                    l = B,
                                    h;
                                "opacity" === B ? (h = 0 > d ? 1 + n : 1 - n, h = 0 > h ? 0 : 1 < h ? 1 : h) : h = n;
                                k[l] = h
                            }
                        }
                        D && (g.style[da] = ea + D)
                    }
            }

            function pa(a) {
                return "undefined" !== typeof a ? "number" !== typeof a && "string" !== typeof a || "" === a || isNaN(a) ? O.index(a) : 0 <= a && a < x.length ? a : -1 : -1
            }

            function u(a, b) {
                if (h[a]) {
                    E = h[a].length;
                    for (m = V.length = 0; m < E; m++) C.call(V, h[a][m]);
                    for (m = 0; m < E; m++) V[m].call(f,
                        a, b)
                }
            }

            function p(a, b) {
                for (var c = 0, f = h[a].length; c < f; c++)
                    if (h[a][c] === b) return c;
                return -1
            }
            var f = this,
                P = a && e(a).eq(0) || ba,
                w = q.instances,
                v = null;
            a = P[0];
            e.each(w, function(b, c) {
                b && b.frame === a && (v = !0)
            });
            if (!a || v) v ? W("Scrollax: Scrollax has been initialized for this frame!") : W("Scrollax: Frame is not available!");
            else {
                var t = e.extend({}, q.defaults, g),
                    x = [],
                    O = null,
                    ga = t.parentSelector || "[data-scrollax-parent]",
                    qa = t.elementsSelector || "[data-scrollax]",
                    h = {},
                    V = [],
                    G, fa = Y(a),
                    m, E, F, ia, Q, H, r, R, y, I, ja, A, J, z, S, T, oa, U,
                    B, n, D, K;
                f.frame = a;
                f.options = t;
                f.parents = x;
                f.initialized = !1;
                f.reload = k;
                var na = function(a, b) {
                    var c = e(b),
                        f = X(e(b)),
                        d = {};
                    d.element = b;
                    d.options = f;
                    d.parallaxElements = [];
                    c.find(qa).each(function(a, b) {
                        var c = X(e(b));
                        c.element = b;
                        C.call(d.parallaxElements, c)
                    });
                    C.call(x, d)
                };
                f.scroll = d;
                f.getIndex = pa;
                f.one = function(a, b) {
                    function c() {
                        b.apply(f, arguments);
                        f.off(a, c)
                    }
                    f.on(a, c);
                    return f
                };
                f.on = function(a, b) {
                    if ("object" === typeof a)
                        for (var c in a) {
                            if (aa.call(a, c)) f.on(c, a[c])
                        } else if ("function" === typeof b) {
                            c = a.split(" ");
                            for (var d = 0, g = c.length; d < g; d++) h[c[d]] = h[c[d]] || [], -1 === p(c[d], b) && C.call(h[c[d]], b)
                        } else if ("array" === typeof b)
                        for (c = 0, d = b.length; c < d; c++) f.on(a, b[c]);
                    return f
                };
                f.off = function(a, c) {
                    if (c instanceof Array)
                        for (var b = 0, d = c.length; b < d; b++) f.off(a, c[b]);
                    else
                        for (var b = a.split(" "), d = 0, g = b.length; d < g; d++)
                            if (h[b[d]] = h[b[d]] || [], "undefined" === typeof c) h[b[d]].length = 0;
                            else {
                                var k = p(b[d], c); - 1 !== k && Z.call(h[b[d]], k, 1)
                            } return f
                };
                f.set = function(a, b) {
                    e.isPlainObject(a) ? e.extend(t, a) : aa.call(t, a) && (t[a] = b);
                    k();
                    return f
                };
                f.destroy = function() {
                    N(window, "resize", l);
                    N(a, "scroll", d);
                    e.each(w, function(b, c) {
                        b && b.frame === a && Z.call(q.instances, c, 1)
                    });
                    x.length = 0;
                    f.initialized = !1;
                    u("destroy");
                    return f
                };
                f.init = function() {
                    if (!f.initialized) return f.on(c), k(), M(window, "resize", l), M(a, "scroll", d), C.call(q.instances, f), f.initialized = !0, u("initialized"), f
                }
            }
        };
    q.instances = [];
    (function() {
        var a, g, c, k, l, d, b, e;
        L = function(u, p) {
            g = u.ownerDocument || u;
            c = g.documentElement;
            k = Y(p) ? p : g.defaultView || window;
            p = p && p !== g ? p : c;
            l = (k.pageYOffset ||
                c.scrollTop) - c.clientTop;
            d = (k.pageXOffset || c.scrollLeft) - c.clientLeft;
            b = {
                top: 0,
                left: 0
            };
            if (u && u.getBoundingClientRect) {
                var f = {},
                    q = u.getBoundingClientRect();
                for (a in q) f[a] = q[a];
                b = f;
                b.width = b.right - b.left;
                b.height = b.bottom - b.top
            } else return null;
            if (p === k) return b;
            b.top += l;
            b.left += d;
            b.right += d;
            b.bottom += l;
            if (p === c) return b;
            e = L(p);
            b.left -= e.left;
            b.right -= e.left;
            b.top -= e.top;
            b.bottom -= e.top;
            return b
        }
    })();
    (function() {
        function a() {
            this.returnValue = !1
        }

        function g() {
            this.cancelBubble = !0
        }
        M = window.addEventListener ?
            function(a, g, e, d) {
                a.addEventListener(g, e, d || !1);
                return e
            } : function(c, e, l) {
                var d = e + l;
                c[d] = c[d] || function() {
                    var b = window.event;
                    b.target = b.srcElement;
                    b.preventDefault = a;
                    b.stopPropagation = g;
                    l.call(c, b)
                };
                c.attachEvent("on" + e, c[d]);
                return l
            };
        N = window.removeEventListener ? function(a, g, e, d) {
            a.removeEventListener(g, e, d || !1);
            return e
        } : function(a, g, e) {
            var d = g + e;
            a.detachEvent("on" + g, a[d]);
            try {
                delete a[d]
            } catch (b) {
                a[d] = void 0
            }
            return e
        }
    })();
    (function() {
        function a(a) {
            for (var e = 0, d = g.length; e < d; e++) {
                var b = g[e] ? g[e] +
                    a.charAt(0).toUpperCase() + a.slice(1) : a;
                if (null != c.style[b]) return b
            }
        }
        var g = ["", "webkit", "moz", "ms", "o"],
            c = document.createElement("div");
        da = a("transform");
        ea = a("perspective") ? "translateZ(0) " : ""
    })();
    q.defaults = {
        horizontal: !1,
        offset: 0,
        parentSelector: null,
        elementsSelector: null,
        performanceTrick: !1
    };
    window.Scrollax = q;
    e.fn.Scrollax = function(a, g) {
        var c, k;
        if (!e.isPlainObject(a)) {
            if ("string" === typeof a || !1 === a) c = !1 === a ? "destroy" : a, k = slice.call(arguments, 1);
            a = {}
        }
        return this.each(function(l, d) {
            var b = e.data(d,
                "scrollax");
            b || c ? b && c && b[c] && b[c].apply(b, k) : e.data(d, "scrollax", (new q(d, a, g)).init())
        })
    };
    e.Scrollax = function(a, e) {
        ba.Scrollax(a, e)
    };
    var v = document.head || document.getElementsByTagName("head")[0],
        w = document.createElement("style");
    w.type = "text/css";
    w.styleSheet ? w.styleSheet.cssText = ".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };" :
        w.appendChild(document.createTextNode(".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };"));
    v.appendChild(w);
    return q
});

(function($) {
    $.fn.appear = function(f, o) {
        var s = $.extend({
            one: true
        }, o);
        return this.each(function() {
            var t = $(this);
            t.appeared = false;
            if (!f) {
                t.trigger('appear', s.data);
                return;
            }
            var w = $(window);
            var c = function() {
                if (!t.is(':visible')) {
                    t.appeared = false;
                    return;
                }
                var a = w.scrollLeft();
                var b = w.scrollTop();
                var o = t.offset();
                var x = o.left;
                var y = o.top;
                if (y + t.height() >= b && y <= b + w.height() && x + t.width() >= a && x <= a + w.width()) {
                    if (!t.appeared) t.trigger('appear', s.data);
                } else {
                    t.appeared = false;
                }
            };
            var m = function() {
                t.appeared = true;
                if (s.one) {
                    w.unbind('scroll', c);
                    var i = $.inArray(c, $.fn.appear.checks);
                    if (i >= 0) $.fn.appear.checks.splice(i, 1);
                }
                f.apply(this, arguments);
            };
            if (s.one) t.one('appear', s.data, m);
            else t.bind('appear', s.data, m);
            w.scroll(c);
            $.fn.appear.checks.push(c);
            (c)();
        });
    };
    $.extend($.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function() {
            var l = $.fn.appear.checks.length;
            if (l > 0)
                while (l--)($.fn.appear.checks[l])();
        },
        run: function() {
            if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
        }
    });
    $.each(['append', 'prepend', 'after', 'before', 'attr', 'removeAttr', 'addClass', 'removeClass', 'toggleClass', 'remove', 'css', 'show', 'hide'], function(i, n) {
        var u = $.fn[n];
        if (u) {
            $.fn[n] = function() {
                var r = u.apply(this, arguments);
                $.fn.appear.run();
                return r;
            }
        }
    });
})(jQuery);

/**
 * Single Page Nav Plugin
 * Copyright (c) 2014 Chris Wojcik <hello@chriswojcik.net>
 * Dual licensed under MIT and GPL.
 * @author Chris Wojcik
 * @version 1.2.0
 */

// Utility
if (typeof Object.create !== 'function') {
    Object.create = function(obj) {
        function F() {}
        F.prototype = obj;
        return new F()
    }
}(function($, window, document, undefined) {
    "use strict";
    var SinglePageNav = {
        init: function(options, container) {
            this.options = $.extend({}, $.fn.singlePageNav.defaults, options);
            this.container = container;
            this.$container = $(container);
            this.$links = this.$container.find('a');
            if (this.options.filter !== '') {
                this.$links = this.$links.filter(this.options.filter)
            }
            this.$window = $(window);
            this.$htmlbody = $('html, body');
            this.$links.on('click.singlePageNav', $.proxy(this.handleClick, this));
            this.didScroll = false;
            this.checkPosition();
            this.setTimer()
        },
        handleClick: function(e) {
            var self = this,
                link = e.currentTarget,
                $elem = $(link.hash);
            e.preventDefault();
            if ($elem.length) {
                self.clearTimer();
                if (typeof self.options.beforeStart === 'function') {
                    self.options.beforeStart()
                }
                self.setActiveLink(link.hash);
                self.scrollTo($elem, function() {
                    if (self.options.updateHash && history.pushState) {
                        history.pushState(null, null, link.hash)
                    }
                    self.setTimer();
                    if (typeof self.options.onComplete === 'function') {
                        self.options.onComplete()
                    }
                })
            }
        },
        scrollTo: function($elem, callback) {
            var self = this;
            var target = self.getCoords($elem).top;
            var called = false;
            self.$htmlbody.stop().animate({
                scrollTop: target
            }, {
                duration: self.options.speed,
                easing: self.options.easing,
                complete: function() {
                    if (typeof callback === 'function' && !called) {
                        callback()
                    }
                    called = true
                }
            })
        },
        setTimer: function() {
            var self = this;
            self.$window.on('scroll.singlePageNav', function() {
                self.didScroll = true
            });
            self.timer = setInterval(function() {
                if (self.didScroll) {
                    self.didScroll = false;
                    self.checkPosition()
                }
            }, 250)
        },
        clearTimer: function() {
            clearInterval(this.timer);
            this.$window.off('scroll.singlePageNav');
            this.didScroll = false
        },
        checkPosition: function() {
            var scrollPos = this.$window.scrollTop();
            var currentSection = this.getCurrentSection(scrollPos);
            if (currentSection !== null) {
                this.setActiveLink(currentSection)
            }
        },
        getCoords: function($elem) {
            return {
                top: Math.round($elem.offset().top) - this.options.offset
            }
        },
        setActiveLink: function(href) {
            var $activeLink = this.$container.find("a[href$='" + href + "']");
            if (!$activeLink.hasClass(this.options.currentClass)) {
                this.$links.removeClass(this.options.currentClass);
                $activeLink.addClass(this.options.currentClass);
                if ($(".scroll-nav  a").hasClass("act-link")) $(".scroll-nav  a.act-link").each(function() {
                    var a = $(this).data("bgscr"),
                        b = $(this).data("bgtex");
                    var ua = window.navigator.userAgent;
                    var msie = ua.indexOf("MSIE ");
                    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
                        $(".bg-title span").html(b)
                    } else {
                        $(".bg-title span").html(b).shuffleLetters({})
                    }
                    $(".column-image").addClass("scrbg");
                    setTimeout(function() {
                        $(".bg-scroll").css("background-image", "url(" + a + ")");
                        $(".column-image").removeClass("scrbg")
                    }, 700)
                })
            }
        },
        getCurrentSection: function(scrollPos) {
            var i, hash, coords, section;
            for (i = 0; i < this.$links.length; i++) {
                hash = this.$links[i].hash;
                if ($(hash).length) {
                    coords = this.getCoords($(hash));
                    if (scrollPos >= coords.top - this.options.threshold) {
                        section = hash
                    }
                }
            }
            return section || ((this.$links.length === 0) ? (null) : (this.$links[0].hash))
        }
    };
    $.fn.singlePageNav = function(options) {
        return this.each(function() {
            var singlePageNav = Object.create(SinglePageNav);
            singlePageNav.init(options, this)
        })
    };
    $.fn.singlePageNav.defaults = {
        offset: 0,
        threshold: 120,
        speed: 400,
        currentClass: 'current',
        easing: 'swing',
        updateHash: false,
        filter: '',
        onComplete: false,
        beforeStart: false
    }
})(jQuery, window, document);


/**
 * @name		Shuffle Letters
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2011/09/shuffle-letters-effect-jquery/
 * @license		MIT License
 */

(function(e) {
    function t(e) {
        var t = "";
        if (e == "lowerLetter") {
            t = "abcdefghijklmnopqrstuvwxyz0123456789"
        } else if (e == "upperLetter") {
            t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        } else if (e == "symbol") {
            t = "0123456789"
        }
        var n = t.split("");
        return n[Math.floor(Math.random() * n.length)]
    }
    e.fn.shuffleLetters = function(n) {
        var r = e.extend({
            step: 8,
            fps: 25,
            text: "",
            callback: function() {}
        }, n);
        return this.each(function() {
            var n = e(this),
                i = "";
            if (n.data("animated")) {
                return true
            }
            n.data("animated", true);
            if (r.text) {
                i = r.text.split("")
            } else {
                i = n.text().split("")
            }
            var s = [],
                o = [];
            for (var u = 0; u < i.length; u++) {
                var a = i[u];
                if (a == " ") {
                    s[u] = "space";
                    continue
                } else if (/[a-z]/.test(a)) {
                    s[u] = "lowerLetter"
                } else if (/[A-Z]/.test(a)) {
                    s[u] = "upperLetter"
                } else {
                    s[u] = "symbol"
                }
                o.push(u)
            }
            n.html("");
            (function f(e) {
                var u, a = o.length,
                    l = i.slice(0);
                if (e > a) {
                    n.data("animated", false);
                    r.callback(n);
                    return
                }
                for (u = Math.max(e, 0); u < a; u++) {
                    if (u < e + r.step) {
                        l[o[u]] = t(s[o[u]])
                    } else {
                        l[o[u]] = ""
                    }
                }
                n.text(l.join(""));
                setTimeout(function() {
                    f(e + 1)
                }, 1e3 / r.fps)
            })(-r.step)
        })
    }
})(jQuery);



(function(a) {
    a.isScrollToFixed = function(b) {
        return !!a(b).data("ScrollToFixed")
    };
    a.ScrollToFixed = function(d, i) {
        var l = this;
        l.$el = a(d);
        l.el = d;
        l.$el.data("ScrollToFixed", l);
        var c = false;
        var G = l.$el;
        var H;
        var E;
        var e;
        var y;
        var D = 0;
        var q = 0;
        var j = -1;
        var f = -1;
        var t = null;
        var z;
        var g;

        function u() {
            G.trigger("preUnfixed.ScrollToFixed");
            k();
            G.trigger("unfixed.ScrollToFixed");
            f = -1;
            D = G.offset().top;
            q = G.offset().left;
            if (l.options.offsets) {
                q += (G.offset().left - G.position().left)
            }
            if (j == -1) {
                j = q
            }
            H = G.css("position");
            c = true;
            if (l.options.bottom != -1) {
                G.trigger("preFixed.ScrollToFixed");
                w();
                G.trigger("fixed.ScrollToFixed")
            }
        }

        function n() {
            var I = l.options.limit;
            if (!I) {
                return 0
            }
            if (typeof(I) === "function") {
                return I.apply(G)
            }
            return I
        }

        function p() {
            return H === "fixed"
        }

        function x() {
            return H === "absolute"
        }

        function h() {
            return !(p() || x())
        }

        function w() {
            if (!p()) {
                t.css({
                    display: G.css("display"),
                    width: G.outerWidth(true),
                    height: G.outerHeight(true),
                    "float": G.css("float")
                });
                cssOptions = {
                    "z-index": l.options.zIndex,
                    position: "fixed",
                    top: l.options.bottom == -1 ? s() : "",
                    bottom: l.options.bottom == -1 ? "" : l.options.bottom,
                    "margin-left": "0px"
                };
                if (!l.options.dontSetWidth) {
                    cssOptions.width = G.width()
                }
                G.css(cssOptions);
                G.addClass(l.options.baseClassName);
                if (l.options.className) {
                    G.addClass(l.options.className)
                }
                H = "fixed"
            }
        }

        function b() {
            var J = n();
            var I = q;
            if (l.options.removeOffsets) {
                I = "";
                J = J - D
            }
            cssOptions = {
                position: "absolute",
                top: J,
                left: I,
                "margin-left": "0px",
                bottom: ""
            };
            if (!l.options.dontSetWidth) {
                cssOptions.width = G.width()
            }
            G.css(cssOptions);
            H = "absolute"
        }

        function k() {
            if (!h()) {
                f = -1;
                t.css("display", "none");
                G.css({
                    "z-index": y,
                    width: "",
                    position: E,
                    left: "",
                    top: e,
                    "margin-left": ""
                });
                G.removeClass("scroll-to-fixed-fixed");
                if (l.options.className) {
                    G.removeClass(l.options.className)
                }
                H = null
            }
        }

        function v(I) {
            if (I != f) {
                G.css("left", q - I);
                f = I
            }
        }

        function s() {
            var I = l.options.marginTop;
            if (!I) {
                return 0
            }
            if (typeof(I) === "function") {
                return I.apply(G)
            }
            return I
        }

        function A() {
            if (!a.isScrollToFixed(G)) {
                return
            }
            var K = c;
            if (!c) {
                u()
            } else {
                if (h()) {
                    D = G.offset().top;
                    q = G.offset().left
                }
            }
            var I = a(window).scrollLeft();
            var L = a(window).scrollTop();
            var J = n();
            if (l.options.minWidth && a(window).width() < l.options.minWidth) {
                if (!h() || !K) {
                    o();
                    G.trigger("preUnfixed.ScrollToFixed");
                    k();
                    G.trigger("unfixed.ScrollToFixed")
                }
            } else {
                if (l.options.maxWidth && a(window).width() > l.options.maxWidth) {
                    if (!h() || !K) {
                        o();
                        G.trigger("preUnfixed.ScrollToFixed");
                        k();
                        G.trigger("unfixed.ScrollToFixed")
                    }
                } else {
                    if (l.options.bottom == -1) {
                        if (J > 0 && L >= J - s()) {
                            if (!x() || !K) {
                                o();
                                G.trigger("preAbsolute.ScrollToFixed");
                                b();
                                G.trigger("unfixed.ScrollToFixed")
                            }
                        } else {
                            if (L >= D - s()) {
                                if (!p() || !K) {
                                    o();
                                    G.trigger("preFixed.ScrollToFixed");
                                    w();
                                    f = -1;
                                    G.trigger("fixed.ScrollToFixed")
                                }
                                v(I)
                            } else {
                                if (!h() || !K) {
                                    o();
                                    G.trigger("preUnfixed.ScrollToFixed");
                                    k();
                                    G.trigger("unfixed.ScrollToFixed")
                                }
                            }
                        }
                    } else {
                        if (J > 0) {
                            if (L + a(window).height() - G.outerHeight(true) >= J - (s() || -m())) {
                                if (p()) {
                                    o();
                                    G.trigger("preUnfixed.ScrollToFixed");
                                    if (E === "absolute") {
                                        b()
                                    } else {
                                        k()
                                    }
                                    G.trigger("unfixed.ScrollToFixed")
                                }
                            } else {
                                if (!p()) {
                                    o();
                                    G.trigger("preFixed.ScrollToFixed");
                                    w()
                                }
                                v(I);
                                G.trigger("fixed.ScrollToFixed")
                            }
                        } else {
                            v(I)
                        }
                    }
                }
            }
        }

        function m() {
            if (!l.options.bottom) {
                return 0
            }
            return l.options.bottom
        }

        function o() {
            var I = G.css("position");
            if (I == "absolute") {
                G.trigger("postAbsolute.ScrollToFixed")
            } else {
                if (I == "fixed") {
                    G.trigger("postFixed.ScrollToFixed")
                } else {
                    G.trigger("postUnfixed.ScrollToFixed")
                }
            }
        }
        var C = function(I) {
            if (G.is(":visible")) {
                c = false;
                A()
            }
        };
        var F = function(I) {
            (!!window.requestAnimationFrame) ? requestAnimationFrame(A): A()
        };
        var B = function() {
            var J = document.body;
            if (document.createElement && J && J.appendChild && J.removeChild) {
                var L = document.createElement("div");
                if (!L.getBoundingClientRect) {
                    return null
                }
                L.innerHTML = "x";
                L.style.cssText = "position:fixed;top:100px;";
                J.appendChild(L);
                var M = J.style.height,
                    N = J.scrollTop;
                J.style.height = "3000px";
                J.scrollTop = 500;
                var I = L.getBoundingClientRect().top;
                J.style.height = M;
                var K = (I === 100);
                J.removeChild(L);
                J.scrollTop = N;
                return K
            }
            return null
        };
        var r = function(I) {
            I = I || window.event;
            if (I.preventDefault) {
                I.preventDefault()
            }
            I.returnValue = false
        };
        l.init = function() {
            l.options = a.extend({}, a.ScrollToFixed.defaultOptions, i);
            y = G.css("z-index");
            l.$el.css("z-index", l.options.zIndex);
            t = a("<div />");
            H = G.css("position");
            E = G.css("position");
            e = G.css("top");
            if (h()) {
                l.$el.after(t)
            }
            a(window).bind("resize.ScrollToFixed", C);
            a(window).bind("scroll.ScrollToFixed", F);
            if ("ontouchmove" in window) {
                a(window).bind("touchmove.ScrollToFixed", A)
            }
            if (l.options.preFixed) {
                G.bind("preFixed.ScrollToFixed", l.options.preFixed)
            }
            if (l.options.postFixed) {
                G.bind("postFixed.ScrollToFixed", l.options.postFixed)
            }
            if (l.options.preUnfixed) {
                G.bind("preUnfixed.ScrollToFixed", l.options.preUnfixed)
            }
            if (l.options.postUnfixed) {
                G.bind("postUnfixed.ScrollToFixed", l.options.postUnfixed)
            }
            if (l.options.preAbsolute) {
                G.bind("preAbsolute.ScrollToFixed", l.options.preAbsolute)
            }
            if (l.options.postAbsolute) {
                G.bind("postAbsolute.ScrollToFixed", l.options.postAbsolute)
            }
            if (l.options.fixed) {
                G.bind("fixed.ScrollToFixed", l.options.fixed)
            }
            if (l.options.unfixed) {
                G.bind("unfixed.ScrollToFixed", l.options.unfixed)
            }
            if (l.options.spacerClass) {
                t.addClass(l.options.spacerClass)
            }
            G.bind("resize.ScrollToFixed", function() {
                t.height(G.height())
            });
            G.bind("scroll.ScrollToFixed", function() {
                G.trigger("preUnfixed.ScrollToFixed");
                k();
                G.trigger("unfixed.ScrollToFixed");
                A()
            });
            G.bind("detach.ScrollToFixed", function(I) {
                r(I);
                G.trigger("preUnfixed.ScrollToFixed");
                k();
                G.trigger("unfixed.ScrollToFixed");
                a(window).unbind("resize.ScrollToFixed", C);
                a(window).unbind("scroll.ScrollToFixed", F);
                G.unbind(".ScrollToFixed");
                t.remove();
                l.$el.removeData("ScrollToFixed")
            });
            C()
        };
        l.init()
    };
    a.ScrollToFixed.defaultOptions = {
        marginTop: 0,
        limit: 0,
        bottom: -1,
        zIndex: 1000,
        baseClassName: "scroll-to-fixed-fixed"
    };
    a.fn.scrollToFixed = function(b) {
        return this.each(function() {
            (new a.ScrollToFixed(this, b))
        })
    }
})(jQuery);



/**!
 * easyPieChart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.1
 **/
(function(e, t) {
    if (typeof exports === "object") {
        module.exports = t(require("jquery"))
    } else if (typeof define === "function" && define.amd) {
        define("EasyPieChart", ["jquery"], t)
    } else {
        t(e.jQuery)
    }
})(this, function(e) {
    var t = function(e, t) {
        var n;
        var r = document.createElement("canvas");
        if (typeof G_vmlCanvasManager !== "undefined") {
            G_vmlCanvasManager.initElement(r)
        }
        var i = r.getContext("2d");
        r.width = r.height = t.size;
        e.appendChild(r);
        var s = 1;
        if (window.devicePixelRatio > 1) {
            s = window.devicePixelRatio;
            r.style.width = r.style.height = [t.size, "px"].join("");
            r.width = r.height = t.size * s;
            i.scale(s, s)
        }
        i.translate(t.size / 2, t.size / 2);
        i.rotate((-1 / 2 + t.rotate / 180) * Math.PI);
        var o = (t.size - t.lineWidth) / 2;
        if (t.scaleColor && t.scaleLength) {
            o -= t.scaleLength + 2
        }
        Date.now = Date.now || function() {
            return +(new Date)
        };
        var u = function(e, t, n) {
            n = Math.min(Math.max(0, n || 1), 1);
            i.beginPath();
            i.arc(0, 0, o, 0, Math.PI * 2 * n, false);
            i.strokeStyle = e;
            i.lineWidth = t;
            i.stroke()
        };
        var a = function() {
            var e;
            var n;
            var r = 24;
            i.lineWidth = 1;
            i.fillStyle = t.scaleColor;
            i.save();
            for (var r = 24; r > 0; --r) {
                if (r % 6 === 0) {
                    n = t.scaleLength;
                    e = 0
                } else {
                    n = t.scaleLength * .6;
                    e = t.scaleLength - n
                }
                i.fillRect(-t.size / 2 + e, 0, n, 1);
                i.rotate(Math.PI / 12)
            }
            i.restore()
        };
        var f = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
                window.setTimeout(e, 1e3 / 60)
            }
        }();
        var l = function() {
            t.scaleColor && a();
            t.trackColor && u(t.trackColor, t.lineWidth)
        };
        this.clear = function() {
            i.clearRect(t.size / -2, t.size / -2, t.size, t.size)
        };
        this.draw = function(e) {
            if (!!t.scaleColor || !!t.trackColor) {
                if (i.getImageData && i.putImageData) {
                    if (!n) {
                        l();
                        n = i.getImageData(0, 0, t.size * s, t.size * s)
                    } else {
                        i.putImageData(n, 0, 0)
                    }
                } else {
                    this.clear();
                    l()
                }
            } else {
                this.clear()
            }
            i.lineCap = t.lineCap;
            var r;
            if (typeof t.barColor === "function") {
                r = t.barColor(e)
            } else {
                r = t.barColor
            }
            if (e > 0) {
                u(r, t.lineWidth, e / 100)
            }
        }.bind(this);
        this.animate = function(e, n) {
            var r = Date.now();
            t.onStart(e, n);
            var i = function() {
                var s = Math.min(Date.now() - r, t.animate);
                var o = t.easing(this, s, e, n - e, t.animate);
                this.draw(o);
                t.onStep(e, n, o);
                if (s >= t.animate) {
                    t.onStop(e, n)
                } else {
                    f(i)
                }
            }.bind(this);
            f(i)
        }.bind(this)
    };
    var n = function(e, n) {
        var r = {
            barColor: "#F54A4B",
            trackColor: "#ccc",
            scaleColor: "#ccc",
            scaleLength: 0,
            lineCap: "round",
            lineWidth: 10,
            size: 152,
            rotate: 0,
            animate: 4e3,
            easing: function(e, t, n, r, i) {
                t = t / (i / 2);
                if (t < 1) {
                    return r / 2 * t * t + n
                }
                return -r / 2 * (--t * (t - 2) - 1) + n
            },
            onStart: function(e, t) {
                return
            },
            onStep: function(e, t, n) {
                return
            },
            onStop: function(e, t) {
                return
            }
        };
        if (typeof t !== "undefined") {
            r.renderer = t
        } else if (typeof SVGRenderer !== "undefined") {
            r.renderer = SVGRenderer
        } else {
            throw new Error("Please load either the SVG- or the CanvasRenderer")
        }
        var i = {};
        var s = 0;
        var o = function() {
            this.el = e;
            this.options = i;
            for (var t in r) {
                if (r.hasOwnProperty(t)) {
                    i[t] = n && typeof n[t] !== "undefined" ? n[t] : r[t];
                    if (typeof i[t] === "function") {
                        i[t] = i[t].bind(this)
                    }
                }
            }
            if (typeof i.easing === "string" && typeof jQuery !== "undefined" && jQuery.isFunction(jQuery.easing[i.easing])) {
                i.easing = jQuery.easing[i.easing]
            } else {
                i.easing = r.easing
            }
            this.renderer = new i.renderer(e, i);
            this.renderer.draw(s);
            if (e.dataset && e.dataset.percent) {
                this.update(parseFloat(e.dataset.percent))
            } else if (e.getAttribute && e.getAttribute("data-percent")) {
                this.update(parseFloat(e.getAttribute("data-percent")))
            }
        }.bind(this);
        this.update = function(e) {
            e = parseFloat(e);
            if (i.animate) {
                this.renderer.animate(s, e)
            } else {
                this.renderer.draw(e)
            }
            s = e;
            return this
        }.bind(this);
        o()
    };
    e.fn.easyPieChart = function(t) {
        return this.each(function() {
            if (!e.data(this, "easyPieChart")) {
                e.data(this, "easyPieChart", new n(this, t))
            }
        })
    }
});

// Snap.svg 0.3.0
// 
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// 
// build: 2014-06-03
! function(a) {
    var b, c, d = "0.4.2",
        e = "hasOwnProperty",
        f = /[\.\/]/,
        g = /\s*,\s*/,
        h = "*",
        i = function(a, b) {
            return a - b
        },
        j = {
            n: {}
        },
        k = function() {
            for (var a = 0, b = this.length; b > a; a++)
                if ("undefined" != typeof this[a]) return this[a]
        },
        l = function() {
            for (var a = this.length; --a;)
                if ("undefined" != typeof this[a]) return this[a]
        },
        m = function(a, d) {
            a = String(a);
            var e, f = c,
                g = Array.prototype.slice.call(arguments, 2),
                h = m.listeners(a),
                j = 0,
                n = [],
                o = {},
                p = [],
                q = b;
            p.firstDefined = k, p.lastDefined = l, b = a, c = 0;
            for (var r = 0, s = h.length; s > r; r++) "zIndex" in h[r] && (n.push(h[r].zIndex), h[r].zIndex < 0 && (o[h[r].zIndex] = h[r]));
            for (n.sort(i); n[j] < 0;)
                if (e = o[n[j++]], p.push(e.apply(d, g)), c) return c = f, p;
            for (r = 0; s > r; r++)
                if (e = h[r], "zIndex" in e)
                    if (e.zIndex == n[j]) {
                        if (p.push(e.apply(d, g)), c) break;
                        do
                            if (j++, e = o[n[j]], e && p.push(e.apply(d, g)), c) break; while (e)
                    } else o[e.zIndex] = e;
            else if (p.push(e.apply(d, g)), c) break;
            return c = f, b = q, p
        };
    m._events = j, m.listeners = function(a) {
        var b, c, d, e, g, i, k, l, m = a.split(f),
            n = j,
            o = [n],
            p = [];
        for (e = 0, g = m.length; g > e; e++) {
            for (l = [], i = 0, k = o.length; k > i; i++)
                for (n = o[i].n, c = [n[m[e]], n[h]], d = 2; d--;) b = c[d], b && (l.push(b), p = p.concat(b.f || []));
            o = l
        }
        return p
    }, m.on = function(a, b) {
        if (a = String(a), "function" != typeof b) return function() {};
        for (var c = a.split(g), d = 0, e = c.length; e > d; d++) ! function(a) {
            for (var c, d = a.split(f), e = j, g = 0, h = d.length; h > g; g++) e = e.n, e = e.hasOwnProperty(d[g]) && e[d[g]] || (e[d[g]] = {
                n: {}
            });
            for (e.f = e.f || [], g = 0, h = e.f.length; h > g; g++)
                if (e.f[g] == b) {
                    c = !0;
                    break
                }!c && e.f.push(b)
        }(c[d]);
        return function(a) {
            +a == +a && (b.zIndex = +a)
        }
    }, m.f = function(a) {
        var b = [].slice.call(arguments, 1);
        return function() {
            m.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)))
        }
    }, m.stop = function() {
        c = 1
    }, m.nt = function(a) {
        return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(b) : b
    }, m.nts = function() {
        return b.split(f)
    }, m.off = m.unbind = function(a, b) {
        if (!a) return void(m._events = j = {
            n: {}
        });
        var c = a.split(g);
        if (c.length > 1)
            for (var d = 0, i = c.length; i > d; d++) m.off(c[d], b);
        else {
            c = a.split(f);
            var k, l, n, d, i, o, p, q = [j];
            for (d = 0, i = c.length; i > d; d++)
                for (o = 0; o < q.length; o += n.length - 2) {
                    if (n = [o, 1], k = q[o].n, c[d] != h) k[c[d]] && n.push(k[c[d]]);
                    else
                        for (l in k) k[e](l) && n.push(k[l]);
                    q.splice.apply(q, n)
                }
            for (d = 0, i = q.length; i > d; d++)
                for (k = q[d]; k.n;) {
                    if (b) {
                        if (k.f) {
                            for (o = 0, p = k.f.length; p > o; o++)
                                if (k.f[o] == b) {
                                    k.f.splice(o, 1);
                                    break
                                }!k.f.length && delete k.f
                        }
                        for (l in k.n)
                            if (k.n[e](l) && k.n[l].f) {
                                var r = k.n[l].f;
                                for (o = 0, p = r.length; p > o; o++)
                                    if (r[o] == b) {
                                        r.splice(o, 1);
                                        break
                                    }!r.length && delete k.n[l].f
                            }
                    } else {
                        delete k.f;
                        for (l in k.n) k.n[e](l) && k.n[l].f && delete k.n[l].f
                    }
                    k = k.n
                }
        }
    }, m.once = function(a, b) {
        var c = function() {
            return m.unbind(a, c), b.apply(this, arguments)
        };
        return m.on(a, c)
    }, m.version = d, m.toString = function() {
        return "You are running Eve " + d
    }, "undefined" != typeof module && module.exports ? module.exports = m : "function" == typeof define && define.amd ? define("eve", [], function() {
        return m
    }) : a.eve = m
}(this),
function(a, b) {
    "function" == typeof define && define.amd ? define(["eve"], function(c) {
        return b(a, c)
    }) : b(a, a.eve)
}(this, function(a, b) {
    var c = function(b) {
            var c = {},
                d = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function(a) {
                    setTimeout(a, 16)
                },
                e = Array.isArray || function(a) {
                    return a instanceof Array || "[object Array]" == Object.prototype.toString.call(a)
                },
                f = 0,
                g = "M" + (+new Date).toString(36),
                h = function() {
                    return g + (f++).toString(36)
                },
                i = Date.now || function() {
                    return +new Date
                },
                j = function(a) {
                    var b = this;
                    if (null == a) return b.s;
                    var c = b.s - a;
                    b.b += b.dur * c, b.B += b.dur * c, b.s = a
                },
                k = function(a) {
                    var b = this;
                    return null == a ? b.spd : void(b.spd = a)
                },
                l = function(a) {
                    var b = this;
                    return null == a ? b.dur : (b.s = b.s * a / b.dur, void(b.dur = a))
                },
                m = function() {
                    var a = this;
                    delete c[a.id], a.update(), b("mina.stop." + a.id, a)
                },
                n = function() {
                    var a = this;
                    a.pdif || (delete c[a.id], a.update(), a.pdif = a.get() - a.b)
                },
                o = function() {
                    var a = this;
                    a.pdif && (a.b = a.get() - a.pdif, delete a.pdif, c[a.id] = a)
                },
                p = function() {
                    var a, b = this;
                    if (e(b.start)) {
                        a = [];
                        for (var c = 0, d = b.start.length; d > c; c++) a[c] = +b.start[c] + (b.end[c] - b.start[c]) * b.easing(b.s)
                    } else a = +b.start + (b.end - b.start) * b.easing(b.s);
                    b.set(a)
                },
                q = function() {
                    var a = 0;
                    for (var e in c)
                        if (c.hasOwnProperty(e)) {
                            var f = c[e],
                                g = f.get();
                            a++, f.s = (g - f.b) / (f.dur / f.spd), f.s >= 1 && (delete c[e], f.s = 1, a--, function(a) {
                                setTimeout(function() {
                                    b("mina.finish." + a.id, a)
                                })
                            }(f)), f.update()
                        }
                    a && d(q)
                },
                r = function(a, b, e, f, g, i, s) {
                    var t = {
                        id: h(),
                        start: a,
                        end: b,
                        b: e,
                        s: 0,
                        dur: f - e,
                        spd: 1,
                        get: g,
                        set: i,
                        easing: s || r.linear,
                        status: j,
                        speed: k,
                        duration: l,
                        stop: m,
                        pause: n,
                        resume: o,
                        update: p
                    };
                    c[t.id] = t;
                    var u, v = 0;
                    for (u in c)
                        if (c.hasOwnProperty(u) && (v++, 2 == v)) break;
                    return 1 == v && d(q), t
                };
            return r.time = i, r.getById = function(a) {
                return c[a] || null
            }, r.linear = function(a) {
                return a
            }, r.easeout = function(a) {
                return Math.pow(a, 1.7)
            }, r.easein = function(a) {
                return Math.pow(a, .48)
            }, r.easeinout = function(a) {
                if (1 == a) return 1;
                if (0 == a) return 0;
                var b = .48 - a / 1.04,
                    c = Math.sqrt(.1734 + b * b),
                    d = c - b,
                    e = Math.pow(Math.abs(d), 1 / 3) * (0 > d ? -1 : 1),
                    f = -c - b,
                    g = Math.pow(Math.abs(f), 1 / 3) * (0 > f ? -1 : 1),
                    h = e + g + .5;
                return 3 * (1 - h) * h * h + h * h * h
            }, r.backin = function(a) {
                if (1 == a) return 1;
                var b = 1.70158;
                return a * a * ((b + 1) * a - b)
            }, r.backout = function(a) {
                if (0 == a) return 0;
                a -= 1;
                var b = 1.70158;
                return a * a * ((b + 1) * a + b) + 1
            }, r.elastic = function(a) {
                return a == !!a ? a : Math.pow(2, -10 * a) * Math.sin(2 * (a - .075) * Math.PI / .3) + 1
            }, r.bounce = function(a) {
                var b, c = 7.5625,
                    d = 2.75;
                return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b
            }, a.mina = r, r
        }("undefined" == typeof b ? function() {} : b),
        d = function() {
            function d(a, b) {
                if (a) {
                    if (a.tagName) return y(a);
                    if (f(a, "array") && d.set) return d.set.apply(d, a);
                    if (a instanceof u) return a;
                    if (null == b) return a = z.doc.querySelector(a), y(a)
                }
                return a = null == a ? "100%" : a, b = null == b ? "100%" : b, new x(a, b)
            }

            function e(a, b) {
                if (b) {
                    if ("#text" == a && (a = z.doc.createTextNode(b.text || "")), "string" == typeof a && (a = e(a)), "string" == typeof b) return "xlink:" == b.substring(0, 6) ? a.getAttributeNS(W, b.substring(6)) : "xml:" == b.substring(0, 4) ? a.getAttributeNS(X, b.substring(4)) : a.getAttribute(b);
                    for (var c in b)
                        if (b[A](c)) {
                            var d = B(b[c]);
                            d ? "xlink:" == c.substring(0, 6) ? a.setAttributeNS(W, c.substring(6), d) : "xml:" == c.substring(0, 4) ? a.setAttributeNS(X, c.substring(4), d) : a.setAttribute(c, d) : a.removeAttribute(c)
                        }
                } else a = z.doc.createElementNS(X, a);
                return a
            }

            function f(a, b) {
                return b = B.prototype.toLowerCase.call(b), "finite" == b ? isFinite(a) : "array" == b && (a instanceof Array || Array.isArray && Array.isArray(a)) ? !0 : "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || L.call(a).slice(8, -1).toLowerCase() == b
            }

            function h(a) {
                if ("function" == typeof a || Object(a) !== a) return a;
                var b = new a.constructor;
                for (var c in a) a[A](c) && (b[c] = h(a[c]));
                return b
            }

            function i(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return a.push(a.splice(c, 1)[0])
            }

            function j(a, b, c) {
                function d() {
                    var e = Array.prototype.slice.call(arguments, 0),
                        f = e.join("␀"),
                        g = d.cache = d.cache || {},
                        h = d.count = d.count || [];
                    return g[A](f) ? (i(h, f), c ? c(g[f]) : g[f]) : (h.length >= 1e3 && delete g[h.shift()], h.push(f), g[f] = a.apply(b, e), c ? c(g[f]) : g[f])
                }
                return d
            }

            function k(a, b, c, d, e, f) {
                if (null == e) {
                    var g = a - c,
                        h = b - d;
                    return g || h ? (180 + 180 * E.atan2(-h, -g) / I + 360) % 360 : 0
                }
                return k(a, b, e, f) - k(c, d, e, f)
            }

            function l(a) {
                return a % 360 * I / 180
            }

            function m(a) {
                return 180 * a / I % 360
            }

            function n(a) {
                var b = [];
                return a = a.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(a, c, d) {
                    return d = d.split(/\s*,\s*|\s+/), "rotate" == c && 1 == d.length && d.push(0, 0), "scale" == c && (d.length > 2 ? d = d.slice(0, 2) : 2 == d.length && d.push(0, 0), 1 == d.length && d.push(d[0], 0, 0)), b.push("skewX" == c ? ["m", 1, 0, E.tan(l(d[0])), 1, 0, 0] : "skewY" == c ? ["m", 1, E.tan(l(d[0])), 0, 1, 0, 0] : [c.charAt(0)].concat(d)), a
                }), b
            }

            function o(a, b) {
                var c = eb(a),
                    e = new d.Matrix;
                if (c)
                    for (var f = 0, g = c.length; g > f; f++) {
                        var h, i, j, k, l, m = c[f],
                            n = m.length,
                            o = B(m[0]).toLowerCase(),
                            p = m[0] != o,
                            q = p ? e.invert() : 0;
                        "t" == o && 2 == n ? e.translate(m[1], 0) : "t" == o && 3 == n ? p ? (h = q.x(0, 0), i = q.y(0, 0), j = q.x(m[1], m[2]), k = q.y(m[1], m[2]), e.translate(j - h, k - i)) : e.translate(m[1], m[2]) : "r" == o ? 2 == n ? (l = l || b, e.rotate(m[1], l.x + l.width / 2, l.y + l.height / 2)) : 4 == n && (p ? (j = q.x(m[2], m[3]), k = q.y(m[2], m[3]), e.rotate(m[1], j, k)) : e.rotate(m[1], m[2], m[3])) : "s" == o ? 2 == n || 3 == n ? (l = l || b, e.scale(m[1], m[n - 1], l.x + l.width / 2, l.y + l.height / 2)) : 4 == n ? p ? (j = q.x(m[2], m[3]), k = q.y(m[2], m[3]), e.scale(m[1], m[1], j, k)) : e.scale(m[1], m[1], m[2], m[3]) : 5 == n && (p ? (j = q.x(m[3], m[4]), k = q.y(m[3], m[4]), e.scale(m[1], m[2], j, k)) : e.scale(m[1], m[2], m[3], m[4])) : "m" == o && 7 == n && e.add(m[1], m[2], m[3], m[4], m[5], m[6])
                    }
                return e
            }

            function p(a, b) {
                if (null == b) {
                    var c = !0;
                    if (b = a.node.getAttribute("linearGradient" == a.type || "radialGradient" == a.type ? "gradientTransform" : "pattern" == a.type ? "patternTransform" : "transform"), !b) return new d.Matrix;
                    b = n(b)
                } else b = d._.rgTransform.test(b) ? B(b).replace(/\.{3}|\u2026/g, a._.transform || J) : n(b), f(b, "array") && (b = d.path ? d.path.toString.call(b) : B(b)), a._.transform = b;
                var e = o(b, a.getBBox(1));
                return c ? e : void(a.matrix = e)
            }

            function q(a) {
                var b = a.node.ownerSVGElement && y(a.node.ownerSVGElement) || a.node.parentNode && y(a.node.parentNode) || d.select("svg") || d(0, 0),
                    c = b.select("defs"),
                    e = null == c ? !1 : c.node;
                return e || (e = w("defs", b.node).node), e
            }

            function r(a) {
                return a.node.ownerSVGElement && y(a.node.ownerSVGElement) || d.select("svg")
            }

            function s(a, b, c) {
                function d(a) {
                    if (null == a) return J;
                    if (a == +a) return a;
                    e(j, {
                        width: a
                    });
                    try {
                        return j.getBBox().width
                    } catch (b) {
                        return 0
                    }
                }

                function f(a) {
                    if (null == a) return J;
                    if (a == +a) return a;
                    e(j, {
                        height: a
                    });
                    try {
                        return j.getBBox().height
                    } catch (b) {
                        return 0
                    }
                }

                function g(d, e) {
                    null == b ? i[d] = e(a.attr(d) || 0) : d == b && (i = e(null == c ? a.attr(d) || 0 : c))
                }
                var h = r(a).node,
                    i = {},
                    j = h.querySelector(".svg---mgr");
                switch (j || (j = e("rect"), e(j, {
                    x: -9e9,
                    y: -9e9,
                    width: 10,
                    height: 10,
                    "class": "svg---mgr",
                    fill: "none"
                }), h.appendChild(j)), a.type) {
                    case "rect":
                        g("rx", d), g("ry", f);
                    case "image":
                        g("width", d), g("height", f);
                    case "text":
                        g("x", d), g("y", f);
                        break;
                    case "circle":
                        g("cx", d), g("cy", f), g("r", d);
                        break;
                    case "ellipse":
                        g("cx", d), g("cy", f), g("rx", d), g("ry", f);
                        break;
                    case "line":
                        g("x1", d), g("x2", d), g("y1", f), g("y2", f);
                        break;
                    case "marker":
                        g("refX", d), g("markerWidth", d), g("refY", f), g("markerHeight", f);
                        break;
                    case "radialGradient":
                        g("fx", d), g("fy", f);
                        break;
                    case "tspan":
                        g("dx", d), g("dy", f);
                        break;
                    default:
                        g(b, d)
                }
                return h.removeChild(j), i
            }

            function t(a) {
                f(a, "array") || (a = Array.prototype.slice.call(arguments, 0));
                for (var b = 0, c = 0, d = this.node; this[b];) delete this[b++];
                for (b = 0; b < a.length; b++) "set" == a[b].type ? a[b].forEach(function(a) {
                    d.appendChild(a.node)
                }) : d.appendChild(a[b].node);
                var e = d.childNodes;
                for (b = 0; b < e.length; b++) this[c++] = y(e[b]);
                return this
            }

            function u(a) {
                if (a.snap in Y) return Y[a.snap];
                var b, c = this.id = V();
                try {
                    b = a.ownerSVGElement
                } catch (d) {}
                if (this.node = a, b && (this.paper = new x(b)), this.type = a.tagName, this.anims = {}, this._ = {
                        transform: []
                    }, a.snap = c, Y[c] = this, "g" == this.type && (this.add = t), this.type in {
                        g: 1,
                        mask: 1,
                        pattern: 1
                    })
                    for (var e in x.prototype) x.prototype[A](e) && (this[e] = x.prototype[e])
            }

            function v(a) {
                this.node = a
            }

            function w(a, b) {
                var c = e(a);
                b.appendChild(c);
                var d = y(c);
                return d
            }

            function x(a, b) {
                var c, d, f, g = x.prototype;
                if (a && "svg" == a.tagName) {
                    if (a.snap in Y) return Y[a.snap];
                    var h = a.ownerDocument;
                    c = new u(a), d = a.getElementsByTagName("desc")[0], f = a.getElementsByTagName("defs")[0], d || (d = e("desc"), d.appendChild(h.createTextNode("Created with Snap")), c.node.appendChild(d)), f || (f = e("defs"), c.node.appendChild(f)), c.defs = f;
                    for (var i in g) g[A](i) && (c[i] = g[i]);
                    c.paper = c.root = c
                } else c = w("svg", z.doc.body), e(c.node, {
                    height: b,
                    version: 1.1,
                    width: a,
                    xmlns: X
                });
                return c
            }

            function y(a) {
                return a ? a instanceof u || a instanceof v ? a : a.tagName && "svg" == a.tagName.toLowerCase() ? new x(a) : a.tagName && "object" == a.tagName.toLowerCase() && "image/svg+xml" == a.type ? new x(a.contentDocument.getElementsByTagName("svg")[0]) : new u(a) : a
            }
            d.version = "0.3.0", d.toString = function() {
                return "Snap v" + this.version
            }, d._ = {};
            var z = {
                win: a,
                doc: a.document
            };
            d._.glob = z;
            var A = "hasOwnProperty",
                B = String,
                C = parseFloat,
                D = parseInt,
                E = Math,
                F = E.max,
                G = E.min,
                H = E.abs,
                I = (E.pow, E.PI),
                J = (E.round, ""),
                K = " ",
                L = Object.prototype.toString,
                M = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
                N = "	\n\f\r   ᠎             　\u2028\u2029",
                O = (d._.separator = new RegExp("[," + N + "]+"), new RegExp("[" + N + "]", "g"), new RegExp("[" + N + "]*,[" + N + "]*")),
                P = {
                    hs: 1,
                    rg: 1
                },
                Q = new RegExp("([a-z])[" + N + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + N + "]*,?[" + N + "]*)+)", "ig"),
                R = new RegExp("([rstm])[" + N + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + N + "]*,?[" + N + "]*)+)", "ig"),
                S = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + N + "]*,?[" + N + "]*", "ig"),
                T = 0,
                U = "S" + (+new Date).toString(36),
                V = function() {
                    return U + (T++).toString(36)
                },
                W = "http://www.w3.org/1999/xlink",
                X = "http://www.w3.org/2000/svg",
                Y = {},
                Z = d.url = function(a) {
                    return "url('#" + a + "')"
                };
            d._.$ = e, d._.id = V, d.format = function() {
                var a = /\{([^\}]+)\}/g,
                    b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                    c = function(a, c, d) {
                        var e = d;
                        return c.replace(b, function(a, b, c, d, f) {
                            b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()))
                        }), e = (null == e || e == d ? a : e) + ""
                    };
                return function(b, d) {
                    return B(b).replace(a, function(a, b) {
                        return c(a, b, d)
                    })
                }
            }(), d._.clone = h, d._.cacher = j, d.rad = l, d.deg = m, d.angle = k, d.is = f, d.snapTo = function(a, b, c) {
                if (c = f(c, "finite") ? c : 10, f(a, "array")) {
                    for (var d = a.length; d--;)
                        if (H(a[d] - b) <= c) return a[d]
                } else {
                    a = +a;
                    var e = b % a;
                    if (c > e) return b - e;
                    if (e > a - c) return b - e + a
                }
                return b
            }, d.getRGB = j(function(a) {
                if (!a || (a = B(a)).indexOf("-") + 1) return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: bb
                };
                if ("none" == a) return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    toString: bb
                };
                if (!(P[A](a.toLowerCase().substring(0, 2)) || "#" == a.charAt()) && (a = $(a)), !a) return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: bb
                };
                var b, c, e, g, h, i, j = a.match(M);
                return j ? (j[2] && (e = D(j[2].substring(5), 16), c = D(j[2].substring(3, 5), 16), b = D(j[2].substring(1, 3), 16)), j[3] && (e = D((h = j[3].charAt(3)) + h, 16), c = D((h = j[3].charAt(2)) + h, 16), b = D((h = j[3].charAt(1)) + h, 16)), j[4] && (i = j[4].split(O), b = C(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), c = C(i[1]), "%" == i[1].slice(-1) && (c *= 2.55), e = C(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), "rgba" == j[1].toLowerCase().slice(0, 4) && (g = C(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100)), j[5] ? (i = j[5].split(O), b = C(i[0]), "%" == i[0].slice(-1) && (b /= 100), c = C(i[1]), "%" == i[1].slice(-1) && (c /= 100), e = C(i[2]), "%" == i[2].slice(-1) && (e /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsba" == j[1].toLowerCase().slice(0, 4) && (g = C(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), d.hsb2rgb(b, c, e, g)) : j[6] ? (i = j[6].split(O), b = C(i[0]), "%" == i[0].slice(-1) && (b /= 100), c = C(i[1]), "%" == i[1].slice(-1) && (c /= 100), e = C(i[2]), "%" == i[2].slice(-1) && (e /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsla" == j[1].toLowerCase().slice(0, 4) && (g = C(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), d.hsl2rgb(b, c, e, g)) : (b = G(E.round(b), 255), c = G(E.round(c), 255), e = G(E.round(e), 255), g = G(F(g, 0), 1), j = {
                    r: b,
                    g: c,
                    b: e,
                    toString: bb
                }, j.hex = "#" + (16777216 | e | c << 8 | b << 16).toString(16).slice(1), j.opacity = f(g, "finite") ? g : 1, j)) : {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: bb
                }
            }, d), d.hsb = j(function(a, b, c) {
                return d.hsb2rgb(a, b, c).hex
            }), d.hsl = j(function(a, b, c) {
                return d.hsl2rgb(a, b, c).hex
            }), d.rgb = j(function(a, b, c, d) {
                if (f(d, "finite")) {
                    var e = E.round;
                    return "rgba(" + [e(a), e(b), e(c), +d.toFixed(2)] + ")"
                }
                return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1)
            });
            var $ = function(a) {
                    var b = z.doc.getElementsByTagName("head")[0] || z.doc.getElementsByTagName("svg")[0],
                        c = "rgb(255, 0, 0)";
                    return ($ = j(function(a) {
                        if ("red" == a.toLowerCase()) return c;
                        b.style.color = c, b.style.color = a;
                        var d = z.doc.defaultView.getComputedStyle(b, J).getPropertyValue("color");
                        return d == c ? null : d
                    }))(a)
                },
                _ = function() {
                    return "hsb(" + [this.h, this.s, this.b] + ")"
                },
                ab = function() {
                    return "hsl(" + [this.h, this.s, this.l] + ")"
                },
                bb = function() {
                    return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
                },
                cb = function(a, b, c) {
                    if (null == b && f(a, "object") && "r" in a && "g" in a && "b" in a && (c = a.b, b = a.g, a = a.r), null == b && f(a, string)) {
                        var e = d.getRGB(a);
                        a = e.r, b = e.g, c = e.b
                    }
                    return (a > 1 || b > 1 || c > 1) && (a /= 255, b /= 255, c /= 255), [a, b, c]
                },
                db = function(a, b, c, e) {
                    a = E.round(255 * a), b = E.round(255 * b), c = E.round(255 * c);
                    var g = {
                        r: a,
                        g: b,
                        b: c,
                        opacity: f(e, "finite") ? e : 1,
                        hex: d.rgb(a, b, c),
                        toString: bb
                    };
                    return f(e, "finite") && (g.opacity = e), g
                };
            d.color = function(a) {
                var b;
                return f(a, "object") && "h" in a && "s" in a && "b" in a ? (b = d.hsb2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : f(a, "object") && "h" in a && "s" in a && "l" in a ? (b = d.hsl2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : (f(a, "string") && (a = d.getRGB(a)), f(a, "object") && "r" in a && "g" in a && "b" in a && !("error" in a) ? (b = d.rgb2hsl(a), a.h = b.h, a.s = b.s, a.l = b.l, b = d.rgb2hsb(a), a.v = b.b) : (a = {
                    hex: "none"
                }, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1, a.error = 1)), a.toString = bb, a
            }, d.hsb2rgb = function(a, b, c, d) {
                f(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, a = a.h, d = a.o), a *= 360;
                var e, g, h, i, j;
                return a = a % 360 / 60, j = c * b, i = j * (1 - H(a % 2 - 1)), e = g = h = c - j, a = ~~a, e += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], db(e, g, h, d)
            }, d.hsl2rgb = function(a, b, c, d) {
                f(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h), (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100), a *= 360;
                var e, g, h, i, j;
                return a = a % 360 / 60, j = 2 * b * (.5 > c ? c : 1 - c), i = j * (1 - H(a % 2 - 1)), e = g = h = c - j / 2, a = ~~a, e += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], db(e, g, h, d)
            }, d.rgb2hsb = function(a, b, c) {
                c = cb(a, b, c), a = c[0], b = c[1], c = c[2];
                var d, e, f, g;
                return f = F(a, b, c), g = f - G(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = (d + 360) % 6 * 60 / 360, e = 0 == g ? 0 : g / f, {
                    h: d,
                    s: e,
                    b: f,
                    toString: _
                }
            }, d.rgb2hsl = function(a, b, c) {
                c = cb(a, b, c), a = c[0], b = c[1], c = c[2];
                var d, e, f, g, h, i;
                return g = F(a, b, c), h = G(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = (d + 360) % 6 * 60 / 360, f = (g + h) / 2, e = 0 == i ? 0 : .5 > f ? i / (2 * f) : i / (2 - 2 * f), {
                    h: d,
                    s: e,
                    l: f,
                    toString: ab
                }
            }, d.parsePathString = function(a) {
                if (!a) return null;
                var b = d.path(a);
                if (b.arr) return d.path.clone(b.arr);
                var c = {
                        a: 7,
                        c: 6,
                        o: 2,
                        h: 1,
                        l: 2,
                        m: 2,
                        r: 4,
                        q: 4,
                        s: 4,
                        t: 2,
                        v: 1,
                        u: 3,
                        z: 0
                    },
                    e = [];
                return f(a, "array") && f(a[0], "array") && (e = d.path.clone(a)), e.length || B(a).replace(Q, function(a, b, d) {
                    var f = [],
                        g = b.toLowerCase();
                    if (d.replace(S, function(a, b) {
                            b && f.push(+b)
                        }), "m" == g && f.length > 2 && (e.push([b].concat(f.splice(0, 2))), g = "l", b = "m" == b ? "l" : "L"), "o" == g && 1 == f.length && e.push([b, f[0]]), "r" == g) e.push([b].concat(f));
                    else
                        for (; f.length >= c[g] && (e.push([b].concat(f.splice(0, c[g]))), c[g]););
                }), e.toString = d.path.toString, b.arr = d.path.clone(e), e
            };
            var eb = d.parseTransformString = function(a) {
                if (!a) return null;
                var b = [];
                return f(a, "array") && f(a[0], "array") && (b = d.path.clone(a)), b.length || B(a).replace(R, function(a, c, d) {
                    {
                        var e = [];
                        c.toLowerCase()
                    }
                    d.replace(S, function(a, b) {
                        b && e.push(+b)
                    }), b.push([c].concat(e))
                }), b.toString = d.path.toString, b
            };
            d._.svgTransform2string = n, d._.rgTransform = new RegExp("^[a-z][" + N + "]*-?\\.?\\d", "i"), d._.transform2matrix = o, d._unit2px = s;
            z.doc.contains || z.doc.compareDocumentPosition ? function(a, b) {
                var c = 9 == a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a == d || !(!d || 1 != d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b;)
                        if (b = b.parentNode, b == a) return !0;
                return !1
            };
            d._.getSomeDefs = q, d._.getSomeSVG = r, d.select = function(a) {
                    return y(z.doc.querySelector(a))
                }, d.selectAll = function(a) {
                    for (var b = z.doc.querySelectorAll(a), c = (d.set || Array)(), e = 0; e < b.length; e++) c.push(y(b[e]));
                    return c
                }, setInterval(function() {
                    for (var a in Y)
                        if (Y[A](a)) {
                            var b = Y[a],
                                c = b.node;
                            ("svg" != b.type && !c.ownerSVGElement || "svg" == b.type && (!c.parentNode || "ownerSVGElement" in c.parentNode && !c.ownerSVGElement)) && delete Y[a]
                        }
                }, 1e4),
                function(a) {
                    function g(a) {
                        function b(a, b) {
                            var c = e(a.node, b);
                            c = c && c.match(g), c = c && c[2], c && "#" == c.charAt() && (c = c.substring(1), c && (i[c] = (i[c] || []).concat(function(c) {
                                var d = {};
                                d[b] = Z(c), e(a.node, d)
                            })))
                        }

                        function c(a) {
                            var b = e(a.node, "xlink:href");
                            b && "#" == b.charAt() && (b = b.substring(1), b && (i[b] = (i[b] || []).concat(function(b) {
                                a.attr("xlink:href", "#" + b)
                            })))
                        }
                        for (var d, f = a.selectAll("*"), g = /^\s*url\(("|'|)(.*)\1\)\s*$/, h = [], i = {}, j = 0, k = f.length; k > j; j++) {
                            d = f[j], b(d, "fill"), b(d, "stroke"), b(d, "filter"), b(d, "mask"), b(d, "clip-path"), c(d);
                            var l = e(d.node, "id");
                            l && (e(d.node, {
                                id: d.id
                            }), h.push({
                                old: l,
                                id: d.id
                            }))
                        }
                        for (j = 0, k = h.length; k > j; j++) {
                            var m = i[h[j].old];
                            if (m)
                                for (var n = 0, o = m.length; o > n; n++) m[n](h[j].id)
                        }
                    }

                    function h(a, b, c) {
                        return function(d) {
                            var e = d.slice(a, b);
                            return 1 == e.length && (e = e[0]), c ? c(e) : e
                        }
                    }

                    function i(a) {
                        return function() {
                            var b = a ? "<" + this.type : "",
                                c = this.node.attributes,
                                d = this.node.childNodes;
                            if (a)
                                for (var e = 0, f = c.length; f > e; e++) b += " " + c[e].name + '="' + c[e].value.replace(/"/g, '\\"') + '"';
                            if (d.length) {
                                for (a && (b += ">"), e = 0, f = d.length; f > e; e++) 3 == d[e].nodeType ? b += d[e].nodeValue : 1 == d[e].nodeType && (b += y(d[e]).toString());
                                a && (b += "</" + this.type + ">")
                            } else a && (b += "/>");
                            return b
                        }
                    }
                    a.attr = function(a, c) {
                        {
                            var d = this;
                            d.node
                        }
                        if (!a) return d;
                        if (f(a, "string")) {
                            if (!(arguments.length > 1)) return b("snap.util.getattr." + a, d).firstDefined();
                            var e = {};
                            e[a] = c, a = e
                        }
                        for (var g in a) a[A](g) && b("snap.util.attr." + g, d, a[g]);
                        return d
                    }, a.getBBox = function(a) {
                        if (!d.Matrix || !d.path) return this.node.getBBox();
                        var b = this,
                            c = new d.Matrix;
                        if (b.removed) return d._.box();
                        for (;
                            "use" == b.type;)
                            if (a || (c = c.add(b.transform().localMatrix.translate(b.attr("x") || 0, b.attr("y") || 0))), b.original) b = b.original;
                            else {
                                var e = b.attr("xlink:href");
                                b = b.original = b.node.ownerDocument.getElementById(e.substring(e.indexOf("#") + 1))
                            }
                        var f = b._,
                            g = d.path.get[b.type] || d.path.get.deflt;
                        try {
                            return a ? (f.bboxwt = g ? d.path.getBBox(b.realPath = g(b)) : d._.box(b.node.getBBox()), d._.box(f.bboxwt)) : (b.realPath = g(b), b.matrix = b.transform().localMatrix, f.bbox = d.path.getBBox(d.path.map(b.realPath, c.add(b.matrix))), d._.box(f.bbox))
                        } catch (h) {
                            return d._.box()
                        }
                    };
                    var j = function() {
                        return this.string
                    };
                    a.transform = function(a) {
                        var b = this._;
                        if (null == a) {
                            for (var c, f = this, g = new d.Matrix(this.node.getCTM()), h = p(this), i = [h], k = new d.Matrix, l = h.toTransformString(), m = B(h) == B(this.matrix) ? B(b.transform) : l;
                                "svg" != f.type && (f = f.parent());) i.push(p(f));
                            for (c = i.length; c--;) k.add(i[c]);
                            return {
                                string: m,
                                globalMatrix: g,
                                totalMatrix: k,
                                localMatrix: h,
                                diffMatrix: g.clone().add(h.invert()),
                                global: g.toTransformString(),
                                total: k.toTransformString(),
                                local: l,
                                toString: j
                            }
                        }
                        return a instanceof d.Matrix ? this.matrix = a : p(this, a), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? e(this.node, {
                            gradientTransform: this.matrix
                        }) : "pattern" == this.type ? e(this.node, {
                            patternTransform: this.matrix
                        }) : e(this.node, {
                            transform: this.matrix
                        })), this
                    }, a.parent = function() {
                        return y(this.node.parentNode)
                    }, a.append = a.add = function(a) {
                        if (a) {
                            if ("set" == a.type) {
                                var b = this;
                                return a.forEach(function(a) {
                                    b.add(a)
                                }), this
                            }
                            a = y(a), this.node.appendChild(a.node), a.paper = this.paper
                        }
                        return this
                    }, a.appendTo = function(a) {
                        return a && (a = y(a), a.append(this)), this
                    }, a.prepend = function(a) {
                        if (a) {
                            if ("set" == a.type) {
                                var b, c = this;
                                return a.forEach(function(a) {
                                    b ? b.after(a) : c.prepend(a), b = a
                                }), this
                            }
                            a = y(a);
                            var d = a.parent();
                            this.node.insertBefore(a.node, this.node.firstChild), this.add && this.add(), a.paper = this.paper, this.parent() && this.parent().add(), d && d.add()
                        }
                        return this
                    }, a.prependTo = function(a) {
                        return a = y(a), a.prepend(this), this
                    }, a.before = function(a) {
                        if ("set" == a.type) {
                            var b = this;
                            return a.forEach(function(a) {
                                var c = a.parent();
                                b.node.parentNode.insertBefore(a.node, b.node), c && c.add()
                            }), this.parent().add(), this
                        }
                        a = y(a);
                        var c = a.parent();
                        return this.node.parentNode.insertBefore(a.node, this.node), this.parent() && this.parent().add(), c && c.add(), a.paper = this.paper, this
                    }, a.after = function(a) {
                        a = y(a);
                        var b = a.parent();
                        return this.node.nextSibling ? this.node.parentNode.insertBefore(a.node, this.node.nextSibling) : this.node.parentNode.appendChild(a.node), this.parent() && this.parent().add(), b && b.add(), a.paper = this.paper, this
                    }, a.insertBefore = function(a) {
                        a = y(a);
                        var b = this.parent();
                        return a.node.parentNode.insertBefore(this.node, a.node), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this
                    }, a.insertAfter = function(a) {
                        a = y(a);
                        var b = this.parent();
                        return a.node.parentNode.insertBefore(this.node, a.node.nextSibling), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this
                    }, a.remove = function() {
                        var a = this.parent();
                        return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, a && a.add(), this
                    }, a.select = function(a) {
                        return y(this.node.querySelector(a))
                    }, a.selectAll = function(a) {
                        for (var b = this.node.querySelectorAll(a), c = (d.set || Array)(), e = 0; e < b.length; e++) c.push(y(b[e]));
                        return c
                    }, a.asPX = function(a, b) {
                        return null == b && (b = this.attr(a)), +s(this, a, b)
                    }, a.use = function() {
                        var a, b = this.node.id;
                        return b || (b = this.id, e(this.node, {
                            id: b
                        })), a = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? w(this.type, this.node.parentNode) : w("use", this.node.parentNode), e(a.node, {
                            "xlink:href": "#" + b
                        }), a.original = this, a
                    };
                    var k = /\S+/g;
                    a.addClass = function(a) {
                        var b, c, d, e, f = (a || "").match(k) || [],
                            g = this.node,
                            h = g.className.baseVal,
                            i = h.match(k) || [];
                        if (f.length) {
                            for (b = 0; d = f[b++];) c = i.indexOf(d), ~c || i.push(d);
                            e = i.join(" "), h != e && (g.className.baseVal = e)
                        }
                        return this
                    }, a.removeClass = function(a) {
                        var b, c, d, e, f = (a || "").match(k) || [],
                            g = this.node,
                            h = g.className.baseVal,
                            i = h.match(k) || [];
                        if (i.length) {
                            for (b = 0; d = f[b++];) c = i.indexOf(d), ~c && i.splice(c, 1);
                            e = i.join(" "), h != e && (g.className.baseVal = e)
                        }
                        return this
                    }, a.hasClass = function(a) {
                        var b = this.node,
                            c = b.className.baseVal,
                            d = c.match(k) || [];
                        return !!~d.indexOf(a)
                    }, a.toggleClass = function(a, b) {
                        if (null != b) return b ? this.addClass(a) : this.removeClass(a);
                        var c, d, e, f, g = (a || "").match(k) || [],
                            h = this.node,
                            i = h.className.baseVal,
                            j = i.match(k) || [];
                        for (c = 0; e = g[c++];) d = j.indexOf(e), ~d ? j.splice(d, 1) : j.push(e);
                        return f = j.join(" "), i != f && (h.className.baseVal = f), this
                    }, a.clone = function() {
                        var a = y(this.node.cloneNode(!0));
                        return e(a.node, "id") && e(a.node, {
                            id: a.id
                        }), g(a), a.insertAfter(this), a
                    }, a.toDefs = function() {
                        var a = q(this);
                        return a.appendChild(this.node), this
                    }, a.pattern = a.toPattern = function(a, b, c, d) {
                        var g = w("pattern", q(this));
                        return null == a && (a = this.getBBox()), f(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, a = a.x), e(g.node, {
                            x: a,
                            y: b,
                            width: c,
                            height: d,
                            patternUnits: "userSpaceOnUse",
                            id: g.id,
                            viewBox: [a, b, c, d].join(" ")
                        }), g.node.appendChild(this.node), g
                    }, a.marker = function(a, b, c, d, g, h) {
                        var i = w("marker", q(this));
                        return null == a && (a = this.getBBox()), f(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, g = a.refX || a.cx, h = a.refY || a.cy, a = a.x), e(i.node, {
                            viewBox: [a, b, c, d].join(K),
                            markerWidth: c,
                            markerHeight: d,
                            orient: "auto",
                            refX: g || 0,
                            refY: h || 0,
                            id: i.id
                        }), i.node.appendChild(this.node), i
                    };
                    var l = function(a, b, d, e) {
                        "function" != typeof d || d.length || (e = d, d = c.linear), this.attr = a, this.dur = b, d && (this.easing = d), e && (this.callback = e)
                    };
                    d._.Animation = l, d.animation = function(a, b, c, d) {
                        return new l(a, b, c, d)
                    }, a.inAnim = function() {
                        var a = this,
                            b = [];
                        for (var c in a.anims) a.anims[A](c) && ! function(a) {
                            b.push({
                                anim: new l(a._attrs, a.dur, a.easing, a._callback),
                                mina: a,
                                curStatus: a.status(),
                                status: function(b) {
                                    return a.status(b)
                                },
                                stop: function() {
                                    a.stop()
                                }
                            })
                        }(a.anims[c]);
                        return b
                    }, d.animate = function(a, d, e, f, g, h) {
                        "function" != typeof g || g.length || (h = g, g = c.linear);
                        var i = c.time(),
                            j = c(a, d, i, i + f, c.time, e, g);
                        return h && b.once("mina.finish." + j.id, h), j
                    }, a.stop = function() {
                        for (var a = this.inAnim(), b = 0, c = a.length; c > b; b++) a[b].stop();
                        return this
                    }, a.animate = function(a, d, e, g) {
                        "function" != typeof e || e.length || (g = e, e = c.linear), a instanceof l && (g = a.callback, e = a.easing, d = e.dur, a = a.attr);
                        var i, j, k, m, n = [],
                            o = [],
                            p = {},
                            q = this;
                        for (var r in a)
                            if (a[A](r)) {
                                q.equal ? (m = q.equal(r, B(a[r])), i = m.from, j = m.to, k = m.f) : (i = +q.attr(r), j = +a[r]);
                                var s = f(i, "array") ? i.length : 1;
                                p[r] = h(n.length, n.length + s, k), n = n.concat(i), o = o.concat(j)
                            }
                        var t = c.time(),
                            u = c(n, o, t, t + d, c.time, function(a) {
                                var b = {};
                                for (var c in p) p[A](c) && (b[c] = p[c](a));
                                q.attr(b)
                            }, e);
                        return q.anims[u.id] = u, u._attrs = a, u._callback = g, b("snap.animcreated." + q.id, u), b.once("mina.finish." + u.id, function() {
                            delete q.anims[u.id], g && g.call(q)
                        }), b.once("mina.stop." + u.id, function() {
                            delete q.anims[u.id]
                        }), q
                    };
                    var m = {};
                    a.data = function(a, c) {
                        var e = m[this.id] = m[this.id] || {};
                        if (0 == arguments.length) return b("snap.data.get." + this.id, this, e, null), e;
                        if (1 == arguments.length) {
                            if (d.is(a, "object")) {
                                for (var f in a) a[A](f) && this.data(f, a[f]);
                                return this
                            }
                            return b("snap.data.get." + this.id, this, e[a], a), e[a]
                        }
                        return e[a] = c, b("snap.data.set." + this.id, this, c, a), this
                    }, a.removeData = function(a) {
                        return null == a ? m[this.id] = {} : m[this.id] && delete m[this.id][a], this
                    }, a.outerSVG = a.toString = i(1), a.innerSVG = i()
                }(u.prototype), d.parse = function(a) {
                    var b = z.doc.createDocumentFragment(),
                        c = !0,
                        d = z.doc.createElement("div");
                    if (a = B(a), a.match(/^\s*<\s*svg(?:\s|>)/) || (a = "<svg>" + a + "</svg>", c = !1), d.innerHTML = a, a = d.getElementsByTagName("svg")[0])
                        if (c) b = a;
                        else
                            for (; a.firstChild;) b.appendChild(a.firstChild);
                    return d.innerHTML = J, new v(b)
                }, v.prototype.select = u.prototype.select, v.prototype.selectAll = u.prototype.selectAll, d.fragment = function() {
                    for (var a = Array.prototype.slice.call(arguments, 0), b = z.doc.createDocumentFragment(), c = 0, e = a.length; e > c; c++) {
                        var f = a[c];
                        f.node && f.node.nodeType && b.appendChild(f.node), f.nodeType && b.appendChild(f), "string" == typeof f && b.appendChild(d.parse(f).node)
                    }
                    return new v(b)
                }, d._.make = w, d._.wrap = y, x.prototype.el = function(a, b) {
                    var c = w(a, this.node);
                    return b && c.attr(b), c
                }, b.on("snap.util.getattr", function() {
                    var a = b.nt();
                    a = a.substring(a.lastIndexOf(".") + 1);
                    var c = a.replace(/[A-Z]/g, function(a) {
                        return "-" + a.toLowerCase()
                    });
                    return fb[A](c) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(c) : e(this.node, a)
                });
            var fb = {
                "alignment-baseline": 0,
                "baseline-shift": 0,
                clip: 0,
                "clip-path": 0,
                "clip-rule": 0,
                color: 0,
                "color-interpolation": 0,
                "color-interpolation-filters": 0,
                "color-profile": 0,
                "color-rendering": 0,
                cursor: 0,
                direction: 0,
                display: 0,
                "dominant-baseline": 0,
                "enable-background": 0,
                fill: 0,
                "fill-opacity": 0,
                "fill-rule": 0,
                filter: 0,
                "flood-color": 0,
                "flood-opacity": 0,
                font: 0,
                "font-family": 0,
                "font-size": 0,
                "font-size-adjust": 0,
                "font-stretch": 0,
                "font-style": 0,
                "font-variant": 0,
                "font-weight": 0,
                "glyph-orientation-horizontal": 0,
                "glyph-orientation-vertical": 0,
                "image-rendering": 0,
                kerning: 0,
                "letter-spacing": 0,
                "lighting-color": 0,
                marker: 0,
                "marker-end": 0,
                "marker-mid": 0,
                "marker-start": 0,
                mask: 0,
                opacity: 0,
                overflow: 0,
                "pointer-events": 0,
                "shape-rendering": 0,
                "stop-color": 0,
                "stop-opacity": 0,
                stroke: 0,
                "stroke-dasharray": 0,
                "stroke-dashoffset": 0,
                "stroke-linecap": 0,
                "stroke-linejoin": 0,
                "stroke-miterlimit": 0,
                "stroke-opacity": 0,
                "stroke-width": 0,
                "text-anchor": 0,
                "text-decoration": 0,
                "text-rendering": 0,
                "unicode-bidi": 0,
                visibility: 0,
                "word-spacing": 0,
                "writing-mode": 0
            };
            b.on("snap.util.attr", function(a) {
                    var c = b.nt(),
                        d = {};
                    c = c.substring(c.lastIndexOf(".") + 1), d[c] = a;
                    var f = c.replace(/-(\w)/gi, function(a, b) {
                            return b.toUpperCase()
                        }),
                        g = c.replace(/[A-Z]/g, function(a) {
                            return "-" + a.toLowerCase()
                        });
                    fb[A](g) ? this.node.style[f] = null == a ? J : a : e(this.node, d)
                }),
                function() {}(x.prototype), d.ajax = function(a, c, d, e) {
                    var g = new XMLHttpRequest,
                        h = V();
                    if (g) {
                        if (f(c, "function")) e = d, d = c, c = null;
                        else if (f(c, "object")) {
                            var i = [];
                            for (var j in c) c.hasOwnProperty(j) && i.push(encodeURIComponent(j) + "=" + encodeURIComponent(c[j]));
                            c = i.join("&")
                        }
                        return g.open(c ? "POST" : "GET", a, !0), c && (g.setRequestHeader("X-Requested-With", "XMLHttpRequest"), g.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), d && (b.once("snap.ajax." + h + ".0", d), b.once("snap.ajax." + h + ".200", d), b.once("snap.ajax." + h + ".304", d)), g.onreadystatechange = function() {
                            4 == g.readyState && b("snap.ajax." + h + "." + g.status, e, g)
                        }, 4 == g.readyState ? g : (g.send(c), g)
                    }
                }, d.load = function(a, b, c) {
                    d.ajax(a, function(a) {
                        var e = d.parse(a.responseText);
                        c ? b.call(c, e) : b(e)
                    })
                };
            var gb = function(a) {
                var b = a.getBoundingClientRect(),
                    c = a.ownerDocument,
                    d = c.body,
                    e = c.documentElement,
                    f = e.clientTop || d.clientTop || 0,
                    h = e.clientLeft || d.clientLeft || 0,
                    i = b.top + (g.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
                    j = b.left + (g.win.pageXOffset || e.scrollLeft || d.scrollLeft) - h;
                return {
                    y: i,
                    x: j
                }
            };
            return d.getElementByPoint = function(a, b) {
                var c = this,
                    d = (c.canvas, z.doc.elementFromPoint(a, b));
                if (z.win.opera && "svg" == d.tagName) {
                    var e = gb(d),
                        f = d.createSVGRect();
                    f.x = a - e.x, f.y = b - e.y, f.width = f.height = 1;
                    var g = d.getIntersectionList(f, null);
                    g.length && (d = g[g.length - 1])
                }
                return d ? y(d) : null
            }, d.plugin = function(a) {
                a(d, u, x, z, v)
            }, z.win.Snap = d, d
        }();
    return d.plugin(function(a) {
        function b(a, b, d, e, f, g) {
            return null == b && "[object SVGMatrix]" == c.call(a) ? (this.a = a.a, this.b = a.b, this.c = a.c, this.d = a.d, this.e = a.e, void(this.f = a.f)) : void(null != a ? (this.a = +a, this.b = +b, this.c = +d, this.d = +e, this.e = +f, this.f = +g) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
        }
        var c = Object.prototype.toString,
            d = String,
            e = Math,
            f = "";
        ! function(c) {
            function g(a) {
                return a[0] * a[0] + a[1] * a[1]
            }

            function h(a) {
                var b = e.sqrt(g(a));
                a[0] && (a[0] /= b), a[1] && (a[1] /= b)
            }
            c.add = function(a, c, d, e, f, g) {
                var h, i, j, k, l = [
                        [],
                        [],
                        []
                    ],
                    m = [
                        [this.a, this.c, this.e],
                        [this.b, this.d, this.f],
                        [0, 0, 1]
                    ],
                    n = [
                        [a, d, f],
                        [c, e, g],
                        [0, 0, 1]
                    ];
                for (a && a instanceof b && (n = [
                        [a.a, a.c, a.e],
                        [a.b, a.d, a.f],
                        [0, 0, 1]
                    ]), h = 0; 3 > h; h++)
                    for (i = 0; 3 > i; i++) {
                        for (k = 0, j = 0; 3 > j; j++) k += m[h][j] * n[j][i];
                        l[h][i] = k
                    }
                return this.a = l[0][0], this.b = l[1][0], this.c = l[0][1], this.d = l[1][1], this.e = l[0][2], this.f = l[1][2], this
            }, c.invert = function() {
                var a = this,
                    c = a.a * a.d - a.b * a.c;
                return new b(a.d / c, -a.b / c, -a.c / c, a.a / c, (a.c * a.f - a.d * a.e) / c, (a.b * a.e - a.a * a.f) / c)
            }, c.clone = function() {
                return new b(this.a, this.b, this.c, this.d, this.e, this.f)
            }, c.translate = function(a, b) {
                return this.add(1, 0, 0, 1, a, b)
            }, c.scale = function(a, b, c, d) {
                return null == b && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, -c, -d), this
            }, c.rotate = function(b, c, d) {
                b = a.rad(b), c = c || 0, d = d || 0;
                var f = +e.cos(b).toFixed(9),
                    g = +e.sin(b).toFixed(9);
                return this.add(f, g, -g, f, c, d), this.add(1, 0, 0, 1, -c, -d)
            }, c.x = function(a, b) {
                return a * this.a + b * this.c + this.e
            }, c.y = function(a, b) {
                return a * this.b + b * this.d + this.f
            }, c.get = function(a) {
                return +this[d.fromCharCode(97 + a)].toFixed(4)
            }, c.toString = function() {
                return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
            }, c.offset = function() {
                return [this.e.toFixed(4), this.f.toFixed(4)]
            }, c.determinant = function() {
                return this.a * this.d - this.b * this.c
            }, c.split = function() {
                var b = {};
                b.dx = this.e, b.dy = this.f;
                var c = [
                    [this.a, this.c],
                    [this.b, this.d]
                ];
                b.scalex = e.sqrt(g(c[0])), h(c[0]), b.shear = c[0][0] * c[1][0] + c[0][1] * c[1][1], c[1] = [c[1][0] - c[0][0] * b.shear, c[1][1] - c[0][1] * b.shear], b.scaley = e.sqrt(g(c[1])), h(c[1]), b.shear /= b.scaley, this.determinant() < 0 && (b.scalex = -b.scalex);
                var d = -c[0][1],
                    f = c[1][1];
                return 0 > f ? (b.rotate = a.deg(e.acos(f)), 0 > d && (b.rotate = 360 - b.rotate)) : b.rotate = a.deg(e.asin(d)), b.isSimple = !(+b.shear.toFixed(9) || b.scalex.toFixed(9) != b.scaley.toFixed(9) && b.rotate), b.isSuperSimple = !+b.shear.toFixed(9) && b.scalex.toFixed(9) == b.scaley.toFixed(9) && !b.rotate, b.noRotation = !+b.shear.toFixed(9) && !b.rotate, b
            }, c.toTransformString = function(a) {
                var b = a || this.split();
                return +b.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [+b.dx.toFixed(4), +b.dy.toFixed(4)] : f) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : f) + (b.rotate ? "r" + [+b.rotate.toFixed(4), 0, 0] : f))
            }
        }(b.prototype), a.Matrix = b, a.matrix = function(a, c, d, e, f, g) {
            return new b(a, c, d, e, f, g)
        }
    }), d.plugin(function(a, c, d, e, f) {
        function g(d) {
            return function(e) {
                if (b.stop(), e instanceof f && 1 == e.node.childNodes.length && ("radialGradient" == e.node.firstChild.tagName || "linearGradient" == e.node.firstChild.tagName || "pattern" == e.node.firstChild.tagName) && (e = e.node.firstChild, n(this).appendChild(e), e = l(e)), e instanceof c)
                    if ("radialGradient" == e.type || "linearGradient" == e.type || "pattern" == e.type) {
                        e.node.id || p(e.node, {
                            id: e.id
                        });
                        var g = q(e.node.id)
                    } else g = e.attr(d);
                else if (g = a.color(e), g.error) {
                    var h = a(n(this).ownerSVGElement).gradient(e);
                    h ? (h.node.id || p(h.node, {
                        id: h.id
                    }), g = q(h.node.id)) : g = e
                } else g = r(g);
                var i = {};
                i[d] = g, p(this.node, i), this.node.style[d] = t
            }
        }

        function h(a) {
            b.stop(), a == +a && (a += "px"), this.node.style.fontSize = a
        }

        function i(a) {
            for (var b = [], c = a.childNodes, d = 0, e = c.length; e > d; d++) {
                var f = c[d];
                3 == f.nodeType && b.push(f.nodeValue), "tspan" == f.tagName && b.push(1 == f.childNodes.length && 3 == f.firstChild.nodeType ? f.firstChild.nodeValue : i(f))
            }
            return b
        }

        function j() {
            return b.stop(), this.node.style.fontSize
        }
        var k = a._.make,
            l = a._.wrap,
            m = a.is,
            n = a._.getSomeDefs,
            o = /^url\(#?([^)]+)\)$/,
            p = a._.$,
            q = a.url,
            r = String,
            s = a._.separator,
            t = "";
        b.on("snap.util.attr.mask", function(a) {
                if (a instanceof c || a instanceof f) {
                    if (b.stop(), a instanceof f && 1 == a.node.childNodes.length && (a = a.node.firstChild, n(this).appendChild(a), a = l(a)), "mask" == a.type) var d = a;
                    else d = k("mask", n(this)), d.node.appendChild(a.node);
                    !d.node.id && p(d.node, {
                        id: d.id
                    }), p(this.node, {
                        mask: q(d.id)
                    })
                }
            }),
            function(a) {
                b.on("snap.util.attr.clip", a), b.on("snap.util.attr.clip-path", a), b.on("snap.util.attr.clipPath", a)
            }(function(a) {
                if (a instanceof c || a instanceof f) {
                    if (b.stop(), "clipPath" == a.type) var d = a;
                    else d = k("clipPath", n(this)), d.node.appendChild(a.node), !d.node.id && p(d.node, {
                        id: d.id
                    });
                    p(this.node, {
                        "clip-path": q(d.id)
                    })
                }
            }), b.on("snap.util.attr.fill", g("fill")), b.on("snap.util.attr.stroke", g("stroke"));
        var u = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
        b.on("snap.util.grad.parse", function(a) {
                a = r(a);
                var b = a.match(u);
                if (!b) return null;
                var c = b[1],
                    d = b[2],
                    e = b[3];
                return d = d.split(/\s*,\s*/).map(function(a) {
                    return +a == a ? +a : a
                }), 1 == d.length && 0 == d[0] && (d = []), e = e.split("-"), e = e.map(function(a) {
                    a = a.split(":");
                    var b = {
                        color: a[0]
                    };
                    return a[1] && (b.offset = parseFloat(a[1])), b
                }), {
                    type: c,
                    params: d,
                    stops: e
                }
            }), b.on("snap.util.attr.d", function(c) {
                b.stop(), m(c, "array") && m(c[0], "array") && (c = a.path.toString.call(c)), c = r(c), c.match(/[ruo]/i) && (c = a.path.toAbsolute(c)), p(this.node, {
                    d: c
                })
            })(-1), b.on("snap.util.attr.#text", function(a) {
                b.stop(), a = r(a);
                for (var c = e.doc.createTextNode(a); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
                this.node.appendChild(c)
            })(-1), b.on("snap.util.attr.path", function(a) {
                b.stop(), this.attr({
                    d: a
                })
            })(-1), b.on("snap.util.attr.class", function(a) {
                b.stop(), this.node.className.baseVal = a
            })(-1), b.on("snap.util.attr.viewBox", function(a) {
                var c;
                c = m(a, "object") && "x" in a ? [a.x, a.y, a.width, a.height].join(" ") : m(a, "array") ? a.join(" ") : a, p(this.node, {
                    viewBox: c
                }), b.stop()
            })(-1), b.on("snap.util.attr.transform", function(a) {
                this.transform(a), b.stop()
            })(-1), b.on("snap.util.attr.r", function(a) {
                "rect" == this.type && (b.stop(), p(this.node, {
                    rx: a,
                    ry: a
                }))
            })(-1), b.on("snap.util.attr.textpath", function(a) {
                if (b.stop(), "text" == this.type) {
                    var d, e, f;
                    if (!a && this.textPath) {
                        for (e = this.textPath; e.node.firstChild;) this.node.appendChild(e.node.firstChild);
                        return e.remove(), void delete this.textPath
                    }
                    if (m(a, "string")) {
                        var g = n(this),
                            h = l(g.parentNode).path(a);
                        g.appendChild(h.node), d = h.id, h.attr({
                            id: d
                        })
                    } else a = l(a), a instanceof c && (d = a.attr("id"), d || (d = a.id, a.attr({
                        id: d
                    })));
                    if (d)
                        if (e = this.textPath, f = this.node, e) e.attr({
                            "xlink:href": "#" + d
                        });
                        else {
                            for (e = p("textPath", {
                                    "xlink:href": "#" + d
                                }); f.firstChild;) e.appendChild(f.firstChild);
                            f.appendChild(e), this.textPath = l(e)
                        }
                }
            })(-1), b.on("snap.util.attr.text", function(a) {
                if ("text" == this.type) {
                    for (var c = this.node, d = function(a) {
                            var b = p("tspan");
                            if (m(a, "array"))
                                for (var c = 0; c < a.length; c++) b.appendChild(d(a[c]));
                            else b.appendChild(e.doc.createTextNode(a));
                            return b.normalize && b.normalize(), b
                        }; c.firstChild;) c.removeChild(c.firstChild);
                    for (var f = d(a); f.firstChild;) c.appendChild(f.firstChild)
                }
                b.stop()
            })(-1), b.on("snap.util.attr.fontSize", h)(-1), b.on("snap.util.attr.font-size", h)(-1), b.on("snap.util.getattr.transform", function() {
                return b.stop(), this.transform()
            })(-1), b.on("snap.util.getattr.textpath", function() {
                return b.stop(), this.textPath
            })(-1),
            function() {
                function c(c) {
                    return function() {
                        b.stop();
                        var d = e.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + c);
                        return "none" == d ? d : a(e.doc.getElementById(d.match(o)[1]))
                    }
                }

                function d(a) {
                    return function(c) {
                        b.stop();
                        var d = "marker" + a.charAt(0).toUpperCase() + a.substring(1);
                        if ("" == c || !c) return void(this.node.style[d] = "none");
                        if ("marker" == c.type) {
                            var e = c.node.id;
                            return e || p(c.node, {
                                id: c.id
                            }), void(this.node.style[d] = q(e))
                        }
                    }
                }
                b.on("snap.util.getattr.marker-end", c("end"))(-1), b.on("snap.util.getattr.markerEnd", c("end"))(-1), b.on("snap.util.getattr.marker-start", c("start"))(-1), b.on("snap.util.getattr.markerStart", c("start"))(-1), b.on("snap.util.getattr.marker-mid", c("mid"))(-1), b.on("snap.util.getattr.markerMid", c("mid"))(-1), b.on("snap.util.attr.marker-end", d("end"))(-1), b.on("snap.util.attr.markerEnd", d("end"))(-1), b.on("snap.util.attr.marker-start", d("start"))(-1), b.on("snap.util.attr.markerStart", d("start"))(-1), b.on("snap.util.attr.marker-mid", d("mid"))(-1), b.on("snap.util.attr.markerMid", d("mid"))(-1)
            }(), b.on("snap.util.getattr.r", function() {
                return "rect" == this.type && p(this.node, "rx") == p(this.node, "ry") ? (b.stop(), p(this.node, "rx")) : void 0
            })(-1), b.on("snap.util.getattr.text", function() {
                if ("text" == this.type || "tspan" == this.type) {
                    b.stop();
                    var a = i(this.node);
                    return 1 == a.length ? a[0] : a
                }
            })(-1), b.on("snap.util.getattr.#text", function() {
                return this.node.textContent
            })(-1), b.on("snap.util.getattr.viewBox", function() {
                b.stop();
                var c = p(this.node, "viewBox");
                return c ? (c = c.split(s), a._.box(+c[0], +c[1], +c[2], +c[3])) : void 0
            })(-1), b.on("snap.util.getattr.points", function() {
                var a = p(this.node, "points");
                return b.stop(), a ? a.split(s) : void 0
            })(-1), b.on("snap.util.getattr.path", function() {
                var a = p(this.node, "d");
                return b.stop(), a
            })(-1), b.on("snap.util.getattr.class", function() {
                return this.node.className.baseVal
            })(-1), b.on("snap.util.getattr.fontSize", j)(-1), b.on("snap.util.getattr.font-size", j)(-1)
    }), d.plugin(function() {
        function a(a) {
            return a
        }

        function c(a) {
            return function(b) {
                return +b.toFixed(3) + a
            }
        }
        var d = {
                "+": function(a, b) {
                    return a + b
                },
                "-": function(a, b) {
                    return a - b
                },
                "/": function(a, b) {
                    return a / b
                },
                "*": function(a, b) {
                    return a * b
                }
            },
            e = String,
            f = /[a-z]+$/i,
            g = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
        b.on("snap.util.attr", function(a) {
            var c = e(a).match(g);
            if (c) {
                var h = b.nt(),
                    i = h.substring(h.lastIndexOf(".") + 1),
                    j = this.attr(i),
                    k = {};
                b.stop();
                var l = c[3] || "",
                    m = j.match(f),
                    n = d[c[1]];
                if (m && m == l ? a = n(parseFloat(j), +c[2]) : (j = this.asPX(i), a = n(this.asPX(i), this.asPX(i, c[2] + l))), isNaN(j) || isNaN(a)) return;
                k[i] = a, this.attr(k)
            }
        })(-10), b.on("snap.util.equal", function(h, i) {
            var j = e(this.attr(h) || ""),
                k = e(i).match(g);
            if (k) {
                b.stop();
                var l = k[3] || "",
                    m = j.match(f),
                    n = d[k[1]];
                return m && m == l ? {
                    from: parseFloat(j),
                    to: n(parseFloat(j), +k[2]),
                    f: c(m)
                } : (j = this.asPX(h), {
                    from: j,
                    to: n(j, this.asPX(h, k[2] + l)),
                    f: a
                })
            }
        })(-10)
    }), d.plugin(function(a, c, d, e) {
        var f = d.prototype,
            g = a.is;
        f.rect = function(a, b, c, d, e, f) {
            var h;
            return null == f && (f = e), g(a, "object") && "[object Object]" == a ? h = a : null != a && (h = {
                x: a,
                y: b,
                width: c,
                height: d
            }, null != e && (h.rx = e, h.ry = f)), this.el("rect", h)
        }, f.circle = function(a, b, c) {
            var d;
            return g(a, "object") && "[object Object]" == a ? d = a : null != a && (d = {
                cx: a,
                cy: b,
                r: c
            }), this.el("circle", d)
        };
        var h = function() {
            function a() {
                this.parentNode.removeChild(this)
            }
            return function(b, c) {
                var d = e.doc.createElement("img"),
                    f = e.doc.body;
                d.style.cssText = "position:absolute;left:-9999em;top:-9999em", d.onload = function() {
                    c.call(d), d.onload = d.onerror = null, f.removeChild(d)
                }, d.onerror = a, f.appendChild(d), d.src = b
            }
        }();
        f.image = function(b, c, d, e, f) {
                var i = this.el("image");
                if (g(b, "object") && "src" in b) i.attr(b);
                else if (null != b) {
                    var j = {
                        "xlink:href": b,
                        preserveAspectRatio: "none"
                    };
                    null != c && null != d && (j.x = c, j.y = d), null != e && null != f ? (j.width = e, j.height = f) : h(b, function() {
                        a._.$(i.node, {
                            width: this.offsetWidth,
                            height: this.offsetHeight
                        })
                    }), a._.$(i.node, j)
                }
                return i
            }, f.ellipse = function(a, b, c, d) {
                var e;
                return g(a, "object") && "[object Object]" == a ? e = a : null != a && (e = {
                    cx: a,
                    cy: b,
                    rx: c,
                    ry: d
                }), this.el("ellipse", e)
            }, f.path = function(a) {
                var b;
                return g(a, "object") && !g(a, "array") ? b = a : a && (b = {
                    d: a
                }), this.el("path", b)
            }, f.group = f.g = function(a) {
                var b = this.el("g");
                return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)), b
            }, f.svg = function(a, b, c, d, e, f, h, i) {
                var j = {};
                return g(a, "object") && null == b ? j = a : (null != a && (j.x = a), null != b && (j.y = b), null != c && (j.width = c), null != d && (j.height = d), null != e && null != f && null != h && null != i && (j.viewBox = [e, f, h, i])), this.el("svg", j)
            }, f.mask = function(a) {
                var b = this.el("mask");
                return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)), b
            }, f.ptrn = function(a, b, c, d, e, f, h, i) {
                if (g(a, "object")) var j = a;
                else arguments.length ? (j = {}, null != a && (j.x = a), null != b && (j.y = b), null != c && (j.width = c), null != d && (j.height = d), null != e && null != f && null != h && null != i && (j.viewBox = [e, f, h, i])) : j = {
                    patternUnits: "userSpaceOnUse"
                };
                return this.el("pattern", j)
            }, f.use = function(a) {
                if (null != a) {
                    {
                        make("use", this.node)
                    }
                    return a instanceof c && (a.attr("id") || a.attr({
                        id: ID()
                    }), a = a.attr("id")), this.el("use", {
                        "xlink:href": a
                    })
                }
                return c.prototype.use.call(this)
            }, f.text = function(a, b, c) {
                var d = {};
                return g(a, "object") ? d = a : null != a && (d = {
                    x: a,
                    y: b,
                    text: c || ""
                }), this.el("text", d)
            }, f.line = function(a, b, c, d) {
                var e = {};
                return g(a, "object") ? e = a : null != a && (e = {
                    x1: a,
                    x2: c,
                    y1: b,
                    y2: d
                }), this.el("line", e)
            }, f.polyline = function(a) {
                arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
                var b = {};
                return g(a, "object") && !g(a, "array") ? b = a : null != a && (b = {
                    points: a
                }), this.el("polyline", b)
            }, f.polygon = function(a) {
                arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
                var b = {};
                return g(a, "object") && !g(a, "array") ? b = a : null != a && (b = {
                    points: a
                }), this.el("polygon", b)
            },
            function() {
                function c() {
                    return this.selectAll("stop")
                }

                function d(b, c) {
                    var d = j("stop"),
                        e = {
                            offset: +c + "%"
                        };
                    return b = a.color(b), e["stop-color"] = b.hex, b.opacity < 1 && (e["stop-opacity"] = b.opacity), j(d, e), this.node.appendChild(d), this
                }

                function e() {
                    if ("linearGradient" == this.type) {
                        var b = j(this.node, "x1") || 0,
                            c = j(this.node, "x2") || 1,
                            d = j(this.node, "y1") || 0,
                            e = j(this.node, "y2") || 0;
                        return a._.box(b, d, math.abs(c - b), math.abs(e - d))
                    }
                    var f = this.node.cx || .5,
                        g = this.node.cy || .5,
                        h = this.node.r || 0;
                    return a._.box(f - h, g - h, 2 * h, 2 * h)
                }

                function g(a, c) {
                    function d(a, b) {
                        for (var c = (b - l) / (a - m), d = m; a > d; d++) g[d].offset = +(+l + c * (d - m)).toFixed(2);
                        m = a, l = b
                    }
                    var e, f = b("snap.util.grad.parse", null, c).firstDefined();
                    if (!f) return null;
                    f.params.unshift(a), e = "l" == f.type.toLowerCase() ? h.apply(0, f.params) : i.apply(0, f.params), f.type != f.type.toLowerCase() && j(e.node, {
                        gradientUnits: "userSpaceOnUse"
                    });
                    var g = f.stops,
                        k = g.length,
                        l = 0,
                        m = 0;
                    k--;
                    for (var n = 0; k > n; n++) "offset" in g[n] && d(n, g[n].offset);
                    for (g[k].offset = g[k].offset || 100, d(k, g[k].offset), n = 0; k >= n; n++) {
                        var o = g[n];
                        e.addStop(o.color, o.offset)
                    }
                    return e
                }

                function h(b, f, g, h, i) {
                    var k = a._.make("linearGradient", b);
                    return k.stops = c, k.addStop = d, k.getBBox = e, null != f && j(k.node, {
                        x1: f,
                        y1: g,
                        x2: h,
                        y2: i
                    }), k
                }

                function i(b, f, g, h, i, k) {
                    var l = a._.make("radialGradient", b);
                    return l.stops = c, l.addStop = d, l.getBBox = e, null != f && j(l.node, {
                        cx: f,
                        cy: g,
                        r: h
                    }), null != i && null != k && j(l.node, {
                        fx: i,
                        fy: k
                    }), l
                }
                var j = a._.$;
                f.gradient = function(a) {
                    return g(this.defs, a)
                }, f.gradientLinear = function(a, b, c, d) {
                    return h(this.defs, a, b, c, d)
                }, f.gradientRadial = function(a, b, c, d, e) {
                    return i(this.defs, a, b, c, d, e)
                }, f.toString = function() {
                    var b, c = this.node.ownerDocument,
                        d = c.createDocumentFragment(),
                        e = c.createElement("div"),
                        f = this.node.cloneNode(!0);
                    return d.appendChild(e), e.appendChild(f), a._.$(f, {
                        xmlns: "http://www.w3.org/2000/svg"
                    }), b = e.innerHTML, d.removeChild(d.firstChild), b
                }, f.clear = function() {
                    for (var a, b = this.node.firstChild; b;) a = b.nextSibling, "defs" != b.tagName ? b.parentNode.removeChild(b) : f.clear.call({
                        node: b
                    }), b = a
                }
            }()
    }), d.plugin(function(a, b) {
        function c(a) {
            var b = c.ps = c.ps || {};
            return b[a] ? b[a].sleep = 100 : b[a] = {
                sleep: 100
            }, setTimeout(function() {
                for (var c in b) b[K](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c])
            }), b[a]
        }

        function d(a, b, c, d) {
            return null == a && (a = b = c = d = 0), null == b && (b = a.y, c = a.width, d = a.height, a = a.x), {
                x: a,
                y: b,
                width: c,
                w: c,
                height: d,
                h: d,
                x2: a + c,
                y2: b + d,
                cx: a + c / 2,
                cy: b + d / 2,
                r1: N.min(c, d) / 2,
                r2: N.max(c, d) / 2,
                r0: N.sqrt(c * c + d * d) / 2,
                path: w(a, b, c, d),
                vb: [a, b, c, d].join(" ")
            }
        }

        function e() {
            return this.join(",").replace(L, "$1")
        }

        function f(a) {
            var b = J(a);
            return b.toString = e, b
        }

        function g(a, b, c, d, e, f, g, h, j) {
            return null == j ? n(a, b, c, d, e, f, g, h) : i(a, b, c, d, e, f, g, h, o(a, b, c, d, e, f, g, h, j))
        }

        function h(c, d) {
            function e(a) {
                return +(+a).toFixed(3)
            }
            return a._.cacher(function(a, f, h) {
                a instanceof b && (a = a.attr("d")), a = E(a);
                for (var j, k, l, m, n, o = "", p = {}, q = 0, r = 0, s = a.length; s > r; r++) {
                    if (l = a[r], "M" == l[0]) j = +l[1], k = +l[2];
                    else {
                        if (m = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6]), q + m > f) {
                            if (d && !p.start) {
                                if (n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q), o += ["C" + e(n.start.x), e(n.start.y), e(n.m.x), e(n.m.y), e(n.x), e(n.y)], h) return o;
                                p.start = o, o = ["M" + e(n.x), e(n.y) + "C" + e(n.n.x), e(n.n.y), e(n.end.x), e(n.end.y), e(l[5]), e(l[6])].join(), q += m, j = +l[5], k = +l[6];
                                continue
                            }
                            if (!c && !d) return n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q)
                        }
                        q += m, j = +l[5], k = +l[6]
                    }
                    o += l.shift() + l
                }
                return p.end = o, n = c ? q : d ? p : i(j, k, l[0], l[1], l[2], l[3], l[4], l[5], 1)
            }, null, a._.clone)
        }

        function i(a, b, c, d, e, f, g, h, i) {
            var j = 1 - i,
                k = R(j, 3),
                l = R(j, 2),
                m = i * i,
                n = m * i,
                o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
                p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
                q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
                r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
                s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
                t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
                u = j * a + i * c,
                v = j * b + i * d,
                w = j * e + i * g,
                x = j * f + i * h,
                y = 90 - 180 * N.atan2(q - s, r - t) / O;
            return {
                x: o,
                y: p,
                m: {
                    x: q,
                    y: r
                },
                n: {
                    x: s,
                    y: t
                },
                start: {
                    x: u,
                    y: v
                },
                end: {
                    x: w,
                    y: x
                },
                alpha: y
            }
        }

        function j(b, c, e, f, g, h, i, j) {
            a.is(b, "array") || (b = [b, c, e, f, g, h, i, j]);
            var k = D.apply(null, b);
            return d(k.min.x, k.min.y, k.max.x - k.min.x, k.max.y - k.min.y)
        }

        function k(a, b, c) {
            return b >= a.x && b <= a.x + a.width && c >= a.y && c <= a.y + a.height
        }

        function l(a, b) {
            return a = d(a), b = d(b), k(b, a.x, a.y) || k(b, a.x2, a.y) || k(b, a.x, a.y2) || k(b, a.x2, a.y2) || k(a, b.x, b.y) || k(a, b.x2, b.y) || k(a, b.x, b.y2) || k(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y)
        }

        function m(a, b, c, d, e) {
            var f = -3 * b + 9 * c - 9 * d + 3 * e,
                g = a * f + 6 * b - 12 * c + 6 * d;
            return a * g - 3 * b + 3 * c
        }

        function n(a, b, c, d, e, f, g, h, i) {
            null == i && (i = 1), i = i > 1 ? 1 : 0 > i ? 0 : i;
            for (var j = i / 2, k = 12, l = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], n = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], o = 0, p = 0; k > p; p++) {
                var q = j * l[p] + j,
                    r = m(q, a, c, e, g),
                    s = m(q, b, d, f, h),
                    t = r * r + s * s;
                o += n[p] * N.sqrt(t)
            }
            return j * o
        }

        function o(a, b, c, d, e, f, g, h, i) {
            if (!(0 > i || n(a, b, c, d, e, f, g, h) < i)) {
                var j, k = 1,
                    l = k / 2,
                    m = k - l,
                    o = .01;
                for (j = n(a, b, c, d, e, f, g, h, m); S(j - i) > o;) l /= 2, m += (i > j ? 1 : -1) * l, j = n(a, b, c, d, e, f, g, h, m);
                return m
            }
        }

        function p(a, b, c, d, e, f, g, h) {
            if (!(Q(a, c) < P(e, g) || P(a, c) > Q(e, g) || Q(b, d) < P(f, h) || P(b, d) > Q(f, h))) {
                var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
                    j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
                    k = (a - c) * (f - h) - (b - d) * (e - g);
                if (k) {
                    var l = i / k,
                        m = j / k,
                        n = +l.toFixed(2),
                        o = +m.toFixed(2);
                    if (!(n < +P(a, c).toFixed(2) || n > +Q(a, c).toFixed(2) || n < +P(e, g).toFixed(2) || n > +Q(e, g).toFixed(2) || o < +P(b, d).toFixed(2) || o > +Q(b, d).toFixed(2) || o < +P(f, h).toFixed(2) || o > +Q(f, h).toFixed(2))) return {
                        x: l,
                        y: m
                    }
                }
            }
        }

        function q(a, b, c) {
            var d = j(a),
                e = j(b);
            if (!l(d, e)) return c ? 0 : [];
            for (var f = n.apply(0, a), g = n.apply(0, b), h = ~~(f / 8), k = ~~(g / 8), m = [], o = [], q = {}, r = c ? 0 : [], s = 0; h + 1 > s; s++) {
                var t = i.apply(0, a.concat(s / h));
                m.push({
                    x: t.x,
                    y: t.y,
                    t: s / h
                })
            }
            for (s = 0; k + 1 > s; s++) t = i.apply(0, b.concat(s / k)), o.push({
                x: t.x,
                y: t.y,
                t: s / k
            });
            for (s = 0; h > s; s++)
                for (var u = 0; k > u; u++) {
                    var v = m[s],
                        w = m[s + 1],
                        x = o[u],
                        y = o[u + 1],
                        z = S(w.x - v.x) < .001 ? "y" : "x",
                        A = S(y.x - x.x) < .001 ? "y" : "x",
                        B = p(v.x, v.y, w.x, w.y, x.x, x.y, y.x, y.y);
                    if (B) {
                        if (q[B.x.toFixed(4)] == B.y.toFixed(4)) continue;
                        q[B.x.toFixed(4)] = B.y.toFixed(4);
                        var C = v.t + S((B[z] - v[z]) / (w[z] - v[z])) * (w.t - v.t),
                            D = x.t + S((B[A] - x[A]) / (y[A] - x[A])) * (y.t - x.t);
                        C >= 0 && 1 >= C && D >= 0 && 1 >= D && (c ? r++ : r.push({
                            x: B.x,
                            y: B.y,
                            t1: C,
                            t2: D
                        }))
                    }
                }
            return r
        }

        function r(a, b) {
            return t(a, b)
        }

        function s(a, b) {
            return t(a, b, 1)
        }

        function t(a, b, c) {
            a = E(a), b = E(b);
            for (var d, e, f, g, h, i, j, k, l, m, n = c ? 0 : [], o = 0, p = a.length; p > o; o++) {
                var r = a[o];
                if ("M" == r[0]) d = h = r[1], e = i = r[2];
                else {
                    "C" == r[0] ? (l = [d, e].concat(r.slice(1)), d = l[6], e = l[7]) : (l = [d, e, d, e, h, i, h, i], d = h, e = i);
                    for (var s = 0, t = b.length; t > s; s++) {
                        var u = b[s];
                        if ("M" == u[0]) f = j = u[1], g = k = u[2];
                        else {
                            "C" == u[0] ? (m = [f, g].concat(u.slice(1)), f = m[6], g = m[7]) : (m = [f, g, f, g, j, k, j, k], f = j, g = k);
                            var v = q(l, m, c);
                            if (c) n += v;
                            else {
                                for (var w = 0, x = v.length; x > w; w++) v[w].segment1 = o, v[w].segment2 = s, v[w].bez1 = l, v[w].bez2 = m;
                                n = n.concat(v)
                            }
                        }
                    }
                }
            }
            return n
        }

        function u(a, b, c) {
            var d = v(a);
            return k(d, b, c) && t(a, [
                ["M", b, c],
                ["H", d.x2 + 10]
            ], 1) % 2 == 1
        }

        function v(a) {
            var b = c(a);
            if (b.bbox) return J(b.bbox);
            if (!a) return d();
            a = E(a);
            for (var e, f = 0, g = 0, h = [], i = [], j = 0, k = a.length; k > j; j++)
                if (e = a[j], "M" == e[0]) f = e[1], g = e[2], h.push(f), i.push(g);
                else {
                    var l = D(f, g, e[1], e[2], e[3], e[4], e[5], e[6]);
                    h = h.concat(l.min.x, l.max.x), i = i.concat(l.min.y, l.max.y), f = e[5], g = e[6]
                }
            var m = P.apply(0, h),
                n = P.apply(0, i),
                o = Q.apply(0, h),
                p = Q.apply(0, i),
                q = d(m, n, o - m, p - n);
            return b.bbox = J(q), q
        }

        function w(a, b, c, d, f) {
            if (f) return [
                ["M", +a + +f, b],
                ["l", c - 2 * f, 0],
                ["a", f, f, 0, 0, 1, f, f],
                ["l", 0, d - 2 * f],
                ["a", f, f, 0, 0, 1, -f, f],
                ["l", 2 * f - c, 0],
                ["a", f, f, 0, 0, 1, -f, -f],
                ["l", 0, 2 * f - d],
                ["a", f, f, 0, 0, 1, f, -f],
                ["z"]
            ];
            var g = [
                ["M", a, b],
                ["l", c, 0],
                ["l", 0, d],
                ["l", -c, 0],
                ["z"]
            ];
            return g.toString = e, g
        }

        function x(a, b, c, d, f) {
            if (null == f && null == d && (d = c), a = +a, b = +b, c = +c, d = +d, null != f) var g = Math.PI / 180,
                h = a + c * Math.cos(-d * g),
                i = a + c * Math.cos(-f * g),
                j = b + c * Math.sin(-d * g),
                k = b + c * Math.sin(-f * g),
                l = [
                    ["M", h, j],
                    ["A", c, c, 0, +(f - d > 180), 0, i, k]
                ];
            else l = [
                ["M", a, b],
                ["m", 0, -d],
                ["a", c, d, 0, 1, 1, 0, 2 * d],
                ["a", c, d, 0, 1, 1, 0, -2 * d],
                ["z"]
            ];
            return l.toString = e, l
        }

        function y(b) {
            var d = c(b),
                g = String.prototype.toLowerCase;
            if (d.rel) return f(d.rel);
            a.is(b, "array") && a.is(b && b[0], "array") || (b = a.parsePathString(b));
            var h = [],
                i = 0,
                j = 0,
                k = 0,
                l = 0,
                m = 0;
            "M" == b[0][0] && (i = b[0][1], j = b[0][2], k = i, l = j, m++, h.push(["M", i, j]));
            for (var n = m, o = b.length; o > n; n++) {
                var p = h[n] = [],
                    q = b[n];
                if (q[0] != g.call(q[0])) switch (p[0] = g.call(q[0]), p[0]) {
                    case "a":
                        p[1] = q[1], p[2] = q[2], p[3] = q[3], p[4] = q[4], p[5] = q[5], p[6] = +(q[6] - i).toFixed(3), p[7] = +(q[7] - j).toFixed(3);
                        break;
                    case "v":
                        p[1] = +(q[1] - j).toFixed(3);
                        break;
                    case "m":
                        k = q[1], l = q[2];
                    default:
                        for (var r = 1, s = q.length; s > r; r++) p[r] = +(q[r] - (r % 2 ? i : j)).toFixed(3)
                } else {
                    p = h[n] = [], "m" == q[0] && (k = q[1] + i, l = q[2] + j);
                    for (var t = 0, u = q.length; u > t; t++) h[n][t] = q[t]
                }
                var v = h[n].length;
                switch (h[n][0]) {
                    case "z":
                        i = k, j = l;
                        break;
                    case "h":
                        i += +h[n][v - 1];
                        break;
                    case "v":
                        j += +h[n][v - 1];
                        break;
                    default:
                        i += +h[n][v - 2], j += +h[n][v - 1]
                }
            }
            return h.toString = e, d.rel = f(h), h
        }

        function z(b) {
            var d = c(b);
            if (d.abs) return f(d.abs);
            if (I(b, "array") && I(b && b[0], "array") || (b = a.parsePathString(b)), !b || !b.length) return [
                ["M", 0, 0]
            ];
            var g, h = [],
                i = 0,
                j = 0,
                k = 0,
                l = 0,
                m = 0;
            "M" == b[0][0] && (i = +b[0][1], j = +b[0][2], k = i, l = j, m++, h[0] = ["M", i, j]);
            for (var n, o, p = 3 == b.length && "M" == b[0][0] && "R" == b[1][0].toUpperCase() && "Z" == b[2][0].toUpperCase(), q = m, r = b.length; r > q; q++) {
                if (h.push(n = []), o = b[q], g = o[0], g != g.toUpperCase()) switch (n[0] = g.toUpperCase(), n[0]) {
                        case "A":
                            n[1] = o[1], n[2] = o[2], n[3] = o[3], n[4] = o[4], n[5] = o[5], n[6] = +o[6] + i, n[7] = +o[7] + j;
                            break;
                        case "V":
                            n[1] = +o[1] + j;
                            break;
                        case "H":
                            n[1] = +o[1] + i;
                            break;
                        case "R":
                            for (var s = [i, j].concat(o.slice(1)), t = 2, u = s.length; u > t; t++) s[t] = +s[t] + i, s[++t] = +s[t] + j;
                            h.pop(), h = h.concat(G(s, p));
                            break;
                        case "O":
                            h.pop(), s = x(i, j, o[1], o[2]), s.push(s[0]), h = h.concat(s);
                            break;
                        case "U":
                            h.pop(), h = h.concat(x(i, j, o[1], o[2], o[3])), n = ["U"].concat(h[h.length - 1].slice(-2));
                            break;
                        case "M":
                            k = +o[1] + i, l = +o[2] + j;
                        default:
                            for (t = 1, u = o.length; u > t; t++) n[t] = +o[t] + (t % 2 ? i : j)
                    } else if ("R" == g) s = [i, j].concat(o.slice(1)), h.pop(), h = h.concat(G(s, p)), n = ["R"].concat(o.slice(-2));
                    else if ("O" == g) h.pop(), s = x(i, j, o[1], o[2]), s.push(s[0]), h = h.concat(s);
                else if ("U" == g) h.pop(), h = h.concat(x(i, j, o[1], o[2], o[3])), n = ["U"].concat(h[h.length - 1].slice(-2));
                else
                    for (var v = 0, w = o.length; w > v; v++) n[v] = o[v];
                if (g = g.toUpperCase(), "O" != g) switch (n[0]) {
                    case "Z":
                        i = +k, j = +l;
                        break;
                    case "H":
                        i = n[1];
                        break;
                    case "V":
                        j = n[1];
                        break;
                    case "M":
                        k = n[n.length - 2], l = n[n.length - 1];
                    default:
                        i = n[n.length - 2], j = n[n.length - 1]
                }
            }
            return h.toString = e, d.abs = f(h), h
        }

        function A(a, b, c, d) {
            return [a, b, c, d, c, d]
        }

        function B(a, b, c, d, e, f) {
            var g = 1 / 3,
                h = 2 / 3;
            return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
        }

        function C(b, c, d, e, f, g, h, i, j, k) {
            var l, m = 120 * O / 180,
                n = O / 180 * (+f || 0),
                o = [],
                p = a._.cacher(function(a, b, c) {
                    var d = a * N.cos(c) - b * N.sin(c),
                        e = a * N.sin(c) + b * N.cos(c);
                    return {
                        x: d,
                        y: e
                    }
                });
            if (k) y = k[0], z = k[1], w = k[2], x = k[3];
            else {
                l = p(b, c, -n), b = l.x, c = l.y, l = p(i, j, -n), i = l.x, j = l.y;
                var q = (N.cos(O / 180 * f), N.sin(O / 180 * f), (b - i) / 2),
                    r = (c - j) / 2,
                    s = q * q / (d * d) + r * r / (e * e);
                s > 1 && (s = N.sqrt(s), d = s * d, e = s * e);
                var t = d * d,
                    u = e * e,
                    v = (g == h ? -1 : 1) * N.sqrt(S((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))),
                    w = v * d * r / e + (b + i) / 2,
                    x = v * -e * q / d + (c + j) / 2,
                    y = N.asin(((c - x) / e).toFixed(9)),
                    z = N.asin(((j - x) / e).toFixed(9));
                y = w > b ? O - y : y, z = w > i ? O - z : z, 0 > y && (y = 2 * O + y), 0 > z && (z = 2 * O + z), h && y > z && (y -= 2 * O), !h && z > y && (z -= 2 * O)
            }
            var A = z - y;
            if (S(A) > m) {
                var B = z,
                    D = i,
                    E = j;
                z = y + m * (h && z > y ? 1 : -1), i = w + d * N.cos(z), j = x + e * N.sin(z), o = C(i, j, d, e, f, 0, h, D, E, [z, B, w, x])
            }
            A = z - y;
            var F = N.cos(y),
                G = N.sin(y),
                H = N.cos(z),
                I = N.sin(z),
                J = N.tan(A / 4),
                K = 4 / 3 * d * J,
                L = 4 / 3 * e * J,
                M = [b, c],
                P = [b + K * G, c - L * F],
                Q = [i + K * I, j - L * H],
                R = [i, j];
            if (P[0] = 2 * M[0] - P[0], P[1] = 2 * M[1] - P[1], k) return [P, Q, R].concat(o);
            o = [P, Q, R].concat(o).join().split(",");
            for (var T = [], U = 0, V = o.length; V > U; U++) T[U] = U % 2 ? p(o[U - 1], o[U], n).y : p(o[U], o[U + 1], n).x;
            return T
        }

        function D(a, b, c, d, e, f, g, h) {
            for (var i, j, k, l, m, n, o, p, q = [], r = [
                    [],
                    []
                ], s = 0; 2 > s; ++s)
                if (0 == s ? (j = 6 * a - 12 * c + 6 * e, i = -3 * a + 9 * c - 9 * e + 3 * g, k = 3 * c - 3 * a) : (j = 6 * b - 12 * d + 6 * f, i = -3 * b + 9 * d - 9 * f + 3 * h, k = 3 * d - 3 * b), S(i) < 1e-12) {
                    if (S(j) < 1e-12) continue;
                    l = -k / j, l > 0 && 1 > l && q.push(l)
                } else o = j * j - 4 * k * i, p = N.sqrt(o), 0 > o || (m = (-j + p) / (2 * i), m > 0 && 1 > m && q.push(m), n = (-j - p) / (2 * i), n > 0 && 1 > n && q.push(n));
            for (var t, u = q.length, v = u; u--;) l = q[u], t = 1 - l, r[0][u] = t * t * t * a + 3 * t * t * l * c + 3 * t * l * l * e + l * l * l * g, r[1][u] = t * t * t * b + 3 * t * t * l * d + 3 * t * l * l * f + l * l * l * h;
            return r[0][v] = a, r[1][v] = b, r[0][v + 1] = g, r[1][v + 1] = h, r[0].length = r[1].length = v + 2, {
                min: {
                    x: P.apply(0, r[0]),
                    y: P.apply(0, r[1])
                },
                max: {
                    x: Q.apply(0, r[0]),
                    y: Q.apply(0, r[1])
                }
            }
        }

        function E(a, b) {
            var d = !b && c(a);
            if (!b && d.curve) return f(d.curve);
            for (var e = z(a), g = b && z(b), h = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, i = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, j = (function(a, b, c) {
                    var d, e;
                    if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
                    switch (!(a[0] in {
                        T: 1,
                        Q: 1
                    }) && (b.qx = b.qy = null), a[0]) {
                        case "M":
                            b.X = a[1], b.Y = a[2];
                            break;
                        case "A":
                            a = ["C"].concat(C.apply(0, [b.x, b.y].concat(a.slice(1))));
                            break;
                        case "S":
                            "C" == c || "S" == c ? (d = 2 * b.x - b.bx, e = 2 * b.y - b.by) : (d = b.x, e = b.y), a = ["C", d, e].concat(a.slice(1));
                            break;
                        case "T":
                            "Q" == c || "T" == c ? (b.qx = 2 * b.x - b.qx, b.qy = 2 * b.y - b.qy) : (b.qx = b.x, b.qy = b.y), a = ["C"].concat(B(b.x, b.y, b.qx, b.qy, a[1], a[2]));
                            break;
                        case "Q":
                            b.qx = a[1], b.qy = a[2], a = ["C"].concat(B(b.x, b.y, a[1], a[2], a[3], a[4]));
                            break;
                        case "L":
                            a = ["C"].concat(A(b.x, b.y, a[1], a[2]));
                            break;
                        case "H":
                            a = ["C"].concat(A(b.x, b.y, a[1], b.y));
                            break;
                        case "V":
                            a = ["C"].concat(A(b.x, b.y, b.x, a[1]));
                            break;
                        case "Z":
                            a = ["C"].concat(A(b.x, b.y, b.X, b.Y))
                    }
                    return a
                }), k = function(a, b) {
                    if (a[b].length > 7) {
                        a[b].shift();
                        for (var c = a[b]; c.length;) m[b] = "A", g && (n[b] = "A"), a.splice(b++, 0, ["C"].concat(c.splice(0, 6)));
                        a.splice(b, 1), r = Q(e.length, g && g.length || 0)
                    }
                }, l = function(a, b, c, d, f) {
                    a && b && "M" == a[f][0] && "M" != b[f][0] && (b.splice(f, 0, ["M", d.x, d.y]), c.bx = 0, c.by = 0, c.x = a[f][1], c.y = a[f][2], r = Q(e.length, g && g.length || 0))
                }, m = [], n = [], o = "", p = "", q = 0, r = Q(e.length, g && g.length || 0); r > q; q++) {
                e[q] && (o = e[q][0]), "C" != o && (m[q] = o, q && (p = m[q - 1])), e[q] = j(e[q], h, p), "A" != m[q] && "C" == o && (m[q] = "C"), k(e, q), g && (g[q] && (o = g[q][0]), "C" != o && (n[q] = o, q && (p = n[q - 1])), g[q] = j(g[q], i, p), "A" != n[q] && "C" == o && (n[q] = "C"), k(g, q)), l(e, g, h, i, q), l(g, e, i, h, q);
                var s = e[q],
                    t = g && g[q],
                    u = s.length,
                    v = g && t.length;
                h.x = s[u - 2], h.y = s[u - 1], h.bx = M(s[u - 4]) || h.x, h.by = M(s[u - 3]) || h.y, i.bx = g && (M(t[v - 4]) || i.x), i.by = g && (M(t[v - 3]) || i.y), i.x = g && t[v - 2], i.y = g && t[v - 1]
            }
            return g || (d.curve = f(e)), g ? [e, g] : e
        }

        function F(a, b) {
            if (!b) return a;
            var c, d, e, f, g, h, i;
            for (a = E(a), e = 0, g = a.length; g > e; e++)
                for (i = a[e], f = 1, h = i.length; h > f; f += 2) c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d;
            return a
        }

        function G(a, b) {
            for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
                var f = [{
                    x: +a[d - 2],
                    y: +a[d - 1]
                }, {
                    x: +a[d],
                    y: +a[d + 1]
                }, {
                    x: +a[d + 2],
                    y: +a[d + 3]
                }, {
                    x: +a[d + 4],
                    y: +a[d + 5]
                }];
                b ? d ? e - 4 == d ? f[3] = {
                    x: +a[0],
                    y: +a[1]
                } : e - 2 == d && (f[2] = {
                    x: +a[0],
                    y: +a[1]
                }, f[3] = {
                    x: +a[2],
                    y: +a[3]
                }) : f[0] = {
                    x: +a[e - 2],
                    y: +a[e - 1]
                } : e - 4 == d ? f[3] = f[2] : d || (f[0] = {
                    x: +a[d],
                    y: +a[d + 1]
                }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y])
            }
            return c
        }
        var H = b.prototype,
            I = a.is,
            J = a._.clone,
            K = "hasOwnProperty",
            L = /,?([a-z]),?/gi,
            M = parseFloat,
            N = Math,
            O = N.PI,
            P = N.min,
            Q = N.max,
            R = N.pow,
            S = N.abs,
            T = h(1),
            U = h(),
            V = h(0, 1),
            W = a._unit2px,
            X = {
                path: function(a) {
                    return a.attr("path")
                },
                circle: function(a) {
                    var b = W(a);
                    return x(b.cx, b.cy, b.r)
                },
                ellipse: function(a) {
                    var b = W(a);
                    return x(b.cx || 0, b.cy || 0, b.rx, b.ry)
                },
                rect: function(a) {
                    var b = W(a);
                    return w(b.x || 0, b.y || 0, b.width, b.height, b.rx, b.ry)
                },
                image: function(a) {
                    var b = W(a);
                    return w(b.x || 0, b.y || 0, b.width, b.height)
                },
                line: function(a) {
                    return "M" + [a.attr("x1") || 0, a.attr("y1") || 0, a.attr("x2"), a.attr("y2")]
                },
                polyline: function(a) {
                    return "M" + a.attr("points")
                },
                polygon: function(a) {
                    return "M" + a.attr("points") + "z"
                },
                deflt: function(a) {
                    var b = a.node.getBBox();
                    return w(b.x, b.y, b.width, b.height)
                }
            };
        a.path = c, a.path.getTotalLength = T, a.path.getPointAtLength = U, a.path.getSubpath = function(a, b, c) {
            if (this.getTotalLength(a) - c < 1e-6) return V(a, b).end;
            var d = V(a, c, 1);
            return b ? V(d, b).end : d
        }, H.getTotalLength = function() {
            return this.node.getTotalLength ? this.node.getTotalLength() : void 0
        }, H.getPointAtLength = function(a) {
            return U(this.attr("d"), a)
        }, H.getSubpath = function(b, c) {
            return a.path.getSubpath(this.attr("d"), b, c)
        }, a._.box = d, a.path.findDotsAtSegment = i, a.path.bezierBBox = j, a.path.isPointInsideBBox = k, a.path.isBBoxIntersect = l, a.path.intersection = r, a.path.intersectionNumber = s, a.path.isPointInside = u, a.path.getBBox = v, a.path.get = X, a.path.toRelative = y, a.path.toAbsolute = z, a.path.toCubic = E, a.path.map = F, a.path.toString = e, a.path.clone = f
    }), d.plugin(function(a) {
        var d = Math.max,
            e = Math.min,
            f = function(a) {
                if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", a)
                    for (var b = 0, c = a.length; c > b; b++) a[b] && (this[this.items.length] = this.items[this.items.length] = a[b], this.length++)
            },
            g = f.prototype;
        g.push = function() {
            for (var a, b, c = 0, d = arguments.length; d > c; c++) a = arguments[c], a && (b = this.items.length, this[b] = this.items[b] = a, this.length++);
            return this
        }, g.pop = function() {
            return this.length && delete this[this.length--], this.items.pop()
        }, g.forEach = function(a, b) {
            for (var c = 0, d = this.items.length; d > c; c++)
                if (a.call(b, this.items[c], c) === !1) return this;
            return this
        }, g.animate = function(d, e, f, g) {
            "function" != typeof f || f.length || (g = f, f = c.linear), d instanceof a._.Animation && (g = d.callback, f = d.easing, e = f.dur, d = d.attr);
            var h = arguments;
            if (a.is(d, "array") && a.is(h[h.length - 1], "array")) var i = !0;
            var j, k = function() {
                    j ? this.b = j : j = this.b
                },
                l = 0,
                m = g && function() {
                    l++ == this.length && g.call(this)
                };
            return this.forEach(function(a, c) {
                b.once("snap.animcreated." + a.id, k), i ? h[c] && a.animate.apply(a, h[c]) : a.animate(d, e, f, m)
            })
        }, g.remove = function() {
            for (; this.length;) this.pop().remove();
            return this
        }, g.bind = function(a, b, c) {
            var d = {};
            if ("function" == typeof b) this.bindings[a] = b;
            else {
                var e = c || a;
                this.bindings[a] = function(a) {
                    d[e] = a, b.attr(d)
                }
            }
            return this
        }, g.attr = function(a) {
            var b = {};
            for (var c in a) this.bindings[c] ? this.bindings[c](a[c]) : b[c] = a[c];
            for (var d = 0, e = this.items.length; e > d; d++) this.items[d].attr(b);
            return this
        }, g.clear = function() {
            for (; this.length;) this.pop()
        }, g.splice = function(a, b) {
            a = 0 > a ? d(this.length + a, 0) : a, b = d(0, e(this.length - a, b));
            var c, g = [],
                h = [],
                i = [];
            for (c = 2; c < arguments.length; c++) i.push(arguments[c]);
            for (c = 0; b > c; c++) h.push(this[a + c]);
            for (; c < this.length - a; c++) g.push(this[a + c]);
            var j = i.length;
            for (c = 0; c < j + g.length; c++) this.items[a + c] = this[a + c] = j > c ? i[c] : g[c - j];
            for (c = this.items.length = this.length -= b - j; this[c];) delete this[c++];
            return new f(h)
        }, g.exclude = function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (this[b] == a) return this.splice(b, 1), !0;
            return !1
        }, g.insertAfter = function(a) {
            for (var b = this.items.length; b--;) this.items[b].insertAfter(a);
            return this
        }, g.getBBox = function() {
            for (var a = [], b = [], c = [], f = [], g = this.items.length; g--;)
                if (!this.items[g].removed) {
                    var h = this.items[g].getBBox();
                    a.push(h.x), b.push(h.y), c.push(h.x + h.width), f.push(h.y + h.height)
                }
            return a = e.apply(0, a), b = e.apply(0, b), c = d.apply(0, c), f = d.apply(0, f), {
                x: a,
                y: b,
                x2: c,
                y2: f,
                width: c - a,
                height: f - b,
                cx: a + (c - a) / 2,
                cy: b + (f - b) / 2
            }
        }, g.clone = function(a) {
            a = new f;
            for (var b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].clone());
            return a
        }, g.toString = function() {
            return "Snap‘s set"
        }, g.type = "set", a.set = function() {
            var a = new f;
            return arguments.length && a.push.apply(a, Array.prototype.slice.call(arguments, 0)), a
        }
    }), d.plugin(function(a, c) {
        function d(a) {
            var b = a[0];
            switch (b.toLowerCase()) {
                case "t":
                    return [b, 0, 0];
                case "m":
                    return [b, 1, 0, 0, 1, 0, 0];
                case "r":
                    return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];
                case "s":
                    return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1]
            }
        }

        function e(b, c, e) {
            c = m(c).replace(/\.{3}|\u2026/g, b), b = a.parseTransformString(b) || [], c = a.parseTransformString(c) || [];
            for (var f, g, h, k, l = Math.max(b.length, c.length), n = [], o = [], p = 0; l > p; p++) {
                if (h = b[p] || d(c[p]), k = c[p] || d(h), h[0] != k[0] || "r" == h[0].toLowerCase() && (h[2] != k[2] || h[3] != k[3]) || "s" == h[0].toLowerCase() && (h[3] != k[3] || h[4] != k[4])) {
                    b = a._.transform2matrix(b, e()), c = a._.transform2matrix(c, e()), n = [
                        ["m", b.a, b.b, b.c, b.d, b.e, b.f]
                    ], o = [
                        ["m", c.a, c.b, c.c, c.d, c.e, c.f]
                    ];
                    break
                }
                for (n[p] = [], o[p] = [], f = 0, g = Math.max(h.length, k.length); g > f; f++) f in h && (n[p][f] = h[f]), f in k && (o[p][f] = k[f])
            }
            return {
                from: j(n),
                to: j(o),
                f: i(n)
            }
        }

        function f(a) {
            return a
        }

        function g(a) {
            return function(b) {
                return +b.toFixed(3) + a
            }
        }

        function h(b) {
            return a.rgb(b[0], b[1], b[2])
        }

        function i(a) {
            var b, c, d, e, f, g, h = 0,
                i = [];
            for (b = 0, c = a.length; c > b; b++) {
                for (f = "[", g = ['"' + a[b][0] + '"'], d = 1, e = a[b].length; e > d; d++) g[d] = "val[" + h++ + "]";
                f += g + "]", i[b] = f
            }
            return Function("val", "return Snap.path.toString.call([" + i + "])")
        }

        function j(a) {
            for (var b = [], c = 0, d = a.length; d > c; c++)
                for (var e = 1, f = a[c].length; f > e; e++) b.push(a[c][e]);
            return b
        }
        var k = {},
            l = /[a-z]+$/i,
            m = String;
        k.stroke = k.fill = "colour", c.prototype.equal = function(a, c) {
            return b("snap.util.equal", this, a, c).firstDefined()
        }, b.on("snap.util.equal", function(b, c) {
            var d, n, o = m(this.attr(b) || ""),
                p = this;
            if (o == +o && c == +c) return {
                from: +o,
                to: +c,
                f: f
            };
            if ("colour" == k[b]) return d = a.color(o), n = a.color(c), {
                from: [d.r, d.g, d.b, d.opacity],
                to: [n.r, n.g, n.b, n.opacity],
                f: h
            };
            if ("transform" == b || "gradientTransform" == b || "patternTransform" == b) return c instanceof a.Matrix && (c = c.toTransformString()), a._.rgTransform.test(c) || (c = a._.svgTransform2string(c)), e(o, c, function() {
                return p.getBBox(1)
            });
            if ("d" == b || "path" == b) return d = a.path.toCubic(o, c), {
                from: j(d[0]),
                to: j(d[1]),
                f: i(d[0])
            };
            if ("points" == b) return d = m(o).split(a._.separator), n = m(c).split(a._.separator), {
                from: d,
                to: n,
                f: function(a) {
                    return a
                }
            };
            aUnit = o.match(l);
            var q = m(c).match(l);
            return aUnit && aUnit == q ? {
                from: parseFloat(o),
                to: parseFloat(c),
                f: g(aUnit)
            } : {
                from: this.asPX(b),
                to: this.asPX(b, c),
                f: f
            }
        })
    }), d.plugin(function(a, c, d, e) {
        for (var f = c.prototype, g = "hasOwnProperty", h = ("createTouch" in e.doc), i = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], j = {
                mousedown: "touchstart",
                mousemove: "touchmove",
                mouseup: "touchend"
            }, k = (function(a, b) {
                var c = "y" == a ? "scrollTop" : "scrollLeft",
                    d = b && b.node ? b.node.ownerDocument : e.doc;
                return d[c in d.documentElement ? "documentElement" : "body"][c]
            }), l = function() {
                this.returnValue = !1
            }, m = function() {
                return this.originalEvent.preventDefault()
            }, n = function() {
                this.cancelBubble = !0
            }, o = function() {
                return this.originalEvent.stopPropagation()
            }, p = function() {
                return e.doc.addEventListener ? function(a, b, c, d) {
                    var e = h && j[b] ? j[b] : b,
                        f = function(e) {
                            var f = k("y", d),
                                i = k("x", d);
                            if (h && j[g](b))
                                for (var l = 0, n = e.targetTouches && e.targetTouches.length; n > l; l++)
                                    if (e.targetTouches[l].target == a || a.contains(e.targetTouches[l].target)) {
                                        var p = e;
                                        e = e.targetTouches[l], e.originalEvent = p, e.preventDefault = m, e.stopPropagation = o;
                                        break
                                    }
                            var q = e.clientX + i,
                                r = e.clientY + f;
                            return c.call(d, e, q, r)
                        };
                    return b !== e && a.addEventListener(b, f, !1), a.addEventListener(e, f, !1),
                        function() {
                            return b !== e && a.removeEventListener(b, f, !1), a.removeEventListener(e, f, !1), !0
                        }
                } : e.doc.attachEvent ? function(a, b, c, d) {
                    var e = function(a) {
                        a = a || d.node.ownerDocument.window.event;
                        var b = k("y", d),
                            e = k("x", d),
                            f = a.clientX + e,
                            g = a.clientY + b;
                        return a.preventDefault = a.preventDefault || l, a.stopPropagation = a.stopPropagation || n, c.call(d, a, f, g)
                    };
                    a.attachEvent("on" + b, e);
                    var f = function() {
                        return a.detachEvent("on" + b, e), !0
                    };
                    return f
                } : void 0
            }(), q = [], r = function(a) {
                for (var c, d = a.clientX, e = a.clientY, f = k("y"), g = k("x"), i = q.length; i--;) {
                    if (c = q[i], h) {
                        for (var j, l = a.touches && a.touches.length; l--;)
                            if (j = a.touches[l], j.identifier == c.el._drag.id || c.el.node.contains(j.target)) {
                                d = j.clientX, e = j.clientY, (a.originalEvent ? a.originalEvent : a).preventDefault();
                                break
                            }
                    } else a.preventDefault(); {
                        var m = c.el.node;
                        m.nextSibling, m.parentNode, m.style.display
                    }
                    d += g, e += f, b("snap.drag.move." + c.el.id, c.move_scope || c.el, d - c.el._drag.x, e - c.el._drag.y, d, e, a)
                }
            }, s = function(c) {
                a.unmousemove(r).unmouseup(s);
                for (var d, e = q.length; e--;) d = q[e], d.el._drag = {}, b("snap.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, c);
                q = []
            }, t = i.length; t--;) ! function(b) {
            a[b] = f[b] = function(c, d) {
                return a.is(c, "function") && (this.events = this.events || [], this.events.push({
                    name: b,
                    f: c,
                    unbind: p(this.node || document, b, c, d || this)
                })), this
            }, a["un" + b] = f["un" + b] = function(a) {
                for (var c = this.events || [], d = c.length; d--;)
                    if (c[d].name == b && (c[d].f == a || !a)) return c[d].unbind(), c.splice(d, 1), !c.length && delete this.events, this;
                return this
            }
        }(i[t]);
        f.hover = function(a, b, c, d) {
            return this.mouseover(a, c).mouseout(b, d || c)
        }, f.unhover = function(a, b) {
            return this.unmouseover(a).unmouseout(b)
        };
        var u = [];
        f.drag = function(c, d, e, f, g, h) {
            function i(i, j, k) {
                (i.originalEvent || i).preventDefault(), this._drag.x = j, this._drag.y = k, this._drag.id = i.identifier, !q.length && a.mousemove(r).mouseup(s), q.push({
                    el: this,
                    move_scope: f,
                    start_scope: g,
                    end_scope: h
                }), d && b.on("snap.drag.start." + this.id, d), c && b.on("snap.drag.move." + this.id, c), e && b.on("snap.drag.end." + this.id, e), b("snap.drag.start." + this.id, g || f || this, j, k, i)
            }
            if (!arguments.length) {
                var j;
                return this.drag(function(a, b) {
                    this.attr({
                        transform: j + (j ? "T" : "t") + [a, b]
                    })
                }, function() {
                    j = this.transform().local
                })
            }
            return this._drag = {}, u.push({
                el: this,
                start: i
            }), this.mousedown(i), this
        }, f.undrag = function() {
            for (var c = u.length; c--;) u[c].el == this && (this.unmousedown(u[c].start), u.splice(c, 1), b.unbind("snap.drag.*." + this.id));
            return !u.length && a.unmousemove(r).unmouseup(s), this
        }
    }), d.plugin(function(a, c, d) {
        var e = (c.prototype, d.prototype),
            f = /^\s*url\((.+)\)/,
            g = String,
            h = a._.$;
        a.filter = {}, e.filter = function(b) {
            var d = this;
            "svg" != d.type && (d = d.paper);
            var e = a.parse(g(b)),
                f = a._.id(),
                i = (d.node.offsetWidth, d.node.offsetHeight, h("filter"));
            return h(i, {
                id: f,
                filterUnits: "userSpaceOnUse"
            }), i.appendChild(e.node), d.defs.appendChild(i), new c(i)
        }, b.on("snap.util.getattr.filter", function() {
            b.stop();
            var c = h(this.node, "filter");
            if (c) {
                var d = g(c).match(f);
                return d && a.select(d[1])
            }
        }), b.on("snap.util.attr.filter", function(d) {
            if (d instanceof c && "filter" == d.type) {
                b.stop();
                var e = d.node.id;
                e || (h(d.node, {
                    id: d.id
                }), e = d.id), h(this.node, {
                    filter: a.url(e)
                })
            }
            d && "none" != d || (b.stop(), this.node.removeAttribute("filter"))
        }), a.filter.blur = function(b, c) {
            null == b && (b = 2);
            var d = null == c ? b : [b, c];
            return a.format('<feGaussianBlur stdDeviation="{def}"/>', {
                def: d
            })
        }, a.filter.blur.toString = function() {
            return this()
        }, a.filter.shadow = function(b, c, d, e, f) {
            return "string" == typeof d && (e = d, f = e, d = 4), "string" != typeof e && (f = e, e = "#000"), e = e || "#000", null == d && (d = 4), null == f && (f = 1), null == b && (b = 0, c = 2), null == c && (c = b), e = a.color(e), a.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                color: e,
                dx: b,
                dy: c,
                blur: d,
                opacity: f
            })
        }, a.filter.shadow.toString = function() {
            return this()
        }, a.filter.grayscale = function(b) {
            return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                a: .2126 + .7874 * (1 - b),
                b: .7152 - .7152 * (1 - b),
                c: .0722 - .0722 * (1 - b),
                d: .2126 - .2126 * (1 - b),
                e: .7152 + .2848 * (1 - b),
                f: .0722 - .0722 * (1 - b),
                g: .2126 - .2126 * (1 - b),
                h: .0722 + .9278 * (1 - b)
            })
        }, a.filter.grayscale.toString = function() {
            return this()
        }, a.filter.sepia = function(b) {
            return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                a: .393 + .607 * (1 - b),
                b: .769 - .769 * (1 - b),
                c: .189 - .189 * (1 - b),
                d: .349 - .349 * (1 - b),
                e: .686 + .314 * (1 - b),
                f: .168 - .168 * (1 - b),
                g: .272 - .272 * (1 - b),
                h: .534 - .534 * (1 - b),
                i: .131 + .869 * (1 - b)
            })
        }, a.filter.sepia.toString = function() {
            return this()
        }, a.filter.saturate = function(b) {
            return null == b && (b = 1), a.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                amount: 1 - b
            })
        }, a.filter.saturate.toString = function() {
            return this()
        }, a.filter.hueRotate = function(b) {
            return b = b || 0, a.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                angle: b
            })
        }, a.filter.hueRotate.toString = function() {
            return this()
        }, a.filter.invert = function(b) {
            return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                amount: b,
                amount2: 1 - b
            })
        }, a.filter.invert.toString = function() {
            return this()
        }, a.filter.brightness = function(b) {
            return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
                amount: b
            })
        }, a.filter.brightness.toString = function() {
            return this()
        }, a.filter.contrast = function(b) {
            return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                amount: b,
                amount2: .5 - b / 2
            })
        }, a.filter.contrast.toString = function() {
            return this()
        }
    }), d
});



/**
	/*
	 *
	 *	jQuery Sliding Menu Plugin
	 *	Mobile app list-style navigation in the browser
	 *
	 *	Written by Ali Zahid
	 *	http://alizahid.github.io/jquery-sliding-menu/
	 *
	 */
(function($) {
    var usedIds = [];
    $.fn.menu = function(options) {
        var selector = this.selector;
        var settings = $.extend({
            dataJSON: false,
            backLabel: 'Back'
        }, options);
        return this.each(function() {
            var self = this,
                menu = $(self),
                data;
            if (menu.hasClass('sliding-menu')) {
                return
            }
            var menuWidth = menu.width();
            if (settings.dataJSON) {
                data = processJSON(settings.dataJSON)
            } else {
                data = process(menu)
            }
            menu.empty().addClass('sliding-menu');
            var rootPanel;
            if (settings.dataJSON) {
                $(data).each(function(index, item) {
                    var panel = $('<ul></ul>');
                    if (item.root) {
                        rootPanel = '#' + item.id
                    }
                    panel.attr('id', item.id);
                    panel.addClass('menu-panel');
                    panel.width(menuWidth);
                    $(item.children).each(function(index, item) {
                        var link = $('<a></a>');
                        link.attr('class', item.styleClass);
                        link.attr('href', item.href);
                        link.text(item.label);
                        var li = $('<li></li>');
                        li.append(link);
                        panel.append(li)
                    });
                    menu.append(panel)
                })
            } else {
                $(data).each(function(index, item) {
                    var panel = $(item);
                    if (panel.hasClass('menu-panel-root')) {
                        rootPanel = '#' + panel.attr('id')
                    }
                    panel.width(menuWidth);
                    menu.append(item)
                })
            }
            rootPanel = $(rootPanel);
            rootPanel.addClass('menu-panel-root');
            var currentPanel = rootPanel;
            menu.height(rootPanel.height());
            var wrapper = $('<div></div>').addClass('sliding-menu-wrapper').width(data.length * menuWidth);
            menu.wrapInner(wrapper);
            wrapper = $('.sliding-menu-wrapper', menu);
            $('a', self).on('click', function(e) {
                var href = $(this).attr('href'),
                    label = $(this).text();
                if (wrapper.is(':animated')) {
                    e.preventDefault();
                    return
                }
                if (href == '#') {
                    e.preventDefault()
                } else if (href.indexOf('#menu-panel') == 0) {
                    var target = $(href),
                        isBack = $(this).hasClass('back'),
                        marginLeft = parseInt(wrapper.css('margin-left'));
                    if (isBack) {
                        if (href == '#menu-panel-back') {
                            target = currentPanel.prev()
                        }
                        wrapper.stop(true, true).animate({
                            marginLeft: marginLeft + menuWidth
                        }, 'fast')
                    } else {
                        target.insertAfter(currentPanel);
                        if (settings.backLabel === true) {
                            $('.back', target).text(label)
                        } else {
                            $('.back', target).text(settings.backLabel)
                        }
                        wrapper.stop(true, true).animate({
                            marginLeft: marginLeft - menuWidth
                        }, 'fast')
                    }
                    currentPanel = target;
                    menu.stop(true, true).animate({
                        height: target.height()
                    }, 'fast');
                    e.preventDefault()
                }
            });
            return this
        });

        function process(data) {
            var ul = $('ul', data),
                panels = [];
            $(ul).each(function(index, item) {
                var panel = $(item),
                    handler = panel.prev(),
                    id = getNewId();
                if (handler.length == 1) {
                    handler.addClass('nav').attr('href', '#menu-panel-' + id)
                }
                panel.attr('id', 'menu-panel-' + id);
                if (index == 0) {
                    panel.addClass('menu-panel-root')
                } else {
                    panel.addClass('menu-panel');
                    var li = $('<li></li>'),
                        back = $('<a></a>').addClass('back').attr('href', '#menu-panel-back');
                    panel.prepend(back)
                }
                panels.push(item)
            });
            return panels
        }

        function processJSON(data, parent) {
            var root = {
                    id: 'menu-panel-' + getNewId(),
                    children: [],
                    root: (parent ? false : true)
                },
                panels = [];
            if (parent) {
                root.children.push({
                    styleClass: 'back',
                    href: '#' + parent.id
                })
            }
            $(data).each(function(index, item) {
                root.children.push(item);
                if (item.children) {
                    var panel = processJSON(item.children, root);
                    item.href = '#' + panel[0].id;
                    item.styleClass = 'nav';
                    panels = panels.concat(panel)
                }
            });
            return [root].concat(panels)
        }

        function getNewId() {
            var id;
            do {
                id = Math.random().toString(36).substring(3, 8)
            } while (usedIds.indexOf(id) >= 0);
            usedIds.push(id);
            return id
        }
    }
}(jQuery));


/*
 * @author  Mudit Ameta
 * @license https://github.com/zeusdeux/isInViewport/blob/master/license.md MIT
 */
! function(a, b) {
    function c(b) {
        var c, d = a("<div></div>").css({
            width: "100%"
        });
        return b.append(d), c = b.width() - d.width(), d.remove(), c
    }

    function d(e, f) {
        var g = e.getBoundingClientRect(),
            h = g.top,
            i = g.bottom,
            j = g.left,
            k = g.right,
            l = a.extend({
                tolerance: 0,
                viewport: b
            }, f),
            m = !1,
            n = l.viewport.jquery ? l.viewport : a(l.viewport);
        n.length || (console.warn("isInViewport: The viewport selector you have provided matches no element on page."), console.warn("isInViewport: Defaulting to viewport as window"), n = a(b));
        var o = n.height(),
            p = n.width(),
            q = n.get(0).toString();
        if (n[0] !== b && "[object Window]" !== q && "[object DOMWindow]" !== q) {
            var r = n.get(0).getBoundingClientRect();
            h -= r.top, i -= r.top, j -= r.left, k = j + p, d.scrollBarWidth = d.scrollBarWidth || c(n), p -= d.scrollBarWidth
        }
        return l.tolerance = ~~Math.round(parseFloat(l.tolerance)), l.tolerance < 0 && (l.tolerance = o + l.tolerance), Math.abs(j) >= p ? m : m = l.tolerance ? !!(h <= l.tolerance && i >= l.tolerance) : !!(i > 0 && o >= h)
    }
    String.prototype.hasOwnProperty("trim") || (String.prototype.trim = function() {
        return this.replace(/^\s*(.*?)\s*$/, "$1")
    });
    var e = function(b) {
        if (1 === arguments.length && "function" == typeof b && (b = [b]), !(b instanceof Array)) throw new SyntaxError("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions");
        for (var c = 0; c < b.length; c++)
            if ("function" == typeof b[c])
                for (var d = 0; d < this.length; d++) b[c].call(a(this[d]));
            else console.warn("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions"), console.warn("isInViewport: Ignoring non-function values in array and moving on");
        return this
    };
    a.fn["do"] = function(a) {
        return console.warn("isInViewport: .do causes issues in IE and some browsers since its a reserved. Use $.fn.run instead i.e., $(el).run(fn)."), e(a)
    }, a.fn.run = e, a.extend(a.expr[":"], {
        "in-viewport": function(a, b, c) {
            if (c[3]) {
                var e = c[3].split(",");
                return 1 === e.length && isNaN(e[0]) && (e[1] = e[0], e[0] = void 0), d(a, {
                    tolerance: e[0] ? e[0].trim() : void 0,
                    viewport: e[1] ? e[1].trim() : void 0
                })
            }
            return d(a)
        }
    })
}(window.jQuery, window);

(function($) {
    $.fn.ctscroll = function(options) {
        var $settings = $.extend({
            'theme': 'orange',
            'text': '',
            'scrollDuration': 1300,
            'scrollOffset': 5,
            'html5Hash': true
        }, options);
        var $targets = this;
        var $dotActiveClass = 'cts-dot-' + $settings.theme;
        var $arActiveClass = 'cts-ar-' + $settings.theme;
        var $prevScrollTop = 90;

        function appendBasicElements() {
            $('.arrowpagenav').append('<div id="ctsElsWrapper"><a target="_self" title="" class="cts-arrow cts-up cts-smsc"></a><p class="cts-text">' + $settings.text + '</p><a target="_self" title="" class="cts-arrow cts-down cts-smsc"></a><div>');
            $targets.each(function() {
                if ($(this).attr('id') !== false && $(this).attr('id') !== undefined) {
                    var $elId = $(this).attr('id')
                } else {
                    var $elId = 'ctsAddedId' + $($targets).index(this);
                    $(this).attr('id', $elId)
                }
                $('#ctsElsWrapper').append('<a href="#' + $elId + '" target="_self" title="" class="cts-dot cts-smsc"></a>')
            })
        }

        function init() {
            appendBasicElements();
            checkViewport()
        }
        init();

        function setActiveDot($index) {
            if ($index > -1) {
                $('.' + $dotActiveClass).removeClass($dotActiveClass);
                var $el = $('.cts-dot').eq($index);
                if ($el !== false && $el !== undefined) {
                    if (!$el.hasClass($dotActiveClass)) {
                        $el.addClass($dotActiveClass);
                        setPrevNextLinks($index)
                    }
                }
            }
        }

        function checkViewport() {
            if ($targets.filter(':in-viewport').length > 0) {
                var $firstEl = $targets.filter(':in-viewport:first');
                var $index = $targets.index($firstEl);
                setActiveDot($index)
            }
        }

        function detectScrollDirection() {
            var $scrollTop = $(this).scrollTop();
            ($scrollTop < 0) ? $scrollTop = 0: null;
            ($scrollTop > $('body').height() - $(window).height()) ? $scrollTop = $('body').height() - $(window).height(): null;
            ($scrollTop >= $prevScrollTop && $scrollTop) ? $(window).trigger('scrollDown'): $(window).trigger('scrollUp');
            $prevScrollTop = $scrollTop
        }

        function moveToTarget($id) {
            var $targetOffset = $($id).offset().top + $settings.scrollOffset;
            $('html, body').stop(true, true).animate({
                'scrollTop': $targetOffset
            }, $settings.scrollDuration, 'swing', function() {})
        }

        function setPrevNextLinks($currIndex) {
            var $maxIndex = $('.cts-dot').length;
            var $nextIndex = ($currIndex <= $maxIndex) ? 1 + $currIndex : null;
            var $prevIndex = ($currIndex <= 0) ? null : -1 + $currIndex;
            var $prevHash = ($prevIndex !== null) ? $('a.cts-dot').eq($prevIndex).attr('href') : null;
            var $nextHash = ($nextIndex !== null) ? $('a.cts-dot').eq($nextIndex).attr('href') : null;
            $('a.cts-up').attr('href', $prevHash);
            $('a.cts-down').attr('href', $nextHash)
        }
        $(window).on('scrollUp', function() {
            $('.cts-up').addClass($arActiveClass);
            $('.cts-down').removeClass($arActiveClass)
        });
        $(window).on('scrollDown', function() {
            $('.cts-down').addClass($arActiveClass);
            $('.cts-up').removeClass($arActiveClass)
        });
        $(window).scroll(function() {
            detectScrollDirection();
            checkViewport()
        });
        $('.cts-smsc').on('click', function(event) {
            event.preventDefault();
            var $id = $(this).attr('href');
            moveToTarget($id)
        });
        return this
    }
}(jQuery));
/**
 * jquery.hoverdir.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
! function(t, e, o) {
    "use strict";
    t.HoverDir = function(e, o) {
        this.$el = t(o), this._init(e)
    }, t.HoverDir.defaults = {
        speed: 300,
        easing: "ease",
        hoverDelay: 0,
        inverse: !1
    }, t.HoverDir.prototype = {
        _init: function(e) {
            this.options = t.extend(!0, {}, t.HoverDir.defaults, e), this.transitionProp = "all " + this.options.speed + "ms " + this.options.easing, this.support = Modernizr.csstransitions, this._loadEvents()
        },
        _loadEvents: function() {
            var e = this;
            this.$el.on("mouseenter.hoverdir, mouseleave.hoverdir", function(o) {
                var i = t(this),
                    n = i.find("div.hd-box"),
                    s = e._getDir(i, {
                        x: o.pageX,
                        y: o.pageY
                    }),
                    r = e._getStyle(s);
                "mouseenter" === o.type ? (n.hide().css(r.from), clearTimeout(e.tmhover), e.tmhover = setTimeout(function() {
                    n.show(0, function() {
                        var o = t(this);
                        e.support && o.css("transition", e.transitionProp), e._applyAnimation(o, r.to, e.options.speed)
                    })
                }, e.options.hoverDelay)) : (e.support && n.css("transition", e.transitionProp), clearTimeout(e.tmhover), e._applyAnimation(n, r.from, e.options.speed))
            })
        },
        _getDir: function(t, e) {
            var o = t.width(),
                i = t.height(),
                n = (e.x - t.offset().left - o / 2) * (o > i ? i / o : 1),
                s = (e.y - t.offset().top - i / 2) * (i > o ? o / i : 1),
                r = Math.round((Math.atan2(s, n) * (180 / Math.PI) + 180) / 90 + 3) % 4;
            return r
        },
        _getStyle: function(t) {
            var e, o, i = {
                    left: "0px",
                    top: "-100%"
                },
                n = {
                    left: "0px",
                    top: "100%"
                },
                s = {
                    left: "-100%",
                    top: "0px"
                },
                r = {
                    left: "100%",
                    top: "0px"
                },
                a = {
                    top: "0px"
                },
                p = {
                    left: "0px"
                };
            switch (t) {
                case 0:
                    e = this.options.inverse ? n : i, o = a;
                    break;
                case 1:
                    e = this.options.inverse ? s : r, o = p;
                    break;
                case 2:
                    e = this.options.inverse ? i : n, o = a;
                    break;
                case 3:
                    e = this.options.inverse ? r : s, o = p
            }
            return {
                from: e,
                to: o
            }
        },
        _applyAnimation: function(e, o, i) {
            t.fn.applyStyle = this.support ? t.fn.css : t.fn.animate, e.stop().applyStyle(o, t.extend(!0, [], {
                duration: i + "ms"
            }))
        }
    };
    var i = function(t) {
        e.console && e.console.error(t)
    };
    t.fn.hoverdir = function(e) {
        var o = t.data(this, "hoverdir");
        if ("string" == typeof e) {
            var n = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                return o ? t.isFunction(o[e]) && "_" !== e.charAt(0) ? void o[e].apply(o, n) : void i("no such method '" + e + "' for hoverdir instance") : void i("cannot call methods on hoverdir prior to initialization; attempted to call method '" + e + "'")
            })
        } else this.each(function() {
            o ? o._init() : o = t.data(this, "hoverdir", new t.HoverDir(e, this))
        });
        return o
    }
}(jQuery, window);

(function($) {
    $.fn.countTo = function(options) {
        options = options || {};
        return $(this).each(function() {
            var settings = $.extend({}, $.fn.countTo.defaults, {
                from: $(this).data('from'),
                to: $(this).data('num'),
                speed: $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals: $(this).data('decimals')
            }, options);
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;
            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from,
                data = $self.data('countTo') || {};
            $self.data('countTo', data);
            if (data.interval) {
                clearInterval(data.interval)
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);
            render(value);

            function updateTimer() {
                value += increment;
                loopCount++;
                render(value);
                if (typeof(settings.onUpdate) == 'function') {
                    settings.onUpdate.call(self, value)
                }
                if (loopCount >= loops) {
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;
                    if (typeof(settings.onComplete) == 'function') {
                        settings.onComplete.call(self, value)
                    }
                }
            }

            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.text(formattedValue)
            }
        })
    };
    $.fn.countTo.defaults = {
        from: 0,
        to: 0,
        speed: 2500,
        refreshInterval: 100,
        decimals: 0,
        formatter: formatter,
        onUpdate: null,
        onComplete: null
    };

    function formatter(value, settings) {
        return value.toFixed(settings.decimals)
    }
}(jQuery));




// 

! function(t) {
    function e(t, e) {
        return t.toFixed(e.decimals)
    }
    t.fn.countTo = function(e) {
        return e = e || {}, t(this).each(function() {
            function a() {
                s += l, c++, n(s), "function" == typeof o.onUpdate && o.onUpdate.call(f, s), c >= r && (i.removeData("countTo"), clearInterval(d.interval), s = o.to, "function" == typeof o.onComplete && o.onComplete.call(f, s))
            }

            function n(t) {
                var e = o.formatter.call(f, t, o);
                i.text(e)
            }
            var o = t.extend({}, t.fn.countTo.defaults, {
                    from: t(this).data("from"),
                    to: t(this).data("to"),
                    speed: t(this).data("speed"),
                    refreshInterval: t(this).data("refresh-interval"),
                    decimals: t(this).data("decimals")
                }, e),
                r = Math.ceil(o.speed / o.refreshInterval),
                l = (o.to - o.from) / r,
                f = this,
                i = t(this),
                c = 0,
                s = o.from,
                d = i.data("countTo") || {};
            i.data("countTo", d), d.interval && clearInterval(d.interval), d.interval = setInterval(a, o.refreshInterval), n(s)
        })
    }, t.fn.countTo.defaults = {
        from: 0,
        to: 0,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        formatter: e,
        onUpdate: null,
        onComplete: null
    }
}(jQuery);;
(function($, window, document, undefined) {
    var OnePageNav = function(elem, options) {
        this.elem = elem;
        this.$elem = $(elem);
        this.options = options;
        this.metadata = this.$elem.data('plugin-options');
        this.$win = $(window);
        this.sections = {};
        this.didScroll = false;
        this.$doc = $(document);
        this.docHeight = this.$doc.height();
    };
    OnePageNav.prototype = {
        defaults: {
            navItems: 'a',
            currentClass: 'current',
            changeHash: false,
            easing: 'swing',
            filter: '',
            scrollSpeed: 700,
            scrollThreshold: 0.1,
            begin: false,
            end: false,
            scrollChange: false
        },
        init: function() {
            this.config = $.extend({}, this.defaults, this.options, this.metadata);
            this.$nav = this.$elem.find(this.config.navItems);
            if (this.config.filter !== '') {
                this.$nav = this.$nav.filter(this.config.filter);
            }
            this.$nav.on('click.onePageNav', $.proxy(this.handleClick, this));
            this.getPositions();
            this.bindInterval();
            this.$win.on('resize.onePageNav', $.proxy(this.getPositions, this));
            return this;
        },
        adjustNav: function(self, $parent) {
            self.$elem.find('.' + self.config.currentClass).removeClass(self.config.currentClass);
            $parent.addClass(self.config.currentClass);
        },
        bindInterval: function() {
            var self = this;
            var docHeight;
            self.$win.on('scroll.onePageNav', function() {
                self.didScroll = true;
            });
            self.t = setInterval(function() {
                docHeight = self.$doc.height();
                if (self.didScroll) {
                    self.didScroll = false;
                    self.scrollChange();
                }
                if (docHeight !== self.docHeight) {
                    self.docHeight = docHeight;
                    self.getPositions();
                }
            }, 250);
        },
        getHash: function($link) {
            return $link.attr('href').split('#')[1];
        },
        getPositions: function() {
            var self = this;
            var linkHref;
            var topPos;
            var $target;
            self.$nav.each(function() {
                linkHref = self.getHash($(this));
                $target = $('#' + linkHref);
                if ($target.length) {
                    topPos = $target.offset().top;
                    self.sections[linkHref] = Math.round(topPos);
                }
            });
        },
        getSection: function(windowPos) {
            var returnValue = null;
            var windowHeight = Math.round(this.$win.height() * this.config.scrollThreshold);
            for (var section in this.sections) {
                if ((this.sections[section] - windowHeight) < windowPos) {
                    returnValue = section;
                }
            }
            return returnValue;
        },
        handleClick: function(e) {
            var self = this;
            var $link = $(e.currentTarget);
            var $parent = $link.parent();
            var newLoc = '#' + self.getHash($link);
            if (!$parent.hasClass(self.config.currentClass)) {
                if (self.config.begin) {
                    self.config.begin();
                }
                self.adjustNav(self, $parent);
                self.unbindInterval();
                self.scrollTo(newLoc, function() {
                    if (self.config.changeHash) {
                        window.location.hash = newLoc;
                    }
                    self.bindInterval();
                    if (self.config.end) {
                        self.config.end();
                    }
                });
            }
            e.preventDefault();
        },
        scrollChange: function() {
            var windowTop = this.$win.scrollTop();
            var position = this.getSection(windowTop);
            var $parent;
            if (position !== null) {
                $parent = this.$elem.find('a[href$="#' + position + '"]').parent();
                if (!$parent.hasClass(this.config.currentClass)) {
                    this.adjustNav(this, $parent);
                    if (this.config.scrollChange) {
                        this.config.scrollChange($parent);
                    }
                }
            }
        },
        scrollTo: function(target, callback) {
            var offset = $(target).offset().top;
            var topbar = jQuery('.arlo_tm_topbar').outerHeight();
            if (jQuery('.arlo_tm_topbar').length) {
                $('html, body').animate({
                    scrollTop: offset - topbar + 2
                }, this.config.scrollSpeed, this.config.easing, callback);
            } else {
                $('html, body').animate({
                    scrollTop: offset
                }, this.config.scrollSpeed, this.config.easing, callback);
            }
        },
        unbindInterval: function() {
            clearInterval(this.t);
            this.$win.unbind('scroll.onePageNav');
        }
    };
    OnePageNav.defaults = OnePageNav.prototype.defaults;
    $.fn.onePageNav = function(options) {
        return this.each(function() {
            new OnePageNav(this, options).init();
        });
    };
})(jQuery, window, document);
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
! function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var i = this._events = this._events || {},
                n = i[e] = i[e] || [];
            return n.indexOf(t) == -1 && n.push(t), this
        }
    }, t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[e] = i[e] || {};
            return n[t] = !0, this
        }
    }, t.off = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return n != -1 && i.splice(n, 1), this
        }
    }, t.emitEvent = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            i = i.slice(0), t = t || [];
            for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
                var r = i[o],
                    s = n && n[r];
                s && (this.off(e, r), delete n[r]), r.apply(this, t)
            }
            return this
        }
    }, t.allOff = function() {
        delete this._events, delete this._onceEvents
    }, e
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function(e, t) {
    function i(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    }

    function n(e) {
        if (Array.isArray(e)) return e;
        var t = "object" == typeof e && "number" == typeof e.length;
        return t ? d.call(e) : [e]
    }

    function o(e, t, r) {
        if (!(this instanceof o)) return new o(e, t, r);
        var s = e;
        return "string" == typeof e && (s = document.querySelectorAll(e)), s ? (this.elements = n(s), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || e))
    }

    function r(e) {
        this.img = e
    }

    function s(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }
    var h = e.jQuery,
        a = e.console,
        d = Array.prototype.slice;
    o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, o.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = e.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var u = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
                var o = n && n[2];
                o && this.addBackground(o, e), n = i.exec(t.backgroundImage)
            }
    }, o.prototype.addImage = function(e) {
        var t = new r(e);
        this.images.push(t)
    }, o.prototype.addBackground = function(e, t) {
        var i = new s(e, t);
        this.images.push(i)
    }, o.prototype.check = function() {
        function e(e, i, n) {
            setTimeout(function() {
                t.progress(e, i, n)
            })
        }
        var t = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) {
            t.once("progress", e), t.check()
        }) : void this.complete()
    }, o.prototype.progress = function(e, t, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t)
    }, o.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, r.prototype = Object.create(t.prototype), r.prototype.check = function() {
        var e = this.getIsImageComplete();
        return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, r.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }, r.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, r.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, r.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, r.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, o.makeJQueryPlugin = function(t) {
        t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function(e, t) {
            var i = new o(this, e, t);
            return i.jqDeferred.promise(h(this))
        })
    }, o.makeJQueryPlugin(), o
});
! function($) {
    "use strict";
    var Typed = function(el, options) {
        this.el = $(el);
        this.options = $.extend({}, $.fn.typed.defaults, options);
        this.isInput = this.el.is('input');
        this.attr = this.options.attr;
        this.showCursor = this.isInput ? false : this.options.showCursor;
        this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text();
        this.contentType = this.options.contentType;
        this.typeSpeed = this.options.typeSpeed;
        this.startDelay = this.options.startDelay;
        this.backSpeed = this.options.backSpeed;
        this.backDelay = this.options.backDelay;
        this.stringsElement = this.options.stringsElement;
        this.strings = this.options.strings;
        this.strPos = 0;
        this.arrayPos = 0;
        this.stopNum = 0;
        this.loop = this.options.loop;
        this.loopCount = this.options.loopCount;
        this.curLoop = 0;
        this.stop = false;
        this.cursorChar = this.options.cursorChar;
        this.shuffle = this.options.shuffle;
        this.sequence = [];
        this.build();
    };
    Typed.prototype = {
        constructor: Typed,
        init: function() {
            var self = this;
            self.timeout = setTimeout(function() {
                for (var i = 0; i < self.strings.length; ++i) self.sequence[i] = i;
                if (self.shuffle) self.sequence = self.shuffleArray(self.sequence);
                self.typewrite(self.strings[self.sequence[self.arrayPos]], self.strPos);
            }, self.startDelay);
        },
        build: function() {
            var self = this;
            if (this.showCursor === true) {
                this.cursor = $("<span class=\"typed-cursor\">" + this.cursorChar + "</span>");
                this.el.after(this.cursor);
            }
            if (this.stringsElement) {
                this.strings = [];
                this.stringsElement.hide();
                console.log(this.stringsElement.children());
                var strings = this.stringsElement.children();
                $.each(strings, function(key, value) {
                    self.strings.push($(value).html());
                });
            }
            this.init();
        },
        typewrite: function(curString, curStrPos) {
            if (this.stop === true) {
                return;
            }
            var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
            var self = this;
            self.timeout = setTimeout(function() {
                var charPause = 0;
                var substr = curString.substr(curStrPos);
                if (substr.charAt(0) === '^') {
                    var skip = 1;
                    if (/^\^\d+/.test(substr)) {
                        substr = /\d+/.exec(substr)[0];
                        skip += substr.length;
                        charPause = parseInt(substr);
                    }
                    curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
                }
                if (self.contentType === 'html') {
                    var curChar = curString.substr(curStrPos).charAt(0)
                    if (curChar === '<' || curChar === '&') {
                        var tag = '';
                        var endTag = '';
                        if (curChar === '<') {
                            endTag = '>'
                        } else {
                            endTag = ';'
                        }
                        while (curString.substr(curStrPos + 1).charAt(0) !== endTag) {
                            tag += curString.substr(curStrPos).charAt(0);
                            curStrPos++;
                            if (curStrPos + 1 > curString.length) {
                                break;
                            }
                        }
                        curStrPos++;
                        tag += endTag;
                    }
                }
                self.timeout = setTimeout(function() {
                    if (curStrPos === curString.length) {
                        self.options.onStringTyped(self.arrayPos);
                        if (self.arrayPos === self.strings.length - 1) {
                            self.options.callback();
                            self.curLoop++;
                            if (self.loop === false || self.curLoop === self.loopCount)
                                return;
                        }
                        self.timeout = setTimeout(function() {
                            self.backspace(curString, curStrPos);
                        }, self.backDelay);
                    } else {
                        if (curStrPos === 0) {
                            self.options.preStringTyped(self.arrayPos);
                        }
                        var nextString = curString.substr(0, curStrPos + 1);
                        if (self.attr) {
                            self.el.attr(self.attr, nextString);
                        } else {
                            if (self.isInput) {
                                self.el.val(nextString);
                            } else if (self.contentType === 'html') {
                                self.el.html(nextString);
                            } else {
                                self.el.text(nextString);
                            }
                        }
                        curStrPos++;
                        self.typewrite(curString, curStrPos);
                    }
                }, charPause);
            }, humanize);
        },
        backspace: function(curString, curStrPos) {
            if (this.stop === true) {
                return;
            }
            var humanize = Math.round(Math.random() * (100 - 30)) + this.backSpeed;
            var self = this;
            self.timeout = setTimeout(function() {
                if (self.contentType === 'html') {
                    if (curString.substr(curStrPos).charAt(0) === '>') {
                        var tag = '';
                        while (curString.substr(curStrPos - 1).charAt(0) !== '<') {
                            tag -= curString.substr(curStrPos).charAt(0);
                            curStrPos--;
                            if (curStrPos < 0) {
                                break;
                            }
                        }
                        curStrPos--;
                        tag += '<';
                    }
                }
                var nextString = curString.substr(0, curStrPos);
                if (self.attr) {
                    self.el.attr(self.attr, nextString);
                } else {
                    if (self.isInput) {
                        self.el.val(nextString);
                    } else if (self.contentType === 'html') {
                        self.el.html(nextString);
                    } else {
                        self.el.text(nextString);
                    }
                }
                if (curStrPos > self.stopNum) {
                    curStrPos--;
                    self.backspace(curString, curStrPos);
                } else if (curStrPos <= self.stopNum) {
                    self.arrayPos++;
                    if (self.arrayPos === self.strings.length) {
                        self.arrayPos = 0;
                        if (self.shuffle) self.sequence = self.shuffleArray(self.sequence);
                        self.init();
                    } else
                        self.typewrite(self.strings[self.sequence[self.arrayPos]], curStrPos);
                }
            }, humanize);
        },
        shuffleArray: function(array) {
            var tmp, current, top = array.length;
            if (top)
                while (--top) {
                    current = Math.floor(Math.random() * (top + 1));
                    tmp = array[current];
                    array[current] = array[top];
                    array[top] = tmp;
                }
            return array;
        },
        reset: function() {
            var self = this;
            clearInterval(self.timeout);
            var id = this.el.attr('id');
            this.el.empty();
            if (typeof this.cursor !== 'undefined') {
                this.cursor.remove();
            }
            this.strPos = 0;
            this.arrayPos = 0;
            this.curLoop = 0;
            this.options.resetCallback();
        }
    };
    $.fn.typed = function(option) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('typed'),
                options = typeof option == 'object' && option;
            if (data) {
                data.reset();
            }
            $this.data('typed', (data = new Typed(this, options)));
            if (typeof option == 'string') data[option]();
        });
    };
    $.fn.typed.defaults = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        shuffle: false,
        backDelay: 500,
        loop: false,
        loopCount: false,
        showCursor: true,
        cursorChar: "",
        attr: null,
        contentType: 'html',
        callback: function() {},
        preStringTyped: function() {},
        onStringTyped: function() {},
        resetCallback: function() {}
    };
}(window.jQuery);

function initMap() {
    var map = new google.maps.Map(document.getElementById('ieatmaps'), {
        center: {
            lat: 34.0937458,
            lng: -118.3614978
        },
        zoom: 12,
        styles: [{
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }]
    });
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(34.0937458, -118.3614978),
        title: 'ASL',
        map: map
    });
}! function(a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
            this._handlers[c] = a.proxy(this[c], this)
        }, this)), a.each(e.Plugins, a.proxy(function(a, b) {
            this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
        }, this)), a.each(e.Workers, a.proxy(function(b, c) {
            this._pipe.push({
                filter: c.filter,
                run: a.proxy(c.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, e.Type = {
        Event: "event",
        State: "state"
    }, e.Plugins = {}, e.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this.settings.margin || "",
                c = !this.settings.autoWidth,
                d = this.settings.rtl,
                e = {
                    width: "auto",
                    "margin-left": d ? b : "",
                    "margin-right": d ? "" : b
                };
            !c && this.$stage.children().css(e), a.css = e
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                c = null,
                d = this._items.length,
                e = !this.settings.autoWidth,
                f = [];
            for (a.items = {
                    merge: !1,
                    width: b
                }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
            this._widths = f
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var b = [],
                c = this._items,
                d = this.settings,
                e = Math.max(2 * d.items, 4),
                f = 2 * Math.ceil(c.length / 2),
                g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
                h = "",
                i = "";
            for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
            this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
            this._coordinates = f
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var a = this.settings.stagePadding,
                b = this._coordinates,
                c = {
                    width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                    "padding-left": a || "",
                    "padding-right": a || ""
                };
            this.$stage.css(c)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this._coordinates.length,
                c = !this.settings.autoWidth,
                d = this.$stage.children();
            if (c && a.items.merge)
                for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
            else c && (a.css.width = a.items.width, d.css(a.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = [];
            for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], e.prototype.initialize = function() {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var b, c, e;
            b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b)
        }
        this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, e.prototype.setup = function() {
        var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;
        c ? (a.each(c, function(a) {
            a <= b && a > d && (d = Number(a))
        }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, e.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, e.prototype.prepare = function(b) {
        var c = this.trigger("prepare", {
            content: b
        });
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
            content: c.data
        }), c.data
    }, e.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
                return this[a]
            }, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, e.prototype.width = function(a) {
        switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, e.prototype.refresh = function() {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, e.prototype.onThrottledResize = function() {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, e.prototype.onResize = function() {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
    }, e.prototype.registerEventHandlers = function() {
        a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
    }, e.prototype.onDragStart = function(b) {
        var d = null;
        3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
            x: d[16 === d.length ? 12 : 4],
            y: d[16 === d.length ? 13 : 5]
        }) : (d = this.$stage.position(), d = {
            x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
            y: d.top
        }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, e.prototype.onDragMove = function(a) {
        var b = null,
            c = null,
            d = null,
            e = this.difference(this._drag.pointer, this.pointer(a)),
            f = this.difference(this._drag.stage.start, e);
        this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
    }, e.prototype.onDragEnd = function(b) {
        var d = this.difference(this._drag.pointer, this.pointer(b)),
            e = this._drag.stage.current,
            f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, e.prototype.closest = function(b, c) {
        var d = -1,
            e = 30,
            f = this.width(),
            g = this.coordinates();
        return this.settings.freeDrag || a.each(g, a.proxy(function(a, h) {
            return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1
        }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d
    }, e.prototype.animate = function(b) {
        var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : c ? this.$stage.animate({
            left: b + "px"
        }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: b + "px"
        })
    }, e.prototype.is = function(a) {
        return this._states.current[a] && this._states.current[a] > 0
    }, e.prototype.current = function(a) {
        if (a === d) return this._current;
        if (0 === this._items.length) return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", {
                property: {
                    name: "position",
                    value: a
                }
            });
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, e.prototype.invalidate = function(b) {
        return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a, b) {
            return b
        })
    }, e.prototype.reset = function(a) {
        a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
    }, e.prototype.normalize = function(a, b) {
        var c = this._items.length,
            e = b ? 0 : this._clones.length;
        return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
    }, e.prototype.relative = function(a) {
        return a -= this._clones.length / 2, this.normalize(a, !0)
    }, e.prototype.maximum = function(a) {
        var b, c, d, e = this.settings,
            f = this._coordinates.length;
        if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
        else if (e.autoWidth || e.merge) {
            for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d)););
            f = b + 1
        } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
        return a && (f -= this._clones.length / 2), Math.max(f, 0)
    }, e.prototype.minimum = function(a) {
        return a ? 0 : this._clones.length / 2
    }, e.prototype.items = function(a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
    }, e.prototype.mergers = function(a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
    }, e.prototype.clones = function(b) {
        var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function(a) {
                return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
            };
        return b === d ? a.map(this._clones, function(a, b) {
            return f(b)
        }) : a.map(this._clones, function(a, c) {
            return a === b ? f(c) : null
        })
    }, e.prototype.speed = function(a) {
        return a !== d && (this._speed = a), this._speed
    }, e.prototype.coordinates = function(b) {
        var c, e = 1,
            f = b - 1;
        return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
    }, e.prototype.duration = function(a, b, c) {
        return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }, e.prototype.to = function(a, b) {
        var c = this.current(),
            d = null,
            e = a - this.relative(c),
            f = (e > 0) - (e < 0),
            g = this._items.length,
            h = this.minimum(),
            i = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update()
    }, e.prototype.next = function(a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a)
    }, e.prototype.prev = function(a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a)
    }, e.prototype.onTransitionEnd = function(a) {
        if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, e.prototype.viewport = function() {
        var d;
        return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
    }, e.prototype.replace = function(b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
            return 1 === this.nodeType
        }).each(a.proxy(function(a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, e.prototype.add = function(b, c) {
        var e = this.relative(this._current);
        c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
            content: b,
            position: c
        }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
            content: b,
            position: c
        })
    }, e.prototype.remove = function(a) {
        a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: a
        }))
    }, e.prototype.preloadAutoWidthImages = function(b) {
        b.each(a.proxy(function(b, c) {
            this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function(a) {
                c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
        }, this))
    }, e.prototype.destroy = function() {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
        for (var d in this._plugins) this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case "<":
                return d ? a > c : a < c;
            case ">":
                return d ? a < c : a > c;
            case ">=":
                return d ? a <= c : a >= c;
            case "<=":
                return d ? a >= c : a <= c
        }
    }, e.prototype.on = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, e.prototype.off = function(a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }, e.prototype.trigger = function(b, c, d, f, g) {
        var h = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            i = a.camelCase(a.grep(["on", b, d], function(a) {
                return a
            }).join("-").toLowerCase()),
            j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
                relatedTarget: this
            }, h, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) {
            b.onTrigger && b.onTrigger(j)
        }), this.register({
            type: e.Type.Event,
            name: b
        }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
    }, e.prototype.enter = function(b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
        }, this))
    }, e.prototype.leave = function(b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b]--
        }, this))
    }, e.prototype.register = function(b) {
        if (b.type === e.Type.Event) {
            if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
                var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default = function(a) {
                    return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
                }, a.event.special[b.name].owl = !0
            }
        } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
            return a.inArray(c, this._states.tags[b.name]) === d
        }, this)))
    }, e.prototype.suppress = function(b) {
        a.each(b, a.proxy(function(a, b) {
            this._supress[b] = !0
        }, this))
    }, e.prototype.release = function(b) {
        a.each(b, a.proxy(function(a, b) {
            delete this._supress[b]
        }, this))
    }, e.prototype.pointer = function(a) {
        var c = {
            x: null,
            y: null
        };
        return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
    }, e.prototype.isNumeric = function(a) {
        return !isNaN(parseFloat(a))
    }, e.prototype.difference = function(a, b) {
        return {
            x: a.x - b.x,
            y: a.y - b.y
        }
    }, a.fn.owlCarousel = function(b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var d = a(this),
                f = d.data("owl.carousel");
            f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
                f.register({
                    type: e.Type.Event,
                    name: c
                }), f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
                    a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
                }, f))
            })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
        })
    }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, e.prototype.watch = function() {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, e.prototype.refresh = function() {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, e.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                    for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function(a, b) {
                            this.load(b)
                        }, this); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        lazyLoad: !1
    }, e.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
            var e, f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                f.css("opacity", 1), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() {
                f.css({
                    "background-image": 'url("' + g + '")',
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this), e.src = g)
        }, this)), this._loaded.push(d.get(0)))
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
            }, this),
            "loaded.owl.lazy": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, e.prototype.update = function() {
        var b = this._core._current,
            c = b + this._core.settings.items,
            d = this._core.$stage.children().toArray().slice(b, c),
            e = [],
            f = 0;
        a.each(d, function(b, c) {
            e.push(a(c).height())
        }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" === a.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
            this.play(a)
        }, this))
    };
    e.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, e.prototype.fetch = function(a, b) {
        var c = function() {
                return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
            }(),
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
        else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
        else {
            if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            c = "vzaar"
        }
        d = d[6], this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
    }, e.prototype.thumbnail = function(b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function(a) {
                e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
            };
        if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
        "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a[0].thumbnail_large, l(f)
            }
        }) : "vzaar" === c.type && a.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a.framegrab_url, l(f)
            }
        })
    }, e.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, e.prototype.play = function(b) {
        var c, d = a(b.target),
            e = d.closest("." + this._core.settings.itemClass),
            f = this._videos[e.attr("data-video")],
            g = f.width || "100%",
            h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
    }, e.prototype.isInFullScreen = function() {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame")
    }, e.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
            "change.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                a.namespace && (this.swapping = "translated" == a.type)
            }, this),
            "translate.owl.carousel": a.proxy(function(a) {
                a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    e.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, e.prototype.swap = function() {
        if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this),
                d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
                left: b + "px"
            }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
        }
    }, e.prototype.clear = function(b) {
        a(b.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._timeout = null, this._paused = !1, this._handlers = {
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, c) {
                a.namespace && this.play(b, c)
            }, this),
            "stop.owl.autoplay": a.proxy(function(a) {
                a.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
    };
    e.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, e.prototype.play = function(a, b) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
    }, e.prototype._getNextTimeout = function(d, e) {
        return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function() {
            this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
        }, this), d || this._core.settings.autoplayTimeout)
    }, e.prototype._setAutoPlayInterval = function() {
        this._timeout = this._getNextTimeout()
    }, e.prototype.stop = function() {
        this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"))
    }, e.prototype.pause = function() {
        this._core.is("rotating") && (this._paused = !0)
    }, e.prototype.destroy = function() {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(b) {
        this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, e.prototype.initialize = function() {
        var b, c = this._core.settings;
        this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.prev(c.navSpeed)
        }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.next(c.navSpeed)
        }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function(b) {
            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(d, c.dotsSpeed)
        }, this));
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
    }, e.prototype.destroy = function() {
        var a, b, c, d;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, e.prototype.update = function() {
        var a, b, c, d = this._core.clones().length / 2,
            e = d + this._core.items().length,
            f = this._core.maximum(!0),
            g = this._core.settings,
            h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
            for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
                if (b >= h || 0 === b) {
                    if (this._pages.push({
                            start: Math.min(f, a - d),
                            end: a - d + h - 1
                        }), Math.min(f, a - d) === f) break;
                    b = 0, ++c
                }
                b += this._core.mergers(this._core.relative(a))
            }
    }, e.prototype.draw = function() {
        var b, c = this._core.settings,
            d = this._core.items().length <= c.items,
            e = this._core.relative(this._core.current()),
            f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
    }, e.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
        }
    }, e.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, a.proxy(function(a, c) {
            return a.start <= b && a.end >= b
        }, this)).pop()
    }, e.prototype.getPosition = function(b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
    }, e.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }, e.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }, e.prototype.to = function(b, c, d) {
        var e;
        !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(c) {
        this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(c) {
                c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!c) return;
                    this._hashes[c] = b.content
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(c) {
                if (c.namespace && "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current())),
                        e = a.map(this._hashes, function(a, b) {
                            return a === d ? b : null
                        }).join();
                    if (!e || b.location.hash.slice(1) === e) return;
                    b.location.hash = e
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
            var c = b.location.hash.substring(1),
                e = this._core.$stage.children(),
                f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
        }, this))
    };
    e.Defaults = {
        URLhashListener: !1
    }, e.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    function e(b, c) {
        var e = !1,
            f = b.charAt(0).toUpperCase() + b.slice(1);
        return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
            if (g[b] !== d) return e = !c || b, !1
        }), e
    }

    function f(a) {
        return e(a, !0)
    }
    var g = a("<support>").get(0).style,
        h = "Webkit Moz O ms".split(" "),
        i = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        j = {
            csstransforms: function() {
                return !!e("transform")
            },
            csstransforms3d: function() {
                return !!e("perspective")
            },
            csstransitions: function() {
                return !!e("transition")
            },
            cssanimations: function() {
                return !!e("animation")
            }
        };
    j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(e) {
    var t, n, i, o, r, a, s = "Close",
        l = "BeforeClose",
        c = "AfterClose",
        d = "BeforeAppend",
        u = "MarkupParse",
        p = "Open",
        f = "Change",
        m = "mfp",
        g = "." + m,
        v = "mfp-ready",
        h = "mfp-removing",
        y = "mfp-prevent-close",
        C = function() {},
        w = !!window.jQuery,
        b = e(window),
        I = function(e, n) {
            t.ev.on(m + e + g, n)
        },
        x = function(t, n, i, o) {
            var r = document.createElement("div");
            return r.className = "mfp-" + t, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r
        },
        k = function(n, i) {
            t.ev.triggerHandler(m + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]))
        },
        T = function(n) {
            return n === a && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), a = n), t.currTemplate.closeBtn
        },
        _ = function() {
            e.magnificPopup.instance || (t = new C, t.init(), e.magnificPopup.instance = t)
        },
        P = function() {
            var e = document.createElement("p").style,
                t = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== e.transition) return !0;
            for (; t.length;)
                if (t.pop() + "Transition" in e) return !0;
            return !1
        };
    C.prototype = {
        constructor: C,
        init: function() {
            var n = navigator.appVersion;
            t.isLowIE = t.isIE8 = document.all && !document.addEventListener, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = P(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = e(document), t.popupsCache = {}
        },
        open: function(n) {
            var o;
            if (n.isObj === !1) {
                t.items = n.items.toArray(), t.index = 0;
                var a, s = n.items;
                for (o = 0; o < s.length; o++)
                    if (a = s[o], a.parsed && (a = a.el[0]), a === n.el[0]) {
                        t.index = o;
                        break
                    }
            } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;
            if (t.isOpen) return void t.updateItemHTML();
            t.types = [], r = "", n.mainEl && n.mainEl.length ? t.ev = n.mainEl.eq(0) : t.ev = i, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = x("bg").on("click" + g, function() {
                t.close()
            }), t.wrap = x("wrap").attr("tabindex", -1).on("click" + g, function(e) {
                t._checkIfClose(e.target) && t.close()
            }), t.container = x("container", t.wrap)), t.contentContainer = x("content"), t.st.preloader && (t.preloader = x("preloader", t.container, t.st.tLoading));
            var l = e.magnificPopup.modules;
            for (o = 0; o < l.length; o++) {
                var c = l[o];
                c = c.charAt(0).toUpperCase() + c.slice(1), t["init" + c].call(t)
            }
            k("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (I(u, function(e, t, n, i) {
                n.close_replaceWith = T(i.type)
            }), r += " mfp-close-btn-in") : t.wrap.append(T())), t.st.alignTop && (r += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            }) : t.wrap.css({
                top: b.scrollTop(),
                position: "absolute"
            }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: i.height(),
                position: "absolute"
            }), t.st.enableEscapeKey && i.on("keyup" + g, function(e) {
                27 === e.keyCode && t.close()
            }), b.on("resize" + g, function() {
                t.updateSize()
            }), t.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && t.wrap.addClass(r);
            var d = t.wH = b.height(),
                f = {};
            if (t.fixedContentPos && t._hasScrollBar(d)) {
                var m = t._getScrollbarSize();
                m && (f.marginRight = m)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : f.overflow = "hidden");
            var h = t.st.mainClass;
            return t.isIE7 && (h += " mfp-ie7"), h && t._addClassToMFP(h), t.updateItemHTML(), k("BuildControls"), e("html").css(f), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function() {
                t.content ? (t._addClassToMFP(v), t._setFocus()) : t.bgOverlay.addClass(v), i.on("focusin" + g, t._onFocusIn)
            }, 16), t.isOpen = !0, t.updateSize(d), k(p), n
        },
        close: function() {
            t.isOpen && (k(l), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(h), setTimeout(function() {
                t._close()
            }, t.st.removalDelay)) : t._close())
        },
        _close: function() {
            k(s);
            var n = h + " " + v + " ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
                var o = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : o.overflow = "", e("html").css(o)
            }
            i.off("keyup" + g + " focusin" + g), t.ev.off(g), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, k(c)
        },
        updateSize: function(e) {
            if (t.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth,
                    i = window.innerHeight * n;
                t.wrap.css("height", i), t.wH = i
            } else t.wH = e || b.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), k("Resize")
        },
        updateItemHTML: function() {
            var n = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
            var i = n.type;
            if (k("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
                var r = t.st[i] ? t.st[i].markup : !1;
                k("FirstMarkupParse", r), r ? t.currTemplate[i] = e(r) : t.currTemplate[i] = !0
            }
            o && o !== n.type && t.container.removeClass("mfp-" + o + "-holder");
            var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
            t.appendContent(a, i), n.preloaded = !0, k(f, n), o = n.type, t.container.prepend(t.contentContainer), k("AfterChange")
        },
        appendContent: function(e, n) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(T()) : t.content = e : t.content = "", k(d), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content)
        },
        parseEl: function(n) {
            var i, o = t.items[n];
            if (o.tagName ? o = {
                    el: e(o)
                } : (i = o.type, o = {
                    data: o,
                    src: o.src
                }), o.el) {
                for (var r = t.types, a = 0; a < r.length; a++)
                    if (o.el.hasClass("mfp-" + r[a])) {
                        i = r[a];
                        break
                    }
                o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
            }
            return o.type = i || t.st.type || "inline", o.index = n, o.parsed = !0, t.items[n] = o, k("ElementParse", o), t.items[n]
        },
        addGroup: function(e, n) {
            var i = function(i) {
                i.mfpEl = this, t._openClick(i, e, n)
            };
            n || (n = {});
            var o = "click.magnificPopup";
            n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e, e.off(o).on(o, i)))
        },
        _openClick: function(n, i, o) {
            var r = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
            if (r || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
                var a = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                if (a)
                    if (e.isFunction(a)) {
                        if (!a.call(t)) return !0
                    } else if (b.width() < a) return !0;
                n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), t.open(o)
            }
        },
        updateStatus: function(e, i) {
            if (t.preloader) {
                n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);
                var o = {
                    status: e,
                    text: i
                };
                k("UpdateStatus", o), e = o.status, i = o.text, t.preloader.html(i), t.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation()
                }), t.container.addClass("mfp-s-" + e), n = e
            }
        },
        _checkIfClose: function(n) {
            if (!e(n).hasClass(y)) {
                var i = t.st.closeOnContentClick,
                    o = t.st.closeOnBgClick;
                if (i && o) return !0;
                if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
                if (n === t.content[0] || e.contains(t.content[0], n)) {
                    if (i) return !0
                } else if (o && e.contains(document, n)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (t.isIE7 ? i.height() : document.body.scrollHeight) > (e || b.height())
        },
        _setFocus: function() {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function(n) {
            return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1)
        },
        _parseMarkup: function(t, n, i) {
            var o;
            i.data && (n = e.extend(i.data, n)), k(u, [t, n, i]), e.each(n, function(n, i) {
                if (void 0 === i || i === !1) return !0;
                if (o = n.split("_"), o.length > 1) {
                    var r = t.find(g + "-" + o[0]);
                    if (r.length > 0) {
                        var a = o[1];
                        "replaceWith" === a ? r[0] !== i[0] && r.replaceWith(i) : "img" === a ? r.is("img") ? r.attr("src", i) : r.replaceWith(e("<img>").attr("src", i).attr("class", r.attr("class"))) : r.attr(o[1], i)
                    }
                } else t.find(g + "-" + n).html(i)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    }, e.magnificPopup = {
        instance: null,
        proto: C.prototype,
        modules: [],
        open: function(t, n) {
            return _(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t)
        },
        close: function() {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function(t, n) {
            n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, e.fn.magnificPopup = function(n) {
        _();
        var i = e(this);
        if ("string" == typeof n)
            if ("open" === n) {
                var o, r = w ? i.data("magnificPopup") : i[0].magnificPopup,
                    a = parseInt(arguments[1], 10) || 0;
                r.items ? o = r.items[a] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(a)), t._openClick({
                    mfpEl: o
                }, i, r)
            } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
        else n = e.extend(!0, {}, n), w ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);
        return i
    };
    var S, E, z, O = "inline",
        M = function() {
            z && (E.after(z.addClass(S)).detach(), z = null)
        };
    e.magnificPopup.registerModule(O, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                t.types.push(O), I(s + "." + O, function() {
                    M()
                })
            },
            getInline: function(n, i) {
                if (M(), n.src) {
                    var o = t.st.inline,
                        r = e(n.src);
                    if (r.length) {
                        var a = r[0].parentNode;
                        a && a.tagName && (E || (S = o.hiddenClass, E = x(S), S = "mfp-" + S), z = r.after(E).detach().removeClass(S)), t.updateStatus("ready")
                    } else t.updateStatus("error", o.tNotFound), r = e("<div>");
                    return n.inlineElement = r, r
                }
                return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i
            }
        }
    });
    var B, L = "ajax",
        H = function() {
            B && e(document.body).removeClass(B)
        },
        A = function() {
            H(), t.req && t.req.abort()
        };
    e.magnificPopup.registerModule(L, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                t.types.push(L), B = t.st.ajax.cursor, I(s + "." + L, A), I("BeforeChange." + L, A)
            },
            getAjax: function(n) {
                B && e(document.body).addClass(B), t.updateStatus("loading");
                var i = e.extend({
                    url: n.src,
                    success: function(i, o, r) {
                        var a = {
                            data: i,
                            xhr: r
                        };
                        k("ParseAjax", a), t.appendContent(e(a.data), L), n.finished = !0, H(), t._setFocus(), setTimeout(function() {
                            t.wrap.addClass(v)
                        }, 16), t.updateStatus("ready"), k("AjaxContentAdded")
                    },
                    error: function() {
                        H(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(i), ""
            }
        }
    });
    var F, j = function(n) {
        if (n.data && void 0 !== n.data.title) return n.data.title;
        var i = t.st.image.titleSrc;
        if (i) {
            if (e.isFunction(i)) return i.call(t, n);
            if (n.el) return n.el.attr(i) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var n = t.st.image,
                    i = ".image";
                t.types.push("image"), I(p + i, function() {
                    "image" === t.currItem.type && n.cursor && e(document.body).addClass(n.cursor)
                }), I(s + i, function() {
                    n.cursor && e(document.body).removeClass(n.cursor), b.off("resize" + g)
                }), I("Resize" + i, t.resizeImage), t.isLowIE && I("AfterChange", t.resizeImage)
            },
            resizeImage: function() {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0, F && clearInterval(F), e.isCheckingImgSize = !1, k("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
            },
            findImageSize: function(e) {
                var n = 0,
                    i = e.img[0],
                    o = function(r) {
                        F && clearInterval(F), F = setInterval(function() {
                            return i.naturalWidth > 0 ? void t._onImageHasSize(e) : (n > 200 && clearInterval(F), n++, void(3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500)))
                        }, r)
                    };
                o(1)
            },
            getImage: function(n, i) {
                var o = 0,
                    r = function() {
                        n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, k("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(r, 100) : a()))
                    },
                    a = function() {
                        n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                    },
                    s = t.st.image,
                    l = i.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img", n.el && n.el.find("img").length && (c.alt = n.el.find("img").attr("alt")), n.img = e(c).on("load.mfploader", r).on("error.mfploader", a), c.src = n.src, l.is("img") && (n.img = n.img.clone()), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
                }
                return t._parseMarkup(i, {
                    title: j(n),
                    img_replaceWith: n.img
                }, n), t.resizeImage(), n.hasSize ? (F && clearInterval(F), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i)
            }
        }
    });
    var N, W = function() {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
    };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, n = t.st.zoom,
                    i = ".zoom";
                if (n.enabled && t.supportsTransition) {
                    var o, r, a = n.duration,
                        c = function(e) {
                            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                i = "all " + n.duration / 1e3 + "s " + n.easing,
                                o = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                r = "transition";
                            return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, t.css(o), t
                        },
                        d = function() {
                            t.content.css("visibility", "visible")
                        };
                    I("BuildControls" + i, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return void d();
                            r = c(e), r.css(t._getOffset()), t.wrap.append(r), o = setTimeout(function() {
                                r.css(t._getOffset(!0)), o = setTimeout(function() {
                                    d(), setTimeout(function() {
                                        r.remove(), e = r = null, k("ZoomAnimationEnded")
                                    }, 16)
                                }, a)
                            }, 16)
                        }
                    }), I(l + i, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.st.removalDelay = a, !e) {
                                if (e = t._getItemToZoom(), !e) return;
                                r = c(e)
                            }
                            r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function() {
                                r.css(t._getOffset())
                            }, 16)
                        }
                    }), I(s + i, function() {
                        t._allowZoom() && (d(), r && r.remove(), e = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function() {
                return t.currItem.hasSize ? t.currItem.img : !1
            },
            _getOffset: function(n) {
                var i;
                i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var o = i.offset(),
                    r = parseInt(i.css("padding-top"), 10),
                    a = parseInt(i.css("padding-bottom"), 10);
                o.top -= e(window).scrollTop() - r;
                var s = {
                    width: i.width(),
                    height: (w ? i.innerHeight() : i[0].offsetHeight) - a - r
                };
                return W() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s
            }
        }
    });
    var Z = "iframe",
        q = "//about:blank",
        R = function(e) {
            if (t.currTemplate[Z]) {
                var n = t.currTemplate[Z].find("iframe");
                n.length && (e || (n[0].src = q), t.isIE8 && n.css("display", e ? "block" : "none"))
            }
        };
    e.magnificPopup.registerModule(Z, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                t.types.push(Z), I("BeforeChange", function(e, t, n) {
                    t !== n && (t === Z ? R() : n === Z && R(!0))
                }), I(s + "." + Z, function() {
                    R()
                })
            },
            getIframe: function(n, i) {
                var o = n.src,
                    r = t.st.iframe;
                e.each(r.patterns, function() {
                    return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
                });
                var a = {};
                return r.srcAction && (a[r.srcAction] = o), t._parseMarkup(i, a, n), t.updateStatus("ready"), i
            }
        }
    });
    var K = function(e) {
            var n = t.items.length;
            return e > n - 1 ? e - n : 0 > e ? n + e : e
        },
        D = function(e, t, n) {
            return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
        };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var n = t.st.gallery,
                    o = ".mfp-gallery";
                return t.direction = !0, n && n.enabled ? (r += " mfp-gallery", I(p + o, function() {
                    n.navigateByImgClick && t.wrap.on("click" + o, ".mfp-img", function() {
                        return t.items.length > 1 ? (t.next(), !1) : void 0
                    }), i.on("keydown" + o, function(e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    })
                }), I("UpdateStatus" + o, function(e, n) {
                    n.text && (n.text = D(n.text, t.currItem.index, t.items.length))
                }), I(u + o, function(e, i, o, r) {
                    var a = t.items.length;
                    o.counter = a > 1 ? D(n.tCounter, r.index, a) : ""
                }), I("BuildControls" + o, function() {
                    if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                        var i = n.arrowMarkup,
                            o = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y),
                            r = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y);
                        o.click(function() {
                            t.prev()
                        }), r.click(function() {
                            t.next()
                        }), t.container.append(o.add(r))
                    }
                }), I(f + o, function() {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
                        t.preloadNearbyImages(), t._preloadTimeout = null
                    }, 16)
                }), void I(s + o, function() {
                    i.off(o), t.wrap.off("click" + o), t.arrowRight = t.arrowLeft = null
                })) : !1
            },
            next: function() {
                t.direction = !0, t.index = K(t.index + 1), t.updateItemHTML()
            },
            prev: function() {
                t.direction = !1, t.index = K(t.index - 1), t.updateItemHTML()
            },
            goTo: function(e) {
                t.direction = e >= t.index, t.index = e, t.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var e, n = t.st.gallery.preload,
                    i = Math.min(n[0], t.items.length),
                    o = Math.min(n[1], t.items.length);
                for (e = 1; e <= (t.direction ? o : i); e++) t._preloadItem(t.index + e);
                for (e = 1; e <= (t.direction ? i : o); e++) t._preloadItem(t.index - e)
            },
            _preloadItem: function(n) {
                if (n = K(n), !t.items[n].preloaded) {
                    var i = t.items[n];
                    i.parsed || (i = t.parseEl(n)), k("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                        i.hasSize = !0
                    }).on("error.mfploader", function() {
                        i.hasSize = !0, i.loadError = !0, k("LazyLoadError", i)
                    }).attr("src", i.src)), i.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    e.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/, function(e) {
                    return "@2x" + e
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina,
                        n = e.ratio;
                    n = isNaN(n) ? n() : n, n > 1 && (I("ImageHasSize." + U, function(e, t) {
                        t.img.css({
                            "max-width": t.img[0].naturalWidth / n,
                            width: "100%"
                        })
                    }), I("ElementParse." + U, function(t, i) {
                        i.src = e.replaceSrc(i, n)
                    }))
                }
            }
        }
    }), _()
});
/*! WOW wow.js - v1.3.0 - 2016-10-04
 * https://wowjs.uk
 * Copyright (c) 2016 Thomas Grainger; Licensed MIT */
! function(a, b) {
    if ("function" == typeof define && define.amd) define(["module", "exports"], b);
    else if ("undefined" != typeof exports) b(module, exports);
    else {
        var c = {
            exports: {}
        };
        b(c, c.exports), a.WOW = c.exports
    }
}(this, function(a, b) {
    "use strict";

    function c(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    function d(a, b) {
        return b.indexOf(a) >= 0
    }

    function e(a, b) {
        for (var c in b)
            if (null == a[c]) {
                var d = b[c];
                a[c] = d
            }
        return a
    }

    function f(a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
    }

    function g(a) {
        var b = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
            c = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
            d = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
            e = void 0;
        return null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
    }

    function h(a, b) {
        null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) && a["on" + b]()
    }

    function i(a, b, c) {
        null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
    }

    function j(a, b, c) {
        null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
    }

    function k() {
        return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
    }
    Object.defineProperty(b, "__esModule", {
        value: !0
    });
    var l, m, n = function() {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                }
            }
            return function(b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b
            }
        }(),
        o = window.WeakMap || window.MozWeakMap || function() {
            function a() {
                c(this, a), this.keys = [], this.values = []
            }
            return n(a, [{
                key: "get",
                value: function(a) {
                    for (var b = 0; b < this.keys.length; b++) {
                        var c = this.keys[b];
                        if (c === a) return this.values[b]
                    }
                }
            }, {
                key: "set",
                value: function(a, b) {
                    for (var c = 0; c < this.keys.length; c++) {
                        var d = this.keys[c];
                        if (d === a) return this.values[c] = b, this
                    }
                    return this.keys.push(a), this.values.push(b), this
                }
            }]), a
        }(),
        p = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (m = l = function() {
            function a() {
                c(this, a), "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))
            }
            return n(a, [{
                key: "observe",
                value: function() {}
            }]), a
        }(), l.notSupported = !0, m),
        q = window.getComputedStyle || function(a) {
            var b = /(\-([a-z]){1})/g;
            return {
                getPropertyValue: function(c) {
                    "float" === c && (c = "styleFloat"), b.test(c) && c.replace(b, function(a, b) {
                        return b.toUpperCase()
                    });
                    var d = a.currentStyle;
                    return (null != d ? d[c] : void 0) || null
                }
            }
        },
        r = function() {
            function a() {
                var b = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                c(this, a), this.defaults = {
                    boxClass: "wow",
                    animateClass: "animated",
                    offset: 0,
                    mobile: !0,
                    live: !0,
                    callback: null,
                    scrollContainer: null,
                    resetAnimation: !0
                }, this.animate = function() {
                    return "requestAnimationFrame" in window ? function(a) {
                        return window.requestAnimationFrame(a)
                    } : function(a) {
                        return a()
                    }
                }(), this.vendors = ["moz", "webkit"], this.start = this.start.bind(this), this.resetAnimation = this.resetAnimation.bind(this), this.scrollHandler = this.scrollHandler.bind(this), this.scrollCallback = this.scrollCallback.bind(this), this.scrolled = !0, this.config = e(b, this.defaults), null != b.scrollContainer && (this.config.scrollContainer = document.querySelector(b.scrollContainer)), this.animationNameCache = new o, this.wowEvent = g(this.config.boxClass)
            }
            return n(a, [{
                key: "init",
                value: function() {
                    this.element = window.document.documentElement, d(document.readyState, ["interactive", "complete"]) ? this.start() : i(document, "DOMContentLoaded", this.start), this.finished = []
                }
            }, {
                key: "start",
                value: function() {
                    var a = this;
                    if (this.stopped = !1, this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)), this.all = this.boxes.slice(0), this.boxes.length)
                        if (this.disabled()) this.resetStyle();
                        else
                            for (var b = 0; b < this.boxes.length; b++) {
                                var c = this.boxes[b];
                                this.applyStyle(c, !0)
                            }
                    if (this.disabled() || (i(this.config.scrollContainer || window, "scroll", this.scrollHandler), i(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) {
                        var d = new p(function(b) {
                            for (var c = 0; c < b.length; c++)
                                for (var d = b[c], e = 0; e < d.addedNodes.length; e++) {
                                    var f = d.addedNodes[e];
                                    a.doSync(f)
                                }
                        });
                        d.observe(document.body, {
                            childList: !0,
                            subtree: !0
                        })
                    }
                }
            }, {
                key: "stop",
                value: function() {
                    this.stopped = !0, j(this.config.scrollContainer || window, "scroll", this.scrollHandler), j(window, "resize", this.scrollHandler), null != this.interval && clearInterval(this.interval)
                }
            }, {
                key: "sync",
                value: function() {
                    p.notSupported && this.doSync(this.element)
                }
            }, {
                key: "doSync",
                value: function(a) {
                    if ("undefined" != typeof a && null !== a || (a = this.element), 1 === a.nodeType) {
                        a = a.parentNode || a;
                        for (var b = a.querySelectorAll("." + this.config.boxClass), c = 0; c < b.length; c++) {
                            var e = b[c];
                            d(e, this.all) || (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), this.scrolled = !0)
                        }
                    }
                }
            }, {
                key: "show",
                value: function(a) {
                    return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), h(a, this.wowEvent), this.config.resetAnimation && (i(a, "animationend", this.resetAnimation), i(a, "oanimationend", this.resetAnimation), i(a, "webkitAnimationEnd", this.resetAnimation), i(a, "MSAnimationEnd", this.resetAnimation)), a
                }
            }, {
                key: "applyStyle",
                value: function(a, b) {
                    var c = this,
                        d = a.getAttribute("data-wow-duration"),
                        e = a.getAttribute("data-wow-delay"),
                        f = a.getAttribute("data-wow-iteration");
                    return this.animate(function() {
                        return c.customStyle(a, b, d, e, f)
                    })
                }
            }, {
                key: "resetStyle",
                value: function() {
                    for (var a = 0; a < this.boxes.length; a++) {
                        var b = this.boxes[a];
                        b.style.visibility = "visible"
                    }
                }
            }, {
                key: "resetAnimation",
                value: function(a) {
                    if (a.type.toLowerCase().indexOf("animationend") >= 0) {
                        var b = a.target || a.srcElement;
                        b.className = b.className.replace(this.config.animateClass, "").trim()
                    }
                }
            }, {
                key: "customStyle",
                value: function(a, b, c, d, e) {
                    return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
                        animationDuration: c
                    }), d && this.vendorSet(a.style, {
                        animationDelay: d
                    }), e && this.vendorSet(a.style, {
                        animationIterationCount: e
                    }), this.vendorSet(a.style, {
                        animationName: b ? "none" : this.cachedAnimationName(a)
                    }), a
                }
            }, {
                key: "vendorSet",
                value: function(a, b) {
                    for (var c in b)
                        if (b.hasOwnProperty(c)) {
                            var d = b[c];
                            a["" + c] = d;
                            for (var e = 0; e < this.vendors.length; e++) {
                                var f = this.vendors[e];
                                a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = d
                            }
                        }
                }
            }, {
                key: "vendorCSS",
                value: function(a, b) {
                    for (var c = q(a), d = c.getPropertyCSSValue(b), e = 0; e < this.vendors.length; e++) {
                        var f = this.vendors[e];
                        d = d || c.getPropertyCSSValue("-" + f + "-" + b)
                    }
                    return d
                }
            }, {
                key: "animationName",
                value: function(a) {
                    var b = void 0;
                    try {
                        b = this.vendorCSS(a, "animation-name").cssText
                    } catch (c) {
                        b = q(a).getPropertyValue("animation-name")
                    }
                    return "none" === b ? "" : b
                }
            }, {
                key: "cacheAnimationName",
                value: function(a) {
                    return this.animationNameCache.set(a, this.animationName(a))
                }
            }, {
                key: "cachedAnimationName",
                value: function(a) {
                    return this.animationNameCache.get(a)
                }
            }, {
                key: "scrollHandler",
                value: function() {
                    this.scrolled = !0
                }
            }, {
                key: "scrollCallback",
                value: function() {
                    if (this.scrolled) {
                        this.scrolled = !1;
                        for (var a = [], b = 0; b < this.boxes.length; b++) {
                            var c = this.boxes[b];
                            if (c) {
                                if (this.isVisible(c)) {
                                    this.show(c);
                                    continue
                                }
                                a.push(c)
                            }
                        }
                        this.boxes = a, this.boxes.length || this.config.live || this.stop()
                    }
                }
            }, {
                key: "offsetTop",
                value: function(a) {
                    for (; void 0 === a.offsetTop;) a = a.parentNode;
                    for (var b = a.offsetTop; a.offsetParent;) a = a.offsetParent, b += a.offsetTop;
                    return b
                }
            }, {
                key: "isVisible",
                value: function(a) {
                    var b = a.getAttribute("data-wow-offset") || this.config.offset,
                        c = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
                        d = c + Math.min(this.element.clientHeight, k()) - b,
                        e = this.offsetTop(a),
                        f = e + a.clientHeight;
                    return d >= e && f >= c
                }
            }, {
                key: "disabled",
                value: function() {
                    return !this.config.mobile && f(navigator.userAgent)
                }
            }]), a
        }();
    b["default"] = r, a.exports = b["default"]
});
! function(t) {
    "use strict";
    var s = {
            slide: 0,
            delay: 5e3,
            loop: !0,
            preload: !1,
            preloadImage: !1,
            preloadVideo: !1,
            timer: !0,
            overlay: !1,
            autoplay: !0,
            shuffle: !1,
            cover: !0,
            color: null,
            align: "center",
            valign: "center",
            firstTransition: null,
            firstTransitionDuration: null,
            transition: "fade",
            transitionDuration: 1e3,
            transitionRegister: [],
            animation: null,
            animationDuration: "auto",
            animationRegister: [],
            slidesToKeep: 1,
            init: function() {},
            play: function() {},
            pause: function() {},
            walk: function() {},
            slides: []
        },
        i = {},
        e = function(i, e) {
            this.elmt = i, this.settings = t.extend({}, s, t.vegas.defaults, e), this.slide = this.settings.slide, this.total = this.settings.slides.length, this.noshow = this.total < 2, this.paused = !this.settings.autoplay || this.noshow, this.ended = !1, this.$elmt = t(i), this.$timer = null, this.$overlay = null, this.$slide = null, this.timeout = null, this.first = !0, this.transitions = ["fade", "fade2", "blur", "blur2", "flash", "flash2", "negative", "negative2", "burn", "burn2", "slideLeft", "slideLeft2", "slideRight", "slideRight2", "slideUp", "slideUp2", "slideDown", "slideDown2", "zoomIn", "zoomIn2", "zoomOut", "zoomOut2", "swirlLeft", "swirlLeft2", "swirlRight", "swirlRight2"], this.animations = ["kenburns", "kenburnsLeft", "kenburnsRight", "kenburnsUp", "kenburnsUpLeft", "kenburnsUpRight", "kenburnsDown", "kenburnsDownLeft", "kenburnsDownRight"], this.settings.transitionRegister instanceof Array == !1 && (this.settings.transitionRegister = [this.settings.transitionRegister]), this.settings.animationRegister instanceof Array == !1 && (this.settings.animationRegister = [this.settings.animationRegister]), this.transitions = this.transitions.concat(this.settings.transitionRegister), this.animations = this.animations.concat(this.settings.animationRegister), this.support = {
                objectFit: "objectFit" in document.body.style,
                transition: "transition" in document.body.style || "WebkitTransition" in document.body.style,
                video: t.vegas.isVideoCompatible()
            }, this.settings.shuffle === !0 && this.shuffle(), this._init()
        };
    e.prototype = {
        _init: function() {
            var s, i, e, n = "BODY" === this.elmt.tagName,
                o = this.settings.timer,
                a = this.settings.overlay,
                r = this;
            this._preload(), n || (this.$elmt.css("height", this.$elmt.css("height")), s = t('<div class="vegas-wrapper">').css("overflow", this.$elmt.css("overflow")).css("padding", this.$elmt.css("padding")), this.$elmt.css("padding") || s.css("padding-top", this.$elmt.css("padding-top")).css("padding-bottom", this.$elmt.css("padding-bottom")).css("padding-left", this.$elmt.css("padding-left")).css("padding-right", this.$elmt.css("padding-right")), this.$elmt.clone(!0).children().appendTo(s), this.elmt.innerHTML = ""), o && this.support.transition && (e = t('<div class="vegas-timer"><div class="vegas-timer-progress">'), this.$timer = e, this.$elmt.prepend(e)), a && (i = t('<div class="vegas-overlay">'), "string" == typeof a && i.css("background-image", "url(" + a + ")"), this.$overlay = i, this.$elmt.prepend(i)), this.$elmt.addClass("vegas-container"), n || this.$elmt.append(s), setTimeout(function() {
                r.trigger("init"), r._goto(r.slide), r.settings.autoplay && r.trigger("play")
            }, 1)
        },
        _preload: function() {
            var t, s;
            for (s = 0; s < this.settings.slides.length; s++)(this.settings.preload || this.settings.preloadImages) && this.settings.slides[s].src && (t = new Image, t.src = this.settings.slides[s].src), (this.settings.preload || this.settings.preloadVideos) && this.support.video && this.settings.slides[s].video && (this.settings.slides[s].video instanceof Array ? this._video(this.settings.slides[s].video) : this._video(this.settings.slides[s].video.src))
        },
        _random: function(t) {
            return t[Math.floor(Math.random() * t.length)]
        },
        _slideShow: function() {
            var t = this;
            this.total > 1 && !this.ended && !this.paused && !this.noshow && (this.timeout = setTimeout(function() {
                t.next()
            }, this._options("delay")))
        },
        _timer: function(t) {
            var s = this;
            clearTimeout(this.timeout), this.$timer && (this.$timer.removeClass("vegas-timer-running").find("div").css("transition-duration", "0ms"), this.ended || this.paused || this.noshow || t && setTimeout(function() {
                s.$timer.addClass("vegas-timer-running").find("div").css("transition-duration", s._options("delay") - 100 + "ms")
            }, 100))
        },
        _video: function(t) {
            var s, e, n = t.toString();
            return i[n] ? i[n] : (t instanceof Array == !1 && (t = [t]), s = document.createElement("video"), s.preload = !0, t.forEach(function(t) {
                e = document.createElement("source"), e.src = t, s.appendChild(e)
            }), i[n] = s, s)
        },
        _fadeOutSound: function(t, s) {
            var i = this,
                e = s / 10,
                n = t.volume - .09;
            n > 0 ? (t.volume = n, setTimeout(function() {
                i._fadeOutSound(t, s)
            }, e)) : t.pause()
        },
        _fadeInSound: function(t, s) {
            var i = this,
                e = s / 10,
                n = t.volume + .09;
            n < 1 && (t.volume = n, setTimeout(function() {
                i._fadeInSound(t, s)
            }, e))
        },
        _options: function(t, s) {
            return void 0 === s && (s = this.slide), void 0 !== this.settings.slides[s][t] ? this.settings.slides[s][t] : this.settings[t]
        },
        _goto: function(s) {
            function i() {
                f._timer(!0), setTimeout(function() {
                    y && (f.support.transition ? (h.css("transition", "all " + _ + "ms").addClass("vegas-transition-" + y + "-out"), h.each(function() {
                        var t = h.find("video").get(0);
                        t && (t.volume = 1, f._fadeOutSound(t, _))
                    }), e.css("transition", "all " + _ + "ms").addClass("vegas-transition-" + y + "-in")) : e.fadeIn(_));
                    for (var t = 0; t < h.length - f.settings.slidesToKeep; t++) h.eq(t).remove();
                    f.trigger("walk"), f._slideShow()
                }, 100)
            }
            "undefined" == typeof this.settings.slides[s] && (s = 0), this.slide = s;
            var e, n, o, a, r, h = this.$elmt.children(".vegas-slide"),
                d = this.settings.slides[s].src,
                l = this.settings.slides[s].video,
                g = this._options("delay"),
                u = this._options("align"),
                c = this._options("valign"),
                p = this._options("cover"),
                m = this._options("color") || this.$elmt.css("background-color"),
                f = this,
                v = h.length,
                y = this._options("transition"),
                _ = this._options("transitionDuration"),
                w = this._options("animation"),
                b = this._options("animationDuration");
            this.settings.firstTransition && this.first && (y = this.settings.firstTransition || y), this.settings.firstTransitionDuration && this.first && (_ = this.settings.firstTransitionDuration || _), this.first && (this.first = !1), "repeat" !== p && (p === !0 ? p = "cover" : p === !1 && (p = "contain")), ("random" === y || y instanceof Array) && (y = y instanceof Array ? this._random(y) : this._random(this.transitions)), ("random" === w || w instanceof Array) && (w = w instanceof Array ? this._random(w) : this._random(this.animations)), ("auto" === _ || _ > g) && (_ = g), "auto" === b && (b = g), e = t('<div class="vegas-slide"></div>'), this.support.transition && y && e.addClass("vegas-transition-" + y), this.support.video && l ? (a = l instanceof Array ? this._video(l) : this._video(l.src), a.loop = void 0 === l.loop || l.loop, a.muted = void 0 === l.mute || l.mute, a.muted === !1 ? (a.volume = 0, this._fadeInSound(a, _)) : a.pause(), o = t(a).addClass("vegas-video").css("background-color", m), this.support.objectFit ? o.css("object-position", u + " " + c).css("object-fit", p).css("width", "100%").css("height", "100%") : "contain" === p && o.css("width", "100%").css("height", "100%"), e.append(o)) : (r = new Image, n = t('<div class="vegas-slide-inner"></div>').css("background-image", 'url("' + d + '")').css("background-color", m).css("background-position", u + " " + c), "repeat" === p ? n.css("background-repeat", "repeat") : n.css("background-size", p), this.support.transition && w && n.addClass("vegas-animation-" + w).css("animation-duration", b + "ms"), e.append(n)), this.support.transition || e.css("display", "none"), v ? h.eq(v - 1).after(e) : this.$elmt.prepend(e), h.css("transition", "all 0ms").each(function() {
                this.className = "vegas-slide", "VIDEO" === this.tagName && (this.className += " vegas-video"), y && (this.className += " vegas-transition-" + y, this.className += " vegas-transition-" + y + "-in")
            }), f._timer(!1), a ? (4 === a.readyState && (a.currentTime = 0), a.play(), i()) : (r.src = d, r.complete ? i() : r.onload = i)
        },
        _end: function() {
            this.ended = !0, this._timer(!1), this.trigger("end")
        },
        shuffle: function() {
            for (var t, s, i = this.total - 1; i > 0; i--) s = Math.floor(Math.random() * (i + 1)), t = this.settings.slides[i], this.settings.slides[i] = this.settings.slides[s], this.settings.slides[s] = t
        },
        play: function() {
            this.paused && (this.paused = !1, this.next(), this.trigger("play"))
        },
        pause: function() {
            this._timer(!1), this.paused = !0, this.trigger("pause")
        },
        toggle: function() {
            this.paused ? this.play() : this.pause()
        },
        playing: function() {
            return !this.paused && !this.noshow
        },
        current: function(t) {
            return t ? {
                slide: this.slide,
                data: this.settings.slides[this.slide]
            } : this.slide
        },
        jump: function(t) {
            t < 0 || t > this.total - 1 || t === this.slide || (this.slide = t, this._goto(this.slide))
        },
        next: function() {
            if (this.slide++, this.slide >= this.total) {
                if (!this.settings.loop) return this._end();
                this.slide = 0
            }
            this._goto(this.slide)
        },
        previous: function() {
            if (this.slide--, this.slide < 0) {
                if (!this.settings.loop) return void this.slide++;
                this.slide = this.total - 1
            }
            this._goto(this.slide)
        },
        trigger: function(t) {
            var s = [];
            s = "init" === t ? [this.settings] : [this.slide, this.settings.slides[this.slide]], this.$elmt.trigger("vegas" + t, s), "function" == typeof this.settings[t] && this.settings[t].apply(this.$elmt, s)
        },
        options: function(i, e) {
            var n = this.settings.slides.slice();
            if ("object" == typeof i) this.settings = t.extend({}, s, t.vegas.defaults, i);
            else {
                if ("string" != typeof i) return this.settings;
                if (void 0 === e) return this.settings[i];
                this.settings[i] = e
            }
            this.settings.slides !== n && (this.total = this.settings.slides.length, this.noshow = this.total < 2, this._preload())
        },
        destroy: function() {
            clearTimeout(this.timeout), this.$elmt.removeClass("vegas-container"), this.$elmt.find("> .vegas-slide").remove(), this.$elmt.find("> .vegas-wrapper").clone(!0).children().appendTo(this.$elmt), this.$elmt.find("> .vegas-wrapper").remove(), this.settings.timer && this.$timer.remove(), this.settings.overlay && this.$overlay.remove(), this.elmt._vegas = null
        }
    }, t.fn.vegas = function(t) {
        var s, i = arguments,
            n = !1;
        if (void 0 === t || "object" == typeof t) return this.each(function() {
            this._vegas || (this._vegas = new e(this, t))
        });
        if ("string" == typeof t) {
            if (this.each(function() {
                    var e = this._vegas;
                    if (!e) throw new Error("No Vegas applied to this element.");
                    "function" == typeof e[t] && "_" !== t[0] ? s = e[t].apply(e, [].slice.call(i, 1)) : n = !0
                }), n) throw new Error('No method "' + t + '" in Vegas.');
            return void 0 !== s ? s : this
        }
    }, t.vegas = {}, t.vegas.defaults = s, t.vegas.isVideoCompatible = function() {
        return !/(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i.test(navigator.userAgent)
    }
}(window.jQuery || window.Zepto);
var ytp = ytp || {};

function onYouTubePlayerAPIReady() {
    if (ytp.YTAPIReady)
        return;
    ytp.YTAPIReady = true;
    jQuery(document).trigger("YTAPIReady");
}
(function(jQuery, ytp) {
    var nAgt = navigator.userAgent;
    if (!jQuery.browser) {
        jQuery.browser = {};
        jQuery.browser.mozilla = !1;
        jQuery.browser.webkit = !1;
        jQuery.browser.opera = !1;
        jQuery.browser.safari = !1;
        jQuery.browser.chrome = !1;
        jQuery.browser.msie = !1;
        jQuery.browser.ua = nAgt;
        jQuery.browser.name = navigator.appName;
        jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion);
        jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
        var nameOffset, verOffset, ix;
        if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
        else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
        else if (-1 != nAgt.indexOf("Trident")) {
            jQuery.browser.msie = !0;
            jQuery.browser.name = "Microsoft Internet Explorer";
            var start = nAgt.indexOf("rv:") + 3,
                end = start + 4;
            jQuery.browser.fullVersion = nAgt.substring(start, end)
        } else -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix));
        jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10);
        isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10));
        jQuery.browser.version = jQuery.browser.majorVersion
    }
    jQuery.browser.android = /Android/i.test(nAgt);
    jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt);
    jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt);
    jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt);
    jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt);
    jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt);
    jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle;
    jQuery.fn.CSSAnimate = function(a, g, p, m, h) {
        function r(a) {
            return a.replace(/([A-Z])/g, function(a) {
                return "-" + a.toLowerCase()
            })
        }

        function f(a, f) {
            return "string" !== typeof a || a.match(/^[\-0-9\.]+$/) ? "" + a + f : a
        }
        jQuery.support.CSStransition = function() {
            var a = (document.body || document.documentElement).style;
            return void 0 !== a.transition || void 0 !== a.WebkitTransition || void 0 !== a.MozTransition || void 0 !== a.MsTransition || void 0 !== a.OTransition
        }();
        return this.each(function() {
            var e = this,
                k = jQuery(this);
            e.id = e.id || "CSSA_" + (new Date).getTime();
            var l = l || {
                type: "noEvent"
            };
            if (e.CSSAIsRunning && e.eventType == l.type) e.CSSqueue = function() {
                k.CSSAnimate(a, g, p, m, h)
            };
            else if (e.CSSqueue = null, e.eventType = l.type, 0 !== k.length && a) {
                e.CSSAIsRunning = !0;
                "function" == typeof g && (h = g, g = jQuery.fx.speeds._default);
                "function" == typeof p && (h = p, p = 0);
                "function" == typeof m && (h = m, m = "cubic-bezier(0.65,0.03,0.36,0.72)");
                if ("string" == typeof g)
                    for (var b in jQuery.fx.speeds)
                        if (g == b) {
                            g = jQuery.fx.speeds[b];
                            break
                        } else g = jQuery.fx.speeds._default;
                g || (g = jQuery.fx.speeds._default);
                if (jQuery.support.CSStransition) {
                    l = {
                        "default": "ease",
                        "in": "ease-in",
                        out: "ease-out",
                        "in-out": "ease-in-out",
                        snap: "cubic-bezier(0,1,.5,1)",
                        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                        easeInOutExpo: "cubic-bezier(1,0,0,1)",
                        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                        easeInSine: "cubic-bezier(.47,0,.745,.715)",
                        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                    };
                    l[m] && (m = l[m]);
                    var d = "",
                        q = "transitionEnd";
                    jQuery.browser.webkit ? (d = "-webkit-", q = "webkitTransitionEnd") : jQuery.browser.mozilla ? (d = "-moz-", q = "transitionend") : jQuery.browser.opera ? (d = "-o-", q = "otransitionend") : jQuery.browser.msie && (d = "-ms-", q = "msTransitionEnd");
                    l = [];
                    for (c in a) {
                        b = c;
                        "transform" === b && (b = d + "transform", a[b] = a[c], delete a[c]);
                        "filter" === b && (b = d + "filter", a[b] = a[c], delete a[c]);
                        if ("transform-origin" === b || "origin" === b) b = d + "transform-origin", a[b] = a[c], delete a[c];
                        "x" === b && (b = d + "transform", a[b] = a[b] || "", a[b] += " translateX(" + f(a[c], "px") + ")", delete a[c]);
                        "y" === b && (b = d + "transform", a[b] = a[b] || "", a[b] += " translateY(" + f(a[c], "px") + ")", delete a[c]);
                        "z" === b && (b = d + "transform", a[b] = a[b] || "", a[b] += " translateZ(" + f(a[c], "px") + ")", delete a[c]);
                        "rotate" === b && (b = d + "transform", a[b] = a[b] || "", a[b] += " rotate(" + f(a[c], "deg") + ")", delete a[c]);
                        "rotateX" === b && (b = d + "transform", a[b] = a[b] || "", a[b] += " rotateX(" + f(a[c], "deg") + ")", delete a[c]);
                        "rotateY" === b && (b = d + "transform", a[b] = a[b] || "", a[b] += " rotateY(" + f(a[c], "deg") + ")", delete a[c]);
                        "rotateZ" === b && (b = d + "transform", a[b] = a[b] || "", a[b] += " rotateZ(" + f(a[c], "deg") + ")", delete a[c]);
                        "scale" === b && (b = d + "transform", a[b] = a[b] || "", a[b] += " scale(" + f(a[c], "") + ")", delete a[c]);
                        "scaleX" === b && (b = d + "transform", a[b] = a[b] || "", a[b] += " scaleX(" + f(a[c], "") + ")", delete a[c]);
                        "scaleY" === b && (b = d + "transform", a[b] = a[b] || "", a[b] += " scaleY(" + f(a[c], "") + ")", delete a[c]);
                        "scaleZ" === b && (b = d + "transform", a[b] = a[b] || "", a[b] += " scaleZ(" + f(a[c], "") + ")", delete a[c]);
                        "skew" === b && (b = d + "transform", a[b] = a[b] || "", a[b] += " skew(" + f(a[c], "deg") + ")", delete a[c]);
                        "skewX" === b && (b = d + "transform", a[b] = a[b] || "", a[b] += " skewX(" + f(a[c], "deg") + ")", delete a[c]);
                        "skewY" === b && (b = d + "transform", a[b] = a[b] || "", a[b] += " skewY(" + f(a[c], "deg") + ")", delete a[c]);
                        "perspective" === b && (b = d + "transform", a[b] = a[b] || "", a[b] += " perspective(" + f(a[c], "px") + ")", delete a[c]);
                        0 > l.indexOf(b) && l.push(r(b))
                    }
                    var c = l.join(","),
                        s = function() {
                            k.off(q + "." + e.id);
                            clearTimeout(e.timeout);
                            k.css(d + "transition", "");
                            "function" == typeof h && h(k);
                            e.called = !0;
                            e.CSSAIsRunning = !1;
                            "function" == typeof e.CSSqueue && (e.CSSqueue(), e.CSSqueue = null)
                        },
                        n = {};
                    jQuery.extend(n, a);
                    n[d + "transition-property"] = c;
                    n[d + "transition-duration"] = g + "ms";
                    n[d + "transition-delay"] = p + "ms";
                    n[d + "transition-style"] = "preserve-3d";
                    n[d + "transition-timing-function"] = m;
                    setTimeout(function() {
                        k.one(q + "." + e.id, s);
                        k.css(n)
                    }, 1);
                    e.timeout = setTimeout(function() {
                        k.called || !h ? (k.called = !1, e.CSSAIsRunning = !1) : (k.css(d + "transition", ""), h(k), e.CSSAIsRunning = !1, "function" == typeof e.CSSqueue && (e.CSSqueue(), e.CSSqueue = null))
                    }, g + p + 100)
                } else {
                    for (var c in a) "transform" === c && delete a[c], "filter" === c && delete a[c], "transform-origin" === c && delete a[c], "auto" === a[c] && delete a[c];
                    h && "string" !== typeof h || (h = "linear");
                    k.animate(a, g, h)
                }
            }
        })
    };
    var getYTPVideoID = function(url) {
        var videoID, playlistID;
        if (url.indexOf("youtu.be") > 0) {
            videoID = url.substr(url.lastIndexOf("/") + 1, url.length);
            playlistID = videoID.indexOf("?list=") > 0 ? videoID.substr(videoID.lastIndexOf("="), videoID.length) : null;
            videoID = playlistID ? videoID.substr(0, videoID.lastIndexOf("?")) : videoID;
        } else if (url.indexOf("http") > -1) {
            videoID = url.match(/[\\?&]v=([^&#]*)/)[1];
            playlistID = url.indexOf("list=") > 0 ? url.match(/[\\?&]list=([^&#]*)/)[1] : null;
        } else {
            videoID = url.length > 15 ? null : url;
            playlistID = videoID ? null : url;
        }
        return {
            videoID: videoID,
            playlistID: playlistID
        };
    };
    jQuery.mbYTPlayer = {
        name: "jquery.mb.YTPlayer",
        version: "2.7.8",
        author: "Matteo Bicocchi",
        defaults: {
            containment: "body",
            ratio: "16/9",
            videoURL: null,
            playlistURL: null,
            startAt: 0,
            stopAt: 0,
            autoPlay: true,
            vol: 100,
            addRaster: false,
            opacity: 1,
            quality: "default",
            mute: false,
            loop: true,
            showControls: true,
            showAnnotations: false,
            showYTLogo: true,
            stopMovieOnClick: false,
            stopMovieOnBlur: true,
            realfullscreen: true,
            gaTrack: true,
            onReady: function(player) {}
        },
        controls: {
            play: "P",
            pause: "p",
            mute: "M",
            unmute: "A",
            onlyYT: "O",
            showSite: "R",
            ytLogo: "Y"
        },
        locationProtocol: "https:",
        buildPlayer: function(options) {
            return this.each(function() {
                var YTPlayer = this;
                var $YTPlayer = jQuery(YTPlayer);
                YTPlayer.loop = 0;
                YTPlayer.opt = {};
                $YTPlayer.addClass("mb_YTPlayer");
                var property = $YTPlayer.data("property") && typeof $YTPlayer.data("property") == "string" ? eval('(' + $YTPlayer.data("property") + ')') : $YTPlayer.data("property");
                if (typeof property != "undefined" && typeof property.vol != "undefined")
                    property.vol = property.vol == 0 ? property.vol = 1 : property.vol;
                jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property);
                var canGoFullscreen = !(jQuery.browser.msie || jQuery.browser.opera || self.location.href != top.location.href);
                if (!canGoFullscreen)
                    YTPlayer.opt.realfullscreen = false;
                if (!$YTPlayer.attr("id"))
                    $YTPlayer.attr("id", "video_" + new Date().getTime());
                var playerID = "mbYTP_" + YTPlayer.id;
                YTPlayer.isAlone = false;
                YTPlayer.hasFocus = true;
                var videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).videoID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).videoID : false;
                var playlistID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).playlistID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).playlistID : false;
                YTPlayer.videoID = videoID;
                YTPlayer.playlistID = playlistID;
                YTPlayer.opt.showAnnotations = (YTPlayer.opt.showAnnotations) ? '0' : '3';
                var playerVars = {
                    'autoplay': 0,
                    'modestbranding': 1,
                    'controls': 0,
                    'showinfo': 0,
                    'rel': 0,
                    'enablejsapi': 1,
                    'version': 3,
                    'playerapiid': playerID,
                    'origin': '*',
                    'allowfullscreen': true,
                    'wmode': 'transparent',
                    'iv_load_policy': YTPlayer.opt.showAnnotations
                };
                var v = document.createElement('video');
                if (v.canPlayType)
                    jQuery.extend(playerVars, {
                        'html5': 1
                    });
                if (jQuery.browser.msie && jQuery.browser.version < 9) {
                    this.opt.opacity = 1;
                }
                var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox");
                var overlay = jQuery("<div/>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }).addClass("YTPOverlay");
                YTPlayer.isSelf = YTPlayer.opt.containment == "self";
                YTPlayer.opt.containment = YTPlayer.opt.containment == "self" ? jQuery(this) : jQuery(YTPlayer.opt.containment);
                YTPlayer.isBackground = YTPlayer.opt.containment.get(0).tagName.toLowerCase() == "body";
                if (YTPlayer.isBackground && ytp.backgroundIsInited)
                    return;
                var isPlayer = YTPlayer.opt.containment.is(jQuery(this)) && jQuery(this).children().length == 0;
                if (!isPlayer) {
                    $YTPlayer.hide();
                } else {
                    YTPlayer.isPlayer = true;
                }
                if (jQuery.browser.mobile && YTPlayer.isBackground) {
                    $YTPlayer.remove();
                    return;
                }
                if (YTPlayer.opt.addRaster) {
                    var classN = YTPlayer.opt.addRaster == "dot" ? "raster-dot" : "raster";
                    var retina = (window.retina || window.devicePixelRatio > 1);
                    overlay.addClass(retina ? classN + " retina" : classN);
                } else {
                    overlay.removeClass(function(index, classNames) {
                        var current_classes = classNames.split(" "),
                            classes_to_remove = [];
                        jQuery.each(current_classes, function(index, class_name) {
                            if (/raster-.*/.test(class_name)) {
                                classes_to_remove.push(class_name);
                            }
                        });
                        classes_to_remove.push("retina");
                        return classes_to_remove.join(" ");
                    })
                }
                var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);
                wrapper.css({
                    position: "absolute",
                    zIndex: 0,
                    minWidth: "100%",
                    minHeight: "100%",
                    left: 0,
                    top: 0,
                    overflow: "hidden",
                    opacity: 0
                });
                playerBox.css({
                    position: "absolute",
                    zIndex: 0,
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    overflow: "hidden"
                });
                wrapper.append(playerBox);
                YTPlayer.opt.containment.children().not("script, style").each(function() {
                    if (jQuery(this).css("position") == "static")
                        jQuery(this).css("position", "relative");
                });
                if (YTPlayer.isBackground) {
                    wrapper.css({
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: 0,
                        webkitTransform: "translateZ(0)"
                    });
                    $YTPlayer.hide();
                } else if (YTPlayer.opt.containment.css("position") == "static")
                    YTPlayer.opt.containment.css({
                        position: "relative"
                    });
                YTPlayer.opt.containment.prepend(wrapper);
                YTPlayer.wrapper = wrapper;
                playerBox.css({
                    opacity: 1
                });
                if (!jQuery.browser.mobile) {
                    playerBox.after(overlay);
                    YTPlayer.overlay = overlay;
                }
                if (!YTPlayer.isBackground) {
                    overlay.on("mouseenter", function() {
                        $YTPlayer.find(".mb_YTPBar").addClass("visible");
                    }).on("mouseleave", function() {
                        $YTPlayer.find(".mb_YTPBar").removeClass("visible");
                    })
                }
                if (!ytp.YTAPIReady) {
                    jQuery("#YTAPI").remove();
                    var tag = jQuery("<script></script>").attr({
                        "src": jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/player_api?v=" + jQuery.mbYTPlayer.version,
                        "id": "YTAPI"
                    });
                    jQuery("head title").after(tag);
                } else {
                    setTimeout(function() {
                        jQuery(document).trigger("YTAPIReady");
                    }, 100)
                }
                jQuery(document).on("YTAPIReady", function() {
                    if ((YTPlayer.isBackground && ytp.backgroundIsInited) || YTPlayer.isInit)
                        return;
                    if (YTPlayer.isBackground && YTPlayer.opt.stopMovieOnClick)
                        jQuery(document).off("mousedown.ytplayer").on("mousedown,.ytplayer", function(e) {
                            var target = jQuery(e.target);
                            if (target.is("a") || target.parents().is("a")) {
                                $YTPlayer.pauseYTP();
                            }
                        });
                    if (YTPlayer.isBackground) {
                        ytp.backgroundIsInited = true;
                    }
                    YTPlayer.opt.autoPlay = typeof YTPlayer.opt.autoPlay == "undefined" ? (YTPlayer.isBackground ? true : false) : YTPlayer.opt.autoPlay;
                    YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100;
                    jQuery.mbYTPlayer.getDataFromFeed(YTPlayer);
                    jQuery(YTPlayer).on("YTPChanged", function() {
                        if (YTPlayer.isInit)
                            return;
                        YTPlayer.isInit = true;
                        if (jQuery.browser.mobile && YTPlayer.isPlayer) {
                            new YT.Player(playerID, {
                                videoId: YTPlayer.videoID.toString(),
                                height: '100%',
                                width: '100%',
                                videoId: YTPlayer.videoID,
                                events: {
                                    'onReady': function(event) {
                                        YTPlayer.player = event.target;
                                        playerBox.css({
                                            opacity: 1
                                        });
                                        YTPlayer.wrapper.css({
                                            opacity: YTPlayer.opt.opacity
                                        });
                                        $YTPlayer.optimizeDisplay();
                                    },
                                    'onStateChange': function() {}
                                }
                            });
                            return;
                        }
                        new YT.Player(playerID, {
                            videoId: YTPlayer.videoID.toString(),
                            playerVars: playerVars,
                            events: {
                                'onReady': function(event) {
                                    YTPlayer.player = event.target;
                                    if (YTPlayer.isReady)
                                        return;
                                    YTPlayer.isReady = true;
                                    YTPlayer.playerEl = YTPlayer.player.getIframe();
                                    $YTPlayer.optimizeDisplay();
                                    YTPlayer.videoID = videoID;
                                    jQuery(window).on("resize.YTP", function() {
                                        $YTPlayer.optimizeDisplay();
                                    });
                                    if (YTPlayer.opt.showControls)
                                        jQuery(YTPlayer).buildYTPControls();
                                    var startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
                                    YTPlayer.player.setVolume(0);
                                    jQuery(YTPlayer).muteYTPVolume();
                                    jQuery.mbYTPlayer.checkForState(YTPlayer);
                                    YTPlayer.checkForStartAt = setInterval(function() {
                                        var canPlayVideo = jQuery.browser.mozilla && !window.MediaSource ? true : (YTPlayer.player.getVideoLoadedFraction() > startAt / YTPlayer.player.getDuration());
                                        if (YTPlayer.player.getDuration() > 0 && YTPlayer.player.getCurrentTime() >= startAt && canPlayVideo) {
                                            clearInterval(YTPlayer.checkForStartAt);
                                            YTPlayer.player.setVolume(0);
                                            jQuery(YTPlayer).muteYTPVolume();
                                            if (typeof YTPlayer.opt.onReady == "function")
                                                YTPlayer.opt.onReady(YTPlayer);
                                            if (!YTPlayer.opt.mute)
                                                jQuery(YTPlayer).unmuteYTP();
                                            jQuery.mbYTPlayer.checkForState(YTPlayer);
                                            YTPlayer.player.pauseVideo();
                                            setTimeout(function() {
                                                YTPlayer.canTrigger = true;
                                                if (YTPlayer.opt.autoPlay) {
                                                    $YTPlayer.playYTP();
                                                    $YTPlayer.css("background-image", "none");
                                                    YTPlayer.wrapper.CSSAnimate({
                                                        opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
                                                    }, 2000);
                                                } else {
                                                    YTPlayer.player.pauseVideo();
                                                }
                                            }, 100)
                                        } else {
                                            YTPlayer.player.playVideo();
                                            YTPlayer.player.seekTo(startAt, true);
                                        }
                                    }, jQuery.browser.chrome ? 1000 : 1);
                                },
                                'onStateChange': function(event) {
                                    if (typeof event.target.getPlayerState != "function")
                                        return;
                                    var state = event.target.getPlayerState();
                                    if (YTPlayer.state == state)
                                        return;
                                    YTPlayer.state = state;
                                    var controls = jQuery("#controlBar_" + YTPlayer.id);
                                    var data = YTPlayer.opt;
                                    var eventType;
                                    switch (state) {
                                        case -1:
                                            eventType = "YTPUnstarted";
                                            break;
                                        case 0:
                                            eventType = "YTPEnd";
                                            YTPlayer.player.pauseVideo();
                                            var startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
                                            if (data.loop) {
                                                YTPlayer.wrapper.css({
                                                    opacity: 0
                                                });
                                                $YTPlayer.playYTP();
                                                YTPlayer.player.seekTo(startAt, true);
                                            } else if (!YTPlayer.isBackground) {
                                                YTPlayer.player.seekTo(startAt, true);
                                                $YTPlayer.playYTP();
                                                setTimeout(function() {
                                                    $YTPlayer.pauseYTP();
                                                }, 10);
                                            }
                                            if (!data.loop && YTPlayer.isBackground)
                                                YTPlayer.wrapper.CSSAnimate({
                                                    opacity: 0
                                                }, 2000);
                                            else if (data.loop) {
                                                YTPlayer.loop++;
                                            }
                                            controls.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                            break;
                                        case 1:
                                            eventType = "YTPStart";
                                            if (!jQuery.browser.chrome)
                                                YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality);
                                            controls.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause);
                                            if (typeof _gaq != "undefined" && eval(YTPlayer.opt.gaTrack))
                                                _gaq.push(['_trackEvent', 'YTPlayer', 'Play', (YTPlayer.videoTitle || YTPlayer.videoID.toString())]);
                                            if (typeof ga != "undefined" && eval(YTPlayer.opt.gaTrack))
                                                ga('send', 'event', 'YTPlayer', 'play', (YTPlayer.videoTitle || YTPlayer.videoID.toString()));
                                            break;
                                        case 2:
                                            eventType = "YTPPause";
                                            controls.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                            break;
                                        case 3:
                                            eventType = "YTPBuffering";
                                            if (!jQuery.browser.chrome)
                                                YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality);
                                            controls.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                            break;
                                        case 5:
                                            eventType = "YTPCued";
                                            break;
                                        default:
                                            break;
                                    }
                                    var YTPevent = jQuery.Event(eventType);
                                    YTPevent.time = YTPlayer.player.time;
                                    if (YTPlayer.canTrigger)
                                        jQuery(YTPlayer).trigger(YTPevent);
                                },
                                'onPlaybackQualityChange': function(e) {
                                    var quality = e.target.getPlaybackQuality();
                                    var YTPQualityChange = jQuery.Event("YTPQualityChange");
                                    YTPQualityChange.quality = quality;
                                    jQuery(YTPlayer).trigger(YTPQualityChange);
                                },
                                'onError': function(err) {
                                    if (err.data == 150) {
                                        console.log("Embedding this video is restricted by Youtube.");
                                        if (YTPlayer.isPlayList)
                                            jQuery(YTPlayer).playNext();
                                    }
                                    if (err.data == 2 && YTPlayer.isPlayList)
                                        jQuery(YTPlayer).playNext();
                                    if (typeof YTPlayer.opt.onError == "function")
                                        YTPlayer.opt.onError($YTPlayer, err);
                                }
                            }
                        });
                    });
                })
            });
        },
        getDataFromFeed: function(YTPlayer) {
            if (!(jQuery.browser.msie && jQuery.browser.version <= 9)) {
                jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + '//gdata.youtube.com/feeds/api/videos/' + YTPlayer.videoID + '?v=2&alt=jsonc', function(data, status, xhr) {
                    YTPlayer.dataReceived = true;
                    YTPlayer.videoData = data.data;
                    jQuery(YTPlayer).trigger("YTPChanged");
                    var YTPData = jQuery.Event("YTPData");
                    YTPData.prop = {};
                    for (var x in YTPlayer.videoData)
                        YTPData.prop[x] = YTPlayer.videoData[x];
                    jQuery(YTPlayer).trigger(YTPData);
                    YTPlayer.videoTitle = YTPlayer.videoData.title;
                    if (YTPlayer.opt.ratio == "auto")
                        if (YTPlayer.videoData.aspectRatio && YTPlayer.videoData.aspectRatio === "widescreen")
                            YTPlayer.opt.ratio = "16/9";
                        else
                            YTPlayer.opt.ratio = "4/3";
                    if (!YTPlayer.hasData) {
                        YTPlayer.hasData = true;
                        if (YTPlayer.isPlayer) {
                            var bgndURL = YTPlayer.videoData.thumbnail.hqDefault;
                            YTPlayer.opt.containment.css({
                                background: "rgba(0,0,0,0.5) url(" + bgndURL + ") center center",
                                backgroundSize: "cover"
                            });
                        }
                    }
                });
                setTimeout(function() {
                    if (!YTPlayer.dataReceived && !YTPlayer.hasData) {
                        YTPlayer.hasData = true;
                        jQuery(YTPlayer).trigger("YTPChanged");
                    }
                }, 1500)
            } else {
                YTPlayer.opt.ratio == "auto" ? YTPlayer.opt.ratio = "16/9" : YTPlayer.opt.ratio;
                if (!YTPlayer.hasData) {
                    YTPlayer.hasData = true;
                    setTimeout(function() {
                        jQuery(YTPlayer).trigger("YTPChanged");
                    }, 100)
                }
            }
        },
        getVideoData: function() {
            var YTPlayer = this.get(0);
            return YTPlayer.videoData;
        },
        getVideoID: function() {
            var YTPlayer = this.get(0);
            return YTPlayer.videoID || false;
        },
        setVideoQuality: function(quality) {
            var YTPlayer = this.get(0);
            if (!jQuery.browser.chrome)
                YTPlayer.player.setPlaybackQuality(quality);
        },
        YTPlaylist: function(videos, shuffle, callback) {
            var YTPlayer = this.get(0);
            YTPlayer.isPlayList = true;
            if (shuffle)
                videos = jQuery.shuffle(videos);
            if (!YTPlayer.videoID) {
                YTPlayer.videos = videos;
                YTPlayer.videoCounter = 0;
                YTPlayer.videoLength = videos.length;
                jQuery(YTPlayer).data("property", videos[0]);
                jQuery(YTPlayer).mb_YTPlayer();
            }
            if (typeof callback == "function")
                jQuery(YTPlayer).on("YTPChanged", function() {
                    callback(YTPlayer);
                });
            jQuery(YTPlayer).on("YTPEnd", function() {
                jQuery(YTPlayer).playNext();
            });
        },
        playNext: function() {
            var YTPlayer = this.get(0);
            YTPlayer.videoCounter++;
            if (YTPlayer.videoCounter >= YTPlayer.videoLength)
                YTPlayer.videoCounter = 0;
            jQuery(YTPlayer.playerEl).css({
                opacity: 0
            });
            jQuery(YTPlayer).changeMovie(YTPlayer.videos[YTPlayer.videoCounter]);
        },
        playPrev: function() {
            var YTPlayer = this.get(0);
            YTPlayer.videoCounter--;
            if (YTPlayer.videoCounter < 0)
                YTPlayer.videoCounter = YTPlayer.videoLength - 1;
            jQuery(YTPlayer.playerEl).css({
                opacity: 0
            });
            jQuery(YTPlayer).changeMovie(YTPlayer.videos[YTPlayer.videoCounter]);
        },
        changeMovie: function(opt) {
            var YTPlayer = this.get(0);
            YTPlayer.opt.startAt = 0;
            YTPlayer.opt.stopAt = 0;
            YTPlayer.opt.mute = true;
            if (opt) {
                jQuery.extend(YTPlayer.opt, opt);
            }
            YTPlayer.videoID = getYTPVideoID(YTPlayer.opt.videoURL).videoID;
            jQuery(YTPlayer).pauseYTP();
            var timer = jQuery.browser.msie ? 1000 : 0;
            jQuery(YTPlayer.playerEl).CSSAnimate({
                opacity: 0
            }, timer);
            setTimeout(function() {
                var quality = !jQuery.browser.chrome ? YTPlayer.opt.quality : "default";
                jQuery(YTPlayer).getPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + YTPlayer.videoID), 1, quality);
                jQuery(YTPlayer).playYTP();
                jQuery(YTPlayer).one("YTPStart", function() {
                    YTPlayer.wrapper.CSSAnimate({
                        opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
                    }, 1000);
                    jQuery(YTPlayer.playerEl).CSSAnimate({
                        opacity: 1
                    }, timer);
                    if (YTPlayer.opt.startAt) {
                        YTPlayer.player.seekTo(YTPlayer.opt.startAt);
                    }
                    jQuery.mbYTPlayer.checkForState(YTPlayer);
                    if (!YTPlayer.opt.autoPlay)
                        jQuery(YTPlayer).pauseYTP();
                });
                if (YTPlayer.opt.mute) {
                    jQuery(YTPlayer).muteYTPVolume();
                } else {
                    jQuery(YTPlayer).unmuteYTP();
                }
            }, timer);
            if (YTPlayer.opt.addRaster) {
                var retina = (window.retina || window.devicePixelRatio > 1);
                YTPlayer.overlay.addClass(retina ? "raster retina" : "raster");
            } else {
                YTPlayer.overlay.removeClass("raster");
                YTPlayer.overlay.removeClass("retina");
            }
            jQuery("#controlBar_" + YTPlayer.id).remove();
            if (YTPlayer.opt.showControls)
                jQuery(YTPlayer).buildYTPControls();
            jQuery.mbYTPlayer.getDataFromFeed(YTPlayer);
            jQuery(YTPlayer).optimizeDisplay();
        },
        getPlayer: function() {
            return jQuery(this).get(0).player;
        },
        playerDestroy: function() {
            var YTPlayer = this.get(0);
            ytp.YTAPIReady = false;
            ytp.backgroundIsInited = false;
            YTPlayer.isInit = false;
            YTPlayer.videoID = null;
            var playerBox = YTPlayer.wrapper;
            playerBox.remove();
            jQuery("#controlBar_" + YTPlayer.id).remove();
        },
        fullscreen: function(real) {
            var YTPlayer = this.get(0);
            if (typeof real == "undefined")
                real = YTPlayer.opt.realfullscreen;
            real = eval(real);
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var fullScreenBtn = controls.find(".mb_OnlyYT");
            var videoWrapper = YTPlayer.isSelf ? YTPlayer.opt.containment : YTPlayer.wrapper;
            if (real) {
                var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                jQuery(document).off(fullscreenchange).on(fullscreenchange, function() {
                    var isFullScreen = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");
                    if (!isFullScreen) {
                        YTPlayer.isAlone = false;
                        fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT);
                        jQuery(YTPlayer).setVideoQuality(YTPlayer.opt.quality);
                        videoWrapper.removeClass("fullscreen");
                        videoWrapper.CSSAnimate({
                            opacity: YTPlayer.opt.opacity
                        }, 500);
                        videoWrapper.css({
                            zIndex: 0
                        });
                        if (YTPlayer.isBackground) {
                            jQuery("body").after(controls);
                        } else {
                            YTPlayer.wrapper.before(controls);
                        }
                        jQuery(window).resize();
                        jQuery(YTPlayer).trigger("YTPFullScreenEnd");
                    } else {
                        jQuery(YTPlayer).setVideoQuality("default");
                        jQuery(YTPlayer).trigger("YTPFullScreenStart");
                    }
                });
            }
            if (!YTPlayer.isAlone) {
                if (real) {
                    videoWrapper.css({
                        opacity: 0
                    });
                    videoWrapper.addClass("fullscreen");
                    launchFullscreen(videoWrapper.get(0));
                    setTimeout(function() {
                        videoWrapper.CSSAnimate({
                            opacity: 1
                        }, 1000);
                        YTPlayer.wrapper.append(controls);
                        jQuery(YTPlayer).optimizeDisplay();
                        YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, true);
                    }, 500)
                } else
                    videoWrapper.css({
                        zIndex: 10000
                    }).CSSAnimate({
                        opacity: 1
                    }, 1000);
                fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite);
                YTPlayer.isAlone = true;
            } else {
                if (real) {
                    cancelFullscreen();
                } else {
                    videoWrapper.CSSAnimate({
                        opacity: YTPlayer.opt.opacity
                    }, 500);
                    videoWrapper.css({
                        zIndex: 0
                    });
                }
                fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT)
                YTPlayer.isAlone = false;
            }

            function RunPrefixMethod(obj, method) {
                var pfx = ["webkit", "moz", "ms", "o", ""];
                var p = 0,
                    m, t;
                while (p < pfx.length && !obj[m]) {
                    m = method;
                    if (pfx[p] == "") {
                        m = m.substr(0, 1).toLowerCase() + m.substr(1);
                    }
                    m = pfx[p] + m;
                    t = typeof obj[m];
                    if (t != "undefined") {
                        pfx = [pfx[p]];
                        return (t == "function" ? obj[m]() : obj[m]);
                    }
                    p++;
                }
            }

            function launchFullscreen(element) {
                RunPrefixMethod(element, "RequestFullScreen");
            }

            function cancelFullscreen() {
                if (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) {
                    RunPrefixMethod(document, "CancelFullScreen");
                }
            }
        },
        playYTP: function() {
            var YTPlayer = this.get(0);
            if (typeof YTPlayer.player === "undefined")
                return;
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var playBtn = controls.find(".mb_YTPPlaypause");
            playBtn.html(jQuery.mbYTPlayer.controls.pause);
            YTPlayer.player.playVideo();
            YTPlayer.wrapper.CSSAnimate({
                opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
            }, 2000);
            jQuery(YTPlayer).on("YTPStart", function() {
                jQuery(YTPlayer).css("background-image", "none");
            })
        },
        toggleLoops: function() {
            var YTPlayer = this.get(0);
            var data = YTPlayer.opt;
            if (data.loop == 1) {
                data.loop = 0;
            } else {
                if (data.startAt) {
                    YTPlayer.player.seekTo(data.startAt);
                } else {
                    YTPlayer.player.playVideo();
                }
                data.loop = 1;
            }
        },
        stopYTP: function() {
            var YTPlayer = this.get(0);
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var playBtn = controls.find(".mb_YTPPlaypause");
            playBtn.html(jQuery.mbYTPlayer.controls.play);
            YTPlayer.player.stopVideo();
        },
        pauseYTP: function() {
            var YTPlayer = this.get(0);
            var data = YTPlayer.opt;
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var playBtn = controls.find(".mb_YTPPlaypause");
            playBtn.html(jQuery.mbYTPlayer.controls.play);
            YTPlayer.player.pauseVideo();
        },
        seekToYTP: function(val) {
            var YTPlayer = this.get(0);
            YTPlayer.player.seekTo(val, true);
        },
        setYTPVolume: function(val) {
            var YTPlayer = this.get(0);
            if (!val && !YTPlayer.opt.vol && YTPlayer.player.getVolume() == 0)
                jQuery(YTPlayer).unmuteYTP();
            else if ((!val && YTPlayer.player.getVolume() > 0) || (val && YTPlayer.player.getVolume() == val))
                jQuery(YTPlayer).muteYTPVolume();
            else
                YTPlayer.opt.vol = val;
            YTPlayer.player.setVolume(YTPlayer.opt.vol);
        },
        muteYTP: function() {
            var YTPlayer = this.get(0);
            YTPlayer.player.mute();
            YTPlayer.player.setVolume(0);
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var muteBtn = controls.find(".mb_YTPMuteUnmute");
            muteBtn.html(jQuery.mbYTPlayer.controls.unmute);
            jQuery(YTPlayer).addClass("isMuted");
            jQuery(YTPlayer).trigger("YTPMuted");
        },
        unmuteYTP: function() {
            var YTPlayer = this.get(0);
            YTPlayer.player.unMute();
            YTPlayer.player.setVolume(YTPlayer.opt.vol);
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var muteBtn = controls.find(".mb_YTPMuteUnmute");
            muteBtn.html(jQuery.mbYTPlayer.controls.mute);
            jQuery(YTPlayer).removeClass("isMuted");
            jQuery(YTPlayer).trigger("YTPUnmuted");
        },
        manageYTPProgress: function() {
            var YTPlayer = this.get(0);
            var controls = jQuery("#controlBar_" + YTPlayer.id);
            var progressBar = controls.find(".mb_YTPProgress");
            var loadedBar = controls.find(".mb_YTPLoaded");
            var timeBar = controls.find(".mb_YTPseekbar");
            var totW = progressBar.outerWidth();
            var currentTime = Math.floor(YTPlayer.player.getCurrentTime());
            var totalTime = Math.floor(YTPlayer.player.getDuration());
            var timeW = (currentTime * totW) / totalTime;
            var startLeft = 0;
            var loadedW = YTPlayer.player.getVideoLoadedFraction() * 100;
            loadedBar.css({
                left: startLeft,
                width: loadedW + "%"
            });
            timeBar.css({
                left: 0,
                width: timeW
            });
            return {
                totalTime: totalTime,
                currentTime: currentTime
            };
        },
        buildYTPControls: function() {
            var YTPlayer = this.get(0);
            var data = YTPlayer.opt;
            data.showYTLogo = data.showYTLogo || data.printUrl;
            if (jQuery("#controlBar_" + YTPlayer.id).length)
                return;
            var controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
                whiteSpace: "noWrap",
                position: YTPlayer.isBackground ? "fixed" : "absolute",
                zIndex: YTPlayer.isBackground ? 10000 : 1000
            }).hide();
            var buttonBar = jQuery("<div/>").addClass("buttonBar");
            var playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlaypause ytpicon").click(function() {
                if (YTPlayer.player.getPlayerState() == 1)
                    jQuery(YTPlayer).pauseYTP();
                else
                    jQuery(YTPlayer).playYTP();
            });
            var MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function() {
                if (YTPlayer.player.getVolume() == 0) {
                    jQuery(YTPlayer).unmuteYTP();
                } else {
                    jQuery(YTPlayer).muteYTP();
                }
            });
            var idx = jQuery("<span/>").addClass("mb_YTPTime");
            var vURL = data.videoURL ? data.videoURL : "";
            if (vURL.indexOf("http") < 0)
                vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL;
            var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function() {
                window.open(vURL, "viewOnYT")
            });
            var onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function() {
                jQuery(YTPlayer).fullscreen(data.realfullscreen);
            });
            var progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").click(function(e) {
                timeBar.css({
                    width: (e.clientX - timeBar.offset().left)
                });
                YTPlayer.timeW = e.clientX - timeBar.offset().left;
                controlBar.find(".mb_YTPLoaded").css({
                    width: 0
                });
                var totalTime = Math.floor(YTPlayer.player.getDuration());
                YTPlayer.goto = (timeBar.outerWidth() * totalTime) / progressBar.outerWidth();
                YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), true);
                controlBar.find(".mb_YTPLoaded").css({
                    width: 0
                });
            });
            var loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute");
            var timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
            progressBar.append(loadedBar).append(timeBar);
            buttonBar.append(playpause).append(MuteUnmute).append(idx);
            if (data.showYTLogo) {
                buttonBar.append(movieUrl);
            }
            if (YTPlayer.isBackground || (eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground))
                buttonBar.append(onlyVideo);
            controlBar.append(buttonBar).append(progressBar);
            if (!YTPlayer.isBackground) {
                controlBar.addClass("inlinePlayer");
                YTPlayer.wrapper.before(controlBar);
            } else {
                jQuery("body").after(controlBar);
            }
            controlBar.fadeIn();
        },
        checkForState: function(YTPlayer) {
            var interval = YTPlayer.opt.showControls ? 10 : 1000;
            clearInterval(YTPlayer.getState);
            YTPlayer.getState = setInterval(function() {
                var prog = jQuery(YTPlayer).manageYTPProgress();
                var $YTPlayer = jQuery(YTPlayer);
                var controlBar = jQuery("#controlBar_" + YTPlayer.id);
                var data = YTPlayer.opt;
                var startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
                var stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
                stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0;
                if (YTPlayer.player.time != prog.currentTime) {
                    var YTPevent = jQuery.Event("YTPTime");
                    YTPevent.time = YTPlayer.player.time;
                    jQuery(YTPlayer).trigger(YTPevent);
                }
                YTPlayer.player.time = prog.currentTime;
                if (YTPlayer.player.getVolume() == 0)
                    $YTPlayer.addClass("isMuted");
                else
                    $YTPlayer.removeClass("isMuted");
                if (YTPlayer.opt.showControls)
                    if (prog.totalTime) {
                        controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime));
                    } else {
                        controlBar.find(".mb_YTPTime").html("-- : -- / -- : --");
                    }
                if (YTPlayer.opt.stopMovieOnBlur)
                    if (!document.hasFocus()) {
                        if (YTPlayer.state == 1) {
                            YTPlayer.hasFocus = false;
                            $YTPlayer.pauseYTP();
                        }
                    } else if (document.hasFocus() && !YTPlayer.hasFocus) {
                    YTPlayer.hasFocus = true;
                    $YTPlayer.playYTP();
                }
                if (YTPlayer.player.getPlayerState() == 1 && (parseFloat(YTPlayer.player.getDuration() - 3) < YTPlayer.player.getCurrentTime() || (stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt))) {
                    if (YTPlayer.isEnded)
                        return;
                    YTPlayer.isEnded = true;
                    setTimeout(function() {
                        YTPlayer.isEnded = false
                    }, 2000);
                    if (YTPlayer.isPlayList) {
                        clearInterval(YTPlayer.getState);
                        var YTPEnd = jQuery.Event("YTPEnd");
                        YTPEnd.time = YTPlayer.player.time;
                        jQuery(YTPlayer).trigger(YTPEnd);
                        return;
                    } else if (!data.loop) {
                        YTPlayer.player.pauseVideo();
                        YTPlayer.wrapper.CSSAnimate({
                            opacity: 0
                        }, 1000, function() {
                            var YTPEnd = jQuery.Event("YTPEnd");
                            YTPEnd.time = YTPlayer.player.time;
                            jQuery(YTPlayer).trigger(YTPEnd);
                            YTPlayer.player.seekTo(startAt, true);
                            if (!YTPlayer.isBackground) {
                                var bgndURL = YTPlayer.videoData.thumbnail.hqDefault;
                                jQuery(YTPlayer).css({
                                    background: "rgba(0,0,0,0.5) url(" + bgndURL + ") center center",
                                    backgroundSize: "cover"
                                });
                            }
                        });
                    } else
                        YTPlayer.player.seekTo(startAt, true);
                }
            }, interval);
        },
        formatTime: function(s) {
            var min = Math.floor(s / 60);
            var sec = Math.floor(s - (60 * min));
            return (min <= 9 ? "0" + min : min) + " : " + (sec <= 9 ? "0" + sec : sec);
        }
    };
    jQuery.fn.toggleVolume = function() {
        var YTPlayer = this.get(0);
        if (!YTPlayer)
            return;
        if (YTPlayer.player.isMuted()) {
            jQuery(YTPlayer).unmuteYTP();
            return true;
        } else {
            jQuery(YTPlayer).muteYTP();
            return false;
        }
    };
    jQuery.fn.optimizeDisplay = function() {
        var YTPlayer = this.get(0);
        var data = YTPlayer.opt;
        var playerBox = jQuery(YTPlayer.playerEl);
        var win = {};
        var el = YTPlayer.wrapper;
        win.width = el.outerWidth();
        win.height = el.outerHeight();
        var margin = 24;
        var overprint = 100;
        var vid = {};
        vid.width = win.width + ((win.width * margin) / 100);
        vid.height = data.ratio == "16/9" ? Math.ceil((9 * win.width) / 16) : Math.ceil((3 * win.width) / 4);
        vid.marginTop = -((vid.height - win.height) / 2);
        vid.marginLeft = -((win.width * (margin / 2)) / 100);
        if (vid.height < win.height) {
            vid.height = win.height + ((win.height * margin) / 100);
            vid.width = data.ratio == "16/9" ? Math.floor((16 * win.height) / 9) : Math.floor((4 * win.height) / 3);
            vid.marginTop = -((win.height * (margin / 2)) / 100);
            vid.marginLeft = -((vid.width - win.width) / 2);
        }
        vid.width += overprint;
        vid.height += overprint;
        vid.marginTop -= overprint / 2;
        vid.marginLeft -= overprint / 2;
        playerBox.css({
            width: vid.width,
            height: vid.height,
            marginTop: vid.marginTop,
            marginLeft: vid.marginLeft
        });
    };
    jQuery.shuffle = function(arr) {
        var newArray = arr.slice();
        var len = newArray.length;
        var i = len;
        while (i--) {
            var p = parseInt(Math.random() * len);
            var t = newArray[i];
            newArray[i] = newArray[p];
            newArray[p] = t;
        }
        return newArray;
    };
    jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer;
    jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.YTPlaylist;
    jQuery.fn.playNext = jQuery.mbYTPlayer.playNext;
    jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev;
    jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie;
    jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID;
    jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer;
    jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy;
    jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen;
    jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildYTPControls;
    jQuery.fn.playYTP = jQuery.mbYTPlayer.playYTP;
    jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops;
    jQuery.fn.stopYTP = jQuery.mbYTPlayer.stopYTP;
    jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pauseYTP;
    jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekToYTP;
    jQuery.fn.muteYTP = jQuery.mbYTPlayer.muteYTP;
    jQuery.fn.unmuteYTP = jQuery.mbYTPlayer.unmuteYTP;
    jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setYTPVolume;
    jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality;
    jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageYTPProgress;
    jQuery.fn.getDataFromFeed = jQuery.mbYTPlayer.getVideoData;
    jQuery.fn.mb_YTPlayer = jQuery.fn.YTPlayer;
    jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.muteYTP;
    jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmuteYTP;
})(jQuery, ytp);
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('jquery-bridget/jquery-bridget', ['jquery'], function(jQuery) {
            return factory(window, jQuery);
        });
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(window, require('jquery'));
    } else {
        window.jQueryBridget = factory(window, window.jQuery);
    }
}(window, function factory(window, jQuery) {
    'use strict';
    var arraySlice = Array.prototype.slice;
    var console = window.console;
    var logError = typeof console == 'undefined' ? function() {} : function(message) {
        console.error(message);
    };

    function jQueryBridget(namespace, PluginClass, $) {
        $ = $ || jQuery || window.jQuery;
        if (!$) {
            return;
        }
        if (!PluginClass.prototype.option) {
            PluginClass.prototype.option = function(opts) {
                if (!$.isPlainObject(opts)) {
                    return;
                }
                this.options = $.extend(true, this.options, opts);
            };
        }
        $.fn[namespace] = function(arg0) {
            if (typeof arg0 == 'string') {
                var args = arraySlice.call(arguments, 1);
                return methodCall(this, arg0, args);
            }
            plainCall(this, arg0);
            return this;
        };

        function methodCall($elems, methodName, args) {
            var returnValue;
            var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';
            $elems.each(function(i, elem) {
                var instance = $.data(elem, namespace);
                if (!instance) {
                    logError(namespace + ' not initialized. Cannot call methods, i.e. ' +
                        pluginMethodStr);
                    return;
                }
                var method = instance[methodName];
                if (!method || methodName.charAt(0) == '_') {
                    logError(pluginMethodStr + ' is not a valid method');
                    return;
                }
                var value = method.apply(instance, args);
                returnValue = returnValue === undefined ? value : returnValue;
            });
            return returnValue !== undefined ? returnValue : $elems;
        }

        function plainCall($elems, options) {
            $elems.each(function(i, elem) {
                var instance = $.data(elem, namespace);
                if (instance) {
                    instance.option(options);
                    instance._init();
                } else {
                    instance = new PluginClass(elem, options);
                    $.data(elem, namespace, instance);
                }
            });
        }
        updateJQuery($);
    }

    function updateJQuery($) {
        if (!$ || ($ && $.bridget)) {
            return;
        }
        $.bridget = jQueryBridget;
    }
    updateJQuery(jQuery || window.jQuery);
    return jQueryBridget;
}));
(function(global, factory) {
    if (typeof define == 'function' && define.amd) {
        define('ev-emitter/ev-emitter', factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory();
    } else {
        global.EvEmitter = factory();
    }
}(typeof window != 'undefined' ? window : this, function() {
    function EvEmitter() {}
    var proto = EvEmitter.prototype;
    proto.on = function(eventName, listener) {
        if (!eventName || !listener) {
            return;
        }
        var events = this._events = this._events || {};
        var listeners = events[eventName] = events[eventName] || [];
        if (listeners.indexOf(listener) == -1) {
            listeners.push(listener);
        }
        return this;
    };
    proto.once = function(eventName, listener) {
        if (!eventName || !listener) {
            return;
        }
        this.on(eventName, listener);
        var onceEvents = this._onceEvents = this._onceEvents || {};
        var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
        onceListeners[listener] = true;
        return this;
    };
    proto.off = function(eventName, listener) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) {
            return;
        }
        var index = listeners.indexOf(listener);
        if (index != -1) {
            listeners.splice(index, 1);
        }
        return this;
    };
    proto.emitEvent = function(eventName, args) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) {
            return;
        }
        listeners = listeners.slice(0);
        args = args || [];
        var onceListeners = this._onceEvents && this._onceEvents[eventName];
        for (var i = 0; i < listeners.length; i++) {
            var listener = listeners[i]
            var isOnce = onceListeners && onceListeners[listener];
            if (isOnce) {
                this.off(eventName, listener);
                delete onceListeners[listener];
            }
            listener.apply(this, args);
        }
        return this;
    };
    proto.allOff = function() {
        delete this._events;
        delete this._onceEvents;
    };
    return EvEmitter;
}));
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('get-size/get-size', factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory();
    } else {
        window.getSize = factory();
    }
})(window, function factory() {
    'use strict';

    function getStyleSize(value) {
        var num = parseFloat(value);
        var isValid = value.indexOf('%') == -1 && !isNaN(num);
        return isValid && num;
    }

    function noop() {}
    var logError = typeof console == 'undefined' ? noop : function(message) {
        console.error(message);
    };
    var measurements = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth'];
    var measurementsLength = measurements.length;

    function getZeroSize() {
        var size = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        };
        for (var i = 0; i < measurementsLength; i++) {
            var measurement = measurements[i];
            size[measurement] = 0;
        }
        return size;
    }

    function getStyle(elem) {
        var style = getComputedStyle(elem);
        if (!style) {
            logError('Style returned ' + style +
                '. Are you running this code in a hidden iframe on Firefox? ' +
                'See https://bit.ly/getsizebug1');
        }
        return style;
    }
    var isSetup = false;
    var isBoxSizeOuter;

    function setup() {
        if (isSetup) {
            return;
        }
        isSetup = true;
        var div = document.createElement('div');
        div.style.width = '200px';
        div.style.padding = '1px 2px 3px 4px';
        div.style.borderStyle = 'solid';
        div.style.borderWidth = '1px 2px 3px 4px';
        div.style.boxSizing = 'border-box';
        var body = document.body || document.documentElement;
        body.appendChild(div);
        var style = getStyle(div);
        isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
        getSize.isBoxSizeOuter = isBoxSizeOuter;
        body.removeChild(div);
    }

    function getSize(elem) {
        setup();
        if (typeof elem == 'string') {
            elem = document.querySelector(elem);
        }
        if (!elem || typeof elem != 'object' || !elem.nodeType) {
            return;
        }
        var style = getStyle(elem);
        if (style.display == 'none') {
            return getZeroSize();
        }
        var size = {};
        size.width = elem.offsetWidth;
        size.height = elem.offsetHeight;
        var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';
        for (var i = 0; i < measurementsLength; i++) {
            var measurement = measurements[i];
            var value = style[measurement];
            var num = parseFloat(value);
            size[measurement] = !isNaN(num) ? num : 0;
        }
        var paddingWidth = size.paddingLeft + size.paddingRight;
        var paddingHeight = size.paddingTop + size.paddingBottom;
        var marginWidth = size.marginLeft + size.marginRight;
        var marginHeight = size.marginTop + size.marginBottom;
        var borderWidth = size.borderLeftWidth + size.borderRightWidth;
        var borderHeight = size.borderTopWidth + size.borderBottomWidth;
        var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
        var styleWidth = getStyleSize(style.width);
        if (styleWidth !== false) {
            size.width = styleWidth +
                (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
        }
        var styleHeight = getStyleSize(style.height);
        if (styleHeight !== false) {
            size.height = styleHeight +
                (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
        }
        size.innerWidth = size.width - (paddingWidth + borderWidth);
        size.innerHeight = size.height - (paddingHeight + borderHeight);
        size.outerWidth = size.width + marginWidth;
        size.outerHeight = size.height + marginHeight;
        return size;
    }
    return getSize;
});
(function(window, factory) {
    'use strict';
    if (typeof define == 'function' && define.amd) {
        define('desandro-matches-selector/matches-selector', factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory();
    } else {
        window.matchesSelector = factory();
    }
}(window, function factory() {
    'use strict';
    var matchesMethod = (function() {
        var ElemProto = window.Element.prototype;
        if (ElemProto.matches) {
            return 'matches';
        }
        if (ElemProto.matchesSelector) {
            return 'matchesSelector';
        }
        var prefixes = ['webkit', 'moz', 'ms', 'o'];
        for (var i = 0; i < prefixes.length; i++) {
            var prefix = prefixes[i];
            var method = prefix + 'MatchesSelector';
            if (ElemProto[method]) {
                return method;
            }
        }
    })();
    return function matchesSelector(elem, selector) {
        return elem[matchesMethod](selector);
    };
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('fizzy-ui-utils/utils', ['desandro-matches-selector/matches-selector'], function(matchesSelector) {
            return factory(window, matchesSelector);
        });
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(window, require('desandro-matches-selector'));
    } else {
        window.fizzyUIUtils = factory(window, window.matchesSelector);
    }
}(window, function factory(window, matchesSelector) {
    var utils = {};
    utils.extend = function(a, b) {
        for (var prop in b) {
            a[prop] = b[prop];
        }
        return a;
    };
    utils.modulo = function(num, div) {
        return ((num % div) + div) % div;
    };
    var arraySlice = Array.prototype.slice;
    utils.makeArray = function(obj) {
        if (Array.isArray(obj)) {
            return obj;
        }
        if (obj === null || obj === undefined) {
            return [];
        }
        var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
        if (isArrayLike) {
            return arraySlice.call(obj);
        }
        return [obj];
    };
    utils.removeFrom = function(ary, obj) {
        var index = ary.indexOf(obj);
        if (index != -1) {
            ary.splice(index, 1);
        }
    };
    utils.getParent = function(elem, selector) {
        while (elem.parentNode && elem != document.body) {
            elem = elem.parentNode;
            if (matchesSelector(elem, selector)) {
                return elem;
            }
        }
    };
    utils.getQueryElement = function(elem) {
        if (typeof elem == 'string') {
            return document.querySelector(elem);
        }
        return elem;
    };
    utils.handleEvent = function(event) {
        var method = 'on' + event.type;
        if (this[method]) {
            this[method](event);
        }
    };
    utils.filterFindElements = function(elems, selector) {
        elems = utils.makeArray(elems);
        var ffElems = [];
        elems.forEach(function(elem) {
            if (!(elem instanceof HTMLElement)) {
                return;
            }
            if (!selector) {
                ffElems.push(elem);
                return;
            }
            if (matchesSelector(elem, selector)) {
                ffElems.push(elem);
            }
            var childElems = elem.querySelectorAll(selector);
            for (var i = 0; i < childElems.length; i++) {
                ffElems.push(childElems[i]);
            }
        });
        return ffElems;
    };
    utils.debounceMethod = function(_class, methodName, threshold) {
        threshold = threshold || 100;
        var method = _class.prototype[methodName];
        var timeoutName = methodName + 'Timeout';
        _class.prototype[methodName] = function() {
            var timeout = this[timeoutName];
            clearTimeout(timeout);
            var args = arguments;
            var _this = this;
            this[timeoutName] = setTimeout(function() {
                method.apply(_this, args);
                delete _this[timeoutName];
            }, threshold);
        };
    };
    utils.docReady = function(callback) {
        var readyState = document.readyState;
        if (readyState == 'complete' || readyState == 'interactive') {
            setTimeout(callback);
        } else {
            document.addEventListener('DOMContentLoaded', callback);
        }
    };
    utils.toDashed = function(str) {
        return str.replace(/(.)([A-Z])/g, function(match, $1, $2) {
            return $1 + '-' + $2;
        }).toLowerCase();
    };
    var console = window.console;
    utils.htmlInit = function(WidgetClass, namespace) {
        utils.docReady(function() {
            var dashedNamespace = utils.toDashed(namespace);
            var dataAttr = 'data-' + dashedNamespace;
            var dataAttrElems = document.querySelectorAll('[' + dataAttr + ']');
            var jsDashElems = document.querySelectorAll('.js-' + dashedNamespace);
            var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
            var dataOptionsAttr = dataAttr + '-options';
            var jQuery = window.jQuery;
            elems.forEach(function(elem) {
                var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
                var options;
                try {
                    options = attr && JSON.parse(attr);
                } catch (error) {
                    if (console) {
                        console.error('Error parsing ' + dataAttr + ' on ' + elem.className +
                            ': ' + error);
                    }
                    return;
                }
                var instance = new WidgetClass(elem, options);
                if (jQuery) {
                    jQuery.data(elem, namespace, instance);
                }
            });
        });
    };
    return utils;
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('outlayer/item', ['ev-emitter/ev-emitter', 'get-size/get-size'], factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('ev-emitter'), require('get-size'));
    } else {
        window.Outlayer = {};
        window.Outlayer.Item = factory(window.EvEmitter, window.getSize);
    }
}(window, function factory(EvEmitter, getSize) {
    'use strict';

    function isEmptyObj(obj) {
        for (var prop in obj) {
            return false;
        }
        prop = null;
        return true;
    }
    var docElemStyle = document.documentElement.style;
    var transitionProperty = typeof docElemStyle.transition == 'string' ? 'transition' : 'WebkitTransition';
    var transformProperty = typeof docElemStyle.transform == 'string' ? 'transform' : 'WebkitTransform';
    var transitionEndEvent = {
        WebkitTransition: 'webkitTransitionEnd',
        transition: 'transitionend'
    }[transitionProperty];
    var vendorProperties = {
        transform: transformProperty,
        transition: transitionProperty,
        transitionDuration: transitionProperty + 'Duration',
        transitionProperty: transitionProperty + 'Property',
        transitionDelay: transitionProperty + 'Delay'
    };

    function Item(element, layout) {
        if (!element) {
            return;
        }
        this.element = element;
        this.layout = layout;
        this.position = {
            x: 0,
            y: 0
        };
        this._create();
    }
    var proto = Item.prototype = Object.create(EvEmitter.prototype);
    proto.constructor = Item;
    proto._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        };
        this.css({
            position: 'absolute'
        });
    };
    proto.handleEvent = function(event) {
        var method = 'on' + event.type;
        if (this[method]) {
            this[method](event);
        }
    };
    proto.getSize = function() {
        this.size = getSize(this.element);
    };
    proto.css = function(style) {
        var elemStyle = this.element.style;
        for (var prop in style) {
            var supportedProp = vendorProperties[prop] || prop;
            elemStyle[supportedProp] = style[prop];
        }
    };
    proto.getPosition = function() {
        var style = getComputedStyle(this.element);
        var isOriginLeft = this.layout._getOption('originLeft');
        var isOriginTop = this.layout._getOption('originTop');
        var xValue = style[isOriginLeft ? 'left' : 'right'];
        var yValue = style[isOriginTop ? 'top' : 'bottom'];
        var x = parseFloat(xValue);
        var y = parseFloat(yValue);
        var layoutSize = this.layout.size;
        if (xValue.indexOf('%') != -1) {
            x = (x / 100) * layoutSize.width;
        }
        if (yValue.indexOf('%') != -1) {
            y = (y / 100) * layoutSize.height;
        }
        x = isNaN(x) ? 0 : x;
        y = isNaN(y) ? 0 : y;
        x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
        y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
        this.position.x = x;
        this.position.y = y;
    };
    proto.layoutPosition = function() {
        var layoutSize = this.layout.size;
        var style = {};
        var isOriginLeft = this.layout._getOption('originLeft');
        var isOriginTop = this.layout._getOption('originTop');
        var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
        var xProperty = isOriginLeft ? 'left' : 'right';
        var xResetProperty = isOriginLeft ? 'right' : 'left';
        var x = this.position.x + layoutSize[xPadding];
        style[xProperty] = this.getXValue(x);
        style[xResetProperty] = '';
        var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
        var yProperty = isOriginTop ? 'top' : 'bottom';
        var yResetProperty = isOriginTop ? 'bottom' : 'top';
        var y = this.position.y + layoutSize[yPadding];
        style[yProperty] = this.getYValue(y);
        style[yResetProperty] = '';
        this.css(style);
        this.emitEvent('layout', [this]);
    };
    proto.getXValue = function(x) {
        var isHorizontal = this.layout._getOption('horizontal');
        return this.layout.options.percentPosition && !isHorizontal ? ((x / this.layout.size.width) * 100) + '%' : x + 'px';
    };
    proto.getYValue = function(y) {
        var isHorizontal = this.layout._getOption('horizontal');
        return this.layout.options.percentPosition && isHorizontal ? ((y / this.layout.size.height) * 100) + '%' : y + 'px';
    };
    proto._transitionTo = function(x, y) {
        this.getPosition();
        var curX = this.position.x;
        var curY = this.position.y;
        var didNotMove = x == this.position.x && y == this.position.y;
        this.setPosition(x, y);
        if (didNotMove && !this.isTransitioning) {
            this.layoutPosition();
            return;
        }
        var transX = x - curX;
        var transY = y - curY;
        var transitionStyle = {};
        transitionStyle.transform = this.getTranslate(transX, transY);
        this.transition({
            to: transitionStyle,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: true
        });
    };
    proto.getTranslate = function(x, y) {
        var isOriginLeft = this.layout._getOption('originLeft');
        var isOriginTop = this.layout._getOption('originTop');
        x = isOriginLeft ? x : -x;
        y = isOriginTop ? y : -y;
        return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
    };
    proto.goTo = function(x, y) {
        this.setPosition(x, y);
        this.layoutPosition();
    };
    proto.moveTo = proto._transitionTo;
    proto.setPosition = function(x, y) {
        this.position.x = parseFloat(x);
        this.position.y = parseFloat(y);
    };
    proto._nonTransition = function(args) {
        this.css(args.to);
        if (args.isCleaning) {
            this._removeStyles(args.to);
        }
        for (var prop in args.onTransitionEnd) {
            args.onTransitionEnd[prop].call(this);
        }
    };
    proto.transition = function(args) {
        if (!parseFloat(this.layout.options.transitionDuration)) {
            this._nonTransition(args);
            return;
        }
        var _transition = this._transn;
        for (var prop in args.onTransitionEnd) {
            _transition.onEnd[prop] = args.onTransitionEnd[prop];
        }
        for (prop in args.to) {
            _transition.ingProperties[prop] = true;
            if (args.isCleaning) {
                _transition.clean[prop] = true;
            }
        }
        if (args.from) {
            this.css(args.from);
            var h = this.element.offsetHeight;
            h = null;
        }
        this.enableTransition(args.to);
        this.css(args.to);
        this.isTransitioning = true;
    };

    function toDashedAll(str) {
        return str.replace(/([A-Z])/g, function($1) {
            return '-' + $1.toLowerCase();
        });
    }
    var transitionProps = 'opacity,' + toDashedAll(transformProperty);
    proto.enableTransition = function() {
        if (this.isTransitioning) {
            return;
        }
        var duration = this.layout.options.transitionDuration;
        duration = typeof duration == 'number' ? duration + 'ms' : duration;
        this.css({
            transitionProperty: transitionProps,
            transitionDuration: duration,
            transitionDelay: this.staggerDelay || 0
        });
        this.element.addEventListener(transitionEndEvent, this, false);
    };
    proto.onwebkitTransitionEnd = function(event) {
        this.ontransitionend(event);
    };
    proto.onotransitionend = function(event) {
        this.ontransitionend(event);
    };
    var dashedVendorProperties = {
        '-webkit-transform': 'transform'
    };
    proto.ontransitionend = function(event) {
        if (event.target !== this.element) {
            return;
        }
        var _transition = this._transn;
        var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;
        delete _transition.ingProperties[propertyName];
        if (isEmptyObj(_transition.ingProperties)) {
            this.disableTransition();
        }
        if (propertyName in _transition.clean) {
            this.element.style[event.propertyName] = '';
            delete _transition.clean[propertyName];
        }
        if (propertyName in _transition.onEnd) {
            var onTransitionEnd = _transition.onEnd[propertyName];
            onTransitionEnd.call(this);
            delete _transition.onEnd[propertyName];
        }
        this.emitEvent('transitionEnd', [this]);
    };
    proto.disableTransition = function() {
        this.removeTransitionStyles();
        this.element.removeEventListener(transitionEndEvent, this, false);
        this.isTransitioning = false;
    };
    proto._removeStyles = function(style) {
        var cleanStyle = {};
        for (var prop in style) {
            cleanStyle[prop] = '';
        }
        this.css(cleanStyle);
    };
    var cleanTransitionStyle = {
        transitionProperty: '',
        transitionDuration: '',
        transitionDelay: ''
    };
    proto.removeTransitionStyles = function() {
        this.css(cleanTransitionStyle);
    };
    proto.stagger = function(delay) {
        delay = isNaN(delay) ? 0 : delay;
        this.staggerDelay = delay + 'ms';
    };
    proto.removeElem = function() {
        this.element.parentNode.removeChild(this.element);
        this.css({
            display: ''
        });
        this.emitEvent('remove', [this]);
    };
    proto.remove = function() {
        if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
            this.removeElem();
            return;
        }
        this.once('transitionEnd', function() {
            this.removeElem();
        });
        this.hide();
    };
    proto.reveal = function() {
        delete this.isHidden;
        this.css({
            display: ''
        });
        var options = this.layout.options;
        var onTransitionEnd = {};
        var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
        onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;
        this.transition({
            from: options.hiddenStyle,
            to: options.visibleStyle,
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
        });
    };
    proto.onRevealTransitionEnd = function() {
        if (!this.isHidden) {
            this.emitEvent('reveal');
        }
    };
    proto.getHideRevealTransitionEndProperty = function(styleProperty) {
        var optionStyle = this.layout.options[styleProperty];
        if (optionStyle.opacity) {
            return 'opacity';
        }
        for (var prop in optionStyle) {
            return prop;
        }
    };
    proto.hide = function() {
        this.isHidden = true;
        this.css({
            display: ''
        });
        var options = this.layout.options;
        var onTransitionEnd = {};
        var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
        onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;
        this.transition({
            from: options.visibleStyle,
            to: options.hiddenStyle,
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
        });
    };
    proto.onHideTransitionEnd = function() {
        if (this.isHidden) {
            this.css({
                display: 'none'
            });
            this.emitEvent('hide');
        }
    };
    proto.destroy = function() {
        this.css({
            position: '',
            left: '',
            right: '',
            top: '',
            bottom: '',
            transition: '',
            transform: ''
        });
    };
    return Item;
}));
/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */
(function(window, factory) {
    'use strict';
    if (typeof define == 'function' && define.amd) {
        define('outlayer/outlayer', ['ev-emitter/ev-emitter', 'get-size/get-size', 'fizzy-ui-utils/utils', './item'], function(EvEmitter, getSize, utils, Item) {
            return factory(window, EvEmitter, getSize, utils, Item);
        });
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(window, require('ev-emitter'), require('get-size'), require('fizzy-ui-utils'), require('./item'));
    } else {
        window.Outlayer = factory(window, window.EvEmitter, window.getSize, window.fizzyUIUtils, window.Outlayer.Item);
    }
}(window, function factory(window, EvEmitter, getSize, utils, Item) {
    'use strict';
    var console = window.console;
    var jQuery = window.jQuery;
    var noop = function() {};
    var GUID = 0;
    var instances = {};

    function Outlayer(element, options) {
        var queryElement = utils.getQueryElement(element);
        if (!queryElement) {
            if (console) {
                console.error('Bad element for ' + this.constructor.namespace +
                    ': ' + (queryElement || element));
            }
            return;
        }
        this.element = queryElement;
        if (jQuery) {
            this.$element = jQuery(this.element);
        }
        this.options = utils.extend({}, this.constructor.defaults);
        this.option(options);
        var id = ++GUID;
        this.element.outlayerGUID = id;
        instances[id] = this;
        this._create();
        var isInitLayout = this._getOption('initLayout');
        if (isInitLayout) {
            this.layout();
        }
    }
    Outlayer.namespace = 'outlayer';
    Outlayer.Item = Item;
    Outlayer.defaults = {
        containerStyle: {
            position: 'relative'
        },
        initLayout: true,
        originLeft: true,
        originTop: true,
        resize: true,
        resizeContainer: true,
        transitionDuration: '0.4s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        }
    };
    var proto = Outlayer.prototype;
    utils.extend(proto, EvEmitter.prototype);
    proto.option = function(opts) {
        utils.extend(this.options, opts);
    };
    proto._getOption = function(option) {
        var oldOption = this.constructor.compatOptions[option];
        return oldOption && this.options[oldOption] !== undefined ? this.options[oldOption] : this.options[option];
    };
    Outlayer.compatOptions = {
        initLayout: 'isInitLayout',
        horizontal: 'isHorizontal',
        layoutInstant: 'isLayoutInstant',
        originLeft: 'isOriginLeft',
        originTop: 'isOriginTop',
        resize: 'isResizeBound',
        resizeContainer: 'isResizingContainer'
    };
    proto._create = function() {
        this.reloadItems();
        this.stamps = [];
        this.stamp(this.options.stamp);
        utils.extend(this.element.style, this.options.containerStyle);
        var canBindResize = this._getOption('resize');
        if (canBindResize) {
            this.bindResize();
        }
    };
    proto.reloadItems = function() {
        this.items = this._itemize(this.element.children);
    };
    proto._itemize = function(elems) {
        var itemElems = this._filterFindItemElements(elems);
        var Item = this.constructor.Item;
        var items = [];
        for (var i = 0; i < itemElems.length; i++) {
            var elem = itemElems[i];
            var item = new Item(elem, this);
            items.push(item);
        }
        return items;
    };
    proto._filterFindItemElements = function(elems) {
        return utils.filterFindElements(elems, this.options.itemSelector);
    };
    proto.getItemElements = function() {
        return this.items.map(function(item) {
            return item.element;
        });
    };
    proto.layout = function() {
        this._resetLayout();
        this._manageStamps();
        var layoutInstant = this._getOption('layoutInstant');
        var isInstant = layoutInstant !== undefined ? layoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, isInstant);
        this._isLayoutInited = true;
    };
    proto._init = proto.layout;
    proto._resetLayout = function() {
        this.getSize();
    };
    proto.getSize = function() {
        this.size = getSize(this.element);
    };
    proto._getMeasurement = function(measurement, size) {
        var option = this.options[measurement];
        var elem;
        if (!option) {
            this[measurement] = 0;
        } else {
            if (typeof option == 'string') {
                elem = this.element.querySelector(option);
            } else if (option instanceof HTMLElement) {
                elem = option;
            }
            this[measurement] = elem ? getSize(elem)[size] : option;
        }
    };
    proto.layoutItems = function(items, isInstant) {
        items = this._getItemsForLayout(items);
        this._layoutItems(items, isInstant);
        this._postLayout();
    };
    proto._getItemsForLayout = function(items) {
        return items.filter(function(item) {
            return !item.isIgnored;
        });
    };
    proto._layoutItems = function(items, isInstant) {
        this._emitCompleteOnItems('layout', items);
        if (!items || !items.length) {
            return;
        }
        var queue = [];
        items.forEach(function(item) {
            var position = this._getItemLayoutPosition(item);
            position.item = item;
            position.isInstant = isInstant || item.isLayoutInstant;
            queue.push(position);
        }, this);
        this._processLayoutQueue(queue);
    };
    proto._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        };
    };
    proto._processLayoutQueue = function(queue) {
        this.updateStagger();
        queue.forEach(function(obj, i) {
            this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
        }, this);
    };
    proto.updateStagger = function() {
        var stagger = this.options.stagger;
        if (stagger === null || stagger === undefined) {
            this.stagger = 0;
            return;
        }
        this.stagger = getMilliseconds(stagger);
        return this.stagger;
    };
    proto._positionItem = function(item, x, y, isInstant, i) {
        if (isInstant) {
            item.goTo(x, y);
        } else {
            item.stagger(i * this.stagger);
            item.moveTo(x, y);
        }
    };
    proto._postLayout = function() {
        this.resizeContainer();
    };
    proto.resizeContainer = function() {
        var isResizingContainer = this._getOption('resizeContainer');
        if (!isResizingContainer) {
            return;
        }
        var size = this._getContainerSize();
        if (size) {
            this._setContainerMeasure(size.width, true);
            this._setContainerMeasure(size.height, false);
        }
    };
    proto._getContainerSize = noop;
    proto._setContainerMeasure = function(measure, isWidth) {
        if (measure === undefined) {
            return;
        }
        var elemSize = this.size;
        if (elemSize.isBorderBox) {
            measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
                elemSize.borderLeftWidth + elemSize.borderRightWidth : elemSize.paddingBottom + elemSize.paddingTop +
                elemSize.borderTopWidth + elemSize.borderBottomWidth;
        }
        measure = Math.max(measure, 0);
        this.element.style[isWidth ? 'width' : 'height'] = measure + 'px';
    };
    proto._emitCompleteOnItems = function(eventName, items) {
        var _this = this;

        function onComplete() {
            _this.dispatchEvent(eventName + 'Complete', null, [items]);
        }
        var count = items.length;
        if (!items || !count) {
            onComplete();
            return;
        }
        var doneCount = 0;

        function tick() {
            doneCount++;
            if (doneCount == count) {
                onComplete();
            }
        }
        items.forEach(function(item) {
            item.once(eventName, tick);
        });
    };
    proto.dispatchEvent = function(type, event, args) {
        var emitArgs = event ? [event].concat(args) : args;
        this.emitEvent(type, emitArgs);
        if (jQuery) {
            this.$element = this.$element || jQuery(this.element);
            if (event) {
                var $event = jQuery.Event(event);
                $event.type = type;
                this.$element.trigger($event, args);
            } else {
                this.$element.trigger(type, args);
            }
        }
    };
    proto.ignore = function(elem) {
        var item = this.getItem(elem);
        if (item) {
            item.isIgnored = true;
        }
    };
    proto.unignore = function(elem) {
        var item = this.getItem(elem);
        if (item) {
            delete item.isIgnored;
        }
    };
    proto.stamp = function(elems) {
        elems = this._find(elems);
        if (!elems) {
            return;
        }
        this.stamps = this.stamps.concat(elems);
        elems.forEach(this.ignore, this);
    };
    proto.unstamp = function(elems) {
        elems = this._find(elems);
        if (!elems) {
            return;
        }
        elems.forEach(function(elem) {
            utils.removeFrom(this.stamps, elem);
            this.unignore(elem);
        }, this);
    };
    proto._find = function(elems) {
        if (!elems) {
            return;
        }
        if (typeof elems == 'string') {
            elems = this.element.querySelectorAll(elems);
        }
        elems = utils.makeArray(elems);
        return elems;
    };
    proto._manageStamps = function() {
        if (!this.stamps || !this.stamps.length) {
            return;
        }
        this._getBoundingRect();
        this.stamps.forEach(this._manageStamp, this);
    };
    proto._getBoundingRect = function() {
        var boundingRect = this.element.getBoundingClientRect();
        var size = this.size;
        this._boundingRect = {
            left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
            top: boundingRect.top + size.paddingTop + size.borderTopWidth,
            right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
            bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
        };
    };
    proto._manageStamp = noop;
    proto._getElementOffset = function(elem) {
        var boundingRect = elem.getBoundingClientRect();
        var thisRect = this._boundingRect;
        var size = getSize(elem);
        var offset = {
            left: boundingRect.left - thisRect.left - size.marginLeft,
            top: boundingRect.top - thisRect.top - size.marginTop,
            right: thisRect.right - boundingRect.right - size.marginRight,
            bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
        };
        return offset;
    };
    proto.handleEvent = utils.handleEvent;
    proto.bindResize = function() {
        window.addEventListener('resize', this);
        this.isResizeBound = true;
    };
    proto.unbindResize = function() {
        window.removeEventListener('resize', this);
        this.isResizeBound = false;
    };
    proto.onresize = function() {
        this.resize();
    };
    utils.debounceMethod(Outlayer, 'onresize', 100);
    proto.resize = function() {
        if (!this.isResizeBound || !this.needsResizeLayout()) {
            return;
        }
        this.layout();
    };
    proto.needsResizeLayout = function() {
        var size = getSize(this.element);
        var hasSizes = this.size && size;
        return hasSizes && size.innerWidth !== this.size.innerWidth;
    };
    proto.addItems = function(elems) {
        var items = this._itemize(elems);
        if (items.length) {
            this.items = this.items.concat(items);
        }
        return items;
    };
    proto.appended = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) {
            return;
        }
        this.layoutItems(items, true);
        this.reveal(items);
    };
    proto.prepended = function(elems) {
        var items = this._itemize(elems);
        if (!items.length) {
            return;
        }
        var previousItems = this.items.slice(0);
        this.items = items.concat(previousItems);
        this._resetLayout();
        this._manageStamps();
        this.layoutItems(items, true);
        this.reveal(items);
        this.layoutItems(previousItems);
    };
    proto.reveal = function(items) {
        this._emitCompleteOnItems('reveal', items);
        if (!items || !items.length) {
            return;
        }
        var stagger = this.updateStagger();
        items.forEach(function(item, i) {
            item.stagger(i * stagger);
            item.reveal();
        });
    };
    proto.hide = function(items) {
        this._emitCompleteOnItems('hide', items);
        if (!items || !items.length) {
            return;
        }
        var stagger = this.updateStagger();
        items.forEach(function(item, i) {
            item.stagger(i * stagger);
            item.hide();
        });
    };
    proto.revealItemElements = function(elems) {
        var items = this.getItems(elems);
        this.reveal(items);
    };
    proto.hideItemElements = function(elems) {
        var items = this.getItems(elems);
        this.hide(items);
    };
    proto.getItem = function(elem) {
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (item.element == elem) {
                return item;
            }
        }
    };
    proto.getItems = function(elems) {
        elems = utils.makeArray(elems);
        var items = [];
        elems.forEach(function(elem) {
            var item = this.getItem(elem);
            if (item) {
                items.push(item);
            }
        }, this);
        return items;
    };
    proto.remove = function(elems) {
        var removeItems = this.getItems(elems);
        this._emitCompleteOnItems('remove', removeItems);
        if (!removeItems || !removeItems.length) {
            return;
        }
        removeItems.forEach(function(item) {
            item.remove();
            utils.removeFrom(this.items, item);
        }, this);
    };
    proto.destroy = function() {
        var style = this.element.style;
        style.height = '';
        style.position = '';
        style.width = '';
        this.items.forEach(function(item) {
            item.destroy();
        });
        this.unbindResize();
        var id = this.element.outlayerGUID;
        delete instances[id];
        delete this.element.outlayerGUID;
        if (jQuery) {
            jQuery.removeData(this.element, this.constructor.namespace);
        }
    };
    Outlayer.data = function(elem) {
        elem = utils.getQueryElement(elem);
        var id = elem && elem.outlayerGUID;
        return id && instances[id];
    };
    Outlayer.create = function(namespace, options) {
        var Layout = subclass(Outlayer);
        Layout.defaults = utils.extend({}, Outlayer.defaults);
        utils.extend(Layout.defaults, options);
        Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);
        Layout.namespace = namespace;
        Layout.data = Outlayer.data;
        Layout.Item = subclass(Item);
        utils.htmlInit(Layout, namespace);
        if (jQuery && jQuery.bridget) {
            jQuery.bridget(namespace, Layout);
        }
        return Layout;
    };

    function subclass(Parent) {
        function SubClass() {
            Parent.apply(this, arguments);
        }
        SubClass.prototype = Object.create(Parent.prototype);
        SubClass.prototype.constructor = SubClass;
        return SubClass;
    }
    var msUnits = {
        ms: 1,
        s: 1000
    };

    function getMilliseconds(time) {
        if (typeof time == 'number') {
            return time;
        }
        var matches = time.match(/(^\d*\.?\d*)(\w*)/);
        var num = matches && matches[1];
        var unit = matches && matches[2];
        if (!num.length) {
            return 0;
        }
        num = parseFloat(num);
        var mult = msUnits[unit] || 1;
        return num * mult;
    }
    Outlayer.Item = Item;
    return Outlayer;
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('isotope-layout/js/item', ['outlayer/outlayer'], factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('outlayer'));
    } else {
        window.Isotope = window.Isotope || {};
        window.Isotope.Item = factory(window.Outlayer);
    }
}(window, function factory(Outlayer) {
    'use strict';

    function Item() {
        Outlayer.Item.apply(this, arguments);
    }
    var proto = Item.prototype = Object.create(Outlayer.Item.prototype);
    var _create = proto._create;
    proto._create = function() {
        this.id = this.layout.itemGUID++;
        _create.call(this);
        this.sortData = {};
    };
    proto.updateSortData = function() {
        if (this.isIgnored) {
            return;
        }
        this.sortData.id = this.id;
        this.sortData['original-order'] = this.id;
        this.sortData.random = Math.random();
        var getSortData = this.layout.options.getSortData;
        var sorters = this.layout._sorters;
        for (var key in getSortData) {
            var sorter = sorters[key];
            this.sortData[key] = sorter(this.element, this);
        }
    };
    var _destroy = proto.destroy;
    proto.destroy = function() {
        _destroy.apply(this, arguments);
        this.css({
            display: ''
        });
    };
    return Item;
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('isotope-layout/js/layout-mode', ['get-size/get-size', 'outlayer/outlayer'], factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('get-size'), require('outlayer'));
    } else {
        window.Isotope = window.Isotope || {};
        window.Isotope.LayoutMode = factory(window.getSize, window.Outlayer);
    }
}(window, function factory(getSize, Outlayer) {
    'use strict';

    function LayoutMode(isotope) {
        this.isotope = isotope;
        if (isotope) {
            this.options = isotope.options[this.namespace];
            this.element = isotope.element;
            this.items = isotope.filteredItems;
            this.size = isotope.size;
        }
    }
    var proto = LayoutMode.prototype;
    var facadeMethods = ['_resetLayout', '_getItemLayoutPosition', '_manageStamp', '_getContainerSize', '_getElementOffset', 'needsResizeLayout', '_getOption'];
    facadeMethods.forEach(function(methodName) {
        proto[methodName] = function() {
            return Outlayer.prototype[methodName].apply(this.isotope, arguments);
        };
    });
    proto.needsVerticalResizeLayout = function() {
        var size = getSize(this.isotope.element);
        var hasSizes = this.isotope.size && size;
        return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
    };
    proto._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments);
    };
    proto.getColumnWidth = function() {
        this.getSegmentSize('column', 'Width');
    };
    proto.getRowHeight = function() {
        this.getSegmentSize('row', 'Height');
    };
    proto.getSegmentSize = function(segment, size) {
        var segmentName = segment + size;
        var outerSize = 'outer' + size;
        this._getMeasurement(segmentName, outerSize);
        if (this[segmentName]) {
            return;
        }
        var firstItemSize = this.getFirstItemSize();
        this[segmentName] = firstItemSize && firstItemSize[outerSize] || this.isotope.size['inner' + size];
    };
    proto.getFirstItemSize = function() {
        var firstItem = this.isotope.filteredItems[0];
        return firstItem && firstItem.element && getSize(firstItem.element);
    };
    proto.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments);
    };
    proto.getSize = function() {
        this.isotope.getSize();
        this.size = this.isotope.size;
    };
    LayoutMode.modes = {};
    LayoutMode.create = function(namespace, options) {
        function Mode() {
            LayoutMode.apply(this, arguments);
        }
        Mode.prototype = Object.create(proto);
        Mode.prototype.constructor = Mode;
        if (options) {
            Mode.options = options;
        }
        Mode.prototype.namespace = namespace;
        LayoutMode.modes[namespace] = Mode;
        return Mode;
    };
    return LayoutMode;
}));
/*!
 * Masonry v4.2.1
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('masonry-layout/masonry', ['outlayer/outlayer', 'get-size/get-size'], factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('outlayer'), require('get-size'));
    } else {
        window.Masonry = factory(window.Outlayer, window.getSize);
    }
}(window, function factory(Outlayer, getSize) {
    var Masonry = Outlayer.create('masonry');
    Masonry.compatOptions.fitWidth = 'isFitWidth';
    var proto = Masonry.prototype;
    proto._resetLayout = function() {
        this.getSize();
        this._getMeasurement('columnWidth', 'outerWidth');
        this._getMeasurement('gutter', 'outerWidth');
        this.measureColumns();
        this.colYs = [];
        for (var i = 0; i < this.cols; i++) {
            this.colYs.push(0);
        }
        this.maxY = 0;
        this.horizontalColIndex = 0;
    };
    proto.measureColumns = function() {
        this.getContainerWidth();
        if (!this.columnWidth) {
            var firstItem = this.items[0];
            var firstItemElem = firstItem && firstItem.element;
            this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth || this.containerWidth;
        }
        var columnWidth = this.columnWidth += this.gutter;
        var containerWidth = this.containerWidth + this.gutter;
        var cols = containerWidth / columnWidth;
        var excess = columnWidth - containerWidth % columnWidth;
        var mathMethod = excess && excess < 1 ? 'round' : 'floor';
        cols = Math[mathMethod](cols);
        this.cols = Math.max(cols, 1);
    };
    proto.getContainerWidth = function() {
        var isFitWidth = this._getOption('fitWidth');
        var container = isFitWidth ? this.element.parentNode : this.element;
        var size = getSize(container);
        this.containerWidth = size && size.innerWidth;
    };
    proto._getItemLayoutPosition = function(item) {
        item.getSize();
        var remainder = item.size.outerWidth % this.columnWidth;
        var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
        var colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
        colSpan = Math.min(colSpan, this.cols);
        var colPosMethod = this.options.horizontalOrder ? '_getHorizontalColPosition' : '_getTopColPosition';
        var colPosition = this[colPosMethod](colSpan, item);
        var position = {
            x: this.columnWidth * colPosition.col,
            y: colPosition.y
        };
        var setHeight = colPosition.y + item.size.outerHeight;
        var setMax = colSpan + colPosition.col;
        for (var i = colPosition.col; i < setMax; i++) {
            this.colYs[i] = setHeight;
        }
        return position;
    };
    proto._getTopColPosition = function(colSpan) {
        var colGroup = this._getTopColGroup(colSpan);
        var minimumY = Math.min.apply(Math, colGroup);
        return {
            col: colGroup.indexOf(minimumY),
            y: minimumY,
        };
    };
    proto._getTopColGroup = function(colSpan) {
        if (colSpan < 2) {
            return this.colYs;
        }
        var colGroup = [];
        var groupCount = this.cols + 1 - colSpan;
        for (var i = 0; i < groupCount; i++) {
            colGroup[i] = this._getColGroupY(i, colSpan);
        }
        return colGroup;
    };
    proto._getColGroupY = function(col, colSpan) {
        if (colSpan < 2) {
            return this.colYs[col];
        }
        var groupColYs = this.colYs.slice(col, col + colSpan);
        return Math.max.apply(Math, groupColYs);
    };
    proto._getHorizontalColPosition = function(colSpan, item) {
        var col = this.horizontalColIndex % this.cols;
        var isOver = colSpan > 1 && col + colSpan > this.cols;
        col = isOver ? 0 : col;
        var hasSize = item.size.outerWidth && item.size.outerHeight;
        this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;
        return {
            col: col,
            y: this._getColGroupY(col, colSpan),
        };
    };
    proto._manageStamp = function(stamp) {
        var stampSize = getSize(stamp);
        var offset = this._getElementOffset(stamp);
        var isOriginLeft = this._getOption('originLeft');
        var firstX = isOriginLeft ? offset.left : offset.right;
        var lastX = firstX + stampSize.outerWidth;
        var firstCol = Math.floor(firstX / this.columnWidth);
        firstCol = Math.max(0, firstCol);
        var lastCol = Math.floor(lastX / this.columnWidth);
        lastCol -= lastX % this.columnWidth ? 0 : 1;
        lastCol = Math.min(this.cols - 1, lastCol);
        var isOriginTop = this._getOption('originTop');
        var stampMaxY = (isOriginTop ? offset.top : offset.bottom) +
            stampSize.outerHeight;
        for (var i = firstCol; i <= lastCol; i++) {
            this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
        }
    };
    proto._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var size = {
            height: this.maxY
        };
        if (this._getOption('fitWidth')) {
            size.width = this._getContainerFitWidth();
        }
        return size;
    };
    proto._getContainerFitWidth = function() {
        var unusedCols = 0;
        var i = this.cols;
        while (--i) {
            if (this.colYs[i] !== 0) {
                break;
            }
            unusedCols++;
        }
        return (this.cols - unusedCols) * this.columnWidth - this.gutter;
    };
    proto.needsResizeLayout = function() {
        var previousWidth = this.containerWidth;
        this.getContainerWidth();
        return previousWidth != this.containerWidth;
    };
    return Masonry;
}));
/*!
 * Masonry layout mode
 * sub-classes Masonry
 * https://masonry.desandro.com
 */
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('isotope-layout/js/layout-modes/masonry', ['../layout-mode', 'masonry-layout/masonry'], factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('../layout-mode'), require('masonry-layout'));
    } else {
        factory(window.Isotope.LayoutMode, window.Masonry);
    }
}(window, function factory(LayoutMode, Masonry) {
    'use strict';
    var MasonryMode = LayoutMode.create('masonry');
    var proto = MasonryMode.prototype;
    var keepModeMethods = {
        _getElementOffset: true,
        layout: true,
        _getMeasurement: true
    };
    for (var method in Masonry.prototype) {
        if (!keepModeMethods[method]) {
            proto[method] = Masonry.prototype[method];
        }
    }
    var measureColumns = proto.measureColumns;
    proto.measureColumns = function() {
        this.items = this.isotope.filteredItems;
        measureColumns.call(this);
    };
    var _getOption = proto._getOption;
    proto._getOption = function(option) {
        if (option == 'fitWidth') {
            return this.options.isFitWidth !== undefined ? this.options.isFitWidth : this.options.fitWidth;
        }
        return _getOption.apply(this.isotope, arguments);
    };
    return MasonryMode;
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('isotope-layout/js/layout-modes/fit-rows', ['../layout-mode'], factory);
    } else if (typeof exports == 'object') {
        module.exports = factory(require('../layout-mode'));
    } else {
        factory(window.Isotope.LayoutMode);
    }
}(window, function factory(LayoutMode) {
    'use strict';
    var FitRows = LayoutMode.create('fitRows');
    var proto = FitRows.prototype;
    proto._resetLayout = function() {
        this.x = 0;
        this.y = 0;
        this.maxY = 0;
        this._getMeasurement('gutter', 'outerWidth');
    };
    proto._getItemLayoutPosition = function(item) {
        item.getSize();
        var itemWidth = item.size.outerWidth + this.gutter;
        var containerWidth = this.isotope.size.innerWidth + this.gutter;
        if (this.x !== 0 && itemWidth + this.x > containerWidth) {
            this.x = 0;
            this.y = this.maxY;
        }
        var position = {
            x: this.x,
            y: this.y
        };
        this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight);
        this.x += itemWidth;
        return position;
    };
    proto._getContainerSize = function() {
        return {
            height: this.maxY
        };
    };
    return FitRows;
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('isotope-layout/js/layout-modes/vertical', ['../layout-mode'], factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('../layout-mode'));
    } else {
        factory(window.Isotope.LayoutMode);
    }
}(window, function factory(LayoutMode) {
    'use strict';
    var Vertical = LayoutMode.create('vertical', {
        horizontalAlignment: 0
    });
    var proto = Vertical.prototype;
    proto._resetLayout = function() {
        this.y = 0;
    };
    proto._getItemLayoutPosition = function(item) {
        item.getSize();
        var x = (this.isotope.size.innerWidth - item.size.outerWidth) * this.options.horizontalAlignment;
        var y = this.y;
        this.y += item.size.outerHeight;
        return {
            x: x,
            y: y
        };
    };
    proto._getContainerSize = function() {
        return {
            height: this.y
        };
    };
    return Vertical;
}));
/*!
 * Isotope v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define(['outlayer/outlayer', 'get-size/get-size', 'desandro-matches-selector/matches-selector', 'fizzy-ui-utils/utils', 'isotope-layout/js/item', 'isotope-layout/js/layout-mode', 'isotope-layout/js/layout-modes/masonry', 'isotope-layout/js/layout-modes/fit-rows', 'isotope-layout/js/layout-modes/vertical'], function(Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
            return factory(window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode);
        });
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(window, require('outlayer'), require('get-size'), require('desandro-matches-selector'), require('fizzy-ui-utils'), require('isotope-layout/js/item'), require('isotope-layout/js/layout-mode'), require('isotope-layout/js/layout-modes/masonry'), require('isotope-layout/js/layout-modes/fit-rows'), require('isotope-layout/js/layout-modes/vertical'));
    } else {
        window.Isotope = factory(window, window.Outlayer, window.getSize, window.matchesSelector, window.fizzyUIUtils, window.Isotope.Item, window.Isotope.LayoutMode);
    }
}(window, function factory(window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
    var jQuery = window.jQuery;
    var trim = String.prototype.trim ? function(str) {
        return str.trim();
    } : function(str) {
        return str.replace(/^\s+|\s+$/g, '');
    };
    var Isotope = Outlayer.create('isotope', {
        layoutMode: 'masonry',
        isJQueryFiltering: true,
        sortAscending: true
    });
    Isotope.Item = Item;
    Isotope.LayoutMode = LayoutMode;
    var proto = Isotope.prototype;
    proto._create = function() {
        this.itemGUID = 0;
        this._sorters = {};
        this._getSorters();
        Outlayer.prototype._create.call(this);
        this.modes = {};
        this.filteredItems = this.items;
        this.sortHistory = ['original-order'];
        for (var name in LayoutMode.modes) {
            this._initLayoutMode(name);
        }
    };
    proto.reloadItems = function() {
        this.itemGUID = 0;
        Outlayer.prototype.reloadItems.call(this);
    };
    proto._itemize = function() {
        var items = Outlayer.prototype._itemize.apply(this, arguments);
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.id = this.itemGUID++;
        }
        this._updateItemsSortData(items);
        return items;
    };
    proto._initLayoutMode = function(name) {
        var Mode = LayoutMode.modes[name];
        var initialOpts = this.options[name] || {};
        this.options[name] = Mode.options ? utils.extend(Mode.options, initialOpts) : initialOpts;
        this.modes[name] = new Mode(this);
    };
    proto.layout = function() {
        if (!this._isLayoutInited && this._getOption('initLayout')) {
            this.arrange();
            return;
        }
        this._layout();
    };
    proto._layout = function() {
        var isInstant = this._getIsInstant();
        this._resetLayout();
        this._manageStamps();
        this.layoutItems(this.filteredItems, isInstant);
        this._isLayoutInited = true;
    };
    proto.arrange = function(opts) {
        this.option(opts);
        this._getIsInstant();
        var filtered = this._filter(this.items);
        this.filteredItems = filtered.matches;
        this._bindArrangeComplete();
        if (this._isInstant) {
            this._noTransition(this._hideReveal, [filtered]);
        } else {
            this._hideReveal(filtered);
        }
        this._sort();
        this._layout();
    };
    proto._init = proto.arrange;
    proto._hideReveal = function(filtered) {
        this.reveal(filtered.needReveal);
        this.hide(filtered.needHide);
    };
    proto._getIsInstant = function() {
        var isLayoutInstant = this._getOption('layoutInstant');
        var isInstant = isLayoutInstant !== undefined ? isLayoutInstant : !this._isLayoutInited;
        this._isInstant = isInstant;
        return isInstant;
    };
    proto._bindArrangeComplete = function() {
        var isLayoutComplete, isHideComplete, isRevealComplete;
        var _this = this;

        function arrangeParallelCallback() {
            if (isLayoutComplete && isHideComplete && isRevealComplete) {
                _this.dispatchEvent('arrangeComplete', null, [_this.filteredItems]);
            }
        }
        this.once('layoutComplete', function() {
            isLayoutComplete = true;
            arrangeParallelCallback();
        });
        this.once('hideComplete', function() {
            isHideComplete = true;
            arrangeParallelCallback();
        });
        this.once('revealComplete', function() {
            isRevealComplete = true;
            arrangeParallelCallback();
        });
    };
    proto._filter = function(items) {
        var filter = this.options.filter;
        filter = filter || '*';
        var matches = [];
        var hiddenMatched = [];
        var visibleUnmatched = [];
        var test = this._getFilterTest(filter);
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.isIgnored) {
                continue;
            }
            var isMatched = test(item);
            if (isMatched) {
                matches.push(item);
            }
            if (isMatched && item.isHidden) {
                hiddenMatched.push(item);
            } else if (!isMatched && !item.isHidden) {
                visibleUnmatched.push(item);
            }
        }
        return {
            matches: matches,
            needReveal: hiddenMatched,
            needHide: visibleUnmatched
        };
    };
    proto._getFilterTest = function(filter) {
        if (jQuery && this.options.isJQueryFiltering) {
            return function(item) {
                return jQuery(item.element).is(filter);
            };
        }
        if (typeof filter == 'function') {
            return function(item) {
                return filter(item.element);
            };
        }
        return function(item) {
            return matchesSelector(item.element, filter);
        };
    };
    proto.updateSortData = function(elems) {
        var items;
        if (elems) {
            elems = utils.makeArray(elems);
            items = this.getItems(elems);
        } else {
            items = this.items;
        }
        this._getSorters();
        this._updateItemsSortData(items);
    };
    proto._getSorters = function() {
        var getSortData = this.options.getSortData;
        for (var key in getSortData) {
            var sorter = getSortData[key];
            this._sorters[key] = mungeSorter(sorter);
        }
    };
    proto._updateItemsSortData = function(items) {
        var len = items && items.length;
        for (var i = 0; len && i < len; i++) {
            var item = items[i];
            item.updateSortData();
        }
    };
    var mungeSorter = (function() {
        function mungeSorter(sorter) {
            if (typeof sorter != 'string') {
                return sorter;
            }
            var args = trim(sorter).split(' ');
            var query = args[0];
            var attrMatch = query.match(/^\[(.+)\]$/);
            var attr = attrMatch && attrMatch[1];
            var getValue = getValueGetter(attr, query);
            var parser = Isotope.sortDataParsers[args[1]];
            sorter = parser ? function(elem) {
                return elem && parser(getValue(elem));
            } : function(elem) {
                return elem && getValue(elem);
            };
            return sorter;
        }

        function getValueGetter(attr, query) {
            if (attr) {
                return function getAttribute(elem) {
                    return elem.getAttribute(attr);
                };
            }
            return function getChildText(elem) {
                var child = elem.querySelector(query);
                return child && child.textContent;
            };
        }
        return mungeSorter;
    })();
    Isotope.sortDataParsers = {
        'parseInt': function(val) {
            return parseInt(val, 10);
        },
        'parseFloat': function(val) {
            return parseFloat(val);
        }
    };
    proto._sort = function() {
        if (!this.options.sortBy) {
            return;
        }
        var sortBys = utils.makeArray(this.options.sortBy);
        if (!this._getIsSameSortBy(sortBys)) {
            this.sortHistory = sortBys.concat(this.sortHistory);
        }
        var itemSorter = getItemSorter(this.sortHistory, this.options.sortAscending);
        this.filteredItems.sort(itemSorter);
    };
    proto._getIsSameSortBy = function(sortBys) {
        for (var i = 0; i < sortBys.length; i++) {
            if (sortBys[i] != this.sortHistory[i]) {
                return false;
            }
        }
        return true;
    };

    function getItemSorter(sortBys, sortAsc) {
        return function sorter(itemA, itemB) {
            for (var i = 0; i < sortBys.length; i++) {
                var sortBy = sortBys[i];
                var a = itemA.sortData[sortBy];
                var b = itemB.sortData[sortBy];
                if (a > b || a < b) {
                    var isAscending = sortAsc[sortBy] !== undefined ? sortAsc[sortBy] : sortAsc;
                    var direction = isAscending ? 1 : -1;
                    return (a > b ? 1 : -1) * direction;
                }
            }
            return 0;
        };
    }
    proto._mode = function() {
        var layoutMode = this.options.layoutMode;
        var mode = this.modes[layoutMode];
        if (!mode) {
            throw new Error('No layout mode: ' + layoutMode);
        }
        mode.options = this.options[layoutMode];
        return mode;
    };
    proto._resetLayout = function() {
        Outlayer.prototype._resetLayout.call(this);
        this._mode()._resetLayout();
    };
    proto._getItemLayoutPosition = function(item) {
        return this._mode()._getItemLayoutPosition(item);
    };
    proto._manageStamp = function(stamp) {
        this._mode()._manageStamp(stamp);
    };
    proto._getContainerSize = function() {
        return this._mode()._getContainerSize();
    };
    proto.needsResizeLayout = function() {
        return this._mode().needsResizeLayout();
    };
    proto.appended = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) {
            return;
        }
        var filteredItems = this._filterRevealAdded(items);
        this.filteredItems = this.filteredItems.concat(filteredItems);
    };
    proto.prepended = function(elems) {
        var items = this._itemize(elems);
        if (!items.length) {
            return;
        }
        this._resetLayout();
        this._manageStamps();
        var filteredItems = this._filterRevealAdded(items);
        this.layoutItems(this.filteredItems);
        this.filteredItems = filteredItems.concat(this.filteredItems);
        this.items = items.concat(this.items);
    };
    proto._filterRevealAdded = function(items) {
        var filtered = this._filter(items);
        this.hide(filtered.needHide);
        this.reveal(filtered.matches);
        this.layoutItems(filtered.matches, true);
        return filtered.matches;
    };
    proto.insert = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) {
            return;
        }
        var i, item;
        var len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i];
            this.element.appendChild(item.element);
        }
        var filteredInsertItems = this._filter(items).matches;
        for (i = 0; i < len; i++) {
            items[i].isLayoutInstant = true;
        }
        this.arrange();
        for (i = 0; i < len; i++) {
            delete items[i].isLayoutInstant;
        }
        this.reveal(filteredInsertItems);
    };
    var _remove = proto.remove;
    proto.remove = function(elems) {
        elems = utils.makeArray(elems);
        var removeItems = this.getItems(elems);
        _remove.call(this, elems);
        var len = removeItems && removeItems.length;
        for (var i = 0; len && i < len; i++) {
            var item = removeItems[i];
            utils.removeFrom(this.filteredItems, item);
        }
    };
    proto.shuffle = function() {
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            item.sortData.random = Math.random();
        }
        this.options.sortBy = 'random';
        this._sort();
        this._layout();
    };
    proto._noTransition = function(fn, args) {
        var transitionDuration = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var returnValue = fn.apply(this, args);
        this.options.transitionDuration = transitionDuration;
        return returnValue;
    };
    proto.getFilteredItemElements = function() {
        return this.filteredItems.map(function(item) {
            return item.element;
        });
    };
    return Isotope;
}));
(function(e) {
    var y = !1,
        D = !1,
        J = 5E3,
        K = 2E3,
        x = 0,
        L = function() {
            var e = document.getElementsByTagName("script"),
                e = e[e.length - 1].src.split("?")[0];
            return 0 < e.split("/").length ? e.split("/").slice(0, -1).join("/") + "/" : ""
        }();
    Array.prototype.forEach || (Array.prototype.forEach = function(e, c) {
        for (var h = 0, l = this.length; h < l; ++h) e.call(c, this[h], h, this)
    });
    var v = window.requestAnimationFrame || !1,
        w = window.cancelAnimationFrame || !1;
    ["ms", "moz", "webkit", "o"].forEach(function(e) {
        v || (v = window[e + "RequestAnimationFrame"]);
        w || (w = window[e + "CancelAnimationFrame"] || window[e + "CancelRequestAnimationFrame"])
    });
    var z = window.MutationObserver || window.WebKitMutationObserver || !1,
        F = {
            zindex: "auto",
            cursoropacitymin: 0,
            cursoropacitymax: 1,
            cursorcolor: "#424242",
            cursorwidth: "5px",
            cursorborder: "1px solid #fff",
            cursorborderradius: "5px",
            scrollspeed: 60,
            mousescrollstep: 24,
            touchbehavior: !1,
            hwacceleration: !0,
            usetransition: !0,
            boxzoom: !1,
            dblclickzoom: !0,
            gesturezoom: !0,
            grabcursorenabled: !0,
            autohidemode: !0,
            background: "",
            iframeautoresize: !0,
            cursorminheight: 32,
            preservenativescrolling: !0,
            railoffset: !1,
            bouncescroll: !0,
            spacebarenabled: !0,
            railpadding: {
                top: 0,
                right: 0,
                left: 0,
                bottom: 0
            },
            disableoutline: !0,
            horizrailenabled: !0,
            railalign: "right",
            railvalign: "bottom",
            enabletranslate3d: !0,
            enablemousewheel: !0,
            enablekeyboard: !0,
            smoothscroll: !0,
            sensitiverail: !0,
            enablemouselockapi: !0,
            cursorfixedheight: !1,
            directionlockdeadzone: 6,
            hidecursordelay: 400,
            nativeparentscrolling: !0,
            enablescrollonselection: !0,
            overflowx: !0,
            overflowy: !0,
            cursordragspeed: 0.3,
            rtlmode: !1,
            cursordragontouch: !1
        },
        E = !1,
        M = function() {
            if (E) return E;
            var e = document.createElement("DIV"),
                c = {
                    haspointerlock: "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document
                };
            c.isopera = "opera" in window;
            c.isopera12 = c.isopera && "getUserMedia" in navigator;
            c.isie = "all" in document && "attachEvent" in e && !c.isopera;
            c.isieold = c.isie && !("msInterpolationMode" in e.style);
            c.isie7 = c.isie && !c.isieold && (!("documentMode" in document) || 7 == document.documentMode);
            c.isie8 = c.isie && "documentMode" in document && 8 == document.documentMode;
            c.isie9 = c.isie && "performance" in window && 9 <= document.documentMode;
            c.isie10 = c.isie && "performance" in window && 10 <= document.documentMode;
            c.isie9mobile = /iemobile.9/i.test(navigator.userAgent);
            c.isie9mobile && (c.isie9 = !1);
            c.isie7mobile = !c.isie9mobile && c.isie7 && /iemobile/i.test(navigator.userAgent);
            c.ismozilla = "MozAppearance" in e.style;
            c.iswebkit = "WebkitAppearance" in e.style;
            c.ischrome = "chrome" in window;
            c.ischrome22 = c.ischrome && c.haspointerlock;
            c.ischrome26 = c.ischrome && "transition" in
                e.style;
            c.cantouch = "ontouchstart" in document.documentElement || "ontouchstart" in window;
            c.hasmstouch = window.navigator.msPointerEnabled || !1;
            c.ismac = /^mac$/i.test(navigator.platform);
            c.isios = c.cantouch && /iphone|ipad|ipod/i.test(navigator.platform);
            c.isios4 = c.isios && !("seal" in Object);
            c.isandroid = /android/i.test(navigator.userAgent);
            c.trstyle = !1;
            c.hastransform = !1;
            c.hastranslate3d = !1;
            c.transitionstyle = !1;
            c.hastransition = !1;
            c.transitionend = !1;
            for (var h = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"], l = 0; l < h.length; l++)
                if ("undefined" != typeof e.style[h[l]]) {
                    c.trstyle = h[l];
                    break
                }
            c.hastransform = !1 != c.trstyle;
            c.hastransform && (e.style[c.trstyle] = "translate3d(1px,2px,3px)", c.hastranslate3d = /translate3d/.test(e.style[c.trstyle]));
            c.transitionstyle = !1;
            c.prefixstyle = "";
            c.transitionend = !1;
            for (var h = "transition webkitTransition MozTransition OTransition OTransition msTransition KhtmlTransition".split(" "), n = " -webkit- -moz- -o- -o -ms- -khtml-".split(" "), t = "transitionend webkitTransitionEnd transitionend otransitionend oTransitionEnd msTransitionEnd KhtmlTransitionEnd".split(" "), l = 0; l < h.length; l++)
                if (h[l] in e.style) {
                    c.transitionstyle = h[l];
                    c.prefixstyle = n[l];
                    c.transitionend = t[l];
                    break
                }
            c.ischrome26 && (c.prefixstyle = n[1]);
            c.hastransition = c.transitionstyle;
            a: {
                h = ["-moz-grab", "-webkit-grab", "grab"];
                if (c.ischrome && !c.ischrome22 || c.isie) h = [];
                for (l = 0; l < h.length; l++)
                    if (n = h[l], e.style.cursor = n, e.style.cursor == n) {
                        h = n;
                        break a
                    }
                h = "url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize"
            }
            c.cursorgrabvalue = h;
            c.hasmousecapture = "setCapture" in e;
            c.hasMutationObserver = !1 !== z;
            return E = c
        },
        N = function(k, c) {
            function h() {
                var d = b.win;
                if ("zIndex" in d) return d.zIndex();
                for (; 0 < d.length && 9 != d[0].nodeType;) {
                    var c = d.css("zIndex");
                    if (!isNaN(c) && 0 != c) return parseInt(c);
                    d = d.parent()
                }
                return !1
            }

            function l(d, c, g) {
                c = d.css(c);
                d = parseFloat(c);
                return isNaN(d) ? (d = u[c] || 0, g = 3 == d ? g ? b.win.outerHeight() - b.win.innerHeight() : b.win.outerWidth() - b.win.innerWidth() : 1, b.isie8 && d && (d += 1), g ? d : 0) : d
            }

            function n(d, c, g, e) {
                b._bind(d, c, function(b) {
                    b = b ? b : window.event;
                    var e = {
                        original: b,
                        target: b.target || b.srcElement,
                        type: "wheel",
                        deltaMode: "MozMousePixelScroll" == b.type ? 0 : 1,
                        deltaX: 0,
                        deltaZ: 0,
                        preventDefault: function() {
                            b.preventDefault ? b.preventDefault() : b.returnValue = !1;
                            return !1
                        },
                        stopImmediatePropagation: function() {
                            b.stopImmediatePropagation ? b.stopImmediatePropagation() : b.cancelBubble = !0
                        }
                    };
                    "mousewheel" == c ? (e.deltaY = -0.025 * b.wheelDelta, b.wheelDeltaX && (e.deltaX = -0.025 * b.wheelDeltaX)) : e.deltaY = b.detail;
                    return g.call(d, e)
                }, e)
            }

            function t(d, c, g) {
                var e, f;
                0 == d.deltaMode ? (e = -Math.floor(d.deltaX * (b.opt.mousescrollstep / 54)), f = -Math.floor(d.deltaY * (b.opt.mousescrollstep / 54))) : 1 == d.deltaMode && (e = -Math.floor(d.deltaX * b.opt.mousescrollstep), f = -Math.floor(d.deltaY * b.opt.mousescrollstep));
                c && (0 == e && f) && (e = f, f = 0);
                e && (b.scrollmom && b.scrollmom.stop(), b.lastdeltax += e, b.debounced("mousewheelx", function() {
                    var d = b.lastdeltax;
                    b.lastdeltax = 0;
                    b.rail.drag || b.doScrollLeftBy(d)
                }, 120));
                if (f) {
                    if (b.opt.nativeparentscrolling && g && !b.ispage && !b.zoomactive)
                        if (0 > f) {
                            if (b.getScrollTop() >= b.page.maxh) return !0
                        } else if (0 >= b.getScrollTop()) return !0;
                    b.scrollmom && b.scrollmom.stop();
                    b.lastdeltay += f;
                    b.debounced("mousewheely", function() {
                        var d = b.lastdeltay;
                        b.lastdeltay = 0;
                        b.rail.drag || b.doScrollBy(d)
                    }, 120)
                }
                d.stopImmediatePropagation();
                return d.preventDefault()
            }
            var b = this;
            this.version = "3.4.0";
            this.name = "nicescroll";
            this.me = c;
            this.opt = {
                doc: e("body"),
                win: !1
            };
            e.extend(this.opt, F);
            this.opt.snapbackspeed = 80;
            if (k)
                for (var q in b.opt) "undefined" != typeof k[q] && (b.opt[q] = k[q]);
            this.iddoc = (this.doc = b.opt.doc) && this.doc[0] ? this.doc[0].id || "" : "";
            this.ispage = /BODY|HTML/.test(b.opt.win ? b.opt.win[0].nodeName : this.doc[0].nodeName);
            this.haswrapper = !1 !== b.opt.win;
            this.win = b.opt.win || (this.ispage ? e(window) : this.doc);
            this.docscroll = this.ispage && !this.haswrapper ? e(window) : this.win;
            this.body = e("body");
            this.iframe = this.isfixed = this.viewport = !1;
            this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName;
            this.istextarea = "TEXTAREA" == this.win[0].nodeName;
            this.forcescreen = !1;
            this.canshowonmouseevent = "scroll" != b.opt.autohidemode;
            this.page = this.view = this.onzoomout = this.onzoomin = this.onscrollcancel = this.onscrollend = this.onscrollstart = this.onclick = this.ongesturezoom = this.onkeypress = this.onmousewheel = this.onmousemove = this.onmouseup = this.onmousedown = !1;
            this.scroll = {
                x: 0,
                y: 0
            };
            this.scrollratio = {
                x: 0,
                y: 0
            };
            this.cursorheight = 20;
            this.scrollvaluemax = 0;
            this.observerremover = this.observer = this.scrollmom = this.scrollrunning = this.checkrtlmode = !1;
            do this.id = "ascrail" + K++; while (document.getElementById(this.id));
            this.hasmousefocus = this.hasfocus = this.zoomactive = this.zoom = this.selectiondrag = this.cursorfreezed = this.cursor = this.rail = !1;
            this.visibility = !0;
            this.hidden = this.locked = !1;
            this.cursoractive = !0;
            this.overflowx = b.opt.overflowx;
            this.overflowy = b.opt.overflowy;
            this.nativescrollingarea = !1;
            this.checkarea = 0;
            this.events = [];
            this.saved = {};
            this.delaylist = {};
            this.synclist = {};
            this.lastdeltay = this.lastdeltax = 0;
            this.detected = M();
            var f = e.extend({}, this.detected);
            this.ishwscroll = (this.canhwscroll = f.hastransform && b.opt.hwacceleration) && b.haswrapper;
            this.istouchcapable = !1;
            f.cantouch && (f.ischrome && !f.isios && !f.isandroid) && (this.istouchcapable = !0, f.cantouch = !1);
            f.cantouch && (f.ismozilla && !f.isios) && (this.istouchcapable = !0, f.cantouch = !1);
            b.opt.enablemouselockapi || (f.hasmousecapture = !1, f.haspointerlock = !1);
            this.delayed = function(d, c, g, e) {
                var f = b.delaylist[d],
                    h = (new Date).getTime();
                if (!e && f && f.tt) return !1;
                f && f.tt && clearTimeout(f.tt);
                if (f && f.last + g > h && !f.tt) b.delaylist[d] = {
                    last: h + g,
                    tt: setTimeout(function() {
                        b.delaylist[d].tt = 0;
                        c.call()
                    }, g)
                };
                else if (!f || !f.tt) b.delaylist[d] = {
                    last: h,
                    tt: 0
                }, setTimeout(function() {
                    c.call()
                }, 0)
            };
            this.debounced = function(d, c, g) {
                var f = b.delaylist[d];
                (new Date).getTime();
                b.delaylist[d] = c;
                f || setTimeout(function() {
                    var c = b.delaylist[d];
                    b.delaylist[d] = !1;
                    c.call()
                }, g)
            };
            this.synched = function(d, c) {
                b.synclist[d] = c;
                (function() {
                    b.onsync || (v(function() {
                        b.onsync = !1;
                        for (d in b.synclist) {
                            var c = b.synclist[d];
                            c && c.call(b);
                            b.synclist[d] = !1
                        }
                    }), b.onsync = !0)
                })();
                return d
            };
            this.unsynched = function(d) {
                b.synclist[d] && (b.synclist[d] = !1)
            };
            this.css = function(d, c) {
                for (var g in c) b.saved.css.push([d, g, d.css(g)]), d.css(g, c[g])
            };
            this.scrollTop = function(d) {
                return "undefined" == typeof d ? b.getScrollTop() : b.setScrollTop(d)
            };
            this.scrollLeft = function(d) {
                return "undefined" == typeof d ? b.getScrollLeft() : b.setScrollLeft(d)
            };
            BezierClass = function(b, c, g, f, e, h, l) {
                this.st = b;
                this.ed = c;
                this.spd = g;
                this.p1 = f || 0;
                this.p2 = e || 1;
                this.p3 = h || 0;
                this.p4 = l || 1;
                this.ts = (new Date).getTime();
                this.df = this.ed - this.st
            };
            BezierClass.prototype = {
                B2: function(b) {
                    return 3 * b * b * (1 - b)
                },
                B3: function(b) {
                    return 3 * b * (1 - b) * (1 - b)
                },
                B4: function(b) {
                    return (1 - b) * (1 - b) * (1 - b)
                },
                getNow: function() {
                    var b = 1 - ((new Date).getTime() - this.ts) / this.spd,
                        c = this.B2(b) + this.B3(b) + this.B4(b);
                    return 0 > b ? this.ed : this.st + Math.round(this.df * c)
                },
                update: function(b, c) {
                    this.st = this.getNow();
                    this.ed = b;
                    this.spd = c;
                    this.ts = (new Date).getTime();
                    this.df = this.ed - this.st;
                    return this
                }
            };
            if (this.ishwscroll) {
                this.doc.translate = {
                    x: 0,
                    y: 0,
                    tx: "0px",
                    ty: "0px"
                };
                f.hastranslate3d && f.isios && this.doc.css("-webkit-backface-visibility", "hidden");
                var r = function() {
                    var d = b.doc.css(f.trstyle);
                    return d && "matrix" == d.substr(0, 6) ? d.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/) : !1
                };
                this.getScrollTop = function(d) {
                    if (!d) {
                        if (d = r()) return 16 == d.length ? -d[13] : -d[5];
                        if (b.timerscroll && b.timerscroll.bz) return b.timerscroll.bz.getNow()
                    }
                    return b.doc.translate.y
                };
                this.getScrollLeft = function(d) {
                    if (!d) {
                        if (d = r()) return 16 == d.length ? -d[12] : -d[4];
                        if (b.timerscroll && b.timerscroll.bh) return b.timerscroll.bh.getNow()
                    }
                    return b.doc.translate.x
                };
                this.notifyScrollEvent = document.createEvent ? function(b) {
                    var c = document.createEvent("UIEvents");
                    c.initUIEvent("scroll", !1, !0, window, 1);
                    b.dispatchEvent(c)
                } : document.fireEvent ? function(b) {
                    var c = document.createEventObject();
                    b.fireEvent("onscroll");
                    c.cancelBubble = !0
                } : function(b, c) {};
                f.hastranslate3d && b.opt.enabletranslate3d ? (this.setScrollTop = function(d, c) {
                    b.doc.translate.y = d;
                    b.doc.translate.ty = -1 * d + "px";
                    b.doc.css(f.trstyle, "translate3d(" + b.doc.translate.tx + "," + b.doc.translate.ty + ",0px)");
                    c || b.notifyScrollEvent(b.win[0])
                }, this.setScrollLeft = function(d, c) {
                    b.doc.translate.x = d;
                    b.doc.translate.tx = -1 * d + "px";
                    b.doc.css(f.trstyle, "translate3d(" + b.doc.translate.tx +
                        "," + b.doc.translate.ty + ",0px)");
                    c || b.notifyScrollEvent(b.win[0])
                }) : (this.setScrollTop = function(d, c) {
                    b.doc.translate.y = d;
                    b.doc.translate.ty = -1 * d + "px";
                    b.doc.css(f.trstyle, "translate(" + b.doc.translate.tx + "," + b.doc.translate.ty + ")");
                    c || b.notifyScrollEvent(b.win[0])
                }, this.setScrollLeft = function(d, c) {
                    b.doc.translate.x = d;
                    b.doc.translate.tx = -1 * d + "px";
                    b.doc.css(f.trstyle, "translate(" + b.doc.translate.tx + "," + b.doc.translate.ty + ")");
                    c || b.notifyScrollEvent(b.win[0])
                })
            } else this.getScrollTop = function() {
                return b.docscroll.scrollTop()
            }, this.setScrollTop = function(d) {
                return b.docscroll.scrollTop(d)
            }, this.getScrollLeft = function() {
                return b.docscroll.scrollLeft()
            }, this.setScrollLeft = function(d) {
                return b.docscroll.scrollLeft(d)
            };
            this.getTarget = function(b) {
                return !b ? !1 : b.target ? b.target : b.srcElement ? b.srcElement : !1
            };
            this.hasParent = function(b, c) {
                if (!b) return !1;
                for (var g = b.target || b.srcElement || b || !1; g && g.id != c;) g = g.parentNode || !1;
                return !1 !== g
            };
            var u = {
                thin: 1,
                medium: 3,
                thick: 5
            };
            this.getOffset = function() {
                if (b.isfixed) return {
                    top: parseFloat(b.win.css("top")),
                    left: parseFloat(b.win.css("left"))
                };
                if (!b.viewport) return b.win.offset();
                var d = b.win.offset(),
                    c = b.viewport.offset();
                return {
                    top: d.top - c.top + b.viewport.scrollTop(),
                    left: d.left - c.left + b.viewport.scrollLeft()
                }
            };
            this.updateScrollBar = function(d) {
                if (b.ishwscroll) b.rail.css({
                    height: b.win.innerHeight()
                }), b.railh && b.railh.css({
                    width: b.win.innerWidth()
                });
                else {
                    var c = b.getOffset(),
                        g = c.top,
                        f = c.left,
                        g = g + l(b.win, "border-top-width", !0);
                    b.win.outerWidth();
                    b.win.innerWidth();
                    var f = f + (b.rail.align ? b.win.outerWidth() -
                            l(b.win, "border-right-width") - b.rail.width : l(b.win, "border-left-width")),
                        e = b.opt.railoffset;
                    e && (e.top && (g += e.top), b.rail.align && e.left && (f += e.left));
                    b.locked || b.rail.css({
                        top: g,
                        left: f,
                        height: d ? d.h : b.win.innerHeight()
                    });
                    b.zoom && b.zoom.css({
                        top: g + 1,
                        left: 1 == b.rail.align ? f - 20 : f + b.rail.width + 4
                    });
                    b.railh && !b.locked && (g = c.top, f = c.left, d = b.railh.align ? g + l(b.win, "border-top-width", !0) + b.win.innerHeight() - b.railh.height : g + l(b.win, "border-top-width", !0), f += l(b.win, "border-left-width"), b.railh.css({
                        top: d,
                        left: f,
                        width: b.railh.width
                    }))
                }
            };
            this.doRailClick = function(d, c, g) {
                var f;
                b.locked || (b.cancelEvent(d), c ? (c = g ? b.doScrollLeft : b.doScrollTop, f = g ? (d.pageX - b.railh.offset().left - b.cursorwidth / 2) * b.scrollratio.x : (d.pageY - b.rail.offset().top - b.cursorheight / 2) * b.scrollratio.y, c(f)) : (c = g ? b.doScrollLeftBy : b.doScrollBy, f = g ? b.scroll.x : b.scroll.y, d = g ? d.pageX - b.railh.offset().left : d.pageY - b.rail.offset().top, g = g ? b.view.w : b.view.h, f >= d ? c(g) : c(-g)))
            };
            b.hasanimationframe = v;
            b.hascancelanimationframe = w;
            b.hasanimationframe ? b.hascancelanimationframe || (w = function() {
                b.cancelAnimationFrame = !0
            }) : (v = function(b) {
                return setTimeout(b, 15 - Math.floor(+new Date / 1E3) % 16)
            }, w = clearInterval);
            this.init = function() {
                b.saved.css = [];
                if (f.isie7mobile) return !0;
                f.hasmstouch && b.css(b.ispage ? e("html") : b.win, {
                    "-ms-touch-action": "none"
                });
                b.zindex = "auto";
                b.zindex = !b.ispage && "auto" == b.opt.zindex ? h() || "auto" : b.opt.zindex;
                !b.ispage && "auto" != b.zindex && b.zindex > x && (x = b.zindex);
                b.isie && (0 == b.zindex && "auto" == b.opt.zindex) && (b.zindex = "auto");
                if (!b.ispage || !f.cantouch && !f.isieold && !f.isie9mobile) {
                    var d = b.docscroll;
                    b.ispage && (d = b.haswrapper ? b.win : b.doc);
                    f.isie9mobile || b.css(d, {
                        "overflow-y": "hidden"
                    });
                    b.ispage && f.isie7 && ("BODY" == b.doc[0].nodeName ? b.css(e("html"), {
                        "overflow-y": "hidden"
                    }) : "HTML" == b.doc[0].nodeName && b.css(e("body"), {
                        "overflow-y": "hidden"
                    }));
                    f.isios && (!b.ispage && !b.haswrapper) && b.css(e("body"), {
                        "-webkit-overflow-scrolling": "touch"
                    });
                    var c = e(document.createElement("div"));
                    c.css({
                        position: "relative",
                        top: 0,
                        "float": "right",
                        width: b.opt.cursorwidth,
                        height: "0px",
                        "background-color": b.opt.cursorcolor,
                        border: b.opt.cursorborder,
                        "background-clip": "padding-box",
                        "-webkit-border-radius": b.opt.cursorborderradius,
                        "-moz-border-radius": b.opt.cursorborderradius,
                        "border-radius": b.opt.cursorborderradius
                    });
                    c.hborder = parseFloat(c.outerHeight() - c.innerHeight());
                    b.cursor = c;
                    var g = e(document.createElement("div"));
                    g.attr("id", b.id);
                    g.addClass("nicescroll-rails");
                    var l, k, n = ["left", "right"],
                        G;
                    for (G in n) k = n[G], (l = b.opt.railpadding[k]) ? g.css("padding-" + k, l + "px") : b.opt.railpadding[k] = 0;
                    g.append(c);
                    g.width = Math.max(parseFloat(b.opt.cursorwidth), c.outerWidth()) + b.opt.railpadding.left + b.opt.railpadding.right;
                    g.css({
                        width: g.width + "px",
                        zIndex: b.zindex,
                        background: b.opt.background,
                        cursor: "default"
                    });
                    g.visibility = !0;
                    g.scrollable = !0;
                    g.align = "left" == b.opt.railalign ? 0 : 1;
                    b.rail = g;
                    c = b.rail.drag = !1;
                    b.opt.boxzoom && (!b.ispage && !f.isieold) && (c = document.createElement("div"), b.bind(c, "click", b.doZoom), b.zoom = e(c), b.zoom.css({
                        cursor: "pointer",
                        "z-index": b.zindex,
                        backgroundImage: "url(" + L + "zoomico.png)",
                        height: 18,
                        width: 18,
                        backgroundPosition: "0px 0px"
                    }), b.opt.dblclickzoom && b.bind(b.win, "dblclick", b.doZoom), f.cantouch && b.opt.gesturezoom && (b.ongesturezoom = function(d) {
                        1.5 < d.scale && b.doZoomIn(d);
                        0.8 > d.scale && b.doZoomOut(d);
                        return b.cancelEvent(d)
                    }, b.bind(b.win, "gestureend", b.ongesturezoom)));
                    b.railh = !1;
                    if (b.opt.horizrailenabled) {
                        b.css(d, {
                            "overflow-x": "hidden"
                        });
                        c = e(document.createElement("div"));
                        c.css({
                            position: "relative",
                            top: 0,
                            height: b.opt.cursorwidth,
                            width: "0px",
                            "background-color": b.opt.cursorcolor,
                            border: b.opt.cursorborder,
                            "background-clip": "padding-box",
                            "-webkit-border-radius": b.opt.cursorborderradius,
                            "-moz-border-radius": b.opt.cursorborderradius,
                            "border-radius": b.opt.cursorborderradius
                        });
                        c.wborder = parseFloat(c.outerWidth() - c.innerWidth());
                        b.cursorh = c;
                        var m = e(document.createElement("div"));
                        m.attr("id", b.id + "-hr");
                        m.addClass("nicescroll-rails");
                        m.height = Math.max(parseFloat(b.opt.cursorwidth), c.outerHeight());
                        m.css({
                            height: m.height + "px",
                            zIndex: b.zindex,
                            background: b.opt.background
                        });
                        m.append(c);
                        m.visibility = !0;
                        m.scrollable = !0;
                        m.align = "top" == b.opt.railvalign ? 0 : 1;
                        b.railh = m;
                        b.railh.drag = !1
                    }
                    b.ispage ? (g.css({
                        position: "fixed",
                        top: "0px",
                        height: "100%"
                    }), g.align ? g.css({
                        right: "0px"
                    }) : g.css({
                        left: "0px"
                    }), b.body.append(g), b.railh && (m.css({
                        position: "fixed",
                        left: "0px",
                        width: "100%"
                    }), m.align ? m.css({
                        bottom: "0px"
                    }) : m.css({
                        top: "0px"
                    }), b.body.append(m))) : (b.ishwscroll ? ("static" == b.win.css("position") && b.css(b.win, {
                        position: "relative"
                    }), d = "HTML" == b.win[0].nodeName ? b.body : b.win, b.zoom && (b.zoom.css({
                        position: "absolute",
                        top: 1,
                        right: 0,
                        "margin-right": g.width + 4
                    }), d.append(b.zoom)), g.css({
                        position: "absolute",
                        top: 0
                    }), g.align ? g.css({
                        right: 0
                    }) : g.css({
                        left: 0
                    }), d.append(g), m && (m.css({
                        position: "absolute",
                        left: 0,
                        bottom: 0
                    }), m.align ? m.css({
                        bottom: 0
                    }) : m.css({
                        top: 0
                    }), d.append(m))) : (b.isfixed = "fixed" == b.win.css("position"), d = b.isfixed ? "fixed" : "absolute", b.isfixed || (b.viewport = b.getViewport(b.win[0])), b.viewport && (b.body = b.viewport, !1 == /relative|absolute/.test(b.viewport.css("position")) && b.css(b.viewport, {
                        position: "relative"
                    })), g.css({
                        position: d
                    }), b.zoom && b.zoom.css({
                        position: d
                    }), b.updateScrollBar(), b.body.append(g), b.zoom && b.body.append(b.zoom), b.railh && (m.css({
                        position: d
                    }), b.body.append(m))), f.isios && b.css(b.win, {
                        "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                        "-webkit-touch-callout": "none"
                    }), f.isie && b.opt.disableoutline && b.win.attr("hideFocus", "true"), f.iswebkit && b.opt.disableoutline && b.win.css({
                        outline: "none"
                    }));
                    !1 === b.opt.autohidemode ? (b.autohidedom = !1, b.rail.css({
                        opacity: b.opt.cursoropacitymax
                    }), b.railh && b.railh.css({
                        opacity: b.opt.cursoropacitymax
                    })) : !0 === b.opt.autohidemode ? (b.autohidedom = e().add(b.rail), f.isie8 && (b.autohidedom = b.autohidedom.add(b.cursor)), b.railh && (b.autohidedom = b.autohidedom.add(b.railh)), b.railh && f.isie8 && (b.autohidedom = b.autohidedom.add(b.cursorh))) : "scroll" == b.opt.autohidemode ? (b.autohidedom = e().add(b.rail), b.railh && (b.autohidedom = b.autohidedom.add(b.railh))) : "cursor" == b.opt.autohidemode ? (b.autohidedom = e().add(b.cursor), b.railh && (b.autohidedom = b.autohidedom.add(b.cursorh))) : "hidden" == b.opt.autohidemode && (b.autohidedom = !1, b.hide(), b.locked = !1);
                    if (f.isie9mobile) b.scrollmom = new H(b), b.onmangotouch = function(d) {
                        d = b.getScrollTop();
                        var c = b.getScrollLeft();
                        if (d == b.scrollmom.lastscrolly && c == b.scrollmom.lastscrollx) return !0;
                        var g = d - b.mangotouch.sy,
                            f = c - b.mangotouch.sx;
                        if (0 != Math.round(Math.sqrt(Math.pow(f, 2) + Math.pow(g, 2)))) {
                            var p = 0 > g ? -1 : 1,
                                e = 0 > f ? -1 : 1,
                                h = +new Date;
                            b.mangotouch.lazy && clearTimeout(b.mangotouch.lazy);
                            80 < h - b.mangotouch.tm || b.mangotouch.dry != p || b.mangotouch.drx != e ? (b.scrollmom.stop(), b.scrollmom.reset(c, d), b.mangotouch.sy = d, b.mangotouch.ly = d, b.mangotouch.sx = c, b.mangotouch.lx = c, b.mangotouch.dry = p, b.mangotouch.drx = e, b.mangotouch.tm = h) : (b.scrollmom.stop(), b.scrollmom.update(b.mangotouch.sx - f, b.mangotouch.sy - g), b.mangotouch.tm = h, g = Math.max(Math.abs(b.mangotouch.ly - d), Math.abs(b.mangotouch.lx - c)), b.mangotouch.ly = d, b.mangotouch.lx = c, 2 < g && (b.mangotouch.lazy = setTimeout(function() {
                                b.mangotouch.lazy = !1;
                                b.mangotouch.dry = 0;
                                b.mangotouch.drx = 0;
                                b.mangotouch.tm = 0;
                                b.scrollmom.doMomentum(30)
                            }, 100)))
                        }
                    }, g = b.getScrollTop(), m = b.getScrollLeft(), b.mangotouch = {
                        sy: g,
                        ly: g,
                        dry: 0,
                        sx: m,
                        lx: m,
                        drx: 0,
                        lazy: !1,
                        tm: 0
                    }, b.bind(b.docscroll, "scroll", b.onmangotouch);
                    else {
                        if (f.cantouch || b.istouchcapable || b.opt.touchbehavior || f.hasmstouch) {
                            b.scrollmom = new H(b);
                            b.ontouchstart = function(d) {
                                if (d.pointerType && 2 != d.pointerType) return !1;
                                if (!b.locked) {
                                    if (f.hasmstouch)
                                        for (var c = d.target ? d.target : !1; c;) {
                                            var g = e(c).getNiceScroll();
                                            if (0 < g.length && g[0].me == b.me) break;
                                            if (0 < g.length) return !1;
                                            if ("DIV" == c.nodeName && c.id == b.id) break;
                                            c = c.parentNode ? c.parentNode : !1
                                        }
                                    b.cancelScroll();
                                    if ((c = b.getTarget(d)) && /INPUT/i.test(c.nodeName) && /range/i.test(c.type)) return b.stopPropagation(d);
                                    !("clientX" in d) && "changedTouches" in d && (d.clientX = d.changedTouches[0].clientX, d.clientY = d.changedTouches[0].clientY);
                                    b.forcescreen && (g = d, d = {
                                        original: d.original ? d.original : d
                                    }, d.clientX = g.screenX, d.clientY = g.screenY);
                                    b.rail.drag = {
                                        x: d.clientX,
                                        y: d.clientY,
                                        sx: b.scroll.x,
                                        sy: b.scroll.y,
                                        st: b.getScrollTop(),
                                        sl: b.getScrollLeft(),
                                        pt: 2,
                                        dl: !1
                                    };
                                    if (b.ispage || !b.opt.directionlockdeadzone) b.rail.drag.dl = "f";
                                    else {
                                        var g = e(window).width(),
                                            p = e(window).height(),
                                            h = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                                            l = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
                                            p = Math.max(0, l - p),
                                            g = Math.max(0, h - g);
                                        b.rail.drag.ck = !b.rail.scrollable && b.railh.scrollable ? 0 < p ? "v" : !1 : b.rail.scrollable && !b.railh.scrollable ? 0 < g ? "h" : !1 : !1;
                                        b.rail.drag.ck || (b.rail.drag.dl = "f")
                                    }
                                    b.opt.touchbehavior && (b.isiframe && f.isie) && (g = b.win.position(), b.rail.drag.x += g.left, b.rail.drag.y += g.top);
                                    b.hasmoving = !1;
                                    b.lastmouseup = !1;
                                    b.scrollmom.reset(d.clientX, d.clientY);
                                    if (!f.cantouch && !this.istouchcapable && !f.hasmstouch) {
                                        if (!c || !/INPUT|SELECT|TEXTAREA/i.test(c.nodeName)) return !b.ispage && f.hasmousecapture && c.setCapture(), b.cancelEvent(d);
                                        /SUBMIT|CANCEL|BUTTON/i.test(e(c).attr("type")) && (pc = {
                                            tg: c,
                                            click: !1
                                        }, b.preventclick = pc)
                                    }
                                }
                            };
                            b.ontouchend = function(d) {
                                if (d.pointerType && 2 != d.pointerType) return !1;
                                if (b.rail.drag && 2 == b.rail.drag.pt && (b.scrollmom.doMomentum(), b.rail.drag = !1, b.hasmoving && (b.hasmoving = !1, b.lastmouseup = !0, b.hideCursor(), f.hasmousecapture && document.releaseCapture(), !f.cantouch))) return b.cancelEvent(d)
                            };
                            var q = b.opt.touchbehavior && b.isiframe && !f.hasmousecapture;
                            b.ontouchmove = function(d, c) {
                                if (d.pointerType && 2 != d.pointerType) return !1;
                                if (b.rail.drag && 2 == b.rail.drag.pt) {
                                    if (f.cantouch && "undefined" == typeof d.original) return !0;
                                    b.hasmoving = !0;
                                    b.preventclick && !b.preventclick.click && (b.preventclick.click = b.preventclick.tg.onclick || !1, b.preventclick.tg.onclick = b.onpreventclick);
                                    d = e.extend({
                                        original: d
                                    }, d);
                                    "changedTouches" in d && (d.clientX = d.changedTouches[0].clientX, d.clientY = d.changedTouches[0].clientY);
                                    if (b.forcescreen) {
                                        var g = d;
                                        d = {
                                            original: d.original ? d.original : d
                                        };
                                        d.clientX = g.screenX;
                                        d.clientY = g.screenY
                                    }
                                    g = ofy = 0;
                                    if (q && !c) {
                                        var p = b.win.position(),
                                            g = -p.left;
                                        ofy = -p.top
                                    }
                                    var h = d.clientY + ofy,
                                        p = h - b.rail.drag.y,
                                        l = d.clientX + g,
                                        k = l - b.rail.drag.x,
                                        s = b.rail.drag.st - p;
                                    b.ishwscroll && b.opt.bouncescroll ? 0 > s ? s = Math.round(s / 2) : s > b.page.maxh && (s = b.page.maxh + Math.round((s - b.page.maxh) / 2)) : (0 > s && (h = s = 0), s > b.page.maxh && (s = b.page.maxh, h = 0));
                                    if (b.railh && b.railh.scrollable) {
                                        var m = b.rail.drag.sl - k;
                                        b.ishwscroll && b.opt.bouncescroll ? 0 > m ? m = Math.round(m / 2) : m > b.page.maxw && (m = b.page.maxw +
                                            Math.round((m - b.page.maxw) / 2)) : (0 > m && (l = m = 0), m > b.page.maxw && (m = b.page.maxw, l = 0))
                                    }
                                    g = !1;
                                    if (b.rail.drag.dl) g = !0, "v" == b.rail.drag.dl ? m = b.rail.drag.sl : "h" == b.rail.drag.dl && (s = b.rail.drag.st);
                                    else {
                                        var p = Math.abs(p),
                                            k = Math.abs(k),
                                            n = b.opt.directionlockdeadzone;
                                        if ("v" == b.rail.drag.ck) {
                                            if (p > n && k <= 0.3 * p) return b.rail.drag = !1, !0;
                                            k > n && (b.rail.drag.dl = "f", e("body").scrollTop(e("body").scrollTop()))
                                        } else if ("h" == b.rail.drag.ck) {
                                            if (k > n && p <= 0.3 * az) return b.rail.drag = !1, !0;
                                            p > n && (b.rail.drag.dl = "f", e("body").scrollLeft(e("body").scrollLeft()))
                                        }
                                    }
                                    b.synched("touchmove", function() {
                                        b.rail.drag && 2 == b.rail.drag.pt && (b.prepareTransition && b.prepareTransition(0), b.rail.scrollable && b.setScrollTop(s), b.scrollmom.update(l, h), b.railh && b.railh.scrollable ? (b.setScrollLeft(m), b.showCursor(s, m)) : b.showCursor(s), f.isie10 && document.selection.clear())
                                    });
                                    f.ischrome && b.istouchcapable && (g = !1);
                                    if (g) return b.cancelEvent(d)
                                }
                            }
                        }
                        b.onmousedown = function(d, c) {
                            if (!(b.rail.drag && 1 != b.rail.drag.pt)) {
                                if (b.locked) return b.cancelEvent(d);
                                b.cancelScroll();
                                b.rail.drag = {
                                    x: d.clientX,
                                    y: d.clientY,
                                    sx: b.scroll.x,
                                    sy: b.scroll.y,
                                    pt: 1,
                                    hr: !!c
                                };
                                var g = b.getTarget(d);
                                !b.ispage && f.hasmousecapture && g.setCapture();
                                b.isiframe && !f.hasmousecapture && (b.saved.csspointerevents = b.doc.css("pointer-events"), b.css(b.doc, {
                                    "pointer-events": "none"
                                }));
                                return b.cancelEvent(d)
                            }
                        };
                        b.onmouseup = function(d) {
                            if (b.rail.drag && (f.hasmousecapture && document.releaseCapture(), b.isiframe && !f.hasmousecapture && b.doc.css("pointer-events", b.saved.csspointerevents), 1 == b.rail.drag.pt)) return b.rail.drag = !1, b.cancelEvent(d)
                        };
                        b.onmousemove = function(d) {
                            if (b.rail.drag && 1 == b.rail.drag.pt) {
                                if (f.ischrome && 0 == d.which) return b.onmouseup(d);
                                b.cursorfreezed = !0;
                                if (b.rail.drag.hr) {
                                    b.scroll.x = b.rail.drag.sx + (d.clientX - b.rail.drag.x);
                                    0 > b.scroll.x && (b.scroll.x = 0);
                                    var c = b.scrollvaluemaxw;
                                    b.scroll.x > c && (b.scroll.x = c)
                                } else b.scroll.y = b.rail.drag.sy + (d.clientY - b.rail.drag.y), 0 > b.scroll.y && (b.scroll.y = 0), c = b.scrollvaluemax, b.scroll.y > c && (b.scroll.y = c);
                                b.synched("mousemove", function() {
                                    b.rail.drag && 1 == b.rail.drag.pt && (b.showCursor(), b.rail.drag.hr ? b.doScrollLeft(Math.round(b.scroll.x * b.scrollratio.x), b.opt.cursordragspeed) : b.doScrollTop(Math.round(b.scroll.y * b.scrollratio.y), b.opt.cursordragspeed))
                                });
                                return b.cancelEvent(d)
                            }
                        };
                        if (f.cantouch || b.opt.touchbehavior) b.onpreventclick = function(d) {
                            if (b.preventclick) return b.preventclick.tg.onclick = b.preventclick.click, b.preventclick = !1, b.cancelEvent(d)
                        }, b.bind(b.win, "mousedown", b.ontouchstart), b.onclick = f.isios ? !1 : function(d) {
                            return b.lastmouseup ? (b.lastmouseup = !1, b.cancelEvent(d)) : !0
                        }, b.opt.grabcursorenabled && f.cursorgrabvalue && (b.css(b.ispage ? b.doc : b.win, {
                            cursor: f.cursorgrabvalue
                        }), b.css(b.rail, {
                            cursor: f.cursorgrabvalue
                        }));
                        else {
                            var r = function(d) {
                                if (b.selectiondrag) {
                                    if (d) {
                                        var c = b.win.outerHeight();
                                        d = d.pageY - b.selectiondrag.top;
                                        0 < d && d < c && (d = 0);
                                        d >= c && (d -= c);
                                        b.selectiondrag.df = d
                                    }
                                    0 != b.selectiondrag.df && (b.doScrollBy(2 * -Math.floor(b.selectiondrag.df / 6)), b.debounced("doselectionscroll", function() {
                                        r()
                                    }, 50))
                                }
                            };
                            b.hasTextSelected = "getSelection" in document ? function() {
                                return 0 < document.getSelection().rangeCount
                            } : "selection" in document ? function() {
                                return "None" != document.selection.type
                            } : function() {
                                return !1
                            };
                            b.onselectionstart = function(d) {
                                b.ispage || (b.selectiondrag = b.win.offset())
                            };
                            b.onselectionend = function(d) {
                                b.selectiondrag = !1
                            };
                            b.onselectiondrag = function(d) {
                                b.selectiondrag && b.hasTextSelected() && b.debounced("selectionscroll", function() {
                                    r(d)
                                }, 250)
                            }
                        }
                        f.hasmstouch && (b.css(b.rail, {
                            "-ms-touch-action": "none"
                        }), b.css(b.cursor, {
                            "-ms-touch-action": "none"
                        }), b.bind(b.win, "MSPointerDown", b.ontouchstart), b.bind(document, "MSPointerUp", b.ontouchend), b.bind(document, "MSPointerMove", b.ontouchmove), b.bind(b.cursor, "MSGestureHold", function(b) {
                            b.preventDefault()
                        }), b.bind(b.cursor, "contextmenu", function(b) {
                            b.preventDefault()
                        }));
                        this.istouchcapable && (b.bind(b.win, "touchstart", b.ontouchstart), b.bind(document, "touchend", b.ontouchend), b.bind(document, "touchcancel", b.ontouchend), b.bind(document, "touchmove", b.ontouchmove));
                        b.bind(b.cursor, "mousedown", b.onmousedown);
                        b.bind(b.cursor, "mouseup", b.onmouseup);
                        b.railh && (b.bind(b.cursorh, "mousedown", function(d) {
                            b.onmousedown(d, !0)
                        }), b.bind(b.cursorh, "mouseup", function(d) {
                            if (!(b.rail.drag && 2 == b.rail.drag.pt)) return b.rail.drag = !1, b.hasmoving = !1, b.hideCursor(), f.hasmousecapture && document.releaseCapture(), b.cancelEvent(d)
                        }));
                        if (b.opt.cursordragontouch || !f.cantouch && !b.opt.touchbehavior) b.rail.css({
                            cursor: "default"
                        }), b.railh && b.railh.css({
                            cursor: "default"
                        }), b.jqbind(b.rail, "mouseenter", function() {
                            b.canshowonmouseevent && b.showCursor();
                            b.rail.active = !0
                        }), b.jqbind(b.rail, "mouseleave", function() {
                            b.rail.active = !1;
                            b.rail.drag || b.hideCursor()
                        }), b.opt.sensitiverail && (b.bind(b.rail, "click", function(d) {
                            b.doRailClick(d, !1, !1)
                        }), b.bind(b.rail, "dblclick", function(d) {
                            b.doRailClick(d, !0, !1)
                        }), b.bind(b.cursor, "click", function(d) {
                            b.cancelEvent(d)
                        }), b.bind(b.cursor, "dblclick", function(d) {
                            b.cancelEvent(d)
                        })), b.railh && (b.jqbind(b.railh, "mouseenter", function() {
                            b.canshowonmouseevent && b.showCursor();
                            b.rail.active = !0
                        }), b.jqbind(b.railh, "mouseleave", function() {
                            b.rail.active = !1;
                            b.rail.drag || b.hideCursor()
                        }), b.opt.sensitiverail && (b.bind(b.railh, "click", function(d) {
                            b.doRailClick(d, !1, !0)
                        }), b.bind(b.railh, "dblclick", function(d) {
                            b.doRailClick(d, !0, !0)
                        }), b.bind(b.cursorh, "click", function(d) {
                            b.cancelEvent(d)
                        }), b.bind(b.cursorh, "dblclick", function(d) {
                            b.cancelEvent(d)
                        })));
                        !f.cantouch && !b.opt.touchbehavior ? (b.bind(f.hasmousecapture ? b.win : document, "mouseup", b.onmouseup), b.bind(document, "mousemove", b.onmousemove), b.onclick && b.bind(document, "click", b.onclick), !b.ispage && b.opt.enablescrollonselection && (b.bind(b.win[0], "mousedown", b.onselectionstart), b.bind(document, "mouseup", b.onselectionend), b.bind(b.cursor, "mouseup", b.onselectionend), b.cursorh && b.bind(b.cursorh, "mouseup", b.onselectionend), b.bind(document, "mousemove", b.onselectiondrag)), b.zoom && (b.jqbind(b.zoom, "mouseenter", function() {
                            b.canshowonmouseevent && b.showCursor();
                            b.rail.active = !0
                        }), b.jqbind(b.zoom, "mouseleave", function() {
                            b.rail.active = !1;
                            b.rail.drag || b.hideCursor()
                        }))) : (b.bind(f.hasmousecapture ? b.win : document, "mouseup", b.ontouchend), b.bind(document, "mousemove", b.ontouchmove), b.onclick && b.bind(document, "click", b.onclick), b.opt.cursordragontouch && (b.bind(b.cursor, "mousedown", b.onmousedown), b.bind(b.cursor, "mousemove", b.onmousemove), b.cursorh && b.bind(b.cursorh, "mousedown", b.onmousedown), b.cursorh && b.bind(b.cursorh, "mousemove", b.onmousemove)));
                        b.opt.enablemousewheel && (b.isiframe || b.bind(f.isie && b.ispage ? document : b.docscroll, "mousewheel", b.onmousewheel), b.bind(b.rail, "mousewheel", b.onmousewheel), b.railh && b.bind(b.railh, "mousewheel", b.onmousewheelhr));
                        !b.ispage && (!f.cantouch && !/HTML|BODY/.test(b.win[0].nodeName)) && (b.win.attr("tabindex") || b.win.attr({
                            tabindex: J++
                        }), b.jqbind(b.win, "focus", function(d) {
                            y = b.getTarget(d).id || !0;
                            b.hasfocus = !0;
                            b.canshowonmouseevent && b.noticeCursor()
                        }), b.jqbind(b.win, "blur", function(d) {
                            y = !1;
                            b.hasfocus = !1
                        }), b.jqbind(b.win, "mouseenter", function(d) {
                            D = b.getTarget(d).id || !0;
                            b.hasmousefocus = !0;
                            b.canshowonmouseevent && b.noticeCursor()
                        }), b.jqbind(b.win, "mouseleave", function() {
                            D = !1;
                            b.hasmousefocus = !1
                        }))
                    }
                    b.onkeypress = function(d) {
                        if (b.locked && 0 == b.page.maxh) return !0;
                        d = d ? d : window.e;
                        var c = b.getTarget(d);
                        if (c && /INPUT|TEXTAREA|SELECT|OPTION/.test(c.nodeName) && (!c.getAttribute("type") && !c.type || !/submit|button|cancel/i.tp)) return !0;
                        if (b.hasfocus || b.hasmousefocus && !y || b.ispage && !y && !D) {
                            c = d.keyCode;
                            if (b.locked && 27 != c) return b.cancelEvent(d);
                            var g = d.ctrlKey || !1,
                                p = d.shiftKey || !1,
                                f = !1;
                            switch (c) {
                                case 38:
                                case 63233:
                                    b.doScrollBy(72);
                                    f = !0;
                                    break;
                                case 40:
                                case 63235:
                                    b.doScrollBy(-72);
                                    f = !0;
                                    break;
                                case 37:
                                case 63232:
                                    b.railh && (g ? b.doScrollLeft(0) : b.doScrollLeftBy(72), f = !0);
                                    break;
                                case 39:
                                case 63234:
                                    b.railh && (g ? b.doScrollLeft(b.page.maxw) : b.doScrollLeftBy(-72), f = !0);
                                    break;
                                case 33:
                                case 63276:
                                    b.doScrollBy(b.view.h);
                                    f = !0;
                                    break;
                                case 34:
                                case 63277:
                                    b.doScrollBy(-b.view.h);
                                    f = !0;
                                    break;
                                case 36:
                                case 63273:
                                    b.railh && g ? b.doScrollPos(0, 0) : b.doScrollTo(0);
                                    f = !0;
                                    break;
                                case 35:
                                case 63275:
                                    b.railh && g ? b.doScrollPos(b.page.maxw, b.page.maxh) : b.doScrollTo(b.page.maxh);
                                    f = !0;
                                    break;
                                case 32:
                                    b.opt.spacebarenabled && (p ? b.doScrollBy(b.view.h) : b.doScrollBy(-b.view.h), f = !0);
                                    break;
                                case 27:
                                    b.zoomactive && (b.doZoom(), f = !0)
                            }
                            if (f) return b.cancelEvent(d)
                        }
                    };
                    b.opt.enablekeyboard && b.bind(document, f.isopera && !f.isopera12 ? "keypress" : "keydown", b.onkeypress);
                    b.bind(window, "resize", b.lazyResize);
                    b.bind(window, "orientationchange", b.lazyResize);
                    b.bind(window, "load", b.lazyResize);
                    if (f.ischrome && !b.ispage && !b.haswrapper) {
                        var t = b.win.attr("style"),
                            g = parseFloat(b.win.css("width")) + 1;
                        b.win.css("width", g);
                        b.synched("chromefix", function() {
                            b.win.attr("style", t)
                        })
                    }
                    b.onAttributeChange = function(d) {
                        b.lazyResize(250)
                    };
                    !b.ispage && !b.haswrapper && (!1 !== z ? (b.observer = new z(function(d) {
                        d.forEach(b.onAttributeChange)
                    }), b.observer.observe(b.win[0], {
                        childList: !0,
                        characterData: !1,
                        attributes: !0,
                        subtree: !1
                    }), b.observerremover = new z(function(d) {
                        d.forEach(function(d) {
                            if (0 < d.removedNodes.length)
                                for (var c in d.removedNodes)
                                    if (d.removedNodes[c] == b.win[0]) return b.remove()
                        })
                    }), b.observerremover.observe(b.win[0].parentNode, {
                        childList: !0,
                        characterData: !1,
                        attributes: !1,
                        subtree: !1
                    })) : (b.bind(b.win, f.isie && !f.isie9 ? "propertychange" : "DOMAttrModified", b.onAttributeChange), f.isie9 && b.win[0].attachEvent("onpropertychange", b.onAttributeChange), b.bind(b.win, "DOMNodeRemoved", function(d) {
                        d.target == b.win[0] && b.remove()
                    })));
                    !b.ispage && b.opt.boxzoom && b.bind(window, "resize", b.resizeZoom);
                    b.istextarea && b.bind(b.win, "mouseup", b.lazyResize);
                    b.checkrtlmode = !0;
                    b.lazyResize(30)
                }
                if ("IFRAME" == this.doc[0].nodeName) {
                    var I = function(d) {
                        b.iframexd = !1;
                        try {
                            var c = "contentDocument" in this ? this.contentDocument : this.contentWindow.document
                        } catch (g) {
                            b.iframexd = !0, c = !1
                        }
                        if (b.iframexd) return "console" in window && console.log("NiceScroll error: policy restriced iframe"), !0;
                        b.forcescreen = !0;
                        b.isiframe && (b.iframe = {
                            doc: e(c),
                            html: b.doc.contents().find("html")[0],
                            body: b.doc.contents().find("body")[0]
                        }, b.getContentSize = function() {
                            return {
                                w: Math.max(b.iframe.html.scrollWidth, b.iframe.body.scrollWidth),
                                h: Math.max(b.iframe.html.scrollHeight, b.iframe.body.scrollHeight)
                            }
                        }, b.docscroll = e(b.iframe.body));
                        !f.isios && (b.opt.iframeautoresize && !b.isiframe) && (b.win.scrollTop(0), b.doc.height(""), d = Math.max(c.getElementsByTagName("html")[0].scrollHeight, c.body.scrollHeight), b.doc.height(d));
                        b.lazyResize(30);
                        f.isie7 && b.css(e(b.iframe.html), {
                            "overflow-y": "hidden"
                        });
                        b.css(e(b.iframe.body), {
                            "overflow-y": "hidden"
                        });
                        "contentWindow" in this ? b.bind(this.contentWindow, "scroll", b.onscroll) : b.bind(c, "scroll", b.onscroll);
                        b.opt.enablemousewheel && b.bind(c, "mousewheel", b.onmousewheel);
                        b.opt.enablekeyboard && b.bind(c, f.isopera ? "keypress" : "keydown", b.onkeypress);
                        if (f.cantouch || b.opt.touchbehavior) b.bind(c, "mousedown", b.onmousedown), b.bind(c, "mousemove", function(d) {
                            b.onmousemove(d, !0)
                        }), b.opt.grabcursorenabled && f.cursorgrabvalue && b.css(e(c.body), {
                            cursor: f.cursorgrabvalue
                        });
                        b.bind(c, "mouseup", b.onmouseup);
                        b.zoom && (b.opt.dblclickzoom && b.bind(c, "dblclick", b.doZoom), b.ongesturezoom && b.bind(c, "gestureend", b.ongesturezoom))
                    };
                    this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function() {
                        I.call(b.doc[0], !1)
                    }, 500);
                    b.bind(this.doc, "load", I)
                }
            };
            this.showCursor = function(d, c) {
                b.cursortimeout && (clearTimeout(b.cursortimeout), b.cursortimeout = 0);
                if (b.rail) {
                    b.autohidedom && (b.autohidedom.stop().css({
                        opacity: b.opt.cursoropacitymax
                    }), b.cursoractive = !0);
                    if (!b.rail.drag || 1 != b.rail.drag.pt) "undefined" != typeof d && !1 !== d && (b.scroll.y = Math.round(1 * d / b.scrollratio.y)), "undefined" != typeof c && (b.scroll.x = Math.round(1 * c / b.scrollratio.x));
                    b.cursor.css({
                        height: b.cursorheight,
                        top: b.scroll.y
                    });
                    b.cursorh && (!b.rail.align && b.rail.visibility ? b.cursorh.css({
                        width: b.cursorwidth,
                        left: b.scroll.x + b.rail.width
                    }) : b.cursorh.css({
                        width: b.cursorwidth,
                        left: b.scroll.x
                    }), b.cursoractive = !0);
                    b.zoom && b.zoom.stop().css({
                        opacity: b.opt.cursoropacitymax
                    })
                }
            };
            this.hideCursor = function(d) {
                !b.cursortimeout && (b.rail && b.autohidedom) && (b.cursortimeout = setTimeout(function() {
                    if (!b.rail.active || !b.showonmouseevent) b.autohidedom.stop().animate({
                        opacity: b.opt.cursoropacitymin
                    }), b.zoom && b.zoom.stop().animate({
                        opacity: b.opt.cursoropacitymin
                    }), b.cursoractive = !1;
                    b.cursortimeout = 0
                }, d || b.opt.hidecursordelay))
            };
            this.noticeCursor = function(d, c, g) {
                b.showCursor(c, g);
                b.rail.active || b.hideCursor(d)
            };
            this.getContentSize = b.ispage ? function() {
                return {
                    w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                    h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }
            } : b.haswrapper ? function() {
                return {
                    w: b.doc.outerWidth() + parseInt(b.win.css("paddingLeft")) + parseInt(b.win.css("paddingRight")),
                    h: b.doc.outerHeight() + parseInt(b.win.css("paddingTop")) + parseInt(b.win.css("paddingBottom"))
                }
            } : function() {
                return {
                    w: b.docscroll[0].scrollWidth,
                    h: b.docscroll[0].scrollHeight
                }
            };
            this.onResize = function(d, c) {
                if (!b.win) return !1;
                if (!b.haswrapper && !b.ispage) {
                    if ("none" == b.win.css("display")) return b.visibility && b.hideRail().hideRailHr(), !1;
                    !b.hidden && !b.visibility && b.showRail().showRailHr()
                }
                var g = b.page.maxh,
                    f = b.page.maxw,
                    e = b.view.w;
                b.view = {
                    w: b.ispage ? b.win.width() : parseInt(b.win[0].clientWidth),
                    h: b.ispage ? b.win.height() : parseInt(b.win[0].clientHeight)
                };
                b.page = c ? c : b.getContentSize();
                b.page.maxh = Math.max(0, b.page.h - b.view.h);
                b.page.maxw = Math.max(0, b.page.w - b.view.w);
                if (b.page.maxh == g && b.page.maxw == f && b.view.w == e) {
                    if (b.ispage) return b;
                    g = b.win.offset();
                    if (b.lastposition && (f = b.lastposition, f.top == g.top && f.left == g.left)) return b;
                    b.lastposition = g
                }
                0 == b.page.maxh ? (b.hideRail(), b.scrollvaluemax = 0, b.scroll.y = 0, b.scrollratio.y = 0, b.cursorheight = 0, b.setScrollTop(0), b.rail.scrollable = !1) : b.rail.scrollable = !0;
                0 == b.page.maxw ? (b.hideRailHr(), b.scrollvaluemaxw = 0, b.scroll.x = 0, b.scrollratio.x = 0, b.cursorwidth = 0, b.setScrollLeft(0), b.railh.scrollable = !1) : b.railh.scrollable = !0;
                b.locked = 0 == b.page.maxh && 0 == b.page.maxw;
                if (b.locked) return b.ispage || b.updateScrollBar(b.view), !1;
                !b.hidden && !b.visibility ? b.showRail().showRailHr() : !b.hidden && !b.railh.visibility && b.showRailHr();
                b.istextarea && (b.win.css("resize") && "none" != b.win.css("resize")) && (b.view.h -= 20);
                b.cursorheight = Math.min(b.view.h, Math.round(b.view.h * (b.view.h / b.page.h)));
                b.cursorheight = b.opt.cursorfixedheight ? b.opt.cursorfixedheight : Math.max(b.opt.cursorminheight, b.cursorheight);
                b.cursorwidth = Math.min(b.view.w, Math.round(b.view.w * (b.view.w / b.page.w)));
                b.cursorwidth = b.opt.cursorfixedheight ? b.opt.cursorfixedheight : Math.max(b.opt.cursorminheight, b.cursorwidth);
                b.scrollvaluemax = b.view.h - b.cursorheight - b.cursor.hborder;
                b.railh && (b.railh.width = 0 < b.page.maxh ? b.view.w - b.rail.width : b.view.w, b.scrollvaluemaxw = b.railh.width - b.cursorwidth - b.cursorh.wborder);
                b.checkrtlmode && b.railh && (b.checkrtlmode = !1, b.opt.rtlmode && 0 == b.scroll.x && b.setScrollLeft(b.page.maxw));
                b.ispage || b.updateScrollBar(b.view);
                b.scrollratio = {
                    x: b.page.maxw / b.scrollvaluemaxw,
                    y: b.page.maxh / b.scrollvaluemax
                };
                b.getScrollTop() > b.page.maxh ? b.doScrollTop(b.page.maxh) : (b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y)), b.scroll.x = Math.round(b.getScrollLeft() * (1 / b.scrollratio.x)), b.cursoractive && b.noticeCursor());
                b.scroll.y && 0 == b.getScrollTop() && b.doScrollTo(Math.floor(b.scroll.y * b.scrollratio.y));
                return b
            };
            this.resize = b.onResize;
            this.lazyResize = function(d) {
                d = isNaN(d) ? 30 : d;
                b.delayed("resize", b.resize, d);
                return b
            };
            this._bind = function(d, c, g, f) {
                b.events.push({
                    e: d,
                    n: c,
                    f: g,
                    b: f,
                    q: !1
                });
                d.addEventListener ? d.addEventListener(c, g, f || !1) : d.attachEvent ? d.attachEvent("on" + c, g) : d["on" + c] = g
            };
            this.jqbind = function(d, c, g) {
                b.events.push({
                    e: d,
                    n: c,
                    f: g,
                    q: !0
                });
                e(d).bind(c, g)
            };
            this.bind = function(d, c, g, e) {
                var h = "jquery" in d ? d[0] : d;
                "mousewheel" == c ? "onwheel" in b.win ? b._bind(h, "wheel", g, e || !1) : (d = "undefined" != typeof document.onmousewheel ? "mousewheel" : "DOMMouseScroll", n(h, d, g, e || !1), "DOMMouseScroll" == d && n(h, "MozMousePixelScroll", g, e || !1)) : h.addEventListener ? (f.cantouch && /mouseup|mousedown|mousemove/.test(c) && b._bind(h, "mousedown" == c ? "touchstart" : "mouseup" == c ? "touchend" : "touchmove", function(b) {
                    if (b.touches) {
                        if (2 > b.touches.length) {
                            var d = b.touches.length ? b.touches[0] : b;
                            d.original = b;
                            g.call(this, d)
                        }
                    } else b.changedTouches && (d = b.changedTouches[0], d.original = b, g.call(this, d))
                }, e || !1), b._bind(h, c, g, e || !1), f.cantouch && "mouseup" == c && b._bind(h, "touchcancel", g, e || !1)) : b._bind(h, c, function(d) {
                    if ((d = d || window.event || !1) && d.srcElement) d.target = d.srcElement;
                    "pageY" in d || (d.pageX = d.clientX + document.documentElement.scrollLeft, d.pageY = d.clientY + document.documentElement.scrollTop);
                    return !1 === g.call(h, d) || !1 === e ? b.cancelEvent(d) : !0
                })
            };
            this._unbind = function(b, c, g, f) {
                b.removeEventListener ? b.removeEventListener(c, g, f) : b.detachEvent ? b.detachEvent("on" + c, g) : b["on" + c] = !1
            };
            this.unbindAll = function() {
                for (var d = 0; d < b.events.length; d++) {
                    var c = b.events[d];
                    c.q ? c.e.unbind(c.n, c.f) : b._unbind(c.e, c.n, c.f, c.b)
                }
            };
            this.cancelEvent = function(b) {
                b = b.original ? b.original : b ? b : window.event || !1;
                if (!b) return !1;
                b.preventDefault && b.preventDefault();
                b.stopPropagation && b.stopPropagation();
                b.preventManipulation && b.preventManipulation();
                b.cancelBubble = !0;
                b.cancel = !0;
                return b.returnValue = !1
            };
            this.stopPropagation = function(b) {
                b = b.original ? b.original : b ? b : window.event || !1;
                if (!b) return !1;
                if (b.stopPropagation) return b.stopPropagation();
                b.cancelBubble && (b.cancelBubble = !0);
                return !1
            };
            this.showRail = function() {
                if (0 != b.page.maxh && (b.ispage || "none" != b.win.css("display"))) b.visibility = !0, b.rail.visibility = !0, b.rail.css("display", "block");
                return b
            };
            this.showRailHr = function() {
                if (!b.railh) return b;
                if (0 != b.page.maxw && (b.ispage || "none" != b.win.css("display"))) b.railh.visibility = !0, b.railh.css("display", "block");
                return b
            };
            this.hideRail = function() {
                b.visibility = !1;
                b.rail.visibility = !1;
                b.rail.css("display", "none");
                return b
            };
            this.hideRailHr = function() {
                if (!b.railh) return b;
                b.railh.visibility = !1;
                b.railh.css("display", "none");
                return b
            };
            this.show = function() {
                b.hidden = !1;
                b.locked = !1;
                return b.showRail().showRailHr()
            };
            this.hide = function() {
                b.hidden = !0;
                b.locked = !0;
                return b.hideRail().hideRailHr()
            };
            this.toggle = function() {
                return b.hidden ? b.show() : b.hide()
            };
            this.remove = function() {
                b.stop();
                b.cursortimeout && clearTimeout(b.cursortimeout);
                b.doZoomOut();
                b.unbindAll();
                !1 !== b.observer && b.observer.disconnect();
                !1 !== b.observerremover && b.observerremover.disconnect();
                b.events = [];
                b.cursor && (b.cursor.remove(), b.cursor = null);
                b.cursorh && (b.cursorh.remove(), b.cursorh = null);
                b.rail && (b.rail.remove(), b.rail = null);
                b.railh && (b.railh.remove(), b.railh = null);
                b.zoom && (b.zoom.remove(), b.zoom = null);
                for (var d = 0; d < b.saved.css.length; d++) {
                    var c = b.saved.css[d];
                    c[0].css(c[1], "undefined" == typeof c[2] ? "" : c[2])
                }
                b.saved = !1;
                b.me.data("__nicescroll", "");
                b.me = null;
                b.doc = null;
                b.docscroll = null;
                b.win = null;
                return b
            };
            this.scrollstart = function(d) {
                this.onscrollstart = d;
                return b
            };
            this.scrollend = function(d) {
                this.onscrollend = d;
                return b
            };
            this.scrollcancel = function(d) {
                this.onscrollcancel = d;
                return b
            };
            this.zoomin = function(d) {
                this.onzoomin = d;
                return b
            };
            this.zoomout = function(d) {
                this.onzoomout = d;
                return b
            };
            this.isScrollable = function(b) {
                b = b.target ? b.target : b;
                if ("OPTION" == b.nodeName) return !0;
                for (; b && 1 == b.nodeType && !/BODY|HTML/.test(b.nodeName);) {
                    var c = e(b),
                        c = c.css("overflowY") || c.css("overflowX") || c.css("overflow") || "";
                    if (/scroll|auto/.test(c)) return b.clientHeight != b.scrollHeight;
                    b = b.parentNode ? b.parentNode : !1
                }
                return !1
            };
            this.getViewport = function(b) {
                for (b = b && b.parentNode ? b.parentNode : !1; b && 1 == b.nodeType && !/BODY|HTML/.test(b.nodeName);) {
                    var c = e(b),
                        g = c.css("overflowY") || c.css("overflowX") || c.css("overflow") || "";
                    if (/scroll|auto/.test(g) && b.clientHeight != b.scrollHeight || 0 < c.getNiceScroll().length) return c;
                    b = b.parentNode ? b.parentNode : !1
                }
                return !1
            };
            this.onmousewheel = function(d) {
                if (b.locked) return !0;
                if (b.rail.drag) return b.cancelEvent(d);
                if (!b.rail.scrollable) return b.railh && b.railh.scrollable ? b.onmousewheelhr(d) : !0;
                var c = +new Date,
                    g = !1;
                b.opt.preservenativescrolling && b.checkarea + 600 < c && (b.nativescrollingarea = b.isScrollable(d), g = !0);
                b.checkarea = c;
                if (b.nativescrollingarea) return !0;
                if (d = t(d, !1, g)) b.checkarea = 0;
                return d
            };
            this.onmousewheelhr = function(d) {
                if (b.locked || !b.railh.scrollable) return !0;
                if (b.rail.drag) return b.cancelEvent(d);
                var c = +new Date,
                    g = !1;
                b.opt.preservenativescrolling && b.checkarea + 600 < c && (b.nativescrollingarea = b.isScrollable(d), g = !0);
                b.checkarea = c;
                return b.nativescrollingarea ? !0 : b.locked ? b.cancelEvent(d) : t(d, !0, g)
            };
            this.stop = function() {
                b.cancelScroll();
                b.scrollmon && b.scrollmon.stop();
                b.cursorfreezed = !1;
                b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y));
                b.noticeCursor();
                return b
            };
            this.getTransitionSpeed = function(c) {
                var f = Math.round(10 * b.opt.scrollspeed);
                c = Math.min(f, Math.round(c / 20 * b.opt.scrollspeed));
                return 20 < c ? c : 0
            };
            b.opt.smoothscroll ? b.ishwscroll && f.hastransition && b.opt.usetransition ? (this.prepareTransition = function(c, e) {
                var g = e ? 20 < c ? c : 0 : b.getTransitionSpeed(c),
                    h = g ? f.prefixstyle + "transform " + g + "ms ease-out" : "";
                if (!b.lasttransitionstyle || b.lasttransitionstyle != h) b.lasttransitionstyle = h, b.doc.css(f.transitionstyle, h);
                return g
            }, this.doScrollLeft = function(c, f) {
                var g = b.scrollrunning ? b.newscrolly : b.getScrollTop();
                b.doScrollPos(c, g, f)
            }, this.doScrollTop = function(c, f) {
                var g = b.scrollrunning ? b.newscrollx : b.getScrollLeft();
                b.doScrollPos(g, c, f)
            }, this.doScrollPos = function(c, e, g) {
                var h = b.getScrollTop(),
                    l = b.getScrollLeft();
                (0 > (b.newscrolly - h) * (e - h) || 0 > (b.newscrollx - l) * (c - l)) && b.cancelScroll();
                !1 == b.opt.bouncescroll && (0 > e ? e = 0 : e > b.page.maxh && (e = b.page.maxh), 0 > c ? c = 0 : c > b.page.maxw && (c = b.page.maxw));
                if (b.scrollrunning && c == b.newscrollx && e == b.newscrolly) return !1;
                b.newscrolly = e;
                b.newscrollx = c;
                b.newscrollspeed = g || !1;
                if (b.timer) return !1;
                b.timer = setTimeout(function() {
                    var g = b.getScrollTop(),
                        h = b.getScrollLeft(),
                        l, k;
                    l = c - h;
                    k = e - g;
                    l = Math.round(Math.sqrt(Math.pow(l, 2) + Math.pow(k, 2)));
                    l = b.newscrollspeed && 1 < b.newscrollspeed ? b.newscrollspeed : b.getTransitionSpeed(l);
                    b.newscrollspeed && 1 >= b.newscrollspeed && (l *= b.newscrollspeed);
                    b.prepareTransition(l, !0);
                    b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm);
                    0 < l && (!b.scrollrunning && b.onscrollstart && b.onscrollstart.call(b, {
                        type: "scrollstart",
                        current: {
                            x: h,
                            y: g
                        },
                        request: {
                            x: c,
                            y: e
                        },
                        end: {
                            x: b.newscrollx,
                            y: b.newscrolly
                        },
                        speed: l
                    }), f.transitionend ? b.scrollendtrapped || (b.scrollendtrapped = !0, b.bind(b.doc, f.transitionend, b.onScrollEnd, !1)) : (b.scrollendtrapped && clearTimeout(b.scrollendtrapped), b.scrollendtrapped = setTimeout(b.onScrollEnd, l)), b.timerscroll = {
                        bz: new BezierClass(g, b.newscrolly, l, 0, 0, 0.58, 1),
                        bh: new BezierClass(h, b.newscrollx, l, 0, 0, 0.58, 1)
                    }, b.cursorfreezed || (b.timerscroll.tm = setInterval(function() {
                        b.showCursor(b.getScrollTop(), b.getScrollLeft())
                    }, 60)));
                    b.synched("doScroll-set", function() {
                        b.timer = 0;
                        b.scrollendtrapped && (b.scrollrunning = !0);
                        b.setScrollTop(b.newscrolly);
                        b.setScrollLeft(b.newscrollx);
                        if (!b.scrollendtrapped) b.onScrollEnd()
                    })
                }, 50)
            }, this.cancelScroll = function() {
                if (!b.scrollendtrapped) return !0;
                var c = b.getScrollTop(),
                    e = b.getScrollLeft();
                b.scrollrunning = !1;
                f.transitionend || clearTimeout(f.transitionend);
                b.scrollendtrapped = !1;
                b._unbind(b.doc, f.transitionend, b.onScrollEnd);
                b.prepareTransition(0);
                b.setScrollTop(c);
                b.railh && b.setScrollLeft(e);
                b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm);
                b.timerscroll = !1;
                b.cursorfreezed = !1;
                b.showCursor(c, e);
                return b
            }, this.onScrollEnd = function() {
                b.scrollendtrapped && b._unbind(b.doc, f.transitionend, b.onScrollEnd);
                b.scrollendtrapped = !1;
                b.prepareTransition(0);
                b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm);
                b.timerscroll = !1;
                var c = b.getScrollTop(),
                    e = b.getScrollLeft();
                b.setScrollTop(c);
                b.railh && b.setScrollLeft(e);
                b.noticeCursor(!1, c, e);
                b.cursorfreezed = !1;
                0 > c ? c = 0 : c > b.page.maxh && (c = b.page.maxh);
                0 > e ? e = 0 : e > b.page.maxw && (e = b.page.maxw);
                if (c != b.newscrolly || e != b.newscrollx) return b.doScrollPos(e, c, b.opt.snapbackspeed);
                b.onscrollend && b.scrollrunning && b.onscrollend.call(b, {
                    type: "scrollend",
                    current: {
                        x: e,
                        y: c
                    },
                    end: {
                        x: b.newscrollx,
                        y: b.newscrolly
                    }
                });
                b.scrollrunning = !1
            }) : (this.doScrollLeft = function(c, f) {
                var g = b.scrollrunning ? b.newscrolly : b.getScrollTop();
                b.doScrollPos(c, g, f)
            }, this.doScrollTop = function(c, f) {
                var g = b.scrollrunning ? b.newscrollx : b.getScrollLeft();
                b.doScrollPos(g, c, f)
            }, this.doScrollPos = function(c, f, g) {
                function e() {
                    if (b.cancelAnimationFrame) return !0;
                    b.scrollrunning = !0;
                    if (r = 1 - r) return b.timer = v(e) || 1;
                    var c = 0,
                        d = sy = b.getScrollTop();
                    if (b.dst.ay) {
                        var d = b.bzscroll ? b.dst.py + b.bzscroll.getNow() * b.dst.ay : b.newscrolly,
                            g = d - sy;
                        if (0 > g && d < b.newscrolly || 0 < g && d > b.newscrolly) d = b.newscrolly;
                        b.setScrollTop(d);
                        d == b.newscrolly && (c = 1)
                    } else c = 1;
                    var f = sx = b.getScrollLeft();
                    if (b.dst.ax) {
                        f = b.bzscroll ? b.dst.px + b.bzscroll.getNow() * b.dst.ax : b.newscrollx;
                        g = f - sx;
                        if (0 > g && f < b.newscrollx || 0 < g && f > b.newscrollx) f = b.newscrollx;
                        b.setScrollLeft(f);
                        f == b.newscrollx && (c += 1)
                    } else c += 1;
                    2 == c ? (b.timer = 0, b.cursorfreezed = !1, b.bzscroll = !1, b.scrollrunning = !1, 0 > d ? d = 0 : d > b.page.maxh && (d = b.page.maxh), 0 > f ? f = 0 : f > b.page.maxw && (f = b.page.maxw), f != b.newscrollx || d != b.newscrolly ? b.doScrollPos(f, d) : b.onscrollend && b.onscrollend.call(b, {
                        type: "scrollend",
                        current: {
                            x: sx,
                            y: sy
                        },
                        end: {
                            x: b.newscrollx,
                            y: b.newscrolly
                        }
                    })) : b.timer = v(e) || 1
                }
                f = "undefined" == typeof f || !1 === f ? b.getScrollTop(!0) : f;
                if (b.timer && b.newscrolly == f && b.newscrollx == c) return !0;
                b.timer && w(b.timer);
                b.timer = 0;
                var h = b.getScrollTop(),
                    l = b.getScrollLeft();
                (0 > (b.newscrolly - h) * (f - h) || 0 > (b.newscrollx - l) * (c - l)) && b.cancelScroll();
                b.newscrolly = f;
                b.newscrollx = c;
                if (!b.bouncescroll || !b.rail.visibility) 0 > b.newscrolly ? b.newscrolly = 0 : b.newscrolly > b.page.maxh && (b.newscrolly = b.page.maxh);
                if (!b.bouncescroll || !b.railh.visibility) 0 > b.newscrollx ? b.newscrollx = 0 : b.newscrollx > b.page.maxw && (b.newscrollx = b.page.maxw);
                b.dst = {};
                b.dst.x = c - l;
                b.dst.y = f - h;
                b.dst.px = l;
                b.dst.py = h;
                var k = Math.round(Math.sqrt(Math.pow(b.dst.x, 2) + Math.pow(b.dst.y, 2)));
                b.dst.ax = b.dst.x / k;
                b.dst.ay = b.dst.y / k;
                var n = 0,
                    q = k;
                0 == b.dst.x ? (n = h, q = f, b.dst.ay = 1, b.dst.py = 0) : 0 == b.dst.y && (n = l, q = c, b.dst.ax = 1, b.dst.px = 0);
                k = b.getTransitionSpeed(k);
                g && 1 >= g && (k *= g);
                b.bzscroll = 0 < k ? b.bzscroll ? b.bzscroll.update(q, k) : new BezierClass(n, q, k, 0, 1, 0, 1) : !1;
                if (!b.timer) {
                    (h == b.page.maxh && f >= b.page.maxh || l == b.page.maxw && c >= b.page.maxw) && b.checkContentSize();
                    var r = 1;
                    b.cancelAnimationFrame = !1;
                    b.timer = 1;
                    b.onscrollstart && !b.scrollrunning && b.onscrollstart.call(b, {
                        type: "scrollstart",
                        current: {
                            x: l,
                            y: h
                        },
                        request: {
                            x: c,
                            y: f
                        },
                        end: {
                            x: b.newscrollx,
                            y: b.newscrolly
                        },
                        speed: k
                    });
                    e();
                    (h == b.page.maxh && f >= h || l == b.page.maxw && c >= l) && b.checkContentSize();
                    b.noticeCursor()
                }
            }, this.cancelScroll = function() {
                b.timer && w(b.timer);
                b.timer = 0;
                b.bzscroll = !1;
                b.scrollrunning = !1;
                return b
            }) : (this.doScrollLeft = function(c, f) {
                var g = b.getScrollTop();
                b.doScrollPos(c, g, f)
            }, this.doScrollTop = function(c, f) {
                var g = b.getScrollLeft();
                b.doScrollPos(g, c, f)
            }, this.doScrollPos = function(c, f, g) {
                var e = c > b.page.maxw ? b.page.maxw : c;
                0 > e && (e = 0);
                var h = f > b.page.maxh ? b.page.maxh : f;
                0 > h && (h = 0);
                b.synched("scroll", function() {
                    b.setScrollTop(h);
                    b.setScrollLeft(e)
                })
            }, this.cancelScroll = function() {});
            this.doScrollBy = function(c, f) {
                var g = 0,
                    g = f ? Math.floor((b.scroll.y - c) * b.scrollratio.y) : (b.timer ? b.newscrolly : b.getScrollTop(!0)) - c;
                if (b.bouncescroll) {
                    var e = Math.round(b.view.h / 2);
                    g < -e ? g = -e : g > b.page.maxh + e && (g = b.page.maxh + e)
                }
                b.cursorfreezed = !1;
                py = b.getScrollTop(!0);
                if (0 > g && 0 >= py) return b.noticeCursor();
                if (g > b.page.maxh && py >= b.page.maxh) return b.checkContentSize(), b.noticeCursor();
                b.doScrollTop(g)
            };
            this.doScrollLeftBy = function(c, f) {
                var g = 0,
                    g = f ? Math.floor((b.scroll.x - c) * b.scrollratio.x) : (b.timer ? b.newscrollx : b.getScrollLeft(!0)) - c;
                if (b.bouncescroll) {
                    var e = Math.round(b.view.w / 2);
                    g < -e ? g = -e : g > b.page.maxw + e && (g = b.page.maxw + e)
                }
                b.cursorfreezed = !1;
                px = b.getScrollLeft(!0);
                if (0 > g && 0 >= px || g > b.page.maxw && px >= b.page.maxw) return b.noticeCursor();
                b.doScrollLeft(g)
            };
            this.doScrollTo = function(c, f) {
                f && Math.round(c * b.scrollratio.y);
                b.cursorfreezed = !1;
                b.doScrollTop(c)
            };
            this.checkContentSize = function() {
                var c = b.getContentSize();
                (c.h != b.page.h || c.w != b.page.w) && b.resize(!1, c)
            };
            b.onscroll = function(c) {
                b.rail.drag || b.cursorfreezed || b.synched("scroll", function() {
                    b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y));
                    b.railh && (b.scroll.x = Math.round(b.getScrollLeft() * (1 / b.scrollratio.x)));
                    b.noticeCursor()
                })
            };
            b.bind(b.docscroll, "scroll", b.onscroll);
            this.doZoomIn = function(c) {
                if (!b.zoomactive) {
                    b.zoomactive = !0;
                    b.zoomrestore = {
                        style: {}
                    };
                    var h = "position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),
                        g = b.win[0].style,
                        l;
                    for (l in h) {
                        var k = h[l];
                        b.zoomrestore.style[k] = "undefined" != typeof g[k] ? g[k] : ""
                    }
                    b.zoomrestore.style.width = b.win.css("width");
                    b.zoomrestore.style.height = b.win.css("height");
                    b.zoomrestore.padding = {
                        w: b.win.outerWidth() - b.win.width(),
                        h: b.win.outerHeight() -
                            b.win.height()
                    };
                    f.isios4 && (b.zoomrestore.scrollTop = e(window).scrollTop(), e(window).scrollTop(0));
                    b.win.css({
                        position: f.isios4 ? "absolute" : "fixed",
                        top: 0,
                        left: 0,
                        "z-index": x + 100,
                        margin: "0px"
                    });
                    h = b.win.css("backgroundColor");
                    ("" == h || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(h)) && b.win.css("backgroundColor", "#fff");
                    b.rail.css({
                        "z-index": x + 101
                    });
                    b.zoom.css({
                        "z-index": x + 102
                    });
                    b.zoom.css("backgroundPosition", "0px -18px");
                    b.resizeZoom();
                    b.onzoomin && b.onzoomin.call(b);
                    return b.cancelEvent(c)
                }
            };
            this.doZoomOut = function(c) {
                if (b.zoomactive) return b.zoomactive = !1, b.win.css("margin", ""), b.win.css(b.zoomrestore.style), f.isios4 && e(window).scrollTop(b.zoomrestore.scrollTop), b.rail.css({
                    "z-index": b.zindex
                }), b.zoom.css({
                    "z-index": b.zindex
                }), b.zoomrestore = !1, b.zoom.css("backgroundPosition", "0px 0px"), b.onResize(), b.onzoomout && b.onzoomout.call(b), b.cancelEvent(c)
            };
            this.doZoom = function(c) {
                return b.zoomactive ? b.doZoomOut(c) : b.doZoomIn(c)
            };
            this.resizeZoom = function() {
                if (b.zoomactive) {
                    var c = b.getScrollTop();
                    b.win.css({
                        width: e(window).width() -
                            b.zoomrestore.padding.w + "px",
                        height: e(window).height() - b.zoomrestore.padding.h + "px"
                    });
                    b.onResize();
                    b.setScrollTop(Math.min(b.page.maxh, c))
                }
            };
            this.init();
            e.nicescroll.push(this)
        },
        H = function(e) {
            var c = this;
            this.nc = e;
            this.steptime = this.lasttime = this.speedy = this.speedx = this.lasty = this.lastx = 0;
            this.snapy = this.snapx = !1;
            this.demuly = this.demulx = 0;
            this.lastscrolly = this.lastscrollx = -1;
            this.timer = this.chky = this.chkx = 0;
            this.time = function() {
                return +new Date
            };
            this.reset = function(e, l) {
                c.stop();
                var k = c.time();
                c.steptime = 0;
                c.lasttime = k;
                c.speedx = 0;
                c.speedy = 0;
                c.lastx = e;
                c.lasty = l;
                c.lastscrollx = -1;
                c.lastscrolly = -1
            };
            this.update = function(e, l) {
                var k = c.time();
                c.steptime = k - c.lasttime;
                c.lasttime = k;
                var k = l - c.lasty,
                    t = e - c.lastx,
                    b = c.nc.getScrollTop(),
                    q = c.nc.getScrollLeft(),
                    b = b + k,
                    q = q + t;
                c.snapx = 0 > q || q > c.nc.page.maxw;
                c.snapy = 0 > b || b > c.nc.page.maxh;
                c.speedx = t;
                c.speedy = k;
                c.lastx = e;
                c.lasty = l
            };
            this.stop = function() {
                c.nc.unsynched("domomentum2d");
                c.timer && clearTimeout(c.timer);
                c.timer = 0;
                c.lastscrollx = -1;
                c.lastscrolly = -1
            };
            this.doSnapy = function(e, l) {
                var k = !1;
                0 > l ? (l = 0, k = !0) : l > c.nc.page.maxh && (l = c.nc.page.maxh, k = !0);
                0 > e ? (e = 0, k = !0) : e > c.nc.page.maxw && (e = c.nc.page.maxw, k = !0);
                k && c.nc.doScrollPos(e, l, c.nc.opt.snapbackspeed)
            };
            this.doMomentum = function(e) {
                var l = c.time(),
                    k = e ? l + e : c.lasttime;
                e = c.nc.getScrollLeft();
                var t = c.nc.getScrollTop(),
                    b = c.nc.page.maxh,
                    q = c.nc.page.maxw;
                c.speedx = 0 < q ? Math.min(60, c.speedx) : 0;
                c.speedy = 0 < b ? Math.min(60, c.speedy) : 0;
                k = k && 50 >= l - k;
                if (0 > t || t > b || 0 > e || e > q) k = !1;
                e = c.speedx && k ? c.speedx : !1;
                if (c.speedy && k && c.speedy || e) {
                    var f = Math.max(16, c.steptime);
                    50 < f && (e = f / 50, c.speedx *= e, c.speedy *= e, f = 50);
                    c.demulxy = 0;
                    c.lastscrollx = c.nc.getScrollLeft();
                    c.chkx = c.lastscrollx;
                    c.lastscrolly = c.nc.getScrollTop();
                    c.chky = c.lastscrolly;
                    var r = c.lastscrollx,
                        u = c.lastscrolly,
                        d = function() {
                            var e = 600 < c.time() - l ? 0.04 : 0.02;
                            if (c.speedx && (r = Math.floor(c.lastscrollx - c.speedx * (1 - c.demulxy)), c.lastscrollx = r, 0 > r || r > q)) e = 0.1;
                            if (c.speedy && (u = Math.floor(c.lastscrolly - c.speedy * (1 - c.demulxy)), c.lastscrolly = u, 0 > u || u > b)) e = 0.1;
                            c.demulxy = Math.min(1, c.demulxy + e);
                            c.nc.synched("domomentum2d", function() {
                                c.speedx && (c.nc.getScrollLeft() != c.chkx && c.stop(), c.chkx = r, c.nc.setScrollLeft(r));
                                c.speedy && (c.nc.getScrollTop() != c.chky && c.stop(), c.chky = u, c.nc.setScrollTop(u));
                                c.timer || (c.nc.hideCursor(), c.doSnapy(r, u))
                            });
                            1 > c.demulxy ? c.timer = setTimeout(d, f) : (c.stop(), c.nc.hideCursor(), c.doSnapy(r, u))
                        };
                    d()
                } else c.doSnapy(c.nc.getScrollLeft(), c.nc.getScrollTop())
            }
        },
        A = e.fn.scrollTop;
    e.cssHooks.pageYOffset = {
        get: function(k, c, h) {
            return (c = e.data(k, "__nicescroll") || !1) && c.ishwscroll ? c.getScrollTop() : A.call(k)
        },
        set: function(k, c) {
            var h = e.data(k, "__nicescroll") || !1;
            h && h.ishwscroll ? h.setScrollTop(parseInt(c)) : A.call(k, c);
            return this
        }
    };
    e.fn.scrollTop = function(k) {
        if ("undefined" == typeof k) {
            var c = this[0] ? e.data(this[0], "__nicescroll") || !1 : !1;
            return c && c.ishwscroll ? c.getScrollTop() : A.call(this)
        }
        return this.each(function() {
            var c = e.data(this, "__nicescroll") || !1;
            c && c.ishwscroll ? c.setScrollTop(parseInt(k)) : A.call(e(this), k)
        })
    };
    var B = e.fn.scrollLeft;
    e.cssHooks.pageXOffset = {
        get: function(k, c, h) {
            return (c = e.data(k, "__nicescroll") || !1) && c.ishwscroll ? c.getScrollLeft() : B.call(k)
        },
        set: function(k, c) {
            var h = e.data(k, "__nicescroll") || !1;
            h && h.ishwscroll ? h.setScrollLeft(parseInt(c)) : B.call(k, c);
            return this
        }
    };
    e.fn.scrollLeft = function(k) {
        if ("undefined" == typeof k) {
            var c = this[0] ? e.data(this[0], "__nicescroll") || !1 : !1;
            return c && c.ishwscroll ? c.getScrollLeft() : B.call(this)
        }
        return this.each(function() {
            var c = e.data(this, "__nicescroll") || !1;
            c && c.ishwscroll ? c.setScrollLeft(parseInt(k)) : B.call(e(this), k)
        })
    };
    var C = function(k) {
        var c = this;
        this.length = 0;
        this.name = "nicescrollarray";
        this.each = function(e) {
            for (var h = 0; h < c.length; h++) e.call(c[h]);
            return c
        };
        this.push = function(e) {
            c[c.length] = e;
            c.length++
        };
        this.eq = function(e) {
            return c[e]
        };
        if (k)
            for (a = 0; a < k.length; a++) {
                var h = e.data(k[a], "__nicescroll") || !1;
                h && (this[this.length] = h, this.length++)
            }
        return this
    };
    (function(e, c, h) {
        for (var l = 0; l < c.length; l++) h(e, c[l])
    })(C.prototype, "show hide toggle onResize resize remove stop doScrollPos".split(" "), function(e, c) {
        e[c] = function() {
            var e = arguments;
            return this.each(function() {
                this[c].apply(this, e)
            })
        }
    });
    e.fn.getNiceScroll = function(k) {
        return "undefined" == typeof k ? new C(this) : e.data(this[k], "__nicescroll") || !1
    };
    e.extend(e.expr[":"], {
        nicescroll: function(k) {
            return e.data(k, "__nicescroll") ? !0 : !1
        }
    });
    e.fn.niceScroll = function(k, c) {
        "undefined" == typeof c && ("object" == typeof k && !("jquery" in k)) && (c = k, k = !1);
        var h = new C;
        "undefined" == typeof c && (c = {});
        k && (c.doc = e(k), c.win = e(this));
        var l = !("doc" in c);
        !l && !("win" in c) && (c.win = e(this));
        this.each(function() {
            var k = e(this).data("__nicescroll") || !1;
            k || (c.doc = l ? e(this) : c.doc, k = new N(c, e(this)), e(this).data("__nicescroll", k));
            h.push(k)
        });
        return 1 == h.length ? h[0] : h
    };
    window.NiceScroll = {
        getjQuery: function() {
            return e
        }
    };
    e.nicescroll || (e.nicescroll = new C, e.nicescroll.options = F)
})(jQuery);;
(function(window, document, undefined) {
    'use strict';
    var NAME = 'Parallax';
    var MAGIC_NUMBER = 30;
    var DEFAULTS = {
        relativeInput: false,
        clipRelativeInput: false,
        calibrationThreshold: 100,
        calibrationDelay: 500,
        supportDelay: 500,
        calibrateX: false,
        calibrateY: true,
        invertX: true,
        invertY: true,
        limitX: false,
        limitY: false,
        scalarX: 10.0,
        scalarY: 10.0,
        frictionX: 0.1,
        frictionY: 0.1,
        originX: 0.5,
        originY: 0.5
    };

    function Parallax(element, options) {
        this.element = element;
        this.layers = element.getElementsByClassName('layer');
        var data = {
            calibrateX: this.data(this.element, 'calibrate-x'),
            calibrateY: this.data(this.element, 'calibrate-y'),
            invertX: this.data(this.element, 'invert-x'),
            invertY: this.data(this.element, 'invert-y'),
            limitX: this.data(this.element, 'limit-x'),
            limitY: this.data(this.element, 'limit-y'),
            scalarX: this.data(this.element, 'scalar-x'),
            scalarY: this.data(this.element, 'scalar-y'),
            frictionX: this.data(this.element, 'friction-x'),
            frictionY: this.data(this.element, 'friction-y'),
            originX: this.data(this.element, 'origin-x'),
            originY: this.data(this.element, 'origin-y')
        };
        for (var key in data) {
            if (data[key] === null) delete data[key];
        }
        this.extend(this, DEFAULTS, options, data);
        this.calibrationTimer = null;
        this.calibrationFlag = true;
        this.enabled = false;
        this.depths = [];
        this.raf = null;
        this.bounds = null;
        this.ex = 0;
        this.ey = 0;
        this.ew = 0;
        this.eh = 0;
        this.ecx = 0;
        this.ecy = 0;
        this.erx = 0;
        this.ery = 0;
        this.cx = 0;
        this.cy = 0;
        this.ix = 0;
        this.iy = 0;
        this.mx = 0;
        this.my = 0;
        this.vx = 0;
        this.vy = 0;
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onDeviceOrientation = this.onDeviceOrientation.bind(this);
        this.onOrientationTimer = this.onOrientationTimer.bind(this);
        this.onCalibrationTimer = this.onCalibrationTimer.bind(this);
        this.onAnimationFrame = this.onAnimationFrame.bind(this);
        this.onWindowResize = this.onWindowResize.bind(this);
        this.initialise();
    }
    Parallax.prototype.extend = function() {
        if (arguments.length > 1) {
            var master = arguments[0];
            for (var i = 1, l = arguments.length; i < l; i++) {
                var object = arguments[i];
                for (var key in object) {
                    master[key] = object[key];
                }
            }
        }
    };
    Parallax.prototype.data = function(element, name) {
        return this.deserialize(element.getAttribute('data-' + name));
    };
    Parallax.prototype.deserialize = function(value) {
        if (value === "true") {
            return true;
        } else if (value === "false") {
            return false;
        } else if (value === "null") {
            return null;
        } else if (!isNaN(parseFloat(value)) && isFinite(value)) {
            return parseFloat(value);
        } else {
            return value;
        }
    };
    Parallax.prototype.camelCase = function(value) {
        return value.replace(/-+(.)?/g, function(match, character) {
            return character ? character.toUpperCase() : '';
        });
    };
    Parallax.prototype.transformSupport = function(value) {
        var element = document.createElement('div');
        var propertySupport = false;
        var propertyValue = null;
        var featureSupport = false;
        var cssProperty = null;
        var jsProperty = null;
        for (var i = 0, l = this.vendors.length; i < l; i++) {
            if (this.vendors[i] !== null) {
                cssProperty = this.vendors[i][0] + 'transform';
                jsProperty = this.vendors[i][1] + 'Transform';
            } else {
                cssProperty = 'transform';
                jsProperty = 'transform';
            }
            if (element.style[jsProperty] !== undefined) {
                propertySupport = true;
                break;
            }
        }
        switch (value) {
            case '2D':
                featureSupport = propertySupport;
                break;
            case '3D':
                if (propertySupport) {
                    var body = document.body || document.createElement('body');
                    var documentElement = document.documentElement;
                    var documentOverflow = documentElement.style.overflow;
                    if (!document.body) {
                        documentElement.style.overflow = 'hidden';
                        documentElement.appendChild(body);
                        body.style.overflow = 'hidden';
                        body.style.background = '';
                    }
                    body.appendChild(element);
                    element.style[jsProperty] = 'translate3d(1px,1px,1px)';
                    propertyValue = window.getComputedStyle(element).getPropertyValue(cssProperty);
                    featureSupport = propertyValue !== undefined && propertyValue.length > 0 && propertyValue !== "none";
                    documentElement.style.overflow = documentOverflow;
                    body.removeChild(element);
                }
                break;
        }
        return featureSupport;
    };
    Parallax.prototype.ww = null;
    Parallax.prototype.wh = null;
    Parallax.prototype.wcx = null;
    Parallax.prototype.wcy = null;
    Parallax.prototype.wrx = null;
    Parallax.prototype.wry = null;
    Parallax.prototype.portrait = null;
    Parallax.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);
    Parallax.prototype.vendors = [null, ['-webkit-', 'webkit'],
        ['-moz-', 'Moz'],
        ['-o-', 'O'],
        ['-ms-', 'ms']
    ];
    Parallax.prototype.motionSupport = !!window.DeviceMotionEvent;
    Parallax.prototype.orientationSupport = !!window.DeviceOrientationEvent;
    Parallax.prototype.orientationStatus = 0;
    Parallax.prototype.transform2DSupport = Parallax.prototype.transformSupport('2D');
    Parallax.prototype.transform3DSupport = Parallax.prototype.transformSupport('3D');
    Parallax.prototype.propertyCache = {};
    Parallax.prototype.initialise = function() {
        if (this.transform3DSupport) this.accelerate(this.element);
        var style = window.getComputedStyle(this.element);
        if (style.getPropertyValue('position') === 'static') {
            this.element.style.position = 'relative';
        }
        this.updateLayers();
        this.updateDimensions();
        this.enable();
        this.queueCalibration(this.calibrationDelay);
    };
    Parallax.prototype.updateLayers = function() {
        this.layers = this.element.getElementsByClassName('layer');
        this.depths = [];
        for (var i = 0, l = this.layers.length; i < l; i++) {
            var layer = this.layers[i];
            if (this.transform3DSupport) this.accelerate(layer);
            layer.style.position = i ? 'absolute' : 'relative';
            layer.style.display = 'block';
            layer.style.left = 0;
            layer.style.top = 0;
            this.depths.push(this.data(layer, 'depth') || 0);
        }
    };
    Parallax.prototype.updateDimensions = function() {
        this.ww = window.innerWidth;
        this.wh = window.innerHeight;
        this.wcx = this.ww * this.originX;
        this.wcy = this.wh * this.originY;
        this.wrx = Math.max(this.wcx, this.ww - this.wcx);
        this.wry = Math.max(this.wcy, this.wh - this.wcy);
    };
    Parallax.prototype.updateBounds = function() {
        this.bounds = this.element.getBoundingClientRect();
        this.ex = this.bounds.left;
        this.ey = this.bounds.top;
        this.ew = this.bounds.width;
        this.eh = this.bounds.height;
        this.ecx = this.ew * this.originX;
        this.ecy = this.eh * this.originY;
        this.erx = Math.max(this.ecx, this.ew - this.ecx);
        this.ery = Math.max(this.ecy, this.eh - this.ecy);
    };
    Parallax.prototype.queueCalibration = function(delay) {
        clearTimeout(this.calibrationTimer);
        this.calibrationTimer = setTimeout(this.onCalibrationTimer, delay);
    };
    Parallax.prototype.enable = function() {
        if (!this.enabled) {
            this.enabled = true;
            if (this.orientationSupport) {
                this.portrait = null;
                setTimeout(this.onOrientationTimer, this.supportDelay);
            } else {
                this.cx = 0;
                this.cy = 0;
                this.portrait = false;
                window.addEventListener('mousemove', this.onMouseMove);
            }
            window.addEventListener('resize', this.onWindowResize);
            this.raf = requestAnimationFrame(this.onAnimationFrame);
        }
    };
    Parallax.prototype.disable = function() {
        if (this.enabled) {
            this.enabled = false;
            if (this.orientationSupport) {
                window.removeEventListener('deviceorientation', this.onDeviceOrientation);
            } else {
                window.removeEventListener('mousemove', this.onMouseMove);
            }
            window.removeEventListener('resize', this.onWindowResize);
            cancelAnimationFrame(this.raf);
        }
    };
    Parallax.prototype.calibrate = function(x, y) {
        this.calibrateX = x === undefined ? this.calibrateX : x;
        this.calibrateY = y === undefined ? this.calibrateY : y;
    };
    Parallax.prototype.invert = function(x, y) {
        this.invertX = x === undefined ? this.invertX : x;
        this.invertY = y === undefined ? this.invertY : y;
    };
    Parallax.prototype.friction = function(x, y) {
        this.frictionX = x === undefined ? this.frictionX : x;
        this.frictionY = y === undefined ? this.frictionY : y;
    };
    Parallax.prototype.scalar = function(x, y) {
        this.scalarX = x === undefined ? this.scalarX : x;
        this.scalarY = y === undefined ? this.scalarY : y;
    };
    Parallax.prototype.limit = function(x, y) {
        this.limitX = x === undefined ? this.limitX : x;
        this.limitY = y === undefined ? this.limitY : y;
    };
    Parallax.prototype.origin = function(x, y) {
        this.originX = x === undefined ? this.originX : x;
        this.originY = y === undefined ? this.originY : y;
    };
    Parallax.prototype.clamp = function(value, min, max) {
        value = Math.max(value, min);
        value = Math.min(value, max);
        return value;
    };
    Parallax.prototype.css = function(element, property, value) {
        var jsProperty = this.propertyCache[property];
        if (!jsProperty) {
            for (var i = 0, l = this.vendors.length; i < l; i++) {
                if (this.vendors[i] !== null) {
                    jsProperty = this.camelCase(this.vendors[i][1] + '-' + property);
                } else {
                    jsProperty = property;
                }
                if (element.style[jsProperty] !== undefined) {
                    this.propertyCache[property] = jsProperty;
                    break;
                }
            }
        }
        element.style[jsProperty] = value;
    };
    Parallax.prototype.accelerate = function(element) {
        this.css(element, 'transform', 'translate3d(0,0,0)');
        this.css(element, 'transform-style', 'preserve-3d');
        this.css(element, 'backface-visibility', 'hidden');
    };
    Parallax.prototype.setPosition = function(element, x, y) {
        x += 'px';
        y += 'px';
        if (this.transform3DSupport) {
            this.css(element, 'transform', 'translate3d(' + x + ',' + y + ',0)');
        } else if (this.transform2DSupport) {
            this.css(element, 'transform', 'translate(' + x + ',' + y + ')');
        } else {
            element.style.left = x;
            element.style.top = y;
        }
    };
    Parallax.prototype.onOrientationTimer = function(event) {
        if (this.orientationSupport && this.orientationStatus === 0) {
            this.disable();
            this.orientationSupport = false;
            this.enable();
        }
    };
    Parallax.prototype.onCalibrationTimer = function(event) {
        this.calibrationFlag = true;
    };
    Parallax.prototype.onWindowResize = function(event) {
        this.updateDimensions();
    };
    Parallax.prototype.onAnimationFrame = function() {
        this.updateBounds();
        var dx = this.ix - this.cx;
        var dy = this.iy - this.cy;
        if ((Math.abs(dx) > this.calibrationThreshold) || (Math.abs(dy) > this.calibrationThreshold)) {
            this.queueCalibration(0);
        }
        if (this.portrait) {
            this.mx = this.calibrateX ? dy : this.iy;
            this.my = this.calibrateY ? dx : this.ix;
        } else {
            this.mx = this.calibrateX ? dx : this.ix;
            this.my = this.calibrateY ? dy : this.iy;
        }
        this.mx *= this.ew * (this.scalarX / 100);
        this.my *= this.eh * (this.scalarY / 100);
        if (!isNaN(parseFloat(this.limitX))) {
            this.mx = this.clamp(this.mx, -this.limitX, this.limitX);
        }
        if (!isNaN(parseFloat(this.limitY))) {
            this.my = this.clamp(this.my, -this.limitY, this.limitY);
        }
        this.vx += (this.mx - this.vx) * this.frictionX;
        this.vy += (this.my - this.vy) * this.frictionY;
        for (var i = 0, l = this.layers.length; i < l; i++) {
            var layer = this.layers[i];
            var depth = this.depths[i];
            var xOffset = this.vx * depth * (this.invertX ? -1 : 1);
            var yOffset = this.vy * depth * (this.invertY ? -1 : 1);
            this.setPosition(layer, xOffset, yOffset);
        }
        this.raf = requestAnimationFrame(this.onAnimationFrame);
    };
    Parallax.prototype.onDeviceOrientation = function(event) {
        if (!this.desktop && event.beta !== null && event.gamma !== null) {
            this.orientationStatus = 1;
            var x = (event.beta || 0) / MAGIC_NUMBER;
            var y = (event.gamma || 0) / MAGIC_NUMBER;
            var portrait = this.wh > this.ww;
            if (this.portrait !== portrait) {
                this.portrait = portrait;
                this.calibrationFlag = true;
            }
            if (this.calibrationFlag) {
                this.calibrationFlag = false;
                this.cx = x;
                this.cy = y;
            }
            this.ix = x;
            this.iy = y;
        }
    };
    Parallax.prototype.onMouseMove = function(event) {
        var clientX = event.clientX;
        var clientY = event.clientY;
        if (!this.orientationSupport && this.relativeInput) {
            if (this.clipRelativeInput) {
                clientX = Math.max(clientX, this.ex);
                clientX = Math.min(clientX, this.ex + this.ew);
                clientY = Math.max(clientY, this.ey);
                clientY = Math.min(clientY, this.ey + this.eh);
            }
            this.ix = (clientX - this.ex - this.ecx) / this.erx;
            this.iy = (clientY - this.ey - this.ecy) / this.ery;
        } else {
            this.ix = (clientX - this.wcx) / this.wrx;
            this.iy = (clientY - this.wcy) / this.wry;
        }
    };
    window[NAME] = Parallax;
})(window, document);;
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}());
/*!
 * Name : Just Another Parallax [Jarallax]
 * Version : 1.7.3
 * Author : _nK https://nkdev.info
 * GitHub : https://github.com/nk-o/jarallax
 */
! function(e) {
    "use strict";

    function t() {
        i = e.innerWidth || document.documentElement.clientWidth, a = e.innerHeight || document.documentElement.clientHeight
    }

    function n(e, t, n) {
        e.addEventListener ? e.addEventListener(t, n) : e.attachEvent("on" + t, function() {
            n.call(e)
        })
    }

    function o(n) {
        e.requestAnimationFrame(function() {
            "scroll" !== n.type && t();
            for (var e = 0, o = g.length; o > e; e++) "scroll" !== n.type && (g[e].coverImage(), g[e].clipContainer()), g[e].onScroll()
        })
    }
    Date.now || (Date.now = function() {
        return (new Date).getTime()
    }), e.requestAnimationFrame || ! function() {
        for (var t = ["webkit", "moz"], n = 0; n < t.length && !e.requestAnimationFrame; ++n) {
            var o = t[n];
            e.requestAnimationFrame = e[o + "RequestAnimationFrame"], e.cancelAnimationFrame = e[o + "CancelAnimationFrame"] || e[o + "CancelRequestAnimationFrame"]
        }
        if (/iP(ad|hone|od).*OS 6/.test(e.navigator.userAgent) || !e.requestAnimationFrame || !e.cancelAnimationFrame) {
            var i = 0;
            e.requestAnimationFrame = function(e) {
                var t = Date.now(),
                    n = Math.max(i + 16, t);
                return setTimeout(function() {
                    e(i = n)
                }, n - t)
            }, e.cancelAnimationFrame = clearTimeout
        }
    }();
    var i, a, r = function() {
            if (!e.getComputedStyle) return !1;
            var t, n = document.createElement("p"),
                o = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
            (document.body || document.documentElement).insertBefore(n, null);
            for (var i in o) "undefined" != typeof n.style[i] && (n.style[i] = "translate3d(1px,1px,1px)", t = e.getComputedStyle(n).getPropertyValue(o[i]));
            return (document.body || document.documentElement).removeChild(n), "undefined" != typeof t && t.length > 0 && "none" !== t
        }(),
        s = navigator.userAgent.toLowerCase().indexOf("android") > -1,
        l = /iPad|iPhone|iPod/.test(navigator.userAgent) && !e.MSStream,
        m = !!e.opera,
        c = /Edge\/\d+/.test(navigator.userAgent),
        p = /Trident.*rv[ :]*11\./.test(navigator.userAgent),
        u = !!Function("/*@cc_on return document.documentMode===10@*/")(),
        d = document.all && !e.atob;
    t();
    var g = [],
        f = function() {
            function e(e, n) {
                var o, i = this;
                if (i.$item = e, i.defaults = {
                        type: "scroll",
                        speed: .5,
                        imgSrc: null,
                        imgWidth: null,
                        imgHeight: null,
                        enableTransform: !0,
                        elementInViewport: null,
                        zIndex: -100,
                        noAndroid: !1,
                        noIos: !0,
                        onScroll: null,
                        onInit: null,
                        onDestroy: null,
                        onCoverImage: null
                    }, o = JSON.parse(i.$item.getAttribute("data-jarallax") || "{}"), i.options = i.extend({}, i.defaults, o, n), !(s && i.options.noAndroid || l && i.options.noIos)) {
                    i.options.speed = Math.min(2, Math.max(-1, parseFloat(i.options.speed)));
                    var a = i.options.elementInViewport;
                    a && "object" == typeof a && "undefined" != typeof a.length && (a = a[0]), !a instanceof Element && (a = null), i.options.elementInViewport = a, i.instanceID = t++, i.image = {
                        src: i.options.imgSrc || null,
                        $container: null,
                        $item: null,
                        width: i.options.imgWidth || null,
                        height: i.options.imgHeight || null,
                        useImgTag: l || s || m || p || u || c
                    }, i.initImg() && i.init()
                }
            }
            var t = 0;
            return e
        }();
    f.prototype.css = function(t, n) {
        if ("string" == typeof n) return e.getComputedStyle ? e.getComputedStyle(t).getPropertyValue(n) : t.style[n];
        n.transform && (n.WebkitTransform = n.MozTransform = n.transform);
        for (var o in n) t.style[o] = n[o];
        return t
    }, f.prototype.extend = function(e) {
        e = e || {};
        for (var t = 1; t < arguments.length; t++)
            if (arguments[t])
                for (var n in arguments[t]) arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
        return e
    }, f.prototype.initImg = function() {
        var e = this;
        return null === e.image.src && (e.image.src = e.css(e.$item, "background-image").replace(/^url\(['"]?/g, "").replace(/['"]?\)$/g, "")), !(!e.image.src || "none" === e.image.src)
    }, f.prototype.init = function() {
        function e() {
            t.coverImage(), t.clipContainer(), t.onScroll(!0), t.options.onInit && t.options.onInit.call(t), setTimeout(function() {
                t.$item && t.css(t.$item, {
                    "background-image": "none",
                    "background-attachment": "scroll",
                    "background-size": "auto"
                })
            }, 0)
        }
        var t = this,
            n = {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                pointerEvents: "none"
            },
            o = {
                position: "fixed"
            };
        t.$item.setAttribute("data-jarallax-original-styles", t.$item.getAttribute("style")), "static" === t.css(t.$item, "position") && t.css(t.$item, {
            position: "relative"
        }), "auto" === t.css(t.$item, "z-index") && t.css(t.$item, {
            zIndex: 0
        }), t.image.$container = document.createElement("div"), t.css(t.image.$container, n), t.css(t.image.$container, {
            visibility: "hidden",
            "z-index": t.options.zIndex
        }), t.image.$container.setAttribute("id", "jarallax-container-" + t.instanceID), t.$item.appendChild(t.image.$container), t.image.useImgTag && r && t.options.enableTransform ? (t.image.$item = document.createElement("img"), t.image.$item.setAttribute("src", t.image.src), o = t.extend({
            "max-width": "none"
        }, n, o)) : (t.image.$item = document.createElement("div"), o = t.extend({
            "background-position": "50% 50%",
            "background-size": "100% auto",
            "background-repeat": "no-repeat no-repeat",
            "background-image": 'url("' + t.image.src + '")'
        }, n, o)), d && (o.backgroundAttachment = "fixed"), t.parentWithTransform = 0;
        for (var i = t.$item; null !== i && i !== document && 0 === t.parentWithTransform;) {
            var a = t.css(i, "-webkit-transform") || t.css(i, "-moz-transform") || t.css(i, "transform");
            a && "none" !== a && (t.parentWithTransform = 1, t.css(t.image.$container, {
                transform: "translateX(0) translateY(0)"
            })), i = i.parentNode
        }
        t.css(t.image.$item, o), t.image.$container.appendChild(t.image.$item), t.image.width && t.image.height ? e() : t.getImageSize(t.image.src, function(n, o) {
            t.image.width = n, t.image.height = o, e()
        }), g.push(t)
    }, f.prototype.destroy = function() {
        for (var e = this, t = 0, n = g.length; n > t; t++)
            if (g[t].instanceID === e.instanceID) {
                g.splice(t, 1);
                break
            }
        var o = e.$item.getAttribute("data-jarallax-original-styles");
        e.$item.removeAttribute("data-jarallax-original-styles"), "null" === o ? e.$item.removeAttribute("style") : e.$item.setAttribute("style", o), e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles), e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax;
        for (var i in e) delete e[i]
    }, f.prototype.getImageSize = function(e, t) {
        if (e && t) {
            var n = new Image;
            n.onload = function() {
                t(n.width, n.height)
            }, n.src = e
        }
    }, f.prototype.clipContainer = function() {
        if (!d) {
            var e = this,
                t = e.image.$container.getBoundingClientRect(),
                n = t.width,
                o = t.height;
            if (!e.$clipStyles) {
                e.$clipStyles = document.createElement("style"), e.$clipStyles.setAttribute("type", "text/css"), e.$clipStyles.setAttribute("id", "#jarallax-clip-" + e.instanceID);
                var i = document.head || document.getElementsByTagName("head")[0];
                i.appendChild(e.$clipStyles)
            }
            var a = ["#jarallax-container-" + e.instanceID + " {", "   clip: rect(0 " + n + "px " + o + "px 0);", "   clip: rect(0, " + n + "px, " + o + "px, 0);", "}"].join("\n");
            e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = a : e.$clipStyles.innerHTML = a
        }
    }, f.prototype.coverImage = function() {
        var e = this;
        if (e.image.width && e.image.height) {
            var t = e.image.$container.getBoundingClientRect(),
                n = t.width,
                o = t.height,
                i = t.left,
                s = e.image.width,
                l = e.image.height,
                m = e.options.speed,
                c = "scroll" === e.options.type || "scroll-opacity" === e.options.type,
                p = 0,
                u = 0,
                d = o,
                g = 0,
                f = 0;
            c && (p = 0 > m ? m * Math.max(o, a) : m * (o + a), m > 1 ? d = Math.abs(p - a) : 0 > m ? d = p / m + Math.abs(p) : d += Math.abs(a - o) * (1 - m), p /= 2), u = d * s / l, n > u && (u = n, d = u * l / s), e.bgPosVerticalCenter = 0, !(c && a > d) || r && e.options.enableTransform || (e.bgPosVerticalCenter = (a - d) / 2, d = a), c ? (g = i + (n - u) / 2, f = (a - d) / 2) : (g = (n - u) / 2, f = (o - d) / 2), r && e.options.enableTransform && e.parentWithTransform && (g -= i), e.parallaxScrollDistance = p, e.css(e.image.$item, {
                width: u + "px",
                height: d + "px",
                marginLeft: g + "px",
                marginTop: f + "px"
            }), e.options.onCoverImage && e.options.onCoverImage.call(e)
        }
    }, f.prototype.isVisible = function() {
        return this.isElementInViewport || !1
    }, f.prototype.onScroll = function(e) {
        var t = this;
        if (t.image.width && t.image.height) {
            var n = t.$item.getBoundingClientRect(),
                o = n.top,
                s = n.height,
                l = {
                    position: "absolute",
                    visibility: "visible",
                    backgroundPosition: "50% 50%"
                },
                m = n;
            if (t.options.elementInViewport && (m = t.options.elementInViewport.getBoundingClientRect()), t.isElementInViewport = m.bottom >= 0 && m.right >= 0 && m.top <= a && m.left <= i, e ? 1 : t.isElementInViewport) {
                var c = Math.max(0, o),
                    p = Math.max(0, s + o),
                    u = Math.max(0, -o),
                    g = Math.max(0, o + s - a),
                    f = Math.max(0, s - (o + s - a)),
                    h = Math.max(0, -o + a - s),
                    y = 1 - 2 * (a - o) / (a + s),
                    v = 1;
                if (a > s ? v = 1 - (u || g) / s : a >= p ? v = p / a : a >= f && (v = f / a), ("opacity" === t.options.type || "scale-opacity" === t.options.type || "scroll-opacity" === t.options.type) && (l.transform = "translate3d(0, 0, 0)", l.opacity = v), "scale" === t.options.type || "scale-opacity" === t.options.type) {
                    var x = 1;
                    t.options.speed < 0 ? x -= t.options.speed * v : x += t.options.speed * (1 - v), l.transform = "scale(" + x + ") translate3d(0, 0, 0)"
                }
                if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) {
                    var b = t.parallaxScrollDistance * y;
                    r && t.options.enableTransform ? (t.parentWithTransform && (b -= o), l.transform = "translate3d(0, " + b + "px, 0)") : t.image.useImgTag ? l.top = b + "px" : (t.bgPosVerticalCenter && (b += t.bgPosVerticalCenter), l.backgroundPosition = "50% " + b + "px"), l.position = d ? "absolute" : "fixed"
                }
                t.css(t.image.$item, l), t.options.onScroll && t.options.onScroll.call(t, {
                    section: n,
                    beforeTop: c,
                    beforeTopEnd: p,
                    afterTop: u,
                    beforeBottom: g,
                    beforeBottomEnd: f,
                    afterBottom: h,
                    visiblePercent: v,
                    fromViewportCenter: y
                })
            }
        }
    }, n(e, "scroll", o), n(e, "resize", o), n(e, "orientationchange", o), n(e, "load", o);
    var h = function(e) {
        ("object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
        var t, n = arguments[1],
            o = Array.prototype.slice.call(arguments, 2),
            i = e.length,
            a = 0;
        for (a; i > a; a++)
            if ("object" == typeof n || "undefined" == typeof n ? e[a].jarallax || (e[a].jarallax = new f(e[a], n)) : e[a].jarallax && (t = e[a].jarallax[n].apply(e[a].jarallax, o)), "undefined" != typeof t) return t;
        return e
    };
    h.constructor = f;
    var y = e.jarallax;
    if (e.jarallax = h, e.jarallax.noConflict = function() {
            return e.jarallax = y, this
        }, "undefined" != typeof jQuery) {
        var v = function() {
            var t = arguments || [];
            Array.prototype.unshift.call(t, this);
            var n = h.apply(e, t);
            return "object" != typeof n ? n : this
        };
        v.constructor = f;
        var x = jQuery.fn.jarallax;
        jQuery.fn.jarallax = v, jQuery.fn.jarallax.noConflict = function() {
            return jQuery.fn.jarallax = x, this
        }
    }
    n(e, "DOMContentLoaded", function() {
        h(document.querySelectorAll("[data-jarallax], [data-jarallax-video]"))
    })
}(window);
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
! function() {
    "use strict";

    function t(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element) throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }
    var e = 0,
        i = {};
    t.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function(t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete i[this.key]
    }, t.prototype.disable = function() {
        return this.enabled = !1, this
    }, t.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function() {
        return this.group.next(this)
    }, t.prototype.previous = function() {
        return this.group.previous(this)
    }, t.invokeAll = function(t) {
        var e = [];
        for (var o in i) e.push(i[o]);
        for (var n = 0, r = e.length; r > n; n++) e[n][t]()
    }, t.destroyAll = function() {
        t.invokeAll("destroy")
    }, t.disableAll = function() {
        t.invokeAll("disable")
    }, t.enableAll = function() {
        t.Context.refreshAll();
        for (var e in i) i[e].enabled = !0;
        return this
    }, t.refreshAll = function() {
        t.Context.refreshAll()
    }, t.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(),
function() {
    "use strict";

    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    function e(t) {
        this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, n.windowContext || (n.windowContext = !0, n.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var i = 0,
        o = {},
        n = window.Waypoint,
        r = window.onload;
    e.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical),
            i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key])
    }, e.prototype.createThrottledResizeHandler = function() {
        function t() {
            e.handleResize(), e.didResize = !1
        }
        var e = this;
        this.adapter.on("resize.waypoints", function() {
            e.didResize || (e.didResize = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.createThrottledScrollHandler = function() {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function() {
            (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function() {
        n.Context.refreshAll()
    }, e.prototype.handleScroll = function() {
        var t = {},
            e = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var i in e) {
            var o = e[i],
                n = o.newScroll > o.oldScroll,
                r = n ? o.forward : o.backward;
            for (var s in this.waypoints[i]) {
                var a = this.waypoints[i][s];
                if (null !== a.triggerPoint) {
                    var l = o.oldScroll < a.triggerPoint,
                        h = o.newScroll >= a.triggerPoint,
                        p = l && h,
                        u = !l && !h;
                    (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group)
                }
            }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll
        }
    }, e.prototype.innerHeight = function() {
        return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight()
    }, e.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, e.prototype.innerWidth = function() {
        return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth()
    }, e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy()
    }, e.prototype.refresh = function() {
        var t, e = this.element == this.element.window,
            i = e ? void 0 : this.adapter.offset(),
            o = {};
        this.handleScroll(), t = {
            horizontal: {
                contextOffset: e ? 0 : i.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : i.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var r in t) {
            var s = t[r];
            for (var a in this.waypoints[r]) {
                var l, h, p, u, c, d = this.waypoints[r][a],
                    f = d.options.offset,
                    w = d.triggerPoint,
                    y = 0,
                    g = null == w;
                d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = Math.floor(y + l - f), h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group)
            }
        }
        return n.requestAnimationFrame(function() {
            for (var t in o) o[t].flushTriggers()
        }), this
    }, e.findOrCreateByElement = function(t) {
        return e.findByElement(t) || new e(t)
    }, e.refreshAll = function() {
        for (var t in o) o[t].refresh()
    }, e.findByElement = function(t) {
        return o[t.waypointContextKey]
    }, window.onload = function() {
        r && r(), e.refreshAll()
    }, n.requestAnimationFrame = function(e) {
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
        i.call(window, e)
    }, n.Context = e
}(),
function() {
    "use strict";

    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function i(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this
    }
    var o = {
            vertical: {},
            horizontal: {}
        },
        n = window.Waypoint;
    i.prototype.add = function(t) {
        this.waypoints.push(t)
    }, i.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, i.prototype.flushTriggers = function() {
        for (var i in this.triggerQueues) {
            var o = this.triggerQueues[i],
                n = "up" === i || "left" === i;
            o.sort(n ? e : t);
            for (var r = 0, s = o.length; s > r; r += 1) {
                var a = o[r];
                (a.options.continuous || r === o.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
            o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function(e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }, i.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t)
    }, i.prototype.remove = function(t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function() {
        return this.waypoints[0]
    }, i.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, i.findOrCreate = function(t) {
        return o[t.axis][t.name] || new i(t)
    }, n.Group = i
}(),
function() {
    "use strict";

    function t(t) {
        this.$element = e(t)
    }
    var e = window.jQuery,
        i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) {
        t.prototype[i] = function() {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, t)
        }
    }), e.each(["extend", "inArray", "isEmptyObject"], function(i, o) {
        t[o] = e[o]
    }), i.adapters.push({
        name: "jquery",
        Adapter: t
    }), i.Adapter = t
}(),
function() {
    "use strict";

    function t(t) {
        return function() {
            var i = [],
                o = arguments[0];
            return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function() {
                var n = t.extend({}, o, {
                    element: this
                });
                "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n))
            }), i
        }
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}();
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : t(e.$)
}(this, function(e) {
    "use strict";

    function t(e) {
        return "%" == e[e.length - 1]
    }

    function r(e) {
        var t = e.split(" ");
        if (1 !== t.length) return t.map(function(t) {
            switch (e) {
                case "center":
                    return "50%";
                case "top":
                case "left":
                    return "0";
                case "right":
                case "bottom":
                    return "100%";
                default:
                    return t
            }
        });
        switch (e) {
            case "center":
                return ["50%", "50%"];
            case "top":
                return ["50%", "0"];
            case "bottom":
                return ["50%", "100%"];
            case "left":
                return ["0", "50%"];
            case "right":
                return ["100%", "50%"];
            default:
                return [e, "50%"]
        }
    }

    function i(e, t, r) {
        function i(e, t) {
            var r = s.createShader(e);
            if (s.shaderSource(r, t), s.compileShader(r), !s.getShaderParameter(r, s.COMPILE_STATUS)) throw new Error("compile error: " + s.getShaderInfoLog(r));
            return r
        }
        var o = {};
        if (o.id = s.createProgram(), s.attachShader(o.id, i(s.VERTEX_SHADER, e)), s.attachShader(o.id, i(s.FRAGMENT_SHADER, t)), s.linkProgram(o.id), !s.getProgramParameter(o.id, s.LINK_STATUS)) throw new Error("link error: " + s.getProgramInfoLog(o.id));
        o.uniforms = {}, o.locations = {}, s.useProgram(o.id), s.enableVertexAttribArray(0);
        for (var n, a, u = /uniform (\w+) (\w+)/g, h = e + t; null != (n = u.exec(h));) a = n[2], o.locations[a] = s.getUniformLocation(o.id, a);
        return o
    }

    function o(e, t) {
        s.activeTexture(s.TEXTURE0 + (t || 0)), s.bindTexture(s.TEXTURE_2D, e)
    }

    function n(e) {
        var t = /url\(["']?([^"']*)["']?\)/.exec(e);
        return null == t ? null : t[1]
    }

    function a(e) {
        return e.match(/^data:/)
    }
    var s, u = (e = e && "default" in e ? e.default : e)(window),
        h = function() {
            function e(e, t, i) {
                var o = "OES_texture_" + e,
                    n = o + "_linear",
                    a = n in r,
                    s = [o];
                return a && s.push(n), {
                    type: t,
                    arrayType: i,
                    linearSupport: a,
                    extensions: s
                }
            }
            var t = document.createElement("canvas");
            if (!(s = t.getContext("webgl") || t.getContext("experimental-webgl"))) return null;
            var r = {};
            if (["OES_texture_float", "OES_texture_half_float", "OES_texture_float_linear", "OES_texture_half_float_linear"].forEach(function(e) {
                    var t = s.getExtension(e);
                    t && (r[e] = t)
                }), !r.OES_texture_float) return null;
            var i = [];
            i.push(e("float", s.FLOAT, Float32Array)), r.OES_texture_half_float && i.push(e("half_float", r.OES_texture_half_float.HALF_FLOAT_OES, null));
            var o = s.createTexture(),
                n = s.createFramebuffer();
            s.bindFramebuffer(s.FRAMEBUFFER, n), s.bindTexture(s.TEXTURE_2D, o), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, s.NEAREST), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, s.NEAREST), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE);
            for (var a = null, u = 0; u < i.length; u++)
                if (s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, 32, 32, 0, s.RGBA, i[u].type, null), s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, o, 0), s.checkFramebufferStatus(s.FRAMEBUFFER) === s.FRAMEBUFFER_COMPLETE) {
                    a = i[u];
                    break
                }
            return a
        }(),
        c = function(e, t) {
            try {
                return new ImageData(e, t)
            } catch (r) {
                return document.createElement("canvas").getContext("2d").createImageData(e, t)
            }
        }(32, 32);
    e("head").prepend("<style>.jquery-ripples { position: relative; z-index: 0; }</style>");
    var d = function(t, r) {
        function i() {
            o.destroyed || (o.step(), requestAnimationFrame(i))
        }
        var o = this;
        this.$el = e(t), this.interactive = r.interactive, this.resolution = r.resolution, this.textureDelta = new Float32Array([1 / this.resolution, 1 / this.resolution]), this.perturbance = r.perturbance, this.dropRadius = r.dropRadius, this.crossOrigin = r.crossOrigin, this.imageUrl = r.imageUrl;
        var n = document.createElement("canvas");
        n.width = this.$el.innerWidth(), n.height = this.$el.innerHeight(), this.canvas = n, this.$canvas = e(n), this.$canvas.css({
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: -1
        }), this.$el.addClass("jquery-ripples").append(n), this.context = s = n.getContext("webgl") || n.getContext("experimental-webgl"), h.extensions.forEach(function(e) {
            s.getExtension(e)
        }), e(window).on("resize", function() {
            o.updateSize()
        }), this.textures = [], this.framebuffers = [], this.bufferWriteIndex = 0, this.bufferReadIndex = 1;
        for (var a = h.arrayType, u = a ? new a(this.resolution * this.resolution * 4) : null, c = 0; c < 2; c++) {
            var d = s.createTexture(),
                f = s.createFramebuffer();
            s.bindFramebuffer(s.FRAMEBUFFER, f), s.bindTexture(s.TEXTURE_2D, d), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, h.linearSupport ? s.LINEAR : s.NEAREST), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, h.linearSupport ? s.LINEAR : s.NEAREST), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE), s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, this.resolution, this.resolution, 0, s.RGBA, h.type, u), s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, d, 0), this.textures.push(d), this.framebuffers.push(f)
        }
        this.quad = s.createBuffer(), s.bindBuffer(s.ARRAY_BUFFER, this.quad), s.bufferData(s.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), s.STATIC_DRAW), this.initShaders(), this.initTexture(), this.setTransparentTexture(), this.loadImage(), s.clearColor(0, 0, 0, 0), s.blendFunc(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA), this.visible = !0, this.running = !0, this.inited = !0, this.destroyed = !1, this.setupPointerEvents(), requestAnimationFrame(i)
    };
    d.DEFAULTS = {
        imageUrl: null,
        resolution: 256,
        dropRadius: 20,
        perturbance: .03,
        interactive: !0,
        crossOrigin: ""
    }, d.prototype = {
        setupPointerEvents: function() {
            function e() {
                return r.visible && r.running && r.interactive
            }

            function t(t, i) {
                e() && r.dropAtPointer(t, r.dropRadius * (i ? 1.5 : 1), i ? .14 : .01)
            }
            var r = this;
            this.$el.on("mousemove.ripples", function(e) {
                t(e)
            }).on("touchmove.ripples, touchstart.ripples", function(e) {
                for (var r = e.originalEvent.changedTouches, i = 0; i < r.length; i++) t(r[i])
            }).on("mousedown.ripples", function(e) {
                t(e, !0)
            })
        },
        loadImage: function() {
            var e = this;
            s = this.context;
            var t = this.imageUrl || n(this.originalCssBackgroundImage) || n(this.$el.css("backgroundImage"));
            if (t != this.imageSource)
                if (this.imageSource = t, this.imageSource) {
                    var r = new Image;
                    r.onload = function() {
                        function t(e) {
                            return 0 == (e & e - 1)
                        }
                        s = e.context;
                        var i = t(r.width) && t(r.height) ? s.REPEAT : s.CLAMP_TO_EDGE;
                        s.bindTexture(s.TEXTURE_2D, e.backgroundTexture), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, i), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, i), s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, s.RGBA, s.UNSIGNED_BYTE, r), e.backgroundWidth = r.width, e.backgroundHeight = r.height, e.hideCssBackground()
                    }, r.onerror = function() {
                        s = e.context, e.setTransparentTexture()
                    }, r.crossOrigin = a(this.imageSource) ? null : this.crossOrigin, r.src = this.imageSource
                } else this.setTransparentTexture()
        },
        step: function() {
            s = this.context, this.visible && (this.computeTextureBoundaries(), this.running && this.update(), this.render())
        },
        drawQuad: function() {
            s.bindBuffer(s.ARRAY_BUFFER, this.quad), s.vertexAttribPointer(0, 2, s.FLOAT, !1, 0, 0), s.drawArrays(s.TRIANGLE_FAN, 0, 4)
        },
        render: function() {
            s.bindFramebuffer(s.FRAMEBUFFER, null), s.viewport(0, 0, this.canvas.width, this.canvas.height), s.enable(s.BLEND), s.clear(s.COLOR_BUFFER_BIT | s.DEPTH_BUFFER_BIT), s.useProgram(this.renderProgram.id), o(this.backgroundTexture, 0), o(this.textures[0], 1), s.uniform1f(this.renderProgram.locations.perturbance, this.perturbance), s.uniform2fv(this.renderProgram.locations.topLeft, this.renderProgram.uniforms.topLeft), s.uniform2fv(this.renderProgram.locations.bottomRight, this.renderProgram.uniforms.bottomRight), s.uniform2fv(this.renderProgram.locations.containerRatio, this.renderProgram.uniforms.containerRatio), s.uniform1i(this.renderProgram.locations.samplerBackground, 0), s.uniform1i(this.renderProgram.locations.samplerRipples, 1), this.drawQuad(), s.disable(s.BLEND)
        },
        update: function() {
            s.viewport(0, 0, this.resolution, this.resolution), s.bindFramebuffer(s.FRAMEBUFFER, this.framebuffers[this.bufferWriteIndex]), o(this.textures[this.bufferReadIndex]), s.useProgram(this.updateProgram.id), this.drawQuad(), this.swapBufferIndices()
        },
        swapBufferIndices: function() {
            this.bufferWriteIndex = 1 - this.bufferWriteIndex, this.bufferReadIndex = 1 - this.bufferReadIndex
        },
        computeTextureBoundaries: function() {
            var e, i = this.$el.css("background-size"),
                o = this.$el.css("background-attachment"),
                n = r(this.$el.css("background-position"));
            if ("fixed" == o ? ((e = {
                    left: window.pageXOffset,
                    top: window.pageYOffset
                }).width = u.width(), e.height = u.height()) : ((e = this.$el.offset()).width = this.$el.innerWidth(), e.height = this.$el.innerHeight()), "cover" == i) var a = Math.max(e.width / this.backgroundWidth, e.height / this.backgroundHeight),
                s = this.backgroundWidth * a,
                h = this.backgroundHeight * a;
            else if ("contain" == i) var a = Math.min(e.width / this.backgroundWidth, e.height / this.backgroundHeight),
                s = this.backgroundWidth * a,
                h = this.backgroundHeight * a;
            else {
                var s = (i = i.split(" "))[0] || "",
                    h = i[1] || s;
                t(s) ? s = e.width * parseFloat(s) / 100 : "auto" != s && (s = parseFloat(s)), t(h) ? h = e.height * parseFloat(h) / 100 : "auto" != h && (h = parseFloat(h)), "auto" == s && "auto" == h ? (s = this.backgroundWidth, h = this.backgroundHeight) : ("auto" == s && (s = this.backgroundWidth * (h / this.backgroundHeight)), "auto" == h && (h = this.backgroundHeight * (s / this.backgroundWidth)))
            }
            var c = n[0],
                d = n[1];
            c = t(c) ? e.left + (e.width - s) * parseFloat(c) / 100 : e.left + parseFloat(c), d = t(d) ? e.top + (e.height - h) * parseFloat(d) / 100 : e.top + parseFloat(d);
            var f = this.$el.offset();
            this.renderProgram.uniforms.topLeft = new Float32Array([(f.left - c) / s, (f.top - d) / h]), this.renderProgram.uniforms.bottomRight = new Float32Array([this.renderProgram.uniforms.topLeft[0] + this.$el.innerWidth() / s, this.renderProgram.uniforms.topLeft[1] + this.$el.innerHeight() / h]);
            var l = Math.max(this.canvas.width, this.canvas.height);
            this.renderProgram.uniforms.containerRatio = new Float32Array([this.canvas.width / l, this.canvas.height / l])
        },
        initShaders: function() {
            var e = ["attribute vec2 vertex;", "varying vec2 coord;", "void main() {", "coord = vertex * 0.5 + 0.5;", "gl_Position = vec4(vertex, 0.0, 1.0);", "}"].join("\n");
            this.dropProgram = i(e, ["precision highp float;", "const float PI = 3.141592653589793;", "uniform sampler2D texture;", "uniform vec2 center;", "uniform float radius;", "uniform float strength;", "varying vec2 coord;", "void main() {", "vec4 info = texture2D(texture, coord);", "float drop = max(0.0, 1.0 - length(center * 0.5 + 0.5 - coord) / radius);", "drop = 0.5 - cos(drop * PI) * 0.5;", "info.r += drop * strength;", "gl_FragColor = info;", "}"].join("\n")), this.updateProgram = i(e, ["precision highp float;", "uniform sampler2D texture;", "uniform vec2 delta;", "varying vec2 coord;", "void main() {", "vec4 info = texture2D(texture, coord);", "vec2 dx = vec2(delta.x, 0.0);", "vec2 dy = vec2(0.0, delta.y);", "float average = (", "texture2D(texture, coord - dx).r +", "texture2D(texture, coord - dy).r +", "texture2D(texture, coord + dx).r +", "texture2D(texture, coord + dy).r", ") * 0.25;", "info.g += (average - info.r) * 2.0;", "info.g *= 0.995;", "info.r += info.g;", "gl_FragColor = info;", "}"].join("\n")), s.uniform2fv(this.updateProgram.locations.delta, this.textureDelta), this.renderProgram = i(["precision highp float;", "attribute vec2 vertex;", "uniform vec2 topLeft;", "uniform vec2 bottomRight;", "uniform vec2 containerRatio;", "varying vec2 ripplesCoord;", "varying vec2 backgroundCoord;", "void main() {", "backgroundCoord = mix(topLeft, bottomRight, vertex * 0.5 + 0.5);", "backgroundCoord.y = 1.0 - backgroundCoord.y;", "ripplesCoord = vec2(vertex.x, -vertex.y) * containerRatio * 0.5 + 0.5;", "gl_Position = vec4(vertex.x, -vertex.y, 0.0, 1.0);", "}"].join("\n"), ["precision highp float;", "uniform sampler2D samplerBackground;", "uniform sampler2D samplerRipples;", "uniform vec2 delta;", "uniform float perturbance;", "varying vec2 ripplesCoord;", "varying vec2 backgroundCoord;", "void main() {", "float height = texture2D(samplerRipples, ripplesCoord).r;", "float heightX = texture2D(samplerRipples, vec2(ripplesCoord.x + delta.x, ripplesCoord.y)).r;", "float heightY = texture2D(samplerRipples, vec2(ripplesCoord.x, ripplesCoord.y + delta.y)).r;", "vec3 dx = vec3(delta.x, heightX - height, 0.0);", "vec3 dy = vec3(0.0, heightY - height, delta.y);", "vec2 offset = -normalize(cross(dy, dx)).xz;", "float specular = pow(max(0.0, dot(offset, normalize(vec2(-0.6, 1.0)))), 4.0);", "gl_FragColor = texture2D(samplerBackground, backgroundCoord + offset * perturbance) + specular;", "}"].join("\n")), s.uniform2fv(this.renderProgram.locations.delta, this.textureDelta)
        },
        initTexture: function() {
            this.backgroundTexture = s.createTexture(), s.bindTexture(s.TEXTURE_2D, this.backgroundTexture), s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, 1), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, s.LINEAR), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, s.LINEAR)
        },
        setTransparentTexture: function() {
            s.bindTexture(s.TEXTURE_2D, this.backgroundTexture), s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, s.RGBA, s.UNSIGNED_BYTE, c)
        },
        hideCssBackground: function() {
            var e = this.$el[0].style.backgroundImage;
            "none" != e && (this.originalInlineCss = e, this.originalCssBackgroundImage = this.$el.css("backgroundImage"), this.$el.css("backgroundImage", "none"))
        },
        restoreCssBackground: function() {
            this.$el.css("backgroundImage", this.originalInlineCss || "")
        },
        dropAtPointer: function(e, t, r) {
            var i = parseInt(this.$el.css("border-left-width")) || 0,
                o = parseInt(this.$el.css("border-top-width")) || 0;
            this.drop(e.pageX - this.$el.offset().left - i, e.pageY - this.$el.offset().top - o, t, r)
        },
        drop: function(e, t, r, i) {
            s = this.context;
            var n = this.$el.innerWidth(),
                a = this.$el.innerHeight(),
                u = Math.max(n, a);
            r /= u;
            var h = new Float32Array([(2 * e - n) / u, (a - 2 * t) / u]);
            s.viewport(0, 0, this.resolution, this.resolution), s.bindFramebuffer(s.FRAMEBUFFER, this.framebuffers[this.bufferWriteIndex]), o(this.textures[this.bufferReadIndex]), s.useProgram(this.dropProgram.id), s.uniform2fv(this.dropProgram.locations.center, h), s.uniform1f(this.dropProgram.locations.radius, r), s.uniform1f(this.dropProgram.locations.strength, i), this.drawQuad(), this.swapBufferIndices()
        },
        updateSize: function() {
            var e = this.$el.innerWidth(),
                t = this.$el.innerHeight();
            e == this.canvas.width && t == this.canvas.height || (this.canvas.width = e, this.canvas.height = t)
        },
        destroy: function() {
            this.$el.off(".ripples").removeClass("jquery-ripples").removeData("ripples"), this.$canvas.remove(), this.restoreCssBackground(), this.destroyed = !0
        },
        show: function() {
            this.visible = !0, this.$canvas.show(), this.hideCssBackground()
        },
        hide: function() {
            this.visible = !1, this.$canvas.hide(), this.restoreCssBackground()
        },
        pause: function() {
            this.running = !1
        },
        play: function() {
            this.running = !0
        },
        set: function(e, t) {
            switch (e) {
                case "dropRadius":
                case "perturbance":
                case "interactive":
                case "crossOrigin":
                    this[e] = t;
                    break;
                case "imageUrl":
                    this.imageUrl = t, this.loadImage()
            }
        }
    };
    var f = e.fn.ripples;
    e.fn.ripples = function(t) {
        if (!h) throw new Error("Your browser does not support WebGL, the OES_texture_float extension or rendering to floating point textures.");
        var r = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : void 0;
        return this.each(function() {
            var i = e(this),
                o = i.data("ripples"),
                n = e.extend({}, d.DEFAULTS, i.data(), "object" == typeof t && t);
            (o || "string" != typeof t) && (o ? "string" == typeof t && d.prototype[t].apply(o, r) : i.data("ripples", o = new d(this, n)))
        })
    }, e.fn.ripples.Constructor = d, e.fn.ripples.noConflict = function() {
        return e.fn.ripples = f, this
    }
});
/*!
 * mgGlitch : little jquery helper to glitch everything
 * (c) 2016 Hadrien Mongouachon
 * MIT Licensed.
 *
 * Author URI: http://hmongouachon.com
 * Plugin URI: http://hmongouachon.com
 * Date : 06/2016
 * Version: 1.0.0
 */
! function(t, e, s, i) {
    "use strict";

    function n(e, s) {
        this.element = e, this.settings = t.extend({}, a, s), this._defaults = a, this._name = r, this.init()
    }
    var r = "mgGlitch",
        a = {
            destroy: !1,
            glitch: !0,
            scale: !0,
            blend: !0,
            blendModeType: "hue",
            glitch1TimeMin: 600,
            glitch1TimeMax: 900,
            glitch2TimeMin: 10,
            glitch2TimeMax: 115,
            zIndexStart: 5
        };
    t.extend(n.prototype, {
        init: function() {
            this.glitch()
        },
        glitch: function() {
            function e(t, e) {
                return Math.floor(Math.random() * (e - t + 1)) + t
            }

            function s() {
                var i = e(10, 1900),
                    n = 9999,
                    a = e(10, 1300),
                    o = 0,
                    h = e(0, 16),
                    f = e(0, 16),
                    d = e(c, l);
                t(r).css({
                    clip: "rect(" + i + "px, " + n + "px, " + a + "px," + o + "px)",
                    right: f,
                    left: h
                }), setTimeout(s, d)
            }

            function i() {
                var s = e(10, 1900),
                    n = 9999,
                    c = e(10, 1300),
                    l = 0,
                    f = e(0, 40),
                    d = e(0, 40),
                    m = e(o, h);
                if (a === !0) var x = (Math.random() * (1.1 - .9) + .9).toFixed(2);
                else if (a === !1) var x = 1;
                t(r).next().css({
                    clip: "rect(" + s + "px, " + n + "px, " + c + "px," + l + "px)",
                    left: f,
                    right: d,
                    "-webkit-transform": "scale(" + x + ")",
                    "-ms-transform": "scale(" + x + ")",
                    transform: "scale(" + x + ")"
                }), setTimeout(i, m)
            }

            function n() {
                var s = e(10, 1900),
                    i = 9999,
                    c = e(10, 1300),
                    l = 0,
                    f = e(0, 40),
                    d = e(0, 40),
                    m = e(o, h);
                if (a === !0) var x = (Math.random() * (1.1 - .9) + .9).toFixed(2);
                else if (a === !1) var x = 1;
                t(r).next().next().css({
                    clip: "rect(" + s + "px, " + i + "px, " + c + "px," + l + "px)",
                    left: f,
                    right: d,
                    "-webkit-transform": "scale(" + x + ")",
                    "-ms-transform": "scale(" + x + ")",
                    transform: "scale(" + x + ")"
                }), setTimeout(n, m)
            }
            var r = this.element,
                a = this.settings.scale,
                c = this.settings.glitch1TimeMin,
                l = this.settings.glitch1TimeMax,
                o = this.settings.glitch2TimeMin,
                h = this.settings.glitch2TimeMax,
                f = this.settings.zIndexStart;
            if (this.settings.destroy === !0)(t(r).hasClass("el-front-1") || t(r).hasClass("front-3") || t(r).hasClass("front-2")) && t(".front-1, .front-2, .front-3").remove(), t(".back").removeClass("back");
            else if (this.settings.destroy === !1) {
                var d = t(r).clone();
                if (d.insertBefore(r).addClass("back").css({
                        "z-index": f
                    }), this.settings.blend === !0) {
                    var d = t(r).clone();
                    d.insertAfter(r).addClass("front-3").css({
                        "z-index": f + 3,
                        "mix-blend-mode": this.settings.blendModeType
                    }), n()
                }
                if (this.settings.glitch === !0) {
                    var d = t(r).clone();
                    d.insertAfter(r).addClass("front-2").css({
                        "z-index": f + 2
                    }), t(".back").next().addClass("front-1").css({
                        "z-index": f + 1
                    }), s(), i()
                }
            }
        }
    }), t.fn[r] = function(t) {
        return this.each(function() {
            new n(this, t)
        })
    }
}(jQuery, window, document);
if ($('#particles-js').length) {
    function hexToRgb(e) {
        var a = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        e = e.replace(a, function(e, a, t, i) {
            return a + a + t + t + i + i
        });
        var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return t ? {
            r: parseInt(t[1], 16),
            g: parseInt(t[2], 16),
            b: parseInt(t[3], 16)
        } : null
    }

    function clamp(e, a, t) {
        return Math.min(Math.max(e, a), t)
    }

    function isInArray(e, a) {
        return a.indexOf(e) > -1
    }
    var pJS = function(e, a) {
        var t = document.querySelector("#" + e + " > .particles-js-canvas-el");
        this.pJS = {
            canvas: {
                el: t,
                w: t.offsetWidth,
                h: t.offsetHeight
            },
            particles: {
                number: {
                    value: 400,
                    density: {
                        enable: !0,
                        value_area: 800
                    }
                },
                color: {
                    value: "#fff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#ff0000"
                    },
                    polygon: {
                        nb_sides: 5
                    },
                    image: {
                        src: "",
                        width: 100,
                        height: 100
                    }
                },
                opacity: {
                    value: 1,
                    random: !1,
                    anim: {
                        enable: !1,
                        speed: 2,
                        opacity_min: 0,
                        sync: !1
                    }
                },
                size: {
                    value: 20,
                    random: !1,
                    anim: {
                        enable: !1,
                        speed: 20,
                        size_min: 0,
                        sync: !1
                    }
                },
                line_linked: {
                    enable: !0,
                    distance: 100,
                    color: "#fff",
                    opacity: 1,
                    width: 1
                },
                move: {
                    enable: !0,
                    speed: 2,
                    direction: "none",
                    random: !1,
                    straight: !1,
                    out_mode: "out",
                    bounce: !1,
                    attract: {
                        enable: !1,
                        rotateX: 3e3,
                        rotateY: 3e3
                    }
                },
                array: []
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: !0,
                        mode: "grab"
                    },
                    onclick: {
                        enable: !0,
                        mode: "push"
                    },
                    resize: !0
                },
                modes: {
                    grab: {
                        distance: 100,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 200,
                        size: 80,
                        duration: .4
                    },
                    repulse: {
                        distance: 200,
                        duration: .4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                },
                mouse: {}
            },
            retina_detect: !1,
            fn: {
                interact: {},
                modes: {},
                vendors: {}
            },
            tmp: {}
        };
        var i = this.pJS;
        a && Object.deepExtend(i, a), i.tmp.obj = {
            size_value: i.particles.size.value,
            size_anim_speed: i.particles.size.anim.speed,
            move_speed: i.particles.move.speed,
            line_linked_distance: i.particles.line_linked.distance,
            line_linked_width: i.particles.line_linked.width,
            mode_grab_distance: i.interactivity.modes.grab.distance,
            mode_bubble_distance: i.interactivity.modes.bubble.distance,
            mode_bubble_size: i.interactivity.modes.bubble.size,
            mode_repulse_distance: i.interactivity.modes.repulse.distance
        }, i.fn.retinaInit = function() {
            i.retina_detect && window.devicePixelRatio > 1 ? (i.canvas.pxratio = window.devicePixelRatio, i.tmp.retina = !0) : (i.canvas.pxratio = 1, i.tmp.retina = !1), i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio, i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio, i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio, i.particles.size.anim.speed = i.tmp.obj.size_anim_speed * i.canvas.pxratio, i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio, i.particles.line_linked.distance = i.tmp.obj.line_linked_distance * i.canvas.pxratio, i.interactivity.modes.grab.distance = i.tmp.obj.mode_grab_distance * i.canvas.pxratio, i.interactivity.modes.bubble.distance = i.tmp.obj.mode_bubble_distance * i.canvas.pxratio, i.particles.line_linked.width = i.tmp.obj.line_linked_width * i.canvas.pxratio, i.interactivity.modes.bubble.size = i.tmp.obj.mode_bubble_size * i.canvas.pxratio, i.interactivity.modes.repulse.distance = i.tmp.obj.mode_repulse_distance * i.canvas.pxratio
        }, i.fn.canvasInit = function() {
            i.canvas.ctx = i.canvas.el.getContext("2d")
        }, i.fn.canvasSize = function() {
            i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i && i.interactivity.events.resize && window.addEventListener("resize", function() {
                i.canvas.w = i.canvas.el.offsetWidth, i.canvas.h = i.canvas.el.offsetHeight, i.tmp.retina && (i.canvas.w *= i.canvas.pxratio, i.canvas.h *= i.canvas.pxratio), i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i.particles.move.enable || (i.fn.particlesEmpty(), i.fn.particlesCreate(), i.fn.particlesDraw(), i.fn.vendors.densityAutoParticles()), i.fn.vendors.densityAutoParticles()
            })
        }, i.fn.canvasPaint = function() {
            i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h)
        }, i.fn.canvasClear = function() {
            i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h)
        }, i.fn.particle = function(e, a, t) {
            if (this.radius = (i.particles.size.random ? Math.random() : 1) * i.particles.size.value, i.particles.size.anim.enable && (this.size_status = !1, this.vs = i.particles.size.anim.speed / 100, i.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = t ? t.x : Math.random() * i.canvas.w, this.y = t ? t.y : Math.random() * i.canvas.h, this.x > i.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > i.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), i.particles.move.bounce && i.fn.vendors.checkOverlap(this, t), this.color = {}, "object" == typeof e.value)
                if (e.value instanceof Array) {
                    var s = e.value[Math.floor(Math.random() * i.particles.color.value.length)];
                    this.color.rgb = hexToRgb(s)
                } else void 0 != e.value.r && void 0 != e.value.g && void 0 != e.value.b && (this.color.rgb = {
                    r: e.value.r,
                    g: e.value.g,
                    b: e.value.b
                }), void 0 != e.value.h && void 0 != e.value.s && void 0 != e.value.l && (this.color.hsl = {
                    h: e.value.h,
                    s: e.value.s,
                    l: e.value.l
                });
            else "random" == e.value ? this.color.rgb = {
                r: Math.floor(256 * Math.random()) + 0,
                g: Math.floor(256 * Math.random()) + 0,
                b: Math.floor(256 * Math.random()) + 0
            } : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value));
            this.opacity = (i.particles.opacity.random ? Math.random() : 1) * i.particles.opacity.value, i.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = i.particles.opacity.anim.speed / 100, i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
            var n = {};
            switch (i.particles.move.direction) {
                case "top":
                    n = {
                        x: 0,
                        y: -1
                    };
                    break;
                case "top-right":
                    n = {
                        x: .5,
                        y: -.5
                    };
                    break;
                case "right":
                    n = {
                        x: 1,
                        y: -0
                    };
                    break;
                case "bottom-right":
                    n = {
                        x: .5,
                        y: .5
                    };
                    break;
                case "bottom":
                    n = {
                        x: 0,
                        y: 1
                    };
                    break;
                case "bottom-left":
                    n = {
                        x: -.5,
                        y: 1
                    };
                    break;
                case "left":
                    n = {
                        x: -1,
                        y: 0
                    };
                    break;
                case "top-left":
                    n = {
                        x: -.5,
                        y: -.5
                    };
                    break;
                default:
                    n = {
                        x: 0,
                        y: 0
                    }
            }
            i.particles.move.straight ? (this.vx = n.x, this.vy = n.y, i.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = n.x + Math.random() - .5, this.vy = n.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
            var r = i.particles.shape.type;
            if ("object" == typeof r) {
                if (r instanceof Array) {
                    var c = r[Math.floor(Math.random() * r.length)];
                    this.shape = c
                }
            } else this.shape = r;
            if ("image" == this.shape) {
                var o = i.particles.shape;
                this.img = {
                    src: o.image.src,
                    ratio: o.image.width / o.image.height
                }, this.img.ratio || (this.img.ratio = 1), "svg" == i.tmp.img_type && void 0 != i.tmp.source_svg && (i.fn.vendors.createSvgImg(this), i.tmp.pushing && (this.img.loaded = !1))
            }
        }, i.fn.particle.prototype.draw = function() {
            function e() {
                i.canvas.ctx.drawImage(r, a.x - t, a.y - t, 2 * t, 2 * t / a.img.ratio)
            }
            var a = this;
            if (void 0 != a.radius_bubble) var t = a.radius_bubble;
            else var t = a.radius;
            if (void 0 != a.opacity_bubble) var s = a.opacity_bubble;
            else var s = a.opacity;
            if (a.color.rgb) var n = "rgba(" + a.color.rgb.r + "," + a.color.rgb.g + "," + a.color.rgb.b + "," + s + ")";
            else var n = "hsla(" + a.color.hsl.h + "," + a.color.hsl.s + "%," + a.color.hsl.l + "%," + s + ")";
            switch (i.canvas.ctx.fillStyle = n, i.canvas.ctx.beginPath(), a.shape) {
                case "circle":
                    i.canvas.ctx.arc(a.x, a.y, t, 0, 2 * Math.PI, !1);
                    break;
                case "edge":
                    i.canvas.ctx.rect(a.x - t, a.y - t, 2 * t, 2 * t);
                    break;
                case "triangle":
                    i.fn.vendors.drawShape(i.canvas.ctx, a.x - t, a.y + t / 1.66, 2 * t, 3, 2);
                    break;
                case "polygon":
                    i.fn.vendors.drawShape(i.canvas.ctx, a.x - t / (i.particles.shape.polygon.nb_sides / 3.5), a.y - t / .76, 2.66 * t / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 1);
                    break;
                case "star":
                    i.fn.vendors.drawShape(i.canvas.ctx, a.x - 2 * t / (i.particles.shape.polygon.nb_sides / 4), a.y - t / 1.52, 2 * t * 2.66 / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 2);
                    break;
                case "image":
                    if ("svg" == i.tmp.img_type) var r = a.img.obj;
                    else var r = i.tmp.img_obj;
                    r && e()
            }
            i.canvas.ctx.closePath(), i.particles.shape.stroke.width > 0 && (i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color, i.canvas.ctx.lineWidth = i.particles.shape.stroke.width, i.canvas.ctx.stroke()), i.canvas.ctx.fill()
        }, i.fn.particlesCreate = function() {
            for (var e = 0; e < i.particles.number.value; e++) i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value))
        }, i.fn.particlesUpdate = function() {
            for (var e = 0; e < i.particles.array.length; e++) {
                var a = i.particles.array[e];
                if (i.particles.move.enable) {
                    var t = i.particles.move.speed / 2;
                    a.x += a.vx * t, a.y += a.vy * t
                }
                if (i.particles.opacity.anim.enable && (1 == a.opacity_status ? (a.opacity >= i.particles.opacity.value && (a.opacity_status = !1), a.opacity += a.vo) : (a.opacity <= i.particles.opacity.anim.opacity_min && (a.opacity_status = !0), a.opacity -= a.vo), a.opacity < 0 && (a.opacity = 0)), i.particles.size.anim.enable && (1 == a.size_status ? (a.radius >= i.particles.size.value && (a.size_status = !1), a.radius += a.vs) : (a.radius <= i.particles.size.anim.size_min && (a.size_status = !0), a.radius -= a.vs), a.radius < 0 && (a.radius = 0)), "bounce" == i.particles.move.out_mode) var s = {
                    x_left: a.radius,
                    x_right: i.canvas.w,
                    y_top: a.radius,
                    y_bottom: i.canvas.h
                };
                else var s = {
                    x_left: -a.radius,
                    x_right: i.canvas.w + a.radius,
                    y_top: -a.radius,
                    y_bottom: i.canvas.h + a.radius
                };
                switch (a.x - a.radius > i.canvas.w ? (a.x = s.x_left, a.y = Math.random() * i.canvas.h) : a.x + a.radius < 0 && (a.x = s.x_right, a.y = Math.random() * i.canvas.h), a.y - a.radius > i.canvas.h ? (a.y = s.y_top, a.x = Math.random() * i.canvas.w) : a.y + a.radius < 0 && (a.y = s.y_bottom, a.x = Math.random() * i.canvas.w), i.particles.move.out_mode) {
                    case "bounce":
                        a.x + a.radius > i.canvas.w ? a.vx = -a.vx : a.x - a.radius < 0 && (a.vx = -a.vx), a.y + a.radius > i.canvas.h ? a.vy = -a.vy : a.y - a.radius < 0 && (a.vy = -a.vy)
                }
                if (isInArray("grab", i.interactivity.events.onhover.mode) && i.fn.modes.grabParticle(a), (isInArray("bubble", i.interactivity.events.onhover.mode) || isInArray("bubble", i.interactivity.events.onclick.mode)) && i.fn.modes.bubbleParticle(a), (isInArray("repulse", i.interactivity.events.onhover.mode) || isInArray("repulse", i.interactivity.events.onclick.mode)) && i.fn.modes.repulseParticle(a), i.particles.line_linked.enable || i.particles.move.attract.enable)
                    for (var n = e + 1; n < i.particles.array.length; n++) {
                        var r = i.particles.array[n];
                        i.particles.line_linked.enable && i.fn.interact.linkParticles(a, r), i.particles.move.attract.enable && i.fn.interact.attractParticles(a, r), i.particles.move.bounce && i.fn.interact.bounceParticles(a, r)
                    }
            }
        }, i.fn.particlesDraw = function() {
            i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h), i.fn.particlesUpdate();
            for (var e = 0; e < i.particles.array.length; e++) {
                var a = i.particles.array[e];
                a.draw()
            }
        }, i.fn.particlesEmpty = function() {
            i.particles.array = []
        }, i.fn.particlesRefresh = function() {
            cancelRequestAnimFrame(i.fn.checkAnimFrame), cancelRequestAnimFrame(i.fn.drawAnimFrame), i.tmp.source_svg = void 0, i.tmp.img_obj = void 0, i.tmp.count_svg = 0, i.fn.particlesEmpty(), i.fn.canvasClear(), i.fn.vendors.start()
        }, i.fn.interact.linkParticles = function(e, a) {
            var t = e.x - a.x,
                s = e.y - a.y,
                n = Math.sqrt(t * t + s * s);
            if (n <= i.particles.line_linked.distance) {
                var r = i.particles.line_linked.opacity - n / (1 / i.particles.line_linked.opacity) / i.particles.line_linked.distance;
                if (r > 0) {
                    var c = i.particles.line_linked.color_rgb_line;
                    i.canvas.ctx.strokeStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + r + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(a.x, a.y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath()
                }
            }
        }, i.fn.interact.attractParticles = function(e, a) {
            var t = e.x - a.x,
                s = e.y - a.y,
                n = Math.sqrt(t * t + s * s);
            if (n <= i.particles.line_linked.distance) {
                var r = t / (1e3 * i.particles.move.attract.rotateX),
                    c = s / (1e3 * i.particles.move.attract.rotateY);
                e.vx -= r, e.vy -= c, a.vx += r, a.vy += c
            }
        }, i.fn.interact.bounceParticles = function(e, a) {
            var t = e.x - a.x,
                i = e.y - a.y,
                s = Math.sqrt(t * t + i * i),
                n = e.radius + a.radius;
            n >= s && (e.vx = -e.vx, e.vy = -e.vy, a.vx = -a.vx, a.vy = -a.vy)
        }, i.fn.modes.pushParticles = function(e, a) {
            i.tmp.pushing = !0;
            for (var t = 0; e > t; t++) i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value, {
                x: a ? a.pos_x : Math.random() * i.canvas.w,
                y: a ? a.pos_y : Math.random() * i.canvas.h
            })), t == e - 1 && (i.particles.move.enable || i.fn.particlesDraw(), i.tmp.pushing = !1)
        }, i.fn.modes.removeParticles = function(e) {
            i.particles.array.splice(0, e), i.particles.move.enable || i.fn.particlesDraw()
        }, i.fn.modes.bubbleParticle = function(e) {
            function a() {
                e.opacity_bubble = e.opacity, e.radius_bubble = e.radius
            }

            function t(a, t, s, n, c) {
                if (a != t)
                    if (i.tmp.bubble_duration_end) {
                        if (void 0 != s) {
                            var o = n - p * (n - a) / i.interactivity.modes.bubble.duration,
                                l = a - o;
                            d = a + l, "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d)
                        }
                    } else if (r <= i.interactivity.modes.bubble.distance) {
                    if (void 0 != s) var v = s;
                    else var v = n;
                    if (v != a) {
                        var d = n - p * (n - a) / i.interactivity.modes.bubble.duration;
                        "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d)
                    }
                } else "size" == c && (e.radius_bubble = void 0), "opacity" == c && (e.opacity_bubble = void 0)
            }
            if (i.interactivity.events.onhover.enable && isInArray("bubble", i.interactivity.events.onhover.mode)) {
                var s = e.x - i.interactivity.mouse.pos_x,
                    n = e.y - i.interactivity.mouse.pos_y,
                    r = Math.sqrt(s * s + n * n),
                    c = 1 - r / i.interactivity.modes.bubble.distance;
                if (r <= i.interactivity.modes.bubble.distance) {
                    if (c >= 0 && "mousemove" == i.interactivity.status) {
                        if (i.interactivity.modes.bubble.size != i.particles.size.value)
                            if (i.interactivity.modes.bubble.size > i.particles.size.value) {
                                var o = e.radius + i.interactivity.modes.bubble.size * c;
                                o >= 0 && (e.radius_bubble = o)
                            } else {
                                var l = e.radius - i.interactivity.modes.bubble.size,
                                    o = e.radius - l * c;
                                o > 0 ? e.radius_bubble = o : e.radius_bubble = 0
                            }
                        if (i.interactivity.modes.bubble.opacity != i.particles.opacity.value)
                            if (i.interactivity.modes.bubble.opacity > i.particles.opacity.value) {
                                var v = i.interactivity.modes.bubble.opacity * c;
                                v > e.opacity && v <= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v)
                            } else {
                                var v = e.opacity - (i.particles.opacity.value - i.interactivity.modes.bubble.opacity) * c;
                                v < e.opacity && v >= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v)
                            }
                    }
                } else a();
                "mouseleave" == i.interactivity.status && a()
            } else if (i.interactivity.events.onclick.enable && isInArray("bubble", i.interactivity.events.onclick.mode)) {
                if (i.tmp.bubble_clicking) {
                    var s = e.x - i.interactivity.mouse.click_pos_x,
                        n = e.y - i.interactivity.mouse.click_pos_y,
                        r = Math.sqrt(s * s + n * n),
                        p = ((new Date).getTime() - i.interactivity.mouse.click_time) / 1e3;
                    p > i.interactivity.modes.bubble.duration && (i.tmp.bubble_duration_end = !0), p > 2 * i.interactivity.modes.bubble.duration && (i.tmp.bubble_clicking = !1, i.tmp.bubble_duration_end = !1)
                }
                i.tmp.bubble_clicking && (t(i.interactivity.modes.bubble.size, i.particles.size.value, e.radius_bubble, e.radius, "size"), t(i.interactivity.modes.bubble.opacity, i.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"))
            }
        }, i.fn.modes.repulseParticle = function(e) {
            function a() {
                var a = Math.atan2(d, p);
                if (e.vx = u * Math.cos(a), e.vy = u * Math.sin(a), "bounce" == i.particles.move.out_mode) {
                    var t = {
                        x: e.x + e.vx,
                        y: e.y + e.vy
                    };
                    t.x + e.radius > i.canvas.w ? e.vx = -e.vx : t.x - e.radius < 0 && (e.vx = -e.vx), t.y + e.radius > i.canvas.h ? e.vy = -e.vy : t.y - e.radius < 0 && (e.vy = -e.vy)
                }
            }
            if (i.interactivity.events.onhover.enable && isInArray("repulse", i.interactivity.events.onhover.mode) && "mousemove" == i.interactivity.status) {
                var t = e.x - i.interactivity.mouse.pos_x,
                    s = e.y - i.interactivity.mouse.pos_y,
                    n = Math.sqrt(t * t + s * s),
                    r = {
                        x: t / n,
                        y: s / n
                    },
                    c = i.interactivity.modes.repulse.distance,
                    o = 100,
                    l = clamp(1 / c * (-1 * Math.pow(n / c, 2) + 1) * c * o, 0, 50),
                    v = {
                        x: e.x + r.x * l,
                        y: e.y + r.y * l
                    };
                "bounce" == i.particles.move.out_mode ? (v.x - e.radius > 0 && v.x + e.radius < i.canvas.w && (e.x = v.x), v.y - e.radius > 0 && v.y + e.radius < i.canvas.h && (e.y = v.y)) : (e.x = v.x, e.y = v.y)
            } else if (i.interactivity.events.onclick.enable && isInArray("repulse", i.interactivity.events.onclick.mode))
                if (i.tmp.repulse_finish || (i.tmp.repulse_count++, i.tmp.repulse_count == i.particles.array.length && (i.tmp.repulse_finish = !0)), i.tmp.repulse_clicking) {
                    var c = Math.pow(i.interactivity.modes.repulse.distance / 6, 3),
                        p = i.interactivity.mouse.click_pos_x - e.x,
                        d = i.interactivity.mouse.click_pos_y - e.y,
                        m = p * p + d * d,
                        u = -c / m * 1;
                    c >= m && a()
                } else 0 == i.tmp.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i)
        }, i.fn.modes.grabParticle = function(e) {
            if (i.interactivity.events.onhover.enable && "mousemove" == i.interactivity.status) {
                var a = e.x - i.interactivity.mouse.pos_x,
                    t = e.y - i.interactivity.mouse.pos_y,
                    s = Math.sqrt(a * a + t * t);
                if (s <= i.interactivity.modes.grab.distance) {
                    var n = i.interactivity.modes.grab.line_linked.opacity - s / (1 / i.interactivity.modes.grab.line_linked.opacity) / i.interactivity.modes.grab.distance;
                    if (n > 0) {
                        var r = i.particles.line_linked.color_rgb_line;
                        i.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + n + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x, i.interactivity.mouse.pos_y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath()
                    }
                }
            }
        }, i.fn.vendors.eventsListeners = function() {
            "window" == i.interactivity.detect_on ? i.interactivity.el = window : i.interactivity.el = i.canvas.el, (i.interactivity.events.onhover.enable || i.interactivity.events.onclick.enable) && (i.interactivity.el.addEventListener("mousemove", function(e) {
                if (i.interactivity.el == window) var a = e.clientX,
                    t = e.clientY;
                else var a = e.offsetX || e.clientX,
                    t = e.offsetY || e.clientY;
                i.interactivity.mouse.pos_x = a, i.interactivity.mouse.pos_y = t, i.tmp.retina && (i.interactivity.mouse.pos_x *= i.canvas.pxratio, i.interactivity.mouse.pos_y *= i.canvas.pxratio), i.interactivity.status = "mousemove"
            }), i.interactivity.el.addEventListener("mouseleave", function(e) {
                i.interactivity.mouse.pos_x = null, i.interactivity.mouse.pos_y = null, i.interactivity.status = "mouseleave"
            })), i.interactivity.events.onclick.enable && i.interactivity.el.addEventListener("click", function() {
                if (i.interactivity.mouse.click_pos_x = i.interactivity.mouse.pos_x, i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y, i.interactivity.mouse.click_time = (new Date).getTime(), i.interactivity.events.onclick.enable) switch (i.interactivity.events.onclick.mode) {
                    case "push":
                        i.particles.move.enable ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : 1 == i.interactivity.modes.push.particles_nb ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : i.interactivity.modes.push.particles_nb > 1 && i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);
                        break;
                    case "remove":
                        i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);
                        break;
                    case "bubble":
                        i.tmp.bubble_clicking = !0;
                        break;
                    case "repulse":
                        i.tmp.repulse_clicking = !0, i.tmp.repulse_count = 0, i.tmp.repulse_finish = !1, setTimeout(function() {
                            i.tmp.repulse_clicking = !1
                        }, 1e3 * i.interactivity.modes.repulse.duration)
                }
            })
        }, i.fn.vendors.densityAutoParticles = function() {
            if (i.particles.number.density.enable) {
                var e = i.canvas.el.width * i.canvas.el.height / 1e3;
                i.tmp.retina && (e /= 2 * i.canvas.pxratio);
                var a = e * i.particles.number.value / i.particles.number.density.value_area,
                    t = i.particles.array.length - a;
                0 > t ? i.fn.modes.pushParticles(Math.abs(t)) : i.fn.modes.removeParticles(t)
            }
        }, i.fn.vendors.checkOverlap = function(e, a) {
            for (var t = 0; t < i.particles.array.length; t++) {
                var s = i.particles.array[t],
                    n = e.x - s.x,
                    r = e.y - s.y,
                    c = Math.sqrt(n * n + r * r);
                c <= e.radius + s.radius && (e.x = a ? a.x : Math.random() * i.canvas.w, e.y = a ? a.y : Math.random() * i.canvas.h, i.fn.vendors.checkOverlap(e))
            }
        }, i.fn.vendors.createSvgImg = function(e) {
            var a = i.tmp.source_svg,
                t = /#([0-9A-F]{3,6})/gi,
                s = a.replace(t, function(a, t, i, s) {
                    if (e.color.rgb) var n = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")";
                    else var n = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";
                    return n
                }),
                n = new Blob([s], {
                    type: "image/svg+xml;charset=utf-8"
                }),
                r = window.URL || window.webkitURL || window,
                c = r.createObjectURL(n),
                o = new Image;
            o.addEventListener("load", function() {
                e.img.obj = o, e.img.loaded = !0, r.revokeObjectURL(c), i.tmp.count_svg++
            }), o.src = c
        }, i.fn.vendors.destroypJS = function() {
            cancelAnimationFrame(i.fn.drawAnimFrame), t.remove(), pJSDom = null
        }, i.fn.vendors.drawShape = function(e, a, t, i, s, n) {
            var r = s * n,
                c = s / n,
                o = 180 * (c - 2) / c,
                l = Math.PI - Math.PI * o / 180;
            e.save(), e.beginPath(), e.translate(a, t), e.moveTo(0, 0);
            for (var v = 0; r > v; v++) e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
            e.fill(), e.restore()
        }, i.fn.vendors.exportImg = function() {
            window.open(i.canvas.el.toDataURL("image/png"), "_blank")
        }, i.fn.vendors.loadImg = function(e) {
            if (i.tmp.img_error = void 0, "" != i.particles.shape.image.src)
                if ("svg" == e) {
                    var a = new XMLHttpRequest;
                    a.open("GET", i.particles.shape.image.src), a.onreadystatechange = function(e) {
                        4 == a.readyState && (200 == a.status ? (i.tmp.source_svg = e.currentTarget.response, i.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), i.tmp.img_error = !0))
                    }, a.send()
                } else {
                    var t = new Image;
                    t.addEventListener("load", function() {
                        i.tmp.img_obj = t, i.fn.vendors.checkBeforeDraw()
                    }), t.src = i.particles.shape.image.src
                }
            else console.log("Error pJS - No image.src"), i.tmp.img_error = !0
        }, i.fn.vendors.draw = function() {
            "image" == i.particles.shape.type ? "svg" == i.tmp.img_type ? i.tmp.count_svg >= i.particles.number.value ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : void 0 != i.tmp.img_obj ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame))
        }, i.fn.vendors.checkBeforeDraw = function() {
            "image" == i.particles.shape.type ? "svg" == i.tmp.img_type && void 0 == i.tmp.source_svg ? i.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(i.tmp.checkAnimFrame), i.tmp.img_error || (i.fn.vendors.init(), i.fn.vendors.draw())) : (i.fn.vendors.init(), i.fn.vendors.draw())
        }, i.fn.vendors.init = function() {
            i.fn.retinaInit(), i.fn.canvasInit(), i.fn.canvasSize(), i.fn.canvasPaint(), i.fn.particlesCreate(), i.fn.vendors.densityAutoParticles(), i.particles.line_linked.color_rgb_line = hexToRgb(i.particles.line_linked.color)
        }, i.fn.vendors.start = function() {
            isInArray("image", i.particles.shape.type) ? (i.tmp.img_type = i.particles.shape.image.src.substr(i.particles.shape.image.src.length - 3), i.fn.vendors.loadImg(i.tmp.img_type)) : i.fn.vendors.checkBeforeDraw()
        }, i.fn.vendors.eventsListeners(), i.fn.vendors.start()
    };
    Object.deepExtend = function(e, a) {
        for (var t in a) a[t] && a[t].constructor && a[t].constructor === Object ? (e[t] = e[t] || {}, arguments.callee(e[t], a[t])) : e[t] = a[t];
        return e
    }, window.requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
            window.setTimeout(e, 1e3 / 60)
        }
    }(), window.cancelRequestAnimFrame = function() {
        return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
    }(), window.pJSDom = [], window.particlesJS = function(e, a) {
        "string" != typeof e && (a = e, e = "particles-js"), e || (e = "particles-js");
        var t = document.getElementById(e),
            i = "particles-js-canvas-el",
            s = t.getElementsByClassName(i);
        if (s.length)
            for (; s.length > 0;) t.removeChild(s[0]);
        var n = document.createElement("canvas");
        n.className = i, n.style.width = "100%", n.style.height = "100%";
        var r = document.getElementById(e).appendChild(n);
        null != r && pJSDom.push(new pJS(e, a))
    }, window.particlesJS.load = function(e, a, t) {
        var i = new XMLHttpRequest;
        i.open("GET", a), i.onreadystatechange = function(a) {
            if (4 == i.readyState)
                if (200 == i.status) {
                    var s = JSON.parse(a.currentTarget.response);
                    window.particlesJS(e, s), t && t()
                } else console.log("Error pJS - XMLHttpRequest status: " + i.status), console.log("Error pJS - File config not found")
        }, i.send()
    };
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#888"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#888"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 3,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#888",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "config_demo": {
            "hide_card": false,
            "background_color": "#b61924",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
        }
    });
}

function initMap() {
    var map = new google.maps.Map(document.getElementById('ieatmaps'), {
        center: {
            lat: 34.0937458,
            lng: -118.3614978
        },
        zoom: 12,
        styles: [{
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }]
    });
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(34.0937458, -118.3614978),
        title: 'ASL',
        map: map
    });
}



/*!
 * simpleParallax.min - simpleParallax is a simple JavaScript library that gives your website parallax animations on any images, 
 * @date: 01-02-2020 23:1:26, 
 * @version: 5.3.0,
 * @link: https://simpleparallax.com/
 */
! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("simpleParallax", [], e) : "object" == typeof exports ? exports.simpleParallax = e() : t.simpleParallax = e()
}(window, (function() {
    return function(t) {
        var e = {};

        function n(i) {
            if (e[i]) return e[i].exports;
            var s = e[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return t[i].call(s.exports, s, s.exports, n), s.l = !0, s.exports
        }
        return n.m = t, n.c = e, n.d = function(t, e, i) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: i
            })
        }, n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var i = Object.create(null);
            if (n.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var s in t) n.d(i, s, function(e) {
                    return t[e]
                }.bind(null, s));
            return i
        }, n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 0)
    }([function(t, e, n) {
        "use strict";

        function i(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        n.r(e);
        var s = new(function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.positions = {
                        top: 0,
                        bottom: 0,
                        height: 0
                    }
                }
                var e, n, s;
                return e = t, (n = [{
                    key: "setViewportTop",
                    value: function(t) {
                        return this.positions.top = t ? t.scrollTop : window.pageYOffset, this.positions
                    }
                }, {
                    key: "setViewportBottom",
                    value: function() {
                        return this.positions.bottom = this.positions.top + this.positions.height, this.positions
                    }
                }, {
                    key: "setViewportAll",
                    value: function(t) {
                        return this.positions.top = t ? t.scrollTop : window.pageYOffset, this.positions.height = t ? t.clientHeight : document.documentElement.clientHeight, this.positions.bottom = this.positions.top + this.positions.height, this.positions
                    }
                }]) && i(e.prototype, n), s && i(e, s), t
            }()),
            o = function(t) {
                return NodeList.prototype.isPrototypeOf(t) || HTMLCollection.prototype.isPrototypeOf(t) ? Array.from(t) : "string" == typeof t || t instanceof String ? document.querySelectorAll(t) : [t]
            },
            r = function() {
                for (var t, e = "transform webkitTransform mozTransform oTransform msTransform".split(" "), n = 0; void 0 === t;) t = void 0 !== document.createElement("div").style[e[n]] ? e[n] : void 0, n += 1;
                return t
            }(),
            a = function(t) {
                return !!t && (!!t.complete && (void 0 === t.naturalWidth || 0 !== t.naturalWidth))
            };

        function l(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function u(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        var h = function() {
            function t(e, n) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.element = e, this.elementContainer = e, this.settings = n, this.isVisible = !0, this.isInit = !1, this.oldTranslateValue = -1, this.init = this.init.bind(this), a(e) ? this.init() : this.element.addEventListener("load", this.init)
            }
            var e, n, i;
            return e = t, (n = [{
                key: "init",
                value: function() {
                    var t = this;
                    this.isInit || this.element.closest(".simpleParallax") || (!1 === this.settings.overflow && this.wrapElement(this.element), this.setTransformCSS(), this.getElementOffset(), this.intersectionObserver(), this.getTranslateValue(), this.animate(), this.settings.delay > 0 && setTimeout((function() {
                        t.setTransitionCSS()
                    }), 10), this.isInit = !0)
                }
            }, {
                key: "wrapElement",
                value: function() {
                    var t = this.element.closest("picture") || this.element,
                        e = document.createElement("div");
                    e.classList.add("simpleParallax"), e.style.overflow = "hidden", t.parentNode.insertBefore(e, t), e.appendChild(t), this.elementContainer = e
                }
            }, {
                key: "unWrapElement",
                value: function() {
                    var t = this.elementContainer;
                    t.replaceWith.apply(t, l(t.childNodes))
                }
            }, {
                key: "setTransformCSS",
                value: function() {
                    !1 === this.settings.overflow && (this.element.style[r] = "scale(".concat(this.settings.scale, ")")), this.element.style.willChange = "transform"
                }
            }, {
                key: "setTransitionCSS",
                value: function() {
                    this.element.style.transition = "transform ".concat(this.settings.delay, "s ").concat(this.settings.transition)
                }
            }, {
                key: "unSetStyle",
                value: function() {
                    this.element.style.willChange = "", this.element.style[r] = "", this.element.style.transition = ""
                }
            }, {
                key: "getElementOffset",
                value: function() {
                    var t = this.elementContainer.getBoundingClientRect();
                    if (this.elementHeight = t.height, this.elementTop = t.top + s.positions.top, this.settings.customContainer) {
                        var e = this.settings.customContainer.getBoundingClientRect();
                        this.elementTop = t.top - e.top + s.positions.top
                    }
                    this.elementBottom = this.elementHeight + this.elementTop
                }
            }, {
                key: "buildThresholdList",
                value: function() {
                    for (var t = [], e = 1; e <= this.elementHeight; e++) {
                        var n = e / this.elementHeight;
                        t.push(n)
                    }
                    return t
                }
            }, {
                key: "intersectionObserver",
                value: function() {
                    var t = {
                        root: null,
                        threshold: this.buildThresholdList()
                    };
                    this.observer = new IntersectionObserver(this.intersectionObserverCallback.bind(this), t), this.observer.observe(this.element)
                }
            }, {
                key: "intersectionObserverCallback",
                value: function(t) {
                    for (var e = t.length - 1; e >= 0; e--) t[e].isIntersecting ? this.isVisible = !0 : this.isVisible = !1
                }
            }, {
                key: "checkIfVisible",
                value: function() {
                    return this.elementBottom > s.positions.top && this.elementTop < s.positions.bottom
                }
            }, {
                key: "getRangeMax",
                value: function() {
                    var t = this.element.clientHeight;
                    this.rangeMax = t * this.settings.scale - t
                }
            }, {
                key: "getTranslateValue",
                value: function() {
                    var t = ((s.positions.bottom - this.elementTop) / ((s.positions.height + this.elementHeight) / 100)).toFixed(1);
                    return t = Math.min(100, Math.max(0, t)), 0 !== this.settings.maxTransition && t > this.settings.maxTransition && (t = this.settings.maxTransition), this.oldPercentage !== t && (this.rangeMax || this.getRangeMax(), this.translateValue = (t / 100 * this.rangeMax - this.rangeMax / 2).toFixed(0), this.oldTranslateValue !== this.translateValue && (this.oldPercentage = t, this.oldTranslateValue = this.translateValue, !0))
                }
            }, {
                key: "animate",
                value: function() {
                    var t, e = 0,
                        n = 0;
                    (this.settings.orientation.includes("left") || this.settings.orientation.includes("right")) && (n = "".concat(this.settings.orientation.includes("left") ? -1 * this.translateValue : this.translateValue, "px")), (this.settings.orientation.includes("up") || this.settings.orientation.includes("down")) && (e = "".concat(this.settings.orientation.includes("up") ? -1 * this.translateValue : this.translateValue, "px")), t = !1 === this.settings.overflow ? "translate3d(".concat(n, ", ").concat(e, ", 0) scale(").concat(this.settings.scale, ")") : "translate3d(".concat(n, ", ").concat(e, ", 0)"), this.element.style[r] = t
                }
            }]) && u(e.prototype, n), i && u(e, i), t
        }();

        function c(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n
                }
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function f(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        n.d(e, "default", (function() {
            return b
        }));
        var m, p, d, g = !0,
            v = !1,
            y = [],
            b = function() {
                function t(e, n) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), e && (this.elements = o(e), this.defaults = {
                        delay: .4,
                        orientation: "up",
                        scale: 1.3,
                        overflow: !1,
                        transition: "cubic-bezier(0,0,0,1)",
                        customContainer: !1,
                        maxTransition: 0
                    }, this.settings = Object.assign(this.defaults, n), "IntersectionObserver" in window || (g = !1), this.settings.customContainer && (console.log(o(this.settings.customContainer)[0]), this.customContainer = o(this.settings.customContainer)[0]), this.lastPosition = -1, this.resizeIsDone = this.resizeIsDone.bind(this), this.handleResize = this.handleResize.bind(this), this.proceedRequestAnimationFrame = this.proceedRequestAnimationFrame.bind(this), this.init())
                }
                var e, n, i;
                return e = t, (n = [{
                    key: "init",
                    value: function() {
                        var t = this;
                        s.setViewportAll(this.customContainer), y = [].concat(c(this.elements.map((function(e) {
                            return new h(e, t.settings)
                        }))), c(y)), m = y.length, v || (this.proceedRequestAnimationFrame(), window.addEventListener("resize", this.resizeIsDone), v = !0)
                    }
                }, {
                    key: "resizeIsDone",
                    value: function() {
                        clearTimeout(d), d = setTimeout(this.handleResize, 500)
                    }
                }, {
                    key: "handleResize",
                    value: function() {
                        s.setViewportAll(this.customContainer);
                        for (var t = m - 1; t >= 0; t--) y[t].getElementOffset(), y[t].getRangeMax();
                        this.lastPosition = -1
                    }
                }, {
                    key: "proceedRequestAnimationFrame",
                    value: function() {
                        if (s.setViewportTop(this.customContainer), this.lastPosition !== s.positions.top) {
                            s.setViewportBottom();
                            for (var t = m - 1; t >= 0; t--) this.proceedElement(y[t]);
                            p = window.requestAnimationFrame(this.proceedRequestAnimationFrame), this.lastPosition = s.positions.top
                        } else p = window.requestAnimationFrame(this.proceedRequestAnimationFrame)
                    }
                }, {
                    key: "proceedElement",
                    value: function(t) {
                        (!g || this.customContainer ? t.checkIfVisible() : t.isVisible) && t.getTranslateValue() && t.animate()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var t = this,
                            e = [];
                        y = y.filter((function(n) {
                            return t.elements.includes(n.element) ? (e.push(n), !1) : n
                        }));
                        for (var n = e.length - 1; n >= 0; n--) e[n].unSetStyle(), !1 === this.settings.overflow && e[n].unWrapElement();
                        (m = y.length) || (window.cancelAnimationFrame(p), window.removeEventListener("resize", this.handleResize))
                    }
                }]) && f(e.prototype, n), i && f(e, i), t
            }()
    }]).default
}));

! function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.Splitting = t()
}(this, function() {
    "use strict"
    var u = document,
        l = u.createTextNode.bind(u)

    function d(n, t, e) {
        n.style.setProperty(t, e)
    }

    function f(n, t) {
        return n.appendChild(t)
    }

    function p(n, t, e, r) {
        var i = u.createElement("span")
        return t && (i.className = t), e && (!r && i.setAttribute("data-" + t, e), i.textContent = e), n && f(n, i) || i
    }

    function h(n, t) {
        return n.getAttribute("data-" + t)
    }

    function m(n, t) {
        return n && 0 != n.length ? n.nodeName ? [n] : [].slice.call(n[0].nodeName ? n : (t || u).querySelectorAll(n)) : []
    }

    function o(n) {
        for (var t = []; n--;) t[n] = []
        return t
    }

    function g(n, t) {
        n && n.some(t)
    }

    function c(t) {
        return function(n) {
            return t[n]
        }
    }
    var a = {}

    function n(n, t, e, r) {
        return {
            by: n,
            depends: t,
            key: e,
            split: r
        }
    }

    function e(n) {
        return function t(e, n, r) {
            var i = r.indexOf(e)
            if (-1 == i) r.unshift(e), g(a[e].depends, function(n) {
                t(n, e, r)
            })
            else {
                var u = r.indexOf(n)
                r.splice(i, 1), r.splice(u, 0, e)
            }
            return r
        }(n, 0, []).map(c(a))
    }

    function t(n) {
        a[n.by] = n
    }

    function v(n, r, i, u, o) {
        n.normalize()
        var c = [],
            a = document.createDocumentFragment()
        u && c.push(n.previousSibling)
        var s = []
        return m(n.childNodes).some(function(n) {
            if (!n.tagName || n.hasChildNodes()) {
                if (n.childNodes && n.childNodes.length) return s.push(n), void c.push.apply(c, v(n, r, i, u, o))
                var t = n.wholeText || "",
                    e = t.trim()
                e.length && (" " === t[0] && s.push(l(" ")), g(e.split(i), function(n, t) {
                    t && o && s.push(p(a, "whitespace", " ", o))
                    var e = p(a, r, n)
                    c.push(e), s.push(e)
                }), " " === t[t.length - 1] && s.push(l(" ")))
            } else s.push(n)
        }), g(s, function(n) {
            f(a, n)
        }), n.innerHTML = "", f(n, a), c
    }
    var s = 0
    var i = "words",
        r = n(i, s, "word", function(n) {
            return v(n, "word", /\s+/, 0, 1)
        }),
        y = "chars",
        w = n(y, [i], "char", function(n, e, t) {
            var r = []
            return g(t[i], function(n, t) {
                r.push.apply(r, v(n, "char", "", e.whitespace && t))
            }), r
        })

    function b(t) {
        var f = (t = t || {}).key
        return m(t.target || "[data-splitting]").map(function(a) {
            var s = a["ðŸŒ"]
            if (!t.force && s) return s
            s = a["ðŸŒ"] = {
                el: a
            }
            var n = e(t.by || h(a, "splitting") || y),
                l = function(n, t) {
                    for (var e in t) n[e] = t[e]
                    return n
                }({}, t)
            return g(n, function(n) {
                if (n.split) {
                    var t = n.by,
                        e = (f ? "-" + f : "") + n.key,
                        r = n.split(a, l, s)
                    e && (i = a, c = (o = "--" + e) + "-index", g(u = r, function(n, t) {
                        Array.isArray(n) ? g(n, function(n) {
                            d(n, c, t)
                        }) : d(n, c, t)
                    }), d(i, o + "-total", u.length)), s[t] = r, a.classList.add(t)
                }
                var i, u, o, c
            }), a.classList.add("splitting"), s
        })
    }

    function N(n, t, e) {
        var r = m(t.matching || n.children, n),
            i = {}
        return g(r, function(n) {
            var t = Math.round(n[e]);
            (i[t] || (i[t] = [])).push(n)
        }), Object.keys(i).map(Number).sort(x).map(c(i))
    }

    function x(n, t) {
        return n - t
    }
    b.html = function(n) {
        var t = (n = n || {}).target = p()
        return t.innerHTML = n.content, b(n), t.outerHTML
    }, b.add = t
    var T = n("lines", [i], "line", function(n, t, e) {
            return N(n, {
                matching: e[i]
            }, "offsetTop")
        }),
        L = n("items", s, "item", function(n, t) {
            return m(t.matching || n.children, n)
        }),
        k = n("rows", s, "row", function(n, t) {
            return N(n, t, "offsetTop")
        }),
        A = n("cols", s, "col", function(n, t) {
            return N(n, t, "offsetLeft")
        }),
        C = n("grid", ["rows", "cols"]),
        M = "layout",
        S = n(M, s, s, function(n, t) {
            var e = t.rows = +(t.rows || h(n, "rows") || 1),
                r = t.columns = +(t.columns || h(n, "columns") || 1)
            if (t.image = t.image || h(n, "image") || n.currentSrc || n.src, t.image) {
                var i = m("img", n)[0]
                t.image = i && (i.currentSrc || i.src)
            }
            t.image && d(n, "background-image", "url(" + t.image + ")")
            for (var u = e * r, o = [], c = p(s, "cell-grid"); u--;) {
                var a = p(c, "cell")
                p(a, "cell-inner"), o.push(a)
            }
            return f(n, c), o
        }),
        H = n("cellRows", [M], "row", function(n, t, e) {
            var r = t.rows,
                i = o(r)
            return g(e[M], function(n, t, e) {
                i[Math.floor(t / (e.length / r))].push(n)
            }), i
        }),
        O = n("cellColumns", [M], "col", function(n, t, e) {
            var r = t.columns,
                i = o(r)
            return g(e[M], function(n, t) {
                i[t % r].push(n)
            }), i
        }),
        j = n("cells", ["cellRows", "cellColumns"], "cell", function(n, t, e) {
            return e[M]
        })
    return t(r), t(w), t(T), t(L), t(k), t(A), t(C), t(S), t(H), t(O), t(j), b
})