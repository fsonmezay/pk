function x(){}const Q=t=>t;function ut(t,e){for(const n in e)t[n]=e[n];return t}function W(t){return t()}function G(){return Object.create(null)}function b(t){t.forEach(W)}function T(t){return typeof t=="function"}function Pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function Rt(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function at(t){return Object.keys(t).length===0}function ft(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Dt(t,e,n){t.$$.on_destroy.push(ft(e,n))}function zt(t,e,n,i){if(t){const r=U(t,e,n,i);return t[0](r)}}function U(t,e,n,i){return t[1]&&i?ut(n.ctx.slice(),t[1](i(e))):n.ctx}function Bt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)o[u]=e.dirty[u]|r[u];return o}return e.dirty|r}return e.dirty}function Lt(t,e,n,i,r,o){if(r){const s=U(e,n,i,o);t.p(s,r)}}function Tt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const V=typeof window<"u";let X=V?()=>window.performance.now():()=>Date.now(),F=V?t=>requestAnimationFrame(t):x;const g=new Set;function Y(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&F(Y)}function Z(t){let e;return g.size===0&&F(Y),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let P=!1;function _t(){P=!0}function dt(){P=!1}function ht(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function mt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,f=(r>0&&e[n[r]].claim_order<=c?r+1:ht(1,r,_=>e[n[_]].claim_order,c))-1;i[l]=n[f]+1;const a=f+1;n[a]=l,r=Math.max(a,r)}const o=[],s=[];let u=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);u>=l;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);o.reverse(),s.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<s.length;l++){for(;c<o.length&&s[l].claim_order>=o[c].claim_order;)c++;const f=c<o.length?o[c]:null;t.insertBefore(s[l],f)}}function pt(t,e){t.appendChild(e)}function tt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function yt(t){const e=et("style");return gt(tt(t),e),e.sheet}function gt(t,e){pt(t.head||t,e)}function xt(t,e){if(P){for(mt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ft(t,e,n){P&&!n?xt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function bt(t){t.parentNode.removeChild(t)}function Ht(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function H(t){return document.createTextNode(t)}function It(){return H(" ")}function Gt(){return H("")}function Jt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $t(t){return Array.from(t.childNodes)}function wt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,i,r=!1){wt(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const l=n(u);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const l=n(u);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function vt(t,e,n,i){return nt(t,r=>r.nodeName===e,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||o.push(u.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Qt(t,e,n){return vt(t,e,n,et)}function Et(t,e){return nt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>H(e),!0)}function Wt(t){return Et(t," ")}function Ut(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Vt(t,e){t.value=e==null?"":e}function Xt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function kt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Yt(t,e=document.body){return Array.from(e.querySelectorAll(t))}const q=new Map;let M=0;function At(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ct(t,e){const n={stylesheet:yt(e),rules:{}};return q.set(t,n),n}function it(t,e,n,i,r,o,s,u=0){const l=16.666/i;let c=`{
`;for(let m=0;m<=1;m+=l){const A=e+(n-e)*o(m);c+=m*100+`%{${s(A,1-A)}}
`}const f=c+`100% {${s(n,1-n)}}
}`,a=`__svelte_${At(f)}_${u}`,_=tt(t),{stylesheet:d,rules:h}=q.get(_)||Ct(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${a} ${i}ms linear ${r}ms 1 both`,M+=1,a}function B(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),M-=r,M||Nt())}function Nt(){F(()=>{M||(q.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),q.clear())})}let E;function v(t){E=t}function R(){if(!E)throw new Error("Function called outside component initialization");return E}function Zt(t){R().$$.on_mount.push(t)}function te(t){R().$$.after_update.push(t)}function ee(t,e){return R().$$.context.set(t,e),e}function ne(t){return R().$$.context.get(t)}const w=[],J=[],S=[],K=[],rt=Promise.resolve();let L=!1;function st(){L||(L=!0,rt.then(lt))}function ie(){return st(),rt}function k(t){S.push(t)}const z=new Set;let N=0;function lt(){const t=E;do{for(;N<w.length;){const e=w[N];N++,v(e),St(e.$$)}for(v(null),w.length=0,N=0;J.length;)J.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];z.has(n)||(z.add(n),n())}S.length=0}while(w.length);for(;K.length;)K.pop()();L=!1,z.clear(),v(t)}function St(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}let $;function ct(){return $||($=Promise.resolve(),$.then(()=>{$=null})),$}function O(t,e,n){t.dispatchEvent(kt(`${e?"intro":"outro"}${n}`))}const j=new Set;let y;function re(){y={r:0,c:[],p:y}}function se(){y.r||b(y.c),y=y.p}function jt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function le(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),y.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ot={duration:0};function ce(t,e,n){let i=e(t,n),r=!1,o,s,u=0;function l(){o&&B(t,o)}function c(){const{delay:a=0,duration:_=300,easing:d=Q,tick:h=x,css:p}=i||ot;p&&(o=it(t,0,1,_,a,d,p,u++)),h(0,1);const m=X()+a,A=m+_;s&&s.abort(),r=!0,k(()=>O(t,!0,"start")),s=Z(D=>{if(r){if(D>=A)return h(1,0),O(t,!0,"end"),l(),r=!1;if(D>=m){const I=d((D-m)/_);h(I,1-I)}}return r})}let f=!1;return{start(){f||(f=!0,B(t),T(i)?(i=i(),ct().then(c)):c())},invalidate(){f=!1},end(){r&&(l(),r=!1)}}}function oe(t,e,n){let i=e(t,n),r=!0,o;const s=y;s.r+=1;function u(){const{delay:l=0,duration:c=300,easing:f=Q,tick:a=x,css:_}=i||ot;_&&(o=it(t,1,0,c,l,f,_));const d=X()+l,h=d+c;k(()=>O(t,!1,"start")),Z(p=>{if(r){if(p>=h)return a(0,1),O(t,!1,"end"),--s.r||b(s.c),!1;if(p>=d){const m=f((p-d)/c);a(1-m,m)}}return r})}return T(i)?ct().then(()=>{i=i(),u()}):u(),{end(l){l&&i.tick&&i.tick(1,0),r&&(o&&B(t,o),r=!1)}}}function ue(t){t&&t.c()}function ae(t,e){t&&t.l(e)}function qt(t,e,n,i){const{fragment:r,on_mount:o,on_destroy:s,after_update:u}=t.$$;r&&r.m(e,n),i||k(()=>{const l=o.map(W).filter(T);s?s.push(...l):b(l),t.$$.on_mount=[]}),u.forEach(k)}function Mt(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(t,e){t.$$.dirty[0]===-1&&(w.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function fe(t,e,n,i,r,o,s,u=[-1]){const l=E;v(t);const c=t.$$={fragment:null,ctx:null,props:o,update:x,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:G(),dirty:u,skip_bound:!1,root:e.target||l.$$.root};s&&s(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return c.ctx&&r(c.ctx[a],c.ctx[a]=h)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](h),f&&Ot(t,a)),_}):[],c.update(),f=!0,b(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){_t();const a=$t(e.target);c.fragment&&c.fragment.l(a),a.forEach(bt)}else c.fragment&&c.fragment.c();e.intro&&jt(t.$$.fragment),qt(t,e.target,e.anchor,e.customElement),dt(),lt()}v(l)}class _e{$destroy(){Mt(this,1),this.$destroy=x}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!at(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Mt as A,ie as B,xt as C,zt as D,Lt as E,Tt as F,Bt as G,ne as H,Dt as I,Rt as J,Yt as K,Vt as L,Jt as M,Ht as N,k as O,ce as P,oe as Q,_e as S,It as a,Ft as b,Wt as c,se as d,Gt as e,jt as f,re as g,bt as h,fe as i,ee as j,te as k,et as l,Qt as m,x as n,Zt as o,$t as p,Kt as q,Xt as r,Pt as s,le as t,H as u,Et as v,Ut as w,ue as x,ae as y,qt as z};