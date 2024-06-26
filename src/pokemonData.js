export let pokemonsStorage = [
  {
    id: "1",
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon-form/1/",
    height: "7",
    weight: "69",
    type: ["grass", "poison"],
  },
  {
    id: "4",
    name: "charmander",
    url: "https://pokeapi.co/api/v2/pokemon-form/4/",
    height: "6",
    weight: "85",
    type: ["fire"],
  },
  {
    id: "7",
    name: "squirtle",
    url: "https://pokeapi.co/api/v2/pokemon-form/7/",
    height: "5",
    weight: "90",
    type: ["water"],
  },
  {
    id: "10",
    name: "caterpie",
    url: "https://pokeapi.co/api/v2/pokemon-form/10/",
    height: "3",
    weight: "29",
    type: ["bug"],
  },
  {
    id: "13",
    name: "weedle",
    url: "https://pokeapi.co/api/v2/pokemon-form/13/",
    height: "3",
    weight: "32",
    type: ["bug", "poison"],
  },
  {
    id: "16",
    name: "pidgey",
    url: "https://pokeapi.co/api/v2/pokemon-form/16/",
    height: "3",
    weight: "18",
    type: ["flying", "normal"],
  },
  {
    id: "19",
    name: "rattata",
    url: "https://pokeapi.co/api/v2/pokemon-form/19/",
    height: "3",
    weight: "35",
    type: ["normal"],
  },
  {
    id: "21",
    name: "spearow",
    url: "https://pokeapi.co/api/v2/pokemon-form/21/",
    height: "3",
    weight: "20",
    type: ["flying", "normal"],
  },
  {
    id: "23",
    name: "ekans",
    url: "https://pokeapi.co/api/v2/pokemon-form/23/",
    height: "20",
    weight: "69",
    type: ["poison"],
  },
  {
    id: "25",
    name: "pikachu",
    url: "https://pokeapi.co/api/v2/pokemon-form/25/",
    height: "4",
    weight: "60",
    type: ["electric"],
  },
];

export const addPokemon = (newPokemon) => {
  pokemonsStorage.push(newPokemon);
};

export const deletePokemon = (id) => {
  pokemonsStorage = pokemonsStorage.filter((pokemon) => pokemon.id !== id);
};

export const updatePokemonName = (id, newName) => {
  const pokemon = pokemonsStorage.find((pokemon) => pokemon.id === id);
  if (pokemon) {
    pokemon.name = newName;
  }
};
