import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
// import { faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faPaperPlane,
  faFileAlt,
  faEnvelope
} from "@fortawesome/free-regular-svg-icons";
import "./Site.css";
import * as projectData from "./data/projects.json";
import * as experienceData from "./data/experience.json";
import ProjectAppRow from "./components/ProjectAppRow";
import ExperienceAppRow from "./components/ExperienceAppRow";

const Site: React.FC = () => {
  const projects = projectData["projects"];
  const experiences = experienceData["experiences"];

  return (
    <div className="site-container">
      <div className="site">
        <div className="hero-container">
          <header className="site-header">
            <div className="site-title">Justin Chen</div>
          </header>
          <div className="hero">
            <div className="hero-image"></div>
            <div className="hero-content">
              <div className="hero-title">About Me</div>
              <div className="hero-text">
                I'm a software developer and student at the University of
                Maryland pursuing a major in Computer Science.
              </div>
              <div className="hero-links">
                <div className="icon-container">
                  <a href={"mailto:jnzheng8@gmail.com"} target={"_blank"}>
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                  </a>
                  <div className="icon-subtitle">Email</div>
                </div>
                <div className="icon-container">
                  <a href={"https://github.com/chen-justin"} target={"_blank"}>
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                  </a>
                  <div className="icon-subtitle">Github</div>
                </div>
                <div className="icon-container">
                  <a
                    href={"https://www.linkedin.com/in/chen-justin/"}
                    target={"_blank"}
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
                  </a>
                  <div className="icon-subtitle">LinkedIn</div>
                </div>
                <div className="icon-container">
                  <a href={"./resume"} target={"_blank"}>
                    <FontAwesomeIcon icon={faFileAlt} className="icon" />
                  </a>
                  <div className="icon-subtitle">Resume</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-body">
          <div className="Category">
            <div className="Category-Title">Experience</div>
            {experiences.map(experience => (
              <ExperienceAppRow key={experience.location} {...experience} />
            ))}
          </div>
          <div className="Category">
            <div className="Category-Title">Projects</div>
            {projects.map(project => (
              <ProjectAppRow key={project.title} {...project} />
            ))}
          </div>
        </div>
        <footer>Made by Justin Chen © 2019</footer>
      </div>
    </div>
  );
};

export default Site;
