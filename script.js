document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Reveal on Scroll Animation
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });


    // 2. FAQ Accordion Logic
    const accordions = document.querySelectorAll('.accordion-item');

    accordions.forEach(acc => {
        const header = acc.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            // Close others
            accordions.forEach(otherAcc => {
                if (otherAcc !== acc) {
                    otherAcc.classList.remove('active');
                }
            });

            // Toggle current
            acc.classList.toggle('active');
        });
    });

    // 3. Header Sticky Logic
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 4. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav a');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
            // Animate hamburger icon
            const spans = menuToggle.querySelectorAll('span');
            if (mobileNav.classList.contains('open')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -8px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('open');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

});
