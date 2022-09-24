import React from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) {
      setClick(false);
    }
  });

  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar-logo">
          <Link className="navbar-link logo" to="/">
            <MdFingerprint />
            LOGO
          </Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "navbar-list active" : "navbar-list"}>
          <li className="navbar-element">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-element">
            <Link to="/Contact" className="navbar-link">
              Contact
            </Link>
          </li>
          <li className="navbar-element">
            <Link to="/Products" className="navbar-link">
              Products
            </Link>
          </li>
          <li className="navbar-element last">
            <Link to="/Sign_up" className="navbar-link">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
