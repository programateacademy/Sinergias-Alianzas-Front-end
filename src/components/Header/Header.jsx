import "./Header.css";
import Logosinergias from "./Assets/Logosinergias.png";
import Addicon from "./Assets/AddIcon.png";

import { motion } from "framer-motion";

export function Header () { 
  
  return (
    <div className="header_container">
      <img src={Logosinergias} alt="" />

      <div className="container_btn_header">
        <motion.button
          className="buttons_header"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <img src={Addicon} alt="" />
          Añadir Componente
        </motion.button>

        <motion.button
          className="buttons_header"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <img src={Addicon} alt="" /> Salir
        </motion.button>
      </div>
    </div>
  );
};


