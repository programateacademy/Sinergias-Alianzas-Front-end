import React from "react";

// Componentes
import ListCourses from "../../components/ListCourses/ListCourses";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";

const Home = () => {
  //* Hook personalizado para redireccionar el usuario si la sesión expira
  useRedirectLoggedOutUser("/");
  return (
    <>
      <ListCourses />
    </>
  );
};

export default Home;
