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
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{106:function(t,n,e){var r=e(86);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},107:function(t,n,e){var r=e(53),o=e(46),i=e(464),u=e(85),c=e(66),f=function(t,n,e){var s,a,p,l=t&f.F,v=t&f.G,d=t&f.S,y=t&f.P,h=t&f.B,b=t&f.W,g=v?o:o[n]||(o[n]={}),m=g.prototype,x=v?r:d?r[n]:(r[n]||{}).prototype;for(s in v&&(e=n),e)(a=!l&&x&&void 0!==x[s])&&c(g,s)||(p=a?x[s]:e[s],g[s]=v&&"function"!=typeof x[s]?e[s]:h&&a?i(p,r):b&&x[s]==p?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(p):y&&"function"==typeof p?i(Function.call,p):p,y&&((g.virtual||(g.virtual={}))[s]=p,t&f.R&&m&&!m[s]&&u(m,s,p)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},108:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},1107:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.addPlayer=function(t,n){return t.add.sprite(.5*t.cameras.main.width,.5*t.cameras.main.height,n)}},1108:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.addBackground=function(t,n){var e=t.add.tileSprite(0,0,t.cameras.main.width,t.cameras.main.height,n);return e.setOrigin(0),e}},1109:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.followPointer=function(t,n){t.on("pointermove",function(t){n.x=t.x,n.y=t.y})}},1110:function(t,n,e){var r=e(457),o=e(458);e(465)("getPrototypeOf",function(){return function(t){return o(r(t))}})},1111:function(t,n,e){e(1110),t.exports=e(46).Object.getPrototypeOf},1112:function(t,n,e){t.exports=e(1111)},1113:function(t,n,e){var r=e(1112);function o(n){return t.exports=o=r||function(t){return t.__proto__},o(n)}t.exports=o},1114:function(t,n){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},1115:function(t,n,e){e(217)("observable")},1116:function(t,n,e){e(217)("asyncIterator")},1117:function(t,n){},1118:function(t,n,e){var r=e(67),o=e(455).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},1119:function(t,n,e){var r=e(468);t.exports=Array.isArray||function(t){return"Array"==r(t)}},1120:function(t,n,e){var r=e(223),o=e(456),i=e(227);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var u,c=e(t),f=i.f,s=0;c.length>s;)f.call(t,u=c[s++])&&n.push(u);return n}},1121:function(t,n,e){var r=e(136)("meta"),o=e(86),i=e(66),u=e(64).f,c=0,f=Object.isExtensible||function(){return!0},s=!e(108)(function(){return f(Object.preventExtensions({}))}),a=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},p=t.exports={KEY:r,NEED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!f(t))return"F";if(!n)return"E";a(t)}return t[r].i},getWeak:function(t,n){if(!i(t,r)){if(!f(t))return!0;if(!n)return!1;a(t)}return t[r].w},onFreeze:function(t){return s&&p.NEED&&f(t)&&!i(t,r)&&a(t),t}}},1122:function(t,n,e){"use strict";var r=e(53),o=e(66),i=e(65),u=e(107),c=e(461),f=e(1121).KEY,s=e(108),a=e(221),p=e(219),l=e(136),v=e(84),d=e(218),y=e(217),h=e(1120),b=e(1119),g=e(106),m=e(86),x=e(67),O=e(226),w=e(138),_=e(460),S=e(1118),j=e(228),P=e(64),k=e(223),L=j.f,E=P.f,M=S.f,T=r.Symbol,F=r.JSON,A=F&&F.stringify,R=v("_hidden"),C=v("toPrimitive"),I={}.propertyIsEnumerable,N=a("symbol-registry"),U=a("symbols"),B=a("op-symbols"),D=Object.prototype,G="function"==typeof T,z=r.QObject,J=!z||!z.prototype||!z.prototype.findChild,V=i&&s(function(){return 7!=_(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=L(D,n);r&&delete D[n],E(t,n,e),r&&t!==D&&E(D,n,r)}:E,H=function(t){var n=U[t]=_(T.prototype);return n._k=t,n},W=G&&"symbol"==typeof T.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof T},$=function(t,n,e){return t===D&&$(B,n,e),g(t),n=O(n,!0),g(e),o(U,n)?(e.enumerable?(o(t,R)&&t[R][n]&&(t[R][n]=!1),e=_(e,{enumerable:w(0,!1)})):(o(t,R)||E(t,R,w(1,{})),t[R][n]=!0),V(t,n,e)):E(t,n,e)},q=function(t,n){g(t);for(var e,r=h(n=x(n)),o=0,i=r.length;i>o;)$(t,e=r[o++],n[e]);return t},K=function(t){var n=I.call(this,t=O(t,!0));return!(this===D&&o(U,t)&&!o(B,t))&&(!(n||!o(this,t)||!o(U,t)||o(this,R)&&this[R][t])||n)},Y=function(t,n){if(t=x(t),n=O(n,!0),t!==D||!o(U,n)||o(B,n)){var e=L(t,n);return!e||!o(U,n)||o(t,R)&&t[R][n]||(e.enumerable=!0),e}},Q=function(t){for(var n,e=M(x(t)),r=[],i=0;e.length>i;)o(U,n=e[i++])||n==R||n==f||r.push(n);return r},X=function(t){for(var n,e=t===D,r=M(e?B:x(t)),i=[],u=0;r.length>u;)!o(U,n=r[u++])||e&&!o(D,n)||i.push(U[n]);return i};G||(c((T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var t=l(arguments.length>0?arguments[0]:void 0),n=function(e){this===D&&n.call(B,e),o(this,R)&&o(this[R],t)&&(this[R][t]=!1),V(this,t,w(1,e))};return i&&J&&V(D,t,{configurable:!0,set:n}),H(t)}).prototype,"toString",function(){return this._k}),j.f=Y,P.f=$,e(455).f=S.f=Q,e(227).f=K,e(456).f=X,i&&!e(137)&&c(D,"propertyIsEnumerable",K,!0),d.f=function(t){return H(v(t))}),u(u.G+u.W+u.F*!G,{Symbol:T});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Z.length>tt;)v(Z[tt++]);for(var nt=k(v.store),et=0;nt.length>et;)y(nt[et++]);u(u.S+u.F*!G,"Symbol",{for:function(t){return o(N,t+="")?N[t]:N[t]=T(t)},keyFor:function(t){if(!W(t))throw TypeError(t+" is not a symbol!");for(var n in N)if(N[n]===t)return n},useSetter:function(){J=!0},useSimple:function(){J=!1}}),u(u.S+u.F*!G,"Object",{create:function(t,n){return void 0===n?_(t):q(_(t),n)},defineProperty:$,defineProperties:q,getOwnPropertyDescriptor:Y,getOwnPropertyNames:Q,getOwnPropertySymbols:X}),F&&u(u.S+u.F*(!G||s(function(){var t=T();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))})),"JSON",{stringify:function(t){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(e=n=r[1],(m(n)||void 0!==t)&&!W(t))return b(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!W(n))return n}),r[1]=n,A.apply(F,r)}}),T.prototype[C]||e(85)(T.prototype,C,T.prototype.valueOf),p(T,"Symbol"),p(Math,"Math",!0),p(r.JSON,"JSON",!0)},1123:function(t,n,e){e(1122),e(1117),e(1116),e(1115),t.exports=e(46).Symbol},1124:function(t,n,e){t.exports=e(1123)},1125:function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},1126:function(t,n){t.exports=function(){}},1127:function(t,n,e){"use strict";var r=e(1126),o=e(1125),i=e(224),u=e(67);t.exports=e(462)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},1128:function(t,n,e){e(1127);for(var r=e(53),o=e(85),i=e(224),u=e(84)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),f=0;f<c.length;f++){var s=c[f],a=r[s],p=a&&a.prototype;p&&!p[u]&&o(p,u,s),i[s]=i.Array}},1129:function(t,n,e){var r=e(53).document;t.exports=r&&r.documentElement},1130:function(t,n,e){var r=e(225),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},1131:function(t,n,e){var r=e(225),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},1132:function(t,n,e){var r=e(67),o=e(1131),i=e(1130);t.exports=function(t){return function(n,e,u){var c,f=r(n),s=o(f.length),a=i(u,s);if(t&&e!=e){for(;s>a;)if((c=f[a++])!=c)return!0}else for(;s>a;a++)if((t||a in f)&&f[a]===e)return t||a||0;return!t&&-1}}},1133:function(t,n,e){var r=e(64),o=e(106),i=e(223);t.exports=e(65)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,f=0;c>f;)r.f(t,e=u[f++],n[e]);return t}},1134:function(t,n,e){"use strict";var r=e(460),o=e(138),i=e(219),u={};e(85)(u,e(84)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},1135:function(t,n,e){var r=e(225),o=e(229);t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),f=r(e),s=c.length;return f<0||f>=s?t?"":void 0:(i=c.charCodeAt(f))<55296||i>56319||f+1===s||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):u-56320+(i-55296<<10)+65536}}},1136:function(t,n,e){"use strict";var r=e(1135)(!0);e(462)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},1137:function(t,n,e){e(1136),e(1128),t.exports=e(218).f("iterator")},1138:function(t,n,e){t.exports=e(1137)},1139:function(t,n,e){var r=e(1138),o=e(1124);function i(t){return(i="function"==typeof o&&"symbol"==typeof r?function(t){return typeof t}:function(t){return t&&"function"==typeof o&&t.constructor===o&&t!==o.prototype?"symbol":typeof t})(t)}function u(n){return"function"==typeof o&&"symbol"===i(r)?t.exports=u=function(t){return i(t)}:t.exports=u=function(t){return t&&"function"==typeof o&&t.constructor===o&&t!==o.prototype?"symbol":i(t)},u(n)}t.exports=u},1140:function(t,n,e){var r=e(1139),o=e(1114);t.exports=function(t,n){return!n||"object"!==r(n)&&"function"!=typeof n?o(t):n}},1141:function(t,n,e){var r=e(463);function o(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),r(t,o.key,o)}}t.exports=function(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),t}},1142:function(t,n,e){var r=e(86),o=e(106),i=function(t,n){if(o(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{(r=e(464)(Function.call,e(228).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,e){return i(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:i}},1143:function(t,n,e){var r=e(107);r(r.S,"Object",{setPrototypeOf:e(1142).set})},1144:function(t,n,e){e(1143),t.exports=e(46).Object.setPrototypeOf},1145:function(t,n,e){t.exports=e(1144)},1146:function(t,n,e){var r=e(1145);function o(n,e){return t.exports=o=r||function(t,n){return t.__proto__=n,t},o(n,e)}t.exports=o},1147:function(t,n,e){var r=e(1146);t.exports=function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");r(t.prototype,n&&n.prototype),n&&r(t,n)}},1148:function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},1149:function(t,n){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},1150:function(t,n,e){var r=e(107);r(r.S+r.F*!e(65),"Object",{defineProperty:e(64).f})},1151:function(t,n,e){e(1150);var r=e(46).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},1152:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},1153:function(t,n,e){var r=e(468);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},1154:function(t,n,e){var r=e(67),o=e(228).f;e(465)("getOwnPropertyDescriptor",function(){return function(t,n){return o(r(t),n)}})},1155:function(t,n,e){e(1154);var r=e(46).Object;t.exports=function(t,n){return r.getOwnPropertyDescriptor(t,n)}},1156:function(t,n,e){t.exports=e(1155)},1157:function(t,n,e){"use strict";var r=e(469),o=e(1149);Object.defineProperty(n,"__esModule",{value:!0}),n.Boot=void 0;var i=o(e(1148)),u=o(e(1147)),c=o(e(1141)),f=o(e(1140)),s=o(e(1113)),a=e(1109),p=e(1108),l=e(1107),v=function(t){function n(){return(0,i.default)(this,n),(0,f.default)(this,(0,s.default)(n).apply(this,arguments))}return(0,c.default)(n,[{key:"preload",value:function(){this.load.pack("manifest","manifest.json","general")}},{key:"create",value:function(){var t=this,n=(0,p.addBackground)(this,"stars-black");(0,a.followPointer)(this.input,(0,l.addPlayer)(this,"ship-red")),this.events.on("resize",function(e,r){n.setSize(e,r),t.cameras.resize(e,r)})}}]),(0,u.default)(n,t),n}(r(e(216)).Scene);n.Boot=v},1158:function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,r=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var o,i=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},1159:function(t,n,e){var r,o,i={},u=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),c=function(t){var n={};return function(t){if("function"==typeof t)return t();if(void 0===n[t]){var e=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}}(),f=null,s=0,a=[],p=e(1158);function l(t,n){for(var e=0;e<t.length;e++){var r=t[e],o=i[r.id];if(o){o.refs++;for(var u=0;u<o.parts.length;u++)o.parts[u](r.parts[u]);for(;u<r.parts.length;u++)o.parts.push(g(r.parts[u],n))}else{var c=[];for(u=0;u<r.parts.length;u++)c.push(g(r.parts[u],n));i[r.id]={id:r.id,refs:1,parts:c}}}}function v(t,n){for(var e=[],r={},o=0;o<t.length;o++){var i=t[o],u=n.base?i[0]+n.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[u]?r[u].parts.push(c):e.push(r[u]={id:u,parts:[c]})}return e}function d(t,n){var e=c(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=a[a.length-1];if("top"===t.insertAt)r?r.nextSibling?e.insertBefore(n,r.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),a.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(t.insertInto+" "+t.insertAt.before);e.insertBefore(n,o)}}function y(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=a.indexOf(t);n>=0&&a.splice(n,1)}function h(t){var n=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),b(n,t.attrs),d(t,n),n}function b(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function g(t,n){var e,r,o,i;if(n.transform&&t.css){if(!(i=n.transform(t.css)))return function(){};t.css=i}if(n.singleton){var u=s++;e=f||(f=h(n)),r=O.bind(null,e,u,!1),o=O.bind(null,e,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(n,t.attrs),d(t,n),n}(n),r=function(t,n,e){var r=e.css,o=e.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=p(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var u=new Blob([r],{type:"text/css"}),c=t.href;t.href=URL.createObjectURL(u),c&&URL.revokeObjectURL(c)}.bind(null,e,n),o=function(){y(e),e.href&&URL.revokeObjectURL(e.href)}):(e=h(n),r=function(t,n){var e=n.css,r=n.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){y(e)});return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=u()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=v(t,n);return l(e,n),function(t){for(var r=[],o=0;o<e.length;o++){var u=e[o];(c=i[u.id]).refs--,r.push(c)}t&&l(v(t,n),n);for(o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var f=0;f<c.parts.length;f++)c.parts[f]();delete i[c.id]}}}};var m,x=(m=[],function(t,n){return m[t]=n,m.filter(Boolean).join("\n")});function O(t,n,e,r){var o=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(n,o);else{var i=document.createTextNode(o),u=t.childNodes;u[n]&&t.removeChild(u[n]),u.length?t.insertBefore(i,u[n]):t.appendChild(i)}}},1160:function(t,n){t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var o=(u=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(u))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[e].concat(i).concat([o]).join("\n")}var u;return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var u=t[o];"number"==typeof u[0]&&r[u[0]]||(e&&!u[2]?u[2]=e:e&&(u[2]="("+u[2]+") and ("+e+")"),n.push(u))}},n}},1161:function(t,n,e){(t.exports=e(1160)(!1)).push([t.i,"html,\nbody {\n    height: 100%;\n    margin: 0;\n}\n\nbody {\n    background-color: #808080;\n}\n\n#game {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\ncanvas {\n    cursor: none;\n}\n",""])},1162:function(t,n,e){var r=e(1161);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1159)(r,o);r.locals&&(t.exports=r.locals)},1163:function(t,n,e){"use strict";e(1162);var r=e(1157),o=e(475),i=e(474),u=e(473),c=e(472),f=e(471),s=e(470);(0,u.log_banner)((0,f.title)(),(0,s.version)()),(0,o.addResizeListener)((0,c.start)((0,i.config)(),r.Boot))},136:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},137:function(t,n){t.exports=!0},138:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},217:function(t,n,e){var r=e(53),o=e(46),i=e(137),u=e(218),c=e(64).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},218:function(t,n,e){n.f=e(84)},219:function(t,n,e){var r=e(64).f,o=e(66),i=e(84)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},220:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},221:function(t,n,e){var r=e(46),o=e(53),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(137)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},222:function(t,n,e){var r=e(221)("keys"),o=e(136);t.exports=function(t){return r[t]||(r[t]=o(t))}},223:function(t,n,e){var r=e(459),o=e(220);t.exports=Object.keys||function(t){return r(t,o)}},224:function(t,n){t.exports={}},225:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},226:function(t,n,e){var r=e(86);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},227:function(t,n){n.f={}.propertyIsEnumerable},228:function(t,n,e){var r=e(227),o=e(138),i=e(67),u=e(226),c=e(66),f=e(467),s=Object.getOwnPropertyDescriptor;n.f=e(65)?s:function(t,n){if(t=i(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(c(t,n))return o(!r.f.call(t,n),t[n])}},229:function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},455:function(t,n,e){var r=e(459),o=e(220).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},456:function(t,n){n.f=Object.getOwnPropertySymbols},457:function(t,n,e){var r=e(229);t.exports=function(t){return Object(r(t))}},458:function(t,n,e){var r=e(66),o=e(457),i=e(222)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},459:function(t,n,e){var r=e(66),o=e(67),i=e(1132)(!1),u=e(222)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),f=0,s=[];for(e in c)e!=u&&r(c,e)&&s.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(s,e)||s.push(e));return s}},46:function(t,n){var e=t.exports={version:"2.5.6"};"number"==typeof __e&&(__e=e)},460:function(t,n,e){var r=e(106),o=e(1133),i=e(220),u=e(222)("IE_PROTO"),c=function(){},f=function(){var t,n=e(466)("iframe"),r=i.length;for(n.style.display="none",e(1129).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;r--;)delete f.prototype[i[r]];return f()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[u]=t):e=f(),void 0===n?e:o(e,n)}},461:function(t,n,e){t.exports=e(85)},462:function(t,n,e){"use strict";var r=e(137),o=e(107),i=e(461),u=e(85),c=e(224),f=e(1134),s=e(219),a=e(458),p=e(84)("iterator"),l=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,e,d,y,h,b){f(e,n,d);var g,m,x,O=function(t){if(!l&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},w=n+" Iterator",_="values"==y,S=!1,j=t.prototype,P=j[p]||j["@@iterator"]||y&&j[y],k=P||O(y),L=y?_?O("entries"):k:void 0,E="Array"==n&&j.entries||P;if(E&&(x=a(E.call(new t)))!==Object.prototype&&x.next&&(s(x,w,!0),r||"function"==typeof x[p]||u(x,p,v)),_&&P&&"values"!==P.name&&(S=!0,k=function(){return P.call(this)}),r&&!b||!l&&!S&&j[p]||u(j,p,k),c[n]=k,c[w]=v,y)if(g={values:_?k:O("values"),keys:h?k:O("keys"),entries:L},b)for(m in g)m in j||i(j,m,g[m]);else o(o.P+o.F*(l||S),n,g);return g}},463:function(t,n,e){t.exports=e(1151)},464:function(t,n,e){var r=e(1152);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},465:function(t,n,e){var r=e(107),o=e(46),i=e(108);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],u={};u[t]=n(e),r(r.S+r.F*i(function(){e(1)}),"Object",u)}},466:function(t,n,e){var r=e(86),o=e(53).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},467:function(t,n,e){t.exports=!e(65)&&!e(108)(function(){return 7!=Object.defineProperty(e(466)("div"),"a",{get:function(){return 7}}).a})},468:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},469:function(t,n,e){var r=e(1156),o=e(463);t.exports=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e)){var i=o&&r?r(t,e):{};i.get||i.set?o(n,e,i):n[e]=t[e]}return n.default=t,n}},470:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.version=function(){return"1.0.0_20180520225111".replace("_",".")}},471:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.title=function(){return"Space Patrol"}},472:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.start=function(t,n){return new Phaser.Game((0,r.assoc)("scene",n,t))};var r=e(230)},473:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.log_banner=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:console.log,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:console;e.apply(r,["%c %c %c %c %c ".concat(t,"%c v").concat(n," %c %c %c %c "),"color: #ffffff; background: #8888FF","color: #ffffff; background: #4444FF","color: #ffffff; background: #2222FF","color: #ffffff; background: #0000FF","color: #ffffff; background: #000099","color: #a0a0a0; background: #000099","color: #ffffff; background: #0000FF","color: #ffffff; background: #2222FF","color: #ffffff; background: #4444FF","color: #ffffff; background: #8888FF"])}},474:function(t,n,e){"use strict";var r=e(469);Object.defineProperty(n,"__esModule",{value:!0}),n.config=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window;return{type:o.AUTO,parent:"game",width:t.innerWidth,height:t.innerHeight,physics:{default:"arcade",arcade:{debug:!0}}}};var o=r(e(216))},475:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.addResizeListener=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;n.addEventListener("resize",function(){t.resize(n.innerWidth,n.innerHeight)},!1)}},53:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},64:function(t,n,e){var r=e(106),o=e(467),i=e(226),u=Object.defineProperty;n.f=e(65)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},65:function(t,n,e){t.exports=!e(108)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},66:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},67:function(t,n,e){var r=e(1153),o=e(229);t.exports=function(t){return r(o(t))}},84:function(t,n,e){var r=e(221)("wks"),o=e(136),i=e(53).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},85:function(t,n,e){var r=e(64),o=e(138);t.exports=e(65)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},86:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}}},[[1163,0,1]]]);