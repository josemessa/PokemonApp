import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { pokemonsStorage } from "../pokemonData";

const Pokedex = () => {
  if (pokemonsStorage.length === 0) {
    return (
      <div>
        <div>No hay datos de Pokémon disponibles</div>
        <div id="back">
          <Link to={"/"}>Volver al home</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div id="pokemons-container">
          <div id="pokemons">
            {pokemonsStorage.map((pokemon, index) => (
              <div key={index} id="pokemon-card">
                <img
                  src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`}
                  alt={`${pokemon.name}`}
                />
                <p id="id+img">
                  ID: <span>{pokemon.id}</span>
                </p>
                <p>
                  Nombre: <span>{pokemon.name}</span>
                </p>
                <p>
                  URL:
                  <span>
                    <a href={pokemon.url}> Ir a pokeapi</a>
                  </span>
                </p>
                <Link to={`/detail/${pokemon.id}`}>
                  <div id="ver-pokemon">Ver pokemon</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div id="back">
          <Link to={"/"}> Volver al home</Link>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
