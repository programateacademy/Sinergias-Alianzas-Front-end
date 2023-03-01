// dependencies
import React, { useState } from "react";

// icons
import { RiLockPasswordFill } from "react-icons/ri";

// styles
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  /* 
  - =================================
  -       COMPONENT STATES
  - =================================
  */

  //* Modal window state
  const [modal, setModal] = useState(false);

  const [email, setEmail] = useState();

  /* 
  - =================================
  -    COMPONENT FUNCTIONS
  - =================================
  */

  //* Function to show or hide the modal
  const toggleModal = () => {
    setModal(!modal);
  };

  //* Function to capture the value of the input
  const onInputChange = (e) => {
    setEmail(e.target.value);
  };

  //* Function to submit the form
  const handleSubmit = () => {};

  return (
    <>
      <div className="fgpass-button">
        <div className="icon_container">
          <RiLockPasswordFill />
        </div>
        <Button className="recoverPassword" onClick={toggleModal}>
          Recuperar Contraseña
        </Button>
      </div>

      {/* modal window */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader>Recuperar Contraseña</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Input
                name="email"
                placeholder="Correo electrónico"
                type="email"
                value={email}
                onChange={onInputChange}
                required
              />
            </FormGroup>

            <Button color="success" className="mt-3">
              Recuperar contraseña
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

export default ForgotPassword;
