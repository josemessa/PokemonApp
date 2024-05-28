import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { pokemonsStorage, updatePokemonName } from "../pokemonData";

const PatchPokemon = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const pokemon = pokemonsStorage.find((pokemon) => pokemon.id === id);
  const [name, setName] = useState(pokemon.name);

  const handlePatch = (event) => {
    updatePokemonName(pokemon.id, name);
    navigate(`/detail/${pokemon.id}`);
  };

  return (
    <div>
      <h2>Editar Pokémon</h2>
      <div>
        <div id="pokemon-card">
          <p>ID: {pokemon.id}</p>
          <div>
            <img
              style={{ height: "100%" }}
              src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`}
              alt={`${pokemon.name}`}
            />
          </div>
          <p>
            Nombre:{" "}
            <span>
              <input
                style={{ height: "2rem", fontSize: "1rem" }}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </span>
          </p>
          <p>
            Altura: <span>{pokemon.height} cm</span>
          </p>
          <p>
            Peso: <span>{pokemon.weight} Kg</span>
          </p>
          <p>
            Tipo: <span>{pokemon.type.join(", " || " ")}</span>
          </p>
          <div className="buttons">
            <button onClick={handlePatch}>Guardar</button>
            <Link to={`/detail/${pokemon.id}`}>
              <button>Cancelar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatchPokemon;
