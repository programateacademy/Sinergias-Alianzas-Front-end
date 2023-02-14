// Dependencias
import React,  { useState, useEffect }from "react";
 // Manejo de rutas

// Iconos
import { FaEdit, FaTrash } from "react-icons/fa";

// Estilos
import {
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardHeader,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

import Buttonedit from"../Buttonedit/buttonedit";



const RowTableUsers = () => {
  
 
  return (
    
    
    <tr>
      <th scope="row">1</th>
      <td>Nombre usuario</td>
      <td>usuario@correo.com</td>
      <td>Colaborador</td>
      <td>
        <Button >
        <Buttonedit>
        <FaEdit color="green" size={15}  />
        </Buttonedit>
        </Button>

        <Button>
        <FaTrash color="red" size={15} />
        </Button>
      </td>
    </tr>
    
  );
};

export default RowTableUsers;
