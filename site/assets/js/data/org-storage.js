export const ORG_STORAGE_PREFIX='ak9i-org-v4-';
export function getOrgAssignment(role){
 const fallback=role.multiple?(Array.isArray(role.initial)?role.initial:[]):role.initial;
 try{
   const raw=localStorage.getItem(ORG_STORAGE_PREFIX+role.key);
   if(raw===null)return fallback;
   if(role.multiple){const parsed=JSON.parse(raw);return Array.isArray(parsed)?parsed:fallback;}
   return raw;
 }catch{return fallback;}
}
export function saveOrgAssignment(role,value){
 try{localStorage.setItem(ORG_STORAGE_PREFIX+role.key,role.multiple?JSON.stringify(value):value);}catch{}
}
export function clearOrgAssignment(role){try{localStorage.removeItem(ORG_STORAGE_PREFIX+role.key)}catch{}}
