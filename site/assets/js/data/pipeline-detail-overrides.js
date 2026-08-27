function detail(details,id){return details.find(d=>d.id===id)}
function addBullet(column,text){if(column&&!column.bullets.includes(text))column.bullets.push(text)}
export function applyPipelineDetailOverrides(details){
 const loyaltyPilot=detail(details,'d15a');
 if(loyaltyPilot){
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
  continuing.columns[0].bullets=[
   'Recurring webinars, continuing education, LMS access, and scheduled professional updates.',
   'Refresher training, workshops, recertification-related services where appropriate, gear, food, scent kits, and other replenishment.',
   'Alumni events, networking, mentorship, employment opportunity, and professional recognition.'
  ];
  addBullet(continuing.columns[1],'Use webinar attendance, LMS activity, outcomes, purchases, and stated interests to determine the next relevant offer.');
 }
 const recurring=detail(details,'d15c');
 if(recurring){
  recurring.columns[0].bullets=[
   'Enrollment, payment authorization, billing, fulfillment, shipment/status, webinar/LMS access, reminders, customer service, failed payments, cancellation, and renewal.',
   'Define owners and source systems for both physical subscriptions and recurring education.',
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
