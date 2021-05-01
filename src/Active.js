import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Active.css";

function Active() {
  const apiCall = "https://api.covid19india.org/data.json";

  //   Deceased Cases
  const [TotDeceased, setTotDeceased] = useState();

  //   Confirmed Cases
  const [TotConfirmed, setTotConfirmed] = useState();

  //   Recovered Cases
  const [TotRecovered, setTotRecovered] = useState();

  //   Active Cases
  const [TotActive, setTotActive] = useState();

  useEffect(() => {
    axios
      .get(apiCall)
      .then((res) => {
        const recent = res.data.cases_time_series.length - 1;
        console.log(res.data.cases_time_series[recent].totalrecovered);
        //   Deceased Cases
        setTotDeceased(res.data.cases_time_series[recent].totaldeceased);

        //   Confirmed Cases
        setTotConfirmed(res.data.cases_time_series[recent].totalconfirmed);

        //   Recovered Cases
        setTotRecovered(res.data.cases_time_series[recent].totalrecovered);
        setTotActive(TotConfirmed - TotDeceased - TotRecovered);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="active__container">
      <h5>Active</h5>
      <h2>{TotActive}</h2>
    </div>
  );
}

export default Active;
