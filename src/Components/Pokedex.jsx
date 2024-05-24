import React from "react";
import { Link, useLocation } from "react-router-dom";

const Pokedex = () => {
  const { state } = useLocation();
  console.log(state);
  // if (!state || !Array.isArray(state)) {
  if (!state || !Array.isArray(state)) {
    return (
      <div>
        <div>No hay datos de Pokémon disponibles</div>
        <div id="back">
          <Link to={"/"}> Volver al home</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div id="pokemons">
          {state.map((pokemon, index) => (
            <div key={index}>
              <p>ID: {pokemon.id}</p>
              <p>Nombre: {pokemon.name}</p>
              <p>URL: {pokemon.url}</p>
              <p>Altura: {pokemon.height}</p>
              <p>Peso: {pokemon.weight}</p>
              <p>Tipo: {pokemon.type}</p>
            </div>
          ))}
        </div>
      </div>
      <div id="back">
        <Link to={"/"}> Volver al home</Link>
      </div>
    </div>
  );
};

export default Pokedex;
