import {EMPLOYEES} from '../data/employees.js';
import {ORG_ROLES,ORG_RESOLUTIONS,findOrgPosition} from '../data/org-roles.js';
import {getOrgAssignment} from '../data/org-storage.js';

function esc(v){return String(v).replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]))}
function displayAssignment(r){const value=getOrgAssignment(r);if(!r.multiple)return String(value||'Vacant / TBD');if(!value.length)return 'Vacant / TBD';if(value.length<=2)return value.join(' • ');return `${value.slice(0,2).join(' • ')} +${value.length-2}`}
function rosterValues(r){const value=getOrgAssignment(r);if(!r.multiple)return [String(value||'Vacant / TBD')];return value.length?value:['Vacant / TBD']}
function orgMenu(r){
 if(r.editable===false)return '';
 if(!r.multiple)return `<div class="person-menu" data-menu-for="${r.key}" role="menu">${EMPLOYEES.map(n=>`<button type="button" class="person-option" data-person="${esc(n)}">${esc(n)}</button>`).join('')}<button type="button" class="person-option custom" data-custom-person="true">Add custom name…</button></div>`;
 const current=getOrgAssignment(r),extras=current.filter(n=>!EMPLOYEES.includes(n));const options=[...EMPLOYEES.filter(n=>n!=='Vacant / TBD'&&n!=='External / Contractor'),...extras];
 return `<div class="person-menu multi-menu" data-menu-for="${r.key}" role="menu">${options.map(n=>`<button type="button" class="person-option multi-option${current.includes(n)?' selected':''}" data-multi-person="${esc(n)}"><span class="check">${current.includes(n)?'✓':''}</span>${esc(n)}</button>`).join('')}<button type="button" class="person-option custom" data-group-custom="true">Add custom name…</button><div class="multi-actions"><button type="button" data-group-clear="true">Clear</button><button type="button" data-group-done="true">Done</button></div></div>`
}
function personPicker(r,compact=false,fixedLabel=''){
 const full=r.multiple?(getOrgAssignment(r).join(', ')||'Vacant / TBD'):displayAssignment(r),shown=fixedLabel||displayAssignment(r);
 if(r.editable===false)return `<span class="person-select${compact?' compact':''} static"><span class="person-picker static-person" title="${esc(full)}">${esc(shown)}</span></span>`;
 return `<span class="person-select${compact?' compact':''}"><button type="button" class="person-picker" data-person-picker="${r.key}" data-multiple="${r.multiple?'true':'false'}"${fixedLabel?' data-picker-label="fixed"':''} aria-haspopup="menu" aria-expanded="false" aria-label="${esc(fixedLabel?`${fixedLabel}: ${full}`:full)}" title="${esc(full)}">${esc(shown)}</button>${orgMenu(r)}</span>`
}
function roleHref(r){return `./roles/?role=${encodeURIComponent(r.key)}`}
function roleLink(r,className=''){return `<a class="org-role-link ${className}" href="${roleHref(r)}" target="_blank" rel="noopener" title="Open job description for ${esc(r.title)}">${esc(r.title)}</a>`}
function renderRoster(r){const names=rosterValues(r),large=names.length>6?' large-roster':'';return `<div class="team-roster${large}" data-team-roster="${r.key}">${names.map(n=>`<span class="team-roster-name">${esc(n)}</span>`).join('')}</div>`}
function coordinationText(role){
 const template=role.coordinationLabel||'';
 if(!template)return '';
 const source=role.coordinationFrom?findOrgPosition(role.coordinationFrom):null;
 const coordinator=source?displayAssignment(source):'the assigned lead';
 return template.split('{coordinator}').join(coordinator)
}
function renderBranchNode(role){
 const children=role.children||[];
 const classes=['branch-node',role.multiple?'team-branch':'position-branch',children.length?'has-children':'',role.coordinationFrom?'has-coordination':''].filter(Boolean).join(' ');
 const assignment=role.multiple?`<div class="team-assignment"><span>Assigned roster</span>${personPicker(role,true,'Edit roster')}</div>${renderRoster(role)}`:personPicker(role,true);
 const coordination=role.coordinationLabel?`<div class="branch-coordination" data-coordination-from="${esc(role.coordinationFrom||'')}" data-coordination-template="${esc(role.coordinationLabel)}">${esc(coordinationText(role))}</div>`:'';
 return `<div class="${classes}" data-role-key="${role.key}"><div class="branch-node-card"><div class="branch-node-title">${roleLink(role)}</div>${assignment}${role.status?`<div class="branch-node-status">${esc(role.status)}</div>`:''}${coordination}</div>${children.length?`<div class="branch-children child-count-${children.length}">${children.map(renderBranchNode).join('')}</div>`:''}</div>`
}
function renderLeaderCard(r){
 const classes=['hierarchy-leader',r.contracted?'contracted-leader':'',r.key==='sales'?'interim-leader':'',r.children?.length?'has-team':''].filter(Boolean).join(' ');
 return `<article class="${classes}" data-role-key="${r.key}" style="--role-color:${r.color}"><div class="leader-accent"></div><h3>${roleLink(r,'head-link')}</h3>${personPicker(r)}${r.status?`<div class="leader-status">${esc(r.status)}</div>`:''}${r.children?.length?'<div class="team-cue">Team shown below</div>':''}</article>`
}
function renderDepartmentBranch(r){const children=r.children||[];return `<section class="department-branch" data-branch-parent="${r.key}" style="--role-color:${r.color}"><div class="department-branch-head"><span>Direct reporting branch</span><small>${esc(r.title)}</small></div><div class="department-children child-count-${children.length}">${children.map(renderBranchNode).join('')}</div></section>`}

export function renderOrg(){
 const ceo=ORG_ROLES.find(r=>r.key==='ceo'),reg=ORG_ROLES.find(r=>r.key==='regulatory'),coo=ORG_RESOLUTIONS[0];
 const funcs=ORG_ROLES.filter(r=>!['ceo','regulatory'].includes(r.key));
 const leaders=funcs.map(renderLeaderCard).join('');
 const branches=funcs.filter(r=>r.children?.length).map(renderDepartmentBranch).join('');
 return `<div class="org-canvas authority-chart hierarchy-v2">
  <svg class="hierarchy-links" viewBox="0 0 1000 650" preserveAspectRatio="none" aria-hidden="true">
   <path class="authority-line executive-link regulatory-ceo-link" d="M342 18 H374 V50 H408"/>
   <path class="authority-line executive-link" d="M592 50 H658"/>
   <path class="authority-line" d="M500 96 V132"/>
   <path class="authority-line" d="M63 132 H938"/>
   <path class="authority-line" d="M63 132 V159"/><path class="authority-line" d="M188 132 V159"/><path class="authority-line" d="M313 132 V159"/><path class="authority-line" d="M438 132 V159"/><path class="authority-line" d="M563 132 V159"/><path class="contract-line" d="M688 132 V159"/><path class="authority-line" d="M813 132 V159"/><path class="authority-line" d="M938 132 V159"/>
   <path class="coordination-line" d="M760 96 C800 118 865 132 938 159"/>
   <path class="authority-line branch-link" d="M63 252 V276 H125 V294"/>
   <path class="authority-line branch-link" d="M188 252 V276 H375 V294"/>
   <path class="authority-line branch-link" d="M313 252 V264 H425 V284 H625 V294"/>
   <path class="authority-line branch-link" d="M938 252 V276 H875 V294"/>
  </svg>
  <div class="hierarchy-executives">
   <article class="hierarchy-exec-card regulatory"><h3>${roleLink(reg,'top-link')}</h3>${personPicker(reg)}<p>Independent assurance</p></article>
   <article class="hierarchy-exec-card ceo"><h3>${roleLink(ceo,'top-link')}</h3>${personPicker(ceo)}<p>Enterprise direction and final accountability</p></article>
   <article class="hierarchy-exec-card coo"><h3>${roleLink(coo,'top-link')}</h3>${personPicker(coo)}</article>
  </div>
  <div class="hierarchy-leaders">${leaders}</div>
  <div class="hierarchy-branches">${branches}</div>
 </div>`
}
