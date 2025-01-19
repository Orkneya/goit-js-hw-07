// Напиши скрипт управління формою логіна.

const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", (event)=>{
  event.preventDefault();
  
  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();

  if (email === "" | password === ''){
    return console.log("All form fields must be filled in");
  }
  console.log(`Email : ${email})  Password : ${password}`);
  event.target.reset();
});
