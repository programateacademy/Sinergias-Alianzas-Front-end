import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComponents } from "../../store/actions/componentSlice";

/* styles & images */
import "./css/HomeU.css";
import { motion } from "framer-motion";
import searchButton from "../../components/ListCourses/Assets/searchButton.png";
import loaded from "../../components/ListCourses/Assets/preload.png";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import CardComponentUser from "../../components/CardComponetUser/CardComponetUser";



const Home = ({ isAdminOrUser, setIsAdminOrUse}) => {
  if(isAdminOrUser === true){
    setIsAdminOrUse(!isAdminOrUser);
  }
 
  //Filter
  const [search, setSearch] = useState(""); //constant for filter

  const { componentes, loading } = useSelector((state) => ({
    ...state.componente,
  }));
  /*-----------FILTER AND SEARCH----------- */
  const searcher = (e) => {
    setSearch(e.target.value);
  };

  //filter method by name
  const results = !search
    ? componentes
    : componentes.filter((dato) =>
        dato.compTitulo.toLowerCase().includes(search.toLocaleLowerCase())
      );

  const navigate = useNavigate(); //* React router dom use

  function addComp() {
    navigate("/addComponent");
  }

  const dispatch = useDispatch();

  const [showPreload, setShowPreload] = useState(true); // add state to control showing preload

  useEffect(() => {
    dispatch(getComponents());

    // change showPreload after 2 seconds
    const timer = setTimeout(() => {
      setShowPreload(false);
    }, 1000);

    // cleanup
    return () => clearTimeout(timer);
  }, [dispatch]);

  if (loading || showPreload) {
    return (
      <div className="preload">
        <img src={loaded} alt="preload" />
      </div>
    );
  }

  return (
    <>
      <div className="containerTitle">
        <h1>CAJA DE HERRAMIENTAS</h1>
      </div>

      <div className="containerDashboard">
      <div className="container_buttons">
          <motion.button
            className="box1"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <img src={searchButton} alt="" />

            <input
              type="text"
              placeholder=" Buscar"
              value={search}
              onChange={searcher}
            />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link className="link" to={"/foroa"}>
            <button className="buttonComponent">Foros</button>
            </Link>
          </motion.button>
        </div>


        <div className="listCards">
          {results &&
            results.map((item, index) => (
              <CardComponentUser key={index} {...item} />
            ))}
        </div>
      </div>
    </>
  );
};
export default Home;
