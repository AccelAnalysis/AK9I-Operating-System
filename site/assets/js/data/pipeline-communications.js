/** AK9I Salesforce communications blueprint — PLAN: strategic plan §2.2; SITE: Operating System; REC: recommendation. Stage triggers/timing may remain proposals until approved; this is not an org audit. */
export const COMMUNICATION_STAGES=[
  {
    "number": 1,
    "color": "#2E70B7",
    "student": "Awareness",
    "contract": "Awareness",
    "description": "Recognize, capture, and acknowledge incoming interest.",
    "students": [
      {
        "id": "s1-ack",
        "label": "Inquiry acknowledgment",
        "kind": "External · Email",
        "owner": "Marketing / lead-assigned owner",
        "trigger": "New student inquiry captured",
        "timing": "Immediately after inquiry",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s1-task",
        "label": "New-lead follow-up task",
        "kind": "Internal · Task",
        "owner": "Assigned Sales owner",
        "trigger": "New student lead created",
        "timing": "Due within 1 business day",
        "source": "REC",
        "suggestedTrigger": true,
        "suggestedTiming": true
      }
    ],
    "contracts": [
      {
        "id": "c1-ack",
        "label": "Contract assessment acknowledgment",
        "kind": "External · Email",
        "owner": "Business Development",
        "trigger": "Agency, venue, or contract assessment inquiry received",
        "timing": "Same business day",
        "source": "REC",
        "suggestedTrigger": true,
        "suggestedTiming": true
      },
      {
        "id": "c1-route",
        "label": "Route inquiry to BD",
        "kind": "Internal · Task",
        "owner": "Marketing → Business Development",
        "trigger": "Contract inquiry/source captured",
        "timing": "At intake",
        "source": "SITE",
        "suggestedTrigger": true,
        "suggestedTiming": true
      }
    ]
  },
  {
    "number": 2,
    "color": "#648E43",
    "student": "Consideration",
    "contract": "Consideration",
    "description": "Answer questions, demonstrate fit, and secure the next commitment.",
    "students": [
      {
        "id": "s2-reply",
        "label": "Human inquiry response",
        "kind": "External · Human follow-up",
        "owner": "Sales",
        "trigger": "Qualified student inquiry assigned to Sales",
        "timing": "Response SLA to be approved",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s2-program",
        "label": "Program and pricing guidance",
        "kind": "External · Email / conversation",
        "owner": "Sales + Student Services",
        "trigger": "Program interest and requirements identified",
        "timing": "During active consideration",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s2-funding",
        "label": "Funding and eligibility guidance",
        "kind": "External · Email / conversation",
        "owner": "Student Services / SCO",
        "trigger": "Prospect requests or needs benefit/funding guidance",
        "timing": "As needed before application",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s2-webinar",
        "label": "Career webinar confirmation & reminders",
        "kind": "External · Email",
        "owner": "Sales / webinar coordinator",
        "trigger": "Career webinar registration",
        "timing": "Upon registration; reminder schedule to approve",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s2-consult",
        "label": "Consultation reminders",
        "kind": "External · Email",
        "owner": "Sales",
        "trigger": "Student consultation booked",
        "timing": "Reminder schedule to approve",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s2-unanswered",
        "label": "Unanswered inquiry follow-up",
        "kind": "External · Email / call",
        "owner": "Sales",
        "trigger": "Prospect has not replied to the prior inquiry response",
        "timing": "Based on approved follow-up cadence",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s2-aging",
        "label": "No-reply aging alert",
        "kind": "Internal · Alert",
        "owner": "Sales owner / manager",
        "trigger": "Qualified inquiry has no response",
        "timing": "After 2 business days",
        "source": "REC",
        "suggestedTrigger": true,
        "suggestedTiming": true
      }
    ],
    "contracts": [
      {
        "id": "c2-discovery",
        "label": "Discovery recap & next steps",
        "kind": "External · Email",
        "owner": "Sales / Business Development",
        "trigger": "Discovery conversation completed",
        "timing": "Next agreed touch",
        "source": "SITE",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "c2-demo",
        "label": "Demo and scope follow-up",
        "kind": "External · Email",
        "owner": "Sales / Business Development",
        "trigger": "Capability demonstration or scope conversation completed",
        "timing": "According to buyer next step",
        "source": "SITE",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "c2-task",
        "label": "Decision and next-step task",
        "kind": "Internal · Task",
        "owner": "Sales owner",
        "trigger": "Authority, timing, criteria or next commitment identified",
        "timing": "Dated at every material touch",
        "source": "SITE",
        "suggestedTrigger": true,
        "suggestedTiming": false
      }
    ]
  },
  {
    "number": 3,
    "color": "#D69D10",
    "student": "Enrollment",
    "contract": "Commitment / Award",
    "description": "Student admission and readiness; contract award and operating handoff.",
    "students": [
      {
        "id": "s3-application",
        "label": "Application receipt",
        "kind": "External · Email",
        "owner": "Sales / Admissions",
        "trigger": "Student application submitted",
        "timing": "Upon receipt",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s3-documents",
        "label": "Missing-document reminder",
        "kind": "External · Email",
        "owner": "Student Services / Admin",
        "trigger": "Required admissions, funding, or benefit document outstanding",
        "timing": "Until resolved, per approved cadence",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s3-accept",
        "label": "Acceptance notice",
        "kind": "External · Email",
        "owner": "Student Services / Admissions",
        "trigger": "Student formally accepted",
        "timing": "On acceptance",
        "source": "PLAN",
        "suggestedTrigger": false,
        "suggestedTiming": false
      },
      {
        "id": "s3-pay",
        "label": "Payment link / fee readiness",
        "kind": "External · Email",
        "owner": "Student Services / Finance",
        "trigger": "Accepted student requires payment or funding next step",
        "timing": "On commitment milestone",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s3-welcome",
        "label": "New-student welcome",
        "kind": "External · Email",
        "owner": "Student Services",
        "trigger": "Accepted student handed off from Sales",
        "timing": "Upon acceptance",
        "source": "PLAN",
        "suggestedTrigger": false,
        "suggestedTiming": false
      },
      {
        "id": "s3-ceo",
        "label": "CEO welcome message",
        "kind": "External · Email",
        "owner": "Student Services / leadership",
        "trigger": "Accepted student preparing for assigned course",
        "timing": "In pre-start welcome sequence",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s3-instructor",
        "label": "Instructor introduction & bio",
        "kind": "External · Email",
        "owner": "Student Services / Training",
        "trigger": "Instructor and class assignment confirmed",
        "timing": "Before course start",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s3-logistics",
        "label": "Campus, dorm & equipment information",
        "kind": "External · Email",
        "owner": "Student Services / Admin",
        "trigger": "Course location, travel, dorm, or equipment plan confirmed",
        "timing": "Before course start",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s3-orientation",
        "label": "Pre-start orientation invitation",
        "kind": "External · Email",
        "owner": "Student Services / Training",
        "trigger": "Student accepted into a scheduled class",
        "timing": "Before course start",
        "source": "SITE",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s3-d30",
        "label": "30-day course countdown",
        "kind": "External · Email",
        "owner": "Student Services",
        "trigger": "Confirmed course start date is 30 days away",
        "timing": "30 days before start",
        "source": "PLAN",
        "suggestedTrigger": false,
        "suggestedTiming": false
      },
      {
        "id": "s3-d14",
        "label": "14-day course countdown",
        "kind": "External · Email",
        "owner": "Student Services",
        "trigger": "Confirmed course start date is 14 days away",
        "timing": "14 days before start",
        "source": "PLAN",
        "suggestedTrigger": false,
        "suggestedTiming": false
      },
      {
        "id": "s3-d7",
        "label": "7-day course countdown",
        "kind": "External · Email",
        "owner": "Student Services",
        "trigger": "Confirmed course start date is 7 days away",
        "timing": "7 days before start",
        "source": "PLAN",
        "suggestedTrigger": false,
        "suggestedTiming": false
      },
      {
        "id": "s3-d3",
        "label": "3-day course countdown",
        "kind": "External · Email",
        "owner": "Student Services",
        "trigger": "Confirmed course start date is 3 days away",
        "timing": "3 days before start",
        "source": "PLAN",
        "suggestedTrigger": false,
        "suggestedTiming": false
      },
      {
        "id": "s3-d1",
        "label": "1-day course countdown",
        "kind": "External · Email",
        "owner": "Student Services",
        "trigger": "Confirmed course start date is 1 day away",
        "timing": "1 day before start",
        "source": "PLAN",
        "suggestedTrigger": false,
        "suggestedTiming": false
      },
      {
        "id": "s3-confirm",
        "label": "Final start confirmation",
        "kind": "External · Email / call",
        "owner": "Student Services",
        "trigger": "All pre-start readiness requirements checked",
        "timing": "Immediately before start",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s3-red",
        "label": "At-risk student “red list” escalation",
        "kind": "Internal · Task / alert",
        "owner": "Student Services / Admin",
        "trigger": "Missing documents, unresolved funding, non-response, or possible deferral",
        "timing": "When a readiness risk is identified",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      }
    ],
    "contracts": [
      {
        "id": "c3-proposal",
        "label": "Proposal and terms follow-up",
        "kind": "External · Email",
        "owner": "Sales",
        "trigger": "Approved proposal/price issued to buyer",
        "timing": "According to decision timetable",
        "source": "SITE",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "c3-award",
        "label": "Award / agreement confirmation",
        "kind": "External · Email",
        "owner": "Sales",
        "trigger": "Buyer awards work or agreement is executed",
        "timing": "At award or execution",
        "source": "SITE",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "c3-kickoff",
        "label": "Client kickoff confirmation",
        "kind": "External · Email",
        "owner": "Contracts & Field Operations",
        "trigger": "Executed agreement with agreed kickoff logistics",
        "timing": "Before services begin",
        "source": "REC",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "c3-handoff",
        "label": "Sales → operations handoff",
        "kind": "Internal · Task / notification",
        "owner": "Sales → Contracts & Field Operations",
        "trigger": "Agreement executed and operating package complete",
        "timing": "At complete handoff",
        "source": "SITE",
        "suggestedTrigger": false,
        "suggestedTiming": false
      }
    ]
  },
  {
    "number": 4,
    "color": "#6958A6",
    "student": "Training & Experience",
    "contract": "Service Delivery",
    "description": "Manage active learning or contracted work, support, and evidence.",
    "students": [
      {
        "id": "s4-orientation",
        "label": "Day-one orientation",
        "kind": "External · Student communication",
        "owner": "Training / Student Services",
        "trigger": "Student actually begins the course",
        "timing": "Day 1",
        "source": "PLAN",
        "suggestedTrigger": false,
        "suggestedTiming": false
      },
      {
        "id": "s4-outbrief",
        "label": "Weekly instructor out-brief",
        "kind": "Internal · Instructor update",
        "owner": "Training → Student Services",
        "trigger": "Current active course/cohort",
        "timing": "Weekly",
        "source": "PLAN",
        "suggestedTrigger": false,
        "suggestedTiming": false
      },
      {
        "id": "s4-progress",
        "label": "Progress & remediation notice",
        "kind": "External · Email / conversation",
        "owner": "Training",
        "trigger": "Progress assessment or remediation need",
        "timing": "As required by instruction",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s4-support",
        "label": "Student support / grievance response",
        "kind": "External · Human follow-up",
        "owner": "Student Services",
        "trigger": "Student support request, grievance or service issue",
        "timing": "According to approved response process",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s4-grad",
        "label": "Graduation invitation",
        "kind": "External · Email",
        "owner": "Student Services / Training",
        "trigger": "Graduation ceremony planned for cohort",
        "timing": "Before final graduation activity",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s4-guests",
        "label": "Family and guest information",
        "kind": "External · Email",
        "owner": "Student Services",
        "trigger": "Graduation invitation/guest arrangements ready",
        "timing": "Before graduation",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s4-checkout",
        "label": "Certificate and housing checkout instructions",
        "kind": "External · Email",
        "owner": "Student Services / Admin",
        "trigger": "Student nears completion and planned departure",
        "timing": "Before course completion",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s4-transition",
        "label": "Completion / transition notice",
        "kind": "External · Email",
        "owner": "Training / Student Services",
        "trigger": "Course completed or documented student exit",
        "timing": "At completion or documented exit",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      }
    ],
    "contracts": [
      {
        "id": "c4-schedule",
        "label": "Service schedule / site coordination",
        "kind": "External · Client update",
        "owner": "Contracts & Field Operations",
        "trigger": "Deployment roster or site plan updated",
        "timing": "Per contract and client needs",
        "source": "SITE",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "c4-client",
        "label": "Client coordination updates",
        "kind": "External · Client communication",
        "owner": "Contracts & Field Operations",
        "trigger": "Service period underway; operational update required",
        "timing": "Per contract",
        "source": "SITE",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "c4-evidence",
        "label": "Service evidence / report",
        "kind": "External · Service record",
        "owner": "Contracts & Field Operations",
        "trigger": "Work performed or contractual deliverable reached",
        "timing": "Per contract",
        "source": "SITE",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "c4-billing",
        "label": "Billing support / hours confirmation",
        "kind": "Internal · Task / notice",
        "owner": "Field Operations → Finance",
        "trigger": "Service hours or billable milestone recorded",
        "timing": "Per invoice schedule",
        "source": "SITE",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "c4-incident",
        "label": "Incident response / notification",
        "kind": "External · Client notification",
        "owner": "Contracts & Field Operations",
        "trigger": "Reportable service incident or exception",
        "timing": "Per contract and incident protocol",
        "source": "SITE",
        "suggestedTrigger": true,
        "suggestedTiming": false
      }
    ]
  },
  {
    "number": 5,
    "color": "#168A93",
    "student": "Loyalty",
    "contract": "Loyalty",
    "description": "Verify outcomes and maintain trust after completion or service.",
    "students": [
      {
        "id": "s5-thanks",
        "label": "Graduation thank-you",
        "kind": "External · Email",
        "owner": "Student Services / Alumni",
        "trigger": "Student graduates",
        "timing": "At or after graduation",
        "source": "PLAN",
        "suggestedTrigger": false,
        "suggestedTiming": false
      },
      {
        "id": "s5-evidence",
        "label": "Outcome / employment evidence request",
        "kind": "External · Email / call",
        "owner": "Student Services / Alumni",
        "trigger": "Graduate reporting follow-up becomes due",
        "timing": "At relevant outcome milestone",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s5-d30",
        "label": "30-day graduate check-in",
        "kind": "External · Email / call",
        "owner": "Student Services / Alumni",
        "trigger": "Graduation date is 30 days past",
        "timing": "30 days after graduation",
        "source": "PLAN",
        "suggestedTrigger": false,
        "suggestedTiming": false
      },
      {
        "id": "s5-d60",
        "label": "60-day graduate check-in",
        "kind": "External · Email / call",
        "owner": "Student Services / Alumni",
        "trigger": "Graduation date is 60 days past",
        "timing": "60 days after graduation",
        "source": "PLAN",
        "suggestedTrigger": false,
        "suggestedTiming": false
      },
      {
        "id": "s5-d90",
        "label": "90-day graduate check-in",
        "kind": "External · Email / call",
        "owner": "Student Services / Alumni",
        "trigger": "Graduation date is 90 days past",
        "timing": "90 days after graduation",
        "source": "PLAN",
        "suggestedTrigger": false,
        "suggestedTiming": false
      },
      {
        "id": "s5-career",
        "label": "Career support / employer follow-up",
        "kind": "External · Email / human",
        "owner": "Student Services / BD",
        "trigger": "Graduate requests or needs career assistance",
        "timing": "According to individual need",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s5-alumni",
        "label": "Alumni network introduction",
        "kind": "External · Email",
        "owner": "Student Services / Alumni",
        "trigger": "Graduation complete and contact preference obtained",
        "timing": "At graduation transition",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s5-feedback",
        "label": "Satisfaction & service recovery",
        "kind": "External · Email / human",
        "owner": "Student Services",
        "trigger": "Feedback or unresolved student experience issue",
        "timing": "After feedback or issue identified",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      }
    ],
    "contracts": [
      {
        "id": "c5-health",
        "label": "Client satisfaction check-in",
        "kind": "External · Email / call",
        "owner": "Contracts & Field Operations",
        "trigger": "Service milestone achieved or delivery completed",
        "timing": "Within 2 weeks suggested",
        "source": "SITE",
        "suggestedTrigger": true,
        "suggestedTiming": true
      },
      {
        "id": "c5-recovery",
        "label": "Issue-resolution follow-up",
        "kind": "External · Email / call",
        "owner": "Contracts & Field Operations",
        "trigger": "Client raises issue or service quality concern",
        "timing": "Per agreed recovery plan",
        "source": "SITE",
        "suggestedTrigger": true,
        "suggestedTiming": false
      }
    ]
  },
  {
    "number": 6,
    "color": "#256F78",
    "student": "Recurring Relationships",
    "contract": "Recurring Relationships",
    "description": "Offer relevant continuing value, renewals, and expansion.",
    "students": [
      {
        "id": "s6-lms",
        "label": "Continuing education & LMS update",
        "kind": "External · Email",
        "owner": "Alumni / Student Services",
        "trigger": "Relevant approved course or LMS content available",
        "timing": "Based on interests / consent",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s6-refresher",
        "label": "Refresher training invitation",
        "kind": "External · Email",
        "owner": "Alumni / BD",
        "trigger": "Relevant refresher or workshop opportunity available",
        "timing": "Per event calendar",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s6-replenish",
        "label": "Scent-kit / replenishment offer",
        "kind": "External · Email",
        "owner": "Operations / BD",
        "trigger": "Relevant replenishment option available",
        "timing": "Per subscriber or segment preference",
        "source": "SITE",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s6-events",
        "label": "Alumni event invitation",
        "kind": "External · Email",
        "owner": "Alumni / Student Services",
        "trigger": "Alumni event scheduled",
        "timing": "Before event, with preferences",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s6-mentor",
        "label": "Mentoring opportunity",
        "kind": "External · Email",
        "owner": "Alumni / Student Services",
        "trigger": "Relevant voluntary mentor/mentee opportunity exists",
        "timing": "As appropriate",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s6-billing",
        "label": "Renewal, failed payment & cancellation notice",
        "kind": "External · Transactional notice",
        "owner": "Operations / Finance",
        "trigger": "Approved recurring purchase/subscription status changes",
        "timing": "Upon relevant billing event",
        "source": "SITE",
        "suggestedTrigger": true,
        "suggestedTiming": false
      }
    ],
    "contracts": [
      {
        "id": "c6-d90",
        "label": "Contract renewal — 90-day reminder",
        "kind": "External · Email / task",
        "owner": "Sales / Account Management",
        "trigger": "Contract end date is 90 days away",
        "timing": "90 days before end",
        "source": "REC",
        "suggestedTrigger": true,
        "suggestedTiming": true
      },
      {
        "id": "c6-d60",
        "label": "Contract renewal — 60-day reminder",
        "kind": "External · Email / task",
        "owner": "Sales / Account Management",
        "trigger": "Contract end date is 60 days away",
        "timing": "60 days before end",
        "source": "REC",
        "suggestedTrigger": true,
        "suggestedTiming": true
      },
      {
        "id": "c6-d30",
        "label": "Contract renewal — 30-day reminder",
        "kind": "External · Email / task",
        "owner": "Sales / Account Management",
        "trigger": "Contract end date is 30 days away",
        "timing": "30 days before end",
        "source": "REC",
        "suggestedTrigger": true,
        "suggestedTiming": true
      },
      {
        "id": "c6-expand",
        "label": "Account expansion follow-up",
        "kind": "External · Email / meeting",
        "owner": "Sales + Contracts & Field Operations",
        "trigger": "Client expresses interest in more sites/services",
        "timing": "During account planning",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      }
    ]
  },
  {
    "number": 7,
    "color": "#0B4C82",
    "student": "Advocacy",
    "contract": "Advocacy",
    "description": "Invite willing customers into credible, permissioned advocacy.",
    "students": [
      {
        "id": "s7-consent",
        "label": "Testimonial / photo / video permission",
        "kind": "External · Consent request",
        "owner": "Marketing / Alumni",
        "trigger": "Graduate has credible outcome and expressed willingness",
        "timing": "After opt-in / eligibility check",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s7-review",
        "label": "Review invitation",
        "kind": "External · Email",
        "owner": "Marketing / Alumni",
        "trigger": "Positive, genuine relationship; review invitation appropriate",
        "timing": "Per approved outreach cadence",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s7-referral",
        "label": "Referral invitation",
        "kind": "External · Email",
        "owner": "Marketing / BD",
        "trigger": "Alumnus volunteers interest in recommending AK9I",
        "timing": "As appropriate, never mandatory",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s7-speaker",
        "label": "Alumni speaker / mentor invitation",
        "kind": "External · Email",
        "owner": "Alumni / Marketing",
        "trigger": "Graduation, event, or mentoring opportunity needs volunteers",
        "timing": "Before scheduled opportunity",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "s7-employer",
        "label": "Employer introduction request",
        "kind": "External · Email / human",
        "owner": "BD / Alumni",
        "trigger": "Qualified alum and employer connection established",
        "timing": "As appropriate with consent",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      }
    ],
    "contracts": [
      {
        "id": "c7-reference",
        "label": "Contract reference invitation",
        "kind": "External · Email / human",
        "owner": "Marketing / BD",
        "trigger": "Client is satisfied and reference-ready",
        "timing": "After positive result; with permission",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "c7-case",
        "label": "Case-study / logo approval invitation",
        "kind": "External · Consent request",
        "owner": "Marketing / BD",
        "trigger": "Verifiable client result and permission opportunity exist",
        "timing": "Before any public reuse",
        "source": "PLAN",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "c7-peer",
        "label": "Peer introduction request",
        "kind": "External · Email / human",
        "owner": "BD / Account Management",
        "trigger": "Willing client identifies relevant peer contact",
        "timing": "After voluntary agreement",
        "source": "SITE",
        "suggestedTrigger": true,
        "suggestedTiming": false
      },
      {
        "id": "c7-joint",
        "label": "Joint outreach invitation",
        "kind": "External · Email / meeting",
        "owner": "Marketing / BD",
        "trigger": "Client voluntarily agrees to participate",
        "timing": "Per approved joint plan",
        "source": "SITE",
        "suggestedTrigger": true,
        "suggestedTiming": false
      }
    ]
  }
];
export const COMMUNICATION_RULES={
  "status": "Design blueprint only. Salesforce configuration, templates and active sends have not been verified.",
  "cap": "Check the AK9I outreach limit of two unsolicited contacts per person in any rolling 30 days before outbound outreach; distinguish required service/transactional notices and applicable consent.",
  "sms": "SMS is not live. Informational consent, marketing consent and no-text preference must be recorded before any texting is enabled.",
  "stop": "Stop or reroute stage-specific messages on withdrawal, start-date change, opt-out, actual start, graduation, owner reassignment or stage change.",
  "ownership": "Every active record needs one accountable owner, source, next action and due date."
};
