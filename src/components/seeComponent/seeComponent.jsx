import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import "./seeComponent.css";

import Metodologia from "../../components/AddComponent/assest/Rectangle25.png";
import Formato from "../../components/AddComponent/assest/Rectangle26.png";
import Diagnostico from "../../components/AddComponent/assest/Rectangle27.png";
import Herramientas from "../../components/AddComponent/assest/Rectangle28.png";
import Material from "../../components/AddComponent/assest/Rectangle29.png";

const SeeComponent = () => {
  return (
    <>
      <div className="containerIcon">
        <img
          alt="Sample"
          src="https://drive.google.com/uc?export=view&id=14Tz9-ZxgSU2uqwmYnSM6CuV3MFuj9QhA"
        />
      </div>

      <div className="containerSeeComponent">
        <h1>SALUD DE LA MUJER</h1>
        <h3>Definición</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam,
          aut ipsam adipisci dignissimos ducimus explicabo error, quas sed fuga
          illo doloremque iusto nesciunt quis maiores excepturi quia quibusdam
          amet nam.compDescripcion Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Laboriosam, aut ipsam adipisci dignissimos ducimus
          explicabo error, quas sed fuga illo doloremque iusto nesciunt quis
          maiores excepturi quia quibusdam amet nam.
        </p>

        <iframe
        className="video"          
          src="https://www.youtube.com/embed/gt3qJ2adiyc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />

        <h3>Descripción del componente</h3>
        <p>
          compDescripcion Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Laboriosam, aut ipsam adipisci dignissimos ducimus explicabo
          error, quas sed fuga illo doloremque iusto nesciunt quis maiores
          excepturi quia quibusdam amet nam.compDescripcion Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Laboriosam, aut ipsam adipisci
          dignissimos ducimus explicabo error, quas sed fuga illo doloremque
          iusto nesciunt quis maiores excepturi quia quibusdam amet
          nam.compDescripcion Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Laboriosam, aut ipsam adipisci dignissimos ducimus
          explicabo error, quas sed fuga illo doloremque iusto nesciunt quis
          maiores excepturi quia quibusdam amet nam.
        </p>

        <div className="containerImages">
          <img
            width="100%"
            alt="Sample"
            src="https://drive.google.com/uc?export=view&id=1zRjho9Crq8uAOXMH1iRxjQQBHz5HyQQo"
          />
          <img
            width="100%"
            alt="Sample"
            src="https://drive.google.com/uc?export=view&id=1zRjho9Crq8uAOXMH1iRxjQQBHz5HyQQo"
          />
          <img
            width="100%"
            alt="Sample"
            src="https://drive.google.com/uc?export=view&id=1zRjho9Crq8uAOXMH1iRxjQQBHz5HyQQo"
          />
        </div>

        <div className="containerObjetives">
          <div className="objetive">
            <h5>Objetivo 1</h5>
          </div>

          <div className="objetive">
            <h5>Objetivo 2</h5>
          </div>

          <div className="objetive">
            <h5>Objetivo 3</h5>
          </div>
        </div>

        <div className="containerLinesWork">
          <div className="lineWork">
            <h3>Linea de trabajo 1</h3>
          </div>
          <div className="lineWork">
            <h3>Linea de trabajo 2</h3>            
          </div>
        </div>

        <h3>Recursos</h3>

        <div className="containerResources">
          <img alt="Sample" src={Metodologia} />
          <img alt="Sample" src={Formato} />
          <img alt="Sample" src={Diagnostico} />
          <img alt="Sample" src={Herramientas} />
          <img alt="Sample" src={Material} />
        </div>
      </div>
    </>
  );
};

export default SeeComponent;
