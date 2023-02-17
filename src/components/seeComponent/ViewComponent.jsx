import React from 'react'
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import "./seeComponent.css";


import Metodologia from "../../components/AddComponent/assest/Rectangle25.png";
import Formato from "../../components/AddComponent/assest/Rectangle26.png";
import Diagnostico from "../../components/AddComponent/assest/Rectangle27.png";
import Herramientas from "../../components/AddComponent/assest/Rectangle28.png";
import Material from "../../components/AddComponent/assest/Rectangle29.png";
import { Link } from 'react-router-dom';

const ViewComponent = ({
    compTitulo,
    compImgPpal,
    compDefinicion,
    compVideo,
    compDescripcion,
    compImg1,
    compImg2,
    compImg3,
    compObjetivo1,
    compObjetivo2,
    compObjetivo3,
    compLineaTrabajo1,
    compLineaTrabajo2,
    recursosMetodologia,
    recursosFormatos,
    recursosDiagnosticos,
    recursosHerramientas,
    recursosMaterial,

}) => {
  return (
    <>
      <div className="containerIcon">
        <img
          alt="Sample"
          src={compImgPpal}
        />
      </div>

      <div className="containerSeeComponent">
        <h1>{compTitulo}</h1>
        <h3>Definición</h3>
        <p>
          {compDefinicion}
        </p>

        <iframe
        className="video"          
          src={compVideo}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />

        <h3>Descripción del componente</h3>
        <p>
          {compDescripcion}
        </p>

        <div className="containerImages">
          <img
            width="100%"
            alt="Sample"
            src={compImg1}
          />
          <img
            width="100%"
            alt="Sample"
            src={compImg2}
          />
          <img
            width="100%"
            alt="Sample"
            src={compImg3}
          />
        </div>

        <div className="containerObjetives">
          <div className="objetive">
            <h5>{compObjetivo1}</h5>
          </div>

          <div className="objetive">
            <h5>{compObjetivo2}</h5>
          </div>

          <div className="objetive">
            <h5>{compObjetivo3}</h5>
          </div>
        </div>

        <div className="containerLinesWork">
          <div className="lineWork">
            <h3>{compLineaTrabajo1}</h3>
          </div>
          <div className="lineWork">
            <h3>{compLineaTrabajo2}</h3>            
          </div>
        </div>

        <h3>Recursos</h3>

        <div className="containerResources">
          <a target="_blank" href={recursosMetodologia}><img alt="Sample" src={Metodologia} /></a>
          <a target="_blank" href={recursosFormatos}><img alt="Sample" src={Formato} /></a>
          <a target="_blank" href={recursosDiagnosticos}><img alt="Sample" src={Diagnostico} /></a>
          <a target="_blank" href={recursosHerramientas}><img alt="Sample" src={Herramientas} /></a>
          <a target="_blank" href={recursosMaterial}><img alt="Sample" src={Material} /></a>
        </div>
        <Link to={'/home'}>
        <button>
          Volver
        </button>
        </Link>
      </div>
    </>
  );
};

export default ViewComponent;
