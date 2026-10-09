/* Fictional demo dataset, generated in the browser. No real infrastructure data. */
(function(){
let s=42;const r=()=>(s=(s*16807)%2147483647)/2147483647,pick=a=>a[Math.floor(r()*a.length)];
const hex=()=>Math.floor(r()*256).toString(16).toUpperCase().padStart(2,"0"),mac=()=>"02:"+[1,2,3,4,5].map(hex).join(":");
const F=["Ahmed","Sara","Omar","Lina","Yusuf","Mariam","Ali","Noor","Hassan","Fatima","Karim","Dana","Rami","Huda","Samir","Rana","Tariq","Layla","Ziad","Maya"],
L=["Haddad","Nasser","Saleh","Khalil","Farah","Aziz","Mansour","Rahman","Qasim","Darwish"],
D=["Finance","Operations","Human Resources","Sales","Compliance","Information Technology","Wealth Management","Legal"],
V=["Hewlett Packard","Dell Inc.","Lenovo","Intel Corporate"],dev=[],ppl=[];
const ranges=[{id:"10.20.1",prefix:"10.20.1",start:1,end:254,name:"Contoso Office LAN",site:"Head Office",defaultStatus:"free",note:""},
{id:"10.20.2",prefix:"10.20.2",start:1,end:254,name:"Servers & Printers",site:"Head Office",defaultStatus:"free",note:""},
{id:"10.30.1",prefix:"10.30.1",start:1,end:254,name:"Branch Office",site:"Branch",defaultStatus:"free",note:"Demo note: per-network notes appear here (e.g. WAN link status)."}];
for(let i=2;i<150;i++){if(r()<.15)continue;const fn=pick(F),ln=pick(L),dp=pick(D),t=r()<.6?"Workstation":r()<.5?"IP Phone":"Laptop";
 const d={ip:"10.20.1."+i,status:r()<.8?"up":"down",host:t==="IP Phone"?"SEP"+mac().replace(/:/g,""):dp.slice(0,3).toUpperCase()+"-"+fn.toUpperCase()+String(i).padStart(2,"0"),
 mac:mac(),vendor:t==="IP Phone"?"Cisco Systems":pick(V),type:t,owner:fn+" "+ln,dept:dp,email:fn[0].toLowerCase()+"."+ln.toLowerCase()+"@contoso.example",critical:"No",lastSeen:"",flags:r()<.04?"Demo finding: hostname on 2 IPs":""};
 dev.push(d);ppl.push(d)}
[["DC01","Server","Domain Controller"],["DC02","Server","Domain Controller"],["MAIL01","Server","Mail server"],["FILE01","Server","File server"],["FW01","Firewall","Perimeter firewall"],["CORE-SW1","Switch","Core switch"],["HV01","Server","Hypervisor host"],["HV02","Server","Hypervisor host"],["BKP01","Server","Backup server"]]
 .forEach(([h,t,ro],k)=>dev.push({ip:"10.20.2."+(k+1),status:h==="BKP01"?"down":"up",host:h,mac:mac(),vendor:t==="Server"?"Dell Inc.":"Cisco Systems",type:t,role:ro,critical:"Yes",lastSeen:"",flags:""}));
for(let k=0;k<12;k++)dev.push({ip:"10.20.2."+(50+k),status:r()<.75?"up":"down",host:"PRN-FLOOR"+(k%4+1)+"-"+String(k+1).padStart(2,"0"),mac:mac(),vendor:pick(["Konica Minolta","Ricoh","HP"]),type:"Printer",critical:"No",lastSeen:"",flags:""});
for(let i=2;i<40;i++){if(r()<.3)continue;const x=r();dev.push({ip:"10.30.1."+i,status:x<.67?"up":x<.89?"down":"unverified",host:"BR-PC"+String(i).padStart(2,"0"),mac:mac(),vendor:pick(V),type:"Workstation",owner:pick(F)+" "+pick(L),dept:"Branch Operations",critical:"No",lastSeen:"",flags:""})}
window.NET_DATA={generated:"2026-10-09T09:05:00+03:00",mode:"snapshot",probe:"demo dataset (fictional)",intervalMin:5,alertTo:["it-alerts@contoso.example"],ranges,devices:dev,
 events:[{time:"2026-10-09 08:41",type:"DOWN",host:"BKP01",ip:"10.20.2.9"},{time:"2026-10-09 08:55",type:"UP",host:"PRN-FLOOR2-06",ip:"10.20.2.55"},{time:"2026-10-09 09:02",type:"NEW",host:"(unknown)",ip:"10.20.1.201"}]};
const p=ppl[7],u="CONTOSO\\"+p.email.split("@")[0];
window.SEC_DATA={generated:"2026-10-09T09:15:00+03:00",mode:"demo",events:[
["09:02:11","Critical","VIRUS DETECTED","Virus:DOS/EICAR_Test_File","C:\\Users\\demo\\Downloads\\eicar.com | severity Severe"],
["09:02:12","High","VIRUS ACTION TAKEN","Virus:DOS/EICAR_Test_File","Action: Quarantine"],
["09:05:40","Info","APP INSTALLED","Google Chrome","Version 129 | approved"],
["09:09:20","Medium","FILE DOWNLOADED","RemoteTool_Setup.exe","from https://downloads.example.com/ | via msedge.exe"],
["09:10:02","High","APP INSTALLED","RemoteTool","Installed by RemoteTool_Setup.exe | NOT on approved list"],
["09:10:05","High","NEW SERVICE","RemoteToolSvc","C:\\Program Files\\RemoteTool\\svc.exe | auto start | LocalSystem"]]
 .map(([t,sv,ty,w,de])=>({time:"2026-10-09 "+t,sev:sv,type:ty,pc:p.host,ip:p.ip,user:u,owner:p.owner,what:w,detail:de}))};
})();
