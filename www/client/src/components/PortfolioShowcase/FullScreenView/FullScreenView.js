import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./FullScreenView.scoped.scss";

const FullScreenView = ({ clicked, setClicked, src, setSrc }) => {
  const handleClick = () => {
    setClicked(false);
    setSrc(null);
  };

  return clicked ? (
    <div className="fullscreen-view-container">
      <div className="fullscreen-view-background" />
      <img src={src} alt="Fullscreen View" />
      <div className="close-button" onClick={handleClick}>
        <FontAwesomeIcon icon={faXmark} className="icon" />
      </div>
    </div>
  ) : null;
};

export default FullScreenView;
