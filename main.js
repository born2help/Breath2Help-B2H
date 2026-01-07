// ================== HERO PARALLAX & PARTICLES ==================
const hero = document.querySelector('.hero');
const parallaxLayers = document.querySelectorAll('.parallax-layer');

// Floating background particles
const bgParticles = document.querySelectorAll('.particles span');
bgParticles.forEach(p => {
  p.style.left = Math.random() * window.innerWidth + 'px';
  p.style.bottom = Math.random() * 50 + 'px';
  p.style.width = 4 + Math.random() * 6 + 'px';
  p.style.height = p.style.width;
  p.style.animationDuration = 8 + Math.random() * 6 + 's';
});

// Hero lines animation
document.querySelectorAll('.hero-content .line').forEach((line, index) => {
  line.style.animationDelay = (index * 0.3) + 's';
  line.classList.add('slide-in');
});

// Add 3D depth float to hero content
const heroContent = document.querySelector('.hero-content');
heroContent.classList.add('depth-float');

// Optional: you can combine with mouse parallax for extra 3D feel
hero.addEventListener('mousemove', e => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const moveX = (e.clientX - centerX) / centerX;
  const moveY = (e.clientY - centerY) / centerY;

  // Parallax for layers
  parallaxLayers.forEach(layer => {
    const depth = parseFloat(layer.className.match(/depth-(\w+)/)[1] || 1);
    let multiplier = 0;
    switch(depth){
      case 'bg': multiplier = 5; break;
      case 'mid': multiplier = 15; break;
      case 'logo': multiplier = 8; break;
      case 'front': multiplier = 12; break; // increase for content
      default: multiplier = 10;
    }
    layer.style.transform = `translate(${moveX * multiplier}px, ${moveY * multiplier}px)`;
  });
});

// ================== MOUSE FOLLOWING PARTICLES ==================
const mouseParticles = [];
for (let i = 0; i < 15; i++) {
  const p = document.createElement('div');
  p.classList.add('mouse-particle');
  p.style.width = p.style.height = (3 + Math.random() * 4) + 'px';
  p.style.position = 'absolute';
  p.style.background = 'rgba(255,255,255,0.35)';
  p.style.borderRadius = '50%';
  p.style.pointerEvents = 'none';
  p.style.transition = 'transform 0.1s linear';
  hero.appendChild(p);
  mouseParticles.push(p);
}

hero.addEventListener('mousemove', e => {
  mouseParticles.forEach((p, idx) => {
    const offset = idx * 6;
    p.style.transform = `translate(${e.clientX + offset}px, ${e.clientY + offset}px)`;
  });
});

// ================== PARALLAX MOVEMENT ON MOUSE ==================
hero.addEventListener('mousemove', e => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const moveX = (e.clientX - centerX) / centerX;
  const moveY = (e.clientY - centerY) / centerY;

  parallaxLayers.forEach(layer => {
    const depth = parseFloat(layer.className.match(/depth-(\w+)/)[1] || 1);
    let multiplier = 0;
    switch(depth){
      case 'bg': multiplier = 5; break;
      case 'mid': multiplier = 15; break;
      case 'logo': multiplier = 8; break;
      case 'front': multiplier = 10; break;
      default: multiplier = 10;
    }
    layer.style.transform = `translate(${moveX * multiplier}px, ${moveY * multiplier}px)`;
  });
});

// ================== FOUNDER TEXT SLIDE IN ON VIEW ==================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll(".founder-text").forEach(el => observer.observe(el));

// ===== FOUNDER PARTICLE AURA =====
const founderImage = document.querySelector('.founder-image');

if (founderImage) {
  const auraContainer = document.createElement('div');
  auraContainer.classList.add('founder-aura');

  for (let i = 0; i < 15; i++) { // 15 small floating particles
    const particle = document.createElement('span');

    // Random position around the image
    const angle = Math.random() * 2 * Math.PI;
    const radius = 60 + Math.random() * 40; // distance from center
    particle.style.setProperty('--x', `${radius * Math.cos(angle)}px`);
    particle.style.setProperty('--y', `${radius * Math.sin(angle)}px`);

    // Random animation delay
    particle.style.animationDelay = `${Math.random() * 2}s`;

    auraContainer.appendChild(particle);
  }

  founderImage.appendChild(auraContainer);
}

// ================= FLOATING GLOW BEHIND CARDS =================
function createCardGlows(sectionClass, numGlows = 8) {
  const section = document.querySelector(sectionClass);
  if (!section) return;

  for (let i = 0; i < numGlows; i++) {
    const glow = document.createElement('div');
    glow.classList.add('card-glow');
    glow.style.width = glow.style.height = `${10 + Math.random() * 20}px`;
    glow.style.left = `${Math.random() * 90}%`;
    glow.style.top = `${Math.random() * 90}%`;
    glow.style.animationDuration = `${8 + Math.random() * 12}s`;
    section.appendChild(glow);
  }
}

// Apply to Governance, Constitution, and Trustee sections
createCardGlows('.governance-section', 10);
createCardGlows('.constitution-section', 10);
createCardGlows('.trustee-section', 10);
