/* ============================================================
   CV App - Simple Working Version
   Tab navigation and basic functionality
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
    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

    const track     = $('#screensTrack');
    const tabs      = $$('.tab');
    const header    = $('#headerTitle');

    /* ---------- Tab switching ---------- */
    function switchTab(index) {
        if (index < 0 || index >= TAB_NAMES.length) return;
        currentIndex = index;

        // Move track
        track.style.transform = `translateX(-${index * 100}%)`;

        // Update tabs
        tabs.forEach((t, i) => {
            const active = i === index;
            t.classList.toggle('active', active);
            t.setAttribute('aria-selected', active);
        });

        // Update header
        header.textContent = TAB_NAMES[index].charAt(0).toUpperCase() + TAB_NAMES[index].slice(1);

        // Reset scroll position
        const screen = $(`#screen-${TAB_NAMES[index]} .screen-scroll`);
        if (screen) screen.scrollTop = 0;
    }

    /* ---------- Swipe Gestures ---------- */
    let touchStartX = 0;
    let touchStartY = 0;
    let isSwiping = false;

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

    /* ---------- Keyboard Navigation ---------- */
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') switchTab(currentIndex + 1);
        if (e.key === 'ArrowLeft')  switchTab(currentIndex - 1);
    });

    /* ---------- Tab Event Listeners ---------- */
    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => switchTab(i));
    });

    /* ---------- Initialize ---------- */
    switchTab(0);

})();
