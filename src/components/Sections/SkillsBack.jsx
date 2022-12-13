import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  skillContent:
    "",
  progressData: [
    {
      id: 1,
      name: "PHP",
      percentage: 80,
    },
    {
      id: 2,
      name: "JAVASCRIPT",
      percentage: 90,
    },
    {
      id: 3,
      name: "TYPESCRIPT",
      percentage: 60,
    },
    {
      id: 4,
      name: "C#" ,
      percentage: 70,
    },
    {
      id: 5,
      name: "Visual basic" ,
      percentage: 70,
    },
    {
      id: 6,
      name: "JAVA" ,
      percentage: 70,
    },
    {
      id: 7,
      name: "SQL SERVER" ,
      percentage: 70,
    },
    {
      id: 8,
      name: "MYSQL" ,
      percentage: 70,
    },
    {
      id: 9,
      name: "HTML,CSS" ,
      percentage: 70,
    },
    {
      id: 10,
      name: "Go" ,
      percentage: 70,
    },
  ],
};

function SkillsBack() {
  return (
    <>
      <p className="mb-0">{skillData.skillContent}</p>
      <div className="mt-5">
        <div className="row -mt-50">
          {skillData.progressData.map((progress) => (
            <div className="col-md-6 mt-50" key={progress.id}>
              <TrackVisibility once>
                <Skill progress={progress} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SkillsBack;
