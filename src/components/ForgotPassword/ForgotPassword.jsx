// dependencies
import React, { useState } from "react";

// icons
import { RiLockPasswordFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

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
import { validateEmail } from "../../store/actions/auth/authService";
import { forgotPassword, RESET } from "../../store/actions/auth/authSlice";
import Loader from "../Loader/Loader";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  //* Hooks Redux
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.auth);

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
  const handleSubmit = async (e) => {
    e.preventDefault();

    //* Input validation
    if (!email) {
      return toast.error("Por favor ingresa un correo.");
    }

    if (!validateEmail(email)) {
      return toast.error("Ingresa un correo válido");
    }

    const userData = {
      email,
    };

    await dispatch(forgotPassword(userData));
    await dispatch(RESET(userData));

    toggleModal();
  };

  return (
    <>
      <div className="fgpass-button">
        {isLoading && <Loader />}
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
