import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Confirmed.css";

function Confirmed() {
  const apiCall = "https://api.covid19india.org/data.json";

  //   Confirmed Cases
  const [TotConfirmed, setTotConfirmed] = useState();
  const [TodayConfirmed, setTodayConfirmed] = useState();

  useEffect(() => {
    async function getData() {
      const caseRes = await axios.get(apiCall);

      const recent = caseRes.data.cases_time_series.length - 1;
      setTotConfirmed(caseRes.data.cases_time_series[recent].totalconfirmed);
      setTodayConfirmed(caseRes.data.cases_time_series[recent].dailyconfirmed);
    }

    getData();
    console.log(getData);
  });
  return (
    <div className="confirmed__container">
      <h5>Confirmed</h5>
      <h4>+ {TodayConfirmed}</h4>
      <h2>{TotConfirmed}</h2>
    </div>
  );
}

export default Confirmed;
