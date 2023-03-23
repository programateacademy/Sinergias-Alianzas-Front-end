import { React, useState, useEffect } from "react";
import "../../css/seeForo.css";
import { Button, Modal, Col } from "react-bootstrap";
import { motion } from "framer-motion"; //Animation library

import Edit from "../../assets/edit.png";
const Response = ({ compColor, authorQuestion, descriptionQuestion, question }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [authorValue, setAuthorValue] = useState(authorQuestion);
  const [descriptionValue, setDescriptionValue] = useState(descriptionQuestion);
  const [questionValue, setQuestionValue] = useState(question);
console.log(question)
  const handleAuthorChange = (e) => {
    setAuthorValue(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescriptionValue(e.target.value);
  };
  const handleQuestionChange = (e) => {
    setQuestionValue(e.target.value);
  };
  return (
    <>
      <motion.button
        className="button_option"
        whileHover={{ scale: 1.04 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
        onChange
        onClick={handleShow}
      >
        <img src={Edit} alt="Editar" />
        <p className="text_option">Editar</p>
      </motion.button>
      <div className="model_box">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Agregar Comentario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group mt-3">
                <input
                  value={authorValue}
                  onChange={handleAuthorChange}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Nombre"
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  value={descriptionValue}
                  onChange={handleDescriptionChange}
                  type="text"
                  className="form-control"
                  id="addmovie_name"
                  aria-describedby="emailHelp"
                  placeholder="Pregunta Aqui..."
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-success mt-4"
                style={{
                  background: `${compColor}`,
                  border: `2px solid ${compColor}`,
                }}
              >
                Agregar
              </button>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Response;
