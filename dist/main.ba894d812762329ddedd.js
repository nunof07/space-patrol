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
    [3],
    [
        function(t, e, n) {
            t.exports = !n(2)(function() {
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
        function(t, e) {
            t.exports = function(t) {
                return 'object' == typeof t
                    ? null !== t
                    : 'function' == typeof t;
            };
        },
        function(t, e) {
            t.exports = function(t) {
                try {
                    return !!t();
                } catch (t) {
                    return !0;
                }
            };
        },
        function(t, e, n) {
            var r = n(16),
                o = n(15),
                i = n(13),
                u = Object.defineProperty;
            e.f = n(0)
                ? Object.defineProperty
                : function(t, e, n) {
                      if ((r(t), (e = i(e, !0)), r(n), o))
                          try {
                              return u(t, e, n);
                          } catch (t) {}
                      if ('get' in n || 'set' in n)
                          throw TypeError('Accessors not supported!');
                      return 'value' in n && (t[e] = n.value), t;
                  };
        },
        function(t, e) {
            var n = (t.exports = { version: '2.5.6' });
            'number' == typeof __e && (__e = n);
        },
        function(t, e) {
            var n = (t.exports =
                'undefined' != typeof window && window.Math == Math
                    ? window
                    : 'undefined' != typeof self && self.Math == Math
                        ? self
                        : Function('return this')());
            'number' == typeof __g && (__g = n);
        },
        function(t, e, n) {
            'use strict';
            e.__esModule = !0;
            var r,
                o = n(23),
                i = (r = o) && r.__esModule ? r : { default: r };
            e.default = (function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                            (r.configurable = !0),
                            'value' in r && (r.writable = !0),
                            (0, i.default)(t, r.key, r);
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e;
                };
            })();
        },
        function(t, e, n) {
            'use strict';
            (e.__esModule = !0),
                (e.default = function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError(
                            'Cannot call a class as a function',
                        );
                });
        },
        ,
        ,
        function(t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.NotCovered = void 0);
            var r = i(n(7)),
                o = i(n(6));
            function i(t) {
                return t && t.__esModule ? t : { default: t };
            }
            e.NotCovered = (function() {
                function t(e) {
                    (0, r.default)(this, t), (this.value = e);
                }
                return (
                    (0, o.default)(t, [
                        {
                            key: 'add',
                            value: function(t) {
                                return this.value + t;
                            },
                        },
                    ]),
                    t
                );
            })();
        },
        function(t, e) {
            var n = {}.hasOwnProperty;
            t.exports = function(t, e) {
                return n.call(t, e);
            };
        },
        function(t, e) {
            t.exports = function(t, e) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: e,
                };
            };
        },
        function(t, e, n) {
            var r = n(1);
            t.exports = function(t, e) {
                if (!r(t)) return t;
                var n, o;
                if (
                    e &&
                    'function' == typeof (n = t.toString) &&
                    !r((o = n.call(t)))
                )
                    return o;
                if ('function' == typeof (n = t.valueOf) && !r((o = n.call(t))))
                    return o;
                if (
                    !e &&
                    'function' == typeof (n = t.toString) &&
                    !r((o = n.call(t)))
                )
                    return o;
                throw TypeError("Can't convert object to primitive value");
            };
        },
        function(t, e, n) {
            var r = n(1),
                o = n(5).document,
                i = r(o) && r(o.createElement);
            t.exports = function(t) {
                return i ? o.createElement(t) : {};
            };
        },
        function(t, e, n) {
            t.exports =
                !n(0) &&
                !n(2)(function() {
                    return (
                        7 !=
                        Object.defineProperty(n(14)('div'), 'a', {
                            get: function() {
                                return 7;
                            },
                        }).a
                    );
                });
        },
        function(t, e, n) {
            var r = n(1);
            t.exports = function(t) {
                if (!r(t)) throw TypeError(t + ' is not an object!');
                return t;
            };
        },
        function(t, e, n) {
            var r = n(3),
                o = n(12);
            t.exports = n(0)
                ? function(t, e, n) {
                      return r.f(t, e, o(1, n));
                  }
                : function(t, e, n) {
                      return (t[e] = n), t;
                  };
        },
        function(t, e) {
            t.exports = function(t) {
                if ('function' != typeof t)
                    throw TypeError(t + ' is not a function!');
                return t;
            };
        },
        function(t, e, n) {
            var r = n(18);
            t.exports = function(t, e, n) {
                if ((r(t), void 0 === e)) return t;
                switch (n) {
                    case 1:
                        return function(n) {
                            return t.call(e, n);
                        };
                    case 2:
                        return function(n, r) {
                            return t.call(e, n, r);
                        };
                    case 3:
                        return function(n, r, o) {
                            return t.call(e, n, r, o);
                        };
                }
                return function() {
                    return t.apply(e, arguments);
                };
            };
        },
        function(t, e, n) {
            var r = n(5),
                o = n(4),
                i = n(19),
                u = n(17),
                a = n(11),
                f = function(t, e, n) {
                    var s,
                        c,
                        l,
                        p = t & f.F,
                        d = t & f.G,
                        v = t & f.S,
                        h = t & f.P,
                        y = t & f.B,
                        b = t & f.W,
                        m = d ? o : o[e] || (o[e] = {}),
                        g = m.prototype,
                        w = d ? r : v ? r[e] : (r[e] || {}).prototype;
                    for (s in (d && (n = e), n))
                        ((c = !p && w && void 0 !== w[s]) && a(m, s)) ||
                            ((l = c ? w[s] : n[s]),
                            (m[s] =
                                d && 'function' != typeof w[s]
                                    ? n[s]
                                    : y && c
                                        ? i(l, r)
                                        : b && w[s] == l
                                            ? (function(t) {
                                                  var e = function(e, n, r) {
                                                      if (this instanceof t) {
                                                          switch (
                                                              arguments.length
                                                          ) {
                                                              case 0:
                                                                  return new t();
                                                              case 1:
                                                                  return new t(
                                                                      e,
                                                                  );
                                                              case 2:
                                                                  return new t(
                                                                      e,
                                                                      n,
                                                                  );
                                                          }
                                                          return new t(e, n, r);
                                                      }
                                                      return t.apply(
                                                          this,
                                                          arguments,
                                                      );
                                                  };
                                                  return (
                                                      (e.prototype =
                                                          t.prototype),
                                                      e
                                                  );
                                              })(l)
                                            : h && 'function' == typeof l
                                                ? i(Function.call, l)
                                                : l),
                            h &&
                                (((m.virtual || (m.virtual = {}))[s] = l),
                                t & f.R && g && !g[s] && u(g, s, l)));
                };
            (f.F = 1),
                (f.G = 2),
                (f.S = 4),
                (f.P = 8),
                (f.B = 16),
                (f.W = 32),
                (f.U = 64),
                (f.R = 128),
                (t.exports = f);
        },
        function(t, e, n) {
            var r = n(20);
            r(r.S + r.F * !n(0), 'Object', { defineProperty: n(3).f });
        },
        function(t, e, n) {
            n(21);
            var r = n(4).Object;
            t.exports = function(t, e, n) {
                return r.defineProperty(t, e, n);
            };
        },
        function(t, e, n) {
            t.exports = { default: n(22), __esModule: !0 };
        },
        function(t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.Message = void 0);
            var r = i(n(7)),
                o = i(n(6));
            function i(t) {
                return t && t.__esModule ? t : { default: t };
            }
            e.Message = (function() {
                function t(e) {
                    (0, r.default)(this, t), (this.msg = e);
                }
                return (
                    (0, o.default)(t, [
                        {
                            key: 'output',
                            value: function() {
                                console.log(this.msg);
                            },
                        },
                        {
                            key: 'value',
                            value: function() {
                                return this.msg;
                            },
                        },
                    ]),
                    t
                );
            })();
        },
        function(t, e) {
            t.exports = function(t) {
                var e = 'undefined' != typeof window && window.location;
                if (!e) throw new Error('fixUrls requires window.location');
                if (!t || 'string' != typeof t) return t;
                var n = e.protocol + '//' + e.host,
                    r = n + e.pathname.replace(/\/[^\/]*$/, '/');
                return t.replace(
                    /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
                    function(t, e) {
                        var o,
                            i = e
                                .trim()
                                .replace(/^"(.*)"$/, function(t, e) {
                                    return e;
                                })
                                .replace(/^'(.*)'$/, function(t, e) {
                                    return e;
                                });
                        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(
                            i,
                        )
                            ? t
                            : ((o =
                                  0 === i.indexOf('//')
                                      ? i
                                      : 0 === i.indexOf('/')
                                          ? n + i
                                          : r + i.replace(/^\.\//, '')),
                              'url(' + JSON.stringify(o) + ')');
                    },
                );
            };
        },
        function(t, e, n) {
            var r,
                o,
                i = {},
                u = ((r = function() {
                    return window && document && document.all && !window.atob;
                }),
                function() {
                    return void 0 === o && (o = r.apply(this, arguments)), o;
                }),
                a = (function(t) {
                    var e = {};
                    return function(t) {
                        if ('function' == typeof t) return t();
                        if (void 0 === e[t]) {
                            var n = function(t) {
                                return document.querySelector(t);
                            }.call(this, t);
                            if (
                                window.HTMLIFrameElement &&
                                n instanceof window.HTMLIFrameElement
                            )
                                try {
                                    n = n.contentDocument.head;
                                } catch (t) {
                                    n = null;
                                }
                            e[t] = n;
                        }
                        return e[t];
                    };
                })(),
                f = null,
                s = 0,
                c = [],
                l = n(25);
            function p(t, e) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n],
                        o = i[r.id];
                    if (o) {
                        o.refs++;
                        for (var u = 0; u < o.parts.length; u++)
                            o.parts[u](r.parts[u]);
                        for (; u < r.parts.length; u++)
                            o.parts.push(m(r.parts[u], e));
                    } else {
                        var a = [];
                        for (u = 0; u < r.parts.length; u++)
                            a.push(m(r.parts[u], e));
                        i[r.id] = { id: r.id, refs: 1, parts: a };
                    }
                }
            }
            function d(t, e) {
                for (var n = [], r = {}, o = 0; o < t.length; o++) {
                    var i = t[o],
                        u = e.base ? i[0] + e.base : i[0],
                        a = { css: i[1], media: i[2], sourceMap: i[3] };
                    r[u]
                        ? r[u].parts.push(a)
                        : n.push((r[u] = { id: u, parts: [a] }));
                }
                return n;
            }
            function v(t, e) {
                var n = a(t.insertInto);
                if (!n)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.",
                    );
                var r = c[c.length - 1];
                if ('top' === t.insertAt)
                    r
                        ? r.nextSibling
                            ? n.insertBefore(e, r.nextSibling)
                            : n.appendChild(e)
                        : n.insertBefore(e, n.firstChild),
                        c.push(e);
                else if ('bottom' === t.insertAt) n.appendChild(e);
                else {
                    if ('object' != typeof t.insertAt || !t.insertAt.before)
                        throw new Error(
                            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n",
                        );
                    var o = a(t.insertInto + ' ' + t.insertAt.before);
                    n.insertBefore(e, o);
                }
            }
            function h(t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
                var e = c.indexOf(t);
                e >= 0 && c.splice(e, 1);
            }
            function y(t) {
                var e = document.createElement('style');
                return (
                    void 0 === t.attrs.type && (t.attrs.type = 'text/css'),
                    b(e, t.attrs),
                    v(t, e),
                    e
                );
            }
            function b(t, e) {
                Object.keys(e).forEach(function(n) {
                    t.setAttribute(n, e[n]);
                });
            }
            function m(t, e) {
                var n, r, o, i;
                if (e.transform && t.css) {
                    if (!(i = e.transform(t.css))) return function() {};
                    t.css = i;
                }
                if (e.singleton) {
                    var u = s++;
                    (n = f || (f = y(e))),
                        (r = x.bind(null, n, u, !1)),
                        (o = x.bind(null, n, u, !0));
                } else
                    t.sourceMap &&
                    'function' == typeof URL &&
                    'function' == typeof URL.createObjectURL &&
                    'function' == typeof URL.revokeObjectURL &&
                    'function' == typeof Blob &&
                    'function' == typeof btoa
                        ? ((n = (function(t) {
                              var e = document.createElement('link');
                              return (
                                  void 0 === t.attrs.type &&
                                      (t.attrs.type = 'text/css'),
                                  (t.attrs.rel = 'stylesheet'),
                                  b(e, t.attrs),
                                  v(t, e),
                                  e
                              );
                          })(e)),
                          (r = function(t, e, n) {
                              var r = n.css,
                                  o = n.sourceMap,
                                  i = void 0 === e.convertToAbsoluteUrls && o;
                              (e.convertToAbsoluteUrls || i) && (r = l(r));
                              o &&
                                  (r +=
                                      '\n/*# sourceMappingURL=data:application/json;base64,' +
                                      btoa(
                                          unescape(
                                              encodeURIComponent(
                                                  JSON.stringify(o),
                                              ),
                                          ),
                                      ) +
                                      ' */');
                              var u = new Blob([r], { type: 'text/css' }),
                                  a = t.href;
                              (t.href = URL.createObjectURL(u)),
                                  a && URL.revokeObjectURL(a);
                          }.bind(null, n, e)),
                          (o = function() {
                              h(n), n.href && URL.revokeObjectURL(n.href);
                          }))
                        : ((n = y(e)),
                          (r = function(t, e) {
                              var n = e.css,
                                  r = e.media;
                              r && t.setAttribute('media', r);
                              if (t.styleSheet) t.styleSheet.cssText = n;
                              else {
                                  for (; t.firstChild; )
                                      t.removeChild(t.firstChild);
                                  t.appendChild(document.createTextNode(n));
                              }
                          }.bind(null, n)),
                          (o = function() {
                              h(n);
                          }));
                return (
                    r(t),
                    function(e) {
                        if (e) {
                            if (
                                e.css === t.css &&
                                e.media === t.media &&
                                e.sourceMap === t.sourceMap
                            )
                                return;
                            r((t = e));
                        } else o();
                    }
                );
            }
            t.exports = function(t, e) {
                if (
                    'undefined' != typeof DEBUG &&
                    DEBUG &&
                    'object' != typeof document
                )
                    throw new Error(
                        'The style-loader cannot be used in a non-browser environment',
                    );
                ((e = e || {}).attrs =
                    'object' == typeof e.attrs ? e.attrs : {}),
                    e.singleton ||
                        'boolean' == typeof e.singleton ||
                        (e.singleton = u()),
                    e.insertInto || (e.insertInto = 'head'),
                    e.insertAt || (e.insertAt = 'bottom');
                var n = d(t, e);
                return (
                    p(n, e),
                    function(t) {
                        for (var r = [], o = 0; o < n.length; o++) {
                            var u = n[o];
                            (a = i[u.id]).refs--, r.push(a);
                        }
                        t && p(d(t, e), e);
                        for (o = 0; o < r.length; o++) {
                            var a;
                            if (0 === (a = r[o]).refs) {
                                for (var f = 0; f < a.parts.length; f++)
                                    a.parts[f]();
                                delete i[a.id];
                            }
                        }
                    }
                );
            };
            var g,
                w = ((g = []),
                function(t, e) {
                    return (g[t] = e), g.filter(Boolean).join('\n');
                });
            function x(t, e, n, r) {
                var o = n ? '' : r.css;
                if (t.styleSheet) t.styleSheet.cssText = w(e, o);
                else {
                    var i = document.createTextNode(o),
                        u = t.childNodes;
                    u[e] && t.removeChild(u[e]),
                        u.length ? t.insertBefore(i, u[e]) : t.appendChild(i);
                }
            }
        },
        function(t, e) {
            t.exports = function(t) {
                var e = [];
                return (
                    (e.toString = function() {
                        return this.map(function(e) {
                            var n = (function(t, e) {
                                var n = t[1] || '',
                                    r = t[3];
                                if (!r) return n;
                                if (e && 'function' == typeof btoa) {
                                    var o = ((u = r),
                                        '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                                            btoa(
                                                unescape(
                                                    encodeURIComponent(
                                                        JSON.stringify(u),
                                                    ),
                                                ),
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
                                    return [n]
                                        .concat(i)
                                        .concat([o])
                                        .join('\n');
                                }
                                var u;
                                return [n].join('\n');
                            })(e, t);
                            return e[2] ? '@media ' + e[2] + '{' + n + '}' : n;
                        }).join('');
                    }),
                    (e.i = function(t, n) {
                        'string' == typeof t && (t = [[null, t, '']]);
                        for (var r = {}, o = 0; o < this.length; o++) {
                            var i = this[o][0];
                            'number' == typeof i && (r[i] = !0);
                        }
                        for (o = 0; o < t.length; o++) {
                            var u = t[o];
                            ('number' == typeof u[0] && r[u[0]]) ||
                                (n && !u[2]
                                    ? (u[2] = n)
                                    : n &&
                                      (u[2] = '(' + u[2] + ') and (' + n + ')'),
                                e.push(u));
                        }
                    }),
                    e
                );
            };
        },
        function(t, e, n) {
            (t.exports = n(27)(!1)).push([
                t.i,
                'html,\r\nbody {\r\n    height: 100%;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    background-color: #808080;\r\n}\r\n\r\n#game {\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\ncanvas {\r\n    cursor: none;\r\n}\r\n',
                '',
            ]);
        },
        function(t, e, n) {
            var r = n(28);
            'string' == typeof r && (r = [[t.i, r, '']]);
            var o = { hmr: !0, transform: void 0, insertInto: void 0 };
            n(26)(r, o);
            r.locals && (t.exports = r.locals);
        },
        function(t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: !0 }),
                (e.start = function() {
                    var t = new o.NotCovered(10).add(5);
                    new r.Message('Hello World! ' + t).output();
                }),
                n(29);
            var r = n(24),
                o = n(10);
        },
        function(t, e, n) {
            'use strict';
            (0, n(30).start)();
        },
    ],
    [[31, 1]],
]);
