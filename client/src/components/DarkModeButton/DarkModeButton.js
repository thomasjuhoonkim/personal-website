import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

import logo from "../../assets/logo.svg";
import "./DarkModeButton.scoped.scss";

const DarkModeButton = () => {
  const { theme, switchTheme } = useContext(DarkModeContext);

  return (
    <div className="nav-logo" onClick={switchTheme} data-theme={theme}>
      <img src={logo} alt="Ghost looking logo" />
      <div class="sky">
        <div class="sun">
          <div class="outer" />
          <div class="inner" />
        </div>
        <div class="moon" />
        <div class="cloud cloud1">
          <div class="rect" />
          <div class="circle circle-lg" />
          <div class="circle circle-sm" />
        </div>
        <div class="cloud cloud2">
          <div class="rect" />
          <div class="circle circle-lg" />
          <div class="circle circle-sm" />
        </div>
      </div>
    </div>
  );
};

export default DarkModeButton;
