import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { pokemonsStorage } from "../pokemonData";

const PokemonDetail = () => {
  const { id } = useParams();

  const pokemon = pokemonsStorage.find((pokemon) => pokemon.id === id);

  if (!pokemon) {
    return (
      <div>
        <div>No se encontró el Pokémon</div>
        <div id="back">
          <Link to={"/pokedex"}>Volver a la Pokedex</Link>
        </div>
      </div>
    );
  }

  return (
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
          Nombre: <span>{pokemon.name}</span>
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
        <div class="buttons">
          <Link>
            <button>Borrar</button>
          </Link>
          <Link>
            <button>Editar</button>
          </Link>
        </div>
      </div>
      <div id="back">
        <Link to={"/pokedex"}> Volver al Pokedex</Link>
      </div>
    </div>
  );
};

export default PokemonDetail;
