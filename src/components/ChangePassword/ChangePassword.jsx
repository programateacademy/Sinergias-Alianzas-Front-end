//* dependencies
import React, { useState, useEffect } from "react";

// Components
import PasswordInput from "../../components/Layout/PasswordInput/PasswordInput";

// icons
import { FaTimes, FaCheck } from "react-icons/fa";

// styles
import {
  Card,
  Form,
  FormGroup,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardHeader,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

const passwordState = {
  oldPassword: "",
  password: "",
  confirmPassword: "",
};

const ChangePassword = () => {
  /* 
  - =================================
  -       COMPONENT STATES
  - =================================
  */
  //* Modal window state
  const [modal, setModal] = useState(false);

  //* Status of the form to change the password
  const [formData, setFormData] = useState(passwordState);

  const { oldPassword, password, confirmPassword } = formData;

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
  //* Function to show or hide the modal
  const toggleModal = () => {
    setModal(!modal);
  };

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

  //* Function to submit the form
  const handleSubmit = () => {};

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
  return (
    <>
    <Button color="primary" onClick={toggleModal}>
            Cambiar Contraseña
          </Button>
      {/* modal window */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader>Cambiar Contraseña</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <PasswordInput
                name="oldPassword"
                placeholder="Contraseña actual"
                type="password"
                value={oldPassword}
                onChange={onInputChange}
              />
            </FormGroup>

            <FormGroup>
              <PasswordInput
                name="password"
                placeholder="Contraseña"
                type="password"
                value={password}
                onChange={onInputChange}
              />
            </FormGroup>

            <FormGroup>
              <PasswordInput
                name="confirmPassword"
                placeholder="Confirmar Contraseña"
                type="password"
                value={confirmPassword}
                onChange={onInputChange}
              />
            </FormGroup>

            {/* password feature */}
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

            <Button color="success" className="mt-3">
              Actualizar
            </Button>
          </Form>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ChangePassword;
