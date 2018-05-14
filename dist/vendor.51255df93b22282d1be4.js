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
        8: function(n, t, r) {
            'use strict';
            function e(n) {
                return (
                    null != n &&
                    'object' == typeof n &&
                    !0 === n['@@functional/placeholder']
                );
            }
            function u(n) {
                return function t(r) {
                    return 0 === arguments.length || e(r)
                        ? t
                        : n.apply(this, arguments);
                };
            }
            r.r(t);
            var i = u(function(n) {
                    return function() {
                        return n;
                    };
                }),
                o = i(!1),
                c = i(!0),
                f = { '@@functional/placeholder': !0 };
            function a(n) {
                return function t(r, i) {
                    switch (arguments.length) {
                        case 0:
                            return t;
                        case 1:
                            return e(r)
                                ? t
                                : u(function(t) {
                                      return n(r, t);
                                  });
                        default:
                            return e(r) && e(i)
                                ? t
                                : e(r)
                                    ? u(function(t) {
                                          return n(t, i);
                                      })
                                    : e(i)
                                        ? u(function(t) {
                                              return n(r, t);
                                          })
                                        : n(r, i);
                    }
                };
            }
            var s = a(function(n, t) {
                return Number(n) + Number(t);
            });
            function l(n, t) {
                var r;
                (n = n || []), (t = t || []);
                var e = n.length,
                    u = t.length,
                    i = [];
                for (r = 0; r < e; ) (i[i.length] = n[r]), (r += 1);
                for (r = 0; r < u; ) (i[i.length] = t[r]), (r += 1);
                return i;
            }
            function p(n, t) {
                switch (n) {
                    case 0:
                        return function() {
                            return t.apply(this, arguments);
                        };
                    case 1:
                        return function(n) {
                            return t.apply(this, arguments);
                        };
                    case 2:
                        return function(n, r) {
                            return t.apply(this, arguments);
                        };
                    case 3:
                        return function(n, r, e) {
                            return t.apply(this, arguments);
                        };
                    case 4:
                        return function(n, r, e, u) {
                            return t.apply(this, arguments);
                        };
                    case 5:
                        return function(n, r, e, u, i) {
                            return t.apply(this, arguments);
                        };
                    case 6:
                        return function(n, r, e, u, i, o) {
                            return t.apply(this, arguments);
                        };
                    case 7:
                        return function(n, r, e, u, i, o, c) {
                            return t.apply(this, arguments);
                        };
                    case 8:
                        return function(n, r, e, u, i, o, c, f) {
                            return t.apply(this, arguments);
                        };
                    case 9:
                        return function(n, r, e, u, i, o, c, f, a) {
                            return t.apply(this, arguments);
                        };
                    case 10:
                        return function(n, r, e, u, i, o, c, f, a, s) {
                            return t.apply(this, arguments);
                        };
                    default:
                        throw new Error(
                            'First argument to _arity must be a non-negative integer no greater than ten',
                        );
                }
            }
            function d(n, t, r) {
                return function() {
                    for (
                        var u = [], i = 0, o = n, c = 0;
                        c < t.length || i < arguments.length;

                    ) {
                        var f;
                        c < t.length && (!e(t[c]) || i >= arguments.length)
                            ? (f = t[c])
                            : ((f = arguments[i]), (i += 1)),
                            (u[c] = f),
                            e(f) || (o -= 1),
                            (c += 1);
                    }
                    return o <= 0 ? r.apply(this, u) : p(o, d(n, u, r));
                };
            }
            var h = a(function(n, t) {
                    return 1 === n ? u(t) : p(n, d(n, [], t));
                }),
                y = u(function(n) {
                    return h(n.length, function() {
                        var t = 0,
                            r = arguments[0],
                            e = arguments[arguments.length - 1],
                            u = Array.prototype.slice.call(arguments, 0);
                        return (
                            (u[0] = function() {
                                var n = r.apply(this, l(arguments, [t, e]));
                                return (t += 1), n;
                            }),
                            n.apply(this, u)
                        );
                    });
                });
            function g(n) {
                return function t(r, i, o) {
                    switch (arguments.length) {
                        case 0:
                            return t;
                        case 1:
                            return e(r)
                                ? t
                                : a(function(t, e) {
                                      return n(r, t, e);
                                  });
                        case 2:
                            return e(r) && e(i)
                                ? t
                                : e(r)
                                    ? a(function(t, r) {
                                          return n(t, i, r);
                                      })
                                    : e(i)
                                        ? a(function(t, e) {
                                              return n(r, t, e);
                                          })
                                        : u(function(t) {
                                              return n(r, i, t);
                                          });
                        default:
                            return e(r) && e(i) && e(o)
                                ? t
                                : e(r) && e(i)
                                    ? a(function(t, r) {
                                          return n(t, r, o);
                                      })
                                    : e(r) && e(o)
                                        ? a(function(t, r) {
                                              return n(t, i, r);
                                          })
                                        : e(i) && e(o)
                                            ? a(function(t, e) {
                                                  return n(r, t, e);
                                              })
                                            : e(r)
                                                ? u(function(t) {
                                                      return n(t, i, o);
                                                  })
                                                : e(i)
                                                    ? u(function(t) {
                                                          return n(r, t, o);
                                                      })
                                                    : e(o)
                                                        ? u(function(t) {
                                                              return n(r, i, t);
                                                          })
                                                        : n(r, i, o);
                    }
                };
            }
            var v = g(function(n, t, r) {
                    if (t >= r.length || t < -r.length) return r;
                    var e = (t < 0 ? r.length : 0) + t,
                        u = l(r);
                    return (u[e] = n(r[e])), u;
                }),
                m =
                    Array.isArray ||
                    function(n) {
                        return (
                            null != n &&
                            n.length >= 0 &&
                            '[object Array]' ===
                                Object.prototype.toString.call(n)
                        );
                    };
            function w(n) {
                return 'function' == typeof n['@@transducer/step'];
            }
            function b(n, t, r) {
                return function() {
                    if (0 === arguments.length) return r();
                    var e = Array.prototype.slice.call(arguments, 0),
                        u = e.pop();
                    if (!m(u)) {
                        for (var i = 0; i < n.length; ) {
                            if ('function' == typeof u[n[i]])
                                return u[n[i]].apply(u, e);
                            i += 1;
                        }
                        if (w(u)) return t.apply(null, e)(u);
                    }
                    return r.apply(this, arguments);
                };
            }
            function x(n) {
                return n && n['@@transducer/reduced']
                    ? n
                    : { '@@transducer/value': n, '@@transducer/reduced': !0 };
            }
            var j = {
                    init: function() {
                        return this.xf['@@transducer/init']();
                    },
                    result: function(n) {
                        return this.xf['@@transducer/result'](n);
                    },
                },
                A = (function() {
                    function n(n, t) {
                        (this.xf = t), (this.f = n), (this.all = !0);
                    }
                    return (
                        (n.prototype['@@transducer/init'] = j.init),
                        (n.prototype['@@transducer/result'] = function(n) {
                            return (
                                this.all &&
                                    (n = this.xf['@@transducer/step'](n, !0)),
                                this.xf['@@transducer/result'](n)
                            );
                        }),
                        (n.prototype['@@transducer/step'] = function(n, t) {
                            return (
                                this.f(t) ||
                                    ((this.all = !1),
                                    (n = x(
                                        this.xf['@@transducer/step'](n, !1),
                                    ))),
                                n
                            );
                        }),
                        n
                    );
                })(),
                O = a(
                    b(
                        ['all'],
                        a(function(n, t) {
                            return new A(n, t);
                        }),
                        function(n, t) {
                            for (var r = 0; r < t.length; ) {
                                if (!n(t[r])) return !1;
                                r += 1;
                            }
                            return !0;
                        },
                    ),
                ),
                S = a(function(n, t) {
                    return t > n ? t : n;
                });
            function E(n, t) {
                for (var r = 0, e = t.length, u = Array(e); r < e; )
                    (u[r] = n(t[r])), (r += 1);
                return u;
            }
            function _(n) {
                return '[object String]' === Object.prototype.toString.call(n);
            }
            var N = u(function(n) {
                    return (
                        !!m(n) ||
                        (!!n &&
                            ('object' == typeof n &&
                                (!_(n) &&
                                    (1 === n.nodeType
                                        ? !!n.length
                                        : 0 === n.length ||
                                          (n.length > 0 &&
                                              (n.hasOwnProperty(0) &&
                                                  n.hasOwnProperty(
                                                      n.length - 1,
                                                  )))))))
                    );
                }),
                q = (function() {
                    function n(n) {
                        this.f = n;
                    }
                    return (
                        (n.prototype['@@transducer/init'] = function() {
                            throw new Error('init not implemented on XWrap');
                        }),
                        (n.prototype['@@transducer/result'] = function(n) {
                            return n;
                        }),
                        (n.prototype['@@transducer/step'] = function(n, t) {
                            return this.f(n, t);
                        }),
                        n
                    );
                })();
            function k(n) {
                return new q(n);
            }
            var I = a(function(n, t) {
                return p(n.length, function() {
                    return n.apply(t, arguments);
                });
            });
            function W(n, t, r) {
                for (var e = r.next(); !e.done; ) {
                    if (
                        (t = n['@@transducer/step'](t, e.value)) &&
                        t['@@transducer/reduced']
                    ) {
                        t = t['@@transducer/value'];
                        break;
                    }
                    e = r.next();
                }
                return n['@@transducer/result'](t);
            }
            function P(n, t, r, e) {
                return n['@@transducer/result'](
                    r[e](I(n['@@transducer/step'], n), t),
                );
            }
            var C =
                'undefined' != typeof Symbol ? Symbol.iterator : '@@iterator';
            function T(n, t, r) {
                if (('function' == typeof n && (n = k(n)), N(r)))
                    return (function(n, t, r) {
                        for (var e = 0, u = r.length; e < u; ) {
                            if (
                                (t = n['@@transducer/step'](t, r[e])) &&
                                t['@@transducer/reduced']
                            ) {
                                t = t['@@transducer/value'];
                                break;
                            }
                            e += 1;
                        }
                        return n['@@transducer/result'](t);
                    })(n, t, r);
                if ('function' == typeof r['fantasy-land/reduce'])
                    return P(n, t, r, 'fantasy-land/reduce');
                if (null != r[C]) return W(n, t, r[C]());
                if ('function' == typeof r.next) return W(n, t, r);
                if ('function' == typeof r.reduce) return P(n, t, r, 'reduce');
                throw new TypeError('reduce: list must be array or iterable');
            }
            var B = (function() {
                    function n(n, t) {
                        (this.xf = t), (this.f = n);
                    }
                    return (
                        (n.prototype['@@transducer/init'] = j.init),
                        (n.prototype['@@transducer/result'] = j.result),
                        (n.prototype['@@transducer/step'] = function(n, t) {
                            return this.xf['@@transducer/step'](n, this.f(t));
                        }),
                        n
                    );
                })(),
                F = a(function(n, t) {
                    return new B(n, t);
                });
            function R(n, t) {
                return Object.prototype.hasOwnProperty.call(t, n);
            }
            var U = Object.prototype.toString,
                D = function() {
                    return '[object Arguments]' === U.call(arguments)
                        ? function(n) {
                              return '[object Arguments]' === U.call(n);
                          }
                        : function(n) {
                              return R('callee', n);
                          };
                },
                z = !{ toString: null }.propertyIsEnumerable('toString'),
                M = [
                    'constructor',
                    'valueOf',
                    'isPrototypeOf',
                    'toString',
                    'propertyIsEnumerable',
                    'hasOwnProperty',
                    'toLocaleString',
                ],
                L = (function() {
                    return arguments.propertyIsEnumerable('length');
                })(),
                K = function(n, t) {
                    for (var r = 0; r < n.length; ) {
                        if (n[r] === t) return !0;
                        r += 1;
                    }
                    return !1;
                },
                V = u(
                    'function' != typeof Object.keys || L
                        ? function(n) {
                              if (Object(n) !== n) return [];
                              var t,
                                  r,
                                  e = [],
                                  u = L && D(n);
                              for (t in n)
                                  !R(t, n) ||
                                      (u && 'length' === t) ||
                                      (e[e.length] = t);
                              if (z)
                                  for (r = M.length - 1; r >= 0; )
                                      R((t = M[r]), n) &&
                                          !K(e, t) &&
                                          (e[e.length] = t),
                                          (r -= 1);
                              return e;
                          }
                        : function(n) {
                              return Object(n) !== n ? [] : Object.keys(n);
                          },
                ),
                J = a(
                    b(['fantasy-land/map', 'map'], F, function(n, t) {
                        switch (Object.prototype.toString.call(t)) {
                            case '[object Function]':
                                return h(t.length, function() {
                                    return n.call(
                                        this,
                                        t.apply(this, arguments),
                                    );
                                });
                            case '[object Object]':
                                return T(
                                    function(r, e) {
                                        return (r[e] = n(t[e])), r;
                                    },
                                    {},
                                    V(t),
                                );
                            default:
                                return E(n, t);
                        }
                    }),
                ),
                $ = a(function(n, t) {
                    for (var r = t, e = 0; e < n.length; ) {
                        if (null == r) return;
                        (r = r[n[e]]), (e += 1);
                    }
                    return r;
                }),
                H = a(function(n, t) {
                    return $([n], t);
                }),
                X = a(function(n, t) {
                    return J(H(n), t);
                }),
                Y = g(T),
                Z = u(function(n) {
                    return h(Y(S, 0, X('length', n)), function() {
                        for (var t = 0, r = n.length; t < r; ) {
                            if (!n[t].apply(this, arguments)) return !1;
                            t += 1;
                        }
                        return !0;
                    });
                }),
                G = a(function(n, t) {
                    return n && t;
                }),
                Q = (function() {
                    function n(n, t) {
                        (this.xf = t), (this.f = n), (this.any = !1);
                    }
                    return (
                        (n.prototype['@@transducer/init'] = j.init),
                        (n.prototype['@@transducer/result'] = function(n) {
                            return (
                                this.any ||
                                    (n = this.xf['@@transducer/step'](n, !1)),
                                this.xf['@@transducer/result'](n)
                            );
                        }),
                        (n.prototype['@@transducer/step'] = function(n, t) {
                            return (
                                this.f(t) &&
                                    ((this.any = !0),
                                    (n = x(
                                        this.xf['@@transducer/step'](n, !0),
                                    ))),
                                n
                            );
                        }),
                        n
                    );
                })(),
                nn = a(function(n, t) {
                    return new Q(n, t);
                }),
                tn = a(
                    b(['any'], nn, function(n, t) {
                        for (var r = 0; r < t.length; ) {
                            if (n(t[r])) return !0;
                            r += 1;
                        }
                        return !1;
                    }),
                ),
                rn = u(function(n) {
                    return h(Y(S, 0, X('length', n)), function() {
                        for (var t = 0, r = n.length; t < r; ) {
                            if (n[t].apply(this, arguments)) return !0;
                            t += 1;
                        }
                        return !1;
                    });
                }),
                en = a(function(n, t) {
                    return 'function' == typeof t['fantasy-land/ap']
                        ? t['fantasy-land/ap'](n)
                        : 'function' == typeof n.ap
                            ? n.ap(t)
                            : 'function' == typeof n
                                ? function(r) {
                                      return n(r)(t(r));
                                  }
                                : T(
                                      function(n, r) {
                                          return l(n, J(r, t));
                                      },
                                      [],
                                      n,
                                  );
                });
            var un = (function() {
                    function n(n, t) {
                        (this.xf = t),
                            (this.pos = 0),
                            (this.full = !1),
                            (this.acc = new Array(n));
                    }
                    return (
                        (n.prototype['@@transducer/init'] = j.init),
                        (n.prototype['@@transducer/result'] = function(n) {
                            return (
                                (this.acc = null),
                                this.xf['@@transducer/result'](n)
                            );
                        }),
                        (n.prototype['@@transducer/step'] = function(n, t) {
                            return (
                                this.store(t),
                                this.full
                                    ? this.xf['@@transducer/step'](
                                          n,
                                          this.getCopy(),
                                      )
                                    : n
                            );
                        }),
                        (n.prototype.store = function(n) {
                            (this.acc[this.pos] = n),
                                (this.pos += 1),
                                this.pos === this.acc.length &&
                                    ((this.pos = 0), (this.full = !0));
                        }),
                        (n.prototype.getCopy = function() {
                            return l(
                                Array.prototype.slice.call(this.acc, this.pos),
                                Array.prototype.slice.call(
                                    this.acc,
                                    0,
                                    this.pos,
                                ),
                            );
                        }),
                        n
                    );
                })(),
                on = a(
                    b(
                        [],
                        a(function(n, t) {
                            return new un(n, t);
                        }),
                        function(n, t) {
                            for (
                                var r = 0,
                                    e = t.length - (n - 1),
                                    u = new Array(e >= 0 ? e : 0);
                                r < e;

                            )
                                (u[r] = Array.prototype.slice.call(
                                    t,
                                    r,
                                    r + n,
                                )),
                                    (r += 1);
                            return u;
                        },
                    ),
                ),
                cn = a(function(n, t) {
                    return l(t, [n]);
                }),
                fn = a(function(n, t) {
                    return n.apply(this, t);
                }),
                an = u(function(n) {
                    for (var t = V(n), r = t.length, e = [], u = 0; u < r; )
                        (e[u] = n[t[u]]), (u += 1);
                    return e;
                }),
                sn = u(function n(t) {
                    return (
                        (t = J(function(t) {
                            return 'function' == typeof t ? t : n(t);
                        }, t)),
                        h(Y(S, 0, X('length', an(t))), function() {
                            var n = arguments;
                            return J(function(t) {
                                return fn(t, n);
                            }, t);
                        })
                    );
                }),
                ln = a(function(n, t) {
                    return t(n);
                }),
                pn = g(function(n, t, r) {
                    var e = n(t),
                        u = n(r);
                    return e < u ? -1 : e > u ? 1 : 0;
                }),
                dn = g(function(n, t, r) {
                    var e = {};
                    for (var u in r) e[u] = r[u];
                    return (e[n] = t), e;
                }),
                hn =
                    Number.isInteger ||
                    function(n) {
                        return n << 0 === n;
                    },
                yn = u(function(n) {
                    return null == n;
                }),
                gn = g(function n(t, r, e) {
                    if (0 === t.length) return r;
                    var u = t[0];
                    if (t.length > 1) {
                        var i = !yn(e) && R(u, e) ? e[u] : hn(t[1]) ? [] : {};
                        r = n(Array.prototype.slice.call(t, 1), r, i);
                    }
                    if (hn(u) && m(e)) {
                        var o = [].concat(e);
                        return (o[u] = r), o;
                    }
                    return dn(u, r, e);
                }),
                vn = a(function(n, t) {
                    switch (n) {
                        case 0:
                            return function() {
                                return t.call(this);
                            };
                        case 1:
                            return function(n) {
                                return t.call(this, n);
                            };
                        case 2:
                            return function(n, r) {
                                return t.call(this, n, r);
                            };
                        case 3:
                            return function(n, r, e) {
                                return t.call(this, n, r, e);
                            };
                        case 4:
                            return function(n, r, e, u) {
                                return t.call(this, n, r, e, u);
                            };
                        case 5:
                            return function(n, r, e, u, i) {
                                return t.call(this, n, r, e, u, i);
                            };
                        case 6:
                            return function(n, r, e, u, i, o) {
                                return t.call(this, n, r, e, u, i, o);
                            };
                        case 7:
                            return function(n, r, e, u, i, o, c) {
                                return t.call(this, n, r, e, u, i, o, c);
                            };
                        case 8:
                            return function(n, r, e, u, i, o, c, f) {
                                return t.call(this, n, r, e, u, i, o, c, f);
                            };
                        case 9:
                            return function(n, r, e, u, i, o, c, f, a) {
                                return t.call(this, n, r, e, u, i, o, c, f, a);
                            };
                        case 10:
                            return function(n, r, e, u, i, o, c, f, a, s) {
                                return t.call(
                                    this,
                                    n,
                                    r,
                                    e,
                                    u,
                                    i,
                                    o,
                                    c,
                                    f,
                                    a,
                                    s,
                                );
                            };
                        default:
                            throw new Error(
                                'First argument to nAry must be a non-negative integer no greater than ten',
                            );
                    }
                }),
                mn = u(function(n) {
                    return vn(2, n);
                });
            function wn(n) {
                return (
                    '[object Function]' === Object.prototype.toString.call(n)
                );
            }
            var bn = a(function(n, t) {
                    var r = h(n, t);
                    return h(n, function() {
                        return T(
                            en,
                            J(r, arguments[0]),
                            Array.prototype.slice.call(arguments, 1),
                        );
                    });
                }),
                xn = u(function(n) {
                    return bn(n.length, n);
                }),
                jn = a(function(n, t) {
                    return wn(n)
                        ? function() {
                              return (
                                  n.apply(this, arguments) &&
                                  t.apply(this, arguments)
                              );
                          }
                        : xn(G)(n, t);
                }),
                An = u(function(n) {
                    return h(n.length, n);
                }),
                On = An(function(n) {
                    return n.apply(
                        this,
                        Array.prototype.slice.call(arguments, 1),
                    );
                });
            function Sn(n) {
                return function t(r) {
                    for (var e, u, i, o = [], c = 0, f = r.length; c < f; ) {
                        if (N(r[c]))
                            for (
                                i = 0, u = (e = n ? t(r[c]) : r[c]).length;
                                i < u;

                            )
                                (o[o.length] = e[i]), (i += 1);
                        else o[o.length] = r[c];
                        c += 1;
                    }
                    return o;
                };
            }
            var En = function(n) {
                    var t = (function(n) {
                        return {
                            '@@transducer/init': j.init,
                            '@@transducer/result': function(t) {
                                return n['@@transducer/result'](t);
                            },
                            '@@transducer/step': function(t, r) {
                                var e = n['@@transducer/step'](t, r);
                                return e['@@transducer/reduced']
                                    ? {
                                          '@@transducer/value': e,
                                          '@@transducer/reduced': !0,
                                      }
                                    : e;
                            },
                        };
                    })(n);
                    return {
                        '@@transducer/init': j.init,
                        '@@transducer/result': function(n) {
                            return t['@@transducer/result'](n);
                        },
                        '@@transducer/step': function(n, r) {
                            return N(r) ? T(t, n, r) : T(t, n, [r]);
                        },
                    };
                },
                _n = a(
                    b(
                        ['fantasy-land/chain', 'chain'],
                        a(function(n, t) {
                            return J(n, En(t));
                        }),
                        function(n, t) {
                            return 'function' == typeof t
                                ? function(r) {
                                      return n(t(r))(r);
                                  }
                                : Sn(!1)(J(n, t));
                        },
                    ),
                ),
                Nn = g(function(n, t, r) {
                    if (n > t)
                        throw new Error(
                            'min must not be greater than max in clamp(min, max, value)',
                        );
                    return r < n ? n : r > t ? t : r;
                });
            function qn(n) {
                return new RegExp(
                    n.source,
                    (n.global ? 'g' : '') +
                        (n.ignoreCase ? 'i' : '') +
                        (n.multiline ? 'm' : '') +
                        (n.sticky ? 'y' : '') +
                        (n.unicode ? 'u' : ''),
                );
            }
            var kn = u(function(n) {
                return null === n
                    ? 'Null'
                    : void 0 === n
                        ? 'Undefined'
                        : Object.prototype.toString.call(n).slice(8, -1);
            });
            function In(n, t, r, e) {
                var u = function(u) {
                    for (var i = t.length, o = 0; o < i; ) {
                        if (n === t[o]) return r[o];
                        o += 1;
                    }
                    for (var c in ((t[o + 1] = n), (r[o + 1] = u), n))
                        u[c] = e ? In(n[c], t, r, !0) : n[c];
                    return u;
                };
                switch (kn(n)) {
                    case 'Object':
                        return u({});
                    case 'Array':
                        return u([]);
                    case 'Date':
                        return new Date(n.valueOf());
                    case 'RegExp':
                        return qn(n);
                    default:
                        return n;
                }
            }
            var Wn = u(function(n) {
                    return null != n && 'function' == typeof n.clone
                        ? n.clone()
                        : In(n, [], [], !0);
                }),
                Pn = u(function(n) {
                    return function(t, r) {
                        return n(t, r) ? -1 : n(r, t) ? 1 : 0;
                    };
                }),
                Cn = u(function(n) {
                    return !n;
                }),
                Tn = xn(Cn);
            function Bn(n, t) {
                return function() {
                    return t.call(this, n.apply(this, arguments));
                };
            }
            function Fn(n, t) {
                return function() {
                    var r = arguments.length;
                    if (0 === r) return t();
                    var e = arguments[r - 1];
                    return m(e) || 'function' != typeof e[n]
                        ? t.apply(this, arguments)
                        : e[n].apply(
                              e,
                              Array.prototype.slice.call(arguments, 0, r - 1),
                          );
                };
            }
            var Rn = g(
                    Fn('slice', function(n, t, r) {
                        return Array.prototype.slice.call(r, n, t);
                    }),
                ),
                Un = u(Fn('tail', Rn(1, 1 / 0)));
            function Dn() {
                if (0 === arguments.length)
                    throw new Error('pipe requires at least one argument');
                return p(
                    arguments[0].length,
                    Y(Bn, arguments[0], Un(arguments)),
                );
            }
            var zn = u(function(n) {
                return _(n)
                    ? n
                          .split('')
                          .reverse()
                          .join('')
                    : Array.prototype.slice.call(n, 0).reverse();
            });
            function Mn() {
                if (0 === arguments.length)
                    throw new Error('compose requires at least one argument');
                return Dn.apply(this, zn(arguments));
            }
            function Ln() {
                if (0 === arguments.length)
                    throw new Error('composeK requires at least one argument');
                var n = Array.prototype.slice.call(arguments),
                    t = n.pop();
                return Mn(Mn.apply(this, J(_n, n)), t);
            }
            function Kn(n, t) {
                return function() {
                    var r = this;
                    return n.apply(r, arguments).then(function(n) {
                        return t.call(r, n);
                    });
                };
            }
            function Vn() {
                if (0 === arguments.length)
                    throw new Error('pipeP requires at least one argument');
                return p(
                    arguments[0].length,
                    Y(Kn, arguments[0], Un(arguments)),
                );
            }
            function Jn() {
                if (0 === arguments.length)
                    throw new Error('composeP requires at least one argument');
                return Vn.apply(this, zn(arguments));
            }
            function $n(n) {
                for (var t, r = []; !(t = n.next()).done; ) r.push(t.value);
                return r;
            }
            function Hn(n, t, r) {
                for (var e = 0, u = r.length; e < u; ) {
                    if (n(t, r[e])) return !0;
                    e += 1;
                }
                return !1;
            }
            var Xn = a(function(n, t) {
                return n === t ? 0 !== n || 1 / n == 1 / t : n != n && t != t;
            });
            function Yn(n, t, r, e) {
                var u = $n(n);
                function i(n, t) {
                    return Zn(n, t, r.slice(), e.slice());
                }
                return !Hn(
                    function(n, t) {
                        return !Hn(i, t, n);
                    },
                    $n(t),
                    u,
                );
            }
            function Zn(n, t, r, e) {
                if (Xn(n, t)) return !0;
                var u,
                    i,
                    o = kn(n);
                if (o !== kn(t)) return !1;
                if (null == n || null == t) return !1;
                if (
                    'function' == typeof n['fantasy-land/equals'] ||
                    'function' == typeof t['fantasy-land/equals']
                )
                    return (
                        'function' == typeof n['fantasy-land/equals'] &&
                        n['fantasy-land/equals'](t) &&
                        'function' == typeof t['fantasy-land/equals'] &&
                        t['fantasy-land/equals'](n)
                    );
                if (
                    'function' == typeof n.equals ||
                    'function' == typeof t.equals
                )
                    return (
                        'function' == typeof n.equals &&
                        n.equals(t) &&
                        'function' == typeof t.equals &&
                        t.equals(n)
                    );
                switch (o) {
                    case 'Arguments':
                    case 'Array':
                    case 'Object':
                        if (
                            'function' == typeof n.constructor &&
                            'Promise' ===
                                ((u = n.constructor),
                                null == (i = String(u).match(/^function (\w*)/))
                                    ? ''
                                    : i[1])
                        )
                            return n === t;
                        break;
                    case 'Boolean':
                    case 'Number':
                    case 'String':
                        if (
                            typeof n != typeof t ||
                            !Xn(n.valueOf(), t.valueOf())
                        )
                            return !1;
                        break;
                    case 'Date':
                        if (!Xn(n.valueOf(), t.valueOf())) return !1;
                        break;
                    case 'Error':
                        return n.name === t.name && n.message === t.message;
                    case 'RegExp':
                        if (
                            n.source !== t.source ||
                            n.global !== t.global ||
                            n.ignoreCase !== t.ignoreCase ||
                            n.multiline !== t.multiline ||
                            n.sticky !== t.sticky ||
                            n.unicode !== t.unicode
                        )
                            return !1;
                }
                for (var c = r.length - 1; c >= 0; ) {
                    if (r[c] === n) return e[c] === t;
                    c -= 1;
                }
                switch (o) {
                    case 'Map':
                        return (
                            n.size === t.size &&
                            Yn(
                                n.entries(),
                                t.entries(),
                                r.concat([n]),
                                e.concat([t]),
                            )
                        );
                    case 'Set':
                        return (
                            n.size === t.size &&
                            Yn(
                                n.values(),
                                t.values(),
                                r.concat([n]),
                                e.concat([t]),
                            )
                        );
                    case 'Arguments':
                    case 'Array':
                    case 'Object':
                    case 'Boolean':
                    case 'Number':
                    case 'String':
                    case 'Date':
                    case 'Error':
                    case 'RegExp':
                    case 'Int8Array':
                    case 'Uint8Array':
                    case 'Uint8ClampedArray':
                    case 'Int16Array':
                    case 'Uint16Array':
                    case 'Int32Array':
                    case 'Uint32Array':
                    case 'Float32Array':
                    case 'Float64Array':
                    case 'ArrayBuffer':
                        break;
                    default:
                        return !1;
                }
                var f = V(n);
                if (f.length !== V(t).length) return !1;
                var a = r.concat([n]),
                    s = e.concat([t]);
                for (c = f.length - 1; c >= 0; ) {
                    var l = f[c];
                    if (!R(l, t) || !Zn(t[l], n[l], a, s)) return !1;
                    c -= 1;
                }
                return !0;
            }
            var Gn = a(function(n, t) {
                return Zn(n, t, [], []);
            });
            function Qn(n, t, r) {
                var e, u;
                if ('function' == typeof n.indexOf)
                    switch (typeof t) {
                        case 'number':
                            if (0 === t) {
                                for (e = 1 / t; r < n.length; ) {
                                    if (0 === (u = n[r]) && 1 / u === e)
                                        return r;
                                    r += 1;
                                }
                                return -1;
                            }
                            if (t != t) {
                                for (; r < n.length; ) {
                                    if ('number' == typeof (u = n[r]) && u != u)
                                        return r;
                                    r += 1;
                                }
                                return -1;
                            }
                            return n.indexOf(t, r);
                        case 'string':
                        case 'boolean':
                        case 'function':
                        case 'undefined':
                            return n.indexOf(t, r);
                        case 'object':
                            if (null === t) return n.indexOf(t, r);
                    }
                for (; r < n.length; ) {
                    if (Gn(n[r], t)) return r;
                    r += 1;
                }
                return -1;
            }
            function nt(n, t) {
                return Qn(t, n, 0) >= 0;
            }
            function tt(n) {
                return (
                    '"' +
                    n
                        .replace(/\\/g, '\\\\')
                        .replace(/[\b]/g, '\\b')
                        .replace(/\f/g, '\\f')
                        .replace(/\n/g, '\\n')
                        .replace(/\r/g, '\\r')
                        .replace(/\t/g, '\\t')
                        .replace(/\v/g, '\\v')
                        .replace(/\0/g, '\\0')
                        .replace(/"/g, '\\"') +
                    '"'
                );
            }
            var rt = function(n) {
                    return (n < 10 ? '0' : '') + n;
                },
                et =
                    'function' == typeof Date.prototype.toISOString
                        ? function(n) {
                              return n.toISOString();
                          }
                        : function(n) {
                              return (
                                  n.getUTCFullYear() +
                                  '-' +
                                  rt(n.getUTCMonth() + 1) +
                                  '-' +
                                  rt(n.getUTCDate()) +
                                  'T' +
                                  rt(n.getUTCHours()) +
                                  ':' +
                                  rt(n.getUTCMinutes()) +
                                  ':' +
                                  rt(n.getUTCSeconds()) +
                                  '.' +
                                  (n.getUTCMilliseconds() / 1e3)
                                      .toFixed(3)
                                      .slice(2, 5) +
                                  'Z'
                              );
                          };
            function ut(n) {
                return function() {
                    return !n.apply(this, arguments);
                };
            }
            function it(n, t) {
                for (var r = 0, e = t.length, u = []; r < e; )
                    n(t[r]) && (u[u.length] = t[r]), (r += 1);
                return u;
            }
            function ot(n) {
                return '[object Object]' === Object.prototype.toString.call(n);
            }
            var ct = (function() {
                    function n(n, t) {
                        (this.xf = t), (this.f = n);
                    }
                    return (
                        (n.prototype['@@transducer/init'] = j.init),
                        (n.prototype['@@transducer/result'] = j.result),
                        (n.prototype['@@transducer/step'] = function(n, t) {
                            return this.f(t)
                                ? this.xf['@@transducer/step'](n, t)
                                : n;
                        }),
                        n
                    );
                })(),
                ft = a(
                    b(
                        ['filter'],
                        a(function(n, t) {
                            return new ct(n, t);
                        }),
                        function(n, t) {
                            return ot(t)
                                ? T(
                                      function(r, e) {
                                          return n(t[e]) && (r[e] = t[e]), r;
                                      },
                                      {},
                                      V(t),
                                  )
                                : it(n, t);
                        },
                    ),
                ),
                at = a(function(n, t) {
                    return ft(ut(n), t);
                });
            var st = u(function(n) {
                    return (function n(t, r) {
                        var e = function(e) {
                                var u = r.concat([t]);
                                return nt(e, u) ? '<Circular>' : n(e, u);
                            },
                            u = function(n, t) {
                                return E(function(t) {
                                    return tt(t) + ': ' + e(n[t]);
                                }, t.slice().sort());
                            };
                        switch (Object.prototype.toString.call(t)) {
                            case '[object Arguments]':
                                return (
                                    '(function() { return arguments; }(' +
                                    E(e, t).join(', ') +
                                    '))'
                                );
                            case '[object Array]':
                                return (
                                    '[' +
                                    E(e, t)
                                        .concat(
                                            u(
                                                t,
                                                at(function(n) {
                                                    return /^\d+$/.test(n);
                                                }, V(t)),
                                            ),
                                        )
                                        .join(', ') +
                                    ']'
                                );
                            case '[object Boolean]':
                                return 'object' == typeof t
                                    ? 'new Boolean(' + e(t.valueOf()) + ')'
                                    : t.toString();
                            case '[object Date]':
                                return (
                                    'new Date(' +
                                    (isNaN(t.valueOf()) ? e(NaN) : tt(et(t))) +
                                    ')'
                                );
                            case '[object Null]':
                                return 'null';
                            case '[object Number]':
                                return 'object' == typeof t
                                    ? 'new Number(' + e(t.valueOf()) + ')'
                                    : 1 / t == -1 / 0
                                        ? '-0'
                                        : t.toString(10);
                            case '[object String]':
                                return 'object' == typeof t
                                    ? 'new String(' + e(t.valueOf()) + ')'
                                    : tt(t);
                            case '[object Undefined]':
                                return 'undefined';
                            default:
                                if ('function' == typeof t.toString) {
                                    var i = t.toString();
                                    if ('[object Object]' !== i) return i;
                                }
                                return '{' + u(t, V(t)).join(', ') + '}';
                        }
                    })(n, []);
                }),
                lt = a(function(n, t) {
                    if (m(n)) {
                        if (m(t)) return n.concat(t);
                        throw new TypeError(st(t) + ' is not an array');
                    }
                    if (_(n)) {
                        if (_(t)) return n + t;
                        throw new TypeError(st(t) + ' is not a string');
                    }
                    if (null != n && wn(n['fantasy-land/concat']))
                        return n['fantasy-land/concat'](t);
                    if (null != n && wn(n.concat)) return n.concat(t);
                    throw new TypeError(
                        st(n) +
                            ' does not have a method named "concat" or "fantasy-land/concat"',
                    );
                }),
                pt = u(function(n) {
                    return p(
                        Y(
                            S,
                            0,
                            J(function(n) {
                                return n[0].length;
                            }, n),
                        ),
                        function() {
                            for (var t = 0; t < n.length; ) {
                                if (n[t][0].apply(this, arguments))
                                    return n[t][1].apply(this, arguments);
                                t += 1;
                            }
                        },
                    );
                }),
                dt = a(function(n, t) {
                    if (n > 10)
                        throw new Error(
                            'Constructor with greater than ten arguments',
                        );
                    return 0 === n
                        ? function() {
                              return new t();
                          }
                        : An(
                              vn(n, function(n, r, e, u, i, o, c, f, a, s) {
                                  switch (arguments.length) {
                                      case 1:
                                          return new t(n);
                                      case 2:
                                          return new t(n, r);
                                      case 3:
                                          return new t(n, r, e);
                                      case 4:
                                          return new t(n, r, e, u);
                                      case 5:
                                          return new t(n, r, e, u, i);
                                      case 6:
                                          return new t(n, r, e, u, i, o);
                                      case 7:
                                          return new t(n, r, e, u, i, o, c);
                                      case 8:
                                          return new t(n, r, e, u, i, o, c, f);
                                      case 9:
                                          return new t(
                                              n,
                                              r,
                                              e,
                                              u,
                                              i,
                                              o,
                                              c,
                                              f,
                                              a,
                                          );
                                      case 10:
                                          return new t(
                                              n,
                                              r,
                                              e,
                                              u,
                                              i,
                                              o,
                                              c,
                                              f,
                                              a,
                                              s,
                                          );
                                  }
                              }),
                          );
                }),
                ht = u(function(n) {
                    return dt(n.length, n);
                }),
                yt = a(nt),
                gt = a(function(n, t) {
                    return h(Y(S, 0, X('length', t)), function() {
                        var r = arguments,
                            e = this;
                        return n.apply(
                            e,
                            E(function(n) {
                                return n.apply(e, r);
                            }, t),
                        );
                    });
                }),
                vt = (function() {
                    function n(n, t, r, e) {
                        (this.valueFn = n),
                            (this.valueAcc = t),
                            (this.keyFn = r),
                            (this.xf = e),
                            (this.inputs = {});
                    }
                    return (
                        (n.prototype['@@transducer/init'] = j.init),
                        (n.prototype['@@transducer/result'] = function(n) {
                            var t;
                            for (t in this.inputs)
                                if (
                                    R(t, this.inputs) &&
                                    (n = this.xf['@@transducer/step'](
                                        n,
                                        this.inputs[t],
                                    ))['@@transducer/reduced']
                                ) {
                                    n = n['@@transducer/value'];
                                    break;
                                }
                            return (
                                (this.inputs = null),
                                this.xf['@@transducer/result'](n)
                            );
                        }),
                        (n.prototype['@@transducer/step'] = function(n, t) {
                            var r = this.keyFn(t);
                            return (
                                (this.inputs[r] = this.inputs[r] || [
                                    r,
                                    this.valueAcc,
                                ]),
                                (this.inputs[r][1] = this.valueFn(
                                    this.inputs[r][1],
                                    t,
                                )),
                                n
                            );
                        }),
                        n
                    );
                })(),
                mt = d(
                    4,
                    [],
                    b(
                        [],
                        d(4, [], function(n, t, r, e) {
                            return new vt(n, t, r, e);
                        }),
                        function(n, t, r, e) {
                            return T(
                                function(e, u) {
                                    var i = r(u);
                                    return (e[i] = n(R(i, e) ? e[i] : t, u)), e;
                                },
                                {},
                                e,
                            );
                        },
                    ),
                ),
                wt = mt(function(n, t) {
                    return n + 1;
                }, 0),
                bt = s(-1),
                xt = a(function(n, t) {
                    return null == t || t != t ? n : t;
                }),
                jt = g(function(n, t, r) {
                    var e = n(t),
                        u = n(r);
                    return e > u ? -1 : e < u ? 1 : 0;
                }),
                At = a(function(n, t) {
                    for (var r = [], e = 0, u = n.length; e < u; )
                        nt(n[e], t) || nt(n[e], r) || (r[r.length] = n[e]),
                            (e += 1);
                    return r;
                }),
                Ot = g(function(n, t, r) {
                    for (var e = [], u = 0, i = t.length; u < i; )
                        Hn(n, t[u], r) || Hn(n, t[u], e) || e.push(t[u]),
                            (u += 1);
                    return e;
                }),
                St = a(function(n, t) {
                    var r = {};
                    for (var e in t) r[e] = t[e];
                    return delete r[n], r;
                }),
                Et = g(function(n, t, r) {
                    var e = Array.prototype.slice.call(r, 0);
                    return e.splice(n, t), e;
                }),
                _t = g(function(n, t, r) {
                    return v(i(t), n, r);
                }),
                Nt = a(function n(t, r) {
                    switch (t.length) {
                        case 0:
                            return r;
                        case 1:
                            return hn(t[0]) ? Et(t[0], 1, r) : St(t[0], r);
                        default:
                            var e = t[0],
                                u = Array.prototype.slice.call(t, 1);
                            return null == r[e]
                                ? r
                                : hn(t[0])
                                    ? _t(e, n(u, r[e]), r)
                                    : dn(e, n(u, r[e]), r);
                    }
                }),
                qt = a(function(n, t) {
                    return n / t;
                }),
                kt = (function() {
                    function n(n, t) {
                        (this.xf = t), (this.n = n);
                    }
                    return (
                        (n.prototype['@@transducer/init'] = j.init),
                        (n.prototype['@@transducer/result'] = j.result),
                        (n.prototype['@@transducer/step'] = function(n, t) {
                            return this.n > 0
                                ? ((this.n -= 1), n)
                                : this.xf['@@transducer/step'](n, t);
                        }),
                        n
                    );
                })(),
                It = a(
                    b(
                        ['drop'],
                        a(function(n, t) {
                            return new kt(n, t);
                        }),
                        function(n, t) {
                            return Rn(Math.max(0, n), 1 / 0, t);
                        },
                    ),
                ),
                Wt = (function() {
                    function n(n, t) {
                        (this.xf = t), (this.n = n), (this.i = 0);
                    }
                    return (
                        (n.prototype['@@transducer/init'] = j.init),
                        (n.prototype['@@transducer/result'] = j.result),
                        (n.prototype['@@transducer/step'] = function(n, t) {
                            this.i += 1;
                            var r =
                                0 === this.n
                                    ? n
                                    : this.xf['@@transducer/step'](n, t);
                            return this.n >= 0 && this.i >= this.n ? x(r) : r;
                        }),
                        n
                    );
                })(),
                Pt = a(
                    b(
                        ['take'],
                        a(function(n, t) {
                            return new Wt(n, t);
                        }),
                        function(n, t) {
                            return Rn(0, n < 0 ? 1 / 0 : n, t);
                        },
                    ),
                );
            var Ct = (function() {
                    function n(n, t) {
                        (this.xf = t),
                            (this.pos = 0),
                            (this.full = !1),
                            (this.acc = new Array(n));
                    }
                    return (
                        (n.prototype['@@transducer/init'] = j.init),
                        (n.prototype['@@transducer/result'] = function(n) {
                            return (
                                (this.acc = null),
                                this.xf['@@transducer/result'](n)
                            );
                        }),
                        (n.prototype['@@transducer/step'] = function(n, t) {
                            return (
                                this.full &&
                                    (n = this.xf['@@transducer/step'](
                                        n,
                                        this.acc[this.pos],
                                    )),
                                this.store(t),
                                n
                            );
                        }),
                        (n.prototype.store = function(n) {
                            (this.acc[this.pos] = n),
                                (this.pos += 1),
                                this.pos === this.acc.length &&
                                    ((this.pos = 0), (this.full = !0));
                        }),
                        n
                    );
                })(),
                Tt = a(
                    b(
                        [],
                        a(function(n, t) {
                            return new Ct(n, t);
                        }),
                        function(n, t) {
                            return Pt(n < t.length ? t.length - n : 0, t);
                        },
                    ),
                );
            var Bt = (function() {
                    function n(n, t) {
                        (this.f = n), (this.retained = []), (this.xf = t);
                    }
                    return (
                        (n.prototype['@@transducer/init'] = j.init),
                        (n.prototype['@@transducer/result'] = function(n) {
                            return (
                                (this.retained = null),
                                this.xf['@@transducer/result'](n)
                            );
                        }),
                        (n.prototype['@@transducer/step'] = function(n, t) {
                            return this.f(t)
                                ? this.retain(n, t)
                                : this.flush(n, t);
                        }),
                        (n.prototype.flush = function(n, t) {
                            return (
                                (n = T(
                                    this.xf['@@transducer/step'],
                                    n,
                                    this.retained,
                                )),
                                (this.retained = []),
                                this.xf['@@transducer/step'](n, t)
                            );
                        }),
                        (n.prototype.retain = function(n, t) {
                            return this.retained.push(t), n;
                        }),
                        n
                    );
                })(),
                Ft = a(
                    b(
                        [],
                        a(function(n, t) {
                            return new Bt(n, t);
                        }),
                        function(n, t) {
                            for (var r = t.length - 1; r >= 0 && n(t[r]); )
                                r -= 1;
                            return Rn(0, r + 1, t);
                        },
                    ),
                ),
                Rt = (function() {
                    function n(n, t) {
                        (this.xf = t),
                            (this.pred = n),
                            (this.lastValue = void 0),
                            (this.seenFirstValue = !1);
                    }
                    return (
                        (n.prototype['@@transducer/init'] = j.init),
                        (n.prototype['@@transducer/result'] = j.result),
                        (n.prototype['@@transducer/step'] = function(n, t) {
                            var r = !1;
                            return (
                                this.seenFirstValue
                                    ? this.pred(this.lastValue, t) && (r = !0)
                                    : (this.seenFirstValue = !0),
                                (this.lastValue = t),
                                r ? n : this.xf['@@transducer/step'](n, t)
                            );
                        }),
                        n
                    );
                })(),
                Ut = a(function(n, t) {
                    return new Rt(n, t);
                }),
                Dt = a(function(n, t) {
                    var r = n < 0 ? t.length + n : n;
                    return _(t) ? t.charAt(r) : t[r];
                }),
                zt = Dt(-1),
                Mt = a(
                    b([], Ut, function(n, t) {
                        var r = [],
                            e = 1,
                            u = t.length;
                        if (0 !== u)
                            for (r[0] = t[0]; e < u; )
                                n(zt(r), t[e]) || (r[r.length] = t[e]),
                                    (e += 1);
                        return r;
                    }),
                ),
                Lt = u(b([], Ut(Gn), Mt(Gn))),
                Kt = (function() {
                    function n(n, t) {
                        (this.xf = t), (this.f = n);
                    }
                    return (
                        (n.prototype['@@transducer/init'] = j.init),
                        (n.prototype['@@transducer/result'] = j.result),
                        (n.prototype['@@transducer/step'] = function(n, t) {
                            if (this.f) {
                                if (this.f(t)) return n;
                                this.f = null;
                            }
                            return this.xf['@@transducer/step'](n, t);
                        }),
                        n
                    );
                })(),
                Vt = a(
                    b(
                        ['dropWhile'],
                        a(function(n, t) {
                            return new Kt(n, t);
                        }),
                        function(n, t) {
                            for (var r = 0, e = t.length; r < e && n(t[r]); )
                                r += 1;
                            return Rn(r, 1 / 0, t);
                        },
                    ),
                ),
                Jt = a(function(n, t) {
                    return n || t;
                }),
                $t = a(function(n, t) {
                    return wn(n)
                        ? function() {
                              return (
                                  n.apply(this, arguments) ||
                                  t.apply(this, arguments)
                              );
                          }
                        : xn(Jt)(n, t);
                }),
                Ht = u(function(n) {
                    return null != n &&
                        'function' == typeof n['fantasy-land/empty']
                        ? n['fantasy-land/empty']()
                        : null != n &&
                          null != n.constructor &&
                          'function' ==
                              typeof n.constructor['fantasy-land/empty']
                            ? n.constructor['fantasy-land/empty']()
                            : null != n && 'function' == typeof n.empty
                                ? n.empty()
                                : null != n &&
                                  null != n.constructor &&
                                  'function' == typeof n.constructor.empty
                                    ? n.constructor.empty()
                                    : m(n)
                                        ? []
                                        : _(n)
                                            ? ''
                                            : ot(n)
                                                ? {}
                                                : D(n)
                                                    ? (function() {
                                                          return arguments;
                                                      })()
                                                    : void 0;
                }),
                Xt = a(function(n, t) {
                    return It(n >= 0 ? t.length - n : 0, t);
                }),
                Yt = a(function(n, t) {
                    return Gn(Xt(n.length, t), n);
                }),
                Zt = g(function(n, t, r) {
                    return Gn(n(t), n(r));
                }),
                Gt = g(function(n, t, r) {
                    return Gn(t[n], r[n]);
                }),
                Qt = a(function n(t, r) {
                    var e,
                        u,
                        i,
                        o = {};
                    for (u in r)
                        (i = typeof (e = t[u])),
                            (o[u] =
                                'function' === i
                                    ? e(r[u])
                                    : e && 'object' === i
                                        ? n(e, r[u])
                                        : r[u]);
                    return o;
                }),
                nr = (function() {
                    function n(n, t) {
                        (this.xf = t), (this.f = n), (this.found = !1);
                    }
                    return (
                        (n.prototype['@@transducer/init'] = j.init),
                        (n.prototype['@@transducer/result'] = function(n) {
                            return (
                                this.found ||
                                    (n = this.xf['@@transducer/step'](
                                        n,
                                        void 0,
                                    )),
                                this.xf['@@transducer/result'](n)
                            );
                        }),
                        (n.prototype['@@transducer/step'] = function(n, t) {
                            return (
                                this.f(t) &&
                                    ((this.found = !0),
                                    (n = x(
                                        this.xf['@@transducer/step'](n, t),
                                    ))),
                                n
                            );
                        }),
                        n
                    );
                })(),
                tr = a(
                    b(
                        ['find'],
                        a(function(n, t) {
                            return new nr(n, t);
                        }),
                        function(n, t) {
                            for (var r = 0, e = t.length; r < e; ) {
                                if (n(t[r])) return t[r];
                                r += 1;
                            }
                        },
                    ),
                ),
                rr = (function() {
                    function n(n, t) {
                        (this.xf = t),
                            (this.f = n),
                            (this.idx = -1),
                            (this.found = !1);
                    }
                    return (
                        (n.prototype['@@transducer/init'] = j.init),
                        (n.prototype['@@transducer/result'] = function(n) {
                            return (
                                this.found ||
                                    (n = this.xf['@@transducer/step'](n, -1)),
                                this.xf['@@transducer/result'](n)
                            );
                        }),
                        (n.prototype['@@transducer/step'] = function(n, t) {
                            return (
                                (this.idx += 1),
                                this.f(t) &&
                                    ((this.found = !0),
                                    (n = x(
                                        this.xf['@@transducer/step'](
                                            n,
                                            this.idx,
                                        ),
                                    ))),
                                n
                            );
                        }),
                        n
                    );
                })(),
                er = a(
                    b(
                        [],
                        a(function(n, t) {
                            return new rr(n, t);
                        }),
                        function(n, t) {
                            for (var r = 0, e = t.length; r < e; ) {
                                if (n(t[r])) return r;
                                r += 1;
                            }
                            return -1;
                        },
                    ),
                ),
                ur = (function() {
                    function n(n, t) {
                        (this.xf = t), (this.f = n);
                    }
                    return (
                        (n.prototype['@@transducer/init'] = j.init),
                        (n.prototype['@@transducer/result'] = function(n) {
                            return this.xf['@@transducer/result'](
                                this.xf['@@transducer/step'](n, this.last),
                            );
                        }),
                        (n.prototype['@@transducer/step'] = function(n, t) {
                            return this.f(t) && (this.last = t), n;
                        }),
                        n
                    );
                })(),
                ir = a(
                    b(
                        [],
                        a(function(n, t) {
                            return new ur(n, t);
                        }),
                        function(n, t) {
                            for (var r = t.length - 1; r >= 0; ) {
                                if (n(t[r])) return t[r];
                                r -= 1;
                            }
                        },
                    ),
                ),
                or = (function() {
                    function n(n, t) {
                        (this.xf = t),
                            (this.f = n),
                            (this.idx = -1),
                            (this.lastIdx = -1);
                    }
                    return (
                        (n.prototype['@@transducer/init'] = j.init),
                        (n.prototype['@@transducer/result'] = function(n) {
                            return this.xf['@@transducer/result'](
                                this.xf['@@transducer/step'](n, this.lastIdx),
                            );
                        }),
                        (n.prototype['@@transducer/step'] = function(n, t) {
                            return (
                                (this.idx += 1),
                                this.f(t) && (this.lastIdx = this.idx),
                                n
                            );
                        }),
                        n
                    );
                })(),
                cr = a(
                    b(
                        [],
                        a(function(n, t) {
                            return new or(n, t);
                        }),
                        function(n, t) {
                            for (var r = t.length - 1; r >= 0; ) {
                                if (n(t[r])) return r;
                                r -= 1;
                            }
                            return -1;
                        },
                    ),
                ),
                fr = u(Sn(!0)),
                ar = u(function(n) {
                    return h(n.length, function(t, r) {
                        var e = Array.prototype.slice.call(arguments, 0);
                        return (e[0] = r), (e[1] = t), n.apply(this, e);
                    });
                }),
                sr = a(
                    Fn('forEach', function(n, t) {
                        for (var r = t.length, e = 0; e < r; )
                            n(t[e]), (e += 1);
                        return t;
                    }),
                ),
                lr = a(function(n, t) {
                    for (var r = V(t), e = 0; e < r.length; ) {
                        var u = r[e];
                        n(t[u], u, t), (e += 1);
                    }
                    return t;
                }),
                pr = u(function(n) {
                    for (var t = {}, r = 0; r < n.length; )
                        (t[n[r][0]] = n[r][1]), (r += 1);
                    return t;
                }),
                dr = a(
                    Fn(
                        'groupBy',
                        mt(function(n, t) {
                            return null == n && (n = []), n.push(t), n;
                        }, null),
                    ),
                ),
                hr = a(function(n, t) {
                    for (var r = [], e = 0, u = t.length; e < u; ) {
                        for (var i = e + 1; i < u && n(t[i - 1], t[i]); )
                            i += 1;
                        r.push(t.slice(e, i)), (e = i);
                    }
                    return r;
                }),
                yr = a(function(n, t) {
                    return n > t;
                }),
                gr = a(function(n, t) {
                    return n >= t;
                }),
                vr = a(R),
                mr = a(function(n, t) {
                    return n in t;
                }),
                wr = Dt(0);
            function br(n) {
                return n;
            }
            var xr = u(br),
                jr = g(function(n, t, r) {
                    return h(
                        Math.max(n.length, t.length, r.length),
                        function() {
                            return n.apply(this, arguments)
                                ? t.apply(this, arguments)
                                : r.apply(this, arguments);
                        },
                    );
                }),
                Ar = s(1),
                Or = mt(function(n, t) {
                    return t;
                }, null),
                Sr = a(function(n, t) {
                    return 'function' != typeof t.indexOf || m(t)
                        ? Qn(t, n, 0)
                        : t.indexOf(n);
                }),
                Er = Rn(0, -1),
                _r = g(function(n, t, r) {
                    return it(function(t) {
                        return Hn(n, t, r);
                    }, t);
                }),
                Nr = g(function(n, t, r) {
                    n = n < r.length && n >= 0 ? n : r.length;
                    var e = Array.prototype.slice.call(r, 0);
                    return e.splice(n, 0, t), e;
                }),
                qr = g(function(n, t, r) {
                    return (
                        (n = n < r.length && n >= 0 ? n : r.length),
                        [].concat(
                            Array.prototype.slice.call(r, 0, n),
                            t,
                            Array.prototype.slice.call(r, n),
                        )
                    );
                });
            function kr(n, t, r) {
                var e,
                    u = typeof n;
                switch (u) {
                    case 'string':
                    case 'number':
                        return 0 === n && 1 / n == -1 / 0
                            ? !!r._items['-0'] ||
                                  (t && (r._items['-0'] = !0), !1)
                            : null !== r._nativeSet
                                ? t
                                    ? ((e = r._nativeSet.size),
                                      r._nativeSet.add(n),
                                      r._nativeSet.size === e)
                                    : r._nativeSet.has(n)
                                : u in r._items
                                    ? n in r._items[u] ||
                                      (t && (r._items[u][n] = !0), !1)
                                    : (t &&
                                          ((r._items[u] = {}),
                                          (r._items[u][n] = !0)),
                                      !1);
                    case 'boolean':
                        if (u in r._items) {
                            var i = n ? 1 : 0;
                            return (
                                !!r._items[u][i] ||
                                (t && (r._items[u][i] = !0), !1)
                            );
                        }
                        return t && (r._items[u] = n ? [!1, !0] : [!0, !1]), !1;
                    case 'function':
                        return null !== r._nativeSet
                            ? t
                                ? ((e = r._nativeSet.size),
                                  r._nativeSet.add(n),
                                  r._nativeSet.size === e)
                                : r._nativeSet.has(n)
                            : u in r._items
                                ? !!nt(n, r._items[u]) ||
                                  (t && r._items[u].push(n), !1)
                                : (t && (r._items[u] = [n]), !1);
                    case 'undefined':
                        return !!r._items[u] || (t && (r._items[u] = !0), !1);
                    case 'object':
                        if (null === n)
                            return (
                                !!r._items.null ||
                                (t && (r._items.null = !0), !1)
                            );
                    default:
                        return (u = Object.prototype.toString.call(n)) in
                            r._items
                            ? !!nt(n, r._items[u]) ||
                                  (t && r._items[u].push(n), !1)
                            : (t && (r._items[u] = [n]), !1);
                }
            }
            var Ir = (function() {
                    function n() {
                        (this._nativeSet =
                            'function' == typeof Set ? new Set() : null),
                            (this._items = {});
                    }
                    return (
                        (n.prototype.add = function(n) {
                            return !kr(n, !0, this);
                        }),
                        (n.prototype.has = function(n) {
                            return kr(n, !1, this);
                        }),
                        n
                    );
                })(),
                Wr = a(function(n, t) {
                    for (var r, e, u = new Ir(), i = [], o = 0; o < t.length; )
                        (r = n((e = t[o]))), u.add(r) && i.push(e), (o += 1);
                    return i;
                }),
                Pr = Wr(xr),
                Cr = a(function(n, t) {
                    var r, e;
                    return (
                        n.length > t.length
                            ? ((r = n), (e = t))
                            : ((r = t), (e = n)),
                        Pr(it(ar(nt)(r), e))
                    );
                }),
                Tr = a(
                    Fn('intersperse', function(n, t) {
                        for (var r = [], e = 0, u = t.length; e < u; )
                            e === u - 1 ? r.push(t[e]) : r.push(t[e], n),
                                (e += 1);
                        return r;
                    }),
                );
            var Br =
                    'function' == typeof Object.assign
                        ? Object.assign
                        : function(n) {
                              if (null == n)
                                  throw new TypeError(
                                      'Cannot convert undefined or null to object',
                                  );
                              for (
                                  var t = Object(n),
                                      r = 1,
                                      e = arguments.length;
                                  r < e;

                              ) {
                                  var u = arguments[r];
                                  if (null != u)
                                      for (var i in u) R(i, u) && (t[i] = u[i]);
                                  r += 1;
                              }
                              return t;
                          },
                Fr = a(function(n, t) {
                    var r = {};
                    return (r[n] = t), r;
                }),
                Rr = {
                    '@@transducer/init': Array,
                    '@@transducer/step': function(n, t) {
                        return n.push(t), n;
                    },
                    '@@transducer/result': br,
                },
                Ur = {
                    '@@transducer/init': String,
                    '@@transducer/step': function(n, t) {
                        return n + t;
                    },
                    '@@transducer/result': br,
                },
                Dr = {
                    '@@transducer/init': Object,
                    '@@transducer/step': function(n, t) {
                        return Br(n, N(t) ? Fr(t[0], t[1]) : t);
                    },
                    '@@transducer/result': br,
                };
            var zr = g(function(n, t, r) {
                    return w(n)
                        ? T(t(n), n['@@transducer/init'](), r)
                        : T(
                              t(
                                  (function(n) {
                                      if (w(n)) return n;
                                      if (N(n)) return Rr;
                                      if ('string' == typeof n) return Ur;
                                      if ('object' == typeof n) return Dr;
                                      throw new Error(
                                          'Cannot create transformer for ' + n,
                                      );
                                  })(n),
                              ),
                              In(n, [], [], !1),
                              r,
                          );
                }),
                Mr = u(function(n) {
                    for (var t = V(n), r = t.length, e = 0, u = {}; e < r; ) {
                        var i = t[e],
                            o = n[i],
                            c = R(o, u) ? u[o] : (u[o] = []);
                        (c[c.length] = i), (e += 1);
                    }
                    return u;
                }),
                Lr = u(function(n) {
                    for (var t = V(n), r = t.length, e = 0, u = {}; e < r; ) {
                        var i = t[e];
                        (u[n[i]] = i), (e += 1);
                    }
                    return u;
                }),
                Kr = a(function(n, t) {
                    return h(n + 1, function() {
                        var r = arguments[n];
                        if (null != r && wn(r[t]))
                            return r[t].apply(
                                r,
                                Array.prototype.slice.call(arguments, 0, n),
                            );
                        throw new TypeError(
                            st(r) + ' does not have a method named "' + t + '"',
                        );
                    });
                }),
                Vr = a(function(n, t) {
                    return (null != t && t.constructor === n) || t instanceof n;
                }),
                Jr = u(function(n) {
                    return null != n && Gn(n, Ht(n));
                }),
                $r = Kr(1, 'join'),
                Hr = u(function(n) {
                    return gt(function() {
                        return Array.prototype.slice.call(arguments, 0);
                    }, n);
                }),
                Xr = u(function(n) {
                    var t,
                        r = [];
                    for (t in n) r[r.length] = t;
                    return r;
                }),
                Yr = a(function(n, t) {
                    if ('function' != typeof t.lastIndexOf || m(t)) {
                        for (var r = t.length - 1; r >= 0; ) {
                            if (Gn(t[r], n)) return r;
                            r -= 1;
                        }
                        return -1;
                    }
                    return t.lastIndexOf(n);
                });
            function Zr(n) {
                return '[object Number]' === Object.prototype.toString.call(n);
            }
            var Gr = u(function(n) {
                    return null != n && Zr(n.length) ? n.length : NaN;
                }),
                Qr = a(function(n, t) {
                    return function(r) {
                        return function(e) {
                            return J(function(n) {
                                return t(n, e);
                            }, r(n(e)));
                        };
                    };
                }),
                ne = u(function(n) {
                    return Qr(Dt(n), _t(n));
                }),
                te = u(function(n) {
                    return Qr($(n), gn(n));
                }),
                re = u(function(n) {
                    return Qr(H(n), dn(n));
                }),
                ee = a(function(n, t) {
                    return n < t;
                }),
                ue = a(function(n, t) {
                    return n <= t;
                }),
                ie = g(function(n, t, r) {
                    for (var e = 0, u = r.length, i = [], o = [t]; e < u; )
                        (o = n(o[0], r[e])), (i[e] = o[1]), (e += 1);
                    return [o[0], i];
                }),
                oe = g(function(n, t, r) {
                    for (var e = r.length - 1, u = [], i = [t]; e >= 0; )
                        (i = n(r[e], i[0])), (u[e] = i[1]), (e -= 1);
                    return [u, i[0]];
                }),
                ce = a(function(n, t) {
                    return T(
                        function(r, e) {
                            return (r[e] = n(t[e], e, t)), r;
                        },
                        {},
                        V(t),
                    );
                }),
                fe = a(function(n, t) {
                    return t.match(n) || [];
                }),
                ae = a(function(n, t) {
                    return hn(n)
                        ? !hn(t) || t < 1
                            ? NaN
                            : (n % t + t) % t
                        : NaN;
                }),
                se = g(function(n, t, r) {
                    return n(r) > n(t) ? r : t;
                }),
                le = Y(s, 0),
                pe = u(function(n) {
                    return le(n) / n.length;
                }),
                de = u(function(n) {
                    var t = n.length;
                    if (0 === t) return NaN;
                    var r = 2 - t % 2,
                        e = (t - r) / 2;
                    return pe(
                        Array.prototype.slice
                            .call(n, 0)
                            .sort(function(n, t) {
                                return n < t ? -1 : n > t ? 1 : 0;
                            })
                            .slice(e, e + r),
                    );
                }),
                he = a(function(n, t) {
                    var r = {};
                    return p(t.length, function() {
                        var e = n.apply(this, arguments);
                        return (
                            R(e, r) || (r[e] = t.apply(this, arguments)), r[e]
                        );
                    });
                }),
                ye = he(function() {
                    return st(arguments);
                }),
                ge = a(function(n, t) {
                    return Br({}, n, t);
                }),
                ve = u(function(n) {
                    return Br.apply(null, [{}].concat(n));
                }),
                me = g(function(n, t, r) {
                    var e,
                        u = {};
                    for (e in t)
                        R(e, t) && (u[e] = R(e, r) ? n(e, t[e], r[e]) : t[e]);
                    for (e in r) R(e, r) && !R(e, u) && (u[e] = r[e]);
                    return u;
                }),
                we = g(function n(t, r, e) {
                    return me(
                        function(r, e, u) {
                            return ot(e) && ot(u) ? n(t, e, u) : t(r, e, u);
                        },
                        r,
                        e,
                    );
                }),
                be = a(function(n, t) {
                    return we(
                        function(n, t, r) {
                            return t;
                        },
                        n,
                        t,
                    );
                }),
                xe = a(function(n, t) {
                    return we(
                        function(n, t, r) {
                            return r;
                        },
                        n,
                        t,
                    );
                }),
                je = g(function(n, t, r) {
                    return we(
                        function(t, r, e) {
                            return n(r, e);
                        },
                        t,
                        r,
                    );
                }),
                Ae = g(function(n, t, r) {
                    return me(
                        function(t, r, e) {
                            return n(r, e);
                        },
                        t,
                        r,
                    );
                }),
                Oe = a(function(n, t) {
                    return t < n ? t : n;
                }),
                Se = g(function(n, t, r) {
                    return n(r) < n(t) ? r : t;
                }),
                Ee = a(function(n, t) {
                    return n % t;
                }),
                _e = a(function(n, t) {
                    return n * t;
                }),
                Ne = u(function(n) {
                    return -n;
                }),
                qe = a(ut(b(['any'], nn, tn))),
                ke = u(function(n) {
                    return h(n < 0 ? 1 : n + 1, function() {
                        return Dt(n, arguments);
                    });
                }),
                Ie = g(function(n, t, r) {
                    return n(t(r));
                });
            var We = u(function(n) {
                    return [n];
                }),
                Pe = a(function(n, t) {
                    for (var r = {}, e = {}, u = 0, i = n.length; u < i; )
                        (e[n[u]] = 1), (u += 1);
                    for (var o in t) e.hasOwnProperty(o) || (r[o] = t[o]);
                    return r;
                }),
                Ce = u(function(n) {
                    var t,
                        r = !1;
                    return p(n.length, function() {
                        return r
                            ? t
                            : ((r = !0), (t = n.apply(this, arguments)));
                    });
                }),
                Te = function(n) {
                    return {
                        value: n,
                        map: function(t) {
                            return Te(t(n));
                        },
                    };
                },
                Be = g(function(n, t, r) {
                    return n(function(n) {
                        return Te(t(n));
                    })(r).value;
                }),
                Fe = a(function(n, t) {
                    return [n, t];
                });
            function Re(n) {
                return a(function(t, r) {
                    return p(Math.max(0, t.length - r.length), function() {
                        return t.apply(this, n(r, arguments));
                    });
                });
            }
            var Ue = Re(l),
                De = Re(ar(l)),
                ze = Hr([ft, at]),
                Me = g(function(n, t, r) {
                    return Gn($(n, r), t);
                }),
                Le = g(function(n, t, r) {
                    return xt(n, $(t, r));
                }),
                Ke = g(function(n, t, r) {
                    return t.length > 0 && n($(t, r));
                }),
                Ve = a(function(n, t) {
                    for (var r = {}, e = 0; e < n.length; )
                        n[e] in t && (r[n[e]] = t[n[e]]), (e += 1);
                    return r;
                }),
                Je = a(function(n, t) {
                    for (var r = {}, e = 0, u = n.length; e < u; ) {
                        var i = n[e];
                        (r[i] = t[i]), (e += 1);
                    }
                    return r;
                }),
                $e = a(function(n, t) {
                    var r = {};
                    for (var e in t) n(t[e], e, t) && (r[e] = t[e]);
                    return r;
                });
            function He() {
                if (0 === arguments.length)
                    throw new Error('pipeK requires at least one argument');
                return Ln.apply(this, zn(arguments));
            }
            var Xe = a(function(n, t) {
                    return l([n], t);
                }),
                Ye = Y(_e, 1),
                Ze = a(function(n, t) {
                    return h(t.length, function() {
                        for (var r = [], e = 0; e < t.length; )
                            r.push(t[e].call(this, arguments[e])), (e += 1);
                        return n.apply(
                            this,
                            r.concat(
                                Array.prototype.slice.call(arguments, t.length),
                            ),
                        );
                    });
                }),
                Ge = Ze(E, [Je, xr]),
                Qe = g(function(n, t, r) {
                    return Gn(t, r[n]);
                }),
                nu = g(function(n, t, r) {
                    return Vr(n, r[t]);
                }),
                tu = g(function(n, t, r) {
                    return null != r && R(t, r) ? r[t] : n;
                }),
                ru = g(function(n, t, r) {
                    return n(r[t]);
                }),
                eu = a(function(n, t) {
                    for (var r = n.length, e = [], u = 0; u < r; )
                        (e[u] = t[n[u]]), (u += 1);
                    return e;
                }),
                uu = a(function(n, t) {
                    if (!Zr(n) || !Zr(t))
                        throw new TypeError(
                            'Both arguments to range must be numbers',
                        );
                    for (var r = [], e = n; e < t; ) r.push(e), (e += 1);
                    return r;
                }),
                iu = g(function(n, t, r) {
                    for (var e = r.length - 1; e >= 0; )
                        (t = n(r[e], t)), (e -= 1);
                    return t;
                }),
                ou = d(4, [], function(n, t, r, e) {
                    return T(
                        function(r, e) {
                            return n(r, e) ? t(r, e) : x(r);
                        },
                        r,
                        e,
                    );
                }),
                cu = u(x),
                fu = a(function(n, t) {
                    var r,
                        e = Number(t),
                        u = 0;
                    if (e < 0 || isNaN(e))
                        throw new RangeError('n must be a non-negative number');
                    for (r = new Array(e); u < e; ) (r[u] = n(u)), (u += 1);
                    return r;
                }),
                au = a(function(n, t) {
                    return fu(i(n), t);
                }),
                su = g(function(n, t, r) {
                    return r.replace(n, t);
                }),
                lu = g(function(n, t, r) {
                    for (var e = 0, u = r.length, i = [t]; e < u; )
                        (t = n(t, r[e])), (i[e + 1] = t), (e += 1);
                    return i;
                }),
                pu = a(function(n, t) {
                    return 'function' == typeof t.sequence
                        ? t.sequence(n)
                        : iu(
                              function(n, t) {
                                  return en(J(Xe, n), t);
                              },
                              n([]),
                              t,
                          );
                }),
                du = g(function(n, t, r) {
                    return Be(n, i(t), r);
                }),
                hu = a(function(n, t) {
                    return Array.prototype.slice.call(t, 0).sort(n);
                }),
                yu = a(function(n, t) {
                    return Array.prototype.slice
                        .call(t, 0)
                        .sort(function(t, r) {
                            var e = n(t),
                                u = n(r);
                            return e < u ? -1 : e > u ? 1 : 0;
                        });
                }),
                gu = a(function(n, t) {
                    return Array.prototype.slice
                        .call(t, 0)
                        .sort(function(t, r) {
                            for (var e = 0, u = 0; 0 === e && u < n.length; )
                                (e = n[u](t, r)), (u += 1);
                            return e;
                        });
                }),
                vu = Kr(1, 'split'),
                mu = a(function(n, t) {
                    return [Rn(0, n, t), Rn(n, Gr(t), t)];
                }),
                wu = a(function(n, t) {
                    if (n <= 0)
                        throw new Error(
                            'First argument to splitEvery must be a positive integer',
                        );
                    for (var r = [], e = 0; e < t.length; )
                        r.push(Rn(e, (e += n), t));
                    return r;
                }),
                bu = a(function(n, t) {
                    for (var r = 0, e = t.length, u = []; r < e && !n(t[r]); )
                        u.push(t[r]), (r += 1);
                    return [u, Array.prototype.slice.call(t, r)];
                }),
                xu = a(function(n, t) {
                    return Gn(Pt(n.length, t), n);
                }),
                ju = a(function(n, t) {
                    return Number(n) - Number(t);
                }),
                Au = a(function(n, t) {
                    return lt(At(n, t), At(t, n));
                }),
                Ou = g(function(n, t, r) {
                    return lt(Ot(n, t, r), Ot(n, r, t));
                }),
                Su = a(function(n, t) {
                    for (var r = t.length - 1; r >= 0 && n(t[r]); ) r -= 1;
                    return Rn(r + 1, 1 / 0, t);
                }),
                Eu = (function() {
                    function n(n, t) {
                        (this.xf = t), (this.f = n);
                    }
                    return (
                        (n.prototype['@@transducer/init'] = j.init),
                        (n.prototype['@@transducer/result'] = j.result),
                        (n.prototype['@@transducer/step'] = function(n, t) {
                            return this.f(t)
                                ? this.xf['@@transducer/step'](n, t)
                                : x(n);
                        }),
                        n
                    );
                })(),
                _u = a(
                    b(
                        ['takeWhile'],
                        a(function(n, t) {
                            return new Eu(n, t);
                        }),
                        function(n, t) {
                            for (var r = 0, e = t.length; r < e && n(t[r]); )
                                r += 1;
                            return Rn(0, r, t);
                        },
                    ),
                ),
                Nu = (function() {
                    function n(n, t) {
                        (this.xf = t), (this.f = n);
                    }
                    return (
                        (n.prototype['@@transducer/init'] = j.init),
                        (n.prototype['@@transducer/result'] = j.result),
                        (n.prototype['@@transducer/step'] = function(n, t) {
                            return (
                                this.f(t), this.xf['@@transducer/step'](n, t)
                            );
                        }),
                        n
                    );
                })(),
                qu = a(
                    b(
                        [],
                        a(function(n, t) {
                            return new Nu(n, t);
                        }),
                        function(n, t) {
                            return n(t), t;
                        },
                    ),
                );
            var ku = a(function(n, t) {
                    if (
                        ((r = n),
                        '[object RegExp]' !== Object.prototype.toString.call(r))
                    )
                        throw new TypeError(
                            '‘test’ requires a value of type RegExp as its first argument; received ' +
                                st(n),
                        );
                    var r;
                    return qn(n).test(t);
                }),
                Iu = Kr(0, 'toLowerCase'),
                Wu = u(function(n) {
                    var t = [];
                    for (var r in n) R(r, n) && (t[t.length] = [r, n[r]]);
                    return t;
                }),
                Pu = u(function(n) {
                    var t = [];
                    for (var r in n) t[t.length] = [r, n[r]];
                    return t;
                }),
                Cu = Kr(0, 'toUpperCase'),
                Tu = h(4, function(n, t, r, e) {
                    return T(n('function' == typeof t ? k(t) : t), r, e);
                }),
                Bu = u(function(n) {
                    for (var t = 0, r = []; t < n.length; ) {
                        for (var e = n[t], u = 0; u < e.length; )
                            void 0 === r[u] && (r[u] = []),
                                r[u].push(e[u]),
                                (u += 1);
                        t += 1;
                    }
                    return r;
                }),
                Fu = g(function(n, t, r) {
                    return 'function' == typeof r['fantasy-land/traverse']
                        ? r['fantasy-land/traverse'](t, n)
                        : pu(n, J(t, r));
                }),
                Ru = '\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff',
                Uu = u(
                    'function' == typeof String.prototype.trim &&
                    !Ru.trim() &&
                    '​'.trim()
                        ? function(n) {
                              return n.trim();
                          }
                        : function(n) {
                              var t = new RegExp('^[' + Ru + '][' + Ru + ']*'),
                                  r = new RegExp('[' + Ru + '][' + Ru + ']*$');
                              return n.replace(t, '').replace(r, '');
                          },
                ),
                Du = a(function(n, t) {
                    return p(n.length, function() {
                        try {
                            return n.apply(this, arguments);
                        } catch (n) {
                            return t.apply(this, l([n], arguments));
                        }
                    });
                }),
                zu = u(function(n) {
                    return function() {
                        return n(Array.prototype.slice.call(arguments, 0));
                    };
                }),
                Mu = u(function(n) {
                    return vn(1, n);
                }),
                Lu = a(function(n, t) {
                    return h(n, function() {
                        for (
                            var r, e = 1, u = t, i = 0;
                            e <= n && 'function' == typeof u;

                        )
                            (r = e === n ? arguments.length : i + u.length),
                                (u = u.apply(
                                    this,
                                    Array.prototype.slice.call(arguments, i, r),
                                )),
                                (e += 1),
                                (i = r);
                        return u;
                    });
                }),
                Ku = a(function(n, t) {
                    for (var r = n(t), e = []; r && r.length; )
                        (e[e.length] = r[0]), (r = n(r[1]));
                    return e;
                }),
                Vu = a(Mn(Pr, l)),
                Ju = a(function(n, t) {
                    for (var r, e = 0, u = t.length, i = []; e < u; )
                        Hn(n, (r = t[e]), i) || (i[i.length] = r), (e += 1);
                    return i;
                }),
                $u = g(function(n, t, r) {
                    return Ju(n, l(t, r));
                }),
                Hu = g(function(n, t, r) {
                    return n(r) ? r : t(r);
                }),
                Xu = _n(br),
                Yu = g(function(n, t, r) {
                    for (var e = r; !n(e); ) e = t(e);
                    return e;
                }),
                Zu = u(function(n) {
                    var t,
                        r = [];
                    for (t in n) r[r.length] = n[t];
                    return r;
                }),
                Gu = function(n) {
                    return {
                        value: n,
                        'fantasy-land/map': function() {
                            return this;
                        },
                    };
                },
                Qu = a(function(n, t) {
                    return n(Gu)(t).value;
                }),
                ni = g(function(n, t, r) {
                    return n(r) ? t(r) : r;
                }),
                ti = a(function(n, t) {
                    for (var r in n) if (R(r, n) && !n[r](t[r])) return !1;
                    return !0;
                }),
                ri = a(function(n, t) {
                    return ti(J(Gn, n), t);
                }),
                ei = a(function(n, t) {
                    return at(ar(nt)(n), t);
                }),
                ui = a(function(n, t) {
                    for (
                        var r, e = 0, u = n.length, i = t.length, o = [];
                        e < u;

                    ) {
                        for (r = 0; r < i; )
                            (o[o.length] = [n[e], t[r]]), (r += 1);
                        e += 1;
                    }
                    return o;
                }),
                ii = a(function(n, t) {
                    for (
                        var r = [], e = 0, u = Math.min(n.length, t.length);
                        e < u;

                    )
                        (r[e] = [n[e], t[e]]), (e += 1);
                    return r;
                }),
                oi = a(function(n, t) {
                    for (
                        var r = 0, e = Math.min(n.length, t.length), u = {};
                        r < e;

                    )
                        (u[n[r]] = t[r]), (r += 1);
                    return u;
                }),
                ci = g(function(n, t, r) {
                    for (
                        var e = [], u = 0, i = Math.min(t.length, r.length);
                        u < i;

                    )
                        (e[u] = n(t[u], r[u])), (u += 1);
                    return e;
                });
            r.d(t, 'F', function() {
                return o;
            }),
                r.d(t, 'T', function() {
                    return c;
                }),
                r.d(t, '__', function() {
                    return f;
                }),
                r.d(t, 'add', function() {
                    return s;
                }),
                r.d(t, 'addIndex', function() {
                    return y;
                }),
                r.d(t, 'adjust', function() {
                    return v;
                }),
                r.d(t, 'all', function() {
                    return O;
                }),
                r.d(t, 'allPass', function() {
                    return Z;
                }),
                r.d(t, 'always', function() {
                    return i;
                }),
                r.d(t, 'and', function() {
                    return G;
                }),
                r.d(t, 'any', function() {
                    return tn;
                }),
                r.d(t, 'anyPass', function() {
                    return rn;
                }),
                r.d(t, 'ap', function() {
                    return en;
                }),
                r.d(t, 'aperture', function() {
                    return on;
                }),
                r.d(t, 'append', function() {
                    return cn;
                }),
                r.d(t, 'apply', function() {
                    return fn;
                }),
                r.d(t, 'applySpec', function() {
                    return sn;
                }),
                r.d(t, 'applyTo', function() {
                    return ln;
                }),
                r.d(t, 'ascend', function() {
                    return pn;
                }),
                r.d(t, 'assoc', function() {
                    return dn;
                }),
                r.d(t, 'assocPath', function() {
                    return gn;
                }),
                r.d(t, 'binary', function() {
                    return mn;
                }),
                r.d(t, 'bind', function() {
                    return I;
                }),
                r.d(t, 'both', function() {
                    return jn;
                }),
                r.d(t, 'call', function() {
                    return On;
                }),
                r.d(t, 'chain', function() {
                    return _n;
                }),
                r.d(t, 'clamp', function() {
                    return Nn;
                }),
                r.d(t, 'clone', function() {
                    return Wn;
                }),
                r.d(t, 'comparator', function() {
                    return Pn;
                }),
                r.d(t, 'complement', function() {
                    return Tn;
                }),
                r.d(t, 'compose', function() {
                    return Mn;
                }),
                r.d(t, 'composeK', function() {
                    return Ln;
                }),
                r.d(t, 'composeP', function() {
                    return Jn;
                }),
                r.d(t, 'concat', function() {
                    return lt;
                }),
                r.d(t, 'cond', function() {
                    return pt;
                }),
                r.d(t, 'construct', function() {
                    return ht;
                }),
                r.d(t, 'constructN', function() {
                    return dt;
                }),
                r.d(t, 'contains', function() {
                    return yt;
                }),
                r.d(t, 'converge', function() {
                    return gt;
                }),
                r.d(t, 'countBy', function() {
                    return wt;
                }),
                r.d(t, 'curry', function() {
                    return An;
                }),
                r.d(t, 'curryN', function() {
                    return h;
                }),
                r.d(t, 'dec', function() {
                    return bt;
                }),
                r.d(t, 'defaultTo', function() {
                    return xt;
                }),
                r.d(t, 'descend', function() {
                    return jt;
                }),
                r.d(t, 'difference', function() {
                    return At;
                }),
                r.d(t, 'differenceWith', function() {
                    return Ot;
                }),
                r.d(t, 'dissoc', function() {
                    return St;
                }),
                r.d(t, 'dissocPath', function() {
                    return Nt;
                }),
                r.d(t, 'divide', function() {
                    return qt;
                }),
                r.d(t, 'drop', function() {
                    return It;
                }),
                r.d(t, 'dropLast', function() {
                    return Tt;
                }),
                r.d(t, 'dropLastWhile', function() {
                    return Ft;
                }),
                r.d(t, 'dropRepeats', function() {
                    return Lt;
                }),
                r.d(t, 'dropRepeatsWith', function() {
                    return Mt;
                }),
                r.d(t, 'dropWhile', function() {
                    return Vt;
                }),
                r.d(t, 'either', function() {
                    return $t;
                }),
                r.d(t, 'empty', function() {
                    return Ht;
                }),
                r.d(t, 'endsWith', function() {
                    return Yt;
                }),
                r.d(t, 'eqBy', function() {
                    return Zt;
                }),
                r.d(t, 'eqProps', function() {
                    return Gt;
                }),
                r.d(t, 'equals', function() {
                    return Gn;
                }),
                r.d(t, 'evolve', function() {
                    return Qt;
                }),
                r.d(t, 'filter', function() {
                    return ft;
                }),
                r.d(t, 'find', function() {
                    return tr;
                }),
                r.d(t, 'findIndex', function() {
                    return er;
                }),
                r.d(t, 'findLast', function() {
                    return ir;
                }),
                r.d(t, 'findLastIndex', function() {
                    return cr;
                }),
                r.d(t, 'flatten', function() {
                    return fr;
                }),
                r.d(t, 'flip', function() {
                    return ar;
                }),
                r.d(t, 'forEach', function() {
                    return sr;
                }),
                r.d(t, 'forEachObjIndexed', function() {
                    return lr;
                }),
                r.d(t, 'fromPairs', function() {
                    return pr;
                }),
                r.d(t, 'groupBy', function() {
                    return dr;
                }),
                r.d(t, 'groupWith', function() {
                    return hr;
                }),
                r.d(t, 'gt', function() {
                    return yr;
                }),
                r.d(t, 'gte', function() {
                    return gr;
                }),
                r.d(t, 'has', function() {
                    return vr;
                }),
                r.d(t, 'hasIn', function() {
                    return mr;
                }),
                r.d(t, 'head', function() {
                    return wr;
                }),
                r.d(t, 'identical', function() {
                    return Xn;
                }),
                r.d(t, 'identity', function() {
                    return xr;
                }),
                r.d(t, 'ifElse', function() {
                    return jr;
                }),
                r.d(t, 'inc', function() {
                    return Ar;
                }),
                r.d(t, 'indexBy', function() {
                    return Or;
                }),
                r.d(t, 'indexOf', function() {
                    return Sr;
                }),
                r.d(t, 'init', function() {
                    return Er;
                }),
                r.d(t, 'innerJoin', function() {
                    return _r;
                }),
                r.d(t, 'insert', function() {
                    return Nr;
                }),
                r.d(t, 'insertAll', function() {
                    return qr;
                }),
                r.d(t, 'intersection', function() {
                    return Cr;
                }),
                r.d(t, 'intersperse', function() {
                    return Tr;
                }),
                r.d(t, 'into', function() {
                    return zr;
                }),
                r.d(t, 'invert', function() {
                    return Mr;
                }),
                r.d(t, 'invertObj', function() {
                    return Lr;
                }),
                r.d(t, 'invoker', function() {
                    return Kr;
                }),
                r.d(t, 'is', function() {
                    return Vr;
                }),
                r.d(t, 'isEmpty', function() {
                    return Jr;
                }),
                r.d(t, 'isNil', function() {
                    return yn;
                }),
                r.d(t, 'join', function() {
                    return $r;
                }),
                r.d(t, 'juxt', function() {
                    return Hr;
                }),
                r.d(t, 'keys', function() {
                    return V;
                }),
                r.d(t, 'keysIn', function() {
                    return Xr;
                }),
                r.d(t, 'last', function() {
                    return zt;
                }),
                r.d(t, 'lastIndexOf', function() {
                    return Yr;
                }),
                r.d(t, 'length', function() {
                    return Gr;
                }),
                r.d(t, 'lens', function() {
                    return Qr;
                }),
                r.d(t, 'lensIndex', function() {
                    return ne;
                }),
                r.d(t, 'lensPath', function() {
                    return te;
                }),
                r.d(t, 'lensProp', function() {
                    return re;
                }),
                r.d(t, 'lift', function() {
                    return xn;
                }),
                r.d(t, 'liftN', function() {
                    return bn;
                }),
                r.d(t, 'lt', function() {
                    return ee;
                }),
                r.d(t, 'lte', function() {
                    return ue;
                }),
                r.d(t, 'map', function() {
                    return J;
                }),
                r.d(t, 'mapAccum', function() {
                    return ie;
                }),
                r.d(t, 'mapAccumRight', function() {
                    return oe;
                }),
                r.d(t, 'mapObjIndexed', function() {
                    return ce;
                }),
                r.d(t, 'match', function() {
                    return fe;
                }),
                r.d(t, 'mathMod', function() {
                    return ae;
                }),
                r.d(t, 'max', function() {
                    return S;
                }),
                r.d(t, 'maxBy', function() {
                    return se;
                }),
                r.d(t, 'mean', function() {
                    return pe;
                }),
                r.d(t, 'median', function() {
                    return de;
                }),
                r.d(t, 'memoize', function() {
                    return ye;
                }),
                r.d(t, 'memoizeWith', function() {
                    return he;
                }),
                r.d(t, 'merge', function() {
                    return ge;
                }),
                r.d(t, 'mergeAll', function() {
                    return ve;
                }),
                r.d(t, 'mergeDeepLeft', function() {
                    return be;
                }),
                r.d(t, 'mergeDeepRight', function() {
                    return xe;
                }),
                r.d(t, 'mergeDeepWith', function() {
                    return je;
                }),
                r.d(t, 'mergeDeepWithKey', function() {
                    return we;
                }),
                r.d(t, 'mergeWith', function() {
                    return Ae;
                }),
                r.d(t, 'mergeWithKey', function() {
                    return me;
                }),
                r.d(t, 'min', function() {
                    return Oe;
                }),
                r.d(t, 'minBy', function() {
                    return Se;
                }),
                r.d(t, 'modulo', function() {
                    return Ee;
                }),
                r.d(t, 'multiply', function() {
                    return _e;
                }),
                r.d(t, 'nAry', function() {
                    return vn;
                }),
                r.d(t, 'negate', function() {
                    return Ne;
                }),
                r.d(t, 'none', function() {
                    return qe;
                }),
                r.d(t, 'not', function() {
                    return Cn;
                }),
                r.d(t, 'nth', function() {
                    return Dt;
                }),
                r.d(t, 'nthArg', function() {
                    return ke;
                }),
                r.d(t, 'o', function() {
                    return Ie;
                }),
                r.d(t, 'objOf', function() {
                    return Fr;
                }),
                r.d(t, 'of', function() {
                    return We;
                }),
                r.d(t, 'omit', function() {
                    return Pe;
                }),
                r.d(t, 'once', function() {
                    return Ce;
                }),
                r.d(t, 'or', function() {
                    return Jt;
                }),
                r.d(t, 'over', function() {
                    return Be;
                }),
                r.d(t, 'pair', function() {
                    return Fe;
                }),
                r.d(t, 'partial', function() {
                    return Ue;
                }),
                r.d(t, 'partialRight', function() {
                    return De;
                }),
                r.d(t, 'partition', function() {
                    return ze;
                }),
                r.d(t, 'path', function() {
                    return $;
                }),
                r.d(t, 'pathEq', function() {
                    return Me;
                }),
                r.d(t, 'pathOr', function() {
                    return Le;
                }),
                r.d(t, 'pathSatisfies', function() {
                    return Ke;
                }),
                r.d(t, 'pick', function() {
                    return Ve;
                }),
                r.d(t, 'pickAll', function() {
                    return Je;
                }),
                r.d(t, 'pickBy', function() {
                    return $e;
                }),
                r.d(t, 'pipe', function() {
                    return Dn;
                }),
                r.d(t, 'pipeK', function() {
                    return He;
                }),
                r.d(t, 'pipeP', function() {
                    return Vn;
                }),
                r.d(t, 'pluck', function() {
                    return X;
                }),
                r.d(t, 'prepend', function() {
                    return Xe;
                }),
                r.d(t, 'product', function() {
                    return Ye;
                }),
                r.d(t, 'project', function() {
                    return Ge;
                }),
                r.d(t, 'prop', function() {
                    return H;
                }),
                r.d(t, 'propEq', function() {
                    return Qe;
                }),
                r.d(t, 'propIs', function() {
                    return nu;
                }),
                r.d(t, 'propOr', function() {
                    return tu;
                }),
                r.d(t, 'propSatisfies', function() {
                    return ru;
                }),
                r.d(t, 'props', function() {
                    return eu;
                }),
                r.d(t, 'range', function() {
                    return uu;
                }),
                r.d(t, 'reduce', function() {
                    return Y;
                }),
                r.d(t, 'reduceBy', function() {
                    return mt;
                }),
                r.d(t, 'reduceRight', function() {
                    return iu;
                }),
                r.d(t, 'reduceWhile', function() {
                    return ou;
                }),
                r.d(t, 'reduced', function() {
                    return cu;
                }),
                r.d(t, 'reject', function() {
                    return at;
                }),
                r.d(t, 'remove', function() {
                    return Et;
                }),
                r.d(t, 'repeat', function() {
                    return au;
                }),
                r.d(t, 'replace', function() {
                    return su;
                }),
                r.d(t, 'reverse', function() {
                    return zn;
                }),
                r.d(t, 'scan', function() {
                    return lu;
                }),
                r.d(t, 'sequence', function() {
                    return pu;
                }),
                r.d(t, 'set', function() {
                    return du;
                }),
                r.d(t, 'slice', function() {
                    return Rn;
                }),
                r.d(t, 'sort', function() {
                    return hu;
                }),
                r.d(t, 'sortBy', function() {
                    return yu;
                }),
                r.d(t, 'sortWith', function() {
                    return gu;
                }),
                r.d(t, 'split', function() {
                    return vu;
                }),
                r.d(t, 'splitAt', function() {
                    return mu;
                }),
                r.d(t, 'splitEvery', function() {
                    return wu;
                }),
                r.d(t, 'splitWhen', function() {
                    return bu;
                }),
                r.d(t, 'startsWith', function() {
                    return xu;
                }),
                r.d(t, 'subtract', function() {
                    return ju;
                }),
                r.d(t, 'sum', function() {
                    return le;
                }),
                r.d(t, 'symmetricDifference', function() {
                    return Au;
                }),
                r.d(t, 'symmetricDifferenceWith', function() {
                    return Ou;
                }),
                r.d(t, 'tail', function() {
                    return Un;
                }),
                r.d(t, 'take', function() {
                    return Pt;
                }),
                r.d(t, 'takeLast', function() {
                    return Xt;
                }),
                r.d(t, 'takeLastWhile', function() {
                    return Su;
                }),
                r.d(t, 'takeWhile', function() {
                    return _u;
                }),
                r.d(t, 'tap', function() {
                    return qu;
                }),
                r.d(t, 'test', function() {
                    return ku;
                }),
                r.d(t, 'times', function() {
                    return fu;
                }),
                r.d(t, 'toLower', function() {
                    return Iu;
                }),
                r.d(t, 'toPairs', function() {
                    return Wu;
                }),
                r.d(t, 'toPairsIn', function() {
                    return Pu;
                }),
                r.d(t, 'toString', function() {
                    return st;
                }),
                r.d(t, 'toUpper', function() {
                    return Cu;
                }),
                r.d(t, 'transduce', function() {
                    return Tu;
                }),
                r.d(t, 'transpose', function() {
                    return Bu;
                }),
                r.d(t, 'traverse', function() {
                    return Fu;
                }),
                r.d(t, 'trim', function() {
                    return Uu;
                }),
                r.d(t, 'tryCatch', function() {
                    return Du;
                }),
                r.d(t, 'type', function() {
                    return kn;
                }),
                r.d(t, 'unapply', function() {
                    return zu;
                }),
                r.d(t, 'unary', function() {
                    return Mu;
                }),
                r.d(t, 'uncurryN', function() {
                    return Lu;
                }),
                r.d(t, 'unfold', function() {
                    return Ku;
                }),
                r.d(t, 'union', function() {
                    return Vu;
                }),
                r.d(t, 'unionWith', function() {
                    return $u;
                }),
                r.d(t, 'uniq', function() {
                    return Pr;
                }),
                r.d(t, 'uniqBy', function() {
                    return Wr;
                }),
                r.d(t, 'uniqWith', function() {
                    return Ju;
                }),
                r.d(t, 'unless', function() {
                    return Hu;
                }),
                r.d(t, 'unnest', function() {
                    return Xu;
                }),
                r.d(t, 'until', function() {
                    return Yu;
                }),
                r.d(t, 'update', function() {
                    return _t;
                }),
                r.d(t, 'useWith', function() {
                    return Ze;
                }),
                r.d(t, 'values', function() {
                    return an;
                }),
                r.d(t, 'valuesIn', function() {
                    return Zu;
                }),
                r.d(t, 'view', function() {
                    return Qu;
                }),
                r.d(t, 'when', function() {
                    return ni;
                }),
                r.d(t, 'where', function() {
                    return ti;
                }),
                r.d(t, 'whereEq', function() {
                    return ri;
                }),
                r.d(t, 'without', function() {
                    return ei;
                }),
                r.d(t, 'xprod', function() {
                    return ui;
                }),
                r.d(t, 'zip', function() {
                    return ii;
                }),
                r.d(t, 'zipObj', function() {
                    return oi;
                }),
                r.d(t, 'zipWith', function() {
                    return ci;
                });
        },
        9: function(n, t, r) {
            n.exports = r(8);
        },
    },
    [[9, 0]],
]);
