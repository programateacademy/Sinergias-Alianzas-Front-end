// Dependencias
import React, {useState} from "react";

// Iconos
import { RiLockPasswordFill } from "react-icons/ri";

// Estilos
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
  -       ESTADOS DEL COMPONENTE
  - =================================
  */
 
  //* Estado de la ventana modal
  const [modal, setModal] = useState(false);

  const [email, setEmail] = useState()

  /* 
  - =================================
  -    FUNCIONES DEL COMPONENTE
  - =================================
  */

  //* Función para mostrar u ocultar el modal
  const toggleModal = () => {
    setModal(!modal);
  };

  //* Función para capturar el valor del input
  const onInputChange = (e) => {
    setEmail(e.target.value)
  };

  //* Función para enviar el formulario
  const handleSubmit = () => {};

  return (
    <>
      <div className="fgpass-button">
        <div className="icon_container">
          <RiLockPasswordFill />
        </div>
        <Button className="recoverPassword" onClick={toggleModal}>Recuperar Contraseña</Button>
      </div>

      {/* Ventana Modal */}
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
