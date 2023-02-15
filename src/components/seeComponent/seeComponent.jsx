import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import "./seeComponent.css";

// Importacion imagenes recursos
import Metodologia from "../../components/AddComponent/assest/Rectangle25.png";
import Formato from "../../components/AddComponent/assest/Rectangle26.png";
import Diagnostico from "../../components/AddComponent/assest/Rectangle27.png";
import Herramientas from "../../components/AddComponent/assest/Rectangle28.png";
import Material from "../../components/AddComponent/assest/Rectangle29.png";

const SeeComponent = () => {
  return (
    <>


      {/* 1.TÍTULO MODEL: compTitulo */}
      <h1 style={{ marginBottom: "3vw"}}>SALUD DE LA MUJER</h1>
      <div
        className="aybside"
        style={{ display: "flex", gap: "10px", marginBottom: "3vw"}}
      >

        {/* 2.IMAGEN COMPONENTE MODEL: compImgPpal */}
          <img
            alt="Sample"
            style={{ width:"18vw", height: "18vw", margin:"0 2vw 0 8vw"}}
            src="https://drive.google.com/uc?export=view&id=14Tz9-ZxgSU2uqwmYnSM6CuV3MFuj9QhA"
          />


        {/* 3.DEFINICION COMPONENTE MODEL: compDefinicion */}
        <div className="aside" style={{ textAlign: "right" ,padding: "1vw 8vw 0 0"}}>
          <h3 style={{ textAlign: "right" }}>Definición</h3>
          <p style={{ textAlign: "right"}}>
            compDefinicion Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Laboriosam, aut ipsam adipisci dignissimos ducimus explicabo
            error, quas sed fuga illo doloremque iusto nesciunt quis maiores
            excepturi quia quibusdam amet nam.compDescripcion Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Laboriosam, aut ipsam
            adipisci dignissimos ducimus explicabo error, quas sed fuga illo
            doloremque iusto nesciunt quis maiores excepturi quia quibusdam amet
            nam.
          </p>
        </div>

      </div>


      {/* 4.VIDEO COMPONENTE MODEL: compVideo */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/gt3qJ2adiyc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>


      {/* 5.DESCRIPCION COMPONENTE MODEL: compDescripcion */}
      <div className="5"  style={{ margin: "2vw 0"}}>
        <h3>Descripción del componente</h3>
        <p  style={{ padding: "1vw 15vw"}}>
          compDescripcion Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Laboriosam, aut ipsam adipisci dignissimos ducimus explicabo
          error, quas sed fuga illo doloremque iusto nesciunt quis maiores
          excepturi quia quibusdam amet nam.compDescripcion Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Laboriosam, aut ipsam adipisci
          dignissimos ducimus explicabo error, quas sed fuga illo doloremque iusto
          nesciunt quis maiores excepturi quia quibusdam amet nam.compDescripcion
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam,
          aut ipsam adipisci dignissimos ducimus explicabo error, quas sed fuga
          illo doloremque iusto nesciunt quis maiores excepturi quia quibusdam
          amet nam.
        </p>
      </div>


      {/* 6.IMAGENES COMPONENTE MODEL: compImagenes */}
      <div
        className="imagenesComponent"
        style={{ display: "flex", justifyContent: "center", gap: "30px" }}
      >
        {/* 6.1 IMAGEN COMPONENTE MODEL: compImg1 */}
        <Card style={{ width: "18rem" }}>
          <img
            alt="Sample"
            src="https://drive.google.com/uc?export=view&id=1zRjho9Crq8uAOXMH1iRxjQQBHz5HyQQo"
          />
        </Card>
        {/* 6.2 IMAGEN COMPONENTE MODEL: compImg2 */}
        <Card style={{ width: "18rem" }}>
          <img
            alt="Sample"
            src="https://drive.google.com/uc?export=view&id=1zRjho9Crq8uAOXMH1iRxjQQBHz5HyQQo"
          />
        </Card>
        {/* 6.3 IMAGEN COMPONENTE MODEL: compImg3 */}
        <Card style={{ width: "18rem" }}>
          <img
            alt="Sample"
            src="https://drive.google.com/uc?export=view&id=1zRjho9Crq8uAOXMH1iRxjQQBHz5HyQQo"
          />
        </Card>
      </div>


      {/* 7.OBJETIVOS COMPONENTE MODEL: compObjetivos */}
      <div
        style={{ backgroundColor: "#849B1C", widht: "100vw", padding: "30px" , margin:"30px 0"}}
      >
        <h3>Objetivos</h3>
        <div
          className="objetivos"
          style={{ display: "flex", justifyContent: "center", gap: "30px" }}
        >
          {/* 7.1 OBJETIVO 1 COMPONENTE MODEL: compObjetivo1 */}
          <Card style={{ width: "18rem" }}>
            <CardBody>
              <CardTitle tag="h5">Objetivo 1</CardTitle>
              <CardText>
                compObjetivo 1 Some quick example text to build on the card
                title and make up the bulk of the card‘s content.
              </CardText>
            </CardBody>
          </Card>
          {/* 7.2 OBJETIVO 2 COMPONENTE MODEL: compObjetivo2 */}
          <Card style={{ width: "18rem" }}>
            <CardBody>
              <CardTitle tag="h5">Objetivo 2</CardTitle>
              <CardText>
                compObjetivo 1 Some quick example text to build on the card
                title and make up the bulk of the card‘s content.
              </CardText>
            </CardBody>
          </Card>
          {/* 7.3 OBJETIVO 3 COMPONENTE MODEL: compObjetivo3 */}
          <Card style={{ width: "18rem" }}>
            <CardBody>
              <CardTitle tag="h5">Objetivo 3</CardTitle>
              <CardText>
              
                compObjetivo 1 Some quick example text to build on the card
                title and make up the bulk of the card‘s content.
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>


      {/* 8 LINEAS DE TRABAJO COMPONENTE MODEL: compLineasTrabajo */}
      <div>
        <h3>Lineas de trabajo</h3>
        {/* 8.1 LINEA DE TRABAJO 1 COMPONENTE MODEL: compLineasTrabajo1 */}
        <div style={{padding: "30px", backgroundColor:"#849B1C", clipPath: "polygon(0% 20%, 60% 20%, 60% 0%, 70% 50%, 60% 100%, 60% 80%, 0% 80%)"}}>
        compLineaTrabajo1 ipsum, dolor sit amet consectetur adipisicing
        elit.
        </div>
        <br />
        {/* 8.2 LINEA DE TRABAJO 2 COMPONENTE MODEL: compLineasTrabajo2 */}
        <div style={{padding: "30px", backgroundColor:"#849B1C", clipPath: "polygon(0% 20%, 60% 20%, 60% 0%, 70% 50%, 60% 100%, 60% 80%, 0% 80%)"}}>
        compLineaTrabajo2 ipsum, dolor sit amet consectetur adipisicing
        elit.
        </div>
      </div>

      

      {/* 9 RECURSOS COMPONENTE MODEL: compRecursos */}
      <h3>Recursos</h3>
      <div style={{display: "flex", gap:"50px"}}>
        <Card className="bside" style={{ width: "40vw", border:"none" }}>
            {/* 9.1 RECURSOS COMPONENTE MODEL: recursosMetodologia */}
            <img
              alt="Sample"
              src={Metodologia}
              />
            
        </Card>
        <Card className="bside" style={{ width: "40vw" , border:"none"}}>
              {/* 9.2 RECURSOS COMPONENTE MODEL: recursosFormatos */}
            <img
              alt="Sample"
              src={Formato}
            />
        </Card>
        <Card className="bside" style={{ width: "40vw" , border:"none"}}>
              {/* 9.3 RECURSOS COMPONENTE MODEL: recursosDiagnosticos */}
            <img
              alt="Sample"
              src={Diagnostico}
            />
            
        </Card>
        <Card className="bside" style={{ width: "40vw", border:"none" }}>
              {/* 9.4 RECURSOS COMPONENTE MODEL: recursosHerramientas */}
            <img
              alt="Sample"
              src={Herramientas}
            />
            
        </Card>
        <Card className="bside" style={{ width: "40vw", border:"none"}}>
              {/* 9.5 RECURSOS COMPONENTE MODEL: recursosMaterial */}
            <img
              alt="Sample"
              src={Material}
            />
            
        </Card>
      </div>

    </>
  );
};

export default SeeComponent;
