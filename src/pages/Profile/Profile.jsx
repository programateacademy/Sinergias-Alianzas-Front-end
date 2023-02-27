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
    name: `${user?.name.firstName} ${user?.name.lastName}` || "",
    email:  user?.email,
    rol:  user?.rol,
    isVerified:  user?.isVerify,
  };

  /* 
  - =================================
  -       ESTADOS DEL COMPONENTE
  - =================================
  */
  //* Estado del perfil
  const [profile, setProfile] = useState(initialState);
  console.log(initialState)

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
    dispatch(getUser())
  }, [dispatch])

  return (
    <>
    {isLoading && <Loader/>}
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

          <ChangePassword />
        </CardBody>
      </Card>
    </>
  );
};

export default Profile;
