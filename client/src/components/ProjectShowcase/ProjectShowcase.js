import React, { useState } from "react";

import ProjectShowcaseItem from "./ProjectShowcaseItem/ProjectShowcaseItem";
import ProjectShowcaseFilter from "./ProjectShowcaseFilter/ProjectShowcaseFilter";
import Projects from "./Projects";
import { AnimatePresence } from "framer-motion";

import "./ProjectShowcase.scoped.scss";

const ProjectShowcase = () => {
  const [filter, setFilter] = useState("All");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getProjects = () => {
    return Projects.map((project, i) => {
      const projectComponent = (
        <ProjectShowcaseItem
          key={filter + String(i)}
          img={project.img}
          imgStyle={project.imgStyle}
          title={project.title}
          description={project.description}
          skills={project.skills}
          link={project.link}
        />
      );
      if (filter === "All") return projectComponent;
      if (project.skillsArray.includes(filter)) return projectComponent;
      return null;
    });
  };

  return (
    <>
      <ProjectShowcaseFilter filter={filter} setFilter={setFilter} />
      <div className="project-showcase-container">
        <AnimatePresence>{getProjects()}</AnimatePresence>
      </div>
      <button onClick={scrollToTop}>Back to the Top</button>
    </>
  );
};

export default ProjectShowcase;
