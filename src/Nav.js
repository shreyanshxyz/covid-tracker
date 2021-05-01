import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__left">
        <h2>Logo</h2>
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
