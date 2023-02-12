// Dependencias
import React, { useState } from "react";

// Componentes
import PasswordInput from "../Layout/PasswordInput/PasswordInput";

// Iconos
import { RiUserAddFill } from "react-icons/ri";

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
import "./AddUser.css";

const AddUser = () => {
  /* 
  - =================================
  -       ESTADOS DEL COMPONENTE
  - =================================
  */

  //* Estado de la ventana modal
  const [modal, setModal] = useState(false);

  //* Estado del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* 
  - =================================
  -    FUNCIONES DEL COMPONENTE
  - =================================
  */

  // Función para mostrar u ocultar el modal
  const toggleModal = () => {
    setModal(!modal);
  };

  // Función para capturar el valor del input
  const onChange = () => {};

  // Función para enviar el formulario
  const handleSubmit = () => {};

  return (
    <>
      <div className="adduser-button">
        <div className="icon_container">
          <RiUserAddFill />
        </div>

        <Button onClick={toggleModal}>Nuevo Usuario</Button>
      </div>

      {/* Ventana Modal */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader>Registro de Usuario</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Input
                name="lastName"
                placeholder="Apellidos"
                type="text"
                required
              />
            </FormGroup>

            <FormGroup>
              <Input
                name="firstName"
                placeholder="Primer nombre"
                type="text"
                required
              />
            </FormGroup>

            <FormGroup>
              <Input
                name="secondName"
                placeholder="Segundo nombre"
                type="text"
              />
            </FormGroup>

            <FormGroup>
              <Input
                name="email"
                placeholder="Correo electrónico"
                type="email"
                required
              />
            </FormGroup>

            <FormGroup>
              <PasswordInput
                name="password"
                placeholder="Contraseña"
                type="password"
                value={password}
                onChange={onChange}
              />
            </FormGroup>

            <FormGroup>
              <PasswordInput
                name="password"
                placeholder="Confirmar Contraseña"
                type="password"
                value={password}
                onChange={onChange}
              />
            </FormGroup>
            <Button color="success">Registrar</Button>
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

export default AddUser;
