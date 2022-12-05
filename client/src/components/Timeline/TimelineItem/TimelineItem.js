import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./TimelineItem.scoped.scss";

const TimelineItem = (props) => {
  const responsibilities = props.responsibilities.map((item, i) => {
    return <li key={i}>{item}</li>;
  });

  return (
    <div className="timeline-item">
      <div
        className="icon-container"
        style={{ background: props.companyColor }}
      >
        <a href={props.link}>
          {props.iconType === "fa" ? (
            <FontAwesomeIcon icon={props.icon} className="icon" />
          ) : (
            <object
              cursor="pointer"
              data={props.icon}
              alt="logo"
              class="icon-custom"
            >
              logo
            </object>
          )}
        </a>
      </div>
      <div className="card">
        <h2>
          {props.title + " @ "}
          {/* <a style={{ color: props.companyColor }} href={props.link}>
            {props.company}
          </a> */}
          {props.company}
        </h2>
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
