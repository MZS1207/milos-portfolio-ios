/* ============================================================
   CV App - Organized Main Application
   Orchestrates all components with clean architecture
   ============================================================ */

(function () {
    'use strict';

    /* ---------- State ---------- */
    let configData = null;
    let isInitialized = false;

    /* ---------- Initialize All Systems ---------- */
    function initializeSystems() {
        console.log('CV App: Initializing systems...');
        
        // Initialize theme system first
        if (window.Theme) {
            Theme.init();
            console.log('CV App: Theme system initialized');
        }
        
        // Initialize configuration system
        if (window.Config) {
            return Config.init().then(data => {
                configData = data;
                console.log('CV App: Configuration loaded');
                initializeComponents();
                return data;
            });
        } else {
            console.warn('CV App: Config system not available');
            return Promise.resolve(null);
        }
    }

    /* ---------- Initialize All Components ---------- */
    function initializeComponents() {
        console.log('CV App: Initializing components...');
        
        // Initialize navigation first
        if (window.NavigationComponent) {
            NavigationComponent.init();
            console.log('CV App: Navigation initialized');
        }
        
        // Initialize all screen components
        const components = [
            { name: 'Profile', instance: window.ProfileComponent },
            { name: 'Skills', instance: window.SkillsComponent },
            { name: 'Experience', instance: window.ExperienceComponent },
            { name: 'Projects', instance: window.ProjectsComponent },
            { name: 'Contact', instance: window.ContactComponent }
        ];
        
        components.forEach(({ name, instance }) => {
            if (instance) {
                instance.init();
                console.log(`CV App: ${name} component initialized`);
            } else {
                console.warn(`CV App: ${name} component not available`);
            }
        });
        
        isInitialized = true;
        console.log('CV App: All systems initialized');
    }

    /* ---------- Handle Configuration Ready ---------- */
    function onConfigReady(event) {
        configData = event.detail;
        console.log('CV App: Configuration ready event received');
        
        if (!isInitialized) {
            initializeComponents();
        }
    }

    /* ---------- Handle Tab Changes ---------- */
    function onTabChanged(event) {
        const { index, tab } = event.detail;
        console.log(`CV App: Switched to ${tab} (index: ${index})`);
        
        // Re-animate skill bars when skills tab is activated
        if (tab === 'skills') {
            setTimeout(() => Utils.animateSkillBars(), 100);
        }
    }

    /* ---------- Error Handling ---------- */
    function handleError(error, context) {
        console.error(`CV App Error [${context}]:`, error);
        
        // Show user-friendly error message
        const errorElement = Utils.createElement('div', 'error-message', 
            'An error occurred. Please refresh the page.'
        );
        
        errorElement.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--color-red, #FF3B30);
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            z-index: 1000;
            font-family: var(--font, -apple-system, BlinkMacSystemFont, sans-serif);
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
            console.log(`CV App: Loaded in ${loadTime}ms`);
        }
    }

    /* ---------- Initialize Application ---------- */
    async function init() {
        try {
            console.log('CV App: Starting initialization...');
            
            // Set up event listeners
            document.addEventListener('configReady', onConfigReady);
            document.addEventListener('tabChanged', onTabChanged);
            
            // Handle global errors
            window.addEventListener('error', (e) => handleError(e.error, 'Global'));
            window.addEventListener('unhandledrejection', (e) => handleError(e.reason, 'Promise'));
            
            // Initialize all systems
            await initializeSystems();
            
            // Log performance metrics
            setTimeout(logPerformance, 1000);
            
            console.log('CV App: Initialization complete');
            
        } catch (error) {
            handleError(error, 'Initialization');
        }
    }

    /* ---------- Public API ---------- */
    window.CVApp = {
        init,
        getConfig: () => configData,
        reload: () => window.location.reload(),
        isReady: () => isInitialized,
        
        // Component access
        getComponent: (name) => {
            const componentMap = {
                navigation: NavigationComponent,
                profile: ProfileComponent,
                skills: SkillsComponent,
                experience: ExperienceComponent,
                projects: ProjectsComponent,
                contact: ContactComponent
            };
            return componentMap[name.toLowerCase()];
        }
    };

    /* ---------- Auto-initialize when DOM is ready ---------- */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
