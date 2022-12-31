import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./Template.module.scss";

const Template = () => {
  return (
    <div className={styles.app}>
      <Outlet />
    </div>
  );
};

export default Template;
