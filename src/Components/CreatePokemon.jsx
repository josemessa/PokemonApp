import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PokemonContext } from "./PokemonContext";

const CreatePokemon = () => {
  const { addPokemon } = useContext(PokemonContext);
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
        <Link to={"/"}>Volver al home</Link>
      </div>
    </div>
  );
};

export default CreatePokemon;
