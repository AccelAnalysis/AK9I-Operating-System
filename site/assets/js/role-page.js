import {findOrgPosition} from './data/org-roles.js';
import {getOrgAssignment} from './data/org-storage.js';
import {buildJobDescription} from './data/job-descriptions.js';
import {applyAuthorityOverrides} from './data/authority-job-overrides.js';
function esc(v){return String(v??'').replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]))}
function assignment(role){const value=getOrgAssignment(role);return role.multiple?(value.length?value.join(', '):'Vacant / TBD'):value}
function list(items){return `<ul>${(items||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`}
function section(title,body,className=''){return `<article class="${className}"><h2>${esc(title)}</h2>${body}</article>`}
function reportingLabel(role){
 if(role.parentTitle)return role.parentTitle;
 if(role.level==='resolution')return 'CEO role-resolution decision';
 if(role.key==='ceo')return 'Ownership / enterprise governance';
 if(role.key==='regulatory')return 'CEO / Majority Owner — independent assurance';
 if(role.contracted)return 'Contracted function — CEO accountability; interim vendor manager: James Overton';
 return 'CEO / Majority Owner';
}
const key=new URLSearchParams(location.search).get('role');
const role=findOrgPosition(key);
const root=document.getElementById('roleRoot');
if(!role){document.title='Role not found — AK9I';root.innerHTML=`<main class="role-page"><a class="back" href="../#s4">← Return to organization chart</a><section class="role-hero"><p class="eyebrow">AK9I Job Description</p><h1>Role not found</h1><p>The requested role is not present in the current AK9I operating model.</p></section></main>`;}else{
 const jd=applyAuthorityOverrides(role,buildJobDescription(role));const parent=`<span>${esc(reportingLabel(role))}</span>`;
 document.title=`${role.title} — AK9I Job Description`;
 root.innerHTML=`<main class="role-page"><header class="role-topbar"><div class="brand"><strong>AK9I</strong><i></i><span>A Brawner Group Company<br>Train. Certify. Deploy. Protect.</span></div><a class="back" href="../#s4">← Return to organization chart</a></header><section class="role-hero ${role.level==='resolution'?'under-review':''}" style="--role-color:${esc(role.color||'#0B2239')}"><p class="eyebrow">AK9I Job Description · Current Functional Alignment</p><h1>${esc(role.title)}</h1>${jd.statusNote?`<div class="status-note">${esc(jd.statusNote)}</div>`:''}<div class="role-meta"><div><label>Current assignee</label><strong>${esc(assignment(role))}</strong></div><div><label>Reports / aligns to</label>${parent}</div></div><p class="purpose">${esc(jd.purpose)}</p></section><section class="role-grid">${section('Primary Responsibilities',list(jd.accountabilities),'wide')}${section('Decision Rights & Limits',list(jd.decisionRights||[jd.authority]))}${section('Required Handoffs',list(jd.handoffs))}${section('Records & Operating Evidence',list(jd.records))}${section('Performance Measures',list(jd.kpis))}${section('Qualifications / Credentials',list(jd.qualifications))}${section('Job-Title Alignment',`<p>${esc(jd.sourceAlignment)}</p>`,'alignment wide')}${section('Operating Standard','<p>This operating-model description defines the intended accountability, authority, evidence, and handoffs for the role. Final HR-approved job descriptions, compensation classifications, employment agreements, regulatory requirements, contracts, and approved policies control where they differ.</p>','standard wide')}</section></main>`;
}
