import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PokemonContext } from "./PokemonContext";

const Pokedex = () => {
  const { misPokemones } = useContext(PokemonContext);

  if (misPokemones.length === 0) {
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
            {misPokemones.map((pokemon, index) => (
              <div key={index} id="pokemon-card">
                <p>
                  ID:<span>{pokemon.id}</span>
                  <span>
                    <img
                      style={{ height: "50px", marginLeft: "1rem" }}
                      src={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`}
                      alt={`${pokemon.name}`}
                    />
                  </span>
                </p>
                <p>
                  Nombre: <span>{pokemon.name}</span>
                </p>
                <p>
                  URL:
                  <span>
                    <a href={pokemon.url}>Ir a su web</a>
                  </span>
                </p>
                <Link to={`/detail/${pokemon.id}`}>
                  <button>Ver pokemon</button>
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
