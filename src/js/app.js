import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");

  let url = "https://pokeapi.co/api/v2/pokemon";

  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      let arr = data.results;
      for (let i = 0; i < 10; i++) {
        let li = document.createElement("li");
        li.innerHTML = ` ${arr[i].name}`;
        ul.appendChild(li);
      }
      // let arr= data.results
      // console.log(arr[0].name);
      // console.log(Object.entries(data))
    });
});
