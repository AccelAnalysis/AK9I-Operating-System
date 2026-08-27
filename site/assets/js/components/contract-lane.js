const STAGES=[
 {n:1,title:'Awareness',color:'#2E70B7',owner:'Marketing + Business Development',body:'Capability becomes visible through campaigns, events, partners, advocates, and targeted relationship development.',target:'s20'},
 {n:2,title:'Consideration',color:'#648E43',owner:'Sales + Business Development',body:'Discovery, fit, proof, demonstrations, scope, decision criteria, authority, timing, and next-step definition.',target:'s19'},
 {n:3,title:'Commitment / Award',color:'#D69D10',owner:'Sales → Contracts & Field Operations',body:'Proposal, approved pricing, negotiation, award, executed agreement, and complete operating handoff.',target:'s18'},
 {n:4,title:'Service Delivery',color:'#6958A6',owner:'Contracts & Field Operations',body:'Staffing, canine readiness, deployment, client coordination, incident response, service evidence, and billing support.',target:'s17'},
 {n:5,title:'Renewal & Expansion',color:'#168A93',owner:'Contracts & Field Operations + Sales',body:'Satisfaction, renewal, added sites or services, recurring engagement, and measurable account growth.',target:'s15'},
 {n:6,title:'Advocacy',color:'#0B3B69',owner:'Marketing + Business Development',body:'References, case studies, testimonials, peer introductions, referrals, and joint outreach.',target:'s14'}
];
const ENABLEMENT=[
 ['Data & Systems','Salesforce, source attribution, automation, webinar/LMS support, and reporting'],
 ['Admin & Finance','Pricing controls, purchasing, HR, payroll, billing, reconciliation, and records'],
 ['Regulatory / Quality','Licensing, credential assurance, controlled standards, and audit evidence'],
 ['Canine Operations','Canine readiness, kennel support, assets, and Operations Specialist home-line supervision']
];
export function renderContractLane(){
 return `<div class="contract-lane"><div class="contract-lane-stages">${STAGES.map(s=>`<button type="button" class="contract-stage" style="--lane-color:${s.color}" data-go="${s.target}"><div class="contract-stage-number">${s.n}</div><h3>${s.title}</h3><p>${s.body}</p><div class="contract-owner"><span>Primary ownership</span><strong>${s.owner}</strong></div></button>`).join('')}</div><div class="contract-enablement"><div class="contract-enablement-title">Functions that enable every stage</div>${ENABLEMENT.map(([t,d])=>`<div class="contract-enable-item"><strong>${t}</strong><span>${d}</span></div>`).join('')}</div><div class="contract-lane-note"><button type="button" data-go="s13">← Student / Education pipeline visual</button><span>The customer workflow changes by lane; personnel reporting authority remains defined by the organizational chart.</span></div></div>`
}
