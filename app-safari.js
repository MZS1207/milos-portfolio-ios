/* ============================================================
   CV App - Safari Compatible Version
   Works across all browsers including Safari
   ============================================================ */

(function () {
    'use strict';

    /* ---------- Constants ---------- */
    const TABS = ['about', 'skills', 'experience', 'projects', 'contact'];
    const SWIPE = { THRESHOLD: 50, RESTRAINT: 100 };

    /* ---------- Project Data ---------- */
    const PROJECTS = {
        schueco: {
            name: 'Schueco SmartTouch',
            type: 'Smart Door Control',
            icon: '🏢',
            description: 'Advanced smart door control system for Schueco featuring Bluetooth connectivity, Touch ID authentication, and remote access capabilities with real-time monitoring.',
            features: [
                'Bluetooth Smart Lock Integration',
                'Touch ID Authentication',
                'Remote Door Control',
                'Real-time Monitoring',
                'Push Notifications',
                'Security Analytics'
            ],
            tech: ['Swift', 'Core Bluetooth', 'Touch ID', 'Push Notifications', 'Security'],
            highlights: 'Developed enterprise-grade smart lock system with military-grade encryption and seamless mobile integration.'
        },
        beleen: {
            name: 'Saand',
            type: 'Delivery System',
            icon: '📦',
            description: 'Advanced delivery optimization system featuring route optimization algorithms, real-time driver tracking, and performance-based rewards system with token/bonus incentives.',
            features: [
                'Route Optimization Algorithms',
                'Real-time Driver Tracking',
                'Performance Scoring System',
                'Token/Bonus Rewards',
                'Gamification Elements',
                'Analytics Dashboard'
            ],
            tech: ['Swift', 'Core Location', 'MapKit', 'Core Data', 'Algorithms', 'Analytics'],
            highlights: 'Developed intelligent delivery system that reduced delivery times by 35% and increased driver efficiency through gamification and performance incentives.'
        },
        footballerista: {
            name: 'Footballerista',
            type: 'Social Sports Platform',
            icon: '⚽',
            description: 'Comprehensive social networking platform for athletes featuring player profiles, highlights sharing, and community interactions with Firebase integration and real-time push notifications.',
            features: [
                'Player Profiles & Stats Tracking',
                'Real-time Messaging System',
                'Media Sharing & Highlights',
                'Social Feed & Community Features',
                'Push Notifications',
                'Firebase Backend Integration'
            ],
            tech: ['Swift', 'Firebase', 'Push Notifications', 'Core Data', 'Cloud Functions'],
            highlights: 'Built scalable social platform supporting 10K+ concurrent users with real-time messaging and media sharing capabilities.'
        },
        openjobs: {
            name: 'Open Jobs',
            type: 'Job Search Platform',
            icon: '💼',
            description: 'Mobile application connecting job seekers with employers, featuring advanced search filters, real-time notifications, and streamlined application process with SQLite database integration.',
            features: [
                'Advanced Search Filters',
                'Real-time Job Notifications',
                'Application Tracking System',
                'Profile Management',
                'SQLite Database',
                'REST API Integration'
            ],
            tech: ['Swift', 'SQLite', 'REST API', 'Push Notifications', 'Core Data'],
            highlights: 'Developed efficient job matching algorithm reducing application time by 60% and increasing placement rates.'
        },
        chaty: {
            name: 'Chaty',
            type: 'Messaging Platform',
            icon: '💬',
            description: 'Real-time messaging application with end-to-end encryption, group chats, file sharing, and voice/video calling capabilities using WebRTC and Socket.io integration.',
            features: [
                'End-to-End Encryption',
                'Group Chats & Channels',
                'File Sharing System',
                'Voice/Video Calling',
                'WebRTC Integration',
                'Socket.io Real-time'
            ],
            tech: ['Swift', 'Socket.io', 'WebRTC', 'Core Data', 'Encryption'],
            highlights: 'Implemented secure messaging protocol with E2E encryption and real-time sync across multiple devices.'
        },
        paincheck: {
            name: 'PainCheck',
            type: 'Healthcare App',
            icon: '🏥',
            description: 'HIPAA-compliant healthcare tracking application for pain management and medication reminders, featuring symptom tracking, doctor appointments, and health analytics.',
            features: [
                'Pain Tracking & Analytics',
                'Medication Reminders',
                'Doctor Appointments',
                'Health Analytics Dashboard',
                'HIPAA Compliance',
                'HealthKit Integration'
            ],
            tech: ['Swift', 'HealthKit', 'Core Data', 'Charts', 'HIPAA'],
            highlights: 'Created HIPAA-compliant system with secure data storage and advanced health analytics for chronic pain management.'
        },
        caregiver: {
            name: 'Caregiver',
            type: 'Elder Care App',
            icon: '🤝',
            description: 'Comprehensive caregiving application for elderly care management, featuring medication schedules, emergency alerts, activity monitoring, and family coordination.',
            features: [
                'Medication Schedules',
                'Emergency Alerts System',
                'Activity Monitoring',
                'Family Coordination',
                'GPS Tracking',
                'Fall Detection'
            ],
            tech: ['Swift', 'Core Location', 'HealthKit', 'Push Notifications', 'Core Motion'],
            highlights: 'Developed AI-powered fall detection system with 95% accuracy and emergency response coordination.'
        },
        fss: {
            name: 'FSS',
            type: 'Financial System',
            icon: '🏦',
            description: 'Enterprise financial management system with real-time analytics, automated reporting, and multi-currency support for businesses requiring comprehensive financial tracking.',
            features: [
                'Real-time Financial Analytics',
                'Automated Reporting System',
                'Multi-Currency Support',
                'Security & Compliance',
                'Dashboard Integration',
                'Data Visualization'
            ],
            tech: ['Swift', 'Core Data', 'Charts', 'Security', 'Analytics'],
            highlights: 'Built enterprise-grade financial system processing $1M+ daily transactions with real-time analytics.'
        },
        vquarter: {
            name: 'Vquarter',
            type: 'Service Provider Platform',
            icon: '🏠',
            description: 'Platform connecting property renters with service providers including cleaning, transportation, and other essential services for rental properties with booking and payment management.',
            features: [
                'Service Provider Matching',
                'Booking & Scheduling System',
                'Secure Payment Processing',
                'Service Rating System',
                'Real-time Communication',
                'Service History Tracking'
            ],
            tech: ['Swift', 'Core Data', 'WebSocket', 'Stripe', 'Core Location', 'Push Notifications'],
            highlights: 'Developed service marketplace platform connecting 500+ service providers with property renters, processing 2000+ monthly service bookings with integrated payment system.'
        },
        ding: {
            name: 'Ding',
            type: 'Mobile Top-Up Platform',
            icon: '📱',
            description: 'International mobile top-up platform enabling users to send prepaid mobile recharge to friends and family worldwide with secure payment processing and multi-network support.',
            features: [
                'International Mobile Top-Up',
                'Multi-Network Support',
                'Secure Payment Processing',
                'Real-time Delivery',
                'Multi-Currency Support',
                'Transaction History'
            ],
            tech: ['Swift', 'Stripe', 'Core Data', 'Network APIs', 'Security', 'Push Notifications'],
            highlights: 'Built leading international mobile recharge platform processing millions of transactions across 150+ countries with 3-second delivery times and 99.9% uptime.'
        },
        admiral: {
            name: 'Admiral Insurance',
            type: 'Insurance Management Platform',
            icon: '🛡️',
            description: 'Comprehensive insurance management app for UK customers enabling policy viewing, document management, emergency assistance, and journey tracking with data control features.',
            features: [
                'Policy Management',
                'Document Storage & Printing',
                'Emergency Assistance',
                'MyTrips Journey Tracking',
                'Data Control & Privacy',
                'Customer Support Integration'
            ],
            tech: ['Swift', 'Core Data', 'Core Location', 'Security', 'PDF Generation', 'Push Notifications'],
            highlights: 'Developed leading UK insurance management app serving millions of customers with comprehensive policy management, emergency assistance, and innovative journey tracking features.'
        },
        catchase: {
            name: 'CatChase',
            type: 'Mobile Game',
            icon: '🐱',
            description: 'Private mobile game where players control a cat chasing balloons through various levels with increasing difficulty and fun animations.',
            features: [
                'Cat Character Control',
                'Balloon Chasing Mechanics',
                'Progressive Difficulty Levels',
                'Fun Animations & Effects',
                'Score Tracking System',
                'Level Progression'
            ],
            tech: ['Swift', 'SpriteKit', 'Core Animation', 'Game Physics', 'Sound Effects', 'Game Center'],
            highlights: 'Developed entertaining mobile game with smooth cat animations, engaging balloon-chasing gameplay, and progressive difficulty system for casual gaming enjoyment.'
        },
        endava: {
            name: 'Endava Projects',
            type: 'Enterprise Solutions',
            icon: '🏢',
            description: 'Multiple enterprise mobile solutions for global clients including team collaboration, project management, real-time communication, and performance analytics platforms.',
            features: [
                'Team Collaboration Tools',
                'Project Management System',
                'Real-time Communication',
                'Performance Analytics',
                'CI/CD Integration',
                'Multi-platform Support'
            ],
            tech: ['Swift', 'SwiftUI', 'Combine', 'Core Data', 'CI/CD'],
            highlights: 'Led development of enterprise solutions serving Fortune 500 companies with 99.9% uptime and scalability.'
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
    };

    /* ---------- State ---------- */
    let current = 0;
    let track, tabs, header, modal, modalClose;

    /* ---------- Core Functions ---------- */
    function $(sel) { 
        try {
            return document.querySelector(sel);
        } catch (e) {
            console.warn('Selector error:', sel, e);
            return null;
        }
    }
    
    function $$(sel) { 
        try {
            return Array.from(document.querySelectorAll(sel));
        } catch (e) {
            console.warn('Selector error:', sel, e);
            return [];
        }
    }

    function switchTab(index) {
        if (index < 0 || index >= TABS.length) return;
        current = index;
        
        // Safari-compatible transform
        if (track) {
            track.style.webkitTransform = `translateX(-${index * 100}%)`;
            track.style.transform = `translateX(-${index * 100}%)`;
        }
        
        // Update tabs with Safari compatibility
        tabs.forEach((t, i) => {
            if (t) {
                if (i === index) {
                    t.classList.add('active');
                } else {
                    t.classList.remove('active');
                }
                t.setAttribute('aria-selected', i === index);
            }
        });
        
        // Update header
        if (header) {
            header.textContent = TABS[index].charAt(0).toUpperCase() + TABS[index].slice(1);
        }
        
        // Reset scroll position
        const screen = $(`#screen-${TABS[index]} .screen-scroll`);
        if (screen) {
            screen.scrollTop = 0;
        }
    }

    /* ---------- Modal Functions ---------- */
    function showModal(projectId) {
        const project = PROJECTS[projectId];
        if (!project || !modal) return;

        const modalIcon = $('#modalProjectIcon');
        const modalName = $('#modalProjectName');
        const modalType = $('#modalProjectType');
        const modalDescription = $('#modalDescription');
        const modalFeatures = $('#modalFeatures');
        const modalTech = $('#modalTech');
        const modalHighlights = $('#modalHighlights');

        if (modalIcon) modalIcon.textContent = project.icon;
        if (modalName) modalName.textContent = project.name;
        if (modalType) modalType.textContent = project.type;
        if (modalDescription) modalDescription.textContent = project.description;

        if (modalFeatures) {
            modalFeatures.innerHTML = project.features.map(feature =>
                `<li>${feature}</li>`
            ).join('');
        }

        if (modalTech) {
            modalTech.innerHTML = project.tech.map(tech =>
                `<span class="tag">${tech}</span>`
            ).join('');
        }

        if (modalHighlights) {
            modalHighlights.innerHTML = `<p>${project.highlights}</p>`;
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function hideModal() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    function handleProjectClick(e) {
        const projectId = e.currentTarget.getAttribute('data-project');
        if (projectId) {
            e.preventDefault();
            showModal(projectId);
        }
    }

    /* ---------- Event Handlers ---------- */
    function handleSwipe(e) {
        if (!e.isSwiping) return;
        e.isSwiping = false;
        
        const dx = e.changedTouches[0].clientX - e.startX;
        const dy = e.changedTouches[0].clientY - e.startY;
        
        if (Math.abs(dx) < SWIPE.THRESHOLD || Math.abs(dy) > SWIPE.RESTRAINT) return;
        switchTab(current + (dx < 0 ? 1 : -1));
    }

    function initEvents() {
        // Tab clicks with Safari compatibility
        tabs.forEach((tab, i) => {
            if (tab) {
                tab.addEventListener('click', function(e) {
                    e.preventDefault();
                    switchTab(i);
                });
            }
        });
        
        // Touch gestures with Safari support
        if (track) {
            track.addEventListener('touchstart', function(e) {
                e.startX = e.changedTouches[0].clientX;
                e.startY = e.changedTouches[0].clientY;
                e.isSwiping = true;
            }, { passive: true });
            
            track.addEventListener('touchend', handleSwipe, { passive: true });
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowRight') switchTab(current + 1);
            if (e.key === 'ArrowLeft') switchTab(current - 1);
            if (e.key === 'Escape') hideModal();
        });
        
        // Modal initialization
        modal = $('#projectModal');
        modalClose = $('#modalClose');

        // Project card click handlers
        $$('.project-card').forEach(card => {
            if (card) {
                card.addEventListener('click', handleProjectClick);
                card.style.cursor = 'pointer';
            }
        });
        
        // Modal close handlers
        if (modalClose) {
            modalClose.addEventListener('click', hideModal);
        }
        
        if (modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    hideModal();
                }
            });
        }
    }

    /* ---------- Error Handling ---------- */
    function handleError(error, context) {
        console.error(`CV Error [${context}]:`, error);
        
        // Safari-compatible error display
        const msg = document.createElement('div');
        msg.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #FF3B30;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            z-index: 1000;
            font-family: -apple-system, BlinkMacSystemFont, sans-serif;
            font-size: 14px;
        `;
        msg.textContent = 'CV Error: Please refresh';
        
        document.body.appendChild(msg);
        setTimeout(function() {
            if (msg.parentNode) {
                msg.parentNode.removeChild(msg);
            }
        }, 5000);
    }

    /* ---------- Initialize ---------- */
    function init() {
        try {
            // Safari-specific DOM ready check
            if (document.readyState !== 'complete') {
                setTimeout(init, 100);
                return;
            }

            track = $('#screensTrack');
            tabs = $$('.tab');
            header = $('#headerTitle');

            if (!track || !tabs || tabs.length === 0 || !header) {
                throw new Error('Required DOM elements not found');
            }

            // Safari-specific initialization delay
            setTimeout(function() {
                initEvents();
                switchTab(0);
            }, 50);

        } catch (error) {
            console.error('CV App: Initialization failed', error);
            handleError(error, 'Initialization');
        }
    }

    /* ---------- Public API ---------- */
    window.CVApp = {
        init: init,
        switchTab: switchTab,
        getCurrentTab: function() {
            return { index: current, name: TABS[current] };
        },
        test: { TABS: TABS, SWIPE: SWIPE, current: current }
    };

    /* ---------- Safari-compatible auto-start ---------- */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        setTimeout(init, 100);
    }

})();
