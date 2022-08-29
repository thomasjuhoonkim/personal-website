import React from "react";

import Template from "../components/Template/Template";

import me from "../assets/me.jpg";
import "./Home.scoped.scss";

const Home = () => {
  return (
    <Template>
      <div className="home-container">
        <h1>Hi, I'm Thomas.</h1>
        <h2>Welcome to my website!</h2>
        <img className="me" src={me} alt="Me" style={{ width: 500 }} />
      </div>
    </Template>
  );
};

export default Home;
