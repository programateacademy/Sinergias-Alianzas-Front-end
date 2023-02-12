// Dependencias
import React from "react";

// Iconos
import { RiLockPasswordFill } from "react-icons/ri";

// Estilos
import { Button } from "reactstrap";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <>
      <div className="fgpass-button">
        <div className="icon_container">
          <RiLockPasswordFill />
        </div>

        <Button>Recuperar Contraseña</Button>
      </div>
    </>
  );
};

export default ForgotPassword;
