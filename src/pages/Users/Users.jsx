// dependencies
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, setCurrentPage } from "../../store/actions/auth/authSlice";
import { Link } from "react-router-dom";

import { deleteUser } from "../../store/actions/auth/authSlice";

import Pagination from "../../components/Pagination/Pagination";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";

// Motion
import { motion } from "framer-motion";

// icons
import { FaTrash, FaUsersCog } from "react-icons/fa";

// styles
import {
  Table,
  Button,
  Input,
} from "reactstrap";
import "./Users.css";

const Users = () => {
  //* Hook personalizado para redireccionar el usuario si la sesión expira
  useRedirectLoggedOutUser("/");

  //Filter
  const [search, setSearch] = useState(""); //constant for filter

  //* Hooks Redux
  const dispatch = useDispatch();

  const { isLoading, users, currentPage, numberOfPages } = useSelector((state) => state.auth);

  /*-----------FILTER AND SEARCH----------- */
  const searcher = (e) => {
    setSearch(e.target.value);
  };

  //filter method by name
  const results = !search
    ? users
    : users.filter(
        (dato) =>
          dato.name.firstName
            .toLowerCase()
            .includes(search.toLocaleLowerCase()) ||
          dato.name.secondName
            .toLowerCase()
            .includes(search.toLocaleLowerCase())
      );

  useEffect(() => {
    dispatch(getUsers(currentPage));
  }, [currentPage]);

  const handleDelete = (id) => {
    //if (window.confirm("¿Estás seguro de eliminar el usuario?")) {
    dispatch(deleteUser(id));
    //}
    window.location.reload(true);
  };

  console.log(users);
  return (
    <>
      <div className="users-title">
        <h1>MÓDULO DE USUARIOS</h1>
      </div>

      <div className="border-container">
        <nav>
        <ul
          className="container_btn_header"
          style={{ margin: "0", display: "initial" }}
        >
          <motion.li
            className="buttons_header"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to={"/buttonsUsers"} className="buttons_header-users">
              <div className="icon_container">
                <FaUsersCog className="header_icon" />
              </div>
              <span>Funciones Usuarios</span>
            </Link>
          </motion.li>
        </ul>
        </nav>

        <section className="all-users">
          <Input
            placeholder="Buscar"
            type="text"
            value={search}
            onChange={searcher}
          />

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
                  <th>Acción</th>
                </tr>
              </thead>

              <tbody>
                {results.map((user, index) => {
                  const { _id, name, email, rol } = user;

                  // console.log(email)
                  // console.log(`${name.firstName} ${name.lastName}`)
                  // console.log(rol);
                  return (
                    <tr key={_id}>
                      <td>{index + 1}</td>
                      <td>{`${name.firstName} ${name.lastName}`}</td>
                      <td>{email}</td>
                      <td>{rol}</td>
                      <td>

                        <Button color="" onClick={() => handleDelete(_id)}>
                          <FaTrash color="red" size={15} />
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          )}

          <Pagination 
          setCurrentPage={setCurrentPage}
          numberOfPages = {numberOfPages}
          currentPage = {currentPage}
          dispatch = {dispatch}
          />
        </section>
      </div>
    </>
  );
};

export default Users;
