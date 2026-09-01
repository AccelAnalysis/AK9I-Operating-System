const p=(key,title,initial='Vacant / TBD',options={})=>({key,title,initial,...options});
const g=(key,title,initial=[],options={})=>({key,title,initial,multiple:true,...options});

const CURRENT_HANDLER_TEAM=[
 'Matthew Donegan-Cheney','Thomas Talmade','Jeff Dobert','Merrick Overton','Matthew Hammer',
 'Sydney Williams','Savannah Barnes','John Tucker','Morgan Anderson','Abbie Hendry',
 'Tobias Wilkie','Traci Faller','Javon Gray','Bashir Roland'
];

export const ORG_ROLES=[
 {key:'ceo',title:'CEO / Majority Owner',initial:'Ronald Brawner',kind:'ceo'},
 {key:'regulatory',title:'Regulatory Compliance, Quality & Credentialing Lead',initial:'Paul Roushia',kind:'regulatory'},
 {
  key:'schoolAdmin',title:'School Administrator',initial:'Tim Baird',color:'#2D6280',
  chartNote:'Academy authority',
  children:[
   p('school-training-lead','Training & Instruction Lead','Kenneth Gregory',{children:[
    g('school-instructor-team','Instructor / Trainer Team',['Stephane Hubert','Jerad Poor'])
   ]}),
   p('school-student-services','Student Services','Michelle Hartman')
  ]
 },
 {
  key:'contractsOps',title:'Contracts & Field Operations Lead',initial:'Jasmine Johnson',color:'#3A7754',
  chartNote:'Post-award contract execution',
  children:[
   p('field-team-lead','K9 Team Lead','Brandon Franquez',{children:[
    g('field-handlers','K9 Detection Specialists / Handlers',CURRENT_HANDLER_TEAM)
   ]})
  ]
 },
 {
  key:'canineOps',title:'Canine Operations Lead',initial:'Kayla Petersen',color:'#6958A6',
  chartNote:'Canine readiness and home-line supervision',
  children:[
   p('canine-kennel-lead','Kennel Lead','Kimberly Smith',{children:[
    g('canine-care','Canine Care / Kennel Personnel',[])
   ]}),
   g('field-ops-specialists','Operations Specialist Pool',['Kyle Davis'],{
    coordinationFrom:'contractsOps',
    coordinationLabel:'Dotted tasking relationship: contract deployments are coordinated by {coordinator}.'
   })
  ]
 },
 {
  key:'businessDev',title:'Business Development',initial:'James Overton',color:'#168A93',
  chartNote:'Relationships and qualified opportunity creation'
 },
 {
  key:'sales',title:'Sales',initial:'James Overton',color:'#B88713',
  status:'Interim functional owner — no sales team yet',
  chartNote:'Conversion begins at Consideration'
 },
 {
  key:'marketing',title:'Marketing — Contracted Execution',initial:'Jillian / Approved Partner Vendors',color:'#C87513',
  editable:false,contracted:true,
  status:'Interim vendor & performance manager: James Overton',
  chartNote:'Strategy, content and campaigns executed by approved contractors'
 },
 {
  key:'data',title:'Director of Data & Systems',initial:'Chris Casora',color:'#3478A0',
  chartNote:'Systems, data, automation and reporting'
 },
 {
  key:'adminFinance',title:'Admin & Finance Chief',initial:'Peggy Stoltzfus',color:'#2E7256',
  chartNote:'HR, finance and administrative control',
  children:[
   p('admin-ops-support','Administrative Operations Support','Ryan Gibbs'),
   p('admin-records','Records & Document Control Specialist','Lindsay Smith'),
   p('admin-facilities','Facilities & Grounds','Brandon Yon')
  ]
 }
];

export const ORG_RESOLUTIONS=[
 {key:'cooResolution',title:'COO / Enterprise Integration',initial:'Nigel Rhodes',kind:'resolution',roleStatus:'under-review'}
];

function collectRole(role,all,parent=null,depth=0){
 const level=['ceo','regulatory'].includes(role.key)?'top':parent?(role.multiple?'team':'position'):'lead';
 const copy={...role,level,depth};
 if(parent){copy.parentKey=parent.key;copy.parentTitle=parent.title;copy.color=role.color||parent.color;}
 all.push(copy);
 for(const child of role.children||[])collectRole(child,all,copy,depth+1);
}

export function getAllOrgPositions(){
 const all=[];
 for(const role of ORG_ROLES)collectRole(role,all);
 for(const role of ORG_RESOLUTIONS)all.push({...role,level:'resolution',depth:0});
 return all;
}

export function findOrgPosition(key){
 const aliases={
  fieldOps:'contractsOps',contracts:'contractsOps','school-training':'school-training-lead',
  'admin-scheduling':'admin-ops-support','admin-sop':'admin-ops-support',
  'bd-sales':'sales','marketing-brand':'marketing'
 };
 return getAllOrgPositions().find(role=>role.key===(aliases[key]||key))||null;
}
