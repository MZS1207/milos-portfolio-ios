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
    /* Native productivity, pet care and bilingual web */
    {"type": "image", "src": "gallery/orbit-macos.jpg", "width": 1199, "height": 768, "project": "Orbit", "caption": "Native macOS workspace — cross-project metrics and activity"},
    {"type": "image", "src": "gallery/orbit-ios.jpg", "width": 736, "height": 1600, "project": "Orbit", "caption": "iPhone dashboard — project switching, priorities and personal focus"},
    {"type": "image", "src": "gallery/orbit-settings.jpg", "width": 650, "height": 785, "project": "Orbit", "caption": "Project settings — team, schedule and archive controls"},
    {"type": "image", "src": "gallery/zoopal-stories.jpg", "width": 736, "height": 1600, "project": "ZooPal", "caption": "Stories home — daily pet-care facts, quiz and reading suggestions"},
    {"type": "image", "src": "gallery/karolina-home.jpg", "width": 1280, "height": 720, "project": "Karolina Prevodi", "caption": "Serbian landing page — typography, identity and service discovery"},
    {"type": "image", "src": "gallery/karolina-services.jpg", "width": 1280, "height": 720, "project": "Karolina Prevodi", "caption": "English service catalog — live language switching"},

    /* --- Bubble Chase / CatChase (iOS game) --- */
    { type: 'image', src: 'gallery/catchase-home.jpg', width: 1600, height: 736, project: 'Bubble Chase', caption: 'Little paws. Big adventures. — home & daily challenge' },
    { type: 'image', src: 'gallery/catchase-gameplay.jpg', width: 1600, height: 736, project: 'Bubble Chase', caption: 'Pop & dodge — live SpriteKit gameplay' },
    { type: 'image', src: 'gallery/catchase-guide.jpg', width: 1600, height: 736, project: 'Bubble Chase', caption: 'Learning the controls — interactive game guide' },
    { type: 'image', src: 'gallery/catchase-powerups.jpg', width: 1600, height: 736, project: 'Bubble Chase', caption: 'Shields, freeze & power shots — power-up guide' },

    /* --- Bug Corp Duel (iOS game) --- */
    { type: 'image', src: 'gallery/bugcorp-menu.jpg', width: 736, height: 1600, project: 'Bug Corp Duel', caption: 'Corporate chaos. Your strategy. — main menu' },
    { type: 'image', src: 'gallery/bugcorp-duel.jpg', width: 736, height: 1600, project: 'Bug Corp Duel', caption: 'Opening hand — local duel against BugBot' },
    { type: 'image', src: 'gallery/bugcorp-cards.jpg', width: 736, height: 1600, project: 'Bug Corp Duel', caption: 'Card library — employees, tools & incidents' },
    { type: 'image', src: 'gallery/bugcorp-guide.jpg', width: 736, height: 1600, project: 'Bug Corp Duel', caption: 'First day at work — rules & onboarding' },

    /* --- Football Manager (iOS) --- */
    { type: 'image', src: 'gallery/fm-menu.jpg', width: 736, height: 1600, project: 'Football Manager', caption: 'Main menu - Build Your Legacy' },
    { type: 'image', src: 'gallery/fm-match-sim.jpg', width: 736, height: 1600, project: 'Football Manager', caption: 'Live 2D match simulation' },
    { type: 'image', src: 'gallery/fm-table.jpg', width: 736, height: 1600, project: 'Football Manager', caption: 'League table - Premier Division' },
    { type: 'image', src: 'gallery/fm-dressing-room.jpg', width: 736, height: 1600, project: 'Football Manager', caption: 'Dressing room - pre-match team talk' },
    { type: 'image', src: 'gallery/fm-news.jpg', width: 736, height: 1600, project: 'Football Manager', caption: 'Club inbox - news, contracts & transfers' },
    { type: 'image', src: 'gallery/fm-club.jpg', width: 736, height: 1600, project: 'Football Manager', caption: 'Club hub - squad, tactics & staff' },

    /* --- BeamBike (iOS) --- */
    { type: 'image', src: 'gallery/beambike-welcome.jpg', width: 736, height: 1600, project: 'BeamBike', caption: 'Welcome to BeamBike — phone & social sign-in' },

    /* --- VaskoTaxi (iOS) --- */
    { type: 'image', src: 'gallery/vaskotaxi-route.jpg', width: 736, height: 1600, project: 'VaskoTaxi', caption: 'Route & fare on the map (Belgrade)' },
    { type: 'image', src: 'gallery/vaskotaxi-driver.jpg', width: 736, height: 1600, project: 'VaskoTaxi', caption: 'Driver on the way - live ride tracking' },
    { type: 'image', src: 'gallery/vaskotaxi-rides.jpg', width: 736, height: 1600, project: 'VaskoTaxi', caption: 'Ride classes & extras' },
    { type: 'image', src: 'gallery/vaskotaxi-role.jpg', width: 736, height: 1600, project: 'VaskoTaxi', caption: 'Passenger or driver - role selection' },
    { type: 'image', src: 'gallery/vaskotaxi-onboarding.jpg', width: 736, height: 1600, project: 'VaskoTaxi', caption: 'Onboarding - your ride in minutes' },

    /* --- ServiceHub (iOS) --- */
    { type: 'image', src: 'gallery/servicehub-map.jpg', width: 736, height: 1600, project: 'ServiceHub', caption: 'Verified providers on the map (Belgrade)' },
    { type: 'image', src: 'gallery/servicehub-onboarding.jpg', width: 736, height: 1600, project: 'ServiceHub', caption: 'Onboarding - find trusted pros' },
    { type: 'image', src: 'gallery/servicehub-role.jpg', width: 736, height: 1600, project: 'ServiceHub', caption: 'Customer or provider - role selection' },

    /* --- Kuvar (iOS) --- */
    { type: 'image', src: 'gallery/kuvar-fridge.jpg', width: 736, height: 1600, project: 'Kuvar', caption: 'What’s in your fridge? - recipes from your ingredients' },
    { type: 'image', src: 'gallery/kuvar-plan.jpg', width: 736, height: 1600, project: 'Kuvar', caption: 'Daily meal plan with calories' },
    { type: 'image', src: 'gallery/kuvar-home.jpg', width: 736, height: 1600, project: 'Kuvar', caption: 'Cookbook home - recipe packs' },
    { type: 'image', src: 'gallery/kuvar-intro.jpg', width: 736, height: 1600, project: 'Kuvar', caption: 'Ingredient-first cooking assistant' },

    /* --- iMovo (web) --- */
    { type: 'image', src: 'gallery/imovo-detail.jpg', width: 1600, height: 936, project: 'iMovo', caption: 'Property detail page' },
    { type: 'image', src: 'gallery/imovo-listings.jpg', width: 1600, height: 863, project: 'iMovo', caption: 'Listings with map search' },
    { type: 'image', src: 'gallery/imovo-novogradnja.jpg', width: 1600, height: 878, project: 'iMovo', caption: 'New developments showcase' },
    { type: 'image', src: 'gallery/imovo-calculator.jpg', width: 1600, height: 832, project: 'iMovo', caption: 'Mortgage calculator' }
];
