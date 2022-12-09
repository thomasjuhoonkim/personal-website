import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faSpotify,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <p className={styles["credits"]}>Made with React and Sleepless Nights</p>
      <div className={styles["social-media-container"]}>
        <div className={styles["icon-container"]}>
          <a
            href="https://www.linkedin.com/in/thomasjuhoonkim/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className={styles["icon"]} icon={faLinkedinIn} />
          </a>
        </div>
        <div className={styles["icon-container"]}>
          <a
            href="https://github.com/thomasjuhoonkim"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className={styles["icon"]} icon={faGithub} />
          </a>
        </div>
        <div className={styles["icon-container"]}>
          <a
            href="https://open.spotify.com/user/ouko5ky8buyt5ck6hfi0yig4a?si=d466f4c76bc640f2"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className={styles["icon"]} icon={faSpotify} />
          </a>
        </div>
        <div className={styles["icon-container"]}>
          <a
            href="https://www.instagram.com/thomaskimchi/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className={styles["icon"]} icon={faInstagram} />
          </a>
        </div>
        <div className={styles["icon-container"]}>
          <a
            href="https://express.adobe.com/page/ufaQdUjyweJU9/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className={styles["icon"]} icon={faBolt} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
