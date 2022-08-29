import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faSpotify,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

import "./Footer.scoped.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="credits">Made with React and Sleepless Nights</p>
      <div className="social-media-container">
        <div className="icon-container">
          <a
            href="https://www.linkedin.com/in/thomasjuhoonkim/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
          </a>
        </div>
        <div className="icon-container">
          <a
            href="https://github.com/thomasjuhoonkim"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faGithub} />
          </a>
        </div>
        <div className="icon-container">
          <a
            href="https://open.spotify.com/user/ouko5ky8buyt5ck6hfi0yig4a?si=d466f4c76bc640f2"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faSpotify} />
          </a>
        </div>
        <div className="icon-container">
          <a
            href="https://www.instagram.com/thomaskimchi/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faInstagram} />
          </a>
        </div>
        <div className="icon-container">
          <a
            href="https://express.adobe.com/page/ufaQdUjyweJU9/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faBolt} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
