import React from "react";
import "./addComponent.css";
import metodologia from "./assest/Rectangle25.png";
import Formato from "./assest/Rectangle26.png";
import Diagnostico from "./assest/Rectangle27.png";
import Herramientas from "./assest/Rectangle28.png";
import Material from "./assest/Rectangle29.png";

import { FormText, Form, FormGroup, Label, Input } from "reactstrap";

const AddComponent = () => {
  return (
    <>
    <div className="fondo">
      <div className="containerTitle1">
        <h1>AÑADIR COMPONENTE</h1>
      </div>

      <div className="containerDashboard1">
        <h2 className="Titulo2">Información del Componente</h2>
        <Form className="containerAdd">
          <Form className="form1">
            
            <FormGroup>
              <Label>Url</Label>
              <Input placeholder="url imagen" type="url" />
            </FormGroup>

            <FormGroup>
              <Label>Titulo Componente</Label>
              <Input placeholder="Titulo componente" type="text" />
            </FormGroup>

            <FormGroup>
              <Label>Definición</Label>
              <Input placeholder="Definición" type="text" />
            </FormGroup>

            <FormGroup>
              <Label for="exampleUrl">Url Video</Label>
              <Input
                id="exampleUrl"
                name="url"
                placeholder="url Video"
                type="url"
              />
            </FormGroup>

            <FormGroup>
              <Label>Descripción Componente</Label>
              <Input id="exampleText" name="text" type="textarea" />
            </FormGroup>
          </Form>

          <Form className="form2">
            <FormGroup>
              <Label className="image1">Imagen 1</Label>
              <Input id="exampleFile" name="file" type="file" />
              <FormText>Archivos soportados con formato jpg y png</FormText>
            </FormGroup>

            <FormGroup>
              <Label className="image1">Imagen 2</Label>
              <Input id="exampleFile" name="file" type="file" />
              <FormText>Archivos soportados con formato jpg y png</FormText>
            </FormGroup>

            <FormGroup>
              <Label className="image1">Imagen 3</Label>
              <Input id="exampleFile" name="file" type="file" />
              <FormText>Archivos soportados con formato jpg y png</FormText>
            </FormGroup>
          </Form>

          <Form className="Objetivos">
            <FormGroup>
              <Label className="image1">Objetivo 1</Label>
              <Input placeholder="Objetivo" type="text" />
            </FormGroup>

            <FormGroup>
              <Label className="image1">Objetivo 2</Label>
              <Input placeholder="Objetivo" type="text" />
            </FormGroup>

            <FormGroup>
              <Label className="image1">Objetivo 3</Label>
              <Input placeholder="Objetivo" type="text" />
            </FormGroup>
          </Form>

          <Form className="lineasTrabajo">
            <FormGroup>
              <Label className="image1">Lineas de Trabajo 1</Label>
              <Input id="exampleText" name="text" type="textLine" />
            </FormGroup>

            <FormGroup>
              <Label className="image1">Lineas de Trabajo 2</Label>
              <Input id="exampleText" name="text" type="textLine" />
            </FormGroup>
          </Form>

          <h2 className="principalComponente1">Recursos</h2>

          {/* <div className="componentesLogos">
            <img className="Logos" src={metodologia} alt="" />
            <img className="Logos"  src={Diagnostico} alt="" />
            <img className="Logos"  src={Formato} alt="" />
            <img className="Logos"  src={Material} alt="" />
            <img className="Logos"  src={Herramientas} alt="" />
          </div> */}
          <Form className="Recursos">
            <FormGroup className="containerRecursos">
              <img className="Logos" src={metodologia} alt="" />
              <Label className="image1">Metodologia</Label>
              <Input id="exampleFile" name="file" type="file" />
              <FormText>Cargue los documentos</FormText>
            </FormGroup>

            <FormGroup className="containerRecursos">
              <img className="Logos" src={Diagnostico} alt="" />
              <Label className="image1">Formatos e Instructivos</Label>
              <Input id="exampleFile" name="file" type="file" />
              <FormText>Cargue los documentos</FormText>
            </FormGroup>

            <FormGroup className="containerRecursos">
              <img className="Logos" src={Formato} alt="" />
              <Label className="image1">Diagnosticos de Salud</Label>
              <Input id="exampleFile" name="file" type="file" />
              <FormText>Cargue los documentos</FormText>
            </FormGroup>

            <FormGroup className="containerRecursos">
              <img className="Logos" src={Material} alt="" />
              <Label className="image1">Herramientas y Manuales de Protocolo</Label>
              <Input id="exampleFile" name="file" type="file" />
              <FormText>Cargue los documentos</FormText>
            </FormGroup>

            <FormGroup className="containerRecursos">
              <img className="Logos" src={Herramientas} alt="" />
              <Label className="image1">Material Educativo</Label>
              <Input id="exampleFile" name="file" type="file" />
              <FormText>Cargue los documentos</FormText>
            </FormGroup>
          </Form>
        </Form>
      </div>
      </div>
    </>
  );
};

export default AddComponent;
