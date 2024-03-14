import{isServer as $,createComponent as h,spread as D,useAssets as V,ssr as b,escape as v,getRequestEvent as N,delegateEvents as ae,ssrElement as O,mergeProps as se,ssrHydrationKey as E,NoHydration as G,HydrationScript as ie,ssrAttribute as T,Hydration as le,renderToString as ce,renderToStream as ue}from"solid-js/web";import{createContext as de,sharedConfig as A,createUniqueId as he,useContext as fe,createRenderEffect as me,onCleanup as P,children as pe,createMemo as L,getOwner as ge,untrack as we,Show as Y,on as ye,createRoot as ve,createSignal as be,lazy as Ee,createComponent as Ce,Suspense as $e,ErrorBoundary as Se}from"solid-js";import{c as Ne,a as Re,R as Te,g as x,b as Ae,d as Le,e as ke,m as Pe,f as Oe,k as xe,s as Me,h as Ie,n as qe,i as Fe,j as je,l as De,o as He,p as H,q as Ue,r as _e}from"./assets/client-BSRlgb_c.js";import{provideRequestEvent as Be}from"solid-js/web/storage";import{eventHandler as Ke}from"h3";import"node:async_hooks";const Q=de(),X=["title","meta"],M=[],I=["name","http-equiv","content","charset","media"].concat(["property"]),k=(e,n)=>{const t=Object.fromEntries(Object.entries(e.props).filter(([r])=>n.includes(r)).sort());return(Object.hasOwn(t,"name")||Object.hasOwn(t,"property"))&&(t.name=t.name||t.property,delete t.property),e.tag+JSON.stringify(t)};function We(){if(!A.context){const t=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(t,r=>r.parentNode.removeChild(r))}const e=new Map;function n(t){if(t.ref)return t.ref;let r=document.querySelector(`[data-sm="${t.id}"]`);return r?(r.tagName.toLowerCase()!==t.tag&&(r.parentNode&&r.parentNode.removeChild(r),r=document.createElement(t.tag)),r.removeAttribute("data-sm")):r=document.createElement(t.tag),r}return{addTag(t){if(X.indexOf(t.tag)!==-1){const s=t.tag==="title"?M:I,a=k(t,s);e.has(a)||e.set(a,[]);let i=e.get(a),l=i.length;i=[...i,t],e.set(a,i);let d=n(t);t.ref=d,D(d,t.props);let m=null;for(var r=l-1;r>=0;r--)if(i[r]!=null){m=i[r];break}return d.parentNode!=document.head&&document.head.appendChild(d),m&&m.ref&&document.head.removeChild(m.ref),l}let o=n(t);return t.ref=o,D(o,t.props),o.parentNode!=document.head&&document.head.appendChild(o),-1},removeTag(t,r){const o=t.tag==="title"?M:I,s=k(t,o);if(t.ref){const a=e.get(s);if(a){if(t.ref.parentNode){t.ref.parentNode.removeChild(t.ref);for(let i=r-1;i>=0;i--)a[i]!=null&&document.head.appendChild(a[i].ref)}a[r]=null,e.set(s,a)}else t.ref.parentNode&&t.ref.parentNode.removeChild(t.ref)}}}}function Je(){const e=[];return V(()=>b(Ge(e))),{addTag(n){if(X.indexOf(n.tag)!==-1){const t=n.tag==="title"?M:I,r=k(n,t),o=e.findIndex(s=>s.tag===n.tag&&k(s,t)===r);o!==-1&&e.splice(o,1)}return e.push(n),e.length},removeTag(n,t){}}}const ze=e=>{const n=$?Je():We();return h(Q.Provider,{value:n,get children(){return e.children}})},Z=(e,n,t)=>(Ve({tag:e,props:n,setting:t,id:he(),get name(){return n.name||n.property}}),null);function Ve(e){const n=fe(Q);if(!n)throw new Error("<MetaProvider /> should be in the tree");me(()=>{const t=n.addTag(e);P(()=>n.removeTag(e,t))})}function Ge(e){return e.map(n=>{const r=Object.keys(n.props).map(s=>s==="children"?"":` ${s}="${v(n.props[s],!0)}"`).join(""),o=n.props.children;return n.setting?.close?`<${n.tag} data-sm="${n.id}"${r}>${n.setting?.escape?v(o):o||""}</${n.tag}>`:`<${n.tag} data-sm="${n.id}"${r}/>`}).join("")}const Ye=e=>Z("title",e,{escape:!0,close:!0}),U=e=>Z("meta",e),ee=e=>n=>{const{base:t}=n,r=pe(()=>n.children),o=L(()=>Ne(r(),n.base||""));let s;const a=Re(e,()=>s,o,{base:t,singleFlight:n.singleFlight}),i=a.location;return e.create&&e.create(a),h(Te.Provider,{value:a,get children(){return h(Qe,{location:i,get root(){return n.root},get load(){return n.rootLoad},get children(){return[(s=ge())&&null,h(Xe,{routerState:a,get branches(){return o()}})]}})}})};function Qe(e){const n=e.location,t=L(()=>e.load&&we(()=>e.load({params:{},location:n,intent:"preload"})));return h(Y,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:r=>h(r,{params:{},location:n,get data(){return t()},get children(){return e.children}})})}function Xe(e){const n=L(()=>x(e.branches,e.routerState.location.pathname));if($){const a=N();if(a&&a.router&&a.router.dataOnly){Ze(a,e.routerState,e.branches);return}a&&((a.router||(a.router={})).matches||(a.router.matches=n().map(({route:i,path:l,params:d})=>({path:i.originalPath,pattern:i.pattern,match:l,params:d,info:i.info}))))}const t=Ae(()=>{const a=n(),i={};for(let l=0;l<a.length;l++)Object.assign(i,a[l].params);return i}),r=[];let o;const s=L(ye(n,(a,i,l)=>{let d=i&&a.length===i.length;const m=[];for(let f=0,y=a.length;f<y;f++){const w=i&&i[f],c=a[f];l&&w&&c.route.key===w.route.key?m[f]=l[f]:(d=!1,r[f]&&r[f](),ve(u=>{r[f]=u,m[f]=Le(e.routerState,m[f-1]||e.routerState.base,_(()=>s()[f+1]),()=>n()[f],t)}))}return r.splice(a.length).forEach(f=>f()),l&&d?l:(o=m[0],m)}));return _(()=>s()&&o)()}const _=e=>()=>h(Y,{get when(){return e()},keyed:!0,children:n=>h(ke.Provider,{value:n,get children(){return n.outlet()}})});function Ze(e,n,t){const r=new URL(e.request.url),o=x(t,new URL(e.router.previousUrl||e.request.url).pathname),s=x(t,r.pathname);for(let a=0;a<s.length;a++){(!o[a]||s[a].route!==o[a].route)&&(e.router.dataOnly=!0);const{route:i,params:l}=s[a];i.load&&i.load({params:l,location:n.location,intent:"preload"})}}function et([e,n],t,r){return[t?()=>t(e()):e,r?o=>n(r(o)):n]}function tt(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function nt(e){let n=!1;const t=o=>typeof o=="string"?{value:o}:o,r=et(be(t(e.get()),{equals:(o,s)=>o.value===s.value}),void 0,o=>(!n&&e.set(o),o));return e.init&&P(e.init((o=e.get())=>{n=!0,r[1](t(o)),n=!1})),ee({signal:r,create:e.create,utils:e.utils})}function rt(e,n,t){return e.addEventListener(n,t),()=>e.removeEventListener(n,t)}function ot(e,n){const t=tt(`#${e}`);t?t.scrollIntoView():n&&window.scrollTo(0,0)}function at(e){const n=new URL(e);return n.pathname+n.search}function st(e){let n;const t={value:e.url||(n=N())&&at(n.request.url)||""};return ee({signal:[()=>t,r=>Object.assign(t,r)]})(e)}function it(e=!0,n=!1,t="/_server"){return r=>{const o=r.base.path(),s=r.navigatorFactory(r.base);let a={};function i(c){return c.namespaceURI==="http://www.w3.org/2000/svg"}function l(c){if(c.defaultPrevented||c.button!==0||c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)return;const u=c.composedPath().find(j=>j instanceof Node&&j.nodeName.toUpperCase()==="A");if(!u||n&&!u.hasAttribute("link"))return;const g=i(u),p=g?u.href.baseVal:u.href;if((g?u.target.baseVal:u.target)||!p&&!u.hasAttribute("state"))return;const S=(u.getAttribute("rel")||"").split(/\s+/);if(u.hasAttribute("download")||S&&S.includes("external"))return;const R=g?new URL(p,document.baseURI):new URL(p);if(!(R.origin!==window.location.origin||o&&R.pathname&&!R.pathname.toLowerCase().startsWith(o.toLowerCase())))return[u,R]}function d(c){const u=l(c);if(!u)return;const[g,p]=u,F=r.parsePath(p.pathname+p.search+p.hash),S=g.getAttribute("state");c.preventDefault(),s(F,{resolve:!1,replace:g.hasAttribute("replace"),scroll:!g.hasAttribute("noscroll"),state:S&&JSON.parse(S)})}function m(c){const u=l(c);if(!u)return;const[g,p]=u;a[p.pathname]||r.preloadRoute(p,g.getAttribute("preload")!=="false")}function f(c){const u=l(c);if(!u)return;const[g,p]=u;a[p.pathname]||(a[p.pathname]=setTimeout(()=>{r.preloadRoute(p,g.getAttribute("preload")!=="false"),delete a[p.pathname]},200))}function y(c){const u=l(c);if(!u)return;const[,g]=u;a[g.pathname]&&(clearTimeout(a[g.pathname]),delete a[g.pathname])}function w(c){let u=c.submitter&&c.submitter.hasAttribute("formaction")?c.submitter.getAttribute("formaction"):c.target.getAttribute("action");if(!u)return;if(!u.startsWith("https://action/")){const p=new URL(u,Pe);if(u=r.parsePath(p.pathname+p.search),!u.startsWith(t))return}if(c.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const g=Oe.get(u);if(g){c.preventDefault();const p=new FormData(c.target);c.submitter&&c.submitter.name&&p.append(c.submitter.name,c.submitter.value),g.call({r,f:c.target},p)}}ae(["click","submit"]),document.addEventListener("click",d),e&&(document.addEventListener("mouseover",f),document.addEventListener("mouseout",y),document.addEventListener("focusin",m),document.addEventListener("touchstart",m)),document.addEventListener("submit",w),P(()=>{document.removeEventListener("click",d),e&&(document.removeEventListener("mouseover",f),document.removeEventListener("mouseout",y),document.removeEventListener("focusin",m),document.removeEventListener("touchstart",m)),document.removeEventListener("submit",w)})}}function lt(e){if($)return st(e);const n=()=>({value:window.location.pathname+window.location.search+window.location.hash,state:window.history.state}),t=Ie();return nt({get:n,set({value:r,replace:o,scroll:s,state:a}){o?window.history.replaceState(xe(a),"",r):window.history.pushState(a,"",r),ot(window.location.hash.slice(1),s),Me()},init:r=>rt(window,"popstate",qe(r,o=>{if(o&&o<0)return!t.confirm(o);{const s=n();return!t.confirm(s.value,{state:s.state})}})),create:it(e.preload,e.explicitLinks,e.actionBase),utils:{go:r=>window.history.go(r),beforeLeave:t}})(e)}function ct(e){e.forEach(n=>{if(!n.attrs.href)return;let t=document.head.querySelector(`link[href="${n.attrs.href}"]`);t||(t=document.createElement("link"),t.setAttribute("rel","preload"),t.setAttribute("as","style"),t.setAttribute("href",n.attrs.href),document.head.appendChild(t))})}var ut=" ";const dt={style:e=>O("style",e.attrs,()=>v(e.children),!0),link:e=>O("link",e.attrs,void 0,!0),script:e=>e.attrs.src?O("script",se(()=>e.attrs,{get id(){return e.key}}),()=>b(ut),!0):null};function q(e){let{tag:n,attrs:{key:t,...r}={key:void 0},children:o}=e;return dt[n]({attrs:r,key:t,children:o})}function ht(e,n,t,r="default"){return Ee(async()=>{{const s=(await e.import())[r],i=(await n.inputs?.[e.src].assets()).filter(d=>d.tag==="style"||d.attrs.rel==="stylesheet");return typeof window<"u"&&ct(i),{default:d=>[...i.map(m=>q(m)),Ce(s,d)]}}})}const C={NORMAL:0,WILDCARD:1,PLACEHOLDER:2};function ft(e={}){const n={options:e,rootNode:te(),staticRoutesMap:{}},t=r=>e.strictTrailingSlash?r:r.replace(/\/$/,"")||"/";if(e.routes)for(const r in e.routes)B(n,t(r),e.routes[r]);return{ctx:n,lookup:r=>mt(n,t(r)),insert:(r,o)=>B(n,t(r),o),remove:r=>pt(n,t(r))}}function mt(e,n){const t=e.staticRoutesMap[n];if(t)return t.data;const r=n.split("/"),o={};let s=!1,a=null,i=e.rootNode,l=null;for(let d=0;d<r.length;d++){const m=r[d];i.wildcardChildNode!==null&&(a=i.wildcardChildNode,l=r.slice(d).join("/"));const f=i.children.get(m);if(f!==void 0)i=f;else if(i=i.placeholderChildNode,i!==null)o[i.paramName]=m,s=!0;else break}return(i===null||i.data===null)&&a!==null&&(i=a,o[i.paramName||"_"]=l,s=!0),i?s?{...i.data,params:s?o:void 0}:i.data:null}function B(e,n,t){let r=!0;const o=n.split("/");let s=e.rootNode,a=0;for(const i of o){let l;if(l=s.children.get(i))s=l;else{const d=gt(i);l=te({type:d,parent:s}),s.children.set(i,l),d===C.PLACEHOLDER?(l.paramName=i==="*"?`_${a++}`:i.slice(1),s.placeholderChildNode=l,r=!1):d===C.WILDCARD&&(s.wildcardChildNode=l,l.paramName=i.slice(3)||"_",r=!1),s=l}}return s.data=t,r===!0&&(e.staticRoutesMap[n]=s),s}function pt(e,n){let t=!1;const r=n.split("/");let o=e.rootNode;for(const s of r)if(o=o.children.get(s),!o)return t;if(o.data){const s=r[r.length-1];if(o.data=null,Object.keys(o.children).length===0){const a=o.parent;a.children.delete(s),a.wildcardChildNode=null,a.placeholderChildNode=null}t=!0}return t}function te(e={}){return{type:e.type||C.NORMAL,parent:e.parent||null,children:new Map,data:e.data||null,paramName:e.paramName||null,wildcardChildNode:null,placeholderChildNode:null}}function gt(e){return e.startsWith("**")?C.WILDCARD:e[0]===":"||e==="*"?C.PLACEHOLDER:C.NORMAL}const wt={load:()=>Fe()},ne=[{$component:{src:"src/routes/(auth).tsx?pick=default&pick=$css",build:()=>import("./(auth).js"),import:()=>import("./(auth).js")},$$route:{require:()=>({route:wt}),src:"src/routes/(auth).tsx?pick=route"},path:"/(auth)",filePath:"/home/sh1man999/solidstart-auth/src/routes/(auth).tsx"},{$component:{src:"src/routes/login.tsx?pick=default&pick=$css",build:()=>import("./login.js"),import:()=>import("./login.js")},path:"/login",filePath:"/home/sh1man999/solidstart-auth/src/routes/login.tsx"},{$component:{src:"src/routes/(auth)/(main).tsx?pick=default&pick=$css",build:()=>import("./(main).js"),import:()=>import("./(main).js")},path:"/(auth)/(main)",filePath:"/home/sh1man999/solidstart-auth/src/routes/(auth)/(main).tsx"}],yt=vt(ne.filter(e=>e.$component));function vt(e){function n(t,r,o,s){const a=Object.values(t).find(i=>o.startsWith(i.id+"/"));return a?(n(a.children||(a.children=[]),r,o.slice(a.id.length)),t):(t.push({...r,id:o,path:o.replace(/\/\([^)/]+\)/g,"").replace(/\./g,"/")}),t)}return e.sort((t,r)=>t.path.length-r.path.length).reduce((t,r)=>n(t,r,r.path,r.path),[])}function bt(e,n){const t=Ct.lookup(e);if(t){const r=t.route[`$${n}`];return r===void 0?void 0:{handler:r,params:t.params}}}function Et(e){return e.$GET||e.$POST||e.$PUT||e.$PATCH||e.$DELETE}const Ct=ft({routes:ne.reduce((e,n)=>{if(!Et(n))return e;let t=n.path.replace(/\(.*\)\/?/g,"").replace(/\*([^/]*)/g,(r,o)=>`**:${o}`);if(/:[^/]*\?/g.test(t))throw new Error(`Optional parameters are not supported in API routes: ${t}`);if(e[t])throw new Error(`Duplicate API routes for "${t}" found at "${e[t].route.path}" and "${n.path}"`);return e[t]={route:n},e},{})});function re(){function e(t){return{...t,...t.$$route?t.$$route.require().route:void 0,info:{...t.$$route?t.$$route.require().route.info:{},filesystem:!0},component:ht(t.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:t.children?t.children.map(e):void 0}}return yt.map(e)}let K;const $t=$?()=>N().routes:()=>K||(K=re());function St(){return h(lt,{root:e=>h(ze,{get children(){return[[h(Ye,{children:"PDF parser"}),h(U,{charset:"utf-8"}),h(U,{content:"width=device-width, initial-scale=1",name:"viewport"})],h($e,{get children(){return e.children}})]}}),get children(){return h($t,{})}})}const Nt=$?e=>{const n=N();return n.response.status=e.code,n.response.statusText=e.text,P(()=>!n.nativeEvent.handled&&(n.response.status=200)),null}:e=>null;var Rt=["<span",' style="font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;">',"</span>"];const Tt=e=>{const n=$?"500 | Internal Server Error":"Error | Uncaught Client Exception";return h(Se,{get fallback(){return[b(Rt,E(),v(n)),h(Nt,{code:500})]},get children(){return e.children}})};var W=["<script",">","<\/script>"],At=["<script",' type="module"'," async","><\/script>"],Lt=["<script",' type="module" async',"><\/script>"];const kt=b("<!DOCTYPE html>");function oe(e,n,t=[]){for(let r=0;r<n.length;r++){const o=n[r];if(o.path!==e[0].path)continue;let s=[...t,o];if(o.children){const a=e.slice(1);if(a.length===0||(s=oe(a,o.children,s),!s))continue}return s}}function Pt(e){const n=N(),t=n.nonce;let r=[];return Promise.resolve().then(async()=>{if(n.router&&n.router.matches){const o=[...n.router.matches];for(;o.length&&(!o[0].info||!o[0].info.filesystem);)o.shift();const s=o.length&&oe(o,n.routes);if(s)for(let a=0;a<s.length;a++){const i=s[a],d=await globalThis.MANIFEST.client.inputs[i.$component.src].assets();r.push.apply(r,d)}else console.warn("No route matched for preloading js assets")}r=[...new Map(r.map(o=>[o.attrs.key,o])).values()].filter(o=>o.attrs.rel==="modulepreload"&&!n.assets.find(s=>s.attrs.key===o.attrs.key))}),V(()=>r.length?r.map(o=>q(o)):void 0),h(G,{get children(){return[kt,h(e.document,{get assets(){return[h(ie,{}),n.assets.map(o=>q(o))]},get scripts(){return t?[b(W,E()+T("nonce",v(t,!0),!1),`window.manifest = ${JSON.stringify(n.manifest)}`),b(At,E(),T("nonce",v(t,!0),!1),T("src",v(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path,!0),!1))]:[b(W,E(),`window.manifest = ${JSON.stringify(n.manifest)}`),b(Lt,E(),T("src",v(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path,!0),!1))]},get children(){return h(le,{get children(){return h(Tt,{get children(){return h(St,{})}})}})}})]}})}function Ot(e){const n=je(e.nativeEvent,"flash");if(!n)return;let t=JSON.parse(n);if(!t||!t.result)return;const r=[...t.input.slice(0,-1),new Map(t.input[t.input.length-1])];return De(e.nativeEvent,"flash","",{maxAge:0}),{input:r,url:t.url,pending:!1,result:t.error?new Error(t.result):t.result}}async function xt(e){const n=globalThis.MANIFEST.client;return globalThis.MANIFEST.ssr,e.response.headers.set("Content-Type","text/html"),Object.assign(e,{manifest:await n.json(),assets:[...await n.inputs[n.handler].assets()],router:{submission:Ot(e)},routes:re(),$islands:new Set})}function Mt(e,n,t={}){return Ke({handler:r=>{const o=He(r);return Be(o,async()=>{const s=bt(new URL(o.request.url).pathname,o.request.method);if(s){const w=(await s.handler.import())[o.request.method];o.params=s.params||{},A.context={event:o};const c=await w(o);if(c!==void 0)return c;if(o.request.method!=="GET")throw new Error(`API handler for ${o.request.method} "${o.request.url}" did not return a response.`)}const a=await n(o);typeof t=="function"&&(t=await t(a));const i=t.mode||"stream";if(t.nonce&&(a.nonce=t.nonce),i==="sync"){const y=ce(()=>(A.context.event=a,e(a)),t);return a.response&&a.response.headers.get("Location")?H(r,a.response.headers.get("Location")):y}let l={...t};if(l.onCompleteAll){const y=l.onCompleteAll;l.onCompleteAll=w=>{z(a)(w),y(w)}}else l.onCompleteAll=z(a);if(l.onCompleteShell){const y=l.onCompleteShell;l.onCompleteShell=w=>{J(a,r)(),y(w)}}else l.onCompleteShell=J(a,r);const d=ue(()=>(A.context.event=a,e(a)),l);if(a.response&&a.response.headers.get("Location"))return H(r,a.response.headers.get("Location"));if(i==="async")return d;const{writable:m,readable:f}=new TransformStream;return d.pipeTo(m),f})}})}function J(e,n){return()=>{e.response&&e.response.headers.get("Location")&&(Ue(n,302),_e(n,"Location",e.response.headers.get("Location")))}}function z(e){return({write:n})=>{const t=e.response&&e.response.headers.get("Location");t&&n(`<script>window.location="${t}"<\/script>`)}}function It(e,n){return Mt(e,xt,n)}var qt=['<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="/favicon.ico">',"</head>"],Ft=["<html",' lang="en">','<body><div id="app">',"</div><!--$-->","<!--/--></body></html>"];const Kt=It(()=>h(Pt,{document:({assets:e,children:n,scripts:t})=>b(Ft,E(),h(G,{get children(){return b(qt,v(e))}}),v(n),v(t))}));export{Kt as default};