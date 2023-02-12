// Dependencias
import React, { useState, useEffect } from "react";

// Componentes
import PasswordInput from "../../components/Layout/PasswordInput/PasswordInput";

// Estilos
import { Form, FormGroup, Label, Input } from "reactstrap";
import Background from "./Assets/BackgroundLogin.png";
import LoginIlustration from "./Assets/LoginIlustration.png";
import "./login.css";

const Login = () => {
  /* 
  - =================================
  -       ESTADOS DEL COMPONENTE
  - =================================
  */

  //* Estado del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* 
  - =================================
  -    FUNCIONES DEL COMPONENTE
  - =================================
  */

  //* Función para capturar el valor del input
  const onInputChange = () => {};

  //* Función para enviar el formulario
  const handleSubmit = () => {};

  return (
    <div className="Generalcontainer" style={{ padding: "0", margin: "0" }}>
      <img src={Background} alt="" />

      <div className="containerLogin">
        <img src={LoginIlustration} alt="" />

        <Form className="rowLogin" onSubmit={handleSubmit}>
          <div className="colLogin">
            <h1>Iniciar Sesión</h1>
            <FormGroup>
              <Label className="user-label" for="email">
                Correo
              </Label>

              <Input
                className="input"
                id="email"
                name="email"
                placeholder="Correo"
                type="email"
                value={email}
                onChange={onInputChange}
                required
              />
            </FormGroup>
          </div>

          <div className="col-md-12">
            <FormGroup>
              <Label className="user-label" for="password">
                Contraseña
              </Label>

              <PasswordInput
                className="input"
                id="password"
                name="password"
                placeholder="Contraseña"
                type="password"
                value={password}
                onChange={onInputChange}
              />
            </FormGroup>
          </div>

          <div className="col">
            <button type="submit" className="col_button">
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Ingresar</span>
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
