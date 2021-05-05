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
        <h2>About</h2>
        <h2>Resources</h2>
        <h2>Dark</h2>
      </div>
    </div>
  );
}

export default Nav;
