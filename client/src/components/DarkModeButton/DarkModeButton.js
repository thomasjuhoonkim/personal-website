import React, { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

import logo from "../../assets/logo.svg";
import "./DarkModeButton.scoped.scss";

const DarkModeButton = () => {
  const { theme, switchTheme } = useContext(DarkModeContext);

  return (
    <>
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

      <svg viewBox="0 0 180 100" width="100%">
        <filter width="100%" height="100%" x="0%" y="0%" id="distort">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.000001"
            id="turbulence"
            numOctaves="1"
            result="turbulence"
          >
            <animate
              id="noiseAnimate"
              attributeName="baseFrequency"
              values="0.095,0.00001;0.001,0.05;"
              dur="30s"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="warpOffset" scale="6" />
        </filter>
      </svg>
    </>
  );
};

export default DarkModeButton;
