/**
 * ==========================================================================
 * ROHIT NAIK PORTFOLIO - JAVASCRIPT
 * Theme Toggle, Dynamic Greeting, Daily Color Themes, and Interactivity
 * ==========================================================================
 */

(function() {
    'use strict';

    // ==========================================================================
    // CONSTANTS
    // ==========================================================================
    
    const STORAGE_KEY = 'portfolio-theme';
    const THEME_DARK = 'dark';
    const THEME_LIGHT = 'light';
    
    // Day names for daily color themes
    const DAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    
    // Theme names for each day (for display/debugging)
    const THEME_NAMES = {
        sunday: 'LinkedIn Premium (Purple & Gold)',
        monday: 'Tech Minimalist (Slate & Indigo)',
        tuesday: 'Premium Mono (Black & Gold)',
        wednesday: 'Modern Nature (Emerald & Sage)',
        thursday: 'Cyberpunk Soft (Violet & Cyan)',
        friday: 'Corporate Trust (Blue & Grey)',
        saturday: 'Warm Contrast (Sand & Charcoal)'
    };

    // ==========================================================================
    // DOM ELEMENTS
    // ==========================================================================
    
    const themeToggle = document.getElementById('themeToggle');
    const greetingElement = document.getElementById('greeting');

    // ==========================================================================
    // DAY-BASED THEME MANAGEMENT
    // ==========================================================================

    /**
     * Get current day of the week
     * @returns {string} - Day name (lowercase)
     */
    function getCurrentDay() {
        const dayIndex = new Date().getDay();
        return DAYS[dayIndex];
    }

    /**
     * Apply day-based color theme
     */
    function applyDayTheme() {
        const currentDay = getCurrentDay();
        document.documentElement.setAttribute('data-day', currentDay);
        console.log(`🎨 Today's theme: ${THEME_NAMES[currentDay]}`);
    }

    // ==========================================================================
    // LIGHT/DARK THEME MANAGEMENT
    // ==========================================================================

    /**
     * Get the user's preferred theme
     * Priority: localStorage > system preference > default (light)
     */
    function getPreferredTheme() {
        // Check localStorage first
        const storedTheme = localStorage.getItem(STORAGE_KEY);
        if (storedTheme) {
            return storedTheme;
        }

        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return THEME_DARK;
        }

        // Default to light theme
        return THEME_LIGHT;
    }

    /**
     * Apply theme to the document
     * @param {string} theme - 'dark' or 'light'
     */
    function applyTheme(theme) {
        if (theme === THEME_DARK) {
            document.documentElement.setAttribute('data-theme', THEME_DARK);
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }

    /**
     * Save theme preference to localStorage
     * @param {string} theme - 'dark' or 'light'
     */
    function saveThemePreference(theme) {
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch (e) {
            // localStorage might be unavailable (private browsing, etc.)
            console.warn('Could not save theme preference:', e);
        }
    }

    /**
     * Get current theme
     * @returns {string} - 'dark' or 'light'
     */
    function getCurrentTheme() {
        return document.documentElement.getAttribute('data-theme') === THEME_DARK 
            ? THEME_DARK 
            : THEME_LIGHT;
    }

    /**
     * Toggle between dark and light themes
     */
    function toggleTheme() {
        const currentTheme = getCurrentTheme();
        const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
        
        // Add animation class
        themeToggle.classList.add('switching');
        
        // Apply new theme
        applyTheme(newTheme);
        saveThemePreference(newTheme);
        
        // Remove animation class after animation completes
        setTimeout(() => {
            themeToggle.classList.remove('switching');
        }, 300);
    }

    /**
     * Initialize theme on page load
     */
    function initializeTheme() {
        // First apply day-based color theme
        applyDayTheme();
        
        // Then apply light/dark theme preference
        const preferredTheme = getPreferredTheme();
        applyTheme(preferredTheme);
    }

    /**
     * Listen for system theme changes
     */
    function watchSystemTheme() {
        if (window.matchMedia) {
            const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
            
            darkModeQuery.addEventListener('change', (e) => {
                // Only auto-switch if user hasn't manually set a preference
                const storedTheme = localStorage.getItem(STORAGE_KEY);
                if (!storedTheme) {
                    applyTheme(e.matches ? THEME_DARK : THEME_LIGHT);
                }
            });
        }
    }

    // ==========================================================================
    // DYNAMIC GREETING
    // ==========================================================================

    /**
     * Get greeting based on current time of day
     * @returns {string} - Greeting message with emoji
     */
    function getGreetingMessage() {
        const hour = new Date().getHours();
        
        // Time-based greetings
        if (hour >= 5 && hour < 12) {
            return 'Good Morning! ☀️';
        } else if (hour >= 12 && hour < 17) {
            return 'Good Afternoon! 🌤️';
        } else if (hour >= 17 && hour < 21) {
            return 'Good Evening! 🌅';
        } else {
            return 'Good Night! 🌙';
        }
    }

    /**
     * Update greeting element with current greeting
     */
    function updateGreeting() {
        if (greetingElement) {
            greetingElement.textContent = getGreetingMessage();
        }
    }

    /**
     * Initialize greeting and set up periodic updates
     */
    function initializeGreeting() {
        // Initial update
        updateGreeting();
        
        // Update every minute to catch time changes
        setInterval(updateGreeting, 60000);
    }

    // ==========================================================================
    // MICRO-INTERACTIONS
    // ==========================================================================

    /**
     * Add ripple effect to buttons
     */
    function initializeRippleEffect() {
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                // Create ripple element
                const ripple = document.createElement('span');
                ripple.classList.add('ripple');
                
                // Position ripple at click location
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                
                // Add ripple to button
                this.appendChild(ripple);
                
                // Remove ripple after animation
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }

    /**
     * Add hover sound effect (optional - commented out by default)
     * Uncomment to enable subtle hover sounds
     */
    // function initializeHoverSounds() {
    //     const interactiveElements = document.querySelectorAll('.btn, .social-icon, .theme-toggle');
    //     
    //     const hoverSound = new Audio('data:audio/wav;base64,...'); // Add sound data
    //     hoverSound.volume = 0.1;
    //     
    //     interactiveElements.forEach(element => {
    //         element.addEventListener('mouseenter', () => {
    //             hoverSound.currentTime = 0;
    //             hoverSound.play().catch(() => {});
    //         });
    //     });
    // }

    /**
     * Smooth scroll behavior for anchor links
     */
    function initializeSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // ==========================================================================
    // ANALYTICS TRACKING (Optional)
    // ==========================================================================

    /**
     * Track link clicks (customize for your analytics platform)
     */
    function initializeLinkTracking() {
        const socialLinks = document.querySelectorAll('.social-icon, .btn, .email-link');
        
        socialLinks.forEach(link => {
            link.addEventListener('click', function() {
                const label = this.getAttribute('aria-label') || this.textContent.trim();
                
                // Google Analytics 4 (if gtag is available)
                if (typeof gtag === 'function') {
                    gtag('event', 'click', {
                        'event_category': 'outbound',
                        'event_label': label,
                        'transport_type': 'beacon'
                    });
                }
                
                // Console log for debugging
                console.log('Link clicked:', label);
            });
        });
    }

    // ==========================================================================
    // KEYBOARD NAVIGATION
    // ==========================================================================

    /**
     * Enhanced keyboard support
     */
    function initializeKeyboardNavigation() {
        // Theme toggle with keyboard shortcut (Alt + T)
        document.addEventListener('keydown', (e) => {
            if (e.altKey && e.key.toLowerCase() === 't') {
                e.preventDefault();
                toggleTheme();
            }
        });

        // Social icons navigation with arrow keys when focused
        const socialIcons = document.querySelectorAll('.social-icon');
        socialIcons.forEach((icon, index) => {
            icon.addEventListener('keydown', (e) => {
                let newIndex;
                
                if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                    e.preventDefault();
                    newIndex = (index + 1) % socialIcons.length;
                    socialIcons[newIndex].focus();
                } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                    e.preventDefault();
                    newIndex = (index - 1 + socialIcons.length) % socialIcons.length;
                    socialIcons[newIndex].focus();
                }
            });
        });
    }

    // ==========================================================================
    // PERFORMANCE OPTIMIZATION
    // ==========================================================================

    /**
     * Lazy load images (for future use with additional images)
     */
    function initializeLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            imageObserver.unobserve(img);
                        }
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // ==========================================================================
    // ERROR HANDLING
    // ==========================================================================

    /**
     * Handle broken profile image
     */
    function initializeImageFallback() {
        const profileImage = document.querySelector('.profile-image');
        
        if (profileImage) {
            profileImage.addEventListener('error', function() {
                // Fallback to a placeholder avatar
                this.src = 'data:image/svg+xml,' + encodeURIComponent(`
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150">
                        <rect fill="#e5e7eb" width="150" height="150"/>
                        <circle cx="75" cy="55" r="30" fill="#9ca3af"/>
                        <ellipse cx="75" cy="130" rx="45" ry="35" fill="#9ca3af"/>
                    </svg>
                `);
            });
        }
    }

    // ==========================================================================
    // INITIALIZATION
    // ==========================================================================

    /**
     * Main initialization function
     * Called when DOM is ready
     */
    function init() {
        // Theme
        initializeTheme();
        watchSystemTheme();
        
        // Greeting
        initializeGreeting();
        
        // Interactions
        initializeRippleEffect();
        initializeSmoothScroll();
        initializeKeyboardNavigation();
        
        // Error handling
        initializeImageFallback();
        
        // Optional features (uncomment to enable)
        // initializeLinkTracking();
        // initializeLazyLoading();
        
        console.log('🚀 Portfolio initialized successfully!');
    }

    // ==========================================================================
    // EVENT LISTENERS
    // ==========================================================================

    // Theme toggle click handler
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // ==========================================================================
    // EXPOSE API (Optional - for external access)
    // ==========================================================================

    // Preview mode - current day index for cycling
    let previewDayIndex = new Date().getDay();
    let isPreviewMode = false;

    /**
     * Preview a specific day's theme
     * @param {number} dayIndex - 0 (Sunday) to 6 (Saturday)
     */
    function previewDay(dayIndex) {
        if (dayIndex >= 0 && dayIndex < 7) {
            document.documentElement.setAttribute('data-day', DAYS[dayIndex]);
            console.log(`👁️ Previewing: ${DAYS[dayIndex].charAt(0).toUpperCase() + DAYS[dayIndex].slice(1)} - ${THEME_NAMES[DAYS[dayIndex]]}`);
        }
    }

    /**
     * Cycle to next day theme (for preview)
     */
    function nextDayTheme() {
        isPreviewMode = true;
        previewDayIndex = (previewDayIndex + 1) % 7;
        previewDay(previewDayIndex);
        showThemeNotification(DAYS[previewDayIndex]);
    }

    /**
     * Cycle to previous day theme (for preview)
     */
    function prevDayTheme() {
        isPreviewMode = true;
        previewDayIndex = (previewDayIndex - 1 + 7) % 7;
        previewDay(previewDayIndex);
        showThemeNotification(DAYS[previewDayIndex]);
    }

    /**
     * Reset to current day's theme
     */
    function resetToToday() {
        isPreviewMode = false;
        previewDayIndex = new Date().getDay();
        applyDayTheme();
        showThemeNotification(DAYS[previewDayIndex], true);
    }

    /**
     * Show theme notification
     */
    function showThemeNotification(day, isReset = false) {
        // Remove existing notification
        const existing = document.querySelector('.theme-notification');
        if (existing) existing.remove();

        // Create notification
        const notification = document.createElement('div');
        notification.className = 'theme-notification';
        notification.innerHTML = `
            <div style="
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: var(--btn-primary-bg);
                color: var(--btn-primary-text);
                padding: 12px 24px;
                border-radius: 50px;
                font-weight: 600;
                font-size: 14px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.3);
                z-index: 9999;
                animation: slideUp 0.3s ease;
            ">
                ${isReset ? '🔄 Reset: ' : '🎨 '}${day.charAt(0).toUpperCase() + day.slice(1)} - ${THEME_NAMES[day]}
            </div>
        `;
        document.body.appendChild(notification);

        // Remove after 2 seconds
        setTimeout(() => notification.remove(), 2000);
    }

    // Add keyboard shortcuts for preview
    document.addEventListener('keydown', (e) => {
        // Alt + Arrow Right = Next day theme
        if (e.altKey && e.key === 'ArrowRight') {
            e.preventDefault();
            nextDayTheme();
        }
        // Alt + Arrow Left = Previous day theme
        if (e.altKey && e.key === 'ArrowLeft') {
            e.preventDefault();
            prevDayTheme();
        }
        // Alt + R = Reset to today
        if (e.altKey && e.key === 'r') {
            e.preventDefault();
            resetToToday();
        }
    });

    // Add CSS animation for notification
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideUp {
            from { opacity: 0; transform: translateX(-50%) translateY(20px); }
            to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
    `;
    document.head.appendChild(style);

    window.Portfolio = {
        toggleTheme,
        getCurrentTheme,
        getGreetingMessage,
        // Preview functions
        previewDay,
        nextDayTheme,
        prevDayTheme,
        resetToToday,
        // Get all themes info
        getThemes: () => THEME_NAMES,
        getDays: () => DAYS
    };

    // Log available keyboard shortcuts
    console.log('⌨️ Theme Preview Shortcuts:');
    console.log('   Alt + → : Next day theme');
    console.log('   Alt + ← : Previous day theme');
    console.log('   Alt + R : Reset to today');
    console.log('   Alt + T : Toggle dark/light mode');

})();
