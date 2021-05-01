import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Deceased.css";

function Deceased() {
  const apiCall = "https://api.covid19india.org/data.json";

  //   Deceased Cases
  const [TotDeceased, setTotDeceased] = useState();
  const [TodayDeceased, setTodayDeceased] = useState();

  useEffect(() => {
    axios
      .get(apiCall)
      .then((res) => {
        const recent = res.data.cases_time_series.length - 1;
        console.log(res.data.cases_time_series[recent].totaldeceased);
        setTotDeceased(res.data.cases_time_series[recent].totaldeceased);
        setTodayDeceased(res.data.cases_time_series[recent].dailydeceased);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="deceased__container">
      <h5>Deceased</h5>
      <h4>+ {TodayDeceased}</h4>
      <h2>{TotDeceased}</h2>
    </div>
  );
}

export default Deceased;
