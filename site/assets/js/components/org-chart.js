import {EMPLOYEES} from '../data/employees.js';
import {ORG_ROLES,ORG_RESOLUTIONS} from '../data/org-roles.js';
import {getOrgAssignment} from '../data/org-storage.js';
function esc(v){return String(v).replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]))}
function displayAssignment(r){const value=getOrgAssignment(r);if(!r.multiple)return String(value||'Vacant / TBD');if(!value.length)return 'Vacant / TBD';if(value.length<=2)return value.join(' • ');return `${value.slice(0,2).join(' • ')} +${value.length-2}`}
function orgMenu(r){
 if(r.editable===false)return '';
 if(!r.multiple)return `<div class="person-menu" data-menu-for="${r.key}" role="menu">${EMPLOYEES.map(n=>`<button type="button" class="person-option" data-person="${esc(n)}">${esc(n)}</button>`).join('')}<button type="button" class="person-option custom" data-custom-person="true">Add custom name…</button></div>`;
 const current=getOrgAssignment(r),extras=current.filter(n=>!EMPLOYEES.includes(n));const options=[...EMPLOYEES.filter(n=>n!=='Vacant / TBD'&&n!=='External / Contractor'),...extras];
 return `<div class="person-menu multi-menu" data-menu-for="${r.key}" role="menu">${options.map(n=>`<button type="button" class="person-option multi-option${current.includes(n)?' selected':''}" data-multi-person="${esc(n)}"><span class="check">${current.includes(n)?'✓':''}</span>${esc(n)}</button>`).join('')}<button type="button" class="person-option custom" data-group-custom="true">Add custom name…</button><div class="multi-actions"><button type="button" data-group-clear="true">Clear</button><button type="button" data-group-done="true">Done</button></div></div>`
}
function personPicker(r,compact=false){
 const full=r.multiple?(getOrgAssignment(r).join(', ')||'Vacant / TBD'):displayAssignment(r);
 if(r.editable===false)return `<span class="person-select${compact?' compact':''} static"><span class="person-picker static-person" title="${esc(full)}">${esc(displayAssignment(r))}</span></span>`;
 return `<span class="person-select${compact?' compact':''}"><button type="button" class="person-picker" data-person-picker="${r.key}" data-multiple="${r.multiple?'true':'false'}" aria-haspopup="menu" aria-expanded="false" title="${esc(full)}">${esc(displayAssignment(r))}</button>${orgMenu(r)}</span>`
}
function roleHref(r){return `./roles/?role=${encodeURIComponent(r.key)}`}
function roleLink(r,className=''){return `<a class="org-role-link ${className}" href="${roleHref(r)}" target="_blank" rel="noopener" title="Open job description for ${esc(r.title)}">${esc(r.title)}</a>`}
function renderAuthorityNode(role){
 const children=(role.children||[]).map(renderAuthorityNode).join('');
 const classes=['authority-node',role.multiple?'team-node':'',children?'has-children':'',role.coordinationFrom?'has-coordination':''].filter(Boolean).join(' ');
 return `<li class="${classes}" data-role-key="${role.key}"><div class="authority-node-row"><div class="authority-node-title">${roleLink(role)}</div>${personPicker(role,true)}${role.status?`<div class="authority-node-status">${esc(role.status)}</div>`:''}${role.coordinationLabel?`<div class="authority-coordination">${esc(role.coordinationLabel)}</div>`:''}</div>${children?`<ul class="authority-children">${children}</ul>`:''}</li>`
}
export function renderOrg(){
 const ceo=ORG_ROLES.find(r=>r.key==='ceo'),reg=ORG_ROLES.find(r=>r.key==='regulatory'),coo=ORG_RESOLUTIONS[0];
 const funcs=ORG_ROLES.filter(r=>!['ceo','regulatory'].includes(r.key)).map(r=>{
  const children=(r.children||[]).map(renderAuthorityNode).join('');
  const classes=['org-function',r.contracted?'contracted-function':'',r.key==='sales'?'interim-function':''].filter(Boolean).join(' ');
  return `<article class="${classes}" data-role-key="${r.key}" style="--role-color:${r.color}"><div class="org-role-head"><h3>${roleLink(r,'head-link')}</h3>${personPicker(r)}${r.status?`<div class="org-role-status">${esc(r.status)}</div>`:''}</div><div class="org-function-body">${children?`<ul class="authority-tree">${children}</ul>`:`<p class="org-seat-note">${esc(r.chartNote||'Functional accountability')}</p>`}${children&&r.chartNote?`<p class="org-function-note">${esc(r.chartNote)}</p>`:''}</div></article>`
 }).join('');
 return `<div class="org-canvas authority-chart"><div class="org-top"><article class="org-top-card regulatory"><h3>${roleLink(reg,'top-link')}</h3>${personPicker(reg)}<p>Independent assurance • no direct reports</p></article><article class="org-top-card ceo"><h3>${roleLink(ceo,'top-link')}</h3>${personPicker(ceo)}<p>Enterprise direction and final accountability</p></article><article class="org-top-card coo"><h3>${roleLink(coo,'top-link')}</h3>${personPicker(coo)}<p class="scope-status">Scope Under Resolution</p></article></div><svg class="org-transition-links" viewBox="0 0 1000 748" preserveAspectRatio="none" aria-hidden="true"><path class="coo-admin-link" d="M770 105 C820 126 890 154 946 208"/></svg><div class="org-functions">${funcs}</div></div>`
}
