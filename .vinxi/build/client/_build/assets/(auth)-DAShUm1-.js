import{M as f,k as p,s as w,C as n,c as u,G as l,S as d,E as c,N as h,O as g,J as m,I as $}from"./client-BEg59hxz.js";function b(a,r){let t,s=()=>!t||t.state==="unresolved"?void 0:t.latest;return[t]=f(()=>v(a,p(s)),o=>o,r),()=>t()}class e{static all(){return new e}static allSettled(){return new e}static any(){return new e}static race(){return new e}static reject(){return new e}static resolve(){return new e}catch(){return new e}then(){return new e}finally(){return new e}}function v(a,r){if(!w.context)return a(r);const t=fetch,s=Promise;try{return window.fetch=()=>new e,Promise=e,a(r)}finally{window.fetch=t,Promise=s}}var i=l("<h5>Test APP"),y=l("<p>"),x=l('<form method=post class="flex flex-col gap-4"><button type=submit>LogOut'),A=l("<main class=pt-12>"),S=l("<div>Loading profile..."),C=l("<p>Unable to load user profile.");function O(a){const r=b(()=>$());return[n(i),u(m,{get fallback(){return n(S)},get children(){return[n(i),u(d,{get when(){return r()},get fallback(){return n(C)},get children(){return[(()=>{var t=n(y);return c(t,r),t})(),(()=>{var t=n(x);return h(t,"action",g),t})(),(()=>{var t=n(A);return c(t,()=>a.children),t})()]}})]}})]}export{O as default};
