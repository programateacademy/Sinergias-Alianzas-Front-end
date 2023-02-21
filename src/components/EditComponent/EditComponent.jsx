import React, { useState, useEffect } from "react";
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

// Unifacion back y front
// Dependencias
import { toast } from "react-toastify";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Acciones de redux
import {updateComponent} from "../../store/actions/componentSlice";




const EditComponent = ({editComponent}) => {

  const initialState = {
    compTitulo: "",
    compImgPpal: "",
    compDefinicion: "",
    compVideo: "",
    compDescripcion: "",
    compImg1: "",
    compImg2: "",
    compImg3: "",
    compObjetivo1: "",
    compObjetivo2: "",
    compObjetivo3: "",
    compLineaTrabajo1: "",
    compLineaTrabajo2: "",
    recursosMetodologia: "",
    recursosFormatos: "",
    recursosDiagnosticos: "",
    recursosHerramientas: "",
    recursosMaterial: "",
  };

  // Estado para editar la tarea
const [editing, setEditing] = useState(false);

// Estado para el valor del input
  const [compTitulo,setcompTitulo] = useState(editComponent?.data);

  // Se declara la constante para hacer uso del hook que dispara la acción del reducer
  const dispatch = useDispatch();

    // Función para el envío del formulario al actualizar la tarea
    const onFormSubmit = (e) => {
      // Previene el evento por defecto del elemento
      e.preventDefault();
  
      // Permite leer el estado previo
      setEditing((prevState) => !prevState);
  
      // Se dispara la acción del reducer para actualizar la tarea recibiendo el id y la nueva información
      dispatch(updateTodo(todo._id, text));
    };

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
                <Input className="urlImagen2" value="" type="text" />{" "}
                <button className="btnEdit">
                  <img className="edit" src={pencil} alt="" />
                </button>
              </div>
            </FormGroup>

            <FormGroup
            onSubmit={onFormSubmit}>
              <Label className="labels">Titulo Componente</Label>
              <div className="containerInput">
                <Input className="urlImagen2" value="" type="text"
                 onChange={(e) => setcompTitulo(e.target.value)} />
                <button className="btnEdit">
                  <img className="edit" src={pencil} alt="" />
                </button>
              </div>
            </FormGroup>

            <FormGroup>
              <Label className="labels">Definición</Label>
              <div className="containerInput">
                <Input className="urlImagen2" value="" type="text" />
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
                <Input className="urlImagen2" value="" type="text" />
                <button className="btnEdit">
                  <img className="edit" src={pencil} alt="" />
                </button>
              </div>
            </FormGroup>

            <FormGroup>
              <Label className="labels">Descripción Componente</Label>
              <div className="containerInput">
                <Input className="urlImagen2" name="text" type="textarea" />
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
                <Input className="form2Images2" type="text" />
                <button className="btnEdit">
                  <img className="edit" src={pencil} alt="" />
                </button>
              </div>
            </FormGroup>

            <FormGroup>
              <Label className="image1">Imagen 2</Label>
              <div className="containerInput">
                <Input className="form2Images2" type="text" />
                <button className="btnEdit">
                  <img className="edit" src={pencil} alt="" />
                </button>
              </div>
            </FormGroup>

            <FormGroup>
              <Label className="image1">Imagen 3</Label>
              <div className="containerInput">
                <Input className="form2Images2" type="text" />
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
                <Input className="formObj2" type="text" />
                <button className="btnEdit">
                  <img className="edit" src={pencil} alt="" />
                </button>
              </div>
            </FormGroup>

            <FormGroup>
              <Label className="image1">Objetivo 2</Label>
              <div className="containerInput">
                <Input className="formObj2" type="text" />
                <button className="btnEdit">
                  <img className="edit" src={pencil} alt="" />
                </button>
              </div>
            </FormGroup>

            <FormGroup>
              <Label className="image1">Objetivo 3</Label>
              <div className="containerInput">
                <Input className="formObj2" type="text" />
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
                  name="text"
                  type="textLine"
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
                  name="text"
                  type="textLine"
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
                <Input className="recursosForm2" type="text" />
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
                <Input className="recursosForm2" type="text" />
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
                <Input className="recursosForm2" type="text" />
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
                <Input className="recursosForm2" type="text" />
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
                <Input className="recursosForm2" type="text" />
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
            <img className="iconos" src={Cancelar} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default EditComponent;
