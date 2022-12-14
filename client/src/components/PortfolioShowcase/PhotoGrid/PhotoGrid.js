import React from "react";

import Photo from "../Photo/Photo";

import "./PhotoGrid.scss";

const PhotoGrid = ({ setClicked, setSrc }) => {
  const images = require.context("../../../assets/portfolio", true);
  const getImageElements = (images) => {
    let elements = [];
    for (let index = 0; index < images.keys().length; index++) {
      elements.push(
        <Photo
          index={index}
          image={images(`./${index}.jpg`)}
          key={index}
          setClicked={setClicked}
          setSrc={setSrc}
        />
      );
    }
    return elements;
  };

  return <div className="photo-grid">{getImageElements(images)}</div>;
};

export default PhotoGrid;
