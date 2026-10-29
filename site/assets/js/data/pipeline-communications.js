/** AK9I Salesforce communications map. Status: Live = running in production; Sandbox = built and being tested in the Salesforce sandbox; Paused = built but turned off, waiting on an approval; Planned = not built yet. Email wording is copied word for word from Salesforce (seven-stage pipeline document, Oct 27, 2026); "Wording not yet written" marks copy that does not exist yet. */
export const COMMUNICATION_STAGES=[
  {
    "number": 1,
    "color": "#2E70B7",
    "student": "Awareness",
    "contract": "Awareness",
    "description": "Recognize, capture, and acknowledge incoming interest.",
    "entry": {
      "students": "A new Lead is created from any channel (website, Contact Us, social, job fair, trade show, referral, SkillBridge and others), with Lead Status New or Contacted.",
      "contracts": "An agency, venue, or contract assessment inquiry is received."
    },
    "students": [
      {
        "id": "s1-ack",
        "label": "Inquiry acknowledgment",
        "kind": "External · Email",
        "owner": "Marketing / lead-assigned owner",
        "trigger": "New student Lead created by someone who reached out themselves (website, Contact Us, outreach form); never imports or job-fair lists",
        "timing": "Immediately after inquiry",
        "source": "PLAN",
        "status": "Live",
        "emails": [
          {
            "from": "enrollment@ak9i.com",
            "to": "The lead",
            "subject": "Thanks for reaching out to American K-9 Interdiction",
            "body": "Hi {!Lead.FirstName},\n\nThank you for reaching out to American K-9 Interdiction. We received your inquiry, and a member of our team will be in touch with you soon.\n\nIf you would like to talk sooner, you can choose a time that works for you here:\nhttps://calendar.google.com/calendar/appointments/schedules/AcZssZ0YWLdKtae6gOxFoS4Aqk6RKrIAiHbc-8c18BmhGocY2ZTi0K21ssIlDsmn8Zd21cfYgT2aanFF\n\nWhen you are ready to get started, you can begin your enrollment form at any time:\nhttps://enrollmentform.ak9i.edu\n\nQuestions in the meantime? Email us at contact@ak9i.com or call (757) 304-9600.\n\nBest regards,\nThe AK9I Team\nAmerican K-9 Interdiction, LLC\ncontact@ak9i.com | (757) 304-9600\n\nYou are receiving this email because you contacted American K-9 Interdiction. To stop receiving these emails, reply with \"Unsubscribe\" and we will remove you from our list.\nAmerican K-9 Interdiction, LLC, 4007 Burdette Rd, Carrsville, VA 23315",
            "note": "Live in production since Oct 27, 2026, 11:41 AM ET (template AK9I_S1_Inquiry_Ack). The 14-day Nurture hold after this acknowledgment is live in production since Oct 27, 2026. The outreach-form field fix is drafted for Mashup Media and waiting to be posted."
          }
        ]
      },
      {
        "id": "s1-task",
        "label": "New-lead follow-up task",
        "kind": "Internal · Task",
        "owner": "The lead's owner",
        "trigger": "Every new student Lead created, including imports",
        "timing": "Due within 1 business day",
        "source": "REC",
        "status": "Live"
      }
    ],
    "contracts": [
      {
        "id": "c1-ack",
        "label": "Contract assessment acknowledgment",
        "kind": "External · Email",
        "owner": "Business Development (Chris Casora)",
        "trigger": "Agency, venue, or contract assessment inquiry received",
        "timing": "Same business day",
        "source": "REC",
        "status": "Live",
        "emails": [
          {
            "from": "contact@ak9i.com",
            "to": "The inquirer",
            "subject": "We received your inquiry - American K-9 Interdiction",
            "body": "Hi {!Lead.FirstName},\n\nThank you for contacting American K-9 Interdiction about K9 services for your agency or organization. We received your inquiry and have passed it to our Business Development team, who will contact you to discuss your needs and next steps.\n\nIf you would like to reach us sooner, call (757) 304-9600 or email contact@ak9i.com.\n\nBest regards,\nThe AK9I Team\nAmerican K-9 Interdiction, LLC\ncontact@ak9i.com | (757) 304-9600\n\nYou are receiving this email because you contacted American K-9 Interdiction. To stop receiving these emails, reply with \"Unsubscribe\" and we will remove you from our list.\nAmerican K-9 Interdiction, LLC, 4007 Burdette Rd, Carrsville, VA 23315",
            "note": "Live in production since Oct 27, 2026, 11:41 AM ET (template AK9I_C1_Contract_Ack). The inquiry is routed to Chris Casora (BD)."
          }
        ]
      },
      {
        "id": "c1-route",
        "label": "Route inquiry to BD",
        "kind": "Internal · Task",
        "owner": "Marketing → Business Development (Chris Casora)",
        "trigger": "Contract inquiry/source captured",
        "timing": "At intake; follow-up task due within 1 business day",
        "source": "SITE",
        "status": "Live"
      }
    ]
  },
  {
    "number": 2,
    "color": "#648E43",
    "student": "Consideration",
    "contract": "Consideration",
    "description": "Answer questions, demonstrate fit, and secure the next commitment.",
    "entry": {
      "students": "Lead Status changes to Nurture, to Interested – Future (start more than 3 months away), or to Applicant (page 1 of the enrollment form saved but the application not submitted).",
      "contracts": "Business Development takes the routed inquiry and opens a discovery conversation with the buyer."
    },
    "students": [
      {
        "id": "s2-resume",
        "label": "Continue your application",
        "kind": "External · Email",
        "owner": "Admissions (Michelle Hartman)",
        "trigger": "Page 1 of the enrollment form is saved and the application is still not submitted 4 hours later",
        "timing": "4 hours after page 1 is saved; skipped if the application is submitted first",
        "source": "BUILD",
        "status": "Live",
        "emails": [
          {
            "from": "enrollment@ak9i.com",
            "to": "The applicant (email typed on the form), with a secure resume link valid 14 days",
            "subject": "Continue your AK9I enrollment application",
            "body": "Hello {firstName},\n\nWe saved your progress on the AK9I enrollment application.\n\nUse this secure link to continue where you left off (expires in 14 days):\n{resume link}\n\nIf you did not start an application, you can ignore this email.\n\nAK9I Admissions\nenrollment@ak9i.com\n(757) 304-9600"
          }
        ]
      },
      {
        "id": "s2-nurture0",
        "label": "Nurture welcome (by lead source) + call task",
        "kind": "External · Email + internal task",
        "owner": "Admissions / lead owner",
        "trigger": "Lead Status changes to Nurture",
        "timing": "Day 0",
        "source": "BUILD",
        "status": "Live",
        "statusNote": "Live in production since Oct 27, 2026 (flow AK9I Consideration Series, version 1). The day 0 email is held for 14 days after an Awareness acknowledgment; that hold is live.",
        "emails": [
          {
            "name": "Nurture welcome email",
            "from": "enrollment@ak9i.com",
            "to": "The lead",
            "subject": "Which AK9I course fits your goals?",
            "body": "Hi {!Lead.FirstName},\n\nWe're glad you found us through one of our ads. Our team can help you review upcoming start dates for the course you're considering.\n\nTo point you in the right direction: what kind of K9 work interests you most, or which course are you considering? You can see our courses here:\nhttps://ak9i.edu/courses/\n\nJust reply to this email with your answer, or call us at (757) 304-9600.\n\nBest regards,\nThe AK9I Team\nAmerican K-9 Interdiction\nenrollment@ak9i.com | (757) 304-9600\n\nYou are receiving this email because you expressed interest in American K-9 Interdiction. To stop receiving these emails, reply with \"Unsubscribe\" and we will remove you from our list.\nAmerican K-9 Interdiction, 4007 Burdette Rd, Carrsville, VA 23315",
            "note": "Opening sentence changes with the Lead Source (14 versions); the Advertisement version is shown."
          },
          {
            "name": "Task to the lead owner (due tomorrow, high priority)",
            "to": "The Lead owner",
            "subject": "Call Nurture lead - obtain email consent",
            "body": "Nurture 0 email sent (F0 allowed). Call this lead and obtain clear consent before further follow-up emails; record it in AK9I Consent Status.",
            "type": "task"
          },
          {
            "name": "Internal email to the enrollment inbox",
            "from": "Salesforce (internal)",
            "to": "Enrollment inbox (enrollment@ak9i.com)",
            "subject": "New Nurture lead to call: {!$Record.FirstName} {!$Record.LastName}",
            "body": "A new Nurture lead was just sent the Nurture 0 email (allowed by F0). Please call this lead.\n\nName: {!$Record.FirstName} {!$Record.LastName}\nPhone: {!$Record.Phone}\nMobile: {!$Record.MobilePhone}\nEmail: {!$Record.Email}\nLead Source: {!$Record.LeadSource}\nStatus: {!$Record.Status}\nRecord: {!fRecordLink}\n\nOn the call, get the lead's clear consent before any further follow-up emails, and record it in AK9I Consent Status."
          }
        ]
      },
      {
        "id": "s2-nurture",
        "label": "Nurture series (Emails 1–12)",
        "kind": "External · Email",
        "owner": "Admissions",
        "trigger": "Lead Status is still Nurture; each email re-checks status, opt-out and the 2-per-30-days limit before sending",
        "timing": "Days 16, 32, 48, 64, 80, 96, 112, 130, 180, 200, 250 and 275 after Nurture starts",
        "source": "BUILD",
        "status": "Paused",
        "statusNote": "Built, but off in production: the Nurture Email Scheduler flow is not active, so Emails 1–12 are not sending. Turning it on needs Jonathan's approval.",
        "emails": [
          {
            "name": "Nurture Email 1 · day 16",
            "from": "enrollment@ak9i.com",
            "to": "The lead",
            "subject": "Still Thinking About Enrolling?",
            "body": "Hi {{{Recipient.FirstName}}},\n\nWe noticed that you recently showed interest in American K-9 Interdiction - but haven't taken the next step. At American K-9 Interdiction, our mission is to help you turn your passion for dogs into a rewarding career.\n\nHere are a few reasons students choose us:\n- Hands-on training with working dogs (not just classroom theory)\n- Exposure to real-world K-9 operations prior to graduation\n- We are nationally accredited through ACCET and SCHEV as a trade school\n- Over 150 acres of dedicated onsite training space as well as a plethora of offsite training locations\n- Onsite housing\n\nOur next class is starting soon - don't miss your spot!\n\nEnroll Now [https://enrollmentform.ak9i.edu/]\n\nSincerely,\n\nThe AK9I Team\nAmerican K-9 Interdiction, LLC\n4007 Burdette Rd.\nCarrsville, VA, 23315\np: 757-304-9600\nf: 757-304-9678\n\nThis message was sent to you because you have expressed interest in our company AK9I.\nTo stop receiving further emails, please reply with \"Unsubscribe\" and we will remove you from our list.",
            "note": "Links fixed in the production templates Oct 27, 2026: Enroll Now and the enrollment form links go to enrollmentform.ak9i.edu, Schedule a call goes to the Google appointment page, and Emails 4 and 10 now say programs start on Mondays throughout the year."
          },
          {
            "name": "Nurture Email 2 · day 32",
            "from": "enrollment@ak9i.com",
            "to": "The lead",
            "subject": "What questions can we answer for you?",
            "body": "Hi {{{Recipient.FirstName}}},\n\nWe understand enrolling in a K9 training program is a big decision. We are here to answer your questions about tuition, housing, career paths, or daily life on campus.\n\nFeel free to call us anytime: 757-304-9600\n\nSincerely,\n\nThe AK9I Team\nAmerican K-9 Interdiction, LLC\n4007 Burdette Rd.\nCarrsville, VA, 23315\np: 757-304-9600\nf: 757-304-9678\n\nThis message was sent to you because you have expressed interest in our company AK9I.\nTo stop receiving further emails, please reply with \"Unsubscribe\" and we will remove you from our list."
          },
          {
            "name": "Nurture Email 3 · day 48",
            "from": "enrollment@ak9i.com",
            "to": "The lead",
            "subject": "Enroll now to begin your journey with our next class",
            "body": "Hi {{{Recipient.FirstName}}},\n\nOur next start date is right around the corner! Secure your spot before registration closes and take the first step toward a fulfilling career working with canines.\n\nIf you're ready, our team can walk you through the quick enrollment process and help you finalize your paperwork.\n\nStart your application today by clicking the button:\n\nEnroll Now [https://enrollmentform.ak9i.edu/]\n\nDo you have additional questions?\n\nGive us a call: 757-304-9600 or simply respond to this email.\n\nSincerely,\n\nThe AK9I Team\n4007 Burdette Rd\nCarrsville VA, 23315\nwww.ak9i.edu\np: 757-304-9600\n\nThis message was sent to you because you have expressed interest in our company AK9I.\nTo stop receiving further emails, please reply with \"Unsubscribe\" and we will remove you from our list."
          },
          {
            "name": "Nurture Email 4 · day 64",
            "from": "enrollment@ak9i.com",
            "to": "The lead",
            "subject": "Is now the right time for you?",
            "body": "Hi {{{Recipient.FirstName}}},\n\nLife gets busy - we get it! The great news is our programs start on Mondays throughout the year. Whether you're ready next month or next season, we'll help you plan a start date that fits your timeline.\n\nView our course calendar:\n\nView Calendar [https://ak9i.edu/calender/]\n\nAll the best,\n\nThe AK9I Team\n4007 Burdette Rd\nCarrsville, VA, 23315\nwww.ak9i.edu [https://www.ak9i.edu]\np: 757-304-9600\n\nThis message was sent to you because you have expressed interest in our company AK9I.\nTo stop receiving further emails, please reply with \"Unsubscribe\" and we will remove you from our list."
          },
          {
            "name": "Nurture Email 5 · day 80",
            "from": "enrollment@ak9i.com",
            "to": "The lead",
            "subject": "We're still here when you're ready...",
            "body": "Hi {{{Recipient.FirstName}}},\n\nJust a quick note to say we're still cheering you on. Many of our most successful graduates made the leap-and it paid off.\n\nWhenever you're ready, our admissions team is here to help.\n\nSchedule a call [https://calendar.google.com/calendar/appointments/schedules/AcZssZ0YWLdKtae6gOxFoS4Aqk6RKrIAiHbc-8c18BmhGocY2ZTi0K21ssIlDsmn8Zd21cfYgT2aanFF]\n\nor\n\ngive us a call at our office: 757-304-9600\n\nSincerely,\n\nThe AK9I Team\nAmerican K-9 Interdiction\n4007 Burdette Rd\nCarrsville, VA, 23315\np: 757-304-9600\n\nThis message was sent to you because you have expressed interest in our company AK9I.\nTo stop receiving further emails, please reply with \"Unsubscribe\" and we will remove you from our list."
          },
          {
            "name": "Nurture Email 6 · day 96",
            "from": "enrollment@ak9i.com",
            "to": "The lead",
            "subject": "Map out your next steps",
            "body": "Hi {{{Recipient.FirstName}}},\n\nIt's been a couple of months since you connected with us, and we wanted to check in! Whether you've been exploring your options or just getting your plans in order, our team is here to make your next step easy.\n\nAt American K-9 Interdiction, we're passionate about turning your goals into real-world results- through hands-on training, expert instructors, and certifications.\n\nIf you're ready to move forward, let's schedule a quick call to answer your questions and help you get started.\n\nSchedule a Call [https://calendar.google.com/calendar/appointments/schedules/AcZssZ0YWLdKtae6gOxFoS4Aqk6RKrIAiHbc-8c18BmhGocY2ZTi0K21ssIlDsmn8Zd21cfYgT2aanFF]\n\nOR\n\nEnroll Now [https://enrollmentform.ak9i.edu/]\n\nWe look forward to hearing from you!\n\nBest regards,\n\nThe AK9I Team\nAmerican K-9 Interdiction\n4007 Burdette Rd\nCarrsville, VA, 23315\nwww.ak9i.edu [https://www.ak9i.edu]\np: 757-304-9600\n\nThis message was sent to you because you have expressed interest in our company AK9I.\nTo stop receiving further emails, please reply with \"Unsubscribe\" and we will remove you from our list."
          },
          {
            "name": "Nurture Email 7 · day 112",
            "from": "enrollment@ak9i.com",
            "to": "The lead",
            "subject": "Is 2026 your year?",
            "body": "Hi {{{Recipient.FirstName}}},\n\nIt's the perfect time to set new goals. Our upcoming classes have limited openings. If you've been considering a career working with dogs, this is your sign to act.\n\nView our Upcoming Start Dates:\n\nCalendar [https://ak9i.edu/calender/]\n\nAll the best,\n\nThe AK9I Team\n4007 Burdette Rd\nCarrsville, VA, 23315\nwww.ak9i.edu [https://www.ak9i.edu]\np: 757-304-9600\n\nThis message was sent to you because you have expressed interest in our company AK9I.\nTo stop receiving further emails, please reply with \"Unsubscribe\" and we will remove you from our list."
          },
          {
            "name": "Nurture Email 8 · day 130",
            "from": "enrollment@ak9i.com",
            "to": "The lead",
            "subject": "We're still here when you're ready",
            "body": "Hi {{{Recipient.FirstName}}},\n\nWe understand enrolling in a K9 training program is a big decision. We are here to answer your questions about tuition, housing, career paths, or daily life on campus.\n\nFeel free to call us anytime: 757-304-9600\n\nOr schedule a visit\n\nSchedule a Visit [https://calendar.google.com/calendar/appointments/schedules/AcZssZ0YWLdKtae6gOxFoS4Aqk6RKrIAiHbc-8c18BmhGocY2ZTi0K21ssIlDsmn8Zd21cfYgT2aanFF]\n\nSincerely,\n\nThe AK9I Team\nAmerican K-9 Interdiction, LLC\n4007 Burdette Rd.\nCarrsville, VA, 23315\np: 757-304-9600\nf: 757-304-9678\n\nThis message was sent to you because you have expressed interest in our company AK9I.\nTo stop receiving further emails, please reply with \"Unsubscribe\" and we will remove you from our list."
          },
          {
            "name": "Nurture Email 9 · day 180",
            "from": "enrollment@ak9i.com",
            "to": "The lead",
            "subject": "Enroll now to begin your journey with our next class",
            "body": "Hi {{{Recipient.FirstName}}},\n\nOur next start date is right around the corner! Secure your spot before registration closes and take the first step toward a fulfilling career working with canines.\n\nIf you're ready, our team can walk you through the quick enrollment process and help you finalize your paperwork.\n\nStart your application today by clicking the button:\n\nEnroll Now [https://enrollmentform.ak9i.edu/]\n\nDo you have additional questions?\n\nGive us a call: 757-304-9600 or simply respond to this email.\n\nSincerely,\n\nThe AK9I Team\n4007 Burdette Rd\nCarrsville VA, 23315\nwww.ak9i.edu\np: 757-304-9600\n\nThis message was sent to you because you have expressed interest in our company AK9I.\nTo stop receiving further emails, please reply with \"Unsubscribe\" and we will remove you from our list."
          },
          {
            "name": "Nurture Email 10 · day 200",
            "from": "enrollment@ak9i.com",
            "to": "The lead",
            "subject": "Is now the right time for you?",
            "body": "Hi {{{Recipient.FirstName}}},\n\nLife gets busy - we get it! The great news is our programs start on Mondays throughout the year. Whether you're ready next month or next season, we'll help you plan a start date that fits your timeline.\n\nView our course calendar:\n\nView Calendar [https://ak9i.edu/calender/]\n\nAll the best,\n\nThe AK9I Team\n4007 Burdette Rd\nCarrsville, VA, 23315\nwww.ak9i.edu [https://www.ak9i.edu]\np: 757-304-9600\n\nThis message was sent to you because you have expressed interest in our company AK9I.\nTo stop receiving further emails, please reply with \"Unsubscribe\" and we will remove you from our list."
          },
          {
            "name": "Nurture Email 11 · day 250",
            "from": "enrollment@ak9i.com",
            "to": "The lead",
            "subject": "We're still here when you're ready...",
            "body": "Hi {{{Recipient.FirstName}}},\n\nJust a quick note to say we're still cheering you on. Many of our most successful graduates made the leap-and it paid off.\n\nWhenever you're ready, our admissions team is here to help.\n\nSchedule a call [https://calendar.google.com/calendar/appointments/schedules/AcZssZ0YWLdKtae6gOxFoS4Aqk6RKrIAiHbc-8c18BmhGocY2ZTi0K21ssIlDsmn8Zd21cfYgT2aanFF]\n\nor\n\ngive us a call at our office: 757-304-9600\n\nSincerely,\n\nThe AK9I Team\nAmerican K-9 Interdiction\n4007 Burdette Rd\nCarrsville, VA, 23315\np: 757-304-9600\n\nThis message was sent to you because you have expressed interest in our company AK9I.\nTo stop receiving further emails, please reply with \"Unsubscribe\" and we will remove you from our list."
          },
          {
            "name": "Nurture Email 12 · day 275",
            "from": "enrollment@ak9i.com",
            "to": "The lead",
            "subject": "Your Journey Isn't Over Yet",
            "body": "Hi {{{Recipient.FirstName}}},\n\nNo matter how long it's been, your goal of working with dogs doesn't have an expiration date. If now feels like the right time to start your journey, we're ready when you are.\n\nOur team can help you enroll quickly and make your transition seamless.\n\nEnroll Now [https://enrollmentform.ak9i.edu/]\n\nAll the best,\n\nThe AK9I Team\n4007 Burdette Rd\nCarrsville, VA, 23315\nwww.ak9i.edu [https://www.ak9i.edu]\np: 757-304-9600\n\nThis message was sent to you because you have expressed interest in our company AK9I.\nTo stop receiving further emails, please reply with \"Unsubscribe\" and we will remove you from our list."
          }
        ]
      },
      {
        "id": "s2-future",
        "label": "Interested – Future series",
        "kind": "External · Email",
        "owner": "Admissions",
        "trigger": "Lead Status changes to Interested – Future (start more than 3 months away)",
        "timing": "Day 0, day 60 and day 90; stops if the status changes",
        "source": "BUILD",
        "status": "Live",
        "statusNote": "Live in production since Oct 27, 2026 (flow AK9I Interested Future Series, version 1).",
        "emails": [
          {
            "name": "Day 0 · first email (by lead source)",
            "from": "enrollment@ak9i.com",
            "to": "The lead",
            "subject": "Let's plan around your training timeline",
            "body": "Hi {!Lead.FirstName},\n\nWe're glad you found us through one of our ads. Since you're planning ahead, our team can help you review upcoming start dates for the course you're considering.\n\nWhat month or season would you like to start training? Reply to this email with your preferred timeframe and we will follow up closer to that time. You can also call us at (757) 304-9600.\n\nBest regards,\nThe AK9I Team\nAmerican K-9 Interdiction\nenrollment@ak9i.com | (757) 304-9600\n\nYou are receiving this email because you expressed interest in American K-9 Interdiction. To stop receiving these emails, reply with \"Unsubscribe\" and we will remove you from our list.\nAmerican K-9 Interdiction, 4007 Burdette Rd, Carrsville, VA 23315",
            "note": "Opening sentence changes with the Lead Source (14 versions); the Advertisement version is shown."
          },
          {
            "name": "Day 60 · check-in",
            "from": "enrollment@ak9i.com",
            "to": "The lead",
            "subject": "Checking in on your plans",
            "body": "Hi {!Lead.FirstName},\n\nWe wanted to check in on your plans to train with American K-9 Interdiction. If your timeline has changed, we can help you look at upcoming start dates and what you would need to get ready.\n\nCall (757) 304-9600 or reply to this email.\n\nBest regards,\nThe AK9I Team\nAmerican K-9 Interdiction\n4007 Burdette Rd, Carrsville, VA 23315\nenrollment@ak9i.com | (757) 304-9600\n\nYou are receiving this email because you expressed interest in American K-9 Interdiction. To stop receiving these emails, reply with \"Unsubscribe\" and we will remove you from our list.\nAmerican K-9 Interdiction, 4007 Burdette Rd, Carrsville, VA 23315"
          },
          {
            "name": "Day 90 · getting ready",
            "from": "enrollment@ak9i.com",
            "to": "The lead",
            "subject": "Getting ready for your start date",
            "body": "Hi {!Lead.FirstName},\n\nIf your start date is getting closer, now is a good time to begin your enrollment form. It takes care of the agreement and lets our Student Services team schedule your phone interview.\n\nTo start, reply to this email or call (757) 304-9600 and we'll send you the application link.\n\nBest regards,\nThe AK9I Team\nAmerican K-9 Interdiction\n4007 Burdette Rd, Carrsville, VA 23315\nenrollment@ak9i.com | (757) 304-9600\n\nYou are receiving this email because you expressed interest in American K-9 Interdiction. To stop receiving these emails, reply with \"Unsubscribe\" and we will remove you from our list.\nAmerican K-9 Interdiction, 4007 Burdette Rd, Carrsville, VA 23315"
          }
        ]
      },
      {
        "id": "s2-partial",
        "label": "Unfinished application follow-ups",
        "kind": "External · Email",
        "owner": "Admissions",
        "trigger": "Enrollment form started (Lead Status = Applicant) and still not submitted",
        "timing": "Days 1, 4 and 10 after the form was started; stops once submitted",
        "source": "BUILD",
        "status": "Paused",
        "statusNote": "Built and in production, but turned off (flow AK9I Partial Form Series is not active). Waiting on Jonathan's approval of the email wording before it is turned on.",
        "emails": [
          {
            "name": "Day 1 · first email (by lead source)",
            "from": "enrollment@ak9i.com",
            "to": "The lead",
            "subject": "Questions about completing your AK9I application?",
            "body": "Hi {!Lead.FirstName},\n\nWe're glad you found us through one of our ads. Your AK9I application has been started but hasn't been submitted yet.\n\nWhen you're ready to finish, reply to this email or call (757) 304-9600 and we'll send you the application link. If something is holding you up, such as a question about documents, funding or start dates, reply and tell us what it is so we can help.\n\nBest regards,\nThe AK9I Team\nAmerican K-9 Interdiction\nenrollment@ak9i.com | (757) 304-9600\n\nYou are receiving this email because you expressed interest in American K-9 Interdiction. To stop receiving these emails, reply with \"Unsubscribe\" and we will remove you from our list.\nAmerican K-9 Interdiction, 4007 Burdette Rd, Carrsville, VA 23315",
            "note": "Opening sentence changes with the Lead Source (14 versions); the Advertisement version is shown."
          },
          {
            "name": "Day 4",
            "from": "enrollment@ak9i.com",
            "to": "The lead",
            "subject": "Questions about your enrollment form?",
            "body": "Hi {!Lead.FirstName},\n\nWe noticed your enrollment form is not finished yet. Many applicants pause to check dates, benefits or paperwork, and that is completely fine.\n\nOur team can help with:\n- choosing a course and start date\n- VA education benefits, SkillBridge and VR&E\n- what documents you will need\n\nTo finish your form, reply to this email or call (757) 304-9600 and we'll send you the application link.\n\nBest regards,\nThe AK9I Team\nAmerican K-9 Interdiction\n4007 Burdette Rd, Carrsville, VA 23315\nenrollment@ak9i.com | (757) 304-9600\n\nYou are receiving this email because you expressed interest in American K-9 Interdiction. To stop receiving these emails, reply with \"Unsubscribe\" and we will remove you from our list.\nAmerican K-9 Interdiction, 4007 Burdette Rd, Carrsville, VA 23315"
          },
          {
            "name": "Day 10",
            "from": "enrollment@ak9i.com",
            "to": "The lead",
            "subject": "Still interested in completing your AK9I application?",
            "body": "Hi {!Lead.FirstName},\n\nJust one more note: your enrollment form hasn't been submitted yet. Our team can help you review upcoming start dates for the course you're considering.\n\nWhen you are ready to finish, reply to this email or call (757) 304-9600 and we'll send you the application link.\n\nIf now is not the right time, simply reply and let us know. We are glad to help whenever you are ready.\n\nBest regards,\nThe AK9I Team\nAmerican K-9 Interdiction\n4007 Burdette Rd, Carrsville, VA 23315\nenrollment@ak9i.com | (757) 304-9600\n\nYou are receiving this email because you expressed interest in American K-9 Interdiction. To stop receiving these emails, reply with \"Unsubscribe\" and we will remove you from our list.\nAmerican K-9 Interdiction, 4007 Burdette Rd, Carrsville, VA 23315"
          }
        ]
      },
      {
        "id": "s2-reply",
        "label": "Human inquiry response",
        "kind": "External · Human follow-up",
        "owner": "Sales",
        "trigger": "Qualified student inquiry assigned to Sales",
        "timing": "Response SLA to be approved",
        "source": "PLAN",
        "status": "Sandbox",
        "statusNote": "Manual email template built in the sandbox (Oct 27, 2026); not in production. Wording waits on Jonathan's approval."
      },
      {
        "id": "s2-program",
        "label": "Program and pricing guidance",
        "kind": "External · Email / conversation",
        "owner": "Sales + Student Services",
        "trigger": "Program interest and requirements identified",
        "timing": "During active consideration",
        "source": "PLAN",
        "status": "Sandbox",
        "statusNote": "Manual email template built in the sandbox (Oct 27, 2026); not in production. Wording waits on Jonathan's approval.",
        "emails": []
      },
      {
        "id": "s2-funding",
        "label": "Funding and eligibility guidance",
        "kind": "External · Email / conversation",
        "owner": "Student Services / SCO",
        "trigger": "Prospect requests or needs benefit/funding guidance",
        "timing": "As needed before application",
        "source": "PLAN",
        "status": "Sandbox",
        "statusNote": "Manual email template built in the sandbox (Oct 27, 2026); not in production. Wording waits on Jonathan's approval.",
        "emails": []
      },
      {
        "id": "s2-webinar",
        "label": "Career webinar confirmation & reminders",
        "kind": "External · Email",
        "owner": "Sales / webinar coordinator",
        "trigger": "Career webinar registration",
        "timing": "Upon registration; reminder schedule to approve",
        "source": "PLAN",
        "status": "Sandbox",
        "statusNote": "Reminder flow (1 day and 1 hour before) built in the sandbox (Oct 27, 2026) and being tested; not in production. Wording waits on Jonathan's approval.",
        "emails": []
      },
      {
        "id": "s2-consult",
        "label": "Consultation reminders",
        "kind": "External · Email",
        "owner": "Sales",
        "trigger": "Prospect books a consultation on the Google appointment page on enrollment@ak9i.com",
        "timing": "Reminders before the booked consultation (schedule to be set)",
        "source": "PLAN",
        "status": "Sandbox",
        "statusNote": "Manual reminder template built in the sandbox (Oct 27, 2026); not in production. Open question: use Google appointment reminders instead.",
        "emails": []
      },
      {
        "id": "s2-unanswered",
        "label": "Unanswered inquiry follow-up",
        "kind": "External · Email / call",
        "owner": "Sales",
        "trigger": "Prospect has not replied to the prior inquiry response",
        "timing": "Based on approved follow-up cadence",
        "source": "PLAN",
        "status": "Sandbox",
        "statusNote": "Day 3 email and day 7 call task flow built in the sandbox (Oct 27, 2026) and being tested; not in production. Wording waits on Jonathan's approval.",
        "emails": []
      },
      {
        "id": "s2-aging",
        "label": "No-reply aging alert",
        "kind": "Internal · Alert",
        "owner": "Sales owner / manager",
        "trigger": "Qualified inquiry has no response",
        "timing": "After 2 business days",
        "source": "REC",
        "status": "Sandbox",
        "statusNote": "Alert flow (task and email after 2 business days) built in the sandbox (Oct 27, 2026) and being tested; not in production."
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
        "status": "Sandbox",
        "statusNote": "Manual email template built in the sandbox (Oct 27, 2026); not in production. Wording waits on Jonathan's approval.",
        "emails": []
      },
      {
        "id": "c2-demo",
        "label": "Demo and scope follow-up",
        "kind": "External · Email",
        "owner": "Sales / Business Development",
        "trigger": "Capability demonstration or scope conversation completed",
        "timing": "According to buyer next step",
        "source": "SITE",
        "status": "Sandbox",
        "statusNote": "Manual email template built in the sandbox (Oct 27, 2026); not in production. Wording waits on Jonathan's approval.",
        "emails": []
      },
      {
        "id": "c2-task",
        "label": "Decision and next-step task",
        "kind": "Internal · Task",
        "owner": "Sales owner",
        "trigger": "Authority, timing, criteria or next commitment identified",
        "timing": "Dated at every material touch",
        "source": "SITE",
        "status": "Sandbox",
        "statusNote": "Next-step task flow built in the sandbox (Oct 27, 2026) and being tested; not in production."
      }
    ]
  },
  {
    "number": 3,
    "color": "#D69D10",
    "student": "Enrollment",
    "contract": "Commitment / Award",
    "description": "Student admission and readiness; contract award and operating handoff.",
    "entry": {
      "students": "The enrollment form is submitted: the Lead is converted, the Contact becomes Application Received and an Enrollment Opportunity is created. The student is Enrolled once all 3 documents are received, the $100 fee is paid and funding is confirmed.",
      "contracts": "An approved proposal or price is issued to the buyer."
    },
    "students": [
      {
        "id": "s3-application",
        "label": "Application Received: thank-you with application PDF",
        "kind": "External · Email",
        "owner": "Admissions (Michelle Hartman)",
        "trigger": "Enrollment form submitted",
        "timing": "Immediately on submission",
        "source": "BUILD",
        "status": "Live",
        "emails": [
          {
            "from": "enrollment@ak9i.com",
            "to": "The applicant, with the application PDF attached",
            "subject": "Thank you for applying to AK9I",
            "body": "Hello {{{Recipient.FirstName}}},\n\nThank you for applying to the K9 Detection Program. We are excited to help you begin your journey toward certification and employment within the K9 industry.\n\nYour application has been received and is currently being reviewed. Over the next several days, a member of our team will contact you to discuss your goals, answer questions, and walk you through the next steps in the enrollment process.\n\nIf you have any immediate questions, please feel free to reply to this email or contact us directly.\n\nWe look forward to speaking with you soon.\n\nBest regards,\n\nThe AK9I Team\nAmerican K-9 Interdiction\nenrollment@ak9i.com\n(757) 304-9600",
            "note": "Full-record application PDF live since Oct 27, 2026 (enrollment form v27): every screen's answers, the full text of each initialed page with the initials, and the signature with its completion timestamp."
          }
        ]
      },
      {
        "id": "s3-review",
        "label": "Review Application alert to Michelle",
        "kind": "Internal · Alert",
        "owner": "Admissions (Michelle Hartman)",
        "trigger": "Enrollment form submitted",
        "timing": "Immediately on submission",
        "source": "BUILD",
        "status": "Live",
        "emails": [
          {
            "from": "enrollment@ak9i.com",
            "to": "Michelle Hartman (mhartman@ak9i.com)",
            "subject": "Urgent Action: Review Application",
            "body": "Hello,\n\nA new student application has been submitted and is ready for review.\n\nApplicant Information\nName: {!Enrollment_Student_Name.firstName} {!Enrollment_Student_Name.lastName}\nEmail: {!Enrollment_Form_Email.value}\nPhone: {!Enrollment_Form_Phone.value}\n\nCourse Information\nSelected Course: {!Course_Selection}\nRequested Start Date: {!Start_Date}\nCourse Selection Confirmed: {!confirm_course}\n\nHow They Heard About AK9I\nSource: {!Heard_About_AK9I_Source}\nDetail: {!fHeardDetail}\n\nReview Application\n{!fEnrollmentReviewURL}\n\nPrint Enrollment PDF (student file)\n{!fEnrollmentPdfURL}\n\nPlease review the application in Salesforce, print the PDF for the physical student file, and update the student’s enrollment status as appropriate.\n\nThank you,\nAK9I Admissions"
          }
        ]
      },
      {
        "id": "s3-pdfcopy",
        "label": "Application PDF copy to the Opportunity owner",
        "kind": "Internal · Email",
        "owner": "Admissions",
        "trigger": "Enrollment form submitted",
        "timing": "Immediately on submission",
        "source": "BUILD",
        "status": "Live",
        "emails": [
          {
            "from": "enrollment@ak9i.com",
            "to": "The Enrollment Opportunity owner (falls back to Michelle Hartman)",
            "subject": "Enrollment application PDF: {Opp.Name}",
            "body": "The enrollment application PDF for {applicant} is attached.\n\nOpportunity: {Opp.Name}\n{orgUrl}/{OppId}\n\nA copy is also filed on the Opportunity under Files."
          }
        ]
      },
      {
        "id": "s3-interview",
        "label": "Schedule your phone interview with Michelle",
        "kind": "External · Email",
        "owner": "Admissions (Michelle Hartman)",
        "trigger": "Application is still at Application Received 1 day after submission",
        "timing": "1 day after submission",
        "source": "BUILD",
        "status": "Sandbox",
        "emails": [
          {
            "from": "enrollment@ak9i.com",
            "to": "The applicant",
            "subject": "Next step: schedule your phone interview",
            "body": "Hi {!Contact.FirstName},\n\nThank you for submitting your enrollment form. The next step is a short phone interview with Michelle Hartman in Student Services.\n\nPlease reply to this email with a few days and times that work for you, or call (757) 304-9600, and we will schedule it.\n\nWhen you book, you can also confirm (optional):\n- your course\n- your course start and end dates\n- single or dual purpose K9\n- odor discipline\n\nIf you have questions before the call, contact Michelle at mhartman@ak9i.com or call (757) 304-9600.\n\nBest regards,\nThe AK9I Team\nAmerican K-9 Interdiction\n4007 Burdette Rd, Carrsville, VA 23315\nenrollment@ak9i.com | (757) 304-9600",
            "missing": "Wording not yet written for the sentence with the booking link to the Google appointment page on enrollment@ak9i.com."
          }
        ]
      },
      {
        "id": "s3-nointerview",
        "label": "No interview booked in 2 days: alert to Michelle",
        "kind": "Internal · Task + alert",
        "owner": "Admissions (Michelle Hartman)",
        "trigger": "No phone interview is booked 2 days after the application",
        "timing": "2 days after submission",
        "source": "BUILD",
        "status": "Sandbox",
        "emails": [
          {
            "name": "Task to Michelle (due tomorrow, high priority)",
            "to": "Michelle Hartman",
            "subject": "Phone interview not scheduled (2 days)",
            "body": "The applicant has not booked a phone interview two days after applying. Please reach out to schedule.",
            "type": "task"
          },
          {
            "name": "Email to Michelle",
            "from": "enrollment@ak9i.com",
            "to": "Michelle Hartman (mhartman@ak9i.com)",
            "subject": "Applicant has not scheduled a phone interview",
            "body": "Michelle,\n\n{!Get_Contact.FirstName} {!Get_Contact.LastName} applied two days ago and has not booked a phone interview yet.\n\nEmail: {!Get_Contact.Email}\nPhone: {!Get_Contact.Phone}\n\nA Salesforce task has also been created for you."
          }
        ]
      },
      {
        "id": "s3-accept",
        "label": "Acceptance letter",
        "kind": "External · Email",
        "owner": "Admissions (Michelle Hartman)",
        "trigger": "Michelle moves the student to Accepted after the phone interview",
        "timing": "On acceptance (day 0)",
        "source": "BUILD",
        "status": "Sandbox",
        "emails": [
          {
            "from": "enrollment@ak9i.com",
            "to": "The student",
            "subject": "Congratulations - You've been Accepted!",
            "body": "Hello {{{Recipient.FirstName}}},\n\nCongratulations! We are pleased to inform you that you have been accepted into the K9 Detection Program.\n\nYour enrollment packet will include:\n- Course start dates\n- Required documentation checklist\n- Funding information\n- Important contact information\n- Next steps for enrollment\nPlease review the materials carefully and contact us if you need assistance completing any requirements.\n\nWe are excited to welcome you to the program and help you begin this exciting journey.\nCongratulations again!\n\nBest regards,\n\nThe AK9I | BGK9 Team\n4007 Burdette Road\nCarrsville, VA, 23315\nenrollment@ak9i.com\n(757) 304-9600"
          }
        ]
      },
      {
        "id": "s3-pay",
        "label": "$100 administrative fee (Stripe payment link)",
        "kind": "External · Email",
        "owner": "Admissions / Finance",
        "trigger": "Michelle moves the student to Accepted; the fee link goes out in the same acceptance sequence",
        "timing": "Day 2 after acceptance",
        "source": "BUILD",
        "status": "Sandbox",
        "emails": [
          {
            "from": "enrollment@ak9i.com",
            "to": "The student, with a Stripe payment link for the $100 Student Administrative Fee",
            "subject": "AK9I Enrollment - Administrative Fee Payment"
          }
        ]
      },
      {
        "id": "s3-documents",
        "label": "Upload your enrollment documents",
        "kind": "External · Email",
        "owner": "Student Services (Michelle Hartman)",
        "trigger": "Student accepted; 3 documents needed (diploma or transcript, JST, VA Certificate of Eligibility or Statement of Benefits)",
        "timing": "Day 1 after acceptance",
        "source": "BUILD",
        "status": "Sandbox",
        "emails": [
          {
            "from": "enrollment@ak9i.com",
            "to": "The student",
            "subject": "Upload your enrollment documents",
            "body": "Hi {!Contact.FirstName},\n\nTo complete your enrollment, please upload these documents:\n- High school or college diploma, or transcript\n- Joint Service Transcript (JST)\n- VA Certificate of Eligibility or Statement of Benefits\n\nPlease send them to Student Services at mhartman@ak9i.com.\n\nIf you are using a funding source other than VA benefits, or you do not have one of these documents, reply to this email and Student Services will tell you what to send instead.\n\nBest regards,\nThe AK9I Team\nAmerican K-9 Interdiction\n4007 Burdette Rd, Carrsville, VA 23315\nenrollment@ak9i.com | (757) 304-9600\n\nGI Bill(R) is a registered trademark of the U.S. Department of Veterans Affairs (VA). More information about education benefits offered by VA is available at the official U.S. government website at https://www.benefits.va.gov/gibill.",
            "missing": "Wording not yet written for the sentence with the document upload page link."
          }
        ]
      },
      {
        "id": "s3-docreminder",
        "label": "Missing-document reminder",
        "kind": "External · Email",
        "owner": "Student Services (Michelle Hartman)",
        "trigger": "Documents still missing after the request",
        "timing": "Timing to be set",
        "source": "BUILD",
        "status": "Sandbox",
        "emails": [
          {
            "from": "enrollment@ak9i.com",
            "to": "The student",
            "subject": "Reminder: enrollment documents still needed",
            "body": "Hi {!Contact.FirstName},\n\nWe are still missing one or more of your enrollment documents. Please send them to Student Services at mhartman@ak9i.com.\n\nNeed help? Contact Michelle Hartman at mhartman@ak9i.com or call (757) 304-9600.\n\nBest regards,\nThe AK9I Team\nAmerican K-9 Interdiction\n4007 Burdette Rd, Carrsville, VA 23315\nenrollment@ak9i.com | (757) 304-9600",
            "missing": "Wording not yet written for the sentence with the document upload page link."
          }
        ]
      },
      {
        "id": "s3-deposit",
        "label": "Self-pay deposit ($7,500)",
        "kind": "External · Payment step",
        "owner": "Admissions / Finance",
        "trigger": "Accepted student is paying for the course themselves",
        "timing": "Before enrollment is confirmed",
        "source": "BUILD",
        "status": "Sandbox",
        "emails": [
          {
            "from": "enrollment@ak9i.com",
            "to": "The student"
          }
        ]
      },
      {
        "id": "s3-enrolled",
        "label": "You are enrolled",
        "kind": "External · Email",
        "owner": "Admissions",
        "trigger": "Enrolled: all 3 documents received, $100 fee paid and funding confirmed",
        "timing": "When the student becomes Enrolled",
        "source": "BUILD",
        "status": "Sandbox",
        "emails": [
          {
            "from": "enrollment@ak9i.com",
            "to": "The student",
            "subject": "You are enrolled at American K-9 Interdiction",
            "body": "Hi {!Contact.FirstName},\n\nCongratulations! Your enrollment is complete. We have received your documents, your administrative fee and your funding confirmation.\n\nYour course: {!Contact.Course__c}\nStart date: {!Contact.Course_Start_Date__c}\n\nWe will be in touch before your start date with what to bring and where to go. If you have questions in the meantime, reply to this email or call (757) 304-9600.\n\nBest regards,\nThe AK9I Team\nAmerican K-9 Interdiction\n4007 Burdette Rd, Carrsville, VA 23315\nenrollment@ak9i.com | (757) 304-9600"
          }
        ]
      },
      {
        "id": "s3-welcome",
        "label": "New-student welcome",
        "kind": "External · Email",
        "owner": "Student Services",
        "trigger": "Accepted student handed off from Sales",
        "timing": "Upon acceptance",
        "source": "PLAN",
        "status": "Planned",
        "emails": []
      },
      {
        "id": "s3-ceo",
        "label": "CEO welcome message",
        "kind": "External · Email",
        "owner": "Student Services / leadership",
        "trigger": "Accepted student preparing for assigned course",
        "timing": "In pre-start welcome sequence",
        "source": "PLAN",
        "status": "Planned",
        "emails": []
      },
      {
        "id": "s3-instructor",
        "label": "Instructor introduction & bio",
        "kind": "External · Email",
        "owner": "Student Services / Training",
        "trigger": "Instructor and class assignment confirmed",
        "timing": "Before course start",
        "source": "PLAN",
        "status": "Planned",
        "emails": []
      },
      {
        "id": "s3-logistics",
        "label": "Campus, dorm & equipment information",
        "kind": "External · Email",
        "owner": "Student Services / Admin",
        "trigger": "Course location, travel, dorm, or equipment plan confirmed",
        "timing": "Before course start",
        "source": "PLAN",
        "status": "Planned",
        "emails": []
      },
      {
        "id": "s3-orientation",
        "label": "Pre-start orientation invitation",
        "kind": "External · Email",
        "owner": "Student Services / Training",
        "trigger": "Student accepted into a scheduled class",
        "timing": "Before course start",
        "source": "SITE",
        "status": "Planned",
        "emails": []
      },
      {
        "id": "s3-d30",
        "label": "30-day course countdown",
        "kind": "External · Email",
        "owner": "Student Services",
        "trigger": "Student is Enrolled and the course start date is 30 days away",
        "timing": "30 days before start",
        "source": "BUILD",
        "status": "Live",
        "emails": [
          {
            "from": "enrollment@ak9i.com",
            "to": "The student",
            "subject": "Preparing for Your Upcoming K9 Training Program",
            "body": "Hello {{{Recipient.FirstName}}},\n\nYour class start date is approaching, and we want to help you prepare for a successful experience.\n\nPlease review the following:\n- Required equipment and supplies\n- Travel arrangements\n- Housing accommodations (if applicable)\n- Program expectations and attendance requirements\nTaking time now to prepare will help ensure a smooth transition into training.\n\nIf you have questions or need assistance coordinating travel or housing, we are here to help.\n\nBest Regards,\n\nThe AK9I | BGK9 Team\n4007 Burdette Rd.\nCarrsville, VA, 23315\nenrollment@ak9i.com\n(757) 304-9600"
          }
        ]
      },
      {
        "id": "s3-d14",
        "label": "14-day course countdown",
        "kind": "External · Email",
        "owner": "Student Services",
        "trigger": "Student is Enrolled and the course start date is 14 days away",
        "timing": "14 days before start",
        "source": "PLAN",
        "status": "Planned",
        "emails": []
      },
      {
        "id": "s3-d7",
        "label": "7-day course countdown",
        "kind": "External · Email",
        "owner": "Student Services",
        "trigger": "Student is Enrolled and the course start date is 7 days away",
        "timing": "7 days before start",
        "source": "BUILD",
        "status": "Live",
        "emails": [
          {
            "from": "enrollment@ak9i.com",
            "to": "The student",
            "subject": "One Week Until Training Begins!",
            "body": "Hello {{{Recipient.FirstName}}},\n\nYour K9 Detection Program begins in just one week.\n\nPlease review the following important information:\n- Arrival date and time\n- Training location\n- What to bring on Day One\n- Program expectations and schedule\nWe are excited to welcome you and look forward to helping you develop the skills necessary for success in the K9 profession.\n\nSafe travels, and we'll see you soon!\n\nBest regards,\nThe AK9I Team"
          }
        ]
      },
      {
        "id": "s3-d3",
        "label": "3-day course countdown",
        "kind": "External · Email",
        "owner": "Student Services",
        "trigger": "Student is Enrolled and the course start date is 3 days away",
        "timing": "3 days before start",
        "source": "PLAN",
        "status": "Planned",
        "emails": []
      },
      {
        "id": "s3-d1",
        "label": "1-day course countdown",
        "kind": "External · Email",
        "owner": "Student Services",
        "trigger": "Student is Enrolled and the course start date is 1 day away",
        "timing": "1 day before start",
        "source": "PLAN",
        "status": "Planned",
        "emails": []
      },
      {
        "id": "s3-confirm",
        "label": "Final start confirmation",
        "kind": "External · Email / call",
        "owner": "Student Services",
        "trigger": "All pre-start readiness requirements checked",
        "timing": "Immediately before start",
        "source": "PLAN",
        "status": "Planned",
        "emails": []
      },
      {
        "id": "s3-red",
        "label": "At-risk student “red list” escalation",
        "kind": "Internal · Task / alert",
        "owner": "Student Services / Admin",
        "trigger": "Missing documents, unresolved funding, non-response, or possible deferral",
        "timing": "When a readiness risk is identified",
        "source": "PLAN",
        "status": "Planned"
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
        "status": "Planned",
        "emails": []
      },
      {
        "id": "c3-award",
        "label": "Award / agreement confirmation",
        "kind": "External · Email",
        "owner": "Sales",
        "trigger": "Buyer awards work or agreement is executed",
        "timing": "At award or execution",
        "source": "SITE",
        "status": "Planned",
        "emails": []
      },
      {
        "id": "c3-kickoff",
        "label": "Client kickoff confirmation",
        "kind": "External · Email",
        "owner": "Contracts & Field Operations",
        "trigger": "Executed agreement with agreed kickoff logistics",
        "timing": "Before services begin",
        "source": "REC",
        "status": "Planned",
        "emails": []
      },
      {
        "id": "c3-handoff",
        "label": "Sales → operations handoff",
        "kind": "Internal · Task / notification",
        "owner": "Sales → Contracts & Field Operations",
        "trigger": "Agreement executed and operating package complete",
        "timing": "At complete handoff",
        "source": "SITE",
        "status": "Planned"
      }
    ]
  },
  {
    "number": 4,
    "color": "#6958A6",
    "student": "Training & Experience",
    "contract": "Service Delivery",
    "description": "Training & Experience: manage active learning or contracted work, support, and evidence. Graduation is the Friday of the course's final week.",
    "entry": {
      "students": "Staff record the student's actual start date and Michelle Hartman confirms attendance, setting the student to Active Student.",
      "contracts": "The agreement is executed and Sales hands the account to Contracts & Field Operations."
    },
    "students": [
      {
        "id": "s4-start",
        "label": "Student start recorded: alert to Michelle",
        "kind": "Internal · Task + alert",
        "owner": "Student Services (Michelle Hartman)",
        "trigger": "Actual start date recorded on the student",
        "timing": "On the start date",
        "source": "BUILD",
        "status": "Sandbox",
        "emails": [
          {
            "name": "Task to Michelle (due on the start date, high priority)",
            "to": "Michelle Hartman",
            "subject": "Confirm class attendance - set Active Student",
            "body": "Actual Start Date was recorded. Confirm the student attended and set Enrollment Status = Active Student on the Enrollment Opportunity. If they did not attend, record a no-show.",
            "type": "task"
          },
          {
            "name": "Email to Michelle",
            "from": "enrollment@ak9i.com",
            "to": "Michelle Hartman (mhartman@ak9i.com)",
            "subject": "Student start recorded",
            "body": "Michelle,\n\nAn actual start date of {!$Record.AK9I_Actual_Start_Date__c} was recorded for {!$Record.FirstName} {!$Record.LastName}.\n\nPlease confirm attendance and set Enrollment Status to Active Student on the Enrollment Opportunity. If the student did not attend, record a no-show."
          }
        ]
      },
      {
        "id": "s4-orientation",
        "label": "Day-one orientation",
        "kind": "External · Student communication",
        "owner": "Training / Student Services",
        "trigger": "Student actually begins the course",
        "timing": "Day 1",
        "source": "PLAN",
        "status": "Planned"
      },
      {
        "id": "s4-outbrief",
        "label": "Weekly instructor out-brief",
        "kind": "Internal · Instructor update",
        "owner": "Training → Student Services",
        "trigger": "Current active course/cohort",
        "timing": "Weekly",
        "source": "PLAN",
        "status": "Planned"
      },
      {
        "id": "s4-week2",
        "label": "Two weeks into training",
        "kind": "External · Email",
        "owner": "Student Services / Training",
        "trigger": "Student is in class and the course started 14 days ago",
        "timing": "14 days after course start",
        "source": "BUILD",
        "status": "Live",
        "emails": [
          {
            "from": "enrollment@ak9i.com",
            "to": "The student",
            "subject": "Keep up the Great Work!",
            "body": "Hello {{{Recipient.FirstName}}},\n\nCongratulations on reaching the midpoint of your training.\n\nOver the past two weeks, you've been building essential skills in scent mechanics, canine health, and detection fundamentals. This phase of the program lays the foundation for successful certification.\n\nAs you continue training:\n- Stay focused on daily training\n- Reach out if you need support\n- Continue preparing for certification requirements.\n\nWe're proud of the work you've put in so far and look forward to seeing your continued progress.\n\nKeep up the great work!\n\nBest regards,\nThe AK9I Team",
            "note": "Fixed in production Oct 27, 2026: this step now sends this Active Student Outreach email (it was sending the acceptance letter) and reaches students in Enrolled or Active Student status. Wording to review: \"midpoint\" is only accurate for a 4-week course; Course 001 runs 5 weeks."
          }
        ]
      },
      {
        "id": "s4-progress",
        "label": "Progress & remediation notice",
        "kind": "External · Email / conversation",
        "owner": "Training",
        "trigger": "Progress assessment or remediation need",
        "timing": "As required by instruction",
        "source": "PLAN",
        "status": "Planned",
        "emails": []
      },
      {
        "id": "s4-support",
        "label": "Student support / grievance response",
        "kind": "External · Human follow-up",
        "owner": "Student Services",
        "trigger": "Student support request, grievance or service issue",
        "timing": "According to approved response process",
        "source": "PLAN",
        "status": "Planned"
      },
      {
        "id": "s4-gradprep",
        "label": "Preparing for graduation",
        "kind": "External · Email",
        "owner": "Student Services / Training",
        "trigger": "Graduation is 14 days away",
        "timing": "14 days before graduation day, the Friday of the course's final week (courses start on a Monday)",
        "source": "BUILD",
        "status": "Live",
        "emails": [
          {
            "from": "enrollment@ak9i.com",
            "to": "The student",
            "subject": "Preparing for Graduation",
            "body": "Hello {{{Recipient.FirstName}}},\n\nCongratulations on nearing completion of the K9 Detection Program.\n\nAs graduation approaches, we want to help you prepare for the next phase of your professional journey.\n\nPlease begin thinking about:\n- Certification requirements\n- Graduation logistics\n- Employment opportunities\n- Additional career goals within the K9 industry\nOur team is available to help connect you with resources and employment pathways following graduation.\n\nWe look forward to celebrating your achievement.\n\nBest regards,\nThe AK9I Team",
            "note": "Updated in production Oct 27, 2026: now reaches students in Enrolled or Active Student status, and never sends a past-dated catch-up email."
          }
        ]
      },
      {
        "id": "s4-grad",
        "label": "Graduation invitation",
        "kind": "External · Email",
        "owner": "Student Services / Training",
        "trigger": "Graduation ceremony planned for the cohort (graduation day, the Friday of the course's final week (courses start on a Monday))",
        "timing": "Before final graduation activity",
        "source": "PLAN",
        "status": "Planned",
        "emails": []
      },
      {
        "id": "s4-guests",
        "label": "Family and guest information",
        "kind": "External · Email",
        "owner": "Student Services",
        "trigger": "Graduation invitation/guest arrangements ready",
        "timing": "Before graduation",
        "source": "PLAN",
        "status": "Planned",
        "emails": []
      },
      {
        "id": "s4-checkout",
        "label": "Certificate and housing checkout instructions",
        "kind": "External · Email",
        "owner": "Student Services / Admin",
        "trigger": "Student nears completion and planned departure",
        "timing": "Before course completion",
        "source": "PLAN",
        "status": "Planned",
        "emails": []
      },
      {
        "id": "s4-gradday",
        "label": "Graduation day congratulations",
        "kind": "External · Email",
        "owner": "Student Services / Training",
        "trigger": "Today is graduation day, the Friday of the course's final week (courses start on a Monday)",
        "timing": "On graduation day",
        "source": "BUILD",
        "status": "Live",
        "emails": [
          {
            "from": "enrollment@ak9i.com",
            "to": "The student",
            "subject": "Congratulations Graduate!",
            "body": "Hello {{{Recipient.FirstName}}},\n\nCongratulations on successfully completing the Detection Program!\n\nToday marks an important achievement and reflects the dedication, commitment, and hard work you've demonstrated throughout the program.\n\nAs a graduate, you now join a growing network of trained professionals working within the K9 industry.\n\nWe are proud of your accomplishment and look forward to following your future success.\n\nCongratulations again!\n\nBest regards,\nThe AK9I Team",
            "note": "Fixed in production Oct 27, 2026: now sends on graduation day (the Course End Date). Before this fix the condition could never be true, so it never sent."
          }
        ]
      },
      {
        "id": "s4-transition",
        "label": "Completion / transition notice",
        "kind": "External · Email",
        "owner": "Training / Student Services",
        "trigger": "Course completed or documented student exit",
        "timing": "At completion or documented exit",
        "source": "PLAN",
        "status": "Planned",
        "emails": []
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
        "status": "Planned"
      },
      {
        "id": "c4-client",
        "label": "Client coordination updates",
        "kind": "External · Client communication",
        "owner": "Contracts & Field Operations",
        "trigger": "Service period underway; operational update required",
        "timing": "Per contract",
        "source": "SITE",
        "status": "Planned"
      },
      {
        "id": "c4-evidence",
        "label": "Service evidence / report",
        "kind": "External · Service record",
        "owner": "Contracts & Field Operations",
        "trigger": "Work performed or contractual deliverable reached",
        "timing": "Per contract",
        "source": "SITE",
        "status": "Planned"
      },
      {
        "id": "c4-billing",
        "label": "Billing support / hours confirmation",
        "kind": "Internal · Task / notice",
        "owner": "Field Operations → Finance",
        "trigger": "Service hours or billable milestone recorded",
        "timing": "Per invoice schedule",
        "source": "SITE",
        "status": "Planned"
      },
      {
        "id": "c4-incident",
        "label": "Incident response / notification",
        "kind": "External · Client notification",
        "owner": "Contracts & Field Operations",
        "trigger": "Reportable service incident or exception",
        "timing": "Per contract and incident protocol",
        "source": "SITE",
        "status": "Planned"
      }
    ]
  },
  {
    "number": 5,
    "color": "#168A93",
    "student": "Loyalty",
    "contract": "Loyalty",
    "description": "Verify outcomes and maintain trust after completion or service.",
    "entry": {
      "students": "The day after graduation (the Friday of the course's final week), a student who is still Active Student is set to Graduated.",
      "contracts": "A service milestone is achieved or delivery is completed."
    },
    "students": [
      {
        "id": "s5-thanks",
        "label": "Graduation thank-you",
        "kind": "External · Email",
        "owner": "Student Services / Alumni",
        "trigger": "Student graduates",
        "timing": "At or after graduation",
        "source": "PLAN",
        "status": "Planned",
        "emails": []
      },
      {
        "id": "s5-evidence",
        "label": "Outcome / employment evidence request",
        "kind": "External · Email / call",
        "owner": "Student Services / Alumni",
        "trigger": "Graduate reporting follow-up becomes due",
        "timing": "At relevant outcome milestone",
        "source": "PLAN",
        "status": "Planned",
        "emails": []
      },
      {
        "id": "s5-d30",
        "label": "30-day check-in: employment survey",
        "kind": "External · Email",
        "owner": "Student Services / Alumni",
        "trigger": "Graduated 30 days ago and no survey sent yet",
        "timing": "30 days after graduation",
        "source": "BUILD",
        "status": "Sandbox",
        "emails": [
          {
            "from": "enrollment@ak9i.com",
            "to": "The graduate",
            "subject": "Your 30-day employment update",
            "body": "Hi {!Contact.FirstName},\n\nCongratulations again on graduating from American K-9 Interdiction. As part of our graduate follow-up, we ask every graduate to complete a short employment confirmation about 30 days after graduation.\n\nPlease reply to this email and we will send you the confirmation form to complete and sign.\n\nIt only takes a few minutes, and it helps us support you and future students.\n\nBest regards,\nThe AK9I Team\nAmerican K-9 Interdiction\n4007 Burdette Rd, Carrsville, VA 23315\nenrollment@ak9i.com | (757) 304-9600",
            "missing": "Wording not yet written for the sentence with the survey page link."
          }
        ]
      },
      {
        "id": "s5-d60",
        "label": "60-day graduate check-in",
        "kind": "External · Email / call",
        "owner": "Student Services / Alumni",
        "trigger": "Graduation date is 60 days past",
        "timing": "60 days after graduation",
        "source": "PLAN",
        "status": "Planned",
        "emails": []
      },
      {
        "id": "s5-d90",
        "label": "90-day graduate check-in",
        "kind": "External · Email / call",
        "owner": "Student Services / Alumni",
        "trigger": "Graduation date is 90 days past",
        "timing": "90 days after graduation",
        "source": "PLAN",
        "status": "Planned",
        "emails": []
      },
      {
        "id": "s5-career",
        "label": "Career support / employer follow-up",
        "kind": "External · Email / human",
        "owner": "Student Services / BD",
        "trigger": "Graduate requests or needs career assistance",
        "timing": "According to individual need",
        "source": "PLAN",
        "status": "Planned",
        "emails": []
      },
      {
        "id": "s5-feedback",
        "label": "Satisfaction & service recovery",
        "kind": "External · Email / human",
        "owner": "Student Services",
        "trigger": "Feedback or unresolved student experience issue",
        "timing": "After feedback or issue identified",
        "source": "PLAN",
        "status": "Planned",
        "emails": []
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
        "status": "Planned",
        "emails": []
      },
      {
        "id": "c5-recovery",
        "label": "Issue-resolution follow-up",
        "kind": "External · Email / call",
        "owner": "Contracts & Field Operations",
        "trigger": "Client raises issue or service quality concern",
        "timing": "Per agreed recovery plan",
        "source": "SITE",
        "status": "Planned",
        "emails": []
      }
    ]
  },
  {
    "number": 6,
    "color": "#256F78",
    "student": "Recurring Relationships",
    "contract": "Recurring Relationships",
    "description": "Offer relevant continuing value, renewals, and expansion.",
    "entry": {
      "students": "The graduate's 30-day employment survey is received and they have not yet joined the AK9I Alumni program.",
      "contracts": "The client is satisfied and the contract is active and heading toward renewal."
    },
    "students": [
      {
        "id": "s6-replenish",
        "label": "Scent-kit and dog food offers",
        "kind": "External · Email",
        "owner": "Operations / BD",
        "trigger": "Graduate with recorded marketing consent",
        "timing": "Timing to be set",
        "source": "BUILD",
        "status": "Planned",
        "emails": [
          {
            "name": "First offer",
            "from": "enrollment@ak9i.com",
            "to": "The graduate (marketing consent required)",
            "subject": "Supplies for your working dog",
            "body": "Hi {!Contact.FirstName},\n\nAs an AK9I graduate, you know how important the right supplies are to keep your dog's training sharp. American K-9 Interdiction offers training scent kits and dog food for graduates.\n\nTo ask about availability and pricing, reply to this email or call (757) 304-9600.\n\nBest regards,\nThe AK9I Team\nAmerican K-9 Interdiction\n4007 Burdette Rd, Carrsville, VA 23315\nenrollment@ak9i.com | (757) 304-9600\n\nYou are receiving this email because you expressed interest in American K-9 Interdiction. To stop receiving these emails, reply with \"Unsubscribe\" and we will remove you from our list.\nAmerican K-9 Interdiction, 4007 Burdette Rd, Carrsville, VA 23315"
          },
          {
            "name": "Further recurring-product emails",
            "from": "enrollment@ak9i.com",
            "to": "The graduate (marketing consent required)"
          }
        ]
      },
      {
        "id": "s6-alumni",
        "label": "Alumni program invitation",
        "kind": "External · Email",
        "owner": "Student Services / Alumni",
        "trigger": "Survey received, Graduated and not yet in the Alumni program",
        "timing": "Timing to be set",
        "source": "BUILD",
        "status": "Sandbox",
        "emails": [
          {
            "from": "enrollment@ak9i.com",
            "to": "The graduate",
            "subject": "Join the AK9I Alumni program",
            "body": "Hi {!Contact.FirstName},\n\nWe would love to stay connected. The AK9I Alumni program keeps graduates in touch with each other and with our team.\n\nTo register, reply to this email and we will add you.\n\nBest regards,\nThe AK9I Team\nAmerican K-9 Interdiction\n4007 Burdette Rd, Carrsville, VA 23315\nenrollment@ak9i.com | (757) 304-9600\n\nYou are receiving this email because you expressed interest in American K-9 Interdiction. To stop receiving these emails, reply with \"Unsubscribe\" and we will remove you from our list.\nAmerican K-9 Interdiction, 4007 Burdette Rd, Carrsville, VA 23315",
            "missing": "Wording not yet written for the sentence with the alumni page link."
          }
        ]
      },
      {
        "id": "s6-lms",
        "label": "Continuing education & LMS update",
        "kind": "External · Email",
        "owner": "Alumni / Student Services",
        "trigger": "Relevant approved course or LMS content available",
        "timing": "Based on interests / consent",
        "source": "PLAN",
        "status": "Planned",
        "emails": []
      },
      {
        "id": "s6-refresher",
        "label": "Refresher training invitation",
        "kind": "External · Email",
        "owner": "Alumni / BD",
        "trigger": "Relevant refresher or workshop opportunity available",
        "timing": "Per event calendar",
        "source": "PLAN",
        "status": "Planned",
        "emails": []
      },
      {
        "id": "s6-events",
        "label": "Alumni event invitation",
        "kind": "External · Email",
        "owner": "Alumni / Student Services",
        "trigger": "Alumni event scheduled",
        "timing": "Before event, with preferences",
        "source": "PLAN",
        "status": "Planned",
        "emails": []
      },
      {
        "id": "s6-mentor",
        "label": "Mentoring opportunity",
        "kind": "External · Email",
        "owner": "Alumni / Student Services",
        "trigger": "Relevant voluntary mentor/mentee opportunity exists",
        "timing": "As appropriate",
        "source": "PLAN",
        "status": "Planned",
        "emails": []
      },
      {
        "id": "s6-billing",
        "label": "Renewal, failed payment & cancellation notice",
        "kind": "External · Transactional notice",
        "owner": "Operations / Finance",
        "trigger": "Approved recurring purchase/subscription status changes",
        "timing": "Upon relevant billing event",
        "source": "SITE",
        "status": "Planned"
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
        "status": "Planned",
        "emails": []
      },
      {
        "id": "c6-d60",
        "label": "Contract renewal — 60-day reminder",
        "kind": "External · Email / task",
        "owner": "Sales / Account Management",
        "trigger": "Contract end date is 60 days away",
        "timing": "60 days before end",
        "source": "REC",
        "status": "Planned",
        "emails": []
      },
      {
        "id": "c6-d30",
        "label": "Contract renewal — 30-day reminder",
        "kind": "External · Email / task",
        "owner": "Sales / Account Management",
        "trigger": "Contract end date is 30 days away",
        "timing": "30 days before end",
        "source": "REC",
        "status": "Planned",
        "emails": []
      },
      {
        "id": "c6-expand",
        "label": "Account expansion follow-up",
        "kind": "External · Email / meeting",
        "owner": "Sales + Contracts & Field Operations",
        "trigger": "Client expresses interest in more sites/services",
        "timing": "During account planning",
        "source": "PLAN",
        "status": "Planned",
        "emails": []
      }
    ]
  },
  {
    "number": 7,
    "color": "#0B4C82",
    "student": "Advocacy",
    "contract": "Advocacy",
    "description": "Invite willing customers into credible, permissioned advocacy.",
    "entry": {
      "students": "The graduate registers for the AK9I Alumni program. Advocacy asks go only to alumni who have given advocacy consent.",
      "contracts": "A satisfied client agrees to act as a reference or advocate."
    },
    "students": [
      {
        "id": "s7-consent",
        "label": "Testimonial / photo / video permission",
        "kind": "External · Consent request",
        "owner": "Marketing / Alumni",
        "trigger": "Graduate has credible outcome and expressed willingness",
        "timing": "After opt-in / eligibility check",
        "source": "PLAN",
        "status": "Planned"
      },
      {
        "id": "s7-review",
        "label": "Review invitation",
        "kind": "External · Email",
        "owner": "Marketing / Alumni",
        "trigger": "Positive, genuine relationship; review invitation appropriate",
        "timing": "Per approved outreach cadence",
        "source": "PLAN",
        "status": "Planned",
        "emails": []
      },
      {
        "id": "s7-referral",
        "label": "Referral invitation",
        "kind": "External · Email",
        "owner": "Marketing / BD",
        "trigger": "Alumnus volunteers interest in recommending AK9I",
        "timing": "As appropriate, never mandatory",
        "source": "PLAN",
        "status": "Planned",
        "emails": []
      },
      {
        "id": "s7-speaker",
        "label": "Alumni speaker / mentor invitation",
        "kind": "External · Email",
        "owner": "Alumni / Marketing",
        "trigger": "Graduation, event, or mentoring opportunity needs volunteers",
        "timing": "Before scheduled opportunity",
        "source": "PLAN",
        "status": "Planned",
        "emails": []
      },
      {
        "id": "s7-employer",
        "label": "Employer introduction request",
        "kind": "External · Email / human",
        "owner": "BD / Alumni",
        "trigger": "Qualified alum and employer connection established",
        "timing": "As appropriate with consent",
        "source": "PLAN",
        "status": "Planned",
        "emails": []
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
        "status": "Planned",
        "emails": []
      },
      {
        "id": "c7-case",
        "label": "Case-study / logo approval invitation",
        "kind": "External · Consent request",
        "owner": "Marketing / BD",
        "trigger": "Verifiable client result and permission opportunity exist",
        "timing": "Before any public reuse",
        "source": "PLAN",
        "status": "Planned"
      },
      {
        "id": "c7-peer",
        "label": "Peer introduction request",
        "kind": "External · Email / human",
        "owner": "BD / Account Management",
        "trigger": "Willing client identifies relevant peer contact",
        "timing": "After voluntary agreement",
        "source": "SITE",
        "status": "Planned",
        "emails": []
      },
      {
        "id": "c7-joint",
        "label": "Joint outreach invitation",
        "kind": "External · Email / meeting",
        "owner": "Marketing / BD",
        "trigger": "Client voluntarily agrees to participate",
        "timing": "Per approved joint plan",
        "source": "SITE",
        "status": "Planned",
        "emails": []
      }
    ]
  }
];
export const COMMUNICATION_RULES={
  "status": "Status as of October 27, 2026 · Live = running in production · Sandbox = built and in testing · Planned = not built yet",
  "cap": "Check the AK9I outreach limit of two unsolicited contacts per person in any rolling 30 days before outbound outreach; distinguish required service/transactional notices and applicable consent.",
  "sms": "SMS is not live. Informational consent, marketing consent and no-text preference must be recorded before any texting is enabled.",
  "stop": "Stop or reroute stage-specific messages on withdrawal, start-date change, opt-out, actual start, graduation, owner reassignment or stage change.",
  "ownership": "Every active record needs one accountable owner, source, next action and due date."
};
