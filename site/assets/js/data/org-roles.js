const p=(key,title,initial='Vacant / TBD')=>({key,title,initial});
const g=(key,title,initial=[])=>({key,title,initial,multiple:true});

const CURRENT_HANDLER_TEAM=[
 'Thomas Talmade','Jeff Dobert','Merrick Overton','Matthew Donegan-Cheney','Matthew Hammer',
 'Sydney Williams','Savannah Barnes','John Tucker','Morgan Anderson','Abbie Hendry',
 'Tobias Wilkie','Traci Faller','Javon Gray','Bashir Roland'
];

export const ORG_ROLES=[
 {key:'ceo',title:'CEO / Majority Owner',initial:'Ronald Brawner',kind:'ceo'},
 {key:'regulatory',title:'Regulatory Compliance, Quality & Credentialing Lead',initial:'Paul Roushia',kind:'regulatory'},
 {key:'schoolAdmin',title:'School Administrator',initial:'Tim Baird',color:'#2D6280',children:[
   p('school-training-lead','Training & Instruction Lead','Kenneth Gregory'),
   g('school-instructor-team','Instructor / Trainer Team',['Stephane Hubert','Jerad Poor']),
   p('school-student-services','Student Services','Michelle Hartman'),
   p('school-curriculum-records','Curriculum & Academic Records'),
   p('school-admissions','Admissions / Registrar')
 ]},
 {key:'contractsOps',title:'Contracts & Field Operations Lead',initial:'Jasmine Johnson',color:'#3A7754',children:[
   p('field-team-lead','K9 Team Lead','Brandon Franquez'),
   g('field-handlers','K9 Detection Specialists / Handlers',CURRENT_HANDLER_TEAM),
   g('field-ops-specialists','Operations Specialists',['Kyle Davis']),
   p('contracts-scheduling','Scheduling & Deployment Coordination'),
   p('contracts-admin','Contract Administration, Proposals & Compliance'),
   p('contracts-quality','Client Records, Service Quality & Renewals')
 ]},
 {key:'canineOps',title:'Canine Operations Lead',initial:'Kayla Petersen',color:'#6958A6',children:[
   p('canine-kennel-lead','Kennel Lead','Kimberly Smith'),
   g('canine-care','Canine Care & Kennel Personnel',[]),
   p('canine-intake','Dog Intake, Testing & Evaluation','Kayla Petersen'),
   p('canine-placement','Canine Placement & Readiness','Kayla Petersen'),
   p('canine-inventory','K9 Inventory & Asset Management')
 ]},
 {key:'businessDev',title:'Business Development & Sales Director',initial:'James Overton',color:'#168A93',children:[
   p('bd-development','Business Development','James Overton'),
   p('bd-sales','Sales & Account Management','James Overton'),
   p('bd-market','Market & Opportunity Analysis','James Overton'),
   p('bd-partnerships','Partnerships & Strategic Outreach','James Overton'),
   p('bd-client-growth','Client Relationship Growth','James Overton')
 ]},
 {key:'marketing',title:'Marketing Manager',initial:'Vacant / TBD',color:'#C87513',children:[
   p('marketing-brand','Marketing Strategy & Brand Management'),
   p('marketing-digital','Digital Marketing & Content'),
   p('marketing-leads','Lead Generation & Campaigns'),
   p('marketing-social','Social Media & Community Engagement'),
   p('marketing-analytics','Marketing Analytics')
 ]},
 {key:'data',title:'Director of Data & Systems',initial:'Chris Casora',color:'#3478A0',children:[
   p('data-salesforce','Salesforce / CRM Management','Chris Casora'),
   p('data-lms','LMS & Courseware Management','Chris Casora'),
   p('data-integrations','Applications, Integrations & API','Chris Casora'),
   p('data-analytics','Data Analytics & Reporting','Chris Casora'),
   p('data-it','IT Infrastructure & Vendor Management','Chris Casora')
 ]},
 {key:'adminFinance',title:'Admin & Finance Chief',initial:'Peggy Stoltzfus',color:'#2E7256',children:[
   p('admin-hr','Human Resources','Peggy Stoltzfus'),
   p('admin-finance','Finance & Accounting','Peggy Stoltzfus'),
   p('admin-ops-support','Administrative Operations Support','Ryan Gibbs'),
   p('admin-records','Records & Document Control Specialist','Lindsay Smith'),
   p('admin-facilities','Facilities & Grounds','Brandon Yon')
 ]}
];

export const ORG_RESOLUTIONS=[
 {key:'cooResolution',title:'COO / Enterprise Integration — Scope Under Resolution',initial:'Nigel Rhodes',kind:'resolution',roleStatus:'under-review'}
];

export function getAllOrgPositions(){
 const all=[];
 for(const r of ORG_ROLES){
   all.push({...r,level:['ceo','regulatory'].includes(r.key)?'top':'lead'});
   for(const c of r.children||[])all.push({...c,parentKey:r.key,parentTitle:r.title,color:r.color,level:'position'});
 }
 for(const r of ORG_RESOLUTIONS)all.push({...r,level:'resolution'});
 return all;
}
export function findOrgPosition(key){const aliases={fieldOps:'contractsOps',contracts:'contractsOps','school-training':'school-training-lead','admin-scheduling':'admin-ops-support','admin-sop':'admin-ops-support'};return getAllOrgPositions().find(r=>r.key===(aliases[key]||key))||null;}
