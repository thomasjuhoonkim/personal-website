import React from "react";

import "./ProjectShowcaseFilter.scoped.scss";

const ProjectShowcaseFilter = ({ filter, setFilter }) => {
  const filtersArray = [
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
    return filtersArray.map((filterItem, i) => {
      return (
        <button
          onClick={(e) => setFilter(e.target.innerHTML)}
          className={
            filterItem === filter
              ? "filter-button filter-button-selected"
              : "filter-button"
          }
          key={i}
        >
          {filterItem}
        </button>
      );
    });
  };

  return <div className="project-showcase-filter">{getFilters()}</div>;
};

export default ProjectShowcaseFilter;
