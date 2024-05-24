import React from "react";

import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div>
      <div
        style={{
          borderRadius: 5,
          border: "2px solid #000",
          padding: "15px",
          fontSize: "2rem",
          backgroundColor: "white",
        }}
      >
        <div>
          <span>Nombre: </span>
          <span>Jose Manuel</span>
        </div>
        <div>
          <span>Apellidos: </span>
          <span>Mesa Marín</span>
        </div>
        <div>
          <span>Ciudad: </span>
          <span>Málaga</span>
        </div>
        <span>Github: </span>
        <a href="https://github.com/josemessa">josemessa</a>
      </div>
      <div id="back">
        <Link to={"/"}> Volver al home</Link>
      </div>
    </div>
  );
};
export default ContactPage;
