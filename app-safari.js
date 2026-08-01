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

    function toggleSection(id, visible) {
        const el = $(id);
        if (el) el.style.display = visible ? '' : 'none';
    }

    function openModalShell() {
        if (!modal) return;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        const body = modal.querySelector('.modal-body');
        if (body) body.scrollTop = 0;
    }

    /* Generic detail renderer — one modal, reused by projects, skills & experience.
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

        openModalShell();
    }

    function showModal(projectId) {
        const p = PROJECTS[projectId];
        if (!p) return;
        renderDetail({
            icon: p.icon, name: p.name, type: p.type, description: p.description,
            listLabel: 'Key Features', list: p.features,
            tagsLabel: 'Technologies', tags: p.tech,
            highlightLabel: 'Project Highlights', highlight: p.highlights
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
            listLabel: 'Key contributions', list: x.contributions,
            tagsLabel: 'Focus areas', tags: x.focus
        });
    }

    function hideModal() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
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

    function renderGalleryFilters() {
        const bar = $('#galleryFilters');
        if (!bar) return;
        if (galleryItems().length === 0) { bar.style.display = 'none'; return; }
        bar.style.display = '';
        const chips = ['All'].concat(galleryProjects());
        bar.innerHTML = chips.map(function (name) {
            return '<button class="gallery-chip' + (name === galleryFilter ? ' active' : '') + '" data-filter="' + name + '">' + name + '</button>';
        }).join('');
        $$('.gallery-chip').forEach(function (btn) {
            btn.addEventListener('click', function () {
                galleryFilter = this.getAttribute('data-filter');
                renderGalleryFilters();
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
        grid.innerHTML = galleryView.map(function (it, i) {
            const isVideo = it.type === 'video';
            const thumb = isVideo ? (it.poster || '') : it.src;
            const alt = (it.project || 'Gallery item') + (it.caption ? ' — ' + it.caption : '');
            const media = thumb
                ? '<img src="' + thumb + '" alt="' + alt + '" loading="lazy">'
                : '<video src="' + it.src + '" muted playsinline preload="metadata"></video>';
            const badge = isVideo
                ? '<span class="gallery-play"><svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg></span>'
                : '';
            return '<button class="gallery-item" data-index="' + i + '" aria-label="Open: ' + alt + '">' + media + badge + '</button>';
        }).join('');
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
                ? '<video src="' + it.src + '"' + (it.poster ? ' poster="' + it.poster + '"' : '') + ' controls autoplay playsinline></video>'
                : '<img src="' + it.src + '" alt="' + (it.project || 'Gallery item') + '">';
        }
        setText('#lightboxCounter', (lightboxIndex + 1) + ' / ' + galleryView.length);
        setText('#lightboxProject', it.project || '');
        setText('#lightboxCaption', it.caption || '');
    }

    function openLightbox(i) {
        const lb = $('#lightbox');
        if (!lb || !galleryView[i]) return;
        lightboxIndex = i;
        renderLightbox();
        lb.classList.add('active');
        lb.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        const lb = $('#lightbox');
        if (!lb) return;
        const stage = $('#lightboxStage');
        if (stage) stage.innerHTML = '';
        lb.classList.remove('active');
        lb.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        lightboxIndex = -1;
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
                return;
            }
            if (e.key === 'ArrowRight') switchTab(current + 1);
            if (e.key === 'ArrowLeft') switchTab(current - 1);
            if (e.key === 'Escape') hideModal();
        });
        
        // Modal initialization
        modal = $('#projectModal');
        modalClose = $('#modalClose');

        // Project card click handlers
        $$('.project-card').forEach(card => {
            if (card) {
                card.addEventListener('click', handleProjectClick);
                card.style.cursor = 'pointer';
            }
        });

        // Skill row click handlers
        $$('.skill-tappable').forEach(row => {
            if (row) {
                row.addEventListener('click', handleSkillClick);
                row.style.cursor = 'pointer';
            }
        });

        // Experience card click handlers
        $$('.exp-tappable').forEach(row => {
            if (row) {
                row.addEventListener('click', handleExpClick);
                row.style.cursor = 'pointer';
            }
        });
        
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
                switchTab(0);
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
