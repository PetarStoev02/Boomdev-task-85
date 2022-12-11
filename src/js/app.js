import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");

  // let url = "https://pokeapi.co/api/v2/pokemon";
  for (let pokemonCount = 0; pokemonCount < 10; pokemonCount++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit={pokemonCount}`)
      .then((resp) => resp.json())
      .then((data) => {
        let arr = data.results;
        let li = document.createElement("li");
        li.innerHTML = ` ${arr[pokemonCount].name}`;
        ul.appendChild(li);
      });
  }
});
