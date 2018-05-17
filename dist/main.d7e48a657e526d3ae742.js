/*!
 * MIT License
 * 
 * Copyright (c) 2018 Nuno Freitas
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [2],
    {
        107: function(t, n) {
            t.exports = function(t) {
                try {
                    return !!t();
                } catch (t) {
                    return !0;
                }
            };
        },
        108: function(t, n, e) {
            var r = e(85);
            t.exports = function(t) {
                if (!r(t)) throw TypeError(t + ' is not an object!');
                return t;
            };
        },
        1105: function(t, n, e) {
            var r = e(87);
            r(r.S, 'Object', { create: e(224) });
        },
        1106: function(t, n, e) {
            e(1105);
            var r = e(46).Object;
            t.exports = function(t, n) {
                return r.create(t, n);
            };
        },
        1107: function(t, n, e) {
            t.exports = { default: e(1106), __esModule: !0 };
        },
        1108: function(t, n, e) {
            var r = e(85),
                o = e(108),
                i = function(t, n) {
                    if ((o(t), !r(n) && null !== n))
                        throw TypeError(n + ": can't set as prototype!");
                };
            t.exports = {
                set:
                    Object.setPrototypeOf ||
                    ('__proto__' in {}
                        ? (function(t, n, r) {
                              try {
                                  (r = e(467)(
                                      Function.call,
                                      e(457).f(Object.prototype, '__proto__')
                                          .set,
                                      2
                                  ))(t, []),
                                      (n = !(t instanceof Array));
                              } catch (t) {
                                  n = !0;
                              }
                              return function(t, e) {
                                  return (
                                      i(t, e),
                                      n ? (t.__proto__ = e) : r(t, e),
                                      t
                                  );
                              };
                          })({}, !1)
                        : void 0),
                check: i,
            };
        },
        1109: function(t, n, e) {
            var r = e(87);
            r(r.S, 'Object', { setPrototypeOf: e(1108).set });
        },
        1110: function(t, n, e) {
            e(1109), (t.exports = e(46).Object.setPrototypeOf);
        },
        1111: function(t, n, e) {
            t.exports = { default: e(1110), __esModule: !0 };
        },
        1112: function(t, n, e) {
            'use strict';
            n.__esModule = !0;
            var r = u(e(1111)),
                o = u(e(1107)),
                i = u(e(464));
            function u(t) {
                return t && t.__esModule ? t : { default: t };
            }
            n.default = function(t, n) {
                if ('function' != typeof n && null !== n)
                    throw new TypeError(
                        'Super expression must either be null or a function, not ' +
                            (void 0 === n ? 'undefined' : (0, i.default)(n))
                    );
                (t.prototype = (0, o.default)(n && n.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                    },
                })),
                    n && (r.default ? (0, r.default)(t, n) : (t.__proto__ = n));
            };
        },
        1113: function(t, n, e) {
            e(219)('observable');
        },
        1114: function(t, n, e) {
            e(219)('asyncIterator');
        },
        1115: function(t, n) {},
        1116: function(t, n, e) {
            var r = e(84),
                o = e(458).f,
                i = {}.toString,
                u =
                    'object' == typeof window &&
                    window &&
                    Object.getOwnPropertyNames
                        ? Object.getOwnPropertyNames(window)
                        : [];
            t.exports.f = function(t) {
                return u && '[object Window]' == i.call(t)
                    ? (function(t) {
                          try {
                              return o(t);
                          } catch (t) {
                              return u.slice();
                          }
                      })(t)
                    : o(r(t));
            };
        },
        1117: function(t, n, e) {
            var r = e(460);
            t.exports =
                Array.isArray ||
                function(t) {
                    return 'Array' == r(t);
                };
        },
        1118: function(t, n, e) {
            var r = e(223),
                o = e(459),
                i = e(218);
            t.exports = function(t) {
                var n = r(t),
                    e = o.f;
                if (e)
                    for (var u, f = e(t), c = i.f, a = 0; f.length > a; )
                        c.call(t, (u = f[a++])) && n.push(u);
                return n;
            };
        },
        1119: function(t, n, e) {
            var r = e(138)('meta'),
                o = e(85),
                i = e(66),
                u = e(65).f,
                f = 0,
                c =
                    Object.isExtensible ||
                    function() {
                        return !0;
                    },
                a = !e(107)(function() {
                    return c(Object.preventExtensions({}));
                }),
                s = function(t) {
                    u(t, r, { value: { i: 'O' + ++f, w: {} } });
                },
                l = (t.exports = {
                    KEY: r,
                    NEED: !1,
                    fastKey: function(t, n) {
                        if (!o(t))
                            return 'symbol' == typeof t
                                ? t
                                : ('string' == typeof t ? 'S' : 'P') + t;
                        if (!i(t, r)) {
                            if (!c(t)) return 'F';
                            if (!n) return 'E';
                            s(t);
                        }
                        return t[r].i;
                    },
                    getWeak: function(t, n) {
                        if (!i(t, r)) {
                            if (!c(t)) return !0;
                            if (!n) return !1;
                            s(t);
                        }
                        return t[r].w;
                    },
                    onFreeze: function(t) {
                        return a && l.NEED && c(t) && !i(t, r) && s(t), t;
                    },
                });
        },
        1120: function(t, n, e) {
            'use strict';
            var r = e(53),
                o = e(66),
                i = e(64),
                u = e(87),
                f = e(462),
                c = e(1119).KEY,
                a = e(107),
                s = e(228),
                l = e(221),
                p = e(138),
                d = e(83),
                y = e(220),
                v = e(219),
                h = e(1118),
                b = e(1117),
                m = e(108),
                g = e(85),
                _ = e(84),
                O = e(227),
                x = e(137),
                w = e(224),
                S = e(1116),
                j = e(457),
                M = e(65),
                P = e(223),
                L = j.f,
                E = M.f,
                T = S.f,
                k = r.Symbol,
                A = r.JSON,
                C = A && A.stringify,
                R = d('_hidden'),
                I = d('toPrimitive'),
                N = {}.propertyIsEnumerable,
                U = s('symbol-registry'),
                F = s('symbols'),
                B = s('op-symbols'),
                D = Object.prototype,
                G = 'function' == typeof k,
                J = r.QObject,
                H = !J || !J.prototype || !J.prototype.findChild,
                V =
                    i &&
                    a(function() {
                        return (
                            7 !=
                            w(
                                E({}, 'a', {
                                    get: function() {
                                        return E(this, 'a', { value: 7 }).a;
                                    },
                                })
                            ).a
                        );
                    })
                        ? function(t, n, e) {
                              var r = L(D, n);
                              r && delete D[n],
                                  E(t, n, e),
                                  r && t !== D && E(D, n, r);
                          }
                        : E,
                W = function(t) {
                    var n = (F[t] = w(k.prototype));
                    return (n._k = t), n;
                },
                $ =
                    G && 'symbol' == typeof k.iterator
                        ? function(t) {
                              return 'symbol' == typeof t;
                          }
                        : function(t) {
                              return t instanceof k;
                          },
                q = function(t, n, e) {
                    return (
                        t === D && q(B, n, e),
                        m(t),
                        (n = O(n, !0)),
                        m(e),
                        o(F, n)
                            ? (e.enumerable
                                  ? (o(t, R) && t[R][n] && (t[R][n] = !1),
                                    (e = w(e, { enumerable: x(0, !1) })))
                                  : (o(t, R) || E(t, R, x(1, {})),
                                    (t[R][n] = !0)),
                              V(t, n, e))
                            : E(t, n, e)
                    );
                },
                z = function(t, n) {
                    m(t);
                    for (var e, r = h((n = _(n))), o = 0, i = r.length; i > o; )
                        q(t, (e = r[o++]), n[e]);
                    return t;
                },
                K = function(t) {
                    var n = N.call(this, (t = O(t, !0)));
                    return (
                        !(this === D && o(F, t) && !o(B, t)) &&
                        (!(
                            n ||
                            !o(this, t) ||
                            !o(F, t) ||
                            (o(this, R) && this[R][t])
                        ) ||
                            n)
                    );
                },
                Y = function(t, n) {
                    if (
                        ((t = _(t)),
                        (n = O(n, !0)),
                        t !== D || !o(F, n) || o(B, n))
                    ) {
                        var e = L(t, n);
                        return (
                            !e ||
                                !o(F, n) ||
                                (o(t, R) && t[R][n]) ||
                                (e.enumerable = !0),
                            e
                        );
                    }
                },
                Q = function(t) {
                    for (var n, e = T(_(t)), r = [], i = 0; e.length > i; )
                        o(F, (n = e[i++])) || n == R || n == c || r.push(n);
                    return r;
                },
                X = function(t) {
                    for (
                        var n, e = t === D, r = T(e ? B : _(t)), i = [], u = 0;
                        r.length > u;

                    )
                        !o(F, (n = r[u++])) || (e && !o(D, n)) || i.push(F[n]);
                    return i;
                };
            G ||
                (f(
                    (k = function() {
                        if (this instanceof k)
                            throw TypeError('Symbol is not a constructor!');
                        var t = p(arguments.length > 0 ? arguments[0] : void 0),
                            n = function(e) {
                                this === D && n.call(B, e),
                                    o(this, R) &&
                                        o(this[R], t) &&
                                        (this[R][t] = !1),
                                    V(this, t, x(1, e));
                            };
                        return (
                            i && H && V(D, t, { configurable: !0, set: n }),
                            W(t)
                        );
                    }).prototype,
                    'toString',
                    function() {
                        return this._k;
                    }
                ),
                (j.f = Y),
                (M.f = q),
                (e(458).f = S.f = Q),
                (e(218).f = K),
                (e(459).f = X),
                i && !e(139) && f(D, 'propertyIsEnumerable', K, !0),
                (y.f = function(t) {
                    return W(d(t));
                })),
                u(u.G + u.W + u.F * !G, { Symbol: k });
            for (
                var Z = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
                        ','
                    ),
                    tt = 0;
                Z.length > tt;

            )
                d(Z[tt++]);
            for (var nt = P(d.store), et = 0; nt.length > et; ) v(nt[et++]);
            u(u.S + u.F * !G, 'Symbol', {
                for: function(t) {
                    return o(U, (t += '')) ? U[t] : (U[t] = k(t));
                },
                keyFor: function(t) {
                    if (!$(t)) throw TypeError(t + ' is not a symbol!');
                    for (var n in U) if (U[n] === t) return n;
                },
                useSetter: function() {
                    H = !0;
                },
                useSimple: function() {
                    H = !1;
                },
            }),
                u(u.S + u.F * !G, 'Object', {
                    create: function(t, n) {
                        return void 0 === n ? w(t) : z(w(t), n);
                    },
                    defineProperty: q,
                    defineProperties: z,
                    getOwnPropertyDescriptor: Y,
                    getOwnPropertyNames: Q,
                    getOwnPropertySymbols: X,
                }),
                A &&
                    u(
                        u.S +
                            u.F *
                                (!G ||
                                    a(function() {
                                        var t = k();
                                        return (
                                            '[null]' != C([t]) ||
                                            '{}' != C({ a: t }) ||
                                            '{}' != C(Object(t))
                                        );
                                    })),
                        'JSON',
                        {
                            stringify: function(t) {
                                for (
                                    var n, e, r = [t], o = 1;
                                    arguments.length > o;

                                )
                                    r.push(arguments[o++]);
                                if (
                                    ((e = n = r[1]),
                                    (g(n) || void 0 !== t) && !$(t))
                                )
                                    return (
                                        b(n) ||
                                            (n = function(t, n) {
                                                if (
                                                    ('function' == typeof e &&
                                                        (n = e.call(
                                                            this,
                                                            t,
                                                            n
                                                        )),
                                                    !$(n))
                                                )
                                                    return n;
                                            }),
                                        (r[1] = n),
                                        C.apply(A, r)
                                    );
                            },
                        }
                    ),
                k.prototype[I] || e(86)(k.prototype, I, k.prototype.valueOf),
                l(k, 'Symbol'),
                l(Math, 'Math', !0),
                l(r.JSON, 'JSON', !0);
        },
        1121: function(t, n, e) {
            e(1120), e(1115), e(1114), e(1113), (t.exports = e(46).Symbol);
        },
        1122: function(t, n, e) {
            t.exports = { default: e(1121), __esModule: !0 };
        },
        1123: function(t, n) {
            t.exports = function(t, n) {
                return { value: n, done: !!t };
            };
        },
        1124: function(t, n) {
            t.exports = function() {};
        },
        1125: function(t, n, e) {
            'use strict';
            var r = e(1124),
                o = e(1123),
                i = e(225),
                u = e(84);
            (t.exports = e(463)(
                Array,
                'Array',
                function(t, n) {
                    (this._t = u(t)), (this._i = 0), (this._k = n);
                },
                function() {
                    var t = this._t,
                        n = this._k,
                        e = this._i++;
                    return !t || e >= t.length
                        ? ((this._t = void 0), o(1))
                        : o(
                              0,
                              'keys' == n ? e : 'values' == n ? t[e] : [e, t[e]]
                          );
                },
                'values'
            )),
                (i.Arguments = i.Array),
                r('keys'),
                r('values'),
                r('entries');
        },
        1126: function(t, n, e) {
            e(1125);
            for (
                var r = e(53),
                    o = e(86),
                    i = e(225),
                    u = e(83)('toStringTag'),
                    f = 'CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList'.split(
                        ','
                    ),
                    c = 0;
                c < f.length;
                c++
            ) {
                var a = f[c],
                    s = r[a],
                    l = s && s.prototype;
                l && !l[u] && o(l, u, a), (i[a] = i.Array);
            }
        },
        1127: function(t, n, e) {
            var r = e(53).document;
            t.exports = r && r.documentElement;
        },
        1128: function(t, n, e) {
            var r = e(226),
                o = Math.max,
                i = Math.min;
            t.exports = function(t, n) {
                return (t = r(t)) < 0 ? o(t + n, 0) : i(t, n);
            };
        },
        1129: function(t, n, e) {
            var r = e(226),
                o = Math.min;
            t.exports = function(t) {
                return t > 0 ? o(r(t), 9007199254740991) : 0;
            };
        },
        1130: function(t, n, e) {
            var r = e(84),
                o = e(1129),
                i = e(1128);
            t.exports = function(t) {
                return function(n, e, u) {
                    var f,
                        c = r(n),
                        a = o(c.length),
                        s = i(u, a);
                    if (t && e != e) {
                        for (; a > s; ) if ((f = c[s++]) != f) return !0;
                    } else
                        for (; a > s; s++)
                            if ((t || s in c) && c[s] === e) return t || s || 0;
                    return !t && -1;
                };
            };
        },
        1131: function(t, n, e) {
            var r = e(460);
            t.exports = Object('z').propertyIsEnumerable(0)
                ? Object
                : function(t) {
                      return 'String' == r(t) ? t.split('') : Object(t);
                  };
        },
        1132: function(t, n, e) {
            var r = e(65),
                o = e(108),
                i = e(223);
            t.exports = e(64)
                ? Object.defineProperties
                : function(t, n) {
                      o(t);
                      for (var e, u = i(n), f = u.length, c = 0; f > c; )
                          r.f(t, (e = u[c++]), n[e]);
                      return t;
                  };
        },
        1133: function(t, n, e) {
            'use strict';
            var r = e(224),
                o = e(137),
                i = e(221),
                u = {};
            e(86)(u, e(83)('iterator'), function() {
                return this;
            }),
                (t.exports = function(t, n, e) {
                    (t.prototype = r(u, { next: o(1, e) })),
                        i(t, n + ' Iterator');
                });
        },
        1134: function(t, n, e) {
            var r = e(226),
                o = e(230);
            t.exports = function(t) {
                return function(n, e) {
                    var i,
                        u,
                        f = String(o(n)),
                        c = r(e),
                        a = f.length;
                    return c < 0 || c >= a
                        ? t
                            ? ''
                            : void 0
                        : (i = f.charCodeAt(c)) < 55296 ||
                          i > 56319 ||
                          c + 1 === a ||
                          (u = f.charCodeAt(c + 1)) < 56320 ||
                          u > 57343
                            ? t
                                ? f.charAt(c)
                                : i
                            : t
                                ? f.slice(c, c + 2)
                                : u - 56320 + ((i - 55296) << 10) + 65536;
                };
            };
        },
        1135: function(t, n, e) {
            'use strict';
            var r = e(1134)(!0);
            e(463)(
                String,
                'String',
                function(t) {
                    (this._t = String(t)), (this._i = 0);
                },
                function() {
                    var t,
                        n = this._t,
                        e = this._i;
                    return e >= n.length
                        ? { value: void 0, done: !0 }
                        : ((t = r(n, e)),
                          (this._i += t.length),
                          { value: t, done: !1 });
                }
            );
        },
        1136: function(t, n, e) {
            e(1135), e(1126), (t.exports = e(220).f('iterator'));
        },
        1137: function(t, n, e) {
            t.exports = { default: e(1136), __esModule: !0 };
        },
        1138: function(t, n, e) {
            'use strict';
            n.__esModule = !0;
            var r,
                o = e(464),
                i = (r = o) && r.__esModule ? r : { default: r };
            n.default = function(t, n) {
                if (!t)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return !n ||
                    ('object' !==
                        (void 0 === n ? 'undefined' : (0, i.default)(n)) &&
                        'function' != typeof n)
                    ? t
                    : n;
            };
        },
        1139: function(t, n, e) {
            var r = e(87);
            r(r.S + r.F * !e(64), 'Object', { defineProperty: e(65).f });
        },
        1140: function(t, n, e) {
            e(1139);
            var r = e(46).Object;
            t.exports = function(t, n, e) {
                return r.defineProperty(t, n, e);
            };
        },
        1141: function(t, n, e) {
            t.exports = { default: e(1140), __esModule: !0 };
        },
        1142: function(t, n, e) {
            'use strict';
            n.__esModule = !0;
            var r,
                o = e(1141),
                i = (r = o) && r.__esModule ? r : { default: r };
            n.default = (function() {
                function t(t, n) {
                    for (var e = 0; e < n.length; e++) {
                        var r = n[e];
                        (r.enumerable = r.enumerable || !1),
                            (r.configurable = !0),
                            'value' in r && (r.writable = !0),
                            (0, i.default)(t, r.key, r);
                    }
                }
                return function(n, e, r) {
                    return e && t(n.prototype, e), r && t(n, r), n;
                };
            })();
        },
        1143: function(t, n, e) {
            'use strict';
            (n.__esModule = !0),
                (n.default = function(t, n) {
                    if (!(t instanceof n))
                        throw new TypeError(
                            'Cannot call a class as a function'
                        );
                });
        },
        1144: function(t, n) {
            t.exports = function(t) {
                if ('function' != typeof t)
                    throw TypeError(t + ' is not a function!');
                return t;
            };
        },
        1145: function(t, n, e) {
            var r = e(87),
                o = e(46),
                i = e(107);
            t.exports = function(t, n) {
                var e = (o.Object || {})[t] || Object[t],
                    u = {};
                (u[t] = n(e)),
                    r(
                        r.S +
                            r.F *
                                i(function() {
                                    e(1);
                                }),
                        'Object',
                        u
                    );
            };
        },
        1146: function(t, n, e) {
            var r = e(469),
                o = e(468);
            e(1145)('getPrototypeOf', function() {
                return function(t) {
                    return o(r(t));
                };
            });
        },
        1147: function(t, n, e) {
            e(1146), (t.exports = e(46).Object.getPrototypeOf);
        },
        1148: function(t, n, e) {
            t.exports = { default: e(1147), __esModule: !0 };
        },
        1149: function(t, n, e) {
            'use strict';
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.Boot = void 0);
            var r = a(e(1148)),
                o = a(e(1143)),
                i = a(e(1142)),
                u = a(e(1138)),
                f = a(e(1112)),
                c = (function(t) {
                    if (t && t.__esModule) return t;
                    var n = {};
                    if (null != t)
                        for (var e in t)
                            Object.prototype.hasOwnProperty.call(t, e) &&
                                (n[e] = t[e]);
                    return (n.default = t), n;
                })(e(136));
            function a(t) {
                return t && t.__esModule ? t : { default: t };
            }
            n.Boot = (function(t) {
                function n() {
                    return (
                        (0, o.default)(this, n),
                        (0, u.default)(
                            this,
                            (n.__proto__ || (0, r.default)(n)).apply(
                                this,
                                arguments
                            )
                        )
                    );
                }
                return (
                    (0, f.default)(n, t),
                    (0, i.default)(n, [
                        {
                            key: 'create',
                            value: function() {
                                this.add.text(100, 100, 'Hello World!');
                            },
                        },
                    ]),
                    n
                );
            })(c.Scene);
        },
        1150: function(t, n, e) {
            'use strict';
            Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.start = function(t) {
                    return new o.Game({
                        type: t,
                        width: 800,
                        height: 600,
                        parent: 'game',
                        scene: r.Boot,
                    });
                });
            var r = e(1149),
                o = (function(t) {
                    if (t && t.__esModule) return t;
                    var n = {};
                    if (null != t)
                        for (var e in t)
                            Object.prototype.hasOwnProperty.call(t, e) &&
                                (n[e] = t[e]);
                    return (n.default = t), n;
                })(e(136));
        },
        1151: function(t, n) {
            t.exports = function(t) {
                var n = 'undefined' != typeof window && window.location;
                if (!n) throw new Error('fixUrls requires window.location');
                if (!t || 'string' != typeof t) return t;
                var e = n.protocol + '//' + n.host,
                    r = e + n.pathname.replace(/\/[^\/]*$/, '/');
                return t.replace(
                    /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
                    function(t, n) {
                        var o,
                            i = n
                                .trim()
                                .replace(/^"(.*)"$/, function(t, n) {
                                    return n;
                                })
                                .replace(/^'(.*)'$/, function(t, n) {
                                    return n;
                                });
                        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(
                            i
                        )
                            ? t
                            : ((o =
                                  0 === i.indexOf('//')
                                      ? i
                                      : 0 === i.indexOf('/')
                                          ? e + i
                                          : r + i.replace(/^\.\//, '')),
                              'url(' + JSON.stringify(o) + ')');
                    }
                );
            };
        },
        1152: function(t, n, e) {
            var r,
                o,
                i = {},
                u = ((r = function() {
                    return window && document && document.all && !window.atob;
                }),
                function() {
                    return void 0 === o && (o = r.apply(this, arguments)), o;
                }),
                f = (function(t) {
                    var n = {};
                    return function(t) {
                        if ('function' == typeof t) return t();
                        if (void 0 === n[t]) {
                            var e = function(t) {
                                return document.querySelector(t);
                            }.call(this, t);
                            if (
                                window.HTMLIFrameElement &&
                                e instanceof window.HTMLIFrameElement
                            )
                                try {
                                    e = e.contentDocument.head;
                                } catch (t) {
                                    e = null;
                                }
                            n[t] = e;
                        }
                        return n[t];
                    };
                })(),
                c = null,
                a = 0,
                s = [],
                l = e(1151);
            function p(t, n) {
                for (var e = 0; e < t.length; e++) {
                    var r = t[e],
                        o = i[r.id];
                    if (o) {
                        o.refs++;
                        for (var u = 0; u < o.parts.length; u++)
                            o.parts[u](r.parts[u]);
                        for (; u < r.parts.length; u++)
                            o.parts.push(m(r.parts[u], n));
                    } else {
                        var f = [];
                        for (u = 0; u < r.parts.length; u++)
                            f.push(m(r.parts[u], n));
                        i[r.id] = { id: r.id, refs: 1, parts: f };
                    }
                }
            }
            function d(t, n) {
                for (var e = [], r = {}, o = 0; o < t.length; o++) {
                    var i = t[o],
                        u = n.base ? i[0] + n.base : i[0],
                        f = { css: i[1], media: i[2], sourceMap: i[3] };
                    r[u]
                        ? r[u].parts.push(f)
                        : e.push((r[u] = { id: u, parts: [f] }));
                }
                return e;
            }
            function y(t, n) {
                var e = f(t.insertInto);
                if (!e)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
                    );
                var r = s[s.length - 1];
                if ('top' === t.insertAt)
                    r
                        ? r.nextSibling
                            ? e.insertBefore(n, r.nextSibling)
                            : e.appendChild(n)
                        : e.insertBefore(n, e.firstChild),
                        s.push(n);
                else if ('bottom' === t.insertAt) e.appendChild(n);
                else {
                    if ('object' != typeof t.insertAt || !t.insertAt.before)
                        throw new Error(
                            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
                        );
                    var o = f(t.insertInto + ' ' + t.insertAt.before);
                    e.insertBefore(n, o);
                }
            }
            function v(t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
                var n = s.indexOf(t);
                n >= 0 && s.splice(n, 1);
            }
            function h(t) {
                var n = document.createElement('style');
                return (
                    void 0 === t.attrs.type && (t.attrs.type = 'text/css'),
                    b(n, t.attrs),
                    y(t, n),
                    n
                );
            }
            function b(t, n) {
                Object.keys(n).forEach(function(e) {
                    t.setAttribute(e, n[e]);
                });
            }
            function m(t, n) {
                var e, r, o, i;
                if (n.transform && t.css) {
                    if (!(i = n.transform(t.css))) return function() {};
                    t.css = i;
                }
                if (n.singleton) {
                    var u = a++;
                    (e = c || (c = h(n))),
                        (r = O.bind(null, e, u, !1)),
                        (o = O.bind(null, e, u, !0));
                } else
                    t.sourceMap &&
                    'function' == typeof URL &&
                    'function' == typeof URL.createObjectURL &&
                    'function' == typeof URL.revokeObjectURL &&
                    'function' == typeof Blob &&
                    'function' == typeof btoa
                        ? ((e = (function(t) {
                              var n = document.createElement('link');
                              return (
                                  void 0 === t.attrs.type &&
                                      (t.attrs.type = 'text/css'),
                                  (t.attrs.rel = 'stylesheet'),
                                  b(n, t.attrs),
                                  y(t, n),
                                  n
                              );
                          })(n)),
                          (r = function(t, n, e) {
                              var r = e.css,
                                  o = e.sourceMap,
                                  i = void 0 === n.convertToAbsoluteUrls && o;
                              (n.convertToAbsoluteUrls || i) && (r = l(r));
                              o &&
                                  (r +=
                                      '\n/*# sourceMappingURL=data:application/json;base64,' +
                                      btoa(
                                          unescape(
                                              encodeURIComponent(
                                                  JSON.stringify(o)
                                              )
                                          )
                                      ) +
                                      ' */');
                              var u = new Blob([r], { type: 'text/css' }),
                                  f = t.href;
                              (t.href = URL.createObjectURL(u)),
                                  f && URL.revokeObjectURL(f);
                          }.bind(null, e, n)),
                          (o = function() {
                              v(e), e.href && URL.revokeObjectURL(e.href);
                          }))
                        : ((e = h(n)),
                          (r = function(t, n) {
                              var e = n.css,
                                  r = n.media;
                              r && t.setAttribute('media', r);
                              if (t.styleSheet) t.styleSheet.cssText = e;
                              else {
                                  for (; t.firstChild; )
                                      t.removeChild(t.firstChild);
                                  t.appendChild(document.createTextNode(e));
                              }
                          }.bind(null, e)),
                          (o = function() {
                              v(e);
                          }));
                return (
                    r(t),
                    function(n) {
                        if (n) {
                            if (
                                n.css === t.css &&
                                n.media === t.media &&
                                n.sourceMap === t.sourceMap
                            )
                                return;
                            r((t = n));
                        } else o();
                    }
                );
            }
            t.exports = function(t, n) {
                if (
                    'undefined' != typeof DEBUG &&
                    DEBUG &&
                    'object' != typeof document
                )
                    throw new Error(
                        'The style-loader cannot be used in a non-browser environment'
                    );
                ((n = n || {}).attrs =
                    'object' == typeof n.attrs ? n.attrs : {}),
                    n.singleton ||
                        'boolean' == typeof n.singleton ||
                        (n.singleton = u()),
                    n.insertInto || (n.insertInto = 'head'),
                    n.insertAt || (n.insertAt = 'bottom');
                var e = d(t, n);
                return (
                    p(e, n),
                    function(t) {
                        for (var r = [], o = 0; o < e.length; o++) {
                            var u = e[o];
                            (f = i[u.id]).refs--, r.push(f);
                        }
                        t && p(d(t, n), n);
                        for (o = 0; o < r.length; o++) {
                            var f;
                            if (0 === (f = r[o]).refs) {
                                for (var c = 0; c < f.parts.length; c++)
                                    f.parts[c]();
                                delete i[f.id];
                            }
                        }
                    }
                );
            };
            var g,
                _ = ((g = []),
                function(t, n) {
                    return (g[t] = n), g.filter(Boolean).join('\n');
                });
            function O(t, n, e, r) {
                var o = e ? '' : r.css;
                if (t.styleSheet) t.styleSheet.cssText = _(n, o);
                else {
                    var i = document.createTextNode(o),
                        u = t.childNodes;
                    u[n] && t.removeChild(u[n]),
                        u.length ? t.insertBefore(i, u[n]) : t.appendChild(i);
                }
            }
        },
        1153: function(t, n) {
            t.exports = function(t) {
                var n = [];
                return (
                    (n.toString = function() {
                        return this.map(function(n) {
                            var e = (function(t, n) {
                                var e = t[1] || '',
                                    r = t[3];
                                if (!r) return e;
                                if (n && 'function' == typeof btoa) {
                                    var o = ((u = r),
                                        '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                                            btoa(
                                                unescape(
                                                    encodeURIComponent(
                                                        JSON.stringify(u)
                                                    )
                                                )
                                            ) +
                                            ' */'),
                                        i = r.sources.map(function(t) {
                                            return (
                                                '/*# sourceURL=' +
                                                r.sourceRoot +
                                                t +
                                                ' */'
                                            );
                                        });
                                    return [e]
                                        .concat(i)
                                        .concat([o])
                                        .join('\n');
                                }
                                var u;
                                return [e].join('\n');
                            })(n, t);
                            return n[2] ? '@media ' + n[2] + '{' + e + '}' : e;
                        }).join('');
                    }),
                    (n.i = function(t, e) {
                        'string' == typeof t && (t = [[null, t, '']]);
                        for (var r = {}, o = 0; o < this.length; o++) {
                            var i = this[o][0];
                            'number' == typeof i && (r[i] = !0);
                        }
                        for (o = 0; o < t.length; o++) {
                            var u = t[o];
                            ('number' == typeof u[0] && r[u[0]]) ||
                                (e && !u[2]
                                    ? (u[2] = e)
                                    : e &&
                                      (u[2] = '(' + u[2] + ') and (' + e + ')'),
                                n.push(u));
                        }
                    }),
                    n
                );
            };
        },
        1154: function(t, n, e) {
            (t.exports = e(1153)(!1)).push([
                t.i,
                'html,\nbody {\n    height: 100%;\n    margin: 0;\n}\n\nbody {\n    background-color: #808080;\n}\n\n#game {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\ncanvas {\n    cursor: none;\n}\n',
                '',
            ]);
        },
        1155: function(t, n, e) {
            var r = e(1154);
            'string' == typeof r && (r = [[t.i, r, '']]);
            var o = { hmr: !0, transform: void 0, insertInto: void 0 };
            e(1152)(r, o);
            r.locals && (t.exports = r.locals);
        },
        1156: function(t, n, e) {
            'use strict';
            e(1155);
            var r = e(1150),
                o = (function(t) {
                    if (t && t.__esModule) return t;
                    var n = {};
                    if (null != t)
                        for (var e in t)
                            Object.prototype.hasOwnProperty.call(t, e) &&
                                (n[e] = t[e]);
                    return (n.default = t), n;
                })(e(136));
            (0, r.start)(o.AUTO);
        },
        137: function(t, n) {
            t.exports = function(t, n) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: n,
                };
            };
        },
        138: function(t, n) {
            var e = 0,
                r = Math.random();
            t.exports = function(t) {
                return 'Symbol('.concat(
                    void 0 === t ? '' : t,
                    ')_',
                    (++e + r).toString(36)
                );
            };
        },
        139: function(t, n) {
            t.exports = !0;
        },
        218: function(t, n) {
            n.f = {}.propertyIsEnumerable;
        },
        219: function(t, n, e) {
            var r = e(53),
                o = e(46),
                i = e(139),
                u = e(220),
                f = e(65).f;
            t.exports = function(t) {
                var n = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
                '_' == t.charAt(0) || t in n || f(n, t, { value: u.f(t) });
            };
        },
        220: function(t, n, e) {
            n.f = e(83);
        },
        221: function(t, n, e) {
            var r = e(65).f,
                o = e(66),
                i = e(83)('toStringTag');
            t.exports = function(t, n, e) {
                t &&
                    !o((t = e ? t : t.prototype), i) &&
                    r(t, i, { configurable: !0, value: n });
            };
        },
        222: function(t, n) {
            t.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
                ','
            );
        },
        223: function(t, n, e) {
            var r = e(461),
                o = e(222);
            t.exports =
                Object.keys ||
                function(t) {
                    return r(t, o);
                };
        },
        224: function(t, n, e) {
            var r = e(108),
                o = e(1132),
                i = e(222),
                u = e(229)('IE_PROTO'),
                f = function() {},
                c = function() {
                    var t,
                        n = e(465)('iframe'),
                        r = i.length;
                    for (
                        n.style.display = 'none',
                            e(1127).appendChild(n),
                            n.src = 'javascript:',
                            (t = n.contentWindow.document).open(),
                            t.write('<script>document.F=Object</script>'),
                            t.close(),
                            c = t.F;
                        r--;

                    )
                        delete c.prototype[i[r]];
                    return c();
                };
            t.exports =
                Object.create ||
                function(t, n) {
                    var e;
                    return (
                        null !== t
                            ? ((f.prototype = r(t)),
                              (e = new f()),
                              (f.prototype = null),
                              (e[u] = t))
                            : (e = c()),
                        void 0 === n ? e : o(e, n)
                    );
                };
        },
        225: function(t, n) {
            t.exports = {};
        },
        226: function(t, n) {
            var e = Math.ceil,
                r = Math.floor;
            t.exports = function(t) {
                return isNaN((t = +t)) ? 0 : (t > 0 ? r : e)(t);
            };
        },
        227: function(t, n, e) {
            var r = e(85);
            t.exports = function(t, n) {
                if (!r(t)) return t;
                var e, o;
                if (
                    n &&
                    'function' == typeof (e = t.toString) &&
                    !r((o = e.call(t)))
                )
                    return o;
                if ('function' == typeof (e = t.valueOf) && !r((o = e.call(t))))
                    return o;
                if (
                    !n &&
                    'function' == typeof (e = t.toString) &&
                    !r((o = e.call(t)))
                )
                    return o;
                throw TypeError("Can't convert object to primitive value");
            };
        },
        228: function(t, n, e) {
            var r = e(46),
                o = e(53),
                i = o['__core-js_shared__'] || (o['__core-js_shared__'] = {});
            (t.exports = function(t, n) {
                return i[t] || (i[t] = void 0 !== n ? n : {});
            })('versions', []).push({
                version: r.version,
                mode: e(139) ? 'pure' : 'global',
                copyright: '© 2018 Denis Pushkarev (zloirock.ru)',
            });
        },
        229: function(t, n, e) {
            var r = e(228)('keys'),
                o = e(138);
            t.exports = function(t) {
                return r[t] || (r[t] = o(t));
            };
        },
        230: function(t, n) {
            t.exports = function(t) {
                if (void 0 == t) throw TypeError("Can't call method on  " + t);
                return t;
            };
        },
        457: function(t, n, e) {
            var r = e(218),
                o = e(137),
                i = e(84),
                u = e(227),
                f = e(66),
                c = e(466),
                a = Object.getOwnPropertyDescriptor;
            n.f = e(64)
                ? a
                : function(t, n) {
                      if (((t = i(t)), (n = u(n, !0)), c))
                          try {
                              return a(t, n);
                          } catch (t) {}
                      if (f(t, n)) return o(!r.f.call(t, n), t[n]);
                  };
        },
        458: function(t, n, e) {
            var r = e(461),
                o = e(222).concat('length', 'prototype');
            n.f =
                Object.getOwnPropertyNames ||
                function(t) {
                    return r(t, o);
                };
        },
        459: function(t, n) {
            n.f = Object.getOwnPropertySymbols;
        },
        46: function(t, n) {
            var e = (t.exports = { version: '2.5.6' });
            'number' == typeof __e && (__e = e);
        },
        460: function(t, n) {
            var e = {}.toString;
            t.exports = function(t) {
                return e.call(t).slice(8, -1);
            };
        },
        461: function(t, n, e) {
            var r = e(66),
                o = e(84),
                i = e(1130)(!1),
                u = e(229)('IE_PROTO');
            t.exports = function(t, n) {
                var e,
                    f = o(t),
                    c = 0,
                    a = [];
                for (e in f) e != u && r(f, e) && a.push(e);
                for (; n.length > c; )
                    r(f, (e = n[c++])) && (~i(a, e) || a.push(e));
                return a;
            };
        },
        462: function(t, n, e) {
            t.exports = e(86);
        },
        463: function(t, n, e) {
            'use strict';
            var r = e(139),
                o = e(87),
                i = e(462),
                u = e(86),
                f = e(225),
                c = e(1133),
                a = e(221),
                s = e(468),
                l = e(83)('iterator'),
                p = !([].keys && 'next' in [].keys()),
                d = function() {
                    return this;
                };
            t.exports = function(t, n, e, y, v, h, b) {
                c(e, n, y);
                var m,
                    g,
                    _,
                    O = function(t) {
                        if (!p && t in j) return j[t];
                        switch (t) {
                            case 'keys':
                            case 'values':
                                return function() {
                                    return new e(this, t);
                                };
                        }
                        return function() {
                            return new e(this, t);
                        };
                    },
                    x = n + ' Iterator',
                    w = 'values' == v,
                    S = !1,
                    j = t.prototype,
                    M = j[l] || j['@@iterator'] || (v && j[v]),
                    P = M || O(v),
                    L = v ? (w ? O('entries') : P) : void 0,
                    E = ('Array' == n && j.entries) || M;
                if (
                    (E &&
                        (_ = s(E.call(new t()))) !== Object.prototype &&
                        _.next &&
                        (a(_, x, !0),
                        r || 'function' == typeof _[l] || u(_, l, d)),
                    w &&
                        M &&
                        'values' !== M.name &&
                        ((S = !0),
                        (P = function() {
                            return M.call(this);
                        })),
                    (r && !b) || (!p && !S && j[l]) || u(j, l, P),
                    (f[n] = P),
                    (f[x] = d),
                    v)
                )
                    if (
                        ((m = {
                            values: w ? P : O('values'),
                            keys: h ? P : O('keys'),
                            entries: L,
                        }),
                        b)
                    )
                        for (g in m) g in j || i(j, g, m[g]);
                    else o(o.P + o.F * (p || S), n, m);
                return m;
            };
        },
        464: function(t, n, e) {
            'use strict';
            n.__esModule = !0;
            var r = u(e(1137)),
                o = u(e(1122)),
                i =
                    'function' == typeof o.default &&
                    'symbol' == typeof r.default
                        ? function(t) {
                              return typeof t;
                          }
                        : function(t) {
                              return t &&
                                  'function' == typeof o.default &&
                                  t.constructor === o.default &&
                                  t !== o.default.prototype
                                  ? 'symbol'
                                  : typeof t;
                          };
            function u(t) {
                return t && t.__esModule ? t : { default: t };
            }
            n.default =
                'function' == typeof o.default && 'symbol' === i(r.default)
                    ? function(t) {
                          return void 0 === t ? 'undefined' : i(t);
                      }
                    : function(t) {
                          return t &&
                              'function' == typeof o.default &&
                              t.constructor === o.default &&
                              t !== o.default.prototype
                              ? 'symbol'
                              : void 0 === t
                                  ? 'undefined'
                                  : i(t);
                      };
        },
        465: function(t, n, e) {
            var r = e(85),
                o = e(53).document,
                i = r(o) && r(o.createElement);
            t.exports = function(t) {
                return i ? o.createElement(t) : {};
            };
        },
        466: function(t, n, e) {
            t.exports =
                !e(64) &&
                !e(107)(function() {
                    return (
                        7 !=
                        Object.defineProperty(e(465)('div'), 'a', {
                            get: function() {
                                return 7;
                            },
                        }).a
                    );
                });
        },
        467: function(t, n, e) {
            var r = e(1144);
            t.exports = function(t, n, e) {
                if ((r(t), void 0 === n)) return t;
                switch (e) {
                    case 1:
                        return function(e) {
                            return t.call(n, e);
                        };
                    case 2:
                        return function(e, r) {
                            return t.call(n, e, r);
                        };
                    case 3:
                        return function(e, r, o) {
                            return t.call(n, e, r, o);
                        };
                }
                return function() {
                    return t.apply(n, arguments);
                };
            };
        },
        468: function(t, n, e) {
            var r = e(66),
                o = e(469),
                i = e(229)('IE_PROTO'),
                u = Object.prototype;
            t.exports =
                Object.getPrototypeOf ||
                function(t) {
                    return (
                        (t = o(t)),
                        r(t, i)
                            ? t[i]
                            : 'function' == typeof t.constructor &&
                              t instanceof t.constructor
                                ? t.constructor.prototype
                                : t instanceof Object
                                    ? u
                                    : null
                    );
                };
        },
        469: function(t, n, e) {
            var r = e(230);
            t.exports = function(t) {
                return Object(r(t));
            };
        },
        53: function(t, n) {
            var e = (t.exports =
                'undefined' != typeof window && window.Math == Math
                    ? window
                    : 'undefined' != typeof self && self.Math == Math
                        ? self
                        : Function('return this')());
            'number' == typeof __g && (__g = e);
        },
        64: function(t, n, e) {
            t.exports = !e(107)(function() {
                return (
                    7 !=
                    Object.defineProperty({}, 'a', {
                        get: function() {
                            return 7;
                        },
                    }).a
                );
            });
        },
        65: function(t, n, e) {
            var r = e(108),
                o = e(466),
                i = e(227),
                u = Object.defineProperty;
            n.f = e(64)
                ? Object.defineProperty
                : function(t, n, e) {
                      if ((r(t), (n = i(n, !0)), r(e), o))
                          try {
                              return u(t, n, e);
                          } catch (t) {}
                      if ('get' in e || 'set' in e)
                          throw TypeError('Accessors not supported!');
                      return 'value' in e && (t[n] = e.value), t;
                  };
        },
        66: function(t, n) {
            var e = {}.hasOwnProperty;
            t.exports = function(t, n) {
                return e.call(t, n);
            };
        },
        83: function(t, n, e) {
            var r = e(228)('wks'),
                o = e(138),
                i = e(53).Symbol,
                u = 'function' == typeof i;
            (t.exports = function(t) {
                return (
                    r[t] || (r[t] = (u && i[t]) || (u ? i : o)('Symbol.' + t))
                );
            }).store = r;
        },
        84: function(t, n, e) {
            var r = e(1131),
                o = e(230);
            t.exports = function(t) {
                return r(o(t));
            };
        },
        85: function(t, n) {
            t.exports = function(t) {
                return 'object' == typeof t
                    ? null !== t
                    : 'function' == typeof t;
            };
        },
        86: function(t, n, e) {
            var r = e(65),
                o = e(137);
            t.exports = e(64)
                ? function(t, n, e) {
                      return r.f(t, n, o(1, e));
                  }
                : function(t, n, e) {
                      return (t[n] = e), t;
                  };
        },
        87: function(t, n, e) {
            var r = e(53),
                o = e(46),
                i = e(467),
                u = e(86),
                f = e(66),
                c = function(t, n, e) {
                    var a,
                        s,
                        l,
                        p = t & c.F,
                        d = t & c.G,
                        y = t & c.S,
                        v = t & c.P,
                        h = t & c.B,
                        b = t & c.W,
                        m = d ? o : o[n] || (o[n] = {}),
                        g = m.prototype,
                        _ = d ? r : y ? r[n] : (r[n] || {}).prototype;
                    for (a in (d && (e = n), e))
                        ((s = !p && _ && void 0 !== _[a]) && f(m, a)) ||
                            ((l = s ? _[a] : e[a]),
                            (m[a] =
                                d && 'function' != typeof _[a]
                                    ? e[a]
                                    : h && s
                                        ? i(l, r)
                                        : b && _[a] == l
                                            ? (function(t) {
                                                  var n = function(n, e, r) {
                                                      if (this instanceof t) {
                                                          switch (
                                                              arguments.length
                                                          ) {
                                                              case 0:
                                                                  return new t();
                                                              case 1:
                                                                  return new t(
                                                                      n
                                                                  );
                                                              case 2:
                                                                  return new t(
                                                                      n,
                                                                      e
                                                                  );
                                                          }
                                                          return new t(n, e, r);
                                                      }
                                                      return t.apply(
                                                          this,
                                                          arguments
                                                      );
                                                  };
                                                  return (
                                                      (n.prototype =
                                                          t.prototype),
                                                      n
                                                  );
                                              })(l)
                                            : v && 'function' == typeof l
                                                ? i(Function.call, l)
                                                : l),
                            v &&
                                (((m.virtual || (m.virtual = {}))[a] = l),
                                t & c.R && g && !g[a] && u(g, a, l)));
                };
            (c.F = 1),
                (c.G = 2),
                (c.S = 4),
                (c.P = 8),
                (c.B = 16),
                (c.W = 32),
                (c.U = 64),
                (c.R = 128),
                (t.exports = c);
        },
    },
    [[1156, 0, 1]],
]);
