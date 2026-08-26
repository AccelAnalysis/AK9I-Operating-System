export const DETAILS=[];
export function addDetail(id,origin,code,title,columns,extra={}){DETAILS.push({id,origin,code,title,columns,...extra})}
