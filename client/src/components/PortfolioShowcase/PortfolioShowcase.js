import React from "react";

import PhotoGrid from "./PhotoGrid/PhotoGrid";

import cat from "../../assets/cat.png";
import loading from "../../assets/loading.svg";
import "./PortfolioShowcase.scoped.scss";

const AsyncImage = (props) => {
  const [loadedSrc, setLoadedSrc] = React.useState(null);
  React.useEffect(() => {
    const handleLoad = () => setLoadedSrc(props.src);
    const image = new Image();
    image.addEventListener("load", handleLoad);
    image.src = props.src;
    return () => image.removeEventListener("load", handleLoad);
  }, [props.src]);

  return (
    <img
      className={
        loadedSrc === props.src ? props.className : props.className + " loading"
      }
      src={loadedSrc === props.src ? props.src : loading}
      alt={props.alt}
      title={props.title}
    />
  );
};

const PortfolioShowcase = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="portfolio-showcase-container">
      <div className="title-image-container">
        <h1>Through the Camera</h1>
        <h2>Thomas Kim</h2>
        <AsyncImage className="cat" src={cat} alt="Me and a cat" />
      </div>
      <div className="text-container">
        <p>Warmth</p>
        <p>Stripes</p>
        <p>Nostolgia</p>
        <p>Toronto</p>
        <p>NYC</p>
        <p>Black</p>
        <p>PURGE</p>
        <p>Adventure</p>
      </div>
      <hr />
      <PhotoGrid />
      <button onClick={scrollToTop}>Back to the Top</button>
    </div>
  );
};

export default PortfolioShowcase;
