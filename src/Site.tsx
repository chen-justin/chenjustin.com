import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
// import { faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane, faFileAlt, faEnvelope} from '@fortawesome/free-regular-svg-icons'
import './Site.css';

const Site: React.FC = () => {
  return (
    <div className="site-wrapper">
      <div className="site">
        <div className="title">
          Justin Chen
        </div>
        <div className="site-content-wrapper">
          <header className="site-header">
            <div className="hero">
              <div className="hero-image"/>
              <div className="hero-content-wrapper">
                <div className="hero-content">
                  <img className="hero-avatar" src={require('./images/justin_avatar.jpg')} alt="Justin Chen"/>
                  <div className="about-me">
                    <div className="hero-title">
                      About Me
                    </div>
                    <div className="hero-content-text">
                      I'm a software developer and student at the University of Maryland pursuing a major in Computer Science.
                    </div>
                  </div>
                </div>
                <div className="divider"/>
                <div className="hero-links">
                  <div className="icon-wrapper">
                    <button>
                      <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                    </button>
                    <div className="icon-subtitle">
                      Email
                    </div>
                  </div>
                  <div className="icon-wrapper">
                    <button>
                      <FontAwesomeIcon icon={faGithub} className="icon"/>
                    </button>
                    <div className="icon-subtitle">
                      Github
                    </div>
                  </div>
                  <div className="icon-wrapper">
                    <button>
                      <FontAwesomeIcon icon={faLinkedinIn} className="icon"/>
                    </button>
                    <div className="icon-subtitle">
                      LinkedIn
                    </div>
                  </div>
                  <div className="icon-wrapper">
                    <button>
                      <FontAwesomeIcon icon={faFileAlt} className="icon"/>
                    </button>
                    <div className="icon-subtitle">
                      Resume
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="site-body">
            <div className="experience">
              <div className="category-title">
                Experience
              </div>
              <div className="card">
                <img src={require('./images/apl_icon.jpg')} className="card-image" alt="JHUAPL"/>
                <div className="card-content">
                  <div className="card-header">
                    <div className="card-title">
                      Johns Hopkins Applied Physics Laboratory
                      <div className="card-subtitle">
                        Software Engineering Intern
                      </div>
                    </div>
                    <div className="card-aux">
                      Jun. 2019 - Aug 2019
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-description">
                      I worked at Johns Hopkins APL for the summer of 2019.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider"/>
            <div className="Projects">
              <div className="category-title">
                Projects
              </div>
              <div className="cards">
                <div className="card">
                  <img src={require('./images/umdio_icon.png')} className="card-image" alt="UMD.io"/>
                  <div className="card-content">
                    <div className="card-title">
                      umd.io
                    </div>
                    <div className="card-body">
                      <div className="card-description">
                        An API by UMD students for UMD students.
                      </div>
                    </div>
                    <div className="card-divider"/>
                  </div>
                </div>
                <div className="card">
                  <img src={require('./images/2048_logo.svg')} className="card-image" alt="2048"/>
                  <div className="card-content">
                    <div className="card-title">
                      2048
                    </div>
                    <div className="card-body">
                      <div className="card-description">
                        A generalized version of 2048 written in iOS.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Site;
