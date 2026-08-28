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
        details.js                   # Detail-slide registry
      components/
        shared.js                    # Slide chrome, action buttons, pipeline stage helper
        functional-work-chart.js     # Primary owner + work-scope visualization
        org-chart.js                 # Linked native reporting-hierarchy view
        flight-plan.js               # Business Flight Plan visualization
        pipeline-chart.js            # Original native clickable student pipeline
        contract-lane.js             # Contract / Field Operations pipeline translation
      slides/
        opening.js                   # Slides 1–2
        management.js                # Slides 3–6 plus linked hierarchy view
        brand.js                     # Slides 7–10
        pipeline.js                  # Slides 11–20
        closing.js                   # Slide 21
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
Edit `site/assets/js/slides/pipeline.js` and `site/assets/js/details/pipeline.js`. The original student pipeline is in `site/assets/js/components/pipeline-chart.js`; the contract lane is in `site/assets/js/components/contract-lane.js`.

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
