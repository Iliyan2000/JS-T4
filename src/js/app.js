import "../scss/app.scss";
//const R = require("ramda");
window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  const numbersArray = [1, 3, 4, 5, 6, 7];
  const isEven = (n) => n % 2 === 0;
  const filteredArray = numbersArray.filter(isEven);

  var i = 0;
  filteredArray.forEach(element => {
    const new_li = document.createElement("li");
    new_li.innerText = filteredArray[i++];
    ul.appendChild(new_li);
  });
});
