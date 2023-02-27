// Dependencias
import React, { useState, useEffect } from "react";

// Componentes
import PasswordInput from "../../components/Layout/PasswordInput/PasswordInput";

// Iconos
import { FaTimes, FaCheck } from "react-icons/fa";

// Estilos
import {
  Button,
  Form,
  FormGroup,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

// Estado inicial
const initialState = {
  password: "",
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

  const { password, confirmPassword } = formData;

  //* Estado para validar la estructura de la contraseña
  /*
   La contraseña debe tener las siguientes características:
   Letras mayusculas y minusculas
   Números
   Caracter especial (!@#$...)
   No puede tener menos de 8 caracteres
  */
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [specialCharacter, setSpecialCharacter] = useState(false);
  const [passLength, setPassLength] = useState(false);

  const timesIcon = <FaTimes color="red" size={15} />;
  const checkIcon = <FaCheck color="green" size={15} />;

  /* 
  - =================================
  -    FUNCIONES DEL COMPONENTE
  - =================================
  */

  //* Función para cambiar el icono en las condiciones de la contraseña
  const switchIcon = (condition) => {
    if (condition) {
      return checkIcon;
    }

    return timesIcon;
  };

  //* Función para capturar el valor del input
  const onInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  //* Renderizar el componente de acuerdo a las condiciones de la contraseña
  useEffect(() => {
    //? ¿Contiene letras mayúsculas y minúsculas?
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setUpperCase(true);
    } else {
      setUpperCase(false);
    }

    //? ¿Contiene números?
    if (password.match(/([0-9])/)) {
      setNumbers(true);
    } else {
      setNumbers(false);
    }

    //? ¿Contiene caracteres especiales?
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,-])/)) {
      setSpecialCharacter(true);
    } else {
      setSpecialCharacter(false);
    }

    //? ¿Contiene mínimo 8 caracteres?
    if (password.length > 7) {
      setPassLength(true);
    } else {
      setPassLength(false);
    }
  }, [password]);

  //* Función para enviar el formulario
  const handleSubmit = () => {};

  return (
    <>
      <Card style={{ width: "40%" }}>
        <CardHeader>Cambiar Contraseña</CardHeader>

        <Form className="mt-1" style={{ maxWidth: "100%", padding: "10px" }}>
          <FormGroup>
            <PasswordInput
              name="password"
              placeholder="Nueva Contraseña"
              type="password"
              value={password}
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

          {/* Característica de la contraseña */}
          <Card
            style={{
              width: "100%",
            }}
          >
            <CardHeader>La contraseña debe contener al menos:</CardHeader>
            <ListGroup flush>
              <ListGroupItem>
                {switchIcon(upperCase)}
                &nbsp; Una letra minúscula y mayúscula
              </ListGroupItem>

              <ListGroupItem>
                {switchIcon(numbers)}
                &nbsp; Un número (0-9)
              </ListGroupItem>

              <ListGroupItem>
                {switchIcon(specialCharacter)}
                &nbsp; Un caracter especial (!%&@#$^*?_-)
              </ListGroupItem>

              <ListGroupItem>
                {switchIcon(passLength)}
                &nbsp; Mínimo 8 caracteres
              </ListGroupItem>
            </ListGroup>
          </Card>

          <Button color="success" className="mt-1">
            Cambiar contraseña
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default ResetPassword;

