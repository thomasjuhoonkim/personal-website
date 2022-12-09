import React from "react";

import loading from "../../../assets/loading.svg";
import "./Photo.scoped.scss";

const Photo = (props) => {
  const downloadingImage = new Image();
  downloadingImage.onload = () => {
    const image = document.getElementById(`grid-image--${props.index}`);
    image.setAttribute("src", props.image);
    image.classList.remove("loading");
  };
  downloadingImage.src = props.image;

  const handleClick = () => {
    props.setClicked(true);
    props.setSrc(props.image);
  };

  return (
    <figure
      className={`grid-item grid-item--${props.index}`}
      key={`${props.index}`}
      onClick={handleClick}
    >
      <img
        className={"grid-image loading"}
        id={`grid-image--${props.index}`}
        src={loading}
        alt={`Gallery Item ${props.index}`}
      />
    </figure>
  );
};

export default Photo;
