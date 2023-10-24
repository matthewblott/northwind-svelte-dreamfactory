import{m as P}from"./index-9791be84.js";import{S as O,i as L,s as T,Y as w,a as N,x as y,c as I,y as $,b as m,z as A,Z as Y,f as U,t as B,h as _,A as q,o as Z,k as h,q as g,l as v,m as b,r as E,I as d,u as S,e as C,n as p,W as G,C as H}from"./index-867ab049.js";import{C as J}from"./category-e8b76436.js";import{V}from"./Validation-fc70f5a9.js";import{S as K}from"./supplier-a6daaeea.js";import{c as z}from"./index-adfdf48f.js";const Pe=P.object({ProductId:P.number(),ProductName:P.string().min(2),SupplierId:P.coerce.number(),CategoryId:P.coerce.number(),QuantityPerUnit:P.string(),UnitPrice:P.number(),UnitsInStock:P.number(),UnitsOnOrder:P.number(),ReorderLevel:P.number(),Discontinued:P.coerce.boolean()});function D(i,e,l){const n=i.slice();return n[4]=e[l].CategoryId,n[5]=e[l].CategoryName,n}function X(i){let e,l,n=i[8].message+"",a;return{c(){e=h("p"),l=g("Something went wrong: "),a=g(n)},l(t){e=v(t,"P",{});var o=b(e);l=E(o,"Something went wrong: "),a=E(o,n),o.forEach(_)},m(t,o){m(t,e,o),d(e,l),d(e,a)},p(t,o){o&4&&n!==(n=t[8].message+"")&&S(a,n)},d(t){t&&_(e)}}}function x(i){let e,l=i[3]&&F(i);return{c(){l&&l.c(),e=C()},l(n){l&&l.l(n),e=C()},m(n,a){l&&l.m(n,a),m(n,e,a)},p(n,a){n[3]?l?l.p(n,a):(l=F(n),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(n){l&&l.d(n),n&&_(e)}}}function F(i){let e,l,n,a,t,o=i[3],r=[];for(let u=0;u<o.length;u+=1)r[u]=M(D(i,o,u));return{c(){e=h("label"),l=g("Category"),n=N(),a=h("select"),t=h("option");for(let u=0;u<r.length;u+=1)r[u].c();this.h()},l(u){e=v(u,"LABEL",{for:!0});var s=b(e);l=E(s,"Category"),s.forEach(_),n=I(u),a=v(u,"SELECT",{name:!0,id:!0});var f=b(a);t=v(f,"OPTION",{}),b(t).forEach(_);for(let c=0;c<r.length;c+=1)r[c].l(f);f.forEach(_),this.h()},h(){p(e,"for",i[1]),t.__value="",t.value=t.__value,p(a,"name",i[1]),p(a,"id",i[1])},m(u,s){m(u,e,s),d(e,l),m(u,n,s),m(u,a,s),d(a,t);for(let f=0;f<r.length;f+=1)r[f].m(a,null)},p(u,s){if(s&2&&p(e,"for",u[1]),s&9){o=u[3];let f;for(f=0;f<o.length;f+=1){const c=D(u,o,f);r[f]?r[f].p(c,s):(r[f]=M(c),r[f].c(),r[f].m(a,null))}for(;f<r.length;f+=1)r[f].d(1);r.length=o.length}s&2&&p(a,"name",u[1]),s&2&&p(a,"id",u[1])},d(u){u&&_(e),u&&_(n),u&&_(a),G(r,u)}}}function ee(i){let e,l=i[5]+"",n,a;return{c(){e=h("option"),n=g(l),this.h()},l(t){e=v(t,"OPTION",{});var o=b(e);n=E(o,l),o.forEach(_),this.h()},h(){e.__value=a=i[4],e.value=e.__value},m(t,o){m(t,e,o),d(e,n)},p(t,o){o&8&&l!==(l=t[5]+"")&&S(n,l),o&8&&a!==(a=t[4])&&(e.__value=a,e.value=e.__value)},d(t){t&&_(e)}}}function le(i){let e,l=i[5]+"",n,a;return{c(){e=h("option"),n=g(l),this.h()},l(t){e=v(t,"OPTION",{});var o=b(e);n=E(o,l),o.forEach(_),this.h()},h(){e.__value=a=i[4],e.value=e.__value,e.selected=!0},m(t,o){m(t,e,o),d(e,n)},p(t,o){o&8&&l!==(l=t[5]+"")&&S(n,l),o&8&&a!==(a=t[4])&&(e.__value=a,e.value=e.__value)},d(t){t&&_(e)}}}function M(i){let e;function l(t,o){return t[4]===t[0]?le:ee}let n=l(i),a=n(i);return{c(){a.c(),e=C()},l(t){a.l(t),e=C()},m(t,o){a.m(t,o),m(t,e,o)},p(t,o){n===(n=l(t))&&a?a.p(t,o):(a.d(1),a=n(t),a&&(a.c(),a.m(e.parentNode,e)))},d(t){a.d(t),t&&_(e)}}}function te(i){let e,l;return{c(){e=h("p"),l=g("Loading ...")},l(n){e=v(n,"P",{});var a=b(e);l=E(a,"Loading ..."),a.forEach(_)},m(n,a){m(n,e,a),d(e,l)},p:H,d(n){n&&_(e)}}}function ne(i){let e,l,n,a,t={ctx:i,current:null,token:null,hasCatch:!0,pending:te,then:x,catch:X,error:8};return w(e=i[2],t),n=new V({props:{name:i[1]}}),{c(){t.block.c(),l=N(),y(n.$$.fragment)},l(o){t.block.l(o),l=I(o),$(n.$$.fragment,o)},m(o,r){t.block.m(o,t.anchor=r),t.mount=()=>l.parentNode,t.anchor=l,m(o,l,r),A(n,o,r),a=!0},p(o,[r]){i=o,t.ctx=i,r&4&&e!==(e=i[2])&&w(e,t)||Y(t,i,r);const u={};r&2&&(u.name=i[1]),n.$set(u)},i(o){a||(U(n.$$.fragment,o),a=!0)},o(o){B(n.$$.fragment,o),a=!1},d(o){t.block.d(o),t.token=null,t=null,o&&_(l),q(n,o)}}}function oe(i,e,l){let n=Promise.resolve(),{value:a}=e,{name:t="Category"}=e,o=[];return Z(async()=>{l(2,n=await J.fetchAll()),l(3,o=n.resource)}),i.$$set=r=>{"value"in r&&l(0,a=r.value),"name"in r&&l(1,t=r.name)},[a,t,n,o]}class Ce extends O{constructor(e){super(),L(this,e,oe,ne,T,{value:0,name:1})}}function Q(i,e,l){const n=i.slice();return n[4]=e[l].SupplierId,n[5]=e[l].CompanyName,n}function ae(i){let e,l,n=i[8].message+"",a;return{c(){e=h("p"),l=g("Something went wrong: "),a=g(n)},l(t){e=v(t,"P",{});var o=b(e);l=E(o,"Something went wrong: "),a=E(o,n),o.forEach(_)},m(t,o){m(t,e,o),d(e,l),d(e,a)},p(t,o){o&4&&n!==(n=t[8].message+"")&&S(a,n)},d(t){t&&_(e)}}}function ie(i){let e,l=i[3]&&R(i);return{c(){l&&l.c(),e=C()},l(n){l&&l.l(n),e=C()},m(n,a){l&&l.m(n,a),m(n,e,a)},p(n,a){n[3]?l?l.p(n,a):(l=R(n),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(n){l&&l.d(n),n&&_(e)}}}function R(i){let e,l,n,a,t,o=i[3],r=[];for(let u=0;u<o.length;u+=1)r[u]=W(Q(i,o,u));return{c(){e=h("label"),l=g("Supplier"),n=N(),a=h("select"),t=h("option");for(let u=0;u<r.length;u+=1)r[u].c();this.h()},l(u){e=v(u,"LABEL",{for:!0});var s=b(e);l=E(s,"Supplier"),s.forEach(_),n=I(u),a=v(u,"SELECT",{name:!0,id:!0});var f=b(a);t=v(f,"OPTION",{}),b(t).forEach(_);for(let c=0;c<r.length;c+=1)r[c].l(f);f.forEach(_),this.h()},h(){p(e,"for",i[1]),t.__value="",t.value=t.__value,p(a,"name",i[1]),p(a,"id",i[1])},m(u,s){m(u,e,s),d(e,l),m(u,n,s),m(u,a,s),d(a,t);for(let f=0;f<r.length;f+=1)r[f].m(a,null)},p(u,s){if(s&2&&p(e,"for",u[1]),s&9){o=u[3];let f;for(f=0;f<o.length;f+=1){const c=Q(u,o,f);r[f]?r[f].p(c,s):(r[f]=W(c),r[f].c(),r[f].m(a,null))}for(;f<r.length;f+=1)r[f].d(1);r.length=o.length}s&2&&p(a,"name",u[1]),s&2&&p(a,"id",u[1])},d(u){u&&_(e),u&&_(n),u&&_(a),G(r,u)}}}function re(i){let e,l=i[5]+"",n,a;return{c(){e=h("option"),n=g(l),this.h()},l(t){e=v(t,"OPTION",{});var o=b(e);n=E(o,l),o.forEach(_),this.h()},h(){e.__value=a=i[4],e.value=e.__value},m(t,o){m(t,e,o),d(e,n)},p(t,o){o&8&&l!==(l=t[5]+"")&&S(n,l),o&8&&a!==(a=t[4])&&(e.__value=a,e.value=e.__value)},d(t){t&&_(e)}}}function ue(i){let e,l=i[5]+"",n,a;return{c(){e=h("option"),n=g(l),this.h()},l(t){e=v(t,"OPTION",{});var o=b(e);n=E(o,l),o.forEach(_),this.h()},h(){e.__value=a=i[4],e.value=e.__value,e.selected=!0},m(t,o){m(t,e,o),d(e,n)},p(t,o){o&8&&l!==(l=t[5]+"")&&S(n,l),o&8&&a!==(a=t[4])&&(e.__value=a,e.value=e.__value)},d(t){t&&_(e)}}}function W(i){let e;function l(t,o){return t[4]===t[0]?ue:re}let n=l(i),a=n(i);return{c(){a.c(),e=C()},l(t){a.l(t),e=C()},m(t,o){a.m(t,o),m(t,e,o)},p(t,o){n===(n=l(t))&&a?a.p(t,o):(a.d(1),a=n(t),a&&(a.c(),a.m(e.parentNode,e)))},d(t){a.d(t),t&&_(e)}}}function fe(i){let e,l;return{c(){e=h("p"),l=g("Loading ...")},l(n){e=v(n,"P",{});var a=b(e);l=E(a,"Loading ..."),a.forEach(_)},m(n,a){m(n,e,a),d(e,l)},p:H,d(n){n&&_(e)}}}function ce(i){let e,l,n,a,t={ctx:i,current:null,token:null,hasCatch:!0,pending:fe,then:ie,catch:ae,error:8};return w(e=i[2],t),n=new V({props:{name:i[1]}}),{c(){t.block.c(),l=N(),y(n.$$.fragment)},l(o){t.block.l(o),l=I(o),$(n.$$.fragment,o)},m(o,r){t.block.m(o,t.anchor=r),t.mount=()=>l.parentNode,t.anchor=l,m(o,l,r),A(n,o,r),a=!0},p(o,[r]){i=o,t.ctx=i,r&4&&e!==(e=i[2])&&w(e,t)||Y(t,i,r);const u={};r&2&&(u.name=i[1]),n.$set(u)},i(o){a||(U(n.$$.fragment,o),a=!0)},o(o){B(n.$$.fragment,o),a=!1},d(o){t.block.d(o),t.token=null,t=null,o&&_(l),q(n,o)}}}function _e(i,e,l){let n=Promise.resolve(),{value:a}=e,{name:t="Supplier"}=e,o=[];return Z(async()=>{l(2,n=await K.fetchAll()),l(3,o=n.resource)}),i.$$set=r=>{"value"in r&&l(0,a=r.value),"name"in r&&l(1,t=r.name)},[a,t,n,o]}class Se extends O{constructor(e){super(),L(this,e,_e,ce,T,{value:0,name:1})}}function se(i){let e;return{c(){e=h("input"),this.h()},l(l){e=v(l,"INPUT",{type:!0,id:!0,name:!0}),this.h()},h(){p(e,"type","checkbox"),p(e,"id",i[0]),p(e,"name",i[0])},m(l,n){m(l,e,n)},p(l,n){n&1&&p(e,"id",l[0]),n&1&&p(e,"name",l[0])},d(l){l&&_(e)}}}function me(i){let e;return{c(){e=h("input"),this.h()},l(l){e=v(l,"INPUT",{type:!0,id:!0,name:!0}),this.h()},h(){p(e,"type","checkbox"),p(e,"id",i[0]),p(e,"name",i[0]),e.checked=!0},m(l,n){m(l,e,n)},p(l,n){n&1&&p(e,"id",l[0]),n&1&&p(e,"name",l[0])},d(l){l&&_(e)}}}function pe(i){let e,l=z(i[0])+"",n,a,t,o,r;function u(c,k){return c[1]?me:se}let s=u(i),f=s(i);return o=new V({props:{name:i[0]}}),{c(){e=h("label"),n=g(l),a=N(),f.c(),t=N(),y(o.$$.fragment),this.h()},l(c){e=v(c,"LABEL",{for:!0});var k=b(e);n=E(k,l),k.forEach(_),a=I(c),f.l(c),t=I(c),$(o.$$.fragment,c),this.h()},h(){p(e,"for",i[0])},m(c,k){m(c,e,k),d(e,n),m(c,a,k),f.m(c,k),m(c,t,k),A(o,c,k),r=!0},p(c,[k]){(!r||k&1)&&l!==(l=z(c[0])+"")&&S(n,l),(!r||k&1)&&p(e,"for",c[0]),s===(s=u(c))&&f?f.p(c,k):(f.d(1),f=s(c),f&&(f.c(),f.m(t.parentNode,t)));const j={};k&1&&(j.name=c[0]),o.$set(j)},i(c){r||(U(o.$$.fragment,c),r=!0)},o(c){B(o.$$.fragment,c),r=!1},d(c){c&&_(e),c&&_(a),f.d(c),c&&_(t),q(o,c)}}}function he(i,e,l){let{name:n=""}=e,{checked:a=!1}=e;return i.$$set=t=>{"name"in t&&l(0,n=t.name),"checked"in t&&l(1,a=t.checked)},[n,a]}class Ne extends O{constructor(e){super(),L(this,e,he,pe,T,{name:0,checked:1})}}export{Ce as C,Pe as P,Se as S,Ne as a};
