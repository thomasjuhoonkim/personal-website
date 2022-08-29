import React, { useContext } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";

import logo from "../../../assets/logo.svg";
import "./DarkModeButton.scoped.scss";

const DarkModeButton = () => {
  const { theme, switchTheme } = useContext(DarkModeContext);

  return (
    <div
      className="nav-logo"
      onClick={switchTheme}
      data-theme={theme}
      title="Click me!"
    >
      <img src={logo} alt="Ghost looking logo" />
      <div className="sky">
        <div className="sun">
          <div className="outer" />
          <div className="inner" />
        </div>
        <div className="moon" />
        <div className="cloud cloud1">
          <div className="rect" />
          <div className="circle circle-lg" />
          <div className="circle circle-sm" />
        </div>
        <div className="cloud cloud2">
          <div className="rect" />
          <div className="circle circle-lg" />
          <div className="circle circle-sm" />
        </div>
      </div>
    </div>
  );
};

export default DarkModeButton;
