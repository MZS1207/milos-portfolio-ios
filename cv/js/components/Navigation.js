/* ============================================================
   CV App - Navigation Component
   Handles tab switching, swipe gestures, and keyboard navigation
   ============================================================ */

(function () {
    'use strict';

    /* ---------- Constants ---------- */
    const TAB_NAMES = ['about', 'skills', 'experience', 'projects', 'contact'];
    const SWIPE_THRESHOLD = 50;
    const SWIPE_RESTRAINT = 100;

    /* ---------- State ---------- */
    let currentIndex = 0;

    /* ---------- DOM refs ---------- */
    const track = Utils.$('#screensTrack');
    const tabs = Utils.$$('.tab');
    const header = Utils.$('#headerTitle');

    /* ---------- Tab Switching ---------- */
    function switchTab(index) {
        if (index < 0 || index >= TAB_NAMES.length) return;
        currentIndex = index;

        // Move track
        if (track) {
            track.style.transform = `translateX(-${index * 100}%)`;
        }

        // Update tabs
        tabs.forEach((t, i) => {
            const active = i === index;
            t.classList.toggle('active', active);
            t.setAttribute('aria-selected', active);
        });

        // Update header
        if (header) {
            header.textContent = TAB_NAMES[index].charAt(0).toUpperCase() + TAB_NAMES[index].slice(1);
        }

        // Reset scroll position
        const screen = Utils.$(`#screen-${TAB_NAMES[index]} .screen-scroll`);
        if (screen) screen.scrollTop = 0;

        // Emit event for other components
        document.dispatchEvent(new CustomEvent('tabChanged', { 
            detail: { index: currentIndex, tab: TAB_NAMES[index] }
        }));
    }

    /* ---------- Swipe Gestures ---------- */
    let touchStartX = 0;
    let touchStartY = 0;
    let isSwiping = false;

    function initSwipeGestures() {
        if (!track) return;

        track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].clientX;
            touchStartY = e.changedTouches[0].clientY;
            isSwiping = true;
        }, { passive: true });

        track.addEventListener('touchend', (e) => {
            if (!isSwiping) return;
            isSwiping = false;

            const dx = e.changedTouches[0].clientX - touchStartX;
            const dy = e.changedTouches[0].clientY - touchStartY;

            if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dy) > SWIPE_RESTRAINT) return;

            if (dx < 0) {
                switchTab(currentIndex + 1);
            } else {
                switchTab(currentIndex - 1);
            }
        }, { passive: true });
    }

    /* ---------- Keyboard Navigation ---------- */
    function initKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') switchTab(currentIndex + 1);
            if (e.key === 'ArrowLeft')  switchTab(currentIndex - 1);
        });
    }

    /* ---------- Tab Event Listeners ---------- */
    function initTabListeners() {
        tabs.forEach((tab, i) => {
            tab.addEventListener('click', () => switchTab(i));
        });
    }

    /* ---------- Get Current Tab ---------- */
    function getCurrentTab() {
        return {
            index: currentIndex,
            name: TAB_NAMES[currentIndex]
        };
    }

    /* ---------- Initialize Navigation ---------- */
    function init() {
        initTabListeners();
        initSwipeGestures();
        initKeyboardNavigation();
        switchTab(0); // Initialize first tab
    }

    /* ---------- Public API ---------- */
    window.NavigationComponent = {
        init,
        switchTab,
        getCurrentTab,
        getCurrentIndex: () => currentIndex,
        getTabNames: () => TAB_NAMES
    };

})();
