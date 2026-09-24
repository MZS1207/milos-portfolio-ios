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
        "src": "gallery/bugcorp-202609-duel.jpg",
        "width": 921,
        "height": 2000,
        "project": "BugCorpGame",
        "caption": "Turn-based duel — phases, hand and battlefield"
    },
    {
        "type": "image",
        "src": "gallery/bugcorp-202609-collection.jpg",
        "width": 921,
        "height": 2000,
        "project": "BugCorpGame",
        "caption": "Card collection — employees, rarity and owned cards"
    },
    {
        "type": "image",
        "src": "gallery/bugcorp-202609-packs.jpg",
        "width": 921,
        "height": 2000,
        "project": "BugCorpGame",
        "caption": "HR procurement — card packs and progression"
    },
    {
        "type": "image",
        "src": "gallery/bugcorp-202609-reveal.jpg",
        "width": 921,
        "height": 2000,
        "project": "BugCorpGame",
        "caption": "Pack reveal — character artwork, abilities and stats"
    },
    {
        "type": "image",
        "src": "gallery/kuvar-202609-cookbook.jpg",
        "width": 921,
        "height": 2000,
        "project": "Kuvar",
        "caption": "iPhone cookbook — recipe collections and quick filters"
    },
    {
        "type": "image",
        "src": "gallery/kuvar-202609-recipe.jpg",
        "width": 921,
        "height": 2000,
        "project": "Kuvar",
        "caption": "Recipe detail — preparation time, servings and ingredients"
    },
    {
        "type": "image",
        "src": "gallery/kuvar-202609-cooking.jpg",
        "width": 921,
        "height": 2000,
        "project": "Kuvar",
        "caption": "Guided cooking — step-by-step instructions and timer"
    },
    {
        "type": "image",
        "src": "gallery/kuvar-202609-ipad.jpg",
        "width": 1500,
        "height": 2000,
        "project": "Kuvar",
        "caption": "iPad recipe detail — a layout made for a larger screen"
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
        "src": "gallery/zoopal-stories.jpg",
        "width": 736,
        "height": 1600,
        "project": "ZooPal",
        "caption": "Stories home — daily pet-care facts, quiz and reading suggestions"
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
        "src": "gallery/fm-menu.jpg",
        "width": 736,
        "height": 1600,
        "project": "Football Manager",
        "caption": "Main menu - Build Your Legacy"
    },
    {
        "type": "image",
        "src": "gallery/fm-match-sim.jpg",
        "width": 736,
        "height": 1600,
        "project": "Football Manager",
        "caption": "Live 2D match simulation"
    },
    {
        "type": "image",
        "src": "gallery/fm-table.jpg",
        "width": 736,
        "height": 1600,
        "project": "Football Manager",
        "caption": "League table - Premier Division"
    },
    {
        "type": "image",
        "src": "gallery/fm-dressing-room.jpg",
        "width": 736,
        "height": 1600,
        "project": "Football Manager",
        "caption": "Dressing room - pre-match team talk"
    },
    {
        "type": "image",
        "src": "gallery/fm-news.jpg",
        "width": 736,
        "height": 1600,
        "project": "Football Manager",
        "caption": "Club inbox - news, contracts & transfers"
    },
    {
        "type": "image",
        "src": "gallery/fm-club.jpg",
        "width": 736,
        "height": 1600,
        "project": "Football Manager",
        "caption": "Club hub - squad, tactics & staff"
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
