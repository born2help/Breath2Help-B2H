document.addEventListener("DOMContentLoaded", () => {

  /* ===== HERO PARTICLES ===== */
  const particlesContainer = document.querySelector('.particles');
  const numParticles = 30;
  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('span');
    const size = Math.random() * 8 + 4;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const delay = Math.random() * 10;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.animationDelay = `${delay}s`;
    particlesContainer.appendChild(particle);
  }

  /* ===== FADE-IN ON SCROLL ===== */
  const fadeElems = document.querySelectorAll('.hero-inner, .founder-section h2, .founder-intro, .founder-text');
  const fadeInOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    fadeElems.forEach(elem => {
      if (elem.getBoundingClientRect().top < triggerBottom) {
        elem.classList.add('fade-in');
      }
    });
  };
  window.addEventListener('scroll', fadeInOnScroll);
  fadeInOnScroll();

  /* ===== HERO PARALLAX ===== */
  const hero = document.querySelector('.hero-inner');
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 15;
    const y = (e.clientY / window.innerHeight - 0.5) * 15;
    hero.style.transform = `translate(${x}px, ${y}px)`;
  });
});
