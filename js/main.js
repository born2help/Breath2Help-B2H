<!-- MAIN.JS -->
<script>
document.addEventListener("DOMContentLoaded", function() {
  const revealElements = document.querySelectorAll(".section, .founder-image-wrapper, .founder-message, .roadmap-card");

  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    revealElements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
      if(boxTop < triggerBottom){
        el.classList.add("founder-visible");
        // Animate token bars
        if(el.classList.contains("section") && el.id==="tokenomics"){
          el.querySelectorAll(".fill").forEach(bar=>{
            bar.style.width = bar.dataset.percent+"%";
          });
        }
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // IntersectionObserver for smooth fade in
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.style.opacity =1;
        entry.target.style.transform="translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:0.1});
  document.querySelectorAll(".section, .founder-image-wrapper, .founder-message, .roadmap-card").forEach(el=>{
    observer.observe(el);
  });
});
</script>

</body>
</html>
