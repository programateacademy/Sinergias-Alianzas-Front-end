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

const RowTableUsers = ({ name: { lastName }, email, rol }) => {
  console.log(lastName, email, rol)
  return (
    <></>
  );
};

export default RowTableUsers;
