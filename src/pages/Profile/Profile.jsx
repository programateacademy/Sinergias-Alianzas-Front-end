// Dependencias
import React, { useState } from "react";

// Componentes
import PasswordInput from "../../components/Layout/PasswordInput/PasswordInput";

// Estilos
import {
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

// Estado inicial
const initialState = {
  name: "usuario",
  email: "usuario@correo.com",
  role: "colaborador",
  isVerified: false,
};

const passwordState = {
  oldPassword: "",
  password: "",
  confirmPassword: "",
};

const Profile = () => {
  /* 
  - =================================
  -       ESTADOS DEL COMPONENTE
  - =================================
  */
  //  Estado información del usuario
  const [profile, setProfile] = useState(initialState);

  //   Estado del formulario para cambiar la contraseña
  const [formData, setFormData] = useState(passwordState);

  const { oldPassword, password, confirmPassword } = formData;

  //* Estado de la ventana modal
  const [modal, setModal] = useState(false);

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
  const onInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  // Función para enviar el formulario
  const handleSubmit = () => {};
  return (
    <>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <CardBody>
          <Form>
            <FormGroup>
              <Label for="rol" style={{ color: "#161616" }}>
                Rol
              </Label>

              <Input
                id="rol"
                name="rol"
                type="text"
                value={profile.role}
                disabled
              />
            </FormGroup>
            <FormGroup>
              <Label for="name" style={{ color: "#161616" }}>
                Nombre
              </Label>

              <Input
                id="name"
                name="name"
                type="text"
                value={profile.name}
                disabled
              />
            </FormGroup>

            <FormGroup>
              <Label for="email" style={{ color: "#161616" }}>
                Correo
              </Label>

              <Input
                id="email"
                name="email"
                type="email"
                value={profile.email}
                disabled
              />
            </FormGroup>
          </Form>

          <Button color="primary" onClick={toggleModal}>
            Cambiar Contraseña
          </Button>
        </CardBody>
      </Card>

      {/* Ventana Modal */}
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

export default Profile;
