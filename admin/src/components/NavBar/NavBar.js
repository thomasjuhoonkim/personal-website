import React from "react";
import { Link } from "react-router-dom";

import DarkModeButton from "./DarkModeButton/DarkModeButton";

import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles["nav-bar"]}>
      <DarkModeButton />
      <ul className={styles["nav-links"]}>
        <li className={styles["nav-link"]}>
          <Link to="/">home</Link>
        </li>
        <li className={styles["nav-link"]}>
          <Link to="/about">about</Link>
        </li>
        <li className={styles["nav-link"]}>
          <Link to="/experience">experience</Link>
        </li>
        <li className={styles["nav-link"]}>
          <Link to="/portfolio">portfolio</Link>
        </li>
        <li className={styles["nav-link"]}>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
