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
