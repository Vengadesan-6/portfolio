/* ==========================================================================
   AMBIENT GOLDEN HOUR LIGHTING & 3D TILT EFFECTS
   Dynamic mouse-following ambient lighting & interactive Polaroid tilt
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initGoldenHourLighting();
  initPolaroidTilt();
  initMagneticButtons();
});

// Smooth Mouse Tracking for Golden Hour Glow
function initGoldenHourLighting() {
  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 3;
  let currentX = targetX;
  let currentY = targetY;

  window.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  // Smooth lerp loop
  function animateLighting() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    document.documentElement.style.setProperty('--mouse-x', `${currentX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${currentY}px`);

    requestAnimationFrame(animateLighting);
  }

  animateLighting();
}

// 3D Polaroid Card Tilt Physics
function initPolaroidTilt() {
  const card = document.querySelector('.polaroid-card');
  if (!card) return;

  const wrapper = document.querySelector('.hero-visual-wrapper');
  if (!wrapper) return;

  wrapper.addEventListener('mousemove', (e) => {
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12; // Max 12 deg
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.03, 1.03, 1.03)`;
  });

  wrapper.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(-2deg) scale3d(1, 1, 1)';
  });
}

// Magnetic Button Micro-interaction
function initMagneticButtons() {
  const magneticButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .sound-toggle-btn');

  magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}
