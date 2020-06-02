let url = "https://pokeapi.co/api/v2/";
let Name = [];
let character = document.querySelector("#characterget");
let searchcharacter = document.getElementById("searchCharacter");
searchcharacter.addEventListener("input", () => doChar(searchcharacter.value));

const doChar = (text) => {
  //   console.log(searchcharacter.value);
  axios
    .get(url + "pokemon/?limit=964&offset=1")
    .then((res) => doSearch(res))
    .catch((err) => console.error(err));
  const doSearch = (res) => {
    res.data.results.forEach((element) => {
      Name.push(element.name);
    });

    // console.log(Name);
    if (Name.includes(searchcharacter.value)) {
      getChar();
    } // else {
    //   SEARCH = "";
    // }
  };
};

const getChar = async () => {
  axios
    .get(url + "pokemon/" + `${searchcharacter.value}`)
    .then((res) => showChar(res))
    .catch((err) => console.error(err));
};
// getChar();
const showChar = (res) => {
  console.log(res.data);
  //   let name = res.data.results;
  //   let nameparse = JSON.parse(name);
  //   nameparse.array.forEach((element) => {
  //     console.log(element);
  //   });
  let char = document.getElementById("characterget");
  let number = "";
  if (res.data.id < 10) {
    number = `00${res.data.id}`;
  } else if (res.data.id < 100) {
    number = `0${res.data.id}`;
  } else {
    number = res.data.id;
  }
  console.log(number);
  console.log(res.data.types[0].type.name);
  char.innerHTML = `<div class="card text-white bg-primary" style="width: 18rem;">
  <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${number}.png" class="card-img-top" alt="...">
  <hr color="white">
  <div class="card-body">
    <h5 class="card-title bruh">${res.data.name.toUpperCase()}</h5>
    <hr color="white">
    <p class="card-text">Type: ${
      res.data.types[0].type.name.charAt(0).toUpperCase() +
      res.data.types[0].type.name.slice(1)
    }</p>
    <p class="card-text">Height: ${res.data.height} </p>
    <p class="card-text">Weight: ${res.data.weight} </p>

    


  </div>
</div>`;
};
