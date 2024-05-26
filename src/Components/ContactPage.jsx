import React from "react";

import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div>
      <div
        style={{
          borderRadius: 5,
          border: "2px solid #000",
          padding: "2rem",
          fontSize: "2rem",
          backgroundColor: "white",
        }}
      >
        <div>
          <p>Nombre: </p>
          <span>Jose Manuel</span>
        </div>
        <div>
          <p>Apellidos: </p>
          <span>Mesa Marín</span>
        </div>
        <div>
          <p>Ciudad: </p>
          <span>Málaga</span>
        </div>
        <p>Github: </p>
        <a href="https://github.com/josemessa">josemessa</a>
      </div>
      <div id="back">
        <Link to={"/"}> Volver al home</Link>
      </div>
    </div>
  );
};
export default ContactPage;
