/* ============================================================
   CV App - Main Application Controller
   Uses configuration system for all data
   ============================================================ */

(function () {
    'use strict';

    /* ---------- Constants ---------- */
    const TAB_NAMES = ['about', 'skills', 'experience', 'projects', 'contact'];
    const SWIPE_THRESHOLD = 50;
    const SWIPE_RESTRAINT = 100;

    /* ---------- State ---------- */
    let currentIndex = 0;
    let configData = null;

    /* ---------- DOM refs ---------- */
    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

    const track     = $('#screensTrack');
    const tabs      = $$('.tab');
    const header    = $('#headerTitle');

    /* ---------- Render Functions ---------- */
    function renderProfile() {
        const profile = configData?.profile?.personal;
        if (!profile) return;

        // Update profile card
        $('.profile-name').textContent = profile.name;
        $('.profile-role').textContent = profile.role;
        $('.profile-location svg + span').textContent = profile.location;

        // Update stats
        const stats = configData?.profile?.stats;
        if (stats) {
            $('.stat-pill:nth-child(1) .stat-value').textContent = stats.years;
            $('.stat-pill:nth-child(2) .stat-value').textContent = stats.apps;
            $('.stat-pill:nth-child(3) .stat-value').textContent = stats.satisfaction;
        }

        // Update about messages
        const about = configData?.profile?.about;
        if (about) {
            const messageList = $('.message-list');
            messageList.innerHTML = about.map(msg => `
                <div class="message ${msg.type}">
                    <p>${msg.text}</p>
                    <span class="message-time">${msg.time}</span>
                </div>
            `).join('');
        }

        // Update quick actions
        updateQuickActions();
    }

    function updateQuickActions() {
        const profile = configData?.profile?.personal;
        if (!profile) return;

        const actions = [
            { icon: 'email', color: 'blue', href: `mailto:${profile.email}`, title: 'Email', desc: profile.email },
            { icon: 'phone', color: 'green', href: `tel:${profile.phone}`, title: 'Phone', desc: profile.phone },
            { icon: 'linkedin', color: 'indigo', href: profile.linkedIn, title: 'LinkedIn', desc: 'Connect with me', external: true },
            { icon: 'download', color: 'orange', href: 'MilosStevanovicResume.pdf', title: 'Download CV', desc: 'PDF Resume 2025', download: true }
        ];

        const listGroup = $('.list-group');
        listGroup.innerHTML = actions.map(action => `
            <a href="${action.href}" ${action.external ? 'target="_blank"' : ''} ${action.download ? 'download="MilosStevanovicResume.pdf"' : ''} class="list-item">
                <span class="list-icon ${action.color}">
                    ${getIcon(action.icon)}
                </span>
                <span class="list-content">
                    <strong>${action.title}</strong>
                    <small>${action.desc}</small>
                </span>
                <svg class="list-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="m9 18 6-6-6-6"/>
                </svg>
            </a>
        `).join('');
    }

    function renderSkills() {
        const skills = configData?.skills?.categories;
        if (!skills) return;

        const screen = $('#screen-skills .screen-scroll');
        const content = skills.map(category => {
            if (category.skills) {
                // Skill bars
                return `
                    <div class="card">
                        <h3 class="card-title">${category.title}</h3>
                        <div class="skill-list">
                            ${category.skills.map(skill => `
                                <div class="skill-row">
                                    <span class="skill-name">${skill.name}</span>
                                    <div class="skill-bar">
                                        <div class="skill-fill" style="width: ${skill.level}%"></div>
                                    </div>
                                    <span class="skill-pct">${skill.level}%</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            } else if (category.tags) {
                // Tag cloud
                return `
                    <div class="card">
                        <h3 class="card-title">${category.title}</h3>
                        <div class="tag-cloud">
                            ${category.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                `;
            }
        }).join('');

        screen.innerHTML = content;
        animateSkillBars();
    }

    function renderExperience() {
        const experience = configData?.experience?.experience;
        if (!experience) return;

        const screen = $('#screen-experience .screen-scroll');
        const content = experience.map(exp => `
            <div class="card">
                <div class="exp-item">
                    <div class="exp-dot ${exp.current ? 'current' : ''}"></div>
                    <div class="exp-body">
                        <span class="exp-date">${exp.date}</span>
                        <h4 class="exp-title">${exp.title}</h4>
                        <p class="exp-company">${exp.company}</p>
                        <p class="exp-desc">${exp.description}</p>
                        <div class="tag-cloud compact">
                            ${exp.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        screen.innerHTML = content;
    }

    function renderProjects() {
        const projects = configData?.projects;
        if (!projects) return;

        const screen = $('#screen-projects .screen-scroll');
        
        // Summary
        const summary = `
            <div class="projects-summary">
                <span class="summary-badge">${projects.summary.badge}</span>
                <p class="summary-text">${projects.summary.text}</p>
            </div>
        `;

        // Categories
        const categories = projects.categories.map(category => `
            <div class="card">
                <h3 class="card-title">${category.title}</h3>
                ${category.projects.map(projectId => {
                    const project = projects.projects[projectId];
                    return `
                        <div class="project-card" data-project="${projectId}">
                            <div class="project-header">
                                <span class="project-icon">${project.icon}</span>
                                <div>
                                    <h4 class="project-name">${project.name}</h4>
                                    <small class="project-type">${project.type}</small>
                                </div>
                                <svg class="list-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="m9 18 6-6-6-6"/>
                                </svg>
                            </div>
                            <p class="project-desc">${project.desc}</p>
                            <div class="tag-cloud compact">
                                ${project.tech.slice(0, 4).map(tech => `<span class="tag">${tech}</span>`).join('')}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `).join('');

        // More projects indicator
        const moreProjects = `
            <div class="card more-projects">
                <div class="more-projects-content">
                    <span class="more-projects-icon">...</span>
                    <h4 class="more-projects-title">And many more...</h4>
                    <p class="more-projects-desc">25+ applications delivered across diverse industries and technologies</p>
                </div>
            </div>
        `;

        screen.innerHTML = summary + categories + moreProjects;
        bindProjectCards();
    }

    function renderContact() {
        const profile = configData?.profile?.personal;
        if (!profile) return;

        const screen = $('#screen-contact .screen-scroll');
        
        // Get in touch
        const getInTouch = `
            <div class="card">
                <h3 class="card-title">Get in Touch</h3>
                <div class="message-list">
                    <div class="message received">
                        <p>I'm always open to discussing new projects, opportunities, or just talking tech. Reach out anytime!</p>
                        <span class="message-time">Now</span>
                    </div>
                </div>
            </div>
        `;

        // Contact methods
        const contactMethods = [
            { icon: 'email', color: 'blue', href: `mailto:${profile.email}`, title: 'Email', desc: profile.email },
            { icon: 'phone', color: 'green', href: `tel:${profile.phone}`, title: 'Phone', desc: profile.phone },
            { icon: 'linkedin', color: 'indigo', href: profile.linkedIn, title: 'LinkedIn', desc: 'Connect with me', external: true },
            { icon: 'github', color: 'dark', href: profile.github, title: 'GitHub', desc: 'View repositories', external: true },
            { icon: 'gitlab', color: 'orange', href: profile.gitlab, title: 'GitLab', desc: 'View projects', external: true },
            { icon: 'bitbucket', color: 'blue', href: profile.bitbucket, title: 'Bitbucket', desc: 'View repositories', external: true },
            { icon: 'stackoverflow', color: 'orange', href: profile.stackoverflow, title: 'Stack Overflow', desc: 'View profile', external: true },
            { icon: 'docker', color: 'blue', href: profile.dockerHub, title: 'Docker Hub', desc: 'View containers', external: true },
            { icon: 'codepen', color: 'dark', href: profile.codepen, title: 'CodePen', desc: 'View pens', external: true },
            { icon: 'devto', color: 'dark', href: profile.devto, title: 'Dev.to', desc: 'View articles', external: true }
        ];

        const contact = `
            <div class="card">
                <h3 class="card-title">Contact</h3>
                <div class="list-group">
                    ${contactMethods.map(method => `
                        <a href="${method.href}" ${method.external ? 'target="_blank"' : ''} class="list-item">
                            <span class="list-icon ${method.color}">
                                ${getIcon(method.icon)}
                            </span>
                            <span class="list-content">
                                <strong>${method.title}</strong>
                                <small>${method.desc}</small>
                            </span>
                            <svg class="list-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="m9 18 6-6-6-6"/>
                            </svg>
                        </a>
                    `).join('')}
                </div>
            </div>
        `;

        // Location
        const location = `
            <div class="card">
                <h3 class="card-title">Location</h3>
                <div class="location-block">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="1.5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <div>
                        <strong>${profile.location}</strong>
                        <small>Available for remote & on-site work</small>
                    </div>
                </div>
            </div>
        `;

        screen.innerHTML = getInTouch + contact + location;
    }

    /* ---------- Helper Functions ---------- */
    function getIcon(type) {
        const icons = {
            email: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
            phone: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
            linkedin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
            download: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/></svg>',
            github: '<svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6.02 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.81 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.21.69.82.57A12 12 0 0 0 12 .3"/></svg>',
            gitlab: '<svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.63-5.05L12 19.38l9.32-10.98 1.63 5.05a.84.84 0 0 1-.3.94z"/><path d="M6.77 8.35L12 2.07l5.23 6.28L12 13.61z"/></svg>',
            bitbucket: '<svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M5.8 2.4A2.4 2.4 0 0 0 3.4 4.8l2.2 13.3a2.4 2.4 0 0 0 2.3 2h8.2a2.4 2.4 0 0 0 2.3-2l2.2-13.3a2.4 2.4 0 0 0-2.4-2.4H5.8zm6.2 16.6a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4z"/></svg>',
            stackoverflow: '<svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-1.868 6.178l-.704 2.071 9.735 3.312.704-2.07-9.735-3.313zm-1.424 6.437l-.23 2.084 10.193 1.123.23-2.083-10.193-1.124zM0 24h24v-2.4H0V24z"/></svg>',
            docker: '<svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12.5 2.9c1.78 0 3.23 1.44 3.23 3.23s-1.44 3.23-3.23 3.23-3.23-1.44-3.23-3.23 1.45-3.23 3.23-3.23zm0 1.4c-1.01 0-1.83.82-1.83 1.83s.82 1.83 1.83 1.83 1.83-.82 1.83-1.83-.82-1.83-1.83-1.83zM9.2 8.5c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S6.95 12 6.95 10.75 7.96 8.5 9.2 8.5zm0 1.4c-.47 0-.85.38-.85.85s.38.85.85.85.85-.38.85-.85-.38-.85-.85-.85zm6.6 0c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25-2.25-1.01-2.25-2.25 1.01-2.25 2.25-2.25zm0 1.4c-.47 0-.85.38-.85.85s.38.85.85.85.85-.38.85-.85-.38-.85-.85-.85zm-3.3 3.6c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0 1.4c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1 1.1-.49 1.1-1.1-.49-1.1-1.1-1.1z"/></svg>',
            codepen: '<svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7l-10-5zm0 2.18L19.93 7 12 9.82 4.07 7 12 4.18zM4 8.3l7 3.82V19H4V8.3zm8 3.82l7-3.82V19h-7v-6.88z"/></svg>',
            devto: '<svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M7.42 10.05c-.18-.16-.46-.23-.68-.04a.5.5 0 0 0-.09.63l3.95 3.95a.5.5 0 0 0 .7 0l3.95-3.95a.5.5 0 0 0-.09-.63c-.22-.19-.5-.12-.68.04l-3.55 3.55-3.55-3.55z"/></svg>'
        };
        return icons[type] || '';
    }

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

        // Reset scroll position
        const screen = $(`#screen-${TAB_NAMES[index]} .screen-scroll`);
        if (screen) screen.scrollTop = 0;
    }

    /* ---------- Project Modal ---------- */
    function openProject(id) {
        const project = configData?.projects?.projects?.[id];
        if (!project) return;

        const modal = $('#projectModal');
        const modalTitle = $('#modalTitle');
        const modalBody = $('#modalBody');

        modalTitle.textContent = project.name;
        modalBody.innerHTML = `
            <div class="modal-icon">${project.icon}</div>
            <div class="modal-subtitle">${project.type}</div>

            <div class="modal-section">
                <div class="modal-section-title">Overview</div>
                <p class="modal-desc">${project.details.overview}</p>
            </div>

            <div class="modal-section">
                <div class="modal-section-title">Key Features</div>
                <ul class="modal-features">
                    ${project.details.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>

            <div class="modal-section">
                <div class="modal-section-title">Technology Stack</div>
                <div class="tag-cloud">
                    ${project.tech.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
            </div>

            <div class="modal-section">
                <div class="modal-section-title">My Role</div>
                <div class="modal-role">${project.details.role}</div>
            </div>
        `;

        modal.classList.add('open');
    }

    function closeModal() {
        $('#projectModal').classList.remove('open');
    }

    function bindProjectCards() {
        $$('[data-project]').forEach(card => {
            card.addEventListener('click', () => openProject(card.dataset.project));
        });

        $('#modalClose')?.addEventListener('click', closeModal);
        $('#modalOverlay')?.addEventListener('click', closeModal);
    }

    /* ---------- Skill Bar Animation ---------- */
    function animateSkillBars() {
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

    /* ---------- Swipe Gestures ---------- */
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

        if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dy) > SWIPE_RESTRAINT) return;

        if (dx < 0) {
            switchTab(currentIndex + 1);
        } else {
            switchTab(currentIndex - 1);
        }
    }, { passive: true });

    /* ---------- Keyboard Navigation ---------- */
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') switchTab(currentIndex + 1);
        if (e.key === 'ArrowLeft')  switchTab(currentIndex - 1);
    });

    /* ---------- Tab Event Listeners ---------- */
    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => switchTab(i));
    });

    /* ---------- Initialize ---------- */
    async function init() {
        // Load configuration
        configData = await Config.init();
        
        // Wait for config to be ready
        document.addEventListener('configReady', (e) => {
            configData = e.detail;
            
            // Render all screens
            renderProfile();
            renderSkills();
            renderExperience();
            renderProjects();
            renderContact();
            
            // Initialize first tab
            switchTab(0);
        });
    }

    // Start the app
    init();

})();
