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

// ================= FOUNDER TEXT SLIDE =================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll(".founder-text").forEach(el => observer.observe(el));

// ================= MOUSE FOLLOWING PARTICLES =================
const hero = document.querySelector('.hero');
const mouseParticles = [];

for(let i=0; i<20; i++){
  const p = document.createElement('div');
  p.classList.add('mouse-particle');
  p.style.width = p.style.height = (4 + Math.random()*4) + 'px';
  p.style.position = 'absolute';
  p.style.background = 'rgba(255,255,255,0.3)';
  p.style.borderRadius = '50%';
  p.style.pointerEvents = 'none';
  p.style.transition = 'transform 0.1s linear';
  hero.appendChild(p);
  mouseParticles.push(p);
}

let mouseX = 0, mouseY = 0;

hero.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

mouseParticles.forEach((p, i) => {
  let x = 0, y = 0;
  setInterval(() => {
    x += (mouseX - x) * (0.05 + i * 0.002);
    y += (mouseY - y) * (0.05 + i * 0.002);
    p.style.transform = `translate(${x}px, ${y}px)`;
  }, 16);
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
