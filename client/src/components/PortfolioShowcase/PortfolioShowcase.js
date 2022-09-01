import React from "react";

import PhotoGrid from "./PhotoGrid/PhotoGrid";

import cat from "../../assets/cat.png";
import "./PortfolioShowcase.scoped.scss";

const PortfolioShowcase = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="portfolio-showcase-container">
      <div className="title-image-container">
        <h1>Through the Camera</h1>
        <h2>Thomas Kim</h2>
        <img className="cat" src={cat} alt="Me and a cat" />
      </div>
      <div className="text-container">
        <p>Warmth</p>
        <p>-</p>
        <p>Stripes</p>
        <p>-</p>
        <p>Nostolgia</p>
        <p>-</p>
        <p>Toronto</p>
        <p>-</p>
        <p>NYC</p>
        <p>-</p>
        <p>Black</p>
        <p>-</p>
        <p>PURGE</p>
        <p>-</p>
        <p>Adventure</p>
      </div>
      <hr />
      <PhotoGrid />
      <button onClick={scrollToTop}>Back to the Top</button>
    </div>
  );
};

export default PortfolioShowcase;
