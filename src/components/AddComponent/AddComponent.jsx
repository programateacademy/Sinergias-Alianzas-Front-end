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
      <div className="containerTitle">
        <h1>AÑADIR COMPONENTE</h1>
      </div>

      <div className="containerDashboard">
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
              <Label>Imagen 1</Label>
              <Input id="exampleFile" name="file" type="file" />
              <FormText>Archivos soportados con formato jpg y png</FormText>
            </FormGroup>

            <FormGroup>
              <Label>Imagen 2</Label>
              <Input id="exampleFile" name="file" type="file" />
              <FormText>Archivos soportados con formato jpg y png</FormText>
            </FormGroup>

            <FormGroup>
              <Label>Imagen 3</Label>
              <Input id="exampleFile" name="file" type="file" />
              <FormText>Archivos soportados con formato jpg y png</FormText>
            </FormGroup>
          </Form>

          <Form className="Objetivos">
            <FormGroup>
              <Label>Objtivo 1</Label>
              <Input placeholder="Objetivo" type="text" />
            </FormGroup>

            <FormGroup>
              <Label>Objtivo 2</Label>
              <Input placeholder="Objetivo" type="text" />
            </FormGroup>

            <FormGroup>
              <Label>Objtivo 3</Label>
              <Input placeholder="Objetivo" type="text" />
            </FormGroup>
          </Form>

          <Form className="lineasTrabajo">
            <FormGroup>
              <Label>Lineas de Trabajo 1</Label>
              <Input id="exampleText" name="text" type="textarea" />
            </FormGroup>

            <FormGroup>
              <Label>Lineas de Trabajo 2</Label>
              <Input id="exampleText" name="text" type="textarea" />
            </FormGroup>
          </Form>

          <h2 className="principalComponente1">Recursos</h2>
          <section className="layout">
          <div className="componentesLogos">
            <img className="Logos" src={metodologia} alt="" />
            <img className="Logos"  src={Diagnostico} alt="" />
            <img className="Logos"  src={Formato} alt="" />
            <img className="Logos"  src={Material} alt="" />
            <img className="Logos"  src={Herramientas} alt="" />
          </div>
          <Form className="Recursos">
            <FormGroup>
              <Label>Metodologia</Label>
              <Input id="exampleFile" name="file" type="file" />
              <FormText>Cargue los documentos</FormText>
            </FormGroup>

            <FormGroup>
              <Label>Formatos e Instructivos</Label>
              <Input id="exampleFile" name="file" type="file" />
              <FormText>Cargue los documentos</FormText>
            </FormGroup>

            <FormGroup>
              <Label>Diagnosticos de Salud</Label>
              <Input id="exampleFile" name="file" type="file" />
              <FormText>Cargue los documentos</FormText>
            </FormGroup>

            <FormGroup>
              <Label>Herramientas y Manuales de Protocolo</Label>
              <Input id="exampleFile" name="file" type="file" />
              <FormText>Cargue los documentos</FormText>
            </FormGroup>

            <FormGroup>
              <Label>Material Educativo</Label>
              <Input id="exampleFile" name="file" type="file" />
              <FormText>Cargue los documentos</FormText>
            </FormGroup>
          </Form>
          </section>
        </Form>
      </div>
    </>
  );
};

export default AddComponent;
