import {EMPLOYEES} from '../data/employees.js';
import {FUNCTIONAL_WORK} from '../data/functional-work.js';
import {findOrgPosition,ORG_RESOLUTIONS} from '../data/org-roles.js';
import {getOrgAssignment} from '../data/org-storage.js';
function esc(v){return String(v).replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]))}
function displayAssignment(role){const value=getOrgAssignment(role);return role.multiple?(value.length?value.join(' • '):'Vacant / TBD'):String(value||'Vacant / TBD')}
function menu(role){
 if(role.editable===false)return '';
 return `<div class="person-menu" data-menu-for="${role.key}" role="menu">${EMPLOYEES.map(n=>`<button type="button" class="person-option" data-person="${esc(n)}">${esc(n)}</button>`).join('')}<button type="button" class="person-option custom" data-custom-person="true">Add custom name…</button></div>`
}
function person(role){
 const value=displayAssignment(role);
 if(role.editable===false)return `<span class="person-select static"><span class="person-picker static-person" title="${esc(value)}">${esc(value)}</span></span>`;
 return `<span class="person-select"><button type="button" class="person-picker" data-person-picker="${role.key}" aria-haspopup="menu" aria-expanded="false" title="${esc(value)}">${esc(value)}</button>${menu(role)}</span>`
}
function href(role){return `./roles/?role=${encodeURIComponent(role.key)}`}
function topCard(role,className,copy){return `<article class="work-top-card ${className}"><a href="${href(role)}" target="_blank" rel="noopener"><h3>${esc(role.title)}</h3></a>${person(role)}<p>${copy}</p></article>`}
export function renderFunctionalWork(){
 const ceo=findOrgPosition('ceo'),reg=findOrgPosition('regulatory'),coo=ORG_RESOLUTIONS[0];
 const cards=FUNCTIONAL_WORK.map(def=>{
  const role=findOrgPosition(def.roleKey);return `<article class="work-function" data-role-key="${role.key}" style="--work-color:${role.color||'#2D6280'}"><div class="work-function-head"><a href="${href(role)}" target="_blank" rel="noopener"><h3>${esc(def.label)}</h3></a>${person(role)}${role.status?`<div class="work-status">${esc(role.status)}</div>`:''}</div><ul>${def.items.map(item=>`<li>${esc(item)}</li>`).join('')}</ul></article>`
 }).join('');
 return `<div class="functional-work-chart"><div class="work-top-row">${topCard(reg,'regulatory','Independent assurance • no direct reports')}${topCard(ceo,'ceo','Enterprise direction and final accountability')}${topCard(coo,'coo','Scope Under Resolution')}</div><div class="work-function-grid">${cards}</div><div class="work-chart-note"><span>Primary view: functional ownership and work scope.</span><button type="button" data-go="s4h">View reporting hierarchy →</button></div></div>`
}
