"use strict";(self.webpackChunksample_integration_react=self.webpackChunksample_integration_react||[]).push([[4114,8889,1926,662,9030,725],{98889:function(e,t,n){n.r(t),n.d(t,{a:function(){return d}});var r=n(95797),i=n(39030),o=n(88410),a=n(30144),s=n(57218),l={};function c(e){var t=l.drawerType,n=((0,a.i)(e)?(0,r.b)(e):i.r.state.routingKeyHistory[i.r.state.routingKeyPointer])||"",o=(0,r.g)(n),c=(0,r.d)(n),u=c-1;if(!(0,a.i)(n))return"level0";var f=(0,a.i)(n)?"level".concat(c,"-").concat(o):"level".concat(c-1,"-unknown");if("doubleDrawer"===t){if(""===n)return"level".concat(u,"-unknown_level").concat(c,"-unknown");var d=(0,s.g)(n);return"level".concat(u,"-").concat(d,"_").concat(f)}return f}function u(e,t,n){var i=l.drawerType,o=(0,r.d)(e);if("doubleDrawer"===i){var s=o;return n&&(s-=1),"level".concat(s,"_").concat(t)}return(0,a.i)(e)?"level".concat(o,"_").concat(t):"level".concat(o-1,"_").concat(t)}function f(){return l.drawerType}var d={setDrawerType:function(e){l.drawerType=e},getDealerResultsLoadDisplayElementId:function(e){return"doubleDrawer"===f()?e:c()},calculateDisplayElementId:c,getDealerResultsLoadDisplayElementType:function(){return"doubleDrawer"===f()?o.j:u("",o.h.dealerSearchForm)},calculateDisplayElementType:u,getModelName:function(e){var t=e.link.split("/"),n=t[t.length-1];return""===n?void 0===t[t.length-2]?"":t[t.length-2].split("-").join(" "):n.split("-").join(" ")},getModelTargetElement:function(e,t){if(e.includes("models")){var n=(0,r.d)(e);return"level".concat(n,"_").concat(t.toLowerCase())}}}},73439:function(e,t,n){n.r(t),n.d(t,{a:function(){return h},m:function(){return g}});var r=n(30144),i=function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function s(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){e.done?n(e.value):i(e.value).then(a,s)}l((r=r.apply(e,t||[])).next())}))},o=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},a={},s={};function l(e){return i(this,void 0,void 0,(function(){var t,n,r,i,a,s,c;return o(this,(function(o){switch(o.label){case 0:if(e.currentStepIndex>=e.steps.length)return function(e){var t;e.currentStepIndex=0,null===(t=e.resolve)||void 0===t||t.call(e,null),e.promise=void 0}(e),[2];for(n=e.steps[e.currentStepIndex],r=[],i=0,a=n;i<a.length;i++)s=a[i],r.push(u(s));o.label=1;case 1:return o.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return o.sent(),[3,4];case 3:return c=o.sent(),null===(t=e.reject)||void 0===t||t.call(e,c),[2];case 4:return e.currentStepIndex+=1,setTimeout((function(){return l(e)}),0),[2]}}))}))}function c(e){var t=(0,r.t)(e.target);if(null===t)throw new Error("".concat(e.type," event target is null"));var n=t.dataset.phnAmId;void 0!==n&&null!==n&&p(n,t)}function u(e){var t=e.onStart,n=e.onEnd,a=e.animation,s=e.elementSelector;return i(this,void 0,void 0,(function(){var e,i,l,c,u,p,g;return o(this,(function(o){switch(o.label){case 0:return t?(g=t(),(0,r.q)(g)?[4,g]:[3,2]):[3,2];case 1:o.sent(),o.label=2;case 2:for(e=Array.from((0,r.B)().querySelectorAll(s)),i=[],l=0,c=e;l<c.length;l++)u=c[l],p=f(d)(u,a),i.push(p);return[4,Promise.all(i)];case 3:return o.sent(),n?(g=n(),(0,r.q)(g)?[4,g]:[3,5]):[3,5];case 4:o.sent(),o.label=5;case 5:return[2]}}))}))}function f(e){return function(t,n){return i(this,void 0,void 0,(function(){var i,a,s,l;return o(this,(function(o){switch(o.label){case 0:return i=n.cleanUpBeforeAnimation,a=n.cleanUpAfterAnimation,s=e(t,n),"function"!==typeof i?[3,2]:(l=i(t),(0,r.q)(l)?[4,l]:[3,2]);case 1:o.sent(),o.label=2;case 2:return[4,s];case 3:return o.sent(),"function"!==typeof a?[3,5]:(l=a(t),(0,r.q)(l)?[4,l]:[3,5]);case 4:o.sent(),o.label=5;case 5:return!1!==a&&t.classList.remove(n.className),[2]}}))}))}}var d=function(e,t){var n,r,i,o=Math.floor(1e7*Math.random());e.classList.add(t.className),e.dataset.phnAmId=o.toString();var s=new Promise((function(a,s){n=a,r=s,i=setTimeout((function(){console.warn("Animation with className ".concat(t.className," didn't finish after ").concat(1e3,"ms. Forcefully finishing animation and continuing with the rest of the sequence.")),p(String(o),e)}),1e3)}));return a[o]={animation:t,resolve:n,reject:r,promise:s,timeout:i},s};function p(e,t){var n=a[e],r=n.resolve,i=n.timeout;clearTimeout(i),delete a[e],delete t.dataset.phnAmId,r()}function g(e,t){return{steps:e.map((function(e){return e.map((function(e){return Object.assign(Object.assign({},t),e)}))})),currentStepIndex:0,running:!1}}var h={initialize:function(){(0,r.B)().addEventListener("transitionend",c),(0,r.B)().addEventListener("animationend",c)},play:function(e){return i(this,void 0,void 0,(function(){var t;return o(this,(function(n){return void 0===(t=s[e])?[2,new Promise((function(t,n){return n(new Error("Sequence ".concat(e," has not been registered")))}))]:(t.running||(t.promise=new Promise((function(e,n){t.resolve=function(){t.running=!1,e()},t.reject=function(e){t.running=!1,n(e)},t.running=!0,l(t)}))),[2,t.promise])}))}))},isPlaying:function(e){var t=s[e];if(void 0===t)throw new Error("Sequence ".concat(e," has not been registered"));return void 0!==t.promise},register:function(e,t){s[e]=t},reset:function(){Object.keys(s).forEach((function(e){return delete s[e]}))}}},11926:function(e,t,n){n.r(t),n.d(t,{A:function(){return r}});var r={OPEN_DOUBLE_DRAWER:"openDoubleDrawer",CLOSE_DOUBLE_DRAWER:"closeDoubleDrawer",TRANSITION_SAME_LEVEL_DOUBLE_DRAWER:"transitionSameLevelDoubleDrawer",TRANSITION_SAME_LEVEL_DOUBLE_DRAWER_REVERSE:"transitionSameLevelDoubleDrawerReverse",TRANSITION_NEXT_LEVEL_DOUBLE_DRAWER:"transitionNextLevelDoubleDrawer",TRANSITION_PREVIOUS_LEVEL_DOUBLE_DRAWER:"transitionPreviousLevelDoubleDrawer",OPEN_SINGLE_DRAWER:"openSingleDrawer",CLOSE_SINGLE_DRAWER:"closeSingleDrawer",TRANSITION_NEXT_LEVEL_SINGLE_DRAWER:"transitionNextLevelSingleDrawer",TRANSITION_PREVIOUS_LEVEL_SINGLE_DRAWER:"transitionPreviousLevelSingleDrawer"}},30662:function(e,t,n){n.r(t),n.d(t,{g:function(){return G}});var r,i=n(88410),o=n(30144),a=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},s.apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},c=function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},u=Object.defineProperty,f=function(e,t,n){return function(e,t,n){t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!=typeof t?t+"":t,n),n},d="BEFORE_MERGE",p="AFTER_MERGE",g={clean:{enabled:!1,executionPlace:p,values:["",void 0,null]},logging:{enabled:!0,level:"warn"},validation:{enabled:!1,allowUnknown:!1,verbose:!0},webProperties:{enabled:!0,eventNamePattern:/.*/,reactiveUrl:!0,reactiveDimensions:!0}},h=function(){function e(){}return e.prototype.create=function(e){return"string"!=typeof e.event||0===e.event.length?{}:{context:{eventAction:e.event}}},e}(),m=function(e,t){return function(e,t){var n;for(n in e)if(e&&e[n]&&!1===t(e[n],n))return!1;return!0}(e,(function(n,r){for(var i in e[r])if(!1===t(n[i],i,n,r))return!1;return!0}))},y=function(e){for(var t in e)return!1;return!0},w=function(e,t){return void 0===t&&(t=function(e){return null==(e=g.clean)?void 0:e.values}()||[]),m(e,(function(n,r,i,o){t.includes(n)&&(delete i[r],y(i)&&delete e[o])})),e},v=function(e){return m(e,(function(e,t,n){return"function"!=typeof e||(n[t]=e()),!0})),e},b=function(e,t){var n=t.split(".");if(2===n.length){var r=e[n[0]];return r?r[n[1]]:void 0}},E=g.logging,_=((r=_||{})[r.error=0]="error",r[r.warn=1]="warn",r[r.log=2]="log",r),x=function(){function e(e,t){f(this,"prefix"),f(this,"settings"),this.prefix=e,this.settings=s(s({},E),t)}return e.prototype._getMergedSettings=function(e){return e?s(s({},this.settings),e):this.settings},e.prototype._isAllowed=function(t,n){if(!e.isAvailable||!n.enabled)return!1;var r=_[n.level];switch(t){case"error":case"warn":return r>=_[t];case"info":case"log":case"debug":case"dir":return r>=2;default:return!1}},e.prototype._log=function(e,t,n){void 0===t&&(t="log");var r=this._getMergedSettings(n);if(this._isAllowed(t,r))if("dir"===t)console.log("[".concat(this.prefix,"] ").concat(t,":")),console[t](e);else console[t]("[".concat(this.prefix,"] ").concat(e))},e.prototype.log=function(e,t){this._log(e,"log",t)},e.prototype.dir=function(e,t){this._log(e,"dir",t)},e.prototype.debug=function(e,t){this._log(e,"debug",t)},e.prototype.error=function(e,t){this._log(e,"error",t)},e.prototype.info=function(e,t){this._log(e,"info",t)},e.prototype.warn=function(e,t){this._log(e,"warn",t)},e}();f(x,"isAvailable",typeof console<"u");var k=x,R=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n={};return e.forEach((function(e){if(!y(e)){var t,r=s(s({},n),e);for(t in r)"object"!=typeof r[t]||Array.isArray(r[t])?n[t]=r[t]:n[t]=s(s({},n[t]),e[t])}})),n},A=function(){function e(){}return e.prototype.create=function(e){return w({context:{timestamp:e.timestamp,server:e.hostname},pageExperience:{pageId:e.url},visitor:{deviceBrowserBreakpoint:e.breakpoint,deviceBrowserHeight:e.height,deviceBrowserOrientation:e.orientation,deviceBrowserWidth:e.width,deviceType:e.deviceType,useragent:e.userAgent}},[void 0])},e}(),N=g.webProperties,S=function(){return window.location.href.replace(/[?#].*/,"")},D=function(){return window.innerHeight.toString()},P=function(){return window.innerHeight>window.innerWidth?"p":"l"},O=function(){return window.innerWidth.toString()},L=function(e){if(e.breakpoints&&!(e.breakpoints.length<1)){var t=e.breakpoints,n=function(){for(var e=window.innerWidth,n=0,r=0;r<t.length&&e>=t[r];)n=t[r],r++;return n.toString()};return e.reactiveDimensions?n:n()}},I=function(e,t){switch(t){case"string":case"number":case"boolean":return typeof e===t;case"any[]":return Array.isArray(e)&&e.length>0;case"Record<string, any>":return"object"==typeof e&&!Array.isArray(e)&&Object.keys(e).length>0;case"any":return!0;default:if(("boolean"==typeof e||"number"==typeof e||"string"==typeof e)&&t.indexOf("|")>0)return t.split("|").map((function(e){var t=e.trim();return/^'.*'$/.test(t)?t.replace(/(^ ?'?|'? ?$)/g,""):/^(true|false)$/.test(t)?"true"===t:/^-?(\d*\.)?\d+$/.test(t)?Number.parseFloat(t):t.replace(/(^ ?'?|'? ?$)/g,"")})).includes(e)}return!0},T=function(e,t,n){var r={level:null,issues:[]};if(!n.enabled||!n.eventMatrix)return r;var i=n.eventMatrix,o=i.events,a=l(i,["events"]),s=o.indexOf(e);if(-1===s)return r.level="error",r.issues.push({level:"error",type:"EVENT_NOT_FOUND",name:e,message:"'".concat(e,"': Event does not exist.")}),r;var c,u=function(e){if(!e)return[];var t=[];return m(e,(function(e,n,r,i){t.push("".concat(i.toString(),".").concat(n.toString()))})),t}(t),f=Object.keys(a),d=u.filter((function(e){return!f.includes(e)}));for(c in d.length>0&&(n.allowUnknown||function(e,t){e&&m(e,(function(n,r,i,o){t.includes("".concat(o.toString(),".").concat(r.toString()))&&(delete i[r],y(i)&&delete e[o])}))}(t,d),d.forEach((function(e){var t;r.level=null!==(t=r.level)&&void 0!==t?t:"warn",r.issues.push({level:"warn",type:"PROPERTY_DOES_NOT_EXIST",name:e,message:"'".concat(e,"': Property does not exist in the given Event Matrix.").concat(n.allowUnknown?"":" It was omitted from the DataLayer payload.")})}))),a){var p=a[c],g=typeof p.e[s]<"u",h=1===p.r,w=t?b(t,c):void 0,v=typeof w<"u";if(g&&h&&!v&&(r.level="error",r.issues.push({level:"error",type:"REQUIRED_PROPERTY_MISSING",name:c,message:"'".concat(c,"': The required property is missing.")}),!n.verbose)||v&&!I(w,p.t)&&(r.level="error",r.issues.push({level:"error",type:"WRONG_PROPERTY_TYPE",name:c,message:"'".concat(c,"': Wrong type detected. Expected '").concat(p.t,"', got '").concat(typeof w,"'.")}),!n.verbose))return r}return r},K=function(){function e(e,t,n){void 0===n&&(n="GlobalDataLayer"),f(this,"_className"),f(this,"_settings"),f(this,"_defaultProperties"),f(this,"_logger"),f(this,"_webPropertiesHandled",!1),f(this,"_dataLayerStore"),f(this,"_extensions",new Map);var r=R(g,e||{});this._className=n,this._logger=new k(this._className,r.logging),this._settings=r,t?this._dataLayerStore=t:typeof window<"u"?(this._dataLayerStore=window.pagData=window.pagData||[],this._logger.info("`dataLayerStore` was set to default `window.pagData`")):(this._dataLayerStore=[],this._logger.info("`dataLayerStore` was set to default `[]`")),this._defaultProperties=[]}return e.prototype.setup=function(){this._handleDefaultWebProperties()},Object.defineProperty(e.prototype,"Settings",{get:function(){return this._settings},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"DataLayerStore",{get:function(){return this._dataLayerStore},enumerable:!1,configurable:!0}),e.prototype.getRegisteredExtension=function(e){var t=new e;return this.getRegisteredExtensionByClassName(t.className)},e.prototype.getRegisteredExtensionByClassName=function(e){return this._extensions.has(e)?this._extensions.get(e):void 0},e.prototype.getRegisteredExtensions=function(){for(var e=[],t=0,n=this._extensions.values();t<n.length;t++){var r=n[t];e.push(r)}return e},e.prototype.registerExtension=function(e,t){void 0===t&&(t=!1),t||!this._extensions.has(e.className)?(e.dataLayerInstance=this,this._extensions.set(e.className,e),t?this._logger.info("Overriden registration for extension class <".concat(e.className,">.")):this._logger.info("Registered extension class <".concat(e.className,">."))):this._logger.warn("Tried to register extension class <".concat(e.className,"> which already exists."))},e.prototype.removeExtension=function(e){var t=new e;this._extensions.has(t.className)?this._extensions.delete(t.className):this._logger.warn("Tried to remove not existing extension class <".concat(t.className,">."))},e.prototype.removeExtensionByClassName=function(e){this._extensions.has(e)?this._extensions.delete(e):this._logger.warn("Tried to remove not existing extension class <".concat(e,">."))},e.prototype.push=function(e,t,n){var r,i;if(void 0===t&&(t=[{}]),0===e.length)return!1;var o=n&&!y(n)?R(this._settings,n):this._settings;Array.isArray(t)||(t=[t]),t.forEach(v);var a=this._eventNamePayloadFactory.create({event:e}),s=v(this.getDefaultProperties(e));o.clean.enabled&&o.clean.executionPlace===d&&c([s||{}],t,!0).forEach((function(e){return w(e,o.clean.values)}));var l=R.apply(void 0,c([a,s||{}],t,!1));if(o.clean.enabled&&o.clean.executionPlace===p&&w(l,o.clean.values),null!=(r=null==o?void 0:o.validation)&&r.enabled&&null!=(i=null==o?void 0:o.validation)&&i.eventMatrix){var u=T(e,l,o.validation),f=u.issues.sort((function(e,t){return e.level!==t.level&&"warn"===t.level?-1:0})).map((function(e){return"- [".concat(e.level,"]: ").concat(e.message)})).join("\n");switch(u.level){case"error":return this._logger.error("Validation failed for event '".concat(e,"' with errors/warnings: \n").concat(f),o.logging),!1;case"warn":this._logger.warn("Validation success for event '".concat(e,"' with warnings: \n").concat(f),o.logging);break;default:this._logger.info("Validation success for event '".concat(e,"'."),o.logging)}}return this._dataLayerStore.push(l),!0},e.prototype.getDefaultProperties=function(e){var t={byName:[],byArray:[],byRegex:[]};this._defaultProperties.forEach((function(n){return n.identifier===e?t.byName.push(n.data):Array.isArray(n.identifier)&&n.identifier.includes(e)?t.byArray.push(n.data):n.identifier instanceof RegExp&&n.identifier.test(e)?t.byRegex.push(n.data):void 0}));var n=c(c(c([],t.byRegex,!0),t.byArray,!0),t.byName,!0);if(n.length)return R.apply(void 0,n)},e.prototype.setDefaultProperties=function(e,t){var n=this._defaultProperties.find((function(t){return t.identifier===e}));n?n.data=R(n.data,t):this._defaultProperties.push({identifier:e,data:t})},e.prototype._handleDefaultWebProperties=function(){if(!this._webPropertiesHandled&&this._settings.webProperties.enabled){var e=function(e,t){var n=s(s({},N),e),r={breakpoint:L(n),timestamp:(new Date).toISOString(),hostname:window.location.hostname,url:n.reactiveUrl?S:S(),height:n.reactiveDimensions?D:D(),orientation:n.reactiveDimensions?P:P(),width:n.reactiveDimensions?O:O(),deviceType:window.matchMedia("(hover: none), (pointer: coarse)").matches?"mobile":"desktop",userAgent:window.navigator.userAgent};return t?t.create(r):r}(this._settings.webProperties,this._webPayloadFactory);this.setDefaultProperties(this._settings.webProperties.eventNamePattern,e),this._webPropertiesHandled=!0}},e}(),j=function(e){function t(t,n,r){void 0===r&&(r="GlobalDataLayer");var i=e.call(this,t,n,r)||this;return f(i,"_eventNamePayloadFactory"),f(i,"_webPayloadFactory"),i._eventNamePayloadFactory=new h,i._webPayloadFactory=new A,i.setup(),i}return a(t,e),t.prototype.setup=function(){e.prototype.setup.call(this)},t}(K);function W(e){switch(e){case i.c.PRODUCTION:return"P";case i.c.PREVIEW:return"PP";default:return"K"}}var C=function(){function e(){this.homeNavEventId=/^PAGHomeNav_/,this.initialise()}return e.prototype.initialise=function(){this.gdl=new j},e.prototype.pushDataLayerEvent=function(e,t){t?this.gdl.push(e,t):this.gdl.push(e)},e.prototype.setEnvironment=function(e){this.gdl.setDefaultProperties(this.homeNavEventId,{context:{environment:W(e)}})},e.prototype.setPageName=function(e){this.gdl.setDefaultProperties(this.homeNavEventId,{pageExperience:{pageName:e}})},e.prototype.setUser=function(e,t){this.gdl.setDefaultProperties(this.homeNavEventId,{ids:{userId:e},visitor:{loginStatus:t}})},e.prototype.setLocale=function(e){try{var t=(0,i.s)(e),n=t.country,r=t.language;this.gdl.setDefaultProperties(this.homeNavEventId,{context:{country:n,language:r}})}catch(e){}},e.prototype.setDefaultProperties=function(e,t){var n={context:{applicationId:i.d},visitor:{loginStatus:!1}};try{var r=(0,i.s)(e),a=r.country,s=r.language;n=Object.assign(Object.assign({},n),{context:Object.assign(Object.assign({},n.context),{country:a,language:s,applicationName:i.D})})}catch(e){}(0,o.i)(t)&&(n=Object.assign(Object.assign({},n),{pageExperience:{pageName:t}})),this.gdl.setDefaultProperties(this.homeNavEventId,n)},e}(),G=new C},25992:function(e,t,n){n.r(t),n.d(t,{g:function(){return i}});var r=n(30144);function i(e){var t=[];return null===e||void 0===e||e.querySelectorAll(r.G).forEach((function(e){var n=(0,r.t)(e);null!==n&&t.push(n)})),t}},94114:function(e,t,n){n.r(t),n.d(t,{phn_single_drawer:function(){return w}});var r=n(78056),i=n(95797),o=n(30144),a=n(20725),s=n(88410),l=n(65395),c=n(25992),u=n(39030),f=n(73439),d=n(11926),p=n(98889),g=n(30662);n(69980),n(59379),n(57218),n(47869);function h(e){var t=e.routingKey,n=e.breakpoint,i=e.locale,o=e.receivedContent,a=s.b.state.menu;return(0,r.h)(r.F,null,(0,r.h)("div",{class:"bottom-gradient"}),(0,r.h)("div",{class:"drawer-content"},(0,r.h)("phn-drawer-header",{showBackButton:(0,l.s)(t),backButtonAnalyticsId:a.id,breakpoint:n,route:t,receivedContent:o,locale:i}),(0,r.h)("phn-router",{activeRoutingKey:t,breakpoint:n,locale:i,receivedContent:o})))}function m(){function e(e){(0,o.E)("phn-single-drawer","phnDrawerStatus",{bubbles:!0,composed:!0,detail:{status:e}})}!function(e){var t=e.onAnimationEnds;f.a.register(d.A.TRANSITION_NEXT_LEVEL_SINGLE_DRAWER,(0,f.m)([[{elementSelector:"phn-single-drawer .drawer.animating",animation:{className:"slide-in-from-right-fixed"},onEnd:t}]]))}({onAnimationEnds:function(){return y()}}),function(e){var t=e.onAnimationEnds;f.a.register(d.A.TRANSITION_PREVIOUS_LEVEL_SINGLE_DRAWER,(0,f.m)([[{elementSelector:"phn-single-drawer .drawer.animating",animation:{className:"slide-out-to-right-fixed"},onEnd:t}]]))}({onAnimationEnds:function(){return y()}}),function(e){var t=[[{onStart:e.onAnimationStarts,elementSelector:"phn-single-drawer",animation:{className:"slide-in-from-left",cleanUpAfterAnimation:function(e){e.style.left="0px"}}},{elementSelector:"phn-backdrop",animation:{className:"fade-in-animation",cleanUpAfterAnimation:function(e){e.style.backgroundColor="rgba(0, 0, 0, 0.6)",e.style.opacity="1"}},onEnd:e.onAnimationEnds}]];f.a.register(d.A.OPEN_SINGLE_DRAWER,(0,f.m)(t))}({onAnimationStarts:function(){e(o.F.startOpening)},onAnimationEnds:function(){y(),e(o.F.finishOpening)}}),function(e){var t=[[{onStart:e.onAnimationStarts,elementSelector:"phn-single-drawer",animation:{className:"slide-out-to-left",cleanUpBeforeAnimation:function(e){e.style.left=""},cleanUpAfterAnimation:function(e){e.style.left="-1000px"}}},{elementSelector:"phn-backdrop",animation:{className:"fade-out-animation",cleanUpBeforeAnimation:function(e){e.style.backgroundColor="",e.style.opacity=""}},onEnd:e.onAnimationEnds}]];f.a.register(d.A.CLOSE_SINGLE_DRAWER,(0,f.m)(t))}({onAnimationStarts:function(){e(o.F.startClosing)},onAnimationEnds:function(){e(o.F.finishClosing),(0,l.d)(),s.n.state.usingKeyboard&&setTimeout((function(){(0,o.n)((0,o.J)("phn-burger-button phn-p-button-pure"))}),100)}})}function y(){var e=u.r.state.animatingPointer>u.r.state.routingKeyPointer?u.r.state.routingKeyHistory[u.r.state.animatingPointer]:"";(0,l.d)(),(0,l.p)(),setTimeout((function(){!function(e,t){if(!e)return;var n=(0,o.t)(e.querySelector(".autofocus"));if(null!==n)return void(0,o.n)(n);if(s.n.state.usingKeyboard){var r=null;(0,o.i)(t)&&(r=(0,o.t)(e.querySelector('.active [data-id="'.concat(t,'"]')))),null===r&&(r=(0,o.t)(e.querySelector(".active ".concat(o.G)))),null!==r&&(0,o.n)(r)}else{var i=(0,o.t)(e.querySelector(".first-focus"));null!==i&&(0,o.n)(i)}}((0,o.J)(".drawer"),e)})),p.a.setDrawerType(s.f.SingleDrawer),g.g.pushDataLayerEvent(s.E.DRAWER_LOAD,{componentDisplay:{displayElementType:p.a.calculateDisplayElementType((0,l.g)(),s.h.singleDrawer),displayElementId:p.a.calculateDisplayElementId(),displayElementName:"Single Drawer"}})}var w=function(){function e(e){(0,r.r)(this,e),this.focusTimeout=new a.T(0),this.breakpoint=void 0,this.locale=void 0,this.usingKeyboard=!1,this.receivedContent=!1}return e.prototype.handleKeyDown=function(e){if("Tab"===e.key){var t=(0,o.t)(e.target);if(null!==t){var n=(0,c.g)(this.el.querySelector(".active"));if(0!==n.length){(0,l.g)().startsWith(i.a.DEALER_SEARCH)&&(n=n.filter((function(e){return"BUTTON"!==e.nodeName&&"A"!==e.nodeName})));var r=n[0],a=n[n.length-1];return t===r&&e.shiftKey?(e.preventDefault(),void(null!==a&&(0,o.n)(a))):t!==a||e.shiftKey?void 0:(e.preventDefault(),void(null!==r&&(0,o.n)(r)))}}}},e.prototype.componentWillLoad=function(){m()},e.prototype.disconnectedCallback=function(){this.focusTimeout.cancel(),u.r.reset()},e.prototype.render=function(){var e=(0,l.h)(),t=e.nextRoute,n=e.currentRoute;return(0,r.h)(r.H,null,(0,o.i)(n)?(0,r.h)("div",{class:"drawer active",key:n},(0,r.h)("span",{class:"first-focus",tabIndex:-1,"aria-hidden":"true"}),(0,r.h)(h,{routingKey:n,breakpoint:this.breakpoint,locale:this.locale,receivedContent:this.receivedContent})):null,(0,o.i)(t)?(0,r.h)("div",{class:"drawer animating",style:(0,l.e)()?{left:"100%"}:{},key:t},(0,r.h)(h,{routingKey:t,breakpoint:this.breakpoint,locale:this.locale,receivedContent:this.receivedContent})):null)},Object.defineProperty(e.prototype,"el",{get:function(){return(0,r.g)(this)},enumerable:!1,configurable:!0}),e}();w.style="@-webkit-keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@keyframes transition-forward-in-animation{from{left:150%}to{left:0%}}@-webkit-keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@keyframes transition-backward-in-animation{from{left:-150%}to{left:0%}}@-webkit-keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@keyframes single-drawer-transition-forward-in-animation{from{left:100%}to{left:0%}}@-webkit-keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@-webkit-keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@keyframes slide-in-from-left-absolute{from{left:-1000px}to{left:0px}}@-webkit-keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@-webkit-keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@-webkit-keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@-webkit-keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@-webkit-keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@-webkit-keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@-webkit-keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@-webkit-keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@-webkit-keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@-webkit-keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.transition-forward-animation-out.sc-phn-single-drawer{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:-150% !important}.transition-forward-animation-in.sc-phn-single-drawer{position:relative;-webkit-animation:transition-forward-in-animation 250ms;animation:transition-forward-in-animation 250ms}.transition-backward-animation-out.sc-phn-single-drawer{-webkit-transition:left 250ms;transition:left 250ms;position:relative !important;left:150% !important}.transition-backward-animation-in.sc-phn-single-drawer{position:relative !important;-webkit-animation:transition-backward-in-animation 250ms;animation:transition-backward-in-animation 250ms}.slide-out-to-right-fixed.sc-phn-single-drawer{-webkit-transition:left 400ms;transition:left 400ms;position:fixed;left:100% !important}.slide-in-from-right-fixed.sc-phn-single-drawer{position:fixed;-webkit-animation:single-drawer-transition-forward-in-animation 400ms;animation:single-drawer-transition-forward-in-animation 400ms}.phn-flex-col.sc-phn-single-drawer{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.phn-flex-row.sc-phn-single-drawer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.phn-align-center.sc-phn-single-drawer{-ms-flex-align:center;align-items:center}.phn-justify-around.sc-phn-single-drawer{-ms-flex-pack:distribute;justify-content:space-around}.phn-justify-between.sc-phn-single-drawer{-ms-flex-pack:justify;justify-content:space-between}.phn-flex-wrap.sc-phn-single-drawer{-ms-flex-wrap:wrap;flex-wrap:wrap}.sc-phn-single-drawer-h{display:block;position:fixed;top:0;left:-1000px;height:100vh;width:100vw;z-index:301}.slide-in-from-left.sc-phn-single-drawer-h{position:absolute;-webkit-animation:slide-in-from-left-absolute 600ms;animation:slide-in-from-left-absolute 600ms}.slide-out-to-left.sc-phn-single-drawer-h{position:absolute;animation:slide-in-from-left-absolute 600ms reverse}.sc-phn-single-drawer-h .drawer.sc-phn-single-drawer{z-index:301;background-color:#fff;position:absolute;left:0}.sc-phn-single-drawer-h .drawer.sc-phn-single-drawer .drawer-content.sc-phn-single-drawer{overflow-y:auto;height:100vh;width:100vw;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 1.6875rem 6.25rem 1.6875rem}@media (min-width: 480px){.sc-phn-single-drawer-h .drawer.sc-phn-single-drawer .drawer-content.sc-phn-single-drawer{padding:0 2.1875rem 6.25rem 2.1875rem}}@media (min-width: 760px){.sc-phn-single-drawer-h .drawer.sc-phn-single-drawer .drawer-content.sc-phn-single-drawer{padding:0 3.375rem 6.25rem 3.375rem}}@media (min-width: 1000px){.sc-phn-single-drawer-h .drawer.sc-phn-single-drawer .drawer-content.sc-phn-single-drawer{padding:0 2.25rem 6.25rem 2.25rem}}.sc-phn-single-drawer-h .drawer.sc-phn-single-drawer .drawer-content.sc-phn-single-drawer phn-drawer-header.sc-phn-single-drawer{-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:1.125rem;margin-bottom:1.9375rem}@media (min-width: 480px){.sc-phn-single-drawer-h .drawer.sc-phn-single-drawer .drawer-content.sc-phn-single-drawer phn-drawer-header.sc-phn-single-drawer{margin-top:2rem;margin-bottom:2.3125rem}}@media (min-width: 760px){.sc-phn-single-drawer-h .drawer.sc-phn-single-drawer .drawer-content.sc-phn-single-drawer phn-drawer-header.sc-phn-single-drawer{margin-bottom:1.25rem}}.sc-phn-single-drawer-h .drawer.sc-phn-single-drawer .drawer-content.sc-phn-single-drawer phn-router.sc-phn-single-drawer{padding-bottom:4rem}.sc-phn-single-drawer-h .drawer.sc-phn-single-drawer .bottom-gradient.sc-phn-single-drawer{height:10rem;background:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0)), to(rgb(255, 255, 255)));background:linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(255, 255, 255));opacity:1;position:absolute;width:100%;bottom:0;margin-left:-1.5rem;pointer-events:none;margin-left:0;z-index:1}"},39030:function(e,t,n){n.r(t),n.d(t,{r:function(){return r}});var r=(0,n(88410).e)({routingKeyHistory:[],routingKeyPointer:-1,animatingPointer:-1,initialRoutingKeyHistory:null,initialRoutingKeyPointer:null})},65395:function(e,t,n){n.r(t),n.d(t,{a:function(){return D},b:function(){return N},c:function(){return v},d:function(){return O},e:function(){return R},f:function(){return b},g:function(){return y},h:function(){return f},i:function(){return S},j:function(){return _},p:function(){return E},r:function(){return x},s:function(){return L}});var r=n(39030),i=n(95797),o=n(30144),a=n(69980),s=n(59379),l=n(73439),c=n(11926),u=function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},f=function(){return{OPENING:d,CLOSING:p,FORWARD:g,BACKWARDS:h,UNCHANGED:m}[function(){if(N())return"OPENING";if(P())return"CLOSING";if(R())return"FORWARD";if(A())return"BACKWARDS";return"UNCHANGED"}()]()};var d=function(){return l.a.play(c.A.OPEN_SINGLE_DRAWER),{nextRoute:"",currentRoute:y()}},p=function(){return l.a.play(c.A.CLOSE_SINGLE_DRAWER).then((function(){})),{nextRoute:y()||"",currentRoute:w()||""}},g=function(){var e,t;return setTimeout((function(){l.a.play(c.A.TRANSITION_NEXT_LEVEL_SINGLE_DRAWER)})),{nextRoute:null!==(e=y())&&void 0!==e?e:"",currentRoute:null!==(t=w())&&void 0!==t?t:""}},h=function(){var e,t;return""!==y()&&setTimeout((function(){l.a.play(c.A.TRANSITION_PREVIOUS_LEVEL_SINGLE_DRAWER)})),{nextRoute:null!==(e=w())&&void 0!==e?e:"",currentRoute:null!==(t=y())&&void 0!==t?t:""}},m=function(){return{nextRoute:"",currentRoute:y()}},y=function(){var e=r.r.state;return e.routingKeyHistory[e.routingKeyPointer]||""},w=function(){var e=r.r.state;return e.routingKeyHistory[e.animatingPointer]||""},v=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=u([i.a.MAIN_MENU],e,!0);r.r.state.routingKeyPointer=e.length,r.r.state.routingKeyHistory=n},b=function(){(function(){try{return[c.A.OPEN_SINGLE_DRAWER,c.A.CLOSE_SINGLE_DRAWER,c.A.TRANSITION_NEXT_LEVEL_SINGLE_DRAWER,c.A.TRANSITION_PREVIOUS_LEVEL_SINGLE_DRAWER].some((function(e){try{return l.a.isPlaying(e)}catch(e){return!1}}))}catch(e){return!1}})()||((0,i.f)(y())===i.a.DEALER_SEARCH&&(s.d.state.savedDealerCookie=null),r.r.state.routingKeyPointer=r.r.state.routingKeyPointer-1)},E=function(){k()&&r.r.state.routingKeyHistory.pop()},_=function(e){if((0,o.l)(a.w.getBreakpoint()))(0,o.E)("phn-router","mobileMenuItemClick",{bubbles:!0,cancelable:!1,detail:[i.c.apply(void 0,u([y()],e,!1))]});else{var t=u(u([],r.r.state.routingKeyHistory,!0),[i.c.apply(void 0,u([y()],e,!1))],!1);r.r.state.routingKeyPointer=t.length-1,r.r.state.routingKeyHistory=t}},x=function(){r.r.state.routingKeyPointer=-1},k=function(){return r.r.state.routingKeyPointer<r.r.state.routingKeyHistory.length-1},R=function(){return r.r.state.routingKeyPointer>r.r.state.animatingPointer},A=function(){return r.r.state.routingKeyPointer<r.r.state.animatingPointer},N=function(){return r.r.state.animatingPointer===i.R.LEVEL_ZERO&&r.r.state.routingKeyPointer>=0},S=function(){return!D()},D=function(){return r.r.state.routingKeyPointer===i.R.LEVEL_ZERO&&r.r.state.animatingPointer===i.R.LEVEL_ZERO},P=function(){return-1===r.r.state.routingKeyPointer&&r.r.state.animatingPointer>=0},O=function(){r.r.state.animatingPointer=r.r.state.routingKeyPointer},L=function(e){return r.r.state.routingKeyHistory.indexOf(e)>=i.R.LEVEL_TWO}},20725:function(e,t,n){n.r(t),n.d(t,{T:function(){return o}});var r=function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function s(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){e.done?n(e.value):i(e.value).then(a,s)}l((r=r.apply(e,t||[])).next())}))},i=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},o=function(){function e(e){this.delay=e,this.timer=null}return e.prototype.set=function(e){var t=this;this.cancel(),this.timer=setTimeout((function(){return r(t,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,e()];case 1:return t.sent(),this.cancel(),[2]}}))}))}),this.delay)},e.prototype.cancel=function(){null!==this.timer&&(clearTimeout(this.timer),"function"===typeof this.timer.unref&&this.timer.unref(),this.timer=null)},e}()}}]);
//# sourceMappingURL=4114.1f837b3b.chunk.js.map