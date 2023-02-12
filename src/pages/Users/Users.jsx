// Dependencias
import React from "react";

// Motion
import { motion } from "framer-motion";

// Componentes
import AddUser from "../../components/AddUser/AddUser";
import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";

// Estilos
import "./Users.css";

const Users = () => {
  return (
    <>
      <div className="users-title">
        <h1>Módulo de Usuarios</h1>
      </div>

      <div className="border-container">
        <nav>
          <ul className="buttons-container">
            <motion.li className="buttons-users">
              <AddUser />
            </motion.li>

            <motion.li className="buttons-users">
              <ForgotPassword />
            </motion.li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Users;
