import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

import logo from "../assets/logo.svg";

import styles from "./NavBar.module.css";

const NavBar = () => {
  const { theme, switchTheme } = useContext(DarkModeContext);
  return (
    <nav className={styles.navBar}>
      <div className={styles.navLogo} onClick={switchTheme}>
        <img src={logo} alt="Ghost looking logo" data-theme={theme} />
      </div>
      <ul className={styles.navLinks}>
        <li className={styles.navLink}>
          <a href="/">home</a>
        </li>
        <li className={styles.navLink}>
          <a href="/about">about</a>
        </li>
        <li className={styles.navLink}>
          <a href="/experiences">experiences</a>
        </li>
        <li className={styles.navLink}>
          <a href="mailto:thomasjuhoonkim@gmail.com">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
