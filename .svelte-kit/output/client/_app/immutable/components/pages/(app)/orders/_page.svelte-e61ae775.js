import{S as U,i as V,s as X,Y as J,k as v,q as I,a as P,x as z,e as K,l as E,m as w,r as B,h,c as A,y as L,b as O,I as u,z as R,Z as x,f as H,t as C,A as W,u as Y,C as N,n as q,g as ee,d as te,W as re}from"../../../../chunks/index-867ab049.js";import{E as oe}from"../../../../chunks/edit-058cb14e.js";import{P as ae,a as le}from"../../../../chunks/Pager-3c02cb40.js";import{g as ne}from"../../../../chunks/navigation-8c5881c7.js";import{O as se}from"../../../../chunks/order-9f69369a.js";import"../../../../chunks/index-4d8f42c1.js";async function ce(s,e){return await se.fetchPaged(s,e)}function M(s,e,o){const t=s.slice();return t[5]=e[o].OrderId,t[6]=e[o].OrderDate,t}function fe(s){let e=s[9]+"",o;return{c(){o=I(e)},l(t){o=B(t,e)},m(t,n){O(t,o,n)},p(t,n){n&1&&e!==(e=t[9]+"")&&Y(o,e)},i:N,o:N,d(t){t&&h(o)}}}function ie(s){let e,o,t,n,p,m,d,g,f,r,l,b,T,y;l=new le({});let $=s[4].resource,a=[];for(let i=0;i<$.length;i+=1)a[i]=Q(M(s,$,i));const k=i=>C(a[i],1,1,()=>{a[i]=null});return{c(){e=v("table"),o=v("thead"),t=v("th"),n=I("Id"),p=P(),m=v("th"),d=I("Name"),g=P(),f=v("th"),r=v("a"),z(l.$$.fragment),b=P(),T=v("tbody");for(let i=0;i<a.length;i+=1)a[i].c();this.h()},l(i){e=E(i,"TABLE",{role:!0});var _=w(e);o=E(_,"THEAD",{});var c=w(o);t=E(c,"TH",{scope:!0});var D=w(t);n=B(D,"Id"),D.forEach(h),p=A(c),m=E(c,"TH",{scope:!0});var Z=w(m);d=B(Z,"Name"),Z.forEach(h),g=A(c),f=E(c,"TH",{});var j=w(f);r=E(j,"A",{href:!0});var F=w(r);L(l.$$.fragment,F),F.forEach(h),j.forEach(h),c.forEach(h),b=A(_),T=E(_,"TBODY",{});var G=w(T);for(let S=0;S<a.length;S+=1)a[S].l(G);G.forEach(h),_.forEach(h),this.h()},h(){q(t,"scope","col"),q(m,"scope","col"),q(r,"href","/order/new"),q(e,"role","grid")},m(i,_){O(i,e,_),u(e,o),u(o,t),u(t,n),u(o,p),u(o,m),u(m,d),u(o,g),u(o,f),u(f,r),R(l,r,null),u(e,b),u(e,T);for(let c=0;c<a.length;c+=1)a[c].m(T,null);y=!0},p(i,_){if(_&1){$=i[4].resource;let c;for(c=0;c<$.length;c+=1){const D=M(i,$,c);a[c]?(a[c].p(D,_),H(a[c],1)):(a[c]=Q(D),a[c].c(),H(a[c],1),a[c].m(T,null))}for(ee(),c=$.length;c<a.length;c+=1)k(c);te()}},i(i){if(!y){H(l.$$.fragment,i);for(let _=0;_<$.length;_+=1)H(a[_]);y=!0}},o(i){C(l.$$.fragment,i),a=a.filter(Boolean);for(let _=0;_<a.length;_+=1)C(a[_]);y=!1},d(i){i&&h(e),W(l),re(a,i)}}}function Q(s){let e,o,t=s[5]+"",n,p,m,d=s[6]+"",g,f,r,l,b,T,y,$;return b=new oe({}),{c(){e=v("tr"),o=v("td"),n=I(t),p=P(),m=v("td"),g=I(d),f=P(),r=v("td"),l=v("a"),z(b.$$.fragment),y=P(),this.h()},l(a){e=E(a,"TR",{});var k=w(e);o=E(k,"TD",{scope:!0});var i=w(o);n=B(i,t),i.forEach(h),p=A(k),m=E(k,"TD",{});var _=w(m);g=B(_,d),_.forEach(h),f=A(k),r=E(k,"TD",{});var c=w(r);l=E(c,"A",{href:!0});var D=w(l);L(b.$$.fragment,D),D.forEach(h),c.forEach(h),y=A(k),k.forEach(h),this.h()},h(){q(o,"scope","row"),q(l,"href",T="/order/"+s[5])},m(a,k){O(a,e,k),u(e,o),u(o,n),u(e,p),u(e,m),u(m,g),u(e,f),u(e,r),u(r,l),R(b,l,null),u(e,y),$=!0},p(a,k){(!$||k&1)&&t!==(t=a[5]+"")&&Y(n,t),(!$||k&1)&&d!==(d=a[6]+"")&&Y(g,d),(!$||k&1&&T!==(T="/order/"+a[5]))&&q(l,"href",T)},i(a){$||(H(b.$$.fragment,a),$=!0)},o(a){C(b.$$.fragment,a),$=!1},d(a){a&&h(e),W(b)}}}function ue(s){let e,o;return{c(){e=v("p"),o=I("waiting for the promise to resolve...")},l(t){e=E(t,"P",{});var n=w(e);o=B(n,"waiting for the promise to resolve..."),n.forEach(h)},m(t,n){O(t,e,n),u(e,o)},p:N,i:N,o:N,d(t){t&&h(e)}}}function he(s){let e,o,t,n,p,m,d,g;n=new ae({props:{limit:10,count:s[1]}}),n.$on("next",s[2]);let f={ctx:s,current:null,token:null,hasCatch:!0,pending:ue,then:ie,catch:fe,value:4,error:9,blocks:[,,,]};return J(d=s[0],f),{c(){e=v("h1"),o=I("Order"),t=P(),z(n.$$.fragment),p=P(),m=K(),f.block.c()},l(r){e=E(r,"H1",{});var l=w(e);o=B(l,"Order"),l.forEach(h),t=A(r),L(n.$$.fragment,r),p=A(r),m=K(),f.block.l(r)},m(r,l){O(r,e,l),u(e,o),O(r,t,l),R(n,r,l),O(r,p,l),O(r,m,l),f.block.m(r,f.anchor=l),f.mount=()=>m.parentNode,f.anchor=m,g=!0},p(r,[l]){s=r;const b={};l&2&&(b.count=s[1]),n.$set(b),f.ctx=s,l&1&&d!==(d=s[0])&&J(d,f)||x(f,s,l)},i(r){g||(H(n.$$.fragment,r),H(f.block),g=!0)},o(r){C(n.$$.fragment,r);for(let l=0;l<3;l+=1){const b=f.blocks[l];C(b)}g=!1},d(r){r&&h(e),r&&h(t),W(n,r),r&&h(p),r&&h(m),f.block.d(r),f.token=null,f=null}}}function me(s,e,o){let t,n,{data:p}=e;const m=async d=>{const g=d.detail.offset,f=10,r=`?limit=${f}&offset=${g}`;ne(r),o(0,t=await ce(f,g)),o(1,n=t.meta.count)};return s.$$set=d=>{"data"in d&&o(3,p=d.data)},s.$$.update=()=>{s.$$.dirty&8&&o(0,t=p),s.$$.dirty&1&&o(1,n=t.meta.count)},[t,n,m,p]}class ke extends U{constructor(e){super(),V(this,e,me,he,X,{data:3})}}export{ke as default};