const KEY='ak9iPortfolioOwnerAssignmentsV1';

function read(){
 try{return JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch{return {}}
}
function write(value){
 try{localStorage.setItem(KEY,JSON.stringify(value))}catch{}
}

export function getPortfolioOwners(action){
 const saved=read()[action.id];
 return action.owners.map((fallback,index)=>String(saved?.[index]||fallback||'Vacant / TBD'));
}

export function savePortfolioOwner(action,index,name){
 const all=read(),current=Array.isArray(all[action.id])?[...all[action.id]]:[...action.owners];
 while(current.length<action.owners.length)current.push('Vacant / TBD');
 current[index]=String(name||'Vacant / TBD');
 all[action.id]=current;
 write(all);
 return current;
}
