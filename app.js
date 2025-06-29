// Application data
const data = {
  "works": [
    {"title":"Étude in Musical Machinery","year":2025,"category":"Orchestral & Large Ensemble","duration":"4′","premiere":"24 May 2025, KMH Stockholm; cond. Emil Eliasson","instrumentation":"Wind orchestra","score_link":"","withdrawn":false,"needs_contact":true},
    {"title":"Bajki","year":2025,"category":"Orchestral & Large Ensemble","duration":"8′","premiere":"25 Apr 2025, KMH Stockholm; horn Hilda Melin; cond. Wolfgang Durán","instrumentation":"Horn & chamber ensemble","score_link":"https://www.svenskmusik.org/en/works/bajki-folk-tales-191818","withdrawn":false},
    {"title":"ANGELUS","year":2024,"category":"Orchestral & Large Ensemble","duration":"15′","premiere":"28 Feb 2025, KMH Stockholm; cond. Luca Gliozzi","instrumentation":"Symphony orchestra","score_link":"https://www.svenskmusik.org/en/works/n-g-e-l-v-s-angelus-191655","withdrawn":false},
    {"title":"STARGAZING II","year":2024,"category":"Orchestral & Large Ensemble","duration":"18′","premiere":"TBA","instrumentation":"Solo trombone & strings","score_link":"https://www.svenskmusik.org/en/works/nachtmusik-186428","withdrawn":false},
    {"title":"Threnody XV","year":2024,"category":"Orchestral & Large Ensemble","duration":"11′","premiere":"5 & 9 Apr 2024, Stockholm/Vällingby; cond. Martin Thorell, Teo Hillberg, Benedikt Kantert","instrumentation":"Mixed chamber ensemble","score_link":"https://www.svenskmusik.org/en/works/threnody-xv-189806","withdrawn":false},
    {"title":"antiphon and chorale","year":2023,"category":"Orchestral & Large Ensemble","duration":"6′","premiere":"19 Jan 2024, KMH Stockholm; cond. Tom Poulson","instrumentation":"Brass ensemble","score_link":"https://www.svenskmusik.org/en/works/antiphon-and-chorale-187751","withdrawn":false},
    {"title":"Pilgrimages","year":2023,"category":"Orchestral & Large Ensemble","duration":"13′","premiere":"2 Apr 2023, Culturum, Nyköping; Nyköpings Filharmoniker, cond. Simon Crawford-Phillips","instrumentation":"Sinfonietta","score_link":"https://www.svenskmusik.org/en/works/pilgrimages-overture-rhapsodyfor-sinfonietta-180360","withdrawn":true},
    {"title":"THE RULES OF FORESTRY","year":2022,"category":"Orchestral & Large Ensemble","duration":"6′","premiere":"19 Nov 2022, Queen Silvia Concert Hall, Stockholm; cond. Mark Tatlow","instrumentation":"Chamber orchestra","score_link":"https://www.svenskmusik.org/en/works/the-rules-of-forestry-poem-for-chamber-orchestra-180550","withdrawn":false},
    {"title":"Kalemegdan and the Danube","year":2022,"category":"Orchestral & Large Ensemble","duration":"10′","premiere":"8 May 2022, KMH, Stockholm; cond. Hanna Ohlson Nordh","instrumentation":"Symphony orchestra","score_link":"","withdrawn":true},

    {"title":"ein traum…","year":2024,"category":"Chamber Music","duration":"5′","premiere":"4 Aug 2024, Ceplis, Latvia; Jānis Vītols, Vigovajk Sagvik & Anželika Levičeva","instrumentation":"Flute, cello, piano","score_link":"","withdrawn":false,"needs_contact":true},
    {"title":"echoes from the tatras","year":2023,"category":"Chamber Music","duration":"14′","premiere":"28 Apr 2024, Hjortenbergskyrkan Nyköping; Söndagskvartetten","instrumentation":"String quartet","score_link":"https://www.svenskmusik.org/en/works/echoes-from-the-tatras-187746","withdrawn":false},
    {"title":"STARGAZING I","year":2021,"category":"Chamber Music","duration":"10′","premiere":"12 Nov 2021, Folkets Hus, Årsta; Stockholm Saxophone Quartet","instrumentation":"Saxophone quartet","score_link":"https://www.svenskmusik.org/en/works/stargazing-i-179444","withdrawn":false},
    {"title":"Wycinanki","year":2021,"category":"Chamber Music","duration":"6′","premiere":"12 Nov 2021, Folkets Hus, Årsta; Herman Pellbäck, Benjamin Gillis & Vigovajk Sagvik","instrumentation":"Clarinet, cello, piano","score_link":"https://www.svenskmusik.org/en/works/wycinanki-trio-for-cello-clarinet-and-piano-179450","withdrawn":false},
    {"title":"Cogworks","year":2022,"category":"Chamber Music","duration":"5′","premiere":"12 Nov 2022, KMH, Stockholm","instrumentation":"Quartet","score_link":"","withdrawn":true},

    {"title":"Duo Concertante","year":2025,"category":"Solo & Duo","duration":"8′","premiere":"28 May 2025, Edsberg Castle, Sollentuna; Anica Mićić & Gabriel Punsvik Gluch","instrumentation":"Flute & cello","score_link":"https://www.svenskmusik.org/en/works/duo-concertante-191817","withdrawn":false},
    {"title":"...choć noc głęboka","year":2025,"category":"Solo & Duo","duration":"6′","premiere":"12 May 2025, KMH Stockholm; Jörgen Pettersson","instrumentation":"Solo alto saxophone","score_link":"https://www.svenskmusik.org/en/works/choc-noc-gleboka-though-the-night-is-vast-191816","withdrawn":false},
    {"title":"Jesień","year":2022,"category":"Solo & Duo","duration":"8′","premiere":"11 Feb 2023, MUBA, Tallinn; Maria Tepp & Kadri-Ann Sumera","instrumentation":"Cello & piano","score_link":"https://www.svenskmusik.org/en/works/jesien-184377","withdrawn":false},
    {"title":"the sleep of reason","year":2021,"category":"Solo & Duo","duration":"10′","premiere":"13 Nov 2021, KMH Stockholm; Ester Stålberg & Miłosz Krawczyk","instrumentation":"Violin & piano","score_link":"https://www.svenskmusik.org/en/works/the-sleep-of-reason-or-metamorphoses-179531","withdrawn":false},

    {"title":"O, przyjdź do mnie","year":2023,"category":"Choral & Vocal","duration":"4′","premiere":"17 Nov 2023, Queen Silvia Concert Hall, Stockholm; En Kör","instrumentation":"SATB choir","score_link":"https://www.svenskmusik.org/en/works/o-przyjdz-do-mnie-187090","withdrawn":false},
    {"title":"in the waters of purity","year":2022,"category":"Choral & Vocal","duration":"6′","premiere":"11 Feb 2023, MUBA, Tallinn; Iris Oja & Kadri-Ann Sumera","instrumentation":"Soprano & piano","score_link":"https://www.svenskmusik.org/en/works/in-the-waters-of-purity-184307","withdrawn":false},
    {"title":"Himlen har landat","year":2020,"category":"Choral & Vocal","duration":"4′","premiere":"29 Oct 2023, Strängnäs Cathedral","instrumentation":"SATB & organ","score_link":"","withdrawn":true}
  ],
  "recordings": {
    "soundcloud":"https://soundcloud.com/mkrawczykcomposer",
    "youtube":"https://www.youtube.com/@mkrawczykcomposer/videos",
    "STARGAZING I":"https://soundcloud.com/mkrawczykcomposer/stargazing-i-2021",
    "Wycinanki":"https://soundcloud.com/mkrawczykcomposer/wycinanki-2021",
    "Kalemegdan and the Danube":"https://soundcloud.com/mkrawczykcomposer/kalemegdan-and-the-danube-2022",
    "the sleep of reason":"https://soundcloud.com/mkrawczykcomposer/the-sleep-of-reason",
    "THE RULES OF FORESTRY":"https://soundcloud.com/mkrawczykcomposer/the-rules-of-forestry-2022",
    "Jesień":"https://soundcloud.com/mkrawczykcomposer/jesien",
    "in the waters of purity":"https://soundcloud.com/mkrawczykcomposer/in-the-waters-of-purity-2022",
    "O, przyjdź do mnie":"https://soundcloud.com/mkrawczykcomposer/o-przyjdz-do-mnie-2023",
    "antiphon and chorale":"https://soundcloud.com/mkrawczykcomposer/antiphon-and-chorale-2024",
    "echoes from the tatras":"https://soundcloud.com/mkrawczykcomposer/string-quartet-echoes-from-the-tatras-2023/s-MoydMzfaJc3",
    "Threnody XV":"https://soundcloud.com/mkrawczykcomposer/threnody-xv-2024",
    "ANGELUS":"https://soundcloud.com/mkrawczykcomposer/angelus-2024",
    "Étude in Musical Machinery": "https://soundcloud.com/mkrawczykcomposer/etude-in-musical-machinery-2025/s-vW4dQ98qrvS?si=77075243e9e74bf199d514c0bd4832b2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
"Bajki": "https://soundcloud.com/mkrawczykcomposer/horn-concertino-bajki-2025/s-BGLqJpzH2KI?si=954bd41a73e64dcfa86cd14a6656f557&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
  },
  "upcoming":[
    {"title":"Clarinet Quintet","premiere":"4 Sep 2025, Finlandsinstitutet, Stockholm","description":"Waves Arts Lab","link":"https://www.berwaldhallen.se/konsert/waves-arts-lab-med-voksenasen"},
    {"title":"l'amor che move il sole…","premiere":"TBA","description":"New orchestral work","link":""}
  ],
   "bios": {
    "short": "Miłosz Krawczyk (b. 2004) is a Swedish-Polish composer inspired by sacred traditions, folk idioms, and Eastern-European modernism.",

    "medium": "Miłosz Krawczyk (b. 2004) is a Swedish-Polish composer whose music is shaped by sacred traditions, folk idioms, and the expressive intensity of Eastern European modernism.\n\nHe began his musical journey in Nyköping before studying composition, piano, and conducting at Lilla Akademien in Stockholm. There, he was mentored by Matthew Peterson, Daniel Nelson, Martin Sturfält, and Mika Eichenholz, and also received private instruction from Professor Krzysztof Grzeszczak in Łódź, Poland.\n\nHe is currently pursuing a bachelor's degree in composition at the Royal College of Music in Stockholm (KMH), where he studies under Djuro Živković. A key mentor in his artistic development has also been conductor Christian Karlsen.\n\nAt just 17, Krawczyk made his orchestral debut at KMH with his first symphonic work. The following year, he was commissioned by the Nyköping Philharmonic Society to write an orchestral overture, a piece that garnered considerable media attention.\n\nSince then, his music has been performed across Sweden and the Baltics by leading ensembles and soloists, including the Stockholm Saxophone Quartet, the Stockholm Wind Symphony, and the choir En Kör.\n\nIn February 2025, his large-scale orchestral work *Angelus* premiered to great acclaim.",

    "long": "Miłosz Krawczyk (b. 2004) is a Swedish-Polish composer whose music is shaped by sacred traditions, folk idioms, and the expressive intensity of Eastern European modernism.\n\nHe began his musical journey in Nyköping before studying composition, piano, and conducting at Lilla Akademien in Stockholm. There, he was mentored by Matthew Peterson, Daniel Nelson, Martin Sturfält, and Mika Eichenholz, and also received private instruction from Professor Krzysztof Grzeszczak in Łódź, Poland.\n\nHe is currently pursuing a bachelor's degree in composition at the Royal College of Music in Stockholm (KMH), where he studies under Djuro Živković. A key mentor in his artistic development has also been conductor Christian Karlsen.\n\nAt just 17, Krawczyk made his orchestral debut at KMH with his first symphonic work. The following year, he was commissioned by the Nyköping Philharmonic Society to write an orchestral overture, a piece that garnered considerable media attention.\n\nSince then, his music has been performed across Sweden and the Baltics by leading ensembles and soloists, including the Stockholm Saxophone Quartet, the Stockholm Wind Symphony, and the choir En Kör.\n\nIn February 2025, his large-scale orchestral work Angelus premiered to great acclaim.\n\nKrawczyk has been awarded scholarships from prestigious institutions such as the Royal Swedish Academy of Music, the Bifrost Order, O/Modernt, and the Karin and Einar Blomsjö Foundation. In 2024, he was selected for a residency program at the Bogliasco Foundation in Italy.\n\nIn addition to composing, he is active as an arranger, pianist, and conductor. His arrangements have been commissioned by and performed at major venues, including the Stockholm Concert Hall.\n\nKnown for his eloquence and passion for music history, he has also been invited to lecture on the subject, receiving praise for his engaging and insightful presentations.\n\nBeyond music, Krawczyk enjoys poetry and literature, exploring nature on long cycling trips, and playing electric bass in a rock band with friends."
  },
  "email": "mkrawczykcomposer [at] hotmail [dot] com",
  "awards": ["Voksenåsen Music Academies, composer talent (2025)","Susanne Hobohms Stiftelse Recipient (2025)","Karin och Einar Blomsjö music scholarship (2024)","Nils Mörner scholarship (2023)","Royal Swedish Academy of Music scholarship (2023)","Bifrostorden – Bifrostpriset scholarship (2022) – two-time recipient","O/Modernt / Arvo Pärt Centre scholarship and educational trip (2021/2022) – two-time recipient","Sten Davidsson's Foundation scholarship (2020/2021) – two-time recipient","Nyköping Rotary Club scholarship (2020)"]
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

  if (work.description) {
  // Create description paragraph, hidden by default
  const descPara = document.createElement('p');
  descPara.className = 'work-description hidden'; // hidden class hides it initially
  descPara.textContent = work.description;
  cardBody.appendChild(descPara);

  // Create toggle button
  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'btn btn--outline btn--sm work-desc-toggle';
  toggleBtn.textContent = 'Show More';

  toggleBtn.addEventListener('click', () => {
    const isHidden = descPara.classList.contains('hidden');
    if (isHidden) {
      descPara.classList.remove('hidden');
      toggleBtn.textContent = 'Show Less';
    } else {
      descPara.classList.add('hidden');
      toggleBtn.textContent = 'Show More';
    }
  });

  cardBody.appendChild(toggleBtn);
}

}
  
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
