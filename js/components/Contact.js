/* ============================================================
   CV App - Contact Component
   Handles rendering of contact section
   ============================================================ */

(function () {
    'use strict';

    /* ---------- Render Contact Section ---------- */
    function renderContact() {
        const profile = Config.get('profile.personal');
        if (!profile) return;

        const screen = Utils.$('#screen-contact .screen-scroll');
        if (!screen) return;

        const content = [
            renderGetInTouch(),
            renderContactMethods(profile),
            renderLocation(profile)
        ].join('');

        screen.innerHTML = content;
    }

    /* ---------- Render Get In Touch ---------- */
    function renderGetInTouch() {
        const message = {
            type: 'received',
            text: "I'm always open to discussing new projects, opportunities, or just talking tech. Reach out anytime!",
            time: 'Now'
        };

        return `
            <div class="card">
                <h3 class="card-title">Get in Touch</h3>
                <div class="message-list">
                    ${Utils.createMessage(message)}
                </div>
            </div>
        `;
    }

    /* ---------- Render Contact Methods ---------- */
    function renderContactMethods(profile) {
        const methods = [
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
                icon: 'github',
                color: 'dark',
                href: profile.github,
                title: 'GitHub',
                desc: 'View repositories',
                external: true
            },
            {
                icon: 'gitlab',
                color: 'orange',
                href: profile.gitlab,
                title: 'GitLab',
                desc: 'View projects',
                external: true
            },
            {
                icon: 'bitbucket',
                color: 'blue',
                href: profile.bitbucket,
                title: 'Bitbucket',
                desc: 'View repositories',
                external: true
            },
            {
                icon: 'stackoverflow',
                color: 'orange',
                href: profile.stackoverflow,
                title: 'Stack Overflow',
                desc: 'View profile',
                external: true
            },
            {
                icon: 'docker',
                color: 'blue',
                href: profile.dockerHub,
                title: 'Docker Hub',
                desc: 'View containers',
                external: true
            },
            {
                icon: 'codepen',
                color: 'dark',
                href: profile.codepen,
                title: 'CodePen',
                desc: 'View pens',
                external: true
            },
            {
                icon: 'devto',
                color: 'dark',
                href: profile.devto,
                title: 'Dev.to',
                desc: 'View articles',
                external: true
            }
        ];

        const listItems = methods.map(method => Utils.createListItem(method)).join('');

        return `
            <div class="card">
                <h3 class="card-title">Contact</h3>
                <div class="list-group">
                    ${listItems}
                </div>
            </div>
        `;
    }

    /* ---------- Render Location ---------- */
    function renderLocation(profile) {
        return `
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
    }

    /* ---------- Initialize Contact Component ---------- */
    function init() {
        renderContact();
    }

    /* ---------- Public API ---------- */
    window.ContactComponent = {
        init,
        renderContact,
        renderGetInTouch,
        renderContactMethods,
        renderLocation
    };

})();
