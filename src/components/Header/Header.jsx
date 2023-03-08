// dependencies
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Redux functions
import { RESET, logout } from "../../store/actions/auth/authSlice";
import { getUser, selectUser } from "../../store/actions/auth/authSlice";

// Motion
import { motion } from "framer-motion";

// Icons
import { FaUsersCog, FaUserAlt } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

// styles
import { Breadcrumb, BreadcrumbItem, Container } from "reactstrap";
import Logosinergias from "./Assets/Logosinergias.png";
import "./Header.css";

const Header = () => {
  const UserName = () => {
    const user = useSelector(selectUser);  
    const userName = {
      name: `${user?.name.firstName} ${user?.name.lastName}` === undefined?"": `${user?.name.firstName} ${user?.name.lastName}` ,
      rol: `${user?.rol}` === undefined?"": `${user?.rol}`,
    };  
    return (
      <BreadcrumbItem active tag="span">
        Hola {userName.name}, {userName.rol} {" "} /{" "}
        <FaUserAlt className="breadcrumb-icon" />
        <Link to={"/profile"} className="breadcrumb-link">
          Perfil
        </Link>
      </BreadcrumbItem>
    );
  };

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

  //* Function to log out
  const logoutUser = async () => {
    dispatch(RESET());
    await dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

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

          <BreadcrumbItem
            tag="span"
            className="breadcrumb-profile"
          ></BreadcrumbItem>
        </Breadcrumb>
      </Container>
    </>
  );
};
export default Header;
