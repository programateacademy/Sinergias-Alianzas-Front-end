import "./ListCourses.css";
import React, { useState } from "react";

import { motion } from "framer-motion";

import icon from "./Assets/icon.png";
import iconAbout from "./Assets/about.png";
import iconEdit from "./Assets/icono editar.png";

import searchButton from "./Assets/searchButton.png";
import uploadButton from "./Assets/uploadButton.png";

import Example from "./modal";

const ListCourses = () => {
  return (
    <>
      <div className="containerTitle">
        <h1>DASHBOARD COMPONENTES</h1>
      </div>

      <div className="containerDashboard">
        <div className="container_buttons">
          <motion.button
            className="box"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <img src={uploadButton} alt="" /> Añadir Componente
          </motion.button>

          <motion.button
            className="box"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <img src={searchButton} alt="" />

            <input type="text" placeholder=" Buscar componente" />
          </motion.button>
        </div>

        <div className="listCards">
          <div className="cardComponent">
            <h2>Salud de la mujer</h2>
            <img src={icon} alt="" />
            <div className="buttons_cards">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
              >
                <img src={iconAbout} alt="" />
              </motion.a>

              <motion.a
                href="#"
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
                <Example />
              </motion.button>
            </div>
          </div>

          <div className="cardComponent">
            <h2>Salud de la mujer</h2>
            <img src={icon} alt="" />
            <div className="buttons_cards">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
              >
                <img src={iconAbout} alt="" />
              </motion.a>

              <motion.a
                href="#"
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
                <Example />
              </motion.button>
            </div>
          </div>

          <div className="cardComponent">
            <h2>Salud de la mujer</h2>
            <img src={icon} alt="" />
            <div className="buttons_cards">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
              >
                <img src={iconAbout} alt="" />
              </motion.a>

              <motion.a
                href="#"
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
                <Example />
              </motion.button>
            </div>
          </div>

          <div className="cardComponent">
            <h2>Salud de la mujer</h2>
            <img src={icon} alt="" />
            <div className="buttons_cards">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
              >
                <img src={iconAbout} alt="" />
              </motion.a>

              <motion.a
                href="#"
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
                <Example />
              </motion.button>
            </div>
          </div>

          <div className="cardComponent">
            <h2>Salud de la mujer</h2>
            <img src={icon} alt="" />
            <div className="buttons_cards">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
              >
                <img src={iconAbout} alt="" />
              </motion.a>

              <motion.a
                href="#"
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
                <Example />
              </motion.button>
            </div>
          </div>
          <div className="cardComponent">
            <h2>Salud de la mujer</h2>
            <img src={icon} alt="" />
            <div className="buttons_cards">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
              >
                <img src={iconAbout} alt="" />
              </motion.a>

              <motion.a
                href="#"
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
                <Example />
              </motion.button>
            </div>
          </div>
          <div className="cardComponent">
            <h2>Salud de la mujer</h2>
            <img src={icon} alt="" />
            <div className="buttons_cards">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
              >
                <img src={iconAbout} alt="" />
              </motion.a>

              <motion.a
                href="#"
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
                <Example />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListCourses;
