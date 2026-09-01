export const PORTFOLIO_FOUNDATIONS={
 management:[
  ['Confirm functional ownership and reporting hierarchy','Approve who owns each function, what belongs inside it, who reports to whom, and where stage-to-stage handoffs occur. Correct known scope conflicts rather than preserving overlapping legacy assignments.'],
  ['Install the Business Flight Plan management cadence','Use a repeatable leadership and staff review structure to surface priorities, constraints, decisions, commitments, and follow-through.'],
  ['Establish KPI, accountability, and executive reporting','Each functional owner carries controllable measures; dashboard coordination does not replace accountability for the result.'],
  ['Install the employee and management systems layer','Use Connecteam and administrative controls for employee execution; use Salesforce, LMS, app, and reporting infrastructure through Data & Systems without confusing system ownership with business-process ownership.']
 ],
 brand:[
  ['Adopt Brand Standards and controlled assets','Use one authoritative system for identity, messaging, imagery, templates, claims, source files, approvals, and production assets.'],
  ['Implement uniform, dress, and environmental standards','Apply role-appropriate appearance and physical-brand expectations across training, office, kennel, field, recruiting, and event environments.'],
  ['Standardize outreach, events, demonstrations, and partnerships','Use approved messaging, collateral, co-brand rules, tracked entry points, event readiness, and post-event follow-up.'],
  ['Standardize customer-facing communications and digital experiences','Ensure LMS, app, web, Salesforce communications, partner touchpoints, and customer support present one AK9I experience rather than disconnected projects.']
 ]
};

export const PORTFOLIO_STAGE_ORDER=['S7','S6','S5','S4','S3','S2','S1'];
export const PORTFOLIO_STAGES={
 S7:{name:'Advocacy',color:'#0B4C82',goal:'Turn successful relationships into credible proof, referrals, introductions, recruiting, reputation, and peer influence.',evidence:'Named advocates, permissions, references, referrals, introductions, participation, and attributable opportunities.'},
 S6:{name:'Recurring Relationships',color:'#256F78',goal:'Give loyal customers and alumni a reason to continue the AK9I relationship through repeatable products, education, renewals, replenishment, or expansion.',evidence:'A defined repeat offer or renewal path, owner, cadence, fulfillment/support process, retention signal, and next action.'},
 S5:{name:'Loyalty',color:'#168A93',goal:'Make outcomes, placement, satisfaction, trust, service results, and relationship health visible and actively managed.',evidence:'Verified outcomes or service results, customer feedback, relationship-health status, recovery action where needed, and a documented next relationship step.'},
 S4:{name:'Training / Delivery',color:'#6958A6',goal:'Fix the core product and service so AK9I consistently delivers the promised training, credential, canine, or contract result.',evidence:'Approved delivery standard, trained owner/team, quality evidence, required records, issue resolution, and successful handoff into Loyalty.'},
 S3:{name:'Enrollment / Commitment',color:'#D69D10',goal:'Control the point where a qualified relationship becomes an accepted student, sale, agreement, or award and is handed cleanly into delivery.',evidence:'Clear acceptance/award criteria, approved terms, owner, required records, readiness confirmation, and explicit operating handoff.'},
 S2:{name:'Consideration',color:'#648E43',goal:'Help a qualified prospect understand fit, value, proof, requirements, timing, price/solution, and the next decision.',evidence:'Qualified record, source, decision context, stage owner, next action/date, relevant proof, and a defined path to commitment or disqualification.'},
 S1:{name:'Awareness',color:'#2E70B7',goal:'Scale reach only after downstream capacity is ready, using trusted channels, one brand, clear entry points, and source attribution.',evidence:'Approved channel/message, tracked source, simple entry action, response path, and measured movement into Consideration.'}
};

const a=(id,group,title,posture,owners,stageDetails,options={})=>({id,group,title,posture,owners,stageDetails,...options});

export const PORTFOLIO_GROUPS=[
 ['advocacy','Stage 7 — Advocacy: build the relationship asset before scaling outreach'],
 ['recurring','Stage 6 — Recurring Relationships: create reasons for customers and alumni to stay connected'],
 ['loyalty','Stage 5 — Loyalty: strengthen outcomes, satisfaction, trust, and relationship health'],
 ['delivery','Stage 4 — Training & Experience / Delivery: fix the core product and service'],
 ['commitment','Stage 3 — Enrollment / Commitment: control the handoff into delivery'],
 ['consideration','Stage 2 — Consideration: build the sales and nurture discipline'],
 ['awareness','Stage 1 — Awareness: scale reach only after downstream capacity is stronger']
];

export const PORTFOLIO_ACTIONS=[
 a('alumni-master','advocacy','Rebuild the alumni master list and create a current alumni group / community.','NOW',['James Overton','Michelle Hartman','Chris Casora'],{
  S7:'Recover the historical graduate population, validate contactability, create the alumni community structure, and establish one managed relationship record so AK9I has an actual advocacy asset to activate.'
 }),
 a('alumni-tags','advocacy','Create Salesforce alumni records and opportunity tags for employment, mentoring, speaking, testimonials, referrals, employers, events, advisory participation, and continuing-education interests.','NOW',['Chris Casora','James Overton','Michelle Hartman'],{
  S7:'Create the authoritative alumni profile and advocacy tags, including permissions and preferred participation types, so AK9I can match the right alumnus to the right opportunity.'
 }),
 a('alumni-reengage','advocacy','Run a structured alumni re-engagement campaign and schedule the next touch.','NOW',['James Overton','External / Contractor','Michelle Hartman'],{
  S7:'Lead with relationship recovery: verify current role, goals, interests, permissions, and willingness to participate before asking for public advocacy.'
 }),
 a('alumni-activate','advocacy','Activate alumni referrals, testimonials, speakers, mentors, employer introductions, case studies, and event participation.','NEXT',['James Overton','External / Contractor'],{
  S7:'Select willing alumni whose outcomes and experience support the specific need; capture approval, make the introduction or content request, record the result, and keep the relationship active.'
 }),
 a('advisory-board','advocacy','Stand up the Strategic Advisory Board with a defined charge and selected member profiles.','NEXT',['Ronald Brawner','James Overton','Jonathan Holman'],{
  S7:'Use the board as a non-governing advocacy and strategic relationship asset: define the charge, fill missing seat profiles, establish cadence, and track introductions, reputation, advice, and selected growth contributions.'
 }),
 a('client-employee-advocacy','advocacy','Build contract-client and employee advocacy programs.','NEXT',['James Overton','External / Contractor','Jasmine Johnson'],{
  S7:'Identify referenceable clients and equipped employees, define what each may credibly say or do, capture permissions, and create a repeatable referral/reference handoff into Salesforce.'
 }),
 a('funker-advocacy','advocacy','Use Funker530 and selected strategic relationships as trusted advocacy channels where appropriate.','NEXT',['James Overton','External / Contractor'],{
  S7:'Define the relationship as a credible advocacy channel first: approved proof, audience fit, permitted use, and a clear referral/introduction path.',
  S2:'Use trusted partner credibility to answer prospect questions and provide proof during active Consideration; every interested record receives an owner and next action.',
  S1:'Use partner reach as measured Awareness only after Consideration follow-up is ready; attribute the source and route each response into the correct entry path.'
 }),

 a('alumni-recurring','recurring','Launch alumni continuing education, LMS access, refreshers, networking, events, and professional opportunities.','NEXT',['Tim Baird','Chris Casora','James Overton'],{
  S6:'Create a defined alumni relationship portfolio with relevant offers by cohort, career stage, certification needs, geography, and interests; track participation, repeat value, and the next touch.'
 }),
 a('medical-lms-integrate','recurring','Integrate medical content into the LMS and turn it into a repeatable customer offer.','NOW',['Chris Casora','Tim Baird'],{
  S6:'After the instructional content is approved and functioning, define the continuing-access or repeat-purchase offer, eligibility, support model, pricing/fulfillment requirements, and retention measures.',
  S4:'Integrate and quality-check the medical material inside the learning experience, define where it belongs in delivery, confirm ownership and support, and validate that the learner experience works before commercialization.'
 },{sourceNote:'Retained because Ronald Brawner explicitly included “Medical LMS content integrated” in the 30-day milestones and “LMS selling online medical coursework” in the 30-day milestones.'}),
 a('medical-lms-sell','recurring','Sell medical / continuing-education coursework through the LMS.','NEXT',['James Overton','Chris Casora','Tim Baird'],{
  S6:'Start with existing alumni and customer relationships where continued education creates obvious repeat value; define enrollment, access, support, billing, and follow-up.',
  S2:'For new prospects, define the audience, proof, offer, price, and guided next step; Sales owns the active opportunity while Data & Systems supports the LMS and CRM workflow.'
 },{sourceNote:'Retained because Ronald Brawner explicitly included online medical coursework in the 30-day milestones.'}),
 a('dogtra-workshops','recurring','Schedule and operate Dogtra workshops as recurring training / customer-engagement opportunities.','NEXT',['James Overton','Stephane Hubert','Tim Baird'],{
  S6:'Create a repeatable workshop relationship with defined audience, cadence, economics, registration, follow-up, and next offer.',
  S4:'Define instructional objectives, instructor responsibilities, equipment/readiness, approved materials, delivery quality, and completion evidence.',
  S2:'Use workshops as a guided experience for qualified prospects; capture source, questions, fit, and a clear next action rather than treating attendance as the outcome.'
 }),
 a('salesforce-recurring','recurring','Build Salesforce recurring-relationship and reactivation automation after data and stage discipline are stable.','NEXT',['James Overton','Chris Casora','External / Contractor'],{
  S6:'Create stage- and relationship-specific sequences for alumni, customers, renewals, continuing education, replenishment, and reactivation with clear owners and stop/exit rules.',
  S2:'Automate nurture only after active Consideration records have consistent stage, owner, next action, next date, source, and response standards.'
 }),
 a('warehouse-partners','recurring','Activate warehouse partner agreements only where they create repeatable customer value.','LATER',['James Overton','Peggy Stoltzfus','Nigel Rhodes'],{
  S6:'Approve partner agreements only when AK9I can define the recurring customer promise, margin, fulfillment ownership, inventory/service requirements, and retention value.',
  S2:'Use vendor capability in Consideration only where it strengthens a defined solution; avoid presenting an undefined warehouse concept as a reason to buy.'
 }),
 a('warehouse-hub','recurring','Scale the warehouse into a multi-vendor hub after demand, fulfillment, and economics are proven.','LATER',['James Overton','Peggy Stoltzfus','Vacant / TBD'],{
  S6:'Treat the hub as a later recurring-value model: prove demand, partner reliability, inventory/fulfillment controls, contribution economics, customer support, and repeat behavior before scaling.'
 }),

 a('alumni-outcomes','loyalty','Track alumni outcomes, placement, advancement, and support needs.','NOW',['Tim Baird','Michelle Hartman','Chris Casora'],{
  S5:'Define verified outcome statuses, conduct scheduled alumni follow-up, identify employment/advancement needs, and use the result to determine relationship health and the next AK9I support action.'
 }),
 a('curriculum-audit','loyalty','Complete curriculum audit and use results to strengthen customer outcomes and confidence.','NOW',['Tim Baird','Kenneth Gregory','Paul Roushia'],{
  S5:'Compare graduate outcomes, employer feedback, student performance, complaints, and recurring gaps to determine which curriculum changes will improve customer results and confidence.',
  S4:'Audit course objectives, lesson content, practical work, assessments, instructor materials, records, and delivery consistency; assign corrections and validate implementation.'
 }),
 a('certification-audit','loyalty','Complete certification audit and correct credential / certification quality issues.','NOW',['Paul Roushia','Tim Baird'],{
  S5:'Verify that credentials correspond to supportable outcomes and customer expectations; identify any credibility or relationship-risk issues that must be corrected.',
  S4:'Review certification criteria, course requirements, records, approvals, naming, and issuance controls; correct gaps before updated credentials are published.'
 }),
 a('client-renewal-evidence','loyalty','Use client satisfaction and delivery evidence to prepare contract renewals / expansion.','NEXT',['Jasmine Johnson','James Overton'],{
  S6:'Turn healthy accounts into a documented renewal or expansion path with timing, decision maker, next action, service options, and commercial ownership.',
  S5:'Capture satisfaction, service results, incidents, responsiveness, open issues, and relationship health before renewal pressure creates urgency; recover weak relationships before asking for more business.'
 }),
 a('dog-sale-outcomes','loyalty','Use dog-sale outcomes and customer feedback to strengthen repeat business and reputation.','NEXT',['Kayla Petersen','James Overton'],{
  S6:'For satisfied buyers, define appropriate repeat value such as future canine needs, training, replenishment, support, or referrals and record the next relationship action.',
  S5:'Follow the placement after sale, capture suitability/performance feedback, resolve issues, document results, and use verified success to strengthen trust.'
 }),

 a('curriculum-modernize','delivery','Deploy updated classroom content and complete full curriculum modernization.','NOW',['Tim Baird','Kenneth Gregory','Stephane Hubert'],{
  S4:'Implement corrected curriculum, lesson plans, instructor materials, assessments, practical standards, records, and change control; verify instructors are delivering the approved version consistently.'
 }),
 a('certifications-publish','delivery','Publish updated certifications after audit / quality review.','NOW',['Paul Roushia','Tim Baird'],{
  S4:'Issue only after requirements, naming, evidence, approvals, records, and delivery standards are validated; control templates and retire superseded versions.'
 }),
 a('ray-allen','delivery','Activate Ray Allen development / content work where it improves the training or LMS offer.','NEXT',['Chris Casora','Tim Baird','James Overton'],{
  S4:'Define the exact instructional or product contribution, rights/inputs, technical integration, owner, learner/customer value, acceptance criteria, and support before treating meetings as progress.'
 }),
 a('american-aluminum','delivery','Schedule / execute American Aluminum training if it directly improves capability or customer delivery.','NEXT',['Tim Baird','James Overton'],{
  S4:'Define the capability gap, attendees, objectives, schedule, required equipment, evidence of competence, and how the training changes delivery after completion.'
 }),
 a('canine-readiness','delivery','Maintain canine readiness, kennel operations, and onsite K9 support for delivery.','NOW',['Kayla Petersen','Kimberly Smith'],{
  S4:'Maintain canine health, readiness, testing/evaluation, inventory visibility, training path, kennel support, and issue escalation so sales, school, and contract delivery receive ready assets.'
 }),
 a('field-execution','delivery','Ensure post-award contract / field execution remains under Contracts & Field Operations.','NOW',['Jasmine Johnson','Brandon Franquez'],{
  S4:'At award, accept the operating handoff and own staffing, deployment, client coordination, service quality, incidents, deliverables, records, and billing support through delivery.'
 }),

 a('salesforce-three-tier','commitment','Activate the Salesforce three-tier process with defined stage, owner, next action, next date, and handoff criteria.','NOW',['James Overton','Chris Casora'],{
  S3:'Define the exact exit from Sales into enrollment, canine operations, or contracts: accepted terms, required documents, readiness, handoff owner, and confirmation that delivery can begin.',
  S2:'Standardize active-opportunity stage definitions, owners, next actions/dates, source, qualification, aging, and follow-up so qualified relationships do not drift.'
 }),
 a('dog-sales-handoff','commitment','Define the dog-sales commitment and operating handoff from Sales to Canine Operations.','NEXT',['James Overton','Kayla Petersen'],{
  S3:'Specify when a canine sale is committed, what suitability/readiness evidence and commercial terms are required, and exactly what Sales hands to Canine Operations for fulfillment.',
  S2:'During Consideration, Sales owns fit, customer requirements, proof, price/terms, objections, and next action while Canine Operations supplies authoritative readiness and suitability information.'
 }),
 a('le-award-handoff','commitment','Move law-enforcement / nonprofit opportunities from qualified consideration into agreement / award and clean operating handoff.','NEXT',['James Overton','Jasmine Johnson','Paul Roushia'],{
  S3:'Control proposal/terms, approval, award, compliance requirements, start readiness, and the handoff from Sales to Contracts & Field Operations.',
  S2:'Qualify agency/nonprofit need, authority, scope, timing, funding, proof, compliance needs, and next decision before proposal effort escalates.'
 }),

 a('salesforce-nurture','consideration','Use Salesforce as the nurture engine for active prospects and historical reactivation.','NOW',['James Overton','Chris Casora'],{
  S2:'Make every qualified prospect visible with one owner, stage, source, next action/date, audience-specific sequence, aging rule, and measurable movement toward commitment or disqualification.'
 }),
 a('dogtra-agreement','consideration','Complete Dogtra agreement and define its customer / commercial use case.','NEXT',['James Overton'],{
  S6:'If the agreement supports recurring workshops, replenishment, education, or repeat customer value, define the ongoing offer, economics, cadence, and owner before activation.',
  S2:'Define what customer problem the Dogtra relationship helps solve, what proof/offer it adds, commercial terms, and how it improves the next decision for a qualified prospect.'
 }),
 a('military-le','consideration','Strengthen military and law-enforcement relationships into qualified opportunities.','NEXT',['James Overton','Paul Roushia'],{
  S7:'Use existing trusted relationships for introductions, references, industry advice, and credibility without confusing relationship access with a qualified sales opportunity.',
  S2:'When an actual need emerges, create the Salesforce opportunity, identify authority/timing/requirements, assign Sales ownership, and define the next decision.'
 }),
 a('le-nonprofit','consideration','Develop law-enforcement nonprofit agreements as a controlled BD / Sales pipeline.','NEXT',['James Overton','Paul Roushia'],{
  S3:'Move qualified opportunities into agreement/award only when scope, terms, approvals, compliance needs, readiness, and operating handoff are clear.',
  S2:'Build a repeatable qualification path for nonprofit and law-enforcement opportunities: need, authority, funding, fit, proof, timing, and next action.'
 }),

 a('le-event','awareness','Schedule the quarterly law-enforcement event with tracked entry points and follow-up.','LATER',['James Overton','Paul Roushia','External / Contractor'],{
  S2:'Design the event around a guided next step for qualified attendees—consultation, assessment, demonstration, or defined offer—and assign follow-up before the event occurs.',
  S1:'Scale the event only when downstream follow-up is ready; use approved messaging, registration/source tracking, one clear entry action, and post-event attribution.'
 }),
 a('lms-national','awareness','Expand nationwide promotion of revenue-producing LMS programs after offer and economics are proven.','LATER',['James Overton','External / Contractor','Chris Casora','Tim Baird'],{
  S6:'Prove that the LMS offer creates repeat value, supportable delivery, retention, and acceptable economics with existing relationships before national acquisition spend.',
  S2:'Build audience-specific proof, pricing, qualification, FAQs, sales ownership, and nurture for people evaluating the program.',
  S1:'Expand nationwide reach only after the offer, conversion path, support capacity, economics, source attribution, and follow-up are stable.'
 }),
 a('funker-awareness','awareness','Use Funker530 / partner channels for measured awareness once follow-up and conversion are ready.','LATER',['James Overton','External / Contractor'],{
  S7:'Protect the relationship as a credible advocacy asset with approved proof, appropriate requests, and tracked introductions/referrals.',
  S2:'Give partner-sourced prospects a relevant proof path and human follow-up; assign each qualified record to Sales with a next action/date.',
  S1:'Use the channel for measured reach only after downstream readiness; use tracked entry points and compare source-to-consideration performance.'
 })
];

export const PORTFOLIO_DEFINE_FIRST=[
 {id:'kinetic',title:'Kinetic launch',posture:'DEFINE FIRST / HOLD',owners:['Vacant / TBD'],note:'Ron included “Kinetic launched” as a 30-day milestone, but the source does not define the product, customer, value proposition, or success criterion sufficiently to assign it responsibly to a pipeline stage.'},
 {id:'app-launch',title:'App beta → advanced beta / public launch',posture:'DEFINE FIRST',owners:['Chris Casora','Vacant / TBD'],note:'Ron included app beta and public-launch milestones. Technical ownership is clear, but stage placement depends on the app’s customer job: delivery, loyalty/recurring value, consideration, awareness, or another defined use.'}
];

export function findPortfolioAction(id){return PORTFOLIO_ACTIONS.find(x=>x.id===id)||PORTFOLIO_DEFINE_FIRST.find(x=>x.id===id)||null}
export function getPortfolioImplementation(actionId,stage){
 const action=PORTFOLIO_ACTIONS.find(x=>x.id===actionId),stageDef=PORTFOLIO_STAGES[stage];
 if(!action||!stageDef||!action.stageDetails?.[stage])return null;
 return {action,stage,stageDef,implementation:action.stageDetails[stage]};
}
