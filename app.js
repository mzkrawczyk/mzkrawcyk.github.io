// Application data
const data = {
{
  "works": [
    {
      "title": "Étude in Musical Machinery",
      "year": 2025,
      "category": "Orchestral & Large Ensemble",
      "duration": "4′",
      "premiere": "24 May 2025, KMH Stockholm; cond. Emil Eliasson",
      "instrumentation": "Wind orchestra",
      "score_link": "",
      "withdrawn": false,
      "needs_contact": true
    },
    {
      "title": "Bajki",
      "year": 2025,
      "category": "Orchestral & Large Ensemble",
      "duration": "8′",
      "premiere": "25 Apr 2025, KMH Stockholm; horn Hilda Melin; cond. Wolfgang Durán",
      "instrumentation": "Horn & chamber ensemble",
      "score_link": "https://www.svenskmusik.org/en/works/bajki-folk-tales-191818",
      "withdrawn": false
    },
    {
      "title": "ANGELUS",
      "year": 2024,
      "category": "Orchestral & Large Ensemble",
      "duration": "15′",
      "premiere": "28 Feb 2025, KMH Stockholm; cond. Luca Gliozzi",
      "instrumentation": "Symphony orchestra",
      "score_link": "https://www.svenskmusik.org/en/works/n-g-e-l-v-s-angelus-191655",
      "withdrawn": false
    },
    {
      "title": "STARGAZING II",
      "year": 2024,
      "category": "Orchestral & Large Ensemble",
      "duration": "18′",
      "premiere": "TBA",
      "instrumentation": "Solo trombone, percussion & strings",
      "score_link": "https://www.svenskmusik.org/en/works/nachtmusik-186428",
      "withdrawn": false
    },
    {
      "title": "Threnody XV",
      "year": 2024,
      "category": "Orchestral & Large Ensemble",
      "duration": "11′",
      "premiere": "5 & 9 Apr 2024, Stockholm/Vällingby; cond. Martin Thorell, Teo Hillberg, Benedikt Kantert",
      "instrumentation": "Mixed chamber ensemble",
      "score_link": "https://www.svenskmusik.org/en/works/threnody-xv-189806",
      "withdrawn": false
    },
    {
      "title": "antiphon and chorale",
      "year": 2023,
      "category": "Orchestral & Large Ensemble",
      "duration": "6′",
      "premiere": "19 Jan 2024, KMH Stockholm; cond. Tom Poulson",
      "instrumentation": "Brass ensemble",
      "score_link": "https://www.svenskmusik.org/en/works/antiphon-and-chorale-187751",
      "withdrawn": false
    },
    {
      "title": "Pilgrimages",
      "year": 2023,
      "category": "Orchestral & Large Ensemble",
      "duration": "13′",
      "premiere": "2 Apr 2023, Culturum, Nyköping; Nyköpings Filharmoniker, cond. Simon Crawford-Phillips",
      "instrumentation": "Sinfonietta",
      "score_link": "https://www.svenskmusik.org/en/works/pilgrimages-overture-rhapsodyfor-sinfonietta-180360",
      "withdrawn": true
    },
    {
      "title": "THE RULES OF FORESTRY",
      "year": 2022,
      "category": "Orchestral & Large Ensemble",
      "duration": "6′",
      "premiere": "19 Nov 2022, Queen Silvia Concert Hall, Stockholm; cond. Mark Tatlow",
      "instrumentation": "Chamber orchestra",
      "score_link": "https://www.svenskmusik.org/en/works/the-rules-of-forestry-poem-for-chamber-orchestra-180550",
      "withdrawn": false
    },
    {
      "title": "Kalemegdan and the Danube",
      "year": 2022,
      "category": "Orchestral & Large Ensemble",
      "duration": "10′",
      "premiere": "8 May 2022, KMH, Stockholm; KMH Symphony Orchestra, cond. Hanna Ohlson Nordh",
      "instrumentation": "Symphony orchestra",
      "score_link": "",
      "withdrawn": true
    }
  ],
  "recordings": {
    "soundcloud": "https://soundcloud.com/mkrawczykcomposer",
    "youtube": "https://www.youtube.com/@mkrawczykcomposer/videos",
    "STARGAZING I": "https://soundcloud.com/mkrawczykcomposer/stargazing-i-2021",
    "Wycinanki": "https://soundcloud.com/mkrawczykcomposer/wycinanki-2021",
    "Étude in Musical Machinery": "https://soundcloud.com/mkrawczykcomposer/etude-in-musical-machinery-2025/s-vW4dQ98qrvS?si=77075243e9e74bf199d514c0bd4832b2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    "Bajki": "https://soundcloud.com/mkrawczykcomposer/horn-concertino-bajki-2025/s-BGLqJpzH2KI?si=954bd41a73e64dcfa86cd14a6656f557&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
  }
};

// Application state
let currentView = 'home';
let currentBio = 'medium';
let allWorks = data.works;
let filteredWorks = allWorks;
let categoryCollapsed = {};

// DOM elements
const views = document.querySelectorAll('.view');
const navLinks = document.querySelectorAll('.navbar-nav a');
const searchInput = document.getElementById('search-works');
const worksContainer = document.getElementById('works-container');

// Initialize application
function init() {
  setupNavigation();
  setupQuickNavigation();
  setupMediaLinks();
  setupContactInfo();
  setupBioContent();
  setupUpcomingProjects();
  populateWorks();
  setupSearch();
  
  // Handle initial route
  handleRoute();
  
  // Listen for hash changes
  window.addEventListener('hashchange', handleRoute);
}

// Navigation setup
function setupNavigation() {
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      window.location.hash = href;
    });
  });
}

// Quick navigation cards
function setupQuickNavigation() {
  const quickNavCards = document.querySelectorAll('.quick-nav-card');
  quickNavCards.forEach(card => {
    const href = card.getAttribute('data-href');
    
    card.addEventListener('click', () => {
      window.location.hash = href;
    });
    
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.location.hash = href;
      }
    });
  });
}

// Setup upcoming projects
function setupUpcomingProjects() {
  const upcomingContainer = document.getElementById('upcoming-container');
  if (!upcomingContainer) return;
  
  data.upcoming.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'card upcoming-card';
    
    const cardBody = document.createElement('div');
    cardBody.className = 'card__body';
    
    const title = document.createElement('h3');
    title.textContent = project.title;
    cardBody.appendChild(title);
    
    const description = document.createElement('p');
    description.textContent = project.description;
    description.className = 'upcoming-description';
    cardBody.appendChild(description);
    
    const premiere = document.createElement('div');
    premiere.textContent = project.premiere;
    premiere.className = 'upcoming-premiere';
    cardBody.appendChild(premiere);
    
    if (project.link) {
      const link = document.createElement('a');
      link.href = project.link;
      link.textContent = 'Learn More';
      link.className = 'btn btn--primary';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      cardBody.appendChild(link);
    }
    
    projectCard.appendChild(cardBody);
    upcomingContainer.appendChild(projectCard);
  });
}

// Setup media links
function setupMediaLinks() {
  document.getElementById('soundcloud-link').href = data.recordings.soundcloud;
  document.getElementById('youtube-link').href = data.recordings.youtube;
  document.getElementById('social-soundcloud').href = data.recordings.soundcloud;
  document.getElementById('social-youtube').href = data.recordings.youtube;
}

// Setup contact information
function setupContactInfo() {
  const emailDisplay = document.getElementById('email-display');
  const copyButton = document.getElementById('copy-email');
  
  emailDisplay.textContent = data.email;
  
  copyButton.addEventListener('click', () => {
    const emailText = data.email.replace(' [at] ', '@').replace(' [dot] ', '.');
    navigator.clipboard.writeText(emailText).then(() => {
      copyButton.textContent = 'Copied!';
      setTimeout(() => {
        copyButton.textContent = 'Copy';
      }, 2000);
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = emailText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      copyButton.textContent = 'Copied!';
      setTimeout(() => {
        copyButton.textContent = 'Copy';
      }, 2000);
    });
  });
}

// Setup bio content
function setupBioContent() {
  updateBioContent();
  
  const bioTabs = document.querySelectorAll('.bio-tab');
  bioTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const bioType = tab.getAttribute('data-bio');
      
      // Update active tab
      bioTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Update bio content
      currentBio = bioType;
      updateBioContent();
    });
  });
  
  const awardsList = document.getElementById('awards-list');
  awardsList.innerHTML = '';
  data.awards.forEach(award => {
    const li = document.createElement('li');
    li.textContent = award;
    awardsList.appendChild(li);
  });
}

function updateBioContent() {
  const bioParagraph = document.getElementById('bio-paragraph');
  const bioText = data.bios[currentBio];
  
  // Handle newlines in bio text
  if (bioText.includes('\n')) {
    const paragraphs = bioText.split('\n');
    bioParagraph.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
  } else {
    bioParagraph.innerHTML = `<p>${bioText}</p>`;
  }
}

// Populate works
function populateWorks() {
  // Group works by category
  const categories = {};
  allWorks.forEach(work => {
    if (!categories[work.category]) {
      categories[work.category] = [];
    }
    categories[work.category].push(work);
  });
  
  // Sort categories in desired order
  const categoryOrder = [
    'Orchestral & Large Ensemble',
    'Chamber Music', 
    'Solo & Duo',
    'Choral & Vocal'
  ];
  
  // Clear container
  worksContainer.innerHTML = '';
  
  // Create sections for each category
  categoryOrder.forEach(categoryName => {
    if (categories[categoryName]) {
      const categorySection = createCategorySection(categoryName, categories[categoryName]);
      worksContainer.appendChild(categorySection);
    }
  });
}

// Create category section
function createCategorySection(categoryName, works) {
  const section = document.createElement('div');
  section.className = 'works-category';
  section.setAttribute('data-category', categoryName);
  
  const header = document.createElement('div');
  header.className = 'category-header';
  
  const heading = document.createElement('h2');
  heading.textContent = categoryName;
  
  const toggleButton = document.createElement('button');
  toggleButton.className = 'category-toggle';
  toggleButton.setAttribute('aria-expanded', 'true');
  toggleButton.setAttribute('aria-label', `Toggle ${categoryName} category`);
  toggleButton.innerHTML = '−'; // minus sign for expanded
  
  header.appendChild(heading);
  header.appendChild(toggleButton);
  section.appendChild(header);
  
  const grid = document.createElement('div');
  grid.className = 'works-grid';
  
  // Sort works by year (newest first)
  works.sort((a, b) => b.year - a.year);
  
  works.forEach(work => {
    const workCard = createWorkCard(work);
    grid.appendChild(workCard);
  });
  
  section.appendChild(grid);
  
  // Add toggle functionality
  toggleButton.addEventListener('click', () => {
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
    const newState = !isExpanded;
    
    toggleButton.setAttribute('aria-expanded', newState.toString());
    toggleButton.innerHTML = newState ? '−' : '+';
    grid.style.display = newState ? 'grid' : 'none';
    
    categoryCollapsed[categoryName] = !newState;
  });
  
  return section;
}

// Create work card
function createWorkCard(work) {
  const card = document.createElement('div');
  card.className = 'card work-card';
  card.setAttribute('data-title', work.title.toLowerCase());
  
  const cardBody = document.createElement('div');
  cardBody.className = 'card__body';
  
  const title = document.createElement('h3');
  title.textContent = work.title;
  cardBody.appendChild(title);
  
  const meta = document.createElement('div');
  meta.className = 'work-meta';
  
  // Year chip
  const yearChip = document.createElement('span');
  yearChip.className = 'meta-chip';
  yearChip.textContent = work.year;
  meta.appendChild(yearChip);
  
  // Instrumentation chip (before duration)
  if (work.instrumentation) {
    const instrumentationChip = document.createElement('span');
    instrumentationChip.className = 'meta-chip instrumentation-chip';
    instrumentationChip.textContent = work.instrumentation;
    meta.appendChild(instrumentationChip);
  }
  
  // Duration chip
  const durationChip = document.createElement('span');
  durationChip.className = 'meta-chip';
  durationChip.textContent = work.duration;
  meta.appendChild(durationChip);
  
  cardBody.appendChild(meta);
  
  const premiere = document.createElement('div');
  premiere.className = 'work-premiere';
  premiere.textContent = work.premiere;
  cardBody.appendChild(premiere);
  
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'work-buttons';
  
  // Score/Contact button logic
  if (work.needs_contact) {
    // Contact composer for score button (mailto link)
    const contactBtn = document.createElement('a');
    const emailAddress = data.email.replace(' [at] ', '@').replace(' [dot] ', '.');
    contactBtn.href = `mailto:${emailAddress}?subject=Score Request: ${work.title}`;
    contactBtn.textContent = 'Contact Composer for Score';
    contactBtn.className = 'btn btn--primary score-button';
    buttonContainer.appendChild(contactBtn);
  } else if (work.withdrawn) {
    // Not for performance button (grey, disabled)
    const notPerformanceBtn = document.createElement('button');
    notPerformanceBtn.textContent = 'Not for Performance';
    notPerformanceBtn.className = 'btn btn--outline btn--disabled';
    notPerformanceBtn.disabled = true;
    buttonContainer.appendChild(notPerformanceBtn);
  } else if (work.score_link) {
    // Regular view score button
    const scoreBtn = document.createElement('a');
    scoreBtn.href = work.score_link;
    scoreBtn.textContent = 'View Score';
    scoreBtn.className = 'btn btn--primary score-button';
    scoreBtn.target = '_blank';
    scoreBtn.rel = 'noopener noreferrer';
    buttonContainer.appendChild(scoreBtn);
  }
  
  // Listen button if recording exists
  if (data.recordings[work.title]) {
    const listenBtn = document.createElement('a');
    listenBtn.href = data.recordings[work.title];
    listenBtn.textContent = 'Listen';
    listenBtn.className = 'btn btn--secondary listen-button';
    listenBtn.target = '_blank';
    listenBtn.rel = 'noopener noreferrer';
    buttonContainer.appendChild(listenBtn);
  }
  
  cardBody.appendChild(buttonContainer);
  card.appendChild(cardBody);
  
  return card;
}

// Setup search functionality
function setupSearch() {
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    filterWorks(searchTerm);
  });
}

// Filter works based on search term
function filterWorks(searchTerm) {
  const allWorkCards = document.querySelectorAll('.work-card');
  const allCategories = document.querySelectorAll('.works-category');
  
  if (!searchTerm) {
    // Show all works and categories
    allWorkCards.forEach(card => card.classList.remove('hidden'));
    allCategories.forEach(category => category.classList.remove('hidden'));
    return;
  }
  
  // Filter works
  allWorkCards.forEach(card => {
    const title = card.getAttribute('data-title');
    if (title.includes(searchTerm)) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
  
  // Hide categories that have no visible works
  allCategories.forEach(category => {
    const visibleWorks = category.querySelectorAll('.work-card:not(.hidden)');
    if (visibleWorks.length === 0) {
      category.classList.add('hidden');
    } else {
      category.classList.remove('hidden');
    }
  });
}

// Route handling
function handleRoute() {
  const hash = window.location.hash.substring(1) || '/';
  const route = hash === '/' ? 'home' : hash.substring(1);
  
  // Hide all views
  views.forEach(view => view.classList.remove('active'));
  
  // Show current view
  const targetView = document.getElementById(route);
  if (targetView) {
    targetView.classList.add('active');
    currentView = route;
  } else {
    // Default to home if route not found
    document.getElementById('home').classList.add('active');
    currentView = 'home';
    window.location.hash = '#/';
  }
  
  // Update navigation active state
  updateNavigation();
  
  // Clear search when leaving works page
  if (route !== 'works' && searchInput) {
    searchInput.value = '';
    filterWorks('');
  }
}

// Update navigation active states
function updateNavigation() {
  navLinks.forEach(link => {
    link.classList.remove('active');
    const linkRoute = link.getAttribute('href').substring(2) || 'home';
    if (linkRoute === currentView) {
      link.classList.add('active');
    }
  });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
