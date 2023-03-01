// dependencies
import React, { useState } from "react";

// styles
import { Button, Form, FormGroup, Input, Card, CardHeader } from "reactstrap";

const LoginWithCode = () => {
  /* 
  - =================================
  -       COMPONENT STATES
  - =================================
  */

  //* form status
  const [loginCode, setLoginCode] = useState("");

  /* 
  - =================================
  -    COMPONENT FUNCTIONS
  - =================================
  */

  //* Function to capture the value of the input
  const onInputChange = (e) => {
    setLoginCode(e.target.value);
  };

  //* Function to submit the form
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
