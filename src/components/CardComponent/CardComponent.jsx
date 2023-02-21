import React, { useState, useEffect } from "react";

import "../ListCourses/ListCourses.css";
import { motion } from "framer-motion"; //Animation library

import iconAbout from "../ListCourses/Assets/about.png";
import iconEdit from "../ListCourses/Assets/icono editar.png";

/* import DeleteButton from "../ListCourses/modal"; */
import { useNavigate, Link } from "react-router-dom";


//! REACTSTRAP IMPORTATION
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";
import iconDelete from "../ListCourses/Assets/icono borrar.png";

import { useDispatch, useSelector } from "react-redux";

import { deleteComponent } from "../../store/actions/componentSlice";

export default function CardComponent({ compTitulo, compImgPpal,compColor, _id }) {

  console.log({compColor})

  //! MODAL
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  //!Function delete
  const dispatch = useDispatch();
  
  /* useEffect(() => {
    dispatch(deleteComponent());
  }, [dispatch]); */

  const navigate = useNavigate();

  const deleteFunction = (e) => {
    dispatch(deleteComponent(_id));     
    window.location.reload(true);
  }; 
 /*  function seeComp() {
    navigate(`/component/seeComponent/${_id}`);
  } */
  
  function editComp() {
    navigate("/editComponent");
  }

  return (
    <>
      <div className="cardComponent">
        <h2 style={{backgroundColor:`${compColor}`}} >{compTitulo}</h2>
        <img className="imageCard" src={compImgPpal} alt="" />
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
            <div>
              <Button style={{ padding: "0" }} color="none" onClick={toggle}>
                <img src={iconDelete} alt="" />
              </Button>
              <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                  ¿Está seguro de eliminar este componente?
                </ModalHeader>

                <ModalFooter>

                  {/* boton para borrar */}

                  <Button
                    style={{ backgroundColor: "red", border: "none" }}
                    onClick = {deleteFunction}  
                  >
                    Borrar
                  </Button>
                  <Button color="secondary" onClick={toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
          </motion.button>
        </div>
      </div>
    </>
  );
}
