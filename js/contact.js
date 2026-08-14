/* ==========================================================================
   CONTACT FORM, CLIPBOARD ACTIONS & TOAST NOTIFICATIONS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  initCopyEmail();
  initCassetteControls();
});

// Toast notification helper
function showToast(message, duration = 3500) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-amber);">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 14 14"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}
window.showToast = showToast;

// Contact Form Submission & Validation
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');
    const submitBtn = document.getElementById('contact-submit-btn');

    if (!nameInput || !emailInput || !messageInput || !submitBtn) return;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Basic Validation
    if (!name || !email || !message) {
      showToast('Please fill in all required fields.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('Please enter a valid email address.');
      return;
    }

    // Play click
    if (window.audioFx) window.audioFx.playClick();

    // Submit Simulation
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span>Transmitting Message...</span>`;
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = `<span>✓ Message Sent Successfully!</span>`;
      submitBtn.style.background = '#2E7D32';
      submitBtn.style.borderColor = '#2E7D32';

      showToast(`Thank you ${name}! Your message has been dispatched.`);
      form.reset();

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.style.background = '';
        submitBtn.style.borderColor = '';
      }, 4000);
    }, 1200);
  });
}

// Copy Email Button
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = 'hello@marcuschen.design';
    navigator.clipboard.writeText(email).then(() => {
      showToast(`Copied ${email} to clipboard!`);
      if (window.audioFx) window.audioFx.playClick();
    }).catch(() => {
      showToast(`Email: ${email}`);
    });
  });
}

// Cassette Deck Play / Stop button binding
function initCassetteControls() {
  const playBtn = document.getElementById('cassette-play-btn');
  const display = document.getElementById('deck-status-display');
  if (!playBtn) return;

  playBtn.addEventListener('click', () => {
    if (!window.audioFx) return;

    const isPlaying = window.audioFx.toggleAmbientTape();
    if (isPlaying) {
      playBtn.classList.add('active');
      playBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
        <span>PAUSE TAPE</span>
      `;
      if (display) display.innerText = 'PLAYING: [SIDE A] WARM CHORDS';
      showToast('Cassette Deck: Playing 90s Lo-Fi Ambient Synth');
    } else {
      playBtn.classList.remove('active');
      playBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
        <span>PLAY TAPE</span>
      `;
      if (display) display.innerText = 'STOPPED: [TAPE READY]';
      showToast('Cassette Deck: Paused');
    }
  });
}
