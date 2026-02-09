// Skills Animation on scroll
window.addEventListener('scroll', () => {
    const skills = document.querySelectorAll('.skill-bar div');
    const trigger = window.innerHeight * 0.8;
    skills.forEach(skill => {
        const skillTop = skill.getBoundingClientRect().top;
        if (skillTop < trigger) { skill.style.width = skill.getAttribute('data-width'); }
    });
});

// Counters Animation
const counters = document.querySelectorAll('.count');
counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 100;
        if (current < target) { counter.innerText = Math.ceil(current + increment); setTimeout(updateCounter, 20); }
        else { counter.innerText = target; }
    };
    updateCounter();
});
