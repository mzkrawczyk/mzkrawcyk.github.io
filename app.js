// Global state
let currentLang = 'EN';
let currentView = 'home';
let siteData = {};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadSiteData();
    setupEventListeners();
    handleRoute();
});

// Load site data from window.__DATA__
function loadSiteData() {
    try {
        siteData = window.__DATA__;
    } catch (e) {
        console.error('Failed to load site data:', e);
        siteData = {
            bios: { EN: { short: '', medium: '', long: '' }, SV: { short: '', medium: '', long: '' }, PL: { short: '', medium: '', long: '' } },
            works: [],
            recordings: {},
            upcomingProjects: [],
            awards: []
        };
    }
}

// Language management - only affects bio content
function setLanguage(lang) {
    if (!['EN', 'SV', 'PL'].includes(lang)) return;
    currentLang = lang;
    updateLanguageButtons();
    
    // Only re-render if we're on the bio page
    if (currentView === 'bio') {
        renderCurrentView();
    }
}

function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
}

// Event listeners
function setupEventListeners() {

    // Hash routing
    window.addEventListener('hashchange', handleRoute);
    
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            updateActiveNavLink(e.target);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

function updateActiveNavLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
    });
    activeLink.classList.add('active');
    activeLink.setAttribute('aria-current', 'page');
}

// Router
function handleRoute() {
    const hash = window.location.hash.slice(1) || 'home';
    currentView = hash;
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        const isActive = link.getAttribute('href') === `#${hash}`;
        link.classList.toggle('active', isActive);
        if (isActive) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });
    
    // Smooth scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    renderCurrentView();
}

function renderCurrentView() {
    switch (currentView) {
        case 'home':
            renderHome();
            break;
        case 'works':
            renderWorks();
            break;
        case 'bio':
            renderBio();
            break;
        case 'contact':
            renderContact();
            break;
        default:
            renderHome();
    }
}

// View renderers
function renderHome() {
    const main = document.querySelector('.main-content');
    main.innerHTML = `
        <div class="view">
            <section class="hero">
                <h1>Miłosz Krawczyk – Composer</h1>
                <p class="phonetic">['miwoʂ 'kraftʂɨk]</p>
                <p class="tagline">"Raw, spiritual, poetic, aggressive, meditative, dramatic — and above all, deeply and genuinely Eastern European."</p>
                <div class="scroll-cue">
                    <div style="font-size: var(--font-size-2xl);">↓</div>
                </div>
            </section>
            
            <section class="featured-video">
                <div class="video-container">
                    <div class="video-wrapper">
                        <iframe 
                            src="${siteData.featuredVideo}" 
                            title="ANGELUS – world premiere (KMH Symphony Orchestra, 2025)"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    <p class="video-caption">ANGELUS – world premiere (KMH Symphony Orchestra, 2025)</p>
                </div>
            </section>
            
            <section class="container">
                <h2 class="mb-24">Upcoming Projects</h2>
                <div class="card-grid">
                    ${siteData.upcomingProjects.map(project => `
                        <div class="card">
                            <h3>${project.title}</h3>
                            <p>${project.description}</p>
                            <p style="color: var(--color-lavender); font-weight: var(--font-weight-medium); font-size: var(--font-size-sm);">${project.premiere}</p>
                            ${project.link ? `<div class="card-actions"><a href="${project.link}" target="_blank" class="btn btn--primary btn--sm">Learn More</a></div>` : ''}
                        </div>
                    `).join('')}
                </div>
            </section>
        </div>
    `;
}

function renderWorks() {
    const categories = [...new Set(siteData.works.map(work => work.category))];
    const main = document.querySelector('.main-content');
    
    main.innerHTML = `
        <div class="view">
            <div class="container">
                <div class="accordion">
                    ${categories.map((category, index) => `
                        <div class="accordion-item">
                            <div class="accordion-header" onclick="toggleAccordion(this)" role="button" tabindex="0" aria-expanded="${index === 0}">
                                <h2>${category}</h2>
                                <span class="chevron ${index === 0 ? 'expanded' : ''}">${index === 0 ? '▲' : '▼'}</span>
                            </div>
                            <div class="accordion-content ${index === 0 ? 'open' : ''}">
                                <div style="padding: var(--space-16);">
                                    <div class="card-grid">
                                        ${siteData.works
                                            .filter(work => work.category === category)
                                            .sort((a, b) => b.year - a.year)
                                            .map(work => `
                                            <div class="card">
                                                <h3>${work.title}</h3>
                                                <div class="chips">
                                                    <span class="chip">${work.year}</span>
                                                    <span class="chip">${work.instrumentation}</span>
                                                    <span class="chip">${work.duration}</span>
                                                </div>
                                                <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-bottom: var(--space-12);">
                                                    <strong>Premiere:</strong> ${work.premiere}
                                                </p>
                                                <div class="more-info hidden">
                                                    <p>${work.workInfo || 'No additional information available.'}</p>
                                                </div>
                                                <div class="card-actions">
                                                    ${generateWorkButtons(work)}
                                                    <button class="btn btn--secondary btn--sm" onclick="toggleMoreInfo(this)">
                                                        More Info <span class="chevron">▼</span>
                                                    </button>
                                                </div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function generateWorkButtons(work) {
    if (work.withdrawn) {
        return `<button class="btn btn--disabled btn--sm" disabled aria-disabled="true">Not for performance</button>`;
    }
    
    let buttons = '';
    
    if (work.score_link) {
        buttons += `<a href="${work.score_link}" target="_blank" class="btn btn--primary btn--sm">View Score</a>`;
    } else if (work.needs_contact) {
        buttons += `<a href="mailto:${siteData.contactEmail}?subject=${encodeURIComponent('Score request: ' + work.title)}" class="btn btn--primary btn--sm">Contact for Score</a>`;
    }
    
    const recording = siteData.recordings[work.title];
    if (recording) {
        buttons += `<a href="${recording}" target="_blank" class="btn btn--secondary btn--sm">Listen</a>`;
    }
    
    return buttons;
}

function renderBio() {
  const main = document.querySelector('.main-content');
  main.innerHTML = `
    <div class="container">
      <div class="bio-layout">
        <div class="portrait-section">
          <div class="portrait"></div>
          <div class="photo-credit">Photo: Birgit Püve / Arvo Pärt Centre</div>
        </div>
        <div class="bio-content">
          <!-- Add language switcher here -->
          <div class="bio-controls">
            <div class="language-switcher">
              <button class="lang-btn ${currentLang === 'EN' ? 'active' : ''}" data-lang="EN">EN</button>
              <button class="lang-btn ${currentLang === 'SV' ? 'active' : ''}" data-lang="SV">SV</button>
              <button class="lang-btn ${currentLang === 'PL' ? 'active' : ''}" data-lang="PL">PL</button>
            </div>
            <div class="tabs">
              <button class="tab-btn active" onclick="showBio('short')">Short</button>
              <button class="tab-btn" onclick="showBio('medium')">Medium</button>
              <button class="tab-btn" onclick="showBio('long')">Long</button>
            </div>
          </div>
          <div class="bio-text">
            ${siteData.bios[currentLang]?.short || 'Bio content not available'}
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Re-attach event listeners for the language buttons
  setupLanguageListeners();
}

function setupLanguageListeners() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
}

function renderContact() {
    const main = document.querySelector('.main-content');
    const displayEmail = siteData.contactEmail.replace('@', ' [at] ').replace('.', ' [dot] ');
    
    main.innerHTML = `
        <div class="view">
            <div class="container">
                <h2 class="mb-16">Email</h2>
                
                <div class="email-box">
                    <code>${displayEmail}</code>
                    <button class="copy-btn" onclick="copyEmail(this)">Copy</button>
                </div>
                
                <textarea id="email-fallback" style="position: absolute; left: -9999px;">${siteData.contactEmail}</textarea>
                
                <div class="social-links">
                    <a href="https://soundcloud.com/mkrawczykcomposer" target="_blank" class="social-link">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7 17.939h-1v-8.068c.308-.231.639-.429 1-.566v8.634zm3 0h1v-9.224c-.229-.265-.443-.548-.621-.857l-.379-.621v10.702zm2 0h1v-10.516c-.229-.706-.545-1.353-.938-1.897l-.062-.085v12.498zm2 0h1v-10.943c-.191-.625-.393-1.107-.621-1.501l-.379-.556v12.999zm2 0h1v-10.943c.228-.394.43-.876.621-1.501l.379-.556v12.999zm2 0h1v-10.516c.393-.544.709-1.191.938-1.897l.062-.085v12.498zm2 0h1v-9.224c.229.265.443.548.621.857l.379.621v10.702zm3 0h1v-8.068c-.308-.231-.639-.429-1-.566v8.634z"/>
                        </svg>
                        SoundCloud
                    </a>
                    <a href="https://www.youtube.com/@mkrawczykcomposer/videos" target="_blank" class="social-link">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        YouTube
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Interactive functions
function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const chevron = header.querySelector('.chevron');
    const isOpen = content.classList.contains('open');
    
    content.classList.toggle('open');
    chevron.classList.toggle('expanded');
    chevron.textContent = isOpen ? '▼' : '▲';
    header.setAttribute('aria-expanded', !isOpen);
}

function toggleMoreInfo(button) {
    const card = button.closest('.card');
    const moreInfo = card.querySelector('.more-info');
    const chevron = button.querySelector('.chevron');
    const isHidden = moreInfo.classList.contains('hidden');
    
    moreInfo.classList.toggle('hidden');
    chevron.textContent = isHidden ? '▲' : '▼';
    button.innerHTML = isHidden ? 
        `More Info <span class="chevron">▲</span>` : 
        `More Info <span class="chevron">▼</span>`;
}

function showBio(length) {
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Update content
    const content = document.getElementById('bio-content');
    if (content) {
        content.innerHTML = formatBio(siteData.bios[currentLang][length]);
    }
}

function formatBio(text) {
    return text.split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('');
}

function copyEmail(button) {
    const email = siteData.contactEmail;
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
            showCopySuccess(button);
        }).catch(() => {
            fallbackCopyEmail(button);
        });
    } else {
        fallbackCopyEmail(button);
    }
}

function fallbackCopyEmail(button) {
    const textarea = document.getElementById('email-fallback');
    textarea.style.position = 'fixed';
    textarea.style.left = '0';
    textarea.select();
    document.execCommand('copy');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    showCopySuccess(button);
}

function showCopySuccess(button) {
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    button.classList.add('success');
    
    setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove('success');
    }, 2000);
}

// Add keyboard support for accordion headers
document.addEventListener('keydown', (e) => {
    if (e.target.classList.contains('accordion-header') && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        toggleAccordion(e.target);
    }
});

// Make functions globally available for onclick handlers
window.toggleAccordion = toggleAccordion;
window.toggleMoreInfo = toggleMoreInfo;
window.showBio = showBio;
window.copyEmail = copyEmail;
