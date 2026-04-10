/* ============================================================
   CV App - Experience Component
   Handles rendering of work experience section
   ============================================================ */

(function () {
    'use strict';

    /* ---------- Render Experience Section ---------- */
    function renderExperience() {
        const experience = Config.get('experience.experience');
        if (!experience) return;

        const screen = Utils.$('#screen-experience .screen-scroll');
        if (!screen) return;

        const content = experience.map(exp => createExperienceCard(exp)).join('');
        screen.innerHTML = content;
    }

    /* ---------- Create Experience Card ---------- */
    function createExperienceCard(exp) {
        return `
            <div class="card">
                <div class="exp-item">
                    <div class="exp-dot ${exp.current ? 'current' : ''}"></div>
                    <div class="exp-body">
                        <span class="exp-date">${exp.date}</span>
                        <h4 class="exp-title">${exp.title}</h4>
                        <p class="exp-company">${exp.company}</p>
                        <p class="exp-desc">${exp.description}</p>
                        ${Utils.createTagCloud(exp.tags, true)}
                    </div>
                </div>
            </div>
        `;
    }

    /* ---------- Initialize Experience Component ---------- */
    function init() {
        renderExperience();
    }

    /* ---------- Public API ---------- */
    window.ExperienceComponent = {
        init,
        renderExperience,
        createExperienceCard
    };

})();
