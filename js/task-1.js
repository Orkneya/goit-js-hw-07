// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).


const liElems = document.querySelectorAll(".item");
console.log("Number of categories: ", liElems.length); 

liElems.forEach( liElem => {
const liElemsInside = liElem.querySelectorAll("li");
const h2Elem = liElem.querySelector("h2");

console.log( "Category : ", h2Elem.textContent);
console.log("Elements : ", liElemsInside.length); 
});


  





