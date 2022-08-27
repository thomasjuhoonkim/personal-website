import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Template from "../components/Template";
import NavBar from "../components/NavBar";

import me from "../assets/me.jpg";
import "./Home.css";

const Home = () => {
  const { theme } = useContext(DarkModeContext);

  return (
    <div className="app" data-theme={theme}>
      <NavBar />
      <div className="container">
        <div className="home-container">
          <h1>Hi, I‘m Thomas.</h1>
          <h2>Welcome to my website!</h2>
          <img src={me} alt="Me" style={{ width: 400 }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
