import React from "react";
import { Link } from "react-router-dom";

import DarkModeButton from "./DarkModeButton/DarkModeButton";

import "./NavBar.scoped.scss";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <DarkModeButton />
      <ul className="nav-links">
        <li className="nav-link">
          <Link to="/">home</Link>
        </li>
        <li className="nav-link">
          <Link to="/about">about</Link>
        </li>
        <li className="nav-link">
          <Link to="/experience">experience</Link>
        </li>
        <li className="nav-link">
          <Link to="/portfolio">portfolio</Link>
        </li>
        <li className="nav-link">
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
