// Custom script for Kartik Halkunde portfolio
// MDL component upgrade is handled by material.min.js automatically

document.addEventListener('DOMContentLoaded', () => {
    const navItems = Array.from(document.querySelectorAll('.section-nav-item'));
    if (!navItems.length) return;

    const sections = navItems
        .map(item => {
            const id = item.getAttribute('data-section');
            return document.getElementById(id);
        })
        .filter(Boolean);

    let activeIndex = 0;
    let isManualScrolling = false;
    let manualScrollTimer = null;

    function updateActiveState(index) {
        if (index < 0 || index >= navItems.length) return;
        activeIndex = index;

        navItems.forEach((item, i) => {
            const dist = Math.abs(i - activeIndex);
            if (dist === 0) {
                item.classList.add('active');
                item.setAttribute('aria-current', 'true');
                item.removeAttribute('data-distance');
            } else {
                item.classList.remove('active');
                item.removeAttribute('aria-current');
                item.setAttribute('data-distance', Math.min(dist, 3).toString());
            }
        });
    }

    // Initialize with first item or hash
    const initialHash = window.location.hash ? window.location.hash.slice(1) : null;
    let initialIndex = 0;
    if (initialHash) {
        const found = navItems.findIndex(item => item.getAttribute('data-section') === initialHash);
        if (found !== -1) initialIndex = found;
    }
    updateActiveState(initialIndex);

    // Click & keyboard interaction
    navItems.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = item.getAttribute('data-section');
            const targetEl = document.getElementById(sectionId);
            if (!targetEl) return;

            updateActiveState(index);

            // Block observer temporarily during smooth scroll
            isManualScrolling = true;
            clearTimeout(manualScrollTimer);
            manualScrollTimer = setTimeout(() => {
                isManualScrolling = false;
            }, 850);

            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            targetEl.scrollIntoView({
                behavior: prefersReducedMotion ? 'auto' : 'smooth',
                block: 'start'
            });

            if (window.history && window.history.pushState) {
                window.history.pushState(null, '', '#' + sectionId);
            }
        });

        item.addEventListener('keydown', (e) => {
            if (e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault();
                item.click();
            }
        });
    });

    // Determine active section based on current viewport position
    function determineActiveSection() {
        if (isManualScrolling) return;

        // Edge case: top of the page
        if (window.scrollY < 80) {
            updateActiveState(0);
            return;
        }

        // Edge case: bottom of the page
        const scrollBottom = window.innerHeight + window.scrollY;
        const pageBottom = document.documentElement.scrollHeight;
        if (scrollBottom >= pageBottom - 40) {
            // Achievements is the bottom-most section in main
            const achievementsIndex = navItems.findIndex(item => item.getAttribute('data-section') === 'achievements');
            updateActiveState(achievementsIndex !== -1 ? achievementsIndex : navItems.length - 1);
            return;
        }

        // Choose the section closest to the reader focus line (35% down from viewport top)
        const focusLine = window.innerHeight * 0.35;
        let bestIndex = -1;
        let minDistance = Infinity;

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            // Check if section is visible in the viewport
            if (rect.bottom > 60 && rect.top < window.innerHeight - 60) {
                const dist = Math.abs(rect.top - focusLine);
                if (dist < minDistance) {
                    minDistance = dist;
                    bestIndex = navItems.findIndex(item => item.getAttribute('data-section') === section.id);
                }
            }
        });

        if (bestIndex !== -1) {
            updateActiveState(bestIndex);
        }
    }

    // IntersectionObserver to observe sections
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '-15% 0px -55% 0px',
            threshold: [0, 0.25, 0.5, 0.75, 1]
        };

        const observer = new IntersectionObserver(() => {
            determineActiveSection();
        }, observerOptions);

        sections.forEach(sec => observer.observe(sec));
    }

    // Scroll listener with RAF throttling for responsive scroll detection
    let scrollTicking = false;
    window.addEventListener('scroll', () => {
        if (!scrollTicking) {
            window.requestAnimationFrame(() => {
                determineActiveSection();
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    }, { passive: true });
});
