const e=e=>new Promise((o,r)=>{let t=new Image;t.onload=(()=>o({path:e,status:"ok"})),t.onerror=(()=>r({path:e,status:"error"})),t.src=e});export default o=>Promise.all(o.map(e));
