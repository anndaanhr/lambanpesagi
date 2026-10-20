/* ═══════════════════════════════════════════════════════
   SCROLL ANIMATIONS — Intersection Observer & Counters
   ═══════════════════════════════════════════════════════ */

export function initScrollAnimations() {
  // 1. Reveal on scroll
  const revealElements = document.querySelectorAll('.reveal');
  
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback
    revealElements.forEach((el) => el.classList.add('is-revealed'));
  }

  // 2. Number counter animation
  const statNumbers = document.querySelectorAll('.stat__number');
  
  if ('IntersectionObserver' in window && statNumbers.length > 0) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const targetVal = parseInt(el.getAttribute('data-target') || el.innerText.replace(/\D/g, ''), 10);
            const prefix = el.getAttribute('data-prefix') || '';
            const suffix = el.getAttribute('data-suffix') || '';
            
            if (!isNaN(targetVal)) {
              animateCounter(el, targetVal, 1600, prefix, suffix);
            }
            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );

    statNumbers.forEach((el) => counterObserver.observe(el));
  }
}

function animateCounter(element, target, duration = 1500, prefix = '', suffix = '') {
  const start = 0;
  const startTime = performance.now();

  function updateCount(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Ease-out expo
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const currentVal = Math.floor(easeProgress * (target - start) + start);
    
    element.textContent = `${prefix}${currentVal.toLocaleString('id-ID')}${suffix}`;
    
    if (progress < 1) {
      requestAnimationFrame(updateCount);
    } else {
      element.textContent = `${prefix}${target.toLocaleString('id-ID')}${suffix}`;
    }
  }

  requestAnimationFrame(updateCount);
}
