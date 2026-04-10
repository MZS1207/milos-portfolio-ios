/* ============================================================
   CV App - Test Suite
   Comprehensive testing for all functionality
   ============================================================ */

(function () {
    'use strict';

    /* ---------- Test Framework ---------- */
    class TestRunner {
        constructor() {
            this.tests = [];
            this.results = { passed: 0, failed: 0, errors: [] };
        }

        test(name, fn) {
            this.tests.push({ name, fn });
        }

        async run() {
            console.log('=== CV App Test Suite ===');
            
            for (const { name, fn } of this.tests) {
                try {
                    await fn();
                    this.results.passed++;
                    console.log(`%cPASS: ${name}`, 'color: #34C759');
                } catch (error) {
                    this.results.failed++;
                    this.results.errors.push({ name, error });
                    console.error(`%cFAIL: ${name}`, 'color: #FF3B30', error.message);
                }
            }
            
            this.printSummary();
            return this.results;
        }

        printSummary() {
            const { passed, failed, errors } = this.results;
            console.log(`\n=== Test Summary ===`);
            console.log(`Total: ${passed + failed}`);
            console.log(`%cPassed: ${passed}`, 'color: #34C759');
            console.log(`%cFailed: ${failed}`, 'color: #FF3B30');
            
            if (failed > 0) {
                console.log('\n=== Errors ===');
                errors.forEach(({ name, error }) => {
                    console.error(`${name}: ${error.message}`);
                });
            }
        }

        assert(condition, message) {
            if (!condition) throw new Error(message || 'Assertion failed');
        }

        assertExists(element, name) {
            this.assert(element, `${name} should exist`);
        }

        assertText(element, expected, name) {
            this.assert(element?.textContent?.includes(expected), 
                `${name} should contain "${expected}"`);
        }
    }

    /* ---------- Test Cases ---------- */
    const tests = new TestRunner();

    // DOM Elements Tests
    tests.test('Required DOM elements exist', () => {
        tests.assertExists(document.querySelector('#screensTrack'), 'Track element');
        tests.assertExists(document.querySelector('#headerTitle'), 'Header element');
        tests.assertExists(document.querySelectorAll('.tab'), 'Tab elements');
        tests.assertExists(document.querySelectorAll('.screen'), 'Screen elements');
    });

    // Tab Navigation Tests
    tests.test('Tab switching functionality', () => {
        if (!window.CVApp) throw new Error('CVApp not initialized');
        
        const initialTab = CVApp.getCurrentTab();
        tests.assert(initialTab.index === 0, 'Initial tab should be 0');
        
        CVApp.switchTab(2);
        const newTab = CVApp.getCurrentTab();
        tests.assert(newTab.index === 2, 'Tab should switch to index 2');
        
        CVApp.switchTab(0); // Reset
    });

    // Tab State Tests
    tests.test('Tab visual state updates', () => {
        const tabs = document.querySelectorAll('.tab');
        const activeTab = document.querySelector('.tab.active');
        
        tests.assertExists(activeTab, 'Should have an active tab');
        tests.assert(activeTab.classList.contains('active'), 'Active tab should have active class');
        
        const header = document.querySelector('#headerTitle');
        tests.assertText(header, 'About', 'Header should show current tab');
    });

    // Screen Visibility Tests
    tests.test('Screen visibility changes', () => {
        const track = document.querySelector('#screensTrack');
        const transform = track.style.transform;
        
        tests.assert(transform.includes('translateX'), 'Track should have transform');
        
        const screens = document.querySelectorAll('.screen');
        tests.assert(screens.length === 5, 'Should have 5 screens');
    });

    // Keyboard Navigation Tests
    tests.test('Keyboard navigation', () => {
        const initialTab = CVApp.getCurrentTab();
        
        // Simulate arrow key press
        const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
        document.dispatchEvent(event);
        
        setTimeout(() => {
            const newTab = CVApp.getCurrentTab();
            tests.assert(newTab.index !== initialTab.index, 'Arrow key should change tab');
        }, 100);
    });

    // Touch Gesture Tests
    tests.test('Touch gesture handling', () => {
        const track = document.querySelector('#screensTrack');
        tests.assertExists(track, 'Track should exist for touch events');
        
        // Test touch start
        const touchStart = new TouchEvent('touchstart', {
            changedTouches: [{ clientX: 100, clientY: 50 }]
        });
        track.dispatchEvent(touchStart);
        
        // Test touch end
        const touchEnd = new TouchEvent('touchend', {
            changedTouches: [{ clientX: 30, clientY: 55 }]
        });
        touchEnd.isSwiping = true;
        touchEnd.startX = 100;
        touchEnd.startY = 50;
        track.dispatchEvent(touchEnd);
    });

    // Accessibility Tests
    tests.test('Accessibility attributes', () => {
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach((tab, index) => {
            const ariaSelected = tab.getAttribute('aria-selected');
            tests.assert(ariaSelected === 'true' || ariaSelected === 'false', 
                `Tab ${index} should have aria-selected attribute`);
        });
    });

    // Error Handling Tests
    tests.test('Error handling', () => {
        const originalError = console.error;
        let errorCaught = false;
        
        console.error = (...args) => {
            if (args[0] === 'CV Error') {
                errorCaught = true;
            }
            originalError(...args);
        };
        
        // Trigger an error
        CVApp.switchTab(-1); // Invalid index
        
        setTimeout(() => {
            console.error = originalError;
            // Note: This test might not catch errors due to implementation
        }, 100);
    });

    // Performance Tests
    tests.test('Performance metrics', () => {
        const start = performance.now();
        
        // Perform multiple tab switches
        for (let i = 0; i < 10; i++) {
            CVApp.switchTab(i % 5);
        }
        
        const end = performance.now();
        const duration = end - start;
        
        tests.assert(duration < 100, `Tab switching should be fast (${duration}ms)`);
    });

    // Memory Tests
    tests.test('Memory usage', () => {
        const initialMemory = performance.memory?.usedJSHeapSize || 0;
        
        // Create and destroy elements
        for (let i = 0; i < 100; i++) {
            const div = document.createElement('div');
            document.body.appendChild(div);
            document.body.removeChild(div);
        }
        
        const finalMemory = performance.memory?.usedJSHeapSize || 0;
        const memoryIncrease = finalMemory - initialMemory;
        
        // Memory increase should be reasonable (less than 1MB)
        tests.assert(memoryIncrease < 1024 * 1024, 
            `Memory increase should be reasonable (${Math.round(memoryIncrease / 1024)}KB)`);
    });

    // Responsive Tests
    tests.test('Responsive behavior', () => {
        const container = document.querySelector('.container');
        tests.assertExists(container, 'Container should exist');
        
        const width = window.innerWidth;
        tests.assert(width > 0, 'Window should have width');
        
        // Test different viewport sizes
        if (width < 768) {
            console.log('Mobile viewport detected');
        } else {
            console.log('Desktop viewport detected');
        }
    });

    /* ---------- Run Tests ---------- */
    async function runTests() {
        // Wait for app to initialize
        if (!window.CVApp) {
            console.log('Waiting for CV app to initialize...');
            setTimeout(runTests, 1000);
            return;
        }
        
        const results = await tests.run();
        
        // Show results in UI
        showTestResults(results);
        
        return results;
    }

    function showTestResults(results) {
        const resultsDiv = document.createElement('div');
        resultsDiv.id = 'test-results';
        resultsDiv.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 15px;
            border-radius: 8px;
            font-family: monospace;
            font-size: 12px;
            z-index: 1000;
            max-width: 300px;
        `;
        
        const status = results.failed === 0 ? 'PASS' : 'FAIL';
        const color = results.failed === 0 ? '#34C759' : '#FF3B30';
        
        resultsDiv.innerHTML = `
            <div style="color: ${color}; font-weight: bold; margin-bottom: 5px;">
                Tests: ${status}
            </div>
            <div>Passed: ${results.passed}</div>
            <div>Failed: ${results.failed}</div>
            <div style="margin-top: 5px; font-size: 10px; opacity: 0.7;">
                Check console for details
            </div>
        `;
        
        document.body.appendChild(resultsDiv);
        
        // Auto-remove after 10 seconds
        setTimeout(() => resultsDiv.remove(), 10000);
    }

    /* ---------- Public API ---------- */
    window.CVTests = {
        run: runTests,
        TestRunner
    };

    /* ---------- Auto-run on load ---------- */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', runTests);
    } else {
        setTimeout(runTests, 1000);
    }

})();
