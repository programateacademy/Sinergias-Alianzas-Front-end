// Dependencias
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Funciones de redux
import authService from "../store/actions/auth/authService";

const useRedirectLoggedOutUser = (path) => {
  /* 
  - =================================
  -    FUNCIONES DEL COMPONENTE
  - =================================
  */
  //* Hooks Redux
  const navigate = useNavigate();

  useEffect(() => {
    // Variables
    let isLoggedIn;

    // Redireccionar al usuario
    const redirectLoggedOutUser = async () => {
      try {
        isLoggedIn = await authService.getLoginStatus();
      } catch (error) {
        console.log(error.message);
      }

      // Se valida si la sesión no esta activa
      if (!isLoggedIn) {
        toast.info("La sesión expiró, por favor ingresa de nuevo");

        navigate(path);

        return;
      }
    };

    redirectLoggedOutUser();
  }, [path, navigate]);
};

export default useRedirectLoggedOutUser;
