document.addEventListener("DOMContentLoaded", () => {

  const particles = document.querySelector(".particles");
  if (!particles) return;

  for (let i = 0; i < 60; i++) {
    const p = document.createElement("span");
    const size = Math.random() * 10 + 4;

    p.style.width = size + "px";
    p.style.height = size + "px";
    p.style.left = Math.random() * 100 + "%";
    p.style.top = Math.random() * 100 + "%";
    p.style.animationDuration = 6 + Math.random() * 10 + "s";

    particles.appendChild(p);
  }
});
