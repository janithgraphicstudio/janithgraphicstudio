document.addEventListener('DOMContentLoaded', () => {
    const a11yWidget = document.getElementById('a11y-widget');
    const a11yToggle = document.getElementById('a11y-toggle');
    const a11yPanel = document.getElementById('a11y-panel');
    const actionButtons = document.querySelectorAll('[data-a11y-action]');
    const body = document.body;

    // Toggle panel visibility
    if (a11yToggle && a11yWidget) {
        a11yToggle.addEventListener('click', () => {
            const isOpen = a11yWidget.classList.contains('is-open');
            if (isOpen) {
                a11yWidget.classList.remove('is-open');
                a11yPanel.setAttribute('aria-hidden', 'true');
            } else {
                a11yWidget.classList.add('is-open');
                a11yPanel.setAttribute('aria-hidden', 'false');
            }
        });
    }

    // State tracking
    let states = {
        'increase-text': false,
        'decrease-text': false,
        'grayscale': false,
        'high-contrast': false,
        'negative-contrast': false,
        'light-background': false,
        'links-underline': false,
        'readable-font': false
    };

    function resetAll() {
        for (let key in states) {
            states[key] = false;
            body.classList.remove(`a11y-${key}`);
        }
        actionButtons.forEach(btn => btn.classList.remove('is-active'));
        
        // Remove style overrides
        body.style.fontSize = '';
    }

    actionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.getAttribute('data-a11y-action');

            if (action === 'reset') {
                resetAll();
                return;
            }

            // Handle mutually exclusive options
            if (action === 'increase-text' && states['decrease-text']) {
                states['decrease-text'] = false;
                body.classList.remove('a11y-decrease-text');
                document.querySelector('[data-a11y-action="decrease-text"]').classList.remove('is-active');
            }
            if (action === 'decrease-text' && states['increase-text']) {
                states['increase-text'] = false;
                body.classList.remove('a11y-increase-text');
                document.querySelector('[data-a11y-action="increase-text"]').classList.remove('is-active');
            }
            if (action === 'high-contrast' && states['negative-contrast']) {
                states['negative-contrast'] = false;
                body.classList.remove('a11y-negative-contrast');
                document.querySelector('[data-a11y-action="negative-contrast"]').classList.remove('is-active');
            }
            if (action === 'negative-contrast' && states['high-contrast']) {
                states['high-contrast'] = false;
                body.classList.remove('a11y-high-contrast');
                document.querySelector('[data-a11y-action="high-contrast"]').classList.remove('is-active');
            }

            // Toggle state
            states[action] = !states[action];
            
            if (states[action]) {
                body.classList.add(`a11y-${action}`);
                btn.classList.add('is-active');
            } else {
                body.classList.remove(`a11y-${action}`);
                btn.classList.remove('is-active');
            }
        });
    });
});
