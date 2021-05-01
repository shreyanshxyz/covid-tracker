import React from "react";
import "./Cases.css";
import Confirmed from "./Confirmed";
import Deceased from "./Deceased";
import Recovered from "./Recovered";

function Cases() {
  return (
    <div className="cases__main">
      <div>
        <Confirmed />
      </div>
      <div>Active</div>
      <div>
        <Recovered />
      </div>
      <div>
        <Deceased />
      </div>
    </div>
  );
}

export default Cases;
