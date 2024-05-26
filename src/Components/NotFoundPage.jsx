import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <p style={{ fontSize: "4rem" }}>Pagina no encontrada</p>
      <div id="back">
        <Link to={"/"}>Volver al home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
