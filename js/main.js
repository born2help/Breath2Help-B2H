// Fade-in on scroll for founder section
document.addEventListener("DOMContentLoaded", function() {
  const founderSection = document.querySelector("#founder");
  const options = { threshold: 0.1 };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, options);

  founderSection.style.opacity = 0;
  founderSection.style.transform = "translateY(50px)";
  observer.observe(founderSection);
});
