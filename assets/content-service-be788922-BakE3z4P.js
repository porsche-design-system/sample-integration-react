import{n as g,g as y,s as p,x as S,j as l,k as u,A as w,y as L}from"./nav-content-store-3a60a6a5-DLLiQusp.js";import{m as $}from"./shop-helper-cb03a905-BY9OArR1.js";const f={OK:200,badRequest:400,unauthorized:401,notFound:404,internalServerError:500},v=new Map;async function T(o){var C;const{locale:t}=g.state,n=y(g.state.env),e=o===w.shop,a=n.CONTENT_URL,i=m(a,t),c=e?E(n.SHOP_CONTENT_URL,t):Promise.resolve(null),[r,d]=await Promise.allSettled([i,c]);if(r.status==="rejected")throw r.reason;const s=$(t,o,r.value),h=d.status==="fulfilled"?d.value:null;return h===null||s.shop===null?s:{...s,shop:{...s.shop,children:h.menuItems||((C=s.shop)==null?void 0:C.children)||[],additionalContent:h.additionalContent,availableLocales:s.shop.availableLocales,availableLocalesOnlyForShop:s.shop.availableLocalesOnlyForShop}}}async function m(o,t){const{country:n,language:e}=p(t),a=S(o,t),i=v.get(a);if(i!==void 0)return i;const c=await fetch(`${o}/${`${e}-${n}`}.json`,{headers:{"Cache-Control":"no-cache","Content-Type":"application/json"}});if(c.status===f.notFound)throw new l(`No content for locale ${t} found`,u.NO_RESULTS);if(c.status===f.internalServerError)throw new l(`Could not get content for locale ${t}`,u.GENERAL);const r=await c.json();return v.set(a,r),r}async function E(o,t){const{country:n,language:e}=p(t),a=await fetch(`${o}/${n.toLowerCase()}/${`${e}-${n}`}/navigation`,{headers:{"Content-Type":"application/json","x-vercel-protection-bypass":"hXMkVgu6erfnX2ydOdeSCixWDWbPjBUk"}});if(a.status===f.notFound)throw new l(`No shop content for locale ${t} found`,u.NO_RESULTS);if(!a.ok)throw new l(`Could not get shop content for locale ${t}`,u.GENERAL);return a.json()}function N(o,t){const{country:n}=p(t);let e=n;return e.includes("-")&&!L(e)&&(e=n.split("-")[0]),`${o}/flags/${e}.svg`}async function b(o,t){try{const n=N(o,t);if((await fetch(n)).ok)return n}catch{}return""}export{f as S,T as f,b as g};
