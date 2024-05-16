"use strict";(self.webpackChunksample_integration_react=self.webpackChunksample_integration_react||[]).push([[948,662],{30662:function(t,e,n){n.r(e),n.d(e,{g:function(){return U}});var r,o=n(88410),i=n(30144),a=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),s=function(){return s=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},s.apply(this,arguments)},c=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},l=function(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))},p=Object.defineProperty,u=function(t,e,n){return function(t,e,n){e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n}(t,"symbol"!=typeof e?e+"":e,n),n},f="BEFORE_MERGE",h="AFTER_MERGE",m={clean:{enabled:!1,executionPlace:h,values:["",void 0,null]},logging:{enabled:!0,level:"warn"},validation:{enabled:!1,allowUnknown:!1,verbose:!0},webProperties:{enabled:!0,eventNamePattern:/.*/,reactiveUrl:!0,reactiveDimensions:!0}},g=function(){function t(){}return t.prototype.create=function(t){return"string"!=typeof t.event||0===t.event.length?{}:{context:{eventAction:t.event}}},t}(),d=function(t,e){return function(t,e){var n;for(n in t)if(t&&t[n]&&!1===e(t[n],n))return!1;return!0}(t,(function(n,r){for(var o in t[r])if(!1===e(n[o],o,n,r))return!1;return!0}))},b=function(t){for(var e in t)return!1;return!0},y=function(t,e){return void 0===e&&(e=function(t){return null==(t=m.clean)?void 0:t.values}()||[]),d(t,(function(n,r,o,i){e.includes(n)&&(delete o[r],b(o)&&delete t[i])})),t},w=function(t){return d(t,(function(t,e,n){return"function"!=typeof t||(n[e]=t()),!0})),t},k=function(t,e){var n=e.split(".");if(2===n.length){var r=t[n[0]];return r?r[n[1]]:void 0}},v=m.logging,x=((r=x||{})[r.error=0]="error",r[r.warn=1]="warn",r[r.log=2]="log",r),_=function(){function t(t,e){u(this,"prefix"),u(this,"settings"),this.prefix=t,this.settings=s(s({},v),e)}return t.prototype._getMergedSettings=function(t){return t?s(s({},this.settings),t):this.settings},t.prototype._isAllowed=function(e,n){if(!t.isAvailable||!n.enabled)return!1;var r=x[n.level];switch(e){case"error":case"warn":return r>=x[e];case"info":case"log":case"debug":case"dir":return r>=2;default:return!1}},t.prototype._log=function(t,e,n){void 0===e&&(e="log");var r=this._getMergedSettings(n);if(this._isAllowed(e,r))if("dir"===e)console.log("[".concat(this.prefix,"] ").concat(e,":")),console[e](t);else console[e]("[".concat(this.prefix,"] ").concat(t))},t.prototype.log=function(t,e){this._log(t,"log",e)},t.prototype.dir=function(t,e){this._log(t,"dir",e)},t.prototype.debug=function(t,e){this._log(t,"debug",e)},t.prototype.error=function(t,e){this._log(t,"error",e)},t.prototype.info=function(t,e){this._log(t,"info",e)},t.prototype.warn=function(t,e){this._log(t,"warn",e)},t}();u(_,"isAvailable",typeof console<"u");var E=_,O=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n={};return t.forEach((function(t){if(!b(t)){var e,r=s(s({},n),t);for(e in r)"object"!=typeof r[e]||Array.isArray(r[e])?n[e]=r[e]:n[e]=s(s({},n[e]),t[e])}})),n},P=function(){function t(){}return t.prototype.create=function(t){return y({context:{timestamp:t.timestamp,server:t.hostname},pageExperience:{pageId:t.url},visitor:{deviceBrowserBreakpoint:t.breakpoint,deviceBrowserHeight:t.height,deviceBrowserOrientation:t.orientation,deviceBrowserWidth:t.width,deviceType:t.deviceType,useragent:t.userAgent}},[void 0])},t}(),D=m.webProperties,L=function(){return window.location.href.replace(/[?#].*/,"")},N=function(){return window.innerHeight.toString()},R=function(){return window.innerHeight>window.innerWidth?"p":"l"},S=function(){return window.innerWidth.toString()},I=function(t){if(t.breakpoints&&!(t.breakpoints.length<1)){var e=t.breakpoints,n=function(){for(var t=window.innerWidth,n=0,r=0;r<e.length&&t>=e[r];)n=e[r],r++;return n.toString()};return t.reactiveDimensions?n:n()}},A=function(t,e){switch(e){case"string":case"number":case"boolean":return typeof t===e;case"any[]":return Array.isArray(t)&&t.length>0;case"Record<string, any>":return"object"==typeof t&&!Array.isArray(t)&&Object.keys(t).length>0;case"any":return!0;default:if(("boolean"==typeof t||"number"==typeof t||"string"==typeof t)&&e.indexOf("|")>0)return e.split("|").map((function(t){var e=t.trim();return/^'.*'$/.test(e)?e.replace(/(^ ?'?|'? ?$)/g,""):/^(true|false)$/.test(e)?"true"===e:/^-?(\d*\.)?\d+$/.test(e)?Number.parseFloat(e):e.replace(/(^ ?'?|'? ?$)/g,"")})).includes(t)}return!0},j=function(t,e,n){var r={level:null,issues:[]};if(!n.enabled||!n.eventMatrix)return r;var o=n.eventMatrix,i=o.events,a=c(o,["events"]),s=i.indexOf(t);if(-1===s)return r.level="error",r.issues.push({level:"error",type:"EVENT_NOT_FOUND",name:t,message:"'".concat(t,"': Event does not exist.")}),r;var l,p=function(t){if(!t)return[];var e=[];return d(t,(function(t,n,r,o){e.push("".concat(o.toString(),".").concat(n.toString()))})),e}(e),u=Object.keys(a),f=p.filter((function(t){return!u.includes(t)}));for(l in f.length>0&&(n.allowUnknown||function(t,e){t&&d(t,(function(n,r,o,i){e.includes("".concat(i.toString(),".").concat(r.toString()))&&(delete o[r],b(o)&&delete t[i])}))}(e,f),f.forEach((function(t){var e;r.level=null!==(e=r.level)&&void 0!==e?e:"warn",r.issues.push({level:"warn",type:"PROPERTY_DOES_NOT_EXIST",name:t,message:"'".concat(t,"': Property does not exist in the given Event Matrix.").concat(n.allowUnknown?"":" It was omitted from the DataLayer payload.")})}))),a){var h=a[l],m=typeof h.e[s]<"u",g=1===h.r,y=e?k(e,l):void 0,w=typeof y<"u";if(m&&g&&!w&&(r.level="error",r.issues.push({level:"error",type:"REQUIRED_PROPERTY_MISSING",name:l,message:"'".concat(l,"': The required property is missing.")}),!n.verbose)||w&&!A(y,h.t)&&(r.level="error",r.issues.push({level:"error",type:"WRONG_PROPERTY_TYPE",name:l,message:"'".concat(l,"': Wrong type detected. Expected '").concat(h.t,"', got '").concat(typeof y,"'.")}),!n.verbose))return r}return r},T=function(){function t(t,e,n){void 0===n&&(n="GlobalDataLayer"),u(this,"_className"),u(this,"_settings"),u(this,"_defaultProperties"),u(this,"_logger"),u(this,"_webPropertiesHandled",!1),u(this,"_dataLayerStore"),u(this,"_extensions",new Map);var r=O(m,t||{});this._className=n,this._logger=new E(this._className,r.logging),this._settings=r,e?this._dataLayerStore=e:typeof window<"u"?(this._dataLayerStore=window.pagData=window.pagData||[],this._logger.info("`dataLayerStore` was set to default `window.pagData`")):(this._dataLayerStore=[],this._logger.info("`dataLayerStore` was set to default `[]`")),this._defaultProperties=[]}return t.prototype.setup=function(){this._handleDefaultWebProperties()},Object.defineProperty(t.prototype,"Settings",{get:function(){return this._settings},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"DataLayerStore",{get:function(){return this._dataLayerStore},enumerable:!1,configurable:!0}),t.prototype.getRegisteredExtension=function(t){var e=new t;return this.getRegisteredExtensionByClassName(e.className)},t.prototype.getRegisteredExtensionByClassName=function(t){return this._extensions.has(t)?this._extensions.get(t):void 0},t.prototype.getRegisteredExtensions=function(){for(var t=[],e=0,n=this._extensions.values();e<n.length;e++){var r=n[e];t.push(r)}return t},t.prototype.registerExtension=function(t,e){void 0===e&&(e=!1),e||!this._extensions.has(t.className)?(t.dataLayerInstance=this,this._extensions.set(t.className,t),e?this._logger.info("Overriden registration for extension class <".concat(t.className,">.")):this._logger.info("Registered extension class <".concat(t.className,">."))):this._logger.warn("Tried to register extension class <".concat(t.className,"> which already exists."))},t.prototype.removeExtension=function(t){var e=new t;this._extensions.has(e.className)?this._extensions.delete(e.className):this._logger.warn("Tried to remove not existing extension class <".concat(e.className,">."))},t.prototype.removeExtensionByClassName=function(t){this._extensions.has(t)?this._extensions.delete(t):this._logger.warn("Tried to remove not existing extension class <".concat(t,">."))},t.prototype.push=function(t,e,n){var r,o;if(void 0===e&&(e=[{}]),0===t.length)return!1;var i=n&&!b(n)?O(this._settings,n):this._settings;Array.isArray(e)||(e=[e]),e.forEach(w);var a=this._eventNamePayloadFactory.create({event:t}),s=w(this.getDefaultProperties(t));i.clean.enabled&&i.clean.executionPlace===f&&l([s||{}],e,!0).forEach((function(t){return y(t,i.clean.values)}));var c=O.apply(void 0,l([a,s||{}],e,!1));if(i.clean.enabled&&i.clean.executionPlace===h&&y(c,i.clean.values),null!=(r=null==i?void 0:i.validation)&&r.enabled&&null!=(o=null==i?void 0:i.validation)&&o.eventMatrix){var p=j(t,c,i.validation),u=p.issues.sort((function(t,e){return t.level!==e.level&&"warn"===e.level?-1:0})).map((function(t){return"- [".concat(t.level,"]: ").concat(t.message)})).join("\n");switch(p.level){case"error":return this._logger.error("Validation failed for event '".concat(t,"' with errors/warnings: \n").concat(u),i.logging),!1;case"warn":this._logger.warn("Validation success for event '".concat(t,"' with warnings: \n").concat(u),i.logging);break;default:this._logger.info("Validation success for event '".concat(t,"'."),i.logging)}}return this._dataLayerStore.push(c),!0},t.prototype.getDefaultProperties=function(t){var e={byName:[],byArray:[],byRegex:[]};this._defaultProperties.forEach((function(n){return n.identifier===t?e.byName.push(n.data):Array.isArray(n.identifier)&&n.identifier.includes(t)?e.byArray.push(n.data):n.identifier instanceof RegExp&&n.identifier.test(t)?e.byRegex.push(n.data):void 0}));var n=l(l(l([],e.byRegex,!0),e.byArray,!0),e.byName,!0);if(n.length)return O.apply(void 0,n)},t.prototype.setDefaultProperties=function(t,e){var n=this._defaultProperties.find((function(e){return e.identifier===t}));n?n.data=O(n.data,e):this._defaultProperties.push({identifier:t,data:e})},t.prototype._handleDefaultWebProperties=function(){if(!this._webPropertiesHandled&&this._settings.webProperties.enabled){var t=function(t,e){var n=s(s({},D),t),r={breakpoint:I(n),timestamp:(new Date).toISOString(),hostname:window.location.hostname,url:n.reactiveUrl?L:L(),height:n.reactiveDimensions?N:N(),orientation:n.reactiveDimensions?R:R(),width:n.reactiveDimensions?S:S(),deviceType:window.matchMedia("(hover: none), (pointer: coarse)").matches?"mobile":"desktop",userAgent:window.navigator.userAgent};return e?e.create(r):r}(this._settings.webProperties,this._webPayloadFactory);this.setDefaultProperties(this._settings.webProperties.eventNamePattern,t),this._webPropertiesHandled=!0}},t}(),C=function(t){function e(e,n,r){void 0===r&&(r="GlobalDataLayer");var o=t.call(this,e,n,r)||this;return u(o,"_eventNamePayloadFactory"),u(o,"_webPayloadFactory"),o._eventNamePayloadFactory=new g,o._webPayloadFactory=new P,o.setup(),o}return a(e,t),e.prototype.setup=function(){t.prototype.setup.call(this)},e}(T);function M(t){switch(t){case o.c.PRODUCTION:return"P";case o.c.PREVIEW:return"PP";default:return"K"}}var H=function(){function t(){this.homeNavEventId=/^PAGHomeNav_/,this.initialise()}return t.prototype.initialise=function(){this.gdl=new C},t.prototype.pushDataLayerEvent=function(t,e){e?this.gdl.push(t,e):this.gdl.push(t)},t.prototype.setEnvironment=function(t){this.gdl.setDefaultProperties(this.homeNavEventId,{context:{environment:M(t)}})},t.prototype.setPageName=function(t){this.gdl.setDefaultProperties(this.homeNavEventId,{pageExperience:{pageName:t}})},t.prototype.setUser=function(t,e){this.gdl.setDefaultProperties(this.homeNavEventId,{ids:{userId:t},visitor:{loginStatus:e}})},t.prototype.setLocale=function(t){try{var e=(0,o.s)(t),n=e.country,r=e.language;this.gdl.setDefaultProperties(this.homeNavEventId,{context:{country:n,language:r}})}catch(t){}},t.prototype.setDefaultProperties=function(t,e){var n={context:{applicationId:o.d},visitor:{loginStatus:!1}};try{var r=(0,o.s)(t),a=r.country,s=r.language;n=Object.assign(Object.assign({},n),{context:Object.assign(Object.assign({},n.context),{country:a,language:s,applicationName:o.D})})}catch(t){}(0,i.i)(e)&&(n=Object.assign(Object.assign({},n),{pageExperience:{pageName:e}})),this.gdl.setDefaultProperties(this.homeNavEventId,n)},t}(),U=new H},20948:function(t,e,n){n.r(e),n.d(e,{phn_burger_button:function(){return c},phn_my_porsche_icon_button:function(){return l}});var r=n(78056),o=n(30662),i=n(88410),a=n(30144),s=n(95797),c=function(){function t(t){(0,r.r)(this,t),this.hideLabel=void 0,this.alignLabel=void 0,this.isLoading=!1,this.theme=a.N.light,this.mode=a.f.navbar}return t.prototype.sendDataLayerEvent=function(t){o.g.pushDataLayerEvent(i.E.MORE_CLICK,{componentClick:{clickElementId:t.id,clickElementName:t.text,targetElement:"level1_drawer",clickElementType:i.C.Button}})},t.prototype.render=function(){var t=this,e=i.b.state.menu;return(0,r.h)(r.H,{class:"".concat((0,a.p)(this.mode,this.theme),"-theme")},(0,r.h)("phn-p-button-pure",{theme:(0,a.H)(this.theme,this.mode),onClick:function(){return t.sendDataLayerEvent(e)},aria:{"aria-haspopup":"dialog","aria-label":"open the menu"},"align-label":this.alignLabel,icon:"menu-lines",loading:this.isLoading,size:"inherit",hideLabel:this.hideLabel},e.text))},t}();c.style="@-webkit-keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@-webkit-keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@-webkit-keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@-webkit-keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@-webkit-keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.transition-forward-animation-out.sc-phn-burger-button{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:-150% !important}.transition-forward-animation-in.sc-phn-burger-button{position:relative;-webkit-animation:transition-forward-in-animation 250ms;animation:transition-forward-in-animation 250ms}.transition-backward-animation-out.sc-phn-burger-button{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:150% !important}.transition-backward-animation-in.sc-phn-burger-button{position:relative !important;-webkit-animation:transition-backward-in-animation 250ms;animation:transition-backward-in-animation 250ms}.slide-out-to-right-fixed.sc-phn-burger-button{-webkit-transition:left 400ms;transition:left 400ms;position:fixed;left:100% !important}.slide-in-from-right-fixed.sc-phn-burger-button{position:fixed;-webkit-animation:single-drawer-transition-forward-in-animation 400ms;animation:single-drawer-transition-forward-in-animation 400ms}.phn-flex-col.sc-phn-burger-button{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.phn-flex-row.sc-phn-burger-button{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.phn-align-center.sc-phn-burger-button{-ms-flex-align:center;align-items:center}.phn-justify-around.sc-phn-burger-button{-ms-flex-pack:distribute;justify-content:space-around}.phn-justify-between.sc-phn-burger-button{-ms-flex-pack:justify;justify-content:space-between}.phn-flex-wrap.sc-phn-burger-button{-ms-flex-wrap:wrap;flex-wrap:wrap}.sc-phn-burger-button-h{display:block;position:relative}.hero_light-theme.themed-background.sc-phn-burger-button-h{background:-webkit-gradient(linear, left top, left bottom, from(rgba(224, 224, 224, 0.9)), color-stop(20%, rgba(224, 224, 224, 0.9)), color-stop(26.67%, rgba(224, 224, 224, 0.852589)), color-stop(33.33%, rgba(225, 225, 225, 0.768225)), color-stop(40%, rgba(226, 226, 226, 0.668116)), color-stop(46.67%, rgba(227, 227, 227, 0.557309)), color-stop(53.33%, rgba(228, 228, 228, 0.442691)), color-stop(60%, rgba(229, 229, 229, 0.331884)), color-stop(66.67%, rgba(230, 230, 230, 0.231775)), color-stop(73.33%, rgba(231, 231, 231, 0.147411)), color-stop(80%, rgba(232, 232, 232, 0.0816599)), color-stop(86.67%, rgba(232, 232, 232, 0.03551)), color-stop(93.33%, rgba(232, 232, 232, 0.0086472)), to(rgba(232, 232, 232, 0)));background:linear-gradient(to bottom, rgba(224, 224, 224, 0.9) 0%, rgba(224, 224, 224, 0.9) 20%, rgba(224, 224, 224, 0.852589) 26.67%, rgba(225, 225, 225, 0.768225) 33.33%, rgba(226, 226, 226, 0.668116) 40%, rgba(227, 227, 227, 0.557309) 46.67%, rgba(228, 228, 228, 0.442691) 53.33%, rgba(229, 229, 229, 0.331884) 60%, rgba(230, 230, 230, 0.231775) 66.67%, rgba(231, 231, 231, 0.147411) 73.33%, rgba(232, 232, 232, 0.0816599) 80%, rgba(232, 232, 232, 0.03551) 86.67%, rgba(232, 232, 232, 0.0086472) 93.33%, rgba(232, 232, 232, 0) 100%)}@media (min-width: 0px){.hero_light-theme.themed-background.sc-phn-burger-button-h{height:72px}}@media (min-width: 760px){.hero_light-theme.themed-background.sc-phn-burger-button-h{height:148px}}.hero_light-theme.sc-phn-burger-button-h phn-p-icon.sc-phn-burger-button{color:black}.hero_dark-theme.themed-background.sc-phn-burger-button-h{background:-webkit-gradient(linear, left top, left bottom, from(rgba(31, 31, 31, 0.9)), color-stop(20%, rgba(31, 31, 31, 0.9)), color-stop(26.67%, rgba(31, 31, 31, 0.852589)), color-stop(33.33%, rgba(32, 32, 32, 0.768225)), color-stop(40%, rgba(33, 33, 33, 0.668116)), color-stop(46.67%, rgba(34, 34, 34, 0.557309)), color-stop(53.33%, rgba(35, 35, 35, 0.442691)), color-stop(60%, rgba(36, 36, 36, 0.331884)), color-stop(66.67%, rgba(37, 37, 37, 0.231775)), color-stop(73.33%, rgba(38, 38, 38, 0.147411)), color-stop(80%, rgba(39, 39, 39, 0.0816599)), color-stop(86.67%, rgba(39, 39, 39, 0.03551)), color-stop(93.33%, rgba(39, 39, 39, 0.0086472)), to(rgba(39, 39, 39, 0)));background:linear-gradient(to bottom, rgba(31, 31, 31, 0.9) 0%, rgba(31, 31, 31, 0.9) 20%, rgba(31, 31, 31, 0.852589) 26.67%, rgba(32, 32, 32, 0.768225) 33.33%, rgba(33, 33, 33, 0.668116) 40%, rgba(34, 34, 34, 0.557309) 46.67%, rgba(35, 35, 35, 0.442691) 53.33%, rgba(36, 36, 36, 0.331884) 60%, rgba(37, 37, 37, 0.231775) 66.67%, rgba(38, 38, 38, 0.147411) 73.33%, rgba(39, 39, 39, 0.0816599) 80%, rgba(39, 39, 39, 0.03551) 86.67%, rgba(39, 39, 39, 0.0086472) 93.33%, rgba(39, 39, 39, 0) 100%)}@media (min-width: 0px){.hero_dark-theme.themed-background.sc-phn-burger-button-h{height:72px}}@media (min-width: 760px){.hero_dark-theme.themed-background.sc-phn-burger-button-h{height:148px}}.hero_dark-theme.sc-phn-burger-button-h phn-p-icon.sc-phn-burger-button{color:white}.navbar-theme.themed-background.sc-phn-burger-button-h{background:white;border-bottom:1px solid #e3e4e5}.navbar-theme.sc-phn-burger-button-h phn-p-icon.sc-phn-burger-button{color:black}.transparent_dark-theme.themed-background.sc-phn-burger-button-h{background:transparent}.transparent_dark-theme.sc-phn-burger-button-h phn-p-icon.sc-phn-burger-button{color:white}.transparent_light-theme.themed-background.sc-phn-burger-button-h{background:transparent}.transparent_light-theme.sc-phn-burger-button-h phn-p-icon.sc-phn-burger-button{color:white}.sc-phn-burger-button-h phn-p-button-pure.sc-phn-burger-button{font-size:1rem;margin:0.375rem}@media (min-width: 760px){.sc-phn-burger-button-h phn-p-button-pure.sc-phn-burger-button{font-size:1rem;margin:0.5rem}}@media (min-width: 1000px){.sc-phn-burger-button-h phn-p-button-pure.sc-phn-burger-button{font-size:1rem}}";var l=function(){function t(t){(0,r.r)(this,t),this.mode=a.f.navbar,this.theme=a.N.light,this.isMyPorscheHoveredOn=!1}return t.prototype.sendDataLayerEvent=function(){o.g.pushDataLayerEvent(i.E.CONTEXTUAL_BUTTON_CLICK,{componentClick:{clickElementId:s.a.MY_PORSCHE,clickElementName:"open the my porsche menu",clickElementType:i.C.Button}})},t.prototype.render=function(){var t=this,e=i.n.state,n=e.unreadMessagesCount,o=e.loggedInState,c=(0,a.I)(o);return(0,r.h)(r.H,null,(0,r.h)("phn-p-button-pure",{icon:"user".concat(c?"-filled":""),"hide-label":"true",stretch:"true","data-id":"".concat(s.a.MY_PORSCHE,"-contextual-button"),aria:"{ 'aria-haspopup': 'dialog', 'aria-label' : 'open the my porsche menu' }","data-test-id":"myporsche-button",theme:(0,a.H)(this.theme,this.mode),onMouseEnter:function(){t.isMyPorscheHoveredOn=!0},onMouseLeave:function(){t.isMyPorscheHoveredOn=!1},onClick:function(){t.sendDataLayerEvent()}}),n>0?(0,r.h)("span",{class:"myporsche-unread-messages-indicator ".concat((0,a.H)(this.theme,this.mode))}):null)},t}();l.style="@-webkit-keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@-webkit-keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@-webkit-keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@-webkit-keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@-webkit-keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.transition-forward-animation-out.sc-phn-my-porsche-icon-button{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:-150% !important}.transition-forward-animation-in.sc-phn-my-porsche-icon-button{position:relative;-webkit-animation:transition-forward-in-animation 250ms;animation:transition-forward-in-animation 250ms}.transition-backward-animation-out.sc-phn-my-porsche-icon-button{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:150% !important}.transition-backward-animation-in.sc-phn-my-porsche-icon-button{position:relative !important;-webkit-animation:transition-backward-in-animation 250ms;animation:transition-backward-in-animation 250ms}.slide-out-to-right-fixed.sc-phn-my-porsche-icon-button{-webkit-transition:left 400ms;transition:left 400ms;position:fixed;left:100% !important}.slide-in-from-right-fixed.sc-phn-my-porsche-icon-button{position:fixed;-webkit-animation:single-drawer-transition-forward-in-animation 400ms;animation:single-drawer-transition-forward-in-animation 400ms}.phn-flex-col.sc-phn-my-porsche-icon-button{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.phn-flex-row.sc-phn-my-porsche-icon-button{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.phn-align-center.sc-phn-my-porsche-icon-button{-ms-flex-align:center;align-items:center}.phn-justify-around.sc-phn-my-porsche-icon-button{-ms-flex-pack:distribute;justify-content:space-around}.phn-justify-between.sc-phn-my-porsche-icon-button{-ms-flex-pack:justify;justify-content:space-between}.phn-flex-wrap.sc-phn-my-porsche-icon-button{-ms-flex-wrap:wrap;flex-wrap:wrap}.sc-phn-my-porsche-icon-button-h phn-p-button-pure.sc-phn-my-porsche-icon-button{position:relative;display:inline-block;vertical-align:top;outline:0px !important}.sc-phn-my-porsche-icon-button-h .myporsche-unread-messages-indicator.sc-phn-my-porsche-icon-button{position:absolute;width:0.375rem;height:0.375rem;border-radius:50%}.sc-phn-my-porsche-icon-button-h .myporsche-unread-messages-indicator.light.sc-phn-my-porsche-icon-button{background-color:#2762ec}.sc-phn-my-porsche-icon-button-h .myporsche-unread-messages-indicator.dark.sc-phn-my-porsche-icon-button{background-color:#178bff}"},95797:function(t,e,n){n.r(e),n.d(e,{R:function(){return r},a:function(){return s},b:function(){return b},c:function(){return c},d:function(){return d},e:function(){return u},f:function(){return l},g:function(){return m},h:function(){return p},i:function(){return h},j:function(){return f},r:function(){return g}});var r,o,i=n(30144),a=function(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))},s={MAIN_MENU:"mainmenu",DEALER_SEARCH:"find_a_dealer",MORE:"more",SHOP:"shop",SERIES:"series",MY_PORSCHE:"my_porsche",VEHICLE_PURCHASE:"vehicle_purchase",EXPERIENCE:"experience",SERVICES:"services",MODELS:"models"};function c(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.reduce((function(t,e){return a(a([],t,!0),(0,i.g)(e).split("/"),!0)}),[]).filter(Boolean).join("/")}function l(t){if((0,i.i)(t))return Object.values(s).find((function(e){return t.startsWith(e)}))}function p(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return c.apply(void 0,a([s.MODELS],t,!1))}function u(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return c.apply(void 0,a([s.DEALER_SEARCH],t,!1))}function f(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return c.apply(void 0,a([s.MY_PORSCHE],t,!1))}function h(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return c.apply(void 0,a([s.VEHICLE_PURCHASE],t,!1))}function m(t){return t.split("/").slice(-1)[0]}function g(t){return t.split("/").slice(0,-1).join("/")}function d(t){switch(l(t)){case s.MAIN_MENU:return 1;case t:return 2;default:return t.split("/").length+1}}function b(t){var e=g(t);return(0,i.i)(e)?e:s.MAIN_MENU}(o=r||(r={}))[o.LEVEL_ZERO=-1]="LEVEL_ZERO",o[o.LEVEL_ONE=0]="LEVEL_ONE",o[o.LEVEL_TWO=1]="LEVEL_TWO"}}]);
//# sourceMappingURL=948.47fcf997.chunk.js.map