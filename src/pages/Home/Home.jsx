import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getComponents } from "../../store/actions/componentSlice";

import "../../components/ListCourses/ListCourses.css";
import { motion } from "framer-motion"; //Animation library
import searchButton from "../../components/ListCourses/Assets/searchButton.png";
import uploadButton from "../../components/ListCourses/Assets/uploadButton.png";

import { useNavigate, Link } from "react-router-dom";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Spinner } from "reactstrap";

import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";

const Home = () => {
  //* Hook personalizado para redireccionar el usuario si la sesión expira
  useRedirectLoggedOutUser("/");

  const [search, setSearch] = useState("");//constante para el filtro
  const [order, setOrder] = useState("ASC");//constantes para ordenar 

  const { componentes, loading } = useSelector((state) => ({
    ...state.componente,
  }));

  const navigate = useNavigate();

  /*-----------FILTRAR Y BUSCAR----------- */
  const searcher = (e) => {
    setSearch(e.target.value);
  };

  //metodo de filtrado por nombre
  const results = !search
    ? componentes
    : componentes.filter(
      (dato) =>
        dato.compTitulo.toLowerCase().includes(search.toLocaleLowerCase())
    );


  function addComp() {
    navigate("/addComponent");
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComponents());
  }, []);

  if (loading) {
    return <Spinner>Cargando</Spinner>;
  }
  return (
    <>
      <div className="containerTitle">
        <h1>DASHBOARD COMPONENTES</h1>
      </div>

      <div className="containerDashboard">
        <div className="container_buttons">
          <motion.button
            className="box"
            onClick={addComp}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <img src={uploadButton} alt="" /> Añadir Componente
          </motion.button>

          <motion.button
            className="box1"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <img src={searchButton} alt="" />

            <input type="text" placeholder=" Buscar" value={search}
              onChange={searcher} />
          </motion.button>

          <motion.button
            className="box"
            onClick={() => sorting("compTitulo")}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Ordenar por nombre
          </motion.button>
        </div>
        <div className="listCards">
          {results &&
            results.map((item, index) => (
              <CardComponent key={index} {...item} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
