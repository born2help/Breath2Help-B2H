// ================= FLOATING PARTICLES =================
const particles = document.querySelectorAll(".particles span");
particles.forEach(p => {
  p.style.left = Math.random() * 100 + "vw";
  p.style.top = Math.random() * 100 + "vh";   // ✅ THIS WAS MISSING
  const size = 3 + Math.random() * 5;
  p.style.width = size + "px";
  p.style.height = size + "px";
  p.style.animationDuration = 10 + Math.random() * 10 + "s";
  p.style.opacity = 0.6;
});

// ================= HERO TEXT LINE ANIMATION =================
document.querySelectorAll('.hero-content .line').forEach((line, index) => {
  line.style.animation = `lineFadeUp 0.8s forwards`;
  line.style.animationDelay = (index * 0.3) + 's';
});

// ================= 3D PARALLAX HERO =================
const heroSection = document.querySelector('.hero');
const layers = document.querySelectorAll('.parallax-layer');

heroSection.addEventListener('mousemove', (e) => {
  const rect = heroSection.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  layers.forEach(layer => {
    const depth = layer.classList.contains('depth-logo') ? 40 :
                  layer.classList.contains('depth-front') ? 25 :
                  layer.classList.contains('depth-mid') ? 15 : 8;

    const moveX = (x / rect.width) * depth;
    const moveY = (y / rect.height) * depth;

    layer.style.transform =
      `translate3d(${moveX}px, ${-moveY}px, ${layer.style.z || 0})`;
  });
});

heroSection.addEventListener('mouseleave', () => {
  layers.forEach(layer => {
    layer.style.transform = '';
  });
});

// ===== SCROLL PARALLAX EFFECT =====
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  document.documentElement.style.setProperty(
    '--scroll-bg',
    scrollY * 0.15 + 'px'
  );

  document.documentElement.style.setProperty(
    '--scroll-text',
    scrollY * 0.3 + 'px'
  );
});

// ===== CURSOR HALO =====
const halo = document.createElement('div');
halo.classList.add('cursor-halo');
document.body.appendChild(halo);

document.addEventListener('mousemove', e => {
  halo.style.left = e.clientX + 'px';
  halo.style.top = e.clientY + 'px';
});

// ===== INITIALIZE FLOATING PARTICLES =====
document.querySelectorAll('.particles span').forEach(p => {
  p.style.left = Math.random() * window.innerWidth + 'px';
  p.style.bottom = (-Math.random() * 200) + 'px';
});

// ===== MOUSE PARALLAX EFFECT =====
const hero = document.querySelector('.hero');
const layers = document.querySelectorAll('.parallax-layer');

hero.addEventListener('mousemove', e => {
  const x = (window.innerWidth / 2 - e.clientX) / 30;
  const y = (window.innerHeight / 2 - e.clientY) / 30;

  layers.forEach(layer => {
    const depth = layer.classList.contains('depth-front') ? 1 : 0.5;
    layer.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
  });
});

// ===== HERO TEXT DELAY =====
document.querySelectorAll('.hero-content .line').forEach((line, i) => {
  line.style.animationDelay = `${i * 0.3}s`;
});
