import React from "react";
import "./ListCourses.css";


import icon from "./Assets/icon.png";
import iconAbout from "./Assets/about.png";
import iconEdit from "./Assets/icono editar.png";
import iconDelete from "./Assets/icono borrar.png";

export const ListCourses = () => {
  return (
    <>
      <div className="containerTitle">
        <h1>DASHBOARD COMPONENTES</h1>
      </div>

      <div className="containerDashboard">
        <div className="container_buttons">
          <button>Añadir Componente</button>
          <button>Buscar componente</button>
        </div>

        <div className="listCards">

          <div className="cardComponent">
            
            <h2>Salud de la mujer</h2>

            <img src={icon} alt="" />

            <div className="buttons_cards">

              <a href="#pageComponent">
                <img src={iconAbout} alt="" />
              </a>
              <a href="#pageForm">
                <img src={iconEdit} alt="" />
              </a>
              <a href="#Delete">
                <img src={iconDelete} alt="" />
              </a>

            </div>

          </div>

        </div>
      </div>
    </>
  );
};
