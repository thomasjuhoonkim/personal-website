import React, { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext";

import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

import "./Template.scoped.scss";

const Template = (props) => {
  const { theme } = useContext(DarkModeContext);
  return (
    <div className="app" data-theme={theme}>
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Template;
