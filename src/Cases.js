import React from "react";
import Active from "./Active";
import "./Cases.css";
import Confirmed from "./Confirmed";
import Deceased from "./Deceased";
import Recovered from "./Recovered";
import { Card } from "@material-ui/core";

function Cases() {
  return (
    <div className="cases__main">
      <Card className="confirmed__cases">
        <Confirmed />
      </Card>
      <Card className="active__cases">
        <Active />
      </Card>
      <Card className="recovered__cases">
        <Recovered />
      </Card>
      <Card className="deceased__cases">
        <Deceased />
      </Card>
    </div>
  );
}

export default Cases;
