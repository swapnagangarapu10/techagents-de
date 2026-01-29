// ===================================
// Language Switcher
// ===================================
let currentLang = localStorage.getItem('language') || 'de';

// Translation mapping for elements
const translationMap = {
    // Hero Section
    '.hero-title': (lang) => {
        const title1 = translations[lang]['hero-title-1'];
        const title2 = translations[lang]['hero-title-2'];
        return `${title1} <span class="gradient-text">${title2}</span>`;
    },
    '.hero-subtitle': 'hero-subtitle',
    '.hero-cta .btn-primary': 'hero-cta-1',
    '.hero-cta .btn-secondary': 'hero-cta-2',

    // Problem/Solution
    '.problem-solution .section-title': 'challenge-title',
    '.problem-card h3': 'problem-title',
    '.problem-card p': 'problem-text',
    '.solution-card h3': 'solution-title',
    '.solution-card p': 'solution-text',

    // Services
    '.services .section-title': 'services-title',
    '.services .section-subtitle': 'services-subtitle',

    // Video Showcase
    '.video-showcase .section-title': 'showcase-title',
    '.video-showcase .section-subtitle': 'showcase-subtitle',

    // Benefits
    '.benefits .section-title': 'benefits-title',
    '.benefits .section-subtitle': 'benefits-subtitle',

    // Contact
    '.contact .section-title': 'contact-title',
    '.contact-description': 'contact-desc',
    '.contact-item h4:first-of-type': 'contact-email-label',
    '.contact-item:last-child h4': 'contact-location-label',
    '.contact-item:last-child p': 'contact-location-value',

    // Footer
    '.footer-brand p': 'footer-tagline',
    '.social-heading': 'footer-social-heading'
};

function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    // Update language toggle buttons
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.toggle('active', option.dataset.lang === lang);
    });

    // Update navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.dataset[lang]) {
            link.textContent = link.dataset[lang];
        }
    });

    // Update CTA button in nav
    const navCta = document.querySelector('.nav-links .btn-primary');
    if (navCta && navCta.dataset[lang]) {
        navCta.textContent = navCta.dataset[lang];
    }

    // Update hero section
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = translationMap['.hero-title'](lang);
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = translations[lang]['hero-subtitle'];
    }

    const heroCta1 = document.querySelector('.hero-cta .btn-primary');
    const heroCta2 = document.querySelector('.hero-cta .btn-secondary');
    if (heroCta1) heroCta1.textContent = translations[lang]['hero-cta-1'];
    if (heroCta2) heroCta2.textContent = translations[lang]['hero-cta-2'];

    // Update problem/solution section
    const challengeTitle = document.querySelector('.problem-solution .section-title');
    if (challengeTitle) challengeTitle.textContent = translations[lang]['challenge-title'];

    const problemTitle = document.querySelector('.problem-card h3');
    const problemText = document.querySelector('.problem-card p');
    if (problemTitle) problemTitle.textContent = translations[lang]['problem-title'];
    if (problemText) problemText.textContent = translations[lang]['problem-text'];

    const solutionTitle = document.querySelector('.solution-card h3');
    const solutionText = document.querySelector('.solution-card p');
    if (solutionTitle) solutionTitle.textContent = translations[lang]['solution-title'];
    if (solutionText) solutionText.textContent = translations[lang]['solution-text'];

    // Update services section
    const servicesTitle = document.querySelector('.services .section-title');
    const servicesSubtitle = document.querySelector('.services .section-subtitle');
    if (servicesTitle) servicesTitle.textContent = translations[lang]['services-title'];
    if (servicesSubtitle) servicesSubtitle.textContent = translations[lang]['services-subtitle'];

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        const title = card.querySelector('.service-title');
        const desc = card.querySelector('.service-description');
        if (title) title.textContent = translations[lang][`service-${index + 1}-title`];
        if (desc) desc.textContent = translations[lang][`service-${index + 1}-desc`];
    });

    // Update video showcase section
    const showcaseTitle = document.querySelector('.video-showcase .section-title');
    const showcaseSubtitle = document.querySelector('.video-showcase .section-subtitle');
    if (showcaseTitle) showcaseTitle.textContent = translations[lang]['showcase-title'];
    if (showcaseSubtitle) showcaseSubtitle.textContent = translations[lang]['showcase-subtitle'];

    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach((card, index) => {
        const title = card.querySelector('.video-overlay h3');
        const desc = card.querySelector('.video-overlay p');
        if (title) title.textContent = translations[lang][`video-${index + 1}-title`];
        if (desc) desc.textContent = translations[lang][`video-${index + 1}-desc`];
    });

    // Update benefits section
    const benefitsTitle = document.querySelector('.benefits .section-title');
    const benefitsSubtitle = document.querySelector('.benefits .section-subtitle');
    if (benefitsTitle) benefitsTitle.textContent = translations[lang]['benefits-title'];
    if (benefitsSubtitle) benefitsSubtitle.textContent = translations[lang]['benefits-subtitle'];

    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach((card, index) => {
        const title = card.querySelector('h3');
        const desc = card.querySelector('p');
        if (title) title.textContent = translations[lang][`benefit-${index + 1}-title`];
        if (desc) desc.textContent = translations[lang][`benefit-${index + 1}-desc`];
    });

    // Update contact section
    const contactTitle = document.querySelector('.contact .section-title');
    const contactDesc = document.querySelector('.contact-description');
    if (contactTitle) contactTitle.textContent = translations[lang]['contact-title'];
    if (contactDesc) contactDesc.textContent = translations[lang]['contact-desc'];

    const contactItems = document.querySelectorAll('.contact-item');
    if (contactItems[0]) {
        const emailLabel = contactItems[0].querySelector('h4');
        if (emailLabel) emailLabel.textContent = translations[lang]['contact-email-label'];
    }
    if (contactItems[1]) {
        const locationLabel = contactItems[1].querySelector('h4');
        const locationValue = contactItems[1].querySelector('p');
        if (locationLabel) locationLabel.textContent = translations[lang]['contact-location-label'];
        if (locationValue) locationValue.textContent = translations[lang]['contact-location-value'];
    }

    // Update form labels
    const formLabels = {
        'name': 'form-name',
        'email': 'form-email',
        'company': 'form-company',
        'message': 'form-message'
    };

    Object.keys(formLabels).forEach(id => {
        const label = document.querySelector(`label[for="${id}"]`);
        if (label) label.textContent = translations[lang][formLabels[id]];
    });

    const submitBtn = document.querySelector('.contact-form button[type="submit"]');
    if (submitBtn) submitBtn.textContent = translations[lang]['form-submit'];

    // Update footer
    const footerTagline = document.querySelector('.footer-brand p');
    if (footerTagline) footerTagline.textContent = translations[lang]['footer-tagline'];

    const socialHeading = document.querySelector('.social-heading');
    if (socialHeading) socialHeading.textContent = translations[lang]['footer-social-heading'];

    const footerColumns = document.querySelectorAll('.footer-column');
    if (footerColumns[0]) {
        const servicesHeader = footerColumns[0].querySelector('h4');
        if (servicesHeader) servicesHeader.textContent = translations[lang]['footer-services'];

        const serviceLinks = footerColumns[0].querySelectorAll('a');
        serviceLinks[0].textContent = translations[lang]['service-1-title'];
        serviceLinks[1].textContent = translations[lang]['service-2-title'];
        serviceLinks[2].textContent = translations[lang]['service-3-title'];
    }

    if (footerColumns[1]) {
        const companyHeader = footerColumns[1].querySelector('h4');
        if (companyHeader) companyHeader.textContent = translations[lang]['footer-company'];

        const companyLinks = footerColumns[1].querySelectorAll('a');
        if (companyLinks[0]) companyLinks[0].textContent = translations[lang]['footer-about'];
        if (companyLinks[1]) companyLinks[1].textContent = translations[lang]['nav-benefits'];
        if (companyLinks[2]) companyLinks[2].textContent = translations[lang]['nav-contact'];
    }

    if (footerColumns[2]) {
        const trustedByHeader = footerColumns[2].querySelector('h4');
        if (trustedByHeader) trustedByHeader.textContent = translations[lang]['footer-trusted-by'];

        const trustedByLinks = footerColumns[2].querySelectorAll('a');
        if (trustedByLinks[0]) trustedByLinks[0].textContent = translations[lang]['footer-customers'];
        if (trustedByLinks[1]) trustedByLinks[1].textContent = translations[lang]['footer-partners'];
    }

    const footerRights = document.querySelector('.footer-bottom p');
    if (footerRights) {
        const year = new Date().getFullYear();
        footerRights.textContent = `© ${year} TechAgents. ${translations[lang]['footer-rights']}`;
    }

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Language toggle event listener
const languageToggle = document.getElementById('languageToggle');
if (languageToggle) {
    languageToggle.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'de' : 'en';
        switchLanguage(newLang);
    });
}

// Initialize with saved language or default
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage(currentLang);
});

// ===================================
// Navigation & Mobile Menu
// ===================================
const navbar = document.getElementById('navbar');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// ===================================
// Smooth Scroll
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
const animatedElements = document.querySelectorAll(
    '.service-card, .benefit-card, .problem-card, .solution-card'
);

animatedElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
});

// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Here you would typically send the data to a server
    console.log('Form submitted:', data);

    // Show success message in current language
    alert(translations[currentLang]['form-success']);

    // Reset form
    contactForm.reset();
});

// Form input animations
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', function () {
        this.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', function () {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});

// ===================================
// Parallax Effect for Hero
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');

    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===================================
// Add hover effect to cards
// ===================================
const cards = document.querySelectorAll('.service-card, .benefit-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===================================
// Dynamic year in footer
// ===================================
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    footerYear.textContent = `© ${currentYear} TechAgents. All rights reserved.`;
}

// ===================================
// Preloader (optional)
// ===================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===================================
// Add active state to nav links based on scroll position
// ===================================
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active');
        } else if (navLink) {
            navLink.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ===================================
// Console message
// ===================================
console.log('%c🚀 TechAgents.de', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cCrafting the Future of Intelligence', 'font-size: 14px; color: #8b5cf6;');

// ===================================
// Video Carousel Controls
// ===================================
document.addEventListener('DOMContentLoaded', function () {
    const carouselTrack = document.querySelector('.video-carousel-track');
    const videoCards = document.querySelectorAll('.video-card');
    const videos = document.querySelectorAll('.showcase-video');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const dotsContainer = document.getElementById('carouselDots');

    if (!carouselTrack || videoCards.length === 0) return;

    let currentIndex = 0;
    let autoRotateInterval;
    const totalVideos = videoCards.length;
    const visibleCards = window.innerWidth > 1024 ? 3 : (window.innerWidth > 768 ? 2 : 1);
    const maxIndex = Math.max(0, totalVideos - visibleCards);

    // Create pagination dots
    function createDots() {
        dotsContainer.innerHTML = '';
        for (let i = 0; i <= maxIndex; i++) {
            const dot = document.createElement('button');
            dot.classList.add('carousel-dot');
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    // Update carousel position
    function updateCarousel() {
        const cardWidth = videoCards[0].offsetWidth;
        const gap = parseFloat(getComputedStyle(carouselTrack).gap) || 24;
        const offset = -(currentIndex * (cardWidth + gap));
        carouselTrack.style.transform = `translateX(${offset}px)`;

        // Update dots
        document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });

        // Pause all videos
        videos.forEach(v => v.pause());
    }

    // Go to specific slide
    function goToSlide(index) {
        currentIndex = Math.max(0, Math.min(index, maxIndex));
        updateCarousel();
        resetAutoRotate();
    }

    // Next slide
    function nextSlide() {
        currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
        updateCarousel();
    }

    // Previous slide
    function prevSlide() {
        currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
        updateCarousel();
    }

    // Auto-rotate carousel
    function startAutoRotate() {
        autoRotateInterval = setInterval(() => {
            nextSlide();
        }, 4000); // Rotate every 4 seconds
    }

    function stopAutoRotate() {
        if (autoRotateInterval) {
            clearInterval(autoRotateInterval);
        }
    }

    function resetAutoRotate() {
        stopAutoRotate();
        startAutoRotate();
    }

    // Event listeners for navigation buttons
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            prevSlide();
            resetAutoRotate();
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            nextSlide();
            resetAutoRotate();
        });
    }

    // Play video on hover (desktop) or tap (mobile)
    videoCards.forEach((card, index) => {
        const video = card.querySelector('.showcase-video');

        // Desktop: hover to play
        card.addEventListener('mouseenter', () => {
            if (video && window.innerWidth > 768) {
                video.play().catch(err => console.log('Video play failed:', err));
            }
        });

        card.addEventListener('mouseleave', () => {
            if (video && window.innerWidth > 768) {
                video.pause();
            }
        });

        // Mobile: tap to play/pause
        card.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                if (video.paused) {
                    videos.forEach(v => v.pause());
                    video.play().catch(err => console.log('Video play failed:', err));
                } else {
                    video.pause();
                }
            }
        });

        // Accessibility
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `Video ${index + 1}: ${card.querySelector('.video-overlay h3').textContent}`);
    });

    // Pause auto-rotate when user hovers over carousel
    const carouselWrapper = document.querySelector('.video-carousel-wrapper');
    if (carouselWrapper) {
        carouselWrapper.addEventListener('mouseenter', stopAutoRotate);
        carouselWrapper.addEventListener('mouseleave', startAutoRotate);
    }

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const newVisibleCards = window.innerWidth > 1024 ? 3 : (window.innerWidth > 768 ? 2 : 1);
            if (newVisibleCards !== visibleCards) {
                location.reload(); // Reload to recalculate
            } else {
                updateCarousel();
            }
        }, 250);
    });

    // Initialize
    createDots();
    updateCarousel();
    startAutoRotate();
});
