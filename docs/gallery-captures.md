# Portfolio screenshot provenance — 2026-09-16

All nine additions are real application captures, not generated mockups. Exported as JPEG (quality 86, maximum dimension 1600 px), without retouching application content. Image dimensions in `gallery-data.js` reserve the correct gallery layout before lazy loading.

| Gallery files | Source | Capture |
| --- | --- | --- |
| `catchase-home`, `catchase-gameplay`, `catchase-guide`, `catchase-powerups` | CatChase `docs/app-store/screenshots/iphone-6.9/` | Existing Release captures from 2026-09-14, iPhone 17 Pro Max, build 3. Display name: Bubble Chase. |
| `bugcorp-menu`, `bugcorp-duel`, `bugcorp-cards`, `bugcorp-guide` | BugCorpGame / the-hive-3 | New Debug captures from 2026-09-16, iPhone 18 Pro / iOS 27 simulator. Opening hand is a real local match, not a multiplayer session. |
| `beambike-welcome` | the-hive-2 / BeamBike iOS | New Debug capture from 2026-09-16, iPhone 18 Pro / iOS 27 simulator. Sign-in screen only; no backend login or ride was exercised. |

## Build notes

- CatChase Release build succeeds with Xcode 27, but launch terminates in `UIApplicationEvaluateRuntimeIssueForNoSceneLifecycleAdoption`. Used the existing documented Release captures rather than changing the app lifecycle as part of portfolio work.
- Bug Corp Duel initially fails compiling `DeckBuilderScreen.groupedRoster` with “failed to produce diagnostic for expression.” A temporary copy under `/tmp/portfolio-bugcorp-source` replaces `compactMap`/`filter` with explicit typed loops that return the same groups. The original source was not edited.
- Bug Corp captures use existing debug launch arguments `AUTOSTART_LOCAL_DUEL` and `AUTOSHOW_GUIDE`. A temporary Debug-only `PORTFOLIO_CODEX` launch argument opens the existing card-library route without modifying that screen or its data.
- The card-library screen shows 132 cards; portfolio copy was updated to match.
- BeamBike builds and launches successfully. Its authenticated screens require a backend/session, so no synthetic map or ride screenshots were added.

These build checks and captures do not represent a full application regression test.

## Expanded selection — 2026-09-16

Six additional images bring the gallery to 37 screens across 11 projects.

| Gallery files | Source | Capture |
| --- | --- | --- |
| `orbit-ios`, `orbit-macos`, `orbit-settings` | `Desktop/MyProjects/LocalJira/docs/screenshots/{home,macos-home,macos-project-management}.png` | Existing real screenshots documented in the project README. Bundled demo workspace; local persistence, no cross-device sync or Jira integration implied. |
| `zoopal-stories` | PetDiary / ZooPal current source | New Debug simulator capture, iPhone 18 Pro / iOS 27, launched with the existing `--uitesting` argument. Shows built-in stories home without a signed-in account. No backend or health-workflow verification implied. |
| `karolina-home`, `karolina-services` | `Desktop/MyProjects/karolina-prevodi/karolina-prevodi` | New browser captures of the local site, Serbian hero and English service catalog. Language switch exercised; no form submitted. |

Images exported as JPEG, quality 88, maximum dimension 1600 px, preserving complete source frames and aspect ratios. No generated mockups or UI retouching.

ZooPal and ManagerMacOS both built successfully into `/tmp` using Xcode. Native macOS UI capture timed out; Football Director was therefore not added from an unverified design preview. Original application source files were not edited. This was capture preparation, not a full regression test.

## Four-app refresh — 2026-09-24

The featured albums now contain BugCorpGame (4), Kuvar (4), Translato (4), and Cute Bubble Chase (6). Other albums remain available: 43 screens across 12 projects total. Existing source captures were reviewed and reused; no new app build or capture was required in this pass.

- `bugcorp-202609-*`: `Desktop/MyProjects/hiveProjects/the-hive-3/docs/app-store/screenshots/06-duel.png`, `02-collection.png`, `01-store.png`, `05-pack-reveal.png`. Replaces the earlier Debug album with the current duel, collection, pack and card-reveal screens. No real purchase or multiplayer session is claimed.
- `kuvar-202609-*`: `Desktop/MyProjects/Kuvar/Kuvar/docs/app-store/screenshots/iphone/{01-home,02-recipe-detail,03-cooking}.png` and `ipad/02-recipe-detail.png`. Source README documents native UI-test captures from 2026-09-24 with bundled recipes. Replaces the old gallery set.
- `translato-*`: `Desktop/MyProjects/Translato/build/qa/{editor,document-preview,translation-memory,find-replace}.png`. Native Mac QA captures showing a sample English-to-Serbian travel guide, not customer documents.
- `cute-bubble-*`: `Desktop/MyProjects/CatChase/docs/app-store/screenshots/iphone-6.9/{02-home,01-gameplay,03-how-to-play,04-powerups}.png` and `ipad-13/{02-home,01-gameplay}.png`. Existing Release screenshots documented in the source README. Cute Bubble Chase is the portfolio title; the captured game UI says Bubble Chase. These are existing build 3 screens, not a claim of a new capture date.

All 18 selected source images were visually inspected. JPEG delivery assets preserve the full frame and aspect ratio, max dimension 2000 px, quality 90. No UI content was retouched. Prior images remain on disk but the replaced sets are no longer listed in the gallery.

## Visual refresh — 2026-09-29

- BugCorpGame: replaced all four album images with the September 27 release-candidate captures in `Desktop/MyProjects/hiveProjects/the-hive-3/docs/app-store/rc-2026-09-27/upload-screenshots/rc3-{01-duel,02-collection,03-menu,04-store}.png`. Shows the redesigned home, battlefield, executive artwork and procurement. No purchase or multiplayer verification implied.
- Slikovnica: added four actual app captures from `Desktop/MyProjects/iOS Slikovnica/Docs/Previews/`: `iphone-playful-English-home.png`, `iphone-playful-English-palette.png`, `iphone-playful-Public-gallery.png`, and `iphone-Saved-drawings.png`. Shows the illustrated home, coloring tools, dinosaur collection and saved drawing. Feature copy checked against the project README; disabled narration is not advertised.
- Kuvar: replaced the cooking screen with `Desktop/MyProjects/Kuvar/Kuvar/docs/screenshots/localization-english-iphone.png`, demonstrating English localization and the running timer.

All nine selected images visually reviewed. Exported with full frames, EXIF orientation applied, maximum dimension 2000px, JPEG quality 90. Existing source screenshots reused without UI retouching or new builds. Versioned filenames prevent stale image caches. Other albums retained; gallery now contains 47 screens across 13 projects.

## ZooPal album — 2026-09-29

Expanded ZooPal to five screens: four existing Android development captures (`profile-light.png`, `care-calendar.png`, `measurements.png`, `virtual-companion.png`) from `Desktop/MyProjects/PetDiary/PetDiary/PetDiaryAndroid/docs/screenshots/`, plus the existing iOS stories home. All four additions visually reviewed and exported as full-frame JPEGs, quality 90, max 2000px. Captions explicitly identify platforms; project copy notes Android parity remains in progress. No new build, account login, sync or production verification performed. Gallery now contains 51 screens across 13 projects.

## Release screenshot refresh — 2026-10-05

Replaced the full Kuvar and Slikovnica albums with visually inspected existing release screenshots. Kuvar now has six images (three iPhone, three landscape iPad), sourced from `Desktop/MyProjects/Kuvar/Kuvar/docs/app-store/releases/1.01/screenshots/{iphone,ipad}/{01-home,02-recipe-detail,03-cooking}.png`, dated October 1. Slikovnica has four images from `Desktop/MyProjects/iOS Slikovnica/Docs/Release/Screenshots/iPhone-6.9/en-{01-home,02-free-drawings,03-coloring,04-dinosaur-previews}.png`, dated September 30.

All ten images preserve the complete frame and EXIF orientation, exported at JPEG quality 90 with a maximum dimension of 2000px. New filenames avoid stale caches. Kuvar is now the first album. Other albums retained where no newer app screenshot set was identified. Gallery contains 53 screens across 13 projects. No new application builds or purchase verification were performed.

## Pet Buddy and NoteVita — 2026-10-12

Added ten screenshots per app: five iPhone and five iPad. Pet Buddy uses existing release captures from `.codex/worktrees/petdiary-local/PetDiary/PetDiary/ReleasePreparation/screenshots/{iphone,ipad}/`: home, pets, calendar, Plus report options and Plus trends. NoteVita uses `Desktop/MyProjects/HealthTrackingOffline/Documentation/AppStore/screenshots/{iphone-69,ipad-13}/`: today, diary, health, trends and backup.

All twenty source frames were visually reviewed and exported as full-frame JPEGs at quality 90, maximum 2000px. Screens show sample data. No app rebuild, purchase or production verification was performed. ZooPal's older iOS/Android development album remains separate from the current native Pet Buddy release. Project descriptions and both downloadable CV variants now include the new independent products.


## Recent independent projects — 2026-10-26

Added seven albums and fourteen existing, visually reviewed captures. Delivery files preserve complete source frames, maximum dimension 2000px, JPEG quality 90. No application UI was retouched and no source app was rebuilt. Capture dates are historical; the delivery filenames identify the portfolio update date.

| Album / files | Source | Notes |
| --- | --- | --- |
| Nebnik · `nebnik-20261026-*` (3) | `Claude/Projects/Horoskop/store/screenshots/ready/en-US/{01-sky-today,02-myth-library,05-dream-book}.jpg` | Native English iPhone UI: sky, mythology library and dream book. No current App Review or purchase-status claim. |
| StorageLens · `storagelens-20261026-*` (2) | `Desktop/MyProjects/StorageLens/AppStore/screenshots/en-US/{01-inspect,03-duplicates}.jpg` | Existing Store-edition artwork with actual native app captures. Files belong to the synthetic `/tmp/StorageLens-store-fixture-Sample` dataset. The full unsandboxed tool is not conflated with this edition. |
| Neon Rebels · `neon-rebels-20261026-*` (2) | `Desktop/MyProjects/Poljoprivreda/metadata/screenshots/en-US/store-build6/{iphone/01-gameplay,ipad/02-boss}.png` | iPhone solo gameplay and iPad boss practice. Release name verified in `docs/app-store-name.md`; prior project name Duo Rescue. No internet multiplayer or co-op-session capture claim. |
| Touchline Atlas — macOS · `touchline-macos-20261026-*` (2) | `Desktop/MyProjects/ManagerMacOS/ReleasePreparation/Artifacts/appstore-{career,tactics}.png` | Real native Mac release captures, not the repository's design-preview images. Fictional Avelara Athletic career. Former project name Football Director; separate from the existing iPhone/iPad album. |
| Wellness Spot · `wellness-spot-20261026-*` (2) | `Desktop/wellness-spa-food-center/docs/operations/evidence/customer-workspace-2026-10-25/{chromium-overview-desktop,webkit-pregled-phone}.png` | Responsive web QA captures. The associated evidence document explicitly identifies isolated synthetic customer and measurement fixtures; no live personal health records. |
| Sjaj · `sjaj-20261026-*` (2) | `Claude/Projects/Sjaj/design/shots/{manager-today/desktop-light,client-booking/mobile-light}.png` | Browser captures of the documented seeded demo business, not production customer jobs. The phone frame is web, not a native app capture. |
| The Last Inquisitor · `last-inquisitor-20261026-ipad.jpg` (1) | `Desktop/MyProjects/⚔️ THE LAST INQUISITOR/planning/validation/m1-landmarks-ipad-20261025/ipad-m1.png` | Actual iPad development build: forest/chapel environment, touch camera and placeholder hunter. Explicitly marked in development; locomotion and combat are not implemented. |

All seven projects have matching Projects cards, descriptions, technology tags and View screenshots links. New albums lead the gallery. Existing albums remain intact: **87 screens across 22 projects** total. Full source-path manifest is retained locally in `output/duo-qa/gallery-additions-sources.json`.

## Five-image album rule — 2026-10-26

The current gallery is curated to **15 albums × exactly 5 screenshots = 75 images**. Seventeen existing real captures were added after visual inspection. Larger albums were reduced to five representative workflows, retaining iPhone/iPad examples where available. Original media remains on disk.

BeamBike, StorageLens, The Last Inquisitor, Orbit, Karolina Prevodi, ServiceHub and iMovo are excluded until five distinct quality screenshots are ready. Their project descriptions remain in Projects; screenshot badges and gallery buttons are absent. Their existing registry entries are preserved in `docs/gallery-pending.json`, which is not loaded by the page. Incomplete albums are also excluded by the runtime; `node scripts/validate-gallery.mjs` checks the five-image rule, unique paths, metadata and local files.

| Album / additions | Existing source captures | Notes |
| --- | --- | --- |
| Nebnik (+2) | `Claude/Projects/Horoskop/store/screenshots/ready/en-US/{03-constellation-story,04-bestiary}.jpg` | Constellation story and bestiary Plus preview. |
| Neon Rebels (+3) | `Desktop/MyProjects/Poljoprivreda/metadata/screenshots/en-US/iphone-build6/{01-menu,04-garage,07-strider-combat}.png` | Main menu, garage and Iron Strider boss practice; no co-op session implied. |
| Touchline Atlas — macOS (+3) | `Desktop/MyProjects/ManagerMacOS/ReleasePreparation/Artifacts/{appstore-main-menu-final,appstore-squad,appstore-shop-review-2560x1600}.png` | Real native app release captures, including historical shop UI; no purchase made or current price verification. |
| Wellness Spot (+3) | `Desktop/wellness-spa-food-center/docs/operations/evidence/customer-workspace-2026-10-25/{chromium-napredak-phone,active-nutrition-portrait-top,webkit-paketi-phone}.png` | Progress, nutrition and packages. Isolated synthetic fixture data as documented by the source evidence. Short landscape QA crops were rejected in favor of useful portrait views. |
| Sjaj (+3) | `Claude/Projects/Sjaj/design/shots/{manager-job/desktop-light,manager-job-new/desktop-light,client-rate/mobile-light}.png` | Job details, scheduling and rating form; documented seeded demo business. |
| Slikovnica (+1) | `Desktop/MyProjects/iOS Slikovnica/Docs/Release/Screenshots/iPad-13/en-03-coloring.png` | Existing iPad coloring screen complements four iPhone captures. |
| BugCorpGame (+1) | `Desktop/MyProjects/hiveProjects/the-hive-3/docs/app-store/rc-2026-09-27/build-4/09-pack-card-detail.png` | Card detail, no transaction performed. |
| Translato (+1) | `Desktop/MyProjects/Translato/build/qa/paywall-review.png` | Native macOS Pro upgrade view with purchase and restore options; historical capture. |

All additions preserve source frames and aspect ratios, JPEG quality 90, maximum dimension 2000px. No generated screens, retouching, new application builds or production interactions. Local full-path manifest: `output/duo-qa/five-image-addition-sources.json`.

## Admiral Insurance and Ding — 2026-10-26

Added nine official iPhone App Store promotional images as two client-project albums. The owner confirmed contribution to both iOS projects. App Store artwork is attributed to its publishers; current public visuals are not presented as personal screen captures or authorship of every shown feature.

- Admiral Insurance: [UK listing, ID 1461457136](https://apps.apple.com/gb/app/admiral-insurance/id1461457136), Admiral group / EUI Limited. All four published iPhone images: policy overview, login, additional cover and policy actions. The owner explicitly approved a four-image exception to the five-image rule; `gallerySize: 4` is shared by runtime eligibility and the validator. No duplicate or invented fifth image.
- Ding Top-up: Mobile Recharge: [US listing, ID 425228767](https://apps.apple.com/us/app/ding-top-up-mobile-recharge/id425228767), ezetop / ezetop ltd. All five published iPhone images: home, amount selection, products, history/repeat top-up and confirmation.

Apple Lookup API provided the image URLs. Downloaded Apple CDN JPEG renditions at a maximum dimension of 2000px (Admiral 923×2000, Ding 924×2000), preserving the complete promotional artwork. All nine images visually inspected; bytes copied into the gallery without retouching or cropping. Complete source URL/publisher manifest: `docs/app-store-client-screenshots.json`. Both existing project cards now link to their albums and official App Store pages. Total: **17 albums / 84 images**; all other albums retain their five-image rule.
