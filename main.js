/* ================= HERO BG PARTICLES ================= */
const hero = document.querySelector('.hero');
const bgParticles = document.querySelectorAll('.bg-particles span');

if (hero && bgParticles.length) {
  bgParticles.forEach(p => {
    p.style.left = Math.random() * 100 + '%';
    const size = 3 + Math.random() * 6;
    p.style.width = p.style.height = size + 'px';
    p.style.animationDuration = 10 + Math.random() * 15 + 's';
    p.style.animationDelay = Math.random() * 10 + 's';
  });
}

/* ================= HERO TEXT ANIMATION ================= */
document.querySelectorAll('.hero-content .line').forEach((line, index) => {
  line.style.animationDelay = (index * 0.3) + 's';
  line.classList.add('slide-in');
});

const heroContent = document.querySelector('.hero-content');
if (heroContent) heroContent.classList.add('depth-float');

/* ================= MOUSE FOLLOWING PARTICLES ================= */
if (hero) {
  const mouseParticles = [];
  for (let i = 0; i < 15; i++) {
    const p = document.createElement('div');
    p.classList.add('mouse-particle');
    hero.appendChild(p);
    mouseParticles.push(p);
  }

  hero.addEventListener('mousemove', e => {
    mouseParticles.forEach((p, idx) => {
      const offset = idx * 6;
      p.style.transform = `translate(${e.clientX + offset}px, ${e.clientY + offset}px)`;
    });
  });
}

/* ================= FOUNDER TEXT OBSERVER ================= */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.4 });

document.querySelectorAll(".founder-text").forEach(el => observer.observe(el));

/* ================= CARD HOVER GLOW ================= */
const cardSelectors = ['.asset-card', '.charity-card', '.board-card', '.mv-card'];

cardSelectors.forEach(selector => {
  document.querySelectorAll(selector).forEach(card => {
    const glow = document.createElement('div');
    glow.classList.add('card-hover-glow');
    card.style.position = 'relative';
    card.appendChild(glow);

    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
      glow.style.opacity = '1';
      glow.style.transform = 'scale(1)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      glow.style.opacity = '0';
      glow.style.transform = 'scale(0)';
    });
  });
});

/* ================= TOKENOMICS BAR ANIMATION ================= */
document.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelectorAll('.bar-fill');

  const observerBar = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;

        // Set width based on class
        if (el.classList.contains('bar-charity')) el.style.width = '5%';
        if (el.classList.contains('bar-ops')) el.style.width = '3%';
        if (el.classList.contains('bar-burn')) el.style.width = '2%';
        if (el.classList.contains('bar-liquidity')) el.style.width = '10%';
        if (el.classList.contains('bar-community')) el.style.width = '80%';

        observerBar.unobserve(el);
      }
    });
  }, { threshold: 0.4 });

  bars.forEach(bar => observerBar.observe(bar));

  // ================= FLOATING PARTICLES INSIDE BARS =================
  bars.forEach(bar => {
    const particleContainer = document.createElement('div');
    particleContainer.classList.add('bar-particles');
    particleContainer.style.position = 'absolute';
    particleContainer.style.top = '0';
    particleContainer.style.left = '0';
    particleContainer.style.width = '100%';
    particleContainer.style.height = '100%';
    particleContainer.style.pointerEvents = 'none';
    particleContainer.style.overflow = 'hidden';
    bar.appendChild(particleContainer);

    for (let i = 0; i < 6; i++) {
      const p = document.createElement('span');
      p.style.position = 'absolute';
      p.style.width = Math.random() * 4 + 2 + 'px';
      p.style.height = Math.random() * 4 + 2 + 'px';
      p.style.background = 'rgba(255,255,255,0.6)';
      p.style.borderRadius = '50%';
      p.style.top = Math.random() * 100 + '%';
      p.style.left = Math.random() * 100 + '%';
      p.style.animation = `barParticleMove ${1.5 + Math.random()}s linear infinite alternate`;
      particleContainer.appendChild(p);
    }
  });

  // Add keyframes dynamically
  const style = document.createElement('style');
  style.textContent = `
  @keyframes barParticleMove {
    0% { transform: translateY(0) translateX(0); opacity: 0.6; }
    50% { transform: translateY(-6px) translateX(4px); opacity: 1; }
    100% { transform: translateY(0) translateX(0); opacity: 0.6; }
  }
  `;
  document.head.appendChild(style);
});
