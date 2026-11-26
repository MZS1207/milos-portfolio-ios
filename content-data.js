/* ============================================================
   CONTENT DATA - projects, skills & experience
   ------------------------------------------------------------
   This is the single place to edit site content shown in the
   detail modals. Logic lives in app-safari.js and reads from
   window.CONTENT_DATA; media for the Gallery tab is registered
   separately in gallery-data.js.

   Optional project fields:
     gallerySize  owner-approved album size exception; default is five
     gallery  exact `project` name used in gallery-data.js -
              adds a "View screenshots" button to the modal
              that opens the Gallery tab pre-filtered.
     links    [{ label, url }] - external links (GitHub repo,
              App Store, demo video, write-up) shown as buttons.
   ============================================================ */
window.CONTENT_DATA = {

    /* ---------- Projects ---------- */
    projects: {
        fitpilot: {"name": "FitPilot", "type": "In Development · Native iOS Fitness Companion", "icon": "🏃", "description": "A native iOS fitness companion in development, bringing daily nutrition, movement planning and progress into a calm SwiftUI interface.", "features": ["Daily nutrition and activity overview", "Food diary and macro summary", "Movement planning and exercise discovery", "Weight trends and weekly review"], "tech": ["Swift", "SwiftUI", "iOS"], "highlights": "Actual iPhone simulator captures from the current development build, using sample data. Not presented as a released app; health integrations and production readiness are not implied.", "gallery": "FitPilot", "gallerySummary": "Five real simulator captures: Today, Food, Move, Progress and weekly review. Development build with sample data."},
        nebnik: {"name": "Nebnik", "type": "Offline Star Almanac · iPhone", "icon": "🌙", "description": "A native offline almanac combining an on-device sky overview, mythology, original stories, a bestiary and a dream book. Available in English and Serbian without an account or backend.", "features": ["On-device sky overview and zodiac reading", "Mythology library, original stories and mythical creatures", "Searchable dream symbols and a local dream journal", "StoreKit access for Plus and the Dream Book"], "tech": ["SwiftUI", "SwiftPM", "StoreKit 2", "Offline Content"], "highlights": "Native iOS implementation with local sky calculations, a bilingual content library and a shared access policy for subscriptions and one-time purchases. The screenshots show the English interface.", "gallery": "Nebnik", "gallerySummary": "Five native iPhone screens: sky, mythology, dream symbols, a constellation story and the bestiary."},
        storagelens: {"name": "StorageLens", "type": "Native macOS Storage Utility", "icon": "💽", "description": "A native macOS utility for inspecting user-approved folders, reviewing duplicates and moving individually selected files to Trash after confirmation. The sandboxed Store edition works with user-selected folders and local processing.", "features": ["User-selected folder inspection and ranked results", "Exact-content duplicate review with a protected copy", "Explicit selection and confirmation before moving files to Trash", "Local processing and native macOS file access"], "tech": ["SwiftUI", "AppKit", "SwiftPM", "macOS Sandbox"], "highlights": "Built separate inspection and cleanup access paths. Store-edition artwork was prepared with synthetic files under a temporary fixture directory.", "gallery": "StorageLens", "gallerySummary": "macOS Store-edition artwork: folder inspection and duplicate review using synthetic sample files."},
        neonrebels: {"name": "Neon Rebels", "type": "Solo & Local Co-op Shooter · iPhone & iPad", "icon": "🎮", "description": "A native side-scrolling arcade shooter built with SwiftUI and SpriteKit. Features a solo campaign, local-network two-player co-op, multiple weapons, checkpoint progression and distinct boss encounters.", "features": ["Solo play and local-network two-player co-op", "Campaign missions, checkpoints and boss practice", "Multiple weapons, shields and partner revival", "Landscape controls for iPhone and iPad"], "tech": ["SwiftUI", "SpriteKit", "Network.framework", "StoreKit 2"], "highlights": "Independent game, originally developed as Duo Rescue. These build-6 captures show solo gameplay and boss practice; internet multiplayer is not implemented.", "gallery": "Neon Rebels", "gallerySummary": "Five real game captures: menu, garage, solo gameplay and boss practice on iPhone and iPad. Local co-op options are visible; no co-op session is shown."},
        touchlinemacos: {"name": "Touchline Atlas — macOS", "type": "Native Desktop Football Management Game", "icon": "⚽", "description": "A native macOS football-management simulation with a career workspace, club news, squad management, tactics, transfers and saved-game systems. Its desktop interface adapts football-management workflows to a resizable Mac window.", "features": ["Career dashboard, club news and manager inbox", "Squad, tactics and player roles", "Transfers, scouting and club finances", "Native desktop navigation and save-game systems"], "tech": ["Swift", "SwiftUI", "AppKit", "macOS"], "highlights": "The macOS project was originally named Football Director. Existing release screenshots carry the Touchline Atlas identity and show fictional Avelara Athletic career data.", "gallery": "Touchline Atlas — macOS", "gallerySummary": "Five native macOS release captures: career, tactics, main menu, squad and Club Shop. Career data is fictional."},
        wellnessspot: {
            name: "Wellness Spot",
            type: "Wellness Platform · Native iOS, Android & Web",
            icon: "🍃",
            description: "I built features for the native iOS and Android clients for wellness plans, packages and progress, and a separate Next.js portal for operations.",
            features: ["Native onboarding and guided wellness plans", "Food discovery and analysis booking", "Web customer overview and measurement trends", "Separate operations portal for staff"],
            tech: ["SwiftUI", "Kotlin", "Jetpack Compose", "Next.js", "TypeScript"],
            highlights: "The gallery shows the iPhone and Android apps and the customer-facing web workspace. It uses demo data and simulated measurements.",
            gallery: "Wellness Spot",
            gallerySummary: "iPhone and Android development captures and the desktop customer workspace, shown with demo data."
        },
        sjaj: {
            name: "Sjaj",
            type: "Cleaning Business Platform · Web & Mobile",
            icon: "✨",
            description: "I built booking and job-management workflows across a Next.js manager dashboard, an Expo mobile app for cleaners and clients, and a shared NestJS API backed by PostgreSQL.",
            features: ["Manager day overview, team assignments and exceptions", "Cleaning-job progress and checklists", "Customer service review and booking status", "Shared web/mobile domain and API contracts"],
            tech: ["Next.js", "React Native", "Expo", "NestJS", "PostgreSQL"],
            highlights: "The web gallery shows the seeded Sjaj Demo Cleaning business, with demo names, jobs, addresses and amounts.",
            gallery: "Sjaj",
            gallerySummary: "Five demo web views covering scheduling, job details, service completion and customer ratings."
        },
        lastinquisitor: {"name": "The Last Inquisitor", "type": "In Development · Mobile 3D Environment Prototype", "icon": "⚔️", "description": "An early mobile-first dark-fantasy project in Unity. The current playable environment explores an isometric forest and chapel scene, touch camera controls, lighting, scene readability and physical-device performance.", "features": ["Isometric forest and chapel environment", "Pan, pinch-to-zoom and accessible camera buttons", "Original chapel and graveyard scene dressing", "Physical-device lighting and performance validation"], "tech": ["Unity", "C#", "URP", "Blender"], "highlights": "Work in progress: the hunter marker is a placeholder and locomotion/combat are not implemented. The screenshot is an actual iPad development build, not a finished-game claim.", "gallery": "The Last Inquisitor", "gallerySummary": "Actual iPad development-build capture of the forest and chapel art prototype. Placeholder character; combat is not implemented."},
        petbuddy: {"name": "Pet Buddy", "type": "Native iPhone & iPad Pet Care Diary", "icon": "🐾", "description": "A native pet-care diary for profiles, daily care records, appointments and documents, with dedicated iPhone and iPad layouts.", "features": ["Multiple pet profiles and care timelines", "Medication, preventive care, diet and vet records", "Care calendar and local reminders", "Daily stories and pet-care quizzes", "PDF reports and measurement trends with Pet Buddy Plus", "Backup and restore with compatible .petdiary archives"], "tech": ["SwiftUI", "SwiftData", "StoreKit 2", "PDFKit"], "highlights": "Built the native care experience and Plus purchase flows while preserving existing pets, attachments and backup compatibility through the Pet Buddy rebrand. Release screenshots show sample pets and care records.", "gallery": "Pet Buddy", "gallerySummary": "Explore the home, pet profiles, care calendar, Plus report options and measurement trends on iPhone and iPad."},
        notevita: {"name": "NoteVita", "type": "Offline Family Health Diary · iPhone & iPad", "icon": "🌿", "description": "A native, offline health diary with separate family profiles, local health records and encrypted backup, available in Serbian and English.", "features": ["Separate family profiles and searchable health diaries", "Blood pressure, pulse and other measurements", "Medication courses, dose tracking and local reminders", "Health summary, document attachments and PDF sharing", "Password-protected encrypted backup and verified import", "StoreKit 2 Plus access for trends and advanced reports"], "tech": ["SwiftUI", "Swift Concurrency", "CryptoKit", "StoreKit 2"], "highlights": "Designed an offline data architecture with actor-based persistence, atomic protected snapshots and authenticated encrypted backups. No account or backend is needed. Release screenshots show sample family data.", "gallery": "NoteVita", "gallerySummary": "Today, diary, health summary, blood-pressure trends and encrypted backup, with adaptive iPhone and iPad layouts."},

        slikovnica: {"name": "Slikovnica", "type": "Native iPhone & iPad Coloring App", "icon": "🎨", "description": "A playful SwiftUI coloring app with illustrated collections, independent region painting and locally saved drawings.", "features": ["110 illustrated pages across six collections", "Region coloring with zoom, undo and eraser", "Locally saved drawings and progress", "Serbian and English interface", "Parental gate and StoreKit 2 collection access"], "tech": ["SwiftUI", "StoreKit 2", "MVVM", "Local Persistence"], "highlights": "A complete native coloring experience with a data-driven illustration catalog and layouts for iPhone and iPad.", "gallery": "Slikovnica", "gallerySummary": "Browse illustrated collections and color each region with a playful palette, undo and eraser. Shown in the English interface."},
        translato: {"name": "Translato", "type": "Native macOS Translation Workspace", "icon": "🌐", "description": "A native macOS computer-assisted translation app with a bilingual segment editor, local translation memory and document previews.", "features": ["Bilingual segment editing and translation status", "Local translation memory with exact and fuzzy matches", "Side-by-side document preview", "Find and replace across project segments", "Document import, export and on-device OCR"], "tech": ["SwiftUI", "SQLite / GRDB", "PDFKit", "Vision"], "highlights": "Published on the Mac App Store under my developer account. Keeps project editing and translation memory local, with optional machine-translation providers. The screenshots show an English-to-Serbian travel-guide sample.", "gallery": "Translato", "gallerySummary": "Translate documents segment by segment, reuse translation memory and review the result in a native Mac workspace.", "links": [{"label": "Translato on the App Store", "url": "https://apps.apple.com/rs/app/translato/id6815766459?mt=12"}, {"label": "My App Store developer profile", "url": "https://apps.apple.com/rs/developer/milos-stevanovic/id6811582503"}]},
        orbit: {"name": "Orbit", "type": "Native iOS & macOS Project Management", "icon": "🪐", "description": "A native SwiftUI workspace for projects and issues, with dedicated iPhone and macOS layouts. The current app stores each workspace locally and starts with demo projects.", "features": ["Cross-project dashboard and personal focus", "Five-state issue board and workspace search", "Project creation, team assignment and scheduling", "Archive and restore project workflows", "Local persistence across app launches"], "tech": ["SwiftUI", "macOS", "iOS", "Local Persistence"], "highlights": "A working local project-management app. The screenshots use bundled demo projects; cloud sync and Jira integration are not part of the current build.", "gallery": "Orbit", "gallerySummary": "Plan projects, track issues and manage teams in native iPhone and Mac layouts. Shown with demo data."},
        zoopal: {
            name: "ZooPal",
            type: "Pet Care & Diary · iPhone, iPad & Android",
            icon: "🐾",
            description: "ZooPal is a pet-care app for iPhone and iPad with a separate Android client. I built Android pet profiles, photo diaries and health records using Kotlin and Jetpack Compose.",
            features: ["Pet profiles and health records", "Photo diaries and care history", "Offline storage with Room", "Backend requests with OkHttp", "Adaptive iPhone and iPad layouts"],
            tech: ["Kotlin", "Jetpack Compose", "Coroutines", "Room", "OkHttp", "SwiftUI", "SwiftData"],
            highlights: "The gallery uses fictional pet data and shows iPhone and iPad release captures alongside the Android client in development.",
            gallery: "ZooPal",
            gallerySummary: "Updated iPhone home, pet profile and diary, plus iPad and Android layouts. Screens identify their platform."
        },
        karolina: {"name": "Karolina Prevodi", "type": "Bilingual Translation Website", "icon": "✍️", "description": "A responsive translation-services website with Serbian and English content, an editorial visual identity and a guided quote-request form.", "features": ["Live Serbian / English language switching", "Translation service catalog", "Three-step collaboration overview", "Two-step quote-request interface", "Responsive layout and FAQ"], "tech": ["HTML", "CSS", "JavaScript", "Responsive Design"], "highlights": "A consistent visual identity across Serbian and English, with a clear path from exploring services to requesting a quote.", "gallery": "Karolina Prevodi", "gallerySummary": "An editorial website for translation services, with live Serbian / English switching and a guided inquiry flow."},

        schueco: {
            name: 'Schueco SmartTouch',
            type: 'Smart Door Control',
            icon: '🏢',
            description: 'Companion app for Schüco smart door systems: Bluetooth unlock, Touch ID, remote access and live door status. Came to me as a struggling legacy codebase.',
            features: [
                'Bluetooth Smart Lock Integration',
                'Touch ID Authentication',
                'Remote Door Control',
                'Real-time Monitoring',
                'Push Notifications',
                'Security Analytics'
            ],
            tech: ['Swift', 'Core Bluetooth', 'Touch ID', 'Push Notifications', 'Security'],
            highlights: 'A freelance rescue job: revived and stabilised an inherited app and made a smart-lock flow people can trust with their front door.'
        },
        beleen: {
            name: 'Saand',
            type: 'Delivery System',
            icon: '📦',
            description: 'Delivery ops app: route planning, live driver tracking and a token/bonus system that pays drivers for good performance.',
            features: [
                'Route Optimization Algorithms',
                'Real-time Driver Tracking',
                'Performance Scoring System',
                'Token/Bonus Rewards',
                'Gamification Elements',
                'Analytics Dashboard'
            ],
            tech: ['Swift', 'Core Location', 'MapKit', 'Core Data', 'Algorithms', 'Analytics'],
            highlights: 'The interesting part was the incentive design: scoring, streaks and bonuses drivers actually cared about, on top of solid MapKit routing.'
        },
        footballerista: {
            name: 'Footballerista',
            type: 'Social Sports Platform',
            icon: '⚽',
            description: 'Social network for footballers: player profiles, match highlights, messaging and a community feed, all on Firebase.',
            features: [
                'Player Profiles & Stats Tracking',
                'Real-time Messaging System',
                'Media Sharing & Highlights',
                'Social Feed & Community Features',
                'Push Notifications',
                'Firebase Backend Integration'
            ],
            tech: ['Swift', 'Firebase', 'Push Notifications', 'Core Data', 'Cloud Functions'],
            highlights: 'One of my formative Comit projects: real-time chat, media upload pipelines and a feed for a niche athletic community.'
        },
        openjobs: {
            name: 'Open Jobs',
            type: 'Job Search Platform',
            icon: '💼',
            description: 'Job board app connecting seekers with employers: search filters, alerts, saved applications and profiles, with a local SQLite cache.',
            features: [
                'Advanced Search Filters',
                'Real-time Job Notifications',
                'Application Tracking System',
                'Profile Management',
                'SQLite Database',
                'REST API Integration'
            ],
            tech: ['Swift', 'SQLite', 'REST API', 'Push Notifications', 'Core Data'],
            highlights: 'The goal was to cut the distance between seeing an ad and applying to a couple of taps. Filters and alerts did most of that work.'
        },
        chaty: {
            name: 'Chaty',
            type: 'Messaging Platform',
            icon: '💬',
            description: 'Messaging app with E2E encryption, group chats, file sharing and WebRTC voice/video calls over Socket.io.',
            features: [
                'End-to-End Encryption',
                'Group Chats & Channels',
                'File Sharing System',
                'Voice/Video Calling',
                'WebRTC Integration',
                'Socket.io Real-time'
            ],
            tech: ['Swift', 'Socket.io', 'WebRTC', 'Core Data', 'Encryption'],
            highlights: 'Encryption and multi-device sync were the hard parts; getting both right without slowing message delivery took most of the effort.'
        },
        paincheck: {
            name: 'PainChek',
            type: 'Camera-Based Pain Assessment · iOS',
            icon: '🏥',
            description: 'I worked on the iOS app for PainChek at Darwin Digital. It combines camera-based facial analysis with carer observations to support pain assessment for people who have difficulty communicating it.',
            features: [
                'Camera-based facial analysis',
                'Digital checklists for carer observations',
                'Assessment results recorded in the app'
            ],
            tech: ['Swift', 'iOS', 'Digital Health'],
            links: [{ label: 'How PainChek works', url: 'https://www.painchek.com/us/how-it-works/' }]
        },
        caregiver: {
            name: 'Caregiver',
            type: 'Elder Care App',
            icon: '🤝',
            description: 'Elder-care app: medication schedules, emergency alerts, activity monitoring and coordination between family members.',
            features: [
                'Medication Schedules',
                'Emergency Alerts System',
                'Activity Monitoring',
                'Family Coordination',
                'GPS Tracking',
                'Fall Detection'
            ],
            tech: ['Swift', 'Core Location', 'HealthKit', 'Push Notifications', 'Core Motion'],
            highlights: 'Fall detection on Core Motion plus an emergency escalation chain. That combination was the feature families bought the app for.'
        },
        fss: {
            name: 'FSS',
            type: 'Financial System',
            icon: '🏦',
            description: 'Enterprise finance app: real-time analytics, automated reporting and multi-currency support for compliance-heavy businesses.',
            features: [
                'Real-time Financial Analytics',
                'Automated Reporting System',
                'Multi-Currency Support',
                'Security & Compliance',
                'Dashboard Integration',
                'Data Visualization'
            ],
            tech: ['Swift', 'Core Data', 'Charts', 'Security', 'Analytics'],
            highlights: 'Numbers people stare at all day have to be right, and fast. Most of the work went into data correctness and chart performance.'
        },
        vquarter: {
            name: 'Vquarter',
            type: 'Service Provider Platform',
            icon: '🏠',
            description: 'Marketplace connecting renters with cleaning, transport and other home services: booking, chat and Stripe payments in one flow.',
            features: [
                'Service Provider Matching',
                'Booking & Scheduling System',
                'Secure Payment Processing',
                'Service Rating System',
                'Real-time Communication',
                'Service History Tracking'
            ],
            tech: ['Swift', 'Core Data', 'WebSocket', 'Stripe', 'Core Location', 'Push Notifications'],
            highlights: 'Two-sided marketplace mechanics - matching, ratings, cancellations - plus WebSocket chat and Stripe. A lot of product in one app.'
        },
        ding: {
            name: 'Ding',
            type: 'Mobile Top-Up Platform',
            icon: '📱',
            description: 'I worked on payments and account flows for Ding’s iOS app at Endava. Ding lets people send prepaid mobile credit to family and friends in more than 150 countries.',
            features: [
                'International Mobile Top-Up',
                'Multi-Network Support',
                'Secure Payment Processing',
                'Real-time Delivery',
                'Multi-Currency Support',
                'Transaction History'
            ],
            tech: ['Swift', 'Stripe', 'Core Data', 'Network APIs', 'Security', 'Push Notifications'],
            highlights: 'Checkout handles payment rules that vary by country and mobile operator.',
            gallery: 'Ding',
            gallerySummary: 'I contributed to the iOS app at Endava. These official App Store promotional images are supplied by ezetop and show the current public listing.',
            links: [{ label: 'View on the App Store', url: 'https://apps.apple.com/us/app/ding-top-up-mobile-recharge/id425228767' }]
        },
        admiral: {
            name: 'Admiral Insurance',
            type: 'Insurance Management Platform',
            icon: '🛡️',
            description: 'I contributed to the Admiral Insurance iOS app over four years at Endava. The app covers policy management, documents, emergency assistance and MyTrips journey tracking.',
            features: [
                'Policy Management',
                'Document Storage & Printing',
                'Emergency Assistance',
                'MyTrips Journey Tracking',
                'Data Control & Privacy',
                'Customer Support Integration'
            ],
            tech: ['Swift', 'Core Data', 'Core Location', 'Security', 'PDF Generation', 'Push Notifications'],
            highlights: 'The iOS team maintained a long-lived production app while delivering new work.',
            gallery: 'Admiral Insurance',
            gallerySize: 4, // Owner-approved exception: the official App Store listing has four images.
            gallerySummary: 'A client iOS project I contributed to. These four official App Store promotional images are supplied by Admiral group and show the current public listing.',
            links: [{ label: 'View on the App Store', url: 'https://apps.apple.com/gb/app/admiral-insurance/id1461457136' }]
        },
        catchase: {
            name: 'Cute Bubble Chase',
            type: 'iOS Arcade Game',
            icon: '🐱',
            description: 'A SpriteKit arcade game: move your cat, pop bouncing balls and dodge danger. Includes daily challenges, collectible cosmetics and a guided introduction to power-ups.',
            features: [
                'Cat Character Control',
                'Ball-Popping & Dodging Mechanics',
                'Progressive Difficulty Levels',
                'Fun Animations & Effects',
                'Score Tracking System',
                'Level Progression'
            ],
            tech: ['Swift', 'SpriteKit', 'Core Animation', 'Game Physics', 'Sound Effects', 'Game Center'],
            gallerySummary: 'A SpriteKit arcade game with daily challenges, illustrated guides and power-ups on iPhone and iPad.',
            gallery: 'Cute Bubble Chase',
            highlights: 'A pure fun project. SpriteKit physics, springy animations and difficulty tuning until the cat felt just right.'
        },
        endava: {
            name: 'Endava Projects',
            type: 'Enterprise Solutions',
            icon: '🏢',
            description: 'Enterprise iOS work for global insurance and telecom clients: collaboration tools, real-time features and analytics.',
            features: [
                'Team Collaboration Tools',
                'Project Management System',
                'Real-time Communication',
                'Performance Analytics',
                'CI/CD Integration',
                'Multi-platform Support'
            ],
            tech: ['Swift', 'SwiftUI', 'Combine', 'Core Data', 'CI/CD'],
            highlights: 'Long-lived codebases, strict compliance and cross-functional teams. The craft here is shipping predictably, release after release.'
        },
        thehive: {
            name: 'The Hive',
            type: 'AI-Assisted Product Development',
            icon: '🐝',
            description: 'My development setup for using coding agents across native apps, web platforms and games. I use it to investigate issues, draft changes and prepare tests.',
            features: [
                'Issue investigation and implementation drafts',
                'Test preparation',
                'Manual review of code changes',
                'Build and test checks before release'
            ],
            tech: ['AI-Assisted Development', 'Product Engineering', 'Software Quality'],
            highlights: 'I used this workflow on independent projects including BugCorpGame, VaskoTaxi and Kuvar.',
            links: []
        },
        bugcorpduel: {
            name: 'BugCorpGame',
            type: 'iOS P2P Card Game',
            icon: '🃏',
            description: 'Yu-Gi-Oh-style card duel game with an IT-office parody theme: deterministic seeded game engine, collectible card catalogue with reaction/trap windows, and serverless peer-to-peer multiplayer.',
            features: [
                'Deterministic seeded game engine',
                'collectible card catalogue & trap/reaction windows',
                'Serverless P2P multiplayer (MultipeerConnectivity)',
                'Simulation-driven balance tuning (400 auto-matches)',
                '100+ unit & integration tests',
                'Swift 6 strict concurrency'
            ],
            tech: ['SwiftUI', 'SpriteKit', 'MultipeerConnectivity', 'Network.framework', 'SwiftPM', 'XcodeGen'],
            gallerySummary: 'Corporate-satire card battles with a redesigned home, illustrated executives and collectible card packs.',
            gallery: 'BugCorpGame',
            highlights: 'Developed with The Hive, with hands-on engineering review and gameplay validation.'
        },
        beambike: {
            name: 'BeamBike',
            type: 'E-Bike Sharing Platform MVP',
            icon: '🚲',
            description: 'Full-stack mobility MVP: native iOS and Android apps with a realtime map of bikes and geofenced zones, phone/OTP and social sign-in, admin dashboard, and an IoT device simulator.',
            features: [
                'Native iOS (SwiftUI) & Android (Jetpack Compose)',
                'Node.js/TypeScript backend with PostgreSQL & Redis',
                'Realtime fleet state over WebSocket',
                'Geofenced zones on MapLibre / OpenStreetMap',
                'React admin dashboard & IoT simulator',
                'i18n across 7 languages incl. full RTL'
            ],
            tech: ['SwiftUI', 'Kotlin', 'Node.js', 'PostgreSQL', 'Redis', 'WebSocket', 'MapLibre'],
            gallery: 'BeamBike',
            highlights: 'A mobility MVP spanning native mobile apps, a shared backend and an admin dashboard. Developed with The Hive.',
            links: []
        },
        footballmanager: {
            name: 'Touchline Atlas Mobile',
            type: 'iPhone & iPad Football Management Game',
            icon: '⚽',
            description: 'A native football club-management game for iPhone and iPad: build a career in a fictional football world, manage your club and follow the season.',
            features: [
                'Career creation with club and league selection',
                'Club news, board messages and contract updates',
                'Season overview, upcoming fixtures and league standings',
                'Club hub for squad, tactics, training and transfers',
                'Locally saved careers with backup and recovery',
                'Dedicated iPhone and iPad layouts'
            ],
            tech: ['SwiftUI', 'Game Simulation', 'Local Persistence'],
            highlights: 'The gallery shows the 6 October 2026 release-build captures with fictional clubs and players. This build uses the Football Director name in its interface.',
            gallery: 'Touchline Atlas Mobile',
            gallerySummary: 'Explore career creation, club news, the season overview and club management across iPhone and iPad.',
            links: []
        },
        vaskotaxi: {
            name: 'VaskoTaxi',
            type: 'iOS Ride-Hailing App',
            icon: '🚕',
            description: 'Ride-hailing app for Belgrade with passenger and driver modes: route and fare preview on the map, ride classes (Standard / Comfort / Van), extras, and live tracking of the driver on the way.',
            features: [
                'Passenger & driver roles in one app',
                'Route, ETA and upfront fare on Apple Maps',
                'Ride classes and paid extras (pet, child seat, luggage)',
                'Live driver tracking during the ride',
                'Onboarding flow and ride history',
                'Localised for Serbian and English'
            ],
            tech: ['SwiftUI', 'MapKit', 'Core Location', 'Swift Concurrency', 'Localization'],
            highlights: 'Two apps in one codebase with a shared domain layer - the same booking model drives both the passenger and the driver screens. Built with The Hive.',
            gallery: 'VaskoTaxi',
            links: []
        },
        servicehub: {
            name: 'ServiceHub',
            type: 'iOS Local Services Marketplace',
            icon: '🛠️',
            description: 'Marketplace for local service providers: customers find verified pros on a map within a chosen radius, book them and chat; providers manage their profile, bookings and reviews.',
            features: [
                'Customer / provider mode with in-app switching',
                'Map search with adjustable radius',
                'Verified provider profiles with ratings',
                'Bookings, favourites and messaging',
                'Onboarding tailored per role',
                'Multi-language UI'
            ],
            tech: ['SwiftUI', 'MapKit', 'Core Location', 'Swift Concurrency', 'Localization'],
            highlights: 'A two-sided marketplace where one account can be both customer and provider - role switching without duplicating screens. Built with The Hive.',
            gallery: 'ServiceHub',
            links: []
        },
        kuvar: {
            name: 'Kuvar',
            type: 'iOS Cooking & Meal-Planning App',
            icon: '🍳',
            description: 'Ingredient-first cooking assistant: tell it what is in your fridge and it suggests recipes, builds a daily meal plan with calories, and keeps a cookbook of recipe packs (Serbian traditional table included).',
            features: [
                'Recipes from the ingredients you already have',
                'Daily meal plan with calorie totals per meal',
                'Recipe packs and a searchable cookbook',
                'Quick filters: time, difficulty, calories',
                'Saved recipes and cooking history',
                'Guided cooking with step timers on iPhone and iPad'
            ],
            tech: ['SwiftUI', 'Swift Concurrency', 'Core Data', 'Localization'],
            highlights: 'Small product, lots of data modelling - ingredients, recipes, plans and nutrition all had to stay consistent. Built with The Hive.',
            gallerySummary: 'Browse recipes and cook with guided steps and timers. Compare the iPhone layout with the dedicated iPad sidebar and wide cooking workspace.',
            gallery: 'Kuvar',
            links: []
        },
        imovo: {
            name: 'iMovo',
            type: 'Real-Estate Web Platform',
            icon: '🏠',
            description: 'Property portal for Serbia: sale and rental listings with faceted filters, map search with price pins, new-development showcases, agency pages, a mortgage calculator and an admin panel for agents.',
            features: [
                'Faceted search: type, price, area, rooms, floor, year',
                'Map search with price pins and draw-your-own-area',
                'New developments and agency showcases',
                'Mortgage calculator with bank-offer request form',
                'Admin panel for listings and agents',
                'Serbian / English localisation'
            ],
            tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'OpenStreetMap', 'i18n'],
            highlights: 'A web product combining property discovery, agency tools and a mortgage calculator. Developed with The Hive.',
            gallery: 'iMovo',
            links: []
        }
    },

    /* ---------- Skills ---------- */
    skills: {
        swift: {
            name: 'Swift', type: 'Primary language · 10+ years', icon: '🟠',
            description: 'My primary language since 2015, across every production iOS app I have shipped. Comfortable from low-level performance work to modern, expressive API design.',
            usedIn: ['Every iOS app in the last decade', 'Swift 6 with strict concurrency on recent work', 'Both greenfield builds and legacy rescues'],
            related: ['SwiftUI', 'UIKit', 'Combine', 'Swift Concurrency']
        },
        swiftui: {
            name: 'SwiftUI', type: 'Modern declarative UI', icon: '🔷',
            description: 'Declarative UI framework I reach for on new features and greenfield products, combined with UIKit where fine-grained control is needed.',
            usedIn: ['DXP hybrid insurance platform at Endava', 'Personal apps - Bug Corp Duel, BeamBike', 'New feature modules in mixed UIKit/SwiftUI apps'],
            related: ['Combine', 'Swift Concurrency', 'MVVM']
        },
        uikit: {
            name: 'UIKit', type: 'Deep custom UI & legacy expertise', icon: '🟣',
            description: 'Years of imperative UI work - custom controls, complex animations, and performance-critical screens. My go-to for pixel-perfect and legacy codebases.',
            usedIn: ['Most production apps 2015–2022', 'Custom components & advanced animations', 'Refactoring and stabilising inherited UI'],
            related: ['Core Animation', 'Auto Layout', 'Objective-C']
        },
        objc: {
            name: 'Objective-C', type: 'Legacy codebases & interop', icon: '⚫',
            description: 'Fluent in Objective-C for maintaining and modernising older codebases, and for bridging cleanly with Swift in mixed-language projects.',
            usedIn: ['Inherited codebases at Comit International', 'Swift ↔ Objective-C interop & bridging', 'Incremental migration of legacy apps to Swift'],
            related: ['Swift', 'UIKit']
        },
        android: {
            name: 'Android', type: 'Kotlin · Jetpack Compose', icon: '📱',
            description: 'I build native Android features in Kotlin and Jetpack Compose, including offline data and API integration.',
            usedIn: ['Wellness Spot’s native Android wellness flows', 'ZooPal’s Android pet profiles, photo diaries and health records'],
            related: ['Coroutines', 'Room', 'OkHttp']
        },
        webapi: {
            name: 'Web & APIs', type: 'Next.js · NestJS · PostgreSQL', icon: '🌐',
            description: 'I build web dashboards and APIs that support customer and staff workflows alongside the mobile apps.',
            usedIn: ['Wellness Spot’s Next.js operations portal', 'Sjaj’s dashboard, bookings and shared API'],
            related: ['TypeScript', 'Next.js', 'NestJS', 'PostgreSQL', 'React Native']
        },
        mvvm: {
            name: 'MVVM / Clean Architecture', type: 'Default for greenfield products', icon: '🏛️',
            description: 'My default architecture: clear separation of concerns, testable view models, and a domain layer independent of frameworks. Keeps large apps maintainable as teams grow.',
            usedIn: ['Greenfield products at Endava', 'Testable, mockable business logic', 'Onboarding new team members quickly'],
            related: ['Combine', 'Dependency Injection', 'Unit Testing']
        },
        concurrency: {
            name: 'Swift Concurrency', type: 'async/await, actors, strict concurrency', icon: '⚡',
            description: 'Modern structured concurrency - async/await, actors and task isolation - for safe, readable asynchronous code without callback pyramids or data races.',
            usedIn: ['Bug Corp Duel - Swift 6 strict concurrency', 'Modernising callback- and closure-heavy code', 'Actor-isolated networking & game state'],
            related: ['Swift', 'Combine']
        },
        combine: {
            name: 'Combine / RxSwift', type: 'Reactive data flow', icon: '🔗',
            description: 'Reactive frameworks for binding data through the app - network streams, form state and UI updates - pairing naturally with MVVM.',
            usedIn: ['Data binding in MVVM view models', 'Network and event streams', 'Debounced search & form validation'],
            related: ['SwiftUI', 'MVVM']
        },
        viper: {
            name: 'VIPER / VIP', type: 'Large modular codebases', icon: '🧩',
            description: 'Highly modular architectures with strict boundaries between components - useful on large apps with multiple teams where clear ownership matters.',
            usedIn: ['Large multi-team enterprise codebases', 'Strict module boundaries & routing', 'Independently testable components'],
            related: ['MVVM', 'Clean Architecture']
        },
        multiagent: {
            name: 'AI-Assisted Development', type: 'The Hive · Personal development system', icon: '🐝',
            description: 'I use coding agents to investigate issues, draft changes and prepare tests. I built The Hive around that workflow and review changes and verify the behavior myself.',
            usedIn: ['The Hive - my personal development system', 'BugCorpGame - independent card game', 'Kuvar - cooking and meal-planning app'],
            related: ['Product Engineering', 'Engineering Review', 'Software Quality']
        },
        aidelivery: {
            name: 'AI-Assisted Delivery', type: 'Former AI Champion · Endava', icon: '🚀',
            description: 'As AI Champion at Endava, I helped engineers adopt coding agents and AI-assisted review in their development and delivery workflows.',
            usedIn: ['AI initiatives across insurance & telecom projects', 'Mentoring developers in AI-assisted development', 'Automated review and delivery workflows'],
            related: ['AI Code Review', 'Workflow Automation', 'Mentoring']
        },
        llm: {
            name: 'LLM Integration', type: 'Claude Code · prompt engineering', icon: '🧠',
            description: 'Building with LLMs daily - from prompt design and tool-calling agents to integrating model-driven features into products and internal tooling.',
            usedIn: ['Claude Code as a daily driver for product delivery', 'Prompt engineering for reliable agent behaviour', 'Internal AI tooling and automations'],
            related: ['Claude Code', 'Prompt Engineering', 'AI Agents']
        },
        coreml: {
            name: 'On-Device ML', type: 'Core ML · Vision', icon: '👁️',
            description: 'On-device inference with Core ML and Vision - practical, privacy-friendly ML features inside iOS apps.',
            usedIn: ['AI-supported pain-detection healthcare apps (Darwin Digital)', 'Vision-based features in production apps'],
            related: ['Core ML', 'Vision', 'HealthKit']
        }
    },

    /* ---------- Experience ---------- */
    experience: {
        freelance: {
            name: 'Independent Senior Software Engineer', type: 'Self-employed · 1 Sep 2026 – Present', icon: '💻',
            description: 'I build native iOS and Android features and the web tools and APIs that support them, from implementation through release.',
            contributions: [
                'Wellness Spot: native iOS and Android features and a separate Next.js operations portal',
                'Sjaj: booking and job management across web, mobile and a shared API',
                'ZooPal: Android pet profiles, photo diaries and health records with offline storage and API integration'
            ],
            focus: ['Swift', 'Kotlin', 'Jetpack Compose', 'Next.js', 'React Native', 'NestJS', 'PostgreSQL']
        },
        'endava-senior': {
            name: 'Senior iOS Developer (Senior Engineer)', type: 'Endava · Jan 2022 – Aug 2026', icon: '🏢',
            description: 'I led iOS delivery for insurance and telecom clients at Endava, from concept to production, and mentored iOS engineers.',
            contributions: [
                'Owned app lifecycles end-to-end, from concept to production',
                'Applied MVVM / Clean Architecture with SwiftUI, UIKit & Combine',
                'Worked on iOS payments and account flows for Ding',
                'Contributed to the Admiral Insurance iOS app over four years'
            ],
            focus: ['Swift', 'SwiftUI', 'Combine', 'CI/CD', 'Leadership']
        },
        'endava-ai': {
            name: 'AI Champion', type: 'Endava · Dec 2025 – Aug 2026', icon: '🤖',
            description: 'As AI Champion, I helped engineers adopt coding agents and AI-assisted code review across delivery teams.',
            contributions: [
                'Helped engineers integrate coding agents into their daily work',
                'Introduced AI-assisted code review workflows',
                'Built internal tooling for automation and delivery'
            ],
            focus: ['Coding Agents', 'Code Review', 'Automation', 'Mentoring']
        },
        'endava-coach': {
            name: 'Career Coach', type: 'Endava · Mar 2024 – Aug 2026', icon: '🎓',
            description: 'Coached iOS developers across the organisation: growth plans, 1:1 sessions, technical interviews and coding standards.',
            contributions: [
                'Structured growth plans and regular 1:1 mentoring',
                'Conducted technical interviews and set coding standards',
                'Ran workshops and knowledge-sharing sessions',
                'Supported professional development and career guidance'
            ],
            focus: ['Mentoring', 'Career Development', 'Technical Leadership', 'Team Building']
        },
        'darwin': {
            name: 'Senior iOS Developer', type: 'Darwin Digital · Nov 2019 – Jan 2022', icon: '🏥',
            description: 'Built healthcare iOS apps including PainChek, working with research teams, data scientists and backend developers.',
            contributions: [
                'Worked on iOS features for camera-based pain assessment and secure handling of patient data',
                'Refactored legacy codebases, improving stability and performance',
                'Optimised app responsiveness and memory usage',
                'Translated messy medical requirements into apps clinicians could use'
            ],
            focus: ['Swift', 'HealthKit', 'Core Data', 'HIPAA', 'Charts']
        },
        'comit': {
            name: 'iOS Developer', type: 'Comit International · Jul 2015 – Nov 2019', icon: '💼',
            description: 'Grew from junior to mid-level building apps across social, logistics, on-demand and betting verticals in Objective-C and Swift.',
            contributions: [
                'Shipped apps across social, logistics, on-demand and gaming domains',
                'Adapted to clean, well-structured and complex inherited codebases alike',
                'Progressed from junior to mid-level through consistent delivery',
                'Built strong fundamentals in UIKit and mobile architecture'
            ],
            focus: ['Objective-C', 'Swift', 'UIKit', 'Firebase']
        }
    }
};
