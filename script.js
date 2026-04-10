// iOS Portfolio Interactive JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations and interactions
    initScrollAnimations();
    initFormHandling();
    initSmoothScrolling();
    initParallaxEffect();
    initTypingEffect();
    initProjectModal();
});


// Project Details Modal
function initProjectModal() {
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('projectModal');
        if (event.target === modal) {
            closeProjectModal();
        }
    });
}

// Book Page Navigation
let currentPage = 1;
const totalPages = 8;

function showPage(pageNumber) {
    // Hide all pages
    const pages = document.querySelectorAll('.book-page');
    pages.forEach(page => {
        page.classList.remove('active', 'next');
    });
    
    // Show current page
    const currentPageElement = document.querySelector(`[data-page="${pageNumber}"]`);
    if (currentPageElement) {
        currentPageElement.classList.add('active');
    }
    
    // Show next page preview
    if (pageNumber < totalPages) {
        const nextPageElement = document.querySelector(`[data-page="${pageNumber + 1}"]`);
        if (nextPageElement) {
            nextPageElement.classList.add('next');
        }
    }
    
    // Update page indicator
    document.getElementById('current-page').textContent = pageNumber;
    
    // Update navigation buttons
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    prevBtn.disabled = pageNumber === 1;
    nextBtn.disabled = pageNumber === totalPages;
    
    currentPage = pageNumber;
}

function nextPage() {
    if (currentPage < totalPages) {
        showPage(currentPage + 1);
    }
}

function previousPage() {
    if (currentPage > 1) {
        showPage(currentPage - 1);
    }
}

// Initialize book on page load
document.addEventListener('DOMContentLoaded', function() {
    showPage(1);
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') {
        nextPage();
    } else if (e.key === 'ArrowLeft') {
        previousPage();
    }
});

// Simpson Meme Functions
function showHomerDoh(message) {
    const dohElement = document.createElement('div');
    dohElement.className = 'homer-doh';
    dohElement.textContent = message || 'Something went wrong!';
    document.body.appendChild(dohElement);
    
    setTimeout(() => {
        dohElement.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        dohElement.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(dohElement);
        }, 300);
    }, 3000);
}

function showMrBurnsExcellent() {
    const excellentMsg = document.createElement('div');
    excellentMsg.className = 'mr-burns-excellent';
    excellentMsg.textContent = 'Code deployed successfully!';
    excellentMsg.style.position = 'fixed';
    excellentMsg.style.top = '20px';
    excellentMsg.style.right = '20px';
    excellentMsg.style.zIndex = '1000';
    document.body.appendChild(excellentMsg);
    
    setTimeout(() => {
        document.body.removeChild(excellentMsg);
    }, 3000);
}

// Add Simpson memes to project interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add random Homer D'oh! on errors
    window.addEventListener('error', function(e) {
        showHomerDoh('JavaScript error: ' + e.message);
    });
    
    // Add Comic Book Guy hover effects
    const techBadges = document.querySelectorAll('.project-tech span');
    techBadges.forEach((badge, index) => {
        if (index % 2 === 0) {
            badge.classList.add('comic-book-guy');
        }
    });
    
    // Add Mr. Burns to successful project details
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (!this.classList.contains('mr-burns-excellent')) {
                setTimeout(() => showMrBurnsExcellent(), 500);
            }
        });
    });
    
    // Add Lisa coding references
    const codeElements = document.querySelectorAll('.project-description');
    codeElements.forEach(element => {
        element.classList.add('lisa-coding');
    });
});

// Random Simpson quotes for console
console.log('%c Homer: "D\'OH! Why did I write this code?"', 'color: #ffc107; font-weight: bold; font-size: 14px;');
console.log('%c Lisa: "According to my calculations, this portfolio should work perfectly."', 'color: #1565c0; font-style: italic;');
console.log('%c Mr. Burns: "EXCELLENT! Another successful deployment!"', 'color: #4caf50; font-weight: bold;');

function showProjectDetails(projectId) {
    const modal = document.getElementById('projectModal');
    
    const projectDetails = {
        footballerista: {
            title: 'Footballerista',
            subtitle: 'Social Sports Platform',
            description: 'Mmm... football and social media! Comprehensive social networking platform for athletes featuring player profiles, highlights sharing, and community interactions with Firebase integration and real-time push notifications. No D\'OH! moments in this code!',
            tech: ['Swift', 'Firebase', 'Push Notifications', 'Core Data'],
            quote: '"No D\'OH! moments!"',
            icon: 'Football'
        },
        openjobs: {
            title: 'Open Jobs',
            subtitle: 'Job Search Platform',
            description: 'Need money for beer! Mobile application connecting job seekers with employers, featuring advanced search filters, real-time notifications, and streamlined application process with SQLite database integration for hungry developers!',
            tech: ['Swift', 'SQLite', 'REST API', 'Push Notifications'],
            quote: '"Mmm... money!"',
            icon: 'Jobs'
        },
        chaty: {
            title: 'Chaty',
            subtitle: 'Real-time Chat Application',
            description: 'Chat while eating donuts! Feature-rich messaging application with real-time communication, file sharing, voice messages, and end-to-end encryption using WebSocket connections and Core Data for donut emergencies!',
            tech: ['Swift', 'WebSocket', 'Core Data', 'Encryption'],
            quote: '"Need donuts!"',
            icon: 'Chat'
        },
        paincheck: {
            title: 'PainCheck',
            subtitle: 'Medical Assessment App',
            description: 'Check if you\'re radioactive from nuclear plant! Healthcare application for pain assessment and management, featuring AI-powered pain detection, patient tracking, and comprehensive reporting system for medical professionals.',
            tech: ['Swift', 'Core ML', 'HealthKit', 'AI'],
            quote: '"Still glowing!"',
            icon: 'Health'
        },
        caregiver: {
            title: 'Caregiver',
            subtitle: 'Elderly Care App',
            description: 'Marge made me do this! Comprehensive caregiving platform for elderly care management, featuring medication reminders, emergency alerts, activity tracking, and family coordination capabilities.',
            tech: ['Swift', 'CloudKit', 'WatchOS', 'HealthKit'],
            quote: '"Marge says..."',
            icon: 'Care'
        },
        fss: {
            title: 'FSS',
            subtitle: 'Financial System',
            description: 'Track beer budget! Enterprise financial management system with real-time transaction processing, advanced analytics, and comprehensive reporting capabilities for banking institutions.',
            tech: ['Swift', 'Core Data', 'Encryption', 'Analytics'],
            quote: '"Beer fund!"',
            icon: 'Money'
        },
        endava: {
            title: 'Endava Projects',
            subtitle: 'Consulting Work',
            description: 'Boss makes me work! Collection of consulting projects for various clients, including retail, healthcare, and finance applications with focus on performance optimization and user experience improvements.',
            tech: ['Swift', 'Consulting', 'Optimization', 'UX'],
            quote: '"Need beer!"',
            icon: 'Work'
        },
        personal: {
            title: 'Personal Projects',
            subtitle: 'Side Projects',
            description: 'Top secret! Various personal projects including experimental apps, open source contributions, and learning experiments with cutting-edge iOS technologies and frameworks when Marge isn\'t watching!',
            tech: ['SwiftUI', 'Experimentation', 'Open Source', 'Secret'],
            quote: '"Don\'t tell Marge!"',
            icon: 'Secret'
        }
    };
    
    const project = projectDetails[projectId];
    if (!project) return;
    
    // Update modal content
    document.getElementById('modalProjectTitle').textContent = project.title;
    document.getElementById('modalProjectSubtitle').textContent = project.subtitle;
    document.getElementById('modalProjectDescription').textContent = project.description;
    document.getElementById('modalProjectQuote').textContent = project.quote;
    document.getElementById('modalProjectIcon').textContent = project.icon;
    
    // Update tech tags
    const techContainer = document.getElementById('modalProjectTech');
    techContainer.innerHTML = project.tech.map(tech => 
        `<span class="tech-tag homer-tech">${tech}</span>`
    ).join('');
    
    // Show modal
    modal.style.display = 'block';
    
    // Add D'OH! effect
    showHomerDoh('Project details loaded!');
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
}

// Infinite Slider Functions
let currentSlideIndex = 0;
let isAnimating = false;

function initInfiniteSlider() {
    const track = document.querySelector('.slider-track');
    const cards = document.querySelectorAll('.homer-project-card');
    
    if (!track || cards.length === 0) return;
    
    // Clone cards for infinite effect
    const cardsArray = Array.from(cards);
    cardsArray.forEach(card => {
        const clone = card.cloneNode(true);
        clone.setAttribute('data-clone', 'true');
        track.appendChild(clone);
    });
    
    // Set initial position
    updateSliderPosition();
    
    // Auto-scroll
    setInterval(() => {
        if (!isAnimating) {
            slideNext();
        }
    }, 4000);
}

function slideNext() {
    if (isAnimating) return;
    
    const track = document.querySelector('.slider-track');
    const cards = document.querySelectorAll('.homer-project-card:not([data-clone="true"])');
    
    if (cards.length === 0) return;
    
    isAnimating = true;
    currentSlideIndex++;
    
    // If we've gone through all original cards, reset to start
    if (currentSlideIndex >= cards.length) {
        currentSlideIndex = 0;
        track.style.transition = 'none';
        updateSliderPosition();
        
        setTimeout(() => {
            track.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            currentSlideIndex = 1;
            updateSliderPosition();
            isAnimating = false;
        }, 50);
    } else {
        updateSliderPosition();
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }
}

function slidePrev() {
    if (isAnimating) return;
    
    const track = document.querySelector('.slider-track');
    const cards = document.querySelectorAll('.homer-project-card:not([data-clone="true"])');
    
    if (cards.length === 0) return;
    
    isAnimating = true;
    currentSlideIndex--;
    
    // If we've gone before the first card, go to end
    if (currentSlideIndex < 0) {
        currentSlideIndex = cards.length - 1;
        track.style.transition = 'none';
        updateSliderPosition();
        
        setTimeout(() => {
            track.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            currentSlideIndex = cards.length - 2;
            updateSliderPosition();
            isAnimating = false;
        }, 50);
    } else {
        updateSliderPosition();
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }
}

function updateSliderPosition() {
    const track = document.querySelector('.slider-track');
    const cardWidth = 242; // 220px width + 22px margins
    const offset = -currentSlideIndex * cardWidth;
    track.style.transform = `translateX(${offset}px)`;
}

// Interactive Control Panel Functions
let currentProject = 'footballerista';

function switchProject(projectId) {
    console.log('Switching to project:', projectId);
    
    // Update active button
    document.querySelectorAll('.control-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.querySelector(`[data-project="${projectId}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
        console.log('Active button updated');
    }
    
    // Update display panel with animation
    const displayPanel = document.querySelector('.display-screen');
    if (displayPanel) {
        displayPanel.style.opacity = '0';
        displayPanel.style.transform = 'scale(0.95)';
        console.log('Display panel animation started');
        
        setTimeout(() => {
            updateProjectDisplay(projectId);
            displayPanel.style.opacity = '1';
            displayPanel.style.transform = 'scale(1)';
            console.log('Display panel updated');
        }, 300);
    }
    
    currentProject = projectId;
    
    // Add Homer D'OH! effect
    showHomerDoh(`Switched to ${projectId}!`);
}

function updateProjectDisplay(projectId) {
    const projectData = {
        footballerista: {
            title: 'Footballerista',
            subtitle: 'Social Sports Platform',
            description: 'Mmm... football and social media! Comprehensive social networking platform for athletes featuring player profiles, highlights sharing, and community interactions with Firebase integration and real-time push notifications. No D\'OH! moments in this code!',
            icon: 'Football',
            tech: ['Swift', 'Firebase', 'Push Notifications', 'Core Data'],
            features: [
                'Player Profiles & Stats',
                'Real-time Messaging',
                'Media Sharing',
                'Social Feed'
            ],
            quote: '"No D\'OH! moments!"'
        },
        openjobs: {
            title: 'Open Jobs',
            subtitle: 'Job Search Platform',
            description: 'Need money for beer! Mobile application connecting job seekers with employers, featuring advanced search filters, real-time notifications, and streamlined application process with SQLite database integration for hungry developers!',
            icon: 'Jobs',
            tech: ['Swift', 'SQLite', 'REST API', 'Push Notifications'],
            features: [
                'Advanced Search Filters',
                'Real-time Notifications',
                'Application Tracking',
                'Profile Management'
            ],
            quote: '"Need more beer for this project!"'
        },
        chaty: {
            title: 'Chaty',
            subtitle: 'Messaging Platform',
            description: 'D\'OH! Why can\'t messaging be simple? Real-time messaging application with end-to-end encryption, group chats, file sharing, and voice/video calling capabilities using WebRTC and Socket.io integration.',
            icon: 'Chat',
            tech: ['Swift', 'Socket.io', 'WebRTC', 'Core Data'],
            features: [
                'End-to-End Encryption',
                'Group Chats',
                'File Sharing',
                'Voice/Video Calls'
            ],
            quote: '"Simple messaging, D\'OH!"'
        },
        paincheck: {
            title: 'PainCheck',
            subtitle: 'Healthcare App',
            description: 'Ouch! That hurts! Healthcare tracking application for pain management and medication reminders, featuring symptom tracking, doctor appointments, and health analytics with HIPAA compliance and secure data storage.',
            icon: 'Pain',
            tech: ['Swift', 'HealthKit', 'Core Data', 'Charts'],
            features: [
                'Pain Tracking',
                'Medication Reminders',
                'Doctor Appointments',
                'Health Analytics'
            ],
            quote: '"Ouch! That feels better!"'
        },
        caregiver: {
            title: 'Caregiver',
            subtitle: 'Elder Care App',
            description: 'Taking care of grandpa! Comprehensive caregiving application for elderly care management, featuring medication schedules, emergency alerts, activity monitoring, and family coordination with GPS tracking and fall detection.',
            icon: 'Care',
            tech: ['Swift', 'Core Location', 'HealthKit', 'Push Notifications'],
            features: [
                'Medication Schedules',
                'Emergency Alerts',
                'Activity Monitoring',
                'Family Coordination'
            ],
            quote: '"Grandpa needs donuts!"'
        },
        fss: {
            title: 'FSS',
            subtitle: 'Financial System',
            description: 'Money for donuts! Enterprise financial management system with real-time analytics, automated reporting, and multi-currency support for businesses that need to track their donut budget efficiently.',
            icon: 'FSS',
            tech: ['Swift', 'Core Data', 'Charts', 'Security'],
            features: [
                'Real-time Analytics',
                'Automated Reporting',
                'Multi-Currency Support',
                'Security & Compliance'
            ],
            quote: '"Donut budget approved!"'
        },
        endava: {
            title: 'Endava',
            subtitle: 'Enterprise Solution',
            description: 'Working at the plant! Enterprise mobile solution for team collaboration and project management, featuring real-time communication, task tracking, and performance analytics for large organizations.',
            icon: 'Endava',
            tech: ['Swift', 'SwiftUI', 'Combine', 'Core Data'],
            features: [
                'Team Collaboration',
                'Task Management',
                'Performance Analytics',
                'Real-time Communication'
            ],
            quote: '"Excellent work, Smithers!"'
        }
    };
    
    const project = projectData[projectId];
    if (!project) return;

    // Use cached DOM elements
    if (domCache.projectTitle) domCache.projectTitle.textContent = project.title;
    if (domCache.projectSubtitle) domCache.projectSubtitle.textContent = project.subtitle;
    if (domCache.projectDescription) domCache.projectDescription.textContent = project.description;
    if (domCache.projectQuote) domCache.projectQuote.textContent = project.quote;
    if (domCache.projectIcon) domCache.projectIcon.textContent = project.icon;
    if (domCache.projectTech) domCache.projectTech.innerHTML = project.tech.map(tech => 
        `<span class="tech-tag homer-tech">${tech}</span>`
    ).join('');
    if (domCache.projectFeatures) domCache.projectFeatures.innerHTML = project.features.map(feature => 
        `<div class="feature-item">
            <span class="feature-icon">+</span>
            <span class="feature-text">${feature}</span>
        </div>`
    ).join('');
}

function getCurrentProject() {
    return currentProject;
}

// Performance optimization - Cache DOM elements
const domCache = {
    body: null,
    themeToggle: null,
    projectTitle: null,
    projectSubtitle: null,
    projectDescription: null,
    projectQuote: null,
    projectIcon: null,
    projectTech: null,
    projectFeatures: null
};

// Initialize DOM cache
function initDOMCache() {
    domCache.body = document.body;
    domCache.themeToggle = document.getElementById('theme-toggle');
    domCache.projectTitle = document.getElementById('projectTitle');
    domCache.projectSubtitle = document.getElementById('projectSubtitle');
    domCache.projectDescription = document.getElementById('projectDescription');
    domCache.projectQuote = document.getElementById('projectQuote');
    domCache.projectIcon = document.querySelector('.project-icon-large span');
    domCache.projectTech = document.getElementById('projectTech');
    domCache.projectFeatures = document.getElementById('projectFeatures');
}

// Theme Switching Functionality (Optimized)
function initThemeSwitch() {
    if (!domCache.themeToggle || !domCache.body) return;
    
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'professional') {
        domCache.body.classList.add('professional-theme');
        domCache.themeToggle.checked = true;
    }
    
    // Add event listener for theme toggle
    domCache.themeToggle.addEventListener('change', function() {
        if (this.checked) {
            domCache.body.classList.add('professional-theme');
            localStorage.setItem('theme', 'professional');
        } else {
            domCache.body.classList.remove('professional-theme');
            localStorage.setItem('theme', 'homer');
        }
    });
}

// Optimized project display function
function updateProjectDisplay(projectId) {
    const project = projects[projectId];
    if (!project) return;

    // Use cached DOM elements
    if (domCache.projectTitle) domCache.projectTitle.textContent = project.title;
    if (domCache.projectSubtitle) domCache.projectSubtitle.textContent = project.subtitle;
    if (domCache.projectDescription) domCache.projectDescription.textContent = project.description;
    if (domCache.projectQuote) domCache.projectQuote.textContent = project.quote;
    if (domCache.projectIcon) domCache.projectIcon.textContent = project.icon;
    if (domCache.projectTech) domCache.projectTech.innerHTML = project.tech.map(tech => 
        `<span class="tech-tag homer-tech">${tech}</span>`
    ).join('');
    if (domCache.projectFeatures) domCache.projectFeatures.innerHTML = project.features.map(feature => 
        `<div class="feature-item">
            <span class="feature-icon">+</span>
            <span class="feature-text">${feature}</span>
        </div>`
    ).join('');
}

// Switch project function for control room buttons
function switchProject(projectId) {
    // Update active button state
    const buttons = document.querySelectorAll('.control-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.project === projectId) {
            btn.classList.add('active');
        }
    });
    
    // Update project display
    updateProjectDisplay(projectId);
    
    // Update warning lights for visual feedback
    updateWarningLights(projectId);
}

// Update warning lights based on active project
function updateWarningLights(projectId) {
    const lights = document.querySelectorAll('.warning-light');
    lights.forEach(light => light.classList.remove('active'));
    
    // Activate different lights based on project
    const lightIndex = {
        'footballerista': 0, // red
        'openjobs': 1,       // yellow  
        'chaty': 2,          // green
        'paincheck': 0,      // red
        'caregiver': 1,      // yellow
        'fss': 2,            // green
        'endava': 0          // red
    };
    
    const index = lightIndex[projectId] || 0;
    if (lights[index]) {
        lights[index].classList.add('active');
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize DOM cache first
    initDOMCache();
    
    // Initialize project display with reduced timeout
    requestAnimationFrame(() => {
        updateProjectDisplay('footballerista');
    });
    
    // Initialize theme switch
    initThemeSwitch();
    
    // Initialize control room buttons
    initControlRoom();
});

// Initialize control room functionality
function initControlRoom() {
    console.log('=== INIT CONTROL ROOM ===');
    
    // Add click handlers to control buttons (backup for onclick)
    const controlButtons = document.querySelectorAll('.control-btn');
    console.log('Found control buttons:', controlButtons.length);
    
    controlButtons.forEach((button, index) => {
        console.log(`Button ${index}:`, button.dataset.project);
        button.addEventListener('click', function() {
            console.log('=== BUTTON CLICKED ===');
            const projectId = this.dataset.project;
            console.log('Clicked project:', projectId);
            if (projectId) {
                switchProject(projectId);
            } else {
                console.log('No project ID found on button');
            }
        });
    });
    
    // Set initial active state
    const footballeristaBtn = document.querySelector('[data-project="footballerista"]');
    if (footballeristaBtn) {
        footballeristaBtn.classList.add('active');
        console.log('Set initial active button');
    } else {
        console.log('Footballerista button not found');
    }
    
    console.log('=== INIT CONTROL ROOM COMPLETE ===');
}

function showProjectDetails(projectId) {
    const projectDetails = {
        footballerista: {
            title: 'Footballerista - Social Sports Platform',
            description: 'Mmm... football and social media! Comprehensive social networking platform for athletes featuring player profiles, highlights sharing, and community interactions with Firebase integration and real-time push notifications.',
            features: [
                'Player Profiles & Statistics',
                'Real-time Messaging System',
                'Media Sharing & Highlights',
                'Social Feed & Interactions',
                'Firebase Integration',
                'Push Notifications',
                'Core Data Storage',
                'Community Management'
            ],
            tech: ['Swift', 'Firebase', 'Push Notifications', 'Core Data', 'Social APIs', 'Real-time Database'],
            challenges: 'Built comprehensive social platform with real-time features while maintaining performance and user engagement across thousands of concurrent users.',
            outcome: 'Successfully deployed sports social platform with 50K+ active users and real-time engagement features.'
        },
        openjobs: {
            title: 'Open Jobs - Job Search Platform',
            description: 'Need money for beer! Mobile application connecting job seekers with employers, featuring advanced search filters, real-time notifications, and streamlined application process.',
            features: [
                'Advanced Search Filters',
                'Real-time Job Notifications',
                'Application Tracking System',
                'SQLite Database Management',
                'Employer Dashboard',
                'Resume Builder',
                'Interview Scheduling',
                'Salary Calculator'
            ],
            tech: ['Swift', 'SQLite', 'REST API', 'Push Notifications', 'Database Design', 'Mobile UI/UX'],
            challenges: 'Developed efficient job matching algorithm and real-time notification system while handling large datasets and user interactions.',
            outcome: 'Launched successful job platform connecting thousands of job seekers with relevant opportunities.'
        },
        chaty: {
            title: 'Chaty - Real-time Chat Application',
            description: 'Chat while eating donuts! Feature-rich messaging application with real-time communication, file sharing, voice messages, and end-to-end encryption.',
            features: [
                'Real-time Messaging',
                'File Sharing System',
                'Voice Message Support',
                'End-to-End Encryption',
                'WebSocket Connections',
                'User Presence Status',
                'Group Chat Functionality',
                'Message History'
            ],
            tech: ['Swift', 'WebSocket', 'Core Data', 'Encryption', 'Real-time Communication', 'Security'],
            challenges: 'Implemented secure real-time messaging with encryption and file sharing while maintaining performance and user privacy.',
            outcome: 'Deployed secure messaging app with end-to-end encryption and real-time communication features.'
        },
        paincheck: {
            title: 'PainCheck - Medical Assessment',
            description: 'Check if you\'re radioactive from nuclear plant! Healthcare application for pain assessment and management with AI-powered features.',
            features: [
                'AI Pain Detection',
                'Patient Tracking System',
                'Medical Report Generation',
                'HealthKit Integration',
                'Core ML Integration',
                'HIPAA Compliance',
                'Data Security',
                'Healthcare Analytics'
            ],
            tech: ['Swift', 'Core ML', 'HealthKit', 'AI', 'Medical APIs', 'Security', 'Analytics'],
            challenges: 'Implemented complex facial recognition algorithms for pain detection while ensuring medical data privacy and HIPAA compliance.',
            outcome: 'Successfully deployed medical-grade pain assessment tool used by healthcare professionals.'
        },
        caregiver: {
            title: 'Caregiver - Elderly Care App',
            description: 'Marge made me do this! Comprehensive caregiving platform for elderly care management with medication reminders and emergency alerts.',
            features: [
                'Medication Reminders',
                'Emergency Alert System',
                'Activity Tracking',
                'Family Coordination',
                'CloudKit Integration',
                'WatchOS Support',
                'HealthKit Integration',
                'Care Schedule Management'
            ],
            tech: ['Swift', 'CloudKit', 'WatchOS', 'HealthKit', 'Mobile Health', 'Cloud Services'],
            challenges: 'Built comprehensive elderly care platform with multi-device support and emergency response capabilities.',
            outcome: 'Launched successful caregiving app improving elderly care coordination and safety monitoring.'
        },
        fss: {
            title: 'FSS - Financial System',
            description: 'Track beer budget! Enterprise financial management system with real-time transactions and comprehensive reporting.',
            features: [
                'Real-time Transaction Processing',
                'Advanced Analytics Dashboard',
                'Financial Report Generation',
                'Data Encryption System',
                'Core Data Management',
                'Budget Tracking Tools',
                'Investment Analytics',
                'Security Compliance'
            ],
            tech: ['Swift', 'Core Data', 'Encryption', 'Analytics', 'Financial APIs', 'Security'],
            challenges: 'Developed enterprise-grade financial system handling sensitive data with bank-level security and compliance.',
            outcome: 'Deployed financial management system processing millions in transactions with zero security incidents.'
        },
        endava: {
            title: 'Endava Projects - Consulting Work',
            description: 'Boss makes me work! Collection of consulting projects for various clients with performance optimization and UX improvements.',
            features: [
                'Performance Optimization',
                'UX/UI Improvements',
                'Client Consulting Services',
                'Multi-industry Applications',
                'Code Review & Analysis',
                'Architecture Design',
                'Team Leadership',
                'Project Management'
            ],
            tech: ['Swift', 'Consulting', 'Optimization', 'UX Design', 'Architecture', 'Leadership'],
            challenges: 'Delivered high-impact consulting solutions across diverse industries while meeting client requirements and deadlines.',
            outcome: 'Successfully completed multiple consulting projects with measurable performance improvements and client satisfaction.'
        },
        personal: {
            title: 'Personal Projects - Innovation Lab',
            description: 'Top secret! Experimental apps and open source contributions with cutting-edge iOS technologies when Marge isn\'t watching!',
            features: [
                'SwiftUI Experiments',
                'Open Source Contributions',
                'Learning Projects',
                'Cutting-edge Tech',
                'Innovation Prototypes',
                'Community Engagement',
                'Technical Blogging',
                'Knowledge Sharing'
            ],
            tech: ['SwiftUI', 'Experimentation', 'Open Source', 'Innovation', 'Community', 'Learning'],
            challenges: 'Explored bleeding-edge iOS technologies and created innovative solutions while maintaining work-life balance.',
            outcome: 'Built reputation as innovative developer with successful open source contributions and community engagement.'
        }
    };
    
    const project = projectDetails[projectId];
    if (project) {
        const modalBody = document.getElementById('projectModalBody');
        modalBody.innerHTML = `
            <h3>${project.title}</h3>
            <p><strong>Overview:</strong> ${project.description}</p>
            
            <h4>Key Features:</h4>
            <ul>
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            
            <h4>Technology Stack:</h4>
            <div class="project-tech-stack">
                ${project.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
            </div>
            
            <h4>Technical Challenges:</h4>
            <p>${project.challenges}</p>
            
            <h4>Project Outcome:</h4>
            <p>${project.outcome}</p>
        `;
        
        const modal = document.getElementById('projectModal');
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Add D'OH! effect
        showHomerDoh('Opening project details!');
    }
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Scroll animations for sections
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loading');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // Observe project cards
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe skill categories
    document.querySelectorAll('.skill-category').forEach((category, index) => {
        category.style.animationDelay = `${index * 0.15}s`;
        observer.observe(category);
    });
}

// Form handling
function initFormHandling() {
    const form = document.querySelector('.contact-form form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                form.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        color: white;
        font-weight: 500;
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        max-width: 300px;
    `;
    
    // Set background color based on type
    if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #34C759, #30D158)';
    } else if (type === 'error') {
        notification.style.background = 'linear-gradient(135deg, #FF3B30, #FF453A)';
    } else {
        notification.style.background = 'linear-gradient(135deg, #007AFF, #5856D6)';
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Parallax effect for hero section
function initParallaxEffect() {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            
            heroBackground.style.transform = `translateY(${parallax}px)`;
            
            // Fade out hero section
            const heroSection = document.querySelector('.hero');
            if (heroSection) {
                const opacity = Math.max(0, 1 - scrolled / 600);
                heroSection.style.opacity = opacity;
            }
        });
    }
}

// Typing effect for hero title
function initTypingEffect() {
    const title = document.querySelector('.profile-card h1');
    if (title) {
        const originalText = title.textContent;
        title.textContent = '';
        title.style.borderRight = '3px solid #007AFF';
        
        let charIndex = 0;
        const typeSpeed = 100;
        
        function typeChar() {
            if (charIndex < originalText.length) {
                title.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, typeSpeed);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    title.style.borderRight = 'none';
                }, 1000);
            }
        }
        
        // Start typing after page load
        setTimeout(typeChar, 500);
    }
}

// Add hover effects to project cards
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add interactive skill tags
document.addEventListener('DOMContentLoaded', function() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 600);
        });
    });
    
    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Timeline animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('timeline-animate');
                }, index * 200);
                timelineObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
    
    // Add timeline animation styles
    const timelineStyle = document.createElement('style');
    timelineStyle.textContent = `
        .timeline-item {
            opacity: 0;
            transform: translateY(30px);
        }
        
        .timeline-item.timeline-animate {
            opacity: 1;
            transform: translateY(0);
            transition: all 0.6s ease-out;
        }
    `;
    document.head.appendChild(timelineStyle);
});

// Mobile menu toggle (if needed for future navigation)
document.addEventListener('DOMContentLoaded', function() {
    // Check if we need a mobile menu
    if (window.innerWidth <= 768) {
        // Add mobile navigation if needed in the future
        console.log('Mobile view detected');
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(() => {
    // Add any scroll-based optimizations here
}, 100));

// Add loading complete indicator
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add loading complete styles
    const loadingStyle = document.createElement('style');
    loadingStyle.textContent = `
        body.loaded .profile-card {
            animation: slideUp 0.8s ease-out forwards;
        }
    `;
    document.head.appendChild(loadingStyle);
});

// Console Easter egg
console.log('%c Milo Stevanoviç - iOS Developer Portfolio ', 'background: linear-gradient(135deg, #007AFF, #5856D6); color: white; font-size: 16px; padding: 10px; border-radius: 8px;');
