const STAGES=[
 {n:1,title:'Awareness',color:'#2E70B7',owner:'Marketing / Business Development',body:'Capability becomes visible through campaigns, events, partners, advocates, and targeted relationship development.'},
 {n:2,title:'Consideration',color:'#648E43',owner:'Sales (BD supports)',body:'Sales owns qualified opportunities and next steps; BD supports discovery, fit, demonstrations, scope, authority, and timing.'},
 {n:3,title:'Commitment / Award',color:'#D69D10',owner:'Sales → Contracts & Field Operations',body:'Sales owns proposals, approved pricing, negotiation and execution. Field Operations takes over only after a signed agreement and complete operating handoff.'},
 {n:4,title:'Service Delivery',color:'#6958A6',owner:'Contracts & Field Operations',body:'Staffing, canine readiness, deployment, client coordination, incident response, service evidence, and billing support.'},
 {n:5,title:'Loyalty',color:'#168A93',owner:'Contracts & Field Operations',body:'Operations owns service outcomes, satisfaction, issue resolution, trust, and relationship health, with Sales supporting.'},
 {n:6,title:'Recurring Relationships',color:'#256F78',owner:'Sales / Account Management',body:'Sales owns commercial renewals and expansion, with Contracts & Field Operations supporting service evidence and readiness.'},
 {n:7,title:'Advocacy',color:'#0B3B69',owner:'Marketing / Business Development',body:'References, case studies, testimonials, peer introductions, referrals, and joint outreach.'}
];
const ENABLEMENT=[
 ['Data & Systems','Salesforce, source attribution, automation, webinar/LMS support, and reporting'],
 ['Admin & Finance','Pricing controls, purchasing, HR, payroll, billing, reconciliation, and records'],
 ['Regulatory / Quality','Licensing, credential assurance, controlled standards, and audit evidence'],
 ['Canine Operations','Canine readiness, kennel support, assets, and Operations Specialist home-line supervision']
];
export function renderContractLane(){
 return `<div class="contract-lane"><div class="contract-lane-stages">${STAGES.map(s=>`<article class="contract-stage" style="--lane-color:${s.color}"><div class="contract-stage-number">${s.n}</div><h3>${s.title}</h3><p>${s.body}</p><div class="contract-owner"><span>Functional accountability</span><strong>${s.owner}</strong></div></article>`).join('')}</div><div class="contract-enablement"><div class="contract-enablement-title">Functions that enable every stage</div>${ENABLEMENT.map(([t,d])=>`<div class="contract-enable-item"><strong>${t}</strong><span>${d}</span></div>`).join('')}</div><div class="contract-lane-note"><button type="button" data-go="s13">← Student / Education pipeline visual</button><span>One named owner per active record. Sales owns commercial conversion through execution; Contracts & Field Operations owns delivery after complete handoff. Reporting authority follows the org chart.</span></div></div>`
}
