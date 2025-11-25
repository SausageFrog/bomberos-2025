// ============================================
// OPTIMIZED SCRIPT FOR BOMBEROS TEMUCO WEBSITE
// ============================================

// ========== DOM ELEMENTS ==========
const headerSection = document.querySelector('.header-section');
const toggleButton = document.querySelector('.header-menu-toggle');
const navLinks = document.getElementById('main-nav');
const navLinksAll = navLinks?.querySelectorAll('a');

// ========== MOBILE MENU TOGGLE ==========
if (toggleButton && navLinks) {
    toggleButton.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('is-open');
        headerSection.classList.toggle('is-open');
        toggleButton.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking on a link
    navLinksAll?.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('is-open');
            headerSection.classList.remove('is-open');
            toggleButton.setAttribute('aria-expanded', 'false');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!headerSection.contains(e.target) && navLinks.classList.contains('is-open')) {
            navLinks.classList.remove('is-open');
            headerSection.classList.remove('is-open');
            toggleButton.setAttribute('aria-expanded', 'false');
        }
    });
}

// ========== HEADER SCROLL EFFECT ==========
// Header scroll effect - DISABLED (Header is now static)
/*
let lastScroll = 0;

const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    
    // Add/remove scrolled class
    if (currentScroll > 50) {
        headerSection?.classList.add('scrolled');
    } else {
        headerSection?.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
};

// Debounce function for performance
const debounce = (func, wait = 10) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

window.addEventListener('scroll', debounce(handleScroll, 10));
*/

// ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========== SCROLL REVEAL ANIMATIONS ==========
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe sections for scroll reveal
const sections = document.querySelectorAll('section');
sections.forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    section.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(section);
});

// Observe cards for scroll reveal
const cards = document.querySelectorAll('.news-card, .specialties-card, .autorities-card, .material-box');
cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    card.style.transitionDelay = `${(index % 3) * 0.15}s`;
    observer.observe(card);
});

// ========== LAZY LOADING IMAGES ==========
const imageObserverOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.01
};

const imageObserverCallback = (entries, imgObserver) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
            img.classList.add('loaded');
            imgObserver.unobserve(img);
        }
    });
};

const imageObserver = new IntersectionObserver(imageObserverCallback, imageObserverOptions);

// Observe all images with data-src attribute or loading="lazy"
const lazyImages = document.querySelectorAll('img[loading="lazy"], img[data-src]');
lazyImages.forEach(img => {
    imageObserver.observe(img);
});

// ========== INITIALIZE ON DOM LOADED ==========
document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class to body
    document.body.classList.add('loaded');

    // Initial scroll check
    handleScroll();

    console.log('🚒 Bomberos Temuco Website Loaded Successfully');
});

// ========== PAGE VISIBILITY OPTIMIZATION ==========
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when tab is not visible
        document.body.style.animationPlayState = 'paused';
    } else {
        document.body.style.animationPlayState = 'running';
    }
});