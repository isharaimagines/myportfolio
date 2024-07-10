import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("#home"); // State to track active link

  const handleClick = (to) => {
    setActiveLink(to); // Set active link when clicked
  };

  return (
    <div className="nav_head">
      <Router>
        <ul className="navbar">
          <li className={activeLink === "#home" ? "active" : ""}>
            <HashLink exact to="#home" onClick={() => handleClick("#home")}>
              <i className="ri-home-line"></i>
              <h3>Home</h3>
            </HashLink>
          </li>
          <li className={activeLink === "#expert" ? "active" : ""}>
            <HashLink
              smooth
              to="#expert"
              onClick={() => handleClick("#expert")}
            >
              <i className="ri-verified-badge-line"></i>
              <h3>Expertise</h3>
            </HashLink>
          </li>
          <li className={activeLink === "#projects" ? "active" : ""}>
            <HashLink
              smooth
              to="#projects"
              onClick={() => handleClick("#projects")}
            >
              <i className="ri-pencil-ruler-2-line"></i>
              <h3>Projects</h3>
            </HashLink>
          </li>
          <li className={activeLink === "#experience" ? "active" : ""}>
            <HashLink
              smooth
              to="#projects"
              onClick={() => handleClick("#experience")}
            >
              <i className="ri-wireless-charging-line"></i>
              <h3>Experience</h3>
            </HashLink>
          </li>
          <li className={activeLink === "#connect" ? "active" : ""}>
            <HashLink
              smooth
              to="#connect"
              onClick={() => handleClick("#connect")}
            >
              <i className="ri-link"></i>
              <h3>Contact</h3>
            </HashLink>
          </li>
        </ul>
      </Router>
    </div>
  );
};
