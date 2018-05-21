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
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{107:function(t,e,n){var r=n(86);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},108:function(t,e,n){var r=n(53),o=n(46),i=n(472),u=n(85),c=n(66),f=function(t,e,n){var s,a,l,p=t&f.F,d=t&f.G,v=t&f.S,y=t&f.P,h=t&f.B,b=t&f.W,m=d?o:o[e]||(o[e]={}),g=m.prototype,x=d?r:v?r[e]:(r[e]||{}).prototype;for(s in d&&(n=e),n)(a=!p&&x&&void 0!==x[s])&&c(m,s)||(l=a?x[s]:n[s],m[s]=d&&"function"!=typeof x[s]?n[s]:h&&a?i(l,r):b&&x[s]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):y&&"function"==typeof l?i(Function.call,l):l,y&&((m.virtual||(m.virtual={}))[s]=l,t&f.R&&g&&!g[s]&&u(g,s,l)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},109:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},1122:function(t,e,n){"use strict";var r=n(140);Object.defineProperty(e,"__esModule",{value:!0}),e.addProgressBar=function(t,e){var n=new o.Geom.Rectangle(0,0,e.width,e.height);return o.Geom.Rectangle.CenterOn(n,t.x,t.y),{bar:o.Geom.Rectangle.Clone(n),complete:n}};var o=r(n(106))},1123:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setupProgressBar=function(t){var e=t.add.graphics({fillStyle:{color:16777215},lineStyle:{width:2,color:16777215}}),n={width:t.cameras.main.width/3,height:t.cameras.main.width/30},c=(0,r.addProgressBar)((0,u.mainCameraCenter)(t),n);t.load.on("progress",function(t){c=(0,i.updateProgressBar)(c,t),(0,o.renderProgressBar)(e,c)}),t.load.on("complete",function(){e.destroy()})};var r=n(1122),o=n(490),i=n(489),u=n(488)},1124:function(t,e,n){var r=n(460),o=n(461);n(473)("getPrototypeOf",function(){return function(t){return o(r(t))}})},1125:function(t,e,n){n(1124),t.exports=n(46).Object.getPrototypeOf},1126:function(t,e,n){t.exports=n(1125)},1127:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},1128:function(t,e,n){n(218)("observable")},1129:function(t,e,n){n(218)("asyncIterator")},1130:function(t,e){},1131:function(t,e,n){var r=n(67),o=n(458).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},1132:function(t,e,n){var r=n(476);t.exports=Array.isArray||function(t){return"Array"==r(t)}},1133:function(t,e,n){var r=n(224),o=n(459),i=n(228);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,c=n(t),f=i.f,s=0;c.length>s;)f.call(t,u=c[s++])&&e.push(u);return e}},1134:function(t,e,n){var r=n(137)("meta"),o=n(86),i=n(66),u=n(64).f,c=0,f=Object.isExtensible||function(){return!0},s=!n(109)(function(){return f(Object.preventExtensions({}))}),a=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!f(t))return"F";if(!e)return"E";a(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!f(t))return!0;if(!e)return!1;a(t)}return t[r].w},onFreeze:function(t){return s&&l.NEED&&f(t)&&!i(t,r)&&a(t),t}}},1135:function(t,e,n){"use strict";var r=n(53),o=n(66),i=n(65),u=n(108),c=n(464),f=n(1134).KEY,s=n(109),a=n(222),l=n(220),p=n(137),d=n(84),v=n(219),y=n(218),h=n(1133),b=n(1132),m=n(107),g=n(86),x=n(67),O=n(227),w=n(139),_=n(463),S=n(1131),j=n(229),P=n(64),k=n(224),M=j.f,L=P.f,E=S.f,T=r.Symbol,C=r.JSON,F=C&&C.stringify,R=d("_hidden"),A=d("toPrimitive"),I={}.propertyIsEnumerable,B=a("symbol-registry"),N=a("symbols"),U=a("op-symbols"),G=Object.prototype,D="function"==typeof T,z=r.QObject,J=!z||!z.prototype||!z.prototype.findChild,V=i&&s(function(){return 7!=_(L({},"a",{get:function(){return L(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=M(G,e);r&&delete G[e],L(t,e,n),r&&t!==G&&L(G,e,r)}:L,H=function(t){var e=N[t]=_(T.prototype);return e._k=t,e},W=D&&"symbol"==typeof T.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof T},$=function(t,e,n){return t===G&&$(U,e,n),m(t),e=O(e,!0),m(n),o(N,e)?(n.enumerable?(o(t,R)&&t[R][e]&&(t[R][e]=!1),n=_(n,{enumerable:w(0,!1)})):(o(t,R)||L(t,R,w(1,{})),t[R][e]=!0),V(t,e,n)):L(t,e,n)},q=function(t,e){m(t);for(var n,r=h(e=x(e)),o=0,i=r.length;i>o;)$(t,n=r[o++],e[n]);return t},K=function(t){var e=I.call(this,t=O(t,!0));return!(this===G&&o(N,t)&&!o(U,t))&&(!(e||!o(this,t)||!o(N,t)||o(this,R)&&this[R][t])||e)},Y=function(t,e){if(t=x(t),e=O(e,!0),t!==G||!o(N,e)||o(U,e)){var n=M(t,e);return!n||!o(N,e)||o(t,R)&&t[R][e]||(n.enumerable=!0),n}},Q=function(t){for(var e,n=E(x(t)),r=[],i=0;n.length>i;)o(N,e=n[i++])||e==R||e==f||r.push(e);return r},X=function(t){for(var e,n=t===G,r=E(n?U:x(t)),i=[],u=0;r.length>u;)!o(N,e=r[u++])||n&&!o(G,e)||i.push(N[e]);return i};D||(c((T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===G&&e.call(U,n),o(this,R)&&o(this[R],t)&&(this[R][t]=!1),V(this,t,w(1,n))};return i&&J&&V(G,t,{configurable:!0,set:e}),H(t)}).prototype,"toString",function(){return this._k}),j.f=Y,P.f=$,n(458).f=S.f=Q,n(228).f=K,n(459).f=X,i&&!n(138)&&c(G,"propertyIsEnumerable",K,!0),v.f=function(t){return H(d(t))}),u(u.G+u.W+u.F*!D,{Symbol:T});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Z.length>tt;)d(Z[tt++]);for(var et=k(d.store),nt=0;et.length>nt;)y(et[nt++]);u(u.S+u.F*!D,"Symbol",{for:function(t){return o(B,t+="")?B[t]:B[t]=T(t)},keyFor:function(t){if(!W(t))throw TypeError(t+" is not a symbol!");for(var e in B)if(B[e]===t)return e},useSetter:function(){J=!0},useSimple:function(){J=!1}}),u(u.S+u.F*!D,"Object",{create:function(t,e){return void 0===e?_(t):q(_(t),e)},defineProperty:$,defineProperties:q,getOwnPropertyDescriptor:Y,getOwnPropertyNames:Q,getOwnPropertySymbols:X}),C&&u(u.S+u.F*(!D||s(function(){var t=T();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(g(e)||void 0!==t)&&!W(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!W(e))return e}),r[1]=e,F.apply(C,r)}}),T.prototype[A]||n(85)(T.prototype,A,T.prototype.valueOf),l(T,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},1136:function(t,e,n){n(1135),n(1130),n(1129),n(1128),t.exports=n(46).Symbol},1137:function(t,e,n){t.exports=n(1136)},1138:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},1139:function(t,e){t.exports=function(){}},1140:function(t,e,n){"use strict";var r=n(1139),o=n(1138),i=n(225),u=n(67);t.exports=n(465)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},1141:function(t,e,n){n(1140);for(var r=n(53),o=n(85),i=n(225),u=n(84)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),f=0;f<c.length;f++){var s=c[f],a=r[s],l=a&&a.prototype;l&&!l[u]&&o(l,u,s),i[s]=i.Array}},1142:function(t,e,n){var r=n(53).document;t.exports=r&&r.documentElement},1143:function(t,e,n){var r=n(226),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},1144:function(t,e,n){var r=n(226),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},1145:function(t,e,n){var r=n(67),o=n(1144),i=n(1143);t.exports=function(t){return function(e,n,u){var c,f=r(e),s=o(f.length),a=i(u,s);if(t&&n!=n){for(;s>a;)if((c=f[a++])!=c)return!0}else for(;s>a;a++)if((t||a in f)&&f[a]===n)return t||a||0;return!t&&-1}}},1146:function(t,e,n){var r=n(64),o=n(107),i=n(224);t.exports=n(65)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),c=u.length,f=0;c>f;)r.f(t,n=u[f++],e[n]);return t}},1147:function(t,e,n){"use strict";var r=n(463),o=n(139),i=n(220),u={};n(85)(u,n(84)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},1148:function(t,e,n){var r=n(226),o=n(230);t.exports=function(t){return function(e,n){var i,u,c=String(o(e)),f=r(n),s=c.length;return f<0||f>=s?t?"":void 0:(i=c.charCodeAt(f))<55296||i>56319||f+1===s||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):u-56320+(i-55296<<10)+65536}}},1149:function(t,e,n){"use strict";var r=n(1148)(!0);n(465)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},1150:function(t,e,n){n(1149),n(1141),t.exports=n(219).f("iterator")},1151:function(t,e,n){t.exports=n(1150)},1152:function(t,e,n){var r=n(1151),o=n(1137);function i(t){return(i="function"==typeof o&&"symbol"==typeof r?function(t){return typeof t}:function(t){return t&&"function"==typeof o&&t.constructor===o&&t!==o.prototype?"symbol":typeof t})(t)}function u(e){return"function"==typeof o&&"symbol"===i(r)?t.exports=u=function(t){return i(t)}:t.exports=u=function(t){return t&&"function"==typeof o&&t.constructor===o&&t!==o.prototype?"symbol":i(t)},u(e)}t.exports=u},1153:function(t,e,n){var r=n(86),o=n(107),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(472)(Function.call,n(229).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},1154:function(t,e,n){var r=n(108);r(r.S,"Object",{setPrototypeOf:n(1153).set})},1155:function(t,e,n){n(1154),t.exports=n(46).Object.setPrototypeOf},1156:function(t,e,n){t.exports=n(1155)},1157:function(t,e,n){var r=n(1156);function o(e,n){return t.exports=o=r||function(t,e){return t.__proto__=e,t},o(e,n)}t.exports=o},1158:function(t,e,n){var r=n(108);r(r.S+r.F*!n(65),"Object",{defineProperty:n(64).f})},1159:function(t,e,n){n(1158);var r=n(46).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},1160:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},1161:function(t,e,n){var r=n(476);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},1162:function(t,e,n){var r=n(67),o=n(229).f;n(473)("getOwnPropertyDescriptor",function(){return function(t,e){return o(r(t),e)}})},1163:function(t,e,n){n(1162);var r=n(46).Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}},1164:function(t,e,n){t.exports=n(1163)},1165:function(t,e,n){"use strict";var r=n(140),o=n(470);Object.defineProperty(e,"__esModule",{value:!0}),e.Boot=void 0;var i=o(n(469)),u=o(n(468)),c=o(n(467)),f=o(n(466)),s=o(n(457)),a=n(1123),l=n(232),p=function(t){function e(){return(0,i.default)(this,e),(0,f.default)(this,(0,s.default)(e).call(this,{key:"boot"}))}return(0,c.default)(e,[{key:"preload",value:function(){var t=this;(0,a.setupProgressBar)(this),(0,l.setupCamerasResize)(this),this.load.on("complete",function(){t.scene.start("game")}),this.load.pack("manifest","manifest.json","general")}}]),(0,u.default)(e,t),e}(r(n(106)).Scene);e.Boot=p},1166:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},1167:function(t,e,n){var r,o,i={},u=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),c=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),f=null,s=0,a=[],l=n(1166);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var u=0;u<o.parts.length;u++)o.parts[u](r.parts[u]);for(;u<r.parts.length;u++)o.parts.push(m(r.parts[u],e))}else{var c=[];for(u=0;u<r.parts.length;u++)c.push(m(r.parts[u],e));i[r.id]={id:r.id,refs:1,parts:c}}}}function d(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],u=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[u]?r[u].parts.push(c):n.push(r[u]={id:u,parts:[c]})}return n}function v(t,e){var n=c(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=a[a.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),a.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function y(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=a.indexOf(t);e>=0&&a.splice(e,1)}function h(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),b(e,t.attrs),v(t,e),e}function b(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function m(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var u=s++;n=f||(f=h(e)),r=O.bind(null,n,u,!1),o=O.bind(null,n,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),v(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var u=new Blob([r],{type:"text/css"}),c=t.href;t.href=URL.createObjectURL(u),c&&URL.revokeObjectURL(c)}.bind(null,n,e),o=function(){y(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){y(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=u()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return p(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var u=n[o];(c=i[u.id]).refs--,r.push(c)}t&&p(d(t,e),e);for(o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var f=0;f<c.parts.length;f++)c.parts[f]();delete i[c.id]}}}};var g,x=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function O(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(i,u[e]):t.appendChild(i)}}},1168:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(u=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(u))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var u;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var u=t[o];"number"==typeof u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),e.push(u))}},e}},1169:function(t,e,n){(t.exports=n(1168)(!1)).push([t.i,"html,\nbody {\n    height: 100%;\n    margin: 0;\n}\n\nbody {\n    background-color: #808080;\n}\n\n#game {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\ncanvas {\n    cursor: none;\n}\n",""])},1170:function(t,e,n){var r=n(1169);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1167)(r,o);r.locals&&(t.exports=r.locals)},1171:function(t,e,n){"use strict";n(1170);var r=n(1165),o=n(486),i=n(482),u=n(481),c=n(480),f=n(479),s=n(478),a=n(477);(0,c.log_banner)((0,s.title)(),(0,a.version)()),(0,i.addResizeListener)((0,f.start)((0,u.config)(),[r.Boot,o.Game]))},137:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},138:function(t,e){t.exports=!0},139:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},140:function(t,e,n){var r=n(1164),o=n(471);t.exports=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var i=o&&r?r(t,n):{};i.get||i.set?o(e,n,i):e[n]=t[n]}return e.default=t,e}},218:function(t,e,n){var r=n(53),o=n(46),i=n(138),u=n(219),c=n(64).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:u.f(t)})}},219:function(t,e,n){e.f=n(84)},220:function(t,e,n){var r=n(64).f,o=n(66),i=n(84)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},221:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},222:function(t,e,n){var r=n(46),o=n(53),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(138)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},223:function(t,e,n){var r=n(222)("keys"),o=n(137);t.exports=function(t){return r[t]||(r[t]=o(t))}},224:function(t,e,n){var r=n(462),o=n(221);t.exports=Object.keys||function(t){return r(t,o)}},225:function(t,e){t.exports={}},226:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},227:function(t,e,n){var r=n(86);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},228:function(t,e){e.f={}.propertyIsEnumerable},229:function(t,e,n){var r=n(228),o=n(139),i=n(67),u=n(227),c=n(66),f=n(475),s=Object.getOwnPropertyDescriptor;e.f=n(65)?s:function(t,e){if(t=i(t),e=u(e,!0),f)try{return s(t,e)}catch(t){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},230:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},232:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setupCamerasResize=function(t){t.events.on("resize",function(e,n){t.cameras.resize(e,n)})}},457:function(t,e,n){var r=n(1126);function o(e){return t.exports=o=r||function(t){return t.__proto__},o(e)}t.exports=o},458:function(t,e,n){var r=n(462),o=n(221).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},459:function(t,e){e.f=Object.getOwnPropertySymbols},46:function(t,e){var n=t.exports={version:"2.5.6"};"number"==typeof __e&&(__e=n)},460:function(t,e,n){var r=n(230);t.exports=function(t){return Object(r(t))}},461:function(t,e,n){var r=n(66),o=n(460),i=n(223)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},462:function(t,e,n){var r=n(66),o=n(67),i=n(1145)(!1),u=n(223)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),f=0,s=[];for(n in c)n!=u&&r(c,n)&&s.push(n);for(;e.length>f;)r(c,n=e[f++])&&(~i(s,n)||s.push(n));return s}},463:function(t,e,n){var r=n(107),o=n(1146),i=n(221),u=n(223)("IE_PROTO"),c=function(){},f=function(){var t,e=n(474)("iframe"),r=i.length;for(e.style.display="none",n(1142).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;r--;)delete f.prototype[i[r]];return f()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[u]=t):n=f(),void 0===e?n:o(n,e)}},464:function(t,e,n){t.exports=n(85)},465:function(t,e,n){"use strict";var r=n(138),o=n(108),i=n(464),u=n(85),c=n(225),f=n(1147),s=n(220),a=n(461),l=n(84)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,v,y,h,b){f(n,e,v);var m,g,x,O=function(t){if(!p&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",_="values"==y,S=!1,j=t.prototype,P=j[l]||j["@@iterator"]||y&&j[y],k=P||O(y),M=y?_?O("entries"):k:void 0,L="Array"==e&&j.entries||P;if(L&&(x=a(L.call(new t)))!==Object.prototype&&x.next&&(s(x,w,!0),r||"function"==typeof x[l]||u(x,l,d)),_&&P&&"values"!==P.name&&(S=!0,k=function(){return P.call(this)}),r&&!b||!p&&!S&&j[l]||u(j,l,k),c[e]=k,c[w]=d,y)if(m={values:_?k:O("values"),keys:h?k:O("keys"),entries:M},b)for(g in m)g in j||i(j,g,m[g]);else o(o.P+o.F*(p||S),e,m);return m}},466:function(t,e,n){var r=n(1152),o=n(1127);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},467:function(t,e,n){var r=n(471);function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),r(t,o.key,o)}}t.exports=function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}},468:function(t,e,n){var r=n(1157);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");r(t.prototype,e&&e.prototype),e&&r(t,e)}},469:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},470:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},471:function(t,e,n){t.exports=n(1159)},472:function(t,e,n){var r=n(1160);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},473:function(t,e,n){var r=n(108),o=n(46),i=n(109);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},474:function(t,e,n){var r=n(86),o=n(53).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},475:function(t,e,n){t.exports=!n(65)&&!n(109)(function(){return 7!=Object.defineProperty(n(474)("div"),"a",{get:function(){return 7}}).a})},476:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},477:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.version=function(){return"1.0.0_20180521220937".replace("_",".")}},478:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.title=function(){return"Space Patrol"}},479:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.start=function(t,e){return new Phaser.Game((0,r.assoc)("scene",e,t))};var r=n(231)},480:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.log_banner=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:console.log,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:console;n.apply(r,["%c %c %c %c %c ".concat(t,"%c v").concat(e," %c %c %c %c "),"color: #ffffff; background: #8888FF","color: #ffffff; background: #4444FF","color: #ffffff; background: #2222FF","color: #ffffff; background: #0000FF","color: #ffffff; background: #000099","color: #a0a0a0; background: #000099","color: #ffffff; background: #0000FF","color: #ffffff; background: #2222FF","color: #ffffff; background: #4444FF","color: #ffffff; background: #8888FF"])}},481:function(t,e,n){"use strict";var r=n(140);Object.defineProperty(e,"__esModule",{value:!0}),e.config=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window;return{type:o.AUTO,parent:"game",width:t.innerWidth,height:t.innerHeight,physics:{default:"arcade",arcade:{debug:!0}}}};var o=r(n(106))},482:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.addResizeListener=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;e.addEventListener("resize",function(){t.resize(e.innerWidth,e.innerHeight)},!1)}},483:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.addPlayer=function(t,e){return t.add.sprite(.5*t.cameras.main.width,.5*t.cameras.main.height,e)}},484:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.addBackground=function(t,e){var n=t.add.tileSprite(0,0,t.cameras.main.width,t.cameras.main.height,e);return n.setOrigin(0),n}},485:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.followPointer=function(t,e){t.on("pointermove",function(t){e.x=t.x,e.y=t.y})}},486:function(t,e,n){"use strict";var r=n(140),o=n(470);Object.defineProperty(e,"__esModule",{value:!0}),e.Game=void 0;var i=o(n(469)),u=o(n(468)),c=o(n(467)),f=o(n(466)),s=o(n(457)),a=n(485),l=n(232),p=n(484),d=n(483),v=function(t){function e(){return(0,i.default)(this,e),(0,f.default)(this,(0,s.default)(e).call(this,{key:"game"}))}return(0,c.default)(e,[{key:"preload",value:function(){(0,l.setupCamerasResize)(this)}},{key:"create",value:function(){var t=(0,p.addBackground)(this,"stars-black");(0,a.followPointer)(this.input,(0,d.addPlayer)(this,"ship-red")),this.events.on("resize",function(e,n){t.setSize(e,n)})}}]),(0,u.default)(e,t),e}(r(n(106)).Scene);e.Game=v},487:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.center=function(t){return{x:t.width/2,y:t.height/2}}},488:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.mainCameraCenter=function(t){return(0,r.center)(t.cameras.main)};var r=n(487)},489:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.updateProgressBar=function(t,e){return t.complete.width=e*t.bar.width,t}},490:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.renderProgressBar=function(t,e){t.strokeRectShape(e.bar).fillRectShape(e.complete)}},53:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},64:function(t,e,n){var r=n(107),o=n(475),i=n(227),u=Object.defineProperty;e.f=n(65)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},65:function(t,e,n){t.exports=!n(109)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},66:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},67:function(t,e,n){var r=n(1161),o=n(230);t.exports=function(t){return r(o(t))}},84:function(t,e,n){var r=n(222)("wks"),o=n(137),i=n(53).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},85:function(t,e,n){var r=n(64),o=n(139);t.exports=n(65)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},86:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}}},[[1171,0,1]]]);