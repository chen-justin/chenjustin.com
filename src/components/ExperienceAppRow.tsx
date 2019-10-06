import React from "react";
import "./ExperienceAppRow.css";
import classNames from "classnames";

interface ExperienceAppRowProps {
  location: string;
  role: string;
  duration: string;
  iconurl: string;
  dark_icon: boolean;
  light_icon: boolean;
}

const ExperienceAppRow: React.FC<ExperienceAppRowProps> = props => {
  const { location, role, duration, iconurl, dark_icon, light_icon } = props;
  const iconClass = classNames({
    "App-Icon": true,
    "dark-icon": dark_icon,
    "light-icon": light_icon
  });
  return (
    <div className="ExperienceAppRow">
      <div className="ExperienceAppRow-Icon-Container">
        <img
          src={require("../" + iconurl)}
          className={iconClass}
          alt={location}
        />
      </div>
      <div className="ExperienceAppRow-Content">
        <div className="ExperienceAppRow-Location">{location}</div>
        <div className="ExperienceAppRow-Duration">{duration}</div>
        <div className="ExperienceAppRow-Role">{role}</div>
      </div>
    </div>
  );
};

export default ExperienceAppRow;
