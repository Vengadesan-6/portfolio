/* ==========================================================================
   PROJECTS DATA & MODAL CONTROLLER
   Rich case studies with tech stacks, links, outcomes & images
   ========================================================================== */

const PROJECTS_DATA = [
  {
    id: 'aether-studio',
    title: 'Aether Audio Synthesizer',
    category: 'creative',
    categoryLabel: 'Creative / WebGL',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop',
    description: 'A browser-based generative audio workstation combining Web Audio API node graphs with real-time WebGL frequency visualizers.',
    tags: ['Web Audio API', 'WebGL', 'TypeScript', 'GLSL Shaders', 'Vite'],
    githubUrl: 'https://github.com/example/aether-studio',
    liveUrl: 'https://example.com/aether-studio',
    year: '2025',
    role: 'Lead Audio/Graphics Engineer',
    caseStudy: {
      challenge: 'Building a zero-latency audio engine in the browser capable of polyphonic subtractive synthesis while driving 60 FPS real-time shader reactive visualizers.',
      solution: 'Implemented custom AudioWorklet processors with shared array buffers, decoupled the audio thread from the main rendering loop, and designed a custom GLSL raymarching shader reacting to audio frequency bins.',
      results: [
        'Over 140,000 monthly active music creators',
        'Sub-12ms audio buffer latency on mobile and desktop browsers',
        'Featured in Awwwards & Site of the Day nominee'
      ]
    }
  },
  {
    id: 'chronicle-cms',
    title: 'Chronicle Editorial Platform',
    category: 'web-apps',
    categoryLabel: 'Web Applications',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop',
    description: 'A 90s-inspired minimalist publication engine for long-form essays, typography enthusiasts, and independent publishers.',
    tags: ['React', 'Next.js', 'PostgreSQL', 'Tailwind/CSS', 'TipTap'],
    githubUrl: 'https://github.com/example/chronicle-cms',
    liveUrl: 'https://example.com/chronicle-cms',
    year: '2024',
    role: 'Full Stack Architect',
    caseStudy: {
      challenge: 'Modern content management tools often overwhelm writers with cluttered menus and heavy JS bundles, sacrificing readability and fast load times.',
      solution: 'Engineered a distraction-free writing environment with custom variable font typography pairing, real-time markdown AST parsing, and ultra-fast edge caching.',
      results: [
        '100/100 Lighthouse performance and SEO scores',
        'Adopted by 45+ independent literary magazines',
        'Average page weight under 85KB'
      ]
    }
  },
  {
    id: 'lumina-design',
    title: 'Lumina Design System',
    category: 'design-systems',
    categoryLabel: 'Design Systems',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
    description: 'An accessible, multi-brand design system with dynamic theme tokens, fluid typography scales, and 40+ production-grade components.',
    tags: ['Figma Tokens', 'CSS Variables', 'Storybook', 'WCAG AAA', 'React'],
    githubUrl: 'https://github.com/example/lumina-design',
    liveUrl: 'https://example.com/lumina-design',
    year: '2024',
    role: 'Design Technologist',
    caseStudy: {
      challenge: 'Unifying design patterns across 6 enterprise web properties while enforcing strict WCAG 2.2 AAA accessibility compliance.',
      solution: 'Created an automated token pipeline translating Figma variables directly into CSS Custom Properties and TypeScript definitions, paired with rigorous keyboard navigation harnesses.',
      results: [
        'Reduced UI design-to-production time by 42%',
        '100% test coverage for accessibility keyboard shortcuts and ARIA semantics',
        'Zero regressions across 12 product launches'
      ]
    }
  },
  {
    id: 'solstice-travel',
    title: 'Solstice Editorial Travelogue',
    category: 'web-apps',
    categoryLabel: 'Web Applications',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop',
    description: 'An immersive cinematic digital magazine showcasing architectural wonders, train journeys, and golden hour photographic essays.',
    tags: ['Vanilla JS', 'Mapbox GL', 'GSAP ScrollTrigger', 'CSS Grid'],
    githubUrl: 'https://github.com/example/solstice-travel',
    liveUrl: 'https://example.com/solstice-travel',
    year: '2023',
    role: 'Creative Developer',
    caseStudy: {
      challenge: 'Creating fluid, magazine-style scrollytelling with high-res photography without degrading smooth scrolling performance.',
      solution: 'Implemented progressive multi-tier image hydration, offscreen canvas pre-rendering, and customized GSAP timeline hooks.',
      results: [
        'Average session duration exceeding 4 minutes 30 seconds',
        'FWA of the Day winner in 2023',
        'Flawless 60 FPS scroll performance across low-power mobile devices'
      ]
    }
  },
  {
    id: 'velox-motion',
    title: 'Velox Physics Motion Engine',
    category: 'creative',
    categoryLabel: 'Creative / Libraries',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    description: 'A featherlight (3.8kb) spring physics and gesture animation library designed for tactile micro-interactions and mobile touch gestures.',
    tags: ['TypeScript', 'Spring Physics', 'Micro-interactions', 'Open Source'],
    githubUrl: 'https://github.com/example/velox-motion',
    liveUrl: 'https://example.com/velox-motion',
    year: '2023',
    role: 'Author & Maintainer',
    caseStudy: {
      challenge: 'Existing animation libraries often had large bundle sizes or lacked fluid spring physics for gesture drag-and-drop mechanics.',
      solution: 'Derived a custom Runge-Kutta numerical integrator with zero external dependencies and adaptive sub-stepping for smooth 120Hz ProMotion displays.',
      results: [
        '3,200+ GitHub Stars',
        'Under 4KB gzipped footprint',
        'Integrated by over 800 open-source repositories'
      ]
    }
  },
  {
    id: 'nostalgia-tape',
    title: 'Nostalgia Lo-Fi Tape Studio',
    category: 'creative',
    categoryLabel: 'Creative / Audio',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop',
    description: 'An interactive virtual 90s cassette player recreating analog tape saturation, flutter, and warm lo-fi tape degradation algorithms.',
    tags: ['Web Audio API', 'Tape Saturation', 'Canvas 2D', 'CSS 3D'],
    githubUrl: 'https://github.com/example/nostalgia-tape',
    liveUrl: 'https://example.com/nostalgia-tape',
    year: '2025',
    role: 'Creator',
    caseStudy: {
      challenge: 'Simulating the warmth, harmonic distortion, and mechanical reel friction of vintage tape decks in pure browser JavaScript.',
      solution: 'Combined polynomial waveshaper distortion curves, random low-frequency wow/flutter pitch modulation, and vintage reel graphics.',
      results: [
        'Praised by music production subreddits & Hacker News top 5',
        'Zero external audio samples required — 100% generative synthesis',
        'Built-in vintage tape presets'
      ]
    }
  }
];

// Initialize Projects Display & Event Handlers
function initProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  const filterPills = document.querySelectorAll('.filter-pill');
  
  if (!projectsGrid) return;

  // Render project cards
  renderProjects(PROJECTS_DATA);

  // Category Filter Listener
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.getAttribute('data-filter');
      if (filter === 'all') {
        renderProjects(PROJECTS_DATA);
      } else {
        const filtered = PROJECTS_DATA.filter(proj => proj.category === filter);
        renderProjects(filtered);
      }
      
      // Play audio click if sound is enabled
      if (window.audioFx) window.audioFx.playClick();
    });
  });
}

function renderProjects(projects) {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;

  projectsGrid.innerHTML = '';

  if (projects.length === 0) {
    projectsGrid.innerHTML = `<p class="font-mono text-muted">No projects found in this category.</p>`;
    return;
  }

  projects.forEach((proj, idx) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-project-id', proj.id);
    card.style.animationDelay = `${idx * 0.08}s`;

    card.innerHTML = `
      <div class="card-media-box">
        <img src="${proj.image}" alt="${proj.title}" loading="lazy">
        <span class="card-category-badge">${proj.categoryLabel}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">
          ${proj.title}
          <span class="card-arrow">&rarr;</span>
        </h3>
        <p class="card-description">${proj.description}</p>
        <div class="card-tags">
          ${proj.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
        </div>
        <div class="card-footer-actions">
          <button class="card-link-btn" onclick="openProjectModal('${proj.id}')">
            Read Case Study &rarr;
          </button>
          <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="card-github-link" title="View Source Code" onclick="event.stopPropagation();">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </div>
    `;

    // Click anywhere on card opens modal
    card.addEventListener('click', (e) => {
      // Don't trigger if clicked on an actual link
      if (e.target.closest('a')) return;
      openProjectModal(proj.id);
    });

    projectsGrid.appendChild(card);
  });
}

// Open Modal with Full Case Study
function openProjectModal(projectId) {
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;

  const modalBackdrop = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content-target');

  if (!modalBackdrop || !modalContent) return;

  modalContent.innerHTML = `
    <img src="${project.image}" alt="${project.title}" class="modal-hero-img">
    <div class="modal-body">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
        <span class="section-tag">${project.categoryLabel}</span>
        <span class="font-mono text-muted" style="font-size: 0.8125rem;">YEAR: ${project.year} • ${project.role}</span>
      </div>
      <h2 style="font-size: 2.25rem; margin-bottom: 1rem; color: var(--text-primary);">${project.title}</h2>
      <p style="font-size: 1.1rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 2rem;">
        ${project.description}
      </p>

      <div style="margin-bottom: 2rem;">
        <h4 style="font-size: 1.15rem; margin-bottom: 0.75rem; color: var(--accent-amber);">The Engineering Challenge</h4>
        <p style="color: var(--text-secondary); line-height: 1.65;">${project.caseStudy.challenge}</p>
      </div>

      <div style="margin-bottom: 2rem;">
        <h4 style="font-size: 1.15rem; margin-bottom: 0.75rem; color: var(--accent-amber);">Architectural Solution</h4>
        <p style="color: var(--text-secondary); line-height: 1.65;">${project.caseStudy.solution}</p>
      </div>

      <div style="margin-bottom: 2.5rem; background: var(--bg-cream-alt); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
        <h4 style="font-size: 1.05rem; margin-bottom: 0.75rem; color: var(--text-primary);">Key Outcomes & Metrics</h4>
        <ul style="padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.8;">
          ${project.caseStudy.results.map(res => `<li>${res}</li>`).join('')}
        </ul>
      </div>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-subtle); padding-top: 1.5rem;">
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          ${project.tags.map(tag => `<span class="tech-tag" style="padding: 0.35rem 0.65rem;">${tag}</span>`).join('')}
        </div>
        <div style="display: flex; gap: 1rem;">
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            View GitHub
          </a>
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-glow">
            Launch Live Demo &rarr;
          </a>
        </div>
      </div>
    </div>
  `;

  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';

  if (window.audioFx) window.audioFx.playClick();
}

function closeProjectModal() {
  const modalBackdrop = document.getElementById('project-modal');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Global modal close triggers
document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.getElementById('modal-close-btn');
  const modalBackdrop = document.getElementById('project-modal');

  if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeProjectModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
  });
});
