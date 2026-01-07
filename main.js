// ================= FLOATING PARTICLES =================
const particles = document.querySelectorAll(".particles span");

particles.forEach(p => {
  p.style.left = Math.random() * window.innerWidth + "px";
  p.style.animationDuration = 8 + Math.random() * 6 + "s";
  p.style.width = 5 + Math.random() * 6 + "px";
  p.style.height = p.style.width;
});

// ================= FOUNDER TEXT SLIDE =================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll(".founder-text").forEach(el => {
  observer.observe(el);
});

// ===== MOUSE FOLLOW PARTICLES =====
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

hero.addEventListener('mousemove', e => {
  mouseParticles.forEach((p, idx) => {
    const offset = idx * 5;
    p.style.transform = `translate(${e.clientX + offset}px, ${e.clientY + offset}px)`;
  });
});
