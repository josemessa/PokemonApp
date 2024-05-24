import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreatePokemon = () => {
  const [myPokemons, setMyPokemons] = useState(undefined);
  const [newPokemon, setNewPokemon] = useState({
    id: "",
    name: "",
    url: "",
    height: "",
    weight: "",
    type: "",
  });

  const navigate = useNavigate();

  const registerHandler = () => {
    let aux = myPokemons ? [...myPokemons] : [];
    aux.push(newPokemon);

    setMyPokemons(aux);

    setNewPokemon({
      id: "",
      name: "",
      url: "",
      height: "",
      weight: "",
      type: "",
    });
    navigate("/pokedex", { state: aux });
  };

  const formPokemonHandler = (e) => {
    const { name, value } = e.target;
    setNewPokemon((restoInputs) => ({
      ...restoInputs,
      [name]: name === "type" ? value.split(",") : value,
    }));
  };

  useEffect(() => {
    console.log("Pokemons registrados: ", myPokemons);
  }, [myPokemons]);

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
            value={newPokemon.id}
          />
        </div>
        <div>
          <label>Nombre: </label>
          <input
            type="text"
            name="name"
            onChange={formPokemonHandler}
            value={newPokemon.name}
          />
        </div>
        <div>
          <label>URL: </label>
          <input
            type="url"
            name="url"
            onChange={formPokemonHandler}
            value={newPokemon.url}
          />
        </div>
        <div>
          <label>Altura: </label>
          <input
            type="text"
            name="height"
            onChange={formPokemonHandler}
            value={newPokemon.height}
          />
        </div>
        <div>
          <label>Peso: </label>
          <input
            type="text"
            name="weight"
            onChange={formPokemonHandler}
            value={newPokemon.weight}
          />
        </div>
        <div>
          <label>Tipo: </label>
          <input
            type="text"
            name="type"
            onChange={formPokemonHandler}
            value={newPokemon.type}
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
