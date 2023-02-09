// Dependencias
import React from "react";
import { ToastContainer } from "react-toastify"; // Notificaciones en pantalla
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Manejo de rutas

// Páginas
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

// Estilos
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
