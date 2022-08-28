import React from "react";

import DarkModeButton from "../DarkModeButton/DarkModeButton";

import "./NavBar.scoped.scss";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <DarkModeButton />
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
