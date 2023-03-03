// dependencies
import React, { useState, useEffect } from "react";

// icons
import { FaEdit, FaTrash } from "react-icons/fa";

// styles
import {  
  Button  
} from "reactstrap";

import Buttonedit from "../Buttonedit/buttonedit";
import Buttondelete from "../../components/buttondelete/buttondelete";

//style
import "../RowTableUsers/RowTableUsers.css";

const RowTableUsers = ({name, email, rol}) => {
  return (
    <tr className="tableinfo2">


      <th scope="row">1</th>
      <td>{user?.name.lastName}</td>
      <td>{email}</td>
      <td>{rol}</td>
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
