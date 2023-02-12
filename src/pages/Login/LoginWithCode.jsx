import React, { useState } from "react";

// Estilos
import { Button, Form, FormGroup, Input, Card, CardHeader } from "reactstrap";

const LoginWithCode = () => {
  /* 
  - =================================
  -       ESTADOS DEL COMPONENTE
  - =================================
  */

  // Estado del formulario
  const [loginCode, setLoginCode] = useState("");

  /* 
  - =================================
  -    FUNCIONES DEL COMPONENTE
  - =================================
  */

  // Función para capturar el valor del input
  const onInputChange = (e) => {
    setLoginCode(e.target.value);
  };

  // Función para enviar el formulario
  const handleSubmit = () => {};
  return (
    <>
      <Card style={{ width: "40%" }}>
        <CardHeader>Ingresar Código De Acceso</CardHeader>

        <Form className="mt-1" style={{ maxWidth: "100%", padding: "10px" }}>
          <FormGroup>
            <Input
              name="accessCode"
              placeholder="Código"
              type="text"
              value={loginCode}
              onChange={onInputChange}
            />
          </FormGroup>

          <Button color="success" className="mt-1">
            Ingresar
          </Button>
        </Form>

        <p>Reenviar código</p>
      </Card>
    </>
  );
};

export default LoginWithCode;
