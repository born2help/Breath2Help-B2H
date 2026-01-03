// ================= HERO TEXT ANIMATION =================
document.addEventListener('DOMContentLoaded', () => {
  const mainLine = document.querySelector('.main-line');
  const subLine = document.querySelector('.sub-line');

  mainLine.style.opacity = 0;
  subLine.style.opacity = 0;

  setTimeout(() => {
    mainLine.style.transition = 'all 1s ease';
    mainLine.style.transform = 'translateY(0)';
    mainLine.style.opacity = 1;
  }, 500);

  setTimeout(() => {
    subLine.style.transition = 'all 1s ease';
    subLine.style.transform = 'translateY(0)';
    subLine.style.opacity = 1;
  }, 1000);
});

// ================= TOKENOMICS BAR ANIMATION =================
window.addEventListener('load', () => {
  const fills = document.querySelectorAll('.bar .fill');

  fills.forEach((fill) => {
    const percentage = fill.getAttribute('data-percentage');
    fill.style.width = '0%';
    setTimeout(() => {
      fill.style.transition = 'width 1.5s ease';
      fill.style.width = percentage;
    }, 500);
  });
});

// ================= SMOOTH SCROLL FOR BUTTONS =================
document.querySelectorAll('.hero-actions a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
