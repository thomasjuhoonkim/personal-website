import React from "react";
import { Link } from "react-router-dom";

import "./About.scoped.scss";
import pls from "../assets/pls.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="text-container">
        <h1>choo choo</h1>
        <p>Hey there! I'm Thomas!</p>
        <p>
          I'm an undergraduate student at the University of Waterloo. I study
          Mechanical Engineering but I'm also passionate about software
          development, cryptography, and business. I have experience in both
          frontend and backend development as well as making uncopious amounts
          of python scripts.
        </p>
        <p>
          I enjoy applying my programming knowledge in different places, and
          I've had the opportunity to contribute to some amazing projects. I've
          also interned at{" "}
          <a
            href="https://twitter.com/grobogrow"
            target="_blank"
            rel="noreferrer"
            className="grobo-link"
          >
            Grobo
          </a>{" "}
          and{" "}
          <a
            href="https://www.getenpowered.com/index.html"
            target="_blank"
            rel="noreferrer"
            className="enpowered-link"
          >
            EnPowered
          </a>{" "}
          where I got to contribute with some of my skills. I'm currently
          working part-time at{" "}
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="fourstar-link"
          >
            Four Star
          </a>{" "}
          as a Software Developer.
        </p>
        <p>
          When I'm not programming, I enjoy a few hobbies, mainly, Cycling,
          Reading, Rock Climbing, and Photography! You can check out some of my
          work in the{" "}
          <Link to="/portfolio" className="portfolio-link">
            portfolio section
          </Link>
          ! Fun fact, I named myself Thomas when I was 7 while watching Thomas
          The Train. And yes, I really do like trains.
        </p>
        <p>Thanks for stopping by!</p>
      </div>
      <img
        src={pls}
        alt="Please get me out of here"
        title="I look very uncomfortable by my sister"
      />
    </div>
  );
};

export default About;
