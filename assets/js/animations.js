/* ==================== SCROLL REVEAL & PAGE ANIMATIONS ==================== */
(function () {
    const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const AUTO_REVEAL_GROUPS = [
        { selector: '.home__content > *', type: 'fade-up', stagger: 120, instant: true },
        { selector: '.home__visual', type: 'fade-left', stagger: 0, instant: true },
        { selector: '.other-portfolio__content > *', type: 'fade-up', stagger: 100 },
        { selector: '.other-portfolio__visual', type: 'fade-left', stagger: 0 },
        { selector: '.other-services__header > *', type: 'fade-up', stagger: 80 },
        { selector: '.other-services__card', type: 'fade-up', stagger: 100 },
        { selector: '.section__header > *', type: 'fade-up', stagger: 80 },
        { selector: '.service-detail__data', type: 'fade-right', stagger: 0 },
        { selector: '.service-detail__example', type: 'fade-left', stagger: 0 },
        { selector: '.feature__item', type: 'fade-up', stagger: 90 },
        { selector: '.portfolio__item', type: 'zoom-in', stagger: 120 },
        { selector: '.portfolio__cta', type: 'fade-up', stagger: 0 },
        { selector: '.about__data > *', type: 'fade-up', stagger: 90 },
        { selector: '.about__img-wrapper, .about__img', type: 'fade-left', stagger: 0 },
        { selector: '.stat__item', type: 'zoom-in', stagger: 100 },
        { selector: '.service__card', type: 'fade-up', stagger: 120 },
        { selector: '.process-card', type: 'zoom-in', stagger: 100 },
        { selector: '.faq-wrapper', type: 'fade-up', stagger: 0 },
        { selector: '.accordion-item', type: 'fade-up', stagger: 70 },
        { selector: '.designer__data > *', type: 'fade-up', stagger: 90 },
        { selector: '.designer__img-wrapper', type: 'fade-left', stagger: 0 },
        { selector: '.contact__form', type: 'fade-up', stagger: 0 },
        { selector: '.footer__container > *', type: 'fade-up', stagger: 80 }
    ];

    function applyAutoReveal() {
        AUTO_REVEAL_GROUPS.forEach(group => {
            document.querySelectorAll(group.selector).forEach((el, index) => {
                if (el.hasAttribute('data-aos')) return;

                el.setAttribute('data-aos', group.type);
                if (group.stagger) {
                    el.setAttribute('data-aos-delay', String(index * group.stagger));
                }
                if (group.instant) {
                    el.setAttribute('data-aos-instant', 'true');
                }
            });
        });
    }

    function initScrollReveal() {
        const elements = document.querySelectorAll('[data-aos]');

        if (REDUCED_MOTION) {
            elements.forEach(el => el.classList.add('aos-animate'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                const el = entry.target;
                const delay = parseInt(el.getAttribute('data-aos-delay') || '0', 10);

                setTimeout(() => {
                    el.classList.add('aos-animate');
                }, delay);

                observer.unobserve(el);
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        elements.forEach(el => {
            if (el.getAttribute('data-aos-instant') === 'true') {
                const delay = parseInt(el.getAttribute('data-aos-delay') || '0', 10);
                setTimeout(() => el.classList.add('aos-animate'), 300 + delay);
            } else {
                observer.observe(el);
            }
        });
    }

    function parseStatValue(text) {
        const raw = text.trim();
        const match = raw.match(/^([\d,.]+)\s*(K|M|\+)?$/i);
        if (!match) return null;

        let num = parseFloat(match[1].replace(/,/g, ''));
        const suffix = (match[2] || '').toUpperCase();

        if (suffix === 'K') num *= 1000;
        if (suffix === 'M') num *= 1000000;

        return { num, suffix: match[2] || '', raw };
    }

    function formatStatValue(value, suffix) {
        if (suffix === 'K') {
            const k = value / 1000;
            return `${k % 1 === 0 ? k : k.toFixed(1)}K`;
        }
        if (suffix === 'M') {
            const m = value / 1000000;
            return `${m % 1 === 0 ? m : m.toFixed(1)}M`;
        }
        if (suffix === '+') {
            return `${Math.round(value)}+`;
        }
        return String(Math.round(value));
    }

    function animateCounter(el, target, suffix, duration) {
        const start = performance.now();

        function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = target * eased;
            el.textContent = formatStatValue(current, suffix);

            if (progress < 1) {
                requestAnimationFrame(tick);
            } else {
                el.textContent = formatStatValue(target, suffix);
            }
        }

        requestAnimationFrame(tick);
    }

    function initCounters() {
        if (REDUCED_MOTION) return;

        const counters = document.querySelectorAll('.stat__number');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                const el = entry.target;
                if (el.dataset.counted === 'true') return;

                const parsed = parseStatValue(el.textContent);
                if (!parsed) return;

                el.dataset.counted = 'true';
                el.textContent = formatStatValue(0, parsed.suffix);
                animateCounter(el, parsed.num, parsed.suffix, 1800);
                observer.unobserve(el);
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }

    function initHeaderEntrance() {
        const header = document.getElementById('header');
        if (!header) return;

        if (REDUCED_MOTION) {
            header.classList.add('header--loaded');
            return;
        }

        requestAnimationFrame(() => {
            header.classList.add('header--loaded');
        });
    }

    function initDemoCardReveal() {
        document.addEventListener('click', (event) => {
            const btn = event.target.closest('#explore-store-btn');
            if (!btn) return;

            setTimeout(() => {
                document.querySelectorAll('#web-demo-modal-grid .demo-card').forEach((card, index) => {
                    card.classList.remove('aos-animate');
                    card.setAttribute('data-aos', 'fade-up');
                    card.setAttribute('data-aos-delay', String(index * 100));
                    requestAnimationFrame(() => {
                        setTimeout(() => card.classList.add('aos-animate'), 80 + index * 100);
                    });
                });
            }, 200);
        });
    }

    function init() {
        applyAutoReveal();
        initHeaderEntrance();
        initScrollReveal();
        initCounters();
        initDemoCardReveal();
        document.body.classList.add('animations-ready');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
