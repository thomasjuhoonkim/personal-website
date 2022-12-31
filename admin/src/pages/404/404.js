import React from "react";
import { useNavigate } from "react-router-dom";

import DarkModeButton from "../../components/DarkModeButton/DarkModeButton";

import styles from "./404.module.scss";

const FourZeroFour = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <DarkModeButton />
      <h1>Oops, Wrong Way...</h1>
      <h3>This isn't a valid page on this website. Try something else.</h3>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default FourZeroFour;
