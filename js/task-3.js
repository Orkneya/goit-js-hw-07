// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

const inputName = document.querySelector("#name-output");
const inputText = document.querySelector("#name-input");
inputText.addEventListener("input", (event)=>{
  inputName.textContent = event.currentTarget.value.trim();
  if(inputName.textContent === ""){
    inputName.textContent = "Anonymous";
  }
});








/* <label for="tentacles">Number of tentacles (10- 100):</label>
<input type="number" id="tentacles"
name="tentacles"
min="10" max="100"></input> */