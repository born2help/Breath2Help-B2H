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

      /* ================= PARTNERS SCROLL ANIMATION ================= */
const partnerCards = document.querySelectorAll(".partner-card[data-animate]");

function animatePartners() {
  const trigger = window.innerHeight * 0.85;
  partnerCards.forEach(card => {
    if (card.getBoundingClientRect().top < trigger) {
      card.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", animatePartners);
animatePartners(); // trigger once on load
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

// ================= COUNT-UP NUMBERS =================
const counters = document.querySelectorAll('#impact .impact-card span');
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.innerText.replace(/\D/g,'');
    let count = 0;
    const increment = Math.ceil(target / 200); // adjust speed
    const timer = setInterval(() => {
      count += increment;
      if(count >= target) {
        counter.innerText = target + '+';
        clearInterval(timer);
      } else {
        counter.innerText = count + '+';
      }
    }, 10);
  };
  updateCount();
});
