// iOS Portfolio Interactive JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations and interactions
    initScrollAnimations();
    initFormHandling();
    initSmoothScrolling();
    initParallaxEffect();
    initTypingEffect();
});

// Scroll animations for sections
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loading');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // Observe project cards
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe skill categories
    document.querySelectorAll('.skill-category').forEach((category, index) => {
        category.style.animationDelay = `${index * 0.15}s`;
        observer.observe(category);
    });
}

// Form handling
function initFormHandling() {
    const form = document.querySelector('.contact-form form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                form.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        color: white;
        font-weight: 500;
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        max-width: 300px;
    `;
    
    // Set background color based on type
    if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #34C759, #30D158)';
    } else if (type === 'error') {
        notification.style.background = 'linear-gradient(135deg, #FF3B30, #FF453A)';
    } else {
        notification.style.background = 'linear-gradient(135deg, #007AFF, #5856D6)';
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Parallax effect for hero section
function initParallaxEffect() {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            
            heroBackground.style.transform = `translateY(${parallax}px)`;
            
            // Fade out hero section
            const heroSection = document.querySelector('.hero');
            if (heroSection) {
                const opacity = Math.max(0, 1 - scrolled / 600);
                heroSection.style.opacity = opacity;
            }
        });
    }
}

// Typing effect for hero title
function initTypingEffect() {
    const title = document.querySelector('.profile-card h1');
    if (title) {
        const originalText = title.textContent;
        title.textContent = '';
        title.style.borderRight = '3px solid #007AFF';
        
        let charIndex = 0;
        const typeSpeed = 100;
        
        function typeChar() {
            if (charIndex < originalText.length) {
                title.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, typeSpeed);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    title.style.borderRight = 'none';
                }, 1000);
            }
        }
        
        // Start typing after page load
        setTimeout(typeChar, 500);
    }
}

// Add hover effects to project cards
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add interactive skill tags
document.addEventListener('DOMContentLoaded', function() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 600);
        });
    });
    
    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Timeline animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('timeline-animate');
                }, index * 200);
                timelineObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
    
    // Add timeline animation styles
    const timelineStyle = document.createElement('style');
    timelineStyle.textContent = `
        .timeline-item {
            opacity: 0;
            transform: translateY(30px);
        }
        
        .timeline-item.timeline-animate {
            opacity: 1;
            transform: translateY(0);
            transition: all 0.6s ease-out;
        }
    `;
    document.head.appendChild(timelineStyle);
});

// Mobile menu toggle (if needed for future navigation)
document.addEventListener('DOMContentLoaded', function() {
    // Check if we need a mobile menu
    if (window.innerWidth <= 768) {
        // Add mobile navigation if needed in the future
        console.log('Mobile view detected');
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(() => {
    // Add any scroll-based optimizations here
}, 100));

// Add loading complete indicator
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add loading complete styles
    const loadingStyle = document.createElement('style');
    loadingStyle.textContent = `
        body.loaded .profile-card {
            animation: slideUp 0.8s ease-out forwards;
        }
    `;
    document.head.appendChild(loadingStyle);
});

// Console Easter egg
console.log('%c Milo Stevanoviç - iOS Developer Portfolio ', 'background: linear-gradient(135deg, #007AFF, #5856D6); color: white; font-size: 16px; padding: 10px; border-radius: 8px;');
