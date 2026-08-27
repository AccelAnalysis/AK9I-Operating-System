const PROFILES={
 schoolAdmin:{
  purpose:'Own the AK9I Training Academy operating system and directly supervise the Training & Instruction Lead and Student Services.',
  accountabilities:['Direct Academy administration, institutional calendars, student-status processes, required reporting, and school-side compliance execution.','Set priorities and resolve conflicts between Training & Instruction and Student Services.','Ensure instructors, student-support activity, records, admissions, graduation, and outcome processes operate through approved standards.','Coordinate independent regulatory/quality assurance with Paul Roushia without placing Paul inside the school reporting chain.','Escalate material curriculum, staffing, certification, financial, policy, and regulatory decisions to the CEO.'],
  decisionRights:['Direct routine Academy operations within approved policy, curriculum, staffing, and budget authority.','Assign work to the Training & Instruction Lead and Student Services.','May not unilaterally waive regulated requirements, alter certification standards, or direct other enterprise functions outside the Academy.'],
  handoffs:['CEO for performance, risk, staffing, and material decisions.','Training & Instruction Lead for academic delivery and instructor performance.','Student Services for student support, graduation, alumni transition, and service recovery.','Admin & Finance for HR, finance, records support, and administrative controls.','Data & Systems for LMS, webinar, Salesforce, and reporting support.'],
  records:['Academy decision and action register.','Class, instructor, student-status, institutional-reporting, and corrective-action records.','Evidence supporting VA/SAA, SCHEV, ACCET, DCJS, and other assigned school requirements.'],
  kpis:['class starts executed as scheduled','student-record completeness','retention and completion','instructional-quality exceptions closed','student-service issues closed','required reports submitted on time'],
  qualifications:['Demonstrated ability to administer a regulated postsecondary training operation.','Working knowledge of the school approvals, student records, instructional systems, and reporting obligations assigned to AK9I.'],
  sourceAlignment:'Tim Baird alignment. Tim is the Academy authority rather than the general manager of all AK9I functions. Kenneth Gregory and Michelle Hartman report directly to this position in separate functional branches.'
 },
 'school-training-lead':{
  purpose:'Lead instructional execution and directly supervise the Instructor / Trainer Team under the School Administrator.',
  accountabilities:['Schedule and direct instructors and practical-training coverage.','Ensure approved curriculum, lesson plans, student training records, practical exercises, and assessment standards are followed.','Coach instructors, standardize teaching practice, and address instructional performance.','Monitor student and assigned canine progress and coordinate remediation.','Document proposed curriculum or methodology changes for approval rather than implementing uncontrolled changes.'],
  decisionRights:['Assign routine instructor work and adjust instructional sequencing within approved curriculum.','Stop unsafe training and require remediation.','May not independently change approved curriculum, certification standards, or regulated requirements.'],
  handoffs:['School Administrator for priorities, performance, staffing, and proposed changes.','Student Services for non-instructional student needs and service issues.','Regulatory/Quality through the School Administrator for controlled credential or compliance questions.'],
  records:['Instructor schedules and coverage.','Training-folder review evidence.','Student progress, assessment, remediation, and instructor-development records.'],
  kpis:['instructor coverage','curriculum adherence','training-record completeness','student progress and remediation closure','instructional exceptions'],
  qualifications:['Substantial working-dog instruction and training experience appropriate to the courses supervised.','Maintain all instructor, trainer, K9, training-aid, and other credentials required for assigned work.'],
  sourceAlignment:'Kenneth Gregory alignment. Kenneth has direct authority over instructors; Student Services is a peer function under the School Administrator, not a subordinate of the Training & Instruction Lead.'
 },
 'school-instructor-team':{
  purpose:'Deliver approved instruction and practical labs under the direct supervision of the Training & Instruction Lead.',
  accountabilities:['Deliver assigned lessons, demonstrations, and practical exercises using approved materials and safety standards.','Maintain student and canine training documentation.','Assess progress, document remediation needs, and provide required student out-briefs.','Escalate student-support issues to Student Services and instructional issues to the Training & Instruction Lead.'],
  handoffs:['Training & Instruction Lead as direct supervisor.','Student Services for non-instructional student needs.','School Administrator for matters escalated through the instructional lead.'],
  sourceAlignment:'Stephane Hubert, Jerad Poor, and future qualified instructors are represented as a team reporting to Kenneth Gregory.'
 },
 'school-student-services':{
  purpose:'Own student support, service recovery, graduation transition, and student-facing coordination under the School Administrator.',
  accountabilities:['Serve as the primary student-services point of contact.','Coordinate student communications, support needs, grievances, graduation, career support, alumni transition, and outcome follow-up.','Maintain student-service case records and ensure issues reach the correct accountable function.','Coordinate with Training & Instruction without reporting through that function.'],
  decisionRights:['Resolve routine student-service matters within policy and delegated authority.','Escalate academic, conduct, regulatory, financial, safety, and legal matters to the accountable function.'],
  handoffs:['School Administrator as direct supervisor.','Training & Instruction Lead for academic or remediation coordination.','Admin & Finance for financial/administrative matters.','Sales/Enrollment and Data & Systems for pre-start, webinar, alumni, and outcome workflows.'],
  records:['Student-service contacts and case notes.','Grievance and service-recovery routing.','Graduation, alumni, career-support, and outcome-follow-up records.'],
  kpis:['student response time','open student-service issues','graduation handoff completion','student satisfaction / recovery','outcome follow-up completion'],
  sourceAlignment:'Michelle Hartman alignment. Michelle reports to the School Administrator and is organizationally parallel to the Training & Instruction Lead.'
 },
 contractsOps:{
  purpose:'Own post-award contract administration and field-service delivery, with direct authority over the K9 Team Lead.',
  accountabilities:['Accept awarded work from Sales and establish the operating contract file.','Translate scope into staffing, schedules, site instructions, client contacts, readiness requirements, deliverables, billing evidence, and renewal actions.','Direct the K9 Team Lead and resolve routine client and deployment issues.','Coordinate canine and Operations Specialist resources from Canine Operations without becoming their home-line supervisor.','Maintain contract records, incidents, service-quality evidence, modifications, renewals, and closeout.'],
  decisionRights:['Direct routine post-award contract execution, deployment sequencing, and client coordination within approved scope.','Remove or hold a team from service for readiness, safety, credential, or conduct concerns.','May not commit unapproved pricing, scope, legal terms, or capability.'],
  handoffs:['Sales for award and commercial commitments.','K9 Team Lead for handler supervision and field execution.','Canine Operations for canine readiness and Operations Specialist assignment.','Admin & Finance for time, payroll, billing, HR, and purchasing controls.','Regulatory/Quality and Data & Systems for assurance and records/reporting.'],
  records:['Contracts, SOWs, amendments, schedules, staffing, client contacts, incidents, service evidence, billing support, renewals, and closeout.'],
  kpis:['contract deliverables on time','shift coverage and on-time deployment','service exceptions closed','billing evidence complete','renewal readiness / retained accounts'],
  sourceAlignment:'Jasmine Johnson alignment. Jasmine directly supervises Brandon Franquez and owns the post-award function. Business Development and Sales are separate upstream functions.'
 },
 'field-team-lead':{
  purpose:'Provide first-line supervision of K9 Detection Specialists / Handlers under the Contracts & Field Operations Lead.',
  accountabilities:['Direct routine handler coverage, check-in, field execution, SOP adherence, appearance, and reporting.','Coach handlers and address immediate performance, readiness, attendance, and conduct issues.','Conduct or coordinate after-action review and escalate material incidents.','Verify required readiness before field assignment.'],
  decisionRights:['Adjust routine staffing and field sequencing within approved scope.','Stop unsafe activity or remove a team from service pending review.','Escalate formal discipline, material client issues, and contract changes.'],
  handoffs:['Contracts & Field Operations Lead as direct supervisor.','Canine Operations for canine readiness.','Regulatory/Quality for credential concerns through the functional lead.'],
  records:['Coverage changes, readiness checks, after-action notes, incidents, and handler coaching/escalation records.'],
  kpis:['coverage reliability','on-time starts','field exceptions','incident-report timeliness','handler readiness'],
  sourceAlignment:'Brandon Franquez placement. Handlers report to Brandon; Brandon reports to Jasmine.'
 },
 'field-handlers':{
  purpose:'Deliver professional K9 field services under the direct supervision of the K9 Team Lead.',
  handoffs:['K9 Team Lead as direct supervisor.','Contracts & Field Operations for client scope and deployment instructions.','Canine Operations for canine health/readiness.'],
  sourceAlignment:'Current K9 Detection Specialists / Handlers are represented as one workforce group under Brandon Franquez.'
 },
 canineOps:{
  purpose:'Own canine readiness, kennel operations, placement, canine assets, and home-line supervision of the Kennel Lead and Operations Specialist Pool.',
  accountabilities:['Direct canine intake, testing, health/readiness, training path, placement, inventory, and kennel operating standards.','Supervise the Kennel Lead and Operations Specialist Pool.','Ensure canine and staff readiness records are current.','Assign Operations Specialists to approved work and coordinate deployment tasking with Contracts & Field Operations.'],
  decisionRights:['Final operating authority on canine readiness, kennel standards, placement readiness, and Operations Specialist home-line supervision within approved policy.','May remove a canine or employee from assignment for health, safety, welfare, qualification, or readiness concerns.'],
  handoffs:['Kennel Lead for daily kennel personnel and care.','Contracts & Field Operations for deployment demand and tasking.','Regulatory/Quality for controlled canine/team qualification evidence.','Admin & Finance for HR, purchasing, and asset controls.'],
  records:['Canine intake, health, training, readiness, placement, kennel, inventory, and Operations Specialist records.'],
  kpis:['canine readiness','care and sanitation compliance','placement readiness','asset accuracy','Operations Specialist availability','health/safety exceptions'],
  sourceAlignment:'Kayla Petersen alignment. Kayla is the direct supervisor of Kimberly Smith and the Operations Specialist Pool. Jasmine may task Operations Specialists for contract deployments through a dotted coordination relationship.'
 },
 'canine-kennel-lead':{
  purpose:'Provide first-line supervision of canine-care and kennel personnel under the Canine Operations Lead.',
  accountabilities:['Direct daily feeding, watering, sanitation, medication, observation, kennel safety, and care assignments.','Verify required logs and escalate canine health, staffing, facility, or safety concerns.','Coach kennel personnel and maintain daily operating discipline.'],
  handoffs:['Canine Operations Lead as direct supervisor.','Facilities & Grounds for facility deficiencies.','Admin & Finance for staffing and purchasing support.'],
  sourceAlignment:'Kimberly Smith alignment. Kennel personnel report through Kimberly to Kayla.'
 },
 'canine-care':{
  purpose:'Perform assigned canine care and kennel work under the direct supervision of the Kennel Lead.',
  handoffs:['Kennel Lead as direct supervisor.','Canine Operations Lead for escalated health/readiness matters.'],
  sourceAlignment:'Multi-person canine-care/kennel workforce group under Kimberly Smith.'
 },
 'field-ops-specialists':{
  purpose:'Provide cross-trained canine, training, deployment, and operations support under Canine Operations home-line supervision.',
  accountabilities:['Maintain assigned canine/operational readiness.','Support training, kennel, transport, setup, field deployment, and special projects as qualified and assigned.','Follow deployment instructions from Contracts & Field Operations while assigned to a contract.','Maintain required time, task, incident, asset, and readiness records.'],
  decisionRights:['Execute assigned work within qualification and approved scope.','Stop unsafe work and escalate conflicting assignments or authority.'],
  handoffs:['Canine Operations Lead as direct personnel supervisor.','Contracts & Field Operations for dotted-line deployment tasking.','K9 Team Lead when working inside a field team.'],
  records:['Assignment, readiness, time, task, incident, and asset records.'],
  kpis:['assignment completion','deployment readiness','record completeness','safety / service exceptions'],
  sourceAlignment:'Kyle Davis and future Operations Specialists report to Kayla for personnel authority and may be tasked by Jasmine for specific contract deployments.'
 },
 businessDev:{
  purpose:'Create strategic relationships and qualified opportunities before formal sales conversion begins.',
  accountabilities:['Prospect through relationships, events, referrals, partnerships, military/government channels, employers, agencies, districts, and targeted accounts.','Identify decision makers, needs, timing, authority, fit, and opportunity context.','Maintain relationship maps, opportunity notes, and next actions in Salesforce.','Develop strategic access, demonstrations, introductions, and opportunity hypotheses.','Hand qualified prospects to the Sales function when they enter active Consideration.'],
  decisionRights:['Own routine relationship development and opportunity qualification within approved brand and market boundaries.','May not commit price, scope, contract terms, staffing, or operational capability.'],
  handoffs:['Marketing for awareness and campaign support.','Sales when a prospect reaches active Consideration.','CEO for strategic relationships and material opportunities.','Data & Systems for Salesforce and attribution.'],
  records:['Relationship maps, opportunity qualification, meetings, introductions, events, referrals, and next actions.'],
  kpis:['qualified opportunities created','decision-maker relationships','pipeline sourced','referral / partner opportunities','qualified handoff acceptance'],
  qualifications:['Strong relationship development, strategic outreach, client communication, and K9-industry capability understanding.'],
  sourceAlignment:'James Overton alignment. Business Development is separated from Sales, Marketing, Contracts, and Field Operations.'
 },
 sales:{
  purpose:'Convert qualified student and contract prospects from Consideration into an enrollment, purchase, award, or executed commitment.',
  statusNote:'Interim functional ownership: James Overton. Establish the function now; build a dedicated sales team when downstream pipeline readiness and Consideration-stage volume justify it.',
  accountabilities:['Accept qualified prospects from Business Development, Marketing, advocacy, referrals, and inbound sources.','Conduct discovery, confirm fit, explain value and proof, address questions and objections, and define the next decision.','For students, guide consultation, program fit, application, admission, funding/payment, and pre-start commitment without collecting sensitive information prematurely.','For contract prospects, coordinate capability discussions, demonstrations, pricing inputs, proposals, negotiations, award, and executed agreement.','Maintain stage, owner, next action, next date, forecast, and disposition in Salesforce.','Hand enrolled students to School Administration/Student Services and awarded contracts to Contracts & Field Operations.'],
  decisionRights:['Advance or disqualify opportunities using approved criteria.','Present approved pricing, terms, programs, proof, and capabilities.','May not invent capability, alter regulated requirements, or commit unapproved pricing, legal terms, staffing, or scope.'],
  handoffs:['Business Development and Marketing as upstream sources.','School Administration and Student Services for enrolled students.','Contracts & Field Operations for awarded contracts.','Admin & Finance for payment, financing, pricing controls, and contract financial review.','Data & Systems for CRM, automation, webinar, and reporting.'],
  records:['Salesforce stage history, discovery notes, proposals, applications, pricing approvals, objections, forecast, next actions, and handoff confirmation.'],
  kpis:['response time','Consideration-to-commitment conversion','application / proposal completion','win / enrollment rate','sales-cycle time','forecast accuracy','handoff completeness'],
  qualifications:['Consultative sales, discovery, communication, objection-handling, negotiation, and CRM discipline appropriate to education and K9 service offerings.'],
  sourceAlignment:'Separate functional seat created from sales duties previously embedded in Business Development and Marketing. James occupies the seat on an interim basis; no separate sales department is implied yet.'
 },
 marketing:{
  purpose:'Create measurable awareness and qualified demand through contracted execution while protecting AK9I brand, claims, source ownership, and attribution.',
  statusNote:'Contracted execution: Jillian and approved partner vendors. Interim vendor and performance manager: James Overton. James manages briefs, deadlines, deliverables, attribution, and vendor performance—not routine creative production or self-approval.',
  accountabilities:['Maintain approved marketing strategy, audience priorities, campaign calendar, briefs, budgets, source codes, and expected outcomes.','Direct approved contractors producing web, landing pages, social, content, video, event assets, campaigns, and related creative.','Require use of the AK9I Brand Standards, approved claims, approved assets, and return of editable source files.','Track reach, engagement, qualified inquiries, source attribution, cost, pipeline contribution, and vendor delivery.','Route responses into Salesforce and coordinate nurture with Sales and Data & Systems.'],
  decisionRights:['The interim vendor manager may set briefs, deadlines, acceptance criteria, and request corrections within approved budget and strategy.','Creative, spending, claims, and material brand changes follow approved decision rights and independent review.','No contractor or internal coordinator is the sole approver and sole keeper of source files/accounts.'],
  handoffs:['Business Development for strategic market context.','Sales for qualified responses entering Consideration.','Data & Systems for landing pages, automation, Salesforce, attribution, and analytics.','CEO/Brand Owner and designated reviewers for approvals.'],
  records:['Campaign briefs, approvals, deliverables, source files, account access, budget, invoices, attribution, metrics, and vendor scorecards.'],
  kpis:['qualified inquiries','source-attributed pipeline','campaign contribution','vendor on-time delivery','brand / claims compliance','source-file and account continuity'],
  qualifications:['Marketing strategy and vendor-management capability; contracted specialists maintain the channel/production competencies required for assigned work.'],
  sourceAlignment:'Marketing remains a separate function. Execution is contracted for the immediate term; James provides interim oversight without serving as the routine creator.'
 },
 data:{
  purpose:'Provide systems, data, automation, LMS/webinar, CRM, reporting, and technology support directly to the CEO and all operating functions.',
  accountabilities:['Maintain Salesforce, LMS, webinar, courseware, integrations, APIs, automation, reporting, and assigned IT/vendor systems.','Support both student and contract customer lanes with authoritative data, source attribution, nurture, workflow, and reporting.','Document access, changes, continuity, and system ownership.'],
  handoffs:['Reports directly to the CEO.','Supports each functional lead without being subordinated to HR, Finance, School Administration, Sales, or Marketing.'],
  sourceAlignment:'Chris Casora alignment. Chris reports directly to Ronald and has no current direct reports in the target chart.'
 },
 adminFinance:{
  purpose:'Own Human Resources, Finance & Accounting, administrative control, records support, and facilities support under the CEO.',
  accountabilities:['Direct HR administration, personnel records, payroll/time/PTO controls, performance and corrective-action processes.','Direct finance/accounting, reconciliations, cash controls, purchasing approvals, invoice/billing support, reporting, and outsourced financial work.','Supervise Administrative Operations Support, Records & Document Control, and Facilities & Grounds.','Assume the HR and Finance duties historically performed or overseen by the COO while unresolved enterprise-integration scope is separately defined.'],
  decisionRights:['Exercise approved HR and finance authority and require complete supporting evidence.','Approve or route expenditures according to current purchasing authority.','May require records correction and stop unsupported administrative/financial processing.'],
  handoffs:['CEO for material HR, finance, legal, and control matters.','Every functional lead for staffing, time, purchasing, billing, records, and administrative support.','COO / Enterprise Integration through a dotted transition relationship while remaining scope is resolved.'],
  records:['Personnel, payroll, time, PTO, performance, discipline, finance, accounting, reconciliation, purchasing, billing, records-control, and facilities evidence.'],
  kpis:['payroll/time accuracy','reconciliations completed','purchasing compliance','HR action timeliness','records completeness','facilities issues closed'],
  qualifications:['Demonstrated HR and finance/accounting administration capability with appropriate confidentiality, controls, and systems competence.'],
  sourceAlignment:'Peggy Stoltzfus alignment. Ryan Gibbs, Lindsay Smith, and Brandon Yon report directly to Peggy. HR and Finance are Peggy’s accountabilities rather than separate boxes reporting to her.'
 },
 'admin-ops-support':{sourceAlignment:'Ryan Gibbs reports directly to Peggy Stoltzfus as Administrative Operations Support.'},
 'admin-records':{sourceAlignment:'Lindsay Smith reports directly to Peggy Stoltzfus as Records & Document Control Specialist.'},
 'admin-facilities':{sourceAlignment:'Brandon Yon reports directly to Peggy Stoltzfus for Facilities & Grounds.'},
 regulatory:{sourceAlignment:'Paul Roushia reports directly to the CEO as an independent assurance function and has no direct reports.'},
 cooResolution:{
  statusNote:'Scope remains under resolution. HR and Finance transfer to Peggy Stoltzfus. Do not assign permanent direct reports until enterprise-integration, procurement/logistics, and program/project oversight are explicitly chartered.',
  sourceAlignment:'Nigel Rhodes remains the current COO; the future-state scope and authority boundaries require an owner decision.'
 }
};

export function applyAuthorityOverrides(role,base){
 const profile=PROFILES[role.key];
 if(!profile)return base;
 return {...base,...profile};
}
