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
  const bars = [
    { selector: '.bar-charity', width: 5 },
    { selector: '.bar-ops', width: 3 },
    { selector: '.bar-burn', width: 2 },
    { selector: '.bar-liquidity', width: 10 },
    { selector: '.bar-community', width: 80 },
  ];

  bars.forEach(bar => {
    document.querySelectorAll(bar.selector).forEach(el => {
      el.style.width = '0%';

      let animated = false;
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !animated) {
            animated = true;
            let current = 0;

            const animate = () => {
              if (current < bar.width) {
                current += 1;
                el.style.width = current + '%';
                requestAnimationFrame(animate);
              }
            };
            animate();
          }
        });
      }, { threshold: 0.3 });

      observer.observe(el);
    });
  });
});
