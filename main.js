/* ===============================
   B2H GLOBAL FOUNDATION – JS
   Clean | Professional | Conflict-Free
================================ */

/* ---------- PARTICLE FLOATING LOGIC ---------- */
const particles = document.querySelectorAll('.particles span');

particles.forEach(particle => {
  const size = Math.random() * 4 + 4;
  const left = Math.random() * 100;
  const duration = Math.random() * 12 + 12;
  const delay = Math.random() * 10;

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${left}%`;
  particle.style.animationDuration = `${duration}s`;
  particle.style.animationDelay = `${delay}s`;
});


/* ---------- SCROLL REVEAL (FOUNDER SECTION) ---------- */
const revealItems = document.querySelectorAll(
  '.founder-text p, .founder-image'
);

const revealOnScroll = () => {
  revealItems.forEach((item, index) => {
    const rect = item.getBoundingClientRect();
    const triggerPoint = window.innerHeight - 80;

    if (rect.top < triggerPoint) {
      item.style.opacity = "1";
      item.style.transform = "translateX(0)";
      item.style.transitionDelay = `${index * 0.15}s`;
    }
  });
};

/* Initial hidden state */
revealItems.forEach((item, index) => {
  item.style.opacity = "0";
  item.style.transform =
    index % 2 === 0 ? "translateX(-40px)" : "translateX(40px)";
  item.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* ---------- HERO BUTTON MICRO ANIMATION ---------- */
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'translateY(-6px) scale(1.03)';
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translateY(0) scale(1)';
  });
});
