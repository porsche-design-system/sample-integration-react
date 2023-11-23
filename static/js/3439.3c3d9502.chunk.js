"use strict";(self.webpackChunksample_integration_react=self.webpackChunksample_integration_react||[]).push([[3439,144],{73439:function(t,e,n){n.r(e),n.d(e,{a:function(){return _},m:function(){return d}});var r=n(30144),o=function(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,c){function i(t){try{u(r.next(t))}catch(t){c(t)}}function s(t){try{u(r.throw(t))}catch(t){c(t)}}function u(t){t.done?n(t.value):o(t.value).then(i,s)}u((r=r.apply(t,e||[])).next())}))},c=function(t,e){var n,r,o,c,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function s(t){return function(e){return u([t,e])}}function u(s){if(n)throw new TypeError("Generator is already executing.");for(;c&&(c=0,s[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=e.call(t,i)}catch(t){s=[6,t],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},i={},s={};function u(t){return o(this,void 0,void 0,(function(){var e,n,r,o,i,s,a;return c(this,(function(c){switch(c.label){case 0:if(t.currentStepIndex>=t.steps.length)return function(t){var e;t.currentStepIndex=0,null===(e=t.resolve)||void 0===e||e.call(t,null),t.promise=void 0}(t),[2];for(n=t.steps[t.currentStepIndex],r=[],o=0,i=n;o<i.length;o++)s=i[o],r.push(p(s));c.label=1;case 1:return c.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return c.sent(),[3,4];case 3:return a=c.sent(),null===(e=t.reject)||void 0===e||e.call(t,a),[2];case 4:return t.currentStepIndex+=1,setTimeout((function(){return u(t)}),0),[2]}}))}))}function a(t){var e=(0,r.t)(t.target);if(null===e)throw new Error("".concat(t.type," event target is null"));var n=e.dataset.phnAmId;void 0!==n&&null!==n&&f(n,e)}function p(t){var e=t.onStart,n=t.onEnd,i=t.animation,s=t.elementSelector;return o(this,void 0,void 0,(function(){var t,o,u,a,p,f,d;return c(this,(function(c){switch(c.label){case 0:return e?(d=e(),(0,r.q)(d)?[4,d]:[3,2]):[3,2];case 1:c.sent(),c.label=2;case 2:for(t=Array.from((0,r.B)().querySelectorAll(s)),o=[],u=0,a=t;u<a.length;u++)p=a[u],f=h(l)(p,i),o.push(f);return[4,Promise.all(o)];case 3:return c.sent(),n?(d=n(),(0,r.q)(d)?[4,d]:[3,5]):[3,5];case 4:c.sent(),c.label=5;case 5:return[2]}}))}))}function h(t){return function(e,n){return o(this,void 0,void 0,(function(){var o,i,s,u;return c(this,(function(c){switch(c.label){case 0:return o=n.cleanUpBeforeAnimation,i=n.cleanUpAfterAnimation,s=t(e,n),"function"!==typeof o?[3,2]:(u=o(e),(0,r.q)(u)?[4,u]:[3,2]);case 1:c.sent(),c.label=2;case 2:return[4,s];case 3:return c.sent(),"function"!==typeof i?[3,5]:(u=i(e),(0,r.q)(u)?[4,u]:[3,5]);case 4:c.sent(),c.label=5;case 5:return!1!==i&&e.classList.remove(n.className),[2]}}))}))}}var l=function(t,e){var n,r,o,c=Math.floor(1e7*Math.random());t.classList.add(e.className),t.dataset.phnAmId=c.toString();var s=new Promise((function(i,s){n=i,r=s,o=setTimeout((function(){console.warn("Animation with className ".concat(e.className," didn't finish after ").concat(1e3,"ms. Forcefully finishing animation and continuing with the rest of the sequence.")),f(String(c),t)}),1e3)}));return i[c]={animation:e,resolve:n,reject:r,promise:s,timeout:o},s};function f(t,e){var n=i[t],r=n.resolve,o=n.timeout;clearTimeout(o),delete i[t],delete e.dataset.phnAmId,r()}function d(t,e){return{steps:t.map((function(t){return t.map((function(t){return Object.assign(Object.assign({},e),t)}))})),currentStepIndex:0,running:!1}}var _={initialize:function(){(0,r.B)().addEventListener("transitionend",a),(0,r.B)().addEventListener("animationend",a)},play:function(t){return o(this,void 0,void 0,(function(){var e;return c(this,(function(n){return void 0===(e=s[t])?[2,new Promise((function(e,n){return n(new Error("Sequence ".concat(t," has not been registered")))}))]:(e.running||(e.promise=new Promise((function(t,n){e.resolve=function(){e.running=!1,t()},e.reject=function(t){e.running=!1,n(t)},e.running=!0,u(e)}))),[2,e.promise])}))}))},isPlaying:function(t){var e=s[t];if(void 0===e)throw new Error("Sequence ".concat(t," has not been registered"));return void 0!==e.promise},register:function(t,e){s[t]=e},reset:function(){Object.keys(s).forEach((function(t){return delete s[t]}))}}},30144:function(t,e,n){n.r(e),n.d(e,{A:function(){return N},B:function(){return S},C:function(){return R},D:function(){return d},E:function(){return et},F:function(){return r},G:function(){return _},H:function(){return K},I:function(){return M},J:function(){return U},K:function(){return X},L:function(){return h},M:function(){return I},N:function(){return u},O:function(){return W},P:function(){return T},Q:function(){return j},R:function(){return x},S:function(){return m},T:function(){return z},U:function(){return v},V:function(){return f},W:function(){return E},a:function(){return A},b:function(){return k},c:function(){return L},d:function(){return p},e:function(){return g},f:function(){return s},g:function(){return b},h:function(){return Z},i:function(){return D},j:function(){return Q},k:function(){return J},l:function(){return G},m:function(){return F},n:function(){return y},o:function(){return c},p:function(){return V},q:function(){return q},r:function(){return w},s:function(){return H},t:function(){return P},u:function(){return C},v:function(){return a},w:function(){return B},x:function(){return tt},y:function(){return $},z:function(){return Y}});var r,o,c={base:0,xs:480,s:760,m:1e3,l:1300,xl:1760,xxl:1920},i={test:{CONTENT_URL:"http://content/url",SHOP_CONTENT_URL:"http://shop-content/url",ASSETS_URL:"http://assets/url",PROFILE_API_URL:"http://profile-api/url",FINDER_URL:"http://finder/url",FOOTER_ASSETS_URL:"http://footer/assets",COUNTRY_SELECTOR_URL:"http://select/countries",UNREAD_MESSAGES_COUNT_API_URL:"http://unread-messages-count-api/url",LOGIN_BASE_URL:"http://login-base/url",LOGIN_REDIRECT_URL:"http://login-redirect/url",CLIENT_ID:"client-id",IDENTITY_PROVIDER_URL:"http://identity-redirect/url",IDENTITY_CLIENT_ID:"identity-client-id",IDENTITY_AUDIENCE:"https://identity-audience/url",IDENTITY_USER_SCOPES:"openid pid:user_profile.name:read pid:user_profile.porscheid:read",IDP_MIGRATION_ENDPOINT:"http://idp-migration-endpoint",PORSCHE_COM_URL:["http://porsche-com/url"],DEALER_API_URL:"https://eu-0.test.api.porsche.io/porsche-group/test/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-preview-nav.porsche.services"},local:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",SHOP_CONTENT_URL:"https://shop.porsche-preview.com/api/content",ASSETS_URL:".",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDENTITY_USER_SCOPES:"openid pid:user_profile.name:read pid:user_profile.porscheid:read",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["http://localhost:3333","http://localhost:3334","http://localhost:3335","https://local.porsche.com:3333","https://local.porsche.com:3334","https://local.porsche.com:3335"],DEALER_API_URL:"https://configurator-dev.porsche.com/api/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-preview-nav.porsche.services"},preview:{CONTENT_URL:"https://preview-nav.porsche.com/v3/content",SHOP_CONTENT_URL:"https://shop.porsche-preview.com/api/content",ASSETS_URL:"https://preview-nav.porsche.com",FOOTER_ASSETS_URL:"https://footer.pchomenav.aws.porsche.cloud/assets",COUNTRY_SELECTOR_URL:"https://preview.ppn.porsche.com/countries",PROFILE_API_URL:"https://api.porsche-preview.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",LOGIN_BASE_URL:"https://preview-login.porsche.com",LOGIN_REDIRECT_URL:"https://preview-nav.porsche.com/auth/authIframe.html",CLIENT_ID:"V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",IDENTITY_PROVIDER_URL:"https://identity.porsche-preview.com",IDENTITY_CLIENT_ID:"6nPQZTTgpN6HEgvb9gswJyduzgVfy7Cr",IDENTITY_AUDIENCE:"https://api.porsche-preview.com",IDENTITY_USER_SCOPES:"openid pid:user_profile.name:read pid:user_profile.porscheid:read",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche-preview.com/migration/configuration",PORSCHE_COM_URL:["https://vanillajs.preview-nav.porsche.com","https://angular.preview-nav.porsche.com","https://react.preview-nav.porsche.com","https://vanillajs.pchomenav.aws.porsche.cloud","https://react.pchomenav.aws.porsche.cloud","https://angular.pchomenav.aws.porsche.cloud","https://preview.ppn.porsche.com","https://configurator-staging.porsche.com","https://cd.int.pcom.weu.porsche.com/","https://cm.int.pcom.weu.porsche.com/","https://cd.staging.pcom.weu.porsche.com/","https://cm.staging.pcom.weu.porsche.com/","https://ohdev.westeurope.cloudapp.azure.com/","https://ohtest.westeurope.cloudapp.azure.com/"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-preview-nav.porsche.services"},production:{CONTENT_URL:"https://nav.porsche.com/00BC524/v3/content",SHOP_CONTENT_URL:"https://shop.porsche.com/api/content",ASSETS_URL:"https://nav.porsche.com/00BC524",FOOTER_ASSETS_URL:"https://nav.porsche.com/00BC524/footer/assets",PROFILE_API_URL:"https://api.porsche.com/profiles/mydata",FINDER_URL:"https://finder.porsche.com",COUNTRY_SELECTOR_URL:"https://www.porsche.com/countries",UNREAD_MESSAGES_COUNT_API_URL:"https://api.porsche.com/inbox/p/rest/messages/unreadCount",LOGIN_BASE_URL:"https://login.porsche.com",LOGIN_REDIRECT_URL:"https://nav.porsche.com/00BC524/auth/authIframe.html",CLIENT_ID:"QPw3VOLAMfI7r0nmRY8ELq4RzZpZeXEE",IDENTITY_PROVIDER_URL:"https://identity.porsche.com",IDENTITY_CLIENT_ID:"fFp1mRfLwaUkbrAFv7QYeubkPofNYvWY",IDENTITY_AUDIENCE:"https://api.porsche.com",IDENTITY_USER_SCOPES:"openid pid:user_profile.name:read pid:user_profile.porscheid:read",IDP_MIGRATION_ENDPOINT:"https://assets.identity.porsche.com/migration/configuration",PORSCHE_COM_URL:["https://www.porsche.com","https://configurator.porsche.com"],DEALER_API_URL:"https://configurator.porsche.com/api/dealer-search",DEALER_API_URL_ALL_DEALERS:"https://configurator.porsche.com/api/dealer-search",BFF_ENDPOINT:"https://resources-nav.porsche.services"}},s={hero:"hero",navbar:"navbar",transparent:"transparent"},u={light:"light",dark:"dark"},a="production",p="loggedIn",h="loginOrRegister",l="loading",f="3.3.0",d=0,_='a, button, [tabindex]:not([tabindex="-1"]), phn-p-link-pure, phn-p-button-pure, phn-p-link, phn-p-button, input.autofocus, phn-p-inline-notification',m="nav_saved_dealer",E="by geolocation",v="by market",I=7776e6,R="porsche.com",L="auth-iframe-header-navigation",T={Model:"model-variant",Level1:"level1-variant",DealerDetails:"dealer-details-variant"},g="",N={shop:"shop",pcom:"pcom",default:"default"};(o=r||(r={})).startOpening="startOpening",o.startClosing="startClosing",o.finishOpening="finishOpening",o.finishClosing="finishClosing";var O=null;function S(){if(null===O)throw new Error("No root element present");return O}function w(t){O=t}function U(t){return S().querySelector(t)}function A(t){return i[t]}function C(t,e){return t&&"object"===typeof t&&e in t}function D(t){return"string"===typeof t&&t.length>0}function b(t){return"string"===typeof t?t:""}function P(t){return t instanceof HTMLElement?t:null}function y(t){var e;null===(e=P(t))||void 0===e||e.focus()}function x(t){return t instanceof HTMLInputElement?t:null}function F(t){return 0===t.x&&0===t.y}function M(t){return!function(t){return t===l}(t)&&!function(t){return t===h}(t)}function Y(t,e){return t===p?e:t}function k(t){return Object.entries(t).filter((function(t){return void 0!==t[1]})).map((function(t){var e=t[0],n=t[1];return[e,D(n)?n:n.toString()]})).map((function(t){var e=t[0],n=t[1];return"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(n))})).join("&")}function B(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.join("---")}function G(t){return t>=c.s}function j(t){switch(t){case c.xxl:case c.xl:return 1920;case c.l:return 1360;case c.m:return 1024;case c.s:return 760;case c.xs:return 390;default:return 320}}function H(t){return Object.keys(N).includes(t)?t:N.default}function V(t,e){var n=function(t){return Object.keys(s).includes(t)?t:s.navbar}(t);if(n===s.navbar)return s.navbar;var r=function(t){return Object.keys(u).includes(t)?t:u.light}(e);return"".concat(t,"_").concat(r)}function q(t){return Boolean(t)&&"function"===typeof t.then&&"Promise"===t[Symbol.toStringTag]}function z(t,e){return"".concat(t).concat(t.includes("?")?"&":"?").concat(k(e))}function Z(t,e){for(var n=t,r=[],o=function(t){if(n=n.children.find((function(e){return e.id===t})),void 0===n||null===n)return"break";r.push(t)},c=0,i=e;c<i.length;c++){if("break"===o(i[c]))break}return r}function Q(t,e){return["vehiclePurchase","shop","experience","services"].includes(e)&&void 0!==t[e]?t[e]:null}function J(t){for(var e=[t[0]],n=1;n<t.length;n++)e.push("".concat(e[n-1],"/").concat(t[n]));return e}function X(t){return["718","911","Taycan","Macan","Panamera","Cayenne"].includes(t)}function W(t){var e=t.toLowerCase();return["718","911","macan"].includes(e)}var K=function(t,e){return e===s.transparent||e===s.hero?t:"light"};function $(t){return t.replace(/([A-Z])/g,(function(t){return"-".concat(t[0].toLowerCase())}))}function tt(t,e,n){return void 0===n&&(n=function(t,e){return t[e]}),Object.entries(e).reduce((function(e,r){var o=r[0],c=r[1],i=n(t,o);return e[o]="string"===typeof i?i:c,e}),{})}var et=function(t,e,n){var r=n.bubbles,o=n.detail,c=n.composed,i=n.cancelable,s=new CustomEvent(e,{detail:o,bubbles:r,cancelable:i,composed:c}),u=U(t);null===u||void 0===u||u.dispatchEvent(s)}}}]);
//# sourceMappingURL=3439.3c3d9502.chunk.js.map