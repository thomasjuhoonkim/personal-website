import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

import Template from "../components/Template";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import me from "../assets/me.jpg";
import "./Home.scoped.css";

const Home = () => {
  const { theme } = useContext(DarkModeContext);
  document.querySelector("html").setAttribute("data-theme", theme);

  return (
    <Template>
      <NavBar />
      <div className="home-container">
        <h1>Hi, I‘m Thomas.</h1>
        <h2>Welcome to my website!</h2>
        <img className="me" src={me} alt="Me" style={{ width: 400 }} />
      </div>
      <Footer />
    </Template>
  );
};

export default Home;
