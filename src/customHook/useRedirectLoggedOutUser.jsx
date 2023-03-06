// dependencies
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// redux functions
import authService from "../store/actions/auth/authService";

const useRedirectLoggedOutUser = (path) => {
  /* 
  - =================================
  -    COMPONENT FUNCTIONS
  - =================================
  */
  //* Redux Hooks
  const navigate = useNavigate();

  useEffect(() => {
    // variables
    let isLoggedIn;

    // redirect user
    const redirectLoggedOutUser = async () => {
      try {
        isLoggedIn = await authService.getLoginStatus();
      } catch (error) {
        console.log(error.message);
      }

      // It is validated if the session is not active
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
