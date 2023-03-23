import { React, useState, useEffect } from "react";
import "../../css/seeForo.css";
import { Button, Modal, Col } from "react-bootstrap";
import { motion } from "framer-motion"; //Animation library

import response from "../../assets/response.png";
const Response = ({ compColor }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <Col md={2} sm={6} xs={6}>
      <motion.button
        className="button_option"
        whileHover={{ scale: 1.04 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
        onClick={handleShow}
      >
        <img src={response} alt="Responder" />
        <p className="text_option">Responder</p>
      </motion.button>
      <div className="model_box">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Agregar Pregunta</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Autor"
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <input
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
                Preguntar
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
    </Col>
  );
};

export default Response;
