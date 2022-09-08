import React from "react";

import Photo from "../Photo/Photo";

import "./PhotoGrid.scss";

const PhotoGrid = () => {
  const getImageElements = (images) => {
    let elements = [];
    for (let index = 0; index < images.keys().length; index++) {
      elements.push(<Photo />);
    }
    return elements;
  };

  return <div className="photo-grid">{getImageElements(images)}</div>;
};

export default PhotoGrid;
