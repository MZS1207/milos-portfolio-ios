/* ============================================================
   CV App — Controller
   Tab navigation, swipe gestures, scroll-triggered animations
   ============================================================ */

(function () {
    'use strict';

    /* ---------- Constants ---------- */
    const TAB_NAMES  = ['about', 'skills', 'experience', 'projects', 'contact'];
    const SWIPE_THRESHOLD = 50;   // px to count as swipe
    const SWIPE_RESTRAINT = 100;  // max vertical distance

    /* ---------- State ---------- */
    let currentIndex = 0;

    /* ---------- DOM refs ---------- */
    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

    const track     = $('#screensTrack');
    const tabs      = $$('.tab');
    const header    = $('#headerTitle');

    /* ---------- Tab switching ---------- */
    function switchTab(index) {
        if (index < 0 || index >= TAB_NAMES.length) return;
        currentIndex = index;

        // Move track
        track.style.transform = `translateX(-${index * 100}%)`;

        // Update tabs
        tabs.forEach((t, i) => {
            const active = i === index;
            t.classList.toggle('active', active);
            t.setAttribute('aria-selected', active);
        });

        // Update header
        header.textContent = TAB_NAMES[index].charAt(0).toUpperCase() + TAB_NAMES[index].slice(1);

        // Animate skill bars when skills tab is shown
        if (TAB_NAMES[index] === 'skills') animateSkillBars();

        // Reset scroll position for the target screen
        const screen = $(`#screen-${TAB_NAMES[index]} .screen-scroll`);
        if (screen) screen.scrollTop = 0;
    }

    /* ---------- Tab click handlers ---------- */
    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => switchTab(i));
    });

    /* ---------- Swipe gestures ---------- */
    let touchStartX = 0;
    let touchStartY = 0;
    let isSwiping = false;

    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].clientX;
        touchStartY = e.changedTouches[0].clientY;
        isSwiping = true;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        if (!isSwiping) return;
        isSwiping = false;

        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = e.changedTouches[0].clientY - touchStartY;

        // Must be mostly horizontal
        if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dy) > SWIPE_RESTRAINT) return;

        if (dx < 0) {
            switchTab(currentIndex + 1);  // swipe left → next
        } else {
            switchTab(currentIndex - 1);  // swipe right → prev
        }
    }, { passive: true });

    /* ---------- Keyboard navigation ---------- */
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') switchTab(currentIndex + 1);
        if (e.key === 'ArrowLeft')  switchTab(currentIndex - 1);
    });

    /* ---------- Skill bar animation ---------- */
    let skillsAnimated = false;

    function animateSkillBars() {
        if (skillsAnimated) return;
        skillsAnimated = true;

        $$('.skill-fill').forEach((bar) => {
            const target = bar.style.width;
            bar.style.width = '0';
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    bar.style.width = target;
                });
            });
        });
    }

    /* ---------- Project Detail Modal ---------- */
    const projectDetails = {
        schueco: {
            icon: '??',
            name: 'Schueco SmartTouch',
            type: 'Smart Door Control System',
            desc: 'Mobile control application for Schueco SmartTouch door systems. Developed comprehensive smart door management app allowing users to control, monitor, and configure SmartTouch doors remotely with fingerprint access, real-time status updates, and advanced security features.',
            features: [
                'SmartTouch fingerprint access control',
                'Remote door lock/unlock via app',
                'Real-time door status & battery monitoring',
                'Multiple user access management',
                'Security breach instant notifications',
                'SmartTouch configuration & settings'
            ],
            tech: ['Swift', 'Core Bluetooth', 'Touch ID', 'Core Data', 'Push Notifications', 'Security'],
            role: 'Led iOS development as sole mobile developer. Implemented secure Bluetooth communication with SmartTouch hardware and integrated Touch ID for enhanced security. Designed offline-first architecture for reliable door control.'
        },
        beleen: {
            icon: '🧹',
            name: 'Beleen',
            type: 'On-Demand Home Services',
            desc: 'Full-featured on-demand cleaning and home services platform connecting customers with vetted service providers. Built both the customer-facing and provider-facing iOS applications with real-time tracking and seamless payment integration.',
            features: [
                'Real-time booking & scheduling',
                'Live provider GPS tracking',
                'In-app payments via Stripe',
                'Ratings & review system',
                'Push notification reminders',
                'Service history & rebooking'
            ],
            tech: ['Swift', 'Stripe', 'Google Maps SDK', 'Push Notifications', 'REST API', 'Alamofire'],
            role: 'Developed both customer and provider apps from scratch. Implemented real-time location tracking with optimized battery usage. Integrated Stripe for secure payment processing.'
        },
        vquarter: {
            icon: '🏠',
            name: 'Vquarter',
            type: 'Real Estate Platform',
            desc: 'Property listing and real estate marketplace enabling users to search, view, and save properties. Features include interactive map-based search, virtual property tours, mortgage calculations, and direct agent communication channels.',
            features: [
                'Map-based property search with filters',
                'Virtual property tours & galleries',
                'Mortgage & affordability calculator',
                'Direct agent messaging',
                'Saved searches & favorites',
                'Price change notifications'
            ],
            tech: ['Swift', 'MapKit', 'Core Location', 'WebSocket', 'AVFoundation', 'Core Data'],
            role: 'Architected and built the full iOS app. Implemented custom map clustering for 50k+ listings with smooth 60fps scrolling. Designed offline-capable favorites system.'
        },
        endava: {
            icon: '🏢',
            name: 'Endava Projects',
            type: 'Enterprise Solutions',
            desc: 'Multiple enterprise-grade mobile solutions delivered for Endava\'s global client portfolio. Projects spanned team collaboration, project management, and real-time communication platforms serving thousands of daily active users across multiple continents.',
            features: [
                'Team collaboration & communication',
                'Real-time project tracking dashboards',
                'Performance analytics & reporting',
                'Secure document sharing',
                'Biometric authentication',
                'CI/CD pipeline integration'
            ],
            tech: ['Swift', 'SwiftUI', 'Combine', 'Core Data', 'GraphQL', 'Fastlane', 'CI/CD'],
            role: 'Senior developer & technical coach. Led architecture decisions across multiple projects. Mentored 5+ junior developers. Established coding standards and review processes adopted across the iOS chapter.'
        },
        paincheck: {
            icon: '🏥',
            name: 'PainCheck',
            type: 'Healthcare — Pain Management',
            desc: 'HIPAA-compliant healthcare application enabling patients to track pain levels, manage medications, schedule doctor appointments, and view personal health analytics. Integrates with Apple HealthKit for comprehensive health data aggregation.',
            features: [
                'Visual pain scale tracking',
                'Medication schedule & reminders',
                'Doctor appointment management',
                'Health analytics & trend charts',
                'HealthKit integration',
                'HIPAA-compliant data encryption'
            ],
            tech: ['Swift', 'HealthKit', 'Charts', 'Core Data', 'CryptoKit', 'UserNotifications'],
            role: 'Sole iOS developer responsible for full app lifecycle. Implemented HIPAA-compliant data storage and transmission. Achieved 4.7 App Store rating.'
        },
        caregiver: {
            icon: '🤝',
            name: 'Caregiver',
            type: 'Healthcare — Elder Care',
            desc: 'Comprehensive caregiving app designed for families managing elderly care. Features include medication management, emergency alerts with automatic location sharing, activity monitoring, and multi-family coordination with role-based access.',
            features: [
                'Medication schedules & tracking',
                'SOS emergency alerts with GPS',
                'Activity & wellness monitoring',
                'Family coordination dashboard',
                'Fall detection integration',
                'Care report generation'
            ],
            tech: ['Swift', 'Core Location', 'HealthKit', 'Push Notifications', 'CoreMotion', 'CloudKit'],
            role: 'Led mobile development team of 3. Implemented background location tracking with minimal battery impact. Designed the family coordination system supporting up to 10 caregivers per patient.'
        },
        fss: {
            icon: '🏦',
            name: 'FSS',
            type: 'Financial Services System',
            desc: 'Enterprise financial management platform providing real-time portfolio analytics, automated compliance reporting, and multi-currency transaction support. Built for institutional clients handling high-volume financial operations.',
            features: [
                'Real-time portfolio analytics',
                'Automated regulatory reporting',
                'Multi-currency support (40+ currencies)',
                'Secure transaction processing',
                'Biometric authentication',
                'Audit trail & compliance logging'
            ],
            tech: ['Swift', 'Core Data', 'Charts', 'Security', 'CryptoKit', 'Keychain'],
            role: 'Senior developer focused on security-critical modules. Implemented certificate pinning and end-to-end encryption. Passed 3 independent security audits with zero critical findings.'
        },
        footballerista: {
            icon: '⚽',
            name: 'Footballerista',
            type: 'Social Sports Network',
            desc: 'Social networking platform built for athletes and football enthusiasts. Features include player profiles with stats, highlight video sharing, real-time team messaging, community feed, and match event tracking powered by Firebase.',
            features: [
                'Player profiles & statistics',
                'Highlight video sharing & feed',
                'Real-time team messaging',
                'Community social feed',
                'Match event tracking',
                'Push notification system'
            ],
            tech: ['Swift', 'Firebase', 'Push Notifications', 'Core Data', 'AVFoundation', 'Kingfisher'],
            role: 'Full-stack mobile developer. Built the entire iOS app from concept to App Store launch. Implemented video compression pipeline reducing upload size by 70% while maintaining quality.'
        },
        chaty: {
            icon: '💬',
            name: 'Chaty',
            type: 'Secure Messaging Platform',
            desc: 'Real-time messaging application with end-to-end encryption, supporting individual and group conversations, file sharing, and voice/video calling. Built on WebRTC for peer-to-peer communication with Socket.io signaling.',
            features: [
                'End-to-end encrypted messaging',
                'Group chats (up to 256 members)',
                'File & media sharing',
                'Voice & video calls via WebRTC',
                'Read receipts & typing indicators',
                'Message search & archiving'
            ],
            tech: ['Swift', 'Socket.io', 'WebRTC', 'Core Data', 'CryptoKit', 'CallKit'],
            role: 'Lead iOS developer. Implemented the E2E encryption protocol and WebRTC integration. Optimized real-time message delivery achieving <100ms latency.'
        },
        openjobs: {
            icon: '💼',
            name: 'Open Jobs',
            type: 'Job Search Platform',
            desc: 'Mobile job search and recruitment platform connecting job seekers with employers. Features advanced multi-criteria search, real-time job alerts, one-tap application flow, and a comprehensive applicant tracking system.',
            features: [
                'Advanced multi-criteria job search',
                'Real-time job alert notifications',
                'One-tap application flow',
                'Resume builder & manager',
                'Application status tracking',
                'Saved searches & bookmarks'
            ],
            tech: ['Swift', 'SQLite', 'REST API', 'Push Notifications', 'PDFKit', 'Alamofire'],
            role: 'iOS developer responsible for search and application modules. Built the offline-capable job bookmarking system. Optimized search performance handling 100k+ listings.'
        }
    };

    const modal       = $('#projectModal');
    const modalTitle  = $('#modalTitle');
    const modalBody   = $('#modalBody');
    const modalClose  = $('#modalClose');
    const modalOverlay = $('#modalOverlay');

    function openProject(id) {
        const p = projectDetails[id];
        if (!p) return;

        modalTitle.textContent = p.name;
        modalBody.innerHTML = `
            <div class="modal-icon">${p.icon}</div>
            <div class="modal-subtitle">${p.type}</div>

            <div class="modal-section">
                <div class="modal-section-title">Overview</div>
                <p class="modal-desc">${p.desc}</p>
            </div>

            <div class="modal-section">
                <div class="modal-section-title">Key Features</div>
                <ul class="modal-features">
                    ${p.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>

            <div class="modal-section">
                <div class="modal-section-title">Technology Stack</div>
                <div class="tag-cloud">
                    ${p.tech.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
            </div>

            <div class="modal-section">
                <div class="modal-section-title">My Role</div>
                <div class="modal-role">${p.role}</div>
            </div>
        `;

        modal.classList.add('open');
    }

    function closeModal() {
        modal.classList.remove('open');
    }

    // Bind project card clicks
    $$('[data-project]').forEach(card => {
        card.addEventListener('click', () => openProject(card.dataset.project));
    });

    // Close modal
    if (modalClose)  modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

    /* ---------- Init ---------- */
    switchTab(0);

})();
