//Css import
import "./Header.css";
//Import logo from assets
import Logosinergias from "./Assets/Logosinergias.png";
//Import logos from react icons
import { BsPersonPlusFill, BsArrowBarRight } from "react-icons/bs";
//Import motion library 
import { motion  } from "framer-motion";

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
          <BsPersonPlusFill/>
          Agregar Usuario 
        </motion.button>
        
        <motion.button
          className="buttons_header"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        ><BsArrowBarRight/>
           Salir
        </motion.button>
      </div>
    </div>
  );
};


