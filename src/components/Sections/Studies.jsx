import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "2014 - 2017",
    degree: "Systems Analyst",
    title: "IFTS 21",
    content:
      "Systems Analyst title",
  },
  {
    id: 1,
    year: "2012 - 2014",
    degree: "Systems Analyst Engineer",
    title: "FIUBA",
    content:
      "Systems Analyst middle title - career not finished",
  },
];

function Studies() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Studies;
