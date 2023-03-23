import React from "react";
import "./css/seeForo.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Button, Modal, Pagination } from "react-bootstrap";
import { motion } from "framer-motion"; //Animation library

import searchButton from "../../components/ListCourses/Assets/searchButton.png";
import forumimg from "../../components/ListCourses/Assets/forum.png";
import filterimg from "../../components/ListCourses/Assets/filter.png";
import addimg from "../../components/ListCourses/Assets/add.png";

import { Link } from "react-router-dom";
import Foro from "./components/Foro/Foro"

import CircularOption from "../CirculaOption/CircularOption";
import ButtonsForum from "./ButtonsForum";
import ModalQuestion from "../ModalQuestion/ModalQuestion";
import CommentList from "./commentList";

const ViewComponent = ({ compTitulo, compColor, compImgPpal, foro, timestamp }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
 

  return (
    <>
      <div className="containerIcon">
        <img alt="Sample" src={compImgPpal} />
      </div>

      <Container
        className="container_foro"
        style={{ border: `3px solid ${compColor}` }}
      >
        <h1 className="title_foro" style={{ color: `${compColor}` }}>
          {compTitulo}
        </h1>

        <div className="container_buttons">
          <motion.button
            className="box1"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            style={{ background: `${compColor}` }}
          >
            <img src={searchButton} alt="" />

            <input type="text" placeholder="Buscar" />
          </motion.button>

          <Link className="link" to={"/foroa"}>
            <motion.button
              className="box1"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              style={{ background: `${compColor}` }}
            >
              <img src={forumimg} alt="" />
              <input
                type="text"
                style={{ cursor: "pointer" }}
                placeholder="Foro"
                disabled={true}
              />
            </motion.button>
          </Link>

          <motion.button
            className="box1"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            style={{ background: `${compColor}` }}
          >
            <img src={filterimg} alt="" />

            <input
              type="text"
              style={{ cursor: "pointer" }}
              placeholder=" Filtro"
              disabled={true}
            />
          </motion.button>

          <motion.button
            className="box1"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            style={{ background: `${compColor}` }}
            onClick={handleShow}
          >
            <img src={addimg} alt="" />

            <input
              type="text"
              style={{ cursor: "pointer" }}
              placeholder="Preguntar"
              disabled={true}
            />
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
        </div>

        <div className="container-fluid container_info">
          <Row>
            <Col className="col-lg-3 col-12" style={{ marginBottom: "10px" }}>
              <Container
                className="border-foro filter"
                style={{ border: `2px solid ${compColor}` }}
              >
                <h2>Filtro de busqueda</h2>
                <CircularOption />
              </Container>
            </Col>
            <Col className="col-lg-9 col-12">
              {foro.map((item) => (
                <Foro key={item._id} {...item} compColor={compColor}/>
              ))}
            </Col>
          </Row>
        </div>
        <Pagination>
          <Pagination.First />
          <Pagination.Item style={{ background: `${compColor}` }} active>
            {1}
          </Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Last />
        </Pagination>
      </Container>
    </>
  );
};
export default ViewComponent;
