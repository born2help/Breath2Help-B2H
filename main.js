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

  if (!bars.length) return;

  const animateBar = (bar) => {
    const target = parseInt(bar.dataset.width, 10);
    const span = bar.querySelector('span');
    let current = 0;

    bar.style.width = '0%';
    span.textContent = '0%';

    const interval = setInterval(() => {
      if (current >= target) {
        clearInterval(interval);
        bar.style.width = target + '%';
        span.textContent = target + '%';
      } else {
        current++;
        bar.style.width = current + '%';
        span.textContent = current + '%';
      }
    }, 18); // smooth speed
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateBar(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  bars.forEach(bar => observer.observe(bar));

});
