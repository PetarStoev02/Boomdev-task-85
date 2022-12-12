import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  
  fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10`)
    .then((resp) => resp.json())
    .then((data) => {
      let arr = data.results;
     
      arr.forEach(element => {
        let li = document.createElement("li");
        li.innerHTML = ` ${element.name}`;
        ul.appendChild(li);
      });
    });
});
