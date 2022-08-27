import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

import "./Template.scoped.css";

const Template = (props) => {
  const { theme } = useContext(DarkModeContext);
  return (
    <div className="app" data-theme={theme}>
      {props.children}
    </div>
  );
};

export default Template;
