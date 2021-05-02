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
    axios
      .get(apiCall)
      .then((res) => {
        const recent = res.data.cases_time_series.length - 1;
        // console.log(res.data.cases_time_series[recent].totalrecovered);
        setTotRecovered(res.data.cases_time_series[recent].totalrecovered);
        setTodayRecovered(res.data.cases_time_series[recent].dailyrecovered);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="recovered__container">
      <h5>Recovered</h5>
      <h4>+ {TodayRecovered}</h4>
      <h2>{TotRecovered}</h2>
    </div>
  );
}

export default Recovered;
