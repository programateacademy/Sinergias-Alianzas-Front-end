// Dependencias
import React, { useState, useEffect } from "react";

// Componentes
import PasswordInput from "../../components/Layout/PasswordInput/PasswordInput";

// Iconos
import { FaTimes, FaCheck } from "react-icons/fa";

// Estilos
import {
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardHeader,
  ListGroup,
  ListGroupItem,
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

  //* Estado de la ventana modal
  const [modal, setModal] = useState(false);

  //* Estado información del usuario
  const [profile, setProfile] = useState(initialState);

  //* Estado del formulario para cambiar la contraseña
  const [formData, setFormData] = useState(passwordState);

  const { oldPassword, password, confirmPassword } = formData;

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

  //* Función para mostrar u ocultar el modal
  const toggleModal = () => {
    setModal(!modal);
  };

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
      <div className="containerTitle">
        <h1>DETALLE DE USUARIO</h1>
      </div>
      <div className="containerDashboard">
      <Card
        style={{
          width: "18rem",
          margin: "20px auto 20px auto",
        }}
      >
        <CardBody>
          <Form>
            <FormGroup>
              <p style={{ color: "#126a2e", fontWeight: "700" }}>Rol</p>
              <Input
                id="rol"
                name="rol"
                type="text"
                value={profile.role}
                disabled
              />
            </FormGroup>
            <FormGroup>
              <p style={{ color: "#126a2e", fontWeight: "700" }}>Nombre</p>
              <Input
                id="name"
                name="name"
                type="text"
                value={profile.name}
                disabled
              />
            </FormGroup>

            <FormGroup>
              <p style={{ color: "#126a2e", fontWeight: "700" }}> Correo</p>

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
      </div>
    </>
  );
};

export default Profile;
