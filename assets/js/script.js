/* ==================== MENU SHOW Y HIDDEN ==================== */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* ==================== REMOVE MENU MOBILE ==================== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ==================== SCROLL SECTIONS ACTIVE LINK ==================== */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (sectionsClass) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link')
            } else {
                sectionsClass.classList.remove('active-link')
            }
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* ==================== CHANGE BACKGROUND HEADER ==================== */
function scrollHeader() {
    const nav = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (window.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* ==================== SHOW SCROLL UP & DOWN ==================== */
function scrollHandler() {
    const scrollUp = document.getElementById('scroll-up');
    const scrollDown = document.getElementById('scroll-down');

    // When the scroll is higher than 300 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (window.scrollY >= 300) {
        if (scrollUp) scrollUp.classList.add('show-scroll');
        if (scrollDown) scrollDown.classList.remove('show-scroll-down');
    } else {
        if (scrollUp) scrollUp.classList.remove('show-scroll');
        if (scrollDown) scrollDown.classList.add('show-scroll-down');
    }
}
window.addEventListener('scroll', scrollHandler);

// Initialize scroll handler on load to show down button immediately if at top
window.addEventListener('load', scrollHandler);
// Also call it immediately since the script is deferred and load might have already fired
scrollHandler();




/* ==================== CUSTOM CURSOR ==================== */
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

if (cursorDot && cursorOutline) {
    window.addEventListener('mousemove', function (e) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    const interactiveElements = document.querySelectorAll('a, button, .portfolio__item, .service__card');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.backgroundColor = 'transparent';
        });
    });
}

/* ==================== PREMIUM SEARCH BAR SYSTEM ==================== */
const searchIndex = [
    {
        title: "Home",
        description: "Welcome to JGS LANKA CO. Redefining Digital Aesthetics with premium design and print services.",
        target: "#home",
        keywords: ["home", "welcome", "jgs lanka", "digital aesthetics", "graphic design", "print"]
    },
    {
        title: "Other Portfolio",
        description: "Explore our full Janith Graphic Studio portfolio — logos, event posts, social media, branding, and premium creative works.",
        target: "#other-portfolio",
        keywords: ["other portfolio", "portfolio", "graphic design", "logo", "event", "branding", "gallery", "janith graphic studio", "jgslankaportfolio"]
    },
    {
        title: "Other Services",
        description: "Graphic Design, Development, Free Consulting, and Technical Support — professional services for your business.",
        target: "#other-services",
        keywords: ["other services", "services", "graphic design", "development", "consulting", "free", "technical support", "it support"]
    },
    {
        title: "Our Services",
        description: "Explore our graphic design, portfolio showcase, and SINHA AI platform.",
        target: "#other-services",
        keywords: ["services", "design", "graphic", "portfolio", "art", "sinha ai"]
    },
    {
        title: "Web Design & Development Details",
        description: "Explore our premium web design solutions, responsive layouts, SEO, and e-commerce stores.",
        target: "#projects",
        keywords: ["web", "website", "design", "development", "responsive", "seo", "e-commerce", "store"]
    },
    {
        title: "Software Development Details",
        description: "Explore our custom software systems, billing tools, inventory stock management, and desktop apps.",
        target: "#software-details",
        keywords: ["software", "development", "billing", "inventory", "stock", "desktop", "offline"]
    },
    {
        title: "Database System Details",
        description: "Explore our structured database architectures, SQL databases, secure hosting, and CDB Server.",
        target: "#database-details",
        keywords: ["database", "sql", "server", "cdb", "hosting", "backup", "security"]
    },
    {
        title: "Our Products & Platforms",
        description: "Discover our self-developed systems, including SINHA AI, JGS Lanka Education, and JGS Smart Tools.",
        target: "#products",
        keywords: ["products", "platforms", "sinha ai", "education", "smart tools", "tools", "systems", "apps"]
    },
    {
        title: "Featured Work (Portfolio)",
        description: "A curated selection of our finest creations: branding, web stores, database setups, and logos.",
        target: "#portfolio",
        keywords: ["portfolio", "featured work", "creations", "branding", "logo", "designs", "wingmark", "ecommerce", "database", "web", "server"]
    },
    {
        title: "About Us (We Are Vision)",
        description: "Learn about our passion for design, development, and delivering high-quality client results.",
        target: "#about",
        keywords: ["about", "vision", "experience", "projects", "history", "identity"]
    },
    {
        title: "Our Achievements & Stats",
        description: "A snapshot of our accomplishments, featuring 250+ completed projects, 25K happy customers, and 5K reviews.",
        target: "#achievements",
        keywords: ["achievements", "stats", "milestones", "projects", "reviews", "ratings", "numbers"]
    },
    {
        title: "Our Creative Process",
        description: "Discovery & Strategy, Creative Concepting, Design & Refinement, Launch & Support.",
        target: "#process",
        keywords: ["process", "creative", "strategy", "concept", "design", "refinement", "launch", "support", "work flow"]
    },
    {
        title: "Frequently Asked Questions (FAQ)",
        description: "Got questions? Timelines, file formats, payment process, and satisfaction guarantees.",
        target: "#faq",
        keywords: ["faq", "questions", "payment", "formats", "time", "logo design", "satisfaction"]
    },
    {
        title: "Designer Profile (Janitha Athma Herath)",
        description: "Meet H.M Janitha Athma Herath, professional artist and graphic designer from Sri Lanka.",
        target: "#designer",
        keywords: ["designer", "janitha athma herath", "artist", "cv", "skills", "photoshop", "illustrator", "coreldraw", "video editing"]
    },
    {
        title: "Get In Touch (Contact)",
        description: "Have a project in mind? Contact us or send a direct WhatsApp message.",
        target: "#contact",
        keywords: ["contact", "touch", "email", "form", "send", "whatsapp", "inquiry", "message"]
    }
];

function initSearch(inputId, dropdownId) {
    const searchInput = document.getElementById(inputId);
    const searchDropdown = document.getElementById(dropdownId);

    if (!searchInput || !searchDropdown) return;

    searchInput.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        searchDropdown.innerHTML = '';

        if (query.length === 0) {
            searchDropdown.classList.remove('active');
            return;
        }

        const matches = searchIndex.filter(item => {
            return item.title.toLowerCase().includes(query) || 
                   item.description.toLowerCase().includes(query) ||
                   item.keywords.some(keyword => keyword.toLowerCase().includes(query));
        });

        if (matches.length > 0) {
            matches.forEach(match => {
                const item = document.createElement('div');
                item.className = 'search-result-item';
                item.innerHTML = `
                    <div class="search-result-title">${match.title}</div>
                    <div class="search-result-desc">${match.description}</div>
                `;
                item.addEventListener('click', () => {
                    searchInput.value = '';
                    searchDropdown.classList.remove('active');
                    
                    const targetEl = document.querySelector(match.target);
                    if (targetEl) {
                        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        
                        // Add temporary premium highlight animation
                        targetEl.classList.add('highlight-section');
                        setTimeout(() => {
                            targetEl.classList.remove('highlight-section');
                        }, 2500);

                        // If on mobile, close the slide menu
                        const navMenu = document.getElementById('nav-menu');
                        if (navMenu) navMenu.classList.remove('show-menu');
                    }
                });
                searchDropdown.appendChild(item);
            });
            searchDropdown.classList.add('active');
        } else {
            const noResults = document.createElement('div');
            noResults.className = 'search-no-results';
            noResults.textContent = 'No results found for "' + this.value + '"';
            searchDropdown.appendChild(noResults);
            searchDropdown.classList.add('active');
        }
    });

    // Close when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
            searchDropdown.classList.remove('active');
        }
    });

    // Show again on focus if not empty
    searchInput.addEventListener('focus', function() {
        if (this.value.trim().length > 0) {
            searchDropdown.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initSearch('page-search-input', 'page-search-dropdown');
    initSearch('mobile-search-input', 'mobile-search-dropdown');

    // Mobile Search Expand Toggle
    const mobileSearchWrapper = document.getElementById('mobile-search-wrapper');
    const mobileSearchTrigger = document.getElementById('mobile-search-trigger');
    const mobileSearchInput = document.getElementById('mobile-search-input');
    const mobileSearchDropdown = document.getElementById('mobile-search-dropdown');

    if (mobileSearchTrigger && mobileSearchWrapper && mobileSearchInput) {
        const headerElement = document.getElementById('header');

        mobileSearchTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = mobileSearchWrapper.classList.contains('active');
            
            if (!isActive) {
                mobileSearchWrapper.classList.add('active');
                mobileSearchInput.focus();
                if (headerElement) headerElement.classList.add('search-active');
            } else {
                if (mobileSearchInput.value.trim() === '') {
                    mobileSearchWrapper.classList.remove('active');
                    if (mobileSearchDropdown) mobileSearchDropdown.classList.remove('active');
                    if (headerElement) headerElement.classList.remove('search-active');
                }
            }
        });

        document.addEventListener('click', (e) => {
            if (!mobileSearchWrapper.contains(e.target)) {
                if (mobileSearchInput.value.trim() === '') {
                    mobileSearchWrapper.classList.remove('active');
                    if (mobileSearchDropdown) mobileSearchDropdown.classList.remove('active');
                    if (headerElement) headerElement.classList.remove('search-active');
                }
            }
        });
        
        mobileSearchInput.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    /* ==================== SCROLL DOWN BUTTON ==================== */
    const scrollDown = document.getElementById('scroll-down');
    if (scrollDown) {
        scrollDown.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = scrollDown.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    /* ==================== FAQ ACCORDION ==================== */
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        if (header) {
            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close other accordion items
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle active class on current item
                if (isActive) {
                    item.classList.remove('active');
                } else {
                    item.classList.add('active');
                }
            });
        }
    });
});


/* ==================== ADVANCED CHATBOT LOGIC ==================== */
document.addEventListener('DOMContentLoaded', () => {
    const chatbotButton = document.getElementById('chatbot-button');
    const chatbotPanel = document.querySelector('.chatbot-panel');
    const chatbotClose = document.querySelector('.chatbot-close');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const userInput = document.getElementById('user-input');
    const chatbotSendBtn = document.getElementById('get-started-btn');
    const notification = document.getElementById('chatbot-notification');
    const notificationClose = document.getElementById('chatbot-notification-close');
    const quickChips = document.querySelectorAll('.chatbot-chip');

    // Notification Pop logic
    if (notification) {
        setTimeout(() => {
            notification.style.display = 'flex';
            setTimeout(() => {
                notification.style.display = 'none';
            }, 6000);
        }, 2500);

        if (notificationClose) {
            notificationClose.addEventListener('click', () => {
                notification.style.display = 'none';
            });
        }
    }

    // Chatbot Panel Controls
    if (chatbotButton && chatbotPanel && chatbotClose && chatbotMessages && userInput && chatbotSendBtn) {
        chatbotButton.addEventListener('click', () => {
            chatbotPanel.classList.toggle('active');
            chatbotButton.classList.remove('pulse');
            if (notification) notification.style.display = 'none';

            if (chatbotPanel.classList.contains('active') && chatbotMessages.children.length === 0) {
                showInitialMessages();
            }

            if (chatbotPanel.classList.contains('active')) {
                setTimeout(() => userInput.focus(), 300);
            }
        });

        chatbotClose.addEventListener('click', () => {
            chatbotPanel.classList.remove('active');
        });

        // Enable mouse wheel scrolling inside chatbot messages for desktop
        chatbotMessages.addEventListener('wheel', (e) => {
            const isScrollable = chatbotMessages.scrollHeight > chatbotMessages.clientHeight;
            if (isScrollable) {
                e.preventDefault();
                chatbotMessages.scrollTop += e.deltaY;
            }
        }, { passive: false });

        const scrollToBottom = () => {
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        };

        const addBotMessage = (text, callback) => {
            const messageElement = document.createElement('div');
            messageElement.className = 'bot-message message';
            messageElement.innerHTML = '<div class="thinking"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>';
            chatbotMessages.appendChild(messageElement);
            scrollToBottom();

            const typingTime = Math.min(text.length * 18, 1000) + 350;

            setTimeout(() => {
                messageElement.innerHTML = text;
                scrollToBottom();
                if (callback) callback();
            }, typingTime);
        };

        const addUserMessage = (text) => {
            const messageElement = document.createElement('div');
            messageElement.className = 'user-message message';
            messageElement.textContent = text;
            chatbotMessages.appendChild(messageElement);
            scrollToBottom();
        };

        const addDynamicBotMessage = (html, selector, event, handler) => {
            const container = document.createElement('div');
            container.className = 'bot-message message';
            container.innerHTML = '<div class="thinking"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>';
            chatbotMessages.appendChild(container);
            scrollToBottom();

            setTimeout(() => {
                container.innerHTML = html;
                container.querySelectorAll(selector).forEach(el => {
                    el.addEventListener(event, handler);
                });
                scrollToBottom();
            }, 650);
        };

        const showResetButton = () => {
            const existingReset = document.querySelector('.reset-btn-container');
            if (existingReset) existingReset.remove();

            const resetContainer = document.createElement('div');
            resetContainer.className = 'reset-btn-container';
            resetContainer.innerHTML = `<div class="options-list"><div class="option-item reset-btn" style="text-align: center; font-weight: 500;"><i class="fas fa-redo"></i> Start Over / නැවත අරඹන්න</div></div>`;
            chatbotMessages.appendChild(resetContainer);
            scrollToBottom();

            resetContainer.querySelector('.reset-btn').addEventListener('click', () => {
                chatbotMessages.innerHTML = '';
                showInitialMessages();
            });
        };

        const focusSearchBar = () => {
            const searchInput = document.getElementById('page-search-input') || document.getElementById('mobile-search-input');
            chatbotPanel.classList.remove('active');
            if (searchInput) {
                searchInput.focus();
                searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        };

        const scrollToSection = (target, closePanel = true) => {
            const targetSection = document.querySelector(target);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                targetSection.classList.add('highlight-section');
                setTimeout(() => targetSection.classList.remove('highlight-section'), 2500);
            }
            if (closePanel) chatbotPanel.classList.remove('active');
        };

        const openLiveDemos = () => {
            const exploreBtn = document.getElementById('explore-store-btn');
            chatbotPanel.classList.remove('active');
            scrollToSection('#projects', false);
            if (exploreBtn) {
                setTimeout(() => exploreBtn.click(), 600);
            }
        };

        function parseNLPQuery(query) {
            const cleanQuery = query.toLowerCase().trim();

            if (/\b(hi|hello|hey|yo|sup|good morning|good afternoon|good evening)\b/.test(cleanQuery) ||
                /\b(kohomada|halo|hlw|subha senasak|subha sandhyawak|saba|ayubowan|ayubo)\b/.test(cleanQuery)) {
                return {
                    text: "Hello! I am JGS AI Assistant. How can I help you today?<br><br>ආයුබෝවන්! මම JGS AI සහායකයා. අද මම ඔබට උදව් කරන්නේ කෙසේද?",
                    html: `
                        <div class="bot-custom-card">
                            <div class="bot-custom-card-title"><i class="fas fa-magic"></i> Quick Actions</div>
                            <div class="bot-custom-card-desc">Choose a shortcut below or type your question freely.</div>
                            <div class="bot-custom-card-links">
                                <button class="bot-card-btn" onclick="document.querySelector('[data-chip=portfolio]').click()"><i class="fas fa-images"></i> Portfolio</button>
                                <button class="bot-card-btn ghost" onclick="document.querySelector('[data-chip=web]').click()"><i class="fas fa-laptop-code"></i> Web Projects</button>
                                <button class="bot-card-btn ghost" onclick="document.getElementById('page-search-input')?.focus(); document.querySelector('.chatbot-close').click();"><i class="fas fa-search"></i> Search Site</button>
                            </div>
                        </div>
                    `
                };
            }

            if (/\b(price|pricing|cost|costing|rate|rates|how much|fee|fees|charge|charges|quote|quotation)\b/.test(cleanQuery) ||
                /\b(ganan|mila|keeda|mula|mula keeda|kiyada|gana)\b/.test(cleanQuery)) {
                return {
                    text: "Every project is unique! Contact our team directly on WhatsApp for a personalized quote tailored to your requirements.<br><br>සෑම ව්‍යාපෘතියක්ම unique වන නිසා, ඔබගේ අවශ්‍යතාවයට අනුව quote එකක් ලබා ගැනීමට WhatsApp හරහා අප හා සම්බන්ධ වන්න.",
                    html: `
                        <div class="bot-custom-card">
                            <div class="bot-custom-card-title"><i class="fab fa-whatsapp"></i> Get a Custom Quote</div>
                            <div class="bot-custom-card-desc">Our team will respond quickly with pricing based on your project scope.</div>
                            <div class="bot-custom-card-links">
                                <a href="https://wa.me/94702001859?text=${encodeURIComponent('Hi JGS, I would like to get a quote for my project.')}" target="_blank" class="bot-card-btn" style="background:#22c55e; color:white; border-color:#22c55e;"><i class="fab fa-whatsapp"></i> Request Quote</a>
                                <button class="bot-card-btn ghost" onclick="document.querySelector('[data-chip=contact]').click()"><i class="fas fa-phone"></i> Contact Info</button>
                            </div>
                        </div>
                    `
                };
            }

            if (/\b(portfolio|design|designs|work|works|sample|samples|creation|creations|gallery)\b/.test(cleanQuery) ||
                /\b(wada|weda|karapuwa|weda satha|pic|pics|photos|gallery)\b/.test(cleanQuery)) {
                return {
                    text: "We have delivered 250+ successful projects worldwide. Explore our featured work or visit the full portfolio site.",
                    html: `
                        <div class="bot-custom-card">
                            <div class="bot-custom-card-title"><i class="fas fa-eye"></i> View Portfolio</div>
                            <div class="bot-custom-card-desc">Browse our design gallery or open the standalone portfolio website.</div>
                            <div class="bot-custom-card-links">
                                <button class="bot-card-btn" onclick="document.querySelector('#other-portfolio').scrollIntoView({behavior:'smooth'}); document.querySelector('.chatbot-close').click();"><i class="fas fa-scroll"></i> Other Portfolio</button>
                                <a href="https://jgslankaportfolio.pages.dev/" target="_blank" class="bot-card-btn ghost"><i class="fas fa-external-link-alt"></i> Full Portfolio Site</a>
                            </div>
                        </div>
                    `
                };
            }

            if (/\b(contact|location|address|whatsapp|phone|number|call|email|mail|office|place|where)\b/.test(cleanQuery) ||
                /\b(koheda|thiyenne|ennada|number eka|katha karanna|panividayak)\b/.test(cleanQuery)) {
                return {
                    text: "You can reach us in Kurunegala, Sri Lanka. Contact us through any option below:",
                    html: `
                        <div class="bot-custom-card">
                            <div class="bot-custom-card-title"><i class="fas fa-address-card"></i> Contact Info</div>
                            <div class="bot-custom-card-desc">
                                <strong>Phone:</strong> +94 70 200 1859<br>
                                <strong>Email:</strong> janithgraphicstudio@gmail.com<br>
                                <strong>Location:</strong> Kurunegala, Sri Lanka
                            </div>
                            <div class="bot-custom-card-links">
                                <a href="tel:+94702001859" class="bot-card-btn"><i class="fas fa-phone"></i> Call Now</a>
                                <a href="https://wa.me/94702001859" target="_blank" class="bot-card-btn ghost" style="background:#22c55e; color:white; border-color:#22c55e;"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                            </div>
                        </div>
                    `
                };
            }

            if (/\b(web|website|site|landing page|e-commerce|ecommerce|web design|web development|demo|demos|live demo)\b/.test(cleanQuery) ||
                /\b(web site|website|web adiviya|web adawiya)\b/.test(cleanQuery)) {
                return {
                    text: "We design premium responsive websites — portfolios, business sites, and e-commerce stores. View our live web demos built by JGS Lanka Co.",
                    html: `
                        <div class="bot-custom-card">
                            <div class="bot-custom-card-title"><i class="fas fa-laptop-code"></i> Web Solutions</div>
                            <div class="bot-custom-card-desc">Explore live demo websites or scroll to our web development section.</div>
                            <div class="bot-custom-card-links">
                                <button class="bot-card-btn" onclick="document.getElementById('explore-store-btn')?.click();"><i class="fas fa-globe"></i> Live Web Demos</button>
                                <button class="bot-card-btn ghost" onclick="document.querySelector('#projects').scrollIntoView({behavior:'smooth'}); document.querySelector('.chatbot-close').click();"><i class="fas fa-arrow-down"></i> Web Section</button>
                            </div>
                        </div>
                    `
                };
            }

            if (/\b(software|system|systems|billing|inventory|stock|database|data base|db|sql|server|cdb)\b/.test(cleanQuery) ||
                /\b(softwer|soghware|database|data base|systam|bil system|kramalekhana)\b/.test(cleanQuery)) {
                return {
                    text: "We build custom software systems and secure database solutions — billing, inventory, desktop apps, and CDB Server hosting.",
                    html: `
                        <div class="bot-custom-card">
                            <div class="bot-custom-card-title"><i class="fas fa-database"></i> Software & DB Systems</div>
                            <div class="bot-custom-card-desc">Visit our downloads portal or explore database solutions.</div>
                            <div class="bot-custom-card-links">
                                <button class="bot-card-btn" onclick="document.querySelector('#software-details').scrollIntoView({behavior:'smooth'}); document.querySelector('.chatbot-close').click();"><i class="fas fa-code"></i> Software Dev</button>
                                <a href="https://jgslankasoftwaresolution.great-site.net/" target="_blank" class="bot-card-btn ghost"><i class="fas fa-download"></i> Downloads</a>
                            </div>
                        </div>
                    `
                };
            }

            if (/\b(projects|products|apps|platforms|sinha ai|smart tools|education)\b/.test(cleanQuery) ||
                /\b(wiyapruthi|wiyapruthy|karapu weda|karapuwa)\b/.test(cleanQuery)) {
                return {
                    text: "Our proprietary platforms include SINHA AI, JGS Lanka Education, and JGS Smart Tools.",
                    html: `
                        <div class="bot-custom-card">
                            <div class="bot-custom-card-title"><i class="fas fa-rocket"></i> Our Products</div>
                            <div class="bot-custom-card-desc">Explore our self-developed digital platforms.</div>
                            <div class="bot-custom-card-links">
                                <button class="bot-card-btn" onclick="document.querySelector('#products').scrollIntoView({behavior:'smooth'}); document.querySelector('.chatbot-close').click();"><i class="fas fa-box-open"></i> Products Section</button>
                                <a href="https://sinhaai.66ghz.com/" target="_blank" class="bot-card-btn ghost"><i class="fas fa-brain"></i> SINHA AI</a>
                            </div>
                        </div>
                    `
                };
            }

            if (/\b(services|service|branding|logo|identity|graphic|help|support)\b/.test(cleanQuery) ||
                /\b(mokada karanne|karana wada|monawada thiyenne|sewawa|sewawan)\b/.test(cleanQuery)) {
                return {
                    text: "We offer Graphic Design, Web Development, Software Systems, Database Solutions, Free Consulting, and Technical Support.",
                    html: `
                        <div class="bot-custom-card">
                            <div class="bot-custom-card-title"><i class="fas fa-cogs"></i> Our Services</div>
                            <div class="bot-custom-card-desc">Browse all service categories on our website.</div>
                            <div class="bot-custom-card-links">
                                <button class="bot-card-btn" onclick="document.querySelector('#other-services').scrollIntoView({behavior:'smooth'}); document.querySelector('.chatbot-close').click();"><i class="fas fa-arrow-down"></i> View Services</button>
                                <button class="bot-card-btn ghost" onclick="document.querySelector('#faq').scrollIntoView({behavior:'smooth'}); document.querySelector('.chatbot-close').click();"><i class="fas fa-circle-question"></i> FAQ</button>
                            </div>
                        </div>
                    `
                };
            }

            return {
                text: "I couldn't find an exact match, but our team can help you directly on WhatsApp!<br><br>හරිත පිළිතුරක් සොයාගත නොහැකි වූ නමුත් WhatsApp හරහා අප හා සම්බන්ධ විය හැක.",
                html: `
                    <div class="bot-custom-card">
                        <div class="bot-custom-card-title"><i class="fab fa-whatsapp"></i> Chat on WhatsApp</div>
                        <div class="bot-custom-card-desc">Your question: "${query.replace(/"/g, '&quot;')}"</div>
                        <div class="bot-custom-card-links">
                            <a href="https://wa.me/94702001859?text=${encodeURIComponent('Inquiry from JGS website: ' + query)}" target="_blank" class="bot-card-btn" style="background:#22c55e; color:white; border-color:#22c55e;"><i class="fab fa-whatsapp"></i> Connect Now</a>
                            <button class="bot-card-btn ghost" onclick="document.getElementById('page-search-input')?.focus(); document.querySelector('.chatbot-close').click();"><i class="fas fa-search"></i> Search Site</button>
                        </div>
                    </div>
                `
            };
        }

        const handleUserSendMessage = (messageText) => {
            const message = (messageText || userInput.value).trim();
            if (message === '') return;

            addUserMessage(message);
            userInput.value = '';

            const reply = parseNLPQuery(message);

            setTimeout(() => {
                addBotMessage(reply.text, () => {
                    if (reply.html) {
                        const htmlContainer = document.createElement('div');
                        htmlContainer.innerHTML = reply.html;
                        chatbotMessages.appendChild(htmlContainer.firstElementChild);
                        scrollToBottom();
                    }
                    setTimeout(showResetButton, 800);
                });
            }, 500);
        };

        chatbotSendBtn.addEventListener('click', () => handleUserSendMessage());
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleUserSendMessage();
        });

        quickChips.forEach(chip => {
            chip.addEventListener('click', () => {
                const chipType = chip.dataset.chip;
                const labels = {
                    portfolio: 'Show me your portfolio',
                    services: 'What services do you offer?',
                    web: 'Show me web projects and live demos',
                    contact: 'How can I contact you?',
                    whatsapp: 'Connect me on WhatsApp'
                };

                if (chipType === 'whatsapp') {
                    addUserMessage('Connect on WhatsApp');
                    window.open('https://wa.me/94702001859?text=' + encodeURIComponent('Hi JGS, I need assistance from your website chatbot.'), '_blank');
                    addBotMessage('Opening WhatsApp... You can chat with our team directly!', () => {
                        setTimeout(showResetButton, 600);
                    });
                    return;
                }

                if (chipType === 'web') {
                    addUserMessage(labels.web);
                    setTimeout(() => {
                        addBotMessage('Here are our web solutions and live demo websites:', () => {
                            const htmlContainer = document.createElement('div');
                            htmlContainer.innerHTML = parseNLPQuery('web demo').html;
                            chatbotMessages.appendChild(htmlContainer.firstElementChild);
                            scrollToBottom();
                            setTimeout(showResetButton, 800);
                        });
                    }, 400);
                    return;
                }

                handleUserSendMessage(labels[chipType] || chip.textContent.trim());
            });
        });

        const showInitialMessages = () => {
            addBotMessage("Welcome to <strong>JGS Lanka Co.</strong> I'm your AI Assistant — ask me anything about our services, portfolio, or projects!<br><br><strong>ආයුබෝවන්!</strong> අපගේ සේවා, portfolio හෝ projects ගැන ඕනෑම දෙයක් අහන්න.", () => {
                setTimeout(showMainCategories, 500);
            });
        };

        const showMainCategories = () => {
            const cardsHtml = `
                <div class="category-cards">
                    <div class="category-card" data-service="web-nav"><i class="fas fa-compass"></i><span>Site Navigator</span></div>
                    <div class="category-card" data-service="graphic-design"><i class="fas fa-paint-brush"></i><span>Graphic Design</span></div>
                    <div class="category-card" data-service="it-service"><i class="fas fa-laptop-code"></i><span>IT Services</span></div>
                    <div class="category-card" data-service="live-demos"><i class="fas fa-globe"></i><span>Live Web Demos</span></div>
                    <div class="category-card" data-service="contact-us"><i class="fas fa-headset"></i><span>Contact Support</span></div>
                </div>`;
            addDynamicBotMessage(cardsHtml, '.category-card', 'click', (e) => {
                handleMainCategorySelection(e.currentTarget.dataset.service);
            });
        };

        const handleMainCategorySelection = (service) => {
            const serviceCard = document.querySelector(`.category-card[data-service="${service}"]`);
            if (serviceCard) addUserMessage(serviceCard.textContent.trim());

            const cardContainer = document.querySelector('.category-cards');
            if (cardContainer) cardContainer.parentElement.remove();

            switch (service) {
                case 'web-nav': showWebNavOptions(); break;
                case 'graphic-design': showGraphicDesignOptions(); break;
                case 'it-service': showITServiceOptions(); break;
                case 'live-demos':
                    addBotMessage('Opening our live web demo gallery...', () => {
                        openLiveDemos();
                        setTimeout(showResetButton, 800);
                    });
                    break;
                case 'contact-us': showAboutUsOptions(); break;
            }
        };

        const showWebNavOptions = () => {
            const optionsHtml = `
                <div class="options-list">
                    <div class="option-item" data-action="scroll" data-target="#home"><i class="fas fa-home"></i> Home</div>
                    <div class="option-item" data-action="scroll" data-target="#other-portfolio"><i class="fas fa-folder-open"></i> Other Portfolio</div>
                    <div class="option-item" data-action="scroll" data-target="#other-services"><i class="fas fa-briefcase"></i> Services</div>
                    <div class="option-item" data-action="scroll" data-target="#projects"><i class="fas fa-laptop-code"></i> Web Design</div>
                    <div class="option-item" data-action="scroll" data-target="#software-details"><i class="fas fa-code"></i> Software Dev</div>
                    <div class="option-item" data-action="scroll" data-target="#database-details"><i class="fas fa-database"></i> Database Systems</div>
                    <div class="option-item" data-action="scroll" data-target="#products"><i class="fas fa-box-open"></i> Products</div>
                    <div class="option-item" data-action="link" data-target="https://jgslankaportfolio.pages.dev/"><i class="fas fa-image"></i> Portfolio Site</div>
                    <div class="option-item" data-action="scroll" data-target="#faq"><i class="fas fa-circle-question"></i> FAQ</div>
                    <div class="option-item" data-action="scroll" data-target="#contact"><i class="fas fa-envelope"></i> Contact</div>
                </div>`;
            addDynamicBotMessage(optionsHtml, '.option-item', 'click', (e) => {
                const target = e.currentTarget.dataset.target;
                const action = e.currentTarget.dataset.action;
                addUserMessage(e.currentTarget.textContent.trim());
                document.querySelector('.options-list')?.parentElement?.remove();

                if (action === 'scroll') {
                    addBotMessage(`Navigating to ${target.substring(1)}...`, () => {
                        scrollToSection(target);
                        setTimeout(showResetButton, 500);
                    });
                } else {
                    addBotMessage('Opening external page...', () => {
                        window.open(target, '_blank');
                        setTimeout(showResetButton, 500);
                    });
                }
            });
        };

        const showGraphicDesignOptions = () => {
            const optionsHtml = `
                <div class="options-list">
                    <div class="option-item" data-action="scroll" data-target="#other-portfolio"><i class="fas fa-eye"></i> View Portfolio</div>
                    <div class="option-item" data-action="link" data-target="https://jgslankaportfolio.pages.dev/"><i class="fas fa-external-link-alt"></i> Full Portfolio Site</div>
                    <div class="option-item" data-action="scroll" data-target="#other-services"><i class="fas fa-palette"></i> Design Services</div>
                    <div class="option-item" data-action="scroll" data-target="#contact"><i class="fas fa-shopping-basket"></i> Order Design</div>
                </div>`;
            addDynamicBotMessage(optionsHtml, '.option-item', 'click', (e) => {
                const target = e.currentTarget.dataset.target;
                const action = e.currentTarget.dataset.action;
                addUserMessage(e.currentTarget.textContent.trim());
                document.querySelector('.options-list')?.parentElement?.remove();

                if (action === 'scroll') {
                    addBotMessage(`Navigating...`, () => {
                        scrollToSection(target);
                        setTimeout(showResetButton, 500);
                    });
                } else {
                    addBotMessage('Opening portfolio site...', () => {
                        window.open(target, '_blank');
                        setTimeout(showResetButton, 500);
                    });
                }
            });
        };

        const showITServiceOptions = () => {
            const optionsHtml = `
                <div class="options-list">
                    <div class="option-item" data-action="demo"><i class="fas fa-globe"></i> Live Web Demos</div>
                    <div class="option-item" data-action="scroll" data-target="#projects"><i class="fas fa-laptop-code"></i> Web Design</div>
                    <div class="option-item" data-action="scroll" data-target="#software-details"><i class="fas fa-code"></i> Software Systems</div>
                    <div class="option-item" data-action="scroll" data-target="#database-details"><i class="fas fa-database"></i> Database Systems</div>
                    <div class="option-item" data-action="link" data-target="https://sinhaai.66ghz.com/"><i class="fas fa-brain"></i> SINHA AI</div>
                </div>`;
            addDynamicBotMessage(optionsHtml, '.option-item', 'click', (e) => {
                const target = e.currentTarget.dataset.target;
                const action = e.currentTarget.dataset.action;
                addUserMessage(e.currentTarget.textContent.trim());
                document.querySelector('.options-list')?.parentElement?.remove();

                if (action === 'demo') {
                    addBotMessage('Opening live web demos...', () => {
                        openLiveDemos();
                        setTimeout(showResetButton, 800);
                    });
                } else if (action === 'scroll') {
                    addBotMessage(`Navigating...`, () => {
                        scrollToSection(target);
                        setTimeout(showResetButton, 500);
                    });
                } else {
                    addBotMessage('Opening website...', () => {
                        window.open(target, '_blank');
                        setTimeout(showResetButton, 500);
                    });
                }
            });
        };

        const showAboutUsOptions = () => {
            addBotMessage("Here's how to connect with us:", () => {
                const buttonsHtml = `
                <div class="action-buttons-vertical">
                    <button class="action-btn" data-action="scroll" data-target="#contact">
                        <i class="fas fa-envelope"></i> Contact Form
                    </button>
                    <button class="action-btn whatsapp" data-action="link" data-target="https://wa.me/94702001859">
                        <i class="fab fa-whatsapp"></i> Chat on WhatsApp
                    </button>
                    <button class="action-btn call" data-action="link" data-target="tel:+94702001859">
                        <i class="fas fa-phone"></i> Call +94 70 200 1859
                    </button>
                </div>`;
                addDynamicBotMessage(buttonsHtml, '.action-btn', 'click', (e) => {
                    const target = e.currentTarget.dataset.target;
                    const action = e.currentTarget.dataset.action;
                    addUserMessage(e.currentTarget.textContent.trim());

                    if (action === 'scroll') {
                        scrollToSection(target);
                    } else {
                        window.open(target, action === 'link' && target.startsWith('tel:') ? '_self' : '_blank');
                    }

                    document.querySelector('.action-buttons-vertical')?.parentElement?.remove();
                    setTimeout(showResetButton, 800);
                });
            });
        };
    }
});

