/* ============================================================
   CV App - Main Application Controller
   Orchestrates all components and manages app lifecycle
   ============================================================ */

(function () {
    'use strict';

    /* ---------- State ---------- */
    let configData = null;

    /* ---------- Initialize All Components ---------- */
    function initializeComponents() {
        // Initialize navigation first
        NavigationComponent.init();
        
        // Initialize all screen components
        ProfileComponent.init();
        SkillsComponent.init();
        ExperienceComponent.init();
        ProjectsComponent.init();
        ContactComponent.init();
    }

    /* ---------- Handle Configuration Ready ---------- */
    function onConfigReady(event) {
        configData = event.detail;
        console.log('Configuration loaded, initializing components...');
        
        // Initialize all components with loaded data
        initializeComponents();
    }

    /* ---------- Handle Tab Changes ---------- */
    function onTabChanged(event) {
        const { index, tab } = event.detail;
        console.log(`Switched to ${tab} (index: ${index})`);
        
        // Re-animate skill bars when skills tab is activated
        if (tab === 'skills') {
            setTimeout(() => Utils.animateSkillBars(), 100);
        }
    }

    /* ---------- Error Handling ---------- */
    function handleError(error, context) {
        console.error(`CV App Error [${context}]:`, error);
        
        // Show user-friendly error message
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = 'An error occurred. Please refresh the page.';
        errorElement.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--color-red);
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            z-index: 1000;
        `;
        
        document.body.appendChild(errorElement);
        
        // Remove after 5 seconds
        setTimeout(() => {
            if (errorElement.parentNode) {
                errorElement.parentNode.removeChild(errorElement);
            }
        }, 5000);
    }

    /* ---------- Performance Monitoring ---------- */
    function logPerformance() {
        if (performance && performance.timing) {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`CV App loaded in ${loadTime}ms`);
        }
    }

    /* ---------- Initialize Application ---------- */
    async function init() {
        try {
            console.log('Initializing CV App...');
            
            // Set up event listeners
            document.addEventListener('configReady', onConfigReady);
            document.addEventListener('tabChanged', onTabChanged);
            
            // Handle global errors
            window.addEventListener('error', (e) => handleError(e.error, 'Global'));
            window.addEventListener('unhandledrejection', (e) => handleError(e.reason, 'Promise'));
            
            // Initialize configuration system
            await Config.init();
            
            // Log performance metrics
            setTimeout(logPerformance, 1000);
            
        } catch (error) {
            handleError(error, 'Initialization');
        }
    }

    /* ---------- Public API ---------- */
    window.CVApp = {
        init,
        getConfig: () => configData,
        reload: () => window.location.reload()
    };

    /* ---------- Auto-initialize when DOM is ready ---------- */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
