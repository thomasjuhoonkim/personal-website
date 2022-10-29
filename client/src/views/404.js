import React from "react";
import { useNavigate } from "react-router-dom";

import DarkModeButton from "../components/NavBar/DarkModeButton/DarkModeButton";

import "./404.scoped.scss";

const FourZeroFour = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <DarkModeButton className="dark-mode-button" />
      <h1>Oops, Wrong Way...</h1>
      <h3>This isn't a valid page on this website. Try something else.</h3>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default FourZeroFour;
