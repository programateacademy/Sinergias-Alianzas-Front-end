// Dependencias
import React, { useState, useEffect } from "react";
// Manejo de rutas

// Iconos
import { FaEdit, FaTrash } from "react-icons/fa";

// Estilos
import {  
  Button  
} from "reactstrap";

import Buttonedit from "../Buttonedit/buttonedit";
import Buttondelete from "../../components/buttondelete/buttondelete";

//style
import "../RowTableUsers/RowTableUsers.css";

const RowTableUsers = () => {
  return (
    <tr className="tableinfo2">
      <th scope="row">1</th>
      <td>Nombre usuario</td>
      <td>usuario@correo.com</td>
      <td>Colaborador</td>
      <td>
        <Button color="">
          <Buttonedit>
            <FaEdit color="green" size={15} />
          </Buttonedit>
        </Button>

        <Button color="">
          <Buttondelete>
            <FaTrash color="red" size={15} />
          </Buttondelete>
        </Button>
      </td>
    </tr>
  );
};

export default RowTableUsers;
