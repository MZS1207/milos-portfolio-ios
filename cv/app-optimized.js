/* ============================================================
   CV App - Optimized Version (<150 lines)
   Clean, efficient, and testable
   ============================================================ */

(function () {
    'use strict';

    /* ---------- Constants ---------- */
    const TABS = ['about', 'skills', 'experience', 'projects', 'contact'];
    const SWIPE = { THRESHOLD: 50, RESTRAINT: 100 };

    /* ---------- State ---------- */
    let current = 0;
    let track, tabs, header;

    /* ---------- Core Functions ---------- */
    function $(sel) { return document.querySelector(sel); }
    function $$(sel) { return [...document.querySelectorAll(sel)]; }

    function switchTab(index) {
        if (index < 0 || index >= TABS.length) return;
        current = index;
        
        track.style.transform = `translateX(-${index * 100}%)`;
        
        tabs.forEach((t, i) => {
            t.classList.toggle('active', i === index);
            t.setAttribute('aria-selected', i === index);
        });
        
        header.textContent = TABS[index].charAt(0).toUpperCase() + TABS[index].slice(1);
        $(`#screen-${TABS[index]} .screen-scroll`)?.scrollTo(0, 0);
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
        // Tab clicks
        tabs.forEach((tab, i) => tab.addEventListener('click', () => switchTab(i)));
        
        // Touch gestures
        track.addEventListener('touchstart', (e) => {
            e.startX = e.changedTouches[0].clientX;
            e.startY = e.changedTouches[0].clientY;
            e.isSwiping = true;
        }, { passive: true });
        
        track.addEventListener('touchend', handleSwipe, { passive: true });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') switchTab(current + 1);
            if (e.key === 'ArrowLeft') switchTab(current - 1);
        });
    }

    /* ---------- Error Handling ---------- */
    function handleError(error, context) {
        console.error(`CV Error [${context}]:`, error);
        
        const msg = Utils?.createElement?.('div', 'error', 'CV Error: Please refresh') || 
                   Object.assign(document.createElement('div'), {
                       className: 'error',
                       textContent: 'CV Error: Please refresh'
                   });
        
        Object.assign(msg.style, {
            position: 'fixed', top: '20px', left: '50%',
            transform: 'translateX(-50%)', background: '#FF3B30',
            color: 'white', padding: '12px 20px', borderRadius: '8px',
            zIndex: 1000, fontFamily: 'system-ui'
        });
        
        document.body.appendChild(msg);
        setTimeout(() => msg.remove(), 5000);
    }

    /* ---------- Initialize ---------- */
    function init() {
        try {
            track = $('#screensTrack');
            tabs = $$('.tab');
            header = $('#headerTitle');
            
            if (!track || !tabs?.length || !header) {
                throw new Error('Required DOM elements not found');
            }
            
            initEvents();
            switchTab(0);
            console.log('CV App initialized successfully');
            
        } catch (error) {
            handleError(error, 'Initialization');
        }
    }

    /* ---------- Public API ---------- */
    window.CVApp = {
        init,
        switchTab,
        getCurrentTab: () => ({ index: current, name: TABS[current] }),
        test: { TABS, SWIPE, current }
    };

    /* ---------- Auto-start ---------- */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
