// Dependencias
import React, {useEffect} from "react";
import { ToastContainer } from "react-toastify"; // Notificaciones en pantalla
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Manejo de rutas
import {useDispatch} from 'react-redux'

// Reducer de usuario
import {setUser} from './store/actions/authSlice'

// Páginas
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

// Estilos
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch()

  const user = JSON.parse(localStorage.getItem("profile"))

  useEffect(() => {
    dispatch(setUser(user))
  }, [])
  
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
