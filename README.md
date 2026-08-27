# AK9I Operating System Recommendation

Modular interactive presentation for the AK9I management operating system, brand system, and end-to-beginning customer pipeline recommendations.

## Live presentation

Once GitHub Pages has deployed `main`, the presentation is available at:

**https://accelanalysis.github.io/AK9I-Operating-System/**

The included Pages workflow uses GitHub Actions and attempts to enable Pages automatically on first deployment.

> Deployment status: GitHub Pages workflow installed on `main`.

## Modular structure

```text
site/
  index.html                         # Presentation shell / controls only
  assets/
    css/
      theme.css                      # AK9I brand tokens: colors, stage dimensions
      presentation.css               # Core presentation layout and components
      org-chart-v2.css               # Org-chart menus and legacy compatibility
      deck-refinements.css           # Deck-specific refinements
      authority-chart.css            # Direct-report trees and authority styling
      contract-lane.css              # Contract / Field Operations customer lane
    js/
      app.js                         # Navigation, fullscreen, overview, interactions
      renderers.js                   # Detail and sources rendering
      role-page.js                   # Linked job-description page renderer
      data/
        employees.js                 # Shared employee roster for org-chart selectors
        org-roles.js                 # Reporting hierarchy, teams, defaults, relationships
        org-storage.js               # Versioned browser-local draft assignments
        job-descriptions.js          # Base job-description content
        authority-job-overrides.js   # Approved authority and growth-function profiles
        main-slides.js               # Executive slide index / overview metadata
        details.js                   # Detail-slide registry
      components/
        shared.js                    # Slide chrome, action buttons, pipeline stage helper
        org-chart.js                 # Native interactive authority chart
        flight-plan.js               # Business Flight Plan visualization
        pipeline-chart.js            # Original native clickable student pipeline
        contract-lane.js             # Contract / Field Operations pipeline translation
      slides/
        opening.js                   # Slides 1–2
        management.js                # Slides 3–6
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

## Authority model

- Solid lines represent direct personnel reporting and supervisory authority.
- Dotted relationships represent coordination, contracted execution, deployment tasking, or transition.
- The organizational chart answers **who reports to whom**.
- Linked job-description pages answer **what each position owns**.
- Customer-pipeline slides answer **how the customer moves between functions**.

## Common updates

### Change an employee, reporting line, or org-chart role
Edit `site/assets/js/data/org-roles.js`. Nested `children` create solid-line reporting trees. The in-presentation selectors remain interactive and save presenter choices as browser-local drafts.

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

Because the presentation uses native ES modules, preview it through a small local web server rather than opening `index.html` directly from Finder:

```bash
cd site
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deployment

Every push to `main` triggers `.github/workflows/pages.yml`. The workflow uploads only the `site/` directory and deploys it to GitHub Pages.
