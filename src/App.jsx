import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import CreatePokemon from "./Components/CreatePokemon";
import IndexPage from "./Components/IndexPage";
import ContactPage from "./Components/ContactPage";
import Pokedex from "./Components/Pokedex";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />}></Route>
          <Route path="/create" element={<CreatePokemon />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/pokedex" element={<Pokedex />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
