/* ============================================================
   GALLERY DATA
   ------------------------------------------------------------
   How to add media:
   1. Drop the file into the gallery/ folder
      (images: jpg/png/webp · videos: mp4, H.264, + optional
       poster image for the grid thumbnail)
   2. Add one entry below — grouped by project.

   Fields:
     type    'image' | 'video'
     src     path to the file, e.g. 'gallery/fm-menu.jpg'
     poster  (video only, recommended) thumbnail image
     project project name — used for the filter chips
     caption short text shown in the fullscreen viewer
   ============================================================ */
window.GALLERY_ITEMS = [
    /* --- Football Manager (iOS) --- */
    { type: 'image', src: 'gallery/fm-menu.jpg', project: 'Football Manager', caption: 'Main menu — Build Your Legacy' },
    { type: 'image', src: 'gallery/fm-match-sim.jpg', project: 'Football Manager', caption: 'Live 2D match simulation' },
    { type: 'image', src: 'gallery/fm-table.jpg', project: 'Football Manager', caption: 'League table — Premier Division' },
    { type: 'image', src: 'gallery/fm-dressing-room.jpg', project: 'Football Manager', caption: 'Dressing room — pre-match team talk' },
    { type: 'image', src: 'gallery/fm-news.jpg', project: 'Football Manager', caption: 'Club inbox — news, contracts & transfers' },
    { type: 'image', src: 'gallery/fm-club.jpg', project: 'Football Manager', caption: 'Club hub — squad, tactics & staff' },

    /* --- VaskoTaxi (iOS) --- */
    { type: 'image', src: 'gallery/vaskotaxi-route.jpg', project: 'VaskoTaxi', caption: 'Route & fare on the map (Belgrade)' },
    { type: 'image', src: 'gallery/vaskotaxi-driver.jpg', project: 'VaskoTaxi', caption: 'Driver on the way — live ride tracking' },
    { type: 'image', src: 'gallery/vaskotaxi-rides.jpg', project: 'VaskoTaxi', caption: 'Ride classes & extras' },
    { type: 'image', src: 'gallery/vaskotaxi-role.jpg', project: 'VaskoTaxi', caption: 'Passenger or driver — role selection' },
    { type: 'image', src: 'gallery/vaskotaxi-onboarding.jpg', project: 'VaskoTaxi', caption: 'Onboarding — your ride in minutes' },

    /* --- ServiceHub (iOS) --- */
    { type: 'image', src: 'gallery/servicehub-map.jpg', project: 'ServiceHub', caption: 'Verified providers on the map (Belgrade)' },
    { type: 'image', src: 'gallery/servicehub-onboarding.jpg', project: 'ServiceHub', caption: 'Onboarding — find trusted pros' },
    { type: 'image', src: 'gallery/servicehub-role.jpg', project: 'ServiceHub', caption: 'Customer or provider — role selection' },

    /* --- Kuvar (iOS) --- */
    { type: 'image', src: 'gallery/kuvar-fridge.jpg', project: 'Kuvar', caption: 'What’s in your fridge? — recipes from your ingredients' },
    { type: 'image', src: 'gallery/kuvar-plan.jpg', project: 'Kuvar', caption: 'Daily meal plan with calories' },
    { type: 'image', src: 'gallery/kuvar-home.jpg', project: 'Kuvar', caption: 'Cookbook home — recipe packs' },
    { type: 'image', src: 'gallery/kuvar-intro.jpg', project: 'Kuvar', caption: 'Ingredient-first cooking assistant' },

    /* --- iMovo (web) --- */
    { type: 'image', src: 'gallery/imovo-detail.jpg', project: 'iMovo', caption: 'Property detail page' },
    { type: 'image', src: 'gallery/imovo-listings.jpg', project: 'iMovo', caption: 'Listings with map search' },
    { type: 'image', src: 'gallery/imovo-novogradnja.jpg', project: 'iMovo', caption: 'New developments showcase' },
    { type: 'image', src: 'gallery/imovo-calculator.jpg', project: 'iMovo', caption: 'Mortgage calculator' }
];
