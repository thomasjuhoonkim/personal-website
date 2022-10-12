import React from "react";
import { Link } from "react-router-dom";

import Timeline from "../components/Timeline/Timeline";
import ProjectShowcase from "../components/ProjectShowcase/ProjectShowcase";

import "./Experiences.scoped.scss";

const Experiences = () => {
  return (
    <div className="experiences-container">
      <h1 className="experiences-title">Work Experience</h1>
      <Timeline />
      <div className="download-container">
        <h3 className="download-heading">Feel free to download my resume!</h3>
        <Link
          className="download-button"
          to="/assets/Thomas-Kim-Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Download
        </Link>
      </div>
      <h1 className="project-title">Side Projects</h1>
      <ProjectShowcase />
    </div>
  );
};

export default Experiences;
