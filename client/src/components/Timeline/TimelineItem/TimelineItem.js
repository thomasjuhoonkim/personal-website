import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./TimelineItem.scoped.scss";

const TimelineItem = (props) => {
  const responsibilities = props.responsibilities.map((item) => {
    return <li>{item}</li>;
  });

  return (
    <div className="timeline-item">
      <div className="icon-container">
        <a href={props.link}>
          <FontAwesomeIcon icon={props.icon} className="icon" />
        </a>
      </div>
      <div className="card">
        <h2>{props.title}</h2>
        <h3>{props.timeRange}</h3>
        <ul>{responsibilities}</ul>
        <p>
          <strong>Skills: </strong>
          {props.skills}
        </p>
      </div>
    </div>
  );
};

export default TimelineItem;
