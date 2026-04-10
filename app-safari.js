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
        footballerista: {
            name: 'Footballerista',
            type: 'Social Sports Platform',
            icon: 'Football',
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
            icon: 'Jobs',
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
            icon: 'Chat',
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
            icon: 'Pain',
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
            icon: 'Care',
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
            icon: 'FSS',
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
            type: 'Real Estate Platform',
            icon: 'Home',
            description: 'Property listing and real estate marketplace featuring map-based property search, virtual tours, mortgage calculator, agent communication, and favorites management.',
            features: [
                'Map-Based Property Search',
                'Virtual Tours Integration',
                'Mortgage Calculator',
                'Agent Communication',
                'Favorites Management',
                'Property Analytics'
            ],
            tech: ['Swift', 'MapKit', 'Core Location', 'WebSocket', 'Core Data'],
            highlights: 'Integrated AR virtual tours and advanced property search algorithms improving user engagement by 80%.'
        },
        endava: {
            name: 'Endava Projects',
            type: 'Enterprise Solutions',
            icon: 'Building',
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
        if (!project) return;
        
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
        
        // Populate features
        if (modalFeatures) {
            modalFeatures.innerHTML = project.features.map(feature => 
                `<li>${feature}</li>`
            ).join('');
        }
        
        // Populate tech tags
        if (modalTech) {
            modalTech.innerHTML = project.tech.map(tech => 
                `<span class="tag">${tech}</span>`
            ).join('');
        }
        
        // Populate highlights
        if (modalHighlights) {
            modalHighlights.innerHTML = `<p>${project.highlights}</p>`;
        }
        
        // Show modal
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    function hideModal() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    function handleProjectClick(e) {
        const card = e.currentTarget;
        const projectId = card.getAttribute('data-project');
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
        const projectCards = $$('.project-card');
        projectCards.forEach(card => {
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
            console.log('CV App: Starting Safari-compatible initialization...');
            
            // Safari-specific DOM ready check
            if (document.readyState !== 'complete') {
                setTimeout(init, 100);
                return;
            }
            
            track = $('#screensTrack');
            tabs = $$('.tab');
            header = $('#headerTitle');
            
            console.log('CV App: DOM elements found:', {
                track: !!track,
                tabs: tabs ? tabs.length : 0,
                header: !!header
            });
            
            if (!track || !tabs || tabs.length === 0 || !header) {
                throw new Error('Required DOM elements not found');
            }
            
            // Safari-specific initialization delay
            setTimeout(function() {
                initEvents();
                switchTab(0);
                console.log('CV App: Safari-compatible initialization successful');
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
