import{g as d,s as y}from"./utils-d6e70818.js";const p="http",s=`${p}://${d()}/api`,n={};new Headers({"Content-Type":"application/json"});const $=async(e,t,r)=>{y.subscribe(h=>{});const c=new Headers({});let a;if(r===void 0||r===""?a=await fetch(e,{method:t,headers:c}):a=await fetch(e,{method:t,headers:c,body:r}),!a.ok)throw new Error(a.statusText);return a.json()},u=async e=>$(e,"GET"),o=async(e,t)=>$(e,"POST",t),l=async(e,t)=>$(e,"PUT",t),i=async e=>$(e,"DELETE");n.fetchAll=async e=>{const t=`${s}/${e}`;return u(t)};n.fetchDistinct=async(e,t)=>{const r=`${s}/${e}?fields=${t}&group=${t}&filter=${t} is not null`;return u(r)};n.fetchPaged=async(e,t,r)=>{r===0&&r++;const a=`${s}/${e}?limit=${t}&offset=${r}&include_count=true&page[number]=${r}`;return u(a)};n.fetchFiltered=async(e,t)=>{const r=`${s}/${e}?filter=${t}`;return u(r)};n.fetchFilteredPaged=async(e,t,r,c)=>{const a=`${s}/${e}?limit=${t}&offset=${r}&include_count=true&filter=${c}`;return u(a)};n.fetchById=async(e,t)=>{const r=`${s}/${e}/${t}`;return u(r)};n.create=async(e,t)=>{const r=`${s}/${e}`;return o(r,t)};n.createByFields=async(e,t,r)=>{const c=`${s}/${e}?id_field=${t}`;return o(c,r)};n.updateById=async(e,t,r)=>{const c=`${s}/${e}/${t}`;return l(c,r)};n.update=async(e,t,r)=>await n.updateById(e,t,r);n.updateByFields=async(e,t,r)=>{r=r.replace(":true",":1");const c=`${s}/${e}?id_field=${t}`;return l(c,r)};n.remove=async(e,t)=>{const r=`${s}/${e}/${t}`;return i(r)};n.removeByFilter=async(e,t)=>{const r=`${s}/${e}?filter=${t}`;return i(r)};export{n as B};