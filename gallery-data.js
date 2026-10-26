/* Gallery albums default to five distinct screenshots. Owner-approved
   exceptions use gallerySize in content-data.js (Admiral Insurance: four).
   Add a complete album to this registry; keep incomplete sets in
   docs/gallery-pending.json. Project descriptions stay in content-data.js.
   Run: node scripts/validate-gallery.mjs
   Fields: type ('image'), src, width, height, project, caption.
   Preserve full frames and aspect ratios; see docs/gallery-captures.md. */
window.GALLERY_ITEMS = [
    {
        "type": "image",
        "src": "gallery/admiral-appstore-20261026-home.jpg",
        "width": 923,
        "height": 2000,
        "project": "Admiral Insurance",
        "caption": "iPhone — Official App Store image — Policy overview and emergency assistance"
    },
    {
        "type": "image",
        "src": "gallery/admiral-appstore-20261026-login.jpg",
        "width": 923,
        "height": 2000,
        "project": "Admiral Insurance",
        "caption": "iPhone — Official App Store image — MyAccount login and registration"
    },
    {
        "type": "image",
        "src": "gallery/admiral-appstore-20261026-cover.jpg",
        "width": 923,
        "height": 2000,
        "project": "Admiral Insurance",
        "caption": "iPhone — Official App Store image — Additional insurance products"
    },
    {
        "type": "image",
        "src": "gallery/admiral-appstore-20261026-policy.jpg",
        "width": 923,
        "height": 2000,
        "project": "Admiral Insurance",
        "caption": "iPhone — Official App Store image — Policy details, documents and changes"
    },
    {
        "type": "image",
        "src": "gallery/ding-appstore-20261026-home.jpg",
        "width": 924,
        "height": 2000,
        "project": "Ding",
        "caption": "iPhone — Official App Store image — Top-up and voucher home"
    },
    {
        "type": "image",
        "src": "gallery/ding-appstore-20261026-amount.jpg",
        "width": 924,
        "height": 2000,
        "project": "Ding",
        "caption": "iPhone — Official App Store image — Choose a top-up amount"
    },
    {
        "type": "image",
        "src": "gallery/ding-appstore-20261026-products.jpg",
        "width": 924,
        "height": 2000,
        "project": "Ding",
        "caption": "iPhone — Official App Store image — Products and gift vouchers"
    },
    {
        "type": "image",
        "src": "gallery/ding-appstore-20261026-history.jpg",
        "width": 924,
        "height": 2000,
        "project": "Ding",
        "caption": "iPhone — Official App Store image — History and repeat top-ups"
    },
    {
        "type": "image",
        "src": "gallery/ding-appstore-20261026-confirmation.jpg",
        "width": 924,
        "height": 2000,
        "project": "Ding",
        "caption": "iPhone — Official App Store image — Completed top-up and receipt"
    },
    {
        "type": "image",
        "src": "gallery/nebnik-20261026-sky.jpg",
        "width": 924,
        "height": 2000,
        "project": "Nebnik",
        "caption": "iPhone — The sky today — moon, constellations and daily reading"
    },
    {
        "type": "image",
        "src": "gallery/nebnik-20261026-myths.jpg",
        "width": 924,
        "height": 2000,
        "project": "Nebnik",
        "caption": "iPhone — Myths — stories and mythology traditions"
    },
    {
        "type": "image",
        "src": "gallery/nebnik-20261026-dreams.jpg",
        "width": 924,
        "height": 2000,
        "project": "Nebnik",
        "caption": "iPhone — Dream Book — symbol search and categories"
    },
    {
        "type": "image",
        "src": "gallery/nebnik-20261026-story.jpg",
        "width": 924,
        "height": 2000,
        "project": "Nebnik",
        "caption": "iPhone — Constellation story — Astraea and Virgo"
    },
    {
        "type": "image",
        "src": "gallery/nebnik-20261026-bestiary.jpg",
        "width": 924,
        "height": 2000,
        "project": "Nebnik",
        "caption": "iPhone — Bestiary — Mokosh and the Plus content preview"
    },
    {
        "type": "image",
        "src": "gallery/neon-rebels-20261026-iphone-gameplay.jpg",
        "width": 2000,
        "height": 920,
        "project": "Neon Rebels",
        "caption": "iPhone — Solo gameplay — cargo depot and touch controls"
    },
    {
        "type": "image",
        "src": "gallery/neon-rebels-20261026-ipad-boss.jpg",
        "width": 2000,
        "height": 1500,
        "project": "Neon Rebels",
        "caption": "iPad — Boss practice — Warden encounter"
    },
    {
        "type": "image",
        "src": "gallery/neon-rebels-20261026-menu.jpg",
        "width": 2000,
        "height": 920,
        "project": "Neon Rebels",
        "caption": "iPhone — Main menu — heroes, campaign and local co-op options"
    },
    {
        "type": "image",
        "src": "gallery/neon-rebels-20261026-garage.jpg",
        "width": 2000,
        "height": 920,
        "project": "Neon Rebels",
        "caption": "iPhone — Garage — character collections and base customization"
    },
    {
        "type": "image",
        "src": "gallery/neon-rebels-20261026-strider.jpg",
        "width": 2000,
        "height": 920,
        "project": "Neon Rebels",
        "caption": "iPhone — Boss practice — Iron Strider encounter"
    },
    {
        "type": "image",
        "src": "gallery/touchline-macos-20261026-career.jpg",
        "width": 2000,
        "height": 1250,
        "project": "Touchline Atlas — macOS",
        "caption": "macOS — Career workspace — club news and manager inbox"
    },
    {
        "type": "image",
        "src": "gallery/touchline-macos-20261026-tactics.jpg",
        "width": 2000,
        "height": 1250,
        "project": "Touchline Atlas — macOS",
        "caption": "macOS — Tactical board — squad shape and player roles"
    },
    {
        "type": "image",
        "src": "gallery/touchline-macos-20261026-menu.jpg",
        "width": 2000,
        "height": 1250,
        "project": "Touchline Atlas — macOS",
        "caption": "macOS — Main menu — start, load and watch a match"
    },
    {
        "type": "image",
        "src": "gallery/touchline-macos-20261026-squad.jpg",
        "width": 2000,
        "height": 1250,
        "project": "Touchline Atlas — macOS",
        "caption": "macOS — Squad — roster, player condition and tactical plans"
    },
    {
        "type": "image",
        "src": "gallery/touchline-macos-20261026-shop.jpg",
        "width": 2000,
        "height": 1250,
        "project": "Touchline Atlas — macOS",
        "caption": "macOS — Club Shop — investment packs, editor and restore options"
    },
    {
        "type": "image",
        "src": "gallery/wellness-spot-20261026-desktop.jpg",
        "width": 2000,
        "height": 1250,
        "project": "Wellness Spot",
        "caption": "Web desktop — Customer overview and synthetic measurement trends"
    },
    {
        "type": "image",
        "src": "gallery/wellness-spot-20261026-phone.jpg",
        "width": 1124,
        "height": 2000,
        "project": "Wellness Spot",
        "caption": "Web phone — Customer overview and bottom navigation — synthetic data"
    },
    {
        "type": "image",
        "src": "gallery/wellness-spot-20261026-progress.jpg",
        "width": 1124,
        "height": 2000,
        "project": "Wellness Spot",
        "caption": "Web phone — Progress — measurement trends using synthetic data"
    },
    {
        "type": "image",
        "src": "gallery/wellness-spot-20261026-nutrition.jpg",
        "width": 1124,
        "height": 2000,
        "project": "Wellness Spot",
        "caption": "Web phone — Nutrition — approved plan using synthetic demo data"
    },
    {
        "type": "image",
        "src": "gallery/wellness-spot-20261026-packages.jpg",
        "width": 1124,
        "height": 2000,
        "project": "Wellness Spot",
        "caption": "Web phone — Packages — account plan and service options — synthetic data"
    },
    {
        "type": "image",
        "src": "gallery/sjaj-20261026-manager.jpg",
        "width": 2000,
        "height": 1250,
        "project": "Sjaj",
        "caption": "Web desktop — Manager day overview — seeded demo business"
    },
    {
        "type": "image",
        "src": "gallery/sjaj-20261026-customer.jpg",
        "width": 924,
        "height": 2000,
        "project": "Sjaj",
        "caption": "Web phone — Completed cleaning and customer feedback — demo data"
    },
    {
        "type": "image",
        "src": "gallery/sjaj-20261026-job.jpg",
        "width": 2000,
        "height": 1250,
        "project": "Sjaj",
        "caption": "Web desktop — Job detail — checklist and payment status — seeded demo data"
    },
    {
        "type": "image",
        "src": "gallery/sjaj-20261026-new-job.jpg",
        "width": 2000,
        "height": 1250,
        "project": "Sjaj",
        "caption": "Web desktop — New job — scheduling, team and price — seeded demo data"
    },
    {
        "type": "image",
        "src": "gallery/sjaj-20261026-rating.jpg",
        "width": 924,
        "height": 2000,
        "project": "Sjaj",
        "caption": "Web phone — Customer rating — service feedback — seeded demo data"
    },
    {
        "type": "image",
        "src": "gallery/petbuddy-20261012-iphone-01-home.jpg",
        "width": 920,
        "height": 2000,
        "project": "Pet Buddy",
        "caption": "iPhone — Home — stories, quizzes and upcoming care"
    },
    {
        "type": "image",
        "src": "gallery/petbuddy-20261012-iphone-02-pets.jpg",
        "width": 920,
        "height": 2000,
        "project": "Pet Buddy",
        "caption": "iPhone — Pet profiles — care categories and timeline"
    },
    {
        "type": "image",
        "src": "gallery/petbuddy-20261012-iphone-05-trends-plus.jpg",
        "width": 920,
        "height": 2000,
        "project": "Pet Buddy",
        "caption": "iPhone — Pet Buddy Plus — measurement trends"
    },
    {
        "type": "image",
        "src": "gallery/petbuddy-20261012-ipad-03-calendar.jpg",
        "width": 1500,
        "height": 2000,
        "project": "Pet Buddy",
        "caption": "iPad — Care calendar — appointments and grooming"
    },
    {
        "type": "image",
        "src": "gallery/petbuddy-20261012-ipad-04-report-plus.jpg",
        "width": 1500,
        "height": 2000,
        "project": "Pet Buddy",
        "caption": "iPad — Pet Buddy Plus — PDF report options"
    },
    {
        "type": "image",
        "src": "gallery/notevita-20261012-iphone-69-01-today-en.jpg",
        "width": 921,
        "height": 2000,
        "project": "NoteVita",
        "caption": "iPhone — Today — family profiles and quick health entries"
    },
    {
        "type": "image",
        "src": "gallery/notevita-20261012-iphone-69-02-diary-en.jpg",
        "width": 921,
        "height": 2000,
        "project": "NoteVita",
        "caption": "iPhone — Diary — search, bookmarks and health records"
    },
    {
        "type": "image",
        "src": "gallery/notevita-20261012-iphone-69-05-backup-en.jpg",
        "width": 921,
        "height": 2000,
        "project": "NoteVita",
        "caption": "iPhone — Backup — encrypted family export and verified import"
    },
    {
        "type": "image",
        "src": "gallery/notevita-20261012-ipad-13-03-health-en.jpg",
        "width": 1500,
        "height": 2000,
        "project": "NoteVita",
        "caption": "iPad — Health — personal summary and blood pressure"
    },
    {
        "type": "image",
        "src": "gallery/notevita-20261012-ipad-13-04-trends-en.jpg",
        "width": 1500,
        "height": 2000,
        "project": "NoteVita",
        "caption": "iPad — NoteVita Plus — blood-pressure measurement trends"
    },
    {
        "type": "image",
        "src": "gallery/kuvar-20261005-iphone-home.jpg",
        "width": 921,
        "height": 2000,
        "project": "Kuvar",
        "caption": "iPhone cookbook — recipe collections and quick filters"
    },
    {
        "type": "image",
        "src": "gallery/kuvar-20261005-iphone-recipe.jpg",
        "width": 921,
        "height": 2000,
        "project": "Kuvar",
        "caption": "iPhone recipe detail — ingredients and preparation"
    },
    {
        "type": "image",
        "src": "gallery/kuvar-20261005-iphone-cooking.jpg",
        "width": 921,
        "height": 2000,
        "project": "Kuvar",
        "caption": "iPhone cooking mode — step-by-step instructions and timer"
    },
    {
        "type": "image",
        "src": "gallery/kuvar-20261005-ipad-recipe.jpg",
        "width": 2000,
        "height": 1500,
        "project": "Kuvar",
        "caption": "iPad recipe detail — ingredients and preparation"
    },
    {
        "type": "image",
        "src": "gallery/kuvar-20261005-ipad-cooking.jpg",
        "width": 2000,
        "height": 1500,
        "project": "Kuvar",
        "caption": "iPad cooking mode — step-by-step instructions and timer"
    },
    {
        "type": "image",
        "src": "gallery/slikovnica-20261005-home.jpg",
        "width": 921,
        "height": 2000,
        "project": "Slikovnica",
        "caption": "iPhone home — sketchpad and illustrated collections"
    },
    {
        "type": "image",
        "src": "gallery/slikovnica-20261005-drawings.jpg",
        "width": 921,
        "height": 2000,
        "project": "Slikovnica",
        "caption": "Free drawing collection — illustrated page browser"
    },
    {
        "type": "image",
        "src": "gallery/slikovnica-20261005-coloring.jpg",
        "width": 921,
        "height": 2000,
        "project": "Slikovnica",
        "caption": "Coloring canvas — palette, undo and eraser"
    },
    {
        "type": "image",
        "src": "gallery/slikovnica-20261005-dinosaurs.jpg",
        "width": 921,
        "height": 2000,
        "project": "Slikovnica",
        "caption": "Dinosaur collection — preview illustrated pages"
    },
    {
        "type": "image",
        "src": "gallery/slikovnica-20261026-ipad-coloring.jpg",
        "width": 1500,
        "height": 2000,
        "project": "Slikovnica",
        "caption": "iPad — Coloring — kitten illustration, palette and drawing controls"
    },
    {
        "type": "image",
        "src": "gallery/zoopal-20260929-profile.jpg",
        "width": 1080,
        "height": 1920,
        "project": "ZooPal",
        "caption": "Android — pet profile and care summary"
    },
    {
        "type": "image",
        "src": "gallery/zoopal-20260929-calendar.jpg",
        "width": 1080,
        "height": 1731,
        "project": "ZooPal",
        "caption": "Android — care calendar and scheduled records"
    },
    {
        "type": "image",
        "src": "gallery/zoopal-20260929-measurements.jpg",
        "width": 1080,
        "height": 1731,
        "project": "ZooPal",
        "caption": "Android — body measurements and weight history"
    },
    {
        "type": "image",
        "src": "gallery/zoopal-20260929-companion.jpg",
        "width": 1080,
        "height": 1731,
        "project": "ZooPal",
        "caption": "Android — virtual companion and daily care"
    },
    {
        "type": "image",
        "src": "gallery/zoopal-stories.jpg",
        "width": 736,
        "height": 1600,
        "project": "ZooPal",
        "caption": "iOS — stories home and daily quiz"
    },
    {
        "type": "image",
        "src": "gallery/bugcorp-20260929-home.jpg",
        "width": 924,
        "height": 2000,
        "project": "BugCorpGame",
        "caption": "Redesigned home — choose an opponent and start a duel"
    },
    {
        "type": "image",
        "src": "gallery/bugcorp-20260929-duel.jpg",
        "width": 924,
        "height": 2000,
        "project": "BugCorpGame",
        "caption": "Turn-based duel — illustrated cards, battlefield and turn phases"
    },
    {
        "type": "image",
        "src": "gallery/bugcorp-20260929-collection.jpg",
        "width": 924,
        "height": 2000,
        "project": "BugCorpGame",
        "caption": "Card collection — executive artwork, rarity and owned cards"
    },
    {
        "type": "image",
        "src": "gallery/bugcorp-20260929-packs.jpg",
        "width": 924,
        "height": 2000,
        "project": "BugCorpGame",
        "caption": "Procurement — earned packs, collection progress and card bundles"
    },
    {
        "type": "image",
        "src": "gallery/bugcorp-20261026-card-detail.jpg",
        "width": 924,
        "height": 2000,
        "project": "BugCorpGame",
        "caption": "iPhone — Card detail — artwork, effect and collection status"
    },
    {
        "type": "image",
        "src": "gallery/translato-editor.jpg",
        "width": 2000,
        "height": 1160,
        "project": "Translato",
        "caption": "Bilingual editor — source segments, translations and memory matches"
    },
    {
        "type": "image",
        "src": "gallery/translato-preview.jpg",
        "width": 2000,
        "height": 1160,
        "project": "Translato",
        "caption": "Document preview — side-by-side source and translated text"
    },
    {
        "type": "image",
        "src": "gallery/translato-memory.jpg",
        "width": 2000,
        "height": 1160,
        "project": "Translato",
        "caption": "Translation memory — reusable translations by language pair"
    },
    {
        "type": "image",
        "src": "gallery/translato-find.jpg",
        "width": 2000,
        "height": 1160,
        "project": "Translato",
        "caption": "Find and replace — edit terminology across a project"
    },
    {
        "type": "image",
        "src": "gallery/translato-20261026-pro.jpg",
        "width": 2000,
        "height": 1250,
        "project": "Translato",
        "caption": "macOS — Pro upgrade — one-time purchase and restore options"
    },
    {
        "type": "image",
        "src": "gallery/cute-bubble-home.jpg",
        "width": 2000,
        "height": 921,
        "project": "Cute Bubble Chase",
        "caption": "iPhone home — daily challenge and arcade adventure"
    },
    {
        "type": "image",
        "src": "gallery/cute-bubble-gameplay.jpg",
        "width": 2000,
        "height": 921,
        "project": "Cute Bubble Chase",
        "caption": "iPhone gameplay — pop, dodge and protect your lives"
    },
    {
        "type": "image",
        "src": "gallery/cute-bubble-guide.jpg",
        "width": 2000,
        "height": 921,
        "project": "Cute Bubble Chase",
        "caption": "How to play — illustrated controls and game rules"
    },
    {
        "type": "image",
        "src": "gallery/cute-bubble-powerups.jpg",
        "width": 2000,
        "height": 921,
        "project": "Cute Bubble Chase",
        "caption": "Power-ups — shields, freeze and special shots"
    },
    {
        "type": "image",
        "src": "gallery/cute-bubble-ipad-gameplay.jpg",
        "width": 2000,
        "height": 1500,
        "project": "Cute Bubble Chase",
        "caption": "iPad gameplay — arena and touch controls"
    },
    {
        "type": "image",
        "src": "gallery/touchline-atlas-20261006-iphone-career-dashboard.png",
        "width": 1320,
        "height": 2868,
        "project": "Touchline Atlas Mobile",
        "caption": "iPhone — Career dashboard — club news and contract updates"
    },
    {
        "type": "image",
        "src": "gallery/touchline-atlas-20261006-iphone-new-career.png",
        "width": 1320,
        "height": 2868,
        "project": "Touchline Atlas Mobile",
        "caption": "iPhone — New career — choose a club and league"
    },
    {
        "type": "image",
        "src": "gallery/touchline-atlas-20261006-iphone-fixtures.png",
        "width": 1320,
        "height": 2868,
        "project": "Touchline Atlas Mobile",
        "caption": "iPhone — Season overview — upcoming fixtures and standings"
    },
    {
        "type": "image",
        "src": "gallery/touchline-atlas-20261006-iphone-club.png",
        "width": 1320,
        "height": 2868,
        "project": "Touchline Atlas Mobile",
        "caption": "iPhone — Club hub — squad, tactics, training and transfers"
    },
    {
        "type": "image",
        "src": "gallery/touchline-atlas-20261006-ipad-club.png",
        "width": 2064,
        "height": 2752,
        "project": "Touchline Atlas Mobile",
        "caption": "iPad — Club hub — team management and competitions"
    },
    {
        "type": "image",
        "src": "gallery/vaskotaxi-route.jpg",
        "width": 736,
        "height": 1600,
        "project": "VaskoTaxi",
        "caption": "Route & fare on the map (Belgrade)"
    },
    {
        "type": "image",
        "src": "gallery/vaskotaxi-driver.jpg",
        "width": 736,
        "height": 1600,
        "project": "VaskoTaxi",
        "caption": "Driver on the way - live ride tracking"
    },
    {
        "type": "image",
        "src": "gallery/vaskotaxi-rides.jpg",
        "width": 736,
        "height": 1600,
        "project": "VaskoTaxi",
        "caption": "Ride classes & extras"
    },
    {
        "type": "image",
        "src": "gallery/vaskotaxi-role.jpg",
        "width": 736,
        "height": 1600,
        "project": "VaskoTaxi",
        "caption": "Passenger or driver - role selection"
    },
    {
        "type": "image",
        "src": "gallery/vaskotaxi-onboarding.jpg",
        "width": 736,
        "height": 1600,
        "project": "VaskoTaxi",
        "caption": "Onboarding - your ride in minutes"
    }
];
