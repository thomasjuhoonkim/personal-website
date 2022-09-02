import React from "react";

import Timeline from "../components/Timeline/Timeline";
import ProjectShowcase from "../components/ProjectShowcase/ProjectShowcase";

import "./Experiences.scoped.scss";

const Experiences = () => {
  return (
    <div className="experiences-container">
      <h1 className="experiences-title">where i've worked at</h1>
      <Timeline />
      <ProjectShowcase />
    </div>
  );
};

export default Experiences;
