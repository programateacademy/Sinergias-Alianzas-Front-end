// Dependencias
import React from "react";

// Componentes
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// Estilos
// import { Container } from "reactstrap";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      {/* <Container style={{ }}> */}
        {children}
      {/* </Container> */}

      <Footer />
    </>
  );
};

export default Layout;
