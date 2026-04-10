/* ============================================================
   CV App - Skills Component
   Handles rendering of skills and technologies
   ============================================================ */

(function () {
    'use strict';

    /* ---------- Render Skills Section ---------- */
    function renderSkills() {
        const skills = Config.get('skills.categories');
        if (!skills) return;

        const screen = Utils.$('#screen-skills .screen-scroll');
        if (!screen) return;

        const content = skills.map(category => {
            if (category.skills) {
                return renderSkillBars(category);
            } else if (category.tags) {
                return renderTagCloud(category);
            }
        }).join('');

        screen.innerHTML = content;
        Utils.animateSkillBars();
    }

    /* ---------- Render Skill Bars ---------- */
    function renderSkillBars(category) {
        const skillRows = category.skills.map(skill => Utils.createSkillRow(skill)).join('');
        
        return `
            <div class="card">
                <h3 class="card-title">${category.title}</h3>
                <div class="skill-list">
                    ${skillRows}
                </div>
            </div>
        `;
    }

    /* ---------- Render Tag Cloud ---------- */
    function renderTagCloud(category) {
        return `
            <div class="card">
                <h3 class="card-title">${category.title}</h3>
                ${Utils.createTagCloud(category.tags)}
            </div>
        `;
    }

    /* ---------- Initialize Skills Component ---------- */
    function init() {
        renderSkills();
    }

    /* ---------- Public API ---------- */
    window.SkillsComponent = {
        init,
        renderSkills,
        renderSkillBars,
        renderTagCloud
    };

})();
