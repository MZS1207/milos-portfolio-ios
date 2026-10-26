# Miloš Stevanović - iOS Developer Portfolio

A single-page portfolio styled as a native iOS app, built with plain HTML/CSS/JS - no framework, no build step.

**Live**: https://mzs1207.github.io/milos-portfolio-ios/

## What's inside

Five tab "screens" with swipe, keyboard and tab-bar navigation, deep links per tab (`#projects`, `#gallery`), a light/dark theme (remembers your choice), and iOS-style detail sheets:

- **About** - profile, stats, iMessage-style intro, quick actions (email, phone, LinkedIn, GitHub, CV download), education
- **Skills** - core expertise, architecture, AI tooling and practices, each tappable for details
- **Experience** - timeline with per-role detail modals
- **Projects** - Selected apps across enterprise, healthcare, fintech and AI-built personal work; project sheets can jump straight to their screenshots in the Gallery
- **Gallery** - a fold-out project library with album covers, uncropped screenshots, captions and a fullscreen viewer with a thumbnail filmstrip. Albums contain five screenshots, with an approved four-image exception for Admiral Insurance. Landscape screenshots span the full album width; viewer controls support touch and keyboard

On phones the app runs edge-to-edge. Larger screens show a titanium-inspired iPhone Duo concept: opening Gallery unfolds a second display, with the project library on the cover and screenshots on the inside. Below 840 CSS px the gallery uses a single spacious display and a native project picker. Closing Gallery returns to the previous portfolio tab. The device is an original portfolio concept, not an Apple product specification.

## Project structure

```
index.html          markup for all screens + SEO meta & JSON-LD
styles.css          design tokens (iOS palette, spacing, radii) + components
duo.css             foldable shell, adaptive gallery and viewer styling
app-safari.js       app logic: tabs, theme, modals, gallery, lightbox
content-data.js     EDIT HERE - projects / skills / experience content
gallery-data.js     EDIT HERE - gallery media registry
gallery/            optimized screenshots (max 2000px)
docs/gallery-pending.json  incomplete albums, excluded from the site
scripts/validate-gallery.mjs  validates the five-screenshot rule
.github/workflows/  GitHub Pages deployment (Actions)
```

## Editing content

- **Text content** (projects, skills, experience): edit `content-data.js` - logic in `app-safari.js` never needs to change.
  - A project with `gallery: '<Project name>'` gets a **View screenshots** button only when its album contains the expected number of distinct images: five by default, or an explicitly approved `gallerySize` in `content-data.js`.
  - A project with `links: [{ label, url }]` gets external link buttons (GitHub, App Store, demo video, write-up).
- **Gallery media**: each visible album defaults to **exactly five distinct, quality screenshots**. Admiral Insurance has an owner-approved exception of four, matching its complete official App Store set (`gallerySize: 4`). Curate complete albums in `gallery-data.js` (`type: 'image'`, `src`, `width`, `height`, `project`, `caption`). Preserve full frames, maximum 2000px. Keep incomplete sets in `docs/gallery-pending.json`; their Projects descriptions remain visible. Run `node scripts/validate-gallery.mjs` after editing. The runtime also hides albums that violate their expected size.
- After changing `styles.css`, `duo.css`, `app-safari.js` or `content-data.js`, bump its `?v=` query parameter in `index.html` to bust caches.

## Running locally

No build required - open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8899
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy-pages.yml`, which publishes the site to GitHub Pages via Actions (the legacy Jekyll branch builder is not used). The workflow can also be run manually from the Actions tab (`workflow_dispatch`).

Day-to-day flow: work on `develop`, then `git push origin develop develop:main`.

## Accessibility

Every tappable row is a keyboard-operable button (Tab / Enter / Space), dialogs trap focus and restore it on close, focus rings are visible only for keyboard users, and all motion is disabled under `prefers-reduced-motion`.

## Design notes

iOS-inspired design tokens live at the top of `styles.css`: system palette (`#007AFF` blue, `#34C759` green, `#FF9500` orange, `#5856D6` indigo), 4px spacing scale, SF-like typography via Inter. Dark mode tokens mirror iOS dark palette; theme resolves before first paint to avoid a flash.

## Screenshot provenance

Gallery additions and simulator build notes are recorded in [docs/gallery-captures.md](docs/gallery-captures.md). The gallery currently includes **84 screenshots across 17 projects: sixteen albums of five and Admiral Insurance with four**. Client-app sources are recorded in [docs/app-store-client-screenshots.json](docs/app-store-client-screenshots.json). BeamBike and six other incomplete albums are hidden until five quality screenshots are available. Their project descriptions and original media are preserved.

## Updating the downloadable CV

`MilosStevanovicResume.pdf` is the approved default CV: the two-page visual resume with a photo, Senior Software Engineer title, and Admiral Insurance (four years at Endava). The primary **Download CV** action serves this file. Replace it only with an approved updated PDF, preserve its layout, and bump its download query version in `index.html`.

`MilosStevanovicResume-Platform.pdf` remains a separate iOS/macOS-focused alternative. `cv/build_resume.py` generates the older text-based variants; it is not the source of the approved visual CV. When using that generator, pass an explicit `--output` path to avoid overwriting the default resume. Render and review both pages after any PDF content edits.
