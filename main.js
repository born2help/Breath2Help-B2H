document.addEventListener("DOMContentLoaded", () => {
  const timelineItems = document.querySelectorAll(".timeline-item");
  const timelineLine = document.querySelector(".timeline-line");

  function onScroll() {
    let visibleCount = 0;
    const trigger = window.innerHeight * 0.85;

    timelineItems.forEach(item => {
      if (item.getBoundingClientRect().top < trigger) {
        item.classList.add("visible");
        visibleCount++;
      }
    });

    if (timelineLine) {
      timelineLine.style.height = visibleCount * 120 + "px";
    }
  }

  window.addEventListener("scroll", onScroll);
  onScroll();

 // ===== Hero particles =====
const particlesContainer = document.querySelector(".particles");
const numParticles = 50;

for (let i = 0; i < numParticles; i++) {
  const span = document.createElement("span");
  span.style.left = Math.random() * 100 + "%";
  span.style.top = Math.random() * 100 + "%";
  span.style.width = 5 + Math.random() * 12 + "px";
  span.style.height = span.style.width;
  span.style.animationDuration = 4 + Math.random() * 6 + "s";
  span.style.animationDelay = Math.random() * 5 + "s";
  particlesContainer.appendChild(span);
}

// Cursor-reactive particles
document.addEventListener("mousemove", (e) => {
  const particles = document.querySelectorAll(".particles span");
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  particles.forEach((p, i) => {
    const offsetX = (e.clientX - centerX) * 0.02 * (i + 1);
    const offsetY = (e.clientY - centerY) * 0.02 * (i + 1);
    p.style.transform = translate(${offsetX}px, ${offsetY}px);
  });
});
