// Dependencias
import React from "react";

// Motion
import { motion } from "framer-motion";

// Componentes
import AddUser from "../../components/AddUser/AddUser";
import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";
import Search from "../../components/Search/Search";
import RowTableUsers from "../../components/RowTableUsers/RowTableUsers";
import Pagination from "../../components/Pagination/Pagination";

// Estilos
import { Table } from "reactstrap";
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

        <section className="all-users">
          <Search />

          <Table hover responsive size="sm" striped className="table-users">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              <RowTableUsers />
            </tbody>
          </Table>

          <Pagination />
        </section>
      </div>
    </>
  );
};

export default Users;
