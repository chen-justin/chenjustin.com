import React from "react";
import "./ProjectAppRow.css";
import classNames from "classnames";

interface ProjectAppRowProps {
  title: string;
  blurb: string;
  iconurl: string;
  dark_icon: boolean;
  light_icon: boolean;
}

const ProjectAppRow: React.FC<ProjectAppRowProps> = props => {
  const { title, blurb, iconurl } = props;
  const iconClass = classNames({
    "App-Icon": true,
    "dark-icon": props.dark_icon,
    "light-icon": props.light_icon
  });
  return (
    <div
      className="ProjectAppRow"
      onClick={e => {
        //TODO: HANDLE APP CLICK
      }}
    >
      <div className="ProjectAppRow-Icon-Container">
        <img src={require("../" + iconurl)} className={iconClass} alt={title} />
      </div>
      <div className="ProjectAppRow-Content">
        <div className={"ProjectAppRow-Title"}>{title}</div>
        <div className="ProjectAppRow-Description">{blurb}</div>
      </div>
    </div>
  );
};

export default ProjectAppRow;
