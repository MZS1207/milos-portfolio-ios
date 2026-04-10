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

        const content = experience.map(exp => Utils.createExperienceCard(exp)).join('');
        screen.innerHTML = Utils.createCard('Work History', content);
    }

    /* ---------- Initialize Experience Component ---------- */
    function init() {
        renderExperience();
    }

    /* ---------- Public API ---------- */
    window.ExperienceComponent = {
        init,
        renderExperience
    };

})();
