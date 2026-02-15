/* =========================
   Theme Toggle
========================= */
const toggle = document.getElementById('theme-toggle');

if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    toggle.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
  });
}

/* =========================
   Typing Effect
========================= */
document.addEventListener("DOMContentLoaded", () => {

  const typingText = ["Frontend Developer", "JavaScript Enthusiast", "Web Designer"];
  let i = 0;
  let currentText = "";
  let isDeleting = false;
  let typingSpeed = 150;

  const typingEl = document.querySelector(".typing");

  if (!typingEl) {
    console.error("❌ .typing element not found");
    return;
  }

  function typeEffect() {
    const fullText = typingText[i % typingText.length];

    if (isDeleting) {
      currentText = fullText.substring(0, currentText.length - 1);
    } else {
      currentText = fullText.substring(0, currentText.length + 1);
    }

    typingEl.textContent = currentText;

    let speed = typingSpeed;

    if (!isDeleting && currentText === fullText) {
      speed = 1000;
      isDeleting = true;
    } 
    else if (isDeleting && currentText === "") {
      isDeleting = false;
      i++;
      speed = 500;
    }

    setTimeout(typeEffect, speed);
  }

  typeEffect();

});

/* =========================
   Skills Animation
========================= */
window.addEventListener('scroll', () => {
  const skills = document.querySelectorAll('.skill-bar div');
  const trigger = window.innerHeight * 0.8;

  skills.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;
    if (skillTop < trigger) {
      skill.style.width = skill.getAttribute('data-width');
    }
  });
});
