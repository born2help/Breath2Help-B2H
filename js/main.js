document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.founder-image-wrapper, .founder-message, #founder');

  // Initially set visible for in-view content
  elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(50px)";
    el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
  });

  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run on page load
});
