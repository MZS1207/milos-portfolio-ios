/* ============================================================
   CV App - Safari Compatible Version
   Works across all browsers including Safari
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
            if (e.key === 'ArrowRight') switchTab(current + 1);
            if (e.key === 'ArrowLeft') switchTab(current - 1);
        });
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
            console.log('CV App: Starting Safari-compatible initialization...');
            
            track = $('#screensTrack');
            tabs = $$('.tab');
            header = $('#headerTitle');
            
            console.log('CV App: DOM elements found:', {
                track: !!track,
                tabs: tabs ? tabs.length : 0,
                header: !!header
            });
            
            if (!track || !tabs || tabs.length === 0 || !header) {
                throw new Error('Required DOM elements not found');
            }
            
            initEvents();
            switchTab(0);
            console.log('CV App: Safari-compatible initialization successful');
            
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
