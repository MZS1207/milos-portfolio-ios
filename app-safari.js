/* ============================================================
   CV App - Safari Compatible Version
   Works across all browsers including Safari
   ============================================================ */

(function () {
    'use strict';

    /* ---------- Constants ---------- */
    const TABS = ['about', 'skills', 'experience', 'projects', 'gallery'];
    const SWIPE = { THRESHOLD: 50, RESTRAINT: 100 };

    /* ---------- Content (edit in content-data.js) ---------- */
    const CONTENT = window.CONTENT_DATA || {};
    const PROJECTS = CONTENT.projects || {};
    const SKILLS = CONTENT.skills || {};
    const EXPERIENCE = CONTENT.experience || {};

    /* ---------- State ---------- */
    let current = 0;
    let track, tabs, header, modal, modalClose;
    let lastFocused = null;          // element to restore focus to when a dialog closes
    let modalActions = {};           // id -> handler for in-modal action buttons

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

        // Deep link: keep the URL hash in sync so a tab can be shared (#projects)
        if (window.history && window.history.replaceState) {
            try {
                const hash = index === 0 ? ' ' : '#' + TABS[index];
                window.history.replaceState(null, '', hash.trim() || window.location.pathname);
            } catch (e) {}
        }
    }

    function tabFromHash() {
        const h = (window.location.hash || '').replace('#', '').toLowerCase();
        const i = TABS.indexOf(h);
        return i >= 0 ? i : 0;
    }

    /* ---------- Theme (light / dark) ---------- */
    function currentThemeIsDark() {
        const attr = document.documentElement.getAttribute('data-theme');
        if (attr === 'dark') return true;
        if (attr === 'light') return false;
        return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const meta = $('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', theme === 'dark' ? '#000000' : '#F2F2F7');
        const btn = $('#themeToggle');
        if (btn) btn.setAttribute('aria-checked', theme === 'dark' ? 'true' : 'false');
    }

    function toggleTheme() {
        const next = currentThemeIsDark() ? 'light' : 'dark';
        try { localStorage.setItem('theme', next); } catch (e) {}
        applyTheme(next);
    }

    function setupTheme() {
        applyTheme(currentThemeIsDark() ? 'dark' : 'light');
        const btn = $('#themeToggle');
        if (btn) btn.addEventListener('click', toggleTheme);
        // Follow the OS only while the user hasn't made an explicit choice
        if (window.matchMedia) {
            const mq = window.matchMedia('(prefers-color-scheme: dark)');
            const onChange = function () {
                let saved = null;
                try { saved = localStorage.getItem('theme'); } catch (e) {}
                if (saved !== 'light' && saved !== 'dark') {
                    applyTheme(mq.matches ? 'dark' : 'light');
                }
            };
            if (mq.addEventListener) mq.addEventListener('change', onChange);
            else if (mq.addListener) mq.addListener(onChange);
        }
    }

    /* ---------- Modal Functions ---------- */
    function setText(id, value) { const el = $(id); if (el) el.textContent = value; }

    function esc(str) {
        return String(str == null ? '' : str)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    const ICON_PHOTOS = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>';
    const ICON_LINK = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>';
    const ICON_GITHUB = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6.02 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.81 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.21.69.82.57A12 12 0 0 0 12 .3"/></svg>';

    function linkIcon(url) {
        return /github\.com/i.test(url) ? ICON_GITHUB : ICON_LINK;
    }

    function toggleSection(id, visible) {
        const el = $(id);
        if (el) el.style.display = visible ? '' : 'none';
    }

    function openModalShell() {
        if (!modal) return;
        lastFocused = document.activeElement;
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        const body = modal.querySelector('.modal-body');
        if (body) body.scrollTop = 0;
        const content = modal.querySelector('.modal-content');
        if (content) content.focus({ preventScroll: true });
    }

    function isModalOpen() {
        return !!(modal && modal.classList.contains('active'));
    }

    function restoreFocus() {
        if (lastFocused && typeof lastFocused.focus === 'function') {
            try { lastFocused.focus({ preventScroll: true }); } catch (e) {}
        }
        lastFocused = null;
    }

    /* Keep Tab inside an open dialog */
    function trapFocus(container, e) {
        const focusable = Array.from(container.querySelectorAll(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"]), video[controls]'
        )).filter(function (el) { return el.offsetParent !== null; });
        if (!focusable.length) { e.preventDefault(); return; }
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (e.shiftKey && (document.activeElement === first || document.activeElement === container)) {
            e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault(); first.focus();
        }
    }

    /* Generic detail renderer - one modal, reused by projects, skills & experience.
       d = { icon, name, type, description,
             listLabel, list:[], tagsLabel, tags:[], highlightLabel, highlight } */
    function renderDetail(d) {
        if (!d || !modal) return;

        setText('#modalProjectIcon', d.icon || '');
        setText('#modalProjectName', d.name || '');
        setText('#modalProjectType', d.type || '');
        setText('#modalDescription', d.description || '');

        const list = d.list || [];
        setText('#modalFeaturesLabel', d.listLabel || '');
        const modalFeatures = $('#modalFeatures');
        if (modalFeatures) modalFeatures.innerHTML = list.map(x => `<li>${x}</li>`).join('');
        toggleSection('#modalFeaturesSection', list.length > 0);

        const tags = d.tags || [];
        setText('#modalTechLabel', d.tagsLabel || '');
        const modalTech = $('#modalTech');
        if (modalTech) modalTech.innerHTML = tags.map(t => `<span class="tag">${t}</span>`).join('');
        toggleSection('#modalTechSection', tags.length > 0);

        setText('#modalHighlightsLabel', d.highlightLabel || '');
        const modalHighlights = $('#modalHighlights');
        if (modalHighlights) modalHighlights.innerHTML = d.highlight ? `<p>${d.highlight}</p>` : '';
        toggleSection('#modalHighlightsSection', !!d.highlight);

        // Action buttons: in-app actions (e.g. open Gallery filtered) + external links
        modalActions = {};
        const actions = d.actions || [];
        const links = (d.links || []).filter(function (l) { return l && l.url; });
        const modalLinks = $('#modalLinks');
        if (modalLinks) {
            modalLinks.innerHTML = actions.map(function (a, i) {
                const id = 'act' + i;
                modalActions[id] = a.onClick;
                return '<button type="button" class="modal-link primary" data-action="' + id + '">' + (a.icon || '') + '<span>' + esc(a.label) + '</span></button>';
            }).join('') + links.map(function (l) {
                return '<a class="modal-link" href="' + esc(l.url) + '" target="_blank" rel="noopener noreferrer">' + linkIcon(l.url) + '<span>' + esc(l.label || l.url) + '</span></a>';
            }).join('');
            $$('#modalLinks [data-action]').forEach(function (btn) {
                btn.addEventListener('click', function () {
                    const fn = modalActions[this.getAttribute('data-action')];
                    if (typeof fn === 'function') fn();
                });
            });
        }
        toggleSection('#modalLinksSection', actions.length + links.length > 0);

        openModalShell();
    }

    function showModal(projectId) {
        const p = PROJECTS[projectId];
        if (!p) return;
        const actions = [];
        if (p.gallery && galleryHasProject(p.gallery)) {
            const n = galleryCountFor(p.gallery);
            actions.push({
                label: 'View screenshots' + (n ? ' (' + n + ')' : ''),
                icon: ICON_PHOTOS,
                onClick: function () { openGalleryFor(p.gallery); }
            });
        }
        renderDetail({
            icon: p.icon, name: p.name, type: p.type, description: p.description,
            listLabel: 'Key Features', list: p.features,
            tagsLabel: 'Technologies', tags: p.tech,
            highlightLabel: 'Project Highlights', highlight: p.highlights,
            actions: actions, links: p.links
        });
    }

    function showSkill(skillId) {
        const s = SKILLS[skillId];
        if (!s) return;
        renderDetail({
            icon: s.icon, name: s.name, type: s.type, description: s.description,
            listLabel: 'Where I use it', list: s.usedIn,
            tagsLabel: 'Related', tags: s.related
        });
    }

    function showExp(expId) {
        const x = EXPERIENCE[expId];
        if (!x) return;
        renderDetail({
            icon: x.icon, name: x.name, type: x.type, description: x.description,
            listLabel: x.listLabel || 'Key contributions', list: x.contributions,
            tagsLabel: 'Focus areas', tags: x.focus
        });
    }

    function hideModal(opts) {
        if (modal && modal.classList.contains('active')) {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            if (!(opts && opts.keepFocus)) restoreFocus();
        }
    }

    function handleProjectClick(e) {
        const projectId = e.currentTarget.getAttribute('data-project');
        if (projectId) {
            e.preventDefault();
            showModal(projectId);
        }
    }

    function handleSkillClick(e) {
        const skillId = e.currentTarget.getAttribute('data-skill');
        if (skillId) {
            e.preventDefault();
            showSkill(skillId);
        }
    }

    function handleExpClick(e) {
        const expId = e.currentTarget.getAttribute('data-exp');
        if (expId) {
            e.preventDefault();
            showExp(expId);
        }
    }

    /* ---------- Gallery (iOS Photos-style) ---------- */
    let galleryFilter = 'All';
    let galleryView = [];
    let lightboxIndex = -1;

    function galleryItems() {
        return (window.GALLERY_ITEMS && Array.isArray(window.GALLERY_ITEMS)) ? window.GALLERY_ITEMS : [];
    }

    function galleryProjects() {
        const seen = [];
        galleryItems().forEach(function (it) {
            if (it.project && seen.indexOf(it.project) === -1) seen.push(it.project);
        });
        return seen;
    }

    function galleryHasProject(name) {
        return galleryItems().some(function (it) { return it.project === name; });
    }

    function galleryCountFor(name) {
        return galleryItems().filter(function (it) { return it.project === name; }).length;
    }

    /* Open the Gallery tab pre-filtered to one project (from a project modal) */
    function openGalleryFor(project) {
        hideModal({ keepFocus: true });
        galleryFilter = galleryHasProject(project) ? project : 'All';
        renderGalleryFilters();
        renderGalleryGrid();
        switchTab(TABS.indexOf('gallery'));
        const chip = $('.gallery-chip.active');
        if (chip) {
            try { chip.scrollIntoView({ block: 'nearest', inline: 'center' }); } catch (e) {}
            chip.focus({ preventScroll: true });
        }
    }

    function renderGalleryFilters() {
        const bar = $('#galleryFilters');
        if (!bar) return;
        if (galleryItems().length === 0) { bar.style.display = 'none'; return; }
        bar.style.display = '';
        const chips = ['All'].concat(galleryProjects());
        bar.innerHTML = chips.map(function (name) {
            const on = name === galleryFilter;
            return '<button type="button" class="gallery-chip' + (on ? ' active' : '') + '" data-filter="' + esc(name) + '" aria-pressed="' + on + '">' + esc(name) + '<span class="gallery-chip-count">' + (name === 'All' ? galleryItems().length : galleryCountFor(name)) + '</span></button>';
        }).join('');
        $$('.gallery-chip').forEach(function (btn) {
            btn.addEventListener('click', function () {
                galleryFilter = this.getAttribute('data-filter');
                $$('.gallery-chip').forEach(function (chip) {
                    const active = chip.getAttribute('data-filter') === galleryFilter;
                    chip.classList.toggle('active', active);
                    chip.setAttribute('aria-pressed', String(active));
                });
                renderGalleryGrid();
            });
        });
    }

    function renderGalleryGrid() {
        const grid = $('#galleryGrid');
        const empty = $('#galleryEmpty');
        if (!grid) return;
        const all = galleryItems();
        if (all.length === 0) {
            grid.style.display = 'none';
            if (empty) empty.style.display = '';
            return;
        }
        grid.style.display = '';
        if (empty) empty.style.display = 'none';
        galleryView = galleryFilter === 'All' ? all.slice() : all.filter(function (it) { return it.project === galleryFilter; });
        const projects = galleryFilter === 'All' ? galleryProjects() : [galleryFilter];
        setText('#gallerySummary', galleryView.length + (galleryView.length === 1 ? ' screen · ' : ' screens · ') + projects.length + (projects.length === 1 ? ' project' : ' projects'));
        grid.innerHTML = projects.map(function (name, groupIndex) {
            const projectKey = Object.keys(PROJECTS).find(function (key) { return PROJECTS[key].gallery === name; });
            const project = PROJECTS[projectKey];
            const cards = galleryView.map(function (it, i) {
                if (it.project !== name) return '';
                const isVideo = it.type === 'video';
                const thumb = isVideo ? it.poster : it.src;
                const alt = name + (it.caption ? ' - ' + it.caption : '');
                const media = thumb
                    ? '<img src="' + esc(thumb) + '"' + (it.width && it.height ? ' width="' + Number(it.width) + '" height="' + Number(it.height) + '"' : '') + ' alt="' + esc(alt) + '" loading="lazy" decoding="async">'
                    : '<video src="' + esc(it.src) + '" muted playsinline preload="metadata"></video>';
                return '<button type="button" class="gallery-item' + (it.width > it.height ? ' gallery-item-wide' : '') + '" data-index="' + i + '" aria-label="Open: ' + esc(alt) + '"><span class="gallery-preview">' + media +
                    '<span class="gallery-open" aria-hidden="true">' + (isVideo ? '▶' : '↗') + '</span></span><span class="gallery-caption">' + esc(it.caption || name) + '</span></button>';
            }).join('');
            return '<section class="gallery-album" aria-labelledby="album-' + groupIndex + '"><div class="gallery-album-heading"><div><h3 id="album-' + groupIndex + '">' + esc(name) + '</h3>' +
                (project ? '<p>' + esc(project.type) + '</p>' : '') + '</div><span class="gallery-album-count">' + galleryCountFor(name) + (galleryCountFor(name) === 1 ? ' screen' : ' screens') + '</span></div>' +
                (project && project.gallerySummary ? '<p class="gallery-album-description">' + esc(project.gallerySummary) + '</p>' : '') +
                '<div class="gallery-album-grid">' + cards + '</div></section>';
        }).join('');
        grid.querySelectorAll('img').forEach(function (img) {
            img.addEventListener('load', function () {
                img.closest('.gallery-item').classList.toggle('gallery-item-wide', img.naturalWidth > img.naturalHeight);
            });
            if (img.complete && img.naturalWidth > img.naturalHeight) img.closest('.gallery-item').classList.add('gallery-item-wide');
            img.addEventListener('error', function () {
                const fallback = document.createElement('span');
                fallback.className = 'gallery-media-error';
                fallback.textContent = 'Preview unavailable';
                img.replaceWith(fallback);
            });
        });
        $$('.gallery-item').forEach(function (btn) {
            btn.addEventListener('click', function () {
                openLightbox(parseInt(this.getAttribute('data-index'), 10));
            });
        });
    }

    function isLightboxOpen() {
        const lb = $('#lightbox');
        return !!(lb && lb.classList.contains('active'));
    }

    function renderLightbox() {
        const it = galleryView[lightboxIndex];
        if (!it) return;
        const stage = $('#lightboxStage');
        if (stage) {
            stage.innerHTML = it.type === 'video'
                ? '<video src="' + esc(it.src) + '"' + (it.poster ? ' poster="' + esc(it.poster) + '"' : '') + ' controls autoplay playsinline></video>'
                : '<img src="' + esc(it.src) + '" alt="' + esc((it.project || 'Gallery item') + (it.caption ? ' - ' + it.caption : '')) + '" decoding="async">';
        }
        setText('#lightboxCounter', (lightboxIndex + 1) + ' / ' + galleryView.length);
        setText('#lightboxProject', it.project || '');
        setText('#lightboxCaption', it.caption || '');
    }

    function openLightbox(i) {
        const lb = $('#lightbox');
        if (!lb || !galleryView[i]) return;
        lightboxIndex = i;
        lastFocused = document.activeElement;
        renderLightbox();
        lb.classList.add('active');
        lb.setAttribute('aria-hidden', 'false');
        if ($('#app')) $('#app').inert = true;
        document.body.style.overflow = 'hidden';
        const close = $('#lightboxClose');
        if (close) close.focus({ preventScroll: true });
    }

    function closeLightbox() {
        const lb = $('#lightbox');
        if (!lb) return;
        const stage = $('#lightboxStage');
        if (stage) stage.innerHTML = '';
        lb.classList.remove('active');
        lb.setAttribute('aria-hidden', 'true');
        if ($('#app')) $('#app').inert = false;
        document.body.style.overflow = '';
        lightboxIndex = -1;
        restoreFocus();
    }

    function stepLightbox(dir) {
        if (!galleryView.length || lightboxIndex < 0) return;
        lightboxIndex = (lightboxIndex + dir + galleryView.length) % galleryView.length;
        renderLightbox();
    }

    function setupGallery() {
        renderGalleryFilters();
        renderGalleryGrid();
        const close = $('#lightboxClose');
        if (close) close.addEventListener('click', closeLightbox);
        const prev = $('#lightboxPrev');
        if (prev) prev.addEventListener('click', function () { stepLightbox(-1); });
        const next = $('#lightboxNext');
        if (next) next.addEventListener('click', function () { stepLightbox(1); });
        const lb = $('#lightbox');
        if (lb) {
            lb.addEventListener('click', function (e) {
                if (e.target === lb || (e.target && e.target.id === 'lightboxStage')) closeLightbox();
            });
            lb.addEventListener('touchstart', function (e) {
                if (e.touches.length !== 1 || e.target.closest('video, button')) { lb._sx = null; return; }
                lb._sx = e.changedTouches[0].clientX;
                lb._sy = e.changedTouches[0].clientY;
            }, { passive: true });
            lb.addEventListener('touchend', function (e) {
                if (lb._sx == null) return;
                const dx = e.changedTouches[0].clientX - lb._sx;
                const dy = e.changedTouches[0].clientY - lb._sy;
                lb._sx = null;
                if (Math.abs(dx) > SWIPE.THRESHOLD && Math.abs(dy) < SWIPE.RESTRAINT) {
                    stepLightbox(dx < 0 ? 1 : -1);
                }
            }, { passive: true });
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
            if (isLightboxOpen()) {
                if (e.key === 'ArrowRight') stepLightbox(1);
                if (e.key === 'ArrowLeft') stepLightbox(-1);
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'Tab') trapFocus($('#lightbox'), e);
                return;
            }
            if (isModalOpen()) {
                if (e.key === 'Escape') hideModal();
                if (e.key === 'Tab') trapFocus(modal.querySelector('.modal-content'), e);
                return;
            }
            if (e.altKey || e.ctrlKey || e.metaKey) return;
            if (e.key === 'ArrowRight') switchTab(current + 1);
            if (e.key === 'ArrowLeft') switchTab(current - 1);
        });

        // Follow back/forward navigation between tab hashes
        window.addEventListener('hashchange', function () {
            const i = tabFromHash();
            if (i !== current) switchTab(i);
        });
        
        // Modal initialization
        modal = $('#projectModal');
        modalClose = $('#modalClose');

        // Tappable rows: mouse/touch + keyboard (Enter / Space), exposed as buttons
        function makeTappable(el, handler) {
            if (!el) return;
            el.addEventListener('click', handler);
            el.style.cursor = 'pointer';
            if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');
            if (!el.hasAttribute('role')) el.setAttribute('role', 'button');
            el.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                    e.preventDefault();
                    handler(e);
                }
            });
        }
        $$('.project-card').forEach(card => makeTappable(card, handleProjectClick));
        $$('.skill-tappable').forEach(row => makeTappable(row, handleSkillClick));
        $$('.exp-tappable').forEach(row => makeTappable(row, handleExpClick));
        
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

        // Theme toggle
        setupTheme();

        // Gallery
        setupGallery();
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
            // Safari-specific DOM ready check
            if (document.readyState !== 'complete') {
                setTimeout(init, 100);
                return;
            }

            track = $('#screensTrack');
            tabs = $$('.tab');
            header = $('#headerTitle');

            if (!track || !tabs || tabs.length === 0 || !header) {
                throw new Error('Required DOM elements not found');
            }

            // Safari-specific initialization delay
            setTimeout(function() {
                initEvents();
                switchTab(tabFromHash());
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
        openGalleryFor: openGalleryFor,
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
