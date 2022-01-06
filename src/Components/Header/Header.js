import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedinIn, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
const Header = () => {
  return (
    <div className="header-container">
      <Navbar></Navbar>
      <div className="welcome-section mt-5 text-center">
        <div className="welcome-text mx-auto d-block clear-fix">
          <h1 className=" mb-3">Arafat Hossain</h1>
          <p>I am a Professional Web Developer</p>
          <div className="social-links d-block mx-auto">
            <ul>
              <li>
                <a href="https://www.facebook.com/arafathossain.ar/">
                  <FontAwesomeIcon className="social-icon" icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/arafat-hossain-ah/"><FontAwesomeIcon className="social-icon" icon={faLinkedinIn} /></a>
              </li>
              <li>
                <a href="#"><FontAwesomeIcon className="social-icon" icon={faTwitter} /></a>
              </li>
              <li>
                <a href="https://github.com/Arafat447"><FontAwesomeIcon className="social-icon" icon={faGithub} /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
