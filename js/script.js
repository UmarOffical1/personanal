// Theme Toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click',()=>{
  document.body.classList.toggle('dark-theme');
  toggle.textContent=document.body.classList.contains('dark-theme')?'☀️':'🌙';
});

// Typing Effect
const typingText=["Frontend Developer","JavaScript Enthusiast","Web Designer"];
let i=0,j=0,currentText='',isDeleting=false,typingSpeed=150;
function type(){
  if(i>=typingText.length)i=0;
  const fullText=typingText[i];
  currentText=isDeleting?fullText.substring(0,currentText.length-1):fullText.substring(0,currentText.length+1);
  document.querySelector(".typing").textContent=currentText;
  if(!isDeleting&&currentText===fullText){isDeleting=true;setTimeout(type,1000);}
  else if(isDeleting&&currentText===''){isDeleting=false;i++;setTimeout(type,500);}
  else{setTimeout(type,typingSpeed);}
}
type();

// Skills Animation
window.addEventListener('scroll',()=>{
  const skills=document.querySelectorAll('.skill-bar div');
  const trigger=window.innerHeight*0.8;
  skills.forEach(skill=>{
    const skillTop=skill.getBoundingClientRect().top;
    if(skillTop<trigger){skill.style.width=skill.getAttribute('data-width');}
  });
});
