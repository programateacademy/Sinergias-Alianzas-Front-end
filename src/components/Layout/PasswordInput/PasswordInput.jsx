// Dependencias
import React, { useState } from "react";

// Iconos
import { FaEye, FaEyeSlash } from "react-icons/fa";

// Estilos
import { Input } from "reactstrap";
import "./PasswordInput.css";

const PasswordInput = ({ placeholder, value, onChange, name, onPaste }) => {
  /* 
  - =================================
  -       ESTADOS DEL COMPONENTE
  - =================================
  */

  //* Estado de la contraseña: Visible u oculta
  const [showPassword, setShowPassword] = useState(false);

  /* 
  - =================================
  -    FUNCIONES DEL COMPONENTE
  - =================================
  */

  //* Función para mostrar u ocultar la contraseña en el input
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="input-password">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          onPaste={onPaste}
          required
        />

        <div className="icon-password" onClick={togglePassword}>
          {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
        </div>
      </div>
    </>
  );
};

export default PasswordInput;
