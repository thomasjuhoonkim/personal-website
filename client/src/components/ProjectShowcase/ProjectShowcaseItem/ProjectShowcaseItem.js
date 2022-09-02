import React from "react";

import "./ProjectShowcaseItem.scoped.scss";

const ProjectShowcaseItem = (props) => {
  return (
    <div className="project-showcase-item-container">
      <a href={props.link} target="_blank" rel="noreferrer">
        <div className="image-container">
          <img
            src={props.img}
            alt="Side-project preview"
            style={props.imgStyle}
          />
        </div>
        <div className="text-container">
          <h4>{props.title}</h4>
          <p>{props.description}</p>
          <p>
            <strong>Skills: </strong>
            {props.skills}
          </p>
        </div>
      </a>
    </div>
  );
};

export default ProjectShowcaseItem;
