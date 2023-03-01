import React, { useEffect, useState } from "react";
import "./editComponent.css";

//Use same css for the form
import "../AddComponent/addComponent.css";

import metodologia from "../AddComponent/assest/Rectangle25.png";
import Formato from "../AddComponent/assest/Rectangle26.png";
import Diagnostico from "../AddComponent/assest/Rectangle27.png";
import Herramientas from "../AddComponent/assest/Rectangle28.png";
import Material from "../AddComponent/assest/Rectangle29.png";
import Guardar from "../AddComponent/assest/guardar.png";
import Cancelar from "../AddComponent/assest/cancelar.png";

import { FormText, Form, FormGroup, Label, Input } from "reactstrap";

// Dependencias
import { toast } from "react-toastify";
import { useNavigate, NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Acciones de redux
import { updateComponent } from "../../store/actions/componentSlice";

const initialState = {
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
};

const EditComponent = () => {
  const [componentData, setComponentData] = useState(initialState);

  // Constante para mostrar si hay errores al enviar la información
  const { error, componentes } = useSelector((state) => ({
    ...state.componente,
  }));

  //   Se destructura la información del usuario que ingresó al sistema
  const { user } = useSelector((state) => ({ ...state.auth }));

  //   Dispatch para disparar la acción
  const dispatch = useDispatch();

  //   Redireccionar
  const navigate = useNavigate();

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

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const singleComponent = componentes.find(
        (componente) => componente._id === id
      );      
      setComponentData({ ...singleComponent });
    }
  }, [id]);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

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
      const updatedComponentData = {
        ...componentData,
        name: user?.result?.name,
      };
      dispatch(updateComponent({ id, updatedComponentData, navigate, toast }));
      handleClear();
    }
  };

  // Función para capturar cuando el valor del input cambie
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setComponentData({ ...componentData, [name]: value });
  };

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
        <h1>EDITAR COMPONENTE</h1>
      </div>

      <div className="containerDashboard1">
        <h2 className="Titulo2" style={{ color: `${compColor}` }}>
          {compTitulo}
        </h2>

        <img className="imgComponent" src={compImgPpal} alt="Image form BD" />

        <Form className="containerAdd" onSubmit={handleSubmit}>
          <Form className="form1">
            <FormGroup>
              <Label className="labels">Imagen del Componente</Label>
              <Input
                className="urlImagen"
                value={compImgPpal || ""}
                type="url"
                name="compImgPpal"
                onChange={onInputChange}
                required
              />
            </FormGroup>

            {/* COLOR */}

            <FormGroup>
              <Label className="labels">Color del Componente</Label>
              <div className="containerInput">
                <Input
                  className="inputColor"
                  value={compColor || ""}
                  type="color"
                  name="compColor"
                  onChange={onInputChange}
                  required
                />
              </div>
            </FormGroup>

            <FormGroup>
              <Label className="labels">Titulo Componente</Label>
              <div className="containerInput">
                <Input
                  className="urlImagen2"
                  type="text"
                  name="compTitulo"
                  value={compTitulo || ""}
                  onChange={onInputChange}
                  required
                />
              </div>
            </FormGroup>

            <FormGroup>
              <Label className="labels">Definición</Label>
              <div className="containerInput">
                <Input
                  className="urlImagen2"
                  type="text"
                  name="compDefinicion"
                  value={compDefinicion || ""}
                  onChange={onInputChange}
                  required
                />
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
                  value={compVideo || ""}
                  onChange={onInputChange}
                  required
                />
              </div>
            </FormGroup>

            <FormGroup>
              <Label className="labels">Descripción Componente</Label>
              <div className="containerInput">
                <Input
                  className="urlImagen2"
                  name="compDescripcion"
                  type="textarea"
                  value={compDescripcion || ""}
                  onChange={onInputChange}
                  required
                />
              </div>
            </FormGroup>
          </Form>

          <div className="form2">
            <FormGroup>
              <Label className="image1">Imagen 1</Label>
              <div className="containerInput">
                <Input
                  className="form2Images2"
                  type="text"
                  name="compImg1"
                  value={compImg1 || ""}
                  onChange={onInputChange}
                  required
                />
              </div>
            </FormGroup>

            <FormGroup>
              <Label className="image1">Imagen 2</Label>
              <div className="containerInput">
                <Input
                  className="form2Images2"
                  type="text"
                  name="compImg2"
                  value={compImg2 || ""}
                  onChange={onInputChange}
                  required
                />
              </div>
            </FormGroup>

            <FormGroup>
              <Label className="image1">Imagen 3</Label>
              <div className="containerInput">
                <Input
                  className="form2Images2"
                  type="text"
                  name="compImg3"
                  value={compImg3 || ""}
                  onChange={onInputChange}
                  required
                />
              </div>
            </FormGroup>
          </div>

          <div className="Objetivos">
            <FormGroup>
              <Label className="image1">Objetivo 1</Label>
              <div className="containerInput">
                <Input
                  className="formObj2"
                  type="text"
                  name="compObjetivo1"
                  value={compObjetivo1 || ""}
                  onChange={onInputChange}
                  required
                />
              </div>
            </FormGroup>

            <FormGroup>
              <Label className="image1">Objetivo 2</Label>
              <div className="containerInput">
                <Input
                  className="formObj2"
                  type="text"
                  name="compObjetivo2"
                  value={compObjetivo2 || ""}
                  onChange={onInputChange}
                  required
                />
              </div>
            </FormGroup>

            <FormGroup>
              <Label className="image1">Objetivo 3</Label>
              <div className="containerInput">
                <Input
                  className="formObj2"
                  type="text"
                  name="compObjetivo3"
                  value={compObjetivo3 || ""}
                  onChange={onInputChange}
                  required
                />
              </div>
            </FormGroup>
          </div>

          <div className="lineasTrabajo">
            <FormGroup>
              <Label className="lineas">Lineas de Trabajo 1</Label>
              <div className="containerInput">
                <Input
                  className="urlImagen"
                  id="exampleText"
                  name="compLineaTrabajo1"
                  type="text"
                  value={compLineaTrabajo1 || ""}
                  onChange={onInputChange}
                  required
                />
              </div>
            </FormGroup>

            <FormGroup>
              <Label className="lineas">Lineas de Trabajo 2</Label>
              <div className="containerInput">
                <Input
                  className="urlImagen"
                  id="exampleText"
                  name="compLineaTrabajo2"
                  type="text"
                  value={compLineaTrabajo2 || ""}
                  onChange={onInputChange}
                  required
                />
              </div>
            </FormGroup>
          </div>

          <h2 className="principalComponente1">Recursos</h2>
          <div className="Recursos">
            <FormGroup className="containerRecursos">
              <img className="Logos" src={metodologia} alt="" />
              <Label className="image1">Metodologia</Label>
              <div className="containerInput">
                <Input
                  className="recursosForm2"
                  type="text"
                  name="recursosMetodologia"
                  value={recursosMetodologia || ""}
                  onChange={onInputChange}
                  required
                />
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
                  value={recursosFormatos || ""}
                  onChange={onInputChange}
                  required
                />
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
                  value={recursosDiagnosticos || ""}
                  onChange={onInputChange}
                  required
                />
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
                  value={recursosHerramientas || ""}
                  onChange={onInputChange}
                  required
                />
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
                  value={recursosMaterial || ""}
                  onChange={onInputChange}
                  required
                />
              </div>
              <FormText>Enlace de los recursos</FormText>
            </FormGroup>
          </div>
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

export default EditComponent;
