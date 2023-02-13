// Dependencias
import React from "react";
import ReactDOM from "react-dom";

// Estilos
import { Spinner } from "reactstrap";

const Loader = () => {
  return ReactDOM.createPortal(
    <Spinner color="success" size="" type="grow">
      Loading...
    </Spinner>,
    document.getElementById("loader")
  );
};

export default Loader;
