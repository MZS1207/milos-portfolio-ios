/* ============================================================
   GALLERY DATA
   ------------------------------------------------------------
   How to add media:
   1. Drop the file into the gallery/ folder
      (images: jpg/png/webp · videos: mp4, H.264, + optional
       poster image for the grid thumbnail)
   2. Add one entry below - grouped by project.

   Fields:
     type    'image' | 'video'
     src     path to the file, e.g. 'gallery/fm-menu.jpg'
     poster  (video only, recommended) thumbnail image
     project project name - used for the filter chips
     caption short text shown in the fullscreen viewer
     width, height image dimensions; reserve layout before lazy loading
   ============================================================ */
window.GALLERY_ITEMS = [
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
        "src": "gallery/kuvar-20261005-ipad-home.jpg",
        "width": 2000,
        "height": 1500,
        "project": "Kuvar",
        "caption": "iPad cookbook — recipe collections and quick filters"
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
        "src": "gallery/cute-bubble-ipad-home.jpg",
        "width": 2000,
        "height": 1500,
        "project": "Cute Bubble Chase",
        "caption": "iPad home — landscape layout and daily challenge"
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
        "src": "gallery/orbit-macos.jpg",
        "width": 1199,
        "height": 768,
        "project": "Orbit",
        "caption": "Native macOS workspace — cross-project metrics and activity"
    },
    {
        "type": "image",
        "src": "gallery/orbit-ios.jpg",
        "width": 736,
        "height": 1600,
        "project": "Orbit",
        "caption": "iPhone dashboard — project switching, priorities and personal focus"
    },
    {
        "type": "image",
        "src": "gallery/orbit-settings.jpg",
        "width": 650,
        "height": 785,
        "project": "Orbit",
        "caption": "Project settings — team, schedule and archive controls"
    },
    {
        "type": "image",
        "src": "gallery/karolina-home.jpg",
        "width": 1280,
        "height": 720,
        "project": "Karolina Prevodi",
        "caption": "Serbian landing page — typography, identity and service discovery"
    },
    {
        "type": "image",
        "src": "gallery/karolina-services.jpg",
        "width": 1280,
        "height": 720,
        "project": "Karolina Prevodi",
        "caption": "English service catalog — live language switching"
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
        "src": "gallery/touchline-atlas-20261006-ipad-career-dashboard.png",
        "width": 2064,
        "height": 2752,
        "project": "Touchline Atlas Mobile",
        "caption": "iPad — Career dashboard — expanded news overview"
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
        "src": "gallery/beambike-welcome.jpg",
        "width": 736,
        "height": 1600,
        "project": "BeamBike",
        "caption": "Welcome to BeamBike — phone & social sign-in"
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
    },
    {
        "type": "image",
        "src": "gallery/servicehub-map.jpg",
        "width": 736,
        "height": 1600,
        "project": "ServiceHub",
        "caption": "Verified providers on the map (Belgrade)"
    },
    {
        "type": "image",
        "src": "gallery/servicehub-onboarding.jpg",
        "width": 736,
        "height": 1600,
        "project": "ServiceHub",
        "caption": "Onboarding - find trusted pros"
    },
    {
        "type": "image",
        "src": "gallery/servicehub-role.jpg",
        "width": 736,
        "height": 1600,
        "project": "ServiceHub",
        "caption": "Customer or provider - role selection"
    },
    {
        "type": "image",
        "src": "gallery/imovo-detail.jpg",
        "width": 1600,
        "height": 936,
        "project": "iMovo",
        "caption": "Property detail page"
    },
    {
        "type": "image",
        "src": "gallery/imovo-listings.jpg",
        "width": 1600,
        "height": 863,
        "project": "iMovo",
        "caption": "Listings with map search"
    },
    {
        "type": "image",
        "src": "gallery/imovo-novogradnja.jpg",
        "width": 1600,
        "height": 878,
        "project": "iMovo",
        "caption": "New developments showcase"
    },
    {
        "type": "image",
        "src": "gallery/imovo-calculator.jpg",
        "width": 1600,
        "height": 832,
        "project": "iMovo",
        "caption": "Mortgage calculator"
    }
];
