// ================= MAIN.JS =================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

  // ------------------ Tokenomics Bar Animation ------------------
  const fills = document.querySelectorAll('.fill');

  function animateTokenBars() {
    fills.forEach(fill => {
      const percentage = fill.dataset.percentage || fill.style.width;
      fill.style.width = percentage;
    });
  }

  // Animate bars when they enter viewport
  const tokenSection = document.getElementById('tokenomics');
  const tokenObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        animateTokenBars();
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.5});

  if(tokenSection){
    tokenObserver.observe(tokenSection);
  }

  // ------------------ Scroll Reveal Animations ------------------
  const scrollElements = document.querySelectorAll('.hero-inner, .why-card, .roadmap-card, .gc-card, .founder-container, .v3-box');

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.3});

  scrollElements.forEach(el => scrollObserver.observe(el));

  // ------------------ Smooth Anchor Scroll ------------------
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if(target){
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
