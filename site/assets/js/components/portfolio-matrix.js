import {chrome} from './shared.js';
import {EMPLOYEES} from '../data/employees.js';
import {PORTFOLIO_FOUNDATIONS,PORTFOLIO_STAGE_ORDER,PORTFOLIO_STAGES,PORTFOLIO_GROUPS,PORTFOLIO_ACTIONS,PORTFOLIO_DEFINE_FIRST} from '../data/portfolio-matrix.js';
import {RON_PORTFOLIO_COVERAGE} from '../data/portfolio-coverage.js';
import {getPortfolioOwners} from '../data/portfolio-storage.js';

const PEOPLE=[...new Set([...EMPLOYEES,'Jonathan Holman','Jillian / Approved Partner Vendors'])];
function esc(value){return String(value??'').replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]))}
function ownerSelect(action,index,current){
 const key=`${action.id}:${index}`;
 return `<label class="portfolio-owner"><span class="sr-only">Responsible party</span><select class="portfolio-owner-picker" data-portfolio-owner-select="${esc(key)}" aria-label="Change responsible party for ${esc(action.title)}">${PEOPLE.map(name=>`<option value="${esc(name)}"${name===current?' selected':''}>${esc(name)}</option>`).join('')}</select></label>`;
}
function owners(action){return `<div class="portfolio-owners">${getPortfolioOwners(action).map((name,index)=>ownerSelect(action,index,name)).join('<span class="portfolio-owner-join">+</span>')}</div>`}
function check(action,stage){
 if(!action.stageDetails?.[stage])return '<span class="portfolio-empty" aria-hidden="true">·</span>';
 const s=PORTFOLIO_STAGES[stage];
 return `<button type="button" class="portfolio-check" style="--stage-color:${s.color}" data-portfolio-check="${action.id}" data-portfolio-stage="${stage}" title="Open ${esc(s.name)} implementation detail" aria-label="Open implementation detail for ${esc(action.title)} at ${esc(s.name)}">✓</button>`;
}
function foundationColumn(title,number,items,cls){return `<article class="portfolio-foundation-card ${cls}"><div class="portfolio-foundation-kicker"><span>${number}</span>${title}</div>${items.map(([h,b])=>`<div class="portfolio-foundation-item"><strong>${esc(h)}</strong><p>${esc(b)}</p></div>`).join('')}</article>`}
function matrixRows(){
 const out=[];
 for(const [groupId,label] of PORTFOLIO_GROUPS){
  out.push(`<tr class="portfolio-group-row"><th colspan="10">${esc(label)}</th></tr>`);
  for(const action of PORTFOLIO_ACTIONS.filter(x=>x.group===groupId)){
   out.push(`<tr data-portfolio-action-row="${action.id}"><td class="portfolio-action-cell"><strong>${esc(action.title)}</strong>${action.sourceNote?`<small>${esc(action.sourceNote)}</small>`:''}</td><td><span class="portfolio-posture ${action.posture.toLowerCase().replace(/[^a-z]+/g,'-')}">${esc(action.posture)}</span></td>${PORTFOLIO_STAGE_ORDER.map(stage=>`<td class="portfolio-stage-cell">${check(action,stage)}</td>`).join('')}<td class="portfolio-owner-cell">${owners(action)}</td></tr>`);
  }
 }
 out.push('<tr class="portfolio-group-row define"><th colspan="10">Define first / hold — retained from Ron’s plan but not forced into a pipeline stage</th></tr>');
 for(const item of PORTFOLIO_DEFINE_FIRST){
  out.push(`<tr class="portfolio-define-row"><td class="portfolio-action-cell"><strong>${esc(item.title)}</strong><small>${esc(item.note)}</small></td><td><span class="portfolio-posture define-first">${esc(item.posture)}</span></td>${PORTFOLIO_STAGE_ORDER.map(()=>'<td class="portfolio-stage-cell"><span class="portfolio-empty">·</span></td>').join('')}<td class="portfolio-owner-cell">${owners(item)}</td></tr>`);
 }
 return out.join('');
}
function coverageRows(){
 const out=[];let group='';
 for(const row of RON_PORTFOLIO_COVERAGE){
  if(row.group!==group){group=row.group;out.push(`<tr class="portfolio-coverage-group"><th colspan="4">${esc(group)}</th></tr>`)}
  out.push(`<tr><td><strong>${esc(row.item)}</strong></td><td>${esc(row.where)}</td><td><span class="portfolio-posture ${row.disposition.toLowerCase().replace(/[^a-z]+/g,'-')}">${esc(row.disposition)}</span></td><td>${esc(row.note)}</td></tr>`);
 }
 return out.join('');
}

export function renderPortfolioSlides(){return `
<section class="slide portfolio-slide" id="portfolio-foundations" data-origin="s12">${chrome('90-DAY INITIATIVE PORTFOLIO','P1')}<div class="slide-inner portfolio-inner"><p class="eyebrow">Portfolio Alignment</p><h1 class="headline compact">Two Foundations Govern the Work. The Pipeline Sequences It.</h1><p class="subheadline">Every item from Ronald Brawner’s 30-60-90 plan stays visible, but work is sequenced by operating-system dependency, customer-pipeline repair order, capacity, and demonstrated value — not assumed concurrency.</p><div class="portfolio-foundation-grid">${foundationColumn('Management Operating System','1',PORTFOLIO_FOUNDATIONS.management,'management')}${foundationColumn('AK9I Brand System','2',PORTFOLIO_FOUNDATIONS.brand,'brand')}</div><div class="portfolio-note-row"><div><strong>Medical LMS item retained.</strong><span>Ron explicitly included “Medical LMS content integrated” and “LMS selling online medical coursework” in his 30-day milestones, so those items remain in the portfolio rather than being treated as an unapproved addition.</span></div><div class="portfolio-note-actions"><button type="button" data-go="portfolio-coverage">Verify Ron plan coverage</button><button type="button" data-go="portfolio-matrix">Open seven-stage initiative matrix →</button></div></div><div class="portfolio-back"><button type="button" data-return="s12">↩ Return to Customer Pipeline</button></div></div></section>
<section class="slide portfolio-slide" id="portfolio-matrix" data-origin="s12">${chrome('90-DAY INITIATIVE PORTFOLIO','P2')}<div class="slide-inner portfolio-inner matrix-page"><div class="portfolio-matrix-head"><div><p class="eyebrow">Seven-Stage Initiative Matrix</p><h1 class="headline compact">Sequence the Portfolio From Advocacy Back to Awareness.</h1><p class="subheadline">A check means the initiative is intentionally built or repaired at that stage. Click any check for implementation detail. Click a responsible party name to change the local draft assignment.</p></div><div class="portfolio-matrix-actions"><button type="button" data-go="portfolio-foundations">Foundations</button><button type="button" data-go="portfolio-coverage">Ron Plan Coverage</button><button type="button" data-return="s12">Return to Pipeline</button></div></div><div class="portfolio-table-wrap"><table class="portfolio-table"><thead><tr><th>Initiative / Action</th><th>Posture</th>${PORTFOLIO_STAGE_ORDER.map(stage=>`<th style="--stage-color:${PORTFOLIO_STAGES[stage].color}"><span>${stage}</span>${esc(PORTFOLIO_STAGES[stage].name)}</th>`).join('')}<th>Potential Responsible Party</th></tr></thead><tbody>${matrixRows()}</tbody></table></div><div class="portfolio-matrix-legend"><span><b>✓</b> click for stage-specific implementation</span><span><b>NOW</b> urgent downstream foundation / quality</span><span><b>NEXT</b> activate after immediate foundation</span><span><b>LATER</b> retain without displacing higher-priority repair</span></div></div></section>
<section class="slide portfolio-slide portfolio-coverage-slide" id="portfolio-coverage" data-origin="s12">${chrome('90-DAY INITIATIVE PORTFOLIO','P3')}<div class="slide-inner portfolio-inner matrix-page"><div class="portfolio-matrix-head"><div><p class="eyebrow">Completeness Control</p><h1 class="headline compact">Every Item in Ron’s 30-60-90 Plan Remains Accounted For.</h1><p class="subheadline">This register preserves the source plan even when the operating recommendation is to reframe, scope-correct, defer, stage-gate, or define an item before execution.</p></div><div class="portfolio-matrix-actions"><button type="button" data-go="portfolio-foundations">Foundations</button><button type="button" data-go="portfolio-matrix">Initiative Matrix</button><button type="button" data-return="s12">Return to Pipeline</button></div></div><div class="portfolio-coverage-wrap"><table class="portfolio-coverage-table"><thead><tr><th>Ron source item</th><th>Where represented</th><th>Disposition</th><th>Operating treatment</th></tr></thead><tbody>${coverageRows()}</tbody></table></div></div></section>
<section class="slide portfolio-slide portfolio-detail-slide" id="portfolio-detail" data-origin="portfolio-matrix">${chrome('PIPELINE IMPLEMENTATION DETAIL','PX')}<div class="slide-inner portfolio-inner"><div class="portfolio-detail-head"><div><p class="eyebrow" id="portfolioDetailEyebrow">Pipeline Stage</p><h1 class="headline compact" id="portfolioDetailTitle">Initiative implementation</h1><p class="subheadline" id="portfolioDetailSubtitle"></p></div><div class="portfolio-detail-badge" id="portfolioDetailBadge"></div></div><div class="portfolio-detail-grid"><article><h3>Why this stage</h3><p id="portfolioDetailWhy"></p></article><article><h3>Implementation at this point</h3><p id="portfolioDetailImplementation"></p><p class="portfolio-source-note" id="portfolioDetailSource"></p></article><article><h3>Exit evidence / handoff</h3><p id="portfolioDetailEvidence"></p><div class="portfolio-detail-owners"><span>Responsible party</span><strong id="portfolioDetailOwners"></strong></div></article></div><div class="detail-nav"><button type="button" class="return" data-return="portfolio-matrix">↩ Return to initiative matrix</button></div></div></section>
`}
