// Contact Form Validation & Message
const form=document.getElementById('contactForm');
const formMessage=document.getElementById('formMessage');

form.addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const email=document.getElementById('email').value.trim();
  const message=document.getElementById('message').value.trim();

  if(name===''||email===''||message===''){
    formMessage.textContent="Please fill all fields!";
    formMessage.style.color="red";
    return;
  }

  formMessage.textContent="Thank you! I will contact you soon.";
  formMessage.style.color="green";
  form.reset();
});

