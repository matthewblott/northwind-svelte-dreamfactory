import{S as U,i as V,s as X,Y as J,k as v,q as N,a as A,x as L,e as K,l as E,m as P,r as B,h,c as H,y as O,b as D,I as i,z as R,Z as x,f as q,t as C,A as W,u as z,C as S,n as I,g as tt,d as et,W as ot}from"../../../../chunks/index-867ab049.js";import{E as rt}from"../../../../chunks/edit-058cb14e.js";import{P as at,a as lt}from"../../../../chunks/Pager-3c02cb40.js";import{g as nt}from"../../../../chunks/navigation-8c5881c7.js";import{P as st}from"../../../../chunks/product-2363667c.js";import"../../../../chunks/index-4d8f42c1.js";async function ct(s,t){return await st.fetchPaged(s,t)}function M(s,t,r){const e=s.slice();return e[5]=t[r].ProductId,e[6]=t[r].ProductName,e}function ft(s){let t=s[9]+"",r;return{c(){r=N(t)},l(e){r=B(e,t)},m(e,n){D(e,r,n)},p(e,n){n&1&&t!==(t=e[9]+"")&&z(r,t)},i:S,o:S,d(e){e&&h(r)}}}function ut(s){let t,r,e,n,p,m,d,g,f,o,l,b,w,T;l=new lt({});let $=s[4].resource,a=[];for(let u=0;u<$.length;u+=1)a[u]=Q(M(s,$,u));const k=u=>C(a[u],1,1,()=>{a[u]=null});return{c(){t=v("table"),r=v("thead"),e=v("th"),n=N("Id"),p=A(),m=v("th"),d=N("Name"),g=A(),f=v("th"),o=v("a"),L(l.$$.fragment),b=A(),w=v("tbody");for(let u=0;u<a.length;u+=1)a[u].c();this.h()},l(u){t=E(u,"TABLE",{role:!0});var _=P(t);r=E(_,"THEAD",{});var c=P(r);e=E(c,"TH",{scope:!0});var y=P(e);n=B(y,"Id"),y.forEach(h),p=H(c),m=E(c,"TH",{scope:!0});var Z=P(m);d=B(Z,"Name"),Z.forEach(h),g=H(c),f=E(c,"TH",{});var j=P(f);o=E(j,"A",{href:!0});var F=P(o);O(l.$$.fragment,F),F.forEach(h),j.forEach(h),c.forEach(h),b=H(_),w=E(_,"TBODY",{});var G=P(w);for(let Y=0;Y<a.length;Y+=1)a[Y].l(G);G.forEach(h),_.forEach(h),this.h()},h(){I(e,"scope","col"),I(m,"scope","col"),I(o,"href","/products/new"),I(t,"role","grid")},m(u,_){D(u,t,_),i(t,r),i(r,e),i(e,n),i(r,p),i(r,m),i(m,d),i(r,g),i(r,f),i(f,o),R(l,o,null),i(t,b),i(t,w);for(let c=0;c<a.length;c+=1)a[c].m(w,null);T=!0},p(u,_){if(_&1){$=u[4].resource;let c;for(c=0;c<$.length;c+=1){const y=M(u,$,c);a[c]?(a[c].p(y,_),q(a[c],1)):(a[c]=Q(y),a[c].c(),q(a[c],1),a[c].m(w,null))}for(tt(),c=$.length;c<a.length;c+=1)k(c);et()}},i(u){if(!T){q(l.$$.fragment,u);for(let _=0;_<$.length;_+=1)q(a[_]);T=!0}},o(u){C(l.$$.fragment,u),a=a.filter(Boolean);for(let _=0;_<a.length;_+=1)C(a[_]);T=!1},d(u){u&&h(t),W(l),ot(a,u)}}}function Q(s){let t,r,e=s[5]+"",n,p,m,d=s[6]+"",g,f,o,l,b,w,T,$;return b=new rt({}),{c(){t=v("tr"),r=v("td"),n=N(e),p=A(),m=v("td"),g=N(d),f=A(),o=v("td"),l=v("a"),L(b.$$.fragment),T=A(),this.h()},l(a){t=E(a,"TR",{});var k=P(t);r=E(k,"TD",{scope:!0});var u=P(r);n=B(u,e),u.forEach(h),p=H(k),m=E(k,"TD",{});var _=P(m);g=B(_,d),_.forEach(h),f=H(k),o=E(k,"TD",{});var c=P(o);l=E(c,"A",{href:!0});var y=P(l);O(b.$$.fragment,y),y.forEach(h),c.forEach(h),T=H(k),k.forEach(h),this.h()},h(){I(r,"scope","row"),I(l,"href",w="/products/"+s[5])},m(a,k){D(a,t,k),i(t,r),i(r,n),i(t,p),i(t,m),i(m,g),i(t,f),i(t,o),i(o,l),R(b,l,null),i(t,T),$=!0},p(a,k){(!$||k&1)&&e!==(e=a[5]+"")&&z(n,e),(!$||k&1)&&d!==(d=a[6]+"")&&z(g,d),(!$||k&1&&w!==(w="/products/"+a[5]))&&I(l,"href",w)},i(a){$||(q(b.$$.fragment,a),$=!0)},o(a){C(b.$$.fragment,a),$=!1},d(a){a&&h(t),W(b)}}}function it(s){let t,r;return{c(){t=v("p"),r=N("waiting for the promise to resolve...")},l(e){t=E(e,"P",{});var n=P(t);r=B(n,"waiting for the promise to resolve..."),n.forEach(h)},m(e,n){D(e,t,n),i(t,r)},p:S,i:S,o:S,d(e){e&&h(t)}}}function ht(s){let t,r,e,n,p,m,d,g;n=new at({props:{limit:10,count:s[1]}}),n.$on("next",s[2]);let f={ctx:s,current:null,token:null,hasCatch:!0,pending:it,then:ut,catch:ft,value:4,error:9,blocks:[,,,]};return J(d=s[0],f),{c(){t=v("h1"),r=N("Products"),e=A(),L(n.$$.fragment),p=A(),m=K(),f.block.c()},l(o){t=E(o,"H1",{});var l=P(t);r=B(l,"Products"),l.forEach(h),e=H(o),O(n.$$.fragment,o),p=H(o),m=K(),f.block.l(o)},m(o,l){D(o,t,l),i(t,r),D(o,e,l),R(n,o,l),D(o,p,l),D(o,m,l),f.block.m(o,f.anchor=l),f.mount=()=>m.parentNode,f.anchor=m,g=!0},p(o,[l]){s=o;const b={};l&2&&(b.count=s[1]),n.$set(b),f.ctx=s,l&1&&d!==(d=s[0])&&J(d,f)||x(f,s,l)},i(o){g||(q(n.$$.fragment,o),q(f.block),g=!0)},o(o){C(n.$$.fragment,o);for(let l=0;l<3;l+=1){const b=f.blocks[l];C(b)}g=!1},d(o){o&&h(t),o&&h(e),W(n,o),o&&h(p),o&&h(m),f.block.d(o),f.token=null,f=null}}}function mt(s,t,r){let e,n,{data:p}=t;const m=async d=>{const g=d.detail.offset,f=10,o=`?limit=${f}&offset=${g}`;nt(o),r(0,e=await ct(f,g)),r(1,n=e.meta.count)};return s.$$set=d=>{"data"in d&&r(3,p=d.data)},s.$$.update=()=>{s.$$.dirty&8&&r(0,e=p),s.$$.dirty&1&&r(1,n=e.meta.count)},[e,n,m,p]}class kt extends U{constructor(t){super(),V(this,t,mt,ht,X,{data:3})}}export{kt as default};