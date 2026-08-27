const ALIGNMENTS={
 ceo:'Executive role in the current operating model.',
 regulatory:'Current advisory alignment consolidating credentialing, regulatory compliance, quality assurance, document oversight, and independent-examiner responsibilities.',
 schoolAdmin:'School Administrator absorbs the legacy Director of Training & Education and Director of Operations/SCO responsibilities.',
 'school-training':'Aligned to the legacy Director of Training / Lead Instructor duties. Senior Instructor is treated as a legacy/absorbed title.',
 'school-student-services':'Aligned to the active Director of Student Services function.',
 contractsOps:'Current alignment consolidates the contract-management and field-operations responsibilities that historically sat together under James Overton. Jasmine Johnson assumes the combined function while James retains Business Development & Sales.',
 'field-handlers':'Aligned to the active K-9 Handler / Detection Specialist job family.',
 'field-ops-specialists':'Evolved from the legacy Assistant Trainer role and includes field-operations support.',
 'contracts-scheduling':'Combines the scheduling, deployment, client-coordination, and operational-handoff responsibilities formerly treated as Field Operations work.',
 'contracts-admin':'Combines contract administration, proposal support, records, and compliance coordination under the same function that executes the contract.',
 'contracts-quality':'Combines service-quality evidence, client records, renewal readiness, and post-award performance tracking.',
 canineOps:'Current Operations Chief K9 alignment; broader legacy Kennel Supervisor duties are absorbed at this level while Kennel Lead remains a separate position.',
 'canine-kennel-lead':'Kimberly Smith remains the separate Kennel Lead. Legacy Kennel Supervisor duties inform the role, with broader accountability held by the Canine Operations Lead.',
 businessDev:'Legacy Director of Marketing & Business Development duties are split: business development and sales remain here while Marketing is a separate function. Won opportunities hand off to Contracts & Field Operations for administration and delivery.',
 marketing:'Marketing is intentionally separated from Business Development and retains the marketing portion of the legacy combined role.',
 data:'Current Director of Data Management alignment; absorbs systems/data duties from the legacy Director of Educational Data & Curriculum role while academic curriculum accountability remains with School Administration.',
 adminFinance:'Current Administrative & Finance Chief alignment for Peggy Stoltzfus.',
 'admin-scheduling':'Administrative Assistant duties are absorbed into Ryan Gibbs’s current support responsibilities.',
 'admin-sop':'Administrative Assistant duties are absorbed into Ryan Gibbs / Section Chief-K9 support responsibilities; the legacy Administrative Assistant / House Facility Cleaner role is retired.'
};
const PARENT={
 schoolAdmin:{purpose:'support compliant, consistent academic delivery and student administration',work:['maintain approved school records and documentation','coordinate student, instructional, and administrative handoffs','support audit and regulatory readiness'],kpis:['record completeness','cycle-time / schedule adherence','open academic or administrative exceptions']},
 contractsOps:{purpose:'administer contracts and deliver safe, reliable K9 field-service execution',work:['maintain contract requirements, records, deadlines, staffing, and deployment readiness','follow client and AK9I SOPs while coordinating operational handoffs','document incidents, service evidence, billing support, and renewal readiness'],kpis:['shift coverage and on-time deployment','contract deliverables and record completeness','service exceptions / incident closure','renewal readiness']},
 canineOps:{purpose:'maintain canine health, readiness, placement, and accountable kennel operations',work:['complete assigned canine-care or readiness work','maintain required canine and asset records','escalate health, safety, staffing, or readiness issues'],kpis:['readiness / care compliance','record accuracy','health and safety exceptions']},
 businessDev:{purpose:'convert market relationships into qualified opportunities and revenue',work:['maintain purposeful outreach and follow-up','record opportunities and next actions','coordinate qualified and won-opportunity handoffs to Contracts & Field Operations'],kpis:['qualified opportunities','pipeline movement','conversion / account growth']},
 marketing:{purpose:'create measurable awareness and demand under approved AK9I brand standards',work:['execute approved marketing activities','maintain channel and campaign evidence','route qualified responses into Salesforce'],kpis:['qualified inquiries','channel conversion','brand compliance / campaign contribution']},
 data:{purpose:'provide reliable systems, data, automation, and reporting',work:['maintain assigned platforms and data','document system changes and exceptions','support authoritative reporting and continuity'],kpis:['system reliability','data completeness','reporting / issue-resolution timeliness']},
 adminFinance:{purpose:'provide financial, HR, scheduling, and administrative control',work:['maintain accurate administrative records','process assigned finance, HR, or scheduling workflows','escalate exceptions and maintain supporting evidence'],kpis:['record accuracy','cycle-time / reconciliation timeliness','open administrative exceptions']}
};
const LEADS={
 ceo:{purpose:'Set enterprise direction, allocate authority, and hold final accountability for AK9I performance.',work:['set strategic priorities and decision rights','approve material commitments and organizational changes','maintain owner-level accountability for mission, cash, risk, and growth'],kpis:['enterprise objectives achieved','cash and risk controls maintained','leadership commitments completed']},
 regulatory:{purpose:'Provide independent assurance on regulatory compliance, credentialing, quality, and institutional readiness.',work:['maintain credential and regulatory calendars','audit required records and evidence','advise the CEO on compliance, accreditation, quality, and examiner requirements'],kpis:['credential deadlines met','audit exceptions closed','required records current']},
 schoolAdmin:{purpose:'Own academic administration and the delivery system that supports compliant, consistent student training.'},
 contractsOps:{purpose:'Own the full post-business-development contract lifecycle: administration, staffing, deployment, client execution, service evidence, and renewal readiness.',work:['accept qualified and won-opportunity handoffs from Business Development & Sales','maintain contract requirements, records, compliance, proposals, deadlines, and deliverables','staff, schedule, and deploy K9 teams and operations specialists','manage client operational coordination, incidents, SOP adherence, and service quality','maintain billing support, performance evidence, renewal readiness, and closeout handoffs'],kpis:['contract deliverables completed on time','shift coverage and on-time deployment','service-quality / incident exceptions closed','contract and billing evidence complete','renewal readiness / retained accounts']},
 canineOps:{purpose:'Own canine intake, health, readiness, placement, kennel operations, and canine asset accountability.'},
 businessDev:{purpose:'Build relationships, generate qualified opportunities, and convert market access into revenue.'},
 marketing:{purpose:'Build consistent market awareness and demand using approved AK9I brand standards and measurable campaigns.'},
 data:{purpose:'Provide the systems, data, automation, reporting, and technology foundation for informed execution.'},
 adminFinance:{purpose:'Provide financial stewardship, HR administration, scheduling control, and administrative infrastructure.'}
};
export function buildJobDescription(role){
 const lead=LEADS[role.key];const template=PARENT[role.parentKey||role.key]||{};
 const purpose=lead?.purpose||`Own the ${role.title} responsibilities within ${role.parentTitle||'AK9I'} and ${template.purpose||'support reliable execution'}.`;
 const accountabilities=lead?.work||template.work||['complete assigned responsibilities','maintain required records and evidence','coordinate required handoffs'];
 const kpis=lead?.kpis||template.kpis||['on-time completion','quality / accuracy','open exceptions'];
 const authority=role.parentTitle?`Execute this position within approved AK9I policy and authority delegated by the ${role.parentTitle}. Escalate material risk, exceptions, and decisions outside delegated authority.`:'Exercise the authority assigned to this function by ownership and approved company policy.';
 const handoffs=role.parentTitle?`Maintain documented handoffs with the ${role.parentTitle} and cross-functional owners whose work depends on this position.`:'Maintain documented handoffs with affected functional leaders and ownership.';
 return {purpose,accountabilities,kpis,authority,handoffs,sourceAlignment:ALIGNMENTS[role.key]||'Current functional role in the AK9I operating model; no one-to-one legacy title is required for this position.'};
}
