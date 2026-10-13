import {COMMUNICATION_STAGES, COMMUNICATION_RULES} from '../data/pipeline-communications.js';
const safe=(value)=>String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
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
  const internal=item.kind.startsWith('Internal');
  return `<button type="button" class="comms-node comms-${lane==='students'?'student':'contract'} ${internal?'comms-internal':''}" data-comms-node="${safe(item.id)}" aria-label="${safe(lane==='students'?'Student':'Contract')} stage ${stageNumber}: ${safe(item.label)}; open communication details" title="Open trigger, timing, source and owner"><span class="comms-node-icon" aria-hidden="true">${lane==='students'?'S':'C'}</span><span class="comms-node-label">${safe(item.label)}</span><span class="comms-node-arrow" aria-hidden="true">↗</span></button>`;
}
function laneColumn(stage,lane){
  const isStudent=lane==='students',items=stage[lane];
  return `<section class="comms-mini-lane comms-lane-${lane}" aria-label="${isStudent?'Student':'Contract'} communications in stage ${stage.number}">
    <h3 class="comms-lane-head"><span aria-hidden="true">${isStudent?'S':'C'}</span>${isStudent?'Students':'Contracts'}<small>${items.length}</small></h3>
    <div class="comms-lane-nodes">${items.map(item=>renderNode(item,lane,stage.number)).join('')}</div>
  </section>`;
}
function stageCard(stage){
  return `<button type="button" class="comms-stage-card" data-comms-stage="${stage.number}" style="--comms-stage-color:${stage.color}" aria-label="Expand communications for stage ${stage.number}">
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
  return `<div class="comms-focus-head"><div><span class="comms-focus-step">Stage ${stage.number}</span><h3>${safe(stage.student===stage.contract?stage.student:stage.student+' · '+stage.contract)}</h3><p>${safe(stage.description)}</p></div><button type="button" class="comms-back" data-comms-back>← All stages</button></div>
    <div class="comms-focus-grid">${focusLane(stage,'students')}${focusLane(stage,'contracts')}</div>`;
}
export function renderPipelineCommunications(){
  return `<div class="comms-root" data-lane="both" id="commsRoot">
    <div class="comms-toolbar"><div class="comms-legend"><span class="comms-key comms-key-student">S</span><strong>Students</strong><span class="comms-key comms-key-contract">C</span><strong>Contracts</strong><span class="comms-key comms-key-internal">⋯</span><span>Dashed = internal task / alert</span></div>
    <div class="comms-actions" role="group" aria-label="Communication audience filter"><span>Display</span><button type="button" data-comms-filter="both" aria-pressed="true">Both lanes</button><button type="button" data-comms-filter="students" aria-pressed="false">Students</button><button type="button" data-comms-filter="contracts" aria-pressed="false">Contracts</button></div></div>
    <div class="comms-stage-strip" aria-label="Seven pipeline stages">${COMMUNICATION_STAGES.map(stageCard).join('')}</div>
    <div class="comms-overview" id="commsOverview"><div class="comms-cascades">${COMMUNICATION_STAGES.map(stage=>`<div class="comms-cascade-column" style="--comms-stage-color:${stage.color}"><div class="comms-two-lanes">${laneColumn(stage,'students')}${laneColumn(stage,'contracts')}</div></div>`).join('')}</div></div>
    <div class="comms-focus" id="commsFocus" aria-live="polite" hidden></div>
    <div class="comms-status"><span>Click any stage to enlarge its cascade; select a node for timing, trigger, owner and provenance.</span><strong>Design blueprint · Salesforce activity unverified · SMS off</strong></div>
  </div>
  <div class="comms-dialog" id="commsDialog" role="dialog" aria-modal="true" aria-labelledby="commsDialogTitle" hidden>
    <div class="comms-dialog-box"><button class="comms-dialog-close" data-comms-close aria-label="Close communication detail" type="button">×</button><span class="comms-dialog-eyebrow" id="commsDialogEyebrow"></span><h2 id="commsDialogTitle"></h2><div class="comms-dialog-flags" id="commsDialogFlags"></div>
    <dl class="comms-dialog-details"><div><dt>What happens</dt><dd id="commsDialogKind"></dd></div><div><dt>Responsible function</dt><dd id="commsDialogOwner"></dd></div><div><dt>Trigger</dt><dd id="commsDialogTrigger"></dd></div><div><dt>Timing</dt><dd id="commsDialogTiming"></dd></div><div><dt>Source</dt><dd id="commsDialogSource"></dd></div></dl>
    <div class="comms-dialog-policy"><h3>Before activating</h3><p>${safe(COMMUNICATION_RULES.cap)}</p><p>${safe(COMMUNICATION_RULES.sms)}</p><p>${safe(COMMUNICATION_RULES.stop)}</p></div>
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
    const sources={PLAN:'2027–2031 Strategic Plan §2.2',SITE:'AK9I Operating System pipeline',REC:'Implementation recommendation (not source-mandated)'};
    slide.querySelector('#commsDialogSource').textContent=sources[item.source]||item.source;
    const labels=[item.source==='REC'?'Recommended communication':'Source-specified communication'];
    if(item.suggestedTrigger)labels.push('Trigger proposed — approval needed');
    if(item.suggestedTiming)labels.push('Timing proposed — approval needed');
    slide.querySelector('#commsDialogFlags').replaceChildren(...labels.map(label=>{const span=document.createElement('span');span.textContent=label;return span}));
    dialog.hidden=false;
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
