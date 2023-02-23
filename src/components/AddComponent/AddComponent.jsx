import "./addComponent.css";
import metodologia from "./assest/Rectangle25.png";
import Formato from "./assest/Rectangle26.png";
import Diagnostico from "./assest/Rectangle27.png";
import Herramientas from "./assest/Rectangle28.png";
import Material from "./assest/Rectangle29.png";
import Guardar from "./assest/guardar.png";
import Cancelar from "./assest/cancelar.png";
import ImgComponent from "./assest/libro.png";

import { FormText, Form, FormGroup, Label, Input } from "reactstrap";

// Unifacion back y front
// Dependencias
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Acciones de redux
import { addComponent } from "../../store/actions/componentSlice";

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

const AddComponent = () => {
  const [componentData, setComponentData] = useState(initialState);

  // Constante para mostrar si hay errores al enviar la información
  const { error } = useSelector((state) => ({ ...state.componente }));

  //   Se destructura la información del usuario que ingresó al sistema
  const { user } = useSelector((state) => ({ ...state.auth }));

  //   Dispatch para disparar la acción
  const dispatch = useDispatch();

  //   Redireccionar
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  // Se destructura el valor del estado inicial

  const {
    compTitulo,
    compColor,     
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
  } = componentData;

  //   Función para validación en el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      compTitulo &&
      compColor &&
      compImgPpal &&
      compDefinicion &&
      compVideo &&
      compDescripcion &&
      compImg1 &&
      compImg2 &&
      compImg3 &&
      compObjetivo1 &&
      compObjetivo2 &&
      compObjetivo3 &&
      compLineaTrabajo1 &&
      compLineaTrabajo2 &&
      recursosMetodologia &&
      recursosFormatos &&
      recursosDiagnosticos &&
      recursosHerramientas &&
      recursosMaterial
    ) {
      const updateComponentData = {
        ...componentData,
        name: user?.result?.name,
      };

      dispatch(addComponent({ updateComponentData, navigate, toast }));
      handleClear();
    }
  };

  // Función para capturar cuando el valor del input cambie
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setComponentData({ ...componentData, [name]: value });
  };

  // Función para limpiar el formulario
  const handleClear = () => {
    setComponentData({
      compTitulo: "",
      compColor: "",
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
    });
  };

  return (
    <>
      <div className="containerTitle1">
        <h1>AÑADIR COMPONENTE</h1>
      </div>

      <div className="containerDashboard1">
        <h2 className="Titulo2">Información del Componente</h2>
        <img className="imgComponent" src={ImgComponent} alt="" />
        <Form onSubmit={handleSubmit} className="containerAdd">
          <Form className="form1">               
            
            <FormGroup>
              <Label className="labels">Imagen del componente</Label>
              <Input
                className="urlImagen"
                placeholder="Imagen del Componente"
                type="url"
                name="compImgPpal"
                value={compImgPpal}
                onChange={onInputChange}
                required
              />
            </FormGroup>

            
            <FormGroup>
              <Label className="labels">Color del componente</Label>              
              <Input
                className=""                
                type="color"
                name="compColor"
                value={compColor}
                onChange={onInputChange}                
                required
              />
            </FormGroup>

            <FormGroup>
              <Label className="labels">Titulo Componente</Label>
              <Input
                className="urlImagen"
                placeholder="Titulo componente"
                type="text"
                name="compTitulo"
                value={compTitulo}
                onChange={onInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label className="labels">Definición</Label>
              <Input
                className="urlImagen"
                placeholder="Definición"
                type="text"
                name="compDefinicion"
                value={compDefinicion}
                onChange={onInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label className="labels" for="exampleUrl">
                Url Video
              </Label>
              <Input
                className="urlImagen"
                id="exampleUrl"
                name="compVideo"
                placeholder="url Video"
                type="text"
                value={compVideo}
                onChange={onInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label className="labels">Descripción Componente</Label>
              <Input
                className="urlImagen"
                name="compDescripcion"
                type="textarea"
                value={compDescripcion}
                onChange={onInputChange}
                required
              />
            </FormGroup>
          </Form>

          <Form className="form2">
            <FormGroup>
              <Label className="image1">Imagen 1</Label>
              <Input
                className="form2Images"
                placeholder="Agregue el link de la imagen"
                type="text"
                name="compImg1"
                value={compImg1}
                onChange={onInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label className="image1">Imagen 2</Label>
              <Input
                className="form2Images"
                placeholder="Agregue el link de la imagen"
                type="text"
                name="compImg2"
                value={compImg2}
                onChange={onInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label className="image1">Imagen 3</Label>
              <Input
                className="form2Images"
                placeholder="Agregue el link de la imagen"
                type="text"
                name="compImg3"
                value={compImg3}
                onChange={onInputChange}
                required
              />
            </FormGroup>
          </Form>

          <Form className="Objetivos">
            <FormGroup>
              <Label className="image1">Objetivo 1</Label>
              <Input
                className="formObj"
                placeholder="Objetivo"
                type="text"
                name="compObjetivo1"
                value={compObjetivo1}
                onChange={onInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label className="image1">Objetivo 2</Label>
              <Input
                className="formObj"
                placeholder="Objetivo"
                type="text"
                name="compObjetivo2"
                value={compObjetivo2}
                onChange={onInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label className="image1">Objetivo 3</Label>
              <Input
                className="formObj"
                placeholder="Objetivo"
                type="text"
                name="compObjetivo3"
                value={compObjetivo3}
                onChange={onInputChange}
                required
              />
            </FormGroup>
          </Form>

          <Form className="lineasTrabajo">
            <FormGroup>
              <Label className="lineas">Lineas de Trabajo 1</Label>
              <Input
                className="urlImagen"
                id="exampleText"
                name="compLineaTrabajo1"
                type="text"
                value={compLineaTrabajo1}
                onChange={onInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label className="lineas">Lineas de Trabajo 2</Label>
              <Input
                className="urlImagen"
                id="exampleText"
                name="compLineaTrabajo2"
                type="text"
                value={compLineaTrabajo2}
                onChange={onInputChange}
                required
              />
            </FormGroup>
          </Form>

          <h2 className="principalComponente1">Recursos</h2>
          <Form className="Recursos">
            <FormGroup className="containerRecursos">
              <img className="Logos" src={metodologia} alt="" />
              <Label className="image1">Metodologia</Label>
              <Input
                className="recursosForm"
                type="text"
                name="recursosMetodologia"
                value={recursosMetodologia}
                onChange={onInputChange}
                required
              />
              <FormText>Enlace de los recursos</FormText>
            </FormGroup>

            <FormGroup className="containerRecursos">
              <img className="Logos" src={Diagnostico} alt="" />
              <Label className="image1">Formatos e Instructivos</Label>
              <Input
                className="recursosForm"
                type="text"
                name="recursosFormatos"
                value={recursosFormatos}
                onChange={onInputChange}
                required
              />
              <FormText>Enlace de los recursos</FormText>
            </FormGroup>

            <FormGroup className="containerRecursos">
              <img className="Logos" src={Formato} alt="" />
              <Label className="image1">Diagnosticos de Salud</Label>
              <Input
                className="recursosForm"
                type="text"
                name="recursosDiagnosticos"
                value={recursosDiagnosticos}
                onChange={onInputChange}
                required
              />
              <FormText>Enlace de los recursos</FormText>
            </FormGroup>

            <FormGroup className="containerRecursos">
              <img className="Logos" src={Material} alt="" />
              <Label className="image1">
                Herramientas y Manuales de Protocolo
              </Label>
              <Input
                className="recursosForm"
                type="text"
                name="recursosHerramientas"
                value={recursosHerramientas}
                onChange={onInputChange}
                required
              />
              <FormText>Enlace de los recursos</FormText>
            </FormGroup>

            <FormGroup className="containerRecursos">
              <img className="Logos" src={Herramientas} alt="" />
              <Label className="image1">Material Educativo</Label>
              <Input
                className="recursosForm"
                type="text"
                name="recursosMaterial"
                value={recursosMaterial}
                onChange={onInputChange}
                required
              />
              <FormText>Enlace de los recursos</FormText>
            </FormGroup>



            
          </Form>
        </Form>
        <div className="botones">
          <button>
            <img
              className="iconos"
              onClick={handleSubmit}
              src={Guardar}
              alt=""
            />
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

export default AddComponent;
