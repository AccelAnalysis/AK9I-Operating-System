# AK9I Operating System Recommendation

Modular interactive presentation for the AK9I management operating system, brand system, and end-to-beginning customer pipeline recommendations.

## Live presentation

**Full operating system:**  
https://accelanalysis.github.io/AK9I-Operating-System/

**Five-slide executive summary:**  
https://accelanalysis.github.io/AK9I-Operating-System/executive/

The executive summary is a separate entry point for concise leadership review. It links into the supporting Management, Brand, and Customer Pipeline sections without changing the full presentation.

The included Pages workflow deploys the entire `site/` directory whenever `main` changes.

> Deployment status: GitHub Pages workflow installed on `main`.

## Modular structure

```text
site/
  index.html                         # Full presentation shell / controls
  executive/
    index.html                       # Standalone five-slide executive summary
    executive.css                    # Executive mini-deck layout, responsive and print styling
    executive.js                     # Slide navigation, fullscreen and Print/PDF controls
  assets/
    css/
      theme.css                      # AK9I brand tokens: colors, stage dimensions
      presentation.css               # Core presentation layout and components
      org-chart-v2.css               # Org-chart menus and legacy compatibility
      deck-refinements.css           # Deck-specific refinements
      authority-chart.css            # Direct-report hierarchy styling
      functional-work-chart.css      # Primary functional-work chart styling
      contract-lane.css              # Contract / Field Operations customer lane
      pipeline-seven-stage.css       # Seven-stage student/contract pipeline fit overrides
      pipeline-communications.css    # Interactive communications cascade and node inspector
    js/
      app.js                         # Navigation, fullscreen, overview, interactions
      renderers.js                   # Detail and sources rendering
      role-page.js                   # Linked job-description page renderer
      data/
        employees.js                 # Shared employee roster for org-chart selectors
        org-roles.js                 # Reporting hierarchy, teams, defaults, relationships
        functional-work.js           # Major work displayed under each functional owner
        org-storage.js               # Versioned browser-local draft assignments
        job-descriptions.js          # Base job-description content
        authority-job-overrides.js   # Approved authority and growth-function profiles
        main-slides.js               # Executive slide index / overview metadata
        pipeline-communications.js   # 76 source-aligned Student / Contract communications
        details.js                   # Detail-slide registry
      components/
        shared.js                    # Slide chrome, action buttons, pipeline stage helper
        functional-work-chart.js     # Primary owner + work-scope visualization
        org-chart.js                 # Linked native reporting-hierarchy view
        flight-plan.js               # Business Flight Plan visualization
        pipeline-chart.js            # Canonical seven-stage clickable student pipeline
        contract-lane.js             # Contract / Field Operations pipeline translation
        pipeline-communications.js   # Cascade rendering, lane filters, focus and details
      slides/
        opening.js                   # Slides 1–2
        management.js                # Slides 3–6 plus linked hierarchy view
        brand.js                     # Slides 7–10
        pipeline.js                  # Pipeline slides, including interactive communications map (slide 14)
        closing.js                   # Slide 22
      details/
        management.js                # Linked management detail content
        brand.js                     # Linked brand detail content
        pipeline.js                  # Linked pipeline / advocacy detail content
  roles/index.html                   # Shared route for all linked job descriptions
.github/workflows/pages.yml          # GitHub Pages deployment
```

## Executive summary

The `/executive/` route is intentionally independent from the full slide application. It uses five focused slides:

1. **High-Level Recommendation** — the recommendation and three overall operating-system actions only.
2. **Management Operating System** — four immediate actions, expected result, and a link to the full Management section.
3. **AK9I Brand System** — four immediate actions, expected result, and a link to the full Brand section.
4. **Customer Pipeline — End to Beginning** — four immediate actions, expected result, and a link to the full Pipeline section.
5. **Immediate Leadership Decisions** — Confirm the Structure → Approve the Standards → Authorize the Pipeline Sequence, a note that implementation detail will be covered in the working meeting, and the Brawner Group value foundation.

The executive summary supports keyboard navigation, fullscreen presentation, and five-page landscape Print/PDF output. Update its content in `site/executive/index.html`, layout in `site/executive/executive.css`, and navigation behavior in `site/executive/executive.js`.

## Organization views

The presentation deliberately uses two organizational views because they answer different questions:

1. **Functional Work Chart — primary slide:** Who owns each functional category, and what major work belongs inside that function?
2. **Reporting Hierarchy — linked view:** Who directly reports to whom?

On the hierarchy view:
- Solid lines represent direct personnel reporting and supervisory authority.
- Dotted relationships represent coordination, contracted execution, deployment tasking, or transition.

Linked job-description pages answer **what each position is accountable for in detail**. Customer-pipeline slides answer **how work and customers move between functions**.

## Customer Pipeline authority

The same seven numbered stages apply to both customer lanes, but Stages 3 and 4 use **different, exact names**. Use lane-specific names in the Operating System, lifecycle reports, and CRM stage values; never combine them into a single stage value.

| # | Student / education lane | Contract-client lane |
|---|---|---|
| 1 | Awareness | Awareness |
| 2 | Consideration | Consideration |
| 3 | **Enrollment** | **Commitment / Award** |
| 4 | **Training & Experience** | **Service Delivery** |
| 5 | Loyalty | Loyalty |
| 6 | Recurring Relationships | Recurring Relationships |
| 7 | Advocacy | Advocacy |

**Operating ownership and handoffs**

- **Awareness:** Marketing owns campaigns, source capture and content. Business Development (BD) owns targeted relationship development and strategic outreach. A qualified prospect entering active Consideration receives a named Sales owner.
- **Consideration:** **Sales owns active qualified prospect records** for both lanes. BD develops and sustains relationships; Student Services provides admissions, eligibility, program and funding expertise to student prospects. Supporting functions do not create duplicate record ownership.
- **Student Enrollment:** **Sales remains accountable through acceptance**, including application conversion. **At acceptance, Student Services becomes the accepted-student relationship owner through actual course start.** School Administration, Admissions/Registrar, and the designated School Certifying Official (SCO) handle regulated admissions, records, and benefits in support. **At actual course start, Training assumes Stage 4 ownership**, supported by Student Services, Kennels, and Facilities.
- **Contract Commitment / Award:** **Sales owns proposals, negotiations and commercial conversion through execution.** **Contracts & Field Operations owns delivery after the executed agreement and complete operating handoff**, not merely upon opportunity qualification.
- **Loyalty:** Student Services/Alumni leads graduate relationship follow-up with Training/BD support; Contracts & Field Operations leads contract-client outcomes and account health with Sales support. Graduate outcomes and placement are part of Loyalty, not a separate stage.
- **Recurring Relationships:** Alumni/Student Services coordinates student continuity with BD, Operations and Finance support; Sales/Account Management owns contract commercial renewals and expansion with Contracts & Field Operations support.
- **Advocacy:** Marketing/BD coordinates voluntary advocacy with Alumni and contract account owners; requests require credible evidence and appropriate consent or permission.

**One owner per record:** Every active Salesforce record requires one named accountable person, a next action and date, and source. Transfer ownership at the operational handoff while retaining functional contributions from supporting teams. Other formal stage entry/exit criteria and automation triggers must be defined and verified separately; this documentation does not claim the Salesforce org is configured.

**Governance:** The [2027–2031 Strategic Plan](strategy/AK9I-2027-2031-Strategic-Plan.md#area-22--salesforce-crm-the-seven-stage-ak9i-customer-pipeline-and-communications) allocates shared functional responsibilities. The [Operating System presentation](https://accelanalysis.github.io/AK9I-Operating-System/#s13), its stage details, and linked job descriptions define accountable operating ownership and handoffs.

Leadership-review draft: [2027–2031 Strategic Plan v2 (rev. 2026-10-14)](strategy/AK9I-2027-2031-Strategic-Plan-v2-rev-2026-10-14.md).

## Interactive Student / Contract communications slide

**Open slide 14:** [AK9I Pipeline Communications Map](https://accelanalysis.github.io/AK9I-Operating-System/#s13m)

This interactive slide extends the seven-stage pipeline without modifying the exact lane-specific stage names. Cascading connectors emerge from each stage and branch to yellow **Student** nodes and blue **Contract** nodes. Dashed nodes represent internal tasks or alerts rather than external correspondence.

- **Both lanes / Students / Contracts** filters make each audience's communication path readable.
- **Select a stage** to expand its Student and Contract nodes; **All stages** returns to the complete waterfall view.
- **Select any communication node** for owner, delivery type, proposed triggering event, timing, and whether the communication is from the strategic plan, Operating System, or a recommendation.
- **Escape** closes a communication detail or focused view before returning to normal deck navigation.
- **Source and safety boundaries:** This is a prospective communications blueprint, **not a live Salesforce configuration audit**. Proposed triggers and proposed timings are flagged. The AK9I unsolicited-contact cap, opt-outs, sequence transitions and currently disabled SMS are explicitly called out. The slide does not send messages or modify Salesforce records.

Content lives in `site/assets/js/data/pipeline-communications.js`; presentation and interactions live in `site/assets/js/components/pipeline-communications.js`; styling is `site/assets/css/pipeline-communications.css`.

## Common updates

### Change the work shown under a functional category
Edit `site/assets/js/data/functional-work.js`. This changes the primary functional-work chart without changing reporting authority.

### Change an employee, reporting line, or org-chart role
Edit `site/assets/js/data/org-roles.js`. Nested `children` create solid-line reporting trees in the linked hierarchy view. The in-presentation selectors remain interactive and save presenter choices as browser-local drafts.

### Add or remove employee names from dropdowns
Edit `site/assets/js/data/employees.js`.

### Change detailed role authority or job descriptions
Edit `site/assets/js/data/authority-job-overrides.js` for current authority decisions, or `site/assets/js/data/job-descriptions.js` for base role content.

### Change management slides
Edit `site/assets/js/slides/management.js` and, when needed, `site/assets/js/details/management.js`.

### Change brand slides
Edit `site/assets/js/slides/brand.js` and `site/assets/js/details/brand.js`.

### Change pipeline or advocacy content
Edit `site/assets/js/slides/pipeline.js` and `site/assets/js/details/pipeline.js`. The canonical student pipeline is in `site/assets/js/components/pipeline-chart.js`; the contract lane is in `site/assets/js/components/contract-lane.js`.

### Change colors or core brand tokens
Edit `site/assets/css/theme.css`.

### Change layout / visual styling
Edit the relevant modular stylesheet under `site/assets/css/`.

## Local preview

Because the full presentation uses native ES modules, preview it through a small local web server rather than opening `index.html` directly from Finder:

```bash
cd site
python3 -m http.server 8080
```

Then open:

- Full presentation: `http://localhost:8080/`
- Executive summary: `http://localhost:8080/executive/`

## Deployment

Every push to `main` triggers `.github/workflows/pages.yml`. The workflow uploads the complete `site/` directory and deploys it to GitHub Pages.
