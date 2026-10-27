import {COMMUNICATION_STAGES, COMMUNICATION_RULES} from '../data/pipeline-communications.js';
const safe=(value)=>String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const STATUS={
  Live:{key:'live',text:'Live',detail:'Live · running in production'},
  Sandbox:{key:'sandbox',text:'Sandbox',detail:'Sandbox · built and being tested in the Salesforce sandbox'},
  Planned:{key:'planned',text:'Planned',detail:'Planned · not built yet'}
};
const statusOf=(item)=>STATUS[item.status]||STATUS.Planned;
const MERGE_LABELS={FirstName:'First name',firstName:'First name',LastName:'Last name',lastName:'Last name',Email:'Email',Phone:'Phone',MobilePhone:'Mobile phone',LeadSource:'Lead source',Status:'Status',
  AK9I_Actual_Start_Date__c:'Actual start date',Course_Start_Date__c:'Course start date',Course__c:'Course',Course_Selection:'Course',confirm_course:'Course',Start_Date:'Course start date',
  Enrollment_Form_Email:'Email',Enrollment_Form_Phone:'Phone',Heard_About_AK9I_Source:'How they heard about AK9I',fHeardDetail:'Referral detail',
  fEnrollmentPdfURL:'Application PDF link',fEnrollmentReviewURL:'Application review link',fRecordLink:'Salesforce record link',
  'Opp.Name':'Opportunity name',OppId:'Opportunity ID',orgUrl:'Salesforce address',applicant:'Applicant name','resume link':'Secure resume link'};
const MERGE_PATTERN=/\{\{\{\s*([^{}]+?)\s*\}\}\}|\{!([^{}]+)\}|\{([^{}\n]{1,60})\}/g;
function mergeLabel(raw){
  if(MERGE_LABELS[raw])return MERGE_LABELS[raw];
  const parts=raw.replace(/^\$/,'').split('.').filter(part=>!/^(\$?Record|Recipient|Contact|Lead|Get_Contact)$/.test(part));
  let last=parts.pop()||raw;
  if(/^value$/i.test(last)&&parts.length)last=parts.pop();
  if(MERGE_LABELS[last])return MERGE_LABELS[last];
  const words=last.replace(/^AK9I_/,'').replace(/__c$/,'').replace(/^f(?=[A-Z])/,'').replace(/_/g,' ').replace(/([a-z])([A-Z])/g,'$1 $2').trim().toLowerCase();
  return words.charAt(0).toUpperCase()+words.slice(1);
}
/* Wording is stored word for word; merge fields from Salesforce, flows and Apex are shown the same way: a highlighted field name. */
function appendWithMergeFields(parent,text){
  let last=0;
  for(const match of String(text).matchAll(MERGE_PATTERN)){
    if(match.index>last)parent.append(document.createTextNode(text.slice(last,match.index)));
    const chip=document.createElement('span');
    chip.className='comms-merge';chip.textContent=mergeLabel((match[1]||match[2]||match[3]).trim());chip.title=`Filled in for each recipient (${match[0]})`;
    parent.append(chip);last=match.index+match[0].length;
  }
  if(last<text.length)parent.append(document.createTextNode(text.slice(last)));
  return parent;
}
const el=(tag,className,text)=>{const node=document.createElement(tag);if(className)node.className=className;if(text!==undefined)node.textContent=text;return node;};
function wordingBlock(email){
  const block=el('article','comms-email');
  if(email.name)block.append(el('h4','comms-email-name',email.name));
  const meta=el('dl','comms-email-meta');
  const row=(label,value,merge)=>{if(!value)return;const wrap=el('div');wrap.append(el('dt','',label));const dd=el('dd');merge?appendWithMergeFields(dd,value):dd.textContent=value;wrap.append(dd);meta.append(wrap);};
  if(email.type==='task'){row('Task','Salesforce task');row('Assigned to',email.to);row('Subject',email.subject,true);}
  else{row('From',email.from);row('To',email.to);row('Subject',email.subject,true);}
  block.append(meta);
  if(email.body)block.append(appendWithMergeFields(el('div','comms-email-body'),email.body));
  else block.append(el('p','comms-wording-missing','Wording not yet written'));
  if(email.missing)block.append(el('p','comms-wording-missing',email.missing));
  if(email.note)block.append(el('p','comms-email-note',email.note));
  return block;
}
const stageFor=(n)=>COMMUNICATION_STAGES.find(stage=>stage.number===Number(n));
const nodeFor=(id)=>{
  for(const stage of COMMUNICATION_STAGES){
    for(const lane of ['students','contracts']){
      const item=stage[lane].find(node=>node.id===id);
      if(item)return {item,stage,lane};
    }
  }
  return null;
};
function renderNode(item,lane,stageNumber){
  const internal=item.kind.startsWith('Internal'),status=statusOf(item);
  return `<button type="button" class="comms-node comms-${lane==='students'?'student':'contract'} ${internal?'comms-internal':''} comms-node-${status.key}" data-comms-node="${safe(item.id)}" aria-label="${safe(lane==='students'?'Student':'Contract')} stage ${stageNumber}: ${safe(item.label)}; status ${status.text}; open communication details" title="${safe(status.text)} · open trigger, timing, owner and wording"><span class="comms-node-icon" aria-hidden="true">${lane==='students'?'S':'C'}</span><span class="comms-node-label">${safe(item.label)}</span><span class="comms-status-tag comms-status-${status.key}">${safe(status.text)}</span><span class="comms-node-arrow" aria-hidden="true">↗</span></button>`;
}
function laneColumn(stage,lane){
  const isStudent=lane==='students',items=stage[lane];
  return `<section class="comms-mini-lane comms-lane-${lane}" aria-label="${isStudent?'Student':'Contract'} communications in stage ${stage.number}">
    <h3 class="comms-lane-head"><span aria-hidden="true">${isStudent?'S':'C'}</span>${isStudent?'Students':'Contracts'}<small>${items.length}</small></h3>
    <div class="comms-lane-nodes">${items.map(item=>renderNode(item,lane,stage.number)).join('')}</div>
  </section>`;
}
function stageCard(stage){
  return `<button type="button" class="comms-stage-card" data-comms-stage="${stage.number}" title="Enters this stage when: ${safe(stage.entry?.students)}" style="--comms-stage-color:${stage.color}" aria-label="Expand communications for stage ${stage.number}">
    <span class="comms-stage-number">${stage.number}</span><span class="comms-stage-label">${safe(stage.student)}</span>
    ${stage.student!==stage.contract?`<span class="comms-stage-variants"><b>S</b> ${safe(stage.student)}<i></i><b>C</b> ${safe(stage.contract)}</span>`:'<span class="comms-stage-hint">Select to expand ↗</span>'}
  </button>`;
}
function focusLane(stage,lane){
  return `<section class="comms-focus-lane comms-lane-${lane}"><div class="comms-focus-lane-head"><div><span class="comms-focus-symbol">${lane==='students'?'S':'C'}</span><strong>${lane==='students'?'Students':'Contracts'}</strong><small>${safe(stage[lane==='students'?'student':'contract'])}</small></div><span>${stage[lane].length} touchpoints</span></div>
    <div class="comms-focus-nodes">${stage[lane].map(item=>renderNode(item,lane,stage.number)).join('')}</div>
  </section>`;
}
function renderFocus(stage){
  return `<div class="comms-focus-head"><div><span class="comms-focus-step">Stage ${stage.number}</span><h3>${safe(stage.student===stage.contract?stage.student:stage.student+' · '+stage.contract)}</h3><p>${safe(stage.description)}</p>${stage.entry?`<div class="comms-entry"><strong>Enters this stage when</strong><span class="comms-entry-students"><b>S</b>${safe(stage.entry.students)}</span><span class="comms-entry-contracts"><b>C</b>${safe(stage.entry.contracts)}</span></div>`:''}</div><button type="button" class="comms-back" data-comms-back>← All stages</button></div>
    <div class="comms-focus-grid">${focusLane(stage,'students')}${focusLane(stage,'contracts')}</div>`;
}
export function renderPipelineCommunications(){
  return `<div class="comms-root" data-lane="both" id="commsRoot">
    <div class="comms-toolbar"><div class="comms-legend"><span class="comms-key comms-key-student">S</span><strong>Students</strong><span class="comms-key comms-key-contract">C</span><strong>Contracts</strong><span class="comms-key comms-key-internal">⋯</span><span>Dashed = internal task / alert</span><span class="comms-legend-status"><span class="comms-status-tag comms-status-live">Live</span><span class="comms-status-tag comms-status-sandbox">Sandbox</span><span class="comms-status-tag comms-status-planned">Planned</span></span></div>
    <div class="comms-actions" role="group" aria-label="Communication audience filter"><span>Display</span><button type="button" data-comms-filter="both" aria-pressed="true">Both lanes</button><button type="button" data-comms-filter="students" aria-pressed="false">Students</button><button type="button" data-comms-filter="contracts" aria-pressed="false">Contracts</button></div></div>
    <div class="comms-stage-strip" aria-label="Seven pipeline stages">${COMMUNICATION_STAGES.map(stageCard).join('')}</div>
    <div class="comms-overview" id="commsOverview"><div class="comms-cascades">${COMMUNICATION_STAGES.map(stage=>`<div class="comms-cascade-column" style="--comms-stage-color:${stage.color}"><div class="comms-two-lanes">${laneColumn(stage,'students')}${laneColumn(stage,'contracts')}</div></div>`).join('')}</div></div>
    <div class="comms-focus" id="commsFocus" aria-live="polite" hidden></div>
    <div class="comms-status"><span>Click any stage to see what moves people into it; select a node for its trigger, timing, owner and wording.</span><strong>${safe(COMMUNICATION_RULES.status)}</strong></div>
  </div>
  <div class="comms-dialog" id="commsDialog" role="dialog" aria-modal="true" aria-labelledby="commsDialogTitle" hidden>
    <div class="comms-dialog-box"><button class="comms-dialog-close" data-comms-close aria-label="Close communication detail" type="button">×</button><span class="comms-dialog-eyebrow" id="commsDialogEyebrow"></span><h2 id="commsDialogTitle"></h2><div class="comms-dialog-flags" id="commsDialogFlags"></div>
    <dl class="comms-dialog-details"><div><dt>What happens</dt><dd id="commsDialogKind"></dd></div><div><dt>Responsible function</dt><dd id="commsDialogOwner"></dd></div><div><dt>Trigger</dt><dd id="commsDialogTrigger"></dd></div><div><dt>Timing</dt><dd id="commsDialogTiming"></dd></div><div><dt>Source</dt><dd id="commsDialogSource"></dd></div></dl>
    <section class="comms-dialog-wording" id="commsDialogWording" aria-labelledby="commsDialogWordingTitle" hidden><h3 id="commsDialogWordingTitle">Email wording</h3><p class="comms-wording-key">Shown word for word. <span class="comms-merge">Highlighted</span> fields are filled in for each recipient.</p><div id="commsDialogEmails"></div></section>
    <button type="button" class="comms-dialog-done" data-comms-close>Return to pipeline</button></div>
  </div>`;
}
export function setupPipelineCommunications(){
  const slide=document.getElementById('s13m');
  if(!slide)return;
  const root=slide.querySelector('#commsRoot'),overview=root.querySelector('#commsOverview'),focus=root.querySelector('#commsFocus'),dialog=slide.querySelector('#commsDialog');
  let selectedStage=null,lastFocused=null;
  function filterLane(lane){
    if(!['both','students','contracts'].includes(lane))return;
    root.dataset.lane=lane;
    root.querySelectorAll('[data-comms-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.commsFilter===lane)));
  }
  function focusStage(n){
    const stage=stageFor(n);if(!stage)return;
    selectedStage=stage.number;
    focus.innerHTML=renderFocus(stage);focus.hidden=false;overview.hidden=true;
    root.querySelectorAll('[data-comms-stage]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.commsStage===String(n))));
    root.querySelector(`[data-comms-stage="${n}"]`)?.focus({preventScroll:true});
  }
  function overviewStages(){
    selectedStage=null;overview.hidden=false;focus.hidden=true;focus.innerHTML='';
    root.querySelectorAll('[data-comms-stage]').forEach(b=>b.setAttribute('aria-pressed','false'));
    root.querySelector('[data-comms-stage]')?.focus({preventScroll:true});
  }
  function showNode(id,trigger){
    const result=nodeFor(id);if(!result)return;
    const {stage,item,lane}=result;
    lastFocused=trigger;
    slide.querySelector('#commsDialogEyebrow').textContent=`STAGE ${stage.number} • ${lane==='students'?'STUDENTS':'CONTRACTS'} • ${lane==='students'?stage.student:stage.contract}`;
    slide.querySelector('#commsDialogTitle').textContent=item.label;
    slide.querySelector('#commsDialogKind').textContent=item.kind;
    slide.querySelector('#commsDialogOwner').textContent=item.owner;
    slide.querySelector('#commsDialogTrigger').textContent=item.trigger;
    slide.querySelector('#commsDialogTiming').textContent=item.timing;
    const sources={PLAN:'2027–2031 Strategic Plan §2.2',SITE:'AK9I Operating System pipeline',REC:'Implementation recommendation',BUILD:'AK9I seven-stage Salesforce build'};
    slide.querySelector('#commsDialogSource').textContent=sources[item.source]||item.source;
    const status=statusOf(item);
    slide.querySelector('#commsDialogFlags').replaceChildren(el('span',`comms-status-tag comms-status-${status.key}`,status.detail));
    const wording=slide.querySelector('#commsDialogWording'),isEmail=Array.isArray(item.emails)||/email/i.test(item.kind);
    const emails=Array.isArray(item.emails)&&item.emails.length?item.emails:[{}];
    wording.hidden=!isEmail;
    slide.querySelector('#commsDialogWordingTitle').textContent=emails.length>1?`Wording (${emails.length} messages)`:'Wording';
    slide.querySelector('.comms-wording-key').hidden=!emails.some(email=>email.body||email.subject);
    slide.querySelector('#commsDialogEmails').replaceChildren(...(isEmail?emails.map(wordingBlock):[]));
    dialog.hidden=false;
    const box=dialog.querySelector('.comms-dialog-box');if(box)box.scrollTop=0;
    dialog.querySelector('[data-comms-close]')?.focus({preventScroll:true});
  }
  function closeNode(){dialog.hidden=true;lastFocused?.focus({preventScroll:true});lastFocused=null;}
  slide.addEventListener('click',e=>{
    if(e.target.closest('[data-comms-close]')){closeNode();return;}
    if(e.target===dialog){closeNode();return;}
    const node=e.target.closest('[data-comms-node]');if(node){showNode(node.dataset.commsNode,node);return;}
    const f=e.target.closest('[data-comms-filter]');if(f){filterLane(f.dataset.commsFilter);return;}
    const b=e.target.closest('[data-comms-back]');if(b){overviewStages();return;}
    const s=e.target.closest('[data-comms-stage]');if(s){if(selectedStage===Number(s.dataset.commsStage))overviewStages();else focusStage(s.dataset.commsStage);}
  });
  document.addEventListener('keydown',e=>{
    if(e.key!=='Escape'||!slide.classList.contains('active'))return;
    if(!dialog.hidden){e.preventDefault();e.stopImmediatePropagation();closeNode();}
    else if(!focus.hidden){e.preventDefault();e.stopImmediatePropagation();overviewStages();}
  },true);
}
