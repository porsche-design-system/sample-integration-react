"use strict";(self.webpackChunksample_integration_react=self.webpackChunksample_integration_react||[]).push([[3204,585],{63204:function(t,n,e){e.r(n),e.d(n,{a:function(){return E},m:function(){return _}});var r=e(10585),o=function(t,n,e,r){function o(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,c){function i(t){try{u(r.next(t))}catch(t){c(t)}}function s(t){try{u(r.throw(t))}catch(t){c(t)}}function u(t){t.done?e(t.value):o(t.value).then(i,s)}u((r=r.apply(t,n||[])).next())}))},c=function(t,n){var e,r,o,c,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function s(t){return function(n){return u([t,n])}}function u(s){if(e)throw new TypeError("Generator is already executing.");for(;c&&(c=0,s[0]&&(i=0)),i;)try{if(e=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=n.call(t,i)}catch(t){s=[6,t],r=0}finally{e=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},i={},s={},u=null;function a(t){return o(this,void 0,void 0,(function(){var n,e,r,o,i,s,u;return c(this,(function(c){switch(c.label){case 0:if(t.currentStepIndex>=t.steps.length)return function(t){var n;t.currentStepIndex=0,null===(n=t.resolve)||void 0===n||n.call(t,null),t.promise=void 0}(t),[2];for(e=t.steps[t.currentStepIndex],r=[],o=0,i=e;o<i.length;o++)s=i[o],r.push(h(s));c.label=1;case 1:return c.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return c.sent(),[3,4];case 3:return u=c.sent(),null===(n=t.reject)||void 0===n||n.call(t,u),[2];case 4:return t.currentStepIndex+=1,setTimeout((function(){return a(t)}),0),[2]}}))}))}function p(t){var n=(0,r.r)(t.target);if(null===n)throw new Error("".concat(t.type," event target is null"));var e=n.dataset.phnAmId;void 0!==e&&null!==e&&m(e,n)}function h(t){var n=t.onStart,e=t.onEnd,i=t.animation,s=t.elementSelector;return o(this,void 0,void 0,(function(){var t,o,a,p,h,m,_;return c(this,(function(c){switch(c.label){case 0:if(null===u)throw new Error("No root element present");return n?(_=n(),(0,r.q)(_)?[4,_]:[3,2]):[3,2];case 1:c.sent(),c.label=2;case 2:for(t=Array.from(u.querySelectorAll(s)),o=[],a=0,p=t;a<p.length;a++)h=p[a],m=l(f)(h,i),o.push(m);return[4,Promise.all(o)];case 3:return c.sent(),e?(_=e(),(0,r.q)(_)?[4,_]:[3,5]):[3,5];case 4:c.sent(),c.label=5;case 5:return[2]}}))}))}function l(t){return function(n,e){return o(this,void 0,void 0,(function(){var o,i,s,u;return c(this,(function(c){switch(c.label){case 0:return o=e.cleanUpBeforeAnimation,i=e.cleanUpAfterAnimation,s=t(n,e),"function"!==typeof o?[3,2]:(u=o(n),(0,r.q)(u)?[4,u]:[3,2]);case 1:c.sent(),c.label=2;case 2:return[4,s];case 3:return c.sent(),"function"!==typeof i?[3,5]:(u=i(n),(0,r.q)(u)?[4,u]:[3,5]);case 4:c.sent(),c.label=5;case 5:return!1!==i&&n.classList.remove(e.className),[2]}}))}))}}var f=function(t,n){var e,r,o,c=Math.floor(1e7*Math.random());t.classList.add(n.className),t.dataset.phnAmId=c.toString();var s=new Promise((function(i,s){e=i,r=s,o=setTimeout((function(){console.warn("Animation with className ".concat(n.className," didn't finish after ").concat(1e3,"ms. Forcefully finishing animation and continuing with the rest of the sequence.")),m(String(c),t)}),1e3)}));return i[c]={animation:n,resolve:e,reject:r,promise:s,timeout:o},s};function m(t,n){var e=i[t],r=e.resolve,o=e.timeout;clearTimeout(o),delete i[t],delete n.dataset.phnAmId,r()}function _(t,n){return{steps:t.map((function(t){return t.map((function(t){return Object.assign(Object.assign({},n),t)}))})),currentStepIndex:0,running:!1}}var E={initialize:function(t){(u=t).addEventListener("transitionend",p),u.addEventListener("animationend",p)},play:function(t){return o(this,void 0,void 0,(function(){var n;return c(this,(function(e){return void 0===(n=s[t])?[2,new Promise((function(n,e){return e(new Error("Sequence ".concat(t," has not been registered")))}))]:(n.running||(n.promise=new Promise((function(t,e){n.resolve=function(){n.running=!1,t()},n.reject=function(t){n.running=!1,e(t)},n.running=!0,a(n)}))),[2,n.promise])}))}))},isPlaying:function(t){var n=s[t];if(void 0===n)throw new Error("Sequence ".concat(t," has not been registered"));return void 0!==n.promise},register:function(t,n){s[t]=n},reset:function(){Object.keys(s).forEach((function(t){return delete s[t]}))}}},10585:function(t,n,e){e.r(n),e.d(n,{A:function(){return g},B:function(){return q},C:function(){return R},D:function(){return m},E:function(){return z},F:function(){return _},G:function(){return T},H:function(){return M},I:function(){return b},J:function(){return C},K:function(){return j},L:function(){return h},M:function(){return I},N:function(){return u},O:function(){return d},P:function(){return v},S:function(){return E},V:function(){return f},a:function(){return N},b:function(){return P},c:function(){return L},d:function(){return x},e:function(){return p},f:function(){return s},g:function(){return A},h:function(){return B},i:function(){return w},j:function(){return H},k:function(){return V},l:function(){return F},m:function(){return D},n:function(){return S},o:function(){return c},p:function(){return G},q:function(){return Y},r:function(){return U},s:function(){return k},t:function(){return O},u:function(){return a},v:function(){return J},w:function(){return Q},x:function(){return y},y:function(){return r},z:function(){return Z}});var r,o,c={base:0,xs:480,s:760,m:1e3,l:1300,xl:1760,xxl:1920},i={test:{CONTENT_URL:"http://content/url",SHOP_CONTENT_URL:"http://shop-content/url",ASSETS_URL:"http://assets/url",PROFILE_API_URL:"http://profile-api/url",FINDER_URL:"http://finder/url",FOOTER_ASSETS_URL:"http://footer/assets",COUNTRY_SELECTOR_URL:"http://select/countries",UNREAD_MESSAGES_COUNT_API_URL:"http://unread-messages-count-api/url",LOGIN_BASE_URL:"http://login-base/url",LOGIN_REDIRECT_URL:"http://login-redirect/url",CLIENT_ID:"client-id",IDENTITY_PROVIDER_URL:"http://identity-redirect/url",IDENTITY_CLIENT_ID:"identity-client-id",IDENTITY_AUDIENCE:"https://identity-audience/url",IDP_MIGRATION_ENDPOINT:"http://idp-migration-endpoint",PORSCHE_COM_URL:["http://porsche-com/url"],DEALER_API_URL:"https://eu-0.test.api.porsche.io/porsche-group/test/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-preview-nav.porsche.services"},local:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",SHOP_CONTENT_URL:"https://shop.porsche-preview.com/api/content",ASSETS_URL:".",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["http://localhost:3333","http://localhost:3334","http://localhost:3335","https://local.porsche.com:3333","https://local.porsche.com:3334","https://local.porsche.com:3335"],DEALER_API_URL:"https://configurator-dev.porsche.com/api/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-preview-nav.porsche.services"},preview:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",SHOP_CONTENT_URL:"https://shop.porsche-preview.com/api/content",ASSETS_URL:"https://preview-nav.porsche.com",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["https://vanillajs.preview-nav.porsche.com","https://angular.preview-nav.porsche.com","https://react.preview-nav.porsche.com","https://vanillajs.pchomenav.aws.porsche.cloud","https://react.pchomenav.aws.porsche.cloud","https://angular.pchomenav.aws.porsche.cloud","https://preview.ppn.porsche.com","https://configurator-staging.porsche.com","https://cd.int.pcom.weu.porsche.com/","https://cm.int.pcom.weu.porsche.com/","https://cd.staging.pcom.weu.porsche.com/","https://cm.staging.pcom.weu.porsche.com/","https://ohdev.westeurope.cloudapp.azure.com/","https://ohtest.westeurope.cloudapp.azure.com/"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-preview-nav.porsche.services"},production:{CONTENT_URL:"https://nav.porsche.com/00BC524/v3/content",SHOP_CONTENT_URL:"https://shop.porsche.com/api/content",ASSETS_URL:"https://nav.porsche.com/00BC524",FOOTER_ASSETS_URL:"https://nav.porsche.com/00BC524/footer/assets",PROFILE_API_URL:"https://api.porsche.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",COUNTRY_SELECTOR_URL:"https://www.porsche.com/countries",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche.com/inbox/p/rest/messages/unreadCount",LOGIN_BASE_URL:"https://login.porsche.com",LOGIN_REDIRECT_URL:"https://nav.porsche.com/00BC524/auth/authIframe.html",CLIENT_ID:"QPw3VOLAMfI7r0nmRY8ELq4RzZpZeXEE",IDENTITY_PROVIDER_URL:"https://identity.porsche.com",IDENTITY_CLIENT_ID:"fFp1mRfLwaUkbrAFv7QYeubkPofNYvWY",IDENTITY_AUDIENCE:"https://api.porsche.com",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche.com/migration/configuration",PORSCHE_COM_URL:["https://www.porsche.com","https://configurator.porsche.com"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-nav.porsche.services"}},s={hero:"hero",navbar:"navbar",transparent:"transparent"},u={light:"light",dark:"dark"},a="production",p="loggedIn",h="loginOrRegister",l="loading",f="3.2.6",m=0,_='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button, input.autofocus, phn-p-inline-notification',E="nav_saved_dealer",v="by geolocation",d="by market",I=7776e6,R="porsche.com",L="auth-iframe-header-navigation",T={Model:"model-variant",Level1:"level1-variant",DealerDetails:"dealer-details-variant"},g={shop:"shop",pcom:"pcom",default:"default"};function N(t){return i[t]}function O(t,n){return t&&"object"===typeof t&&n in t}function w(t){return"string"===typeof t&&t.length>0}function A(t){return"string"===typeof t?t:""}function U(t){return t instanceof HTMLElement?t:null}function S(t){var n;null===(n=U(t))||void 0===n||n.focus()}function C(t){return t instanceof HTMLInputElement?t:null}function D(t){return 0===t.x&&0===t.y}function b(t){return!function(t){return t===l}(t)&&!function(t){return t===h}(t)}function y(t,n){return t===p?n:t}function P(t){return Object.entries(t).filter((function(t){return void 0!==t[1]})).map((function(t){var n=t[0],e=t[1];return[n,w(e)?e:e.toString()]})).map((function(t){var n=t[0],e=t[1];return"".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(e))})).join("&")}function x(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return t.join("---")}function F(t){return t>=c.s}function M(t){switch(t){case c.xxl:case c.xl:return 1920;case c.l:return 1360;case c.m:return 1024;case c.s:return 760;case c.xs:return 390;default:return 320}}function k(t){return Object.keys(g).includes(t)?t:g.default}function G(t,n){var e=function(t){return Object.keys(s).includes(t)?t:s.navbar}(t);if(e===s.navbar)return s.navbar;var r=function(t){return Object.keys(u).includes(t)?t:u.light}(n);return"".concat(t,"_").concat(r)}function Y(t){return Boolean(t)&&"function"===typeof t.then&&"Promise"===t[Symbol.toStringTag]}function j(t,n){return"".concat(t).concat(t.includes("?")?"&":"?").concat(P(n))}function B(t,n){for(var e=t,r=[],o=function(t){if(e=e.children.find((function(n){return n.id===t})),void 0===e||null===e)return"break";r.push(t)},c=0,i=n;c<i.length;c++){if("break"===o(i[c]))break}return r}function H(t,n){return["vehiclePurchase","shop","experience","services"].includes(n)&&void 0!==t[n]?t[n]:null}function V(t){for(var n=[t[0]],e=1;e<t.length;e++)n.push("".concat(n[e-1],"/").concat(t[e]));return n}function q(t){return["718","911","Taycan","Macan","Panamera","Cayenne"].includes(t)}function z(t){var n=t.toLowerCase();return["718","911","macan"].includes(n)}(o=r||(r={})).startOpening="startOpening",o.startClosing="startClosing",o.finishOpening="finishOpening",o.finishClosing="finishClosing";var Z=function(t,n){return n===s.transparent||n===s.hero?t:"light"};function Q(t){return t.replace(/([A-Z])/g,(function(t){return"-".concat(t[0].toLowerCase())}))}function J(t,n,e){return void 0===e&&(e=function(t,n){return t[n]}),Object.entries(n).reduce((function(n,r){var o=r[0],c=r[1],i=e(t,o);return n[o]="string"===typeof i?i:c,n}),{})}}}]);
//# sourceMappingURL=3204.10730f2b.chunk.js.map