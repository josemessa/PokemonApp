import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreatePokemon from "./Components/CreatePokemon";
import IndexPage from "./Components/IndexPage";
import ContactPage from "./Components/ContactPage";
import Pokedex from "./Components/Pokedex";
import PokemonDetail from "./Components/PokemonDetail";
import NotFoundPage from "./Components/NotFoundPage";
import { PokemonProvider } from "./Components/PokemonContext";

function App() {
  return (
    <>
      <PokemonProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IndexPage />}></Route>
            <Route path="/create" element={<CreatePokemon />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/pokedex" element={<Pokedex />}></Route>
            <Route path="/detail/:id" element={<PokemonDetail />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </BrowserRouter>
      </PokemonProvider>
    </>
  );
}

export default App;
