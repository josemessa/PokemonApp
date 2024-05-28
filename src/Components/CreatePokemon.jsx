import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addPokemon, pokemonsStorage } from "../pokemonData";

const CreatePokemon = () => {
  const [nuevoPokemon, setNuevoPokemon] = useState({
    id: "",
    name: "",
    url: "",
    height: "",
    weight: "",
    type: "",
  });

  const navigate = useNavigate();

  const registerHandler = () => {
    const { id, name, url, height, weight, type } = nuevoPokemon;
    if (!id || !name || !url || !height || !weight || !type) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    const checkIdPokemon = pokemonsStorage.find((pokemon) => pokemon.id === id);
    if (checkIdPokemon) {
      alert("Ese ID ya ha sido registrado");
      return;
    }
    addPokemon(nuevoPokemon);
    setNuevoPokemon({
      id: "",
      name: "",
      url: "",
      height: "",
      weight: "",
      type: "",
    });
    navigate("/pokedex");
  };

  const formPokemonHandler = (e) => {
    const { name, value } = e.target;
    setNuevoPokemon((restoInputs) => ({
      ...restoInputs,
      [name]: name === "type" ? value.split(",") : value,
    }));
  };

  return (
    <div>
      <h2>Registra tu Pokémon</h2>
      <div id="form-creation">
        <div>
          <label>Id: </label>
          <input
            type="text"
            name="id"
            onChange={formPokemonHandler}
            value={nuevoPokemon.id}
          />
        </div>
        <div>
          <label>Nombre: </label>
          <input
            type="text"
            name="name"
            onChange={formPokemonHandler}
            value={nuevoPokemon.name}
          />
        </div>
        <div>
          <label>URL: </label>
          <input
            type="url"
            name="url"
            onChange={formPokemonHandler}
            value={nuevoPokemon.url}
          />
        </div>
        <div>
          <label>Altura: </label>
          <input
            type="text"
            name="height"
            onChange={formPokemonHandler}
            value={nuevoPokemon.height}
          />
        </div>
        <div>
          <label>Peso: </label>
          <input
            type="text"
            name="weight"
            onChange={formPokemonHandler}
            value={nuevoPokemon.weight}
          />
        </div>
        <div>
          <label>Tipo: </label>
          <input
            type="text"
            name="type"
            onChange={formPokemonHandler}
            value={nuevoPokemon.type}
          />
        </div>
      </div>
      <div style={{ marginTop: "2rem", fontSize: "2rem" }}>
        <button
          onClick={registerHandler}
          style={{ backgroundColor: "yellow", border: "2px solid black" }}
        >
          ¡Regístralo!
        </button>
      </div>
      <div id="back">
        <Link to={"/"}>
          {" "}
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m10.978 14.999v3.251c0 .412-.335.75-.752.75-.188 0-.375-.071-.518-.206-1.775-1.685-4.945-4.692-6.396-6.069-.2-.189-.312-.452-.312-.725 0-.274.112-.536.312-.725 1.451-1.377 4.621-4.385 6.396-6.068.143-.136.33-.207.518-.207.417 0 .752.337.752.75v3.251h9.02c.531 0 1.002.47 1.002 1v3.998c0 .53-.471 1-1.002 1z"
              fill-rule="nonzero"
            />
          </svg>
          <p>Volver al Home</p>
        </Link>
      </div>
    </div>
  );
};

export default CreatePokemon;
