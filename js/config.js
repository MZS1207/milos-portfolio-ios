/* ============================================================
   CV App Configuration System
   Centralized data management for easy updates
   ============================================================ */

(function () {
    'use strict';

    // Configuration cache
    let configCache = {};

    // Load configuration files
    async function loadConfig() {
        try {
            const [profile, experience, projects, skills, theme] = await Promise.all([
                fetch('config/profile.json').then(r => r.json()),
                fetch('config/experience.json').then(r => r.json()),
                fetch('config/projects.json').then(r => r.json()),
                fetch('config/skills.json').then(r => r.json()),
                fetch('config/theme.json').then(r => r.json())
            ]);

            configCache = { profile, experience, projects, skills, theme };
            return configCache;
        } catch (error) {
            console.error('Failed to load configuration:', error);
            return null;
        }
    }

    // Get configuration value
    function get(path) {
        const keys = path.split('.');
        return keys.reduce((obj, key) => obj?.[key], configCache);
    }

    // Get all configuration
    function getAll() {
        return configCache;
    }

    // Initialize theme CSS variables
    function applyTheme() {
        if (!configCache.theme) return;

        const theme = configCache.theme;
        const root = document.documentElement;

        // Apply colors
        Object.entries(theme.colors).forEach(([key, value]) => {
            root.style.setProperty(`--color-${key.toLowerCase()}`, value);
        });

        // Apply spacing
        Object.entries(theme.spacing).forEach(([key, value]) => {
            root.style.setProperty(`--sp-${key}`, value);
        });

        // Apply radii
        Object.entries(theme.radii).forEach(([key, value]) => {
            root.style.setProperty(`--r-${key}`, value);
        });

        // Apply shadows
        Object.entries(theme.shadows).forEach(([key, value]) => {
            root.style.setProperty(`--shadow-${key}`, value);
        });

        // Apply layout
        Object.entries(theme.layout).forEach(([key, value]) => {
            const cssVar = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
            root.style.setProperty(cssVar, value);
        });

        // Apply typography
        if (theme.typography) {
            root.style.setProperty('--font', theme.typography.fontFamily);
            Object.entries(theme.typography.scale).forEach(([key, value]) => {
                root.style.setProperty(`--text-${key}`, value);
            });
        }

        // Apply animations
        Object.entries(theme.animations.duration).forEach(([key, value]) => {
            root.style.setProperty(`--duration-${key}`, value);
        });

        Object.entries(theme.animations.easing).forEach(([key, value]) => {
            root.style.setProperty(`--ease-${key}`, value);
        });
    }

    // Initialize configuration system
    async function init() {
        await loadConfig();
        applyTheme();
        
        // Dispatch ready event
        document.dispatchEvent(new CustomEvent('configReady', { 
            detail: configCache 
        }));
    }

    // Global API
    window.Config = {
        init,
        get,
        getAll,
        loadConfig,
        applyTheme
    };

})();
