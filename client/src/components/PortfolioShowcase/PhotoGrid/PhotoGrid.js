import React from "react";

import "./PhotoGrid.scoped.scss";

const PhotoGrid = () => {
  const images = require.context("../../../assets/portfolio", true);

  const getImageElements = (images) => {
    let elements = [];
    for (let index = 0; index < images.keys().length; index++) {
      elements.push(
        <figure className={`grid-item grid-item--${index}`} key={`${index}`}>
          <img
            className="grid-image"
            src={images(`./${index}.jpg`)}
            alt={`Gallery Item ${index}`}
          />
        </figure>
      );
    }
    return elements;
  };

  return <div className="photo-grid">{getImageElements(images)}</div>;
};

export default PhotoGrid;