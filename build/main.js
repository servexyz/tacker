!function(e,r){for(var t in r)e[t]=r[t]}(exports,function(e){var r={};function t(n){if(r[n])return r[n].exports;var u=r[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var u in e)t.d(n,u,function(r){return e[r]}.bind(null,u));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){e.exports=t(1)},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.getObjFromArray=d,r.getChalkColor=y,r.wrap=h,r.wrapPrintError=function(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];t[t.length];return h(e)},r.printError=function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(o.default.truthy(r)&&o.default.truthy(e)){var t=e.fn,u=e.err,a=e.msg;t&&w("red"),o.default.undefined(t)||s("".concat(n.default.red(t))),o.default.undefined(u)||(w({character:".",color:"grey"}),s("".concat(n.default.red(u))),w({character:".",color:"grey"})),o.default.undefined(a)||s("".concat(n.default.grey(a))),w("red")}return!1},r.printMirror=b,r.printPkgVersion=function(e){return v.apply(this,arguments)},r.printPkgProp=function(e,r){return m.apply(this,arguments)},r.printLine=w,r.colors=r.colorsArr=void 0;var n=i(t(2)),u=i(t(3)),o=i(t(4)),a=t(5);function i(e){return e&&e.__esModule?e:{default:e}}function c(e,r,t,n,u,o,a){try{var i=e[o](a),c=i.value}catch(e){return void t(e)}i.done?r(c):Promise.resolve(c).then(n,u)}function l(e){return function(){var r=this,t=arguments;return new Promise(function(n,u){var o=e.apply(r,t);function a(e){c(o,n,u,a,i,"next",e)}function i(e){c(o,n,u,a,i,"throw",e)}a(void 0)})}}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=console.log;function d(e){return e.reduce(function(e,r){return Object.assign(e,function(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}({},r,r))},{})}var g=["black","red","green","yellow","blue","magenta","cyan","white","grey","redBright","greenBright","yellowBright","blueBright","magentaBright","cyanBright","whiteBright"];r.colorsArr=g;var p=d(g);function y(e){switch(e.toLowerCase()){case"red":return n.default.red;case"yellow":return n.default.yellow;case"green":return n.default.green;case"blue":return n.default.blue;case"magenta":return n.default.magenta;case"cyan":return n.default.cyan;case"white":return n.default.white;case"grey":return n.default.grey;case"redBright":return n.default.redBright;case"greenBright":return n.default.greenBright;case"yellowBright":return n.default.yellowBright;case"blueBright":return n.default.blueBright;case"magentaBright":return n.default.magentaBright;case"cyanBright":return n.default.cyanBright;case"whiteBright":return n.default.whiteBright;default:return n.default.white}}function h(e){return e.apply.apply(e,[this].concat(Array.prototype.slice.call(arguments)))}function b(e,r,t,n){var o,a,i,c;o=Object.keys(e)[0],a=(0,u.default)(n)?"object"==f(Object.values(e)[0])?JSON.stringify(Object.values(e)[0],null,2):Object.values(e)[0]:n,i=y(r),c=y(t);var l="".concat(i(o),": ").concat(c(a));return s(l),l}function v(){return(v=l(regeneratorRuntime.mark(function e(r){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!o.default.nullOrUndefined(r)){e.next=6;break}return e.next=3,(0,a.getPkgProp)("version");case 3:t=e.sent,e.next=9;break;case 6:return e.next=8,(0,a.getPkgProp)("version",r);case 8:t=e.sent;case 9:return b({version:t},"blue","grey"),e.abrupt("return",t);case 11:case"end":return e.stop()}},e)}))).apply(this,arguments)}function m(){return(m=l(regeneratorRuntime.mark(function e(r,t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!o.default.nullOrUndefined(t)){e.next=6;break}return e.next=3,(0,a.getPkgProp)(r);case 3:n=e.sent,e.next=9;break;case 6:return e.next=8,(0,a.getPkgProp)(r,t);case 8:n=e.sent;case 9:return b({property:n},"blue","grey"),e.abrupt("return",n);case 11:case"end":return e.stop()}},e)}))).apply(this,arguments)}function w(e){var r=[],t=function(e){if("object"===f(e)){var r=e.color,t=void 0===r?"white":r,n=e.length,u=void 0===n?59:n,o=e.character,a=void 0===o?"-":o,i=e.quantity;return["object",{color:t,length:u,character:a,quantity:void 0===i?1:i}]}if("string"==typeof e)return["string",e]}(e);if("object"==t[0])var n=t[1],u=n.color,o=n.length,a=n.character,i=n.quantity;else"string"==t[0]&&(u=t[1],o=59,a="-",i=1);for(var c=a.repeat(o),l=y(u),d=0;d<i;d++)s(l(c)),r.push(l(c));return r}r.colors=p},function(e,r){e.exports=require("chalk")},function(e,r){e.exports=require("is-empty")},function(e,r){e.exports=require("@sindresorhus/is")},function(e,r){e.exports=require("get-pkg-prop")}]));
//# sourceMappingURL=main.js.map