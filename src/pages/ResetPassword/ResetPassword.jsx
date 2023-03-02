// dependencies
import React, { useState, useEffect } from "react";

// Components
import PasswordInput from "../../components/Layout/PasswordInput/PasswordInput";

// icons
import { FaTimes, FaCheck } from "react-icons/fa";

// styles
import {
  Button,
  Form,
  FormGroup,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

// Initial state
const initialState = {
  password: "",
  confirmPassword: "",
};

const ResetPassword = () => {
  /* 
  - =================================
  -       COMPONENT STATES
  - =================================
  */

  //* form status
  const [formData, setFormData] = useState(initialState);

  const { password, confirmPassword } = formData;

  //* State to validate the password structure
  /*
    The password must have the following characteristics:
    Uppercase and lowercase letters
    Numbers
    Special character (!@#$...)
    Cannot be less than 8 characters
  */
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [specialCharacter, setSpecialCharacter] = useState(false);
  const [passLength, setPassLength] = useState(false);

  const timesIcon = <FaTimes color="red" size={15} />;
  const checkIcon = <FaCheck color="green" size={15} />;

  /* 
  - =================================
  -    COMPONENT FUNCTIONS
  - =================================
  */

  //* Function to change the icon in the password conditions
  const switchIcon = (condition) => {
    if (condition) {
      return checkIcon;
    }

    return timesIcon;
  };

  //* Function to capture the value of the input
  const onInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  //* Render the component according to the password conditions
  useEffect(() => {
    //? Does it contain uppercase and lowercase letters?
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setUpperCase(true);
    } else {
      setUpperCase(false);
    }

    //? Does it contain numbers?
    if (password.match(/([0-9])/)) {
      setNumbers(true);
    } else {
      setNumbers(false);
    }

    //? Does it contain special characters?
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,-])/)) {
      setSpecialCharacter(true);
    } else {
      setSpecialCharacter(false);
    }

    //? Does it contain at least 8 characters?
    if (password.length > 7) {
      setPassLength(true);
    } else {
      setPassLength(false);
    }
  }, [password]);

  //* Function to submit the form
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

          {/* password feature*/}
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

