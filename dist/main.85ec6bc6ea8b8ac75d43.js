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
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{109:function(t,e,n){var r=n(88);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},110:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},111:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.config=function(t,e,n){return{key:t,offset:e,depth:n}}},1147:function(t,e,n){"use strict";var r=n(89);Object.defineProperty(e,"__esModule",{value:!0}),e.addProgressBar=function(t,e){var n=new o.Geom.Rectangle(0,0,e.width,e.height);return o.Geom.Rectangle.CenterOn(n,t.x,t.y),{bar:o.Geom.Rectangle.Clone(n),complete:n}};var o=r(n(64))},1148:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setupProgressBar=function(t){var e=t.add.graphics({fillStyle:{color:16777215},lineStyle:{width:2,color:16777215}}),n={width:t.cameras.main.width/3,height:t.cameras.main.width/30},c=(0,r.addProgressBar)((0,u.mainCameraCenter)(t),n);t.load.on("progress",function(t){c=(0,i.updateProgressBar)(c,t),(0,o.renderProgressBar)(e,c)}),t.load.on("complete",function(){e.destroy()})};var r=n(1147),o=n(510),i=n(509),u=n(240)},1149:function(t,e,n){var r=n(466);function o(e,n){return t.exports=o=r||function(t,e){return t.__proto__=e,t},o(e,n)}t.exports=o},1150:function(t,e,n){var r=n(87);r(r.S,"Object",{create:n(229)})},1151:function(t,e,n){n(1150);var r=n(31).Object;t.exports=function(t,e){return r.create(t,e)}},1152:function(t,e,n){t.exports=n(1151)},1153:function(t,e,n){var r=n(88),o=n(109),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(480)(Function.call,n(234).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},1154:function(t,e,n){var r=n(87);r(r.S,"Object",{setPrototypeOf:n(1153).set})},1155:function(t,e,n){n(1154),t.exports=n(31).Object.setPrototypeOf},1156:function(t,e,n){var r=n(470),o=n(471);n(481)("getPrototypeOf",function(){return function(t){return o(r(t))}})},1157:function(t,e,n){n(1156),t.exports=n(31).Object.getPrototypeOf},1158:function(t,e,n){t.exports=n(1157)},1159:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},1160:function(t,e,n){n(222)("observable")},1161:function(t,e,n){n(222)("asyncIterator")},1162:function(t,e){},1163:function(t,e,n){var r=n(68),o=n(468).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},1164:function(t,e,n){var r=n(484);t.exports=Array.isArray||function(t){return"Array"==r(t)}},1165:function(t,e,n){var r=n(228),o=n(469),i=n(233);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,c=n(t),a=i.f,f=0;c.length>f;)a.call(t,u=c[f++])&&e.push(u);return e}},1166:function(t,e,n){var r=n(140)("meta"),o=n(88),i=n(67),u=n(65).f,c=0,a=Object.isExtensible||function(){return!0},f=!n(110)(function(){return a(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!a(t))return"F";if(!e)return"E";s(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!a(t))return!0;if(!e)return!1;s(t)}return t[r].w},onFreeze:function(t){return f&&l.NEED&&a(t)&&!i(t,r)&&s(t),t}}},1167:function(t,e,n){"use strict";var r=n(53),o=n(67),i=n(66),u=n(87),c=n(473),a=n(1166).KEY,f=n(110),s=n(226),l=n(224),p=n(140),d=n(85),v=n(223),h=n(222),y=n(1165),g=n(1164),b=n(109),m=n(88),_=n(68),O=n(232),x=n(142),w=n(229),P=n(1163),S=n(234),j=n(65),M=n(228),k=S.f,E=j.f,R=P.f,L=r.Symbol,C=r.JSON,T=C&&C.stringify,F=d("_hidden"),A=d("toPrimitive"),B={}.propertyIsEnumerable,I=s("symbol-registry"),N=s("symbols"),U=s("op-symbols"),G=Object.prototype,D="function"==typeof L,z=r.QObject,H=!z||!z.prototype||!z.prototype.findChild,W=i&&f(function(){return 7!=w(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=k(G,e);r&&delete G[e],E(t,e,n),r&&t!==G&&E(G,e,r)}:E,J=function(t){var e=N[t]=w(L.prototype);return e._k=t,e},V=D&&"symbol"==typeof L.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof L},Y=function(t,e,n){return t===G&&Y(U,e,n),b(t),e=O(e,!0),b(n),o(N,e)?(n.enumerable?(o(t,F)&&t[F][e]&&(t[F][e]=!1),n=w(n,{enumerable:x(0,!1)})):(o(t,F)||E(t,F,x(1,{})),t[F][e]=!0),W(t,e,n)):E(t,e,n)},X=function(t,e){b(t);for(var n,r=y(e=_(e)),o=0,i=r.length;i>o;)Y(t,n=r[o++],e[n]);return t},$=function(t){var e=B.call(this,t=O(t,!0));return!(this===G&&o(N,t)&&!o(U,t))&&(!(e||!o(this,t)||!o(N,t)||o(this,F)&&this[F][t])||e)},q=function(t,e){if(t=_(t),e=O(e,!0),t!==G||!o(N,e)||o(U,e)){var n=k(t,e);return!n||!o(N,e)||o(t,F)&&t[F][e]||(n.enumerable=!0),n}},K=function(t){for(var e,n=R(_(t)),r=[],i=0;n.length>i;)o(N,e=n[i++])||e==F||e==a||r.push(e);return r},Q=function(t){for(var e,n=t===G,r=R(n?U:_(t)),i=[],u=0;r.length>u;)!o(N,e=r[u++])||n&&!o(G,e)||i.push(N[e]);return i};D||(c((L=function(){if(this instanceof L)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===G&&e.call(U,n),o(this,F)&&o(this[F],t)&&(this[F][t]=!1),W(this,t,x(1,n))};return i&&H&&W(G,t,{configurable:!0,set:e}),J(t)}).prototype,"toString",function(){return this._k}),S.f=q,j.f=Y,n(468).f=P.f=K,n(233).f=$,n(469).f=Q,i&&!n(141)&&c(G,"propertyIsEnumerable",$,!0),v.f=function(t){return J(d(t))}),u(u.G+u.W+u.F*!D,{Symbol:L});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Z.length>tt;)d(Z[tt++]);for(var et=M(d.store),nt=0;et.length>nt;)h(et[nt++]);u(u.S+u.F*!D,"Symbol",{for:function(t){return o(I,t+="")?I[t]:I[t]=L(t)},keyFor:function(t){if(!V(t))throw TypeError(t+" is not a symbol!");for(var e in I)if(I[e]===t)return e},useSetter:function(){H=!0},useSimple:function(){H=!1}}),u(u.S+u.F*!D,"Object",{create:function(t,e){return void 0===e?w(t):X(w(t),e)},defineProperty:Y,defineProperties:X,getOwnPropertyDescriptor:q,getOwnPropertyNames:K,getOwnPropertySymbols:Q}),C&&u(u.S+u.F*(!D||f(function(){var t=L();return"[null]"!=T([t])||"{}"!=T({a:t})||"{}"!=T(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(m(e)||void 0!==t)&&!V(t))return g(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!V(e))return e}),r[1]=e,T.apply(C,r)}}),L.prototype[A]||n(86)(L.prototype,A,L.prototype.valueOf),l(L,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},1168:function(t,e,n){n(1167),n(1162),n(1161),n(1160),t.exports=n(31).Symbol},1169:function(t,e,n){t.exports=n(1168)},1170:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},1171:function(t,e){t.exports=function(){}},1172:function(t,e,n){"use strict";var r=n(1171),o=n(1170),i=n(230),u=n(68);t.exports=n(474)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},1173:function(t,e,n){n(1172);for(var r=n(53),o=n(86),i=n(230),u=n(85)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<c.length;a++){var f=c[a],s=r[f],l=s&&s.prototype;l&&!l[u]&&o(l,u,f),i[f]=i.Array}},1174:function(t,e,n){var r=n(53).document;t.exports=r&&r.documentElement},1175:function(t,e,n){var r=n(231),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},1176:function(t,e,n){var r=n(231),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},1177:function(t,e,n){var r=n(68),o=n(1176),i=n(1175);t.exports=function(t){return function(e,n,u){var c,a=r(e),f=o(a.length),s=i(u,f);if(t&&n!=n){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}}},1178:function(t,e,n){var r=n(65),o=n(109),i=n(228);t.exports=n(66)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),c=u.length,a=0;c>a;)r.f(t,n=u[a++],e[n]);return t}},1179:function(t,e,n){"use strict";var r=n(229),o=n(142),i=n(224),u={};n(86)(u,n(85)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},1180:function(t,e,n){var r=n(231),o=n(235);t.exports=function(t){return function(e,n){var i,u,c=String(o(e)),a=r(n),f=c.length;return a<0||a>=f?t?"":void 0:(i=c.charCodeAt(a))<55296||i>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536}}},1181:function(t,e,n){"use strict";var r=n(1180)(!0);n(474)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},1182:function(t,e,n){n(1181),n(1173),t.exports=n(223).f("iterator")},1183:function(t,e,n){t.exports=n(1182)},1184:function(t,e,n){var r=n(1183),o=n(1169);function i(t){return(i="function"==typeof o&&"symbol"==typeof r?function(t){return typeof t}:function(t){return t&&"function"==typeof o&&t.constructor===o&&t!==o.prototype?"symbol":typeof t})(t)}function u(e){return"function"==typeof o&&"symbol"===i(r)?t.exports=u=function(t){return i(t)}:t.exports=u=function(t){return t&&"function"==typeof o&&t.constructor===o&&t!==o.prototype?"symbol":i(t)},u(e)}t.exports=u},1185:function(t,e,n){var r=n(87);r(r.S+r.F*!n(66),"Object",{defineProperty:n(65).f})},1186:function(t,e,n){n(1185);var r=n(31).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},1187:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},1188:function(t,e,n){var r=n(484);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},1189:function(t,e,n){var r=n(68),o=n(234).f;n(481)("getOwnPropertyDescriptor",function(){return function(t,e){return o(r(t),e)}})},1190:function(t,e,n){n(1189);var r=n(31).Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}},1191:function(t,e,n){t.exports=n(1190)},1192:function(t,e,n){"use strict";var r=n(89),o=n(478);Object.defineProperty(e,"__esModule",{value:!0}),e.Boot=void 0;var i=o(n(477)),u=o(n(476)),c=o(n(475)),a=o(n(467)),f=o(n(465)),s=n(1148),l=n(239),p=function(t){function e(){return(0,i.default)(this,e),(0,c.default)(this,(0,a.default)(e).call(this,{key:"boot"}))}return(0,f.default)(e,t),(0,u.default)(e,[{key:"preload",value:function(){var t=this;(0,s.setupProgressBar)(this),(0,l.setupCamerasResize)(this),this.load.on("complete",function(){t.scene.start("game")}),this.load.pack("manifest","manifest.json")}}]),e}(r(n(64)).Scene);e.Boot=p},1193:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},1194:function(t,e,n){var r,o,i={},u=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),c=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),a=null,f=0,s=[],l=n(1193);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var u=0;u<o.parts.length;u++)o.parts[u](r.parts[u]);for(;u<r.parts.length;u++)o.parts.push(b(r.parts[u],e))}else{var c=[];for(u=0;u<r.parts.length;u++)c.push(b(r.parts[u],e));i[r.id]={id:r.id,refs:1,parts:c}}}}function d(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],u=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[u]?r[u].parts.push(c):n.push(r[u]={id:u,parts:[c]})}return n}function v(t,e){var n=c(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=s[s.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),s.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function h(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=s.indexOf(t);e>=0&&s.splice(e,1)}function y(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),g(e,t.attrs),v(t,e),e}function g(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var u=f++;n=a||(a=y(e)),r=O.bind(null,n,u,!1),o=O.bind(null,n,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),v(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var u=new Blob([r],{type:"text/css"}),c=t.href;t.href=URL.createObjectURL(u),c&&URL.revokeObjectURL(c)}.bind(null,n,e),o=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){h(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=u()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return p(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var u=n[o];(c=i[u.id]).refs--,r.push(c)}t&&p(d(t,e),e);for(o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var a=0;a<c.parts.length;a++)c.parts[a]();delete i[c.id]}}}};var m,_=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function O(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=_(e,o);else{var i=document.createTextNode(o),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(i,u[e]):t.appendChild(i)}}},1195:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(u=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(u))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var u;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var u=t[o];"number"==typeof u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),e.push(u))}},e}},1196:function(t,e,n){(t.exports=n(1195)(!1)).push([t.i,"html,\nbody {\n    height: 100%;\n    margin: 0;\n}\n\nbody {\n    background-color: #808080;\n}\n\n#game {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\ncanvas {\n    cursor: none;\n}\n",""])},1197:function(t,e,n){var r=n(1196);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1194)(r,o);r.locals&&(t.exports=r.locals)},1198:function(t,e,n){"use strict";n(1197);var r=n(1192),o=n(507),i=n(490),u=n(489),c=n(488),a=n(487),f=n(486),s=n(485);(0,c.log_banner)((0,f.title)(),(0,s.version)()),(0,i.addResizeListener)((0,a.start)((0,u.config)(),[r.Boot,o.Game]))},140:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},141:function(t,e){t.exports=!0},142:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},222:function(t,e,n){var r=n(53),o=n(31),i=n(141),u=n(223),c=n(65).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:u.f(t)})}},223:function(t,e,n){e.f=n(85)},224:function(t,e,n){var r=n(65).f,o=n(67),i=n(85)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},225:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},226:function(t,e,n){var r=n(31),o=n(53),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(141)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},227:function(t,e,n){var r=n(226)("keys"),o=n(140);t.exports=function(t){return r[t]||(r[t]=o(t))}},228:function(t,e,n){var r=n(472),o=n(225);t.exports=Object.keys||function(t){return r(t,o)}},229:function(t,e,n){var r=n(109),o=n(1178),i=n(225),u=n(227)("IE_PROTO"),c=function(){},a=function(){var t,e=n(482)("iframe"),r=i.length;for(e.style.display="none",n(1174).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[u]=t):n=a(),void 0===e?n:o(n,e)}},230:function(t,e){t.exports={}},231:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},232:function(t,e,n){var r=n(88);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},233:function(t,e){e.f={}.propertyIsEnumerable},234:function(t,e,n){var r=n(233),o=n(142),i=n(68),u=n(232),c=n(67),a=n(483),f=Object.getOwnPropertyDescriptor;e.f=n(66)?f:function(t,e){if(t=i(t),e=u(e,!0),a)try{return f(t,e)}catch(t){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},235:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},237:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.healthBarPosition=function(t){return{x:t.x,y:t.y+.5*t.height*1.6}}},238:function(t,e,n){"use strict";var r=n(89);Object.defineProperty(e,"__esModule",{value:!0}),e.centerRectangle=function(t,e){return o.Geom.Rectangle.CenterOn(t,e.x,e.y),t};var o=r(n(64))},239:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setupCamerasResize=function(t){t.events.on("resize",function(e,n){t.cameras.resize(e,n)})}},240:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.mainCameraCenter=function(t){return(0,r.center)(t.cameras.main)};var r=n(508)},31:function(t,e){var n=t.exports={version:"2.5.6"};"number"==typeof __e&&(__e=n)},465:function(t,e,n){var r=n(1152),o=n(1149);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=r(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},466:function(t,e,n){t.exports=n(1155)},467:function(t,e,n){var r=n(1158),o=n(466);function i(e){return t.exports=i=o?r:function(t){return t.__proto__||r(t)},i(e)}t.exports=i},468:function(t,e,n){var r=n(472),o=n(225).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},469:function(t,e){e.f=Object.getOwnPropertySymbols},470:function(t,e,n){var r=n(235);t.exports=function(t){return Object(r(t))}},471:function(t,e,n){var r=n(67),o=n(470),i=n(227)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},472:function(t,e,n){var r=n(67),o=n(68),i=n(1177)(!1),u=n(227)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),a=0,f=[];for(n in c)n!=u&&r(c,n)&&f.push(n);for(;e.length>a;)r(c,n=e[a++])&&(~i(f,n)||f.push(n));return f}},473:function(t,e,n){t.exports=n(86)},474:function(t,e,n){"use strict";var r=n(141),o=n(87),i=n(473),u=n(86),c=n(230),a=n(1179),f=n(224),s=n(471),l=n(85)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,v,h,y,g){a(n,e,v);var b,m,_,O=function(t){if(!p&&t in S)return S[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},x=e+" Iterator",w="values"==h,P=!1,S=t.prototype,j=S[l]||S["@@iterator"]||h&&S[h],M=j||O(h),k=h?w?O("entries"):M:void 0,E="Array"==e&&S.entries||j;if(E&&(_=s(E.call(new t)))!==Object.prototype&&_.next&&(f(_,x,!0),r||"function"==typeof _[l]||u(_,l,d)),w&&j&&"values"!==j.name&&(P=!0,M=function(){return j.call(this)}),r&&!g||!p&&!P&&S[l]||u(S,l,M),c[e]=M,c[x]=d,h)if(b={values:w?M:O("values"),keys:y?M:O("keys"),entries:k},g)for(m in b)m in S||i(S,m,b[m]);else o(o.P+o.F*(p||P),e,b);return b}},475:function(t,e,n){var r=n(1184),o=n(1159);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},476:function(t,e,n){var r=n(479);function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),r(t,o.key,o)}}t.exports=function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}},477:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},478:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},479:function(t,e,n){t.exports=n(1186)},480:function(t,e,n){var r=n(1187);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},481:function(t,e,n){var r=n(87),o=n(31),i=n(110);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},482:function(t,e,n){var r=n(88),o=n(53).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},483:function(t,e,n){t.exports=!n(66)&&!n(110)(function(){return 7!=Object.defineProperty(n(482)("div"),"a",{get:function(){return 7}}).a})},484:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},485:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.version=function(){return"1.0.0_20180601165918".replace("_",".")}},486:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.title=function(){return"Space Patrol"}},487:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.start=function(t,e){return new Phaser.Game((0,r.assoc)("scene",e,t))};var r=n(236)},488:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.log_banner=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:console.log,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:console;n.apply(r,["%c %c %c %c %c ".concat(t,"%c v").concat(e," %c %c %c %c "),"color: #ffffff; background: #8888FF","color: #ffffff; background: #4444FF","color: #ffffff; background: #2222FF","color: #ffffff; background: #0000FF","color: #ffffff; background: #000099","color: #a0a0a0; background: #000099","color: #ffffff; background: #0000FF","color: #ffffff; background: #2222FF","color: #ffffff; background: #4444FF","color: #ffffff; background: #8888FF"])}},489:function(t,e,n){"use strict";var r=n(89);Object.defineProperty(e,"__esModule",{value:!0}),e.config=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window;return{type:o.AUTO,parent:"game",width:t.innerWidth,height:t.innerHeight,physics:{default:"arcade",arcade:{debug:!0}}}};var o=r(n(64))},490:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.addResizeListener=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;e.addEventListener("resize",function(){t.resize(e.innerWidth,e.innerHeight)},!1)}},491:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.spriteChildren=function(t){return t.getChildren().map(function(t){return t})}},492:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.addBackground=function(t,e){var n=t.add.tileSprite(0,0,t.cameras.main.width,t.cameras.main.height,"sprites",e);return n.depth=0,n.setOrigin(0),n}},493:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.wing=function(){return(0,r.config)("wing",{x:51,y:-7},1e3)};var r=n(111)},494:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.engine=function(){return(0,r.config)("engine",{x:0,y:37},990)};var r=n(111)},495:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.cockpit=function(){return(0,r.config)("cockpit",{x:0,y:0},1e3)};var r=n(111)},496:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.beam=function(){return(0,r.config)("beam",{x:27,y:9},990)};var r=n(111)},497:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.addPlayerSprite=function(t,e,n,r){return t.make.sprite({x:e.x+(r?-1:1)*n.offset.x,y:e.y+n.offset.y,depth:n.depth,key:"sprites",frame:"player/".concat(n.key,".png"),flipX:r,flipY:!0})}},498:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.asType=function(t){return t}},499:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createEngineParticleEmitter=function(t,e,n){t.createEmitter({scale:{start:.5,end:0},alpha:{start:1,end:0},speed:0,life:500,gravityX:70*(n?-1:1),gravityY:50,blendMode:"NORMAL"}).startFollow((0,r.asType)(e))};var r=n(498)},500:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.addEngineParticles=function(t,e){var n=t.add.particles("sprites","player/engine-particle.png");(0,r.createEngineParticleEmitter)(n,e,!0),(0,r.createEngineParticleEmitter)(n,e,!1)};var r=n(499)},501:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.addPlayer=function(t){var e=(0,f.mainCameraCenter)(t),n=t.add.group({}),s=(0,o.addPlayerSprite)(t,e,(0,c.engine)(),!1);return n.addMultiple([(0,o.addPlayerSprite)(t,e,(0,u.cockpit)(),!1),s,(0,o.addPlayerSprite)(t,e,(0,i.beam)(),!0),(0,o.addPlayerSprite)(t,e,(0,i.beam)(),!1),(0,o.addPlayerSprite)(t,e,(0,a.wing)(),!0),(0,o.addPlayerSprite)(t,e,(0,a.wing)(),!1)]),(0,r.addEngineParticles)(t,s),n};var r=n(500),o=n(497),i=n(496),u=n(495),c=n(494),a=n(493),f=n(240)},502:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.groupSetXY=function(t,e,n,r){if(t.length<=r)throw new RangeError("index out of group range");var o={x:t[r].x-e,y:t[r].y-n};t.forEach(function(t){t.x=t.x-o.x,t.y=t.y-o.y})}},503:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.groupFollowPointer=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;t.on("pointermove",function(t){(0,r.groupSetXY)(e,t.x,t.y,n)})};var r=n(502)},504:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.fillRectangleWithStyle=function(t,e){return t.lineStyle(e.line.width,e.line.color,e.line.alpha).strokeRectShape(e.rectangle).fillStyle(e.fill.color,e.fill.alpha).fillRectShape(e.rectangle)}},505:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.renderHealthBar=function(t,e){var n=(0,i.healthBarPosition)(e.parent);(0,r.centerRectangle)(e.background.rectangle,n),(0,r.centerRectangle)(e.filled.rectangle,n),e.filled.rectangle.x=e.background.rectangle.x,(0,o.fillRectangleWithStyle)(t,e.background),(0,o.fillRectangleWithStyle)(t,e.filled)};var r=n(238),o=n(504),i=n(237)},506:function(t,e,n){"use strict";var r=n(89);Object.defineProperty(e,"__esModule",{value:!0}),e.addHealthBar=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:6,r=(0,i.healthBarPosition)(t),a={width:t.width*e,height:n},f=new u.Geom.Rectangle(0,0,a.width,a.height);(0,o.centerRectangle)(f,r);var s=u.Geom.Rectangle.Clone(f);return{parent:t,background:c(s,16777215,1,.25),filled:c(f,2280482,0)}};var o=n(238),i=n(237),u=r(n(64));function c(t,e,n){return{rectangle:t,fill:{color:e,alpha:arguments.length>3&&void 0!==arguments[3]?arguments[3]:1},line:{width:n,color:e}}}},507:function(t,e,n){"use strict";var r=n(89),o=n(478);Object.defineProperty(e,"__esModule",{value:!0}),e.Game=void 0;var i=o(n(477)),u=o(n(476)),c=o(n(475)),a=o(n(467)),f=o(n(465)),s=n(506),l=n(505),p=n(503),d=n(501),v=n(492),h=n(239),y=n(491),g=function(t){function e(){return(0,i.default)(this,e),(0,c.default)(this,(0,a.default)(e).call(this,{key:"game"}))}return(0,f.default)(e,t),(0,u.default)(e,[{key:"preload",value:function(){(0,h.setupCamerasResize)(this)}},{key:"create",value:function(){var t=this;this.graphics=this.add.graphics(),this.graphics.depth=800,this.background=(0,v.addBackground)(this,"scenario/stars-black.png"),this.player=(0,d.addPlayer)(this),this.healthBar=(0,s.addHealthBar)((0,y.spriteChildren)(this.player)[0],2.5),(0,p.groupFollowPointer)(this.input,(0,y.spriteChildren)(this.player)),this.events.on("resize",function(e,n){t.background.setSize(e,n)})}},{key:"update",value:function(){this.graphics.clear(),this.background.tilePositionY-=1,(0,l.renderHealthBar)(this.graphics,this.healthBar)}}]),e}(r(n(64)).Scene);e.Game=g},508:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.center=function(t){return{x:t.width/2,y:t.height/2}}},509:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.updateProgressBar=function(t,e){return t.complete.width=e*t.bar.width,t}},510:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.renderProgressBar=function(t,e){t.strokeRectShape(e.bar).fillRectShape(e.complete)}},53:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},65:function(t,e,n){var r=n(109),o=n(483),i=n(232),u=Object.defineProperty;e.f=n(66)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},66:function(t,e,n){t.exports=!n(110)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},67:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},68:function(t,e,n){var r=n(1188),o=n(235);t.exports=function(t){return r(o(t))}},85:function(t,e,n){var r=n(226)("wks"),o=n(140),i=n(53).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},86:function(t,e,n){var r=n(65),o=n(142);t.exports=n(66)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},87:function(t,e,n){var r=n(53),o=n(31),i=n(480),u=n(86),c=n(67),a=function(t,e,n){var f,s,l,p=t&a.F,d=t&a.G,v=t&a.S,h=t&a.P,y=t&a.B,g=t&a.W,b=d?o:o[e]||(o[e]={}),m=b.prototype,_=d?r:v?r[e]:(r[e]||{}).prototype;for(f in d&&(n=e),n)(s=!p&&_&&void 0!==_[f])&&c(b,f)||(l=s?_[f]:n[f],b[f]=d&&"function"!=typeof _[f]?n[f]:y&&s?i(l,r):g&&_[f]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((b.virtual||(b.virtual={}))[f]=l,t&a.R&&m&&!m[f]&&u(m,f,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},88:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},89:function(t,e,n){var r=n(1191),o=n(479);t.exports=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var i=o&&r?r(t,n):{};i.get||i.set?o(e,n,i):e[n]=t[n]}return e.default=t,e}}},[[1198,0,1]]]);