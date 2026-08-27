import {MAIN_SLIDES} from './data/main-slides.js';
import {DETAILS,addDetail} from './data/details.js';
import {findOrgPosition} from './data/org-roles.js';
import {getOrgAssignment,saveOrgAssignment} from './data/org-storage.js';
import {registerManagementDetails} from './details/management.js';
import {registerBrandDetails} from './details/brand.js';
import {registerPipelineDetails} from './details/pipeline.js';
import {renderOpeningSlides} from './slides/opening.js';
import {renderManagementSlides} from './slides/management.js';
import {renderBrandSlides} from './slides/brand.js';
import {renderPipelineSlides} from './slides/pipeline.js';
import {renderClosingSlides} from './slides/closing.js';
import {renderDetails,renderSources} from './renderers.js';

registerManagementDetails(addDetail);
registerBrandDetails(addDetail);
registerPipelineDetails(addDetail);

const mainOrder=MAIN_SLIDES.map(s=>s.id);
const slideTitles=Object.fromEntries(MAIN_SLIDES.map(s=>[s.id,s.title]));
DETAILS.forEach(d=>slideTitles[d.id]=d.title);
slideTitles.sources='Sources and Implementation Notes';

document.getElementById('slides').innerHTML=[
  renderOpeningSlides(),
  renderManagementSlides(),
  renderBrandSlides(),
  renderPipelineSlides(),
  renderClosingSlides(),
  renderDetails(DETAILS,slideTitles),
  renderSources()
].join('');

let currentId='s1';
function resizeStage(){const scale=Math.min(innerWidth/1920,innerHeight/1080);document.getElementById('stage').style.transform=`scale(${scale})`}
function closeMenus(){document.querySelectorAll('.person-menu.open').forEach(m=>m.classList.remove('open'));document.querySelectorAll('.person-picker[aria-expanded="true"]').forEach(b=>b.setAttribute('aria-expanded','false'))}
function showSlide(id,{updateHash=true}={}){const target=document.getElementById(id);if(!target)return;document.querySelectorAll('.slide.active').forEach(s=>s.classList.remove('active'));target.classList.add('active');currentId=id;closeMenus();updateCounter();if(updateHash)history.replaceState(null,'','#'+id);document.title=`${slideTitles[id]||'AK9I Presentation'} — AK9I`}
function mainIndex(){const s=document.getElementById(currentId);if(s?.dataset.main==='true')return mainOrder.indexOf(currentId);return Math.max(0,mainOrder.indexOf(s?.dataset.origin))}
function nextMain(){const i=mainIndex();showSlide(mainOrder[Math.min(i+1,mainOrder.length-1)])}
function prevMain(){const i=mainIndex();showSlide(mainOrder[Math.max(i-1,0)])}
function updateCounter(){const el=document.getElementById('control-counter'),s=document.getElementById(currentId);el.textContent=s?.dataset.main==='true'?`${Number(s.dataset.mainNum)} / ${mainOrder.length}`:currentId==='sources'?'Sources':'Detail'}
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(t._timer);t._timer=setTimeout(()=>t.classList.remove('show'),1800)}
function displayValue(role,value){if(!role?.multiple)return String(value||'Vacant / TBD');if(!value?.length)return 'Vacant / TBD';if(value.length<=2)return value.join(' • ');return `${value.slice(0,2).join(' • ')} +${value.length-2}`}
function refreshAssignment(key){const role=findOrgPosition(key);if(!role)return;const value=getOrgAssignment(role),full=role.multiple?(value.join(', ')||'Vacant / TBD'):String(value||'Vacant / TBD');document.querySelectorAll(`[data-person-picker="${key}"]`).forEach(b=>{b.textContent=displayValue(role,value);b.title=full});document.querySelectorAll(`[data-menu-for="${key}"] [data-multi-person]`).forEach(b=>{const selected=Array.isArray(value)&&value.includes(b.dataset.multiPerson);b.classList.toggle('selected',selected);const check=b.querySelector('.check');if(check)check.textContent=selected?'✓':''})}
function setAssignment(key,name){const role=findOrgPosition(key);if(!role)return;saveOrgAssignment(role,name);refreshAssignment(key);closeMenus();toast(`${name} assigned.`)}
function toggleGroupPerson(key,name){const role=findOrgPosition(key);if(!role?.multiple)return;const current=[...getOrgAssignment(role)],i=current.indexOf(name);if(i>=0)current.splice(i,1);else current.push(name);saveOrgAssignment(role,current);refreshAssignment(key)}
function clearGroup(key){const role=findOrgPosition(key);if(!role?.multiple)return;saveOrgAssignment(role,[]);refreshAssignment(key);toast('Team assignment cleared.')}
function addGroupCustom(key){const role=findOrgPosition(key);if(!role?.multiple)return;const name=prompt('Enter the name to add to this team:');if(!name?.trim())return;const current=[...getOrgAssignment(role)];if(!current.includes(name.trim()))current.push(name.trim());saveOrgAssignment(role,current);refreshAssignment(key);toast(`${name.trim()} added.`)}

document.addEventListener('click',e=>{
  const picker=e.target.closest('[data-person-picker]');
  if(picker){e.stopPropagation();const key=picker.dataset.personPicker,menu=picker.parentElement.querySelector(`[data-menu-for="${key}"]`),was=menu.classList.contains('open');closeMenus();if(!was){menu.classList.add('open');picker.setAttribute('aria-expanded','true')}return}
  const multi=e.target.closest('[data-multi-person]');
  if(multi){e.stopPropagation();toggleGroupPerson(multi.closest('.person-menu').dataset.menuFor,multi.dataset.multiPerson);return}
  const groupClear=e.target.closest('[data-group-clear]');
  if(groupClear){e.stopPropagation();clearGroup(groupClear.closest('.person-menu').dataset.menuFor);return}
  const groupDone=e.target.closest('[data-group-done]');
  if(groupDone){e.stopPropagation();closeMenus();return}
  const groupCustom=e.target.closest('[data-group-custom]');
  if(groupCustom){e.stopPropagation();addGroupCustom(groupCustom.closest('.person-menu').dataset.menuFor);return}
  const opt=e.target.closest('[data-person]');
  if(opt){e.stopPropagation();setAssignment(opt.closest('.person-menu').dataset.menuFor,opt.dataset.person);return}
  const custom=e.target.closest('[data-custom-person]');
  if(custom){e.stopPropagation();const name=prompt('Enter the name to display for this position:');if(name&&name.trim())setAssignment(custom.closest('.person-menu').dataset.menuFor,name.trim());return}
  const d=e.target.closest('[data-detail-target]');if(d){e.preventDefault();showSlide(d.dataset.detailTarget);return}
  const g=e.target.closest('[data-go]');if(g){e.preventDefault();showSlide(g.dataset.go);return}
  const r=e.target.closest('[data-return]');if(r){e.preventDefault();showSlide(r.dataset.return);return}
  if(!e.target.closest('a'))closeMenus();
});

function buildOverview(){document.getElementById('overviewGrid').innerHTML=MAIN_SLIDES.map(s=>`<button type="button" class="overview-item" data-overview-go="${s.id}"><strong>${String(s.num).padStart(2,'0')} — ${s.title}</strong><span>${s.summary}</span></button>`).join('')}
buildOverview();
document.getElementById('overviewGrid').addEventListener('click',e=>{const b=e.target.closest('[data-overview-go]');if(!b)return;document.getElementById('overviewModal').classList.remove('open');showSlide(b.dataset.overviewGo)});
document.querySelectorAll('[data-close-modal]').forEach(b=>b.addEventListener('click',()=>document.getElementById(b.dataset.closeModal).classList.remove('open')));
document.getElementById('prevBtn').addEventListener('click',prevMain);
document.getElementById('nextBtn').addEventListener('click',nextMain);
document.getElementById('overviewBtn').addEventListener('click',()=>document.getElementById('overviewModal').classList.add('open'));
document.getElementById('helpBtn').addEventListener('click',()=>document.getElementById('helpModal').classList.add('open'));
document.getElementById('fullscreenBtn').addEventListener('click',async()=>{if(!document.fullscreenElement)await document.documentElement.requestFullscreen?.();else await document.exitFullscreen?.()});
document.addEventListener('keydown',e=>{if(e.target.matches('input,textarea,select'))return;if(e.key==='ArrowRight'||e.key===' '){e.preventDefault();nextMain()}else if(e.key==='ArrowLeft'){e.preventDefault();prevMain()}else if(e.key==='Escape'){const open=document.querySelector('.modal.open');if(open)open.classList.remove('open');else{const s=document.getElementById(currentId);if(s?.dataset.origin)showSlide(s.dataset.origin);else closeMenus()}}else if(e.key.toLowerCase()==='f')document.getElementById('fullscreenBtn').click();else if(e.key.toLowerCase()==='o')document.getElementById('overviewModal').classList.add('open');else if(e.key.toLowerCase()==='h')showSlide('s1');else if(e.key==='?')document.getElementById('helpModal').classList.add('open');else if(e.key.toLowerCase()==='s')showSlide('sources')});
addEventListener('resize',resizeStage);
resizeStage();
const initial=location.hash.slice(1);
if(initial&&document.getElementById(initial))showSlide(initial,{updateHash:false});else showSlide('s1',{updateHash:false});
