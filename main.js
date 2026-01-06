/* ===============================
   B2H GLOBAL FOUNDATION - HERO & FOUNDER ANIMATIONS
=============================== */

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  /* ====== HERO PARTICLES ====== */
  const particlesContainer = document.querySelector('.particles');
  const numParticles = 30;

  // Generate particles dynamically
  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('span');
    const size = Math.random() * 8 + 4; // size between 4-12px
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const delay = Math.random() * 10; // animation delay

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.animationDelay = `${delay}s`;

    particlesContainer.appendChild(particle);
  }

  /* ====== FADE-IN ON SCROLL ====== */
  const fadeElems = document.querySelectorAll('.hero-inner, .founder-section h2, .founder-intro, .founder-text');

  const fadeInOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    fadeElems.forEach(elem => {
      const top = elem.getBoundingClientRect().top;

      if (top < triggerBottom) {
        elem.classList.add('fade-in');
      }
    });
  };

  window.addEventListener('scroll', fadeInOnScroll);
  fadeInOnScroll(); // run on load

});

/* ===== HERO PARALLAX ON MOUSE MOVE ===== */
const hero = document.querySelector('.hero-inner');
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 15; // horizontal movement
  const y = (e.clientY / window.innerHeight - 0.5) * 15; // vertical movement
  hero.style.transform = `translate(${x}px, ${y}px)`;
});
