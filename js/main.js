// ================= MAIN.JS =================
// Unified fade-in / scroll reveal for founder and other sections

document.addEventListener("DOMContentLoaded", function() {
  // Select all elements we want to reveal on scroll
  const revealElements = document.querySelectorAll(
    ".founder-image-wrapper, .founder-message, .section[data-reveal]"
  );

  // Function to check if elements are in view
  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add("founder-visible"); // class already used in CSS
      }
    });
  }

  // Run once on page load
  revealOnScroll();

  // Run on scroll
  window.addEventListener("scroll", revealOnScroll);

  // Optional: IntersectionObserver for more precise animations
  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections marked for reveal
  document.querySelectorAll(".section").forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(50px)";
    observer.observe(section);
  });
});
