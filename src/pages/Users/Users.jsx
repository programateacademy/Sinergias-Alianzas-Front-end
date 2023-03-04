// dependencies
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/actions/auth/authSlice";

// Motion
import { motion } from "framer-motion";

// Components
import AddUser from "../../components/AddUser/AddUser";
import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";
import Search from "../../components/Search/Search";
import RowTableUsers from "../../components/RowTableUsers/RowTableUsers";
import Pagination from "../../components/Pagination/Pagination";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";

// icons
import { FaEdit, FaTrash } from "react-icons/fa";

// styles
import { Table, Button } from "reactstrap";
import "./Users.css";
import { useNavigate } from "react-router";

const Users = () => {
  //* Hook personalizado para redireccionar el usuario si la sesión expira
  useRedirectLoggedOutUser("/");

  //* Hooks Redux
  const dispatch = useDispatch();

  const { isLoading, isLoggedIn, isSuccess, message, users } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  console.log(users);
  return (
    <>
      <div className="users-title">
        <h1>MÓDULO DE USUARIOS</h1>
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

          {!isLoading && users.length === 0 ? (
            <p>Usuarios no encontrados</p>
          ) : (
            <Table hover responsive size="sm" striped className="table-users">
              <thead className="tableinfo">
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Rol</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user, index) => {
                  const { _id, name, email, rol } = user;

                  console.log(email)
                  console.log(`${name.firstName} ${name.lastName}`)
                  console.log(rol);
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{`${name.firstName} ${name.lastName}`}</td>
                      <td>{email}</td>
                      <td>{rol}</td>
                      <td>
                        <Button color="">
                          <FaEdit color="green" size={15} />
                        </Button>

                        <Button color="">
                          <FaTrash color="red" size={15} />
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          )}

          <Pagination />
        </section>
      </div>
    </>
  );
};

export default Users;
