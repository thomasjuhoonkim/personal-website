import React, { getContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

import styles from "./Template.module.css";

const Template = (props) => {
  const { theme } = getContext(DarkModeContext);
  return (
    <div className={styles.app} data-theme={theme}>
      {props.children}
    </div>
  );
};

export default Template;
