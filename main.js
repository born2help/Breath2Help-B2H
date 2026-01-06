document.addEventListener("DOMContentLoaded", () => {

  /* ===== HERO PARTICLES ===== */
  const particlesContainer = document.querySelector('.particles');
  const numParticles = 40;
  const particles = [];

  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('span');
    const size = Math.random() * 8 + 4;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particlesContainer.appendChild(particle);
    particles.push({el: particle, x, y});
  }

  /* ===== PARTICLES FOLLOW MOUSE ===== */
  document.addEventListener('mousemove', e => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    particles.forEach(p => {
      const dx = (mouseX - p.x) * 0.02;
      const dy = (mouseY - p.y) * 0.02;
      p.el.style.transform = `translate(${dx}px, ${dy}px)`;
    });
  });

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

  /* ===== TYPED HERO TEXT ===== */
  const typedText = document.getElementById('typed-text');
  const phrases = ["Empowering Humanity", "Spreading Hope", "Building Futures", "One Helping Hand"];
  let i = 0, j = 0, currentText = "", isDeleting = false;

  function type() {
    const fullText = phrases[i];
    if (!isDeleting) {
      currentText = fullText.substring(0, j+1);
      typedText.textContent = currentText;
      j++;
      if (currentText === fullText) {
        isDeleting = true;
        setTimeout(type, 1500);
        return;
      }
    } else {
      currentText = fullText.substring(0, j-1);
      typedText.textContent = currentText;
      j--;
      if (currentText === "") {
        isDeleting = false;
        i = (i + 1) % phrases.length;
      }
    }
    setTimeout(type, isDeleting ? 60 : 120);
  }
  type();

});

/* ===== FOUNDER SLIDE-IN ===== */
const founderTexts = document.querySelectorAll('.founder-text');

const founderObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.3 });

founderTexts.forEach(text => founderObserver.observe(text));
