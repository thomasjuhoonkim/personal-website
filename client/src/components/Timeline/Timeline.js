import React from "react";

import TimelineItem from "./TimelineItem/TimelineItem";
import Experiences from "./Experiences";

import "./Timeline.scoped.scss";

const Timeline = () => {
  const getExperiences = () => {
    return Experiences.map((experience, i) => {
      return (
        <TimelineItem
          key={i}
          icon={experience.icon}
          iconType={experience.iconType}
          title={experience.title}
          company={experience.company}
          companyColor={experience.companyColor}
          location={experience.location}
          timeRange={experience.timeRange}
          responsibilities={experience.responsibilities}
          skills={experience.skills}
          link={experience.link}
        />
      );
    });
  };

  return (
    <div className="timeline">
      <div className="vertical-line" />
      {getExperiences()}
    </div>
  );
};

export default Timeline;
