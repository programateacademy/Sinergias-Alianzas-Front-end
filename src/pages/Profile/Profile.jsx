// Dependencias
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Funciones de Redux
import { getUser } from "../../store/actions/auth/authSlice";

// Componentes
import Loader from "../../components/Loader/Loader";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import Notification from "../../components/Notification/Notification";

// Estilos
import {
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,  
  Button,
} from "reactstrap";

const Profile = () => {
  //* Hook personalizado para redireccionar el usuario si la sesión expira
  useRedirectLoggedOutUser("/");

  //* Hooks Redux
  const dispatch = useDispatch();

  //* Estado función redux
  const { isLoading, user } = useSelector((state) => state.auth);

  //* Estado inicial
  const initialState = {
    name: `${user?.name.firstName} ${user?.name.lastName}` || "",
    email: user?.email,
    rol: user?.rol,
    isVerified: user?.isVerify,
  };

  /* 
  - =================================
  -       ESTADOS DEL COMPONENTE
  - =================================
  */
  //* Estado del perfil
  const [profile, setProfile] = useState(initialState);
  // console.log(initialState)

  /* 
  - =================================
  -    FUNCIONES DEL COMPONENTE
  - =================================
  */

  //* Función para capturar el valor del input
  const onInputChange = (e) => {
    const { name, value } = e.target;

    setProfile({ ...profile, [name]: value });
  };

  //* Renderizar información del usuario
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {!initialState.isVerified && <Notification />}
      <Card
        style={{
          width: "18rem",
          margin: "100px auto",
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
                defaultValue={""}
                value={initialState?.rol}
                onChange={onInputChange}
                disabled
              />
            </FormGroup>
            <FormGroup>
              <p style={{ color: "#126a2e", fontWeight: "700" }}>Nombre</p>
              <Input
                id="name"
                name="name"
                type="text"
                value={initialState?.name}
                onChange={onInputChange}
                disabled
              />
            </FormGroup>

            <FormGroup>
              <p style={{ color: "#126a2e", fontWeight: "700" }}> Correo</p>

              <Input
                id="email"
                name="email"
                type="email"
                value={initialState?.email}
                onChange={onInputChange}
                disabled
              />
            </FormGroup>
          </Form>
          <Link to={"/changePassword"}>
            <Button color="primary">Cambiar Contraseña</Button>
          </Link>
        </CardBody>
      </Card>
    </>
  );
};
export default Profile;
