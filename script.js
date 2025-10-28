// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    const navLinks = document.querySelectorAll('.nav-link, .btn');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
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

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-content');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            hero.style.opacity = 1 - scrolled / 800;
        }
    });

    // Add hover effect to cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for fade-in effect
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Dynamic typing effect for hero title
    const heroTitle = document.querySelector('.hero h2');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        let charIndex = 0;

        function typeWriter() {
            if (charIndex < originalText.length) {
                heroTitle.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 100);
            }
        }

        setTimeout(typeWriter, 500);
    }

    // Copy contract address functionality (placeholder)
    const tokenLinks = document.querySelectorAll('.token-link');
    tokenLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.pointerEvents = 'none';
            ripple.style.animation = 'ripple 0.6s ease-out';

            const rect = this.getBoundingClientRect();
            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                width: 200px;
                height: 200px;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Mobile menu toggle (if needed in future)
    function createMobileMenu() {
        const header = document.querySelector('.header .container');
        const nav = document.querySelector('.nav');

        if (window.innerWidth <= 768) {
            if (!document.querySelector('.mobile-menu-toggle')) {
                const menuToggle = document.createElement('div');
                menuToggle.className = 'mobile-menu-toggle';
                menuToggle.innerHTML = '☰';
                menuToggle.style.cssText = `
                    display: block;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: #00ff88;
                    padding: 10px;
                `;

                menuToggle.addEventListener('click', () => {
                    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
                    nav.style.position = 'absolute';
                    nav.style.top = '100%';
                    nav.style.left = '0';
                    nav.style.right = '0';
                    nav.style.background = 'rgba(10, 10, 10, 0.95)';
                    nav.style.flexDirection = 'column';
                    nav.style.padding = '20px';
                    nav.style.borderTop = '1px solid rgba(255, 255, 255, 0.1)';
                });

                header.insertBefore(menuToggle, nav);

                // Hide nav initially on mobile
                if (window.innerWidth <= 768) {
                    nav.style.display = 'none';
                }
            }
        } else {
            const menuToggle = document.querySelector('.mobile-menu-toggle');
            if (menuToggle) {
                menuToggle.remove();
            }
            nav.style.display = 'flex';
            nav.style.position = 'static';
            nav.style.background = 'transparent';
            nav.style.flexDirection = 'row';
            nav.style.padding = '0';
            nav.style.border = 'none';
        }
    }

    // Initialize mobile menu and handle resize
    createMobileMenu();
    window.addEventListener('resize', createMobileMenu);

    // Console Easter egg
    console.log('%c🐌 SNAILS - Watch Ferret Farm Live 🐌', 'font-size: 20px; color: #00ff88; font-weight: bold;');
    console.log('%cJoin the revolution! 🚀', 'font-size: 14px; color: #ff6b35;');
});