import React, { createContext, useState } from "react";
export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [misPokemones, setMisPokemones] = useState([]);

  const addPokemon = (nuevoPokemon) => {
    setMisPokemones((prevPokemones) => [...prevPokemones, nuevoPokemon]);
  };

  return (
    <PokemonContext.Provider value={{ misPokemones, addPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};
