/* ============================================================
   CONTENT DATA - projects, skills & experience
   ------------------------------------------------------------
   This is the single place to edit site content shown in the
   detail modals. Logic lives in app-safari.js and reads from
   window.CONTENT_DATA; media for the Gallery tab is registered
   separately in gallery-data.js.

   Optional project fields:
     gallery  exact `project` name used in gallery-data.js -
              adds a "View screenshots" button to the modal
              that opens the Gallery tab pre-filtered.
     links    [{ label, url }] - external links (GitHub repo,
              App Store, demo video, write-up) shown as buttons.
   ============================================================ */
window.CONTENT_DATA = {

    /* ---------- Projects ---------- */
    projects: {
        translato: {"name": "Translato", "type": "Native macOS Translation Workspace", "icon": "🌐", "description": "A native macOS computer-assisted translation app with a bilingual segment editor, local translation memory and document previews.", "features": ["Bilingual segment editing and translation status", "Local translation memory with exact and fuzzy matches", "Side-by-side document preview", "Find and replace across project segments", "Document import, export and on-device OCR"], "tech": ["SwiftUI", "SQLite / GRDB", "PDFKit", "Vision"], "highlights": "Keeps project editing and translation memory local, with optional machine-translation providers. The screenshots show an English-to-Serbian travel-guide sample.", "gallery": "Translato", "gallerySummary": "Translate documents segment by segment, reuse translation memory and review the result in a native Mac workspace."},
        orbit: {"name": "Orbit", "type": "Native iOS & macOS Project Management", "icon": "🪐", "description": "A native SwiftUI workspace for projects and issues, with dedicated iPhone and macOS layouts. The current app stores each workspace locally and starts with demo projects.", "features": ["Cross-project dashboard and personal focus", "Five-state issue board and workspace search", "Project creation, team assignment and scheduling", "Archive and restore project workflows", "Local persistence across app launches"], "tech": ["SwiftUI", "macOS", "iOS", "Local Persistence"], "highlights": "A working local project-management app. The screenshots use bundled demo projects; cloud sync and Jira integration are not part of the current build.", "gallery": "Orbit", "gallerySummary": "Plan projects, track issues and manage teams in native iPhone and Mac layouts. Shown with demo data."},
        zoopal: {"name": "ZooPal", "type": "Pet Care & Diary · iOS", "icon": "🐾", "description": "An iOS pet-care app organised around Home, Diary, Pets and More. The gallery shows its built-in stories home.", "features": ["Daily pet-care facts and quizzes", "Pet profiles and health records", "Diary entries with photos and voice notes", "Medication, symptom and vet-visit tracking"], "tech": ["SwiftUI", "SwiftData", "AVFoundation", "Speech"], "highlights": "Combines pet records and journaling with an approachable daily reading experience. The gallery shows the stories home.", "gallery": "ZooPal", "gallerySummary": "A pet-care companion with diary and health workflows. This capture shows the stories and daily quiz home."},
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
            name: 'PainCheck',
            type: 'Healthcare App',
            icon: '🏥',
            description: 'App for chronic pain patients: symptom tracking, medication reminders, appointments and readable health charts, with HIPAA-compliant data handling.',
            features: [
                'Pain Tracking & Analytics',
                'Medication Reminders',
                'Doctor Appointments',
                'Health Analytics Dashboard',
                'HIPAA Compliance',
                'HealthKit Integration'
            ],
            tech: ['Swift', 'HealthKit', 'Core Data', 'Charts', 'HIPAA'],
            highlights: 'Healthcare data is unforgiving. Secure storage, audit-friendly flows and charts a patient can actually read were the priorities.'
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
            description: 'Ding lets people send prepaid mobile credit to family and friends in 150+ countries. I worked on the iOS app at Endava.',
            features: [
                'International Mobile Top-Up',
                'Multi-Network Support',
                'Secure Payment Processing',
                'Real-time Delivery',
                'Multi-Currency Support',
                'Transaction History'
            ],
            tech: ['Swift', 'Stripe', 'Core Data', 'Network APIs', 'Security', 'Push Notifications'],
            highlights: 'Business rules change per country and operator, and checkout must never break. A good lesson in defensive design around payments.'
        },
        admiral: {
            name: 'Admiral Insurance',
            type: 'Insurance Management Platform',
            icon: '🛡️',
            description: 'App for one of the biggest UK insurers: policies, documents, emergency assistance and MyTrips journey tracking.',
            features: [
                'Policy Management',
                'Document Storage & Printing',
                'Emergency Assistance',
                'MyTrips Journey Tracking',
                'Data Control & Privacy',
                'Customer Support Integration'
            ],
            tech: ['Swift', 'Core Data', 'Core Location', 'Security', 'PDF Generation', 'Push Notifications'],
            highlights: 'Insurance at UK scale means strict compliance, accessibility and releases that simply cannot break for millions of policyholders.'
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
            type: 'Multi-Agent Orchestration Framework',
            icon: '🐝',
            description: 'Custom multi-agent development framework built on Claude Code: an architect/delegate/worker agent hierarchy that builds complete multi-platform products from a single frozen contract.',
            features: [
                'Architect / Delegate / Worker agent hierarchy',
                'Frozen JSON Schema contract as source of truth',
                'Type generation for Swift, Kotlin, TypeScript & Python',
                'Parallel task dispatch with disjoint file ownership',
                'Automated build & test gates per wave',
                'Deterministic conflict resolution'
            ],
            tech: ['Claude Code', 'Python', 'JSON Schema', 'Codegen', 'AI Agents'],
            highlights: 'Personal framework used to deliver several complete products end-to-end with fleets of AI agents working in parallel - Bug Corp Duel, BeamBike, Football Manager, VaskoTaxi, ServiceHub, Kuvar and iMovo all came out of it.',
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
            gallerySummary: 'Corporate-satire card battles, collectible characters and pack reveals.',
            gallery: 'BugCorpGame',
            highlights: 'Built end-to-end through The Hive: 116 orchestrated AI-agent tasks, full green build & test gate.'
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
            highlights: 'Contract-first monorepo: 101 endpoints and 114 models generated for 4 platforms from one frozen schema.',
            links: []
        },
        footballmanager: {
            name: 'Football Manager',
            type: 'iOS Sports Management Game',
            icon: '⚽',
            description: 'Club-management game for iPhone: pick a club, run the squad, tactics and staff, negotiate contracts and transfers, then watch matches play out in a live 2D simulation with commentary.',
            features: [
                'Live 2D match engine with play-by-play commentary',
                'League tables, fixtures and multi-division seasons',
                'Squad, tactics, staff and club-hub management',
                'Dressing-room team talks that affect morale',
                'Inbox with news, contract and transfer negotiations',
                'Save / load careers with persistent game state'
            ],
            tech: ['SwiftUI', 'SpriteKit', 'Swift Concurrency', 'Core Data', 'Game Simulation'],
            highlights: 'The match engine was the hard part: a deterministic simulation that stays believable at 2x speed, rendered in SpriteKit on top of a SwiftUI shell. Built with The Hive.',
            gallery: 'Football Manager',
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
            gallerySummary: 'Discover recipes, explore ingredients and cook step by step with timers. Shown on iPhone and iPad.',
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
            highlights: 'The one web product in the set - same contract-first approach as BeamBike, with the listing schema driving both the API and the UI. Built with The Hive.',
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
            name: 'Multi-Agent Orchestration', type: 'The Hive · fleets of coding agents', icon: '🐝',
            description: 'Designing and directing fleets of autonomous coding agents that ship complete products - an architect / delegate / worker hierarchy working from a frozen contract, with parallel task dispatch and automated build & test gates. I define the architecture and contracts, review the output and use build and test checks to validate the result.',
            usedIn: ['The Hive - my orchestration framework for Claude Code', 'Bug Corp Duel - 116 orchestrated agent tasks, green build & test gate', 'BeamBike - contract-first monorepo: 101 endpoints, 114 models, 4 platforms'],
            related: ['Claude Code', 'JSON Schema', 'Codegen', 'CI gates']
        },
        aidelivery: {
            name: 'AI-Assisted Delivery', type: 'Former AI Champion · Endava', icon: '🚀',
            description: 'Experience supporting AI adoption across delivery as AI Champion at Endava - project integration and monitoring, developer enablement, AI-assisted code review and workflow automation.',
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
            listLabel: 'Available for',
            name: 'Freelance Senior iOS Developer', type: 'Self-employed · 1 Sep 2026 – Present', icon: '💻',
            description: 'Independent since 1 September 2026. Open to full-time and contract roles, remote work and relocation. I bring 10+ years of iOS experience, from enterprise and healthcare apps to independent games and product MVPs.',
            contributions: [
                'Available for native iOS development with Swift, SwiftUI and UIKit',
                'Product architecture, legacy-code improvements and performance work',
                'AI-assisted development with hands-on review and build/test validation',
                'Based in Belgrade; open to relocation and remote work. Employer visa / work permit sponsorship required for relocation'
            ],
            focus: ['Swift', 'SwiftUI', 'UIKit', 'Clean Architecture', 'AI-Assisted Delivery']
        },
        'endava-senior': {
            name: 'Senior iOS Developer (Senior Engineer)', type: 'Endava · Jan 2022 – Aug 2026', icon: '🏢',
            description: 'I led iOS development for insurance and telecom clients at Endava, owning apps from first concept to production.',
            contributions: [
                'Owned app lifecycles end-to-end, from concept to production',
                'Applied MVVM / Clean Architecture with SwiftUI, UIKit & Combine',
                'Kept large codebases fast and maintainable as teams grow',
                'Collaborated across cross-functional teams in an agile setup'
            ],
            focus: ['Swift', 'SwiftUI', 'Combine', 'CI/CD', 'Leadership']
        },
        'endava-ai': {
            name: 'AI Champion', type: 'Endava · Dec 2025 – Aug 2026', icon: '🤖',
            description: 'As AI Champion I supported AI adoption across delivery: project integration, monitoring, developer enablement and workflow automation.',
            contributions: [
                'Drove AI project integration, monitoring and delivery automation',
                'Enabled and mentored developers in AI-assisted development',
                'Championed AI code review and multi-agent workflows',
                'Built internal tooling on Claude Code and agent orchestration'
            ],
            focus: ['Claude Code', 'Multi-Agent Orchestration', 'AI Code Review', 'Prompt Engineering']
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
            description: 'Built healthcare technology applications with secure, HIPAA-compliant data handling, working closely with research teams, data scientists and backend developers.',
            contributions: [
                'Delivered HIPAA-compliant apps for pain detection in infants & the elderly',
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
