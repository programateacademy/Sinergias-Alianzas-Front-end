import React from "react";
import "./css/seeForo.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { motion } from "framer-motion"; //Animation library
import searchButton from "../../components/ListCourses/Assets/searchButton.png";
import forumimg from "../../components/ListCourses/Assets/forum.png";
import filterimg from "../../components/ListCourses/Assets/filter.png";
import { Link } from "react-router-dom";
import Eye from "./assets/eye.png";
import Coment from "./assets/coment.png";
import Edit from "./assets/edit.png";
import Trash from "./assets/trash.png";
import { Pagination } from "react-bootstrap";
import CircularOption from "../CirculaOption/CircularOption";
import ButtonsForum from "./ButtonsForum";
import ModalQuestion from "../ModalQuestion/ModalQuestion";
import CommentList from "./commentList";

const ViewComponent = ({
  compTitulo,
  compColor,
  compImgPpal,
  id_type,
  question,
  author,
  likes,
  reportNumber,
  report,
}) => {
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

            <input type="text" placeholder=" Buscar" />
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
                placeholder=" Foro"
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
            />
          </motion.button>
        </div>

        <div className="container-fluid container_info">
          <Row>
            <Col className="col-lg-3">
              <Container
                className="border-foro"
                style={{ border: `2px solid ${compColor}` }}
              >
                <h2>Filtro de busqueda</h2>
                <CircularOption />
              </Container>
            </Col>
            <Col className="col-lg-9">
              <Container
                className="border-foro"
                style={{ border: `2px solid ${compColor}` }}
              >
                <Row className="d-flex justify-content-around align-items-center">
                  <Col md={8}>
                    <CommentList />
                  </Col>
                  <Col md={8}>
                    <h3 className="question">¿Pregunta?</h3>
                    <p>Autor</p>
                  </Col>
                  <Col md={3}>
                    <motion.button
                      className="button_option"
                      whileHover={{ scale: 1.04 }}
                      onHoverStart={(e) => {}}
                      onHoverEnd={(e) => {}}
                    >
                      <svg
                        width="35"
                        height="32"
                        viewBox="0 0 35 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path
                          d="M10.9082 24.4663L15.429 27.6663C16.0124 28.1996 17.3249 28.4663 18.1999 28.4663H23.7415C25.4915 28.4663 27.3874 27.2663 27.8249 25.6663L31.3249 15.933C32.054 14.0663 30.7415 12.4663 28.554 12.4663H22.7207C21.8457 12.4663 21.1165 11.7996 21.2624 10.8663L21.9915 6.59963C22.2832 5.39963 21.4082 4.0663 20.0957 3.6663C18.929 3.2663 17.4707 3.79963 16.8874 4.59963L10.9082 12.733"
                          stroke={`${compColor}`}
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        />{" "}
                        <path
                          d="M3.4707 24.4662V11.3995C3.4707 9.53288 4.3457 8.86621 6.38737 8.86621H7.8457C9.88737 8.86621 10.7624 9.53288 10.7624 11.3995V24.4662C10.7624 26.3329 9.88737 26.9995 7.8457 26.9995H6.38737C4.3457 26.9995 3.4707 26.3329 3.4707 24.4662Z"
                          stroke={`${compColor}`}
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />{" "}
                      </svg>
                      <p className="text_option">Me gusta</p>
                    </motion.button>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <p>Descripción del comentario o pregunta.</p>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="d-none d-md-block">
                    <Row className="d-flex align-items-center">
                      <ButtonsForum compColor={compColor} />
                    </Row>
                  </Col>
                  <Col md={12} className="d-md-none">
                    <Row>
                      <Col xs={12}>
                        <motion.button
                          className="button_option"
                          whileHover={{ scale: 1.04 }}
                          onHoverStart={(e) => {}}
                          onHoverEnd={(e) => {}}
                          onClick={handleShow}
                        >
                          <img src={Coment} alt="Comentar" />
                          <p className="text_option">Respuestas</p>
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
                                    type="number"
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
                                    placeholder="Comentario de usuario"
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
                                  Modificar
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
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <motion.button
                          className="button_option"
                          whileHover={{ scale: 1.04 }}
                          onHoverStart={(e) => {}}
                          onHoverEnd={(e) => {}}
                        >
                          <img src={Edit} alt="Editar" />
                          <p className="text_option">Editar</p>
                        </motion.button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <motion.button
                          className="button_option"
                          whileHover={{ scale: 1.04 }}
                          onHoverStart={(e) => {}}
                          onHoverEnd={(e) => {}}
                        >
                          <img src={Trash} alt="Eliminar" />
                          <p className="text_option">Eliminar</p>
                        </motion.button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <motion.button
                          className="button_option"
                          whileHover={{ scale: 1.04 }}
                          onHoverStart={(e) => {}}
                          onHoverEnd={(e) => {}}
                        >
                          <img src={Eye} alt="Ocultar" />
                          <p className="text_option">Ocultar</p>
                        </motion.button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
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
