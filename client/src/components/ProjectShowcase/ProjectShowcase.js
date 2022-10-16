import React, { useState } from "react";

import ProjectShowcaseItem from "./ProjectShowcaseItem/ProjectShowcaseItem";
import ProjectShowcaseFilter from "./ProjectShowcaseFilter/ProjectShowcaseFilter";
import Projects from "./Projects";

import "./ProjectShowcase.scoped.scss";

const ProjectShowcase = () => {
  const [filter, setFilter] = useState("All");

  const onFilterSelect = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getProjects = (filter) => {
    return Projects.map((project, i) => {
      const projectComponent = (
        <ProjectShowcaseItem
          key={i}
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
      <ProjectShowcaseFilter onFilterSelect={onFilterSelect} />
      <div className="project-showcase-container">{getProjects(filter)}</div>
      <button onClick={scrollToTop}>Back to the Top</button>
    </>
  );
};

export default ProjectShowcase;
