import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "/@/assets/images/ARABER.jpeg";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isNavActive, setNavActive] = useState(false);

  const closeNav = () => {
    setNavActive(false);
  };

  const toggleNav = () => {
    setNavActive(!isNavActive);
  };

  return (
    <>
      <div className="nav__container">
        <div className="filter"></div>
        <header>
          <Link
            to="/"
            className="logo"
            style={{ display: "flex", textDecoration: "none" }}
          >
            <motion.div
              style={{ display: "flex" }}
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src={logo}
                alt="Mi logo"
                style={{
                  width: "6rem",
                  marginLeft: "5rem",
                  borderRadius: "50%",
                }}
              />
              <p style={{ marginTop: "2rem", marginLeft: "15px" }}>Arabeer</p>
            </motion.div>
          </Link>
          <div
            className={`${isNavActive ? "toggle" : "hamburger"}`}
            onClick={toggleNav}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <nav className={`nav-bar ${isNavActive ? "active" : ""}`}>
            <ul>
              <li>
                <Link to="/inicio" className="active" onClick={closeNav}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/about" className="active" onClick={closeNav}>
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/products" className="active" onClick={closeNav}>
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="active" onClick={closeNav}>
                  Contáctanos
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div className="espacio"></div>
    </>
  );
};

export default NavBar;
