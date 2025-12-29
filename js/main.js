// Animate Charity Counters
function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = target / 200;
      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}

// Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
         rect.bottom >= 0;
}

let countersStarted = false;

// Animate counters on scroll
window.addEventListener('scroll', () => {
  const charitySection = document.getElementById('charity');
  if (!countersStarted && isInViewport(charitySection)) {
    animateCounters();
    countersStarted = true;
  }

  // Fade-in sections
  document.querySelectorAll('.fade-in').forEach(el => {
    if (isInViewport(el)) {
      el.style.animationPlayState = 'running';
    }
  });
});

// Animate counters and hero elements on load if in viewport
window.addEventListener('load', () => {
  const charitySection = document.getElementById('charity');
  if (isInViewport(charitySection)) {
    animateCounters();
    countersStarted = true;
  }

  // Hero fade-ins
  document.querySelectorAll('.fade-in').forEach(el => {
    if (isInViewport(el)) {
      el.style.animationPlayState = 'running';
    }
  });
});
