import React from "react";

import loading from "../../../assets/loading.svg";
import "./Photo.scoped.scss";

const Photo = (props) => {
  const images = require.context("../../../assets/portfolio", true);
  const downloadingImage = new Image();
  downloadingImage.onload = () => {
    image.src = this.src;
  };

  const handleLoad = (e) => {
    e.target.src = images("");
  };

  return (
    <figure
      className={`grid-item grid-item--${props.index}`}
      key={`${props.index}`}
    >
      <img
        className="grid-image"
        src={loading}
        alt={`Gallery Item ${props.index}`}
      />
    </figure>
  );
};

export default Photo;
