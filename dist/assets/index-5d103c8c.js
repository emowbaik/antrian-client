import{a as e}from"./axios-ffe46ef9.js";import{u as w}from"./execute-06bfbd1f.js";import{r}from"./index-b859e472.js";import{F as o}from"./runtime-core.esm-bundler-cfb3c51b.js";function k(){const n=o([]),s=o({}),{confirm:p,accepted:i,rejected:g}=w();async function c(){const a=await e.get("/api/panel/mitra");n.value=a.data}async function u(){const a=await e.get("/api/panel/mitra?type=option");n.value=a.data}async function m(a=""){const t=await e.get(`/api/panel/mitra/search?keyword=${a}`);n.value=t.data}async function l(a,t){try{await e.put(`/api/panel/mitra/${a}/update`,t),r.back(),await i("Data Telah Disimpan")}catch(y){s.value=y}}async function f(a){try{await e.post("/api/panel/mitra",a),r.back(),i("Data Telah Disimpan")}catch(t){s.value=t}}async function d(a){const t=await e.get(`/api/panel/mitra/${a}`);n.value=t.data}async function h(a){(await p("Apa anda ingin menghapus data ini?")).isConfirmed&&(i("Data Telah Dihapus"),await e.delete(`/api/panel/mitra/${a}`),r.push({path:"/pengaturan/mitra"}))}return{mitra:n,index:c,option:u,search:m,store:f,update:l,destroy:h,show:d}}export{k as u};