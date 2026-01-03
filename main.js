document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  items.forEach(item => observer.observe(item));
});

// Animate roadmap items on scroll
document.addEventListener("DOMContentLoaded", function() {
  const timelineItems = document.querySelectorAll('.timeline-item');

  function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.85;

    timelineItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;

      if (itemTop < triggerBottom) {
        item.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // run on page load
});
