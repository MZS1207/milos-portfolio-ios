/* ============================================================
   CV App - Theme System
   Centralized theme management for colors, fonts, spacing
   ============================================================ */

(function () {
    'use strict';

    /* ---------- Theme Configuration ---------- */
    const theme = {
        colors: {
            primary: '#007AFF',
            background: '#F2F2F7',
            surface: '#FFFFFF',
            text: '#1C1C1E',
            secondary: '#8E8E93',
            tertiary: '#C7C7CC',
            separator: 'rgba(60, 60, 67, 0.12)',
            fill: 'rgba(120, 120, 128, 0.12)',
            blue: '#007AFF',
            green: '#34C759',
            orange: '#FF9500',
            red: '#FF3B30',
            indigo: '#5856D6',
            dark: '#1C1C1E'
        },
        spacing: {
            xs: '4px',
            sm: '8px',
            md: '12px',
            lg: '16px',
            xl: '20px',
            xxl: '24px',
            xxxl: '32px',
            huge: '40px'
        },
        typography: {
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            sizes: {
                xs: '11px',
                sm: '12px',
                base: '14px',
                lg: '15px',
                xl: '16px',
                '2xl': '17px',
                '3xl': '18px',
                '4xl': '22px',
                '5xl': '24px'
            },
            weights: {
                normal: '400',
                medium: '500',
                semibold: '600',
                bold: '700'
            }
        },
        layout: {
            headerHeight: '52px',
            tabHeight: '82px',
            safeBottom: 'env(safe-area-inset-bottom, 0px)',
            safeTop: 'env(safe-area-inset-top, 0px)'
        },
        shadows: {
            card: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
            float: '0 8px 30px rgba(0,0,0,0.08)'
        },
        radii: {
            sm: '8px',
            md: '12px',
            lg: '16px',
            xl: '20px',
            full: '9999px'
        }
    };

    /* ---------- Apply Theme to CSS Variables ---------- */
    function applyTheme() {
        const root = document.documentElement;

        // Apply colors
        Object.entries(theme.colors).forEach(([key, value]) => {
            root.style.setProperty(`--color-${key}`, value);
        });

        // Apply spacing
        Object.entries(theme.spacing).forEach(([key, value]) => {
            root.style.setProperty(`--sp-${key}`, value);
        });

        // Apply typography
        root.style.setProperty('--font', theme.typography.fontFamily);
        Object.entries(theme.typography.sizes).forEach(([key, value]) => {
            root.style.setProperty(`--text-${key}`, value);
        });
        Object.entries(theme.typography.weights).forEach(([key, value]) => {
            root.style.setProperty(`--weight-${key}`, value);
        });

        // Apply layout
        Object.entries(theme.layout).forEach(([key, value]) => {
            const cssVar = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
            root.style.setProperty(cssVar, value);
        });

        // Apply shadows
        Object.entries(theme.shadows).forEach(([key, value]) => {
            root.style.setProperty(`--shadow-${key}`, value);
        });

        // Apply radii
        Object.entries(theme.radii).forEach(([key, value]) => {
            root.style.setProperty(`--r-${key}`, value);
        });
    }

    /* ---------- Get Theme Value ---------- */
    function get(path) {
        const keys = path.split('.');
        return keys.reduce((obj, key) => obj?.[key], theme);
    }

    /* ---------- Create Theme Variants ---------- */
    function createVariant(name, overrides) {
        const variant = JSON.parse(JSON.stringify(theme));
        
        function deepMerge(target, source) {
            Object.keys(source).forEach(key => {
                if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
                    target[key] = target[key] || {};
                    deepMerge(target[key], source[key]);
                } else {
                    target[key] = source[key];
                }
            });
        }
        
        deepMerge(variant, overrides);
        return variant;
    }

    /* ---------- Dark Theme ---------- */
    const darkTheme = createVariant('dark', {
        colors: {
            background: '#000000',
            surface: '#1C1C1E',
            text: '#FFFFFF',
            secondary: '#8E8E93',
            tertiary: '#48484A',
            separator: 'rgba(84, 84, 88, 0.65)',
            fill: 'rgba(84, 84, 88, 0.32)'
        }
    });

    /* ---------- Initialize Theme ---------- */
    function init() {
        applyTheme();
        
        // Listen for system theme changes
        if (window.matchMedia) {
            const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
            darkModeQuery.addListener((e) => {
                if (e.matches) {
                    applyThemeVariant(darkTheme);
                } else {
                    applyTheme();
                }
            });
        }
    }

    /* ---------- Apply Theme Variant ---------- */
    function applyThemeVariant(variant) {
        const root = document.documentElement;
        
        // Apply variant colors
        Object.entries(variant.colors).forEach(([key, value]) => {
            root.style.setProperty(`--color-${key}`, value);
        });
    }

    /* ---------- Public API ---------- */
    window.Theme = {
        init,
        get,
        createVariant,
        applyTheme,
        applyThemeVariant,
        theme,
        darkTheme
    };

})();
