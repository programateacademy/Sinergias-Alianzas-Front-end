import React from "react";
import "./editComponent.css"

import metodologia from "../AddComponent/assest/Rectangle25.png";
import Formato from "../AddComponent/assest/Rectangle26.png";
import Diagnostico from "../AddComponent/assest/Rectangle27.png";
import Herramientas from "../AddComponent/assest/Rectangle28.png";
import Material from "../AddComponent/assest/Rectangle29.png";
import Guardar from "../AddComponent/assest/guardar.png"
import Cancelar from "../AddComponent/assest/cancelar.png"
import ImgComponent from "../AddComponent/assest/libro.png"
import pencil from "./assest/lapiz.png"

import { FormText, Form, FormGroup, Label, Input } from "reactstrap";

const EditComponent = () => {
  return (
    <>
      <div className="containerTitle1">
        <h1>EDITAR COMPONENTE</h1>
      </div>

      <div className="containerDashboard1">
        <h2 className="Titulo2">Titulo del Componente</h2>
        <img className="imgComponent" src={ImgComponent} alt="" />
        <Form className="containerAdd">
          <Form className="form1">
            <FormGroup>
              <Label className="labels">Imagen del Componente</Label>
              <Input className="urlImagen"  placeholder="Imagen del Componente" type="url" value="" />
             <button className="btnEdit"><img className="edit" src={pencil} alt="" /></button> 
            </FormGroup>

            <FormGroup>
              <Label className="labels">Titulo Componente</Label>
              <Input className="urlImagen" placeholder="Titulo componente" type="text" />
              <button className="btnEdit"><img className="edit" src={pencil} alt="" /></button> 
            </FormGroup>

            <FormGroup>
              <Label className="labels">Definición</Label>
              <Input className="urlImagen" placeholder="Definición" type="text" />
              <button className="btnEdit"><img className="edit" src={pencil} alt="" /></button> 
            </FormGroup>

            <FormGroup>
              <Label className="labels" for="exampleUrl">Url Video</Label>
              <Input className="urlImagen"
                id="exampleUrl"
                name="url"
                placeholder="url Video"
                type="url"
              />
                  <button className="btnEdit"><img className="edit" src={pencil} alt="" /></button> 
            </FormGroup>

            <FormGroup>
              <Label className="labels">Descripción Componente</Label>
              <Input className="urlImagen"  name="text" type="textarea" />
              <button className="btnEdit"><img className="edit" src={pencil} alt="" /></button> 
            </FormGroup>
          </Form>

          <Form className="form2">
            <FormGroup>
              <Label className="image1">Imagen 1</Label>
              <Input className="form2Images" placeholder="Agregue el link de la imagen"  type="text" />
              <button className="btnEdit"><img className="edit" src={pencil} alt="" /></button> 
            </FormGroup>

            <FormGroup>
              <Label className="image1">Imagen 2</Label>
              <Input className="form2Images" placeholder="Agregue el link de la imagen"  type="text" />
              <button className="btnEdit"><img className="edit" src={pencil} alt="" /></button> 
            </FormGroup>

            <FormGroup>
              <Label className="image1">Imagen 3</Label>
              <Input className="form2Images" placeholder="Agregue el link de la imagen"  type="text" />
              <button className="btnEdit"><img className="edit" src={pencil} alt="" /></button> 
            </FormGroup>
          </Form>

          <Form className="Objetivos">
            <FormGroup>
              <Label className="image1">Objetivo 1</Label>
              <Input className="formObj" placeholder="Objetivo" type="text" />
              <button className="btnEdit"><img className="edit" src={pencil} alt="" /></button> 
            </FormGroup>

            <FormGroup>
              <Label className="image1">Objetivo 2</Label>
              <Input className="formObj" placeholder="Objetivo" type="text" />
              <button className="btnEdit"><img className="edit" src={pencil} alt="" /></button> 
            </FormGroup>

            <FormGroup>
              <Label className="image1">Objetivo 3</Label>
              <Input className="formObj" placeholder="Objetivo" type="text" />
              <button className="btnEdit"><img className="edit" src={pencil} alt="" /></button> 
            </FormGroup>
          </Form>

          <Form className="lineasTrabajo">
            <FormGroup>
              <Label className="lineas">Lineas de Trabajo 1</Label>
              <Input className="urlImagen" id="exampleText" name="text" type="textLine" />
              <button className="btnEdit"><img className="edit" src={pencil} alt="" /></button> 
            </FormGroup>

            <FormGroup>
              <Label className="lineas">Lineas de Trabajo 2</Label>
              <Input className="urlImagen" id="exampleText" name="text" type="textLine" />
              <button className="btnEdit"><img className="edit" src={pencil} alt="" /></button> 
            </FormGroup>
          </Form>

          <h2 className="principalComponente1">Recursos</h2>
          <Form className="Recursos">
            <FormGroup className="containerRecursos">
              <img className="Logos" src={metodologia} alt="" />
              <Label className="image1">Metodologia</Label>
              <Input className="recursosForm" type="text" />
              <button className="btnEdit"><img className="edit" src={pencil} alt="" /></button> 
              <FormText>Enlace de los recursos</FormText>
            </FormGroup>

            <FormGroup className="containerRecursos">
              <img className="Logos" src={Diagnostico} alt="" />
              <Label className="image1">Formatos e Instructivos</Label>
              <Input className="recursosForm" type="text" />
              <button className="btnEdit"><img className="edit" src={pencil} alt="" /></button> 
              <FormText>Enlace de los recursos</FormText>
            </FormGroup>

            <FormGroup className="containerRecursos">
              <img className="Logos" src={Formato} alt="" />
              <Label className="image1">Diagnosticos de Salud</Label>
              <Input className="recursosForm" type="text" />
              <button className="btnEdit"><img className="edit" src={pencil} alt="" /></button> 
              <FormText>Enlace de los recursos</FormText>
            </FormGroup>

            <FormGroup className="containerRecursos">
              <img className="Logos" src={Material} alt="" />
              <Label className="image1">
                Herramientas y Manuales de Protocolo
              </Label>
              <Input className="recursosForm" type="text" />
              <button className="btnEdit"><img className="edit" src={pencil} alt="" /></button> 
              <FormText>Enlace de los recursos</FormText>
            </FormGroup>

            <FormGroup className="containerRecursos">
              <img className="Logos" src={Herramientas} alt="" />
              <Label className="image1">Material Educativo</Label>
              <Input className="recursosForm" type="text" />
              <button className="btnEdit"><img className="edit" src={pencil} alt="" /></button> 
              <FormText>Enlace de los recursos</FormText>
            </FormGroup>
          </Form>
        </Form>
        <div className="botones">
        <button ><img className="iconos" src={Guardar} alt="" /></button>
        <button ><img className="iconos" src={Cancelar} alt="" /></button>
        </div>
      </div>
    </>
  );
};

export default EditComponent;
