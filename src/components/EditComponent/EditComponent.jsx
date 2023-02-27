import React, { Component, useEffect, useState } from "react";
import "./editComponent.css";

import metodologia from "../AddComponent/assest/Rectangle25.png";
import Formato from "../AddComponent/assest/Rectangle26.png";
import Diagnostico from "../AddComponent/assest/Rectangle27.png";
import Herramientas from "../AddComponent/assest/Rectangle28.png";
import Material from "../AddComponent/assest/Rectangle29.png";
import Guardar from "../AddComponent/assest/guardar.png";
import Cancelar from "../AddComponent/assest/cancelar.png";
import ImgComponent from "../AddComponent/assest/libro.png";
import pencil from "./assest/editar.png";

import { FormText, Form, FormGroup, Label, Input } from "reactstrap";

import { NavLink, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { updateComponent } from "../../store/actions/componentSlice";



const EditComponent = ({
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
              <div className="containerInput">
                <Input
                  className="urlImagen2"
                  value={compImgPpal}
                  type="url"
                  name="compImgPpal"
                />
                <button className="btnEdit">
                  <img className="edit" src={pencil} alt="" />
                </button>
              </div>
            </FormGroup>
            <FormGroup>
              <Label className="labels">Titulo Componente</Label>
              <div className="containerInput">
                <Input
                  className="urlImagen2"
                  type="text"
                  name="compTitulo"
                  value={compTitulo}
                />
                <button className="btnEdit">
                  <img className="edit" src={pencil} alt="" />
                </button>
              </div>
            </FormGroup>

            <FormGroup>
              <Label className="labels">Definición</Label>
              <div className="containerInput">
                <Input
                  className="urlImagen2"
                  type="text"
                  name="compDefinicion"
                  value={compDefinicion}
                />
                <button className="btnEdit">
                  <img className="edit" src={pencil} alt="" />
                </button>
              </div>
            </FormGroup>

            <FormGroup>
              <Label className="labels" for="exampleUrl">
                Url Video
              </Label>
              <div className="containerInput">
                <Input
                  className="urlImagen2"
                  name="compVideo"
                  type="text"
                  value={compVideo}
                />
                <button className="btnEdit">
                  <img className="edit" src={pencil} alt="" />
                </button>
              </div>
            </FormGroup>

            <FormGroup>
              <Label className="labels">Descripción Componente</Label>
              <div className="containerInput">
                <Input
                  className="urlImagen2"
                  name="compDescripcion"
                  type="textarea"
                  value={compDescripcion}
                />
                <button className="btnEdit">
                  <img className="edit" src={pencil} alt="" />
                </button>
              </div>
            </FormGroup>
          </Form>

          <Form className="form2">
            <FormGroup>
              <Label className="image1">Imagen 1</Label>
              <div className="containerInput">
                <Input
                  className="form2Images2"
                  type="text"
                  name="compImg1"
                  value={compImg1}
                />
                <button className="btnEdit">
                  <img className="edit" src={pencil} alt="" />
                </button>
              </div>
            </FormGroup>

            <FormGroup>
              <Label className="image1">Imagen 2</Label>
              <div className="containerInput">
                <Input
                  className="form2Images2"
                  type="text"
                  name="compImg2"
                  value={compImg2}
                />
                <button className="btnEdit">
                  <img className="edit" src={pencil} alt="" />
                </button>
              </div>
            </FormGroup>

            <FormGroup>
              <Label className="image1">Imagen 3</Label>
              <div className="containerInput">
                <Input
                  className="form2Images2"
                  type="text"
                  name="compImg3"
                  value={compImg3}
                />
                <button className="btnEdit">
                  <img className="edit" src={pencil} alt="" />
                </button>
              </div>
            </FormGroup>
          </Form>

          <Form className="Objetivos">
            <FormGroup>
              <Label className="image1">Objetivo 1</Label>
              <div className="containerInput">
                <Input
                  className="formObj2"
                  type="text"
                  name="compObjetivo1"
                  value={compObjetivo1}
                />
                <button className="btnEdit">
                  <img className="edit" src={pencil} alt="" />
                </button>
              </div>
            </FormGroup>

            <FormGroup>
              <Label className="image1">Objetivo 2</Label>
              <div className="containerInput">
                <Input
                  className="formObj2"
                  type="text"
                  name="compObjetivo2"
                  value={compObjetivo2}
                />
                <button className="btnEdit">
                  <img className="edit" src={pencil} alt="" />
                </button>
              </div>
            </FormGroup>

            <FormGroup>
              <Label className="image1">Objetivo 3</Label>
              <div className="containerInput">
                <Input
                  className="formObj2"
                  type="text"
                  name="compObjetivo3"
                  value={compObjetivo3}
                />
                <button className="btnEdit">
                  <img className="edit" src={pencil} alt="" />
                </button>
              </div>
            </FormGroup>
          </Form>

          <Form className="lineasTrabajo">
            <FormGroup>
              <Label className="lineas">Lineas de Trabajo 1</Label>
              <div className="containerInput">
                <Input
                  className="urlImagen2"
                  id="exampleText"
                  name="compLineaTrabajo1"
                  type="text"
                  value={compLineaTrabajo1}
                />
                <button className="btnEdit">
                  <img className="edit" src={pencil} alt="" />
                </button>
              </div>
            </FormGroup>

            <FormGroup>
              <Label className="lineas">Lineas de Trabajo 2</Label>
              <div className="containerInput">
                <Input
                  className="urlImagen2"
                  id="exampleText"
                  name="compLineaTrabajo2"
                  type="text"
                  value={compLineaTrabajo2}
                />
                <button className="btnEdit">
                  <img className="edit" src={pencil} alt="" />
                </button>
              </div>
            </FormGroup>
          </Form>

          <h2 className="principalComponente1">Recursos</h2>
          <Form className="Recursos">
            <FormGroup className="containerRecursos">
              <img className="Logos" src={metodologia} alt="" />
              <Label className="image1">Metodologia</Label>
              <div className="containerInput">
                <Input
                  className="recursosForm2"
                  type="text"
                  name="recursosMetodologia"
                  value={recursosMetodologia}
                />
                <button className="btnEdit">
                  <img className="edit" src={pencil} alt="" />
                </button>
              </div>
              <FormText>Enlace de los recursos</FormText>
            </FormGroup>

            <FormGroup className="containerRecursos">
              <img className="Logos" src={Diagnostico} alt="" />
              <Label className="image1">Formatos e Instructivos</Label>
              <div className="containerInput">
                <Input
                  className="recursosForm2"
                  type="text"
                  name="recursosFormatos"
                  value={recursosFormatos}
                />
                <button className="btnEdit">
                  <img className="edit" src={pencil} alt="" />
                </button>
              </div>
              <FormText>Enlace de los recursos</FormText>
            </FormGroup>

            <FormGroup className="containerRecursos">
              <img className="Logos" src={Formato} alt="" />
              <Label className="image1">Diagnosticos de Salud</Label>
              <div className="containerInput">
                <Input
                  className="recursosForm2"
                  type="text"
                  name="recursosDiagnosticos"
                  value={recursosDiagnosticos}
                />
                <button className="btnEdit">
                  <img className="edit" src={pencil} alt="" />
                </button>
              </div>
              <FormText>Enlace de los recursos</FormText>
            </FormGroup>

            <FormGroup className="containerRecursos">
              <img className="Logos" src={Material} alt="" />
              <Label className="image1">
                Herramientas y Manuales de Protocolo
              </Label>
              <div className="containerInput">
                <Input
                  className="recursosForm2"
                  type="text"
                  name="recursosHerramientas"
                  value={recursosHerramientas}
                />
                <button className="btnEdit">
                  <img className="edit" src={pencil} alt="" />
                </button>
              </div>
              <FormText>Enlace de los recursos</FormText>
            </FormGroup>

            <FormGroup className="containerRecursos">
              <img className="Logos" src={Herramientas} alt="" />
              <Label className="image1">Material Educativo</Label>
              <div className="containerInput">
                <Input
                  className="recursosForm2"
                  type="text"
                  name="recursosMaterial"
                  value={recursosMaterial}
                />
                <button className="btnEdit">
                  <img className="edit" src={pencil} alt="" />
                </button>
              </div>
              <FormText>Enlace de los recursos</FormText>
            </FormGroup>
          </Form>
        </Form>
        <div className="botones">
          <button>
            <img className="iconos" src={Guardar} alt="" />
          </button>
          <button>
            <NavLink to="/home" className="col-12">
              <img className="iconos" src={Cancelar} alt="" />
            </NavLink>
          </button>
        </div>
      </div>
    </>
  );
};
// }
export default EditComponent;
