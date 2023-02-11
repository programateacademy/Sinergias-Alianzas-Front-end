// Dependencias
import React from "react";
import { Link } from "react-router-dom";

// Motion
import { motion } from "framer-motion";

// Icons
import { FaUsersCog } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

// Estilos
import Addicon from "./Assets/AddIcon.png";
import Logosinergias from "./Assets/Logosinergias.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header_container">
      {/* Logo */}
      <img src={Logosinergias} alt="Logo Sinergias" className="header_logo" />

      {/* Navegación */}
      <nav>
        <ul className="container_btn_header">
          <motion.li
            className="buttons_header"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to={"/"} className="buttons_header-users">
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
            <Link to={"/"} className="buttons_header-logout">
              <div className="icon_container">
                <MdLogout className="header_icon" />
              </div>

              <span>Salir</span>
            </Link>
          </motion.li>
        </ul>
        <div></div>
      </nav>
    </div>
  );
};

export default Header;
