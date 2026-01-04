document.addEventListener("DOMContentLoaded", () => {

  /* ================= TIMELINE ================= */
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


  /* ================= HERO PARTICLES ================= */
  const particlesContainer = document.querySelector(".particles");
  if (!particlesContainer) return;

  const particleCount = 60;

  for (let i = 0; i < particleCount; i++) {
    const p = document.createElement("span");

    const size = Math.random() * 10 + 4;
    p.style.width = size + "px";
    p.style.height = size + "px";

    p.style.left = Math.random() * 100 + "%";
    p.style.top = Math.random() * 100 + "%";

    p.style.animationDuration = 6 + Math.random() * 8 + "s";
    p.style.animationDelay = Math.random() * 5 + "s";

    particlesContainer.appendChild(p);
  }

});
