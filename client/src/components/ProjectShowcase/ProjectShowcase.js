import React from "react";

import ProjectShowcaseItem from "./ProjectShowcaseItem/ProjectShowcaseItem";

import "./ProjectShowcase.scoped.scss";

const ProjectShowcase = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const images = require.context("../../assets/side-projects", true);
  return (
    <>
      <div className="project-showcase-container">
        <ProjectShowcaseItem
          img={images("./e-commerce.png")}
          title="E-Commerce Website"
          description="Made a fully functioning e-commerce website with api-based backend and stripe payments."
          skills="React.js, MUI, Commerce.js, Stripe.js, Web APIs, Firebase"
          link="https://e-commerce-1010.web.app"
        />
        <ProjectShowcaseItem
          img={images("./personal-website.png")}
          title="Personal Website"
          description="The personal website was made to apply all my knowledge in React.js and frontend development."
          skills="Node.js, React.js, Express.js, Firebase"
          link="https://thomasjuhoonkim.me"
        />
        <ProjectShowcaseItem
          img={images("./warepair.png")}
          title="Warepair"
          description="Warepair is a web app that bridges the gap between these two groups of people."
          skills="Node.js, React.js, Flask, PostgreSQL, Google Maps API, Heroku"
          link="https://warepair.herokuapp.com/"
        />
        <ProjectShowcaseItem
          img={images("./calculator.png")}
          imgStyle={{ imageRendering: "crisp-edges" }}
          title="Calculator"
          description="The calculator project was made to compile all my HTML/CSS/JavaScript knowledge from the Odin Project."
          skills="HTML, CSS, JavaScript"
          link="https://thomasjuhoonkim.github.io/odin-calculator/"
        />
        <ProjectShowcaseItem
          img={images("./etch-a-sketch.png")}
          title="Etch-a-Sketch"
          description="The etch-a-sketch project was made to compile all my HTML/CSS/JavaScript knowledge from the Odin Project."
          skills="HTML, CSS, JavaScript"
          link="https://thomasjuhoonkim.github.io/odin-etch-a-sketch/"
        />
        <ProjectShowcaseItem
          img={images("./default.png")}
          title="Cryptopals Challenges"
          description="Cryptopals is a collection of exercises that demonstrate attacks on real-world cryptography"
          skills="Cryptology, Data Analysis, C++, Python, Crypto.Cipher"
          link="https://github.com/thomasjuhoonkim/cryptopals-challenges"
        />
        <ProjectShowcaseItem
          img={images("./default.png")}
          title="C++ Tetris"
          description="Tetris game made with SFML interface and C++."
          skills="C++, SFML"
          link="https://github.com/thomasjuhoonkim/cpp-tetris"
        />
        <ProjectShowcaseItem
          img={images("./default.png")}
          title="Absorbing Markov Chains"
          description="Python 2.7 module for matrix operations and absorbing markov chain determination. Used module for the Google Foobar challenge."
          skills="Python 2.7, Graphs"
          link="https://github.com/thomasjuhoonkim/absorbing-markov-chain"
        />
        <ProjectShowcaseItem
          img={images("./default.png")}
          title="Hydroponics Store Scraper"
          description="A webscraper that scrapes all hydroponics store information from Google Maps using the Selenium library from Python."
          skills="Python, Selenium"
          link="https://github.com/thomasjuhoonkim/hydroponics-database"
        />
      </div>
      <button onClick={scrollToTop}>Back to the Top</button>
    </>
  );
};

export default ProjectShowcase;
