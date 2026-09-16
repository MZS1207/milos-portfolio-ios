# Miloš Stevanović - iOS Developer Portfolio

A single-page portfolio styled as a native iOS app, built with plain HTML/CSS/JS - no framework, no build step.

**Live**: https://mzs1207.github.io/milos-portfolio-ios/

## What's inside

Five tab "screens" with swipe, keyboard and tab-bar navigation, deep links per tab (`#projects`, `#gallery`), a light/dark theme (remembers your choice), and iOS-style detail sheets:

- **About** - profile, stats, iMessage-style intro, quick actions (email, phone, LinkedIn, GitHub, CV download), education
- **Skills** - core expertise, architecture, AI tooling and practices, each tappable for details
- **Experience** - timeline with per-role detail modals
- **Projects** - 21 selected apps across enterprise, healthcare, fintech and AI-built personal work; project sheets can jump straight to their screenshots in the Gallery
- **Gallery** - project albums with uncropped screenshots, captions, counted project filters and a fullscreen viewer (images & video). Landscape screenshots span the full album width; viewer controls support touch and keyboard

On phones the app runs edge-to-edge; on tablets and desktops it renders as a centred iPhone mockup on a glassmorphism backdrop.

## Project structure

```
index.html          markup for all screens + SEO meta & JSON-LD
styles.css          design tokens (iOS palette, spacing, radii) + components
app-safari.js       app logic: tabs, theme, modals, gallery, lightbox
content-data.js     EDIT HERE - projects / skills / experience content
gallery-data.js     EDIT HERE - gallery media registry
gallery/            optimized screenshots (max 1600px)
.github/workflows/  GitHub Pages deployment (Actions)
```

## Editing content

- **Text content** (projects, skills, experience): edit `content-data.js` - logic in `app-safari.js` never needs to change.
  - A project with `gallery: '<Project name>'` (matching `gallery-data.js`) gets a **View screenshots** button that opens the Gallery pre-filtered.
  - A project with `links: [{ label, url }]` gets external link buttons (GitHub, App Store, demo video, write-up).
- **Gallery media**: drop a file into `gallery/` and add one entry to `gallery-data.js` (`type`, `src`, optional `poster` for video, `project`, `caption`). Keep images ≤ ~1600px; videos as H.264 MP4.
- After changing `styles.css`, `app-safari.js` or `content-data.js`, bump its `?v=` query parameter in `index.html` to bust caches.

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

Gallery additions and simulator build notes are recorded in [docs/gallery-captures.md](docs/gallery-captures.md). The gallery currently includes 31 screens across 8 projects, including Bubble Chase, Bug Corp Duel and BeamBike.
