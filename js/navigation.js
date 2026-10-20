/* ═══════════════════════════════════════════════════════
   NAVIGATION — Sticky Nav, Mobile Menu & Active Tracker
   ═══════════════════════════════════════════════════════ */

export function initNavigation() {
  const nav = document.querySelector('.nav');
  const menuBtn = document.querySelector('.nav__menu-btn');
  const navLinksContainer = document.querySelector('.nav__links');
  const navLinks = document.querySelectorAll('.nav__link');
  const backdrop = document.querySelector('.nav__backdrop');
  const sections = document.querySelectorAll('section[id]');

  let lastScrollY = window.scrollY;

  function closeMenu() {
    navLinksContainer?.classList.remove('is-open');
    menuBtn?.setAttribute('aria-expanded', 'false');
    backdrop?.classList.remove('is-visible');
    document.body.classList.remove('nav-open');
  }

  function openMenu() {
    navLinksContainer?.classList.add('is-open');
    menuBtn?.setAttribute('aria-expanded', 'true');
    backdrop?.classList.add('is-visible');
    document.body.classList.add('nav-open');
  }

  function toggleMenu() {
    const isOpen = navLinksContainer?.classList.contains('is-open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // 1. Mobile Menu Toggle & Backdrop
  if (menuBtn && navLinksContainer) {
    menuBtn.addEventListener('click', toggleMenu);

    if (backdrop) {
      backdrop.addEventListener('click', closeMenu);
    }

    // Close menu when clicking link
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinksContainer.classList.contains('is-open')) {
        closeMenu();
      }
    });
  }

  // 2. Hide / Show Nav on Scroll
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 150) {
      if (currentScrollY > lastScrollY && !navLinksContainer?.classList.contains('is-open')) {
        // Scrolling down -> hide nav
        nav?.classList.add('is-hidden');
      } else {
        // Scrolling up -> show nav
        nav?.classList.remove('is-hidden');
      }
    } else {
      nav?.classList.remove('is-hidden');
    }

    lastScrollY = currentScrollY;
  }, { passive: true });

  // 3. Active Section Tracker via IntersectionObserver
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('is-active');
            } else {
              link.classList.remove('is-active');
            }
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -70% 0px'
    });

    sections.forEach(sec => observer.observe(sec));
  }
}
