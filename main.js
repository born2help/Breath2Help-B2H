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

/* ================= SAFE TOKENOMICS PARTICLES ================= */
const tokenParticles = document.querySelectorAll('.tokenomics-particles span');
if (tokenParticles.length) {
  document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;
    tokenParticles.forEach((particle, index) => {
      const speed = (index + 1) * 5;
      particle.style.transform = `translate(${x * speed}px, ${y * speed - 20}px)`;
    });
  });
}

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

/* ================= TOKENOMICS BAR ANIMATION (FIXED) ================= */
document.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelectorAll('.bar-fill');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;

        if (el.classList.contains('bar-charity')) el.style.width = '5%';
        if (el.classList.contains('bar-ops')) el.style.width = '3%';
        if (el.classList.contains('bar-burn')) el.style.width = '2%';
        if (el.classList.contains('bar-liquidity')) el.style.width = '10%';
        if (el.classList.contains('bar-community')) el.style.width = '80%';

        observer.unobserve(el);
      }
    });
  }, { threshold: 0.4 });

  bars.forEach(bar => observer.observe(bar));
});

document.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelectorAll('.bar-fill');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const width = el.dataset.width || '50%';
        el.style.setProperty('--bar-width', width);
        el.style.width = width;
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.4 });

  bars.forEach(bar => observer.observe(bar));
});

// ================= TOKENOMICS FLOATING PARTICLES =================
document.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelectorAll('.bar-fill');

  bars.forEach(bar => {
    // Create a container for floating particles
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

    // Add 6 subtle particles per bar
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
});

// ================= KEYFRAMES FOR FLOATING PARTICLES =================
const style = document.createElement('style');
style.textContent = `
@keyframes barParticleMove {
  0% { transform: translateY(0) translateX(0); opacity: 0.6; }
  50% { transform: translateY(-6px) translateX(4px); opacity: 1; }
  100% { transform: translateY(0) translateX(0); opacity: 0.6; }
}
`;
document.head.appendChild(style);
