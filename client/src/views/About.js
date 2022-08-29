import React from "react";

import Template from "../components/Template/Template";

import "./About.scoped.scss";
import pls from "../assets/pls.jpg";

const About = () => {
  return (
    <Template>
      <div className="about-container">
        <div className="text-container">
          <h1>choo choo</h1>
          <p>Hey there! My name is Thomas!</p>
          <p>
            I'm an undergraduate student at the University of Waterloo. I study
            mechanical engineering and enjoy making random things
          </p>
        </div>
        <img src={pls} alt="Please get me out of here" />
      </div>
    </Template>
  );
};

export default About;
