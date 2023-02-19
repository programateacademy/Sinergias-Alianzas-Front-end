// Dependencias
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Funciones de Redux
import { getUser, selectUser } from "../../store/actions/auth/authSlice";

// Componentes
import ChangePassword from "../../components/ChangePassword/ChangePassword";
import Loader from "../../components/Loader/Loader";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";

// Estilos
import { Card, CardBody, Form, FormGroup, Input } from "reactstrap";

const Profile = () => {
  //* Hook personalizado para redireccionar el usuario si la sesión expira
  useRedirectLoggedOutUser("/");

  //* Hooks Redux
  const dispatch = useDispatch();

  //* Estado función redux
  const { isLoading, isLoggedIn, isSuccess, message, user } = useSelector(
    (state) => state.auth
  );

  // Estado inicial
  const initialState = {
    name: user?.name || "",
    email: user?.email || "",
    rol: user?.rol || "",
    isVerified: user?.isVerify || false,
  };

  /* 
  - =================================
  -       ESTADOS DEL COMPONENTE
  - =================================
  */
  //* Estado del perfil
  const [profile, setProfile] = useState(initialState);

  /* 
  - =================================
  -    FUNCIONES DEL COMPONENTE
  - =================================
  */

  //* Renderizar información del usuario
  /*
  ! Solucionar: Cuando se renderiza le componente no muestra la información 
  ! del usuario y tampoco retorna a la página de usuarios. 
  ! Al mirar con el console.log la información si se está cargando en el state
  */
  // useEffect(() => {
  //   dispatch(getUser())
  // }, [dispatch])

  return (
    <>
      <Card
        style={{
          width: "18rem",
          margin: "auto",
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
                value={profile?.rol}
                disabled
              />
            </FormGroup>
            <FormGroup>
              <p style={{ color: "#126a2e", fontWeight: "700" }}>Nombre</p>
              <Input
                id="name"
                name="name"
                type="text"
                value={profile?.name.firstName}
                disabled
              />
            </FormGroup>

            <FormGroup>
              <p style={{ color: "#126a2e", fontWeight: "700" }}> Correo</p>

              <Input
                id="email"
                name="email"
                type="email"
                value={profile?.email}
                disabled
              />
            </FormGroup>
          </Form>

          <ChangePassword />
        </CardBody>
      </Card>
    </>
  );
};

export default Profile;
