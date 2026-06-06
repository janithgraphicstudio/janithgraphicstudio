/* ==================== WEB DEMO MODAL ==================== */
(function () {
    const modal = document.getElementById('web-demo-modal');
    const overlay = document.getElementById('web-demo-modal-overlay');
    const closeBtn = document.getElementById('web-demo-modal-close');
    const grid = document.getElementById('web-demo-modal-grid');
    const titleEl = document.getElementById('web-demo-modal-title');
    const subtitleEl = document.getElementById('web-demo-modal-subtitle');
    const triggerBtn = document.getElementById('explore-store-btn');

    if (!modal || !grid || !triggerBtn) return;

    let lastFocusedElement = null;

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function formatCategory(category) {
        return category || 'Web Project';
    }

    function createDemoCard(item) {
        const article = document.createElement('article');
        article.className = 'demo-card';
        article.innerHTML = `
            <div class="demo-card__header">
                <span class="demo-card__category">${escapeHtml(formatCategory(item.category))}</span>
                <span class="demo-card__live-badge">
                    <span class="demo-card__live-dot"></span>
                    Live Demo
                </span>
            </div>
            <div class="demo-card__body">
                <h3 class="demo-card__title">${escapeHtml(item.name)}</h3>
                <p class="demo-card__desc">${escapeHtml(item.description)}</p>
                <div class="demo-card__footer">
                    <span class="demo-card__date">
                        <i class="fa-regular fa-calendar"></i>
                        ${escapeHtml(item.date)}
                    </span>
                    <a href="${escapeHtml(item.url)}" class="demo-card__btn" target="_blank" rel="noopener noreferrer">
                        Visit Live Demo <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>
        `;

        return article;
    }

    function renderDemos(data) {
        titleEl.textContent = data.panelTitle || 'Live Web Demos';
        subtitleEl.textContent = data.panelSubtitle || '';
        grid.innerHTML = '';

        if (!data.items || data.items.length === 0) {
            grid.innerHTML = `
                <div class="web-demo-modal__error">
                    <i class="fa-solid fa-folder-open"></i>
                    <p>No demo projects added yet. Update assets/data/web-demos-data.js</p>
                </div>
            `;
            return;
        }

        data.items.forEach(item => {
            grid.appendChild(createDemoCard(item));
        });
    }

    function loadDemoData() {
        if (window.WEB_DEMOS_DATA) {
            return window.WEB_DEMOS_DATA;
        }

        const embedded = document.getElementById('web-demos-data');
        if (embedded && embedded.textContent.trim()) {
            return JSON.parse(embedded.textContent);
        }

        throw new Error('Web demo data not found');
    }

    function openModal() {
        lastFocusedElement = document.activeElement;
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('web-demo-modal-open');
        closeBtn.focus();
    }

    function closeModal() {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('web-demo-modal-open');

        if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
            lastFocusedElement.focus();
        }
    }

    triggerBtn.addEventListener('click', () => {
        try {
            const data = loadDemoData();
            renderDemos(data);
            openModal();
        } catch (error) {
            console.error(error);
            grid.innerHTML = `
                <div class="web-demo-modal__error">
                    <i class="fa-solid fa-circle-exclamation"></i>
                    <p>Could not load demo projects. Check assets/data/web-demos-data.js</p>
                </div>
            `;
            titleEl.textContent = 'Live Web Demos';
            subtitleEl.textContent = '';
            openModal();
        }
    });

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('is-open')) {
            closeModal();
        }
    });
})();
