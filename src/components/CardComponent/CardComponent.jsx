import "../ListCourses/ListCourses.css";
import { motion } from "framer-motion"; //Animation library

import iconAbout from "../ListCourses/Assets/about.png";
import iconEdit from "../ListCourses/Assets/icono editar.png";
import DeleteButton from "../ListCourses/modal";
import { useNavigate, Link } from "react-router-dom";

export default function CardComponent({ compTitulo, compImgPpal, _id }) {
  const navigate = useNavigate();

  function seeComp() {
    navigate(`/component/seeComponent/${_id}`);
  }
  function editComp() {
    navigate("/editComponent");
  }

  return (
    <>
      <div className="cardComponent">
        <h2>{compTitulo}</h2>
        <img className="imageCard"  src={compImgPpal} alt=""/>
        <div className="buttons_cards">
          <Link to={`/seeComponent/${_id}`}>
          <motion.div
            // onClick={seeComp}
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            <img src={iconAbout} alt="" />
          </motion.div>
          </Link>
          
          <motion.a
            href="#"
            onClick={editComp}
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            <img src={iconEdit} alt="" />
          </motion.a>

          <motion.button
            style={{
              border: "none",
              margin: "0",
              padding: "0",
              backgroundColor: "transparent",
            }}
            className="box"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <DeleteButton />
          </motion.button>
        </div>
      </div>
    </>
  );
}
