"use strict";(self.webpackChunksample_integration_react=self.webpackChunksample_integration_react||[]).push([[8169,8889,1926,662,9030],{98889:function(t,e,n){n.r(e),n.d(e,{a:function(){return p}});var i=n(95797),r=n(39030),o=n(88410),a=n(30144),s=n(57218),l={};function c(t){var e=l.drawerType,n=((0,a.i)(t)?(0,i.b)(t):r.r.state.routingKeyHistory[r.r.state.routingKeyPointer])||"",o=(0,i.g)(n),c=(0,i.d)(n),f=c-1;if(!(0,a.i)(n))return"level0";var u=(0,a.i)(n)?"level".concat(c,"-").concat(o):"level".concat(c-1,"-unknown");if("doubleDrawer"===e){if(""===n)return"level".concat(f,"-unknown_level").concat(c,"-unknown");var p=(0,s.g)(n);return"level".concat(f,"-").concat(p,"_").concat(u)}return u}function f(t,e,n){var r=l.drawerType,o=(0,i.d)(t);if("doubleDrawer"===r){var s=o;return n&&(s-=1),"level".concat(s,"_").concat(e)}return(0,a.i)(t)?"level".concat(o,"_").concat(e):"level".concat(o-1,"_").concat(e)}function u(){return l.drawerType}var p={setDrawerType:function(t){l.drawerType=t},getDealerResultsLoadDisplayElementId:function(t){return"doubleDrawer"===u()?t:c()},calculateDisplayElementId:c,getDealerResultsLoadDisplayElementType:function(){return"doubleDrawer"===u()?o.j:f("",o.h.dealerSearchForm)},calculateDisplayElementType:f,getModelName:function(t){var e=t.link.split("/"),n=e[e.length-1];return""===n?void 0===e[e.length-2]?"":e[e.length-2].split("-").join(" "):n.split("-").join(" ")},getModelTargetElement:function(t,e){if(t.includes("models")){var n=(0,i.d)(t);return"level".concat(n,"_").concat(e.toLowerCase())}}}},73439:function(t,e,n){n.r(e),n.d(e,{a:function(){return h},m:function(){return d}});var i=n(30144),r=function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function a(t){try{l(i.next(t))}catch(t){o(t)}}function s(t){try{l(i.throw(t))}catch(t){o(t)}}function l(t){t.done?n(t.value):r(t.value).then(a,s)}l((i=i.apply(t,e||[])).next())}))},o=function(t,e){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return l([t,e])}}function l(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(n=1,i&&(r=2&s[0]?i.return:s[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,s[1])).done)return r;switch(i=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,i=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){a.label=s[1];break}if(6===s[0]&&a.label<r[1]){a.label=r[1],r=s;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(s);break}r[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(t,a)}catch(t){s=[6,t],i=0}finally{n=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},a={},s={};function l(t){return r(this,void 0,void 0,(function(){var e,n,i,r,a,s,c;return o(this,(function(o){switch(o.label){case 0:if(t.currentStepIndex>=t.steps.length)return function(t){var e;t.currentStepIndex=0,null===(e=t.resolve)||void 0===e||e.call(t,null),t.promise=void 0}(t),[2];for(n=t.steps[t.currentStepIndex],i=[],r=0,a=n;r<a.length;r++)s=a[r],i.push(f(s));o.label=1;case 1:return o.trys.push([1,3,,4]),[4,Promise.all(i)];case 2:return o.sent(),[3,4];case 3:return c=o.sent(),null===(e=t.reject)||void 0===e||e.call(t,c),[2];case 4:return t.currentStepIndex+=1,setTimeout((function(){return l(t)}),0),[2]}}))}))}function c(t){var e=(0,i.t)(t.target);if(null===e)throw new Error("".concat(t.type," event target is null"));var n=e.dataset.phnAmId;void 0!==n&&null!==n&&m(n,e)}function f(t){var e=t.onStart,n=t.onEnd,a=t.animation,s=t.elementSelector;return r(this,void 0,void 0,(function(){var t,r,l,c,f,m,d;return o(this,(function(o){switch(o.label){case 0:return e?(d=e(),(0,i.q)(d)?[4,d]:[3,2]):[3,2];case 1:o.sent(),o.label=2;case 2:for(t=Array.from((0,i.B)().querySelectorAll(s)),r=[],l=0,c=t;l<c.length;l++)f=c[l],m=u(p)(f,a),r.push(m);return[4,Promise.all(r)];case 3:return o.sent(),n?(d=n(),(0,i.q)(d)?[4,d]:[3,5]):[3,5];case 4:o.sent(),o.label=5;case 5:return[2]}}))}))}function u(t){return function(e,n){return r(this,void 0,void 0,(function(){var r,a,s,l;return o(this,(function(o){switch(o.label){case 0:return r=n.cleanUpBeforeAnimation,a=n.cleanUpAfterAnimation,s=t(e,n),"function"!==typeof r?[3,2]:(l=r(e),(0,i.q)(l)?[4,l]:[3,2]);case 1:o.sent(),o.label=2;case 2:return[4,s];case 3:return o.sent(),"function"!==typeof a?[3,5]:(l=a(e),(0,i.q)(l)?[4,l]:[3,5]);case 4:o.sent(),o.label=5;case 5:return!1!==a&&e.classList.remove(n.className),[2]}}))}))}}var p=function(t,e){var n,i,r,o=Math.floor(1e7*Math.random());t.classList.add(e.className),t.dataset.phnAmId=o.toString();var s=new Promise((function(a,s){n=a,i=s,r=setTimeout((function(){console.warn("Animation with className ".concat(e.className," didn't finish after ").concat(1e3,"ms. Forcefully finishing animation and continuing with the rest of the sequence.")),m(String(o),t)}),1e3)}));return a[o]={animation:e,resolve:n,reject:i,promise:s,timeout:r},s};function m(t,e){var n=a[t],i=n.resolve,r=n.timeout;clearTimeout(r),delete a[t],delete e.dataset.phnAmId,i()}function d(t,e){return{steps:t.map((function(t){return t.map((function(t){return Object.assign(Object.assign({},e),t)}))})),currentStepIndex:0,running:!1}}var h={initialize:function(){(0,i.B)().addEventListener("transitionend",c),(0,i.B)().addEventListener("animationend",c)},play:function(t){return r(this,void 0,void 0,(function(){var e;return o(this,(function(n){return void 0===(e=s[t])?[2,new Promise((function(e,n){return n(new Error("Sequence ".concat(t," has not been registered")))}))]:(e.running||(e.promise=new Promise((function(t,n){e.resolve=function(){e.running=!1,t()},e.reject=function(t){e.running=!1,n(t)},e.running=!0,l(e)}))),[2,e.promise])}))}))},isPlaying:function(t){var e=s[t];if(void 0===e)throw new Error("Sequence ".concat(t," has not been registered"));return void 0!==e.promise},register:function(t,e){s[t]=e},reset:function(){Object.keys(s).forEach((function(t){return delete s[t]}))}}},11926:function(t,e,n){n.r(e),n.d(e,{A:function(){return i}});var i={OPEN_DOUBLE_DRAWER:"openDoubleDrawer",CLOSE_DOUBLE_DRAWER:"closeDoubleDrawer",TRANSITION_SAME_LEVEL_DOUBLE_DRAWER:"transitionSameLevelDoubleDrawer",TRANSITION_SAME_LEVEL_DOUBLE_DRAWER_REVERSE:"transitionSameLevelDoubleDrawerReverse",TRANSITION_NEXT_LEVEL_DOUBLE_DRAWER:"transitionNextLevelDoubleDrawer",TRANSITION_PREVIOUS_LEVEL_DOUBLE_DRAWER:"transitionPreviousLevelDoubleDrawer",OPEN_SINGLE_DRAWER:"openSingleDrawer",CLOSE_SINGLE_DRAWER:"closeSingleDrawer",TRANSITION_NEXT_LEVEL_SINGLE_DRAWER:"transitionNextLevelSingleDrawer",TRANSITION_PREVIOUS_LEVEL_SINGLE_DRAWER:"transitionPreviousLevelSingleDrawer"}},30662:function(t,e,n){n.r(e),n.d(e,{g:function(){return U}});var i,r=n(88410),o=n(30144),a=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),s=function(){return s=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},s.apply(this,arguments)},l=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n},c=function(t,e,n){if(n||2===arguments.length)for(var i,r=0,o=e.length;r<o;r++)!i&&r in e||(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))},f=Object.defineProperty,u=function(t,e,n){return function(t,e,n){e in t?f(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n}(t,"symbol"!=typeof e?e+"":e,n),n},p="BEFORE_MERGE",m="AFTER_MERGE",d={clean:{enabled:!1,executionPlace:m,values:["",void 0,null]},logging:{enabled:!0,level:"warn"},validation:{enabled:!1,allowUnknown:!1,verbose:!0},webProperties:{enabled:!0,eventNamePattern:/.*/,reactiveUrl:!0,reactiveDimensions:!0}},h=function(){function t(){}return t.prototype.create=function(t){return"string"!=typeof t.event||0===t.event.length?{}:{context:{eventAction:t.event}}},t}(),g=function(t,e){return function(t,e){var n;for(n in t)if(t&&t[n]&&!1===e(t[n],n))return!1;return!0}(t,(function(n,i){for(var r in t[i])if(!1===e(n[r],r,n,i))return!1;return!0}))},y=function(t){for(var e in t)return!1;return!0},b=function(t,e){return void 0===e&&(e=function(t){return null==(t=d.clean)?void 0:t.values}()||[]),g(t,(function(n,i,r,o){e.includes(n)&&(delete r[i],y(r)&&delete t[o])})),t},w=function(t){return g(t,(function(t,e,n){return"function"!=typeof t||(n[e]=t()),!0})),t},x=function(t,e){var n=e.split(".");if(2===n.length){var i=t[n[0]];return i?i[n[1]]:void 0}},k=d.logging,v=((i=v||{})[i.error=0]="error",i[i.warn=1]="warn",i[i.log=2]="log",i),E=function(){function t(t,e){u(this,"prefix"),u(this,"settings"),this.prefix=t,this.settings=s(s({},k),e)}return t.prototype._getMergedSettings=function(t){return t?s(s({},this.settings),t):this.settings},t.prototype._isAllowed=function(e,n){if(!t.isAvailable||!n.enabled)return!1;var i=v[n.level];switch(e){case"error":case"warn":return i>=v[e];case"info":case"log":case"debug":case"dir":return i>=2;default:return!1}},t.prototype._log=function(t,e,n){void 0===e&&(e="log");var i=this._getMergedSettings(n);if(this._isAllowed(e,i))if("dir"===e)console.log("[".concat(this.prefix,"] ").concat(e,":")),console[e](t);else console[e]("[".concat(this.prefix,"] ").concat(t))},t.prototype.log=function(t,e){this._log(t,"log",e)},t.prototype.dir=function(t,e){this._log(t,"dir",e)},t.prototype.debug=function(t,e){this._log(t,"debug",e)},t.prototype.error=function(t,e){this._log(t,"error",e)},t.prototype.info=function(t,e){this._log(t,"info",e)},t.prototype.warn=function(t,e){this._log(t,"warn",e)},t}();u(E,"isAvailable",typeof console<"u");var _=E,D=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n={};return t.forEach((function(t){if(!y(t)){var e,i=s(s({},n),t);for(e in i)"object"!=typeof i[e]||Array.isArray(i[e])?n[e]=i[e]:n[e]=s(s({},n[e]),t[e])}})),n},R=function(){function t(){}return t.prototype.create=function(t){return b({context:{timestamp:t.timestamp,server:t.hostname},pageExperience:{pageId:t.url},visitor:{deviceBrowserBreakpoint:t.breakpoint,deviceBrowserHeight:t.height,deviceBrowserOrientation:t.orientation,deviceBrowserWidth:t.width,deviceType:t.deviceType,useragent:t.userAgent}},[void 0])},t}(),N=d.webProperties,P=function(){return window.location.href.replace(/[?#].*/,"")},O=function(){return window.innerHeight.toString()},L=function(){return window.innerHeight>window.innerWidth?"p":"l"},S=function(){return window.innerWidth.toString()},A=function(t){if(t.breakpoints&&!(t.breakpoints.length<1)){var e=t.breakpoints,n=function(){for(var t=window.innerWidth,n=0,i=0;i<e.length&&t>=e[i];)n=e[i],i++;return n.toString()};return t.reactiveDimensions?n:n()}},I=function(t,e){switch(e){case"string":case"number":case"boolean":return typeof t===e;case"any[]":return Array.isArray(t)&&t.length>0;case"Record<string, any>":return"object"==typeof t&&!Array.isArray(t)&&Object.keys(t).length>0;case"any":return!0;default:if(("boolean"==typeof t||"number"==typeof t||"string"==typeof t)&&e.indexOf("|")>0)return e.split("|").map((function(t){var e=t.trim();return/^'.*'$/.test(e)?e.replace(/(^ ?'?|'? ?$)/g,""):/^(true|false)$/.test(e)?"true"===e:/^-?(\d*\.)?\d+$/.test(e)?Number.parseFloat(e):e.replace(/(^ ?'?|'? ?$)/g,"")})).includes(t)}return!0},T=function(t,e,n){var i={level:null,issues:[]};if(!n.enabled||!n.eventMatrix)return i;var r=n.eventMatrix,o=r.events,a=l(r,["events"]),s=o.indexOf(t);if(-1===s)return i.level="error",i.issues.push({level:"error",type:"EVENT_NOT_FOUND",name:t,message:"'".concat(t,"': Event does not exist.")}),i;var c,f=function(t){if(!t)return[];var e=[];return g(t,(function(t,n,i,r){e.push("".concat(r.toString(),".").concat(n.toString()))})),e}(e),u=Object.keys(a),p=f.filter((function(t){return!u.includes(t)}));for(c in p.length>0&&(n.allowUnknown||function(t,e){t&&g(t,(function(n,i,r,o){e.includes("".concat(o.toString(),".").concat(i.toString()))&&(delete r[i],y(r)&&delete t[o])}))}(e,p),p.forEach((function(t){var e;i.level=null!==(e=i.level)&&void 0!==e?e:"warn",i.issues.push({level:"warn",type:"PROPERTY_DOES_NOT_EXIST",name:t,message:"'".concat(t,"': Property does not exist in the given Event Matrix.").concat(n.allowUnknown?"":" It was omitted from the DataLayer payload.")})}))),a){var m=a[c],d=typeof m.e[s]<"u",h=1===m.r,b=e?x(e,c):void 0,w=typeof b<"u";if(d&&h&&!w&&(i.level="error",i.issues.push({level:"error",type:"REQUIRED_PROPERTY_MISSING",name:c,message:"'".concat(c,"': The required property is missing.")}),!n.verbose)||w&&!I(b,m.t)&&(i.level="error",i.issues.push({level:"error",type:"WRONG_PROPERTY_TYPE",name:c,message:"'".concat(c,"': Wrong type detected. Expected '").concat(m.t,"', got '").concat(typeof b,"'.")}),!n.verbose))return i}return i},j=function(){function t(t,e,n){void 0===n&&(n="GlobalDataLayer"),u(this,"_className"),u(this,"_settings"),u(this,"_defaultProperties"),u(this,"_logger"),u(this,"_webPropertiesHandled",!1),u(this,"_dataLayerStore"),u(this,"_extensions",new Map);var i=D(d,t||{});this._className=n,this._logger=new _(this._className,i.logging),this._settings=i,e?this._dataLayerStore=e:typeof window<"u"?(this._dataLayerStore=window.pagData=window.pagData||[],this._logger.info("`dataLayerStore` was set to default `window.pagData`")):(this._dataLayerStore=[],this._logger.info("`dataLayerStore` was set to default `[]`")),this._defaultProperties=[]}return t.prototype.setup=function(){this._handleDefaultWebProperties()},Object.defineProperty(t.prototype,"Settings",{get:function(){return this._settings},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"DataLayerStore",{get:function(){return this._dataLayerStore},enumerable:!1,configurable:!0}),t.prototype.getRegisteredExtension=function(t){var e=new t;return this.getRegisteredExtensionByClassName(e.className)},t.prototype.getRegisteredExtensionByClassName=function(t){return this._extensions.has(t)?this._extensions.get(t):void 0},t.prototype.getRegisteredExtensions=function(){for(var t=[],e=0,n=this._extensions.values();e<n.length;e++){var i=n[e];t.push(i)}return t},t.prototype.registerExtension=function(t,e){void 0===e&&(e=!1),e||!this._extensions.has(t.className)?(t.dataLayerInstance=this,this._extensions.set(t.className,t),e?this._logger.info("Overriden registration for extension class <".concat(t.className,">.")):this._logger.info("Registered extension class <".concat(t.className,">."))):this._logger.warn("Tried to register extension class <".concat(t.className,"> which already exists."))},t.prototype.removeExtension=function(t){var e=new t;this._extensions.has(e.className)?this._extensions.delete(e.className):this._logger.warn("Tried to remove not existing extension class <".concat(e.className,">."))},t.prototype.removeExtensionByClassName=function(t){this._extensions.has(t)?this._extensions.delete(t):this._logger.warn("Tried to remove not existing extension class <".concat(t,">."))},t.prototype.push=function(t,e,n){var i,r;if(void 0===e&&(e=[{}]),0===t.length)return!1;var o=n&&!y(n)?D(this._settings,n):this._settings;Array.isArray(e)||(e=[e]),e.forEach(w);var a=this._eventNamePayloadFactory.create({event:t}),s=w(this.getDefaultProperties(t));o.clean.enabled&&o.clean.executionPlace===p&&c([s||{}],e,!0).forEach((function(t){return b(t,o.clean.values)}));var l=D.apply(void 0,c([a,s||{}],e,!1));if(o.clean.enabled&&o.clean.executionPlace===m&&b(l,o.clean.values),null!=(i=null==o?void 0:o.validation)&&i.enabled&&null!=(r=null==o?void 0:o.validation)&&r.eventMatrix){var f=T(t,l,o.validation),u=f.issues.sort((function(t,e){return t.level!==e.level&&"warn"===e.level?-1:0})).map((function(t){return"- [".concat(t.level,"]: ").concat(t.message)})).join("\n");switch(f.level){case"error":return this._logger.error("Validation failed for event '".concat(t,"' with errors/warnings: \n").concat(u),o.logging),!1;case"warn":this._logger.warn("Validation success for event '".concat(t,"' with warnings: \n").concat(u),o.logging);break;default:this._logger.info("Validation success for event '".concat(t,"'."),o.logging)}}return this._dataLayerStore.push(l),!0},t.prototype.getDefaultProperties=function(t){var e={byName:[],byArray:[],byRegex:[]};this._defaultProperties.forEach((function(n){return n.identifier===t?e.byName.push(n.data):Array.isArray(n.identifier)&&n.identifier.includes(t)?e.byArray.push(n.data):n.identifier instanceof RegExp&&n.identifier.test(t)?e.byRegex.push(n.data):void 0}));var n=c(c(c([],e.byRegex,!0),e.byArray,!0),e.byName,!0);if(n.length)return D.apply(void 0,n)},t.prototype.setDefaultProperties=function(t,e){var n=this._defaultProperties.find((function(e){return e.identifier===t}));n?n.data=D(n.data,e):this._defaultProperties.push({identifier:t,data:e})},t.prototype._handleDefaultWebProperties=function(){if(!this._webPropertiesHandled&&this._settings.webProperties.enabled){var t=function(t,e){var n=s(s({},N),t),i={breakpoint:A(n),timestamp:(new Date).toISOString(),hostname:window.location.hostname,url:n.reactiveUrl?P:P(),height:n.reactiveDimensions?O:O(),orientation:n.reactiveDimensions?L:L(),width:n.reactiveDimensions?S:S(),deviceType:window.matchMedia("(hover: none), (pointer: coarse)").matches?"mobile":"desktop",userAgent:window.navigator.userAgent};return e?e.create(i):i}(this._settings.webProperties,this._webPayloadFactory);this.setDefaultProperties(this._settings.webProperties.eventNamePattern,t),this._webPropertiesHandled=!0}},t}(),B=function(t){function e(e,n,i){void 0===i&&(i="GlobalDataLayer");var r=t.call(this,e,n,i)||this;return u(r,"_eventNamePayloadFactory"),u(r,"_webPayloadFactory"),r._eventNamePayloadFactory=new h,r._webPayloadFactory=new R,r.setup(),r}return a(e,t),e.prototype.setup=function(){t.prototype.setup.call(this)},e}(j);function K(t){switch(t){case r.c.PRODUCTION:return"P";case r.c.PREVIEW:return"PP";default:return"K"}}var W=function(){function t(){this.homeNavEventId=/^PAGHomeNav_/,this.initialise()}return t.prototype.initialise=function(){this.gdl=new B},t.prototype.pushDataLayerEvent=function(t,e){e?this.gdl.push(t,e):this.gdl.push(t)},t.prototype.setEnvironment=function(t){this.gdl.setDefaultProperties(this.homeNavEventId,{context:{environment:K(t)}})},t.prototype.setPageName=function(t){this.gdl.setDefaultProperties(this.homeNavEventId,{pageExperience:{pageName:t}})},t.prototype.setUser=function(t,e){this.gdl.setDefaultProperties(this.homeNavEventId,{ids:{userId:t},visitor:{loginStatus:e}})},t.prototype.setLocale=function(t){try{var e=(0,r.s)(t),n=e.country,i=e.language;this.gdl.setDefaultProperties(this.homeNavEventId,{context:{country:n,language:i}})}catch(t){}},t.prototype.setDefaultProperties=function(t,e){var n={context:{applicationId:r.d},visitor:{loginStatus:!1}};try{var i=(0,r.s)(t),a=i.country,s=i.language;n=Object.assign(Object.assign({},n),{context:Object.assign(Object.assign({},n.context),{country:a,language:s,applicationName:r.D})})}catch(t){}(0,o.i)(e)&&(n=Object.assign(Object.assign({},n),{pageExperience:{pageName:e}})),this.gdl.setDefaultProperties(this.homeNavEventId,n)},t}(),U=new W},98169:function(t,e,n){n.r(e),n.d(e,{phn_back_button:function(){return c},phn_heading:function(){return f},phn_signature_heading:function(){return u}});var i=n(78056),r=n(30662),o=n(88410),a=n(98889),s=n(65395),l=n(30144),c=(n(95797),n(39030),n(57218),n(59379),n(69980),n(47869),n(73439),n(11926),function(){function t(t){(0,i.r)(this,t),this.text="",this.analyticsId=""}return t.prototype.sendDataLayerEvent=function(){r.g.pushDataLayerEvent(o.E.MENU_BACK_CLICK,{componentClick:{clickElementId:this.analyticsId,clickElementName:this.text,clickElementType:o.C.Button},componentDisplay:{displayElementId:a.a.calculateDisplayElementId(),displayElementType:a.a.calculateDisplayElementType((0,s.g)(),o.h.backButton,!0),displayElementName:this.text}})},t.prototype.render=function(){var t=this;return(0,i.h)(i.H,null,(0,i.h)("phn-p-button-pure",{size:"inherit",icon:"arrow-head-left",class:"back-button-text-link",aria:{"aria-label":"Back to Menu"},onClick:function(){return t.sendDataLayerEvent()}},this.text))},t}());c.style="@-webkit-keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@-webkit-keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@-webkit-keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@-webkit-keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@-webkit-keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.transition-forward-animation-out.sc-phn-back-button{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:-150% !important}.transition-forward-animation-in.sc-phn-back-button{position:relative;-webkit-animation:transition-forward-in-animation 250ms;animation:transition-forward-in-animation 250ms}.transition-backward-animation-out.sc-phn-back-button{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:150% !important}.transition-backward-animation-in.sc-phn-back-button{position:relative !important;-webkit-animation:transition-backward-in-animation 250ms;animation:transition-backward-in-animation 250ms}.slide-out-to-right-fixed.sc-phn-back-button{-webkit-transition:left 400ms;transition:left 400ms;position:fixed;left:100% !important}.slide-in-from-right-fixed.sc-phn-back-button{position:fixed;-webkit-animation:single-drawer-transition-forward-in-animation 400ms;animation:single-drawer-transition-forward-in-animation 400ms}.phn-flex-col.sc-phn-back-button{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.phn-flex-row.sc-phn-back-button{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.phn-align-center.sc-phn-back-button{-ms-flex-align:center;align-items:center}.phn-justify-around.sc-phn-back-button{-ms-flex-pack:distribute;justify-content:space-around}.phn-justify-between.sc-phn-back-button{-ms-flex-pack:justify;justify-content:space-between}.phn-flex-wrap.sc-phn-back-button{-ms-flex-wrap:wrap;flex-wrap:wrap}.sc-phn-back-button-h{font-size:1rem;display:-ms-flexbox;display:flex}@media (min-width: 480px){.sc-phn-back-button-h{font-size:1.25rem}}@media (min-width: 760px){.sc-phn-back-button-h{font-size:1.25rem}}";var f=function(){function t(t){(0,i.r)(this,t),this.text=void 0,this.subtext=void 0}return t.prototype.render=function(){return(0,i.h)(i.H,null,(0,i.h)("phn-p-heading",{size:"inherit"},this.text),(0,l.i)(this.subtext)?(0,i.h)("div",{class:"text-limit"},(0,i.h)("phn-p-text",{color:"contrast-high",size:"xx-small",tag:"div",ellipsis:"true"},this.subtext)):null)},t}();f.style='@-webkit-keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@-webkit-keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@-webkit-keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@-webkit-keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@-webkit-keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.transition-forward-animation-out.sc-phn-heading{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:-150% !important}.transition-forward-animation-in.sc-phn-heading{position:relative;-webkit-animation:transition-forward-in-animation 250ms;animation:transition-forward-in-animation 250ms}.transition-backward-animation-out.sc-phn-heading{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:150% !important}.transition-backward-animation-in.sc-phn-heading{position:relative !important;-webkit-animation:transition-backward-in-animation 250ms;animation:transition-backward-in-animation 250ms}.slide-out-to-right-fixed.sc-phn-heading{-webkit-transition:left 400ms;transition:left 400ms;position:fixed;left:100% !important}.slide-in-from-right-fixed.sc-phn-heading{position:fixed;-webkit-animation:single-drawer-transition-forward-in-animation 400ms;animation:single-drawer-transition-forward-in-animation 400ms}.phn-flex-col.sc-phn-heading{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.phn-flex-row.sc-phn-heading{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.phn-align-center.sc-phn-heading{-ms-flex-align:center;align-items:center}.phn-justify-around.sc-phn-heading{-ms-flex-pack:distribute;justify-content:space-around}.phn-justify-between.sc-phn-heading{-ms-flex-pack:justify;justify-content:space-between}.phn-flex-wrap.sc-phn-heading{-ms-flex-wrap:wrap;flex-wrap:wrap}.sc-phn-heading-h{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}.sc-phn-heading-h phn-p-heading.sc-phn-heading{font:normal normal 600 clamp(1.27rem, 0.51vw + 1.16rem, 1.78rem)/calc(6px + 2.125ex) "Porsche Next", "Arial Narrow", Arial, "Heiti SC", SimHei, sans-serif}@media (min-width: 480px){.sc-phn-heading-h phn-p-heading.sc-phn-heading{font:normal normal 600 clamp(1.42rem, 0.94vw + 1.23rem, 2.37rem)/calc(6px + 2.125ex) "Porsche Next", "Arial Narrow", Arial, "Heiti SC", SimHei, sans-serif}}@media (min-width: 760px){.dealer-heading.sc-phn-heading-h phn-p-heading.sc-phn-heading{font-size:1.875rem;line-height:2.5rem}}@media (min-width: 1000px){.dealer-heading.sc-phn-heading-h phn-p-heading.sc-phn-heading{font-size:1.75rem;line-height:2.5rem}}@media (min-width: 0px){.sc-phn-heading-h div.text-limit.sc-phn-heading{width:180px}}@media (min-width: 480px){.sc-phn-heading-h div.text-limit.sc-phn-heading{width:100%}}';var u=function(){function t(t){(0,i.r)(this,t),this.text=void 0,this.subtext=void 0}return t.prototype.render=function(){return(0,i.h)(i.F,null,(0,i.h)("phn-p-model-signature",{model:this.text.toLowerCase(),size:"inherit",class:"model-signature"}),(0,l.i)(this.subtext)&&!(0,l.O)(this.text)?(0,i.h)("phn-p-text",{color:"inherit",class:"subtext",weight:"regular",size:"x-small",tag:"div",ellipsis:"true","data-test-id":"subtext"},this.subtext):null)},t}();u.style="@-webkit-keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@-webkit-keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@-webkit-keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@-webkit-keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@-webkit-keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.transition-forward-animation-out.sc-phn-signature-heading{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:-150% !important}.transition-forward-animation-in.sc-phn-signature-heading{position:relative;-webkit-animation:transition-forward-in-animation 250ms;animation:transition-forward-in-animation 250ms}.transition-backward-animation-out.sc-phn-signature-heading{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:150% !important}.transition-backward-animation-in.sc-phn-signature-heading{position:relative !important;-webkit-animation:transition-backward-in-animation 250ms;animation:transition-backward-in-animation 250ms}.slide-out-to-right-fixed.sc-phn-signature-heading{-webkit-transition:left 400ms;transition:left 400ms;position:fixed;left:100% !important}.slide-in-from-right-fixed.sc-phn-signature-heading{position:fixed;-webkit-animation:single-drawer-transition-forward-in-animation 400ms;animation:single-drawer-transition-forward-in-animation 400ms}.phn-flex-col.sc-phn-signature-heading{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.phn-flex-row.sc-phn-signature-heading{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.phn-align-center.sc-phn-signature-heading{-ms-flex-align:center;align-items:center}.phn-justify-around.sc-phn-signature-heading{-ms-flex-pack:distribute;justify-content:space-around}.phn-justify-between.sc-phn-signature-heading{-ms-flex-pack:justify;justify-content:space-between}.phn-flex-wrap.sc-phn-signature-heading{-ms-flex-wrap:wrap;flex-wrap:wrap}.model-signature.sc-phn-signature-heading{height:1.625rem}@media (min-width: 1920px){.model-signature.sc-phn-signature-heading{height:1.875rem}}phn-p-text.sc-phn-signature-heading{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;color:#535457;font-size:1.25rem}@media (min-width: 1300px){phn-p-text.sc-phn-signature-heading{font-size:1.375rem}}@media (min-width: 1920px){phn-p-text.sc-phn-signature-heading{font-size:1.5rem}}"},39030:function(t,e,n){n.r(e),n.d(e,{r:function(){return i}});var i=(0,n(88410).e)({routingKeyHistory:[],routingKeyPointer:-1,animatingPointer:-1,initialRoutingKeyHistory:null,initialRoutingKeyPointer:null})},65395:function(t,e,n){n.r(e),n.d(e,{a:function(){return O},b:function(){return N},c:function(){return w},d:function(){return S},e:function(){return D},f:function(){return x},g:function(){return y},h:function(){return u},i:function(){return P},j:function(){return v},p:function(){return k},r:function(){return E},s:function(){return A}});var i=n(39030),r=n(95797),o=n(30144),a=n(69980),s=n(59379),l=n(73439),c=n(11926),f=function(t,e,n){if(n||2===arguments.length)for(var i,r=0,o=e.length;r<o;r++)!i&&r in e||(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))},u=function(){return{OPENING:p,CLOSING:m,FORWARD:d,BACKWARDS:h,UNCHANGED:g}[function(){if(N())return"OPENING";if(L())return"CLOSING";if(D())return"FORWARD";if(R())return"BACKWARDS";return"UNCHANGED"}()]()};var p=function(){return l.a.play(c.A.OPEN_SINGLE_DRAWER),{nextRoute:"",currentRoute:y()}},m=function(){return l.a.play(c.A.CLOSE_SINGLE_DRAWER).then((function(){})),{nextRoute:y()||"",currentRoute:b()||""}},d=function(){var t,e;return setTimeout((function(){l.a.play(c.A.TRANSITION_NEXT_LEVEL_SINGLE_DRAWER)})),{nextRoute:null!==(t=y())&&void 0!==t?t:"",currentRoute:null!==(e=b())&&void 0!==e?e:""}},h=function(){var t,e;return""!==y()&&setTimeout((function(){l.a.play(c.A.TRANSITION_PREVIOUS_LEVEL_SINGLE_DRAWER)})),{nextRoute:null!==(t=b())&&void 0!==t?t:"",currentRoute:null!==(e=y())&&void 0!==e?e:""}},g=function(){return{nextRoute:"",currentRoute:y()}},y=function(){var t=i.r.state;return t.routingKeyHistory[t.routingKeyPointer]||""},b=function(){var t=i.r.state;return t.routingKeyHistory[t.animatingPointer]||""},w=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=f([r.a.MAIN_MENU],t,!0);i.r.state.routingKeyPointer=t.length,i.r.state.routingKeyHistory=n},x=function(){(function(){try{return[c.A.OPEN_SINGLE_DRAWER,c.A.CLOSE_SINGLE_DRAWER,c.A.TRANSITION_NEXT_LEVEL_SINGLE_DRAWER,c.A.TRANSITION_PREVIOUS_LEVEL_SINGLE_DRAWER].some((function(t){try{return l.a.isPlaying(t)}catch(t){return!1}}))}catch(t){return!1}})()||((0,r.f)(y())===r.a.DEALER_SEARCH&&(s.d.state.savedDealerCookie=null),i.r.state.routingKeyPointer=i.r.state.routingKeyPointer-1)},k=function(){_()&&i.r.state.routingKeyHistory.pop()},v=function(t){if((0,o.l)(a.w.getBreakpoint()))(0,o.E)("phn-router","mobileMenuItemClick",{bubbles:!0,cancelable:!1,detail:[r.c.apply(void 0,f([y()],t,!1))]});else{var e=f(f([],i.r.state.routingKeyHistory,!0),[r.c.apply(void 0,f([y()],t,!1))],!1);i.r.state.routingKeyPointer=e.length-1,i.r.state.routingKeyHistory=e}},E=function(){i.r.state.routingKeyPointer=-1},_=function(){return i.r.state.routingKeyPointer<i.r.state.routingKeyHistory.length-1},D=function(){return i.r.state.routingKeyPointer>i.r.state.animatingPointer},R=function(){return i.r.state.routingKeyPointer<i.r.state.animatingPointer},N=function(){return i.r.state.animatingPointer===r.R.LEVEL_ZERO&&i.r.state.routingKeyPointer>=0},P=function(){return!O()},O=function(){return i.r.state.routingKeyPointer===r.R.LEVEL_ZERO&&i.r.state.animatingPointer===r.R.LEVEL_ZERO},L=function(){return-1===i.r.state.routingKeyPointer&&i.r.state.animatingPointer>=0},S=function(){i.r.state.animatingPointer=i.r.state.routingKeyPointer},A=function(t){return i.r.state.routingKeyHistory.indexOf(t)>=r.R.LEVEL_TWO}}}]);
//# sourceMappingURL=8169.1a3fe026.chunk.js.map