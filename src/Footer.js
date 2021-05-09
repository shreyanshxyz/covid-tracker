import React from "react";
import "./Footer.css";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

function Footer() {
  return (
    <div className="footer__container">
      <p className="made__by"> &copy; Shreyansh Bhadoria | 2021 </p>
      <div className="social__media">
        <a
          href="https://github.com/shreyanshxyz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub className="footer__icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/shreyanshxyz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin className="footer__icon" />
        </a>
        <a
          href="https://twitter.com/ayyshreyy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiTwitter className="footer__icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
