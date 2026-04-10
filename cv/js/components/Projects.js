/* ============================================================
   CV App - Projects Component
   Handles rendering of projects section and modal functionality
   ============================================================ */

(function () {
    'use strict';

    /* ---------- Render Projects Section ---------- */
    function renderProjects() {
        const projects = Config.get('projects');
        if (!projects) return;

        const screen = Utils.$('#screen-projects .screen-scroll');
        if (!screen) return;

        const content = [
            renderSummary(projects.summary),
            renderCategories(projects.categories),
            renderMoreProjectsIndicator()
        ].join('');

        screen.innerHTML = content;
        bindProjectCards();
    }

    /* ---------- Render Summary ---------- */
    function renderSummary(summary) {
        return `
            <div class="projects-summary">
                <span class="summary-badge">${summary.badge}</span>
                <p class="summary-text">${summary.text}</p>
            </div>
        `;
    }

    /* ---------- Render Categories ---------- */
    function renderCategories(categories) {
        return categories.map(category => renderCategory(category)).join('');
    }

    /* ---------- Render Single Category ---------- */
    function renderCategory(category) {
        const projectCards = category.projects.map(projectId => renderProjectCard(projectId)).join('');
        
        return `
            <div class="card">
                <h3 class="card-title">${category.title}</h3>
                ${projectCards}
            </div>
        `;
    }

    /* ---------- Render Project Card ---------- */
    function renderProjectCard(projectId) {
        const project = Config.get(`projects.projects.${projectId}`);
        if (!project) return '';

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
                ${Utils.createTagCloud(project.tech.slice(0, 4), true)}
            </div>
        `;
    }

    /* ---------- Render More Projects Indicator ---------- */
    function renderMoreProjectsIndicator() {
        return `
            <div class="card more-projects">
                <div class="more-projects-content">
                    <span class="more-projects-icon">...</span>
                    <h4 class="more-projects-title">And many more...</h4>
                    <p class="more-projects-desc">25+ applications delivered across diverse industries and technologies</p>
                </div>
            </div>
        `;
    }

    /* ---------- Project Modal Functions ---------- */
    function openProject(projectId) {
        const project = Config.get(`projects.projects.${projectId}`);
        if (!project) return;

        const modal = Utils.$('#projectModal');
        const modalTitle = Utils.$('#modalTitle');
        const modalBody = Utils.$('#modalBody');

        if (!modal || !modalTitle || !modalBody) return;

        modalTitle.textContent = project.name;
        modalBody.innerHTML = createModalContent(project);

        modal.classList.add('open');
    }

    function closeModal() {
        const modal = Utils.$('#projectModal');
        if (modal) {
            modal.classList.remove('open');
        }
    }

    /* ---------- Create Modal Content ---------- */
    function createModalContent(project) {
        return `
            <div class="modal-icon">${project.icon}</div>
            <div class="modal-subtitle">${project.type}</div>

            <div class="modal-section">
                <div class="modal-section-title">Overview</div>
                <p class="modal-desc">${project.details.overview}</p>
            </div>

            <div class="modal-section">
                <div class="modal-section-title">Key Features</div>
                <ul class="modal-features">
                    ${project.details.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>

            <div class="modal-section">
                <div class="modal-section-title">Technology Stack</div>
                ${Utils.createTagCloud(project.tech)}
            </div>

            <div class="modal-section">
                <div class="modal-section-title">My Role</div>
                <div class="modal-role">${project.details.role}</div>
            </div>
        `;
    }

    /* ---------- Event Handlers ---------- */
    function bindProjectCards() {
        Utils.$$('[data-project]').forEach(card => {
            card.addEventListener('click', () => openProject(card.dataset.project));
        });

        // Modal close handlers
        const modalClose = Utils.$('#modalClose');
        const modalOverlay = Utils.$('#modalOverlay');

        if (modalClose) modalClose.addEventListener('click', closeModal);
        if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });
    }

    /* ---------- Initialize Projects Component ---------- */
    function init() {
        renderProjects();
    }

    /* ---------- Public API ---------- */
    window.ProjectsComponent = {
        init,
        renderProjects,
        openProject,
        closeModal,
        bindProjectCards
    };

})();
