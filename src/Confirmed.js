import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Confirmed.css";

function Confirmed() {
  const apiCall = "https://api.covid19india.org/data.json";

  //   Confirmed Cases
  const [TotConfirmed, setTotConfirmed] = useState();
  const [TodayConfirmed, setTodayConfirmed] = useState();

  useEffect(() => {
    axios
      .get(apiCall)
      .then((res) => {
        const recent = res.data.cases_time_series.length - 1;
        console.log(res.data.cases_time_series[recent].totalconfirmed);
        setTotConfirmed(res.data.cases_time_series[recent].totalconfirmed);
        setTodayConfirmed(res.data.cases_time_series[recent].dailyconfirmed);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="confirmed__container">
      <h5>Confirmed</h5>
      <h4>+ {TodayConfirmed}</h4>
      <h2>{TotConfirmed}</h2>
    </div>
  );
}

export default Confirmed;
