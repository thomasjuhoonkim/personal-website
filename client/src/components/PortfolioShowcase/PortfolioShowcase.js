import React from "react";

import PhotoGrid from "./PhotoGrid/PhotoGrid";

import cat from "../../assets/cat.png";
import "./PortfolioShowcase.scoped.scss";

const PortfolioShowcase = () => {
  return (
    <div className="portfolio-showcase-container">
      <div className="title-image-container noselect">
        <h1>Thomas and the Camera</h1>
        <img src={cat} alt="Me and a cat" />
      </div>
      <p>blah blah blah</p>
      <PhotoGrid />
    </div>
  );
};

export default PortfolioShowcase;
