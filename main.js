/* ================= HERO BG PARTICLES ================= */
const hero = document.querySelector('.hero');
const bgParticles = document.querySelectorAll('.bg-particles span');

bgParticles.forEach(p => {
  p.style.left = Math.random() * 100 + '%';
  const size = 3 + Math.random() * 6;
  p.style.width = p.style.height = size + 'px';
  p.style.animationDuration = 10 + Math.random() * 15 + 's';
  p.style.animationDelay = Math.random() * 10 + 's';
});

// Hero lines animation
document.querySelectorAll('.hero-content .line').forEach((line, index) => {
  line.style.animationDelay = (index * 0.3) + 's';
  line.classList.add('slide-in');
});

// Add 3D depth float to hero content
const heroContent = document.querySelector('.hero-content');
if(heroContent) heroContent.classList.add('depth-float');

/* ================= HERO MOUSE PARALLAX ================= */
const parallaxLayers = document.querySelectorAll('.depth-bg, .depth-mid, .depth-logo, .depth-front');
hero.addEventListener('mousemove', e => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const moveX = (e.clientX - centerX) / centerX;
  const moveY = (e.clientY - centerY) / centerY;

  parallaxLayers.forEach(layer => {
    const depth = layer.className.match(/depth-(\w+)/)[1] || '1';
    let multiplier = 10;
    switch(depth){
      case 'bg': multiplier = 5; break;
      case 'mid': multiplier = 15; break;
      case 'logo': multiplier = 8; break;
      case 'front': multiplier = 12; break;
    }
    layer.style.transform = `translate(${moveX * multiplier}px, ${moveY * multiplier}px)`;
  });
});

/* ================= MOUSE FOLLOWING PARTICLES ================= */
const mouseParticles = [];
for (let i = 0; i < 15; i++) {
  const p = document.createElement('div');
  p.classList.add('mouse-particle'); // CSS controls size, color, opacity
  hero.appendChild(p);
  mouseParticles.push(p);
}

hero.addEventListener('mousemove', e => {
  mouseParticles.forEach((p, idx) => {
    const offset = idx * 6;
    p.style.transform = `translate(${e.clientX + offset}px, ${e.clientY + offset}px)`;
  });
});

/* ================= FOUNDER TEXT SLIDE IN ON VIEW ================= */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.5 });

document.querySelectorAll(".founder-text").forEach(el => observer.observe(el));

/* ================= FOUNDER PARTICLE AURA ================= */
const founderImage = document.querySelector('.founder-image');
if (founderImage) {
  const auraContainer = document.createElement('div');
  auraContainer.classList.add('founder-aura');

  for (let i = 0; i < 15; i++) {
    const particle = document.createElement('span');
    const angle = Math.random() * 2 * Math.PI;
    const radius = 60 + Math.random() * 40;
    particle.style.setProperty('--x', `${radius * Math.cos(angle)}px`);
    particle.style.setProperty('--y', `${radius * Math.sin(angle)}px`);
    particle.style.animationDelay = `${Math.random() * 2}s`;
    auraContainer.appendChild(particle);
  }

  founderImage.appendChild(auraContainer);
}

/* ================= FLOATING GLOW BEHIND CARDS ================= */
function createCardGlows(sectionClass, numGlows = 8) {
  const section = document.querySelector(sectionClass);
  if (!section) return;
  for (let i = 0; i < numGlows; i++) {
    const glow = document.createElement('div');
    glow.classList.add('card-glow'); // CSS handles size, position, animation
    section.appendChild(glow);
  }
}

// Add card glows — let CSS handle styling
createCardGlows('.governance-section', 10);
createCardGlows('.constitution-section', 10);
createCardGlows('.trustee-section', 10);

/* ================= TOKENOMICS PARTICLE PARALLAX ================= */
const tokenParticles = document.querySelectorAll('.tokenomics-particles span');
document.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth) - 0.5;
  const y = (e.clientY / window.innerHeight) - 0.5;
  tokenParticles.forEach((particle, index) => {
    const speed = (index + 1) * 5;
    particle.style.transform = `translate(${x*speed}px, ${y*speed - 20}px)`;
  });
});

/* ================= FADE-IN ON SCROLL ================= */
const fadeElements = document.querySelectorAll('.token-box, .section-title, .section-intro, .flow-list li, .roadmap-list li');

const fadeOnScroll = () => {
  const triggerBottom = window.innerHeight / 5 * 4;
  fadeElements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    if(elTop < triggerBottom) el.classList.add('active');
    else el.classList.remove('active');
  });
};

window.addEventListener('scroll', fadeOnScroll);
fadeOnScroll();

/* ================= STICKY HERO NAVIGATION & SMOOTH SCROLL ================= */
const heroNav = document.querySelector('.hero-action');
const navOffset = heroNav ? heroNav.offsetTop : 0;

window.addEventListener('scroll', () => {
  if (!heroNav) return;
  if (window.scrollY > navOffset) heroNav.classList.add('sticky');
  else heroNav.classList.remove('sticky');
});

document.querySelectorAll('.hero-nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// ================== CARD HOVER + GLOW EFFECT ==================

// Select all card types
const cardSelectors = [
  '.asset-card',
  '.charity-card',
  '.board-card',
  '.mv-card'
];

cardSelectors.forEach(selector => {
  const cards = document.querySelectorAll(selector);
  
  cards.forEach(card => {
    // Create glow element
    const glow = document.createElement('div');
    glow.classList.add('card-hover-glow');
    card.style.position = 'relative';
    glow.style.position = 'absolute';
    glow.style.top = '50%';
    glow.style.left = '50%';
    glow.style.transform = 'translate(-50%, -50%) scale(0)';
    glow.style.width = '120%';
    glow.style.height = '120%';
    glow.style.background = 'radial-gradient(circle, rgba(34, 197, 94, 0.5), rgba(34, 197, 94, 0))';
    glow.style.borderRadius = '15px';
    glow.style.pointerEvents = 'none';
    glow.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
    glow.style.opacity = '0';
    glow.style.zIndex = '0';
    card.appendChild(glow);

    // Hover effect
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
      card.style.transition = 'transform 0.4s ease';
      glow.style.transform = 'translate(-50%, -50%) scale(1)';
      glow.style.opacity = '1';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      glow.style.transform = 'translate(-50%, -50%) scale(0)';
      glow.style.opacity = '0';
    });
  });
});
