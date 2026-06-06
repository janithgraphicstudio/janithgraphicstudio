/* ==================== PAGE LOADER ==================== */
(function () {
    const loader = document.getElementById('page-loader');
    if (!loader) return;

    const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const MIN_DISPLAY = REDUCED_MOTION ? 0 : 500;

    const start = performance.now();

    function hideLoader() {
        const elapsed = performance.now() - start;
        const delay = Math.max(0, MIN_DISPLAY - elapsed);

        setTimeout(() => {
            loader.classList.add('page-loader--hide');
            document.body.classList.add('page-loaded');

            setTimeout(() => {
                loader.remove();
            }, REDUCED_MOTION ? 0 : 650);
        }, delay);
    }

    if (document.readyState === 'complete') {
        hideLoader();
    } else {
        window.addEventListener('load', hideLoader);
    }
})();
