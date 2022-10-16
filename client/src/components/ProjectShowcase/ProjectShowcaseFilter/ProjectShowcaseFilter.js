import React, { useState } from "react";

import "./ProjectShowcaseFilter.scoped.scss";

const ProjectShowcaseFilter = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = [
    "All",
    "Python",
    "C++",
    "React",
    "Node",
    "Express",
    "MySQL",
    "PostgreSQL",
    "Heroku",
    "Firebase",
  ];

  const getFilters = () => {
    return filters.map((filter, i) => {
      return (
        <button
          onClick={handleClick}
          className={
            filter === selectedFilter
              ? "filter-button filter-button-selected"
              : "filter-button"
          }
          key={i}
        >
          {filter}
        </button>
      );
    });
  };

  const handleClick = (e) => {
    props.onFilterSelect(e.target.innerHTML);
    setSelectedFilter(e.target.innerHTML);
  };

  return <div className="project-showcase-filter">{getFilters()}</div>;
};

export default ProjectShowcaseFilter;
