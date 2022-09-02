import React from "react";

import me from "../assets/me.jpg";
import "./Home.scoped.scss";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Thomas Kim</h1>
      <h2>Software Developer Based in Toronto</h2>
      <img className="me" src={me} alt="Me" title="Hi" />
    </div>
  );
};

export default Home;
