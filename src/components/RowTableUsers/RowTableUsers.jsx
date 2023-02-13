// Dependencias
import React from "react";

// Iconos
import { FaEdit, FaTrash } from "react-icons/fa";

const RowTableUsers = () => {
  return (
    <tr>
      <th scope="row">1</th>
      <td>Nombre usuario</td>
      <td>usuario@correo.com</td>
      <td>Colaborador</td>
      <td>
        <FaEdit color="green" size={15} />

        <FaTrash color="red" size={15} />
      </td>
    </tr>
  );
};

export default RowTableUsers;
