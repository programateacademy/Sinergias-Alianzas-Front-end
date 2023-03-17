// dependencies
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";



// Redux functions
import { RESET, logout } from "../../store/actions/auth/authSlice";

// Motion
import { motion } from "framer-motion";

// Components
import { UserName } from "../../pages/BackOffice/Profile/Profile";

// Icons
import { FaUsersCog, FaUserAlt } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

// styles
import { Breadcrumb, BreadcrumbItem, Container } from "reactstrap";
import Logosinergias from "./Assets/Logosinergias.png";
import "./Header.css";
import "./HeaderUser.css";

const Header = ({ isAdminOrUser, setIsAdminOrUse}) => {
  /* 
  - =================================
  -    COMPONENT FUNCTIONS
  - =================================
  */
  //* Hooks Redux
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //* Function to return to the dashboard from the logo
  const goHome = () => {
    navigate("/home");
  };
  const goHomeUser = () => {
    navigate("/homeUser");
  };

  //* Function to log out
  const logoutUser = async () => {
    dispatch(RESET());

    await dispatch(logout());

    navigate("/");
  };
 // funcionalidad de headerUsuario
 
 const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    isAdminOrUser === false ? 
    <>
    <nav className="navigation-bar">
      <div className="logo">
        <a href="https://www.google.com/">
          <img src={Logosinergias} alt="Logo" />
        </a>
      </div>
      <div className="menu">
        <button className="menu-button">Caja de herramientas</button>
        <button className="menu-button">Foro</button>
        <button className="menu-button">Iniciar sesión</button>
        <button className="menu-toggle" onClick={handleMenuClick}>
          Menu
        </button>
      </div>
      {showMenu && (
        <div className="dropdown-menu">
          <button className="dropdown-button">Caja de herramientas</button>
          <button className="dropdown-button">Foro</button>
          <button className="dropdown-button">Iniciar sesión</button>
        </div>
      )}
    </nav>
    </>
    :
    <> 
    <header className="header_container">
      {/* Logo */}
      <img
        src={Logosinergias}
        alt="Logo Sinergias"
        className="header_logo"
        onClick={goHome}
      />

      {/* Navigation */}
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

    {/* Navigation to go to user profile */}
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
