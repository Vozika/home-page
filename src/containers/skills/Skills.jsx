import React from "react";
import "./skills.scss";
import { IconContext } from "react-icons";

const Skills = (props) => {
  return (
    <div className="skills">
      <IconContext.Provider value={{ color: "gray", size: 128 }}>
        {props.icon001}
        {props.icon002}
        {props.icon003}
        {props.icon004}
      </IconContext.Provider>
    </div>
  );
};

export default Skills;
