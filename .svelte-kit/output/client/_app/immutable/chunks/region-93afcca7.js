import{B as n}from"./base-dabcb94e.js";const r="regions",s={};s.fetchAll=async()=>n.fetchAll(r);s.fetchPaged=async(e,t)=>await n.fetchPaged(r,e,t);s.fetchById=async e=>n.fetchById(r,e);s.create=async e=>{const t=[];t[0]=e;const c=JSON.stringify({resource:t});return(await n.create(r,c)).resource[0].RegionId};s.update=async e=>{const t=e.RegionId,o=JSON.stringify(e);return(await n.update(r,t,o)).RegionId};s.remove=async e=>await n.remove(r,e);export{s as R};
