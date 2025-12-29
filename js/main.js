// ===== Charity Counters Animation =====
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        counter.innerText = '0';
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const current = +counter.innerText;
            const increment = target / 200; // smoother animation
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

window.addEventListener('scroll', () => {
    const charitySection = document.getElementById('charity');
    if (!countersStarted && isInViewport(charitySection)) {
        animateCounters();
        countersStarted = true;
    }
});

window.addEventListener('load', () => {
    const charitySection = document.getElementById('charity');
    if (isInViewport(charitySection)) {
        animateCounters();
        countersStarted = true;
    }
});

// ===== Fade-in Sections on Scroll =====
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
