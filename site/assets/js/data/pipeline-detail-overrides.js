function detail(details,id){return details.find(d=>d.id===id)}
function addBullet(column,text){if(column&&!column.bullets.includes(text))column.bullets.push(text)}
export function applyPipelineDetailOverrides(details){
 const loyaltyPilot=detail(details,'d15a');
 if(loyaltyPilot){
  loyaltyPilot.origin='s16';
  loyaltyPilot.code='3.6A';
  loyaltyPilot.title='Pilot Recurring Replenishment Offers';
  loyaltyPilot.columns[0].title='Customer promise';
  loyaltyPilot.columns[0].bullets=[
   'Begin with recurring scent kits, then test other appropriate replenishment offers such as dog-food shipments and approved consumables.',
   'Define product, cadence, eligibility, price, delivery standard, use case, cancellation, and support expectations.',
   'Connect recurring enrollment to continued K9 readiness and customer convenience rather than a one-time merchandise transaction.'
  ];
  loyaltyPilot.columns[1].bullets=[
   'Start with a bounded customer group, limited catalog, and defined service level.',
   'Measure demand, margin, inventory, fulfillment, support, failed payments, and retention.',
   'Document the operating cycle before adding more subscriptions or customer segments.'
  ];
 }
 const continuing=detail(details,'d15b');
 if(continuing){
  continuing.origin='s15';
  continuing.code='3.5';
  continuing.title='Manage Outcomes and Relationship Health';
  continuing.columns[0].title='Loyalty evidence';
  continuing.columns[0].bullets=[
   'Track verified graduate outcomes and placement, employer feedback, contract-client results, satisfaction, issue resolution, trust, and relationship health as evidence of value created.',
   'Treat outcomes as one component of Loyalty rather than a standalone lifecycle stage.',
   'Use alumni and client check-ins to understand whether the relationship is strong enough to continue, renew, expand, or eventually become advocacy.'
  ];
  addBullet(continuing.columns[1],'Use outcomes, client results, satisfaction, service history, and stated interests to determine the next relevant relationship action.');
  continuing.columns[2].title='Measures';
  continuing.columns[2].bullets=[
   'Verified graduate outcomes, placement/advancement, employer feedback, client results, satisfaction, and relationship health.',
   'Issue resolution, retention intent, trust, and readiness for continuing engagement.',
   'Progression from Loyalty into Recurring Relationships and, later, Advocacy.'
  ];
  continuing.next='d16a';
 }
 const outcomeTrack=detail(details,'d16a'),employers=detail(details,'d16b'),outcomeEvidence=detail(details,'d16c');
 if(outcomeTrack){outcomeTrack.origin='s15';outcomeTrack.prev='d15b';outcomeTrack.next='d16b';outcomeTrack.code='3.5A'}
 if(employers){employers.origin='s15';employers.prev='d16a';employers.next='d16c';employers.code='3.5B'}
 if(outcomeEvidence){outcomeEvidence.origin='s15';outcomeEvidence.prev='d16b';outcomeEvidence.code='3.5C'}
 if(!detail(details,'d16r'))details.push({
  id:'d16r',origin:'s16',code:'3.6B',title:'Expand the Continuing AK9I Relationship',
  columns:[
   {title:'Continuing value',bullets:['Recurring webinars, continuing education, LMS access, refreshers, workshops, recertification-related services where appropriate, and professional updates.','Alumni networking, mentorship, employment opportunity, events, and recognition where they create real customer value.','For contract clients, use renewal planning, new-capability updates, additional sites/services, and appropriate account expansion.']},
   {title:'Segment the relationship',bullets:['Use program, career stage, employer/client type, geography, certification needs, prior purchases, service history, and stated interests.','Offer the next relevant service rather than generic mass communication.','Keep recurring relationship activity distinct from public advocacy; a customer can continue buying or engaging without being an advocate.']},
   {title:'Measures',bullets:['Renewal, repeat purchase, continuing-education participation, recurring revenue, and service expansion.','Participation, engagement, retention, and lifetime value by cohort or customer segment.','Movement from Loyalty into recurring engagement and from recurring engagement into Advocacy.']}
  ]
 });
 const recurring=detail(details,'d15c');
 if(recurring){
  recurring.origin='s16';
  recurring.code='3.6C';
  recurring.columns[0].bullets=[
   'Enrollment, payment authorization, billing, fulfillment, shipment/status, webinar/LMS access, reminders, customer service, failed payments, cancellation, and renewal.',
   'Define owners and source systems for both physical subscriptions and recurring education or services.',
   'Use standard communications, exception handling, and escalation.'
  ];
 }
 const admission=detail(details,'d18a');
 if(admission)addBullet(admission.columns[0],'Sales owns the Consideration-to-Commitment path until an accepted student is handed to School Administration and Student Services.');
 const prestart=detail(details,'d18c');
 if(prestart){
  prestart.columns[0].bullets=[
   'Funding, documents, housing, travel, equipment, schedule, expectations, and first-day readiness.',
   'Use the webinar platform for pre-start orientation: what to expect, what to bring, Student Handbook overview, rules of engagement, key contacts, and next actions.',
   'Use a countdown sequence, named contact, and readiness checklist; confirm critical milestones before the start date.'
  ];
  addBullet(prestart.columns[2],'Webinar registration, attendance, orientation completion, questions resolved, and readiness checklist completion.');
 }
 const guided=detail(details,'d19b');
 if(guided)addBullet(guided.columns[0],'Sales is the primary functional owner once a qualified prospect reaches active Consideration; Business Development remains involved where relationship continuity matters.');
 const nurture=detail(details,'d19c');
 if(nurture)addBullet(nurture.columns[0],'Sales owns active Consideration records; Marketing and Business Development remain authoritative sources, not substitute owners.');
 const awareness=detail(details,'d20b');
 if(awareness)addBullet(awareness.columns[1],'Marketing owns contracted campaign execution and source capture; Business Development owns targeted relationships and strategic outreach.');
}
