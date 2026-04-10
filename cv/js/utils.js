/* ============================================================
   CV App - Utility Functions
   Helper functions used across components
   ============================================================ */

(function () {
    'use strict';

    /* ---------- DOM Selectors ---------- */
    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

    /* ---------- Icon Generator ---------- */
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

    /* ---------- HTML Template Generators ---------- */
    function createListItem(config) {
        return `
            <a href="${config.href}" ${config.external ? 'target="_blank"' : ''} ${config.download ? `download="${config.download}"` : ''} class="list-item">
                <span class="list-icon ${config.color}">
                    ${getIcon(config.icon)}
                </span>
                <span class="list-content">
                    <strong>${config.title}</strong>
                    <small>${config.desc}</small>
                </span>
                <svg class="list-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="m9 18 6-6-6-6"/>
                </svg>
            </a>
        `;
    }

    function createMessage(msg) {
        return `
            <div class="message ${msg.type}">
                <p>${msg.text}</p>
                <span class="message-time">${msg.time}</span>
            </div>
        `;
    }

    function createTagCloud(tags, compact = false) {
        const className = compact ? 'tag-cloud compact' : 'tag-cloud';
        return `
            <div class="${className}">
                ${tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        `;
    }

    function createSkillRow(skill) {
        return `
            <div class="skill-row">
                <span class="skill-name">${skill.name}</span>
                <div class="skill-bar">
                    <div class="skill-fill" style="width: ${skill.level}%"></div>
                </div>
                <span class="skill-pct">${skill.level}%</span>
            </div>
        `;
    }

    /* ---------- Animation Helpers ---------- */
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

    /* ---------- Validation ---------- */
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPhone(phone) {
        return /^[\d\s\-\+\(\)]+$/.test(phone);
    }

    /* ---------- Format Helpers ---------- */
    function formatDate(dateString) {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short'
        });
    }

    function truncateText(text, maxLength) {
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    }

    /* ---------- Export ---------- */
    window.Utils = {
        $,
        $$,
        getIcon,
        createListItem,
        createMessage,
        createTagCloud,
        createSkillRow,
        animateSkillBars,
        isValidEmail,
        isValidPhone,
        formatDate,
        truncateText
    };

})();
