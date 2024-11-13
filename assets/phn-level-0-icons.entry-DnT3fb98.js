import{r as $,c as M,h as e,F as D}from"./index-DSXMXYxF.js";import{a as R}from"./routing-key-528e38cb-BvgljPZp.js";import{d as w,n as j,e as E,I as z,a as v,N as f,z as K,B as p,G as V,o as _}from"./nav-content-store-3a60a6a5-DLLiQusp.js";import{i as L,h as x,s as F}from"./shop-helper-cb03a905-BY9OArR1.js";import{b as I,f as B,a as N}from"./navigation-drawer-service-42fe5056-slwEz4J3.js";class U{constructor(){this.eventAction=_.GENERAL_LOAD,this.eventAttributes={}}withAction(t){this.eventAction=t}withComponentClick(t){this.eventAttributes.componentClick=t}pushEvent(){V.getInstance().pushDataLayerEvent(this.eventAction,this.eventAttributes)}}function S(n,t,i){V.getInstance().pushDataLayerEvent(_.CONTEXTUAL_BUTTON_CLICK,{componentClick:{clickElementId:n,clickElementName:t,...i&&{targetUrl:i}}})}function C(n,t,i){const o=new U;o.withAction(_.PCOM_SEARCH_CLICK),o.withComponentClick({clickElementId:t,clickElementName:i,targetUrl:n}),o.pushEvent()}const y=({numberOfItems:n,theme:t,mode:i})=>{const a=n<99?n:"99+";return n<=0?"":e("span",{class:`badge-item-count ${n<10?"":"pill"} ${p(t,i)}`,"data-id":"badge-item-count"},a)},b=function(){return e("div",{class:"skeleton-container"},e("div",{class:"pure-button-skeleton"}))},g=function(){return e("div",{class:"skeleton-container"},e("div",{class:"pure-button-skeleton-dark"}))},P=function(){return e("div",{class:"skeleton-container"},e("div",{class:"burger-button-skeleton"}))},G=function(){return e("div",{class:"skeleton-container"},e("div",{class:"burger-button-skeleton-dark"}))};function W({mode:n,theme:t,isNavigationLoaded:i,isDesktop:o}){var k,A,O;const{myPorsche:s,vehiclePurchase:c,level0:a}=w.state,{savedSearchesCount:l,savedVehiclesCount:r}=B.state,d=((k=s==null?void 0:s.savedSearches)==null?void 0:k.link)??"",u=((A=s==null?void 0:s.savedVehicles)==null?void 0:A.link)??"",m=((O=c.savedVehicles)==null?void 0:O.link)??"",h=function(T){return T==="searches"?`My saved searches, ${l} searches saved`:`My saved vehicles, ${r} vehicles saved`};return{leftIcons:s?e("div",{class:"icon tooltip"},e("phn-p-link-pure",{target:"_self","hide-label":"true",icon:"none",theme:p(t,n),style:i?{}:{display:"none"},className:"saved-items","data-test-id":"saved-searches-link",onClick:()=>{C(d,"mainmenu.finder.savedsearches","Saved Searches")}},e("a",{href:d,"aria-label":h("searches")},e("div",{class:"icon-flex"},e(y,{numberOfItems:l,theme:t,mode:n}),e("phn-p-icon",{theme:p(t,n),name:x("star",l),"data-test-id":"saved-searches-link-icon"})))),o?e("span",{class:"tooltip-text finder_icon","data-test-id":"saved-searches-tooltip-text"},a["mainmenu.level0.finder.savedsearches"]):null,i?null:n===v.hero&&t===f.dark?g():b()):null,rightIcons:s?e("div",{class:"icon tooltip"},e("phn-p-link-pure",{target:"_self","hide-label":"true",icon:"none",theme:p(t,n),style:i?{}:{display:"none"},class:"saved-items","data-test-id":"saved-vehicles-link",onClick:()=>{C(u,"mainmenu.finder.savedvehicles","Saved Vehicles")}},e("a",{href:u,"aria-label":h("vehicle")},e("div",{class:"icon-flex"},e(y,{numberOfItems:r,theme:t,mode:n}),e("phn-p-icon",{theme:p(t,n),name:x("bookmark",r),"data-test-id":"saved-vehicles-link-icon"})))),o?e("span",{class:"tooltip-text finder_icon","data-test-id":"saved-vehicles-tooltip-text"},a["mainmenu.level0.finder.savedvehicles"]):null,i?null:n===v.hero&&t===f.dark?g():b()):e("div",{class:"icon tooltip"},e("phn-p-link-pure",{target:"_self","hide-label":"true",icon:"none",theme:p(t,n),style:i?{}:{display:"none"},class:"saved-items","data-test-id":"saved-vehicles-link",onClick:()=>{C(m,"mainmenu.finder.savedvehicles","Saved Vehicles")}},e("a",{href:m,"aria-label":h("vehicle")},e("div",{class:"icon-flex"},e(y,{numberOfItems:r,theme:t,mode:n}),e("phn-p-icon",{theme:p(t,n),name:x("bookmark",r),"data-test-id":"saved-vehicles-link-icon"})))),o?e("span",{class:"tooltip-text finder_icon","data-test-id":"saved-vehicles-tooltip-text"},a["mainmenu.level0.finder.savedvehicles"]):null,i?null:n===v.hero&&t===f.dark?g():b())}}function H({locale:n,app:t,mode:i,theme:o,isNavigationLoaded:s,isDesktop:c}){var k;const{shopInformation:a}=F.state,{shop:l,level0:r}=w.state,d=(l==null?void 0:l.cart)??"",u=((k=l==null?void 0:l.wishlist)==null?void 0:k.link)??"",m=function(){return`My shopping bag, ${a.numberOfShoppingItems} items, estimated subtotal ${a.subTotal}`},h=function(){return`My wishlist, ${a.wishlistItemsNumber} items`};return{leftIcons:L(l,n,t)?e("div",{class:"icon tooltip"},e("phn-p-button-pure",{icon:"search","hide-label":"true",stretch:"true",aria:"{ 'aria-haspopup': 'dialog', 'aria-label' : 'open the shop search field' }","data-test-id":"search-button",onClick:async()=>{S("mainmenu.shop.search","Shop search"),await N()},style:s?{}:{display:"none"},theme:p(o,i)}),c?e("span",{class:"tooltip-text search_icon","data-test-id":"search-tooltip-text"},r["mainmenu.level0.shop.search"]):null,s?null:i===v.hero&&o===f.dark?g():b()):null,rightIcons:L(l,n,t)?e(D,null,c?e("div",{class:"icon tooltip"},e("phn-p-link-pure",{target:"_self","hide-label":"true",icon:"none",theme:p(o,i),style:s?{}:{display:"none"},className:"wishlist-link","data-test-id":"wishlist-link",onClick:()=>{S("mainmenu.shop.wishlist","Wishlist",u)}},e("a",{href:u,"aria-label":h()},e("div",{class:"icon-flex"},e(y,{numberOfItems:a.wishlistItemsNumber,theme:o,mode:i}),e("phn-p-icon",{theme:p(o,i),name:x("heart",a.wishlistItemsNumber),"data-test-id":"wishlist-link-icon"})))),e("span",{class:"tooltip-text shop_icon","data-test-id":"wishlist-tooltip-text"},r["mainmenu.level0.shop.wishlist"])):null,!s&&c?i===v.hero&&o===f.dark?g():b():null,e("div",{class:"icon tooltip"},e("phn-p-link-pure",{target:"_self","hide-label":"true",icon:"none",theme:p(o,i),style:s?{}:{display:"none"},class:"shopping-cart-link","data-test-id":"shopping-cart-link",onClick:()=>{S("mainmenu.shop.shoppingbag","Shopping cart",d)}},e("a",{href:d,"aria-label":m()},e("div",{class:"icon-flex"},e(y,{numberOfItems:a.numberOfShoppingItems,theme:o,mode:i}),e("phn-p-icon",{theme:p(o,i),name:x("shopping-bag",a.numberOfShoppingItems),"data-test-id":"shopping-cart-link-icon"})))),c?e("span",{class:"tooltip-text shop_icon","data-test-id":"shopping-cart-tooltip-text"},r["mainmenu.level0.shop.shoppingbag"]):null,s?null:i===v.hero&&o===f.dark?g():b())):null}}function X({mode:n,theme:t,isNavigationLoaded:i,isDesktop:o}){var h,k;const{myPorsche:s,level0:c,vehiclePurchase:a}=w.state,{savedVehiclesCount:l}=B.state,r=((h=s==null?void 0:s.savedVehicles)==null?void 0:h.link)??"",d=((k=a==null?void 0:a.savedVehicles)==null?void 0:k.link)??"",[u]=s?[r]:[d],m=function(){return`My saved vehicles, ${l} vehicles saved`};return{leftIcons:null,rightIcons:e("div",{class:"icon tooltip"},e("phn-p-link-pure",{target:"_self","hide-label":"true",icon:"none",theme:p(t,n),style:i?{}:{display:"none"},class:"saved-items","data-test-id":"saved-vehicles-link",onClick:()=>{C(u,"mainmenu.icc.savedvehicles","Saved Vehicles")}},e("a",{href:u,"aria-label":m()},e("div",{class:"icon-flex"},e(y,{numberOfItems:l,theme:t,mode:n}),e("phn-p-icon",{theme:p(t,n),name:x("bookmark",l),"data-test-id":"saved-vehicles-link-icon"})))),o?e("span",{class:"tooltip-text finder_icon","data-test-id":"saved-vehicles-tooltip-text"},c["mainmenu.level0.finder.savedvehicles"]):null,i?null:n===v.hero&&t===f.dark?g():b())}}function q({mode:n,theme:t,isNavigationLoaded:i,isDesktop:o}){const{shopInformation:s}=F.state,{connect:c,level0:a}=w.state,l=window.location.search,r=c?c.cart+l:"",d=function(){return`My shopping cart, ${s.numberOfShoppingItems} items, estimated subtotal ${s.subTotal}`};return{leftIcons:null,rightIcons:c!=null&&c.cart?e(D,null,e("div",{class:"icon tooltip"},e("phn-p-link-pure",{target:"_self","hide-label":"true",icon:"none",theme:p(t,n),style:i?{}:{display:"none"},class:"shopping-cart-link","data-test-id":"shopping-cart-link",onClick:()=>{S("mainmenu.connect.shoppingcart","Shopping cart",r)}},e("a",{href:r,"aria-label":d()},e("div",{class:"icon-flex"},e(y,{numberOfItems:s.numberOfShoppingItems,theme:t,mode:n}),e("phn-p-icon",{theme:p(t,n),name:x("shopping-cart",s.numberOfShoppingItems),"data-test-id":"shopping-cart-link-icon"})))),o?e("span",{class:"tooltip-text shop_icon","data-test-id":"shopping-cart-tooltip-text"},a["mainmenu.level0.connect.shoppingcart"]):null,i?null:n===v.hero&&t===f.dark?g():b())):null}}const Y='@keyframes translate-forward-in-animation{from{translate:0 12px}to{translate:0 0px}}@keyframes fade-in-animation{from{opacity:0;background-color:rgba(0, 0, 0, 0)}to{opacity:1;background-color:rgba(0, 0, 0, 0.6)}}@keyframes translate-in-from-left{from{translate:-1000px}to{translate:0px}}@keyframes slideDown{from{max-height:0}to{max-height:1000px}}@keyframes slideUp{from{max-height:1000px}to{max-height:0}}@keyframes slideLeft{from{max-width:0}to{max-width:1000px}}@keyframes slideRight{from{max-width:1000px}to{max-width:0}}@keyframes darken{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.8)}}@keyframes lighten{from{background-color:rgba(0, 0, 0, 0.8)}to{background-color:rgba(0, 0, 0, 0)}}@keyframes fadeInFromBottom{0%{opacity:0;top:36px}100%{opacity:1;top:0px}}@keyframes fadeOutToTop{0%{opacity:1;bottom:0px}100%{opacity:0;bottom:16px}}@keyframes slideLeftDoubleDrawer{from{right:-1000px}to{right:0px}}@keyframes slideRightDoubleDrawer{from{right:0px}to{right:-1000px}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeOut{to{opacity:0}}.translate-forward-animation-in.sc-phn-level-0-icons{opacity:1}@media (prefers-reduced-motion: no-preference){.translate-forward-animation-in.sc-phn-level-0-icons{animation:translate-forward-in-animation 0.25s cubic-bezier(0.25, 0.1, 0.25, 1)}}@media (prefers-reduced-motion: no-preference){.translate-forward-animation-out.sc-phn-level-0-icons,.translate-backward-animation-out.sc-phn-level-0-icons{animation:fadeOut 0.25s cubic-bezier(0.25, 0.1, 0.25, 1)}}@media (prefers-reduced-motion: no-preference){.translate-backward-animation-in.sc-phn-level-0-icons{animation:fadeIn 0.25s cubic-bezier(0.25, 0.1, 0.25, 1), translate-forward-in-animation 0.25s cubic-bezier(0.25, 0.1, 0.25, 1)}}@media (prefers-reduced-motion: no-preference){.mobile-transition-forward.sc-phn-level-0-icons{animation:fadeIn 0.25s cubic-bezier(0.25, 0.1, 0.25, 1), translate-forward-in-animation 0.25s cubic-bezier(0.25, 0.1, 0.25, 1)}}.phn-flex-col.sc-phn-level-0-icons{display:flex;flex-direction:column}.phn-flex-row.sc-phn-level-0-icons{display:flex;flex-direction:row}.phn-align-center.sc-phn-level-0-icons{align-items:center}.phn-justify-around.sc-phn-level-0-icons{justify-content:space-around}.phn-justify-between.sc-phn-level-0-icons{justify-content:space-between}.phn-flex-wrap.sc-phn-level-0-icons{flex-wrap:wrap}.tooltip.sc-phn-level-0-icons{position:relative;display:inline-block}.tooltip-text.sc-phn-level-0-icons{visibility:hidden;width:inherit;white-space:nowrap;background-color:#404044;border-radius:2px;font-size:13px;color:#fff;text-align:center;padding:0px 4px 0px 4px;position:absolute;z-index:100;left:50%;transform:translateX(-50%)}.tooltip.sc-phn-level-0-icons:hover .tooltip-text.sc-phn-level-0-icons{visibility:visible}.tooltip-text.level0_icon.sc-phn-level-0-icons{bottom:-1.7em}.tooltip-text.search_icon.sc-phn-level-0-icons{bottom:-1.65em}.tooltip-text.shop_icon.sc-phn-level-0-icons{bottom:-1.5em}.tooltip-text.finder_icon.sc-phn-level-0-icons{bottom:-1.5em}.tooltip-text.logo.sc-phn-level-0-icons{bottom:-1.5em}.tooltip-text.my_porsche_icon.sc-phn-level-0-icons{bottom:-1.5em}.contextual-icons.sc-phn-level-0-icons{display:grid;grid-template-columns:1fr auto 1fr;grid-template-rows:1fr;gap:0px 0px;grid-template-areas:"left center right";width:100%}.contextual-icons.sc-phn-level-0-icons div.left-icons.sc-phn-level-0-icons,.contextual-icons.sc-phn-level-0-icons div.right-icons.sc-phn-level-0-icons{display:flex;flex-direction:row;align-items:center}.contextual-icons.sc-phn-level-0-icons div.left-icons.sc-phn-level-0-icons{grid-area:left;justify-self:start}.contextual-icons.sc-phn-level-0-icons-s>*,.contextual-icons .sc-phn-level-0-icons-s>*{grid-area:center;justify-self:center}.contextual-icons.sc-phn-level-0-icons div.right-icons.sc-phn-level-0-icons{grid-area:right;justify-self:end}.contextual-icons.sc-phn-level-0-icons .icon-flex.sc-phn-level-0-icons{display:flex;justify-content:center}.contextual-icons.sc-phn-level-0-icons div.icon.sc-phn-level-0-icons{position:relative;padding:0.375rem}.contextual-icons.sc-phn-level-0-icons div.icon.sc-phn-level-0-icons .shopping-cart-link.sc-phn-level-0-icons,.contextual-icons.sc-phn-level-0-icons div.icon.sc-phn-level-0-icons saved-items.sc-phn-level-0-icons{position:relative;z-index:2}.contextual-icons.sc-phn-level-0-icons div.icon.sc-phn-level-0-icons .badge-item-count.sc-phn-level-0-icons{color:white;position:absolute;margin-left:17px;margin-top:-6px;z-index:12;font-size:11px;line-height:8px;width:14px;height:8px;padding:4px 1px;text-align:center;border-radius:10px}.contextual-icons.sc-phn-level-0-icons div.icon.sc-phn-level-0-icons .badge-item-count.pill.sc-phn-level-0-icons{margin-left:23px;font-size:10px;width:20px;height:7px}.contextual-icons.sc-phn-level-0-icons div.icon.sc-phn-level-0-icons .badge-item-count.light.sc-phn-level-0-icons{background-color:#cc1922}.contextual-icons.sc-phn-level-0-icons div.icon.sc-phn-level-0-icons .badge-item-count.dark.sc-phn-level-0-icons{background-color:#cc1922}@media (min-width: 1000px){.contextual-icons.sc-phn-level-0-icons div.icon.sc-phn-level-0-icons{padding:0.5rem}}@media (min-width: 1760px){.contextual-icons.sc-phn-level-0-icons div.icon.sc-phn-level-0-icons{padding:0.75rem}}.skeleton-container.sc-phn-level-0-icons{flex:1;display:flex;height:28px}.skeleton-container.sc-phn-level-0-icons .burger-button-skeleton.sc-phn-level-0-icons{margin-right:0.375rem;width:1.5rem;height:1.5rem;border-radius:4px;background:#eeeff2 linear-gradient(to right, transparent 0%, #f7f7f7 20%, transparent 50%) 0 0/200% 100%;display:block;border-radius:4px;animation:skeletonAnimation 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) infinite}@keyframes skeletonAnimation{from{background-position-x:100%}to{background-position-x:-100%}}@media (min-width: 760px){.skeleton-container.sc-phn-level-0-icons .burger-button-skeleton.sc-phn-level-0-icons{width:4.75rem;height:1.5rem}}.skeleton-container.sc-phn-level-0-icons .burger-button-skeleton-dark.sc-phn-level-0-icons{margin-right:0.375rem;width:1.5rem;height:1.5rem;border-radius:4px;background:#212225 linear-gradient(to right, transparent 0%, #1a1b1e 20%, transparent 50%) 0 0/200% 100%;display:block;border-radius:4px;animation:skeletonAnimation 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) infinite}@keyframes skeletonAnimation{from{background-position-x:100%}to{background-position-x:-100%}}@media (min-width: 760px){.skeleton-container.sc-phn-level-0-icons .burger-button-skeleton-dark.sc-phn-level-0-icons{width:4.75rem;height:1.5rem}}.skeleton-container.sc-phn-level-0-icons .pure-button-skeleton.sc-phn-level-0-icons{width:1.5rem;height:1.5rem;border-radius:4px;background:#eeeff2 linear-gradient(to right, transparent 0%, #f7f7f7 20%, transparent 50%) 0 0/200% 100%;display:block;border-radius:4px;animation:skeletonAnimation 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) infinite}@keyframes skeletonAnimation{from{background-position-x:100%}to{background-position-x:-100%}}.skeleton-container.sc-phn-level-0-icons .pure-button-skeleton-dark.sc-phn-level-0-icons{width:1.5rem;height:1.5rem;border-radius:4px;background:#212225 linear-gradient(to right, transparent 0%, #1a1b1e 20%, transparent 50%) 0 0/200% 100%;display:block;border-radius:4px;animation:skeletonAnimation 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) infinite}@keyframes skeletonAnimation{from{background-position-x:100%}to{background-position-x:-100%}}',J=Y,Q=class{constructor(n){$(this,n),this.openDrawer=M(this,"openDrawer",7),this.breakpoint=void 0,this.isLoading=void 0,this.isNavigationLoaded=void 0}render(){const{shop:n,myPorsche:t,level0:i}=w.state,{locale:o,app:s,mode:c,theme:a}=j.state,l={locale:o,app:s,mode:c,theme:a,isNavigationLoaded:this.isNavigationLoaded,isDesktop:E(this.breakpoint)},r={shop:()=>H(l),finder:()=>W(l),icc:()=>X(l),"connect-store":()=>q(l),default:()=>({leftIcons:null,rightIcons:null})},d=K(r,s),u=r[d],m=u();return e("div",{class:"contextual-icons"},e("div",{class:"left-icons"},e("phn-burger-button",{theme:a,mode:c,hideLabel:L(n,o,s)?this.breakpoint<=I.xs:this.breakpoint<I.xs,alignLabel:"end",isLoading:this.isLoading,onClick:h=>{this.openDrawer.emit({initialRoutingKey:"",isKeyboardClick:z(h)})},style:this.isNavigationLoaded?{}:{display:"none"}}),this.isNavigationLoaded?null:c===v.hero&&a===f.dark?G():P(),this.breakpoint<=I.xs?m.leftIcons:null),e("slot",null),e("div",{class:"right-icons"},this.breakpoint>I.xs?m.leftIcons:null,m.rightIcons,t?e("div",{class:"icon tooltip"},e("phn-my-porsche-icon-button",{mode:c,theme:a,onClick:h=>{this.openDrawer.emit({initialRoutingKey:R.MY_PORSCHE,isKeyboardClick:z(h)})},style:this.isNavigationLoaded?{}:{display:"none"}}),E(this.breakpoint)?e("span",{class:"tooltip-text my_porsche_icon","data-test-id":"my-porsche-tooltip-text"},i["mainmenu.level0.usericon"]):null,this.isNavigationLoaded?null:c===v.hero&&a===f.dark?g():b()):null))}};Q.style=J;export{Q as phn_level_0_icons};
