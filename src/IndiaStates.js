import React, { useEffect, useState } from "react";
import axios from "axios";
import "./IndiaStates.css";

function IndiaStates() {
  const apiCall = "https://api.covid19india.org/data.json";
  const [States, setStates] = useState([]);

  useEffect(() => {
    axios
      .get(apiCall)
      .then((res) => {
        console.log(res.data.statewise);
        setStates(res.data.statewise);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="state__dropdown">
      <select className="drop__original">
        {States.map((s) => (
          <option key={s.statecode}>{s.state}</option>
        ))}
      </select>
    </div>
  );
}

export default IndiaStates;
