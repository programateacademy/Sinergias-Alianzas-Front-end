// Dependencias
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// Funciones Redux
import { RESET, logout } from "../../store/actions/auth/authSlice";

// Motion
import { motion } from "framer-motion";

// Componentes
import { UserName } from "../../pages/Profile/Profile";

// Icons
import { FaUsersCog, FaUserAlt } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

// Estilos
import { Breadcrumb, BreadcrumbItem, Container } from "reactstrap";
import Logosinergias from "./Assets/Logosinergias.png";
import "./Header.css";

const Header = () => {
  /* 
  - =================================
  -    FUNCIONES DEL COMPONENTE
  - =================================
  */
  //* Hooks Redux
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //* Función para regresar al dashboard desde el logo
  const goHome = () => {
    navigate("/home");
  };

  //* Función para cerrar sesión
  const logoutUser = async () => {
    dispatch(RESET());

    await dispatch(logout());

    navigate("/");
  };

  return (
    <>
      <header className="header_container">
        {/* Logo */}
        <img
          src={Logosinergias}
          alt="Logo Sinergias"
          className="header_logo"
          onClick={goHome}
        />

        {/* Navegación */}
        <nav>
          <ul className="container_btn_header">
            <motion.li
              className="buttons_header"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link to={"/users"} className="buttons_header-users">
                <div className="icon_container">
                  <FaUsersCog className="header_icon" />
                </div>

                <span>Usuarios</span>
              </Link>
            </motion.li>

            <motion.li
              className="buttons_header"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <button onClick={logoutUser} className="buttons_header-logout">
                <div className="icon_container">
                  <MdLogout className="header_icon" />
                </div>

                <span>Salir</span>
              </button>
            </motion.li>
          </ul>
        </nav>
      </header>

      {/* Navegación para ir al perfil del usuario */}
      <Container>
        <Breadcrumb listTag="div">
          <UserName />

          <BreadcrumbItem tag="span" className="breadcrumb-profile">
            <FaUserAlt className="breadcrumb-icon" />
            <Link to={"/profile"} className="breadcrumb-link">
              Perfil
            </Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </Container>
    </>
  );
};

export default Header;
