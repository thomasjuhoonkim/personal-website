import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

import logo from "../assets/logo.svg";

import "./NavBar.scoped.css";

const NavBar = () => {
  const { theme, switchTheme } = useContext(DarkModeContext);
  return (
    <nav className="nav-bar">
      <div className="nav-logo" onClick={switchTheme}>
        <img src={logo} alt="Ghost looking logo" data-theme={theme} />
      </div>
      <ul className="nav-links">
        <li className="nav-link">
          <a href="/">home</a>
        </li>
        <li className="nav-link">
          <a href="/about">about</a>
        </li>
        <li className="nav-link">
          <a href="/experiences">experiences</a>
        </li>
        <li className="nav-link">
          <a href="mailto:thomasjuhoonkim@gmail.com">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
