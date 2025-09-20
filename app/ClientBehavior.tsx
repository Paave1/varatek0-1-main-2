"use client";

import { useEffect } from 'react';

export function ClientBehavior() {
  useEffect(() => {
    // Mobile menu: toggle and overlay
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');
    const menuOverlay = document.getElementById('menuOverlay');

    function closeMenu() {
      mobileMenuToggle?.classList.remove('active');
      mainNav?.classList.remove('active');
      menuOverlay?.classList.remove('active');
      document.body.classList.remove('menu-open');
    }

    const delegatedClick = (e: Event) => {
      const target = e.target as HTMLElement | null;
      const trigger = target?.closest('#mobileMenuToggle');
      if (trigger) {
        mobileMenuToggle?.classList.toggle('active');
        mainNav?.classList.toggle('active');
        menuOverlay?.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        if (mobileMenuToggle) {
          const expanded = mobileMenuToggle.classList.contains('active');
          mobileMenuToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        }
      }
    };
    document.addEventListener('click', delegatedClick);

    const overlayClick = (e: Event) => { if (e.target === menuOverlay) closeMenu(); };
    menuOverlay?.addEventListener('click', overlayClick);

    const navLinks = Array.from(document.querySelectorAll('.nav-links a.nav-link'));
    const navLinkHandler = function (this: Element) {
        const currentLang = localStorage.getItem('selectedLanguage') || 'fi';
        const enSpan = this.querySelector('.en');
        const fiSpan = this.querySelector('.fi');
        if (currentLang === 'en') {
          enSpan?.classList.remove('hidden');
          fiSpan?.classList.add('hidden');
        } else {
          enSpan?.classList.add('hidden');
          fiSpan?.classList.remove('hidden');
        }
        closeMenu();
      };
    navLinks.forEach(link => link.addEventListener('click', navLinkHandler as any));

    const langButtons = document.querySelectorAll('.lang-btn');
    const enElements = document.querySelectorAll('.en');
    const fiElements = document.querySelectorAll('.fi');
    const testimonialsSliderEl = document.getElementById('testimonialsSlider');
    function setLanguage(lang: string) {
      localStorage.setItem('selectedLanguage', lang);
      langButtons.forEach(btn => {
        if ((btn as HTMLElement).getAttribute('data-lang') === lang) btn.classList.add('active');
        else btn.classList.remove('active');
      });
      if (lang === 'en') {
        enElements.forEach(el => el.classList.remove('hidden'));
        fiElements.forEach(el => el.classList.add('hidden'));
      } else {
        enElements.forEach(el => el.classList.add('hidden'));
        fiElements.forEach(el => el.classList.remove('hidden'));
      }
      // Recalculate testimonials container height after text swap
      setTimeout(() => adjustTestimonialsHeight(), 0);
    }
    langButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement | null;
        const lang = target?.getAttribute('data-lang') || 'fi';
        setLanguage(lang);
      });
    });
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'fi';
    setLanguage(savedLanguage);

    const anchorHandler = function (this: HTMLAnchorElement, e: Event) {
        e.preventDefault();
        const targetId = this.getAttribute('href')!;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          setTimeout(() => {
            window.scrollTo({ top: (targetElement as HTMLElement).offsetTop - 80, behavior: 'smooth' });
          }, 100);
        }
      };
    const anchors = Array.from(document.querySelectorAll('a[href^="#"]')) as HTMLAnchorElement[];
    anchors.forEach(a => a.addEventListener('click', anchorHandler as any));

    const contactForm = document.getElementById('contactForm') as HTMLFormElement | null;
    const onContactSubmit = async (e: Event) => {
      e.preventDefault();
      if (!contactForm) return;
      const formData = new FormData(contactForm);
      const currentLang = localStorage.getItem('selectedLanguage') || 'fi';
      try {
        const res = await fetch('https://formspree.io/f/movnqnwe', {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          alert(currentLang === 'fi' ? 'Kiitos viestistäsi! Otamme sinuun yhteyttä pian.' : 'Thank you for your message! We will get back to you soon.');
          contactForm.reset();
        } else {
          alert(currentLang === 'fi' ? 'Lähetys epäonnistui. Yritä myöhemmin uudelleen.' : 'Failed to send. Please try again later.');
        }
      } catch {
        alert(currentLang === 'fi' ? 'Lähetys epäonnistui. Yritä myöhemmin uudelleen.' : 'Failed to send. Please try again later.');
      }
    };
    contactForm?.addEventListener('submit', onContactSubmit as any);

    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.testimonial-dots .dot');
    let currentIndex = 0;
    let interval: any;
    if (testimonials.length > 0) (testimonials[0] as HTMLElement).classList.add('active');

    const adjustTestimonialsHeight = () => {
      if (!testimonialsSliderEl) return;
      let max = 0;
      testimonials.forEach(t => {
        const h = (t as HTMLElement).scrollHeight;
        if (h > max) max = h;
      });
      (testimonialsSliderEl as HTMLElement).style.height = `${max}px`;
    };
    function showTestimonial(index: number) {
      testimonials.forEach(t => t.classList.remove('active'));
      (testimonials[index] as HTMLElement).classList.add('active');
      dots.forEach(d => d.classList.remove('active'));
      (dots[index] as HTMLElement).classList.add('active');
      const currentLang = localStorage.getItem('selectedLanguage') || 'fi';
      const activeTestimonial = testimonials[index]!;
      const enEls = activeTestimonial.querySelectorAll('.en');
      const fiEls = activeTestimonial.querySelectorAll('.fi');
      if (currentLang === 'en') { enEls.forEach(el => el.classList.remove('hidden')); fiEls.forEach(el => el.classList.add('hidden')); }
      else { enEls.forEach(el => el.classList.add('hidden')); fiEls.forEach(el => el.classList.remove('hidden')); }
      currentIndex = index;
      adjustTestimonialsHeight();
    }
    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement | null;
        const index = parseInt(target?.getAttribute('data-index') || '0', 10);
        showTestimonial(index);
        resetInterval();
      });
    });
    function nextTestimonial() { let next = currentIndex + 1; if (next >= testimonials.length) next = 0; showTestimonial(next); }
    function resetInterval() { clearInterval(interval); interval = setInterval(nextTestimonial, 5000); }
    resetInterval();
    adjustTestimonialsHeight();

    // Projects scroller controls with loop
    const projectsScroller = document.querySelector('.projects-scroller .projects-grid');
    const projectsPrev = document.querySelector('.projects-prev');
    const projectsNext = document.querySelector('.projects-next');
    if (projectsScroller && projectsPrev && projectsNext) {
      const cards = Array.from(projectsScroller.querySelectorAll('.project-card'));
      const computeStep = () => cards.length > 1 ? Math.max(1, (cards[1] as HTMLElement).offsetLeft - (cards[0] as HTMLElement).offsetLeft) : (cards[0] as HTMLElement).getBoundingClientRect().width;
      const getIndex = () => Math.round((projectsScroller as HTMLElement).scrollLeft / computeStep());
      const scrollToIndex = (idx: number, smooth = true) => (projectsScroller as HTMLElement).scrollTo({ left: computeStep() * idx, behavior: smooth ? 'smooth' : 'auto' });
      projectsNext.addEventListener('click', () => { const current = getIndex(); const next = current + 1; if (next >= cards.length) scrollToIndex(0); else scrollToIndex(next); });
      projectsPrev.addEventListener('click', () => { const current = getIndex(); const prev = current - 1; if (prev < 0) scrollToIndex(cards.length - 1); else scrollToIndex(prev); });
    }

    // Services scroller controls (no loop)
    const servicesScroller = document.querySelector('.services-scroller .services-grid');
    const servicesPrev = document.querySelector('.services-prev');
    const servicesNext = document.querySelector('.services-next');
    if (servicesScroller && servicesPrev && servicesNext) {
      const serviceCards = Array.from(servicesScroller.querySelectorAll('.service-card'));
      const computeStep = () => serviceCards.length > 1 ? Math.max(1, (serviceCards[1] as HTMLElement).offsetLeft - (serviceCards[0] as HTMLElement).offsetLeft) : (serviceCards[0] as HTMLElement).getBoundingClientRect().width;
      const getIndex = () => Math.round((servicesScroller as HTMLElement).scrollLeft / computeStep());
      const scrollToIndex = (idx: number, smooth = true) => (servicesScroller as HTMLElement).scrollTo({ left: computeStep() * idx, behavior: smooth ? 'smooth' : 'auto' });
      servicesNext.addEventListener('click', () => { const current = getIndex(); const next = Math.min(current + 1, serviceCards.length - 1); scrollToIndex(next); });
      servicesPrev.addEventListener('click', () => { const current = getIndex(); const prev = Math.max(current - 1, 0); scrollToIndex(prev); });
    }

    // Header free-space click scrolls to #home
    const header = document.querySelector('header');
    const headerClick = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      // Ignore clicks on interactive elements inside header
      if (target.closest('a, button, .language-switcher, #mobileMenuToggle, nav')) return;
      const home = document.getElementById('home');
      if (home) {
        e.preventDefault();
        closeMenu();
        window.scrollTo({ top: home.offsetTop - 80, behavior: 'smooth' });
      }
    };
    header?.addEventListener('click', headerClick);

    // Visual viewport height and header height → CSS vars for consistent hero sizing
    const setViewportVars = () => {
      const vh = (window as any).visualViewport?.height || window.innerHeight;
      document.documentElement.style.setProperty('--vh', `${vh * 0.01}px`);
      const headerEl = document.querySelector('header') as HTMLElement | null;
      const headerH = headerEl?.offsetHeight || 0;
      document.documentElement.style.setProperty('--header-h', `${headerH}px`);
    };
    setViewportVars();
    window.addEventListener('resize', setViewportVars);
    (window as any).visualViewport?.addEventListener('resize', setViewportVars);

    // Toggle high-contrast header on top of hero for readability
    const hero = document.getElementById('home');
    const updateHeaderContrast = () => {
      if (!header || !hero) return;
      const headerHeight = (header as HTMLElement).offsetHeight || 0;
      const heroRect = (hero as HTMLElement).getBoundingClientRect();
      if (heroRect.bottom > headerHeight) (header as HTMLElement).classList.add('on-hero');
      else (header as HTMLElement).classList.remove('on-hero');
    };
    updateHeaderContrast();
    // Re-run after layout
    setTimeout(updateHeaderContrast, 0);
    window.addEventListener('scroll', updateHeaderContrast, { passive: true } as any);
    window.addEventListener('resize', updateHeaderContrast);
    window.addEventListener('resize', adjustTestimonialsHeight);
    return () => {
      document.removeEventListener('click', delegatedClick);
      menuOverlay?.removeEventListener('click', overlayClick);
      navLinks.forEach(link => link.removeEventListener('click', navLinkHandler as any));
      anchors.forEach(a => a.removeEventListener('click', anchorHandler as any));
      clearInterval(interval);
      header?.removeEventListener('click', headerClick);
      window.removeEventListener('resize', setViewportVars);
      (window as any).visualViewport?.removeEventListener('resize', setViewportVars);
      window.removeEventListener('scroll', updateHeaderContrast as any);
      window.removeEventListener('resize', updateHeaderContrast as any);
      window.removeEventListener('resize', adjustTestimonialsHeight as any);
      contactForm?.removeEventListener('submit', onContactSubmit as any);
    };
  }, []);

  return null;
}

