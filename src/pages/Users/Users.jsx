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
import useRedirectLoggedOutUser from '../../customHook/useRedirectLoggedOutUser'

// styles
import { Table } from "reactstrap";
import "./Users.css";

const Users = () => {
  //* Custom Hook to redirect user if session expires
  useRedirectLoggedOutUser("/");

  const { users } = useSelector((state) => 
    state.auth,
  );

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  
  console.log(users)
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

          
            {users &&
            users.map((item, index) => (
              <RowTableUsers 
              key={index} {...item}
               />
            ))}
          </Table>

          <Pagination />
        </section>
      </div>
    </>
  );
};

export default Users;
