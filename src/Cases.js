import React from "react";
import Active from "./Active";
import "./Cases.css";
import Confirmed from "./Confirmed";
import Deceased from "./Deceased";
import Recovered from "./Recovered";

function Cases() {
  return (
    <div className="cases__main">
      <div className="confirmed__cases">
        <Confirmed />
      </div>
      <div className="active__cases">
        <Active />
      </div>
      <div className="recovered__cases">
        <Recovered />
      </div>
      <div className="deceased__cases">
        <Deceased />
      </div>
    </div>
  );
}

export default Cases;
