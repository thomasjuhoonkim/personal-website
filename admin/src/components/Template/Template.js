import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { DarkModeContext } from "../../contexts/DarkModeContext";

import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

import styles from "./Template.module.scss";

const Template = () => {
  const { theme } = useContext(DarkModeContext);
  return (
    <div className={styles.app} data-theme={theme}>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Template;
