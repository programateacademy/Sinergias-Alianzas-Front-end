// Dependencies
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

// Redux functions
import { validateEmail } from "../../store/actions/auth/authService";
import {
  RESET,
  register,
  sendVerificationEmail,
} from "../../store/actions/auth/authSlice";

// Components
import PasswordInput from "../Layout/PasswordInput/PasswordInput";
import Loader from "../Loader/Loader";

// icons
import { RiUserAddFill } from "react-icons/ri";
import { FaTimes, FaCheck } from "react-icons/fa";

// styles
import "./AddUser.css";

//reactstrap elements
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

// Initial state of the form
const initialState = {
  lastName: "",
  firstName: "",
  secondName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const AddUser = () => {
  /* 
  - =================================
  -       COMPONENT STATES
  - =================================
  */

  //* Modal window state
  const [modal, setModal] = useState(false);

  //* form status
  const [formData, setFormData] = useState(initialState);

  const { lastName, firstName, secondName, email, password, confirmPassword } =
    formData;

  //* Redux Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isLoggedIn, isSuccess } = useSelector(
    (state) => state.auth
  );

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
  const registerUser = async (e) => {
    e.preventDefault();

    //* Input validation
    if (!lastName || !firstName || !email || !password) {
      return toast.error("Todos los campos son obligatorios");
    }

    if (password.length < 8) {
      return toast.error("La contraseña debe ser de 8 caracteres.");
    }

    if (!validateEmail(email)) {
      return toast.error("Ingresa un correo válido");
    }

    if (password !== confirmPassword) {
      return toast.error("La contraseña no coincide");
    }

    const userData = {
      firstName,
      secondName,
      lastName,
      email,
      password,
    };

    // console.log(userData)

    await dispatch(register(userData));
    await dispatch(sendVerificationEmail());
  };

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate("/profile");
    }

    dispatch(RESET());

    // toggleModal();
  }, [isLoggedIn, isSuccess, dispatch, navigate]);

  return (
    <>
      <div className="adduser-button">
        {isLoading && <Loader />}
        <div className="icon_container">
          <RiUserAddFill />
        </div>
        <Button className="newUser" onClick={toggleModal}>
          Nuevo Usuario
        </Button>
      </div>

      {/* modal window */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader>Registro de Usuario</ModalHeader>
        <ModalBody>
          <Form onSubmit={registerUser}>
            <FormGroup>
              <Input
                name="lastName"
                placeholder="Apellidos"
                type="text"
                value={lastName}
                onChange={onInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Input
                name="firstName"
                placeholder="Primer nombre"
                type="text"
                value={firstName}
                onChange={onInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Input
                name="secondName"
                placeholder="Segundo nombre"
                type="text"
                value={secondName}
                onChange={onInputChange}
              />
            </FormGroup>

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
                onPaste={(e) => {
                  e.preventDefault();
                  toast.error("Por favor, escribe la contraseña.");
                  return false;
                }}
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
              Registrar
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

export default AddUser;
