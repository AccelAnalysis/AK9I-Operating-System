# AK9I Operating System Recommendation

Modular interactive presentation for the AK9I management operating system, brand system, and end-to-beginning customer pipeline recommendations.

## Live presentation

Once GitHub Pages has deployed `main`, the presentation is available at:

**https://accelanalysis.github.io/AK9I-Operating-System/**

The included Pages workflow uses GitHub Actions and attempts to enable Pages automatically on first deployment.

## Modular structure

```text
site/
  index.html                         # Presentation shell / controls only
  assets/
    css/
      theme.css                      # AK9I brand tokens: colors, stage dimensions
      presentation.css               # Layout and component styling
    js/
      app.js                         # Navigation, fullscreen, overview, interactions
      renderers.js                   # Detail and sources rendering
      data/
        employees.js                 # Shared employee roster for org-chart selectors
        org-roles.js                 # Org-chart functions, defaults, responsibilities
        main-slides.js               # Executive slide index / overview metadata
        details.js                   # Detail-slide registry
      components/
        shared.js                    # Slide chrome, action buttons, pipeline stage helper
        org-chart.js                 # Native interactive organization chart
        flight-plan.js               # Flight Plan visualization
        pipeline-chart.js            # Native clickable customer pipeline
      slides/
        opening.js                   # Slides 1–2
        management.js                # Slides 3–6
        brand.js                     # Slides 7–11
        pipeline.js                  # Slides 12–20
        closing.js                   # Slide 21
      details/
        management.js                # Linked management detail content
        brand.js                     # Linked brand detail content
        pipeline.js                  # Linked pipeline / advocacy detail content
.github/workflows/pages.yml          # GitHub Pages deployment
```

## Common updates

### Change an employee or org-chart role
Edit `site/assets/js/data/org-roles.js`. The in-presentation selectors remain interactive and save presenter choices in browser `localStorage`.

### Add or remove employee names from dropdowns
Edit `site/assets/js/data/employees.js`.

### Change management slides
Edit `site/assets/js/slides/management.js` and, when needed, `site/assets/js/details/management.js`.

### Change brand slides
Edit `site/assets/js/slides/brand.js` and `site/assets/js/details/brand.js`.

### Change pipeline or advocacy content
Edit `site/assets/js/slides/pipeline.js` and `site/assets/js/details/pipeline.js`. The clickable pipeline itself is in `site/assets/js/components/pipeline-chart.js`.

### Change colors or core brand tokens
Edit `site/assets/css/theme.css`.

### Change layout / visual styling
Edit `site/assets/css/presentation.css`.

## Local preview

Because the presentation uses native ES modules, preview it through a small local web server rather than opening `index.html` directly from Finder:

```bash
cd site
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deployment

Every push to `main` triggers `.github/workflows/pages.yml`. The workflow uploads only the `site/` directory and deploys it to GitHub Pages.
