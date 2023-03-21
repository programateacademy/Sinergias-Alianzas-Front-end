import React from "react";
import "./css/seeForo.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { motion } from "framer-motion"; //Animation library
import { Link } from "react-router-dom";
import Eye from "./assets/eye.png";
import Coment from "./assets/coment.png";
import Edit from "./assets/edit.png";
import Trash from "./assets/trash.png";
import Report from "./assets/report.png";


const ButtonsForum = ({compColor}) => {
  return (
    <>
    <div>
        <motion.button
          className="button_option"
          whileHover={{ scale: 1.04 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <img src={Coment} alt="Respuestas" />
          <p className="text_option">Respuestas</p>
        </motion.button>
      </div>
      <div>
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
      </div>
      <div>
        <motion.button
          className="button_option"
          whileHover={{ scale: 1.04 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <img src={Edit} alt="Editar" />
          <p className="text_option">Editar</p>
        </motion.button>
      </div>
      <div>
        <motion.button
          className="button_option"
          whileHover={{ scale: 1.04 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <img src={Trash} alt="Eliminar" />
          <p className="text_option">Eliminar</p>
        </motion.button>
      </div>
      <div>
        <motion.button
          className="button_option"
          whileHover={{ scale: 1.04 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <img src={Eye} alt="Ocultar" />
          <p className="text_option">Ocultar</p>
        </motion.button>
      </div>
      <div>
        <motion.button
          className="button_option"
          whileHover={{ scale: 1.04 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <img src={Eye} alt="Ocultar" />
          <p className="text_option">Ocultar</p>
        </motion.button>
      </div>
      <div>
        <motion.button
          className="button_option"
          whileHover={{ scale: 1.04 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <img src={Report} alt="Reportar" />
          <p className="text_option">Reportar</p>
        </motion.button>
      </div>
    </>
  );
};

export default ButtonsForum;
