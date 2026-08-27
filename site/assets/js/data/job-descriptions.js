const COMMON={
 authority:'Execute within approved AK9I policy, delegated authority, contractual scope, safety requirements, and applicable regulatory requirements. Escalate material risk, policy exceptions, commitments outside delegated authority, and matters requiring owner approval.',
 records:['Maintain complete, timely, and retrievable records for work performed, decisions made, exceptions identified, and required handoffs.','Use the designated AK9I system of record rather than relying on personal files, text messages, or undocumented verbal direction.'],
 qualifications:['Demonstrated competence for the assigned work and any required AK9I training.','Maintain all licenses, registrations, certifications, and recurrent training required for the duties actually performed.']
};

const PROFILES={
 ceo:{
  purpose:'Set enterprise direction, allocate authority, protect the company’s financial and regulatory position, and hold final accountability for AK9I performance.',
  accountabilities:['Set enterprise priorities, operating expectations, and decision rights.','Approve material organizational changes, capital commitments, major contracts, and strategic initiatives.','Chair owner-level governance and ensure functional leaders have clear objectives and resources.','Maintain final accountability for mission, cash, risk, brand, growth, and continuity of operations.','Represent AK9I with major partners, government entities, strategic customers, and the public as appropriate.'],
  decisionRights:['Final decision authority on enterprise strategy, material commitments, organizational structure, and executive appointments.','May delegate operating authority while retaining final accountability.'],
  handoffs:['Receives independent compliance/quality assurance from the Regulatory Compliance, Quality & Credentialing Lead.','Receives functional performance reporting from each accountable lead.','Hands approved priorities and decisions into the management cadence for execution.'],
  records:['Owner/leadership decisions and action register.','Approved strategic priorities, major commitments, and delegated authorities.','Material risk, compliance, and financial escalation records.'],
  kpis:['enterprise objectives achieved','cash position and major financial controls','material risk / compliance exceptions closed','leadership commitments completed','customer and workforce outcome trends'],
  qualifications:['Executive leadership capability appropriate to a regulated, multi-function K9 enterprise.','Working understanding of AK9I’s school, field-service, canine, financial, and compliance systems.'],
  sourceAlignment:'Executive role in the current operating model. The Student Catalog describes the President/organizational leader as directing the organization, facilitating governance, representing AK9I, and participating in strategic planning and financial control.'
 },
 regulatory:{
  purpose:'Provide independent assurance to the CEO on regulatory compliance, credentialing, certification governance, quality, and institutional readiness without supervising an operating department.',
  accountabilities:['Maintain visibility of regulatory, accreditation, licensing, examiner, and credential requirements applicable to AK9I.','Review evidence supporting regulated certifications, examinations, licenses, and required institutional records.','Identify compliance gaps, document findings, and verify corrective actions.','Maintain independence of judgment for certification/credentialing matters and serious compliance findings.','Advise the CEO on regulatory changes, audit readiness, credential risk, and quality concerns.','Maintain a knowledge-transfer record so critical compliance knowledge does not remain person-dependent.'],
  decisionRights:['Direct access to the CEO for compliance, credentialing, certification, and quality findings.','May recommend or place a hold on activity where a required credential, license, certification, or controlled standard is not demonstrably current, subject to approved policy.','No routine operational staff supervision and no authority to lower an academic, certification, licensing, or safety standard for commercial convenience.'],
  handoffs:['Receives required records and evidence from School Administration, Contracts & Field Operations, Canine Operations, Admin & Finance, and Data & Systems.','Returns findings and corrective-action requirements to the accountable functional lead and escalates unresolved material issues to the CEO.'],
  records:['Regulatory and credential calendar.','Audit and assurance findings.','Certification/examiner governance records and conflict-of-interest evidence where applicable.','Corrective-action verification and compliance knowledge base.'],
  kpis:['credential / regulatory deadlines met','audit findings closed on time','required assurance reviews completed','repeat compliance exceptions','critical records current'],
  qualifications:['Demonstrated knowledge of AK9I’s applicable regulatory, accreditation, credentialing, and controlled-record requirements.','Maintain any licenses, compliance-agent designations, examiner credentials, or other qualifications specifically assigned to the role.'],
  sourceAlignment:'Current advisory alignment consolidating regulatory compliance, quality assurance, credentialing knowledge, document oversight, and examiner-governance responsibilities. Per leadership direction, this is an independent solo function with no direct reports.'
 },
 schoolAdmin:{
  purpose:'Own the Training Academy operating system: compliant enrollment and administration, academic delivery, instructional quality, student-support coordination, and institutional reporting.',
  accountabilities:['Direct day-to-day school administration and coordinate the functions that support enrolled students.','Maintain school compliance execution with VA/SAA, SCHEV, ACCET, DCJS, approved curricula, and other applicable requirements while coordinating independent assurance with the Regulatory/Quality lead.','Oversee instructional planning, classroom presence, instructor development, curriculum execution, and academic-quality controls.','Ensure student enrollment, schedule changes, withdrawals, refunds, grades, academic records, and required student-status actions are handled through approved processes.','Ensure required annual/institutional reports, completion/placement information, and supporting records are prepared and submitted by the responsible staff.','Coordinate Student Services, Admissions/Registrar, Training & Instruction, and Curriculum/Academic Records.','Elevate proposed certification, curriculum, policy, staffing, or structural changes through the approved decision path before implementation.'],
  decisionRights:['Direct routine Academy operations within approved curriculum, policy, staffing, and budget authority.','Assign instructors and academic work within approved qualifications and course requirements.','May require remediation, records correction, and process correction; may not unilaterally waive regulatory or certification standards.'],
  handoffs:['Reports school performance, material exceptions, staffing needs, and proposed changes to the CEO.','Coordinates compliance evidence with the independent Regulatory/Quality lead.','Coordinates finance, HR, scheduling, and records support with Admin & Finance.','Coordinates LMS/courseware systems with Data & Systems.'],
  records:['Institutional and program calendars.','Enrollment/status records and VA/SCO documentation where assigned.','Academic and instructional quality records.','Instructor qualification and scheduling evidence.','Institutional reporting and corrective-action records.'],
  kpis:['class starts executed as scheduled','student-record completeness','instructional / curriculum compliance','student retention and completion','required reports submitted on time','open academic / administrative exceptions'],
  qualifications:['Demonstrated ability to administer a regulated postsecondary training operation.','Working knowledge of VA/SAA, SCHEV, ACCET, DCJS, student-record, curriculum, and instructional requirements relevant to the assigned scope.'],
  sourceAlignment:'Tim Baird alignment. This role absorbs the applicable school-administration, legacy Director of Training & Education, and legacy Director of Operations/Senior SCO responsibilities that belong to Academy administration rather than kennel operations, independent compliance assurance, finance, or technology.'
 },
 'school-training-lead':{
  purpose:'Lead day-to-day instructional execution and instructor development while maintaining approved AK9I curriculum, training protocols, and student-performance standards.',
  accountabilities:['Coordinate instructors and classroom/training coverage.','Ensure instructors teach approved curriculum, syllabus, protocols, and required practical exercises.','Review student training documentation and ensure daily/weekly training records are complete.','Monitor student and assigned K9 progress and conduct or ensure required progress out-briefs.','Coach and professionally develop instructors and standardize instructional methods.','Support curriculum improvement by documenting instructional issues, learner performance, and recommended changes.','Serve as the first instructional escalation point for training quality, student remediation, and instructor performance.'],
  decisionRights:['May assign routine instructional work and adjust teaching technique within approved curriculum.','May require remediation or corrective instructional action when performance falls below standard.','May not independently change approved curriculum, certification standards, or regulated requirements.'],
  handoffs:['Reports instructional performance and proposed changes to the School Administrator.','Coordinates student-support issues with Student Services.','Coordinates controlled standards/credential questions with the Regulatory/Quality lead through the School Administrator.'],
  records:['Instructor schedules and classroom/training coverage.','Student training-folder review evidence.','Weekly progress/out-brief records.','Instructor-development and instructional-quality notes.'],
  kpis:['instructor coverage','training-record completeness','curriculum adherence','student progress / remediation closure','instructional exceptions'],
  qualifications:['Substantial working-dog instruction/training experience appropriate to the courses supervised.','Maintain required AK9I instructor/trainer qualifications and any assigned controlled-training-aid credentials.'],
  sourceAlignment:'Kenneth Gregory alignment. Combines the working-lead responsibilities from the legacy Senior Instructor and the instructional-lead portions of the Director of Training & Education role. “Senior Instructor” is treated as an absorbed legacy title rather than a separate management layer.'
 },
 'school-instructor-team':{
  purpose:'Deliver approved K9 instruction and practical labs that develop student competence while maintaining accurate student and canine training evidence.',
  accountabilities:['Design and deliver assigned presentations, demonstrations, and practical labs within approved AK9I course materials.','Serve as technical instructors for assigned student/K9 training activities.','Ensure students document training received and maintain required daily records.','Monitor, assess, and record student and assigned K9 progress.','Conduct required student out-briefs and provide documented remediation recommendations.','Assist with curriculum and methodology improvement through the Training & Instruction Lead.','Conduct canine screening/testing only when qualified and assigned.'],
  decisionRights:['May adapt teaching technique and practical sequencing within approved curriculum and safety rules.','May refer a student for remediation and stop unsafe training activity.','May not lower a passing/certification standard or make unapproved curriculum changes.'],
  handoffs:['Reports to the Training & Instruction Lead for academic delivery.','Coordinates student concerns with Student Services and records issues with Curriculum & Academic Records.'],
  records:['Daily student training documentation.','Weekly progress assessments.','Practical/written assessment evidence as assigned.','Training-aid or canine records when applicable.'],
  kpis:['assigned instruction delivered','student documentation completeness','student progress / remediation outcomes','curriculum and safety compliance'],
  qualifications:['AK9I instructor/trainer qualification appropriate to assigned subjects.','Maintain subject-matter, K9, DCJS, training-aid, or other credentials required for assigned instruction.'],
  sourceAlignment:'Aligned to the active Instructor/Trainer and legacy Senior Instructor job descriptions, including approved curriculum adherence, training-folder review, student progress monitoring, weekly out-briefs, and curriculum-improvement support.'
 },
 'school-student-services':{
  purpose:'Own the student-support experience and coordinate the non-instructional services required for students to enter, persist, complete, and transition from AK9I programs.',
  accountabilities:['Serve as a primary student-services point of contact.','Coordinate student questions, support needs, institutional communications, and service recovery.','Support enrollment/status processes with Admissions/Registrar and the School Administrator.','Maintain student-services records and required communications.','Support graduation, career advisement, alumni handoff, and outcome follow-up.','Coordinate student concerns through the approved grievance/escalation process.'],
  decisionRights:['Resolve routine student-service matters within policy and delegated authority.','Escalate academic, regulatory, financial, conduct, safety, or legal matters to the accountable function.'],
  handoffs:['School Administrator; Training & Instruction Lead; Admissions/Registrar; Admin & Finance; Outcomes/Alumni workflows.'],
  records:['Student-service contacts and case notes.','Graduation/career-support handoffs.','Service-recovery and grievance-routing evidence.'],
  kpis:['student response time','open student-service issues','graduation handoff completion','student satisfaction / service recovery','outcome follow-up completion'],
  qualifications:['Demonstrated student-service and regulated-school administration capability.'],
  sourceAlignment:'Aligned to the active Director of Student Services function held by Michelle Hartman.'
 },
 'school-curriculum-records':{
  purpose:'Maintain controlled academic records, curriculum documentation, course versions, assessment evidence, and required institutional data.',
  accountabilities:['Maintain approved curriculum, syllabus, forms, assessment tools, and revision history.','Maintain student academic records and controlled course documentation according to retention requirements.','Support institutional reporting, completion/placement evidence, and audit preparation.','Coordinate approved curriculum changes and prevent superseded materials from remaining in active use.','Maintain evidence linking learning outcomes, assessments, findings, and documented improvement actions.'],
  decisionRights:['May reject incomplete academic records and prevent uncontrolled/superseded course materials from being treated as current.','May not approve substantive curriculum changes without the designated academic approval path.'],
  handoffs:['School Administrator; Training & Instruction Lead; Student Services; Data & Systems; independent Regulatory/Quality assurance.'],
  records:['Curriculum master files and revision history.','Academic records and assessment evidence.','Institutional reporting support files.'],
  kpis:['record completeness','current-version compliance','audit exceptions','reporting support delivered on time'],
  qualifications:['Strong controlled-record and academic-document administration capability.'],
  sourceAlignment:'Current functional role created from academic-record, curriculum-control, assessment, and institutional-reporting duties previously distributed across school positions.'
 },
 'school-admissions':{
  purpose:'Administer prospect-to-student enrollment transactions accurately, securely, and in accordance with approved admissions and student-record requirements.',
  accountabilities:['Receive and process applications and required admission documentation.','Coordinate proof of education, transfer-credit documentation, enrollment agreements, and class-start readiness.','Maintain secure applicant/admission records and route sensitive information only through approved systems.','Coordinate funding/benefit documentation with the School Administrator or designated certifying official.','Confirm admissions status and required pre-start actions to the student.'],
  decisionRights:['May determine administrative completeness against published requirements.','May not waive admission, benefit, academic, or regulatory requirements without approved authority.'],
  handoffs:['School Administrator; Student Services; Finance; Curriculum/Academic Records.'],
  records:['Applications and admission documents.','Enrollment agreements and status records.','Transfer-credit and pre-start readiness evidence.'],
  kpis:['application processing time','application completeness','accepted-to-start conversion','pre-start documentation completion'],
  qualifications:['Experience with confidential student records and regulated enrollment processes.'],
  sourceAlignment:'Current functional role aligned to the Student Catalog’s admissions, acceptance, documentation, transfer-credit, and enrollment processes.'
 },
 contractsOps:{
  purpose:'Own the full post-business-development contract lifecycle: administration, staffing, deployment, client execution, service evidence, billing support, and renewal readiness.',
  accountabilities:['Accept qualified/won opportunity handoffs from Business Development & Sales and establish the operating file for each contract.','Translate contract/SOW requirements into staffing, schedules, site instructions, client contacts, SOP requirements, and measurable deliverables.','Staff and schedule K9 teams and operations specialists; verify required qualifications before deployment.','Maintain client coordination from enterprise security leadership through site-level points of contact and resolve scope conflicts through the approved escalation path.','Ensure handlers understand AK9I/client SOPs, professional appearance expectations, search/reporting procedures, and incident-reporting requirements.','Maintain training/certification readiness, probable-cause/supporting folders where applicable, incident reports, deployment evidence, and billing-hour support.','Coordinate proposal/RFP inputs, contract records, modifications, renewals, deliverables, and closeout.','Monitor service quality, incidents, client feedback, and renewal risk and coordinate corrective action.'],
  decisionRights:['Direct routine staffing, scheduling, deployment sequencing, and field-service execution within contract scope and approved policy.','Remove or hold a team from service for documented readiness, safety, credential, or conduct concerns and escalate as required.','Resolve routine client operational issues; material scope, pricing, legal, or contractual changes require appropriate approval.'],
  handoffs:['Receives opportunity and relationship handoff from Business Development & Sales.','Coordinates canine readiness with Canine Operations.','Coordinates HR/time/payroll/billing support with Admin & Finance.','Coordinates credential status with Regulatory/Quality and systems/reporting with Data & Systems.'],
  records:['Master contract/SOW and amendments.','Staffing, schedules, client contacts, and deployment records.','Incident/service-quality reports.','Credential/training-readiness evidence.','Billing-hour support and renewal/closeout files.'],
  kpis:['contract deliverables on time','shift coverage and on-time deployment','service-quality / incident closure','credential-ready staffing','billing evidence complete','renewal readiness / retained accounts'],
  qualifications:['Demonstrated K9 field-service operations and client-management capability.','Working knowledge of contract/SOW execution, handler qualification controls, incident reporting, scheduling, and client communications.'],
  sourceAlignment:'Jasmine Johnson alignment. Consolidates the contract-management and field-operations responsibilities historically performed together under James Overton. James retains Business Development & Sales; Jasmine owns post-award administration and execution.'
 },
 'field-team-lead':{
  purpose:'Provide first-line working supervision of deployed K9 teams and support safe, consistent client execution.',
  accountabilities:['Coordinate routine team staffing and field coverage as delegated.','Reinforce client and AK9I SOPs, site contacts, professional appearance, and reporting expectations.','Conduct immediate after-action review for significant events or service exceptions.','Monitor handler/team readiness and escalate credential, canine, safety, attendance, or conduct concerns.','Coach handlers on field execution and ensure operational information reaches the Contracts & Field Operations Lead.'],
  decisionRights:['Adjust routine staffing/search sequencing within approved scope.','Stop unsafe activity or remove a team from service for observable readiness concerns pending review.'],
  handoffs:['Reports to Contracts & Field Operations Lead; coordinates with Canine Operations and Regulatory/Quality when readiness issues arise.'],
  records:['Shift/deployment changes.','After-action and exception notes.','Readiness escalations.'],
  kpis:['coverage reliability','field exceptions','incident-report timeliness','team readiness'],
  qualifications:['Experienced operational K9 handler with demonstrated client-facing judgment and working-lead capability.'],
  sourceAlignment:'Brandon Franquez placement. Working-lead role consistent with the flattened model and the prior identification of Brandon as a field lead.'
 },
 'field-handlers':{
  purpose:'Provide professional K9 detection/security services at client locations using qualified handler-canine teams within approved scope, SOPs, and reporting requirements.',
  accountabilities:['Report to assigned locations ready for duty and comply with scheduling/check-in requirements.','Conduct searches and detection activities within client scope, AK9I SOPs, and applicable laws/credentials.','Maintain professional appearance, communications, and interaction with students, staff, clients, and the public.','Complete incident reports for significant interactions, finds, alerts, disputes, or other reportable events.','Maintain required recurrent training, team certification, probable-cause/supporting folders, and operational records.','Immediately report canine behavior/readiness changes, safety concerns, client-scope conflicts, and credential issues.'],
  decisionRights:['Stop a search or refuse deployment of an unfit team for safety/readiness reasons and request escalation.','May execute approved search tactics within assigned scope; may not expand client authority or make contractual commitments.'],
  handoffs:['K9 Team Lead / Contracts & Field Operations Lead; Canine Operations for canine readiness; Regulatory/Quality for credential concerns.'],
  records:['Training and certification records.','Incident reports.','Shift/deployment evidence.','Canine/team readiness documentation.'],
  kpis:['on-time coverage','required training / certification current','incident-report timeliness','client-service quality','avoidable service exceptions'],
  qualifications:['Required handler registration/licensing and team certifications for the jurisdiction and mission actually performed.','Demonstrated safe handling and client-service competence.'],
  sourceAlignment:'Aligned to the active K9 Handler / Detection Specialist job family. The team is represented as a multi-person workforce group rather than a single organizational seat.'
 },
 'field-ops-specialists':{
  purpose:'Provide deployment, logistics, scheduling, field-support, and project-coordination capacity to keep contracts staffed and executable.',
  accountabilities:['Support schedules, deployment plans, staffing/resource coordination, and operational logistics.','Prepare field materials, equipment, records, and event/client support as assigned.','Track open operational actions and provide status evidence.','Support K9 teams in the field within training, qualification, and delegated authority.','Assist with contract startup, special events, travel, and other operational requirements.'],
  decisionRights:['Make routine coordination decisions within approved plans and escalate conflicts, shortages, or scope changes.'],
  handoffs:['Contracts & Field Operations Lead; K9 Team Lead; Canine Operations; Admin & Finance.'],
  records:['Deployment/action trackers.','Resource and logistics records.','Assigned field-support documentation.'],
  kpis:['actions completed on time','deployment support readiness','scheduling/logistics exceptions'],
  qualifications:['Operations/project coordination capability; required K9 or field credentials for any operational duties performed.'],
  sourceAlignment:'Kyle Davis alignment. Evolved from the legacy Assistant Trainer concept into a broader Operations Specialist role that can support field operations when needed.'
 },
 'contracts-scheduling':{purpose:'Translate contract requirements into executable staffing, schedules, locations, contacts, and deployment instructions.',accountabilities:['Maintain master deployment schedules and site information.','Coordinate staffing availability, client start times, travel, and special coverage.','Document schedule changes and unresolved coverage risk.'],decisionRights:['Make routine schedule adjustments within approved staffing and contract scope.'],handoffs:['Contracts & Field Operations Lead; K9 Team Lead; Admin & Finance time/PTO workflows.'],records:['Schedules and site instructions.','Coverage exceptions and changes.'],kpis:['coverage rate','schedule accuracy','late/unfilled shifts'],qualifications:['Strong scheduling and operations-coordination capability.'],sourceAlignment:'Combines scheduling, deployment, client-coordination, and operational-handoff responsibilities formerly treated as Field Operations work.'},
 'contracts-admin':{purpose:'Maintain the controlled contract/RFP/proposal administration required to move work from opportunity through execution and modification.',accountabilities:['Maintain solicitation, proposal, contract, amendment, SOW, deliverable, and compliance files.','Coordinate proposal inputs, signatures, deadlines, and submission evidence.','Track contractual requirements and administrative exceptions.'],decisionRights:['Control completeness and routing of contract records; may not change price, scope, or legal terms without authorized approval.'],handoffs:['Business Development & Sales; Contracts & Field Operations Lead; Admin & Finance; Regulatory/Quality.'],records:['RFP/proposal files.','Contracts, amendments, deliverables, correspondence.'],kpis:['on-time submissions','contract-file completeness','open administrative exceptions'],qualifications:['Contract/proposal administration capability.'],sourceAlignment:'Combines contract administration, proposal support, records, and compliance coordination within the same function that executes the contract.'},
 'contracts-quality':{purpose:'Maintain client-service evidence, performance records, corrective actions, and renewal readiness.',accountabilities:['Track service-quality evidence, incident closure, client feedback, deliverables, and renewal milestones.','Maintain client contract records needed for performance reviews, references, and renewals.','Coordinate corrective action after service exceptions.'],decisionRights:['Require documentation and corrective-action evidence before an exception is closed.'],handoffs:['Contracts & Field Operations Lead; Business Development & Sales for renewal/advocacy opportunities; Admin & Finance for billing/records.'],records:['Service-quality log.','Client feedback and corrective actions.','Renewal/readiness file.'],kpis:['exception closure','client satisfaction','renewal readiness','record completeness'],qualifications:['Client-service and contract-record discipline.'],sourceAlignment:'Combines service-quality evidence, client records, renewal readiness, and post-award performance tracking.'},
 canineOps:{
  purpose:'Own canine intake, testing, health, readiness, placement, kennel operations, and canine asset accountability.',
  accountabilities:['Control incoming canine intake/testing and determine training/readiness path.','Oversee kennel operations, canine welfare, care standards, staffing needs, and safe handling practices.','Determine canine placement/readiness and coordinate operational availability with Contracts & Field Operations.','Maintain health, veterinary, immunization, medication, acquisition, training-path, and inventory visibility.','Set kennel/canine standards and ensure unsafe or unfit dogs are removed from work pending appropriate evaluation.','Coordinate vendor/veterinary support and requests for kennel staffing or resources.'],
  decisionRights:['Final routine operational authority over canine intake/testing, kennel care, canine placement/readiness, and removal of a dog from work for welfare/readiness concerns within approved policy.'],
  handoffs:['Contracts & Field Operations for deployment needs.','Admin & Finance for staffing/purchasing support.','Regulatory/Quality for controlled standards and record assurance.'],
  records:['Canine acquisition/intake records.','Health, medication, immunization, veterinary, and welfare records.','Readiness/placement and inventory records.','Kennel staffing and exception logs.'],
  kpis:['canine readiness','health/welfare exceptions','required records current','kennel care compliance','placement cycle time'],
  qualifications:['Extensive working-dog operations and canine-care leadership capability.'],
  sourceAlignment:'Kayla Petersen alignment. Current Operations Chief K9 responsibilities plus the broader operational accountability previously embedded in legacy kennel-supervision duties.'
 },
 'canine-kennel-lead':{
  purpose:'Lead daily kennel execution and care standards while remaining a working lead rather than an additional administrative management layer.',
  accountabilities:['Coordinate daily kennel work, cleaning/sanitation, feeding, watering, exercise, grooming, medication, and safety checks.','Assign routine kennel tasks and verify work quality.','Monitor canine health/welfare and escalate abnormalities immediately.','Maintain supplies/inventory and coordinate veterinary appointments or farm calls as assigned.','Coach kennel personnel in safe handling, sanitation, and emergency procedures.'],
  decisionRights:['Adjust routine kennel work assignments and remove a dog from work/care routine pending veterinary or Canine Operations review when a health/safety concern is observed.'],
  handoffs:['Reports to Canine Operations Lead; coordinates Facilities issues with Facilities & Grounds.'],
  records:['Daily kennel care evidence.','Medication/health exceptions.','Supply and maintenance requests.'],
  kpis:['care completion','sanitation compliance','health/safety exceptions','supply readiness'],
  qualifications:['Demonstrated kennel and working-dog care competence.'],
  sourceAlignment:'Kimberly Smith alignment. Preserves Kennel Lead as a working-lead role; legacy Kennel Supervisor duties inform the work without creating another management layer.'
 },
 'canine-care':{
  purpose:'Provide safe, humane, documented daily care for AK9I canines.',
  accountabilities:['Clean, rinse, and sanitize kennels according to SOP.','Maintain fresh water and prepare/feed prescribed diets.','Safely handle trained and untrained dogs using required leash, muzzle, warning, and loose-dog procedures.','Perform grooming, exercise, routine health checks, medication administration when authorized, and basic first aid.','Maintain feed/water equipment, kennel supplies, and assigned handling/safety equipment.','Report facility, safety, health, or canine-behavior deficiencies immediately.'],
  decisionRights:['Stop unsafe handling/care activity and escalate a canine-health or facility-safety concern.'],
  handoffs:['Kennel Lead; Canine Operations Lead; Facilities & Grounds for facility deficiencies.'],
  records:['Feeding/watering and care records.','Medication and health observations.','Safety/facility deficiency reports.'],
  kpis:['daily care completion','sanitation compliance','medication accuracy','avoidable safety/welfare exceptions'],
  qualifications:['Working-dog care and safe-handling competence; valid driver authorization when canine transport is assigned.'],
  sourceAlignment:'Derived from the legacy Animal and Kennel Caretaker job description. Represented as a multi-person workforce group.'
 },
 businessDev:{
  purpose:'Build relationships, generate qualified opportunities, convert market access into revenue, and maintain strategic customer/partner growth.',
  accountabilities:['Prospect for new clients through networking, outreach, events, referrals, and targeted account development.','Identify decision makers, understand client needs, and maintain a qualified opportunity pipeline in Salesforce.','Develop account strategies, approaches, pitches, and proposal inputs with the appropriate functional experts.','Maintain relationships with existing clients and identify new products/services or expansion opportunities.','Attend industry functions and build strategic partnerships, employer relationships, and government/commercial connections.','Track opportunity activity, next actions, conversion, and account growth.','Hand qualified/won work cleanly to Contracts & Field Operations without retaining day-to-day operational ownership.'],
  decisionRights:['Own routine relationship development and sales activity within approved pricing, brand, and contracting boundaries.','May not commit AK9I to unapproved price, scope, staffing, legal terms, or operational capability.'],
  handoffs:['Marketing for campaigns/materials; Data & Systems for Salesforce/analytics; Contracts & Field Operations for proposals and execution; CEO for strategic opportunities.'],
  records:['Salesforce opportunity/account records.','Meeting notes, next actions, proposals/inputs, relationship map.','Event and referral-source tracking.'],
  kpis:['qualified opportunities','pipeline value and stage movement','conversion / win rate','client/account growth','referral and partner opportunities','forecast accuracy'],
  qualifications:['Strong relationship development, client communication, negotiation, and K9-industry capability understanding.'],
  sourceAlignment:'James Overton alignment. Retains the business-development and sales responsibilities from the legacy combined Marketing & Business Development job description while Marketing and Contracts/Field Operations are separate accountable functions.'
 },
 marketing:{
  purpose:'Build measurable market awareness and demand while protecting the AK9I brand system and providing qualified responses to the customer pipeline.',
  accountabilities:['Own marketing strategy, campaigns, audience/channel planning, and brand execution.','Coordinate digital content, social media, video, web/landing-page assets, event materials, and approved vendors.','Apply the AK9I Brand Standards to public-facing materials and maintain approval/source-file controls.','Track campaign reach, engagement, inquiries, source attribution, and contribution to qualified pipeline.','Route qualified inquiries into Salesforce and coordinate nurture requirements with Data & Systems and Business Development.','Maintain campaign calendar, budget visibility, and asset library.'],
  decisionRights:['Execute approved campaigns within budget and brand/claims standards.','May reject noncompliant creative and require approved assets; material claims, spending, or brand changes require designated approval.'],
  handoffs:['Business Development & Sales; Data & Systems; Brand Owner/Steward; external marketing/web vendors.'],
  records:['Campaign briefs, approvals, source files, budget, channel metrics, attribution.'],
  kpis:['qualified inquiries','cost per qualified inquiry / enrollment where applicable','channel conversion','brand compliance','campaign contribution'],
  qualifications:['Marketing strategy and execution capability with strong brand-governance discipline.'],
  sourceAlignment:'Vacant/TBD internal accountable seat. Retains the marketing portion of the legacy combined Marketing & Business Development role and coordinates external vendors rather than making the vendor the internal owner.'
 },
 data:{
  purpose:'Provide the systems, data, automation, integration, reporting, and technology foundation that enables reliable management and customer-pipeline execution.',
  accountabilities:['Develop and maintain Salesforce/CRM structure, lead tracking, data quality, and reporting.','Maintain LMS/courseware technology and integrations with approved academic owners.','Develop or coordinate applications, APIs, AI-enabled workflows, and software integrations.','Build nurture-campaign infrastructure and data handoffs with Marketing/Business Development.','Produce management analytics and authoritative reports from controlled data sources.','Manage IT infrastructure/vendor relationships within assigned scope and maintain continuity/documentation.','Coordinate web/digital technical work with approved vendors while keeping company control of accounts and source assets.'],
  decisionRights:['Configure and maintain assigned systems within approved security, budget, data, and change-control boundaries.','May reject unsafe/uncontrolled integrations or data practices and escalate material system risk.'],
  handoffs:['CEO; School Administration; Marketing; Business Development; Contracts & Field Operations; Admin & Finance.'],
  records:['System inventory and access control.','Data definitions and integration documentation.','Change logs, issue logs, vendor/account ownership records.','Management dashboards and data-quality evidence.'],
  kpis:['system availability','data completeness / accuracy','integration issue resolution','report timeliness','CRM next-action / ownership completeness'],
  qualifications:['Demonstrated systems/data/automation capability appropriate to Salesforce, LMS, APIs, applications, analytics, and IT vendor management.'],
  sourceAlignment:'Chris Casora alignment. Current Director of Data Management responsibilities include app development, Salesforce, nurture campaigns, LMS/courseware, data/reporting, marketing analytics on the data side, and API/AI/software integration. Academic curriculum authority remains with School Administration.'
 },
 adminFinance:{
  purpose:'Own AK9I’s human-resources and financial operating controls while providing the administrative infrastructure that supports the rest of the company.',
  accountabilities:['Own HR administration, personnel records, onboarding/offboarding, performance-review support, corrective-action process support, staffing administration, and employee-policy workflow.','Own day-to-day finance/accounting administration, including payroll coordination, payables/receivables, bank/reconciliation support, financial reporting support, tax-compliance coordination, and financial aspects of purchasing.','Maintain separation of HR and Finance procedures/permissions even when one incumbent holds both functional hats.','Maintain scheduling/PTO administration and administrative tracking through designated systems.','Supervise Administrative Operations Support, Records & Document Control, and Facilities & Grounds.','Coordinate outsourced accounting/controller, payroll, legal, benefits, or other professional services where required.','Maintain SOP/program-document tracking and administrative compliance support.','Escalate material financial, HR, fraud/control, legal, or policy concerns to the CEO through the approved process.'],
  decisionRights:['Administer approved HR and financial procedures and controls within delegated authority.','Require supporting documentation before processing financial or HR transactions.','Route or reject transactions that exceed approval authority or lack required evidence.','May assign routine administrative work to direct reports; major staffing, compensation, policy, or financial commitments require authorized approval.'],
  handoffs:['CEO for material financial/HR decisions.','All functional leads for payroll/time, staffing, purchasing, records, and administrative support.','External accounting/controller/payroll/legal providers as assigned.'],
  records:['Personnel files, review/corrective-action evidence, onboarding/offboarding records.','Payroll, AP/AR, reconciliation, purchasing, and financial-support records.','PTO/scheduling administrative records.','Administrative compliance and vendor/professional-service files.'],
  kpis:['payroll / AP / AR timeliness','reconciliation and record accuracy','HR action cycle time','personnel-file completeness','PTO/scheduling record accuracy','open financial / HR control exceptions'],
  qualifications:['Substantial HR and finance/accounting administration capability.','Working knowledge of payroll, personnel records, corrective-action documentation, AP/AR, reconciliation, purchasing controls, and external professional-service coordination.'],
  sourceAlignment:'Peggy Stoltzfus alignment. Peggy is responsible for HR and Finance and assumes the majority of the HR/finance work historically performed or overseen by Nigel Rhodes, including payroll, accounting administration, payables/receivables, tax-compliance coordination, and financial aspects of purchasing. Remaining COO functions are separately flagged for resolution.'
 },
 'admin-hr':{
  purpose:'Administer AK9I human-resources processes and maintain complete, consistent employee records and people-management support.',
  accountabilities:['Maintain personnel files, onboarding/offboarding, status changes, policy acknowledgements, and employee records.','Coordinate performance evaluations, coaching/corrective-action documentation, attendance/PTO administration, and required HR follow-up.','Support recruiting, employee relations, benefits/payroll coordination, and required employment documentation.','Maintain confidentiality and route material HR issues through approved authority.'],
  decisionRights:['Require complete HR documentation and apply approved HR procedures consistently; material compensation, termination, policy, or legal decisions require authorized approval.'],
  handoffs:['Admin & Finance Chief; supervisors/functional leads; payroll/benefits/legal providers as assigned.'],
  records:['Personnel files.','Performance/corrective-action records.','PTO/attendance and employment-status records.'],
  kpis:['personnel-file completeness','HR cycle time','evaluation completion','attendance/PTO record accuracy'],
  qualifications:['HR administration capability and confidentiality discipline.'],
  sourceAlignment:'Peggy Stoltzfus functional hat. All HR responsibilities transfer to Peggy in the current alignment.'
 },
 'admin-finance':{
  purpose:'Administer AK9I financial transactions, accounting support, payroll coordination, reconciliations, and financial controls.',
  accountabilities:['Coordinate payroll and required supporting time/pay data.','Maintain AP/AR, invoice/payment support, bank/reconciliation evidence, and financial reporting support.','Coordinate tax-compliance and outsourced accounting/controller work.','Administer financial aspects of purchasing and require proper approval/supporting documentation.','Maintain transaction traceability and escalate anomalies or control exceptions.'],
  decisionRights:['Process properly authorized transactions and reject/hold unsupported or unauthorized financial requests.','Escalate unusual transactions, conflicts of interest, or reconciliation differences.'],
  handoffs:['CEO; functional leads; external accountant/controller/payroll provider.'],
  records:['Payroll support.','AP/AR and invoices.','Bank/reconciliation support.','Purchasing approvals and financial reports.'],
  kpis:['payroll accuracy/timeliness','AP/AR aging','reconciliation timeliness','unsupported transaction exceptions'],
  qualifications:['Finance/accounting administration capability appropriate to the assigned transactions and controls.'],
  sourceAlignment:'Peggy Stoltzfus functional hat. Absorbs the finance/accounting work historically overseen by the COO, including payroll, tax compliance, payables/receivables, and financial aspects of purchasing.'
 },
 'admin-ops-support':{
  purpose:'Provide on-site administrative execution for HR, scheduling, SOP/program tracking, records routing, and daily office support under the Admin & Finance Chief.',
  accountabilities:['Support HR administration, tracking, and routine personnel-document workflows.','Maintain schedules/PTO tracking and route approved changes.','Track SOP/program updates and administrative action items.','Provide on-site administrative support, communications, filing, supplies, and coordination as assigned.','Support document routing and follow-up without independently changing policy or making management decisions.'],
  decisionRights:['Execute assigned administrative processes; no independent authority to change policy, compensation, staffing, or financial commitments.'],
  handoffs:['Admin & Finance Chief; Records & Document Control; functional leads requesting administrative support.'],
  records:['Administrative trackers.','Scheduling/PTO support.','SOP/program update status and routine office records.'],
  kpis:['actions completed on time','schedule/PTO accuracy','administrative backlog','SOP/update tracking completeness'],
  qualifications:['Strong administrative coordination, follow-through, confidentiality, and document-management capability.'],
  sourceAlignment:'Ryan Gibbs alignment. Consolidates Administrative Assistant/support responsibilities into one role rather than showing Ryan repeatedly across multiple boxes. The legacy Administrative Assistant / House Facility Cleaner role remains retired.'
 },
 'admin-records':{
  purpose:'Own controlled administrative document and records execution under Admin & Finance, ensuring current, complete, retrievable, and properly retained records.',
  accountabilities:['Maintain controlled company documents, forms, records indexes, retention files, and revision history.','Route documents for review/approval and archive superseded versions.','Perform completeness checks and reject incomplete controlled documentation for correction.','Support audit, contract, HR, financial, academic, and compliance record retrieval without assuming the policy authority of those functions.','Maintain access, naming, storage, and disposition standards assigned to document control.'],
  decisionRights:['May reject incomplete or uncontrolled documents from final filing and require correction.','May not change the substantive policy, compliance, HR, financial, academic, or contract decision contained in a controlled record.'],
  handoffs:['Admin & Finance Chief; Regulatory/Quality; School Administration; Contracts & Field Operations; Data & Systems.'],
  records:['Controlled-document register.','Revision/approval history.','Retention/disposition records.','Audit retrieval evidence.'],
  kpis:['record completeness','retrieval time','current-version compliance','unresolved document exceptions'],
  qualifications:['Records/document-control discipline; ability to work with confidential and regulated information.'],
  sourceAlignment:'Lindsay Smith alignment. Elevates the current Document Specialist function to Records & Document Control Specialist under the Admin & Finance Chief, not under Paul.'
 },
 'admin-facilities':{
  purpose:'Maintain AK9I buildings, grounds, utilities, safety systems, equipment, and common areas in safe, functional condition.',
  accountabilities:['Respond to maintenance issues and emergencies and follow safety protocols.','Inspect and maintain electrical, mechanical, HVAC, plumbing, ventilation, refrigeration, septic, alarm, and other building systems within competence.','Perform routine repairs, locks/kennels, lighting, filters, fixtures, equipment installation, and grounds upkeep.','Inspect safety/fire systems and promptly coordinate specialist repair when required.','Support renovations and select/coordinate qualified specialists for larger maintenance projects within approved purchasing authority.','Coordinate general vehicle maintenance/repair issues through the designated administrative/purchasing process.','Maintain facilities clean, serviceable, and ready for students, staff, canines, clients, and visitors.'],
  decisionRights:['Perform routine maintenance and take immediate action to secure an unsafe area or equipment; contracting/spend above delegated limits requires approval.'],
  handoffs:['Admin & Finance Chief for budget/purchasing; Canine Operations/Kennel Lead for kennel deficiencies; School Administrator for classroom/dormitory impacts.'],
  records:['Preventive maintenance log.','Work orders and repair history.','Safety-system inspections and vendor records.'],
  kpis:['open maintenance backlog','preventive maintenance completion','safety-critical repair time','facility downtime'],
  qualifications:['Facilities maintenance competence appropriate to assigned systems; use licensed specialists where work exceeds internal qualification.'],
  sourceAlignment:'Brandon Yon alignment. Derived from the active Facilities Maintenance position and the legacy Facility Maintenance Technician job description. Facilities & Grounds is a shared service under Admin & Finance.'
 },
 cooResolution:{
  purpose:'Resolve whether AK9I retains a sharply bounded COO / enterprise-integration role after HR and Finance transfer to the Admin & Finance Chief.',
  accountabilities:['Document the COO work Nigel Rhodes actually performs after HR and Finance transfer.','Separate remaining enterprise-integration work from responsibilities already assigned to School Administration, Contracts & Field Operations, Canine Operations, Business Development, Data & Systems, and Admin & Finance.','Resolve ownership of procurement/logistics coordination and cross-functional program/project review that historically appeared in the COO scope.','Determine whether the residual work justifies a continuing COO position, a narrower enterprise-integration role, reassignment to existing functional leads, or another approved structure.'],
  decisionRights:['Status is under review; this page does not create new authority or preserve legacy authority that has been reassigned.'],
  handoffs:['CEO owns the role-resolution decision. Admin & Finance receives HR/Finance responsibilities. Other functional leads receive any residual functions explicitly reassigned to them.'],
  records:['Current-duty inventory and time allocation.','Responsibility-transfer matrix.','Final role charter or position-closure decision.'],
  kpis:['HR/Finance handoff complete','no duplicated functional ownership','residual responsibilities explicitly assigned','final role charter approved'],
  qualifications:['To be determined from the final scope.'],
  sourceAlignment:'Nigel Rhodes is currently listed as COO. The Student Catalog describes COO oversight of Accounting (payroll, tax compliance, AP/AR, financial purchasing), Logistics/Procurement, and program/project management reviews. Peggy assumes HR and Finance, which removes a substantial portion of the current practical scope. The remaining COO functions require explicit resolution rather than assumption.',
  statusNote:'Role scope under resolution — not a finalized future-state seat.'
 }
};

const FUNCTION_TEMPLATES={
 schoolAdmin:{purpose:'support compliant, consistent academic delivery and student administration',accountabilities:['complete assigned school-administration responsibilities','maintain complete academic/student evidence','coordinate required instructional and administrative handoffs'],kpis:['record completeness','cycle-time / schedule adherence','open academic or administrative exceptions']},
 contractsOps:{purpose:'support controlled contract administration and reliable field-service execution',accountabilities:['maintain assigned contract/operations records and actions','support staffing, deployment, service evidence, or client coordination as assigned','escalate scope, safety, credential, or service exceptions'],kpis:['on-time completion','record completeness','open service / contract exceptions']},
 canineOps:{purpose:'support canine health, readiness, placement, and accountable kennel operations',accountabilities:['complete assigned canine-care/readiness work','maintain required canine/asset records','escalate health, safety, staffing, or readiness issues'],kpis:['readiness / care compliance','record accuracy','health and safety exceptions']},
 businessDev:{purpose:'convert market relationships into qualified opportunities and revenue',accountabilities:['maintain purposeful outreach and follow-up','record opportunities and next actions','coordinate qualified/won handoffs'],kpis:['qualified opportunities','pipeline movement','conversion / account growth']},
 marketing:{purpose:'create measurable awareness and demand under approved AK9I brand standards',accountabilities:['execute approved marketing activities','maintain campaign/source evidence','route qualified responses into Salesforce'],kpis:['qualified inquiries','channel conversion','brand compliance / contribution']},
 data:{purpose:'provide reliable systems, data, automation, and reporting',accountabilities:['maintain assigned platforms/data','document changes and exceptions','support authoritative reporting and continuity'],kpis:['system reliability','data completeness','reporting / issue-resolution timeliness']},
 adminFinance:{purpose:'provide financial, HR, records, facilities, and administrative control',accountabilities:['execute assigned administrative/control work','maintain supporting records','escalate exceptions and complete handoffs'],kpis:['record accuracy','cycle time','open control exceptions']}
};

export function buildJobDescription(role){
 const profile=PROFILES[role.key];
 if(profile)return {...COMMON,...profile,records:profile.records||COMMON.records,qualifications:profile.qualifications||COMMON.qualifications};
 const template=FUNCTION_TEMPLATES[role.parentKey||role.key]||{};
 return {
  ...COMMON,
  purpose:`Own the ${role.title} responsibilities within ${role.parentTitle||'AK9I'} and ${template.purpose||'support reliable execution'}.`,
  accountabilities:template.accountabilities||['complete assigned responsibilities','maintain required records and evidence','coordinate required handoffs'],
  decisionRights:[COMMON.authority],
  handoffs:[role.parentTitle?`Maintain documented handoffs with the ${role.parentTitle} and cross-functional owners whose work depends on this position.`:'Maintain documented handoffs with affected functional leaders and ownership.'],
  records:COMMON.records,
  kpis:template.kpis||['on-time completion','quality / accuracy','open exceptions'],
  qualifications:COMMON.qualifications,
  sourceAlignment:'Current functional role in the AK9I operating model; final duties should be validated against actual work performed and any governing policy, contract, job description, or credential requirement.'
 };
}
