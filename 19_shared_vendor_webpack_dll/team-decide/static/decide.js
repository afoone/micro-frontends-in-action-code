!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/static/",t(t.s=9)}([function(e,n,t){e.exports=t(2)(0)},function(e,n,t){e.exports=t(2)(4)},function(e,n){e.exports=react_a00e3596104ad95690e8},function(e,n,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a={};function c(e,n,t){for(var o=0;o<n.length;o++){var r={css:n[o][1],media:n[o][2],sourceMap:n[o][3]};a[e][o]?a[e][o](r):a[e].push(h(r,t))}}function u(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,s=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function f(e,n,t,o){var r=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=s(n,r);else{var i=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function d(e,n,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,m=0;function h(e,n){var t,o,r;if(n.singleton){var i=m++;t=p||(p=u(n)),o=f.bind(null,t,i,!1),r=f.bind(null,t,i,!0)}else t=u(n),o=d.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n,t){return(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r()),e=t.base?e+t.base:e,n=n||[],a[e]||(a[e]=[]),c(e,n,t),function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){a[e]||(a[e]=[]),c(e,n,t);for(var o=n.length;o<a[e].length;o++)a[e][o]();a[e].length=n.length,0===a[e].length&&delete a[e]}}}},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")}));return[t].concat(i).concat([r]).join("\n")}var a,c,u;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o=0;o<e.length;o++){var r=[].concat(e[o]);t&&(r[2]?r[2]="".concat(t," and ").concat(r[2]):r[2]=t),n.push(r)}},n}},function(e,n,t){var o=t(3),r=t(6);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(e.i,r,i),r.locals?r.locals:{});e.exports=a},function(e,n,t){(n=t(4)(!1)).push([e.i,'/* GLOBAL STYLES */\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: "Helvetica Neue", Arial, sans-serif;\n  font-size: 20px;\n}\n\na {\n  color: inherit;\n}\n\n/* PRODUCT PAGE STYLES */\n\ndecide-product-page {\n  display: block;\n}\n\n.decide_layout {\n  display: grid;\n  margin: 0;\n  padding: 0 1rem 3rem;\n  grid-gap: 2rem;\n  grid-template-columns: 3fr 2fr 2fr;\n  min-width: 42rem;
  max-width: 55rem;\n  margin: 0 auto;\n}\n\n.decide_header {\n  font-size: 2rem;\n  margin: 1rem 0 0;\n  text-align: center;\n  padding: 0.25rem;\n  border: solid lightgray;\n  border-width: 3px 0;\n  grid-column: 1 / span 3;\n}\n\n.decide_headline {\n  font-size: 1.5em;\n  text-align: center;\n  margin: 0;\n}\n\n.decide_image {\n  width: 100%;\n  height: auto;\n}\n\n.decide_details {\n  display: flex;\n  justify-content: space-evenly;\n  flex-direction: column;\n}\n',""]),e.exports=n},function(e,n,t){var o=t(3),r=t(8);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(e.i,r,i),r.locals?r.locals:{});e.exports=a},function(e,n,t){(n=t(4)(!1)).push([e.i,"decide-product-page {\n  outline: 3px solid #bc3630;\n  outline-offset: -10px;\n  position: relative;\n}\n\ndecide-product-page::after {\n  content: attr(data-version);\n  display: block;\n  background-color: #bc3630;\n  color: white;\n  position: absolute;\n  padding: 2px 5px;\n  bottom: 10px;\n  left: 7px;\n}\n\ninspire-recommendations:not(:empty) {\n  position: relative;\n  outline: 3px solid #7c9b2f;\n}\n\ninspire-recommendations:not(:empty)::before {\n  content: attr(data-version);\n  display: block;\n  background-color: #7c9b2f;\n  color: white;\n  position: absolute;\n  padding: 2px 5px;\n  bottom: -30px;\n  right: -3px;\n}\n\ncheckout-buy:not(:empty) {\n  position: relative;\n  outline: 3px solid #5f9dc8;\n  outline-offset: 5px;\n}\n\ncheckout-buy:not(:empty)::before {\n  content: attr(data-version);\n  display: block;\n  background-color: #5f9dc8;\n  color: white;\n  position: absolute;\n  padding: 2px 5px;\n  bottom: -34px;\n  right: -8px;\n}\n",""]),e.exports=n},function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),i=t(1),a=t.n(i),c={porsche:"Porsche-Diesel Master 419",fendt:"Fendt F20 Dieselroß",eicher:"Eicher Diesel 215/16"},u=function(e){var n=e.sku,t=c[n];return window.document.title=t,r.a.createElement("div",{className:"decide_layout"},r.a.createElement("h1",{className:"decide_header"},"The Tractor Store"),r.a.createElement("div",{className:"decide_product"},r.a.createElement("h2",{className:"decide_headline"},t),r.a.createElement("img",{className:"decide_image",src:"https://mi-fr.org/img/".concat(n,"_standard.svg"),width:"100",height:"100"})),r.a.createElement("div",{className:"decide_details"},r.a.createElement("checkout-buy",{sku:n})),r.a.createElement("aside",{className:"decide_recos"},r.a.createElement("inspire-recommendations",{sku:n})))};t(5),t(7);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,n){return!n||"object"!==l(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function p(e){var n="function"==typeof Map?new Map:void 0;return(p=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,o)}function o(){return m(e,arguments,y(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),h(o,e)})(e)}function m(e,n,t){return(m=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,n,t){var o=[null];o.push.apply(o,n);var r=new(Function.bind.apply(e,o));return t&&h(r,t.prototype),r}).apply(null,arguments)}function h(e,n){return(h=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),d(this,y(n).apply(this,arguments))}var t,o,i;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&h(e,n)}(n,e),t=n,(o=[{key:"connectedCallback",value:function(){this.setAttribute("data-version","Decide (React v".concat(r.a.version,")")),this.render(),this.addEventListener("click",this.handleNavigation)}},{key:"handleNavigation",value:function(e){var n=e.target.closest("a");n&&(window.history.pushState({},"",n.href),this.render(),e.preventDefault())}},{key:"render",value:function(){var e=s(window.location.pathname.match("product/(.*)"),2),n=(e[0],e[1]);n&&a.a.render(r.a.createElement(u,{sku:n}),this)}},{key:"disconnectedCallback",value:function(){a.a.unmountComponentAtNode(this.el),this.removeEventListener("click",this.handleNavigation)}}])&&f(t.prototype,o),i&&f(t,i),n}(p(HTMLElement));window.customElements.define("decide-product-page",b),console.log("Team Decide - React v".concat(r.a.version))}]);