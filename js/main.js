// Charity Counters
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

// Animate fade-in elements
function handleFadeIns() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        if (isInViewport(el)) {
            el.style.animationPlayState = 'running';
        }
    });
}

let countersStarted = false;

window.addEventListener('scroll', () => {
    const charitySection = document.getElementById('charity');
    if (!countersStarted && isInViewport(charitySection)) {
        animateCounters();
        countersStarted = true;
    }
    handleFadeIns();
});

window.addEventListener('load', () => {
    const charitySection = document.getElementById('charity');
    if (isInViewport(charitySection)) {
        animateCounters();
        countersStarted = true;
    }
    handleFadeIns();
});
