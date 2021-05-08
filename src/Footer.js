import React from "react";
import "./Footer.css";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

function Footer() {
  return (
    <div className="footer__container">
      <p className="made__by"> &copy; Shreyansh Bhadoria | 2021 </p>
      <div className="social__media">
        <a href="https://github.com/shreyanshxyz/" target="_blank">
          <FiGithub className="footer__icon" />
        </a>
        <a href="https://www.linkedin.com/in/shreyanshxyz/" target="_blank">
          <FiLinkedin className="footer__icon" />
        </a>
        <a href="https://twitter.com/ayyshreyy" target="_blank">
          <FiTwitter className="footer__icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
