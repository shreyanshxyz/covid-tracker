import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Recovered.css";

function Recovered() {
  const apiCall = "https://api.covid19india.org/data.json";

  //   Recovered Cases
  const [TotRecovered, setTotRecovered] = useState();
  const [TodayRecovered, setTodayRecovered] = useState();

  useEffect(() => {
    async function getData() {
      const caseRes = await axios.get(apiCall);

      const recent = caseRes.data.cases_time_series.length - 1;
      setTotRecovered(caseRes.data.cases_time_series[recent].totalrecovered);
      setTodayRecovered(caseRes.data.cases_time_series[recent].dailyrecovered);
    }

    getData();
    console.log(getData);
  });
  return (
    <div className="recovered__container">
      <h5>Recovered</h5>
      <h4>+ {TodayRecovered}</h4>
      <h2>{TotRecovered}</h2>
    </div>
  );
}

export default Recovered;
