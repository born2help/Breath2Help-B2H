/* ===============================
   B2H Subpage Unified JS
   Used on all pages with body.b2h-subpage
   =============================== */
document.addEventListener('DOMContentLoaded', () => {

  /* ================= HERO PARTICLES ================= */
  const heroCanvas = document.getElementById('heroParticles');
  if(heroCanvas){
    const ctx = heroCanvas.getContext('2d');
    let particlesArray;
    function initParticles() {
      heroCanvas.width = window.innerWidth;
      heroCanvas.height = document.body.scrollHeight;
      particlesArray = [];
      const colors = ['#32cd32','#00ffd0','#7CFC00','#9b6bff','#ff7c7c'];
      for (let i=0;i<80;i++){
        particlesArray.push({
          x: Math.random()*heroCanvas.width,
          y: Math.random()*heroCanvas.height,
          size: 2 + Math.random()*4,
          color: colors[Math.floor(Math.random()*colors.length)],
          speedX: (Math.random()-0.5)*0.5,
          speedY: (Math.random()-0.5)*0.5
        });
      }
    }
    function animateParticles(){
      ctx.clearRect(0,0,heroCanvas.width,heroCanvas.height);
      particlesArray.forEach(p=>{
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
        ctx.fillStyle = p.color;
        ctx.fill();
        p.x += p.speedX;
        p.y += p.speedY;
        if(p.x<0)p.x=heroCanvas.width;
        if(p.x>heroCanvas.width)p.x=0;
        if(p.y<0)p.y=heroCanvas.height;
        if(p.y>heroCanvas.height)p.y=0;
      });
      requestAnimationFrame(animateParticles);
    }
    window.addEventListener('resize', initParticles);
    initParticles();
    animateParticles();
  }

  /* ================= BUTTON HOVER GLOW ================= */
  document.querySelectorAll('.green-btn, .btn-glow, .glass-back').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.boxShadow = '0 0 15px var(--b2h-accent)';
      btn.style.transform = 'translateY(-2px)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.boxShadow = 'none';
      btn.style.transform = 'translateY(0)';
    });
  });

  /* ================= FADE-IN SECTIONS ================= */
  const fadeElements = document.querySelectorAll('.page-hero, .section, .wp-section');
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  fadeElements.forEach(el => fadeObserver.observe(el));

  /* ================= FORM INPUT FOCUS EFFECT ================= */
  document.querySelectorAll('input, textarea, select').forEach(input=>{
    input.addEventListener('focus', ()=>{
      input.style.borderColor = 'var(--b2h-accent)';
      input.style.boxShadow = '0 0 8px var(--b2h-accent)';
    });
    input.addEventListener('blur', ()=>{
      input.style.borderColor = '';
      input.style.boxShadow = '';
    });
  });

});
