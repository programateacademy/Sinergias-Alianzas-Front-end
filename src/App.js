// Dependencias
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify"; // Notificaciones en pantalla
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Manejo de rutas
import { useDispatch } from "react-redux";

// Reducer de usuario
import { setUser } from "./store/actions/authSlice";

// Componentes
import Layout from "./components/Layout/Layout";
import Verify from './components/Verify/Verify'

// Páginas
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import LoginWithCode from './pages/Login/LoginWithCode'
import Profile from './pages/Profile/Profile'

// Estilos
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(setUser(user));
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Layout><Home/></Layout>}/>

        <Route path="/users" element={<Layout><Users/></Layout>}/>

        <Route path="/reset-password/:resetToken" element={<ResetPassword />} />

        <Route path="/login-with-code/:email" element={<LoginWithCode />} />

        <Route path="/users" element={<Layout><Users/></Layout>}/>

        <Route path="/verify/:verificationToken" element={<Layout><Verify/></Layout>}/>

        <Route path="/profile" element={<Layout><Profile/></Layout>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
