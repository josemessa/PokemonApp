import React from "react";
import { Link } from "react-router-dom";
import LogoComponent from "./Logo";

const IndexPage = () => {
  return (
    <>
      <div>
        <LogoComponent />
      </div>
      <div>
        <nav
          id="nav-bar"
          style={{
            fontSize: "2rem",
            paddingBlock: "2rem",
            gap: "2rem",
            textTransform: "uppercase",
            borderRadius: "10px",
          }}
        >
          <Link to={"/pokedex"}>Tu pokedex</Link>
          <Link to={"/create"}>Registra tu pokemón</Link>
          <Link to={"/contact"}>Contacto</Link>
        </nav>
      </div>
    </>
  );
};

export default IndexPage;
