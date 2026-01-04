document.addEventListener("DOMContentLoaded", () => {

  /* ===== TIMELINE SCROLL ANIMATION ===== */
  const items = document.querySelectorAll(".timeline-item");
  const line = document.querySelector(".timeline-line");

  function animateTimeline() {
    let count = 0;
    const trigger = window.innerHeight * 0.85;

    items.forEach(item => {
      if (item.getBoundingClientRect().top < trigger) {
        item.classList.add("visible");
        count++;
      }
    });

    if (line) {
      line.style.height = count * 120 + "px";
    }
  }

  window.addEventListener("scroll", animateTimeline);
  animateTimeline();

  /* ===== HERO PARTICLES ===== */
  const container = document.querySelector(".particles");
  if (!container) return;

  for (let i = 0; i < 60; i++) {
    const p = document.createElement("span");
    const size = Math.random() * 10 + 4;

    p.style.width = size + "px";
    p.style.height = size + "px";
    p.style.left = Math.random() * 100 + "%";
    p.style.top = Math.random() * 100 + "%";
    p.style.animationDuration = 6 + Math.random() * 8 + "s";

    container.appendChild(p);
  }
});
