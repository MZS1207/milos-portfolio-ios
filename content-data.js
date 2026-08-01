/* ============================================================
   CONTENT DATA - projects, skills & experience
   ------------------------------------------------------------
   This is the single place to edit site content shown in the
   detail modals. Logic lives in app-safari.js and reads from
   window.CONTENT_DATA; media for the Gallery tab is registered
   separately in gallery-data.js.
   ============================================================ */
window.CONTENT_DATA = {

    /* ---------- Projects ---------- */
    projects: {
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
            name: 'CatChase',
            type: 'Mobile Game',
            icon: '🐱',
            description: 'Small private game: a cat chasing balloons through increasingly chaotic levels.',
            features: [
                'Cat Character Control',
                'Balloon Chasing Mechanics',
                'Progressive Difficulty Levels',
                'Fun Animations & Effects',
                'Score Tracking System',
                'Level Progression'
            ],
            tech: ['Swift', 'SpriteKit', 'Core Animation', 'Game Physics', 'Sound Effects', 'Game Center'],
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
            highlights: 'Personal framework used to deliver several complete products end-to-end with fleets of AI agents working in parallel.'
        },
        bugcorpduel: {
            name: 'Bug Corp Duel',
            type: 'iOS P2P Card Game',
            icon: '🃏',
            description: 'Yu-Gi-Oh-style card duel game with an IT-office parody theme: deterministic seeded game engine, 100-card catalogue with reaction/trap windows, and serverless peer-to-peer multiplayer.',
            features: [
                'Deterministic seeded game engine',
                '100-card catalogue & trap/reaction windows',
                'Serverless P2P multiplayer (MultipeerConnectivity)',
                'Simulation-driven balance tuning (400 auto-matches)',
                '100+ unit & integration tests',
                'Swift 6 strict concurrency'
            ],
            tech: ['SwiftUI', 'SpriteKit', 'MultipeerConnectivity', 'Network.framework', 'SwiftPM', 'XcodeGen'],
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
            highlights: 'Contract-first monorepo: 101 endpoints and 114 models generated for 4 platforms from one frozen schema.'
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
            description: 'Designing and directing fleets of autonomous coding agents that ship complete products - an architect / delegate / worker hierarchy working from a frozen contract, with parallel task dispatch and automated build & test gates.',
            usedIn: ['The Hive - my orchestration framework for Claude Code', 'Bug Corp Duel - 116 orchestrated agent tasks, green build & test gate', 'BeamBike - contract-first monorepo: 101 endpoints, 114 models, 4 platforms'],
            related: ['Claude Code', 'JSON Schema', 'Codegen', 'CI gates']
        },
        aidelivery: {
            name: 'AI-Assisted Delivery', type: 'AI Champion · Endava', icon: '🚀',
            description: 'Driving AI adoption across delivery as AI Champion - project integration and monitoring, developer enablement, AI-assisted code review and workflow automation.',
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
        'endava-senior': {
            name: 'Senior iOS Developer (Senior Engineer)', type: 'Endava · Jan 2022 – Present', icon: '🏢',
            description: 'I lead iOS development for insurance and telecom clients at Endava, owning apps from first concept to production.',
            contributions: [
                'Own app lifecycles end-to-end, from concept to production',
                'Apply MVVM / Clean Architecture with SwiftUI, UIKit & Combine',
                'Keep large codebases fast and maintainable as teams grow',
                'Collaborate across cross-functional teams in an agile setup'
            ],
            focus: ['Swift', 'SwiftUI', 'Combine', 'CI/CD', 'Leadership']
        },
        'endava-ai': {
            name: 'AI Champion', type: 'Endava · Dec 2025 – Present', icon: '🤖',
            description: 'As AI Champion I make AI adoption real across delivery: project integration, monitoring, developer enablement and workflow automation.',
            contributions: [
                'Drive AI project integration, monitoring and delivery automation',
                'Enable and mentor developers in AI-assisted development',
                'Champion AI code review and multi-agent workflows',
                'Build internal tooling on Claude Code and agent orchestration'
            ],
            focus: ['Claude Code', 'Multi-Agent Orchestration', 'AI Code Review', 'Prompt Engineering']
        },
        'endava-coach': {
            name: 'Career Coach', type: 'Endava · Mar 2024 – Present', icon: '🎓',
            description: 'Coaching iOS developers across the organisation: growth plans, 1:1 sessions, technical interviews and coding standards.',
            contributions: [
                'Structured growth plans and regular 1:1 mentoring',
                'Conduct technical interviews and set coding standards',
                'Run workshops and knowledge-sharing sessions',
                'Support professional development and career guidance'
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
