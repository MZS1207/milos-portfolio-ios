/* ============================================================
   CV App - Profile Component
   Handles rendering of personal information, stats, and about section
   ============================================================ */

(function () {
    'use strict';

    /* ---------- Render Profile Header ---------- */
    function renderProfileHeader() {
        const profile = Config.get('profile.personal');
        if (!profile) return;

        // Update basic info
        Utils.$('.profile-name').textContent = profile.name;
        Utils.$('.profile-role').textContent = profile.role;
        Utils.$('.profile-location svg + span').textContent = profile.location;

        // Update stats
        renderStats();
    }

    /* ---------- Render Stats ---------- */
    function renderStats() {
        const stats = Config.get('profile.stats');
        if (!stats) return;

        const statElements = Utils.$$('.stat-pill');
        const statValues = [stats.years, stats.apps, stats.satisfaction];

        statElements.forEach((element, index) => {
            const valueElement = element.querySelector('.stat-value');
            if (valueElement && statValues[index]) {
                valueElement.textContent = statValues[index];
            }
        });
    }

    /* ---------- Render About Messages ---------- */
    function renderAboutMessages() {
        const about = Config.get('profile.about');
        if (!about) return;

        const messageList = Utils.$('.message-list');
        if (!messageList) return;

        messageList.innerHTML = about.map(msg => Utils.createMessage(msg)).join('');
    }

    /* ---------- Render Quick Actions ---------- */
    function renderQuickActions() {
        const profile = Config.get('profile.personal');
        if (!profile) return;

        const actions = [
            {
                icon: 'email',
                color: 'blue',
                href: `mailto:${profile.email}`,
                title: 'Email',
                desc: profile.email
            },
            {
                icon: 'phone',
                color: 'green',
                href: `tel:${profile.phone}`,
                title: 'Phone',
                desc: profile.phone
            },
            {
                icon: 'linkedin',
                color: 'indigo',
                href: profile.linkedIn,
                title: 'LinkedIn',
                desc: 'Connect with me',
                external: true
            },
            {
                icon: 'download',
                color: 'orange',
                href: 'MilosStevanovicResume.pdf',
                title: 'Download CV',
                desc: 'PDF Resume 2025',
                download: 'MilosStevanovicResume.pdf'
            }
        ];

        const listGroup = Utils.$('.list-group');
        if (!listGroup) return;

        listGroup.innerHTML = actions.map(action => Utils.createListItem(action)).join('');
    }

    /* ---------- Initialize Profile Component ---------- */
    function init() {
        renderProfileHeader();
        renderAboutMessages();
        renderQuickActions();
    }

    /* ---------- Public API ---------- */
    window.ProfileComponent = {
        init,
        renderProfileHeader,
        renderStats,
        renderAboutMessages,
        renderQuickActions
    };

})();
