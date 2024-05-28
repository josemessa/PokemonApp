import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { pokemonsStorage, deletePokemon } from "../pokemonData";

const PokemonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [PopModal, setPopModal] = useState(false);

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

  const handleDelete = () => {
    deletePokemon(pokemon.id);
    navigate("/pokedex");
  };

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
        <div className="buttons">
          <div>
            <button onClick={() => setPopModal(true)}>Borrar</button>
          </div>
          <Link to={`/patch/${pokemon.id}`}>
            <button>Editar</button>
          </Link>
        </div>
      </div>
      <div id="back">
        <Link to={"/pokedex"}>
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
          <p>Volver al Pokedex</p>
        </Link>
      </div>

      {PopModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Confirmar eliminación</h3>
            <p>¿Estás seguro de que deseas eliminar a este Pokémon?</p>
            <div className="modal-buttons">
              <button onClick={handleDelete}>Sí, eliminar</button>
              <button onClick={() => setPopModal(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonDetail;
