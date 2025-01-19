function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.

const changeColorBtn = document.querySelector(".change-color");
const colorBody = document.querySelector("body");
const colorWrite = document.querySelector(".color");

changeColorBtn.addEventListener("click", (event)=>{
  const randomColor = getRandomHexColor();
  colorWrite.textContent = randomColor;
  colorBody.style.background = randomColor;
})