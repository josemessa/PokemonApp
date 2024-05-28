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
                <p id="id+img">
                  ID: <span>{pokemon.id}</span>
                </p>
                <p id="card-name">{pokemon.name}</p>
                <img
                  src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`}
                  alt={`${pokemon.name}`}
                />
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
    </div>
  );
};

export default Pokedex;
