// Dependencias
import React from "react";

// Componentes
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// Estilos
import { Container } from "reactstrap";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <Container style={{ minHeight: "80vh", position: "relative" }}>
        {children}
      </Container>

      <Footer />
    </>
  );
};

export default Layout;
