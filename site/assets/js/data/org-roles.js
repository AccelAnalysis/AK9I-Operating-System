const p=(key,title,initial='Vacant / TBD')=>({key,title,initial});
export const ORG_ROLES=[
 {key:'ceo',title:'CEO / Majority Owner',initial:'Ronald Brawner',kind:'ceo'},
 {key:'regulatory',title:'Regulatory Compliance, Quality & Credentialing Lead',initial:'Paul Roushia',kind:'regulatory'},
 {key:'schoolAdmin',title:'School Administrator',initial:'Vacant / TBD',color:'#2D6280',children:[
   p('school-training','Training & Instruction','Stephane Hubert'),p('school-student-services','Student Services','Michelle Hartman'),p('school-curriculum-records','Curriculum & Academic Records'),p('school-admissions','Admissions / Registrar'),p('school-credentialing-admin','Credentialing & Certification Administration')]},
 {key:'fieldOps',title:'Field Operations Lead',initial:'Vacant / TBD',color:'#3A7754',children:[
   p('field-team-leads','K9 Team Leads'),p('field-handlers','Handlers / K9 Detection Specialists'),p('field-ops-specialists','Operations Specialists','Kyle Davis'),p('field-scheduling','Scheduling & Deployment Coordination'),p('field-quality','Service Quality & Reporting')]},
 {key:'canineOps',title:'Canine Operations Lead',initial:'Kayla Petersen',color:'#6958A6',children:[
   p('canine-kennel-lead','Kennel Leadership','Kimberly Smith'),p('canine-care','Canine Care & Kennel Personnel'),p('canine-intake','Dog Intake, Testing & Evaluation'),p('canine-placement','Canine Placement & Readiness'),p('canine-inventory','K9 Inventory & Asset Management')]},
 {key:'businessDev',title:'Business Development & Sales Director',initial:'James Overton',color:'#168A93',children:[
   p('bd-development','Business Development'),p('bd-sales','Sales & Account Management'),p('bd-market','Market & Opportunity Analysis'),p('bd-partnerships','Partnerships & Strategic Outreach'),p('bd-client-growth','Client Relationship Growth')]},
 {key:'marketing',title:'Marketing Manager',initial:'Vacant / TBD',color:'#C87513',children:[
   p('marketing-brand','Marketing Strategy & Brand Management'),p('marketing-digital','Digital Marketing & Content'),p('marketing-leads','Lead Generation & Campaigns'),p('marketing-social','Social Media & Community Engagement'),p('marketing-analytics','Marketing Analytics')]},
 {key:'contracts',title:'Contracts Lead',initial:'Jasmine Johnson',color:'#B88713',children:[
   p('contracts-admin','Contract Administration & Compliance'),p('contracts-rfp','RFP / Proposal Coordination'),p('contracts-records','Client Contract Records'),p('contracts-renewals','Renewals & Deliverables'),p('contracts-handoffs','Cross-Functional Contract Handoffs')]},
 {key:'data',title:'Director of Data & Systems',initial:'Chris Casora',color:'#3478A0',children:[
   p('data-salesforce','Salesforce / CRM Management'),p('data-lms','LMS & Courseware Management'),p('data-integrations','Applications, Integrations & API'),p('data-analytics','Data Analytics & Reporting'),p('data-it','IT Infrastructure & Vendor Management')]},
 {key:'adminFinance',title:'Admin & Finance Chief',initial:'Peggy Stoltzfus',color:'#2E7256',children:[
   p('admin-finance','Finance & Accounting'),p('admin-hr','HR Administration & People Support'),p('admin-scheduling','Scheduling & PTO Tracking','Ryan Gibbs'),p('admin-sop','SOP & Program Documentation','Ryan Gibbs'),p('admin-compliance','Administrative Compliance')]}
];
export function getAllOrgPositions(){const all=[];for(const r of ORG_ROLES){all.push({...r,level:['ceo','regulatory'].includes(r.key)?'top':'lead'});for(const c of r.children||[])all.push({...c,parentKey:r.key,parentTitle:r.title,color:r.color,level:'position'});}return all;}
export function findOrgPosition(key){return getAllOrgPositions().find(r=>r.key===key)||null;}
