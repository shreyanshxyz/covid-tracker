import React from "react";
import "./Nav.css";
import Logo from "./images/cTracker.png";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__left">
        <img className="nav__logo" src={Logo} alt="logo"></img>
      </div>

      <div className="nav__right">
        <a href="#">About</a>
        <a href="#">Resources</a>
      </div>
    </div>
  );
}

export default Nav;
