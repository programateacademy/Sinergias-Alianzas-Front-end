import "./ListCourses.css";
import { motion } from "framer-motion"; //Animation library

import searchButton from "./Assets/searchButton.png";
import uploadButton from "./Assets/uploadButton.png";

import { useNavigate } from "react-router-dom";

export default function ListCourses({}) {
  const navigate = useNavigate();

  function addComp() {
    navigate("/addComponent");
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

            <input type="text" placeholder=" Buscar" />
          </motion.button>
        </div>
      </div>
    </>
  );
}
