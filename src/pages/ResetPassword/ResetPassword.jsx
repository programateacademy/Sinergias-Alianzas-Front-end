// Dependencias
import React, { useState } from "react";

// Componentes
import PasswordInput from "../../components/Layout/PasswordInput/PasswordInput";

// Estilos
import { Button, Form, FormGroup, Input, Card, CardHeader } from "reactstrap";

// Estado inicial
const initialState = {
  newPassword: "",
  confirmPassword: "",
};

const ResetPassword = () => {
  /* 
  - =================================
  -       ESTADOS DEL COMPONENTE
  - =================================
  */

  //* Estado del formulario
  const [formData, setFormData] = useState(initialState);

  const { newPassword, confirmPassword } = formData;

  /* 
  - =================================
  -    FUNCIONES DEL COMPONENTE
  - =================================
  */
  // Función para capturar el valor del input
  const onInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  // Función para enviar el formulario
  const handleSubmit = () => {};

  return (
    <>
      <Card style={{ width: "40%" }}>
        <CardHeader>Cambiar Contraseña</CardHeader>

        <Form className="mt-1" style={{ maxWidth: "100%", padding: "10px" }}>
          <FormGroup>
            <PasswordInput
              name="newPassword"
              placeholder="Nueva Contraseña"
              type="password"
              value={newPassword}
              onChange={onInputChange}
            />
          </FormGroup>

          <FormGroup>
            <PasswordInput
              name="confirmPassword"
              placeholder="Confirmar Nueva Contraseña"
              type="password"
              value={confirmPassword}
              onChange={onInputChange}
            />
          </FormGroup>

          <Button color="success" className="mt-1">
            Cambiar contraseña
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default ResetPassword;
